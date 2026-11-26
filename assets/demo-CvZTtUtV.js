import{r as J,E as Q,a as ea,b as aa,g as ta,s as Ue,m as Ha,c as Va,D as Za,d as fa}from"./login-view-DkyDXfRr.js";import{R as ha,a as Ze}from"./contracts-BgYMWe4E.js";const oa=["org_admin","project_admin","operator","space_user"],Wa=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function G(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function la(a){return a?a.slice(0,16).replace("T"," "):"—"}function Ke(a){return a==="deployment"?"系统部署":"应用设置"}async function Ga(a,p,$,oe,C){const A=$.scope.canManageMembers,M=$.scope.canGrantOverride,z=$.scope.canViewAuditLogs,B=M||$.role==="operator",ce=$.role!=="space_user";let _="profile",de=ce?await p.listOrgMembers().catch(()=>[]):[],ge=B?await p.listOverrides().catch(()=>[]):[],Z=z?await p.listAuditLogs().catch(()=>[]):[],re="",K="all",ae="all",R="all",te=!1,Y=!1,se=$.displayName,pe=$.role==="org_admin"?"机构负责人":$.role==="project_admin"?"项目负责人":$.role==="operator"?"运行值守工程师":"园区空间用户",I="138-0013-8072",le="",O="";const be={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function ie(){const[E,i,t,r]=await Promise.all([p.getSession(),ce?p.listOrgMembers().catch(()=>[]):Promise.resolve([]),B?p.listOverrides().catch(()=>[]):Promise.resolve([]),z?p.listAuditLogs().catch(()=>[]):Promise.resolve([])]);de=i,ge=t,Z=r,E&&($=E,oe(E)),q()}function U(){const E=["profile"];return ce&&E.push("members","roles"),B&&E.push("overrides"),z&&E.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${E.map(i=>{const t=be[i],r=i==="overrides"?ge.filter(S=>S.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${_===i}" data-anav="${i}">
                  ${J(t.icon,16)}
                  <span>${t.label}</span>
                  ${r>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${r}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function F(){return _==="members"&&A?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':_==="overrides"&&M?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':_==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 · SR 6.1</span>':""}function P(){const E=$.scope.activeOverrides.filter(t=>t.status==="active"),i=$.scope.allowedZoneIds?.length?`授权 ${$.scope.allowedFloorIds.length} 个楼层 · ${$.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${$.scope.allowedProjectIds.length} 个项目 · ${$.scope.allowedBuildingIds.length} 栋楼宇 · ${$.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${G($.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${G($.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${G(se)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${G(pe)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${G(I)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${G(i)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${G(ha[$.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${G($.roleLabel)}</span>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">当前写权限状态</span>
              <span class="pacom-setting-desc">写权限独立授予，绝不隐含在只读访问中</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <span class="pacom-badge ${$.scope.canControlDevices?"pacom-badge--online":"pacom-badge--neutral"}">设备控制：${$.scope.canControlDevices?"允许":"无"}</span>
              <span class="pacom-badge ${$.scope.canEditSettings?"pacom-badge--online":"pacom-badge--warning"}">应用设置：${$.scope.canEditSettings?"可改":"只读"}</span>
              <span class="pacom-badge ${$.scope.canEditDeployment?"pacom-badge--online":"pacom-badge--warning"}">系统部署：${$.scope.canEditDeployment?"可改":"只读"}</span>
            </div>
          </div>
          ${E.length>0?E.map(t=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${G(Ke(t.module))}（${t.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${G(t.approvedBy)} · 到期时间：${G(la(t.expiresAt))} · 事由：${G(t.reason)}</span>
                      </div>
                      <span class="pacom-badge pacom-badge--accent">生效中</span>
                    </div>`).join(""):""}
        </div>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">会话安全</h2>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">退出当前账号</span>
              <span class="pacom-setting-desc">退出后清除当前登录会话并返回登录页</span>
            </div>
            <div class="pacom-setting-control">
              <button type="button" class="pacom-btn pacom-btn--danger" data-role="logout-btn">退出登录</button>
            </div>
          </div>
        </div>
      </section>
    `}function j(){const E=re.trim().toLowerCase(),i=de.filter(t=>K!=="all"&&t.role!==K?!1:E?`${t.displayName} ${t.email} ${t.roleLabel} ${t.scopeSummary}`.toLowerCase().includes(E):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${G(re)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${K==="all"?"selected":""}>全部角色（${de.length}）</option>
            ${oa.map(t=>`<option value="${t}" ${K===t?"selected":""}>${G(Ze[t])}</option>`).join("")}
          </select>
        </div>
        <span class="pacom-row-sub">显示 ${i.length} / ${de.length} 人</span>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead>
              <tr>
                <th>成员</th>
                <th>角色</th>
                <th>空间授权范围</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              ${i.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':i.map(t=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${G(t.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${G(t.displayName)}</div>
                                ${A?`<div class="pacom-row-sub">${G(t.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${t.role==="org_admin"||t.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${G(t.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${G(t.scopeSummary)}</span></td>
                          <td>
                            <span class="pacom-badge ${t.status==="active"?"pacom-badge--online":"pacom-badge--neutral"}">
                              ${t.status==="active"?"正常":t.status==="invited"?"邀请中":"已停用"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function X(){return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">四级标准角色说明</h2>
          <span class="pacom-row-sub">IEC 62443-3-3 SR 2.1 RE 2 · 最小权限与职责分离</span>
        </div>
        <div class="pacom-settings-card">
          ${oa.map(E=>{const i=de.filter(t=>t.role===E).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${G(Ze[E])}</span>
                  <span class="pacom-setting-desc">${G(ha[E])}</span>
                </div>
                <span class="pacom-badge pacom-badge--neutral">${i} 人</span>
              </div>`}).join("")}
        </div>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">模块可见性与操作权限矩阵</h2>
          <span class="pacom-row-sub">写权限必须显式授予，绝不隐含在只读权限中</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead>
                <tr>
                  <th>功能模块</th>
                  <th>机构管理员</th>
                  <th>项目管理员</th>
                  <th>运营人员</th>
                  <th>空间用户</th>
                </tr>
              </thead>
              <tbody>
                ${Wa.map(E=>`
                  <tr>
                    <td><strong style="font-weight:450;">${G(E.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${E.org_admin.tone}">${G(E.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${E.project_admin.tone}">${G(E.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${E.operator.tone}">${G(E.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${E.space_user.tone}">${G(E.space_user.text)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function ye(){return`
      <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="限时提权统计">
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">当前生效提权</span>
          <div class="pacom-kpi-value">${ge.filter(i=>i.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${ge.length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">每条审批与收回同步写入审计日志</span>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">限时提权审批记录</h2>
          <span class="pacom-row-sub">${M?"可为运营人员开启「系统部署」或「应用设置」限时修改权":"展示管理员为你授予的临时提权记录"}</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead>
                <tr>
                  <th>运营人员</th>
                  <th>提权模块</th>
                  <th>有效期与到期时间</th>
                  <th>审批人与事由</th>
                  <th>状态</th>
                  ${M?'<th style="text-align:right;">操作</th>':""}
                </tr>
              </thead>
              <tbody>
                ${ge.length===0?`<tr><td colspan="${M?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${M?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:ge.map(i=>`
                          <tr>
                            <td><strong style="font-weight:450;">${G(i.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${G(Ke(i.module))}</span></td>
                            <td>
                              <div>${i.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${G(la(i.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${G(i.approvedBy)}</div>
                              <div class="pacom-row-sub">${G(i.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${i.status==="active"?"pacom-badge--online":i.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${i.status==="active"?"生效中":i.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${M?`<td style="text-align:right;">
                                    ${i.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${G(i.id)}">提前收回</button>`:`<span class="pacom-row-sub">${i.revokedBy?`${G(i.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function ve(){const E=Z.filter(i=>{if(ae==="success"&&i.result!=="success"||ae==="denied"&&i.result==="success")return!1;if(R!=="all"){const t=`${i.action} ${i.target}`.toLowerCase();if(R==="control"&&!t.includes("control")&&!t.includes("scene")||R==="alarm"&&!t.includes("alarm")&&!t.includes("work")||R==="deploy"&&!t.includes("deploy")&&!t.includes("plan")&&!t.includes("hardware")&&!t.includes("project")&&!t.includes("building")&&!t.includes("floor")&&!t.includes("zone")||R==="settings"&&!t.includes("settings")||R==="override"&&!t.includes("override"))return!1}return!0});return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
            <option value="all" ${R==="all"?"selected":""}>全部操作类别</option>
            <option value="override" ${R==="override"?"selected":""}>限时提权审批</option>
            <option value="control" ${R==="control"?"selected":""}>设备控制与场景</option>
            <option value="alarm" ${R==="alarm"?"selected":""}>告警与工单处置</option>
            <option value="deploy" ${R==="deploy"?"selected":""}>系统部署与空间</option>
            <option value="settings" ${R==="settings"?"selected":""}>应用设置变更</option>
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="按执行结果筛选">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${ae==="all"}" data-audit-filter="all">全部（${Z.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${ae==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${ae==="denied"}" data-audit-filter="denied">已拦截</button>
          </div>
        </div>
        <span class="pacom-row-sub">共 ${E.length} 条只读记录</span>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead>
              <tr>
                <th>操作行为</th>
                <th>目标对象</th>
                <th>操作人与角色</th>
                <th>时间</th>
                <th style="text-align:right;">结果</th>
              </tr>
            </thead>
            <tbody>
              ${E.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':E.map(i=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${G(i.action)}</div>
                            ${i.detail?`<div class="pacom-row-sub">${G(i.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${G(i.target)}</code></td>
                          <td>
                            <div>${G(i.actor)}</div>
                            <div class="pacom-row-sub">${G(Ze[i.role]??i.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${G(la(i.at))}</span></td>
                          <td style="text-align:right;">
                            <span class="pacom-badge ${i.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                              ${i.result==="success"?"成功":"已拦截"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function v(){const E=[];if(te&&A){const i=$.role==="org_admin"?oa:["project_admin","operator","space_user"];E.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="邀请成员">
          <form class="dep-modal-card" data-role="invite-form" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">邀请新成员</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">成员电子邮箱（唯一登录账号）</span>
                <input class="pacom-input" name="email" type="email" placeholder="colleague@gzlab.ac.cn" required />
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分配角色</span>
                <select class="pacom-select" name="role">
                  ${i.map(t=>`<option value="${t}">${G(Ze[t])}</option>`).join("")}
                </select>
              </label>
              <span class="pacom-row-sub">成员接受邀请后将按所选角色与空间范围自动生效，禁止多人共用账号。</span>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">发送邀请</button>
              </div>
            </div>
          </form>
        </div>`)}if(Y&&M){const i=de.filter(t=>t.role==="operator");E.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="授予限时提权">
          <form class="dep-modal-card" data-role="grant-override-form" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">授予运营人员限时提权（SR 2.1 RE 3）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">目标运营人员</span>
                <select class="pacom-select" name="targetUserId" required>
                  ${i.length===0?'<option value="">暂无运营人员</option>':i.map(t=>`<option value="${G(t.userId)}">${G(t.displayName)}（${G(t.email)}）</option>`).join("")}
                </select>
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">提权模块</span>
                  <select class="pacom-select" name="module">
                    <option value="deployment">系统部署（修改权限）</option>
                    <option value="settings">应用设置（修改权限）</option>
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">有效期（到期自动收回）</span>
                  <select class="pacom-select" name="durationHours">
                    <option value="2">2 小时</option>
                    <option value="8" selected>8 小时</option>
                    <option value="24">24 小时</option>
                  </select>
                </label>
              </div>
              <label class="dep-field">
                <span class="dep-field-label">审批事由（必填，写入审计日志）</span>
                <input class="pacom-input" name="reason" placeholder="例如：E栋 7F 新装照明回路调试与设备标记" required />
              </label>
            </div>
            <div class="dep-modal-foot">
              <span class="pacom-row-sub">审批人：${G($.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${i.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return E.join("")}function q(){const E=be[_],i=F();a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${G($.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${U()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${i?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${E.label}</h2>
                  <p class="pacom-unified-subtitle">${E.subtitle}</p>
                </div>
                ${i?`<div class="pacom-unified-head-actions">${i}</div>`:""}
              </div>
              ${le?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${G(le)}</span></div>`:""}
              ${O?`<div class="pacom-alert-banner">${G(O)}</div>`:""}
              ${_==="profile"?P():_==="members"?j():_==="roles"?X():_==="overrides"?ye():ve()}
            </div>
          </div>
        </div>
      </div>
      ${v()}
    `,V()}function V(){a.querySelectorAll("[data-anav]").forEach(i=>{i.addEventListener("click",()=>{_=i.dataset.anav??"profile",le="",O="",q()})}),a.querySelector('[data-role="profile-form"]')?.addEventListener("submit",i=>{i.preventDefault();const t=new FormData(i.currentTarget);se=String(t.get("displayName")??"").trim()||$.displayName,pe=String(t.get("jobTitle")??"").trim()||pe,I=String(t.get("phone")??"").trim()||I,le=`已保存个人资料：${se}（${pe}）· ${I}`,q()}),a.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await p.logout(),window.location.hash="#login",C()}),a.querySelector("[data-open-invite]")?.addEventListener("click",()=>{te=!0,Y=!1,q()}),a.querySelector("[data-open-grant]")?.addEventListener("click",()=>{Y=!0,te=!1,q()}),a.querySelectorAll("[data-close-modals]").forEach(i=>{i.addEventListener("click",()=>{te=!1,Y=!1,q()})}),a.querySelectorAll("[data-modal-scrim]").forEach(i=>{i.addEventListener("click",t=>{t.target===i&&(te=!1,Y=!1,q())})}),a.querySelector("[data-member-search]")?.addEventListener("input",i=>{const t=i.currentTarget,r=t.selectionStart??t.value.length;re=t.value,q();const S=a.querySelector("[data-member-search]");S&&(S.focus(),S.setSelectionRange(r,r))}),a.querySelector("[data-role-filter]")?.addEventListener("change",i=>{K=i.currentTarget.value,q()}),a.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async i=>{i.preventDefault(),O="";const t=new FormData(i.currentTarget);try{const r=await p.inviteOrgMember(String(t.get("email")??""),String(t.get("role")));te=!1,le=`已向 ${r.email} 发送「${r.roleLabel}」邀请。`,await ie()}catch(r){O=r instanceof Error?r.message:String(r),q()}}),a.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async i=>{i.preventDefault(),O="";const t=new FormData(i.currentTarget);try{const r=await p.grantOverride({targetUserId:String(t.get("targetUserId")??""),module:String(t.get("module")??"deployment"),durationHours:Number(t.get("durationHours")??8),reason:String(t.get("reason")??"")});Y=!1,le=`已为「${r.targetUserName}」开启「${Ke(r.module)}」${r.durationHours} 小时限时修改权，到期自动收回。`,await ie()}catch(r){O=r instanceof Error?r.message:String(r),q()}}),a.querySelectorAll("[data-revoke-override]").forEach(i=>{i.addEventListener("click",async()=>{const t=i.dataset.revokeOverride;if(t){O="";try{const r=await p.revokeOverride(t);le=`已提前收回「${r.targetUserName}」的「${Ke(r.module)}」限时修改权。`,await ie()}catch(r){O=r instanceof Error?r.message:String(r),q()}}})}),a.querySelectorAll("[data-audit-filter]").forEach(i=>{i.addEventListener("click",()=>{ae=i.dataset.auditFilter??"all",q()})}),a.querySelector("[data-audit-cat]")?.addEventListener("change",i=>{R=i.currentTarget.value??"all",q()})}q()}const Ne={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Ka={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Ya={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Xa(a){const p=`${a.title} ${a.message}`.toLowerCase();return p.includes("离线")||p.includes("modbus")||p.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":p.includes("co₂")||p.includes("co2")||p.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Ja(a){return a.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:a.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function ia(a){const p=`${a.title} ${a.message}`.toLowerCase();return p.includes("离线")||p.includes("vav")||a.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:p.includes("co₂")||p.includes("co2")||a.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function Qa(a,p,$){const oe=new URLSearchParams(window.location.hash.split("?")[1]??""),C=oe.get("alarm"),A=oe.get("wo");let M=await p.getSpatialTree(),z=ta(),B=!1,ce="",_=[],de=[],ge=[],Z=A?"workorders":"alarms",re="all",K="all",ae="all",R="impact",te=!1,Y="",se=C,pe=A,I=null,le=null,O="resolved";const be=new Set,ie=new Map,U=new Map,F=new Map,P=new Map;let j="",X="";function ye(E){const i=P.get(E.id);if(i)return i;const t=E.id.match(/(\d+)$/),r=`WO-2026-${t?t[1]:E.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,S={estCost:"¥ 450",actualCost:E.status==="closed"?"¥ 380":"--",cmmsNo:r,assigneeGroup:"暖通运维组",tasks:[{id:`${E.id}-t1`,label:"核查设备供电与现场指示灯状态",done:E.status!=="open"},{id:`${E.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:E.status==="resolved"||E.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:E.createdAt?E.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${r}）`}]};return P.set(E.id,S),S}async function ve(){[_,de,ge]=await Promise.all([p.listAlarms(Q.floorId),p.listWorkOrders(Q.floorId),p.getFloorDevices(Q.floorId).catch(()=>[])]),de.forEach(E=>ye(E)),V()}function v(E){if(!E)return{name:"楼层通用",zone:"E7F",dev:null};const i=ge.find(t=>t.id===E)??null;return i?{name:i.name,zone:(i.logicalZoneId?Ya[i.logicalZoneId]:void 0)??"E7F",dev:i}:{name:E,zone:"E7F",dev:null}}function q(E){const i=v(E.deviceId).dev;i&&i.connectivity==="offline"?F.set(E.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${i.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):F.set(E.id,{verdict:"pass",summary:`自检通过（PASS）：「${i?.name??E.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),se=E.id,V()}function V(){const E=_.filter(c=>c.status==="active"&&!ie.has(c.id)),i=de.filter(c=>!ye(c).cancelled&&(c.status==="open"||c.status==="assigned"||c.status==="in_progress")),t=_.filter(c=>c.status!=="active").length+U.size,r=0,S=ie.size,W=Y.trim().toLowerCase(),Se=_.filter(c=>{const u=ie.has(c.id);if(re==="snoozed"){if(!u)return!1}else if(re==="active"){if(c.status!=="active"||u)return!1}else if(re==="acknowledged"){if(c.status!=="acknowledged")return!1}else if(u)return!1;if(ae!=="all"&&c.severity!==ae)return!1;if(!W)return!0;const k=v(c.deviceId);return`${c.title} ${c.message} ${k.name} ${k.zone} ${c.deviceId}`.toLowerCase().includes(W)}),Le=new Map;for(const c of Se){const u=`${c.title} ${c.message}`.toLowerCase(),k=u.includes("离线")||u.includes("modbus")||u.includes("通信"),D=te?k?"root-gateway-modbus":c.deviceId:c.id,T=k?"根因：E7F 主控网关通信链路":`根因：${v(c.deviceId).name}`,qe=Le.get(D)??{rootLabel:T,items:[]};qe.items.push(c),Le.set(D,qe)}const Ie=Array.from(Le.values());R==="impact"&&Ie.sort((c,u)=>ia(u.items[0]).costYuan-ia(c.items[0]).costYuan);const ze=de.filter(c=>{const u=ye(c);if(K==="cancelled"){if(!u.cancelled)return!1}else if(u.cancelled||K==="open"&&(c.status==="resolved"||c.status==="closed")||K==="resolved"&&c.status!=="resolved"||K==="closed"&&c.status!=="closed")return!1;if(!W)return!0;const k=v(c.deviceId);return`${c.title} ${c.description} ${c.id} ${u.cmmsNo} ${k.name}`.toLowerCase().includes(W)});a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${ea({tree:M,session:$,scope:z,activeAlarmCount:E.length,isOpen:B,searchKeyword:ce})}
            </div>

            <div class="pacom-header-meta">
              ${Z==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${te}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${$.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${$.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${J("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${Z==="alarms"}" data-main-tab="alarms">实时告警（${_.length-S}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${Z==="workorders"}" data-main-tab="workorders">运维工单（${de.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${Z==="alarms"&&re==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${E.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${Z==="workorders"&&K==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${i.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${Z==="alarms"&&re==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${t}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${r}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${j?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${j}</span></div>`:""}
          ${X?`<div class="pacom-alert-banner">${X}</div>`:""}

          ${Z==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${Y}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${ae==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${ae==="critical"?"selected":""}>严重</option>
                      <option value="major" ${ae==="major"?"selected":""}>重要</option>
                      <option value="minor" ${ae==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${R==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${R==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${re==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${re==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${re==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${re==="snoozed"}" data-status-pill="snoozed">已忽略（${S}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${be.size>0&&$.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${be.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${Ie.length} 项</span>
                  </div>
                </div>
                ${Ie.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
                    <div class="pacom-table-wrap">
                      <table class="pacom-table">
                        <thead>
                          <tr>
                            <th style="width:36px;"></th>
                            <th>级别</th>
                            <th>告警事项</th>
                            <th>设备与空间</th>
                            <th>影响估算</th>
                            <th>持续时长</th>
                            <th>状态</th>
                            <th style="text-align:right;">操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${Ie.map(c=>{const u=c.items[0],k=Ka[u.severity]??{label:u.severity,cls:"pacom-badge--neutral"},D=v(u.deviceId),T=Ja(u),qe=ia(u),De=se===u.id,Ae=ie.get(u.id),fe=!!Ae,He=be.has(u.id),Ce=F.get(u.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${u.id}" data-check-alarm="${u.id}" ${He?"checked":""} ${u.status!=="active"||fe?"disabled":""} aria-label="选择 ${u.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${k.cls}">${k.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${u.title}</span>
                                      ${te?`<span class="pacom-badge pacom-badge--accent">${c.rootLabel}${c.items.length>1?` · 影响 ${c.items.length} 项`:""}</span>`:""}
                                      ${Ce?`<span class="pacom-badge ${Ce.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${Ce.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${u.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${D.name}</div>
                                    <div class="pacom-row-sub">${D.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${qe.costLabel}</div>
                                    <div class="pacom-row-sub">${qe.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${T.duration}</div>
                                    <div class="pacom-row-sub" style="color:${T.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${T.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${fe?"pacom-badge--neutral":u.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${fe?`忽略 ${Ae?.duration}`:u.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${fe?`<button class="pacom-btn" data-unsnooze="${u.id}">恢复监控</button>`:`
                                            ${u.status==="active"?`<button class="pacom-btn" data-mark-actioned="${u.id}" ${$.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${u.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${u.id}" ${$.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${u.id}">${De?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${De?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${Xa(u)}
                                            </div>
                                            ${Ae?`<div class="pacom-info-banner">忽略周期：${Ae.duration} · 原因备注：${Ae.reason}</div>`:""}
                                            ${Ce?`
                                                <div class="pacom-banner ${Ce.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${Ce.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${Ce.steps.map(H=>`<span>${H}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${u.id}</code> · 设备编号 <code>${u.deviceId}</code> · 关联工单 ${u.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${u.id}">单机自检（FTT）</button>
                                              ${!fe&&u.status==="active"?`<button class="pacom-btn" data-open-snooze="${u.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${u.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${u.deviceId}">定位设备 →</button>
                                            </div>
                                            ${I===u.id?`
                                                <form data-snooze-form="${u.id}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                                                  <div style="display:flex; gap:6px;">
                                                    <select class="pacom-select" name="duration" style="height:30px;">
                                                      <option value="24h">忽略 24 小时</option>
                                                      <option value="3d">忽略 3 天</option>
                                                      <option value="7d">忽略 7 天</option>
                                                    </select>
                                                    <input class="pacom-input" name="reason" style="height:30px;" placeholder="填写忽略原因" required />
                                                  </div>
                                                  <div style="display:flex; justify-content:flex-end; gap:6px;">
                                                    <button class="pacom-btn pacom-btn--ghost" type="button" data-cancel-snooze="1" style="height:28px;">取消</button>
                                                    <button class="pacom-btn pacom-btn--primary" type="submit" style="height:28px;">确认忽略</button>
                                                  </div>
                                                </form>`:""}
                                          </div>
                                        </div>
                                      </td>
                                    </tr>`:""}`}).join("")}
                        </tbody>
                      </table>
                    </div>`}
              </section>`:`
              ${(()=>{const c=pe?de.find(u=>u.id===pe)??null:null;if(c){const u=v(c.deviceId),k=ye(c),D=!!(k.cancelled||c.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${c.id}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${c.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${k.cmmsNo}</span>
                        ${k.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${c.id}" data-wo-status="${c.id}" aria-label="更新工单状态" ${D?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(T=>`<option value="${T}" ${c.status===T?"selected":""}>${Ne[T]}</option>`).join("")}
                          <option value="cancelled" ${k.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${le===c.id?`
                        <form data-close-wo-form="${c.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${Ne[O]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${k.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${k.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${k.actualCost==="--"?"":k.actualCost}" />
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit">保存并更新状态</button>
                          </div>
                        </form>`:""}
                    <div class="pacom-wo-workbench">
                      <div style="display:flex; flex-direction:column; gap:14px;">
                        <div class="pacom-card" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:500;">工单描述与现场检查任务清单</strong>
                          <div class="pacom-row-sub">${c.description}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${k.tasks.map(T=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${T.id}" data-wo-task="${c.id}" data-task-id="${T.id}" ${T.done?"checked":""} ${D?"disabled":""} />
                                    <span>${T.label}</span>
                                  </span>
                                  ${T.unit?`<span class="pacom-row-sub">实测：${T.reading??"--"} ${T.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${k.history.map(T=>`<span>• <span class="pacom-row-sub">${T.at}</span> — ${T.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${c.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${k.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${u.name}（${u.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${k.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${k.estCost} / 实际 ${k.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${k.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${k.solution??"待完单填写"}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${c.deviceId}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${c.deviceId}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${Y}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${K==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${K==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${K==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${K==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${K==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${ze.length} 条工单</span>
                  </div>
                  ${ze.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>工单事项</th>
                              <th>关联设备与空间</th>
                              <th>CMMS 单号 / 责任组</th>
                              <th style="text-align:right;">状态流转与详情</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${ze.map(u=>{const k=v(u.deviceId),D=ye(u),T=!!(D.cancelled||u.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${u.title}</span>
                                        ${D.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${u.description} · <code>${u.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${k.name}</div>
                                      <div class="pacom-row-sub">${k.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${D.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${D.assigneeGroup} · 预估 ${D.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${u.id}" data-wo-status="${u.id}" aria-label="更新工单状态" ${T?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(qe=>`<option value="${qe}" ${u.status===qe?"selected":""}>${Ne[qe]}</option>`).join("")}
                                          <option value="cancelled" ${D.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${u.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${le===u.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${u.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${Ne[O]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${D.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${D.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${D.actualCost==="--"?"":D.actualCost}" />
                                            </div>
                                            <div style="display:flex; justify-content:flex-end; gap:8px;">
                                              <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                                              <button class="pacom-btn pacom-btn--primary" type="submit">保存并更新状态</button>
                                            </div>
                                          </form>
                                        </td>
                                      </tr>`:""}`}).join("")}
                          </tbody>
                        </table>
                      </div>`}
                </section>`})()}`}
        </div>
      </div>
    `,aa(a,{onToggle:()=>{B=!B,V(),B&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:c=>{ce=c,V();const u=a.querySelector("[data-global-space-search]");u&&(u.focus(),u.setSelectionRange(c.length,c.length))},onPick:c=>{z=c,B=!1,V()}}),a.querySelectorAll("[data-main-tab]").forEach(c=>{c.addEventListener("click",()=>{Z=c.dataset.mainTab??"alarms",j="",V()})}),a.querySelectorAll("[data-kpi-filter]").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.kpiFilter;j="",u==="workorders"?(Z="workorders",K=K==="open"?"all":"open"):(u==="active"||u==="acknowledged")&&(Z="alarms",re=re===u?"all":u),V()})}),a.querySelectorAll("[data-status-pill]").forEach(c=>{c.addEventListener("click",()=>{re=c.dataset.statusPill??"all",V()})}),a.querySelectorAll("[data-wo-pill]").forEach(c=>{c.addEventListener("click",()=>{K=c.dataset.woPill??"all",V()})}),a.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{j="",ve()}),a.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{te=!te,V()}),a.querySelector("[data-severity-filter]")?.addEventListener("change",c=>{ae=c.currentTarget.value,V()}),a.querySelector("[data-alarm-sort]")?.addEventListener("change",c=>{R=c.currentTarget.value??"impact",V()}),a.querySelector("[data-alarm-search]")?.addEventListener("input",c=>{const u=c.currentTarget,k=u.selectionStart??u.value.length;Y=u.value,V();const D=a.querySelector("[data-alarm-search]");D&&(D.focus(),D.setSelectionRange(k,k))}),a.querySelectorAll("[data-check-alarm]").forEach(c=>{c.addEventListener("change",()=>{const u=c.dataset.checkAlarm;u&&(c.checked?be.add(u):be.delete(u),V())})}),a.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{X="";const c=Array.from(be);try{for(const u of c)await p.acknowledgeAlarm(u,"告警中心批量确认"),U.set(u,"批量确认处置");be.clear(),j=`已批量确认 ${c.length} 条告警，未来 24 小时持续校验无复发。`,await ve()}catch(u){X=u instanceof Error?u.message:String(u),V()}}),a.querySelectorAll("[data-expand-alarm]").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.expandAlarm??null;se=se===u?null:u,I=null,V()})}),a.querySelectorAll("[data-expand-wo]").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.expandWo??null;pe=pe===u?null:u,V()})}),a.querySelectorAll("[data-run-ftt]").forEach(c=>{c.addEventListener("click",()=>{const u=_.find(k=>k.id===c.dataset.runFtt);u&&q(u)})}),a.querySelectorAll("[data-open-snooze]").forEach(c=>{c.addEventListener("click",()=>{I=c.dataset.openSnooze??null,V()})}),a.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{I=null,V()}),a.querySelectorAll("[data-snooze-form]").forEach(c=>{c.addEventListener("submit",u=>{u.preventDefault();const k=c.dataset.snoozeForm;if(!k)return;const D=new FormData(c),T=String(D.get("duration")??"24h"),qe=String(D.get("reason")??"").trim()||"现场核查中";ie.set(k,{duration:T,reason:qe}),be.delete(k),I=null,j=`已限时忽略该告警（${T} · ${qe}），可在「已忽略」页签中随时恢复。`,V()})}),a.querySelectorAll("[data-unsnooze]").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.unsnooze;u&&(ie.delete(u),j="已恢复该告警的实时监控。",V())})}),a.querySelectorAll("[data-go-ts]").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(u)}`})}),a.querySelectorAll("[data-locate-home]").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.locateHome??"";window.location.hash=u?`#home?device=${encodeURIComponent(u)}`:"#home"})}),a.querySelectorAll("[data-mark-actioned]").forEach(c=>{c.addEventListener("click",async()=>{X="";const u=c.dataset.markActioned;try{await p.acknowledgeAlarm(u,"现场自处理完成（Mark Actioned）"),U.set(u,"现场自处理完成"),be.delete(u),j="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await ve()}catch(k){X=k instanceof Error?k.message:String(k),V()}})}),a.querySelectorAll("[data-to-wo]").forEach(c=>{c.addEventListener("click",async()=>{X="";const u=_.find(k=>k.id===c.dataset.toWo);if(u)try{await p.createWorkOrder({floorId:u.floorId,deviceId:u.deviceId,alarmId:u.id,title:`处置告警：${u.title}`,description:u.message}),j=`已将「${u.title}」转为运维工单并同步 CMMS。`,await ve()}catch(k){X=k instanceof Error?k.message:String(k),V()}})}),a.querySelectorAll("[data-wo-status]").forEach(c=>{c.addEventListener("change",async()=>{const u=c.dataset.woStatus,k=c.value;if(X="",k==="cancelled"){const D=de.find(T=>T.id===u);if(D){const T=ye(D);T.cancelled=!0,T.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),j="工单已移入「已取消」分类并锁定编辑。",V()}return}if(k==="resolved"||k==="closed"){le=u,O=k,V();return}try{await p.updateWorkOrderStatus(u,k);const D=de.find(T=>T.id===u);D&&ye(D).history.unshift({at:"刚刚",text:`状态变更为「${Ne[k]}」`}),j="工单状态已更新并写入审计日志。",await ve()}catch(D){X=D instanceof Error?D.message:String(D),await ve()}})}),a.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{le=null,V()}),a.querySelectorAll("[data-close-wo-form]").forEach(c=>{c.addEventListener("submit",async u=>{u.preventDefault();const k=c.dataset.closeWoForm,D=new FormData(c),T=String(D.get("cause")??"").trim(),qe=String(D.get("solution")??"").trim(),De=String(D.get("actualCost")??"").trim();try{await p.updateWorkOrderStatus(k,O);const Ae=de.find(fe=>fe.id===k);if(Ae){const fe=ye(Ae);fe.cause=T,fe.solution=qe,De&&(fe.actualCost=De),fe.history.unshift({at:"刚刚",text:`流转至「${Ne[O]}」· 根因：${T}`})}le=null,pe=k,j=`工单已更新为「${Ne[O]}」，根因与方案已沉淀归档。`,await ve()}catch(Ae){X=Ae instanceof Error?Ae.message:String(Ae),V()}})}),a.querySelectorAll("[data-wo-task]").forEach(c=>{c.addEventListener("change",()=>{const u=de.find(T=>T.id===c.dataset.woTask);if(!u)return;const D=ye(u).tasks.find(T=>T.id===c.dataset.taskId);D&&(D.done=c.checked),V()})})}await ve()}const et={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},at={frozen:"已冻结",draft:"草稿",delivered:"已交付"},ca={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},da=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],ya=[{id:"doc-hvac-7f",floorId:Q.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:Q.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:Q.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:Q.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],tt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},$a=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function l(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Ye(a){const p=a.trim().toUpperCase();if(p==="RF"||p==="R"||p==="ROOF"||p.includes("屋面")||p.includes("屋顶")||p.includes("天面"))return 999;const $=p.match(/(-?\d+)/);if(!$)return 0;const oe=Number($[1]);return p.startsWith("B")||p.includes("地下")||p.includes("负")?-Math.abs(oe):oe}const wa={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function Be(a){const p=a.trim(),$=p.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test($)||/屋面|屋顶|天面/.test(p))return"RF";const oe=$.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(oe)return`B${Number(oe[1])}`;const C=p.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(C){const z=/^\d+$/.test(C[1])?Number(C[1]):wa[C[1]];if(z)return`B${z}`}if(/首层|一层/.test(p))return"1F";const A=p.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(A){const z=/^\d+$/.test(A[1])?Number(A[1]):wa[A[1]];if(z)return`${z}F`}const M=$.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return M?`${Number(M[1])}F`:null}function Xe(a){return new Promise((p,$)=>{const oe=new FileReader;oe.onload=()=>typeof oe.result=="string"?p(oe.result):$(new Error("无法读取图片内容")),oe.onerror=()=>$(new Error(`读取文件「${a.name}」失败`)),oe.readAsDataURL(a)})}function st(a){return a.category==="gateway"?a.name.includes("蓝牙")?"蓝牙适配器":"主控网关":a.category==="lighting"?a.name.includes("702")?"702 照明":a.name.slice(0,6):a.category==="hvac"?a.name.includes("VAV")?"VAV-02":a.name.includes("FCU")?"FCU-01":a.name.slice(0,6):a.category==="sensor"?"环境传感":a.name.slice(0,6)}function nt(a,p){const $=a.status!=="connected",oe=p.filter(C=>C.hardwareBinding?.protocol===a.protocol);return oe.length>0?oe.map(C=>{const A=C.connectivity==="offline"||$;return{pointName:C.category==="hvac"?"送风温度 / 阀门开度":C.category==="lighting"?"回路开关 / 亮度反馈":C.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:C.name,value:A?"无上报":C.category==="hvac"?"23.4°C · 62%":C.category==="lighting"?"开启 · 80%":C.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:A?"46 分钟前":"12 秒前",quality:A?C.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${a.protocol.toUpperCase()} 采集通道汇总点`,deviceName:a.name,value:$?"采样延迟":"正常上报",interval:"60s",lastSeen:$?"38 分钟前":"9 秒前",quality:$?"delayed":"online"}]}async function ot(a,p,$){const oe=new URLSearchParams(window.location.hash.split("?")[1]??""),C=oe.get("sec");let A=C==="floors"||C==="projects"?"project_config":C==="floorplan"||C==="devices"||C==="inventory"?"devices":C==="network"||C==="network_topo"?"network_topo":C==="connections"?"connections":"overview",M=C==="inventory"?"list":"marking",z="binding",B="",ce="all",_=ta(),de=!1,ge="",Z="device",re="all",K="",ae=!1,R=!1,te="mesh",Y=1,se=0,pe=0,I=await p.getSpatialTree(),le=[],O=[],be=[];const ie={...tt},U=[];let F=_.level==="all-projects"?I.projects[0]?.id??Q.projectId:_.projectId,P=_.level==="building"||_.level==="floor"?_.buildingId:I.buildings.find(m=>m.projectId===F)?.id??I.buildings[0]?.id??Q.buildingId,j=_.level==="floor"?_.floorId:I.floors.find(m=>m.buildingId===P&&m.id===Q.floorId)?.id??I.floors.find(m=>m.buildingId===P)?.id??Q.floorId,X=C==="floors"?j:null,ye="all",ve="zones",v=oe.get("new")==="project",q=!1,V=!1,E=null,i=!1,t=!1,r=!1,S=!1,W=!1,Se=null,Le=new Set,Ie=null,ze=!1,Ee=[];const c=[];let u=null,k=null,D=!1,T=!1,qe=null,De=null,Ae=3,fe=!1,He=[],Ce=null,H="",ee="";const Te=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),Re=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],sa=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:Q.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:Q.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:Q.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:Q.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],ua=new Map;function $e(){v=!1,q=!1,V=!1,E=null,i=!1,t=!1,r=!1,S=!1,W=!1,Se=null}function Ia(){return!!(v||q||V||E||i||t||r||S||W||Se)}const ba=m=>{if(!document.body.contains(a)){document.removeEventListener("keydown",ba);return}m.key==="Escape"&&(Ie?(Ie=null,y()):Ia()?($e(),y()):R&&(R=!1,T=!1,y()))};document.addEventListener("keydown",ba);function _e(){return I.floors}function Fe(m){return[...I.floors.filter(b=>b.buildingId===m)].sort((b,h)=>Ye(h.name)-Ye(b.name))}function Me(){return I.zones}function ke(m){return[...m===Q.floorId?le:[],...U.filter(h=>h.floorId===m)]}function Pe(m){return m?Me().find(b=>b.id===m)?.name.replace(/^7F\s*/,"")??m:"未分配功能区"}function na(m){const b=I.buildings.find(f=>f.id===m);if(!b)return;F=b.projectId,P=b.id;const h=Fe(b.id);h.some(f=>f.id===j)||(j=h.find(f=>f.id===Q.floorId)?.id??h[0]?.id??""),X&&!h.some(f=>f.id===X)&&(X=null),_=Ue(j?{level:"floor",projectId:b.projectId,buildingId:b.id,floorId:j}:{level:"building",projectId:b.projectId,buildingId:b.id}),k=null,R=!1,T=!1,Y=1,se=0,pe=0}function Ve(m){j=m;const b=_e().find(h=>h.id===m);if(b){P=b.buildingId;const h=I.buildings.find(f=>f.id===b.buildingId);h&&(F=h.projectId),_=Ue({level:"floor",projectId:F,buildingId:b.buildingId,floorId:b.id})}k=null,R=!1,T=!1,Y=1,se=0,pe=0}async function we(){ee="";const[m,b,h,f]=await Promise.all([p.getSpatialTree(),p.getFloorDevices(Q.floorId).catch(()=>[]),p.listConnections(F),p.listDeliveryBatches(Q.floorId)]);if(I=m,le=b,O=h,be=f,I.projects.length===0)F="",P="",j="",X=null;else{I.projects.some(n=>n.id===F)||(F=I.projects[0].id);const e=I.buildings.filter(n=>n.projectId===F);e.some(n=>n.id===P)||(P=e[0]?.id??"");const o=P?Fe(P):[];o.some(n=>n.id===j)||(j=o.find(n=>n.id===Q.floorId)?.id??o[0]?.id??""),X&&!o.some(n=>n.id===X)&&(X=null)}const x=ke(j);k&&!x.some(e=>e.id===k)&&(k=null,R=!1),D=x.find(e=>e.id===k)?.physicalInstalled??!1,y()}function We(){const m=a.querySelector('[data-role="dep-viewport"]');m&&(m.style.transform=`translate(${se}px, ${pe}px) scale(${Y})`);const b=a.querySelector('[data-role="dep-zoom-label"]');b&&(b.textContent=`${Math.round(Y*100)}%`)}function ga(m){ee="",m.connectivity==="offline"?ee=`单机回读自检未通过（FAIL）：「${m.name}」当前离线，请核查网关链路或中继覆盖。`:H=`单机回读自检通过（PASS）：「${m.name}」指令下发与状态回读一致，已安全复位。`,y()}function ja(){ee="";const m=ke(j),b=m.filter(g=>g.connectivity==="offline"),h=m.length-b.length,f=new Date;Ce={ranAt:`${String(f.getHours()).padStart(2,"0")}:${String(f.getMinutes()).padStart(2,"0")}:${String(f.getSeconds()).padStart(2,"0")}`,total:m.length,passed:h,failed:b.length,failedNames:b.map(g=>g.name)},b.length>0?ee=`全层批量自检完成：${h}/${m.length} 台通过，${b.length} 台异常（${b.map(g=>g.name).join("、")}）。`:H=`全层批量自检全部通过（${h}/${m.length}），设备已自动安全复位。`,y()}function qa(){const m=ke(j),b=[],h=m.filter(o=>o.connectivity==="offline"),f=m.filter(o=>!o.planPoint),x=m.filter(o=>Te.get(o.id)?.proxy).length,g=m.filter(o=>Te.get(o.id)?.relay).length,e=m.length?g/m.length:0;h.length>0?h.forEach(o=>b.push({level:"fail",title:`节点不可达：${o.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:o.id})):b.push({level:"ok",title:"全网节点可达性正常",detail:`${m.length} 台设备均正常响应心跳。`}),x<1?b.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):b.push({level:"ok",title:`代理节点配置合理（${x} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),e>.25&&m.length>=4&&b.push({level:"warn",title:`中继比例偏高（${Math.round(e*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),f.length>0&&b.push({level:"warn",title:`尚有 ${f.length} 台未完成设备标记`,detail:"请在「设备管理 → 设备标记」中补齐平面坐标以便施工定位。"}),He=b,H=`已完成蓝牙 Mesh 网络体检（检测 ${m.length} 台节点，发现 ${b.filter(o=>o.level!=="ok").length} 项关注）。`,y()}function Aa(){const m=ke(j),b=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...m.map(g=>[g.name,g.category,Pe(g.logicalZoneId),g.planPoint?`${Math.round(g.planPoint.x*100)}%/${Math.round(g.planPoint.y*100)}%`:"未标记",g.hardwareBinding?`${g.hardwareBinding.protocol} ${g.hardwareBinding.networkAddress}`:"未绑定",g.physicalInstalled?"已复核":"待复核",g.connectivity==="online"?"在线":"离线"].join(","))],h=new Blob([`\uFEFF${b.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),f=URL.createObjectURL(h),x=document.createElement("a");x.href=f,x.download="pacom-device-list.csv",x.click(),URL.revokeObjectURL(f)}function Ge(m){const b=new Set(Fe(m.id).map(f=>Be(f.name)??f.name.toUpperCase())),h=[];for(let f=1;f<=m.aboveFloors;f+=1){const x=`${f}F`;b.has(x)||h.push({kind:"above",level:f,name:x})}for(let f=1;f<=m.belowFloors;f+=1){const x=`B${f}`;b.has(x)||h.push({kind:"below",level:-f,name:x})}return m.hasRoof&&!b.has("RF")&&h.push({kind:"roof",level:99,name:"RF"}),h}async function Fa(m){const b=I.buildings.find(f=>f.id===m);if(!b)return 0;const h=Ge(b);for(const f of h)await p.upsertFloor?.({buildingId:b.id,kind:f.kind,level:f.level,name:f.name});return h.length}const Ca={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。",granularity:"building"},project_config:{title:"项目配置",subtitle:"在同一视图内贯通管理项目、园区楼宇、楼层平面底图、功能区与竣工图纸。",granularity:"project"},devices:{title:"设备管理",subtitle:"围绕当前楼层完成设备标记、设备列表核查、参数下发、自检与设备分组。",granularity:"floor"},network_topo:{title:"网络拓扑",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、环境等异构子系统通道及传感器采集质量。",granularity:"project"}};function Oe(m,b="layers"){return`
      <div class="dep-empty-card">
        <div class="dep-empty-icon">${J(b,20)}</div>
        <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
        <span class="pacom-row-sub" style="max-width:440px;">按「创建项目 → 添加楼宇与楼层 → 上传平面底图」完成建档后，即可开展设备标记、网络同步与交付验收。</span>
        <div class="dep-empty-steps">
          <span>1. 创建项目</span>
          <span>→</span>
          <span>2. 添加楼宇与楼层</span>
          <span>→</span>
          <span>3. 上传平面图</span>
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${m?"":"disabled"}>+ 创建第一个项目</button>
      </div>`}function za(){const m=(b,h,f,x=!1)=>`
      <button type="button" class="pacom-unified-item" aria-current="${A===b}" data-dep-nav="${b}">
        ${J(h,16)}
        <span>${f}</span>
        ${x?'<span class="dep-rail-dot" title="有变更待同步至边缘网关"></span>':""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${m("overview","layout-dashboard","部署总览")}
          ${m("project_config","layers","项目配置")}
          ${m("devices","map-pin","设备管理")}
          ${m("network_topo","waypoints","网络拓扑",fe)}
          ${m("connections","plug","系统接入")}
        </div>
      </aside>
    `}function va(m){return I.projects.length===0?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${m?"":"disabled"}>+ 新建项目</button>`:A==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出清单</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${m?"":"disabled"}>+ 交付冻结</button>
      `:A==="project_config"?`<button type="button" class="pacom-btn" data-open-new-proj="1" ${m?"":"disabled"}>+ 新建项目</button>`:A==="devices"?`${`
        <div class="pacom-tabs" role="tablist" aria-label="设备管理视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${M==="marking"}" data-dev-subtab="marking">设备标记</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${M==="list"}" data-dev-subtab="list">设备列表</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${M==="groups"}" data-dev-subtab="groups">设备分组</button>
        </div>`}${M==="marking"?'<button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>':M==="list"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${m?"":"disabled"}>+ 新建分组</button>`}`:A==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${m?"":"disabled"}>${fe?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:`
      <button type="button" class="pacom-btn" data-edge-restart="service" ${m?"":"disabled"}>重启边缘服务</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${m?"":"disabled"}>+ 新增接入通道</button>
    `}function Ma(m){if(I.projects.length===0)return Oe(m,"layout-dashboard");const b=P?Fe(P):[],h=b.filter(n=>!!n.plan).length,f=b.flatMap(n=>ke(n.id)),x=f.filter(n=>!!n.planPoint).length,g=f.filter(n=>n.connectivity==="online").length,e=f.filter(n=>n.physicalInstalled).length,o=b.filter(n=>ke(n.id).length>0&&!fe).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${b.length>0&&h===b.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 项目与底图</span>
          <div class="pacom-kpi-value">${h}<span class="pacom-kpi-unit">/ ${b.length} 层</span></div>
          <span class="pacom-kpi-delta">${b.length>0&&h===b.length?"全部底图就绪":`尚缺 ${Math.max(0,b.length-h)} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="marking" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${f.length>0&&x===f.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${x}<span class="pacom-kpi-unit">/ ${f.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${Re.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${f.length>0&&g===f.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${g}<span class="pacom-kpi-unit">/ ${f.length} 台</span></div>
          <span class="pacom-kpi-delta">${f.length-g>0?`${f.length-g} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${fe?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${o}<span class="pacom-kpi-unit">/ ${b.length} 层</span></div>
          <span class="pacom-kpi-delta">${fe?"有变更待下发 →":`基线 v${Ae}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="list" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${f.length>0&&e===f.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${e}<span class="pacom-kpi-unit">/ ${f.length} 台</span></div>
          <span class="pacom-kpi-delta">${f.length>0&&e===f.length?"可交付冻结":`待复核 ${f.length-e} 台 →`}</span>
        </button>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <div>
            <h2 class="pacom-section-title">楼层 × 工序交付门控矩阵</h2>
            <span class="pacom-row-sub">点击任意单元格，直接切至对应楼层与页面修复</span>
          </div>
          <button type="button" class="pacom-btn" data-batch-ftt="1">一键全层自检 (FTT)</button>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead>
                <tr>
                  <th>楼层</th>
                  <th>1. 底图与分区</th>
                  <th>2. 设备标记</th>
                  <th>3. 在线入网</th>
                  <th>4. 边缘同步</th>
                  <th>5. 物理复核</th>
                  <th style="text-align:right;">交付状态</th>
                </tr>
              </thead>
              <tbody>
                ${b.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前楼宇暂无楼层</strong><span>请先在「项目配置」中生成楼层并上传底图。</span></div></td></tr>':b.map(n=>{const s=ke(n.id),w=Me().filter(ne=>ne.floorId===n.id),d=s.filter(ne=>!!ne.planPoint).length,L=s.filter(ne=>ne.connectivity==="online").length,ue=s.filter(ne=>ne.physicalInstalled).length,me=!!n.plan,he=me&&s.length>0&&d===s.length&&ue===s.length&&L===s.length&&!fe;return`
                            <tr>
                              <td><strong>${l(n.name)}</strong><div class="pacom-row-sub">${n.areaSqm?`${n.areaSqm} m²`:"待补面积"}</div></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-expand="1" data-matrix-floor="${l(n.id)}"><span class="pacom-dot ${me?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${me?`已传图 · ${w.length} 区`:"待传底图"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="marking" data-matrix-floor="${l(n.id)}"><span class="pacom-dot ${s.length>0&&d===s.length?"pacom-dot--online":s.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${s.length>0?`${d}/${s.length}`:"未标记"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${l(n.id)}"><span class="pacom-dot ${s.length>0&&L===s.length?"pacom-dot--online":s.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${s.length>0?`${L}/${s.length}`:"—"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${l(n.id)}"><span class="pacom-dot ${s.length===0?"pacom-dot--offline":fe?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${s.length===0?"—":fe?"待同步":`v${Ae}`}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="list" data-matrix-floor="${l(n.id)}"><span class="pacom-dot ${s.length>0&&ue===s.length?"pacom-dot--online":s.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${s.length>0?`${ue}/${s.length}`:"—"}</span></button></td>
                              <td style="text-align:right;"><span class="pacom-badge ${he?"pacom-badge--online":s.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${he?"可验收交付":s.length>0?"实施中":"待配置"}</span></td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${Ce?`<div class="pacom-banner ${Ce.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${Ce.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${Ce.passed}/${Ce.total} 台${Ce.failedNames.length?` · 异常：${Ce.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${be.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${be.map(n=>`
                    <tr>
                      <td><div style="font-weight:450;">${l(n.versionTag)}</div><div class="pacom-row-sub"><code>${l(n.id)}</code></div></td>
                      <td><strong>${n.verifiedCount}</strong> / ${n.deviceCount} 台</td>
                      <td><div>${l(n.frozenBy)}</div><div class="pacom-row-sub">${l(n.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${at[n.status]??n.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Ta(m){if(I.projects.length===0)return Oe(m,"layers");const b=I.projects.find(d=>d.id===F)??I.projects[0],h=I.buildings.filter(d=>d.projectId===b.id),f=h.reduce((d,L)=>d+Fe(L.id).length,0),x=h.find(d=>d.id===P)??h[0]??null,g=x?Fe(x.id):[],e=g.filter(d=>!d.plan).length,o=g.filter(d=>Me().filter(L=>L.floorId===d.id).length===0).length,n=g.filter(d=>ye==="missing_plan"?!d.plan:ye==="missing_zone"?Me().filter(L=>L.floorId===d.id).length===0:!0),s=x?Ge(x):[],w=b.location?`${b.location.lng.toFixed(4)}, ${b.location.lat.toFixed(4)}`:"未设置坐标";return`
      <div class="dep-project-strip">
        <div class="dep-project-strip-main">
          <div class="dep-project-cover">
            <img src="${l(b.imageUrl??"./media/gzlab.jpg")}" alt="${l(b.name)}" />
          </div>
          <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">${l(b.name)}</strong>
              <span class="pacom-badge pacom-badge--neutral">${h.length} 栋楼宇</span>
              <span class="pacom-badge pacom-badge--neutral">${f} 个楼层</span>
            </div>
            <span class="pacom-row-sub">${l(b.city||"未填城市")}${b.address?` · ${l(b.address)}`:""} · 坐标 ${l(w)}</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-edit-proj="1" ${m?"":"disabled"}>编辑项目</button>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <div>
            <h2 class="pacom-section-title">园区楼宇（${h.length} 栋）</h2>
            <span class="pacom-row-sub">点击楼宇卡片切换下方楼层列表，点「编辑参数」修改外观与层数</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-bld="1" ${m?"":"disabled"}>+ 新建楼宇</button>
        </div>
        ${h.length===0?`
            <div class="dep-empty-card">
              <div class="dep-empty-icon">${J("building-2",20)}</div>
              <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${l(b.name)} 暂无楼宇</strong>
              <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
              <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${m?"":"disabled"}>+ 添加第一栋楼宇</button>
            </div>`:`
            <div class="dep-building-grid">
              ${h.map(d=>{const L=Fe(d.id),ue=L.filter(xe=>!!xe.plan).length,me=L.length>0?Math.round(ue/L.length*100):0,he=Ge(d),ne=x?.id===d.id,N=L.length===0?"pacom-badge--neutral":ue===L.length?"pacom-badge--online":"pacom-badge--warning";return`
                    <article class="dep-building-card ${ne?"is-active":""}" data-select-building="${l(d.id)}">
                      <div class="dep-building-stage">
                        <img src="${l(d.imageUrl??"./media/building-e.webp")}" alt="${l(d.name)}" />
                      </div>
                      <div class="dep-building-body">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${l(d.name)}</strong>
                          <span class="pacom-badge ${N}">${L.length===0?"未建层":`${ue}/${L.length} 底图`}</span>
                        </div>
                        <div class="pacom-row-sub">地上 ${d.aboveFloors} 层${d.belowFloors>0?` · 地下 ${d.belowFloors} 层`:""}${d.hasRoof?" · RF":""}${d.areaSqm?` · ${d.areaSqm} m²`:""}</div>
                        <div class="pacom-progress-track">
                          <div class="pacom-progress-fill" style="width:${me}%; background:${me===100?"var(--pacom-status-online)":"var(--pacom-accent-solid)"};"></div>
                        </div>
                        ${he.length>0?`<div style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:12px; color:var(--pacom-text-secondary);">
                                 <span>尚缺 ${he.length} 个楼层</span>
                                 <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="height:22px; padding:0 6px; font-size:12px;" data-fill-missing-floors="${l(d.id)}" ${m?"":"disabled"}>一键补齐</button>
                               </div>`:""}
                      </div>
                      <div class="dep-building-foot">
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${l(d.id)}" ${m?"":"disabled"}>编辑参数</button>
                        <span class="pacom-row-sub" style="font-size:12px; color:${ne?"var(--pacom-accent-fg)":"var(--pacom-text-secondary)"};">${ne?"当前查看中":"点击切换楼层"}</span>
                      </div>
                    </article>`}).join("")}
              <button type="button" class="dep-building-add-card" data-open-new-bld="1" ${m?"":"disabled"}>
                ${J("plus",20)}
                <span style="font-size:13px;">新建楼宇</span>
              </button>
            </div>`}
      </section>

      ${x?`
          <section class="pacom-section">
            <div class="pacom-section-head">
              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <h2 class="pacom-section-title">${l(x.name)} 楼层与底图（${g.length}）</h2>
                <div class="pacom-count-pills">
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${ye==="all"}" data-floor-list-filter="all">全部 <span class="pacom-count-num">${g.length}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${ye==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 <span class="pacom-count-num">${e}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${ye==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 <span class="pacom-count-num">${o}</span></button>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                ${s.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${l(x.id)}" ${m?"":"disabled"}>一键补齐 ${s.length} 层</button>`:""}
                <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-floor="1" ${m?"":"disabled"}>+ 新增楼层</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-batch-modal="1" ${m?"":"disabled"}>批量导入底图</button>
              </div>
            </div>

            ${g.length===0?`
                <div class="dep-empty-card">
                  <div class="dep-empty-icon">${J("layers",20)}</div>
                  <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${l(x.name)} 暂无楼层</strong>
                  <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${l(x.id)}" ${m?"":"disabled"}>一键生成全部楼层</button>
                    <button type="button" class="pacom-btn" data-open-new-floor="1" ${m?"":"disabled"}>+ 手动新增楼层</button>
                  </div>
                </div>`:`
                <div class="pacom-table-card">
                  <div class="pacom-table-wrap">
                    <table class="pacom-table">
                      <thead>
                        <tr>
                          <th>楼层</th>
                          <th>面积</th>
                          <th>2D 平面底图</th>
                          <th>功能区</th>
                          <th>工程资料</th>
                          <th style="text-align:right;">操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${n.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':n.map(d=>{const L=Me().filter(N=>N.floorId===d.id),ue=[...ya,...c].filter(N=>N.floorId===d.id),me=ke(d.id),he=X===d.id,ne=g.filter(N=>N.id!==d.id);return`
                                    <tr>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:7px;">
                                          <span class="pacom-dot ${d.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                          <strong>${l(d.name)}</strong>
                                        </div>
                                      </td>
                                      <td><span class="pacom-row-sub">${d.areaSqm?`${d.areaSqm} m²`:"—"}</span></td>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:8px;">
                                          ${d.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${l(x.name)} ${l(d.name)} 平面底图" data-lb-src="${l(d.plan.imageUrl)}" title="查看大图"><img src="${l(d.plan.imageUrl)}" alt="${l(d.name)}" /></button>
                                                 <span class="pacom-badge pacom-badge--online">已就绪</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                          <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="cursor:pointer; height:24px; padding:0 6px; font-size:12px;">
                                            <span>${d.plan?"替换":"上传"}</span>
                                            <input type="file" name="floorPlan_${l(d.id)}" accept="image/*" data-upload-floor="${l(d.id)}" style="display:none;" ${m?"":"disabled"} />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        ${L.length>0?`<span>${L.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${l(L.slice(0,2).map(N=>N.name.replace(/^7F\s*/,"")).join("、"))}${L.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                                      </td>
                                      <td><span class="pacom-row-sub">${ue.length} 份</span></td>
                                      <td>
                                        <div style="display:flex; justify-content:flex-end; gap:6px;">
                                          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-expand-floor="${l(d.id)}">${he?"收起配置":"展开配置"}</button>
                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${l(d.id)}">设备标记 →</button>
                                        </div>
                                      </td>
                                    </tr>
                                    ${he?`
                                        <tr class="pacom-table-detail-row">
                                          <td colspan="6">
                                            <div class="dep-floor-expand-grid">
                                              <div class="dep-floor-expand-col">
                                                <div class="dep-plan-preview-box" style="min-height:260px;" data-single-floor-drop="${l(d.id)}">
                                                  <div class="dep-plan-toolbar">
                                                    ${d.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${l(x.name)} ${l(d.name)} 平面底图" data-lb-src="${l(d.plan.imageUrl)}">查看大图</button>`:""}
                                                    <label class="dep-plan-tool-btn" style="cursor:pointer;">
                                                      <span>${d.plan?"替换底图":"上传底图"}</span>
                                                      <input type="file" name="floorPlanDrop_${l(d.id)}" accept="image/*" data-upload-floor="${l(d.id)}" style="display:none;" ${m?"":"disabled"} />
                                                    </label>
                                                    ${d.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${l(d.id)}" ${m?"":"disabled"}>清空</button>`:""}
                                                  </div>
                                                  ${d.plan?`<img src="${l(d.plan.imageUrl)}" alt="${l(d.name)} 平面图" style="width:100%; max-height:290px; object-fit:contain; display:block;" />`:`<div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:24px; text-align:center;">
                                                           <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${l(d.name)} 2D 平面图到此处</strong>
                                                           <span class="pacom-row-sub">支持透明 WebP / PNG / JPG</span>
                                                         </div>`}
                                                </div>
                                              </div>

                                              <div class="dep-floor-expand-col">
                                                <div class="pacom-settings-card" style="padding:10px 16px;">
                                                  <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                                                    <form data-save-floor="${l(d.id)}" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                                                      <input class="pacom-input" name="fName" value="${l(d.name)}" aria-label="楼层名称" style="width:76px; height:32px; flex:none;" required ${m?"":"disabled"} />
                                                      <input class="pacom-input" name="fArea" type="number" step="0.1" value="${l(d.areaSqm??"")}" placeholder="面积 m²" aria-label="建筑面积" style="width:110px; height:32px; flex:none;" ${m?"":"disabled"} />
                                                      <button type="submit" class="pacom-btn" ${m?"":"disabled"}>保存</button>
                                                    </form>
                                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-delete-floor="${l(d.id)}" ${!m||me.length>0?`disabled title="${me.length>0?`已关联 ${me.length} 台设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                                                  </div>
                                                </div>

                                                <div class="pacom-settings-card" style="padding:4px 16px;">
                                                  <div class="pacom-setting-row" style="padding:10px 0; justify-content:space-between; gap:8px;">
                                                    <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${ve==="zones"}" data-floor-detail-tab="zones">功能区（${L.length}）</button>
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${ve==="docs"}" data-floor-detail-tab="docs">竣工图纸与手册（${ue.length}）</button>
                                                    </div>
                                                    ${ve==="zones"?L.length>0&&ne.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-open-copy-zones="${l(d.id)}" ${m?"":"disabled"}>复用至其他层…</button>`:"":`<label class="pacom-btn pacom-btn--sm" style="cursor:pointer;"><span>+ 关联文件</span><input type="file" name="attachDoc_${l(d.id)}" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${l(d.id)}" style="display:none;" ${m?"":"disabled"} /></label>`}
                                                  </div>
                                                  ${ve==="zones"?`
                                                        ${L.length===0?`
                                                            <div class="pacom-setting-row" style="padding:10px 0; flex-direction:column; align-items:flex-start; gap:8px;">
                                                              <span class="pacom-row-sub">暂未划分功能区，可一键套用常用模板：</span>
                                                              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                                                ${$a.map(N=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${l(N.key)}" data-tpl-floor="${l(d.id)}" ${m?"":"disabled"}>+ ${l(N.label)}</button>`).join("")}
                                                              </div>
                                                            </div>`:L.map(N=>u===N.id?`
                                                                      <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-save-edit-zone="${l(N.id)}" data-zone-floor="${l(d.id)}">
                                                                        <input class="pacom-input" name="zName" value="${l(N.name)}" style="width:180px; height:30px; flex:none;" required />
                                                                        <select class="pacom-select" name="zCat" style="width:110px; height:30px;">
                                                                          ${Object.keys(ca).map(xe=>`<option value="${xe}" ${N.category===xe?"selected":""}>${ca[xe]}</option>`).join("")}
                                                                        </select>
                                                                        <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                                                      </form>`:`
                                                                      <div class="pacom-setting-row" style="padding:9px 0;">
                                                                        <div class="pacom-setting-meta" style="min-width:140px;">
                                                                          <span class="pacom-setting-title">${l(N.name)} <span class="pacom-badge pacom-badge--neutral">${l(ca[N.category]??N.category)}</span></span>
                                                                        </div>
                                                                        <div class="pacom-setting-control">
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${l(N.id)}" ${m?"":"disabled"}>编辑</button>
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${l(N.id)}" ${m?"":"disabled"}>删除</button>
                                                                        </div>
                                                                      </div>`).join("")}
                                                        <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-add-zone="${l(d.id)}">
                                                          <input class="pacom-input" name="zoneName" placeholder="新功能区名称（如：${l(d.name)} 东侧实验区）" style="width:210px; height:32px; flex:none;" required ${m?"":"disabled"} />
                                                          <select class="pacom-select" name="zoneCat" style="width:112px; height:32px;" ${m?"":"disabled"}>
                                                            <option value="lab">实验区</option>
                                                            <option value="office">办公区</option>
                                                            <option value="meeting">会议室</option>
                                                            <option value="corridor">走廊/公区</option>
                                                            <option value="utility">机房/后勤</option>
                                                            <option value="outdoor">露台/活动区</option>
                                                          </select>
                                                          <button type="submit" class="pacom-btn" ${m?"":"disabled"}>+ 添加</button>
                                                        </form>`:ue.length===0?'<div class="pacom-setting-row" style="padding:12px 0;"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':ue.map(N=>`
                                                              <div class="pacom-setting-row" style="padding:9px 0;">
                                                                <div class="pacom-setting-meta" style="min-width:140px;">
                                                                  <span class="pacom-setting-title">${l(N.name)}</span>
                                                                  <span class="pacom-row-sub">${l(N.category)} · ${l(N.size)} · ${l(N.updatedAt)}</span>
                                                                </div>
                                                                <div class="pacom-setting-control">
                                                                  <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${l(N.id)}">查阅</button>
                                                                </div>
                                                              </div>`).join("")}
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>`:""}`}).join("")}
                      </tbody>
                    </table>
                  </div>
                </div>`}
          </section>`:""}
    `}function Da(m){if(!R||A!=="devices"||M==="groups")return"";const h=ke(j).find(e=>e.id===k)??null;if(!h)return"";const f=Te.get(h.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${j.slice(-4)}`},x=Re.filter(e=>e.deviceId===h.id),g=ua.get(h.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450};return`
      <aside class="pacom-drawer" style="width:376px;" aria-label="设备配置抽屉">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${l(h.name)}</h2>
            <div class="pacom-row-sub">${l(Pe(h.logicalZoneId))} · v${h.version}</div>
          </div>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${J("x",16)}</button>
        </div>

        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${m?"":"disabled"}>${T?"点击图纸定位中…":"点图更新坐标"}</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${l(h.id)}">Ping 闪灯 5s</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${z==="binding"}" data-drawer-tab="binding">绑定与安装</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${z==="params"}" data-drawer-tab="params">自治参数</button>
        </div>

        ${z==="binding"?`
            ${h.category==="lighting"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">回路可视化灯点（${x.length}）</span>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${l(h.id)}" ${m?"":"disabled"}>+ 添加灯点</button>
                  </div>
                  ${x.map(e=>`
                      <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                        <span><strong>${l(e.channel)}</strong> · ${l(e.label)}</span>
                        <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:12px;" data-del-light-marker="${l(e.id)}" ${m?"":"disabled"}>删除</button>
                      </div>`).join("")}
                </div>`:""}

            ${h.category!=="hvac"&&h.category!=="meter"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                    <code style="font-size:12px;">${l(f.meshUuid)}</code>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Proxy 代理（建议每层 2–3 个）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${f.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${l(h.id)}" ${m?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${f.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${l(h.id)}" ${m?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                </div>`:""}

            <form data-role="binding-form" class="pacom-control-box" style="gap:10px;">
              <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">通信协议</span>
                  <select class="pacom-select" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(e=>`<option value="${e}" ${h.hardwareBinding?.protocol===e?"selected":""}>${e.toUpperCase()}</option>`).join("")}
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">网络地址 / 主题</span>
                  <input class="pacom-input" name="networkAddress" placeholder="地址或主题" value="${l(h.hardwareBinding?.networkAddress??"")}" />
                </label>
              </div>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:10px;">
                <label class="dep-field" style="flex:1;">
                  <span class="dep-field-label">端口 / 回路</span>
                  <input class="pacom-input" name="portOrChannel" placeholder="端口或回路" value="${l(h.hardwareBinding?.portOrChannel??"")}" />
                </label>
                <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; height:32px; flex-shrink:0;">
                  <span>物理已复核</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${D}" data-toggle-phys="1" ${m?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                </span>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${m?"":"disabled"}>保存绑定与复核（v${h.version}）</button>
            </form>`:`
            <form data-save-dev-params="${l(h.id)}" class="pacom-control-box" style="gap:10px;">
              <div>
                <div style="font-size:14px; font-weight:450;">人感与光感自治参数</div>
                <div class="pacom-row-sub">自动关灯延时、恢复自动延时与光照度门限</div>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${g.offDelayMin}" ${m?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" value="${g.restoreMin}" ${m?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" value="${g.luxOn}" ${m?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" value="${g.luxOff}" ${m?"":"disabled"} /></label>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${m?"":"disabled"}>下发设备参数</button>
            </form>`}
      </aside>
    `}function _a(m){if(I.projects.length===0)return`
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${Oe(m,"map-pin")}</div>
        </main>`;const b=P?Fe(P):[],h=b.find(n=>n.id===j)??b[0],f=ke(j),x=Me().filter(n=>n.floorId===j),g=R?f.find(n=>n.id===k)??null:null,e=K.trim().toLowerCase(),o=f.filter(n=>!(re==="unverified"&&n.physicalInstalled||re==="unplaced"&&n.planPoint||e&&!`${n.name} ${Pe(n.logicalZoneId)}`.toLowerCase().includes(e)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${J("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${l(K)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${ae?"is-active":""}" data-toggle-hud-pool="1">设备池 ${f.length}</button>
            <button type="button" class="pacom-hud-pill" data-open-new-dev="1" ${m?"":"disabled"}>+ 新增设备</button>
          </div>

          ${ae?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${l(h?.name??"7F")} 设备池（${o.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${J("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-count-pills">
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${re==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${f.length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${re==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${f.filter(n=>!n.physicalInstalled).length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${re==="unplaced"}" data-dev-filter="unplaced">未标记 <span class="pacom-count-num">${f.filter(n=>!n.planPoint).length}</span></button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${o.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':o.map(n=>`
                            <div class="pacom-row ${n.id===k&&R?"is-selected":""}" data-pick-dev="${l(n.id)}" style="padding:8px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${l(n.name)}</div>
                                <div class="pacom-row-sub">${l(Pe(n.logicalZoneId))} · ${n.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${n.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${n.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${T?"crosshair":"grab"};">
          ${h?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${se}px, ${pe}px) scale(${Y});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${l(h.plan.imageUrl)}" alt="${l(h.name)} 平面图" />
                  ${Z==="zone"?x.map(n=>{const s=ie[n.id];return s?`<div class="pacom-zone-hotspot is-active" style="left:${s.left}%; top:${s.top}%; width:${s.width}%; height:${s.height}%;"><span class="pacom-zone-tag">${l(n.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${f.filter(n=>n.planPoint).map(n=>`
                      <button type="button" class="pacom-pin ${n.id===k&&R?"is-selected":""} ${n.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(n.planPoint.x*100).toFixed(2)}%; top:${(n.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${l(n.id)}" title="${l(n.name)}">
                        <span class="pacom-dot ${n.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${l(st(n))}</span>
                      </button>`).join("")}
                  ${Z==="light_marker"||g?.category==="lighting"?Re.filter(n=>f.some(s=>s.id===n.deviceId)).map(n=>`
                            <span class="dep-light-dot" style="left:${(n.x*100).toFixed(1)}%; top:${(n.y*100).toFixed(1)}%;" title="${l(n.label)}（${l(n.channel)}）">
                              ${J("sparkles",12)}<span>${l(n.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${l(j)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${b.map(n=>`
              <button type="button" class="pacom-elev-item ${n.id===j?"is-active":""}" data-scrubber-floor="${l(n.id)}" title="${l(n.name)}${n.plan?" · 已传底图":" · 待传底图"}">
                ${n.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${l(n.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${Z==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${Z==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${Z==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${J("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(Y*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${J("plus",16)}</button>
        </div>
      </main>
    `}function Pa(m){if(I.projects.length===0)return Oe(m,"list");const b=ke(j),h=B.trim().toLowerCase(),f=b.filter(g=>!(ce==="online"&&g.connectivity!=="online"||ce==="offline"&&g.connectivity!=="offline"||ce==="unverified"&&g.physicalInstalled||h&&!`${g.name} ${Pe(g.logicalZoneId)} ${g.hardwareBinding?.protocol??""}`.toLowerCase().includes(h))),x=b.filter(g=>g.connectivity==="online").length;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${l(B)}" aria-label="搜索设备列表" />
          <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
            <option value="all" ${ce==="all"?"selected":""}>全部状态（${b.length}）</option>
            <option value="online" ${ce==="online"?"selected":""}>仅看在线（${x}）</option>
            <option value="offline" ${ce==="offline"?"selected":""}>仅看离线（${b.length-x}）</option>
            <option value="unverified" ${ce==="unverified"?"selected":""}>待物理复核（${b.filter(g=>!g.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${J("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-dev="1" ${m?"":"disabled"}>+ 新增设备</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-export-inv="1">导出 CSV</button>
        </div>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${f.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词、切换筛选，或点击「+ 新增设备」。</span></div></td></tr>':f.map(g=>`
                        <tr style="cursor:pointer;" data-open-dev-drawer="${l(g.id)}">
                          <td><div style="font-weight:450;">${l(g.name)}</div><div class="pacom-row-sub">${l(Pe(g.logicalZoneId))} · v${g.version}</div></td>
                          <td><span class="pacom-badge ${g.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${g.planPoint?`${Math.round(g.planPoint.x*100)}%,${Math.round(g.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${g.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${g.hardwareBinding?g.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${g.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${g.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${g.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${g.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${l(g.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-dev-params="${l(g.id)}">配置</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${l(g.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${f.length} / ${b.length} 台设备 · ${x} 在线 · ${b.length-x} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dev-subtab="marking">切换至设备标记 →</button>
        </div>
      </div>
    `}function Ra(m){if(I.projects.length===0)return Oe(m,"folder-kanban");const b=sa.filter(x=>x.floorId===j||j===Q.floorId&&x.floorId===Q.floorId),h=b.filter(x=>x.track==="mesh_auto"),f=b.filter(x=>x.track==="cloud_biz");return`
      <div class="pacom-grid-2">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${h.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${h.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':h.map(x=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${l(x.name)} <span class="pacom-badge pacom-badge--neutral">${l(x.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${x.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${l(x.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${f.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${f.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':f.map(x=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${l(x.name)} <span class="pacom-badge pacom-badge--neutral">${l(x.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${x.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${l(x.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>
      </div>
    `}function Oa(m){if(I.projects.length===0)return Oe(m,"waypoints");const b=ke(j),h=Me().filter(s=>s.floorId===j),f=b.filter(s=>s.category!=="hvac"&&s.category!=="meter"),x=f.filter(s=>Te.get(s.id)?.proxy).length,g=f.filter(s=>Te.get(s.id)?.relay).length,e=b.filter(s=>s.category==="gateway"),o=b.filter(s=>Te.get(s.id)?.relay||Te.get(s.id)?.proxy),n=b.filter(s=>s.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge ${fe?"pacom-badge--warning":"pacom-badge--online"}">${fe?"有变更待同步":"协同锁空闲 · 已同步"}</span>
            <span class="pacom-row-sub">Mesh 节点 ${f.length} 台 · Proxy ${x} 个 · Relay ${g} 个 · 边缘基线 v${Ae}</span>
          </div>
        </div>
        ${He.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${He.map(s=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${l(s.title)}</strong> <span class="pacom-row-sub">· ${l(s.detail)}</span></div>
                      <span class="pacom-badge ${s.level==="ok"?"pacom-badge--online":s.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${s.level==="ok"?"通过":s.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达设备标记）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${te==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${te==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${te==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${e.length===0?'<div class="pacom-row-sub">本层暂未配置网关节点。</div>':e.map(s=>`
                          <button type="button" class="dep-topo-node ${s.connectivity==="offline"?"is-issue":""}" data-topo-jump="${l(s.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${l(s.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                            <span class="pacom-row-sub">${l(s.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                          </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${o.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，可在「设备管理」抽屉中为传感器开启。</div>':o.map(s=>{const w=Te.get(s.id);return`
                            <button type="button" class="dep-topo-node ${s.connectivity==="offline"?"is-issue":""}" data-topo-jump="${l(s.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${l(s.name)}</strong><span class="pacom-badge pacom-badge--accent">${w?.proxy?"Proxy":""}${w?.proxy&&w?.relay?" + ":""}${w?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${l(Pe(s.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${n.length===0?'<div class="pacom-row-sub">本层暂无末端设备。</div>':n.map(s=>`
                          <button type="button" class="dep-topo-node ${s.connectivity==="offline"?"is-issue":""}" data-topo-jump="${l(s.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${l(s.name)}</strong><span class="pacom-badge ${s.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${s.connectivity==="online"?"在线":"离线"}</span></div>
                            <span class="pacom-row-sub">${l(Pe(s.logicalZoneId))} · ${l(s.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                          </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${b.filter(s=>s.category==="sensor"||s.category==="gateway").map(s=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${l(s.id)}">
                      <strong>${l(s.name)}</strong>
                      <span class="pacom-row-sub">${s.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${b.filter(s=>s.category==="lighting"||s.category==="hvac").map(s=>`
                    <button type="button" class="dep-topo-node ${s.connectivity==="offline"?"is-issue":""}" data-topo-jump="${l(s.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${l(s.name)}</strong><span class="pacom-badge ${s.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${s.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${l(Pe(s.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${h.map(s=>{const w=b.filter(L=>L.logicalZoneId===s.id),d=w.some(L=>L.connectivity==="offline");return`
                      <div class="dep-topo-node ${d?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${l(s.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${d?"pacom-badge--warning":"pacom-badge--online"}">${w.length} 台设备</span></div>
                        <span class="pacom-row-sub">${d?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function Na(m){if(I.projects.length===0)return Oe(m,"plug");const b=O.reduce((g,e)=>g+e.collectedPoints,0),h=O.reduce((g,e)=>g+e.calculatedPoints,0),f=O.filter(g=>g.status==="connected").length,x=O.filter(g=>g.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${f}<span class="pacom-kpi-unit">/ ${O.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${O.length?Math.round(f/O.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${b}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${h}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${x.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${x.length} 条采集通道通信降级（${x.map(g=>g.name).join("、")}）</span>
                <span class="pacom-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">边缘网关与异构子系统接入清单</h2>
          <span class="pacom-row-sub">支持测通、复制端点及展开传感器级三态质量</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>通道名称</th><th>协议</th><th>接入端点</th><th>点位规模</th><th>健康度</th><th style="text-align:right;">操作</th></tr></thead>
              <tbody>
                ${O.map(g=>{const e=et[g.status]??{label:g.status,cls:"pacom-badge--neutral"},o=g.status==="connected"?98:g.status==="degraded"?62:0,n=o>=75?"var(--pacom-status-online)":o>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",s=De===g.id,w=s?nt(g,le):[];return`
                      <tr>
                        <td><strong>${l(g.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${g.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${l(g.endpoint)}</code></td>
                        <td>采集 ${g.collectedPoints} / 计算 ${g.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${e.cls}">${e.label}</span>
                            <span class="pacom-row-sub">${o}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${o}%; background:${n};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${l(g.id)}">${s?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${l(g.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${l(g.id)}" data-endpoint-val="${l(g.endpoint)}">${qe===g.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${s?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${l(g.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${w.map(d=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${l(d.deviceName)}</strong> · ${l(d.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${l(d.value)} · ${l(d.lastSeen)}</span>
                                        <span class="pacom-badge ${d.quality==="online"?"pacom-badge--online":d.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${d.quality==="online"?"在线正常":d.quality==="delayed"?"延迟 >30m":"断流"}
                                        </span>
                                      </span>
                                    </div>`).join("")}
                              </div>
                            </td>
                          </tr>`:""}`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Ba(m){const b=[],h=I.projects.find(g=>g.id===F)??I.projects[0]??null,f=I.buildings.find(g=>g.id===P)??(h?I.buildings.find(g=>g.projectId===h.id):null)??null;if(v&&b.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
          <form class="dep-modal-card" data-create-project="1">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建项目</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" placeholder="如：广实3号园" required /></label>
                <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="广州市" /></label>
                <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" placeholder="街道与门牌号" /></label>
                <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" placeholder="113.3824" /></label>
                <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" placeholder="23.0652" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建项目</button>
              </div>
            </div>
          </form>
        </div>`),q&&h){const e=I.buildings.filter(o=>o.projectId===h.id).reduce((o,n)=>o+Fe(n.id).reduce((s,w)=>s+ke(w.id).length,0),0);b.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
          <form class="dep-modal-card" data-save-project="${l(h.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑项目：${l(h.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${l(h.imageUrl??"./media/gzlab.jpg")}" alt="${l(h.name)}" style="width:84px; height:54px; object-fit:cover; border-radius:6px; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">项目封面图</div>
                  <div class="pacom-row-sub">用于空间总览的园区俯瞰展示</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>更换封面</span>
                  <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${l(h.id)}" style="display:none;" ${m?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${l(h.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${l(h.city??"")}" /></label>
                <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${l(h.address??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${l(h.location?.lng??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${l(h.location?.lat??"")}" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${l(h.id)}" ${!m||e>0?`disabled title="${e>0?`包含 ${e} 台运行中设备，请先解绑后再删除`:"只读"}"`:""}>删除项目</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${m?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}V&&h&&b.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
          <form class="dep-modal-card" data-create-bld="${l(h.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建楼宇（${l(h.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" placeholder="如：G栋" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" placeholder="选填" /></label>
                <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="12" /></label>
                <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="0" /></label>
              </div>
              <div style="display:flex; align-items:center; gap:18px; flex-wrap:wrap; font-size:13px;">
                <label style="display:inline-flex; align-items:center; gap:6px;"><input type="checkbox" name="bRoof" checked />含屋面层 (RF)</label>
                <label style="display:inline-flex; align-items:center; gap:6px;"><input type="checkbox" name="bAutoFloors" checked />创建后自动生成全部楼层</label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建楼宇</button>
              </div>
            </div>
          </form>
        </div>`);const x=E?I.buildings.find(g=>g.id===E)??null:null;if(x){const g=Fe(x.id),e=g.reduce((n,s)=>n+ke(s.id).length,0),o=Ge(x);b.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
          <form class="dep-modal-card" data-save-building="${l(x.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑楼宇：${l(x.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${l(x.imageUrl??"./media/building-e.webp")}" alt="${l(x.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:6px; background:#fff; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">楼宇外观 / 白模图</div>
                  <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>替换图片</span>
                  <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${l(x.id)}" style="display:none;" ${m?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${l(x.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${l(x.areaSqm??"")}" placeholder="选填" /></label>
                <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${x.aboveFloors}" /></label>
                <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${x.belowFloors}" /></label>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                <label style="display:inline-flex; align-items:center; gap:6px; font-size:13px;"><input type="checkbox" name="bRoof" ${x.hasRoof?"checked":""} />含屋面层 (RF)</label>
                ${o.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${l(x.id)}">一键补齐缺失 ${o.length} 层</button>`:`<span class="pacom-row-sub">已配置 ${g.length} 个楼层</span>`}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${l(x.id)}" ${!m||e>0?`disabled title="${e>0?"包含运行中设备，请先解绑后再删除":"只读"}"`:""}>删除楼宇</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${m?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}if(i&&f&&b.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
          <form class="dep-modal-card" data-create-floor="${l(f.id)}" style="width:min(420px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增楼层（${l(f.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼层名称</span><input class="pacom-input" name="fName" placeholder="如：23F / B1 / RF" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="fArea" type="number" step="0.1" placeholder="选填" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">确认新增</button>
              </div>
            </div>
          </form>
        </div>`),t&&f){const g=Fe(f.id),e=Ee.filter(o=>!!o.matchedFloorId).length;b.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
          <div class="dep-modal-card dep-modal-card--wide">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">批量导入 ${l(f.name)} 平面底图</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-upload-drop" data-batch-dropzone="${l(f.id)}" style="padding:20px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${ze?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
                <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
                <span class="pacom-row-sub">自动识别 01F、首层、屋面、RF、B1 等中英文文件名，支持手动调整对应楼层</span>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; margin-top:4px;">
                  <span>选择多张图片</span>
                  <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${l(f.id)}" style="display:none;" ${m?"":"disabled"} />
                </label>
              </div>
              ${Ee.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                      <div class="pacom-row-sub">已选 ${Ee.length} 张图片，已匹配 ${e} 层：</div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:6px; max-height:220px; overflow-y:auto;">
                        ${Ee.map(o=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${l(o.file.name)}">${l(o.file.name)}</span>
                              <select class="pacom-select" name="overrideFloor_${l(o.id)}" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${l(o.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${g.map(n=>`<option value="${l(n.id)}" ${o.matchedFloorId===n.id?"selected":""}>${l(n.name)}</option>`).join("")}
                              </select>
                            </div>`).join("")}
                      </div>
                    </div>`:""}
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-batch-upload="1" ${Ee.length===0?"disabled":""}>清空已选</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">关闭</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-batch-upload="1" ${e===0?"disabled":""}>确认导入（${e} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(Se&&f){const g=_e().find(o=>o.id===Se),e=Fe(f.id).filter(o=>o.id!==Se);g&&e.length>0&&b.push(`
          <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
            <div class="dep-modal-card">
              <div class="dep-modal-head">
                <strong style="font-size:15px; font-weight:500;">复用 ${l(g.name)} 功能区至其他楼层</strong>
                <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
              </div>
              <div class="dep-modal-body">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <span class="pacom-row-sub">勾选目标楼层（已选 ${Le.size} 层）</span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                  </div>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${e.map(o=>{const n=Le.has(o.id),s=Me().filter(w=>w.floorId===o.id).length;return`
                        <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${n}">
                          <input type="checkbox" name="copyFloor_${l(o.id)}" data-copy-target-floor="${l(o.id)}" ${n?"checked":""} style="margin:0;" />
                          <span>${l(o.name)}${s>0?` (${s}区)`:""}</span>
                        </label>`}).join("")}
                </div>
              </div>
              <div class="dep-modal-foot">
                <span></span>
                <div style="display:flex; gap:8px;">
                  <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                  <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${l(g.id)}" ${Le.size===0?"disabled":""}>确认复制（${Le.size} 层）</button>
                </div>
              </div>
            </div>
          </div>`)}if(r){const g=Me().filter(e=>e.floorId===j);b.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
          <form class="dep-modal-card" data-create-dev="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增设备</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">设备名称</span>
                <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">设备类型</span>
                  <select class="pacom-select" name="devPreset">${da.map(e=>`<option value="${e.key}">${e.label}</option>`).join("")}</select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">所属功能区</span>
                  <select class="pacom-select" name="devZone">
                    <option value="">暂不分配</option>
                    ${g.map(e=>`<option value="${l(e.id)}">${l(e.name)}</option>`).join("")}
                  </select>
                </label>
              </div>
              <span class="pacom-row-sub">创建后将自动按设备类型预设蓝牙 Mesh 角色与默认位置，并标记待同步边缘。</span>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">确认新增</button>
              </div>
            </div>
          </form>
        </div>`)}return S&&b.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建分组">
          <form class="dep-modal-card" data-create-group="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建设备分组</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">分组名称</span>
                <input class="pacom-input" name="gName" placeholder="如：7F 西侧办公区联动组" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">运行模式</span>
                  <select class="pacom-select" name="gTrack">
                    <option value="mesh_auto">端侧 Mesh 自治组（含蓝牙适配器）</option>
                    <option value="cloud_biz">云端业务分组（零蓝牙依赖）</option>
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">分组类别</span>
                  <select class="pacom-select" name="gType">
                    <option value="灯光联动组（传感-面板）">灯光联动组</option>
                    <option value="调光器群控组">调光器群控组</option>
                    <option value="空调业务组">空调业务组</option>
                    <option value="行政 / 标牌管控组">标牌 / 部门组</option>
                  </select>
                </label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建分组</button>
              </div>
            </div>
          </form>
        </div>`),W&&b.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增接入通道">
          <form class="dep-modal-card" data-create-conn="1" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增子系统接入通道</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">通道名称</span>
                <input class="pacom-input" name="cName" placeholder="如：E栋 8F 中央空调网关" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">协议类型</span>
                  <select class="pacom-select" name="cProto">
                    <option value="bacnet_ip">空调 / BACnet IP</option>
                    <option value="modbus_tcp">电表 / Modbus TCP</option>
                    <option value="modbus_rtu">RS485 / Modbus RTU</option>
                    <option value="dali">照明 / DALI-2</option>
                    <option value="mqtt">空气质量 / MQTT</option>
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">网关端点</span>
                  <input class="pacom-input" name="cEndpoint" placeholder="如：10.7.8.20:47808" required />
                </label>
              </div>
              <span class="pacom-row-sub">提交时将自动检测局域网端口冲突并执行连通校验。</span>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">校验并接入</button>
              </div>
            </div>
          </form>
        </div>`),b.join("")}function y(){const m=$.scope.canEditDeployment,b=$.scope.activeOverrides.find(o=>o.module==="deployment"&&o.status==="active"),h=b?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 · ${b.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${l(b.approvedBy)} · 到期自动收回：${l(b.expiresAt.slice(0,16).replace("T"," "))} · 事由：${l(b.reason)}</span>
          </div>
        </div>`:"",f=A==="devices"&&M==="marking",x=Ca[A],g=A==="devices"?M==="marking"?"设备标记":M==="list"?"设备列表":"设备分组":x.title,e=A==="devices"?M==="marking"?"在 2D 平面底图上完成设备坐标标记、回路灯点布置与硬件绑定。":M==="list"?"核查本层四态设备清单，点击任意行配置硬件绑定、人感/光感参数或执行自检。":"管理端侧蓝牙 Mesh 自治联动组与云端业务分组。":x.subtitle;a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${ea({tree:I,session:$,scope:_,maxGranularity:x.granularity,isOpen:de,searchKeyword:ge})}
            </div>
            <div class="pacom-header-meta">
              ${m?b?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${za()}
          ${f?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${g}</h2>
                      <p class="pacom-unified-subtitle">${e}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${va(m)}
                    </div>
                  </div>
                  ${h}
                  ${H?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${l(H)}</span></div>`:""}
                  ${ee?`<div class="pacom-alert-banner">${l(ee)}</div>`:""}
                  ${_a(m)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head pacom-unified-head--split">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${g}</h2>
                      <p class="pacom-unified-subtitle">${e}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${va(m)}
                    </div>
                  </div>
                  ${h}
                  ${H?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${l(H)}</span></div>`:""}
                  ${ee?`<div class="pacom-alert-banner">${l(ee)}</div>`:""}
                  ${A==="overview"?Ma(m):A==="project_config"?Ta(m):A==="devices"?M==="list"?Pa(m):Ra(m):A==="network_topo"?Oa(m):Na(m)}
                </div>
              </div>`}
          ${Da(m)}
        </div>
      </div>
      ${Ba(m)}
      ${Ie?`
          <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${l(Ie.title)}">
            <div class="dep-lightbox-card">
              <div class="dep-lightbox-head">
                <strong style="font-size:14px; font-weight:500;">${l(Ie.title)}</strong>
                <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${J("x",16)}</button>
              </div>
              <div class="dep-lightbox-body">
                <img src="${l(Ie.imageUrl)}" alt="${l(Ie.title)}" />
              </div>
            </div>
          </div>`:""}
    `,Ua()}function Ua(){aa(a,{onToggle:()=>{de=!de,y(),de&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:e=>{ge=e,y();const o=a.querySelector("[data-global-space-search]");o&&(o.focus(),o.setSelectionRange(e.length,e.length))},onPick:e=>{if(_=e,de=!1,e.level==="project"){F=e.projectId;const o=I.buildings.find(n=>n.projectId===e.projectId);o?na(o.id):(P="",j="",X=null)}else e.level==="building"?na(e.buildingId):e.level==="floor"&&Ve(e.floorId);y()}}),a.querySelectorAll("[data-dep-nav]").forEach(e=>{e.addEventListener("click",()=>{A=e.dataset.depNav??"overview",e.dataset.devSubtabJump&&(M=e.dataset.devSubtabJump),R=!1,T=!1,H="",ee="",y()})}),a.querySelectorAll("[data-dev-subtab]").forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.devSubtab??"marking";M=o,o==="groups"&&(R=!1,T=!1),H="",ee="",y()})}),a.querySelectorAll("[data-drawer-tab]").forEach(e=>{e.addEventListener("click",()=>{z=e.dataset.drawerTab??"binding",y()})}),a.querySelector("[data-list-search]")?.addEventListener("input",e=>{B=e.currentTarget.value,y();const o=a.querySelector("[data-list-search]");o&&(o.focus(),o.setSelectionRange(B.length,B.length))}),a.querySelector("[data-list-filter]")?.addEventListener("change",e=>{ce=e.currentTarget.value??"all",y()}),a.querySelectorAll("[data-refresh-dep]").forEach(e=>{e.addEventListener("click",()=>{we()})}),a.querySelectorAll("[data-matrix-nav]").forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.matrixFloor;o&&Ve(o),A=e.dataset.matrixNav??"devices",e.dataset.matrixSub&&(M=e.dataset.matrixSub),e.dataset.matrixExpand==="1"&&o&&(X=o),y()})}),a.querySelectorAll("[data-scrubber-floor]").forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.scrubberFloor;o&&(Ve(o),y())})}),a.querySelectorAll("[data-close-modals]").forEach(e=>{e.addEventListener("click",()=>{$e(),y()})}),a.querySelectorAll("[data-modal-scrim]").forEach(e=>{e.addEventListener("click",o=>{o.target===e&&($e(),y())})}),a.querySelectorAll("[data-open-new-proj]").forEach(e=>{e.addEventListener("click",()=>{$e(),v=!0,y()})}),a.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{$e(),q=!0,y()}),a.querySelectorAll("[data-open-new-bld]").forEach(e=>{e.addEventListener("click",()=>{$e(),V=!0,y()})}),a.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{$e(),i=!0,y()}),a.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{$e(),t=!0,y()}),a.querySelectorAll("[data-open-new-dev]").forEach(e=>{e.addEventListener("click",()=>{$e(),r=!0,y()})}),a.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{$e(),S=!0,y()}),a.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{$e(),W=!0,y()}),a.querySelectorAll("[data-select-building]").forEach(e=>{e.addEventListener("click",o=>{if(o.target?.closest("button, label, input"))return;const n=e.dataset.selectBuilding;n&&n!==P&&(na(n),ye="all",X=null,y())})}),a.querySelectorAll("[data-edit-building]").forEach(e=>{e.addEventListener("click",o=>{o.stopPropagation(),$e(),E=e.dataset.editBuilding??null,y()})}),a.querySelectorAll("[data-toggle-expand-floor]").forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.toggleExpandFloor??null;X=X===o?null:o,X&&Ve(X),u=null,y()})}),a.querySelectorAll("[data-jump-floor-marking]").forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.jumpFloorMarking;o&&Ve(o),A="devices",M="marking",y()})}),a.querySelector("[data-jump-floor-config]")?.addEventListener("click",e=>{const o=e.currentTarget.dataset.jumpFloorConfig;A="project_config",o&&(X=o),y()}),a.querySelectorAll("[data-floor-detail-tab]").forEach(e=>{e.addEventListener("click",()=>{ve=e.dataset.floorDetailTab??"zones",y()})}),a.querySelectorAll("[data-floor-list-filter]").forEach(e=>{e.addEventListener("click",()=>{ye=e.dataset.floorListFilter??"all",y()})}),a.querySelector("[data-create-project]")?.addEventListener("submit",async e=>{e.preventDefault();const o=new FormData(e.currentTarget),n=String(o.get("pName")??"").trim(),s=String(o.get("pCity")??"").trim(),w=String(o.get("pAddr")??"").trim(),d=String(o.get("pLng")??"").trim(),L=String(o.get("pLat")??"").trim();if(!n)return;let ue;if(d||L){const me=Number(d),he=Number(L);if(!Number.isFinite(me)||!Number.isFinite(he)||me<-180||me>180||he<-90||he>90){ee="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",y();return}ue={lng:me,lat:he,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const me=await p.createProject?.({name:n,city:s,address:w,location:ue});$e(),A="project_config",me&&(F=me.id,P="",j="",X=null,_=Ue({level:"project",projectId:me.id})),H=`已创建项目「${n}」，下一步可添加园区楼宇。`,await we()}catch(me){ee=me instanceof Error?me.message:String(me),y()}}),a.querySelector("[data-save-project]")?.addEventListener("submit",async e=>{e.preventDefault();const o=e.currentTarget,n=o.dataset.saveProject??F,s=new FormData(o),w=String(s.get("pName")??"").trim(),d=String(s.get("pCity")??"").trim(),L=String(s.get("pAddr")??"").trim(),ue=String(s.get("pLng")??"").trim(),me=String(s.get("pLat")??"").trim();let he;if(ue||me){const ne=Number(ue),N=Number(me);if(!Number.isFinite(ne)||!Number.isFinite(N)||ne<-180||ne>180||N<-90||N>90){ee="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",y();return}he={lng:ne,lat:N,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await p.updateProject?.(n,{name:w,city:d,address:L,location:he}),$e(),H=`已保存项目「${w||"当前项目"}」信息。`,await we()}catch(ne){ee=ne instanceof Error?ne.message:String(ne),y()}}),a.querySelector("[data-upload-proj]")?.addEventListener("change",async e=>{const o=e.currentTarget,n=o.dataset.uploadProj,s=o.files?.[0];if(!(!n||!s))try{const w=await Xe(s);await p.updateProject?.(n,{imageUrl:w}),H=`已更新项目封面图（${s.name}）。`,await we()}catch(w){ee=w instanceof Error?w.message:String(w),y()}}),a.querySelector("[data-delete-proj]")?.addEventListener("click",async e=>{const o=e.currentTarget.dataset.deleteProj,n=I.projects.find(s=>s.id===o);if(!(!o||!n)&&window.confirm(`确认删除项目「${n.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await p.deleteProject?.(o),$e(),H=`已删除项目「${n.name}」。`,await we()}catch(s){ee=s instanceof Error?s.message:String(s),y()}}),a.querySelector("[data-create-bld]")?.addEventListener("submit",async e=>{e.preventDefault();const o=e.currentTarget,n=o.dataset.createBld??F,s=new FormData(o),w=String(s.get("bName")??"").trim(),d=String(s.get("bArea")??"").trim(),L=Math.max(1,Number(s.get("bAbove")??12)),ue=Math.max(0,Number(s.get("bBelow")??0)),me=!!s.get("bRoof"),he=!!s.get("bAutoFloors");if(w)try{const ne=await p.upsertBuilding?.({projectId:n,name:w,aboveFloors:L,belowFloors:ue,hasRoof:me,areaSqm:d?Number(d):null});$e();let N=0;if(ne&&(P=ne.id,he)){for(let xe=1;xe<=L;xe+=1)await p.upsertFloor?.({buildingId:ne.id,kind:"above",level:xe,name:`${xe}F`}),N+=1;for(let xe=1;xe<=ue;xe+=1)await p.upsertFloor?.({buildingId:ne.id,kind:"below",level:-xe,name:`B${xe}`}),N+=1;me&&(await p.upsertFloor?.({buildingId:ne.id,kind:"roof",level:99,name:"RF"}),N+=1)}H=he?`已创建楼宇「${w}」并自动生成 ${N} 个楼层。`:`已创建楼宇「${w}」。`,await we()}catch(ne){ee=ne instanceof Error?ne.message:String(ne),y()}}),a.querySelector("[data-save-building]")?.addEventListener("submit",async e=>{e.preventDefault();const o=e.currentTarget,n=o.dataset.saveBuilding,s=I.buildings.find(ne=>ne.id===n);if(!s)return;const w=new FormData(o),d=String(w.get("bName")??"").trim()||s.name,L=String(w.get("bArea")??"").trim(),ue=Math.max(1,Number(w.get("bAbove")??s.aboveFloors)),me=Math.max(0,Number(w.get("bBelow")??s.belowFloors)),he=!!w.get("bRoof");try{await p.upsertBuilding?.({id:n,projectId:s.projectId,name:d,aboveFloors:ue,belowFloors:me,hasRoof:he,areaSqm:L?Number(L):null}),$e(),H=`已保存楼宇「${d}」参数。`,await we()}catch(ne){ee=ne instanceof Error?ne.message:String(ne),y()}}),a.querySelector("[data-delete-building]")?.addEventListener("click",async e=>{const o=e.currentTarget.dataset.deleteBuilding,n=I.buildings.find(s=>s.id===o);if(!(!o||!n)&&window.confirm(`确认删除楼宇「${n.name}」及其下全部楼层与功能区？`))try{await p.deleteBuilding?.(o),$e(),H=`已删除楼宇「${n.name}」。`,await we()}catch(s){ee=s instanceof Error?s.message:String(s),y()}}),a.querySelector("[data-upload-bld]")?.addEventListener("change",async e=>{const o=e.currentTarget,n=o.dataset.uploadBld,s=o.files?.[0],w=I.buildings.find(d=>d.id===n);if(!(!n||!s||!w))try{const d=await Xe(s);await p.upsertBuilding?.({id:w.id,projectId:w.projectId,name:w.name,aboveFloors:w.aboveFloors,belowFloors:w.belowFloors,hasRoof:w.hasRoof,areaSqm:w.areaSqm,imageUrl:d}),H=`已更新「${w.name}」外观图（${s.name}）。`,await we()}catch(d){ee=d instanceof Error?d.message:String(d),y()}}),a.querySelectorAll("[data-fill-missing-floors]").forEach(e=>{e.addEventListener("click",async o=>{o.stopPropagation();const n=e.dataset.fillMissingFloors;if(n)try{const s=await Fa(n);H=s>0?`已自动补齐 ${s} 个楼层。`:"当前楼宇楼层已完整。",await we()}catch(s){ee=s instanceof Error?s.message:String(s),y()}})}),a.querySelector("[data-create-floor]")?.addEventListener("submit",async e=>{e.preventDefault();const o=e.currentTarget,n=o.dataset.createFloor,s=new FormData(o),w=String(s.get("fName")??"").trim().toUpperCase(),d=String(s.get("fArea")??"").trim();if(!w)return;const L=Be(w)??w;if(Fe(n).some(N=>(Be(N.name)??N.name.toUpperCase())===L)){ee=`楼层「${w}」已存在，请使用其他名称。`,y();return}const me=Ye(w),he=me>=999?"roof":me<0?"below":"above",ne=me>=999?99:me||1;try{const N=await p.upsertFloor?.({buildingId:n,kind:he,level:ne,name:w,areaSqm:d?Number(d):null});$e(),N&&(j=N.id,X=N.id),H=`已新增楼层「${w}」。`,await we()}catch(N){ee=N instanceof Error?N.message:String(N),y()}}),a.querySelector("[data-save-floor]")?.addEventListener("submit",async e=>{e.preventDefault();const o=e.currentTarget,n=o.dataset.saveFloor,s=_e().find(xe=>xe.id===n);if(!s)return;const w=new FormData(o),d=String(w.get("fName")??"").trim()||s.name,L=String(w.get("fArea")??"").trim(),ue=Be(d)??d.toUpperCase();if(Fe(s.buildingId).some(xe=>xe.id!==s.id&&(Be(xe.name)??xe.name.toUpperCase())===ue)){ee=`楼层「${d}」已存在，请避免重复命名。`,y();return}const he=Ye(d),ne=he>=999?"roof":he<0?"below":"above",N=he>=999?99:he||s.level;try{await p.upsertFloor?.({id:s.id,buildingId:s.buildingId,kind:ne,level:N,name:d,areaSqm:L?Number(L):null}),H=`已保存楼层「${d}」。`,await we()}catch(xe){ee=xe instanceof Error?xe.message:String(xe),y()}}),a.querySelector("[data-delete-floor]")?.addEventListener("click",async e=>{const o=e.currentTarget.dataset.deleteFloor,n=_e().find(s=>s.id===o);if(!(!o||!n)){if(ke(o).length>0){ee=`楼层「${n.name}」已关联设备，请先解绑后再删除。`,y();return}if(window.confirm(`确认删除楼层「${n.name}」及其功能区？`))try{await p.deleteFloor?.(o),X=null,H=`已删除楼层「${n.name}」。`,await we()}catch(s){ee=s instanceof Error?s.message:String(s),y()}}});async function m(e,o){const n=_e().find(s=>s.id===e);if(n)try{const s=await Xe(o);await p.upsertFloor?.({id:n.id,buildingId:n.buildingId,kind:n.kind,level:n.level,name:n.name,areaSqm:n.areaSqm,planImageUrl:s}),H=`已更新「${n.name}」平面底图（${o.name}）。`,await we()}catch(s){ee=s instanceof Error?s.message:String(s),y()}}a.querySelectorAll("[data-upload-floor]").forEach(e=>{e.addEventListener("change",()=>{const o=e.dataset.uploadFloor,n=e.files?.[0];o&&n&&m(o,n)})});const b=a.querySelector("[data-single-floor-drop]");b&&$.scope.canEditDeployment&&(b.addEventListener("dragover",e=>{e.preventDefault(),b.style.borderColor="var(--pacom-accent-solid)"}),b.addEventListener("dragleave",()=>{b.style.borderColor=""}),b.addEventListener("drop",e=>{e.preventDefault(),b.style.borderColor="";const o=b.dataset.singleFloorDrop,n=Array.from(e.dataTransfer?.files??[]).find(s=>s.type.startsWith("image/"));o&&n&&m(o,n)})),a.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async e=>{const o=e.currentTarget.dataset.clearFloorPlan,n=_e().find(s=>s.id===o);if(!(!o||!n)&&window.confirm(`确认清空「${n.name}」的平面底图？`))try{await p.upsertFloor?.({id:n.id,buildingId:n.buildingId,kind:n.kind,level:n.level,name:n.name,areaSqm:n.areaSqm,planImageUrl:null}),H=`已清空「${n.name}」平面底图。`,await we()}catch(s){ee=s instanceof Error?s.message:String(s),y()}}),a.querySelectorAll("[data-open-lightbox]").forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.lbTitle??"平面底图预览",n=e.dataset.lbSrc??"";n&&(Ie={title:o,imageUrl:n},y())})}),a.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{Ie=null,y()}),a.querySelector("[data-lightbox-scrim]")?.addEventListener("click",e=>{e.target===e.currentTarget&&(Ie=null,y())});function h(e,o){if(!e||o.length===0)return;const n=Fe(e),s=new Map;n.forEach(w=>{const d=Be(w.name)??w.name.toUpperCase();s.set(d,w)}),Ee=o.map((w,d)=>{const L=Be(w.name),ue=L?s.get(L):void 0;return{id:`bu-${Date.now().toString(36)}-${d}`,file:w,matchedFloorId:ue?.id??null}}),t=!0,y()}a.querySelector("[data-batch-upload-floors]")?.addEventListener("change",e=>{const o=e.currentTarget;h(o.dataset.batchUploadFloors??"",Array.from(o.files??[]))});const f=a.querySelector("[data-batch-dropzone]");f&&$.scope.canEditDeployment&&(f.addEventListener("dragover",e=>{e.preventDefault(),ze||(ze=!0,f.style.borderColor="var(--pacom-accent-solid)",f.style.background="var(--pacom-accent-soft)")}),f.addEventListener("dragleave",()=>{ze=!1,f.style.borderColor="",f.style.background=""}),f.addEventListener("drop",e=>{e.preventDefault(),ze=!1;const o=Array.from(e.dataTransfer?.files??[]).filter(n=>n.type.startsWith("image/"));h(f.dataset.batchDropzone??"",o)})),a.querySelectorAll("[data-batch-override-floor]").forEach(e=>{e.addEventListener("change",()=>{const o=Ee.find(n=>n.id===e.dataset.batchOverrideFloor);o&&(o.matchedFloorId=e.value||null,y())})}),a.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{Ee=[],y()}),a.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const e=Ee.filter(n=>n.matchedFloorId),o=Ee.length-e.length;if(e.length!==0)try{for(const n of e){const s=_e().find(d=>d.id===n.matchedFloorId);if(!s)continue;const w=await Xe(n.file);await p.upsertFloor?.({id:s.id,buildingId:s.buildingId,kind:s.kind,level:s.level,name:s.name,areaSqm:s.areaSqm,planImageUrl:w})}Ee=[],$e(),H=`已批量导入 ${e.length} 个楼层平面底图${o>0?`（跳过 ${o} 张未分配文件）`:""}。`,await we()}catch(n){ee=n instanceof Error?n.message:String(n),y()}}),a.querySelectorAll("[data-apply-zone-tpl]").forEach(e=>{e.addEventListener("click",async()=>{const o=$a.find(s=>s.key===e.dataset.applyZoneTpl),n=_e().find(s=>s.id===e.dataset.tplFloor);if(!(!o||!n))try{for(const s of o.items){const w=await p.upsertZone?.({floorId:n.id,name:`${n.name} ${s.suffix}`,category:s.category});w&&(ie[w.id]={left:20,top:20,width:24,height:24})}H=`已按「${o.label}」模板为 ${n.name} 创建 ${o.items.length} 个功能区。`,await we()}catch(s){ee=s instanceof Error?s.message:String(s),y()}})}),a.querySelector("[data-attach-doc]")?.addEventListener("change",e=>{const o=e.currentTarget,n=o.dataset.attachDoc,s=o.files?.[0],w=_e().find(L=>L.id===n);if(!n||!s||!w)return;const d=s.size>=1024*1024?`${(s.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(s.size/1024))} KB`;c.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:n,name:s.name,category:s.name.toLowerCase().endsWith(".xlsx")||s.name.toLowerCase().endsWith(".xls")?"点位清单":"竣工图纸",boundScope:`${w.name} · 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:d}),H=`已为 ${w.name} 关联文档「${s.name}」。`,y()}),a.querySelector("[data-add-zone]")?.addEventListener("submit",async e=>{e.preventDefault();const o=e.currentTarget.dataset.addZone,n=new FormData(e.currentTarget),s=String(n.get("zoneName")??"").trim(),w=String(n.get("zoneCat")??"office");if(s)try{const d=await p.upsertZone?.({floorId:o,name:s,category:w});d&&(ie[d.id]={left:20,top:20,width:24,height:24}),H=`已添加功能区「${s}」。`,await we()}catch(d){ee=d instanceof Error?d.message:String(d),y()}}),a.querySelectorAll("[data-edit-zone]").forEach(e=>{e.addEventListener("click",()=>{u=e.dataset.editZone??null,y()})}),a.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{u=null,y()}),a.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async e=>{e.preventDefault();const o=e.currentTarget,n=new FormData(o),s=String(n.get("zName")??"").trim(),w=String(n.get("zCat")??"office");if(s)try{await p.upsertZone?.({id:o.dataset.saveEditZone,floorId:o.dataset.zoneFloor,name:s,category:w}),u=null,H=`已更新功能区「${s}」。`,await we()}catch(d){ee=d instanceof Error?d.message:String(d),y()}}),a.querySelectorAll("[data-del-zone]").forEach(e=>{e.addEventListener("click",async()=>{const o=e.dataset.delZone,n=Me().find(s=>s.id===o);if(!(!o||!n)&&window.confirm(`确认删除功能区「${n.name}」？`))try{await p.deleteZone?.(o),u===o&&(u=null),H=`已删除功能区「${n.name}」。`,await we()}catch(s){ee=s instanceof Error?s.message:String(s),y()}})}),a.querySelectorAll("[data-open-copy-zones]").forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.openCopyZones??null;$e(),Se=o,Le=new Set(Fe(P).filter(n=>n.id!==o&&n.kind==="above"&&Me().filter(s=>s.floorId===n.id).length===0).map(n=>n.id)),y()})}),a.querySelectorAll("[data-copy-preset]").forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.copyPreset,n=Fe(P).filter(s=>s.id!==Se);o==="empty"?Le=new Set(n.filter(s=>s.kind==="above"&&Me().filter(w=>w.floorId===s.id).length===0).map(s=>s.id)):o==="above"?Le=new Set(n.filter(s=>s.kind==="above").map(s=>s.id)):Le.clear(),y()})}),a.querySelectorAll("[data-copy-target-floor]").forEach(e=>{e.addEventListener("change",()=>{const o=e.dataset.copyTargetFloor;o&&(e.checked?Le.add(o):Le.delete(o),y())})}),a.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async e=>{const o=e.currentTarget.dataset.confirmCopyZones,n=Array.from(Le);if(!(!o||n.length===0))try{const s=await p.copyZonesToFloors?.(o,n)??0;$e(),Le.clear(),H=`已将当前层功能区复用至 ${n.length} 个目标楼层（共新增 ${s} 个功能区）。`,await we()}catch(s){ee=s instanceof Error?s.message:String(s),y()}});const x=a.querySelector("[data-dep-canvas-search]");x?.addEventListener("focus",()=>{ae||(ae=!0,y(),a.querySelector("[data-dep-canvas-search]")?.focus())}),x?.addEventListener("input",e=>{K=e.currentTarget.value,ae=!0,y();const o=a.querySelector("[data-dep-canvas-search]");o&&(o.focus(),o.setSelectionRange(K.length,K.length))}),a.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{ae=!ae,y()}),a.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{ae=!1,y()}),a.querySelectorAll("[data-brush]").forEach(e=>{e.addEventListener("click",()=>{Z=e.dataset.brush??"device",y()})}),a.querySelectorAll("[data-dep-zoom]").forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.depZoom;o==="in"?Y=Math.min(2.6,Number((Y+.2).toFixed(2))):o==="out"?Y=Math.max(.6,Number((Y-.2).toFixed(2))):(Y=1,se=0,pe=0),We()})});const g=a.querySelector('[data-role="dep-stage"]');if(g&&!T){let e=!1,o=0,n=0,s=0,w=0;g.addEventListener("pointerdown",L=>{L.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(e=!0,o=L.clientX,n=L.clientY,s=se,w=pe,g.classList.add("is-panning"),g.setPointerCapture?.(L.pointerId))}),g.addEventListener("pointermove",L=>{e&&(se=s+(L.clientX-o),pe=w+(L.clientY-n),We())});const d=()=>{e&&(e=!1,g.classList.remove("is-panning"))};g.addEventListener("pointerup",d),g.addEventListener("pointercancel",d),g.addEventListener("wheel",L=>{L.preventDefault();const ue=L.deltaY<0?.12:-.12;Y=Math.max(.6,Math.min(2.6,Number((Y+ue).toFixed(2)))),We()},{passive:!1}),g.addEventListener("dblclick",L=>{L.target?.closest("button")||(Y=1,se=0,pe=0,We())})}a.querySelectorAll("[data-dev-filter]").forEach(e=>{e.addEventListener("click",()=>{re=e.dataset.devFilter??"all",y()})}),a.querySelector("[data-create-dev]")?.addEventListener("submit",e=>{e.preventDefault();const o=new FormData(e.currentTarget),n=String(o.get("devName")??"").trim(),s=String(o.get("devPreset")??"sensor"),w=String(o.get("devZone")??"")||null,d=da.find(ue=>ue.key===s)??da[0],L=`dev-custom-${Date.now().toString(36)}`;U.push({id:L,name:n,category:d.category,projectId:F||Q.projectId,buildingId:P,floorId:j,logicalZoneId:w,planPoint:{floorId:j,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),Te.set(L,{proxy:d.defaultProxy,relay:d.defaultRelay,meshUuid:`mesh-${j.slice(-4)}`}),d.category==="lighting"&&Re.push({id:`lm-${Date.now().toString(36)}`,deviceId:L,channel:"回路 1",label:`${n.slice(0,6)}主灯`,x:.52,y:.45}),$e(),k=L,R=!0,z="binding",fe=!0,H=`已新增「${n}」（${d.hint}），已生成默认标记并提示待同步边缘。`,y()}),a.querySelectorAll("[data-pick-dev]").forEach(e=>{e.addEventListener("click",o=>{o.stopPropagation(),k=e.dataset.pickDev??null,R=!0,z="binding",D=ke(j).find(s=>s.id===k)?.physicalInstalled??!1,y()})}),a.querySelectorAll("[data-open-dev-drawer]").forEach(e=>{e.addEventListener("click",o=>{if(o.target?.closest("button"))return;k=e.dataset.openDevDrawer??null,R=!0,z="binding",D=ke(j).find(s=>s.id===k)?.physicalInstalled??!1,y()})}),a.querySelectorAll("[data-open-dev-params]").forEach(e=>{e.addEventListener("click",o=>{o.stopPropagation(),k=e.dataset.openDevParams??null,R=!0,z="params",D=ke(j).find(s=>s.id===k)?.physicalInstalled??!1,y()})}),a.querySelector("[data-close-sel]")?.addEventListener("click",()=>{R=!1,T=!1,y()}),a.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{M!=="marking"?(M="marking",T=!0):T=!T,y()}),a.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{D=!D,y()}),a.querySelectorAll("[data-ping-dev]").forEach(e=>{e.addEventListener("click",o=>{o.stopPropagation();const n=ke(j).find(s=>s.id===e.dataset.pingDev);n&&(H=`已向「${n.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,y())})}),a.querySelector("[data-add-light-marker]")?.addEventListener("click",e=>{const o=e.currentTarget.dataset.addLightMarker,n=Re.filter(s=>s.deviceId===o).length+1;Re.push({id:`lm-${Date.now().toString(36)}`,deviceId:o,channel:`回路 ${n}`,label:`照明点位 ${n}`,x:Math.min(.86,.35+n*.1),y:.42}),Z="light_marker",H=`已新增「回路 ${n}」可视化灯点。`,y()}),a.querySelectorAll("[data-del-light-marker]").forEach(e=>{e.addEventListener("click",()=>{const o=Re.findIndex(n=>n.id===e.dataset.delLightMarker);o>=0&&Re.splice(o,1),y()})}),a.querySelectorAll("[data-toggle-mesh-role]").forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.meshDev,n=e.dataset.toggleMeshRole,s=Te.get(o)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};s[n]=!s[n],Te.set(o,s),fe=!0,H=`已更新节点 ${n.toUpperCase()} 状态，可在「网络拓扑」中一键同步至边缘网关。`,y()})}),a.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async e=>{const o=ke(j).find(d=>d.id===k);if(!T||!o)return;const n=e.currentTarget.getBoundingClientRect(),s=Math.max(.02,Math.min(.98,(e.clientX-n.left)/n.width)),w=Math.max(.02,Math.min(.98,(e.clientY-n.top)/n.height));if(U.some(d=>d.id===o.id)){o.planPoint={floorId:j,planVersion:1,x:Number(s.toFixed(4)),y:Number(w.toFixed(4))},T=!1,H=`已更新「${o.name}」图上坐标。`,y();return}try{await p.updateDevicePlanPoint({deviceId:o.id,floorId:Q.floorId,planVersion:o.planPoint?.planVersion??1,x:s,y:w,expectedVersion:o.version}),T=!1,H=`已更新「${o.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await we()}catch(d){ee=d instanceof Error?d.message:String(d),y()}}),a.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async e=>{e.preventDefault();const o=ke(j).find(s=>s.id===k);if(!o)return;const n=new FormData(e.currentTarget);if(U.some(s=>s.id===o.id)){o.physicalInstalled=D,o.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(n.get("protocol")),networkAddress:String(n.get("networkAddress")??""),portOrChannel:String(n.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:$.displayName},o.version+=1,fe=!0,H=`已保存「${o.name}」的硬件绑定与物理复核状态。`,y();return}try{await p.updateDeviceHardwareBinding({deviceId:o.id,gatewayId:o.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(n.get("protocol")),networkAddress:String(n.get("networkAddress")??""),portOrChannel:String(n.get("portOrChannel")??""),physicalInstalled:D,expectedVersion:o.version}),fe=!0,H=`已保存「${o.name}」的硬件绑定与物理安装复核状态。`,await we()}catch(s){ee=s instanceof Error?s.message:String(s),y()}}),a.querySelector("[data-save-dev-params]")?.addEventListener("submit",e=>{e.preventDefault();const o=e.currentTarget.dataset.saveDevParams,n=new FormData(e.currentTarget);ua.set(o,{offDelayMin:Number(n.get("offDelayMin")??15),restoreMin:Number(n.get("restoreMin")??30),luxOn:Number(n.get("luxOn")??280),luxOff:Number(n.get("luxOff")??450)}),fe=!0,H="设备自治延时与光感门限参数已下发并同步至配置基线。",y()}),a.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const e=ke(j).find(o=>o.id===k);e&&ga(e)}),a.querySelectorAll("[data-ftt-dev]").forEach(e=>{e.addEventListener("click",o=>{o.stopPropagation();const n=ke(j).find(s=>s.id===e.dataset.fttDev);n&&ga(n)})}),a.querySelectorAll("[data-batch-ftt]").forEach(e=>{e.addEventListener("click",()=>ja())}),a.querySelectorAll("[data-export-inv]").forEach(e=>{e.addEventListener("click",()=>Aa())}),a.querySelector("[data-create-group]")?.addEventListener("submit",e=>{e.preventDefault();const o=new FormData(e.currentTarget),n=String(o.get("gName")??"").trim(),s=o.get("gTrack")??"mesh_auto",w=String(o.get("gType")??"灯光联动组");n&&(sa.unshift({id:`grp-${Date.now().toString(36)}`,track:s,groupType:w,name:n,floorId:j,includesAdapter:s==="mesh_auto",deviceIds:s==="mesh_auto"?["dev-e7f-gw-01"]:[]}),$e(),s==="mesh_auto"&&(fe=!0),H=`已新建${s==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${n}」。`,y())}),a.querySelectorAll("[data-test-group]").forEach(e=>{e.addEventListener("click",()=>{const o=sa.find(n=>n.id===e.dataset.testGroup);o&&(H=`已向分组「${o.name}」发送群组试控指令，${o.deviceIds.length} 台成员回读正常。`,y())})}),a.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>qa()),a.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{Ae+=1,fe=!1,H=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${Ae}）。`,y()}),a.querySelectorAll("[data-topo-mode]").forEach(e=>{e.addEventListener("click",()=>{te=e.dataset.topoMode??"mesh",y()})}),a.querySelectorAll("[data-topo-jump]").forEach(e=>{e.addEventListener("click",()=>{k=e.dataset.topoJump??null,R=!0,z="binding",A="devices",M="marking",y()})}),a.querySelector("[data-create-conn]")?.addEventListener("submit",e=>{e.preventDefault();const o=new FormData(e.currentTarget),n=String(o.get("cName")??"").trim(),s=String(o.get("cProto")??"bacnet_ip"),w=String(o.get("cEndpoint")??"").trim();if(O.some(d=>d.endpoint===w)){ee=`端口冲突警告：局域网端点「${w}」已被其他通道占用，请更换端口后重试。`,y();return}O.unshift({id:`conn-${Date.now().toString(36)}`,projectId:F||Q.projectId,buildingId:P,floorId:j,name:n,protocol:s,endpoint:w,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),$e(),ee="",H=`已接入「${n}」（${w}），连通测试通过（18 ms）。`,y()}),a.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{H="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",y()}),a.querySelectorAll("[data-expand-conn]").forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.expandConn??null;De=De===o?null:o,y()})}),a.querySelectorAll("[data-ping-conn]").forEach(e=>{e.addEventListener("click",()=>{const o=O.find(n=>n.id===e.dataset.pingConn);o&&(ee="",o.status==="connected"?H=`连通测试通过：「${o.name}」（${o.endpoint}）响应正常，延迟 18 ms。`:ee=`连通测试异常：「${o.name}」（${o.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,y())})}),a.querySelectorAll("[data-copy-endpoint]").forEach(e=>{e.addEventListener("click",async()=>{const o=e.dataset.endpointVal??"",n=e.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(o),qe=n,y(),window.setTimeout(()=>{qe=null,y()},1600)}catch{}})}),a.querySelectorAll("[data-preview-doc]").forEach(e=>{e.addEventListener("click",()=>{const o=[...ya,...c].find(n=>n.id===e.dataset.previewDoc);o&&(H=`已调阅工程附件「${o.name}」（关联范围：${o.boundScope}，更新于 ${o.updatedAt}）。`,y())})}),a.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const e=await p.freezeDeliveryBatch(Q.floorId,"部署总览验收发起交付冻结");H=`已生成交付冻结快照 ${e.versionTag}（核验 ${e.verifiedCount}/${e.deviceCount}）。`,await we()}catch(e){ee=e instanceof Error?e.message:String(e),y()}})}await we()}const lt=new Set(["lighting","hvac","alarm_rules"]),xa={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Je=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function it(a){const p=new Set;for(const $ of a.actions)$.command.startsWith("lighting")?p.add("照明"):$.command.startsWith("hvac")?p.add("暖通"):p.add("综合");return Array.from(p)}function ct(a,p,$){const oe=$?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${a<p?`<div style="position:absolute; left:${a/24*100}%; width:${(p-a)/24*100}%; top:0; bottom:0; border-radius:999px; background:${oe};"></div>`:`
        <div style="position:absolute; left:${a/24*100}%; width:${(24-a)/24*100}%; top:0; bottom:0; border-radius:999px; background:${oe};"></div>
        <div style="position:absolute; left:0; width:${p/24*100}%; top:0; bottom:0; border-radius:999px; background:${oe};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function dt(a,p,$){let oe=ta(),C=!1,A="",[M,z,B,ce]=await Promise.all([p.getSpatialTree(),p.listScenes(Q.floorId),p.getRuntimeSettings(Q.projectId),p.getFloorDevices(Q.floorId).catch(()=>[])]),_="manual",de="balanced",ge="all",Z=null,re="",K=!1,ae=!1,R=!1,te="all",Y=null,se="",pe="",I=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const le=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],O=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],be=[{deviceId:ce[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],ie=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${B.calendar.workdayStart} – ${B.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${B.calendar.nightGuardStart} – 次日 ${B.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],U=p.subscribeFloorEvents(Q.floorId,async P=>{P.type==="control.receipt.updated"&&Z?.batchId===P.batchId&&(Z=await p.getControlBatch(P.batchId),F())});function F(){const P=re.trim().toLowerCase(),j=P?z.filter(t=>`${t.name} ${t.description}`.toLowerCase().includes(P)):z,X=B.rules.filter(t=>lt.has(t.category)),ye=ge==="all"?X:ge==="cbm"?[]:X.filter(t=>t.category===ge),ve=ge==="all"||ge==="cbm",v=te==="issues"?le.filter(t=>t.status!=="verified"):le,q=Je.find(t=>t.id===de)??Je[1],V=$.scope.canControlDevices,E=$.scope.canEditSettings;a.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${ea({tree:M,session:$,scope:oe,isOpen:C,searchKeyword:A})}
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${I.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${I.length>0?`人工覆盖中：${I.length} 台 ${J("chevron-down",12)}`:`全部自动托管 ${J("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${R?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${le.length}）</button>
              ${_==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${K?"收起表单":"+ 新建场景"}</button>`:_==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${_==="manual"}" data-scene-tab="manual">快捷场景（${z.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${_==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${_==="rules"}" data-scene-tab="rules">条件联动（${X.length+O.length}）</button>
          </nav>
        </header>

        ${ae?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${I.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${J("x",16)}</button>
              </div>
              ${I.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':I.map(t=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${t.name}</div>
                            <div class="pacom-row-sub">${t.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${t.id}" ${V?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${I.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${V?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${R?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${J("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${te==="all"}" data-log-filter="all">全部（${le.length}）</button>
                  <button class="pacom-tab" aria-selected="${te==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${v.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${v.map(t=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${t.device}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${t.source}</span>
                        </div>
                        <span class="pacom-row-sub">${t.action} · ${t.at}</span>
                      </div>
                      <span class="pacom-badge ${t.status==="verified"?"pacom-badge--online":t.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${t.status==="verified"?"回读确认":t.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${se?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${se}</span></div>`:""}
          ${pe?`<div class="pacom-alert-banner">${pe}</div>`:""}

          ${_==="manual"?`
              ${Z?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${Z.batchId}</span>
                      </div>
                      <button class="pacom-btn pacom-btn--ghost" data-close-batch="1">关闭回执</button>
                    </div>
                    <div class="pacom-table-card">
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>目标设备</th>
                              <th>下发指令</th>
                              <th>目标值</th>
                              <th>回读状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${Z.receipts.map(t=>`
                                <tr>
                                  <td><code style="font-size:12px;">${t.deviceId}</code></td>
                                  <td>${t.command}</td>
                                  <td>${String(t.targetValue)}${t.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${t.errorMessage}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${t.status==="verified_success"?"pacom-badge--online":t.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${t.status}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${K?`
                  <section class="pacom-section">
                    <h2 class="pacom-section-title">新建快捷场景（多设备动作编排）</h2>
                    <form class="pacom-settings-card" data-role="new-scene-form">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">场景名称与说明</span>
                          <span class="pacom-setting-desc">例如「实验区午休调光」「重要来访接待模式」</span>
                        </div>
                        <div class="pacom-setting-control" style="width:min(460px,100%); gap:8px;">
                          <input class="pacom-input" name="name" placeholder="场景名称" required />
                          <input class="pacom-input" name="description" placeholder="联动效果说明" required />
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:8px;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <span class="pacom-setting-title">联动动作列表（${be.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${be.map((t,r)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${r}" aria-label="目标设备">
                                ${ce.map(S=>`<option value="${S.id}" ${S.id===t.deviceId?"selected":""}>${S.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${r}" aria-label="执行指令">
                                <option value="lighting.dimming" ${t.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${t.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${t.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${r}" value="${t.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${r}" ${be.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${re}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${j.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${j.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':j.map(t=>{const r=it(t),S=t.actions.slice(0,3).map(W=>{const Se=ce.find(Ie=>Ie.id===W.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??W.deviceId,Le=W.command==="lighting.dimming"?`亮度 ${W.targetValue}%`:W.command==="hvac.setpoint"?`设温 ${W.targetValue}°C`:W.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${Se} → ${Le}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${t.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${r.map(W=>`<span class="pacom-badge pacom-badge--accent">${W}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${t.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${t.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${S}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${t.lastExecutedAt?t.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${t.id}" ${V?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:_==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${q.title}</div>
                    <span class="pacom-kpi-delta">${q.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${q.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${q.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${I.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${Je.map(t=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${de===t.id}" data-oss-mode="${t.id}" ${V?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${t.title}</strong>
                          <span class="pacom-badge ${de===t.id?"pacom-badge--online":"pacom-badge--neutral"}">${de===t.id?"当前生效":t.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${t.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${t.estSaving}</span>
                      </button>`).join("")}
                  </div>
                </section>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">E7F 自动排程时间表</h2>
                    <button class="pacom-btn" data-go-settings="1">调整项目工作日历 →</button>
                  </div>
                  <div class="pacom-table-card">
                    <div class="pacom-table-wrap">
                      <table class="pacom-table">
                        <thead>
                          <tr>
                            <th>排程任务</th>
                            <th>24 小时覆盖时段</th>
                            <th>联动范围</th>
                            <th style="text-align:right;">启停状态</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${ie.map(t=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${t.name}</span>
                                    ${t.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${t.windowLabel}</div>
                                </td>
                                <td>${ct(t.startHour,t.endHour,t.enabled)}</td>
                                <td><span class="pacom-row-sub">${t.scope}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${t.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${t.enabled}"
                                      aria-label="切换排程 ${t.name}"
                                      data-toggle-schedule="${t.id}"
                                      ${V?"":"disabled"}
                                    >
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </td>
                              </tr>`).join("")}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>`:`
                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">事件、传感联动与工时维保规则（IF → THEN / CBM）</h2>
                    <div class="pacom-count-pills" role="group" aria-label="按系统筛选规则">
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(t=>{const r=t==="all"?"全部":xa[t]??t,S=t==="all"?X.length+O.length:t==="cbm"?O.length:X.filter(W=>W.category===t).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${ge===t}" data-rule-cat="${t}">
                              <span>${r}</span><span class="pacom-count-num">${S}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${ye.map(t=>{const r=Y===t.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${xa[t.category]??t.category}</span>
                                  <span>${t.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${t.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${t.summary} · 范围：${t.scopeLabel} · 回执：${t.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${t.id}">${r?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${t.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${t.enabled?"true":"false"}"
                                  aria-label="切换 ${t.name}"
                                  data-toggle-strategy-rule="${t.id}"
                                  data-rule-ver="${t.version}"
                                  data-rule-next="${!t.enabled}"
                                  ${E?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${r?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${t.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":t.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${t.scopeLabel} · 当前版本：v${t.version} · 最近同步：${t.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${ve?O.map(t=>{const r=Math.min(100,Math.round(t.runtimeHours/t.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${t.name}</span>
                                      <span class="pacom-badge ${r>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${t.runtimeHours} / ${t.thresholdHours} h（${r}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${r}%; background:${r>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${t.equipment} · 上次重置：${t.lastReset}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${t.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${t.enabled}" data-toggle-cbm="${t.id}" aria-label="切换 ${t.name}" ${E?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,aa(a,{onToggle:()=>{C=!C,F(),C&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:t=>{A=t,F();const r=a.querySelector("[data-global-space-search]");r&&(r.focus(),r.setSelectionRange(t.length,t.length))},onPick:t=>{oe=t,C=!1,F()}}),a.querySelectorAll("[data-scene-tab]").forEach(t=>{t.addEventListener("click",()=>{_=t.dataset.sceneTab??"manual",se="",F()})}),a.querySelectorAll("[data-toggle-overrides]").forEach(t=>{t.addEventListener("click",()=>{ae=!ae,F()})}),a.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{I=[],se="已释放全部人工覆盖设备，自动节能策略已恢复托管。",F()}),a.querySelectorAll("[data-release-one]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.releaseOne;I=I.filter(S=>S.id!==r),se="已恢复该设备的自动策略托管。",F()})}),a.querySelectorAll("[data-toggle-cmdlog]").forEach(t=>{t.addEventListener("click",()=>{R=!R,F()})}),a.querySelectorAll("[data-log-filter]").forEach(t=>{t.addEventListener("click",()=>{te=t.dataset.logFilter??"all",F()})}),a.querySelector("[data-close-batch]")?.addEventListener("click",()=>{Z=null,F()}),a.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),a.querySelectorAll("[data-oss-mode]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.ossMode;if(!r)return;de=r;const S=Je.find(W=>W.id===r);se=`已切换至「${S?.title??r}」模式（明日预测启动 ${S?.predictedStart??""}）。`,F()})}),a.querySelectorAll("[data-toggle-schedule]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.toggleSchedule,S=ie.find(W=>W.id===r);S&&(S.enabled=!S.enabled,se=`排程「${S.name}」已${S.enabled?"恢复启用":"临时暂停"}。`,F())})}),a.querySelectorAll("[data-rule-cat]").forEach(t=>{t.addEventListener("click",()=>{ge=t.dataset.ruleCat??"all",F()})}),a.querySelectorAll("[data-expand-rule]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.expandRule??null;Y=Y===r?null:r,F()})}),a.querySelectorAll("[data-toggle-cbm]").forEach(t=>{t.addEventListener("click",()=>{const r=O.find(S=>S.id===t.dataset.toggleCbm);r&&(r.enabled=!r.enabled,se=`工时维保规则「${r.name}」已${r.enabled?"启用":"停用"}。`,F())})}),a.querySelectorAll("[data-toggle-strategy-rule]").forEach(t=>{t.addEventListener("click",async()=>{pe="";try{await p.toggleRuntimeRule(t.dataset.toggleStrategyRule,t.dataset.ruleNext==="true",Number(t.dataset.ruleVer)),B=await p.getRuntimeSettings(Q.projectId),se="条件联动规则状态与版本回执已更新。",F()}catch(r){pe=r instanceof Error?r.message:String(r),F()}})}),a.querySelectorAll("[data-toggle-create]").forEach(t=>{t.addEventListener("click",()=>{K=!K,F()})}),a.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{be.push({deviceId:ce[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),F()}),a.querySelectorAll("[data-del-draft-action]").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.delDraftAction);be.length>1&&(be.splice(r,1),F())})}),a.querySelectorAll("[data-draft-dev]").forEach(t=>{t.addEventListener("change",()=>{const r=be[Number(t.dataset.draftDev)];r&&(r.deviceId=t.value)})}),a.querySelectorAll("[data-draft-cmd]").forEach(t=>{t.addEventListener("change",()=>{const r=be[Number(t.dataset.draftCmd)];r&&(r.command=t.value)})}),a.querySelectorAll("[data-draft-val]").forEach(t=>{t.addEventListener("change",()=>{const r=be[Number(t.dataset.draftVal)];r&&(r.targetValue=t.value)})}),a.querySelector("[data-scene-search]")?.addEventListener("input",t=>{const r=t.currentTarget,S=r.selectionStart??r.value.length;re=r.value,F();const W=a.querySelector("[data-scene-search]");W&&(W.focus(),W.setSelectionRange(S,S))}),a.querySelectorAll("[data-exec-scene]").forEach(t=>{t.addEventListener("click",async()=>{pe="";const r=z.find(S=>S.id===t.dataset.execScene);try{Z=await p.executeScene(t.dataset.execScene),z=await p.listScenes(Q.floorId),le.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:r?.name??"E7F 场景",action:`${Z.receipts.length} 台设备联动下发`,status:"verified"}),F()}catch(S){pe=S instanceof Error?S.message:String(S),F()}})}),a.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async t=>{t.preventDefault();const r=new FormData(t.currentTarget);try{await p.createScene({projectId:Q.projectId,floorId:Q.floorId,name:String(r.get("name")??""),description:String(r.get("description")??""),actions:be.map(S=>({deviceId:S.deviceId,command:S.command,targetValue:S.targetValue==="true"?!0:S.targetValue==="false"?!1:Number(S.targetValue)||50}))}),z=await p.listScenes(Q.floorId),K=!1,se=`快捷场景已保存（共绑定 ${be.length} 条联动动作）。`,F()}catch(S){pe=S instanceof Error?S.message:String(S),F()}})}F(),window.addEventListener("hashchange",()=>U(),{once:!0})}const Sa={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function ra(a,p){return a.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':a.map($=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${$.name}</span>
            <span class="pacom-badge pacom-badge--neutral">v${$.version}</span>
            <span class="pacom-badge pacom-badge--accent">${$.scopeLabel}</span>
          </span>
          <span class="pacom-setting-desc">${$.summary} · 回执：${$.receiptSummary??"已同步"}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${$.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${$.enabled?"true":"false"}"
            aria-label="切换 ${$.name}"
            data-toggle-rule="${$.id}"
            data-rule-ver="${$.version}"
            data-rule-next="${!$.enabled}"
            ${p?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function rt(a,p,$){let oe="calendar",C=ta(),A=!1,M="";const[z,B]=await Promise.all([p.getSpatialTree(),p.getRuntimeSettings(Q.projectId)]);let ce=B,_=ce.calendar.workdayStart,de=ce.calendar.workdayEnd,ge=ce.calendar.nightGuardStart,Z=ce.calendar.nightGuardEnd,re=!0,K=[];const ae=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let R="flat";const te={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},Y={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},se={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},pe={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},I=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let le="",O="";function be(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(F=>{const P=Sa[F];return`
                <button type="button" class="pacom-unified-item" aria-current="${oe===F}" data-stab="${F}">
                  ${J(P.icon,16)}
                  <span>${P.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function ie(){const U=$.scope.canEditSettings,F=$.scope.activeOverrides.find(v=>v.module==="settings"&&v.status==="active"),P=z.projects[0]?.name??"当前项目",j=ce.rules.filter(v=>v.category==="weather_area"),X=ce.rules.filter(v=>v.category==="metering_carbon"),ye=ce.rules.filter(v=>v.category==="templates"),ve=Sa[oe];a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${ea({tree:z,session:$,scope:C,maxGranularity:"project",isOpen:A,searchKeyword:M})}
            </div>
            <div class="pacom-header-meta">
              ${U?F?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${be()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${ve.label}</h2>
                <p class="pacom-unified-subtitle">${ve.subtitle}</p>
              </div>
              ${F?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 · ${F.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${F.approvedBy} · 到期自动收回：${F.expiresAt.slice(0,16).replace("T"," ")} · 事由：${F.reason}</span>
                      </div>
                    </div>`:""}
              ${le?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${le}</span></div>`:""}
              ${O?`<div class="pacom-alert-banner">${O}</div>`:""}

              ${oe==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${ce.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${_}" aria-label="工作日上班时间" ${U?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${de}" aria-label="工作日下班时间" ${U?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${ge}" aria-label="夜间值守开始" ${U?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${Z}" aria-label="夜间值守结束" ${U?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${re?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${re}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${U?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${U?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${ae.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${ae.map(v=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${v.date}</span><span class="pacom-badge pacom-badge--accent">${v.mode}</span></span>
                              <span class="pacom-setting-desc">${v.label}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${v.id}" ${U?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${U?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${U?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${U?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${U?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${K.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${K.length} 条</span>
                        </div>
                        <div class="pacom-table-card">
                          <div class="pacom-table-wrap">
                            <table class="pacom-table">
                              <thead>
                                <tr>
                                  <th>规则名称</th>
                                  <th>原时间窗口</th>
                                  <th>变更后窗口</th>
                                  <th>影响评估</th>
                                </tr>
                              </thead>
                              <tbody>
                                ${K.map(v=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${v.ruleName}</div>
                                        ${v.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${v.conflictWarning}</div>`:""}
                                      </td>
                                      <td>${v.beforeWindow}</td>
                                      <td><strong>${v.afterWindow}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${v.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${v.conflictWarning?"交叠警告":"自动跟随"}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>`:""}`:oe==="energy_weather"?`
                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">气象与面积口径</h2>
                        <span class="pacom-row-sub">用于能效归一化与负荷预测基准</span>
                      </div>
                      <div class="pacom-settings-card">
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">室外气象数据源</span>
                            <span class="pacom-setting-desc">自动接入室外温湿度与辐射数据，支撑暖通预冷与能耗基线修正</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${U?"":"disabled"}>
                              <option value="guanzhou_station" ${te.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${te.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${P}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${te.billingArea}" aria-label="计费面积" ${U?"":"disabled"} />
                          </div>
                        </div>
                        ${ra(j,U)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${R==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${R==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${R==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${te.tariffYuan}" aria-label="综合电价" ${U?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${te.tariffPeak}" ${U?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${te.tariffFlat}" ${U?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${te.tariffValley}" ${U?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${U?"":"disabled"}>
                              <option value="0.5271" ${te.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${te.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${ra(X,U)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${U?"":"disabled"}>保存口径参数</button>
                        </div>
                      </div>
                    </section>`:oe==="guardrails"?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">设备控制保护参数</h2>
                          <span class="pacom-badge pacom-badge--accent">防止误操作与设备空转</span>
                        </div>
                        <div class="pacom-settings-card">
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">空调允许设定温区（°C）</span>
                              <span class="pacom-setting-desc">前端控制抽屉与批量指令均不得超出此安全上下限</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${Y.minTemp}" aria-label="最低设定温度" ${U?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${Y.maxTemp}" aria-label="最高设定温度" ${U?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${U?"":"disabled"}>
                                <option value="2h" ${Y.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${Y.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${Y.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${Y.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${Y.readbackTimeoutSec}" aria-label="回读超时阈值" ${U?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${U?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${ra(ye,U)}
                        </div>
                      </section>`:`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">定时简报与夜间静默</h2>
                        </div>
                        <div class="pacom-settings-card">
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">每日运行与能耗晨间简报</span>
                              <span class="pacom-setting-desc">定时汇总昨日能耗偏差、未结工单、舒适度达标与室外天气（首页亦可随时手动查看）</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${pe.dailyDigestTime}" aria-label="每日简报发送时间" />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${pe.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
                                <span class="pacom-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">夜间静默免打扰（23:00 – 07:00）</span>
                              <span class="pacom-setting-desc">夜间静默一般与重要提醒，严重级别告警与网关中断仍自动穿透</span>
                            </div>
                            <div class="pacom-setting-control">
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${pe.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
                                <span class="pacom-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">告警超时自动派单</h2>
                          <span class="pacom-row-sub">引用「机构与账户」工作组定义</span>
                        </div>
                        <div class="pacom-settings-card">
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">严重告警持续超阈值自动派单</span>
                              <span class="pacom-setting-desc">告警持续未恢复达到设定分钟数时，自动创建运维工单并分派至对应处理组</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${se.delayMin}" ${U?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${se.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${U?"":"disabled"}>
                                <span class="pacom-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">默认派单处理组与防重保护</span>
                              <span class="pacom-setting-desc">同一告警若已关联未结工单，自动跳过建单以避免重复派单</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" data-auto-wo="defaultGroup" aria-label="默认处理组" ${U?"":"disabled"}>
                                <option value="暖通运维组" ${se.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${se.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${se.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${se.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${U?"":"disabled"}>
                                <span class="pacom-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">按工作组分流推送规则</h2>
                          <span class="pacom-row-sub">按专业工作组、负责空间与告警级别精准触达</span>
                        </div>
                        <div class="pacom-table-card">
                          <div class="pacom-table-wrap">
                            <table class="pacom-table">
                              <thead>
                                <tr>
                                  <th>接收工作组</th>
                                  <th>负责空间范围</th>
                                  <th>告警级别</th>
                                  <th>推送通道</th>
                                  <th style="text-align:right;">状态</th>
                                </tr>
                              </thead>
                              <tbody>
                                ${I.map(v=>`
                                    <tr>
                                      <td><strong>${v.groupName}</strong></td>
                                      <td>${v.scope}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${v.severity}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${v.channels}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${v.enabled}" data-toggle-nr="${v.id}" aria-label="切换 ${v.groupName} 通知规则">
                                          <span class="pacom-switch-thumb"></span>
                                        </button>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>`}
            </div>
          </div>
        </div>
      </div>
    `,aa(a,{onToggle:()=>{A=!A,ie(),A&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:v=>{M=v,ie();const q=a.querySelector("[data-global-space-search]");q&&(q.focus(),q.setSelectionRange(v.length,v.length))},onPick:v=>{C=v,A=!1,ie()}}),a.querySelectorAll("[data-stab]").forEach(v=>{v.addEventListener("click",()=>{oe=v.dataset.stab??"calendar",le="",O="",ie()})}),a.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{re=!re,le=`法定节假日自动跳过已${re?"开启":"关闭"}。`,ie()}),a.querySelector("[data-night-start]")?.addEventListener("change",v=>{ge=v.currentTarget.value}),a.querySelector("[data-night-end]")?.addEventListener("change",v=>{Z=v.currentTarget.value}),a.querySelector("[data-add-sd-form]")?.addEventListener("submit",v=>{v.preventDefault();const q=new FormData(v.currentTarget);ae.push({id:`sd-${Date.now()}`,date:String(q.get("date")??""),label:String(q.get("label")??""),mode:String(q.get("mode")??"保持工作日工况")}),le="已添加特殊例外日期，当日自动覆盖默认节假日排程。",ie()}),a.querySelectorAll("[data-del-sd]").forEach(v=>{v.addEventListener("click",()=>{const q=ae.findIndex(V=>V.id===v.dataset.delSd);q>=0&&ae.splice(q,1),ie()})}),a.querySelectorAll("[data-tariff-mode]").forEach(v=>{v.addEventListener("click",()=>{R=v.dataset.tariffMode??"flat",ie()})}),a.querySelectorAll("[data-energy-field]").forEach(v=>{v.addEventListener("change",()=>{const q=v.dataset.energyField;q&&(te[q]=v.value)})}),a.querySelector("[data-save-energy]")?.addEventListener("click",()=>{le=R==="flat"?`能耗计费与气象口径已保存（面积 ${te.billingArea} m² · 综合电价 ¥${te.tariffYuan}/kWh · 因子 ${te.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${te.tariffPeak} / 平 ¥${te.tariffFlat} / 谷 ¥${te.tariffValley}）。`,ie()}),a.querySelectorAll("[data-guard-field]").forEach(v=>{v.addEventListener("change",()=>{const q=v.dataset.guardField;q&&(Y[q]=v.value)})}),a.querySelector("[data-save-guard]")?.addEventListener("click",()=>{le=`控制保护参数已保存（温区 ${Y.minTemp}–${Y.maxTemp}°C · 超时 ${Y.readbackTimeoutSec}s）。`,ie()}),a.querySelectorAll("[data-auto-wo]").forEach(v=>{v.addEventListener("change",()=>{const q=v.dataset.autoWo;q&&(se[q]=v.value),le="超时自动派单配置已更新。",ie()})}),a.querySelectorAll("[data-toggle-autowo]").forEach(v=>{v.addEventListener("click",()=>{const q=v.dataset.toggleAutowo;q&&(se[q]=!se[q],le="自动派单保护策略已更新。",ie())})}),a.querySelector("[data-digest-time]")?.addEventListener("change",v=>{pe.dailyDigestTime=v.currentTarget.value,le=`每日晨间简报发送时刻已更新为 ${pe.dailyDigestTime}。`,ie()}),a.querySelectorAll("[data-notify-key]").forEach(v=>{v.addEventListener("click",()=>{const q=v.dataset.notifyKey;q&&(pe[q]=!pe[q],le="消息通知偏好已更新。",ie())})}),a.querySelectorAll("[data-toggle-nr]").forEach(v=>{v.addEventListener("click",()=>{const q=I.find(V=>V.id===v.dataset.toggleNr);q&&(q.enabled=!q.enabled,le=`工作组「${q.groupName}」的分流推送规则已${q.enabled?"启用":"停用"}。`,ie())})}),a.querySelector("[data-cal-start]")?.addEventListener("change",v=>{_=v.currentTarget.value}),a.querySelector("[data-cal-end]")?.addEventListener("change",v=>{de=v.currentTarget.value}),a.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{O="",K=await p.previewCalendarImpact(Q.projectId,_,de),ie()}),a.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{O="";try{const v=await p.saveWorkCalendar(Q.projectId,_,de,ce.calendar.version);ce={...ce,calendar:{...v,nightGuardStart:ge,nightGuardEnd:Z}},le=`工作时间配置已保存至 v${v.version}（工作日 ${v.workdayStart}–${v.workdayEnd} · 夜间值守 ${ge}–${Z}）`,K=[],ie()}catch(v){O=v instanceof Error?v.message:String(v),ie()}}),a.querySelectorAll("[data-toggle-rule]").forEach(v=>{v.addEventListener("click",async()=>{O="";try{await p.toggleRuntimeRule(v.dataset.toggleRule,v.dataset.ruleNext==="true",Number(v.dataset.ruleVer)),ce=await p.getRuntimeSettings(Q.projectId),le="策略状态与版本回执已更新。",ie()}catch(q){O=q instanceof Error?q.message:String(q),ie()}})})}ie()}const ka="pacom.web.sidebar.collapsed",pt=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Ea=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],ma={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},La=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function pa(){const a=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return a in ma?a:"home"}function je(a){return a.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const Qe=new WeakMap;async function mt(a,p,$,oe){Qe.get(a)?.(),a.classList.remove("bare-login");let C=$,A=pa(),M=localStorage.getItem(ka)==="1",z=!1,B=!1,ce=!1,_=await p.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],de=p.getActiveOrganizationId?.()??_[0]?.id??"org-gzlab",ge="",Z=!1,re=0,K={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function ae(i){return C.scope.visibleModules.includes(i)}ae(A)||(A="home",window.location.hash="#home");function R(){return _.find(i=>i.id===de)??_[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function te(i){if(i.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const t=i.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${je(t)}</span>`}async function Y(){p.listOrganizations&&(_=await p.listOrganizations(),de=p.getActiveOrganizationId?.()??_[0]?.id??"org-gzlab")}async function se(){try{await Y();const[i,t,r,S,W]=await Promise.all([p.getSpatialTree(),p.getFloorDevices(Q.floorId).catch(()=>[]),p.listAlarms(Q.floorId).catch(()=>[]),p.listWorkOrders(Q.floorId).catch(()=>[]),p.listScenes(Q.floorId).catch(()=>[])]);K={devices:t,zones:i.zones,alarms:r,workOrders:S,scenes:W},re=r.filter(Se=>Se.status==="active").length,F()}catch{}}function pe(){const i=Ea.filter(r=>ae(r.id));let t=!1;return i.map(r=>`
        ${(r.id==="settings"||r.id==="deployment")&&!t?(t=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${r.id}" aria-current="${A===r.id?"page":"false"}" title="${r.label}">
          ${J(r.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${r.label}</span>
          ${r.id==="alarms"&&re>0?`<span class="pacom-nav-count" title="待处理告警 ${re} 条">${re}</span>`:""}
        </button>`).join("")}function I(){const i=ge.trim().toLowerCase(),t=Ea.filter(c=>ae(c.id)),r=i?t.filter(c=>c.label.toLowerCase().includes(i)).slice(0,4):t,S=i?K.devices.filter(c=>`${c.name} ${c.id} ${c.category}`.toLowerCase().includes(i)).slice(0,5):K.devices.slice(0,3),W=i?K.zones.filter(c=>c.name.toLowerCase().includes(i)).slice(0,3):[],Se=ae("alarms")?i?K.alarms.filter(c=>`${c.title} ${c.message} ${c.id}`.toLowerCase().includes(i)).slice(0,4):K.alarms.filter(c=>c.status==="active").slice(0,2):[],Le=ae("alarms")?i?K.workOrders.filter(c=>`${c.title} ${c.id}`.toLowerCase().includes(i)).slice(0,3):[]:[],Ie=ae("scenes")?i?K.scenes.filter(c=>`${c.name} ${c.description}`.toLowerCase().includes(i)).slice(0,3):[]:[],ze=ae("deployment")?i?La.filter(c=>`${c.title} ${c.category}`.toLowerCase().includes(i)).slice(0,4):La.slice(0,2):[],Ee=[];return S.length&&Ee.push(`<div class="pacom-search-group">${i?"设备（空间总览）":"常用设备直达"}</div>`+S.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(c.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${je(c.name)}</span><span class="pacom-badge ${c.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${c.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),W.length&&Ee.push('<div class="pacom-search-group">功能区</div>'+W.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(c.id)}"><span>${je(c.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),Se.length&&Ee.push(`<div class="pacom-search-group">${i?"告警":"待处理告警"}</div>`+Se.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(c.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${je(c.title)}</span><span class="pacom-badge pacom-badge--warning">${c.status==="active"?"待处理":"已确认"}</span></button>`).join("")),Le.length&&Ee.push('<div class="pacom-search-group">运维工单</div>'+Le.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(c.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${je(c.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),Ie.length&&Ee.push('<div class="pacom-search-group">智能策略</div>'+Ie.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${je(c.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),ze.length&&Ee.push('<div class="pacom-search-group">图纸与工程文档</div>'+ze.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="${c.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${je(c.title)}</span><span class="pacom-badge pacom-badge--neutral">${je(c.category)}</span></button>`).join("")),r.length&&Ee.push('<div class="pacom-search-group">工作区</div>'+r.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="#${c.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${J(c.icon,14)}${je(c.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),Ee.length?Ee.join(""):`<div class="pacom-nav-empty">未找到与「${je(ge)}」匹配的设备、区域、告警、工单或图纸</div>`}function le(i){i.querySelectorAll("[data-search-hash]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.searchHash||"#home";Z=!1,ge="",O(),z=!1,window.location.hash===r?(A=pa(),ve(!0)):window.location.hash=r})})}function O(){if(a.querySelector('[data-role="cmd-scrim"]')?.remove(),!Z)return;const i=document.createElement("div");i.className="pacom-cmd-scrim",i.dataset.role="cmd-scrim",i.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${J("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${je(ge)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${I()}
        </div>
      </div>
    `,a.appendChild(i),i.addEventListener("click",S=>{S.target===i&&(Z=!1,O())});const t=i.querySelector('[data-role="cmd-input"]'),r=i.querySelector('[data-role="cmd-body"]');r&&le(r),t?.focus(),t?.addEventListener("input",S=>{ge=S.currentTarget.value,r&&(r.innerHTML=I(),le(r))})}function be(){if(!B)return"";const i=C.displayName.slice(0,1)||"U",t=!!(p.createOrganization&&C.role==="org_admin");return`
      <div class="pacom-org-popover ${M?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${_.map(r=>{const S=r.id===de;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${S}" data-pop-org="${je(r.id)}">
                ${te(r)}
                <span class="pacom-pop-text">
                  <b>${je(r.name)}</b>
                  <small>${r.projectCount>0?`${r.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${S?J("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${t?ce?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${J("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${J("settings",16)}</span>
          <span class="pacom-pop-text">机构与权限</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${je(i)}</span>
          <span class="pacom-pop-text">
            <b>${je(C.displayName)}</b>
            <small>${je(C.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${J("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function ie(i){switch(ae(A)||(A="home",window.location.hash="#home"),document.title=`${ma[A]} · PACOM Station`,A){case"home":await Va(i,p,C);return;case"analysis":await Ha(i,p,C);return;case"alarms":await Qa(i,p,C);return;case"scenes":await dt(i,p,C);return;case"settings":await rt(i,p,C);return;case"deployment":await ot(i,p,C);return;case"account":await Ga(i,p,C,t=>{C=t,F(),P()},U);return}}async function U(){B=!1,z=!1,Z=!1,E();try{await p.logout()}finally{window.location.hash="#login",oe()}}function F(){const i=a.querySelector('[data-role="nav-list"]');i&&(i.innerHTML=pe(),j())}function P(){a.querySelector('[data-role="org-popover"]')?.remove();const i=a.querySelector('[data-role="org-menu-btn"]');if(i&&i.setAttribute("aria-expanded",String(B)),!B)return;const t=document.createElement("div");t.innerHTML=be().trim();const r=t.firstElementChild;r&&(a.appendChild(r),ye())}function j(){a.querySelectorAll("[data-route]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.route;t===A&&!z||(A=t,z=!1,B=!1,window.location.hash=`#${A}`,ve(!0))})})}async function X(i){if(!p.switchOrganization)return;await p.switchOrganization(i),await Y();const t=await p.getSpatialTree(),r=t.projects[0],S=r?t.buildings.find(Se=>Se.projectId===r.id):void 0,W=S?t.floors.find(Se=>Se.buildingId===S.id&&Se.id===Q.floorId)??t.floors.find(Se=>Se.buildingId===S.id):void 0;r&&S&&W?Ue({level:"floor",projectId:r.id,buildingId:S.id,floorId:W.id}):r&&S?Ue({level:"building",projectId:r.id,buildingId:S.id}):r?Ue({level:"project",projectId:r.id}):Ue({level:"all-projects"}),B=!1,ce=!1,z=!1,await ve(!0),se()}function ye(){a.querySelectorAll("[data-pop-org]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.popOrg;if(t){if(t===de){B=!1,P();return}X(t)}})}),a.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",i=>{i.stopPropagation(),ce=!ce,P(),ce&&a.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),a.querySelector("[data-create-org-form]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!p.createOrganization)return;const t=new FormData(i.currentTarget),r=String(t.get("orgName")??"").trim();if(!r)return;const S=await p.createOrganization(r);await X(S.id)}),a.querySelectorAll('[data-pop-act="go-account"]').forEach(i=>{i.addEventListener("click",()=>{B=!1,ce=!1,z=!1,A="account",window.location.hash="#account",ve(!0)})}),a.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{U()})}async function ve(i){const t=a.querySelector('[data-role="main-stage"]');if(!i&&t){const S=a.querySelector(".pacom-nav-rail");S&&(S.classList.toggle("is-collapsed",M),S.classList.toggle("is-mobile-open",z));const W=a.querySelector('[data-role="mobile-scrim"]');W&&W.classList.toggle("is-open",z),P();return}a.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${J("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${ma[A]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${je(C.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${z?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${M?"is-collapsed":""} ${z?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${pt}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${M?"展开侧栏":"收起侧栏"}" aria-label="${M?"展开侧栏":"收起侧栏"}">
              ${J("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${J("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${pe()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${A==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${B}" title="${je(R().name)} · ${je(C.displayName)}">
              ${te(R())}
              <span class="pacom-org-name">${je(R().name)}</span>
              ${J("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,a.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{M=!M,B=!1,localStorage.setItem(ka,M?"1":"0");const S=a.querySelector(".pacom-nav-rail"),W=a.querySelector('[data-role="toggle-sidebar"]');S&&S.classList.toggle("is-collapsed",M),W&&(W.title=M?"展开侧栏":"收起侧栏",W.setAttribute("aria-label",W.title),W.innerHTML=J("panel-left",16)),P()}),a.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{B=!1,P(),Z=!0,O()}),a.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{z=!z,ve(!1)}),a.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{z=!1,B=!1,ve(!1)}),a.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",S=>{S.stopPropagation(),B=!B,P()}),j(),P(),O();const r=a.querySelector('[data-role="main-stage"]');r&&await ie(r)}const v=i=>{const t=i.target;B&&!t?.closest('[data-role="org-popover"]')&&!t?.closest('[data-role="org-menu-btn"]')&&(B=!1,P())},q=i=>{if((i.metaKey||i.ctrlKey)&&i.key.toLowerCase()==="k"){i.preventDefault(),B=!1,P(),Z=!Z,O();return}i.key==="Escape"&&(Z?(Z=!1,O()):B?(B=!1,P()):z&&(z=!1,ve(!1)))},V=()=>{A=pa(),B=!1,z=!1,Z=!1,ve(!0),se()};function E(){document.removeEventListener("click",v),document.removeEventListener("keydown",q),window.removeEventListener("hashchange",V),Qe.get(a)===E&&Qe.delete(a)}Qe.set(a,E),document.addEventListener("click",v),document.addEventListener("keydown",q),window.addEventListener("hashchange",V),await ve(!0),se()}const ut=["org_admin","project_admin","operator","space_user"];async function bt(a){const p=new Za;let $=await p.getSession();a.innerHTML=`
    <div class="pacom-demo-root">
      <div class="pacom-demo-strip" role="region" aria-label="演示环境视角切换栏">
        <div class="pacom-demo-strip-left">
          <span class="pacom-demo-tag">独立演示环境</span>
          <span style="opacity:0.78; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">切换 4 级角色体验页面权限与限时提权（本地模拟数据，与真实联调页隔离）</span>
        </div>
        <div class="pacom-demo-strip-right">
          <div class="pacom-demo-roles" data-demo-roles></div>
          <a class="pacom-demo-link" href="./index.html">切换至真实联调页 →</a>
        </div>
      </div>
      <div class="pacom-demo-viewport" data-demo-stage></div>
    </div>
  `;const oe=a.querySelector("[data-demo-roles]"),C=a.querySelector("[data-demo-stage]");function A(){oe.innerHTML=ut.map(z=>`
        <button type="button" class="pacom-demo-role-btn" aria-pressed="${$?.role===z}" data-demo-pick="${z}">
          ${Ze[z]}
        </button>`).join(""),oe.querySelectorAll("[data-demo-pick]").forEach(z=>{z.addEventListener("click",async()=>{const B=z.dataset.demoPick;B&&($=await p.switchDemoRole(B),await M($))})})}async function M(z){$=z,A(),(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await mt(C,p,z,()=>{$=null,A(),fa(C,p,B=>{M(B)})})}if(A(),!$||window.location.hash==="#login"){if(!$){$=await p.switchDemoRole("org_admin"),await M($);return}fa(C,p,z=>{M(z)});return}await M($)}async function gt(){const a=document.getElementById("app");if(a)try{await bt(a)}catch(p){a.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(p)}</div></div>`}}gt();
//# sourceMappingURL=demo-CvZTtUtV.js.map
