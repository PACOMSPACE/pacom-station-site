(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))a(m);new MutationObserver(m=>{for(const w of m)if(w.type==="childList")for(const L of w.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&a(L)}).observe(document,{childList:!0,subtree:!0});function n(m){const w={};return m.integrity&&(w.integrity=m.integrity),m.referrerPolicy&&(w.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?w.credentials="include":m.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function a(m){if(m.ep)return;m.ep=!0;const w=n(m);fetch(m.href,w)}})();const N={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},Ue={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"layout-dashboard":'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',waypoints:'<circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',"key-round":'<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',"file-text":'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'};function We(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function B(e,l=16,n=""){const a=We(l);return`<svg${n?` class="${n}"`:""} width="${l}" height="${l}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${Ue[e]}</svg>`}let Ce={level:"floor",projectId:N.projectId,buildingId:N.buildingId,floorId:N.floorId};function Ne(){return Ce}function qe(e){return Ce=e,Ce}function te(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Pe(e){const l=e.trim().toUpperCase();if(l==="RF"||l==="R"||l==="ROOF"||l.includes("屋面"))return 999;const n=l.match(/(-?\d+)/);if(!n)return 0;const a=Number(n[1]);return l.startsWith("B")?-Math.abs(a):a}function _e(e){if(e==="all")return{level:"all-projects"};const l=e.split(":");return l[0]==="project"&&l[1]?{level:"project",projectId:l[1]}:l[0]==="building"&&l[1]&&l[2]?{level:"building",projectId:l[1],buildingId:l[2]}:l[0]==="floor"&&l[1]&&l[2]&&l[3]?{level:"floor",projectId:l[1],buildingId:l[2],floorId:l[3]}:{level:"project",projectId:N.projectId}}function Ze(e,l,n){return n==="project"?e.level==="all-projects"?{level:"project",projectId:l.projects[0]?.id??N.projectId}:{level:"project",projectId:e.projectId}:n==="building"&&e.level==="floor"?{level:"building",projectId:e.projectId,buildingId:e.buildingId}:e}function Fe(e){const{tree:l,session:n,isOpen:a,searchKeyword:m}=e;if(l.projects.length===0)return'<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap"><span class="pacom-path-trigger is-static"><span class="pacom-path-muted">暂无项目</span></span></div>';const w=e.maxGranularity??"floor",L=e.activeAlarmCount??0,O=n.scope.allowedZoneIds?.length?n.scope.allowedZoneIds:null,R=l.floors.filter(g=>n.scope.allowedFloorIds.includes(g.id)),X=O||l.projects.length<=1&&l.buildings.length<=1&&R.length<=1?"floors-only":l.projects.length>1?"multi-project":l.buildings.length>1?"single-project-multi-building":"single-building",j=X==="multi-project"&&w!=="project",V=X==="multi-project"||X==="single-project-multi-building",T=X!=="floors-only"&&w!=="project",$=w==="project"&&l.projects.length<=1||X==="floors-only"&&R.length<=1,h=Ze(e.scope??Ce,l,w),x=h.level==="all-projects"?null:l.projects.find(g=>g.id===h.projectId)??l.projects[0],k=h.level==="building"||h.level==="floor"?l.buildings.find(g=>g.id===h.buildingId):null,Y=h.level==="floor"?l.floors.find(g=>g.id===h.floorId):null,U=[];if(h.level==="all-projects")U.push(`全部项目（${l.projects.length}）`);else if(h.level==="project")U.push(te(x?.name??"广实2号园"));else if(h.level==="building")x&&U.push(`<span class="pacom-path-muted">${te(x.name)}</span>`),U.push(te(k?.name??"E栋"));else{x&&X!=="floors-only"&&U.push(`<span class="pacom-path-muted">${te(x.name)}</span>`),k&&T&&U.push(`<span class="pacom-path-muted">${te(k.name)}</span>`);const g=!T&&k?`${k.name} ${Y?.name??"7F"}`:Y?.name??"7F";U.push(te(g))}const Z='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',D=$?`<span class="pacom-path-trigger is-static">${U.join(Z)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${a}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${U.join(Z)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${B("chevron-down",12)}</span>
      </button>`;if(!a||$)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${D}</div>`;const ae=m.trim().toLowerCase(),ie=h.level==="all-projects"?l.projects[0]?.id??N.projectId:h.projectId,oe=h.level==="building"||h.level==="floor"?h.buildingId:l.buildings.find(g=>g.projectId===ie)?.id??N.buildingId,q=l.projects.filter(g=>!ae||g.name.toLowerCase().includes(ae)),S=l.buildings.filter(g=>g.projectId===ie&&(!ae||g.name.toLowerCase().includes(ae))),C=[...l.floors.filter(g=>g.buildingId===oe)].sort((g,b)=>Pe(b.name)-Pe(g.name)).filter(g=>!ae||g.name.toLowerCase().includes(ae)),K=w==="project"||l.projects.length>1,A=w!=="project"&&V,re=w==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${D}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${B("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${te(m)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${B("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${K?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${j?`<button type="button" class="pacom-space-pop-item ${h.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${l.projects.length}）</span>
                        ${h.level==="all-projects"?B("check",14):""}
                      </button>`:""}
                ${q.map(g=>{const b=h.level==="project"&&h.projectId===g.id;return`<button type="button" class="pacom-space-pop-item ${b?"is-active":""}" data-global-space-pick="project:${te(g.id)}">
                      <span>${te(g.name)}</span>
                      ${b?B("check",14):B("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${A?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${te(l.projects.find(g=>g.id===ie)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${h.level==="project"?"is-active":""}" data-global-space-pick="project:${te(ie)}">
                  <span>全园区</span>
                  ${h.level==="project"?B("check",14):""}
                </button>
                ${S.map(g=>{const b=h.level==="building"&&h.buildingId===g.id;return`<button type="button" class="pacom-space-pop-item ${b?"is-active":""}" data-global-space-pick="building:${te(g.projectId)}:${te(g.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${te(g.name)}</span>
                        ${g.id===N.buildingId&&L>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${b?B("check",14):B("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${re?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${te(l.buildings.find(g=>g.id===oe)?.name??"楼宇")} · 楼层</div>
                ${T?`<button type="button" class="pacom-space-pop-item ${h.level==="building"&&h.buildingId===oe?"is-active":""}" data-global-space-pick="building:${te(ie)}:${te(oe)}">
                        <span>整栋</span>
                        ${h.level==="building"&&h.buildingId===oe?B("check",14):""}
                      </button>`:""}
                ${C.map(g=>{const b=n.scope.allowedFloorIds.includes(g.id),z=h.level==="floor"&&h.floorId===g.id,M=g.id===N.floorId&&L>0;return`<button type="button" class="pacom-space-pop-item ${z?"is-active":""}" style="${b?"":"opacity:0.5;"}" data-global-space-pick="floor:${te(ie)}:${te(oe)}:${te(g.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${te(g.name)}</span>
                        ${M?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${z?B("check",14):b?g.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function Be(e,l){e.querySelectorAll("[data-global-space-toggle]").forEach(a=>{a.addEventListener("click",m=>{m.stopPropagation(),l.onToggle()})}),e.querySelector("[data-global-space-search]")?.addEventListener("input",a=>{l.onSearch(a.currentTarget.value)}),e.querySelectorAll("[data-global-space-pick]").forEach(a=>{a.addEventListener("click",m=>{m.stopPropagation();const w=a.dataset.globalSpacePick;if(!w)return;const L=qe(_e(w));l.onPick(L)})})}function E(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const Ke=B("chevron-down",12),Se=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],Ee=[{id:N.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:N.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:N.projectId,label:"广实2号园（全园区）",factor:18.2}],Ge={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},Ye=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],fe=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function ze(e,l=""){const n=(e??"").trim().toLowerCase();return!(!n||n.includes("%")||n.includes("°c")||n.includes("ppm")||n.includes("ms")||n.includes("m²")||n.includes("/m2")||n.includes("db")||n.includes("lx")||l.includes("率")||l.includes("均")||l.includes("强度")||l.includes("延迟"))}function Le(e,l){const n=e*l;return Math.abs(n)>=10?Math.round(n):Math.round(n*10)/10}function Xe(e,l){const n=Number(String(e).replaceAll(",","")),a=l??"";return Number.isFinite(n)?a==="kWh"&&Math.abs(n)>=1e4?{value:(n/1e3).toFixed(1),unit:"MWh",title:`精确值：${n.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(n)?n.toLocaleString("en-US"):n.toLocaleString("en-US",{maximumFractionDigits:1}),unit:a,title:`${n.toLocaleString("en-US")} ${a}`.trim()}:{value:e,unit:a,title:`${e} ${a}`.trim()}}function Qe(e,l){if(l===1)return e;const n=ze(e.unit);return{...e,kpis:e.kpis.map(a=>{const m=Number(String(a.value).replaceAll(",",""));return!Number.isFinite(m)||!ze(a.unit,a.label)?a:{...a,value:String(Le(m,l))}}),series:n?e.series.map(a=>({...a,value:Le(a.value,l),...typeof a.baseline=="number"?{baseline:Le(a.baseline,l)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(a=>ze(a.unit)?{...a,value:Le(a.value,l)}:a)}}function Je(e,l){const n=Math.max(...e.series.map(T=>Math.max(T.value,T.baseline??0)),1),a=46,m=34,w=36,L=Math.max(e.series.length*(a+m)+w*2,620),O=228,R=184,X=132,j=[0,.25,.5,.75,1].map(T=>{const $=Math.round(R-T*X);return`<line x1="${w-8}" y1="${$}" x2="${L-18}" y2="${$}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${T===0?"0":"3 3"}" />`}).join(""),V=e.series.map((T,$)=>{const h=w+$*(a+m),x=Math.max(8,Math.round(T.value/n*X)),k=R-x,Y=typeof T.baseline=="number"&&T.value>T.baseline*1.08,U=Y?`<rect x="${h-8}" y="34" width="${a+16}" height="${R-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",Z=typeof T.baseline=="number"?`<line x1="${h-5}" y1="${Math.round(R-T.baseline/n*X)}" x2="${h+a+5}" y2="${Math.round(R-T.baseline/n*X)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",D=l&&(Y||$===1)?`<g><title>${Y?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${h+a/2}" cy="18" r="7" fill="${Y?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${h+a/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="500" fill="#fff">${Y?"!":"S"}</text></g>`:"",ae=T.value>=1e4?`${(T.value/1e3).toFixed(1)}k`:T.value.toLocaleString("en-US");return`
        ${U}
        ${Z}
        ${D}
        <g>
          <title>${E(T.label)}：实测 ${T.value.toLocaleString("en-US")} ${E(e.unit)}${T.baseline!==void 0?` / 基线 ${T.baseline.toLocaleString("en-US")} ${E(e.unit)}`:""}</title>
          <rect x="${h}" y="${k}" width="${a}" height="${x}" rx="7" fill="${Y?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${h+a/2}" y="${k-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${ae}</text>
        <text x="${h+a/2}" y="${R+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${E(T.label)}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${L} ${O}" style="width:100%; height:232px; display:block;" role="img" aria-label="${E(e.category)} 趋势图">
      ${j}
      ${V}
    </svg>
  `}function et(e,l){const n=e.connectivity==="offline";if(e.category==="hvac"){const a=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:n?[23.8,24,24.1,null,null,null,null,null]:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a],offline:n,colorIdx:l},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:n?[24,24,24,null,null,null,null,null]:[a,a,a,a,a,a,a,a],offline:n,colorIdx:l+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:n?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:n,colorIdx:l+2}]}if(e.category==="lighting"){const a=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)],offline:n,colorIdx:l},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:n,colorIdx:l+1}]}if(e.category==="sensor"){const a=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a],offline:n,colorIdx:l},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:n,colorIdx:l+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:n,colorIdx:l+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:n,colorIdx:l}]}function tt(e){const l=e.points.filter(O=>typeof O=="number");if(!l.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const n=Math.min(...l),a=Math.max(...l),m=l.reduce((O,R)=>O+R,0)/l.length,w=e.points[e.points.length-1],L=O=>Math.abs(O)<100&&!Number.isInteger(O)?O.toFixed(1):Math.round(O).toString();return{min:L(n),avg:m.toFixed(Math.abs(m)<100?1:0),max:L(a),curr:typeof w=="number"?L(w):"离线"}}function at(e,l,n){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="pacom-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const m=(L,O)=>{const k=[];for(const S of L)for(const C of S.points)typeof C=="number"&&k.push(C);const Y=k.length?Math.min(...k)*.92:0,U=k.length?Math.max(...k)*1.08:100,Z=Math.max(U-Y,1),D=[0,.5,1].map(S=>{const C=Math.round(26+106*(1-S)),K=(Y+Z*S).toFixed(Z<15?1:0);return`
          <line x1="44" y1="${C}" x2="662" y2="${C}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${S===0?"0":"3 3"}" />
          <text x="38" y="${C+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${K}</text>
        `}).join(""),ae=a.map((S,C)=>`<text x="${44+C/(a.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${S}</text>`).join(""),ie=L.map((S,C)=>{const K=fe[(S.colorIdx+C)%fe.length],A=S.points,re=[];let g=44,b=26+106/2,z=!1;A.forEach((H,de)=>{const J=44+de/(A.length-1)*618;if(typeof H=="number"){const W=26+106*(1-(H-Y)/Z);re.push(`${J.toFixed(1)},${W.toFixed(1)}`),g=J,b=W}else z=!0});const M=n?A.map((H,de)=>{if(typeof H!="number")return null;const J=44+de/(A.length-1)*618,ee=26+106*(1-(H*.96-Y)/Z);return`${J.toFixed(1)},${ee.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${M?`<polyline fill="none" stroke="${K}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${M}" />`:""}
          ${re.length?`<polyline fill="none" stroke="${K}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${re.join(" ")}" />`:""}
          ${z?`<line x1="${g.toFixed(1)}" y1="${b.toFixed(1)}" x2="662" y2="${b.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${b-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),oe=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="500" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,q=L.map((S,C)=>{const K=fe[(S.colorIdx+C)%fe.length],A=tt(S);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${K};"></span>${E(S.deviceName)} · ${E(S.label)}</span></td>
            <td><strong>${E(A.curr)}</strong> <span class="pacom-row-sub">${E(S.unit)}</span></td>
            <td>${E(A.min)} <span class="pacom-row-sub">${E(S.unit)}</span></td>
            <td>${E(A.avg)} <span class="pacom-row-sub">${E(S.unit)}</span></td>
            <td>${E(A.max)} <span class="pacom-row-sub">${E(S.unit)}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${E(O)}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${L.map((S,C)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${fe[(S.colorIdx+C)%fe.length]};"></span>${E(S.deviceName)}·${E(S.label)}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${D}
          ${ae}
          ${oe}
          ${ie}
        </svg>
        <div class="pacom-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="pacom-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${q}</tbody>
          </table>
        </div>
      </div>
    `};if(l==="shared")return m(e,"单图叠合对比（Shared）");const w=new Map;for(const L of e){const O=w.get(L.unit)??[];O.push(L),w.set(L.unit,O)}return Array.from(w.entries()).map(([L,O])=>m(O,`按单位分组泳道（${L}）`)).join("")}function lt(e){const l=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(w=>[w.label,String(w.value),w.baseline!==void 0?String(w.baseline):""].join(","))],n=new Blob([`\uFEFF${l.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(n),m=document.createElement("a");m.href=a,m.download=`pacom-${e.category}-${e.range}.csv`,m.click(),URL.revokeObjectURL(a)}function ot(e){const l=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],n=["时间",...e.map(O=>`${O.deviceName}·${O.label}(${O.unit})`)].join(","),a=l.map((O,R)=>[O,...e.map(X=>String(X.points[R]??"No Data"))].join(",")),m=new Blob([`\uFEFF${[n,...a].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),w=URL.createObjectURL(m),L=document.createElement("a");L.href=w,L.download="pacom-timeseries-export.csv",L.click(),URL.revokeObjectURL(w)}async function ut(e,l,n){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),m=a.get("tab"),w=a.get("cat"),L=a.get("device"),O=a.get("points"),R=a.get("mode"),X=a.get("interval");let j=m==="timeseries"?"timeseries":w&&Se.some(y=>y.id===w)?w:"energy",V="7d",T="2026-11-16",$="2026-11-23";const h=!!n.scope.allowedZoneIds?.length,x=n.scope.allowedFloorIds[0]??N.floorId,k={level:"floor",projectId:n.scope.allowedProjectIds[0]??N.projectId,buildingId:n.scope.allowedBuildingIds[0]??N.buildingId,floorId:x};function Y(y){if(h)return{scope:k,scopeId:x};if(y.level==="all-projects")return n.scope.allowedProjectIds.includes(N.projectId)?{scope:y,scopeId:N.projectId}:{scope:k,scopeId:x};if(y.level==="project"){if(n.scope.allowedProjectIds.includes(y.projectId)){const G=Ee.some(le=>le.id===y.projectId)?y.projectId:N.projectId;return{scope:y,scopeId:G}}return{scope:k,scopeId:x}}if(y.level==="building"){if(n.scope.allowedBuildingIds.includes(y.buildingId)){const G=Ee.some(le=>le.id===y.buildingId)?y.buildingId:N.buildingId;return{scope:y,scopeId:G}}return{scope:k,scopeId:x}}return n.scope.allowedFloorIds.includes(y.floorId)?{scope:y,scopeId:y.floorId}:{scope:k,scopeId:x}}const U=Y(Ne());let Z=U.scope,D=!1,ae="",ie=U.scopeId,oe="chart",q=!0,S="breakdown",C=!1,K=null;const[A,re]=await Promise.all([l.getSpatialTree(),l.getFloorDevices(N.floorId).catch(()=>[])]);let g=re;const b=new Map,z=[];g.forEach((y,G)=>{const le=et(y,G);b.set(y.id,le),z.push(...le)});let M=R==="shared"||R==="grouped"?R:"grouped",H=X==="15m"||X==="1h"||X==="1d"?X:"1h",de=!1;const J=[];if(O?O.split(",").forEach(y=>{z.some(G=>G.id===y)&&J.push(y)}):L&&b.has(L)&&(b.get(L)??[]).slice(0,2).forEach(y=>J.push(y.id)),!J.length){const y=g.find(se=>se.category==="hvac"),G=g.find(se=>se.category==="sensor"),le=g.find(se=>se.category==="lighting");y&&(b.get(y.id)??[]).slice(0,2).forEach(se=>J.push(se.id)),G&&(b.get(G.id)??[]).slice(0,1).forEach(se=>J.push(se.id)),le&&(b.get(le.id)??[]).slice(0,1).forEach(se=>J.push(se.id)),J.length||z.slice(0,3).forEach(se=>J.push(se.id))}const W=new Set(J),ee=new Set(g.filter((y,G)=>G<2||(b.get(y.id)??[]).some(le=>W.has(le.id))).map(y=>y.id)),me=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:z.filter(y=>y.pointKey==="temp"||y.pointKey==="setpoint"||y.pointKey==="co2").slice(0,4).map(y=>y.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:z.filter(y=>y.pointKey==="dimming"||y.pointKey==="power").slice(0,4).map(y=>y.id),mode:"grouped",interval:"15m"}];let pe="";async function he(){const y=j==="timeseries"?"energy":j,G=V==="custom"?"30d":V;K=await l.getAnalysisReport(y,G,N.floorId),Q()}function Q(){if(!K)return;const y=j==="timeseries",G=j==="timeseries"?"energy":j,le=Se.find(i=>i.id===G)??Se[0],se=Ee.find(i=>i.id===ie)??Ee[0],ce=Qe(K,se.factor),ye=ce.zoneBreakdown.filter(i=>i.status==="warning"),be=Ge[G],Ae=Math.max(...ce.zoneBreakdown.map(i=>i.value),1),we=z.filter(i=>W.has(i.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${Fe({tree:A,session:n,scope:Z,isOpen:D,searchKeyword:ae})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${V==="today"?"selected":""}>今日</option>
                <option value="7d" ${V==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${V==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${V==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${y?"":`<button class="pacom-btn ${C?"pacom-btn--primary":""}" data-toggle-canvas="1">${C?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${Se.map(i=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${j===i.id}" data-cat="${i.id}">${i.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${j==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${V==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${E(T)}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${E($)}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${y?`
            <div class="pacom-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${we.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${me.map(i=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${E(i.id)}">${B("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${E(i.name)}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${g.map(i=>{const F=b.get(i.id)??[],ge=ee.has(i.id),$e=F.filter(ve=>W.has(ve.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${E(i.id)}" style="cursor:pointer; justify-content:space-between;" title="${E(i.name)}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${ge?"0deg":"-90deg"}); opacity:0.65;">${Ke}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${E(i.name)}</div>
                                <div class="pacom-row-sub">${F.length} 个测点 · ${i.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${$e>0?`<span class="pacom-badge pacom-badge--accent">${$e}</span>`:""}
                          </button>
                          ${ge?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${F.map(ve=>{const Ie=W.has(ve.id),_=fe[ve.colorIdx%fe.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${Ie?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${E(ve.id)}" data-ts-point="${E(ve.id)}" ${Ie?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${_};"></span>
                                            <span style="color:var(--pacom-text-primary);">${E(ve.label)}</span>
                                          </span>
                                          <span class="pacom-row-sub">${E(ve.unit)}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="pacom-subnav-main" style="padding:2px 4px 24px;">
                ${pe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${E(pe)}</span></div>`:""}
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${B("clock",12)} 排程(S) · ${B("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
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
                      <button class="pacom-tab" aria-selected="${M==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${M==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${at(we,M,de)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="pacom-kpi-strip" role="region" aria-label="核心统计指标">
                ${ce.kpis.map(i=>{const F=Xe(i.value,i.unit);return`
                      <div class="pacom-kpi-cell" title="${E(F.title)}">
                        <span class="pacom-kpi-label">${E(i.label)}</span>
                        <div class="pacom-kpi-value">
                          <span>${E(F.value)}</span>
                          ${F.unit?`<span class="pacom-kpi-unit">${E(F.unit)}</span>`:""}
                        </div>
                        <span class="pacom-kpi-delta">${E(i.delta??"与基线持平")}</span>
                      </div>`}).join("")}
              </div>

              <section class="pacom-section">
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">${E(le?.label??"趋势")}趋势（${E(ce.unit)}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${E(se.label)} · 更新于 ${E(ce.updatedAt.slice(5,16).replace("T"," "))}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${q}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${oe==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${oe==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${ye.length>0?`关注：${ye.map(i=>E(i.zoneName)).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${E(le?.desc??"空间运行洞察")} · ${E(be.summary)}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${oe==="chart"?Je(ce,q):`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${E(ce.unit)}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${ce.series.map(i=>{const F=typeof i.baseline=="number"&&i.value>i.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${E(i.label)}</strong></td>
                                    <td>${i.value.toLocaleString("en-US")}</td>
                                    <td>${i.baseline!==void 0?i.baseline.toLocaleString("en-US"):"-"}</td>
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
                    <span class="pacom-row-sub">${ce.zoneBreakdown.length} 个功能区</span>
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
                          ${ce.zoneBreakdown.map(i=>{const F=Math.max(8,Math.round(i.value/Ae*100));return`
                                <tr>
                                  <td style="font-weight:500;">${E(i.zoneName.replace(/^7F\s*/,""))}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${F}%; height:100%; border-radius:999px; background:${i.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${i.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${E(i.unit)}</span></td>
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
                    <h2 class="pacom-section-title">${C?"E7F 空间对照预览":G==="energy"&&S==="load"?"峰谷负荷分布（Load Profile）":be.title}</h2>
                    ${!C&&G==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${S==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${S==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${C?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${C?'<img class="pacom-plan-img" src="./media/floors/e/07F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${G==="environment"?`
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
                        ${(G==="energy"&&S==="load"?Ye:be.items).map(i=>`
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
    `,Be(e,{onToggle:()=>{D=!D,Q(),D&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:i=>{ae=i,Q();const F=e.querySelector("[data-global-space-search]");F&&(F.focus(),F.setSelectionRange(i.length,i.length))},onPick:i=>{const F=Y(i);Z=F.scope,ie=F.scopeId,D=!1,Q()}}),e.querySelectorAll("[data-cat]").forEach(i=>{i.addEventListener("click",()=>{j=i.dataset.cat??"energy",pe="",j==="timeseries"?Q():he()})}),e.querySelector("[data-range-select]")?.addEventListener("change",i=>{V=i.currentTarget.value??"7d",he()}),e.querySelector("[data-custom-start]")?.addEventListener("change",i=>{T=i.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",i=>{$=i.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(i=>{i.addEventListener("click",()=>{oe=i.dataset.chartMode??"chart",Q()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{q=!q,Q()}),e.querySelectorAll("[data-energy-right]").forEach(i=>{i.addEventListener("click",()=>{S=i.dataset.energyRight??"breakdown",Q()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{y?ot(we):lt(ce)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{C=!C,Q()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(i=>{i.addEventListener("click",()=>{const F=i.dataset.tsExpand;F&&(ee.has(F)?ee.delete(F):ee.add(F),Q())})}),e.querySelectorAll("[data-ts-point]").forEach(i=>{i.addEventListener("change",()=>{const F=i.dataset.tsPoint;F&&(i.checked?W.add(F):W.delete(F),pe="",Q())})}),e.querySelectorAll("[data-ts-mode]").forEach(i=>{i.addEventListener("click",()=>{M=i.dataset.tsMode??"grouped",Q()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",i=>{H=i.currentTarget.value??"1h",Q()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{de=!de,Q()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const F=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(W).join(","))}&mode=${M}&interval=${H}`,ge=`${window.location.origin}${window.location.pathname}${F}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(ge).catch(()=>{}),window.history.replaceState(null,"",F),pe=`已复制分享链接（含 ${W.size} 个测点、${M==="grouped"?"按单位分组":"单图叠合"}、${H} 粒度）。`,Q()}),e.querySelectorAll("[data-load-fav]").forEach(i=>{i.addEventListener("click",()=>{const F=me.find(ge=>ge.id===i.dataset.loadFav);F&&(W.clear(),F.pointIds.forEach(ge=>{W.add(ge);const $e=ge.split(":")[0];$e&&ee.add($e)}),M=F.mode,H=F.interval,pe=`已加载收藏视图「${F.name}」。`,Q())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(W.size===0)return;const i=`自定义对比 #${me.length+1}（${W.size} 测点）`;me.push({id:`fav-${Date.now()}`,name:i,pointIds:Array.from(W),mode:M,interval:H}),pe=`已保存当前时序配置为「${i}」。`,Q()})}await he()}function Oe(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const l=e.name.includes("702")?"702 照明":"主照明",n=Number(e.telemetry.dimming?.value??0);return n>0?`${l} ${n}%`:`${l} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const Te={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},st={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},nt=B("chevron-down",12),it={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function r(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Ve(e){const l=e.trim().toUpperCase();if(l==="RF"||l==="R"||l==="ROOF"||l.includes("屋面"))return 999;const n=l.match(/(-?\d+)/);if(!n)return 0;const a=Number(n[1]);return l.startsWith("B")?-Math.abs(a):a}async function mt(e,l,n){const a=await l.getSpatialTree();l.mode;const m=n.scope.canControlDevices,w=n.scope.canManageAlarms,L=n.scope.allowedZoneIds?.length?n.scope.allowedZoneIds:null,O=a.floors.filter(s=>n.scope.allowedFloorIds.includes(s.id)),R=L||a.projects.length<=1&&a.buildings.length<=1&&O.length<=1?"floors-only":a.projects.length>1?"multi-project":a.buildings.length>1?"single-project-multi-building":"single-building",X=R==="multi-project",j=R==="multi-project"||R==="single-project-multi-building",V=R!=="floors-only",T=R==="floors-only"&&O.length<=1;let $=Ne(),h="devices",x=!1,k=!1,Y="",U="",Z="all",D="all";const ae=new URLSearchParams(window.location.hash.split("?")[1]??""),ie=ae.get("device"),oe=ae.get("zone");let q=ie,S=!!ie,C="control",K="",A=!1,re="today",g="devices";const b=new Set,z=new Set;let M=[],H=[],de=[],J=null,W=null,ee=1,me=0,pe=0,he=null;function Q(){return a.zones.filter(s=>!($.level==="floor"&&s.floorId!==$.floorId||L&&!L.includes(s.id)))}function y(s){return[...a.floors.filter(c=>c.buildingId!==s?!1:R==="floors-only"?n.scope.allowedFloorIds.includes(c.id):!0)].sort((c,t)=>Ve(t.name)-Ve(c.name))}async function G(s,p=!1){if(a.projects.length===0){$={level:"all-projects"},qe($),M=[],H=[],de=[],_();return}let c=s;c.level==="all-projects"&&!X&&(c={level:"project",projectId:a.projects[0]?.id??N.projectId}),c.level==="project"&&!j&&(c={level:"building",projectId:c.projectId,buildingId:a.buildings[0]?.id??N.buildingId}),c.level==="building"&&!V&&(c={level:"floor",projectId:c.projectId,buildingId:c.buildingId,floorId:O[0]?.id??N.floorId}),$=c,qe(c),W=null,D=p&&oe?oe:"all",A=!1,k=!1,x=!1,z.clear(),ee=1,me=0,pe=0,he&&(he(),he=null);const t=$.level==="floor"?$.floorId:N.floorId;if($.level==="floor")try{const[o,d,v]=await Promise.all([l.getFloorDevices($.floorId),l.listAlarms($.floorId),l.listWorkOrders($.floorId)]);M=o,H=d,de=v,M.some(u=>u.id===q)?p&&ie&&(S=!0):(q=M[1]?.id??M[0]?.id??null,S=!1),he=l.subscribeFloorEvents($.floorId,async u=>{u.type==="control.receipt.updated"&&J?.batchId===u.batchId&&(J=await l.getControlBatch(u.batchId)),(u.type==="telemetry.updated"||u.type==="device.connectivity")&&$.level==="floor"&&(M=await l.getFloorDevices($.floorId)),u.type==="alarm.changed"&&$.level==="floor"&&(H=await l.listAlarms($.floorId)),ye()})}catch(o){M=[],H=[],de=[],q=null,S=!1,W=o instanceof Error?o.message:String(o)}else{S=!1;const[o,d,v]=await Promise.all([l.getFloorDevices(t).catch(()=>[]),l.listAlarms(t).catch(()=>[]),l.listWorkOrders(t).catch(()=>[])]);M=o,H=d,de=v}_()}function le(s){return s?a.zones.find(p=>p.id===s)?.name??s:"未分配逻辑区"}function se(){const s=U.trim().toLowerCase();return M.filter(p=>D!=="all"&&p.logicalZoneId!==D||Z!=="all"&&p.category!==Z?!1:s?p.name.toLowerCase().includes(s)||p.id.toLowerCase().includes(s)||le(p.logicalZoneId).toLowerCase().includes(s):!0)}async function ce(s,p,c){!s.length||$.level!=="floor"||!m||(s.forEach(t=>b.add(t)),J=await l.dispatchControlBatch({floorId:$.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:s.map(t=>({deviceId:t,command:p,targetValue:c}))}),ye())}function ye(){const s=document.activeElement,p=s?.dataset?.role,c=s&&"selectionStart"in s?s.selectionStart:null,t=s&&"selectionEnd"in s?s.selectionEnd:null,o=e.querySelector(".pacom-list")?.scrollTop??0;_();const d=e.querySelector(".pacom-list");if(d&&(d.scrollTop=o),p==="search"||p==="space-search"){const v=e.querySelector(`[data-role="${p}"]`);v&&(v.focus(),c!==null&&t!==null&&v.setSelectionRange(c,t))}}function be(){const s=e.querySelector('[data-role="canvas-viewport"]');s&&(s.style.transform=`translate(${me}px, ${pe}px) scale(${ee})`);const p=e.querySelector('[data-role="zoom-label"]');p&&(p.textContent=`${Math.round(ee*100)}%`)}function Ae(s){if(s==="all")return{level:"all-projects"};const p=s.split(":");return p[0]==="project"&&p[1]?{level:"project",projectId:p[1]}:p[0]==="building"&&p[1]&&p[2]?{level:"building",projectId:p[1],buildingId:p[2]}:p[0]==="floor"&&p[1]&&p[2]&&p[3]?{level:"floor",projectId:p[1],buildingId:p[2],floorId:p[3]}:{level:"all-projects"}}function we(s){const p=$;if(p.level==="all-projects"){const c=U.trim().toLowerCase(),t=a.projects.filter(o=>!c||o.name.toLowerCase().includes(c));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${t.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${B("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${t.map(o=>{const d=a.buildings.filter(v=>v.projectId===o.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${r(o.id)}">
                  <div>
                    <div class="pacom-row-title">${r(o.name)}</div>
                    <div class="pacom-row-sub">${r(o.city??"")} · ${d} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(p.level==="project"){const c=U.trim().toLowerCase(),t=a.buildings.filter(v=>v.projectId===p.projectId&&(!c||v.name.toLowerCase().includes(c))),o=M.filter(v=>v.connectivity==="online").length,d=M.length?Math.round(o/M.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${t.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${B("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${t.map(v=>{const u=v.id===N.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${r(v.projectId)}:${r(v.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${u&&s>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${r(v.name)}</div>
                      <div class="pacom-row-sub">地上 ${v.aboveFloors} 层 · ${v.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${u?"pacom-badge--accent":"pacom-badge--neutral"}">${u?`在线 ${d}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(p.level==="building"){const c=U.trim().toLowerCase(),t=y(p.buildingId).filter(d=>!c||d.name.toLowerCase().includes(c)),o=a.buildings.find(d=>d.id===p.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${r(o?.name??"楼宇")} 楼层导览（${t.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${B("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${t.map(d=>{const v=n.scope.allowedFloorIds.includes(d.id),u=d.id===N.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${v?"":"opacity:0.6;"}" data-nav-scope="floor:${r(p.projectId)}:${r(p.buildingId)}:${r(d.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${u&&s>0?"pacom-dot--warning":d.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${r(o?.name??"")} ${r(d.name)}</div>
                      <div class="pacom-row-sub">${d.plan?"2D 平面控图就绪":"暂未上传平面图"}${u&&s>0?` · ${s} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${v&&d.plan?"pacom-badge--online":"pacom-badge--neutral"}">${v?d.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(h==="devices"){const c=se(),t=Q(),o=Array.from(z);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${L?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${L.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${Z==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${Z==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${Z==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${Z==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${Z==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${c.length} 台${m&&o.length?` · 已选 ${o.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${B("x",14)}</button>
          </div>
          ${t.length>0&&!W?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${D==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${t.map(d=>`<button type="button" class="pacom-zone-pill ${D===d.id?"is-active":""}" data-filter-zone="${r(d.id)}">${r(d.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${W?`<div class="pacom-alert-banner">${r(W)}</div>`:c.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':c.map(d=>{const v=d.id===q&&S,u=z.has(d.id),P=d.connectivity==="offline",I=P?"pacom-dot--critical":"pacom-dot--online",f=P?"离线":d.category==="lighting"?`${d.telemetry.dimming?.value??"--"}%`:d.category==="hvac"?`${d.telemetry.setpoint?.value??"--"}°C`:d.category==="sensor"?`${d.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${v?"is-selected":""}" data-select-device="${r(d.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${m?`<input type="checkbox" name="devCheck-${r(d.id)}" data-check-device="${r(d.id)}" ${u?"checked":""} style="margin-top:3px;" aria-label="勾选 ${r(d.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${r(d.name)}</div>
                              <div class="pacom-row-sub">${r(le(d.logicalZoneId).replace(/^7F\s*/,""))} · ${r(Te[d.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${P?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${I}"></span>${r(f)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${m&&o.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${o.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(h==="zones"){const c=Q(),t={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${c.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${B("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${c.map(o=>{const d=M.filter(f=>f.logicalZoneId===o.id),v=d.filter(f=>f.connectivity==="online").length,u=d.filter(f=>f.category==="lighting"||f.category==="hvac").length,P=D===o.id,I=t[o.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${P?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${P?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${r(P?"all":o.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${r(o.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${v}/${d.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${I.temp} · ${I.occ}</div>
                  ${u>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${r(o.id)}" data-zone-val="true" ${m?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${r(o.id)}" data-zone-val="false" ${m?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${H.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${B("x",14)}</button>
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
                      ${c.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${r(c.id)}" ${w?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function i(s){const p=$,c=Q().length,t=p.level==="floor"?"搜索设备或区域…":p.level==="building"?"搜索楼层…":p.level==="project"?"搜索楼宇…":"搜索园区…",o=p.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${x&&h==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${M.length}</button>
          <button type="button" class="pacom-hud-pill ${x&&h==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${c}</button>
          <button type="button" class="pacom-hud-pill ${s>0?"pacom-hud-pill--alert":""} ${x&&h==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${s}</button>
        `:p.level==="building"?`
            <button type="button" class="pacom-hud-pill ${x?"is-active":""}" data-toggle-hud="1">楼层 ${y(p.buildingId).length}</button>
            ${s>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${s}</button>`:""}
          `:p.level==="project"?`
              <button type="button" class="pacom-hud-pill ${x?"is-active":""}" data-toggle-hud="1">楼宇 ${a.buildings.filter(d=>d.projectId===p.projectId).length}</button>
              ${s>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${s}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${x?"is-active":""}" data-toggle-hud="1">园区 ${a.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${B("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${t}" value="${r(U)}" aria-label="${t}" />
          ${o}
        </div>
        ${x?`<div class="pacom-hud-sheet" data-role="hud-sheet">${we(s)}</div>`:""}
      </div>
    `}function F(s){if(T||$.level!=="building"&&$.level!=="floor")return"";const p=$.buildingId,c=$.projectId,t=y(p);return!V&&t.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${V?`<button type="button" class="pacom-elev-item ${$.level==="building"?"is-active":""}" data-nav-scope="building:${r(c)}:${r(p)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${t.map(o=>{const d=n.scope.allowedFloorIds.includes(o.id),v=$.level==="floor"&&$.floorId===o.id,u=o.id===N.floorId&&s>0;return`
              <button type="button" class="pacom-elev-item ${v?"is-active":""} ${d?"":"is-locked"}"
                data-nav-scope="floor:${r(c)}:${r(p)}:${r(o.id)}"
                title="${r(o.name)}${d?u?` · ${s} 条告警`:"":"（无权限）"}">
                ${u?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${r(o.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function ge(s,p){const c=$;if(c.level==="floor")return W?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${g==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${g==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${g==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${B("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(ee*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${B("plus",14)}</button>
        </div>
      `;const t=M.length?Math.round(s/M.length*100):100,o=c.level==="building"?"418 kWh":"1,248 kWh",d=Math.round(96.2*.45+93.6*.35+t*.2),v=c.level==="building"?y(c.buildingId).find(u=>u.id===N.floorId)??y(c.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${d}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="environment">
          <span>舒适度 <strong>96.2%</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="energy">
          <span>今日能耗 <strong>${o}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${p>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${p}</strong></span>
        </button>
        ${c.level==="building"&&v?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${r(c.projectId)}:${r(c.buildingId)}:${r(v.id)}">进入 ${r(v.name)} 平面图 →</button>`:""}
      </div>
    `}function $e(s,p){const c=$,t=M.length?Math.round(s/M.length*100):100;if(c.level==="all-projects")return`
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
            ${a.projects.map((u,P)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${P===0?50:28}%; top:${P===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${r(u.id)}">
                  <span class="pacom-dot ${p>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${r(u.name)} · 在线 ${t}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(c.level==="project"){const u=a.projects.find(I=>I.id===c.projectId)??a.projects[0],P=a.buildings.filter(I=>!u||I.projectId===u.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${r(u?.imageUrl??"./media/gzlab.jpg")}" alt="${r(u?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${P.map((I,f)=>{const ne=I.id===N.buildingId;return`
                  <button type="button" class="pacom-pin ${ne?"is-selected":""}" style="left:${f===0?56:38}%; top:${f===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${r(I.projectId)}:${r(I.id)}">
                    <span class="pacom-dot ${ne&&p>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${r(I.name)} · ${ne?`在线 ${t}% · 告警 ${p}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(c.level==="building"){const u=a.buildings.find(I=>I.id===c.buildingId),P=y(c.buildingId).find(I=>I.id===N.floorId)??y(c.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${r(u?.imageUrl??"./media/building-e.webp")}" alt="${r(u?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${P?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${r(c.projectId)}:${r(c.buildingId)}:${r(P.id)}">
                    <span class="pacom-dot ${p>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${r(u?.name??"")} ${r(P.name)} · 在线 ${s}/${M.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const o=a.floors.find(u=>u.id===c.floorId),d=a.buildings.find(u=>u.id===c.buildingId),v=Q();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${W?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${r(W)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${me}px, ${pe}px) scale(${ee});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${r(o?.plan?.imageUrl??"./media/floors/e/07F.webp")}" alt="${r(d?.name??"楼宇")} ${r(o?.name??"7F")} 平面图" />
                  ${v.map((u,P)=>{const I=it[u.id];if(!I)return"";const f=D===u.id,ne=["23.2°C","24.6°C","22.8°C","23.9°C"],xe=["有人 74%","会议中","有人 52%","空闲"],je=g==="temp"?` · ${ne[P%ne.length]}`:g==="occupancy"?` · ${xe[P%xe.length]}`:"",He=g==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":g==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${f?"is-active":""}"
                          style="left:${I.left}%; top:${I.top}%; width:${I.width}%; height:${I.height}%; ${f?"":He}"
                          data-filter-zone="${r(f?"all":u.id)}"
                          title="${r(u.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${r(u.name.replace(/^7F\s*/,""))}${je}</span>
                        </button>`}).join("")}
                  ${M.filter(u=>u.planPoint).map(u=>{const P=H.some(je=>je.deviceId===u.id&&je.status==="active"),I=x&&h==="alarms",f=D!=="all"&&u.logicalZoneId!==D||I&&!P,ne=I&&P?"background:var(--pacom-status-critical);":"",xe=u.category==="gateway"?Math.min(92,u.planPoint.y*100+5.5):u.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${u.id===q&&S?"is-selected":""} ${u.connectivity==="offline"?"pacom-pin--offline":""} ${f?"pacom-pin--dimmed":""}"
                          style="left:${(u.planPoint.x*100).toFixed(2)}%; top:${xe.toFixed(2)}%; ${ne}"
                          data-pin-device="${r(u.id)}" title="${r(u.name)}">
                          <span class="pacom-dot ${P?"pacom-dot--critical":u.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${r(Oe(u))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function ve(){if($.level!=="floor"||!S)return"";const s=M.find(f=>f.id===q);if(!s)return"";const p=s.category==="lighting",c=s.category==="hvac",t=Number(s.telemetry.dimming?.value??50),o=Number(s.telemetry.setpoint?.value??24),d=b.has(s.id),v=H.filter(f=>f.deviceId===s.id&&f.status==="active"),u=de.filter(f=>f.deviceId===s.id&&f.status!=="closed"),P=c?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:p?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],I=p?[{label:"当前开关",value:t>0?"开启":"关闭"},{label:"当前亮度",value:`${t}%`},{label:"实时功率",value:t>0?`${Math.round(t*1.4)} W`:"0 W"},{label:"运行模式",value:d?"人工覆盖":"自动策略"}]:c?[{label:"室内温度",value:`${s.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${o.toFixed(1)}°C`},{label:"运行工况",value:s.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:d?"人工覆盖":"自动策略"}]:s.category==="sensor"?[{label:"实时温度",value:`${s.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${s.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${s.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:s.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:s.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:s.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:s.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:s.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${r(s.name)}</h2>
            <div class="pacom-row-sub">${r(le(s.logicalZoneId))} · ${r(Te[s.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${s.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${s.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${B("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${C==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${C==="trend"}" data-drawer-tab="trend">趋势与告警${v.length>0?` (${v.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${C==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${C==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${I.map(f=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${f.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${r(f.value)}</strong>
                  </div>`).join("")}
            </div>

            ${c?`
                <div class="pacom-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${s.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${r(s.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${s.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${s.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${s.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${s.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${o.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${p||c?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${d&&m?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${r(s.id)}">恢复自动策略</button>`:m?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${s.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${p?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${m?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${m?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${t}%</strong>
                        <input type="range" name="ctrlDimming" min="0" max="100" step="10" value="${t}" data-ctrl-slider="lighting.dimming" ${m?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${m?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${m?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${o-.5}" ${m?"":"disabled"}>-0.5°C</button>
                        <strong>${o.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${o+.5}" ${m?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${J?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${r(J.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${J.receipts.map(f=>{const ne=st[f.status]??{text:f.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${r(f.deviceId)}</strong> · ${r(f.command)} → ${r(f.targetValue)}</div>
                              ${f.errorMessage?`<div style="color:var(--pacom-status-critical);">${r(f.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${ne.badge}">${ne.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:C==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${p?"亮度 %":c?"温度 °C":s.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${r(s.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${s.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${p?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":c?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${v.length===0&&u.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${v.map(f=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${r(f.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${r(f.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${u.map(f=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${r(f.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${r(f.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${r(Oe(s))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${r(le(s.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${K?`<div class="pacom-info-banner">${r(K)}</div>`:""}
                ${P.map(f=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${r(f.name)}">${r(f.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${r(f.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="pacom-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${B("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${r(s.id)}</code> · v${s.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${s.planPoint?`x=${s.planPoint.x.toFixed(2)}, y=${s.planPoint.y.toFixed(2)} (图 v${s.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${s.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${s.hardwareBinding?`${s.hardwareBinding.protocol.toUpperCase()} · ${s.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function Ie(s,p,c){if(!A)return"";const t=Math.max(0,M.length-s),o=re==="week",d=H.filter(v=>v.status==="active").slice(0,2);return`
      <div class="pacom-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${o?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!o}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${o}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${B("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${o?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${o?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${r(c)}°C · ${s}/${M.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${p} 告警 · ${t} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,b.size)} 覆盖 · ${de.filter(v=>v.status!=="closed").length} 工单</strong></div>
        </div>
        ${d.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${d.map(v=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${r(v.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${r(v.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function _(){if(a.projects.length===0){e.innerHTML=`
        <div class="pacom-shell" style="position:relative;">
          <header class="pacom-header">
            <div class="pacom-header-top">
              <div class="pacom-title-group">
                <h1 class="pacom-title">空间总览</h1>
                ${Fe({tree:a,session:n,scope:$,activeAlarmCount:0,isOpen:!1,searchKeyword:""})}
              </div>
            </div>
          </header>
          <main class="pacom-spatial-stage" style="display:flex; align-items:center; justify-content:center; padding:24px;">
            <div class="dep-empty-card" style="max-width:520px; width:100%; background:var(--pacom-surface-card);">
              <div class="dep-empty-icon">${B("building-2",20)}</div>
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
              <span class="pacom-row-sub" style="max-width:400px;">当前机构还未建立空间档案。先创建首个项目并添加楼宇、楼层与平面图，即可在此查看全景与实时设备态势。</span>
              <div class="dep-empty-steps">
                <span>1. 创建项目</span>
                <span>→</span>
                <span>2. 添加楼宇与楼层</span>
                <span>→</span>
                <span>3. 上传平面图</span>
              </div>
              <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-first-project="1" ${n.scope.canEditDeployment?"":"disabled"}>+ 创建第一个项目</button>
            </div>
          </main>
        </div>
      `,e.querySelector("[data-go-create-first-project]")?.addEventListener("click",()=>{window.location.hash="#deployment?sec=projects&new=project"});return}const s=H.filter(t=>t.status==="active").length,p=M.filter(t=>t.connectivity==="online").length,c=M.find(t=>t.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${Fe({tree:a,session:n,scope:$,activeAlarmCount:s,isOpen:k,searchKeyword:Y})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${W?'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${A}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${p}/${M.length} 在线 · ${r(c)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${nt}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${Ie(p,s,c)}

        <main class="pacom-spatial-stage">
          ${i(s)}
          ${$e(p,s)}
          ${F(s)}
          ${ge(p,s)}
          ${ve()}
        </main>
      </div>
    `,De()}function De(){Be(e,{onToggle:()=>{k=!k,k&&(A=!1,x=!1),_(),k&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:t=>{Y=t,_();const o=e.querySelector("[data-global-space-search]");o&&(o.focus(),o.setSelectionRange(t.length,t.length))},onPick:t=>{k=!1,G(t)}}),e.querySelectorAll("[data-nav-scope]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),t.dataset.navScope&&G(Ae(t.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const d=t.dataset.hudTab;x&&h===d?x=!1:(h=d,x=!0,k=!1,A=!1),_()})}),e.querySelectorAll("[data-toggle-hud]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),x=!x,x&&(k=!1,A=!1),_()})}),e.querySelectorAll("[data-close-hud]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),x=!1,_()})});const s=e.querySelector('[data-role="search"]');s?.addEventListener("focus",()=>{x||(x=!0,k=!1,A=!1,ye())}),s?.addEventListener("input",t=>{U=t.currentTarget.value,x=!0,ye()}),e.querySelector('[data-role="category"]')?.addEventListener("change",t=>{Z=t.currentTarget.value,_()}),e.querySelectorAll("[data-filter-zone]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),D=t.dataset.filterZone??"all",_()})}),e.querySelectorAll("[data-select-device]").forEach(t=>{t.addEventListener("click",o=>{o.target.tagName!=="INPUT"&&(q=t.dataset.selectDevice??null,S=!0,_())})}),e.querySelectorAll("[data-check-device]").forEach(t=>{t.addEventListener("change",()=>{const o=t.dataset.checkDevice;o&&(t.checked?z.add(o):z.delete(o),_())})}),e.querySelectorAll("[data-pin-device]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),q=t.dataset.pinDevice??null,S=!0,k=!1,A=!1,_()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{S=!1,_()}),e.querySelectorAll("[data-drawer-tab]").forEach(t=>{t.addEventListener("click",()=>{C=t.dataset.drawerTab??"control",K="",_()})}),e.querySelectorAll("[data-drawer-doc]").forEach(t=>{t.addEventListener("click",()=>{K=`已调阅「${t.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,_()})}),e.querySelectorAll("[data-briefing-period]").forEach(t=>{t.addEventListener("click",()=>{re=t.dataset.briefingPeriod??"today",_()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.goAlarmId??"";window.location.hash=o?`#alarms?alarm=${encodeURIComponent(o)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.goWoId??"";window.location.hash=o?`#alarms?wo=${encodeURIComponent(o)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",t=>{const o=t.currentTarget.dataset.releaseOverride;o&&(b.delete(o),_())}),e.querySelectorAll("[data-zone-power]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const d=t.dataset.zonePower,v=t.dataset.zoneVal==="true";if(!d)return;const u=M.filter(I=>I.logicalZoneId===d&&I.category==="lighting").map(I=>I.id),P=M.filter(I=>I.logicalZoneId===d&&I.category==="hvac").map(I=>I.id);u.length?ce(u,"lighting.power",v):P.length&&ce(P,"hvac.power",v)})}),e.querySelectorAll("[data-locate-device]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.locateDevice;o&&(q=o,S=!0,x=!1,_())})}),e.querySelectorAll("[data-go-alarms]").forEach(t=>{t.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(o)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(o)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),A=!A,A&&(k=!1,x=!1),_()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const t=M.filter(I=>I.connectivity==="online").length,o=H.filter(I=>I.status==="active").length,d=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${t}/${M.length}（离线 ${M.length-t} 台）`,`待处理告警：${o} 条`,`人工覆盖中：${b.size} 台`].join(`
`),v=new Blob([d],{type:"text/plain;charset=utf-8;"}),u=URL.createObjectURL(v),P=document.createElement("a");P.href=u,P.download="pacom-daily-briefing.txt",P.click(),URL.revokeObjectURL(u)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(t=>{t.addEventListener("click",()=>{if(!q||!t.dataset.ctrlCmd)return;const o=t.dataset.ctrlVal??"",d=o==="true"?!0:o==="false"?!1:Number(o);ce([q],t.dataset.ctrlCmd,d)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",t=>{const o=t.currentTarget;!q||!o.dataset.ctrlSlider||ce([q],o.dataset.ctrlSlider,Number(o.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(t=>{t.addEventListener("click",()=>{const o=Array.from(z),d=t.dataset.batchVal??"",v=d==="true"?!0:d==="false"?!1:d;ce(o,t.dataset.batchCmd,v)})}),e.querySelectorAll("[data-ack-alarm]").forEach(t=>{t.addEventListener("click",async()=>{!t.dataset.ackAlarm||$.level!=="floor"||!w||(await l.acknowledgeAlarm(t.dataset.ackAlarm,"首页快速确认"),H=await l.listAlarms($.floorId),_())})}),e.querySelectorAll("[data-canvas-layer]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.canvasLayer;o&&(g=o,_())})}),e.querySelectorAll("[data-zoom]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.zoom;o==="in"?ee=Math.min(2.6,Number((ee+.2).toFixed(2))):o==="out"?ee=Math.max(.6,Number((ee-.2).toFixed(2))):(ee=1,me=0,pe=0),be()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",t=>{t.preventDefault();const o=$;if(o.level!=="building"&&o.level!=="floor")return;const d=y(o.buildingId),v=[...V?[{level:"building",projectId:o.projectId,buildingId:o.buildingId}]:[],...d.map(I=>({level:"floor",projectId:o.projectId,buildingId:o.buildingId,floorId:I.id}))],u=v.findIndex(I=>I.level==="building"?o.level==="building":I.level==="floor"&&o.level==="floor"&&I.floorId===o.floorId);if(u<0)return;const P=Math.max(0,Math.min(v.length-1,u+(t.deltaY>0?1:-1)));P!==u&&v[P]&&G(v[P])},{passive:!1});const c=e.querySelector('[data-role="canvas-stage"]');if(c&&!W){let t=!1,o=!1,d=0,v=0,u=0,P=0;c.addEventListener("pointerdown",f=>{f.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(t=!0,o=!1,d=f.clientX,v=f.clientY,u=me,P=pe,c.classList.add("is-panning"),c.setPointerCapture?.(f.pointerId))}),c.addEventListener("pointermove",f=>{if(!t)return;const ne=f.clientX-d,xe=f.clientY-v;(Math.abs(ne)>3||Math.abs(xe)>3)&&(o=!0),me=u+ne,pe=P+xe,be()});const I=()=>{t&&(t=!1,c.classList.remove("is-panning"),!o&&(x||k||A)&&(x=!1,k=!1,A=!1,_()))};c.addEventListener("pointerup",I),c.addEventListener("pointercancel",I),c.addEventListener("wheel",f=>{f.preventDefault();const ne=f.deltaY<0?.12:-.12;ee=Math.max(.6,Math.min(2.6,Number((ee+ne).toFixed(2)))),be()},{passive:!1}),c.addEventListener("dblclick",f=>{f.target?.closest("button")||(ee=1,me=0,pe=0,be())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",t=>{t.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .pacom-briefing-pop")||(x||k||A)&&(x=!1,k=!1,A=!1,_())})}e.addEventListener("keydown",s=>{s.key==="Escape"&&(k||A||x||S)&&(k=!1,A=!1,x=!1,S=!1,_())}),await G($,!0)}const ct=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,rt='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',dt='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',Me=B("x",16),Re={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}};function pt(e){const l=e.replace(/\D/g,"");return l.length===11?`${l.slice(0,3)} •••• ${l.slice(7)}`:e}function ue(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const ke=new WeakMap;function gt(e){ke.get(e)?.()}function vt(e,l,n){ke.get(e)?.(),e.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,m=!1,w="",L="",O="",R="",X=!1,j={},V="",T=!1,$="",h=0,x=null,k=null,Y="privacy",U="",Z="",D="";function ae(){x!==null&&(window.clearInterval(x),x=null),e.classList.remove("bare-login"),ke.get(e)===ae&&ke.delete(e)}ke.set(e,ae);function ie(){h=60,x!==null&&window.clearInterval(x),x=window.setInterval(()=>{h-=1,h<=0&&(h=0,x!==null&&(window.clearInterval(x),x=null));const C=e.querySelector('[data-act="send-sms"]');C&&(C.disabled=h>0,C.textContent=h>0?`${h} 秒后重发`:$?"重新获取":"获取验证码")},1e3)}function oe(){if(!k)return"";if(k==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Me}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${ue(Z)}" />
                  </div>
                </div>
                ${D?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${ue(D)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(k==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Me}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                请联系所在机构管理员获取邀请码，或通过支持邮箱联系开通新机构账户。
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `;if(k==="legal"){const C=Re[Y],K=["privacy","terms","service"].map(A=>`<button type="button" role="tab" aria-selected="${Y===A}" class="au-legal-tab ${Y===A?"is-active":""}" data-act="switch-legal" data-tab="${A}">${Re[A].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Me}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${K}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${C.items.map(A=>`<li>${ue(A)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return k==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Me}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${U||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:""}function q(){const C=a?`
        <div class="au-field ${j.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ue(O)}" aria-invalid="${j.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${h>0?"disabled":""}>
              ${h>0?`${h} 秒后重发`:$?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${ue(j.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${$?`验证码已发送至 ${ue(pt($))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${j.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ue(w)}" aria-invalid="${j.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${ue(j.id??"")}</p>
        </div>
      `,K=a?`
        <div class="au-field ${j.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ue(R)}" aria-invalid="${j.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${ue(j.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${j.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${m?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ue(L)}" aria-invalid="${j.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${m?"隐藏密码":"显示密码"}">
              ${m?dt:rt}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${ue(j.pwd??"")}</p>
        </div>
      `;e.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${ct}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${T?"disabled":""}>
                  ${C}
                  ${K}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${V?"":"hidden"}>${ue(V)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${X?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${T?"disabled":""}>
                    ${T?"正在登录…":"登录"}
                  </button>
                </fieldset>
              </form>
              <div class="au-login-actions">
                <button type="button" class="au-textbtn" data-act="toggle-sms">
                  <span>${a?"使用密码登录":"使用短信验证码登录"}</span>
                </button>
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
              <button type="button" data-act="open-legal">隐私和法律</button>
              <button type="button" data-act="open-contact">联系我们</button>
            </div>
          </footer>
        </section>
        <aside class="au-art" aria-hidden="true">
          <img src="./media/auth-hero.jpg" alt="" />
        </aside>
      </div>
      ${oe()}
    `,S()}function S(){const C=e.querySelector("#au-id"),K=e.querySelector("#au-pwd"),A=e.querySelector("#au-sphone"),re=e.querySelector("#au-scode"),g=e.querySelector('input[name="keep"]');C?.addEventListener("input",()=>{if(w=C.value,j.id||V){delete j.id,V="",C.closest(".au-field")?.classList.remove("bad");const b=e.querySelector("#au-id-err");b&&(b.textContent="");const z=e.querySelector("#au-login-ferr");z&&(z.hidden=!0)}}),K?.addEventListener("input",()=>{if(L=K.value,j.pwd||V){delete j.pwd,V="",K.closest(".au-field")?.classList.remove("bad");const b=e.querySelector("#au-pwd-err");b&&(b.textContent="");const z=e.querySelector("#au-login-ferr");z&&(z.hidden=!0)}}),A?.addEventListener("input",()=>{if(O=A.value,j.sphone||V){delete j.sphone,V="",A.closest(".au-field")?.classList.remove("bad");const b=e.querySelector("#au-sphone-err");b&&(b.textContent="");const z=e.querySelector("#au-login-ferr");z&&(z.hidden=!0)}}),re?.addEventListener("input",()=>{if(R=re.value.replace(/\D/g,"").slice(0,6),re.value=R,j.scode||V){delete j.scode,V="",re.closest(".au-field")?.classList.remove("bad");const b=e.querySelector("#au-scode-err");b&&(b.textContent="");const z=e.querySelector("#au-login-ferr");z&&(z.hidden=!0)}}),g?.addEventListener("change",()=>{X=g.checked}),e.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{m=!m,q(),e.querySelector("#au-pwd")?.focus()}),e.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,j={},V="",q(),e.querySelector(a?"#au-sphone":"#au-id")?.focus()}),e.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const b=O.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(b)){j={sphone:"请输入有效的手机号码"},q(),e.querySelector("#au-sphone")?.focus();return}j={},$=b,ie(),q(),e.querySelector("#au-scode")?.focus()}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async b=>{if(b.preventDefault(),!T){if(j={},V="",a?(O.trim()||(j.sphone="请输入手机号码"),/^\d{6}$/.test(R.trim())||(j.scode="请输入 6 位验证码")):(w.trim()||(j.id="请输入电子邮箱或手机号码"),L||(j.pwd="请输入密码")),Object.keys(j).length>0){q();const z=Object.keys(j)[0];e.querySelector(`#au-${z}`)?.focus();return}T=!0,q();try{const z=await l.login({account:(a?O:w).trim(),password:a?R.trim():L});ae(),n(z)}catch(z){T=!1,V=z instanceof Error?z.message:"账户或密码不正确",q()}}}),e.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{Z=w.trim(),D="",k="reset",q(),e.querySelector("#au-rs-id")?.focus()}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{k="register",q()}),e.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{k="legal",q()}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{U="",k="contact",q()}),e.querySelectorAll('[data-act="close-modal"]').forEach(b=>{b.addEventListener("click",()=>{k=null,q()})}),e.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",b=>{b.target===b.currentTarget&&(k=null,q())}),e.querySelectorAll('[data-act="switch-legal"]').forEach(b=>{b.addEventListener("click",()=>{const z=b.dataset.tab;z&&(Y=z,q())})}),e.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),U="已复制"}catch{U="support@pacom.cn"}q()}),e.querySelector("#au-reset-form")?.addEventListener("submit",b=>{b.preventDefault(),Z=e.querySelector("#au-rs-id")?.value.trim()??"",Z?D="请联系机构管理员重置账号密码，或确认后查收重置邮件。":D="请输入电子邮箱或手机号码",q()})}q()}export{N as E,Fe as a,Be as b,mt as c,vt as d,E as e,Ne as g,ut as m,B as r,qe as s,gt as u};
