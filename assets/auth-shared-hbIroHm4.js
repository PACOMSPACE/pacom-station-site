(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&a(g)}).observe(document,{childList:!0,subtree:!0});function n(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function a(l){if(l.ep)return;l.ep=!0;const f=n(l);fetch(l.href,f)}})();const q={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},We={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"layout-dashboard":'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',waypoints:'<circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',"key-round":'<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',"file-text":'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',"more-horizontal":'<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',"trash-2":'<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',"clipboard-check":'<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>'};function Ze(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function P(e,t=16,n=""){const a=Ze(t);return`<svg${n?` class="${n}"`:""} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${We[e]}</svg>`}const Te="pacom.web.spaceScope.v1";function Ke(){try{if(typeof sessionStorage<"u"){const e=sessionStorage.getItem(Te);if(e){const t=JSON.parse(e);if(t&&typeof t=="object"&&"level"in t)return t}}}catch{}return{level:"floor",projectId:q.projectId,buildingId:q.buildingId,floorId:q.floorId}}let Me=Ke();function Ne(){return Me}function ze(e){Me=e;try{typeof sessionStorage<"u"&&sessionStorage.setItem(Te,JSON.stringify(e))}catch{}return Me}function J(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Oe(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面"))return 999;const n=t.match(/(-?\d+)/);if(!n)return 0;const a=Number(n[1]);return t.startsWith("B")?-Math.abs(a):a}function Ge(e){if(e==="all")return{level:"all-projects"};const t=e.split(":");return t[0]==="project"&&t[1]?{level:"project",projectId:t[1]}:t[0]==="building"&&t[1]&&t[2]?{level:"building",projectId:t[1],buildingId:t[2]}:t[0]==="floor"&&t[1]&&t[2]&&t[3]?{level:"floor",projectId:t[1],buildingId:t[2],floorId:t[3]}:{level:"project",projectId:q.projectId}}function Ye(e,t,n){return n==="project"?e.level==="all-projects"?{level:"project",projectId:t.projects[0]?.id??q.projectId}:{level:"project",projectId:e.projectId}:n==="building"&&e.level==="floor"?{level:"building",projectId:e.projectId,buildingId:e.buildingId}:e}function Fe(e){const{tree:t,session:n,isOpen:a,searchKeyword:l}=e;if(t.projects.length===0)return'<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap"><span class="pacom-path-trigger is-static"><span class="pacom-path-muted">暂无项目</span></span></div>';const f=e.maxGranularity??"floor",g=e.activeAlarmCount??0,L=n.scope.allowedZoneIds?.length?n.scope.allowedZoneIds:null,O=h=>n.scope.allowedFloorIds.includes(h)||n.scope.canEditDeployment,B=t.floors.filter(h=>O(h.id)),N=L||t.projects.length<=1&&t.buildings.length<=1&&B.length<=1?"floors-only":t.projects.length>1?"multi-project":t.buildings.length>1?"single-project-multi-building":"single-building",F=N==="multi-project"&&f!=="project",k=N==="multi-project"||N==="single-project-multi-building",R=N!=="floors-only"&&f!=="project",y=f==="project"&&t.projects.length<=1||N==="floors-only"&&B.length<=1,I=Ye(e.scope??Me,t,f),$=I.level==="all-projects"?null:t.projects.find(h=>h.id===I.projectId)??t.projects[0],M=I.level==="building"||I.level==="floor"?t.buildings.find(h=>h.id===I.buildingId):null,ue=I.level==="floor"?t.floors.find(h=>h.id===I.floorId):null,D=[];if(I.level==="all-projects")D.push(`全部项目（${t.projects.length}）`);else if(I.level==="project")D.push(J($?.name??"广实2号园"));else if(I.level==="building")$&&D.push(`<span class="pacom-path-muted">${J($.name)}</span>`),D.push(J(M?.name??"E栋"));else{$&&N!=="floors-only"&&D.push(`<span class="pacom-path-muted">${J($.name)}</span>`),M&&R&&D.push(`<span class="pacom-path-muted">${J(M.name)}</span>`);const h=!R&&M?`${M.name} ${ue?.name??"7F"}`:ue?.name??"7F";D.push(J(h))}const K='<span class="pacom-path-muted" style="margin:0 3px;">｜</span>',Q=y?`<span class="pacom-path-trigger is-static">${D.join(K)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${a}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${D.join(K)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${P("chevron-down",12)}</span>
      </button>`;if(!a||y)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${Q}</div>`;const re=l.trim().toLowerCase(),ie=I.level==="all-projects"?t.projects[0]?.id??q.projectId:I.projectId,le=I.level==="building"||I.level==="floor"?I.buildingId:t.buildings.find(h=>h.projectId===ie)?.id??q.buildingId,E=t.projects.filter(h=>!re||h.name.toLowerCase().includes(re)),A=t.buildings.filter(h=>h.projectId===ie&&(!re||h.name.toLowerCase().includes(re))),ee=[...t.floors.filter(h=>h.buildingId===le)].sort((h,V)=>Oe(V.name)-Oe(h.name)).filter(h=>!re||h.name.toLowerCase().includes(re)),ae=f==="project"||t.projects.length>1,H=f!=="project"&&k,de=f==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${Q}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${P("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${J(l)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${P("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${ae?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${F?`<button type="button" class="pacom-space-pop-item ${I.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${t.projects.length}）</span>
                        ${I.level==="all-projects"?P("check",14):""}
                      </button>`:""}
                ${E.map(h=>{const V=I.level==="project"&&I.projectId===h.id;return`<button type="button" class="pacom-space-pop-item ${V?"is-active":""}" data-global-space-pick="project:${J(h.id)}">
                      <span>${J(h.name)}</span>
                      ${V?P("check",14):P("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${H?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${J(t.projects.find(h=>h.id===ie)?.name??"园区")} ｜ 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${I.level==="project"?"is-active":""}" data-global-space-pick="project:${J(ie)}">
                  <span>全园区</span>
                  ${I.level==="project"?P("check",14):""}
                </button>
                ${A.map(h=>{const V=I.level==="building"&&I.buildingId===h.id;return`<button type="button" class="pacom-space-pop-item ${V?"is-active":""}" data-global-space-pick="building:${J(h.projectId)}:${J(h.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${J(h.name)}</span>
                        ${h.id===q.buildingId&&g>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${V?P("check",14):P("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${de?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${J(t.buildings.find(h=>h.id===le)?.name??"楼宇")} ｜ 楼层</div>
                ${R?`<button type="button" class="pacom-space-pop-item ${I.level==="building"&&I.buildingId===le?"is-active":""}" data-global-space-pick="building:${J(ie)}:${J(le)}">
                        <span>整栋</span>
                        ${I.level==="building"&&I.buildingId===le?P("check",14):""}
                      </button>`:""}
                ${ee.map(h=>{const V=O(h.id),G=I.level==="floor"&&I.floorId===h.id,S=h.id===q.floorId&&g>0;return`<button type="button" class="pacom-space-pop-item ${G?"is-active":""}" style="${V?"":"opacity:0.5;"}" data-global-space-pick="floor:${J(ie)}:${J(le)}:${J(h.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${J(h.name)}</span>
                        ${S?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${G?P("check",14):V?h.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function De(e,t){e.querySelectorAll("[data-global-space-toggle]").forEach(a=>{a.addEventListener("click",l=>{l.stopPropagation(),t.onToggle()})}),e.querySelector("[data-global-space-search]")?.addEventListener("input",a=>{t.onSearch(a.currentTarget.value)}),e.querySelectorAll("[data-global-space-pick]").forEach(a=>{a.addEventListener("click",l=>{l.stopPropagation();const f=a.dataset.globalSpacePick;if(!f)return;const g=ze(Ge(f));t.onPick(g)})})}function w(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const Xe=P("chevron-down",12),Se=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],Ee=[{id:q.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:q.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:q.projectId,label:"广实2号园（全园区）",factor:18.2}],Je={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},Qe=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],be=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function Ae(e,t=""){const n=(e??"").trim().toLowerCase();return!(!n||n.includes("%")||n.includes("°c")||n.includes("ppm")||n.includes("ms")||n.includes("m²")||n.includes("/m2")||n.includes("db")||n.includes("lx")||t.includes("率")||t.includes("均")||t.includes("强度")||t.includes("延迟"))}function Le(e,t){const n=e*t;return Math.abs(n)>=10?Math.round(n):Math.round(n*10)/10}function et(e,t){const n=Number(String(e).replaceAll(",","")),a=t??"";return Number.isFinite(n)?a==="kWh"&&Math.abs(n)>=1e4?{value:(n/1e3).toFixed(1),unit:"MWh",title:`精确值：${n.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(n)?n.toLocaleString("en-US"):n.toLocaleString("en-US",{maximumFractionDigits:1}),unit:a,title:`${n.toLocaleString("en-US")} ${a}`.trim()}:{value:e,unit:a,title:`${e} ${a}`.trim()}}function tt(e,t){if(t===1)return e;const n=Ae(e.unit);return{...e,kpis:e.kpis.map(a=>{const l=Number(String(a.value).replaceAll(",",""));return!Number.isFinite(l)||!Ae(a.unit,a.label)?a:{...a,value:String(Le(l,t))}}),series:n?e.series.map(a=>({...a,value:Le(a.value,t),...typeof a.baseline=="number"?{baseline:Le(a.baseline,t)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(a=>Ae(a.unit)?{...a,value:Le(a.value,t)}:a)}}function at(e,t){const n=Math.max(...e.series.map(k=>Math.max(k.value,k.baseline??0)),1),a=46,l=34,f=36,g=Math.max(e.series.length*(a+l)+f*2,620),L=228,O=184,B=132,N=[0,.25,.5,.75,1].map(k=>{const R=Math.round(O-k*B);return`<line x1="${f-8}" y1="${R}" x2="${g-18}" y2="${R}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${k===0?"0":"3 3"}" />`}).join(""),F=e.series.map((k,R)=>{const y=f+R*(a+l),I=Math.max(8,Math.round(k.value/n*B)),$=O-I,M=typeof k.baseline=="number"&&k.value>k.baseline*1.08,ue=M?`<rect x="${y-8}" y="34" width="${a+16}" height="${O-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",D=typeof k.baseline=="number"?`<line x1="${y-5}" y1="${Math.round(O-k.baseline/n*B)}" x2="${y+a+5}" y2="${Math.round(O-k.baseline/n*B)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",K=t&&(M||R===1)?`<g><title>${M?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${y+a/2}" cy="18" r="7" fill="${M?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${y+a/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="500" fill="#fff">${M?"!":"S"}</text></g>`:"",Q=k.value>=1e4?`${(k.value/1e3).toFixed(1)}k`:k.value.toLocaleString("en-US");return`
        ${ue}
        ${D}
        ${K}
        <g>
          <title>${w(k.label)}：实测 ${k.value.toLocaleString("en-US")} ${w(e.unit)}${k.baseline!==void 0?` / 基线 ${k.baseline.toLocaleString("en-US")} ${w(e.unit)}`:""}</title>
          <rect x="${y}" y="${$}" width="${a}" height="${I}" rx="7" fill="${M?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${y+a/2}" y="${$-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${Q}</text>
        <text x="${y+a/2}" y="${O+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${w(k.label)}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${g} ${L}" style="width:100%; height:232px; display:block;" role="img" aria-label="${w(e.category)} 趋势图">
      ${N}
      ${F}
    </svg>
  `}function nt(e,t){const n=e.connectivity==="offline";if(e.category==="hvac"){const a=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:n?[23.8,24,24.1,null,null,null,null,null]:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a],offline:n,colorIdx:t},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:n?[24,24,24,null,null,null,null,null]:[a,a,a,a,a,a,a,a],offline:n,colorIdx:t+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:n?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:n,colorIdx:t+2}]}if(e.category==="lighting"){const a=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)],offline:n,colorIdx:t},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:n,colorIdx:t+1}]}if(e.category==="sensor"){const a=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a],offline:n,colorIdx:t},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:n,colorIdx:t+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:n,colorIdx:t+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:n,colorIdx:t}]}function ot(e){const t=e.points.filter(L=>typeof L=="number");if(!t.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const n=Math.min(...t),a=Math.max(...t),l=t.reduce((L,O)=>L+O,0)/t.length,f=e.points[e.points.length-1],g=L=>Math.abs(L)<100&&!Number.isInteger(L)?L.toFixed(1):Math.round(L).toString();return{min:g(n),avg:l.toFixed(Math.abs(l)<100?1:0),max:g(a),curr:typeof f=="number"?g(f):"离线"}}function st(e,t,n){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="pacom-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const l=(g,L)=>{const $=[];for(const E of g)for(const A of E.points)typeof A=="number"&&$.push(A);const M=$.length?Math.min(...$)*.92:0,ue=$.length?Math.max(...$)*1.08:100,D=Math.max(ue-M,1),K=[0,.5,1].map(E=>{const A=Math.round(26+106*(1-E)),ee=(M+D*E).toFixed(D<15?1:0);return`
          <line x1="44" y1="${A}" x2="662" y2="${A}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${E===0?"0":"3 3"}" />
          <text x="38" y="${A+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${ee}</text>
        `}).join(""),Q=a.map((E,A)=>`<text x="${44+A/(a.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${E}</text>`).join(""),re=g.map((E,A)=>{const ee=be[(E.colorIdx+A)%be.length],ae=E.points,H=[];let de=44,h=26+106/2,V=!1;ae.forEach((S,W)=>{const Y=44+W/(ae.length-1)*618;if(typeof S=="number"){const U=26+106*(1-(S-M)/D);H.push(`${Y.toFixed(1)},${U.toFixed(1)}`),de=Y,h=U}else V=!0});const G=n?ae.map((S,W)=>{if(typeof S!="number")return null;const Y=44+W/(ae.length-1)*618,ne=26+106*(1-(S*.96-M)/D);return`${Y.toFixed(1)},${ne.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${G?`<polyline fill="none" stroke="${ee}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${G}" />`:""}
          ${H.length?`<polyline fill="none" stroke="${ee}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${H.join(" ")}" />`:""}
          ${V?`<line x1="${de.toFixed(1)}" y1="${h.toFixed(1)}" x2="662" y2="${h.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${h-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),ie=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="500" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,le=g.map((E,A)=>{const ee=be[(E.colorIdx+A)%be.length],ae=ot(E);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${ee};"></span>${w(E.deviceName)} ｜ ${w(E.label)}</span></td>
            <td><strong>${w(ae.curr)}</strong> <span class="pacom-row-sub">${w(E.unit)}</span></td>
            <td>${w(ae.min)} <span class="pacom-row-sub">${w(E.unit)}</span></td>
            <td>${w(ae.avg)} <span class="pacom-row-sub">${w(E.unit)}</span></td>
            <td>${w(ae.max)} <span class="pacom-row-sub">${w(E.unit)}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${w(L)}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${g.map((E,A)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${be[(E.colorIdx+A)%be.length]};"></span>${w(E.deviceName)}｜${w(E.label)}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${K}
          ${Q}
          ${ie}
          ${re}
        </svg>
        <div class="pacom-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="pacom-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${le}</tbody>
          </table>
        </div>
      </div>
    `};if(t==="shared")return l(e,"单图叠合对比（Shared）");const f=new Map;for(const g of e){const L=f.get(g.unit)??[];L.push(g),f.set(g.unit,L)}return Array.from(f.entries()).map(([g,L])=>l(L,`按单位分组泳道（${g}）`)).join("")}function it(e){const t=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(f=>[f.label,String(f.value),f.baseline!==void 0?String(f.baseline):""].join(","))],n=new Blob([`\uFEFF${t.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(n),l=document.createElement("a");l.href=a,l.download=`pacom-${e.category}-${e.range}.csv`,l.click(),URL.revokeObjectURL(a)}function lt(e){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],n=["时间",...e.map(L=>`${L.deviceName}｜${L.label}(${L.unit})`)].join(","),a=t.map((L,O)=>[L,...e.map(B=>String(B.points[O]??"No Data"))].join(",")),l=new Blob([`\uFEFF${[n,...a].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),f=URL.createObjectURL(l),g=document.createElement("a");g.href=f,g.download="pacom-timeseries-export.csv",g.click(),URL.revokeObjectURL(f)}async function kt(e,t,n){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),l=a.get("tab"),f=a.get("cat"),g=a.get("device"),L=a.get("points"),O=a.get("mode"),B=a.get("interval");let N=l==="timeseries"?"timeseries":f&&Se.some(x=>x.id===f)?f:"energy",F="7d",k="2026-11-16",R="2026-11-23";const y=!!n.scope.allowedZoneIds?.length,I=n.scope.allowedFloorIds[0]??q.floorId,$={level:"floor",projectId:n.scope.allowedProjectIds[0]??q.projectId,buildingId:n.scope.allowedBuildingIds[0]??q.buildingId,floorId:I};function M(x){if(y)return{scope:$,scopeId:I};if(x.level==="all-projects")return n.scope.allowedProjectIds.includes(q.projectId)?{scope:x,scopeId:q.projectId}:{scope:$,scopeId:I};if(x.level==="project"){if(n.scope.allowedProjectIds.includes(x.projectId)){const T=Ee.some(te=>te.id===x.projectId)?x.projectId:q.projectId;return{scope:x,scopeId:T}}return{scope:$,scopeId:I}}if(x.level==="building"){if(n.scope.allowedBuildingIds.includes(x.buildingId)){const T=Ee.some(te=>te.id===x.buildingId)?x.buildingId:q.buildingId;return{scope:x,scopeId:T}}return{scope:$,scopeId:I}}return n.scope.allowedFloorIds.includes(x.floorId)?{scope:x,scopeId:x.floorId}:{scope:$,scopeId:I}}const ue=M(Ne());let D=ue.scope,K=!1,Q="",re=ue.scopeId,ie="chart",le=!0,E="breakdown",A=!1,ee=null;const[ae,H]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(q.floorId).catch(()=>[])]);let de=H;const h=new Map,V=[];de.forEach((x,T)=>{const te=nt(x,T);h.set(x.id,te),V.push(...te)});let G=O==="shared"||O==="grouped"?O:"grouped",S=B==="15m"||B==="1h"||B==="1d"?B:"1h",W=!1;const Y=[];if(L?L.split(",").forEach(x=>{V.some(T=>T.id===x)&&Y.push(x)}):g&&h.has(g)&&(h.get(g)??[]).slice(0,2).forEach(x=>Y.push(x.id)),!Y.length){const x=de.find(X=>X.category==="hvac"),T=de.find(X=>X.category==="sensor"),te=de.find(X=>X.category==="lighting");x&&(h.get(x.id)??[]).slice(0,2).forEach(X=>Y.push(X.id)),T&&(h.get(T.id)??[]).slice(0,1).forEach(X=>Y.push(X.id)),te&&(h.get(te.id)??[]).slice(0,1).forEach(X=>Y.push(X.id)),Y.length||V.slice(0,3).forEach(X=>Y.push(X.id))}const U=new Set(Y),ne=new Set(de.filter((x,T)=>T<2||(h.get(x.id)??[]).some(te=>U.has(te.id))).map(x=>x.id)),oe=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:V.filter(x=>x.pointKey==="temp"||x.pointKey==="setpoint"||x.pointKey==="co2").slice(0,4).map(x=>x.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:V.filter(x=>x.pointKey==="dimming"||x.pointKey==="power").slice(0,4).map(x=>x.id),mode:"grouped",interval:"15m"}];let ce="";async function me(){const x=N==="timeseries"?"energy":N,T=F==="custom"?"30d":F;ee=await t.getAnalysisReport(x,T,q.floorId),Z()}function Z(){if(!ee)return;const x=N==="timeseries",T=N==="timeseries"?"energy":N,te=Se.find(r=>r.id===T)??Se[0],X=Ee.find(r=>r.id===re)??Ee[0],pe=tt(ee,X.factor),ve=pe.zoneBreakdown.filter(r=>r.status==="warning"),fe=Je[T],$e=Math.max(...pe.zoneBreakdown.map(r=>r.value),1),ke=V.filter(r=>U.has(r.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${Fe({tree:ae,session:n,scope:D,isOpen:K,searchKeyword:Q})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${F==="today"?"selected":""}>今日</option>
                <option value="7d" ${F==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${F==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${F==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${x?"":`<button class="pacom-btn ${A?"pacom-btn--primary":""}" data-toggle-canvas="1">${A?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${Se.map(r=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${N===r.id}" data-cat="${r.id}">${r.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${N==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${F==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${w(k)}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${w(R)}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${x?`
            <div class="pacom-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${ke.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${oe.map(r=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${w(r.id)}">${P("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${w(r.name)}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${de.map(r=>{const C=h.get(r.id)??[],he=ne.has(r.id),ye=C.filter(ge=>U.has(ge.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${w(r.id)}" style="cursor:pointer; justify-content:space-between;" title="${w(r.name)}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${he?"0deg":"-90deg"}); opacity:0.65;">${Xe}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${w(r.name)}</div>
                                <div class="pacom-row-sub">${C.length} 个测点 ｜ ${r.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${ye>0?`<span class="pacom-badge pacom-badge--accent">${ye}</span>`:""}
                          </button>
                          ${he?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${C.map(ge=>{const Ie=U.has(ge.id),Ce=be[ge.colorIdx%be.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${Ie?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${w(ge.id)}" data-ts-point="${w(ge.id)}" ${Ie?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${Ce};"></span>
                                            <span style="color:var(--pacom-text-primary);">${w(ge.label)}</span>
                                          </span>
                                          <span class="pacom-row-sub">${w(ge.unit)}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="pacom-subnav-main" style="padding:2px 4px 24px;">
                ${ce?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${w(ce)}</span></div>`:""}
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${P("clock",12)} 排程(S) ｜ ${P("triangle-alert",12)} 告警(!) ｜ 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${W}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${S==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${S==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${S==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${G==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${G==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${st(ke,G,W)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="pacom-kpi-strip" role="region" aria-label="核心统计指标">
                ${pe.kpis.map(r=>{const C=et(r.value,r.unit);return`
                      <div class="pacom-kpi-cell" title="${w(C.title)}">
                        <span class="pacom-kpi-label">${w(r.label)}</span>
                        <div class="pacom-kpi-value">
                          <span>${w(C.value)}</span>
                          ${C.unit?`<span class="pacom-kpi-unit">${w(C.unit)}</span>`:""}
                        </div>
                        <span class="pacom-kpi-delta">${w(r.delta??"与基线持平")}</span>
                      </div>`}).join("")}
              </div>

              <section class="pacom-section">
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">${w(te?.label??"趋势")}趋势（${w(pe.unit)}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${w(X.label)} ｜ 更新于 ${w(pe.updatedAt.slice(5,16).replace("T"," "))}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${le}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${ie==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${ie==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${ve.length>0?`关注：${ve.map(r=>w(r.zoneName)).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${w(te?.desc??"空间运行洞察")} ｜ ${w(fe.summary)}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${ie==="chart"?at(pe,le):`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${w(pe.unit)}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${pe.series.map(r=>{const C=typeof r.baseline=="number"&&r.value>r.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${w(r.label)}</strong></td>
                                    <td>${r.value.toLocaleString("en-US")}</td>
                                    <td>${r.baseline!==void 0?r.baseline.toLocaleString("en-US"):"-"}</td>
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
                    <span class="pacom-row-sub">${pe.zoneBreakdown.length} 个功能区</span>
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
                          ${pe.zoneBreakdown.map(r=>{const C=Math.max(8,Math.round(r.value/$e*100));return`
                                <tr>
                                  <td style="font-weight:500;">${w(r.zoneName.replace(/^7F\s*/,""))}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${C}%; height:100%; border-radius:999px; background:${r.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${r.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${w(r.unit)}</span></td>
                                  <td>
                                    <span class="pacom-badge ${r.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${r.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="pacom-section-title">${A?"E7F 空间对照预览":T==="energy"&&E==="load"?"峰谷负荷分布（Load Profile）":fe.title}</h2>
                    ${!A&&T==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${E==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${E==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${A?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${A?'<img class="pacom-plan-img" src="./media/floors/e/07F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${T==="environment"?`
                            <div style="display:flex; flex-direction:column; gap:6px; padding-bottom:8px; border-bottom:var(--hw) solid var(--pacom-border-subtle);">
                              <div style="display:flex; justify-content:space-between; font-size:12px;">
                                <span style="font-weight:500;">ASHRAE 舒适带时长分布</span>
                                <span class="pacom-row-sub">过冷 1.6% ｜ 舒适 96.2% ｜ 过热 2.2%</span>
                              </div>
                              <div style="display:flex; height:10px; border-radius:999px; overflow:hidden; gap:2px;">
                                <div style="width:4%; background:var(--pacom-accent-solid);" title="过冷 1.6%"></div>
                                <div style="width:91%; background:var(--pacom-status-online);" title="舒适达标 96.2%"></div>
                                <div style="width:5%; background:var(--pacom-status-warning);" title="过热 2.2%"></div>
                              </div>
                            </div>`:""}
                        ${(T==="energy"&&E==="load"?Qe:fe.items).map(r=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${r.name}</span>
                                <span class="pacom-row-sub">${r.detail} ｜ <strong style="color:var(--pacom-text-primary);">${r.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,r.pct)}%; height:100%; border-radius:999px; background:${r.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,De(e,{onToggle:()=>{K=!K,Z(),K&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:r=>{Q=r,Z();const C=e.querySelector("[data-global-space-search]");C&&(C.focus(),C.setSelectionRange(r.length,r.length))},onPick:r=>{const C=M(r);D=C.scope,re=C.scopeId,K=!1,Z()}}),e.querySelectorAll("[data-cat]").forEach(r=>{r.addEventListener("click",()=>{N=r.dataset.cat??"energy",ce="",N==="timeseries"?Z():me()})}),e.querySelector("[data-range-select]")?.addEventListener("change",r=>{F=r.currentTarget.value??"7d",me()}),e.querySelector("[data-custom-start]")?.addEventListener("change",r=>{k=r.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",r=>{R=r.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(r=>{r.addEventListener("click",()=>{ie=r.dataset.chartMode??"chart",Z()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{le=!le,Z()}),e.querySelectorAll("[data-energy-right]").forEach(r=>{r.addEventListener("click",()=>{E=r.dataset.energyRight??"breakdown",Z()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{x?lt(ke):it(pe)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{A=!A,Z()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(r=>{r.addEventListener("click",()=>{const C=r.dataset.tsExpand;C&&(ne.has(C)?ne.delete(C):ne.add(C),Z())})}),e.querySelectorAll("[data-ts-point]").forEach(r=>{r.addEventListener("change",()=>{const C=r.dataset.tsPoint;C&&(r.checked?U.add(C):U.delete(C),ce="",Z())})}),e.querySelectorAll("[data-ts-mode]").forEach(r=>{r.addEventListener("click",()=>{G=r.dataset.tsMode??"grouped",Z()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",r=>{S=r.currentTarget.value??"1h",Z()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{W=!W,Z()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const C=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(U).join(","))}&mode=${G}&interval=${S}`,he=`${window.location.origin}${window.location.pathname}${C}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(he).catch(()=>{}),window.history.replaceState(null,"",C),ce=`已复制分享链接（含 ${U.size} 个测点、${G==="grouped"?"按单位分组":"单图叠合"}、${S} 粒度）。`,Z()}),e.querySelectorAll("[data-load-fav]").forEach(r=>{r.addEventListener("click",()=>{const C=oe.find(he=>he.id===r.dataset.loadFav);C&&(U.clear(),C.pointIds.forEach(he=>{U.add(he);const ye=he.split(":")[0];ye&&ne.add(ye)}),G=C.mode,S=C.interval,ce=`已加载收藏视图「${C.name}」。`,Z())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(U.size===0)return;const r=`自定义对比 #${oe.length+1}（${U.size} 测点）`;oe.push({id:`fav-${Date.now()}`,name:r,pointIds:Array.from(U),mode:G,interval:S}),ce=`已保存当前时序配置为「${r}」。`,Z()})}await me()}function ct(e){const t=e.match(/\b((?:FCU|VAV|AHU|PAU|GW|AP|SW|DM)-\d+)\b/i);if(t?.[1])return t[1].toUpperCase();const n=e.replace(/^[A-Z]?\d+F\s*|[A-Z]?RF\s*|[A-Z]?B\d+\s*/i,"").trim()||e.trim();return n.length>8?`${n.slice(0,7)}…`:n}function qe(e){const t=ct(e.name);if(e.connectivity==="offline")return`${t} 离线`;if(e.category==="lighting"){const n=Number(e.telemetry.dimming?.value??0);return n>0?`${t} ${n}%`:`${t} 关`}return e.category==="hvac"?`${t} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"&&e.telemetry.temp?.value!==void 0?`${t} ${e.telemetry.temp.value}°C`:t}const Be={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},rt={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},dt=P("chevron-down",12),pt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function c(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Re(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面"))return 999;const n=t.match(/(-?\d+)/);if(!n)return 0;const a=Number(n[1]);return t.startsWith("B")?-Math.abs(a):a}async function It(e,t,n){const a=await t.getSpatialTree();t.mode;const l=n.scope.canControlDevices,f=n.scope.canManageAlarms,g=n.scope.allowedZoneIds?.length?n.scope.allowedZoneIds:null,L=i=>n.scope.allowedFloorIds.includes(i)||n.scope.canEditDeployment,O=a.floors.filter(i=>L(i.id)),B=g||a.projects.length<=1&&a.buildings.length<=1&&O.length<=1?"floors-only":a.projects.length>1?"multi-project":a.buildings.length>1?"single-project-multi-building":"single-building",N=B==="multi-project",F=B==="multi-project"||B==="single-project-multi-building",k=B!=="floors-only",R=B==="floors-only"&&O.length<=1;let y=Ne(),I="devices",$=!1,M=!1,ue="",D="",K="all",Q="all";const re=new URLSearchParams(window.location.hash.split("?")[1]??""),ie=re.get("device"),le=re.get("zone");let E=ie,A=!!ie,ee="control",ae="",H=!1,de="today",h="devices";const V=new Set,G=new Set;let S=[],W=[],Y=[],U=null,ne=null,oe=1,ce=0,me=0,Z=null;function x(){return a.zones.filter(i=>!(y.level==="floor"&&i.floorId!==y.floorId||g&&!g.includes(i.id)))}function T(i){return[...a.floors.filter(d=>d.buildingId!==i?!1:B==="floors-only"?n.scope.allowedFloorIds.includes(d.id):!0)].sort((d,o)=>Re(o.name)-Re(d.name))}async function te(i,u=!1){if(a.projects.length===0){y={level:"all-projects"},ze(y),S=[],W=[],Y=[],_();return}let d=i;d.level==="all-projects"&&!N&&(d={level:"project",projectId:a.projects[0]?.id??q.projectId}),d.level==="project"&&!F&&(d={level:"building",projectId:d.projectId,buildingId:a.buildings[0]?.id??q.buildingId}),d.level==="building"&&!k&&(d={level:"floor",projectId:d.projectId,buildingId:d.buildingId,floorId:O[0]?.id??q.floorId}),y=d,ze(d),ne=null,Q=u&&le?le:"all",H=!1,M=!1,$=!1,G.clear(),oe=1,ce=0,me=0,Z&&(Z(),Z=null);const o=y.level==="floor"?y.floorId:q.floorId;if(y.level==="floor")try{const[s,p,v]=await Promise.all([t.getFloorDevices(y.floorId),t.listAlarms(y.floorId),t.listWorkOrders(y.floorId)]);S=s,W=p,Y=v,S.some(m=>m.id===E)?u&&ie&&(A=!0):(E=S[1]?.id??S[0]?.id??null,A=!1),Z=t.subscribeFloorEvents(y.floorId,async m=>{m.type==="control.receipt.updated"&&U?.batchId===m.batchId&&(U=await t.getControlBatch(m.batchId)),(m.type==="telemetry.updated"||m.type==="device.connectivity")&&y.level==="floor"&&(S=await t.getFloorDevices(y.floorId)),m.type==="alarm.changed"&&y.level==="floor"&&(W=await t.listAlarms(y.floorId)),fe()})}catch(s){S=[],W=[],Y=[],E=null,A=!1,ne=s instanceof Error?s.message:String(s)}else{A=!1;const[s,p,v]=await Promise.all([t.getFloorDevices(o).catch(()=>[]),t.listAlarms(o).catch(()=>[]),t.listWorkOrders(o).catch(()=>[])]);S=s,W=p,Y=v}_()}function X(i){return i?a.zones.find(u=>u.id===i)?.name??i:"未分配逻辑区"}function pe(){const i=D.trim().toLowerCase();return S.filter(u=>Q!=="all"&&u.logicalZoneId!==Q||K!=="all"&&u.category!==K?!1:i?u.name.toLowerCase().includes(i)||u.id.toLowerCase().includes(i)||X(u.logicalZoneId).toLowerCase().includes(i):!0)}async function ve(i,u,d){!i.length||y.level!=="floor"||!l||(i.forEach(o=>V.add(o)),U=await t.dispatchControlBatch({floorId:y.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:i.map(o=>({deviceId:o,command:u,targetValue:d}))}),fe())}function fe(){const i=document.activeElement,u=i?.dataset?.role,d=i&&"selectionStart"in i?i.selectionStart:null,o=i&&"selectionEnd"in i?i.selectionEnd:null,s=e.querySelector(".pacom-list")?.scrollTop??0;_();const p=e.querySelector(".pacom-list");if(p&&(p.scrollTop=s),u==="search"||u==="space-search"){const v=e.querySelector(`[data-role="${u}"]`);v&&(v.focus(),d!==null&&o!==null&&v.setSelectionRange(d,o))}}function $e(){const i=e.querySelector('[data-role="canvas-viewport"]');i&&(i.style.transform=`translate(${ce}px, ${me}px) scale(${oe})`);const u=e.querySelector('[data-role="zoom-label"]');u&&(u.textContent=`${Math.round(oe*100)}%`)}function ke(i){if(i==="all")return{level:"all-projects"};const u=i.split(":");return u[0]==="project"&&u[1]?{level:"project",projectId:u[1]}:u[0]==="building"&&u[1]&&u[2]?{level:"building",projectId:u[1],buildingId:u[2]}:u[0]==="floor"&&u[1]&&u[2]&&u[3]?{level:"floor",projectId:u[1],buildingId:u[2],floorId:u[3]}:{level:"all-projects"}}function r(i){const u=y;if(u.level==="all-projects"){const d=D.trim().toLowerCase(),o=a.projects.filter(s=>!d||s.name.toLowerCase().includes(d));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${o.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${P("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${o.map(s=>{const p=a.buildings.filter(v=>v.projectId===s.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${c(s.id)}">
                  <div>
                    <div class="pacom-row-title">${c(s.name)}</div>
                    <div class="pacom-row-sub">${c(s.city??"")} ｜ ${p} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(u.level==="project"){const d=D.trim().toLowerCase(),o=a.buildings.filter(v=>v.projectId===u.projectId&&(!d||v.name.toLowerCase().includes(d))),s=S.filter(v=>v.connectivity==="online").length,p=S.length?Math.round(s/S.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${o.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${P("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${o.map(v=>{const m=v.id===q.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${c(v.projectId)}:${c(v.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${m&&i>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${c(v.name)}</div>
                      <div class="pacom-row-sub">地上 ${v.aboveFloors} 层 ｜ ${v.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${m?"pacom-badge--accent":"pacom-badge--neutral"}">${m?`在线 ${p}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(u.level==="building"){const d=D.trim().toLowerCase(),o=T(u.buildingId).filter(p=>!d||p.name.toLowerCase().includes(d)),s=a.buildings.find(p=>p.id===u.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${c(s?.name??"楼宇")} 楼层导览（${o.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${P("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${o.map(p=>{const v=L(p.id),m=p.id===q.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${v?"":"opacity:0.6;"}" data-nav-scope="floor:${c(u.projectId)}:${c(u.buildingId)}:${c(p.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${m&&i>0?"pacom-dot--warning":p.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${c(s?.name??"")} ${c(p.name)}</div>
                      <div class="pacom-row-sub">${p.plan?"2D 平面控图就绪":"暂未上传平面图"}${m&&i>0?` ｜ ${i} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${v&&p.plan?"pacom-badge--online":"pacom-badge--neutral"}">${v?p.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(I==="devices"){const d=pe(),o=x(),s=Array.from(G);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${g?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${g.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${K==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${K==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${K==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${K==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${K==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${d.length} 台${l&&s.length?` ｜ 已选 ${s.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${P("x",14)}</button>
          </div>
          ${o.length>0&&!ne?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${Q==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${o.map(p=>`<button type="button" class="pacom-zone-pill ${Q===p.id?"is-active":""}" data-filter-zone="${c(p.id)}">${c(p.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${ne?`<div class="pacom-alert-banner">${c(ne)}</div>`:d.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':d.map(p=>{const v=p.id===E&&A,m=G.has(p.id),z=p.connectivity==="offline",j=z?"pacom-dot--critical":"pacom-dot--online",b=z?"离线":p.category==="lighting"?`${p.telemetry.dimming?.value??"--"}%`:p.category==="hvac"?`${p.telemetry.setpoint?.value??"--"}°C`:p.category==="sensor"?`${p.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${v?"is-selected":""}" data-select-device="${c(p.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${l?`<input type="checkbox" name="devCheck-${c(p.id)}" data-check-device="${c(p.id)}" ${m?"checked":""} style="margin-top:3px;" aria-label="勾选 ${c(p.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${c(p.name)}</div>
                              <div class="pacom-row-sub">${c(X(p.logicalZoneId).replace(/^7F\s*/,""))} ｜ ${c(Be[p.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${z?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${j}"></span>${c(b)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${l&&s.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${s.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(I==="zones"){const d=x(),o={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${d.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${P("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${d.map(s=>{const p=S.filter(b=>b.logicalZoneId===s.id),v=p.filter(b=>b.connectivity==="online").length,m=p.filter(b=>b.category==="lighting"||b.category==="hvac").length,z=Q===s.id,j=o[s.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${z?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${z?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${c(z?"all":s.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${c(s.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${v}/${p.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${j.temp} ｜ ${j.occ}</div>
                  ${m>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${c(s.id)}" data-zone-val="true" ${l?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${c(s.id)}" data-zone-val="false" ${l?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${W.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${P("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${W.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':W.map(d=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${c(d.title)}</strong>
                      <span class="pacom-badge ${d.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${d.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${c(d.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${c(d.deviceId)}">定位设备</button>
                      ${d.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${c(d.id)}" ${f?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function C(i){const u=y,d=x().length,o=u.level==="floor"?"搜索设备或区域…":u.level==="building"?"搜索楼层…":u.level==="project"?"搜索楼宇…":"搜索园区…",s=u.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${$&&I==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${S.length}</button>
          <button type="button" class="pacom-hud-pill ${$&&I==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${d}</button>
          <button type="button" class="pacom-hud-pill ${i>0?"pacom-hud-pill--alert":""} ${$&&I==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${i}</button>
        `:u.level==="building"?`
            <button type="button" class="pacom-hud-pill ${$?"is-active":""}" data-toggle-hud="1">楼层 ${T(u.buildingId).length}</button>
            ${i>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${i}</button>`:""}
          `:u.level==="project"?`
              <button type="button" class="pacom-hud-pill ${$?"is-active":""}" data-toggle-hud="1">楼宇 ${a.buildings.filter(p=>p.projectId===u.projectId).length}</button>
              ${i>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${i}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${$?"is-active":""}" data-toggle-hud="1">园区 ${a.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${P("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${o}" value="${c(D)}" aria-label="${o}" />
          ${s}
        </div>
        ${$?`<div class="pacom-hud-sheet" data-role="hud-sheet">${r(i)}</div>`:""}
      </div>
    `}function he(i){if(R||y.level!=="building"&&y.level!=="floor")return"";const u=y.buildingId,d=y.projectId,o=T(u);return!k&&o.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${k?`<button type="button" class="pacom-elev-item ${y.level==="building"?"is-active":""}" data-nav-scope="building:${c(d)}:${c(u)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${o.map(s=>{const p=n.scope.allowedFloorIds.includes(s.id),v=y.level==="floor"&&y.floorId===s.id,m=s.id===q.floorId&&i>0;return`
              <button type="button" class="pacom-elev-item ${v?"is-active":""} ${p?"":"is-locked"}"
                data-nav-scope="floor:${c(d)}:${c(u)}:${c(s.id)}"
                title="${c(s.name)}${p?m?` ｜ ${i} 条告警`:"":"（无权限）"}">
                ${m?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${c(s.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function ye(i,u){const d=y;if(d.level==="floor")return ne?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${h==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${h==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${h==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${P("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(oe*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${P("plus",14)}</button>
        </div>
      `;const o=S.length?Math.round(i/S.length*100):100,s=d.level==="building"?"418 kWh":"1,248 kWh",p=Math.round(96.2*.45+93.6*.35+o*.2),v=d.level==="building"?T(d.buildingId).find(m=>m.id===q.floorId)??T(d.buildingId)[0]:null;return`
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
        ${d.level==="building"&&v?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${c(d.projectId)}:${c(d.buildingId)}:${c(v.id)}">进入 ${c(v.name)} 平面图 →</button>`:""}
      </div>
    `}function ge(i,u){const d=y,o=S.length?Math.round(i/S.length*100):100;if(d.level==="all-projects")return`
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
                <button type="button" class="pacom-pin is-selected" style="left:${z===0?50:28}%; top:${z===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${c(m.id)}">
                  <span class="pacom-dot ${u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${c(m.name)} ｜ 在线 ${o}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(d.level==="project"){const m=a.projects.find(j=>j.id===d.projectId)??a.projects[0],z=a.buildings.filter(j=>!m||j.projectId===m.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${c(m?.imageUrl??"./media/gzlab.jpg")}" alt="${c(m?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${z.map((j,b)=>{const se=j.id===q.buildingId;return`
                  <button type="button" class="pacom-pin ${se?"is-selected":""}" style="left:${b===0?56:38}%; top:${b===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${c(j.projectId)}:${c(j.id)}">
                    <span class="pacom-dot ${se&&u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${c(j.name)} ｜ ${se?`在线 ${o}% ｜ 告警 ${u}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(d.level==="building"){const m=a.buildings.find(j=>j.id===d.buildingId),z=T(d.buildingId).find(j=>j.id===q.floorId)??T(d.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${c(m?.imageUrl??"./media/building-e.webp")}" alt="${c(m?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${z?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${c(d.projectId)}:${c(d.buildingId)}:${c(z.id)}">
                    <span class="pacom-dot ${u>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${c(m?.name??"")} ${c(z.name)} ｜ 在线 ${i}/${S.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const s=a.floors.find(m=>m.id===d.floorId),p=a.buildings.find(m=>m.id===d.buildingId),v=x();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${ne?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${c(ne)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:s?.plan?.imageUrl?`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${ce}px, ${me}px) scale(${oe});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${c(s.plan.imageUrl)}" alt="${c(p?.name??"楼宇")} ${c(s.name)} 平面图" />
                  ${v.map((m,z)=>{const j=pt[m.id];if(!j)return"";const b=Q===m.id,se=["23.2°C","24.6°C","22.8°C","23.9°C"],xe=["有人 74%","会议中","有人 52%","空闲"],je=h==="temp"?` ｜ ${se[z%se.length]}`:h==="occupancy"?` ｜ ${xe[z%xe.length]}`:"",Ue=h==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":h==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${b?"is-active":""}"
                          style="left:${j.left}%; top:${j.top}%; width:${j.width}%; height:${j.height}%; ${b?"":Ue}"
                          data-filter-zone="${c(b?"all":m.id)}"
                          title="${c(m.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${c(m.name.replace(/^7F\s*/,""))}${je}</span>
                        </button>`}).join("")}
                  ${S.filter(m=>m.planPoint).map(m=>{const z=W.some(je=>je.deviceId===m.id&&je.status==="active"),j=$&&I==="alarms",b=Q!=="all"&&m.logicalZoneId!==Q||j&&!z,se=j&&z?"background:var(--pacom-status-critical);":"",xe=m.category==="gateway"?Math.min(92,m.planPoint.y*100+5.5):m.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${m.id===E&&A?"is-selected":""} ${m.connectivity==="offline"?"pacom-pin--offline":""} ${b?"pacom-pin--dimmed":""}"
                          style="left:${(m.planPoint.x*100).toFixed(2)}%; top:${xe.toFixed(2)}%; ${se}"
                          data-pin-device="${c(m.id)}" title="${c(m.name)}">
                          <span class="pacom-dot ${z?"pacom-dot--critical":m.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${c(qe(m))}</span>
                        </button>`}).join("")}
                </div>
              </div>`:`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                  <div class="dep-empty-card" style="max-width:440px;">
                    <div class="dep-empty-icon">${P("layers",20)}</div>
                    <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${c(p?.name??"")} ${c(s?.name??"当前楼层")} 暂未上传 2D 平面底图</strong>
                    <span class="pacom-row-sub">完成底图上传与设备标记后，即可在此实时查看点位与控制设备。</span>
                    ${n.scope.visibleModules.includes("deployment")?`<a class="pacom-btn pacom-btn--primary" style="text-decoration:none;" href="#deployment?sec=floors&floor=${encodeURIComponent(s?.id??"")}">前往系统部署上传底图 →</a>`:""}
                  </div>
                </div>`}
      </div>
    `}function Ie(){if(y.level!=="floor"||!A)return"";const i=S.find(b=>b.id===E);if(!i)return"";const u=i.category==="lighting",d=i.category==="hvac",o=Number(i.telemetry.dimming?.value??50),s=Number(i.telemetry.setpoint?.value??24),p=V.has(i.id),v=W.filter(b=>b.deviceId===i.id&&b.status==="active"),m=Y.filter(b=>b.deviceId===i.id&&b.status!=="closed"),z=d?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:u?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],j=u?[{label:"当前开关",value:o>0?"开启":"关闭"},{label:"当前亮度",value:`${o}%`},{label:"实时功率",value:o>0?`${Math.round(o*1.4)} W`:"0 W"},{label:"运行模式",value:p?"人工覆盖":"自动策略"}]:d?[{label:"室内温度",value:`${i.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${s.toFixed(1)}°C`},{label:"运行工况",value:i.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:p?"人工覆盖":"自动策略"}]:i.category==="sensor"?[{label:"实时温度",value:`${i.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${i.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${i.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:i.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:i.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:i.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:i.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:i.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${c(i.name)}</h2>
            <div class="pacom-row-sub">${c(X(i.logicalZoneId))} ｜ ${c(Be[i.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${i.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${i.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${P("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${ee==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${ee==="trend"}" data-drawer-tab="trend">趋势与告警${v.length>0?` (${v.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${ee==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${ee==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${j.map(b=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${b.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${c(b.value)}</strong>
                  </div>`).join("")}
            </div>

            ${d?`
                <div class="pacom-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${i.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${c(i.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${i.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${i.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${i.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${i.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${s.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${u||d?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${p&&l?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${c(i.id)}">恢复自动策略</button>`:l?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${i.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${u?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${l?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${l?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${o}%</strong>
                        <input type="range" name="ctrlDimming" min="0" max="100" step="10" value="${o}" data-ctrl-slider="lighting.dimming" ${l?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${l?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${l?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${s-.5}" ${l?"":"disabled"}>-0.5°C</button>
                        <strong>${s.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${s+.5}" ${l?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${U?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${c(U.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${U.receipts.map(b=>{const se=rt[b.status]??{text:b.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${c(b.deviceId)}</strong> ｜ ${c(b.command)} → ${c(b.targetValue)}</div>
                              ${b.errorMessage?`<div style="color:var(--pacom-status-critical);">${c(b.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${se.badge}">${se.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:ee==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${u?"亮度 %":d?"温度 °C":i.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${c(i.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${i.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${u?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":d?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${v.length===0&&m.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${v.map(b=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${c(b.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${c(b.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${m.map(b=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${c(b.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${c(b.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${c(qe(i))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${c(X(i.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${ae?`<div class="pacom-info-banner">${c(ae)}</div>`:""}
                ${z.map(b=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${c(b.name)}">${c(b.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${c(b.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="pacom-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${P("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${c(i.id)}</code> ｜ v${i.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${i.planPoint?`x=${i.planPoint.x.toFixed(2)}, y=${i.planPoint.y.toFixed(2)} (图 v${i.planPoint.planVersion})`:"未标记"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${i.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${i.hardwareBinding?`${i.hardwareBinding.protocol.toUpperCase()} ｜ ${i.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function Ce(i,u,d){if(!H)return"";const o=Math.max(0,S.length-i),s=de==="week",p=W.filter(v=>v.status==="active").slice(0,2);return`
      <div class="pacom-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${s?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 ｜ 湿度 64% ｜ 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!s}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${s}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${P("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${s?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${s?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${c(d)}°C ｜ ${i}/${S.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${u} 告警 ｜ ${o} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,V.size)} 覆盖 ｜ ${Y.filter(v=>v.status!=="closed").length} 工单</strong></div>
        </div>
        ${p.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${p.map(v=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${c(v.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${c(v.title)}</span>
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
                ${Fe({tree:a,session:n,scope:y,activeAlarmCount:0,isOpen:!1,searchKeyword:""})}
              </div>
            </div>
          </header>
          <main class="pacom-spatial-stage" style="display:flex; align-items:center; justify-content:center; padding:24px;">
            <div class="dep-empty-card" style="max-width:520px; width:100%; background:var(--pacom-surface-card);">
              <div class="dep-empty-icon">${P("building-2",20)}</div>
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
      `,e.querySelector("[data-go-create-first-project]")?.addEventListener("click",()=>{window.location.hash="#deployment?sec=projects&new=project"});return}const i=W.filter(o=>o.status==="active").length,u=S.filter(o=>o.connectivity==="online").length,d=S.find(o=>o.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${Fe({tree:a,session:n,scope:y,activeAlarmCount:i,isOpen:M,searchKeyword:ue})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${ne?'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${H}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${u}/${S.length} 在线 ｜ ${c(d)}°C ｜ 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${dt}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${Ce(u,i,d)}

        <main class="pacom-spatial-stage">
          ${C(i)}
          ${ge(u,i)}
          ${he(i)}
          ${ye(u,i)}
          ${Ie()}
        </main>
      </div>
    `,_e()}function _e(){De(e,{onToggle:()=>{M=!M,M&&(H=!1,$=!1),_(),M&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:o=>{ue=o,_();const s=e.querySelector("[data-global-space-search]");s&&(s.focus(),s.setSelectionRange(o.length,o.length))},onPick:o=>{M=!1,te(o)}}),e.querySelectorAll("[data-nav-scope]").forEach(o=>{o.addEventListener("click",s=>{s.stopPropagation(),o.dataset.navScope&&te(ke(o.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(o=>{o.addEventListener("click",s=>{s.stopPropagation();const p=o.dataset.hudTab;$&&I===p?$=!1:(I=p,$=!0,M=!1,H=!1),_()})}),e.querySelectorAll("[data-toggle-hud]").forEach(o=>{o.addEventListener("click",s=>{s.stopPropagation(),$=!$,$&&(M=!1,H=!1),_()})}),e.querySelectorAll("[data-close-hud]").forEach(o=>{o.addEventListener("click",s=>{s.stopPropagation(),$=!1,_()})});const i=e.querySelector('[data-role="search"]');i?.addEventListener("focus",()=>{$||($=!0,M=!1,H=!1,fe())}),i?.addEventListener("input",o=>{D=o.currentTarget.value,$=!0,fe()}),e.querySelector('[data-role="category"]')?.addEventListener("change",o=>{K=o.currentTarget.value,_()}),e.querySelectorAll("[data-filter-zone]").forEach(o=>{o.addEventListener("click",s=>{s.stopPropagation(),Q=o.dataset.filterZone??"all",_()})}),e.querySelectorAll("[data-select-device]").forEach(o=>{o.addEventListener("click",s=>{s.target.tagName!=="INPUT"&&(E=o.dataset.selectDevice??null,A=!0,_())})}),e.querySelectorAll("[data-check-device]").forEach(o=>{o.addEventListener("change",()=>{const s=o.dataset.checkDevice;s&&(o.checked?G.add(s):G.delete(s),_())})}),e.querySelectorAll("[data-pin-device]").forEach(o=>{o.addEventListener("click",s=>{s.stopPropagation(),E=o.dataset.pinDevice??null,A=!0,M=!1,H=!1,_()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{A=!1,_()}),e.querySelectorAll("[data-drawer-tab]").forEach(o=>{o.addEventListener("click",()=>{ee=o.dataset.drawerTab??"control",ae="",_()})}),e.querySelectorAll("[data-drawer-doc]").forEach(o=>{o.addEventListener("click",()=>{ae=`已调阅「${o.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,_()})}),e.querySelectorAll("[data-briefing-period]").forEach(o=>{o.addEventListener("click",()=>{de=o.dataset.briefingPeriod??"today",_()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.goAlarmId??"";window.location.hash=s?`#alarms?alarm=${encodeURIComponent(s)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.goWoId??"";window.location.hash=s?`#alarms?wo=${encodeURIComponent(s)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",o=>{const s=o.currentTarget.dataset.releaseOverride;s&&(V.delete(s),_())}),e.querySelectorAll("[data-zone-power]").forEach(o=>{o.addEventListener("click",s=>{s.stopPropagation();const p=o.dataset.zonePower,v=o.dataset.zoneVal==="true";if(!p)return;const m=S.filter(j=>j.logicalZoneId===p&&j.category==="lighting").map(j=>j.id),z=S.filter(j=>j.logicalZoneId===p&&j.category==="hvac").map(j=>j.id);m.length?ve(m,"lighting.power",v):z.length&&ve(z,"hvac.power",v)})}),e.querySelectorAll("[data-locate-device]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.locateDevice;s&&(E=s,A=!0,$=!1,_())})}),e.querySelectorAll("[data-go-alarms]").forEach(o=>{o.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(s)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(s)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(o=>{o.addEventListener("click",s=>{s.stopPropagation(),H=!H,H&&(M=!1,$=!1),_()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const o=S.filter(j=>j.connectivity==="online").length,s=W.filter(j=>j.status==="active").length,p=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 ｜ 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${o}/${S.length}（离线 ${S.length-o} 台）`,`待处理告警：${s} 条`,`人工覆盖中：${V.size} 台`].join(`
`),v=new Blob([p],{type:"text/plain;charset=utf-8;"}),m=URL.createObjectURL(v),z=document.createElement("a");z.href=m,z.download="pacom-daily-briefing.txt",z.click(),URL.revokeObjectURL(m)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(o=>{o.addEventListener("click",()=>{if(!E||!o.dataset.ctrlCmd)return;const s=o.dataset.ctrlVal??"",p=s==="true"?!0:s==="false"?!1:Number(s);ve([E],o.dataset.ctrlCmd,p)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",o=>{const s=o.currentTarget;!E||!s.dataset.ctrlSlider||ve([E],s.dataset.ctrlSlider,Number(s.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(o=>{o.addEventListener("click",()=>{const s=Array.from(G),p=o.dataset.batchVal??"",v=p==="true"?!0:p==="false"?!1:p;ve(s,o.dataset.batchCmd,v)})}),e.querySelectorAll("[data-ack-alarm]").forEach(o=>{o.addEventListener("click",async()=>{!o.dataset.ackAlarm||y.level!=="floor"||!f||(await t.acknowledgeAlarm(o.dataset.ackAlarm,"首页快速确认"),W=await t.listAlarms(y.floorId),_())})}),e.querySelectorAll("[data-canvas-layer]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.canvasLayer;s&&(h=s,_())})}),e.querySelectorAll("[data-zoom]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.zoom;s==="in"?oe=Math.min(2.6,Number((oe+.2).toFixed(2))):s==="out"?oe=Math.max(.6,Number((oe-.2).toFixed(2))):(oe=1,ce=0,me=0),$e()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",o=>{o.preventDefault();const s=y;if(s.level!=="building"&&s.level!=="floor")return;const p=T(s.buildingId),v=[...k?[{level:"building",projectId:s.projectId,buildingId:s.buildingId}]:[],...p.map(j=>({level:"floor",projectId:s.projectId,buildingId:s.buildingId,floorId:j.id}))],m=v.findIndex(j=>j.level==="building"?s.level==="building":j.level==="floor"&&s.level==="floor"&&j.floorId===s.floorId);if(m<0)return;const z=Math.max(0,Math.min(v.length-1,m+(o.deltaY>0?1:-1)));z!==m&&v[z]&&te(v[z])},{passive:!1});const d=e.querySelector('[data-role="canvas-stage"]');if(d&&!ne){let o=!1,s=!1,p=0,v=0,m=0,z=0;d.addEventListener("pointerdown",b=>{b.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(o=!0,s=!1,p=b.clientX,v=b.clientY,m=ce,z=me,d.classList.add("is-panning"),d.setPointerCapture?.(b.pointerId))}),d.addEventListener("pointermove",b=>{if(!o)return;const se=b.clientX-p,xe=b.clientY-v;(Math.abs(se)>3||Math.abs(xe)>3)&&(s=!0),ce=m+se,me=z+xe,$e()});const j=()=>{o&&(o=!1,d.classList.remove("is-panning"),!s&&($||M||H)&&($=!1,M=!1,H=!1,_()))};d.addEventListener("pointerup",j),d.addEventListener("pointercancel",j),d.addEventListener("wheel",b=>{b.preventDefault();const se=b.deltaY<0?.12:-.12;oe=Math.max(.6,Math.min(2.6,Number((oe+se).toFixed(2)))),$e()},{passive:!1}),d.addEventListener("dblclick",b=>{b.target?.closest("button")||(oe=1,ce=0,me=0,$e())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",o=>{o.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .pacom-briefing-pop")||($||M||H)&&($=!1,M=!1,H=!1,_())})}e.addEventListener("keydown",i=>{i.key==="Escape"&&(M||H||$||A)&&(M=!1,H=!1,$=!1,A=!1,_())}),await te(y,!0)}const jt=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,St='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Et='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',ut='<svg class="ic ws-info-icon" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M13 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/><path fill-rule="evenodd" d="M21.75 12a9.75 9.75 0 1 1-19.5 0 9.75 9.75 0 0 1 19.5 0Zm-1.5 0a8.25 8.25 0 1 0-16.5 0 8.25 8.25 0 0 0 16.5 0Zm-9 4.5V11a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0Z"/></svg>',Lt='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',Mt='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',Ve='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',mt='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',ht='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',Ct='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/></svg>',At='<svg class="au-sel-caret" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',zt='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',gt=P("x",16),vt=P("check",14),ft="https://docs.pacom.cn",bt="北京市:北京市;天津市:天津市;河北省:石家庄市,唐山市,秦皇岛市,邯郸市,邢台市,保定市,张家口市,承德市,沧州市,廊坊市,衡水市;山西省:太原市,大同市,阳泉市,长治市,晋城市,朔州市,晋中市,运城市,忻州市,临汾市,吕梁市;内蒙古自治区:呼和浩特市,包头市,乌海市,赤峰市,通辽市,鄂尔多斯市,呼伦贝尔市,巴彦淖尔市,乌兰察布市,兴安盟,锡林郭勒盟,阿拉善盟;辽宁省:沈阳市,大连市,鞍山市,抚顺市,本溪市,丹东市,锦州市,营口市,阜新市,辽阳市,盘锦市,铁岭市,朝阳市,葫芦岛市;吉林省:长春市,吉林市,四平市,辽源市,通化市,白山市,松原市,白城市,延边朝鲜族自治州;黑龙江省:哈尔滨市,齐齐哈尔市,鸡西市,鹤岗市,双鸭山市,大庆市,伊春市,佳木斯市,七台河市,牡丹江市,黑河市,绥化市,大兴安岭地区;上海市:上海市;江苏省:南京市,无锡市,徐州市,常州市,苏州市,南通市,连云港市,淮安市,盐城市,扬州市,镇江市,泰州市,宿迁市;浙江省:杭州市,宁波市,温州市,嘉兴市,湖州市,绍兴市,金华市,衢州市,舟山市,台州市,丽水市;安徽省:合肥市,芜湖市,蚌埠市,淮南市,马鞍山市,淮北市,铜陵市,安庆市,黄山市,滁州市,阜阳市,宿州市,六安市,亳州市,池州市,宣城市;福建省:福州市,厦门市,莆田市,三明市,泉州市,漳州市,南平市,龙岩市,宁德市;江西省:南昌市,景德镇市,萍乡市,九江市,新余市,鹰潭市,赣州市,吉安市,宜春市,抚州市,上饶市;山东省:济南市,青岛市,淄博市,枣庄市,东营市,烟台市,潍坊市,济宁市,泰安市,威海市,日照市,临沂市,德州市,聊城市,滨州市,菏泽市;河南省:郑州市,开封市,洛阳市,平顶山市,安阳市,鹤壁市,新乡市,焦作市,濮阳市,许昌市,漯河市,三门峡市,南阳市,商丘市,信阳市,周口市,驻马店市,济源市;湖北省:武汉市,黄石市,十堰市,宜昌市,襄阳市,鄂州市,荆门市,孝感市,荆州市,黄冈市,咸宁市,随州市,恩施土家族苗族自治州,仙桃市,潜江市,天门市,神农架林区;湖南省:长沙市,株洲市,湘潭市,衡阳市,邵阳市,岳阳市,常德市,张家界市,益阳市,郴州市,永州市,怀化市,娄底市,湘西土家族苗族自治州;广东省:广州市,韶关市,深圳市,珠海市,汕头市,佛山市,江门市,湛江市,茂名市,肇庆市,惠州市,梅州市,汕尾市,河源市,阳江市,清远市,东莞市,中山市,潮州市,揭阳市,云浮市;广西壮族自治区:南宁市,柳州市,桂林市,梧州市,北海市,防城港市,钦州市,贵港市,玉林市,百色市,贺州市,河池市,来宾市,崇左市;海南省:海口市,三亚市,三沙市,儋州市,五指山市,琼海市,文昌市,万宁市,东方市,定安县,屯昌县,澄迈县,临高县,白沙黎族自治县,昌江黎族自治县,乐东黎族自治县,陵水黎族自治县,保亭黎族苗族自治县,琼中黎族苗族自治县;重庆市:重庆市;四川省:成都市,自贡市,攀枝花市,泸州市,德阳市,绵阳市,广元市,遂宁市,内江市,乐山市,南充市,眉山市,宜宾市,广安市,达州市,雅安市,巴中市,资阳市,阿坝藏族羌族自治州,甘孜藏族自治州,凉山彝族自治州;贵州省:贵阳市,六盘水市,遵义市,安顺市,毕节市,铜仁市,黔西南布依族苗族自治州,黔东南苗族侗族自治州,黔南布依族苗族自治州;云南省:昆明市,曲靖市,玉溪市,保山市,昭通市,丽江市,普洱市,临沧市,楚雄彝族自治州,红河哈尼族彝族自治州,文山壮族苗族自治州,西双版纳傣族自治州,大理白族自治州,德宏傣族景颇族自治州,怒江傈僳族自治州,迪庆藏族自治州;西藏自治区:拉萨市,日喀则市,昌都市,林芝市,山南市,那曲市,阿里地区;陕西省:西安市,铜川市,宝鸡市,咸阳市,渭南市,延安市,汉中市,榆林市,安康市,商洛市;甘肃省:兰州市,嘉峪关市,金昌市,白银市,天水市,武威市,张掖市,平凉市,酒泉市,庆阳市,定西市,陇南市,临夏回族自治州,甘南藏族自治州;青海省:西宁市,海东市,海北藏族自治州,黄南藏族自治州,海南藏族自治州,果洛藏族自治州,玉树藏族自治州,海西蒙古族自治州;宁夏回族自治区:银川市,石嘴山市,吴忠市,固原市,中卫市;新疆维吾尔自治区:乌鲁木齐市,克拉玛依市,吐鲁番市,哈密市,昌吉回族自治州,博尔塔拉蒙古自治州,巴音郭楞蒙古自治州,阿克苏地区,克孜勒苏柯尔克孜自治州,喀什地区,和田地区,伊犁哈萨克自治州,塔城地区,阿勒泰地区,石河子市,阿拉尔市,图木舒克市,五家渠市,北屯市,铁门关市,双河市,可克达拉市,昆玉市,胡杨河市,新星市,白杨市;台湾省:台北市,新北市,桃园市,台中市,台南市,高雄市,基隆市,新竹市,嘉义市,新竹县,苗栗县,彰化县,南投县,云林县,嘉义县,屏东县,宜兰县,花莲县,台东县,澎湖县;香港特别行政区:香港特别行政区;澳门特别行政区:澳门特别行政区",yt=bt.split(";").map(e=>{const[t="",n=""]=e.split(":");return[t,n.split(",")]});function Ft(e){return yt.find(([t])=>t===e)?.[1]??[]}const xt=[["+852",8],["+853",8],["+65",8],["+886",9],["+44",10]];function $t(e){return Array.from(String(e??"")).length}function we(e){return String(e||"").replace(/[\uFF01-\uFF5E]/g,t=>String.fromCharCode(t.charCodeAt(0)-65248)).replace(/\u3000/g," ").trim()}function He(e){const t=we(e);if(t.length>254||/\s/.test(t))return!1;const n=t.split("@");if(n.length!==2)return!1;const[a,l]=n;if(!a||!l||a.length>64||!l.includes("."))return!1;const f=/^[\p{L}\p{N}!#$%&'*+/=?^_`{|}~-]+(?:\.[\p{L}\p{N}!#$%&'*+/=?^_`{|}~-]+)*$/u.test(a),g=l.split(".").every(L=>/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(L));return f&&g}function Pe(e){const t=we(e);if(!t)return"";if(t.includes("@"))return He(t)?"email":"bad";const n=t.replace(/[\s\-()]/g,"");if(/^1[3-9]\d{9}$/.test(n))return"cn";if(!/^\+[1-9]\d{7,14}$/.test(n)||n.startsWith("+1")&&!/^\+1\d{10}$/.test(n)||n.startsWith("+86")&&!/^\+861[3-9]\d{9}$/.test(n))return"bad";const a=xt.find(([l])=>n.startsWith(l));return a&&n.length-a[0].length!==a[1]?"bad":"phone"}function Pt(e){const t=we(e);if(!t)return"请输入有效的手机号码";const n=Pe(t);if(n==="cn"||n==="phone")return"";const a=t.replace(/[\s\-()]/g,"");return/^\d{8,10}$/.test(a)?"非中国大陆号码请包含国家或地区区号，如 +852 9123 4567。":"请输入有效的手机号码"}function Ot(e){const t=we(e);if(!t)return"请输入电子邮箱或手机号码";const n=Pe(t);if(n==="email"||n==="cn"||n==="phone")return"";if(t.includes("@"))return"请输入有效的电子邮箱";const a=t.replace(/[\s\-()]/g,"");return/^\d{8,10}$/.test(a)?"非中国大陆号码请包含国家或地区区号，如 +852 9123 4567。":"请输入有效的电子邮箱或手机号码"}function qt(e){const t=we(e);if(!t)return"";if(t.includes("@"))return He(t)?t.replace(/^([^@])[^@]*(@.+)$/,"$1•••$2"):"••••";const n=t.replace(/[\s\-()]/g,""),a=/^(?:(\+86|0086))?(1\d{10})$/.exec(n);return a?`${a[1]?"+86 ":""}${a[2].slice(0,3)} •••• ${a[2].slice(-4)}`:Pe(t)==="phone"?`${n.slice(0,4)} •••• ${n.slice(-4)}`:"••••"}function Bt(e){return e.replace(/\D/g,"").slice(0,9).replace(/(\d{3})(?=\d)/g,"$1 ")}function Rt(e){const t=we(e),n=t.replace(/[\s-]/g,"");return/^1[3-9]\d{9}$/.test(n)?`${n.slice(0,3)} ${n.slice(3,7)} ${n.slice(7)}`:t}const Tt=["至少 8 个字符","至少一个字母（a-z 或 A-Z）","至少一个数字（0-9）","至少一个符号，如 ! @ # $ %"],wt="!@#$%^&*()_-+={}[]|\\:;\"'<>,.?/~`";function Nt(e){if(!e)return"请设置密码";const t=$t(e);if(t<8)return"密码至少需要 8 个字符";if(t>64)return"密码不能超过 64 个字符";const n=e.normalize("NFKC"),a=/[A-Za-z]/.test(n),l=/[0-9]/.test(n),f=Array.from(e).some(g=>wt.includes(g));return!a||!l||!f?"密码需要包含字母、数字和英文符号":""}function Dt(){return`
    <footer class="au-foot" aria-label="版权、法律与联系信息">
      <span class="au-copyright">© 2026 广州天环智能技术有限公司</span>
      <div class="au-foot-links">
        <a href="${ft}" target="_blank" rel="noopener noreferrer">隐私和法律</a>
        <button type="button" data-act="open-contact">联系我们</button>
      </div>
    </footer>
  `}function Vt(e){return`
    <div class="au-account-scrim" data-role="modal-scrim">
      <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
        <div class="dh">
          <h2 id="au-dlg-title">联系我们</h2>
          <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${gt}</button>
        </div>
        <div class="db">
          <p class="au-dlead">如需账户协助、机构开通或现场部署技术支持，请通过官方支持邮箱联系 PACOM 团队。</p>
          <div class="au-contact-card">
            <div class="au-contact-main">
              <span class="au-contact-icon" aria-hidden="true">${mt}</span>
              <div class="au-contact-meta">
                <span class="au-contact-label">支持邮箱</span>
                <span class="au-contact-value">support@pacom.cn</span>
              </div>
            </div>
            <button type="button" class="au-copy-btn " data-act="copy-support" aria-label="复制支持邮箱">
              ${`${Ve}<span>复制</span>`}
            </button>
          </div>
          <p class="au-contact-note">工作日 09:00–18:00 响应</p>
        </div>
        <div class="df">
          <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
          <a class="au-dlg-btn au-dlg-btn--primary" href="mailto:support@pacom.cn">${ht}<span>发送邮件</span></a>
        </div>
      </section>
    </div>
  `}function Ht(e,t,n){const a=n.length>1?n.map(l=>`<span class="au-info-l au-info-li">${w(l)}</span>`).join(""):w(n[0]??"");return`
    <span class="au-field-info-wrap">
      <button type="button" class="au-field-info-trigger" data-info-trigger="${w(e)}" aria-label="${w(t)}" aria-expanded="false" aria-haspopup="dialog" aria-controls="${w(e)}">
        ${ut}
      </button>
      <span id="${w(e)}" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="${w(t)}" hidden>
        <span class="ws-info-text">${a}</span>
      </span>
    </span>
  `}function _t(){let e=null,t=null,n=null,a=null;function l(){if(!e||!t||t.hidden)return;if(!document.contains(e)){g(!1);return}const F=e.getBoundingClientRect(),k=t.getBoundingClientRect(),R=12,y=4;let I="top",$=F.top-k.height-y;$<R&&(I="bottom",$=F.bottom+y);let M=F.left+F.width/2-k.width/2;M=Math.max(R,Math.min(M,window.innerWidth-k.width-R)),t.dataset.side=I,t.style.top=`${Math.round($)}px`,t.style.left=`${Math.round(M)}px`}function f(){t&&(n&&document.contains(n)?a&&a.parentNode===n?n.insertBefore(t,a):n.appendChild(t):t.parentNode===document.body&&t.remove(),n=null,a=null)}function g(F=!1){const k=e;e&&e.setAttribute("aria-expanded","false"),t&&(t.hidden=!0,f()),e=null,t=null,F&&k&&document.contains(k)&&k.focus({preventScroll:!0})}function L(F){const k=F.dataset.infoTrigger;if(!k)return;const R=document.getElementById(k);if(R){if(e===F&&!R.hidden){g(!1);return}g(!1),e=F,t=R,n=R.parentNode,a=R.nextSibling,R.parentNode!==document.body&&document.body.appendChild(R),F.setAttribute("aria-expanded","true"),R.hidden=!1,l()}}function O(F){if(!t||t.hidden)return;const k=F.target;k&&(t.contains(k)||e?.contains(k))||g(!1)}function B(F){F.key==="Escape"&&t&&!t.hidden&&(F.preventDefault(),F.stopPropagation(),g(!0))}function N(){l()}return document.addEventListener("pointerdown",O,!0),document.addEventListener("keydown",B,!0),window.addEventListener("resize",N),window.addEventListener("scroll",N,!0),{bind(F){F.querySelectorAll("[data-info-trigger]").forEach(k=>{k.dataset.infoBound!=="1"&&(k.dataset.infoBound="1",k.addEventListener("click",R=>{R.preventDefault(),L(k)}))})},close:g,isOpen:()=>!!(t&&!t.hidden),destroy(){g(!1),document.removeEventListener("pointerdown",O,!0),document.removeEventListener("keydown",B,!0),window.removeEventListener("resize",N),window.removeEventListener("scroll",N,!0)}}}function Ut(e){e.querySelectorAll("[data-space-resize]").forEach(t=>{t.dataset.resizeBound!=="1"&&(t.dataset.resizeBound="1",t.addEventListener("pointerdown",n=>{if(t.disabled)return;const a=t.dataset.spaceResize,l=a?document.getElementById(a):null;if(!(l instanceof HTMLTextAreaElement)||l.disabled)return;n.preventDefault();const f=n.clientY,g=l.getBoundingClientRect().height,L=parseFloat(getComputedStyle(l).minHeight)||72;try{t.setPointerCapture(n.pointerId)}catch{}const O=N=>{l.style.height=`${Math.max(L,Math.round(g+N.clientY-f))}px`},B=()=>{t.removeEventListener("pointermove",O),t.removeEventListener("pointerup",B),t.removeEventListener("pointercancel",B)};t.addEventListener("pointermove",O),t.addEventListener("pointerup",B),t.addEventListener("pointercancel",B)}),t.addEventListener("keydown",n=>{if(t.disabled||n.key!=="ArrowUp"&&n.key!=="ArrowDown")return;const a=t.dataset.spaceResize,l=a?document.getElementById(a):null;if(!(l instanceof HTMLTextAreaElement)||l.disabled)return;n.preventDefault();const f=parseFloat(getComputedStyle(l).minHeight)||72,g=Math.max(f,Math.round(l.getBoundingClientRect().height+(n.key==="ArrowDown"?16:-16)));l.style.height=`${g}px`}))})}function Wt(e){const t=e.querySelector(".au-split"),n=e.querySelector(".au-left");if(!t||!n)return()=>{};const a=()=>{const g=n.scrollHeight-n.clientHeight-n.scrollTop;t.classList.toggle("has-scroll-more",g>6)};n.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a);const l=typeof ResizeObserver<"u"?new ResizeObserver(a):null;if(l){l.observe(n);const g=n.querySelector(".au-center");g&&l.observe(g)}a();const f=window.requestAnimationFrame(a);return()=>{window.cancelAnimationFrame(f),n.removeEventListener("scroll",a),window.removeEventListener("resize",a),l?.disconnect()}}function Zt(e,t="support@pacom.cn"){const n=e.querySelector('[data-act="copy-support"]');if(!n)return()=>{};let a=null;const l=()=>{navigator.clipboard?.writeText&&navigator.clipboard.writeText(t).catch(()=>{}),n.classList.add("is-copied"),n.innerHTML=`${vt}<span>已复制</span>`,a!==null&&window.clearTimeout(a),a=window.setTimeout(()=>{a=null,document.contains(n)&&(n.classList.remove("is-copied"),n.innerHTML=`${Ve}<span>复制</span>`)},1800)};return n.addEventListener("click",l),()=>{n.removeEventListener("click",l),a!==null&&(window.clearTimeout(a),a=null)}}function Kt(e){if(!e)return()=>{};const t='a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',n=a=>{if(a.key!=="Tab")return;const l=Array.from(e.querySelectorAll(t)).filter(O=>!O.closest("[hidden]")&&O.offsetParent!==null);if(l.length===0){a.preventDefault(),e.focus();return}const f=l[0],g=l[l.length-1],L=document.activeElement;a.shiftKey?(!L||L===f||!e.contains(L))&&(a.preventDefault(),g.focus()):(!L||L===g||!e.contains(L))&&(a.preventDefault(),f.focus())};return e.addEventListener("keydown",n),()=>{e.removeEventListener("keydown",n)}}export{Lt as A,Ve as B,gt as C,Rt as D,q as E,He as F,$t as G,Ct as H,Mt as I,ft as J,Ft as K,zt as L,At as M,Ut as N,yt as O,jt as P,Fe as a,De as b,It as c,_t as d,w as e,Dt as f,Ne as g,Wt as h,Pe as i,St as j,Zt as k,qt as l,kt as m,we as n,Et as o,Nt as p,Pt as q,P as r,ze as s,Kt as t,Vt as u,Ot as v,Ht as w,Tt as x,Bt as y,vt as z};
