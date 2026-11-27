import{E as I,r as we,a as Na,e as d,b as Pa,g as Ba,s as va,m as Rt,c as Nt,d as Ct,P as Tt,I as ot,A as ba,f as qt,n as Qe,h as ya,C as Ot,i as Dt,j as $a,k as wa,v as la,l as Ft,o as zt,p as it,L as lt,q as Ca,t as Ta,u as sa,w as ct,B as rt,D as qa,x as dt,y as Ka,z as pt,F as ut,O as Pt,G as Bt,S as mt}from"./auth-shared-TjqfXyCd.js";import{R as Ue,g as ha,a as vt}from"./contracts-Z0w12vLk.js";function Ut(){const a="2026-11-25T09:00:00Z",e=[];for(let p=1;p<=22;p+=1){const E=p===7?I.floorId:p===8?I.lockedFloor8Id:p===6?I.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${p}`,M=String(p).padStart(2,"0");e.push({id:E,buildingId:I.buildingId,kind:"above",level:p,name:`${p}F`,areaSqm:p===7?1383.1:p===1?2680:p<=4?1920:1480,plan:{floorId:E,imageUrl:`./media/floors/e/${M}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}})}const t="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";e.push({id:t,buildingId:I.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:t,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}});const r=[];for(let p=1;p<=12;p+=1){const E=`structure-f-above-${p}`,M=String(p).padStart(2,"0");r.push({id:E,buildingId:I.buildingFId,kind:"above",level:p,name:`${p}F`,areaSqm:p===1?2450:p<=3?2100:1580,plan:{floorId:E,imageUrl:`./media/floors/f/${M}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}})}const o="structure-f-roof-1";return r.push({id:o,buildingId:I.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:o,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}}),{projects:[{id:I.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:a},imageUrl:"./media/gzlab.jpg"},{id:I.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:a},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:I.buildingId,projectId:I.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:I.buildingFId,projectId:I.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...e,...r],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:I.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:I.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:I.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:I.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:t,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:o,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Mt=Ut(),gt=Mt.floors.map(a=>a.id),Ge={org_admin:{userId:"demo-org-admin",displayName:"林致远",email:"lin.zhiyuan@pacom.cn",phone:"13800138001",role:"org_admin",roleLabel:Ue.org_admin,authMode:"demo",scope:{allowedProjectIds:[I.projectId,I.project1Id],allowedBuildingIds:[I.buildingId,I.buildingFId],allowedFloorIds:[...gt],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",email:"chen.mingxuan@pacom.cn",phone:"13800138002",role:"project_admin",roleLabel:Ue.project_admin,authMode:"demo",scope:{allowedProjectIds:[I.projectId],allowedBuildingIds:[I.buildingId,I.buildingFId],allowedFloorIds:[...gt],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",email:"zhou.ning@pacom.cn",phone:"13800138003",role:"operator",roleLabel:Ue.operator,authMode:"demo",scope:{allowedProjectIds:[I.projectId],allowedBuildingIds:[I.buildingId],allowedFloorIds:[I.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",email:"shen.jia@pacom.cn",phone:"13800138004",role:"space_user",roleLabel:Ue.space_user,authMode:"demo",scope:{allowedProjectIds:[I.projectId],allowedBuildingIds:[I.buildingId],allowedFloorIds:[I.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},ga="pacom.web.demo.role",ft="pacom.web.demo.spatial.v5",bt="pacom.web.demo.orgs.v1",ht="pacom.web.demo.activeOrg.v1",Je="org-gzlab";class Vt{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;inviteMissTimestamps=[];inviteLockedUntil=0;sentCodeTargets=new Set;joinReceipts=new Map;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;constructor(){this.orgs=this.loadOrgs();const e=typeof localStorage<"u"?localStorage.getItem(ht):null,t=this.orgs.find(p=>p.id===e)??this.orgs[0];this.activeOrgId=t.id,this.spatial=t.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const r=typeof sessionStorage<"u"?sessionStorage.getItem(ga):null;r&&Ge[r]&&(this.activeSession=structuredClone(Ge[r]),this.applyOverridesToSession());const o=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:I.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:o,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:I.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:I.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:I.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:o,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:o,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:o,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:I.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:o,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:I.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:o,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:o,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:o,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:o},{id:"conn-e7f-dali",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:o},{id:"conn-e7f-modbus",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:I.projectId,floorId:I.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:I.projectId,floorId:I.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:I.projectId,floorId:I.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:I.projectId,floorId:I.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:I.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:I.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:I.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:o,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:I.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:I.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:I.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:I.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(Ge).map((p,E)=>({userId:p.userId,displayName:p.displayName,email:`${p.role.replaceAll("_",".")}@gzlab.ac.cn`,role:p.role,roleLabel:p.roleLabel,scopeSummary:p.scope.allowedZoneIds?.length?`E栋 7F（${p.scope.allowedZoneIds.length} 个授权功能区）`:`${p.scope.allowedProjectIds.length} 项目 / ${p.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:E===0?o:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const e=Date.now();for(const t of this.overrides)t.status==="active"&&new Date(t.expiresAt).getTime()<=e&&(t.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const e=Ge[this.activeSession.role].scope,t=this.overrides.filter(r=>r.targetUserId===this.activeSession.userId&&r.status==="active");this.activeSession.scope.activeOverrides=structuredClone(t),this.activeSession.scope.canEditDeployment=e.canEditDeployment||t.some(r=>r.module==="deployment"),this.activeSession.scope.canEditSettings=e.canEditSettings||t.some(r=>r.module==="settings")}record(e,t,r,o,p){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:t,endpoint:r,request:p,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(e,t,r,o){const p=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:p?.displayName??"anonymous",role:p?.role??"space_user",action:e,target:t,result:r,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const t=e.account.toLowerCase(),r=t.includes("org")||t.includes("admin")?"org_admin":t.includes("proj")?"project_admin":t.includes("space")||t.includes("member")?"space_user":"operator";return this.activeSession=structuredClone(Ge[r]),this.applyOverridesToSession(),sessionStorage.setItem(ga,r),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(ga),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}maskTarget(e){const t=e.trim();if(t.includes("@")){const[o,p]=t.split("@");return o&&p?`${o[0]}•••@${p}`:"••••"}const r=t.replace(/\D/g,"");return r.length===11?`${r.slice(0,3)} •••• ${r.slice(7)}`:r.length>=6?`${r.slice(0,3)} •••• ${r.slice(-4)}`:"••••"}async sendVerificationCode(e){const t=e.target.trim(),r=t.includes("@")?"email":"sms";this.sentCodeTargets.add(`${e.purpose}:${t.toLowerCase()}`);const o={maskedTarget:this.maskTarget(t),channel:r,cooldownSeconds:60};return this.record("REST","sendVerificationCode","POST /api/v1/auth/verification-codes",o,{purpose:e.purpose,channel:r}),o}async resolveInviteCode(e){const t=Date.now();if(this.inviteLockedUntil>t)return{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const r=e.replace(/\D/g,""),p={482916305:this.orgs[0]?.name??"广州实验室",618204917:"天环智慧园区"}[r];if(!p){if(this.inviteMissTimestamps=this.inviteMissTimestamps.filter(F=>t-F<36e5),this.inviteMissTimestamps.push(t),this.inviteMissTimestamps.length>=10)return this.inviteLockedUntil=t+36e5,this.inviteMissTimestamps=[],{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const M={valid:!1,message:"邀请码不正确或已失效，请向机构管理员确认。"};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",M,{code:r}),M}const E={valid:!0,organizationName:p};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",E,{code:r}),E}async registerAndJoin(e){const t=await this.resolveInviteCode(e.inviteCode);if(!t.valid||!t.organizationName)throw new Error(t.message??"邀请码不正确或已失效，请向机构管理员确认。");if(!/^\d{6}$/.test(e.verificationCode.trim()))throw new Error("验证码不正确或已过期");const r=`register_join:${e.account.trim().toLowerCase()}`;if(!this.sentCodeTargets.has(r))throw new Error("请先获取验证码");const o={requestId:`JR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:t.organizationName,maskedAccount:this.maskTarget(e.account),status:"pending_approval",submittedAt:new Date().toISOString()};return this.joinReceipts.set(o.requestId,o),this.record("REST","registerAndJoin","POST /api/v1/auth/register-join",o,{organizationName:t.organizationName,displayName:e.displayName}),o}async withdrawJoinApplication(e){this.joinReceipts.delete(e),this.record("REST","withdrawJoinApplication",`DELETE /api/v1/org/join-requests/${e}`,{ok:!0})}async submitOrgApplication(e){if(!/^\d{6}$/.test(e.smsCode.trim()))throw new Error("验证码不正确或已过期");const t=`org_apply:${e.phone.trim().toLowerCase()}`;if(!this.sentCodeTargets.has(t))throw new Error("请先获取短信验证码");const r=e.province===e.city?e.province:`${e.province} ${e.city}`,o={applicationId:`APP-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:e.organizationName.trim(),region:r,maskedEmail:this.maskTarget(e.email),status:"pending_review",submittedAt:new Date().toISOString()};return this.record("REST","submitOrgApplication","POST /api/v1/org/applications",o,{organizationName:o.organizationName,region:r}),o}async getInvitationPreview(e){const t=e.trim(),r=this.orgs[0]?.name??"广州国家实验室",o=new Date(Date.now()+7*864e5).toISOString().slice(0,10);return t==="expired"?{token:t,kind:"member",organizationName:r,inviterName:"林致远",role:"operator",roleLabel:Ue.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:"2026-11-20",status:"expired"}:t.startsWith("owner")?{token:t,kind:"owner",organizationName:"广州天环智能科技有限公司",role:"org_admin",roleLabel:Ue.org_admin,targetChannel:"email",targetValue:"chen@company.com",prefillName:"陈志远",accountExists:!1,requiredSecondaryChannel:null,verifiedSecondaryMasked:"139 •••• 9000",expiresAt:o,status:"pending"}:t==="admin-email"?{token:t,kind:"member",organizationName:r,inviterName:"林致远",role:"org_admin",roleLabel:Ue.org_admin,targetChannel:"email",targetValue:"zhao.admin@pacom.cn",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:ha("member","org_admin","email"),expiresAt:o,status:"pending"}:t==="admin-phone"?{token:t,kind:"member",organizationName:r,inviterName:"林致远",role:"org_admin",roleLabel:Ue.org_admin,targetChannel:"phone",targetValue:"13900139088",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:ha("member","org_admin","phone"),expiresAt:o,status:"pending"}:t==="project-admin-email"?{token:t,kind:"member",organizationName:r,inviterName:"林致远",role:"project_admin",roleLabel:Ue.project_admin,targetChannel:"email",targetValue:"wu.proj@pacom.cn",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:ha("member","project_admin","email"),expiresAt:o,status:"pending"}:t==="project-admin-phone"?{token:t,kind:"member",organizationName:r,inviterName:"林致远",role:"project_admin",roleLabel:Ue.project_admin,targetChannel:"phone",targetValue:"13700137066",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:ha("member","project_admin","phone"),expiresAt:o,status:"pending"}:t==="existing-demo"?{token:t,kind:"member",organizationName:"天环智慧园区",inviterName:"林致远",role:"operator",roleLabel:Ue.operator,targetChannel:"email",targetValue:"zhou.ning@pacom.cn",prefillName:"周宁",accountExists:!0,requiredSecondaryChannel:null,expiresAt:o,status:"pending"}:{token:t||"member-demo",kind:"member",organizationName:r,inviterName:"林致远",role:"operator",roleLabel:Ue.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",prefillName:"林明远",accountExists:!1,requiredSecondaryChannel:null,expiresAt:o,status:"pending"}}normalizeContactKey(e){return e.trim().toLowerCase().replace(/[\s\-()]/g,"")}isContactOccupied(e,t){const r=this.normalizeContactKey(t);return Object.values(Ge).some(o=>{const p=e==="email"?o.email:o.phone;return!!p&&this.normalizeContactKey(p)===r})}async acceptInvitation(e){const t=await this.getInvitationPreview(e.token);if(t.status!=="pending")throw new Error("邀请已过期或已失效，请联系邀请人重新发送。");const r=t.kind==="owner"?"org_admin":t.role??"operator",o=this.activeSession;if(!!o&&(t.targetChannel==="email"&&!!o?.email&&this.normalizeContactKey(o.email)===this.normalizeContactKey(t.targetValue)||t.targetChannel==="phone"&&!!o?.phone&&this.normalizeContactKey(o.phone)===this.normalizeContactKey(t.targetValue))&&o){const T=structuredClone(o);return this.activeSession=T,this.applyOverridesToSession(),sessionStorage.setItem(ga,T.role),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,T),this.pushAudit("auth.invite.accept",T.userId,"success","已有账户确认加入"),structuredClone(T)}if(t.accountExists)throw new Error("该账号已注册，请使用原账户登录后再接受邀请。");const E=t.requiredSecondaryChannel!==void 0?t.requiredSecondaryChannel:ha(t.kind,t.role,t.targetChannel);let M="";if(E){const T=(e.secondaryContact??"").trim(),G=(e.secondaryVerificationCode??"").trim();if(!T)throw new Error(E==="phone"?"请补充并验证手机号码":"请补充并验证电子邮箱");if(!/^\d{6}$/.test(G))throw new Error("验证码不正确或已过期");const J=`bind:${T.toLowerCase()}`;if(!this.sentCodeTargets.has(J))throw new Error("请先获取验证码");if(this.isContactOccupied(E,T))throw new Error(E==="phone"?"该手机号码已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。":"该电子邮箱已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。");M=T}const F=structuredClone(Ge[r]);return e.displayName?.trim()&&(F.displayName=e.displayName.trim()),t.targetChannel==="email"?(F.email=t.targetValue,F.phone=M||(t.kind==="owner"?"13900139000":void 0)):(F.phone=t.targetValue,F.email=M||void 0),this.activeSession=F,this.applyOverridesToSession(),sessionStorage.setItem(ga,r),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,F),this.pushAudit("auth.invite.accept",F.userId,"success"),structuredClone(F)}async switchDemoRole(e){return this.activeSession=structuredClone(Ge[e]),this.applyOverridesToSession(),sessionStorage.setItem(ga,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(ft);if(e){const t=JSON.parse(e);if(Array.isArray(t?.projects)&&Array.isArray(t?.buildings)&&Array.isArray(t?.floors)&&Array.isArray(t?.zones))return t}}}catch{}return structuredClone(Mt)}loadOrgs(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(bt);if(e){const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0&&t.every(r=>r?.id&&r?.name&&Array.isArray(r?.spatial?.projects)))return t}}}catch{}return[{id:Je,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const e=this.orgs.find(t=>t.id===this.activeOrgId);e&&(e.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(bt,JSON.stringify(this.orgs)),localStorage.setItem(ht,this.activeOrgId),this.activeOrgId===Je&&localStorage.setItem(ft,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(e=>({id:e.id,name:e.name,projectCount:e.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}async switchOrganization(e){const t=this.orgs.find(r=>r.id===e);if(!t)throw new Error(`404 NOT_FOUND: 机构 ${e} 不存在`);this.activeOrgId=t.id,this.spatial=t.spatial,this.persistSpatial()}async createOrganization(e){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const r=e.trim()||"新建机构",o={id:`org-${Date.now().toString(36)}`,name:r,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(o),this.activeOrgId=o.id,this.spatial=o.spatial,this.persistSpatial(),this.pushAudit("org.create",o.id,"success",r),{id:o.id,name:o.name,projectCount:0}}syncAdminScopesFromSpatial(){const e=this.spatial.projects.map(o=>o.id),t=this.spatial.buildings.map(o=>o.id),r=this.spatial.floors.map(o=>o.id);this.activeOrgId===Je&&(Ge.org_admin.scope.allowedProjectIds=[...e],Ge.org_admin.scope.allowedBuildingIds=[...t],Ge.org_admin.scope.allowedFloorIds=[...r],Ge.project_admin.scope.allowedBuildingIds=[...t],Ge.project_admin.scope.allowedFloorIds=[...r]),this.activeSession&&((this.activeOrgId!==Je||this.activeSession.role==="org_admin")&&(this.activeSession.scope.allowedProjectIds=[...e]),(this.activeOrgId!==Je||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin")&&(this.activeSession.scope.allowedBuildingIds=[...t],this.activeSession.scope.allowedFloorIds=[...r]))}async getSpatialTree(){const e=this.requireSession();if(this.activeOrgId!==Je){const T=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:T.projects.length,buildings:T.buildings.length,floors:T.floors.length}),T}const t=this.spatial.projects.filter(T=>e.scope.allowedProjectIds.includes(T.id)),r=this.spatial.buildings.filter(T=>e.scope.allowedBuildingIds.includes(T.id)),o=new Set(r.map(T=>T.id)),p=this.spatial.floors.filter(T=>o.has(T.buildingId)),E=new Set(p.map(T=>T.id)),M=this.spatial.zones.filter(T=>E.has(T.floorId)),F=structuredClone({projects:t,buildings:r,floors:p,zones:M});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:F.projects.length,buildings:F.buildings.length,floors:F.floors.length}),F}async createProject(e){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权创建项目`);const r={id:`project-${Date.now().toString(36)}`,name:e.name.trim()||"新建项目",city:e.city?.trim()||"广州市",address:e.address?.trim()||"",timezone:"Asia/Shanghai",location:e.location,imageUrl:e.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(r),t.scope.allowedProjectIds.includes(r.id)||t.scope.allowedProjectIds.push(r.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",r,e),this.pushAudit("project.create",r.id,"success",r.name),structuredClone(r)}async updateProject(e,t){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权修改项目配置`);const o=this.spatial.projects.find(p=>p.id===e);if(!o)throw new Error(`404 NOT_FOUND: 项目 ${e} 不存在`);return t.name!==void 0&&(o.name=t.name.trim()||o.name),t.city!==void 0&&(o.city=t.city.trim()),t.address!==void 0&&(o.address=t.address.trim()),t.location!==void 0&&(o.location=t.location),t.imageUrl!==void 0&&(o.imageUrl=t.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${e}`,o,t),this.pushAudit("project.update",e,"success",o.name),structuredClone(o)}async deleteProject(e){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权删除项目`);if(e===I.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const r=new Set(this.spatial.buildings.filter(p=>p.projectId===e).map(p=>p.id)),o=new Set(this.spatial.floors.filter(p=>r.has(p.buildingId)).map(p=>p.id));this.spatial.projects=this.spatial.projects.filter(p=>p.id!==e),this.spatial.buildings=this.spatial.buildings.filter(p=>p.projectId!==e),this.spatial.floors=this.spatial.floors.filter(p=>!r.has(p.buildingId)),this.spatial.zones=this.spatial.zones.filter(p=>!o.has(p.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${e}`,{ok:!0}),this.pushAudit("project.delete",e,"success")}async upsertBuilding(e){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权维护楼宇`);let r=e.id?this.spatial.buildings.find(o=>o.id===e.id):void 0;return r?(r.name=e.name.trim()||r.name,r.aboveFloors=Math.max(0,e.aboveFloors),r.belowFloors=Math.max(0,e.belowFloors),r.hasRoof=e.hasRoof,e.areaSqm!==void 0&&(r.areaSqm=e.areaSqm),e.imageUrl!==void 0&&(r.imageUrl=e.imageUrl)):(r={id:`building-${Date.now().toString(36)}`,projectId:e.projectId,name:e.name.trim()||"新建楼宇",aboveFloors:Math.max(1,e.aboveFloors),belowFloors:Math.max(0,e.belowFloors),hasRoof:e.hasRoof,areaSqm:e.areaSqm??null,imageUrl:e.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(r)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",r,e),this.pushAudit("building.upsert",r.id,"success",r.name),structuredClone(r)}async deleteBuilding(e){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权删除楼宇`);if(e===I.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const r=new Set(this.spatial.floors.filter(o=>o.buildingId===e).map(o=>o.id));this.spatial.buildings=this.spatial.buildings.filter(o=>o.id!==e),this.spatial.floors=this.spatial.floors.filter(o=>o.buildingId!==e),this.spatial.zones=this.spatial.zones.filter(o=>!r.has(o.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${e}`,{ok:!0}),this.pushAudit("building.delete",e,"success")}async upsertFloor(e){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权维护楼层`);const r=new Date().toISOString();let o=e.id?this.spatial.floors.find(p=>p.id===e.id):void 0;if(o)o.name=e.name.trim()||o.name,o.kind=e.kind,o.level=e.level,e.areaSqm!==void 0&&(o.areaSqm=e.areaSqm),e.planImageUrl!==void 0&&(o.plan=e.planImageUrl?{floorId:o.id,imageUrl:e.planImageUrl,planVersion:(o.plan?.planVersion??0)+1,updatedAt:r}:null);else{const p=`floor-${e.buildingId.slice(-6)}-${e.kind}-${Math.abs(e.level)}-${Date.now().toString(36).slice(-3)}`;o={id:p,buildingId:e.buildingId,kind:e.kind,level:e.level,name:e.name.trim()||`${e.level}F`,areaSqm:e.areaSqm??null,plan:e.planImageUrl?{floorId:p,imageUrl:e.planImageUrl,planVersion:1,updatedAt:r}:null},this.spatial.floors.push(o),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(o.id)&&this.activeSession.scope.allowedFloorIds.push(o.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:o.id,name:o.name,hasPlan:!!o.plan}),this.pushAudit("floor.upsert",o.id,"success",o.name),structuredClone(o)}async deleteFloor(e){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权删除楼层`);if(e===I.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(r=>r.id!==e),this.spatial.zones=this.spatial.zones.filter(r=>r.floorId!==e),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${e}`,{ok:!0}),this.pushAudit("floor.delete",e,"success")}async upsertZone(e){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权维护功能区`);let r=e.id?this.spatial.zones.find(o=>o.id===e.id):void 0;return r?(r.name=e.name.trim()||r.name,r.category=e.category):(r={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:e.floorId,name:e.name.trim(),category:e.category},this.spatial.zones.push(r)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",r),this.pushAudit("zone.upsert",r.id,"success",r.name),structuredClone(r)}async deleteZone(e){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(r=>r.id!==e),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${e}`,{ok:!0}),this.pushAudit("zone.delete",e,"success")}async copyZonesToFloors(e,t){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权复制功能区`);const o=this.spatial.floors.find(M=>M.id===e),p=this.spatial.zones.filter(M=>M.floorId===e);if(!o||p.length===0)return 0;let E=0;for(const M of t){if(M===e)continue;const F=this.spatial.floors.find(G=>G.id===M);if(!F)continue;const T=new Set(this.spatial.zones.filter(G=>G.floorId===M).map(G=>G.name));for(const G of p){const J=G.name.replace(new RegExp(`^${o.name}\\s*`,"i"),""),D=`${F.name} ${J}`.trim();T.has(D)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:M,name:D,category:G.category}),T.add(D),E+=1)}}return E>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:e,targetCount:t.length,added:E}),E}async getFloorDevices(e){const t=this.requireSession();if(this.activeOrgId!==Je)return[];if(!t.scope.allowedFloorIds.includes(e)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${t.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,o),this.pushAudit("floor.read",e,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}if(e!==I.floorId)return[];let r=structuredClone(this.devices);return t.scope.allowedZoneIds?.length&&(r=r.filter(o=>o.logicalZoneId&&t.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:r.length}),r}async dispatchControlBatch(e){const t=this.requireSession();if(!t.scope.canControlDevices||!t.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权下发控制指令`);const r=`batch-e7f-${Date.now().toString(36)}`,o={batchId:r,floorId:e.floorId,createdBy:t.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(p=>({deviceId:p.deviceId,command:p.command,targetValue:p.targetValue,status:"queued"}))};return this.batches.set(r,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,e),this.pushAudit("control.dispatch",r,"success",`下发 ${e.targets.length} 台设备`),o.receipts.forEach((p,E)=>{const M=this.devices.find(F=>F.id===p.deviceId);setTimeout(()=>{p.status="dispatched",p.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:r,deviceId:p.deviceId,status:"dispatched",at:p.dispatchedAt})},280+E*120),setTimeout(()=>{const F=new Date().toISOString();!M||M.connectivity==="offline"?(p.status="timeout",p.errorCode="GATEWAY_READBACK_TIMEOUT",p.errorMessage="设备离线，网关未收到回读确认",p.verifiedAt=F):(p.status="verified_success",p.observedValue=p.targetValue,p.verifiedAt=F,this.applyObservedTelemetry(M,p.command,p.targetValue,F)),this.emit({type:"control.receipt.updated",batchId:r,deviceId:p.deviceId,status:p.status,observedValue:p.observedValue,at:F})},900+E*220)}),structuredClone(o)}applyObservedTelemetry(e,t,r,o){t==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:r,collectedAt:o,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(r)>0,collectedAt:o,stale:!1})):(t==="lighting.power"||t==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:r,collectedAt:o,stale:!1}:t==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:r,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:o,values:{[t]:r}})}async getControlBatch(e){this.requireSession();const t=this.batches.get(e);if(!t)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(t)}async listAlarms(e){const t=this.requireSession();return this.activeOrgId!==Je?[]:!t.scope.allowedFloorIds.includes(e)||e!==I.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,t){const r=this.requireSession();if(!r.scope.canManageAlarms){const p=`角色「${r.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",p),new Error(`403 FORBIDDEN: ${p}`)}const o=this.alarms.find(p=>p.id===e);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=r.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,o,{note:t}),this.pushAudit("alarm.acknowledge",e,"success",t),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:e,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(e){const t=this.requireSession();return this.activeOrgId!==Je?[]:!t.scope.allowedFloorIds.includes(e)||e!==I.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const t=this.requireSession();if(!t.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权创建工单`);const r=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:I.projectId,buildingId:I.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:r,updatedAt:r};if(this.workOrders.unshift(o),e.alarmId){const p=this.alarms.find(E=>E.id===e.alarmId);p&&(p.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,e),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(e,t){const r=this.requireSession();if(!r.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权流转工单`);const o=this.workOrders.find(p=>p.id===e);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return o.status=t,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,o,{status:t}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${t}`),structuredClone(o)}async updateDevicePlanPoint(e){const t=this.requireSession();if(!t.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权编辑图纸标点`);const r=this.devices.find(o=>o.id===e.deviceId);if(!r)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(r.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${r.version}，请刷新后重试`);return r.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},r.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,r,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${r.planPoint.x}, ${r.planPoint.y})`),structuredClone(r)}async updateDeviceHardwareBinding(e){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权修改硬件绑定`);const r=this.devices.find(p=>p.id===e.deviceId);if(!r)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(r.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${r.version}）`);const o=new Date().toISOString();return r.physicalInstalled=e.physicalInstalled,r.physicalVerifiedAt=e.physicalInstalled?o:null,r.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:o,boundBy:t.displayName},r.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,r,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(r)}async listConnections(e){return this.requireSession(),this.activeOrgId!==Je?[]:structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),this.activeOrgId!==Je?[]:structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,t){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权冻结交付批次`);const o=this.devices.filter(E=>E.physicalInstalled&&E.hardwareBinding).length,p={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:I.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:o,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:r.displayName,note:t||"例行交付基线冻结"};return this.deliveryBatches.unshift(p),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,p,{note:t}),this.pushAudit("delivery.freeze",p.id,"success",`${o}/${this.devices.length} 已现场核验`),structuredClone(p)}async getAnalysisReport(e,t,r){this.requireSession();const o=t==="today"?1:t==="7d"?7:30,E={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(T=>T.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],M=t==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],F={category:e,range:t,scopeId:r,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:E.kpis,unit:E.unit,series:E.base.map((T,G)=>({label:M[G],value:Math.round(T*(e==="energy"||e==="carbon"?o/2+.5:1)),baseline:Math.round(T*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:E.base[3],unit:E.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:E.base[4],unit:E.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:E.base[1],unit:E.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${t}&scopeId=${r}`,{kpis:F.kpis.length}),F}async listScenes(e){return this.requireSession(),this.activeOrgId!==Je?[]:structuredClone(this.scenes)}async createScene(e){const t=this.requireSession();if(!t.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权创建场景`);const r={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(r),this.record("REST","createScene","POST /api/v1/scenes",r,e),this.pushAudit("scene.create",r.id,"success",r.name),structuredClone(r)}async executeScene(e){const t=this.scenes.find(o=>o.id===e);if(!t)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const r=await this.dispatchControlBatch({floorId:t.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:t.actions,reason:`触发场景：${t.name}`});return t.lastExecutedAt=new Date().toISOString(),t.lastBatchId=r.batchId,r}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:I.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,t,r){this.requireSession();const o=r>=this.calendar.nightGuardStart?`下班时间 ${r} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,p=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${t} - ${r}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${t} (-30m) ~ ${r} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",p,{workdayStart:t,workdayEnd:r}),p}async saveWorkCalendar(e,t,r,o){const p=this.requireSession();if(!p.scope.canEditSettings)throw this.pushAudit("settings.calendar",I.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${p.roleLabel}」无权修改应用设置`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(t>=r)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:t,workdayEnd:r,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:t,workdayEnd:r,expectedVersion:o}),this.pushAudit("settings.calendar",I.projectId,"success",`${t}-${r}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,t,r){const o=this.requireSession();if(!o.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",e,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停应用设置规则`);const p=this.rules.find(E=>E.id===e);if(!p)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(p.version!==r)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${p.version}）`);return p.enabled=t,p.version+=1,p.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,p,{enabled:t,expectedVersion:r}),this.pushAudit("settings.rule_toggle",e,"success",t?"启用":"停用"),structuredClone(p)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,t){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",e,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=Ge[t],p={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:t,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(p),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",p,{email:e,role:t}),this.pushAudit("org.invite",e,"success",o.roleLabel),structuredClone(p)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const e=this.requireSession();return this.reconcileOverrides(),e.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(t=>t.targetUserId===e.userId))}async grantOverride(e){const t=this.requireSession();if(!t.scope.canGrantOverride)throw this.pushAudit("override.grant",e.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const r=e.reason.trim();if(!r)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(e.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const o=this.members.find(M=>M.userId===e.targetUserId);if(!o)throw new Error(`404 NOT_FOUND: 目标成员 ${e.targetUserId} 不存在`);if(o.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const p=Date.now(),E={id:`ovr-${p.toString(36)}`,targetUserId:o.userId,targetUserName:o.displayName,module:e.module,durationHours:e.durationHours,grantedAt:new Date(p).toISOString(),expiresAt:new Date(p+e.durationHours*36e5).toISOString(),approvedBy:t.displayName,reason:r,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(E),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",E,e),this.pushAudit("override.grant",`${o.displayName} · ${e.module==="deployment"?"系统部署":"应用设置"}`,"success",`${e.durationHours}h · ${r}`),structuredClone(E)}async revokeOverride(e){const t=this.requireSession();if(!t.scope.canGrantOverride)throw this.pushAudit("override.revoke",e,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const r=this.overrides.find(o=>o.id===e);if(!r)throw new Error(`404 NOT_FOUND: 提权记录 ${e} 不存在`);return r.status="revoked",r.revokedAt=new Date().toISOString(),r.revokedBy=t.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${e}/revoke`,r),this.pushAudit("override.revoke",`${r.targetUserName} · ${r.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(r)}subscribeFloorEvents(e,t){return e!==I.floorId?()=>{}:(this.listeners.add(t),()=>{this.listeners.delete(t)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${I.floorId}`,e),this.listeners.forEach(t=>t(e))}}const Ya=["org_admin","project_admin","operator","space_user"],Ht=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function ke(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Ja(a){return a?a.slice(0,16).replace("T"," "):"—"}function Oa(a){return a==="deployment"?"系统部署":"应用设置"}async function Gt(a,e,t,r,o){const p=t.scope.canManageMembers,E=t.scope.canGrantOverride,M=t.scope.canViewAuditLogs,F=E||t.role==="operator",T=t.role!=="space_user";let G="profile",J=T?await e.listOrgMembers().catch(()=>[]):[],D=F?await e.listOverrides().catch(()=>[]):[],Q=M?await e.listAuditLogs().catch(()=>[]):[],ge="",R="all",X="all",Y="all",le=!1,re=!1,ve=t.displayName,de=t.role==="org_admin"?"机构负责人":t.role==="project_admin"?"项目负责人":t.role==="operator"?"运行值守工程师":"园区空间用户",V="138-0013-8072",ye="",ne="";const Ee={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function fe(){const[q,u,$,O]=await Promise.all([e.getSession(),T?e.listOrgMembers().catch(()=>[]):Promise.resolve([]),F?e.listOverrides().catch(()=>[]):Promise.resolve([]),M?e.listAuditLogs().catch(()=>[]):Promise.resolve([])]);J=u,D=$,Q=O,q&&(t=q,r(q)),B()}function N(){const q=["profile"];return T&&q.push("members","roles"),F&&q.push("overrides"),M&&q.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${q.map(u=>{const $=Ee[u],O=u==="overrides"?D.filter(n=>n.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${G===u}" data-anav="${u}">
                  ${we($.icon,16)}
                  <span>${$.label}</span>
                  ${O>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${O}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function K(){return G==="members"&&p?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':G==="overrides"&&E?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':G==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 · SR 6.1</span>':""}function ce(){const q=t.scope.activeOverrides.filter($=>$.status==="active"),u=t.scope.allowedZoneIds?.length?`授权 ${t.scope.allowedFloorIds.length} 个楼层 · ${t.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${t.scope.allowedProjectIds.length} 个项目 · ${t.scope.allowedBuildingIds.length} 栋楼宇 · ${t.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${ke(t.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${ke(t.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${ke(ve)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${ke(de)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${ke(V)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${ke(u)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${ke(vt[t.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${ke(t.roleLabel)}</span>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">当前写权限状态</span>
              <span class="pacom-setting-desc">写权限独立授予，绝不隐含在只读访问中</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <span class="pacom-badge ${t.scope.canControlDevices?"pacom-badge--online":"pacom-badge--neutral"}">设备控制：${t.scope.canControlDevices?"允许":"无"}</span>
              ${t.role==="space_user"?'<span class="pacom-badge pacom-badge--neutral">配置与管理模块：不可见</span>':`<span class="pacom-badge ${t.scope.canEditSettings?"pacom-badge--online":"pacom-badge--warning"}">应用设置：${t.scope.canEditSettings?"可改":"只读"}</span>
                     <span class="pacom-badge ${t.scope.canEditDeployment?"pacom-badge--online":"pacom-badge--warning"}">系统部署：${t.scope.canEditDeployment?"可改":"只读"}</span>`}
            </div>
          </div>
          ${q.length>0?q.map($=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${ke(Oa($.module))}（${$.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${ke($.approvedBy)} · 到期时间：${ke(Ja($.expiresAt))} · 事由：${ke($.reason)}</span>
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
    `}function oe(){const q=ge.trim().toLowerCase(),u=J.filter($=>R!=="all"&&$.role!==R?!1:q?`${$.displayName} ${$.email} ${$.roleLabel} ${$.scopeSummary}`.toLowerCase().includes(q):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${ke(ge)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${R==="all"?"selected":""}>全部角色（${J.length}）</option>
            ${Ya.map($=>`<option value="${$}" ${R===$?"selected":""}>${ke(Ue[$])}</option>`).join("")}
          </select>
        </div>
        <span class="pacom-row-sub">显示 ${u.length} / ${J.length} 人</span>
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
              ${u.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':u.map($=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${ke($.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${ke($.displayName)}</div>
                                ${p?`<div class="pacom-row-sub">${ke($.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${$.role==="org_admin"||$.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${ke($.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${ke($.scopeSummary)}</span></td>
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
    `}function pe(){return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">四级标准角色说明</h2>
          <span class="pacom-row-sub">IEC 62443-3-3 SR 2.1 RE 2 · 最小权限与职责分离</span>
        </div>
        <div class="pacom-settings-card">
          ${Ya.map(q=>{const u=J.filter($=>$.role===q).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${ke(Ue[q])}</span>
                  <span class="pacom-setting-desc">${ke(vt[q])}</span>
                </div>
                <span class="pacom-badge pacom-badge--neutral">${u} 人</span>
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
                ${Ht.map(q=>`
                  <tr>
                    <td><strong style="font-weight:450;">${ke(q.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${q.org_admin.tone}">${ke(q.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${q.project_admin.tone}">${ke(q.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${q.operator.tone}">${ke(q.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${q.space_user.tone}">${ke(q.space_user.text)}</span></td>
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
          <div class="pacom-kpi-value">${D.filter(u=>u.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${D.length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">每条审批与收回同步写入审计日志</span>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">限时提权审批记录</h2>
          <span class="pacom-row-sub">${E?"可为运营人员开启「系统部署」或「应用设置」限时修改权":"展示管理员为你授予的临时提权记录"}</span>
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
                  ${E?'<th style="text-align:right;">操作</th>':""}
                </tr>
              </thead>
              <tbody>
                ${D.length===0?`<tr><td colspan="${E?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${E?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:D.map(u=>`
                          <tr>
                            <td><strong style="font-weight:450;">${ke(u.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${ke(Oa(u.module))}</span></td>
                            <td>
                              <div>${u.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${ke(Ja(u.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${ke(u.approvedBy)}</div>
                              <div class="pacom-row-sub">${ke(u.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${u.status==="active"?"pacom-badge--online":u.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${u.status==="active"?"生效中":u.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${E?`<td style="text-align:right;">
                                    ${u.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${ke(u.id)}">提前收回</button>`:`<span class="pacom-row-sub">${u.revokedBy?`${ke(u.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Le(){const q=Q.filter(u=>{if(X==="success"&&u.result!=="success"||X==="denied"&&u.result==="success")return!1;if(Y!=="all"){const $=`${u.action} ${u.target}`.toLowerCase();if(Y==="control"&&!$.includes("control")&&!$.includes("scene")||Y==="alarm"&&!$.includes("alarm")&&!$.includes("work")||Y==="deploy"&&!$.includes("deploy")&&!$.includes("plan")&&!$.includes("hardware")&&!$.includes("project")&&!$.includes("building")&&!$.includes("floor")&&!$.includes("zone")||Y==="settings"&&!$.includes("settings")||Y==="override"&&!$.includes("override"))return!1}return!0});return`
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
            <button type="button" class="pacom-tab" role="tab" aria-selected="${X==="all"}" data-audit-filter="all">全部（${Q.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${X==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${X==="denied"}" data-audit-filter="denied">已拦截</button>
          </div>
        </div>
        <span class="pacom-row-sub">共 ${q.length} 条只读记录</span>
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
              ${q.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':q.map(u=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${ke(u.action)}</div>
                            ${u.detail?`<div class="pacom-row-sub">${ke(u.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${ke(u.target)}</code></td>
                          <td>
                            <div>${ke(u.actor)}</div>
                            <div class="pacom-row-sub">${ke(Ue[u.role]??u.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${ke(Ja(u.at))}</span></td>
                          <td style="text-align:right;">
                            <span class="pacom-badge ${u.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                              ${u.result==="success"?"成功":"已拦截"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function L(){const q=[];if(le&&p){const u=t.role==="org_admin"?Ya:["project_admin","operator","space_user"];q.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="邀请成员">
          <form class="dep-modal-card" data-role="invite-form" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">邀请新成员</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${we("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">成员电子邮箱（唯一登录账号）</span>
                <input class="pacom-input" name="email" type="email" placeholder="colleague@gzlab.ac.cn" required />
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分配角色</span>
                <select class="pacom-select" name="role">
                  ${u.map($=>`<option value="${$}">${ke(Ue[$])}</option>`).join("")}
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
        </div>`)}if(re&&E){const u=J.filter($=>$.role==="operator");q.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="授予限时提权">
          <form class="dep-modal-card" data-role="grant-override-form" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">授予运营人员限时提权（SR 2.1 RE 3）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${we("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">目标运营人员</span>
                <select class="pacom-select" name="targetUserId" required>
                  ${u.length===0?'<option value="">暂无运营人员</option>':u.map($=>`<option value="${ke($.userId)}">${ke($.displayName)}（${ke($.email)}）</option>`).join("")}
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
              <span class="pacom-row-sub">审批人：${ke(t.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${u.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return q.join("")}function B(){const q=Ee[G],u=K();a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${ke(t.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${N()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${u?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${q.label}</h2>
                  <p class="pacom-unified-subtitle">${q.subtitle}</p>
                </div>
                ${u?`<div class="pacom-unified-head-actions">${u}</div>`:""}
              </div>
              ${ye?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${ke(ye)}</span></div>`:""}
              ${ne?`<div class="pacom-alert-banner">${ke(ne)}</div>`:""}
              ${G==="profile"?ce():G==="members"?oe():G==="roles"?pe():G==="overrides"?xe():Le()}
            </div>
          </div>
        </div>
      </div>
      ${L()}
    `,Te()}function Te(){a.querySelectorAll("[data-anav]").forEach(u=>{u.addEventListener("click",()=>{G=u.dataset.anav??"profile",ye="",ne="",B()})}),a.querySelector('[data-role="profile-form"]')?.addEventListener("submit",u=>{u.preventDefault();const $=new FormData(u.currentTarget);ve=String($.get("displayName")??"").trim()||t.displayName,de=String($.get("jobTitle")??"").trim()||de,V=String($.get("phone")??"").trim()||V,ye=`已保存个人资料：${ve}（${de}）· ${V}`,B()}),a.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",o()}),a.querySelector("[data-open-invite]")?.addEventListener("click",()=>{le=!0,re=!1,B()}),a.querySelector("[data-open-grant]")?.addEventListener("click",()=>{re=!0,le=!1,B()}),a.querySelectorAll("[data-close-modals]").forEach(u=>{u.addEventListener("click",()=>{le=!1,re=!1,B()})}),a.querySelectorAll("[data-modal-scrim]").forEach(u=>{u.addEventListener("click",$=>{$.target===u&&(le=!1,re=!1,B())})}),a.querySelector("[data-member-search]")?.addEventListener("input",u=>{const $=u.currentTarget,O=$.selectionStart??$.value.length;ge=$.value,B();const n=a.querySelector("[data-member-search]");n&&(n.focus(),n.setSelectionRange(O,O))}),a.querySelector("[data-role-filter]")?.addEventListener("change",u=>{R=u.currentTarget.value,B()}),a.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async u=>{u.preventDefault(),ne="";const $=new FormData(u.currentTarget);try{const O=await e.inviteOrgMember(String($.get("email")??""),String($.get("role")));le=!1,ye=`已向 ${O.email} 发送「${O.roleLabel}」邀请。`,await fe()}catch(O){ne=O instanceof Error?O.message:String(O),B()}}),a.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async u=>{u.preventDefault(),ne="";const $=new FormData(u.currentTarget);try{const O=await e.grantOverride({targetUserId:String($.get("targetUserId")??""),module:String($.get("module")??"deployment"),durationHours:Number($.get("durationHours")??8),reason:String($.get("reason")??"")});re=!1,ye=`已为「${O.targetUserName}」开启「${Oa(O.module)}」${O.durationHours} 小时限时修改权，到期自动收回。`,await fe()}catch(O){ne=O instanceof Error?O.message:String(O),B()}}),a.querySelectorAll("[data-revoke-override]").forEach(u=>{u.addEventListener("click",async()=>{const $=u.dataset.revokeOverride;if($){ne="";try{const O=await e.revokeOverride($);ye=`已提前收回「${O.targetUserName}」的「${Oa(O.module)}」限时修改权。`,await fe()}catch(O){ne=O instanceof Error?O.message:String(O),B()}}})}),a.querySelectorAll("[data-audit-filter]").forEach(u=>{u.addEventListener("click",()=>{X=u.dataset.auditFilter??"all",B()})}),a.querySelector("[data-audit-cat]")?.addEventListener("change",u=>{Y=u.currentTarget.value??"all",B()})}B()}const pa={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Wt={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Zt={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Kt(a){const e=`${a.title} ${a.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Yt(a){return a.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:a.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function Qa(a){const e=`${a.title} ${a.message}`.toLowerCase();return e.includes("离线")||e.includes("vav")||a.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:e.includes("co₂")||e.includes("co2")||a.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function Jt(a,e,t){const r=new URLSearchParams(window.location.hash.split("?")[1]??""),o=r.get("alarm"),p=r.get("wo"),E=t.scope.canManageAlarms;let M=await e.getSpatialTree(),F=Ba(),T=!1,G="",J=[],D=[],Q=[],ge=p?"workorders":"alarms",R="all",X="all",Y="all",le="impact",re=!1,ve="",de=o,V=p,ye=null,ne=null,Ee="resolved";const fe=new Set,N=new Map,K=new Map,ce=new Map,oe=new Map;let pe="",xe="";function Le(u){const $=oe.get(u.id);if($)return $;const O=u.id.match(/(\d+)$/),n=`WO-2026-${O?O[1]:u.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,w={estCost:"¥ 450",actualCost:u.status==="closed"?"¥ 380":"--",cmmsNo:n,assigneeGroup:"暖通运维组",tasks:[{id:`${u.id}-t1`,label:"核查设备供电与现场指示灯状态",done:u.status!=="open"},{id:`${u.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:u.status==="resolved"||u.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:u.createdAt?u.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${n}）`}]};return oe.set(u.id,w),w}async function L(){[J,D,Q]=await Promise.all([e.listAlarms(I.floorId),e.listWorkOrders(I.floorId),e.getFloorDevices(I.floorId).catch(()=>[])]),D.forEach(u=>Le(u)),q()}function B(u){if(!u)return{name:"楼层通用",zone:"E7F",dev:null};const $=Q.find(O=>O.id===u)??null;return $?{name:$.name,zone:($.logicalZoneId?Zt[$.logicalZoneId]:void 0)??"E7F",dev:$}:{name:u,zone:"E7F",dev:null}}function Te(u){const $=B(u.deviceId).dev;$&&$.connectivity==="offline"?ce.set(u.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${$.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):ce.set(u.id,{verdict:"pass",summary:`自检通过（PASS）：「${$?.name??u.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),de=u.id,q()}function q(){const u=J.filter(x=>x.status==="active"&&!N.has(x.id)),$=D.filter(x=>!Le(x).cancelled&&(x.status==="open"||x.status==="assigned"||x.status==="in_progress")),O=J.filter(x=>x.status!=="active").length+K.size,n=0,w=N.size,P=ve.trim().toLowerCase(),Z=J.filter(x=>{const h=N.has(x.id);if(R==="snoozed"){if(!h)return!1}else if(R==="active"){if(x.status!=="active"||h)return!1}else if(R==="acknowledged"){if(x.status!=="acknowledged")return!1}else if(h)return!1;if(Y!=="all"&&x.severity!==Y)return!1;if(!P)return!0;const H=B(x.deviceId);return`${x.title} ${x.message} ${H.name} ${H.zone} ${x.deviceId}`.toLowerCase().includes(P)}),Ie=new Map;for(const x of Z){const h=`${x.title} ${x.message}`.toLowerCase(),H=h.includes("离线")||h.includes("modbus")||h.includes("通信"),ee=re?H?"root-gateway-modbus":x.deviceId:x.id,be=H?"根因：E7F 主控网关通信链路":`根因：${B(x.deviceId).name}`,b=Ie.get(ee)??{rootLabel:be,items:[]};b.items.push(x),Ie.set(ee,b)}const Ae=Array.from(Ie.values());le==="impact"&&Ae.sort((x,h)=>Qa(h.items[0]).costYuan-Qa(x.items[0]).costYuan);const $e=D.filter(x=>{const h=Le(x);if(X==="cancelled"){if(!h.cancelled)return!1}else if(h.cancelled||X==="open"&&(x.status==="resolved"||x.status==="closed")||X==="resolved"&&x.status!=="resolved"||X==="closed"&&x.status!=="closed")return!1;if(!P)return!0;const H=B(x.deviceId);return`${x.title} ${x.description} ${x.id} ${h.cmmsNo} ${H.name}`.toLowerCase().includes(P)});a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Na({tree:M,session:t,scope:F,activeAlarmCount:u.length,isOpen:T,searchKeyword:G})}
            </div>

            <div class="pacom-header-meta">
              ${ge==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${re}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${t.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${t.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${we("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ge==="alarms"}" data-main-tab="alarms">实时告警（${J.length-w}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ge==="workorders"}" data-main-tab="workorders">运维工单（${D.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ge==="alarms"&&R==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${u.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ge==="workorders"&&X==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${$.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ge==="alarms"&&R==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${O}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${n}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${pe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${d(pe)}</span></div>`:""}
          ${xe?`<div class="pacom-alert-banner">${d(xe)}</div>`:""}

          ${ge==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${d(ve)}" aria-label="搜索告警" />
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
                      <button class="pacom-tab" aria-selected="${R==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${R==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${R==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${R==="snoozed"}" data-status-pill="snoozed">已忽略（${w}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${fe.size>0&&t.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${fe.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${Ae.length} 项</span>
                  </div>
                </div>
                ${Ae.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${Ae.map(x=>{const h=x.items[0],H=Wt[h.severity]??{label:h.severity,cls:"pacom-badge--neutral"},ee=B(h.deviceId),be=Yt(h),b=Qa(h),se=de===h.id,ue=N.get(h.id),Oe=!!ue,We=fe.has(h.id),me=ce.get(h.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${d(h.id)}" data-check-alarm="${d(h.id)}" ${We?"checked":""} ${!E||h.status!=="active"||Oe?"disabled":""} aria-label="选择 ${d(h.title)}" />
                                  </td>
                                  <td><span class="pacom-badge ${H.cls}">${d(H.label)}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${d(h.title)}</span>
                                      ${re?`<span class="pacom-badge pacom-badge--accent">${d(x.rootLabel)}${x.items.length>1?` · 影响 ${x.items.length} 项`:""}</span>`:""}
                                      ${me?`<span class="pacom-badge ${me.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${d(me.verdict.toUpperCase())}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${d(h.message)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${d(ee.name)}</div>
                                    <div class="pacom-row-sub">${d(ee.zone)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${d(b.costLabel)}</div>
                                    <div class="pacom-row-sub">${d(b.comfortLabel)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${d(be.duration)}</div>
                                    <div class="pacom-row-sub" style="color:${be.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${d(be.trend)}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${Oe?"pacom-badge--neutral":h.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Oe?`忽略 ${d(ue?.duration)}`:h.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Oe?`<button class="pacom-btn" data-unsnooze="${d(h.id)}" ${E?"":"disabled"}>恢复监控</button>`:`
                                            ${h.status==="active"?`<button class="pacom-btn" data-mark-actioned="${d(h.id)}" ${E?"":"disabled"}>标记已处置</button>`:""}
                                            ${h.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${d(h.id)}" ${E?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${d(h.id)}">${se?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${se?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${d(Kt(h))}
                                            </div>
                                            ${ue?`<div class="pacom-info-banner">忽略周期：${d(ue.duration)} · 原因备注：${d(ue.reason)}</div>`:""}
                                            ${me?`
                                                <div class="pacom-banner ${me.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${d(me.summary)}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${me.steps.map(Se=>`<span>${d(Se)}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${d(h.id)}</code> · 设备编号 <code>${d(h.deviceId)}</code> · 关联工单 ${d(h.workOrderId??"无")}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${d(h.id)}">单机自检（FTT）</button>
                                              ${!Oe&&h.status==="active"?`<button class="pacom-btn" data-open-snooze="${d(h.id)}" ${E?"":"disabled"}>限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${d(h.deviceId)}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${d(h.deviceId)}">定位设备 →</button>
                                            </div>
                                            ${ye===h.id?`
                                                <form data-snooze-form="${d(h.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
                                                    <button class="pacom-btn pacom-btn--primary" type="submit" style="height:28px;" ${E?"":"disabled"}>确认忽略</button>
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
              ${(()=>{const x=V?D.find(h=>h.id===V)??null:null;if(x){const h=B(x.deviceId),H=Le(x),ee=!!(!E||H.cancelled||x.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${d(x.id)}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${d(x.title)}</h2>
                        <span class="pacom-badge pacom-badge--accent">${d(H.cmmsNo)}</span>
                        ${H.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${d(x.id)}" data-wo-status="${d(x.id)}" aria-label="更新工单状态" ${ee?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(be=>`<option value="${be}" ${x.status===be?"selected":""}>${pa[be]}</option>`).join("")}
                          <option value="cancelled" ${H.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${ne===x.id?`
                        <form data-close-wo-form="${d(x.id)}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${pa[Ee]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${d(H.cause??"")}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${d(H.solution??"")}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${d(H.actualCost==="--"?"":H.actualCost)}" />
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" ${E?"":"disabled"}>保存并更新状态</button>
                          </div>
                        </form>`:""}
                    <div class="pacom-wo-workbench">
                      <div style="display:flex; flex-direction:column; gap:14px;">
                        <div class="pacom-card" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:500;">工单描述与现场检查任务清单</strong>
                          <div class="pacom-row-sub">${d(x.description)}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${H.tasks.map(be=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${d(be.id)}" data-wo-task="${d(x.id)}" data-task-id="${d(be.id)}" ${be.done?"checked":""} ${ee?"disabled":""} />
                                    <span>${d(be.label)}</span>
                                  </span>
                                  ${be.unit?`<span class="pacom-row-sub">实测：${d(be.reading??"--")} ${d(be.unit)}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${H.history.map(be=>`<span>• <span class="pacom-row-sub">${d(be.at)}</span> — ${d(be.text)}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${d(x.id)}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${d(H.cmmsNo)}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${d(h.name)}（${d(h.zone)}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${d(H.assigneeGroup)}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${d(H.estCost)} / 实际 ${d(H.actualCost)}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${d(H.cause??"待完单填写")}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${d(H.solution??"待完单填写")}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${d(x.deviceId??"")}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${d(x.deviceId??"")}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${d(ve)}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${X==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${X==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${X==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${X==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${X==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${$e.length} 条工单</span>
                  </div>
                  ${$e.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${$e.map(h=>{const H=B(h.deviceId),ee=Le(h),be=!!(!E||ee.cancelled||h.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${d(h.title)}</span>
                                        ${ee.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${d(h.description)} · <code>${d(h.id)}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${d(H.name)}</div>
                                      <div class="pacom-row-sub">${d(H.zone)}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${d(ee.cmmsNo)}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${d(ee.assigneeGroup)} · 预估 ${d(ee.estCost)}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${d(h.id)}" data-wo-status="${d(h.id)}" aria-label="更新工单状态" ${be?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(b=>`<option value="${b}" ${h.status===b?"selected":""}>${pa[b]}</option>`).join("")}
                                          <option value="cancelled" ${ee.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${d(h.id)}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${ne===h.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${d(h.id)}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${pa[Ee]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${d(ee.cause??"")}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${d(ee.solution??"")}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${d(ee.actualCost==="--"?"":ee.actualCost)}" />
                                            </div>
                                            <div style="display:flex; justify-content:flex-end; gap:8px;">
                                              <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                                              <button class="pacom-btn pacom-btn--primary" type="submit" ${E?"":"disabled"}>保存并更新状态</button>
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
    `,Pa(a,{onToggle:()=>{T=!T,q(),T&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:x=>{G=x,q();const h=a.querySelector("[data-global-space-search]");h&&(h.focus(),h.setSelectionRange(x.length,x.length))},onPick:x=>{F=x,T=!1,q()}}),a.querySelectorAll("[data-main-tab]").forEach(x=>{x.addEventListener("click",()=>{ge=x.dataset.mainTab??"alarms",pe="",q()})}),a.querySelectorAll("[data-kpi-filter]").forEach(x=>{x.addEventListener("click",()=>{const h=x.dataset.kpiFilter;pe="",h==="workorders"?(ge="workorders",X=X==="open"?"all":"open"):(h==="active"||h==="acknowledged")&&(ge="alarms",R=R===h?"all":h),q()})}),a.querySelectorAll("[data-status-pill]").forEach(x=>{x.addEventListener("click",()=>{R=x.dataset.statusPill??"all",q()})}),a.querySelectorAll("[data-wo-pill]").forEach(x=>{x.addEventListener("click",()=>{X=x.dataset.woPill??"all",q()})}),a.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{pe="",L()}),a.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{re=!re,q()}),a.querySelector("[data-severity-filter]")?.addEventListener("change",x=>{Y=x.currentTarget.value,q()}),a.querySelector("[data-alarm-sort]")?.addEventListener("change",x=>{le=x.currentTarget.value??"impact",q()}),a.querySelector("[data-alarm-search]")?.addEventListener("input",x=>{const h=x.currentTarget,H=h.selectionStart??h.value.length;ve=h.value,q();const ee=a.querySelector("[data-alarm-search]");ee&&(ee.focus(),ee.setSelectionRange(H,H))}),a.querySelectorAll("[data-check-alarm]").forEach(x=>{x.addEventListener("change",()=>{if(!E)return;const h=x.dataset.checkAlarm;h&&(x.checked?fe.add(h):fe.delete(h),q())})}),a.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{if(!E)return;xe="";const x=Array.from(fe);try{for(const h of x)await e.acknowledgeAlarm(h,"告警中心批量确认"),K.set(h,"批量确认处置");fe.clear(),pe=`已批量确认 ${x.length} 条告警，未来 24 小时持续校验无复发。`,await L()}catch(h){xe=h instanceof Error?h.message:String(h),q()}}),a.querySelectorAll("[data-expand-alarm]").forEach(x=>{x.addEventListener("click",()=>{const h=x.dataset.expandAlarm??null;de=de===h?null:h,ye=null,q()})}),a.querySelectorAll("[data-expand-wo]").forEach(x=>{x.addEventListener("click",()=>{const h=x.dataset.expandWo??null;V=V===h?null:h,q()})}),a.querySelectorAll("[data-run-ftt]").forEach(x=>{x.addEventListener("click",()=>{const h=J.find(H=>H.id===x.dataset.runFtt);h&&Te(h)})}),a.querySelectorAll("[data-open-snooze]").forEach(x=>{x.addEventListener("click",()=>{E&&(ye=x.dataset.openSnooze??null,q())})}),a.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{ye=null,q()}),a.querySelectorAll("[data-snooze-form]").forEach(x=>{x.addEventListener("submit",h=>{if(h.preventDefault(),!E)return;const H=x.dataset.snoozeForm;if(!H)return;const ee=new FormData(x),be=String(ee.get("duration")??"24h"),b=String(ee.get("reason")??"").trim()||"现场核查中";N.set(H,{duration:be,reason:b}),fe.delete(H),ye=null,pe=`已限时忽略该告警（${be} · ${b}），可在「已忽略」页签中随时恢复。`,q()})}),a.querySelectorAll("[data-unsnooze]").forEach(x=>{x.addEventListener("click",()=>{if(!E)return;const h=x.dataset.unsnooze;h&&(N.delete(h),pe="已恢复该告警的实时监控。",q())})}),a.querySelectorAll("[data-go-ts]").forEach(x=>{x.addEventListener("click",()=>{const h=x.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(h)}`})}),a.querySelectorAll("[data-locate-home]").forEach(x=>{x.addEventListener("click",()=>{const h=x.dataset.locateHome??"";window.location.hash=h?`#home?device=${encodeURIComponent(h)}`:"#home"})}),a.querySelectorAll("[data-mark-actioned]").forEach(x=>{x.addEventListener("click",async()=>{if(!E)return;xe="";const h=x.dataset.markActioned;try{await e.acknowledgeAlarm(h,"现场自处理完成（Mark Actioned）"),K.set(h,"现场自处理完成"),fe.delete(h),pe="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await L()}catch(H){xe=H instanceof Error?H.message:String(H),q()}})}),a.querySelectorAll("[data-to-wo]").forEach(x=>{x.addEventListener("click",async()=>{if(!E)return;xe="";const h=J.find(H=>H.id===x.dataset.toWo);if(h)try{await e.createWorkOrder({floorId:h.floorId,deviceId:h.deviceId,alarmId:h.id,title:`处置告警：${h.title}`,description:h.message}),pe=`已将「${h.title}」转为运维工单并同步 CMMS。`,await L()}catch(H){xe=H instanceof Error?H.message:String(H),q()}})}),a.querySelectorAll("[data-wo-status]").forEach(x=>{x.addEventListener("change",async()=>{if(!E)return;const h=x.dataset.woStatus,H=x.value;if(xe="",H==="cancelled"){const ee=D.find(be=>be.id===h);if(ee){const be=Le(ee);be.cancelled=!0,be.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),pe="工单已移入「已取消」分类并锁定编辑。",q()}return}if(H==="resolved"||H==="closed"){ne=h,Ee=H,q();return}try{await e.updateWorkOrderStatus(h,H);const ee=D.find(be=>be.id===h);ee&&Le(ee).history.unshift({at:"刚刚",text:`状态变更为「${pa[H]}」`}),pe="工单状态已更新并写入审计日志。",await L()}catch(ee){xe=ee instanceof Error?ee.message:String(ee),await L()}})}),a.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{ne=null,q()}),a.querySelectorAll("[data-close-wo-form]").forEach(x=>{x.addEventListener("submit",async h=>{if(h.preventDefault(),!E)return;const H=x.dataset.closeWoForm,ee=new FormData(x),be=String(ee.get("cause")??"").trim(),b=String(ee.get("solution")??"").trim(),se=String(ee.get("actualCost")??"").trim();try{await e.updateWorkOrderStatus(H,Ee);const ue=D.find(Oe=>Oe.id===H);if(ue){const Oe=Le(ue);Oe.cause=be,Oe.solution=b,se&&(Oe.actualCost=se),Oe.history.unshift({at:"刚刚",text:`流转至「${pa[Ee]}」· 根因：${be}`})}ne=null,V=H,pe=`工单已更新为「${pa[Ee]}」，根因与方案已沉淀归档。`,await L()}catch(ue){xe=ue instanceof Error?ue.message:String(ue),q()}})}),a.querySelectorAll("[data-wo-task]").forEach(x=>{x.addEventListener("change",()=>{if(!E)return;const h=D.find(be=>be.id===x.dataset.woTask);if(!h)return;const ee=Le(h).tasks.find(be=>be.id===x.dataset.taskId);ee&&(ee.done=x.checked),q()})})}await L()}const Qt={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},Xt={frozen:"已冻结",draft:"草稿",delivered:"已交付"},Xa={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},et=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],yt=[{id:"doc-hvac-7f",floorId:I.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:I.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:I.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:I.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],es={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},$t=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function m(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Da(a){const e=a.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面")||e.includes("屋顶")||e.includes("天面"))return 999;const t=e.match(/(-?\d+)/);if(!t)return 0;const r=Number(t[1]);return e.startsWith("B")||e.includes("地下")||e.includes("负")?-Math.abs(r):r}const wt={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function ua(a){const e=a.trim(),t=e.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test(t)||/屋面|屋顶|天面/.test(e))return"RF";const r=t.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(r)return`B${Number(r[1])}`;const o=e.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(o){const M=/^\d+$/.test(o[1])?Number(o[1]):wt[o[1]];if(M)return`B${M}`}if(/首层|一层/.test(e))return"1F";const p=e.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(p){const M=/^\d+$/.test(p[1])?Number(p[1]):wt[p[1]];if(M)return`${M}F`}const E=t.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return E?`${Number(E[1])}F`:null}function Fa(a){return new Promise((e,t)=>{const r=new FileReader;r.onload=()=>typeof r.result=="string"?e(r.result):t(new Error("无法读取图片内容")),r.onerror=()=>t(new Error(`读取文件「${a.name}」失败`)),r.readAsDataURL(a)})}function as(a){return a.category==="gateway"?a.name.includes("蓝牙")?"蓝牙适配器":"主控网关":a.category==="lighting"?a.name.includes("702")?"702 照明":a.name.slice(0,6):a.category==="hvac"?a.name.includes("VAV")?"VAV-02":a.name.includes("FCU")?"FCU-01":a.name.slice(0,6):a.category==="sensor"?"环境传感":a.name.slice(0,6)}function ts(a,e){const t=a.status!=="connected",r=e.filter(o=>o.hardwareBinding?.protocol===a.protocol);return r.length>0?r.map(o=>{const p=o.connectivity==="offline"||t;return{pointName:o.category==="hvac"?"送风温度 / 阀门开度":o.category==="lighting"?"回路开关 / 亮度反馈":o.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:o.name,value:p?"无上报":o.category==="hvac"?"23.4°C · 62%":o.category==="lighting"?"开启 · 80%":o.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:p?"46 分钟前":"12 秒前",quality:p?o.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${a.protocol.toUpperCase()} 采集通道汇总点`,deviceName:a.name,value:t?"采样延迟":"正常上报",interval:"60s",lastSeen:t?"38 分钟前":"9 秒前",quality:t?"delayed":"online"}]}async function ss(a,e,t){const r=new URLSearchParams(window.location.hash.split("?")[1]??""),o=r.get("sec");let p=o==="floors"||o==="projects"?"project_config":o==="floorplan"||o==="devices"||o==="inventory"?"devices":o==="network"||o==="network_topo"?"network_topo":o==="connections"?"connections":"overview",E=o==="inventory"?"list":"marking",M="binding",F="",T="all",G=Ba(),J=!1,D="",Q="device",ge="all",R="",X=!1,Y=!1,le="mesh",re=1,ve=0,de=0,V=await e.getSpatialTree(),ye=[],ne=[],Ee=[];const fe={...es},N=[];let K=G.level==="all-projects"?V.projects[0]?.id??I.projectId:G.projectId,ce=G.level==="building"||G.level==="floor"?G.buildingId:V.buildings.find(y=>y.projectId===K)?.id??V.buildings[0]?.id??I.buildingId,oe=G.level==="floor"?G.floorId:V.floors.find(y=>y.buildingId===ce&&y.id===I.floorId)?.id??V.floors.find(y=>y.buildingId===ce)?.id??I.floorId,pe=o==="floors"?oe:null,xe="all",Le="zones",L=r.get("new")==="project",B=!1,Te=!1,q=null,u=!1,$=!1,O=!1,n=!1,w=!1,P=null,Z=new Set,Ie=null,Ae=!1,$e=[];const W=[];let x=null,h=null,H=!1,ee=!1,be=null,b=null,se=3,ue=!1,Oe=[],We=null,me="",Se="";const Ne=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),Xe=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],Sa=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:I.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:I.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:I.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:I.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],Me=new Map;function ie(){L=!1,B=!1,Te=!1,q=null,u=!1,$=!1,O=!1,n=!1,w=!1,P=null}function ia(){return!!(L||B||Te||q||u||$||O||n||w||P)}const ca=y=>{if(!document.body.contains(a)){document.removeEventListener("keydown",ca);return}y.key==="Escape"&&(Ie?(Ie=null,j()):ia()?(ie(),j()):Y&&(Y=!1,ee=!1,j()))};document.addEventListener("keydown",ca);function Ze(){return V.floors}function Be(y){return[...V.floors.filter(g=>g.buildingId===y)].sort((g,k)=>Da(k.name)-Da(g.name))}function He(){return V.zones}function Fe(y){return[...y===I.floorId?ye:[],...N.filter(k=>k.floorId===y)]}function Ke(y){return y?He().find(g=>g.id===y)?.name.replace(/^7F\s*/,"")??y:"未分配功能区"}function ta(y){const g=V.buildings.find(_=>_.id===y);if(!g)return;K=g.projectId,ce=g.id;const k=Be(g.id);k.some(_=>_.id===oe)||(oe=k.find(_=>_.id===I.floorId)?.id??k[0]?.id??""),pe&&!k.some(_=>_.id===pe)&&(pe=null),G=va(oe?{level:"floor",projectId:g.projectId,buildingId:g.id,floorId:oe}:{level:"building",projectId:g.projectId,buildingId:g.id}),h=null,Y=!1,ee=!1,re=1,ve=0,de=0}function ra(y){oe=y;const g=Ze().find(k=>k.id===y);if(g){ce=g.buildingId;const k=V.buildings.find(_=>_.id===g.buildingId);k&&(K=k.projectId),G=va({level:"floor",projectId:K,buildingId:g.buildingId,floorId:g.id})}h=null,Y=!1,ee=!1,re=1,ve=0,de=0}async function ze(){Se="";const[y,g,k,_]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(I.floorId).catch(()=>[]),e.listConnections(K),e.listDeliveryBatches(I.floorId)]);if(V=y,ye=g,ne=k,Ee=_,V.projects.length===0)K="",ce="",oe="",pe=null;else{V.projects.some(l=>l.id===K)||(K=V.projects[0].id);const s=V.buildings.filter(l=>l.projectId===K);s.some(l=>l.id===ce)||(ce=s[0]?.id??"");const i=ce?Be(ce):[];i.some(l=>l.id===oe)||(oe=i.find(l=>l.id===I.floorId)?.id??i[0]?.id??""),pe&&!i.some(l=>l.id===pe)&&(pe=null)}const C=Fe(oe);h&&!C.some(s=>s.id===h)&&(h=null,Y=!1),H=C.find(s=>s.id===h)?.physicalInstalled??!1,j()}function da(){const y=a.querySelector('[data-role="dep-viewport"]');y&&(y.style.transform=`translate(${ve}px, ${de}px) scale(${re})`);const g=a.querySelector('[data-role="dep-zoom-label"]');g&&(g.textContent=`${Math.round(re*100)}%`)}function xa(y){Se="",y.connectivity==="offline"?Se=`单机回读自检未通过（FAIL）：「${y.name}」当前离线，请核查网关链路或中继覆盖。`:me=`单机回读自检通过（PASS）：「${y.name}」指令下发与状态回读一致，已安全复位。`,j()}function Ua(){Se="";const y=Fe(oe),g=y.filter(v=>v.connectivity==="offline"),k=y.length-g.length,_=new Date;We={ranAt:`${String(_.getHours()).padStart(2,"0")}:${String(_.getMinutes()).padStart(2,"0")}:${String(_.getSeconds()).padStart(2,"0")}`,total:y.length,passed:k,failed:g.length,failedNames:g.map(v=>v.name)},g.length>0?Se=`全层批量自检完成：${k}/${y.length} 台通过，${g.length} 台异常（${g.map(v=>v.name).join("、")}）。`:me=`全层批量自检全部通过（${k}/${y.length}），设备已自动安全复位。`,j()}function Va(){const y=Fe(oe),g=[],k=y.filter(i=>i.connectivity==="offline"),_=y.filter(i=>!i.planPoint),C=y.filter(i=>Ne.get(i.id)?.proxy).length,v=y.filter(i=>Ne.get(i.id)?.relay).length,s=y.length?v/y.length:0;k.length>0?k.forEach(i=>g.push({level:"fail",title:`节点不可达：${i.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:i.id})):g.push({level:"ok",title:"全网节点可达性正常",detail:`${y.length} 台设备均正常响应心跳。`}),C<1?g.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):g.push({level:"ok",title:`代理节点配置合理（${C} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),s>.25&&y.length>=4&&g.push({level:"warn",title:`中继比例偏高（${Math.round(s*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),_.length>0&&g.push({level:"warn",title:`尚有 ${_.length} 台未完成设备标记`,detail:"请在「设备管理 → 设备标记」中补齐平面坐标以便施工定位。"}),Oe=g,me=`已完成蓝牙 Mesh 网络体检（检测 ${y.length} 台节点，发现 ${g.filter(i=>i.level!=="ok").length} 项关注）。`,j()}function _a(){const y=Fe(oe),g=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...y.map(v=>[v.name,v.category,Ke(v.logicalZoneId),v.planPoint?`${Math.round(v.planPoint.x*100)}%/${Math.round(v.planPoint.y*100)}%`:"未标记",v.hardwareBinding?`${v.hardwareBinding.protocol} ${v.hardwareBinding.networkAddress}`:"未绑定",v.physicalInstalled?"已复核":"待复核",v.connectivity==="online"?"在线":"离线"].join(","))],k=new Blob([`\uFEFF${g.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),_=URL.createObjectURL(k),C=document.createElement("a");C.href=_,C.download="pacom-device-list.csv",C.click(),URL.revokeObjectURL(_)}function ea(y){const g=new Set(Be(y.id).map(_=>ua(_.name)??_.name.toUpperCase())),k=[];for(let _=1;_<=y.aboveFloors;_+=1){const C=`${_}F`;g.has(C)||k.push({kind:"above",level:_,name:C})}for(let _=1;_<=y.belowFloors;_+=1){const C=`B${_}`;g.has(C)||k.push({kind:"below",level:-_,name:C})}return y.hasRoof&&!g.has("RF")&&k.push({kind:"roof",level:99,name:"RF"}),k}async function Ha(y){const g=V.buildings.find(_=>_.id===y);if(!g)return 0;const k=ea(g);for(const _ of k)await e.upsertFloor?.({buildingId:g.id,kind:_.kind,level:_.level,name:_.name});return k.length}const Ga={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。",granularity:"building"},project_config:{title:"项目配置",subtitle:"在同一视图内贯通管理项目、园区楼宇、楼层平面底图、功能区与竣工图纸。",granularity:"project"},devices:{title:"设备管理",subtitle:"围绕当前楼层完成设备标记、设备列表核查、参数下发、自检与设备分组。",granularity:"floor"},network_topo:{title:"网络拓扑",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、环境等异构子系统通道及传感器采集质量。",granularity:"project"}};function aa(y,g="layers"){return`
      <div class="dep-empty-card">
        <div class="dep-empty-icon">${we(g,20)}</div>
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
      </div>`}function La(){const y=(g,k,_,C=!1)=>`
      <button type="button" class="pacom-unified-item" aria-current="${p===g}" data-dep-nav="${g}">
        ${we(k,16)}
        <span>${_}</span>
        ${C?'<span class="dep-rail-dot" title="有变更待同步至边缘网关"></span>':""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${y("overview","layout-dashboard","部署总览")}
          ${y("project_config","layers","项目配置")}
          ${y("devices","map-pin","设备管理")}
          ${y("network_topo","waypoints","网络拓扑",ue)}
          ${y("connections","plug","系统接入")}
        </div>
      </aside>
    `}function ja(y){return V.projects.length===0?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${y?"":"disabled"}>+ 新建项目</button>`:p==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出清单</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${y?"":"disabled"}>+ 交付冻结</button>
      `:p==="project_config"?`<button type="button" class="pacom-btn" data-open-new-proj="1" ${y?"":"disabled"}>+ 新建项目</button>`:p==="devices"?`${`
        <div class="pacom-tabs" role="tablist" aria-label="设备管理视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="marking"}" data-dev-subtab="marking">设备标记</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="list"}" data-dev-subtab="list">设备列表</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="groups"}" data-dev-subtab="groups">设备分组</button>
        </div>`}${E==="marking"?'<button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>':E==="list"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${y?"":"disabled"}>+ 新建分组</button>`}`:p==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${y?"":"disabled"}>${ue?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:`
      <button type="button" class="pacom-btn" data-edge-restart="service" ${y?"":"disabled"}>重启边缘服务</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${y?"":"disabled"}>+ 新增接入通道</button>
    `}function Aa(y){if(V.projects.length===0)return aa(y,"layout-dashboard");const g=ce?Be(ce):[],k=g.filter(l=>!!l.plan).length,_=g.flatMap(l=>Fe(l.id)),C=_.filter(l=>!!l.planPoint).length,v=_.filter(l=>l.connectivity==="online").length,s=_.filter(l=>l.physicalInstalled).length,i=g.filter(l=>Fe(l.id).length>0&&!ue).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${g.length>0&&k===g.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 项目与底图</span>
          <div class="pacom-kpi-value">${k}<span class="pacom-kpi-unit">/ ${g.length} 层</span></div>
          <span class="pacom-kpi-delta">${g.length>0&&k===g.length?"全部底图就绪":`尚缺 ${Math.max(0,g.length-k)} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="marking" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${_.length>0&&C===_.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${C}<span class="pacom-kpi-unit">/ ${_.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${Xe.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${_.length>0&&v===_.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${v}<span class="pacom-kpi-unit">/ ${_.length} 台</span></div>
          <span class="pacom-kpi-delta">${_.length-v>0?`${_.length-v} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${ue?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${i}<span class="pacom-kpi-unit">/ ${g.length} 层</span></div>
          <span class="pacom-kpi-delta">${ue?"有变更待下发 →":`基线 v${se}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="list" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${_.length>0&&s===_.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${s}<span class="pacom-kpi-unit">/ ${_.length} 台</span></div>
          <span class="pacom-kpi-delta">${_.length>0&&s===_.length?"可交付冻结":`待复核 ${_.length-s} 台 →`}</span>
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
                ${g.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前楼宇暂无楼层</strong><span>请先在「项目配置」中生成楼层并上传底图。</span></div></td></tr>':g.map(l=>{const c=Fe(l.id),z=He().filter(_e=>_e.floorId===l.id),S=c.filter(_e=>!!_e.planPoint).length,ae=c.filter(_e=>_e.connectivity==="online").length,qe=c.filter(_e=>_e.physicalInstalled).length,Ce=!!l.plan,De=Ce&&c.length>0&&S===c.length&&qe===c.length&&ae===c.length&&!ue;return`
                            <tr>
                              <td><strong>${m(l.name)}</strong><div class="pacom-row-sub">${l.areaSqm?`${l.areaSqm} m²`:"待补面积"}</div></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-expand="1" data-matrix-floor="${m(l.id)}"><span class="pacom-dot ${Ce?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${Ce?`已传图 · ${z.length} 区`:"待传底图"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="marking" data-matrix-floor="${m(l.id)}"><span class="pacom-dot ${c.length>0&&S===c.length?"pacom-dot--online":c.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${c.length>0?`${S}/${c.length}`:"未标记"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${m(l.id)}"><span class="pacom-dot ${c.length>0&&ae===c.length?"pacom-dot--online":c.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${c.length>0?`${ae}/${c.length}`:"—"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${m(l.id)}"><span class="pacom-dot ${c.length===0?"pacom-dot--offline":ue?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${c.length===0?"—":ue?"待同步":`v${se}`}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="list" data-matrix-floor="${m(l.id)}"><span class="pacom-dot ${c.length>0&&qe===c.length?"pacom-dot--online":c.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${c.length>0?`${qe}/${c.length}`:"—"}</span></button></td>
                              <td style="text-align:right;"><span class="pacom-badge ${De?"pacom-badge--online":c.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${De?"可验收交付":c.length>0?"实施中":"待配置"}</span></td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${We?`<div class="pacom-banner ${We.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${We.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${We.passed}/${We.total} 台${We.failedNames.length?` · 异常：${We.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${Ee.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${Ee.map(l=>`
                    <tr>
                      <td><div style="font-weight:450;">${m(l.versionTag)}</div><div class="pacom-row-sub"><code>${m(l.id)}</code></div></td>
                      <td><strong>${l.verifiedCount}</strong> / ${l.deviceCount} 台</td>
                      <td><div>${m(l.frozenBy)}</div><div class="pacom-row-sub">${m(l.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${Xt[l.status]??l.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Wa(y){if(V.projects.length===0)return aa(y,"layers");const g=V.projects.find(S=>S.id===K)??V.projects[0],k=V.buildings.filter(S=>S.projectId===g.id),_=k.reduce((S,ae)=>S+Be(ae.id).length,0),C=k.find(S=>S.id===ce)??k[0]??null,v=C?Be(C.id):[],s=v.filter(S=>!S.plan).length,i=v.filter(S=>He().filter(ae=>ae.floorId===S.id).length===0).length,l=v.filter(S=>xe==="missing_plan"?!S.plan:xe==="missing_zone"?He().filter(ae=>ae.floorId===S.id).length===0:!0),c=C?ea(C):[],z=g.location?`${g.location.lng.toFixed(4)}, ${g.location.lat.toFixed(4)}`:"未设置坐标";return`
      <div class="dep-project-strip">
        <div class="dep-project-strip-main">
          <div class="dep-project-cover">
            <img src="${m(g.imageUrl??"./media/gzlab.jpg")}" alt="${m(g.name)}" />
          </div>
          <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">${m(g.name)}</strong>
              <span class="pacom-badge pacom-badge--neutral">${k.length} 栋楼宇</span>
              <span class="pacom-badge pacom-badge--neutral">${_} 个楼层</span>
            </div>
            <span class="pacom-row-sub">${m(g.city||"未填城市")}${g.address?` · ${m(g.address)}`:""} · 坐标 ${m(z)}</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-edit-proj="1" ${y?"":"disabled"}>编辑项目</button>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <div>
            <h2 class="pacom-section-title">园区楼宇（${k.length} 栋）</h2>
            <span class="pacom-row-sub">点击楼宇卡片切换下方楼层列表，点「编辑参数」修改外观与层数</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-bld="1" ${y?"":"disabled"}>+ 新建楼宇</button>
        </div>
        ${k.length===0?`
            <div class="dep-empty-card">
              <div class="dep-empty-icon">${we("building-2",20)}</div>
              <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${m(g.name)} 暂无楼宇</strong>
              <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
              <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${y?"":"disabled"}>+ 添加第一栋楼宇</button>
            </div>`:`
            <div class="dep-building-grid">
              ${k.map(S=>{const ae=Be(S.id),qe=ae.filter(Re=>!!Re.plan).length,Ce=ae.length>0?Math.round(qe/ae.length*100):0,De=ea(S),_e=C?.id===S.id,he=ae.length===0?"pacom-badge--neutral":qe===ae.length?"pacom-badge--online":"pacom-badge--warning";return`
                    <article class="dep-building-card ${_e?"is-active":""}" data-select-building="${m(S.id)}">
                      <div class="dep-building-stage">
                        <img src="${m(S.imageUrl??"./media/building-e.webp")}" alt="${m(S.name)}" />
                      </div>
                      <div class="dep-building-body">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${m(S.name)}</strong>
                          <span class="pacom-badge ${he}">${ae.length===0?"未建层":`${qe}/${ae.length} 底图`}</span>
                        </div>
                        <div class="pacom-row-sub">地上 ${S.aboveFloors} 层${S.belowFloors>0?` · 地下 ${S.belowFloors} 层`:""}${S.hasRoof?" · RF":""}${S.areaSqm?` · ${S.areaSqm} m²`:""}</div>
                        <div class="pacom-progress-track">
                          <div class="pacom-progress-fill" style="width:${Ce}%; background:${Ce===100?"var(--pacom-status-online)":"var(--pacom-accent-solid)"};"></div>
                        </div>
                        ${De.length>0?`<div style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:12px; color:var(--pacom-text-secondary);">
                                 <span>尚缺 ${De.length} 个楼层</span>
                                 <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="height:22px; padding:0 6px; font-size:12px;" data-fill-missing-floors="${m(S.id)}" ${y?"":"disabled"}>一键补齐</button>
                               </div>`:""}
                      </div>
                      <div class="dep-building-foot">
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${m(S.id)}" ${y?"":"disabled"}>编辑参数</button>
                        <span class="pacom-row-sub" style="font-size:12px; color:${_e?"var(--pacom-accent-fg)":"var(--pacom-text-secondary)"};">${_e?"当前查看中":"点击切换楼层"}</span>
                      </div>
                    </article>`}).join("")}
              <button type="button" class="dep-building-add-card" data-open-new-bld="1" ${y?"":"disabled"}>
                ${we("plus",20)}
                <span style="font-size:13px;">新建楼宇</span>
              </button>
            </div>`}
      </section>

      ${C?`
          <section class="pacom-section">
            <div class="pacom-section-head">
              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <h2 class="pacom-section-title">${m(C.name)} 楼层与底图（${v.length}）</h2>
                <div class="pacom-count-pills">
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${xe==="all"}" data-floor-list-filter="all">全部 <span class="pacom-count-num">${v.length}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${xe==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 <span class="pacom-count-num">${s}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${xe==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 <span class="pacom-count-num">${i}</span></button>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                ${c.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${m(C.id)}" ${y?"":"disabled"}>一键补齐 ${c.length} 层</button>`:""}
                <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-floor="1" ${y?"":"disabled"}>+ 新增楼层</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-batch-modal="1" ${y?"":"disabled"}>批量导入底图</button>
              </div>
            </div>

            ${v.length===0?`
                <div class="dep-empty-card">
                  <div class="dep-empty-icon">${we("layers",20)}</div>
                  <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${m(C.name)} 暂无楼层</strong>
                  <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${m(C.id)}" ${y?"":"disabled"}>一键生成全部楼层</button>
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
                        ${l.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':l.map(S=>{const ae=He().filter(he=>he.floorId===S.id),qe=[...yt,...W].filter(he=>he.floorId===S.id),Ce=Fe(S.id),De=pe===S.id,_e=v.filter(he=>he.id!==S.id);return`
                                    <tr>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:7px;">
                                          <span class="pacom-dot ${S.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                          <strong>${m(S.name)}</strong>
                                        </div>
                                      </td>
                                      <td><span class="pacom-row-sub">${S.areaSqm?`${S.areaSqm} m²`:"—"}</span></td>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:8px;">
                                          ${S.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${m(C.name)} ${m(S.name)} 平面底图" data-lb-src="${m(S.plan.imageUrl)}" title="查看大图"><img src="${m(S.plan.imageUrl)}" alt="${m(S.name)}" /></button>
                                                 <span class="pacom-badge pacom-badge--online">已就绪</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                          <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="cursor:pointer; height:24px; padding:0 6px; font-size:12px;">
                                            <span>${S.plan?"替换":"上传"}</span>
                                            <input type="file" name="floorPlan_${m(S.id)}" accept="image/*" data-upload-floor="${m(S.id)}" style="display:none;" ${y?"":"disabled"} />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        ${ae.length>0?`<span>${ae.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${m(ae.slice(0,2).map(he=>he.name.replace(/^7F\s*/,"")).join("、"))}${ae.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                                      </td>
                                      <td><span class="pacom-row-sub">${qe.length} 份</span></td>
                                      <td>
                                        <div style="display:flex; justify-content:flex-end; gap:6px;">
                                          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-expand-floor="${m(S.id)}">${De?"收起配置":"展开配置"}</button>
                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${m(S.id)}">设备标记 →</button>
                                        </div>
                                      </td>
                                    </tr>
                                    ${De?`
                                        <tr class="pacom-table-detail-row">
                                          <td colspan="6">
                                            <div class="dep-floor-expand-grid">
                                              <div class="dep-floor-expand-col">
                                                <div class="dep-plan-preview-box" style="min-height:260px;" data-single-floor-drop="${m(S.id)}">
                                                  <div class="dep-plan-toolbar">
                                                    ${S.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${m(C.name)} ${m(S.name)} 平面底图" data-lb-src="${m(S.plan.imageUrl)}">查看大图</button>`:""}
                                                    <label class="dep-plan-tool-btn" style="cursor:pointer;">
                                                      <span>${S.plan?"替换底图":"上传底图"}</span>
                                                      <input type="file" name="floorPlanDrop_${m(S.id)}" accept="image/*" data-upload-floor="${m(S.id)}" style="display:none;" ${y?"":"disabled"} />
                                                    </label>
                                                    ${S.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${m(S.id)}" ${y?"":"disabled"}>清空</button>`:""}
                                                  </div>
                                                  ${S.plan?`<img src="${m(S.plan.imageUrl)}" alt="${m(S.name)} 平面图" style="width:100%; max-height:290px; object-fit:contain; display:block;" />`:`<div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:24px; text-align:center;">
                                                           <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${m(S.name)} 2D 平面图到此处</strong>
                                                           <span class="pacom-row-sub">支持透明 WebP / PNG / JPG</span>
                                                         </div>`}
                                                </div>
                                              </div>

                                              <div class="dep-floor-expand-col">
                                                <div class="pacom-settings-card" style="padding:10px 16px;">
                                                  <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                                                    <form data-save-floor="${m(S.id)}" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                                                      <input class="pacom-input" name="fName" value="${m(S.name)}" aria-label="楼层名称" style="width:76px; height:32px; flex:none;" required ${y?"":"disabled"} />
                                                      <input class="pacom-input" name="fArea" type="number" step="0.1" value="${m(S.areaSqm??"")}" placeholder="面积 m²" aria-label="建筑面积" style="width:110px; height:32px; flex:none;" ${y?"":"disabled"} />
                                                      <button type="submit" class="pacom-btn" ${y?"":"disabled"}>保存</button>
                                                    </form>
                                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-delete-floor="${m(S.id)}" ${!y||Ce.length>0?`disabled title="${Ce.length>0?`已关联 ${Ce.length} 台设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                                                  </div>
                                                </div>

                                                <div class="pacom-settings-card" style="padding:4px 16px;">
                                                  <div class="pacom-setting-row" style="padding:10px 0; justify-content:space-between; gap:8px;">
                                                    <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${Le==="zones"}" data-floor-detail-tab="zones">功能区（${ae.length}）</button>
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${Le==="docs"}" data-floor-detail-tab="docs">竣工图纸与手册（${qe.length}）</button>
                                                    </div>
                                                    ${Le==="zones"?ae.length>0&&_e.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-open-copy-zones="${m(S.id)}" ${y?"":"disabled"}>复用至其他层…</button>`:"":`<label class="pacom-btn pacom-btn--sm" style="cursor:pointer;"><span>+ 关联文件</span><input type="file" name="attachDoc_${m(S.id)}" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${m(S.id)}" style="display:none;" ${y?"":"disabled"} /></label>`}
                                                  </div>
                                                  ${Le==="zones"?`
                                                        ${ae.length===0?`
                                                            <div class="pacom-setting-row" style="padding:10px 0; flex-direction:column; align-items:flex-start; gap:8px;">
                                                              <span class="pacom-row-sub">暂未划分功能区，可一键套用常用模板：</span>
                                                              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                                                ${$t.map(he=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${m(he.key)}" data-tpl-floor="${m(S.id)}" ${y?"":"disabled"}>+ ${m(he.label)}</button>`).join("")}
                                                              </div>
                                                            </div>`:ae.map(he=>x===he.id?`
                                                                      <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-save-edit-zone="${m(he.id)}" data-zone-floor="${m(S.id)}">
                                                                        <input class="pacom-input" name="zName" value="${m(he.name)}" style="width:180px; height:30px; flex:none;" required />
                                                                        <select class="pacom-select" name="zCat" style="width:110px; height:30px;">
                                                                          ${Object.keys(Xa).map(Re=>`<option value="${Re}" ${he.category===Re?"selected":""}>${Xa[Re]}</option>`).join("")}
                                                                        </select>
                                                                        <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                                                      </form>`:`
                                                                      <div class="pacom-setting-row" style="padding:9px 0;">
                                                                        <div class="pacom-setting-meta" style="min-width:140px;">
                                                                          <span class="pacom-setting-title">${m(he.name)} <span class="pacom-badge pacom-badge--neutral">${m(Xa[he.category]??he.category)}</span></span>
                                                                        </div>
                                                                        <div class="pacom-setting-control">
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${m(he.id)}" ${y?"":"disabled"}>编辑</button>
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${m(he.id)}" ${y?"":"disabled"}>删除</button>
                                                                        </div>
                                                                      </div>`).join("")}
                                                        <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-add-zone="${m(S.id)}">
                                                          <input class="pacom-input" name="zoneName" placeholder="新功能区名称（如：${m(S.name)} 东侧实验区）" style="width:210px; height:32px; flex:none;" required ${y?"":"disabled"} />
                                                          <select class="pacom-select" name="zoneCat" style="width:112px; height:32px;" ${y?"":"disabled"}>
                                                            <option value="lab">实验区</option>
                                                            <option value="office">办公区</option>
                                                            <option value="meeting">会议室</option>
                                                            <option value="corridor">走廊/公区</option>
                                                            <option value="utility">机房/后勤</option>
                                                            <option value="outdoor">露台/活动区</option>
                                                          </select>
                                                          <button type="submit" class="pacom-btn" ${y?"":"disabled"}>+ 添加</button>
                                                        </form>`:qe.length===0?'<div class="pacom-setting-row" style="padding:12px 0;"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':qe.map(he=>`
                                                              <div class="pacom-setting-row" style="padding:9px 0;">
                                                                <div class="pacom-setting-meta" style="min-width:140px;">
                                                                  <span class="pacom-setting-title">${m(he.name)}</span>
                                                                  <span class="pacom-row-sub">${m(he.category)} · ${m(he.size)} · ${m(he.updatedAt)}</span>
                                                                </div>
                                                                <div class="pacom-setting-control">
                                                                  <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${m(he.id)}">查阅</button>
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
    `}function Za(y){if(!Y||p!=="devices"||E==="groups")return"";const k=Fe(oe).find(s=>s.id===h)??null;if(!k)return"";const _=Ne.get(k.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${oe.slice(-4)}`},C=Xe.filter(s=>s.deviceId===k.id),v=Me.get(k.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450};return`
      <aside class="pacom-drawer" style="width:376px;" aria-label="设备配置抽屉">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${m(k.name)}</h2>
            <div class="pacom-row-sub">${m(Ke(k.logicalZoneId))} · v${k.version}</div>
          </div>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${we("x",16)}</button>
        </div>

        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${y?"":"disabled"}>${ee?"点击图纸定位中…":"点图更新坐标"}</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${m(k.id)}">Ping 闪灯 5s</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${M==="binding"}" data-drawer-tab="binding">绑定与安装</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${M==="params"}" data-drawer-tab="params">自治参数</button>
        </div>

        ${M==="binding"?`
            ${k.category==="lighting"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">回路可视化灯点（${C.length}）</span>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${m(k.id)}" ${y?"":"disabled"}>+ 添加灯点</button>
                  </div>
                  ${C.map(s=>`
                      <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                        <span><strong>${m(s.channel)}</strong> · ${m(s.label)}</span>
                        <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:12px;" data-del-light-marker="${m(s.id)}" ${y?"":"disabled"}>删除</button>
                      </div>`).join("")}
                </div>`:""}

            ${k.category!=="hvac"&&k.category!=="meter"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                    <code style="font-size:12px;">${m(_.meshUuid)}</code>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Proxy 代理（建议每层 2–3 个）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${_.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${m(k.id)}" ${y?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${_.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${m(k.id)}" ${y?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                </div>`:""}

            <form data-role="binding-form" class="pacom-control-box" style="gap:10px;">
              <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">通信协议</span>
                  <select class="pacom-select" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(s=>`<option value="${s}" ${k.hardwareBinding?.protocol===s?"selected":""}>${s.toUpperCase()}</option>`).join("")}
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">网络地址 / 主题</span>
                  <input class="pacom-input" name="networkAddress" placeholder="地址或主题" value="${m(k.hardwareBinding?.networkAddress??"")}" />
                </label>
              </div>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:10px;">
                <label class="dep-field" style="flex:1;">
                  <span class="dep-field-label">端口 / 回路</span>
                  <input class="pacom-input" name="portOrChannel" placeholder="端口或回路" value="${m(k.hardwareBinding?.portOrChannel??"")}" />
                </label>
                <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; height:32px; flex-shrink:0;">
                  <span>物理已复核</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${H}" data-toggle-phys="1" ${y?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                </span>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${y?"":"disabled"}>保存绑定与复核（v${k.version}）</button>
            </form>`:`
            <form data-save-dev-params="${m(k.id)}" class="pacom-control-box" style="gap:10px;">
              <div>
                <div style="font-size:14px; font-weight:450;">人感与光感自治参数</div>
                <div class="pacom-row-sub">自动关灯延时、恢复自动延时与光照度门限</div>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${v.offDelayMin}" ${y?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" value="${v.restoreMin}" ${y?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" value="${v.luxOn}" ${y?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" value="${v.luxOff}" ${y?"":"disabled"} /></label>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${y?"":"disabled"}>下发设备参数</button>
            </form>`}
      </aside>
    `}function Ye(y){if(V.projects.length===0)return`
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${aa(y,"map-pin")}</div>
        </main>`;const g=ce?Be(ce):[],k=g.find(l=>l.id===oe)??g[0],_=Fe(oe),C=He().filter(l=>l.floorId===oe),v=Y?_.find(l=>l.id===h)??null:null,s=R.trim().toLowerCase(),i=_.filter(l=>!(ge==="unverified"&&l.physicalInstalled||ge==="unplaced"&&l.planPoint||s&&!`${l.name} ${Ke(l.logicalZoneId)}`.toLowerCase().includes(s)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${we("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${m(R)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${X?"is-active":""}" data-toggle-hud-pool="1">设备池 ${_.length}</button>
            <button type="button" class="pacom-hud-pill" data-open-new-dev="1" ${y?"":"disabled"}>+ 新增设备</button>
          </div>

          ${X?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${m(k?.name??"7F")} 设备池（${i.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${we("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-count-pills">
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ge==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${_.length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ge==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${_.filter(l=>!l.physicalInstalled).length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ge==="unplaced"}" data-dev-filter="unplaced">未标记 <span class="pacom-count-num">${_.filter(l=>!l.planPoint).length}</span></button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${i.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':i.map(l=>`
                            <div class="pacom-row ${l.id===h&&Y?"is-selected":""}" data-pick-dev="${m(l.id)}" style="padding:8px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${m(l.name)}</div>
                                <div class="pacom-row-sub">${m(Ke(l.logicalZoneId))} · ${l.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${l.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${l.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${ee?"crosshair":"grab"};">
          ${k?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${ve}px, ${de}px) scale(${re});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${m(k.plan.imageUrl)}" alt="${m(k.name)} 平面图" />
                  ${Q==="zone"?C.map(l=>{const c=fe[l.id];return c?`<div class="pacom-zone-hotspot is-active" style="left:${c.left}%; top:${c.top}%; width:${c.width}%; height:${c.height}%;"><span class="pacom-zone-tag">${m(l.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${_.filter(l=>l.planPoint).map(l=>`
                      <button type="button" class="pacom-pin ${l.id===h&&Y?"is-selected":""} ${l.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(l.planPoint.x*100).toFixed(2)}%; top:${(l.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${m(l.id)}" title="${m(l.name)}">
                        <span class="pacom-dot ${l.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${m(as(l))}</span>
                      </button>`).join("")}
                  ${Q==="light_marker"||v?.category==="lighting"?Xe.filter(l=>_.some(c=>c.id===l.deviceId)).map(l=>`
                            <span class="dep-light-dot" style="left:${(l.x*100).toFixed(1)}%; top:${(l.y*100).toFixed(1)}%;" title="${m(l.label)}（${m(l.channel)}）">
                              ${we("sparkles",12)}<span>${m(l.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${m(oe)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${g.map(l=>`
              <button type="button" class="pacom-elev-item ${l.id===oe?"is-active":""}" data-scrubber-floor="${m(l.id)}" title="${m(l.name)}${l.plan?" · 已传底图":" · 待传底图"}">
                ${l.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${m(l.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${Q==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${Q==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${Q==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${we("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(re*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${we("plus",16)}</button>
        </div>
      </main>
    `}function f(y){if(V.projects.length===0)return aa(y,"list");const g=Fe(oe),k=F.trim().toLowerCase(),_=g.filter(v=>!(T==="online"&&v.connectivity!=="online"||T==="offline"&&v.connectivity!=="offline"||T==="unverified"&&v.physicalInstalled||k&&!`${v.name} ${Ke(v.logicalZoneId)} ${v.hardwareBinding?.protocol??""}`.toLowerCase().includes(k))),C=g.filter(v=>v.connectivity==="online").length;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${m(F)}" aria-label="搜索设备列表" />
          <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
            <option value="all" ${T==="all"?"selected":""}>全部状态（${g.length}）</option>
            <option value="online" ${T==="online"?"selected":""}>仅看在线（${C}）</option>
            <option value="offline" ${T==="offline"?"selected":""}>仅看离线（${g.length-C}）</option>
            <option value="unverified" ${T==="unverified"?"selected":""}>待物理复核（${g.filter(v=>!v.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${we("refresh-cw",16)}</button>
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
              ${_.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词、切换筛选，或点击「+ 新增设备」。</span></div></td></tr>':_.map(v=>`
                        <tr style="cursor:pointer;" data-open-dev-drawer="${m(v.id)}">
                          <td><div style="font-weight:450;">${m(v.name)}</div><div class="pacom-row-sub">${m(Ke(v.logicalZoneId))} · v${v.version}</div></td>
                          <td><span class="pacom-badge ${v.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${v.planPoint?`${Math.round(v.planPoint.x*100)}%,${Math.round(v.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${v.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${v.hardwareBinding?v.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${v.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${v.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${v.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${v.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${m(v.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-dev-params="${m(v.id)}">配置</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${m(v.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${_.length} / ${g.length} 台设备 · ${C} 在线 · ${g.length-C} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dev-subtab="marking">切换至设备标记 →</button>
        </div>
      </div>
    `}function A(y){if(V.projects.length===0)return aa(y,"folder-kanban");const g=Sa.filter(C=>C.floorId===oe||oe===I.floorId&&C.floorId===I.floorId),k=g.filter(C=>C.track==="mesh_auto"),_=g.filter(C=>C.track==="cloud_biz");return`
      <div class="pacom-grid-2">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${k.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${k.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':k.map(C=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${m(C.name)} <span class="pacom-badge pacom-badge--neutral">${m(C.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${C.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${m(C.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${_.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${_.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':_.map(C=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${m(C.name)} <span class="pacom-badge pacom-badge--neutral">${m(C.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${C.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${m(C.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>
      </div>
    `}function U(y){if(V.projects.length===0)return aa(y,"waypoints");const g=Fe(oe),k=He().filter(c=>c.floorId===oe),_=g.filter(c=>c.category!=="hvac"&&c.category!=="meter"),C=_.filter(c=>Ne.get(c.id)?.proxy).length,v=_.filter(c=>Ne.get(c.id)?.relay).length,s=g.filter(c=>c.category==="gateway"),i=g.filter(c=>Ne.get(c.id)?.relay||Ne.get(c.id)?.proxy),l=g.filter(c=>c.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge ${ue?"pacom-badge--warning":"pacom-badge--online"}">${ue?"有变更待同步":"协同锁空闲 · 已同步"}</span>
            <span class="pacom-row-sub">Mesh 节点 ${_.length} 台 · Proxy ${C} 个 · Relay ${v} 个 · 边缘基线 v${se}</span>
          </div>
        </div>
        ${Oe.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${Oe.map(c=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${m(c.title)}</strong> <span class="pacom-row-sub">· ${m(c.detail)}</span></div>
                      <span class="pacom-badge ${c.level==="ok"?"pacom-badge--online":c.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${c.level==="ok"?"通过":c.level==="warn"?"建议优化":"异常"}</span>
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
                ${s.length===0?'<div class="pacom-row-sub">本层暂未配置网关节点。</div>':s.map(c=>`
                          <button type="button" class="dep-topo-node ${c.connectivity==="offline"?"is-issue":""}" data-topo-jump="${m(c.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(c.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                            <span class="pacom-row-sub">${m(c.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                          </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${i.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，可在「设备管理」抽屉中为传感器开启。</div>':i.map(c=>{const z=Ne.get(c.id);return`
                            <button type="button" class="dep-topo-node ${c.connectivity==="offline"?"is-issue":""}" data-topo-jump="${m(c.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(c.name)}</strong><span class="pacom-badge pacom-badge--accent">${z?.proxy?"Proxy":""}${z?.proxy&&z?.relay?" + ":""}${z?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${m(Ke(c.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${l.length===0?'<div class="pacom-row-sub">本层暂无末端设备。</div>':l.map(c=>`
                          <button type="button" class="dep-topo-node ${c.connectivity==="offline"?"is-issue":""}" data-topo-jump="${m(c.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(c.name)}</strong><span class="pacom-badge ${c.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${c.connectivity==="online"?"在线":"离线"}</span></div>
                            <span class="pacom-row-sub">${m(Ke(c.logicalZoneId))} · ${m(c.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                          </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${g.filter(c=>c.category==="sensor"||c.category==="gateway").map(c=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${m(c.id)}">
                      <strong>${m(c.name)}</strong>
                      <span class="pacom-row-sub">${c.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${g.filter(c=>c.category==="lighting"||c.category==="hvac").map(c=>`
                    <button type="button" class="dep-topo-node ${c.connectivity==="offline"?"is-issue":""}" data-topo-jump="${m(c.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(c.name)}</strong><span class="pacom-badge ${c.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${c.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${m(Ke(c.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${k.map(c=>{const z=g.filter(ae=>ae.logicalZoneId===c.id),S=z.some(ae=>ae.connectivity==="offline");return`
                      <div class="dep-topo-node ${S?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(c.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${S?"pacom-badge--warning":"pacom-badge--online"}">${z.length} 台设备</span></div>
                        <span class="pacom-row-sub">${S?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function te(y){if(V.projects.length===0)return aa(y,"plug");const g=ne.reduce((v,s)=>v+s.collectedPoints,0),k=ne.reduce((v,s)=>v+s.calculatedPoints,0),_=ne.filter(v=>v.status==="connected").length,C=ne.filter(v=>v.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${_}<span class="pacom-kpi-unit">/ ${ne.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${ne.length?Math.round(_/ne.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${g}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${k}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${C.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${C.length} 条采集通道通信降级（${C.map(v=>v.name).join("、")}）</span>
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
                ${ne.map(v=>{const s=Qt[v.status]??{label:v.status,cls:"pacom-badge--neutral"},i=v.status==="connected"?98:v.status==="degraded"?62:0,l=i>=75?"var(--pacom-status-online)":i>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",c=b===v.id,z=c?ts(v,ye):[];return`
                      <tr>
                        <td><strong>${m(v.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${v.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${m(v.endpoint)}</code></td>
                        <td>采集 ${v.collectedPoints} / 计算 ${v.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${s.cls}">${s.label}</span>
                            <span class="pacom-row-sub">${i}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${i}%; background:${l};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${m(v.id)}">${c?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${m(v.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${m(v.id)}" data-endpoint-val="${m(v.endpoint)}">${be===v.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${c?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${m(v.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${z.map(S=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${m(S.deviceName)}</strong> · ${m(S.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${m(S.value)} · ${m(S.lastSeen)}</span>
                                        <span class="pacom-badge ${S.quality==="online"?"pacom-badge--online":S.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${S.quality==="online"?"在线正常":S.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function je(y){const g=[],k=V.projects.find(v=>v.id===K)??V.projects[0]??null,_=V.buildings.find(v=>v.id===ce)??(k?V.buildings.find(v=>v.projectId===k.id):null)??null;if(L&&g.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
          <form class="dep-modal-card" data-create-project="1">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建项目</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${we("x",16)}</button>
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
        </div>`),B&&k){const s=V.buildings.filter(i=>i.projectId===k.id).reduce((i,l)=>i+Be(l.id).reduce((c,z)=>c+Fe(z.id).length,0),0);g.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
          <form class="dep-modal-card" data-save-project="${m(k.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑项目：${m(k.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${we("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${m(k.imageUrl??"./media/gzlab.jpg")}" alt="${m(k.name)}" style="width:84px; height:54px; object-fit:cover; border-radius:6px; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">项目封面图</div>
                  <div class="pacom-row-sub">用于空间总览的园区俯瞰展示</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>更换封面</span>
                  <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${m(k.id)}" style="display:none;" ${y?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${m(k.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${m(k.city??"")}" /></label>
                <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${m(k.address??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${m(k.location?.lng??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${m(k.location?.lat??"")}" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${m(k.id)}" ${!y||s>0?`disabled title="${s>0?`包含 ${s} 台运行中设备，请先解绑后再删除`:"只读"}"`:""}>删除项目</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${y?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}Te&&k&&g.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
          <form class="dep-modal-card" data-create-bld="${m(k.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建楼宇（${m(k.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${we("x",16)}</button>
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
        </div>`);const C=q?V.buildings.find(v=>v.id===q)??null:null;if(C){const v=Be(C.id),s=v.reduce((l,c)=>l+Fe(c.id).length,0),i=ea(C);g.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
          <form class="dep-modal-card" data-save-building="${m(C.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑楼宇：${m(C.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${we("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${m(C.imageUrl??"./media/building-e.webp")}" alt="${m(C.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:6px; background:#fff; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">楼宇外观 / 白模图</div>
                  <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>替换图片</span>
                  <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${m(C.id)}" style="display:none;" ${y?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${m(C.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${m(C.areaSqm??"")}" placeholder="选填" /></label>
                <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${C.aboveFloors}" /></label>
                <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${C.belowFloors}" /></label>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                <label style="display:inline-flex; align-items:center; gap:6px; font-size:13px;"><input type="checkbox" name="bRoof" ${C.hasRoof?"checked":""} />含屋面层 (RF)</label>
                ${i.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${m(C.id)}">一键补齐缺失 ${i.length} 层</button>`:`<span class="pacom-row-sub">已配置 ${v.length} 个楼层</span>`}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${m(C.id)}" ${!y||s>0?`disabled title="${s>0?"包含运行中设备，请先解绑后再删除":"只读"}"`:""}>删除楼宇</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${y?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}if(u&&_&&g.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
          <form class="dep-modal-card" data-create-floor="${m(_.id)}" style="width:min(420px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增楼层（${m(_.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${we("x",16)}</button>
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
        </div>`),$&&_){const v=Be(_.id),s=$e.filter(i=>!!i.matchedFloorId).length;g.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
          <div class="dep-modal-card dep-modal-card--wide">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">批量导入 ${m(_.name)} 平面底图</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${we("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-upload-drop" data-batch-dropzone="${m(_.id)}" style="padding:20px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${Ae?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
                <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
                <span class="pacom-row-sub">自动识别 01F、首层、屋面、RF、B1 等中英文文件名，支持手动调整对应楼层</span>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; margin-top:4px;">
                  <span>选择多张图片</span>
                  <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${m(_.id)}" style="display:none;" ${y?"":"disabled"} />
                </label>
              </div>
              ${$e.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                      <div class="pacom-row-sub">已选 ${$e.length} 张图片，已匹配 ${s} 层：</div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:6px; max-height:220px; overflow-y:auto;">
                        ${$e.map(i=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${m(i.file.name)}">${m(i.file.name)}</span>
                              <select class="pacom-select" name="overrideFloor_${m(i.id)}" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${m(i.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${v.map(l=>`<option value="${m(l.id)}" ${i.matchedFloorId===l.id?"selected":""}>${m(l.name)}</option>`).join("")}
                              </select>
                            </div>`).join("")}
                      </div>
                    </div>`:""}
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-batch-upload="1" ${$e.length===0?"disabled":""}>清空已选</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">关闭</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-batch-upload="1" ${s===0?"disabled":""}>确认导入（${s} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(P&&_){const v=Ze().find(i=>i.id===P),s=Be(_.id).filter(i=>i.id!==P);v&&s.length>0&&g.push(`
          <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
            <div class="dep-modal-card">
              <div class="dep-modal-head">
                <strong style="font-size:15px; font-weight:500;">复用 ${m(v.name)} 功能区至其他楼层</strong>
                <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${we("x",16)}</button>
              </div>
              <div class="dep-modal-body">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <span class="pacom-row-sub">勾选目标楼层（已选 ${Z.size} 层）</span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                  </div>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${s.map(i=>{const l=Z.has(i.id),c=He().filter(z=>z.floorId===i.id).length;return`
                        <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${l}">
                          <input type="checkbox" name="copyFloor_${m(i.id)}" data-copy-target-floor="${m(i.id)}" ${l?"checked":""} style="margin:0;" />
                          <span>${m(i.name)}${c>0?` (${c}区)`:""}</span>
                        </label>`}).join("")}
                </div>
              </div>
              <div class="dep-modal-foot">
                <span></span>
                <div style="display:flex; gap:8px;">
                  <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                  <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${m(v.id)}" ${Z.size===0?"disabled":""}>确认复制（${Z.size} 层）</button>
                </div>
              </div>
            </div>
          </div>`)}if(O){const v=He().filter(s=>s.floorId===oe);g.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
          <form class="dep-modal-card" data-create-dev="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增设备</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${we("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">设备名称</span>
                <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">设备类型</span>
                  <select class="pacom-select" name="devPreset">${et.map(s=>`<option value="${s.key}">${s.label}</option>`).join("")}</select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">所属功能区</span>
                  <select class="pacom-select" name="devZone">
                    <option value="">暂不分配</option>
                    ${v.map(s=>`<option value="${m(s.id)}">${m(s.name)}</option>`).join("")}
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
        </div>`)}return n&&g.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建分组">
          <form class="dep-modal-card" data-create-group="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建设备分组</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${we("x",16)}</button>
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
        </div>`),w&&g.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增接入通道">
          <form class="dep-modal-card" data-create-conn="1" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增子系统接入通道</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${we("x",16)}</button>
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
        </div>`),g.join("")}function j(){const y=t.scope.canEditDeployment,g=t.scope.activeOverrides.find(i=>i.module==="deployment"&&i.status==="active"),k=g?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 · ${g.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${m(g.approvedBy)} · 到期自动收回：${m(g.expiresAt.slice(0,16).replace("T"," "))} · 事由：${m(g.reason)}</span>
          </div>
        </div>`:"",_=p==="devices"&&E==="marking",C=Ga[p],v=p==="devices"?E==="marking"?"设备标记":E==="list"?"设备列表":"设备分组":C.title,s=p==="devices"?E==="marking"?"在 2D 平面底图上完成设备坐标标记、回路灯点布置与硬件绑定。":E==="list"?"核查本层四态设备清单，点击任意行配置硬件绑定、人感/光感参数或执行自检。":"管理端侧蓝牙 Mesh 自治联动组与云端业务分组。":C.subtitle;a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Na({tree:V,session:t,scope:G,maxGranularity:C.granularity,isOpen:J,searchKeyword:D})}
            </div>
            <div class="pacom-header-meta">
              ${y?g?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${La()}
          ${_?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${v}</h2>
                      <p class="pacom-unified-subtitle">${s}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${ja(y)}
                    </div>
                  </div>
                  ${k}
                  ${me?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${m(me)}</span></div>`:""}
                  ${Se?`<div class="pacom-alert-banner">${m(Se)}</div>`:""}
                  ${Ye(y)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head pacom-unified-head--split">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${v}</h2>
                      <p class="pacom-unified-subtitle">${s}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${ja(y)}
                    </div>
                  </div>
                  ${k}
                  ${me?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${m(me)}</span></div>`:""}
                  ${Se?`<div class="pacom-alert-banner">${m(Se)}</div>`:""}
                  ${p==="overview"?Aa(y):p==="project_config"?Wa(y):p==="devices"?E==="list"?f(y):A(y):p==="network_topo"?U(y):te(y)}
                </div>
              </div>`}
          ${Za(y)}
        </div>
      </div>
      ${je(y)}
      ${Ie?`
          <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${m(Ie.title)}">
            <div class="dep-lightbox-card">
              <div class="dep-lightbox-head">
                <strong style="font-size:14px; font-weight:500;">${m(Ie.title)}</strong>
                <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${we("x",16)}</button>
              </div>
              <div class="dep-lightbox-body">
                <img src="${m(Ie.imageUrl)}" alt="${m(Ie.title)}" />
              </div>
            </div>
          </div>`:""}
    `,Ve()}function Ve(){Pa(a,{onToggle:()=>{J=!J,j(),J&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:s=>{D=s,j();const i=a.querySelector("[data-global-space-search]");i&&(i.focus(),i.setSelectionRange(s.length,s.length))},onPick:s=>{if(G=s,J=!1,s.level==="project"){K=s.projectId;const i=V.buildings.find(l=>l.projectId===s.projectId);i?ta(i.id):(ce="",oe="",pe=null)}else s.level==="building"?ta(s.buildingId):s.level==="floor"&&ra(s.floorId);j()}}),a.querySelectorAll("[data-dep-nav]").forEach(s=>{s.addEventListener("click",()=>{p=s.dataset.depNav??"overview",s.dataset.devSubtabJump&&(E=s.dataset.devSubtabJump),Y=!1,ee=!1,me="",Se="",j()})}),a.querySelectorAll("[data-dev-subtab]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.devSubtab??"marking";E=i,i==="groups"&&(Y=!1,ee=!1),me="",Se="",j()})}),a.querySelectorAll("[data-drawer-tab]").forEach(s=>{s.addEventListener("click",()=>{M=s.dataset.drawerTab??"binding",j()})}),a.querySelector("[data-list-search]")?.addEventListener("input",s=>{F=s.currentTarget.value,j();const i=a.querySelector("[data-list-search]");i&&(i.focus(),i.setSelectionRange(F.length,F.length))}),a.querySelector("[data-list-filter]")?.addEventListener("change",s=>{T=s.currentTarget.value??"all",j()}),a.querySelectorAll("[data-refresh-dep]").forEach(s=>{s.addEventListener("click",()=>{ze()})}),a.querySelectorAll("[data-matrix-nav]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.matrixFloor;i&&ra(i),p=s.dataset.matrixNav??"devices",s.dataset.matrixSub&&(E=s.dataset.matrixSub),s.dataset.matrixExpand==="1"&&i&&(pe=i),j()})}),a.querySelectorAll("[data-scrubber-floor]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.scrubberFloor;i&&(ra(i),j())})}),a.querySelectorAll("[data-close-modals]").forEach(s=>{s.addEventListener("click",()=>{ie(),j()})}),a.querySelectorAll("[data-modal-scrim]").forEach(s=>{s.addEventListener("click",i=>{i.target===s&&(ie(),j())})}),a.querySelectorAll("[data-open-new-proj]").forEach(s=>{s.addEventListener("click",()=>{ie(),L=!0,j()})}),a.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{ie(),B=!0,j()}),a.querySelectorAll("[data-open-new-bld]").forEach(s=>{s.addEventListener("click",()=>{ie(),Te=!0,j()})}),a.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{ie(),u=!0,j()}),a.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{ie(),$=!0,j()}),a.querySelectorAll("[data-open-new-dev]").forEach(s=>{s.addEventListener("click",()=>{ie(),O=!0,j()})}),a.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{ie(),n=!0,j()}),a.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{ie(),w=!0,j()}),a.querySelectorAll("[data-select-building]").forEach(s=>{s.addEventListener("click",i=>{if(i.target?.closest("button, label, input"))return;const l=s.dataset.selectBuilding;l&&l!==ce&&(ta(l),xe="all",pe=null,j())})}),a.querySelectorAll("[data-edit-building]").forEach(s=>{s.addEventListener("click",i=>{i.stopPropagation(),ie(),q=s.dataset.editBuilding??null,j()})}),a.querySelectorAll("[data-toggle-expand-floor]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.toggleExpandFloor??null;pe=pe===i?null:i,pe&&ra(pe),x=null,j()})}),a.querySelectorAll("[data-jump-floor-marking]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.jumpFloorMarking;i&&ra(i),p="devices",E="marking",j()})}),a.querySelector("[data-jump-floor-config]")?.addEventListener("click",s=>{const i=s.currentTarget.dataset.jumpFloorConfig;p="project_config",i&&(pe=i),j()}),a.querySelectorAll("[data-floor-detail-tab]").forEach(s=>{s.addEventListener("click",()=>{Le=s.dataset.floorDetailTab??"zones",j()})}),a.querySelectorAll("[data-floor-list-filter]").forEach(s=>{s.addEventListener("click",()=>{xe=s.dataset.floorListFilter??"all",j()})}),a.querySelector("[data-create-project]")?.addEventListener("submit",async s=>{s.preventDefault();const i=new FormData(s.currentTarget),l=String(i.get("pName")??"").trim(),c=String(i.get("pCity")??"").trim(),z=String(i.get("pAddr")??"").trim(),S=String(i.get("pLng")??"").trim(),ae=String(i.get("pLat")??"").trim();if(!l)return;let qe;if(S||ae){const Ce=Number(S),De=Number(ae);if(!Number.isFinite(Ce)||!Number.isFinite(De)||Ce<-180||Ce>180||De<-90||De>90){Se="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",j();return}qe={lng:Ce,lat:De,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const Ce=await e.createProject?.({name:l,city:c,address:z,location:qe});ie(),p="project_config",Ce&&(K=Ce.id,ce="",oe="",pe=null,G=va({level:"project",projectId:Ce.id})),me=`已创建项目「${l}」，下一步可添加园区楼宇。`,await ze()}catch(Ce){Se=Ce instanceof Error?Ce.message:String(Ce),j()}}),a.querySelector("[data-save-project]")?.addEventListener("submit",async s=>{s.preventDefault();const i=s.currentTarget,l=i.dataset.saveProject??K,c=new FormData(i),z=String(c.get("pName")??"").trim(),S=String(c.get("pCity")??"").trim(),ae=String(c.get("pAddr")??"").trim(),qe=String(c.get("pLng")??"").trim(),Ce=String(c.get("pLat")??"").trim();let De;if(qe||Ce){const _e=Number(qe),he=Number(Ce);if(!Number.isFinite(_e)||!Number.isFinite(he)||_e<-180||_e>180||he<-90||he>90){Se="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",j();return}De={lng:_e,lat:he,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await e.updateProject?.(l,{name:z,city:S,address:ae,location:De}),ie(),me=`已保存项目「${z||"当前项目"}」信息。`,await ze()}catch(_e){Se=_e instanceof Error?_e.message:String(_e),j()}}),a.querySelector("[data-upload-proj]")?.addEventListener("change",async s=>{const i=s.currentTarget,l=i.dataset.uploadProj,c=i.files?.[0];if(!(!l||!c))try{const z=await Fa(c);await e.updateProject?.(l,{imageUrl:z}),me=`已更新项目封面图（${c.name}）。`,await ze()}catch(z){Se=z instanceof Error?z.message:String(z),j()}}),a.querySelector("[data-delete-proj]")?.addEventListener("click",async s=>{const i=s.currentTarget.dataset.deleteProj,l=V.projects.find(c=>c.id===i);if(!(!i||!l)&&window.confirm(`确认删除项目「${l.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await e.deleteProject?.(i),ie(),me=`已删除项目「${l.name}」。`,await ze()}catch(c){Se=c instanceof Error?c.message:String(c),j()}}),a.querySelector("[data-create-bld]")?.addEventListener("submit",async s=>{s.preventDefault();const i=s.currentTarget,l=i.dataset.createBld??K,c=new FormData(i),z=String(c.get("bName")??"").trim(),S=String(c.get("bArea")??"").trim(),ae=Math.max(1,Number(c.get("bAbove")??12)),qe=Math.max(0,Number(c.get("bBelow")??0)),Ce=!!c.get("bRoof"),De=!!c.get("bAutoFloors");if(z)try{const _e=await e.upsertBuilding?.({projectId:l,name:z,aboveFloors:ae,belowFloors:qe,hasRoof:Ce,areaSqm:S?Number(S):null});ie();let he=0;if(_e&&(ce=_e.id,De)){for(let Re=1;Re<=ae;Re+=1)await e.upsertFloor?.({buildingId:_e.id,kind:"above",level:Re,name:`${Re}F`}),he+=1;for(let Re=1;Re<=qe;Re+=1)await e.upsertFloor?.({buildingId:_e.id,kind:"below",level:-Re,name:`B${Re}`}),he+=1;Ce&&(await e.upsertFloor?.({buildingId:_e.id,kind:"roof",level:99,name:"RF"}),he+=1)}me=De?`已创建楼宇「${z}」并自动生成 ${he} 个楼层。`:`已创建楼宇「${z}」。`,await ze()}catch(_e){Se=_e instanceof Error?_e.message:String(_e),j()}}),a.querySelector("[data-save-building]")?.addEventListener("submit",async s=>{s.preventDefault();const i=s.currentTarget,l=i.dataset.saveBuilding,c=V.buildings.find(_e=>_e.id===l);if(!c)return;const z=new FormData(i),S=String(z.get("bName")??"").trim()||c.name,ae=String(z.get("bArea")??"").trim(),qe=Math.max(1,Number(z.get("bAbove")??c.aboveFloors)),Ce=Math.max(0,Number(z.get("bBelow")??c.belowFloors)),De=!!z.get("bRoof");try{await e.upsertBuilding?.({id:l,projectId:c.projectId,name:S,aboveFloors:qe,belowFloors:Ce,hasRoof:De,areaSqm:ae?Number(ae):null}),ie(),me=`已保存楼宇「${S}」参数。`,await ze()}catch(_e){Se=_e instanceof Error?_e.message:String(_e),j()}}),a.querySelector("[data-delete-building]")?.addEventListener("click",async s=>{const i=s.currentTarget.dataset.deleteBuilding,l=V.buildings.find(c=>c.id===i);if(!(!i||!l)&&window.confirm(`确认删除楼宇「${l.name}」及其下全部楼层与功能区？`))try{await e.deleteBuilding?.(i),ie(),me=`已删除楼宇「${l.name}」。`,await ze()}catch(c){Se=c instanceof Error?c.message:String(c),j()}}),a.querySelector("[data-upload-bld]")?.addEventListener("change",async s=>{const i=s.currentTarget,l=i.dataset.uploadBld,c=i.files?.[0],z=V.buildings.find(S=>S.id===l);if(!(!l||!c||!z))try{const S=await Fa(c);await e.upsertBuilding?.({id:z.id,projectId:z.projectId,name:z.name,aboveFloors:z.aboveFloors,belowFloors:z.belowFloors,hasRoof:z.hasRoof,areaSqm:z.areaSqm,imageUrl:S}),me=`已更新「${z.name}」外观图（${c.name}）。`,await ze()}catch(S){Se=S instanceof Error?S.message:String(S),j()}}),a.querySelectorAll("[data-fill-missing-floors]").forEach(s=>{s.addEventListener("click",async i=>{i.stopPropagation();const l=s.dataset.fillMissingFloors;if(l)try{const c=await Ha(l);me=c>0?`已自动补齐 ${c} 个楼层。`:"当前楼宇楼层已完整。",await ze()}catch(c){Se=c instanceof Error?c.message:String(c),j()}})}),a.querySelector("[data-create-floor]")?.addEventListener("submit",async s=>{s.preventDefault();const i=s.currentTarget,l=i.dataset.createFloor,c=new FormData(i),z=String(c.get("fName")??"").trim().toUpperCase(),S=String(c.get("fArea")??"").trim();if(!z)return;const ae=ua(z)??z;if(Be(l).some(he=>(ua(he.name)??he.name.toUpperCase())===ae)){Se=`楼层「${z}」已存在，请使用其他名称。`,j();return}const Ce=Da(z),De=Ce>=999?"roof":Ce<0?"below":"above",_e=Ce>=999?99:Ce||1;try{const he=await e.upsertFloor?.({buildingId:l,kind:De,level:_e,name:z,areaSqm:S?Number(S):null});ie(),he&&(oe=he.id,pe=he.id),me=`已新增楼层「${z}」。`,await ze()}catch(he){Se=he instanceof Error?he.message:String(he),j()}}),a.querySelector("[data-save-floor]")?.addEventListener("submit",async s=>{s.preventDefault();const i=s.currentTarget,l=i.dataset.saveFloor,c=Ze().find(Re=>Re.id===l);if(!c)return;const z=new FormData(i),S=String(z.get("fName")??"").trim()||c.name,ae=String(z.get("fArea")??"").trim(),qe=ua(S)??S.toUpperCase();if(Be(c.buildingId).some(Re=>Re.id!==c.id&&(ua(Re.name)??Re.name.toUpperCase())===qe)){Se=`楼层「${S}」已存在，请避免重复命名。`,j();return}const De=Da(S),_e=De>=999?"roof":De<0?"below":"above",he=De>=999?99:De||c.level;try{await e.upsertFloor?.({id:c.id,buildingId:c.buildingId,kind:_e,level:he,name:S,areaSqm:ae?Number(ae):null}),me=`已保存楼层「${S}」。`,await ze()}catch(Re){Se=Re instanceof Error?Re.message:String(Re),j()}}),a.querySelector("[data-delete-floor]")?.addEventListener("click",async s=>{const i=s.currentTarget.dataset.deleteFloor,l=Ze().find(c=>c.id===i);if(!(!i||!l)){if(Fe(i).length>0){Se=`楼层「${l.name}」已关联设备，请先解绑后再删除。`,j();return}if(window.confirm(`确认删除楼层「${l.name}」及其功能区？`))try{await e.deleteFloor?.(i),pe=null,me=`已删除楼层「${l.name}」。`,await ze()}catch(c){Se=c instanceof Error?c.message:String(c),j()}}});async function y(s,i){const l=Ze().find(c=>c.id===s);if(l)try{const c=await Fa(i);await e.upsertFloor?.({id:l.id,buildingId:l.buildingId,kind:l.kind,level:l.level,name:l.name,areaSqm:l.areaSqm,planImageUrl:c}),me=`已更新「${l.name}」平面底图（${i.name}）。`,await ze()}catch(c){Se=c instanceof Error?c.message:String(c),j()}}a.querySelectorAll("[data-upload-floor]").forEach(s=>{s.addEventListener("change",()=>{const i=s.dataset.uploadFloor,l=s.files?.[0];i&&l&&y(i,l)})});const g=a.querySelector("[data-single-floor-drop]");g&&t.scope.canEditDeployment&&(g.addEventListener("dragover",s=>{s.preventDefault(),g.style.borderColor="var(--pacom-accent-solid)"}),g.addEventListener("dragleave",()=>{g.style.borderColor=""}),g.addEventListener("drop",s=>{s.preventDefault(),g.style.borderColor="";const i=g.dataset.singleFloorDrop,l=Array.from(s.dataTransfer?.files??[]).find(c=>c.type.startsWith("image/"));i&&l&&y(i,l)})),a.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async s=>{const i=s.currentTarget.dataset.clearFloorPlan,l=Ze().find(c=>c.id===i);if(!(!i||!l)&&window.confirm(`确认清空「${l.name}」的平面底图？`))try{await e.upsertFloor?.({id:l.id,buildingId:l.buildingId,kind:l.kind,level:l.level,name:l.name,areaSqm:l.areaSqm,planImageUrl:null}),me=`已清空「${l.name}」平面底图。`,await ze()}catch(c){Se=c instanceof Error?c.message:String(c),j()}}),a.querySelectorAll("[data-open-lightbox]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.lbTitle??"平面底图预览",l=s.dataset.lbSrc??"";l&&(Ie={title:i,imageUrl:l},j())})}),a.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{Ie=null,j()}),a.querySelector("[data-lightbox-scrim]")?.addEventListener("click",s=>{s.target===s.currentTarget&&(Ie=null,j())});function k(s,i){if(!s||i.length===0)return;const l=Be(s),c=new Map;l.forEach(z=>{const S=ua(z.name)??z.name.toUpperCase();c.set(S,z)}),$e=i.map((z,S)=>{const ae=ua(z.name),qe=ae?c.get(ae):void 0;return{id:`bu-${Date.now().toString(36)}-${S}`,file:z,matchedFloorId:qe?.id??null}}),$=!0,j()}a.querySelector("[data-batch-upload-floors]")?.addEventListener("change",s=>{const i=s.currentTarget;k(i.dataset.batchUploadFloors??"",Array.from(i.files??[]))});const _=a.querySelector("[data-batch-dropzone]");_&&t.scope.canEditDeployment&&(_.addEventListener("dragover",s=>{s.preventDefault(),Ae||(Ae=!0,_.style.borderColor="var(--pacom-accent-solid)",_.style.background="var(--pacom-accent-soft)")}),_.addEventListener("dragleave",()=>{Ae=!1,_.style.borderColor="",_.style.background=""}),_.addEventListener("drop",s=>{s.preventDefault(),Ae=!1;const i=Array.from(s.dataTransfer?.files??[]).filter(l=>l.type.startsWith("image/"));k(_.dataset.batchDropzone??"",i)})),a.querySelectorAll("[data-batch-override-floor]").forEach(s=>{s.addEventListener("change",()=>{const i=$e.find(l=>l.id===s.dataset.batchOverrideFloor);i&&(i.matchedFloorId=s.value||null,j())})}),a.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{$e=[],j()}),a.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const s=$e.filter(l=>l.matchedFloorId),i=$e.length-s.length;if(s.length!==0)try{for(const l of s){const c=Ze().find(S=>S.id===l.matchedFloorId);if(!c)continue;const z=await Fa(l.file);await e.upsertFloor?.({id:c.id,buildingId:c.buildingId,kind:c.kind,level:c.level,name:c.name,areaSqm:c.areaSqm,planImageUrl:z})}$e=[],ie(),me=`已批量导入 ${s.length} 个楼层平面底图${i>0?`（跳过 ${i} 张未分配文件）`:""}。`,await ze()}catch(l){Se=l instanceof Error?l.message:String(l),j()}}),a.querySelectorAll("[data-apply-zone-tpl]").forEach(s=>{s.addEventListener("click",async()=>{const i=$t.find(c=>c.key===s.dataset.applyZoneTpl),l=Ze().find(c=>c.id===s.dataset.tplFloor);if(!(!i||!l))try{for(const c of i.items){const z=await e.upsertZone?.({floorId:l.id,name:`${l.name} ${c.suffix}`,category:c.category});z&&(fe[z.id]={left:20,top:20,width:24,height:24})}me=`已按「${i.label}」模板为 ${l.name} 创建 ${i.items.length} 个功能区。`,await ze()}catch(c){Se=c instanceof Error?c.message:String(c),j()}})}),a.querySelector("[data-attach-doc]")?.addEventListener("change",s=>{const i=s.currentTarget,l=i.dataset.attachDoc,c=i.files?.[0],z=Ze().find(ae=>ae.id===l);if(!l||!c||!z)return;const S=c.size>=1024*1024?`${(c.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(c.size/1024))} KB`;W.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:l,name:c.name,category:c.name.toLowerCase().endsWith(".xlsx")||c.name.toLowerCase().endsWith(".xls")?"点位清单":"竣工图纸",boundScope:`${z.name} · 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:S}),me=`已为 ${z.name} 关联文档「${c.name}」。`,j()}),a.querySelector("[data-add-zone]")?.addEventListener("submit",async s=>{s.preventDefault();const i=s.currentTarget.dataset.addZone,l=new FormData(s.currentTarget),c=String(l.get("zoneName")??"").trim(),z=String(l.get("zoneCat")??"office");if(c)try{const S=await e.upsertZone?.({floorId:i,name:c,category:z});S&&(fe[S.id]={left:20,top:20,width:24,height:24}),me=`已添加功能区「${c}」。`,await ze()}catch(S){Se=S instanceof Error?S.message:String(S),j()}}),a.querySelectorAll("[data-edit-zone]").forEach(s=>{s.addEventListener("click",()=>{x=s.dataset.editZone??null,j()})}),a.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{x=null,j()}),a.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async s=>{s.preventDefault();const i=s.currentTarget,l=new FormData(i),c=String(l.get("zName")??"").trim(),z=String(l.get("zCat")??"office");if(c)try{await e.upsertZone?.({id:i.dataset.saveEditZone,floorId:i.dataset.zoneFloor,name:c,category:z}),x=null,me=`已更新功能区「${c}」。`,await ze()}catch(S){Se=S instanceof Error?S.message:String(S),j()}}),a.querySelectorAll("[data-del-zone]").forEach(s=>{s.addEventListener("click",async()=>{const i=s.dataset.delZone,l=He().find(c=>c.id===i);if(!(!i||!l)&&window.confirm(`确认删除功能区「${l.name}」？`))try{await e.deleteZone?.(i),x===i&&(x=null),me=`已删除功能区「${l.name}」。`,await ze()}catch(c){Se=c instanceof Error?c.message:String(c),j()}})}),a.querySelectorAll("[data-open-copy-zones]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.openCopyZones??null;ie(),P=i,Z=new Set(Be(ce).filter(l=>l.id!==i&&l.kind==="above"&&He().filter(c=>c.floorId===l.id).length===0).map(l=>l.id)),j()})}),a.querySelectorAll("[data-copy-preset]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.copyPreset,l=Be(ce).filter(c=>c.id!==P);i==="empty"?Z=new Set(l.filter(c=>c.kind==="above"&&He().filter(z=>z.floorId===c.id).length===0).map(c=>c.id)):i==="above"?Z=new Set(l.filter(c=>c.kind==="above").map(c=>c.id)):Z.clear(),j()})}),a.querySelectorAll("[data-copy-target-floor]").forEach(s=>{s.addEventListener("change",()=>{const i=s.dataset.copyTargetFloor;i&&(s.checked?Z.add(i):Z.delete(i),j())})}),a.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async s=>{const i=s.currentTarget.dataset.confirmCopyZones,l=Array.from(Z);if(!(!i||l.length===0))try{const c=await e.copyZonesToFloors?.(i,l)??0;ie(),Z.clear(),me=`已将当前层功能区复用至 ${l.length} 个目标楼层（共新增 ${c} 个功能区）。`,await ze()}catch(c){Se=c instanceof Error?c.message:String(c),j()}});const C=a.querySelector("[data-dep-canvas-search]");C?.addEventListener("focus",()=>{X||(X=!0,j(),a.querySelector("[data-dep-canvas-search]")?.focus())}),C?.addEventListener("input",s=>{R=s.currentTarget.value,X=!0,j();const i=a.querySelector("[data-dep-canvas-search]");i&&(i.focus(),i.setSelectionRange(R.length,R.length))}),a.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{X=!X,j()}),a.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{X=!1,j()}),a.querySelectorAll("[data-brush]").forEach(s=>{s.addEventListener("click",()=>{Q=s.dataset.brush??"device",j()})}),a.querySelectorAll("[data-dep-zoom]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.depZoom;i==="in"?re=Math.min(2.6,Number((re+.2).toFixed(2))):i==="out"?re=Math.max(.6,Number((re-.2).toFixed(2))):(re=1,ve=0,de=0),da()})});const v=a.querySelector('[data-role="dep-stage"]');if(v&&!ee){let s=!1,i=0,l=0,c=0,z=0;v.addEventListener("pointerdown",ae=>{ae.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(s=!0,i=ae.clientX,l=ae.clientY,c=ve,z=de,v.classList.add("is-panning"),v.setPointerCapture?.(ae.pointerId))}),v.addEventListener("pointermove",ae=>{s&&(ve=c+(ae.clientX-i),de=z+(ae.clientY-l),da())});const S=()=>{s&&(s=!1,v.classList.remove("is-panning"))};v.addEventListener("pointerup",S),v.addEventListener("pointercancel",S),v.addEventListener("wheel",ae=>{ae.preventDefault();const qe=ae.deltaY<0?.12:-.12;re=Math.max(.6,Math.min(2.6,Number((re+qe).toFixed(2)))),da()},{passive:!1}),v.addEventListener("dblclick",ae=>{ae.target?.closest("button")||(re=1,ve=0,de=0,da())})}a.querySelectorAll("[data-dev-filter]").forEach(s=>{s.addEventListener("click",()=>{ge=s.dataset.devFilter??"all",j()})}),a.querySelector("[data-create-dev]")?.addEventListener("submit",s=>{s.preventDefault();const i=new FormData(s.currentTarget),l=String(i.get("devName")??"").trim(),c=String(i.get("devPreset")??"sensor"),z=String(i.get("devZone")??"")||null,S=et.find(qe=>qe.key===c)??et[0],ae=`dev-custom-${Date.now().toString(36)}`;N.push({id:ae,name:l,category:S.category,projectId:K||I.projectId,buildingId:ce,floorId:oe,logicalZoneId:z,planPoint:{floorId:oe,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),Ne.set(ae,{proxy:S.defaultProxy,relay:S.defaultRelay,meshUuid:`mesh-${oe.slice(-4)}`}),S.category==="lighting"&&Xe.push({id:`lm-${Date.now().toString(36)}`,deviceId:ae,channel:"回路 1",label:`${l.slice(0,6)}主灯`,x:.52,y:.45}),ie(),h=ae,Y=!0,M="binding",ue=!0,me=`已新增「${l}」（${S.hint}），已生成默认标记并提示待同步边缘。`,j()}),a.querySelectorAll("[data-pick-dev]").forEach(s=>{s.addEventListener("click",i=>{i.stopPropagation(),h=s.dataset.pickDev??null,Y=!0,M="binding",H=Fe(oe).find(c=>c.id===h)?.physicalInstalled??!1,j()})}),a.querySelectorAll("[data-open-dev-drawer]").forEach(s=>{s.addEventListener("click",i=>{if(i.target?.closest("button"))return;h=s.dataset.openDevDrawer??null,Y=!0,M="binding",H=Fe(oe).find(c=>c.id===h)?.physicalInstalled??!1,j()})}),a.querySelectorAll("[data-open-dev-params]").forEach(s=>{s.addEventListener("click",i=>{i.stopPropagation(),h=s.dataset.openDevParams??null,Y=!0,M="params",H=Fe(oe).find(c=>c.id===h)?.physicalInstalled??!1,j()})}),a.querySelector("[data-close-sel]")?.addEventListener("click",()=>{Y=!1,ee=!1,j()}),a.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{E!=="marking"?(E="marking",ee=!0):ee=!ee,j()}),a.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{H=!H,j()}),a.querySelectorAll("[data-ping-dev]").forEach(s=>{s.addEventListener("click",i=>{i.stopPropagation();const l=Fe(oe).find(c=>c.id===s.dataset.pingDev);l&&(me=`已向「${l.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,j())})}),a.querySelector("[data-add-light-marker]")?.addEventListener("click",s=>{const i=s.currentTarget.dataset.addLightMarker,l=Xe.filter(c=>c.deviceId===i).length+1;Xe.push({id:`lm-${Date.now().toString(36)}`,deviceId:i,channel:`回路 ${l}`,label:`照明点位 ${l}`,x:Math.min(.86,.35+l*.1),y:.42}),Q="light_marker",me=`已新增「回路 ${l}」可视化灯点。`,j()}),a.querySelectorAll("[data-del-light-marker]").forEach(s=>{s.addEventListener("click",()=>{const i=Xe.findIndex(l=>l.id===s.dataset.delLightMarker);i>=0&&Xe.splice(i,1),j()})}),a.querySelectorAll("[data-toggle-mesh-role]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.meshDev,l=s.dataset.toggleMeshRole,c=Ne.get(i)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};c[l]=!c[l],Ne.set(i,c),ue=!0,me=`已更新节点 ${l.toUpperCase()} 状态，可在「网络拓扑」中一键同步至边缘网关。`,j()})}),a.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async s=>{const i=Fe(oe).find(S=>S.id===h);if(!ee||!i)return;const l=s.currentTarget.getBoundingClientRect(),c=Math.max(.02,Math.min(.98,(s.clientX-l.left)/l.width)),z=Math.max(.02,Math.min(.98,(s.clientY-l.top)/l.height));if(N.some(S=>S.id===i.id)){i.planPoint={floorId:oe,planVersion:1,x:Number(c.toFixed(4)),y:Number(z.toFixed(4))},ee=!1,me=`已更新「${i.name}」图上坐标。`,j();return}try{await e.updateDevicePlanPoint({deviceId:i.id,floorId:I.floorId,planVersion:i.planPoint?.planVersion??1,x:c,y:z,expectedVersion:i.version}),ee=!1,me=`已更新「${i.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await ze()}catch(S){Se=S instanceof Error?S.message:String(S),j()}}),a.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async s=>{s.preventDefault();const i=Fe(oe).find(c=>c.id===h);if(!i)return;const l=new FormData(s.currentTarget);if(N.some(c=>c.id===i.id)){i.physicalInstalled=H,i.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(l.get("protocol")),networkAddress:String(l.get("networkAddress")??""),portOrChannel:String(l.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:t.displayName},i.version+=1,ue=!0,me=`已保存「${i.name}」的硬件绑定与物理复核状态。`,j();return}try{await e.updateDeviceHardwareBinding({deviceId:i.id,gatewayId:i.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(l.get("protocol")),networkAddress:String(l.get("networkAddress")??""),portOrChannel:String(l.get("portOrChannel")??""),physicalInstalled:H,expectedVersion:i.version}),ue=!0,me=`已保存「${i.name}」的硬件绑定与物理安装复核状态。`,await ze()}catch(c){Se=c instanceof Error?c.message:String(c),j()}}),a.querySelector("[data-save-dev-params]")?.addEventListener("submit",s=>{s.preventDefault();const i=s.currentTarget.dataset.saveDevParams,l=new FormData(s.currentTarget);Me.set(i,{offDelayMin:Number(l.get("offDelayMin")??15),restoreMin:Number(l.get("restoreMin")??30),luxOn:Number(l.get("luxOn")??280),luxOff:Number(l.get("luxOff")??450)}),ue=!0,me="设备自治延时与光感门限参数已下发并同步至配置基线。",j()}),a.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const s=Fe(oe).find(i=>i.id===h);s&&xa(s)}),a.querySelectorAll("[data-ftt-dev]").forEach(s=>{s.addEventListener("click",i=>{i.stopPropagation();const l=Fe(oe).find(c=>c.id===s.dataset.fttDev);l&&xa(l)})}),a.querySelectorAll("[data-batch-ftt]").forEach(s=>{s.addEventListener("click",()=>Ua())}),a.querySelectorAll("[data-export-inv]").forEach(s=>{s.addEventListener("click",()=>_a())}),a.querySelector("[data-create-group]")?.addEventListener("submit",s=>{s.preventDefault();const i=new FormData(s.currentTarget),l=String(i.get("gName")??"").trim(),c=i.get("gTrack")??"mesh_auto",z=String(i.get("gType")??"灯光联动组");l&&(Sa.unshift({id:`grp-${Date.now().toString(36)}`,track:c,groupType:z,name:l,floorId:oe,includesAdapter:c==="mesh_auto",deviceIds:c==="mesh_auto"?["dev-e7f-gw-01"]:[]}),ie(),c==="mesh_auto"&&(ue=!0),me=`已新建${c==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${l}」。`,j())}),a.querySelectorAll("[data-test-group]").forEach(s=>{s.addEventListener("click",()=>{const i=Sa.find(l=>l.id===s.dataset.testGroup);i&&(me=`已向分组「${i.name}」发送群组试控指令，${i.deviceIds.length} 台成员回读正常。`,j())})}),a.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>Va()),a.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{se+=1,ue=!1,me=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${se}）。`,j()}),a.querySelectorAll("[data-topo-mode]").forEach(s=>{s.addEventListener("click",()=>{le=s.dataset.topoMode??"mesh",j()})}),a.querySelectorAll("[data-topo-jump]").forEach(s=>{s.addEventListener("click",()=>{h=s.dataset.topoJump??null,Y=!0,M="binding",p="devices",E="marking",j()})}),a.querySelector("[data-create-conn]")?.addEventListener("submit",s=>{s.preventDefault();const i=new FormData(s.currentTarget),l=String(i.get("cName")??"").trim(),c=String(i.get("cProto")??"bacnet_ip"),z=String(i.get("cEndpoint")??"").trim();if(ne.some(S=>S.endpoint===z)){Se=`端口冲突警告：局域网端点「${z}」已被其他通道占用，请更换端口后重试。`,j();return}ne.unshift({id:`conn-${Date.now().toString(36)}`,projectId:K||I.projectId,buildingId:ce,floorId:oe,name:l,protocol:c,endpoint:z,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),ie(),Se="",me=`已接入「${l}」（${z}），连通测试通过（18 ms）。`,j()}),a.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{me="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",j()}),a.querySelectorAll("[data-expand-conn]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.expandConn??null;b=b===i?null:i,j()})}),a.querySelectorAll("[data-ping-conn]").forEach(s=>{s.addEventListener("click",()=>{const i=ne.find(l=>l.id===s.dataset.pingConn);i&&(Se="",i.status==="connected"?me=`连通测试通过：「${i.name}」（${i.endpoint}）响应正常，延迟 18 ms。`:Se=`连通测试异常：「${i.name}」（${i.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,j())})}),a.querySelectorAll("[data-copy-endpoint]").forEach(s=>{s.addEventListener("click",async()=>{const i=s.dataset.endpointVal??"",l=s.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(i),be=l,j(),window.setTimeout(()=>{be=null,j()},1600)}catch{}})}),a.querySelectorAll("[data-preview-doc]").forEach(s=>{s.addEventListener("click",()=>{const i=[...yt,...W].find(l=>l.id===s.dataset.previewDoc);i&&(me=`已调阅工程附件「${i.name}」（关联范围：${i.boundScope}，更新于 ${i.updatedAt}）。`,j())})}),a.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const s=await e.freezeDeliveryBatch(I.floorId,"部署总览验收发起交付冻结");me=`已生成交付冻结快照 ${s.versionTag}（核验 ${s.verifiedCount}/${s.deviceCount}）。`,await ze()}catch(s){Se=s instanceof Error?s.message:String(s),j()}})}await ze()}const ns=new Set(["lighting","hvac","alarm_rules"]),St={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},za=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function os(a){const e=new Set;for(const t of a.actions)t.command.startsWith("lighting")?e.add("照明"):t.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function is(a,e,t){const r=t?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function ls(a,e,t){let r=Ba(),o=!1,p="",[E,M,F,T]=await Promise.all([e.getSpatialTree(),e.listScenes(I.floorId),e.getRuntimeSettings(I.projectId),e.getFloorDevices(I.floorId).catch(()=>[])]),G="manual",J="balanced",D="all",Q=null,ge="",R=!1,X=!1,Y=!1,le="all",re=null,ve="",de="",V=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const ye=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],ne=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],Ee=[{deviceId:T[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],fe=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${F.calendar.workdayStart} – ${F.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${F.calendar.nightGuardStart} – 次日 ${F.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],N=e.subscribeFloorEvents(I.floorId,async ce=>{ce.type==="control.receipt.updated"&&Q?.batchId===ce.batchId&&(Q=await e.getControlBatch(ce.batchId),K())});function K(){const ce=ge.trim().toLowerCase(),oe=ce?M.filter(n=>`${n.name} ${n.description}`.toLowerCase().includes(ce)):M,pe=F.rules.filter(n=>ns.has(n.category)),xe=D==="all"?pe:D==="cbm"?[]:pe.filter(n=>n.category===D),Le=D==="all"||D==="cbm",L=le==="issues"?ye.filter(n=>n.status!=="verified"):ye,B=za.find(n=>n.id===J)??za[1],Te=t.scope.canControlDevices,q=t.scope.canEditScenes,u=t.scope.canEditSettings,$=t.scope.activeOverrides.find(n=>n.module==="settings"&&n.status==="active");a.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Na({tree:E,session:t,scope:r,isOpen:o,searchKeyword:p})}
            </div>

            <div class="pacom-header-meta">
              ${G==="rules"?u?$?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${V.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${V.length>0?`人工覆盖中：${V.length} 台 ${we("chevron-down",12)}`:`全部自动托管 ${we("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${Y?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${ye.length}）</button>
              ${G==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${q?"":"disabled"}>${R?"收起表单":"+ 新建场景"}</button>`:G==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${G==="manual"}" data-scene-tab="manual">快捷场景（${M.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${G==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${G==="rules"}" data-scene-tab="rules">条件联动（${pe.length+ne.length}）</button>
          </nav>
        </header>

        ${X?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${V.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${we("x",16)}</button>
              </div>
              ${V.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':V.map(n=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${d(n.name)}</div>
                            <div class="pacom-row-sub">${d(n.reason)}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${d(n.id)}" ${Te?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${V.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${Te?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${Y?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${we("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${le==="all"}" data-log-filter="all">全部（${ye.length}）</button>
                  <button class="pacom-tab" aria-selected="${le==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${L.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${L.map(n=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${d(n.device)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${d(n.source)}</span>
                        </div>
                        <span class="pacom-row-sub">${d(n.action)} · ${d(n.at)}</span>
                      </div>
                      <span class="pacom-badge ${n.status==="verified"?"pacom-badge--online":n.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${n.status==="verified"?"回读确认":n.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${ve?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${d(ve)}</span></div>`:""}
          ${de?`<div class="pacom-alert-banner">${d(de)}</div>`:""}

          ${G==="manual"?`
              ${Q?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${d(Q.batchId)}</span>
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
                            ${Q.receipts.map(n=>`
                                <tr>
                                  <td><code style="font-size:12px;">${d(n.deviceId)}</code></td>
                                  <td>${d(n.command)}</td>
                                  <td>${d(String(n.targetValue))}${n.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${d(n.errorMessage)}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${n.status==="verified_success"?"pacom-badge--online":n.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${d(n.status)}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${R?`
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
                          <span class="pacom-setting-title">联动动作列表（${Ee.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${Ee.map((n,w)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" name="draftDevice-${w}" data-draft-dev="${w}" aria-label="目标设备">
                                ${T.map(P=>`<option value="${d(P.id)}" ${P.id===n.deviceId?"selected":""}>${d(P.name)}</option>`).join("")}
                              </select>
                              <select class="pacom-select" name="draftCommand-${w}" data-draft-cmd="${w}" aria-label="执行指令">
                                <option value="lighting.dimming" ${n.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${n.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${n.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" name="draftTargetValue-${w}" data-draft-val="${w}" value="${d(n.targetValue)}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${w}" ${Ee.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" ${q?"":"disabled"}>保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${d(ge)}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${oe.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${oe.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':oe.map(n=>{const w=os(n),P=n.actions.slice(0,3).map(Z=>{const Ie=T.find($e=>$e.id===Z.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??Z.deviceId,Ae=Z.command==="lighting.dimming"?`亮度 ${Z.targetValue}%`:Z.command==="hvac.setpoint"?`设温 ${Z.targetValue}°C`:Z.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${d(Ie)} → ${d(Ae)}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${d(n.name)}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${w.map(Z=>`<span class="pacom-badge pacom-badge--accent">${d(Z)}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${n.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${d(n.description)}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${P}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${d(n.lastExecutedAt?n.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行")}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${d(n.id)}" ${Te?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:G==="schedule_oss"?`
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
                    ${za.map(n=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${J===n.id}" data-oss-mode="${n.id}" ${Te?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${n.title}</strong>
                          <span class="pacom-badge ${J===n.id?"pacom-badge--online":"pacom-badge--neutral"}">${J===n.id?"当前生效":n.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${n.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${n.estSaving}</span>
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
                          ${fe.map(n=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${d(n.name)}</span>
                                    ${n.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${d(n.windowLabel)}</div>
                                </td>
                                <td>${is(n.startHour,n.endHour,n.enabled)}</td>
                                <td><span class="pacom-row-sub">${d(n.scope)}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${n.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${n.enabled}"
                                      aria-label="切换排程 ${d(n.name)}"
                                      data-toggle-schedule="${d(n.id)}"
                                      ${Te?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(n=>{const w=n==="all"?"全部":St[n]??n,P=n==="all"?pe.length+ne.length:n==="cbm"?ne.length:pe.filter(Z=>Z.category===n).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${D===n}" data-rule-cat="${n}">
                              <span>${w}</span><span class="pacom-count-num">${P}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${xe.map(n=>{const w=re===n.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${d(St[n.category]??n.category)}</span>
                                  <span>${d(n.name)}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${n.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${d(n.summary)} · 范围：${d(n.scopeLabel)} · 回执：${d(n.receiptSummary??"已同步")}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${d(n.id)}">${w?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${n.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${n.enabled?"true":"false"}"
                                  aria-label="切换 ${d(n.name)}"
                                  data-toggle-strategy-rule="${d(n.id)}"
                                  data-rule-ver="${n.version}"
                                  data-rule-next="${!n.enabled}"
                                  ${u?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${w?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${n.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":n.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${d(n.scopeLabel)} · 当前版本：v${n.version} · 最近同步：${d(n.receiptSummary??"已同步")}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${Le?ne.map(n=>{const w=Math.min(100,Math.round(n.runtimeHours/n.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${d(n.name)}</span>
                                      <span class="pacom-badge ${w>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${n.runtimeHours} / ${n.thresholdHours} h（${w}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${w}%; background:${w>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${d(n.equipment)} · 上次重置：${d(n.lastReset)}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${n.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${n.enabled}" data-toggle-cbm="${d(n.id)}" aria-label="切换 ${d(n.name)}" ${u?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,Pa(a,{onToggle:()=>{o=!o,K(),o&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:n=>{p=n,K();const w=a.querySelector("[data-global-space-search]");w&&(w.focus(),w.setSelectionRange(n.length,n.length))},onPick:n=>{r=n,o=!1,K()}}),a.querySelectorAll("[data-scene-tab]").forEach(n=>{n.addEventListener("click",()=>{G=n.dataset.sceneTab??"manual",ve="",K()})}),a.querySelectorAll("[data-toggle-overrides]").forEach(n=>{n.addEventListener("click",()=>{X=!X,K()})}),a.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{Te&&(V=[],ve="已释放全部人工覆盖设备，自动节能策略已恢复托管。",K())}),a.querySelectorAll("[data-release-one]").forEach(n=>{n.addEventListener("click",()=>{if(!Te)return;const w=n.dataset.releaseOne;V=V.filter(P=>P.id!==w),ve="已恢复该设备的自动策略托管。",K()})}),a.querySelectorAll("[data-toggle-cmdlog]").forEach(n=>{n.addEventListener("click",()=>{Y=!Y,K()})}),a.querySelectorAll("[data-log-filter]").forEach(n=>{n.addEventListener("click",()=>{le=n.dataset.logFilter??"all",K()})}),a.querySelector("[data-close-batch]")?.addEventListener("click",()=>{Q=null,K()}),a.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),a.querySelectorAll("[data-oss-mode]").forEach(n=>{n.addEventListener("click",()=>{if(!Te)return;const w=n.dataset.ossMode;if(!w)return;J=w;const P=za.find(Z=>Z.id===w);ve=`已切换至「${P?.title??w}」模式（明日预测启动 ${P?.predictedStart??""}）。`,K()})}),a.querySelectorAll("[data-toggle-schedule]").forEach(n=>{n.addEventListener("click",()=>{if(!Te)return;const w=n.dataset.toggleSchedule,P=fe.find(Z=>Z.id===w);P&&(P.enabled=!P.enabled,ve=`排程「${P.name}」已${P.enabled?"恢复启用":"临时暂停"}。`,K())})}),a.querySelectorAll("[data-rule-cat]").forEach(n=>{n.addEventListener("click",()=>{D=n.dataset.ruleCat??"all",K()})}),a.querySelectorAll("[data-expand-rule]").forEach(n=>{n.addEventListener("click",()=>{const w=n.dataset.expandRule??null;re=re===w?null:w,K()})}),a.querySelectorAll("[data-toggle-cbm]").forEach(n=>{n.addEventListener("click",()=>{if(!u)return;const w=ne.find(P=>P.id===n.dataset.toggleCbm);w&&(w.enabled=!w.enabled,ve=`工时维保规则「${w.name}」已${w.enabled?"启用":"停用"}。`,K())})}),a.querySelectorAll("[data-toggle-strategy-rule]").forEach(n=>{n.addEventListener("click",async()=>{if(u){de="";try{await e.toggleRuntimeRule(n.dataset.toggleStrategyRule,n.dataset.ruleNext==="true",Number(n.dataset.ruleVer)),F=await e.getRuntimeSettings(I.projectId),ve="条件联动规则状态与版本回执已更新。",K()}catch(w){de=w instanceof Error?w.message:String(w),K()}}})}),a.querySelectorAll("[data-toggle-create]").forEach(n=>{n.addEventListener("click",()=>{!q&&!R||(R=!R,K())})}),a.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{q&&(Ee.push({deviceId:T[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),K())}),a.querySelectorAll("[data-del-draft-action]").forEach(n=>{n.addEventListener("click",()=>{if(!q)return;const w=Number(n.dataset.delDraftAction);Ee.length>1&&(Ee.splice(w,1),K())})}),a.querySelectorAll("[data-draft-dev]").forEach(n=>{n.addEventListener("change",()=>{if(!q)return;const w=Ee[Number(n.dataset.draftDev)];w&&(w.deviceId=n.value)})}),a.querySelectorAll("[data-draft-cmd]").forEach(n=>{n.addEventListener("change",()=>{if(!q)return;const w=Ee[Number(n.dataset.draftCmd)];w&&(w.command=n.value)})}),a.querySelectorAll("[data-draft-val]").forEach(n=>{n.addEventListener("change",()=>{if(!q)return;const w=Ee[Number(n.dataset.draftVal)];w&&(w.targetValue=n.value)})}),a.querySelector("[data-scene-search]")?.addEventListener("input",n=>{const w=n.currentTarget,P=w.selectionStart??w.value.length;ge=w.value,K();const Z=a.querySelector("[data-scene-search]");Z&&(Z.focus(),Z.setSelectionRange(P,P))}),a.querySelectorAll("[data-exec-scene]").forEach(n=>{n.addEventListener("click",async()=>{if(!Te)return;de="";const w=M.find(P=>P.id===n.dataset.execScene);try{Q=await e.executeScene(n.dataset.execScene),M=await e.listScenes(I.floorId),ye.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:w?.name??"E7F 场景",action:`${Q.receipts.length} 台设备联动下发`,status:"verified"}),K()}catch(P){de=P instanceof Error?P.message:String(P),K()}})}),a.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async n=>{if(n.preventDefault(),!q)return;const w=new FormData(n.currentTarget);try{await e.createScene({projectId:I.projectId,floorId:I.floorId,name:String(w.get("name")??""),description:String(w.get("description")??""),actions:Ee.map(P=>({deviceId:P.deviceId,command:P.command,targetValue:P.targetValue==="true"?!0:P.targetValue==="false"?!1:Number(P.targetValue)||50}))}),M=await e.listScenes(I.floorId),R=!1,ve=`快捷场景已保存（共绑定 ${Ee.length} 条联动动作）。`,K()}catch(P){de=P instanceof Error?P.message:String(P),K()}})}K(),window.addEventListener("hashchange",()=>N(),{once:!0})}const xt={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function at(a,e){return a.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':a.map(t=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${d(t.name)}</span>
            <span class="pacom-badge pacom-badge--neutral">v${t.version}</span>
            <span class="pacom-badge pacom-badge--accent">${d(t.scopeLabel)}</span>
          </span>
          <span class="pacom-setting-desc">${d(t.summary)} · 回执：${d(t.receiptSummary??"已同步")}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${t.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${t.enabled?"true":"false"}"
            aria-label="切换 ${d(t.name)}"
            data-toggle-rule="${d(t.id)}"
            data-rule-ver="${t.version}"
            data-rule-next="${!t.enabled}"
            ${e?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function cs(a,e,t){let r="calendar",o=Ba(),p=!1,E="";const[M,F]=await Promise.all([e.getSpatialTree(),e.getRuntimeSettings(I.projectId)]);let T=F,G=T.calendar.workdayStart,J=T.calendar.workdayEnd,D=T.calendar.nightGuardStart,Q=T.calendar.nightGuardEnd,ge=!0,R=[];const X=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let Y="flat";const le={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},re={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},ve={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},de={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},V=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let ye="",ne="";function Ee(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(K=>{const ce=xt[K];return`
                <button type="button" class="pacom-unified-item" aria-current="${r===K}" data-stab="${K}">
                  ${we(ce.icon,16)}
                  <span>${ce.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function fe(){const N=t.scope.canEditSettings,K=t.scope.activeOverrides.find(L=>L.module==="settings"&&L.status==="active"),ce=M.projects[0]?.name??"当前项目",oe=T.rules.filter(L=>L.category==="weather_area"),pe=T.rules.filter(L=>L.category==="metering_carbon"),xe=T.rules.filter(L=>L.category==="templates"),Le=xt[r];a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Na({tree:M,session:t,scope:o,maxGranularity:"project",isOpen:p,searchKeyword:E})}
            </div>
            <div class="pacom-header-meta">
              ${N?K?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${Ee()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${Le.label}</h2>
                <p class="pacom-unified-subtitle">${Le.subtitle}</p>
              </div>
              ${K?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 · ${K.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${d(K.approvedBy)} · 到期自动收回：${d(K.expiresAt.slice(0,16).replace("T"," "))} · 事由：${d(K.reason)}</span>
                      </div>
                    </div>`:""}
              ${ye?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${d(ye)}</span></div>`:""}
              ${ne?`<div class="pacom-alert-banner">${d(ne)}</div>`:""}

              ${r==="calendar"?`
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
                          <input class="pacom-input" name="calWorkdayStart" style="width:116px;" type="time" data-cal-start value="${d(G)}" aria-label="工作日上班时间" ${N?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" name="calWorkdayEnd" style="width:116px;" type="time" data-cal-end value="${d(J)}" aria-label="工作日下班时间" ${N?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calNightGuardStart" style="width:116px;" type="time" data-night-start value="${d(D)}" aria-label="夜间值守开始" ${N?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" name="calNightGuardEnd" style="width:116px;" type="time" data-night-end value="${d(Q)}" aria-label="夜间值守结束" ${N?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${ge?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${ge}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${N?"":"disabled"}>
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
                      <span class="pacom-row-sub">共 ${X.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${X.map(L=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${d(L.date)}</span><span class="pacom-badge pacom-badge--accent">${d(L.mode)}</span></span>
                              <span class="pacom-setting-desc">${d(L.label)}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${d(L.id)}" ${N?"":"disabled"}>移除</button>
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

                  ${R.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${R.length} 条</span>
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
                                ${R.map(L=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${d(L.ruleName)}</div>
                                        ${L.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${d(L.conflictWarning)}</div>`:""}
                                      </td>
                                      <td>${d(L.beforeWindow)}</td>
                                      <td><strong>${d(L.afterWindow)}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${L.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${L.conflictWarning?"交叠警告":"自动跟随"}
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
                            <span class="pacom-setting-title">${d(ce)}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" name="energyBillingArea" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${d(le.billingArea)}" aria-label="计费面积" ${N?"":"disabled"} />
                          </div>
                        </div>
                        ${at(oe,N)}
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
                                <input class="pacom-input" name="energyTariffYuan" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${d(le.tariffYuan)}" aria-label="综合电价" ${N?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" name="energyTariffPeak" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${d(le.tariffPeak)}" aria-label="峰段电价" ${N?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" name="energyTariffFlat" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${d(le.tariffFlat)}" aria-label="平段电价" ${N?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" name="energyTariffValley" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${d(le.tariffValley)}" aria-label="谷段电价" ${N?"":"disabled"} />
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
                        ${at(pe,N)}
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
                              <input class="pacom-input" name="guardMinTemp" style="width:72px;" type="number" data-guard-field="minTemp" value="${d(re.minTemp)}" aria-label="最低设定温度" ${N?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" name="guardMaxTemp" style="width:72px;" type="number" data-guard-field="maxTemp" value="${d(re.maxTemp)}" aria-label="最高设定温度" ${N?"":"disabled"} />
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
                                <option value="2h" ${re.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${re.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${re.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${re.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" name="guardReadbackTimeoutSec" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${d(re.readbackTimeoutSec)}" aria-label="回读超时阈值" ${N?"":"disabled"} />
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
                          ${at(xe,N)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${d(de.dailyDigestTime)}" aria-label="每日简报发送时间" ${N?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${de.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${N?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${de.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${N?"":"disabled"}>
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
                              <input class="pacom-input" name="autoWoDelayMin" style="width:72px;" type="number" data-auto-wo="delayMin" value="${d(ve.delayMin)}" aria-label="自动派单延迟分钟数" ${N?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ve.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${N?"":"disabled"}>
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
                                <option value="暖通运维组" ${ve.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${ve.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${ve.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ve.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${N?"":"disabled"}>
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
                                ${V.map(L=>`
                                    <tr>
                                      <td><strong>${d(L.groupName)}</strong></td>
                                      <td>${d(L.scope)}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${d(L.severity)}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${d(L.channels)}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${L.enabled}" data-toggle-nr="${d(L.id)}" aria-label="切换 ${d(L.groupName)} 通知规则" ${N?"":"disabled"}>
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
    `,Pa(a,{onToggle:()=>{p=!p,fe(),p&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:L=>{E=L,fe();const B=a.querySelector("[data-global-space-search]");B&&(B.focus(),B.setSelectionRange(L.length,L.length))},onPick:L=>{o=L,p=!1,fe()}}),a.querySelectorAll("[data-stab]").forEach(L=>{L.addEventListener("click",()=>{r=L.dataset.stab??"calendar",ye="",ne="",fe()})}),a.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{N&&(ge=!ge,ye=`法定节假日自动跳过已${ge?"开启":"关闭"}。`,fe())}),a.querySelector("[data-night-start]")?.addEventListener("change",L=>{N&&(D=L.currentTarget.value)}),a.querySelector("[data-night-end]")?.addEventListener("change",L=>{N&&(Q=L.currentTarget.value)}),a.querySelector("[data-add-sd-form]")?.addEventListener("submit",L=>{if(L.preventDefault(),!N)return;const B=new FormData(L.currentTarget);X.push({id:`sd-${Date.now()}`,date:String(B.get("date")??""),label:String(B.get("label")??""),mode:String(B.get("mode")??"保持工作日工况")}),ye="已添加特殊例外日期，当日自动覆盖默认节假日排程。",fe()}),a.querySelectorAll("[data-del-sd]").forEach(L=>{L.addEventListener("click",()=>{if(!N)return;const B=X.findIndex(Te=>Te.id===L.dataset.delSd);B>=0&&X.splice(B,1),fe()})}),a.querySelectorAll("[data-tariff-mode]").forEach(L=>{L.addEventListener("click",()=>{Y=L.dataset.tariffMode??"flat",fe()})}),a.querySelectorAll("[data-energy-field]").forEach(L=>{L.addEventListener("change",()=>{if(!N)return;const B=L.dataset.energyField;B&&(le[B]=L.value)})}),a.querySelector("[data-save-energy]")?.addEventListener("click",()=>{N&&(ye=Y==="flat"?`能耗计费与气象口径已保存（面积 ${le.billingArea} m² · 综合电价 ¥${le.tariffYuan}/kWh · 因子 ${le.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${le.tariffPeak} / 平 ¥${le.tariffFlat} / 谷 ¥${le.tariffValley}）。`,fe())}),a.querySelectorAll("[data-guard-field]").forEach(L=>{L.addEventListener("change",()=>{if(!N)return;const B=L.dataset.guardField;B&&(re[B]=L.value)})}),a.querySelector("[data-save-guard]")?.addEventListener("click",()=>{N&&(ye=`控制保护参数已保存（温区 ${re.minTemp}–${re.maxTemp}°C · 超时 ${re.readbackTimeoutSec}s）。`,fe())}),a.querySelectorAll("[data-auto-wo]").forEach(L=>{L.addEventListener("change",()=>{if(!N)return;const B=L.dataset.autoWo;B&&(ve[B]=L.value),ye="超时自动派单配置已更新。",fe()})}),a.querySelectorAll("[data-toggle-autowo]").forEach(L=>{L.addEventListener("click",()=>{if(!N)return;const B=L.dataset.toggleAutowo;B&&(ve[B]=!ve[B],ye="自动派单保护策略已更新。",fe())})}),a.querySelector("[data-digest-time]")?.addEventListener("change",L=>{N&&(de.dailyDigestTime=L.currentTarget.value,ye=`每日晨间简报发送时刻已更新为 ${de.dailyDigestTime}。`,fe())}),a.querySelectorAll("[data-notify-key]").forEach(L=>{L.addEventListener("click",()=>{if(!N)return;const B=L.dataset.notifyKey;B&&(de[B]=!de[B],ye="消息通知偏好已更新。",fe())})}),a.querySelectorAll("[data-toggle-nr]").forEach(L=>{L.addEventListener("click",()=>{if(!N)return;const B=V.find(Te=>Te.id===L.dataset.toggleNr);B&&(B.enabled=!B.enabled,ye=`工作组「${B.groupName}」的分流推送规则已${B.enabled?"启用":"停用"}。`,fe())})}),a.querySelector("[data-cal-start]")?.addEventListener("change",L=>{N&&(G=L.currentTarget.value)}),a.querySelector("[data-cal-end]")?.addEventListener("change",L=>{N&&(J=L.currentTarget.value)}),a.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{ne="";try{R=await e.previewCalendarImpact(I.projectId,G,J),fe()}catch(L){ne=L instanceof Error?L.message:String(L),fe()}}),a.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{if(N){ne="";try{const L=await e.saveWorkCalendar(I.projectId,G,J,T.calendar.version);T={...T,calendar:{...L,nightGuardStart:D,nightGuardEnd:Q}},ye=`工作时间配置已保存至 v${L.version}（工作日 ${L.workdayStart}–${L.workdayEnd} · 夜间值守 ${D}–${Q}）`,R=[],fe()}catch(L){ne=L instanceof Error?L.message:String(L),fe()}}}),a.querySelectorAll("[data-toggle-rule]").forEach(L=>{L.addEventListener("click",async()=>{if(N){ne="";try{await e.toggleRuntimeRule(L.dataset.toggleRule,L.dataset.ruleNext==="true",Number(L.dataset.ruleVer)),T=await e.getRuntimeSettings(I.projectId),ye="策略状态与版本回执已更新。",fe()}catch(B){ne=B instanceof Error?B.message:String(B),fe()}}})})}fe()}const kt="pacom.web.sidebar.collapsed",rs=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Et=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],nt={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},It=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function tt(){const a=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return a in nt?a:"home"}function Pe(a){return a.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const ka=new WeakMap;function ds(a){ka.get(a)?.()}async function ps(a,e,t,r){ka.get(a)?.(),a.classList.remove("bare-login");let o=t,p=tt(),E=localStorage.getItem(kt)==="1",M=!1,F=!1,T=!1,G=await e.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],J=e.getActiveOrganizationId?.()??G[0]?.id??"org-gzlab",D="",Q=!1,ge=0,R={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function X(u){return o.scope.visibleModules.includes(u)}X(p)||(p="home",window.location.hash="#home");function Y(){return G.find(u=>u.id===J)??G[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function le(u){if(u.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const $=u.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${Pe($)}</span>`}async function re(){e.listOrganizations&&(G=await e.listOrganizations(),J=e.getActiveOrganizationId?.()??G[0]?.id??"org-gzlab")}async function ve(){try{await re();const[u,$,O,n,w]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(I.floorId).catch(()=>[]),e.listAlarms(I.floorId).catch(()=>[]),e.listWorkOrders(I.floorId).catch(()=>[]),e.listScenes(I.floorId).catch(()=>[])]);R={devices:$,zones:u.zones,alarms:O,workOrders:n,scenes:w},ge=O.filter(P=>P.status==="active").length,K()}catch{}}function de(){const u=Et.filter(O=>X(O.id));let $=!1;return u.map(O=>`
        ${(O.id==="settings"||O.id==="deployment")&&!$?($=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${O.id}" aria-current="${p===O.id?"page":"false"}" title="${O.label}">
          ${we(O.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${O.label}</span>
          ${O.id==="alarms"&&ge>0?`<span class="pacom-nav-count" title="待处理告警 ${ge} 条">${ge}</span>`:""}
        </button>`).join("")}function V(){const u=D.trim().toLowerCase(),$=Et.filter(W=>X(W.id)),O=u?$.filter(W=>W.label.toLowerCase().includes(u)).slice(0,4):$,n=u?R.devices.filter(W=>`${W.name} ${W.id} ${W.category}`.toLowerCase().includes(u)).slice(0,5):R.devices.slice(0,3),w=u?R.zones.filter(W=>W.name.toLowerCase().includes(u)).slice(0,3):[],P=X("alarms")?u?R.alarms.filter(W=>`${W.title} ${W.message} ${W.id}`.toLowerCase().includes(u)).slice(0,4):R.alarms.filter(W=>W.status==="active").slice(0,2):[],Z=X("alarms")?u?R.workOrders.filter(W=>`${W.title} ${W.id}`.toLowerCase().includes(u)).slice(0,3):[]:[],Ie=X("scenes")?u?R.scenes.filter(W=>`${W.name} ${W.description}`.toLowerCase().includes(u)).slice(0,3):[]:[],Ae=X("deployment")?u?It.filter(W=>`${W.title} ${W.category}`.toLowerCase().includes(u)).slice(0,4):It.slice(0,2):[],$e=[];return n.length&&$e.push(`<div class="pacom-search-group">${u?"设备（空间总览）":"常用设备直达"}</div>`+n.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(W.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Pe(W.name)}</span><span class="pacom-badge ${W.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${W.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),w.length&&$e.push('<div class="pacom-search-group">功能区</div>'+w.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(W.id)}"><span>${Pe(W.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),P.length&&$e.push(`<div class="pacom-search-group">${u?"告警":"待处理告警"}</div>`+P.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(W.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Pe(W.title)}</span><span class="pacom-badge pacom-badge--warning">${W.status==="active"?"待处理":"已确认"}</span></button>`).join("")),Z.length&&$e.push('<div class="pacom-search-group">运维工单</div>'+Z.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(W.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Pe(W.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),Ie.length&&$e.push('<div class="pacom-search-group">智能策略</div>'+Ie.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${Pe(W.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),Ae.length&&$e.push('<div class="pacom-search-group">图纸与工程文档</div>'+Ae.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="${W.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Pe(W.title)}</span><span class="pacom-badge pacom-badge--neutral">${Pe(W.category)}</span></button>`).join("")),O.length&&$e.push('<div class="pacom-search-group">工作区</div>'+O.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#${W.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${we(W.icon,14)}${Pe(W.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),$e.length?$e.join(""):`<div class="pacom-nav-empty">未找到与「${Pe(D)}」匹配的设备、区域、告警、工单或图纸</div>`}function ye(u){u.querySelectorAll("[data-search-hash]").forEach($=>{$.addEventListener("click",()=>{const O=$.dataset.searchHash||"#home";Q=!1,D="",ne(),M=!1,window.location.hash===O?(p=tt(),Le(!0)):window.location.hash=O})})}function ne(){if(a.querySelector('[data-role="cmd-scrim"]')?.remove(),!Q)return;const u=document.createElement("div");u.className="pacom-cmd-scrim",u.dataset.role="cmd-scrim",u.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${we("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${Pe(D)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${V()}
        </div>
      </div>
    `,a.appendChild(u),u.addEventListener("click",n=>{n.target===u&&(Q=!1,ne())});const $=u.querySelector('[data-role="cmd-input"]'),O=u.querySelector('[data-role="cmd-body"]');O&&ye(O),$?.focus(),$?.addEventListener("input",n=>{D=n.currentTarget.value,O&&(O.innerHTML=V(),ye(O))})}function Ee(){if(!F)return"";const u=o.displayName.slice(0,1)||"U",$=!!(e.createOrganization&&o.role==="org_admin");return`
      <div class="pacom-org-popover ${E?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${G.map(O=>{const n=O.id===J;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${n}" data-pop-org="${Pe(O.id)}">
                ${le(O)}
                <span class="pacom-pop-text">
                  <b>${Pe(O.name)}</b>
                  <small>${O.projectCount>0?`${O.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${n?we("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${$?T?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${we("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${we("settings",16)}</span>
          <span class="pacom-pop-text">机构与权限</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${Pe(u)}</span>
          <span class="pacom-pop-text">
            <b>${Pe(o.displayName)}</b>
            <small>${Pe(o.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${we("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function fe(u){switch(X(p)||(p="home",window.location.hash="#home"),document.title=`${nt[p]} · PACOM Station`,p){case"home":await Nt(u,e,o);return;case"analysis":await Rt(u,e,o);return;case"alarms":await Jt(u,e,o);return;case"scenes":await ls(u,e,o);return;case"settings":await cs(u,e,o);return;case"deployment":await ss(u,e,o);return;case"account":await Gt(u,e,o,$=>{o=$,K(),ce()},N);return}}async function N(){F=!1,M=!1,Q=!1,q();try{await e.logout()}finally{window.location.hash="#login",r()}}function K(){const u=a.querySelector('[data-role="nav-list"]');u&&(u.innerHTML=de(),oe())}function ce(){a.querySelector('[data-role="org-popover"]')?.remove();const u=a.querySelector('[data-role="org-menu-btn"]');if(u&&u.setAttribute("aria-expanded",String(F)),!F)return;const $=document.createElement("div");$.innerHTML=Ee().trim();const O=$.firstElementChild;O&&(a.appendChild(O),xe())}function oe(){a.querySelectorAll("[data-route]").forEach(u=>{u.addEventListener("click",()=>{const $=u.dataset.route;$===p&&!M||(p=$,M=!1,F=!1,window.location.hash=`#${p}`,Le(!0))})})}async function pe(u){if(!e.switchOrganization)return;await e.switchOrganization(u),await re();const $=await e.getSpatialTree(),O=$.projects[0],n=O?$.buildings.find(P=>P.projectId===O.id):void 0,w=n?$.floors.find(P=>P.buildingId===n.id&&P.id===I.floorId)??$.floors.find(P=>P.buildingId===n.id):void 0;O&&n&&w?va({level:"floor",projectId:O.id,buildingId:n.id,floorId:w.id}):O&&n?va({level:"building",projectId:O.id,buildingId:n.id}):O?va({level:"project",projectId:O.id}):va({level:"all-projects"}),F=!1,T=!1,M=!1,await Le(!0),ve()}function xe(){a.querySelectorAll("[data-pop-org]").forEach(u=>{u.addEventListener("click",()=>{const $=u.dataset.popOrg;if($){if($===J){F=!1,ce();return}pe($)}})}),a.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",u=>{u.stopPropagation(),T=!T,ce(),T&&a.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),a.querySelector("[data-create-org-form]")?.addEventListener("submit",async u=>{if(u.preventDefault(),!e.createOrganization)return;const $=new FormData(u.currentTarget),O=String($.get("orgName")??"").trim();if(!O)return;const n=await e.createOrganization(O);await pe(n.id)}),a.querySelectorAll('[data-pop-act="go-account"]').forEach(u=>{u.addEventListener("click",()=>{F=!1,T=!1,M=!1,p="account",window.location.hash="#account",Le(!0)})}),a.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{N()})}async function Le(u){const $=a.querySelector('[data-role="main-stage"]');if(!u&&$){const n=a.querySelector(".pacom-nav-rail");n&&(n.classList.toggle("is-collapsed",E),n.classList.toggle("is-mobile-open",M));const w=a.querySelector('[data-role="mobile-scrim"]');w&&w.classList.toggle("is-open",M),ce();return}a.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${we("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${nt[p]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Pe(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${M?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${E?"is-collapsed":""} ${M?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${rs}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${E?"展开侧栏":"收起侧栏"}" aria-label="${E?"展开侧栏":"收起侧栏"}">
              ${we("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${we("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${de()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${p==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${F}" title="${Pe(Y().name)} · ${Pe(o.displayName)}">
              ${le(Y())}
              <span class="pacom-org-name">${Pe(Y().name)}</span>
              ${we("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,a.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{E=!E,F=!1,localStorage.setItem(kt,E?"1":"0");const n=a.querySelector(".pacom-nav-rail"),w=a.querySelector('[data-role="toggle-sidebar"]');n&&n.classList.toggle("is-collapsed",E),w&&(w.title=E?"展开侧栏":"收起侧栏",w.setAttribute("aria-label",w.title),w.innerHTML=we("panel-left",16)),ce()}),a.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{F=!1,ce(),Q=!0,ne()}),a.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{M=!M,Le(!1)}),a.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{M=!1,F=!1,Le(!1)}),a.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",n=>{n.stopPropagation(),F=!F,ce()}),oe(),ce(),ne();const O=a.querySelector('[data-role="main-stage"]');O&&await fe(O)}const L=u=>{const $=u.target;F&&!$?.closest('[data-role="org-popover"]')&&!$?.closest('[data-role="org-menu-btn"]')&&(F=!1,ce())},B=u=>{if((u.metaKey||u.ctrlKey)&&u.key.toLowerCase()==="k"){u.preventDefault(),F=!1,ce(),Q=!Q,ne();return}u.key==="Escape"&&(Q?(Q=!1,ne()):F?(F=!1,ce()):M&&(M=!1,Le(!1)))},Te=()=>{p=tt(),F=!1,M=!1,Q=!1,Le(!0),ve()};function q(){document.removeEventListener("click",L),document.removeEventListener("keydown",B),window.removeEventListener("hashchange",Te),ka.get(a)===q&&ka.delete(a)}ka.set(a,q),document.addEventListener("click",L),document.addEventListener("keydown",B),window.addEventListener("hashchange",Te),await Le(!0),ve()}const na=["password","sms"];function _t(a){const e=Qe(a).replace(/[\s-]/g,"");return/^(\+?86)?1[3-9]\d{9}$/.test(e)}const Ea=new WeakMap;function Lt(a){Ea.get(a)?.()}function us(a,e,t,r){Ea.get(a)?.(),a.classList.add("bare-login"),document.title="登录 · PACOM Station";let o=!1,p=!1,E=(r?.prefillAccount??"").trim(),M="",F=_t(E)?E:"",T="",G=!1;const J=(r?.notice??"").trim();let D={},Q="",ge=!1,R="",X=0,Y=null,le=null,re=null,ve=!1,de="",V="",ye=null,ne=!1;const Ee=Ct();function fe(n){if(n.key==="Escape"){if(Ee.isOpen()){n.preventDefault(),Ee.close(!0);return}re&&(n.preventDefault(),B())}}function N(n){const w=a.querySelector('[data-role="mode-seg"]'),P=w?.querySelector(".au-mode-indicator"),Z=w?.querySelector('.au-mode-tab[aria-selected="true"]');!P||!Z||(P.style.transition=n?"":"none",P.style.transform=`translateX(${Z.offsetLeft}px)`,P.style.width=`${Z.offsetWidth}px`,n||(P.offsetWidth,P.style.transition=""))}function K(){N(!1)}function ce(){ne=!0,Ee.destroy(),Y!==null&&(window.clearInterval(Y),Y=null),le!==null&&(window.clearTimeout(le),le=null),document.removeEventListener("keydown",fe),window.removeEventListener("resize",K),a.classList.remove("bare-login"),Ea.get(a)===ce&&Ea.delete(a)}document.addEventListener("keydown",fe),window.addEventListener("resize",K),Ea.set(a,ce);function oe(n=60){X=n,Y!==null&&window.clearInterval(Y),Y=window.setInterval(()=>{X-=1,X<=0&&(X=0,Y!==null&&(window.clearInterval(Y),Y=null));const w=a.querySelector('[data-act="send-sms"]');w&&(w.disabled=X>0,w.textContent=X>0?`${X} 秒后重发`:R?"重新获取":"获取验证码")},1e3)}function pe(){const n=a.querySelector("#au-login-ferr");if(n)if(Q){n.hidden=!1;const w=n.querySelector('[data-role="ferr-text"]');w&&(w.textContent=Q)}else n.hidden=!0}function xe(n){const w=a.querySelector(`.au-field[data-f="${n}"]`),P=a.querySelector(`#au-${n}`),Z=a.querySelector(`#au-${n}-err`),Ie=D[n]??"";w?.classList.toggle("bad",!!Ie),P?.setAttribute("aria-invalid",Ie?"true":"false"),Z&&(Z.textContent=Ie)}function Le(){const n=a.querySelector('form[data-form="login"] fieldset'),w=a.querySelector('form[data-form="login"] button[type="submit"]');n&&(n.disabled=ge),w&&(w.disabled=ge,w.innerHTML=ge?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"<span>登录</span>")}function L(n,w){Ee.close(!1),ye=w??(document.activeElement instanceof HTMLElement?document.activeElement:null),re=n,q(),n==="reset"?a.querySelector("#au-rs-id")?.focus():a.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function B(){if(!re)return;re=null,le!==null&&(window.clearTimeout(le),le=null),ve=!1,q();const n=ye;ye=null,n&&document.contains(n)&&n.focus({preventScroll:!0})}function Te(){if(!re)return"";if(re==="reset"){const n=de.trim().length>0;return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ft}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field" style="margin-bottom:0;">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${d(de)}" />
                  </div>
                </div>
                <div class="au-notice-soft" data-role="reset-notice" role="status" aria-live="polite" ${V?"":"hidden"}>
                  ${ot}
                  <span data-role="reset-notice-text">${d(V)}</span>
                </div>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${n?"":"disabled"}>发送验证码</button>
            </div>
          </section>
        </div>
      `}return re==="contact"?zt(ve):""}function q(){const n=a.querySelector('[data-role="modal-host"]');if(!n||(n.innerHTML=Te(),!re))return;n.querySelectorAll('[data-act="close-modal"]').forEach(Z=>{Z.addEventListener("click",()=>B())}),n.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",Z=>{Z.target===Z.currentTarget&&B()}),n.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{const Z=n.querySelector('[data-act="copy-support"]');try{await navigator.clipboard.writeText("support@pacom.cn")}catch{}ve=!0,Z&&(Z.classList.add("is-copied"),Z.innerHTML=`${Ot}<span>已复制</span>`),le!==null&&window.clearTimeout(le),le=window.setTimeout(()=>{le=null,ve=!1;const Ie=n.querySelector('[data-act="copy-support"]');Ie&&(Ie.classList.remove("is-copied"),Ie.innerHTML=`${Dt}<span>复制</span>`)},1800)});const w=n.querySelector("#au-rs-id"),P=n.querySelector('[data-role="reset-submit"]');w?.addEventListener("input",()=>{de=w.value,P&&(P.disabled=de.trim().length===0)}),n.querySelector("#au-reset-form")?.addEventListener("submit",async Z=>{if(Z.preventDefault(),de=Qe(w?.value??""),!de)V="请输入电子邮箱或手机号码";else try{V=`如该账号已注册，验证码已发送至 ${(await e.sendVerificationCode({target:de,purpose:"reset"})).maskedTarget||$a(de)}；如需协助请联系机构管理员。`}catch{V="请联系机构管理员重置账号密码，或确认后查收重置验证码。"}const Ie=n.querySelector('[data-role="reset-notice"]'),Ae=n.querySelector('[data-role="reset-notice-text"]');Ie&&Ae&&(Ae.textContent=V,Ie.hidden=!1)})}function u(){Ee.close(!1);const n=`
      <span data-role="login-novcode-wrap" ${R?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-login-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-login-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-login-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `,w=o?`
        <div class="au-field ${D.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(F)}" aria-invalid="${D.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${X>0?"disabled":""}>
              ${X>0?`${X} 秒后重发`:R?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${d(D.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${R?`验证码已发送至 ${d(R)}`:""}</p>
        </div>
      `:`
        <div class="au-field ${D.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(E)}" aria-invalid="${D.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${d(D.id??"")}</p>
        </div>
      `,P=o?`
        <div class="au-field ${D.scode?"bad":""}" data-f="scode">
          <div class="au-lab">
            <label for="au-scode">短信验证码</label>
            ${n}
          </div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(T)}" aria-invalid="${D.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${d(D.scode??"")}</p>
        </div>
      `:`
        <div class="au-field ${D.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab">
            <label for="au-pwd">密码</label>
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${p?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(M)}" aria-invalid="${D.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${p?"隐藏密码":"显示密码"}">
              ${p?wa:ya}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${d(D.pwd??"")}</p>
        </div>
      `,Z=a.querySelector('[data-role="fields-host"]');Z&&(Z.innerHTML=`${w}${P}`,O(Z))}function $(n,w=!1){const P=n==="sms";o===P||ge||(P&&!F.trim()&&_t(E)?F=E.trim():!P&&!E.trim()&&F.trim()&&(E=F.trim()),o=P,D={},Q="",a.querySelectorAll('[data-act="switch-mode"]').forEach(Z=>{const Ie=Z.dataset.mode===n;Z.setAttribute("aria-selected",String(Ie)),Z.tabIndex=Ie?0:-1,Ie&&w&&Z.focus({preventScroll:!0})}),N(!0),u(),pe(),w||(o?R?a.querySelector("#au-scode")?.focus({preventScroll:!0}):F.trim()?a.querySelector('[data-act="send-sms"]')?.focus({preventScroll:!0}):a.querySelector("#au-sphone")?.focus({preventScroll:!0}):a.querySelector(E.trim()?"#au-pwd":"#au-id")?.focus({preventScroll:!0})))}function O(n){Ee.bind(n);const w=n.querySelector("#au-id"),P=n.querySelector("#au-pwd"),Z=n.querySelector("#au-sphone"),Ie=n.querySelector("#au-scode");w?.addEventListener("input",()=>{E=w.value,(D.id||Q)&&(delete D.id,Q="",xe("id"),pe())}),P?.addEventListener("input",()=>{M=P.value,(D.pwd||Q)&&(delete D.pwd,Q="",xe("pwd"),pe())}),Z?.addEventListener("input",()=>{if(F=Z.value,R){R="";const Ae=n.querySelector("#au-sphone-hint");Ae&&(Ae.textContent="");const $e=n.querySelector('[data-role="login-novcode-wrap"]');$e&&($e.hidden=!0),Ee.close(!1);const W=n.querySelector('[data-act="send-sms"]');W&&X===0&&(W.textContent="获取验证码")}(D.sphone||Q)&&(delete D.sphone,Q="",xe("sphone"),pe())}),Ie?.addEventListener("input",()=>{T=Ie.value.replace(/\D/g,"").slice(0,6),Ie.value=T,(D.scode||Q)&&(delete D.scode,Q="",xe("scode"),pe())}),n.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",Ae=>{p=!p;const $e=Ae.currentTarget,W=n.querySelector("#au-pwd");if(W){const x=W.selectionStart,h=W.selectionEnd;W.type=p?"text":"password",W.focus({preventScroll:!0}),x!==null&&h!==null&&W.setSelectionRange(x,h)}$e.setAttribute("aria-label",p?"隐藏密码":"显示密码"),$e.innerHTML=p?wa:ya}),n.querySelector('[data-act="send-sms"]')?.addEventListener("click",async()=>{const Ae=la(F);if(Ae){D={...D,sphone:Ae},xe("sphone"),n.querySelector("#au-sphone")?.focus({preventScroll:!0});return}delete D.sphone,xe("sphone");const $e=n.querySelector('[data-act="send-sms"]');$e&&($e.disabled=!0,$e.textContent="发送中…");try{const W=await e.sendVerificationCode({target:Qe(F),purpose:"login"});if(ne)return;R=W.maskedTarget||$a(F);const x=n.querySelector("#au-sphone-hint");x&&(x.textContent=`验证码已发送至 ${R}`);const h=n.querySelector('[data-role="login-novcode-wrap"]');h&&(h.hidden=!1),oe(W.cooldownSeconds||60),$e&&($e.disabled=!0,$e.textContent=`${X} 秒后重发`),n.querySelector("#au-scode")?.focus({preventScroll:!0})}catch(W){if(ne)return;$e&&($e.disabled=!1,$e.textContent=R?"重新获取":"获取验证码"),Q=W instanceof Error?W.message:"暂时无法发送验证码，请稍后再试。",pe()}}),n.querySelector('[data-act="open-reset"]')?.addEventListener("click",Ae=>{de=E.trim(),V="",L("reset",Ae.currentTarget)})}a.innerHTML=`
    <div class="au au-split au-auth-shell">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${Tt}</div>
            <h1 class="au-h1">登录</h1>
            ${J?`<div class="au-notice-soft au-login-notice" role="status">${ot}<span>${d(J)}</span></div>`:""}
            <div class="au-mode-seg" role="tablist" aria-label="登录方式" data-role="mode-seg">
              <span class="au-mode-indicator" aria-hidden="true"></span>
              <button type="button" role="tab" aria-selected="true" tabindex="0" class="au-mode-tab" data-act="switch-mode" data-mode="password">密码登录</button>
              <button type="button" role="tab" aria-selected="false" tabindex="-1" class="au-mode-tab" data-act="switch-mode" data-mode="sms">短信登录</button>
            </div>
            <form class="au-compact-form" data-form="login" novalidate>
              <fieldset>
                <div data-role="fields-host"></div>
                <div class="au-ferr" id="au-login-ferr" role="alert" hidden>
                  ${ba}
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
        ${qt()}
      </section>
      <aside class="au-art" aria-hidden="true">
        <div class="au-art-frame">
          <img src="./media/auth-hero.jpg" alt="" />
        </div>
      </aside>
    </div>
    <div data-role="modal-host"></div>
  `,a.querySelector('input[name="keep"]')?.addEventListener("change",n=>{G=n.currentTarget.checked}),a.querySelector('form[data-form="login"]')?.addEventListener("submit",async n=>{if(n.preventDefault(),!ge){if(D={},Q="",o){const w=la(F);w&&(D.sphone=w),/^\d{6}$/.test(T.trim())||(D.scode="请输入 6 位验证码"),xe("sphone"),xe("scode")}else E.trim()||(D.id="请输入电子邮箱或手机号码"),M||(D.pwd="请输入密码"),xe("id"),xe("pwd");if(pe(),Object.keys(D).length>0){const w=Object.keys(D)[0];a.querySelector(`#au-${w}`)?.focus({preventScroll:!0});return}ge=!0,Le();try{const w=await e.login({account:Qe(o?F:E),password:o?T.trim():M});ce(),t(w)}catch(w){ge=!1,Q=w instanceof Error?w.message:"账户或密码不正确",Le(),pe()}}}),a.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{r?.onOpenRegister?(ce(),r.onOpenRegister()):window.location.hash="#register"}),a.querySelectorAll('[data-act="switch-mode"]').forEach(n=>{n.addEventListener("click",()=>{const w=n.dataset.mode;w&&$(w,!1)}),n.addEventListener("keydown",w=>{const P=o?"sms":"password",Z=na.indexOf(P);w.key==="ArrowRight"?(w.preventDefault(),$(na[(Z+1)%na.length],!0)):w.key==="ArrowLeft"?(w.preventDefault(),$(na[(Z-1+na.length)%na.length],!0)):w.key==="Home"?(w.preventDefault(),$(na[0],!0)):w.key==="End"&&(w.preventDefault(),$(na[na.length-1],!0))})}),a.querySelector('[data-act="open-contact"]')?.addEventListener("click",n=>{ve=!1,L("contact",n.currentTarget)}),u(),N(!1),document.fonts?.ready.then(()=>{ne||N(!1)})}const oa=["join","apply"],ma=1e3,fa=50,Ma=60,jt=110,Ia=new WeakMap;function At(a){Ia.get(a)?.()}function ms(a,e,t){Ia.get(a)?.(),a.classList.add("bare-login");let r=!1,o=t.initialMode??"join",p=null,E=!1,M=null,F=null,T=null,G=null,J=!1;const D=(t.inviteToken??"").trim(),Q=t.currentSession??null;let ge=!!D,R=null,X="",Y="",le="",re="",ve="",de=0,V=null,ye="",ne=!1,Ee=!1,fe=it(t.prefillCode??""),N="",K=!1,ce=0,oe="",pe="",xe="",Le="",L="",B=!1,Te=!1,q="",u=0,$=null,O="",n="",w="",P="",Z="",Ie="",Ae="",$e="",W="",x=!1,h="",H=0,ee=null,be=null,b={},se="",ue=!1;const Oe=Ct();function We(f){if(f.key==="Escape"){if(Oe.isOpen()){f.preventDefault(),Oe.close(!0);return}p&&(f.preventDefault(),Ze())}}function me(f){const A=a.querySelector('[data-role="reg-seg"]'),U=A?.querySelector(".au-mode-indicator"),te=A?.querySelector('.au-mode-tab[aria-selected="true"]');!U||!te||(U.style.transition=f?"":"none",U.style.transform=`translateX(${te.offsetLeft}px)`,U.style.width=`${te.offsetWidth}px`,f||(U.offsetWidth,U.style.transition=""))}function Se(){me(!1)}function Ne(){r=!0,Oe.destroy(),$!==null&&(window.clearInterval($),$=null),ee!==null&&(window.clearInterval(ee),ee=null),V!==null&&(window.clearInterval(V),V=null),be!==null&&(window.clearTimeout(be),be=null),document.removeEventListener("keydown",We),window.removeEventListener("resize",Se),a.classList.remove("bare-login"),Ia.get(a)===Ne&&Ia.delete(a)}document.addEventListener("keydown",We),window.addEventListener("resize",Se),Ia.set(a,Ne);function Xe(f){u=f,$!==null&&window.clearInterval($),$=window.setInterval(()=>{u-=1,u<=0&&(u=0,$!==null&&(window.clearInterval($),$=null));const A=a.querySelector('[data-act="jn-send-code"]');A&&(A.disabled=u>0,A.textContent=u>0?`${u} 秒后重发`:q?"重新获取":"获取验证码")},1e3)}function Sa(f){H=f,ee!==null&&window.clearInterval(ee),ee=window.setInterval(()=>{H-=1,H<=0&&(H=0,ee!==null&&(window.clearInterval(ee),ee=null));const A=a.querySelector('[data-act="ap-send-code"]');A&&(A.disabled=H>0,A.textContent=H>0?`${H} 秒后重发`:h?"重新获取":"获取验证码")},1e3)}function Me(){const f=a.querySelector("#au-reg-ferr");if(f)if(se){f.hidden=!1;const A=f.querySelector('[data-role="ferr-text"]');A&&(A.textContent=se)}else f.hidden=!0}function ie(f){const A=a.querySelector(`.au-field[data-f="${f}"]`),U=a.querySelector(`#au-${f}`),te=a.querySelector(`#au-${f}-err`),je=b[f]??"";A?.classList.toggle("bad",!!je),U?.setAttribute("aria-invalid",je?"true":"false"),te&&(te.textContent=je)}function ia(f,A){const U=a.querySelector("form[data-reg-form] fieldset"),te=a.querySelector('form[data-reg-form] button[type="submit"]');U&&(U.disabled=ue),te&&(te.disabled=ue,te.innerHTML=ue?`<span class="au-spinner" aria-hidden="true"></span><span>${d(f)}</span>`:`<span>${d(A)}</span>`)}function ca(f,A){Oe.close(!1),M=A??(document.activeElement instanceof HTMLElement?document.activeElement:null),p=f,He(),a.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function Ze(){if(!p)return;p=null,F=null,be!==null&&(window.clearTimeout(be),be=null),E=!1,He();const f=M;M=null,f&&document.contains(f)&&f.focus({preventScroll:!0})}function Be(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">请阅读并同意</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ft}</button>
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
    `}function He(){const f=a.querySelector('[data-role="modal-host"]');if(f){if(!p){f.innerHTML="";return}f.innerHTML=p==="contact"?zt(E):Be(),f.querySelectorAll('[data-act="close-modal"]').forEach(A=>{A.addEventListener("click",()=>Ze())}),f.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",A=>{A.target===A.currentTarget&&Ze()}),f.querySelector('[data-act="consent-confirm"]')?.addEventListener("click",()=>{const A=F;F=null,p=null,He(),A?.()}),f.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{const A=f.querySelector('[data-act="copy-support"]');try{await navigator.clipboard.writeText("support@pacom.cn")}catch{}E=!0,A&&(A.classList.add("is-copied"),A.innerHTML=`${Ot}<span>已复制</span>`),be!==null&&window.clearTimeout(be),be=window.setTimeout(()=>{be=null,E=!1;const U=f.querySelector('[data-act="copy-support"]');U&&(U.classList.remove("is-copied"),U.innerHTML=`${Dt}<span>复制</span>`)},1800)})}}function Fe(f,A,U,te){return`
      <div class="au-field au-consent-field ${b[te]?"bad":""}" data-f="${te}">
        <div class="au-check au-consent-row">
          <input id="${f}" type="checkbox" name="${A}" ${U?"checked":""} aria-invalid="${b[te]?"true":"false"}" />
          <span class="au-consent-text">
            <label class="au-consent-label" for="${f}">我已阅读并同意 PACOM </label><a class="au-consent-link" href="${qa}" target="_blank" rel="noopener noreferrer">隐私政策</a><label class="au-consent-label" for="${f}">和</label><a class="au-consent-link" href="${qa}" target="_blank" rel="noopener noreferrer">使用条款</a>
          </span>
        </div>
        <p class="au-err" id="au-${te}-err" aria-live="polite">${d(b[te]??"")}</p>
      </div>
    `}async function Ke(f){const A=f.replace(/\D/g,"");if(A.length!==9){N="",K=!1,ta();return}const U=++ce;K=!0,N="",ta();try{const te=await e.resolveInviteCode(A);if(r||U!==ce)return;K=!1,te.valid&&te.organizationName?(N=te.organizationName,delete b.jn_code):(N="",b.jn_code=te.message??"邀请码不正确或已失效，请向机构管理员确认。"),ie("jn_code"),ta()}catch(te){if(r||U!==ce)return;K=!1,N="",b.jn_code=te instanceof Error?te.message:"暂时无法核验邀请码，请稍后再试。",ie("jn_code"),ta()}}function ta(){const f=a.querySelector('[data-role="jn-code-match"]'),A=a.querySelector('[data-role="jn-nocode-wrap"]');f&&(N?(f.hidden=!1,f.innerHTML=`${rt}<span>目标机构：${d(N)}</span>`):(f.hidden=!0,f.innerHTML="")),A&&(A.hidden=!!N)}function ra(){const f=`
      <span data-role="jn-nocode-wrap" ${N?"hidden":""}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-nocode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-nocode-pop"><span>没有邀请码？</span></button>
        <span id="au-jn-nocode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="没有邀请码说明" hidden>
          <span class="ws-info-text">请向所在机构的管理员获取 9 位邀请码；如需为新企业开通，请切换上方「申请开通机构」。</span>
        </span>
      </span>
    `,A=`
      <span data-role="jn-novcode-wrap" ${q?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-jn-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认邮箱或手机号码无误，检查垃圾邮件或短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">填写机构 9 位邀请码，管理员批准后即可访问。</p>
      <form class="au-compact-form au-reg-form" data-reg-form="join" novalidate>
        <fieldset ${ue?"disabled":""}>
          <div class="au-field ${b.jn_code?"bad":""}" data-f="jn_code">
            <div class="au-lab">
              <label for="au-jn_code">机构邀请码</label>
              ${f}
            </div>
            <div class="au-ctl">
              <input id="au-jn_code" name="jn_code" class="au-in" type="text" inputmode="numeric" autocomplete="off" maxlength="11" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(fe)}" aria-invalid="${b.jn_code?"true":"false"}" />
            </div>
            <div class="au-code-match" data-role="jn-code-match" role="status" aria-live="polite" ${N?"":"hidden"}>
              ${N?`${rt}<span>目标机构：${d(N)}</span>`:""}
            </div>
            <p class="au-err" id="au-jn_code-err" aria-live="polite">${d(b.jn_code??"")}</p>
          </div>

          <div class="au-field ${b.jn_name?"bad":""}" data-f="jn_name">
            <div class="au-lab"><label for="au-jn_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-jn_name" name="jn_name" class="au-in" type="text" autocomplete="name" value="${d(oe)}" aria-invalid="${b.jn_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_name-err" aria-live="polite">${d(b.jn_name??"")}</p>
          </div>

          <div class="au-field ${b.jn_dept?"bad":""}" data-f="jn_dept">
            <div class="au-lab"><label for="au-jn_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-jn_dept" name="jn_dept" class="au-in" type="text" autocomplete="organization-title" value="${d(pe)}" aria-invalid="${b.jn_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_dept-err" aria-live="polite">${d(b.jn_dept??"")}</p>
          </div>

          <div class="au-field ${b.jn_account?"bad":""}" data-f="jn_account">
            <div class="au-lab"><label for="au-jn_account">电子邮箱或手机号码</label></div>
            <div class="au-ctl">
              <input id="au-jn_account" name="jn_account" class="au-in has-code-btn" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(xe)}" aria-invalid="${b.jn_account?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="jn-send-code" ${u>0?"disabled":""}>
                ${u>0?`${u} 秒后重发`:q?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-jn_account-err" aria-live="polite">${d(b.jn_account??"")}</p>
            <p class="au-hint" id="au-jn_account-hint" role="status" aria-live="polite">${q?`验证码已发送至 ${d(q)}`:""}</p>
          </div>

          <div class="au-field ${b.jn_vcode?"bad":""}" data-f="jn_vcode">
            <div class="au-lab">
              <label for="au-jn_vcode">验证码</label>
              ${A}
            </div>
            <div class="au-ctl">
              <input id="au-jn_vcode" name="jn_vcode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(Le)}" aria-invalid="${b.jn_vcode?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_vcode-err" aria-live="polite">${d(b.jn_vcode??"")}</p>
          </div>

          <div class="au-field ${b.jn_pwd?"bad":""}" data-f="jn_pwd">
            <div class="au-lab au-label-row">
              <span class="au-lab-group">
                <label for="au-jn_pwd">设置密码</label>
                ${Ca("au-jn-pwd-info","设置密码说明",dt)}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-jn_pwd" name="jn_pwd" class="au-in has-suffix" type="${B?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(L)}" aria-invalid="${b.jn_pwd?"true":"false"}" />
              <button type="button" class="au-suffix au-eye" data-act="jn-toggle-eye" aria-controls="au-jn_pwd" aria-label="${B?"隐藏密码":"显示密码"}">
                ${B?wa:ya}
              </button>
            </div>
            <p class="au-err" id="au-jn_pwd-err" aria-live="polite">${d(b.jn_pwd??"")}</p>
          </div>

          ${Fe("au-jn_consent","jn_consent",Te,"jn_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${se?"":"hidden"}>
            ${ba}
            <span data-role="ferr-text">${d(se)}</span>
          </div>

          <button type="submit" class="au-primary au-compact-primary" ${ue?"disabled":""}>
            ${ue?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>注册并申请加入</span>"}
          </button>
        </fieldset>
      </form>
    `}function ze(){const f=pt(n),A=sa(W),U=A>=ma*.8?`${A} / ${ma}`:"",te=`
      <span data-role="ap-novcode-wrap" ${h?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-ap-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-ap-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-ap-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">提交企业信息，经 PACOM 审核通过后开通机构。</p>
      <form class="au-compact-form au-reg-form" data-reg-form="apply" novalidate>
        <fieldset ${ue?"disabled":""}>
          <div class="au-field ${b.ap_org?"bad":""}" data-f="ap_org">
            <div class="au-lab au-label-row">
              <span class="au-lab-group">
                <label for="au-ap_org">机构名称</label>
                ${Ca("au-ap-org-info","机构名称说明",["请填写营业执照等登记证书上的完整名称。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_org" name="ap_org" class="au-in" type="text" autocomplete="organization" value="${d(O)}" aria-invalid="${b.ap_org?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_org-err" aria-live="polite">${d(b.ap_org??"")}</p>
          </div>

          <div class="au-field ${b.ap_region?"bad":""}" data-f="ap_region">
            <div class="au-lab"><label for="au-ap_prov">所在地区</label></div>
            <div class="au-row-eq">
              <div class="au-select-wrap">
                <select id="au-ap_prov" name="ap_prov" class="au-select ${n?"":"is-placeholder"}" aria-label="省份" aria-invalid="${b.ap_region?"true":"false"}">
                  <option value="" ${n?"":"selected"}>省份</option>
                  ${Pt.map(([je])=>`<option value="${d(je)}" ${n===je?"selected":""}>${d(je)}</option>`).join("")}
                </select>
                ${ut}
              </div>
              <div class="au-select-wrap">
                <select id="au-ap_city" name="ap_city" class="au-select ${w?"":"is-placeholder"}" aria-label="城市" ${n?"":"disabled"} aria-invalid="${b.ap_region?"true":"false"}">
                  <option value="" ${w?"":"selected"}>城市</option>
                  ${f.map(je=>`<option value="${d(je)}" ${w===je?"selected":""}>${d(je)}</option>`).join("")}
                </select>
                ${ut}
              </div>
            </div>
            <p class="au-err" id="au-ap_region-err" aria-live="polite">${d(b.ap_region??"")}</p>
          </div>

          <div class="au-field ${b.ap_name?"bad":""}" data-f="ap_name">
            <div class="au-lab"><label for="au-ap_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-ap_name" name="ap_name" class="au-in" type="text" autocomplete="name" value="${d(P)}" aria-invalid="${b.ap_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_name-err" aria-live="polite">${d(b.ap_name??"")}</p>
          </div>

          <div class="au-field ${b.ap_dept?"bad":""}" data-f="ap_dept">
            <div class="au-lab"><label for="au-ap_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-ap_dept" name="ap_dept" class="au-in" type="text" autocomplete="organization-title" value="${d(Z)}" aria-invalid="${b.ap_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_dept-err" aria-live="polite">${d(b.ap_dept??"")}</p>
          </div>

          <div class="au-field ${b.ap_email?"bad":""}" data-f="ap_email">
            <div class="au-lab"><label for="au-ap_email">电子邮箱</label></div>
            <div class="au-ctl">
              <input id="au-ap_email" name="ap_email" class="au-in" type="email" inputmode="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(Ie)}" aria-invalid="${b.ap_email?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_email-err" aria-live="polite">${d(b.ap_email??"")}</p>
          </div>

          <div class="au-field ${b.ap_phone?"bad":""}" data-f="ap_phone">
            <div class="au-lab"><label for="au-ap_phone">手机号码</label></div>
            <div class="au-ctl">
              <input id="au-ap_phone" name="ap_phone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(Ae)}" aria-invalid="${b.ap_phone?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="ap-send-code" ${H>0?"disabled":""}>
                ${H>0?`${H} 秒后重发`:h?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-ap_phone-err" aria-live="polite">${d(b.ap_phone??"")}</p>
            <p class="au-hint" id="au-ap_phone-hint" role="status" aria-live="polite">${h?`验证码已发送至 ${d(h)}`:""}</p>
          </div>

          <div class="au-field ${b.ap_sms?"bad":""}" data-f="ap_sms">
            <div class="au-lab">
              <label for="au-ap_sms">验证码</label>
              ${te}
            </div>
            <div class="au-ctl">
              <input id="au-ap_sms" name="ap_sms" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d($e)}" aria-invalid="${b.ap_sms?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_sms-err" aria-live="polite">${d(b.ap_sms??"")}</p>
          </div>

          <div class="au-field ${b.ap_overview?"bad":""}" data-f="ap_overview">
            <div class="au-lab"><label for="au-ap_overview">项目概况<span class="fld-opt">选填</span></label></div>
            <div class="ws-textarea-shell au-note-shell">
              <textarea id="au-ap_overview" name="ap_overview" class="au-in au-ta au-ta-std" rows="3" aria-invalid="${b.ap_overview?"true":"false"}">${d(W)}</textarea>
              <button type="button" class="ws-resize" data-space-resize="au-ap_overview" aria-label="调整项目概况输入框高度；按上下方向键调整"></button>
            </div>
            <p class="au-err" id="au-ap_overview-err" aria-live="polite">${d(b.ap_overview??"")}</p>
            <p class="au-hint au-char-count" id="au-ap_overview-count" ${U?"":"hidden"}>${d(U)}</p>
          </div>

          ${Fe("au-ap_consent","ap_consent",x,"ap_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${se?"":"hidden"}>
            ${ba}
            <span data-role="ferr-text">${d(se)}</span>
          </div>

          <button type="submit" class="au-primary au-compact-primary" ${ue?"disabled":""}>
            ${ue?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>提交开通申请</span>"}
          </button>
        </fieldset>
      </form>
    `}async function da(){const f=Ka(xe);if(f){b.jn_account=f,ie("jn_account"),a.querySelector("#au-jn_account")?.focus({preventScroll:!0});return}delete b.jn_account,ie("jn_account");const A=a.querySelector('[data-act="jn-send-code"]');A&&(A.disabled=!0,A.textContent="发送中…");try{const U=await e.sendVerificationCode({target:Qe(xe),purpose:"register_join",consentAcceptedAt:new Date().toISOString()});if(r)return;q=U.maskedTarget||$a(xe);const te=a.querySelector("#au-jn_account-hint");te&&(te.textContent=`验证码已发送至 ${q}`);const je=a.querySelector('[data-role="jn-novcode-wrap"]');je&&(je.hidden=!1),Xe(U.cooldownSeconds||60),A&&(A.disabled=!0,A.textContent=`${u} 秒后重发`),a.querySelector("#au-jn_vcode")?.focus({preventScroll:!0})}catch(U){if(r)return;A&&(A.disabled=!1,A.textContent=q?"重新获取":"获取验证码"),se=U instanceof Error?U.message:"暂时无法发送验证码，请稍后再试。",Me()}}async function xa(){const f=la(Ae);if(f){b.ap_phone=f,ie("ap_phone"),a.querySelector("#au-ap_phone")?.focus({preventScroll:!0});return}delete b.ap_phone,ie("ap_phone");const A=a.querySelector('[data-act="ap-send-code"]');A&&(A.disabled=!0,A.textContent="发送中…");try{const U=await e.sendVerificationCode({target:Qe(Ae),purpose:"org_apply",consentAcceptedAt:new Date().toISOString()});if(r)return;h=U.maskedTarget||$a(Ae);const te=a.querySelector("#au-ap_phone-hint");te&&(te.textContent=`验证码已发送至 ${h}`);const je=a.querySelector('[data-role="ap-novcode-wrap"]');je&&(je.hidden=!1),Sa(U.cooldownSeconds||60),A&&(A.disabled=!0,A.textContent=`${H} 秒后重发`),a.querySelector("#au-ap_sms")?.focus({preventScroll:!0})}catch(U){if(r)return;A&&(A.disabled=!1,A.textContent=h?"重新获取":"获取验证码"),se=U instanceof Error?U.message:"暂时无法发送验证码，请稍后再试。",Me()}}function Ua(f){Oe.bind(f);const A=f.querySelector("#au-jn_code"),U=f.querySelector("#au-jn_name"),te=f.querySelector("#au-jn_dept"),je=f.querySelector("#au-jn_account"),j=f.querySelector("#au-jn_vcode"),Ve=f.querySelector("#au-jn_pwd"),y=f.querySelector("#au-jn_consent");A?.addEventListener("input",()=>{fe=it(A.value),A.value=fe,(b.jn_code||se)&&(delete b.jn_code,se="",ie("jn_code"),Me()),Ke(fe)}),U?.addEventListener("input",()=>{oe=U.value,(b.jn_name||se)&&(delete b.jn_name,se="",ie("jn_name"),Me())}),te?.addEventListener("input",()=>{pe=te.value,b.jn_dept&&(delete b.jn_dept,ie("jn_dept"))}),je?.addEventListener("input",()=>{if(xe=je.value,q){q="";const g=f.querySelector("#au-jn_account-hint");g&&(g.textContent="");const k=f.querySelector('[data-role="jn-novcode-wrap"]');k&&(k.hidden=!0),Oe.close(!1);const _=f.querySelector('[data-act="jn-send-code"]');_&&u===0&&(_.textContent="获取验证码")}(b.jn_account||se)&&(delete b.jn_account,se="",ie("jn_account"),Me())}),j?.addEventListener("input",()=>{Le=j.value.replace(/\D/g,"").slice(0,6),j.value=Le,(b.jn_vcode||se)&&(delete b.jn_vcode,se="",ie("jn_vcode"),Me())}),Ve?.addEventListener("input",()=>{L=Ve.value,(b.jn_pwd||se)&&(delete b.jn_pwd,se="",ie("jn_pwd"),Me())}),y?.addEventListener("change",()=>{Te=y.checked,Te&&b.jn_consent&&(delete b.jn_consent,ie("jn_consent"))}),f.querySelector('[data-act="jn-toggle-eye"]')?.addEventListener("click",g=>{B=!B;const k=g.currentTarget;if(Ve){const _=Ve.selectionStart,C=Ve.selectionEnd;Ve.type=B?"text":"password",Ve.focus({preventScroll:!0}),_!==null&&C!==null&&Ve.setSelectionRange(_,C)}k.setAttribute("aria-label",B?"隐藏密码":"显示密码"),k.innerHTML=B?wa:ya}),f.querySelector('[data-act="jn-send-code"]')?.addEventListener("click",g=>{const k=Ka(xe);if(k){b.jn_account=k,ie("jn_account"),je?.focus({preventScroll:!0});return}if(!Te){F=()=>{Te=!0,y&&(y.checked=!0),delete b.jn_consent,ie("jn_consent"),da()},ca("consent_ask",g.currentTarget);return}da()}),f.querySelector('form[data-reg-form="join"]')?.addEventListener("submit",async g=>{if(g.preventDefault(),ue)return;b={},se="";const k=fe.replace(/\D/g,"");if(k.length!==9)b.jn_code="请输入 9 位机构邀请码";else if(!N&&!K){const v=await e.resolveInviteCode(k);v.valid&&v.organizationName?(N=v.organizationName,ta()):b.jn_code=v.message??"邀请码不正确或已失效，请向机构管理员确认。"}oe.trim()?sa(oe.trim())>fa&&(b.jn_name=`姓名不超过 ${fa} 个字`):b.jn_name="请输入姓名",sa(pe.trim())>Ma&&(b.jn_dept=`部门 / 职务不超过 ${Ma} 个字`);const _=Ka(xe);_&&(b.jn_account=_),/^\d{6}$/.test(Le.trim())||(b.jn_vcode="请输入 6 位验证码");const C=ct(L);C&&(b.jn_pwd=C),Te||(b.jn_consent="请阅读并同意隐私政策和使用条款");for(const v of["jn_code","jn_name","jn_dept","jn_account","jn_vcode","jn_pwd","jn_consent"])ie(v);if(Me(),Object.keys(b).length>0){const v=Object.keys(b)[0];f.querySelector(`#au-${v}`)?.focus({preventScroll:!0});return}ue=!0,ia("正在提交…","注册并申请加入");try{T=await e.registerAndJoin({inviteCode:k,displayName:oe.trim(),departmentTitle:pe.trim()||void 0,account:Qe(xe),verificationCode:Le.trim(),password:L,consentAcceptedAt:new Date().toISOString()}),ue=!1,Ye()}catch(v){ue=!1,se=v instanceof Error?v.message:"暂时无法提交申请，请稍后再试。",ia("正在提交…","注册并申请加入"),Me()}})}function Va(f){Oe.bind(f),Bt(f);const A=f.querySelector("#au-ap_org"),U=f.querySelector("#au-ap_prov"),te=f.querySelector("#au-ap_city"),je=f.querySelector("#au-ap_name"),j=f.querySelector("#au-ap_dept"),Ve=f.querySelector("#au-ap_email"),y=f.querySelector("#au-ap_phone"),g=f.querySelector("#au-ap_sms"),k=f.querySelector("#au-ap_overview"),_=f.querySelector("#au-ap_overview-count"),C=f.querySelector("#au-ap_consent");A?.addEventListener("input",()=>{O=A.value,(b.ap_org||se)&&(delete b.ap_org,se="",ie("ap_org"),Me())}),U?.addEventListener("change",()=>{n=U.value,U.classList.toggle("is-placeholder",!n);const v=pt(n);w=v.length===1?v[0]:"",te&&(te.disabled=!n,te.innerHTML=`<option value="" ${w?"":"selected"}>城市</option>`+v.map(s=>`<option value="${d(s)}" ${w===s?"selected":""}>${d(s)}</option>`).join(""),te.classList.toggle("is-placeholder",!w)),n&&w&&b.ap_region&&(delete b.ap_region,ie("ap_region"))}),te?.addEventListener("change",()=>{w=te.value,te.classList.toggle("is-placeholder",!w),n&&w&&b.ap_region&&(delete b.ap_region,ie("ap_region"))}),je?.addEventListener("input",()=>{P=je.value,(b.ap_name||se)&&(delete b.ap_name,se="",ie("ap_name"),Me())}),j?.addEventListener("input",()=>{Z=j.value,b.ap_dept&&(delete b.ap_dept,ie("ap_dept"))}),Ve?.addEventListener("input",()=>{Ie=Ve.value,(b.ap_email||se)&&(delete b.ap_email,se="",ie("ap_email"),Me())}),y?.addEventListener("input",()=>{if(Ae=y.value,h){h="";const v=f.querySelector("#au-ap_phone-hint");v&&(v.textContent="");const s=f.querySelector('[data-role="ap-novcode-wrap"]');s&&(s.hidden=!0),Oe.close(!1);const i=f.querySelector('[data-act="ap-send-code"]');i&&H===0&&(i.textContent="获取验证码")}(b.ap_phone||se)&&(delete b.ap_phone,se="",ie("ap_phone"),Me())}),g?.addEventListener("input",()=>{$e=g.value.replace(/\D/g,"").slice(0,6),g.value=$e,(b.ap_sms||se)&&(delete b.ap_sms,se="",ie("ap_sms"),Me())}),k?.addEventListener("input",()=>{W=k.value;const v=sa(W);_&&(v>=ma*.8?(_.textContent=`${v} / ${ma}`,_.hidden=!1):_.hidden=!0),b.ap_overview&&v<=ma&&(delete b.ap_overview,ie("ap_overview"))}),C?.addEventListener("change",()=>{x=C.checked,x&&b.ap_consent&&(delete b.ap_consent,ie("ap_consent"))}),f.querySelector('[data-act="ap-send-code"]')?.addEventListener("click",v=>{const s=la(Ae);if(s){b.ap_phone=s,ie("ap_phone"),y?.focus({preventScroll:!0});return}if(!x){F=()=>{x=!0,C&&(C.checked=!0),delete b.ap_consent,ie("ap_consent"),xa()},ca("consent_ask",v.currentTarget);return}xa()}),f.querySelector('form[data-reg-form="apply"]')?.addEventListener("submit",async v=>{if(v.preventDefault(),ue)return;b={},se="",O.trim()?sa(O.trim())>jt&&(b.ap_org=`机构名称不超过 ${jt} 个字`):b.ap_org="请输入机构名称",(!n||!w)&&(b.ap_region="请选择所在地区"),P.trim()?sa(P.trim())>fa&&(b.ap_name=`姓名不超过 ${fa} 个字`):b.ap_name="请输入姓名",sa(Z.trim())>Ma&&(b.ap_dept=`部门 / 职务不超过 ${Ma} 个字`),Ta(Ie)||(b.ap_email="请输入有效的电子邮箱");const s=la(Ae);s&&(b.ap_phone=s),/^\d{6}$/.test($e.trim())||(b.ap_sms="请输入 6 位短信验证码"),sa(W)>ma&&(b.ap_overview=`项目概况不超过 ${ma} 个字`),x||(b.ap_consent="请阅读并同意隐私政策和使用条款");for(const i of["ap_org","ap_region","ap_name","ap_dept","ap_email","ap_phone","ap_sms","ap_overview","ap_consent"])ie(i);if(Me(),Object.keys(b).length>0){const i=Object.keys(b)[0],l=i==="ap_region"?n?"au-ap_city":"au-ap_prov":`au-${i}`;f.querySelector(`#${l}`)?.focus({preventScroll:!0});return}ue=!0,ia("正在提交…","提交开通申请");try{G=await e.submitOrgApplication({organizationName:O.trim(),province:n,city:w,contactName:P.trim(),departmentTitle:Z.trim()||void 0,email:Qe(Ie),phone:Qe(Ae),smsCode:$e.trim(),projectOverview:W.trim()||void 0,consentAcceptedAt:new Date().toISOString()}),ue=!1,Ye()}catch(i){ue=!1,se=i instanceof Error?i.message:"暂时无法提交开通申请，请稍后再试。",ia("正在提交…","提交开通申请"),Me()}})}function _a(){Oe.close(!1);const f=a.querySelector('[data-role="reg-body-host"]');f&&(o==="join"?(f.innerHTML=ra(),Ua(f)):(f.innerHTML=ze(),Va(f)))}function ea(f,A=!1){o===f||ue||(o=f,b={},se="",a.querySelectorAll('[data-act="switch-reg-tab"]').forEach(U=>{const te=U.dataset.tab===f;U.setAttribute("aria-selected",String(te)),U.tabIndex=te?0:-1,te&&A&&U.focus({preventScroll:!0})}),me(!0),_a(),a.querySelector(".au-left")?.scrollTo({top:0}))}function Ha(){if(G)return{title:"开通申请已提交 · PACOM Station",bodyHtml:`
          <div class="au-status-badge" aria-hidden="true">${mt}</div>
          <h1 class="au-h1">开通申请已提交</h1>
          <p class="au-lead">审核通常需要 1–2 个工作日，通过后将开通链接发送至你的邮箱。</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">申请单号</span><span class="au-summary-v is-mono">${d(G.applicationId)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">申请机构</span><span class="au-summary-v">${d(G.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">所在地区</span><span class="au-summary-v">${d(G.region)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">通知邮箱</span><span class="au-summary-v">${d(G.maskedEmail)}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct">需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button></p>
          </div>
        `};const f=T;return{title:"加入申请已提交 · PACOM Station",bodyHtml:`
        <div class="au-status-badge" aria-hidden="true">${mt}</div>
        <h1 class="au-h1">加入申请已提交</h1>
        <p class="au-lead">「<b>${d(f.organizationName)}</b>」的机构管理员批准后，你会收到通知，届时即可登录访问。</p>
        <div class="au-summary-card">
          <div class="au-summary-row"><span class="au-summary-k">申请单号</span><span class="au-summary-v is-mono">${d(f.requestId)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${d(f.organizationName)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">登录账号</span><span class="au-summary-v">${d(f.maskedAccount)}</span></div>
        </div>
        <div class="au-ferr" id="au-reg-ferr" role="alert" ${se?"":"hidden"}>
          ${ba}
          <span data-role="ferr-text">${d(se)}</span>
        </div>
        <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
        <div class="au-login-actions">
          <div class="au-login-divider" aria-hidden="true"></div>
          <p class="au-noacct">
            ${e.withdrawJoinApplication?`<button type="button" class="au-inline" data-act="withdraw-join" ${J?"disabled":""}>${J?"正在撤回…":"撤回申请"}</button><span class="au-dot-sep">·</span>`:""}
            需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button>
          </p>
        </div>
      `}}function Ga(f){de=f,V!==null&&window.clearInterval(V),V=window.setInterval(()=>{de-=1,de<=0&&(de=0,V!==null&&(window.clearInterval(V),V=null));const A=a.querySelector('[data-act="iv-send-sec"]');A&&(A.disabled=de>0,A.textContent=de>0?`${de} 秒后重发`:ve?"重新获取":"获取验证码")},1e3)}function aa(f){return f.requiredSecondaryChannel!==void 0?f.requiredSecondaryChannel:ha(f.kind,f.role,f.targetChannel)}function La(f){return Qe(f).toLowerCase().replace(/[\s\-()]/g,"")}function ja(f,A){if(!f)return!1;const U=La(A.targetValue);if(!U)return!1;const te=A.targetChannel==="email"?f.email:f.phone;return!!te&&La(te)===U}async function Aa(f){const A=f==="phone"?la(le):Ta(le)?"":"请输入有效的电子邮箱";if(A){b.iv_sec=A,ie("iv_sec"),a.querySelector("#au-iv_sec")?.focus({preventScroll:!0});return}delete b.iv_sec,ie("iv_sec");const U=a.querySelector('[data-act="iv-send-sec"]');U&&(U.disabled=!0,U.textContent="发送中…");try{const te=await e.sendVerificationCode({target:Qe(le),purpose:"bind",consentAcceptedAt:new Date().toISOString()});if(r)return;ve=te.maskedTarget||$a(le);const je=a.querySelector("#au-iv_sec-hint");je&&(je.textContent=`验证码已发送至 ${ve}`);const j=a.querySelector('[data-role="iv-novcode-wrap"]');j&&(j.hidden=!1),Ga(te.cooldownSeconds||60),U&&(U.disabled=!0,U.textContent=`${de} 秒后重发`),a.querySelector("#au-iv_seccode")?.focus({preventScroll:!0})}catch(te){if(r)return;U&&(U.disabled=!1,U.textContent=ve?"重新获取":"获取验证码"),se=te instanceof Error?te.message:"暂时无法发送验证码，请稍后再试。",Me()}}function Wa(){if(ge)return{title:"验证邀请 · PACOM Station",bodyHtml:`
          <h1 class="au-h1">正在核验邀请链接…</h1>
          <p class="au-lead">请稍候，正在确认所属机构与授权信息。</p>
        `};if(R&&R.status==="accepted")return{title:"邀请已生效 · PACOM Station",bodyHtml:`
          <h1 class="au-h1">邀请已被接受</h1>
          <p class="au-lead">该邀请链接已完成激活，你可以直接登录访问「<b>${d(R.organizationName)}</b>」。</p>
          <button type="button" class="au-primary" data-act="${Q?"iv-back-ws":"back-login"}"><span>${Q?"进入工作区":"前往登录"}</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct">需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button></p>
          </div>
        `};if(X||!R||R.status!=="pending"){const g=X||(R?.inviterName&&R?.organizationName?`「${R.inviterName}」邀请你加入「${R.organizationName}」，该邀请已过期或已撤销。`:"邀请链接无效、已过期或已撤销，请联系邀请人或机构管理员重新发送。");return{title:"邀请已失效 · PACOM Station",bodyHtml:`
          <h1 class="au-h1">邀请已失效</h1>
          <p class="au-lead">${d(g)}</p>
          <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct">需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button></p>
          </div>
        `}}const f=R,A=f.kind==="owner",U=A?"开通机构":"加入机构",te=f.targetChannel==="phone"?"受邀手机号码":"受邀电子邮箱";if(Q){if(ja(Q,f)){const k=A?`「<b>${d(f.organizationName)}</b>」已审核通过，确认后即可开通并成为「<b>机构管理员</b>」，${d(f.expiresAt)} 前有效`:`「<b>${d(f.inviterName||"机构管理员")}</b>」邀请你以「<b>${d(f.roleLabel||"成员")}</b>」身份加入「<b>${d(f.organizationName)}</b>」，${d(f.expiresAt)} 前有效`;return{title:`${U} · PACOM Station`,bodyHtml:`
            <h1 class="au-h1">${U}</h1>
            <p class="au-lead">${k}</p>
            <div class="au-summary-card">
              <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${d(f.organizationName)}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${d(f.roleLabel||"成员")}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v">${d(Q.displayName)}（${d(f.targetValue)}）</span></div>
            </div>
            <div class="au-ferr" id="au-reg-ferr" role="alert" ${se?"":"hidden"}>
              ${ba}
              <span data-role="ferr-text">${d(se)}</span>
            </div>
            <button type="button" class="au-primary" data-act="iv-confirm-join" ${ue?"disabled":""}>
              ${ue?'<span class="au-spinner" aria-hidden="true"></span><span>正在加入…</span>':`<span>${A?"确认开通":"确认加入"}</span>`}
            </button>
            <div class="au-login-actions">
              <div class="au-login-divider" aria-hidden="true"></div>
              <p class="au-noacct"><button type="button" class="au-inline" data-act="iv-back-ws">返回工作区</button></p>
            </div>
          `}}const g=$a(f.targetValue);return{title:"当前账户不是受邀账户 · PACOM Station",bodyHtml:`
          <h1 class="au-h1">当前账户不是受邀账户</h1>
          <p class="au-lead">「<b>${d(f.inviterName||"机构管理员")}</b>」邀请 <b>${d(g)}</b> 加入「<b>${d(f.organizationName)}</b>」，与当前登录账户不一致。</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">当前登录</span><span class="au-summary-v">${d(Q.displayName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">受邀账号</span><span class="au-summary-v">${d(g)}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="iv-switch-account"><span>切换账户登录</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct"><button type="button" class="au-inline" data-act="iv-back-ws">返回工作区</button></p>
          </div>
        `}}if(f.accountExists){const g=A?`该账号已注册，请登录后完成「<b>${d(f.organizationName)}</b>」开通。`:`该账号已注册，请登录后以「<b>${d(f.roleLabel||"成员")}</b>」身份加入「<b>${d(f.organizationName)}</b>」。`;return{title:`${U} · PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${U}</h1>
          <p class="au-lead">${g}</p>
          <div class="au-field">
            <div class="au-lab"><span class="au-lab-t">${te}</span></div>
            <div class="au-locked-card">
              <span class="au-locked-val">${d(f.targetValue)}</span>
              <span class="au-locked-tag">${lt}<span>已有账户</span></span>
            </div>
          </div>
          <button type="button" class="au-primary" data-act="iv-go-login"><span>前往登录</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct">需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button></p>
          </div>
        `}}const je=A?`「<b>${d(f.organizationName)}</b>」已审核通过，请设置登录密码完成开通，${d(f.expiresAt)} 前有效`:`「<b>${d(f.inviterName||"机构管理员")}</b>」邀请你以「<b>${d(f.roleLabel||"成员")}</b>」身份加入「<b>${d(f.organizationName)}</b>」，${d(f.expiresAt)} 前有效`,j=A?"激活并进入工作区":"注册并加入",Ve=aa(f),y=Ve?(()=>{const g=Ve==="phone",k=g?"手机号码":"电子邮箱",_=g?"用于新设备登录、敏感操作与重置密码时的身份验证。":"机构管理员须绑定电子邮箱，用于接收订单、续费与安全通知。",C=g?"短信验证码":"邮件验证码",v=g?"请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。":"请确认电子邮箱无误并检查垃圾邮件箱；如仍未收到，可点击页脚「联系我们」获取协助。";return`
            <div class="au-field ${b.iv_sec?"bad":""}" data-f="iv_sec">
              <div class="au-lab au-label-row">
                <span class="au-lab-group">
                  <label for="au-iv_sec">${k}</label>
                  ${Ca("au-iv-sec-info",`${k}说明`,[_])}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_sec" name="iv_sec" class="au-in has-code-btn" type="${g?"tel":"email"}" inputmode="${g?"tel":"email"}" autocomplete="${g?"tel":"email"}" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(le)}" aria-invalid="${b.iv_sec?"true":"false"}" />
                <button type="button" class="au-suffix au-getcode" data-act="iv-send-sec" ${de>0?"disabled":""}>
                  ${de>0?`${de} 秒后重发`:ve?"重新获取":"获取验证码"}
                </button>
              </div>
              <p class="au-err" id="au-iv_sec-err" aria-live="polite">${d(b.iv_sec??"")}</p>
              <p class="au-hint" id="au-iv_sec-hint" role="status" aria-live="polite">${ve?`验证码已发送至 ${d(ve)}`:""}</p>
            </div>

            <div class="au-field ${b.iv_seccode?"bad":""}" data-f="iv_seccode">
              <div class="au-lab">
                <label for="au-iv_seccode">${C}</label>
                <span data-role="iv-novcode-wrap" ${ve?"":"hidden"}>
                  <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-iv-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-iv-novcode-pop"><span>收不到验证码？</span></button>
                  <span id="au-iv-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
                    <span class="ws-info-text">${v}</span>
                  </span>
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_seccode" name="iv_seccode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(re)}" aria-invalid="${b.iv_seccode?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_seccode-err" aria-live="polite">${d(b.iv_seccode??"")}</p>
            </div>
          `})():"";return{title:`${U} · PACOM Station`,bodyHtml:`
        <h1 class="au-h1">${U}</h1>
        <p class="au-lead">${je}</p>
        <form class="au-compact-form au-reg-form" data-reg-form="invite" novalidate>
          <fieldset ${ue?"disabled":""}>
            <div class="au-field">
              <div class="au-lab"><span class="au-lab-t">${te}</span></div>
              <div class="au-locked-card">
                <span class="au-locked-val">${d(f.targetValue)}</span>
                <span class="au-locked-tag">${lt}<span>已核验锁定</span></span>
              </div>
              ${A&&f.verifiedSecondaryMasked?`<p class="au-locked-sub">已核验绑定手机：${d(f.verifiedSecondaryMasked)}</p>`:""}
            </div>

            <div class="au-field ${b.iv_name?"bad":""}" data-f="iv_name">
              <div class="au-lab"><label for="au-iv_name">姓名</label></div>
              <div class="au-ctl">
                <input id="au-iv_name" name="iv_name" class="au-in" type="text" autocomplete="name" value="${d(Y)}" aria-invalid="${b.iv_name?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_name-err" aria-live="polite">${d(b.iv_name??"")}</p>
            </div>

            ${y}

            <div class="au-field ${b.iv_pwd?"bad":""}" data-f="iv_pwd">
              <div class="au-lab au-label-row">
                <span class="au-lab-group">
                  <label for="au-iv_pwd">设置密码</label>
                  ${Ca("au-iv-pwd-info","设置密码说明",dt)}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_pwd" name="iv_pwd" class="au-in has-suffix" type="${ne?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(ye)}" aria-invalid="${b.iv_pwd?"true":"false"}" />
                <button type="button" class="au-suffix au-eye" data-act="iv-toggle-eye" aria-controls="au-iv_pwd" aria-label="${ne?"隐藏密码":"显示密码"}">
                  ${ne?wa:ya}
                </button>
              </div>
              <p class="au-err" id="au-iv_pwd-err" aria-live="polite">${d(b.iv_pwd??"")}</p>
            </div>

            ${Fe("au-iv_consent","iv_consent",Ee,"iv_consent")}

            <div class="au-ferr" id="au-reg-ferr" role="alert" ${se?"":"hidden"}>
              ${ba}
              <span data-role="ferr-text">${d(se)}</span>
            </div>

            <button type="submit" class="au-primary au-compact-primary" ${ue?"disabled":""}>
              ${ue?'<span class="au-spinner" aria-hidden="true"></span><span>正在激活…</span>':`<span>${j}</span>`}
            </button>
          </fieldset>
        </form>
        <div class="au-login-actions">
          <div class="au-login-divider" aria-hidden="true"></div>
          <p class="au-noacct">已有账户？<button type="button" class="au-inline" data-act="back-login">登录</button></p>
        </div>
      `}}function Za(){Oe.bind(a),a.querySelector('[data-act="iv-back-ws"]')?.addEventListener("click",()=>{Ne(),t.onBackToWorkspace?t.onBackToWorkspace():t.onBackToLogin()}),a.querySelector('[data-act="iv-go-login"]')?.addEventListener("click",()=>{if(!R)return;const k=`#invite?token=${encodeURIComponent(R.token)}`,_=R.kind==="owner"?`登录后开通${R.organizationName}`:`登录后加入${R.organizationName}`;Ne(),t.onGoLoginForInvite?t.onGoLoginForInvite(R.targetValue,_,k):t.onBackToLogin()}),a.querySelector('[data-act="iv-switch-account"]')?.addEventListener("click",()=>{if(!R)return;const k=`#invite?token=${encodeURIComponent(R.token)}`;Ne(),t.onSwitchAccountForInvite?t.onSwitchAccountForInvite(k):t.onBackToLogin()}),a.querySelector('[data-act="iv-confirm-join"]')?.addEventListener("click",async()=>{if(!(ue||!R)){ue=!0,se="",Ye();try{const k=await e.acceptInvitation({token:R.token});if(r)return;Ne(),t.onAuthenticated(k)}catch(k){if(r)return;ue=!1,se=k instanceof Error?k.message:"暂时无法确认加入，请稍后再试。",Ye()}}});const f=a.querySelector('form[data-reg-form="invite"]');if(!f||!R)return;const A=a.querySelector("#au-iv_name"),U=a.querySelector("#au-iv_sec"),te=a.querySelector("#au-iv_seccode"),je=a.querySelector("#au-iv_pwd"),j=a.querySelector("#au-iv_consent"),y=R.kind==="owner"?"激活并进入工作区":"注册并加入",g=aa(R);A?.addEventListener("input",()=>{Y=A.value,(b.iv_name||se)&&(delete b.iv_name,se="",ie("iv_name"),Me())}),U?.addEventListener("input",()=>{if(le=U.value,ve){ve="";const k=a.querySelector("#au-iv_sec-hint");k&&(k.textContent="");const _=a.querySelector('[data-role="iv-novcode-wrap"]');_&&(_.hidden=!0),Oe.close(!1);const C=a.querySelector('[data-act="iv-send-sec"]');C&&de===0&&(C.textContent="获取验证码")}(b.iv_sec||se)&&(delete b.iv_sec,se="",ie("iv_sec"),Me())}),te?.addEventListener("input",()=>{re=te.value.replace(/\D/g,"").slice(0,6),te.value=re,(b.iv_seccode||se)&&(delete b.iv_seccode,se="",ie("iv_seccode"),Me())}),je?.addEventListener("input",()=>{ye=je.value,(b.iv_pwd||se)&&(delete b.iv_pwd,se="",ie("iv_pwd"),Me())}),j?.addEventListener("change",()=>{Ee=j.checked,Ee&&b.iv_consent&&(delete b.iv_consent,ie("iv_consent"))}),a.querySelector('[data-act="iv-send-sec"]')?.addEventListener("click",k=>{if(!g)return;const _=g==="phone"?la(le):Ta(le)?"":"请输入有效的电子邮箱";if(_){b.iv_sec=_,ie("iv_sec"),U?.focus({preventScroll:!0});return}if(!Ee){F=()=>{Ee=!0,j&&(j.checked=!0),delete b.iv_consent,ie("iv_consent"),Aa(g)},ca("consent_ask",k.currentTarget);return}Aa(g)}),a.querySelector('[data-act="iv-toggle-eye"]')?.addEventListener("click",k=>{ne=!ne;const _=k.currentTarget;if(je){const C=je.selectionStart,v=je.selectionEnd;je.type=ne?"text":"password",je.focus({preventScroll:!0}),C!==null&&v!==null&&je.setSelectionRange(C,v)}_.setAttribute("aria-label",ne?"隐藏密码":"显示密码"),_.innerHTML=ne?wa:ya}),f.addEventListener("submit",async k=>{if(k.preventDefault(),ue||!R)return;if(b={},se="",Y.trim()?sa(Y.trim())>fa&&(b.iv_name=`姓名不超过 ${fa} 个字`):b.iv_name="请输入姓名",g){const v=g==="phone"?la(le):Ta(le)?"":"请输入有效的电子邮箱";v&&(b.iv_sec=v),/^\d{6}$/.test(re.trim())||(b.iv_seccode=g==="phone"?"请输入 6 位短信验证码":"请输入 6 位邮件验证码")}const _=ct(ye);_&&(b.iv_pwd=_),Ee||(b.iv_consent="请阅读并同意隐私政策和使用条款");const C=g?["iv_name","iv_sec","iv_seccode","iv_pwd","iv_consent"]:["iv_name","iv_pwd","iv_consent"];for(const v of C)ie(v);if(Me(),Object.keys(b).length>0){const v=Object.keys(b)[0];a.querySelector(`#au-${v}`)?.focus({preventScroll:!0});return}ue=!0,ia("正在激活…",y);try{const v=await e.acceptInvitation({token:R.token,displayName:Y.trim(),password:ye,consentAcceptedAt:new Date().toISOString(),...g?{secondaryContact:Qe(le),secondaryVerificationCode:re.trim()}:{}});Ne(),t.onAuthenticated(v)}catch(v){ue=!1,se=v instanceof Error?v.message:"暂时无法完成激活，请稍后再试。",ia("正在激活…",y),Me()}})}function Ye(){Oe.close(!1);let f="";if(T||G){const A=Ha();document.title=A.title,f=A.bodyHtml}else if(D){const A=Wa();document.title=A.title,f=A.bodyHtml}else document.title="注册 · PACOM Station",f=`
        <h1 class="au-h1">注册</h1>
        <div class="au-mode-seg" role="tablist" aria-label="注册方式" data-role="reg-seg">
          <span class="au-mode-indicator" aria-hidden="true"></span>
          <button type="button" role="tab" aria-selected="${o==="join"}" tabindex="${o==="join"?"0":"-1"}" class="au-mode-tab" data-act="switch-reg-tab" data-tab="join">加入已有机构</button>
          <button type="button" role="tab" aria-selected="${o==="apply"}" tabindex="${o==="apply"?"0":"-1"}" class="au-mode-tab" data-act="switch-reg-tab" data-tab="apply">申请开通机构</button>
        </div>
        <div data-role="reg-body-host"></div>
        <div class="au-login-actions">
          <div class="au-login-divider" aria-hidden="true"></div>
          <p class="au-noacct">
            已有账户？<button type="button" class="au-inline" data-act="back-login">登录</button>
          </p>
        </div>
      `;a.innerHTML=`
      <div class="au au-split au-auth-shell au-reg-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Tt}</div>
              ${f}
            </main>
          </div>
          ${qt()}
        </section>
        <aside class="au-art" aria-hidden="true">
          <div class="au-art-frame">
            <img src="./media/auth-hero.jpg" alt="" />
          </div>
        </aside>
      </div>
      <div data-role="modal-host"></div>
    `,a.querySelectorAll('[data-act="back-login"]').forEach(A=>{A.addEventListener("click",()=>{Ne(),t.onBackToLogin()})}),a.querySelectorAll('[data-act="open-contact"]').forEach(A=>{A.addEventListener("click",U=>{E=!1,ca("contact",U.currentTarget)})}),a.querySelector('[data-act="withdraw-join"]')?.addEventListener("click",async()=>{if(!(!T||!e.withdrawJoinApplication||J)){J=!0,se="",Ye();try{if(await e.withdrawJoinApplication(T.requestId),r)return;J=!1,T=null,Ye()}catch(A){if(r)return;J=!1,se=A instanceof Error?A.message:"暂时无法撤回申请，请稍后再试。",Ye()}}}),!T&&!G&&!D?(a.querySelectorAll('[data-act="switch-reg-tab"]').forEach(A=>{A.addEventListener("click",()=>{const U=A.dataset.tab;U&&ea(U,!1)}),A.addEventListener("keydown",U=>{const te=oa.indexOf(o);U.key==="ArrowRight"?(U.preventDefault(),ea(oa[(te+1)%oa.length],!0)):U.key==="ArrowLeft"?(U.preventDefault(),ea(oa[(te-1+oa.length)%oa.length],!0)):U.key==="Home"?(U.preventDefault(),ea(oa[0],!0)):U.key==="End"&&(U.preventDefault(),ea(oa[oa.length-1],!0))})}),_a(),me(!1),document.fonts?.ready.then(()=>{r||me(!1)})):D&&!ge&&Za()}Ye(),D?(async()=>{try{const f=await e.getInvitationPreview(D);if(r)return;R=f,Y=f.prefillName??"",ge=!1,Ye()}catch(f){if(r)return;ge=!1,X=f instanceof Error?f.message:"暂时无法读取邀请信息，请稍后再试。",Ye()}})():fe.replace(/\D/g,"").length===9&&Ke(fe)}function Ra(a){const e=a.replace(/^#\/?/,"").split("?")[0]??"";return e==="login"||e==="register"||e==="join"||e==="apply"||e==="invite"}function st(a){const e=a.replace(/^#\/?/,""),[t="",r=""]=e.split("?"),o=new URLSearchParams(r);if(t==="invite")return{kind:"invite",inviteToken:o.get("token")??"member-demo"};if(t==="register"||t==="join"||t==="apply"){const p=o.get("tab");return{kind:"register",initialMode:t==="apply"||p==="apply"?"apply":"join",prefillCode:o.get("code")??void 0}}return{kind:"login"}}const vs=["org_admin","project_admin","operator","space_user"];async function gs(a){const e=new Vt;let t=await e.getSession(),r="login",o="",p="",E=!1;document.querySelector("[data-demo-fab-root]")?.remove();const M=document.createElement("div");M.className="pacom-demo-fab-wrap",M.dataset.demoFabRoot="1",document.body.appendChild(M);function F(){const J=r==="login"?"登录页":r==="register"?"注册页":r==="invite"?"邀请激活":t?Ue[t.role]:"未登录";M.innerHTML=`
      ${E?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">独立演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">演示邀请码 482 916 305 · 任意 6 位验证码 · 或点下方角色直进</span>
            <div class="pacom-demo-fab-roles">
              ${vs.map(D=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${r==="app"&&t?.role===D}" data-demo-pick="${D}">
                    <span>${Ue[D]}</span>
                    ${r==="app"&&t?.role===D?we("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <button type="button" class="pacom-demo-role-btn" aria-pressed="${r==="login"}" data-demo-auth="#login">
                <span>查看登录页</span>
                ${r==="login"?we("check",14):"<span>→</span>"}
              </button>
              <button type="button" class="pacom-demo-role-btn" aria-pressed="${r==="register"}" data-demo-auth="#register">
                <span>查看注册与开通页</span>
                ${r==="register"?we("check",14):"<span>→</span>"}
              </button>
              <button type="button" class="pacom-demo-role-btn" aria-pressed="${r==="invite"}" data-demo-auth="#invite?token=member-demo">
                <span>查看定向邀请激活页</span>
                ${r==="invite"?we("check",14):"<span>→</span>"}
              </button>
              <a class="pacom-demo-link" href="./index.html">
                <span>前往纯生产入口（index.html）</span>
                <span>→</span>
              </a>
            </div>
          </div>`:""}
      <button type="button" class="pacom-demo-fab-pill" aria-expanded="${E}" data-demo-fab-toggle="1" title="切换演示角色或查看认证页面">
        <span class="pacom-demo-fab-dot" aria-hidden="true"></span>
        <span>演示</span>
        <span class="pacom-demo-fab-role">${J}</span>
        ${we(E?"chevron-down":"chevrons-up-down",12)}
      </button>
    `,M.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",D=>{D.stopPropagation(),E=!E,F()}),M.querySelectorAll("[data-demo-pick]").forEach(D=>{D.addEventListener("click",async()=>{const Q=D.dataset.demoPick;Q&&(E=!1,t=await e.switchDemoRole(Q),await G(t))})}),M.querySelectorAll("[data-demo-auth]").forEach(D=>{D.addEventListener("click",async()=>{const Q=D.dataset.demoAuth??"#login";E=!1,await T(Q,!0)})})}document.addEventListener("click",J=>{E&&(J.target?.closest("[data-demo-fab-root]")||(E=!1,F()))}),document.addEventListener("keydown",J=>{J.key==="Escape"&&E&&(E=!1,F())});async function T(J,D,Q){ds(a),Lt(a),At(a),D&&t&&(await e.logout(),t=null);const ge=st(J);if(r=ge.kind,o=J,window.location.hash!==J&&(window.location.hash=J),F(),ge.kind==="register"||ge.kind==="invite"){ms(a,e,{initialMode:ge.initialMode,prefillCode:ge.prefillCode,inviteToken:ge.inviteToken,currentSession:ge.kind==="invite"?t:null,onBackToLogin:()=>{p="",T("#login",!1)},onGoLoginForInvite:(R,X,Y)=>{p=Y,T("#login",!1,{prefillAccount:R,notice:X})},onSwitchAccountForInvite:R=>{p=R,T("#login",!0,{notice:"请使用受邀账户登录"})},onBackToWorkspace:()=>{t?G(t):T("#login",!1)},onAuthenticated:R=>{p="",G(R)}});return}us(a,e,R=>{if(t=R,p){const X=p;p="",T(X,!1);return}G(R)},{prefillAccount:Q?.prefillAccount,notice:Q?.notice,onOpenRegister:()=>{p="",T("#register",!1)}})}async function G(J){Lt(a),At(a),t=J,r="app",o="",F(),(!window.location.hash||Ra(window.location.hash))&&(window.location.hash="#home"),await ps(a,e,J,()=>{p="",T("#login",!0)})}if(window.addEventListener("hashchange",()=>{if(Ra(window.location.hash)){const J=st(window.location.hash);(r!==J.kind||window.location.hash!==o)&&T(window.location.hash,r==="app"&&J.kind!=="invite")}}),!t||Ra(window.location.hash)){const J=Ra(window.location.hash)?window.location.hash:"#login",D=st(J);await T(J,!!(t&&D.kind!=="invite"));return}await G(t)}async function fs(){const a=document.getElementById("app");if(a)try{await gs(a)}catch(e){a.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(e)}</div></div>`}}fs();
