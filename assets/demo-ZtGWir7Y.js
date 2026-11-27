import{E as S,r as Ae,a as Wa,e as d,b as Ga,g as Za,s as ga,m as Vt,c as Ht,d as Dt,P as Ft,I as Ua,A as na,f as zt,n as Ve,h as Rt,i as Wt,j as ia,t as Mt,k as Nt,v as Va,l as oa,o as la,p as dt,q as sa,u as Pt,C as Ha,w as ka,x as pt,y as mt,z as Gt,B as at,D as vt,L as gt,F as Ta,G as ea,H as ft,J as Oa,K as bt,M as ht,O as Zt,N as Kt}from"./auth-shared-XSqkFQJB.js";import{R as Ke,g as $a,a as yt}from"./contracts-Z0w12vLk.js";function Jt(){const t="2026-11-25T09:00:00Z",e=[];for(let m=1;m<=22;m+=1){const y=m===7?S.floorId:m===8?S.lockedFloor8Id:m===6?S.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${m}`,T=String(m).padStart(2,"0");e.push({id:y,buildingId:S.buildingId,kind:"above",level:m,name:`${m}F`,areaSqm:m===7?1383.1:m===1?2680:m<=4?1920:1480,plan:{floorId:y,imageUrl:`./media/floors/e/${T}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const s="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";e.push({id:s,buildingId:S.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:s,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}});const c=[];for(let m=1;m<=12;m+=1){const y=`structure-f-above-${m}`,T=String(m).padStart(2,"0");c.push({id:y,buildingId:S.buildingFId,kind:"above",level:m,name:`${m}F`,areaSqm:m===1?2450:m<=3?2100:1580,plan:{floorId:y,imageUrl:`./media/floors/f/${T}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const r="structure-f-roof-1";return c.push({id:r,buildingId:S.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:r,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}}),{projects:[{id:S.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"},{id:S.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:S.buildingId,projectId:S.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:S.buildingFId,projectId:S.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...e,...c],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:S.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:S.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:S.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:S.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:s,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:r,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Bt=Jt(),$t=Bt.floors.map(t=>t.id),Je={org_admin:{userId:"demo-org-admin",displayName:"林致远",email:"lin.zhiyuan@pacom.cn",phone:"13800138001",role:"org_admin",roleLabel:Ke.org_admin,authMode:"demo",scope:{allowedProjectIds:[S.projectId,S.project1Id],allowedBuildingIds:[S.buildingId,S.buildingFId],allowedFloorIds:[...$t],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",email:"chen.mingxuan@pacom.cn",phone:"13800138002",role:"project_admin",roleLabel:Ke.project_admin,authMode:"demo",scope:{allowedProjectIds:[S.projectId],allowedBuildingIds:[S.buildingId,S.buildingFId],allowedFloorIds:[...$t],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",email:"zhou.ning@pacom.cn",phone:"13800138003",role:"operator",roleLabel:Ke.operator,authMode:"demo",scope:{allowedProjectIds:[S.projectId],allowedBuildingIds:[S.buildingId],allowedFloorIds:[S.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",email:"shen.jia@pacom.cn",phone:"13800138004",role:"space_user",roleLabel:Ke.space_user,authMode:"demo",scope:{allowedProjectIds:[S.projectId],allowedBuildingIds:[S.buildingId],allowedFloorIds:[S.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},ha="pacom.web.demo.role",wt="pacom.web.demo.spatial.v5",St="pacom.web.demo.orgs.v1",xt="pacom.web.demo.activeOrg.v1",Ye="org-gzlab";class Yt{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;inviteMissTimestamps=[];inviteLockedUntil=0;sentCodeTargets=new Set;joinReceipts=new Map;joinWithdrawTokens=new Map;joinAccountByRequestId=new Map;pendingApprovalAccounts=new Set;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;constructor(){this.orgs=this.loadOrgs();const e=typeof localStorage<"u"?localStorage.getItem(xt):null,s=this.orgs.find(m=>m.id===e)??this.orgs[0];this.activeOrgId=s.id,this.spatial=s.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const c=typeof sessionStorage<"u"?sessionStorage.getItem(ha):null;c&&Je[c]&&(this.activeSession=structuredClone(Je[c]),this.applyOverridesToSession());const r=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:S.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:r,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:r,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:r,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:r,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:S.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:r,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:r,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:r,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:r,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:S.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:r,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:r,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:r,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:r,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:S.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:r,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:r,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:r,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:r,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:r,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:r,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:S.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:r,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:S.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:r,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:r,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:r,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:r,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:r,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:r},{id:"conn-e7f-dali",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:r},{id:"conn-e7f-modbus",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:S.projectId,floorId:S.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:S.projectId,floorId:S.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:S.projectId,floorId:S.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:S.projectId,floorId:S.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:S.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:S.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:r,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:S.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:r,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:S.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:r,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:S.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:r,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:S.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:r,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:S.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:r,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(Je).map((m,y)=>({userId:m.userId,displayName:m.displayName,email:`${m.role.replaceAll("_",".")}@gzlab.ac.cn`,role:m.role,roleLabel:m.roleLabel,scopeSummary:m.scope.allowedZoneIds?.length?`E栋 7F（${m.scope.allowedZoneIds.length} 个授权功能区）`:`${m.scope.allowedProjectIds.length} 项目 / ${m.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:y===0?r:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const e=Date.now();for(const s of this.overrides)s.status==="active"&&new Date(s.expiresAt).getTime()<=e&&(s.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const e=Je[this.activeSession.role].scope,s=this.overrides.filter(c=>c.targetUserId===this.activeSession.userId&&c.status==="active");this.activeSession.scope.activeOverrides=structuredClone(s),this.activeSession.scope.canEditDeployment=e.canEditDeployment||s.some(c=>c.module==="deployment"),this.activeSession.scope.canEditSettings=e.canEditSettings||s.some(c=>c.module==="settings")}record(e,s,c,r,m){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:s,endpoint:c,request:m,response:r}),this.traces.length>40&&this.traces.pop()}pushAudit(e,s,c,r){const m=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:m?.displayName??"anonymous",role:m?.role??"space_user",action:e,target:s,result:c,detail:r})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){const s=e.method??"password",c=e.account.trim(),r=this.normalizeContactKey(c);if(!c)throw new Error("400 BAD_REQUEST: 请输入电子邮箱或手机号码");if(s==="sms"){const j=(e.smsCode??e.password??"").trim();if(!/^\d{6}$/.test(j))throw new Error("验证码不正确或已过期");const M=`login:${r}`;if(!this.sentCodeTargets.has(M))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete(M)}else if(!(e.password??"").trim())throw new Error("400 BAD_REQUEST: 请输入账户和密码");if(this.pendingApprovalAccounts.has(r))throw new Error("你的加入申请正在等待机构管理员审批，批准后即可登录。");const m=Object.values(Je).find(j=>{const M=!!j.email&&this.normalizeContactKey(j.email)===r,W=!!j.phone&&this.normalizeContactKey(j.phone)===r;return M||W}),y=c.toLowerCase(),T=m?m.role:y.includes("org")||y.includes("admin")?"org_admin":y.includes("proj")?"project_admin":y.includes("space")||y.includes("member")?"space_user":"operator";return this.activeSession=structuredClone(Je[T]),this.applyOverridesToSession(),sessionStorage.setItem(ha,T),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{method:s,account:c,rememberMe:!!e.rememberMe}),this.pushAudit("auth.login",this.activeSession.userId,"success",s==="sms"?"短信验证码登录":"密码登录"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(ha),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}maskTarget(e){const s=e.trim();if(s.includes("@")){const[r,m]=s.split("@");return r&&m?`${r[0]}•••@${m}`:"••••"}const c=s.replace(/\D/g,"");return c.length===11?`${c.slice(0,3)} •••• ${c.slice(7)}`:c.length>=6?`${c.slice(0,3)} •••• ${c.slice(-4)}`:"••••"}async sendVerificationCode(e){const s=e.target.trim(),c=s.includes("@")?"email":"sms";this.sentCodeTargets.add(`${e.purpose}:${this.normalizeContactKey(s)}`);const r={maskedTarget:this.maskTarget(s),channel:c,cooldownSeconds:60};return this.record("REST","sendVerificationCode","POST /api/v1/auth/verification-codes",r,{purpose:e.purpose,channel:c}),r}async confirmPasswordReset(e){const s=e.account.trim(),c=this.normalizeContactKey(s);if(!s)throw new Error("请输入电子邮箱或手机号码");if(!/^\d{6}$/.test(e.verificationCode.trim()))throw new Error("验证码不正确或已过期");const r=`reset:${c}`;if(!this.sentCodeTargets.has(r))throw new Error("请先获取验证码");if(!e.newPassword||e.newPassword.length<8)throw new Error("密码至少需要 8 个字符");this.sentCodeTargets.delete(r),this.record("REST","confirmPasswordReset","POST /api/v1/auth/password-reset/confirm",{ok:!0},{account:this.maskTarget(s)}),this.pushAudit("auth.password_reset",this.maskTarget(s),"success")}async resolveInviteCode(e){const s=Date.now();if(this.inviteLockedUntil>s)return{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const c=e.replace(/\D/g,""),m={482916305:this.orgs[0]?.name??"广州国家实验室",618204917:"天环智慧园区"}[c];if(!m){if(this.inviteMissTimestamps=this.inviteMissTimestamps.filter(j=>s-j<36e5),this.inviteMissTimestamps.push(s),this.inviteMissTimestamps.length>=10)return this.inviteLockedUntil=s+36e5,this.inviteMissTimestamps=[],{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const T={valid:!1,message:"邀请码不正确或已失效，请向机构管理员确认。"};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",T,{code:c}),T}const y={valid:!0,organizationName:m};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",y,{code:c}),y}async registerAndJoin(e){const s=await this.resolveInviteCode(e.inviteCode);if(!s.valid||!s.organizationName)throw new Error(s.message??"邀请码不正确或已失效，请向机构管理员确认。");if(!/^\d{6}$/.test(e.verificationCode.trim()))throw new Error("验证码不正确或已过期");const c=this.normalizeContactKey(e.account),r=`register_join:${c}`;if(!this.sentCodeTargets.has(r))throw new Error("请先获取验证码");const m=e.account.includes("@")?"email":"phone";if(this.isContactOccupied(m,e.account))throw new Error("该账户已注册，请直接登录或联系机构管理员发送定向邀请。");if(this.pendingApprovalAccounts.has(c))throw new Error("该账户已提交加入申请，正在等待机构管理员审批。");this.sentCodeTargets.delete(r);const y=`JR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,T=`wt-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`,j={requestId:y,organizationName:s.organizationName,maskedAccount:this.maskTarget(e.account),status:"pending_approval",submittedAt:new Date().toISOString(),withdrawToken:T};return this.joinReceipts.set(y,j),this.joinWithdrawTokens.set(y,T),this.joinAccountByRequestId.set(y,c),this.pendingApprovalAccounts.add(c),this.record("REST","registerAndJoin","POST /api/v1/auth/register-join",j,{organizationName:s.organizationName,displayName:e.displayName}),j}async withdrawJoinApplication(e,s){const c=this.joinWithdrawTokens.get(e);if(c&&s!==c)throw new Error("撤回凭证无效或已失效，请刷新后重试。");this.joinReceipts.delete(e),this.joinWithdrawTokens.delete(e);const r=this.joinAccountByRequestId.get(e);r&&(this.pendingApprovalAccounts.delete(r),this.joinAccountByRequestId.delete(e)),this.record("REST","withdrawJoinApplication",`DELETE /api/v1/org/join-requests/${e}`,{ok:!0})}async submitOrgApplication(e){if(!/^\d{6}$/.test(e.smsCode.trim()))throw new Error("验证码不正确或已过期");const s=`org_apply:${this.normalizeContactKey(e.phone)}`;if(!this.sentCodeTargets.has(s))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete(s);const c=e.province===e.city?e.province:`${e.province} ${e.city}`,r={applicationId:`APP-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:e.organizationName.trim(),region:c,maskedEmail:this.maskTarget(e.email),status:"pending_review",submittedAt:new Date().toISOString()};return this.record("REST","submitOrgApplication","POST /api/v1/org/applications",r,{organizationName:r.organizationName,region:c}),r}async getInvitationPreview(e){const s=e.trim(),c=this.orgs[0]?.name??"广州国家实验室",r=new Date(Date.now()+7*864e5).toISOString().slice(0,10);return s==="expired"?{token:s,kind:"member",organizationName:c,inviterName:"林致远",role:"operator",roleLabel:Ke.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:"2026-11-20",status:"expired"}:s.startsWith("owner")?{token:s,kind:"owner",organizationName:"广州天环智能科技有限公司",role:"org_admin",roleLabel:Ke.org_admin,targetChannel:"email",targetValue:"chen@company.com",prefillName:"陈志远",accountExists:!1,requiredSecondaryChannel:null,verifiedSecondaryMasked:"139 •••• 9000",expiresAt:r,status:"pending"}:s==="admin-email"?{token:s,kind:"member",organizationName:c,inviterName:"林致远",role:"org_admin",roleLabel:Ke.org_admin,targetChannel:"email",targetValue:"zhao.admin@pacom.cn",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:$a("member","org_admin","email"),expiresAt:r,status:"pending"}:s==="admin-phone"?{token:s,kind:"member",organizationName:c,inviterName:"林致远",role:"org_admin",roleLabel:Ke.org_admin,targetChannel:"phone",targetValue:"13900139088",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:$a("member","org_admin","phone"),expiresAt:r,status:"pending"}:s==="project-admin-email"?{token:s,kind:"member",organizationName:c,inviterName:"林致远",role:"project_admin",roleLabel:Ke.project_admin,targetChannel:"email",targetValue:"wu.proj@pacom.cn",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:$a("member","project_admin","email"),expiresAt:r,status:"pending"}:s==="project-admin-phone"?{token:s,kind:"member",organizationName:c,inviterName:"林致远",role:"project_admin",roleLabel:Ke.project_admin,targetChannel:"phone",targetValue:"13700137066",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:$a("member","project_admin","phone"),expiresAt:r,status:"pending"}:s==="existing-demo"?{token:s,kind:"member",organizationName:"天环智慧园区",inviterName:"林致远",role:"operator",roleLabel:Ke.operator,targetChannel:"email",targetValue:"zhou.ning@pacom.cn",prefillName:"周宁",accountExists:!0,requiredSecondaryChannel:null,expiresAt:r,status:"pending"}:{token:s||"member-demo",kind:"member",organizationName:c,inviterName:"林致远",role:"operator",roleLabel:Ke.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",prefillName:"林明远",accountExists:!1,requiredSecondaryChannel:null,expiresAt:r,status:"pending"}}normalizeContactKey(e){return e.trim().toLowerCase().replace(/[\s\-()]/g,"")}isContactOccupied(e,s){const c=this.normalizeContactKey(s);return Object.values(Je).some(r=>{const m=e==="email"?r.email:r.phone;return!!m&&this.normalizeContactKey(m)===c})}async acceptInvitation(e){const s=await this.getInvitationPreview(e.token);if(s.status!=="pending")throw new Error("邀请已过期或已失效，请联系邀请人重新发送。");const c=s.kind==="owner"?"org_admin":s.role??"operator",r=this.activeSession;if(!!r&&(s.targetChannel==="email"&&!!r?.email&&this.normalizeContactKey(r.email)===this.normalizeContactKey(s.targetValue)||s.targetChannel==="phone"&&!!r?.phone&&this.normalizeContactKey(r.phone)===this.normalizeContactKey(s.targetValue))&&r){const M=structuredClone(r);return this.activeSession=M,this.applyOverridesToSession(),sessionStorage.setItem(ha,M.role),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,M),this.pushAudit("auth.invite.accept",M.userId,"success","已有账户确认加入"),structuredClone(M)}if(s.accountExists)throw new Error("该账户已注册，请使用原账户登录后再接受邀请。");const y=s.requiredSecondaryChannel!==void 0?s.requiredSecondaryChannel:$a(s.kind,s.role,s.targetChannel);let T="";if(y){const M=(e.secondaryContact??"").trim(),W=(e.secondaryVerificationCode??"").trim();if(!M)throw new Error(y==="phone"?"请补充并验证手机号码":"请补充并验证电子邮箱");if(!/^\d{6}$/.test(W))throw new Error("验证码不正确或已过期");const ie=`bind:${this.normalizeContactKey(M)}`;if(!this.sentCodeTargets.has(ie))throw new Error("请先获取验证码");if(this.isContactOccupied(y,M))throw new Error(y==="phone"?"该手机号码已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。":"该电子邮箱已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。");this.sentCodeTargets.delete(ie),T=M}const j=structuredClone(Je[c]);return e.displayName?.trim()&&(j.displayName=e.displayName.trim()),s.targetChannel==="email"?(j.email=s.targetValue,j.phone=T||(s.kind==="owner"?"13900139000":void 0)):(j.phone=s.targetValue,j.email=T||void 0),this.activeSession=j,this.applyOverridesToSession(),sessionStorage.setItem(ha,c),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,j),this.pushAudit("auth.invite.accept",j.userId,"success"),structuredClone(j)}async switchDemoRole(e){return this.activeSession=structuredClone(Je[e]),this.applyOverridesToSession(),sessionStorage.setItem(ha,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(wt);if(e){const s=JSON.parse(e);if(Array.isArray(s?.projects)&&Array.isArray(s?.buildings)&&Array.isArray(s?.floors)&&Array.isArray(s?.zones))return s}}}catch{}return structuredClone(Bt)}loadOrgs(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(St);if(e){const s=JSON.parse(e);if(Array.isArray(s)&&s.length>0&&s.every(c=>c?.id&&c?.name&&Array.isArray(c?.spatial?.projects)))return s}}}catch{}return[{id:Ye,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const e=this.orgs.find(s=>s.id===this.activeOrgId);e&&(e.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(St,JSON.stringify(this.orgs)),localStorage.setItem(xt,this.activeOrgId),this.activeOrgId===Ye&&localStorage.setItem(wt,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(e=>({id:e.id,name:e.name,projectCount:e.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}async switchOrganization(e){const s=this.orgs.find(c=>c.id===e);if(!s)throw new Error(`404 NOT_FOUND: 机构 ${e} 不存在`);this.activeOrgId=s.id,this.spatial=s.spatial,this.persistSpatial()}async createOrganization(e){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const c=e.trim()||"新建机构",r={id:`org-${Date.now().toString(36)}`,name:c,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(r),this.activeOrgId=r.id,this.spatial=r.spatial,this.persistSpatial(),this.pushAudit("org.create",r.id,"success",c),{id:r.id,name:r.name,projectCount:0}}syncAdminScopesFromSpatial(){const e=this.spatial.projects.map(r=>r.id),s=this.spatial.buildings.map(r=>r.id),c=this.spatial.floors.map(r=>r.id);this.activeOrgId===Ye&&(Je.org_admin.scope.allowedProjectIds=[...e],Je.org_admin.scope.allowedBuildingIds=[...s],Je.org_admin.scope.allowedFloorIds=[...c],Je.project_admin.scope.allowedBuildingIds=[...s],Je.project_admin.scope.allowedFloorIds=[...c]),this.activeSession&&((this.activeOrgId!==Ye||this.activeSession.role==="org_admin")&&(this.activeSession.scope.allowedProjectIds=[...e]),(this.activeOrgId!==Ye||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin")&&(this.activeSession.scope.allowedBuildingIds=[...s],this.activeSession.scope.allowedFloorIds=[...c]))}async getSpatialTree(){const e=this.requireSession();if(this.activeOrgId!==Ye){const M=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:M.projects.length,buildings:M.buildings.length,floors:M.floors.length}),M}const s=this.spatial.projects.filter(M=>e.scope.allowedProjectIds.includes(M.id)),c=this.spatial.buildings.filter(M=>e.scope.allowedBuildingIds.includes(M.id)),r=new Set(c.map(M=>M.id)),m=this.spatial.floors.filter(M=>r.has(M.buildingId)),y=new Set(m.map(M=>M.id)),T=this.spatial.zones.filter(M=>y.has(M.floorId)),j=structuredClone({projects:s,buildings:c,floors:m,zones:T});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:j.projects.length,buildings:j.buildings.length,floors:j.floors.length}),j}async createProject(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建项目`);const c={id:`project-${Date.now().toString(36)}`,name:e.name.trim()||"新建项目",city:e.city?.trim()||"广州市",address:e.address?.trim()||"",timezone:"Asia/Shanghai",location:e.location,imageUrl:e.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(c),s.scope.allowedProjectIds.includes(c.id)||s.scope.allowedProjectIds.push(c.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",c,e),this.pushAudit("project.create",c.id,"success",c.name),structuredClone(c)}async updateProject(e,s){const c=this.requireSession();if(!c.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权修改项目配置`);const r=this.spatial.projects.find(m=>m.id===e);if(!r)throw new Error(`404 NOT_FOUND: 项目 ${e} 不存在`);return s.name!==void 0&&(r.name=s.name.trim()||r.name),s.city!==void 0&&(r.city=s.city.trim()),s.address!==void 0&&(r.address=s.address.trim()),s.location!==void 0&&(r.location=s.location),s.imageUrl!==void 0&&(r.imageUrl=s.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${e}`,r,s),this.pushAudit("project.update",e,"success",r.name),structuredClone(r)}async deleteProject(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除项目`);if(e===S.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const c=new Set(this.spatial.buildings.filter(m=>m.projectId===e).map(m=>m.id)),r=new Set(this.spatial.floors.filter(m=>c.has(m.buildingId)).map(m=>m.id));this.spatial.projects=this.spatial.projects.filter(m=>m.id!==e),this.spatial.buildings=this.spatial.buildings.filter(m=>m.projectId!==e),this.spatial.floors=this.spatial.floors.filter(m=>!c.has(m.buildingId)),this.spatial.zones=this.spatial.zones.filter(m=>!r.has(m.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${e}`,{ok:!0}),this.pushAudit("project.delete",e,"success")}async upsertBuilding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼宇`);let c=e.id?this.spatial.buildings.find(r=>r.id===e.id):void 0;return c?(c.name=e.name.trim()||c.name,c.aboveFloors=Math.max(0,e.aboveFloors),c.belowFloors=Math.max(0,e.belowFloors),c.hasRoof=e.hasRoof,e.areaSqm!==void 0&&(c.areaSqm=e.areaSqm),e.imageUrl!==void 0&&(c.imageUrl=e.imageUrl)):(c={id:`building-${Date.now().toString(36)}`,projectId:e.projectId,name:e.name.trim()||"新建楼宇",aboveFloors:Math.max(1,e.aboveFloors),belowFloors:Math.max(0,e.belowFloors),hasRoof:e.hasRoof,areaSqm:e.areaSqm??null,imageUrl:e.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(c)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",c,e),this.pushAudit("building.upsert",c.id,"success",c.name),structuredClone(c)}async deleteBuilding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼宇`);if(e===S.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const c=new Set(this.spatial.floors.filter(r=>r.buildingId===e).map(r=>r.id));this.spatial.buildings=this.spatial.buildings.filter(r=>r.id!==e),this.spatial.floors=this.spatial.floors.filter(r=>r.buildingId!==e),this.spatial.zones=this.spatial.zones.filter(r=>!c.has(r.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${e}`,{ok:!0}),this.pushAudit("building.delete",e,"success")}async upsertFloor(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼层`);const c=new Date().toISOString();let r=e.id?this.spatial.floors.find(m=>m.id===e.id):void 0;if(r)r.name=e.name.trim()||r.name,r.kind=e.kind,r.level=e.level,e.areaSqm!==void 0&&(r.areaSqm=e.areaSqm),e.planImageUrl!==void 0&&(r.plan=e.planImageUrl?{floorId:r.id,imageUrl:e.planImageUrl,planVersion:(r.plan?.planVersion??0)+1,updatedAt:c}:null);else{const m=`floor-${e.buildingId.slice(-6)}-${e.kind}-${Math.abs(e.level)}-${Date.now().toString(36).slice(-3)}`;r={id:m,buildingId:e.buildingId,kind:e.kind,level:e.level,name:e.name.trim()||`${e.level}F`,areaSqm:e.areaSqm??null,plan:e.planImageUrl?{floorId:m,imageUrl:e.planImageUrl,planVersion:1,updatedAt:c}:null},this.spatial.floors.push(r),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(r.id)&&this.activeSession.scope.allowedFloorIds.push(r.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:r.id,name:r.name,hasPlan:!!r.plan}),this.pushAudit("floor.upsert",r.id,"success",r.name),structuredClone(r)}async deleteFloor(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼层`);if(e===S.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(c=>c.id!==e),this.spatial.zones=this.spatial.zones.filter(c=>c.floorId!==e),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${e}`,{ok:!0}),this.pushAudit("floor.delete",e,"success")}async upsertZone(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护功能区`);let c=e.id?this.spatial.zones.find(r=>r.id===e.id):void 0;return c?(c.name=e.name.trim()||c.name,c.category=e.category):(c={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:e.floorId,name:e.name.trim(),category:e.category},this.spatial.zones.push(c)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",c),this.pushAudit("zone.upsert",c.id,"success",c.name),structuredClone(c)}async deleteZone(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(c=>c.id!==e),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${e}`,{ok:!0}),this.pushAudit("zone.delete",e,"success")}async copyZonesToFloors(e,s){const c=this.requireSession();if(!c.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权复制功能区`);const r=this.spatial.floors.find(T=>T.id===e),m=this.spatial.zones.filter(T=>T.floorId===e);if(!r||m.length===0)return 0;let y=0;for(const T of s){if(T===e)continue;const j=this.spatial.floors.find(W=>W.id===T);if(!j)continue;const M=new Set(this.spatial.zones.filter(W=>W.floorId===T).map(W=>W.name));for(const W of m){const ie=W.name.replace(new RegExp(`^${r.name}\\s*`,"i"),""),B=`${j.name} ${ie}`.trim();M.has(B)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:T,name:B,category:W.category}),M.add(B),y+=1)}}return y>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:e,targetCount:s.length,added:y}),y}async getFloorDevices(e){const s=this.requireSession();if(this.activeOrgId!==Ye)return[];if(!s.scope.allowedFloorIds.includes(e)){const r={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,r),this.pushAudit("floor.read",e,"denied",r.message),new Error(`403 FORBIDDEN: ${r.message}`)}if(e!==S.floorId)return[];let c=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(c=c.filter(r=>r.logicalZoneId&&s.scope.allowedZoneIds.includes(r.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:c.length}),c}async dispatchControlBatch(e){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const c=`batch-e7f-${Date.now().toString(36)}`,r={batchId:c,floorId:e.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(m=>({deviceId:m.deviceId,command:m.command,targetValue:m.targetValue,status:"queued"}))};return this.batches.set(c,r),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",r,e),this.pushAudit("control.dispatch",c,"success",`下发 ${e.targets.length} 台设备`),r.receipts.forEach((m,y)=>{const T=this.devices.find(j=>j.id===m.deviceId);setTimeout(()=>{m.status="dispatched",m.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:c,deviceId:m.deviceId,status:"dispatched",at:m.dispatchedAt})},280+y*120),setTimeout(()=>{const j=new Date().toISOString();!T||T.connectivity==="offline"?(m.status="timeout",m.errorCode="GATEWAY_READBACK_TIMEOUT",m.errorMessage="设备离线，网关未收到回读确认",m.verifiedAt=j):(m.status="verified_success",m.observedValue=m.targetValue,m.verifiedAt=j,this.applyObservedTelemetry(T,m.command,m.targetValue,j)),this.emit({type:"control.receipt.updated",batchId:c,deviceId:m.deviceId,status:m.status,observedValue:m.observedValue,at:j})},900+y*220)}),structuredClone(r)}applyObservedTelemetry(e,s,c,r){s==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:c,collectedAt:r,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(c)>0,collectedAt:r,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:c,collectedAt:r,stale:!1}:s==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:c,collectedAt:r,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:r,values:{[s]:c}})}async getControlBatch(e){this.requireSession();const s=this.batches.get(e);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(s)}async listAlarms(e){const s=this.requireSession();return this.activeOrgId!==Ye?[]:!s.scope.allowedFloorIds.includes(e)||e!==S.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,s){const c=this.requireSession();if(!c.scope.canManageAlarms){const m=`角色「${c.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",m),new Error(`403 FORBIDDEN: ${m}`)}const r=this.alarms.find(m=>m.id===e);if(!r)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return r.status="acknowledged",r.acknowledgedAt=new Date().toISOString(),r.acknowledgedBy=c.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,r,{note:s}),this.pushAudit("alarm.acknowledge",e,"success",s),this.emit({type:"alarm.changed",floorId:r.floorId,alarmId:e,status:"acknowledged",at:r.acknowledgedAt}),structuredClone(r)}async listWorkOrders(e){const s=this.requireSession();return this.activeOrgId!==Ye?[]:!s.scope.allowedFloorIds.includes(e)||e!==S.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const c=new Date().toISOString(),r={id:`wo-e7f-${Date.now().toString(36)}`,projectId:S.projectId,buildingId:S.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:c,updatedAt:c};if(this.workOrders.unshift(r),e.alarmId){const m=this.alarms.find(y=>y.id===e.alarmId);m&&(m.workOrderId=r.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",r,e),this.pushAudit("work_order.create",r.id,"success",r.title),structuredClone(r)}async updateWorkOrderStatus(e,s){const c=this.requireSession();if(!c.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权流转工单`);const r=this.workOrders.find(m=>m.id===e);if(!r)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return r.status=s,r.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,r,{status:s}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${s}`),structuredClone(r)}async updateDevicePlanPoint(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const c=this.devices.find(r=>r.id===e.deviceId);if(!c)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(c.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${c.version}，请刷新后重试`);return c.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},c.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,c,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${c.planPoint.x}, ${c.planPoint.y})`),structuredClone(c)}async updateDeviceHardwareBinding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const c=this.devices.find(m=>m.id===e.deviceId);if(!c)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(c.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${c.version}）`);const r=new Date().toISOString();return c.physicalInstalled=e.physicalInstalled,c.physicalVerifiedAt=e.physicalInstalled?r:null,c.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:r,boundBy:s.displayName},c.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,c,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(c)}async listConnections(e){return this.requireSession(),this.activeOrgId!==Ye?[]:structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),this.activeOrgId!==Ye?[]:structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,s){const c=this.requireSession();if(!c.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权冻结交付批次`);const r=this.devices.filter(y=>y.physicalInstalled&&y.hardwareBinding).length,m={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:S.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:r,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:c.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(m),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,m,{note:s}),this.pushAudit("delivery.freeze",m.id,"success",`${r}/${this.devices.length} 已现场核验`),structuredClone(m)}async getAnalysisReport(e,s,c){this.requireSession();const r=s==="today"?1:s==="7d"?7:30,y={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*r)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*r).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(M=>M.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*r).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*r).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*r).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],T=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],j={category:e,range:s,scopeId:c,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:y.kpis,unit:y.unit,series:y.base.map((M,W)=>({label:T[W],value:Math.round(M*(e==="energy"||e==="carbon"?r/2+.5:1)),baseline:Math.round(M*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:y.base[3],unit:y.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:y.base[4],unit:y.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:y.base[1],unit:y.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${s}&scopeId=${c}`,{kpis:j.kpis.length}),j}async listScenes(e){return this.requireSession(),this.activeOrgId!==Ye?[]:structuredClone(this.scenes)}async createScene(e){const s=this.requireSession();if(!s.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建场景`);const c={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(c),this.record("REST","createScene","POST /api/v1/scenes",c,e),this.pushAudit("scene.create",c.id,"success",c.name),structuredClone(c)}async executeScene(e){const s=this.scenes.find(r=>r.id===e);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const c=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=c.batchId,c}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:S.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,s,c){this.requireSession();const r=c>=this.calendar.nightGuardStart?`下班时间 ${c} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,m=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${c}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${c} (+30m)`,conflictWarning:r},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:r}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",m,{workdayStart:s,workdayEnd:c}),m}async saveWorkCalendar(e,s,c,r){const m=this.requireSession();if(!m.scope.canEditSettings)throw this.pushAudit("settings.calendar",S.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${m.roleLabel}」无权修改应用设置`);if(this.calendar.version!==r)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=c)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:c,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:c,expectedVersion:r}),this.pushAudit("settings.calendar",S.projectId,"success",`${s}-${c}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,s,c){const r=this.requireSession();if(!r.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",e,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权启停应用设置规则`);const m=this.rules.find(y=>y.id===e);if(!m)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(m.version!==c)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${m.version}）`);return m.enabled=s,m.version+=1,m.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,m,{enabled:s,expectedVersion:c}),this.pushAudit("settings.rule_toggle",e,"success",s?"启用":"停用"),structuredClone(m)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,s){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",e,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const r=Je[s],m={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:s,roleLabel:r.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(m),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",m,{email:e,role:s}),this.pushAudit("org.invite",e,"success",r.roleLabel),structuredClone(m)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const e=this.requireSession();return this.reconcileOverrides(),e.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(s=>s.targetUserId===e.userId))}async grantOverride(e){const s=this.requireSession();if(!s.scope.canGrantOverride)throw this.pushAudit("override.grant",e.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const c=e.reason.trim();if(!c)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(e.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const r=this.members.find(T=>T.userId===e.targetUserId);if(!r)throw new Error(`404 NOT_FOUND: 目标成员 ${e.targetUserId} 不存在`);if(r.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const m=Date.now(),y={id:`ovr-${m.toString(36)}`,targetUserId:r.userId,targetUserName:r.displayName,module:e.module,durationHours:e.durationHours,grantedAt:new Date(m).toISOString(),expiresAt:new Date(m+e.durationHours*36e5).toISOString(),approvedBy:s.displayName,reason:c,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(y),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",y,e),this.pushAudit("override.grant",`${r.displayName} · ${e.module==="deployment"?"系统部署":"应用设置"}`,"success",`${e.durationHours}h · ${c}`),structuredClone(y)}async revokeOverride(e){const s=this.requireSession();if(!s.scope.canGrantOverride)throw this.pushAudit("override.revoke",e,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const c=this.overrides.find(r=>r.id===e);if(!c)throw new Error(`404 NOT_FOUND: 提权记录 ${e} 不存在`);return c.status="revoked",c.revokedAt=new Date().toISOString(),c.revokedBy=s.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${e}/revoke`,c),this.pushAudit("override.revoke",`${c.targetUserName} · ${c.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(c)}subscribeFloorEvents(e,s){return e!==S.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${S.floorId}`,e),this.listeners.forEach(s=>s(e))}}const tt=["org_admin","project_admin","operator","space_user"],Qt=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function _e(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function st(t){return t?t.slice(0,16).replace("T"," "):"—"}function Da(t){return t==="deployment"?"系统部署":"应用设置"}async function Xt(t,e,s,c,r){const m=s.scope.canManageMembers,y=s.scope.canGrantOverride,T=s.scope.canViewAuditLogs,j=y||s.role==="operator",M=s.role!=="space_user";let W="profile",ie=M?await e.listOrgMembers().catch(()=>[]):[],B=j?await e.listOverrides().catch(()=>[]):[],V=T?await e.listAuditLogs().catch(()=>[]):[],me="",ee="all",Q="all",N="all",X=!1,F=!1,pe=s.displayName,ge=s.role==="org_admin"?"机构负责人":s.role==="project_admin"?"项目负责人":s.role==="operator"?"运行值守工程师":"园区空间用户",H="138-0013-8072",fe="",le="";const ye={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function ne(){const[L,v,$,D]=await Promise.all([e.getSession(),M?e.listOrgMembers().catch(()=>[]):Promise.resolve([]),j?e.listOverrides().catch(()=>[]):Promise.resolve([]),T?e.listAuditLogs().catch(()=>[]):Promise.resolve([])]);ie=v,B=$,V=D,L&&(s=L,c(L)),G()}function O(){const L=["profile"];return M&&L.push("members","roles"),j&&L.push("overrides"),T&&L.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${L.map(v=>{const $=ye[v],D=v==="overrides"?B.filter(u=>u.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${W===v}" data-anav="${v}">
                  ${Ae($.icon,16)}
                  <span>${$.label}</span>
                  ${D>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${D}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function P(){return W==="members"&&m?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':W==="overrides"&&y?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':W==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 · SR 6.1</span>':""}function te(){const L=s.scope.activeOverrides.filter($=>$.status==="active"),v=s.scope.allowedZoneIds?.length?`授权 ${s.scope.allowedFloorIds.length} 个楼层 · ${s.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${s.scope.allowedProjectIds.length} 个项目 · ${s.scope.allowedBuildingIds.length} 栋楼宇 · ${s.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${_e(s.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${_e(s.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${_e(pe)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${_e(ge)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${_e(H)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${_e(v)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${_e(yt[s.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${_e(s.roleLabel)}</span>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">当前写权限状态</span>
              <span class="pacom-setting-desc">写权限独立授予，绝不隐含在只读访问中</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <span class="pacom-badge ${s.scope.canControlDevices?"pacom-badge--online":"pacom-badge--neutral"}">设备控制：${s.scope.canControlDevices?"允许":"无"}</span>
              ${s.role==="space_user"?'<span class="pacom-badge pacom-badge--neutral">配置与管理模块：不可见</span>':`<span class="pacom-badge ${s.scope.canEditSettings?"pacom-badge--online":"pacom-badge--warning"}">应用设置：${s.scope.canEditSettings?"可改":"只读"}</span>
                     <span class="pacom-badge ${s.scope.canEditDeployment?"pacom-badge--online":"pacom-badge--warning"}">系统部署：${s.scope.canEditDeployment?"可改":"只读"}</span>`}
            </div>
          </div>
          ${L.length>0?L.map($=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${_e(Da($.module))}（${$.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${_e($.approvedBy)} · 到期时间：${_e(st($.expiresAt))} · 事由：${_e($.reason)}</span>
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
    `}function re(){const L=me.trim().toLowerCase(),v=ie.filter($=>ee!=="all"&&$.role!==ee?!1:L?`${$.displayName} ${$.email} ${$.roleLabel} ${$.scopeSummary}`.toLowerCase().includes(L):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${_e(me)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${ee==="all"?"selected":""}>全部角色（${ie.length}）</option>
            ${tt.map($=>`<option value="${$}" ${ee===$?"selected":""}>${_e(Ke[$])}</option>`).join("")}
          </select>
        </div>
        <span class="pacom-row-sub">显示 ${v.length} / ${ie.length} 人</span>
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
              ${v.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':v.map($=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${_e($.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${_e($.displayName)}</div>
                                ${m?`<div class="pacom-row-sub">${_e($.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${$.role==="org_admin"||$.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${_e($.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${_e($.scopeSummary)}</span></td>
                          <td>
                            <span class="pacom-badge ${$.status==="active"?"pacom-badge--online":"pacom-badge--neutral"}">
                              ${$.status==="active"?"正常":$.status==="invited"?"邀请中":"已停用"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function ue(){return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">四级标准角色说明</h2>
          <span class="pacom-row-sub">IEC 62443-3-3 SR 2.1 RE 2 · 最小权限与职责分离</span>
        </div>
        <div class="pacom-settings-card">
          ${tt.map(L=>{const v=ie.filter($=>$.role===L).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${_e(Ke[L])}</span>
                  <span class="pacom-setting-desc">${_e(yt[L])}</span>
                </div>
                <span class="pacom-badge pacom-badge--neutral">${v} 人</span>
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
                ${Qt.map(L=>`
                  <tr>
                    <td><strong style="font-weight:450;">${_e(L.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${L.org_admin.tone}">${_e(L.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${L.project_admin.tone}">${_e(L.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${L.operator.tone}">${_e(L.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${L.space_user.tone}">${_e(L.space_user.text)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function je(){return`
      <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="限时提权统计">
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">当前生效提权</span>
          <div class="pacom-kpi-value">${B.filter(v=>v.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${B.length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">每条审批与收回同步写入审计日志</span>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">限时提权审批记录</h2>
          <span class="pacom-row-sub">${y?"可为运营人员开启「系统部署」或「应用设置」限时修改权":"展示管理员为你授予的临时提权记录"}</span>
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
                  ${y?'<th style="text-align:right;">操作</th>':""}
                </tr>
              </thead>
              <tbody>
                ${B.length===0?`<tr><td colspan="${y?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${y?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:B.map(v=>`
                          <tr>
                            <td><strong style="font-weight:450;">${_e(v.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${_e(Da(v.module))}</span></td>
                            <td>
                              <div>${v.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${_e(st(v.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${_e(v.approvedBy)}</div>
                              <div class="pacom-row-sub">${_e(v.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${v.status==="active"?"pacom-badge--online":v.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${v.status==="active"?"生效中":v.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${y?`<td style="text-align:right;">
                                    ${v.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${_e(v.id)}">提前收回</button>`:`<span class="pacom-row-sub">${v.revokedBy?`${_e(v.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Le(){const L=V.filter(v=>{if(Q==="success"&&v.result!=="success"||Q==="denied"&&v.result==="success")return!1;if(N!=="all"){const $=`${v.action} ${v.target}`.toLowerCase();if(N==="control"&&!$.includes("control")&&!$.includes("scene")||N==="alarm"&&!$.includes("alarm")&&!$.includes("work")||N==="deploy"&&!$.includes("deploy")&&!$.includes("plan")&&!$.includes("hardware")&&!$.includes("project")&&!$.includes("building")&&!$.includes("floor")&&!$.includes("zone")||N==="settings"&&!$.includes("settings")||N==="override"&&!$.includes("override"))return!1}return!0});return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
            <option value="all" ${N==="all"?"selected":""}>全部操作类别</option>
            <option value="override" ${N==="override"?"selected":""}>限时提权审批</option>
            <option value="control" ${N==="control"?"selected":""}>设备控制与场景</option>
            <option value="alarm" ${N==="alarm"?"selected":""}>告警与工单处置</option>
            <option value="deploy" ${N==="deploy"?"selected":""}>系统部署与空间</option>
            <option value="settings" ${N==="settings"?"selected":""}>应用设置变更</option>
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="按执行结果筛选">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${Q==="all"}" data-audit-filter="all">全部（${V.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${Q==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${Q==="denied"}" data-audit-filter="denied">已拦截</button>
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
              ${L.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':L.map(v=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${_e(v.action)}</div>
                            ${v.detail?`<div class="pacom-row-sub">${_e(v.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${_e(v.target)}</code></td>
                          <td>
                            <div>${_e(v.actor)}</div>
                            <div class="pacom-row-sub">${_e(Ke[v.role]??v.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${_e(st(v.at))}</span></td>
                          <td style="text-align:right;">
                            <span class="pacom-badge ${v.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                              ${v.result==="success"?"成功":"已拦截"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function E(){const L=[];if(X&&m){const v=s.role==="org_admin"?tt:["project_admin","operator","space_user"];L.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="邀请成员">
          <form class="dep-modal-card" data-role="invite-form" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">邀请新成员</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">成员电子邮箱（唯一登录账号）</span>
                <input class="pacom-input" name="email" type="email" placeholder="colleague@gzlab.ac.cn" required />
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分配角色</span>
                <select class="pacom-select" name="role">
                  ${v.map($=>`<option value="${$}">${_e(Ke[$])}</option>`).join("")}
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
        </div>`)}if(F&&y){const v=ie.filter($=>$.role==="operator");L.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="授予限时提权">
          <form class="dep-modal-card" data-role="grant-override-form" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">授予运营人员限时提权（SR 2.1 RE 3）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">目标运营人员</span>
                <select class="pacom-select" name="targetUserId" required>
                  ${v.length===0?'<option value="">暂无运营人员</option>':v.map($=>`<option value="${_e($.userId)}">${_e($.displayName)}（${_e($.email)}）</option>`).join("")}
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
              <span class="pacom-row-sub">审批人：${_e(s.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${v.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return L.join("")}function G(){const L=ye[W],v=P();t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${_e(s.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${O()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${v?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${L.label}</h2>
                  <p class="pacom-unified-subtitle">${L.subtitle}</p>
                </div>
                ${v?`<div class="pacom-unified-head-actions">${v}</div>`:""}
              </div>
              ${fe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${_e(fe)}</span></div>`:""}
              ${le?`<div class="pacom-alert-banner">${_e(le)}</div>`:""}
              ${W==="profile"?te():W==="members"?re():W==="roles"?ue():W==="overrides"?je():Le()}
            </div>
          </div>
        </div>
      </div>
      ${E()}
    `,Ce()}function Ce(){t.querySelectorAll("[data-anav]").forEach(v=>{v.addEventListener("click",()=>{W=v.dataset.anav??"profile",fe="",le="",G()})}),t.querySelector('[data-role="profile-form"]')?.addEventListener("submit",v=>{v.preventDefault();const $=new FormData(v.currentTarget);pe=String($.get("displayName")??"").trim()||s.displayName,ge=String($.get("jobTitle")??"").trim()||ge,H=String($.get("phone")??"").trim()||H,fe=`已保存个人资料：${pe}（${ge}）· ${H}`,G()}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",r()}),t.querySelector("[data-open-invite]")?.addEventListener("click",()=>{X=!0,F=!1,G()}),t.querySelector("[data-open-grant]")?.addEventListener("click",()=>{F=!0,X=!1,G()}),t.querySelectorAll("[data-close-modals]").forEach(v=>{v.addEventListener("click",()=>{X=!1,F=!1,G()})}),t.querySelectorAll("[data-modal-scrim]").forEach(v=>{v.addEventListener("click",$=>{$.target===v&&(X=!1,F=!1,G())})}),t.querySelector("[data-member-search]")?.addEventListener("input",v=>{const $=v.currentTarget,D=$.selectionStart??$.value.length;me=$.value,G();const u=t.querySelector("[data-member-search]");u&&(u.focus(),u.setSelectionRange(D,D))}),t.querySelector("[data-role-filter]")?.addEventListener("change",v=>{ee=v.currentTarget.value,G()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async v=>{v.preventDefault(),le="";const $=new FormData(v.currentTarget);try{const D=await e.inviteOrgMember(String($.get("email")??""),String($.get("role")));X=!1,fe=`已向 ${D.email} 发送「${D.roleLabel}」邀请。`,await ne()}catch(D){le=D instanceof Error?D.message:String(D),G()}}),t.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async v=>{v.preventDefault(),le="";const $=new FormData(v.currentTarget);try{const D=await e.grantOverride({targetUserId:String($.get("targetUserId")??""),module:String($.get("module")??"deployment"),durationHours:Number($.get("durationHours")??8),reason:String($.get("reason")??"")});F=!1,fe=`已为「${D.targetUserName}」开启「${Da(D.module)}」${D.durationHours} 小时限时修改权，到期自动收回。`,await ne()}catch(D){le=D instanceof Error?D.message:String(D),G()}}),t.querySelectorAll("[data-revoke-override]").forEach(v=>{v.addEventListener("click",async()=>{const $=v.dataset.revokeOverride;if($){le="";try{const D=await e.revokeOverride($);fe=`已提前收回「${D.targetUserName}」的「${Da(D.module)}」限时修改权。`,await ne()}catch(D){le=D instanceof Error?D.message:String(D),G()}}})}),t.querySelectorAll("[data-audit-filter]").forEach(v=>{v.addEventListener("click",()=>{Q=v.dataset.auditFilter??"all",G()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",v=>{N=v.currentTarget.value??"all",G()})}G()}const ua={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},es={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},as={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function ts(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function ss(t){return t.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:t.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function nt(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("vav")||t.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:e.includes("co₂")||e.includes("co2")||t.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function ns(t,e,s){const c=new URLSearchParams(window.location.hash.split("?")[1]??""),r=c.get("alarm"),m=c.get("wo"),y=s.scope.canManageAlarms;let T=await e.getSpatialTree(),j=Za(),M=!1,W="",ie=[],B=[],V=[],me=m?"workorders":"alarms",ee="all",Q="all",N="all",X="impact",F=!1,pe="",ge=r,H=m,fe=null,le=null,ye="resolved";const ne=new Set,O=new Map,P=new Map,te=new Map,re=new Map;let ue="",je="";function Le(v){const $=re.get(v.id);if($)return $;const D=v.id.match(/(\d+)$/),u=`WO-2026-${D?D[1]:v.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,A={estCost:"¥ 450",actualCost:v.status==="closed"?"¥ 380":"--",cmmsNo:u,assigneeGroup:"暖通运维组",tasks:[{id:`${v.id}-t1`,label:"核查设备供电与现场指示灯状态",done:v.status!=="open"},{id:`${v.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:v.status==="resolved"||v.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:v.createdAt?v.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${u}）`}]};return re.set(v.id,A),A}async function E(){[ie,B,V]=await Promise.all([e.listAlarms(S.floorId),e.listWorkOrders(S.floorId),e.getFloorDevices(S.floorId).catch(()=>[])]),B.forEach(v=>Le(v)),L()}function G(v){if(!v)return{name:"楼层通用",zone:"E7F",dev:null};const $=V.find(D=>D.id===v)??null;return $?{name:$.name,zone:($.logicalZoneId?as[$.logicalZoneId]:void 0)??"E7F",dev:$}:{name:v,zone:"E7F",dev:null}}function Ce(v){const $=G(v.deviceId).dev;$&&$.connectivity==="offline"?te.set(v.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${$.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):te.set(v.id,{verdict:"pass",summary:`自检通过（PASS）：「${$?.name??v.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),ge=v.id,L()}function L(){const v=ie.filter(h=>h.status==="active"&&!O.has(h.id)),$=B.filter(h=>!Le(h).cancelled&&(h.status==="open"||h.status==="assigned"||h.status==="in_progress")),D=ie.filter(h=>h.status!=="active").length+P.size,u=0,A=O.size,J=pe.trim().toLowerCase(),Ie=ie.filter(h=>{const b=O.has(h.id);if(ee==="snoozed"){if(!b)return!1}else if(ee==="active"){if(h.status!=="active"||b)return!1}else if(ee==="acknowledged"){if(h.status!=="acknowledged")return!1}else if(b)return!1;if(N!=="all"&&h.severity!==N)return!1;if(!J)return!0;const Z=G(h.deviceId);return`${h.title} ${h.message} ${Z.name} ${Z.zone} ${h.deviceId}`.toLowerCase().includes(J)}),Pe=new Map;for(const h of Ie){const b=`${h.title} ${h.message}`.toLowerCase(),Z=b.includes("离线")||b.includes("modbus")||b.includes("通信"),oe=F?Z?"root-gateway-modbus":h.deviceId:h.id,$e=Z?"根因：E7F 主控网关通信链路":`根因：${G(h.deviceId).name}`,Me=Pe.get(oe)??{rootLabel:$e,items:[]};Me.items.push(h),Pe.set(oe,Me)}const Be=Array.from(Pe.values());X==="impact"&&Be.sort((h,b)=>nt(b.items[0]).costYuan-nt(h.items[0]).costYuan);const qe=B.filter(h=>{const b=Le(h);if(Q==="cancelled"){if(!b.cancelled)return!1}else if(b.cancelled||Q==="open"&&(h.status==="resolved"||h.status==="closed")||Q==="resolved"&&h.status!=="resolved"||Q==="closed"&&h.status!=="closed")return!1;if(!J)return!0;const Z=G(h.deviceId);return`${h.title} ${h.description} ${h.id} ${b.cmmsNo} ${Z.name}`.toLowerCase().includes(J)});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Wa({tree:T,session:s,scope:j,activeAlarmCount:v.length,isOpen:M,searchKeyword:W})}
            </div>

            <div class="pacom-header-meta">
              ${me==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${F}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${s.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${s.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${Ae("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${me==="alarms"}" data-main-tab="alarms">实时告警（${ie.length-A}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${me==="workorders"}" data-main-tab="workorders">运维工单（${B.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${me==="alarms"&&ee==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${v.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${me==="workorders"&&Q==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${$.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${me==="alarms"&&ee==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${D}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${u}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${ue?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${d(ue)}</span></div>`:""}
          ${je?`<div class="pacom-alert-banner">${d(je)}</div>`:""}

          ${me==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${d(pe)}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${N==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${N==="critical"?"selected":""}>严重</option>
                      <option value="major" ${N==="major"?"selected":""}>重要</option>
                      <option value="minor" ${N==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${X==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${X==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${ee==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${ee==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${ee==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${ee==="snoozed"}" data-status-pill="snoozed">已忽略（${A}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${ne.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${ne.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${Be.length} 项</span>
                  </div>
                </div>
                ${Be.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${Be.map(h=>{const b=h.items[0],Z=es[b.severity]??{label:b.severity,cls:"pacom-badge--neutral"},oe=G(b.deviceId),$e=ss(b),Me=nt(b),He=ge===b.id,Oe=O.get(b.id),De=!!Oe,Ge=ne.has(b.id),ce=te.get(b.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${d(b.id)}" data-check-alarm="${d(b.id)}" ${Ge?"checked":""} ${!y||b.status!=="active"||De?"disabled":""} aria-label="选择 ${d(b.title)}" />
                                  </td>
                                  <td><span class="pacom-badge ${Z.cls}">${d(Z.label)}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${d(b.title)}</span>
                                      ${F?`<span class="pacom-badge pacom-badge--accent">${d(h.rootLabel)}${h.items.length>1?` · 影响 ${h.items.length} 项`:""}</span>`:""}
                                      ${ce?`<span class="pacom-badge ${ce.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${d(ce.verdict.toUpperCase())}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${d(b.message)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${d(oe.name)}</div>
                                    <div class="pacom-row-sub">${d(oe.zone)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${d(Me.costLabel)}</div>
                                    <div class="pacom-row-sub">${d(Me.comfortLabel)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${d($e.duration)}</div>
                                    <div class="pacom-row-sub" style="color:${$e.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${d($e.trend)}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${De?"pacom-badge--neutral":b.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${De?`忽略 ${d(Oe?.duration)}`:b.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${De?`<button class="pacom-btn" data-unsnooze="${d(b.id)}" ${y?"":"disabled"}>恢复监控</button>`:`
                                            ${b.status==="active"?`<button class="pacom-btn" data-mark-actioned="${d(b.id)}" ${y?"":"disabled"}>标记已处置</button>`:""}
                                            ${b.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${d(b.id)}" ${y?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${d(b.id)}">${He?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${He?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${d(ts(b))}
                                            </div>
                                            ${Oe?`<div class="pacom-info-banner">忽略周期：${d(Oe.duration)} · 原因备注：${d(Oe.reason)}</div>`:""}
                                            ${ce?`
                                                <div class="pacom-banner ${ce.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${d(ce.summary)}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${ce.steps.map(be=>`<span>${d(be)}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${d(b.id)}</code> · 设备编号 <code>${d(b.deviceId)}</code> · 关联工单 ${d(b.workOrderId??"无")}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${d(b.id)}">单机自检（FTT）</button>
                                              ${!De&&b.status==="active"?`<button class="pacom-btn" data-open-snooze="${d(b.id)}" ${y?"":"disabled"}>限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${d(b.deviceId)}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${d(b.deviceId)}">定位设备 →</button>
                                            </div>
                                            ${fe===b.id?`
                                                <form data-snooze-form="${d(b.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
                                                    <button class="pacom-btn pacom-btn--primary" type="submit" style="height:28px;" ${y?"":"disabled"}>确认忽略</button>
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
              ${(()=>{const h=H?B.find(b=>b.id===H)??null:null;if(h){const b=G(h.deviceId),Z=Le(h),oe=!!(!y||Z.cancelled||h.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${d(h.id)}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${d(h.title)}</h2>
                        <span class="pacom-badge pacom-badge--accent">${d(Z.cmmsNo)}</span>
                        ${Z.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${d(h.id)}" data-wo-status="${d(h.id)}" aria-label="更新工单状态" ${oe?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map($e=>`<option value="${$e}" ${h.status===$e?"selected":""}>${ua[$e]}</option>`).join("")}
                          <option value="cancelled" ${Z.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${le===h.id?`
                        <form data-close-wo-form="${d(h.id)}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${ua[ye]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${d(Z.cause??"")}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${d(Z.solution??"")}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${d(Z.actualCost==="--"?"":Z.actualCost)}" />
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" ${y?"":"disabled"}>保存并更新状态</button>
                          </div>
                        </form>`:""}
                    <div class="pacom-wo-workbench">
                      <div style="display:flex; flex-direction:column; gap:14px;">
                        <div class="pacom-card" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:500;">工单描述与现场检查任务清单</strong>
                          <div class="pacom-row-sub">${d(h.description)}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${Z.tasks.map($e=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${d($e.id)}" data-wo-task="${d(h.id)}" data-task-id="${d($e.id)}" ${$e.done?"checked":""} ${oe?"disabled":""} />
                                    <span>${d($e.label)}</span>
                                  </span>
                                  ${$e.unit?`<span class="pacom-row-sub">实测：${d($e.reading??"--")} ${d($e.unit)}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${Z.history.map($e=>`<span>• <span class="pacom-row-sub">${d($e.at)}</span> — ${d($e.text)}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${d(h.id)}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${d(Z.cmmsNo)}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${d(b.name)}（${d(b.zone)}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${d(Z.assigneeGroup)}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${d(Z.estCost)} / 实际 ${d(Z.actualCost)}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${d(Z.cause??"待完单填写")}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${d(Z.solution??"待完单填写")}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${d(h.deviceId??"")}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${d(h.deviceId??"")}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${d(pe)}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${Q==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${Q==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${Q==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${Q==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${Q==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${qe.length} 条工单</span>
                  </div>
                  ${qe.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${qe.map(b=>{const Z=G(b.deviceId),oe=Le(b),$e=!!(!y||oe.cancelled||b.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${d(b.title)}</span>
                                        ${oe.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${d(b.description)} · <code>${d(b.id)}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${d(Z.name)}</div>
                                      <div class="pacom-row-sub">${d(Z.zone)}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${d(oe.cmmsNo)}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${d(oe.assigneeGroup)} · 预估 ${d(oe.estCost)}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${d(b.id)}" data-wo-status="${d(b.id)}" aria-label="更新工单状态" ${$e?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Me=>`<option value="${Me}" ${b.status===Me?"selected":""}>${ua[Me]}</option>`).join("")}
                                          <option value="cancelled" ${oe.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${d(b.id)}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${le===b.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${d(b.id)}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${ua[ye]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${d(oe.cause??"")}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${d(oe.solution??"")}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${d(oe.actualCost==="--"?"":oe.actualCost)}" />
                                            </div>
                                            <div style="display:flex; justify-content:flex-end; gap:8px;">
                                              <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                                              <button class="pacom-btn pacom-btn--primary" type="submit" ${y?"":"disabled"}>保存并更新状态</button>
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
    `,Ga(t,{onToggle:()=>{M=!M,L(),M&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:h=>{W=h,L();const b=t.querySelector("[data-global-space-search]");b&&(b.focus(),b.setSelectionRange(h.length,h.length))},onPick:h=>{j=h,M=!1,L()}}),t.querySelectorAll("[data-main-tab]").forEach(h=>{h.addEventListener("click",()=>{me=h.dataset.mainTab??"alarms",ue="",L()})}),t.querySelectorAll("[data-kpi-filter]").forEach(h=>{h.addEventListener("click",()=>{const b=h.dataset.kpiFilter;ue="",b==="workorders"?(me="workorders",Q=Q==="open"?"all":"open"):(b==="active"||b==="acknowledged")&&(me="alarms",ee=ee===b?"all":b),L()})}),t.querySelectorAll("[data-status-pill]").forEach(h=>{h.addEventListener("click",()=>{ee=h.dataset.statusPill??"all",L()})}),t.querySelectorAll("[data-wo-pill]").forEach(h=>{h.addEventListener("click",()=>{Q=h.dataset.woPill??"all",L()})}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{ue="",E()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{F=!F,L()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",h=>{N=h.currentTarget.value,L()}),t.querySelector("[data-alarm-sort]")?.addEventListener("change",h=>{X=h.currentTarget.value??"impact",L()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",h=>{const b=h.currentTarget,Z=b.selectionStart??b.value.length;pe=b.value,L();const oe=t.querySelector("[data-alarm-search]");oe&&(oe.focus(),oe.setSelectionRange(Z,Z))}),t.querySelectorAll("[data-check-alarm]").forEach(h=>{h.addEventListener("change",()=>{if(!y)return;const b=h.dataset.checkAlarm;b&&(h.checked?ne.add(b):ne.delete(b),L())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{if(!y)return;je="";const h=Array.from(ne);try{for(const b of h)await e.acknowledgeAlarm(b,"告警中心批量确认"),P.set(b,"批量确认处置");ne.clear(),ue=`已批量确认 ${h.length} 条告警，未来 24 小时持续校验无复发。`,await E()}catch(b){je=b instanceof Error?b.message:String(b),L()}}),t.querySelectorAll("[data-expand-alarm]").forEach(h=>{h.addEventListener("click",()=>{const b=h.dataset.expandAlarm??null;ge=ge===b?null:b,fe=null,L()})}),t.querySelectorAll("[data-expand-wo]").forEach(h=>{h.addEventListener("click",()=>{const b=h.dataset.expandWo??null;H=H===b?null:b,L()})}),t.querySelectorAll("[data-run-ftt]").forEach(h=>{h.addEventListener("click",()=>{const b=ie.find(Z=>Z.id===h.dataset.runFtt);b&&Ce(b)})}),t.querySelectorAll("[data-open-snooze]").forEach(h=>{h.addEventListener("click",()=>{y&&(fe=h.dataset.openSnooze??null,L())})}),t.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{fe=null,L()}),t.querySelectorAll("[data-snooze-form]").forEach(h=>{h.addEventListener("submit",b=>{if(b.preventDefault(),!y)return;const Z=h.dataset.snoozeForm;if(!Z)return;const oe=new FormData(h),$e=String(oe.get("duration")??"24h"),Me=String(oe.get("reason")??"").trim()||"现场核查中";O.set(Z,{duration:$e,reason:Me}),ne.delete(Z),fe=null,ue=`已限时忽略该告警（${$e} · ${Me}），可在「已忽略」页签中随时恢复。`,L()})}),t.querySelectorAll("[data-unsnooze]").forEach(h=>{h.addEventListener("click",()=>{if(!y)return;const b=h.dataset.unsnooze;b&&(O.delete(b),ue="已恢复该告警的实时监控。",L())})}),t.querySelectorAll("[data-go-ts]").forEach(h=>{h.addEventListener("click",()=>{const b=h.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(b)}`})}),t.querySelectorAll("[data-locate-home]").forEach(h=>{h.addEventListener("click",()=>{const b=h.dataset.locateHome??"";window.location.hash=b?`#home?device=${encodeURIComponent(b)}`:"#home"})}),t.querySelectorAll("[data-mark-actioned]").forEach(h=>{h.addEventListener("click",async()=>{if(!y)return;je="";const b=h.dataset.markActioned;try{await e.acknowledgeAlarm(b,"现场自处理完成（Mark Actioned）"),P.set(b,"现场自处理完成"),ne.delete(b),ue="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await E()}catch(Z){je=Z instanceof Error?Z.message:String(Z),L()}})}),t.querySelectorAll("[data-to-wo]").forEach(h=>{h.addEventListener("click",async()=>{if(!y)return;je="";const b=ie.find(Z=>Z.id===h.dataset.toWo);if(b)try{await e.createWorkOrder({floorId:b.floorId,deviceId:b.deviceId,alarmId:b.id,title:`处置告警：${b.title}`,description:b.message}),ue=`已将「${b.title}」转为运维工单并同步 CMMS。`,await E()}catch(Z){je=Z instanceof Error?Z.message:String(Z),L()}})}),t.querySelectorAll("[data-wo-status]").forEach(h=>{h.addEventListener("change",async()=>{if(!y)return;const b=h.dataset.woStatus,Z=h.value;if(je="",Z==="cancelled"){const oe=B.find($e=>$e.id===b);if(oe){const $e=Le(oe);$e.cancelled=!0,$e.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),ue="工单已移入「已取消」分类并锁定编辑。",L()}return}if(Z==="resolved"||Z==="closed"){le=b,ye=Z,L();return}try{await e.updateWorkOrderStatus(b,Z);const oe=B.find($e=>$e.id===b);oe&&Le(oe).history.unshift({at:"刚刚",text:`状态变更为「${ua[Z]}」`}),ue="工单状态已更新并写入审计日志。",await E()}catch(oe){je=oe instanceof Error?oe.message:String(oe),await E()}})}),t.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{le=null,L()}),t.querySelectorAll("[data-close-wo-form]").forEach(h=>{h.addEventListener("submit",async b=>{if(b.preventDefault(),!y)return;const Z=h.dataset.closeWoForm,oe=new FormData(h),$e=String(oe.get("cause")??"").trim(),Me=String(oe.get("solution")??"").trim(),He=String(oe.get("actualCost")??"").trim();try{await e.updateWorkOrderStatus(Z,ye);const Oe=B.find(De=>De.id===Z);if(Oe){const De=Le(Oe);De.cause=$e,De.solution=Me,He&&(De.actualCost=He),De.history.unshift({at:"刚刚",text:`流转至「${ua[ye]}」· 根因：${$e}`})}le=null,H=Z,ue=`工单已更新为「${ua[ye]}」，根因与方案已沉淀归档。`,await E()}catch(Oe){je=Oe instanceof Error?Oe.message:String(Oe),L()}})}),t.querySelectorAll("[data-wo-task]").forEach(h=>{h.addEventListener("change",()=>{if(!y)return;const b=B.find($e=>$e.id===h.dataset.woTask);if(!b)return;const oe=Le(b).tasks.find($e=>$e.id===h.dataset.taskId);oe&&(oe.done=h.checked),L()})})}await E()}const os={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},is={frozen:"已冻结",draft:"草稿",delivered:"已交付"},ot={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},it=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],kt=[{id:"doc-hvac-7f",floorId:S.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:S.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:S.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:S.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],ls={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},Et=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function g(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Fa(t){const e=t.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面")||e.includes("屋顶")||e.includes("天面"))return 999;const s=e.match(/(-?\d+)/);if(!s)return 0;const c=Number(s[1]);return e.startsWith("B")||e.includes("地下")||e.includes("负")?-Math.abs(c):c}const It={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function ma(t){const e=t.trim(),s=e.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test(s)||/屋面|屋顶|天面/.test(e))return"RF";const c=s.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(c)return`B${Number(c[1])}`;const r=e.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(r){const T=/^\d+$/.test(r[1])?Number(r[1]):It[r[1]];if(T)return`B${T}`}if(/首层|一层/.test(e))return"1F";const m=e.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(m){const T=/^\d+$/.test(m[1])?Number(m[1]):It[m[1]];if(T)return`${T}F`}const y=s.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return y?`${Number(y[1])}F`:null}function za(t){return new Promise((e,s)=>{const c=new FileReader;c.onload=()=>typeof c.result=="string"?e(c.result):s(new Error("无法读取图片内容")),c.onerror=()=>s(new Error(`读取文件「${t.name}」失败`)),c.readAsDataURL(t)})}function rs(t){return t.category==="gateway"?t.name.includes("蓝牙")?"蓝牙适配器":"主控网关":t.category==="lighting"?t.name.includes("702")?"702 照明":t.name.slice(0,6):t.category==="hvac"?t.name.includes("VAV")?"VAV-02":t.name.includes("FCU")?"FCU-01":t.name.slice(0,6):t.category==="sensor"?"环境传感":t.name.slice(0,6)}function cs(t,e){const s=t.status!=="connected",c=e.filter(r=>r.hardwareBinding?.protocol===t.protocol);return c.length>0?c.map(r=>{const m=r.connectivity==="offline"||s;return{pointName:r.category==="hvac"?"送风温度 / 阀门开度":r.category==="lighting"?"回路开关 / 亮度反馈":r.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:r.name,value:m?"无上报":r.category==="hvac"?"23.4°C · 62%":r.category==="lighting"?"开启 · 80%":r.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:m?"46 分钟前":"12 秒前",quality:m?r.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${t.protocol.toUpperCase()} 采集通道汇总点`,deviceName:t.name,value:s?"采样延迟":"正常上报",interval:"60s",lastSeen:s?"38 分钟前":"9 秒前",quality:s?"delayed":"online"}]}async function ds(t,e,s){const c=new URLSearchParams(window.location.hash.split("?")[1]??""),r=c.get("sec");let m=r==="floors"||r==="projects"?"project_config":r==="floorplan"||r==="devices"||r==="inventory"?"devices":r==="network"||r==="network_topo"?"network_topo":r==="connections"?"connections":"overview",y=r==="inventory"?"list":"marking",T="binding",j="",M="all",W=Za(),ie=!1,B="",V="device",me="all",ee="",Q=!1,N=!1,X="mesh",F=1,pe=0,ge=0,H=await e.getSpatialTree(),fe=[],le=[],ye=[];const ne={...ls},O=[];let P=W.level==="all-projects"?H.projects[0]?.id??S.projectId:W.projectId,te=W.level==="building"||W.level==="floor"?W.buildingId:H.buildings.find(w=>w.projectId===P)?.id??H.buildings[0]?.id??S.buildingId,re=W.level==="floor"?W.floorId:H.floors.find(w=>w.buildingId===te&&w.id===S.floorId)?.id??H.floors.find(w=>w.buildingId===te)?.id??S.floorId,ue=r==="floors"?re:null,je="all",Le="zones",E=c.get("new")==="project",G=!1,Ce=!1,L=null,v=!1,$=!1,D=!1,u=!1,A=!1,J=null,Ie=new Set,Pe=null,Be=!1,qe=[];const ae=[];let h=null,b=null,Z=!1,oe=!1,$e=null,Me=null,He=3,Oe=!1,De=[],Ge=null,ce="",be="";const p=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),x=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],de=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:S.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:S.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:S.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:S.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],Ee=new Map;function we(){E=!1,G=!1,Ce=!1,L=null,v=!1,$=!1,D=!1,u=!1,A=!1,J=null}function Fe(){return!!(E||G||Ce||L||v||$||D||u||A||J)}const Ne=w=>{if(!document.body.contains(t)){document.removeEventListener("keydown",Ne);return}w.key==="Escape"&&(Pe?(Pe=null,C()):Fe()?(we(),C()):N&&(N=!1,oe=!1,C()))};document.addEventListener("keydown",Ne);function xe(){return H.floors}function Se(w){return[...H.floors.filter(k=>k.buildingId===w)].sort((k,q)=>Fa(q.name)-Fa(k.name))}function ze(){return H.zones}function Re(w){return[...w===S.floorId?fe:[],...O.filter(q=>q.floorId===w)]}function Ue(w){return w?ze().find(k=>k.id===w)?.name.replace(/^7F\s*/,"")??w:"未分配功能区"}function wa(w){const k=H.buildings.find(_=>_.id===w);if(!k)return;P=k.projectId,te=k.id;const q=Se(k.id);q.some(_=>_.id===re)||(re=q.find(_=>_.id===S.floorId)?.id??q[0]?.id??""),ue&&!q.some(_=>_.id===ue)&&(ue=null),W=ga(re?{level:"floor",projectId:k.projectId,buildingId:k.id,floorId:re}:{level:"building",projectId:k.projectId,buildingId:k.id}),b=null,N=!1,oe=!1,F=1,pe=0,ge=0}function ra(w){re=w;const k=xe().find(q=>q.id===w);if(k){te=k.buildingId;const q=H.buildings.find(_=>_.id===k.buildingId);q&&(P=q.projectId),W=ga({level:"floor",projectId:P,buildingId:k.buildingId,floorId:k.id})}b=null,N=!1,oe=!1,F=1,pe=0,ge=0}async function ke(){be="";const[w,k,q,_]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(S.floorId).catch(()=>[]),e.listConnections(P),e.listDeliveryBatches(S.floorId)]);if(H=w,fe=k,le=q,ye=_,H.projects.length===0)P="",te="",re="",ue=null;else{H.projects.some(n=>n.id===P)||(P=H.projects[0].id);const a=H.buildings.filter(n=>n.projectId===P);a.some(n=>n.id===te)||(te=a[0]?.id??"");const o=te?Se(te):[];o.some(n=>n.id===re)||(re=o.find(n=>n.id===S.floorId)?.id??o[0]?.id??""),ue&&!o.some(n=>n.id===ue)&&(ue=null)}const z=Re(re);b&&!z.some(a=>a.id===b)&&(b=null,N=!1),Z=z.find(a=>a.id===b)?.physicalInstalled??!1,C()}function Te(){const w=t.querySelector('[data-role="dep-viewport"]');w&&(w.style.transform=`translate(${pe}px, ${ge}px) scale(${F})`);const k=t.querySelector('[data-role="dep-zoom-label"]');k&&(k.textContent=`${Math.round(F*100)}%`)}function Xe(w){be="",w.connectivity==="offline"?be=`单机回读自检未通过（FAIL）：「${w.name}」当前离线，请核查网关链路或中继覆盖。`:ce=`单机回读自检通过（PASS）：「${w.name}」指令下发与状态回读一致，已安全复位。`,C()}function ca(){be="";const w=Re(re),k=w.filter(l=>l.connectivity==="offline"),q=w.length-k.length,_=new Date;Ge={ranAt:`${String(_.getHours()).padStart(2,"0")}:${String(_.getMinutes()).padStart(2,"0")}:${String(_.getSeconds()).padStart(2,"0")}`,total:w.length,passed:q,failed:k.length,failedNames:k.map(l=>l.name)},k.length>0?be=`全层批量自检完成：${q}/${w.length} 台通过，${k.length} 台异常（${k.map(l=>l.name).join("、")}）。`:ce=`全层批量自检全部通过（${q}/${w.length}），设备已自动安全复位。`,C()}function Sa(){const w=Re(re),k=[],q=w.filter(o=>o.connectivity==="offline"),_=w.filter(o=>!o.planPoint),z=w.filter(o=>p.get(o.id)?.proxy).length,l=w.filter(o=>p.get(o.id)?.relay).length,a=w.length?l/w.length:0;q.length>0?q.forEach(o=>k.push({level:"fail",title:`节点不可达：${o.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:o.id})):k.push({level:"ok",title:"全网节点可达性正常",detail:`${w.length} 台设备均正常响应心跳。`}),z<1?k.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):k.push({level:"ok",title:`代理节点配置合理（${z} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),a>.25&&w.length>=4&&k.push({level:"warn",title:`中继比例偏高（${Math.round(a*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),_.length>0&&k.push({level:"warn",title:`尚有 ${_.length} 台未完成设备标记`,detail:"请在「设备管理 → 设备标记」中补齐平面坐标以便施工定位。"}),De=k,ce=`已完成蓝牙 Mesh 网络体检（检测 ${w.length} 台节点，发现 ${k.filter(o=>o.level!=="ok").length} 项关注）。`,C()}function Ka(){const w=Re(re),k=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...w.map(l=>[l.name,l.category,Ue(l.logicalZoneId),l.planPoint?`${Math.round(l.planPoint.x*100)}%/${Math.round(l.planPoint.y*100)}%`:"未标记",l.hardwareBinding?`${l.hardwareBinding.protocol} ${l.hardwareBinding.networkAddress}`:"未绑定",l.physicalInstalled?"已复核":"待复核",l.connectivity==="online"?"在线":"离线"].join(","))],q=new Blob([`\uFEFF${k.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),_=URL.createObjectURL(q),z=document.createElement("a");z.href=_,z.download="pacom-device-list.csv",z.click(),URL.revokeObjectURL(_)}function fa(w){const k=new Set(Se(w.id).map(_=>ma(_.name)??_.name.toUpperCase())),q=[];for(let _=1;_<=w.aboveFloors;_+=1){const z=`${_}F`;k.has(z)||q.push({kind:"above",level:_,name:z})}for(let _=1;_<=w.belowFloors;_+=1){const z=`B${_}`;k.has(z)||q.push({kind:"below",level:-_,name:z})}return w.hasRoof&&!k.has("RF")&&q.push({kind:"roof",level:99,name:"RF"}),q}async function ba(w){const k=H.buildings.find(_=>_.id===w);if(!k)return 0;const q=fa(k);for(const _ of q)await e.upsertFloor?.({buildingId:k.id,kind:_.kind,level:_.level,name:_.name});return q.length}const xa={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。",granularity:"building"},project_config:{title:"项目配置",subtitle:"在同一视图内贯通管理项目、园区楼宇、楼层平面底图、功能区与竣工图纸。",granularity:"project"},devices:{title:"设备管理",subtitle:"围绕当前楼层完成设备标记、设备列表核查、参数下发、自检与设备分组。",granularity:"floor"},network_topo:{title:"网络拓扑",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、环境等异构子系统通道及传感器采集质量。",granularity:"project"}};function Qe(w,k="layers"){return`
      <div class="dep-empty-card">
        <div class="dep-empty-icon">${Ae(k,20)}</div>
        <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
        <span class="pacom-row-sub" style="max-width:440px;">按「创建项目 → 添加楼宇与楼层 → 上传平面底图」完成建档后，即可开展设备标记、网络同步与交付验收。</span>
        <div class="dep-empty-steps">
          <span>1. 创建项目</span>
          <span>→</span>
          <span>2. 添加楼宇与楼层</span>
          <span>→</span>
          <span>3. 上传平面图</span>
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${w?"":"disabled"}>+ 创建第一个项目</button>
      </div>`}function da(){const w=(k,q,_,z=!1)=>`
      <button type="button" class="pacom-unified-item" aria-current="${m===k}" data-dep-nav="${k}">
        ${Ae(q,16)}
        <span>${_}</span>
        ${z?'<span class="dep-rail-dot" title="有变更待同步至边缘网关"></span>':""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${w("overview","layout-dashboard","部署总览")}
          ${w("project_config","layers","项目配置")}
          ${w("devices","map-pin","设备管理")}
          ${w("network_topo","waypoints","网络拓扑",Oe)}
          ${w("connections","plug","系统接入")}
        </div>
      </aside>
    `}function Aa(w){return H.projects.length===0?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${w?"":"disabled"}>+ 新建项目</button>`:m==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出清单</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${w?"":"disabled"}>+ 交付冻结</button>
      `:m==="project_config"?`<button type="button" class="pacom-btn" data-open-new-proj="1" ${w?"":"disabled"}>+ 新建项目</button>`:m==="devices"?`${`
        <div class="pacom-tabs" role="tablist" aria-label="设备管理视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${y==="marking"}" data-dev-subtab="marking">设备标记</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${y==="list"}" data-dev-subtab="list">设备列表</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${y==="groups"}" data-dev-subtab="groups">设备分组</button>
        </div>`}${y==="marking"?'<button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>':y==="list"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${w?"":"disabled"}>+ 新建分组</button>`}`:m==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${w?"":"disabled"}>${Oe?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:`
      <button type="button" class="pacom-btn" data-edge-restart="service" ${w?"":"disabled"}>重启边缘服务</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${w?"":"disabled"}>+ 新增接入通道</button>
    `}function Ja(w){if(H.projects.length===0)return Qe(w,"layout-dashboard");const k=te?Se(te):[],q=k.filter(n=>!!n.plan).length,_=k.flatMap(n=>Re(n.id)),z=_.filter(n=>!!n.planPoint).length,l=_.filter(n=>n.connectivity==="online").length,a=_.filter(n=>n.physicalInstalled).length,o=k.filter(n=>Re(n.id).length>0&&!Oe).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${k.length>0&&q===k.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 项目与底图</span>
          <div class="pacom-kpi-value">${q}<span class="pacom-kpi-unit">/ ${k.length} 层</span></div>
          <span class="pacom-kpi-delta">${k.length>0&&q===k.length?"全部底图就绪":`尚缺 ${Math.max(0,k.length-q)} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="marking" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${_.length>0&&z===_.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${z}<span class="pacom-kpi-unit">/ ${_.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${x.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${_.length>0&&l===_.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${l}<span class="pacom-kpi-unit">/ ${_.length} 台</span></div>
          <span class="pacom-kpi-delta">${_.length-l>0?`${_.length-l} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${Oe?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${o}<span class="pacom-kpi-unit">/ ${k.length} 层</span></div>
          <span class="pacom-kpi-delta">${Oe?"有变更待下发 →":`基线 v${He}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="list" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${_.length>0&&a===_.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${a}<span class="pacom-kpi-unit">/ ${_.length} 台</span></div>
          <span class="pacom-kpi-delta">${_.length>0&&a===_.length?"可交付冻结":`待复核 ${_.length-a} 台 →`}</span>
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
                ${k.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前楼宇暂无楼层</strong><span>请先在「项目配置」中生成楼层并上传底图。</span></div></td></tr>':k.map(n=>{const i=Re(n.id),I=ze().filter(K=>K.floorId===n.id),f=i.filter(K=>!!K.planPoint).length,U=i.filter(K=>K.connectivity==="online").length,ve=i.filter(K=>K.physicalInstalled).length,se=!!n.plan,Y=se&&i.length>0&&f===i.length&&ve===i.length&&U===i.length&&!Oe;return`
                            <tr>
                              <td><strong>${g(n.name)}</strong><div class="pacom-row-sub">${n.areaSqm?`${n.areaSqm} m²`:"待补面积"}</div></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-expand="1" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${se?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${se?`已传图 · ${I.length} 区`:"待传底图"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="marking" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${i.length>0&&f===i.length?"pacom-dot--online":i.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${i.length>0?`${f}/${i.length}`:"未标记"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${i.length>0&&U===i.length?"pacom-dot--online":i.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${i.length>0?`${U}/${i.length}`:"—"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${i.length===0?"pacom-dot--offline":Oe?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${i.length===0?"—":Oe?"待同步":`v${He}`}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="list" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${i.length>0&&ve===i.length?"pacom-dot--online":i.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${i.length>0?`${ve}/${i.length}`:"—"}</span></button></td>
                              <td style="text-align:right;"><span class="pacom-badge ${Y?"pacom-badge--online":i.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${Y?"可验收交付":i.length>0?"实施中":"待配置"}</span></td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${Ge?`<div class="pacom-banner ${Ge.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${Ge.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${Ge.passed}/${Ge.total} 台${Ge.failedNames.length?` · 异常：${Ge.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${ye.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${ye.map(n=>`
                    <tr>
                      <td><div style="font-weight:450;">${g(n.versionTag)}</div><div class="pacom-row-sub"><code>${g(n.id)}</code></div></td>
                      <td><strong>${n.verifiedCount}</strong> / ${n.deviceCount} 台</td>
                      <td><div>${g(n.frozenBy)}</div><div class="pacom-row-sub">${g(n.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${is[n.status]??n.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function ja(w){if(H.projects.length===0)return Qe(w,"layers");const k=H.projects.find(f=>f.id===P)??H.projects[0],q=H.buildings.filter(f=>f.projectId===k.id),_=q.reduce((f,U)=>f+Se(U.id).length,0),z=q.find(f=>f.id===te)??q[0]??null,l=z?Se(z.id):[],a=l.filter(f=>!f.plan).length,o=l.filter(f=>ze().filter(U=>U.floorId===f.id).length===0).length,n=l.filter(f=>je==="missing_plan"?!f.plan:je==="missing_zone"?ze().filter(U=>U.floorId===f.id).length===0:!0),i=z?fa(z):[],I=k.location?`${k.location.lng.toFixed(4)}, ${k.location.lat.toFixed(4)}`:"未设置坐标";return`
      <div class="dep-project-strip">
        <div class="dep-project-strip-main">
          <div class="dep-project-cover">
            <img src="${g(k.imageUrl??"./media/gzlab.jpg")}" alt="${g(k.name)}" />
          </div>
          <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">${g(k.name)}</strong>
              <span class="pacom-badge pacom-badge--neutral">${q.length} 栋楼宇</span>
              <span class="pacom-badge pacom-badge--neutral">${_} 个楼层</span>
            </div>
            <span class="pacom-row-sub">${g(k.city||"未填城市")}${k.address?` · ${g(k.address)}`:""} · 坐标 ${g(I)}</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-edit-proj="1" ${w?"":"disabled"}>编辑项目</button>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <div>
            <h2 class="pacom-section-title">园区楼宇（${q.length} 栋）</h2>
            <span class="pacom-row-sub">点击楼宇卡片切换下方楼层列表，点「编辑参数」修改外观与层数</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-bld="1" ${w?"":"disabled"}>+ 新建楼宇</button>
        </div>
        ${q.length===0?`
            <div class="dep-empty-card">
              <div class="dep-empty-icon">${Ae("building-2",20)}</div>
              <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${g(k.name)} 暂无楼宇</strong>
              <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
              <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${w?"":"disabled"}>+ 添加第一栋楼宇</button>
            </div>`:`
            <div class="dep-building-grid">
              ${q.map(f=>{const U=Se(f.id),ve=U.filter(he=>!!he.plan).length,se=U.length>0?Math.round(ve/U.length*100):0,Y=fa(f),K=z?.id===f.id,R=U.length===0?"pacom-badge--neutral":ve===U.length?"pacom-badge--online":"pacom-badge--warning";return`
                    <article class="dep-building-card ${K?"is-active":""}" data-select-building="${g(f.id)}">
                      <div class="dep-building-stage">
                        <img src="${g(f.imageUrl??"./media/building-e.webp")}" alt="${g(f.name)}" />
                      </div>
                      <div class="dep-building-body">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${g(f.name)}</strong>
                          <span class="pacom-badge ${R}">${U.length===0?"未建层":`${ve}/${U.length} 底图`}</span>
                        </div>
                        <div class="pacom-row-sub">地上 ${f.aboveFloors} 层${f.belowFloors>0?` · 地下 ${f.belowFloors} 层`:""}${f.hasRoof?" · RF":""}${f.areaSqm?` · ${f.areaSqm} m²`:""}</div>
                        <div class="pacom-progress-track">
                          <div class="pacom-progress-fill" style="width:${se}%; background:${se===100?"var(--pacom-status-online)":"var(--pacom-accent-solid)"};"></div>
                        </div>
                        ${Y.length>0?`<div style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:12px; color:var(--pacom-text-secondary);">
                                 <span>尚缺 ${Y.length} 个楼层</span>
                                 <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="height:22px; padding:0 6px; font-size:12px;" data-fill-missing-floors="${g(f.id)}" ${w?"":"disabled"}>一键补齐</button>
                               </div>`:""}
                      </div>
                      <div class="dep-building-foot">
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${g(f.id)}" ${w?"":"disabled"}>编辑参数</button>
                        <span class="pacom-row-sub" style="font-size:12px; color:${K?"var(--pacom-accent-fg)":"var(--pacom-text-secondary)"};">${K?"当前查看中":"点击切换楼层"}</span>
                      </div>
                    </article>`}).join("")}
              <button type="button" class="dep-building-add-card" data-open-new-bld="1" ${w?"":"disabled"}>
                ${Ae("plus",20)}
                <span style="font-size:13px;">新建楼宇</span>
              </button>
            </div>`}
      </section>

      ${z?`
          <section class="pacom-section">
            <div class="pacom-section-head">
              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <h2 class="pacom-section-title">${g(z.name)} 楼层与底图（${l.length}）</h2>
                <div class="pacom-count-pills">
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${je==="all"}" data-floor-list-filter="all">全部 <span class="pacom-count-num">${l.length}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${je==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 <span class="pacom-count-num">${a}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${je==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 <span class="pacom-count-num">${o}</span></button>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                ${i.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${g(z.id)}" ${w?"":"disabled"}>一键补齐 ${i.length} 层</button>`:""}
                <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-floor="1" ${w?"":"disabled"}>+ 新增楼层</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-batch-modal="1" ${w?"":"disabled"}>批量导入底图</button>
              </div>
            </div>

            ${l.length===0?`
                <div class="dep-empty-card">
                  <div class="dep-empty-icon">${Ae("layers",20)}</div>
                  <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${g(z.name)} 暂无楼层</strong>
                  <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${g(z.id)}" ${w?"":"disabled"}>一键生成全部楼层</button>
                    <button type="button" class="pacom-btn" data-open-new-floor="1" ${w?"":"disabled"}>+ 手动新增楼层</button>
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
                        ${n.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':n.map(f=>{const U=ze().filter(R=>R.floorId===f.id),ve=[...kt,...ae].filter(R=>R.floorId===f.id),se=Re(f.id),Y=ue===f.id,K=l.filter(R=>R.id!==f.id);return`
                                    <tr>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:7px;">
                                          <span class="pacom-dot ${f.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                          <strong>${g(f.name)}</strong>
                                        </div>
                                      </td>
                                      <td><span class="pacom-row-sub">${f.areaSqm?`${f.areaSqm} m²`:"—"}</span></td>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:8px;">
                                          ${f.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${g(z.name)} ${g(f.name)} 平面底图" data-lb-src="${g(f.plan.imageUrl)}" title="查看大图"><img src="${g(f.plan.imageUrl)}" alt="${g(f.name)}" /></button>
                                                 <span class="pacom-badge pacom-badge--online">已就绪</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                          <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="cursor:pointer; height:24px; padding:0 6px; font-size:12px;">
                                            <span>${f.plan?"替换":"上传"}</span>
                                            <input type="file" name="floorPlan_${g(f.id)}" accept="image/*" data-upload-floor="${g(f.id)}" style="display:none;" ${w?"":"disabled"} />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        ${U.length>0?`<span>${U.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${g(U.slice(0,2).map(R=>R.name.replace(/^7F\s*/,"")).join("、"))}${U.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                                      </td>
                                      <td><span class="pacom-row-sub">${ve.length} 份</span></td>
                                      <td>
                                        <div style="display:flex; justify-content:flex-end; gap:6px;">
                                          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-expand-floor="${g(f.id)}">${Y?"收起配置":"展开配置"}</button>
                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${g(f.id)}">设备标记 →</button>
                                        </div>
                                      </td>
                                    </tr>
                                    ${Y?`
                                        <tr class="pacom-table-detail-row">
                                          <td colspan="6">
                                            <div class="dep-floor-expand-grid">
                                              <div class="dep-floor-expand-col">
                                                <div class="dep-plan-preview-box" style="min-height:260px;" data-single-floor-drop="${g(f.id)}">
                                                  <div class="dep-plan-toolbar">
                                                    ${f.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${g(z.name)} ${g(f.name)} 平面底图" data-lb-src="${g(f.plan.imageUrl)}">查看大图</button>`:""}
                                                    <label class="dep-plan-tool-btn" style="cursor:pointer;">
                                                      <span>${f.plan?"替换底图":"上传底图"}</span>
                                                      <input type="file" name="floorPlanDrop_${g(f.id)}" accept="image/*" data-upload-floor="${g(f.id)}" style="display:none;" ${w?"":"disabled"} />
                                                    </label>
                                                    ${f.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${g(f.id)}" ${w?"":"disabled"}>清空</button>`:""}
                                                  </div>
                                                  ${f.plan?`<img src="${g(f.plan.imageUrl)}" alt="${g(f.name)} 平面图" style="width:100%; max-height:290px; object-fit:contain; display:block;" />`:`<div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:24px; text-align:center;">
                                                           <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${g(f.name)} 2D 平面图到此处</strong>
                                                           <span class="pacom-row-sub">支持透明 WebP / PNG / JPG</span>
                                                         </div>`}
                                                </div>
                                              </div>

                                              <div class="dep-floor-expand-col">
                                                <div class="pacom-settings-card" style="padding:10px 16px;">
                                                  <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                                                    <form data-save-floor="${g(f.id)}" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                                                      <input class="pacom-input" name="fName" value="${g(f.name)}" aria-label="楼层名称" style="width:76px; height:32px; flex:none;" required ${w?"":"disabled"} />
                                                      <input class="pacom-input" name="fArea" type="number" step="0.1" value="${g(f.areaSqm??"")}" placeholder="面积 m²" aria-label="建筑面积" style="width:110px; height:32px; flex:none;" ${w?"":"disabled"} />
                                                      <button type="submit" class="pacom-btn" ${w?"":"disabled"}>保存</button>
                                                    </form>
                                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-delete-floor="${g(f.id)}" ${!w||se.length>0?`disabled title="${se.length>0?`已关联 ${se.length} 台设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                                                  </div>
                                                </div>

                                                <div class="pacom-settings-card" style="padding:4px 16px;">
                                                  <div class="pacom-setting-row" style="padding:10px 0; justify-content:space-between; gap:8px;">
                                                    <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${Le==="zones"}" data-floor-detail-tab="zones">功能区（${U.length}）</button>
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${Le==="docs"}" data-floor-detail-tab="docs">竣工图纸与手册（${ve.length}）</button>
                                                    </div>
                                                    ${Le==="zones"?U.length>0&&K.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-open-copy-zones="${g(f.id)}" ${w?"":"disabled"}>复用至其他层…</button>`:"":`<label class="pacom-btn pacom-btn--sm" style="cursor:pointer;"><span>+ 关联文件</span><input type="file" name="attachDoc_${g(f.id)}" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${g(f.id)}" style="display:none;" ${w?"":"disabled"} /></label>`}
                                                  </div>
                                                  ${Le==="zones"?`
                                                        ${U.length===0?`
                                                            <div class="pacom-setting-row" style="padding:10px 0; flex-direction:column; align-items:flex-start; gap:8px;">
                                                              <span class="pacom-row-sub">暂未划分功能区，可一键套用常用模板：</span>
                                                              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                                                ${Et.map(R=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${g(R.key)}" data-tpl-floor="${g(f.id)}" ${w?"":"disabled"}>+ ${g(R.label)}</button>`).join("")}
                                                              </div>
                                                            </div>`:U.map(R=>h===R.id?`
                                                                      <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-save-edit-zone="${g(R.id)}" data-zone-floor="${g(f.id)}">
                                                                        <input class="pacom-input" name="zName" value="${g(R.name)}" style="width:180px; height:30px; flex:none;" required />
                                                                        <select class="pacom-select" name="zCat" style="width:110px; height:30px;">
                                                                          ${Object.keys(ot).map(he=>`<option value="${he}" ${R.category===he?"selected":""}>${ot[he]}</option>`).join("")}
                                                                        </select>
                                                                        <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                                                      </form>`:`
                                                                      <div class="pacom-setting-row" style="padding:9px 0;">
                                                                        <div class="pacom-setting-meta" style="min-width:140px;">
                                                                          <span class="pacom-setting-title">${g(R.name)} <span class="pacom-badge pacom-badge--neutral">${g(ot[R.category]??R.category)}</span></span>
                                                                        </div>
                                                                        <div class="pacom-setting-control">
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${g(R.id)}" ${w?"":"disabled"}>编辑</button>
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${g(R.id)}" ${w?"":"disabled"}>删除</button>
                                                                        </div>
                                                                      </div>`).join("")}
                                                        <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-add-zone="${g(f.id)}">
                                                          <input class="pacom-input" name="zoneName" placeholder="新功能区名称（如：${g(f.name)} 东侧实验区）" style="width:210px; height:32px; flex:none;" required ${w?"":"disabled"} />
                                                          <select class="pacom-select" name="zoneCat" style="width:112px; height:32px;" ${w?"":"disabled"}>
                                                            <option value="lab">实验区</option>
                                                            <option value="office">办公区</option>
                                                            <option value="meeting">会议室</option>
                                                            <option value="corridor">走廊/公区</option>
                                                            <option value="utility">机房/后勤</option>
                                                            <option value="outdoor">露台/活动区</option>
                                                          </select>
                                                          <button type="submit" class="pacom-btn" ${w?"":"disabled"}>+ 添加</button>
                                                        </form>`:ve.length===0?'<div class="pacom-setting-row" style="padding:12px 0;"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':ve.map(R=>`
                                                              <div class="pacom-setting-row" style="padding:9px 0;">
                                                                <div class="pacom-setting-meta" style="min-width:140px;">
                                                                  <span class="pacom-setting-title">${g(R.name)}</span>
                                                                  <span class="pacom-row-sub">${g(R.category)} · ${g(R.size)} · ${g(R.updatedAt)}</span>
                                                                </div>
                                                                <div class="pacom-setting-control">
                                                                  <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${g(R.id)}">查阅</button>
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
    `}function La(w){if(!N||m!=="devices"||y==="groups")return"";const q=Re(re).find(a=>a.id===b)??null;if(!q)return"";const _=p.get(q.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${re.slice(-4)}`},z=x.filter(a=>a.deviceId===q.id),l=Ee.get(q.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450};return`
      <aside class="pacom-drawer" style="width:376px;" aria-label="设备配置抽屉">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${g(q.name)}</h2>
            <div class="pacom-row-sub">${g(Ue(q.logicalZoneId))} · v${q.version}</div>
          </div>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${Ae("x",16)}</button>
        </div>

        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${w?"":"disabled"}>${oe?"点击图纸定位中…":"点图更新坐标"}</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${g(q.id)}">Ping 闪灯 5s</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${T==="binding"}" data-drawer-tab="binding">绑定与安装</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${T==="params"}" data-drawer-tab="params">自治参数</button>
        </div>

        ${T==="binding"?`
            ${q.category==="lighting"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">回路可视化灯点（${z.length}）</span>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${g(q.id)}" ${w?"":"disabled"}>+ 添加灯点</button>
                  </div>
                  ${z.map(a=>`
                      <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                        <span><strong>${g(a.channel)}</strong> · ${g(a.label)}</span>
                        <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:12px;" data-del-light-marker="${g(a.id)}" ${w?"":"disabled"}>删除</button>
                      </div>`).join("")}
                </div>`:""}

            ${q.category!=="hvac"&&q.category!=="meter"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                    <code style="font-size:12px;">${g(_.meshUuid)}</code>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Proxy 代理（建议每层 2–3 个）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${_.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${g(q.id)}" ${w?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${_.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${g(q.id)}" ${w?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                </div>`:""}

            <form data-role="binding-form" class="pacom-control-box" style="gap:10px;">
              <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">通信协议</span>
                  <select class="pacom-select" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(a=>`<option value="${a}" ${q.hardwareBinding?.protocol===a?"selected":""}>${a.toUpperCase()}</option>`).join("")}
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">网络地址 / 主题</span>
                  <input class="pacom-input" name="networkAddress" placeholder="地址或主题" value="${g(q.hardwareBinding?.networkAddress??"")}" />
                </label>
              </div>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:10px;">
                <label class="dep-field" style="flex:1;">
                  <span class="dep-field-label">端口 / 回路</span>
                  <input class="pacom-input" name="portOrChannel" placeholder="端口或回路" value="${g(q.hardwareBinding?.portOrChannel??"")}" />
                </label>
                <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; height:32px; flex-shrink:0;">
                  <span>物理已复核</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${Z}" data-toggle-phys="1" ${w?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                </span>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${w?"":"disabled"}>保存绑定与复核（v${q.version}）</button>
            </form>`:`
            <form data-save-dev-params="${g(q.id)}" class="pacom-control-box" style="gap:10px;">
              <div>
                <div style="font-size:14px; font-weight:450;">人感与光感自治参数</div>
                <div class="pacom-row-sub">自动关灯延时、恢复自动延时与光照度门限</div>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${l.offDelayMin}" ${w?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" value="${l.restoreMin}" ${w?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" value="${l.luxOn}" ${w?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" value="${l.luxOff}" ${w?"":"disabled"} /></label>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${w?"":"disabled"}>下发设备参数</button>
            </form>`}
      </aside>
    `}function Ya(w){if(H.projects.length===0)return`
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${Qe(w,"map-pin")}</div>
        </main>`;const k=te?Se(te):[],q=k.find(n=>n.id===re)??k[0],_=Re(re),z=ze().filter(n=>n.floorId===re),l=N?_.find(n=>n.id===b)??null:null,a=ee.trim().toLowerCase(),o=_.filter(n=>!(me==="unverified"&&n.physicalInstalled||me==="unplaced"&&n.planPoint||a&&!`${n.name} ${Ue(n.logicalZoneId)}`.toLowerCase().includes(a)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${Ae("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${g(ee)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${Q?"is-active":""}" data-toggle-hud-pool="1">设备池 ${_.length}</button>
            <button type="button" class="pacom-hud-pill" data-open-new-dev="1" ${w?"":"disabled"}>+ 新增设备</button>
          </div>

          ${Q?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${g(q?.name??"7F")} 设备池（${o.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${Ae("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-count-pills">
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${me==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${_.length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${me==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${_.filter(n=>!n.physicalInstalled).length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${me==="unplaced"}" data-dev-filter="unplaced">未标记 <span class="pacom-count-num">${_.filter(n=>!n.planPoint).length}</span></button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${o.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':o.map(n=>`
                            <div class="pacom-row ${n.id===b&&N?"is-selected":""}" data-pick-dev="${g(n.id)}" style="padding:8px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${g(n.name)}</div>
                                <div class="pacom-row-sub">${g(Ue(n.logicalZoneId))} · ${n.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${n.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${n.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${oe?"crosshair":"grab"};">
          ${q?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${pe}px, ${ge}px) scale(${F});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${g(q.plan.imageUrl)}" alt="${g(q.name)} 平面图" />
                  ${V==="zone"?z.map(n=>{const i=ne[n.id];return i?`<div class="pacom-zone-hotspot is-active" style="left:${i.left}%; top:${i.top}%; width:${i.width}%; height:${i.height}%;"><span class="pacom-zone-tag">${g(n.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${_.filter(n=>n.planPoint).map(n=>`
                      <button type="button" class="pacom-pin ${n.id===b&&N?"is-selected":""} ${n.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(n.planPoint.x*100).toFixed(2)}%; top:${(n.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${g(n.id)}" title="${g(n.name)}">
                        <span class="pacom-dot ${n.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${g(rs(n))}</span>
                      </button>`).join("")}
                  ${V==="light_marker"||l?.category==="lighting"?x.filter(n=>_.some(i=>i.id===n.deviceId)).map(n=>`
                            <span class="dep-light-dot" style="left:${(n.x*100).toFixed(1)}%; top:${(n.y*100).toFixed(1)}%;" title="${g(n.label)}（${g(n.channel)}）">
                              ${Ae("sparkles",12)}<span>${g(n.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${g(re)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${k.map(n=>`
              <button type="button" class="pacom-elev-item ${n.id===re?"is-active":""}" data-scrubber-floor="${g(n.id)}" title="${g(n.name)}${n.plan?" · 已传底图":" · 待传底图"}">
                ${n.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${g(n.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${V==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${V==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${V==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${Ae("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(F*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${Ae("plus",16)}</button>
        </div>
      </main>
    `}function Qa(w){if(H.projects.length===0)return Qe(w,"list");const k=Re(re),q=j.trim().toLowerCase(),_=k.filter(l=>!(M==="online"&&l.connectivity!=="online"||M==="offline"&&l.connectivity!=="offline"||M==="unverified"&&l.physicalInstalled||q&&!`${l.name} ${Ue(l.logicalZoneId)} ${l.hardwareBinding?.protocol??""}`.toLowerCase().includes(q))),z=k.filter(l=>l.connectivity==="online").length;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${g(j)}" aria-label="搜索设备列表" />
          <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
            <option value="all" ${M==="all"?"selected":""}>全部状态（${k.length}）</option>
            <option value="online" ${M==="online"?"selected":""}>仅看在线（${z}）</option>
            <option value="offline" ${M==="offline"?"selected":""}>仅看离线（${k.length-z}）</option>
            <option value="unverified" ${M==="unverified"?"selected":""}>待物理复核（${k.filter(l=>!l.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${Ae("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-dev="1" ${w?"":"disabled"}>+ 新增设备</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-export-inv="1">导出 CSV</button>
        </div>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${_.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词、切换筛选，或点击「+ 新增设备」。</span></div></td></tr>':_.map(l=>`
                        <tr style="cursor:pointer;" data-open-dev-drawer="${g(l.id)}">
                          <td><div style="font-weight:450;">${g(l.name)}</div><div class="pacom-row-sub">${g(Ue(l.logicalZoneId))} · v${l.version}</div></td>
                          <td><span class="pacom-badge ${l.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${l.planPoint?`${Math.round(l.planPoint.x*100)}%,${Math.round(l.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${l.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${l.hardwareBinding?l.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${l.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${l.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${l.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${l.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${g(l.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-dev-params="${g(l.id)}">配置</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${g(l.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${_.length} / ${k.length} 台设备 · ${z} 在线 · ${k.length-z} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dev-subtab="marking">切换至设备标记 →</button>
        </div>
      </div>
    `}function Ca(w){if(H.projects.length===0)return Qe(w,"folder-kanban");const k=de.filter(z=>z.floorId===re||re===S.floorId&&z.floorId===S.floorId),q=k.filter(z=>z.track==="mesh_auto"),_=k.filter(z=>z.track==="cloud_biz");return`
      <div class="pacom-grid-2">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${q.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${q.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':q.map(z=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${g(z.name)} <span class="pacom-badge pacom-badge--neutral">${g(z.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${z.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${g(z.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${_.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${_.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':_.map(z=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${g(z.name)} <span class="pacom-badge pacom-badge--neutral">${g(z.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${z.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${g(z.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>
      </div>
    `}function pa(w){if(H.projects.length===0)return Qe(w,"waypoints");const k=Re(re),q=ze().filter(i=>i.floorId===re),_=k.filter(i=>i.category!=="hvac"&&i.category!=="meter"),z=_.filter(i=>p.get(i.id)?.proxy).length,l=_.filter(i=>p.get(i.id)?.relay).length,a=k.filter(i=>i.category==="gateway"),o=k.filter(i=>p.get(i.id)?.relay||p.get(i.id)?.proxy),n=k.filter(i=>i.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge ${Oe?"pacom-badge--warning":"pacom-badge--online"}">${Oe?"有变更待同步":"协同锁空闲 · 已同步"}</span>
            <span class="pacom-row-sub">Mesh 节点 ${_.length} 台 · Proxy ${z} 个 · Relay ${l} 个 · 边缘基线 v${He}</span>
          </div>
        </div>
        ${De.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${De.map(i=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${g(i.title)}</strong> <span class="pacom-row-sub">· ${g(i.detail)}</span></div>
                      <span class="pacom-badge ${i.level==="ok"?"pacom-badge--online":i.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${i.level==="ok"?"通过":i.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达设备标记）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${X==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${X==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${X==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${a.length===0?'<div class="pacom-row-sub">本层暂未配置网关节点。</div>':a.map(i=>`
                          <button type="button" class="dep-topo-node ${i.connectivity==="offline"?"is-issue":""}" data-topo-jump="${g(i.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(i.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                            <span class="pacom-row-sub">${g(i.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                          </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${o.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，可在「设备管理」抽屉中为传感器开启。</div>':o.map(i=>{const I=p.get(i.id);return`
                            <button type="button" class="dep-topo-node ${i.connectivity==="offline"?"is-issue":""}" data-topo-jump="${g(i.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(i.name)}</strong><span class="pacom-badge pacom-badge--accent">${I?.proxy?"Proxy":""}${I?.proxy&&I?.relay?" + ":""}${I?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${g(Ue(i.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${n.length===0?'<div class="pacom-row-sub">本层暂无末端设备。</div>':n.map(i=>`
                          <button type="button" class="dep-topo-node ${i.connectivity==="offline"?"is-issue":""}" data-topo-jump="${g(i.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(i.name)}</strong><span class="pacom-badge ${i.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${i.connectivity==="online"?"在线":"离线"}</span></div>
                            <span class="pacom-row-sub">${g(Ue(i.logicalZoneId))} · ${g(i.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                          </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${k.filter(i=>i.category==="sensor"||i.category==="gateway").map(i=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${g(i.id)}">
                      <strong>${g(i.name)}</strong>
                      <span class="pacom-row-sub">${i.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${k.filter(i=>i.category==="lighting"||i.category==="hvac").map(i=>`
                    <button type="button" class="dep-topo-node ${i.connectivity==="offline"?"is-issue":""}" data-topo-jump="${g(i.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(i.name)}</strong><span class="pacom-badge ${i.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${i.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${g(Ue(i.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${q.map(i=>{const I=k.filter(U=>U.logicalZoneId===i.id),f=I.some(U=>U.connectivity==="offline");return`
                      <div class="dep-topo-node ${f?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(i.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${f?"pacom-badge--warning":"pacom-badge--online"}">${I.length} 台设备</span></div>
                        <span class="pacom-row-sub">${f?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function Xa(w){if(H.projects.length===0)return Qe(w,"plug");const k=le.reduce((l,a)=>l+a.collectedPoints,0),q=le.reduce((l,a)=>l+a.calculatedPoints,0),_=le.filter(l=>l.status==="connected").length,z=le.filter(l=>l.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${_}<span class="pacom-kpi-unit">/ ${le.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${le.length?Math.round(_/le.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${k}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${q}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${z.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${z.length} 条采集通道通信降级（${z.map(l=>l.name).join("、")}）</span>
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
                ${le.map(l=>{const a=os[l.status]??{label:l.status,cls:"pacom-badge--neutral"},o=l.status==="connected"?98:l.status==="degraded"?62:0,n=o>=75?"var(--pacom-status-online)":o>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",i=Me===l.id,I=i?cs(l,fe):[];return`
                      <tr>
                        <td><strong>${g(l.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${l.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${g(l.endpoint)}</code></td>
                        <td>采集 ${l.collectedPoints} / 计算 ${l.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${a.cls}">${a.label}</span>
                            <span class="pacom-row-sub">${o}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${o}%; background:${n};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${g(l.id)}">${i?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${g(l.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${g(l.id)}" data-endpoint-val="${g(l.endpoint)}">${$e===l.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${i?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${g(l.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${I.map(f=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${g(f.deviceName)}</strong> · ${g(f.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${g(f.value)} · ${g(f.lastSeen)}</span>
                                        <span class="pacom-badge ${f.quality==="online"?"pacom-badge--online":f.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${f.quality==="online"?"在线正常":f.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function et(w){const k=[],q=H.projects.find(l=>l.id===P)??H.projects[0]??null,_=H.buildings.find(l=>l.id===te)??(q?H.buildings.find(l=>l.projectId===q.id):null)??null;if(E&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
          <form class="dep-modal-card" data-create-project="1">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建项目</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
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
        </div>`),G&&q){const a=H.buildings.filter(o=>o.projectId===q.id).reduce((o,n)=>o+Se(n.id).reduce((i,I)=>i+Re(I.id).length,0),0);k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
          <form class="dep-modal-card" data-save-project="${g(q.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑项目：${g(q.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${g(q.imageUrl??"./media/gzlab.jpg")}" alt="${g(q.name)}" style="width:84px; height:54px; object-fit:cover; border-radius:6px; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">项目封面图</div>
                  <div class="pacom-row-sub">用于空间总览的园区俯瞰展示</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>更换封面</span>
                  <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${g(q.id)}" style="display:none;" ${w?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${g(q.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${g(q.city??"")}" /></label>
                <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${g(q.address??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${g(q.location?.lng??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${g(q.location?.lat??"")}" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${g(q.id)}" ${!w||a>0?`disabled title="${a>0?`包含 ${a} 台运行中设备，请先解绑后再删除`:"只读"}"`:""}>删除项目</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${w?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}Ce&&q&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
          <form class="dep-modal-card" data-create-bld="${g(q.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建楼宇（${g(q.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
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
        </div>`);const z=L?H.buildings.find(l=>l.id===L)??null:null;if(z){const l=Se(z.id),a=l.reduce((n,i)=>n+Re(i.id).length,0),o=fa(z);k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
          <form class="dep-modal-card" data-save-building="${g(z.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑楼宇：${g(z.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${g(z.imageUrl??"./media/building-e.webp")}" alt="${g(z.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:6px; background:#fff; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">楼宇外观 / 白模图</div>
                  <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>替换图片</span>
                  <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${g(z.id)}" style="display:none;" ${w?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${g(z.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${g(z.areaSqm??"")}" placeholder="选填" /></label>
                <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${z.aboveFloors}" /></label>
                <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${z.belowFloors}" /></label>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                <label style="display:inline-flex; align-items:center; gap:6px; font-size:13px;"><input type="checkbox" name="bRoof" ${z.hasRoof?"checked":""} />含屋面层 (RF)</label>
                ${o.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${g(z.id)}">一键补齐缺失 ${o.length} 层</button>`:`<span class="pacom-row-sub">已配置 ${l.length} 个楼层</span>`}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${g(z.id)}" ${!w||a>0?`disabled title="${a>0?"包含运行中设备，请先解绑后再删除":"只读"}"`:""}>删除楼宇</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${w?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}if(v&&_&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
          <form class="dep-modal-card" data-create-floor="${g(_.id)}" style="width:min(420px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增楼层（${g(_.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
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
        </div>`),$&&_){const l=Se(_.id),a=qe.filter(o=>!!o.matchedFloorId).length;k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
          <div class="dep-modal-card dep-modal-card--wide">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">批量导入 ${g(_.name)} 平面底图</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-upload-drop" data-batch-dropzone="${g(_.id)}" style="padding:20px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${Be?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
                <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
                <span class="pacom-row-sub">自动识别 01F、首层、屋面、RF、B1 等中英文文件名，支持手动调整对应楼层</span>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; margin-top:4px;">
                  <span>选择多张图片</span>
                  <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${g(_.id)}" style="display:none;" ${w?"":"disabled"} />
                </label>
              </div>
              ${qe.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                      <div class="pacom-row-sub">已选 ${qe.length} 张图片，已匹配 ${a} 层：</div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:6px; max-height:220px; overflow-y:auto;">
                        ${qe.map(o=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${g(o.file.name)}">${g(o.file.name)}</span>
                              <select class="pacom-select" name="overrideFloor_${g(o.id)}" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${g(o.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${l.map(n=>`<option value="${g(n.id)}" ${o.matchedFloorId===n.id?"selected":""}>${g(n.name)}</option>`).join("")}
                              </select>
                            </div>`).join("")}
                      </div>
                    </div>`:""}
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-batch-upload="1" ${qe.length===0?"disabled":""}>清空已选</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">关闭</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-batch-upload="1" ${a===0?"disabled":""}>确认导入（${a} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(J&&_){const l=xe().find(o=>o.id===J),a=Se(_.id).filter(o=>o.id!==J);l&&a.length>0&&k.push(`
          <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
            <div class="dep-modal-card">
              <div class="dep-modal-head">
                <strong style="font-size:15px; font-weight:500;">复用 ${g(l.name)} 功能区至其他楼层</strong>
                <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
              </div>
              <div class="dep-modal-body">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <span class="pacom-row-sub">勾选目标楼层（已选 ${Ie.size} 层）</span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                  </div>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${a.map(o=>{const n=Ie.has(o.id),i=ze().filter(I=>I.floorId===o.id).length;return`
                        <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${n}">
                          <input type="checkbox" name="copyFloor_${g(o.id)}" data-copy-target-floor="${g(o.id)}" ${n?"checked":""} style="margin:0;" />
                          <span>${g(o.name)}${i>0?` (${i}区)`:""}</span>
                        </label>`}).join("")}
                </div>
              </div>
              <div class="dep-modal-foot">
                <span></span>
                <div style="display:flex; gap:8px;">
                  <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                  <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${g(l.id)}" ${Ie.size===0?"disabled":""}>确认复制（${Ie.size} 层）</button>
                </div>
              </div>
            </div>
          </div>`)}if(D){const l=ze().filter(a=>a.floorId===re);k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
          <form class="dep-modal-card" data-create-dev="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增设备</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">设备名称</span>
                <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">设备类型</span>
                  <select class="pacom-select" name="devPreset">${it.map(a=>`<option value="${a.key}">${a.label}</option>`).join("")}</select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">所属功能区</span>
                  <select class="pacom-select" name="devZone">
                    <option value="">暂不分配</option>
                    ${l.map(a=>`<option value="${g(a.id)}">${g(a.name)}</option>`).join("")}
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
        </div>`)}return u&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建分组">
          <form class="dep-modal-card" data-create-group="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建设备分组</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
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
        </div>`),A&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增接入通道">
          <form class="dep-modal-card" data-create-conn="1" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增子系统接入通道</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
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
        </div>`),k.join("")}function C(){const w=s.scope.canEditDeployment,k=s.scope.activeOverrides.find(o=>o.module==="deployment"&&o.status==="active"),q=k?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 · ${k.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${g(k.approvedBy)} · 到期自动收回：${g(k.expiresAt.slice(0,16).replace("T"," "))} · 事由：${g(k.reason)}</span>
          </div>
        </div>`:"",_=m==="devices"&&y==="marking",z=xa[m],l=m==="devices"?y==="marking"?"设备标记":y==="list"?"设备列表":"设备分组":z.title,a=m==="devices"?y==="marking"?"在 2D 平面底图上完成设备坐标标记、回路灯点布置与硬件绑定。":y==="list"?"核查本层四态设备清单，点击任意行配置硬件绑定、人感/光感参数或执行自检。":"管理端侧蓝牙 Mesh 自治联动组与云端业务分组。":z.subtitle;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Wa({tree:H,session:s,scope:W,maxGranularity:z.granularity,isOpen:ie,searchKeyword:B})}
            </div>
            <div class="pacom-header-meta">
              ${w?k?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${da()}
          ${_?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${l}</h2>
                      <p class="pacom-unified-subtitle">${a}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${Aa(w)}
                    </div>
                  </div>
                  ${q}
                  ${ce?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${g(ce)}</span></div>`:""}
                  ${be?`<div class="pacom-alert-banner">${g(be)}</div>`:""}
                  ${Ya(w)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head pacom-unified-head--split">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${l}</h2>
                      <p class="pacom-unified-subtitle">${a}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${Aa(w)}
                    </div>
                  </div>
                  ${q}
                  ${ce?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${g(ce)}</span></div>`:""}
                  ${be?`<div class="pacom-alert-banner">${g(be)}</div>`:""}
                  ${m==="overview"?Ja(w):m==="project_config"?ja(w):m==="devices"?y==="list"?Qa(w):Ca(w):m==="network_topo"?pa(w):Xa(w)}
                </div>
              </div>`}
          ${La(w)}
        </div>
      </div>
      ${et(w)}
      ${Pe?`
          <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${g(Pe.title)}">
            <div class="dep-lightbox-card">
              <div class="dep-lightbox-head">
                <strong style="font-size:14px; font-weight:500;">${g(Pe.title)}</strong>
                <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${Ae("x",16)}</button>
              </div>
              <div class="dep-lightbox-body">
                <img src="${g(Pe.imageUrl)}" alt="${g(Pe.title)}" />
              </div>
            </div>
          </div>`:""}
    `,qa()}function qa(){Ga(t,{onToggle:()=>{ie=!ie,C(),ie&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:a=>{B=a,C();const o=t.querySelector("[data-global-space-search]");o&&(o.focus(),o.setSelectionRange(a.length,a.length))},onPick:a=>{if(W=a,ie=!1,a.level==="project"){P=a.projectId;const o=H.buildings.find(n=>n.projectId===a.projectId);o?wa(o.id):(te="",re="",ue=null)}else a.level==="building"?wa(a.buildingId):a.level==="floor"&&ra(a.floorId);C()}}),t.querySelectorAll("[data-dep-nav]").forEach(a=>{a.addEventListener("click",()=>{m=a.dataset.depNav??"overview",a.dataset.devSubtabJump&&(y=a.dataset.devSubtabJump),N=!1,oe=!1,ce="",be="",C()})}),t.querySelectorAll("[data-dev-subtab]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.devSubtab??"marking";y=o,o==="groups"&&(N=!1,oe=!1),ce="",be="",C()})}),t.querySelectorAll("[data-drawer-tab]").forEach(a=>{a.addEventListener("click",()=>{T=a.dataset.drawerTab??"binding",C()})}),t.querySelector("[data-list-search]")?.addEventListener("input",a=>{j=a.currentTarget.value,C();const o=t.querySelector("[data-list-search]");o&&(o.focus(),o.setSelectionRange(j.length,j.length))}),t.querySelector("[data-list-filter]")?.addEventListener("change",a=>{M=a.currentTarget.value??"all",C()}),t.querySelectorAll("[data-refresh-dep]").forEach(a=>{a.addEventListener("click",()=>{ke()})}),t.querySelectorAll("[data-matrix-nav]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.matrixFloor;o&&ra(o),m=a.dataset.matrixNav??"devices",a.dataset.matrixSub&&(y=a.dataset.matrixSub),a.dataset.matrixExpand==="1"&&o&&(ue=o),C()})}),t.querySelectorAll("[data-scrubber-floor]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.scrubberFloor;o&&(ra(o),C())})}),t.querySelectorAll("[data-close-modals]").forEach(a=>{a.addEventListener("click",()=>{we(),C()})}),t.querySelectorAll("[data-modal-scrim]").forEach(a=>{a.addEventListener("click",o=>{o.target===a&&(we(),C())})}),t.querySelectorAll("[data-open-new-proj]").forEach(a=>{a.addEventListener("click",()=>{we(),E=!0,C()})}),t.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{we(),G=!0,C()}),t.querySelectorAll("[data-open-new-bld]").forEach(a=>{a.addEventListener("click",()=>{we(),Ce=!0,C()})}),t.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{we(),v=!0,C()}),t.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{we(),$=!0,C()}),t.querySelectorAll("[data-open-new-dev]").forEach(a=>{a.addEventListener("click",()=>{we(),D=!0,C()})}),t.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{we(),u=!0,C()}),t.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{we(),A=!0,C()}),t.querySelectorAll("[data-select-building]").forEach(a=>{a.addEventListener("click",o=>{if(o.target?.closest("button, label, input"))return;const n=a.dataset.selectBuilding;n&&n!==te&&(wa(n),je="all",ue=null,C())})}),t.querySelectorAll("[data-edit-building]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation(),we(),L=a.dataset.editBuilding??null,C()})}),t.querySelectorAll("[data-toggle-expand-floor]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.toggleExpandFloor??null;ue=ue===o?null:o,ue&&ra(ue),h=null,C()})}),t.querySelectorAll("[data-jump-floor-marking]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.jumpFloorMarking;o&&ra(o),m="devices",y="marking",C()})}),t.querySelector("[data-jump-floor-config]")?.addEventListener("click",a=>{const o=a.currentTarget.dataset.jumpFloorConfig;m="project_config",o&&(ue=o),C()}),t.querySelectorAll("[data-floor-detail-tab]").forEach(a=>{a.addEventListener("click",()=>{Le=a.dataset.floorDetailTab??"zones",C()})}),t.querySelectorAll("[data-floor-list-filter]").forEach(a=>{a.addEventListener("click",()=>{je=a.dataset.floorListFilter??"all",C()})}),t.querySelector("[data-create-project]")?.addEventListener("submit",async a=>{a.preventDefault();const o=new FormData(a.currentTarget),n=String(o.get("pName")??"").trim(),i=String(o.get("pCity")??"").trim(),I=String(o.get("pAddr")??"").trim(),f=String(o.get("pLng")??"").trim(),U=String(o.get("pLat")??"").trim();if(!n)return;let ve;if(f||U){const se=Number(f),Y=Number(U);if(!Number.isFinite(se)||!Number.isFinite(Y)||se<-180||se>180||Y<-90||Y>90){be="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",C();return}ve={lng:se,lat:Y,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const se=await e.createProject?.({name:n,city:i,address:I,location:ve});we(),m="project_config",se&&(P=se.id,te="",re="",ue=null,W=ga({level:"project",projectId:se.id})),ce=`已创建项目「${n}」，下一步可添加园区楼宇。`,await ke()}catch(se){be=se instanceof Error?se.message:String(se),C()}}),t.querySelector("[data-save-project]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.saveProject??P,i=new FormData(o),I=String(i.get("pName")??"").trim(),f=String(i.get("pCity")??"").trim(),U=String(i.get("pAddr")??"").trim(),ve=String(i.get("pLng")??"").trim(),se=String(i.get("pLat")??"").trim();let Y;if(ve||se){const K=Number(ve),R=Number(se);if(!Number.isFinite(K)||!Number.isFinite(R)||K<-180||K>180||R<-90||R>90){be="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",C();return}Y={lng:K,lat:R,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await e.updateProject?.(n,{name:I,city:f,address:U,location:Y}),we(),ce=`已保存项目「${I||"当前项目"}」信息。`,await ke()}catch(K){be=K instanceof Error?K.message:String(K),C()}}),t.querySelector("[data-upload-proj]")?.addEventListener("change",async a=>{const o=a.currentTarget,n=o.dataset.uploadProj,i=o.files?.[0];if(!(!n||!i))try{const I=await za(i);await e.updateProject?.(n,{imageUrl:I}),ce=`已更新项目封面图（${i.name}）。`,await ke()}catch(I){be=I instanceof Error?I.message:String(I),C()}}),t.querySelector("[data-delete-proj]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.deleteProj,n=H.projects.find(i=>i.id===o);if(!(!o||!n)&&window.confirm(`确认删除项目「${n.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await e.deleteProject?.(o),we(),ce=`已删除项目「${n.name}」。`,await ke()}catch(i){be=i instanceof Error?i.message:String(i),C()}}),t.querySelector("[data-create-bld]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.createBld??P,i=new FormData(o),I=String(i.get("bName")??"").trim(),f=String(i.get("bArea")??"").trim(),U=Math.max(1,Number(i.get("bAbove")??12)),ve=Math.max(0,Number(i.get("bBelow")??0)),se=!!i.get("bRoof"),Y=!!i.get("bAutoFloors");if(I)try{const K=await e.upsertBuilding?.({projectId:n,name:I,aboveFloors:U,belowFloors:ve,hasRoof:se,areaSqm:f?Number(f):null});we();let R=0;if(K&&(te=K.id,Y)){for(let he=1;he<=U;he+=1)await e.upsertFloor?.({buildingId:K.id,kind:"above",level:he,name:`${he}F`}),R+=1;for(let he=1;he<=ve;he+=1)await e.upsertFloor?.({buildingId:K.id,kind:"below",level:-he,name:`B${he}`}),R+=1;se&&(await e.upsertFloor?.({buildingId:K.id,kind:"roof",level:99,name:"RF"}),R+=1)}ce=Y?`已创建楼宇「${I}」并自动生成 ${R} 个楼层。`:`已创建楼宇「${I}」。`,await ke()}catch(K){be=K instanceof Error?K.message:String(K),C()}}),t.querySelector("[data-save-building]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.saveBuilding,i=H.buildings.find(K=>K.id===n);if(!i)return;const I=new FormData(o),f=String(I.get("bName")??"").trim()||i.name,U=String(I.get("bArea")??"").trim(),ve=Math.max(1,Number(I.get("bAbove")??i.aboveFloors)),se=Math.max(0,Number(I.get("bBelow")??i.belowFloors)),Y=!!I.get("bRoof");try{await e.upsertBuilding?.({id:n,projectId:i.projectId,name:f,aboveFloors:ve,belowFloors:se,hasRoof:Y,areaSqm:U?Number(U):null}),we(),ce=`已保存楼宇「${f}」参数。`,await ke()}catch(K){be=K instanceof Error?K.message:String(K),C()}}),t.querySelector("[data-delete-building]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.deleteBuilding,n=H.buildings.find(i=>i.id===o);if(!(!o||!n)&&window.confirm(`确认删除楼宇「${n.name}」及其下全部楼层与功能区？`))try{await e.deleteBuilding?.(o),we(),ce=`已删除楼宇「${n.name}」。`,await ke()}catch(i){be=i instanceof Error?i.message:String(i),C()}}),t.querySelector("[data-upload-bld]")?.addEventListener("change",async a=>{const o=a.currentTarget,n=o.dataset.uploadBld,i=o.files?.[0],I=H.buildings.find(f=>f.id===n);if(!(!n||!i||!I))try{const f=await za(i);await e.upsertBuilding?.({id:I.id,projectId:I.projectId,name:I.name,aboveFloors:I.aboveFloors,belowFloors:I.belowFloors,hasRoof:I.hasRoof,areaSqm:I.areaSqm,imageUrl:f}),ce=`已更新「${I.name}」外观图（${i.name}）。`,await ke()}catch(f){be=f instanceof Error?f.message:String(f),C()}}),t.querySelectorAll("[data-fill-missing-floors]").forEach(a=>{a.addEventListener("click",async o=>{o.stopPropagation();const n=a.dataset.fillMissingFloors;if(n)try{const i=await ba(n);ce=i>0?`已自动补齐 ${i} 个楼层。`:"当前楼宇楼层已完整。",await ke()}catch(i){be=i instanceof Error?i.message:String(i),C()}})}),t.querySelector("[data-create-floor]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.createFloor,i=new FormData(o),I=String(i.get("fName")??"").trim().toUpperCase(),f=String(i.get("fArea")??"").trim();if(!I)return;const U=ma(I)??I;if(Se(n).some(R=>(ma(R.name)??R.name.toUpperCase())===U)){be=`楼层「${I}」已存在，请使用其他名称。`,C();return}const se=Fa(I),Y=se>=999?"roof":se<0?"below":"above",K=se>=999?99:se||1;try{const R=await e.upsertFloor?.({buildingId:n,kind:Y,level:K,name:I,areaSqm:f?Number(f):null});we(),R&&(re=R.id,ue=R.id),ce=`已新增楼层「${I}」。`,await ke()}catch(R){be=R instanceof Error?R.message:String(R),C()}}),t.querySelector("[data-save-floor]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.saveFloor,i=xe().find(he=>he.id===n);if(!i)return;const I=new FormData(o),f=String(I.get("fName")??"").trim()||i.name,U=String(I.get("fArea")??"").trim(),ve=ma(f)??f.toUpperCase();if(Se(i.buildingId).some(he=>he.id!==i.id&&(ma(he.name)??he.name.toUpperCase())===ve)){be=`楼层「${f}」已存在，请避免重复命名。`,C();return}const Y=Fa(f),K=Y>=999?"roof":Y<0?"below":"above",R=Y>=999?99:Y||i.level;try{await e.upsertFloor?.({id:i.id,buildingId:i.buildingId,kind:K,level:R,name:f,areaSqm:U?Number(U):null}),ce=`已保存楼层「${f}」。`,await ke()}catch(he){be=he instanceof Error?he.message:String(he),C()}}),t.querySelector("[data-delete-floor]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.deleteFloor,n=xe().find(i=>i.id===o);if(!(!o||!n)){if(Re(o).length>0){be=`楼层「${n.name}」已关联设备，请先解绑后再删除。`,C();return}if(window.confirm(`确认删除楼层「${n.name}」及其功能区？`))try{await e.deleteFloor?.(o),ue=null,ce=`已删除楼层「${n.name}」。`,await ke()}catch(i){be=i instanceof Error?i.message:String(i),C()}}});async function w(a,o){const n=xe().find(i=>i.id===a);if(n)try{const i=await za(o);await e.upsertFloor?.({id:n.id,buildingId:n.buildingId,kind:n.kind,level:n.level,name:n.name,areaSqm:n.areaSqm,planImageUrl:i}),ce=`已更新「${n.name}」平面底图（${o.name}）。`,await ke()}catch(i){be=i instanceof Error?i.message:String(i),C()}}t.querySelectorAll("[data-upload-floor]").forEach(a=>{a.addEventListener("change",()=>{const o=a.dataset.uploadFloor,n=a.files?.[0];o&&n&&w(o,n)})});const k=t.querySelector("[data-single-floor-drop]");k&&s.scope.canEditDeployment&&(k.addEventListener("dragover",a=>{a.preventDefault(),k.style.borderColor="var(--pacom-accent-solid)"}),k.addEventListener("dragleave",()=>{k.style.borderColor=""}),k.addEventListener("drop",a=>{a.preventDefault(),k.style.borderColor="";const o=k.dataset.singleFloorDrop,n=Array.from(a.dataTransfer?.files??[]).find(i=>i.type.startsWith("image/"));o&&n&&w(o,n)})),t.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.clearFloorPlan,n=xe().find(i=>i.id===o);if(!(!o||!n)&&window.confirm(`确认清空「${n.name}」的平面底图？`))try{await e.upsertFloor?.({id:n.id,buildingId:n.buildingId,kind:n.kind,level:n.level,name:n.name,areaSqm:n.areaSqm,planImageUrl:null}),ce=`已清空「${n.name}」平面底图。`,await ke()}catch(i){be=i instanceof Error?i.message:String(i),C()}}),t.querySelectorAll("[data-open-lightbox]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.lbTitle??"平面底图预览",n=a.dataset.lbSrc??"";n&&(Pe={title:o,imageUrl:n},C())})}),t.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{Pe=null,C()}),t.querySelector("[data-lightbox-scrim]")?.addEventListener("click",a=>{a.target===a.currentTarget&&(Pe=null,C())});function q(a,o){if(!a||o.length===0)return;const n=Se(a),i=new Map;n.forEach(I=>{const f=ma(I.name)??I.name.toUpperCase();i.set(f,I)}),qe=o.map((I,f)=>{const U=ma(I.name),ve=U?i.get(U):void 0;return{id:`bu-${Date.now().toString(36)}-${f}`,file:I,matchedFloorId:ve?.id??null}}),$=!0,C()}t.querySelector("[data-batch-upload-floors]")?.addEventListener("change",a=>{const o=a.currentTarget;q(o.dataset.batchUploadFloors??"",Array.from(o.files??[]))});const _=t.querySelector("[data-batch-dropzone]");_&&s.scope.canEditDeployment&&(_.addEventListener("dragover",a=>{a.preventDefault(),Be||(Be=!0,_.style.borderColor="var(--pacom-accent-solid)",_.style.background="var(--pacom-accent-soft)")}),_.addEventListener("dragleave",()=>{Be=!1,_.style.borderColor="",_.style.background=""}),_.addEventListener("drop",a=>{a.preventDefault(),Be=!1;const o=Array.from(a.dataTransfer?.files??[]).filter(n=>n.type.startsWith("image/"));q(_.dataset.batchDropzone??"",o)})),t.querySelectorAll("[data-batch-override-floor]").forEach(a=>{a.addEventListener("change",()=>{const o=qe.find(n=>n.id===a.dataset.batchOverrideFloor);o&&(o.matchedFloorId=a.value||null,C())})}),t.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{qe=[],C()}),t.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const a=qe.filter(n=>n.matchedFloorId),o=qe.length-a.length;if(a.length!==0)try{for(const n of a){const i=xe().find(f=>f.id===n.matchedFloorId);if(!i)continue;const I=await za(n.file);await e.upsertFloor?.({id:i.id,buildingId:i.buildingId,kind:i.kind,level:i.level,name:i.name,areaSqm:i.areaSqm,planImageUrl:I})}qe=[],we(),ce=`已批量导入 ${a.length} 个楼层平面底图${o>0?`（跳过 ${o} 张未分配文件）`:""}。`,await ke()}catch(n){be=n instanceof Error?n.message:String(n),C()}}),t.querySelectorAll("[data-apply-zone-tpl]").forEach(a=>{a.addEventListener("click",async()=>{const o=Et.find(i=>i.key===a.dataset.applyZoneTpl),n=xe().find(i=>i.id===a.dataset.tplFloor);if(!(!o||!n))try{for(const i of o.items){const I=await e.upsertZone?.({floorId:n.id,name:`${n.name} ${i.suffix}`,category:i.category});I&&(ne[I.id]={left:20,top:20,width:24,height:24})}ce=`已按「${o.label}」模板为 ${n.name} 创建 ${o.items.length} 个功能区。`,await ke()}catch(i){be=i instanceof Error?i.message:String(i),C()}})}),t.querySelector("[data-attach-doc]")?.addEventListener("change",a=>{const o=a.currentTarget,n=o.dataset.attachDoc,i=o.files?.[0],I=xe().find(U=>U.id===n);if(!n||!i||!I)return;const f=i.size>=1024*1024?`${(i.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(i.size/1024))} KB`;ae.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:n,name:i.name,category:i.name.toLowerCase().endsWith(".xlsx")||i.name.toLowerCase().endsWith(".xls")?"点位清单":"竣工图纸",boundScope:`${I.name} · 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:f}),ce=`已为 ${I.name} 关联文档「${i.name}」。`,C()}),t.querySelector("[data-add-zone]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget.dataset.addZone,n=new FormData(a.currentTarget),i=String(n.get("zoneName")??"").trim(),I=String(n.get("zoneCat")??"office");if(i)try{const f=await e.upsertZone?.({floorId:o,name:i,category:I});f&&(ne[f.id]={left:20,top:20,width:24,height:24}),ce=`已添加功能区「${i}」。`,await ke()}catch(f){be=f instanceof Error?f.message:String(f),C()}}),t.querySelectorAll("[data-edit-zone]").forEach(a=>{a.addEventListener("click",()=>{h=a.dataset.editZone??null,C()})}),t.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{h=null,C()}),t.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=new FormData(o),i=String(n.get("zName")??"").trim(),I=String(n.get("zCat")??"office");if(i)try{await e.upsertZone?.({id:o.dataset.saveEditZone,floorId:o.dataset.zoneFloor,name:i,category:I}),h=null,ce=`已更新功能区「${i}」。`,await ke()}catch(f){be=f instanceof Error?f.message:String(f),C()}}),t.querySelectorAll("[data-del-zone]").forEach(a=>{a.addEventListener("click",async()=>{const o=a.dataset.delZone,n=ze().find(i=>i.id===o);if(!(!o||!n)&&window.confirm(`确认删除功能区「${n.name}」？`))try{await e.deleteZone?.(o),h===o&&(h=null),ce=`已删除功能区「${n.name}」。`,await ke()}catch(i){be=i instanceof Error?i.message:String(i),C()}})}),t.querySelectorAll("[data-open-copy-zones]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.openCopyZones??null;we(),J=o,Ie=new Set(Se(te).filter(n=>n.id!==o&&n.kind==="above"&&ze().filter(i=>i.floorId===n.id).length===0).map(n=>n.id)),C()})}),t.querySelectorAll("[data-copy-preset]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.copyPreset,n=Se(te).filter(i=>i.id!==J);o==="empty"?Ie=new Set(n.filter(i=>i.kind==="above"&&ze().filter(I=>I.floorId===i.id).length===0).map(i=>i.id)):o==="above"?Ie=new Set(n.filter(i=>i.kind==="above").map(i=>i.id)):Ie.clear(),C()})}),t.querySelectorAll("[data-copy-target-floor]").forEach(a=>{a.addEventListener("change",()=>{const o=a.dataset.copyTargetFloor;o&&(a.checked?Ie.add(o):Ie.delete(o),C())})}),t.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.confirmCopyZones,n=Array.from(Ie);if(!(!o||n.length===0))try{const i=await e.copyZonesToFloors?.(o,n)??0;we(),Ie.clear(),ce=`已将当前层功能区复用至 ${n.length} 个目标楼层（共新增 ${i} 个功能区）。`,await ke()}catch(i){be=i instanceof Error?i.message:String(i),C()}});const z=t.querySelector("[data-dep-canvas-search]");z?.addEventListener("focus",()=>{Q||(Q=!0,C(),t.querySelector("[data-dep-canvas-search]")?.focus())}),z?.addEventListener("input",a=>{ee=a.currentTarget.value,Q=!0,C();const o=t.querySelector("[data-dep-canvas-search]");o&&(o.focus(),o.setSelectionRange(ee.length,ee.length))}),t.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{Q=!Q,C()}),t.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{Q=!1,C()}),t.querySelectorAll("[data-brush]").forEach(a=>{a.addEventListener("click",()=>{V=a.dataset.brush??"device",C()})}),t.querySelectorAll("[data-dep-zoom]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.depZoom;o==="in"?F=Math.min(2.6,Number((F+.2).toFixed(2))):o==="out"?F=Math.max(.6,Number((F-.2).toFixed(2))):(F=1,pe=0,ge=0),Te()})});const l=t.querySelector('[data-role="dep-stage"]');if(l&&!oe){let a=!1,o=0,n=0,i=0,I=0;l.addEventListener("pointerdown",U=>{U.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(a=!0,o=U.clientX,n=U.clientY,i=pe,I=ge,l.classList.add("is-panning"),l.setPointerCapture?.(U.pointerId))}),l.addEventListener("pointermove",U=>{a&&(pe=i+(U.clientX-o),ge=I+(U.clientY-n),Te())});const f=()=>{a&&(a=!1,l.classList.remove("is-panning"))};l.addEventListener("pointerup",f),l.addEventListener("pointercancel",f),l.addEventListener("wheel",U=>{U.preventDefault();const ve=U.deltaY<0?.12:-.12;F=Math.max(.6,Math.min(2.6,Number((F+ve).toFixed(2)))),Te()},{passive:!1}),l.addEventListener("dblclick",U=>{U.target?.closest("button")||(F=1,pe=0,ge=0,Te())})}t.querySelectorAll("[data-dev-filter]").forEach(a=>{a.addEventListener("click",()=>{me=a.dataset.devFilter??"all",C()})}),t.querySelector("[data-create-dev]")?.addEventListener("submit",a=>{a.preventDefault();const o=new FormData(a.currentTarget),n=String(o.get("devName")??"").trim(),i=String(o.get("devPreset")??"sensor"),I=String(o.get("devZone")??"")||null,f=it.find(ve=>ve.key===i)??it[0],U=`dev-custom-${Date.now().toString(36)}`;O.push({id:U,name:n,category:f.category,projectId:P||S.projectId,buildingId:te,floorId:re,logicalZoneId:I,planPoint:{floorId:re,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),p.set(U,{proxy:f.defaultProxy,relay:f.defaultRelay,meshUuid:`mesh-${re.slice(-4)}`}),f.category==="lighting"&&x.push({id:`lm-${Date.now().toString(36)}`,deviceId:U,channel:"回路 1",label:`${n.slice(0,6)}主灯`,x:.52,y:.45}),we(),b=U,N=!0,T="binding",Oe=!0,ce=`已新增「${n}」（${f.hint}），已生成默认标记并提示待同步边缘。`,C()}),t.querySelectorAll("[data-pick-dev]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation(),b=a.dataset.pickDev??null,N=!0,T="binding",Z=Re(re).find(i=>i.id===b)?.physicalInstalled??!1,C()})}),t.querySelectorAll("[data-open-dev-drawer]").forEach(a=>{a.addEventListener("click",o=>{if(o.target?.closest("button"))return;b=a.dataset.openDevDrawer??null,N=!0,T="binding",Z=Re(re).find(i=>i.id===b)?.physicalInstalled??!1,C()})}),t.querySelectorAll("[data-open-dev-params]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation(),b=a.dataset.openDevParams??null,N=!0,T="params",Z=Re(re).find(i=>i.id===b)?.physicalInstalled??!1,C()})}),t.querySelector("[data-close-sel]")?.addEventListener("click",()=>{N=!1,oe=!1,C()}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{y!=="marking"?(y="marking",oe=!0):oe=!oe,C()}),t.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{Z=!Z,C()}),t.querySelectorAll("[data-ping-dev]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation();const n=Re(re).find(i=>i.id===a.dataset.pingDev);n&&(ce=`已向「${n.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,C())})}),t.querySelector("[data-add-light-marker]")?.addEventListener("click",a=>{const o=a.currentTarget.dataset.addLightMarker,n=x.filter(i=>i.deviceId===o).length+1;x.push({id:`lm-${Date.now().toString(36)}`,deviceId:o,channel:`回路 ${n}`,label:`照明点位 ${n}`,x:Math.min(.86,.35+n*.1),y:.42}),V="light_marker",ce=`已新增「回路 ${n}」可视化灯点。`,C()}),t.querySelectorAll("[data-del-light-marker]").forEach(a=>{a.addEventListener("click",()=>{const o=x.findIndex(n=>n.id===a.dataset.delLightMarker);o>=0&&x.splice(o,1),C()})}),t.querySelectorAll("[data-toggle-mesh-role]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.meshDev,n=a.dataset.toggleMeshRole,i=p.get(o)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};i[n]=!i[n],p.set(o,i),Oe=!0,ce=`已更新节点 ${n.toUpperCase()} 状态，可在「网络拓扑」中一键同步至边缘网关。`,C()})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async a=>{const o=Re(re).find(f=>f.id===b);if(!oe||!o)return;const n=a.currentTarget.getBoundingClientRect(),i=Math.max(.02,Math.min(.98,(a.clientX-n.left)/n.width)),I=Math.max(.02,Math.min(.98,(a.clientY-n.top)/n.height));if(O.some(f=>f.id===o.id)){o.planPoint={floorId:re,planVersion:1,x:Number(i.toFixed(4)),y:Number(I.toFixed(4))},oe=!1,ce=`已更新「${o.name}」图上坐标。`,C();return}try{await e.updateDevicePlanPoint({deviceId:o.id,floorId:S.floorId,planVersion:o.planPoint?.planVersion??1,x:i,y:I,expectedVersion:o.version}),oe=!1,ce=`已更新「${o.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await ke()}catch(f){be=f instanceof Error?f.message:String(f),C()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async a=>{a.preventDefault();const o=Re(re).find(i=>i.id===b);if(!o)return;const n=new FormData(a.currentTarget);if(O.some(i=>i.id===o.id)){o.physicalInstalled=Z,o.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(n.get("protocol")),networkAddress:String(n.get("networkAddress")??""),portOrChannel:String(n.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:s.displayName},o.version+=1,Oe=!0,ce=`已保存「${o.name}」的硬件绑定与物理复核状态。`,C();return}try{await e.updateDeviceHardwareBinding({deviceId:o.id,gatewayId:o.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(n.get("protocol")),networkAddress:String(n.get("networkAddress")??""),portOrChannel:String(n.get("portOrChannel")??""),physicalInstalled:Z,expectedVersion:o.version}),Oe=!0,ce=`已保存「${o.name}」的硬件绑定与物理安装复核状态。`,await ke()}catch(i){be=i instanceof Error?i.message:String(i),C()}}),t.querySelector("[data-save-dev-params]")?.addEventListener("submit",a=>{a.preventDefault();const o=a.currentTarget.dataset.saveDevParams,n=new FormData(a.currentTarget);Ee.set(o,{offDelayMin:Number(n.get("offDelayMin")??15),restoreMin:Number(n.get("restoreMin")??30),luxOn:Number(n.get("luxOn")??280),luxOff:Number(n.get("luxOff")??450)}),Oe=!0,ce="设备自治延时与光感门限参数已下发并同步至配置基线。",C()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const a=Re(re).find(o=>o.id===b);a&&Xe(a)}),t.querySelectorAll("[data-ftt-dev]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation();const n=Re(re).find(i=>i.id===a.dataset.fttDev);n&&Xe(n)})}),t.querySelectorAll("[data-batch-ftt]").forEach(a=>{a.addEventListener("click",()=>ca())}),t.querySelectorAll("[data-export-inv]").forEach(a=>{a.addEventListener("click",()=>Ka())}),t.querySelector("[data-create-group]")?.addEventListener("submit",a=>{a.preventDefault();const o=new FormData(a.currentTarget),n=String(o.get("gName")??"").trim(),i=o.get("gTrack")??"mesh_auto",I=String(o.get("gType")??"灯光联动组");n&&(de.unshift({id:`grp-${Date.now().toString(36)}`,track:i,groupType:I,name:n,floorId:re,includesAdapter:i==="mesh_auto",deviceIds:i==="mesh_auto"?["dev-e7f-gw-01"]:[]}),we(),i==="mesh_auto"&&(Oe=!0),ce=`已新建${i==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${n}」。`,C())}),t.querySelectorAll("[data-test-group]").forEach(a=>{a.addEventListener("click",()=>{const o=de.find(n=>n.id===a.dataset.testGroup);o&&(ce=`已向分组「${o.name}」发送群组试控指令，${o.deviceIds.length} 台成员回读正常。`,C())})}),t.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>Sa()),t.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{He+=1,Oe=!1,ce=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${He}）。`,C()}),t.querySelectorAll("[data-topo-mode]").forEach(a=>{a.addEventListener("click",()=>{X=a.dataset.topoMode??"mesh",C()})}),t.querySelectorAll("[data-topo-jump]").forEach(a=>{a.addEventListener("click",()=>{b=a.dataset.topoJump??null,N=!0,T="binding",m="devices",y="marking",C()})}),t.querySelector("[data-create-conn]")?.addEventListener("submit",a=>{a.preventDefault();const o=new FormData(a.currentTarget),n=String(o.get("cName")??"").trim(),i=String(o.get("cProto")??"bacnet_ip"),I=String(o.get("cEndpoint")??"").trim();if(le.some(f=>f.endpoint===I)){be=`端口冲突警告：局域网端点「${I}」已被其他通道占用，请更换端口后重试。`,C();return}le.unshift({id:`conn-${Date.now().toString(36)}`,projectId:P||S.projectId,buildingId:te,floorId:re,name:n,protocol:i,endpoint:I,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),we(),be="",ce=`已接入「${n}」（${I}），连通测试通过（18 ms）。`,C()}),t.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{ce="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",C()}),t.querySelectorAll("[data-expand-conn]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.expandConn??null;Me=Me===o?null:o,C()})}),t.querySelectorAll("[data-ping-conn]").forEach(a=>{a.addEventListener("click",()=>{const o=le.find(n=>n.id===a.dataset.pingConn);o&&(be="",o.status==="connected"?ce=`连通测试通过：「${o.name}」（${o.endpoint}）响应正常，延迟 18 ms。`:be=`连通测试异常：「${o.name}」（${o.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,C())})}),t.querySelectorAll("[data-copy-endpoint]").forEach(a=>{a.addEventListener("click",async()=>{const o=a.dataset.endpointVal??"",n=a.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(o),$e=n,C(),window.setTimeout(()=>{$e=null,C()},1600)}catch{}})}),t.querySelectorAll("[data-preview-doc]").forEach(a=>{a.addEventListener("click",()=>{const o=[...kt,...ae].find(n=>n.id===a.dataset.previewDoc);o&&(ce=`已调阅工程附件「${o.name}」（关联范围：${o.boundScope}，更新于 ${o.updatedAt}）。`,C())})}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const a=await e.freezeDeliveryBatch(S.floorId,"部署总览验收发起交付冻结");ce=`已生成交付冻结快照 ${a.versionTag}（核验 ${a.verifiedCount}/${a.deviceCount}）。`,await ke()}catch(a){be=a instanceof Error?a.message:String(a),C()}})}await ke()}const ps=new Set(["lighting","hvac","alarm_rules"]),_t={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Ra=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function us(t){const e=new Set;for(const s of t.actions)s.command.startsWith("lighting")?e.add("照明"):s.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function ms(t,e,s){const c=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${t<e?`<div style="position:absolute; left:${t/24*100}%; width:${(e-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${c};"></div>`:`
        <div style="position:absolute; left:${t/24*100}%; width:${(24-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${c};"></div>
        <div style="position:absolute; left:0; width:${e/24*100}%; top:0; bottom:0; border-radius:999px; background:${c};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function vs(t,e,s){let c=Za(),r=!1,m="",[y,T,j,M]=await Promise.all([e.getSpatialTree(),e.listScenes(S.floorId),e.getRuntimeSettings(S.projectId),e.getFloorDevices(S.floorId).catch(()=>[])]),W="manual",ie="balanced",B="all",V=null,me="",ee=!1,Q=!1,N=!1,X="all",F=null,pe="",ge="",H=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const fe=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],le=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],ye=[{deviceId:M[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],ne=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${j.calendar.workdayStart} – ${j.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${j.calendar.nightGuardStart} – 次日 ${j.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],O=e.subscribeFloorEvents(S.floorId,async te=>{te.type==="control.receipt.updated"&&V?.batchId===te.batchId&&(V=await e.getControlBatch(te.batchId),P())});function P(){const te=me.trim().toLowerCase(),re=te?T.filter(u=>`${u.name} ${u.description}`.toLowerCase().includes(te)):T,ue=j.rules.filter(u=>ps.has(u.category)),je=B==="all"?ue:B==="cbm"?[]:ue.filter(u=>u.category===B),Le=B==="all"||B==="cbm",E=X==="issues"?fe.filter(u=>u.status!=="verified"):fe,G=Ra.find(u=>u.id===ie)??Ra[1],Ce=s.scope.canControlDevices,L=s.scope.canEditScenes,v=s.scope.canEditSettings,$=s.scope.activeOverrides.find(u=>u.module==="settings"&&u.status==="active");t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Wa({tree:y,session:s,scope:c,isOpen:r,searchKeyword:m})}
            </div>

            <div class="pacom-header-meta">
              ${W==="rules"?v?$?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${H.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${H.length>0?`人工覆盖中：${H.length} 台 ${Ae("chevron-down",12)}`:`全部自动托管 ${Ae("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${N?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${fe.length}）</button>
              ${W==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${L?"":"disabled"}>${ee?"收起表单":"+ 新建场景"}</button>`:W==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${W==="manual"}" data-scene-tab="manual">快捷场景（${T.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${W==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${W==="rules"}" data-scene-tab="rules">条件联动（${ue.length+le.length}）</button>
          </nav>
        </header>

        ${Q?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${H.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${Ae("x",16)}</button>
              </div>
              ${H.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':H.map(u=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${d(u.name)}</div>
                            <div class="pacom-row-sub">${d(u.reason)}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${d(u.id)}" ${Ce?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${H.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${Ce?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${N?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${Ae("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${X==="all"}" data-log-filter="all">全部（${fe.length}）</button>
                  <button class="pacom-tab" aria-selected="${X==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${E.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${E.map(u=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${d(u.device)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${d(u.source)}</span>
                        </div>
                        <span class="pacom-row-sub">${d(u.action)} · ${d(u.at)}</span>
                      </div>
                      <span class="pacom-badge ${u.status==="verified"?"pacom-badge--online":u.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${u.status==="verified"?"回读确认":u.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${pe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${d(pe)}</span></div>`:""}
          ${ge?`<div class="pacom-alert-banner">${d(ge)}</div>`:""}

          ${W==="manual"?`
              ${V?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${d(V.batchId)}</span>
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
                            ${V.receipts.map(u=>`
                                <tr>
                                  <td><code style="font-size:12px;">${d(u.deviceId)}</code></td>
                                  <td>${d(u.command)}</td>
                                  <td>${d(String(u.targetValue))}${u.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${d(u.errorMessage)}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${u.status==="verified_success"?"pacom-badge--online":u.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${d(u.status)}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${ee?`
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
                          <span class="pacom-setting-title">联动动作列表（${ye.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${ye.map((u,A)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" name="draftDevice-${A}" data-draft-dev="${A}" aria-label="目标设备">
                                ${M.map(J=>`<option value="${d(J.id)}" ${J.id===u.deviceId?"selected":""}>${d(J.name)}</option>`).join("")}
                              </select>
                              <select class="pacom-select" name="draftCommand-${A}" data-draft-cmd="${A}" aria-label="执行指令">
                                <option value="lighting.dimming" ${u.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${u.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${u.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" name="draftTargetValue-${A}" data-draft-val="${A}" value="${d(u.targetValue)}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${A}" ${ye.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" ${L?"":"disabled"}>保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${d(me)}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${re.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${re.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':re.map(u=>{const A=us(u),J=u.actions.slice(0,3).map(Ie=>{const Pe=M.find(qe=>qe.id===Ie.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??Ie.deviceId,Be=Ie.command==="lighting.dimming"?`亮度 ${Ie.targetValue}%`:Ie.command==="hvac.setpoint"?`设温 ${Ie.targetValue}°C`:Ie.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${d(Pe)} → ${d(Be)}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${d(u.name)}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${A.map(Ie=>`<span class="pacom-badge pacom-badge--accent">${d(Ie)}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${u.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${d(u.description)}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${J}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${d(u.lastExecutedAt?u.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行")}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${d(u.id)}" ${Ce?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:W==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${G.title}</div>
                    <span class="pacom-kpi-delta">${G.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${G.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${G.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${H.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${Ra.map(u=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${ie===u.id}" data-oss-mode="${u.id}" ${Ce?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${u.title}</strong>
                          <span class="pacom-badge ${ie===u.id?"pacom-badge--online":"pacom-badge--neutral"}">${ie===u.id?"当前生效":u.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${u.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${u.estSaving}</span>
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
                          ${ne.map(u=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${d(u.name)}</span>
                                    ${u.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${d(u.windowLabel)}</div>
                                </td>
                                <td>${ms(u.startHour,u.endHour,u.enabled)}</td>
                                <td><span class="pacom-row-sub">${d(u.scope)}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${u.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${u.enabled}"
                                      aria-label="切换排程 ${d(u.name)}"
                                      data-toggle-schedule="${d(u.id)}"
                                      ${Ce?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(u=>{const A=u==="all"?"全部":_t[u]??u,J=u==="all"?ue.length+le.length:u==="cbm"?le.length:ue.filter(Ie=>Ie.category===u).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${B===u}" data-rule-cat="${u}">
                              <span>${A}</span><span class="pacom-count-num">${J}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${je.map(u=>{const A=F===u.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${d(_t[u.category]??u.category)}</span>
                                  <span>${d(u.name)}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${u.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${d(u.summary)} · 范围：${d(u.scopeLabel)} · 回执：${d(u.receiptSummary??"已同步")}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${d(u.id)}">${A?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${u.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${u.enabled?"true":"false"}"
                                  aria-label="切换 ${d(u.name)}"
                                  data-toggle-strategy-rule="${d(u.id)}"
                                  data-rule-ver="${u.version}"
                                  data-rule-next="${!u.enabled}"
                                  ${v?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${A?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${u.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":u.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${d(u.scopeLabel)} · 当前版本：v${u.version} · 最近同步：${d(u.receiptSummary??"已同步")}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${Le?le.map(u=>{const A=Math.min(100,Math.round(u.runtimeHours/u.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${d(u.name)}</span>
                                      <span class="pacom-badge ${A>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${u.runtimeHours} / ${u.thresholdHours} h（${A}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${A}%; background:${A>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${d(u.equipment)} · 上次重置：${d(u.lastReset)}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${u.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${u.enabled}" data-toggle-cbm="${d(u.id)}" aria-label="切换 ${d(u.name)}" ${v?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,Ga(t,{onToggle:()=>{r=!r,P(),r&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:u=>{m=u,P();const A=t.querySelector("[data-global-space-search]");A&&(A.focus(),A.setSelectionRange(u.length,u.length))},onPick:u=>{c=u,r=!1,P()}}),t.querySelectorAll("[data-scene-tab]").forEach(u=>{u.addEventListener("click",()=>{W=u.dataset.sceneTab??"manual",pe="",P()})}),t.querySelectorAll("[data-toggle-overrides]").forEach(u=>{u.addEventListener("click",()=>{Q=!Q,P()})}),t.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{Ce&&(H=[],pe="已释放全部人工覆盖设备，自动节能策略已恢复托管。",P())}),t.querySelectorAll("[data-release-one]").forEach(u=>{u.addEventListener("click",()=>{if(!Ce)return;const A=u.dataset.releaseOne;H=H.filter(J=>J.id!==A),pe="已恢复该设备的自动策略托管。",P()})}),t.querySelectorAll("[data-toggle-cmdlog]").forEach(u=>{u.addEventListener("click",()=>{N=!N,P()})}),t.querySelectorAll("[data-log-filter]").forEach(u=>{u.addEventListener("click",()=>{X=u.dataset.logFilter??"all",P()})}),t.querySelector("[data-close-batch]")?.addEventListener("click",()=>{V=null,P()}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(u=>{u.addEventListener("click",()=>{if(!Ce)return;const A=u.dataset.ossMode;if(!A)return;ie=A;const J=Ra.find(Ie=>Ie.id===A);pe=`已切换至「${J?.title??A}」模式（明日预测启动 ${J?.predictedStart??""}）。`,P()})}),t.querySelectorAll("[data-toggle-schedule]").forEach(u=>{u.addEventListener("click",()=>{if(!Ce)return;const A=u.dataset.toggleSchedule,J=ne.find(Ie=>Ie.id===A);J&&(J.enabled=!J.enabled,pe=`排程「${J.name}」已${J.enabled?"恢复启用":"临时暂停"}。`,P())})}),t.querySelectorAll("[data-rule-cat]").forEach(u=>{u.addEventListener("click",()=>{B=u.dataset.ruleCat??"all",P()})}),t.querySelectorAll("[data-expand-rule]").forEach(u=>{u.addEventListener("click",()=>{const A=u.dataset.expandRule??null;F=F===A?null:A,P()})}),t.querySelectorAll("[data-toggle-cbm]").forEach(u=>{u.addEventListener("click",()=>{if(!v)return;const A=le.find(J=>J.id===u.dataset.toggleCbm);A&&(A.enabled=!A.enabled,pe=`工时维保规则「${A.name}」已${A.enabled?"启用":"停用"}。`,P())})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(u=>{u.addEventListener("click",async()=>{if(v){ge="";try{await e.toggleRuntimeRule(u.dataset.toggleStrategyRule,u.dataset.ruleNext==="true",Number(u.dataset.ruleVer)),j=await e.getRuntimeSettings(S.projectId),pe="条件联动规则状态与版本回执已更新。",P()}catch(A){ge=A instanceof Error?A.message:String(A),P()}}})}),t.querySelectorAll("[data-toggle-create]").forEach(u=>{u.addEventListener("click",()=>{!L&&!ee||(ee=!ee,P())})}),t.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{L&&(ye.push({deviceId:M[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),P())}),t.querySelectorAll("[data-del-draft-action]").forEach(u=>{u.addEventListener("click",()=>{if(!L)return;const A=Number(u.dataset.delDraftAction);ye.length>1&&(ye.splice(A,1),P())})}),t.querySelectorAll("[data-draft-dev]").forEach(u=>{u.addEventListener("change",()=>{if(!L)return;const A=ye[Number(u.dataset.draftDev)];A&&(A.deviceId=u.value)})}),t.querySelectorAll("[data-draft-cmd]").forEach(u=>{u.addEventListener("change",()=>{if(!L)return;const A=ye[Number(u.dataset.draftCmd)];A&&(A.command=u.value)})}),t.querySelectorAll("[data-draft-val]").forEach(u=>{u.addEventListener("change",()=>{if(!L)return;const A=ye[Number(u.dataset.draftVal)];A&&(A.targetValue=u.value)})}),t.querySelector("[data-scene-search]")?.addEventListener("input",u=>{const A=u.currentTarget,J=A.selectionStart??A.value.length;me=A.value,P();const Ie=t.querySelector("[data-scene-search]");Ie&&(Ie.focus(),Ie.setSelectionRange(J,J))}),t.querySelectorAll("[data-exec-scene]").forEach(u=>{u.addEventListener("click",async()=>{if(!Ce)return;ge="";const A=T.find(J=>J.id===u.dataset.execScene);try{V=await e.executeScene(u.dataset.execScene),T=await e.listScenes(S.floorId),fe.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:A?.name??"E7F 场景",action:`${V.receipts.length} 台设备联动下发`,status:"verified"}),P()}catch(J){ge=J instanceof Error?J.message:String(J),P()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async u=>{if(u.preventDefault(),!L)return;const A=new FormData(u.currentTarget);try{await e.createScene({projectId:S.projectId,floorId:S.floorId,name:String(A.get("name")??""),description:String(A.get("description")??""),actions:ye.map(J=>({deviceId:J.deviceId,command:J.command,targetValue:J.targetValue==="true"?!0:J.targetValue==="false"?!1:Number(J.targetValue)||50}))}),T=await e.listScenes(S.floorId),ee=!1,pe=`快捷场景已保存（共绑定 ${ye.length} 条联动动作）。`,P()}catch(J){ge=J instanceof Error?J.message:String(J),P()}})}P(),window.addEventListener("hashchange",()=>O(),{once:!0})}const At={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function lt(t,e){return t.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':t.map(s=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${d(s.name)}</span>
            <span class="pacom-badge pacom-badge--neutral">v${s.version}</span>
            <span class="pacom-badge pacom-badge--accent">${d(s.scopeLabel)}</span>
          </span>
          <span class="pacom-setting-desc">${d(s.summary)} · 回执：${d(s.receiptSummary??"已同步")}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${s.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${s.enabled?"true":"false"}"
            aria-label="切换 ${d(s.name)}"
            data-toggle-rule="${d(s.id)}"
            data-rule-ver="${s.version}"
            data-rule-next="${!s.enabled}"
            ${e?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function gs(t,e,s){let c="calendar",r=Za(),m=!1,y="";const[T,j]=await Promise.all([e.getSpatialTree(),e.getRuntimeSettings(S.projectId)]);let M=j,W=M.calendar.workdayStart,ie=M.calendar.workdayEnd,B=M.calendar.nightGuardStart,V=M.calendar.nightGuardEnd,me=!0,ee=[];const Q=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let N="flat";const X={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},F={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},pe={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},ge={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},H=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let fe="",le="";function ye(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(P=>{const te=At[P];return`
                <button type="button" class="pacom-unified-item" aria-current="${c===P}" data-stab="${P}">
                  ${Ae(te.icon,16)}
                  <span>${te.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function ne(){const O=s.scope.canEditSettings,P=s.scope.activeOverrides.find(E=>E.module==="settings"&&E.status==="active"),te=T.projects[0]?.name??"当前项目",re=M.rules.filter(E=>E.category==="weather_area"),ue=M.rules.filter(E=>E.category==="metering_carbon"),je=M.rules.filter(E=>E.category==="templates"),Le=At[c];t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Wa({tree:T,session:s,scope:r,maxGranularity:"project",isOpen:m,searchKeyword:y})}
            </div>
            <div class="pacom-header-meta">
              ${O?P?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${ye()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${Le.label}</h2>
                <p class="pacom-unified-subtitle">${Le.subtitle}</p>
              </div>
              ${P?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 · ${P.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${d(P.approvedBy)} · 到期自动收回：${d(P.expiresAt.slice(0,16).replace("T"," "))} · 事由：${d(P.reason)}</span>
                      </div>
                    </div>`:""}
              ${fe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${d(fe)}</span></div>`:""}
              ${le?`<div class="pacom-alert-banner">${d(le)}</div>`:""}

              ${c==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${M.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calWorkdayStart" style="width:116px;" type="time" data-cal-start value="${d(W)}" aria-label="工作日上班时间" ${O?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" name="calWorkdayEnd" style="width:116px;" type="time" data-cal-end value="${d(ie)}" aria-label="工作日下班时间" ${O?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calNightGuardStart" style="width:116px;" type="time" data-night-start value="${d(B)}" aria-label="夜间值守开始" ${O?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" name="calNightGuardEnd" style="width:116px;" type="time" data-night-end value="${d(V)}" aria-label="夜间值守结束" ${O?"":"disabled"} />
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
                      <span class="pacom-row-sub">共 ${Q.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${Q.map(E=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${d(E.date)}</span><span class="pacom-badge pacom-badge--accent">${d(E.mode)}</span></span>
                              <span class="pacom-setting-desc">${d(E.label)}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${d(E.id)}" ${O?"":"disabled"}>移除</button>
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

                  ${ee.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${ee.length} 条</span>
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
                                ${ee.map(E=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${d(E.ruleName)}</div>
                                        ${E.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${d(E.conflictWarning)}</div>`:""}
                                      </td>
                                      <td>${d(E.beforeWindow)}</td>
                                      <td><strong>${d(E.afterWindow)}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${E.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${E.conflictWarning?"交叠警告":"自动跟随"}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>`:""}`:c==="energy_weather"?`
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
                            <select class="pacom-select" name="energyWeatherSource" data-energy-field="weatherSource" aria-label="室外气象数据源" ${O?"":"disabled"}>
                              <option value="guanzhou_station" ${X.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${X.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${d(te)}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" name="energyBillingArea" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${d(X.billingArea)}" aria-label="计费面积" ${O?"":"disabled"} />
                          </div>
                        </div>
                        ${lt(re,O)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${N==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${N==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${N==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" name="energyTariffYuan" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${d(X.tariffYuan)}" aria-label="综合电价" ${O?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" name="energyTariffPeak" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${d(X.tariffPeak)}" aria-label="峰段电价" ${O?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" name="energyTariffFlat" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${d(X.tariffFlat)}" aria-label="平段电价" ${O?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" name="energyTariffValley" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${d(X.tariffValley)}" aria-label="谷段电价" ${O?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" name="energyCarbonFactor" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${O?"":"disabled"}>
                              <option value="0.5271" ${X.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${X.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${lt(ue,O)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${O?"":"disabled"}>保存口径参数</button>
                        </div>
                      </div>
                    </section>`:c==="guardrails"?`
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
                              <input class="pacom-input" name="guardMinTemp" style="width:72px;" type="number" data-guard-field="minTemp" value="${d(F.minTemp)}" aria-label="最低设定温度" ${O?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" name="guardMaxTemp" style="width:72px;" type="number" data-guard-field="maxTemp" value="${d(F.maxTemp)}" aria-label="最高设定温度" ${O?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" name="guardOverrideAutoRelease" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${O?"":"disabled"}>
                                <option value="2h" ${F.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${F.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${F.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${F.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" name="guardReadbackTimeoutSec" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${d(F.readbackTimeoutSec)}" aria-label="回读超时阈值" ${O?"":"disabled"} />
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
                          ${lt(je,O)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${d(ge.dailyDigestTime)}" aria-label="每日简报发送时间" ${O?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ge.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${O?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ge.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${O?"":"disabled"}>
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
                              <input class="pacom-input" name="autoWoDelayMin" style="width:72px;" type="number" data-auto-wo="delayMin" value="${d(pe.delayMin)}" aria-label="自动派单延迟分钟数" ${O?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${pe.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${O?"":"disabled"}>
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
                              <select class="pacom-select" name="autoWoDefaultGroup" data-auto-wo="defaultGroup" aria-label="默认处理组" ${O?"":"disabled"}>
                                <option value="暖通运维组" ${pe.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${pe.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${pe.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${pe.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${O?"":"disabled"}>
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
                                ${H.map(E=>`
                                    <tr>
                                      <td><strong>${d(E.groupName)}</strong></td>
                                      <td>${d(E.scope)}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${d(E.severity)}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${d(E.channels)}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${E.enabled}" data-toggle-nr="${d(E.id)}" aria-label="切换 ${d(E.groupName)} 通知规则" ${O?"":"disabled"}>
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
    `,Ga(t,{onToggle:()=>{m=!m,ne(),m&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:E=>{y=E,ne();const G=t.querySelector("[data-global-space-search]");G&&(G.focus(),G.setSelectionRange(E.length,E.length))},onPick:E=>{r=E,m=!1,ne()}}),t.querySelectorAll("[data-stab]").forEach(E=>{E.addEventListener("click",()=>{c=E.dataset.stab??"calendar",fe="",le="",ne()})}),t.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{O&&(me=!me,fe=`法定节假日自动跳过已${me?"开启":"关闭"}。`,ne())}),t.querySelector("[data-night-start]")?.addEventListener("change",E=>{O&&(B=E.currentTarget.value)}),t.querySelector("[data-night-end]")?.addEventListener("change",E=>{O&&(V=E.currentTarget.value)}),t.querySelector("[data-add-sd-form]")?.addEventListener("submit",E=>{if(E.preventDefault(),!O)return;const G=new FormData(E.currentTarget);Q.push({id:`sd-${Date.now()}`,date:String(G.get("date")??""),label:String(G.get("label")??""),mode:String(G.get("mode")??"保持工作日工况")}),fe="已添加特殊例外日期，当日自动覆盖默认节假日排程。",ne()}),t.querySelectorAll("[data-del-sd]").forEach(E=>{E.addEventListener("click",()=>{if(!O)return;const G=Q.findIndex(Ce=>Ce.id===E.dataset.delSd);G>=0&&Q.splice(G,1),ne()})}),t.querySelectorAll("[data-tariff-mode]").forEach(E=>{E.addEventListener("click",()=>{N=E.dataset.tariffMode??"flat",ne()})}),t.querySelectorAll("[data-energy-field]").forEach(E=>{E.addEventListener("change",()=>{if(!O)return;const G=E.dataset.energyField;G&&(X[G]=E.value)})}),t.querySelector("[data-save-energy]")?.addEventListener("click",()=>{O&&(fe=N==="flat"?`能耗计费与气象口径已保存（面积 ${X.billingArea} m² · 综合电价 ¥${X.tariffYuan}/kWh · 因子 ${X.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${X.tariffPeak} / 平 ¥${X.tariffFlat} / 谷 ¥${X.tariffValley}）。`,ne())}),t.querySelectorAll("[data-guard-field]").forEach(E=>{E.addEventListener("change",()=>{if(!O)return;const G=E.dataset.guardField;G&&(F[G]=E.value)})}),t.querySelector("[data-save-guard]")?.addEventListener("click",()=>{O&&(fe=`控制保护参数已保存（温区 ${F.minTemp}–${F.maxTemp}°C · 超时 ${F.readbackTimeoutSec}s）。`,ne())}),t.querySelectorAll("[data-auto-wo]").forEach(E=>{E.addEventListener("change",()=>{if(!O)return;const G=E.dataset.autoWo;G&&(pe[G]=E.value),fe="超时自动派单配置已更新。",ne()})}),t.querySelectorAll("[data-toggle-autowo]").forEach(E=>{E.addEventListener("click",()=>{if(!O)return;const G=E.dataset.toggleAutowo;G&&(pe[G]=!pe[G],fe="自动派单保护策略已更新。",ne())})}),t.querySelector("[data-digest-time]")?.addEventListener("change",E=>{O&&(ge.dailyDigestTime=E.currentTarget.value,fe=`每日晨间简报发送时刻已更新为 ${ge.dailyDigestTime}。`,ne())}),t.querySelectorAll("[data-notify-key]").forEach(E=>{E.addEventListener("click",()=>{if(!O)return;const G=E.dataset.notifyKey;G&&(ge[G]=!ge[G],fe="消息通知偏好已更新。",ne())})}),t.querySelectorAll("[data-toggle-nr]").forEach(E=>{E.addEventListener("click",()=>{if(!O)return;const G=H.find(Ce=>Ce.id===E.dataset.toggleNr);G&&(G.enabled=!G.enabled,fe=`工作组「${G.groupName}」的分流推送规则已${G.enabled?"启用":"停用"}。`,ne())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",E=>{O&&(W=E.currentTarget.value)}),t.querySelector("[data-cal-end]")?.addEventListener("change",E=>{O&&(ie=E.currentTarget.value)}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{le="";try{ee=await e.previewCalendarImpact(S.projectId,W,ie),ne()}catch(E){le=E instanceof Error?E.message:String(E),ne()}}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{if(O){le="";try{const E=await e.saveWorkCalendar(S.projectId,W,ie,M.calendar.version);M={...M,calendar:{...E,nightGuardStart:B,nightGuardEnd:V}},fe=`工作时间配置已保存至 v${E.version}（工作日 ${E.workdayStart}–${E.workdayEnd} · 夜间值守 ${B}–${V}）`,ee=[],ne()}catch(E){le=E instanceof Error?E.message:String(E),ne()}}}),t.querySelectorAll("[data-toggle-rule]").forEach(E=>{E.addEventListener("click",async()=>{if(O){le="";try{await e.toggleRuntimeRule(E.dataset.toggleRule,E.dataset.ruleNext==="true",Number(E.dataset.ruleVer)),M=await e.getRuntimeSettings(S.projectId),fe="策略状态与版本回执已更新。",ne()}catch(G){le=G instanceof Error?G.message:String(G),ne()}}})})}ne()}const jt="pacom.web.sidebar.collapsed",fs=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Lt=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],ut={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},Ct=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function rt(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in ut?t:"home"}function We(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const Ea=new WeakMap;function bs(t){Ea.get(t)?.()}async function hs(t,e,s,c){Ea.get(t)?.(),t.classList.remove("bare-login");let r=s,m=rt(),y=localStorage.getItem(jt)==="1",T=!1,j=!1,M=!1,W=await e.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],ie=e.getActiveOrganizationId?.()??W[0]?.id??"org-gzlab",B="",V=!1,me=0,ee={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function Q(v){return r.scope.visibleModules.includes(v)}Q(m)||(m="home",window.location.hash="#home");function N(){return W.find(v=>v.id===ie)??W[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function X(v){if(v.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const $=v.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${We($)}</span>`}async function F(){e.listOrganizations&&(W=await e.listOrganizations(),ie=e.getActiveOrganizationId?.()??W[0]?.id??"org-gzlab")}async function pe(){try{await F();const[v,$,D,u,A]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(S.floorId).catch(()=>[]),e.listAlarms(S.floorId).catch(()=>[]),e.listWorkOrders(S.floorId).catch(()=>[]),e.listScenes(S.floorId).catch(()=>[])]);ee={devices:$,zones:v.zones,alarms:D,workOrders:u,scenes:A},me=D.filter(J=>J.status==="active").length,P()}catch{}}function ge(){const v=Lt.filter(D=>Q(D.id));let $=!1;return v.map(D=>`
        ${(D.id==="settings"||D.id==="deployment")&&!$?($=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${D.id}" aria-current="${m===D.id?"page":"false"}" title="${D.label}">
          ${Ae(D.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${D.label}</span>
          ${D.id==="alarms"&&me>0?`<span class="pacom-nav-count" title="待处理告警 ${me} 条">${me}</span>`:""}
        </button>`).join("")}function H(){const v=B.trim().toLowerCase(),$=Lt.filter(ae=>Q(ae.id)),D=v?$.filter(ae=>ae.label.toLowerCase().includes(v)).slice(0,4):$,u=v?ee.devices.filter(ae=>`${ae.name} ${ae.id} ${ae.category}`.toLowerCase().includes(v)).slice(0,5):ee.devices.slice(0,3),A=v?ee.zones.filter(ae=>ae.name.toLowerCase().includes(v)).slice(0,3):[],J=Q("alarms")?v?ee.alarms.filter(ae=>`${ae.title} ${ae.message} ${ae.id}`.toLowerCase().includes(v)).slice(0,4):ee.alarms.filter(ae=>ae.status==="active").slice(0,2):[],Ie=Q("alarms")?v?ee.workOrders.filter(ae=>`${ae.title} ${ae.id}`.toLowerCase().includes(v)).slice(0,3):[]:[],Pe=Q("scenes")?v?ee.scenes.filter(ae=>`${ae.name} ${ae.description}`.toLowerCase().includes(v)).slice(0,3):[]:[],Be=Q("deployment")?v?Ct.filter(ae=>`${ae.title} ${ae.category}`.toLowerCase().includes(v)).slice(0,4):Ct.slice(0,2):[],qe=[];return u.length&&qe.push(`<div class="pacom-search-group">${v?"设备（空间总览）":"常用设备直达"}</div>`+u.map(ae=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(ae.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${We(ae.name)}</span><span class="pacom-badge ${ae.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${ae.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),A.length&&qe.push('<div class="pacom-search-group">功能区</div>'+A.map(ae=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(ae.id)}"><span>${We(ae.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),J.length&&qe.push(`<div class="pacom-search-group">${v?"告警":"待处理告警"}</div>`+J.map(ae=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(ae.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${We(ae.title)}</span><span class="pacom-badge pacom-badge--warning">${ae.status==="active"?"待处理":"已确认"}</span></button>`).join("")),Ie.length&&qe.push('<div class="pacom-search-group">运维工单</div>'+Ie.map(ae=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(ae.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${We(ae.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),Pe.length&&qe.push('<div class="pacom-search-group">智能策略</div>'+Pe.map(ae=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${We(ae.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),Be.length&&qe.push('<div class="pacom-search-group">图纸与工程文档</div>'+Be.map(ae=>`<button type="button" class="pacom-search-hit" data-search-hash="${ae.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${We(ae.title)}</span><span class="pacom-badge pacom-badge--neutral">${We(ae.category)}</span></button>`).join("")),D.length&&qe.push('<div class="pacom-search-group">工作区</div>'+D.map(ae=>`<button type="button" class="pacom-search-hit" data-search-hash="#${ae.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${Ae(ae.icon,14)}${We(ae.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),qe.length?qe.join(""):`<div class="pacom-nav-empty">未找到与「${We(B)}」匹配的设备、区域、告警、工单或图纸</div>`}function fe(v){v.querySelectorAll("[data-search-hash]").forEach($=>{$.addEventListener("click",()=>{const D=$.dataset.searchHash||"#home";V=!1,B="",le(),T=!1,window.location.hash===D?(m=rt(),Le(!0)):window.location.hash=D})})}function le(){if(t.querySelector('[data-role="cmd-scrim"]')?.remove(),!V)return;const v=document.createElement("div");v.className="pacom-cmd-scrim",v.dataset.role="cmd-scrim",v.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${Ae("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${We(B)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${H()}
        </div>
      </div>
    `,t.appendChild(v),v.addEventListener("click",u=>{u.target===v&&(V=!1,le())});const $=v.querySelector('[data-role="cmd-input"]'),D=v.querySelector('[data-role="cmd-body"]');D&&fe(D),$?.focus(),$?.addEventListener("input",u=>{B=u.currentTarget.value,D&&(D.innerHTML=H(),fe(D))})}function ye(){if(!j)return"";const v=r.displayName.slice(0,1)||"U",$=!!(e.createOrganization&&r.role==="org_admin");return`
      <div class="pacom-org-popover ${y?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${W.map(D=>{const u=D.id===ie;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${u}" data-pop-org="${We(D.id)}">
                ${X(D)}
                <span class="pacom-pop-text">
                  <b>${We(D.name)}</b>
                  <small>${D.projectCount>0?`${D.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${u?Ae("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${$?M?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${Ae("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${Ae("settings",16)}</span>
          <span class="pacom-pop-text">机构与权限</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${We(v)}</span>
          <span class="pacom-pop-text">
            <b>${We(r.displayName)}</b>
            <small>${We(r.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${Ae("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function ne(v){switch(Q(m)||(m="home",window.location.hash="#home"),document.title=`${ut[m]} · PACOM Station`,m){case"home":await Ht(v,e,r);return;case"analysis":await Vt(v,e,r);return;case"alarms":await ns(v,e,r);return;case"scenes":await vs(v,e,r);return;case"settings":await gs(v,e,r);return;case"deployment":await ds(v,e,r);return;case"account":await Xt(v,e,r,$=>{r=$,P(),te()},O);return}}async function O(){j=!1,T=!1,V=!1,L();try{await e.logout()}finally{window.location.hash="#login",c()}}function P(){const v=t.querySelector('[data-role="nav-list"]');v&&(v.innerHTML=ge(),re())}function te(){t.querySelector('[data-role="org-popover"]')?.remove();const v=t.querySelector('[data-role="org-menu-btn"]');if(v&&v.setAttribute("aria-expanded",String(j)),!j)return;const $=document.createElement("div");$.innerHTML=ye().trim();const D=$.firstElementChild;D&&(t.appendChild(D),je())}function re(){t.querySelectorAll("[data-route]").forEach(v=>{v.addEventListener("click",()=>{const $=v.dataset.route;$===m&&!T||(m=$,T=!1,j=!1,window.location.hash=`#${m}`,Le(!0))})})}async function ue(v){if(!e.switchOrganization)return;await e.switchOrganization(v),await F();const $=await e.getSpatialTree(),D=$.projects[0],u=D?$.buildings.find(J=>J.projectId===D.id):void 0,A=u?$.floors.find(J=>J.buildingId===u.id&&J.id===S.floorId)??$.floors.find(J=>J.buildingId===u.id):void 0;D&&u&&A?ga({level:"floor",projectId:D.id,buildingId:u.id,floorId:A.id}):D&&u?ga({level:"building",projectId:D.id,buildingId:u.id}):D?ga({level:"project",projectId:D.id}):ga({level:"all-projects"}),j=!1,M=!1,T=!1,await Le(!0),pe()}function je(){t.querySelectorAll("[data-pop-org]").forEach(v=>{v.addEventListener("click",()=>{const $=v.dataset.popOrg;if($){if($===ie){j=!1,te();return}ue($)}})}),t.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",v=>{v.stopPropagation(),M=!M,te(),M&&t.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),t.querySelector("[data-create-org-form]")?.addEventListener("submit",async v=>{if(v.preventDefault(),!e.createOrganization)return;const $=new FormData(v.currentTarget),D=String($.get("orgName")??"").trim();if(!D)return;const u=await e.createOrganization(D);await ue(u.id)}),t.querySelectorAll('[data-pop-act="go-account"]').forEach(v=>{v.addEventListener("click",()=>{j=!1,M=!1,T=!1,m="account",window.location.hash="#account",Le(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{O()})}async function Le(v){const $=t.querySelector('[data-role="main-stage"]');if(!v&&$){const u=t.querySelector(".pacom-nav-rail");u&&(u.classList.toggle("is-collapsed",y),u.classList.toggle("is-mobile-open",T));const A=t.querySelector('[data-role="mobile-scrim"]');A&&A.classList.toggle("is-open",T),te();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${Ae("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${ut[m]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${We(r.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${T?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${y?"is-collapsed":""} ${T?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${fs}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${y?"展开侧栏":"收起侧栏"}" aria-label="${y?"展开侧栏":"收起侧栏"}">
              ${Ae("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${Ae("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${ge()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${m==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${j}" title="${We(N().name)} · ${We(r.displayName)}">
              ${X(N())}
              <span class="pacom-org-name">${We(N().name)}</span>
              ${Ae("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{y=!y,j=!1,localStorage.setItem(jt,y?"1":"0");const u=t.querySelector(".pacom-nav-rail"),A=t.querySelector('[data-role="toggle-sidebar"]');u&&u.classList.toggle("is-collapsed",y),A&&(A.title=y?"展开侧栏":"收起侧栏",A.setAttribute("aria-label",A.title),A.innerHTML=Ae("panel-left",16)),te()}),t.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{j=!1,te(),V=!0,le()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{T=!T,Le(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{T=!1,j=!1,Le(!1)}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",u=>{u.stopPropagation(),j=!j,te()}),re(),te(),le();const D=t.querySelector('[data-role="main-stage"]');D&&await ne(D)}const E=v=>{const $=v.target;j&&!$?.closest('[data-role="org-popover"]')&&!$?.closest('[data-role="org-menu-btn"]')&&(j=!1,te())},G=v=>{if((v.metaKey||v.ctrlKey)&&v.key.toLowerCase()==="k"){v.preventDefault(),j=!1,te(),V=!V,le();return}v.key==="Escape"&&(V?(V=!1,le()):j?(j=!1,te()):T&&(T=!1,Le(!1)))},Ce=()=>{m=rt(),j=!1,T=!1,V=!1,Le(!0),pe()};function L(){document.removeEventListener("click",E),document.removeEventListener("keydown",G),window.removeEventListener("hashchange",Ce),Ea.get(t)===L&&Ea.delete(t)}Ea.set(t,L),document.addEventListener("click",E),document.addEventListener("keydown",G),window.addEventListener("hashchange",Ce),await Le(!0),pe()}const aa=["password","sms"];function ct(t){const e=Wt(t);return e==="cn"||e==="phone"}const Ia=new WeakMap;function qt(t){Ia.get(t)?.()}function ys(t,e,s,c){Ia.get(t)?.(),t.classList.add("bare-login"),document.title="登录 · PACOM Station";let r=!1,m=!1,y=(c?.prefillAccount??"").trim(),T="",j=ct(y)?y:"",M="",W=!1,ie=(c?.notice??"").trim(),B={},V="",me=!1,ee="",Q=0,N=null,X=0,F=null,pe=1,ge="",H="",fe="",le="",ye=!1,ne=!1,O={},P="",te=0,re=null,ue=0,je=null,Le=null,E=null,G=null,Ce=!1;const L=Dt();function v(p){if(p.key==="Escape"){if(L.isOpen()){p.preventDefault(),L.close(!0);return}F&&(p.preventDefault(),Me())}}function $(p){const x=t.querySelector('[data-role="mode-seg"]'),de=x?.querySelector(".au-mode-indicator"),Ee=x?.querySelector('.au-mode-tab[aria-selected="true"]');!de||!Ee||(de.style.transition=p?"":"none",de.style.transform=`translateX(${Ee.offsetLeft}px)`,de.style.width=`${Ee.offsetWidth}px`,p||(de.offsetWidth,de.style.transition=""))}function D(){$(!1)}function u(){Q=0,N!==null&&(window.clearInterval(N),N=null)}function A(){te=0,re!==null&&(window.clearInterval(re),re=null)}function J(){Le?.(),Le=null,E?.(),E=null}function Ie(){Ce=!0,G?.(),G=null,J(),L.destroy(),u(),A(),document.removeEventListener("keydown",v),window.removeEventListener("resize",D),t.classList.remove("bare-login"),Ia.get(t)===Ie&&Ia.delete(t)}document.addEventListener("keydown",v),window.addEventListener("resize",D),Ia.set(t,Ie);function Pe(p=60){u(),Q=p,N=window.setInterval(()=>{Q-=1,Q<=0&&u();const x=t.querySelector('[data-act="send-sms"]');x&&(x.disabled=Q>0,x.textContent=Q>0?`${Q} 秒后重发`:ee?"重新获取":"获取验证码")},1e3)}function Be(p=60){A(),te=p,re=window.setInterval(()=>{te-=1,te<=0&&A();const x=t.querySelector('[data-act="reset-resend"]');x&&(x.disabled=te>0||ne,x.textContent=te>0?`${te} 秒后重发`:"重新获取")},1e3)}function qe(p){ie=p.trim();const x=t.querySelector('[data-role="login-notice"]');if(!ie){x?.remove();return}if(x){const Ee=x.querySelector("span");Ee&&(Ee.textContent=ie);return}const de=t.querySelector(".au-h1");de&&de.insertAdjacentHTML("afterend",`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${Ua}<span>${d(ie)}</span></div>`)}function ae(){const p=t.querySelector("#au-login-ferr");if(p)if(V){p.hidden=!1;const x=p.querySelector('[data-role="ferr-text"]');x&&(x.textContent=V)}else p.hidden=!0}function h(p){const x=t.querySelector(`.au-field[data-f="${p}"]`),de=t.querySelector(`#au-${p}`),Ee=t.querySelector(`#au-${p}-err`),we=B[p]??"";x?.classList.toggle("bad",!!we),de?.setAttribute("aria-invalid",we?"true":"false"),Ee&&(Ee.textContent=we)}function b(p,x){const de=p.querySelector(`.au-field[data-f="${x}"]`),Ee=p.querySelector(`#au-${x}`),we=p.querySelector(`#au-${x}-err`),Fe=O[x]??"";de?.classList.toggle("bad",!!Fe),Ee?.setAttribute("aria-invalid",Fe?"true":"false"),we&&(we.textContent=Fe)}function Z(p){const x=p.querySelector("#au-rs-ferr");if(x)if(P){x.hidden=!1;const de=x.querySelector('[data-role="rs-ferr-text"]');de&&(de.textContent=P)}else x.hidden=!0}function oe(){const p=t.querySelector('form[data-form="login"] fieldset'),x=t.querySelector('form[data-form="login"] button[type="submit"]');p&&(p.disabled=me),x&&(x.disabled=me,x.innerHTML=me?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"<span>登录</span>")}function $e(p,x){L.close(!1),je=x??(document.activeElement instanceof HTMLElement?document.activeElement:null),F=p,De(),p==="reset"?t.querySelector(pe===1?"#au-rs_id":"#au-rs_code")?.focus():t.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function Me(p=!0){if(!F)return;L.close(!1),F=null,ue+=1,ne=!1,A(),J(),De();const x=je;je=null,p&&x&&document.contains(x)&&x.focus({preventScroll:!0})}function He(){if(pe===1){const x=ge.trim().length>0&&!ne;return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ha}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码。</p>
              <form id="au-reset-form" novalidate>
                <fieldset ${ne?"disabled":""}>
                  <div class="au-field ${O.rs_id?"bad":""}" data-f="rs_id">
                    <div class="au-lab"><label for="au-rs_id">电子邮箱或手机号码</label></div>
                    <div class="au-ctl">
                      <input id="au-rs_id" name="rs_id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(ge)}" aria-invalid="${O.rs_id?"true":"false"}" />
                    </div>
                    <p class="au-err" id="au-rs_id-err" aria-live="polite">${d(O.rs_id??"")}</p>
                  </div>
                  <div class="au-ferr" id="au-rs-ferr" role="alert" ${P?"":"hidden"}>
                    ${na}
                    <span data-role="rs-ferr-text">${d(P)}</span>
                  </div>
                </fieldset>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${x?"":"disabled"}>
                ${ne?'<span class="au-spinner" aria-hidden="true"></span><span>发送中…</span>':"<span>发送验证码</span>"}
              </button>
            </div>
          </section>
        </div>
      `}return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">重置密码</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ha}</button>
          </div>
          <div class="db">
            <div class="au-notice-soft au-reset-step-notice" role="status" aria-live="polite">
              <span class="au-notice-main">${Ua}<span>如该账户已注册，验证码已发送至 ${d(H)}</span></span>
              <button type="button" class="au-notice-action" data-act="reset-back-step1" ${ne?"disabled":""}>更换账户</button>
            </div>
            <form id="au-reset-confirm-form" novalidate>
              <fieldset ${ne?"disabled":""}>
                <div class="au-field ${O.rs_code?"bad":""}" data-f="rs_code">
                  <div class="au-lab">
                    <label for="au-rs_code">验证码</label>
                    <span>
                      <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-rs-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-rs-novcode-pop"><span>收不到验证码？</span></button>
                      <span id="au-rs-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
                        <span class="ws-info-text">请确认邮箱或手机号码无误，检查垃圾邮件或短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
                      </span>
                    </span>
                  </div>
                  <div class="au-ctl">
                    <input id="au-rs_code" name="rs_code" class="au-in has-code-btn" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(fe)}" aria-invalid="${O.rs_code?"true":"false"}" />
                    <button type="button" class="au-suffix au-getcode" data-act="reset-resend" ${te>0||ne?"disabled":""}>
                      ${te>0?`${te} 秒后重发`:"重新获取"}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_code-err" aria-live="polite">${d(O.rs_code??"")}</p>
                </div>

                <div class="au-field ${O.rs_pwd?"bad":""}" data-f="rs_pwd">
                  <div class="au-lab">
                    <span class="au-lab-group">
                      <label for="au-rs_pwd">设置新密码</label>
                      ${ka("au-rs-pwd-info","设置新密码说明",pt)}
                    </span>
                  </div>
                  <div class="au-ctl">
                    <input id="au-rs_pwd" name="rs_pwd" class="au-in has-suffix" type="${ye?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(le)}" aria-invalid="${O.rs_pwd?"true":"false"}" />
                    <button type="button" class="au-suffix au-eye" data-act="reset-toggle-eye" aria-controls="au-rs_pwd" aria-label="${ye?"隐藏密码":"显示密码"}">
                      ${ye?la:ia}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_pwd-err" aria-live="polite">${d(O.rs_pwd??"")}</p>
                </div>

                <div class="au-ferr" id="au-rs-ferr" role="alert" ${P?"":"hidden"}>
                  ${na}
                  <span data-role="rs-ferr-text">${d(P)}</span>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="submit" form="au-reset-confirm-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-confirm" ${ne?"disabled":""}>
              ${ne?'<span class="au-spinner" aria-hidden="true"></span><span>正在重置…</span>':"<span>确认重置</span>"}
            </button>
          </div>
        </section>
      </div>
    `}function Oe(){return F?F==="reset"?He():F==="contact"?Pt():"":""}function De(){const p=t.querySelector('[data-role="modal-host"]');if(!p||(J(),L.close(!1),p.innerHTML=Oe(),!F))return;L.bind(p),Le=Mt(p.querySelector(".au-account-dlg")),E=Nt(p),p.querySelectorAll('[data-act="close-modal"]').forEach(Fe=>{Fe.addEventListener("click",()=>Me())}),p.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",Fe=>{Fe.target===Fe.currentTarget&&Me()});const x=p.querySelector("#au-rs_id"),de=p.querySelector('[data-role="reset-submit"]');x?.addEventListener("input",()=>{ge=x.value,de&&(de.disabled=ge.trim().length===0||ne),(O.rs_id||P)&&(delete O.rs_id,P="",b(p,"rs_id"),Z(p))}),p.querySelector("#au-reset-form")?.addEventListener("submit",async Fe=>{if(Fe.preventDefault(),ne)return;O={},P="";const Ne=Ve(x?.value??ge);ge=Ne;const xe=Va(Ne);if(xe){O.rs_id=xe,b(p,"rs_id"),x?.focus({preventScroll:!0});return}const Se=++ue;ne=!0,De();try{const ze=await e.sendVerificationCode({target:Ne,purpose:"reset"});if(Ce||F!=="reset"||Se!==ue)return;ne=!1,H=ze.maskedTarget||oa(Ne),fe="",le="",O={},P="",pe=2,Be(ze.cooldownSeconds||60),De(),t.querySelector("#au-rs_code")?.focus({preventScroll:!0})}catch(ze){if(Ce||F!=="reset"||Se!==ue)return;ne=!1,P=ze instanceof Error?ze.message:"暂时无法发送验证码，请稍后再试。",De(),t.querySelector("#au-rs_id")?.focus({preventScroll:!0})}}),p.querySelector('[data-act="reset-back-step1"]')?.addEventListener("click",()=>{ne||(ue+=1,A(),pe=1,fe="",le="",O={},P="",De(),t.querySelector("#au-rs_id")?.focus({preventScroll:!0}))});const Ee=p.querySelector("#au-rs_code"),we=p.querySelector("#au-rs_pwd");Ee?.addEventListener("input",()=>{fe=Ee.value.replace(/\D/g,"").slice(0,6),Ee.value=fe,(O.rs_code||P)&&(delete O.rs_code,P="",b(p,"rs_code"),Z(p))}),we?.addEventListener("input",()=>{le=we.value,(O.rs_pwd||P)&&(delete O.rs_pwd,P="",b(p,"rs_pwd"),Z(p))}),p.querySelector('[data-act="reset-toggle-eye"]')?.addEventListener("click",Fe=>{ye=!ye;const Ne=Fe.currentTarget;if(we){const xe=we.selectionStart,Se=we.selectionEnd;we.type=ye?"text":"password",we.focus({preventScroll:!0}),xe!==null&&Se!==null&&we.setSelectionRange(xe,Se)}Ne.setAttribute("aria-label",ye?"隐藏密码":"显示密码"),Ne.innerHTML=ye?la:ia}),p.querySelector('[data-act="reset-resend"]')?.addEventListener("click",async()=>{if(te>0||ne)return;const Fe=Ve(ge),Ne=++ue,xe=p.querySelector('[data-act="reset-resend"]');xe&&(xe.disabled=!0,xe.textContent="发送中…"),P="",Z(p);try{const Se=await e.sendVerificationCode({target:Fe,purpose:"reset"});if(Ce||F!=="reset"||pe!==2||Ne!==ue)return;H=Se.maskedTarget||oa(Fe),Be(Se.cooldownSeconds||60),xe&&(xe.disabled=!0,xe.textContent=`${te} 秒后重发`),Ee?.focus({preventScroll:!0})}catch(Se){if(Ce||F!=="reset"||pe!==2||Ne!==ue)return;xe&&(xe.disabled=!1,xe.textContent="重新获取"),P=Se instanceof Error?Se.message:"暂时无法发送验证码，请稍后再试。",Z(p)}}),p.querySelector("#au-reset-confirm-form")?.addEventListener("submit",async Fe=>{if(Fe.preventDefault(),ne)return;O={},P="",/^\d{6}$/.test(fe.trim())||(O.rs_code="请输入 6 位验证码");const Ne=dt(le);if(Ne&&(O.rs_pwd=Ne),b(p,"rs_code"),b(p,"rs_pwd"),Z(p),Object.keys(O).length>0){const Se=Object.keys(O)[0];p.querySelector(`#au-${Se}`)?.focus({preventScroll:!0});return}const xe=Ve(ge);ne=!0,De();try{if(await e.confirmPasswordReset({account:xe,verificationCode:fe.trim(),newPassword:le}),Ce)return;Me(!1),y=xe,T="",ct(xe)&&(j=xe),V="",B={},r?ce("password",!1):(Ge(),ae()),qe("密码已重置，请使用新密码登录"),t.querySelector("#au-pwd")?.focus({preventScroll:!0})}catch(Se){if(Ce||F!=="reset")return;ne=!1,P=Se instanceof Error?Se.message:"验证码不正确或已过期，请检查后重试。",De(),t.querySelector("#au-rs_code")?.focus({preventScroll:!0})}})}function Ge(){L.close(!1);const p=`
      <span data-role="login-novcode-wrap" ${ee?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-login-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-login-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-login-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `,x=r?`
        <div class="au-field ${B.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(j)}" aria-invalid="${B.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${Q>0?"disabled":""}>
              ${Q>0?`${Q} 秒后重发`:ee?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${d(B.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${ee?`验证码已发送至 ${d(ee)}`:""}</p>
        </div>
      `:`
        <div class="au-field ${B.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(y)}" aria-invalid="${B.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${d(B.id??"")}</p>
        </div>
      `,de=r?`
        <div class="au-field ${B.scode?"bad":""}" data-f="scode">
          <div class="au-lab">
            <label for="au-scode">短信验证码</label>
            ${p}
          </div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(M)}" aria-invalid="${B.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${d(B.scode??"")}</p>
        </div>
      `:`
        <div class="au-field ${B.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab">
            <label for="au-pwd">密码</label>
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${m?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(T)}" aria-invalid="${B.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${m?"隐藏密码":"显示密码"}">
              ${m?la:ia}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${d(B.pwd??"")}</p>
        </div>
      `,Ee=t.querySelector('[data-role="fields-host"]');Ee&&(Ee.innerHTML=`${x}${de}`,be(Ee))}function ce(p,x=!1){const de=p==="sms";r===de||me||(de&&!j.trim()&&ct(y)?j=y.trim():!de&&!y.trim()&&j.trim()&&(y=j.trim()),r=de,B={},V="",t.querySelectorAll('[data-act="switch-mode"]').forEach(Ee=>{const we=Ee.dataset.mode===p;Ee.setAttribute("aria-selected",String(we)),Ee.tabIndex=we?0:-1,we&&x&&Ee.focus({preventScroll:!0})}),$(!0),Ge(),ae(),x||(r?ee?t.querySelector("#au-scode")?.focus({preventScroll:!0}):j.trim()?t.querySelector('[data-act="send-sms"]')?.focus({preventScroll:!0}):t.querySelector("#au-sphone")?.focus({preventScroll:!0}):t.querySelector(y.trim()?"#au-pwd":"#au-id")?.focus({preventScroll:!0})))}function be(p){L.bind(p);const x=p.querySelector("#au-id"),de=p.querySelector("#au-pwd"),Ee=p.querySelector("#au-sphone"),we=p.querySelector("#au-scode");x?.addEventListener("input",()=>{y=x.value,(B.id||V)&&(delete B.id,V="",h("id"),ae())}),de?.addEventListener("input",()=>{T=de.value,(B.pwd||V)&&(delete B.pwd,V="",h("pwd"),ae())}),Ee?.addEventListener("input",()=>{if(j=Ee.value,X+=1,ee||Q>0){ee="",u();const Fe=p.querySelector("#au-sphone-hint");Fe&&(Fe.textContent="");const Ne=p.querySelector('[data-role="login-novcode-wrap"]');Ne&&(Ne.hidden=!0),L.close(!1);const xe=p.querySelector('[data-act="send-sms"]');xe&&(xe.disabled=!1,xe.textContent="获取验证码")}(B.sphone||V)&&(delete B.sphone,V="",h("sphone"),ae())}),we?.addEventListener("input",()=>{M=we.value.replace(/\D/g,"").slice(0,6),we.value=M,(B.scode||V)&&(delete B.scode,V="",h("scode"),ae())}),p.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",Fe=>{m=!m;const Ne=Fe.currentTarget,xe=p.querySelector("#au-pwd");if(xe){const Se=xe.selectionStart,ze=xe.selectionEnd;xe.type=m?"text":"password",xe.focus({preventScroll:!0}),Se!==null&&ze!==null&&xe.setSelectionRange(Se,ze)}Ne.setAttribute("aria-label",m?"隐藏密码":"显示密码"),Ne.innerHTML=m?la:ia}),p.querySelector('[data-act="send-sms"]')?.addEventListener("click",async()=>{const Fe=sa(j);if(Fe){B={...B,sphone:Fe},h("sphone"),p.querySelector("#au-sphone")?.focus({preventScroll:!0});return}delete B.sphone,h("sphone");const Ne=Ve(j),xe=++X,Se=p.querySelector('[data-act="send-sms"]');Se&&(Se.disabled=!0,Se.textContent="发送中…");try{const ze=await e.sendVerificationCode({target:Ne,purpose:"login"});if(Ce||xe!==X||Ve(j)!==Ne)return;ee=ze.maskedTarget||oa(Ne);const Re=p.querySelector("#au-sphone-hint");Re&&(Re.textContent=`验证码已发送至 ${ee}`);const Ue=p.querySelector('[data-role="login-novcode-wrap"]');Ue&&(Ue.hidden=!1),Pe(ze.cooldownSeconds||60),Se&&(Se.disabled=!0,Se.textContent=`${Q} 秒后重发`),p.querySelector("#au-scode")?.focus({preventScroll:!0})}catch(ze){if(Ce||xe!==X||Ve(j)!==Ne)return;Se&&(Se.disabled=!1,Se.textContent=ee?"重新获取":"获取验证码"),V=ze instanceof Error?ze.message:"暂时无法发送验证码，请稍后再试。",ae()}}),p.querySelector('[data-act="open-reset"]')?.addEventListener("click",Fe=>{pe=1,ge=(r?j:y).trim(),H="",fe="",le="",ye=!1,ne=!1,O={},P="",A(),$e("reset",Fe.currentTarget)})}t.innerHTML=`
    <div class="au au-split">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${Ft}</div>
            <h1 class="au-h1">登录</h1>
            ${ie?`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${Ua}<span>${d(ie)}</span></div>`:""}
            <div class="au-mode-seg" role="tablist" aria-label="登录方式" data-role="mode-seg">
              <span class="au-mode-indicator" aria-hidden="true"></span>
              <button type="button" role="tab" aria-selected="true" tabindex="0" class="au-mode-tab" data-act="switch-mode" data-mode="password">密码登录</button>
              <button type="button" role="tab" aria-selected="false" tabindex="-1" class="au-mode-tab" data-act="switch-mode" data-mode="sms">短信登录</button>
            </div>
            <form data-form="login" novalidate>
              <fieldset>
                <div data-role="fields-host"></div>
                <div class="au-ferr" id="au-login-ferr" role="alert" hidden>
                  ${na}
                  <span data-role="ferr-text"></span>
                </div>
                <label class="au-check au-keep-login" data-f="keep">
                  <input type="checkbox" name="keep" />
                  <span>30 天内保持登录</span>
                </label>
                <button type="submit" class="au-primary">
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
        ${zt()}
      </section>
      <aside class="au-art" aria-hidden="true">
        <div class="au-art-frame">
          <img src="./media/auth-hero.jpg" alt="" />
        </div>
      </aside>
    </div>
    <div data-role="modal-host"></div>
  `,t.querySelector('input[name="keep"]')?.addEventListener("change",p=>{W=p.currentTarget.checked}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async p=>{if(p.preventDefault(),!me){if(B={},V="",r){const x=sa(j);x&&(B.sphone=x),/^\d{6}$/.test(M.trim())||(B.scode="请输入 6 位验证码"),h("sphone"),h("scode")}else y.trim()||(B.id="请输入电子邮箱或手机号码"),T||(B.pwd="请输入密码"),h("id"),h("pwd");if(ae(),Object.keys(B).length>0){const x=Object.keys(B)[0];t.querySelector(`#au-${x}`)?.focus({preventScroll:!0});return}me=!0,oe();try{const x=await e.login({method:r?"sms":"password",account:Ve(r?j:y),...r?{smsCode:M.trim()}:{password:T},rememberMe:W});if(Ce)return;Ie(),s(x)}catch(x){if(Ce)return;me=!1,V=x instanceof Error?x.message:r?"验证码不正确或已过期":"账户或密码不正确",oe(),ae()}}}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{c?.onOpenRegister?(Ie(),c.onOpenRegister()):window.location.hash="#register"}),t.querySelectorAll('[data-act="switch-mode"]').forEach(p=>{p.addEventListener("click",()=>{const x=p.dataset.mode;x&&ce(x,!1)}),p.addEventListener("keydown",x=>{const de=r?"sms":"password",Ee=aa.indexOf(de);x.key==="ArrowRight"?(x.preventDefault(),ce(aa[(Ee+1)%aa.length],!0)):x.key==="ArrowLeft"?(x.preventDefault(),ce(aa[(Ee-1+aa.length)%aa.length],!0)):x.key==="Home"?(x.preventDefault(),ce(aa[0],!0)):x.key==="End"&&(x.preventDefault(),ce(aa[aa.length-1],!0))})}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",p=>{$e("contact",p.currentTarget)}),Ge(),$(!1),G=Rt(t),y.trim()&&t.querySelector("#au-pwd")?.focus({preventScroll:!0}),document.fonts?.ready.then(()=>{Ce||$(!1)})}const ta=["join","apply"],va=1e3,ya=50,Ma=60,Tt=110,_a=new WeakMap;function Ot(t){_a.get(t)?.()}function $s(t,e,s){_a.get(t)?.(),t.classList.add("bare-login");let c=!1,r=s.initialMode??"join",m=null,y=null,T=null,j=null,M=null,W=s.initialJoinReceipt??null,ie=s.initialApplyReceipt??null,B="",V=!1,me=null;const ee=(s.inviteToken??"").trim(),Q=!!(s.isInviteRoute||ee),N=s.currentSession??null;let X=!!(Q&&ee),F=null,pe="",ge="",H="",fe="",le="",ye=0,ne=null,O=0,P="",te=!1,re=!1,ue=mt(s.prefillCode??""),je="",Le=!1,E=0,G="",Ce="",L="",v="",$="",D=!1,u=!1,A="",J=0,Ie=null,Pe=0,Be="",qe="",ae="",h="",b="",Z="",oe="",$e="",Me="",He=!1,Oe="",De=0,Ge=null,ce=0,be=null,p={},x="",de=!1;const Ee=Dt();function we(l){if(l.key==="Escape"){if(Ee.isOpen()){l.preventDefault(),Ee.close(!0);return}m&&(l.preventDefault(),Sa())}}function Fe(l){const a=t.querySelector('[data-role="reg-seg"]'),o=a?.querySelector(".au-mode-indicator"),n=a?.querySelector('.au-mode-tab[aria-selected="true"]');!o||!n||(o.style.transition=l?"":"none",o.style.transform=`translateX(${n.offsetLeft}px)`,o.style.width=`${n.offsetWidth}px`,l||(o.offsetWidth,o.style.transition=""))}function Ne(){Fe(!1)}function xe(){J=0,Ie!==null&&(window.clearInterval(Ie),Ie=null)}function Se(){De=0,Ge!==null&&(window.clearInterval(Ge),Ge=null)}function ze(){ye=0,ne!==null&&(window.clearInterval(ne),ne=null)}function Re(){j?.(),j=null,M?.(),M=null}function Ue(){c=!0,me?.(),me=null,Re(),Ee.destroy(),xe(),Se(),ze(),be!==null&&(window.clearTimeout(be),be=null),document.removeEventListener("keydown",we),window.removeEventListener("resize",Ne),t.classList.remove("bare-login"),_a.get(t)===Ue&&_a.delete(t)}document.addEventListener("keydown",we),window.addEventListener("resize",Ne),_a.set(t,Ue);function wa(l){xe(),J=l,Ie=window.setInterval(()=>{J-=1,J<=0&&xe();const a=t.querySelector('[data-act="jn-send-code"]');a&&(a.disabled=J>0,a.textContent=J>0?`${J} 秒后重发`:A?"重新获取":"获取验证码")},1e3)}function ra(l){Se(),De=l,Ge=window.setInterval(()=>{De-=1,De<=0&&Se();const a=t.querySelector('[data-act="ap-send-code"]');a&&(a.disabled=De>0,a.textContent=De>0?`${De} 秒后重发`:Oe?"重新获取":"获取验证码")},1e3)}function ke(){const l=t.querySelector("#au-reg-ferr");if(l)if(x){l.hidden=!1;const a=l.querySelector('[data-role="ferr-text"]');a&&(a.textContent=x)}else l.hidden=!0}function Te(l){const a=t.querySelector(`.au-field[data-f="${l}"]`),o=t.querySelector(`#au-${l}`),n=t.querySelector(`#au-${l}-err`),i=p[l]??"";a?.classList.toggle("bad",!!i),o?.setAttribute("aria-invalid",i?"true":"false"),n&&(n.textContent=i)}function Xe(l,a){const o=t.querySelector("form[data-reg-form] fieldset"),n=t.querySelector('form[data-reg-form] button[type="submit"]');o&&(o.disabled=de),n&&(n.disabled=de,n.innerHTML=de?`<span class="au-spinner" aria-hidden="true"></span><span>${d(l)}</span>`:`<span>${d(a)}</span>`)}function ca(l,a){Ee.close(!1),y=a??(document.activeElement instanceof HTMLElement?document.activeElement:null),m=l,ba(),t.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function Sa(){if(!m)return;m=null,T=null,Re(),ba();const l=y;y=null,l&&document.contains(l)&&l.focus({preventScroll:!0})}function Ka(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">请阅读并同意</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ha}</button>
          </div>
          <div class="db">
            <p class="au-dlead" style="margin-bottom:0;">
              发送验证码前，请先阅读并同意 PACOM
              <a class="au-consent-link" href="${Oa}" target="_blank" rel="noopener noreferrer">隐私政策</a>和<a class="au-consent-link" href="${Oa}" target="_blank" rel="noopener noreferrer">使用条款</a>。
            </p>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="consent-confirm">同意并发送</button>
          </div>
        </section>
      </div>
    `}function fa(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">撤回加入申请</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ha}</button>
          </div>
          <div class="db">
            <p class="au-dlead" style="margin-bottom:0;">撤回后本次申请将作废，你可以修改信息后重新提交。</p>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="withdraw-confirm">确认撤回</button>
          </div>
        </section>
      </div>
    `}function ba(){const l=t.querySelector('[data-role="modal-host"]');if(l){if(Re(),!m){l.innerHTML="";return}l.innerHTML=m==="contact"?Pt():m==="withdraw_confirm"?fa():Ka(),j=Mt(l.querySelector(".au-account-dlg")),M=Nt(l),l.querySelectorAll('[data-act="close-modal"]').forEach(a=>{a.addEventListener("click",()=>Sa())}),l.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",a=>{a.target===a.currentTarget&&Sa()}),l.querySelector('[data-act="consent-confirm"]')?.addEventListener("click",()=>{const a=T;T=null,m=null,Re(),ba(),a?.()}),l.querySelector('[data-act="withdraw-confirm"]')?.addEventListener("click",async()=>{if(!(!W||!e.withdrawJoinApplication||V)){m=null,Re(),ba(),V=!0,x="",z();try{if(await e.withdrawJoinApplication(W.requestId,W.withdrawToken),c)return;V=!1,W=null,v="",A="",Pe+=1,xe(),B="申请已撤回，可修改信息后重新提交。",z()}catch(a){if(c)return;V=!1,x=a instanceof Error?a.message:"暂时无法撤回申请，请稍后再试。",z()}}})}}function xa(l,a,o,n){return`
      <div class="au-field au-consent-field ${p[n]?"bad":""}" data-f="${n}">
        <div class="au-check au-consent-row">
          <input id="${l}" type="checkbox" name="${a}" ${o?"checked":""} aria-invalid="${p[n]?"true":"false"}" />
          <span class="au-consent-text">
            <label class="au-consent-label" for="${l}">我已阅读并同意 PACOM </label><a class="au-consent-link" href="${Oa}" target="_blank" rel="noopener noreferrer">隐私政策</a><label class="au-consent-label" for="${l}">和</label><a class="au-consent-link" href="${Oa}" target="_blank" rel="noopener noreferrer">使用条款</a>
          </span>
        </div>
        <p class="au-err" id="au-${n}-err" aria-live="polite">${d(p[n]??"")}</p>
      </div>
    `}async function Qe(l){const a=l.replace(/\D/g,"");if(a.length!==9){je="",Le=!1,da();return}const o=++E;Le=!0,je="",da();try{const n=await e.resolveInviteCode(a);if(c||o!==E)return;Le=!1,n.valid&&n.organizationName?(je=n.organizationName,delete p.jn_code):(je="",p.jn_code=n.message??"邀请码不正确或已失效，请向机构管理员确认。"),Te("jn_code"),da()}catch(n){if(c||o!==E)return;Le=!1,je="",p.jn_code=n instanceof Error?n.message:"暂时无法核验邀请码，请稍后再试。",Te("jn_code"),da()}}function da(){const l=t.querySelector('[data-role="jn-code-match"]'),a=t.querySelector('[data-role="jn-nocode-wrap"]');l&&(je?(l.hidden=!1,l.innerHTML=`${ft}<span>目标机构：${d(je)}</span>`):(l.hidden=!0,l.innerHTML="")),a&&(a.hidden=!!je)}function Aa(){const l=`
      <span data-role="jn-nocode-wrap" ${je?"hidden":""}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-nocode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-nocode-pop"><span>没有邀请码？</span></button>
        <span id="au-jn-nocode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="没有邀请码说明" hidden>
          <span class="ws-info-text">请向所在机构的管理员获取 9 位邀请码；如需为新企业开通，请切换上方「申请开通机构」。</span>
        </span>
      </span>
    `,a=`
      <span data-role="jn-novcode-wrap" ${A?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-jn-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认邮箱或手机号码无误，检查垃圾邮件或短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">填写机构 9 位邀请码，管理员批准后即可访问。</p>
      ${B?`<div class="au-notice-soft au-form-notice" data-role="jn-form-notice" role="status">${Ua}<span>${d(B)}</span></div>`:""}
      <form class="au-reg-form" data-reg-form="join" novalidate>
        <fieldset ${de?"disabled":""}>
          <div class="au-field ${p.jn_code?"bad":""}" data-f="jn_code">
            <div class="au-lab">
              <label for="au-jn_code">机构邀请码</label>
              ${l}
            </div>
            <div class="au-ctl">
              <input id="au-jn_code" name="jn_code" class="au-in" type="text" inputmode="numeric" autocomplete="off" maxlength="11" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(ue)}" aria-invalid="${p.jn_code?"true":"false"}" />
            </div>
            <div class="au-code-match" data-role="jn-code-match" role="status" aria-live="polite" ${je?"":"hidden"}>
              ${je?`${ft}<span>目标机构：${d(je)}</span>`:""}
            </div>
            <p class="au-err" id="au-jn_code-err" aria-live="polite">${d(p.jn_code??"")}</p>
          </div>

          <div class="au-field ${p.jn_name?"bad":""}" data-f="jn_name">
            <div class="au-lab"><label for="au-jn_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-jn_name" name="jn_name" class="au-in" type="text" autocomplete="name" value="${d(G)}" aria-invalid="${p.jn_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_name-err" aria-live="polite">${d(p.jn_name??"")}</p>
          </div>

          <div class="au-field ${p.jn_dept?"bad":""}" data-f="jn_dept">
            <div class="au-lab"><label for="au-jn_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-jn_dept" name="jn_dept" class="au-in" type="text" autocomplete="organization-title" value="${d(Ce)}" aria-invalid="${p.jn_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_dept-err" aria-live="polite">${d(p.jn_dept??"")}</p>
          </div>

          <div class="au-field ${p.jn_account?"bad":""}" data-f="jn_account">
            <div class="au-lab"><label for="au-jn_account">电子邮箱或手机号码</label></div>
            <div class="au-ctl">
              <input id="au-jn_account" name="jn_account" class="au-in has-code-btn" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(L)}" aria-invalid="${p.jn_account?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="jn-send-code" ${J>0?"disabled":""}>
                ${J>0?`${J} 秒后重发`:A?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-jn_account-err" aria-live="polite">${d(p.jn_account??"")}</p>
            <p class="au-hint" id="au-jn_account-hint" role="status" aria-live="polite">${A?`验证码已发送至 ${d(A)}`:""}</p>
          </div>

          <div class="au-field ${p.jn_vcode?"bad":""}" data-f="jn_vcode">
            <div class="au-lab">
              <label for="au-jn_vcode">验证码</label>
              ${a}
            </div>
            <div class="au-ctl">
              <input id="au-jn_vcode" name="jn_vcode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(v)}" aria-invalid="${p.jn_vcode?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_vcode-err" aria-live="polite">${d(p.jn_vcode??"")}</p>
          </div>

          <div class="au-field ${p.jn_pwd?"bad":""}" data-f="jn_pwd">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-jn_pwd">设置密码</label>
                ${ka("au-jn-pwd-info","设置密码说明",pt)}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-jn_pwd" name="jn_pwd" class="au-in has-suffix" type="${D?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d($)}" aria-invalid="${p.jn_pwd?"true":"false"}" />
              <button type="button" class="au-suffix au-eye" data-act="jn-toggle-eye" aria-controls="au-jn_pwd" aria-label="${D?"隐藏密码":"显示密码"}">
                ${D?la:ia}
              </button>
            </div>
            <p class="au-err" id="au-jn_pwd-err" aria-live="polite">${d(p.jn_pwd??"")}</p>
          </div>

          ${xa("au-jn_consent","jn_consent",u,"jn_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${x?"":"hidden"}>
            ${na}
            <span data-role="ferr-text">${d(x)}</span>
          </div>

          <button type="submit" class="au-primary" ${de?"disabled":""}>
            ${de?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>注册并申请加入</span>"}
          </button>
        </fieldset>
      </form>
    `}function Ja(){const l=bt(qe),a=ea(Me),o=a>=va*.8?`${a} / ${va}`:"",n=`
      <span data-role="ap-novcode-wrap" ${Oe?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-ap-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-ap-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-ap-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">提交企业信息，经 PACOM 审核通过后开通机构。</p>
      <form class="au-reg-form" data-reg-form="apply" novalidate>
        <fieldset ${de?"disabled":""}>
          <div class="au-field ${p.ap_org?"bad":""}" data-f="ap_org">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-ap_org">机构名称</label>
                ${ka("au-ap-org-info","机构名称说明",["请填写营业执照等登记证书上的完整名称。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_org" name="ap_org" class="au-in" type="text" autocomplete="organization" value="${d(Be)}" aria-invalid="${p.ap_org?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_org-err" aria-live="polite">${d(p.ap_org??"")}</p>
          </div>

          <div class="au-field ${p.ap_region?"bad":""}" data-f="ap_region">
            <div class="au-lab"><label for="au-ap_prov">所在地区</label></div>
            <div class="au-row-eq">
              <div class="au-select-wrap">
                <select id="au-ap_prov" name="ap_prov" class="au-select ${qe?"":"is-placeholder"}" aria-label="省份" aria-invalid="${p.ap_region?"true":"false"}">
                  <option value="" ${qe?"":"selected"}>省份</option>
                  ${Zt.map(([i])=>`<option value="${d(i)}" ${qe===i?"selected":""}>${d(i)}</option>`).join("")}
                </select>
                ${ht}
              </div>
              <div class="au-select-wrap">
                <select id="au-ap_city" name="ap_city" class="au-select ${ae?"":"is-placeholder"}" aria-label="城市" ${qe?"":"disabled"} aria-invalid="${p.ap_region?"true":"false"}">
                  <option value="" ${ae?"":"selected"}>城市</option>
                  ${l.map(i=>`<option value="${d(i)}" ${ae===i?"selected":""}>${d(i)}</option>`).join("")}
                </select>
                ${ht}
              </div>
            </div>
            <p class="au-err" id="au-ap_region-err" aria-live="polite">${d(p.ap_region??"")}</p>
          </div>

          <div class="au-field ${p.ap_name?"bad":""}" data-f="ap_name">
            <div class="au-lab"><label for="au-ap_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-ap_name" name="ap_name" class="au-in" type="text" autocomplete="name" value="${d(h)}" aria-invalid="${p.ap_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_name-err" aria-live="polite">${d(p.ap_name??"")}</p>
          </div>

          <div class="au-field ${p.ap_dept?"bad":""}" data-f="ap_dept">
            <div class="au-lab"><label for="au-ap_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-ap_dept" name="ap_dept" class="au-in" type="text" autocomplete="organization-title" value="${d(b)}" aria-invalid="${p.ap_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_dept-err" aria-live="polite">${d(p.ap_dept??"")}</p>
          </div>

          <div class="au-field ${p.ap_email?"bad":""}" data-f="ap_email">
            <div class="au-lab"><label for="au-ap_email">电子邮箱</label></div>
            <div class="au-ctl">
              <input id="au-ap_email" name="ap_email" class="au-in" type="email" inputmode="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(Z)}" aria-invalid="${p.ap_email?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_email-err" aria-live="polite">${d(p.ap_email??"")}</p>
          </div>

          <div class="au-field ${p.ap_phone?"bad":""}" data-f="ap_phone">
            <div class="au-lab"><label for="au-ap_phone">手机号码</label></div>
            <div class="au-ctl">
              <input id="au-ap_phone" name="ap_phone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(oe)}" aria-invalid="${p.ap_phone?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="ap-send-code" ${De>0?"disabled":""}>
                ${De>0?`${De} 秒后重发`:Oe?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-ap_phone-err" aria-live="polite">${d(p.ap_phone??"")}</p>
            <p class="au-hint" id="au-ap_phone-hint" role="status" aria-live="polite">${Oe?`验证码已发送至 ${d(Oe)}`:""}</p>
          </div>

          <div class="au-field ${p.ap_sms?"bad":""}" data-f="ap_sms">
            <div class="au-lab">
              <label for="au-ap_sms">验证码</label>
              ${n}
            </div>
            <div class="au-ctl">
              <input id="au-ap_sms" name="ap_sms" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d($e)}" aria-invalid="${p.ap_sms?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_sms-err" aria-live="polite">${d(p.ap_sms??"")}</p>
          </div>

          <div class="au-field ${p.ap_overview?"bad":""}" data-f="ap_overview">
            <div class="au-lab"><label for="au-ap_overview">项目概况<span class="fld-opt">选填</span></label></div>
            <div class="ws-textarea-shell au-note-shell">
              <textarea id="au-ap_overview" name="ap_overview" class="au-in au-ta au-ta-std" rows="3" aria-invalid="${p.ap_overview?"true":"false"}">${d(Me)}</textarea>
              <button type="button" class="ws-resize" data-space-resize="au-ap_overview" aria-label="调整项目概况输入框高度；按上下方向键调整"></button>
            </div>
            <p class="au-err" id="au-ap_overview-err" aria-live="polite">${d(p.ap_overview??"")}</p>
            <p class="au-hint au-char-count" id="au-ap_overview-count" ${o?"":"hidden"}>${d(o)}</p>
          </div>

          ${xa("au-ap_consent","ap_consent",He,"ap_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${x?"":"hidden"}>
            ${na}
            <span data-role="ferr-text">${d(x)}</span>
          </div>

          <button type="submit" class="au-primary" ${de?"disabled":""}>
            ${de?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>提交开通申请</span>"}
          </button>
        </fieldset>
      </form>
    `}async function ja(){const l=Va(L);if(l){p.jn_account=l,Te("jn_account"),t.querySelector("#au-jn_account")?.focus({preventScroll:!0});return}delete p.jn_account,Te("jn_account");const a=Ve(L),o=++Pe,n=t.querySelector('[data-act="jn-send-code"]');n&&(n.disabled=!0,n.textContent="发送中…");try{const i=await e.sendVerificationCode({target:a,purpose:"register_join",consentAcceptedAt:new Date().toISOString()});if(c||o!==Pe||Ve(L)!==a)return;A=i.maskedTarget||oa(a);const I=t.querySelector("#au-jn_account-hint");I&&(I.textContent=`验证码已发送至 ${A}`);const f=t.querySelector('[data-role="jn-novcode-wrap"]');f&&(f.hidden=!1),wa(i.cooldownSeconds||60),n&&(n.disabled=!0,n.textContent=`${J} 秒后重发`),t.querySelector("#au-jn_vcode")?.focus({preventScroll:!0})}catch(i){if(c||o!==Pe||Ve(L)!==a)return;n&&(n.disabled=!1,n.textContent=A?"重新获取":"获取验证码"),x=i instanceof Error?i.message:"暂时无法发送验证码，请稍后再试。",ke()}}async function La(){const l=sa(oe);if(l){p.ap_phone=l,Te("ap_phone"),t.querySelector("#au-ap_phone")?.focus({preventScroll:!0});return}delete p.ap_phone,Te("ap_phone");const a=Ve(oe),o=++ce,n=t.querySelector('[data-act="ap-send-code"]');n&&(n.disabled=!0,n.textContent="发送中…");try{const i=await e.sendVerificationCode({target:a,purpose:"org_apply",consentAcceptedAt:new Date().toISOString()});if(c||o!==ce||Ve(oe)!==a)return;Oe=i.maskedTarget||oa(a);const I=t.querySelector("#au-ap_phone-hint");I&&(I.textContent=`验证码已发送至 ${Oe}`);const f=t.querySelector('[data-role="ap-novcode-wrap"]');f&&(f.hidden=!1),ra(i.cooldownSeconds||60),n&&(n.disabled=!0,n.textContent=`${De} 秒后重发`),t.querySelector("#au-ap_sms")?.focus({preventScroll:!0})}catch(i){if(c||o!==ce||Ve(oe)!==a)return;n&&(n.disabled=!1,n.textContent=Oe?"重新获取":"获取验证码"),x=i instanceof Error?i.message:"暂时无法发送验证码，请稍后再试。",ke()}}function Ya(l){Ee.bind(l);const a=l.querySelector("#au-jn_code"),o=l.querySelector("#au-jn_name"),n=l.querySelector("#au-jn_dept"),i=l.querySelector("#au-jn_account"),I=l.querySelector("#au-jn_vcode"),f=l.querySelector("#au-jn_pwd"),U=l.querySelector("#au-jn_consent");a?.addEventListener("input",()=>{ue=mt(a.value),a.value=ue,(p.jn_code||x)&&(delete p.jn_code,x="",Te("jn_code"),ke()),Qe(ue)}),o?.addEventListener("input",()=>{G=o.value,(p.jn_name||x)&&(delete p.jn_name,x="",Te("jn_name"),ke())}),n?.addEventListener("input",()=>{Ce=n.value,p.jn_dept&&(delete p.jn_dept,Te("jn_dept"))}),i?.addEventListener("input",()=>{if(L=i.value,Pe+=1,A||J>0){A="",xe();const ve=l.querySelector("#au-jn_account-hint");ve&&(ve.textContent="");const se=l.querySelector('[data-role="jn-novcode-wrap"]');se&&(se.hidden=!0),Ee.close(!1);const Y=l.querySelector('[data-act="jn-send-code"]');Y&&(Y.disabled=!1,Y.textContent="获取验证码")}(p.jn_account||x)&&(delete p.jn_account,x="",Te("jn_account"),ke())}),I?.addEventListener("input",()=>{v=I.value.replace(/\D/g,"").slice(0,6),I.value=v,(p.jn_vcode||x)&&(delete p.jn_vcode,x="",Te("jn_vcode"),ke())}),f?.addEventListener("input",()=>{$=f.value,(p.jn_pwd||x)&&(delete p.jn_pwd,x="",Te("jn_pwd"),ke())}),U?.addEventListener("change",()=>{u=U.checked,u&&p.jn_consent&&(delete p.jn_consent,Te("jn_consent"))}),l.querySelector('[data-act="jn-toggle-eye"]')?.addEventListener("click",ve=>{D=!D;const se=ve.currentTarget;if(f){const Y=f.selectionStart,K=f.selectionEnd;f.type=D?"text":"password",f.focus({preventScroll:!0}),Y!==null&&K!==null&&f.setSelectionRange(Y,K)}se.setAttribute("aria-label",D?"隐藏密码":"显示密码"),se.innerHTML=D?la:ia}),l.querySelector('[data-act="jn-send-code"]')?.addEventListener("click",ve=>{const se=Va(L);if(se){p.jn_account=se,Te("jn_account"),i?.focus({preventScroll:!0});return}if(!u){T=()=>{u=!0,U&&(U.checked=!0),delete p.jn_consent,Te("jn_consent"),ja()},ca("consent_ask",ve.currentTarget);return}ja()}),l.querySelector('form[data-reg-form="join"]')?.addEventListener("submit",async ve=>{if(ve.preventDefault(),de)return;p={},x="",B&&(B="",l.querySelector('[data-role="jn-form-notice"]')?.remove());const se=ue.replace(/\D/g,"");if(se.length!==9)p.jn_code="请输入 9 位机构邀请码";else if(!je){const R=++E;Le=!0;try{const he=await e.resolveInviteCode(se);if(c||R!==E)return;Le=!1,he.valid&&he.organizationName?(je=he.organizationName,da()):p.jn_code=he.message??"邀请码不正确或已失效，请向机构管理员确认。"}catch(he){if(c||R!==E)return;Le=!1,p.jn_code=he instanceof Error?he.message:"暂时无法核验邀请码，请稍后再试。"}}G.trim()?ea(G.trim())>ya&&(p.jn_name=`姓名不超过 ${ya} 个字`):p.jn_name="请输入姓名",ea(Ce.trim())>Ma&&(p.jn_dept=`部门 / 职务不超过 ${Ma} 个字`);const Y=Va(L);Y&&(p.jn_account=Y),/^\d{6}$/.test(v.trim())||(p.jn_vcode="请输入 6 位验证码");const K=dt($);K&&(p.jn_pwd=K),u||(p.jn_consent="请阅读并同意隐私政策和使用条款");for(const R of["jn_code","jn_name","jn_dept","jn_account","jn_vcode","jn_pwd","jn_consent"])Te(R);if(ke(),Object.keys(p).length>0){const R=Object.keys(p)[0];l.querySelector(`#au-${R}`)?.focus({preventScroll:!0});return}de=!0,Xe("正在提交…","注册并申请加入");try{if(W=await e.registerAndJoin({inviteCode:se,displayName:G.trim(),departmentTitle:Ce.trim()||void 0,account:Ve(L),verificationCode:v.trim(),password:$,consentAcceptedAt:new Date().toISOString()}),c)return;de=!1,z()}catch(R){if(c)return;de=!1,x=R instanceof Error?R.message:"暂时无法提交申请，请稍后再试。",Xe("正在提交…","注册并申请加入"),ke()}})}function Qa(l){Ee.bind(l),Kt(l);const a=l.querySelector("#au-ap_org"),o=l.querySelector("#au-ap_prov"),n=l.querySelector("#au-ap_city"),i=l.querySelector("#au-ap_name"),I=l.querySelector("#au-ap_dept"),f=l.querySelector("#au-ap_email"),U=l.querySelector("#au-ap_phone"),ve=l.querySelector("#au-ap_sms"),se=l.querySelector("#au-ap_overview"),Y=l.querySelector("#au-ap_overview-count"),K=l.querySelector("#au-ap_consent");a?.addEventListener("input",()=>{Be=a.value,(p.ap_org||x)&&(delete p.ap_org,x="",Te("ap_org"),ke())}),o?.addEventListener("change",()=>{qe=o.value,o.classList.toggle("is-placeholder",!qe);const R=bt(qe);ae=R.length===1?R[0]:"",n&&(n.disabled=!qe,n.innerHTML=`<option value="" ${ae?"":"selected"}>城市</option>`+R.map(he=>`<option value="${d(he)}" ${ae===he?"selected":""}>${d(he)}</option>`).join(""),n.classList.toggle("is-placeholder",!ae)),qe&&ae&&p.ap_region&&(delete p.ap_region,Te("ap_region"))}),n?.addEventListener("change",()=>{ae=n.value,n.classList.toggle("is-placeholder",!ae),qe&&ae&&p.ap_region&&(delete p.ap_region,Te("ap_region"))}),i?.addEventListener("input",()=>{h=i.value,(p.ap_name||x)&&(delete p.ap_name,x="",Te("ap_name"),ke())}),I?.addEventListener("input",()=>{b=I.value,p.ap_dept&&(delete p.ap_dept,Te("ap_dept"))}),f?.addEventListener("input",()=>{Z=f.value,(p.ap_email||x)&&(delete p.ap_email,x="",Te("ap_email"),ke())}),U?.addEventListener("input",()=>{if(oe=U.value,ce+=1,Oe||De>0){Oe="",Se();const R=l.querySelector("#au-ap_phone-hint");R&&(R.textContent="");const he=l.querySelector('[data-role="ap-novcode-wrap"]');he&&(he.hidden=!0),Ee.close(!1);const Ze=l.querySelector('[data-act="ap-send-code"]');Ze&&(Ze.disabled=!1,Ze.textContent="获取验证码")}(p.ap_phone||x)&&(delete p.ap_phone,x="",Te("ap_phone"),ke())}),ve?.addEventListener("input",()=>{$e=ve.value.replace(/\D/g,"").slice(0,6),ve.value=$e,(p.ap_sms||x)&&(delete p.ap_sms,x="",Te("ap_sms"),ke())}),se?.addEventListener("input",()=>{Me=se.value;const R=ea(Me);Y&&(R>=va*.8?(Y.textContent=`${R} / ${va}`,Y.hidden=!1):Y.hidden=!0),p.ap_overview&&R<=va&&(delete p.ap_overview,Te("ap_overview"))}),K?.addEventListener("change",()=>{He=K.checked,He&&p.ap_consent&&(delete p.ap_consent,Te("ap_consent"))}),l.querySelector('[data-act="ap-send-code"]')?.addEventListener("click",R=>{const he=sa(oe);if(he){p.ap_phone=he,Te("ap_phone"),U?.focus({preventScroll:!0});return}if(!He){T=()=>{He=!0,K&&(K.checked=!0),delete p.ap_consent,Te("ap_consent"),La()},ca("consent_ask",R.currentTarget);return}La()}),l.querySelector('form[data-reg-form="apply"]')?.addEventListener("submit",async R=>{if(R.preventDefault(),de)return;p={},x="",Be.trim()?ea(Be.trim())>Tt&&(p.ap_org=`机构名称不超过 ${Tt} 个字`):p.ap_org="请输入机构名称",(!qe||!ae)&&(p.ap_region="请选择所在地区"),h.trim()?ea(h.trim())>ya&&(p.ap_name=`姓名不超过 ${ya} 个字`):p.ap_name="请输入姓名",ea(b.trim())>Ma&&(p.ap_dept=`部门 / 职务不超过 ${Ma} 个字`),Ta(Z)||(p.ap_email="请输入有效的电子邮箱");const he=sa(oe);he&&(p.ap_phone=he),/^\d{6}$/.test($e.trim())||(p.ap_sms="请输入 6 位短信验证码"),ea(Me)>va&&(p.ap_overview=`项目概况不超过 ${va} 个字`),He||(p.ap_consent="请阅读并同意隐私政策和使用条款");for(const Ze of["ap_org","ap_region","ap_name","ap_dept","ap_email","ap_phone","ap_sms","ap_overview","ap_consent"])Te(Ze);if(ke(),Object.keys(p).length>0){const Ze=Object.keys(p)[0],Ut=Ze==="ap_region"?qe?"au-ap_city":"au-ap_prov":`au-${Ze}`;l.querySelector(`#${Ut}`)?.focus({preventScroll:!0});return}de=!0,Xe("正在提交…","提交开通申请");try{if(ie=await e.submitOrgApplication({organizationName:Be.trim(),province:qe,city:ae,contactName:h.trim(),departmentTitle:b.trim()||void 0,email:Ve(Z),phone:Ve(oe),smsCode:$e.trim(),projectOverview:Me.trim()||void 0,consentAcceptedAt:new Date().toISOString()}),c)return;de=!1,z()}catch(Ze){if(c)return;de=!1,x=Ze instanceof Error?Ze.message:"暂时无法提交开通申请，请稍后再试。",Xe("正在提交…","提交开通申请"),ke()}})}function Ca(){Ee.close(!1);const l=t.querySelector('[data-role="reg-body-host"]');l&&(r==="join"?(l.innerHTML=Aa(),Ya(l)):(l.innerHTML=Ja(),Qa(l)))}function pa(l,a=!1){r===l||de||(r=l,p={},x="",B="",t.querySelectorAll('[data-act="switch-reg-tab"]').forEach(o=>{const n=o.dataset.tab===l;o.setAttribute("aria-selected",String(n)),o.tabIndex=n?0:-1,n&&a&&o.focus({preventScroll:!0})}),Fe(!0),Ca(),t.querySelector(".au-left")?.scrollTo({top:0}))}function Xa(){if(ie)return{title:"开通申请已提交 · PACOM Station",bodyHtml:`
          <h1 class="au-h1">开通申请已提交</h1>
          <p class="au-lead">预计 1–2 个工作日完成审核，审核通过后将发送开通链接至你的邮箱。</p>
          <div class="au-summary-card">
            <div class="au-summary-row">
              <span class="au-summary-k">申请单号</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${d(ie.applicationId)}</span>
                <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${d(ie.applicationId)}" aria-label="复制申请单号" title="复制申请单号">${at}</button>
              </span>
            </div>
            <div class="au-summary-row"><span class="au-summary-k">申请机构</span><span class="au-summary-v">${d(ie.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">通知邮箱</span><span class="au-summary-v is-tabular">${d(ie.maskedEmail)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待审核</span></div>
          </div>
          <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        `};const l=W;return{title:"加入申请已提交 · PACOM Station",bodyHtml:`
        <h1 class="au-h1">加入申请已提交</h1>
        <p class="au-lead">已提交至<b>${d(l.organizationName)}</b>，管理员批准后将发送登录通知。</p>
        <div class="au-summary-card">
          <div class="au-summary-row">
            <span class="au-summary-k">申请单号</span>
            <span class="au-summary-v au-summary-v-copy is-tabular">
              <span>${d(l.requestId)}</span>
              <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${d(l.requestId)}" aria-label="复制申请单号" title="复制申请单号">${at}</button>
            </span>
          </div>
          <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${d(l.organizationName)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">登录账户</span><span class="au-summary-v is-tabular">${d(l.maskedAccount)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待管理员审批</span></div>
        </div>
        <div class="au-ferr" id="au-reg-ferr" role="alert" ${x?"":"hidden"}>
          ${na}
          <span data-role="ferr-text">${d(x)}</span>
        </div>
        <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        ${e.withdrawJoinApplication?`
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="ask-withdraw" ${V?"disabled":""}>${V?"正在撤回…":"撤回申请"}</button>
          </div>`:""}
      `}}function et(l){ze(),ye=l,ne=window.setInterval(()=>{ye-=1,ye<=0&&ze();const a=t.querySelector('[data-act="iv-send-sec"]');a&&(a.disabled=ye>0,a.textContent=ye>0?`${ye} 秒后重发`:le?"重新获取":"获取验证码")},1e3)}function C(l){return l.requiredSecondaryChannel!==void 0?l.requiredSecondaryChannel:$a(l.kind,l.role,l.targetChannel)}function qa(l){return Ve(l).toLowerCase().replace(/[\s\-()]/g,"")}function w(l,a){if(!l)return!1;const o=qa(a.targetValue);if(!o)return!1;const n=a.targetChannel==="email"?l.email:l.phone;return!!n&&qa(n)===o}async function k(l){const a=l==="phone"?sa(H):Ta(H)?"":"请输入有效的电子邮箱";if(a){p.iv_sec=a,Te("iv_sec"),t.querySelector("#au-iv_sec")?.focus({preventScroll:!0});return}delete p.iv_sec,Te("iv_sec");const o=Ve(H),n=++O,i=t.querySelector('[data-act="iv-send-sec"]');i&&(i.disabled=!0,i.textContent="发送中…");try{const I=await e.sendVerificationCode({target:o,purpose:"bind",consentAcceptedAt:new Date().toISOString()});if(c||n!==O||Ve(H)!==o)return;le=I.maskedTarget||oa(o);const f=t.querySelector("#au-iv_sec-hint");f&&(f.textContent=`验证码已发送至 ${le}`);const U=t.querySelector('[data-role="iv-novcode-wrap"]');U&&(U.hidden=!1),et(I.cooldownSeconds||60),i&&(i.disabled=!0,i.textContent=`${ye} 秒后重发`),t.querySelector("#au-iv_seccode")?.focus({preventScroll:!0})}catch(I){if(c||n!==O||Ve(H)!==o)return;i&&(i.disabled=!1,i.textContent=le?"重新获取":"获取验证码"),x=I instanceof Error?I.message:"暂时无法发送验证码，请稍后再试。",ke()}}function q(){if(X)return{title:"核验链接 · PACOM Station",bodyHtml:`
          <div class="au-loading-state" role="status" aria-live="polite">
            <span class="au-spinner au-spinner--muted" aria-hidden="true"></span>
            <span>正在核验链接…</span>
          </div>
        `};if(F&&F.status==="accepted"){const Y=F.kind==="owner",K=Y?"机构已完成开通":"邀请已被接受",R=N?`该${Y?"开通":"邀请"}链接已完成激活，你可以直接进入工作区访问<b>${d(F.organizationName)}</b>。`:`该${Y?"开通":"邀请"}链接已完成激活，你可以直接登录访问<b>${d(F.organizationName)}</b>。`;return{title:`${K} · PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${K}</h1>
          <p class="au-lead">${R}</p>
          <button type="button" class="au-primary" data-act="${N?"iv-back-ws":"back-login"}"><span>${N?"进入工作区":"前往登录"}</span></button>
        `}}if(pe||!F||F.status!=="pending"){const Y=F?.kind==="owner",K=F?.organizationName?d(F.organizationName):"",R=F?.inviterName?d(F.inviterName):"机构管理员";let he="邀请链接已失效",Ze="此链接无效或已过期，请联系邀请人或机构管理员重新发送。";return pe?Ze=d(pe):F?.status==="expired"?(he=Y?"开通链接已过期":"邀请链接已过期",Ze=Y?`开通${K?`<b>${K}</b>的`:""}链接已过期，请联系支持团队重新发送。`:`加入${K?`<b>${K}</b>的`:""}邀请链接已过期，请联系${R}重新发送。`):F?.status==="revoked"&&(he=Y?"开通链接已撤销":"邀请已撤销",Ze=Y?`开通${K?`<b>${K}</b>的`:""}链接已被撤销，请联系支持团队重新发送。`:`加入${K?`<b>${K}</b>的`:""}邀请已被撤销，如需加入请联系${R}重新发送。`),{title:`${he} · PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${he}</h1>
          <p class="au-lead">${Ze}</p>
          <button type="button" class="au-secondary" data-act="${N?"iv-back-ws":"back-login"}"><span>${N?"返回工作区":"返回登录"}</span></button>
        `}}const l=F,a=l.kind==="owner",o=a?"开通机构":"加入机构",n=l.targetChannel==="phone"?"受邀手机号码":"受邀电子邮箱",i=l.targetChannel==="phone"?vt(l.targetValue):l.targetValue;if(N){if(w(N,l)){const he=a?`<b>${d(l.organizationName)}</b>已审核通过，确认后即以机构管理员身份完成开通。<span class="au-lead-meta">有效期至 ${d(l.expiresAt)}</span>`:`${d(l.inviterName||"机构管理员")}邀请你以${d(l.roleLabel||"成员")}身份加入<b>${d(l.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${d(l.expiresAt)}</span>`;return{title:`${o} · PACOM Station`,bodyHtml:`
            <h1 class="au-h1">${o}</h1>
            <p class="au-lead">${he}</p>
            <div class="au-summary-card">
              <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${d(l.organizationName)}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${d(l.roleLabel||(a?"机构管理员":"成员"))}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${d(N.displayName)} · ${d(i)}</span></div>
            </div>
            <div class="au-ferr" id="au-reg-ferr" role="alert" ${x?"":"hidden"}>
              ${na}
              <span data-role="ferr-text">${d(x)}</span>
            </div>
            <button type="button" class="au-primary" data-act="iv-confirm-join" ${de?"disabled":""}>
              ${de?'<span class="au-spinner" aria-hidden="true"></span><span>正在处理…</span>':`<span>${a?"确认开通":"确认加入"}</span>`}
            </button>
            <div class="au-quiet-action">
              <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
            </div>
          `}}const Y=oa(l.targetValue),K=N.email||(N.phone?vt(N.phone):"");return{title:"请切换至受邀账户 · PACOM Station",bodyHtml:`
          <h1 class="au-h1">请切换至受邀账户</h1>
          <p class="au-lead">${a?`该开通链接面向 <b>${d(Y)}</b> 开通${d(l.organizationName)}，与当前登录账户不一致。`:`该邀请面向 <b>${d(Y)}</b> 加入${d(l.organizationName)}，与当前登录账户不一致。`}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${d(N.displayName)}${K?` · ${d(K)}`:""}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">受邀账户</span><span class="au-summary-v is-tabular">${d(Y)}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="iv-switch-account"><span>切换账户登录</span></button>
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
          </div>
        `}}if(l.accountExists){const Y=a?`<b>${d(l.organizationName)}</b>已审核通过，请先登录已有账户完成开通。<span class="au-lead-meta">有效期至 ${d(l.expiresAt)}</span>`:`${d(l.inviterName||"机构管理员")}邀请你以${d(l.roleLabel||"成员")}身份加入<b>${d(l.organizationName)}</b>，请先登录已有账户完成确认。<span class="au-lead-meta">有效期至 ${d(l.expiresAt)}</span>`;return{title:`${o} · PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${o}</h1>
          <p class="au-lead">${Y}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${d(l.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${d(l.roleLabel||(a?"机构管理员":"成员"))}</span></div>
            <div class="au-summary-row">
              <span class="au-summary-k">受邀账户</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${d(i)}</span>
                <span class="au-status-pill au-status-pill--neutral">已注册</span>
              </span>
            </div>
          </div>
          <button type="button" class="au-primary" data-act="iv-go-login"><span>${a?"登录并开通":"登录并加入"}</span></button>
        `}}const I=a?`<b>${d(l.organizationName)}</b>已审核通过，设置密码后即以机构管理员身份开通。<span class="au-lead-meta">有效期至 ${d(l.expiresAt)}</span>`:`${d(l.inviterName||"机构管理员")}邀请你以${d(l.roleLabel||"成员")}身份加入<b>${d(l.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${d(l.expiresAt)}</span>`,f=a?"完成开通":"注册并加入",U=C(l),ve=a?`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">管理员账户</span>
            <span class="au-lab-status">${gt}<span>已核验</span></span>
          </div>
          <div class="au-verified-card">
            <div class="au-verified-row">
              <span class="au-verified-k">${l.targetChannel==="phone"?"手机号码":"电子邮箱"}</span>
              <span class="au-verified-v">${d(i)}</span>
            </div>
            ${l.verifiedSecondaryMasked?`
              <div class="au-verified-row">
                <span class="au-verified-k">${l.targetChannel==="phone"?"电子邮箱":"手机号码"}</span>
                <span class="au-verified-v">${d(l.verifiedSecondaryMasked)}</span>
              </div>`:""}
          </div>
        </div>`:`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">${n}</span>
            <span class="au-lab-status">${gt}<span>已核验</span></span>
          </div>
          <div class="au-locked-card">
            <span class="au-locked-val">${d(i)}</span>
          </div>
        </div>`,se=U?(()=>{const Y=U==="phone",K=Y?"手机号码":"电子邮箱",R=Y?"用于新设备登录、敏感操作与重置密码时的身份验证。":"机构管理员须绑定电子邮箱，用于接收订单、续费与安全通知。",he=Y?"短信验证码":"邮件验证码",Ze=Y?"请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。":"请确认电子邮箱无误并检查垃圾邮件箱；如仍未收到，可点击页脚「联系我们」获取协助。";return`
            <div class="au-field ${p.iv_sec?"bad":""}" data-f="iv_sec">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_sec">${K}</label>
                  ${ka("au-iv-sec-info",`${K}说明`,[R])}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_sec" name="iv_sec" class="au-in has-code-btn" type="${Y?"tel":"email"}" inputmode="${Y?"tel":"email"}" autocomplete="${Y?"tel":"email"}" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(H)}" aria-invalid="${p.iv_sec?"true":"false"}" />
                <button type="button" class="au-suffix au-getcode" data-act="iv-send-sec" ${ye>0?"disabled":""}>
                  ${ye>0?`${ye} 秒后重发`:le?"重新获取":"获取验证码"}
                </button>
              </div>
              <p class="au-err" id="au-iv_sec-err" aria-live="polite">${d(p.iv_sec??"")}</p>
              <p class="au-hint" id="au-iv_sec-hint" role="status" aria-live="polite">${le?`验证码已发送至 ${d(le)}`:""}</p>
            </div>

            <div class="au-field ${p.iv_seccode?"bad":""}" data-f="iv_seccode">
              <div class="au-lab">
                <label for="au-iv_seccode">${he}</label>
                <span data-role="iv-novcode-wrap" ${le?"":"hidden"}>
                  <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-iv-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-iv-novcode-pop"><span>收不到验证码？</span></button>
                  <span id="au-iv-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
                    <span class="ws-info-text">${Ze}</span>
                  </span>
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_seccode" name="iv_seccode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(fe)}" aria-invalid="${p.iv_seccode?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_seccode-err" aria-live="polite">${d(p.iv_seccode??"")}</p>
            </div>
          `})():"";return{title:`${o} · PACOM Station`,bodyHtml:`
        <h1 class="au-h1">${o}</h1>
        <p class="au-lead">${I}</p>
        <form class="au-reg-form" data-reg-form="invite" novalidate>
          <fieldset ${de?"disabled":""}>
            ${ve}

            <div class="au-field ${p.iv_name?"bad":""}" data-f="iv_name">
              <div class="au-lab"><label for="au-iv_name">姓名</label></div>
              <div class="au-ctl">
                <input id="au-iv_name" name="iv_name" class="au-in" type="text" autocomplete="name" value="${d(ge)}" aria-invalid="${p.iv_name?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_name-err" aria-live="polite">${d(p.iv_name??"")}</p>
            </div>

            ${se}

            <div class="au-field ${p.iv_pwd?"bad":""}" data-f="iv_pwd">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_pwd">设置密码</label>
                  ${ka("au-iv-pwd-info","设置密码说明",pt)}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_pwd" name="iv_pwd" class="au-in has-suffix" type="${te?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(P)}" aria-invalid="${p.iv_pwd?"true":"false"}" />
                <button type="button" class="au-suffix au-eye" data-act="iv-toggle-eye" aria-controls="au-iv_pwd" aria-label="${te?"隐藏密码":"显示密码"}">
                  ${te?la:ia}
                </button>
              </div>
              <p class="au-err" id="au-iv_pwd-err" aria-live="polite">${d(p.iv_pwd??"")}</p>
            </div>

            ${xa("au-iv_consent","iv_consent",re,"iv_consent")}

            <div class="au-ferr" id="au-reg-ferr" role="alert" ${x?"":"hidden"}>
              ${na}
              <span data-role="ferr-text">${d(x)}</span>
            </div>

            <button type="submit" class="au-primary" ${de?"disabled":""}>
              ${de?`<span class="au-spinner" aria-hidden="true"></span><span>${a?"正在开通…":"正在提交…"}</span>`:`<span>${f}</span>`}
            </button>
          </fieldset>
        </form>
      `}}function _(){Ee.bind(t),t.querySelector('[data-act="iv-back-ws"]')?.addEventListener("click",()=>{Ue(),s.onBackToWorkspace?s.onBackToWorkspace():s.onBackToLogin()}),t.querySelector('[data-act="iv-go-login"]')?.addEventListener("click",()=>{if(!F)return;const se=`#invite?token=${encodeURIComponent(F.token)}`,Y=F.kind==="owner"?`登录后即可开通${F.organizationName}`:`登录后即可加入${F.organizationName}`;Ue(),s.onGoLoginForInvite?s.onGoLoginForInvite(F.targetValue,Y,se):s.onBackToLogin()}),t.querySelector('[data-act="iv-switch-account"]')?.addEventListener("click",()=>{if(!F)return;const se=`#invite?token=${encodeURIComponent(F.token)}`,K=`请使用 ${oa(F.targetValue)} 登录以${F.kind==="owner"?"开通机构":"接受邀请"}`;Ue(),s.onSwitchAccountForInvite?s.onSwitchAccountForInvite(se,K):s.onBackToLogin()}),t.querySelector('[data-act="iv-confirm-join"]')?.addEventListener("click",async()=>{if(!(de||!F)){de=!0,x="",z();try{const se=await e.acceptInvitation({token:F.token});if(c)return;Ue(),s.onAuthenticated(se)}catch(se){if(c)return;de=!1,x=se instanceof Error?se.message:"暂时无法确认加入，请稍后再试。",z()}}});const l=t.querySelector('form[data-reg-form="invite"]');if(!l||!F)return;const a=t.querySelector("#au-iv_name"),o=t.querySelector("#au-iv_sec"),n=t.querySelector("#au-iv_seccode"),i=t.querySelector("#au-iv_pwd"),I=t.querySelector("#au-iv_consent"),f=F.kind==="owner",U=f?"完成开通":"注册并加入",ve=C(F);a?.addEventListener("input",()=>{ge=a.value,(p.iv_name||x)&&(delete p.iv_name,x="",Te("iv_name"),ke())}),o?.addEventListener("input",()=>{if(H=o.value,O+=1,le||ye>0){le="",ze();const se=t.querySelector("#au-iv_sec-hint");se&&(se.textContent="");const Y=t.querySelector('[data-role="iv-novcode-wrap"]');Y&&(Y.hidden=!0),Ee.close(!1);const K=t.querySelector('[data-act="iv-send-sec"]');K&&(K.disabled=!1,K.textContent="获取验证码")}(p.iv_sec||x)&&(delete p.iv_sec,x="",Te("iv_sec"),ke())}),n?.addEventListener("input",()=>{fe=n.value.replace(/\D/g,"").slice(0,6),n.value=fe,(p.iv_seccode||x)&&(delete p.iv_seccode,x="",Te("iv_seccode"),ke())}),i?.addEventListener("input",()=>{P=i.value,(p.iv_pwd||x)&&(delete p.iv_pwd,x="",Te("iv_pwd"),ke())}),I?.addEventListener("change",()=>{re=I.checked,re&&p.iv_consent&&(delete p.iv_consent,Te("iv_consent"))}),t.querySelector('[data-act="iv-send-sec"]')?.addEventListener("click",se=>{if(!ve)return;const Y=ve==="phone"?sa(H):Ta(H)?"":"请输入有效的电子邮箱";if(Y){p.iv_sec=Y,Te("iv_sec"),o?.focus({preventScroll:!0});return}if(!re){T=()=>{re=!0,I&&(I.checked=!0),delete p.iv_consent,Te("iv_consent"),k(ve)},ca("consent_ask",se.currentTarget);return}k(ve)}),t.querySelector('[data-act="iv-toggle-eye"]')?.addEventListener("click",se=>{te=!te;const Y=se.currentTarget;if(i){const K=i.selectionStart,R=i.selectionEnd;i.type=te?"text":"password",i.focus({preventScroll:!0}),K!==null&&R!==null&&i.setSelectionRange(K,R)}Y.setAttribute("aria-label",te?"隐藏密码":"显示密码"),Y.innerHTML=te?la:ia}),l.addEventListener("submit",async se=>{if(se.preventDefault(),de||!F)return;if(p={},x="",ge.trim()?ea(ge.trim())>ya&&(p.iv_name=`姓名不超过 ${ya} 个字`):p.iv_name="请输入姓名",ve){const R=ve==="phone"?sa(H):Ta(H)?"":"请输入有效的电子邮箱";R&&(p.iv_sec=R),/^\d{6}$/.test(fe.trim())||(p.iv_seccode=ve==="phone"?"请输入 6 位短信验证码":"请输入 6 位邮件验证码")}const Y=dt(P);Y&&(p.iv_pwd=Y),re||(p.iv_consent="请阅读并同意隐私政策和使用条款");const K=ve?["iv_name","iv_sec","iv_seccode","iv_pwd","iv_consent"]:["iv_name","iv_pwd","iv_consent"];for(const R of K)Te(R);if(ke(),Object.keys(p).length>0){const R=Object.keys(p)[0];t.querySelector(`#au-${R}`)?.focus({preventScroll:!0});return}de=!0,Xe(f?"正在开通…":"正在提交…",U);try{const R=await e.acceptInvitation({token:F.token,displayName:ge.trim(),password:P,consentAcceptedAt:new Date().toISOString(),...ve?{secondaryContact:Ve(H),secondaryVerificationCode:fe.trim()}:{}});if(c)return;Ue(),s.onAuthenticated(R)}catch(R){if(c)return;de=!1,x=R instanceof Error?R.message:"暂时无法完成激活，请稍后再试。",Xe(f?"正在开通…":"正在提交…",U),ke()}})}function z(){me?.(),me=null,Ee.close(!1);let l="";if(W||ie){const a=Xa();document.title=a.title,l=a.bodyHtml}else if(Q){const a=q();document.title=a.title,l=a.bodyHtml}else document.title="注册 · PACOM Station",l=`
        <h1 class="au-h1">注册</h1>
        <div class="au-mode-seg" role="tablist" aria-label="注册方式" data-role="reg-seg">
          <span class="au-mode-indicator" aria-hidden="true"></span>
          <button type="button" role="tab" aria-selected="${r==="join"}" tabindex="${r==="join"?"0":"-1"}" class="au-mode-tab" data-act="switch-reg-tab" data-tab="join">加入已有机构</button>
          <button type="button" role="tab" aria-selected="${r==="apply"}" tabindex="${r==="apply"?"0":"-1"}" class="au-mode-tab" data-act="switch-reg-tab" data-tab="apply">申请开通机构</button>
        </div>
        <div data-role="reg-body-host"></div>
        <div class="au-login-actions">
          <div class="au-login-divider" aria-hidden="true"></div>
          <p class="au-noacct">
            已有账户？<button type="button" class="au-inline" data-act="back-login">登录</button>
          </p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-reg-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Ft}</div>
              ${l}
            </main>
          </div>
          ${zt()}
        </section>
        <aside class="au-art" aria-hidden="true">
          <div class="au-art-frame">
            <img src="./media/auth-hero.jpg" alt="" />
          </div>
        </aside>
      </div>
      <div data-role="modal-host"></div>
    `,t.querySelectorAll('[data-act="back-login"]').forEach(a=>{a.addEventListener("click",()=>{Ue(),s.onBackToLogin()})}),t.querySelectorAll('[data-act="open-contact"]').forEach(a=>{a.addEventListener("click",o=>{ca("contact",o.currentTarget)})}),t.querySelector('[data-act="ask-withdraw"]')?.addEventListener("click",a=>{!W||!e.withdrawJoinApplication||V||ca("withdraw_confirm",a.currentTarget)}),t.querySelectorAll('[data-act="copy-receipt"]').forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.copyVal??"";o&&(navigator.clipboard?.writeText&&navigator.clipboard.writeText(o).catch(()=>{}),a.classList.add("is-copied"),a.setAttribute("aria-label","已复制申请单号"),a.innerHTML=Gt,be!==null&&window.clearTimeout(be),be=window.setTimeout(()=>{be=null,a.classList.remove("is-copied"),a.setAttribute("aria-label","复制申请单号"),a.innerHTML=at},1800))})}),!W&&!ie&&!Q?(t.querySelectorAll('[data-act="switch-reg-tab"]').forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.tab;o&&pa(o,!1)}),a.addEventListener("keydown",o=>{const n=ta.indexOf(r);o.key==="ArrowRight"?(o.preventDefault(),pa(ta[(n+1)%ta.length],!0)):o.key==="ArrowLeft"?(o.preventDefault(),pa(ta[(n-1+ta.length)%ta.length],!0)):o.key==="Home"?(o.preventDefault(),pa(ta[0],!0)):o.key==="End"&&(o.preventDefault(),pa(ta[ta.length-1],!0))})}),Ca(),Fe(!1),document.fonts?.ready.then(()=>{c||Fe(!1)})):Q&&!X&&_(),me=Rt(t)}z(),Q&&ee&&!W&&!ie?(async()=>{try{const l=await e.getInvitationPreview(ee);if(c)return;if(F=l,ge=l.prefillName??"",X=!1,z(),!N&&l.status==="pending"&&!l.accountExists){const a=C(l),o=ge.trim()?a?"#au-iv_sec":"#au-iv_pwd":"#au-iv_name";t.querySelector(o)?.focus({preventScroll:!0})}}catch(l){if(c)return;X=!1,pe=l instanceof Error?l.message:"暂时无法读取邀请信息，请稍后再试。",z()}})():!Q&&!W&&!ie&&ue.replace(/\D/g,"").length===9&&(Qe(ue),t.querySelector("#au-jn_name")?.focus({preventScroll:!0}))}function Na(t){const e=t.replace(/^#\/?/,"").split("?")[0]??"";return e==="login"||e==="register"||e==="join"||e==="apply"||e==="invite"}function Pa(t){const e=t.replace(/^#\/?/,""),[s="",c=""]=e.split("?"),r=new URLSearchParams(c);if(s==="invite")return{kind:"invite",inviteToken:(r.get("token")??"").trim()};if(s==="register"||s==="join"||s==="apply"){const m=r.get("tab");return{kind:"register",initialMode:s==="apply"||m==="apply"?"apply":"join",prefillCode:r.get("code")??void 0}}return{kind:"login"}}const ws=["org_admin","project_admin","operator","space_user"],Ba=[{key:"login",label:"登录页",pillLabel:"登录页",group:"auth",hash:"#login",sessionRole:null},{key:"reg-join",label:"注册 · 加入已有机构",pillLabel:"注册页",group:"auth",hash:"#register",sessionRole:null},{key:"reg-apply",label:"注册 · 申请开通机构",pillLabel:"申请开通",group:"auth",hash:"#apply",sessionRole:null},{key:"status-join",label:"状态页 · 加入申请已提交",pillLabel:"加入已提交",group:"auth",hash:"#register",sessionRole:null,joinReceipt:{requestId:"JR-20261127-8421",organizationName:"广州国家实验室",maskedAccount:"138 •••• 8000",status:"pending_approval",submittedAt:"2026-11-27T09:30:00Z",withdrawToken:"demo-preset-wt-8421"}},{key:"status-apply",label:"状态页 · 开通申请已提交",pillLabel:"开通已提交",group:"auth",hash:"#apply",sessionRole:null,applyReceipt:{applicationId:"APP-20261127-3902",organizationName:"广州天环智能科技有限公司",region:"广东省 广州市",maskedEmail:"c•••@company.com",status:"pending_review",submittedAt:"2026-11-27T09:35:00Z"}},{key:"inv-member",label:"成员邀请 · 免补绑",pillLabel:"成员邀请",group:"invite",hash:"#invite?token=member-demo",sessionRole:null},{key:"inv-admin-email",label:"机构管理员 · 邮箱补手机",pillLabel:"管理员补手机",group:"invite",hash:"#invite?token=admin-email",sessionRole:null},{key:"inv-admin-phone",label:"机构管理员 · 手机补邮箱",pillLabel:"管理员补邮箱",group:"invite",hash:"#invite?token=admin-phone",sessionRole:null},{key:"inv-proj-email",label:"项目管理员 · 邮箱补手机",pillLabel:"项管补手机",group:"invite",hash:"#invite?token=project-admin-email",sessionRole:null},{key:"inv-owner",label:"审核通过 · 开通机构",pillLabel:"开通机构",group:"invite",hash:"#invite?token=owner-demo",sessionRole:null},{key:"inv-existing",label:"已有账户受邀 · 引导登录",pillLabel:"老用户分流",group:"invite",hash:"#invite?token=existing-demo",sessionRole:null},{key:"inv-signed-match",label:"已登录 · 本人确认加入",pillLabel:"确认加入",group:"invite",hash:"#invite?token=existing-demo",sessionRole:"operator"},{key:"inv-signed-mismatch",label:"已登录 · 账户不一致拦截",pillLabel:"错号拦截",group:"invite",hash:"#invite?token=member-demo",sessionRole:"org_admin"},{key:"inv-expired",label:"邀请链接已过期",pillLabel:"链接已过期",group:"invite",hash:"#invite?token=expired",sessionRole:null}];async function Ss(t){const e=new Yt;let s=await e.getSession(),c="login",r="",m="",y="",T=!1;document.querySelector("[data-demo-fab-root]")?.remove();const j=document.createElement("div");j.className="pacom-demo-fab-wrap",j.dataset.demoFabRoot="1",document.body.appendChild(j);function M(V,me){const ee=V.trim();if(ee==="#login")return"login";if(ee==="#apply"||ee==="#register?tab=apply")return"reg-apply";if(ee.startsWith("#register")||ee.startsWith("#join"))return"reg-join";if(ee.startsWith("#invite")){const N=Pa(ee).inviteToken??"";return N?N==="expired"?"inv-expired":N.startsWith("owner")?"inv-owner":N==="admin-email"?"inv-admin-email":N==="admin-phone"?"inv-admin-phone":N==="project-admin-email"?"inv-proj-email":N==="existing-demo"?me?"inv-signed-match":"inv-existing":me?"inv-signed-mismatch":"inv-member":""}return""}function W(){const V=Ba.find(X=>X.key===m),me=c==="app"?s?Ke[s.role]:"未登录":V?.pillLabel??(c==="login"?"登录页":c==="register"?"注册页":"邀请激活"),ee=Ba.filter(X=>X.group==="auth"),Q=Ba.filter(X=>X.group==="invite"),N=X=>{const F=c!=="app"&&m===X.key;return`
        <button type="button" class="pacom-demo-role-btn" aria-pressed="${F}" data-demo-preset="${X.key}">
          <span>${X.label}</span>
          ${F?Ae("check",14):"<span>→</span>"}
        </button>`};j.innerHTML=`
      ${T?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">独立演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">邀请码 482 916 305 · 任意 6 位验证码</span>
            <div class="pacom-demo-fab-roles">
              <span class="pacom-demo-fab-sec-title">工作区角色（4 级 RBAC）</span>
              ${ws.map(X=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${c==="app"&&s?.role===X}" data-demo-pick="${X}">
                    <span>${Ke[X]}</span>
                    ${c==="app"&&s?.role===X?Ae("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">认证与注册页</span>
              ${ee.map(N).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">定向邀请与异常态</span>
              ${Q.map(N).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <a class="pacom-demo-link" href="./index.html">
                <span>前往纯生产入口（index.html）</span>
                <span>→</span>
              </a>
            </div>
          </div>`:""}
      <button type="button" class="pacom-demo-fab-pill" aria-expanded="${T}" data-demo-fab-toggle="1" title="切换演示角色或查看认证页面">
        <span class="pacom-demo-fab-dot" aria-hidden="true"></span>
        <span>演示</span>
        <span class="pacom-demo-fab-role">${me}</span>
        ${Ae(T?"chevron-down":"chevrons-up-down",12)}
      </button>
    `,j.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",X=>{X.stopPropagation(),T=!T,W()}),j.querySelectorAll("[data-demo-pick]").forEach(X=>{X.addEventListener("click",async()=>{const F=X.dataset.demoPick;F&&(T=!1,s=await e.switchDemoRole(F),await B(s))})}),j.querySelectorAll("[data-demo-preset]").forEach(X=>{X.addEventListener("click",async()=>{const F=X.dataset.demoPreset,pe=Ba.find(ge=>ge.key===F);pe&&(T=!1,y="",pe.sessionRole&&(s=await e.switchDemoRole(pe.sessionRole)),await ie(pe.hash,pe.sessionRole===null,{presetKey:pe.key,initialJoinReceipt:pe.joinReceipt??null,initialApplyReceipt:pe.applyReceipt??null}))})})}document.addEventListener("click",V=>{T&&(V.target?.closest("[data-demo-fab-root]")||(T=!1,W()))}),document.addEventListener("keydown",V=>{V.key==="Escape"&&T&&(T=!1,W())});async function ie(V,me,ee){bs(t),qt(t),Ot(t),me&&s&&(await e.logout(),s=null);const Q=Pa(V);if(c=Q.kind,r=V,m=ee?.presetKey??M(V,!!s),window.location.hash!==V&&(window.location.hash=V),W(),Q.kind==="register"||Q.kind==="invite"){$s(t,e,{initialMode:Q.initialMode,prefillCode:Q.prefillCode,isInviteRoute:Q.kind==="invite",inviteToken:Q.inviteToken,currentSession:Q.kind==="invite"?s:null,initialJoinReceipt:ee?.initialJoinReceipt??null,initialApplyReceipt:ee?.initialApplyReceipt??null,onBackToLogin:()=>{y="",ie("#login",!1)},onGoLoginForInvite:(N,X,F)=>{y=F,ie("#login",!1,{prefillAccount:N,notice:X})},onSwitchAccountForInvite:(N,X)=>{y=N,ie("#login",!0,{notice:X})},onBackToWorkspace:()=>{s?B(s):ie("#login",!1)},onAuthenticated:N=>{y="",B(N)}});return}ys(t,e,N=>{if(s=N,y){const X=y;y="",ie(X,!1);return}B(N)},{prefillAccount:ee?.prefillAccount,notice:ee?.notice,onOpenRegister:()=>{y="",ie("#register",!1)}})}async function B(V){qt(t),Ot(t),s=V,c="app",r="",m="",W(),(!window.location.hash||Na(window.location.hash))&&(window.location.hash="#home"),await hs(t,e,V,()=>{y="",ie("#login",!0)})}if(window.addEventListener("hashchange",()=>{if(Na(window.location.hash)){if(window.location.hash===r)return;const V=Pa(window.location.hash);(c!==V.kind||window.location.hash!==r)&&ie(window.location.hash,c==="app"&&V.kind!=="invite")}}),!s||Na(window.location.hash)){const V=Na(window.location.hash)?window.location.hash:"#login",me=Pa(V);await ie(V,!!(s&&me.kind!=="invite"));return}await B(s)}async function xs(){const t=document.getElementById("app");if(t)try{await Ss(t)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(e)}</div></div>`}}xs();
