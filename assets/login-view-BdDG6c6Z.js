(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))a(g);new MutationObserver(g=>{for(const x of g)if(x.type==="childList")for(const z of x.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&a(z)}).observe(document,{childList:!0,subtree:!0});function s(g){const x={};return g.integrity&&(x.integrity=g.integrity),g.referrerPolicy&&(x.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?x.credentials="include":g.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function a(g){if(g.ep)return;g.ep=!0;const x=s(g);fetch(g.href,x)}})();const G={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},Ye={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"layout-dashboard":'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',waypoints:'<circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',"key-round":'<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',"file-text":'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'};function Xe(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function W(e,n=16,s=""){const a=Xe(n);return`<svg${s?` class="${s}"`:""} width="${n}" height="${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${Ye[e]}</svg>`}let qe={level:"floor",projectId:G.projectId,buildingId:G.buildingId,floorId:G.floorId};function We(){return qe}function Pe(e){return qe=e,qe}function ie(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Oe(e){const n=e.trim().toUpperCase();if(n==="RF"||n==="R"||n==="ROOF"||n.includes("屋面"))return 999;const s=n.match(/(-?\d+)/);if(!s)return 0;const a=Number(s[1]);return n.startsWith("B")?-Math.abs(a):a}function Qe(e){if(e==="all")return{level:"all-projects"};const n=e.split(":");return n[0]==="project"&&n[1]?{level:"project",projectId:n[1]}:n[0]==="building"&&n[1]&&n[2]?{level:"building",projectId:n[1],buildingId:n[2]}:n[0]==="floor"&&n[1]&&n[2]&&n[3]?{level:"floor",projectId:n[1],buildingId:n[2],floorId:n[3]}:{level:"project",projectId:G.projectId}}function Je(e,n,s){return s==="project"?e.level==="all-projects"?{level:"project",projectId:n.projects[0]?.id??G.projectId}:{level:"project",projectId:e.projectId}:s==="building"&&e.level==="floor"?{level:"building",projectId:e.projectId,buildingId:e.buildingId}:e}function Te(e){const{tree:n,session:s,isOpen:a,searchKeyword:g}=e;if(n.projects.length===0)return'<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap"><span class="pacom-path-trigger is-static"><span class="pacom-path-muted">暂无项目</span></span></div>';const x=e.maxGranularity??"floor",z=e.activeAlarmCount??0,F=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null,Z=n.floors.filter(h=>s.scope.allowedFloorIds.includes(h.id)),ae=F||n.projects.length<=1&&n.buildings.length<=1&&Z.length<=1?"floors-only":n.projects.length>1?"multi-project":n.buildings.length>1?"single-project-multi-building":"single-building",M=ae==="multi-project"&&x!=="project",D=ae==="multi-project"||ae==="single-project-multi-building",T=ae!=="floors-only"&&x!=="project",k=x==="project"&&n.projects.length<=1||ae==="floors-only"&&Z.length<=1,y=Je(e.scope??qe,n,x),S=y.level==="all-projects"?null:n.projects.find(h=>h.id===y.projectId)??n.projects[0],L=y.level==="building"||y.level==="floor"?n.buildings.find(h=>h.id===y.buildingId):null,U=y.level==="floor"?n.floors.find(h=>h.id===y.floorId):null,Y=[];if(y.level==="all-projects")Y.push(`全部项目（${n.projects.length}）`);else if(y.level==="project")Y.push(ie(S?.name??"广实2号园"));else if(y.level==="building")S&&Y.push(`<span class="pacom-path-muted">${ie(S.name)}</span>`),Y.push(ie(L?.name??"E栋"));else{S&&ae!=="floors-only"&&Y.push(`<span class="pacom-path-muted">${ie(S.name)}</span>`),L&&T&&Y.push(`<span class="pacom-path-muted">${ie(L.name)}</span>`);const h=!T&&L?`${L.name} ${U?.name??"7F"}`:U?.name??"7F";Y.push(ie(h))}const Q='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',K=k?`<span class="pacom-path-trigger is-static">${Y.join(Q)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${a}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${Y.join(Q)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${W("chevron-down",12)}</span>
      </button>`;if(!a||k)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${K}</div>`;const oe=g.trim().toLowerCase(),ce=y.level==="all-projects"?n.projects[0]?.id??G.projectId:y.projectId,re=y.level==="building"||y.level==="floor"?y.buildingId:n.buildings.find(h=>h.projectId===ce)?.id??G.buildingId,ee=n.projects.filter(h=>!oe||h.name.toLowerCase().includes(oe)),A=n.buildings.filter(h=>h.projectId===ce&&(!oe||h.name.toLowerCase().includes(oe))),B=[...n.floors.filter(h=>h.buildingId===re)].sort((h,R)=>Oe(R.name)-Oe(h.name)).filter(h=>!oe||h.name.toLowerCase().includes(oe)),se=x==="project"||n.projects.length>1,N=x!=="project"&&D,ge=x==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${K}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${W("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${ie(g)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${W("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${se?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${M?`<button type="button" class="pacom-space-pop-item ${y.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${n.projects.length}）</span>
                        ${y.level==="all-projects"?W("check",14):""}
                      </button>`:""}
                ${ee.map(h=>{const R=y.level==="project"&&y.projectId===h.id;return`<button type="button" class="pacom-space-pop-item ${R?"is-active":""}" data-global-space-pick="project:${ie(h.id)}">
                      <span>${ie(h.name)}</span>
                      ${R?W("check",14):W("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${N?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${ie(n.projects.find(h=>h.id===ce)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${y.level==="project"?"is-active":""}" data-global-space-pick="project:${ie(ce)}">
                  <span>全园区</span>
                  ${y.level==="project"?W("check",14):""}
                </button>
                ${A.map(h=>{const R=y.level==="building"&&y.buildingId===h.id;return`<button type="button" class="pacom-space-pop-item ${R?"is-active":""}" data-global-space-pick="building:${ie(h.projectId)}:${ie(h.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${ie(h.name)}</span>
                        ${h.id===G.buildingId&&z>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${R?W("check",14):W("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${ge?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${ie(n.buildings.find(h=>h.id===re)?.name??"楼宇")} · 楼层</div>
                ${T?`<button type="button" class="pacom-space-pop-item ${y.level==="building"&&y.buildingId===re?"is-active":""}" data-global-space-pick="building:${ie(ce)}:${ie(re)}">
                        <span>整栋</span>
                        ${y.level==="building"&&y.buildingId===re?W("check",14):""}
                      </button>`:""}
                ${B.map(h=>{const R=s.scope.allowedFloorIds.includes(h.id),X=y.level==="floor"&&y.floorId===h.id,C=h.id===G.floorId&&z>0;return`<button type="button" class="pacom-space-pop-item ${X?"is-active":""}" style="${R?"":"opacity:0.5;"}" data-global-space-pick="floor:${ie(ce)}:${ie(re)}:${ie(h.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${ie(h.name)}</span>
                        ${C?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${X?W("check",14):R?h.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function Ze(e,n){e.querySelectorAll("[data-global-space-toggle]").forEach(a=>{a.addEventListener("click",g=>{g.stopPropagation(),n.onToggle()})}),e.querySelector("[data-global-space-search]")?.addEventListener("input",a=>{n.onSearch(a.currentTarget.value)}),e.querySelectorAll("[data-global-space-pick]").forEach(a=>{a.addEventListener("click",g=>{g.stopPropagation();const x=a.dataset.globalSpacePick;if(!x)return;const z=Pe(Qe(x));n.onPick(z)})})}function $(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const et=W("chevron-down",12),Le=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],Me=[{id:G.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:G.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:G.projectId,label:"广实2号园（全园区）",factor:18.2}],tt={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},at=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],$e=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function ze(e,n=""){const s=(e??"").trim().toLowerCase();return!(!s||s.includes("%")||s.includes("°c")||s.includes("ppm")||s.includes("ms")||s.includes("m²")||s.includes("/m2")||s.includes("db")||s.includes("lx")||n.includes("率")||n.includes("均")||n.includes("强度")||n.includes("延迟"))}function Ae(e,n){const s=e*n;return Math.abs(s)>=10?Math.round(s):Math.round(s*10)/10}function nt(e,n){const s=Number(String(e).replaceAll(",","")),a=n??"";return Number.isFinite(s)?a==="kWh"&&Math.abs(s)>=1e4?{value:(s/1e3).toFixed(1),unit:"MWh",title:`精确值：${s.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(s)?s.toLocaleString("en-US"):s.toLocaleString("en-US",{maximumFractionDigits:1}),unit:a,title:`${s.toLocaleString("en-US")} ${a}`.trim()}:{value:e,unit:a,title:`${e} ${a}`.trim()}}function lt(e,n){if(n===1)return e;const s=ze(e.unit);return{...e,kpis:e.kpis.map(a=>{const g=Number(String(a.value).replaceAll(",",""));return!Number.isFinite(g)||!ze(a.unit,a.label)?a:{...a,value:String(Ae(g,n))}}),series:s?e.series.map(a=>({...a,value:Ae(a.value,n),...typeof a.baseline=="number"?{baseline:Ae(a.baseline,n)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(a=>ze(a.unit)?{...a,value:Ae(a.value,n)}:a)}}function ot(e,n){const s=Math.max(...e.series.map(T=>Math.max(T.value,T.baseline??0)),1),a=46,g=34,x=36,z=Math.max(e.series.length*(a+g)+x*2,620),F=228,Z=184,ae=132,M=[0,.25,.5,.75,1].map(T=>{const k=Math.round(Z-T*ae);return`<line x1="${x-8}" y1="${k}" x2="${z-18}" y2="${k}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${T===0?"0":"3 3"}" />`}).join(""),D=e.series.map((T,k)=>{const y=x+k*(a+g),S=Math.max(8,Math.round(T.value/s*ae)),L=Z-S,U=typeof T.baseline=="number"&&T.value>T.baseline*1.08,Y=U?`<rect x="${y-8}" y="34" width="${a+16}" height="${Z-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",Q=typeof T.baseline=="number"?`<line x1="${y-5}" y1="${Math.round(Z-T.baseline/s*ae)}" x2="${y+a+5}" y2="${Math.round(Z-T.baseline/s*ae)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",K=n&&(U||k===1)?`<g><title>${U?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${y+a/2}" cy="18" r="7" fill="${U?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${y+a/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="500" fill="#fff">${U?"!":"S"}</text></g>`:"",oe=T.value>=1e4?`${(T.value/1e3).toFixed(1)}k`:T.value.toLocaleString("en-US");return`
        ${Y}
        ${Q}
        ${K}
        <g>
          <title>${$(T.label)}：实测 ${T.value.toLocaleString("en-US")} ${$(e.unit)}${T.baseline!==void 0?` / 基线 ${T.baseline.toLocaleString("en-US")} ${$(e.unit)}`:""}</title>
          <rect x="${y}" y="${L}" width="${a}" height="${S}" rx="7" fill="${U?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${y+a/2}" y="${L-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${oe}</text>
        <text x="${y+a/2}" y="${Z+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${$(T.label)}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${z} ${F}" style="width:100%; height:232px; display:block;" role="img" aria-label="${$(e.category)} 趋势图">
      ${M}
      ${D}
    </svg>
  `}function st(e,n){const s=e.connectivity==="offline";if(e.category==="hvac"){const a=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:s?[23.8,24,24.1,null,null,null,null,null]:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a],offline:s,colorIdx:n},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:s?[24,24,24,null,null,null,null,null]:[a,a,a,a,a,a,a,a],offline:s,colorIdx:n+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:s?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:s,colorIdx:n+2}]}if(e.category==="lighting"){const a=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)],offline:s,colorIdx:n},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:s,colorIdx:n+1}]}if(e.category==="sensor"){const a=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a],offline:s,colorIdx:n},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:s,colorIdx:n+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:s,colorIdx:n+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:s,colorIdx:n}]}function it(e){const n=e.points.filter(F=>typeof F=="number");if(!n.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const s=Math.min(...n),a=Math.max(...n),g=n.reduce((F,Z)=>F+Z,0)/n.length,x=e.points[e.points.length-1],z=F=>Math.abs(F)<100&&!Number.isInteger(F)?F.toFixed(1):Math.round(F).toString();return{min:z(s),avg:g.toFixed(Math.abs(g)<100?1:0),max:z(a),curr:typeof x=="number"?z(x):"离线"}}function ct(e,n,s){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="pacom-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const g=(z,F)=>{const L=[];for(const A of z)for(const B of A.points)typeof B=="number"&&L.push(B);const U=L.length?Math.min(...L)*.92:0,Y=L.length?Math.max(...L)*1.08:100,Q=Math.max(Y-U,1),K=[0,.5,1].map(A=>{const B=Math.round(26+106*(1-A)),se=(U+Q*A).toFixed(Q<15?1:0);return`
          <line x1="44" y1="${B}" x2="662" y2="${B}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${A===0?"0":"3 3"}" />
          <text x="38" y="${B+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${se}</text>
        `}).join(""),oe=a.map((A,B)=>`<text x="${44+B/(a.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${A}</text>`).join(""),ce=z.map((A,B)=>{const se=$e[(A.colorIdx+B)%$e.length],N=A.points,ge=[];let h=44,R=26+106/2,X=!1;N.forEach((H,de)=>{const le=44+de/(N.length-1)*618;if(typeof H=="number"){const _=26+106*(1-(H-U)/Q);ge.push(`${le.toFixed(1)},${_.toFixed(1)}`),h=le,R=_}else X=!0});const C=s?N.map((H,de)=>{if(typeof H!="number")return null;const le=44+de/(N.length-1)*618,ne=26+106*(1-(H*.96-U)/Q);return`${le.toFixed(1)},${ne.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${C?`<polyline fill="none" stroke="${se}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${C}" />`:""}
          ${ge.length?`<polyline fill="none" stroke="${se}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${ge.join(" ")}" />`:""}
          ${X?`<line x1="${h.toFixed(1)}" y1="${R.toFixed(1)}" x2="662" y2="${R.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${R-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),re=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="500" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,ee=z.map((A,B)=>{const se=$e[(A.colorIdx+B)%$e.length],N=it(A);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${se};"></span>${$(A.deviceName)} · ${$(A.label)}</span></td>
            <td><strong>${$(N.curr)}</strong> <span class="pacom-row-sub">${$(A.unit)}</span></td>
            <td>${$(N.min)} <span class="pacom-row-sub">${$(A.unit)}</span></td>
            <td>${$(N.avg)} <span class="pacom-row-sub">${$(A.unit)}</span></td>
            <td>${$(N.max)} <span class="pacom-row-sub">${$(A.unit)}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${$(F)}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${z.map((A,B)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${$e[(A.colorIdx+B)%$e.length]};"></span>${$(A.deviceName)}·${$(A.label)}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${K}
          ${oe}
          ${re}
          ${ce}
        </svg>
        <div class="pacom-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="pacom-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${ee}</tbody>
          </table>
        </div>
      </div>
    `};if(n==="shared")return g(e,"单图叠合对比（Shared）");const x=new Map;for(const z of e){const F=x.get(z.unit)??[];F.push(z),x.set(z.unit,F)}return Array.from(x.entries()).map(([z,F])=>g(F,`按单位分组泳道（${z}）`)).join("")}function rt(e){const n=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(x=>[x.label,String(x.value),x.baseline!==void 0?String(x.baseline):""].join(","))],s=new Blob([`\uFEFF${n.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(s),g=document.createElement("a");g.href=a,g.download=`pacom-${e.category}-${e.range}.csv`,g.click(),URL.revokeObjectURL(a)}function dt(e){const n=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],s=["时间",...e.map(F=>`${F.deviceName}·${F.label}(${F.unit})`)].join(","),a=n.map((F,Z)=>[F,...e.map(ae=>String(ae.points[Z]??"No Data"))].join(",")),g=new Blob([`\uFEFF${[s,...a].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),x=URL.createObjectURL(g),z=document.createElement("a");z.href=x,z.download="pacom-timeseries-export.csv",z.click(),URL.revokeObjectURL(x)}async function xt(e,n,s){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),g=a.get("tab"),x=a.get("cat"),z=a.get("device"),F=a.get("points"),Z=a.get("mode"),ae=a.get("interval");let M=g==="timeseries"?"timeseries":x&&Le.some(d=>d.id===x)?x:"energy",D="7d",T="2026-11-16",k="2026-11-23";const y=!!s.scope.allowedZoneIds?.length,S=s.scope.allowedFloorIds[0]??G.floorId,L={level:"floor",projectId:s.scope.allowedProjectIds[0]??G.projectId,buildingId:s.scope.allowedBuildingIds[0]??G.buildingId,floorId:S};function U(d){if(y)return{scope:L,scopeId:S};if(d.level==="all-projects")return s.scope.allowedProjectIds.includes(G.projectId)?{scope:d,scopeId:G.projectId}:{scope:L,scopeId:S};if(d.level==="project"){if(s.scope.allowedProjectIds.includes(d.projectId)){const q=Me.some(j=>j.id===d.projectId)?d.projectId:G.projectId;return{scope:d,scopeId:q}}return{scope:L,scopeId:S}}if(d.level==="building"){if(s.scope.allowedBuildingIds.includes(d.buildingId)){const q=Me.some(j=>j.id===d.buildingId)?d.buildingId:G.buildingId;return{scope:d,scopeId:q}}return{scope:L,scopeId:S}}return s.scope.allowedFloorIds.includes(d.floorId)?{scope:d,scopeId:d.floorId}:{scope:L,scopeId:S}}const Y=U(We());let Q=Y.scope,K=!1,oe="",ce=Y.scopeId,re="chart",ee=!0,A="breakdown",B=!1,se=null;const[N,ge]=await Promise.all([n.getSpatialTree(),n.getFloorDevices(G.floorId).catch(()=>[])]);let h=ge;const R=new Map,X=[];h.forEach((d,q)=>{const j=st(d,q);R.set(d.id,j),X.push(...j)});let C=Z==="shared"||Z==="grouped"?Z:"grouped",H=ae==="15m"||ae==="1h"||ae==="1d"?ae:"1h",de=!1;const le=[];if(F?F.split(",").forEach(d=>{X.some(q=>q.id===d)&&le.push(d)}):z&&R.has(z)&&(R.get(z)??[]).slice(0,2).forEach(d=>le.push(d.id)),!le.length){const d=h.find(I=>I.category==="hvac"),q=h.find(I=>I.category==="sensor"),j=h.find(I=>I.category==="lighting");d&&(R.get(d.id)??[]).slice(0,2).forEach(I=>le.push(I.id)),q&&(R.get(q.id)??[]).slice(0,1).forEach(I=>le.push(I.id)),j&&(R.get(j.id)??[]).slice(0,1).forEach(I=>le.push(I.id)),le.length||X.slice(0,3).forEach(I=>le.push(I.id))}const _=new Set(le),ne=new Set(h.filter((d,q)=>q<2||(R.get(d.id)??[]).some(j=>_.has(j.id))).map(d=>d.id)),pe=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:X.filter(d=>d.pointKey==="temp"||d.pointKey==="setpoint"||d.pointKey==="co2").slice(0,4).map(d=>d.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:X.filter(d=>d.pointKey==="dimming"||d.pointKey==="power").slice(0,4).map(d=>d.id),mode:"grouped",interval:"15m"}];let me="";async function m(){const d=M==="timeseries"?"energy":M,q=D==="custom"?"30d":D;se=await n.getAnalysisReport(d,q,G.floorId),b()}function b(){if(!se)return;const d=M==="timeseries",q=M==="timeseries"?"energy":M,j=Le.find(i=>i.id===q)??Le[0],I=Me.find(i=>i.id===ce)??Me[0],P=lt(se,I.factor),te=P.zoneBreakdown.filter(i=>i.status==="warning"),ve=tt[q],ke=Math.max(...P.zoneBreakdown.map(i=>i.value),1),Ie=X.filter(i=>_.has(i.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${Te({tree:N,session:s,scope:Q,isOpen:K,searchKeyword:oe})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${D==="today"?"selected":""}>今日</option>
                <option value="7d" ${D==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${D==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${D==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${d?"":`<button class="pacom-btn ${B?"pacom-btn--primary":""}" data-toggle-canvas="1">${B?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${Le.map(i=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${M===i.id}" data-cat="${i.id}">${i.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${M==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${D==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${$(T)}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${$(k)}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${d?`
            <div class="pacom-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${Ie.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${pe.map(i=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${$(i.id)}">${W("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${$(i.name)}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${h.map(i=>{const O=R.get(i.id)??[],he=ne.has(i.id),xe=O.filter(fe=>_.has(fe.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${$(i.id)}" style="cursor:pointer; justify-content:space-between;" title="${$(i.name)}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${he?"0deg":"-90deg"}); opacity:0.65;">${et}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${$(i.name)}</div>
                                <div class="pacom-row-sub">${O.length} 个测点 · ${i.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${xe>0?`<span class="pacom-badge pacom-badge--accent">${xe}</span>`:""}
                          </button>
                          ${he?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${O.map(fe=>{const je=_.has(fe.id),J=$e[fe.colorIdx%$e.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${je?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${$(fe.id)}" data-ts-point="${$(fe.id)}" ${je?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${J};"></span>
                                            <span style="color:var(--pacom-text-primary);">${$(fe.label)}</span>
                                          </span>
                                          <span class="pacom-row-sub">${$(fe.unit)}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="pacom-subnav-main" style="padding:2px 4px 24px;">
                ${me?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${$(me)}</span></div>`:""}
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${W("clock",12)} 排程(S) · ${W("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${de}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${H==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${H==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${H==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${C==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${C==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${ct(Ie,C,de)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="pacom-kpi-strip" role="region" aria-label="核心统计指标">
                ${P.kpis.map(i=>{const O=nt(i.value,i.unit);return`
                      <div class="pacom-kpi-cell" title="${$(O.title)}">
                        <span class="pacom-kpi-label">${$(i.label)}</span>
                        <div class="pacom-kpi-value">
                          <span>${$(O.value)}</span>
                          ${O.unit?`<span class="pacom-kpi-unit">${$(O.unit)}</span>`:""}
                        </div>
                        <span class="pacom-kpi-delta">${$(i.delta??"与基线持平")}</span>
                      </div>`}).join("")}
              </div>

              <section class="pacom-section">
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">${$(j?.label??"趋势")}趋势（${$(P.unit)}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${$(I.label)} · 更新于 ${$(P.updatedAt.slice(5,16).replace("T"," "))}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${ee}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${re==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${re==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${te.length>0?`关注：${te.map(i=>$(i.zoneName)).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${$(j?.desc??"空间运行洞察")} · ${$(ve.summary)}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${re==="chart"?ot(P,ee):`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${$(P.unit)}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${P.series.map(i=>{const O=typeof i.baseline=="number"&&i.value>i.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${$(i.label)}</strong></td>
                                    <td>${i.value.toLocaleString("en-US")}</td>
                                    <td>${i.baseline!==void 0?i.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${O?"pacom-badge--warning":"pacom-badge--online"}">${O?"超基线":"正常"}</span></td>
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
                    <span class="pacom-row-sub">${P.zoneBreakdown.length} 个功能区</span>
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
                          ${P.zoneBreakdown.map(i=>{const O=Math.max(8,Math.round(i.value/ke*100));return`
                                <tr>
                                  <td style="font-weight:500;">${$(i.zoneName.replace(/^7F\s*/,""))}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${O}%; height:100%; border-radius:999px; background:${i.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${i.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${$(i.unit)}</span></td>
                                  <td>
                                    <span class="pacom-badge ${i.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${i.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="pacom-section-title">${B?"E7F 空间对照预览":q==="energy"&&A==="load"?"峰谷负荷分布（Load Profile）":ve.title}</h2>
                    ${!B&&q==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${A==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${A==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${B?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${B?'<img class="pacom-plan-img" src="./media/floors/e/07F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${q==="environment"?`
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
                        ${(q==="energy"&&A==="load"?at:ve.items).map(i=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${i.name}</span>
                                <span class="pacom-row-sub">${i.detail} · <strong style="color:var(--pacom-text-primary);">${i.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,i.pct)}%; height:100%; border-radius:999px; background:${i.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,Ze(e,{onToggle:()=>{K=!K,b(),K&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:i=>{oe=i,b();const O=e.querySelector("[data-global-space-search]");O&&(O.focus(),O.setSelectionRange(i.length,i.length))},onPick:i=>{const O=U(i);Q=O.scope,ce=O.scopeId,K=!1,b()}}),e.querySelectorAll("[data-cat]").forEach(i=>{i.addEventListener("click",()=>{M=i.dataset.cat??"energy",me="",M==="timeseries"?b():m()})}),e.querySelector("[data-range-select]")?.addEventListener("change",i=>{D=i.currentTarget.value??"7d",m()}),e.querySelector("[data-custom-start]")?.addEventListener("change",i=>{T=i.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",i=>{k=i.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(i=>{i.addEventListener("click",()=>{re=i.dataset.chartMode??"chart",b()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{ee=!ee,b()}),e.querySelectorAll("[data-energy-right]").forEach(i=>{i.addEventListener("click",()=>{A=i.dataset.energyRight??"breakdown",b()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{d?dt(Ie):rt(P)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{B=!B,b()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(i=>{i.addEventListener("click",()=>{const O=i.dataset.tsExpand;O&&(ne.has(O)?ne.delete(O):ne.add(O),b())})}),e.querySelectorAll("[data-ts-point]").forEach(i=>{i.addEventListener("change",()=>{const O=i.dataset.tsPoint;O&&(i.checked?_.add(O):_.delete(O),me="",b())})}),e.querySelectorAll("[data-ts-mode]").forEach(i=>{i.addEventListener("click",()=>{C=i.dataset.tsMode??"grouped",b()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",i=>{H=i.currentTarget.value??"1h",b()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{de=!de,b()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const O=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(_).join(","))}&mode=${C}&interval=${H}`,he=`${window.location.origin}${window.location.pathname}${O}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(he).catch(()=>{}),window.history.replaceState(null,"",O),me=`已复制分享链接（含 ${_.size} 个测点、${C==="grouped"?"按单位分组":"单图叠合"}、${H} 粒度）。`,b()}),e.querySelectorAll("[data-load-fav]").forEach(i=>{i.addEventListener("click",()=>{const O=pe.find(he=>he.id===i.dataset.loadFav);O&&(_.clear(),O.pointIds.forEach(he=>{_.add(he);const xe=he.split(":")[0];xe&&ne.add(xe)}),C=O.mode,H=O.interval,me=`已加载收藏视图「${O.name}」。`,b())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(_.size===0)return;const i=`自定义对比 #${pe.length+1}（${_.size} 测点）`;pe.push({id:`fav-${Date.now()}`,name:i,pointIds:Array.from(_),mode:C,interval:H}),me=`已保存当前时序配置为「${i}」。`,b()})}await m()}function Ve(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const n=e.name.includes("702")?"702 照明":"主照明",s=Number(e.telemetry.dimming?.value??0);return s>0?`${n} ${s}%`:`${n} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const Be={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},pt={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},ut=W("chevron-down",12),mt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function r(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Re(e){const n=e.trim().toUpperCase();if(n==="RF"||n==="R"||n==="ROOF"||n.includes("屋面"))return 999;const s=n.match(/(-?\d+)/);if(!s)return 0;const a=Number(s[1]);return n.startsWith("B")?-Math.abs(a):a}async function wt(e,n,s){const a=await n.getSpatialTree();n.mode;const g=s.scope.canControlDevices,x=s.scope.canManageAlarms,z=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null,F=a.floors.filter(o=>s.scope.allowedFloorIds.includes(o.id)),Z=z||a.projects.length<=1&&a.buildings.length<=1&&F.length<=1?"floors-only":a.projects.length>1?"multi-project":a.buildings.length>1?"single-project-multi-building":"single-building",ae=Z==="multi-project",M=Z==="multi-project"||Z==="single-project-multi-building",D=Z!=="floors-only",T=Z==="floors-only"&&F.length<=1;let k=We(),y="devices",S=!1,L=!1,U="",Y="",Q="all",K="all";const oe=new URLSearchParams(window.location.hash.split("?")[1]??""),ce=oe.get("device"),re=oe.get("zone");let ee=ce,A=!!ce,B="control",se="",N=!1,ge="today",h="devices";const R=new Set,X=new Set;let C=[],H=[],de=[],le=null,_=null,ne=1,pe=0,me=0,m=null;function b(){return a.zones.filter(o=>!(k.level==="floor"&&o.floorId!==k.floorId||z&&!z.includes(o.id)))}function d(o){return[...a.floors.filter(c=>c.buildingId!==o?!1:Z==="floors-only"?s.scope.allowedFloorIds.includes(c.id):!0)].sort((c,t)=>Re(t.name)-Re(c.name))}async function q(o,u=!1){if(a.projects.length===0){k={level:"all-projects"},Pe(k),C=[],H=[],de=[],J();return}let c=o;c.level==="all-projects"&&!ae&&(c={level:"project",projectId:a.projects[0]?.id??G.projectId}),c.level==="project"&&!M&&(c={level:"building",projectId:c.projectId,buildingId:a.buildings[0]?.id??G.buildingId}),c.level==="building"&&!D&&(c={level:"floor",projectId:c.projectId,buildingId:c.buildingId,floorId:F[0]?.id??G.floorId}),k=c,Pe(c),_=null,K=u&&re?re:"all",N=!1,L=!1,S=!1,X.clear(),ne=1,pe=0,me=0,m&&(m(),m=null);const t=k.level==="floor"?k.floorId:G.floorId;if(k.level==="floor")try{const[l,p,f]=await Promise.all([n.getFloorDevices(k.floorId),n.listAlarms(k.floorId),n.listWorkOrders(k.floorId)]);C=l,H=p,de=f,C.some(v=>v.id===ee)?u&&ce&&(A=!0):(ee=C[1]?.id??C[0]?.id??null,A=!1),m=n.subscribeFloorEvents(k.floorId,async v=>{v.type==="control.receipt.updated"&&le?.batchId===v.batchId&&(le=await n.getControlBatch(v.batchId)),(v.type==="telemetry.updated"||v.type==="device.connectivity")&&k.level==="floor"&&(C=await n.getFloorDevices(k.floorId)),v.type==="alarm.changed"&&k.level==="floor"&&(H=await n.listAlarms(k.floorId)),te()})}catch(l){C=[],H=[],de=[],ee=null,A=!1,_=l instanceof Error?l.message:String(l)}else{A=!1;const[l,p,f]=await Promise.all([n.getFloorDevices(t).catch(()=>[]),n.listAlarms(t).catch(()=>[]),n.listWorkOrders(t).catch(()=>[])]);C=l,H=p,de=f}J()}function j(o){return o?a.zones.find(u=>u.id===o)?.name??o:"未分配逻辑区"}function I(){const o=Y.trim().toLowerCase();return C.filter(u=>K!=="all"&&u.logicalZoneId!==K||Q!=="all"&&u.category!==Q?!1:o?u.name.toLowerCase().includes(o)||u.id.toLowerCase().includes(o)||j(u.logicalZoneId).toLowerCase().includes(o):!0)}async function P(o,u,c){!o.length||k.level!=="floor"||!g||(o.forEach(t=>R.add(t)),le=await n.dispatchControlBatch({floorId:k.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:o.map(t=>({deviceId:t,command:u,targetValue:c}))}),te())}function te(){const o=document.activeElement,u=o?.dataset?.role,c=o&&"selectionStart"in o?o.selectionStart:null,t=o&&"selectionEnd"in o?o.selectionEnd:null,l=e.querySelector(".pacom-list")?.scrollTop??0;J();const p=e.querySelector(".pacom-list");if(p&&(p.scrollTop=l),u==="search"||u==="space-search"){const f=e.querySelector(`[data-role="${u}"]`);f&&(f.focus(),c!==null&&t!==null&&f.setSelectionRange(c,t))}}function ve(){const o=e.querySelector('[data-role="canvas-viewport"]');o&&(o.style.transform=`translate(${pe}px, ${me}px) scale(${ne})`);const u=e.querySelector('[data-role="zoom-label"]');u&&(u.textContent=`${Math.round(ne*100)}%`)}function ke(o){if(o==="all")return{level:"all-projects"};const u=o.split(":");return u[0]==="project"&&u[1]?{level:"project",projectId:u[1]}:u[0]==="building"&&u[1]&&u[2]?{level:"building",projectId:u[1],buildingId:u[2]}:u[0]==="floor"&&u[1]&&u[2]&&u[3]?{level:"floor",projectId:u[1],buildingId:u[2],floorId:u[3]}:{level:"all-projects"}}function Ie(o){const u=k;if(u.level==="all-projects"){const c=Y.trim().toLowerCase(),t=a.projects.filter(l=>!c||l.name.toLowerCase().includes(c));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${t.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${W("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${t.map(l=>{const p=a.buildings.filter(f=>f.projectId===l.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${r(l.id)}">
                  <div>
                    <div class="pacom-row-title">${r(l.name)}</div>
                    <div class="pacom-row-sub">${r(l.city??"")} · ${p} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(u.level==="project"){const c=Y.trim().toLowerCase(),t=a.buildings.filter(f=>f.projectId===u.projectId&&(!c||f.name.toLowerCase().includes(c))),l=C.filter(f=>f.connectivity==="online").length,p=C.length?Math.round(l/C.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${t.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${W("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${t.map(f=>{const v=f.id===G.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${r(f.projectId)}:${r(f.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${v&&o>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${r(f.name)}</div>
                      <div class="pacom-row-sub">地上 ${f.aboveFloors} 层 · ${f.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${v?"pacom-badge--accent":"pacom-badge--neutral"}">${v?`在线 ${p}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(u.level==="building"){const c=Y.trim().toLowerCase(),t=d(u.buildingId).filter(p=>!c||p.name.toLowerCase().includes(c)),l=a.buildings.find(p=>p.id===u.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${r(l?.name??"楼宇")} 楼层导览（${t.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${W("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${t.map(p=>{const f=s.scope.allowedFloorIds.includes(p.id),v=p.id===G.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${f?"":"opacity:0.6;"}" data-nav-scope="floor:${r(u.projectId)}:${r(u.buildingId)}:${r(p.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${v&&o>0?"pacom-dot--warning":p.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${r(l?.name??"")} ${r(p.name)}</div>
                      <div class="pacom-row-sub">${p.plan?"2D 平面控图就绪":"暂未上传平面图"}${v&&o>0?` · ${o} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${f&&p.plan?"pacom-badge--online":"pacom-badge--neutral"}">${f?p.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(y==="devices"){const c=I(),t=b(),l=Array.from(X);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${z?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${z.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${Q==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${Q==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${Q==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${Q==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${Q==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${c.length} 台${g&&l.length?` · 已选 ${l.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${W("x",14)}</button>
          </div>
          ${t.length>0&&!_?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${K==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${t.map(p=>`<button type="button" class="pacom-zone-pill ${K===p.id?"is-active":""}" data-filter-zone="${r(p.id)}">${r(p.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${_?`<div class="pacom-alert-banner">${r(_)}</div>`:c.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':c.map(p=>{const f=p.id===ee&&A,v=X.has(p.id),V=p.connectivity==="offline",E=V?"pacom-dot--critical":"pacom-dot--online",w=V?"离线":p.category==="lighting"?`${p.telemetry.dimming?.value??"--"}%`:p.category==="hvac"?`${p.telemetry.setpoint?.value??"--"}°C`:p.category==="sensor"?`${p.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${f?"is-selected":""}" data-select-device="${r(p.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${g?`<input type="checkbox" name="devCheck-${r(p.id)}" data-check-device="${r(p.id)}" ${v?"checked":""} style="margin-top:3px;" aria-label="勾选 ${r(p.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${r(p.name)}</div>
                              <div class="pacom-row-sub">${r(j(p.logicalZoneId).replace(/^7F\s*/,""))} · ${r(Be[p.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${V?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${E}"></span>${r(w)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${g&&l.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${l.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(y==="zones"){const c=b(),t={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${c.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${W("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${c.map(l=>{const p=C.filter(w=>w.logicalZoneId===l.id),f=p.filter(w=>w.connectivity==="online").length,v=p.filter(w=>w.category==="lighting"||w.category==="hvac").length,V=K===l.id,E=t[l.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${V?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${V?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${r(V?"all":l.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${r(l.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${f}/${p.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${E.temp} · ${E.occ}</div>
                  ${v>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${r(l.id)}" data-zone-val="true" ${g?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${r(l.id)}" data-zone-val="false" ${g?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${H.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${W("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${H.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':H.map(c=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${r(c.title)}</strong>
                      <span class="pacom-badge ${c.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${c.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${r(c.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${r(c.deviceId)}">定位设备</button>
                      ${c.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${r(c.id)}" ${x?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function i(o){const u=k,c=b().length,t=u.level==="floor"?"搜索设备或区域…":u.level==="building"?"搜索楼层…":u.level==="project"?"搜索楼宇…":"搜索园区…",l=u.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${S&&y==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${C.length}</button>
          <button type="button" class="pacom-hud-pill ${S&&y==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${c}</button>
          <button type="button" class="pacom-hud-pill ${o>0?"pacom-hud-pill--alert":""} ${S&&y==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${o}</button>
        `:u.level==="building"?`
            <button type="button" class="pacom-hud-pill ${S?"is-active":""}" data-toggle-hud="1">楼层 ${d(u.buildingId).length}</button>
            ${o>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${o}</button>`:""}
          `:u.level==="project"?`
              <button type="button" class="pacom-hud-pill ${S?"is-active":""}" data-toggle-hud="1">楼宇 ${a.buildings.filter(p=>p.projectId===u.projectId).length}</button>
              ${o>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${o}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${S?"is-active":""}" data-toggle-hud="1">园区 ${a.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${W("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${t}" value="${r(Y)}" aria-label="${t}" />
          ${l}
        </div>
        ${S?`<div class="pacom-hud-sheet" data-role="hud-sheet">${Ie(o)}</div>`:""}
      </div>
    `}function O(o){if(T||k.level!=="building"&&k.level!=="floor")return"";const u=k.buildingId,c=k.projectId,t=d(u);return!D&&t.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${D?`<button type="button" class="pacom-elev-item ${k.level==="building"?"is-active":""}" data-nav-scope="building:${r(c)}:${r(u)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${t.map(l=>{const p=s.scope.allowedFloorIds.includes(l.id),f=k.level==="floor"&&k.floorId===l.id,v=l.id===G.floorId&&o>0;return`
              <button type="button" class="pacom-elev-item ${f?"is-active":""} ${p?"":"is-locked"}"
                data-nav-scope="floor:${r(c)}:${r(u)}:${r(l.id)}"
                title="${r(l.name)}${p?v?` · ${o} 条告警`:"":"（无权限）"}">
                ${v?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${r(l.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function he(o,u){const c=k;if(c.level==="floor")return _?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${h==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${h==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${h==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${W("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(ne*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${W("plus",14)}</button>
        </div>
      `;const t=C.length?Math.round(o/C.length*100):100,l=c.level==="building"?"418 kWh":"1,248 kWh",p=Math.round(96.2*.45+93.6*.35+t*.2),f=c.level==="building"?d(c.buildingId).find(v=>v.id===G.floorId)??d(c.buildingId)[0]:null;return`
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
          <span>今日能耗 <strong>${l}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${u}</strong></span>
        </button>
        ${c.level==="building"&&f?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${r(c.projectId)}:${r(c.buildingId)}:${r(f.id)}">进入 ${r(f.name)} 平面图 →</button>`:""}
      </div>
    `}function xe(o,u){const c=k,t=C.length?Math.round(o/C.length*100):100;if(c.level==="all-projects")return`
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
            ${a.projects.map((v,V)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${V===0?50:28}%; top:${V===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${r(v.id)}">
                  <span class="pacom-dot ${u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${r(v.name)} · 在线 ${t}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(c.level==="project"){const v=a.projects.find(E=>E.id===c.projectId)??a.projects[0],V=a.buildings.filter(E=>!v||E.projectId===v.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${r(v?.imageUrl??"./media/gzlab.jpg")}" alt="${r(v?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${V.map((E,w)=>{const ue=E.id===G.buildingId;return`
                  <button type="button" class="pacom-pin ${ue?"is-selected":""}" style="left:${w===0?56:38}%; top:${w===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${r(E.projectId)}:${r(E.id)}">
                    <span class="pacom-dot ${ue&&u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${r(E.name)} · ${ue?`在线 ${t}% · 告警 ${u}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(c.level==="building"){const v=a.buildings.find(E=>E.id===c.buildingId),V=d(c.buildingId).find(E=>E.id===G.floorId)??d(c.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${r(v?.imageUrl??"./media/building-e.webp")}" alt="${r(v?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${V?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${r(c.projectId)}:${r(c.buildingId)}:${r(V.id)}">
                    <span class="pacom-dot ${u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${r(v?.name??"")} ${r(V.name)} · 在线 ${o}/${C.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const l=a.floors.find(v=>v.id===c.floorId),p=a.buildings.find(v=>v.id===c.buildingId),f=b();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${_?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${r(_)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${pe}px, ${me}px) scale(${ne});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${r(l?.plan?.imageUrl??"./media/floors/e/07F.webp")}" alt="${r(p?.name??"楼宇")} ${r(l?.name??"7F")} 平面图" />
                  ${f.map((v,V)=>{const E=mt[v.id];if(!E)return"";const w=K===v.id,ue=["23.2°C","24.6°C","22.8°C","23.9°C"],we=["有人 74%","会议中","有人 52%","空闲"],Ee=h==="temp"?` · ${ue[V%ue.length]}`:h==="occupancy"?` · ${we[V%we.length]}`:"",Ge=h==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":h==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${w?"is-active":""}"
                          style="left:${E.left}%; top:${E.top}%; width:${E.width}%; height:${E.height}%; ${w?"":Ge}"
                          data-filter-zone="${r(w?"all":v.id)}"
                          title="${r(v.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${r(v.name.replace(/^7F\s*/,""))}${Ee}</span>
                        </button>`}).join("")}
                  ${C.filter(v=>v.planPoint).map(v=>{const V=H.some(Ee=>Ee.deviceId===v.id&&Ee.status==="active"),E=S&&y==="alarms",w=K!=="all"&&v.logicalZoneId!==K||E&&!V,ue=E&&V?"background:var(--pacom-status-critical);":"",we=v.category==="gateway"?Math.min(92,v.planPoint.y*100+5.5):v.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${v.id===ee&&A?"is-selected":""} ${v.connectivity==="offline"?"pacom-pin--offline":""} ${w?"pacom-pin--dimmed":""}"
                          style="left:${(v.planPoint.x*100).toFixed(2)}%; top:${we.toFixed(2)}%; ${ue}"
                          data-pin-device="${r(v.id)}" title="${r(v.name)}">
                          <span class="pacom-dot ${V?"pacom-dot--critical":v.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${r(Ve(v))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function fe(){if(k.level!=="floor"||!A)return"";const o=C.find(w=>w.id===ee);if(!o)return"";const u=o.category==="lighting",c=o.category==="hvac",t=Number(o.telemetry.dimming?.value??50),l=Number(o.telemetry.setpoint?.value??24),p=R.has(o.id),f=H.filter(w=>w.deviceId===o.id&&w.status==="active"),v=de.filter(w=>w.deviceId===o.id&&w.status!=="closed"),V=c?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:u?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],E=u?[{label:"当前开关",value:t>0?"开启":"关闭"},{label:"当前亮度",value:`${t}%`},{label:"实时功率",value:t>0?`${Math.round(t*1.4)} W`:"0 W"},{label:"运行模式",value:p?"人工覆盖":"自动策略"}]:c?[{label:"室内温度",value:`${o.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${l.toFixed(1)}°C`},{label:"运行工况",value:o.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:p?"人工覆盖":"自动策略"}]:o.category==="sensor"?[{label:"实时温度",value:`${o.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${o.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${o.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:o.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:o.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:o.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:o.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:o.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${r(o.name)}</h2>
            <div class="pacom-row-sub">${r(j(o.logicalZoneId))} · ${r(Be[o.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${o.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${o.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${W("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${B==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${B==="trend"}" data-drawer-tab="trend">趋势与告警${f.length>0?` (${f.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${B==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${B==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${E.map(w=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${w.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${r(w.value)}</strong>
                  </div>`).join("")}
            </div>

            ${c?`
                <div class="pacom-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${o.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${r(o.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${o.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${o.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${o.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${o.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${l.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${u||c?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${p&&g?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${r(o.id)}">恢复自动策略</button>`:g?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${o.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${u?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${g?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${g?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${t}%</strong>
                        <input type="range" name="ctrlDimming" min="0" max="100" step="10" value="${t}" data-ctrl-slider="lighting.dimming" ${g?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${g?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${g?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${l-.5}" ${g?"":"disabled"}>-0.5°C</button>
                        <strong>${l.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${l+.5}" ${g?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${le?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${r(le.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${le.receipts.map(w=>{const ue=pt[w.status]??{text:w.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${r(w.deviceId)}</strong> · ${r(w.command)} → ${r(w.targetValue)}</div>
                              ${w.errorMessage?`<div style="color:var(--pacom-status-critical);">${r(w.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${ue.badge}">${ue.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:B==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${u?"亮度 %":c?"温度 °C":o.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${r(o.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${o.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${u?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":c?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${f.length===0&&v.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${f.map(w=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${r(w.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${r(w.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${v.map(w=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${r(w.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${r(w.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${r(Ve(o))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${r(j(o.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${se?`<div class="pacom-info-banner">${r(se)}</div>`:""}
                ${V.map(w=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${r(w.name)}">${r(w.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${r(w.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="pacom-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${W("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${r(o.id)}</code> · v${o.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${o.planPoint?`x=${o.planPoint.x.toFixed(2)}, y=${o.planPoint.y.toFixed(2)} (图 v${o.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${o.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${o.hardwareBinding?`${o.hardwareBinding.protocol.toUpperCase()} · ${o.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function je(o,u,c){if(!N)return"";const t=Math.max(0,C.length-o),l=ge==="week",p=H.filter(f=>f.status==="active").slice(0,2);return`
      <div class="pacom-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${l?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!l}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${l}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${W("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${l?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${l?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${r(c)}°C · ${o}/${C.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${u} 告警 · ${t} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,R.size)} 覆盖 · ${de.filter(f=>f.status!=="closed").length} 工单</strong></div>
        </div>
        ${p.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${p.map(f=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${r(f.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${r(f.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function J(){if(a.projects.length===0){e.innerHTML=`
        <div class="pacom-shell" style="position:relative;">
          <header class="pacom-header">
            <div class="pacom-header-top">
              <div class="pacom-title-group">
                <h1 class="pacom-title">空间总览</h1>
                ${Te({tree:a,session:s,scope:k,activeAlarmCount:0,isOpen:!1,searchKeyword:""})}
              </div>
            </div>
          </header>
          <main class="pacom-spatial-stage" style="display:flex; align-items:center; justify-content:center; padding:24px;">
            <div class="dep-empty-card" style="max-width:520px; width:100%; background:var(--pacom-surface-card);">
              <div class="dep-empty-icon">${W("building-2",20)}</div>
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
              <span class="pacom-row-sub" style="max-width:400px;">当前机构还未建立空间档案。先创建首个项目并添加楼宇、楼层与平面图，即可在此查看全景与实时设备态势。</span>
              <div class="dep-empty-steps">
                <span>1. 创建项目</span>
                <span>→</span>
                <span>2. 添加楼宇与楼层</span>
                <span>→</span>
                <span>3. 上传平面图</span>
              </div>
              <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-first-project="1" ${s.scope.canEditDeployment?"":"disabled"}>+ 创建第一个项目</button>
            </div>
          </main>
        </div>
      `,e.querySelector("[data-go-create-first-project]")?.addEventListener("click",()=>{window.location.hash="#deployment?sec=projects&new=project"});return}const o=H.filter(t=>t.status==="active").length,u=C.filter(t=>t.connectivity==="online").length,c=C.find(t=>t.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${Te({tree:a,session:s,scope:k,activeAlarmCount:o,isOpen:L,searchKeyword:U})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${_?'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${N}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${u}/${C.length} 在线 · ${r(c)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${ut}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${je(u,o,c)}

        <main class="pacom-spatial-stage">
          ${i(o)}
          ${xe(u,o)}
          ${O(o)}
          ${he(u,o)}
          ${fe()}
        </main>
      </div>
    `,Ke()}function Ke(){Ze(e,{onToggle:()=>{L=!L,L&&(N=!1,S=!1),J(),L&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:t=>{U=t,J();const l=e.querySelector("[data-global-space-search]");l&&(l.focus(),l.setSelectionRange(t.length,t.length))},onPick:t=>{L=!1,q(t)}}),e.querySelectorAll("[data-nav-scope]").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation(),t.dataset.navScope&&q(ke(t.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation();const p=t.dataset.hudTab;S&&y===p?S=!1:(y=p,S=!0,L=!1,N=!1),J()})}),e.querySelectorAll("[data-toggle-hud]").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation(),S=!S,S&&(L=!1,N=!1),J()})}),e.querySelectorAll("[data-close-hud]").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation(),S=!1,J()})});const o=e.querySelector('[data-role="search"]');o?.addEventListener("focus",()=>{S||(S=!0,L=!1,N=!1,te())}),o?.addEventListener("input",t=>{Y=t.currentTarget.value,S=!0,te()}),e.querySelector('[data-role="category"]')?.addEventListener("change",t=>{Q=t.currentTarget.value,J()}),e.querySelectorAll("[data-filter-zone]").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation(),K=t.dataset.filterZone??"all",J()})}),e.querySelectorAll("[data-select-device]").forEach(t=>{t.addEventListener("click",l=>{l.target.tagName!=="INPUT"&&(ee=t.dataset.selectDevice??null,A=!0,J())})}),e.querySelectorAll("[data-check-device]").forEach(t=>{t.addEventListener("change",()=>{const l=t.dataset.checkDevice;l&&(t.checked?X.add(l):X.delete(l),J())})}),e.querySelectorAll("[data-pin-device]").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation(),ee=t.dataset.pinDevice??null,A=!0,L=!1,N=!1,J()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{A=!1,J()}),e.querySelectorAll("[data-drawer-tab]").forEach(t=>{t.addEventListener("click",()=>{B=t.dataset.drawerTab??"control",se="",J()})}),e.querySelectorAll("[data-drawer-doc]").forEach(t=>{t.addEventListener("click",()=>{se=`已调阅「${t.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,J()})}),e.querySelectorAll("[data-briefing-period]").forEach(t=>{t.addEventListener("click",()=>{ge=t.dataset.briefingPeriod??"today",J()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.goAlarmId??"";window.location.hash=l?`#alarms?alarm=${encodeURIComponent(l)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.goWoId??"";window.location.hash=l?`#alarms?wo=${encodeURIComponent(l)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",t=>{const l=t.currentTarget.dataset.releaseOverride;l&&(R.delete(l),J())}),e.querySelectorAll("[data-zone-power]").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation();const p=t.dataset.zonePower,f=t.dataset.zoneVal==="true";if(!p)return;const v=C.filter(E=>E.logicalZoneId===p&&E.category==="lighting").map(E=>E.id),V=C.filter(E=>E.logicalZoneId===p&&E.category==="hvac").map(E=>E.id);v.length?P(v,"lighting.power",f):V.length&&P(V,"hvac.power",f)})}),e.querySelectorAll("[data-locate-device]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.locateDevice;l&&(ee=l,A=!0,S=!1,J())})}),e.querySelectorAll("[data-go-alarms]").forEach(t=>{t.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(l)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(l)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation(),N=!N,N&&(L=!1,S=!1),J()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const t=C.filter(E=>E.connectivity==="online").length,l=H.filter(E=>E.status==="active").length,p=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${t}/${C.length}（离线 ${C.length-t} 台）`,`待处理告警：${l} 条`,`人工覆盖中：${R.size} 台`].join(`
`),f=new Blob([p],{type:"text/plain;charset=utf-8;"}),v=URL.createObjectURL(f),V=document.createElement("a");V.href=v,V.download="pacom-daily-briefing.txt",V.click(),URL.revokeObjectURL(v)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(t=>{t.addEventListener("click",()=>{if(!ee||!t.dataset.ctrlCmd)return;const l=t.dataset.ctrlVal??"",p=l==="true"?!0:l==="false"?!1:Number(l);P([ee],t.dataset.ctrlCmd,p)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",t=>{const l=t.currentTarget;!ee||!l.dataset.ctrlSlider||P([ee],l.dataset.ctrlSlider,Number(l.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(t=>{t.addEventListener("click",()=>{const l=Array.from(X),p=t.dataset.batchVal??"",f=p==="true"?!0:p==="false"?!1:p;P(l,t.dataset.batchCmd,f)})}),e.querySelectorAll("[data-ack-alarm]").forEach(t=>{t.addEventListener("click",async()=>{!t.dataset.ackAlarm||k.level!=="floor"||!x||(await n.acknowledgeAlarm(t.dataset.ackAlarm,"首页快速确认"),H=await n.listAlarms(k.floorId),J())})}),e.querySelectorAll("[data-canvas-layer]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.canvasLayer;l&&(h=l,J())})}),e.querySelectorAll("[data-zoom]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.zoom;l==="in"?ne=Math.min(2.6,Number((ne+.2).toFixed(2))):l==="out"?ne=Math.max(.6,Number((ne-.2).toFixed(2))):(ne=1,pe=0,me=0),ve()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",t=>{t.preventDefault();const l=k;if(l.level!=="building"&&l.level!=="floor")return;const p=d(l.buildingId),f=[...D?[{level:"building",projectId:l.projectId,buildingId:l.buildingId}]:[],...p.map(E=>({level:"floor",projectId:l.projectId,buildingId:l.buildingId,floorId:E.id}))],v=f.findIndex(E=>E.level==="building"?l.level==="building":E.level==="floor"&&l.level==="floor"&&E.floorId===l.floorId);if(v<0)return;const V=Math.max(0,Math.min(f.length-1,v+(t.deltaY>0?1:-1)));V!==v&&f[V]&&q(f[V])},{passive:!1});const c=e.querySelector('[data-role="canvas-stage"]');if(c&&!_){let t=!1,l=!1,p=0,f=0,v=0,V=0;c.addEventListener("pointerdown",w=>{w.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(t=!0,l=!1,p=w.clientX,f=w.clientY,v=pe,V=me,c.classList.add("is-panning"),c.setPointerCapture?.(w.pointerId))}),c.addEventListener("pointermove",w=>{if(!t)return;const ue=w.clientX-p,we=w.clientY-f;(Math.abs(ue)>3||Math.abs(we)>3)&&(l=!0),pe=v+ue,me=V+we,ve()});const E=()=>{t&&(t=!1,c.classList.remove("is-panning"),!l&&(S||L||N)&&(S=!1,L=!1,N=!1,J()))};c.addEventListener("pointerup",E),c.addEventListener("pointercancel",E),c.addEventListener("wheel",w=>{w.preventDefault();const ue=w.deltaY<0?.12:-.12;ne=Math.max(.6,Math.min(2.6,Number((ne+ue).toFixed(2)))),ve()},{passive:!1}),c.addEventListener("dblclick",w=>{w.target?.closest("button")||(ne=1,pe=0,me=0,ve())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",t=>{t.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .pacom-briefing-pop")||(S||L||N)&&(S=!1,L=!1,N=!1,J())})}e.addEventListener("keydown",o=>{o.key==="Escape"&&(L||N||S||A)&&(L=!1,N=!1,S=!1,A=!1,J())}),await q(k,!0)}const vt=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,De='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Ne='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',gt='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',ht='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',ft='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg>',He='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',bt='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',Ce=W("x",16),Ue=W("check",14),yt=W("building-2",20),ye=["password","sms"],be=["privacy","terms","service"],Fe={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}};function _e(e){const n=e.replace(/\D/g,"");return n.length===11?`${n.slice(0,3)} •••• ${n.slice(7)}`:e}function $t(e){const n=e.trim().replace(/[\s-]/g,"");return/^(\+?86)?1[3-9]\d{9}$/.test(n)}const Se=new WeakMap;function kt(e){Se.get(e)?.()}function It(e,n,s){Se.get(e)?.(),e.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,g=!1,x="",z="",F="",Z="",ae=!1,M={},D="",T=!1,k="",y=0,S=null,L=null,U=null,Y="privacy",Q=!1,K="",oe="",ce=null,re=!1;function ee(m){m.key==="Escape"&&U&&(m.preventDefault(),de())}function A(m,b,d,q){const j=e.querySelector(m),I=j?.querySelector(b),P=j?.querySelector(`${d}[aria-selected="true"]`);!I||!P||(I.style.transition=q?"":"none",I.style.transform=`translateX(${P.offsetLeft}px)`,I.style.width=`${P.offsetWidth}px`,q||(I.offsetWidth,I.style.transition=""))}function B(m){A('[data-role="mode-seg"]',".au-mode-indicator",".au-mode-tab",m)}function se(m){A('[data-role="legal-seg"]',".au-legal-indicator",".au-legal-tab",m)}function N(){B(!1),U==="legal"&&se(!1)}function ge(){re=!0,S!==null&&(window.clearInterval(S),S=null),L!==null&&(window.clearTimeout(L),L=null),document.removeEventListener("keydown",ee),window.removeEventListener("resize",N),e.classList.remove("bare-login"),Se.get(e)===ge&&Se.delete(e)}document.addEventListener("keydown",ee),window.addEventListener("resize",N),Se.set(e,ge);function h(){y=60,S!==null&&window.clearInterval(S),S=window.setInterval(()=>{y-=1,y<=0&&(y=0,S!==null&&(window.clearInterval(S),S=null));const m=e.querySelector('[data-act="send-sms"]');m&&(m.disabled=y>0,m.textContent=y>0?`${y} 秒后重发`:k?"重新获取":"获取验证码")},1e3)}function R(){const m=e.querySelector("#au-login-ferr");if(m)if(D){m.hidden=!1;const b=m.querySelector('[data-role="ferr-text"]');b&&(b.textContent=D)}else m.hidden=!0}function X(m){const b=e.querySelector(`.au-field[data-f="${m}"]`),d=e.querySelector(`#au-${m}`),q=e.querySelector(`#au-${m}-err`),j=M[m]??"";b?.classList.toggle("bad",!!j),d?.setAttribute("aria-invalid",j?"true":"false"),q&&(q.textContent=j)}function C(){const m=e.querySelector('form[data-form="login"] fieldset'),b=e.querySelector('form[data-form="login"] button[type="submit"]');m&&(m.disabled=T),b&&(b.disabled=T,b.innerHTML=T?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"登录")}function H(m,b){ce=b??(document.activeElement instanceof HTMLElement?document.activeElement:null),U=m,_(),m==="reset"?e.querySelector("#au-rs-id")?.focus():(m==="legal"&&se(!1),e.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus())}function de(){if(!U)return;U=null,L!==null&&(window.clearTimeout(L),L=null),Q=!1,_();const m=ce;ce=null,m&&document.contains(m)&&m.focus()}function le(){if(!U)return"";if(U==="reset"){const m=K.trim().length>0;return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ce}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field" style="margin-bottom:0;">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" placeholder="name@company.com 或 11 位手机号" value="${$(K)}" />
                  </div>
                </div>
                <div class="au-notice-soft" data-role="reset-notice" role="status" aria-live="polite" ${oe?"":"hidden"}>
                  ${ht}
                  <span data-role="reset-notice-text">${$(oe)}</span>
                </div>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${m?"":"disabled"}>发送验证码</button>
            </div>
          </section>
        </div>
      `}if(U==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ce}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用，请根据所属团队情况选择开通方式：</p>
              <div class="au-path-list">
                <div class="au-path-item">
                  <span class="au-path-tile">${ft}</span>
                  <div>
                    <div class="au-path-title">凭机构 9 位邀请码加入</div>
                    <div class="au-path-desc">向所在机构管理员获取邀请码或邀请链接，完成账号注册并按最小权限分配工作区。</div>
                  </div>
                </div>
                <div class="au-path-item">
                  <span class="au-path-tile">${yt}</span>
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
      `;if(U==="legal"){const m=Fe[Y],b=be.map(d=>`<button type="button" role="tab" aria-selected="${Y===d}" tabindex="${Y===d?"0":"-1"}" class="au-legal-tab" data-act="switch-legal" data-tab="${d}">${Fe[d].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ce}</button>
            </div>
            <div class="db">
              <div class="au-legal-seg" role="tablist" aria-label="法律文档分类" data-role="legal-seg">
                <span class="au-legal-indicator" aria-hidden="true"></span>
                ${b}
              </div>
              <p class="au-legal-date">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list" data-role="legal-list">
                ${m.items.map(d=>`<li>${$(d)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return U==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ce}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或现场部署技术支持，请通过官方支持邮箱联系 PACOM 团队。</p>
              <div class="au-copy-field">
                <span class="au-copy-code">support@pacom.cn</span>
                <button type="button" class="au-copy-btn ${Q?"is-copied":""}" data-act="copy-support" aria-label="复制支持邮箱">
                  ${Q?`${Ue}<span>已复制</span>`:`${He}<span>复制</span>`}
                </button>
              </div>
              <p style="margin:0; color:var(--pacom-text-secondary); font-size:12px;">广州天环智能技术有限公司 · 工作日 09:00–18:00 响应</p>
            </div>
            <div class="df">
              <a class="au-dlg-btn au-dlg-btn--ghost" href="mailto:support@pacom.cn">${bt}<span>发送邮件</span></a>
              <button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:""}function _(){const m=e.querySelector('[data-role="modal-host"]');if(!m||(m.innerHTML=le(),!U))return;m.querySelectorAll('[data-act="close-modal"]').forEach(j=>{j.addEventListener("click",()=>de())}),m.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",j=>{j.target===j.currentTarget&&de()}),m.querySelector('[data-act="register-to-contact"]')?.addEventListener("click",()=>{Q=!1,U="contact",_(),m.querySelector('[data-act="copy-support"]')?.focus()});const b=(j,I=!1)=>{if(Y===j)return;Y=j,m.querySelectorAll('[data-act="switch-legal"]').forEach(te=>{const ve=te.dataset.tab===j;te.setAttribute("aria-selected",String(ve)),te.tabIndex=ve?0:-1,ve&&I&&te.focus()}),se(!0);const P=m.querySelector('[data-role="legal-list"]');P&&(P.innerHTML=Fe[j].items.map(te=>`<li>${$(te)}</li>`).join(""))};m.querySelectorAll('[data-act="switch-legal"]').forEach(j=>{j.addEventListener("click",()=>{const I=j.dataset.tab;I&&b(I)}),j.addEventListener("keydown",I=>{const P=be.indexOf(Y);I.key==="ArrowRight"?(I.preventDefault(),b(be[(P+1)%be.length],!0)):I.key==="ArrowLeft"?(I.preventDefault(),b(be[(P-1+be.length)%be.length],!0)):I.key==="Home"?(I.preventDefault(),b(be[0],!0)):I.key==="End"&&(I.preventDefault(),b(be[be.length-1],!0))})}),m.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{const j=m.querySelector('[data-act="copy-support"]');try{await navigator.clipboard.writeText("support@pacom.cn")}catch{}Q=!0,j&&(j.classList.add("is-copied"),j.innerHTML=`${Ue}<span>已复制</span>`),L!==null&&window.clearTimeout(L),L=window.setTimeout(()=>{L=null,Q=!1;const I=m.querySelector('[data-act="copy-support"]');I&&(I.classList.remove("is-copied"),I.innerHTML=`${He}<span>复制</span>`)},1800)});const d=m.querySelector("#au-rs-id"),q=m.querySelector('[data-role="reset-submit"]');d?.addEventListener("input",()=>{K=d.value,q&&(q.disabled=K.trim().length===0)}),m.querySelector("#au-reset-form")?.addEventListener("submit",j=>{j.preventDefault(),K=d?.value.trim()??"",oe=K?"请联系机构管理员重置账号密码，或确认后查收重置邮件。":"请输入电子邮箱或手机号码";const I=m.querySelector('[data-role="reset-notice"]'),P=m.querySelector('[data-role="reset-notice-text"]');I&&P&&(P.textContent=oe,I.hidden=!1)})}function ne(){const m=a?`
        <div class="au-field ${M.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入 11 位手机号码" value="${$(F)}" aria-invalid="${M.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${y>0?"disabled":""}>
              ${y>0?`${y} 秒后重发`:k?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${$(M.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${k?`验证码已发送至 ${$(_e(k))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${M.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入电子邮箱或手机号码" value="${$(x)}" aria-invalid="${M.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${$(M.id??"")}</p>
        </div>
      `,b=a?`
        <div class="au-field ${M.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入 6 位短信验证码" value="${$(Z)}" aria-invalid="${M.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${$(M.scode??"")}</p>
        </div>
      `:`
        <div class="au-field ${M.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab">
            <label for="au-pwd">密码</label>
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${g?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入密码" value="${$(z)}" aria-invalid="${M.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${g?"隐藏密码":"显示密码"}">
              ${g?Ne:De}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${$(M.pwd??"")}</p>
        </div>
      `,d=e.querySelector('[data-role="login-form-host"]');d&&(d.innerHTML=`
      <form class="au-compact-form" data-form="login" novalidate>
        <fieldset ${T?"disabled":""}>
          ${m}
          ${b}
          <div class="au-ferr" id="au-login-ferr" role="alert" ${D?"":"hidden"}>
            ${gt}
            <span data-role="ferr-text">${$(D)}</span>
          </div>
          <label class="au-check au-keep-login" data-f="keep">
            <input type="checkbox" name="keep" ${ae?"checked":""} />
            <span>30 天内保持登录</span>
          </label>
          <button type="submit" class="au-primary au-compact-primary" ${T?"disabled":""}>
            ${T?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"登录"}
          </button>
        </fieldset>
      </form>
      <div class="au-login-actions">
        <div class="au-login-divider" aria-hidden="true"></div>
        <p class="au-noacct">
          没有账户？<button type="button" class="au-inline" data-act="open-register">注册</button>
        </p>
      </div>
    `,me())}function pe(m,b=!1){const d=m==="sms";a===d||T||(d&&!F.trim()&&$t(x)?F=x.trim():!d&&!x.trim()&&F.trim()&&(x=F.trim()),a=d,M={},D="",e.querySelectorAll('[data-act="switch-mode"]').forEach(q=>{const j=q.dataset.mode===m;q.setAttribute("aria-selected",String(j)),q.tabIndex=j?0:-1,j&&b&&q.focus()}),B(!0),ne(),b||(a?k?e.querySelector("#au-scode")?.focus():F.trim()?e.querySelector('[data-act="send-sms"]')?.focus():e.querySelector("#au-sphone")?.focus():e.querySelector(x.trim()?"#au-pwd":"#au-id")?.focus()))}function me(){const m=e.querySelector("#au-id"),b=e.querySelector("#au-pwd"),d=e.querySelector("#au-sphone"),q=e.querySelector("#au-scode"),j=e.querySelector('input[name="keep"]');m?.addEventListener("input",()=>{x=m.value,(M.id||D)&&(delete M.id,D="",X("id"),R())}),b?.addEventListener("input",()=>{z=b.value,(M.pwd||D)&&(delete M.pwd,D="",X("pwd"),R())}),d?.addEventListener("input",()=>{F=d.value,(M.sphone||D)&&(delete M.sphone,D="",X("sphone"),R())}),q?.addEventListener("input",()=>{Z=q.value.replace(/\D/g,"").slice(0,6),q.value=Z,(M.scode||D)&&(delete M.scode,D="",X("scode"),R())}),j?.addEventListener("change",()=>{ae=j.checked}),e.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",I=>{g=!g;const P=I.currentTarget,te=e.querySelector("#au-pwd");if(te){const ve=te.selectionStart,ke=te.selectionEnd;te.type=g?"text":"password",te.focus(),ve!==null&&ke!==null&&te.setSelectionRange(ve,ke)}P.setAttribute("aria-label",g?"隐藏密码":"显示密码"),P.innerHTML=g?Ne:De}),e.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const I=F.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(I)){M={...M,sphone:"请输入有效的手机号码"},X("sphone"),e.querySelector("#au-sphone")?.focus();return}delete M.sphone,X("sphone"),k=I;const P=e.querySelector("#au-sphone-hint");P&&(P.textContent=`验证码已发送至 ${_e(k)}`),h();const te=e.querySelector('[data-act="send-sms"]');te&&(te.disabled=!0,te.textContent=`${y} 秒后重发`),e.querySelector("#au-scode")?.focus()}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async I=>{if(I.preventDefault(),!T){if(M={},D="",a?(F.trim()||(M.sphone="请输入手机号码"),/^\d{6}$/.test(Z.trim())||(M.scode="请输入 6 位验证码"),X("sphone"),X("scode")):(x.trim()||(M.id="请输入电子邮箱或手机号码"),z||(M.pwd="请输入密码"),X("id"),X("pwd")),R(),Object.keys(M).length>0){const P=Object.keys(M)[0];e.querySelector(`#au-${P}`)?.focus();return}T=!0,C();try{const P=await n.login({account:(a?F:x).trim(),password:a?Z.trim():z});ge(),s(P)}catch(P){T=!1,D=P instanceof Error?P.message:"账户或密码不正确",C(),R()}}}),e.querySelector('[data-act="open-reset"]')?.addEventListener("click",I=>{K=x.trim(),oe="",H("reset",I.currentTarget)}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",I=>{H("register",I.currentTarget)})}e.innerHTML=`
    <div class="au au-split au-auth-shell">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${vt}</div>
            <h1 class="au-h1">登录</h1>
            <div class="au-mode-seg" role="tablist" aria-label="登录方式" data-role="mode-seg">
              <span class="au-mode-indicator" aria-hidden="true"></span>
              <button type="button" role="tab" aria-selected="true" tabindex="0" class="au-mode-tab" data-act="switch-mode" data-mode="password">密码登录</button>
              <button type="button" role="tab" aria-selected="false" tabindex="-1" class="au-mode-tab" data-act="switch-mode" data-mode="sms">短信登录</button>
            </div>
            <div data-role="login-form-host"></div>
          </main>
        </div>
        <footer class="au-foot" aria-label="版权、法律与联系信息">
          <span class="au-copyright">© 2026 广州天环智能技术有限公司</span>
          <div class="au-foot-links">
            <button type="button" data-act="open-legal">隐私和法律</button>
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
  `,e.querySelectorAll('[data-act="switch-mode"]').forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.mode;b&&pe(b,!1)}),m.addEventListener("keydown",b=>{const d=a?"sms":"password",q=ye.indexOf(d);b.key==="ArrowRight"?(b.preventDefault(),pe(ye[(q+1)%ye.length],!0)):b.key==="ArrowLeft"?(b.preventDefault(),pe(ye[(q-1+ye.length)%ye.length],!0)):b.key==="Home"?(b.preventDefault(),pe(ye[0],!0)):b.key==="End"&&(b.preventDefault(),pe(ye[ye.length-1],!0))})}),e.querySelector('[data-act="open-legal"]')?.addEventListener("click",m=>{H("legal",m.currentTarget)}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",m=>{Q=!1,H("contact",m.currentTarget)}),ne(),B(!1),document.fonts?.ready.then(()=>{re||B(!1)})}export{G as E,Te as a,Ze as b,wt as c,It as d,$ as e,We as g,xt as m,W as r,Pe as s,kt as u};
