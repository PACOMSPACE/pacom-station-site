import{E as $,r as fe,a as Ra,e as p,b as Pa,g as Na,s as ba,m as Tt,c as Dt,P as It,A as ka,d as kt,n as da,f as ya,C as _t,h as jt,i as Ma,j as $a,v as Aa,k as Lt,I as Ot,l as At,o as tt,p as qt,L as Ft,q as Ha,t as ma,u as st,B as nt,D as Da,w as ot,x as Ga,y as it,z as Wa,O as zt,F as Mt,G as Rt,H as Pt,S as lt}from"./auth-shared-CD2oN1cy.js";import{R as Qe,a as ct}from"./contracts-RpwmUYDW.js";function Nt(){const a="2026-11-25T09:00:00Z",e=[];for(let u=1;u<=22;u+=1){const S=u===7?$.floorId:u===8?$.lockedFloor8Id:u===6?$.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${u}`,q=String(u).padStart(2,"0");e.push({id:S,buildingId:$.buildingId,kind:"above",level:u,name:`${u}F`,areaSqm:u===7?1383.1:u===1?2680:u<=4?1920:1480,plan:{floorId:S,imageUrl:`./media/floors/e/${q}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}})}const s="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";e.push({id:s,buildingId:$.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:s,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}});const r=[];for(let u=1;u<=12;u+=1){const S=`structure-f-above-${u}`,q=String(u).padStart(2,"0");r.push({id:S,buildingId:$.buildingFId,kind:"above",level:u,name:`${u}F`,areaSqm:u===1?2450:u<=3?2100:1580,plan:{floorId:S,imageUrl:`./media/floors/f/${q}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}})}const n="structure-f-roof-1";return r.push({id:n,buildingId:$.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:n,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}}),{projects:[{id:$.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:a},imageUrl:"./media/gzlab.jpg"},{id:$.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:a},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:$.buildingId,projectId:$.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:$.buildingFId,projectId:$.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...e,...r],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:$.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:$.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:$.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:$.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:s,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:n,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Ct=Nt(),rt=Ct.floors.map(a=>a.id),Je={org_admin:{userId:"demo-org-admin",displayName:"林致远",role:"org_admin",roleLabel:Qe.org_admin,authMode:"demo",scope:{allowedProjectIds:[$.projectId,$.project1Id],allowedBuildingIds:[$.buildingId,$.buildingFId],allowedFloorIds:[...rt],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",role:"project_admin",roleLabel:Qe.project_admin,authMode:"demo",scope:{allowedProjectIds:[$.projectId],allowedBuildingIds:[$.buildingId,$.buildingFId],allowedFloorIds:[...rt],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",role:"operator",roleLabel:Qe.operator,authMode:"demo",scope:{allowedProjectIds:[$.projectId],allowedBuildingIds:[$.buildingId],allowedFloorIds:[$.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",role:"space_user",roleLabel:Qe.space_user,authMode:"demo",scope:{allowedProjectIds:[$.projectId],allowedBuildingIds:[$.buildingId],allowedFloorIds:[$.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},Ea="pacom.web.demo.role",dt="pacom.web.demo.spatial.v5",pt="pacom.web.demo.orgs.v1",ut="pacom.web.demo.activeOrg.v1",sa="org-gzlab";class Bt{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;inviteMissTimestamps=[];inviteLockedUntil=0;sentCodeTargets=new Set;joinReceipts=new Map;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;constructor(){this.orgs=this.loadOrgs();const e=typeof localStorage<"u"?localStorage.getItem(ut):null,s=this.orgs.find(u=>u.id===e)??this.orgs[0];this.activeOrgId=s.id,this.spatial=s.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const r=typeof sessionStorage<"u"?sessionStorage.getItem(Ea):null;r&&Je[r]&&(this.activeSession=structuredClone(Je[r]),this.applyOverridesToSession());const n=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:$.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:n,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:n,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:$.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:n,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:n,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:$.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:n,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:n,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:$.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:n,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:n,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:n,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:n,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:$.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:n,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:$.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:n,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:n,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:n,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:n},{id:"conn-e7f-dali",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:n},{id:"conn-e7f-modbus",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:$.projectId,floorId:$.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:$.projectId,floorId:$.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:$.projectId,floorId:$.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:$.projectId,floorId:$.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:$.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:$.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:n,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:$.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:n,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:$.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:n,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:$.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:n,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:$.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:n,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:$.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:n,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(Je).map((u,S)=>({userId:u.userId,displayName:u.displayName,email:`${u.role.replaceAll("_",".")}@gzlab.ac.cn`,role:u.role,roleLabel:u.roleLabel,scopeSummary:u.scope.allowedZoneIds?.length?`E栋 7F（${u.scope.allowedZoneIds.length} 个授权功能区）`:`${u.scope.allowedProjectIds.length} 项目 / ${u.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:S===0?n:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const e=Date.now();for(const s of this.overrides)s.status==="active"&&new Date(s.expiresAt).getTime()<=e&&(s.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const e=Je[this.activeSession.role].scope,s=this.overrides.filter(r=>r.targetUserId===this.activeSession.userId&&r.status==="active");this.activeSession.scope.activeOverrides=structuredClone(s),this.activeSession.scope.canEditDeployment=e.canEditDeployment||s.some(r=>r.module==="deployment"),this.activeSession.scope.canEditSettings=e.canEditSettings||s.some(r=>r.module==="settings")}record(e,s,r,n,u){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:s,endpoint:r,request:u,response:n}),this.traces.length>40&&this.traces.pop()}pushAudit(e,s,r,n){const u=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:u?.displayName??"anonymous",role:u?.role??"space_user",action:e,target:s,result:r,detail:n})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=e.account.toLowerCase(),r=s.includes("org")||s.includes("admin")?"org_admin":s.includes("proj")?"project_admin":s.includes("space")||s.includes("member")?"space_user":"operator";return this.activeSession=structuredClone(Je[r]),this.applyOverridesToSession(),sessionStorage.setItem(Ea,r),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(Ea),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}maskTarget(e){const s=e.trim();if(s.includes("@")){const[n,u]=s.split("@");return n&&u?`${n[0]}•••@${u}`:"••••"}const r=s.replace(/\D/g,"");return r.length===11?`${r.slice(0,3)} •••• ${r.slice(7)}`:r.length>=6?`${r.slice(0,3)} •••• ${r.slice(-4)}`:"••••"}async sendVerificationCode(e){const s=e.target.trim(),r=s.includes("@")?"email":"sms";this.sentCodeTargets.add(`${e.purpose}:${s.toLowerCase()}`);const n={maskedTarget:this.maskTarget(s),channel:r,cooldownSeconds:60};return this.record("REST","sendVerificationCode","POST /api/v1/auth/verification-codes",n,{purpose:e.purpose,channel:r}),n}async resolveInviteCode(e){const s=Date.now();if(this.inviteLockedUntil>s)return{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const r=e.replace(/\D/g,""),u={482916305:this.orgs[0]?.name??"广州实验室",618204917:"天环智慧园区"}[r];if(!u){if(this.inviteMissTimestamps=this.inviteMissTimestamps.filter(R=>s-R<36e5),this.inviteMissTimestamps.push(s),this.inviteMissTimestamps.length>=10)return this.inviteLockedUntil=s+36e5,this.inviteMissTimestamps=[],{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const q={valid:!1,message:"邀请码不正确或已失效，请向机构管理员确认。"};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",q,{code:r}),q}const S={valid:!0,organizationName:u};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",S,{code:r}),S}async registerAndJoin(e){const s=await this.resolveInviteCode(e.inviteCode);if(!s.valid||!s.organizationName)throw new Error(s.message??"邀请码不正确或已失效，请向机构管理员确认。");if(!/^\d{6}$/.test(e.verificationCode.trim()))throw new Error("验证码不正确或已过期");const r=`register_join:${e.account.trim().toLowerCase()}`;if(!this.sentCodeTargets.has(r))throw new Error("请先获取验证码");const n={requestId:`JR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:s.organizationName,maskedAccount:this.maskTarget(e.account),status:"pending_approval",submittedAt:new Date().toISOString()};return this.joinReceipts.set(n.requestId,n),this.record("REST","registerAndJoin","POST /api/v1/auth/register-join",n,{organizationName:s.organizationName,displayName:e.displayName}),n}async withdrawJoinApplication(e){this.joinReceipts.delete(e),this.record("REST","withdrawJoinApplication",`DELETE /api/v1/org/join-requests/${e}`,{ok:!0})}async submitOrgApplication(e){if(!/^\d{6}$/.test(e.smsCode.trim()))throw new Error("验证码不正确或已过期");const s=`org_apply:${e.phone.trim().toLowerCase()}`;if(!this.sentCodeTargets.has(s))throw new Error("请先获取短信验证码");const r=e.province===e.city?e.province:`${e.province} ${e.city}`,n={applicationId:`APP-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:e.organizationName.trim(),region:r,maskedEmail:this.maskTarget(e.email),status:"pending_review",submittedAt:new Date().toISOString()};return this.record("REST","submitOrgApplication","POST /api/v1/org/applications",n,{organizationName:n.organizationName,industry:e.industry,region:r}),n}async getInvitationPreview(e){const s=e.trim(),r=new Date(Date.now()+7*864e5).toISOString().slice(0,10);return s==="expired"?{token:s,kind:"member",organizationName:this.orgs[0]?.name??"广州实验室",inviterName:"林致远",role:"operator",roleLabel:Qe.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",expiresAt:"2026-11-20",status:"expired"}:s.startsWith("owner")?{token:s,kind:"owner",organizationName:"广州天环智能科技有限公司",role:"org_admin",roleLabel:Qe.org_admin,targetChannel:"email",targetValue:"chen@company.com",prefillName:"陈志远",expiresAt:r,status:"pending"}:{token:s||"member-demo",kind:"member",organizationName:this.orgs[0]?.name??"广州实验室",inviterName:"林致远",role:"operator",roleLabel:Qe.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",prefillName:"林明远",expiresAt:r,status:"pending"}}async acceptInvitation(e){const s=await this.getInvitationPreview(e.token);if(s.status!=="pending")throw new Error("邀请已过期或已失效，请联系邀请人重新发送。");const r=s.kind==="owner"?"org_admin":s.role??"operator",n=structuredClone(Je[r]);return e.displayName.trim()&&(n.displayName=e.displayName.trim()),this.activeSession=n,this.applyOverridesToSession(),sessionStorage.setItem(Ea,r),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,n),this.pushAudit("auth.invite.accept",n.userId,"success"),structuredClone(n)}async switchDemoRole(e){return this.activeSession=structuredClone(Je[e]),this.applyOverridesToSession(),sessionStorage.setItem(Ea,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(dt);if(e){const s=JSON.parse(e);if(Array.isArray(s?.projects)&&Array.isArray(s?.buildings)&&Array.isArray(s?.floors)&&Array.isArray(s?.zones))return s}}}catch{}return structuredClone(Ct)}loadOrgs(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(pt);if(e){const s=JSON.parse(e);if(Array.isArray(s)&&s.length>0&&s.every(r=>r?.id&&r?.name&&Array.isArray(r?.spatial?.projects)))return s}}}catch{}return[{id:sa,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const e=this.orgs.find(s=>s.id===this.activeOrgId);e&&(e.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(pt,JSON.stringify(this.orgs)),localStorage.setItem(ut,this.activeOrgId),this.activeOrgId===sa&&localStorage.setItem(dt,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(e=>({id:e.id,name:e.name,projectCount:e.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}async switchOrganization(e){const s=this.orgs.find(r=>r.id===e);if(!s)throw new Error(`404 NOT_FOUND: 机构 ${e} 不存在`);this.activeOrgId=s.id,this.spatial=s.spatial,this.persistSpatial()}async createOrganization(e){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const r=e.trim()||"新建机构",n={id:`org-${Date.now().toString(36)}`,name:r,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(n),this.activeOrgId=n.id,this.spatial=n.spatial,this.persistSpatial(),this.pushAudit("org.create",n.id,"success",r),{id:n.id,name:n.name,projectCount:0}}syncAdminScopesFromSpatial(){const e=this.spatial.projects.map(n=>n.id),s=this.spatial.buildings.map(n=>n.id),r=this.spatial.floors.map(n=>n.id);this.activeOrgId===sa&&(Je.org_admin.scope.allowedProjectIds=[...e],Je.org_admin.scope.allowedBuildingIds=[...s],Je.org_admin.scope.allowedFloorIds=[...r],Je.project_admin.scope.allowedBuildingIds=[...s],Je.project_admin.scope.allowedFloorIds=[...r]),this.activeSession&&((this.activeOrgId!==sa||this.activeSession.role==="org_admin")&&(this.activeSession.scope.allowedProjectIds=[...e]),(this.activeOrgId!==sa||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin")&&(this.activeSession.scope.allowedBuildingIds=[...s],this.activeSession.scope.allowedFloorIds=[...r]))}async getSpatialTree(){const e=this.requireSession();if(this.activeOrgId!==sa){const C=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:C.projects.length,buildings:C.buildings.length,floors:C.floors.length}),C}const s=this.spatial.projects.filter(C=>e.scope.allowedProjectIds.includes(C.id)),r=this.spatial.buildings.filter(C=>e.scope.allowedBuildingIds.includes(C.id)),n=new Set(r.map(C=>C.id)),u=this.spatial.floors.filter(C=>n.has(C.buildingId)),S=new Set(u.map(C=>C.id)),q=this.spatial.zones.filter(C=>S.has(C.floorId)),R=structuredClone({projects:s,buildings:r,floors:u,zones:q});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:R.projects.length,buildings:R.buildings.length,floors:R.floors.length}),R}async createProject(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建项目`);const r={id:`project-${Date.now().toString(36)}`,name:e.name.trim()||"新建项目",city:e.city?.trim()||"广州市",address:e.address?.trim()||"",timezone:"Asia/Shanghai",location:e.location,imageUrl:e.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(r),s.scope.allowedProjectIds.includes(r.id)||s.scope.allowedProjectIds.push(r.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",r,e),this.pushAudit("project.create",r.id,"success",r.name),structuredClone(r)}async updateProject(e,s){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权修改项目配置`);const n=this.spatial.projects.find(u=>u.id===e);if(!n)throw new Error(`404 NOT_FOUND: 项目 ${e} 不存在`);return s.name!==void 0&&(n.name=s.name.trim()||n.name),s.city!==void 0&&(n.city=s.city.trim()),s.address!==void 0&&(n.address=s.address.trim()),s.location!==void 0&&(n.location=s.location),s.imageUrl!==void 0&&(n.imageUrl=s.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${e}`,n,s),this.pushAudit("project.update",e,"success",n.name),structuredClone(n)}async deleteProject(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除项目`);if(e===$.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const r=new Set(this.spatial.buildings.filter(u=>u.projectId===e).map(u=>u.id)),n=new Set(this.spatial.floors.filter(u=>r.has(u.buildingId)).map(u=>u.id));this.spatial.projects=this.spatial.projects.filter(u=>u.id!==e),this.spatial.buildings=this.spatial.buildings.filter(u=>u.projectId!==e),this.spatial.floors=this.spatial.floors.filter(u=>!r.has(u.buildingId)),this.spatial.zones=this.spatial.zones.filter(u=>!n.has(u.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${e}`,{ok:!0}),this.pushAudit("project.delete",e,"success")}async upsertBuilding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼宇`);let r=e.id?this.spatial.buildings.find(n=>n.id===e.id):void 0;return r?(r.name=e.name.trim()||r.name,r.aboveFloors=Math.max(0,e.aboveFloors),r.belowFloors=Math.max(0,e.belowFloors),r.hasRoof=e.hasRoof,e.areaSqm!==void 0&&(r.areaSqm=e.areaSqm),e.imageUrl!==void 0&&(r.imageUrl=e.imageUrl)):(r={id:`building-${Date.now().toString(36)}`,projectId:e.projectId,name:e.name.trim()||"新建楼宇",aboveFloors:Math.max(1,e.aboveFloors),belowFloors:Math.max(0,e.belowFloors),hasRoof:e.hasRoof,areaSqm:e.areaSqm??null,imageUrl:e.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(r)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",r,e),this.pushAudit("building.upsert",r.id,"success",r.name),structuredClone(r)}async deleteBuilding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼宇`);if(e===$.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const r=new Set(this.spatial.floors.filter(n=>n.buildingId===e).map(n=>n.id));this.spatial.buildings=this.spatial.buildings.filter(n=>n.id!==e),this.spatial.floors=this.spatial.floors.filter(n=>n.buildingId!==e),this.spatial.zones=this.spatial.zones.filter(n=>!r.has(n.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${e}`,{ok:!0}),this.pushAudit("building.delete",e,"success")}async upsertFloor(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼层`);const r=new Date().toISOString();let n=e.id?this.spatial.floors.find(u=>u.id===e.id):void 0;if(n)n.name=e.name.trim()||n.name,n.kind=e.kind,n.level=e.level,e.areaSqm!==void 0&&(n.areaSqm=e.areaSqm),e.planImageUrl!==void 0&&(n.plan=e.planImageUrl?{floorId:n.id,imageUrl:e.planImageUrl,planVersion:(n.plan?.planVersion??0)+1,updatedAt:r}:null);else{const u=`floor-${e.buildingId.slice(-6)}-${e.kind}-${Math.abs(e.level)}-${Date.now().toString(36).slice(-3)}`;n={id:u,buildingId:e.buildingId,kind:e.kind,level:e.level,name:e.name.trim()||`${e.level}F`,areaSqm:e.areaSqm??null,plan:e.planImageUrl?{floorId:u,imageUrl:e.planImageUrl,planVersion:1,updatedAt:r}:null},this.spatial.floors.push(n),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(n.id)&&this.activeSession.scope.allowedFloorIds.push(n.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:n.id,name:n.name,hasPlan:!!n.plan}),this.pushAudit("floor.upsert",n.id,"success",n.name),structuredClone(n)}async deleteFloor(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼层`);if(e===$.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(r=>r.id!==e),this.spatial.zones=this.spatial.zones.filter(r=>r.floorId!==e),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${e}`,{ok:!0}),this.pushAudit("floor.delete",e,"success")}async upsertZone(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护功能区`);let r=e.id?this.spatial.zones.find(n=>n.id===e.id):void 0;return r?(r.name=e.name.trim()||r.name,r.category=e.category):(r={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:e.floorId,name:e.name.trim(),category:e.category},this.spatial.zones.push(r)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",r),this.pushAudit("zone.upsert",r.id,"success",r.name),structuredClone(r)}async deleteZone(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(r=>r.id!==e),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${e}`,{ok:!0}),this.pushAudit("zone.delete",e,"success")}async copyZonesToFloors(e,s){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权复制功能区`);const n=this.spatial.floors.find(q=>q.id===e),u=this.spatial.zones.filter(q=>q.floorId===e);if(!n||u.length===0)return 0;let S=0;for(const q of s){if(q===e)continue;const R=this.spatial.floors.find(P=>P.id===q);if(!R)continue;const C=new Set(this.spatial.zones.filter(P=>P.floorId===q).map(P=>P.name));for(const P of u){const F=P.name.replace(new RegExp(`^${n.name}\\s*`,"i"),""),J=`${R.name} ${F}`.trim();C.has(J)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:q,name:J,category:P.category}),C.add(J),S+=1)}}return S>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:e,targetCount:s.length,added:S}),S}async getFloorDevices(e){const s=this.requireSession();if(this.activeOrgId!==sa)return[];if(!s.scope.allowedFloorIds.includes(e)){const n={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,n),this.pushAudit("floor.read",e,"denied",n.message),new Error(`403 FORBIDDEN: ${n.message}`)}if(e!==$.floorId)return[];let r=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(r=r.filter(n=>n.logicalZoneId&&s.scope.allowedZoneIds.includes(n.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:r.length}),r}async dispatchControlBatch(e){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const r=`batch-e7f-${Date.now().toString(36)}`,n={batchId:r,floorId:e.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(u=>({deviceId:u.deviceId,command:u.command,targetValue:u.targetValue,status:"queued"}))};return this.batches.set(r,n),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",n,e),this.pushAudit("control.dispatch",r,"success",`下发 ${e.targets.length} 台设备`),n.receipts.forEach((u,S)=>{const q=this.devices.find(R=>R.id===u.deviceId);setTimeout(()=>{u.status="dispatched",u.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:r,deviceId:u.deviceId,status:"dispatched",at:u.dispatchedAt})},280+S*120),setTimeout(()=>{const R=new Date().toISOString();!q||q.connectivity==="offline"?(u.status="timeout",u.errorCode="GATEWAY_READBACK_TIMEOUT",u.errorMessage="设备离线，网关未收到回读确认",u.verifiedAt=R):(u.status="verified_success",u.observedValue=u.targetValue,u.verifiedAt=R,this.applyObservedTelemetry(q,u.command,u.targetValue,R)),this.emit({type:"control.receipt.updated",batchId:r,deviceId:u.deviceId,status:u.status,observedValue:u.observedValue,at:R})},900+S*220)}),structuredClone(n)}applyObservedTelemetry(e,s,r,n){s==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:r,collectedAt:n,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(r)>0,collectedAt:n,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:r,collectedAt:n,stale:!1}:s==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:r,collectedAt:n,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:n,values:{[s]:r}})}async getControlBatch(e){this.requireSession();const s=this.batches.get(e);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(s)}async listAlarms(e){const s=this.requireSession();return this.activeOrgId!==sa?[]:!s.scope.allowedFloorIds.includes(e)||e!==$.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,s){const r=this.requireSession();if(!r.scope.canManageAlarms){const u=`角色「${r.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",u),new Error(`403 FORBIDDEN: ${u}`)}const n=this.alarms.find(u=>u.id===e);if(!n)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return n.status="acknowledged",n.acknowledgedAt=new Date().toISOString(),n.acknowledgedBy=r.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,n,{note:s}),this.pushAudit("alarm.acknowledge",e,"success",s),this.emit({type:"alarm.changed",floorId:n.floorId,alarmId:e,status:"acknowledged",at:n.acknowledgedAt}),structuredClone(n)}async listWorkOrders(e){const s=this.requireSession();return this.activeOrgId!==sa?[]:!s.scope.allowedFloorIds.includes(e)||e!==$.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const r=new Date().toISOString(),n={id:`wo-e7f-${Date.now().toString(36)}`,projectId:$.projectId,buildingId:$.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:r,updatedAt:r};if(this.workOrders.unshift(n),e.alarmId){const u=this.alarms.find(S=>S.id===e.alarmId);u&&(u.workOrderId=n.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",n,e),this.pushAudit("work_order.create",n.id,"success",n.title),structuredClone(n)}async updateWorkOrderStatus(e,s){const r=this.requireSession();if(!r.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权流转工单`);const n=this.workOrders.find(u=>u.id===e);if(!n)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return n.status=s,n.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,n,{status:s}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${s}`),structuredClone(n)}async updateDevicePlanPoint(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const r=this.devices.find(n=>n.id===e.deviceId);if(!r)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(r.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${r.version}，请刷新后重试`);return r.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},r.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,r,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${r.planPoint.x}, ${r.planPoint.y})`),structuredClone(r)}async updateDeviceHardwareBinding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const r=this.devices.find(u=>u.id===e.deviceId);if(!r)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(r.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${r.version}）`);const n=new Date().toISOString();return r.physicalInstalled=e.physicalInstalled,r.physicalVerifiedAt=e.physicalInstalled?n:null,r.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:n,boundBy:s.displayName},r.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,r,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(r)}async listConnections(e){return this.requireSession(),this.activeOrgId!==sa?[]:structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),this.activeOrgId!==sa?[]:structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,s){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权冻结交付批次`);const n=this.devices.filter(S=>S.physicalInstalled&&S.hardwareBinding).length,u={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:$.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:n,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:r.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(u),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,u,{note:s}),this.pushAudit("delivery.freeze",u.id,"success",`${n}/${this.devices.length} 已现场核验`),structuredClone(u)}async getAnalysisReport(e,s,r){this.requireSession();const n=s==="today"?1:s==="7d"?7:30,S={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*n)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*n).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(C=>C.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*n).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*n).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*n).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],q=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],R={category:e,range:s,scopeId:r,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:S.kpis,unit:S.unit,series:S.base.map((C,P)=>({label:q[P],value:Math.round(C*(e==="energy"||e==="carbon"?n/2+.5:1)),baseline:Math.round(C*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:S.base[3],unit:S.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:S.base[4],unit:S.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:S.base[1],unit:S.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${s}&scopeId=${r}`,{kpis:R.kpis.length}),R}async listScenes(e){return this.requireSession(),this.activeOrgId!==sa?[]:structuredClone(this.scenes)}async createScene(e){const s=this.requireSession();if(!s.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建场景`);const r={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(r),this.record("REST","createScene","POST /api/v1/scenes",r,e),this.pushAudit("scene.create",r.id,"success",r.name),structuredClone(r)}async executeScene(e){const s=this.scenes.find(n=>n.id===e);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const r=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=r.batchId,r}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:$.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,s,r){this.requireSession();const n=r>=this.calendar.nightGuardStart?`下班时间 ${r} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,u=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${r}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${r} (+30m)`,conflictWarning:n},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:n}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",u,{workdayStart:s,workdayEnd:r}),u}async saveWorkCalendar(e,s,r,n){const u=this.requireSession();if(!u.scope.canEditSettings)throw this.pushAudit("settings.calendar",$.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${u.roleLabel}」无权修改应用设置`);if(this.calendar.version!==n)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=r)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:r,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:r,expectedVersion:n}),this.pushAudit("settings.calendar",$.projectId,"success",`${s}-${r}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,s,r){const n=this.requireSession();if(!n.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",e,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权启停应用设置规则`);const u=this.rules.find(S=>S.id===e);if(!u)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(u.version!==r)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${u.version}）`);return u.enabled=s,u.version+=1,u.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,u,{enabled:s,expectedVersion:r}),this.pushAudit("settings.rule_toggle",e,"success",s?"启用":"停用"),structuredClone(u)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,s){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",e,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const n=Je[s],u={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:s,roleLabel:n.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(u),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",u,{email:e,role:s}),this.pushAudit("org.invite",e,"success",n.roleLabel),structuredClone(u)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const e=this.requireSession();return this.reconcileOverrides(),e.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(s=>s.targetUserId===e.userId))}async grantOverride(e){const s=this.requireSession();if(!s.scope.canGrantOverride)throw this.pushAudit("override.grant",e.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const r=e.reason.trim();if(!r)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(e.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const n=this.members.find(q=>q.userId===e.targetUserId);if(!n)throw new Error(`404 NOT_FOUND: 目标成员 ${e.targetUserId} 不存在`);if(n.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const u=Date.now(),S={id:`ovr-${u.toString(36)}`,targetUserId:n.userId,targetUserName:n.displayName,module:e.module,durationHours:e.durationHours,grantedAt:new Date(u).toISOString(),expiresAt:new Date(u+e.durationHours*36e5).toISOString(),approvedBy:s.displayName,reason:r,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(S),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",S,e),this.pushAudit("override.grant",`${n.displayName} · ${e.module==="deployment"?"系统部署":"应用设置"}`,"success",`${e.durationHours}h · ${r}`),structuredClone(S)}async revokeOverride(e){const s=this.requireSession();if(!s.scope.canGrantOverride)throw this.pushAudit("override.revoke",e,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const r=this.overrides.find(n=>n.id===e);if(!r)throw new Error(`404 NOT_FOUND: 提权记录 ${e} 不存在`);return r.status="revoked",r.revokedAt=new Date().toISOString(),r.revokedBy=s.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${e}/revoke`,r),this.pushAudit("override.revoke",`${r.targetUserName} · ${r.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(r)}subscribeFloorEvents(e,s){return e!==$.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${$.floorId}`,e),this.listeners.forEach(s=>s(e))}}const Za=["org_admin","project_admin","operator","space_user"],Ut=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function be(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Ka(a){return a?a.slice(0,16).replace("T"," "):"—"}function Oa(a){return a==="deployment"?"系统部署":"应用设置"}async function Vt(a,e,s,r,n){const u=s.scope.canManageMembers,S=s.scope.canGrantOverride,q=s.scope.canViewAuditLogs,R=S||s.role==="operator",C=s.role!=="space_user";let P="profile",F=C?await e.listOrgMembers().catch(()=>[]):[],J=R?await e.listOverrides().catch(()=>[]):[],me=q?await e.listAuditLogs().catch(()=>[]):[],ce="",se="all",te="all",Y="all",le=!1,de=!1,ne=s.displayName,oe=s.role==="org_admin"?"机构负责人":s.role==="project_admin"?"项目负责人":s.role==="operator"?"运行值守工程师":"园区空间用户",V="138-0013-8072",ve="",ie="";const _e={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function pe(){const[L,g,m,y]=await Promise.all([e.getSession(),C?e.listOrgMembers().catch(()=>[]):Promise.resolve([]),R?e.listOverrides().catch(()=>[]):Promise.resolve([]),q?e.listAuditLogs().catch(()=>[]):Promise.resolve([])]);F=g,J=m,me=y,L&&(s=L,r(L)),B()}function N(){const L=["profile"];return C&&L.push("members","roles"),R&&L.push("overrides"),q&&L.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${L.map(g=>{const m=_e[g],y=g==="overrides"?J.filter(d=>d.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${P===g}" data-anav="${g}">
                  ${fe(m.icon,16)}
                  <span>${m.label}</span>
                  ${y>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${y}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function Z(){return P==="members"&&u?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':P==="overrides"&&S?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':P==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 · SR 6.1</span>':""}function K(){const L=s.scope.activeOverrides.filter(m=>m.status==="active"),g=s.scope.allowedZoneIds?.length?`授权 ${s.scope.allowedFloorIds.length} 个楼层 · ${s.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${s.scope.allowedProjectIds.length} 个项目 · ${s.scope.allowedBuildingIds.length} 栋楼宇 · ${s.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${be(s.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${be(s.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${be(ne)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${be(oe)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${be(V)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${be(g)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${be(ct[s.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${be(s.roleLabel)}</span>
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
          ${L.length>0?L.map(m=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${be(Oa(m.module))}（${m.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${be(m.approvedBy)} · 到期时间：${be(Ka(m.expiresAt))} · 事由：${be(m.reason)}</span>
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
    `}function G(){const L=ce.trim().toLowerCase(),g=F.filter(m=>se!=="all"&&m.role!==se?!1:L?`${m.displayName} ${m.email} ${m.roleLabel} ${m.scopeSummary}`.toLowerCase().includes(L):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${be(ce)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${se==="all"?"selected":""}>全部角色（${F.length}）</option>
            ${Za.map(m=>`<option value="${m}" ${se===m?"selected":""}>${be(Qe[m])}</option>`).join("")}
          </select>
        </div>
        <span class="pacom-row-sub">显示 ${g.length} / ${F.length} 人</span>
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
              ${g.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':g.map(m=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${be(m.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${be(m.displayName)}</div>
                                ${u?`<div class="pacom-row-sub">${be(m.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${m.role==="org_admin"||m.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${be(m.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${be(m.scopeSummary)}</span></td>
                          <td>
                            <span class="pacom-badge ${m.status==="active"?"pacom-badge--online":"pacom-badge--neutral"}">
                              ${m.status==="active"?"正常":m.status==="invited"?"邀请中":"已停用"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function re(){return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">四级标准角色说明</h2>
          <span class="pacom-row-sub">IEC 62443-3-3 SR 2.1 RE 2 · 最小权限与职责分离</span>
        </div>
        <div class="pacom-settings-card">
          ${Za.map(L=>{const g=F.filter(m=>m.role===L).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${be(Qe[L])}</span>
                  <span class="pacom-setting-desc">${be(ct[L])}</span>
                </div>
                <span class="pacom-badge pacom-badge--neutral">${g} 人</span>
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
                ${Ut.map(L=>`
                  <tr>
                    <td><strong style="font-weight:450;">${be(L.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${L.org_admin.tone}">${be(L.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${L.project_admin.tone}">${be(L.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${L.operator.tone}">${be(L.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${L.space_user.tone}">${be(L.space_user.text)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function xe(){return`
      <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="限时提权统计">
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">当前生效提权</span>
          <div class="pacom-kpi-value">${J.filter(g=>g.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${J.length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">每条审批与收回同步写入审计日志</span>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">限时提权审批记录</h2>
          <span class="pacom-row-sub">${S?"可为运营人员开启「系统部署」或「应用设置」限时修改权":"展示管理员为你授予的临时提权记录"}</span>
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
                  ${S?'<th style="text-align:right;">操作</th>':""}
                </tr>
              </thead>
              <tbody>
                ${J.length===0?`<tr><td colspan="${S?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${S?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:J.map(g=>`
                          <tr>
                            <td><strong style="font-weight:450;">${be(g.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${be(Oa(g.module))}</span></td>
                            <td>
                              <div>${g.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${be(Ka(g.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${be(g.approvedBy)}</div>
                              <div class="pacom-row-sub">${be(g.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${g.status==="active"?"pacom-badge--online":g.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${g.status==="active"?"生效中":g.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${S?`<td style="text-align:right;">
                                    ${g.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${be(g.id)}">提前收回</button>`:`<span class="pacom-row-sub">${g.revokedBy?`${be(g.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function he(){const L=me.filter(g=>{if(te==="success"&&g.result!=="success"||te==="denied"&&g.result==="success")return!1;if(Y!=="all"){const m=`${g.action} ${g.target}`.toLowerCase();if(Y==="control"&&!m.includes("control")&&!m.includes("scene")||Y==="alarm"&&!m.includes("alarm")&&!m.includes("work")||Y==="deploy"&&!m.includes("deploy")&&!m.includes("plan")&&!m.includes("hardware")&&!m.includes("project")&&!m.includes("building")&&!m.includes("floor")&&!m.includes("zone")||Y==="settings"&&!m.includes("settings")||Y==="override"&&!m.includes("override"))return!1}return!0});return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
            <option value="all" ${Y==="all"?"selected":""}>全部操作类别</option>
            <option value="override" ${Y==="override"?"selected":""}>限时提权审批</option>
            <option value="control" ${Y==="control"?"selected":""}>设备控制与场景</option>
            <option value="alarm" ${Y==="alarm"?"selected":""}>告警与工单处置</option>
            <option value="deploy" ${Y==="deploy"?"selected":""}>系统部署与空间</option>
            <option value="settings" ${Y==="settings"?"selected":""}>应用设置变更</option>
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="按执行结果筛选">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${te==="all"}" data-audit-filter="all">全部（${me.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${te==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${te==="denied"}" data-audit-filter="denied">已拦截</button>
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
              ${L.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':L.map(g=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${be(g.action)}</div>
                            ${g.detail?`<div class="pacom-row-sub">${be(g.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${be(g.target)}</code></td>
                          <td>
                            <div>${be(g.actor)}</div>
                            <div class="pacom-row-sub">${be(Qe[g.role]??g.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${be(Ka(g.at))}</span></td>
                          <td style="text-align:right;">
                            <span class="pacom-badge ${g.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                              ${g.result==="success"?"成功":"已拦截"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function k(){const L=[];if(le&&u){const g=s.role==="org_admin"?Za:["project_admin","operator","space_user"];L.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="邀请成员">
          <form class="dep-modal-card" data-role="invite-form" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">邀请新成员</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${fe("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">成员电子邮箱（唯一登录账号）</span>
                <input class="pacom-input" name="email" type="email" placeholder="colleague@gzlab.ac.cn" required />
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分配角色</span>
                <select class="pacom-select" name="role">
                  ${g.map(m=>`<option value="${m}">${be(Qe[m])}</option>`).join("")}
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
        </div>`)}if(de&&S){const g=F.filter(m=>m.role==="operator");L.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="授予限时提权">
          <form class="dep-modal-card" data-role="grant-override-form" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">授予运营人员限时提权（SR 2.1 RE 3）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${fe("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">目标运营人员</span>
                <select class="pacom-select" name="targetUserId" required>
                  ${g.length===0?'<option value="">暂无运营人员</option>':g.map(m=>`<option value="${be(m.userId)}">${be(m.displayName)}（${be(m.email)}）</option>`).join("")}
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
              <span class="pacom-row-sub">审批人：${be(s.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${g.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return L.join("")}function B(){const L=_e[P],g=Z();a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${be(s.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${N()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${g?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${L.label}</h2>
                  <p class="pacom-unified-subtitle">${L.subtitle}</p>
                </div>
                ${g?`<div class="pacom-unified-head-actions">${g}</div>`:""}
              </div>
              ${ve?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${be(ve)}</span></div>`:""}
              ${ie?`<div class="pacom-alert-banner">${be(ie)}</div>`:""}
              ${P==="profile"?K():P==="members"?G():P==="roles"?re():P==="overrides"?xe():he()}
            </div>
          </div>
        </div>
      </div>
      ${k()}
    `,$e()}function $e(){a.querySelectorAll("[data-anav]").forEach(g=>{g.addEventListener("click",()=>{P=g.dataset.anav??"profile",ve="",ie="",B()})}),a.querySelector('[data-role="profile-form"]')?.addEventListener("submit",g=>{g.preventDefault();const m=new FormData(g.currentTarget);ne=String(m.get("displayName")??"").trim()||s.displayName,oe=String(m.get("jobTitle")??"").trim()||oe,V=String(m.get("phone")??"").trim()||V,ve=`已保存个人资料：${ne}（${oe}）· ${V}`,B()}),a.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",n()}),a.querySelector("[data-open-invite]")?.addEventListener("click",()=>{le=!0,de=!1,B()}),a.querySelector("[data-open-grant]")?.addEventListener("click",()=>{de=!0,le=!1,B()}),a.querySelectorAll("[data-close-modals]").forEach(g=>{g.addEventListener("click",()=>{le=!1,de=!1,B()})}),a.querySelectorAll("[data-modal-scrim]").forEach(g=>{g.addEventListener("click",m=>{m.target===g&&(le=!1,de=!1,B())})}),a.querySelector("[data-member-search]")?.addEventListener("input",g=>{const m=g.currentTarget,y=m.selectionStart??m.value.length;ce=m.value,B();const d=a.querySelector("[data-member-search]");d&&(d.focus(),d.setSelectionRange(y,y))}),a.querySelector("[data-role-filter]")?.addEventListener("change",g=>{se=g.currentTarget.value,B()}),a.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async g=>{g.preventDefault(),ie="";const m=new FormData(g.currentTarget);try{const y=await e.inviteOrgMember(String(m.get("email")??""),String(m.get("role")));le=!1,ve=`已向 ${y.email} 发送「${y.roleLabel}」邀请。`,await pe()}catch(y){ie=y instanceof Error?y.message:String(y),B()}}),a.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async g=>{g.preventDefault(),ie="";const m=new FormData(g.currentTarget);try{const y=await e.grantOverride({targetUserId:String(m.get("targetUserId")??""),module:String(m.get("module")??"deployment"),durationHours:Number(m.get("durationHours")??8),reason:String(m.get("reason")??"")});de=!1,ve=`已为「${y.targetUserName}」开启「${Oa(y.module)}」${y.durationHours} 小时限时修改权，到期自动收回。`,await pe()}catch(y){ie=y instanceof Error?y.message:String(y),B()}}),a.querySelectorAll("[data-revoke-override]").forEach(g=>{g.addEventListener("click",async()=>{const m=g.dataset.revokeOverride;if(m){ie="";try{const y=await e.revokeOverride(m);ve=`已提前收回「${y.targetUserName}」的「${Oa(y.module)}」限时修改权。`,await pe()}catch(y){ie=y instanceof Error?y.message:String(y),B()}}})}),a.querySelectorAll("[data-audit-filter]").forEach(g=>{g.addEventListener("click",()=>{te=g.dataset.auditFilter??"all",B()})}),a.querySelector("[data-audit-cat]")?.addEventListener("change",g=>{Y=g.currentTarget.value??"all",B()})}B()}const ga={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Ht={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Gt={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Wt(a){const e=`${a.title} ${a.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Zt(a){return a.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:a.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function Ya(a){const e=`${a.title} ${a.message}`.toLowerCase();return e.includes("离线")||e.includes("vav")||a.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:e.includes("co₂")||e.includes("co2")||a.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function Kt(a,e,s){const r=new URLSearchParams(window.location.hash.split("?")[1]??""),n=r.get("alarm"),u=r.get("wo"),S=s.scope.canManageAlarms;let q=await e.getSpatialTree(),R=Na(),C=!1,P="",F=[],J=[],me=[],ce=u?"workorders":"alarms",se="all",te="all",Y="all",le="impact",de=!1,ne="",oe=n,V=u,ve=null,ie=null,_e="resolved";const pe=new Set,N=new Map,Z=new Map,K=new Map,G=new Map;let re="",xe="";function he(g){const m=G.get(g.id);if(m)return m;const y=g.id.match(/(\d+)$/),d=`WO-2026-${y?y[1]:g.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,I={estCost:"¥ 450",actualCost:g.status==="closed"?"¥ 380":"--",cmmsNo:d,assigneeGroup:"暖通运维组",tasks:[{id:`${g.id}-t1`,label:"核查设备供电与现场指示灯状态",done:g.status!=="open"},{id:`${g.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:g.status==="resolved"||g.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:g.createdAt?g.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${d}）`}]};return G.set(g.id,I),I}async function k(){[F,J,me]=await Promise.all([e.listAlarms($.floorId),e.listWorkOrders($.floorId),e.getFloorDevices($.floorId).catch(()=>[])]),J.forEach(g=>he(g)),L()}function B(g){if(!g)return{name:"楼层通用",zone:"E7F",dev:null};const m=me.find(y=>y.id===g)??null;return m?{name:m.name,zone:(m.logicalZoneId?Gt[m.logicalZoneId]:void 0)??"E7F",dev:m}:{name:g,zone:"E7F",dev:null}}function $e(g){const m=B(g.deviceId).dev;m&&m.connectivity==="offline"?K.set(g.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${m.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):K.set(g.id,{verdict:"pass",summary:`自检通过（PASS）：「${m?.name??g.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),oe=g.id,L()}function L(){const g=F.filter(c=>c.status==="active"&&!N.has(c.id)),m=J.filter(c=>!he(c).cancelled&&(c.status==="open"||c.status==="assigned"||c.status==="in_progress")),y=F.filter(c=>c.status!=="active").length+Z.size,d=0,I=N.size,z=ne.trim().toLowerCase(),ue=F.filter(c=>{const v=N.has(c.id);if(se==="snoozed"){if(!v)return!1}else if(se==="active"){if(c.status!=="active"||v)return!1}else if(se==="acknowledged"){if(c.status!=="acknowledged")return!1}else if(v)return!1;if(Y!=="all"&&c.severity!==Y)return!1;if(!z)return!0;const D=B(c.deviceId);return`${c.title} ${c.message} ${D.name} ${D.zone} ${c.deviceId}`.toLowerCase().includes(z)}),Ee=new Map;for(const c of ue){const v=`${c.title} ${c.message}`.toLowerCase(),D=v.includes("离线")||v.includes("modbus")||v.includes("通信"),Q=de?D?"root-gateway-modbus":c.deviceId:c.id,ye=D?"根因：E7F 主控网关通信链路":`根因：${B(c.deviceId).name}`,Fe=Ee.get(Q)??{rootLabel:ye,items:[]};Fe.items.push(c),Ee.set(Q,Fe)}const ke=Array.from(Ee.values());le==="impact"&&ke.sort((c,v)=>Ya(v.items[0]).costYuan-Ya(c.items[0]).costYuan);const we=J.filter(c=>{const v=he(c);if(te==="cancelled"){if(!v.cancelled)return!1}else if(v.cancelled||te==="open"&&(c.status==="resolved"||c.status==="closed")||te==="resolved"&&c.status!=="resolved"||te==="closed"&&c.status!=="closed")return!1;if(!z)return!0;const D=B(c.deviceId);return`${c.title} ${c.description} ${c.id} ${v.cmmsNo} ${D.name}`.toLowerCase().includes(z)});a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Ra({tree:q,session:s,scope:R,activeAlarmCount:g.length,isOpen:C,searchKeyword:P})}
            </div>

            <div class="pacom-header-meta">
              ${ce==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${de}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${s.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${s.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${fe("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ce==="alarms"}" data-main-tab="alarms">实时告警（${F.length-I}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ce==="workorders"}" data-main-tab="workorders">运维工单（${J.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ce==="alarms"&&se==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${g.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ce==="workorders"&&te==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${m.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ce==="alarms"&&se==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${y}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${d}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${re?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${p(re)}</span></div>`:""}
          ${xe?`<div class="pacom-alert-banner">${p(xe)}</div>`:""}

          ${ce==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${p(ne)}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${Y==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${Y==="critical"?"selected":""}>严重</option>
                      <option value="major" ${Y==="major"?"selected":""}>重要</option>
                      <option value="minor" ${Y==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${le==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${le==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${se==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${se==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${se==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${se==="snoozed"}" data-status-pill="snoozed">已忽略（${I}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${pe.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${pe.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${ke.length} 项</span>
                  </div>
                </div>
                ${ke.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${ke.map(c=>{const v=c.items[0],D=Ht[v.severity]??{label:v.severity,cls:"pacom-badge--neutral"},Q=B(v.deviceId),ye=Zt(v),Fe=Ya(v),We=oe===v.id,Le=N.get(v.id),Ne=!!Le,Xe=pe.has(v.id),H=K.get(v.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${p(v.id)}" data-check-alarm="${p(v.id)}" ${Xe?"checked":""} ${!S||v.status!=="active"||Ne?"disabled":""} aria-label="选择 ${p(v.title)}" />
                                  </td>
                                  <td><span class="pacom-badge ${D.cls}">${p(D.label)}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${p(v.title)}</span>
                                      ${de?`<span class="pacom-badge pacom-badge--accent">${p(c.rootLabel)}${c.items.length>1?` · 影响 ${c.items.length} 项`:""}</span>`:""}
                                      ${H?`<span class="pacom-badge ${H.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${p(H.verdict.toUpperCase())}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${p(v.message)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${p(Q.name)}</div>
                                    <div class="pacom-row-sub">${p(Q.zone)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${p(Fe.costLabel)}</div>
                                    <div class="pacom-row-sub">${p(Fe.comfortLabel)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${p(ye.duration)}</div>
                                    <div class="pacom-row-sub" style="color:${ye.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${p(ye.trend)}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${Ne?"pacom-badge--neutral":v.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Ne?`忽略 ${p(Le?.duration)}`:v.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Ne?`<button class="pacom-btn" data-unsnooze="${p(v.id)}" ${S?"":"disabled"}>恢复监控</button>`:`
                                            ${v.status==="active"?`<button class="pacom-btn" data-mark-actioned="${p(v.id)}" ${S?"":"disabled"}>标记已处置</button>`:""}
                                            ${v.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${p(v.id)}" ${S?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${p(v.id)}">${We?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${We?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${p(Wt(v))}
                                            </div>
                                            ${Le?`<div class="pacom-info-banner">忽略周期：${p(Le.duration)} · 原因备注：${p(Le.reason)}</div>`:""}
                                            ${H?`
                                                <div class="pacom-banner ${H.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${p(H.summary)}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${H.steps.map(U=>`<span>${p(U)}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${p(v.id)}</code> · 设备编号 <code>${p(v.deviceId)}</code> · 关联工单 ${p(v.workOrderId??"无")}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${p(v.id)}">单机自检（FTT）</button>
                                              ${!Ne&&v.status==="active"?`<button class="pacom-btn" data-open-snooze="${p(v.id)}" ${S?"":"disabled"}>限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${p(v.deviceId)}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${p(v.deviceId)}">定位设备 →</button>
                                            </div>
                                            ${ve===v.id?`
                                                <form data-snooze-form="${p(v.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
                                                    <button class="pacom-btn pacom-btn--primary" type="submit" style="height:28px;" ${S?"":"disabled"}>确认忽略</button>
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
              ${(()=>{const c=V?J.find(v=>v.id===V)??null:null;if(c){const v=B(c.deviceId),D=he(c),Q=!!(!S||D.cancelled||c.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${p(c.id)}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${p(c.title)}</h2>
                        <span class="pacom-badge pacom-badge--accent">${p(D.cmmsNo)}</span>
                        ${D.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${p(c.id)}" data-wo-status="${p(c.id)}" aria-label="更新工单状态" ${Q?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(ye=>`<option value="${ye}" ${c.status===ye?"selected":""}>${ga[ye]}</option>`).join("")}
                          <option value="cancelled" ${D.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${ie===c.id?`
                        <form data-close-wo-form="${p(c.id)}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${ga[_e]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${p(D.cause??"")}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${p(D.solution??"")}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${p(D.actualCost==="--"?"":D.actualCost)}" />
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" ${S?"":"disabled"}>保存并更新状态</button>
                          </div>
                        </form>`:""}
                    <div class="pacom-wo-workbench">
                      <div style="display:flex; flex-direction:column; gap:14px;">
                        <div class="pacom-card" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:500;">工单描述与现场检查任务清单</strong>
                          <div class="pacom-row-sub">${p(c.description)}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${D.tasks.map(ye=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${p(ye.id)}" data-wo-task="${p(c.id)}" data-task-id="${p(ye.id)}" ${ye.done?"checked":""} ${Q?"disabled":""} />
                                    <span>${p(ye.label)}</span>
                                  </span>
                                  ${ye.unit?`<span class="pacom-row-sub">实测：${p(ye.reading??"--")} ${p(ye.unit)}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${D.history.map(ye=>`<span>• <span class="pacom-row-sub">${p(ye.at)}</span> — ${p(ye.text)}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${p(c.id)}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${p(D.cmmsNo)}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${p(v.name)}（${p(v.zone)}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${p(D.assigneeGroup)}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${p(D.estCost)} / 实际 ${p(D.actualCost)}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${p(D.cause??"待完单填写")}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${p(D.solution??"待完单填写")}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${p(c.deviceId??"")}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${p(c.deviceId??"")}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${p(ne)}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${te==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${te==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${te==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${te==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${te==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${we.length} 条工单</span>
                  </div>
                  ${we.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${we.map(v=>{const D=B(v.deviceId),Q=he(v),ye=!!(!S||Q.cancelled||v.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${p(v.title)}</span>
                                        ${Q.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${p(v.description)} · <code>${p(v.id)}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${p(D.name)}</div>
                                      <div class="pacom-row-sub">${p(D.zone)}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${p(Q.cmmsNo)}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${p(Q.assigneeGroup)} · 预估 ${p(Q.estCost)}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${p(v.id)}" data-wo-status="${p(v.id)}" aria-label="更新工单状态" ${ye?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Fe=>`<option value="${Fe}" ${v.status===Fe?"selected":""}>${ga[Fe]}</option>`).join("")}
                                          <option value="cancelled" ${Q.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${p(v.id)}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${ie===v.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${p(v.id)}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${ga[_e]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${p(Q.cause??"")}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${p(Q.solution??"")}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${p(Q.actualCost==="--"?"":Q.actualCost)}" />
                                            </div>
                                            <div style="display:flex; justify-content:flex-end; gap:8px;">
                                              <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                                              <button class="pacom-btn pacom-btn--primary" type="submit" ${S?"":"disabled"}>保存并更新状态</button>
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
    `,Pa(a,{onToggle:()=>{C=!C,L(),C&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:c=>{P=c,L();const v=a.querySelector("[data-global-space-search]");v&&(v.focus(),v.setSelectionRange(c.length,c.length))},onPick:c=>{R=c,C=!1,L()}}),a.querySelectorAll("[data-main-tab]").forEach(c=>{c.addEventListener("click",()=>{ce=c.dataset.mainTab??"alarms",re="",L()})}),a.querySelectorAll("[data-kpi-filter]").forEach(c=>{c.addEventListener("click",()=>{const v=c.dataset.kpiFilter;re="",v==="workorders"?(ce="workorders",te=te==="open"?"all":"open"):(v==="active"||v==="acknowledged")&&(ce="alarms",se=se===v?"all":v),L()})}),a.querySelectorAll("[data-status-pill]").forEach(c=>{c.addEventListener("click",()=>{se=c.dataset.statusPill??"all",L()})}),a.querySelectorAll("[data-wo-pill]").forEach(c=>{c.addEventListener("click",()=>{te=c.dataset.woPill??"all",L()})}),a.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{re="",k()}),a.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{de=!de,L()}),a.querySelector("[data-severity-filter]")?.addEventListener("change",c=>{Y=c.currentTarget.value,L()}),a.querySelector("[data-alarm-sort]")?.addEventListener("change",c=>{le=c.currentTarget.value??"impact",L()}),a.querySelector("[data-alarm-search]")?.addEventListener("input",c=>{const v=c.currentTarget,D=v.selectionStart??v.value.length;ne=v.value,L();const Q=a.querySelector("[data-alarm-search]");Q&&(Q.focus(),Q.setSelectionRange(D,D))}),a.querySelectorAll("[data-check-alarm]").forEach(c=>{c.addEventListener("change",()=>{if(!S)return;const v=c.dataset.checkAlarm;v&&(c.checked?pe.add(v):pe.delete(v),L())})}),a.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{if(!S)return;xe="";const c=Array.from(pe);try{for(const v of c)await e.acknowledgeAlarm(v,"告警中心批量确认"),Z.set(v,"批量确认处置");pe.clear(),re=`已批量确认 ${c.length} 条告警，未来 24 小时持续校验无复发。`,await k()}catch(v){xe=v instanceof Error?v.message:String(v),L()}}),a.querySelectorAll("[data-expand-alarm]").forEach(c=>{c.addEventListener("click",()=>{const v=c.dataset.expandAlarm??null;oe=oe===v?null:v,ve=null,L()})}),a.querySelectorAll("[data-expand-wo]").forEach(c=>{c.addEventListener("click",()=>{const v=c.dataset.expandWo??null;V=V===v?null:v,L()})}),a.querySelectorAll("[data-run-ftt]").forEach(c=>{c.addEventListener("click",()=>{const v=F.find(D=>D.id===c.dataset.runFtt);v&&$e(v)})}),a.querySelectorAll("[data-open-snooze]").forEach(c=>{c.addEventListener("click",()=>{S&&(ve=c.dataset.openSnooze??null,L())})}),a.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{ve=null,L()}),a.querySelectorAll("[data-snooze-form]").forEach(c=>{c.addEventListener("submit",v=>{if(v.preventDefault(),!S)return;const D=c.dataset.snoozeForm;if(!D)return;const Q=new FormData(c),ye=String(Q.get("duration")??"24h"),Fe=String(Q.get("reason")??"").trim()||"现场核查中";N.set(D,{duration:ye,reason:Fe}),pe.delete(D),ve=null,re=`已限时忽略该告警（${ye} · ${Fe}），可在「已忽略」页签中随时恢复。`,L()})}),a.querySelectorAll("[data-unsnooze]").forEach(c=>{c.addEventListener("click",()=>{if(!S)return;const v=c.dataset.unsnooze;v&&(N.delete(v),re="已恢复该告警的实时监控。",L())})}),a.querySelectorAll("[data-go-ts]").forEach(c=>{c.addEventListener("click",()=>{const v=c.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(v)}`})}),a.querySelectorAll("[data-locate-home]").forEach(c=>{c.addEventListener("click",()=>{const v=c.dataset.locateHome??"";window.location.hash=v?`#home?device=${encodeURIComponent(v)}`:"#home"})}),a.querySelectorAll("[data-mark-actioned]").forEach(c=>{c.addEventListener("click",async()=>{if(!S)return;xe="";const v=c.dataset.markActioned;try{await e.acknowledgeAlarm(v,"现场自处理完成（Mark Actioned）"),Z.set(v,"现场自处理完成"),pe.delete(v),re="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await k()}catch(D){xe=D instanceof Error?D.message:String(D),L()}})}),a.querySelectorAll("[data-to-wo]").forEach(c=>{c.addEventListener("click",async()=>{if(!S)return;xe="";const v=F.find(D=>D.id===c.dataset.toWo);if(v)try{await e.createWorkOrder({floorId:v.floorId,deviceId:v.deviceId,alarmId:v.id,title:`处置告警：${v.title}`,description:v.message}),re=`已将「${v.title}」转为运维工单并同步 CMMS。`,await k()}catch(D){xe=D instanceof Error?D.message:String(D),L()}})}),a.querySelectorAll("[data-wo-status]").forEach(c=>{c.addEventListener("change",async()=>{if(!S)return;const v=c.dataset.woStatus,D=c.value;if(xe="",D==="cancelled"){const Q=J.find(ye=>ye.id===v);if(Q){const ye=he(Q);ye.cancelled=!0,ye.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),re="工单已移入「已取消」分类并锁定编辑。",L()}return}if(D==="resolved"||D==="closed"){ie=v,_e=D,L();return}try{await e.updateWorkOrderStatus(v,D);const Q=J.find(ye=>ye.id===v);Q&&he(Q).history.unshift({at:"刚刚",text:`状态变更为「${ga[D]}」`}),re="工单状态已更新并写入审计日志。",await k()}catch(Q){xe=Q instanceof Error?Q.message:String(Q),await k()}})}),a.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{ie=null,L()}),a.querySelectorAll("[data-close-wo-form]").forEach(c=>{c.addEventListener("submit",async v=>{if(v.preventDefault(),!S)return;const D=c.dataset.closeWoForm,Q=new FormData(c),ye=String(Q.get("cause")??"").trim(),Fe=String(Q.get("solution")??"").trim(),We=String(Q.get("actualCost")??"").trim();try{await e.updateWorkOrderStatus(D,_e);const Le=J.find(Ne=>Ne.id===D);if(Le){const Ne=he(Le);Ne.cause=ye,Ne.solution=Fe,We&&(Ne.actualCost=We),Ne.history.unshift({at:"刚刚",text:`流转至「${ga[_e]}」· 根因：${ye}`})}ie=null,V=D,re=`工单已更新为「${ga[_e]}」，根因与方案已沉淀归档。`,await k()}catch(Le){xe=Le instanceof Error?Le.message:String(Le),L()}})}),a.querySelectorAll("[data-wo-task]").forEach(c=>{c.addEventListener("change",()=>{if(!S)return;const v=J.find(ye=>ye.id===c.dataset.woTask);if(!v)return;const Q=he(v).tasks.find(ye=>ye.id===c.dataset.taskId);Q&&(Q.done=c.checked),L()})})}await k()}const Yt={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},Jt={frozen:"已冻结",draft:"草稿",delivered:"已交付"},Ja={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},Qa=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],mt=[{id:"doc-hvac-7f",floorId:$.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:$.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:$.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:$.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],Qt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},gt=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function f(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function qa(a){const e=a.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面")||e.includes("屋顶")||e.includes("天面"))return 999;const s=e.match(/(-?\d+)/);if(!s)return 0;const r=Number(s[1]);return e.startsWith("B")||e.includes("地下")||e.includes("负")?-Math.abs(r):r}const vt={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function va(a){const e=a.trim(),s=e.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test(s)||/屋面|屋顶|天面/.test(e))return"RF";const r=s.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(r)return`B${Number(r[1])}`;const n=e.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(n){const q=/^\d+$/.test(n[1])?Number(n[1]):vt[n[1]];if(q)return`B${q}`}if(/首层|一层/.test(e))return"1F";const u=e.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(u){const q=/^\d+$/.test(u[1])?Number(u[1]):vt[u[1]];if(q)return`${q}F`}const S=s.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return S?`${Number(S[1])}F`:null}function Fa(a){return new Promise((e,s)=>{const r=new FileReader;r.onload=()=>typeof r.result=="string"?e(r.result):s(new Error("无法读取图片内容")),r.onerror=()=>s(new Error(`读取文件「${a.name}」失败`)),r.readAsDataURL(a)})}function Xt(a){return a.category==="gateway"?a.name.includes("蓝牙")?"蓝牙适配器":"主控网关":a.category==="lighting"?a.name.includes("702")?"702 照明":a.name.slice(0,6):a.category==="hvac"?a.name.includes("VAV")?"VAV-02":a.name.includes("FCU")?"FCU-01":a.name.slice(0,6):a.category==="sensor"?"环境传感":a.name.slice(0,6)}function es(a,e){const s=a.status!=="connected",r=e.filter(n=>n.hardwareBinding?.protocol===a.protocol);return r.length>0?r.map(n=>{const u=n.connectivity==="offline"||s;return{pointName:n.category==="hvac"?"送风温度 / 阀门开度":n.category==="lighting"?"回路开关 / 亮度反馈":n.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:n.name,value:u?"无上报":n.category==="hvac"?"23.4°C · 62%":n.category==="lighting"?"开启 · 80%":n.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:u?"46 分钟前":"12 秒前",quality:u?n.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${a.protocol.toUpperCase()} 采集通道汇总点`,deviceName:a.name,value:s?"采样延迟":"正常上报",interval:"60s",lastSeen:s?"38 分钟前":"9 秒前",quality:s?"delayed":"online"}]}async function as(a,e,s){const r=new URLSearchParams(window.location.hash.split("?")[1]??""),n=r.get("sec");let u=n==="floors"||n==="projects"?"project_config":n==="floorplan"||n==="devices"||n==="inventory"?"devices":n==="network"||n==="network_topo"?"network_topo":n==="connections"?"connections":"overview",S=n==="inventory"?"list":"marking",q="binding",R="",C="all",P=Na(),F=!1,J="",me="device",ce="all",se="",te=!1,Y=!1,le="mesh",de=1,ne=0,oe=0,V=await e.getSpatialTree(),ve=[],ie=[],_e=[];const pe={...Qt},N=[];let Z=P.level==="all-projects"?V.projects[0]?.id??$.projectId:P.projectId,K=P.level==="building"||P.level==="floor"?P.buildingId:V.buildings.find(h=>h.projectId===Z)?.id??V.buildings[0]?.id??$.buildingId,G=P.level==="floor"?P.floorId:V.floors.find(h=>h.buildingId===K&&h.id===$.floorId)?.id??V.floors.find(h=>h.buildingId===K)?.id??$.floorId,re=n==="floors"?G:null,xe="all",he="zones",k=r.get("new")==="project",B=!1,$e=!1,L=null,g=!1,m=!1,y=!1,d=!1,I=!1,z=null,ue=new Set,Ee=null,ke=!1,we=[];const ee=[];let c=null,v=null,D=!1,Q=!1,ye=null,Fe=null,We=3,Le=!1,Ne=[],Xe=null,H="",U="";const Be=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),ea=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],pa=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:$.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:$.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:$.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:$.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],Ca=new Map;function Ce(){k=!1,B=!1,$e=!1,L=null,g=!1,m=!1,y=!1,d=!1,I=!1,z=null}function wa(){return!!(k||B||$e||L||g||m||y||d||I||z)}const Sa=h=>{if(!document.body.contains(a)){document.removeEventListener("keydown",Sa);return}h.key==="Escape"&&(Ee?(Ee=null,_()):wa()?(Ce(),_()):Y&&(Y=!1,Q=!1,_()))};document.addEventListener("keydown",Sa);function Ve(){return V.floors}function Pe(h){return[...V.floors.filter(w=>w.buildingId===h)].sort((w,A)=>qa(A.name)-qa(w.name))}function Ze(){return V.zones}function Oe(h){return[...h===$.floorId?ve:[],...N.filter(A=>A.floorId===h)]}function aa(h){return h?Ze().find(w=>w.id===h)?.name.replace(/^7F\s*/,"")??h:"未分配功能区"}function xa(h){const w=V.buildings.find(j=>j.id===h);if(!w)return;Z=w.projectId,K=w.id;const A=Pe(w.id);A.some(j=>j.id===G)||(G=A.find(j=>j.id===$.floorId)?.id??A[0]?.id??""),re&&!A.some(j=>j.id===re)&&(re=null),P=ba(G?{level:"floor",projectId:w.projectId,buildingId:w.id,floorId:G}:{level:"building",projectId:w.projectId,buildingId:w.id}),v=null,Y=!1,Q=!1,de=1,ne=0,oe=0}function ua(h){G=h;const w=Ve().find(A=>A.id===h);if(w){K=w.buildingId;const A=V.buildings.find(j=>j.id===w.buildingId);A&&(Z=A.projectId),P=ba({level:"floor",projectId:Z,buildingId:w.buildingId,floorId:w.id})}v=null,Y=!1,Q=!1,de=1,ne=0,oe=0}async function Te(){U="";const[h,w,A,j]=await Promise.all([e.getSpatialTree(),e.getFloorDevices($.floorId).catch(()=>[]),e.listConnections(Z),e.listDeliveryBatches($.floorId)]);if(V=h,ve=w,ie=A,_e=j,V.projects.length===0)Z="",K="",G="",re=null;else{V.projects.some(i=>i.id===Z)||(Z=V.projects[0].id);const t=V.buildings.filter(i=>i.projectId===Z);t.some(i=>i.id===K)||(K=t[0]?.id??"");const l=K?Pe(K):[];l.some(i=>i.id===G)||(G=l.find(i=>i.id===$.floorId)?.id??l[0]?.id??""),re&&!l.some(i=>i.id===re)&&(re=null)}const M=Oe(G);v&&!M.some(t=>t.id===v)&&(v=null,Y=!1),D=M.find(t=>t.id===v)?.physicalInstalled??!1,_()}function oa(){const h=a.querySelector('[data-role="dep-viewport"]');h&&(h.style.transform=`translate(${ne}px, ${oe}px) scale(${de})`);const w=a.querySelector('[data-role="dep-zoom-label"]');w&&(w.textContent=`${Math.round(de*100)}%`)}function Ta(h){U="",h.connectivity==="offline"?U=`单机回读自检未通过（FAIL）：「${h.name}」当前离线，请核查网关链路或中继覆盖。`:H=`单机回读自检通过（PASS）：「${h.name}」指令下发与状态回读一致，已安全复位。`,_()}function Ba(){U="";const h=Oe(G),w=h.filter(E=>E.connectivity==="offline"),A=h.length-w.length,j=new Date;Xe={ranAt:`${String(j.getHours()).padStart(2,"0")}:${String(j.getMinutes()).padStart(2,"0")}:${String(j.getSeconds()).padStart(2,"0")}`,total:h.length,passed:A,failed:w.length,failedNames:w.map(E=>E.name)},w.length>0?U=`全层批量自检完成：${A}/${h.length} 台通过，${w.length} 台异常（${w.map(E=>E.name).join("、")}）。`:H=`全层批量自检全部通过（${A}/${h.length}），设备已自动安全复位。`,_()}function Ua(){const h=Oe(G),w=[],A=h.filter(l=>l.connectivity==="offline"),j=h.filter(l=>!l.planPoint),M=h.filter(l=>Be.get(l.id)?.proxy).length,E=h.filter(l=>Be.get(l.id)?.relay).length,t=h.length?E/h.length:0;A.length>0?A.forEach(l=>w.push({level:"fail",title:`节点不可达：${l.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:l.id})):w.push({level:"ok",title:"全网节点可达性正常",detail:`${h.length} 台设备均正常响应心跳。`}),M<1?w.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):w.push({level:"ok",title:`代理节点配置合理（${M} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),t>.25&&h.length>=4&&w.push({level:"warn",title:`中继比例偏高（${Math.round(t*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),j.length>0&&w.push({level:"warn",title:`尚有 ${j.length} 台未完成设备标记`,detail:"请在「设备管理 → 设备标记」中补齐平面坐标以便施工定位。"}),Ne=w,H=`已完成蓝牙 Mesh 网络体检（检测 ${h.length} 台节点，发现 ${w.filter(l=>l.level!=="ok").length} 项关注）。`,_()}function ia(){const h=Oe(G),w=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...h.map(E=>[E.name,E.category,aa(E.logicalZoneId),E.planPoint?`${Math.round(E.planPoint.x*100)}%/${Math.round(E.planPoint.y*100)}%`:"未标记",E.hardwareBinding?`${E.hardwareBinding.protocol} ${E.hardwareBinding.networkAddress}`:"未绑定",E.physicalInstalled?"已复核":"待复核",E.connectivity==="online"?"在线":"离线"].join(","))],A=new Blob([`\uFEFF${w.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),j=URL.createObjectURL(A),M=document.createElement("a");M.href=j,M.download="pacom-device-list.csv",M.click(),URL.revokeObjectURL(j)}function x(h){const w=new Set(Pe(h.id).map(j=>va(j.name)??j.name.toUpperCase())),A=[];for(let j=1;j<=h.aboveFloors;j+=1){const M=`${j}F`;w.has(M)||A.push({kind:"above",level:j,name:M})}for(let j=1;j<=h.belowFloors;j+=1){const M=`B${j}`;w.has(M)||A.push({kind:"below",level:-j,name:M})}return h.hasRoof&&!w.has("RF")&&A.push({kind:"roof",level:99,name:"RF"}),A}async function O(h){const w=V.buildings.find(j=>j.id===h);if(!w)return 0;const A=x(w);for(const j of A)await e.upsertFloor?.({buildingId:w.id,kind:j.kind,level:j.level,name:j.name});return A.length}const W={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。",granularity:"building"},project_config:{title:"项目配置",subtitle:"在同一视图内贯通管理项目、园区楼宇、楼层平面底图、功能区与竣工图纸。",granularity:"project"},devices:{title:"设备管理",subtitle:"围绕当前楼层完成设备标记、设备列表核查、参数下发、自检与设备分组。",granularity:"floor"},network_topo:{title:"网络拓扑",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、环境等异构子系统通道及传感器采集质量。",granularity:"project"}};function ae(h,w="layers"){return`
      <div class="dep-empty-card">
        <div class="dep-empty-icon">${fe(w,20)}</div>
        <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
        <span class="pacom-row-sub" style="max-width:440px;">按「创建项目 → 添加楼宇与楼层 → 上传平面底图」完成建档后，即可开展设备标记、网络同步与交付验收。</span>
        <div class="dep-empty-steps">
          <span>1. 创建项目</span>
          <span>→</span>
          <span>2. 添加楼宇与楼层</span>
          <span>→</span>
          <span>3. 上传平面图</span>
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${h?"":"disabled"}>+ 创建第一个项目</button>
      </div>`}function Se(){const h=(w,A,j,M=!1)=>`
      <button type="button" class="pacom-unified-item" aria-current="${u===w}" data-dep-nav="${w}">
        ${fe(A,16)}
        <span>${j}</span>
        ${M?'<span class="dep-rail-dot" title="有变更待同步至边缘网关"></span>':""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${h("overview","layout-dashboard","部署总览")}
          ${h("project_config","layers","项目配置")}
          ${h("devices","map-pin","设备管理")}
          ${h("network_topo","waypoints","网络拓扑",Le)}
          ${h("connections","plug","系统接入")}
        </div>
      </aside>
    `}function He(h){return V.projects.length===0?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${h?"":"disabled"}>+ 新建项目</button>`:u==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出清单</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${h?"":"disabled"}>+ 交付冻结</button>
      `:u==="project_config"?`<button type="button" class="pacom-btn" data-open-new-proj="1" ${h?"":"disabled"}>+ 新建项目</button>`:u==="devices"?`${`
        <div class="pacom-tabs" role="tablist" aria-label="设备管理视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${S==="marking"}" data-dev-subtab="marking">设备标记</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${S==="list"}" data-dev-subtab="list">设备列表</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${S==="groups"}" data-dev-subtab="groups">设备分组</button>
        </div>`}${S==="marking"?'<button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>':S==="list"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${h?"":"disabled"}>+ 新建分组</button>`}`:u==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${h?"":"disabled"}>${Le?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:`
      <button type="button" class="pacom-btn" data-edge-restart="service" ${h?"":"disabled"}>重启边缘服务</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${h?"":"disabled"}>+ 新增接入通道</button>
    `}function ze(h){if(V.projects.length===0)return ae(h,"layout-dashboard");const w=K?Pe(K):[],A=w.filter(i=>!!i.plan).length,j=w.flatMap(i=>Oe(i.id)),M=j.filter(i=>!!i.planPoint).length,E=j.filter(i=>i.connectivity==="online").length,t=j.filter(i=>i.physicalInstalled).length,l=w.filter(i=>Oe(i.id).length>0&&!Le).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${w.length>0&&A===w.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 项目与底图</span>
          <div class="pacom-kpi-value">${A}<span class="pacom-kpi-unit">/ ${w.length} 层</span></div>
          <span class="pacom-kpi-delta">${w.length>0&&A===w.length?"全部底图就绪":`尚缺 ${Math.max(0,w.length-A)} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="marking" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${j.length>0&&M===j.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${M}<span class="pacom-kpi-unit">/ ${j.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${ea.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${j.length>0&&E===j.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${E}<span class="pacom-kpi-unit">/ ${j.length} 台</span></div>
          <span class="pacom-kpi-delta">${j.length-E>0?`${j.length-E} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${Le?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${l}<span class="pacom-kpi-unit">/ ${w.length} 层</span></div>
          <span class="pacom-kpi-delta">${Le?"有变更待下发 →":`基线 v${We}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="list" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${j.length>0&&t===j.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${t}<span class="pacom-kpi-unit">/ ${j.length} 台</span></div>
          <span class="pacom-kpi-delta">${j.length>0&&t===j.length?"可交付冻结":`待复核 ${j.length-t} 台 →`}</span>
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
                ${w.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前楼宇暂无楼层</strong><span>请先在「项目配置」中生成楼层并上传底图。</span></div></td></tr>':w.map(i=>{const o=Oe(i.id),T=Ze().filter(Ie=>Ie.floorId===i.id),b=o.filter(Ie=>!!Ie.planPoint).length,X=o.filter(Ie=>Ie.connectivity==="online").length,Ae=o.filter(Ie=>Ie.physicalInstalled).length,je=!!i.plan,De=je&&o.length>0&&b===o.length&&Ae===o.length&&X===o.length&&!Le;return`
                            <tr>
                              <td><strong>${f(i.name)}</strong><div class="pacom-row-sub">${i.areaSqm?`${i.areaSqm} m²`:"待补面积"}</div></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-expand="1" data-matrix-floor="${f(i.id)}"><span class="pacom-dot ${je?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${je?`已传图 · ${T.length} 区`:"待传底图"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="marking" data-matrix-floor="${f(i.id)}"><span class="pacom-dot ${o.length>0&&b===o.length?"pacom-dot--online":o.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${o.length>0?`${b}/${o.length}`:"未标记"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${f(i.id)}"><span class="pacom-dot ${o.length>0&&X===o.length?"pacom-dot--online":o.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${o.length>0?`${X}/${o.length}`:"—"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${f(i.id)}"><span class="pacom-dot ${o.length===0?"pacom-dot--offline":Le?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${o.length===0?"—":Le?"待同步":`v${We}`}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="list" data-matrix-floor="${f(i.id)}"><span class="pacom-dot ${o.length>0&&Ae===o.length?"pacom-dot--online":o.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${o.length>0?`${Ae}/${o.length}`:"—"}</span></button></td>
                              <td style="text-align:right;"><span class="pacom-badge ${De?"pacom-badge--online":o.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${De?"可验收交付":o.length>0?"实施中":"待配置"}</span></td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${Xe?`<div class="pacom-banner ${Xe.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${Xe.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${Xe.passed}/${Xe.total} 台${Xe.failedNames.length?` · 异常：${Xe.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${_e.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${_e.map(i=>`
                    <tr>
                      <td><div style="font-weight:450;">${f(i.versionTag)}</div><div class="pacom-row-sub"><code>${f(i.id)}</code></div></td>
                      <td><strong>${i.verifiedCount}</strong> / ${i.deviceCount} 台</td>
                      <td><div>${f(i.frozenBy)}</div><div class="pacom-row-sub">${f(i.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${Jt[i.status]??i.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Me(h){if(V.projects.length===0)return ae(h,"layers");const w=V.projects.find(b=>b.id===Z)??V.projects[0],A=V.buildings.filter(b=>b.projectId===w.id),j=A.reduce((b,X)=>b+Pe(X.id).length,0),M=A.find(b=>b.id===K)??A[0]??null,E=M?Pe(M.id):[],t=E.filter(b=>!b.plan).length,l=E.filter(b=>Ze().filter(X=>X.floorId===b.id).length===0).length,i=E.filter(b=>xe==="missing_plan"?!b.plan:xe==="missing_zone"?Ze().filter(X=>X.floorId===b.id).length===0:!0),o=M?x(M):[],T=w.location?`${w.location.lng.toFixed(4)}, ${w.location.lat.toFixed(4)}`:"未设置坐标";return`
      <div class="dep-project-strip">
        <div class="dep-project-strip-main">
          <div class="dep-project-cover">
            <img src="${f(w.imageUrl??"./media/gzlab.jpg")}" alt="${f(w.name)}" />
          </div>
          <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">${f(w.name)}</strong>
              <span class="pacom-badge pacom-badge--neutral">${A.length} 栋楼宇</span>
              <span class="pacom-badge pacom-badge--neutral">${j} 个楼层</span>
            </div>
            <span class="pacom-row-sub">${f(w.city||"未填城市")}${w.address?` · ${f(w.address)}`:""} · 坐标 ${f(T)}</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-edit-proj="1" ${h?"":"disabled"}>编辑项目</button>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <div>
            <h2 class="pacom-section-title">园区楼宇（${A.length} 栋）</h2>
            <span class="pacom-row-sub">点击楼宇卡片切换下方楼层列表，点「编辑参数」修改外观与层数</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-bld="1" ${h?"":"disabled"}>+ 新建楼宇</button>
        </div>
        ${A.length===0?`
            <div class="dep-empty-card">
              <div class="dep-empty-icon">${fe("building-2",20)}</div>
              <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${f(w.name)} 暂无楼宇</strong>
              <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
              <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${h?"":"disabled"}>+ 添加第一栋楼宇</button>
            </div>`:`
            <div class="dep-building-grid">
              ${A.map(b=>{const X=Pe(b.id),Ae=X.filter(qe=>!!qe.plan).length,je=X.length>0?Math.round(Ae/X.length*100):0,De=x(b),Ie=M?.id===b.id,ge=X.length===0?"pacom-badge--neutral":Ae===X.length?"pacom-badge--online":"pacom-badge--warning";return`
                    <article class="dep-building-card ${Ie?"is-active":""}" data-select-building="${f(b.id)}">
                      <div class="dep-building-stage">
                        <img src="${f(b.imageUrl??"./media/building-e.webp")}" alt="${f(b.name)}" />
                      </div>
                      <div class="dep-building-body">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${f(b.name)}</strong>
                          <span class="pacom-badge ${ge}">${X.length===0?"未建层":`${Ae}/${X.length} 底图`}</span>
                        </div>
                        <div class="pacom-row-sub">地上 ${b.aboveFloors} 层${b.belowFloors>0?` · 地下 ${b.belowFloors} 层`:""}${b.hasRoof?" · RF":""}${b.areaSqm?` · ${b.areaSqm} m²`:""}</div>
                        <div class="pacom-progress-track">
                          <div class="pacom-progress-fill" style="width:${je}%; background:${je===100?"var(--pacom-status-online)":"var(--pacom-accent-solid)"};"></div>
                        </div>
                        ${De.length>0?`<div style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:12px; color:var(--pacom-text-secondary);">
                                 <span>尚缺 ${De.length} 个楼层</span>
                                 <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="height:22px; padding:0 6px; font-size:12px;" data-fill-missing-floors="${f(b.id)}" ${h?"":"disabled"}>一键补齐</button>
                               </div>`:""}
                      </div>
                      <div class="dep-building-foot">
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${f(b.id)}" ${h?"":"disabled"}>编辑参数</button>
                        <span class="pacom-row-sub" style="font-size:12px; color:${Ie?"var(--pacom-accent-fg)":"var(--pacom-text-secondary)"};">${Ie?"当前查看中":"点击切换楼层"}</span>
                      </div>
                    </article>`}).join("")}
              <button type="button" class="dep-building-add-card" data-open-new-bld="1" ${h?"":"disabled"}>
                ${fe("plus",20)}
                <span style="font-size:13px;">新建楼宇</span>
              </button>
            </div>`}
      </section>

      ${M?`
          <section class="pacom-section">
            <div class="pacom-section-head">
              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <h2 class="pacom-section-title">${f(M.name)} 楼层与底图（${E.length}）</h2>
                <div class="pacom-count-pills">
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${xe==="all"}" data-floor-list-filter="all">全部 <span class="pacom-count-num">${E.length}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${xe==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 <span class="pacom-count-num">${t}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${xe==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 <span class="pacom-count-num">${l}</span></button>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                ${o.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${f(M.id)}" ${h?"":"disabled"}>一键补齐 ${o.length} 层</button>`:""}
                <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-floor="1" ${h?"":"disabled"}>+ 新增楼层</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-batch-modal="1" ${h?"":"disabled"}>批量导入底图</button>
              </div>
            </div>

            ${E.length===0?`
                <div class="dep-empty-card">
                  <div class="dep-empty-icon">${fe("layers",20)}</div>
                  <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${f(M.name)} 暂无楼层</strong>
                  <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${f(M.id)}" ${h?"":"disabled"}>一键生成全部楼层</button>
                    <button type="button" class="pacom-btn" data-open-new-floor="1" ${h?"":"disabled"}>+ 手动新增楼层</button>
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
                        ${i.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':i.map(b=>{const X=Ze().filter(ge=>ge.floorId===b.id),Ae=[...mt,...ee].filter(ge=>ge.floorId===b.id),je=Oe(b.id),De=re===b.id,Ie=E.filter(ge=>ge.id!==b.id);return`
                                    <tr>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:7px;">
                                          <span class="pacom-dot ${b.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                          <strong>${f(b.name)}</strong>
                                        </div>
                                      </td>
                                      <td><span class="pacom-row-sub">${b.areaSqm?`${b.areaSqm} m²`:"—"}</span></td>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:8px;">
                                          ${b.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${f(M.name)} ${f(b.name)} 平面底图" data-lb-src="${f(b.plan.imageUrl)}" title="查看大图"><img src="${f(b.plan.imageUrl)}" alt="${f(b.name)}" /></button>
                                                 <span class="pacom-badge pacom-badge--online">已就绪</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                          <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="cursor:pointer; height:24px; padding:0 6px; font-size:12px;">
                                            <span>${b.plan?"替换":"上传"}</span>
                                            <input type="file" name="floorPlan_${f(b.id)}" accept="image/*" data-upload-floor="${f(b.id)}" style="display:none;" ${h?"":"disabled"} />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        ${X.length>0?`<span>${X.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${f(X.slice(0,2).map(ge=>ge.name.replace(/^7F\s*/,"")).join("、"))}${X.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                                      </td>
                                      <td><span class="pacom-row-sub">${Ae.length} 份</span></td>
                                      <td>
                                        <div style="display:flex; justify-content:flex-end; gap:6px;">
                                          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-expand-floor="${f(b.id)}">${De?"收起配置":"展开配置"}</button>
                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${f(b.id)}">设备标记 →</button>
                                        </div>
                                      </td>
                                    </tr>
                                    ${De?`
                                        <tr class="pacom-table-detail-row">
                                          <td colspan="6">
                                            <div class="dep-floor-expand-grid">
                                              <div class="dep-floor-expand-col">
                                                <div class="dep-plan-preview-box" style="min-height:260px;" data-single-floor-drop="${f(b.id)}">
                                                  <div class="dep-plan-toolbar">
                                                    ${b.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${f(M.name)} ${f(b.name)} 平面底图" data-lb-src="${f(b.plan.imageUrl)}">查看大图</button>`:""}
                                                    <label class="dep-plan-tool-btn" style="cursor:pointer;">
                                                      <span>${b.plan?"替换底图":"上传底图"}</span>
                                                      <input type="file" name="floorPlanDrop_${f(b.id)}" accept="image/*" data-upload-floor="${f(b.id)}" style="display:none;" ${h?"":"disabled"} />
                                                    </label>
                                                    ${b.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${f(b.id)}" ${h?"":"disabled"}>清空</button>`:""}
                                                  </div>
                                                  ${b.plan?`<img src="${f(b.plan.imageUrl)}" alt="${f(b.name)} 平面图" style="width:100%; max-height:290px; object-fit:contain; display:block;" />`:`<div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:24px; text-align:center;">
                                                           <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${f(b.name)} 2D 平面图到此处</strong>
                                                           <span class="pacom-row-sub">支持透明 WebP / PNG / JPG</span>
                                                         </div>`}
                                                </div>
                                              </div>

                                              <div class="dep-floor-expand-col">
                                                <div class="pacom-settings-card" style="padding:10px 16px;">
                                                  <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                                                    <form data-save-floor="${f(b.id)}" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                                                      <input class="pacom-input" name="fName" value="${f(b.name)}" aria-label="楼层名称" style="width:76px; height:32px; flex:none;" required ${h?"":"disabled"} />
                                                      <input class="pacom-input" name="fArea" type="number" step="0.1" value="${f(b.areaSqm??"")}" placeholder="面积 m²" aria-label="建筑面积" style="width:110px; height:32px; flex:none;" ${h?"":"disabled"} />
                                                      <button type="submit" class="pacom-btn" ${h?"":"disabled"}>保存</button>
                                                    </form>
                                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-delete-floor="${f(b.id)}" ${!h||je.length>0?`disabled title="${je.length>0?`已关联 ${je.length} 台设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                                                  </div>
                                                </div>

                                                <div class="pacom-settings-card" style="padding:4px 16px;">
                                                  <div class="pacom-setting-row" style="padding:10px 0; justify-content:space-between; gap:8px;">
                                                    <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${he==="zones"}" data-floor-detail-tab="zones">功能区（${X.length}）</button>
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${he==="docs"}" data-floor-detail-tab="docs">竣工图纸与手册（${Ae.length}）</button>
                                                    </div>
                                                    ${he==="zones"?X.length>0&&Ie.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-open-copy-zones="${f(b.id)}" ${h?"":"disabled"}>复用至其他层…</button>`:"":`<label class="pacom-btn pacom-btn--sm" style="cursor:pointer;"><span>+ 关联文件</span><input type="file" name="attachDoc_${f(b.id)}" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${f(b.id)}" style="display:none;" ${h?"":"disabled"} /></label>`}
                                                  </div>
                                                  ${he==="zones"?`
                                                        ${X.length===0?`
                                                            <div class="pacom-setting-row" style="padding:10px 0; flex-direction:column; align-items:flex-start; gap:8px;">
                                                              <span class="pacom-row-sub">暂未划分功能区，可一键套用常用模板：</span>
                                                              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                                                ${gt.map(ge=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${f(ge.key)}" data-tpl-floor="${f(b.id)}" ${h?"":"disabled"}>+ ${f(ge.label)}</button>`).join("")}
                                                              </div>
                                                            </div>`:X.map(ge=>c===ge.id?`
                                                                      <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-save-edit-zone="${f(ge.id)}" data-zone-floor="${f(b.id)}">
                                                                        <input class="pacom-input" name="zName" value="${f(ge.name)}" style="width:180px; height:30px; flex:none;" required />
                                                                        <select class="pacom-select" name="zCat" style="width:110px; height:30px;">
                                                                          ${Object.keys(Ja).map(qe=>`<option value="${qe}" ${ge.category===qe?"selected":""}>${Ja[qe]}</option>`).join("")}
                                                                        </select>
                                                                        <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                                                      </form>`:`
                                                                      <div class="pacom-setting-row" style="padding:9px 0;">
                                                                        <div class="pacom-setting-meta" style="min-width:140px;">
                                                                          <span class="pacom-setting-title">${f(ge.name)} <span class="pacom-badge pacom-badge--neutral">${f(Ja[ge.category]??ge.category)}</span></span>
                                                                        </div>
                                                                        <div class="pacom-setting-control">
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${f(ge.id)}" ${h?"":"disabled"}>编辑</button>
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${f(ge.id)}" ${h?"":"disabled"}>删除</button>
                                                                        </div>
                                                                      </div>`).join("")}
                                                        <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-add-zone="${f(b.id)}">
                                                          <input class="pacom-input" name="zoneName" placeholder="新功能区名称（如：${f(b.name)} 东侧实验区）" style="width:210px; height:32px; flex:none;" required ${h?"":"disabled"} />
                                                          <select class="pacom-select" name="zoneCat" style="width:112px; height:32px;" ${h?"":"disabled"}>
                                                            <option value="lab">实验区</option>
                                                            <option value="office">办公区</option>
                                                            <option value="meeting">会议室</option>
                                                            <option value="corridor">走廊/公区</option>
                                                            <option value="utility">机房/后勤</option>
                                                            <option value="outdoor">露台/活动区</option>
                                                          </select>
                                                          <button type="submit" class="pacom-btn" ${h?"":"disabled"}>+ 添加</button>
                                                        </form>`:Ae.length===0?'<div class="pacom-setting-row" style="padding:12px 0;"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':Ae.map(ge=>`
                                                              <div class="pacom-setting-row" style="padding:9px 0;">
                                                                <div class="pacom-setting-meta" style="min-width:140px;">
                                                                  <span class="pacom-setting-title">${f(ge.name)}</span>
                                                                  <span class="pacom-row-sub">${f(ge.category)} · ${f(ge.size)} · ${f(ge.updatedAt)}</span>
                                                                </div>
                                                                <div class="pacom-setting-control">
                                                                  <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${f(ge.id)}">查阅</button>
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
    `}function Ke(h){if(!Y||u!=="devices"||S==="groups")return"";const A=Oe(G).find(t=>t.id===v)??null;if(!A)return"";const j=Be.get(A.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${G.slice(-4)}`},M=ea.filter(t=>t.deviceId===A.id),E=Ca.get(A.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450};return`
      <aside class="pacom-drawer" style="width:376px;" aria-label="设备配置抽屉">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${f(A.name)}</h2>
            <div class="pacom-row-sub">${f(aa(A.logicalZoneId))} · v${A.version}</div>
          </div>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${fe("x",16)}</button>
        </div>

        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${h?"":"disabled"}>${Q?"点击图纸定位中…":"点图更新坐标"}</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${f(A.id)}">Ping 闪灯 5s</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${q==="binding"}" data-drawer-tab="binding">绑定与安装</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${q==="params"}" data-drawer-tab="params">自治参数</button>
        </div>

        ${q==="binding"?`
            ${A.category==="lighting"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">回路可视化灯点（${M.length}）</span>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${f(A.id)}" ${h?"":"disabled"}>+ 添加灯点</button>
                  </div>
                  ${M.map(t=>`
                      <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                        <span><strong>${f(t.channel)}</strong> · ${f(t.label)}</span>
                        <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:12px;" data-del-light-marker="${f(t.id)}" ${h?"":"disabled"}>删除</button>
                      </div>`).join("")}
                </div>`:""}

            ${A.category!=="hvac"&&A.category!=="meter"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                    <code style="font-size:12px;">${f(j.meshUuid)}</code>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Proxy 代理（建议每层 2–3 个）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${j.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${f(A.id)}" ${h?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${j.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${f(A.id)}" ${h?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                </div>`:""}

            <form data-role="binding-form" class="pacom-control-box" style="gap:10px;">
              <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">通信协议</span>
                  <select class="pacom-select" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(t=>`<option value="${t}" ${A.hardwareBinding?.protocol===t?"selected":""}>${t.toUpperCase()}</option>`).join("")}
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">网络地址 / 主题</span>
                  <input class="pacom-input" name="networkAddress" placeholder="地址或主题" value="${f(A.hardwareBinding?.networkAddress??"")}" />
                </label>
              </div>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:10px;">
                <label class="dep-field" style="flex:1;">
                  <span class="dep-field-label">端口 / 回路</span>
                  <input class="pacom-input" name="portOrChannel" placeholder="端口或回路" value="${f(A.hardwareBinding?.portOrChannel??"")}" />
                </label>
                <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; height:32px; flex-shrink:0;">
                  <span>物理已复核</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${D}" data-toggle-phys="1" ${h?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                </span>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${h?"":"disabled"}>保存绑定与复核（v${A.version}）</button>
            </form>`:`
            <form data-save-dev-params="${f(A.id)}" class="pacom-control-box" style="gap:10px;">
              <div>
                <div style="font-size:14px; font-weight:450;">人感与光感自治参数</div>
                <div class="pacom-row-sub">自动关灯延时、恢复自动延时与光照度门限</div>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${E.offDelayMin}" ${h?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" value="${E.restoreMin}" ${h?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" value="${E.luxOn}" ${h?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" value="${E.luxOff}" ${h?"":"disabled"} /></label>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${h?"":"disabled"}>下发设备参数</button>
            </form>`}
      </aside>
    `}function Ge(h){if(V.projects.length===0)return`
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${ae(h,"map-pin")}</div>
        </main>`;const w=K?Pe(K):[],A=w.find(i=>i.id===G)??w[0],j=Oe(G),M=Ze().filter(i=>i.floorId===G),E=Y?j.find(i=>i.id===v)??null:null,t=se.trim().toLowerCase(),l=j.filter(i=>!(ce==="unverified"&&i.physicalInstalled||ce==="unplaced"&&i.planPoint||t&&!`${i.name} ${aa(i.logicalZoneId)}`.toLowerCase().includes(t)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${fe("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${f(se)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${te?"is-active":""}" data-toggle-hud-pool="1">设备池 ${j.length}</button>
            <button type="button" class="pacom-hud-pill" data-open-new-dev="1" ${h?"":"disabled"}>+ 新增设备</button>
          </div>

          ${te?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${f(A?.name??"7F")} 设备池（${l.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${fe("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-count-pills">
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ce==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${j.length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ce==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${j.filter(i=>!i.physicalInstalled).length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ce==="unplaced"}" data-dev-filter="unplaced">未标记 <span class="pacom-count-num">${j.filter(i=>!i.planPoint).length}</span></button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${l.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':l.map(i=>`
                            <div class="pacom-row ${i.id===v&&Y?"is-selected":""}" data-pick-dev="${f(i.id)}" style="padding:8px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${f(i.name)}</div>
                                <div class="pacom-row-sub">${f(aa(i.logicalZoneId))} · ${i.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${i.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${i.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${Q?"crosshair":"grab"};">
          ${A?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${ne}px, ${oe}px) scale(${de});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${f(A.plan.imageUrl)}" alt="${f(A.name)} 平面图" />
                  ${me==="zone"?M.map(i=>{const o=pe[i.id];return o?`<div class="pacom-zone-hotspot is-active" style="left:${o.left}%; top:${o.top}%; width:${o.width}%; height:${o.height}%;"><span class="pacom-zone-tag">${f(i.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${j.filter(i=>i.planPoint).map(i=>`
                      <button type="button" class="pacom-pin ${i.id===v&&Y?"is-selected":""} ${i.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(i.planPoint.x*100).toFixed(2)}%; top:${(i.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${f(i.id)}" title="${f(i.name)}">
                        <span class="pacom-dot ${i.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${f(Xt(i))}</span>
                      </button>`).join("")}
                  ${me==="light_marker"||E?.category==="lighting"?ea.filter(i=>j.some(o=>o.id===i.deviceId)).map(i=>`
                            <span class="dep-light-dot" style="left:${(i.x*100).toFixed(1)}%; top:${(i.y*100).toFixed(1)}%;" title="${f(i.label)}（${f(i.channel)}）">
                              ${fe("sparkles",12)}<span>${f(i.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${f(G)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${w.map(i=>`
              <button type="button" class="pacom-elev-item ${i.id===G?"is-active":""}" data-scrubber-floor="${f(i.id)}" title="${f(i.name)}${i.plan?" · 已传底图":" · 待传底图"}">
                ${i.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${f(i.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${me==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${me==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${me==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${fe("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(de*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${fe("plus",16)}</button>
        </div>
      </main>
    `}function la(h){if(V.projects.length===0)return ae(h,"list");const w=Oe(G),A=R.trim().toLowerCase(),j=w.filter(E=>!(C==="online"&&E.connectivity!=="online"||C==="offline"&&E.connectivity!=="offline"||C==="unverified"&&E.physicalInstalled||A&&!`${E.name} ${aa(E.logicalZoneId)} ${E.hardwareBinding?.protocol??""}`.toLowerCase().includes(A))),M=w.filter(E=>E.connectivity==="online").length;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${f(R)}" aria-label="搜索设备列表" />
          <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
            <option value="all" ${C==="all"?"selected":""}>全部状态（${w.length}）</option>
            <option value="online" ${C==="online"?"selected":""}>仅看在线（${M}）</option>
            <option value="offline" ${C==="offline"?"selected":""}>仅看离线（${w.length-M}）</option>
            <option value="unverified" ${C==="unverified"?"selected":""}>待物理复核（${w.filter(E=>!E.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${fe("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-dev="1" ${h?"":"disabled"}>+ 新增设备</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-export-inv="1">导出 CSV</button>
        </div>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${j.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词、切换筛选，或点击「+ 新增设备」。</span></div></td></tr>':j.map(E=>`
                        <tr style="cursor:pointer;" data-open-dev-drawer="${f(E.id)}">
                          <td><div style="font-weight:450;">${f(E.name)}</div><div class="pacom-row-sub">${f(aa(E.logicalZoneId))} · v${E.version}</div></td>
                          <td><span class="pacom-badge ${E.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${E.planPoint?`${Math.round(E.planPoint.x*100)}%,${Math.round(E.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${E.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${E.hardwareBinding?E.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${E.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${E.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${E.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${E.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${f(E.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-dev-params="${f(E.id)}">配置</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${f(E.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${j.length} / ${w.length} 台设备 · ${M} 在线 · ${w.length-M} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dev-subtab="marking">切换至设备标记 →</button>
        </div>
      </div>
    `}function ta(h){if(V.projects.length===0)return ae(h,"folder-kanban");const w=pa.filter(M=>M.floorId===G||G===$.floorId&&M.floorId===$.floorId),A=w.filter(M=>M.track==="mesh_auto"),j=w.filter(M=>M.track==="cloud_biz");return`
      <div class="pacom-grid-2">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${A.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${A.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':A.map(M=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${f(M.name)} <span class="pacom-badge pacom-badge--neutral">${f(M.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${M.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${f(M.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${j.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${j.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':j.map(M=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${f(M.name)} <span class="pacom-badge pacom-badge--neutral">${f(M.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${M.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${f(M.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>
      </div>
    `}function Ue(h){if(V.projects.length===0)return ae(h,"waypoints");const w=Oe(G),A=Ze().filter(o=>o.floorId===G),j=w.filter(o=>o.category!=="hvac"&&o.category!=="meter"),M=j.filter(o=>Be.get(o.id)?.proxy).length,E=j.filter(o=>Be.get(o.id)?.relay).length,t=w.filter(o=>o.category==="gateway"),l=w.filter(o=>Be.get(o.id)?.relay||Be.get(o.id)?.proxy),i=w.filter(o=>o.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge ${Le?"pacom-badge--warning":"pacom-badge--online"}">${Le?"有变更待同步":"协同锁空闲 · 已同步"}</span>
            <span class="pacom-row-sub">Mesh 节点 ${j.length} 台 · Proxy ${M} 个 · Relay ${E} 个 · 边缘基线 v${We}</span>
          </div>
        </div>
        ${Ne.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${Ne.map(o=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${f(o.title)}</strong> <span class="pacom-row-sub">· ${f(o.detail)}</span></div>
                      <span class="pacom-badge ${o.level==="ok"?"pacom-badge--online":o.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${o.level==="ok"?"通过":o.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达设备标记）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${le==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${le==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${le==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${t.length===0?'<div class="pacom-row-sub">本层暂未配置网关节点。</div>':t.map(o=>`
                          <button type="button" class="dep-topo-node ${o.connectivity==="offline"?"is-issue":""}" data-topo-jump="${f(o.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${f(o.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                            <span class="pacom-row-sub">${f(o.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                          </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${l.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，可在「设备管理」抽屉中为传感器开启。</div>':l.map(o=>{const T=Be.get(o.id);return`
                            <button type="button" class="dep-topo-node ${o.connectivity==="offline"?"is-issue":""}" data-topo-jump="${f(o.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${f(o.name)}</strong><span class="pacom-badge pacom-badge--accent">${T?.proxy?"Proxy":""}${T?.proxy&&T?.relay?" + ":""}${T?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${f(aa(o.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${i.length===0?'<div class="pacom-row-sub">本层暂无末端设备。</div>':i.map(o=>`
                          <button type="button" class="dep-topo-node ${o.connectivity==="offline"?"is-issue":""}" data-topo-jump="${f(o.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${f(o.name)}</strong><span class="pacom-badge ${o.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${o.connectivity==="online"?"在线":"离线"}</span></div>
                            <span class="pacom-row-sub">${f(aa(o.logicalZoneId))} · ${f(o.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                          </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${w.filter(o=>o.category==="sensor"||o.category==="gateway").map(o=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${f(o.id)}">
                      <strong>${f(o.name)}</strong>
                      <span class="pacom-row-sub">${o.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${w.filter(o=>o.category==="lighting"||o.category==="hvac").map(o=>`
                    <button type="button" class="dep-topo-node ${o.connectivity==="offline"?"is-issue":""}" data-topo-jump="${f(o.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${f(o.name)}</strong><span class="pacom-badge ${o.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${o.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${f(aa(o.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${A.map(o=>{const T=w.filter(X=>X.logicalZoneId===o.id),b=T.some(X=>X.connectivity==="offline");return`
                      <div class="dep-topo-node ${b?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${f(o.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${b?"pacom-badge--warning":"pacom-badge--online"}">${T.length} 台设备</span></div>
                        <span class="pacom-row-sub">${b?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function Ye(h){if(V.projects.length===0)return ae(h,"plug");const w=ie.reduce((E,t)=>E+t.collectedPoints,0),A=ie.reduce((E,t)=>E+t.calculatedPoints,0),j=ie.filter(E=>E.status==="connected").length,M=ie.filter(E=>E.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${j}<span class="pacom-kpi-unit">/ ${ie.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${ie.length?Math.round(j/ie.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${w}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${A}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${M.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${M.length} 条采集通道通信降级（${M.map(E=>E.name).join("、")}）</span>
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
                ${ie.map(E=>{const t=Yt[E.status]??{label:E.status,cls:"pacom-badge--neutral"},l=E.status==="connected"?98:E.status==="degraded"?62:0,i=l>=75?"var(--pacom-status-online)":l>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",o=Fe===E.id,T=o?es(E,ve):[];return`
                      <tr>
                        <td><strong>${f(E.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${E.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${f(E.endpoint)}</code></td>
                        <td>采集 ${E.collectedPoints} / 计算 ${E.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${t.cls}">${t.label}</span>
                            <span class="pacom-row-sub">${l}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${l}%; background:${i};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${f(E.id)}">${o?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${f(E.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${f(E.id)}" data-endpoint-val="${f(E.endpoint)}">${ye===E.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${o?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${f(E.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${T.map(b=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${f(b.deviceName)}</strong> · ${f(b.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${f(b.value)} · ${f(b.lastSeen)}</span>
                                        <span class="pacom-badge ${b.quality==="online"?"pacom-badge--online":b.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${b.quality==="online"?"在线正常":b.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function na(h){const w=[],A=V.projects.find(E=>E.id===Z)??V.projects[0]??null,j=V.buildings.find(E=>E.id===K)??(A?V.buildings.find(E=>E.projectId===A.id):null)??null;if(k&&w.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
          <form class="dep-modal-card" data-create-project="1">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建项目</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${fe("x",16)}</button>
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
        </div>`),B&&A){const t=V.buildings.filter(l=>l.projectId===A.id).reduce((l,i)=>l+Pe(i.id).reduce((o,T)=>o+Oe(T.id).length,0),0);w.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
          <form class="dep-modal-card" data-save-project="${f(A.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑项目：${f(A.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${fe("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${f(A.imageUrl??"./media/gzlab.jpg")}" alt="${f(A.name)}" style="width:84px; height:54px; object-fit:cover; border-radius:6px; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">项目封面图</div>
                  <div class="pacom-row-sub">用于空间总览的园区俯瞰展示</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>更换封面</span>
                  <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${f(A.id)}" style="display:none;" ${h?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${f(A.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${f(A.city??"")}" /></label>
                <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${f(A.address??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${f(A.location?.lng??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${f(A.location?.lat??"")}" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${f(A.id)}" ${!h||t>0?`disabled title="${t>0?`包含 ${t} 台运行中设备，请先解绑后再删除`:"只读"}"`:""}>删除项目</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${h?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}$e&&A&&w.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
          <form class="dep-modal-card" data-create-bld="${f(A.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建楼宇（${f(A.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${fe("x",16)}</button>
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
        </div>`);const M=L?V.buildings.find(E=>E.id===L)??null:null;if(M){const E=Pe(M.id),t=E.reduce((i,o)=>i+Oe(o.id).length,0),l=x(M);w.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
          <form class="dep-modal-card" data-save-building="${f(M.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑楼宇：${f(M.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${fe("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${f(M.imageUrl??"./media/building-e.webp")}" alt="${f(M.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:6px; background:#fff; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">楼宇外观 / 白模图</div>
                  <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>替换图片</span>
                  <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${f(M.id)}" style="display:none;" ${h?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${f(M.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${f(M.areaSqm??"")}" placeholder="选填" /></label>
                <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${M.aboveFloors}" /></label>
                <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${M.belowFloors}" /></label>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                <label style="display:inline-flex; align-items:center; gap:6px; font-size:13px;"><input type="checkbox" name="bRoof" ${M.hasRoof?"checked":""} />含屋面层 (RF)</label>
                ${l.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${f(M.id)}">一键补齐缺失 ${l.length} 层</button>`:`<span class="pacom-row-sub">已配置 ${E.length} 个楼层</span>`}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${f(M.id)}" ${!h||t>0?`disabled title="${t>0?"包含运行中设备，请先解绑后再删除":"只读"}"`:""}>删除楼宇</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${h?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}if(g&&j&&w.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
          <form class="dep-modal-card" data-create-floor="${f(j.id)}" style="width:min(420px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增楼层（${f(j.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${fe("x",16)}</button>
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
        </div>`),m&&j){const E=Pe(j.id),t=we.filter(l=>!!l.matchedFloorId).length;w.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
          <div class="dep-modal-card dep-modal-card--wide">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">批量导入 ${f(j.name)} 平面底图</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${fe("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-upload-drop" data-batch-dropzone="${f(j.id)}" style="padding:20px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${ke?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
                <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
                <span class="pacom-row-sub">自动识别 01F、首层、屋面、RF、B1 等中英文文件名，支持手动调整对应楼层</span>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; margin-top:4px;">
                  <span>选择多张图片</span>
                  <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${f(j.id)}" style="display:none;" ${h?"":"disabled"} />
                </label>
              </div>
              ${we.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                      <div class="pacom-row-sub">已选 ${we.length} 张图片，已匹配 ${t} 层：</div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:6px; max-height:220px; overflow-y:auto;">
                        ${we.map(l=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${f(l.file.name)}">${f(l.file.name)}</span>
                              <select class="pacom-select" name="overrideFloor_${f(l.id)}" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${f(l.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${E.map(i=>`<option value="${f(i.id)}" ${l.matchedFloorId===i.id?"selected":""}>${f(i.name)}</option>`).join("")}
                              </select>
                            </div>`).join("")}
                      </div>
                    </div>`:""}
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-batch-upload="1" ${we.length===0?"disabled":""}>清空已选</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">关闭</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-batch-upload="1" ${t===0?"disabled":""}>确认导入（${t} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(z&&j){const E=Ve().find(l=>l.id===z),t=Pe(j.id).filter(l=>l.id!==z);E&&t.length>0&&w.push(`
          <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
            <div class="dep-modal-card">
              <div class="dep-modal-head">
                <strong style="font-size:15px; font-weight:500;">复用 ${f(E.name)} 功能区至其他楼层</strong>
                <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${fe("x",16)}</button>
              </div>
              <div class="dep-modal-body">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <span class="pacom-row-sub">勾选目标楼层（已选 ${ue.size} 层）</span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                  </div>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${t.map(l=>{const i=ue.has(l.id),o=Ze().filter(T=>T.floorId===l.id).length;return`
                        <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${i}">
                          <input type="checkbox" name="copyFloor_${f(l.id)}" data-copy-target-floor="${f(l.id)}" ${i?"checked":""} style="margin:0;" />
                          <span>${f(l.name)}${o>0?` (${o}区)`:""}</span>
                        </label>`}).join("")}
                </div>
              </div>
              <div class="dep-modal-foot">
                <span></span>
                <div style="display:flex; gap:8px;">
                  <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                  <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${f(E.id)}" ${ue.size===0?"disabled":""}>确认复制（${ue.size} 层）</button>
                </div>
              </div>
            </div>
          </div>`)}if(y){const E=Ze().filter(t=>t.floorId===G);w.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
          <form class="dep-modal-card" data-create-dev="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增设备</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${fe("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">设备名称</span>
                <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">设备类型</span>
                  <select class="pacom-select" name="devPreset">${Qa.map(t=>`<option value="${t.key}">${t.label}</option>`).join("")}</select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">所属功能区</span>
                  <select class="pacom-select" name="devZone">
                    <option value="">暂不分配</option>
                    ${E.map(t=>`<option value="${f(t.id)}">${f(t.name)}</option>`).join("")}
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
        </div>`)}return d&&w.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建分组">
          <form class="dep-modal-card" data-create-group="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建设备分组</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${fe("x",16)}</button>
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
        </div>`),I&&w.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增接入通道">
          <form class="dep-modal-card" data-create-conn="1" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增子系统接入通道</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${fe("x",16)}</button>
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
        </div>`),w.join("")}function _(){const h=s.scope.canEditDeployment,w=s.scope.activeOverrides.find(l=>l.module==="deployment"&&l.status==="active"),A=w?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 · ${w.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${f(w.approvedBy)} · 到期自动收回：${f(w.expiresAt.slice(0,16).replace("T"," "))} · 事由：${f(w.reason)}</span>
          </div>
        </div>`:"",j=u==="devices"&&S==="marking",M=W[u],E=u==="devices"?S==="marking"?"设备标记":S==="list"?"设备列表":"设备分组":M.title,t=u==="devices"?S==="marking"?"在 2D 平面底图上完成设备坐标标记、回路灯点布置与硬件绑定。":S==="list"?"核查本层四态设备清单，点击任意行配置硬件绑定、人感/光感参数或执行自检。":"管理端侧蓝牙 Mesh 自治联动组与云端业务分组。":M.subtitle;a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Ra({tree:V,session:s,scope:P,maxGranularity:M.granularity,isOpen:F,searchKeyword:J})}
            </div>
            <div class="pacom-header-meta">
              ${h?w?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${Se()}
          ${j?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${E}</h2>
                      <p class="pacom-unified-subtitle">${t}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${He(h)}
                    </div>
                  </div>
                  ${A}
                  ${H?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${f(H)}</span></div>`:""}
                  ${U?`<div class="pacom-alert-banner">${f(U)}</div>`:""}
                  ${Ge(h)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head pacom-unified-head--split">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${E}</h2>
                      <p class="pacom-unified-subtitle">${t}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${He(h)}
                    </div>
                  </div>
                  ${A}
                  ${H?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${f(H)}</span></div>`:""}
                  ${U?`<div class="pacom-alert-banner">${f(U)}</div>`:""}
                  ${u==="overview"?ze(h):u==="project_config"?Me(h):u==="devices"?S==="list"?la(h):ta(h):u==="network_topo"?Ue(h):Ye(h)}
                </div>
              </div>`}
          ${Ke(h)}
        </div>
      </div>
      ${na(h)}
      ${Ee?`
          <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${f(Ee.title)}">
            <div class="dep-lightbox-card">
              <div class="dep-lightbox-head">
                <strong style="font-size:14px; font-weight:500;">${f(Ee.title)}</strong>
                <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${fe("x",16)}</button>
              </div>
              <div class="dep-lightbox-body">
                <img src="${f(Ee.imageUrl)}" alt="${f(Ee.title)}" />
              </div>
            </div>
          </div>`:""}
    `,Va()}function Va(){Pa(a,{onToggle:()=>{F=!F,_(),F&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:t=>{J=t,_();const l=a.querySelector("[data-global-space-search]");l&&(l.focus(),l.setSelectionRange(t.length,t.length))},onPick:t=>{if(P=t,F=!1,t.level==="project"){Z=t.projectId;const l=V.buildings.find(i=>i.projectId===t.projectId);l?xa(l.id):(K="",G="",re=null)}else t.level==="building"?xa(t.buildingId):t.level==="floor"&&ua(t.floorId);_()}}),a.querySelectorAll("[data-dep-nav]").forEach(t=>{t.addEventListener("click",()=>{u=t.dataset.depNav??"overview",t.dataset.devSubtabJump&&(S=t.dataset.devSubtabJump),Y=!1,Q=!1,H="",U="",_()})}),a.querySelectorAll("[data-dev-subtab]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.devSubtab??"marking";S=l,l==="groups"&&(Y=!1,Q=!1),H="",U="",_()})}),a.querySelectorAll("[data-drawer-tab]").forEach(t=>{t.addEventListener("click",()=>{q=t.dataset.drawerTab??"binding",_()})}),a.querySelector("[data-list-search]")?.addEventListener("input",t=>{R=t.currentTarget.value,_();const l=a.querySelector("[data-list-search]");l&&(l.focus(),l.setSelectionRange(R.length,R.length))}),a.querySelector("[data-list-filter]")?.addEventListener("change",t=>{C=t.currentTarget.value??"all",_()}),a.querySelectorAll("[data-refresh-dep]").forEach(t=>{t.addEventListener("click",()=>{Te()})}),a.querySelectorAll("[data-matrix-nav]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.matrixFloor;l&&ua(l),u=t.dataset.matrixNav??"devices",t.dataset.matrixSub&&(S=t.dataset.matrixSub),t.dataset.matrixExpand==="1"&&l&&(re=l),_()})}),a.querySelectorAll("[data-scrubber-floor]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.scrubberFloor;l&&(ua(l),_())})}),a.querySelectorAll("[data-close-modals]").forEach(t=>{t.addEventListener("click",()=>{Ce(),_()})}),a.querySelectorAll("[data-modal-scrim]").forEach(t=>{t.addEventListener("click",l=>{l.target===t&&(Ce(),_())})}),a.querySelectorAll("[data-open-new-proj]").forEach(t=>{t.addEventListener("click",()=>{Ce(),k=!0,_()})}),a.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{Ce(),B=!0,_()}),a.querySelectorAll("[data-open-new-bld]").forEach(t=>{t.addEventListener("click",()=>{Ce(),$e=!0,_()})}),a.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{Ce(),g=!0,_()}),a.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{Ce(),m=!0,_()}),a.querySelectorAll("[data-open-new-dev]").forEach(t=>{t.addEventListener("click",()=>{Ce(),y=!0,_()})}),a.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{Ce(),d=!0,_()}),a.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{Ce(),I=!0,_()}),a.querySelectorAll("[data-select-building]").forEach(t=>{t.addEventListener("click",l=>{if(l.target?.closest("button, label, input"))return;const i=t.dataset.selectBuilding;i&&i!==K&&(xa(i),xe="all",re=null,_())})}),a.querySelectorAll("[data-edit-building]").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation(),Ce(),L=t.dataset.editBuilding??null,_()})}),a.querySelectorAll("[data-toggle-expand-floor]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.toggleExpandFloor??null;re=re===l?null:l,re&&ua(re),c=null,_()})}),a.querySelectorAll("[data-jump-floor-marking]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.jumpFloorMarking;l&&ua(l),u="devices",S="marking",_()})}),a.querySelector("[data-jump-floor-config]")?.addEventListener("click",t=>{const l=t.currentTarget.dataset.jumpFloorConfig;u="project_config",l&&(re=l),_()}),a.querySelectorAll("[data-floor-detail-tab]").forEach(t=>{t.addEventListener("click",()=>{he=t.dataset.floorDetailTab??"zones",_()})}),a.querySelectorAll("[data-floor-list-filter]").forEach(t=>{t.addEventListener("click",()=>{xe=t.dataset.floorListFilter??"all",_()})}),a.querySelector("[data-create-project]")?.addEventListener("submit",async t=>{t.preventDefault();const l=new FormData(t.currentTarget),i=String(l.get("pName")??"").trim(),o=String(l.get("pCity")??"").trim(),T=String(l.get("pAddr")??"").trim(),b=String(l.get("pLng")??"").trim(),X=String(l.get("pLat")??"").trim();if(!i)return;let Ae;if(b||X){const je=Number(b),De=Number(X);if(!Number.isFinite(je)||!Number.isFinite(De)||je<-180||je>180||De<-90||De>90){U="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",_();return}Ae={lng:je,lat:De,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const je=await e.createProject?.({name:i,city:o,address:T,location:Ae});Ce(),u="project_config",je&&(Z=je.id,K="",G="",re=null,P=ba({level:"project",projectId:je.id})),H=`已创建项目「${i}」，下一步可添加园区楼宇。`,await Te()}catch(je){U=je instanceof Error?je.message:String(je),_()}}),a.querySelector("[data-save-project]")?.addEventListener("submit",async t=>{t.preventDefault();const l=t.currentTarget,i=l.dataset.saveProject??Z,o=new FormData(l),T=String(o.get("pName")??"").trim(),b=String(o.get("pCity")??"").trim(),X=String(o.get("pAddr")??"").trim(),Ae=String(o.get("pLng")??"").trim(),je=String(o.get("pLat")??"").trim();let De;if(Ae||je){const Ie=Number(Ae),ge=Number(je);if(!Number.isFinite(Ie)||!Number.isFinite(ge)||Ie<-180||Ie>180||ge<-90||ge>90){U="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",_();return}De={lng:Ie,lat:ge,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await e.updateProject?.(i,{name:T,city:b,address:X,location:De}),Ce(),H=`已保存项目「${T||"当前项目"}」信息。`,await Te()}catch(Ie){U=Ie instanceof Error?Ie.message:String(Ie),_()}}),a.querySelector("[data-upload-proj]")?.addEventListener("change",async t=>{const l=t.currentTarget,i=l.dataset.uploadProj,o=l.files?.[0];if(!(!i||!o))try{const T=await Fa(o);await e.updateProject?.(i,{imageUrl:T}),H=`已更新项目封面图（${o.name}）。`,await Te()}catch(T){U=T instanceof Error?T.message:String(T),_()}}),a.querySelector("[data-delete-proj]")?.addEventListener("click",async t=>{const l=t.currentTarget.dataset.deleteProj,i=V.projects.find(o=>o.id===l);if(!(!l||!i)&&window.confirm(`确认删除项目「${i.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await e.deleteProject?.(l),Ce(),H=`已删除项目「${i.name}」。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}}),a.querySelector("[data-create-bld]")?.addEventListener("submit",async t=>{t.preventDefault();const l=t.currentTarget,i=l.dataset.createBld??Z,o=new FormData(l),T=String(o.get("bName")??"").trim(),b=String(o.get("bArea")??"").trim(),X=Math.max(1,Number(o.get("bAbove")??12)),Ae=Math.max(0,Number(o.get("bBelow")??0)),je=!!o.get("bRoof"),De=!!o.get("bAutoFloors");if(T)try{const Ie=await e.upsertBuilding?.({projectId:i,name:T,aboveFloors:X,belowFloors:Ae,hasRoof:je,areaSqm:b?Number(b):null});Ce();let ge=0;if(Ie&&(K=Ie.id,De)){for(let qe=1;qe<=X;qe+=1)await e.upsertFloor?.({buildingId:Ie.id,kind:"above",level:qe,name:`${qe}F`}),ge+=1;for(let qe=1;qe<=Ae;qe+=1)await e.upsertFloor?.({buildingId:Ie.id,kind:"below",level:-qe,name:`B${qe}`}),ge+=1;je&&(await e.upsertFloor?.({buildingId:Ie.id,kind:"roof",level:99,name:"RF"}),ge+=1)}H=De?`已创建楼宇「${T}」并自动生成 ${ge} 个楼层。`:`已创建楼宇「${T}」。`,await Te()}catch(Ie){U=Ie instanceof Error?Ie.message:String(Ie),_()}}),a.querySelector("[data-save-building]")?.addEventListener("submit",async t=>{t.preventDefault();const l=t.currentTarget,i=l.dataset.saveBuilding,o=V.buildings.find(Ie=>Ie.id===i);if(!o)return;const T=new FormData(l),b=String(T.get("bName")??"").trim()||o.name,X=String(T.get("bArea")??"").trim(),Ae=Math.max(1,Number(T.get("bAbove")??o.aboveFloors)),je=Math.max(0,Number(T.get("bBelow")??o.belowFloors)),De=!!T.get("bRoof");try{await e.upsertBuilding?.({id:i,projectId:o.projectId,name:b,aboveFloors:Ae,belowFloors:je,hasRoof:De,areaSqm:X?Number(X):null}),Ce(),H=`已保存楼宇「${b}」参数。`,await Te()}catch(Ie){U=Ie instanceof Error?Ie.message:String(Ie),_()}}),a.querySelector("[data-delete-building]")?.addEventListener("click",async t=>{const l=t.currentTarget.dataset.deleteBuilding,i=V.buildings.find(o=>o.id===l);if(!(!l||!i)&&window.confirm(`确认删除楼宇「${i.name}」及其下全部楼层与功能区？`))try{await e.deleteBuilding?.(l),Ce(),H=`已删除楼宇「${i.name}」。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}}),a.querySelector("[data-upload-bld]")?.addEventListener("change",async t=>{const l=t.currentTarget,i=l.dataset.uploadBld,o=l.files?.[0],T=V.buildings.find(b=>b.id===i);if(!(!i||!o||!T))try{const b=await Fa(o);await e.upsertBuilding?.({id:T.id,projectId:T.projectId,name:T.name,aboveFloors:T.aboveFloors,belowFloors:T.belowFloors,hasRoof:T.hasRoof,areaSqm:T.areaSqm,imageUrl:b}),H=`已更新「${T.name}」外观图（${o.name}）。`,await Te()}catch(b){U=b instanceof Error?b.message:String(b),_()}}),a.querySelectorAll("[data-fill-missing-floors]").forEach(t=>{t.addEventListener("click",async l=>{l.stopPropagation();const i=t.dataset.fillMissingFloors;if(i)try{const o=await O(i);H=o>0?`已自动补齐 ${o} 个楼层。`:"当前楼宇楼层已完整。",await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}})}),a.querySelector("[data-create-floor]")?.addEventListener("submit",async t=>{t.preventDefault();const l=t.currentTarget,i=l.dataset.createFloor,o=new FormData(l),T=String(o.get("fName")??"").trim().toUpperCase(),b=String(o.get("fArea")??"").trim();if(!T)return;const X=va(T)??T;if(Pe(i).some(ge=>(va(ge.name)??ge.name.toUpperCase())===X)){U=`楼层「${T}」已存在，请使用其他名称。`,_();return}const je=qa(T),De=je>=999?"roof":je<0?"below":"above",Ie=je>=999?99:je||1;try{const ge=await e.upsertFloor?.({buildingId:i,kind:De,level:Ie,name:T,areaSqm:b?Number(b):null});Ce(),ge&&(G=ge.id,re=ge.id),H=`已新增楼层「${T}」。`,await Te()}catch(ge){U=ge instanceof Error?ge.message:String(ge),_()}}),a.querySelector("[data-save-floor]")?.addEventListener("submit",async t=>{t.preventDefault();const l=t.currentTarget,i=l.dataset.saveFloor,o=Ve().find(qe=>qe.id===i);if(!o)return;const T=new FormData(l),b=String(T.get("fName")??"").trim()||o.name,X=String(T.get("fArea")??"").trim(),Ae=va(b)??b.toUpperCase();if(Pe(o.buildingId).some(qe=>qe.id!==o.id&&(va(qe.name)??qe.name.toUpperCase())===Ae)){U=`楼层「${b}」已存在，请避免重复命名。`,_();return}const De=qa(b),Ie=De>=999?"roof":De<0?"below":"above",ge=De>=999?99:De||o.level;try{await e.upsertFloor?.({id:o.id,buildingId:o.buildingId,kind:Ie,level:ge,name:b,areaSqm:X?Number(X):null}),H=`已保存楼层「${b}」。`,await Te()}catch(qe){U=qe instanceof Error?qe.message:String(qe),_()}}),a.querySelector("[data-delete-floor]")?.addEventListener("click",async t=>{const l=t.currentTarget.dataset.deleteFloor,i=Ve().find(o=>o.id===l);if(!(!l||!i)){if(Oe(l).length>0){U=`楼层「${i.name}」已关联设备，请先解绑后再删除。`,_();return}if(window.confirm(`确认删除楼层「${i.name}」及其功能区？`))try{await e.deleteFloor?.(l),re=null,H=`已删除楼层「${i.name}」。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}}});async function h(t,l){const i=Ve().find(o=>o.id===t);if(i)try{const o=await Fa(l);await e.upsertFloor?.({id:i.id,buildingId:i.buildingId,kind:i.kind,level:i.level,name:i.name,areaSqm:i.areaSqm,planImageUrl:o}),H=`已更新「${i.name}」平面底图（${l.name}）。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}}a.querySelectorAll("[data-upload-floor]").forEach(t=>{t.addEventListener("change",()=>{const l=t.dataset.uploadFloor,i=t.files?.[0];l&&i&&h(l,i)})});const w=a.querySelector("[data-single-floor-drop]");w&&s.scope.canEditDeployment&&(w.addEventListener("dragover",t=>{t.preventDefault(),w.style.borderColor="var(--pacom-accent-solid)"}),w.addEventListener("dragleave",()=>{w.style.borderColor=""}),w.addEventListener("drop",t=>{t.preventDefault(),w.style.borderColor="";const l=w.dataset.singleFloorDrop,i=Array.from(t.dataTransfer?.files??[]).find(o=>o.type.startsWith("image/"));l&&i&&h(l,i)})),a.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async t=>{const l=t.currentTarget.dataset.clearFloorPlan,i=Ve().find(o=>o.id===l);if(!(!l||!i)&&window.confirm(`确认清空「${i.name}」的平面底图？`))try{await e.upsertFloor?.({id:i.id,buildingId:i.buildingId,kind:i.kind,level:i.level,name:i.name,areaSqm:i.areaSqm,planImageUrl:null}),H=`已清空「${i.name}」平面底图。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}}),a.querySelectorAll("[data-open-lightbox]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.lbTitle??"平面底图预览",i=t.dataset.lbSrc??"";i&&(Ee={title:l,imageUrl:i},_())})}),a.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{Ee=null,_()}),a.querySelector("[data-lightbox-scrim]")?.addEventListener("click",t=>{t.target===t.currentTarget&&(Ee=null,_())});function A(t,l){if(!t||l.length===0)return;const i=Pe(t),o=new Map;i.forEach(T=>{const b=va(T.name)??T.name.toUpperCase();o.set(b,T)}),we=l.map((T,b)=>{const X=va(T.name),Ae=X?o.get(X):void 0;return{id:`bu-${Date.now().toString(36)}-${b}`,file:T,matchedFloorId:Ae?.id??null}}),m=!0,_()}a.querySelector("[data-batch-upload-floors]")?.addEventListener("change",t=>{const l=t.currentTarget;A(l.dataset.batchUploadFloors??"",Array.from(l.files??[]))});const j=a.querySelector("[data-batch-dropzone]");j&&s.scope.canEditDeployment&&(j.addEventListener("dragover",t=>{t.preventDefault(),ke||(ke=!0,j.style.borderColor="var(--pacom-accent-solid)",j.style.background="var(--pacom-accent-soft)")}),j.addEventListener("dragleave",()=>{ke=!1,j.style.borderColor="",j.style.background=""}),j.addEventListener("drop",t=>{t.preventDefault(),ke=!1;const l=Array.from(t.dataTransfer?.files??[]).filter(i=>i.type.startsWith("image/"));A(j.dataset.batchDropzone??"",l)})),a.querySelectorAll("[data-batch-override-floor]").forEach(t=>{t.addEventListener("change",()=>{const l=we.find(i=>i.id===t.dataset.batchOverrideFloor);l&&(l.matchedFloorId=t.value||null,_())})}),a.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{we=[],_()}),a.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const t=we.filter(i=>i.matchedFloorId),l=we.length-t.length;if(t.length!==0)try{for(const i of t){const o=Ve().find(b=>b.id===i.matchedFloorId);if(!o)continue;const T=await Fa(i.file);await e.upsertFloor?.({id:o.id,buildingId:o.buildingId,kind:o.kind,level:o.level,name:o.name,areaSqm:o.areaSqm,planImageUrl:T})}we=[],Ce(),H=`已批量导入 ${t.length} 个楼层平面底图${l>0?`（跳过 ${l} 张未分配文件）`:""}。`,await Te()}catch(i){U=i instanceof Error?i.message:String(i),_()}}),a.querySelectorAll("[data-apply-zone-tpl]").forEach(t=>{t.addEventListener("click",async()=>{const l=gt.find(o=>o.key===t.dataset.applyZoneTpl),i=Ve().find(o=>o.id===t.dataset.tplFloor);if(!(!l||!i))try{for(const o of l.items){const T=await e.upsertZone?.({floorId:i.id,name:`${i.name} ${o.suffix}`,category:o.category});T&&(pe[T.id]={left:20,top:20,width:24,height:24})}H=`已按「${l.label}」模板为 ${i.name} 创建 ${l.items.length} 个功能区。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}})}),a.querySelector("[data-attach-doc]")?.addEventListener("change",t=>{const l=t.currentTarget,i=l.dataset.attachDoc,o=l.files?.[0],T=Ve().find(X=>X.id===i);if(!i||!o||!T)return;const b=o.size>=1024*1024?`${(o.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(o.size/1024))} KB`;ee.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:i,name:o.name,category:o.name.toLowerCase().endsWith(".xlsx")||o.name.toLowerCase().endsWith(".xls")?"点位清单":"竣工图纸",boundScope:`${T.name} · 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:b}),H=`已为 ${T.name} 关联文档「${o.name}」。`,_()}),a.querySelector("[data-add-zone]")?.addEventListener("submit",async t=>{t.preventDefault();const l=t.currentTarget.dataset.addZone,i=new FormData(t.currentTarget),o=String(i.get("zoneName")??"").trim(),T=String(i.get("zoneCat")??"office");if(o)try{const b=await e.upsertZone?.({floorId:l,name:o,category:T});b&&(pe[b.id]={left:20,top:20,width:24,height:24}),H=`已添加功能区「${o}」。`,await Te()}catch(b){U=b instanceof Error?b.message:String(b),_()}}),a.querySelectorAll("[data-edit-zone]").forEach(t=>{t.addEventListener("click",()=>{c=t.dataset.editZone??null,_()})}),a.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{c=null,_()}),a.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async t=>{t.preventDefault();const l=t.currentTarget,i=new FormData(l),o=String(i.get("zName")??"").trim(),T=String(i.get("zCat")??"office");if(o)try{await e.upsertZone?.({id:l.dataset.saveEditZone,floorId:l.dataset.zoneFloor,name:o,category:T}),c=null,H=`已更新功能区「${o}」。`,await Te()}catch(b){U=b instanceof Error?b.message:String(b),_()}}),a.querySelectorAll("[data-del-zone]").forEach(t=>{t.addEventListener("click",async()=>{const l=t.dataset.delZone,i=Ze().find(o=>o.id===l);if(!(!l||!i)&&window.confirm(`确认删除功能区「${i.name}」？`))try{await e.deleteZone?.(l),c===l&&(c=null),H=`已删除功能区「${i.name}」。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}})}),a.querySelectorAll("[data-open-copy-zones]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.openCopyZones??null;Ce(),z=l,ue=new Set(Pe(K).filter(i=>i.id!==l&&i.kind==="above"&&Ze().filter(o=>o.floorId===i.id).length===0).map(i=>i.id)),_()})}),a.querySelectorAll("[data-copy-preset]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.copyPreset,i=Pe(K).filter(o=>o.id!==z);l==="empty"?ue=new Set(i.filter(o=>o.kind==="above"&&Ze().filter(T=>T.floorId===o.id).length===0).map(o=>o.id)):l==="above"?ue=new Set(i.filter(o=>o.kind==="above").map(o=>o.id)):ue.clear(),_()})}),a.querySelectorAll("[data-copy-target-floor]").forEach(t=>{t.addEventListener("change",()=>{const l=t.dataset.copyTargetFloor;l&&(t.checked?ue.add(l):ue.delete(l),_())})}),a.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async t=>{const l=t.currentTarget.dataset.confirmCopyZones,i=Array.from(ue);if(!(!l||i.length===0))try{const o=await e.copyZonesToFloors?.(l,i)??0;Ce(),ue.clear(),H=`已将当前层功能区复用至 ${i.length} 个目标楼层（共新增 ${o} 个功能区）。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}});const M=a.querySelector("[data-dep-canvas-search]");M?.addEventListener("focus",()=>{te||(te=!0,_(),a.querySelector("[data-dep-canvas-search]")?.focus())}),M?.addEventListener("input",t=>{se=t.currentTarget.value,te=!0,_();const l=a.querySelector("[data-dep-canvas-search]");l&&(l.focus(),l.setSelectionRange(se.length,se.length))}),a.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{te=!te,_()}),a.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{te=!1,_()}),a.querySelectorAll("[data-brush]").forEach(t=>{t.addEventListener("click",()=>{me=t.dataset.brush??"device",_()})}),a.querySelectorAll("[data-dep-zoom]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.depZoom;l==="in"?de=Math.min(2.6,Number((de+.2).toFixed(2))):l==="out"?de=Math.max(.6,Number((de-.2).toFixed(2))):(de=1,ne=0,oe=0),oa()})});const E=a.querySelector('[data-role="dep-stage"]');if(E&&!Q){let t=!1,l=0,i=0,o=0,T=0;E.addEventListener("pointerdown",X=>{X.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(t=!0,l=X.clientX,i=X.clientY,o=ne,T=oe,E.classList.add("is-panning"),E.setPointerCapture?.(X.pointerId))}),E.addEventListener("pointermove",X=>{t&&(ne=o+(X.clientX-l),oe=T+(X.clientY-i),oa())});const b=()=>{t&&(t=!1,E.classList.remove("is-panning"))};E.addEventListener("pointerup",b),E.addEventListener("pointercancel",b),E.addEventListener("wheel",X=>{X.preventDefault();const Ae=X.deltaY<0?.12:-.12;de=Math.max(.6,Math.min(2.6,Number((de+Ae).toFixed(2)))),oa()},{passive:!1}),E.addEventListener("dblclick",X=>{X.target?.closest("button")||(de=1,ne=0,oe=0,oa())})}a.querySelectorAll("[data-dev-filter]").forEach(t=>{t.addEventListener("click",()=>{ce=t.dataset.devFilter??"all",_()})}),a.querySelector("[data-create-dev]")?.addEventListener("submit",t=>{t.preventDefault();const l=new FormData(t.currentTarget),i=String(l.get("devName")??"").trim(),o=String(l.get("devPreset")??"sensor"),T=String(l.get("devZone")??"")||null,b=Qa.find(Ae=>Ae.key===o)??Qa[0],X=`dev-custom-${Date.now().toString(36)}`;N.push({id:X,name:i,category:b.category,projectId:Z||$.projectId,buildingId:K,floorId:G,logicalZoneId:T,planPoint:{floorId:G,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),Be.set(X,{proxy:b.defaultProxy,relay:b.defaultRelay,meshUuid:`mesh-${G.slice(-4)}`}),b.category==="lighting"&&ea.push({id:`lm-${Date.now().toString(36)}`,deviceId:X,channel:"回路 1",label:`${i.slice(0,6)}主灯`,x:.52,y:.45}),Ce(),v=X,Y=!0,q="binding",Le=!0,H=`已新增「${i}」（${b.hint}），已生成默认标记并提示待同步边缘。`,_()}),a.querySelectorAll("[data-pick-dev]").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation(),v=t.dataset.pickDev??null,Y=!0,q="binding",D=Oe(G).find(o=>o.id===v)?.physicalInstalled??!1,_()})}),a.querySelectorAll("[data-open-dev-drawer]").forEach(t=>{t.addEventListener("click",l=>{if(l.target?.closest("button"))return;v=t.dataset.openDevDrawer??null,Y=!0,q="binding",D=Oe(G).find(o=>o.id===v)?.physicalInstalled??!1,_()})}),a.querySelectorAll("[data-open-dev-params]").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation(),v=t.dataset.openDevParams??null,Y=!0,q="params",D=Oe(G).find(o=>o.id===v)?.physicalInstalled??!1,_()})}),a.querySelector("[data-close-sel]")?.addEventListener("click",()=>{Y=!1,Q=!1,_()}),a.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{S!=="marking"?(S="marking",Q=!0):Q=!Q,_()}),a.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{D=!D,_()}),a.querySelectorAll("[data-ping-dev]").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation();const i=Oe(G).find(o=>o.id===t.dataset.pingDev);i&&(H=`已向「${i.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,_())})}),a.querySelector("[data-add-light-marker]")?.addEventListener("click",t=>{const l=t.currentTarget.dataset.addLightMarker,i=ea.filter(o=>o.deviceId===l).length+1;ea.push({id:`lm-${Date.now().toString(36)}`,deviceId:l,channel:`回路 ${i}`,label:`照明点位 ${i}`,x:Math.min(.86,.35+i*.1),y:.42}),me="light_marker",H=`已新增「回路 ${i}」可视化灯点。`,_()}),a.querySelectorAll("[data-del-light-marker]").forEach(t=>{t.addEventListener("click",()=>{const l=ea.findIndex(i=>i.id===t.dataset.delLightMarker);l>=0&&ea.splice(l,1),_()})}),a.querySelectorAll("[data-toggle-mesh-role]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.meshDev,i=t.dataset.toggleMeshRole,o=Be.get(l)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};o[i]=!o[i],Be.set(l,o),Le=!0,H=`已更新节点 ${i.toUpperCase()} 状态，可在「网络拓扑」中一键同步至边缘网关。`,_()})}),a.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async t=>{const l=Oe(G).find(b=>b.id===v);if(!Q||!l)return;const i=t.currentTarget.getBoundingClientRect(),o=Math.max(.02,Math.min(.98,(t.clientX-i.left)/i.width)),T=Math.max(.02,Math.min(.98,(t.clientY-i.top)/i.height));if(N.some(b=>b.id===l.id)){l.planPoint={floorId:G,planVersion:1,x:Number(o.toFixed(4)),y:Number(T.toFixed(4))},Q=!1,H=`已更新「${l.name}」图上坐标。`,_();return}try{await e.updateDevicePlanPoint({deviceId:l.id,floorId:$.floorId,planVersion:l.planPoint?.planVersion??1,x:o,y:T,expectedVersion:l.version}),Q=!1,H=`已更新「${l.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await Te()}catch(b){U=b instanceof Error?b.message:String(b),_()}}),a.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async t=>{t.preventDefault();const l=Oe(G).find(o=>o.id===v);if(!l)return;const i=new FormData(t.currentTarget);if(N.some(o=>o.id===l.id)){l.physicalInstalled=D,l.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(i.get("protocol")),networkAddress:String(i.get("networkAddress")??""),portOrChannel:String(i.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:s.displayName},l.version+=1,Le=!0,H=`已保存「${l.name}」的硬件绑定与物理复核状态。`,_();return}try{await e.updateDeviceHardwareBinding({deviceId:l.id,gatewayId:l.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(i.get("protocol")),networkAddress:String(i.get("networkAddress")??""),portOrChannel:String(i.get("portOrChannel")??""),physicalInstalled:D,expectedVersion:l.version}),Le=!0,H=`已保存「${l.name}」的硬件绑定与物理安装复核状态。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}}),a.querySelector("[data-save-dev-params]")?.addEventListener("submit",t=>{t.preventDefault();const l=t.currentTarget.dataset.saveDevParams,i=new FormData(t.currentTarget);Ca.set(l,{offDelayMin:Number(i.get("offDelayMin")??15),restoreMin:Number(i.get("restoreMin")??30),luxOn:Number(i.get("luxOn")??280),luxOff:Number(i.get("luxOff")??450)}),Le=!0,H="设备自治延时与光感门限参数已下发并同步至配置基线。",_()}),a.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const t=Oe(G).find(l=>l.id===v);t&&Ta(t)}),a.querySelectorAll("[data-ftt-dev]").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation();const i=Oe(G).find(o=>o.id===t.dataset.fttDev);i&&Ta(i)})}),a.querySelectorAll("[data-batch-ftt]").forEach(t=>{t.addEventListener("click",()=>Ba())}),a.querySelectorAll("[data-export-inv]").forEach(t=>{t.addEventListener("click",()=>ia())}),a.querySelector("[data-create-group]")?.addEventListener("submit",t=>{t.preventDefault();const l=new FormData(t.currentTarget),i=String(l.get("gName")??"").trim(),o=l.get("gTrack")??"mesh_auto",T=String(l.get("gType")??"灯光联动组");i&&(pa.unshift({id:`grp-${Date.now().toString(36)}`,track:o,groupType:T,name:i,floorId:G,includesAdapter:o==="mesh_auto",deviceIds:o==="mesh_auto"?["dev-e7f-gw-01"]:[]}),Ce(),o==="mesh_auto"&&(Le=!0),H=`已新建${o==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${i}」。`,_())}),a.querySelectorAll("[data-test-group]").forEach(t=>{t.addEventListener("click",()=>{const l=pa.find(i=>i.id===t.dataset.testGroup);l&&(H=`已向分组「${l.name}」发送群组试控指令，${l.deviceIds.length} 台成员回读正常。`,_())})}),a.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>Ua()),a.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{We+=1,Le=!1,H=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${We}）。`,_()}),a.querySelectorAll("[data-topo-mode]").forEach(t=>{t.addEventListener("click",()=>{le=t.dataset.topoMode??"mesh",_()})}),a.querySelectorAll("[data-topo-jump]").forEach(t=>{t.addEventListener("click",()=>{v=t.dataset.topoJump??null,Y=!0,q="binding",u="devices",S="marking",_()})}),a.querySelector("[data-create-conn]")?.addEventListener("submit",t=>{t.preventDefault();const l=new FormData(t.currentTarget),i=String(l.get("cName")??"").trim(),o=String(l.get("cProto")??"bacnet_ip"),T=String(l.get("cEndpoint")??"").trim();if(ie.some(b=>b.endpoint===T)){U=`端口冲突警告：局域网端点「${T}」已被其他通道占用，请更换端口后重试。`,_();return}ie.unshift({id:`conn-${Date.now().toString(36)}`,projectId:Z||$.projectId,buildingId:K,floorId:G,name:i,protocol:o,endpoint:T,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),Ce(),U="",H=`已接入「${i}」（${T}），连通测试通过（18 ms）。`,_()}),a.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{H="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",_()}),a.querySelectorAll("[data-expand-conn]").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.expandConn??null;Fe=Fe===l?null:l,_()})}),a.querySelectorAll("[data-ping-conn]").forEach(t=>{t.addEventListener("click",()=>{const l=ie.find(i=>i.id===t.dataset.pingConn);l&&(U="",l.status==="connected"?H=`连通测试通过：「${l.name}」（${l.endpoint}）响应正常，延迟 18 ms。`:U=`连通测试异常：「${l.name}」（${l.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,_())})}),a.querySelectorAll("[data-copy-endpoint]").forEach(t=>{t.addEventListener("click",async()=>{const l=t.dataset.endpointVal??"",i=t.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(l),ye=i,_(),window.setTimeout(()=>{ye=null,_()},1600)}catch{}})}),a.querySelectorAll("[data-preview-doc]").forEach(t=>{t.addEventListener("click",()=>{const l=[...mt,...ee].find(i=>i.id===t.dataset.previewDoc);l&&(H=`已调阅工程附件「${l.name}」（关联范围：${l.boundScope}，更新于 ${l.updatedAt}）。`,_())})}),a.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const t=await e.freezeDeliveryBatch($.floorId,"部署总览验收发起交付冻结");H=`已生成交付冻结快照 ${t.versionTag}（核验 ${t.verifiedCount}/${t.deviceCount}）。`,await Te()}catch(t){U=t instanceof Error?t.message:String(t),_()}})}await Te()}const ts=new Set(["lighting","hvac","alarm_rules"]),ft={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},za=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function ss(a){const e=new Set;for(const s of a.actions)s.command.startsWith("lighting")?e.add("照明"):s.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function ns(a,e,s){const r=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${a<e?`<div style="position:absolute; left:${a/24*100}%; width:${(e-a)/24*100}%; top:0; bottom:0; border-radius:999px; background:${r};"></div>`:`
        <div style="position:absolute; left:${a/24*100}%; width:${(24-a)/24*100}%; top:0; bottom:0; border-radius:999px; background:${r};"></div>
        <div style="position:absolute; left:0; width:${e/24*100}%; top:0; bottom:0; border-radius:999px; background:${r};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function os(a,e,s){let r=Na(),n=!1,u="",[S,q,R,C]=await Promise.all([e.getSpatialTree(),e.listScenes($.floorId),e.getRuntimeSettings($.projectId),e.getFloorDevices($.floorId).catch(()=>[])]),P="manual",F="balanced",J="all",me=null,ce="",se=!1,te=!1,Y=!1,le="all",de=null,ne="",oe="",V=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const ve=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],ie=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],_e=[{deviceId:C[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],pe=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${R.calendar.workdayStart} – ${R.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${R.calendar.nightGuardStart} – 次日 ${R.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],N=e.subscribeFloorEvents($.floorId,async K=>{K.type==="control.receipt.updated"&&me?.batchId===K.batchId&&(me=await e.getControlBatch(K.batchId),Z())});function Z(){const K=ce.trim().toLowerCase(),G=K?q.filter(d=>`${d.name} ${d.description}`.toLowerCase().includes(K)):q,re=R.rules.filter(d=>ts.has(d.category)),xe=J==="all"?re:J==="cbm"?[]:re.filter(d=>d.category===J),he=J==="all"||J==="cbm",k=le==="issues"?ve.filter(d=>d.status!=="verified"):ve,B=za.find(d=>d.id===F)??za[1],$e=s.scope.canControlDevices,L=s.scope.canEditScenes,g=s.scope.canEditSettings,m=s.scope.activeOverrides.find(d=>d.module==="settings"&&d.status==="active");a.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Ra({tree:S,session:s,scope:r,isOpen:n,searchKeyword:u})}
            </div>

            <div class="pacom-header-meta">
              ${P==="rules"?g?m?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${V.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${V.length>0?`人工覆盖中：${V.length} 台 ${fe("chevron-down",12)}`:`全部自动托管 ${fe("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${Y?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${ve.length}）</button>
              ${P==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${L?"":"disabled"}>${se?"收起表单":"+ 新建场景"}</button>`:P==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${P==="manual"}" data-scene-tab="manual">快捷场景（${q.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${P==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${P==="rules"}" data-scene-tab="rules">条件联动（${re.length+ie.length}）</button>
          </nav>
        </header>

        ${te?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${V.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${fe("x",16)}</button>
              </div>
              ${V.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':V.map(d=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${p(d.name)}</div>
                            <div class="pacom-row-sub">${p(d.reason)}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${p(d.id)}" ${$e?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${V.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${$e?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${Y?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${fe("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${le==="all"}" data-log-filter="all">全部（${ve.length}）</button>
                  <button class="pacom-tab" aria-selected="${le==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${k.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${k.map(d=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${p(d.device)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${p(d.source)}</span>
                        </div>
                        <span class="pacom-row-sub">${p(d.action)} · ${p(d.at)}</span>
                      </div>
                      <span class="pacom-badge ${d.status==="verified"?"pacom-badge--online":d.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${d.status==="verified"?"回读确认":d.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${ne?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${p(ne)}</span></div>`:""}
          ${oe?`<div class="pacom-alert-banner">${p(oe)}</div>`:""}

          ${P==="manual"?`
              ${me?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${p(me.batchId)}</span>
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
                            ${me.receipts.map(d=>`
                                <tr>
                                  <td><code style="font-size:12px;">${p(d.deviceId)}</code></td>
                                  <td>${p(d.command)}</td>
                                  <td>${p(String(d.targetValue))}${d.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${p(d.errorMessage)}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${d.status==="verified_success"?"pacom-badge--online":d.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${p(d.status)}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${se?`
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
                          <span class="pacom-setting-title">联动动作列表（${_e.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${_e.map((d,I)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" name="draftDevice-${I}" data-draft-dev="${I}" aria-label="目标设备">
                                ${C.map(z=>`<option value="${p(z.id)}" ${z.id===d.deviceId?"selected":""}>${p(z.name)}</option>`).join("")}
                              </select>
                              <select class="pacom-select" name="draftCommand-${I}" data-draft-cmd="${I}" aria-label="执行指令">
                                <option value="lighting.dimming" ${d.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${d.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${d.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" name="draftTargetValue-${I}" data-draft-val="${I}" value="${p(d.targetValue)}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${I}" ${_e.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" ${L?"":"disabled"}>保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${p(ce)}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${G.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${G.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':G.map(d=>{const I=ss(d),z=d.actions.slice(0,3).map(ue=>{const Ee=C.find(we=>we.id===ue.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??ue.deviceId,ke=ue.command==="lighting.dimming"?`亮度 ${ue.targetValue}%`:ue.command==="hvac.setpoint"?`设温 ${ue.targetValue}°C`:ue.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${p(Ee)} → ${p(ke)}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${p(d.name)}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${I.map(ue=>`<span class="pacom-badge pacom-badge--accent">${p(ue)}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${d.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${p(d.description)}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${z}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${p(d.lastExecutedAt?d.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行")}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${p(d.id)}" ${$e?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:P==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${B.title}</div>
                    <span class="pacom-kpi-delta">${B.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${B.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${B.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${V.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${za.map(d=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${F===d.id}" data-oss-mode="${d.id}" ${$e?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${d.title}</strong>
                          <span class="pacom-badge ${F===d.id?"pacom-badge--online":"pacom-badge--neutral"}">${F===d.id?"当前生效":d.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${d.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${d.estSaving}</span>
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
                          ${pe.map(d=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${p(d.name)}</span>
                                    ${d.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${p(d.windowLabel)}</div>
                                </td>
                                <td>${ns(d.startHour,d.endHour,d.enabled)}</td>
                                <td><span class="pacom-row-sub">${p(d.scope)}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${d.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${d.enabled}"
                                      aria-label="切换排程 ${p(d.name)}"
                                      data-toggle-schedule="${p(d.id)}"
                                      ${$e?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(d=>{const I=d==="all"?"全部":ft[d]??d,z=d==="all"?re.length+ie.length:d==="cbm"?ie.length:re.filter(ue=>ue.category===d).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${J===d}" data-rule-cat="${d}">
                              <span>${I}</span><span class="pacom-count-num">${z}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${xe.map(d=>{const I=de===d.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${p(ft[d.category]??d.category)}</span>
                                  <span>${p(d.name)}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${d.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${p(d.summary)} · 范围：${p(d.scopeLabel)} · 回执：${p(d.receiptSummary??"已同步")}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${p(d.id)}">${I?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${d.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${d.enabled?"true":"false"}"
                                  aria-label="切换 ${p(d.name)}"
                                  data-toggle-strategy-rule="${p(d.id)}"
                                  data-rule-ver="${d.version}"
                                  data-rule-next="${!d.enabled}"
                                  ${g?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${I?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${d.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":d.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${p(d.scopeLabel)} · 当前版本：v${d.version} · 最近同步：${p(d.receiptSummary??"已同步")}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${he?ie.map(d=>{const I=Math.min(100,Math.round(d.runtimeHours/d.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${p(d.name)}</span>
                                      <span class="pacom-badge ${I>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${d.runtimeHours} / ${d.thresholdHours} h（${I}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${I}%; background:${I>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${p(d.equipment)} · 上次重置：${p(d.lastReset)}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${d.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${d.enabled}" data-toggle-cbm="${p(d.id)}" aria-label="切换 ${p(d.name)}" ${g?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,Pa(a,{onToggle:()=>{n=!n,Z(),n&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:d=>{u=d,Z();const I=a.querySelector("[data-global-space-search]");I&&(I.focus(),I.setSelectionRange(d.length,d.length))},onPick:d=>{r=d,n=!1,Z()}}),a.querySelectorAll("[data-scene-tab]").forEach(d=>{d.addEventListener("click",()=>{P=d.dataset.sceneTab??"manual",ne="",Z()})}),a.querySelectorAll("[data-toggle-overrides]").forEach(d=>{d.addEventListener("click",()=>{te=!te,Z()})}),a.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{$e&&(V=[],ne="已释放全部人工覆盖设备，自动节能策略已恢复托管。",Z())}),a.querySelectorAll("[data-release-one]").forEach(d=>{d.addEventListener("click",()=>{if(!$e)return;const I=d.dataset.releaseOne;V=V.filter(z=>z.id!==I),ne="已恢复该设备的自动策略托管。",Z()})}),a.querySelectorAll("[data-toggle-cmdlog]").forEach(d=>{d.addEventListener("click",()=>{Y=!Y,Z()})}),a.querySelectorAll("[data-log-filter]").forEach(d=>{d.addEventListener("click",()=>{le=d.dataset.logFilter??"all",Z()})}),a.querySelector("[data-close-batch]")?.addEventListener("click",()=>{me=null,Z()}),a.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),a.querySelectorAll("[data-oss-mode]").forEach(d=>{d.addEventListener("click",()=>{if(!$e)return;const I=d.dataset.ossMode;if(!I)return;F=I;const z=za.find(ue=>ue.id===I);ne=`已切换至「${z?.title??I}」模式（明日预测启动 ${z?.predictedStart??""}）。`,Z()})}),a.querySelectorAll("[data-toggle-schedule]").forEach(d=>{d.addEventListener("click",()=>{if(!$e)return;const I=d.dataset.toggleSchedule,z=pe.find(ue=>ue.id===I);z&&(z.enabled=!z.enabled,ne=`排程「${z.name}」已${z.enabled?"恢复启用":"临时暂停"}。`,Z())})}),a.querySelectorAll("[data-rule-cat]").forEach(d=>{d.addEventListener("click",()=>{J=d.dataset.ruleCat??"all",Z()})}),a.querySelectorAll("[data-expand-rule]").forEach(d=>{d.addEventListener("click",()=>{const I=d.dataset.expandRule??null;de=de===I?null:I,Z()})}),a.querySelectorAll("[data-toggle-cbm]").forEach(d=>{d.addEventListener("click",()=>{if(!g)return;const I=ie.find(z=>z.id===d.dataset.toggleCbm);I&&(I.enabled=!I.enabled,ne=`工时维保规则「${I.name}」已${I.enabled?"启用":"停用"}。`,Z())})}),a.querySelectorAll("[data-toggle-strategy-rule]").forEach(d=>{d.addEventListener("click",async()=>{if(g){oe="";try{await e.toggleRuntimeRule(d.dataset.toggleStrategyRule,d.dataset.ruleNext==="true",Number(d.dataset.ruleVer)),R=await e.getRuntimeSettings($.projectId),ne="条件联动规则状态与版本回执已更新。",Z()}catch(I){oe=I instanceof Error?I.message:String(I),Z()}}})}),a.querySelectorAll("[data-toggle-create]").forEach(d=>{d.addEventListener("click",()=>{!L&&!se||(se=!se,Z())})}),a.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{L&&(_e.push({deviceId:C[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),Z())}),a.querySelectorAll("[data-del-draft-action]").forEach(d=>{d.addEventListener("click",()=>{if(!L)return;const I=Number(d.dataset.delDraftAction);_e.length>1&&(_e.splice(I,1),Z())})}),a.querySelectorAll("[data-draft-dev]").forEach(d=>{d.addEventListener("change",()=>{if(!L)return;const I=_e[Number(d.dataset.draftDev)];I&&(I.deviceId=d.value)})}),a.querySelectorAll("[data-draft-cmd]").forEach(d=>{d.addEventListener("change",()=>{if(!L)return;const I=_e[Number(d.dataset.draftCmd)];I&&(I.command=d.value)})}),a.querySelectorAll("[data-draft-val]").forEach(d=>{d.addEventListener("change",()=>{if(!L)return;const I=_e[Number(d.dataset.draftVal)];I&&(I.targetValue=d.value)})}),a.querySelector("[data-scene-search]")?.addEventListener("input",d=>{const I=d.currentTarget,z=I.selectionStart??I.value.length;ce=I.value,Z();const ue=a.querySelector("[data-scene-search]");ue&&(ue.focus(),ue.setSelectionRange(z,z))}),a.querySelectorAll("[data-exec-scene]").forEach(d=>{d.addEventListener("click",async()=>{if(!$e)return;oe="";const I=q.find(z=>z.id===d.dataset.execScene);try{me=await e.executeScene(d.dataset.execScene),q=await e.listScenes($.floorId),ve.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:I?.name??"E7F 场景",action:`${me.receipts.length} 台设备联动下发`,status:"verified"}),Z()}catch(z){oe=z instanceof Error?z.message:String(z),Z()}})}),a.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async d=>{if(d.preventDefault(),!L)return;const I=new FormData(d.currentTarget);try{await e.createScene({projectId:$.projectId,floorId:$.floorId,name:String(I.get("name")??""),description:String(I.get("description")??""),actions:_e.map(z=>({deviceId:z.deviceId,command:z.command,targetValue:z.targetValue==="true"?!0:z.targetValue==="false"?!1:Number(z.targetValue)||50}))}),q=await e.listScenes($.floorId),se=!1,ne=`快捷场景已保存（共绑定 ${_e.length} 条联动动作）。`,Z()}catch(z){oe=z instanceof Error?z.message:String(z),Z()}})}Z(),window.addEventListener("hashchange",()=>N(),{once:!0})}const bt={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function Xa(a,e){return a.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':a.map(s=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${p(s.name)}</span>
            <span class="pacom-badge pacom-badge--neutral">v${s.version}</span>
            <span class="pacom-badge pacom-badge--accent">${p(s.scopeLabel)}</span>
          </span>
          <span class="pacom-setting-desc">${p(s.summary)} · 回执：${p(s.receiptSummary??"已同步")}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${s.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${s.enabled?"true":"false"}"
            aria-label="切换 ${p(s.name)}"
            data-toggle-rule="${p(s.id)}"
            data-rule-ver="${s.version}"
            data-rule-next="${!s.enabled}"
            ${e?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function is(a,e,s){let r="calendar",n=Na(),u=!1,S="";const[q,R]=await Promise.all([e.getSpatialTree(),e.getRuntimeSettings($.projectId)]);let C=R,P=C.calendar.workdayStart,F=C.calendar.workdayEnd,J=C.calendar.nightGuardStart,me=C.calendar.nightGuardEnd,ce=!0,se=[];const te=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let Y="flat";const le={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},de={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},ne={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},oe={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},V=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let ve="",ie="";function _e(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(Z=>{const K=bt[Z];return`
                <button type="button" class="pacom-unified-item" aria-current="${r===Z}" data-stab="${Z}">
                  ${fe(K.icon,16)}
                  <span>${K.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function pe(){const N=s.scope.canEditSettings,Z=s.scope.activeOverrides.find(k=>k.module==="settings"&&k.status==="active"),K=q.projects[0]?.name??"当前项目",G=C.rules.filter(k=>k.category==="weather_area"),re=C.rules.filter(k=>k.category==="metering_carbon"),xe=C.rules.filter(k=>k.category==="templates"),he=bt[r];a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Ra({tree:q,session:s,scope:n,maxGranularity:"project",isOpen:u,searchKeyword:S})}
            </div>
            <div class="pacom-header-meta">
              ${N?Z?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${_e()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${he.label}</h2>
                <p class="pacom-unified-subtitle">${he.subtitle}</p>
              </div>
              ${Z?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 · ${Z.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${p(Z.approvedBy)} · 到期自动收回：${p(Z.expiresAt.slice(0,16).replace("T"," "))} · 事由：${p(Z.reason)}</span>
                      </div>
                    </div>`:""}
              ${ve?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${p(ve)}</span></div>`:""}
              ${ie?`<div class="pacom-alert-banner">${p(ie)}</div>`:""}

              ${r==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${C.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calWorkdayStart" style="width:116px;" type="time" data-cal-start value="${p(P)}" aria-label="工作日上班时间" ${N?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" name="calWorkdayEnd" style="width:116px;" type="time" data-cal-end value="${p(F)}" aria-label="工作日下班时间" ${N?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calNightGuardStart" style="width:116px;" type="time" data-night-start value="${p(J)}" aria-label="夜间值守开始" ${N?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" name="calNightGuardEnd" style="width:116px;" type="time" data-night-end value="${p(me)}" aria-label="夜间值守结束" ${N?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${ce?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${ce}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${N?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${N?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${te.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${te.map(k=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${p(k.date)}</span><span class="pacom-badge pacom-badge--accent">${p(k.mode)}</span></span>
                              <span class="pacom-setting-desc">${p(k.label)}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${p(k.id)}" ${N?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${N?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${N?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${N?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${N?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${se.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${se.length} 条</span>
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
                                ${se.map(k=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${p(k.ruleName)}</div>
                                        ${k.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${p(k.conflictWarning)}</div>`:""}
                                      </td>
                                      <td>${p(k.beforeWindow)}</td>
                                      <td><strong>${p(k.afterWindow)}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${k.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${k.conflictWarning?"交叠警告":"自动跟随"}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>`:""}`:r==="energy_weather"?`
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
                            <select class="pacom-select" name="energyWeatherSource" data-energy-field="weatherSource" aria-label="室外气象数据源" ${N?"":"disabled"}>
                              <option value="guanzhou_station" ${le.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${le.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${p(K)}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" name="energyBillingArea" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${p(le.billingArea)}" aria-label="计费面积" ${N?"":"disabled"} />
                          </div>
                        </div>
                        ${Xa(G,N)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${Y==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${Y==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${Y==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" name="energyTariffYuan" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${p(le.tariffYuan)}" aria-label="综合电价" ${N?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" name="energyTariffPeak" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${p(le.tariffPeak)}" aria-label="峰段电价" ${N?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" name="energyTariffFlat" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${p(le.tariffFlat)}" aria-label="平段电价" ${N?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" name="energyTariffValley" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${p(le.tariffValley)}" aria-label="谷段电价" ${N?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" name="energyCarbonFactor" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${N?"":"disabled"}>
                              <option value="0.5271" ${le.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${le.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${Xa(re,N)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${N?"":"disabled"}>保存口径参数</button>
                        </div>
                      </div>
                    </section>`:r==="guardrails"?`
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
                              <input class="pacom-input" name="guardMinTemp" style="width:72px;" type="number" data-guard-field="minTemp" value="${p(de.minTemp)}" aria-label="最低设定温度" ${N?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" name="guardMaxTemp" style="width:72px;" type="number" data-guard-field="maxTemp" value="${p(de.maxTemp)}" aria-label="最高设定温度" ${N?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" name="guardOverrideAutoRelease" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${N?"":"disabled"}>
                                <option value="2h" ${de.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${de.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${de.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${de.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" name="guardReadbackTimeoutSec" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${p(de.readbackTimeoutSec)}" aria-label="回读超时阈值" ${N?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${N?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${Xa(xe,N)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${p(oe.dailyDigestTime)}" aria-label="每日简报发送时间" ${N?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${oe.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${N?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${oe.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${N?"":"disabled"}>
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
                              <input class="pacom-input" name="autoWoDelayMin" style="width:72px;" type="number" data-auto-wo="delayMin" value="${p(ne.delayMin)}" aria-label="自动派单延迟分钟数" ${N?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ne.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${N?"":"disabled"}>
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
                              <select class="pacom-select" name="autoWoDefaultGroup" data-auto-wo="defaultGroup" aria-label="默认处理组" ${N?"":"disabled"}>
                                <option value="暖通运维组" ${ne.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${ne.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${ne.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ne.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${N?"":"disabled"}>
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
                                ${V.map(k=>`
                                    <tr>
                                      <td><strong>${p(k.groupName)}</strong></td>
                                      <td>${p(k.scope)}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${p(k.severity)}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${p(k.channels)}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${k.enabled}" data-toggle-nr="${p(k.id)}" aria-label="切换 ${p(k.groupName)} 通知规则" ${N?"":"disabled"}>
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
    `,Pa(a,{onToggle:()=>{u=!u,pe(),u&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:k=>{S=k,pe();const B=a.querySelector("[data-global-space-search]");B&&(B.focus(),B.setSelectionRange(k.length,k.length))},onPick:k=>{n=k,u=!1,pe()}}),a.querySelectorAll("[data-stab]").forEach(k=>{k.addEventListener("click",()=>{r=k.dataset.stab??"calendar",ve="",ie="",pe()})}),a.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{N&&(ce=!ce,ve=`法定节假日自动跳过已${ce?"开启":"关闭"}。`,pe())}),a.querySelector("[data-night-start]")?.addEventListener("change",k=>{N&&(J=k.currentTarget.value)}),a.querySelector("[data-night-end]")?.addEventListener("change",k=>{N&&(me=k.currentTarget.value)}),a.querySelector("[data-add-sd-form]")?.addEventListener("submit",k=>{if(k.preventDefault(),!N)return;const B=new FormData(k.currentTarget);te.push({id:`sd-${Date.now()}`,date:String(B.get("date")??""),label:String(B.get("label")??""),mode:String(B.get("mode")??"保持工作日工况")}),ve="已添加特殊例外日期，当日自动覆盖默认节假日排程。",pe()}),a.querySelectorAll("[data-del-sd]").forEach(k=>{k.addEventListener("click",()=>{if(!N)return;const B=te.findIndex($e=>$e.id===k.dataset.delSd);B>=0&&te.splice(B,1),pe()})}),a.querySelectorAll("[data-tariff-mode]").forEach(k=>{k.addEventListener("click",()=>{Y=k.dataset.tariffMode??"flat",pe()})}),a.querySelectorAll("[data-energy-field]").forEach(k=>{k.addEventListener("change",()=>{if(!N)return;const B=k.dataset.energyField;B&&(le[B]=k.value)})}),a.querySelector("[data-save-energy]")?.addEventListener("click",()=>{N&&(ve=Y==="flat"?`能耗计费与气象口径已保存（面积 ${le.billingArea} m² · 综合电价 ¥${le.tariffYuan}/kWh · 因子 ${le.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${le.tariffPeak} / 平 ¥${le.tariffFlat} / 谷 ¥${le.tariffValley}）。`,pe())}),a.querySelectorAll("[data-guard-field]").forEach(k=>{k.addEventListener("change",()=>{if(!N)return;const B=k.dataset.guardField;B&&(de[B]=k.value)})}),a.querySelector("[data-save-guard]")?.addEventListener("click",()=>{N&&(ve=`控制保护参数已保存（温区 ${de.minTemp}–${de.maxTemp}°C · 超时 ${de.readbackTimeoutSec}s）。`,pe())}),a.querySelectorAll("[data-auto-wo]").forEach(k=>{k.addEventListener("change",()=>{if(!N)return;const B=k.dataset.autoWo;B&&(ne[B]=k.value),ve="超时自动派单配置已更新。",pe()})}),a.querySelectorAll("[data-toggle-autowo]").forEach(k=>{k.addEventListener("click",()=>{if(!N)return;const B=k.dataset.toggleAutowo;B&&(ne[B]=!ne[B],ve="自动派单保护策略已更新。",pe())})}),a.querySelector("[data-digest-time]")?.addEventListener("change",k=>{N&&(oe.dailyDigestTime=k.currentTarget.value,ve=`每日晨间简报发送时刻已更新为 ${oe.dailyDigestTime}。`,pe())}),a.querySelectorAll("[data-notify-key]").forEach(k=>{k.addEventListener("click",()=>{if(!N)return;const B=k.dataset.notifyKey;B&&(oe[B]=!oe[B],ve="消息通知偏好已更新。",pe())})}),a.querySelectorAll("[data-toggle-nr]").forEach(k=>{k.addEventListener("click",()=>{if(!N)return;const B=V.find($e=>$e.id===k.dataset.toggleNr);B&&(B.enabled=!B.enabled,ve=`工作组「${B.groupName}」的分流推送规则已${B.enabled?"启用":"停用"}。`,pe())})}),a.querySelector("[data-cal-start]")?.addEventListener("change",k=>{N&&(P=k.currentTarget.value)}),a.querySelector("[data-cal-end]")?.addEventListener("change",k=>{N&&(F=k.currentTarget.value)}),a.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{ie="";try{se=await e.previewCalendarImpact($.projectId,P,F),pe()}catch(k){ie=k instanceof Error?k.message:String(k),pe()}}),a.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{if(N){ie="";try{const k=await e.saveWorkCalendar($.projectId,P,F,C.calendar.version);C={...C,calendar:{...k,nightGuardStart:J,nightGuardEnd:me}},ve=`工作时间配置已保存至 v${k.version}（工作日 ${k.workdayStart}–${k.workdayEnd} · 夜间值守 ${J}–${me}）`,se=[],pe()}catch(k){ie=k instanceof Error?k.message:String(k),pe()}}}),a.querySelectorAll("[data-toggle-rule]").forEach(k=>{k.addEventListener("click",async()=>{if(N){ie="";try{await e.toggleRuntimeRule(k.dataset.toggleRule,k.dataset.ruleNext==="true",Number(k.dataset.ruleVer)),C=await e.getRuntimeSettings($.projectId),ve="策略状态与版本回执已更新。",pe()}catch(B){ie=B instanceof Error?B.message:String(B),pe()}}})})}pe()}const ht="pacom.web.sidebar.collapsed",ls=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,yt=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],at={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},$t=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function et(){const a=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return a in at?a:"home"}function Re(a){return a.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const _a=new WeakMap;function cs(a){_a.get(a)?.()}async function rs(a,e,s,r){_a.get(a)?.(),a.classList.remove("bare-login");let n=s,u=et(),S=localStorage.getItem(ht)==="1",q=!1,R=!1,C=!1,P=await e.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],F=e.getActiveOrganizationId?.()??P[0]?.id??"org-gzlab",J="",me=!1,ce=0,se={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function te(g){return n.scope.visibleModules.includes(g)}te(u)||(u="home",window.location.hash="#home");function Y(){return P.find(g=>g.id===F)??P[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function le(g){if(g.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const m=g.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${Re(m)}</span>`}async function de(){e.listOrganizations&&(P=await e.listOrganizations(),F=e.getActiveOrganizationId?.()??P[0]?.id??"org-gzlab")}async function ne(){try{await de();const[g,m,y,d,I]=await Promise.all([e.getSpatialTree(),e.getFloorDevices($.floorId).catch(()=>[]),e.listAlarms($.floorId).catch(()=>[]),e.listWorkOrders($.floorId).catch(()=>[]),e.listScenes($.floorId).catch(()=>[])]);se={devices:m,zones:g.zones,alarms:y,workOrders:d,scenes:I},ce=y.filter(z=>z.status==="active").length,Z()}catch{}}function oe(){const g=yt.filter(y=>te(y.id));let m=!1;return g.map(y=>`
        ${(y.id==="settings"||y.id==="deployment")&&!m?(m=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${y.id}" aria-current="${u===y.id?"page":"false"}" title="${y.label}">
          ${fe(y.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${y.label}</span>
          ${y.id==="alarms"&&ce>0?`<span class="pacom-nav-count" title="待处理告警 ${ce} 条">${ce}</span>`:""}
        </button>`).join("")}function V(){const g=J.trim().toLowerCase(),m=yt.filter(ee=>te(ee.id)),y=g?m.filter(ee=>ee.label.toLowerCase().includes(g)).slice(0,4):m,d=g?se.devices.filter(ee=>`${ee.name} ${ee.id} ${ee.category}`.toLowerCase().includes(g)).slice(0,5):se.devices.slice(0,3),I=g?se.zones.filter(ee=>ee.name.toLowerCase().includes(g)).slice(0,3):[],z=te("alarms")?g?se.alarms.filter(ee=>`${ee.title} ${ee.message} ${ee.id}`.toLowerCase().includes(g)).slice(0,4):se.alarms.filter(ee=>ee.status==="active").slice(0,2):[],ue=te("alarms")?g?se.workOrders.filter(ee=>`${ee.title} ${ee.id}`.toLowerCase().includes(g)).slice(0,3):[]:[],Ee=te("scenes")?g?se.scenes.filter(ee=>`${ee.name} ${ee.description}`.toLowerCase().includes(g)).slice(0,3):[]:[],ke=te("deployment")?g?$t.filter(ee=>`${ee.title} ${ee.category}`.toLowerCase().includes(g)).slice(0,4):$t.slice(0,2):[],we=[];return d.length&&we.push(`<div class="pacom-search-group">${g?"设备（空间总览）":"常用设备直达"}</div>`+d.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(ee.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Re(ee.name)}</span><span class="pacom-badge ${ee.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${ee.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),I.length&&we.push('<div class="pacom-search-group">功能区</div>'+I.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(ee.id)}"><span>${Re(ee.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),z.length&&we.push(`<div class="pacom-search-group">${g?"告警":"待处理告警"}</div>`+z.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(ee.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Re(ee.title)}</span><span class="pacom-badge pacom-badge--warning">${ee.status==="active"?"待处理":"已确认"}</span></button>`).join("")),ue.length&&we.push('<div class="pacom-search-group">运维工单</div>'+ue.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(ee.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Re(ee.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),Ee.length&&we.push('<div class="pacom-search-group">智能策略</div>'+Ee.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${Re(ee.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),ke.length&&we.push('<div class="pacom-search-group">图纸与工程文档</div>'+ke.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="${ee.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Re(ee.title)}</span><span class="pacom-badge pacom-badge--neutral">${Re(ee.category)}</span></button>`).join("")),y.length&&we.push('<div class="pacom-search-group">工作区</div>'+y.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#${ee.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${fe(ee.icon,14)}${Re(ee.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),we.length?we.join(""):`<div class="pacom-nav-empty">未找到与「${Re(J)}」匹配的设备、区域、告警、工单或图纸</div>`}function ve(g){g.querySelectorAll("[data-search-hash]").forEach(m=>{m.addEventListener("click",()=>{const y=m.dataset.searchHash||"#home";me=!1,J="",ie(),q=!1,window.location.hash===y?(u=et(),he(!0)):window.location.hash=y})})}function ie(){if(a.querySelector('[data-role="cmd-scrim"]')?.remove(),!me)return;const g=document.createElement("div");g.className="pacom-cmd-scrim",g.dataset.role="cmd-scrim",g.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${fe("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${Re(J)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${V()}
        </div>
      </div>
    `,a.appendChild(g),g.addEventListener("click",d=>{d.target===g&&(me=!1,ie())});const m=g.querySelector('[data-role="cmd-input"]'),y=g.querySelector('[data-role="cmd-body"]');y&&ve(y),m?.focus(),m?.addEventListener("input",d=>{J=d.currentTarget.value,y&&(y.innerHTML=V(),ve(y))})}function _e(){if(!R)return"";const g=n.displayName.slice(0,1)||"U",m=!!(e.createOrganization&&n.role==="org_admin");return`
      <div class="pacom-org-popover ${S?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${P.map(y=>{const d=y.id===F;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${d}" data-pop-org="${Re(y.id)}">
                ${le(y)}
                <span class="pacom-pop-text">
                  <b>${Re(y.name)}</b>
                  <small>${y.projectCount>0?`${y.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${d?fe("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${m?C?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${fe("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${fe("settings",16)}</span>
          <span class="pacom-pop-text">机构与权限</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${Re(g)}</span>
          <span class="pacom-pop-text">
            <b>${Re(n.displayName)}</b>
            <small>${Re(n.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${fe("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function pe(g){switch(te(u)||(u="home",window.location.hash="#home"),document.title=`${at[u]} · PACOM Station`,u){case"home":await Dt(g,e,n);return;case"analysis":await Tt(g,e,n);return;case"alarms":await Kt(g,e,n);return;case"scenes":await os(g,e,n);return;case"settings":await is(g,e,n);return;case"deployment":await as(g,e,n);return;case"account":await Vt(g,e,n,m=>{n=m,Z(),K()},N);return}}async function N(){R=!1,q=!1,me=!1,L();try{await e.logout()}finally{window.location.hash="#login",r()}}function Z(){const g=a.querySelector('[data-role="nav-list"]');g&&(g.innerHTML=oe(),G())}function K(){a.querySelector('[data-role="org-popover"]')?.remove();const g=a.querySelector('[data-role="org-menu-btn"]');if(g&&g.setAttribute("aria-expanded",String(R)),!R)return;const m=document.createElement("div");m.innerHTML=_e().trim();const y=m.firstElementChild;y&&(a.appendChild(y),xe())}function G(){a.querySelectorAll("[data-route]").forEach(g=>{g.addEventListener("click",()=>{const m=g.dataset.route;m===u&&!q||(u=m,q=!1,R=!1,window.location.hash=`#${u}`,he(!0))})})}async function re(g){if(!e.switchOrganization)return;await e.switchOrganization(g),await de();const m=await e.getSpatialTree(),y=m.projects[0],d=y?m.buildings.find(z=>z.projectId===y.id):void 0,I=d?m.floors.find(z=>z.buildingId===d.id&&z.id===$.floorId)??m.floors.find(z=>z.buildingId===d.id):void 0;y&&d&&I?ba({level:"floor",projectId:y.id,buildingId:d.id,floorId:I.id}):y&&d?ba({level:"building",projectId:y.id,buildingId:d.id}):y?ba({level:"project",projectId:y.id}):ba({level:"all-projects"}),R=!1,C=!1,q=!1,await he(!0),ne()}function xe(){a.querySelectorAll("[data-pop-org]").forEach(g=>{g.addEventListener("click",()=>{const m=g.dataset.popOrg;if(m){if(m===F){R=!1,K();return}re(m)}})}),a.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",g=>{g.stopPropagation(),C=!C,K(),C&&a.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),a.querySelector("[data-create-org-form]")?.addEventListener("submit",async g=>{if(g.preventDefault(),!e.createOrganization)return;const m=new FormData(g.currentTarget),y=String(m.get("orgName")??"").trim();if(!y)return;const d=await e.createOrganization(y);await re(d.id)}),a.querySelectorAll('[data-pop-act="go-account"]').forEach(g=>{g.addEventListener("click",()=>{R=!1,C=!1,q=!1,u="account",window.location.hash="#account",he(!0)})}),a.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{N()})}async function he(g){const m=a.querySelector('[data-role="main-stage"]');if(!g&&m){const d=a.querySelector(".pacom-nav-rail");d&&(d.classList.toggle("is-collapsed",S),d.classList.toggle("is-mobile-open",q));const I=a.querySelector('[data-role="mobile-scrim"]');I&&I.classList.toggle("is-open",q),K();return}a.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${fe("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${at[u]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Re(n.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${q?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${S?"is-collapsed":""} ${q?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${ls}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${S?"展开侧栏":"收起侧栏"}" aria-label="${S?"展开侧栏":"收起侧栏"}">
              ${fe("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${fe("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${oe()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${u==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${R}" title="${Re(Y().name)} · ${Re(n.displayName)}">
              ${le(Y())}
              <span class="pacom-org-name">${Re(Y().name)}</span>
              ${fe("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,a.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{S=!S,R=!1,localStorage.setItem(ht,S?"1":"0");const d=a.querySelector(".pacom-nav-rail"),I=a.querySelector('[data-role="toggle-sidebar"]');d&&d.classList.toggle("is-collapsed",S),I&&(I.title=S?"展开侧栏":"收起侧栏",I.setAttribute("aria-label",I.title),I.innerHTML=fe("panel-left",16)),K()}),a.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{R=!1,K(),me=!0,ie()}),a.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{q=!q,he(!1)}),a.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{q=!1,R=!1,he(!1)}),a.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",d=>{d.stopPropagation(),R=!R,K()}),G(),K(),ie();const y=a.querySelector('[data-role="main-stage"]');y&&await pe(y)}const k=g=>{const m=g.target;R&&!m?.closest('[data-role="org-popover"]')&&!m?.closest('[data-role="org-menu-btn"]')&&(R=!1,K())},B=g=>{if((g.metaKey||g.ctrlKey)&&g.key.toLowerCase()==="k"){g.preventDefault(),R=!1,K(),me=!me,ie();return}g.key==="Escape"&&(me?(me=!1,ie()):R?(R=!1,K()):q&&(q=!1,he(!1)))},$e=()=>{u=et(),R=!1,q=!1,me=!1,he(!0),ne()};function L(){document.removeEventListener("click",k),document.removeEventListener("keydown",B),window.removeEventListener("hashchange",$e),_a.get(a)===L&&_a.delete(a)}_a.set(a,L),document.addEventListener("click",k),document.addEventListener("keydown",B),window.addEventListener("hashchange",$e),await he(!0),ne()}const ca=["password","sms"];function ds(a){const e=da(a).replace(/[\s-]/g,"");return/^(\+?86)?1[3-9]\d{9}$/.test(e)}const ja=new WeakMap;function wt(a){ja.get(a)?.()}function ps(a,e,s,r){ja.get(a)?.(),a.classList.add("bare-login"),document.title="登录 · PACOM Station";let n=!1,u=!1,S="",q="",R="",C="",P=!1,F={},J="",me=!1,ce="",se=0,te=null,Y=null,le=null,de=!1,ne="",oe="",V=null,ve=!1;function ie(m){m.key==="Escape"&&le&&(m.preventDefault(),he())}function _e(m){const y=a.querySelector('[data-role="mode-seg"]'),d=y?.querySelector(".au-mode-indicator"),I=y?.querySelector('.au-mode-tab[aria-selected="true"]');!d||!I||(d.style.transition=m?"":"none",d.style.transform=`translateX(${I.offsetLeft}px)`,d.style.width=`${I.offsetWidth}px`,m||(d.offsetWidth,d.style.transition=""))}function pe(){_e(!1)}function N(){ve=!0,te!==null&&(window.clearInterval(te),te=null),Y!==null&&(window.clearTimeout(Y),Y=null),document.removeEventListener("keydown",ie),window.removeEventListener("resize",pe),a.classList.remove("bare-login"),ja.get(a)===N&&ja.delete(a)}document.addEventListener("keydown",ie),window.addEventListener("resize",pe),ja.set(a,N);function Z(m=60){se=m,te!==null&&window.clearInterval(te),te=window.setInterval(()=>{se-=1,se<=0&&(se=0,te!==null&&(window.clearInterval(te),te=null));const y=a.querySelector('[data-act="send-sms"]');y&&(y.disabled=se>0,y.textContent=se>0?`${se} 秒后重发`:ce?"重新获取":"获取验证码")},1e3)}function K(){const m=a.querySelector("#au-login-ferr");if(m)if(J){m.hidden=!1;const y=m.querySelector('[data-role="ferr-text"]');y&&(y.textContent=J)}else m.hidden=!0}function G(m){const y=a.querySelector(`.au-field[data-f="${m}"]`),d=a.querySelector(`#au-${m}`),I=a.querySelector(`#au-${m}-err`),z=F[m]??"";y?.classList.toggle("bad",!!z),d?.setAttribute("aria-invalid",z?"true":"false"),I&&(I.textContent=z)}function re(){const m=a.querySelector('form[data-form="login"] fieldset'),y=a.querySelector('form[data-form="login"] button[type="submit"]');m&&(m.disabled=me),y&&(y.disabled=me,y.innerHTML=me?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"<span>登录</span>")}function xe(m,y){V=y??(document.activeElement instanceof HTMLElement?document.activeElement:null),le=m,B(),m==="reset"?a.querySelector("#au-rs-id")?.focus():a.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function he(){if(!le)return;le=null,Y!==null&&(window.clearTimeout(Y),Y=null),de=!1,B();const m=V;V=null,m&&document.contains(m)&&m.focus({preventScroll:!0})}function k(){if(!le)return"";if(le==="reset"){const m=ne.trim().length>0;return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Lt}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field" style="margin-bottom:0;">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" placeholder="name@company.com 或 11 位手机号" value="${p(ne)}" />
                  </div>
                </div>
                <div class="au-notice-soft" data-role="reset-notice" role="status" aria-live="polite" ${oe?"":"hidden"}>
                  ${Ot}
                  <span data-role="reset-notice-text">${p(oe)}</span>
                </div>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${m?"":"disabled"}>发送验证码</button>
            </div>
          </section>
        </div>
      `}return le==="contact"?At(de):""}function B(){const m=a.querySelector('[data-role="modal-host"]');if(!m||(m.innerHTML=k(),!le))return;m.querySelectorAll('[data-act="close-modal"]').forEach(I=>{I.addEventListener("click",()=>he())}),m.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",I=>{I.target===I.currentTarget&&he()}),m.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{const I=m.querySelector('[data-act="copy-support"]');try{await navigator.clipboard.writeText("support@pacom.cn")}catch{}de=!0,I&&(I.classList.add("is-copied"),I.innerHTML=`${_t}<span>已复制</span>`),Y!==null&&window.clearTimeout(Y),Y=window.setTimeout(()=>{Y=null,de=!1;const z=m.querySelector('[data-act="copy-support"]');z&&(z.classList.remove("is-copied"),z.innerHTML=`${jt}<span>复制</span>`)},1800)});const y=m.querySelector("#au-rs-id"),d=m.querySelector('[data-role="reset-submit"]');y?.addEventListener("input",()=>{ne=y.value,d&&(d.disabled=ne.trim().length===0)}),m.querySelector("#au-reset-form")?.addEventListener("submit",async I=>{if(I.preventDefault(),ne=da(y?.value??""),!ne)oe="请输入电子邮箱或手机号码";else try{oe=`如该账号已注册，验证码已发送至 ${(await e.sendVerificationCode({target:ne,purpose:"reset"})).maskedTarget||Ma(ne)}；如需协助请联系机构管理员。`}catch{oe="请联系机构管理员重置账号密码，或确认后查收重置验证码。"}const z=m.querySelector('[data-role="reset-notice"]'),ue=m.querySelector('[data-role="reset-notice-text"]');z&&ue&&(ue.textContent=oe,z.hidden=!1)})}function $e(){const m=n?`
        <div class="au-field ${F.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入 11 位手机号码" value="${p(R)}" aria-invalid="${F.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${se>0?"disabled":""}>
              ${se>0?`${se} 秒后重发`:ce?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${p(F.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${ce?`验证码已发送至 ${p(ce)}`:""}</p>
        </div>
      `:`
        <div class="au-field ${F.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入电子邮箱或手机号码" value="${p(S)}" aria-invalid="${F.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${p(F.id??"")}</p>
        </div>
      `,y=n?`
        <div class="au-field ${F.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入 6 位短信验证码" value="${p(C)}" aria-invalid="${F.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${p(F.scode??"")}</p>
        </div>
      `:`
        <div class="au-field ${F.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab">
            <label for="au-pwd">密码</label>
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${u?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入密码" value="${p(q)}" aria-invalid="${F.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${u?"隐藏密码":"显示密码"}">
              ${u?$a:ya}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${p(F.pwd??"")}</p>
        </div>
      `,d=a.querySelector('[data-role="fields-host"]');d&&(d.innerHTML=`${m}${y}`,g(d))}function L(m,y=!1){const d=m==="sms";n===d||me||(d&&!R.trim()&&ds(S)?R=S.trim():!d&&!S.trim()&&R.trim()&&(S=R.trim()),n=d,F={},J="",a.querySelectorAll('[data-act="switch-mode"]').forEach(I=>{const z=I.dataset.mode===m;I.setAttribute("aria-selected",String(z)),I.tabIndex=z?0:-1,z&&y&&I.focus({preventScroll:!0})}),_e(!0),$e(),K(),y||(n?ce?a.querySelector("#au-scode")?.focus({preventScroll:!0}):R.trim()?a.querySelector('[data-act="send-sms"]')?.focus({preventScroll:!0}):a.querySelector("#au-sphone")?.focus({preventScroll:!0}):a.querySelector(S.trim()?"#au-pwd":"#au-id")?.focus({preventScroll:!0})))}function g(m){const y=m.querySelector("#au-id"),d=m.querySelector("#au-pwd"),I=m.querySelector("#au-sphone"),z=m.querySelector("#au-scode");y?.addEventListener("input",()=>{S=y.value,(F.id||J)&&(delete F.id,J="",G("id"),K())}),d?.addEventListener("input",()=>{q=d.value,(F.pwd||J)&&(delete F.pwd,J="",G("pwd"),K())}),I?.addEventListener("input",()=>{R=I.value,(F.sphone||J)&&(delete F.sphone,J="",G("sphone"),K())}),z?.addEventListener("input",()=>{C=z.value.replace(/\D/g,"").slice(0,6),z.value=C,(F.scode||J)&&(delete F.scode,J="",G("scode"),K())}),m.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",ue=>{u=!u;const Ee=ue.currentTarget,ke=m.querySelector("#au-pwd");if(ke){const we=ke.selectionStart,ee=ke.selectionEnd;ke.type=u?"text":"password",ke.focus({preventScroll:!0}),we!==null&&ee!==null&&ke.setSelectionRange(we,ee)}Ee.setAttribute("aria-label",u?"隐藏密码":"显示密码"),Ee.innerHTML=u?$a:ya}),m.querySelector('[data-act="send-sms"]')?.addEventListener("click",async()=>{const ue=Aa(R);if(ue){F={...F,sphone:ue},G("sphone"),m.querySelector("#au-sphone")?.focus({preventScroll:!0});return}delete F.sphone,G("sphone");const Ee=m.querySelector('[data-act="send-sms"]');Ee&&(Ee.disabled=!0,Ee.textContent="发送中…");try{const ke=await e.sendVerificationCode({target:da(R),purpose:"login"});if(ve)return;ce=ke.maskedTarget||Ma(R);const we=m.querySelector("#au-sphone-hint");we&&(we.textContent=`验证码已发送至 ${ce}`),Z(ke.cooldownSeconds||60),Ee&&(Ee.disabled=!0,Ee.textContent=`${se} 秒后重发`),m.querySelector("#au-scode")?.focus({preventScroll:!0})}catch(ke){if(ve)return;Ee&&(Ee.disabled=!1,Ee.textContent=ce?"重新获取":"获取验证码"),J=ke instanceof Error?ke.message:"暂时无法发送验证码，请稍后再试。",K()}}),m.querySelector('[data-act="open-reset"]')?.addEventListener("click",ue=>{ne=S.trim(),oe="",xe("reset",ue.currentTarget)})}a.innerHTML=`
    <div class="au au-split au-auth-shell">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${It}</div>
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
                  ${ka}
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
        ${kt()}
      </section>
      <aside class="au-art" aria-hidden="true">
        <div class="au-art-frame">
          <img src="./media/auth-hero.jpg" alt="" />
        </div>
      </aside>
    </div>
    <div data-role="modal-host"></div>
  `,a.querySelector('input[name="keep"]')?.addEventListener("change",m=>{P=m.currentTarget.checked}),a.querySelector('form[data-form="login"]')?.addEventListener("submit",async m=>{if(m.preventDefault(),!me){if(F={},J="",n){const y=Aa(R);y&&(F.sphone=y),/^\d{6}$/.test(C.trim())||(F.scode="请输入 6 位验证码"),G("sphone"),G("scode")}else S.trim()||(F.id="请输入电子邮箱或手机号码"),q||(F.pwd="请输入密码"),G("id"),G("pwd");if(K(),Object.keys(F).length>0){const y=Object.keys(F)[0];a.querySelector(`#au-${y}`)?.focus({preventScroll:!0});return}me=!0,re();try{const y=await e.login({account:da(n?R:S),password:n?C.trim():q});N(),s(y)}catch(y){me=!1,J=y instanceof Error?y.message:"账户或密码不正确",re(),K()}}}),a.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{r?.onOpenRegister?(N(),r.onOpenRegister()):window.location.hash="#register"}),a.querySelectorAll('[data-act="switch-mode"]').forEach(m=>{m.addEventListener("click",()=>{const y=m.dataset.mode;y&&L(y,!1)}),m.addEventListener("keydown",y=>{const d=n?"sms":"password",I=ca.indexOf(d);y.key==="ArrowRight"?(y.preventDefault(),L(ca[(I+1)%ca.length],!0)):y.key==="ArrowLeft"?(y.preventDefault(),L(ca[(I-1+ca.length)%ca.length],!0)):y.key==="Home"?(y.preventDefault(),L(ca[0],!0)):y.key==="End"&&(y.preventDefault(),L(ca[ca.length-1],!0))})}),a.querySelector('[data-act="open-contact"]')?.addEventListener("click",m=>{de=!1,xe("contact",m.currentTarget)}),$e(),_e(!1),document.fonts?.ready.then(()=>{ve||_e(!1)})}const ra=["join","apply"],fa=1e3,ha=50,St=110,La=new WeakMap;function xt(a){La.get(a)?.()}function us(a,e,s){La.get(a)?.(),a.classList.add("bare-login");let r=!1,n=s.initialMode??"join",u=null,S=!1,q=null,R=null,C=null,P=null,F=!1;const J=(s.inviteToken??"").trim();let me=!!J,ce=null,se="",te="",Y="",le=!1,de=!1,ne=tt(s.prefillCode??""),oe="",V=!1,ve=0,ie="",_e="",pe="",N="",Z="",K=!1,G=!1,re="",xe=0,he=null,k="",B="",$e="",L="",g="",m="",y="",d="",I="",z="",ue=!1,Ee="",ke=0,we=null,ee=null,c={},v="",D=!1;const Q=qt();function ye(x){if(x.key==="Escape"){if(Q.isOpen()){x.preventDefault(),Q.close(!0);return}u&&(x.preventDefault(),pa())}}function Fe(x){const O=a.querySelector('[data-role="reg-seg"]'),W=O?.querySelector(".au-mode-indicator"),ae=O?.querySelector('.au-mode-tab[aria-selected="true"]');!W||!ae||(W.style.transition=x?"":"none",W.style.transform=`translateX(${ae.offsetLeft}px)`,W.style.width=`${ae.offsetWidth}px`,x||(W.offsetWidth,W.style.transition=""))}function We(){Fe(!1)}function Le(){r=!0,Q.destroy(),he!==null&&(window.clearInterval(he),he=null),we!==null&&(window.clearInterval(we),we=null),ee!==null&&(window.clearTimeout(ee),ee=null),document.removeEventListener("keydown",ye),window.removeEventListener("resize",We),a.classList.remove("bare-login"),La.get(a)===Le&&La.delete(a)}document.addEventListener("keydown",ye),window.addEventListener("resize",We),La.set(a,Le);function Ne(x){xe=x,he!==null&&window.clearInterval(he),he=window.setInterval(()=>{xe-=1,xe<=0&&(xe=0,he!==null&&(window.clearInterval(he),he=null));const O=a.querySelector('[data-act="jn-send-code"]');O&&(O.disabled=xe>0,O.textContent=xe>0?`${xe} 秒后重发`:re?"重新获取":"获取验证码")},1e3)}function Xe(x){ke=x,we!==null&&window.clearInterval(we),we=window.setInterval(()=>{ke-=1,ke<=0&&(ke=0,we!==null&&(window.clearInterval(we),we=null));const O=a.querySelector('[data-act="ap-send-code"]');O&&(O.disabled=ke>0,O.textContent=ke>0?`${ke} 秒后重发`:Ee?"重新获取":"获取验证码")},1e3)}function H(){const x=a.querySelector("#au-reg-ferr");if(x)if(v){x.hidden=!1;const O=x.querySelector('[data-role="ferr-text"]');O&&(O.textContent=v)}else x.hidden=!0}function U(x){const O=a.querySelector(`.au-field[data-f="${x}"]`),W=a.querySelector(`#au-${x}`),ae=a.querySelector(`#au-${x}-err`),Se=c[x]??"";O?.classList.toggle("bad",!!Se),W?.setAttribute("aria-invalid",Se?"true":"false"),ae&&(ae.textContent=Se)}function Be(x,O){const W=a.querySelector("form[data-reg-form] fieldset"),ae=a.querySelector('form[data-reg-form] button[type="submit"]');W&&(W.disabled=D),ae&&(ae.disabled=D,ae.innerHTML=D?`<span class="au-spinner" aria-hidden="true"></span><span>${p(x)}</span>`:`<span>${p(O)}</span>`)}function ea(x,O){Q.close(!1),q=O??(document.activeElement instanceof HTMLElement?document.activeElement:null),u=x,Ce(),a.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function pa(){if(!u)return;u=null,R=null,ee!==null&&(window.clearTimeout(ee),ee=null),S=!1,Ce();const x=q;q=null,x&&document.contains(x)&&x.focus({preventScroll:!0})}function Ca(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">请阅读并同意</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Lt}</button>
          </div>
          <div class="db">
            <p class="au-dlead" style="margin-bottom:0;">
              发送验证码前，请先阅读并同意 PACOM
              <a class="au-consent-link" href="${Da}" target="_blank" rel="noopener noreferrer">隐私政策</a>和<a class="au-consent-link" href="${Da}" target="_blank" rel="noopener noreferrer">使用条款</a>。
            </p>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="consent-confirm">同意并发送</button>
          </div>
        </section>
      </div>
    `}function Ce(){const x=a.querySelector('[data-role="modal-host"]');if(x){if(!u){x.innerHTML="";return}x.innerHTML=u==="contact"?At(S):Ca(),x.querySelectorAll('[data-act="close-modal"]').forEach(O=>{O.addEventListener("click",()=>pa())}),x.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",O=>{O.target===O.currentTarget&&pa()}),x.querySelector('[data-act="consent-confirm"]')?.addEventListener("click",()=>{const O=R;R=null,u=null,Ce(),O?.()}),x.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{const O=x.querySelector('[data-act="copy-support"]');try{await navigator.clipboard.writeText("support@pacom.cn")}catch{}S=!0,O&&(O.classList.add("is-copied"),O.innerHTML=`${_t}<span>已复制</span>`),ee!==null&&window.clearTimeout(ee),ee=window.setTimeout(()=>{ee=null,S=!1;const W=x.querySelector('[data-act="copy-support"]');W&&(W.classList.remove("is-copied"),W.innerHTML=`${jt}<span>复制</span>`)},1800)})}}function wa(x,O,W,ae){return`
      <div class="au-field au-consent-field ${c[ae]?"bad":""}" data-f="${ae}">
        <div class="au-check au-consent-row">
          <input id="${x}" type="checkbox" name="${O}" ${W?"checked":""} aria-invalid="${c[ae]?"true":"false"}" />
          <span class="au-consent-text">
            <label class="au-consent-label" for="${x}">我已阅读并同意 PACOM </label><a class="au-consent-link" href="${Da}" target="_blank" rel="noopener noreferrer">隐私政策</a><label class="au-consent-label" for="${x}">和</label><a class="au-consent-link" href="${Da}" target="_blank" rel="noopener noreferrer">使用条款</a>
          </span>
        </div>
        <p class="au-err" id="au-${ae}-err" aria-live="polite">${p(c[ae]??"")}</p>
      </div>
    `}async function Sa(x){const O=x.replace(/\D/g,"");if(O.length!==9){oe="",V=!1,Ve();return}const W=++ve;V=!0,oe="",Ve();try{const ae=await e.resolveInviteCode(O);if(r||W!==ve)return;V=!1,ae.valid&&ae.organizationName?(oe=ae.organizationName,delete c.jn_code):(oe="",c.jn_code=ae.message??"邀请码不正确或已失效，请向机构管理员确认。"),U("jn_code"),Ve()}catch(ae){if(r||W!==ve)return;V=!1,oe="",c.jn_code=ae instanceof Error?ae.message:"暂时无法核验邀请码，请稍后再试。",U("jn_code"),Ve()}}function Ve(){const x=a.querySelector('[data-role="jn-code-match"]'),O=a.querySelector('[data-role="jn-nocode-wrap"]');x&&(oe?(x.hidden=!1,x.innerHTML=`${nt}<span>目标机构：${p(oe)}</span>`):(x.hidden=!0,x.innerHTML="")),O&&(O.hidden=!!oe)}function Pe(){const x=`
      <span data-role="jn-nocode-wrap" ${oe?"hidden":""}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-nocode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-nocode-pop"><span>没有邀请码？</span></button>
        <span id="au-jn-nocode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="没有邀请码说明" hidden>
          <span class="ws-info-text">请向所在机构的管理员获取 9 位邀请码；如需为新企业开通，请切换上方「申请开通机构」。</span>
        </span>
      </span>
    `,O=`
      <span data-role="jn-novcode-wrap" ${re?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-jn-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认邮箱或手机号码无误，检查垃圾邮件或短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">填写机构 9 位邀请码，管理员批准后即可访问。</p>
      <form class="au-compact-form au-reg-form" data-reg-form="join" novalidate>
        <fieldset ${D?"disabled":""}>
          <div class="au-field ${c.jn_code?"bad":""}" data-f="jn_code">
            <div class="au-lab">
              <label for="au-jn_code">机构邀请码</label>
              ${x}
            </div>
            <div class="au-ctl">
              <input id="au-jn_code" name="jn_code" class="au-in" type="text" inputmode="numeric" autocomplete="off" maxlength="11" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入 9 位机构邀请码" value="${p(ne)}" aria-invalid="${c.jn_code?"true":"false"}" />
            </div>
            <div class="au-code-match" data-role="jn-code-match" role="status" aria-live="polite" ${oe?"":"hidden"}>
              ${oe?`${nt}<span>目标机构：${p(oe)}</span>`:""}
            </div>
            <p class="au-err" id="au-jn_code-err" aria-live="polite">${p(c.jn_code??"")}</p>
          </div>

          <div class="au-field ${c.jn_name?"bad":""}" data-f="jn_name">
            <div class="au-lab"><label for="au-jn_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-jn_name" name="jn_name" class="au-in" type="text" autocomplete="name" placeholder="请输入姓名" value="${p(ie)}" aria-invalid="${c.jn_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_name-err" aria-live="polite">${p(c.jn_name??"")}</p>
          </div>

          <div class="au-field ${c.jn_dept?"bad":""}" data-f="jn_dept">
            <div class="au-lab"><label for="au-jn_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-jn_dept" name="jn_dept" class="au-in" type="text" autocomplete="organization-title" placeholder="例如：运维部 · 电气工程师" value="${p(_e)}" aria-invalid="${c.jn_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_dept-err" aria-live="polite">${p(c.jn_dept??"")}</p>
          </div>

          <div class="au-field ${c.jn_account?"bad":""}" data-f="jn_account">
            <div class="au-lab"><label for="au-jn_account">电子邮箱或手机号码</label></div>
            <div class="au-ctl">
              <input id="au-jn_account" name="jn_account" class="au-in has-code-btn" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入电子邮箱或手机号码" value="${p(pe)}" aria-invalid="${c.jn_account?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="jn-send-code" ${xe>0?"disabled":""}>
                ${xe>0?`${xe} 秒后重发`:re?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-jn_account-err" aria-live="polite">${p(c.jn_account??"")}</p>
            <p class="au-hint" id="au-jn_account-hint" role="status" aria-live="polite">${re?`验证码已发送至 ${p(re)}`:""}</p>
          </div>

          <div class="au-field ${c.jn_vcode?"bad":""}" data-f="jn_vcode">
            <div class="au-lab">
              <label for="au-jn_vcode">验证码</label>
              ${O}
            </div>
            <div class="au-ctl">
              <input id="au-jn_vcode" name="jn_vcode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入 6 位验证码" value="${p(N)}" aria-invalid="${c.jn_vcode?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_vcode-err" aria-live="polite">${p(c.jn_vcode??"")}</p>
          </div>

          <div class="au-field ${c.jn_pwd?"bad":""}" data-f="jn_pwd">
            <div class="au-lab au-label-row">
              <span class="au-lab-group">
                <label for="au-jn_pwd">设置密码</label>
                ${Ha("au-jn-pwd-info","设置密码说明",ot)}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-jn_pwd" name="jn_pwd" class="au-in has-suffix" type="${K?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请设置登录密码" value="${p(Z)}" aria-invalid="${c.jn_pwd?"true":"false"}" />
              <button type="button" class="au-suffix au-eye" data-act="jn-toggle-eye" aria-controls="au-jn_pwd" aria-label="${K?"隐藏密码":"显示密码"}">
                ${K?$a:ya}
              </button>
            </div>
            <p class="au-err" id="au-jn_pwd-err" aria-live="polite">${p(c.jn_pwd??"")}</p>
          </div>

          ${wa("au-jn_consent","jn_consent",G,"jn_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${v?"":"hidden"}>
            ${ka}
            <span data-role="ferr-text">${p(v)}</span>
          </div>

          <button type="submit" class="au-primary au-compact-primary" ${D?"disabled":""}>
            ${D?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>注册并申请加入</span>"}
          </button>
        </fieldset>
      </form>
    `}function Ze(){const x=it($e),O=ma(z),W=O>=fa*.8?`${O} / ${fa}`:"",ae=`
      <span data-role="ap-novcode-wrap" ${Ee?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-ap-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-ap-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-ap-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">提交企业信息，经 PACOM 审核通过后开通机构。</p>
      <form class="au-compact-form au-reg-form" data-reg-form="apply" novalidate>
        <fieldset ${D?"disabled":""}>
          <div class="au-field ${c.ap_org?"bad":""}" data-f="ap_org">
            <div class="au-lab au-label-row">
              <span class="au-lab-group">
                <label for="au-ap_org">机构名称</label>
                ${Ha("au-ap-org-info","机构名称说明",["请填写营业执照等登记证书上的完整名称。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_org" name="ap_org" class="au-in" type="text" autocomplete="organization" placeholder="请输入机构完整名称" value="${p(k)}" aria-invalid="${c.ap_org?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_org-err" aria-live="polite">${p(c.ap_org??"")}</p>
          </div>

          <div class="au-field ${c.ap_ind?"bad":""}" data-f="ap_ind">
            <div class="au-lab"><label for="au-ap_ind">所属行业</label></div>
            <div class="au-select-wrap">
              <select id="au-ap_ind" name="ap_ind" class="au-select ${B?"":"is-placeholder"}" aria-invalid="${c.ap_ind?"true":"false"}">
                <option value="" ${B?"":"selected"}>请选择行业</option>
                ${zt.map(Se=>`<option value="${p(Se)}" ${B===Se?"selected":""}>${p(Se)}</option>`).join("")}
              </select>
              ${Wa}
            </div>
            <p class="au-err" id="au-ap_ind-err" aria-live="polite">${p(c.ap_ind??"")}</p>
          </div>

          <div class="au-field ${c.ap_region?"bad":""}" data-f="ap_region">
            <div class="au-lab"><label for="au-ap_prov">所在地区</label></div>
            <div class="au-row-eq">
              <div class="au-select-wrap">
                <select id="au-ap_prov" name="ap_prov" class="au-select ${$e?"":"is-placeholder"}" aria-label="省份" aria-invalid="${c.ap_region?"true":"false"}">
                  <option value="" ${$e?"":"selected"}>省份</option>
                  ${Mt.map(([Se])=>`<option value="${p(Se)}" ${$e===Se?"selected":""}>${p(Se)}</option>`).join("")}
                </select>
                ${Wa}
              </div>
              <div class="au-select-wrap">
                <select id="au-ap_city" name="ap_city" class="au-select ${L?"":"is-placeholder"}" aria-label="城市" ${$e?"":"disabled"} aria-invalid="${c.ap_region?"true":"false"}">
                  <option value="" ${L?"":"selected"}>城市</option>
                  ${x.map(Se=>`<option value="${p(Se)}" ${L===Se?"selected":""}>${p(Se)}</option>`).join("")}
                </select>
                ${Wa}
              </div>
            </div>
            <p class="au-err" id="au-ap_region-err" aria-live="polite">${p(c.ap_region??"")}</p>
          </div>

          <div class="au-field ${c.ap_name?"bad":""}" data-f="ap_name">
            <div class="au-lab"><label for="au-ap_name">联系人姓名</label></div>
            <div class="au-ctl">
              <input id="au-ap_name" name="ap_name" class="au-in" type="text" autocomplete="name" placeholder="请输入项目负责人或联系人姓名" value="${p(g)}" aria-invalid="${c.ap_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_name-err" aria-live="polite">${p(c.ap_name??"")}</p>
          </div>

          <div class="au-field ${c.ap_dept?"bad":""}" data-f="ap_dept">
            <div class="au-lab"><label for="au-ap_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-ap_dept" name="ap_dept" class="au-in" type="text" autocomplete="organization-title" placeholder="例如：设施运维部 · 部门经理" value="${p(m)}" aria-invalid="${c.ap_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_dept-err" aria-live="polite">${p(c.ap_dept??"")}</p>
          </div>

          <div class="au-field ${c.ap_email?"bad":""}" data-f="ap_email">
            <div class="au-lab"><label for="au-ap_email">电子邮箱</label></div>
            <div class="au-ctl">
              <input id="au-ap_email" name="ap_email" class="au-in" type="email" inputmode="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="用于接收审核结果与开通链接" value="${p(y)}" aria-invalid="${c.ap_email?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_email-err" aria-live="polite">${p(c.ap_email??"")}</p>
          </div>

          <div class="au-field ${c.ap_phone?"bad":""}" data-f="ap_phone">
            <div class="au-lab"><label for="au-ap_phone">手机号码</label></div>
            <div class="au-ctl">
              <input id="au-ap_phone" name="ap_phone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入 11 位手机号码" value="${p(d)}" aria-invalid="${c.ap_phone?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="ap-send-code" ${ke>0?"disabled":""}>
                ${ke>0?`${ke} 秒后重发`:Ee?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-ap_phone-err" aria-live="polite">${p(c.ap_phone??"")}</p>
            <p class="au-hint" id="au-ap_phone-hint" role="status" aria-live="polite">${Ee?`验证码已发送至 ${p(Ee)}`:""}</p>
          </div>

          <div class="au-field ${c.ap_sms?"bad":""}" data-f="ap_sms">
            <div class="au-lab">
              <label for="au-ap_sms">验证码</label>
              ${ae}
            </div>
            <div class="au-ctl">
              <input id="au-ap_sms" name="ap_sms" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请输入 6 位短信验证码" value="${p(I)}" aria-invalid="${c.ap_sms?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_sms-err" aria-live="polite">${p(c.ap_sms??"")}</p>
          </div>

          <div class="au-field ${c.ap_overview?"bad":""}" data-f="ap_overview">
            <div class="au-lab"><label for="au-ap_overview">项目概况<span class="fld-opt">选填</span></label></div>
            <div class="ws-textarea-shell au-note-shell">
              <textarea id="au-ap_overview" name="ap_overview" class="au-in au-ta au-ta-std" rows="3" placeholder="例如楼宇数量、终端规模或试点部署需求" aria-invalid="${c.ap_overview?"true":"false"}">${p(z)}</textarea>
              <button type="button" class="ws-resize" data-space-resize="au-ap_overview" aria-label="调整项目概况输入框高度；按上下方向键调整"></button>
            </div>
            <p class="au-err" id="au-ap_overview-err" aria-live="polite">${p(c.ap_overview??"")}</p>
            <p class="au-hint au-char-count" id="au-ap_overview-count" ${W?"":"hidden"}>${p(W)}</p>
          </div>

          ${wa("au-ap_consent","ap_consent",ue,"ap_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${v?"":"hidden"}>
            ${ka}
            <span data-role="ferr-text">${p(v)}</span>
          </div>

          <button type="submit" class="au-primary au-compact-primary" ${D?"disabled":""}>
            ${D?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>提交开通申请</span>"}
          </button>
        </fieldset>
      </form>
    `}async function Oe(){const x=Ga(pe);if(x){c.jn_account=x,U("jn_account"),a.querySelector("#au-jn_account")?.focus({preventScroll:!0});return}delete c.jn_account,U("jn_account");const O=a.querySelector('[data-act="jn-send-code"]');O&&(O.disabled=!0,O.textContent="发送中…");try{const W=await e.sendVerificationCode({target:da(pe),purpose:"register_join",consentAcceptedAt:new Date().toISOString()});if(r)return;re=W.maskedTarget||Ma(pe);const ae=a.querySelector("#au-jn_account-hint");ae&&(ae.textContent=`验证码已发送至 ${re}`);const Se=a.querySelector('[data-role="jn-novcode-wrap"]');Se&&(Se.hidden=!1),Ne(W.cooldownSeconds||60),O&&(O.disabled=!0,O.textContent=`${xe} 秒后重发`),a.querySelector("#au-jn_vcode")?.focus({preventScroll:!0})}catch(W){if(r)return;O&&(O.disabled=!1,O.textContent=re?"重新获取":"获取验证码"),v=W instanceof Error?W.message:"暂时无法发送验证码，请稍后再试。",H()}}async function aa(){const x=Aa(d);if(x){c.ap_phone=x,U("ap_phone"),a.querySelector("#au-ap_phone")?.focus({preventScroll:!0});return}delete c.ap_phone,U("ap_phone");const O=a.querySelector('[data-act="ap-send-code"]');O&&(O.disabled=!0,O.textContent="发送中…");try{const W=await e.sendVerificationCode({target:da(d),purpose:"org_apply",consentAcceptedAt:new Date().toISOString()});if(r)return;Ee=W.maskedTarget||Ma(d);const ae=a.querySelector("#au-ap_phone-hint");ae&&(ae.textContent=`验证码已发送至 ${Ee}`);const Se=a.querySelector('[data-role="ap-novcode-wrap"]');Se&&(Se.hidden=!1),Xe(W.cooldownSeconds||60),O&&(O.disabled=!0,O.textContent=`${ke} 秒后重发`),a.querySelector("#au-ap_sms")?.focus({preventScroll:!0})}catch(W){if(r)return;O&&(O.disabled=!1,O.textContent=Ee?"重新获取":"获取验证码"),v=W instanceof Error?W.message:"暂时无法发送验证码，请稍后再试。",H()}}function xa(x){Q.bind(x);const O=x.querySelector("#au-jn_code"),W=x.querySelector("#au-jn_name"),ae=x.querySelector("#au-jn_dept"),Se=x.querySelector("#au-jn_account"),He=x.querySelector("#au-jn_vcode"),ze=x.querySelector("#au-jn_pwd"),Me=x.querySelector("#au-jn_consent");O?.addEventListener("input",()=>{ne=tt(O.value),O.value=ne,(c.jn_code||v)&&(delete c.jn_code,v="",U("jn_code"),H()),Sa(ne)}),W?.addEventListener("input",()=>{ie=W.value,(c.jn_name||v)&&(delete c.jn_name,v="",U("jn_name"),H())}),ae?.addEventListener("input",()=>{_e=ae.value,c.jn_dept&&(delete c.jn_dept,U("jn_dept"))}),Se?.addEventListener("input",()=>{pe=Se.value,(c.jn_account||v)&&(delete c.jn_account,v="",U("jn_account"),H())}),He?.addEventListener("input",()=>{N=He.value.replace(/\D/g,"").slice(0,6),He.value=N,(c.jn_vcode||v)&&(delete c.jn_vcode,v="",U("jn_vcode"),H())}),ze?.addEventListener("input",()=>{Z=ze.value,(c.jn_pwd||v)&&(delete c.jn_pwd,v="",U("jn_pwd"),H())}),Me?.addEventListener("change",()=>{G=Me.checked,G&&c.jn_consent&&(delete c.jn_consent,U("jn_consent"))}),x.querySelector('[data-act="jn-toggle-eye"]')?.addEventListener("click",Ke=>{K=!K;const Ge=Ke.currentTarget;if(ze){const la=ze.selectionStart,ta=ze.selectionEnd;ze.type=K?"text":"password",ze.focus({preventScroll:!0}),la!==null&&ta!==null&&ze.setSelectionRange(la,ta)}Ge.setAttribute("aria-label",K?"隐藏密码":"显示密码"),Ge.innerHTML=K?$a:ya}),x.querySelector('[data-act="jn-send-code"]')?.addEventListener("click",Ke=>{const Ge=Ga(pe);if(Ge){c.jn_account=Ge,U("jn_account"),Se?.focus({preventScroll:!0});return}if(!G){R=()=>{G=!0,Me&&(Me.checked=!0),delete c.jn_consent,U("jn_consent"),Oe()},ea("consent_ask",Ke.currentTarget);return}Oe()}),x.querySelector('form[data-reg-form="join"]')?.addEventListener("submit",async Ke=>{if(Ke.preventDefault(),D)return;c={},v="";const Ge=ne.replace(/\D/g,"");if(Ge.length!==9)c.jn_code="请输入 9 位机构邀请码";else if(!oe&&!V){const Ue=await e.resolveInviteCode(Ge);Ue.valid&&Ue.organizationName?(oe=Ue.organizationName,Ve()):c.jn_code=Ue.message??"邀请码不正确或已失效，请向机构管理员确认。"}ie.trim()?ma(ie.trim())>ha&&(c.jn_name=`姓名不超过 ${ha} 个字`):c.jn_name="请输入姓名";const la=Ga(pe);la&&(c.jn_account=la),/^\d{6}$/.test(N.trim())||(c.jn_vcode="请输入 6 位验证码");const ta=st(Z);ta&&(c.jn_pwd=ta),G||(c.jn_consent="请阅读并同意隐私政策和使用条款");for(const Ue of["jn_code","jn_name","jn_account","jn_vcode","jn_pwd","jn_consent"])U(Ue);if(H(),Object.keys(c).length>0){const Ue=Object.keys(c)[0];x.querySelector(`#au-${Ue}`)?.focus({preventScroll:!0});return}D=!0,Be("正在提交…","注册并申请加入");try{C=await e.registerAndJoin({inviteCode:Ge,displayName:ie.trim(),departmentTitle:_e.trim()||void 0,account:da(pe),verificationCode:N.trim(),password:Z,consentAcceptedAt:new Date().toISOString()}),D=!1,ia()}catch(Ue){D=!1,v=Ue instanceof Error?Ue.message:"暂时无法提交申请，请稍后再试。",Be("正在提交…","注册并申请加入"),H()}})}function ua(x){Q.bind(x),Rt(x);const O=x.querySelector("#au-ap_org"),W=x.querySelector("#au-ap_ind"),ae=x.querySelector("#au-ap_prov"),Se=x.querySelector("#au-ap_city"),He=x.querySelector("#au-ap_name"),ze=x.querySelector("#au-ap_dept"),Me=x.querySelector("#au-ap_email"),Ke=x.querySelector("#au-ap_phone"),Ge=x.querySelector("#au-ap_sms"),la=x.querySelector("#au-ap_overview"),ta=x.querySelector("#au-ap_overview-count"),Ue=x.querySelector("#au-ap_consent");O?.addEventListener("input",()=>{k=O.value,(c.ap_org||v)&&(delete c.ap_org,v="",U("ap_org"),H())}),W?.addEventListener("change",()=>{B=W.value,W.classList.toggle("is-placeholder",!B),c.ap_ind&&(delete c.ap_ind,U("ap_ind"))}),ae?.addEventListener("change",()=>{$e=ae.value,ae.classList.toggle("is-placeholder",!$e);const Ye=it($e);L=Ye.length===1?Ye[0]:"",Se&&(Se.disabled=!$e,Se.innerHTML=`<option value="" ${L?"":"selected"}>城市</option>`+Ye.map(na=>`<option value="${p(na)}" ${L===na?"selected":""}>${p(na)}</option>`).join(""),Se.classList.toggle("is-placeholder",!L)),$e&&L&&c.ap_region&&(delete c.ap_region,U("ap_region"))}),Se?.addEventListener("change",()=>{L=Se.value,Se.classList.toggle("is-placeholder",!L),$e&&L&&c.ap_region&&(delete c.ap_region,U("ap_region"))}),He?.addEventListener("input",()=>{g=He.value,(c.ap_name||v)&&(delete c.ap_name,v="",U("ap_name"),H())}),ze?.addEventListener("input",()=>{m=ze.value}),Me?.addEventListener("input",()=>{y=Me.value,(c.ap_email||v)&&(delete c.ap_email,v="",U("ap_email"),H())}),Ke?.addEventListener("input",()=>{d=Ke.value,(c.ap_phone||v)&&(delete c.ap_phone,v="",U("ap_phone"),H())}),Ge?.addEventListener("input",()=>{I=Ge.value.replace(/\D/g,"").slice(0,6),Ge.value=I,(c.ap_sms||v)&&(delete c.ap_sms,v="",U("ap_sms"),H())}),la?.addEventListener("input",()=>{z=la.value;const Ye=ma(z);ta&&(Ye>=fa*.8?(ta.textContent=`${Ye} / ${fa}`,ta.hidden=!1):ta.hidden=!0),c.ap_overview&&Ye<=fa&&(delete c.ap_overview,U("ap_overview"))}),Ue?.addEventListener("change",()=>{ue=Ue.checked,ue&&c.ap_consent&&(delete c.ap_consent,U("ap_consent"))}),x.querySelector('[data-act="ap-send-code"]')?.addEventListener("click",Ye=>{const na=Aa(d);if(na){c.ap_phone=na,U("ap_phone"),Ke?.focus({preventScroll:!0});return}if(!ue){R=()=>{ue=!0,Ue&&(Ue.checked=!0),delete c.ap_consent,U("ap_consent"),aa()},ea("consent_ask",Ye.currentTarget);return}aa()}),x.querySelector('form[data-reg-form="apply"]')?.addEventListener("submit",async Ye=>{if(Ye.preventDefault(),D)return;c={},v="",k.trim()?ma(k.trim())>St&&(c.ap_org=`机构名称不超过 ${St} 个字`):c.ap_org="请输入机构名称",B||(c.ap_ind="请选择所属行业"),(!$e||!L)&&(c.ap_region="请选择所在地区"),g.trim()?ma(g.trim())>ha&&(c.ap_name=`联系人姓名不超过 ${ha} 个字`):c.ap_name="请输入联系人姓名",Pt(y)||(c.ap_email="请输入有效的电子邮箱");const na=Aa(d);na&&(c.ap_phone=na),/^\d{6}$/.test(I.trim())||(c.ap_sms="请输入 6 位短信验证码"),ma(z)>fa&&(c.ap_overview=`项目概况不超过 ${fa} 个字`),ue||(c.ap_consent="请阅读并同意隐私政策和使用条款");for(const _ of["ap_org","ap_ind","ap_region","ap_name","ap_email","ap_phone","ap_sms","ap_overview","ap_consent"])U(_);if(H(),Object.keys(c).length>0){const _=Object.keys(c)[0],Va=_==="ap_region"?$e?"au-ap_city":"au-ap_prov":`au-${_}`;x.querySelector(`#${Va}`)?.focus({preventScroll:!0});return}D=!0,Be("正在提交…","提交开通申请");try{P=await e.submitOrgApplication({organizationName:k.trim(),industry:B,province:$e,city:L,contactName:g.trim(),departmentTitle:m.trim()||void 0,email:da(y),phone:da(d),smsCode:I.trim(),projectOverview:z.trim()||void 0,consentAcceptedAt:new Date().toISOString()}),D=!1,ia()}catch(_){D=!1,v=_ instanceof Error?_.message:"暂时无法提交开通申请，请稍后再试。",Be("正在提交…","提交开通申请"),H()}})}function Te(){Q.close(!1);const x=a.querySelector('[data-role="reg-body-host"]');x&&(n==="join"?(x.innerHTML=Pe(),xa(x)):(x.innerHTML=Ze(),ua(x)))}function oa(x,O=!1){n===x||D||(n=x,c={},v="",a.querySelectorAll('[data-act="switch-reg-tab"]').forEach(W=>{const ae=W.dataset.tab===x;W.setAttribute("aria-selected",String(ae)),W.tabIndex=ae?0:-1,ae&&O&&W.focus({preventScroll:!0})}),Fe(!0),Te())}function Ta(){if(P)return{centerCls:"au-center--status",title:"开通申请已提交 · PACOM Station",bodyHtml:`
          <div class="au-status-badge" aria-hidden="true">${lt}</div>
          <h1 class="au-h1 au-h1--sub">开通申请已提交</h1>
          <p class="au-lead">审核通常需要 1–2 个工作日，通过后将开通链接发送至你的邮箱。</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">申请单号</span><span class="au-summary-v is-mono">${p(P.applicationId)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">申请机构</span><span class="au-summary-v">${p(P.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">所在地区</span><span class="au-summary-v">${p(P.region)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">通知邮箱</span><span class="au-summary-v">${p(P.maskedEmail)}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct">需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button></p>
          </div>
        `};const x=C;return{centerCls:"au-center--status",title:"加入申请已提交 · PACOM Station",bodyHtml:`
        <div class="au-status-badge" aria-hidden="true">${lt}</div>
        <h1 class="au-h1 au-h1--sub">加入申请已提交</h1>
        <p class="au-lead"><b>${p(x.organizationName)}</b> 的机构管理员批准后，你会收到通知，届时即可登录访问。</p>
        <div class="au-summary-card">
          <div class="au-summary-row"><span class="au-summary-k">申请单号</span><span class="au-summary-v is-mono">${p(x.requestId)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${p(x.organizationName)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">登录账号</span><span class="au-summary-v">${p(x.maskedAccount)}</span></div>
        </div>
        <div class="au-ferr" id="au-reg-ferr" role="alert" ${v?"":"hidden"}>
          ${ka}
          <span data-role="ferr-text">${p(v)}</span>
        </div>
        <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
        <div class="au-login-actions">
          <div class="au-login-divider" aria-hidden="true"></div>
          <p class="au-noacct">
            ${e.withdrawJoinApplication?`<button type="button" class="au-inline" data-act="withdraw-join" ${F?"disabled":""}>${F?"正在撤回…":"撤回申请"}</button><span class="au-dot-sep">·</span>`:""}
            需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button>
          </p>
        </div>
      `}}function Ba(){if(me)return{centerCls:"au-center--status",title:"验证邀请 · PACOM Station",bodyHtml:`
          <h1 class="au-h1 au-h1--sub">正在核验邀请链接…</h1>
          <p class="au-lead">请稍候，正在确认所属机构与授权信息。</p>
        `};if(se||!ce||ce.status!=="pending"){const ze=se||(ce?.inviterName&&ce?.organizationName?`${ce.inviterName}邀请你加入${ce.organizationName}，该邀请已过期或已撤销。`:"邀请链接无效、已过期或已撤销，请联系邀请人或机构管理员重新发送。");return{centerCls:"au-center--status",title:"邀请已失效 · PACOM Station",bodyHtml:`
          <h1 class="au-h1 au-h1--sub">邀请已失效</h1>
          <p class="au-lead">${p(ze)}</p>
          <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct">需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button></p>
          </div>
        `}}const x=ce,O=x.kind==="owner",W=O?`开通${x.organizationName}`:`加入${x.organizationName}`,ae=O?`机构审核已通过，请设置登录密码完成开通 · ${p(x.expiresAt)} 前有效`:`<b>${p(x.inviterName||"机构管理员")}</b>邀请你以<b>${p(x.roleLabel||"成员")}</b>身份加入 · ${p(x.expiresAt)} 前有效`,Se=x.targetChannel==="phone"?"受邀手机号码":"受邀电子邮箱",He=O?"激活并进入工作区":"注册并加入";return{centerCls:"au-center--invite",title:`${W} · PACOM Station`,bodyHtml:`
        <h1 class="au-h1 au-h1--sub">${p(W)}</h1>
        <p class="au-lead">${ae}</p>
        <form class="au-compact-form au-reg-form" data-reg-form="invite" novalidate>
          <fieldset ${D?"disabled":""}>
            <div class="au-field">
              <div class="au-lab"><span class="au-lab-t">${Se}</span></div>
              <div class="au-locked-card">
                <span class="au-locked-val">${p(x.targetValue)}</span>
                <span class="au-locked-tag">${Ft}<span>已核验锁定</span></span>
              </div>
            </div>

            <div class="au-field ${c.iv_name?"bad":""}" data-f="iv_name">
              <div class="au-lab"><label for="au-iv_name">姓名</label></div>
              <div class="au-ctl">
                <input id="au-iv_name" name="iv_name" class="au-in" type="text" autocomplete="name" placeholder="请输入姓名" value="${p(te)}" aria-invalid="${c.iv_name?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_name-err" aria-live="polite">${p(c.iv_name??"")}</p>
            </div>

            <div class="au-field ${c.iv_pwd?"bad":""}" data-f="iv_pwd">
              <div class="au-lab au-label-row">
                <span class="au-lab-group">
                  <label for="au-iv_pwd">设置密码</label>
                  ${Ha("au-iv-pwd-info","设置密码说明",ot)}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_pwd" name="iv_pwd" class="au-in has-suffix" type="${le?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="请设置登录密码" value="${p(Y)}" aria-invalid="${c.iv_pwd?"true":"false"}" />
                <button type="button" class="au-suffix au-eye" data-act="iv-toggle-eye" aria-controls="au-iv_pwd" aria-label="${le?"隐藏密码":"显示密码"}">
                  ${le?$a:ya}
                </button>
              </div>
              <p class="au-err" id="au-iv_pwd-err" aria-live="polite">${p(c.iv_pwd??"")}</p>
            </div>

            ${wa("au-iv_consent","iv_consent",de,"iv_consent")}

            <div class="au-ferr" id="au-reg-ferr" role="alert" ${v?"":"hidden"}>
              ${ka}
              <span data-role="ferr-text">${p(v)}</span>
            </div>

            <button type="submit" class="au-primary au-compact-primary" ${D?"disabled":""}>
              ${D?'<span class="au-spinner" aria-hidden="true"></span><span>正在激活…</span>':`<span>${He}</span>`}
            </button>
          </fieldset>
        </form>
        <div class="au-login-actions">
          <div class="au-login-divider" aria-hidden="true"></div>
          <p class="au-noacct">已有账户？<button type="button" class="au-inline" data-act="back-login">登录</button></p>
        </div>
      `}}function Ua(){Q.bind(a);const x=a.querySelector("#au-iv_name"),O=a.querySelector("#au-iv_pwd"),W=a.querySelector("#au-iv_consent"),Se=ce?.kind==="owner"?"激活并进入工作区":"注册并加入";x?.addEventListener("input",()=>{te=x.value,(c.iv_name||v)&&(delete c.iv_name,v="",U("iv_name"),H())}),O?.addEventListener("input",()=>{Y=O.value,(c.iv_pwd||v)&&(delete c.iv_pwd,v="",U("iv_pwd"),H())}),W?.addEventListener("change",()=>{de=W.checked,de&&c.iv_consent&&(delete c.iv_consent,U("iv_consent"))}),a.querySelector('[data-act="iv-toggle-eye"]')?.addEventListener("click",He=>{le=!le;const ze=He.currentTarget;if(O){const Me=O.selectionStart,Ke=O.selectionEnd;O.type=le?"text":"password",O.focus({preventScroll:!0}),Me!==null&&Ke!==null&&O.setSelectionRange(Me,Ke)}ze.setAttribute("aria-label",le?"隐藏密码":"显示密码"),ze.innerHTML=le?$a:ya}),a.querySelector('form[data-reg-form="invite"]')?.addEventListener("submit",async He=>{if(He.preventDefault(),D||!ce)return;c={},v="",te.trim()?ma(te.trim())>ha&&(c.iv_name=`姓名不超过 ${ha} 个字`):c.iv_name="请输入姓名";const ze=st(Y);ze&&(c.iv_pwd=ze),de||(c.iv_consent="请阅读并同意隐私政策和使用条款");for(const Me of["iv_name","iv_pwd","iv_consent"])U(Me);if(H(),Object.keys(c).length>0){const Me=Object.keys(c)[0];a.querySelector(`#au-${Me}`)?.focus({preventScroll:!0});return}D=!0,Be("正在激活…",Se);try{const Me=await e.acceptInvitation({token:ce.token,displayName:te.trim(),password:Y,consentAcceptedAt:new Date().toISOString()});Le(),s.onAuthenticated(Me)}catch(Me){D=!1,v=Me instanceof Error?Me.message:"暂时无法完成激活，请稍后再试。",Be("正在激活…",Se),H()}})}function ia(){Q.close(!1);let x="au-center--register",O="";if(C||P){const W=Ta();x=W.centerCls,document.title=W.title,O=W.bodyHtml}else if(J){const W=Ba();x=W.centerCls,document.title=W.title,O=W.bodyHtml}else document.title="注册 · PACOM Station",O=`
        <h1 class="au-h1 au-h1--reg">注册</h1>
        <div class="au-mode-seg au-reg-seg" role="tablist" aria-label="注册方式" data-role="reg-seg">
          <span class="au-mode-indicator" aria-hidden="true"></span>
          <button type="button" role="tab" aria-selected="${n==="join"}" tabindex="${n==="join"?"0":"-1"}" class="au-mode-tab" data-act="switch-reg-tab" data-tab="join">加入已有机构</button>
          <button type="button" role="tab" aria-selected="${n==="apply"}" tabindex="${n==="apply"?"0":"-1"}" class="au-mode-tab" data-act="switch-reg-tab" data-tab="apply">申请开通机构</button>
        </div>
        <div data-role="reg-body-host"></div>
        <div class="au-login-actions">
          <div class="au-login-divider" aria-hidden="true"></div>
          <p class="au-noacct">
            已有账户？<button type="button" class="au-inline" data-act="back-login">登录</button>
          </p>
        </div>
      `;a.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center ${x}">
            <main class="au-group">
              <div class="au-logo">${It}</div>
              ${O}
            </main>
          </div>
          ${kt()}
        </section>
        <aside class="au-art" aria-hidden="true">
          <div class="au-art-frame">
            <img src="./media/auth-hero.jpg" alt="" />
          </div>
        </aside>
      </div>
      <div data-role="modal-host"></div>
    `,a.querySelectorAll('[data-act="back-login"]').forEach(W=>{W.addEventListener("click",()=>{Le(),s.onBackToLogin()})}),a.querySelectorAll('[data-act="open-contact"]').forEach(W=>{W.addEventListener("click",ae=>{S=!1,ea("contact",ae.currentTarget)})}),a.querySelector('[data-act="withdraw-join"]')?.addEventListener("click",async()=>{if(!(!C||!e.withdrawJoinApplication||F)){F=!0,v="",ia();try{if(await e.withdrawJoinApplication(C.requestId),r)return;F=!1,C=null,ia()}catch(W){if(r)return;F=!1,v=W instanceof Error?W.message:"暂时无法撤回申请，请稍后再试。",ia()}}}),!C&&!P&&!J?(a.querySelectorAll('[data-act="switch-reg-tab"]').forEach(W=>{W.addEventListener("click",()=>{const ae=W.dataset.tab;ae&&oa(ae,!1)}),W.addEventListener("keydown",ae=>{const Se=ra.indexOf(n);ae.key==="ArrowRight"?(ae.preventDefault(),oa(ra[(Se+1)%ra.length],!0)):ae.key==="ArrowLeft"?(ae.preventDefault(),oa(ra[(Se-1+ra.length)%ra.length],!0)):ae.key==="Home"?(ae.preventDefault(),oa(ra[0],!0)):ae.key==="End"&&(ae.preventDefault(),oa(ra[ra.length-1],!0))})}),Te(),Fe(!1),document.fonts?.ready.then(()=>{r||Fe(!1)})):J&&!me&&ce?.status==="pending"&&Ua()}ia(),J?(async()=>{try{const x=await e.getInvitationPreview(J);if(r)return;ce=x,te=x.prefillName??"",me=!1,ia()}catch(x){if(r)return;me=!1,se=x instanceof Error?x.message:"暂时无法读取邀请信息，请稍后再试。",ia()}})():ne.replace(/\D/g,"").length===9&&Sa(ne)}function Ia(a){const e=a.replace(/^#\/?/,"").split("?")[0]??"";return e==="login"||e==="register"||e==="join"||e==="apply"||e==="invite"}function Et(a){const e=a.replace(/^#\/?/,""),[s="",r=""]=e.split("?"),n=new URLSearchParams(r);if(s==="invite")return{kind:"invite",inviteToken:n.get("token")??"member-demo"};if(s==="register"||s==="join"||s==="apply"){const u=n.get("tab");return{kind:"register",initialMode:s==="apply"||u==="apply"?"apply":"join",prefillCode:n.get("code")??void 0}}return{kind:"login"}}const ms=["org_admin","project_admin","operator","space_user"];async function gs(a){const e=new Bt;let s=await e.getSession(),r="login",n=!1;document.querySelector("[data-demo-fab-root]")?.remove();const u=document.createElement("div");u.className="pacom-demo-fab-wrap",u.dataset.demoFabRoot="1",document.body.appendChild(u);function S(){const C=r==="login"?"登录页":r==="register"?"注册页":r==="invite"?"邀请激活":s?Qe[s.role]:"未登录";u.innerHTML=`
      ${n?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">独立演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">演示邀请码 482 916 305 · 任意 6 位验证码 · 或点下方角色直进</span>
            <div class="pacom-demo-fab-roles">
              ${ms.map(P=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${r==="app"&&s?.role===P}" data-demo-pick="${P}">
                    <span>${Qe[P]}</span>
                    ${r==="app"&&s?.role===P?fe("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <button type="button" class="pacom-demo-role-btn" aria-pressed="${r==="login"}" data-demo-auth="#login">
                <span>查看登录页</span>
                ${r==="login"?fe("check",14):"<span>→</span>"}
              </button>
              <button type="button" class="pacom-demo-role-btn" aria-pressed="${r==="register"}" data-demo-auth="#register">
                <span>查看注册与开通页</span>
                ${r==="register"?fe("check",14):"<span>→</span>"}
              </button>
              <button type="button" class="pacom-demo-role-btn" aria-pressed="${r==="invite"}" data-demo-auth="#invite?token=member-demo">
                <span>查看定向邀请激活页</span>
                ${r==="invite"?fe("check",14):"<span>→</span>"}
              </button>
              <a class="pacom-demo-link" href="./index.html">
                <span>前往纯生产入口（index.html）</span>
                <span>→</span>
              </a>
            </div>
          </div>`:""}
      <button type="button" class="pacom-demo-fab-pill" aria-expanded="${n}" data-demo-fab-toggle="1" title="切换演示角色或查看认证页面">
        <span class="pacom-demo-fab-dot" aria-hidden="true"></span>
        <span>演示</span>
        <span class="pacom-demo-fab-role">${C}</span>
        ${fe(n?"chevron-down":"chevrons-up-down",12)}
      </button>
    `,u.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",P=>{P.stopPropagation(),n=!n,S()}),u.querySelectorAll("[data-demo-pick]").forEach(P=>{P.addEventListener("click",async()=>{const F=P.dataset.demoPick;F&&(n=!1,s=await e.switchDemoRole(F),await R(s))})}),u.querySelectorAll("[data-demo-auth]").forEach(P=>{P.addEventListener("click",async()=>{const F=P.dataset.demoAuth??"#login";n=!1,await q(F,!0)})})}document.addEventListener("click",C=>{n&&(C.target?.closest("[data-demo-fab-root]")||(n=!1,S()))}),document.addEventListener("keydown",C=>{C.key==="Escape"&&n&&(n=!1,S())});async function q(C,P){cs(a),wt(a),xt(a),P&&s&&await e.logout(),s=null;const F=Et(C);if(r=F.kind,window.location.hash!==C&&(window.location.hash=C),S(),F.kind==="register"||F.kind==="invite"){us(a,e,{initialMode:F.initialMode,prefillCode:F.prefillCode,inviteToken:F.inviteToken,onBackToLogin:()=>{q("#login",!1)},onAuthenticated:J=>{R(J)}});return}ps(a,e,J=>{R(J)},{onOpenRegister:()=>{q("#register",!1)}})}async function R(C){wt(a),xt(a),s=C,r="app",S(),(!window.location.hash||Ia(window.location.hash))&&(window.location.hash="#home"),await rs(a,e,C,()=>{q("#login",!1)})}if(window.addEventListener("hashchange",()=>{if(Ia(window.location.hash)){const C=Et(window.location.hash);r!==C.kind&&q(window.location.hash,r==="app")}}),!s||Ia(window.location.hash)){const C=Ia(window.location.hash)?window.location.hash:"#login";await q(C,!!(s&&Ia(window.location.hash)));return}await R(s)}async function vs(){const a=document.getElementById("app");if(a)try{await gs(a)}catch(e){a.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(e)}</div></div>`}}vs();
