import{E as $,r as be,a as Pa,e as p,b as Na,g as Ba,s as ba,m as Dt,c as Ot,d as kt,P as _t,A as ka,f as jt,n as pa,h as ya,C as Lt,i as At,j as Ra,k as $a,v as Aa,l as Ct,I as Ft,o as Tt,p as st,L as zt,q as Ga,t as ca,u as nt,B as ot,D as qa,w as it,x as Wa,y as lt,z as Za,O as Mt,F as Rt,G as Pt,H as Nt,S as ct}from"./auth-shared-B8Wte_YJ.js";import{R as ea,a as rt}from"./contracts-RpwmUYDW.js";function Bt(){const a="2026-11-25T09:00:00Z",e=[];for(let u=1;u<=22;u+=1){const x=u===7?$.floorId:u===8?$.lockedFloor8Id:u===6?$.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${u}`,F=String(u).padStart(2,"0");e.push({id:x,buildingId:$.buildingId,kind:"above",level:u,name:`${u}F`,areaSqm:u===7?1383.1:u===1?2680:u<=4?1920:1480,plan:{floorId:x,imageUrl:`./media/floors/e/${F}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}})}const s="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";e.push({id:s,buildingId:$.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:s,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}});const d=[];for(let u=1;u<=12;u+=1){const x=`structure-f-above-${u}`,F=String(u).padStart(2,"0");d.push({id:x,buildingId:$.buildingFId,kind:"above",level:u,name:`${u}F`,areaSqm:u===1?2450:u<=3?2100:1580,plan:{floorId:x,imageUrl:`./media/floors/f/${F}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}})}const n="structure-f-roof-1";return d.push({id:n,buildingId:$.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:n,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}}),{projects:[{id:$.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:a},imageUrl:"./media/gzlab.jpg"},{id:$.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:a},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:$.buildingId,projectId:$.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:$.buildingFId,projectId:$.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...e,...d],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:$.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:$.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:$.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:$.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:s,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:n,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const qt=Bt(),dt=qt.floors.map(a=>a.id),Xe={org_admin:{userId:"demo-org-admin",displayName:"林致远",role:"org_admin",roleLabel:ea.org_admin,authMode:"demo",scope:{allowedProjectIds:[$.projectId,$.project1Id],allowedBuildingIds:[$.buildingId,$.buildingFId],allowedFloorIds:[...dt],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",role:"project_admin",roleLabel:ea.project_admin,authMode:"demo",scope:{allowedProjectIds:[$.projectId],allowedBuildingIds:[$.buildingId,$.buildingFId],allowedFloorIds:[...dt],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",role:"operator",roleLabel:ea.operator,authMode:"demo",scope:{allowedProjectIds:[$.projectId],allowedBuildingIds:[$.buildingId],allowedFloorIds:[$.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",role:"space_user",roleLabel:ea.space_user,authMode:"demo",scope:{allowedProjectIds:[$.projectId],allowedBuildingIds:[$.buildingId],allowedFloorIds:[$.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},Ea="pacom.web.demo.role",pt="pacom.web.demo.spatial.v5",ut="pacom.web.demo.orgs.v1",mt="pacom.web.demo.activeOrg.v1",oa="org-gzlab";class Ut{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;inviteMissTimestamps=[];inviteLockedUntil=0;sentCodeTargets=new Set;joinReceipts=new Map;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;constructor(){this.orgs=this.loadOrgs();const e=typeof localStorage<"u"?localStorage.getItem(mt):null,s=this.orgs.find(u=>u.id===e)??this.orgs[0];this.activeOrgId=s.id,this.spatial=s.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const d=typeof sessionStorage<"u"?sessionStorage.getItem(Ea):null;d&&Xe[d]&&(this.activeSession=structuredClone(Xe[d]),this.applyOverridesToSession());const n=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:$.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:n,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:n,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:$.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:n,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:n,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:$.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:n,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:n,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:$.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:n,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:n,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:n,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:n,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:$.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:n,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:$.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:n,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:n,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:n,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:n},{id:"conn-e7f-dali",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:n},{id:"conn-e7f-modbus",projectId:$.projectId,buildingId:$.buildingId,floorId:$.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:$.projectId,floorId:$.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:$.projectId,floorId:$.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:$.projectId,floorId:$.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:$.projectId,floorId:$.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:$.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:$.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:n,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:$.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:n,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:$.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:n,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:$.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:n,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:$.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:n,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:$.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:n,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(Xe).map((u,x)=>({userId:u.userId,displayName:u.displayName,email:`${u.role.replaceAll("_",".")}@gzlab.ac.cn`,role:u.role,roleLabel:u.roleLabel,scopeSummary:u.scope.allowedZoneIds?.length?`E栋 7F（${u.scope.allowedZoneIds.length} 个授权功能区）`:`${u.scope.allowedProjectIds.length} 项目 / ${u.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:x===0?n:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const e=Date.now();for(const s of this.overrides)s.status==="active"&&new Date(s.expiresAt).getTime()<=e&&(s.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const e=Xe[this.activeSession.role].scope,s=this.overrides.filter(d=>d.targetUserId===this.activeSession.userId&&d.status==="active");this.activeSession.scope.activeOverrides=structuredClone(s),this.activeSession.scope.canEditDeployment=e.canEditDeployment||s.some(d=>d.module==="deployment"),this.activeSession.scope.canEditSettings=e.canEditSettings||s.some(d=>d.module==="settings")}record(e,s,d,n,u){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:s,endpoint:d,request:u,response:n}),this.traces.length>40&&this.traces.pop()}pushAudit(e,s,d,n){const u=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:u?.displayName??"anonymous",role:u?.role??"space_user",action:e,target:s,result:d,detail:n})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=e.account.toLowerCase(),d=s.includes("org")||s.includes("admin")?"org_admin":s.includes("proj")?"project_admin":s.includes("space")||s.includes("member")?"space_user":"operator";return this.activeSession=structuredClone(Xe[d]),this.applyOverridesToSession(),sessionStorage.setItem(Ea,d),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(Ea),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}maskTarget(e){const s=e.trim();if(s.includes("@")){const[n,u]=s.split("@");return n&&u?`${n[0]}•••@${u}`:"••••"}const d=s.replace(/\D/g,"");return d.length===11?`${d.slice(0,3)} •••• ${d.slice(7)}`:d.length>=6?`${d.slice(0,3)} •••• ${d.slice(-4)}`:"••••"}async sendVerificationCode(e){const s=e.target.trim(),d=s.includes("@")?"email":"sms";this.sentCodeTargets.add(`${e.purpose}:${s.toLowerCase()}`);const n={maskedTarget:this.maskTarget(s),channel:d,cooldownSeconds:60};return this.record("REST","sendVerificationCode","POST /api/v1/auth/verification-codes",n,{purpose:e.purpose,channel:d}),n}async resolveInviteCode(e){const s=Date.now();if(this.inviteLockedUntil>s)return{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const d=e.replace(/\D/g,""),u={482916305:this.orgs[0]?.name??"广州实验室",618204917:"天环智慧园区"}[d];if(!u){if(this.inviteMissTimestamps=this.inviteMissTimestamps.filter(R=>s-R<36e5),this.inviteMissTimestamps.push(s),this.inviteMissTimestamps.length>=10)return this.inviteLockedUntil=s+36e5,this.inviteMissTimestamps=[],{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const F={valid:!1,message:"邀请码不正确或已失效，请向机构管理员确认。"};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",F,{code:d}),F}const x={valid:!0,organizationName:u};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",x,{code:d}),x}async registerAndJoin(e){const s=await this.resolveInviteCode(e.inviteCode);if(!s.valid||!s.organizationName)throw new Error(s.message??"邀请码不正确或已失效，请向机构管理员确认。");if(!/^\d{6}$/.test(e.verificationCode.trim()))throw new Error("验证码不正确或已过期");const d=`register_join:${e.account.trim().toLowerCase()}`;if(!this.sentCodeTargets.has(d))throw new Error("请先获取验证码");const n={requestId:`JR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:s.organizationName,maskedAccount:this.maskTarget(e.account),status:"pending_approval",submittedAt:new Date().toISOString()};return this.joinReceipts.set(n.requestId,n),this.record("REST","registerAndJoin","POST /api/v1/auth/register-join",n,{organizationName:s.organizationName,displayName:e.displayName}),n}async withdrawJoinApplication(e){this.joinReceipts.delete(e),this.record("REST","withdrawJoinApplication",`DELETE /api/v1/org/join-requests/${e}`,{ok:!0})}async submitOrgApplication(e){if(!/^\d{6}$/.test(e.smsCode.trim()))throw new Error("验证码不正确或已过期");const s=`org_apply:${e.phone.trim().toLowerCase()}`;if(!this.sentCodeTargets.has(s))throw new Error("请先获取短信验证码");const d=e.province===e.city?e.province:`${e.province} ${e.city}`,n={applicationId:`APP-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:e.organizationName.trim(),region:d,maskedEmail:this.maskTarget(e.email),status:"pending_review",submittedAt:new Date().toISOString()};return this.record("REST","submitOrgApplication","POST /api/v1/org/applications",n,{organizationName:n.organizationName,industry:e.industry,region:d}),n}async getInvitationPreview(e){const s=e.trim(),d=new Date(Date.now()+7*864e5).toISOString().slice(0,10);return s==="expired"?{token:s,kind:"member",organizationName:this.orgs[0]?.name??"广州实验室",inviterName:"林致远",role:"operator",roleLabel:ea.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",expiresAt:"2026-11-20",status:"expired"}:s.startsWith("owner")?{token:s,kind:"owner",organizationName:"广州天环智能科技有限公司",role:"org_admin",roleLabel:ea.org_admin,targetChannel:"email",targetValue:"chen@company.com",prefillName:"陈志远",expiresAt:d,status:"pending"}:{token:s||"member-demo",kind:"member",organizationName:this.orgs[0]?.name??"广州实验室",inviterName:"林致远",role:"operator",roleLabel:ea.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",prefillName:"林明远",expiresAt:d,status:"pending"}}async acceptInvitation(e){const s=await this.getInvitationPreview(e.token);if(s.status!=="pending")throw new Error("邀请已过期或已失效，请联系邀请人重新发送。");const d=s.kind==="owner"?"org_admin":s.role??"operator",n=structuredClone(Xe[d]);return e.displayName.trim()&&(n.displayName=e.displayName.trim()),this.activeSession=n,this.applyOverridesToSession(),sessionStorage.setItem(Ea,d),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,n),this.pushAudit("auth.invite.accept",n.userId,"success"),structuredClone(n)}async switchDemoRole(e){return this.activeSession=structuredClone(Xe[e]),this.applyOverridesToSession(),sessionStorage.setItem(Ea,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(pt);if(e){const s=JSON.parse(e);if(Array.isArray(s?.projects)&&Array.isArray(s?.buildings)&&Array.isArray(s?.floors)&&Array.isArray(s?.zones))return s}}}catch{}return structuredClone(qt)}loadOrgs(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(ut);if(e){const s=JSON.parse(e);if(Array.isArray(s)&&s.length>0&&s.every(d=>d?.id&&d?.name&&Array.isArray(d?.spatial?.projects)))return s}}}catch{}return[{id:oa,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const e=this.orgs.find(s=>s.id===this.activeOrgId);e&&(e.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(ut,JSON.stringify(this.orgs)),localStorage.setItem(mt,this.activeOrgId),this.activeOrgId===oa&&localStorage.setItem(pt,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(e=>({id:e.id,name:e.name,projectCount:e.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}async switchOrganization(e){const s=this.orgs.find(d=>d.id===e);if(!s)throw new Error(`404 NOT_FOUND: 机构 ${e} 不存在`);this.activeOrgId=s.id,this.spatial=s.spatial,this.persistSpatial()}async createOrganization(e){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const d=e.trim()||"新建机构",n={id:`org-${Date.now().toString(36)}`,name:d,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(n),this.activeOrgId=n.id,this.spatial=n.spatial,this.persistSpatial(),this.pushAudit("org.create",n.id,"success",d),{id:n.id,name:n.name,projectCount:0}}syncAdminScopesFromSpatial(){const e=this.spatial.projects.map(n=>n.id),s=this.spatial.buildings.map(n=>n.id),d=this.spatial.floors.map(n=>n.id);this.activeOrgId===oa&&(Xe.org_admin.scope.allowedProjectIds=[...e],Xe.org_admin.scope.allowedBuildingIds=[...s],Xe.org_admin.scope.allowedFloorIds=[...d],Xe.project_admin.scope.allowedBuildingIds=[...s],Xe.project_admin.scope.allowedFloorIds=[...d]),this.activeSession&&((this.activeOrgId!==oa||this.activeSession.role==="org_admin")&&(this.activeSession.scope.allowedProjectIds=[...e]),(this.activeOrgId!==oa||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin")&&(this.activeSession.scope.allowedBuildingIds=[...s],this.activeSession.scope.allowedFloorIds=[...d]))}async getSpatialTree(){const e=this.requireSession();if(this.activeOrgId!==oa){const T=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:T.projects.length,buildings:T.buildings.length,floors:T.floors.length}),T}const s=this.spatial.projects.filter(T=>e.scope.allowedProjectIds.includes(T.id)),d=this.spatial.buildings.filter(T=>e.scope.allowedBuildingIds.includes(T.id)),n=new Set(d.map(T=>T.id)),u=this.spatial.floors.filter(T=>n.has(T.buildingId)),x=new Set(u.map(T=>T.id)),F=this.spatial.zones.filter(T=>x.has(T.floorId)),R=structuredClone({projects:s,buildings:d,floors:u,zones:F});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:R.projects.length,buildings:R.buildings.length,floors:R.floors.length}),R}async createProject(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建项目`);const d={id:`project-${Date.now().toString(36)}`,name:e.name.trim()||"新建项目",city:e.city?.trim()||"广州市",address:e.address?.trim()||"",timezone:"Asia/Shanghai",location:e.location,imageUrl:e.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(d),s.scope.allowedProjectIds.includes(d.id)||s.scope.allowedProjectIds.push(d.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",d,e),this.pushAudit("project.create",d.id,"success",d.name),structuredClone(d)}async updateProject(e,s){const d=this.requireSession();if(!d.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${d.roleLabel}」无权修改项目配置`);const n=this.spatial.projects.find(u=>u.id===e);if(!n)throw new Error(`404 NOT_FOUND: 项目 ${e} 不存在`);return s.name!==void 0&&(n.name=s.name.trim()||n.name),s.city!==void 0&&(n.city=s.city.trim()),s.address!==void 0&&(n.address=s.address.trim()),s.location!==void 0&&(n.location=s.location),s.imageUrl!==void 0&&(n.imageUrl=s.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${e}`,n,s),this.pushAudit("project.update",e,"success",n.name),structuredClone(n)}async deleteProject(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除项目`);if(e===$.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const d=new Set(this.spatial.buildings.filter(u=>u.projectId===e).map(u=>u.id)),n=new Set(this.spatial.floors.filter(u=>d.has(u.buildingId)).map(u=>u.id));this.spatial.projects=this.spatial.projects.filter(u=>u.id!==e),this.spatial.buildings=this.spatial.buildings.filter(u=>u.projectId!==e),this.spatial.floors=this.spatial.floors.filter(u=>!d.has(u.buildingId)),this.spatial.zones=this.spatial.zones.filter(u=>!n.has(u.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${e}`,{ok:!0}),this.pushAudit("project.delete",e,"success")}async upsertBuilding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼宇`);let d=e.id?this.spatial.buildings.find(n=>n.id===e.id):void 0;return d?(d.name=e.name.trim()||d.name,d.aboveFloors=Math.max(0,e.aboveFloors),d.belowFloors=Math.max(0,e.belowFloors),d.hasRoof=e.hasRoof,e.areaSqm!==void 0&&(d.areaSqm=e.areaSqm),e.imageUrl!==void 0&&(d.imageUrl=e.imageUrl)):(d={id:`building-${Date.now().toString(36)}`,projectId:e.projectId,name:e.name.trim()||"新建楼宇",aboveFloors:Math.max(1,e.aboveFloors),belowFloors:Math.max(0,e.belowFloors),hasRoof:e.hasRoof,areaSqm:e.areaSqm??null,imageUrl:e.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(d)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",d,e),this.pushAudit("building.upsert",d.id,"success",d.name),structuredClone(d)}async deleteBuilding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼宇`);if(e===$.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const d=new Set(this.spatial.floors.filter(n=>n.buildingId===e).map(n=>n.id));this.spatial.buildings=this.spatial.buildings.filter(n=>n.id!==e),this.spatial.floors=this.spatial.floors.filter(n=>n.buildingId!==e),this.spatial.zones=this.spatial.zones.filter(n=>!d.has(n.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${e}`,{ok:!0}),this.pushAudit("building.delete",e,"success")}async upsertFloor(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼层`);const d=new Date().toISOString();let n=e.id?this.spatial.floors.find(u=>u.id===e.id):void 0;if(n)n.name=e.name.trim()||n.name,n.kind=e.kind,n.level=e.level,e.areaSqm!==void 0&&(n.areaSqm=e.areaSqm),e.planImageUrl!==void 0&&(n.plan=e.planImageUrl?{floorId:n.id,imageUrl:e.planImageUrl,planVersion:(n.plan?.planVersion??0)+1,updatedAt:d}:null);else{const u=`floor-${e.buildingId.slice(-6)}-${e.kind}-${Math.abs(e.level)}-${Date.now().toString(36).slice(-3)}`;n={id:u,buildingId:e.buildingId,kind:e.kind,level:e.level,name:e.name.trim()||`${e.level}F`,areaSqm:e.areaSqm??null,plan:e.planImageUrl?{floorId:u,imageUrl:e.planImageUrl,planVersion:1,updatedAt:d}:null},this.spatial.floors.push(n),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(n.id)&&this.activeSession.scope.allowedFloorIds.push(n.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:n.id,name:n.name,hasPlan:!!n.plan}),this.pushAudit("floor.upsert",n.id,"success",n.name),structuredClone(n)}async deleteFloor(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼层`);if(e===$.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(d=>d.id!==e),this.spatial.zones=this.spatial.zones.filter(d=>d.floorId!==e),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${e}`,{ok:!0}),this.pushAudit("floor.delete",e,"success")}async upsertZone(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护功能区`);let d=e.id?this.spatial.zones.find(n=>n.id===e.id):void 0;return d?(d.name=e.name.trim()||d.name,d.category=e.category):(d={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:e.floorId,name:e.name.trim(),category:e.category},this.spatial.zones.push(d)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",d),this.pushAudit("zone.upsert",d.id,"success",d.name),structuredClone(d)}async deleteZone(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(d=>d.id!==e),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${e}`,{ok:!0}),this.pushAudit("zone.delete",e,"success")}async copyZonesToFloors(e,s){const d=this.requireSession();if(!d.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${d.roleLabel}」无权复制功能区`);const n=this.spatial.floors.find(F=>F.id===e),u=this.spatial.zones.filter(F=>F.floorId===e);if(!n||u.length===0)return 0;let x=0;for(const F of s){if(F===e)continue;const R=this.spatial.floors.find(P=>P.id===F);if(!R)continue;const T=new Set(this.spatial.zones.filter(P=>P.floorId===F).map(P=>P.name));for(const P of u){const z=P.name.replace(new RegExp(`^${n.name}\\s*`,"i"),""),Q=`${R.name} ${z}`.trim();T.has(Q)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:F,name:Q,category:P.category}),T.add(Q),x+=1)}}return x>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:e,targetCount:s.length,added:x}),x}async getFloorDevices(e){const s=this.requireSession();if(this.activeOrgId!==oa)return[];if(!s.scope.allowedFloorIds.includes(e)){const n={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,n),this.pushAudit("floor.read",e,"denied",n.message),new Error(`403 FORBIDDEN: ${n.message}`)}if(e!==$.floorId)return[];let d=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(d=d.filter(n=>n.logicalZoneId&&s.scope.allowedZoneIds.includes(n.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:d.length}),d}async dispatchControlBatch(e){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const d=`batch-e7f-${Date.now().toString(36)}`,n={batchId:d,floorId:e.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(u=>({deviceId:u.deviceId,command:u.command,targetValue:u.targetValue,status:"queued"}))};return this.batches.set(d,n),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",n,e),this.pushAudit("control.dispatch",d,"success",`下发 ${e.targets.length} 台设备`),n.receipts.forEach((u,x)=>{const F=this.devices.find(R=>R.id===u.deviceId);setTimeout(()=>{u.status="dispatched",u.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:d,deviceId:u.deviceId,status:"dispatched",at:u.dispatchedAt})},280+x*120),setTimeout(()=>{const R=new Date().toISOString();!F||F.connectivity==="offline"?(u.status="timeout",u.errorCode="GATEWAY_READBACK_TIMEOUT",u.errorMessage="设备离线，网关未收到回读确认",u.verifiedAt=R):(u.status="verified_success",u.observedValue=u.targetValue,u.verifiedAt=R,this.applyObservedTelemetry(F,u.command,u.targetValue,R)),this.emit({type:"control.receipt.updated",batchId:d,deviceId:u.deviceId,status:u.status,observedValue:u.observedValue,at:R})},900+x*220)}),structuredClone(n)}applyObservedTelemetry(e,s,d,n){s==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:d,collectedAt:n,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(d)>0,collectedAt:n,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:d,collectedAt:n,stale:!1}:s==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:d,collectedAt:n,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:n,values:{[s]:d}})}async getControlBatch(e){this.requireSession();const s=this.batches.get(e);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(s)}async listAlarms(e){const s=this.requireSession();return this.activeOrgId!==oa?[]:!s.scope.allowedFloorIds.includes(e)||e!==$.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,s){const d=this.requireSession();if(!d.scope.canManageAlarms){const u=`角色「${d.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",u),new Error(`403 FORBIDDEN: ${u}`)}const n=this.alarms.find(u=>u.id===e);if(!n)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return n.status="acknowledged",n.acknowledgedAt=new Date().toISOString(),n.acknowledgedBy=d.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,n,{note:s}),this.pushAudit("alarm.acknowledge",e,"success",s),this.emit({type:"alarm.changed",floorId:n.floorId,alarmId:e,status:"acknowledged",at:n.acknowledgedAt}),structuredClone(n)}async listWorkOrders(e){const s=this.requireSession();return this.activeOrgId!==oa?[]:!s.scope.allowedFloorIds.includes(e)||e!==$.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const d=new Date().toISOString(),n={id:`wo-e7f-${Date.now().toString(36)}`,projectId:$.projectId,buildingId:$.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:d,updatedAt:d};if(this.workOrders.unshift(n),e.alarmId){const u=this.alarms.find(x=>x.id===e.alarmId);u&&(u.workOrderId=n.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",n,e),this.pushAudit("work_order.create",n.id,"success",n.title),structuredClone(n)}async updateWorkOrderStatus(e,s){const d=this.requireSession();if(!d.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${d.roleLabel}」无权流转工单`);const n=this.workOrders.find(u=>u.id===e);if(!n)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return n.status=s,n.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,n,{status:s}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${s}`),structuredClone(n)}async updateDevicePlanPoint(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const d=this.devices.find(n=>n.id===e.deviceId);if(!d)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(d.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${d.version}，请刷新后重试`);return d.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},d.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,d,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${d.planPoint.x}, ${d.planPoint.y})`),structuredClone(d)}async updateDeviceHardwareBinding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const d=this.devices.find(u=>u.id===e.deviceId);if(!d)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(d.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${d.version}）`);const n=new Date().toISOString();return d.physicalInstalled=e.physicalInstalled,d.physicalVerifiedAt=e.physicalInstalled?n:null,d.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:n,boundBy:s.displayName},d.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,d,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(d)}async listConnections(e){return this.requireSession(),this.activeOrgId!==oa?[]:structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),this.activeOrgId!==oa?[]:structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,s){const d=this.requireSession();if(!d.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${d.roleLabel}」无权冻结交付批次`);const n=this.devices.filter(x=>x.physicalInstalled&&x.hardwareBinding).length,u={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:$.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:n,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:d.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(u),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,u,{note:s}),this.pushAudit("delivery.freeze",u.id,"success",`${n}/${this.devices.length} 已现场核验`),structuredClone(u)}async getAnalysisReport(e,s,d){this.requireSession();const n=s==="today"?1:s==="7d"?7:30,x={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*n)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*n).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(T=>T.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*n).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*n).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*n).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],F=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],R={category:e,range:s,scopeId:d,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:x.kpis,unit:x.unit,series:x.base.map((T,P)=>({label:F[P],value:Math.round(T*(e==="energy"||e==="carbon"?n/2+.5:1)),baseline:Math.round(T*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:x.base[3],unit:x.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:x.base[4],unit:x.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:x.base[1],unit:x.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${s}&scopeId=${d}`,{kpis:R.kpis.length}),R}async listScenes(e){return this.requireSession(),this.activeOrgId!==oa?[]:structuredClone(this.scenes)}async createScene(e){const s=this.requireSession();if(!s.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建场景`);const d={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(d),this.record("REST","createScene","POST /api/v1/scenes",d,e),this.pushAudit("scene.create",d.id,"success",d.name),structuredClone(d)}async executeScene(e){const s=this.scenes.find(n=>n.id===e);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const d=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=d.batchId,d}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:$.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,s,d){this.requireSession();const n=d>=this.calendar.nightGuardStart?`下班时间 ${d} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,u=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${d}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${d} (+30m)`,conflictWarning:n},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:n}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",u,{workdayStart:s,workdayEnd:d}),u}async saveWorkCalendar(e,s,d,n){const u=this.requireSession();if(!u.scope.canEditSettings)throw this.pushAudit("settings.calendar",$.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${u.roleLabel}」无权修改应用设置`);if(this.calendar.version!==n)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=d)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:d,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:d,expectedVersion:n}),this.pushAudit("settings.calendar",$.projectId,"success",`${s}-${d}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,s,d){const n=this.requireSession();if(!n.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",e,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权启停应用设置规则`);const u=this.rules.find(x=>x.id===e);if(!u)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(u.version!==d)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${u.version}）`);return u.enabled=s,u.version+=1,u.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,u,{enabled:s,expectedVersion:d}),this.pushAudit("settings.rule_toggle",e,"success",s?"启用":"停用"),structuredClone(u)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,s){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",e,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const n=Xe[s],u={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:s,roleLabel:n.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(u),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",u,{email:e,role:s}),this.pushAudit("org.invite",e,"success",n.roleLabel),structuredClone(u)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const e=this.requireSession();return this.reconcileOverrides(),e.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(s=>s.targetUserId===e.userId))}async grantOverride(e){const s=this.requireSession();if(!s.scope.canGrantOverride)throw this.pushAudit("override.grant",e.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const d=e.reason.trim();if(!d)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(e.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const n=this.members.find(F=>F.userId===e.targetUserId);if(!n)throw new Error(`404 NOT_FOUND: 目标成员 ${e.targetUserId} 不存在`);if(n.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const u=Date.now(),x={id:`ovr-${u.toString(36)}`,targetUserId:n.userId,targetUserName:n.displayName,module:e.module,durationHours:e.durationHours,grantedAt:new Date(u).toISOString(),expiresAt:new Date(u+e.durationHours*36e5).toISOString(),approvedBy:s.displayName,reason:d,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(x),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",x,e),this.pushAudit("override.grant",`${n.displayName} · ${e.module==="deployment"?"系统部署":"应用设置"}`,"success",`${e.durationHours}h · ${d}`),structuredClone(x)}async revokeOverride(e){const s=this.requireSession();if(!s.scope.canGrantOverride)throw this.pushAudit("override.revoke",e,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const d=this.overrides.find(n=>n.id===e);if(!d)throw new Error(`404 NOT_FOUND: 提权记录 ${e} 不存在`);return d.status="revoked",d.revokedAt=new Date().toISOString(),d.revokedBy=s.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${e}/revoke`,d),this.pushAudit("override.revoke",`${d.targetUserName} · ${d.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(d)}subscribeFloorEvents(e,s){return e!==$.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${$.floorId}`,e),this.listeners.forEach(s=>s(e))}}const Ka=["org_admin","project_admin","operator","space_user"],Vt=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function he(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Ya(a){return a?a.slice(0,16).replace("T"," "):"—"}function Da(a){return a==="deployment"?"系统部署":"应用设置"}async function Ht(a,e,s,d,n){const u=s.scope.canManageMembers,x=s.scope.canGrantOverride,F=s.scope.canViewAuditLogs,R=x||s.role==="operator",T=s.role!=="space_user";let P="profile",z=T?await e.listOrgMembers().catch(()=>[]):[],Q=R?await e.listOverrides().catch(()=>[]):[],ge=F?await e.listAuditLogs().catch(()=>[]):[],le="",oe="all",te="all",J="all",de=!1,ue=!1,ce=s.displayName,re=s.role==="org_admin"?"机构负责人":s.role==="project_admin"?"项目负责人":s.role==="operator"?"运行值守工程师":"园区空间用户",V="138-0013-8072",fe="",se="";const _e={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function pe(){const[A,m,h,f]=await Promise.all([e.getSession(),T?e.listOrgMembers().catch(()=>[]):Promise.resolve([]),R?e.listOverrides().catch(()=>[]):Promise.resolve([]),F?e.listAuditLogs().catch(()=>[]):Promise.resolve([])]);z=m,Q=h,ge=f,A&&(s=A,d(A)),N()}function B(){const A=["profile"];return T&&A.push("members","roles"),R&&A.push("overrides"),F&&A.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${A.map(m=>{const h=_e[m],f=m==="overrides"?Q.filter(c=>c.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${P===m}" data-anav="${m}">
                  ${be(h.icon,16)}
                  <span>${h.label}</span>
                  ${f>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${f}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function G(){return P==="members"&&u?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':P==="overrides"&&x?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':P==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 · SR 6.1</span>':""}function ne(){const A=s.scope.activeOverrides.filter(h=>h.status==="active"),m=s.scope.allowedZoneIds?.length?`授权 ${s.scope.allowedFloorIds.length} 个楼层 · ${s.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${s.scope.allowedProjectIds.length} 个项目 · ${s.scope.allowedBuildingIds.length} 栋楼宇 · ${s.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${he(s.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${he(s.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${he(ce)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${he(re)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${he(V)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${he(m)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${he(rt[s.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${he(s.roleLabel)}</span>
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
          ${A.length>0?A.map(h=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${he(Da(h.module))}（${h.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${he(h.approvedBy)} · 到期时间：${he(Ya(h.expiresAt))} · 事由：${he(h.reason)}</span>
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
    `}function Z(){const A=le.trim().toLowerCase(),m=z.filter(h=>oe!=="all"&&h.role!==oe?!1:A?`${h.displayName} ${h.email} ${h.roleLabel} ${h.scopeSummary}`.toLowerCase().includes(A):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${he(le)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${oe==="all"?"selected":""}>全部角色（${z.length}）</option>
            ${Ka.map(h=>`<option value="${h}" ${oe===h?"selected":""}>${he(ea[h])}</option>`).join("")}
          </select>
        </div>
        <span class="pacom-row-sub">显示 ${m.length} / ${z.length} 人</span>
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
              ${m.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':m.map(h=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${he(h.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${he(h.displayName)}</div>
                                ${u?`<div class="pacom-row-sub">${he(h.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${h.role==="org_admin"||h.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${he(h.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${he(h.scopeSummary)}</span></td>
                          <td>
                            <span class="pacom-badge ${h.status==="active"?"pacom-badge--online":"pacom-badge--neutral"}">
                              ${h.status==="active"?"正常":h.status==="invited"?"邀请中":"已停用"}
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
          ${Ka.map(A=>{const m=z.filter(h=>h.role===A).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${he(ea[A])}</span>
                  <span class="pacom-setting-desc">${he(rt[A])}</span>
                </div>
                <span class="pacom-badge pacom-badge--neutral">${m} 人</span>
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
                ${Vt.map(A=>`
                  <tr>
                    <td><strong style="font-weight:450;">${he(A.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${A.org_admin.tone}">${he(A.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${A.project_admin.tone}">${he(A.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${A.operator.tone}">${he(A.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${A.space_user.tone}">${he(A.space_user.text)}</span></td>
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
          <div class="pacom-kpi-value">${Q.filter(m=>m.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${Q.length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">每条审批与收回同步写入审计日志</span>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">限时提权审批记录</h2>
          <span class="pacom-row-sub">${x?"可为运营人员开启「系统部署」或「应用设置」限时修改权":"展示管理员为你授予的临时提权记录"}</span>
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
                  ${x?'<th style="text-align:right;">操作</th>':""}
                </tr>
              </thead>
              <tbody>
                ${Q.length===0?`<tr><td colspan="${x?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${x?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:Q.map(m=>`
                          <tr>
                            <td><strong style="font-weight:450;">${he(m.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${he(Da(m.module))}</span></td>
                            <td>
                              <div>${m.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${he(Ya(m.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${he(m.approvedBy)}</div>
                              <div class="pacom-row-sub">${he(m.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${m.status==="active"?"pacom-badge--online":m.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${m.status==="active"?"生效中":m.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${x?`<td style="text-align:right;">
                                    ${m.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${he(m.id)}">提前收回</button>`:`<span class="pacom-row-sub">${m.revokedBy?`${he(m.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function $e(){const A=ge.filter(m=>{if(te==="success"&&m.result!=="success"||te==="denied"&&m.result==="success")return!1;if(J!=="all"){const h=`${m.action} ${m.target}`.toLowerCase();if(J==="control"&&!h.includes("control")&&!h.includes("scene")||J==="alarm"&&!h.includes("alarm")&&!h.includes("work")||J==="deploy"&&!h.includes("deploy")&&!h.includes("plan")&&!h.includes("hardware")&&!h.includes("project")&&!h.includes("building")&&!h.includes("floor")&&!h.includes("zone")||J==="settings"&&!h.includes("settings")||J==="override"&&!h.includes("override"))return!1}return!0});return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
            <option value="all" ${J==="all"?"selected":""}>全部操作类别</option>
            <option value="override" ${J==="override"?"selected":""}>限时提权审批</option>
            <option value="control" ${J==="control"?"selected":""}>设备控制与场景</option>
            <option value="alarm" ${J==="alarm"?"selected":""}>告警与工单处置</option>
            <option value="deploy" ${J==="deploy"?"selected":""}>系统部署与空间</option>
            <option value="settings" ${J==="settings"?"selected":""}>应用设置变更</option>
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="按执行结果筛选">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${te==="all"}" data-audit-filter="all">全部（${ge.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${te==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${te==="denied"}" data-audit-filter="denied">已拦截</button>
          </div>
        </div>
        <span class="pacom-row-sub">共 ${A.length} 条只读记录</span>
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
              ${A.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':A.map(m=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${he(m.action)}</div>
                            ${m.detail?`<div class="pacom-row-sub">${he(m.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${he(m.target)}</code></td>
                          <td>
                            <div>${he(m.actor)}</div>
                            <div class="pacom-row-sub">${he(ea[m.role]??m.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${he(Ya(m.at))}</span></td>
                          <td style="text-align:right;">
                            <span class="pacom-badge ${m.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                              ${m.result==="success"?"成功":"已拦截"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function I(){const A=[];if(de&&u){const m=s.role==="org_admin"?Ka:["project_admin","operator","space_user"];A.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="邀请成员">
          <form class="dep-modal-card" data-role="invite-form" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">邀请新成员</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${be("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">成员电子邮箱（唯一登录账号）</span>
                <input class="pacom-input" name="email" type="email" placeholder="colleague@gzlab.ac.cn" required />
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分配角色</span>
                <select class="pacom-select" name="role">
                  ${m.map(h=>`<option value="${h}">${he(ea[h])}</option>`).join("")}
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
        </div>`)}if(ue&&x){const m=z.filter(h=>h.role==="operator");A.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="授予限时提权">
          <form class="dep-modal-card" data-role="grant-override-form" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">授予运营人员限时提权（SR 2.1 RE 3）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${be("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">目标运营人员</span>
                <select class="pacom-select" name="targetUserId" required>
                  ${m.length===0?'<option value="">暂无运营人员</option>':m.map(h=>`<option value="${he(h.userId)}">${he(h.displayName)}（${he(h.email)}）</option>`).join("")}
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
              <span class="pacom-row-sub">审批人：${he(s.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${m.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return A.join("")}function N(){const A=_e[P],m=G();a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${he(s.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${B()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${m?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${A.label}</h2>
                  <p class="pacom-unified-subtitle">${A.subtitle}</p>
                </div>
                ${m?`<div class="pacom-unified-head-actions">${m}</div>`:""}
              </div>
              ${fe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${he(fe)}</span></div>`:""}
              ${se?`<div class="pacom-alert-banner">${he(se)}</div>`:""}
              ${P==="profile"?ne():P==="members"?Z():P==="roles"?ee():P==="overrides"?xe():$e()}
            </div>
          </div>
        </div>
      </div>
      ${I()}
    `,Se()}function Se(){a.querySelectorAll("[data-anav]").forEach(m=>{m.addEventListener("click",()=>{P=m.dataset.anav??"profile",fe="",se="",N()})}),a.querySelector('[data-role="profile-form"]')?.addEventListener("submit",m=>{m.preventDefault();const h=new FormData(m.currentTarget);ce=String(h.get("displayName")??"").trim()||s.displayName,re=String(h.get("jobTitle")??"").trim()||re,V=String(h.get("phone")??"").trim()||V,fe=`已保存个人资料：${ce}（${re}）· ${V}`,N()}),a.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",n()}),a.querySelector("[data-open-invite]")?.addEventListener("click",()=>{de=!0,ue=!1,N()}),a.querySelector("[data-open-grant]")?.addEventListener("click",()=>{ue=!0,de=!1,N()}),a.querySelectorAll("[data-close-modals]").forEach(m=>{m.addEventListener("click",()=>{de=!1,ue=!1,N()})}),a.querySelectorAll("[data-modal-scrim]").forEach(m=>{m.addEventListener("click",h=>{h.target===m&&(de=!1,ue=!1,N())})}),a.querySelector("[data-member-search]")?.addEventListener("input",m=>{const h=m.currentTarget,f=h.selectionStart??h.value.length;le=h.value,N();const c=a.querySelector("[data-member-search]");c&&(c.focus(),c.setSelectionRange(f,f))}),a.querySelector("[data-role-filter]")?.addEventListener("change",m=>{oe=m.currentTarget.value,N()}),a.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async m=>{m.preventDefault(),se="";const h=new FormData(m.currentTarget);try{const f=await e.inviteOrgMember(String(h.get("email")??""),String(h.get("role")));de=!1,fe=`已向 ${f.email} 发送「${f.roleLabel}」邀请。`,await pe()}catch(f){se=f instanceof Error?f.message:String(f),N()}}),a.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async m=>{m.preventDefault(),se="";const h=new FormData(m.currentTarget);try{const f=await e.grantOverride({targetUserId:String(h.get("targetUserId")??""),module:String(h.get("module")??"deployment"),durationHours:Number(h.get("durationHours")??8),reason:String(h.get("reason")??"")});ue=!1,fe=`已为「${f.targetUserName}」开启「${Da(f.module)}」${f.durationHours} 小时限时修改权，到期自动收回。`,await pe()}catch(f){se=f instanceof Error?f.message:String(f),N()}}),a.querySelectorAll("[data-revoke-override]").forEach(m=>{m.addEventListener("click",async()=>{const h=m.dataset.revokeOverride;if(h){se="";try{const f=await e.revokeOverride(h);fe=`已提前收回「${f.targetUserName}」的「${Da(f.module)}」限时修改权。`,await pe()}catch(f){se=f instanceof Error?f.message:String(f),N()}}})}),a.querySelectorAll("[data-audit-filter]").forEach(m=>{m.addEventListener("click",()=>{te=m.dataset.auditFilter??"all",N()})}),a.querySelector("[data-audit-cat]")?.addEventListener("change",m=>{J=m.currentTarget.value??"all",N()})}N()}const ga={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Gt={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Wt={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Zt(a){const e=`${a.title} ${a.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Kt(a){return a.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:a.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function Ja(a){const e=`${a.title} ${a.message}`.toLowerCase();return e.includes("离线")||e.includes("vav")||a.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:e.includes("co₂")||e.includes("co2")||a.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function Yt(a,e,s){const d=new URLSearchParams(window.location.hash.split("?")[1]??""),n=d.get("alarm"),u=d.get("wo"),x=s.scope.canManageAlarms;let F=await e.getSpatialTree(),R=Ba(),T=!1,P="",z=[],Q=[],ge=[],le=u?"workorders":"alarms",oe="all",te="all",J="all",de="impact",ue=!1,ce="",re=n,V=u,fe=null,se=null,_e="resolved";const pe=new Set,B=new Map,G=new Map,ne=new Map,Z=new Map;let ee="",xe="";function $e(m){const h=Z.get(m.id);if(h)return h;const f=m.id.match(/(\d+)$/),c=`WO-2026-${f?f[1]:m.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,k={estCost:"¥ 450",actualCost:m.status==="closed"?"¥ 380":"--",cmmsNo:c,assigneeGroup:"暖通运维组",tasks:[{id:`${m.id}-t1`,label:"核查设备供电与现场指示灯状态",done:m.status!=="open"},{id:`${m.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:m.status==="resolved"||m.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:m.createdAt?m.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${c}）`}]};return Z.set(m.id,k),k}async function I(){[z,Q,ge]=await Promise.all([e.listAlarms($.floorId),e.listWorkOrders($.floorId),e.getFloorDevices($.floorId).catch(()=>[])]),Q.forEach(m=>$e(m)),A()}function N(m){if(!m)return{name:"楼层通用",zone:"E7F",dev:null};const h=ge.find(f=>f.id===m)??null;return h?{name:h.name,zone:(h.logicalZoneId?Wt[h.logicalZoneId]:void 0)??"E7F",dev:h}:{name:m,zone:"E7F",dev:null}}function Se(m){const h=N(m.deviceId).dev;h&&h.connectivity==="offline"?ne.set(m.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${h.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):ne.set(m.id,{verdict:"pass",summary:`自检通过（PASS）：「${h?.name??m.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),re=m.id,A()}function A(){const m=z.filter(i=>i.status==="active"&&!B.has(i.id)),h=Q.filter(i=>!$e(i).cancelled&&(i.status==="open"||i.status==="assigned"||i.status==="in_progress")),f=z.filter(i=>i.status!=="active").length+G.size,c=0,k=B.size,C=ce.trim().toLowerCase(),ie=z.filter(i=>{const g=B.has(i.id);if(oe==="snoozed"){if(!g)return!1}else if(oe==="active"){if(i.status!=="active"||g)return!1}else if(oe==="acknowledged"){if(i.status!=="acknowledged")return!1}else if(g)return!1;if(J!=="all"&&i.severity!==J)return!1;if(!C)return!0;const D=N(i.deviceId);return`${i.title} ${i.message} ${D.name} ${D.zone} ${i.deviceId}`.toLowerCase().includes(C)}),Ee=new Map;for(const i of ie){const g=`${i.title} ${i.message}`.toLowerCase(),D=g.includes("离线")||g.includes("modbus")||g.includes("通信"),Y=ue?D?"root-gateway-modbus":i.deviceId:i.id,ye=D?"根因：E7F 主控网关通信链路":`根因：${N(i.deviceId).name}`,Fe=Ee.get(Y)??{rootLabel:ye,items:[]};Fe.items.push(i),Ee.set(Y,Fe)}const we=Array.from(Ee.values());de==="impact"&&we.sort((i,g)=>Ja(g.items[0]).costYuan-Ja(i.items[0]).costYuan);const me=Q.filter(i=>{const g=$e(i);if(te==="cancelled"){if(!g.cancelled)return!1}else if(g.cancelled||te==="open"&&(i.status==="resolved"||i.status==="closed")||te==="resolved"&&i.status!=="resolved"||te==="closed"&&i.status!=="closed")return!1;if(!C)return!0;const D=N(i.deviceId);return`${i.title} ${i.description} ${i.id} ${g.cmmsNo} ${D.name}`.toLowerCase().includes(C)});a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Pa({tree:F,session:s,scope:R,activeAlarmCount:m.length,isOpen:T,searchKeyword:P})}
            </div>

            <div class="pacom-header-meta">
              ${le==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${ue}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${s.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${s.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${be("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${le==="alarms"}" data-main-tab="alarms">实时告警（${z.length-k}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${le==="workorders"}" data-main-tab="workorders">运维工单（${Q.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${le==="alarms"&&oe==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${m.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${le==="workorders"&&te==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${h.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${le==="alarms"&&oe==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${f}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${c}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${ee?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${p(ee)}</span></div>`:""}
          ${xe?`<div class="pacom-alert-banner">${p(xe)}</div>`:""}

          ${le==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${p(ce)}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${J==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${J==="critical"?"selected":""}>严重</option>
                      <option value="major" ${J==="major"?"selected":""}>重要</option>
                      <option value="minor" ${J==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${de==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${de==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${oe==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${oe==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${oe==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${oe==="snoozed"}" data-status-pill="snoozed">已忽略（${k}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${pe.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${pe.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${we.length} 项</span>
                  </div>
                </div>
                ${we.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${we.map(i=>{const g=i.items[0],D=Gt[g.severity]??{label:g.severity,cls:"pacom-badge--neutral"},Y=N(g.deviceId),ye=Kt(g),Fe=Ja(g),Ke=re===g.id,Le=B.get(g.id),Ne=!!Le,aa=pe.has(g.id),H=ne.get(g.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${p(g.id)}" data-check-alarm="${p(g.id)}" ${aa?"checked":""} ${!x||g.status!=="active"||Ne?"disabled":""} aria-label="选择 ${p(g.title)}" />
                                  </td>
                                  <td><span class="pacom-badge ${D.cls}">${p(D.label)}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${p(g.title)}</span>
                                      ${ue?`<span class="pacom-badge pacom-badge--accent">${p(i.rootLabel)}${i.items.length>1?` · 影响 ${i.items.length} 项`:""}</span>`:""}
                                      ${H?`<span class="pacom-badge ${H.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${p(H.verdict.toUpperCase())}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${p(g.message)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${p(Y.name)}</div>
                                    <div class="pacom-row-sub">${p(Y.zone)}</div>
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
                                    <span class="pacom-badge ${Ne?"pacom-badge--neutral":g.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Ne?`忽略 ${p(Le?.duration)}`:g.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Ne?`<button class="pacom-btn" data-unsnooze="${p(g.id)}" ${x?"":"disabled"}>恢复监控</button>`:`
                                            ${g.status==="active"?`<button class="pacom-btn" data-mark-actioned="${p(g.id)}" ${x?"":"disabled"}>标记已处置</button>`:""}
                                            ${g.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${p(g.id)}" ${x?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${p(g.id)}">${Ke?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${Ke?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${p(Zt(g))}
                                            </div>
                                            ${Le?`<div class="pacom-info-banner">忽略周期：${p(Le.duration)} · 原因备注：${p(Le.reason)}</div>`:""}
                                            ${H?`
                                                <div class="pacom-banner ${H.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${p(H.summary)}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${H.steps.map(U=>`<span>${p(U)}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${p(g.id)}</code> · 设备编号 <code>${p(g.deviceId)}</code> · 关联工单 ${p(g.workOrderId??"无")}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${p(g.id)}">单机自检（FTT）</button>
                                              ${!Ne&&g.status==="active"?`<button class="pacom-btn" data-open-snooze="${p(g.id)}" ${x?"":"disabled"}>限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${p(g.deviceId)}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${p(g.deviceId)}">定位设备 →</button>
                                            </div>
                                            ${fe===g.id?`
                                                <form data-snooze-form="${p(g.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
                                                    <button class="pacom-btn pacom-btn--primary" type="submit" style="height:28px;" ${x?"":"disabled"}>确认忽略</button>
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
              ${(()=>{const i=V?Q.find(g=>g.id===V)??null:null;if(i){const g=N(i.deviceId),D=$e(i),Y=!!(!x||D.cancelled||i.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${p(i.id)}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${p(i.title)}</h2>
                        <span class="pacom-badge pacom-badge--accent">${p(D.cmmsNo)}</span>
                        ${D.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${p(i.id)}" data-wo-status="${p(i.id)}" aria-label="更新工单状态" ${Y?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(ye=>`<option value="${ye}" ${i.status===ye?"selected":""}>${ga[ye]}</option>`).join("")}
                          <option value="cancelled" ${D.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${se===i.id?`
                        <form data-close-wo-form="${p(i.id)}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${ga[_e]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${p(D.cause??"")}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${p(D.solution??"")}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${p(D.actualCost==="--"?"":D.actualCost)}" />
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" ${x?"":"disabled"}>保存并更新状态</button>
                          </div>
                        </form>`:""}
                    <div class="pacom-wo-workbench">
                      <div style="display:flex; flex-direction:column; gap:14px;">
                        <div class="pacom-card" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:500;">工单描述与现场检查任务清单</strong>
                          <div class="pacom-row-sub">${p(i.description)}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${D.tasks.map(ye=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${p(ye.id)}" data-wo-task="${p(i.id)}" data-task-id="${p(ye.id)}" ${ye.done?"checked":""} ${Y?"disabled":""} />
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
                          <span class="pacom-kv-label">内部编号</span><span><code>${p(i.id)}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${p(D.cmmsNo)}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${p(g.name)}（${p(g.zone)}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${p(D.assigneeGroup)}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${p(D.estCost)} / 实际 ${p(D.actualCost)}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${p(D.cause??"待完单填写")}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${p(D.solution??"待完单填写")}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${p(i.deviceId??"")}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${p(i.deviceId??"")}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${p(ce)}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${te==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${te==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${te==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${te==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${te==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${me.length} 条工单</span>
                  </div>
                  ${me.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${me.map(g=>{const D=N(g.deviceId),Y=$e(g),ye=!!(!x||Y.cancelled||g.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${p(g.title)}</span>
                                        ${Y.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${p(g.description)} · <code>${p(g.id)}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${p(D.name)}</div>
                                      <div class="pacom-row-sub">${p(D.zone)}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${p(Y.cmmsNo)}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${p(Y.assigneeGroup)} · 预估 ${p(Y.estCost)}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${p(g.id)}" data-wo-status="${p(g.id)}" aria-label="更新工单状态" ${ye?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Fe=>`<option value="${Fe}" ${g.status===Fe?"selected":""}>${ga[Fe]}</option>`).join("")}
                                          <option value="cancelled" ${Y.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${p(g.id)}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${se===g.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${p(g.id)}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${ga[_e]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${p(Y.cause??"")}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${p(Y.solution??"")}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${p(Y.actualCost==="--"?"":Y.actualCost)}" />
                                            </div>
                                            <div style="display:flex; justify-content:flex-end; gap:8px;">
                                              <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                                              <button class="pacom-btn pacom-btn--primary" type="submit" ${x?"":"disabled"}>保存并更新状态</button>
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
    `,Na(a,{onToggle:()=>{T=!T,A(),T&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:i=>{P=i,A();const g=a.querySelector("[data-global-space-search]");g&&(g.focus(),g.setSelectionRange(i.length,i.length))},onPick:i=>{R=i,T=!1,A()}}),a.querySelectorAll("[data-main-tab]").forEach(i=>{i.addEventListener("click",()=>{le=i.dataset.mainTab??"alarms",ee="",A()})}),a.querySelectorAll("[data-kpi-filter]").forEach(i=>{i.addEventListener("click",()=>{const g=i.dataset.kpiFilter;ee="",g==="workorders"?(le="workorders",te=te==="open"?"all":"open"):(g==="active"||g==="acknowledged")&&(le="alarms",oe=oe===g?"all":g),A()})}),a.querySelectorAll("[data-status-pill]").forEach(i=>{i.addEventListener("click",()=>{oe=i.dataset.statusPill??"all",A()})}),a.querySelectorAll("[data-wo-pill]").forEach(i=>{i.addEventListener("click",()=>{te=i.dataset.woPill??"all",A()})}),a.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{ee="",I()}),a.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{ue=!ue,A()}),a.querySelector("[data-severity-filter]")?.addEventListener("change",i=>{J=i.currentTarget.value,A()}),a.querySelector("[data-alarm-sort]")?.addEventListener("change",i=>{de=i.currentTarget.value??"impact",A()}),a.querySelector("[data-alarm-search]")?.addEventListener("input",i=>{const g=i.currentTarget,D=g.selectionStart??g.value.length;ce=g.value,A();const Y=a.querySelector("[data-alarm-search]");Y&&(Y.focus(),Y.setSelectionRange(D,D))}),a.querySelectorAll("[data-check-alarm]").forEach(i=>{i.addEventListener("change",()=>{if(!x)return;const g=i.dataset.checkAlarm;g&&(i.checked?pe.add(g):pe.delete(g),A())})}),a.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{if(!x)return;xe="";const i=Array.from(pe);try{for(const g of i)await e.acknowledgeAlarm(g,"告警中心批量确认"),G.set(g,"批量确认处置");pe.clear(),ee=`已批量确认 ${i.length} 条告警，未来 24 小时持续校验无复发。`,await I()}catch(g){xe=g instanceof Error?g.message:String(g),A()}}),a.querySelectorAll("[data-expand-alarm]").forEach(i=>{i.addEventListener("click",()=>{const g=i.dataset.expandAlarm??null;re=re===g?null:g,fe=null,A()})}),a.querySelectorAll("[data-expand-wo]").forEach(i=>{i.addEventListener("click",()=>{const g=i.dataset.expandWo??null;V=V===g?null:g,A()})}),a.querySelectorAll("[data-run-ftt]").forEach(i=>{i.addEventListener("click",()=>{const g=z.find(D=>D.id===i.dataset.runFtt);g&&Se(g)})}),a.querySelectorAll("[data-open-snooze]").forEach(i=>{i.addEventListener("click",()=>{x&&(fe=i.dataset.openSnooze??null,A())})}),a.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{fe=null,A()}),a.querySelectorAll("[data-snooze-form]").forEach(i=>{i.addEventListener("submit",g=>{if(g.preventDefault(),!x)return;const D=i.dataset.snoozeForm;if(!D)return;const Y=new FormData(i),ye=String(Y.get("duration")??"24h"),Fe=String(Y.get("reason")??"").trim()||"现场核查中";B.set(D,{duration:ye,reason:Fe}),pe.delete(D),fe=null,ee=`已限时忽略该告警（${ye} · ${Fe}），可在「已忽略」页签中随时恢复。`,A()})}),a.querySelectorAll("[data-unsnooze]").forEach(i=>{i.addEventListener("click",()=>{if(!x)return;const g=i.dataset.unsnooze;g&&(B.delete(g),ee="已恢复该告警的实时监控。",A())})}),a.querySelectorAll("[data-go-ts]").forEach(i=>{i.addEventListener("click",()=>{const g=i.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(g)}`})}),a.querySelectorAll("[data-locate-home]").forEach(i=>{i.addEventListener("click",()=>{const g=i.dataset.locateHome??"";window.location.hash=g?`#home?device=${encodeURIComponent(g)}`:"#home"})}),a.querySelectorAll("[data-mark-actioned]").forEach(i=>{i.addEventListener("click",async()=>{if(!x)return;xe="";const g=i.dataset.markActioned;try{await e.acknowledgeAlarm(g,"现场自处理完成（Mark Actioned）"),G.set(g,"现场自处理完成"),pe.delete(g),ee="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await I()}catch(D){xe=D instanceof Error?D.message:String(D),A()}})}),a.querySelectorAll("[data-to-wo]").forEach(i=>{i.addEventListener("click",async()=>{if(!x)return;xe="";const g=z.find(D=>D.id===i.dataset.toWo);if(g)try{await e.createWorkOrder({floorId:g.floorId,deviceId:g.deviceId,alarmId:g.id,title:`处置告警：${g.title}`,description:g.message}),ee=`已将「${g.title}」转为运维工单并同步 CMMS。`,await I()}catch(D){xe=D instanceof Error?D.message:String(D),A()}})}),a.querySelectorAll("[data-wo-status]").forEach(i=>{i.addEventListener("change",async()=>{if(!x)return;const g=i.dataset.woStatus,D=i.value;if(xe="",D==="cancelled"){const Y=Q.find(ye=>ye.id===g);if(Y){const ye=$e(Y);ye.cancelled=!0,ye.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),ee="工单已移入「已取消」分类并锁定编辑。",A()}return}if(D==="resolved"||D==="closed"){se=g,_e=D,A();return}try{await e.updateWorkOrderStatus(g,D);const Y=Q.find(ye=>ye.id===g);Y&&$e(Y).history.unshift({at:"刚刚",text:`状态变更为「${ga[D]}」`}),ee="工单状态已更新并写入审计日志。",await I()}catch(Y){xe=Y instanceof Error?Y.message:String(Y),await I()}})}),a.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{se=null,A()}),a.querySelectorAll("[data-close-wo-form]").forEach(i=>{i.addEventListener("submit",async g=>{if(g.preventDefault(),!x)return;const D=i.dataset.closeWoForm,Y=new FormData(i),ye=String(Y.get("cause")??"").trim(),Fe=String(Y.get("solution")??"").trim(),Ke=String(Y.get("actualCost")??"").trim();try{await e.updateWorkOrderStatus(D,_e);const Le=Q.find(Ne=>Ne.id===D);if(Le){const Ne=$e(Le);Ne.cause=ye,Ne.solution=Fe,Ke&&(Ne.actualCost=Ke),Ne.history.unshift({at:"刚刚",text:`流转至「${ga[_e]}」· 根因：${ye}`})}se=null,V=D,ee=`工单已更新为「${ga[_e]}」，根因与方案已沉淀归档。`,await I()}catch(Le){xe=Le instanceof Error?Le.message:String(Le),A()}})}),a.querySelectorAll("[data-wo-task]").forEach(i=>{i.addEventListener("change",()=>{if(!x)return;const g=Q.find(ye=>ye.id===i.dataset.woTask);if(!g)return;const Y=$e(g).tasks.find(ye=>ye.id===i.dataset.taskId);Y&&(Y.done=i.checked),A()})})}await I()}const Jt={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},Qt={frozen:"已冻结",draft:"草稿",delivered:"已交付"},Qa={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},Xa=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],gt=[{id:"doc-hvac-7f",floorId:$.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:$.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:$.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:$.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],Xt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},vt=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function v(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Oa(a){const e=a.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面")||e.includes("屋顶")||e.includes("天面"))return 999;const s=e.match(/(-?\d+)/);if(!s)return 0;const d=Number(s[1]);return e.startsWith("B")||e.includes("地下")||e.includes("负")?-Math.abs(d):d}const ft={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function va(a){const e=a.trim(),s=e.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test(s)||/屋面|屋顶|天面/.test(e))return"RF";const d=s.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(d)return`B${Number(d[1])}`;const n=e.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(n){const F=/^\d+$/.test(n[1])?Number(n[1]):ft[n[1]];if(F)return`B${F}`}if(/首层|一层/.test(e))return"1F";const u=e.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(u){const F=/^\d+$/.test(u[1])?Number(u[1]):ft[u[1]];if(F)return`${F}F`}const x=s.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return x?`${Number(x[1])}F`:null}function Fa(a){return new Promise((e,s)=>{const d=new FileReader;d.onload=()=>typeof d.result=="string"?e(d.result):s(new Error("无法读取图片内容")),d.onerror=()=>s(new Error(`读取文件「${a.name}」失败`)),d.readAsDataURL(a)})}function es(a){return a.category==="gateway"?a.name.includes("蓝牙")?"蓝牙适配器":"主控网关":a.category==="lighting"?a.name.includes("702")?"702 照明":a.name.slice(0,6):a.category==="hvac"?a.name.includes("VAV")?"VAV-02":a.name.includes("FCU")?"FCU-01":a.name.slice(0,6):a.category==="sensor"?"环境传感":a.name.slice(0,6)}function as(a,e){const s=a.status!=="connected",d=e.filter(n=>n.hardwareBinding?.protocol===a.protocol);return d.length>0?d.map(n=>{const u=n.connectivity==="offline"||s;return{pointName:n.category==="hvac"?"送风温度 / 阀门开度":n.category==="lighting"?"回路开关 / 亮度反馈":n.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:n.name,value:u?"无上报":n.category==="hvac"?"23.4°C · 62%":n.category==="lighting"?"开启 · 80%":n.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:u?"46 分钟前":"12 秒前",quality:u?n.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${a.protocol.toUpperCase()} 采集通道汇总点`,deviceName:a.name,value:s?"采样延迟":"正常上报",interval:"60s",lastSeen:s?"38 分钟前":"9 秒前",quality:s?"delayed":"online"}]}async function ts(a,e,s){const d=new URLSearchParams(window.location.hash.split("?")[1]??""),n=d.get("sec");let u=n==="floors"||n==="projects"?"project_config":n==="floorplan"||n==="devices"||n==="inventory"?"devices":n==="network"||n==="network_topo"?"network_topo":n==="connections"?"connections":"overview",x=n==="inventory"?"list":"marking",F="binding",R="",T="all",P=Ba(),z=!1,Q="",ge="device",le="all",oe="",te=!1,J=!1,de="mesh",ue=1,ce=0,re=0,V=await e.getSpatialTree(),fe=[],se=[],_e=[];const pe={...Xt},B=[];let G=P.level==="all-projects"?V.projects[0]?.id??$.projectId:P.projectId,ne=P.level==="building"||P.level==="floor"?P.buildingId:V.buildings.find(y=>y.projectId===G)?.id??V.buildings[0]?.id??$.buildingId,Z=P.level==="floor"?P.floorId:V.floors.find(y=>y.buildingId===ne&&y.id===$.floorId)?.id??V.floors.find(y=>y.buildingId===ne)?.id??$.floorId,ee=n==="floors"?Z:null,xe="all",$e="zones",I=d.get("new")==="project",N=!1,Se=!1,A=null,m=!1,h=!1,f=!1,c=!1,k=!1,C=null,ie=new Set,Ee=null,we=!1,me=[];const K=[];let i=null,g=null,D=!1,Y=!1,ye=null,Fe=null,Ke=3,Le=!1,Ne=[],aa=null,H="",U="";const Be=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),ta=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],ua=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:$.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:$.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:$.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:$.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],Ca=new Map;function Ce(){I=!1,N=!1,Se=!1,A=null,m=!1,h=!1,f=!1,c=!1,k=!1,C=null}function wa(){return!!(I||N||Se||A||m||h||f||c||k||C)}const Sa=y=>{if(!document.body.contains(a)){document.removeEventListener("keydown",Sa);return}y.key==="Escape"&&(Ee?(Ee=null,_()):wa()?(Ce(),_()):J&&(J=!1,Y=!1,_()))};document.addEventListener("keydown",Sa);function We(){return V.floors}function Pe(y){return[...V.floors.filter(S=>S.buildingId===y)].sort((S,L)=>Oa(L.name)-Oa(S.name))}function Ye(){return V.zones}function De(y){return[...y===$.floorId?fe:[],...B.filter(L=>L.floorId===y)]}function sa(y){return y?Ye().find(S=>S.id===y)?.name.replace(/^7F\s*/,"")??y:"未分配功能区"}function xa(y){const S=V.buildings.find(j=>j.id===y);if(!S)return;G=S.projectId,ne=S.id;const L=Pe(S.id);L.some(j=>j.id===Z)||(Z=L.find(j=>j.id===$.floorId)?.id??L[0]?.id??""),ee&&!L.some(j=>j.id===ee)&&(ee=null),P=ba(Z?{level:"floor",projectId:S.projectId,buildingId:S.id,floorId:Z}:{level:"building",projectId:S.projectId,buildingId:S.id}),g=null,J=!1,Y=!1,ue=1,ce=0,re=0}function ma(y){Z=y;const S=We().find(L=>L.id===y);if(S){ne=S.buildingId;const L=V.buildings.find(j=>j.id===S.buildingId);L&&(G=L.projectId),P=ba({level:"floor",projectId:G,buildingId:S.buildingId,floorId:S.id})}g=null,J=!1,Y=!1,ue=1,ce=0,re=0}async function Te(){U="";const[y,S,L,j]=await Promise.all([e.getSpatialTree(),e.getFloorDevices($.floorId).catch(()=>[]),e.listConnections(G),e.listDeliveryBatches($.floorId)]);if(V=y,fe=S,se=L,_e=j,V.projects.length===0)G="",ne="",Z="",ee=null;else{V.projects.some(l=>l.id===G)||(G=V.projects[0].id);const t=V.buildings.filter(l=>l.projectId===G);t.some(l=>l.id===ne)||(ne=t[0]?.id??"");const r=ne?Pe(ne):[];r.some(l=>l.id===Z)||(Z=r.find(l=>l.id===$.floorId)?.id??r[0]?.id??""),ee&&!r.some(l=>l.id===ee)&&(ee=null)}const M=De(Z);g&&!M.some(t=>t.id===g)&&(g=null,J=!1),D=M.find(t=>t.id===g)?.physicalInstalled??!1,_()}function ia(){const y=a.querySelector('[data-role="dep-viewport"]');y&&(y.style.transform=`translate(${ce}px, ${re}px) scale(${ue})`);const S=a.querySelector('[data-role="dep-zoom-label"]');S&&(S.textContent=`${Math.round(ue*100)}%`)}function Ta(y){U="",y.connectivity==="offline"?U=`单机回读自检未通过（FAIL）：「${y.name}」当前离线，请核查网关链路或中继覆盖。`:H=`单机回读自检通过（PASS）：「${y.name}」指令下发与状态回读一致，已安全复位。`,_()}function Ua(){U="";const y=De(Z),S=y.filter(E=>E.connectivity==="offline"),L=y.length-S.length,j=new Date;aa={ranAt:`${String(j.getHours()).padStart(2,"0")}:${String(j.getMinutes()).padStart(2,"0")}:${String(j.getSeconds()).padStart(2,"0")}`,total:y.length,passed:L,failed:S.length,failedNames:S.map(E=>E.name)},S.length>0?U=`全层批量自检完成：${L}/${y.length} 台通过，${S.length} 台异常（${S.map(E=>E.name).join("、")}）。`:H=`全层批量自检全部通过（${L}/${y.length}），设备已自动安全复位。`,_()}function Va(){const y=De(Z),S=[],L=y.filter(r=>r.connectivity==="offline"),j=y.filter(r=>!r.planPoint),M=y.filter(r=>Be.get(r.id)?.proxy).length,E=y.filter(r=>Be.get(r.id)?.relay).length,t=y.length?E/y.length:0;L.length>0?L.forEach(r=>S.push({level:"fail",title:`节点不可达：${r.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:r.id})):S.push({level:"ok",title:"全网节点可达性正常",detail:`${y.length} 台设备均正常响应心跳。`}),M<1?S.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):S.push({level:"ok",title:`代理节点配置合理（${M} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),t>.25&&y.length>=4&&S.push({level:"warn",title:`中继比例偏高（${Math.round(t*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),j.length>0&&S.push({level:"warn",title:`尚有 ${j.length} 台未完成设备标记`,detail:"请在「设备管理 → 设备标记」中补齐平面坐标以便施工定位。"}),Ne=S,H=`已完成蓝牙 Mesh 网络体检（检测 ${y.length} 台节点，发现 ${S.filter(r=>r.level!=="ok").length} 项关注）。`,_()}function la(){const y=De(Z),S=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...y.map(E=>[E.name,E.category,sa(E.logicalZoneId),E.planPoint?`${Math.round(E.planPoint.x*100)}%/${Math.round(E.planPoint.y*100)}%`:"未标记",E.hardwareBinding?`${E.hardwareBinding.protocol} ${E.hardwareBinding.networkAddress}`:"未绑定",E.physicalInstalled?"已复核":"待复核",E.connectivity==="online"?"在线":"离线"].join(","))],L=new Blob([`\uFEFF${S.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),j=URL.createObjectURL(L),M=document.createElement("a");M.href=j,M.download="pacom-device-list.csv",M.click(),URL.revokeObjectURL(j)}function w(y){const S=new Set(Pe(y.id).map(j=>va(j.name)??j.name.toUpperCase())),L=[];for(let j=1;j<=y.aboveFloors;j+=1){const M=`${j}F`;S.has(M)||L.push({kind:"above",level:j,name:M})}for(let j=1;j<=y.belowFloors;j+=1){const M=`B${j}`;S.has(M)||L.push({kind:"below",level:-j,name:M})}return y.hasRoof&&!S.has("RF")&&L.push({kind:"roof",level:99,name:"RF"}),L}async function O(y){const S=V.buildings.find(j=>j.id===y);if(!S)return 0;const L=w(S);for(const j of L)await e.upsertFloor?.({buildingId:S.id,kind:j.kind,level:j.level,name:j.name});return L.length}const W={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。",granularity:"building"},project_config:{title:"项目配置",subtitle:"在同一视图内贯通管理项目、园区楼宇、楼层平面底图、功能区与竣工图纸。",granularity:"project"},devices:{title:"设备管理",subtitle:"围绕当前楼层完成设备标记、设备列表核查、参数下发、自检与设备分组。",granularity:"floor"},network_topo:{title:"网络拓扑",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、环境等异构子系统通道及传感器采集质量。",granularity:"project"}};function ae(y,S="layers"){return`
      <div class="dep-empty-card">
        <div class="dep-empty-icon">${be(S,20)}</div>
        <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
        <span class="pacom-row-sub" style="max-width:440px;">按「创建项目 → 添加楼宇与楼层 → 上传平面底图」完成建档后，即可开展设备标记、网络同步与交付验收。</span>
        <div class="dep-empty-steps">
          <span>1. 创建项目</span>
          <span>→</span>
          <span>2. 添加楼宇与楼层</span>
          <span>→</span>
          <span>3. 上传平面图</span>
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${y?"":"disabled"}>+ 创建第一个项目</button>
      </div>`}function Ie(){const y=(S,L,j,M=!1)=>`
      <button type="button" class="pacom-unified-item" aria-current="${u===S}" data-dep-nav="${S}">
        ${be(L,16)}
        <span>${j}</span>
        ${M?'<span class="dep-rail-dot" title="有变更待同步至边缘网关"></span>':""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${y("overview","layout-dashboard","部署总览")}
          ${y("project_config","layers","项目配置")}
          ${y("devices","map-pin","设备管理")}
          ${y("network_topo","waypoints","网络拓扑",Le)}
          ${y("connections","plug","系统接入")}
        </div>
      </aside>
    `}function Ze(y){return V.projects.length===0?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${y?"":"disabled"}>+ 新建项目</button>`:u==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出清单</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${y?"":"disabled"}>+ 交付冻结</button>
      `:u==="project_config"?`<button type="button" class="pacom-btn" data-open-new-proj="1" ${y?"":"disabled"}>+ 新建项目</button>`:u==="devices"?`${`
        <div class="pacom-tabs" role="tablist" aria-label="设备管理视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${x==="marking"}" data-dev-subtab="marking">设备标记</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${x==="list"}" data-dev-subtab="list">设备列表</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${x==="groups"}" data-dev-subtab="groups">设备分组</button>
        </div>`}${x==="marking"?'<button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>':x==="list"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${y?"":"disabled"}>+ 新建分组</button>`}`:u==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${y?"":"disabled"}>${Le?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:`
      <button type="button" class="pacom-btn" data-edge-restart="service" ${y?"":"disabled"}>重启边缘服务</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${y?"":"disabled"}>+ 新增接入通道</button>
    `}function ze(y){if(V.projects.length===0)return ae(y,"layout-dashboard");const S=ne?Pe(ne):[],L=S.filter(l=>!!l.plan).length,j=S.flatMap(l=>De(l.id)),M=j.filter(l=>!!l.planPoint).length,E=j.filter(l=>l.connectivity==="online").length,t=j.filter(l=>l.physicalInstalled).length,r=S.filter(l=>De(l.id).length>0&&!Le).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${S.length>0&&L===S.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 项目与底图</span>
          <div class="pacom-kpi-value">${L}<span class="pacom-kpi-unit">/ ${S.length} 层</span></div>
          <span class="pacom-kpi-delta">${S.length>0&&L===S.length?"全部底图就绪":`尚缺 ${Math.max(0,S.length-L)} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="marking" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${j.length>0&&M===j.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${M}<span class="pacom-kpi-unit">/ ${j.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${ta.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${j.length>0&&E===j.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${E}<span class="pacom-kpi-unit">/ ${j.length} 台</span></div>
          <span class="pacom-kpi-delta">${j.length-E>0?`${j.length-E} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${Le?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${r}<span class="pacom-kpi-unit">/ ${S.length} 层</span></div>
          <span class="pacom-kpi-delta">${Le?"有变更待下发 →":`基线 v${Ke}`}</span>
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
                ${S.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前楼宇暂无楼层</strong><span>请先在「项目配置」中生成楼层并上传底图。</span></div></td></tr>':S.map(l=>{const o=De(l.id),q=Ye().filter(ke=>ke.floorId===l.id),b=o.filter(ke=>!!ke.planPoint).length,X=o.filter(ke=>ke.connectivity==="online").length,Ae=o.filter(ke=>ke.physicalInstalled).length,je=!!l.plan,qe=je&&o.length>0&&b===o.length&&Ae===o.length&&X===o.length&&!Le;return`
                            <tr>
                              <td><strong>${v(l.name)}</strong><div class="pacom-row-sub">${l.areaSqm?`${l.areaSqm} m²`:"待补面积"}</div></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-expand="1" data-matrix-floor="${v(l.id)}"><span class="pacom-dot ${je?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${je?`已传图 · ${q.length} 区`:"待传底图"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="marking" data-matrix-floor="${v(l.id)}"><span class="pacom-dot ${o.length>0&&b===o.length?"pacom-dot--online":o.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${o.length>0?`${b}/${o.length}`:"未标记"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${v(l.id)}"><span class="pacom-dot ${o.length>0&&X===o.length?"pacom-dot--online":o.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${o.length>0?`${X}/${o.length}`:"—"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${v(l.id)}"><span class="pacom-dot ${o.length===0?"pacom-dot--offline":Le?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${o.length===0?"—":Le?"待同步":`v${Ke}`}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="list" data-matrix-floor="${v(l.id)}"><span class="pacom-dot ${o.length>0&&Ae===o.length?"pacom-dot--online":o.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${o.length>0?`${Ae}/${o.length}`:"—"}</span></button></td>
                              <td style="text-align:right;"><span class="pacom-badge ${qe?"pacom-badge--online":o.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${qe?"可验收交付":o.length>0?"实施中":"待配置"}</span></td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${aa?`<div class="pacom-banner ${aa.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${aa.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${aa.passed}/${aa.total} 台${aa.failedNames.length?` · 异常：${aa.failedNames.join("、")}`:" · 全部安全复位"}</span>
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
                ${_e.map(l=>`
                    <tr>
                      <td><div style="font-weight:450;">${v(l.versionTag)}</div><div class="pacom-row-sub"><code>${v(l.id)}</code></div></td>
                      <td><strong>${l.verifiedCount}</strong> / ${l.deviceCount} 台</td>
                      <td><div>${v(l.frozenBy)}</div><div class="pacom-row-sub">${v(l.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${Qt[l.status]??l.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Me(y){if(V.projects.length===0)return ae(y,"layers");const S=V.projects.find(b=>b.id===G)??V.projects[0],L=V.buildings.filter(b=>b.projectId===S.id),j=L.reduce((b,X)=>b+Pe(X.id).length,0),M=L.find(b=>b.id===ne)??L[0]??null,E=M?Pe(M.id):[],t=E.filter(b=>!b.plan).length,r=E.filter(b=>Ye().filter(X=>X.floorId===b.id).length===0).length,l=E.filter(b=>xe==="missing_plan"?!b.plan:xe==="missing_zone"?Ye().filter(X=>X.floorId===b.id).length===0:!0),o=M?w(M):[],q=S.location?`${S.location.lng.toFixed(4)}, ${S.location.lat.toFixed(4)}`:"未设置坐标";return`
      <div class="dep-project-strip">
        <div class="dep-project-strip-main">
          <div class="dep-project-cover">
            <img src="${v(S.imageUrl??"./media/gzlab.jpg")}" alt="${v(S.name)}" />
          </div>
          <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">${v(S.name)}</strong>
              <span class="pacom-badge pacom-badge--neutral">${L.length} 栋楼宇</span>
              <span class="pacom-badge pacom-badge--neutral">${j} 个楼层</span>
            </div>
            <span class="pacom-row-sub">${v(S.city||"未填城市")}${S.address?` · ${v(S.address)}`:""} · 坐标 ${v(q)}</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-edit-proj="1" ${y?"":"disabled"}>编辑项目</button>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <div>
            <h2 class="pacom-section-title">园区楼宇（${L.length} 栋）</h2>
            <span class="pacom-row-sub">点击楼宇卡片切换下方楼层列表，点「编辑参数」修改外观与层数</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-bld="1" ${y?"":"disabled"}>+ 新建楼宇</button>
        </div>
        ${L.length===0?`
            <div class="dep-empty-card">
              <div class="dep-empty-icon">${be("building-2",20)}</div>
              <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${v(S.name)} 暂无楼宇</strong>
              <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
              <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${y?"":"disabled"}>+ 添加第一栋楼宇</button>
            </div>`:`
            <div class="dep-building-grid">
              ${L.map(b=>{const X=Pe(b.id),Ae=X.filter(Oe=>!!Oe.plan).length,je=X.length>0?Math.round(Ae/X.length*100):0,qe=w(b),ke=M?.id===b.id,ve=X.length===0?"pacom-badge--neutral":Ae===X.length?"pacom-badge--online":"pacom-badge--warning";return`
                    <article class="dep-building-card ${ke?"is-active":""}" data-select-building="${v(b.id)}">
                      <div class="dep-building-stage">
                        <img src="${v(b.imageUrl??"./media/building-e.webp")}" alt="${v(b.name)}" />
                      </div>
                      <div class="dep-building-body">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${v(b.name)}</strong>
                          <span class="pacom-badge ${ve}">${X.length===0?"未建层":`${Ae}/${X.length} 底图`}</span>
                        </div>
                        <div class="pacom-row-sub">地上 ${b.aboveFloors} 层${b.belowFloors>0?` · 地下 ${b.belowFloors} 层`:""}${b.hasRoof?" · RF":""}${b.areaSqm?` · ${b.areaSqm} m²`:""}</div>
                        <div class="pacom-progress-track">
                          <div class="pacom-progress-fill" style="width:${je}%; background:${je===100?"var(--pacom-status-online)":"var(--pacom-accent-solid)"};"></div>
                        </div>
                        ${qe.length>0?`<div style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:12px; color:var(--pacom-text-secondary);">
                                 <span>尚缺 ${qe.length} 个楼层</span>
                                 <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="height:22px; padding:0 6px; font-size:12px;" data-fill-missing-floors="${v(b.id)}" ${y?"":"disabled"}>一键补齐</button>
                               </div>`:""}
                      </div>
                      <div class="dep-building-foot">
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${v(b.id)}" ${y?"":"disabled"}>编辑参数</button>
                        <span class="pacom-row-sub" style="font-size:12px; color:${ke?"var(--pacom-accent-fg)":"var(--pacom-text-secondary)"};">${ke?"当前查看中":"点击切换楼层"}</span>
                      </div>
                    </article>`}).join("")}
              <button type="button" class="dep-building-add-card" data-open-new-bld="1" ${y?"":"disabled"}>
                ${be("plus",20)}
                <span style="font-size:13px;">新建楼宇</span>
              </button>
            </div>`}
      </section>

      ${M?`
          <section class="pacom-section">
            <div class="pacom-section-head">
              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <h2 class="pacom-section-title">${v(M.name)} 楼层与底图（${E.length}）</h2>
                <div class="pacom-count-pills">
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${xe==="all"}" data-floor-list-filter="all">全部 <span class="pacom-count-num">${E.length}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${xe==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 <span class="pacom-count-num">${t}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${xe==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 <span class="pacom-count-num">${r}</span></button>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                ${o.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${v(M.id)}" ${y?"":"disabled"}>一键补齐 ${o.length} 层</button>`:""}
                <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-floor="1" ${y?"":"disabled"}>+ 新增楼层</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-batch-modal="1" ${y?"":"disabled"}>批量导入底图</button>
              </div>
            </div>

            ${E.length===0?`
                <div class="dep-empty-card">
                  <div class="dep-empty-icon">${be("layers",20)}</div>
                  <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${v(M.name)} 暂无楼层</strong>
                  <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${v(M.id)}" ${y?"":"disabled"}>一键生成全部楼层</button>
                    <button type="button" class="pacom-btn" data-open-new-floor="1" ${y?"":"disabled"}>+ 手动新增楼层</button>
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
                        ${l.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':l.map(b=>{const X=Ye().filter(ve=>ve.floorId===b.id),Ae=[...gt,...K].filter(ve=>ve.floorId===b.id),je=De(b.id),qe=ee===b.id,ke=E.filter(ve=>ve.id!==b.id);return`
                                    <tr>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:7px;">
                                          <span class="pacom-dot ${b.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                          <strong>${v(b.name)}</strong>
                                        </div>
                                      </td>
                                      <td><span class="pacom-row-sub">${b.areaSqm?`${b.areaSqm} m²`:"—"}</span></td>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:8px;">
                                          ${b.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${v(M.name)} ${v(b.name)} 平面底图" data-lb-src="${v(b.plan.imageUrl)}" title="查看大图"><img src="${v(b.plan.imageUrl)}" alt="${v(b.name)}" /></button>
                                                 <span class="pacom-badge pacom-badge--online">已就绪</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                          <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="cursor:pointer; height:24px; padding:0 6px; font-size:12px;">
                                            <span>${b.plan?"替换":"上传"}</span>
                                            <input type="file" name="floorPlan_${v(b.id)}" accept="image/*" data-upload-floor="${v(b.id)}" style="display:none;" ${y?"":"disabled"} />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        ${X.length>0?`<span>${X.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${v(X.slice(0,2).map(ve=>ve.name.replace(/^7F\s*/,"")).join("、"))}${X.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                                      </td>
                                      <td><span class="pacom-row-sub">${Ae.length} 份</span></td>
                                      <td>
                                        <div style="display:flex; justify-content:flex-end; gap:6px;">
                                          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-expand-floor="${v(b.id)}">${qe?"收起配置":"展开配置"}</button>
                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${v(b.id)}">设备标记 →</button>
                                        </div>
                                      </td>
                                    </tr>
                                    ${qe?`
                                        <tr class="pacom-table-detail-row">
                                          <td colspan="6">
                                            <div class="dep-floor-expand-grid">
                                              <div class="dep-floor-expand-col">
                                                <div class="dep-plan-preview-box" style="min-height:260px;" data-single-floor-drop="${v(b.id)}">
                                                  <div class="dep-plan-toolbar">
                                                    ${b.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${v(M.name)} ${v(b.name)} 平面底图" data-lb-src="${v(b.plan.imageUrl)}">查看大图</button>`:""}
                                                    <label class="dep-plan-tool-btn" style="cursor:pointer;">
                                                      <span>${b.plan?"替换底图":"上传底图"}</span>
                                                      <input type="file" name="floorPlanDrop_${v(b.id)}" accept="image/*" data-upload-floor="${v(b.id)}" style="display:none;" ${y?"":"disabled"} />
                                                    </label>
                                                    ${b.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${v(b.id)}" ${y?"":"disabled"}>清空</button>`:""}
                                                  </div>
                                                  ${b.plan?`<img src="${v(b.plan.imageUrl)}" alt="${v(b.name)} 平面图" style="width:100%; max-height:290px; object-fit:contain; display:block;" />`:`<div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:24px; text-align:center;">
                                                           <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${v(b.name)} 2D 平面图到此处</strong>
                                                           <span class="pacom-row-sub">支持透明 WebP / PNG / JPG</span>
                                                         </div>`}
                                                </div>
                                              </div>

                                              <div class="dep-floor-expand-col">
                                                <div class="pacom-settings-card" style="padding:10px 16px;">
                                                  <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                                                    <form data-save-floor="${v(b.id)}" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                                                      <input class="pacom-input" name="fName" value="${v(b.name)}" aria-label="楼层名称" style="width:76px; height:32px; flex:none;" required ${y?"":"disabled"} />
                                                      <input class="pacom-input" name="fArea" type="number" step="0.1" value="${v(b.areaSqm??"")}" placeholder="面积 m²" aria-label="建筑面积" style="width:110px; height:32px; flex:none;" ${y?"":"disabled"} />
                                                      <button type="submit" class="pacom-btn" ${y?"":"disabled"}>保存</button>
                                                    </form>
                                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-delete-floor="${v(b.id)}" ${!y||je.length>0?`disabled title="${je.length>0?`已关联 ${je.length} 台设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                                                  </div>
                                                </div>

                                                <div class="pacom-settings-card" style="padding:4px 16px;">
                                                  <div class="pacom-setting-row" style="padding:10px 0; justify-content:space-between; gap:8px;">
                                                    <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${$e==="zones"}" data-floor-detail-tab="zones">功能区（${X.length}）</button>
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${$e==="docs"}" data-floor-detail-tab="docs">竣工图纸与手册（${Ae.length}）</button>
                                                    </div>
                                                    ${$e==="zones"?X.length>0&&ke.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-open-copy-zones="${v(b.id)}" ${y?"":"disabled"}>复用至其他层…</button>`:"":`<label class="pacom-btn pacom-btn--sm" style="cursor:pointer;"><span>+ 关联文件</span><input type="file" name="attachDoc_${v(b.id)}" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${v(b.id)}" style="display:none;" ${y?"":"disabled"} /></label>`}
                                                  </div>
                                                  ${$e==="zones"?`
                                                        ${X.length===0?`
                                                            <div class="pacom-setting-row" style="padding:10px 0; flex-direction:column; align-items:flex-start; gap:8px;">
                                                              <span class="pacom-row-sub">暂未划分功能区，可一键套用常用模板：</span>
                                                              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                                                ${vt.map(ve=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${v(ve.key)}" data-tpl-floor="${v(b.id)}" ${y?"":"disabled"}>+ ${v(ve.label)}</button>`).join("")}
                                                              </div>
                                                            </div>`:X.map(ve=>i===ve.id?`
                                                                      <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-save-edit-zone="${v(ve.id)}" data-zone-floor="${v(b.id)}">
                                                                        <input class="pacom-input" name="zName" value="${v(ve.name)}" style="width:180px; height:30px; flex:none;" required />
                                                                        <select class="pacom-select" name="zCat" style="width:110px; height:30px;">
                                                                          ${Object.keys(Qa).map(Oe=>`<option value="${Oe}" ${ve.category===Oe?"selected":""}>${Qa[Oe]}</option>`).join("")}
                                                                        </select>
                                                                        <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                                                      </form>`:`
                                                                      <div class="pacom-setting-row" style="padding:9px 0;">
                                                                        <div class="pacom-setting-meta" style="min-width:140px;">
                                                                          <span class="pacom-setting-title">${v(ve.name)} <span class="pacom-badge pacom-badge--neutral">${v(Qa[ve.category]??ve.category)}</span></span>
                                                                        </div>
                                                                        <div class="pacom-setting-control">
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${v(ve.id)}" ${y?"":"disabled"}>编辑</button>
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${v(ve.id)}" ${y?"":"disabled"}>删除</button>
                                                                        </div>
                                                                      </div>`).join("")}
                                                        <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-add-zone="${v(b.id)}">
                                                          <input class="pacom-input" name="zoneName" placeholder="新功能区名称（如：${v(b.name)} 东侧实验区）" style="width:210px; height:32px; flex:none;" required ${y?"":"disabled"} />
                                                          <select class="pacom-select" name="zoneCat" style="width:112px; height:32px;" ${y?"":"disabled"}>
                                                            <option value="lab">实验区</option>
                                                            <option value="office">办公区</option>
                                                            <option value="meeting">会议室</option>
                                                            <option value="corridor">走廊/公区</option>
                                                            <option value="utility">机房/后勤</option>
                                                            <option value="outdoor">露台/活动区</option>
                                                          </select>
                                                          <button type="submit" class="pacom-btn" ${y?"":"disabled"}>+ 添加</button>
                                                        </form>`:Ae.length===0?'<div class="pacom-setting-row" style="padding:12px 0;"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':Ae.map(ve=>`
                                                              <div class="pacom-setting-row" style="padding:9px 0;">
                                                                <div class="pacom-setting-meta" style="min-width:140px;">
                                                                  <span class="pacom-setting-title">${v(ve.name)}</span>
                                                                  <span class="pacom-row-sub">${v(ve.category)} · ${v(ve.size)} · ${v(ve.updatedAt)}</span>
                                                                </div>
                                                                <div class="pacom-setting-control">
                                                                  <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${v(ve.id)}">查阅</button>
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
    `}function He(y){if(!J||u!=="devices"||x==="groups")return"";const L=De(Z).find(t=>t.id===g)??null;if(!L)return"";const j=Be.get(L.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${Z.slice(-4)}`},M=ta.filter(t=>t.deviceId===L.id),E=Ca.get(L.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450};return`
      <aside class="pacom-drawer" style="width:376px;" aria-label="设备配置抽屉">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${v(L.name)}</h2>
            <div class="pacom-row-sub">${v(sa(L.logicalZoneId))} · v${L.version}</div>
          </div>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${be("x",16)}</button>
        </div>

        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${y?"":"disabled"}>${Y?"点击图纸定位中…":"点图更新坐标"}</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${v(L.id)}">Ping 闪灯 5s</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${F==="binding"}" data-drawer-tab="binding">绑定与安装</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${F==="params"}" data-drawer-tab="params">自治参数</button>
        </div>

        ${F==="binding"?`
            ${L.category==="lighting"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">回路可视化灯点（${M.length}）</span>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${v(L.id)}" ${y?"":"disabled"}>+ 添加灯点</button>
                  </div>
                  ${M.map(t=>`
                      <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                        <span><strong>${v(t.channel)}</strong> · ${v(t.label)}</span>
                        <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:12px;" data-del-light-marker="${v(t.id)}" ${y?"":"disabled"}>删除</button>
                      </div>`).join("")}
                </div>`:""}

            ${L.category!=="hvac"&&L.category!=="meter"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                    <code style="font-size:12px;">${v(j.meshUuid)}</code>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Proxy 代理（建议每层 2–3 个）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${j.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${v(L.id)}" ${y?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${j.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${v(L.id)}" ${y?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                </div>`:""}

            <form data-role="binding-form" class="pacom-control-box" style="gap:10px;">
              <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">通信协议</span>
                  <select class="pacom-select" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(t=>`<option value="${t}" ${L.hardwareBinding?.protocol===t?"selected":""}>${t.toUpperCase()}</option>`).join("")}
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">网络地址 / 主题</span>
                  <input class="pacom-input" name="networkAddress" placeholder="地址或主题" value="${v(L.hardwareBinding?.networkAddress??"")}" />
                </label>
              </div>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:10px;">
                <label class="dep-field" style="flex:1;">
                  <span class="dep-field-label">端口 / 回路</span>
                  <input class="pacom-input" name="portOrChannel" placeholder="端口或回路" value="${v(L.hardwareBinding?.portOrChannel??"")}" />
                </label>
                <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; height:32px; flex-shrink:0;">
                  <span>物理已复核</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${D}" data-toggle-phys="1" ${y?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                </span>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${y?"":"disabled"}>保存绑定与复核（v${L.version}）</button>
            </form>`:`
            <form data-save-dev-params="${v(L.id)}" class="pacom-control-box" style="gap:10px;">
              <div>
                <div style="font-size:14px; font-weight:450;">人感与光感自治参数</div>
                <div class="pacom-row-sub">自动关灯延时、恢复自动延时与光照度门限</div>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${E.offDelayMin}" ${y?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" value="${E.restoreMin}" ${y?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" value="${E.luxOn}" ${y?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" value="${E.luxOff}" ${y?"":"disabled"} /></label>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${y?"":"disabled"}>下发设备参数</button>
            </form>`}
      </aside>
    `}function Ue(y){if(V.projects.length===0)return`
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${ae(y,"map-pin")}</div>
        </main>`;const S=ne?Pe(ne):[],L=S.find(l=>l.id===Z)??S[0],j=De(Z),M=Ye().filter(l=>l.floorId===Z),E=J?j.find(l=>l.id===g)??null:null,t=oe.trim().toLowerCase(),r=j.filter(l=>!(le==="unverified"&&l.physicalInstalled||le==="unplaced"&&l.planPoint||t&&!`${l.name} ${sa(l.logicalZoneId)}`.toLowerCase().includes(t)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${be("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${v(oe)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${te?"is-active":""}" data-toggle-hud-pool="1">设备池 ${j.length}</button>
            <button type="button" class="pacom-hud-pill" data-open-new-dev="1" ${y?"":"disabled"}>+ 新增设备</button>
          </div>

          ${te?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${v(L?.name??"7F")} 设备池（${r.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${be("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-count-pills">
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${le==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${j.length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${le==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${j.filter(l=>!l.physicalInstalled).length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${le==="unplaced"}" data-dev-filter="unplaced">未标记 <span class="pacom-count-num">${j.filter(l=>!l.planPoint).length}</span></button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${r.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':r.map(l=>`
                            <div class="pacom-row ${l.id===g&&J?"is-selected":""}" data-pick-dev="${v(l.id)}" style="padding:8px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${v(l.name)}</div>
                                <div class="pacom-row-sub">${v(sa(l.logicalZoneId))} · ${l.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${l.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${l.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${Y?"crosshair":"grab"};">
          ${L?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${ce}px, ${re}px) scale(${ue});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${v(L.plan.imageUrl)}" alt="${v(L.name)} 平面图" />
                  ${ge==="zone"?M.map(l=>{const o=pe[l.id];return o?`<div class="pacom-zone-hotspot is-active" style="left:${o.left}%; top:${o.top}%; width:${o.width}%; height:${o.height}%;"><span class="pacom-zone-tag">${v(l.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${j.filter(l=>l.planPoint).map(l=>`
                      <button type="button" class="pacom-pin ${l.id===g&&J?"is-selected":""} ${l.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(l.planPoint.x*100).toFixed(2)}%; top:${(l.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${v(l.id)}" title="${v(l.name)}">
                        <span class="pacom-dot ${l.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${v(es(l))}</span>
                      </button>`).join("")}
                  ${ge==="light_marker"||E?.category==="lighting"?ta.filter(l=>j.some(o=>o.id===l.deviceId)).map(l=>`
                            <span class="dep-light-dot" style="left:${(l.x*100).toFixed(1)}%; top:${(l.y*100).toFixed(1)}%;" title="${v(l.label)}（${v(l.channel)}）">
                              ${be("sparkles",12)}<span>${v(l.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${v(Z)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${S.map(l=>`
              <button type="button" class="pacom-elev-item ${l.id===Z?"is-active":""}" data-scrubber-floor="${v(l.id)}" title="${v(l.name)}${l.plan?" · 已传底图":" · 待传底图"}">
                ${l.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${v(l.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${ge==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${ge==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${ge==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${be("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(ue*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${be("plus",16)}</button>
        </div>
      </main>
    `}function Qe(y){if(V.projects.length===0)return ae(y,"list");const S=De(Z),L=R.trim().toLowerCase(),j=S.filter(E=>!(T==="online"&&E.connectivity!=="online"||T==="offline"&&E.connectivity!=="offline"||T==="unverified"&&E.physicalInstalled||L&&!`${E.name} ${sa(E.logicalZoneId)} ${E.hardwareBinding?.protocol??""}`.toLowerCase().includes(L))),M=S.filter(E=>E.connectivity==="online").length;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${v(R)}" aria-label="搜索设备列表" />
          <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
            <option value="all" ${T==="all"?"selected":""}>全部状态（${S.length}）</option>
            <option value="online" ${T==="online"?"selected":""}>仅看在线（${M}）</option>
            <option value="offline" ${T==="offline"?"selected":""}>仅看离线（${S.length-M}）</option>
            <option value="unverified" ${T==="unverified"?"selected":""}>待物理复核（${S.filter(E=>!E.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${be("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-dev="1" ${y?"":"disabled"}>+ 新增设备</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-export-inv="1">导出 CSV</button>
        </div>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${j.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词、切换筛选，或点击「+ 新增设备」。</span></div></td></tr>':j.map(E=>`
                        <tr style="cursor:pointer;" data-open-dev-drawer="${v(E.id)}">
                          <td><div style="font-weight:450;">${v(E.name)}</div><div class="pacom-row-sub">${v(sa(E.logicalZoneId))} · v${E.version}</div></td>
                          <td><span class="pacom-badge ${E.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${E.planPoint?`${Math.round(E.planPoint.x*100)}%,${Math.round(E.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${E.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${E.hardwareBinding?E.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${E.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${E.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${E.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${E.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${v(E.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-dev-params="${v(E.id)}">配置</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${v(E.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${j.length} / ${S.length} 台设备 · ${M} 在线 · ${S.length-M} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dev-subtab="marking">切换至设备标记 →</button>
        </div>
      </div>
    `}function na(y){if(V.projects.length===0)return ae(y,"folder-kanban");const S=ua.filter(M=>M.floorId===Z||Z===$.floorId&&M.floorId===$.floorId),L=S.filter(M=>M.track==="mesh_auto"),j=S.filter(M=>M.track==="cloud_biz");return`
      <div class="pacom-grid-2">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${L.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${L.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':L.map(M=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${v(M.name)} <span class="pacom-badge pacom-badge--neutral">${v(M.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${M.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${v(M.id)}">组控测试</button></div>
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
                          <span class="pacom-setting-title">${v(M.name)} <span class="pacom-badge pacom-badge--neutral">${v(M.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${M.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${v(M.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>
      </div>
    `}function Ve(y){if(V.projects.length===0)return ae(y,"waypoints");const S=De(Z),L=Ye().filter(o=>o.floorId===Z),j=S.filter(o=>o.category!=="hvac"&&o.category!=="meter"),M=j.filter(o=>Be.get(o.id)?.proxy).length,E=j.filter(o=>Be.get(o.id)?.relay).length,t=S.filter(o=>o.category==="gateway"),r=S.filter(o=>Be.get(o.id)?.relay||Be.get(o.id)?.proxy),l=S.filter(o=>o.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge ${Le?"pacom-badge--warning":"pacom-badge--online"}">${Le?"有变更待同步":"协同锁空闲 · 已同步"}</span>
            <span class="pacom-row-sub">Mesh 节点 ${j.length} 台 · Proxy ${M} 个 · Relay ${E} 个 · 边缘基线 v${Ke}</span>
          </div>
        </div>
        ${Ne.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${Ne.map(o=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${v(o.title)}</strong> <span class="pacom-row-sub">· ${v(o.detail)}</span></div>
                      <span class="pacom-badge ${o.level==="ok"?"pacom-badge--online":o.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${o.level==="ok"?"通过":o.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达设备标记）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${de==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${de==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${de==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${t.length===0?'<div class="pacom-row-sub">本层暂未配置网关节点。</div>':t.map(o=>`
                          <button type="button" class="dep-topo-node ${o.connectivity==="offline"?"is-issue":""}" data-topo-jump="${v(o.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${v(o.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                            <span class="pacom-row-sub">${v(o.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                          </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${r.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，可在「设备管理」抽屉中为传感器开启。</div>':r.map(o=>{const q=Be.get(o.id);return`
                            <button type="button" class="dep-topo-node ${o.connectivity==="offline"?"is-issue":""}" data-topo-jump="${v(o.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${v(o.name)}</strong><span class="pacom-badge pacom-badge--accent">${q?.proxy?"Proxy":""}${q?.proxy&&q?.relay?" + ":""}${q?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${v(sa(o.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${l.length===0?'<div class="pacom-row-sub">本层暂无末端设备。</div>':l.map(o=>`
                          <button type="button" class="dep-topo-node ${o.connectivity==="offline"?"is-issue":""}" data-topo-jump="${v(o.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${v(o.name)}</strong><span class="pacom-badge ${o.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${o.connectivity==="online"?"在线":"离线"}</span></div>
                            <span class="pacom-row-sub">${v(sa(o.logicalZoneId))} · ${v(o.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                          </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${S.filter(o=>o.category==="sensor"||o.category==="gateway").map(o=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${v(o.id)}">
                      <strong>${v(o.name)}</strong>
                      <span class="pacom-row-sub">${o.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${S.filter(o=>o.category==="lighting"||o.category==="hvac").map(o=>`
                    <button type="button" class="dep-topo-node ${o.connectivity==="offline"?"is-issue":""}" data-topo-jump="${v(o.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${v(o.name)}</strong><span class="pacom-badge ${o.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${o.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${v(sa(o.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${L.map(o=>{const q=S.filter(X=>X.logicalZoneId===o.id),b=q.some(X=>X.connectivity==="offline");return`
                      <div class="dep-topo-node ${b?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${v(o.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${b?"pacom-badge--warning":"pacom-badge--online"}">${q.length} 台设备</span></div>
                        <span class="pacom-row-sub">${b?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function Ge(y){if(V.projects.length===0)return ae(y,"plug");const S=se.reduce((E,t)=>E+t.collectedPoints,0),L=se.reduce((E,t)=>E+t.calculatedPoints,0),j=se.filter(E=>E.status==="connected").length,M=se.filter(E=>E.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${j}<span class="pacom-kpi-unit">/ ${se.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${se.length?Math.round(j/se.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${S}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${L}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
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
                ${se.map(E=>{const t=Jt[E.status]??{label:E.status,cls:"pacom-badge--neutral"},r=E.status==="connected"?98:E.status==="degraded"?62:0,l=r>=75?"var(--pacom-status-online)":r>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",o=Fe===E.id,q=o?as(E,fe):[];return`
                      <tr>
                        <td><strong>${v(E.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${E.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${v(E.endpoint)}</code></td>
                        <td>采集 ${E.collectedPoints} / 计算 ${E.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${t.cls}">${t.label}</span>
                            <span class="pacom-row-sub">${r}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${r}%; background:${l};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${v(E.id)}">${o?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${v(E.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${v(E.id)}" data-endpoint-val="${v(E.endpoint)}">${ye===E.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${o?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${v(E.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${q.map(b=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${v(b.deviceName)}</strong> · ${v(b.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${v(b.value)} · ${v(b.lastSeen)}</span>
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
    `}function Je(y){const S=[],L=V.projects.find(E=>E.id===G)??V.projects[0]??null,j=V.buildings.find(E=>E.id===ne)??(L?V.buildings.find(E=>E.projectId===L.id):null)??null;if(I&&S.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
          <form class="dep-modal-card" data-create-project="1">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建项目</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${be("x",16)}</button>
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
        </div>`),N&&L){const t=V.buildings.filter(r=>r.projectId===L.id).reduce((r,l)=>r+Pe(l.id).reduce((o,q)=>o+De(q.id).length,0),0);S.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
          <form class="dep-modal-card" data-save-project="${v(L.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑项目：${v(L.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${be("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${v(L.imageUrl??"./media/gzlab.jpg")}" alt="${v(L.name)}" style="width:84px; height:54px; object-fit:cover; border-radius:6px; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">项目封面图</div>
                  <div class="pacom-row-sub">用于空间总览的园区俯瞰展示</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>更换封面</span>
                  <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${v(L.id)}" style="display:none;" ${y?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${v(L.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${v(L.city??"")}" /></label>
                <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${v(L.address??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${v(L.location?.lng??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${v(L.location?.lat??"")}" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${v(L.id)}" ${!y||t>0?`disabled title="${t>0?`包含 ${t} 台运行中设备，请先解绑后再删除`:"只读"}"`:""}>删除项目</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${y?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}Se&&L&&S.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
          <form class="dep-modal-card" data-create-bld="${v(L.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建楼宇（${v(L.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${be("x",16)}</button>
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
        </div>`);const M=A?V.buildings.find(E=>E.id===A)??null:null;if(M){const E=Pe(M.id),t=E.reduce((l,o)=>l+De(o.id).length,0),r=w(M);S.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
          <form class="dep-modal-card" data-save-building="${v(M.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑楼宇：${v(M.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${be("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${v(M.imageUrl??"./media/building-e.webp")}" alt="${v(M.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:6px; background:#fff; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">楼宇外观 / 白模图</div>
                  <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>替换图片</span>
                  <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${v(M.id)}" style="display:none;" ${y?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${v(M.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${v(M.areaSqm??"")}" placeholder="选填" /></label>
                <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${M.aboveFloors}" /></label>
                <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${M.belowFloors}" /></label>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                <label style="display:inline-flex; align-items:center; gap:6px; font-size:13px;"><input type="checkbox" name="bRoof" ${M.hasRoof?"checked":""} />含屋面层 (RF)</label>
                ${r.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${v(M.id)}">一键补齐缺失 ${r.length} 层</button>`:`<span class="pacom-row-sub">已配置 ${E.length} 个楼层</span>`}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${v(M.id)}" ${!y||t>0?`disabled title="${t>0?"包含运行中设备，请先解绑后再删除":"只读"}"`:""}>删除楼宇</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${y?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}if(m&&j&&S.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
          <form class="dep-modal-card" data-create-floor="${v(j.id)}" style="width:min(420px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增楼层（${v(j.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${be("x",16)}</button>
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
        </div>`),h&&j){const E=Pe(j.id),t=me.filter(r=>!!r.matchedFloorId).length;S.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
          <div class="dep-modal-card dep-modal-card--wide">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">批量导入 ${v(j.name)} 平面底图</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${be("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-upload-drop" data-batch-dropzone="${v(j.id)}" style="padding:20px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${we?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
                <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
                <span class="pacom-row-sub">自动识别 01F、首层、屋面、RF、B1 等中英文文件名，支持手动调整对应楼层</span>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; margin-top:4px;">
                  <span>选择多张图片</span>
                  <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${v(j.id)}" style="display:none;" ${y?"":"disabled"} />
                </label>
              </div>
              ${me.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                      <div class="pacom-row-sub">已选 ${me.length} 张图片，已匹配 ${t} 层：</div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:6px; max-height:220px; overflow-y:auto;">
                        ${me.map(r=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${v(r.file.name)}">${v(r.file.name)}</span>
                              <select class="pacom-select" name="overrideFloor_${v(r.id)}" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${v(r.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${E.map(l=>`<option value="${v(l.id)}" ${r.matchedFloorId===l.id?"selected":""}>${v(l.name)}</option>`).join("")}
                              </select>
                            </div>`).join("")}
                      </div>
                    </div>`:""}
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-batch-upload="1" ${me.length===0?"disabled":""}>清空已选</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">关闭</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-batch-upload="1" ${t===0?"disabled":""}>确认导入（${t} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(C&&j){const E=We().find(r=>r.id===C),t=Pe(j.id).filter(r=>r.id!==C);E&&t.length>0&&S.push(`
          <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
            <div class="dep-modal-card">
              <div class="dep-modal-head">
                <strong style="font-size:15px; font-weight:500;">复用 ${v(E.name)} 功能区至其他楼层</strong>
                <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${be("x",16)}</button>
              </div>
              <div class="dep-modal-body">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <span class="pacom-row-sub">勾选目标楼层（已选 ${ie.size} 层）</span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                  </div>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${t.map(r=>{const l=ie.has(r.id),o=Ye().filter(q=>q.floorId===r.id).length;return`
                        <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${l}">
                          <input type="checkbox" name="copyFloor_${v(r.id)}" data-copy-target-floor="${v(r.id)}" ${l?"checked":""} style="margin:0;" />
                          <span>${v(r.name)}${o>0?` (${o}区)`:""}</span>
                        </label>`}).join("")}
                </div>
              </div>
              <div class="dep-modal-foot">
                <span></span>
                <div style="display:flex; gap:8px;">
                  <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                  <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${v(E.id)}" ${ie.size===0?"disabled":""}>确认复制（${ie.size} 层）</button>
                </div>
              </div>
            </div>
          </div>`)}if(f){const E=Ye().filter(t=>t.floorId===Z);S.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
          <form class="dep-modal-card" data-create-dev="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增设备</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${be("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">设备名称</span>
                <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">设备类型</span>
                  <select class="pacom-select" name="devPreset">${Xa.map(t=>`<option value="${t.key}">${t.label}</option>`).join("")}</select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">所属功能区</span>
                  <select class="pacom-select" name="devZone">
                    <option value="">暂不分配</option>
                    ${E.map(t=>`<option value="${v(t.id)}">${v(t.name)}</option>`).join("")}
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
        </div>`)}return c&&S.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建分组">
          <form class="dep-modal-card" data-create-group="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建设备分组</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${be("x",16)}</button>
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
        </div>`),k&&S.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增接入通道">
          <form class="dep-modal-card" data-create-conn="1" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增子系统接入通道</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${be("x",16)}</button>
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
        </div>`),S.join("")}function _(){const y=s.scope.canEditDeployment,S=s.scope.activeOverrides.find(r=>r.module==="deployment"&&r.status==="active"),L=S?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 · ${S.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${v(S.approvedBy)} · 到期自动收回：${v(S.expiresAt.slice(0,16).replace("T"," "))} · 事由：${v(S.reason)}</span>
          </div>
        </div>`:"",j=u==="devices"&&x==="marking",M=W[u],E=u==="devices"?x==="marking"?"设备标记":x==="list"?"设备列表":"设备分组":M.title,t=u==="devices"?x==="marking"?"在 2D 平面底图上完成设备坐标标记、回路灯点布置与硬件绑定。":x==="list"?"核查本层四态设备清单，点击任意行配置硬件绑定、人感/光感参数或执行自检。":"管理端侧蓝牙 Mesh 自治联动组与云端业务分组。":M.subtitle;a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Pa({tree:V,session:s,scope:P,maxGranularity:M.granularity,isOpen:z,searchKeyword:Q})}
            </div>
            <div class="pacom-header-meta">
              ${y?S?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${Ie()}
          ${j?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${E}</h2>
                      <p class="pacom-unified-subtitle">${t}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${Ze(y)}
                    </div>
                  </div>
                  ${L}
                  ${H?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${v(H)}</span></div>`:""}
                  ${U?`<div class="pacom-alert-banner">${v(U)}</div>`:""}
                  ${Ue(y)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head pacom-unified-head--split">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${E}</h2>
                      <p class="pacom-unified-subtitle">${t}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${Ze(y)}
                    </div>
                  </div>
                  ${L}
                  ${H?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${v(H)}</span></div>`:""}
                  ${U?`<div class="pacom-alert-banner">${v(U)}</div>`:""}
                  ${u==="overview"?ze(y):u==="project_config"?Me(y):u==="devices"?x==="list"?Qe(y):na(y):u==="network_topo"?Ve(y):Ge(y)}
                </div>
              </div>`}
          ${He(y)}
        </div>
      </div>
      ${Je(y)}
      ${Ee?`
          <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${v(Ee.title)}">
            <div class="dep-lightbox-card">
              <div class="dep-lightbox-head">
                <strong style="font-size:14px; font-weight:500;">${v(Ee.title)}</strong>
                <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${be("x",16)}</button>
              </div>
              <div class="dep-lightbox-body">
                <img src="${v(Ee.imageUrl)}" alt="${v(Ee.title)}" />
              </div>
            </div>
          </div>`:""}
    `,Ha()}function Ha(){Na(a,{onToggle:()=>{z=!z,_(),z&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:t=>{Q=t,_();const r=a.querySelector("[data-global-space-search]");r&&(r.focus(),r.setSelectionRange(t.length,t.length))},onPick:t=>{if(P=t,z=!1,t.level==="project"){G=t.projectId;const r=V.buildings.find(l=>l.projectId===t.projectId);r?xa(r.id):(ne="",Z="",ee=null)}else t.level==="building"?xa(t.buildingId):t.level==="floor"&&ma(t.floorId);_()}}),a.querySelectorAll("[data-dep-nav]").forEach(t=>{t.addEventListener("click",()=>{u=t.dataset.depNav??"overview",t.dataset.devSubtabJump&&(x=t.dataset.devSubtabJump),J=!1,Y=!1,H="",U="",_()})}),a.querySelectorAll("[data-dev-subtab]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.devSubtab??"marking";x=r,r==="groups"&&(J=!1,Y=!1),H="",U="",_()})}),a.querySelectorAll("[data-drawer-tab]").forEach(t=>{t.addEventListener("click",()=>{F=t.dataset.drawerTab??"binding",_()})}),a.querySelector("[data-list-search]")?.addEventListener("input",t=>{R=t.currentTarget.value,_();const r=a.querySelector("[data-list-search]");r&&(r.focus(),r.setSelectionRange(R.length,R.length))}),a.querySelector("[data-list-filter]")?.addEventListener("change",t=>{T=t.currentTarget.value??"all",_()}),a.querySelectorAll("[data-refresh-dep]").forEach(t=>{t.addEventListener("click",()=>{Te()})}),a.querySelectorAll("[data-matrix-nav]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.matrixFloor;r&&ma(r),u=t.dataset.matrixNav??"devices",t.dataset.matrixSub&&(x=t.dataset.matrixSub),t.dataset.matrixExpand==="1"&&r&&(ee=r),_()})}),a.querySelectorAll("[data-scrubber-floor]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.scrubberFloor;r&&(ma(r),_())})}),a.querySelectorAll("[data-close-modals]").forEach(t=>{t.addEventListener("click",()=>{Ce(),_()})}),a.querySelectorAll("[data-modal-scrim]").forEach(t=>{t.addEventListener("click",r=>{r.target===t&&(Ce(),_())})}),a.querySelectorAll("[data-open-new-proj]").forEach(t=>{t.addEventListener("click",()=>{Ce(),I=!0,_()})}),a.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{Ce(),N=!0,_()}),a.querySelectorAll("[data-open-new-bld]").forEach(t=>{t.addEventListener("click",()=>{Ce(),Se=!0,_()})}),a.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{Ce(),m=!0,_()}),a.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{Ce(),h=!0,_()}),a.querySelectorAll("[data-open-new-dev]").forEach(t=>{t.addEventListener("click",()=>{Ce(),f=!0,_()})}),a.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{Ce(),c=!0,_()}),a.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{Ce(),k=!0,_()}),a.querySelectorAll("[data-select-building]").forEach(t=>{t.addEventListener("click",r=>{if(r.target?.closest("button, label, input"))return;const l=t.dataset.selectBuilding;l&&l!==ne&&(xa(l),xe="all",ee=null,_())})}),a.querySelectorAll("[data-edit-building]").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation(),Ce(),A=t.dataset.editBuilding??null,_()})}),a.querySelectorAll("[data-toggle-expand-floor]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.toggleExpandFloor??null;ee=ee===r?null:r,ee&&ma(ee),i=null,_()})}),a.querySelectorAll("[data-jump-floor-marking]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.jumpFloorMarking;r&&ma(r),u="devices",x="marking",_()})}),a.querySelector("[data-jump-floor-config]")?.addEventListener("click",t=>{const r=t.currentTarget.dataset.jumpFloorConfig;u="project_config",r&&(ee=r),_()}),a.querySelectorAll("[data-floor-detail-tab]").forEach(t=>{t.addEventListener("click",()=>{$e=t.dataset.floorDetailTab??"zones",_()})}),a.querySelectorAll("[data-floor-list-filter]").forEach(t=>{t.addEventListener("click",()=>{xe=t.dataset.floorListFilter??"all",_()})}),a.querySelector("[data-create-project]")?.addEventListener("submit",async t=>{t.preventDefault();const r=new FormData(t.currentTarget),l=String(r.get("pName")??"").trim(),o=String(r.get("pCity")??"").trim(),q=String(r.get("pAddr")??"").trim(),b=String(r.get("pLng")??"").trim(),X=String(r.get("pLat")??"").trim();if(!l)return;let Ae;if(b||X){const je=Number(b),qe=Number(X);if(!Number.isFinite(je)||!Number.isFinite(qe)||je<-180||je>180||qe<-90||qe>90){U="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",_();return}Ae={lng:je,lat:qe,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const je=await e.createProject?.({name:l,city:o,address:q,location:Ae});Ce(),u="project_config",je&&(G=je.id,ne="",Z="",ee=null,P=ba({level:"project",projectId:je.id})),H=`已创建项目「${l}」，下一步可添加园区楼宇。`,await Te()}catch(je){U=je instanceof Error?je.message:String(je),_()}}),a.querySelector("[data-save-project]")?.addEventListener("submit",async t=>{t.preventDefault();const r=t.currentTarget,l=r.dataset.saveProject??G,o=new FormData(r),q=String(o.get("pName")??"").trim(),b=String(o.get("pCity")??"").trim(),X=String(o.get("pAddr")??"").trim(),Ae=String(o.get("pLng")??"").trim(),je=String(o.get("pLat")??"").trim();let qe;if(Ae||je){const ke=Number(Ae),ve=Number(je);if(!Number.isFinite(ke)||!Number.isFinite(ve)||ke<-180||ke>180||ve<-90||ve>90){U="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",_();return}qe={lng:ke,lat:ve,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await e.updateProject?.(l,{name:q,city:b,address:X,location:qe}),Ce(),H=`已保存项目「${q||"当前项目"}」信息。`,await Te()}catch(ke){U=ke instanceof Error?ke.message:String(ke),_()}}),a.querySelector("[data-upload-proj]")?.addEventListener("change",async t=>{const r=t.currentTarget,l=r.dataset.uploadProj,o=r.files?.[0];if(!(!l||!o))try{const q=await Fa(o);await e.updateProject?.(l,{imageUrl:q}),H=`已更新项目封面图（${o.name}）。`,await Te()}catch(q){U=q instanceof Error?q.message:String(q),_()}}),a.querySelector("[data-delete-proj]")?.addEventListener("click",async t=>{const r=t.currentTarget.dataset.deleteProj,l=V.projects.find(o=>o.id===r);if(!(!r||!l)&&window.confirm(`确认删除项目「${l.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await e.deleteProject?.(r),Ce(),H=`已删除项目「${l.name}」。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}}),a.querySelector("[data-create-bld]")?.addEventListener("submit",async t=>{t.preventDefault();const r=t.currentTarget,l=r.dataset.createBld??G,o=new FormData(r),q=String(o.get("bName")??"").trim(),b=String(o.get("bArea")??"").trim(),X=Math.max(1,Number(o.get("bAbove")??12)),Ae=Math.max(0,Number(o.get("bBelow")??0)),je=!!o.get("bRoof"),qe=!!o.get("bAutoFloors");if(q)try{const ke=await e.upsertBuilding?.({projectId:l,name:q,aboveFloors:X,belowFloors:Ae,hasRoof:je,areaSqm:b?Number(b):null});Ce();let ve=0;if(ke&&(ne=ke.id,qe)){for(let Oe=1;Oe<=X;Oe+=1)await e.upsertFloor?.({buildingId:ke.id,kind:"above",level:Oe,name:`${Oe}F`}),ve+=1;for(let Oe=1;Oe<=Ae;Oe+=1)await e.upsertFloor?.({buildingId:ke.id,kind:"below",level:-Oe,name:`B${Oe}`}),ve+=1;je&&(await e.upsertFloor?.({buildingId:ke.id,kind:"roof",level:99,name:"RF"}),ve+=1)}H=qe?`已创建楼宇「${q}」并自动生成 ${ve} 个楼层。`:`已创建楼宇「${q}」。`,await Te()}catch(ke){U=ke instanceof Error?ke.message:String(ke),_()}}),a.querySelector("[data-save-building]")?.addEventListener("submit",async t=>{t.preventDefault();const r=t.currentTarget,l=r.dataset.saveBuilding,o=V.buildings.find(ke=>ke.id===l);if(!o)return;const q=new FormData(r),b=String(q.get("bName")??"").trim()||o.name,X=String(q.get("bArea")??"").trim(),Ae=Math.max(1,Number(q.get("bAbove")??o.aboveFloors)),je=Math.max(0,Number(q.get("bBelow")??o.belowFloors)),qe=!!q.get("bRoof");try{await e.upsertBuilding?.({id:l,projectId:o.projectId,name:b,aboveFloors:Ae,belowFloors:je,hasRoof:qe,areaSqm:X?Number(X):null}),Ce(),H=`已保存楼宇「${b}」参数。`,await Te()}catch(ke){U=ke instanceof Error?ke.message:String(ke),_()}}),a.querySelector("[data-delete-building]")?.addEventListener("click",async t=>{const r=t.currentTarget.dataset.deleteBuilding,l=V.buildings.find(o=>o.id===r);if(!(!r||!l)&&window.confirm(`确认删除楼宇「${l.name}」及其下全部楼层与功能区？`))try{await e.deleteBuilding?.(r),Ce(),H=`已删除楼宇「${l.name}」。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}}),a.querySelector("[data-upload-bld]")?.addEventListener("change",async t=>{const r=t.currentTarget,l=r.dataset.uploadBld,o=r.files?.[0],q=V.buildings.find(b=>b.id===l);if(!(!l||!o||!q))try{const b=await Fa(o);await e.upsertBuilding?.({id:q.id,projectId:q.projectId,name:q.name,aboveFloors:q.aboveFloors,belowFloors:q.belowFloors,hasRoof:q.hasRoof,areaSqm:q.areaSqm,imageUrl:b}),H=`已更新「${q.name}」外观图（${o.name}）。`,await Te()}catch(b){U=b instanceof Error?b.message:String(b),_()}}),a.querySelectorAll("[data-fill-missing-floors]").forEach(t=>{t.addEventListener("click",async r=>{r.stopPropagation();const l=t.dataset.fillMissingFloors;if(l)try{const o=await O(l);H=o>0?`已自动补齐 ${o} 个楼层。`:"当前楼宇楼层已完整。",await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}})}),a.querySelector("[data-create-floor]")?.addEventListener("submit",async t=>{t.preventDefault();const r=t.currentTarget,l=r.dataset.createFloor,o=new FormData(r),q=String(o.get("fName")??"").trim().toUpperCase(),b=String(o.get("fArea")??"").trim();if(!q)return;const X=va(q)??q;if(Pe(l).some(ve=>(va(ve.name)??ve.name.toUpperCase())===X)){U=`楼层「${q}」已存在，请使用其他名称。`,_();return}const je=Oa(q),qe=je>=999?"roof":je<0?"below":"above",ke=je>=999?99:je||1;try{const ve=await e.upsertFloor?.({buildingId:l,kind:qe,level:ke,name:q,areaSqm:b?Number(b):null});Ce(),ve&&(Z=ve.id,ee=ve.id),H=`已新增楼层「${q}」。`,await Te()}catch(ve){U=ve instanceof Error?ve.message:String(ve),_()}}),a.querySelector("[data-save-floor]")?.addEventListener("submit",async t=>{t.preventDefault();const r=t.currentTarget,l=r.dataset.saveFloor,o=We().find(Oe=>Oe.id===l);if(!o)return;const q=new FormData(r),b=String(q.get("fName")??"").trim()||o.name,X=String(q.get("fArea")??"").trim(),Ae=va(b)??b.toUpperCase();if(Pe(o.buildingId).some(Oe=>Oe.id!==o.id&&(va(Oe.name)??Oe.name.toUpperCase())===Ae)){U=`楼层「${b}」已存在，请避免重复命名。`,_();return}const qe=Oa(b),ke=qe>=999?"roof":qe<0?"below":"above",ve=qe>=999?99:qe||o.level;try{await e.upsertFloor?.({id:o.id,buildingId:o.buildingId,kind:ke,level:ve,name:b,areaSqm:X?Number(X):null}),H=`已保存楼层「${b}」。`,await Te()}catch(Oe){U=Oe instanceof Error?Oe.message:String(Oe),_()}}),a.querySelector("[data-delete-floor]")?.addEventListener("click",async t=>{const r=t.currentTarget.dataset.deleteFloor,l=We().find(o=>o.id===r);if(!(!r||!l)){if(De(r).length>0){U=`楼层「${l.name}」已关联设备，请先解绑后再删除。`,_();return}if(window.confirm(`确认删除楼层「${l.name}」及其功能区？`))try{await e.deleteFloor?.(r),ee=null,H=`已删除楼层「${l.name}」。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}}});async function y(t,r){const l=We().find(o=>o.id===t);if(l)try{const o=await Fa(r);await e.upsertFloor?.({id:l.id,buildingId:l.buildingId,kind:l.kind,level:l.level,name:l.name,areaSqm:l.areaSqm,planImageUrl:o}),H=`已更新「${l.name}」平面底图（${r.name}）。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}}a.querySelectorAll("[data-upload-floor]").forEach(t=>{t.addEventListener("change",()=>{const r=t.dataset.uploadFloor,l=t.files?.[0];r&&l&&y(r,l)})});const S=a.querySelector("[data-single-floor-drop]");S&&s.scope.canEditDeployment&&(S.addEventListener("dragover",t=>{t.preventDefault(),S.style.borderColor="var(--pacom-accent-solid)"}),S.addEventListener("dragleave",()=>{S.style.borderColor=""}),S.addEventListener("drop",t=>{t.preventDefault(),S.style.borderColor="";const r=S.dataset.singleFloorDrop,l=Array.from(t.dataTransfer?.files??[]).find(o=>o.type.startsWith("image/"));r&&l&&y(r,l)})),a.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async t=>{const r=t.currentTarget.dataset.clearFloorPlan,l=We().find(o=>o.id===r);if(!(!r||!l)&&window.confirm(`确认清空「${l.name}」的平面底图？`))try{await e.upsertFloor?.({id:l.id,buildingId:l.buildingId,kind:l.kind,level:l.level,name:l.name,areaSqm:l.areaSqm,planImageUrl:null}),H=`已清空「${l.name}」平面底图。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}}),a.querySelectorAll("[data-open-lightbox]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.lbTitle??"平面底图预览",l=t.dataset.lbSrc??"";l&&(Ee={title:r,imageUrl:l},_())})}),a.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{Ee=null,_()}),a.querySelector("[data-lightbox-scrim]")?.addEventListener("click",t=>{t.target===t.currentTarget&&(Ee=null,_())});function L(t,r){if(!t||r.length===0)return;const l=Pe(t),o=new Map;l.forEach(q=>{const b=va(q.name)??q.name.toUpperCase();o.set(b,q)}),me=r.map((q,b)=>{const X=va(q.name),Ae=X?o.get(X):void 0;return{id:`bu-${Date.now().toString(36)}-${b}`,file:q,matchedFloorId:Ae?.id??null}}),h=!0,_()}a.querySelector("[data-batch-upload-floors]")?.addEventListener("change",t=>{const r=t.currentTarget;L(r.dataset.batchUploadFloors??"",Array.from(r.files??[]))});const j=a.querySelector("[data-batch-dropzone]");j&&s.scope.canEditDeployment&&(j.addEventListener("dragover",t=>{t.preventDefault(),we||(we=!0,j.style.borderColor="var(--pacom-accent-solid)",j.style.background="var(--pacom-accent-soft)")}),j.addEventListener("dragleave",()=>{we=!1,j.style.borderColor="",j.style.background=""}),j.addEventListener("drop",t=>{t.preventDefault(),we=!1;const r=Array.from(t.dataTransfer?.files??[]).filter(l=>l.type.startsWith("image/"));L(j.dataset.batchDropzone??"",r)})),a.querySelectorAll("[data-batch-override-floor]").forEach(t=>{t.addEventListener("change",()=>{const r=me.find(l=>l.id===t.dataset.batchOverrideFloor);r&&(r.matchedFloorId=t.value||null,_())})}),a.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{me=[],_()}),a.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const t=me.filter(l=>l.matchedFloorId),r=me.length-t.length;if(t.length!==0)try{for(const l of t){const o=We().find(b=>b.id===l.matchedFloorId);if(!o)continue;const q=await Fa(l.file);await e.upsertFloor?.({id:o.id,buildingId:o.buildingId,kind:o.kind,level:o.level,name:o.name,areaSqm:o.areaSqm,planImageUrl:q})}me=[],Ce(),H=`已批量导入 ${t.length} 个楼层平面底图${r>0?`（跳过 ${r} 张未分配文件）`:""}。`,await Te()}catch(l){U=l instanceof Error?l.message:String(l),_()}}),a.querySelectorAll("[data-apply-zone-tpl]").forEach(t=>{t.addEventListener("click",async()=>{const r=vt.find(o=>o.key===t.dataset.applyZoneTpl),l=We().find(o=>o.id===t.dataset.tplFloor);if(!(!r||!l))try{for(const o of r.items){const q=await e.upsertZone?.({floorId:l.id,name:`${l.name} ${o.suffix}`,category:o.category});q&&(pe[q.id]={left:20,top:20,width:24,height:24})}H=`已按「${r.label}」模板为 ${l.name} 创建 ${r.items.length} 个功能区。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}})}),a.querySelector("[data-attach-doc]")?.addEventListener("change",t=>{const r=t.currentTarget,l=r.dataset.attachDoc,o=r.files?.[0],q=We().find(X=>X.id===l);if(!l||!o||!q)return;const b=o.size>=1024*1024?`${(o.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(o.size/1024))} KB`;K.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:l,name:o.name,category:o.name.toLowerCase().endsWith(".xlsx")||o.name.toLowerCase().endsWith(".xls")?"点位清单":"竣工图纸",boundScope:`${q.name} · 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:b}),H=`已为 ${q.name} 关联文档「${o.name}」。`,_()}),a.querySelector("[data-add-zone]")?.addEventListener("submit",async t=>{t.preventDefault();const r=t.currentTarget.dataset.addZone,l=new FormData(t.currentTarget),o=String(l.get("zoneName")??"").trim(),q=String(l.get("zoneCat")??"office");if(o)try{const b=await e.upsertZone?.({floorId:r,name:o,category:q});b&&(pe[b.id]={left:20,top:20,width:24,height:24}),H=`已添加功能区「${o}」。`,await Te()}catch(b){U=b instanceof Error?b.message:String(b),_()}}),a.querySelectorAll("[data-edit-zone]").forEach(t=>{t.addEventListener("click",()=>{i=t.dataset.editZone??null,_()})}),a.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{i=null,_()}),a.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async t=>{t.preventDefault();const r=t.currentTarget,l=new FormData(r),o=String(l.get("zName")??"").trim(),q=String(l.get("zCat")??"office");if(o)try{await e.upsertZone?.({id:r.dataset.saveEditZone,floorId:r.dataset.zoneFloor,name:o,category:q}),i=null,H=`已更新功能区「${o}」。`,await Te()}catch(b){U=b instanceof Error?b.message:String(b),_()}}),a.querySelectorAll("[data-del-zone]").forEach(t=>{t.addEventListener("click",async()=>{const r=t.dataset.delZone,l=Ye().find(o=>o.id===r);if(!(!r||!l)&&window.confirm(`确认删除功能区「${l.name}」？`))try{await e.deleteZone?.(r),i===r&&(i=null),H=`已删除功能区「${l.name}」。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}})}),a.querySelectorAll("[data-open-copy-zones]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.openCopyZones??null;Ce(),C=r,ie=new Set(Pe(ne).filter(l=>l.id!==r&&l.kind==="above"&&Ye().filter(o=>o.floorId===l.id).length===0).map(l=>l.id)),_()})}),a.querySelectorAll("[data-copy-preset]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.copyPreset,l=Pe(ne).filter(o=>o.id!==C);r==="empty"?ie=new Set(l.filter(o=>o.kind==="above"&&Ye().filter(q=>q.floorId===o.id).length===0).map(o=>o.id)):r==="above"?ie=new Set(l.filter(o=>o.kind==="above").map(o=>o.id)):ie.clear(),_()})}),a.querySelectorAll("[data-copy-target-floor]").forEach(t=>{t.addEventListener("change",()=>{const r=t.dataset.copyTargetFloor;r&&(t.checked?ie.add(r):ie.delete(r),_())})}),a.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async t=>{const r=t.currentTarget.dataset.confirmCopyZones,l=Array.from(ie);if(!(!r||l.length===0))try{const o=await e.copyZonesToFloors?.(r,l)??0;Ce(),ie.clear(),H=`已将当前层功能区复用至 ${l.length} 个目标楼层（共新增 ${o} 个功能区）。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}});const M=a.querySelector("[data-dep-canvas-search]");M?.addEventListener("focus",()=>{te||(te=!0,_(),a.querySelector("[data-dep-canvas-search]")?.focus())}),M?.addEventListener("input",t=>{oe=t.currentTarget.value,te=!0,_();const r=a.querySelector("[data-dep-canvas-search]");r&&(r.focus(),r.setSelectionRange(oe.length,oe.length))}),a.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{te=!te,_()}),a.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{te=!1,_()}),a.querySelectorAll("[data-brush]").forEach(t=>{t.addEventListener("click",()=>{ge=t.dataset.brush??"device",_()})}),a.querySelectorAll("[data-dep-zoom]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.depZoom;r==="in"?ue=Math.min(2.6,Number((ue+.2).toFixed(2))):r==="out"?ue=Math.max(.6,Number((ue-.2).toFixed(2))):(ue=1,ce=0,re=0),ia()})});const E=a.querySelector('[data-role="dep-stage"]');if(E&&!Y){let t=!1,r=0,l=0,o=0,q=0;E.addEventListener("pointerdown",X=>{X.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(t=!0,r=X.clientX,l=X.clientY,o=ce,q=re,E.classList.add("is-panning"),E.setPointerCapture?.(X.pointerId))}),E.addEventListener("pointermove",X=>{t&&(ce=o+(X.clientX-r),re=q+(X.clientY-l),ia())});const b=()=>{t&&(t=!1,E.classList.remove("is-panning"))};E.addEventListener("pointerup",b),E.addEventListener("pointercancel",b),E.addEventListener("wheel",X=>{X.preventDefault();const Ae=X.deltaY<0?.12:-.12;ue=Math.max(.6,Math.min(2.6,Number((ue+Ae).toFixed(2)))),ia()},{passive:!1}),E.addEventListener("dblclick",X=>{X.target?.closest("button")||(ue=1,ce=0,re=0,ia())})}a.querySelectorAll("[data-dev-filter]").forEach(t=>{t.addEventListener("click",()=>{le=t.dataset.devFilter??"all",_()})}),a.querySelector("[data-create-dev]")?.addEventListener("submit",t=>{t.preventDefault();const r=new FormData(t.currentTarget),l=String(r.get("devName")??"").trim(),o=String(r.get("devPreset")??"sensor"),q=String(r.get("devZone")??"")||null,b=Xa.find(Ae=>Ae.key===o)??Xa[0],X=`dev-custom-${Date.now().toString(36)}`;B.push({id:X,name:l,category:b.category,projectId:G||$.projectId,buildingId:ne,floorId:Z,logicalZoneId:q,planPoint:{floorId:Z,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),Be.set(X,{proxy:b.defaultProxy,relay:b.defaultRelay,meshUuid:`mesh-${Z.slice(-4)}`}),b.category==="lighting"&&ta.push({id:`lm-${Date.now().toString(36)}`,deviceId:X,channel:"回路 1",label:`${l.slice(0,6)}主灯`,x:.52,y:.45}),Ce(),g=X,J=!0,F="binding",Le=!0,H=`已新增「${l}」（${b.hint}），已生成默认标记并提示待同步边缘。`,_()}),a.querySelectorAll("[data-pick-dev]").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation(),g=t.dataset.pickDev??null,J=!0,F="binding",D=De(Z).find(o=>o.id===g)?.physicalInstalled??!1,_()})}),a.querySelectorAll("[data-open-dev-drawer]").forEach(t=>{t.addEventListener("click",r=>{if(r.target?.closest("button"))return;g=t.dataset.openDevDrawer??null,J=!0,F="binding",D=De(Z).find(o=>o.id===g)?.physicalInstalled??!1,_()})}),a.querySelectorAll("[data-open-dev-params]").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation(),g=t.dataset.openDevParams??null,J=!0,F="params",D=De(Z).find(o=>o.id===g)?.physicalInstalled??!1,_()})}),a.querySelector("[data-close-sel]")?.addEventListener("click",()=>{J=!1,Y=!1,_()}),a.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{x!=="marking"?(x="marking",Y=!0):Y=!Y,_()}),a.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{D=!D,_()}),a.querySelectorAll("[data-ping-dev]").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const l=De(Z).find(o=>o.id===t.dataset.pingDev);l&&(H=`已向「${l.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,_())})}),a.querySelector("[data-add-light-marker]")?.addEventListener("click",t=>{const r=t.currentTarget.dataset.addLightMarker,l=ta.filter(o=>o.deviceId===r).length+1;ta.push({id:`lm-${Date.now().toString(36)}`,deviceId:r,channel:`回路 ${l}`,label:`照明点位 ${l}`,x:Math.min(.86,.35+l*.1),y:.42}),ge="light_marker",H=`已新增「回路 ${l}」可视化灯点。`,_()}),a.querySelectorAll("[data-del-light-marker]").forEach(t=>{t.addEventListener("click",()=>{const r=ta.findIndex(l=>l.id===t.dataset.delLightMarker);r>=0&&ta.splice(r,1),_()})}),a.querySelectorAll("[data-toggle-mesh-role]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.meshDev,l=t.dataset.toggleMeshRole,o=Be.get(r)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};o[l]=!o[l],Be.set(r,o),Le=!0,H=`已更新节点 ${l.toUpperCase()} 状态，可在「网络拓扑」中一键同步至边缘网关。`,_()})}),a.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async t=>{const r=De(Z).find(b=>b.id===g);if(!Y||!r)return;const l=t.currentTarget.getBoundingClientRect(),o=Math.max(.02,Math.min(.98,(t.clientX-l.left)/l.width)),q=Math.max(.02,Math.min(.98,(t.clientY-l.top)/l.height));if(B.some(b=>b.id===r.id)){r.planPoint={floorId:Z,planVersion:1,x:Number(o.toFixed(4)),y:Number(q.toFixed(4))},Y=!1,H=`已更新「${r.name}」图上坐标。`,_();return}try{await e.updateDevicePlanPoint({deviceId:r.id,floorId:$.floorId,planVersion:r.planPoint?.planVersion??1,x:o,y:q,expectedVersion:r.version}),Y=!1,H=`已更新「${r.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await Te()}catch(b){U=b instanceof Error?b.message:String(b),_()}}),a.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async t=>{t.preventDefault();const r=De(Z).find(o=>o.id===g);if(!r)return;const l=new FormData(t.currentTarget);if(B.some(o=>o.id===r.id)){r.physicalInstalled=D,r.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(l.get("protocol")),networkAddress:String(l.get("networkAddress")??""),portOrChannel:String(l.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:s.displayName},r.version+=1,Le=!0,H=`已保存「${r.name}」的硬件绑定与物理复核状态。`,_();return}try{await e.updateDeviceHardwareBinding({deviceId:r.id,gatewayId:r.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(l.get("protocol")),networkAddress:String(l.get("networkAddress")??""),portOrChannel:String(l.get("portOrChannel")??""),physicalInstalled:D,expectedVersion:r.version}),Le=!0,H=`已保存「${r.name}」的硬件绑定与物理安装复核状态。`,await Te()}catch(o){U=o instanceof Error?o.message:String(o),_()}}),a.querySelector("[data-save-dev-params]")?.addEventListener("submit",t=>{t.preventDefault();const r=t.currentTarget.dataset.saveDevParams,l=new FormData(t.currentTarget);Ca.set(r,{offDelayMin:Number(l.get("offDelayMin")??15),restoreMin:Number(l.get("restoreMin")??30),luxOn:Number(l.get("luxOn")??280),luxOff:Number(l.get("luxOff")??450)}),Le=!0,H="设备自治延时与光感门限参数已下发并同步至配置基线。",_()}),a.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const t=De(Z).find(r=>r.id===g);t&&Ta(t)}),a.querySelectorAll("[data-ftt-dev]").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const l=De(Z).find(o=>o.id===t.dataset.fttDev);l&&Ta(l)})}),a.querySelectorAll("[data-batch-ftt]").forEach(t=>{t.addEventListener("click",()=>Ua())}),a.querySelectorAll("[data-export-inv]").forEach(t=>{t.addEventListener("click",()=>la())}),a.querySelector("[data-create-group]")?.addEventListener("submit",t=>{t.preventDefault();const r=new FormData(t.currentTarget),l=String(r.get("gName")??"").trim(),o=r.get("gTrack")??"mesh_auto",q=String(r.get("gType")??"灯光联动组");l&&(ua.unshift({id:`grp-${Date.now().toString(36)}`,track:o,groupType:q,name:l,floorId:Z,includesAdapter:o==="mesh_auto",deviceIds:o==="mesh_auto"?["dev-e7f-gw-01"]:[]}),Ce(),o==="mesh_auto"&&(Le=!0),H=`已新建${o==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${l}」。`,_())}),a.querySelectorAll("[data-test-group]").forEach(t=>{t.addEventListener("click",()=>{const r=ua.find(l=>l.id===t.dataset.testGroup);r&&(H=`已向分组「${r.name}」发送群组试控指令，${r.deviceIds.length} 台成员回读正常。`,_())})}),a.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>Va()),a.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{Ke+=1,Le=!1,H=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${Ke}）。`,_()}),a.querySelectorAll("[data-topo-mode]").forEach(t=>{t.addEventListener("click",()=>{de=t.dataset.topoMode??"mesh",_()})}),a.querySelectorAll("[data-topo-jump]").forEach(t=>{t.addEventListener("click",()=>{g=t.dataset.topoJump??null,J=!0,F="binding",u="devices",x="marking",_()})}),a.querySelector("[data-create-conn]")?.addEventListener("submit",t=>{t.preventDefault();const r=new FormData(t.currentTarget),l=String(r.get("cName")??"").trim(),o=String(r.get("cProto")??"bacnet_ip"),q=String(r.get("cEndpoint")??"").trim();if(se.some(b=>b.endpoint===q)){U=`端口冲突警告：局域网端点「${q}」已被其他通道占用，请更换端口后重试。`,_();return}se.unshift({id:`conn-${Date.now().toString(36)}`,projectId:G||$.projectId,buildingId:ne,floorId:Z,name:l,protocol:o,endpoint:q,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),Ce(),U="",H=`已接入「${l}」（${q}），连通测试通过（18 ms）。`,_()}),a.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{H="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",_()}),a.querySelectorAll("[data-expand-conn]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.expandConn??null;Fe=Fe===r?null:r,_()})}),a.querySelectorAll("[data-ping-conn]").forEach(t=>{t.addEventListener("click",()=>{const r=se.find(l=>l.id===t.dataset.pingConn);r&&(U="",r.status==="connected"?H=`连通测试通过：「${r.name}」（${r.endpoint}）响应正常，延迟 18 ms。`:U=`连通测试异常：「${r.name}」（${r.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,_())})}),a.querySelectorAll("[data-copy-endpoint]").forEach(t=>{t.addEventListener("click",async()=>{const r=t.dataset.endpointVal??"",l=t.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(r),ye=l,_(),window.setTimeout(()=>{ye=null,_()},1600)}catch{}})}),a.querySelectorAll("[data-preview-doc]").forEach(t=>{t.addEventListener("click",()=>{const r=[...gt,...K].find(l=>l.id===t.dataset.previewDoc);r&&(H=`已调阅工程附件「${r.name}」（关联范围：${r.boundScope}，更新于 ${r.updatedAt}）。`,_())})}),a.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const t=await e.freezeDeliveryBatch($.floorId,"部署总览验收发起交付冻结");H=`已生成交付冻结快照 ${t.versionTag}（核验 ${t.verifiedCount}/${t.deviceCount}）。`,await Te()}catch(t){U=t instanceof Error?t.message:String(t),_()}})}await Te()}const ss=new Set(["lighting","hvac","alarm_rules"]),bt={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},za=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function ns(a){const e=new Set;for(const s of a.actions)s.command.startsWith("lighting")?e.add("照明"):s.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function os(a,e,s){const d=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${a<e?`<div style="position:absolute; left:${a/24*100}%; width:${(e-a)/24*100}%; top:0; bottom:0; border-radius:999px; background:${d};"></div>`:`
        <div style="position:absolute; left:${a/24*100}%; width:${(24-a)/24*100}%; top:0; bottom:0; border-radius:999px; background:${d};"></div>
        <div style="position:absolute; left:0; width:${e/24*100}%; top:0; bottom:0; border-radius:999px; background:${d};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function is(a,e,s){let d=Ba(),n=!1,u="",[x,F,R,T]=await Promise.all([e.getSpatialTree(),e.listScenes($.floorId),e.getRuntimeSettings($.projectId),e.getFloorDevices($.floorId).catch(()=>[])]),P="manual",z="balanced",Q="all",ge=null,le="",oe=!1,te=!1,J=!1,de="all",ue=null,ce="",re="",V=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const fe=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],se=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],_e=[{deviceId:T[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],pe=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${R.calendar.workdayStart} – ${R.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${R.calendar.nightGuardStart} – 次日 ${R.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],B=e.subscribeFloorEvents($.floorId,async ne=>{ne.type==="control.receipt.updated"&&ge?.batchId===ne.batchId&&(ge=await e.getControlBatch(ne.batchId),G())});function G(){const ne=le.trim().toLowerCase(),Z=ne?F.filter(c=>`${c.name} ${c.description}`.toLowerCase().includes(ne)):F,ee=R.rules.filter(c=>ss.has(c.category)),xe=Q==="all"?ee:Q==="cbm"?[]:ee.filter(c=>c.category===Q),$e=Q==="all"||Q==="cbm",I=de==="issues"?fe.filter(c=>c.status!=="verified"):fe,N=za.find(c=>c.id===z)??za[1],Se=s.scope.canControlDevices,A=s.scope.canEditScenes,m=s.scope.canEditSettings,h=s.scope.activeOverrides.find(c=>c.module==="settings"&&c.status==="active");a.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Pa({tree:x,session:s,scope:d,isOpen:n,searchKeyword:u})}
            </div>

            <div class="pacom-header-meta">
              ${P==="rules"?m?h?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${V.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${V.length>0?`人工覆盖中：${V.length} 台 ${be("chevron-down",12)}`:`全部自动托管 ${be("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${J?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${fe.length}）</button>
              ${P==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${A?"":"disabled"}>${oe?"收起表单":"+ 新建场景"}</button>`:P==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${P==="manual"}" data-scene-tab="manual">快捷场景（${F.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${P==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${P==="rules"}" data-scene-tab="rules">条件联动（${ee.length+se.length}）</button>
          </nav>
        </header>

        ${te?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${V.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${be("x",16)}</button>
              </div>
              ${V.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':V.map(c=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${p(c.name)}</div>
                            <div class="pacom-row-sub">${p(c.reason)}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${p(c.id)}" ${Se?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${V.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${Se?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${J?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${be("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${de==="all"}" data-log-filter="all">全部（${fe.length}）</button>
                  <button class="pacom-tab" aria-selected="${de==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${I.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${I.map(c=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${p(c.device)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${p(c.source)}</span>
                        </div>
                        <span class="pacom-row-sub">${p(c.action)} · ${p(c.at)}</span>
                      </div>
                      <span class="pacom-badge ${c.status==="verified"?"pacom-badge--online":c.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${c.status==="verified"?"回读确认":c.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${ce?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${p(ce)}</span></div>`:""}
          ${re?`<div class="pacom-alert-banner">${p(re)}</div>`:""}

          ${P==="manual"?`
              ${ge?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${p(ge.batchId)}</span>
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
                            ${ge.receipts.map(c=>`
                                <tr>
                                  <td><code style="font-size:12px;">${p(c.deviceId)}</code></td>
                                  <td>${p(c.command)}</td>
                                  <td>${p(String(c.targetValue))}${c.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${p(c.errorMessage)}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${c.status==="verified_success"?"pacom-badge--online":c.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${p(c.status)}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${oe?`
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
                        ${_e.map((c,k)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" name="draftDevice-${k}" data-draft-dev="${k}" aria-label="目标设备">
                                ${T.map(C=>`<option value="${p(C.id)}" ${C.id===c.deviceId?"selected":""}>${p(C.name)}</option>`).join("")}
                              </select>
                              <select class="pacom-select" name="draftCommand-${k}" data-draft-cmd="${k}" aria-label="执行指令">
                                <option value="lighting.dimming" ${c.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${c.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${c.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" name="draftTargetValue-${k}" data-draft-val="${k}" value="${p(c.targetValue)}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${k}" ${_e.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" ${A?"":"disabled"}>保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${p(le)}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${Z.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${Z.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':Z.map(c=>{const k=ns(c),C=c.actions.slice(0,3).map(ie=>{const Ee=T.find(me=>me.id===ie.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??ie.deviceId,we=ie.command==="lighting.dimming"?`亮度 ${ie.targetValue}%`:ie.command==="hvac.setpoint"?`设温 ${ie.targetValue}°C`:ie.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${p(Ee)} → ${p(we)}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${p(c.name)}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${k.map(ie=>`<span class="pacom-badge pacom-badge--accent">${p(ie)}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${c.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${p(c.description)}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${C}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${p(c.lastExecutedAt?c.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行")}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${p(c.id)}" ${Se?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:P==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${N.title}</div>
                    <span class="pacom-kpi-delta">${N.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${N.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${N.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${V.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${za.map(c=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${z===c.id}" data-oss-mode="${c.id}" ${Se?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${c.title}</strong>
                          <span class="pacom-badge ${z===c.id?"pacom-badge--online":"pacom-badge--neutral"}">${z===c.id?"当前生效":c.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${c.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${c.estSaving}</span>
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
                          ${pe.map(c=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${p(c.name)}</span>
                                    ${c.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${p(c.windowLabel)}</div>
                                </td>
                                <td>${os(c.startHour,c.endHour,c.enabled)}</td>
                                <td><span class="pacom-row-sub">${p(c.scope)}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${c.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${c.enabled}"
                                      aria-label="切换排程 ${p(c.name)}"
                                      data-toggle-schedule="${p(c.id)}"
                                      ${Se?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(c=>{const k=c==="all"?"全部":bt[c]??c,C=c==="all"?ee.length+se.length:c==="cbm"?se.length:ee.filter(ie=>ie.category===c).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${Q===c}" data-rule-cat="${c}">
                              <span>${k}</span><span class="pacom-count-num">${C}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${xe.map(c=>{const k=ue===c.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${p(bt[c.category]??c.category)}</span>
                                  <span>${p(c.name)}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${c.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${p(c.summary)} · 范围：${p(c.scopeLabel)} · 回执：${p(c.receiptSummary??"已同步")}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${p(c.id)}">${k?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${c.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${c.enabled?"true":"false"}"
                                  aria-label="切换 ${p(c.name)}"
                                  data-toggle-strategy-rule="${p(c.id)}"
                                  data-rule-ver="${c.version}"
                                  data-rule-next="${!c.enabled}"
                                  ${m?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${k?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${c.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":c.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${p(c.scopeLabel)} · 当前版本：v${c.version} · 最近同步：${p(c.receiptSummary??"已同步")}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${$e?se.map(c=>{const k=Math.min(100,Math.round(c.runtimeHours/c.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${p(c.name)}</span>
                                      <span class="pacom-badge ${k>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${c.runtimeHours} / ${c.thresholdHours} h（${k}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${k}%; background:${k>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${p(c.equipment)} · 上次重置：${p(c.lastReset)}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${c.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${c.enabled}" data-toggle-cbm="${p(c.id)}" aria-label="切换 ${p(c.name)}" ${m?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,Na(a,{onToggle:()=>{n=!n,G(),n&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:c=>{u=c,G();const k=a.querySelector("[data-global-space-search]");k&&(k.focus(),k.setSelectionRange(c.length,c.length))},onPick:c=>{d=c,n=!1,G()}}),a.querySelectorAll("[data-scene-tab]").forEach(c=>{c.addEventListener("click",()=>{P=c.dataset.sceneTab??"manual",ce="",G()})}),a.querySelectorAll("[data-toggle-overrides]").forEach(c=>{c.addEventListener("click",()=>{te=!te,G()})}),a.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{Se&&(V=[],ce="已释放全部人工覆盖设备，自动节能策略已恢复托管。",G())}),a.querySelectorAll("[data-release-one]").forEach(c=>{c.addEventListener("click",()=>{if(!Se)return;const k=c.dataset.releaseOne;V=V.filter(C=>C.id!==k),ce="已恢复该设备的自动策略托管。",G()})}),a.querySelectorAll("[data-toggle-cmdlog]").forEach(c=>{c.addEventListener("click",()=>{J=!J,G()})}),a.querySelectorAll("[data-log-filter]").forEach(c=>{c.addEventListener("click",()=>{de=c.dataset.logFilter??"all",G()})}),a.querySelector("[data-close-batch]")?.addEventListener("click",()=>{ge=null,G()}),a.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),a.querySelectorAll("[data-oss-mode]").forEach(c=>{c.addEventListener("click",()=>{if(!Se)return;const k=c.dataset.ossMode;if(!k)return;z=k;const C=za.find(ie=>ie.id===k);ce=`已切换至「${C?.title??k}」模式（明日预测启动 ${C?.predictedStart??""}）。`,G()})}),a.querySelectorAll("[data-toggle-schedule]").forEach(c=>{c.addEventListener("click",()=>{if(!Se)return;const k=c.dataset.toggleSchedule,C=pe.find(ie=>ie.id===k);C&&(C.enabled=!C.enabled,ce=`排程「${C.name}」已${C.enabled?"恢复启用":"临时暂停"}。`,G())})}),a.querySelectorAll("[data-rule-cat]").forEach(c=>{c.addEventListener("click",()=>{Q=c.dataset.ruleCat??"all",G()})}),a.querySelectorAll("[data-expand-rule]").forEach(c=>{c.addEventListener("click",()=>{const k=c.dataset.expandRule??null;ue=ue===k?null:k,G()})}),a.querySelectorAll("[data-toggle-cbm]").forEach(c=>{c.addEventListener("click",()=>{if(!m)return;const k=se.find(C=>C.id===c.dataset.toggleCbm);k&&(k.enabled=!k.enabled,ce=`工时维保规则「${k.name}」已${k.enabled?"启用":"停用"}。`,G())})}),a.querySelectorAll("[data-toggle-strategy-rule]").forEach(c=>{c.addEventListener("click",async()=>{if(m){re="";try{await e.toggleRuntimeRule(c.dataset.toggleStrategyRule,c.dataset.ruleNext==="true",Number(c.dataset.ruleVer)),R=await e.getRuntimeSettings($.projectId),ce="条件联动规则状态与版本回执已更新。",G()}catch(k){re=k instanceof Error?k.message:String(k),G()}}})}),a.querySelectorAll("[data-toggle-create]").forEach(c=>{c.addEventListener("click",()=>{!A&&!oe||(oe=!oe,G())})}),a.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{A&&(_e.push({deviceId:T[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),G())}),a.querySelectorAll("[data-del-draft-action]").forEach(c=>{c.addEventListener("click",()=>{if(!A)return;const k=Number(c.dataset.delDraftAction);_e.length>1&&(_e.splice(k,1),G())})}),a.querySelectorAll("[data-draft-dev]").forEach(c=>{c.addEventListener("change",()=>{if(!A)return;const k=_e[Number(c.dataset.draftDev)];k&&(k.deviceId=c.value)})}),a.querySelectorAll("[data-draft-cmd]").forEach(c=>{c.addEventListener("change",()=>{if(!A)return;const k=_e[Number(c.dataset.draftCmd)];k&&(k.command=c.value)})}),a.querySelectorAll("[data-draft-val]").forEach(c=>{c.addEventListener("change",()=>{if(!A)return;const k=_e[Number(c.dataset.draftVal)];k&&(k.targetValue=c.value)})}),a.querySelector("[data-scene-search]")?.addEventListener("input",c=>{const k=c.currentTarget,C=k.selectionStart??k.value.length;le=k.value,G();const ie=a.querySelector("[data-scene-search]");ie&&(ie.focus(),ie.setSelectionRange(C,C))}),a.querySelectorAll("[data-exec-scene]").forEach(c=>{c.addEventListener("click",async()=>{if(!Se)return;re="";const k=F.find(C=>C.id===c.dataset.execScene);try{ge=await e.executeScene(c.dataset.execScene),F=await e.listScenes($.floorId),fe.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:k?.name??"E7F 场景",action:`${ge.receipts.length} 台设备联动下发`,status:"verified"}),G()}catch(C){re=C instanceof Error?C.message:String(C),G()}})}),a.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async c=>{if(c.preventDefault(),!A)return;const k=new FormData(c.currentTarget);try{await e.createScene({projectId:$.projectId,floorId:$.floorId,name:String(k.get("name")??""),description:String(k.get("description")??""),actions:_e.map(C=>({deviceId:C.deviceId,command:C.command,targetValue:C.targetValue==="true"?!0:C.targetValue==="false"?!1:Number(C.targetValue)||50}))}),F=await e.listScenes($.floorId),oe=!1,ce=`快捷场景已保存（共绑定 ${_e.length} 条联动动作）。`,G()}catch(C){re=C instanceof Error?C.message:String(C),G()}})}G(),window.addEventListener("hashchange",()=>B(),{once:!0})}const ht={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function et(a,e){return a.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':a.map(s=>`
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
      </div>`).join("")}async function ls(a,e,s){let d="calendar",n=Ba(),u=!1,x="";const[F,R]=await Promise.all([e.getSpatialTree(),e.getRuntimeSettings($.projectId)]);let T=R,P=T.calendar.workdayStart,z=T.calendar.workdayEnd,Q=T.calendar.nightGuardStart,ge=T.calendar.nightGuardEnd,le=!0,oe=[];const te=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let J="flat";const de={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},ue={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},ce={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},re={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},V=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let fe="",se="";function _e(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(G=>{const ne=ht[G];return`
                <button type="button" class="pacom-unified-item" aria-current="${d===G}" data-stab="${G}">
                  ${be(ne.icon,16)}
                  <span>${ne.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function pe(){const B=s.scope.canEditSettings,G=s.scope.activeOverrides.find(I=>I.module==="settings"&&I.status==="active"),ne=F.projects[0]?.name??"当前项目",Z=T.rules.filter(I=>I.category==="weather_area"),ee=T.rules.filter(I=>I.category==="metering_carbon"),xe=T.rules.filter(I=>I.category==="templates"),$e=ht[d];a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Pa({tree:F,session:s,scope:n,maxGranularity:"project",isOpen:u,searchKeyword:x})}
            </div>
            <div class="pacom-header-meta">
              ${B?G?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${_e()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${$e.label}</h2>
                <p class="pacom-unified-subtitle">${$e.subtitle}</p>
              </div>
              ${G?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 · ${G.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${p(G.approvedBy)} · 到期自动收回：${p(G.expiresAt.slice(0,16).replace("T"," "))} · 事由：${p(G.reason)}</span>
                      </div>
                    </div>`:""}
              ${fe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${p(fe)}</span></div>`:""}
              ${se?`<div class="pacom-alert-banner">${p(se)}</div>`:""}

              ${d==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${T.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calWorkdayStart" style="width:116px;" type="time" data-cal-start value="${p(P)}" aria-label="工作日上班时间" ${B?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" name="calWorkdayEnd" style="width:116px;" type="time" data-cal-end value="${p(z)}" aria-label="工作日下班时间" ${B?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calNightGuardStart" style="width:116px;" type="time" data-night-start value="${p(Q)}" aria-label="夜间值守开始" ${B?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" name="calNightGuardEnd" style="width:116px;" type="time" data-night-end value="${p(ge)}" aria-label="夜间值守结束" ${B?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${le?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${le}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${B?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${B?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${te.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${te.map(I=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${p(I.date)}</span><span class="pacom-badge pacom-badge--accent">${p(I.mode)}</span></span>
                              <span class="pacom-setting-desc">${p(I.label)}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${p(I.id)}" ${B?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${B?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${B?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${B?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${B?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${oe.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${oe.length} 条</span>
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
                                ${oe.map(I=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${p(I.ruleName)}</div>
                                        ${I.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${p(I.conflictWarning)}</div>`:""}
                                      </td>
                                      <td>${p(I.beforeWindow)}</td>
                                      <td><strong>${p(I.afterWindow)}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${I.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${I.conflictWarning?"交叠警告":"自动跟随"}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>`:""}`:d==="energy_weather"?`
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
                            <select class="pacom-select" name="energyWeatherSource" data-energy-field="weatherSource" aria-label="室外气象数据源" ${B?"":"disabled"}>
                              <option value="guanzhou_station" ${de.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${de.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${p(ne)}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" name="energyBillingArea" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${p(de.billingArea)}" aria-label="计费面积" ${B?"":"disabled"} />
                          </div>
                        </div>
                        ${et(Z,B)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${J==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${J==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${J==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" name="energyTariffYuan" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${p(de.tariffYuan)}" aria-label="综合电价" ${B?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" name="energyTariffPeak" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${p(de.tariffPeak)}" aria-label="峰段电价" ${B?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" name="energyTariffFlat" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${p(de.tariffFlat)}" aria-label="平段电价" ${B?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" name="energyTariffValley" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${p(de.tariffValley)}" aria-label="谷段电价" ${B?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" name="energyCarbonFactor" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${B?"":"disabled"}>
                              <option value="0.5271" ${de.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${de.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${et(ee,B)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${B?"":"disabled"}>保存口径参数</button>
                        </div>
                      </div>
                    </section>`:d==="guardrails"?`
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
                              <input class="pacom-input" name="guardMinTemp" style="width:72px;" type="number" data-guard-field="minTemp" value="${p(ue.minTemp)}" aria-label="最低设定温度" ${B?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" name="guardMaxTemp" style="width:72px;" type="number" data-guard-field="maxTemp" value="${p(ue.maxTemp)}" aria-label="最高设定温度" ${B?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" name="guardOverrideAutoRelease" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${B?"":"disabled"}>
                                <option value="2h" ${ue.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${ue.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${ue.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${ue.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" name="guardReadbackTimeoutSec" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${p(ue.readbackTimeoutSec)}" aria-label="回读超时阈值" ${B?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${B?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${et(xe,B)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${p(re.dailyDigestTime)}" aria-label="每日简报发送时间" ${B?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${re.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${B?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${re.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${B?"":"disabled"}>
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
                              <input class="pacom-input" name="autoWoDelayMin" style="width:72px;" type="number" data-auto-wo="delayMin" value="${p(ce.delayMin)}" aria-label="自动派单延迟分钟数" ${B?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ce.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${B?"":"disabled"}>
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
                              <select class="pacom-select" name="autoWoDefaultGroup" data-auto-wo="defaultGroup" aria-label="默认处理组" ${B?"":"disabled"}>
                                <option value="暖通运维组" ${ce.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${ce.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${ce.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ce.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${B?"":"disabled"}>
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
                                ${V.map(I=>`
                                    <tr>
                                      <td><strong>${p(I.groupName)}</strong></td>
                                      <td>${p(I.scope)}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${p(I.severity)}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${p(I.channels)}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${I.enabled}" data-toggle-nr="${p(I.id)}" aria-label="切换 ${p(I.groupName)} 通知规则" ${B?"":"disabled"}>
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
    `,Na(a,{onToggle:()=>{u=!u,pe(),u&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:I=>{x=I,pe();const N=a.querySelector("[data-global-space-search]");N&&(N.focus(),N.setSelectionRange(I.length,I.length))},onPick:I=>{n=I,u=!1,pe()}}),a.querySelectorAll("[data-stab]").forEach(I=>{I.addEventListener("click",()=>{d=I.dataset.stab??"calendar",fe="",se="",pe()})}),a.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{B&&(le=!le,fe=`法定节假日自动跳过已${le?"开启":"关闭"}。`,pe())}),a.querySelector("[data-night-start]")?.addEventListener("change",I=>{B&&(Q=I.currentTarget.value)}),a.querySelector("[data-night-end]")?.addEventListener("change",I=>{B&&(ge=I.currentTarget.value)}),a.querySelector("[data-add-sd-form]")?.addEventListener("submit",I=>{if(I.preventDefault(),!B)return;const N=new FormData(I.currentTarget);te.push({id:`sd-${Date.now()}`,date:String(N.get("date")??""),label:String(N.get("label")??""),mode:String(N.get("mode")??"保持工作日工况")}),fe="已添加特殊例外日期，当日自动覆盖默认节假日排程。",pe()}),a.querySelectorAll("[data-del-sd]").forEach(I=>{I.addEventListener("click",()=>{if(!B)return;const N=te.findIndex(Se=>Se.id===I.dataset.delSd);N>=0&&te.splice(N,1),pe()})}),a.querySelectorAll("[data-tariff-mode]").forEach(I=>{I.addEventListener("click",()=>{J=I.dataset.tariffMode??"flat",pe()})}),a.querySelectorAll("[data-energy-field]").forEach(I=>{I.addEventListener("change",()=>{if(!B)return;const N=I.dataset.energyField;N&&(de[N]=I.value)})}),a.querySelector("[data-save-energy]")?.addEventListener("click",()=>{B&&(fe=J==="flat"?`能耗计费与气象口径已保存（面积 ${de.billingArea} m² · 综合电价 ¥${de.tariffYuan}/kWh · 因子 ${de.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${de.tariffPeak} / 平 ¥${de.tariffFlat} / 谷 ¥${de.tariffValley}）。`,pe())}),a.querySelectorAll("[data-guard-field]").forEach(I=>{I.addEventListener("change",()=>{if(!B)return;const N=I.dataset.guardField;N&&(ue[N]=I.value)})}),a.querySelector("[data-save-guard]")?.addEventListener("click",()=>{B&&(fe=`控制保护参数已保存（温区 ${ue.minTemp}–${ue.maxTemp}°C · 超时 ${ue.readbackTimeoutSec}s）。`,pe())}),a.querySelectorAll("[data-auto-wo]").forEach(I=>{I.addEventListener("change",()=>{if(!B)return;const N=I.dataset.autoWo;N&&(ce[N]=I.value),fe="超时自动派单配置已更新。",pe()})}),a.querySelectorAll("[data-toggle-autowo]").forEach(I=>{I.addEventListener("click",()=>{if(!B)return;const N=I.dataset.toggleAutowo;N&&(ce[N]=!ce[N],fe="自动派单保护策略已更新。",pe())})}),a.querySelector("[data-digest-time]")?.addEventListener("change",I=>{B&&(re.dailyDigestTime=I.currentTarget.value,fe=`每日晨间简报发送时刻已更新为 ${re.dailyDigestTime}。`,pe())}),a.querySelectorAll("[data-notify-key]").forEach(I=>{I.addEventListener("click",()=>{if(!B)return;const N=I.dataset.notifyKey;N&&(re[N]=!re[N],fe="消息通知偏好已更新。",pe())})}),a.querySelectorAll("[data-toggle-nr]").forEach(I=>{I.addEventListener("click",()=>{if(!B)return;const N=V.find(Se=>Se.id===I.dataset.toggleNr);N&&(N.enabled=!N.enabled,fe=`工作组「${N.groupName}」的分流推送规则已${N.enabled?"启用":"停用"}。`,pe())})}),a.querySelector("[data-cal-start]")?.addEventListener("change",I=>{B&&(P=I.currentTarget.value)}),a.querySelector("[data-cal-end]")?.addEventListener("change",I=>{B&&(z=I.currentTarget.value)}),a.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{se="";try{oe=await e.previewCalendarImpact($.projectId,P,z),pe()}catch(I){se=I instanceof Error?I.message:String(I),pe()}}),a.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{if(B){se="";try{const I=await e.saveWorkCalendar($.projectId,P,z,T.calendar.version);T={...T,calendar:{...I,nightGuardStart:Q,nightGuardEnd:ge}},fe=`工作时间配置已保存至 v${I.version}（工作日 ${I.workdayStart}–${I.workdayEnd} · 夜间值守 ${Q}–${ge}）`,oe=[],pe()}catch(I){se=I instanceof Error?I.message:String(I),pe()}}}),a.querySelectorAll("[data-toggle-rule]").forEach(I=>{I.addEventListener("click",async()=>{if(B){se="";try{await e.toggleRuntimeRule(I.dataset.toggleRule,I.dataset.ruleNext==="true",Number(I.dataset.ruleVer)),T=await e.getRuntimeSettings($.projectId),fe="策略状态与版本回执已更新。",pe()}catch(N){se=N instanceof Error?N.message:String(N),pe()}}})})}pe()}const yt="pacom.web.sidebar.collapsed",cs=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,$t=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],tt={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},wt=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function at(){const a=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return a in tt?a:"home"}function Re(a){return a.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const _a=new WeakMap;function rs(a){_a.get(a)?.()}async function ds(a,e,s,d){_a.get(a)?.(),a.classList.remove("bare-login");let n=s,u=at(),x=localStorage.getItem(yt)==="1",F=!1,R=!1,T=!1,P=await e.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],z=e.getActiveOrganizationId?.()??P[0]?.id??"org-gzlab",Q="",ge=!1,le=0,oe={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function te(m){return n.scope.visibleModules.includes(m)}te(u)||(u="home",window.location.hash="#home");function J(){return P.find(m=>m.id===z)??P[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function de(m){if(m.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const h=m.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${Re(h)}</span>`}async function ue(){e.listOrganizations&&(P=await e.listOrganizations(),z=e.getActiveOrganizationId?.()??P[0]?.id??"org-gzlab")}async function ce(){try{await ue();const[m,h,f,c,k]=await Promise.all([e.getSpatialTree(),e.getFloorDevices($.floorId).catch(()=>[]),e.listAlarms($.floorId).catch(()=>[]),e.listWorkOrders($.floorId).catch(()=>[]),e.listScenes($.floorId).catch(()=>[])]);oe={devices:h,zones:m.zones,alarms:f,workOrders:c,scenes:k},le=f.filter(C=>C.status==="active").length,G()}catch{}}function re(){const m=$t.filter(f=>te(f.id));let h=!1;return m.map(f=>`
        ${(f.id==="settings"||f.id==="deployment")&&!h?(h=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${f.id}" aria-current="${u===f.id?"page":"false"}" title="${f.label}">
          ${be(f.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${f.label}</span>
          ${f.id==="alarms"&&le>0?`<span class="pacom-nav-count" title="待处理告警 ${le} 条">${le}</span>`:""}
        </button>`).join("")}function V(){const m=Q.trim().toLowerCase(),h=$t.filter(K=>te(K.id)),f=m?h.filter(K=>K.label.toLowerCase().includes(m)).slice(0,4):h,c=m?oe.devices.filter(K=>`${K.name} ${K.id} ${K.category}`.toLowerCase().includes(m)).slice(0,5):oe.devices.slice(0,3),k=m?oe.zones.filter(K=>K.name.toLowerCase().includes(m)).slice(0,3):[],C=te("alarms")?m?oe.alarms.filter(K=>`${K.title} ${K.message} ${K.id}`.toLowerCase().includes(m)).slice(0,4):oe.alarms.filter(K=>K.status==="active").slice(0,2):[],ie=te("alarms")?m?oe.workOrders.filter(K=>`${K.title} ${K.id}`.toLowerCase().includes(m)).slice(0,3):[]:[],Ee=te("scenes")?m?oe.scenes.filter(K=>`${K.name} ${K.description}`.toLowerCase().includes(m)).slice(0,3):[]:[],we=te("deployment")?m?wt.filter(K=>`${K.title} ${K.category}`.toLowerCase().includes(m)).slice(0,4):wt.slice(0,2):[],me=[];return c.length&&me.push(`<div class="pacom-search-group">${m?"设备（空间总览）":"常用设备直达"}</div>`+c.map(K=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(K.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Re(K.name)}</span><span class="pacom-badge ${K.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${K.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),k.length&&me.push('<div class="pacom-search-group">功能区</div>'+k.map(K=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(K.id)}"><span>${Re(K.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),C.length&&me.push(`<div class="pacom-search-group">${m?"告警":"待处理告警"}</div>`+C.map(K=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(K.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Re(K.title)}</span><span class="pacom-badge pacom-badge--warning">${K.status==="active"?"待处理":"已确认"}</span></button>`).join("")),ie.length&&me.push('<div class="pacom-search-group">运维工单</div>'+ie.map(K=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(K.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Re(K.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),Ee.length&&me.push('<div class="pacom-search-group">智能策略</div>'+Ee.map(K=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${Re(K.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),we.length&&me.push('<div class="pacom-search-group">图纸与工程文档</div>'+we.map(K=>`<button type="button" class="pacom-search-hit" data-search-hash="${K.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Re(K.title)}</span><span class="pacom-badge pacom-badge--neutral">${Re(K.category)}</span></button>`).join("")),f.length&&me.push('<div class="pacom-search-group">工作区</div>'+f.map(K=>`<button type="button" class="pacom-search-hit" data-search-hash="#${K.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${be(K.icon,14)}${Re(K.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),me.length?me.join(""):`<div class="pacom-nav-empty">未找到与「${Re(Q)}」匹配的设备、区域、告警、工单或图纸</div>`}function fe(m){m.querySelectorAll("[data-search-hash]").forEach(h=>{h.addEventListener("click",()=>{const f=h.dataset.searchHash||"#home";ge=!1,Q="",se(),F=!1,window.location.hash===f?(u=at(),$e(!0)):window.location.hash=f})})}function se(){if(a.querySelector('[data-role="cmd-scrim"]')?.remove(),!ge)return;const m=document.createElement("div");m.className="pacom-cmd-scrim",m.dataset.role="cmd-scrim",m.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${be("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${Re(Q)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${V()}
        </div>
      </div>
    `,a.appendChild(m),m.addEventListener("click",c=>{c.target===m&&(ge=!1,se())});const h=m.querySelector('[data-role="cmd-input"]'),f=m.querySelector('[data-role="cmd-body"]');f&&fe(f),h?.focus(),h?.addEventListener("input",c=>{Q=c.currentTarget.value,f&&(f.innerHTML=V(),fe(f))})}function _e(){if(!R)return"";const m=n.displayName.slice(0,1)||"U",h=!!(e.createOrganization&&n.role==="org_admin");return`
      <div class="pacom-org-popover ${x?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${P.map(f=>{const c=f.id===z;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${c}" data-pop-org="${Re(f.id)}">
                ${de(f)}
                <span class="pacom-pop-text">
                  <b>${Re(f.name)}</b>
                  <small>${f.projectCount>0?`${f.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${c?be("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${h?T?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${be("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${be("settings",16)}</span>
          <span class="pacom-pop-text">机构与权限</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${Re(m)}</span>
          <span class="pacom-pop-text">
            <b>${Re(n.displayName)}</b>
            <small>${Re(n.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${be("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function pe(m){switch(te(u)||(u="home",window.location.hash="#home"),document.title=`${tt[u]} · PACOM Station`,u){case"home":await Ot(m,e,n);return;case"analysis":await Dt(m,e,n);return;case"alarms":await Yt(m,e,n);return;case"scenes":await is(m,e,n);return;case"settings":await ls(m,e,n);return;case"deployment":await ts(m,e,n);return;case"account":await Ht(m,e,n,h=>{n=h,G(),ne()},B);return}}async function B(){R=!1,F=!1,ge=!1,A();try{await e.logout()}finally{window.location.hash="#login",d()}}function G(){const m=a.querySelector('[data-role="nav-list"]');m&&(m.innerHTML=re(),Z())}function ne(){a.querySelector('[data-role="org-popover"]')?.remove();const m=a.querySelector('[data-role="org-menu-btn"]');if(m&&m.setAttribute("aria-expanded",String(R)),!R)return;const h=document.createElement("div");h.innerHTML=_e().trim();const f=h.firstElementChild;f&&(a.appendChild(f),xe())}function Z(){a.querySelectorAll("[data-route]").forEach(m=>{m.addEventListener("click",()=>{const h=m.dataset.route;h===u&&!F||(u=h,F=!1,R=!1,window.location.hash=`#${u}`,$e(!0))})})}async function ee(m){if(!e.switchOrganization)return;await e.switchOrganization(m),await ue();const h=await e.getSpatialTree(),f=h.projects[0],c=f?h.buildings.find(C=>C.projectId===f.id):void 0,k=c?h.floors.find(C=>C.buildingId===c.id&&C.id===$.floorId)??h.floors.find(C=>C.buildingId===c.id):void 0;f&&c&&k?ba({level:"floor",projectId:f.id,buildingId:c.id,floorId:k.id}):f&&c?ba({level:"building",projectId:f.id,buildingId:c.id}):f?ba({level:"project",projectId:f.id}):ba({level:"all-projects"}),R=!1,T=!1,F=!1,await $e(!0),ce()}function xe(){a.querySelectorAll("[data-pop-org]").forEach(m=>{m.addEventListener("click",()=>{const h=m.dataset.popOrg;if(h){if(h===z){R=!1,ne();return}ee(h)}})}),a.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",m=>{m.stopPropagation(),T=!T,ne(),T&&a.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),a.querySelector("[data-create-org-form]")?.addEventListener("submit",async m=>{if(m.preventDefault(),!e.createOrganization)return;const h=new FormData(m.currentTarget),f=String(h.get("orgName")??"").trim();if(!f)return;const c=await e.createOrganization(f);await ee(c.id)}),a.querySelectorAll('[data-pop-act="go-account"]').forEach(m=>{m.addEventListener("click",()=>{R=!1,T=!1,F=!1,u="account",window.location.hash="#account",$e(!0)})}),a.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{B()})}async function $e(m){const h=a.querySelector('[data-role="main-stage"]');if(!m&&h){const c=a.querySelector(".pacom-nav-rail");c&&(c.classList.toggle("is-collapsed",x),c.classList.toggle("is-mobile-open",F));const k=a.querySelector('[data-role="mobile-scrim"]');k&&k.classList.toggle("is-open",F),ne();return}a.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${be("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${tt[u]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Re(n.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${F?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${x?"is-collapsed":""} ${F?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${cs}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${x?"展开侧栏":"收起侧栏"}" aria-label="${x?"展开侧栏":"收起侧栏"}">
              ${be("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${be("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${re()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${u==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${R}" title="${Re(J().name)} · ${Re(n.displayName)}">
              ${de(J())}
              <span class="pacom-org-name">${Re(J().name)}</span>
              ${be("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,a.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{x=!x,R=!1,localStorage.setItem(yt,x?"1":"0");const c=a.querySelector(".pacom-nav-rail"),k=a.querySelector('[data-role="toggle-sidebar"]');c&&c.classList.toggle("is-collapsed",x),k&&(k.title=x?"展开侧栏":"收起侧栏",k.setAttribute("aria-label",k.title),k.innerHTML=be("panel-left",16)),ne()}),a.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{R=!1,ne(),ge=!0,se()}),a.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{F=!F,$e(!1)}),a.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{F=!1,R=!1,$e(!1)}),a.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",c=>{c.stopPropagation(),R=!R,ne()}),Z(),ne(),se();const f=a.querySelector('[data-role="main-stage"]');f&&await pe(f)}const I=m=>{const h=m.target;R&&!h?.closest('[data-role="org-popover"]')&&!h?.closest('[data-role="org-menu-btn"]')&&(R=!1,ne())},N=m=>{if((m.metaKey||m.ctrlKey)&&m.key.toLowerCase()==="k"){m.preventDefault(),R=!1,ne(),ge=!ge,se();return}m.key==="Escape"&&(ge?(ge=!1,se()):R?(R=!1,ne()):F&&(F=!1,$e(!1)))},Se=()=>{u=at(),R=!1,F=!1,ge=!1,$e(!0),ce()};function A(){document.removeEventListener("click",I),document.removeEventListener("keydown",N),window.removeEventListener("hashchange",Se),_a.get(a)===A&&_a.delete(a)}_a.set(a,A),document.addEventListener("click",I),document.addEventListener("keydown",N),window.addEventListener("hashchange",Se),await $e(!0),ce()}const ra=["password","sms"];function ps(a){const e=pa(a).replace(/[\s-]/g,"");return/^(\+?86)?1[3-9]\d{9}$/.test(e)}const ja=new WeakMap;function St(a){ja.get(a)?.()}function us(a,e,s,d){ja.get(a)?.(),a.classList.add("bare-login"),document.title="登录 · PACOM Station";let n=!1,u=!1,x="",F="",R="",T="",P=!1,z={},Q="",ge=!1,le="",oe=0,te=null,J=null,de=null,ue=!1,ce="",re="",V=null,fe=!1;const se=kt();function _e(f){if(f.key==="Escape"){if(se.isOpen()){f.preventDefault(),se.close(!0);return}de&&(f.preventDefault(),I())}}function pe(f){const c=a.querySelector('[data-role="mode-seg"]'),k=c?.querySelector(".au-mode-indicator"),C=c?.querySelector('.au-mode-tab[aria-selected="true"]');!k||!C||(k.style.transition=f?"":"none",k.style.transform=`translateX(${C.offsetLeft}px)`,k.style.width=`${C.offsetWidth}px`,f||(k.offsetWidth,k.style.transition=""))}function B(){pe(!1)}function G(){fe=!0,se.destroy(),te!==null&&(window.clearInterval(te),te=null),J!==null&&(window.clearTimeout(J),J=null),document.removeEventListener("keydown",_e),window.removeEventListener("resize",B),a.classList.remove("bare-login"),ja.get(a)===G&&ja.delete(a)}document.addEventListener("keydown",_e),window.addEventListener("resize",B),ja.set(a,G);function ne(f=60){oe=f,te!==null&&window.clearInterval(te),te=window.setInterval(()=>{oe-=1,oe<=0&&(oe=0,te!==null&&(window.clearInterval(te),te=null));const c=a.querySelector('[data-act="send-sms"]');c&&(c.disabled=oe>0,c.textContent=oe>0?`${oe} 秒后重发`:le?"重新获取":"获取验证码")},1e3)}function Z(){const f=a.querySelector("#au-login-ferr");if(f)if(Q){f.hidden=!1;const c=f.querySelector('[data-role="ferr-text"]');c&&(c.textContent=Q)}else f.hidden=!0}function ee(f){const c=a.querySelector(`.au-field[data-f="${f}"]`),k=a.querySelector(`#au-${f}`),C=a.querySelector(`#au-${f}-err`),ie=z[f]??"";c?.classList.toggle("bad",!!ie),k?.setAttribute("aria-invalid",ie?"true":"false"),C&&(C.textContent=ie)}function xe(){const f=a.querySelector('form[data-form="login"] fieldset'),c=a.querySelector('form[data-form="login"] button[type="submit"]');f&&(f.disabled=ge),c&&(c.disabled=ge,c.innerHTML=ge?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"<span>登录</span>")}function $e(f,c){se.close(!1),V=c??(document.activeElement instanceof HTMLElement?document.activeElement:null),de=f,Se(),f==="reset"?a.querySelector("#au-rs-id")?.focus():a.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function I(){if(!de)return;de=null,J!==null&&(window.clearTimeout(J),J=null),ue=!1,Se();const f=V;V=null,f&&document.contains(f)&&f.focus({preventScroll:!0})}function N(){if(!de)return"";if(de==="reset"){const f=ce.trim().length>0;return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ct}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field" style="margin-bottom:0;">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${p(ce)}" />
                  </div>
                </div>
                <div class="au-notice-soft" data-role="reset-notice" role="status" aria-live="polite" ${re?"":"hidden"}>
                  ${Ft}
                  <span data-role="reset-notice-text">${p(re)}</span>
                </div>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${f?"":"disabled"}>发送验证码</button>
            </div>
          </section>
        </div>
      `}return de==="contact"?Tt(ue):""}function Se(){const f=a.querySelector('[data-role="modal-host"]');if(!f||(f.innerHTML=N(),!de))return;f.querySelectorAll('[data-act="close-modal"]').forEach(C=>{C.addEventListener("click",()=>I())}),f.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",C=>{C.target===C.currentTarget&&I()}),f.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{const C=f.querySelector('[data-act="copy-support"]');try{await navigator.clipboard.writeText("support@pacom.cn")}catch{}ue=!0,C&&(C.classList.add("is-copied"),C.innerHTML=`${Lt}<span>已复制</span>`),J!==null&&window.clearTimeout(J),J=window.setTimeout(()=>{J=null,ue=!1;const ie=f.querySelector('[data-act="copy-support"]');ie&&(ie.classList.remove("is-copied"),ie.innerHTML=`${At}<span>复制</span>`)},1800)});const c=f.querySelector("#au-rs-id"),k=f.querySelector('[data-role="reset-submit"]');c?.addEventListener("input",()=>{ce=c.value,k&&(k.disabled=ce.trim().length===0)}),f.querySelector("#au-reset-form")?.addEventListener("submit",async C=>{if(C.preventDefault(),ce=pa(c?.value??""),!ce)re="请输入电子邮箱或手机号码";else try{re=`如该账号已注册，验证码已发送至 ${(await e.sendVerificationCode({target:ce,purpose:"reset"})).maskedTarget||Ra(ce)}；如需协助请联系机构管理员。`}catch{re="请联系机构管理员重置账号密码，或确认后查收重置验证码。"}const ie=f.querySelector('[data-role="reset-notice"]'),Ee=f.querySelector('[data-role="reset-notice-text"]');ie&&Ee&&(Ee.textContent=re,ie.hidden=!1)})}function A(){se.close(!1);const f=`
      <span data-role="login-novcode-wrap" ${le?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-login-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-login-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-login-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `,c=n?`
        <div class="au-field ${z.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${p(R)}" aria-invalid="${z.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${oe>0?"disabled":""}>
              ${oe>0?`${oe} 秒后重发`:le?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${p(z.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${le?`验证码已发送至 ${p(le)}`:""}</p>
        </div>
      `:`
        <div class="au-field ${z.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${p(x)}" aria-invalid="${z.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${p(z.id??"")}</p>
        </div>
      `,k=n?`
        <div class="au-field ${z.scode?"bad":""}" data-f="scode">
          <div class="au-lab">
            <label for="au-scode">短信验证码</label>
            ${f}
          </div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${p(T)}" aria-invalid="${z.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${p(z.scode??"")}</p>
        </div>
      `:`
        <div class="au-field ${z.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab">
            <label for="au-pwd">密码</label>
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${u?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${p(F)}" aria-invalid="${z.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${u?"隐藏密码":"显示密码"}">
              ${u?$a:ya}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${p(z.pwd??"")}</p>
        </div>
      `,C=a.querySelector('[data-role="fields-host"]');C&&(C.innerHTML=`${c}${k}`,h(C))}function m(f,c=!1){const k=f==="sms";n===k||ge||(k&&!R.trim()&&ps(x)?R=x.trim():!k&&!x.trim()&&R.trim()&&(x=R.trim()),n=k,z={},Q="",a.querySelectorAll('[data-act="switch-mode"]').forEach(C=>{const ie=C.dataset.mode===f;C.setAttribute("aria-selected",String(ie)),C.tabIndex=ie?0:-1,ie&&c&&C.focus({preventScroll:!0})}),pe(!0),A(),Z(),c||(n?le?a.querySelector("#au-scode")?.focus({preventScroll:!0}):R.trim()?a.querySelector('[data-act="send-sms"]')?.focus({preventScroll:!0}):a.querySelector("#au-sphone")?.focus({preventScroll:!0}):a.querySelector(x.trim()?"#au-pwd":"#au-id")?.focus({preventScroll:!0})))}function h(f){se.bind(f);const c=f.querySelector("#au-id"),k=f.querySelector("#au-pwd"),C=f.querySelector("#au-sphone"),ie=f.querySelector("#au-scode");c?.addEventListener("input",()=>{x=c.value,(z.id||Q)&&(delete z.id,Q="",ee("id"),Z())}),k?.addEventListener("input",()=>{F=k.value,(z.pwd||Q)&&(delete z.pwd,Q="",ee("pwd"),Z())}),C?.addEventListener("input",()=>{if(R=C.value,le){le="";const Ee=f.querySelector("#au-sphone-hint");Ee&&(Ee.textContent="");const we=f.querySelector('[data-role="login-novcode-wrap"]');we&&(we.hidden=!0),se.close(!1);const me=f.querySelector('[data-act="send-sms"]');me&&oe===0&&(me.textContent="获取验证码")}(z.sphone||Q)&&(delete z.sphone,Q="",ee("sphone"),Z())}),ie?.addEventListener("input",()=>{T=ie.value.replace(/\D/g,"").slice(0,6),ie.value=T,(z.scode||Q)&&(delete z.scode,Q="",ee("scode"),Z())}),f.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",Ee=>{u=!u;const we=Ee.currentTarget,me=f.querySelector("#au-pwd");if(me){const K=me.selectionStart,i=me.selectionEnd;me.type=u?"text":"password",me.focus({preventScroll:!0}),K!==null&&i!==null&&me.setSelectionRange(K,i)}we.setAttribute("aria-label",u?"隐藏密码":"显示密码"),we.innerHTML=u?$a:ya}),f.querySelector('[data-act="send-sms"]')?.addEventListener("click",async()=>{const Ee=Aa(R);if(Ee){z={...z,sphone:Ee},ee("sphone"),f.querySelector("#au-sphone")?.focus({preventScroll:!0});return}delete z.sphone,ee("sphone");const we=f.querySelector('[data-act="send-sms"]');we&&(we.disabled=!0,we.textContent="发送中…");try{const me=await e.sendVerificationCode({target:pa(R),purpose:"login"});if(fe)return;le=me.maskedTarget||Ra(R);const K=f.querySelector("#au-sphone-hint");K&&(K.textContent=`验证码已发送至 ${le}`);const i=f.querySelector('[data-role="login-novcode-wrap"]');i&&(i.hidden=!1),ne(me.cooldownSeconds||60),we&&(we.disabled=!0,we.textContent=`${oe} 秒后重发`),f.querySelector("#au-scode")?.focus({preventScroll:!0})}catch(me){if(fe)return;we&&(we.disabled=!1,we.textContent=le?"重新获取":"获取验证码"),Q=me instanceof Error?me.message:"暂时无法发送验证码，请稍后再试。",Z()}}),f.querySelector('[data-act="open-reset"]')?.addEventListener("click",Ee=>{ce=x.trim(),re="",$e("reset",Ee.currentTarget)})}a.innerHTML=`
    <div class="au au-split au-auth-shell">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${_t}</div>
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
        ${jt()}
      </section>
      <aside class="au-art" aria-hidden="true">
        <div class="au-art-frame">
          <img src="./media/auth-hero.jpg" alt="" />
        </div>
      </aside>
    </div>
    <div data-role="modal-host"></div>
  `,a.querySelector('input[name="keep"]')?.addEventListener("change",f=>{P=f.currentTarget.checked}),a.querySelector('form[data-form="login"]')?.addEventListener("submit",async f=>{if(f.preventDefault(),!ge){if(z={},Q="",n){const c=Aa(R);c&&(z.sphone=c),/^\d{6}$/.test(T.trim())||(z.scode="请输入 6 位验证码"),ee("sphone"),ee("scode")}else x.trim()||(z.id="请输入电子邮箱或手机号码"),F||(z.pwd="请输入密码"),ee("id"),ee("pwd");if(Z(),Object.keys(z).length>0){const c=Object.keys(z)[0];a.querySelector(`#au-${c}`)?.focus({preventScroll:!0});return}ge=!0,xe();try{const c=await e.login({account:pa(n?R:x),password:n?T.trim():F});G(),s(c)}catch(c){ge=!1,Q=c instanceof Error?c.message:"账户或密码不正确",xe(),Z()}}}),a.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{d?.onOpenRegister?(G(),d.onOpenRegister()):window.location.hash="#register"}),a.querySelectorAll('[data-act="switch-mode"]').forEach(f=>{f.addEventListener("click",()=>{const c=f.dataset.mode;c&&m(c,!1)}),f.addEventListener("keydown",c=>{const k=n?"sms":"password",C=ra.indexOf(k);c.key==="ArrowRight"?(c.preventDefault(),m(ra[(C+1)%ra.length],!0)):c.key==="ArrowLeft"?(c.preventDefault(),m(ra[(C-1+ra.length)%ra.length],!0)):c.key==="Home"?(c.preventDefault(),m(ra[0],!0)):c.key==="End"&&(c.preventDefault(),m(ra[ra.length-1],!0))})}),a.querySelector('[data-act="open-contact"]')?.addEventListener("click",f=>{ue=!1,$e("contact",f.currentTarget)}),A(),pe(!1),document.fonts?.ready.then(()=>{fe||pe(!1)})}const da=["join","apply"],fa=1e3,ha=50,Ma=60,xt=110,La=new WeakMap;function Et(a){La.get(a)?.()}function ms(a,e,s){La.get(a)?.(),a.classList.add("bare-login");let d=!1,n=s.initialMode??"join",u=null,x=!1,F=null,R=null,T=null,P=null,z=!1;const Q=(s.inviteToken??"").trim();let ge=!!Q,le=null,oe="",te="",J="",de=!1,ue=!1,ce=st(s.prefillCode??""),re="",V=!1,fe=0,se="",_e="",pe="",B="",G="",ne=!1,Z=!1,ee="",xe=0,$e=null,I="",N="",Se="",A="",m="",h="",f="",c="",k="",C="",ie=!1,Ee="",we=0,me=null,K=null,i={},g="",D=!1;const Y=kt();function ye(w){if(w.key==="Escape"){if(Y.isOpen()){w.preventDefault(),Y.close(!0);return}u&&(w.preventDefault(),ua())}}function Fe(w){const O=a.querySelector('[data-role="reg-seg"]'),W=O?.querySelector(".au-mode-indicator"),ae=O?.querySelector('.au-mode-tab[aria-selected="true"]');!W||!ae||(W.style.transition=w?"":"none",W.style.transform=`translateX(${ae.offsetLeft}px)`,W.style.width=`${ae.offsetWidth}px`,w||(W.offsetWidth,W.style.transition=""))}function Ke(){Fe(!1)}function Le(){d=!0,Y.destroy(),$e!==null&&(window.clearInterval($e),$e=null),me!==null&&(window.clearInterval(me),me=null),K!==null&&(window.clearTimeout(K),K=null),document.removeEventListener("keydown",ye),window.removeEventListener("resize",Ke),a.classList.remove("bare-login"),La.get(a)===Le&&La.delete(a)}document.addEventListener("keydown",ye),window.addEventListener("resize",Ke),La.set(a,Le);function Ne(w){xe=w,$e!==null&&window.clearInterval($e),$e=window.setInterval(()=>{xe-=1,xe<=0&&(xe=0,$e!==null&&(window.clearInterval($e),$e=null));const O=a.querySelector('[data-act="jn-send-code"]');O&&(O.disabled=xe>0,O.textContent=xe>0?`${xe} 秒后重发`:ee?"重新获取":"获取验证码")},1e3)}function aa(w){we=w,me!==null&&window.clearInterval(me),me=window.setInterval(()=>{we-=1,we<=0&&(we=0,me!==null&&(window.clearInterval(me),me=null));const O=a.querySelector('[data-act="ap-send-code"]');O&&(O.disabled=we>0,O.textContent=we>0?`${we} 秒后重发`:Ee?"重新获取":"获取验证码")},1e3)}function H(){const w=a.querySelector("#au-reg-ferr");if(w)if(g){w.hidden=!1;const O=w.querySelector('[data-role="ferr-text"]');O&&(O.textContent=g)}else w.hidden=!0}function U(w){const O=a.querySelector(`.au-field[data-f="${w}"]`),W=a.querySelector(`#au-${w}`),ae=a.querySelector(`#au-${w}-err`),Ie=i[w]??"";O?.classList.toggle("bad",!!Ie),W?.setAttribute("aria-invalid",Ie?"true":"false"),ae&&(ae.textContent=Ie)}function Be(w,O){const W=a.querySelector("form[data-reg-form] fieldset"),ae=a.querySelector('form[data-reg-form] button[type="submit"]');W&&(W.disabled=D),ae&&(ae.disabled=D,ae.innerHTML=D?`<span class="au-spinner" aria-hidden="true"></span><span>${p(w)}</span>`:`<span>${p(O)}</span>`)}function ta(w,O){Y.close(!1),F=O??(document.activeElement instanceof HTMLElement?document.activeElement:null),u=w,Ce(),a.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function ua(){if(!u)return;u=null,R=null,K!==null&&(window.clearTimeout(K),K=null),x=!1,Ce();const w=F;F=null,w&&document.contains(w)&&w.focus({preventScroll:!0})}function Ca(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">请阅读并同意</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ct}</button>
          </div>
          <div class="db">
            <p class="au-dlead" style="margin-bottom:0;">
              发送验证码前，请先阅读并同意 PACOM
              <a class="au-consent-link" href="${qa}" target="_blank" rel="noopener noreferrer">隐私政策</a>和<a class="au-consent-link" href="${qa}" target="_blank" rel="noopener noreferrer">使用条款</a>。
            </p>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="consent-confirm">同意并发送</button>
          </div>
        </section>
      </div>
    `}function Ce(){const w=a.querySelector('[data-role="modal-host"]');if(w){if(!u){w.innerHTML="";return}w.innerHTML=u==="contact"?Tt(x):Ca(),w.querySelectorAll('[data-act="close-modal"]').forEach(O=>{O.addEventListener("click",()=>ua())}),w.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",O=>{O.target===O.currentTarget&&ua()}),w.querySelector('[data-act="consent-confirm"]')?.addEventListener("click",()=>{const O=R;R=null,u=null,Ce(),O?.()}),w.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{const O=w.querySelector('[data-act="copy-support"]');try{await navigator.clipboard.writeText("support@pacom.cn")}catch{}x=!0,O&&(O.classList.add("is-copied"),O.innerHTML=`${Lt}<span>已复制</span>`),K!==null&&window.clearTimeout(K),K=window.setTimeout(()=>{K=null,x=!1;const W=w.querySelector('[data-act="copy-support"]');W&&(W.classList.remove("is-copied"),W.innerHTML=`${At}<span>复制</span>`)},1800)})}}function wa(w,O,W,ae){return`
      <div class="au-field au-consent-field ${i[ae]?"bad":""}" data-f="${ae}">
        <div class="au-check au-consent-row">
          <input id="${w}" type="checkbox" name="${O}" ${W?"checked":""} aria-invalid="${i[ae]?"true":"false"}" />
          <span class="au-consent-text">
            <label class="au-consent-label" for="${w}">我已阅读并同意 PACOM </label><a class="au-consent-link" href="${qa}" target="_blank" rel="noopener noreferrer">隐私政策</a><label class="au-consent-label" for="${w}">和</label><a class="au-consent-link" href="${qa}" target="_blank" rel="noopener noreferrer">使用条款</a>
          </span>
        </div>
        <p class="au-err" id="au-${ae}-err" aria-live="polite">${p(i[ae]??"")}</p>
      </div>
    `}async function Sa(w){const O=w.replace(/\D/g,"");if(O.length!==9){re="",V=!1,We();return}const W=++fe;V=!0,re="",We();try{const ae=await e.resolveInviteCode(O);if(d||W!==fe)return;V=!1,ae.valid&&ae.organizationName?(re=ae.organizationName,delete i.jn_code):(re="",i.jn_code=ae.message??"邀请码不正确或已失效，请向机构管理员确认。"),U("jn_code"),We()}catch(ae){if(d||W!==fe)return;V=!1,re="",i.jn_code=ae instanceof Error?ae.message:"暂时无法核验邀请码，请稍后再试。",U("jn_code"),We()}}function We(){const w=a.querySelector('[data-role="jn-code-match"]'),O=a.querySelector('[data-role="jn-nocode-wrap"]');w&&(re?(w.hidden=!1,w.innerHTML=`${ot}<span>目标机构：${p(re)}</span>`):(w.hidden=!0,w.innerHTML="")),O&&(O.hidden=!!re)}function Pe(){const w=`
      <span data-role="jn-nocode-wrap" ${re?"hidden":""}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-nocode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-nocode-pop"><span>没有邀请码？</span></button>
        <span id="au-jn-nocode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="没有邀请码说明" hidden>
          <span class="ws-info-text">请向所在机构的管理员获取 9 位邀请码；如需为新企业开通，请切换上方「申请开通机构」。</span>
        </span>
      </span>
    `,O=`
      <span data-role="jn-novcode-wrap" ${ee?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-jn-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认邮箱或手机号码无误，检查垃圾邮件或短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">填写机构 9 位邀请码，管理员批准后即可访问。</p>
      <form class="au-compact-form au-reg-form" data-reg-form="join" novalidate>
        <fieldset ${D?"disabled":""}>
          <div class="au-field ${i.jn_code?"bad":""}" data-f="jn_code">
            <div class="au-lab">
              <label for="au-jn_code">机构邀请码</label>
              ${w}
            </div>
            <div class="au-ctl">
              <input id="au-jn_code" name="jn_code" class="au-in" type="text" inputmode="numeric" autocomplete="off" maxlength="11" autocapitalize="none" autocorrect="off" spellcheck="false" value="${p(ce)}" aria-invalid="${i.jn_code?"true":"false"}" />
            </div>
            <div class="au-code-match" data-role="jn-code-match" role="status" aria-live="polite" ${re?"":"hidden"}>
              ${re?`${ot}<span>目标机构：${p(re)}</span>`:""}
            </div>
            <p class="au-err" id="au-jn_code-err" aria-live="polite">${p(i.jn_code??"")}</p>
          </div>

          <div class="au-field ${i.jn_name?"bad":""}" data-f="jn_name">
            <div class="au-lab"><label for="au-jn_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-jn_name" name="jn_name" class="au-in" type="text" autocomplete="name" value="${p(se)}" aria-invalid="${i.jn_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_name-err" aria-live="polite">${p(i.jn_name??"")}</p>
          </div>

          <div class="au-field ${i.jn_dept?"bad":""}" data-f="jn_dept">
            <div class="au-lab"><label for="au-jn_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-jn_dept" name="jn_dept" class="au-in" type="text" autocomplete="organization-title" value="${p(_e)}" aria-invalid="${i.jn_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_dept-err" aria-live="polite">${p(i.jn_dept??"")}</p>
          </div>

          <div class="au-field ${i.jn_account?"bad":""}" data-f="jn_account">
            <div class="au-lab"><label for="au-jn_account">电子邮箱或手机号码</label></div>
            <div class="au-ctl">
              <input id="au-jn_account" name="jn_account" class="au-in has-code-btn" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${p(pe)}" aria-invalid="${i.jn_account?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="jn-send-code" ${xe>0?"disabled":""}>
                ${xe>0?`${xe} 秒后重发`:ee?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-jn_account-err" aria-live="polite">${p(i.jn_account??"")}</p>
            <p class="au-hint" id="au-jn_account-hint" role="status" aria-live="polite">${ee?`验证码已发送至 ${p(ee)}`:""}</p>
          </div>

          <div class="au-field ${i.jn_vcode?"bad":""}" data-f="jn_vcode">
            <div class="au-lab">
              <label for="au-jn_vcode">验证码</label>
              ${O}
            </div>
            <div class="au-ctl">
              <input id="au-jn_vcode" name="jn_vcode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${p(B)}" aria-invalid="${i.jn_vcode?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_vcode-err" aria-live="polite">${p(i.jn_vcode??"")}</p>
          </div>

          <div class="au-field ${i.jn_pwd?"bad":""}" data-f="jn_pwd">
            <div class="au-lab au-label-row">
              <span class="au-lab-group">
                <label for="au-jn_pwd">设置密码</label>
                ${Ga("au-jn-pwd-info","设置密码说明",it)}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-jn_pwd" name="jn_pwd" class="au-in has-suffix" type="${ne?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${p(G)}" aria-invalid="${i.jn_pwd?"true":"false"}" />
              <button type="button" class="au-suffix au-eye" data-act="jn-toggle-eye" aria-controls="au-jn_pwd" aria-label="${ne?"隐藏密码":"显示密码"}">
                ${ne?$a:ya}
              </button>
            </div>
            <p class="au-err" id="au-jn_pwd-err" aria-live="polite">${p(i.jn_pwd??"")}</p>
          </div>

          ${wa("au-jn_consent","jn_consent",Z,"jn_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${g?"":"hidden"}>
            ${ka}
            <span data-role="ferr-text">${p(g)}</span>
          </div>

          <button type="submit" class="au-primary au-compact-primary" ${D?"disabled":""}>
            ${D?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>注册并申请加入</span>"}
          </button>
        </fieldset>
      </form>
    `}function Ye(){const w=lt(Se),O=ca(C),W=O>=fa*.8?`${O} / ${fa}`:"",ae=`
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
          <div class="au-field ${i.ap_org?"bad":""}" data-f="ap_org">
            <div class="au-lab au-label-row">
              <span class="au-lab-group">
                <label for="au-ap_org">机构名称</label>
                ${Ga("au-ap-org-info","机构名称说明",["请填写营业执照等登记证书上的完整名称。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_org" name="ap_org" class="au-in" type="text" autocomplete="organization" value="${p(I)}" aria-invalid="${i.ap_org?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_org-err" aria-live="polite">${p(i.ap_org??"")}</p>
          </div>

          <div class="au-field ${i.ap_ind?"bad":""}" data-f="ap_ind">
            <div class="au-lab"><label for="au-ap_ind">所属行业</label></div>
            <div class="au-select-wrap">
              <select id="au-ap_ind" name="ap_ind" class="au-select ${N?"":"is-placeholder"}" aria-invalid="${i.ap_ind?"true":"false"}">
                <option value="" ${N?"":"selected"}>请选择</option>
                ${Mt.map(Ie=>`<option value="${p(Ie)}" ${N===Ie?"selected":""}>${p(Ie)}</option>`).join("")}
              </select>
              ${Za}
            </div>
            <p class="au-err" id="au-ap_ind-err" aria-live="polite">${p(i.ap_ind??"")}</p>
          </div>

          <div class="au-field ${i.ap_region?"bad":""}" data-f="ap_region">
            <div class="au-lab"><label for="au-ap_prov">所在地区</label></div>
            <div class="au-row-eq">
              <div class="au-select-wrap">
                <select id="au-ap_prov" name="ap_prov" class="au-select ${Se?"":"is-placeholder"}" aria-label="省份" aria-invalid="${i.ap_region?"true":"false"}">
                  <option value="" ${Se?"":"selected"}>省份</option>
                  ${Rt.map(([Ie])=>`<option value="${p(Ie)}" ${Se===Ie?"selected":""}>${p(Ie)}</option>`).join("")}
                </select>
                ${Za}
              </div>
              <div class="au-select-wrap">
                <select id="au-ap_city" name="ap_city" class="au-select ${A?"":"is-placeholder"}" aria-label="城市" ${Se?"":"disabled"} aria-invalid="${i.ap_region?"true":"false"}">
                  <option value="" ${A?"":"selected"}>城市</option>
                  ${w.map(Ie=>`<option value="${p(Ie)}" ${A===Ie?"selected":""}>${p(Ie)}</option>`).join("")}
                </select>
                ${Za}
              </div>
            </div>
            <p class="au-err" id="au-ap_region-err" aria-live="polite">${p(i.ap_region??"")}</p>
          </div>

          <div class="au-field ${i.ap_name?"bad":""}" data-f="ap_name">
            <div class="au-lab"><label for="au-ap_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-ap_name" name="ap_name" class="au-in" type="text" autocomplete="name" value="${p(m)}" aria-invalid="${i.ap_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_name-err" aria-live="polite">${p(i.ap_name??"")}</p>
          </div>

          <div class="au-field ${i.ap_dept?"bad":""}" data-f="ap_dept">
            <div class="au-lab"><label for="au-ap_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-ap_dept" name="ap_dept" class="au-in" type="text" autocomplete="organization-title" value="${p(h)}" aria-invalid="${i.ap_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_dept-err" aria-live="polite">${p(i.ap_dept??"")}</p>
          </div>

          <div class="au-field ${i.ap_email?"bad":""}" data-f="ap_email">
            <div class="au-lab"><label for="au-ap_email">电子邮箱</label></div>
            <div class="au-ctl">
              <input id="au-ap_email" name="ap_email" class="au-in" type="email" inputmode="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" value="${p(f)}" aria-invalid="${i.ap_email?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_email-err" aria-live="polite">${p(i.ap_email??"")}</p>
          </div>

          <div class="au-field ${i.ap_phone?"bad":""}" data-f="ap_phone">
            <div class="au-lab"><label for="au-ap_phone">手机号码</label></div>
            <div class="au-ctl">
              <input id="au-ap_phone" name="ap_phone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${p(c)}" aria-invalid="${i.ap_phone?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="ap-send-code" ${we>0?"disabled":""}>
                ${we>0?`${we} 秒后重发`:Ee?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-ap_phone-err" aria-live="polite">${p(i.ap_phone??"")}</p>
            <p class="au-hint" id="au-ap_phone-hint" role="status" aria-live="polite">${Ee?`验证码已发送至 ${p(Ee)}`:""}</p>
          </div>

          <div class="au-field ${i.ap_sms?"bad":""}" data-f="ap_sms">
            <div class="au-lab">
              <label for="au-ap_sms">验证码</label>
              ${ae}
            </div>
            <div class="au-ctl">
              <input id="au-ap_sms" name="ap_sms" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${p(k)}" aria-invalid="${i.ap_sms?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_sms-err" aria-live="polite">${p(i.ap_sms??"")}</p>
          </div>

          <div class="au-field ${i.ap_overview?"bad":""}" data-f="ap_overview">
            <div class="au-lab"><label for="au-ap_overview">项目概况<span class="fld-opt">选填</span></label></div>
            <div class="ws-textarea-shell au-note-shell">
              <textarea id="au-ap_overview" name="ap_overview" class="au-in au-ta au-ta-std" rows="3" aria-invalid="${i.ap_overview?"true":"false"}">${p(C)}</textarea>
              <button type="button" class="ws-resize" data-space-resize="au-ap_overview" aria-label="调整项目概况输入框高度；按上下方向键调整"></button>
            </div>
            <p class="au-err" id="au-ap_overview-err" aria-live="polite">${p(i.ap_overview??"")}</p>
            <p class="au-hint au-char-count" id="au-ap_overview-count" ${W?"":"hidden"}>${p(W)}</p>
          </div>

          ${wa("au-ap_consent","ap_consent",ie,"ap_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${g?"":"hidden"}>
            ${ka}
            <span data-role="ferr-text">${p(g)}</span>
          </div>

          <button type="submit" class="au-primary au-compact-primary" ${D?"disabled":""}>
            ${D?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>提交开通申请</span>"}
          </button>
        </fieldset>
      </form>
    `}async function De(){const w=Wa(pe);if(w){i.jn_account=w,U("jn_account"),a.querySelector("#au-jn_account")?.focus({preventScroll:!0});return}delete i.jn_account,U("jn_account");const O=a.querySelector('[data-act="jn-send-code"]');O&&(O.disabled=!0,O.textContent="发送中…");try{const W=await e.sendVerificationCode({target:pa(pe),purpose:"register_join",consentAcceptedAt:new Date().toISOString()});if(d)return;ee=W.maskedTarget||Ra(pe);const ae=a.querySelector("#au-jn_account-hint");ae&&(ae.textContent=`验证码已发送至 ${ee}`);const Ie=a.querySelector('[data-role="jn-novcode-wrap"]');Ie&&(Ie.hidden=!1),Ne(W.cooldownSeconds||60),O&&(O.disabled=!0,O.textContent=`${xe} 秒后重发`),a.querySelector("#au-jn_vcode")?.focus({preventScroll:!0})}catch(W){if(d)return;O&&(O.disabled=!1,O.textContent=ee?"重新获取":"获取验证码"),g=W instanceof Error?W.message:"暂时无法发送验证码，请稍后再试。",H()}}async function sa(){const w=Aa(c);if(w){i.ap_phone=w,U("ap_phone"),a.querySelector("#au-ap_phone")?.focus({preventScroll:!0});return}delete i.ap_phone,U("ap_phone");const O=a.querySelector('[data-act="ap-send-code"]');O&&(O.disabled=!0,O.textContent="发送中…");try{const W=await e.sendVerificationCode({target:pa(c),purpose:"org_apply",consentAcceptedAt:new Date().toISOString()});if(d)return;Ee=W.maskedTarget||Ra(c);const ae=a.querySelector("#au-ap_phone-hint");ae&&(ae.textContent=`验证码已发送至 ${Ee}`);const Ie=a.querySelector('[data-role="ap-novcode-wrap"]');Ie&&(Ie.hidden=!1),aa(W.cooldownSeconds||60),O&&(O.disabled=!0,O.textContent=`${we} 秒后重发`),a.querySelector("#au-ap_sms")?.focus({preventScroll:!0})}catch(W){if(d)return;O&&(O.disabled=!1,O.textContent=Ee?"重新获取":"获取验证码"),g=W instanceof Error?W.message:"暂时无法发送验证码，请稍后再试。",H()}}function xa(w){Y.bind(w);const O=w.querySelector("#au-jn_code"),W=w.querySelector("#au-jn_name"),ae=w.querySelector("#au-jn_dept"),Ie=w.querySelector("#au-jn_account"),Ze=w.querySelector("#au-jn_vcode"),ze=w.querySelector("#au-jn_pwd"),Me=w.querySelector("#au-jn_consent");O?.addEventListener("input",()=>{ce=st(O.value),O.value=ce,(i.jn_code||g)&&(delete i.jn_code,g="",U("jn_code"),H()),Sa(ce)}),W?.addEventListener("input",()=>{se=W.value,(i.jn_name||g)&&(delete i.jn_name,g="",U("jn_name"),H())}),ae?.addEventListener("input",()=>{_e=ae.value,i.jn_dept&&(delete i.jn_dept,U("jn_dept"))}),Ie?.addEventListener("input",()=>{if(pe=Ie.value,ee){ee="";const He=w.querySelector("#au-jn_account-hint");He&&(He.textContent="");const Ue=w.querySelector('[data-role="jn-novcode-wrap"]');Ue&&(Ue.hidden=!0),Y.close(!1);const Qe=w.querySelector('[data-act="jn-send-code"]');Qe&&xe===0&&(Qe.textContent="获取验证码")}(i.jn_account||g)&&(delete i.jn_account,g="",U("jn_account"),H())}),Ze?.addEventListener("input",()=>{B=Ze.value.replace(/\D/g,"").slice(0,6),Ze.value=B,(i.jn_vcode||g)&&(delete i.jn_vcode,g="",U("jn_vcode"),H())}),ze?.addEventListener("input",()=>{G=ze.value,(i.jn_pwd||g)&&(delete i.jn_pwd,g="",U("jn_pwd"),H())}),Me?.addEventListener("change",()=>{Z=Me.checked,Z&&i.jn_consent&&(delete i.jn_consent,U("jn_consent"))}),w.querySelector('[data-act="jn-toggle-eye"]')?.addEventListener("click",He=>{ne=!ne;const Ue=He.currentTarget;if(ze){const Qe=ze.selectionStart,na=ze.selectionEnd;ze.type=ne?"text":"password",ze.focus({preventScroll:!0}),Qe!==null&&na!==null&&ze.setSelectionRange(Qe,na)}Ue.setAttribute("aria-label",ne?"隐藏密码":"显示密码"),Ue.innerHTML=ne?$a:ya}),w.querySelector('[data-act="jn-send-code"]')?.addEventListener("click",He=>{const Ue=Wa(pe);if(Ue){i.jn_account=Ue,U("jn_account"),Ie?.focus({preventScroll:!0});return}if(!Z){R=()=>{Z=!0,Me&&(Me.checked=!0),delete i.jn_consent,U("jn_consent"),De()},ta("consent_ask",He.currentTarget);return}De()}),w.querySelector('form[data-reg-form="join"]')?.addEventListener("submit",async He=>{if(He.preventDefault(),D)return;i={},g="";const Ue=ce.replace(/\D/g,"");if(Ue.length!==9)i.jn_code="请输入 9 位机构邀请码";else if(!re&&!V){const Ve=await e.resolveInviteCode(Ue);Ve.valid&&Ve.organizationName?(re=Ve.organizationName,We()):i.jn_code=Ve.message??"邀请码不正确或已失效，请向机构管理员确认。"}se.trim()?ca(se.trim())>ha&&(i.jn_name=`姓名不超过 ${ha} 个字`):i.jn_name="请输入姓名",ca(_e.trim())>Ma&&(i.jn_dept=`部门 / 职务不超过 ${Ma} 个字`);const Qe=Wa(pe);Qe&&(i.jn_account=Qe),/^\d{6}$/.test(B.trim())||(i.jn_vcode="请输入 6 位验证码");const na=nt(G);na&&(i.jn_pwd=na),Z||(i.jn_consent="请阅读并同意隐私政策和使用条款");for(const Ve of["jn_code","jn_name","jn_dept","jn_account","jn_vcode","jn_pwd","jn_consent"])U(Ve);if(H(),Object.keys(i).length>0){const Ve=Object.keys(i)[0];w.querySelector(`#au-${Ve}`)?.focus({preventScroll:!0});return}D=!0,Be("正在提交…","注册并申请加入");try{T=await e.registerAndJoin({inviteCode:Ue,displayName:se.trim(),departmentTitle:_e.trim()||void 0,account:pa(pe),verificationCode:B.trim(),password:G,consentAcceptedAt:new Date().toISOString()}),D=!1,la()}catch(Ve){D=!1,g=Ve instanceof Error?Ve.message:"暂时无法提交申请，请稍后再试。",Be("正在提交…","注册并申请加入"),H()}})}function ma(w){Y.bind(w),Pt(w);const O=w.querySelector("#au-ap_org"),W=w.querySelector("#au-ap_ind"),ae=w.querySelector("#au-ap_prov"),Ie=w.querySelector("#au-ap_city"),Ze=w.querySelector("#au-ap_name"),ze=w.querySelector("#au-ap_dept"),Me=w.querySelector("#au-ap_email"),He=w.querySelector("#au-ap_phone"),Ue=w.querySelector("#au-ap_sms"),Qe=w.querySelector("#au-ap_overview"),na=w.querySelector("#au-ap_overview-count"),Ve=w.querySelector("#au-ap_consent");O?.addEventListener("input",()=>{I=O.value,(i.ap_org||g)&&(delete i.ap_org,g="",U("ap_org"),H())}),W?.addEventListener("change",()=>{N=W.value,W.classList.toggle("is-placeholder",!N),i.ap_ind&&(delete i.ap_ind,U("ap_ind"))}),ae?.addEventListener("change",()=>{Se=ae.value,ae.classList.toggle("is-placeholder",!Se);const Ge=lt(Se);A=Ge.length===1?Ge[0]:"",Ie&&(Ie.disabled=!Se,Ie.innerHTML=`<option value="" ${A?"":"selected"}>城市</option>`+Ge.map(Je=>`<option value="${p(Je)}" ${A===Je?"selected":""}>${p(Je)}</option>`).join(""),Ie.classList.toggle("is-placeholder",!A)),Se&&A&&i.ap_region&&(delete i.ap_region,U("ap_region"))}),Ie?.addEventListener("change",()=>{A=Ie.value,Ie.classList.toggle("is-placeholder",!A),Se&&A&&i.ap_region&&(delete i.ap_region,U("ap_region"))}),Ze?.addEventListener("input",()=>{m=Ze.value,(i.ap_name||g)&&(delete i.ap_name,g="",U("ap_name"),H())}),ze?.addEventListener("input",()=>{h=ze.value,i.ap_dept&&(delete i.ap_dept,U("ap_dept"))}),Me?.addEventListener("input",()=>{f=Me.value,(i.ap_email||g)&&(delete i.ap_email,g="",U("ap_email"),H())}),He?.addEventListener("input",()=>{if(c=He.value,Ee){Ee="";const Ge=w.querySelector("#au-ap_phone-hint");Ge&&(Ge.textContent="");const Je=w.querySelector('[data-role="ap-novcode-wrap"]');Je&&(Je.hidden=!0),Y.close(!1);const _=w.querySelector('[data-act="ap-send-code"]');_&&we===0&&(_.textContent="获取验证码")}(i.ap_phone||g)&&(delete i.ap_phone,g="",U("ap_phone"),H())}),Ue?.addEventListener("input",()=>{k=Ue.value.replace(/\D/g,"").slice(0,6),Ue.value=k,(i.ap_sms||g)&&(delete i.ap_sms,g="",U("ap_sms"),H())}),Qe?.addEventListener("input",()=>{C=Qe.value;const Ge=ca(C);na&&(Ge>=fa*.8?(na.textContent=`${Ge} / ${fa}`,na.hidden=!1):na.hidden=!0),i.ap_overview&&Ge<=fa&&(delete i.ap_overview,U("ap_overview"))}),Ve?.addEventListener("change",()=>{ie=Ve.checked,ie&&i.ap_consent&&(delete i.ap_consent,U("ap_consent"))}),w.querySelector('[data-act="ap-send-code"]')?.addEventListener("click",Ge=>{const Je=Aa(c);if(Je){i.ap_phone=Je,U("ap_phone"),He?.focus({preventScroll:!0});return}if(!ie){R=()=>{ie=!0,Ve&&(Ve.checked=!0),delete i.ap_consent,U("ap_consent"),sa()},ta("consent_ask",Ge.currentTarget);return}sa()}),w.querySelector('form[data-reg-form="apply"]')?.addEventListener("submit",async Ge=>{if(Ge.preventDefault(),D)return;i={},g="",I.trim()?ca(I.trim())>xt&&(i.ap_org=`机构名称不超过 ${xt} 个字`):i.ap_org="请输入机构名称",N||(i.ap_ind="请选择所属行业"),(!Se||!A)&&(i.ap_region="请选择所在地区"),m.trim()?ca(m.trim())>ha&&(i.ap_name=`姓名不超过 ${ha} 个字`):i.ap_name="请输入姓名",ca(h.trim())>Ma&&(i.ap_dept=`部门 / 职务不超过 ${Ma} 个字`),Nt(f)||(i.ap_email="请输入有效的电子邮箱");const Je=Aa(c);Je&&(i.ap_phone=Je),/^\d{6}$/.test(k.trim())||(i.ap_sms="请输入 6 位短信验证码"),ca(C)>fa&&(i.ap_overview=`项目概况不超过 ${fa} 个字`),ie||(i.ap_consent="请阅读并同意隐私政策和使用条款");for(const _ of["ap_org","ap_ind","ap_region","ap_name","ap_dept","ap_email","ap_phone","ap_sms","ap_overview","ap_consent"])U(_);if(H(),Object.keys(i).length>0){const _=Object.keys(i)[0],Ha=_==="ap_region"?Se?"au-ap_city":"au-ap_prov":`au-${_}`;w.querySelector(`#${Ha}`)?.focus({preventScroll:!0});return}D=!0,Be("正在提交…","提交开通申请");try{P=await e.submitOrgApplication({organizationName:I.trim(),industry:N,province:Se,city:A,contactName:m.trim(),departmentTitle:h.trim()||void 0,email:pa(f),phone:pa(c),smsCode:k.trim(),projectOverview:C.trim()||void 0,consentAcceptedAt:new Date().toISOString()}),D=!1,la()}catch(_){D=!1,g=_ instanceof Error?_.message:"暂时无法提交开通申请，请稍后再试。",Be("正在提交…","提交开通申请"),H()}})}function Te(){Y.close(!1);const w=a.querySelector('[data-role="reg-body-host"]');w&&(n==="join"?(w.innerHTML=Pe(),xa(w)):(w.innerHTML=Ye(),ma(w)))}function ia(w,O=!1){n===w||D||(n=w,i={},g="",a.querySelectorAll('[data-act="switch-reg-tab"]').forEach(W=>{const ae=W.dataset.tab===w;W.setAttribute("aria-selected",String(ae)),W.tabIndex=ae?0:-1,ae&&O&&W.focus({preventScroll:!0})}),Fe(!0),Te())}function Ta(){if(P)return{centerCls:"au-center--status",title:"开通申请已提交 · PACOM Station",bodyHtml:`
          <div class="au-status-badge" aria-hidden="true">${ct}</div>
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
        `};const w=T;return{centerCls:"au-center--status",title:"加入申请已提交 · PACOM Station",bodyHtml:`
        <div class="au-status-badge" aria-hidden="true">${ct}</div>
        <h1 class="au-h1 au-h1--sub">加入申请已提交</h1>
        <p class="au-lead"><b>${p(w.organizationName)}</b> 的机构管理员批准后，你会收到通知，届时即可登录访问。</p>
        <div class="au-summary-card">
          <div class="au-summary-row"><span class="au-summary-k">申请单号</span><span class="au-summary-v is-mono">${p(w.requestId)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${p(w.organizationName)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">登录账号</span><span class="au-summary-v">${p(w.maskedAccount)}</span></div>
        </div>
        <div class="au-ferr" id="au-reg-ferr" role="alert" ${g?"":"hidden"}>
          ${ka}
          <span data-role="ferr-text">${p(g)}</span>
        </div>
        <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
        <div class="au-login-actions">
          <div class="au-login-divider" aria-hidden="true"></div>
          <p class="au-noacct">
            ${e.withdrawJoinApplication?`<button type="button" class="au-inline" data-act="withdraw-join" ${z?"disabled":""}>${z?"正在撤回…":"撤回申请"}</button><span class="au-dot-sep">·</span>`:""}
            需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button>
          </p>
        </div>
      `}}function Ua(){if(ge)return{centerCls:"au-center--status",title:"验证邀请 · PACOM Station",bodyHtml:`
          <h1 class="au-h1 au-h1--sub">正在核验邀请链接…</h1>
          <p class="au-lead">请稍候，正在确认所属机构与授权信息。</p>
        `};if(oe||!le||le.status!=="pending"){const ze=oe||(le?.inviterName&&le?.organizationName?`${le.inviterName}邀请你加入${le.organizationName}，该邀请已过期或已撤销。`:"邀请链接无效、已过期或已撤销，请联系邀请人或机构管理员重新发送。");return{centerCls:"au-center--status",title:"邀请已失效 · PACOM Station",bodyHtml:`
          <h1 class="au-h1 au-h1--sub">邀请已失效</h1>
          <p class="au-lead">${p(ze)}</p>
          <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct">需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button></p>
          </div>
        `}}const w=le,O=w.kind==="owner",W=O?`开通${w.organizationName}`:`加入${w.organizationName}`,ae=O?`机构审核已通过，请设置登录密码完成开通 · ${p(w.expiresAt)} 前有效`:`<b>${p(w.inviterName||"机构管理员")}</b>邀请你以<b>${p(w.roleLabel||"成员")}</b>身份加入 · ${p(w.expiresAt)} 前有效`,Ie=w.targetChannel==="phone"?"受邀手机号码":"受邀电子邮箱",Ze=O?"激活并进入工作区":"注册并加入";return{centerCls:"au-center--invite",title:`${W} · PACOM Station`,bodyHtml:`
        <h1 class="au-h1 au-h1--sub">${p(W)}</h1>
        <p class="au-lead">${ae}</p>
        <form class="au-compact-form au-reg-form" data-reg-form="invite" novalidate>
          <fieldset ${D?"disabled":""}>
            <div class="au-field">
              <div class="au-lab"><span class="au-lab-t">${Ie}</span></div>
              <div class="au-locked-card">
                <span class="au-locked-val">${p(w.targetValue)}</span>
                <span class="au-locked-tag">${zt}<span>已核验锁定</span></span>
              </div>
            </div>

            <div class="au-field ${i.iv_name?"bad":""}" data-f="iv_name">
              <div class="au-lab"><label for="au-iv_name">姓名</label></div>
              <div class="au-ctl">
                <input id="au-iv_name" name="iv_name" class="au-in" type="text" autocomplete="name" value="${p(te)}" aria-invalid="${i.iv_name?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_name-err" aria-live="polite">${p(i.iv_name??"")}</p>
            </div>

            <div class="au-field ${i.iv_pwd?"bad":""}" data-f="iv_pwd">
              <div class="au-lab au-label-row">
                <span class="au-lab-group">
                  <label for="au-iv_pwd">设置密码</label>
                  ${Ga("au-iv-pwd-info","设置密码说明",it)}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_pwd" name="iv_pwd" class="au-in has-suffix" type="${de?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${p(J)}" aria-invalid="${i.iv_pwd?"true":"false"}" />
                <button type="button" class="au-suffix au-eye" data-act="iv-toggle-eye" aria-controls="au-iv_pwd" aria-label="${de?"隐藏密码":"显示密码"}">
                  ${de?$a:ya}
                </button>
              </div>
              <p class="au-err" id="au-iv_pwd-err" aria-live="polite">${p(i.iv_pwd??"")}</p>
            </div>

            ${wa("au-iv_consent","iv_consent",ue,"iv_consent")}

            <div class="au-ferr" id="au-reg-ferr" role="alert" ${g?"":"hidden"}>
              ${ka}
              <span data-role="ferr-text">${p(g)}</span>
            </div>

            <button type="submit" class="au-primary au-compact-primary" ${D?"disabled":""}>
              ${D?'<span class="au-spinner" aria-hidden="true"></span><span>正在激活…</span>':`<span>${Ze}</span>`}
            </button>
          </fieldset>
        </form>
        <div class="au-login-actions">
          <div class="au-login-divider" aria-hidden="true"></div>
          <p class="au-noacct">已有账户？<button type="button" class="au-inline" data-act="back-login">登录</button></p>
        </div>
      `}}function Va(){Y.bind(a);const w=a.querySelector("#au-iv_name"),O=a.querySelector("#au-iv_pwd"),W=a.querySelector("#au-iv_consent"),Ie=le?.kind==="owner"?"激活并进入工作区":"注册并加入";w?.addEventListener("input",()=>{te=w.value,(i.iv_name||g)&&(delete i.iv_name,g="",U("iv_name"),H())}),O?.addEventListener("input",()=>{J=O.value,(i.iv_pwd||g)&&(delete i.iv_pwd,g="",U("iv_pwd"),H())}),W?.addEventListener("change",()=>{ue=W.checked,ue&&i.iv_consent&&(delete i.iv_consent,U("iv_consent"))}),a.querySelector('[data-act="iv-toggle-eye"]')?.addEventListener("click",Ze=>{de=!de;const ze=Ze.currentTarget;if(O){const Me=O.selectionStart,He=O.selectionEnd;O.type=de?"text":"password",O.focus({preventScroll:!0}),Me!==null&&He!==null&&O.setSelectionRange(Me,He)}ze.setAttribute("aria-label",de?"隐藏密码":"显示密码"),ze.innerHTML=de?$a:ya}),a.querySelector('form[data-reg-form="invite"]')?.addEventListener("submit",async Ze=>{if(Ze.preventDefault(),D||!le)return;i={},g="",te.trim()?ca(te.trim())>ha&&(i.iv_name=`姓名不超过 ${ha} 个字`):i.iv_name="请输入姓名";const ze=nt(J);ze&&(i.iv_pwd=ze),ue||(i.iv_consent="请阅读并同意隐私政策和使用条款");for(const Me of["iv_name","iv_pwd","iv_consent"])U(Me);if(H(),Object.keys(i).length>0){const Me=Object.keys(i)[0];a.querySelector(`#au-${Me}`)?.focus({preventScroll:!0});return}D=!0,Be("正在激活…",Ie);try{const Me=await e.acceptInvitation({token:le.token,displayName:te.trim(),password:J,consentAcceptedAt:new Date().toISOString()});Le(),s.onAuthenticated(Me)}catch(Me){D=!1,g=Me instanceof Error?Me.message:"暂时无法完成激活，请稍后再试。",Be("正在激活…",Ie),H()}})}function la(){Y.close(!1);let w="au-center--register",O="";if(T||P){const W=Ta();w=W.centerCls,document.title=W.title,O=W.bodyHtml}else if(Q){const W=Ua();w=W.centerCls,document.title=W.title,O=W.bodyHtml}else document.title="注册 · PACOM Station",O=`
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
          <div class="au-center ${w}">
            <main class="au-group">
              <div class="au-logo">${_t}</div>
              ${O}
            </main>
          </div>
          ${jt()}
        </section>
        <aside class="au-art" aria-hidden="true">
          <div class="au-art-frame">
            <img src="./media/auth-hero.jpg" alt="" />
          </div>
        </aside>
      </div>
      <div data-role="modal-host"></div>
    `,a.querySelectorAll('[data-act="back-login"]').forEach(W=>{W.addEventListener("click",()=>{Le(),s.onBackToLogin()})}),a.querySelectorAll('[data-act="open-contact"]').forEach(W=>{W.addEventListener("click",ae=>{x=!1,ta("contact",ae.currentTarget)})}),a.querySelector('[data-act="withdraw-join"]')?.addEventListener("click",async()=>{if(!(!T||!e.withdrawJoinApplication||z)){z=!0,g="",la();try{if(await e.withdrawJoinApplication(T.requestId),d)return;z=!1,T=null,la()}catch(W){if(d)return;z=!1,g=W instanceof Error?W.message:"暂时无法撤回申请，请稍后再试。",la()}}}),!T&&!P&&!Q?(a.querySelectorAll('[data-act="switch-reg-tab"]').forEach(W=>{W.addEventListener("click",()=>{const ae=W.dataset.tab;ae&&ia(ae,!1)}),W.addEventListener("keydown",ae=>{const Ie=da.indexOf(n);ae.key==="ArrowRight"?(ae.preventDefault(),ia(da[(Ie+1)%da.length],!0)):ae.key==="ArrowLeft"?(ae.preventDefault(),ia(da[(Ie-1+da.length)%da.length],!0)):ae.key==="Home"?(ae.preventDefault(),ia(da[0],!0)):ae.key==="End"&&(ae.preventDefault(),ia(da[da.length-1],!0))})}),Te(),Fe(!1),document.fonts?.ready.then(()=>{d||Fe(!1)})):Q&&!ge&&le?.status==="pending"&&Va()}la(),Q?(async()=>{try{const w=await e.getInvitationPreview(Q);if(d)return;le=w,te=w.prefillName??"",ge=!1,la()}catch(w){if(d)return;ge=!1,oe=w instanceof Error?w.message:"暂时无法读取邀请信息，请稍后再试。",la()}})():ce.replace(/\D/g,"").length===9&&Sa(ce)}function Ia(a){const e=a.replace(/^#\/?/,"").split("?")[0]??"";return e==="login"||e==="register"||e==="join"||e==="apply"||e==="invite"}function It(a){const e=a.replace(/^#\/?/,""),[s="",d=""]=e.split("?"),n=new URLSearchParams(d);if(s==="invite")return{kind:"invite",inviteToken:n.get("token")??"member-demo"};if(s==="register"||s==="join"||s==="apply"){const u=n.get("tab");return{kind:"register",initialMode:s==="apply"||u==="apply"?"apply":"join",prefillCode:n.get("code")??void 0}}return{kind:"login"}}const gs=["org_admin","project_admin","operator","space_user"];async function vs(a){const e=new Ut;let s=await e.getSession(),d="login",n=!1;document.querySelector("[data-demo-fab-root]")?.remove();const u=document.createElement("div");u.className="pacom-demo-fab-wrap",u.dataset.demoFabRoot="1",document.body.appendChild(u);function x(){const T=d==="login"?"登录页":d==="register"?"注册页":d==="invite"?"邀请激活":s?ea[s.role]:"未登录";u.innerHTML=`
      ${n?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">独立演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">演示邀请码 482 916 305 · 任意 6 位验证码 · 或点下方角色直进</span>
            <div class="pacom-demo-fab-roles">
              ${gs.map(P=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${d==="app"&&s?.role===P}" data-demo-pick="${P}">
                    <span>${ea[P]}</span>
                    ${d==="app"&&s?.role===P?be("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <button type="button" class="pacom-demo-role-btn" aria-pressed="${d==="login"}" data-demo-auth="#login">
                <span>查看登录页</span>
                ${d==="login"?be("check",14):"<span>→</span>"}
              </button>
              <button type="button" class="pacom-demo-role-btn" aria-pressed="${d==="register"}" data-demo-auth="#register">
                <span>查看注册与开通页</span>
                ${d==="register"?be("check",14):"<span>→</span>"}
              </button>
              <button type="button" class="pacom-demo-role-btn" aria-pressed="${d==="invite"}" data-demo-auth="#invite?token=member-demo">
                <span>查看定向邀请激活页</span>
                ${d==="invite"?be("check",14):"<span>→</span>"}
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
        <span class="pacom-demo-fab-role">${T}</span>
        ${be(n?"chevron-down":"chevrons-up-down",12)}
      </button>
    `,u.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",P=>{P.stopPropagation(),n=!n,x()}),u.querySelectorAll("[data-demo-pick]").forEach(P=>{P.addEventListener("click",async()=>{const z=P.dataset.demoPick;z&&(n=!1,s=await e.switchDemoRole(z),await R(s))})}),u.querySelectorAll("[data-demo-auth]").forEach(P=>{P.addEventListener("click",async()=>{const z=P.dataset.demoAuth??"#login";n=!1,await F(z,!0)})})}document.addEventListener("click",T=>{n&&(T.target?.closest("[data-demo-fab-root]")||(n=!1,x()))}),document.addEventListener("keydown",T=>{T.key==="Escape"&&n&&(n=!1,x())});async function F(T,P){rs(a),St(a),Et(a),P&&s&&await e.logout(),s=null;const z=It(T);if(d=z.kind,window.location.hash!==T&&(window.location.hash=T),x(),z.kind==="register"||z.kind==="invite"){ms(a,e,{initialMode:z.initialMode,prefillCode:z.prefillCode,inviteToken:z.inviteToken,onBackToLogin:()=>{F("#login",!1)},onAuthenticated:Q=>{R(Q)}});return}us(a,e,Q=>{R(Q)},{onOpenRegister:()=>{F("#register",!1)}})}async function R(T){St(a),Et(a),s=T,d="app",x(),(!window.location.hash||Ia(window.location.hash))&&(window.location.hash="#home"),await ds(a,e,T,()=>{F("#login",!1)})}if(window.addEventListener("hashchange",()=>{if(Ia(window.location.hash)){const T=It(window.location.hash);d!==T.kind&&F(window.location.hash,d==="app")}}),!s||Ia(window.location.hash)){const T=Ia(window.location.hash)?window.location.hash:"#login";await F(T,!!(s&&Ia(window.location.hash)));return}await R(s)}async function fs(){const a=document.getElementById("app");if(a)try{await vs(a)}catch(e){a.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(e)}</div></div>`}}fs();
