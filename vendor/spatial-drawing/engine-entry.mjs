/* Shared approved image-plane editor; dependency notices in LICENSES.txt.
   Cartesian circle and nearest segment adaptations preserve the existing gestures. */
import {Deck, COORDINATE_SYSTEM, OrthographicView, OrthographicViewport} from '@deck.gl/core';
import {EditableGeoJsonLayer, DrawPolygonMode, DrawRectangleMode, DrawCircleFromCenterMode, DrawPolygonByDraggingMode, CompositeMode, TranslateMode, ModifyMode} from '@deck.gl-community/editable-layers';
const G=window.SpatialGeometry;
class ImageCircleMode extends DrawCircleFromCenterMode {
 getTwoClickPolygon(a,b,config){return {type:'Feature',properties:{shape:'Circle'},geometry:G.circle(a,b,config?.steps||64)}}
}
class ImageModifyMode extends ModifyMode {getNearestPoint(line,point){return G.nearestImageSegment(line,point)}}
class ImageEditableLayer extends EditableGeoJsonLayer {static layerName='ImageEditableLayer';createTooltipsLayers(){return []}}
const modes={polygon:DrawPolygonMode,rectangle:DrawRectangleMode,ellipse:ImageCircleMode,lasso:DrawPolygonByDraggingMode};
const fc=features=>({type:'FeatureCollection',features});
window.PacomSpatialDrawing={
 mount(host,options){
  let deck,disposed=false,geometry=options.geometry?G.copy(options.geometry):null;
  let history=options.history?G.copy(options.history.entries):[geometry?G.copy(geometry):null],historyIndex=options.history?.index||0,cursor='crosshair';
  const editable=!!geometry;
  const mode=editable?new CompositeMode([new TranslateMode(),new ImageModifyMode()]):new modes[options.tool]();
  function syncHistory(){options.onHistory?.(historyIndex>0||!editable&&(mode.getClickSequence?.().length||0)>0,{entries:G.copy(history),index:historyIndex})}
  function finish(g,type){
   if(disposed)return;
   geometry=g; redraw();
   if(['addFeature','translated','finishMovePosition','addPosition','removePosition'].includes(type)){
    const before=history[historyIndex];
    if(JSON.stringify(before)!==JSON.stringify(g)){history=history.slice(0,historyIndex+1);history.push(G.copy(g));historyIndex++}
    syncHistory();
   }
   if(type==='addFeature'){options.onComplete?.(G.copy(g));return}
   options.onChange?.(G.copy(g),type);
  }
  function redraw(){
   if(disposed)return;
   const width=host.clientWidth,height=host.clientHeight;
   if(!width||!height)return;
   const asset={width,height}, viewport=new OrthographicViewport({width,height,target:[width/2,height/2,0],zoom:0,flipY:true});
   const invalid=geometry&&!!G.error(geometry),color=invalid?[224,69,77]:[0,174,239];
   const layer=new ImageEditableLayer({id:'space-image-editor',data:fc(geometry?[{type:'Feature',properties:{},geometry:G.toPixels(geometry,asset)}]:[]),coordinateSystem:COORDINATE_SYSTEM.CARTESIAN,billboard:false,mode,modeConfig:{viewport,screenSpace:true},selectedFeatureIndexes:editable&&geometry?[0]:[],pickable:true,getLineColor:color,getFillColor:[...color,20],getTentativeLineColor:[0,174,239],getTentativeFillColor:[0,174,239,20],getEditHandlePointColor:[255,255,255],getEditHandlePointOutlineColor:color,editHandlePointStrokeWidth:2,getEditHandlePointRadius:4,getLineWidth:2,lineWidthUnits:'pixels',onUpdateCursor:c=>{cursor=c||'crosshair'},onEdit:({updatedData,editType})=>{
    if(editType.includes('Tentative')){options.onDrawing?.(true);return}
    if(editType==='cancelFeature'){options.onDrawing?.(false);return}
    const feature=updatedData.features.at(-1);if(feature)finish(G.fromPixels(feature.geometry,asset),editType);
    if(['addFeature','translated','finishMovePosition'].includes(editType))options.onDrawing?.(false);
   }});
   const props={width,height,views:new OrthographicView({id:'space-image',flipY:true}),viewState:{target:[width/2,height/2,0],zoom:0},controller:{doubleClickZoom:false,scrollZoom:false,dragPan:false,touchZoom:false,keyboard:false},layers:[layer],getCursor:()=>cursor,pickingRadius:8};
   if(deck)deck.setProps(props);
   else deck=new Deck({...props,parent:host,style:{position:'absolute',inset:'0'},useDevicePixels:true,onError:()=>options.onError?.('绘制工具暂不可用，请重新加载')});
  }
  const clicked=()=>{if(!editable){options.onDrawing?.(true);requestAnimationFrame(()=>{if(!disposed)syncHistory()})}};
  host.addEventListener('pointerdown',clicked,true);
  const ro=new ResizeObserver(redraw);ro.observe(host);redraw();syncHistory();
  return {
   undo(){if(!historyIndex){const seq=mode.getClickSequence?.();if(seq?.length){seq.pop();redraw();syncHistory();options.onDrawing?.(seq.length>0)}return;}geometry=history[--historyIndex]?G.copy(history[historyIndex]):null;redraw();syncHistory();if(geometry)options.onChange?.(G.copy(geometry),'undo')},
   finish(){if(editable)return;const seq=(mode.getClickSequence?.()||[]).filter((p,i,a)=>!i||Math.hypot(p[0]-a[i-1][0],p[1]-a[i-1][1])>.01);if(seq.length<3)return false;const r=seq.map(p=>[...p]);r.push([...r[0]]);finish(G.fromPixels({type:'Polygon',coordinates:[r]},{width:host.clientWidth,height:host.clientHeight}),'addFeature');return true},
   cancel(){mode.resetClickSequence?.();options.onDrawing?.(false);redraw()},
   dispose(){disposed=true;ro.disconnect();host.removeEventListener('pointerdown',clicked,true);deck?.finalize();deck=null},
   get geometry(){return geometry?G.copy(geometry):null}
  };
 }
};
