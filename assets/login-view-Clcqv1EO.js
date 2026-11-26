(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))a(v);new MutationObserver(v=>{for(const x of v)if(x.type==="childList")for(const C of x.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&a(C)}).observe(document,{childList:!0,subtree:!0});function i(v){const x={};return v.integrity&&(x.integrity=v.integrity),v.referrerPolicy&&(x.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?x.credentials="include":v.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function a(v){if(v.ep)return;v.ep=!0;const x=i(v);fetch(v.href,x)}})();const W={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},Ke={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"layout-dashboard":'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',waypoints:'<circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',"key-round":'<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',"file-text":'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'};function Ge(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function U(e,o=16,i=""){const a=Ge(o);return`<svg${i?` class="${i}"`:""} width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${Ke[e]}</svg>`}let Me={level:"floor",projectId:W.projectId,buildingId:W.buildingId,floorId:W.floorId};function _e(){return Me}function ze(e){return Me=e,Me}function ce(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Pe(e){const o=e.trim().toUpperCase();if(o==="RF"||o==="R"||o==="ROOF"||o.includes("屋面"))return 999;const i=o.match(/(-?\d+)/);if(!i)return 0;const a=Number(i[1]);return o.startsWith("B")?-Math.abs(a):a}function Ye(e){if(e==="all")return{level:"all-projects"};const o=e.split(":");return o[0]==="project"&&o[1]?{level:"project",projectId:o[1]}:o[0]==="building"&&o[1]&&o[2]?{level:"building",projectId:o[1],buildingId:o[2]}:o[0]==="floor"&&o[1]&&o[2]&&o[3]?{level:"floor",projectId:o[1],buildingId:o[2],floorId:o[3]}:{level:"project",projectId:W.projectId}}function Xe(e,o,i){return i==="project"?e.level==="all-projects"?{level:"project",projectId:o.projects[0]?.id??W.projectId}:{level:"project",projectId:e.projectId}:i==="building"&&e.level==="floor"?{level:"building",projectId:e.projectId,buildingId:e.buildingId}:e}function Fe(e){const{tree:o,session:i,isOpen:a,searchKeyword:v}=e;if(o.projects.length===0)return'<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap"><span class="pacom-path-trigger is-static"><span class="pacom-path-muted">暂无项目</span></span></div>';const x=e.maxGranularity??"floor",C=e.activeAlarmCount??0,q=i.scope.allowedZoneIds?.length?i.scope.allowedZoneIds:null,_=o.floors.filter(g=>i.scope.allowedFloorIds.includes(g.id)),I=q||o.projects.length<=1&&o.buildings.length<=1&&_.length<=1?"floors-only":o.projects.length>1?"multi-project":o.buildings.length>1?"single-project-multi-building":"single-building",Z=I==="multi-project"&&x!=="project",J=I==="multi-project"||I==="single-project-multi-building",P=I!=="floors-only"&&x!=="project",y=x==="project"&&o.projects.length<=1||I==="floors-only"&&_.length<=1,$=Xe(e.scope??Me,o,x),S=$.level==="all-projects"?null:o.projects.find(g=>g.id===$.projectId)??o.projects[0],E=$.level==="building"||$.level==="floor"?o.buildings.find(g=>g.id===$.buildingId):null,K=$.level==="floor"?o.floors.find(g=>g.id===$.floorId):null,H=[];if($.level==="all-projects")H.push(`全部项目（${o.projects.length}）`);else if($.level==="project")H.push(ce(S?.name??"广实2号园"));else if($.level==="building")S&&H.push(`<span class="pacom-path-muted">${ce(S.name)}</span>`),H.push(ce(E?.name??"E栋"));else{S&&I!=="floors-only"&&H.push(`<span class="pacom-path-muted">${ce(S.name)}</span>`),E&&P&&H.push(`<span class="pacom-path-muted">${ce(E.name)}</span>`);const g=!P&&E?`${E.name} ${K?.name??"7F"}`:K?.name??"7F";H.push(ce(g))}const G='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',Y=y?`<span class="pacom-path-trigger is-static">${H.join(G)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${a}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${H.join(G)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${U("chevron-down",12)}</span>
      </button>`;if(!a||y)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${Y}</div>`;const re=v.trim().toLowerCase(),de=$.level==="all-projects"?o.projects[0]?.id??W.projectId:$.projectId,ne=$.level==="building"||$.level==="floor"?$.buildingId:o.buildings.find(g=>g.projectId===de)?.id??W.buildingId,te=o.projects.filter(g=>!re||g.name.toLowerCase().includes(re)),L=o.buildings.filter(g=>g.projectId===de&&(!re||g.name.toLowerCase().includes(re))),B=[...o.floors.filter(g=>g.buildingId===ne)].sort((g,R)=>Pe(R.name)-Pe(g.name)).filter(g=>!re||g.name.toLowerCase().includes(re)),ee=x==="project"||o.projects.length>1,z=x!=="project"&&J,me=x==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${Y}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${U("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${ce(v)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${U("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${ee?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${Z?`<button type="button" class="pacom-space-pop-item ${$.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${o.projects.length}）</span>
                        ${$.level==="all-projects"?U("check",14):""}
                      </button>`:""}
                ${te.map(g=>{const R=$.level==="project"&&$.projectId===g.id;return`<button type="button" class="pacom-space-pop-item ${R?"is-active":""}" data-global-space-pick="project:${ce(g.id)}">
                      <span>${ce(g.name)}</span>
                      ${R?U("check",14):U("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${z?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${ce(o.projects.find(g=>g.id===de)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${$.level==="project"?"is-active":""}" data-global-space-pick="project:${ce(de)}">
                  <span>全园区</span>
                  ${$.level==="project"?U("check",14):""}
                </button>
                ${L.map(g=>{const R=$.level==="building"&&$.buildingId===g.id;return`<button type="button" class="pacom-space-pop-item ${R?"is-active":""}" data-global-space-pick="building:${ce(g.projectId)}:${ce(g.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${ce(g.name)}</span>
                        ${g.id===W.buildingId&&C>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${R?U("check",14):U("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${me?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${ce(o.buildings.find(g=>g.id===ne)?.name??"楼宇")} · 楼层</div>
                ${P?`<button type="button" class="pacom-space-pop-item ${$.level==="building"&&$.buildingId===ne?"is-active":""}" data-global-space-pick="building:${ce(de)}:${ce(ne)}">
                        <span>整栋</span>
                        ${$.level==="building"&&$.buildingId===ne?U("check",14):""}
                      </button>`:""}
                ${B.map(g=>{const R=i.scope.allowedFloorIds.includes(g.id),se=$.level==="floor"&&$.floorId===g.id,M=g.id===W.floorId&&C>0;return`<button type="button" class="pacom-space-pop-item ${se?"is-active":""}" style="${R?"":"opacity:0.5;"}" data-global-space-pick="floor:${ce(de)}:${ce(ne)}:${ce(g.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${ce(g.name)}</span>
                        ${M?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${se?U("check",14):R?g.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function He(e,o){e.querySelectorAll("[data-global-space-toggle]").forEach(a=>{a.addEventListener("click",v=>{v.stopPropagation(),o.onToggle()})}),e.querySelector("[data-global-space-search]")?.addEventListener("input",a=>{o.onSearch(a.currentTarget.value)}),e.querySelectorAll("[data-global-space-pick]").forEach(a=>{a.addEventListener("click",v=>{v.stopPropagation();const x=a.dataset.globalSpacePick;if(!x)return;const C=ze(Ye(x));o.onPick(C)})})}function k(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const Qe=U("chevron-down",12),je=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],Ee=[{id:W.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:W.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:W.projectId,label:"广实2号园（全园区）",factor:18.2}],Je={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},et=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],be=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function Ae(e,o=""){const i=(e??"").trim().toLowerCase();return!(!i||i.includes("%")||i.includes("°c")||i.includes("ppm")||i.includes("ms")||i.includes("m²")||i.includes("/m2")||i.includes("db")||i.includes("lx")||o.includes("率")||o.includes("均")||o.includes("强度")||o.includes("延迟"))}function Le(e,o){const i=e*o;return Math.abs(i)>=10?Math.round(i):Math.round(i*10)/10}function tt(e,o){const i=Number(String(e).replaceAll(",","")),a=o??"";return Number.isFinite(i)?a==="kWh"&&Math.abs(i)>=1e4?{value:(i/1e3).toFixed(1),unit:"MWh",title:`精确值：${i.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(i)?i.toLocaleString("en-US"):i.toLocaleString("en-US",{maximumFractionDigits:1}),unit:a,title:`${i.toLocaleString("en-US")} ${a}`.trim()}:{value:e,unit:a,title:`${e} ${a}`.trim()}}function at(e,o){if(o===1)return e;const i=Ae(e.unit);return{...e,kpis:e.kpis.map(a=>{const v=Number(String(a.value).replaceAll(",",""));return!Number.isFinite(v)||!Ae(a.unit,a.label)?a:{...a,value:String(Le(v,o))}}),series:i?e.series.map(a=>({...a,value:Le(a.value,o),...typeof a.baseline=="number"?{baseline:Le(a.baseline,o)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(a=>Ae(a.unit)?{...a,value:Le(a.value,o)}:a)}}function ot(e,o){const i=Math.max(...e.series.map(P=>Math.max(P.value,P.baseline??0)),1),a=46,v=34,x=36,C=Math.max(e.series.length*(a+v)+x*2,620),q=228,_=184,I=132,Z=[0,.25,.5,.75,1].map(P=>{const y=Math.round(_-P*I);return`<line x1="${x-8}" y1="${y}" x2="${C-18}" y2="${y}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${P===0?"0":"3 3"}" />`}).join(""),J=e.series.map((P,y)=>{const $=x+y*(a+v),S=Math.max(8,Math.round(P.value/i*I)),E=_-S,K=typeof P.baseline=="number"&&P.value>P.baseline*1.08,H=K?`<rect x="${$-8}" y="34" width="${a+16}" height="${_-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",G=typeof P.baseline=="number"?`<line x1="${$-5}" y1="${Math.round(_-P.baseline/i*I)}" x2="${$+a+5}" y2="${Math.round(_-P.baseline/i*I)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",Y=o&&(K||y===1)?`<g><title>${K?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${$+a/2}" cy="18" r="7" fill="${K?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${$+a/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="500" fill="#fff">${K?"!":"S"}</text></g>`:"",re=P.value>=1e4?`${(P.value/1e3).toFixed(1)}k`:P.value.toLocaleString("en-US");return`
        ${H}
        ${G}
        ${Y}
        <g>
          <title>${k(P.label)}：实测 ${P.value.toLocaleString("en-US")} ${k(e.unit)}${P.baseline!==void 0?` / 基线 ${P.baseline.toLocaleString("en-US")} ${k(e.unit)}`:""}</title>
          <rect x="${$}" y="${E}" width="${a}" height="${S}" rx="7" fill="${K?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${$+a/2}" y="${E-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${re}</text>
        <text x="${$+a/2}" y="${_+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${k(P.label)}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${C} ${q}" style="width:100%; height:232px; display:block;" role="img" aria-label="${k(e.category)} 趋势图">
      ${Z}
      ${J}
    </svg>
  `}function nt(e,o){const i=e.connectivity==="offline";if(e.category==="hvac"){const a=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:i?[23.8,24,24.1,null,null,null,null,null]:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a],offline:i,colorIdx:o},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:i?[24,24,24,null,null,null,null,null]:[a,a,a,a,a,a,a,a],offline:i,colorIdx:o+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:i?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:i,colorIdx:o+2}]}if(e.category==="lighting"){const a=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)],offline:i,colorIdx:o},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:i,colorIdx:o+1}]}if(e.category==="sensor"){const a=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a],offline:i,colorIdx:o},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:i,colorIdx:o+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:i,colorIdx:o+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:i,colorIdx:o}]}function st(e){const o=e.points.filter(q=>typeof q=="number");if(!o.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const i=Math.min(...o),a=Math.max(...o),v=o.reduce((q,_)=>q+_,0)/o.length,x=e.points[e.points.length-1],C=q=>Math.abs(q)<100&&!Number.isInteger(q)?q.toFixed(1):Math.round(q).toString();return{min:C(i),avg:v.toFixed(Math.abs(v)<100?1:0),max:C(a),curr:typeof x=="number"?C(x):"离线"}}function lt(e,o,i){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="pacom-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const v=(C,q)=>{const E=[];for(const L of C)for(const B of L.points)typeof B=="number"&&E.push(B);const K=E.length?Math.min(...E)*.92:0,H=E.length?Math.max(...E)*1.08:100,G=Math.max(H-K,1),Y=[0,.5,1].map(L=>{const B=Math.round(26+106*(1-L)),ee=(K+G*L).toFixed(G<15?1:0);return`
          <line x1="44" y1="${B}" x2="662" y2="${B}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${L===0?"0":"3 3"}" />
          <text x="38" y="${B+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${ee}</text>
        `}).join(""),re=a.map((L,B)=>`<text x="${44+B/(a.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${L}</text>`).join(""),de=C.map((L,B)=>{const ee=be[(L.colorIdx+B)%be.length],z=L.points,me=[];let g=44,R=26+106/2,se=!1;z.forEach((D,le)=>{const ae=44+le/(z.length-1)*618;if(typeof D=="number"){const l=26+106*(1-(D-K)/G);me.push(`${ae.toFixed(1)},${l.toFixed(1)}`),g=ae,R=l}else se=!0});const M=i?z.map((D,le)=>{if(typeof D!="number")return null;const ae=44+le/(z.length-1)*618,h=26+106*(1-(D*.96-K)/G);return`${ae.toFixed(1)},${h.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${M?`<polyline fill="none" stroke="${ee}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${M}" />`:""}
          ${me.length?`<polyline fill="none" stroke="${ee}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${me.join(" ")}" />`:""}
          ${se?`<line x1="${g.toFixed(1)}" y1="${R.toFixed(1)}" x2="662" y2="${R.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${R-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),ne=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="500" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,te=C.map((L,B)=>{const ee=be[(L.colorIdx+B)%be.length],z=st(L);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${ee};"></span>${k(L.deviceName)} · ${k(L.label)}</span></td>
            <td><strong>${k(z.curr)}</strong> <span class="pacom-row-sub">${k(L.unit)}</span></td>
            <td>${k(z.min)} <span class="pacom-row-sub">${k(L.unit)}</span></td>
            <td>${k(z.avg)} <span class="pacom-row-sub">${k(L.unit)}</span></td>
            <td>${k(z.max)} <span class="pacom-row-sub">${k(L.unit)}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${k(q)}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${C.map((L,B)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${be[(L.colorIdx+B)%be.length]};"></span>${k(L.deviceName)}·${k(L.label)}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${Y}
          ${re}
          ${ne}
          ${de}
        </svg>
        <div class="pacom-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="pacom-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${te}</tbody>
          </table>
        </div>
      </div>
    `};if(o==="shared")return v(e,"单图叠合对比（Shared）");const x=new Map;for(const C of e){const q=x.get(C.unit)??[];q.push(C),x.set(C.unit,q)}return Array.from(x.entries()).map(([C,q])=>v(q,`按单位分组泳道（${C}）`)).join("")}function it(e){const o=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(x=>[x.label,String(x.value),x.baseline!==void 0?String(x.baseline):""].join(","))],i=new Blob([`\uFEFF${o.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(i),v=document.createElement("a");v.href=a,v.download=`pacom-${e.category}-${e.range}.csv`,v.click(),URL.revokeObjectURL(a)}function ct(e){const o=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],i=["时间",...e.map(q=>`${q.deviceName}·${q.label}(${q.unit})`)].join(","),a=o.map((q,_)=>[q,...e.map(I=>String(I.points[_]??"No Data"))].join(",")),v=new Blob([`\uFEFF${[i,...a].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),x=URL.createObjectURL(v),C=document.createElement("a");C.href=x,C.download="pacom-timeseries-export.csv",C.click(),URL.revokeObjectURL(x)}async function $t(e,o,i){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),v=a.get("tab"),x=a.get("cat"),C=a.get("device"),q=a.get("points"),_=a.get("mode"),I=a.get("interval");let Z=v==="timeseries"?"timeseries":x&&je.some(f=>f.id===x)?x:"energy",J="7d",P="2026-11-16",y="2026-11-23";const $=!!i.scope.allowedZoneIds?.length,S=i.scope.allowedFloorIds[0]??W.floorId,E={level:"floor",projectId:i.scope.allowedProjectIds[0]??W.projectId,buildingId:i.scope.allowedBuildingIds[0]??W.buildingId,floorId:S};function K(f){if($)return{scope:E,scopeId:S};if(f.level==="all-projects")return i.scope.allowedProjectIds.includes(W.projectId)?{scope:f,scopeId:W.projectId}:{scope:E,scopeId:S};if(f.level==="project"){if(i.scope.allowedProjectIds.includes(f.projectId)){const V=Ee.some(oe=>oe.id===f.projectId)?f.projectId:W.projectId;return{scope:f,scopeId:V}}return{scope:E,scopeId:S}}if(f.level==="building"){if(i.scope.allowedBuildingIds.includes(f.buildingId)){const V=Ee.some(oe=>oe.id===f.buildingId)?f.buildingId:W.buildingId;return{scope:f,scopeId:V}}return{scope:E,scopeId:S}}return i.scope.allowedFloorIds.includes(f.floorId)?{scope:f,scopeId:f.floorId}:{scope:E,scopeId:S}}const H=K(_e());let G=H.scope,Y=!1,re="",de=H.scopeId,ne="chart",te=!0,L="breakdown",B=!1,ee=null;const[z,me]=await Promise.all([o.getSpatialTree(),o.getFloorDevices(W.floorId).catch(()=>[])]);let g=me;const R=new Map,se=[];g.forEach((f,V)=>{const oe=nt(f,V);R.set(f.id,oe),se.push(...oe)});let M=_==="shared"||_==="grouped"?_:"grouped",D=I==="15m"||I==="1h"||I==="1d"?I:"1h",le=!1;const ae=[];if(q?q.split(",").forEach(f=>{se.some(V=>V.id===f)&&ae.push(f)}):C&&R.has(C)&&(R.get(C)??[]).slice(0,2).forEach(f=>ae.push(f.id)),!ae.length){const f=g.find(ie=>ie.category==="hvac"),V=g.find(ie=>ie.category==="sensor"),oe=g.find(ie=>ie.category==="lighting");f&&(R.get(f.id)??[]).slice(0,2).forEach(ie=>ae.push(ie.id)),V&&(R.get(V.id)??[]).slice(0,1).forEach(ie=>ae.push(ie.id)),oe&&(R.get(oe.id)??[]).slice(0,1).forEach(ie=>ae.push(ie.id)),ae.length||se.slice(0,3).forEach(ie=>ae.push(ie.id))}const l=new Set(ae),h=new Set(g.filter((f,V)=>V<2||(R.get(f.id)??[]).some(oe=>l.has(oe.id))).map(f=>f.id)),O=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:se.filter(f=>f.pointKey==="temp"||f.pointKey==="setpoint"||f.pointKey==="co2").slice(0,4).map(f=>f.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:se.filter(f=>f.pointKey==="dimming"||f.pointKey==="power").slice(0,4).map(f=>f.id),mode:"grouped",interval:"15m"}];let A="";async function X(){const f=Z==="timeseries"?"energy":Z,V=J==="custom"?"30d":J;ee=await o.getAnalysisReport(f,V,W.floorId),N()}function N(){if(!ee)return;const f=Z==="timeseries",V=Z==="timeseries"?"energy":Z,oe=je.find(c=>c.id===V)??je[0],ie=Ee.find(c=>c.id===de)??Ee[0],ue=at(ee,ie.factor),ye=ue.zoneBreakdown.filter(c=>c.status==="warning"),fe=Je[V],Ce=Math.max(...ue.zoneBreakdown.map(c=>c.value),1),we=se.filter(c=>l.has(c.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${Fe({tree:z,session:i,scope:G,isOpen:Y,searchKeyword:re})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${J==="today"?"selected":""}>今日</option>
                <option value="7d" ${J==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${J==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${J==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${f?"":`<button class="pacom-btn ${B?"pacom-btn--primary":""}" data-toggle-canvas="1">${B?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${je.map(c=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${Z===c.id}" data-cat="${c.id}">${c.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${Z==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${J==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${k(P)}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${k(y)}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${f?`
            <div class="pacom-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${we.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${O.map(c=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${k(c.id)}">${U("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${k(c.name)}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${g.map(c=>{const F=R.get(c.id)??[],ve=h.has(c.id),$e=F.filter(ge=>l.has(ge.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${k(c.id)}" style="cursor:pointer; justify-content:space-between;" title="${k(c.name)}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${ve?"0deg":"-90deg"}); opacity:0.65;">${Qe}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${k(c.name)}</div>
                                <div class="pacom-row-sub">${F.length} 个测点 · ${c.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${$e>0?`<span class="pacom-badge pacom-badge--accent">${$e}</span>`:""}
                          </button>
                          ${ve?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${F.map(ge=>{const Se=l.has(ge.id),Q=be[ge.colorIdx%be.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${Se?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${k(ge.id)}" data-ts-point="${k(ge.id)}" ${Se?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${Q};"></span>
                                            <span style="color:var(--pacom-text-primary);">${k(ge.label)}</span>
                                          </span>
                                          <span class="pacom-row-sub">${k(ge.unit)}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="pacom-subnav-main" style="padding:2px 4px 24px;">
                ${A?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${k(A)}</span></div>`:""}
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${U("clock",12)} 排程(S) · ${U("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${le}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${D==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${D==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${D==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${M==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${M==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${lt(we,M,le)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="pacom-kpi-strip" role="region" aria-label="核心统计指标">
                ${ue.kpis.map(c=>{const F=tt(c.value,c.unit);return`
                      <div class="pacom-kpi-cell" title="${k(F.title)}">
                        <span class="pacom-kpi-label">${k(c.label)}</span>
                        <div class="pacom-kpi-value">
                          <span>${k(F.value)}</span>
                          ${F.unit?`<span class="pacom-kpi-unit">${k(F.unit)}</span>`:""}
                        </div>
                        <span class="pacom-kpi-delta">${k(c.delta??"与基线持平")}</span>
                      </div>`}).join("")}
              </div>

              <section class="pacom-section">
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">${k(oe?.label??"趋势")}趋势（${k(ue.unit)}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${k(ie.label)} · 更新于 ${k(ue.updatedAt.slice(5,16).replace("T"," "))}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${te}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${ne==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${ne==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${ye.length>0?`关注：${ye.map(c=>k(c.zoneName)).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${k(oe?.desc??"空间运行洞察")} · ${k(fe.summary)}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${ne==="chart"?ot(ue,te):`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${k(ue.unit)}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${ue.series.map(c=>{const F=typeof c.baseline=="number"&&c.value>c.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${k(c.label)}</strong></td>
                                    <td>${c.value.toLocaleString("en-US")}</td>
                                    <td>${c.baseline!==void 0?c.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${F?"pacom-badge--warning":"pacom-badge--online"}">${F?"超基线":"正常"}</span></td>
                                  </tr>`}).join("")}
                          </tbody>
                        </table>
                      </div>`}
                </div>
              </section>

              <div class="pacom-grid-2">
                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">功能区排行对比</h2>
                    <span class="pacom-row-sub">${ue.zoneBreakdown.length} 个功能区</span>
                  </div>
                  <div class="pacom-table-card">
                    <div class="pacom-table-wrap">
                      <table class="pacom-table">
                        <thead>
                          <tr>
                            <th>功能区</th>
                            <th>占比分布</th>
                            <th>当前值</th>
                            <th>状态</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${ue.zoneBreakdown.map(c=>{const F=Math.max(8,Math.round(c.value/Ce*100));return`
                                <tr>
                                  <td style="font-weight:500;">${k(c.zoneName.replace(/^7F\s*/,""))}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${F}%; height:100%; border-radius:999px; background:${c.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${c.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${k(c.unit)}</span></td>
                                  <td>
                                    <span class="pacom-badge ${c.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${c.status==="warning"?"偏高关注":"正常"}
                                    </span>
                                  </td>
                                </tr>`}).join("")}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">${B?"E7F 空间对照预览":V==="energy"&&L==="load"?"峰谷负荷分布（Load Profile）":fe.title}</h2>
                    ${!B&&V==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${L==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${L==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${B?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${B?'<img class="pacom-plan-img" src="./media/floors/e/07F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${V==="environment"?`
                            <div style="display:flex; flex-direction:column; gap:6px; padding-bottom:8px; border-bottom:var(--hw) solid var(--pacom-border-subtle);">
                              <div style="display:flex; justify-content:space-between; font-size:12px;">
                                <span style="font-weight:500;">ASHRAE 舒适带时长分布</span>
                                <span class="pacom-row-sub">过冷 1.6% · 舒适 96.2% · 过热 2.2%</span>
                              </div>
                              <div style="display:flex; height:10px; border-radius:999px; overflow:hidden; gap:2px;">
                                <div style="width:4%; background:var(--pacom-accent-solid);" title="过冷 1.6%"></div>
                                <div style="width:91%; background:var(--pacom-status-online);" title="舒适达标 96.2%"></div>
                                <div style="width:5%; background:var(--pacom-status-warning);" title="过热 2.2%"></div>
                              </div>
                            </div>`:""}
                        ${(V==="energy"&&L==="load"?et:fe.items).map(c=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${c.name}</span>
                                <span class="pacom-row-sub">${c.detail} · <strong style="color:var(--pacom-text-primary);">${c.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,c.pct)}%; height:100%; border-radius:999px; background:${c.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,He(e,{onToggle:()=>{Y=!Y,N(),Y&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:c=>{re=c,N();const F=e.querySelector("[data-global-space-search]");F&&(F.focus(),F.setSelectionRange(c.length,c.length))},onPick:c=>{const F=K(c);G=F.scope,de=F.scopeId,Y=!1,N()}}),e.querySelectorAll("[data-cat]").forEach(c=>{c.addEventListener("click",()=>{Z=c.dataset.cat??"energy",A="",Z==="timeseries"?N():X()})}),e.querySelector("[data-range-select]")?.addEventListener("change",c=>{J=c.currentTarget.value??"7d",X()}),e.querySelector("[data-custom-start]")?.addEventListener("change",c=>{P=c.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",c=>{y=c.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(c=>{c.addEventListener("click",()=>{ne=c.dataset.chartMode??"chart",N()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{te=!te,N()}),e.querySelectorAll("[data-energy-right]").forEach(c=>{c.addEventListener("click",()=>{L=c.dataset.energyRight??"breakdown",N()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{f?ct(we):it(ue)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{B=!B,N()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(c=>{c.addEventListener("click",()=>{const F=c.dataset.tsExpand;F&&(h.has(F)?h.delete(F):h.add(F),N())})}),e.querySelectorAll("[data-ts-point]").forEach(c=>{c.addEventListener("change",()=>{const F=c.dataset.tsPoint;F&&(c.checked?l.add(F):l.delete(F),A="",N())})}),e.querySelectorAll("[data-ts-mode]").forEach(c=>{c.addEventListener("click",()=>{M=c.dataset.tsMode??"grouped",N()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",c=>{D=c.currentTarget.value??"1h",N()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{le=!le,N()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const F=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(l).join(","))}&mode=${M}&interval=${D}`,ve=`${window.location.origin}${window.location.pathname}${F}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(ve).catch(()=>{}),window.history.replaceState(null,"",F),A=`已复制分享链接（含 ${l.size} 个测点、${M==="grouped"?"按单位分组":"单图叠合"}、${D} 粒度）。`,N()}),e.querySelectorAll("[data-load-fav]").forEach(c=>{c.addEventListener("click",()=>{const F=O.find(ve=>ve.id===c.dataset.loadFav);F&&(l.clear(),F.pointIds.forEach(ve=>{l.add(ve);const $e=ve.split(":")[0];$e&&h.add($e)}),M=F.mode,D=F.interval,A=`已加载收藏视图「${F.name}」。`,N())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(l.size===0)return;const c=`自定义对比 #${O.length+1}（${l.size} 测点）`;O.push({id:`fav-${Date.now()}`,name:c,pointIds:Array.from(l),mode:M,interval:D}),A=`已保存当前时序配置为「${c}」。`,N()})}await X()}function Te(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const o=e.name.includes("702")?"702 照明":"主照明",i=Number(e.telemetry.dimming?.value??0);return i>0?`${o} ${i}%`:`${o} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const Oe={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},rt={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},dt=U("chevron-down",12),pt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function d(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Ve(e){const o=e.trim().toUpperCase();if(o==="RF"||o==="R"||o==="ROOF"||o.includes("屋面"))return 999;const i=o.match(/(-?\d+)/);if(!i)return 0;const a=Number(i[1]);return o.startsWith("B")?-Math.abs(a):a}async function xt(e,o,i){const a=await o.getSpatialTree();o.mode;const v=i.scope.canControlDevices,x=i.scope.canManageAlarms,C=i.scope.allowedZoneIds?.length?i.scope.allowedZoneIds:null,q=a.floors.filter(s=>i.scope.allowedFloorIds.includes(s.id)),_=C||a.projects.length<=1&&a.buildings.length<=1&&q.length<=1?"floors-only":a.projects.length>1?"multi-project":a.buildings.length>1?"single-project-multi-building":"single-building",I=_==="multi-project",Z=_==="multi-project"||_==="single-project-multi-building",J=_!=="floors-only",P=_==="floors-only"&&q.length<=1;let y=_e(),$="devices",S=!1,E=!1,K="",H="",G="all",Y="all";const re=new URLSearchParams(window.location.hash.split("?")[1]??""),de=re.get("device"),ne=re.get("zone");let te=de,L=!!de,B="control",ee="",z=!1,me="today",g="devices";const R=new Set,se=new Set;let M=[],D=[],le=[],ae=null,l=null,h=1,O=0,A=0,X=null;function N(){return a.zones.filter(s=>!(y.level==="floor"&&s.floorId!==y.floorId||C&&!C.includes(s.id)))}function f(s){return[...a.floors.filter(r=>r.buildingId!==s?!1:_==="floors-only"?i.scope.allowedFloorIds.includes(r.id):!0)].sort((r,t)=>Ve(t.name)-Ve(r.name))}async function V(s,u=!1){if(a.projects.length===0){y={level:"all-projects"},ze(y),M=[],D=[],le=[],Q();return}let r=s;r.level==="all-projects"&&!I&&(r={level:"project",projectId:a.projects[0]?.id??W.projectId}),r.level==="project"&&!Z&&(r={level:"building",projectId:r.projectId,buildingId:a.buildings[0]?.id??W.buildingId}),r.level==="building"&&!J&&(r={level:"floor",projectId:r.projectId,buildingId:r.buildingId,floorId:q[0]?.id??W.floorId}),y=r,ze(r),l=null,Y=u&&ne?ne:"all",z=!1,E=!1,S=!1,se.clear(),h=1,O=0,A=0,X&&(X(),X=null);const t=y.level==="floor"?y.floorId:W.floorId;if(y.level==="floor")try{const[n,p,b]=await Promise.all([o.getFloorDevices(y.floorId),o.listAlarms(y.floorId),o.listWorkOrders(y.floorId)]);M=n,D=p,le=b,M.some(m=>m.id===te)?u&&de&&(L=!0):(te=M[1]?.id??M[0]?.id??null,L=!1),X=o.subscribeFloorEvents(y.floorId,async m=>{m.type==="control.receipt.updated"&&ae?.batchId===m.batchId&&(ae=await o.getControlBatch(m.batchId)),(m.type==="telemetry.updated"||m.type==="device.connectivity")&&y.level==="floor"&&(M=await o.getFloorDevices(y.floorId)),m.type==="alarm.changed"&&y.level==="floor"&&(D=await o.listAlarms(y.floorId)),ye()})}catch(n){M=[],D=[],le=[],te=null,L=!1,l=n instanceof Error?n.message:String(n)}else{L=!1;const[n,p,b]=await Promise.all([o.getFloorDevices(t).catch(()=>[]),o.listAlarms(t).catch(()=>[]),o.listWorkOrders(t).catch(()=>[])]);M=n,D=p,le=b}Q()}function oe(s){return s?a.zones.find(u=>u.id===s)?.name??s:"未分配逻辑区"}function ie(){const s=H.trim().toLowerCase();return M.filter(u=>Y!=="all"&&u.logicalZoneId!==Y||G!=="all"&&u.category!==G?!1:s?u.name.toLowerCase().includes(s)||u.id.toLowerCase().includes(s)||oe(u.logicalZoneId).toLowerCase().includes(s):!0)}async function ue(s,u,r){!s.length||y.level!=="floor"||!v||(s.forEach(t=>R.add(t)),ae=await o.dispatchControlBatch({floorId:y.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:s.map(t=>({deviceId:t,command:u,targetValue:r}))}),ye())}function ye(){const s=document.activeElement,u=s?.dataset?.role,r=s&&"selectionStart"in s?s.selectionStart:null,t=s&&"selectionEnd"in s?s.selectionEnd:null,n=e.querySelector(".pacom-list")?.scrollTop??0;Q();const p=e.querySelector(".pacom-list");if(p&&(p.scrollTop=n),u==="search"||u==="space-search"){const b=e.querySelector(`[data-role="${u}"]`);b&&(b.focus(),r!==null&&t!==null&&b.setSelectionRange(r,t))}}function fe(){const s=e.querySelector('[data-role="canvas-viewport"]');s&&(s.style.transform=`translate(${O}px, ${A}px) scale(${h})`);const u=e.querySelector('[data-role="zoom-label"]');u&&(u.textContent=`${Math.round(h*100)}%`)}function Ce(s){if(s==="all")return{level:"all-projects"};const u=s.split(":");return u[0]==="project"&&u[1]?{level:"project",projectId:u[1]}:u[0]==="building"&&u[1]&&u[2]?{level:"building",projectId:u[1],buildingId:u[2]}:u[0]==="floor"&&u[1]&&u[2]&&u[3]?{level:"floor",projectId:u[1],buildingId:u[2],floorId:u[3]}:{level:"all-projects"}}function we(s){const u=y;if(u.level==="all-projects"){const r=H.trim().toLowerCase(),t=a.projects.filter(n=>!r||n.name.toLowerCase().includes(r));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${t.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${U("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${t.map(n=>{const p=a.buildings.filter(b=>b.projectId===n.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${d(n.id)}">
                  <div>
                    <div class="pacom-row-title">${d(n.name)}</div>
                    <div class="pacom-row-sub">${d(n.city??"")} · ${p} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(u.level==="project"){const r=H.trim().toLowerCase(),t=a.buildings.filter(b=>b.projectId===u.projectId&&(!r||b.name.toLowerCase().includes(r))),n=M.filter(b=>b.connectivity==="online").length,p=M.length?Math.round(n/M.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${t.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${U("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${t.map(b=>{const m=b.id===W.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${d(b.projectId)}:${d(b.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${m&&s>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${d(b.name)}</div>
                      <div class="pacom-row-sub">地上 ${b.aboveFloors} 层 · ${b.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${m?"pacom-badge--accent":"pacom-badge--neutral"}">${m?`在线 ${p}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(u.level==="building"){const r=H.trim().toLowerCase(),t=f(u.buildingId).filter(p=>!r||p.name.toLowerCase().includes(r)),n=a.buildings.find(p=>p.id===u.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${d(n?.name??"楼宇")} 楼层导览（${t.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${U("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${t.map(p=>{const b=i.scope.allowedFloorIds.includes(p.id),m=p.id===W.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${b?"":"opacity:0.6;"}" data-nav-scope="floor:${d(u.projectId)}:${d(u.buildingId)}:${d(p.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${m&&s>0?"pacom-dot--warning":p.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${d(n?.name??"")} ${d(p.name)}</div>
                      <div class="pacom-row-sub">${p.plan?"2D 平面控图就绪":"暂未上传平面图"}${m&&s>0?` · ${s} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${b&&p.plan?"pacom-badge--online":"pacom-badge--neutral"}">${b?p.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if($==="devices"){const r=ie(),t=N(),n=Array.from(se);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${C?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${C.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${G==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${G==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${G==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${G==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${G==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${r.length} 台${v&&n.length?` · 已选 ${n.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${U("x",14)}</button>
          </div>
          ${t.length>0&&!l?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${Y==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${t.map(p=>`<button type="button" class="pacom-zone-pill ${Y===p.id?"is-active":""}" data-filter-zone="${d(p.id)}">${d(p.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${l?`<div class="pacom-alert-banner">${d(l)}</div>`:r.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':r.map(p=>{const b=p.id===te&&L,m=se.has(p.id),T=p.connectivity==="offline",j=T?"pacom-dot--critical":"pacom-dot--online",w=T?"离线":p.category==="lighting"?`${p.telemetry.dimming?.value??"--"}%`:p.category==="hvac"?`${p.telemetry.setpoint?.value??"--"}°C`:p.category==="sensor"?`${p.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${b?"is-selected":""}" data-select-device="${d(p.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${v?`<input type="checkbox" name="devCheck-${d(p.id)}" data-check-device="${d(p.id)}" ${m?"checked":""} style="margin-top:3px;" aria-label="勾选 ${d(p.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${d(p.name)}</div>
                              <div class="pacom-row-sub">${d(oe(p.logicalZoneId).replace(/^7F\s*/,""))} · ${d(Oe[p.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${T?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${j}"></span>${d(w)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${v&&n.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${n.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if($==="zones"){const r=N(),t={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${r.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${U("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${r.map(n=>{const p=M.filter(w=>w.logicalZoneId===n.id),b=p.filter(w=>w.connectivity==="online").length,m=p.filter(w=>w.category==="lighting"||w.category==="hvac").length,T=Y===n.id,j=t[n.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${T?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${T?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${d(T?"all":n.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${d(n.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${b}/${p.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${j.temp} · ${j.occ}</div>
                  ${m>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${d(n.id)}" data-zone-val="true" ${v?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${d(n.id)}" data-zone-val="false" ${v?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${D.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${U("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${D.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':D.map(r=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${d(r.title)}</strong>
                      <span class="pacom-badge ${r.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${r.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${d(r.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${d(r.deviceId)}">定位设备</button>
                      ${r.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${d(r.id)}" ${x?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function c(s){const u=y,r=N().length,t=u.level==="floor"?"搜索设备或区域…":u.level==="building"?"搜索楼层…":u.level==="project"?"搜索楼宇…":"搜索园区…",n=u.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${S&&$==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${M.length}</button>
          <button type="button" class="pacom-hud-pill ${S&&$==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${r}</button>
          <button type="button" class="pacom-hud-pill ${s>0?"pacom-hud-pill--alert":""} ${S&&$==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${s}</button>
        `:u.level==="building"?`
            <button type="button" class="pacom-hud-pill ${S?"is-active":""}" data-toggle-hud="1">楼层 ${f(u.buildingId).length}</button>
            ${s>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${s}</button>`:""}
          `:u.level==="project"?`
              <button type="button" class="pacom-hud-pill ${S?"is-active":""}" data-toggle-hud="1">楼宇 ${a.buildings.filter(p=>p.projectId===u.projectId).length}</button>
              ${s>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${s}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${S?"is-active":""}" data-toggle-hud="1">园区 ${a.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${U("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${t}" value="${d(H)}" aria-label="${t}" />
          ${n}
        </div>
        ${S?`<div class="pacom-hud-sheet" data-role="hud-sheet">${we(s)}</div>`:""}
      </div>
    `}function F(s){if(P||y.level!=="building"&&y.level!=="floor")return"";const u=y.buildingId,r=y.projectId,t=f(u);return!J&&t.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${J?`<button type="button" class="pacom-elev-item ${y.level==="building"?"is-active":""}" data-nav-scope="building:${d(r)}:${d(u)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${t.map(n=>{const p=i.scope.allowedFloorIds.includes(n.id),b=y.level==="floor"&&y.floorId===n.id,m=n.id===W.floorId&&s>0;return`
              <button type="button" class="pacom-elev-item ${b?"is-active":""} ${p?"":"is-locked"}"
                data-nav-scope="floor:${d(r)}:${d(u)}:${d(n.id)}"
                title="${d(n.name)}${p?m?` · ${s} 条告警`:"":"（无权限）"}">
                ${m?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${d(n.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function ve(s,u){const r=y;if(r.level==="floor")return l?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${g==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${g==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${g==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${U("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(h*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${U("plus",14)}</button>
        </div>
      `;const t=M.length?Math.round(s/M.length*100):100,n=r.level==="building"?"418 kWh":"1,248 kWh",p=Math.round(96.2*.45+93.6*.35+t*.2),b=r.level==="building"?f(r.buildingId).find(m=>m.id===W.floorId)??f(r.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${p}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="environment">
          <span>舒适度 <strong>96.2%</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="energy">
          <span>今日能耗 <strong>${n}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${u}</strong></span>
        </button>
        ${r.level==="building"&&b?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${d(r.projectId)}:${d(r.buildingId)}:${d(b.id)}">进入 ${d(b.name)} 平面图 →</button>`:""}
      </div>
    `}function $e(s,u){const r=y,t=M.length?Math.round(s/M.length*100):100;if(r.level==="all-projects")return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default; background:radial-gradient(circle at 50% 45%, #fafaf9 0%, #f1f1ef 100%);">
          <div style="position:relative; width:min(920px, 94%); height:min(520px, 74vh); border-radius:16px; background:#ffffff; box-shadow:var(--pacom-shadow-sm); overflow:hidden;">
            <svg viewBox="0 0 920 520" style="width:100%; height:100%; display:block;" aria-label="多园区空间分布底图">
              <defs>
                <pattern id="pacom-map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(88% 0 107 / 0.55)" stroke-width="0.75" />
                </pattern>
              </defs>
              <rect width="920" height="520" fill="url(#pacom-map-grid)" />
              <path d="M 80 340 Q 260 280 460 300 T 840 210" fill="none" stroke="oklch(82% 0.02 220 / 0.55)" stroke-width="18" stroke-linecap="round" />
              <path d="M 180 90 L 340 440 M 540 60 L 660 460" fill="none" stroke="oklch(86% 0 107 / 0.7)" stroke-width="2" stroke-dasharray="6 6" />
            </svg>
            ${a.projects.map((m,T)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${T===0?50:28}%; top:${T===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${d(m.id)}">
                  <span class="pacom-dot ${u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${d(m.name)} · 在线 ${t}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(r.level==="project"){const m=a.projects.find(j=>j.id===r.projectId)??a.projects[0],T=a.buildings.filter(j=>!m||j.projectId===m.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${d(m?.imageUrl??"./media/gzlab.jpg")}" alt="${d(m?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${T.map((j,w)=>{const pe=j.id===W.buildingId;return`
                  <button type="button" class="pacom-pin ${pe?"is-selected":""}" style="left:${w===0?56:38}%; top:${w===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${d(j.projectId)}:${d(j.id)}">
                    <span class="pacom-dot ${pe&&u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${d(j.name)} · ${pe?`在线 ${t}% · 告警 ${u}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(r.level==="building"){const m=a.buildings.find(j=>j.id===r.buildingId),T=f(r.buildingId).find(j=>j.id===W.floorId)??f(r.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${d(m?.imageUrl??"./media/building-e.webp")}" alt="${d(m?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${T?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${d(r.projectId)}:${d(r.buildingId)}:${d(T.id)}">
                    <span class="pacom-dot ${u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${d(m?.name??"")} ${d(T.name)} · 在线 ${s}/${M.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const n=a.floors.find(m=>m.id===r.floorId),p=a.buildings.find(m=>m.id===r.buildingId),b=N();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${l?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${d(l)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${O}px, ${A}px) scale(${h});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${d(n?.plan?.imageUrl??"./media/floors/e/07F.webp")}" alt="${d(p?.name??"楼宇")} ${d(n?.name??"7F")} 平面图" />
                  ${b.map((m,T)=>{const j=pt[m.id];if(!j)return"";const w=Y===m.id,pe=["23.2°C","24.6°C","22.8°C","23.9°C"],xe=["有人 74%","会议中","有人 52%","空闲"],Ie=g==="temp"?` · ${pe[T%pe.length]}`:g==="occupancy"?` · ${xe[T%xe.length]}`:"",Ze=g==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":g==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${w?"is-active":""}"
                          style="left:${j.left}%; top:${j.top}%; width:${j.width}%; height:${j.height}%; ${w?"":Ze}"
                          data-filter-zone="${d(w?"all":m.id)}"
                          title="${d(m.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${d(m.name.replace(/^7F\s*/,""))}${Ie}</span>
                        </button>`}).join("")}
                  ${M.filter(m=>m.planPoint).map(m=>{const T=D.some(Ie=>Ie.deviceId===m.id&&Ie.status==="active"),j=S&&$==="alarms",w=Y!=="all"&&m.logicalZoneId!==Y||j&&!T,pe=j&&T?"background:var(--pacom-status-critical);":"",xe=m.category==="gateway"?Math.min(92,m.planPoint.y*100+5.5):m.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${m.id===te&&L?"is-selected":""} ${m.connectivity==="offline"?"pacom-pin--offline":""} ${w?"pacom-pin--dimmed":""}"
                          style="left:${(m.planPoint.x*100).toFixed(2)}%; top:${xe.toFixed(2)}%; ${pe}"
                          data-pin-device="${d(m.id)}" title="${d(m.name)}">
                          <span class="pacom-dot ${T?"pacom-dot--critical":m.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${d(Te(m))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function ge(){if(y.level!=="floor"||!L)return"";const s=M.find(w=>w.id===te);if(!s)return"";const u=s.category==="lighting",r=s.category==="hvac",t=Number(s.telemetry.dimming?.value??50),n=Number(s.telemetry.setpoint?.value??24),p=R.has(s.id),b=D.filter(w=>w.deviceId===s.id&&w.status==="active"),m=le.filter(w=>w.deviceId===s.id&&w.status!=="closed"),T=r?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:u?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],j=u?[{label:"当前开关",value:t>0?"开启":"关闭"},{label:"当前亮度",value:`${t}%`},{label:"实时功率",value:t>0?`${Math.round(t*1.4)} W`:"0 W"},{label:"运行模式",value:p?"人工覆盖":"自动策略"}]:r?[{label:"室内温度",value:`${s.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${n.toFixed(1)}°C`},{label:"运行工况",value:s.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:p?"人工覆盖":"自动策略"}]:s.category==="sensor"?[{label:"实时温度",value:`${s.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${s.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${s.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:s.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:s.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:s.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:s.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:s.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${d(s.name)}</h2>
            <div class="pacom-row-sub">${d(oe(s.logicalZoneId))} · ${d(Oe[s.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${s.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${s.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${U("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${B==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${B==="trend"}" data-drawer-tab="trend">趋势与告警${b.length>0?` (${b.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${B==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${B==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${j.map(w=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${w.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${d(w.value)}</strong>
                  </div>`).join("")}
            </div>

            ${r?`
                <div class="pacom-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${s.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${d(s.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${s.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${s.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${s.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${s.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${n.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${u||r?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${p&&v?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${d(s.id)}">恢复自动策略</button>`:v?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${s.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${u?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${v?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${v?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${t}%</strong>
                        <input type="range" name="ctrlDimming" min="0" max="100" step="10" value="${t}" data-ctrl-slider="lighting.dimming" ${v?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${v?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${v?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${n-.5}" ${v?"":"disabled"}>-0.5°C</button>
                        <strong>${n.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${n+.5}" ${v?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${ae?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${d(ae.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${ae.receipts.map(w=>{const pe=rt[w.status]??{text:w.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${d(w.deviceId)}</strong> · ${d(w.command)} → ${d(w.targetValue)}</div>
                              ${w.errorMessage?`<div style="color:var(--pacom-status-critical);">${d(w.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${pe.badge}">${pe.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:B==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${u?"亮度 %":r?"温度 °C":s.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${d(s.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${s.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${u?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":r?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${b.length===0&&m.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${b.map(w=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${d(w.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${d(w.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${m.map(w=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${d(w.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${d(w.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${d(Te(s))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${d(oe(s.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${ee?`<div class="pacom-info-banner">${d(ee)}</div>`:""}
                ${T.map(w=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${d(w.name)}">${d(w.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${d(w.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="pacom-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${U("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${d(s.id)}</code> · v${s.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${s.planPoint?`x=${s.planPoint.x.toFixed(2)}, y=${s.planPoint.y.toFixed(2)} (图 v${s.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${s.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${s.hardwareBinding?`${s.hardwareBinding.protocol.toUpperCase()} · ${s.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function Se(s,u,r){if(!z)return"";const t=Math.max(0,M.length-s),n=me==="week",p=D.filter(b=>b.status==="active").slice(0,2);return`
      <div class="pacom-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${n?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!n}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${n}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${U("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${n?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${n?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${d(r)}°C · ${s}/${M.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${u} 告警 · ${t} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,R.size)} 覆盖 · ${le.filter(b=>b.status!=="closed").length} 工单</strong></div>
        </div>
        ${p.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${p.map(b=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${d(b.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${d(b.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function Q(){if(a.projects.length===0){e.innerHTML=`
        <div class="pacom-shell" style="position:relative;">
          <header class="pacom-header">
            <div class="pacom-header-top">
              <div class="pacom-title-group">
                <h1 class="pacom-title">空间总览</h1>
                ${Fe({tree:a,session:i,scope:y,activeAlarmCount:0,isOpen:!1,searchKeyword:""})}
              </div>
            </div>
          </header>
          <main class="pacom-spatial-stage" style="display:flex; align-items:center; justify-content:center; padding:24px;">
            <div class="dep-empty-card" style="max-width:520px; width:100%; background:var(--pacom-surface-card);">
              <div class="dep-empty-icon">${U("building-2",20)}</div>
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
              <span class="pacom-row-sub" style="max-width:400px;">当前机构还未建立空间档案。先创建首个项目并添加楼宇、楼层与平面图，即可在此查看全景与实时设备态势。</span>
              <div class="dep-empty-steps">
                <span>1. 创建项目</span>
                <span>→</span>
                <span>2. 添加楼宇与楼层</span>
                <span>→</span>
                <span>3. 上传平面图</span>
              </div>
              <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-first-project="1" ${i.scope.canEditDeployment?"":"disabled"}>+ 创建第一个项目</button>
            </div>
          </main>
        </div>
      `,e.querySelector("[data-go-create-first-project]")?.addEventListener("click",()=>{window.location.hash="#deployment?sec=projects&new=project"});return}const s=D.filter(t=>t.status==="active").length,u=M.filter(t=>t.connectivity==="online").length,r=M.find(t=>t.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${Fe({tree:a,session:i,scope:y,activeAlarmCount:s,isOpen:E,searchKeyword:K})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${l?'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${z}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${u}/${M.length} 在线 · ${d(r)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${dt}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${Se(u,s,r)}

        <main class="pacom-spatial-stage">
          ${c(s)}
          ${$e(u,s)}
          ${F(s)}
          ${ve(u,s)}
          ${ge()}
        </main>
      </div>
    `,We()}function We(){He(e,{onToggle:()=>{E=!E,E&&(z=!1,S=!1),Q(),E&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:t=>{K=t,Q();const n=e.querySelector("[data-global-space-search]");n&&(n.focus(),n.setSelectionRange(t.length,t.length))},onPick:t=>{E=!1,V(t)}}),e.querySelectorAll("[data-nav-scope]").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation(),t.dataset.navScope&&V(Ce(t.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const p=t.dataset.hudTab;S&&$===p?S=!1:($=p,S=!0,E=!1,z=!1),Q()})}),e.querySelectorAll("[data-toggle-hud]").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation(),S=!S,S&&(E=!1,z=!1),Q()})}),e.querySelectorAll("[data-close-hud]").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation(),S=!1,Q()})});const s=e.querySelector('[data-role="search"]');s?.addEventListener("focus",()=>{S||(S=!0,E=!1,z=!1,ye())}),s?.addEventListener("input",t=>{H=t.currentTarget.value,S=!0,ye()}),e.querySelector('[data-role="category"]')?.addEventListener("change",t=>{G=t.currentTarget.value,Q()}),e.querySelectorAll("[data-filter-zone]").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation(),Y=t.dataset.filterZone??"all",Q()})}),e.querySelectorAll("[data-select-device]").forEach(t=>{t.addEventListener("click",n=>{n.target.tagName!=="INPUT"&&(te=t.dataset.selectDevice??null,L=!0,Q())})}),e.querySelectorAll("[data-check-device]").forEach(t=>{t.addEventListener("change",()=>{const n=t.dataset.checkDevice;n&&(t.checked?se.add(n):se.delete(n),Q())})}),e.querySelectorAll("[data-pin-device]").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation(),te=t.dataset.pinDevice??null,L=!0,E=!1,z=!1,Q()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{L=!1,Q()}),e.querySelectorAll("[data-drawer-tab]").forEach(t=>{t.addEventListener("click",()=>{B=t.dataset.drawerTab??"control",ee="",Q()})}),e.querySelectorAll("[data-drawer-doc]").forEach(t=>{t.addEventListener("click",()=>{ee=`已调阅「${t.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,Q()})}),e.querySelectorAll("[data-briefing-period]").forEach(t=>{t.addEventListener("click",()=>{me=t.dataset.briefingPeriod??"today",Q()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.goAlarmId??"";window.location.hash=n?`#alarms?alarm=${encodeURIComponent(n)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.goWoId??"";window.location.hash=n?`#alarms?wo=${encodeURIComponent(n)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",t=>{const n=t.currentTarget.dataset.releaseOverride;n&&(R.delete(n),Q())}),e.querySelectorAll("[data-zone-power]").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const p=t.dataset.zonePower,b=t.dataset.zoneVal==="true";if(!p)return;const m=M.filter(j=>j.logicalZoneId===p&&j.category==="lighting").map(j=>j.id),T=M.filter(j=>j.logicalZoneId===p&&j.category==="hvac").map(j=>j.id);m.length?ue(m,"lighting.power",b):T.length&&ue(T,"hvac.power",b)})}),e.querySelectorAll("[data-locate-device]").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.locateDevice;n&&(te=n,L=!0,S=!1,Q())})}),e.querySelectorAll("[data-go-alarms]").forEach(t=>{t.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(n)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(n)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation(),z=!z,z&&(E=!1,S=!1),Q()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const t=M.filter(j=>j.connectivity==="online").length,n=D.filter(j=>j.status==="active").length,p=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${t}/${M.length}（离线 ${M.length-t} 台）`,`待处理告警：${n} 条`,`人工覆盖中：${R.size} 台`].join(`
`),b=new Blob([p],{type:"text/plain;charset=utf-8;"}),m=URL.createObjectURL(b),T=document.createElement("a");T.href=m,T.download="pacom-daily-briefing.txt",T.click(),URL.revokeObjectURL(m)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(t=>{t.addEventListener("click",()=>{if(!te||!t.dataset.ctrlCmd)return;const n=t.dataset.ctrlVal??"",p=n==="true"?!0:n==="false"?!1:Number(n);ue([te],t.dataset.ctrlCmd,p)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",t=>{const n=t.currentTarget;!te||!n.dataset.ctrlSlider||ue([te],n.dataset.ctrlSlider,Number(n.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(t=>{t.addEventListener("click",()=>{const n=Array.from(se),p=t.dataset.batchVal??"",b=p==="true"?!0:p==="false"?!1:p;ue(n,t.dataset.batchCmd,b)})}),e.querySelectorAll("[data-ack-alarm]").forEach(t=>{t.addEventListener("click",async()=>{!t.dataset.ackAlarm||y.level!=="floor"||!x||(await o.acknowledgeAlarm(t.dataset.ackAlarm,"首页快速确认"),D=await o.listAlarms(y.floorId),Q())})}),e.querySelectorAll("[data-canvas-layer]").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.canvasLayer;n&&(g=n,Q())})}),e.querySelectorAll("[data-zoom]").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.zoom;n==="in"?h=Math.min(2.6,Number((h+.2).toFixed(2))):n==="out"?h=Math.max(.6,Number((h-.2).toFixed(2))):(h=1,O=0,A=0),fe()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",t=>{t.preventDefault();const n=y;if(n.level!=="building"&&n.level!=="floor")return;const p=f(n.buildingId),b=[...J?[{level:"building",projectId:n.projectId,buildingId:n.buildingId}]:[],...p.map(j=>({level:"floor",projectId:n.projectId,buildingId:n.buildingId,floorId:j.id}))],m=b.findIndex(j=>j.level==="building"?n.level==="building":j.level==="floor"&&n.level==="floor"&&j.floorId===n.floorId);if(m<0)return;const T=Math.max(0,Math.min(b.length-1,m+(t.deltaY>0?1:-1)));T!==m&&b[T]&&V(b[T])},{passive:!1});const r=e.querySelector('[data-role="canvas-stage"]');if(r&&!l){let t=!1,n=!1,p=0,b=0,m=0,T=0;r.addEventListener("pointerdown",w=>{w.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(t=!0,n=!1,p=w.clientX,b=w.clientY,m=O,T=A,r.classList.add("is-panning"),r.setPointerCapture?.(w.pointerId))}),r.addEventListener("pointermove",w=>{if(!t)return;const pe=w.clientX-p,xe=w.clientY-b;(Math.abs(pe)>3||Math.abs(xe)>3)&&(n=!0),O=m+pe,A=T+xe,fe()});const j=()=>{t&&(t=!1,r.classList.remove("is-panning"),!n&&(S||E||z)&&(S=!1,E=!1,z=!1,Q()))};r.addEventListener("pointerup",j),r.addEventListener("pointercancel",j),r.addEventListener("wheel",w=>{w.preventDefault();const pe=w.deltaY<0?.12:-.12;h=Math.max(.6,Math.min(2.6,Number((h+pe).toFixed(2)))),fe()},{passive:!1}),r.addEventListener("dblclick",w=>{w.target?.closest("button")||(h=1,O=0,A=0,fe())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",t=>{t.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .pacom-briefing-pop")||(S||E||z)&&(S=!1,E=!1,z=!1,Q())})}e.addEventListener("keydown",s=>{s.key==="Escape"&&(E||z||S||L)&&(E=!1,z=!1,S=!1,L=!1,Q())}),await V(y,!0)}const ut=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Be='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Re='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',mt='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',vt='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',gt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg>',De='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',ht='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',ft='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',qe=U("x",16),Ne=U("check",14),bt=U("building-2",20),he=["password","sms"];function Ue(e){const o=e.replace(/\D/g,"");return o.length===11?`${o.slice(0,3)} •••• ${o.slice(7)}`:e}function yt(e){const o=e.trim().replace(/[\s-]/g,"");return/^(\+?86)?1[3-9]\d{9}$/.test(o)}const ke=new WeakMap;function wt(e){ke.get(e)?.()}function kt(e,o,i){ke.get(e)?.(),e.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,v=!1,x="",C="",q="",_="",I={},Z="",J=!1,P="",y=0,$=null,S=null,E=null,K=!1,H="",G="",Y=null,re=!1;function de(l){l.key==="Escape"&&E&&(l.preventDefault(),R())}function ne(l){const h=e.querySelector('[data-role="mode-seg"]'),O=h?.querySelector(".au-mode-indicator"),A=h?.querySelector('.au-mode-tab[aria-selected="true"]');!O||!A||(O.style.transition=l?"":"none",O.style.transform=`translateX(${A.offsetLeft}px)`,O.style.width=`${A.offsetWidth}px`,l||(O.offsetWidth,O.style.transition=""))}function te(){ne(!1)}function L(){re=!0,$!==null&&(window.clearInterval($),$=null),S!==null&&(window.clearTimeout(S),S=null),document.removeEventListener("keydown",de),window.removeEventListener("resize",te),e.classList.remove("bare-login"),ke.get(e)===L&&ke.delete(e)}document.addEventListener("keydown",de),window.addEventListener("resize",te),ke.set(e,L);function B(){y=60,$!==null&&window.clearInterval($),$=window.setInterval(()=>{y-=1,y<=0&&(y=0,$!==null&&(window.clearInterval($),$=null));const l=e.querySelector('[data-act="send-sms"]');l&&(l.disabled=y>0,l.textContent=y>0?`${y} 秒后重发`:P?"重新获取":"获取验证码")},1e3)}function ee(){const l=e.querySelector("#au-login-ferr");if(l)if(Z){l.hidden=!1;const h=l.querySelector('[data-role="ferr-text"]');h&&(h.textContent=Z)}else l.hidden=!0}function z(l){const h=e.querySelector(`.au-field[data-f="${l}"]`),O=e.querySelector(`#au-${l}`),A=e.querySelector(`#au-${l}-err`),X=I[l]??"";h?.classList.toggle("bad",!!X),O?.setAttribute("aria-invalid",X?"true":"false"),A&&(A.textContent=X)}function me(){const l=e.querySelector('form[data-form="login"] fieldset'),h=e.querySelector('form[data-form="login"] button[type="submit"]');l&&(l.disabled=J),h&&(h.disabled=J,h.innerHTML=J?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"<span>登录</span>")}function g(l,h){Y=h??(document.activeElement instanceof HTMLElement?document.activeElement:null),E=l,M(),l==="reset"?e.querySelector("#au-rs-id")?.focus():e.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function R(){if(!E)return;E=null,S!==null&&(window.clearTimeout(S),S=null),K=!1,M();const l=Y;Y=null,l&&document.contains(l)&&l.focus()}function se(){if(!E)return"";if(E==="reset"){const l=H.trim().length>0;return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${qe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field" style="margin-bottom:0;">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" placeholder="name@company.com 或 11 位手机号" value="${k(H)}" />
                  </div>
                </div>
                <div class="au-notice-soft" data-role="reset-notice" role="status" aria-live="polite" ${G?"":"hidden"}>
                  ${vt}
                  <span data-role="reset-notice-text">${k(G)}</span>
                </div>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${l?"":"disabled"}>发送验证码</button>
            </div>
          </section>
        </div>
      `}return E==="register"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${qe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用，请根据所属团队情况选择开通方式：</p>
              <div class="au-path-list">
                <div class="au-path-item">
                  <span class="au-path-tile">${gt}</span>
                  <div>
                    <div class="au-path-title">凭机构 9 位邀请码加入</div>
                    <div class="au-path-desc">向所在机构管理员获取邀请码或邀请链接，完成账号注册并按最小权限分配工作区。</div>
                  </div>
                </div>
                <div class="au-path-item">
                  <span class="au-path-tile">${bt}</span>
                  <div>
                    <div class="au-path-title">申请开通新机构账户</div>
                    <div class="au-path-desc">面向新园区、实验室或楼宇项目，请联系 PACOM 支持团队完成机构开通与部署初始化。</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="register-to-contact">联系我们</button>
              <button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="close-modal">知道了</button>
            </div>
          </section>
        </div>
      `:E==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${qe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或现场部署技术支持，请通过官方支持邮箱联系 PACOM 团队。</p>
              <div class="au-contact-card">
                <div class="au-contact-main">
                  <span class="au-contact-icon" aria-hidden="true">${ht}</span>
                  <div class="au-contact-meta">
                    <span class="au-contact-label">支持邮箱</span>
                    <span class="au-contact-value">support@pacom.cn</span>
                  </div>
                </div>
                <button type="button" class="au-copy-btn ${K?"is-copied":""}" data-act="copy-support" aria-label="复制支持邮箱">
                  ${K?`${Ne}<span>已复制</span>`:`${De}<span>复制</span>`}
                </button>
              </div>
              <p class="au-contact-note">工作日 09:00–18:00 响应</p>
            </div>
            <div class="df">
              <a class="au-dlg-btn au-dlg-btn--ghost" href="mailto:support@pacom.cn">${ft}<span>发送邮件</span></a>
              <button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:""}function M(){const l=e.querySelector('[data-role="modal-host"]');if(!l||(l.innerHTML=se(),!E))return;l.querySelectorAll('[data-act="close-modal"]').forEach(A=>{A.addEventListener("click",()=>R())}),l.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",A=>{A.target===A.currentTarget&&R()}),l.querySelector('[data-act="register-to-contact"]')?.addEventListener("click",()=>{K=!1,E="contact",M(),l.querySelector(".au-account-dlg")?.focus()}),l.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{const A=l.querySelector('[data-act="copy-support"]');try{await navigator.clipboard.writeText("support@pacom.cn")}catch{}K=!0,A&&(A.classList.add("is-copied"),A.innerHTML=`${Ne}<span>已复制</span>`),S!==null&&window.clearTimeout(S),S=window.setTimeout(()=>{S=null,K=!1;const X=l.querySelector('[data-act="copy-support"]');X&&(X.classList.remove("is-copied"),X.innerHTML=`${De}<span>复制</span>`)},1800)});const h=l.querySelector("#au-rs-id"),O=l.querySelector('[data-role="reset-submit"]');h?.addEventListener("input",()=>{H=h.value,O&&(O.disabled=H.trim().length===0)}),l.querySelector("#au-reset-form")?.addEventListener("submit",A=>{A.preventDefault(),H=h?.value.trim()??"",G=H?"请联系机构管理员重置账号密码，或确认后查收重置邮件。":"请输入电子邮箱或手机号码";const X=l.querySelector('[data-role="reset-notice"]'),N=l.querySelector('[data-role="reset-notice-text"]');X&&N&&(N.textContent=G,X.hidden=!1)})}function D(){const l=a?`
        <div class="au-field ${I.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入 11 位手机号码" value="${k(q)}" aria-invalid="${I.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${y>0?"disabled":""}>
              ${y>0?`${y} 秒后重发`:P?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${k(I.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${P?`验证码已发送至 ${k(Ue(P))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${I.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入电子邮箱或手机号码" value="${k(x)}" aria-invalid="${I.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${k(I.id??"")}</p>
        </div>
      `,h=a?`
        <div class="au-field ${I.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入 6 位短信验证码" value="${k(_)}" aria-invalid="${I.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${k(I.scode??"")}</p>
        </div>
      `:`
        <div class="au-field ${I.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab">
            <label for="au-pwd">密码</label>
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${v?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入密码" value="${k(C)}" aria-invalid="${I.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${v?"隐藏密码":"显示密码"}">
              ${v?Re:Be}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${k(I.pwd??"")}</p>
        </div>
      `,O=e.querySelector('[data-role="fields-host"]');O&&(O.innerHTML=`${l}${h}`,ae(O))}function le(l,h=!1){const O=l==="sms";a===O||J||(O&&!q.trim()&&yt(x)?q=x.trim():!O&&!x.trim()&&q.trim()&&(x=q.trim()),a=O,I={},Z="",e.querySelectorAll('[data-act="switch-mode"]').forEach(A=>{const X=A.dataset.mode===l;A.setAttribute("aria-selected",String(X)),A.tabIndex=X?0:-1,X&&h&&A.focus({preventScroll:!0})}),ne(!0),D(),ee(),h||(a?P?e.querySelector("#au-scode")?.focus({preventScroll:!0}):q.trim()?e.querySelector('[data-act="send-sms"]')?.focus({preventScroll:!0}):e.querySelector("#au-sphone")?.focus({preventScroll:!0}):e.querySelector(x.trim()?"#au-pwd":"#au-id")?.focus({preventScroll:!0})))}function ae(l){const h=l.querySelector("#au-id"),O=l.querySelector("#au-pwd"),A=l.querySelector("#au-sphone"),X=l.querySelector("#au-scode");h?.addEventListener("input",()=>{x=h.value,(I.id||Z)&&(delete I.id,Z="",z("id"),ee())}),O?.addEventListener("input",()=>{C=O.value,(I.pwd||Z)&&(delete I.pwd,Z="",z("pwd"),ee())}),A?.addEventListener("input",()=>{q=A.value,(I.sphone||Z)&&(delete I.sphone,Z="",z("sphone"),ee())}),X?.addEventListener("input",()=>{_=X.value.replace(/\D/g,"").slice(0,6),X.value=_,(I.scode||Z)&&(delete I.scode,Z="",z("scode"),ee())}),l.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",N=>{v=!v;const f=N.currentTarget,V=l.querySelector("#au-pwd");if(V){const oe=V.selectionStart,ie=V.selectionEnd;V.type=v?"text":"password",V.focus({preventScroll:!0}),oe!==null&&ie!==null&&V.setSelectionRange(oe,ie)}f.setAttribute("aria-label",v?"隐藏密码":"显示密码"),f.innerHTML=v?Re:Be}),l.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const N=q.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(N)){I={...I,sphone:"请输入有效的手机号码"},z("sphone"),l.querySelector("#au-sphone")?.focus({preventScroll:!0});return}delete I.sphone,z("sphone"),P=N;const f=l.querySelector("#au-sphone-hint");f&&(f.textContent=`验证码已发送至 ${Ue(P)}`),B();const V=l.querySelector('[data-act="send-sms"]');V&&(V.disabled=!0,V.textContent=`${y} 秒后重发`),l.querySelector("#au-scode")?.focus({preventScroll:!0})}),l.querySelector('[data-act="open-reset"]')?.addEventListener("click",N=>{H=x.trim(),G="",g("reset",N.currentTarget)})}e.innerHTML=`
    <div class="au au-split au-auth-shell">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${ut}</div>
            <h1 class="au-h1">登录</h1>
            <div class="au-mode-seg" role="tablist" aria-label="登录方式" data-role="mode-seg">
              <span class="au-mode-indicator" aria-hidden="true"></span>
              <button type="button" role="tab" aria-selected="true" tabindex="0" class="au-mode-tab" data-act="switch-mode" data-mode="password">密码登录</button>
              <button type="button" role="tab" aria-selected="false" tabindex="-1" class="au-mode-tab" data-act="switch-mode" data-mode="sms">短信登录</button>
            </div>
            <form class="au-compact-form" data-form="login" novalidate>
              <fieldset>
                <div data-role="fields-host"></div>
                <div class="au-ferr" id="au-login-ferr" role="alert" hidden>
                  ${mt}
                  <span data-role="ferr-text"></span>
                </div>
                <label class="au-check au-keep-login" data-f="keep">
                  <input type="checkbox" name="keep" />
                  <span>30 天内保持登录</span>
                </label>
                <button type="submit" class="au-primary au-compact-primary">
                  <span>登录</span>
                </button>
              </fieldset>
            </form>
            <div class="au-login-actions">
              <div class="au-login-divider" aria-hidden="true"></div>
              <p class="au-noacct">
                没有账户？<button type="button" class="au-inline" data-act="open-register">注册</button>
              </p>
            </div>
          </main>
        </div>
        <footer class="au-foot" aria-label="版权、法律与联系信息">
          <span class="au-copyright">© 2026 广州天环智能技术有限公司</span>
          <div class="au-foot-links">
            <a href="https://docs.pacom.cn" target="_blank" rel="noopener noreferrer">隐私和法律</a>
            <button type="button" data-act="open-contact">联系我们</button>
          </div>
        </footer>
      </section>
      <aside class="au-art" aria-hidden="true">
        <div class="au-art-frame">
          <img src="./media/auth-hero.jpg" alt="" />
        </div>
      </aside>
    </div>
    <div data-role="modal-host"></div>
  `,e.querySelector('input[name="keep"]')?.addEventListener("change",l=>{l.currentTarget.checked}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async l=>{if(l.preventDefault(),!J){if(I={},Z="",a?(q.trim()||(I.sphone="请输入手机号码"),/^\d{6}$/.test(_.trim())||(I.scode="请输入 6 位验证码"),z("sphone"),z("scode")):(x.trim()||(I.id="请输入电子邮箱或手机号码"),C||(I.pwd="请输入密码"),z("id"),z("pwd")),ee(),Object.keys(I).length>0){const h=Object.keys(I)[0];e.querySelector(`#au-${h}`)?.focus({preventScroll:!0});return}J=!0,me();try{const h=await o.login({account:(a?q:x).trim(),password:a?_.trim():C});L(),i(h)}catch(h){J=!1,Z=h instanceof Error?h.message:"账户或密码不正确",me(),ee()}}}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",l=>{g("register",l.currentTarget)}),e.querySelectorAll('[data-act="switch-mode"]').forEach(l=>{l.addEventListener("click",()=>{const h=l.dataset.mode;h&&le(h,!1)}),l.addEventListener("keydown",h=>{const O=a?"sms":"password",A=he.indexOf(O);h.key==="ArrowRight"?(h.preventDefault(),le(he[(A+1)%he.length],!0)):h.key==="ArrowLeft"?(h.preventDefault(),le(he[(A-1+he.length)%he.length],!0)):h.key==="Home"?(h.preventDefault(),le(he[0],!0)):h.key==="End"&&(h.preventDefault(),le(he[he.length-1],!0))})}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",l=>{K=!1,g("contact",l.currentTarget)}),D(),ne(!1),document.fonts?.ready.then(()=>{re||ne(!1)})}export{W as E,Fe as a,He as b,xt as c,kt as d,k as e,_e as g,$t as m,U as r,ze as s,wt as u};
