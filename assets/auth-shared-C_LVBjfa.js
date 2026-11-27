(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))a(d);new MutationObserver(d=>{for(const v of d)if(v.type==="childList")for(const y of v.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&a(y)}).observe(document,{childList:!0,subtree:!0});function o(d){const v={};return d.integrity&&(v.integrity=d.integrity),d.referrerPolicy&&(v.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?v.credentials="include":d.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function a(d){if(d.ep)return;d.ep=!0;const v=o(d);fetch(d.href,v)}})();const B={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},He={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"layout-dashboard":'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',waypoints:'<circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',"key-round":'<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',"file-text":'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'};function _e(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function q(e,t=16,o=""){const a=_e(t);return`<svg${o?` class="${o}"`:""} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${He[e]}</svg>`}let Le={level:"floor",projectId:B.projectId,buildingId:B.buildingId,floorId:B.floorId};function Re(){return Le}function Ae(e){return Le=e,Le}function Q(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Pe(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面"))return 999;const o=t.match(/(-?\d+)/);if(!o)return 0;const a=Number(o[1]);return t.startsWith("B")?-Math.abs(a):a}function Ue(e){if(e==="all")return{level:"all-projects"};const t=e.split(":");return t[0]==="project"&&t[1]?{level:"project",projectId:t[1]}:t[0]==="building"&&t[1]&&t[2]?{level:"building",projectId:t[1],buildingId:t[2]}:t[0]==="floor"&&t[1]&&t[2]&&t[3]?{level:"floor",projectId:t[1],buildingId:t[2],floorId:t[3]}:{level:"project",projectId:B.projectId}}function We(e,t,o){return o==="project"?e.level==="all-projects"?{level:"project",projectId:t.projects[0]?.id??B.projectId}:{level:"project",projectId:e.projectId}:o==="building"&&e.level==="floor"?{level:"building",projectId:e.projectId,buildingId:e.buildingId}:e}function ze(e){const{tree:t,session:o,isOpen:a,searchKeyword:d}=e;if(t.projects.length===0)return'<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap"><span class="pacom-path-trigger is-static"><span class="pacom-path-muted">暂无项目</span></span></div>';const v=e.maxGranularity??"floor",y=e.activeAlarmCount??0,M=o.scope.allowedZoneIds?.length?o.scope.allowedZoneIds:null,I=t.floors.filter(h=>o.scope.allowedFloorIds.includes(h.id)),j=M||t.projects.length<=1&&t.buildings.length<=1&&I.length<=1?"floors-only":t.projects.length>1?"multi-project":t.buildings.length>1?"single-project-multi-building":"single-building",V=j==="multi-project"&&v!=="project",G=j==="multi-project"||j==="single-project-multi-building",F=j!=="floors-only"&&v!=="project",x=v==="project"&&t.projects.length<=1||j==="floors-only"&&I.length<=1,$=We(e.scope??Le,t,v),S=$.level==="all-projects"?null:t.projects.find(h=>h.id===$.projectId)??t.projects[0],A=$.level==="building"||$.level==="floor"?t.buildings.find(h=>h.id===$.buildingId):null,J=$.level==="floor"?t.floors.find(h=>h.id===$.floorId):null,_=[];if($.level==="all-projects")_.push(`全部项目（${t.projects.length}）`);else if($.level==="project")_.push(Q(S?.name??"广实2号园"));else if($.level==="building")S&&_.push(`<span class="pacom-path-muted">${Q(S.name)}</span>`),_.push(Q(A?.name??"E栋"));else{S&&j!=="floors-only"&&_.push(`<span class="pacom-path-muted">${Q(S.name)}</span>`),A&&F&&_.push(`<span class="pacom-path-muted">${Q(A.name)}</span>`);const h=!F&&A?`${A.name} ${J?.name??"7F"}`:J?.name??"7F";_.push(Q(h))}const K='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',U=x?`<span class="pacom-path-trigger is-static">${_.join(K)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${a}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${_.join(K)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${q("chevron-down",12)}</span>
      </button>`;if(!a||x)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${U}</div>`;const ie=d.trim().toLowerCase(),ce=$.level==="all-projects"?t.projects[0]?.id??B.projectId:$.projectId,le=$.level==="building"||$.level==="floor"?$.buildingId:t.buildings.find(h=>h.projectId===ce)?.id??B.buildingId,W=t.projects.filter(h=>!ie||h.name.toLowerCase().includes(ie)),E=t.buildings.filter(h=>h.projectId===ce&&(!ie||h.name.toLowerCase().includes(ie))),P=[...t.floors.filter(h=>h.buildingId===le)].sort((h,R)=>Pe(R.name)-Pe(h.name)).filter(h=>!ie||h.name.toLowerCase().includes(ie)),ae=v==="project"||t.projects.length>1,O=v!=="project"&&G,me=v==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${U}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${q("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${Q(d)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${q("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${ae?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${V?`<button type="button" class="pacom-space-pop-item ${$.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${t.projects.length}）</span>
                        ${$.level==="all-projects"?q("check",14):""}
                      </button>`:""}
                ${W.map(h=>{const R=$.level==="project"&&$.projectId===h.id;return`<button type="button" class="pacom-space-pop-item ${R?"is-active":""}" data-global-space-pick="project:${Q(h.id)}">
                      <span>${Q(h.name)}</span>
                      ${R?q("check",14):q("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${O?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Q(t.projects.find(h=>h.id===ce)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${$.level==="project"?"is-active":""}" data-global-space-pick="project:${Q(ce)}">
                  <span>全园区</span>
                  ${$.level==="project"?q("check",14):""}
                </button>
                ${E.map(h=>{const R=$.level==="building"&&$.buildingId===h.id;return`<button type="button" class="pacom-space-pop-item ${R?"is-active":""}" data-global-space-pick="building:${Q(h.projectId)}:${Q(h.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Q(h.name)}</span>
                        ${h.id===B.buildingId&&y>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${R?q("check",14):q("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${me?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Q(t.buildings.find(h=>h.id===le)?.name??"楼宇")} · 楼层</div>
                ${F?`<button type="button" class="pacom-space-pop-item ${$.level==="building"&&$.buildingId===le?"is-active":""}" data-global-space-pick="building:${Q(ce)}:${Q(le)}">
                        <span>整栋</span>
                        ${$.level==="building"&&$.buildingId===le?q("check",14):""}
                      </button>`:""}
                ${P.map(h=>{const R=o.scope.allowedFloorIds.includes(h.id),ee=$.level==="floor"&&$.floorId===h.id,L=h.id===B.floorId&&y>0;return`<button type="button" class="pacom-space-pop-item ${ee?"is-active":""}" style="${R?"":"opacity:0.5;"}" data-global-space-pick="floor:${Q(ce)}:${Q(le)}:${Q(h.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Q(h.name)}</span>
                        ${L?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${ee?q("check",14):R?h.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function Ve(e,t){e.querySelectorAll("[data-global-space-toggle]").forEach(a=>{a.addEventListener("click",d=>{d.stopPropagation(),t.onToggle()})}),e.querySelector("[data-global-space-search]")?.addEventListener("input",a=>{t.onSearch(a.currentTarget.value)}),e.querySelectorAll("[data-global-space-pick]").forEach(a=>{a.addEventListener("click",d=>{d.stopPropagation();const v=a.dataset.globalSpacePick;if(!v)return;const y=Ae(Ue(v));t.onPick(y)})})}function w(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const Ze=q("chevron-down",12),je=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],Se=[{id:B.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:B.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:B.projectId,label:"广实2号园（全园区）",factor:18.2}],Ge={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},Ke=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],fe=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function Ce(e,t=""){const o=(e??"").trim().toLowerCase();return!(!o||o.includes("%")||o.includes("°c")||o.includes("ppm")||o.includes("ms")||o.includes("m²")||o.includes("/m2")||o.includes("db")||o.includes("lx")||t.includes("率")||t.includes("均")||t.includes("强度")||t.includes("延迟"))}function Ee(e,t){const o=e*t;return Math.abs(o)>=10?Math.round(o):Math.round(o*10)/10}function Ye(e,t){const o=Number(String(e).replaceAll(",","")),a=t??"";return Number.isFinite(o)?a==="kWh"&&Math.abs(o)>=1e4?{value:(o/1e3).toFixed(1),unit:"MWh",title:`精确值：${o.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(o)?o.toLocaleString("en-US"):o.toLocaleString("en-US",{maximumFractionDigits:1}),unit:a,title:`${o.toLocaleString("en-US")} ${a}`.trim()}:{value:e,unit:a,title:`${e} ${a}`.trim()}}function Xe(e,t){if(t===1)return e;const o=Ce(e.unit);return{...e,kpis:e.kpis.map(a=>{const d=Number(String(a.value).replaceAll(",",""));return!Number.isFinite(d)||!Ce(a.unit,a.label)?a:{...a,value:String(Ee(d,t))}}),series:o?e.series.map(a=>({...a,value:Ee(a.value,t),...typeof a.baseline=="number"?{baseline:Ee(a.baseline,t)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(a=>Ce(a.unit)?{...a,value:Ee(a.value,t)}:a)}}function Qe(e,t){const o=Math.max(...e.series.map(F=>Math.max(F.value,F.baseline??0)),1),a=46,d=34,v=36,y=Math.max(e.series.length*(a+d)+v*2,620),M=228,I=184,j=132,V=[0,.25,.5,.75,1].map(F=>{const x=Math.round(I-F*j);return`<line x1="${v-8}" y1="${x}" x2="${y-18}" y2="${x}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${F===0?"0":"3 3"}" />`}).join(""),G=e.series.map((F,x)=>{const $=v+x*(a+d),S=Math.max(8,Math.round(F.value/o*j)),A=I-S,J=typeof F.baseline=="number"&&F.value>F.baseline*1.08,_=J?`<rect x="${$-8}" y="34" width="${a+16}" height="${I-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",K=typeof F.baseline=="number"?`<line x1="${$-5}" y1="${Math.round(I-F.baseline/o*j)}" x2="${$+a+5}" y2="${Math.round(I-F.baseline/o*j)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",U=t&&(J||x===1)?`<g><title>${J?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${$+a/2}" cy="18" r="7" fill="${J?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${$+a/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="500" fill="#fff">${J?"!":"S"}</text></g>`:"",ie=F.value>=1e4?`${(F.value/1e3).toFixed(1)}k`:F.value.toLocaleString("en-US");return`
        ${_}
        ${K}
        ${U}
        <g>
          <title>${w(F.label)}：实测 ${F.value.toLocaleString("en-US")} ${w(e.unit)}${F.baseline!==void 0?` / 基线 ${F.baseline.toLocaleString("en-US")} ${w(e.unit)}`:""}</title>
          <rect x="${$}" y="${A}" width="${a}" height="${S}" rx="7" fill="${J?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${$+a/2}" y="${A-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${ie}</text>
        <text x="${$+a/2}" y="${I+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${w(F.label)}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${y} ${M}" style="width:100%; height:232px; display:block;" role="img" aria-label="${w(e.category)} 趋势图">
      ${V}
      ${G}
    </svg>
  `}function Je(e,t){const o=e.connectivity==="offline";if(e.category==="hvac"){const a=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:o?[23.8,24,24.1,null,null,null,null,null]:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a],offline:o,colorIdx:t},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:o?[24,24,24,null,null,null,null,null]:[a,a,a,a,a,a,a,a],offline:o,colorIdx:t+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:o?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:o,colorIdx:t+2}]}if(e.category==="lighting"){const a=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)],offline:o,colorIdx:t},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:o,colorIdx:t+1}]}if(e.category==="sensor"){const a=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a],offline:o,colorIdx:t},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:o,colorIdx:t+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:o,colorIdx:t+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:o,colorIdx:t}]}function et(e){const t=e.points.filter(M=>typeof M=="number");if(!t.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const o=Math.min(...t),a=Math.max(...t),d=t.reduce((M,I)=>M+I,0)/t.length,v=e.points[e.points.length-1],y=M=>Math.abs(M)<100&&!Number.isInteger(M)?M.toFixed(1):Math.round(M).toString();return{min:y(o),avg:d.toFixed(Math.abs(d)<100?1:0),max:y(a),curr:typeof v=="number"?y(v):"离线"}}function tt(e,t,o){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="pacom-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const d=(y,M)=>{const A=[];for(const E of y)for(const P of E.points)typeof P=="number"&&A.push(P);const J=A.length?Math.min(...A)*.92:0,_=A.length?Math.max(...A)*1.08:100,K=Math.max(_-J,1),U=[0,.5,1].map(E=>{const P=Math.round(26+106*(1-E)),ae=(J+K*E).toFixed(K<15?1:0);return`
          <line x1="44" y1="${P}" x2="662" y2="${P}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${E===0?"0":"3 3"}" />
          <text x="38" y="${P+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${ae}</text>
        `}).join(""),ie=a.map((E,P)=>`<text x="${44+P/(a.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${E}</text>`).join(""),ce=y.map((E,P)=>{const ae=fe[(E.colorIdx+P)%fe.length],O=E.points,me=[];let h=44,R=26+106/2,ee=!1;O.forEach((T,re)=>{const Y=44+re/(O.length-1)*618;if(typeof T=="number"){const N=26+106*(1-(T-J)/K);me.push(`${Y.toFixed(1)},${N.toFixed(1)}`),h=Y,R=N}else ee=!0});const L=o?O.map((T,re)=>{if(typeof T!="number")return null;const Y=44+re/(O.length-1)*618,X=26+106*(1-(T*.96-J)/K);return`${Y.toFixed(1)},${X.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${L?`<polyline fill="none" stroke="${ae}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${L}" />`:""}
          ${me.length?`<polyline fill="none" stroke="${ae}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${me.join(" ")}" />`:""}
          ${ee?`<line x1="${h.toFixed(1)}" y1="${R.toFixed(1)}" x2="662" y2="${R.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${R-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),le=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="500" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,W=y.map((E,P)=>{const ae=fe[(E.colorIdx+P)%fe.length],O=et(E);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${ae};"></span>${w(E.deviceName)} · ${w(E.label)}</span></td>
            <td><strong>${w(O.curr)}</strong> <span class="pacom-row-sub">${w(E.unit)}</span></td>
            <td>${w(O.min)} <span class="pacom-row-sub">${w(E.unit)}</span></td>
            <td>${w(O.avg)} <span class="pacom-row-sub">${w(E.unit)}</span></td>
            <td>${w(O.max)} <span class="pacom-row-sub">${w(E.unit)}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${w(M)}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${y.map((E,P)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${fe[(E.colorIdx+P)%fe.length]};"></span>${w(E.deviceName)}·${w(E.label)}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${U}
          ${ie}
          ${le}
          ${ce}
        </svg>
        <div class="pacom-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="pacom-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${W}</tbody>
          </table>
        </div>
      </div>
    `};if(t==="shared")return d(e,"单图叠合对比（Shared）");const v=new Map;for(const y of e){const M=v.get(y.unit)??[];M.push(y),v.set(y.unit,M)}return Array.from(v.entries()).map(([y,M])=>d(M,`按单位分组泳道（${y}）`)).join("")}function at(e){const t=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(v=>[v.label,String(v.value),v.baseline!==void 0?String(v.baseline):""].join(","))],o=new Blob([`\uFEFF${t.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),d=document.createElement("a");d.href=a,d.download=`pacom-${e.category}-${e.range}.csv`,d.click(),URL.revokeObjectURL(a)}function nt(e){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],o=["时间",...e.map(M=>`${M.deviceName}·${M.label}(${M.unit})`)].join(","),a=t.map((M,I)=>[M,...e.map(j=>String(j.points[I]??"No Data"))].join(",")),d=new Blob([`\uFEFF${[o,...a].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),v=URL.createObjectURL(d),y=document.createElement("a");y.href=v,y.download="pacom-timeseries-export.csv",y.click(),URL.revokeObjectURL(v)}async function yt(e,t,o){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),d=a.get("tab"),v=a.get("cat"),y=a.get("device"),M=a.get("points"),I=a.get("mode"),j=a.get("interval");let V=d==="timeseries"?"timeseries":v&&je.some(b=>b.id===v)?v:"energy",G="7d",F="2026-11-16",x="2026-11-23";const $=!!o.scope.allowedZoneIds?.length,S=o.scope.allowedFloorIds[0]??B.floorId,A={level:"floor",projectId:o.scope.allowedProjectIds[0]??B.projectId,buildingId:o.scope.allowedBuildingIds[0]??B.buildingId,floorId:S};function J(b){if($)return{scope:A,scopeId:S};if(b.level==="all-projects")return o.scope.allowedProjectIds.includes(B.projectId)?{scope:b,scopeId:B.projectId}:{scope:A,scopeId:S};if(b.level==="project"){if(o.scope.allowedProjectIds.includes(b.projectId)){const H=Se.some(te=>te.id===b.projectId)?b.projectId:B.projectId;return{scope:b,scopeId:H}}return{scope:A,scopeId:S}}if(b.level==="building"){if(o.scope.allowedBuildingIds.includes(b.buildingId)){const H=Se.some(te=>te.id===b.buildingId)?b.buildingId:B.buildingId;return{scope:b,scopeId:H}}return{scope:A,scopeId:S}}return o.scope.allowedFloorIds.includes(b.floorId)?{scope:b,scopeId:b.floorId}:{scope:A,scopeId:S}}const _=J(Re());let K=_.scope,U=!1,ie="",ce=_.scopeId,le="chart",W=!0,E="breakdown",P=!1,ae=null;const[O,me]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(B.floorId).catch(()=>[])]);let h=me;const R=new Map,ee=[];h.forEach((b,H)=>{const te=Je(b,H);R.set(b.id,te),ee.push(...te)});let L=I==="shared"||I==="grouped"?I:"grouped",T=j==="15m"||j==="1h"||j==="1d"?j:"1h",re=!1;const Y=[];if(M?M.split(",").forEach(b=>{ee.some(H=>H.id===b)&&Y.push(b)}):y&&R.has(y)&&(R.get(y)??[]).slice(0,2).forEach(b=>Y.push(b.id)),!Y.length){const b=h.find(ne=>ne.category==="hvac"),H=h.find(ne=>ne.category==="sensor"),te=h.find(ne=>ne.category==="lighting");b&&(R.get(b.id)??[]).slice(0,2).forEach(ne=>Y.push(ne.id)),H&&(R.get(H.id)??[]).slice(0,1).forEach(ne=>Y.push(ne.id)),te&&(R.get(te.id)??[]).slice(0,1).forEach(ne=>Y.push(ne.id)),Y.length||ee.slice(0,3).forEach(ne=>Y.push(ne.id))}const N=new Set(Y),X=new Set(h.filter((b,H)=>H<2||(R.get(b.id)??[]).some(te=>N.has(te.id))).map(b=>b.id)),pe=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:ee.filter(b=>b.pointKey==="temp"||b.pointKey==="setpoint"||b.pointKey==="co2").slice(0,4).map(b=>b.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:ee.filter(b=>b.pointKey==="dimming"||b.pointKey==="power").slice(0,4).map(b=>b.id),mode:"grouped",interval:"15m"}];let de="";async function he(){const b=V==="timeseries"?"energy":V,H=G==="custom"?"30d":G;ae=await t.getAnalysisReport(b,H,B.floorId),Z()}function Z(){if(!ae)return;const b=V==="timeseries",H=V==="timeseries"?"energy":V,te=je.find(l=>l.id===H)??je[0],ne=Se.find(l=>l.id===ce)??Se[0],se=Xe(ae,ne.factor),be=se.zoneBreakdown.filter(l=>l.status==="warning"),ve=Ge[H],Me=Math.max(...se.zoneBreakdown.map(l=>l.value),1),we=ee.filter(l=>N.has(l.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${ze({tree:O,session:o,scope:K,isOpen:U,searchKeyword:ie})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${G==="today"?"selected":""}>今日</option>
                <option value="7d" ${G==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${G==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${G==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${b?"":`<button class="pacom-btn ${P?"pacom-btn--primary":""}" data-toggle-canvas="1">${P?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${je.map(l=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${V===l.id}" data-cat="${l.id}">${l.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${V==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${G==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${w(F)}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${w(x)}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${b?`
            <div class="pacom-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${we.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${pe.map(l=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${w(l.id)}">${q("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${w(l.name)}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${h.map(l=>{const C=R.get(l.id)??[],ue=X.has(l.id),ye=C.filter(ge=>N.has(ge.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${w(l.id)}" style="cursor:pointer; justify-content:space-between;" title="${w(l.name)}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${ue?"0deg":"-90deg"}); opacity:0.65;">${Ze}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${w(l.name)}</div>
                                <div class="pacom-row-sub">${C.length} 个测点 · ${l.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${ye>0?`<span class="pacom-badge pacom-badge--accent">${ye}</span>`:""}
                          </button>
                          ${ue?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${C.map(ge=>{const ke=N.has(ge.id),D=fe[ge.colorIdx%fe.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${ke?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${w(ge.id)}" data-ts-point="${w(ge.id)}" ${ke?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${D};"></span>
                                            <span style="color:var(--pacom-text-primary);">${w(ge.label)}</span>
                                          </span>
                                          <span class="pacom-row-sub">${w(ge.unit)}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="pacom-subnav-main" style="padding:2px 4px 24px;">
                ${de?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${w(de)}</span></div>`:""}
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${q("clock",12)} 排程(S) · ${q("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${re}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${T==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${T==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${T==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${L==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${L==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${tt(we,L,re)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="pacom-kpi-strip" role="region" aria-label="核心统计指标">
                ${se.kpis.map(l=>{const C=Ye(l.value,l.unit);return`
                      <div class="pacom-kpi-cell" title="${w(C.title)}">
                        <span class="pacom-kpi-label">${w(l.label)}</span>
                        <div class="pacom-kpi-value">
                          <span>${w(C.value)}</span>
                          ${C.unit?`<span class="pacom-kpi-unit">${w(C.unit)}</span>`:""}
                        </div>
                        <span class="pacom-kpi-delta">${w(l.delta??"与基线持平")}</span>
                      </div>`}).join("")}
              </div>

              <section class="pacom-section">
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">${w(te?.label??"趋势")}趋势（${w(se.unit)}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${w(ne.label)} · 更新于 ${w(se.updatedAt.slice(5,16).replace("T"," "))}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${W}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${le==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${le==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${be.length>0?`关注：${be.map(l=>w(l.zoneName)).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${w(te?.desc??"空间运行洞察")} · ${w(ve.summary)}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${le==="chart"?Qe(se,W):`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${w(se.unit)}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${se.series.map(l=>{const C=typeof l.baseline=="number"&&l.value>l.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${w(l.label)}</strong></td>
                                    <td>${l.value.toLocaleString("en-US")}</td>
                                    <td>${l.baseline!==void 0?l.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${C?"pacom-badge--warning":"pacom-badge--online"}">${C?"超基线":"正常"}</span></td>
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
                    <span class="pacom-row-sub">${se.zoneBreakdown.length} 个功能区</span>
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
                          ${se.zoneBreakdown.map(l=>{const C=Math.max(8,Math.round(l.value/Me*100));return`
                                <tr>
                                  <td style="font-weight:500;">${w(l.zoneName.replace(/^7F\s*/,""))}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${C}%; height:100%; border-radius:999px; background:${l.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${l.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${w(l.unit)}</span></td>
                                  <td>
                                    <span class="pacom-badge ${l.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${l.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="pacom-section-title">${P?"E7F 空间对照预览":H==="energy"&&E==="load"?"峰谷负荷分布（Load Profile）":ve.title}</h2>
                    ${!P&&H==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${E==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${E==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${P?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${P?'<img class="pacom-plan-img" src="./media/floors/e/07F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${H==="environment"?`
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
                        ${(H==="energy"&&E==="load"?Ke:ve.items).map(l=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${l.name}</span>
                                <span class="pacom-row-sub">${l.detail} · <strong style="color:var(--pacom-text-primary);">${l.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,l.pct)}%; height:100%; border-radius:999px; background:${l.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,Ve(e,{onToggle:()=>{U=!U,Z(),U&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:l=>{ie=l,Z();const C=e.querySelector("[data-global-space-search]");C&&(C.focus(),C.setSelectionRange(l.length,l.length))},onPick:l=>{const C=J(l);K=C.scope,ce=C.scopeId,U=!1,Z()}}),e.querySelectorAll("[data-cat]").forEach(l=>{l.addEventListener("click",()=>{V=l.dataset.cat??"energy",de="",V==="timeseries"?Z():he()})}),e.querySelector("[data-range-select]")?.addEventListener("change",l=>{G=l.currentTarget.value??"7d",he()}),e.querySelector("[data-custom-start]")?.addEventListener("change",l=>{F=l.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",l=>{x=l.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(l=>{l.addEventListener("click",()=>{le=l.dataset.chartMode??"chart",Z()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{W=!W,Z()}),e.querySelectorAll("[data-energy-right]").forEach(l=>{l.addEventListener("click",()=>{E=l.dataset.energyRight??"breakdown",Z()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{b?nt(we):at(se)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{P=!P,Z()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(l=>{l.addEventListener("click",()=>{const C=l.dataset.tsExpand;C&&(X.has(C)?X.delete(C):X.add(C),Z())})}),e.querySelectorAll("[data-ts-point]").forEach(l=>{l.addEventListener("change",()=>{const C=l.dataset.tsPoint;C&&(l.checked?N.add(C):N.delete(C),de="",Z())})}),e.querySelectorAll("[data-ts-mode]").forEach(l=>{l.addEventListener("click",()=>{L=l.dataset.tsMode??"grouped",Z()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",l=>{T=l.currentTarget.value??"1h",Z()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{re=!re,Z()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const C=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(N).join(","))}&mode=${L}&interval=${T}`,ue=`${window.location.origin}${window.location.pathname}${C}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(ue).catch(()=>{}),window.history.replaceState(null,"",C),de=`已复制分享链接（含 ${N.size} 个测点、${L==="grouped"?"按单位分组":"单图叠合"}、${T} 粒度）。`,Z()}),e.querySelectorAll("[data-load-fav]").forEach(l=>{l.addEventListener("click",()=>{const C=pe.find(ue=>ue.id===l.dataset.loadFav);C&&(N.clear(),C.pointIds.forEach(ue=>{N.add(ue);const ye=ue.split(":")[0];ye&&X.add(ye)}),L=C.mode,T=C.interval,de=`已加载收藏视图「${C.name}」。`,Z())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(N.size===0)return;const l=`自定义对比 #${pe.length+1}（${N.size} 测点）`;pe.push({id:`fav-${Date.now()}`,name:l,pointIds:Array.from(N),mode:L,interval:T}),de=`已保存当前时序配置为「${l}」。`,Z()})}await he()}function Oe(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const t=e.name.includes("702")?"702 照明":"主照明",o=Number(e.telemetry.dimming?.value??0);return o>0?`${t} ${o}%`:`${t} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const qe={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},ot={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},st=q("chevron-down",12),it={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function r(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Be(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面"))return 999;const o=t.match(/(-?\d+)/);if(!o)return 0;const a=Number(o[1]);return t.startsWith("B")?-Math.abs(a):a}async function $t(e,t,o){const a=await t.getSpatialTree();t.mode;const d=o.scope.canControlDevices,v=o.scope.canManageAlarms,y=o.scope.allowedZoneIds?.length?o.scope.allowedZoneIds:null,M=a.floors.filter(i=>o.scope.allowedFloorIds.includes(i.id)),I=y||a.projects.length<=1&&a.buildings.length<=1&&M.length<=1?"floors-only":a.projects.length>1?"multi-project":a.buildings.length>1?"single-project-multi-building":"single-building",j=I==="multi-project",V=I==="multi-project"||I==="single-project-multi-building",G=I!=="floors-only",F=I==="floors-only"&&M.length<=1;let x=Re(),$="devices",S=!1,A=!1,J="",_="",K="all",U="all";const ie=new URLSearchParams(window.location.hash.split("?")[1]??""),ce=ie.get("device"),le=ie.get("zone");let W=ce,E=!!ce,P="control",ae="",O=!1,me="today",h="devices";const R=new Set,ee=new Set;let L=[],T=[],re=[],Y=null,N=null,X=1,pe=0,de=0,he=null;function Z(){return a.zones.filter(i=>!(x.level==="floor"&&i.floorId!==x.floorId||y&&!y.includes(i.id)))}function b(i){return[...a.floors.filter(c=>c.buildingId!==i?!1:I==="floors-only"?o.scope.allowedFloorIds.includes(c.id):!0)].sort((c,n)=>Be(n.name)-Be(c.name))}async function H(i,u=!1){if(a.projects.length===0){x={level:"all-projects"},Ae(x),L=[],T=[],re=[],D();return}let c=i;c.level==="all-projects"&&!j&&(c={level:"project",projectId:a.projects[0]?.id??B.projectId}),c.level==="project"&&!V&&(c={level:"building",projectId:c.projectId,buildingId:a.buildings[0]?.id??B.buildingId}),c.level==="building"&&!G&&(c={level:"floor",projectId:c.projectId,buildingId:c.buildingId,floorId:M[0]?.id??B.floorId}),x=c,Ae(c),N=null,U=u&&le?le:"all",O=!1,A=!1,S=!1,ee.clear(),X=1,pe=0,de=0,he&&(he(),he=null);const n=x.level==="floor"?x.floorId:B.floorId;if(x.level==="floor")try{const[s,p,g]=await Promise.all([t.getFloorDevices(x.floorId),t.listAlarms(x.floorId),t.listWorkOrders(x.floorId)]);L=s,T=p,re=g,L.some(m=>m.id===W)?u&&ce&&(E=!0):(W=L[1]?.id??L[0]?.id??null,E=!1),he=t.subscribeFloorEvents(x.floorId,async m=>{m.type==="control.receipt.updated"&&Y?.batchId===m.batchId&&(Y=await t.getControlBatch(m.batchId)),(m.type==="telemetry.updated"||m.type==="device.connectivity")&&x.level==="floor"&&(L=await t.getFloorDevices(x.floorId)),m.type==="alarm.changed"&&x.level==="floor"&&(T=await t.listAlarms(x.floorId)),be()})}catch(s){L=[],T=[],re=[],W=null,E=!1,N=s instanceof Error?s.message:String(s)}else{E=!1;const[s,p,g]=await Promise.all([t.getFloorDevices(n).catch(()=>[]),t.listAlarms(n).catch(()=>[]),t.listWorkOrders(n).catch(()=>[])]);L=s,T=p,re=g}D()}function te(i){return i?a.zones.find(u=>u.id===i)?.name??i:"未分配逻辑区"}function ne(){const i=_.trim().toLowerCase();return L.filter(u=>U!=="all"&&u.logicalZoneId!==U||K!=="all"&&u.category!==K?!1:i?u.name.toLowerCase().includes(i)||u.id.toLowerCase().includes(i)||te(u.logicalZoneId).toLowerCase().includes(i):!0)}async function se(i,u,c){!i.length||x.level!=="floor"||!d||(i.forEach(n=>R.add(n)),Y=await t.dispatchControlBatch({floorId:x.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:i.map(n=>({deviceId:n,command:u,targetValue:c}))}),be())}function be(){const i=document.activeElement,u=i?.dataset?.role,c=i&&"selectionStart"in i?i.selectionStart:null,n=i&&"selectionEnd"in i?i.selectionEnd:null,s=e.querySelector(".pacom-list")?.scrollTop??0;D();const p=e.querySelector(".pacom-list");if(p&&(p.scrollTop=s),u==="search"||u==="space-search"){const g=e.querySelector(`[data-role="${u}"]`);g&&(g.focus(),c!==null&&n!==null&&g.setSelectionRange(c,n))}}function ve(){const i=e.querySelector('[data-role="canvas-viewport"]');i&&(i.style.transform=`translate(${pe}px, ${de}px) scale(${X})`);const u=e.querySelector('[data-role="zoom-label"]');u&&(u.textContent=`${Math.round(X*100)}%`)}function Me(i){if(i==="all")return{level:"all-projects"};const u=i.split(":");return u[0]==="project"&&u[1]?{level:"project",projectId:u[1]}:u[0]==="building"&&u[1]&&u[2]?{level:"building",projectId:u[1],buildingId:u[2]}:u[0]==="floor"&&u[1]&&u[2]&&u[3]?{level:"floor",projectId:u[1],buildingId:u[2],floorId:u[3]}:{level:"all-projects"}}function we(i){const u=x;if(u.level==="all-projects"){const c=_.trim().toLowerCase(),n=a.projects.filter(s=>!c||s.name.toLowerCase().includes(c));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${n.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${q("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${n.map(s=>{const p=a.buildings.filter(g=>g.projectId===s.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${r(s.id)}">
                  <div>
                    <div class="pacom-row-title">${r(s.name)}</div>
                    <div class="pacom-row-sub">${r(s.city??"")} · ${p} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(u.level==="project"){const c=_.trim().toLowerCase(),n=a.buildings.filter(g=>g.projectId===u.projectId&&(!c||g.name.toLowerCase().includes(c))),s=L.filter(g=>g.connectivity==="online").length,p=L.length?Math.round(s/L.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${n.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${q("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${n.map(g=>{const m=g.id===B.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${r(g.projectId)}:${r(g.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${m&&i>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${r(g.name)}</div>
                      <div class="pacom-row-sub">地上 ${g.aboveFloors} 层 · ${g.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${m?"pacom-badge--accent":"pacom-badge--neutral"}">${m?`在线 ${p}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(u.level==="building"){const c=_.trim().toLowerCase(),n=b(u.buildingId).filter(p=>!c||p.name.toLowerCase().includes(c)),s=a.buildings.find(p=>p.id===u.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${r(s?.name??"楼宇")} 楼层导览（${n.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${q("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${n.map(p=>{const g=o.scope.allowedFloorIds.includes(p.id),m=p.id===B.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${g?"":"opacity:0.6;"}" data-nav-scope="floor:${r(u.projectId)}:${r(u.buildingId)}:${r(p.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${m&&i>0?"pacom-dot--warning":p.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${r(s?.name??"")} ${r(p.name)}</div>
                      <div class="pacom-row-sub">${p.plan?"2D 平面控图就绪":"暂未上传平面图"}${m&&i>0?` · ${i} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${g&&p.plan?"pacom-badge--online":"pacom-badge--neutral"}">${g?p.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if($==="devices"){const c=ne(),n=Z(),s=Array.from(ee);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${y?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${y.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${K==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${K==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${K==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${K==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${K==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${c.length} 台${d&&s.length?` · 已选 ${s.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${q("x",14)}</button>
          </div>
          ${n.length>0&&!N?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${U==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${n.map(p=>`<button type="button" class="pacom-zone-pill ${U===p.id?"is-active":""}" data-filter-zone="${r(p.id)}">${r(p.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${N?`<div class="pacom-alert-banner">${r(N)}</div>`:c.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':c.map(p=>{const g=p.id===W&&E,m=ee.has(p.id),z=p.connectivity==="offline",k=z?"pacom-dot--critical":"pacom-dot--online",f=z?"离线":p.category==="lighting"?`${p.telemetry.dimming?.value??"--"}%`:p.category==="hvac"?`${p.telemetry.setpoint?.value??"--"}°C`:p.category==="sensor"?`${p.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${g?"is-selected":""}" data-select-device="${r(p.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${d?`<input type="checkbox" name="devCheck-${r(p.id)}" data-check-device="${r(p.id)}" ${m?"checked":""} style="margin-top:3px;" aria-label="勾选 ${r(p.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${r(p.name)}</div>
                              <div class="pacom-row-sub">${r(te(p.logicalZoneId).replace(/^7F\s*/,""))} · ${r(qe[p.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${z?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${k}"></span>${r(f)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${d&&s.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${s.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if($==="zones"){const c=Z(),n={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${c.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${q("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${c.map(s=>{const p=L.filter(f=>f.logicalZoneId===s.id),g=p.filter(f=>f.connectivity==="online").length,m=p.filter(f=>f.category==="lighting"||f.category==="hvac").length,z=U===s.id,k=n[s.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${z?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${z?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${r(z?"all":s.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${r(s.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${g}/${p.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${k.temp} · ${k.occ}</div>
                  ${m>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${r(s.id)}" data-zone-val="true" ${d?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${r(s.id)}" data-zone-val="false" ${d?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${T.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${q("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${T.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':T.map(c=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${r(c.title)}</strong>
                      <span class="pacom-badge ${c.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${c.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${r(c.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${r(c.deviceId)}">定位设备</button>
                      ${c.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${r(c.id)}" ${v?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function l(i){const u=x,c=Z().length,n=u.level==="floor"?"搜索设备或区域…":u.level==="building"?"搜索楼层…":u.level==="project"?"搜索楼宇…":"搜索园区…",s=u.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${S&&$==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${L.length}</button>
          <button type="button" class="pacom-hud-pill ${S&&$==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${c}</button>
          <button type="button" class="pacom-hud-pill ${i>0?"pacom-hud-pill--alert":""} ${S&&$==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${i}</button>
        `:u.level==="building"?`
            <button type="button" class="pacom-hud-pill ${S?"is-active":""}" data-toggle-hud="1">楼层 ${b(u.buildingId).length}</button>
            ${i>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${i}</button>`:""}
          `:u.level==="project"?`
              <button type="button" class="pacom-hud-pill ${S?"is-active":""}" data-toggle-hud="1">楼宇 ${a.buildings.filter(p=>p.projectId===u.projectId).length}</button>
              ${i>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${i}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${S?"is-active":""}" data-toggle-hud="1">园区 ${a.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${q("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${n}" value="${r(_)}" aria-label="${n}" />
          ${s}
        </div>
        ${S?`<div class="pacom-hud-sheet" data-role="hud-sheet">${we(i)}</div>`:""}
      </div>
    `}function C(i){if(F||x.level!=="building"&&x.level!=="floor")return"";const u=x.buildingId,c=x.projectId,n=b(u);return!G&&n.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${G?`<button type="button" class="pacom-elev-item ${x.level==="building"?"is-active":""}" data-nav-scope="building:${r(c)}:${r(u)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${n.map(s=>{const p=o.scope.allowedFloorIds.includes(s.id),g=x.level==="floor"&&x.floorId===s.id,m=s.id===B.floorId&&i>0;return`
              <button type="button" class="pacom-elev-item ${g?"is-active":""} ${p?"":"is-locked"}"
                data-nav-scope="floor:${r(c)}:${r(u)}:${r(s.id)}"
                title="${r(s.name)}${p?m?` · ${i} 条告警`:"":"（无权限）"}">
                ${m?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${r(s.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function ue(i,u){const c=x;if(c.level==="floor")return N?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${h==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${h==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${h==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${q("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(X*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${q("plus",14)}</button>
        </div>
      `;const n=L.length?Math.round(i/L.length*100):100,s=c.level==="building"?"418 kWh":"1,248 kWh",p=Math.round(96.2*.45+93.6*.35+n*.2),g=c.level==="building"?b(c.buildingId).find(m=>m.id===B.floorId)??b(c.buildingId)[0]:null;return`
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
          <span>今日能耗 <strong>${s}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${u}</strong></span>
        </button>
        ${c.level==="building"&&g?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${r(c.projectId)}:${r(c.buildingId)}:${r(g.id)}">进入 ${r(g.name)} 平面图 →</button>`:""}
      </div>
    `}function ye(i,u){const c=x,n=L.length?Math.round(i/L.length*100):100;if(c.level==="all-projects")return`
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
            ${a.projects.map((m,z)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${z===0?50:28}%; top:${z===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${r(m.id)}">
                  <span class="pacom-dot ${u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${r(m.name)} · 在线 ${n}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(c.level==="project"){const m=a.projects.find(k=>k.id===c.projectId)??a.projects[0],z=a.buildings.filter(k=>!m||k.projectId===m.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${r(m?.imageUrl??"./media/gzlab.jpg")}" alt="${r(m?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${z.map((k,f)=>{const oe=k.id===B.buildingId;return`
                  <button type="button" class="pacom-pin ${oe?"is-selected":""}" style="left:${f===0?56:38}%; top:${f===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${r(k.projectId)}:${r(k.id)}">
                    <span class="pacom-dot ${oe&&u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${r(k.name)} · ${oe?`在线 ${n}% · 告警 ${u}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(c.level==="building"){const m=a.buildings.find(k=>k.id===c.buildingId),z=b(c.buildingId).find(k=>k.id===B.floorId)??b(c.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${r(m?.imageUrl??"./media/building-e.webp")}" alt="${r(m?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${z?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${r(c.projectId)}:${r(c.buildingId)}:${r(z.id)}">
                    <span class="pacom-dot ${u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${r(m?.name??"")} ${r(z.name)} · 在线 ${i}/${L.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const s=a.floors.find(m=>m.id===c.floorId),p=a.buildings.find(m=>m.id===c.buildingId),g=Z();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${N?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${r(N)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${pe}px, ${de}px) scale(${X});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${r(s?.plan?.imageUrl??"./media/floors/e/07F.webp")}" alt="${r(p?.name??"楼宇")} ${r(s?.name??"7F")} 平面图" />
                  ${g.map((m,z)=>{const k=it[m.id];if(!k)return"";const f=U===m.id,oe=["23.2°C","24.6°C","22.8°C","23.9°C"],$e=["有人 74%","会议中","有人 52%","空闲"],Ie=h==="temp"?` · ${oe[z%oe.length]}`:h==="occupancy"?` · ${$e[z%$e.length]}`:"",De=h==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":h==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${f?"is-active":""}"
                          style="left:${k.left}%; top:${k.top}%; width:${k.width}%; height:${k.height}%; ${f?"":De}"
                          data-filter-zone="${r(f?"all":m.id)}"
                          title="${r(m.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${r(m.name.replace(/^7F\s*/,""))}${Ie}</span>
                        </button>`}).join("")}
                  ${L.filter(m=>m.planPoint).map(m=>{const z=T.some(Ie=>Ie.deviceId===m.id&&Ie.status==="active"),k=S&&$==="alarms",f=U!=="all"&&m.logicalZoneId!==U||k&&!z,oe=k&&z?"background:var(--pacom-status-critical);":"",$e=m.category==="gateway"?Math.min(92,m.planPoint.y*100+5.5):m.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${m.id===W&&E?"is-selected":""} ${m.connectivity==="offline"?"pacom-pin--offline":""} ${f?"pacom-pin--dimmed":""}"
                          style="left:${(m.planPoint.x*100).toFixed(2)}%; top:${$e.toFixed(2)}%; ${oe}"
                          data-pin-device="${r(m.id)}" title="${r(m.name)}">
                          <span class="pacom-dot ${z?"pacom-dot--critical":m.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${r(Oe(m))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function ge(){if(x.level!=="floor"||!E)return"";const i=L.find(f=>f.id===W);if(!i)return"";const u=i.category==="lighting",c=i.category==="hvac",n=Number(i.telemetry.dimming?.value??50),s=Number(i.telemetry.setpoint?.value??24),p=R.has(i.id),g=T.filter(f=>f.deviceId===i.id&&f.status==="active"),m=re.filter(f=>f.deviceId===i.id&&f.status!=="closed"),z=c?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:u?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],k=u?[{label:"当前开关",value:n>0?"开启":"关闭"},{label:"当前亮度",value:`${n}%`},{label:"实时功率",value:n>0?`${Math.round(n*1.4)} W`:"0 W"},{label:"运行模式",value:p?"人工覆盖":"自动策略"}]:c?[{label:"室内温度",value:`${i.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${s.toFixed(1)}°C`},{label:"运行工况",value:i.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:p?"人工覆盖":"自动策略"}]:i.category==="sensor"?[{label:"实时温度",value:`${i.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${i.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${i.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:i.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:i.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:i.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:i.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:i.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${r(i.name)}</h2>
            <div class="pacom-row-sub">${r(te(i.logicalZoneId))} · ${r(qe[i.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${i.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${i.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${q("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${P==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${P==="trend"}" data-drawer-tab="trend">趋势与告警${g.length>0?` (${g.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${P==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${P==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${k.map(f=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${f.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${r(f.value)}</strong>
                  </div>`).join("")}
            </div>

            ${c?`
                <div class="pacom-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${i.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${r(i.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${i.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${i.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${i.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${i.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${s.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${u||c?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${p&&d?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${r(i.id)}">恢复自动策略</button>`:d?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${i.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${u?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${d?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${d?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${n}%</strong>
                        <input type="range" name="ctrlDimming" min="0" max="100" step="10" value="${n}" data-ctrl-slider="lighting.dimming" ${d?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${d?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${d?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${s-.5}" ${d?"":"disabled"}>-0.5°C</button>
                        <strong>${s.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${s+.5}" ${d?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${Y?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${r(Y.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${Y.receipts.map(f=>{const oe=ot[f.status]??{text:f.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${r(f.deviceId)}</strong> · ${r(f.command)} → ${r(f.targetValue)}</div>
                              ${f.errorMessage?`<div style="color:var(--pacom-status-critical);">${r(f.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${oe.badge}">${oe.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:P==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${u?"亮度 %":c?"温度 °C":i.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${r(i.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${i.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${u?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":c?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${g.length===0&&m.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${g.map(f=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${r(f.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${r(f.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${m.map(f=>`
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
                  <span class="pacom-badge pacom-badge--accent">${r(Oe(i))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${r(te(i.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${ae?`<div class="pacom-info-banner">${r(ae)}</div>`:""}
                ${z.map(f=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${r(f.name)}">${r(f.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${r(f.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="pacom-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${q("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${r(i.id)}</code> · v${i.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${i.planPoint?`x=${i.planPoint.x.toFixed(2)}, y=${i.planPoint.y.toFixed(2)} (图 v${i.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${i.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${i.hardwareBinding?`${i.hardwareBinding.protocol.toUpperCase()} · ${i.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function ke(i,u,c){if(!O)return"";const n=Math.max(0,L.length-i),s=me==="week",p=T.filter(g=>g.status==="active").slice(0,2);return`
      <div class="pacom-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${s?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!s}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${s}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${q("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${s?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${s?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${r(c)}°C · ${i}/${L.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${u} 告警 · ${n} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,R.size)} 覆盖 · ${re.filter(g=>g.status!=="closed").length} 工单</strong></div>
        </div>
        ${p.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${p.map(g=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${r(g.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${r(g.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function D(){if(a.projects.length===0){e.innerHTML=`
        <div class="pacom-shell" style="position:relative;">
          <header class="pacom-header">
            <div class="pacom-header-top">
              <div class="pacom-title-group">
                <h1 class="pacom-title">空间总览</h1>
                ${ze({tree:a,session:o,scope:x,activeAlarmCount:0,isOpen:!1,searchKeyword:""})}
              </div>
            </div>
          </header>
          <main class="pacom-spatial-stage" style="display:flex; align-items:center; justify-content:center; padding:24px;">
            <div class="dep-empty-card" style="max-width:520px; width:100%; background:var(--pacom-surface-card);">
              <div class="dep-empty-icon">${q("building-2",20)}</div>
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
              <span class="pacom-row-sub" style="max-width:400px;">当前机构还未建立空间档案。先创建首个项目并添加楼宇、楼层与平面图，即可在此查看全景与实时设备态势。</span>
              <div class="dep-empty-steps">
                <span>1. 创建项目</span>
                <span>→</span>
                <span>2. 添加楼宇与楼层</span>
                <span>→</span>
                <span>3. 上传平面图</span>
              </div>
              <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-first-project="1" ${o.scope.canEditDeployment?"":"disabled"}>+ 创建第一个项目</button>
            </div>
          </main>
        </div>
      `,e.querySelector("[data-go-create-first-project]")?.addEventListener("click",()=>{window.location.hash="#deployment?sec=projects&new=project"});return}const i=T.filter(n=>n.status==="active").length,u=L.filter(n=>n.connectivity==="online").length,c=L.find(n=>n.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${ze({tree:a,session:o,scope:x,activeAlarmCount:i,isOpen:A,searchKeyword:J})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${N?'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${O}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${u}/${L.length} 在线 · ${r(c)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${st}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${ke(u,i,c)}

        <main class="pacom-spatial-stage">
          ${l(i)}
          ${ye(u,i)}
          ${C(i)}
          ${ue(u,i)}
          ${ge()}
        </main>
      </div>
    `,Ne()}function Ne(){Ve(e,{onToggle:()=>{A=!A,A&&(O=!1,S=!1),D(),A&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:n=>{J=n,D();const s=e.querySelector("[data-global-space-search]");s&&(s.focus(),s.setSelectionRange(n.length,n.length))},onPick:n=>{A=!1,H(n)}}),e.querySelectorAll("[data-nav-scope]").forEach(n=>{n.addEventListener("click",s=>{s.stopPropagation(),n.dataset.navScope&&H(Me(n.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(n=>{n.addEventListener("click",s=>{s.stopPropagation();const p=n.dataset.hudTab;S&&$===p?S=!1:($=p,S=!0,A=!1,O=!1),D()})}),e.querySelectorAll("[data-toggle-hud]").forEach(n=>{n.addEventListener("click",s=>{s.stopPropagation(),S=!S,S&&(A=!1,O=!1),D()})}),e.querySelectorAll("[data-close-hud]").forEach(n=>{n.addEventListener("click",s=>{s.stopPropagation(),S=!1,D()})});const i=e.querySelector('[data-role="search"]');i?.addEventListener("focus",()=>{S||(S=!0,A=!1,O=!1,be())}),i?.addEventListener("input",n=>{_=n.currentTarget.value,S=!0,be()}),e.querySelector('[data-role="category"]')?.addEventListener("change",n=>{K=n.currentTarget.value,D()}),e.querySelectorAll("[data-filter-zone]").forEach(n=>{n.addEventListener("click",s=>{s.stopPropagation(),U=n.dataset.filterZone??"all",D()})}),e.querySelectorAll("[data-select-device]").forEach(n=>{n.addEventListener("click",s=>{s.target.tagName!=="INPUT"&&(W=n.dataset.selectDevice??null,E=!0,D())})}),e.querySelectorAll("[data-check-device]").forEach(n=>{n.addEventListener("change",()=>{const s=n.dataset.checkDevice;s&&(n.checked?ee.add(s):ee.delete(s),D())})}),e.querySelectorAll("[data-pin-device]").forEach(n=>{n.addEventListener("click",s=>{s.stopPropagation(),W=n.dataset.pinDevice??null,E=!0,A=!1,O=!1,D()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{E=!1,D()}),e.querySelectorAll("[data-drawer-tab]").forEach(n=>{n.addEventListener("click",()=>{P=n.dataset.drawerTab??"control",ae="",D()})}),e.querySelectorAll("[data-drawer-doc]").forEach(n=>{n.addEventListener("click",()=>{ae=`已调阅「${n.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,D()})}),e.querySelectorAll("[data-briefing-period]").forEach(n=>{n.addEventListener("click",()=>{me=n.dataset.briefingPeriod??"today",D()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.goAlarmId??"";window.location.hash=s?`#alarms?alarm=${encodeURIComponent(s)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.goWoId??"";window.location.hash=s?`#alarms?wo=${encodeURIComponent(s)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",n=>{const s=n.currentTarget.dataset.releaseOverride;s&&(R.delete(s),D())}),e.querySelectorAll("[data-zone-power]").forEach(n=>{n.addEventListener("click",s=>{s.stopPropagation();const p=n.dataset.zonePower,g=n.dataset.zoneVal==="true";if(!p)return;const m=L.filter(k=>k.logicalZoneId===p&&k.category==="lighting").map(k=>k.id),z=L.filter(k=>k.logicalZoneId===p&&k.category==="hvac").map(k=>k.id);m.length?se(m,"lighting.power",g):z.length&&se(z,"hvac.power",g)})}),e.querySelectorAll("[data-locate-device]").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.locateDevice;s&&(W=s,E=!0,S=!1,D())})}),e.querySelectorAll("[data-go-alarms]").forEach(n=>{n.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(s)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(s)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(n=>{n.addEventListener("click",s=>{s.stopPropagation(),O=!O,O&&(A=!1,S=!1),D()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const n=L.filter(k=>k.connectivity==="online").length,s=T.filter(k=>k.status==="active").length,p=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${n}/${L.length}（离线 ${L.length-n} 台）`,`待处理告警：${s} 条`,`人工覆盖中：${R.size} 台`].join(`
`),g=new Blob([p],{type:"text/plain;charset=utf-8;"}),m=URL.createObjectURL(g),z=document.createElement("a");z.href=m,z.download="pacom-daily-briefing.txt",z.click(),URL.revokeObjectURL(m)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(n=>{n.addEventListener("click",()=>{if(!W||!n.dataset.ctrlCmd)return;const s=n.dataset.ctrlVal??"",p=s==="true"?!0:s==="false"?!1:Number(s);se([W],n.dataset.ctrlCmd,p)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",n=>{const s=n.currentTarget;!W||!s.dataset.ctrlSlider||se([W],s.dataset.ctrlSlider,Number(s.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(n=>{n.addEventListener("click",()=>{const s=Array.from(ee),p=n.dataset.batchVal??"",g=p==="true"?!0:p==="false"?!1:p;se(s,n.dataset.batchCmd,g)})}),e.querySelectorAll("[data-ack-alarm]").forEach(n=>{n.addEventListener("click",async()=>{!n.dataset.ackAlarm||x.level!=="floor"||!v||(await t.acknowledgeAlarm(n.dataset.ackAlarm,"首页快速确认"),T=await t.listAlarms(x.floorId),D())})}),e.querySelectorAll("[data-canvas-layer]").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.canvasLayer;s&&(h=s,D())})}),e.querySelectorAll("[data-zoom]").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.zoom;s==="in"?X=Math.min(2.6,Number((X+.2).toFixed(2))):s==="out"?X=Math.max(.6,Number((X-.2).toFixed(2))):(X=1,pe=0,de=0),ve()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",n=>{n.preventDefault();const s=x;if(s.level!=="building"&&s.level!=="floor")return;const p=b(s.buildingId),g=[...G?[{level:"building",projectId:s.projectId,buildingId:s.buildingId}]:[],...p.map(k=>({level:"floor",projectId:s.projectId,buildingId:s.buildingId,floorId:k.id}))],m=g.findIndex(k=>k.level==="building"?s.level==="building":k.level==="floor"&&s.level==="floor"&&k.floorId===s.floorId);if(m<0)return;const z=Math.max(0,Math.min(g.length-1,m+(n.deltaY>0?1:-1)));z!==m&&g[z]&&H(g[z])},{passive:!1});const c=e.querySelector('[data-role="canvas-stage"]');if(c&&!N){let n=!1,s=!1,p=0,g=0,m=0,z=0;c.addEventListener("pointerdown",f=>{f.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(n=!0,s=!1,p=f.clientX,g=f.clientY,m=pe,z=de,c.classList.add("is-panning"),c.setPointerCapture?.(f.pointerId))}),c.addEventListener("pointermove",f=>{if(!n)return;const oe=f.clientX-p,$e=f.clientY-g;(Math.abs(oe)>3||Math.abs($e)>3)&&(s=!0),pe=m+oe,de=z+$e,ve()});const k=()=>{n&&(n=!1,c.classList.remove("is-panning"),!s&&(S||A||O)&&(S=!1,A=!1,O=!1,D()))};c.addEventListener("pointerup",k),c.addEventListener("pointercancel",k),c.addEventListener("wheel",f=>{f.preventDefault();const oe=f.deltaY<0?.12:-.12;X=Math.max(.6,Math.min(2.6,Number((X+oe).toFixed(2)))),ve()},{passive:!1}),c.addEventListener("dblclick",f=>{f.target?.closest("button")||(X=1,pe=0,de=0,ve())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",n=>{n.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .pacom-briefing-pop")||(S||A||O)&&(S=!1,A=!1,O=!1,D())})}e.addEventListener("keydown",i=>{i.key==="Escape"&&(A||O||S||E)&&(A=!1,O=!1,S=!1,E=!1,D())}),await H(x,!0)}const xt=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,wt='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',kt='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',lt='<svg class="ic ws-info-icon" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M13 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/><path fill-rule="evenodd" d="M21.75 12a9.75 9.75 0 1 1-19.5 0 9.75 9.75 0 0 1 19.5 0Zm-1.5 0a8.25 8.25 0 1 0-16.5 0 8.25 8.25 0 0 0 16.5 0Zm-9 4.5V11a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0Z"/></svg>',It='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',jt='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',ct='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',rt='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',dt='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',St='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/></svg>',Et='<svg class="au-sel-caret" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',Lt='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',pt=q("x",16),ut=q("check",14),mt="https://docs.pacom.cn",gt="北京市:北京市;天津市:天津市;河北省:石家庄市,唐山市,秦皇岛市,邯郸市,邢台市,保定市,张家口市,承德市,沧州市,廊坊市,衡水市;山西省:太原市,大同市,阳泉市,长治市,晋城市,朔州市,晋中市,运城市,忻州市,临汾市,吕梁市;内蒙古自治区:呼和浩特市,包头市,乌海市,赤峰市,通辽市,鄂尔多斯市,呼伦贝尔市,巴彦淖尔市,乌兰察布市,兴安盟,锡林郭勒盟,阿拉善盟;辽宁省:沈阳市,大连市,鞍山市,抚顺市,本溪市,丹东市,锦州市,营口市,阜新市,辽阳市,盘锦市,铁岭市,朝阳市,葫芦岛市;吉林省:长春市,吉林市,四平市,辽源市,通化市,白山市,松原市,白城市,延边朝鲜族自治州;黑龙江省:哈尔滨市,齐齐哈尔市,鸡西市,鹤岗市,双鸭山市,大庆市,伊春市,佳木斯市,七台河市,牡丹江市,黑河市,绥化市,大兴安岭地区;上海市:上海市;江苏省:南京市,无锡市,徐州市,常州市,苏州市,南通市,连云港市,淮安市,盐城市,扬州市,镇江市,泰州市,宿迁市;浙江省:杭州市,宁波市,温州市,嘉兴市,湖州市,绍兴市,金华市,衢州市,舟山市,台州市,丽水市;安徽省:合肥市,芜湖市,蚌埠市,淮南市,马鞍山市,淮北市,铜陵市,安庆市,黄山市,滁州市,阜阳市,宿州市,六安市,亳州市,池州市,宣城市;福建省:福州市,厦门市,莆田市,三明市,泉州市,漳州市,南平市,龙岩市,宁德市;江西省:南昌市,景德镇市,萍乡市,九江市,新余市,鹰潭市,赣州市,吉安市,宜春市,抚州市,上饶市;山东省:济南市,青岛市,淄博市,枣庄市,东营市,烟台市,潍坊市,济宁市,泰安市,威海市,日照市,临沂市,德州市,聊城市,滨州市,菏泽市;河南省:郑州市,开封市,洛阳市,平顶山市,安阳市,鹤壁市,新乡市,焦作市,濮阳市,许昌市,漯河市,三门峡市,南阳市,商丘市,信阳市,周口市,驻马店市,济源市;湖北省:武汉市,黄石市,十堰市,宜昌市,襄阳市,鄂州市,荆门市,孝感市,荆州市,黄冈市,咸宁市,随州市,恩施土家族苗族自治州,仙桃市,潜江市,天门市,神农架林区;湖南省:长沙市,株洲市,湘潭市,衡阳市,邵阳市,岳阳市,常德市,张家界市,益阳市,郴州市,永州市,怀化市,娄底市,湘西土家族苗族自治州;广东省:广州市,韶关市,深圳市,珠海市,汕头市,佛山市,江门市,湛江市,茂名市,肇庆市,惠州市,梅州市,汕尾市,河源市,阳江市,清远市,东莞市,中山市,潮州市,揭阳市,云浮市;广西壮族自治区:南宁市,柳州市,桂林市,梧州市,北海市,防城港市,钦州市,贵港市,玉林市,百色市,贺州市,河池市,来宾市,崇左市;海南省:海口市,三亚市,三沙市,儋州市,五指山市,琼海市,文昌市,万宁市,东方市,定安县,屯昌县,澄迈县,临高县,白沙黎族自治县,昌江黎族自治县,乐东黎族自治县,陵水黎族自治县,保亭黎族苗族自治县,琼中黎族苗族自治县;重庆市:重庆市;四川省:成都市,自贡市,攀枝花市,泸州市,德阳市,绵阳市,广元市,遂宁市,内江市,乐山市,南充市,眉山市,宜宾市,广安市,达州市,雅安市,巴中市,资阳市,阿坝藏族羌族自治州,甘孜藏族自治州,凉山彝族自治州;贵州省:贵阳市,六盘水市,遵义市,安顺市,毕节市,铜仁市,黔西南布依族苗族自治州,黔东南苗族侗族自治州,黔南布依族苗族自治州;云南省:昆明市,曲靖市,玉溪市,保山市,昭通市,丽江市,普洱市,临沧市,楚雄彝族自治州,红河哈尼族彝族自治州,文山壮族苗族自治州,西双版纳傣族自治州,大理白族自治州,德宏傣族景颇族自治州,怒江傈僳族自治州,迪庆藏族自治州;西藏自治区:拉萨市,日喀则市,昌都市,林芝市,山南市,那曲市,阿里地区;陕西省:西安市,铜川市,宝鸡市,咸阳市,渭南市,延安市,汉中市,榆林市,安康市,商洛市;甘肃省:兰州市,嘉峪关市,金昌市,白银市,天水市,武威市,张掖市,平凉市,酒泉市,庆阳市,定西市,陇南市,临夏回族自治州,甘南藏族自治州;青海省:西宁市,海东市,海北藏族自治州,黄南藏族自治州,海南藏族自治州,果洛藏族自治州,玉树藏族自治州,海西蒙古族自治州;宁夏回族自治区:银川市,石嘴山市,吴忠市,固原市,中卫市;新疆维吾尔自治区:乌鲁木齐市,克拉玛依市,吐鲁番市,哈密市,昌吉回族自治州,博尔塔拉蒙古自治州,巴音郭楞蒙古自治州,阿克苏地区,克孜勒苏柯尔克孜自治州,喀什地区,和田地区,伊犁哈萨克自治州,塔城地区,阿勒泰地区,石河子市,阿拉尔市,图木舒克市,五家渠市,北屯市,铁门关市,双河市,可克达拉市,昆玉市,胡杨河市,新星市,白杨市;台湾省:台北市,新北市,桃园市,台中市,台南市,高雄市,基隆市,新竹市,嘉义市,新竹县,苗栗县,彰化县,南投县,云林县,嘉义县,屏东县,宜兰县,花莲县,台东县,澎湖县;香港特别行政区:香港特别行政区;澳门特别行政区:澳门特别行政区",ht=gt.split(";").map(e=>{const[t="",o=""]=e.split(":");return[t,o.split(",")]});function Mt(e){return ht.find(([t])=>t===e)?.[1]??[]}const vt=[["+852",8],["+853",8],["+65",8],["+886",9],["+44",10]];function ft(e){return Array.from(String(e??"")).length}function xe(e){return String(e||"").replace(/[\uFF01-\uFF5E]/g,t=>String.fromCharCode(t.charCodeAt(0)-65248)).replace(/\u3000/g," ").trim()}function Te(e){const t=xe(e);if(t.length>254||/\s/.test(t))return!1;const o=t.split("@");if(o.length!==2)return!1;const[a,d]=o;if(!a||!d||a.length>64||!d.includes("."))return!1;const v=/^[\p{L}\p{N}!#$%&'*+/=?^_`{|}~-]+(?:\.[\p{L}\p{N}!#$%&'*+/=?^_`{|}~-]+)*$/u.test(a),y=d.split(".").every(M=>/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(M));return v&&y}function Fe(e){const t=xe(e);if(!t)return"";if(t.includes("@"))return Te(t)?"email":"bad";const o=t.replace(/[\s\-()]/g,"");if(/^1[3-9]\d{9}$/.test(o))return"cn";if(!/^\+[1-9]\d{7,14}$/.test(o)||o.startsWith("+1")&&!/^\+1\d{10}$/.test(o)||o.startsWith("+86")&&!/^\+861[3-9]\d{9}$/.test(o))return"bad";const a=vt.find(([d])=>o.startsWith(d));return a&&o.length-a[0].length!==a[1]?"bad":"phone"}function Ct(e){const t=xe(e);if(!t)return"请输入有效的手机号码";const o=Fe(t);if(o==="cn"||o==="phone")return"";const a=t.replace(/[\s\-()]/g,"");return/^\d{8,10}$/.test(a)?"非中国大陆号码请包含国家或地区区号，如 +852 9123 4567。":"请输入有效的手机号码"}function At(e){const t=xe(e);if(!t)return"请输入电子邮箱或手机号码";const o=Fe(t);if(o==="email"||o==="cn"||o==="phone")return"";if(t.includes("@"))return"请输入有效的电子邮箱";const a=t.replace(/[\s\-()]/g,"");return/^\d{8,10}$/.test(a)?"非中国大陆号码请包含国家或地区区号，如 +852 9123 4567。":"请输入有效的电子邮箱或手机号码"}function zt(e){const t=xe(e);if(!t)return"";if(t.includes("@"))return Te(t)?t.replace(/^([^@])[^@]*(@.+)$/,"$1•••$2"):"••••";const o=t.replace(/[\s\-()]/g,""),a=/^(?:(\+86|0086))?(1\d{10})$/.exec(o);return a?`${a[1]?"+86 ":""}${a[2].slice(0,3)} •••• ${a[2].slice(-4)}`:Fe(t)==="phone"?`${o.slice(0,4)} •••• ${o.slice(-4)}`:"••••"}function Ft(e){return e.replace(/\D/g,"").slice(0,9).replace(/(\d{3})(?=\d)/g,"$1 ")}function Pt(e){const t=xe(e),o=t.replace(/[\s-]/g,"");return/^1[3-9]\d{9}$/.test(o)?`${o.slice(0,3)} ${o.slice(3,7)} ${o.slice(7)}`:t}const Ot=["至少 8 个字符","至少一个字母（a-z 或 A-Z）","至少一个数字（0-9）","至少一个符号，如 ! @ # $ %"],bt="!@#$%^&*()_-+={}[]|\\:;\"'<>,.?/~`";function qt(e){if(!e)return"请设置密码";const t=ft(e);if(t<8)return"密码至少需要 8 个字符";if(t>64)return"密码不能超过 64 个字符";const o=e.normalize("NFKC"),a=/[A-Za-z]/.test(o),d=/[0-9]/.test(o),v=Array.from(e).some(y=>bt.includes(y));return!a||!d||!v?"密码需要包含字母、数字和英文符号":""}function Bt(){return`
    <footer class="au-foot" aria-label="版权、法律与联系信息">
      <span class="au-copyright">© 2026 广州天环智能技术有限公司</span>
      <div class="au-foot-links">
        <a href="${mt}" target="_blank" rel="noopener noreferrer">隐私和法律</a>
        <button type="button" data-act="open-contact">联系我们</button>
      </div>
    </footer>
  `}function Rt(e){return`
    <div class="au-account-scrim" data-role="modal-scrim">
      <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
        <div class="dh">
          <h2 id="au-dlg-title">联系我们</h2>
          <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${pt}</button>
        </div>
        <div class="db">
          <p class="au-dlead">如需账户协助、机构开通或现场部署技术支持，请通过官方支持邮箱联系 PACOM 团队。</p>
          <div class="au-contact-card">
            <div class="au-contact-main">
              <span class="au-contact-icon" aria-hidden="true">${rt}</span>
              <div class="au-contact-meta">
                <span class="au-contact-label">支持邮箱</span>
                <span class="au-contact-value">support@pacom.cn</span>
              </div>
            </div>
            <button type="button" class="au-copy-btn ${e?"is-copied":""}" data-act="copy-support" aria-label="复制支持邮箱">
              ${e?`${ut}<span>已复制</span>`:`${ct}<span>复制</span>`}
            </button>
          </div>
          <p class="au-contact-note">工作日 09:00–18:00 响应</p>
        </div>
        <div class="df">
          <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
          <a class="au-dlg-btn au-dlg-btn--primary" href="mailto:support@pacom.cn">${dt}<span>发送邮件</span></a>
        </div>
      </section>
    </div>
  `}function Vt(e,t,o){const a=o.length>1?o.map(d=>`<span class="au-info-l au-info-li">${w(d)}</span>`).join(""):w(o[0]??"");return`
    <span class="au-field-info-wrap">
      <button type="button" class="au-field-info-trigger" data-info-trigger="${w(e)}" aria-label="${w(t)}" aria-expanded="false" aria-haspopup="dialog" aria-controls="${w(e)}">
        ${lt}
      </button>
      <span id="${w(e)}" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="${w(t)}" hidden>
        <span class="ws-info-text">${a}</span>
      </span>
    </span>
  `}function Tt(){let e=null,t=null;function o(){if(!e||!t||t.hidden)return;const I=e.getBoundingClientRect(),j=t.getBoundingClientRect(),V=12,G=4;let F="top",x=I.top-j.height-G;x<V&&(F="bottom",x=I.bottom+G);let $=I.left+I.width/2-j.width/2;$=Math.max(V,Math.min($,window.innerWidth-j.width-V)),t.dataset.side=F,t.style.top=`${Math.round(x)}px`,t.style.left=`${Math.round($)}px`}function a(I=!1){const j=e;e&&e.setAttribute("aria-expanded","false"),t&&(t.hidden=!0),e=null,t=null,I&&j&&document.contains(j)&&j.focus({preventScroll:!0})}function d(I){const j=I.dataset.infoTrigger;if(!j)return;const V=document.getElementById(j);if(V){if(e===I&&!V.hidden){a(!1);return}a(!1),e=I,t=V,I.setAttribute("aria-expanded","true"),V.hidden=!1,o()}}function v(I){if(!t||t.hidden)return;const j=I.target;j&&(t.contains(j)||e?.contains(j))||a(!1)}function y(I){I.key==="Escape"&&t&&!t.hidden&&(I.preventDefault(),I.stopPropagation(),a(!0))}function M(){o()}return document.addEventListener("pointerdown",v,!0),document.addEventListener("keydown",y,!0),window.addEventListener("resize",M),window.addEventListener("scroll",M,!0),{bind(I){I.querySelectorAll("[data-info-trigger]").forEach(j=>{j.dataset.infoBound!=="1"&&(j.dataset.infoBound="1",j.addEventListener("click",V=>{V.preventDefault(),d(j)}))})},close:a,isOpen:()=>!!(t&&!t.hidden),destroy(){a(!1),document.removeEventListener("pointerdown",v,!0),document.removeEventListener("keydown",y,!0),window.removeEventListener("resize",M),window.removeEventListener("scroll",M,!0)}}}function Nt(e){e.querySelectorAll("[data-space-resize]").forEach(t=>{t.dataset.resizeBound!=="1"&&(t.dataset.resizeBound="1",t.addEventListener("pointerdown",o=>{if(t.disabled)return;const a=t.dataset.spaceResize,d=a?document.getElementById(a):null;if(!(d instanceof HTMLTextAreaElement)||d.disabled)return;o.preventDefault();const v=o.clientY,y=d.getBoundingClientRect().height,M=parseFloat(getComputedStyle(d).minHeight)||72;try{t.setPointerCapture(o.pointerId)}catch{}const I=V=>{d.style.height=`${Math.max(M,Math.round(y+V.clientY-v))}px`},j=()=>{t.removeEventListener("pointermove",I),t.removeEventListener("pointerup",j),t.removeEventListener("pointercancel",j)};t.addEventListener("pointermove",I),t.addEventListener("pointerup",j),t.addEventListener("pointercancel",j)}),t.addEventListener("keydown",o=>{if(t.disabled||o.key!=="ArrowUp"&&o.key!=="ArrowDown")return;const a=t.dataset.spaceResize,d=a?document.getElementById(a):null;if(!(d instanceof HTMLTextAreaElement)||d.disabled)return;o.preventDefault();const v=parseFloat(getComputedStyle(d).minHeight)||72,y=Math.max(v,Math.round(d.getBoundingClientRect().height+(o.key==="ArrowDown"?16:-16)));d.style.height=`${y}px`}))})}function Dt(e){const t=e.querySelector(".au-split"),o=e.querySelector(".au-left");if(!t||!o)return()=>{};const a=()=>{const y=o.scrollHeight-o.clientHeight-o.scrollTop;t.classList.toggle("has-scroll-more",y>6)};o.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a);const d=typeof ResizeObserver<"u"?new ResizeObserver(a):null;if(d){d.observe(o);const y=o.querySelector(".au-center");y&&d.observe(y)}a();const v=window.requestAnimationFrame(a);return()=>{window.cancelAnimationFrame(v),o.removeEventListener("scroll",a),window.removeEventListener("resize",a),d?.disconnect()}}export{It as A,St as B,ut as C,mt as D,B as E,At as F,Mt as G,Et as H,jt as I,Nt as J,Lt as L,ht as O,xt as P,ze as a,Ve as b,$t as c,Tt as d,w as e,Bt as f,Re as g,Dt as h,wt as i,ct as j,zt as k,kt as l,yt as m,xe as n,pt as o,Rt as p,Ft as q,q as r,Ae as s,Pt as t,Vt as u,Ct as v,Te as w,ft as x,qt as y,Ot as z};
