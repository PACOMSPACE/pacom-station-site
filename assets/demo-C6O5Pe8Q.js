import{r as J,E as ae,a as ea,b as aa,g as ta,s as Ue,m as Ha,c as Va,D as Za,d as fa}from"./login-view-BexLtwBg.js";import{R as ha,a as He}from"./contracts-BgYMWe4E.js";const oa=["org_admin","project_admin","operator","space_user"],Wa=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function Y(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function la(a){return a?a.slice(0,16).replace("T"," "):"—"}function Ke(a){return a==="deployment"?"系统部署":"应用设置"}async function Ga(a,r,$,Z,z){const j=$.scope.canManageMembers,_=$.scope.canGrantOverride,T=$.scope.canViewAuditLogs,D=_||$.role==="operator",te=$.role!=="space_user";let R="profile",re=te?await r.listOrgMembers().catch(()=>[]):[],fe=D?await r.listOverrides().catch(()=>[]):[],K=T?await r.listAuditLogs().catch(()=>[]):[],me="",X="all",ne="all",U="all",oe=!1,Q=!1,le=$.displayName,ue=$.role==="org_admin"?"机构负责人":$.role==="project_admin"?"项目负责人":$.role==="operator"?"运行值守工程师":"园区空间用户",q="138-0013-8072",ce="",H="";const ve={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function de(){const[L,i,b,x]=await Promise.all([r.getSession(),te?r.listOrgMembers().catch(()=>[]):Promise.resolve([]),D?r.listOverrides().catch(()=>[]):Promise.resolve([]),T?r.listAuditLogs().catch(()=>[]):Promise.resolve([])]);re=i,fe=b,K=x,L&&($=L,Z(L)),F()}function O(){const L=["profile"];return te&&L.push("members","roles"),D&&L.push("overrides"),T&&L.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${L.map(i=>{const b=ve[i],x=i==="overrides"?fe.filter(o=>o.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${R===i}" data-anav="${i}">
                  ${J(b.icon,16)}
                  <span>${b.label}</span>
                  ${x>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${x}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function C(){return R==="members"&&j?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':R==="overrides"&&_?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':R==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 · SR 6.1</span>':""}function B(){const L=$.scope.activeOverrides.filter(b=>b.status==="active"),i=$.scope.allowedZoneIds?.length?`授权 ${$.scope.allowedFloorIds.length} 个楼层 · ${$.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${$.scope.allowedProjectIds.length} 个项目 · ${$.scope.allowedBuildingIds.length} 栋楼宇 · ${$.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${Y($.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${Y($.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${Y(le)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${Y(ue)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${Y(q)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${Y(i)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${Y(ha[$.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${Y($.roleLabel)}</span>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">当前写权限状态</span>
              <span class="pacom-setting-desc">写权限独立授予，绝不隐含在只读访问中</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <span class="pacom-badge ${$.scope.canControlDevices?"pacom-badge--online":"pacom-badge--neutral"}">设备控制：${$.scope.canControlDevices?"允许":"无"}</span>
              ${$.role==="space_user"?'<span class="pacom-badge pacom-badge--neutral">配置与管理模块：不可见</span>':`<span class="pacom-badge ${$.scope.canEditSettings?"pacom-badge--online":"pacom-badge--warning"}">应用设置：${$.scope.canEditSettings?"可改":"只读"}</span>
                     <span class="pacom-badge ${$.scope.canEditDeployment?"pacom-badge--online":"pacom-badge--warning"}">系统部署：${$.scope.canEditDeployment?"可改":"只读"}</span>`}
            </div>
          </div>
          ${L.length>0?L.map(b=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${Y(Ke(b.module))}（${b.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${Y(b.approvedBy)} · 到期时间：${Y(la(b.expiresAt))} · 事由：${Y(b.reason)}</span>
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
    `}function A(){const L=me.trim().toLowerCase(),i=re.filter(b=>X!=="all"&&b.role!==X?!1:L?`${b.displayName} ${b.email} ${b.roleLabel} ${b.scopeSummary}`.toLowerCase().includes(L):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${Y(me)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${X==="all"?"selected":""}>全部角色（${re.length}）</option>
            ${oa.map(b=>`<option value="${b}" ${X===b?"selected":""}>${Y(He[b])}</option>`).join("")}
          </select>
        </div>
        <span class="pacom-row-sub">显示 ${i.length} / ${re.length} 人</span>
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
              ${i.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':i.map(b=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${Y(b.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${Y(b.displayName)}</div>
                                ${j?`<div class="pacom-row-sub">${Y(b.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${b.role==="org_admin"||b.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${Y(b.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${Y(b.scopeSummary)}</span></td>
                          <td>
                            <span class="pacom-badge ${b.status==="active"?"pacom-badge--online":"pacom-badge--neutral"}">
                              ${b.status==="active"?"正常":b.status==="invited"?"邀请中":"已停用"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function ee(){return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">四级标准角色说明</h2>
          <span class="pacom-row-sub">IEC 62443-3-3 SR 2.1 RE 2 · 最小权限与职责分离</span>
        </div>
        <div class="pacom-settings-card">
          ${oa.map(L=>{const i=re.filter(b=>b.role===L).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${Y(He[L])}</span>
                  <span class="pacom-setting-desc">${Y(ha[L])}</span>
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
                ${Wa.map(L=>`
                  <tr>
                    <td><strong style="font-weight:450;">${Y(L.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${L.org_admin.tone}">${Y(L.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${L.project_admin.tone}">${Y(L.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${L.operator.tone}">${Y(L.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${L.space_user.tone}">${Y(L.space_user.text)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function we(){return`
      <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="限时提权统计">
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">当前生效提权</span>
          <div class="pacom-kpi-value">${fe.filter(i=>i.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${fe.length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">每条审批与收回同步写入审计日志</span>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">限时提权审批记录</h2>
          <span class="pacom-row-sub">${_?"可为运营人员开启「系统部署」或「应用设置」限时修改权":"展示管理员为你授予的临时提权记录"}</span>
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
                  ${_?'<th style="text-align:right;">操作</th>':""}
                </tr>
              </thead>
              <tbody>
                ${fe.length===0?`<tr><td colspan="${_?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${_?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:fe.map(i=>`
                          <tr>
                            <td><strong style="font-weight:450;">${Y(i.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${Y(Ke(i.module))}</span></td>
                            <td>
                              <div>${i.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${Y(la(i.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${Y(i.approvedBy)}</div>
                              <div class="pacom-row-sub">${Y(i.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${i.status==="active"?"pacom-badge--online":i.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${i.status==="active"?"生效中":i.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${_?`<td style="text-align:right;">
                                    ${i.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${Y(i.id)}">提前收回</button>`:`<span class="pacom-row-sub">${i.revokedBy?`${Y(i.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function he(){const L=K.filter(i=>{if(ne==="success"&&i.result!=="success"||ne==="denied"&&i.result==="success")return!1;if(U!=="all"){const b=`${i.action} ${i.target}`.toLowerCase();if(U==="control"&&!b.includes("control")&&!b.includes("scene")||U==="alarm"&&!b.includes("alarm")&&!b.includes("work")||U==="deploy"&&!b.includes("deploy")&&!b.includes("plan")&&!b.includes("hardware")&&!b.includes("project")&&!b.includes("building")&&!b.includes("floor")&&!b.includes("zone")||U==="settings"&&!b.includes("settings")||U==="override"&&!b.includes("override"))return!1}return!0});return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
            <option value="all" ${U==="all"?"selected":""}>全部操作类别</option>
            <option value="override" ${U==="override"?"selected":""}>限时提权审批</option>
            <option value="control" ${U==="control"?"selected":""}>设备控制与场景</option>
            <option value="alarm" ${U==="alarm"?"selected":""}>告警与工单处置</option>
            <option value="deploy" ${U==="deploy"?"selected":""}>系统部署与空间</option>
            <option value="settings" ${U==="settings"?"selected":""}>应用设置变更</option>
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="按执行结果筛选">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${ne==="all"}" data-audit-filter="all">全部（${K.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${ne==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${ne==="denied"}" data-audit-filter="denied">已拦截</button>
          </div>
        </div>
        <span class="pacom-row-sub">共 ${L.length} 条只读记录</span>
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
              ${L.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':L.map(i=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${Y(i.action)}</div>
                            ${i.detail?`<div class="pacom-row-sub">${Y(i.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${Y(i.target)}</code></td>
                          <td>
                            <div>${Y(i.actor)}</div>
                            <div class="pacom-row-sub">${Y(He[i.role]??i.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${Y(la(i.at))}</span></td>
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
    `}function v(){const L=[];if(oe&&j){const i=$.role==="org_admin"?oa:["project_admin","operator","space_user"];L.push(`
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
                  ${i.map(b=>`<option value="${b}">${Y(He[b])}</option>`).join("")}
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
        </div>`)}if(Q&&_){const i=re.filter(b=>b.role==="operator");L.push(`
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
                  ${i.length===0?'<option value="">暂无运营人员</option>':i.map(b=>`<option value="${Y(b.userId)}">${Y(b.displayName)}（${Y(b.email)}）</option>`).join("")}
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
              <span class="pacom-row-sub">审批人：${Y($.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${i.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return L.join("")}function F(){const L=ve[R],i=C();a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${Y($.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${O()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${i?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${L.label}</h2>
                  <p class="pacom-unified-subtitle">${L.subtitle}</p>
                </div>
                ${i?`<div class="pacom-unified-head-actions">${i}</div>`:""}
              </div>
              ${ce?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${Y(ce)}</span></div>`:""}
              ${H?`<div class="pacom-alert-banner">${Y(H)}</div>`:""}
              ${R==="profile"?B():R==="members"?A():R==="roles"?ee():R==="overrides"?we():he()}
            </div>
          </div>
        </div>
      </div>
      ${v()}
    `,G()}function G(){a.querySelectorAll("[data-anav]").forEach(i=>{i.addEventListener("click",()=>{R=i.dataset.anav??"profile",ce="",H="",F()})}),a.querySelector('[data-role="profile-form"]')?.addEventListener("submit",i=>{i.preventDefault();const b=new FormData(i.currentTarget);le=String(b.get("displayName")??"").trim()||$.displayName,ue=String(b.get("jobTitle")??"").trim()||ue,q=String(b.get("phone")??"").trim()||q,ce=`已保存个人资料：${le}（${ue}）· ${q}`,F()}),a.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await r.logout(),window.location.hash="#login",z()}),a.querySelector("[data-open-invite]")?.addEventListener("click",()=>{oe=!0,Q=!1,F()}),a.querySelector("[data-open-grant]")?.addEventListener("click",()=>{Q=!0,oe=!1,F()}),a.querySelectorAll("[data-close-modals]").forEach(i=>{i.addEventListener("click",()=>{oe=!1,Q=!1,F()})}),a.querySelectorAll("[data-modal-scrim]").forEach(i=>{i.addEventListener("click",b=>{b.target===i&&(oe=!1,Q=!1,F())})}),a.querySelector("[data-member-search]")?.addEventListener("input",i=>{const b=i.currentTarget,x=b.selectionStart??b.value.length;me=b.value,F();const o=a.querySelector("[data-member-search]");o&&(o.focus(),o.setSelectionRange(x,x))}),a.querySelector("[data-role-filter]")?.addEventListener("change",i=>{X=i.currentTarget.value,F()}),a.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async i=>{i.preventDefault(),H="";const b=new FormData(i.currentTarget);try{const x=await r.inviteOrgMember(String(b.get("email")??""),String(b.get("role")));oe=!1,ce=`已向 ${x.email} 发送「${x.roleLabel}」邀请。`,await de()}catch(x){H=x instanceof Error?x.message:String(x),F()}}),a.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async i=>{i.preventDefault(),H="";const b=new FormData(i.currentTarget);try{const x=await r.grantOverride({targetUserId:String(b.get("targetUserId")??""),module:String(b.get("module")??"deployment"),durationHours:Number(b.get("durationHours")??8),reason:String(b.get("reason")??"")});Q=!1,ce=`已为「${x.targetUserName}」开启「${Ke(x.module)}」${x.durationHours} 小时限时修改权，到期自动收回。`,await de()}catch(x){H=x instanceof Error?x.message:String(x),F()}}),a.querySelectorAll("[data-revoke-override]").forEach(i=>{i.addEventListener("click",async()=>{const b=i.dataset.revokeOverride;if(b){H="";try{const x=await r.revokeOverride(b);ce=`已提前收回「${x.targetUserName}」的「${Ke(x.module)}」限时修改权。`,await de()}catch(x){H=x instanceof Error?x.message:String(x),F()}}})}),a.querySelectorAll("[data-audit-filter]").forEach(i=>{i.addEventListener("click",()=>{ne=i.dataset.auditFilter??"all",F()})}),a.querySelector("[data-audit-cat]")?.addEventListener("change",i=>{U=i.currentTarget.value??"all",F()})}F()}const Ne={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Ka={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Ya={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Xa(a){const r=`${a.title} ${a.message}`.toLowerCase();return r.includes("离线")||r.includes("modbus")||r.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":r.includes("co₂")||r.includes("co2")||r.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Ja(a){return a.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:a.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function ia(a){const r=`${a.title} ${a.message}`.toLowerCase();return r.includes("离线")||r.includes("vav")||a.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:r.includes("co₂")||r.includes("co2")||a.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function Qa(a,r,$){const Z=new URLSearchParams(window.location.hash.split("?")[1]??""),z=Z.get("alarm"),j=Z.get("wo");let _=await r.getSpatialTree(),T=ta(),D=!1,te="",R=[],re=[],fe=[],K=j?"workorders":"alarms",me="all",X="all",ne="all",U="impact",oe=!1,Q="",le=z,ue=j,q=null,ce=null,H="resolved";const ve=new Set,de=new Map,O=new Map,C=new Map,B=new Map;let A="",ee="";function we(L){const i=B.get(L.id);if(i)return i;const b=L.id.match(/(\d+)$/),x=`WO-2026-${b?b[1]:L.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,o={estCost:"¥ 450",actualCost:L.status==="closed"?"¥ 380":"--",cmmsNo:x,assigneeGroup:"暖通运维组",tasks:[{id:`${L.id}-t1`,label:"核查设备供电与现场指示灯状态",done:L.status!=="open"},{id:`${L.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:L.status==="resolved"||L.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:L.createdAt?L.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${x}）`}]};return B.set(L.id,o),o}async function he(){[R,re,fe]=await Promise.all([r.listAlarms(ae.floorId),r.listWorkOrders(ae.floorId),r.getFloorDevices(ae.floorId).catch(()=>[])]),re.forEach(L=>we(L)),G()}function v(L){if(!L)return{name:"楼层通用",zone:"E7F",dev:null};const i=fe.find(b=>b.id===L)??null;return i?{name:i.name,zone:(i.logicalZoneId?Ya[i.logicalZoneId]:void 0)??"E7F",dev:i}:{name:L,zone:"E7F",dev:null}}function F(L){const i=v(L.deviceId).dev;i&&i.connectivity==="offline"?C.set(L.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${i.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):C.set(L.id,{verdict:"pass",summary:`自检通过（PASS）：「${i?.name??L.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),le=L.id,G()}function G(){const L=R.filter(c=>c.status==="active"&&!de.has(c.id)),i=re.filter(c=>!we(c).cancelled&&(c.status==="open"||c.status==="assigned"||c.status==="in_progress")),b=R.filter(c=>c.status!=="active").length+O.size,x=0,o=de.size,S=Q.trim().toLowerCase(),M=R.filter(c=>{const m=de.has(c.id);if(me==="snoozed"){if(!m)return!1}else if(me==="active"){if(c.status!=="active"||m)return!1}else if(me==="acknowledged"){if(c.status!=="acknowledged")return!1}else if(m)return!1;if(ne!=="all"&&c.severity!==ne)return!1;if(!S)return!0;const E=v(c.deviceId);return`${c.title} ${c.message} ${E.name} ${E.zone} ${c.deviceId}`.toLowerCase().includes(S)}),pe=new Map;for(const c of M){const m=`${c.title} ${c.message}`.toLowerCase(),E=m.includes("离线")||m.includes("modbus")||m.includes("通信"),N=oe?E?"root-gateway-modbus":c.deviceId:c.id,P=E?"根因：E7F 主控网关通信链路":`根因：${v(c.deviceId).name}`,qe=pe.get(N)??{rootLabel:P,items:[]};qe.items.push(c),pe.set(N,qe)}const Ie=Array.from(pe.values());U==="impact"&&Ie.sort((c,m)=>ia(m.items[0]).costYuan-ia(c.items[0]).costYuan);const ze=re.filter(c=>{const m=we(c);if(X==="cancelled"){if(!m.cancelled)return!1}else if(m.cancelled||X==="open"&&(c.status==="resolved"||c.status==="closed")||X==="resolved"&&c.status!=="resolved"||X==="closed"&&c.status!=="closed")return!1;if(!S)return!0;const E=v(c.deviceId);return`${c.title} ${c.description} ${c.id} ${m.cmmsNo} ${E.name}`.toLowerCase().includes(S)});a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${ea({tree:_,session:$,scope:T,activeAlarmCount:L.length,isOpen:D,searchKeyword:te})}
            </div>

            <div class="pacom-header-meta">
              ${K==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${oe}" data-toggle-group="1" aria-label="按拓扑根因归并">
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
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${K==="alarms"}" data-main-tab="alarms">实时告警（${R.length-o}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${K==="workorders"}" data-main-tab="workorders">运维工单（${re.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${K==="alarms"&&me==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${L.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${K==="workorders"&&X==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${i.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${K==="alarms"&&me==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${b}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${x}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${A?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${A}</span></div>`:""}
          ${ee?`<div class="pacom-alert-banner">${ee}</div>`:""}

          ${K==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${Q}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${ne==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${ne==="critical"?"selected":""}>严重</option>
                      <option value="major" ${ne==="major"?"selected":""}>重要</option>
                      <option value="minor" ${ne==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${U==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${U==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${me==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${me==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${me==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${me==="snoozed"}" data-status-pill="snoozed">已忽略（${o}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${ve.size>0&&$.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${ve.size}）</button>`:""}
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
                          ${Ie.map(c=>{const m=c.items[0],E=Ka[m.severity]??{label:m.severity,cls:"pacom-badge--neutral"},N=v(m.deviceId),P=Ja(m),qe=ia(m),De=le===m.id,Ae=de.get(m.id),ye=!!Ae,Ve=ve.has(m.id),Ce=C.get(m.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${m.id}" data-check-alarm="${m.id}" ${Ve?"checked":""} ${m.status!=="active"||ye?"disabled":""} aria-label="选择 ${m.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${E.cls}">${E.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${m.title}</span>
                                      ${oe?`<span class="pacom-badge pacom-badge--accent">${c.rootLabel}${c.items.length>1?` · 影响 ${c.items.length} 项`:""}</span>`:""}
                                      ${Ce?`<span class="pacom-badge ${Ce.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${Ce.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${m.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${N.name}</div>
                                    <div class="pacom-row-sub">${N.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${qe.costLabel}</div>
                                    <div class="pacom-row-sub">${qe.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${P.duration}</div>
                                    <div class="pacom-row-sub" style="color:${P.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${P.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${ye?"pacom-badge--neutral":m.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${ye?`忽略 ${Ae?.duration}`:m.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${ye?`<button class="pacom-btn" data-unsnooze="${m.id}">恢复监控</button>`:`
                                            ${m.status==="active"?`<button class="pacom-btn" data-mark-actioned="${m.id}" ${$.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${m.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${m.id}" ${$.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${m.id}">${De?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${De?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${Xa(m)}
                                            </div>
                                            ${Ae?`<div class="pacom-info-banner">忽略周期：${Ae.duration} · 原因备注：${Ae.reason}</div>`:""}
                                            ${Ce?`
                                                <div class="pacom-banner ${Ce.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${Ce.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${Ce.steps.map(W=>`<span>${W}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${m.id}</code> · 设备编号 <code>${m.deviceId}</code> · 关联工单 ${m.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${m.id}">单机自检（FTT）</button>
                                              ${!ye&&m.status==="active"?`<button class="pacom-btn" data-open-snooze="${m.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${m.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${m.deviceId}">定位设备 →</button>
                                            </div>
                                            ${q===m.id?`
                                                <form data-snooze-form="${m.id}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
              ${(()=>{const c=ue?re.find(m=>m.id===ue)??null:null;if(c){const m=v(c.deviceId),E=we(c),N=!!(E.cancelled||c.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${c.id}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${c.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${E.cmmsNo}</span>
                        ${E.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${c.id}" data-wo-status="${c.id}" aria-label="更新工单状态" ${N?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(P=>`<option value="${P}" ${c.status===P?"selected":""}>${Ne[P]}</option>`).join("")}
                          <option value="cancelled" ${E.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${ce===c.id?`
                        <form data-close-wo-form="${c.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${Ne[H]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${E.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${E.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${E.actualCost==="--"?"":E.actualCost}" />
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
                            ${E.tasks.map(P=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${P.id}" data-wo-task="${c.id}" data-task-id="${P.id}" ${P.done?"checked":""} ${N?"disabled":""} />
                                    <span>${P.label}</span>
                                  </span>
                                  ${P.unit?`<span class="pacom-row-sub">实测：${P.reading??"--"} ${P.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${E.history.map(P=>`<span>• <span class="pacom-row-sub">${P.at}</span> — ${P.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${c.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${E.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${m.name}（${m.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${E.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${E.estCost} / 实际 ${E.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${E.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${E.solution??"待完单填写"}</span>
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
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${Q}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${X==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${X==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${X==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${X==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${X==="cancelled"}" data-wo-pill="cancelled">已取消</button>
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
                            ${ze.map(m=>{const E=v(m.deviceId),N=we(m),P=!!(N.cancelled||m.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${m.title}</span>
                                        ${N.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${m.description} · <code>${m.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${E.name}</div>
                                      <div class="pacom-row-sub">${E.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${N.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${N.assigneeGroup} · 预估 ${N.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${m.id}" data-wo-status="${m.id}" aria-label="更新工单状态" ${P?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(qe=>`<option value="${qe}" ${m.status===qe?"selected":""}>${Ne[qe]}</option>`).join("")}
                                          <option value="cancelled" ${N.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${m.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${ce===m.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${m.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${Ne[H]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${N.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${N.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${N.actualCost==="--"?"":N.actualCost}" />
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
    `,aa(a,{onToggle:()=>{D=!D,G(),D&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:c=>{te=c,G();const m=a.querySelector("[data-global-space-search]");m&&(m.focus(),m.setSelectionRange(c.length,c.length))},onPick:c=>{T=c,D=!1,G()}}),a.querySelectorAll("[data-main-tab]").forEach(c=>{c.addEventListener("click",()=>{K=c.dataset.mainTab??"alarms",A="",G()})}),a.querySelectorAll("[data-kpi-filter]").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.kpiFilter;A="",m==="workorders"?(K="workorders",X=X==="open"?"all":"open"):(m==="active"||m==="acknowledged")&&(K="alarms",me=me===m?"all":m),G()})}),a.querySelectorAll("[data-status-pill]").forEach(c=>{c.addEventListener("click",()=>{me=c.dataset.statusPill??"all",G()})}),a.querySelectorAll("[data-wo-pill]").forEach(c=>{c.addEventListener("click",()=>{X=c.dataset.woPill??"all",G()})}),a.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{A="",he()}),a.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{oe=!oe,G()}),a.querySelector("[data-severity-filter]")?.addEventListener("change",c=>{ne=c.currentTarget.value,G()}),a.querySelector("[data-alarm-sort]")?.addEventListener("change",c=>{U=c.currentTarget.value??"impact",G()}),a.querySelector("[data-alarm-search]")?.addEventListener("input",c=>{const m=c.currentTarget,E=m.selectionStart??m.value.length;Q=m.value,G();const N=a.querySelector("[data-alarm-search]");N&&(N.focus(),N.setSelectionRange(E,E))}),a.querySelectorAll("[data-check-alarm]").forEach(c=>{c.addEventListener("change",()=>{const m=c.dataset.checkAlarm;m&&(c.checked?ve.add(m):ve.delete(m),G())})}),a.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{ee="";const c=Array.from(ve);try{for(const m of c)await r.acknowledgeAlarm(m,"告警中心批量确认"),O.set(m,"批量确认处置");ve.clear(),A=`已批量确认 ${c.length} 条告警，未来 24 小时持续校验无复发。`,await he()}catch(m){ee=m instanceof Error?m.message:String(m),G()}}),a.querySelectorAll("[data-expand-alarm]").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.expandAlarm??null;le=le===m?null:m,q=null,G()})}),a.querySelectorAll("[data-expand-wo]").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.expandWo??null;ue=ue===m?null:m,G()})}),a.querySelectorAll("[data-run-ftt]").forEach(c=>{c.addEventListener("click",()=>{const m=R.find(E=>E.id===c.dataset.runFtt);m&&F(m)})}),a.querySelectorAll("[data-open-snooze]").forEach(c=>{c.addEventListener("click",()=>{q=c.dataset.openSnooze??null,G()})}),a.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{q=null,G()}),a.querySelectorAll("[data-snooze-form]").forEach(c=>{c.addEventListener("submit",m=>{m.preventDefault();const E=c.dataset.snoozeForm;if(!E)return;const N=new FormData(c),P=String(N.get("duration")??"24h"),qe=String(N.get("reason")??"").trim()||"现场核查中";de.set(E,{duration:P,reason:qe}),ve.delete(E),q=null,A=`已限时忽略该告警（${P} · ${qe}），可在「已忽略」页签中随时恢复。`,G()})}),a.querySelectorAll("[data-unsnooze]").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.unsnooze;m&&(de.delete(m),A="已恢复该告警的实时监控。",G())})}),a.querySelectorAll("[data-go-ts]").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(m)}`})}),a.querySelectorAll("[data-locate-home]").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.locateHome??"";window.location.hash=m?`#home?device=${encodeURIComponent(m)}`:"#home"})}),a.querySelectorAll("[data-mark-actioned]").forEach(c=>{c.addEventListener("click",async()=>{ee="";const m=c.dataset.markActioned;try{await r.acknowledgeAlarm(m,"现场自处理完成（Mark Actioned）"),O.set(m,"现场自处理完成"),ve.delete(m),A="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await he()}catch(E){ee=E instanceof Error?E.message:String(E),G()}})}),a.querySelectorAll("[data-to-wo]").forEach(c=>{c.addEventListener("click",async()=>{ee="";const m=R.find(E=>E.id===c.dataset.toWo);if(m)try{await r.createWorkOrder({floorId:m.floorId,deviceId:m.deviceId,alarmId:m.id,title:`处置告警：${m.title}`,description:m.message}),A=`已将「${m.title}」转为运维工单并同步 CMMS。`,await he()}catch(E){ee=E instanceof Error?E.message:String(E),G()}})}),a.querySelectorAll("[data-wo-status]").forEach(c=>{c.addEventListener("change",async()=>{const m=c.dataset.woStatus,E=c.value;if(ee="",E==="cancelled"){const N=re.find(P=>P.id===m);if(N){const P=we(N);P.cancelled=!0,P.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),A="工单已移入「已取消」分类并锁定编辑。",G()}return}if(E==="resolved"||E==="closed"){ce=m,H=E,G();return}try{await r.updateWorkOrderStatus(m,E);const N=re.find(P=>P.id===m);N&&we(N).history.unshift({at:"刚刚",text:`状态变更为「${Ne[E]}」`}),A="工单状态已更新并写入审计日志。",await he()}catch(N){ee=N instanceof Error?N.message:String(N),await he()}})}),a.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{ce=null,G()}),a.querySelectorAll("[data-close-wo-form]").forEach(c=>{c.addEventListener("submit",async m=>{m.preventDefault();const E=c.dataset.closeWoForm,N=new FormData(c),P=String(N.get("cause")??"").trim(),qe=String(N.get("solution")??"").trim(),De=String(N.get("actualCost")??"").trim();try{await r.updateWorkOrderStatus(E,H);const Ae=re.find(ye=>ye.id===E);if(Ae){const ye=we(Ae);ye.cause=P,ye.solution=qe,De&&(ye.actualCost=De),ye.history.unshift({at:"刚刚",text:`流转至「${Ne[H]}」· 根因：${P}`})}ce=null,ue=E,A=`工单已更新为「${Ne[H]}」，根因与方案已沉淀归档。`,await he()}catch(Ae){ee=Ae instanceof Error?Ae.message:String(Ae),G()}})}),a.querySelectorAll("[data-wo-task]").forEach(c=>{c.addEventListener("change",()=>{const m=re.find(P=>P.id===c.dataset.woTask);if(!m)return;const N=we(m).tasks.find(P=>P.id===c.dataset.taskId);N&&(N.done=c.checked),G()})})}await he()}const et={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},at={frozen:"已冻结",draft:"草稿",delivered:"已交付"},ca={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},da=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],ya=[{id:"doc-hvac-7f",floorId:ae.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:ae.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:ae.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:ae.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],tt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},$a=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function l(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Ye(a){const r=a.trim().toUpperCase();if(r==="RF"||r==="R"||r==="ROOF"||r.includes("屋面")||r.includes("屋顶")||r.includes("天面"))return 999;const $=r.match(/(-?\d+)/);if(!$)return 0;const Z=Number($[1]);return r.startsWith("B")||r.includes("地下")||r.includes("负")?-Math.abs(Z):Z}const wa={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function Be(a){const r=a.trim(),$=r.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test($)||/屋面|屋顶|天面/.test(r))return"RF";const Z=$.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(Z)return`B${Number(Z[1])}`;const z=r.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(z){const T=/^\d+$/.test(z[1])?Number(z[1]):wa[z[1]];if(T)return`B${T}`}if(/首层|一层/.test(r))return"1F";const j=r.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(j){const T=/^\d+$/.test(j[1])?Number(j[1]):wa[j[1]];if(T)return`${T}F`}const _=$.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return _?`${Number(_[1])}F`:null}function Xe(a){return new Promise((r,$)=>{const Z=new FileReader;Z.onload=()=>typeof Z.result=="string"?r(Z.result):$(new Error("无法读取图片内容")),Z.onerror=()=>$(new Error(`读取文件「${a.name}」失败`)),Z.readAsDataURL(a)})}function st(a){return a.category==="gateway"?a.name.includes("蓝牙")?"蓝牙适配器":"主控网关":a.category==="lighting"?a.name.includes("702")?"702 照明":a.name.slice(0,6):a.category==="hvac"?a.name.includes("VAV")?"VAV-02":a.name.includes("FCU")?"FCU-01":a.name.slice(0,6):a.category==="sensor"?"环境传感":a.name.slice(0,6)}function nt(a,r){const $=a.status!=="connected",Z=r.filter(z=>z.hardwareBinding?.protocol===a.protocol);return Z.length>0?Z.map(z=>{const j=z.connectivity==="offline"||$;return{pointName:z.category==="hvac"?"送风温度 / 阀门开度":z.category==="lighting"?"回路开关 / 亮度反馈":z.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:z.name,value:j?"无上报":z.category==="hvac"?"23.4°C · 62%":z.category==="lighting"?"开启 · 80%":z.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:j?"46 分钟前":"12 秒前",quality:j?z.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${a.protocol.toUpperCase()} 采集通道汇总点`,deviceName:a.name,value:$?"采样延迟":"正常上报",interval:"60s",lastSeen:$?"38 分钟前":"9 秒前",quality:$?"delayed":"online"}]}async function ot(a,r,$){const Z=new URLSearchParams(window.location.hash.split("?")[1]??""),z=Z.get("sec");let j=z==="floors"||z==="projects"?"project_config":z==="floorplan"||z==="devices"||z==="inventory"?"devices":z==="network"||z==="network_topo"?"network_topo":z==="connections"?"connections":"overview",_=z==="inventory"?"list":"marking",T="binding",D="",te="all",R=ta(),re=!1,fe="",K="device",me="all",X="",ne=!1,U=!1,oe="mesh",Q=1,le=0,ue=0,q=await r.getSpatialTree(),ce=[],H=[],ve=[];const de={...tt},O=[];let C=R.level==="all-projects"?q.projects[0]?.id??ae.projectId:R.projectId,B=R.level==="building"||R.level==="floor"?R.buildingId:q.buildings.find(p=>p.projectId===C)?.id??q.buildings[0]?.id??ae.buildingId,A=R.level==="floor"?R.floorId:q.floors.find(p=>p.buildingId===B&&p.id===ae.floorId)?.id??q.floors.find(p=>p.buildingId===B)?.id??ae.floorId,ee=z==="floors"?A:null,we="all",he="zones",v=Z.get("new")==="project",F=!1,G=!1,L=null,i=!1,b=!1,x=!1,o=!1,S=!1,M=null,pe=new Set,Ie=null,ze=!1,Ee=[];const c=[];let m=null,E=null,N=!1,P=!1,qe=null,De=null,Ae=3,ye=!1,Ve=[],Ce=null,W="",se="";const Te=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),Re=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],sa=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:ae.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:ae.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:ae.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:ae.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],ua=new Map;function xe(){v=!1,F=!1,G=!1,L=null,i=!1,b=!1,x=!1,o=!1,S=!1,M=null}function Ia(){return!!(v||F||G||L||i||b||x||o||S||M)}const ba=p=>{if(!document.body.contains(a)){document.removeEventListener("keydown",ba);return}p.key==="Escape"&&(Ie?(Ie=null,y()):Ia()?(xe(),y()):U&&(U=!1,P=!1,y()))};document.addEventListener("keydown",ba);function _e(){return q.floors}function Fe(p){return[...q.floors.filter(u=>u.buildingId===p)].sort((u,h)=>Ye(h.name)-Ye(u.name))}function Me(){return q.zones}function Le(p){return[...p===ae.floorId?ce:[],...O.filter(h=>h.floorId===p)]}function Pe(p){return p?Me().find(u=>u.id===p)?.name.replace(/^7F\s*/,"")??p:"未分配功能区"}function na(p){const u=q.buildings.find(f=>f.id===p);if(!u)return;C=u.projectId,B=u.id;const h=Fe(u.id);h.some(f=>f.id===A)||(A=h.find(f=>f.id===ae.floorId)?.id??h[0]?.id??""),ee&&!h.some(f=>f.id===ee)&&(ee=null),R=Ue(A?{level:"floor",projectId:u.projectId,buildingId:u.id,floorId:A}:{level:"building",projectId:u.projectId,buildingId:u.id}),E=null,U=!1,P=!1,Q=1,le=0,ue=0}function Ze(p){A=p;const u=_e().find(h=>h.id===p);if(u){B=u.buildingId;const h=q.buildings.find(f=>f.id===u.buildingId);h&&(C=h.projectId),R=Ue({level:"floor",projectId:C,buildingId:u.buildingId,floorId:u.id})}E=null,U=!1,P=!1,Q=1,le=0,ue=0}async function Se(){se="";const[p,u,h,f]=await Promise.all([r.getSpatialTree(),r.getFloorDevices(ae.floorId).catch(()=>[]),r.listConnections(C),r.listDeliveryBatches(ae.floorId)]);if(q=p,ce=u,H=h,ve=f,q.projects.length===0)C="",B="",A="",ee=null;else{q.projects.some(s=>s.id===C)||(C=q.projects[0].id);const e=q.buildings.filter(s=>s.projectId===C);e.some(s=>s.id===B)||(B=e[0]?.id??"");const n=B?Fe(B):[];n.some(s=>s.id===A)||(A=n.find(s=>s.id===ae.floorId)?.id??n[0]?.id??""),ee&&!n.some(s=>s.id===ee)&&(ee=null)}const k=Le(A);E&&!k.some(e=>e.id===E)&&(E=null,U=!1),N=k.find(e=>e.id===E)?.physicalInstalled??!1,y()}function We(){const p=a.querySelector('[data-role="dep-viewport"]');p&&(p.style.transform=`translate(${le}px, ${ue}px) scale(${Q})`);const u=a.querySelector('[data-role="dep-zoom-label"]');u&&(u.textContent=`${Math.round(Q*100)}%`)}function ga(p){se="",p.connectivity==="offline"?se=`单机回读自检未通过（FAIL）：「${p.name}」当前离线，请核查网关链路或中继覆盖。`:W=`单机回读自检通过（PASS）：「${p.name}」指令下发与状态回读一致，已安全复位。`,y()}function ja(){se="";const p=Le(A),u=p.filter(g=>g.connectivity==="offline"),h=p.length-u.length,f=new Date;Ce={ranAt:`${String(f.getHours()).padStart(2,"0")}:${String(f.getMinutes()).padStart(2,"0")}:${String(f.getSeconds()).padStart(2,"0")}`,total:p.length,passed:h,failed:u.length,failedNames:u.map(g=>g.name)},u.length>0?se=`全层批量自检完成：${h}/${p.length} 台通过，${u.length} 台异常（${u.map(g=>g.name).join("、")}）。`:W=`全层批量自检全部通过（${h}/${p.length}），设备已自动安全复位。`,y()}function qa(){const p=Le(A),u=[],h=p.filter(n=>n.connectivity==="offline"),f=p.filter(n=>!n.planPoint),k=p.filter(n=>Te.get(n.id)?.proxy).length,g=p.filter(n=>Te.get(n.id)?.relay).length,e=p.length?g/p.length:0;h.length>0?h.forEach(n=>u.push({level:"fail",title:`节点不可达：${n.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:n.id})):u.push({level:"ok",title:"全网节点可达性正常",detail:`${p.length} 台设备均正常响应心跳。`}),k<1?u.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):u.push({level:"ok",title:`代理节点配置合理（${k} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),e>.25&&p.length>=4&&u.push({level:"warn",title:`中继比例偏高（${Math.round(e*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),f.length>0&&u.push({level:"warn",title:`尚有 ${f.length} 台未完成设备标记`,detail:"请在「设备管理 → 设备标记」中补齐平面坐标以便施工定位。"}),Ve=u,W=`已完成蓝牙 Mesh 网络体检（检测 ${p.length} 台节点，发现 ${u.filter(n=>n.level!=="ok").length} 项关注）。`,y()}function Aa(){const p=Le(A),u=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...p.map(g=>[g.name,g.category,Pe(g.logicalZoneId),g.planPoint?`${Math.round(g.planPoint.x*100)}%/${Math.round(g.planPoint.y*100)}%`:"未标记",g.hardwareBinding?`${g.hardwareBinding.protocol} ${g.hardwareBinding.networkAddress}`:"未绑定",g.physicalInstalled?"已复核":"待复核",g.connectivity==="online"?"在线":"离线"].join(","))],h=new Blob([`\uFEFF${u.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),f=URL.createObjectURL(h),k=document.createElement("a");k.href=f,k.download="pacom-device-list.csv",k.click(),URL.revokeObjectURL(f)}function Ge(p){const u=new Set(Fe(p.id).map(f=>Be(f.name)??f.name.toUpperCase())),h=[];for(let f=1;f<=p.aboveFloors;f+=1){const k=`${f}F`;u.has(k)||h.push({kind:"above",level:f,name:k})}for(let f=1;f<=p.belowFloors;f+=1){const k=`B${f}`;u.has(k)||h.push({kind:"below",level:-f,name:k})}return p.hasRoof&&!u.has("RF")&&h.push({kind:"roof",level:99,name:"RF"}),h}async function Fa(p){const u=q.buildings.find(f=>f.id===p);if(!u)return 0;const h=Ge(u);for(const f of h)await r.upsertFloor?.({buildingId:u.id,kind:f.kind,level:f.level,name:f.name});return h.length}const Ca={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。",granularity:"building"},project_config:{title:"项目配置",subtitle:"在同一视图内贯通管理项目、园区楼宇、楼层平面底图、功能区与竣工图纸。",granularity:"project"},devices:{title:"设备管理",subtitle:"围绕当前楼层完成设备标记、设备列表核查、参数下发、自检与设备分组。",granularity:"floor"},network_topo:{title:"网络拓扑",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、环境等异构子系统通道及传感器采集质量。",granularity:"project"}};function Oe(p,u="layers"){return`
      <div class="dep-empty-card">
        <div class="dep-empty-icon">${J(u,20)}</div>
        <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
        <span class="pacom-row-sub" style="max-width:440px;">按「创建项目 → 添加楼宇与楼层 → 上传平面底图」完成建档后，即可开展设备标记、网络同步与交付验收。</span>
        <div class="dep-empty-steps">
          <span>1. 创建项目</span>
          <span>→</span>
          <span>2. 添加楼宇与楼层</span>
          <span>→</span>
          <span>3. 上传平面图</span>
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${p?"":"disabled"}>+ 创建第一个项目</button>
      </div>`}function za(){const p=(u,h,f,k=!1)=>`
      <button type="button" class="pacom-unified-item" aria-current="${j===u}" data-dep-nav="${u}">
        ${J(h,16)}
        <span>${f}</span>
        ${k?'<span class="dep-rail-dot" title="有变更待同步至边缘网关"></span>':""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${p("overview","layout-dashboard","部署总览")}
          ${p("project_config","layers","项目配置")}
          ${p("devices","map-pin","设备管理")}
          ${p("network_topo","waypoints","网络拓扑",ye)}
          ${p("connections","plug","系统接入")}
        </div>
      </aside>
    `}function va(p){return q.projects.length===0?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${p?"":"disabled"}>+ 新建项目</button>`:j==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出清单</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${p?"":"disabled"}>+ 交付冻结</button>
      `:j==="project_config"?`<button type="button" class="pacom-btn" data-open-new-proj="1" ${p?"":"disabled"}>+ 新建项目</button>`:j==="devices"?`${`
        <div class="pacom-tabs" role="tablist" aria-label="设备管理视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${_==="marking"}" data-dev-subtab="marking">设备标记</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${_==="list"}" data-dev-subtab="list">设备列表</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${_==="groups"}" data-dev-subtab="groups">设备分组</button>
        </div>`}${_==="marking"?'<button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>':_==="list"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${p?"":"disabled"}>+ 新建分组</button>`}`:j==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${p?"":"disabled"}>${ye?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:`
      <button type="button" class="pacom-btn" data-edge-restart="service" ${p?"":"disabled"}>重启边缘服务</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${p?"":"disabled"}>+ 新增接入通道</button>
    `}function Ma(p){if(q.projects.length===0)return Oe(p,"layout-dashboard");const u=B?Fe(B):[],h=u.filter(s=>!!s.plan).length,f=u.flatMap(s=>Le(s.id)),k=f.filter(s=>!!s.planPoint).length,g=f.filter(s=>s.connectivity==="online").length,e=f.filter(s=>s.physicalInstalled).length,n=u.filter(s=>Le(s.id).length>0&&!ye).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${u.length>0&&h===u.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 项目与底图</span>
          <div class="pacom-kpi-value">${h}<span class="pacom-kpi-unit">/ ${u.length} 层</span></div>
          <span class="pacom-kpi-delta">${u.length>0&&h===u.length?"全部底图就绪":`尚缺 ${Math.max(0,u.length-h)} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="marking" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${f.length>0&&k===f.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${k}<span class="pacom-kpi-unit">/ ${f.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${Re.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${f.length>0&&g===f.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${g}<span class="pacom-kpi-unit">/ ${f.length} 台</span></div>
          <span class="pacom-kpi-delta">${f.length-g>0?`${f.length-g} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${ye?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${n}<span class="pacom-kpi-unit">/ ${u.length} 层</span></div>
          <span class="pacom-kpi-delta">${ye?"有变更待下发 →":`基线 v${Ae}`}</span>
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
                ${u.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前楼宇暂无楼层</strong><span>请先在「项目配置」中生成楼层并上传底图。</span></div></td></tr>':u.map(s=>{const t=Le(s.id),w=Me().filter(ie=>ie.floorId===s.id),d=t.filter(ie=>!!ie.planPoint).length,I=t.filter(ie=>ie.connectivity==="online").length,ge=t.filter(ie=>ie.physicalInstalled).length,be=!!s.plan,$e=be&&t.length>0&&d===t.length&&ge===t.length&&I===t.length&&!ye;return`
                            <tr>
                              <td><strong>${l(s.name)}</strong><div class="pacom-row-sub">${s.areaSqm?`${s.areaSqm} m²`:"待补面积"}</div></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-expand="1" data-matrix-floor="${l(s.id)}"><span class="pacom-dot ${be?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${be?`已传图 · ${w.length} 区`:"待传底图"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="marking" data-matrix-floor="${l(s.id)}"><span class="pacom-dot ${t.length>0&&d===t.length?"pacom-dot--online":t.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${t.length>0?`${d}/${t.length}`:"未标记"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${l(s.id)}"><span class="pacom-dot ${t.length>0&&I===t.length?"pacom-dot--online":t.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${t.length>0?`${I}/${t.length}`:"—"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${l(s.id)}"><span class="pacom-dot ${t.length===0?"pacom-dot--offline":ye?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${t.length===0?"—":ye?"待同步":`v${Ae}`}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="list" data-matrix-floor="${l(s.id)}"><span class="pacom-dot ${t.length>0&&ge===t.length?"pacom-dot--online":t.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${t.length>0?`${ge}/${t.length}`:"—"}</span></button></td>
                              <td style="text-align:right;"><span class="pacom-badge ${$e?"pacom-badge--online":t.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${$e?"可验收交付":t.length>0?"实施中":"待配置"}</span></td>
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
          <span class="pacom-row-sub">共 ${ve.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${ve.map(s=>`
                    <tr>
                      <td><div style="font-weight:450;">${l(s.versionTag)}</div><div class="pacom-row-sub"><code>${l(s.id)}</code></div></td>
                      <td><strong>${s.verifiedCount}</strong> / ${s.deviceCount} 台</td>
                      <td><div>${l(s.frozenBy)}</div><div class="pacom-row-sub">${l(s.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${at[s.status]??s.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Ta(p){if(q.projects.length===0)return Oe(p,"layers");const u=q.projects.find(d=>d.id===C)??q.projects[0],h=q.buildings.filter(d=>d.projectId===u.id),f=h.reduce((d,I)=>d+Fe(I.id).length,0),k=h.find(d=>d.id===B)??h[0]??null,g=k?Fe(k.id):[],e=g.filter(d=>!d.plan).length,n=g.filter(d=>Me().filter(I=>I.floorId===d.id).length===0).length,s=g.filter(d=>we==="missing_plan"?!d.plan:we==="missing_zone"?Me().filter(I=>I.floorId===d.id).length===0:!0),t=k?Ge(k):[],w=u.location?`${u.location.lng.toFixed(4)}, ${u.location.lat.toFixed(4)}`:"未设置坐标";return`
      <div class="dep-project-strip">
        <div class="dep-project-strip-main">
          <div class="dep-project-cover">
            <img src="${l(u.imageUrl??"./media/gzlab.jpg")}" alt="${l(u.name)}" />
          </div>
          <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">${l(u.name)}</strong>
              <span class="pacom-badge pacom-badge--neutral">${h.length} 栋楼宇</span>
              <span class="pacom-badge pacom-badge--neutral">${f} 个楼层</span>
            </div>
            <span class="pacom-row-sub">${l(u.city||"未填城市")}${u.address?` · ${l(u.address)}`:""} · 坐标 ${l(w)}</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-edit-proj="1" ${p?"":"disabled"}>编辑项目</button>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <div>
            <h2 class="pacom-section-title">园区楼宇（${h.length} 栋）</h2>
            <span class="pacom-row-sub">点击楼宇卡片切换下方楼层列表，点「编辑参数」修改外观与层数</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-bld="1" ${p?"":"disabled"}>+ 新建楼宇</button>
        </div>
        ${h.length===0?`
            <div class="dep-empty-card">
              <div class="dep-empty-icon">${J("building-2",20)}</div>
              <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${l(u.name)} 暂无楼宇</strong>
              <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
              <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${p?"":"disabled"}>+ 添加第一栋楼宇</button>
            </div>`:`
            <div class="dep-building-grid">
              ${h.map(d=>{const I=Fe(d.id),ge=I.filter(ke=>!!ke.plan).length,be=I.length>0?Math.round(ge/I.length*100):0,$e=Ge(d),ie=k?.id===d.id,V=I.length===0?"pacom-badge--neutral":ge===I.length?"pacom-badge--online":"pacom-badge--warning";return`
                    <article class="dep-building-card ${ie?"is-active":""}" data-select-building="${l(d.id)}">
                      <div class="dep-building-stage">
                        <img src="${l(d.imageUrl??"./media/building-e.webp")}" alt="${l(d.name)}" />
                      </div>
                      <div class="dep-building-body">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${l(d.name)}</strong>
                          <span class="pacom-badge ${V}">${I.length===0?"未建层":`${ge}/${I.length} 底图`}</span>
                        </div>
                        <div class="pacom-row-sub">地上 ${d.aboveFloors} 层${d.belowFloors>0?` · 地下 ${d.belowFloors} 层`:""}${d.hasRoof?" · RF":""}${d.areaSqm?` · ${d.areaSqm} m²`:""}</div>
                        <div class="pacom-progress-track">
                          <div class="pacom-progress-fill" style="width:${be}%; background:${be===100?"var(--pacom-status-online)":"var(--pacom-accent-solid)"};"></div>
                        </div>
                        ${$e.length>0?`<div style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:12px; color:var(--pacom-text-secondary);">
                                 <span>尚缺 ${$e.length} 个楼层</span>
                                 <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="height:22px; padding:0 6px; font-size:12px;" data-fill-missing-floors="${l(d.id)}" ${p?"":"disabled"}>一键补齐</button>
                               </div>`:""}
                      </div>
                      <div class="dep-building-foot">
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${l(d.id)}" ${p?"":"disabled"}>编辑参数</button>
                        <span class="pacom-row-sub" style="font-size:12px; color:${ie?"var(--pacom-accent-fg)":"var(--pacom-text-secondary)"};">${ie?"当前查看中":"点击切换楼层"}</span>
                      </div>
                    </article>`}).join("")}
              <button type="button" class="dep-building-add-card" data-open-new-bld="1" ${p?"":"disabled"}>
                ${J("plus",20)}
                <span style="font-size:13px;">新建楼宇</span>
              </button>
            </div>`}
      </section>

      ${k?`
          <section class="pacom-section">
            <div class="pacom-section-head">
              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <h2 class="pacom-section-title">${l(k.name)} 楼层与底图（${g.length}）</h2>
                <div class="pacom-count-pills">
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${we==="all"}" data-floor-list-filter="all">全部 <span class="pacom-count-num">${g.length}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${we==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 <span class="pacom-count-num">${e}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${we==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 <span class="pacom-count-num">${n}</span></button>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                ${t.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${l(k.id)}" ${p?"":"disabled"}>一键补齐 ${t.length} 层</button>`:""}
                <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-floor="1" ${p?"":"disabled"}>+ 新增楼层</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-batch-modal="1" ${p?"":"disabled"}>批量导入底图</button>
              </div>
            </div>

            ${g.length===0?`
                <div class="dep-empty-card">
                  <div class="dep-empty-icon">${J("layers",20)}</div>
                  <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${l(k.name)} 暂无楼层</strong>
                  <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${l(k.id)}" ${p?"":"disabled"}>一键生成全部楼层</button>
                    <button type="button" class="pacom-btn" data-open-new-floor="1" ${p?"":"disabled"}>+ 手动新增楼层</button>
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
                        ${s.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':s.map(d=>{const I=Me().filter(V=>V.floorId===d.id),ge=[...ya,...c].filter(V=>V.floorId===d.id),be=Le(d.id),$e=ee===d.id,ie=g.filter(V=>V.id!==d.id);return`
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
                                          ${d.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${l(k.name)} ${l(d.name)} 平面底图" data-lb-src="${l(d.plan.imageUrl)}" title="查看大图"><img src="${l(d.plan.imageUrl)}" alt="${l(d.name)}" /></button>
                                                 <span class="pacom-badge pacom-badge--online">已就绪</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                          <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="cursor:pointer; height:24px; padding:0 6px; font-size:12px;">
                                            <span>${d.plan?"替换":"上传"}</span>
                                            <input type="file" name="floorPlan_${l(d.id)}" accept="image/*" data-upload-floor="${l(d.id)}" style="display:none;" ${p?"":"disabled"} />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        ${I.length>0?`<span>${I.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${l(I.slice(0,2).map(V=>V.name.replace(/^7F\s*/,"")).join("、"))}${I.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                                      </td>
                                      <td><span class="pacom-row-sub">${ge.length} 份</span></td>
                                      <td>
                                        <div style="display:flex; justify-content:flex-end; gap:6px;">
                                          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-expand-floor="${l(d.id)}">${$e?"收起配置":"展开配置"}</button>
                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${l(d.id)}">设备标记 →</button>
                                        </div>
                                      </td>
                                    </tr>
                                    ${$e?`
                                        <tr class="pacom-table-detail-row">
                                          <td colspan="6">
                                            <div class="dep-floor-expand-grid">
                                              <div class="dep-floor-expand-col">
                                                <div class="dep-plan-preview-box" style="min-height:260px;" data-single-floor-drop="${l(d.id)}">
                                                  <div class="dep-plan-toolbar">
                                                    ${d.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${l(k.name)} ${l(d.name)} 平面底图" data-lb-src="${l(d.plan.imageUrl)}">查看大图</button>`:""}
                                                    <label class="dep-plan-tool-btn" style="cursor:pointer;">
                                                      <span>${d.plan?"替换底图":"上传底图"}</span>
                                                      <input type="file" name="floorPlanDrop_${l(d.id)}" accept="image/*" data-upload-floor="${l(d.id)}" style="display:none;" ${p?"":"disabled"} />
                                                    </label>
                                                    ${d.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${l(d.id)}" ${p?"":"disabled"}>清空</button>`:""}
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
                                                      <input class="pacom-input" name="fName" value="${l(d.name)}" aria-label="楼层名称" style="width:76px; height:32px; flex:none;" required ${p?"":"disabled"} />
                                                      <input class="pacom-input" name="fArea" type="number" step="0.1" value="${l(d.areaSqm??"")}" placeholder="面积 m²" aria-label="建筑面积" style="width:110px; height:32px; flex:none;" ${p?"":"disabled"} />
                                                      <button type="submit" class="pacom-btn" ${p?"":"disabled"}>保存</button>
                                                    </form>
                                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-delete-floor="${l(d.id)}" ${!p||be.length>0?`disabled title="${be.length>0?`已关联 ${be.length} 台设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                                                  </div>
                                                </div>

                                                <div class="pacom-settings-card" style="padding:4px 16px;">
                                                  <div class="pacom-setting-row" style="padding:10px 0; justify-content:space-between; gap:8px;">
                                                    <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${he==="zones"}" data-floor-detail-tab="zones">功能区（${I.length}）</button>
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${he==="docs"}" data-floor-detail-tab="docs">竣工图纸与手册（${ge.length}）</button>
                                                    </div>
                                                    ${he==="zones"?I.length>0&&ie.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-open-copy-zones="${l(d.id)}" ${p?"":"disabled"}>复用至其他层…</button>`:"":`<label class="pacom-btn pacom-btn--sm" style="cursor:pointer;"><span>+ 关联文件</span><input type="file" name="attachDoc_${l(d.id)}" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${l(d.id)}" style="display:none;" ${p?"":"disabled"} /></label>`}
                                                  </div>
                                                  ${he==="zones"?`
                                                        ${I.length===0?`
                                                            <div class="pacom-setting-row" style="padding:10px 0; flex-direction:column; align-items:flex-start; gap:8px;">
                                                              <span class="pacom-row-sub">暂未划分功能区，可一键套用常用模板：</span>
                                                              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                                                ${$a.map(V=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${l(V.key)}" data-tpl-floor="${l(d.id)}" ${p?"":"disabled"}>+ ${l(V.label)}</button>`).join("")}
                                                              </div>
                                                            </div>`:I.map(V=>m===V.id?`
                                                                      <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-save-edit-zone="${l(V.id)}" data-zone-floor="${l(d.id)}">
                                                                        <input class="pacom-input" name="zName" value="${l(V.name)}" style="width:180px; height:30px; flex:none;" required />
                                                                        <select class="pacom-select" name="zCat" style="width:110px; height:30px;">
                                                                          ${Object.keys(ca).map(ke=>`<option value="${ke}" ${V.category===ke?"selected":""}>${ca[ke]}</option>`).join("")}
                                                                        </select>
                                                                        <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                                                      </form>`:`
                                                                      <div class="pacom-setting-row" style="padding:9px 0;">
                                                                        <div class="pacom-setting-meta" style="min-width:140px;">
                                                                          <span class="pacom-setting-title">${l(V.name)} <span class="pacom-badge pacom-badge--neutral">${l(ca[V.category]??V.category)}</span></span>
                                                                        </div>
                                                                        <div class="pacom-setting-control">
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${l(V.id)}" ${p?"":"disabled"}>编辑</button>
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${l(V.id)}" ${p?"":"disabled"}>删除</button>
                                                                        </div>
                                                                      </div>`).join("")}
                                                        <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-add-zone="${l(d.id)}">
                                                          <input class="pacom-input" name="zoneName" placeholder="新功能区名称（如：${l(d.name)} 东侧实验区）" style="width:210px; height:32px; flex:none;" required ${p?"":"disabled"} />
                                                          <select class="pacom-select" name="zoneCat" style="width:112px; height:32px;" ${p?"":"disabled"}>
                                                            <option value="lab">实验区</option>
                                                            <option value="office">办公区</option>
                                                            <option value="meeting">会议室</option>
                                                            <option value="corridor">走廊/公区</option>
                                                            <option value="utility">机房/后勤</option>
                                                            <option value="outdoor">露台/活动区</option>
                                                          </select>
                                                          <button type="submit" class="pacom-btn" ${p?"":"disabled"}>+ 添加</button>
                                                        </form>`:ge.length===0?'<div class="pacom-setting-row" style="padding:12px 0;"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':ge.map(V=>`
                                                              <div class="pacom-setting-row" style="padding:9px 0;">
                                                                <div class="pacom-setting-meta" style="min-width:140px;">
                                                                  <span class="pacom-setting-title">${l(V.name)}</span>
                                                                  <span class="pacom-row-sub">${l(V.category)} · ${l(V.size)} · ${l(V.updatedAt)}</span>
                                                                </div>
                                                                <div class="pacom-setting-control">
                                                                  <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${l(V.id)}">查阅</button>
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
    `}function Da(p){if(!U||j!=="devices"||_==="groups")return"";const h=Le(A).find(e=>e.id===E)??null;if(!h)return"";const f=Te.get(h.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${A.slice(-4)}`},k=Re.filter(e=>e.deviceId===h.id),g=ua.get(h.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450};return`
      <aside class="pacom-drawer" style="width:376px;" aria-label="设备配置抽屉">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${l(h.name)}</h2>
            <div class="pacom-row-sub">${l(Pe(h.logicalZoneId))} · v${h.version}</div>
          </div>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${J("x",16)}</button>
        </div>

        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${p?"":"disabled"}>${P?"点击图纸定位中…":"点图更新坐标"}</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${l(h.id)}">Ping 闪灯 5s</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${T==="binding"}" data-drawer-tab="binding">绑定与安装</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${T==="params"}" data-drawer-tab="params">自治参数</button>
        </div>

        ${T==="binding"?`
            ${h.category==="lighting"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">回路可视化灯点（${k.length}）</span>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${l(h.id)}" ${p?"":"disabled"}>+ 添加灯点</button>
                  </div>
                  ${k.map(e=>`
                      <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                        <span><strong>${l(e.channel)}</strong> · ${l(e.label)}</span>
                        <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:12px;" data-del-light-marker="${l(e.id)}" ${p?"":"disabled"}>删除</button>
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
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${f.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${l(h.id)}" ${p?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${f.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${l(h.id)}" ${p?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
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
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${N}" data-toggle-phys="1" ${p?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                </span>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${p?"":"disabled"}>保存绑定与复核（v${h.version}）</button>
            </form>`:`
            <form data-save-dev-params="${l(h.id)}" class="pacom-control-box" style="gap:10px;">
              <div>
                <div style="font-size:14px; font-weight:450;">人感与光感自治参数</div>
                <div class="pacom-row-sub">自动关灯延时、恢复自动延时与光照度门限</div>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${g.offDelayMin}" ${p?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" value="${g.restoreMin}" ${p?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" value="${g.luxOn}" ${p?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" value="${g.luxOff}" ${p?"":"disabled"} /></label>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${p?"":"disabled"}>下发设备参数</button>
            </form>`}
      </aside>
    `}function _a(p){if(q.projects.length===0)return`
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${Oe(p,"map-pin")}</div>
        </main>`;const u=B?Fe(B):[],h=u.find(s=>s.id===A)??u[0],f=Le(A),k=Me().filter(s=>s.floorId===A),g=U?f.find(s=>s.id===E)??null:null,e=X.trim().toLowerCase(),n=f.filter(s=>!(me==="unverified"&&s.physicalInstalled||me==="unplaced"&&s.planPoint||e&&!`${s.name} ${Pe(s.logicalZoneId)}`.toLowerCase().includes(e)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${J("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${l(X)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${ne?"is-active":""}" data-toggle-hud-pool="1">设备池 ${f.length}</button>
            <button type="button" class="pacom-hud-pill" data-open-new-dev="1" ${p?"":"disabled"}>+ 新增设备</button>
          </div>

          ${ne?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${l(h?.name??"7F")} 设备池（${n.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${J("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-count-pills">
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${me==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${f.length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${me==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${f.filter(s=>!s.physicalInstalled).length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${me==="unplaced"}" data-dev-filter="unplaced">未标记 <span class="pacom-count-num">${f.filter(s=>!s.planPoint).length}</span></button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${n.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':n.map(s=>`
                            <div class="pacom-row ${s.id===E&&U?"is-selected":""}" data-pick-dev="${l(s.id)}" style="padding:8px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${l(s.name)}</div>
                                <div class="pacom-row-sub">${l(Pe(s.logicalZoneId))} · ${s.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${s.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${s.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${P?"crosshair":"grab"};">
          ${h?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${le}px, ${ue}px) scale(${Q});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${l(h.plan.imageUrl)}" alt="${l(h.name)} 平面图" />
                  ${K==="zone"?k.map(s=>{const t=de[s.id];return t?`<div class="pacom-zone-hotspot is-active" style="left:${t.left}%; top:${t.top}%; width:${t.width}%; height:${t.height}%;"><span class="pacom-zone-tag">${l(s.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${f.filter(s=>s.planPoint).map(s=>`
                      <button type="button" class="pacom-pin ${s.id===E&&U?"is-selected":""} ${s.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(s.planPoint.x*100).toFixed(2)}%; top:${(s.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${l(s.id)}" title="${l(s.name)}">
                        <span class="pacom-dot ${s.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${l(st(s))}</span>
                      </button>`).join("")}
                  ${K==="light_marker"||g?.category==="lighting"?Re.filter(s=>f.some(t=>t.id===s.deviceId)).map(s=>`
                            <span class="dep-light-dot" style="left:${(s.x*100).toFixed(1)}%; top:${(s.y*100).toFixed(1)}%;" title="${l(s.label)}（${l(s.channel)}）">
                              ${J("sparkles",12)}<span>${l(s.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${l(A)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${u.map(s=>`
              <button type="button" class="pacom-elev-item ${s.id===A?"is-active":""}" data-scrubber-floor="${l(s.id)}" title="${l(s.name)}${s.plan?" · 已传底图":" · 待传底图"}">
                ${s.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${l(s.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${K==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${K==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${K==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${J("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(Q*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${J("plus",16)}</button>
        </div>
      </main>
    `}function Pa(p){if(q.projects.length===0)return Oe(p,"list");const u=Le(A),h=D.trim().toLowerCase(),f=u.filter(g=>!(te==="online"&&g.connectivity!=="online"||te==="offline"&&g.connectivity!=="offline"||te==="unverified"&&g.physicalInstalled||h&&!`${g.name} ${Pe(g.logicalZoneId)} ${g.hardwareBinding?.protocol??""}`.toLowerCase().includes(h))),k=u.filter(g=>g.connectivity==="online").length;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${l(D)}" aria-label="搜索设备列表" />
          <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
            <option value="all" ${te==="all"?"selected":""}>全部状态（${u.length}）</option>
            <option value="online" ${te==="online"?"selected":""}>仅看在线（${k}）</option>
            <option value="offline" ${te==="offline"?"selected":""}>仅看离线（${u.length-k}）</option>
            <option value="unverified" ${te==="unverified"?"selected":""}>待物理复核（${u.filter(g=>!g.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${J("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-dev="1" ${p?"":"disabled"}>+ 新增设备</button>
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
          <span>显示 ${f.length} / ${u.length} 台设备 · ${k} 在线 · ${u.length-k} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dev-subtab="marking">切换至设备标记 →</button>
        </div>
      </div>
    `}function Ra(p){if(q.projects.length===0)return Oe(p,"folder-kanban");const u=sa.filter(k=>k.floorId===A||A===ae.floorId&&k.floorId===ae.floorId),h=u.filter(k=>k.track==="mesh_auto"),f=u.filter(k=>k.track==="cloud_biz");return`
      <div class="pacom-grid-2">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${h.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${h.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':h.map(k=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${l(k.name)} <span class="pacom-badge pacom-badge--neutral">${l(k.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${k.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${l(k.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${f.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${f.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':f.map(k=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${l(k.name)} <span class="pacom-badge pacom-badge--neutral">${l(k.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${k.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${l(k.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>
      </div>
    `}function Oa(p){if(q.projects.length===0)return Oe(p,"waypoints");const u=Le(A),h=Me().filter(t=>t.floorId===A),f=u.filter(t=>t.category!=="hvac"&&t.category!=="meter"),k=f.filter(t=>Te.get(t.id)?.proxy).length,g=f.filter(t=>Te.get(t.id)?.relay).length,e=u.filter(t=>t.category==="gateway"),n=u.filter(t=>Te.get(t.id)?.relay||Te.get(t.id)?.proxy),s=u.filter(t=>t.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge ${ye?"pacom-badge--warning":"pacom-badge--online"}">${ye?"有变更待同步":"协同锁空闲 · 已同步"}</span>
            <span class="pacom-row-sub">Mesh 节点 ${f.length} 台 · Proxy ${k} 个 · Relay ${g} 个 · 边缘基线 v${Ae}</span>
          </div>
        </div>
        ${Ve.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${Ve.map(t=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${l(t.title)}</strong> <span class="pacom-row-sub">· ${l(t.detail)}</span></div>
                      <span class="pacom-badge ${t.level==="ok"?"pacom-badge--online":t.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${t.level==="ok"?"通过":t.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达设备标记）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${oe==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${oe==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${oe==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${e.length===0?'<div class="pacom-row-sub">本层暂未配置网关节点。</div>':e.map(t=>`
                          <button type="button" class="dep-topo-node ${t.connectivity==="offline"?"is-issue":""}" data-topo-jump="${l(t.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${l(t.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                            <span class="pacom-row-sub">${l(t.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                          </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${n.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，可在「设备管理」抽屉中为传感器开启。</div>':n.map(t=>{const w=Te.get(t.id);return`
                            <button type="button" class="dep-topo-node ${t.connectivity==="offline"?"is-issue":""}" data-topo-jump="${l(t.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${l(t.name)}</strong><span class="pacom-badge pacom-badge--accent">${w?.proxy?"Proxy":""}${w?.proxy&&w?.relay?" + ":""}${w?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${l(Pe(t.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${s.length===0?'<div class="pacom-row-sub">本层暂无末端设备。</div>':s.map(t=>`
                          <button type="button" class="dep-topo-node ${t.connectivity==="offline"?"is-issue":""}" data-topo-jump="${l(t.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${l(t.name)}</strong><span class="pacom-badge ${t.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${t.connectivity==="online"?"在线":"离线"}</span></div>
                            <span class="pacom-row-sub">${l(Pe(t.logicalZoneId))} · ${l(t.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                          </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${u.filter(t=>t.category==="sensor"||t.category==="gateway").map(t=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${l(t.id)}">
                      <strong>${l(t.name)}</strong>
                      <span class="pacom-row-sub">${t.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${u.filter(t=>t.category==="lighting"||t.category==="hvac").map(t=>`
                    <button type="button" class="dep-topo-node ${t.connectivity==="offline"?"is-issue":""}" data-topo-jump="${l(t.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${l(t.name)}</strong><span class="pacom-badge ${t.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${t.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${l(Pe(t.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${h.map(t=>{const w=u.filter(I=>I.logicalZoneId===t.id),d=w.some(I=>I.connectivity==="offline");return`
                      <div class="dep-topo-node ${d?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${l(t.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${d?"pacom-badge--warning":"pacom-badge--online"}">${w.length} 台设备</span></div>
                        <span class="pacom-row-sub">${d?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function Na(p){if(q.projects.length===0)return Oe(p,"plug");const u=H.reduce((g,e)=>g+e.collectedPoints,0),h=H.reduce((g,e)=>g+e.calculatedPoints,0),f=H.filter(g=>g.status==="connected").length,k=H.filter(g=>g.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${f}<span class="pacom-kpi-unit">/ ${H.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${H.length?Math.round(f/H.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${u}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${h}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${k.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${k.length} 条采集通道通信降级（${k.map(g=>g.name).join("、")}）</span>
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
                ${H.map(g=>{const e=et[g.status]??{label:g.status,cls:"pacom-badge--neutral"},n=g.status==="connected"?98:g.status==="degraded"?62:0,s=n>=75?"var(--pacom-status-online)":n>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",t=De===g.id,w=t?nt(g,ce):[];return`
                      <tr>
                        <td><strong>${l(g.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${g.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${l(g.endpoint)}</code></td>
                        <td>采集 ${g.collectedPoints} / 计算 ${g.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${e.cls}">${e.label}</span>
                            <span class="pacom-row-sub">${n}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${n}%; background:${s};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${l(g.id)}">${t?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${l(g.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${l(g.id)}" data-endpoint-val="${l(g.endpoint)}">${qe===g.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${t?`
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
    `}function Ba(p){const u=[],h=q.projects.find(g=>g.id===C)??q.projects[0]??null,f=q.buildings.find(g=>g.id===B)??(h?q.buildings.find(g=>g.projectId===h.id):null)??null;if(v&&u.push(`
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
        </div>`),F&&h){const e=q.buildings.filter(n=>n.projectId===h.id).reduce((n,s)=>n+Fe(s.id).reduce((t,w)=>t+Le(w.id).length,0),0);u.push(`
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
                  <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${l(h.id)}" style="display:none;" ${p?"":"disabled"} />
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
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${l(h.id)}" ${!p||e>0?`disabled title="${e>0?`包含 ${e} 台运行中设备，请先解绑后再删除`:"只读"}"`:""}>删除项目</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${p?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}G&&h&&u.push(`
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
        </div>`);const k=L?q.buildings.find(g=>g.id===L)??null:null;if(k){const g=Fe(k.id),e=g.reduce((s,t)=>s+Le(t.id).length,0),n=Ge(k);u.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
          <form class="dep-modal-card" data-save-building="${l(k.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑楼宇：${l(k.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${l(k.imageUrl??"./media/building-e.webp")}" alt="${l(k.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:6px; background:#fff; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">楼宇外观 / 白模图</div>
                  <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>替换图片</span>
                  <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${l(k.id)}" style="display:none;" ${p?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${l(k.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${l(k.areaSqm??"")}" placeholder="选填" /></label>
                <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${k.aboveFloors}" /></label>
                <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${k.belowFloors}" /></label>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                <label style="display:inline-flex; align-items:center; gap:6px; font-size:13px;"><input type="checkbox" name="bRoof" ${k.hasRoof?"checked":""} />含屋面层 (RF)</label>
                ${n.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${l(k.id)}">一键补齐缺失 ${n.length} 层</button>`:`<span class="pacom-row-sub">已配置 ${g.length} 个楼层</span>`}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${l(k.id)}" ${!p||e>0?`disabled title="${e>0?"包含运行中设备，请先解绑后再删除":"只读"}"`:""}>删除楼宇</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${p?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}if(i&&f&&u.push(`
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
        </div>`),b&&f){const g=Fe(f.id),e=Ee.filter(n=>!!n.matchedFloorId).length;u.push(`
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
                  <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${l(f.id)}" style="display:none;" ${p?"":"disabled"} />
                </label>
              </div>
              ${Ee.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                      <div class="pacom-row-sub">已选 ${Ee.length} 张图片，已匹配 ${e} 层：</div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:6px; max-height:220px; overflow-y:auto;">
                        ${Ee.map(n=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${l(n.file.name)}">${l(n.file.name)}</span>
                              <select class="pacom-select" name="overrideFloor_${l(n.id)}" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${l(n.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${g.map(s=>`<option value="${l(s.id)}" ${n.matchedFloorId===s.id?"selected":""}>${l(s.name)}</option>`).join("")}
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
        </div>`)}if(M&&f){const g=_e().find(n=>n.id===M),e=Fe(f.id).filter(n=>n.id!==M);g&&e.length>0&&u.push(`
          <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
            <div class="dep-modal-card">
              <div class="dep-modal-head">
                <strong style="font-size:15px; font-weight:500;">复用 ${l(g.name)} 功能区至其他楼层</strong>
                <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${J("x",16)}</button>
              </div>
              <div class="dep-modal-body">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <span class="pacom-row-sub">勾选目标楼层（已选 ${pe.size} 层）</span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                  </div>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${e.map(n=>{const s=pe.has(n.id),t=Me().filter(w=>w.floorId===n.id).length;return`
                        <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${s}">
                          <input type="checkbox" name="copyFloor_${l(n.id)}" data-copy-target-floor="${l(n.id)}" ${s?"checked":""} style="margin:0;" />
                          <span>${l(n.name)}${t>0?` (${t}区)`:""}</span>
                        </label>`}).join("")}
                </div>
              </div>
              <div class="dep-modal-foot">
                <span></span>
                <div style="display:flex; gap:8px;">
                  <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                  <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${l(g.id)}" ${pe.size===0?"disabled":""}>确认复制（${pe.size} 层）</button>
                </div>
              </div>
            </div>
          </div>`)}if(x){const g=Me().filter(e=>e.floorId===A);u.push(`
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
        </div>`)}return o&&u.push(`
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
        </div>`),S&&u.push(`
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
        </div>`),u.join("")}function y(){const p=$.scope.canEditDeployment,u=$.scope.activeOverrides.find(n=>n.module==="deployment"&&n.status==="active"),h=u?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 · ${u.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${l(u.approvedBy)} · 到期自动收回：${l(u.expiresAt.slice(0,16).replace("T"," "))} · 事由：${l(u.reason)}</span>
          </div>
        </div>`:"",f=j==="devices"&&_==="marking",k=Ca[j],g=j==="devices"?_==="marking"?"设备标记":_==="list"?"设备列表":"设备分组":k.title,e=j==="devices"?_==="marking"?"在 2D 平面底图上完成设备坐标标记、回路灯点布置与硬件绑定。":_==="list"?"核查本层四态设备清单，点击任意行配置硬件绑定、人感/光感参数或执行自检。":"管理端侧蓝牙 Mesh 自治联动组与云端业务分组。":k.subtitle;a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${ea({tree:q,session:$,scope:R,maxGranularity:k.granularity,isOpen:re,searchKeyword:fe})}
            </div>
            <div class="pacom-header-meta">
              ${p?u?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
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
                      ${va(p)}
                    </div>
                  </div>
                  ${h}
                  ${W?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${l(W)}</span></div>`:""}
                  ${se?`<div class="pacom-alert-banner">${l(se)}</div>`:""}
                  ${_a(p)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head pacom-unified-head--split">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${g}</h2>
                      <p class="pacom-unified-subtitle">${e}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${va(p)}
                    </div>
                  </div>
                  ${h}
                  ${W?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${l(W)}</span></div>`:""}
                  ${se?`<div class="pacom-alert-banner">${l(se)}</div>`:""}
                  ${j==="overview"?Ma(p):j==="project_config"?Ta(p):j==="devices"?_==="list"?Pa(p):Ra(p):j==="network_topo"?Oa(p):Na(p)}
                </div>
              </div>`}
          ${Da(p)}
        </div>
      </div>
      ${Ba(p)}
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
    `,Ua()}function Ua(){aa(a,{onToggle:()=>{re=!re,y(),re&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:e=>{fe=e,y();const n=a.querySelector("[data-global-space-search]");n&&(n.focus(),n.setSelectionRange(e.length,e.length))},onPick:e=>{if(R=e,re=!1,e.level==="project"){C=e.projectId;const n=q.buildings.find(s=>s.projectId===e.projectId);n?na(n.id):(B="",A="",ee=null)}else e.level==="building"?na(e.buildingId):e.level==="floor"&&Ze(e.floorId);y()}}),a.querySelectorAll("[data-dep-nav]").forEach(e=>{e.addEventListener("click",()=>{j=e.dataset.depNav??"overview",e.dataset.devSubtabJump&&(_=e.dataset.devSubtabJump),U=!1,P=!1,W="",se="",y()})}),a.querySelectorAll("[data-dev-subtab]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.devSubtab??"marking";_=n,n==="groups"&&(U=!1,P=!1),W="",se="",y()})}),a.querySelectorAll("[data-drawer-tab]").forEach(e=>{e.addEventListener("click",()=>{T=e.dataset.drawerTab??"binding",y()})}),a.querySelector("[data-list-search]")?.addEventListener("input",e=>{D=e.currentTarget.value,y();const n=a.querySelector("[data-list-search]");n&&(n.focus(),n.setSelectionRange(D.length,D.length))}),a.querySelector("[data-list-filter]")?.addEventListener("change",e=>{te=e.currentTarget.value??"all",y()}),a.querySelectorAll("[data-refresh-dep]").forEach(e=>{e.addEventListener("click",()=>{Se()})}),a.querySelectorAll("[data-matrix-nav]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.matrixFloor;n&&Ze(n),j=e.dataset.matrixNav??"devices",e.dataset.matrixSub&&(_=e.dataset.matrixSub),e.dataset.matrixExpand==="1"&&n&&(ee=n),y()})}),a.querySelectorAll("[data-scrubber-floor]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.scrubberFloor;n&&(Ze(n),y())})}),a.querySelectorAll("[data-close-modals]").forEach(e=>{e.addEventListener("click",()=>{xe(),y()})}),a.querySelectorAll("[data-modal-scrim]").forEach(e=>{e.addEventListener("click",n=>{n.target===e&&(xe(),y())})}),a.querySelectorAll("[data-open-new-proj]").forEach(e=>{e.addEventListener("click",()=>{xe(),v=!0,y()})}),a.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{xe(),F=!0,y()}),a.querySelectorAll("[data-open-new-bld]").forEach(e=>{e.addEventListener("click",()=>{xe(),G=!0,y()})}),a.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{xe(),i=!0,y()}),a.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{xe(),b=!0,y()}),a.querySelectorAll("[data-open-new-dev]").forEach(e=>{e.addEventListener("click",()=>{xe(),x=!0,y()})}),a.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{xe(),o=!0,y()}),a.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{xe(),S=!0,y()}),a.querySelectorAll("[data-select-building]").forEach(e=>{e.addEventListener("click",n=>{if(n.target?.closest("button, label, input"))return;const s=e.dataset.selectBuilding;s&&s!==B&&(na(s),we="all",ee=null,y())})}),a.querySelectorAll("[data-edit-building]").forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation(),xe(),L=e.dataset.editBuilding??null,y()})}),a.querySelectorAll("[data-toggle-expand-floor]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.toggleExpandFloor??null;ee=ee===n?null:n,ee&&Ze(ee),m=null,y()})}),a.querySelectorAll("[data-jump-floor-marking]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.jumpFloorMarking;n&&Ze(n),j="devices",_="marking",y()})}),a.querySelector("[data-jump-floor-config]")?.addEventListener("click",e=>{const n=e.currentTarget.dataset.jumpFloorConfig;j="project_config",n&&(ee=n),y()}),a.querySelectorAll("[data-floor-detail-tab]").forEach(e=>{e.addEventListener("click",()=>{he=e.dataset.floorDetailTab??"zones",y()})}),a.querySelectorAll("[data-floor-list-filter]").forEach(e=>{e.addEventListener("click",()=>{we=e.dataset.floorListFilter??"all",y()})}),a.querySelector("[data-create-project]")?.addEventListener("submit",async e=>{e.preventDefault();const n=new FormData(e.currentTarget),s=String(n.get("pName")??"").trim(),t=String(n.get("pCity")??"").trim(),w=String(n.get("pAddr")??"").trim(),d=String(n.get("pLng")??"").trim(),I=String(n.get("pLat")??"").trim();if(!s)return;let ge;if(d||I){const be=Number(d),$e=Number(I);if(!Number.isFinite(be)||!Number.isFinite($e)||be<-180||be>180||$e<-90||$e>90){se="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",y();return}ge={lng:be,lat:$e,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const be=await r.createProject?.({name:s,city:t,address:w,location:ge});xe(),j="project_config",be&&(C=be.id,B="",A="",ee=null,R=Ue({level:"project",projectId:be.id})),W=`已创建项目「${s}」，下一步可添加园区楼宇。`,await Se()}catch(be){se=be instanceof Error?be.message:String(be),y()}}),a.querySelector("[data-save-project]")?.addEventListener("submit",async e=>{e.preventDefault();const n=e.currentTarget,s=n.dataset.saveProject??C,t=new FormData(n),w=String(t.get("pName")??"").trim(),d=String(t.get("pCity")??"").trim(),I=String(t.get("pAddr")??"").trim(),ge=String(t.get("pLng")??"").trim(),be=String(t.get("pLat")??"").trim();let $e;if(ge||be){const ie=Number(ge),V=Number(be);if(!Number.isFinite(ie)||!Number.isFinite(V)||ie<-180||ie>180||V<-90||V>90){se="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",y();return}$e={lng:ie,lat:V,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await r.updateProject?.(s,{name:w,city:d,address:I,location:$e}),xe(),W=`已保存项目「${w||"当前项目"}」信息。`,await Se()}catch(ie){se=ie instanceof Error?ie.message:String(ie),y()}}),a.querySelector("[data-upload-proj]")?.addEventListener("change",async e=>{const n=e.currentTarget,s=n.dataset.uploadProj,t=n.files?.[0];if(!(!s||!t))try{const w=await Xe(t);await r.updateProject?.(s,{imageUrl:w}),W=`已更新项目封面图（${t.name}）。`,await Se()}catch(w){se=w instanceof Error?w.message:String(w),y()}}),a.querySelector("[data-delete-proj]")?.addEventListener("click",async e=>{const n=e.currentTarget.dataset.deleteProj,s=q.projects.find(t=>t.id===n);if(!(!n||!s)&&window.confirm(`确认删除项目「${s.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await r.deleteProject?.(n),xe(),W=`已删除项目「${s.name}」。`,await Se()}catch(t){se=t instanceof Error?t.message:String(t),y()}}),a.querySelector("[data-create-bld]")?.addEventListener("submit",async e=>{e.preventDefault();const n=e.currentTarget,s=n.dataset.createBld??C,t=new FormData(n),w=String(t.get("bName")??"").trim(),d=String(t.get("bArea")??"").trim(),I=Math.max(1,Number(t.get("bAbove")??12)),ge=Math.max(0,Number(t.get("bBelow")??0)),be=!!t.get("bRoof"),$e=!!t.get("bAutoFloors");if(w)try{const ie=await r.upsertBuilding?.({projectId:s,name:w,aboveFloors:I,belowFloors:ge,hasRoof:be,areaSqm:d?Number(d):null});xe();let V=0;if(ie&&(B=ie.id,$e)){for(let ke=1;ke<=I;ke+=1)await r.upsertFloor?.({buildingId:ie.id,kind:"above",level:ke,name:`${ke}F`}),V+=1;for(let ke=1;ke<=ge;ke+=1)await r.upsertFloor?.({buildingId:ie.id,kind:"below",level:-ke,name:`B${ke}`}),V+=1;be&&(await r.upsertFloor?.({buildingId:ie.id,kind:"roof",level:99,name:"RF"}),V+=1)}W=$e?`已创建楼宇「${w}」并自动生成 ${V} 个楼层。`:`已创建楼宇「${w}」。`,await Se()}catch(ie){se=ie instanceof Error?ie.message:String(ie),y()}}),a.querySelector("[data-save-building]")?.addEventListener("submit",async e=>{e.preventDefault();const n=e.currentTarget,s=n.dataset.saveBuilding,t=q.buildings.find(ie=>ie.id===s);if(!t)return;const w=new FormData(n),d=String(w.get("bName")??"").trim()||t.name,I=String(w.get("bArea")??"").trim(),ge=Math.max(1,Number(w.get("bAbove")??t.aboveFloors)),be=Math.max(0,Number(w.get("bBelow")??t.belowFloors)),$e=!!w.get("bRoof");try{await r.upsertBuilding?.({id:s,projectId:t.projectId,name:d,aboveFloors:ge,belowFloors:be,hasRoof:$e,areaSqm:I?Number(I):null}),xe(),W=`已保存楼宇「${d}」参数。`,await Se()}catch(ie){se=ie instanceof Error?ie.message:String(ie),y()}}),a.querySelector("[data-delete-building]")?.addEventListener("click",async e=>{const n=e.currentTarget.dataset.deleteBuilding,s=q.buildings.find(t=>t.id===n);if(!(!n||!s)&&window.confirm(`确认删除楼宇「${s.name}」及其下全部楼层与功能区？`))try{await r.deleteBuilding?.(n),xe(),W=`已删除楼宇「${s.name}」。`,await Se()}catch(t){se=t instanceof Error?t.message:String(t),y()}}),a.querySelector("[data-upload-bld]")?.addEventListener("change",async e=>{const n=e.currentTarget,s=n.dataset.uploadBld,t=n.files?.[0],w=q.buildings.find(d=>d.id===s);if(!(!s||!t||!w))try{const d=await Xe(t);await r.upsertBuilding?.({id:w.id,projectId:w.projectId,name:w.name,aboveFloors:w.aboveFloors,belowFloors:w.belowFloors,hasRoof:w.hasRoof,areaSqm:w.areaSqm,imageUrl:d}),W=`已更新「${w.name}」外观图（${t.name}）。`,await Se()}catch(d){se=d instanceof Error?d.message:String(d),y()}}),a.querySelectorAll("[data-fill-missing-floors]").forEach(e=>{e.addEventListener("click",async n=>{n.stopPropagation();const s=e.dataset.fillMissingFloors;if(s)try{const t=await Fa(s);W=t>0?`已自动补齐 ${t} 个楼层。`:"当前楼宇楼层已完整。",await Se()}catch(t){se=t instanceof Error?t.message:String(t),y()}})}),a.querySelector("[data-create-floor]")?.addEventListener("submit",async e=>{e.preventDefault();const n=e.currentTarget,s=n.dataset.createFloor,t=new FormData(n),w=String(t.get("fName")??"").trim().toUpperCase(),d=String(t.get("fArea")??"").trim();if(!w)return;const I=Be(w)??w;if(Fe(s).some(V=>(Be(V.name)??V.name.toUpperCase())===I)){se=`楼层「${w}」已存在，请使用其他名称。`,y();return}const be=Ye(w),$e=be>=999?"roof":be<0?"below":"above",ie=be>=999?99:be||1;try{const V=await r.upsertFloor?.({buildingId:s,kind:$e,level:ie,name:w,areaSqm:d?Number(d):null});xe(),V&&(A=V.id,ee=V.id),W=`已新增楼层「${w}」。`,await Se()}catch(V){se=V instanceof Error?V.message:String(V),y()}}),a.querySelector("[data-save-floor]")?.addEventListener("submit",async e=>{e.preventDefault();const n=e.currentTarget,s=n.dataset.saveFloor,t=_e().find(ke=>ke.id===s);if(!t)return;const w=new FormData(n),d=String(w.get("fName")??"").trim()||t.name,I=String(w.get("fArea")??"").trim(),ge=Be(d)??d.toUpperCase();if(Fe(t.buildingId).some(ke=>ke.id!==t.id&&(Be(ke.name)??ke.name.toUpperCase())===ge)){se=`楼层「${d}」已存在，请避免重复命名。`,y();return}const $e=Ye(d),ie=$e>=999?"roof":$e<0?"below":"above",V=$e>=999?99:$e||t.level;try{await r.upsertFloor?.({id:t.id,buildingId:t.buildingId,kind:ie,level:V,name:d,areaSqm:I?Number(I):null}),W=`已保存楼层「${d}」。`,await Se()}catch(ke){se=ke instanceof Error?ke.message:String(ke),y()}}),a.querySelector("[data-delete-floor]")?.addEventListener("click",async e=>{const n=e.currentTarget.dataset.deleteFloor,s=_e().find(t=>t.id===n);if(!(!n||!s)){if(Le(n).length>0){se=`楼层「${s.name}」已关联设备，请先解绑后再删除。`,y();return}if(window.confirm(`确认删除楼层「${s.name}」及其功能区？`))try{await r.deleteFloor?.(n),ee=null,W=`已删除楼层「${s.name}」。`,await Se()}catch(t){se=t instanceof Error?t.message:String(t),y()}}});async function p(e,n){const s=_e().find(t=>t.id===e);if(s)try{const t=await Xe(n);await r.upsertFloor?.({id:s.id,buildingId:s.buildingId,kind:s.kind,level:s.level,name:s.name,areaSqm:s.areaSqm,planImageUrl:t}),W=`已更新「${s.name}」平面底图（${n.name}）。`,await Se()}catch(t){se=t instanceof Error?t.message:String(t),y()}}a.querySelectorAll("[data-upload-floor]").forEach(e=>{e.addEventListener("change",()=>{const n=e.dataset.uploadFloor,s=e.files?.[0];n&&s&&p(n,s)})});const u=a.querySelector("[data-single-floor-drop]");u&&$.scope.canEditDeployment&&(u.addEventListener("dragover",e=>{e.preventDefault(),u.style.borderColor="var(--pacom-accent-solid)"}),u.addEventListener("dragleave",()=>{u.style.borderColor=""}),u.addEventListener("drop",e=>{e.preventDefault(),u.style.borderColor="";const n=u.dataset.singleFloorDrop,s=Array.from(e.dataTransfer?.files??[]).find(t=>t.type.startsWith("image/"));n&&s&&p(n,s)})),a.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async e=>{const n=e.currentTarget.dataset.clearFloorPlan,s=_e().find(t=>t.id===n);if(!(!n||!s)&&window.confirm(`确认清空「${s.name}」的平面底图？`))try{await r.upsertFloor?.({id:s.id,buildingId:s.buildingId,kind:s.kind,level:s.level,name:s.name,areaSqm:s.areaSqm,planImageUrl:null}),W=`已清空「${s.name}」平面底图。`,await Se()}catch(t){se=t instanceof Error?t.message:String(t),y()}}),a.querySelectorAll("[data-open-lightbox]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.lbTitle??"平面底图预览",s=e.dataset.lbSrc??"";s&&(Ie={title:n,imageUrl:s},y())})}),a.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{Ie=null,y()}),a.querySelector("[data-lightbox-scrim]")?.addEventListener("click",e=>{e.target===e.currentTarget&&(Ie=null,y())});function h(e,n){if(!e||n.length===0)return;const s=Fe(e),t=new Map;s.forEach(w=>{const d=Be(w.name)??w.name.toUpperCase();t.set(d,w)}),Ee=n.map((w,d)=>{const I=Be(w.name),ge=I?t.get(I):void 0;return{id:`bu-${Date.now().toString(36)}-${d}`,file:w,matchedFloorId:ge?.id??null}}),b=!0,y()}a.querySelector("[data-batch-upload-floors]")?.addEventListener("change",e=>{const n=e.currentTarget;h(n.dataset.batchUploadFloors??"",Array.from(n.files??[]))});const f=a.querySelector("[data-batch-dropzone]");f&&$.scope.canEditDeployment&&(f.addEventListener("dragover",e=>{e.preventDefault(),ze||(ze=!0,f.style.borderColor="var(--pacom-accent-solid)",f.style.background="var(--pacom-accent-soft)")}),f.addEventListener("dragleave",()=>{ze=!1,f.style.borderColor="",f.style.background=""}),f.addEventListener("drop",e=>{e.preventDefault(),ze=!1;const n=Array.from(e.dataTransfer?.files??[]).filter(s=>s.type.startsWith("image/"));h(f.dataset.batchDropzone??"",n)})),a.querySelectorAll("[data-batch-override-floor]").forEach(e=>{e.addEventListener("change",()=>{const n=Ee.find(s=>s.id===e.dataset.batchOverrideFloor);n&&(n.matchedFloorId=e.value||null,y())})}),a.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{Ee=[],y()}),a.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const e=Ee.filter(s=>s.matchedFloorId),n=Ee.length-e.length;if(e.length!==0)try{for(const s of e){const t=_e().find(d=>d.id===s.matchedFloorId);if(!t)continue;const w=await Xe(s.file);await r.upsertFloor?.({id:t.id,buildingId:t.buildingId,kind:t.kind,level:t.level,name:t.name,areaSqm:t.areaSqm,planImageUrl:w})}Ee=[],xe(),W=`已批量导入 ${e.length} 个楼层平面底图${n>0?`（跳过 ${n} 张未分配文件）`:""}。`,await Se()}catch(s){se=s instanceof Error?s.message:String(s),y()}}),a.querySelectorAll("[data-apply-zone-tpl]").forEach(e=>{e.addEventListener("click",async()=>{const n=$a.find(t=>t.key===e.dataset.applyZoneTpl),s=_e().find(t=>t.id===e.dataset.tplFloor);if(!(!n||!s))try{for(const t of n.items){const w=await r.upsertZone?.({floorId:s.id,name:`${s.name} ${t.suffix}`,category:t.category});w&&(de[w.id]={left:20,top:20,width:24,height:24})}W=`已按「${n.label}」模板为 ${s.name} 创建 ${n.items.length} 个功能区。`,await Se()}catch(t){se=t instanceof Error?t.message:String(t),y()}})}),a.querySelector("[data-attach-doc]")?.addEventListener("change",e=>{const n=e.currentTarget,s=n.dataset.attachDoc,t=n.files?.[0],w=_e().find(I=>I.id===s);if(!s||!t||!w)return;const d=t.size>=1024*1024?`${(t.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(t.size/1024))} KB`;c.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:s,name:t.name,category:t.name.toLowerCase().endsWith(".xlsx")||t.name.toLowerCase().endsWith(".xls")?"点位清单":"竣工图纸",boundScope:`${w.name} · 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:d}),W=`已为 ${w.name} 关联文档「${t.name}」。`,y()}),a.querySelector("[data-add-zone]")?.addEventListener("submit",async e=>{e.preventDefault();const n=e.currentTarget.dataset.addZone,s=new FormData(e.currentTarget),t=String(s.get("zoneName")??"").trim(),w=String(s.get("zoneCat")??"office");if(t)try{const d=await r.upsertZone?.({floorId:n,name:t,category:w});d&&(de[d.id]={left:20,top:20,width:24,height:24}),W=`已添加功能区「${t}」。`,await Se()}catch(d){se=d instanceof Error?d.message:String(d),y()}}),a.querySelectorAll("[data-edit-zone]").forEach(e=>{e.addEventListener("click",()=>{m=e.dataset.editZone??null,y()})}),a.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{m=null,y()}),a.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async e=>{e.preventDefault();const n=e.currentTarget,s=new FormData(n),t=String(s.get("zName")??"").trim(),w=String(s.get("zCat")??"office");if(t)try{await r.upsertZone?.({id:n.dataset.saveEditZone,floorId:n.dataset.zoneFloor,name:t,category:w}),m=null,W=`已更新功能区「${t}」。`,await Se()}catch(d){se=d instanceof Error?d.message:String(d),y()}}),a.querySelectorAll("[data-del-zone]").forEach(e=>{e.addEventListener("click",async()=>{const n=e.dataset.delZone,s=Me().find(t=>t.id===n);if(!(!n||!s)&&window.confirm(`确认删除功能区「${s.name}」？`))try{await r.deleteZone?.(n),m===n&&(m=null),W=`已删除功能区「${s.name}」。`,await Se()}catch(t){se=t instanceof Error?t.message:String(t),y()}})}),a.querySelectorAll("[data-open-copy-zones]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.openCopyZones??null;xe(),M=n,pe=new Set(Fe(B).filter(s=>s.id!==n&&s.kind==="above"&&Me().filter(t=>t.floorId===s.id).length===0).map(s=>s.id)),y()})}),a.querySelectorAll("[data-copy-preset]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.copyPreset,s=Fe(B).filter(t=>t.id!==M);n==="empty"?pe=new Set(s.filter(t=>t.kind==="above"&&Me().filter(w=>w.floorId===t.id).length===0).map(t=>t.id)):n==="above"?pe=new Set(s.filter(t=>t.kind==="above").map(t=>t.id)):pe.clear(),y()})}),a.querySelectorAll("[data-copy-target-floor]").forEach(e=>{e.addEventListener("change",()=>{const n=e.dataset.copyTargetFloor;n&&(e.checked?pe.add(n):pe.delete(n),y())})}),a.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async e=>{const n=e.currentTarget.dataset.confirmCopyZones,s=Array.from(pe);if(!(!n||s.length===0))try{const t=await r.copyZonesToFloors?.(n,s)??0;xe(),pe.clear(),W=`已将当前层功能区复用至 ${s.length} 个目标楼层（共新增 ${t} 个功能区）。`,await Se()}catch(t){se=t instanceof Error?t.message:String(t),y()}});const k=a.querySelector("[data-dep-canvas-search]");k?.addEventListener("focus",()=>{ne||(ne=!0,y(),a.querySelector("[data-dep-canvas-search]")?.focus())}),k?.addEventListener("input",e=>{X=e.currentTarget.value,ne=!0,y();const n=a.querySelector("[data-dep-canvas-search]");n&&(n.focus(),n.setSelectionRange(X.length,X.length))}),a.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{ne=!ne,y()}),a.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{ne=!1,y()}),a.querySelectorAll("[data-brush]").forEach(e=>{e.addEventListener("click",()=>{K=e.dataset.brush??"device",y()})}),a.querySelectorAll("[data-dep-zoom]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.depZoom;n==="in"?Q=Math.min(2.6,Number((Q+.2).toFixed(2))):n==="out"?Q=Math.max(.6,Number((Q-.2).toFixed(2))):(Q=1,le=0,ue=0),We()})});const g=a.querySelector('[data-role="dep-stage"]');if(g&&!P){let e=!1,n=0,s=0,t=0,w=0;g.addEventListener("pointerdown",I=>{I.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(e=!0,n=I.clientX,s=I.clientY,t=le,w=ue,g.classList.add("is-panning"),g.setPointerCapture?.(I.pointerId))}),g.addEventListener("pointermove",I=>{e&&(le=t+(I.clientX-n),ue=w+(I.clientY-s),We())});const d=()=>{e&&(e=!1,g.classList.remove("is-panning"))};g.addEventListener("pointerup",d),g.addEventListener("pointercancel",d),g.addEventListener("wheel",I=>{I.preventDefault();const ge=I.deltaY<0?.12:-.12;Q=Math.max(.6,Math.min(2.6,Number((Q+ge).toFixed(2)))),We()},{passive:!1}),g.addEventListener("dblclick",I=>{I.target?.closest("button")||(Q=1,le=0,ue=0,We())})}a.querySelectorAll("[data-dev-filter]").forEach(e=>{e.addEventListener("click",()=>{me=e.dataset.devFilter??"all",y()})}),a.querySelector("[data-create-dev]")?.addEventListener("submit",e=>{e.preventDefault();const n=new FormData(e.currentTarget),s=String(n.get("devName")??"").trim(),t=String(n.get("devPreset")??"sensor"),w=String(n.get("devZone")??"")||null,d=da.find(ge=>ge.key===t)??da[0],I=`dev-custom-${Date.now().toString(36)}`;O.push({id:I,name:s,category:d.category,projectId:C||ae.projectId,buildingId:B,floorId:A,logicalZoneId:w,planPoint:{floorId:A,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),Te.set(I,{proxy:d.defaultProxy,relay:d.defaultRelay,meshUuid:`mesh-${A.slice(-4)}`}),d.category==="lighting"&&Re.push({id:`lm-${Date.now().toString(36)}`,deviceId:I,channel:"回路 1",label:`${s.slice(0,6)}主灯`,x:.52,y:.45}),xe(),E=I,U=!0,T="binding",ye=!0,W=`已新增「${s}」（${d.hint}），已生成默认标记并提示待同步边缘。`,y()}),a.querySelectorAll("[data-pick-dev]").forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation(),E=e.dataset.pickDev??null,U=!0,T="binding",N=Le(A).find(t=>t.id===E)?.physicalInstalled??!1,y()})}),a.querySelectorAll("[data-open-dev-drawer]").forEach(e=>{e.addEventListener("click",n=>{if(n.target?.closest("button"))return;E=e.dataset.openDevDrawer??null,U=!0,T="binding",N=Le(A).find(t=>t.id===E)?.physicalInstalled??!1,y()})}),a.querySelectorAll("[data-open-dev-params]").forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation(),E=e.dataset.openDevParams??null,U=!0,T="params",N=Le(A).find(t=>t.id===E)?.physicalInstalled??!1,y()})}),a.querySelector("[data-close-sel]")?.addEventListener("click",()=>{U=!1,P=!1,y()}),a.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{_!=="marking"?(_="marking",P=!0):P=!P,y()}),a.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{N=!N,y()}),a.querySelectorAll("[data-ping-dev]").forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation();const s=Le(A).find(t=>t.id===e.dataset.pingDev);s&&(W=`已向「${s.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,y())})}),a.querySelector("[data-add-light-marker]")?.addEventListener("click",e=>{const n=e.currentTarget.dataset.addLightMarker,s=Re.filter(t=>t.deviceId===n).length+1;Re.push({id:`lm-${Date.now().toString(36)}`,deviceId:n,channel:`回路 ${s}`,label:`照明点位 ${s}`,x:Math.min(.86,.35+s*.1),y:.42}),K="light_marker",W=`已新增「回路 ${s}」可视化灯点。`,y()}),a.querySelectorAll("[data-del-light-marker]").forEach(e=>{e.addEventListener("click",()=>{const n=Re.findIndex(s=>s.id===e.dataset.delLightMarker);n>=0&&Re.splice(n,1),y()})}),a.querySelectorAll("[data-toggle-mesh-role]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.meshDev,s=e.dataset.toggleMeshRole,t=Te.get(n)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};t[s]=!t[s],Te.set(n,t),ye=!0,W=`已更新节点 ${s.toUpperCase()} 状态，可在「网络拓扑」中一键同步至边缘网关。`,y()})}),a.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async e=>{const n=Le(A).find(d=>d.id===E);if(!P||!n)return;const s=e.currentTarget.getBoundingClientRect(),t=Math.max(.02,Math.min(.98,(e.clientX-s.left)/s.width)),w=Math.max(.02,Math.min(.98,(e.clientY-s.top)/s.height));if(O.some(d=>d.id===n.id)){n.planPoint={floorId:A,planVersion:1,x:Number(t.toFixed(4)),y:Number(w.toFixed(4))},P=!1,W=`已更新「${n.name}」图上坐标。`,y();return}try{await r.updateDevicePlanPoint({deviceId:n.id,floorId:ae.floorId,planVersion:n.planPoint?.planVersion??1,x:t,y:w,expectedVersion:n.version}),P=!1,W=`已更新「${n.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await Se()}catch(d){se=d instanceof Error?d.message:String(d),y()}}),a.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async e=>{e.preventDefault();const n=Le(A).find(t=>t.id===E);if(!n)return;const s=new FormData(e.currentTarget);if(O.some(t=>t.id===n.id)){n.physicalInstalled=N,n.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(s.get("protocol")),networkAddress:String(s.get("networkAddress")??""),portOrChannel:String(s.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:$.displayName},n.version+=1,ye=!0,W=`已保存「${n.name}」的硬件绑定与物理复核状态。`,y();return}try{await r.updateDeviceHardwareBinding({deviceId:n.id,gatewayId:n.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(s.get("protocol")),networkAddress:String(s.get("networkAddress")??""),portOrChannel:String(s.get("portOrChannel")??""),physicalInstalled:N,expectedVersion:n.version}),ye=!0,W=`已保存「${n.name}」的硬件绑定与物理安装复核状态。`,await Se()}catch(t){se=t instanceof Error?t.message:String(t),y()}}),a.querySelector("[data-save-dev-params]")?.addEventListener("submit",e=>{e.preventDefault();const n=e.currentTarget.dataset.saveDevParams,s=new FormData(e.currentTarget);ua.set(n,{offDelayMin:Number(s.get("offDelayMin")??15),restoreMin:Number(s.get("restoreMin")??30),luxOn:Number(s.get("luxOn")??280),luxOff:Number(s.get("luxOff")??450)}),ye=!0,W="设备自治延时与光感门限参数已下发并同步至配置基线。",y()}),a.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const e=Le(A).find(n=>n.id===E);e&&ga(e)}),a.querySelectorAll("[data-ftt-dev]").forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation();const s=Le(A).find(t=>t.id===e.dataset.fttDev);s&&ga(s)})}),a.querySelectorAll("[data-batch-ftt]").forEach(e=>{e.addEventListener("click",()=>ja())}),a.querySelectorAll("[data-export-inv]").forEach(e=>{e.addEventListener("click",()=>Aa())}),a.querySelector("[data-create-group]")?.addEventListener("submit",e=>{e.preventDefault();const n=new FormData(e.currentTarget),s=String(n.get("gName")??"").trim(),t=n.get("gTrack")??"mesh_auto",w=String(n.get("gType")??"灯光联动组");s&&(sa.unshift({id:`grp-${Date.now().toString(36)}`,track:t,groupType:w,name:s,floorId:A,includesAdapter:t==="mesh_auto",deviceIds:t==="mesh_auto"?["dev-e7f-gw-01"]:[]}),xe(),t==="mesh_auto"&&(ye=!0),W=`已新建${t==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${s}」。`,y())}),a.querySelectorAll("[data-test-group]").forEach(e=>{e.addEventListener("click",()=>{const n=sa.find(s=>s.id===e.dataset.testGroup);n&&(W=`已向分组「${n.name}」发送群组试控指令，${n.deviceIds.length} 台成员回读正常。`,y())})}),a.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>qa()),a.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{Ae+=1,ye=!1,W=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${Ae}）。`,y()}),a.querySelectorAll("[data-topo-mode]").forEach(e=>{e.addEventListener("click",()=>{oe=e.dataset.topoMode??"mesh",y()})}),a.querySelectorAll("[data-topo-jump]").forEach(e=>{e.addEventListener("click",()=>{E=e.dataset.topoJump??null,U=!0,T="binding",j="devices",_="marking",y()})}),a.querySelector("[data-create-conn]")?.addEventListener("submit",e=>{e.preventDefault();const n=new FormData(e.currentTarget),s=String(n.get("cName")??"").trim(),t=String(n.get("cProto")??"bacnet_ip"),w=String(n.get("cEndpoint")??"").trim();if(H.some(d=>d.endpoint===w)){se=`端口冲突警告：局域网端点「${w}」已被其他通道占用，请更换端口后重试。`,y();return}H.unshift({id:`conn-${Date.now().toString(36)}`,projectId:C||ae.projectId,buildingId:B,floorId:A,name:s,protocol:t,endpoint:w,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),xe(),se="",W=`已接入「${s}」（${w}），连通测试通过（18 ms）。`,y()}),a.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{W="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",y()}),a.querySelectorAll("[data-expand-conn]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.expandConn??null;De=De===n?null:n,y()})}),a.querySelectorAll("[data-ping-conn]").forEach(e=>{e.addEventListener("click",()=>{const n=H.find(s=>s.id===e.dataset.pingConn);n&&(se="",n.status==="connected"?W=`连通测试通过：「${n.name}」（${n.endpoint}）响应正常，延迟 18 ms。`:se=`连通测试异常：「${n.name}」（${n.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,y())})}),a.querySelectorAll("[data-copy-endpoint]").forEach(e=>{e.addEventListener("click",async()=>{const n=e.dataset.endpointVal??"",s=e.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(n),qe=s,y(),window.setTimeout(()=>{qe=null,y()},1600)}catch{}})}),a.querySelectorAll("[data-preview-doc]").forEach(e=>{e.addEventListener("click",()=>{const n=[...ya,...c].find(s=>s.id===e.dataset.previewDoc);n&&(W=`已调阅工程附件「${n.name}」（关联范围：${n.boundScope}，更新于 ${n.updatedAt}）。`,y())})}),a.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const e=await r.freezeDeliveryBatch(ae.floorId,"部署总览验收发起交付冻结");W=`已生成交付冻结快照 ${e.versionTag}（核验 ${e.verifiedCount}/${e.deviceCount}）。`,await Se()}catch(e){se=e instanceof Error?e.message:String(e),y()}})}await Se()}const lt=new Set(["lighting","hvac","alarm_rules"]),xa={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Je=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function it(a){const r=new Set;for(const $ of a.actions)$.command.startsWith("lighting")?r.add("照明"):$.command.startsWith("hvac")?r.add("暖通"):r.add("综合");return Array.from(r)}function ct(a,r,$){const Z=$?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${a<r?`<div style="position:absolute; left:${a/24*100}%; width:${(r-a)/24*100}%; top:0; bottom:0; border-radius:999px; background:${Z};"></div>`:`
        <div style="position:absolute; left:${a/24*100}%; width:${(24-a)/24*100}%; top:0; bottom:0; border-radius:999px; background:${Z};"></div>
        <div style="position:absolute; left:0; width:${r/24*100}%; top:0; bottom:0; border-radius:999px; background:${Z};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function dt(a,r,$){let Z=ta(),z=!1,j="",[_,T,D,te]=await Promise.all([r.getSpatialTree(),r.listScenes(ae.floorId),r.getRuntimeSettings(ae.projectId),r.getFloorDevices(ae.floorId).catch(()=>[])]),R="manual",re="balanced",fe="all",K=null,me="",X=!1,ne=!1,U=!1,oe="all",Q=null,le="",ue="",q=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const ce=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],H=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],ve=[{deviceId:te[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],de=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${D.calendar.workdayStart} – ${D.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${D.calendar.nightGuardStart} – 次日 ${D.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],O=r.subscribeFloorEvents(ae.floorId,async B=>{B.type==="control.receipt.updated"&&K?.batchId===B.batchId&&(K=await r.getControlBatch(B.batchId),C())});function C(){const B=me.trim().toLowerCase(),A=B?T.filter(o=>`${o.name} ${o.description}`.toLowerCase().includes(B)):T,ee=D.rules.filter(o=>lt.has(o.category)),we=fe==="all"?ee:fe==="cbm"?[]:ee.filter(o=>o.category===fe),he=fe==="all"||fe==="cbm",v=oe==="issues"?ce.filter(o=>o.status!=="verified"):ce,F=Je.find(o=>o.id===re)??Je[1],G=$.scope.canControlDevices,L=$.scope.canEditScenes,i=$.scope.canEditSettings,b=$.scope.activeOverrides.find(o=>o.module==="settings"&&o.status==="active");a.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${ea({tree:_,session:$,scope:Z,isOpen:z,searchKeyword:j})}
            </div>

            <div class="pacom-header-meta">
              ${R==="rules"?i?b?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${q.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${q.length>0?`人工覆盖中：${q.length} 台 ${J("chevron-down",12)}`:`全部自动托管 ${J("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${U?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${ce.length}）</button>
              ${R==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${L?"":"disabled"}>${X?"收起表单":"+ 新建场景"}</button>`:R==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${R==="manual"}" data-scene-tab="manual">快捷场景（${T.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${R==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${R==="rules"}" data-scene-tab="rules">条件联动（${ee.length+H.length}）</button>
          </nav>
        </header>

        ${ne?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${q.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${J("x",16)}</button>
              </div>
              ${q.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':q.map(o=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${o.name}</div>
                            <div class="pacom-row-sub">${o.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${o.id}" ${G?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${q.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${G?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${U?`
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
                  <button class="pacom-tab" aria-selected="${oe==="all"}" data-log-filter="all">全部（${ce.length}）</button>
                  <button class="pacom-tab" aria-selected="${oe==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${v.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${v.map(o=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${o.device}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${o.source}</span>
                        </div>
                        <span class="pacom-row-sub">${o.action} · ${o.at}</span>
                      </div>
                      <span class="pacom-badge ${o.status==="verified"?"pacom-badge--online":o.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${o.status==="verified"?"回读确认":o.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${le?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${le}</span></div>`:""}
          ${ue?`<div class="pacom-alert-banner">${ue}</div>`:""}

          ${R==="manual"?`
              ${K?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${K.batchId}</span>
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
                            ${K.receipts.map(o=>`
                                <tr>
                                  <td><code style="font-size:12px;">${o.deviceId}</code></td>
                                  <td>${o.command}</td>
                                  <td>${String(o.targetValue)}${o.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${o.errorMessage}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${o.status==="verified_success"?"pacom-badge--online":o.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${o.status}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${X?`
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
                          <span class="pacom-setting-title">联动动作列表（${ve.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${ve.map((o,S)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${S}" aria-label="目标设备">
                                ${te.map(M=>`<option value="${M.id}" ${M.id===o.deviceId?"selected":""}>${M.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${S}" aria-label="执行指令">
                                <option value="lighting.dimming" ${o.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${o.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${o.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${S}" value="${o.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${S}" ${ve.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${me}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${A.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${A.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':A.map(o=>{const S=it(o),M=o.actions.slice(0,3).map(pe=>{const Ie=te.find(Ee=>Ee.id===pe.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??pe.deviceId,ze=pe.command==="lighting.dimming"?`亮度 ${pe.targetValue}%`:pe.command==="hvac.setpoint"?`设温 ${pe.targetValue}°C`:pe.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${Ie} → ${ze}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${o.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${S.map(pe=>`<span class="pacom-badge pacom-badge--accent">${pe}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${o.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${o.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${M}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${o.lastExecutedAt?o.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${o.id}" ${G?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:R==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${F.title}</div>
                    <span class="pacom-kpi-delta">${F.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${F.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${F.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${q.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${Je.map(o=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${re===o.id}" data-oss-mode="${o.id}" ${G?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${o.title}</strong>
                          <span class="pacom-badge ${re===o.id?"pacom-badge--online":"pacom-badge--neutral"}">${re===o.id?"当前生效":o.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${o.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${o.estSaving}</span>
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
                          ${de.map(o=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${o.name}</span>
                                    ${o.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${o.windowLabel}</div>
                                </td>
                                <td>${ct(o.startHour,o.endHour,o.enabled)}</td>
                                <td><span class="pacom-row-sub">${o.scope}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${o.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${o.enabled}"
                                      aria-label="切换排程 ${o.name}"
                                      data-toggle-schedule="${o.id}"
                                      ${G?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(o=>{const S=o==="all"?"全部":xa[o]??o,M=o==="all"?ee.length+H.length:o==="cbm"?H.length:ee.filter(pe=>pe.category===o).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${fe===o}" data-rule-cat="${o}">
                              <span>${S}</span><span class="pacom-count-num">${M}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${we.map(o=>{const S=Q===o.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${xa[o.category]??o.category}</span>
                                  <span>${o.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${o.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${o.summary} · 范围：${o.scopeLabel} · 回执：${o.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${o.id}">${S?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${o.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${o.enabled?"true":"false"}"
                                  aria-label="切换 ${o.name}"
                                  data-toggle-strategy-rule="${o.id}"
                                  data-rule-ver="${o.version}"
                                  data-rule-next="${!o.enabled}"
                                  ${i?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${S?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${o.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":o.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${o.scopeLabel} · 当前版本：v${o.version} · 最近同步：${o.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${he?H.map(o=>{const S=Math.min(100,Math.round(o.runtimeHours/o.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${o.name}</span>
                                      <span class="pacom-badge ${S>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${o.runtimeHours} / ${o.thresholdHours} h（${S}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${S}%; background:${S>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${o.equipment} · 上次重置：${o.lastReset}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${o.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${o.enabled}" data-toggle-cbm="${o.id}" aria-label="切换 ${o.name}" ${i?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,aa(a,{onToggle:()=>{z=!z,C(),z&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:o=>{j=o,C();const S=a.querySelector("[data-global-space-search]");S&&(S.focus(),S.setSelectionRange(o.length,o.length))},onPick:o=>{Z=o,z=!1,C()}}),a.querySelectorAll("[data-scene-tab]").forEach(o=>{o.addEventListener("click",()=>{R=o.dataset.sceneTab??"manual",le="",C()})}),a.querySelectorAll("[data-toggle-overrides]").forEach(o=>{o.addEventListener("click",()=>{ne=!ne,C()})}),a.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{q=[],le="已释放全部人工覆盖设备，自动节能策略已恢复托管。",C()}),a.querySelectorAll("[data-release-one]").forEach(o=>{o.addEventListener("click",()=>{const S=o.dataset.releaseOne;q=q.filter(M=>M.id!==S),le="已恢复该设备的自动策略托管。",C()})}),a.querySelectorAll("[data-toggle-cmdlog]").forEach(o=>{o.addEventListener("click",()=>{U=!U,C()})}),a.querySelectorAll("[data-log-filter]").forEach(o=>{o.addEventListener("click",()=>{oe=o.dataset.logFilter??"all",C()})}),a.querySelector("[data-close-batch]")?.addEventListener("click",()=>{K=null,C()}),a.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),a.querySelectorAll("[data-oss-mode]").forEach(o=>{o.addEventListener("click",()=>{const S=o.dataset.ossMode;if(!S)return;re=S;const M=Je.find(pe=>pe.id===S);le=`已切换至「${M?.title??S}」模式（明日预测启动 ${M?.predictedStart??""}）。`,C()})}),a.querySelectorAll("[data-toggle-schedule]").forEach(o=>{o.addEventListener("click",()=>{const S=o.dataset.toggleSchedule,M=de.find(pe=>pe.id===S);M&&(M.enabled=!M.enabled,le=`排程「${M.name}」已${M.enabled?"恢复启用":"临时暂停"}。`,C())})}),a.querySelectorAll("[data-rule-cat]").forEach(o=>{o.addEventListener("click",()=>{fe=o.dataset.ruleCat??"all",C()})}),a.querySelectorAll("[data-expand-rule]").forEach(o=>{o.addEventListener("click",()=>{const S=o.dataset.expandRule??null;Q=Q===S?null:S,C()})}),a.querySelectorAll("[data-toggle-cbm]").forEach(o=>{o.addEventListener("click",()=>{const S=H.find(M=>M.id===o.dataset.toggleCbm);S&&(S.enabled=!S.enabled,le=`工时维保规则「${S.name}」已${S.enabled?"启用":"停用"}。`,C())})}),a.querySelectorAll("[data-toggle-strategy-rule]").forEach(o=>{o.addEventListener("click",async()=>{ue="";try{await r.toggleRuntimeRule(o.dataset.toggleStrategyRule,o.dataset.ruleNext==="true",Number(o.dataset.ruleVer)),D=await r.getRuntimeSettings(ae.projectId),le="条件联动规则状态与版本回执已更新。",C()}catch(S){ue=S instanceof Error?S.message:String(S),C()}})}),a.querySelectorAll("[data-toggle-create]").forEach(o=>{o.addEventListener("click",()=>{X=!X,C()})}),a.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{ve.push({deviceId:te[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),C()}),a.querySelectorAll("[data-del-draft-action]").forEach(o=>{o.addEventListener("click",()=>{const S=Number(o.dataset.delDraftAction);ve.length>1&&(ve.splice(S,1),C())})}),a.querySelectorAll("[data-draft-dev]").forEach(o=>{o.addEventListener("change",()=>{const S=ve[Number(o.dataset.draftDev)];S&&(S.deviceId=o.value)})}),a.querySelectorAll("[data-draft-cmd]").forEach(o=>{o.addEventListener("change",()=>{const S=ve[Number(o.dataset.draftCmd)];S&&(S.command=o.value)})}),a.querySelectorAll("[data-draft-val]").forEach(o=>{o.addEventListener("change",()=>{const S=ve[Number(o.dataset.draftVal)];S&&(S.targetValue=o.value)})}),a.querySelector("[data-scene-search]")?.addEventListener("input",o=>{const S=o.currentTarget,M=S.selectionStart??S.value.length;me=S.value,C();const pe=a.querySelector("[data-scene-search]");pe&&(pe.focus(),pe.setSelectionRange(M,M))}),a.querySelectorAll("[data-exec-scene]").forEach(o=>{o.addEventListener("click",async()=>{ue="";const S=T.find(M=>M.id===o.dataset.execScene);try{K=await r.executeScene(o.dataset.execScene),T=await r.listScenes(ae.floorId),ce.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:S?.name??"E7F 场景",action:`${K.receipts.length} 台设备联动下发`,status:"verified"}),C()}catch(M){ue=M instanceof Error?M.message:String(M),C()}})}),a.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async o=>{o.preventDefault();const S=new FormData(o.currentTarget);try{await r.createScene({projectId:ae.projectId,floorId:ae.floorId,name:String(S.get("name")??""),description:String(S.get("description")??""),actions:ve.map(M=>({deviceId:M.deviceId,command:M.command,targetValue:M.targetValue==="true"?!0:M.targetValue==="false"?!1:Number(M.targetValue)||50}))}),T=await r.listScenes(ae.floorId),X=!1,le=`快捷场景已保存（共绑定 ${ve.length} 条联动动作）。`,C()}catch(M){ue=M instanceof Error?M.message:String(M),C()}})}C(),window.addEventListener("hashchange",()=>O(),{once:!0})}const Sa={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function ra(a,r){return a.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':a.map($=>`
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
            ${r?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function rt(a,r,$){let Z="calendar",z=ta(),j=!1,_="";const[T,D]=await Promise.all([r.getSpatialTree(),r.getRuntimeSettings(ae.projectId)]);let te=D,R=te.calendar.workdayStart,re=te.calendar.workdayEnd,fe=te.calendar.nightGuardStart,K=te.calendar.nightGuardEnd,me=!0,X=[];const ne=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let U="flat";const oe={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},Q={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},le={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},ue={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},q=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let ce="",H="";function ve(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(C=>{const B=Sa[C];return`
                <button type="button" class="pacom-unified-item" aria-current="${Z===C}" data-stab="${C}">
                  ${J(B.icon,16)}
                  <span>${B.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function de(){const O=$.scope.canEditSettings,C=$.scope.activeOverrides.find(v=>v.module==="settings"&&v.status==="active"),B=T.projects[0]?.name??"当前项目",A=te.rules.filter(v=>v.category==="weather_area"),ee=te.rules.filter(v=>v.category==="metering_carbon"),we=te.rules.filter(v=>v.category==="templates"),he=Sa[Z];a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${ea({tree:T,session:$,scope:z,maxGranularity:"project",isOpen:j,searchKeyword:_})}
            </div>
            <div class="pacom-header-meta">
              ${O?C?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${ve()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${he.label}</h2>
                <p class="pacom-unified-subtitle">${he.subtitle}</p>
              </div>
              ${C?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 · ${C.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${C.approvedBy} · 到期自动收回：${C.expiresAt.slice(0,16).replace("T"," ")} · 事由：${C.reason}</span>
                      </div>
                    </div>`:""}
              ${ce?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${ce}</span></div>`:""}
              ${H?`<div class="pacom-alert-banner">${H}</div>`:""}

              ${Z==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${te.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${R}" aria-label="工作日上班时间" ${O?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${re}" aria-label="工作日下班时间" ${O?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${fe}" aria-label="夜间值守开始" ${O?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${K}" aria-label="夜间值守结束" ${O?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${me?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${me}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${O?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${O?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${ne.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${ne.map(v=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${v.date}</span><span class="pacom-badge pacom-badge--accent">${v.mode}</span></span>
                              <span class="pacom-setting-desc">${v.label}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${v.id}" ${O?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${O?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${O?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${O?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${O?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${X.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${X.length} 条</span>
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
                                ${X.map(v=>`
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
                      </section>`:""}`:Z==="energy_weather"?`
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
                            <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${O?"":"disabled"}>
                              <option value="guanzhou_station" ${oe.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${oe.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${B}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${oe.billingArea}" aria-label="计费面积" ${O?"":"disabled"} />
                          </div>
                        </div>
                        ${ra(A,O)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${U==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${U==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${U==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${oe.tariffYuan}" aria-label="综合电价" ${O?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${oe.tariffPeak}" ${O?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${oe.tariffFlat}" ${O?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${oe.tariffValley}" ${O?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${O?"":"disabled"}>
                              <option value="0.5271" ${oe.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${oe.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${ra(ee,O)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${O?"":"disabled"}>保存口径参数</button>
                        </div>
                      </div>
                    </section>`:Z==="guardrails"?`
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
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${Q.minTemp}" aria-label="最低设定温度" ${O?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${Q.maxTemp}" aria-label="最高设定温度" ${O?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${O?"":"disabled"}>
                                <option value="2h" ${Q.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${Q.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${Q.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${Q.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${Q.readbackTimeoutSec}" aria-label="回读超时阈值" ${O?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${O?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${ra(we,O)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${ue.dailyDigestTime}" aria-label="每日简报发送时间" ${O?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ue.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${O?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ue.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${O?"":"disabled"}>
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
                              <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${le.delayMin}" ${O?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${le.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${O?"":"disabled"}>
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
                              <select class="pacom-select" data-auto-wo="defaultGroup" aria-label="默认处理组" ${O?"":"disabled"}>
                                <option value="暖通运维组" ${le.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${le.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${le.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${le.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${O?"":"disabled"}>
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
                                ${q.map(v=>`
                                    <tr>
                                      <td><strong>${v.groupName}</strong></td>
                                      <td>${v.scope}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${v.severity}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${v.channels}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${v.enabled}" data-toggle-nr="${v.id}" aria-label="切换 ${v.groupName} 通知规则" ${O?"":"disabled"}>
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
    `,aa(a,{onToggle:()=>{j=!j,de(),j&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:v=>{_=v,de();const F=a.querySelector("[data-global-space-search]");F&&(F.focus(),F.setSelectionRange(v.length,v.length))},onPick:v=>{z=v,j=!1,de()}}),a.querySelectorAll("[data-stab]").forEach(v=>{v.addEventListener("click",()=>{Z=v.dataset.stab??"calendar",ce="",H="",de()})}),a.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{me=!me,ce=`法定节假日自动跳过已${me?"开启":"关闭"}。`,de()}),a.querySelector("[data-night-start]")?.addEventListener("change",v=>{fe=v.currentTarget.value}),a.querySelector("[data-night-end]")?.addEventListener("change",v=>{K=v.currentTarget.value}),a.querySelector("[data-add-sd-form]")?.addEventListener("submit",v=>{v.preventDefault();const F=new FormData(v.currentTarget);ne.push({id:`sd-${Date.now()}`,date:String(F.get("date")??""),label:String(F.get("label")??""),mode:String(F.get("mode")??"保持工作日工况")}),ce="已添加特殊例外日期，当日自动覆盖默认节假日排程。",de()}),a.querySelectorAll("[data-del-sd]").forEach(v=>{v.addEventListener("click",()=>{const F=ne.findIndex(G=>G.id===v.dataset.delSd);F>=0&&ne.splice(F,1),de()})}),a.querySelectorAll("[data-tariff-mode]").forEach(v=>{v.addEventListener("click",()=>{U=v.dataset.tariffMode??"flat",de()})}),a.querySelectorAll("[data-energy-field]").forEach(v=>{v.addEventListener("change",()=>{const F=v.dataset.energyField;F&&(oe[F]=v.value)})}),a.querySelector("[data-save-energy]")?.addEventListener("click",()=>{ce=U==="flat"?`能耗计费与气象口径已保存（面积 ${oe.billingArea} m² · 综合电价 ¥${oe.tariffYuan}/kWh · 因子 ${oe.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${oe.tariffPeak} / 平 ¥${oe.tariffFlat} / 谷 ¥${oe.tariffValley}）。`,de()}),a.querySelectorAll("[data-guard-field]").forEach(v=>{v.addEventListener("change",()=>{const F=v.dataset.guardField;F&&(Q[F]=v.value)})}),a.querySelector("[data-save-guard]")?.addEventListener("click",()=>{ce=`控制保护参数已保存（温区 ${Q.minTemp}–${Q.maxTemp}°C · 超时 ${Q.readbackTimeoutSec}s）。`,de()}),a.querySelectorAll("[data-auto-wo]").forEach(v=>{v.addEventListener("change",()=>{const F=v.dataset.autoWo;F&&(le[F]=v.value),ce="超时自动派单配置已更新。",de()})}),a.querySelectorAll("[data-toggle-autowo]").forEach(v=>{v.addEventListener("click",()=>{const F=v.dataset.toggleAutowo;F&&(le[F]=!le[F],ce="自动派单保护策略已更新。",de())})}),a.querySelector("[data-digest-time]")?.addEventListener("change",v=>{ue.dailyDigestTime=v.currentTarget.value,ce=`每日晨间简报发送时刻已更新为 ${ue.dailyDigestTime}。`,de()}),a.querySelectorAll("[data-notify-key]").forEach(v=>{v.addEventListener("click",()=>{const F=v.dataset.notifyKey;F&&(ue[F]=!ue[F],ce="消息通知偏好已更新。",de())})}),a.querySelectorAll("[data-toggle-nr]").forEach(v=>{v.addEventListener("click",()=>{const F=q.find(G=>G.id===v.dataset.toggleNr);F&&(F.enabled=!F.enabled,ce=`工作组「${F.groupName}」的分流推送规则已${F.enabled?"启用":"停用"}。`,de())})}),a.querySelector("[data-cal-start]")?.addEventListener("change",v=>{R=v.currentTarget.value}),a.querySelector("[data-cal-end]")?.addEventListener("change",v=>{re=v.currentTarget.value}),a.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{H="",X=await r.previewCalendarImpact(ae.projectId,R,re),de()}),a.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{H="";try{const v=await r.saveWorkCalendar(ae.projectId,R,re,te.calendar.version);te={...te,calendar:{...v,nightGuardStart:fe,nightGuardEnd:K}},ce=`工作时间配置已保存至 v${v.version}（工作日 ${v.workdayStart}–${v.workdayEnd} · 夜间值守 ${fe}–${K}）`,X=[],de()}catch(v){H=v instanceof Error?v.message:String(v),de()}}),a.querySelectorAll("[data-toggle-rule]").forEach(v=>{v.addEventListener("click",async()=>{H="";try{await r.toggleRuntimeRule(v.dataset.toggleRule,v.dataset.ruleNext==="true",Number(v.dataset.ruleVer)),te=await r.getRuntimeSettings(ae.projectId),ce="策略状态与版本回执已更新。",de()}catch(F){H=F instanceof Error?F.message:String(F),de()}})})}de()}const ka="pacom.web.sidebar.collapsed",pt=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Ea=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],ma={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},La=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function pa(){const a=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return a in ma?a:"home"}function je(a){return a.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const Qe=new WeakMap;async function mt(a,r,$,Z){Qe.get(a)?.(),a.classList.remove("bare-login");let z=$,j=pa(),_=localStorage.getItem(ka)==="1",T=!1,D=!1,te=!1,R=await r.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],re=r.getActiveOrganizationId?.()??R[0]?.id??"org-gzlab",fe="",K=!1,me=0,X={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function ne(i){return z.scope.visibleModules.includes(i)}ne(j)||(j="home",window.location.hash="#home");function U(){return R.find(i=>i.id===re)??R[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function oe(i){if(i.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const b=i.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${je(b)}</span>`}async function Q(){r.listOrganizations&&(R=await r.listOrganizations(),re=r.getActiveOrganizationId?.()??R[0]?.id??"org-gzlab")}async function le(){try{await Q();const[i,b,x,o,S]=await Promise.all([r.getSpatialTree(),r.getFloorDevices(ae.floorId).catch(()=>[]),r.listAlarms(ae.floorId).catch(()=>[]),r.listWorkOrders(ae.floorId).catch(()=>[]),r.listScenes(ae.floorId).catch(()=>[])]);X={devices:b,zones:i.zones,alarms:x,workOrders:o,scenes:S},me=x.filter(M=>M.status==="active").length,C()}catch{}}function ue(){const i=Ea.filter(x=>ne(x.id));let b=!1;return i.map(x=>`
        ${(x.id==="settings"||x.id==="deployment")&&!b?(b=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${x.id}" aria-current="${j===x.id?"page":"false"}" title="${x.label}">
          ${J(x.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${x.label}</span>
          ${x.id==="alarms"&&me>0?`<span class="pacom-nav-count" title="待处理告警 ${me} 条">${me}</span>`:""}
        </button>`).join("")}function q(){const i=fe.trim().toLowerCase(),b=Ea.filter(c=>ne(c.id)),x=i?b.filter(c=>c.label.toLowerCase().includes(i)).slice(0,4):b,o=i?X.devices.filter(c=>`${c.name} ${c.id} ${c.category}`.toLowerCase().includes(i)).slice(0,5):X.devices.slice(0,3),S=i?X.zones.filter(c=>c.name.toLowerCase().includes(i)).slice(0,3):[],M=ne("alarms")?i?X.alarms.filter(c=>`${c.title} ${c.message} ${c.id}`.toLowerCase().includes(i)).slice(0,4):X.alarms.filter(c=>c.status==="active").slice(0,2):[],pe=ne("alarms")?i?X.workOrders.filter(c=>`${c.title} ${c.id}`.toLowerCase().includes(i)).slice(0,3):[]:[],Ie=ne("scenes")?i?X.scenes.filter(c=>`${c.name} ${c.description}`.toLowerCase().includes(i)).slice(0,3):[]:[],ze=ne("deployment")?i?La.filter(c=>`${c.title} ${c.category}`.toLowerCase().includes(i)).slice(0,4):La.slice(0,2):[],Ee=[];return o.length&&Ee.push(`<div class="pacom-search-group">${i?"设备（空间总览）":"常用设备直达"}</div>`+o.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(c.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${je(c.name)}</span><span class="pacom-badge ${c.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${c.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),S.length&&Ee.push('<div class="pacom-search-group">功能区</div>'+S.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(c.id)}"><span>${je(c.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),M.length&&Ee.push(`<div class="pacom-search-group">${i?"告警":"待处理告警"}</div>`+M.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(c.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${je(c.title)}</span><span class="pacom-badge pacom-badge--warning">${c.status==="active"?"待处理":"已确认"}</span></button>`).join("")),pe.length&&Ee.push('<div class="pacom-search-group">运维工单</div>'+pe.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(c.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${je(c.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),Ie.length&&Ee.push('<div class="pacom-search-group">智能策略</div>'+Ie.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${je(c.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),ze.length&&Ee.push('<div class="pacom-search-group">图纸与工程文档</div>'+ze.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="${c.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${je(c.title)}</span><span class="pacom-badge pacom-badge--neutral">${je(c.category)}</span></button>`).join("")),x.length&&Ee.push('<div class="pacom-search-group">工作区</div>'+x.map(c=>`<button type="button" class="pacom-search-hit" data-search-hash="#${c.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${J(c.icon,14)}${je(c.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),Ee.length?Ee.join(""):`<div class="pacom-nav-empty">未找到与「${je(fe)}」匹配的设备、区域、告警、工单或图纸</div>`}function ce(i){i.querySelectorAll("[data-search-hash]").forEach(b=>{b.addEventListener("click",()=>{const x=b.dataset.searchHash||"#home";K=!1,fe="",H(),T=!1,window.location.hash===x?(j=pa(),he(!0)):window.location.hash=x})})}function H(){if(a.querySelector('[data-role="cmd-scrim"]')?.remove(),!K)return;const i=document.createElement("div");i.className="pacom-cmd-scrim",i.dataset.role="cmd-scrim",i.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${J("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${je(fe)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${q()}
        </div>
      </div>
    `,a.appendChild(i),i.addEventListener("click",o=>{o.target===i&&(K=!1,H())});const b=i.querySelector('[data-role="cmd-input"]'),x=i.querySelector('[data-role="cmd-body"]');x&&ce(x),b?.focus(),b?.addEventListener("input",o=>{fe=o.currentTarget.value,x&&(x.innerHTML=q(),ce(x))})}function ve(){if(!D)return"";const i=z.displayName.slice(0,1)||"U",b=!!(r.createOrganization&&z.role==="org_admin");return`
      <div class="pacom-org-popover ${_?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${R.map(x=>{const o=x.id===re;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${o}" data-pop-org="${je(x.id)}">
                ${oe(x)}
                <span class="pacom-pop-text">
                  <b>${je(x.name)}</b>
                  <small>${x.projectCount>0?`${x.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${o?J("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${b?te?`
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
            <b>${je(z.displayName)}</b>
            <small>${je(z.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${J("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function de(i){switch(ne(j)||(j="home",window.location.hash="#home"),document.title=`${ma[j]} · PACOM Station`,j){case"home":await Va(i,r,z);return;case"analysis":await Ha(i,r,z);return;case"alarms":await Qa(i,r,z);return;case"scenes":await dt(i,r,z);return;case"settings":await rt(i,r,z);return;case"deployment":await ot(i,r,z);return;case"account":await Ga(i,r,z,b=>{z=b,C(),B()},O);return}}async function O(){D=!1,T=!1,K=!1,L();try{await r.logout()}finally{window.location.hash="#login",Z()}}function C(){const i=a.querySelector('[data-role="nav-list"]');i&&(i.innerHTML=ue(),A())}function B(){a.querySelector('[data-role="org-popover"]')?.remove();const i=a.querySelector('[data-role="org-menu-btn"]');if(i&&i.setAttribute("aria-expanded",String(D)),!D)return;const b=document.createElement("div");b.innerHTML=ve().trim();const x=b.firstElementChild;x&&(a.appendChild(x),we())}function A(){a.querySelectorAll("[data-route]").forEach(i=>{i.addEventListener("click",()=>{const b=i.dataset.route;b===j&&!T||(j=b,T=!1,D=!1,window.location.hash=`#${j}`,he(!0))})})}async function ee(i){if(!r.switchOrganization)return;await r.switchOrganization(i),await Q();const b=await r.getSpatialTree(),x=b.projects[0],o=x?b.buildings.find(M=>M.projectId===x.id):void 0,S=o?b.floors.find(M=>M.buildingId===o.id&&M.id===ae.floorId)??b.floors.find(M=>M.buildingId===o.id):void 0;x&&o&&S?Ue({level:"floor",projectId:x.id,buildingId:o.id,floorId:S.id}):x&&o?Ue({level:"building",projectId:x.id,buildingId:o.id}):x?Ue({level:"project",projectId:x.id}):Ue({level:"all-projects"}),D=!1,te=!1,T=!1,await he(!0),le()}function we(){a.querySelectorAll("[data-pop-org]").forEach(i=>{i.addEventListener("click",()=>{const b=i.dataset.popOrg;if(b){if(b===re){D=!1,B();return}ee(b)}})}),a.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",i=>{i.stopPropagation(),te=!te,B(),te&&a.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),a.querySelector("[data-create-org-form]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!r.createOrganization)return;const b=new FormData(i.currentTarget),x=String(b.get("orgName")??"").trim();if(!x)return;const o=await r.createOrganization(x);await ee(o.id)}),a.querySelectorAll('[data-pop-act="go-account"]').forEach(i=>{i.addEventListener("click",()=>{D=!1,te=!1,T=!1,j="account",window.location.hash="#account",he(!0)})}),a.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{O()})}async function he(i){const b=a.querySelector('[data-role="main-stage"]');if(!i&&b){const o=a.querySelector(".pacom-nav-rail");o&&(o.classList.toggle("is-collapsed",_),o.classList.toggle("is-mobile-open",T));const S=a.querySelector('[data-role="mobile-scrim"]');S&&S.classList.toggle("is-open",T),B();return}a.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${J("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${ma[j]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${je(z.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${T?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${_?"is-collapsed":""} ${T?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${pt}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${_?"展开侧栏":"收起侧栏"}" aria-label="${_?"展开侧栏":"收起侧栏"}">
              ${J("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${J("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${ue()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${j==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${D}" title="${je(U().name)} · ${je(z.displayName)}">
              ${oe(U())}
              <span class="pacom-org-name">${je(U().name)}</span>
              ${J("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,a.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{_=!_,D=!1,localStorage.setItem(ka,_?"1":"0");const o=a.querySelector(".pacom-nav-rail"),S=a.querySelector('[data-role="toggle-sidebar"]');o&&o.classList.toggle("is-collapsed",_),S&&(S.title=_?"展开侧栏":"收起侧栏",S.setAttribute("aria-label",S.title),S.innerHTML=J("panel-left",16)),B()}),a.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{D=!1,B(),K=!0,H()}),a.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{T=!T,he(!1)}),a.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{T=!1,D=!1,he(!1)}),a.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",o=>{o.stopPropagation(),D=!D,B()}),A(),B(),H();const x=a.querySelector('[data-role="main-stage"]');x&&await de(x)}const v=i=>{const b=i.target;D&&!b?.closest('[data-role="org-popover"]')&&!b?.closest('[data-role="org-menu-btn"]')&&(D=!1,B())},F=i=>{if((i.metaKey||i.ctrlKey)&&i.key.toLowerCase()==="k"){i.preventDefault(),D=!1,B(),K=!K,H();return}i.key==="Escape"&&(K?(K=!1,H()):D?(D=!1,B()):T&&(T=!1,he(!1)))},G=()=>{j=pa(),D=!1,T=!1,K=!1,he(!0),le()};function L(){document.removeEventListener("click",v),document.removeEventListener("keydown",F),window.removeEventListener("hashchange",G),Qe.get(a)===L&&Qe.delete(a)}Qe.set(a,L),document.addEventListener("click",v),document.addEventListener("keydown",F),window.addEventListener("hashchange",G),await he(!0),le()}const ut=["org_admin","project_admin","operator","space_user"];async function bt(a){const r=new Za;let $=await r.getSession(),Z=!1;document.querySelector("[data-demo-fab-root]")?.remove();const z=document.createElement("div");z.className="pacom-demo-fab-wrap",z.dataset.demoFabRoot="1",document.body.appendChild(z);function j(){const T=$?He[$.role]:"未登录";z.innerHTML=`
      ${Z?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">独立演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">点击切换 4 级标准角色体验权限裁剪与限时提权</span>
            <div class="pacom-demo-fab-roles">
              ${ut.map(D=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${$?.role===D}" data-demo-pick="${D}">
                    <span>${He[D]}</span>
                    ${$?.role===D?J("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <a class="pacom-demo-link" href="./index.html">
                <span>前往真实联调入口（index.html）</span>
                <span>→</span>
              </a>
            </div>
          </div>`:""}
      <button type="button" class="pacom-demo-fab-pill" aria-expanded="${Z}" data-demo-fab-toggle="1" title="切换演示角色">
        <span class="pacom-demo-fab-dot" aria-hidden="true"></span>
        <span>演示</span>
        <span class="pacom-demo-fab-role">${T}</span>
        ${J(Z?"chevron-down":"chevrons-up-down",12)}
      </button>
    `,z.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",D=>{D.stopPropagation(),Z=!Z,j()}),z.querySelectorAll("[data-demo-pick]").forEach(D=>{D.addEventListener("click",async()=>{const te=D.dataset.demoPick;te&&(Z=!1,$=await r.switchDemoRole(te),await _($))})})}document.addEventListener("click",T=>{Z&&(T.target?.closest("[data-demo-fab-root]")||(Z=!1,j()))}),document.addEventListener("keydown",T=>{T.key==="Escape"&&Z&&(Z=!1,j())});async function _(T){$=T,j(),(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await mt(a,r,T,()=>{$=null,j(),fa(a,r,D=>{_(D)})})}if(j(),!$||window.location.hash==="#login"){if(!$){$=await r.switchDemoRole("org_admin"),await _($);return}fa(a,r,T=>{_(T)});return}await _($)}async function gt(){const a=document.getElementById("app");if(a)try{await bt(a)}catch(r){a.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(r)}</div></div>`}}gt();
//# sourceMappingURL=demo-C6O5Pe8Q.js.map
