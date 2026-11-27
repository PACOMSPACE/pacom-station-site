import{E as L,r as ke,a as Ba,e as c,b as Ua,g as Va,s as pa,m as Pt,c as Bt,d as Tt,P as qt,I as ot,A as fa,f as Ot,n as Qe,h as Dt,i as ha,C as Ft,j as zt,k as ya,l as $a,v as ia,o as Rt,p as Mt,q as lt,S as rt,L as ct,t as Ca,u as Ta,w as ta,x as dt,B as pt,D as qa,y as ut,z as Ja,F as mt,G as vt,O as Ut,H as Vt}from"./auth-shared-CaC2kpxA.js";import{R as Ue,g as ba,a as gt}from"./contracts-Z0w12vLk.js";function Ht(){const a="2026-11-25T09:00:00Z",e=[];for(let p=1;p<=22;p+=1){const E=p===7?L.floorId:p===8?L.lockedFloor8Id:p===6?L.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${p}`,D=String(p).padStart(2,"0");e.push({id:E,buildingId:L.buildingId,kind:"above",level:p,name:`${p}F`,areaSqm:p===7?1383.1:p===1?2680:p<=4?1920:1480,plan:{floorId:E,imageUrl:`./media/floors/e/${D}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}})}const s="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";e.push({id:s,buildingId:L.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:s,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}});const r=[];for(let p=1;p<=12;p+=1){const E=`structure-f-above-${p}`,D=String(p).padStart(2,"0");r.push({id:E,buildingId:L.buildingFId,kind:"above",level:p,name:`${p}F`,areaSqm:p===1?2450:p<=3?2100:1580,plan:{floorId:E,imageUrl:`./media/floors/f/${D}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}})}const n="structure-f-roof-1";return r.push({id:n,buildingId:L.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:n,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}}),{projects:[{id:L.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:a},imageUrl:"./media/gzlab.jpg"},{id:L.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:a},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:L.buildingId,projectId:L.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:L.buildingFId,projectId:L.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...e,...r],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:L.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:L.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:L.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:L.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:s,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:n,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Nt=Ht(),ft=Nt.floors.map(a=>a.id),Ze={org_admin:{userId:"demo-org-admin",displayName:"林致远",email:"lin.zhiyuan@pacom.cn",phone:"13800138001",role:"org_admin",roleLabel:Ue.org_admin,authMode:"demo",scope:{allowedProjectIds:[L.projectId,L.project1Id],allowedBuildingIds:[L.buildingId,L.buildingFId],allowedFloorIds:[...ft],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",email:"chen.mingxuan@pacom.cn",phone:"13800138002",role:"project_admin",roleLabel:Ue.project_admin,authMode:"demo",scope:{allowedProjectIds:[L.projectId],allowedBuildingIds:[L.buildingId,L.buildingFId],allowedFloorIds:[...ft],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",email:"zhou.ning@pacom.cn",phone:"13800138003",role:"operator",roleLabel:Ue.operator,authMode:"demo",scope:{allowedProjectIds:[L.projectId],allowedBuildingIds:[L.buildingId],allowedFloorIds:[L.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",email:"shen.jia@pacom.cn",phone:"13800138004",role:"space_user",roleLabel:Ue.space_user,authMode:"demo",scope:{allowedProjectIds:[L.projectId],allowedBuildingIds:[L.buildingId],allowedFloorIds:[L.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},va="pacom.web.demo.role",bt="pacom.web.demo.spatial.v5",ht="pacom.web.demo.orgs.v1",yt="pacom.web.demo.activeOrg.v1",Je="org-gzlab";class Wt{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;inviteMissTimestamps=[];inviteLockedUntil=0;sentCodeTargets=new Set;joinReceipts=new Map;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;constructor(){this.orgs=this.loadOrgs();const e=typeof localStorage<"u"?localStorage.getItem(yt):null,s=this.orgs.find(p=>p.id===e)??this.orgs[0];this.activeOrgId=s.id,this.spatial=s.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const r=typeof sessionStorage<"u"?sessionStorage.getItem(va):null;r&&Ze[r]&&(this.activeSession=structuredClone(Ze[r]),this.applyOverridesToSession());const n=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:L.projectId,buildingId:L.buildingId,floorId:L.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:L.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:n,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:n,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:L.projectId,buildingId:L.buildingId,floorId:L.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:L.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:n,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:n,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:L.projectId,buildingId:L.buildingId,floorId:L.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:L.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:n,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:n,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:L.projectId,buildingId:L.buildingId,floorId:L.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:L.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:n,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:n,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:n,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:n,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:L.projectId,buildingId:L.buildingId,floorId:L.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:L.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:n,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:L.projectId,buildingId:L.buildingId,floorId:L.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:L.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:n,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:n,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:n,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:L.projectId,buildingId:L.buildingId,floorId:L.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:L.projectId,buildingId:L.buildingId,floorId:L.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:L.projectId,buildingId:L.buildingId,floorId:L.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:L.projectId,buildingId:L.buildingId,floorId:L.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:n},{id:"conn-e7f-dali",projectId:L.projectId,buildingId:L.buildingId,floorId:L.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:n},{id:"conn-e7f-modbus",projectId:L.projectId,buildingId:L.buildingId,floorId:L.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:L.projectId,floorId:L.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:L.projectId,floorId:L.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:L.projectId,floorId:L.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:L.projectId,floorId:L.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:L.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:L.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:n,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:L.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:n,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:L.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:n,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:L.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:n,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:L.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:n,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:L.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:n,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(Ze).map((p,E)=>({userId:p.userId,displayName:p.displayName,email:`${p.role.replaceAll("_",".")}@gzlab.ac.cn`,role:p.role,roleLabel:p.roleLabel,scopeSummary:p.scope.allowedZoneIds?.length?`E栋 7F（${p.scope.allowedZoneIds.length} 个授权功能区）`:`${p.scope.allowedProjectIds.length} 项目 / ${p.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:E===0?n:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const e=Date.now();for(const s of this.overrides)s.status==="active"&&new Date(s.expiresAt).getTime()<=e&&(s.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const e=Ze[this.activeSession.role].scope,s=this.overrides.filter(r=>r.targetUserId===this.activeSession.userId&&r.status==="active");this.activeSession.scope.activeOverrides=structuredClone(s),this.activeSession.scope.canEditDeployment=e.canEditDeployment||s.some(r=>r.module==="deployment"),this.activeSession.scope.canEditSettings=e.canEditSettings||s.some(r=>r.module==="settings")}record(e,s,r,n,p){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:s,endpoint:r,request:p,response:n}),this.traces.length>40&&this.traces.pop()}pushAudit(e,s,r,n){const p=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:p?.displayName??"anonymous",role:p?.role??"space_user",action:e,target:s,result:r,detail:n})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=e.account.toLowerCase(),r=s.includes("org")||s.includes("admin")?"org_admin":s.includes("proj")?"project_admin":s.includes("space")||s.includes("member")?"space_user":"operator";return this.activeSession=structuredClone(Ze[r]),this.applyOverridesToSession(),sessionStorage.setItem(va,r),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(va),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}maskTarget(e){const s=e.trim();if(s.includes("@")){const[n,p]=s.split("@");return n&&p?`${n[0]}•••@${p}`:"••••"}const r=s.replace(/\D/g,"");return r.length===11?`${r.slice(0,3)} •••• ${r.slice(7)}`:r.length>=6?`${r.slice(0,3)} •••• ${r.slice(-4)}`:"••••"}async sendVerificationCode(e){const s=e.target.trim(),r=s.includes("@")?"email":"sms";this.sentCodeTargets.add(`${e.purpose}:${s.toLowerCase()}`);const n={maskedTarget:this.maskTarget(s),channel:r,cooldownSeconds:60};return this.record("REST","sendVerificationCode","POST /api/v1/auth/verification-codes",n,{purpose:e.purpose,channel:r}),n}async resolveInviteCode(e){const s=Date.now();if(this.inviteLockedUntil>s)return{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const r=e.replace(/\D/g,""),p={482916305:this.orgs[0]?.name??"广州实验室",618204917:"天环智慧园区"}[r];if(!p){if(this.inviteMissTimestamps=this.inviteMissTimestamps.filter(O=>s-O<36e5),this.inviteMissTimestamps.push(s),this.inviteMissTimestamps.length>=10)return this.inviteLockedUntil=s+36e5,this.inviteMissTimestamps=[],{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const D={valid:!1,message:"邀请码不正确或已失效，请向机构管理员确认。"};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",D,{code:r}),D}const E={valid:!0,organizationName:p};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",E,{code:r}),E}async registerAndJoin(e){const s=await this.resolveInviteCode(e.inviteCode);if(!s.valid||!s.organizationName)throw new Error(s.message??"邀请码不正确或已失效，请向机构管理员确认。");if(!/^\d{6}$/.test(e.verificationCode.trim()))throw new Error("验证码不正确或已过期");const r=`register_join:${e.account.trim().toLowerCase()}`;if(!this.sentCodeTargets.has(r))throw new Error("请先获取验证码");const n={requestId:`JR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:s.organizationName,maskedAccount:this.maskTarget(e.account),status:"pending_approval",submittedAt:new Date().toISOString()};return this.joinReceipts.set(n.requestId,n),this.record("REST","registerAndJoin","POST /api/v1/auth/register-join",n,{organizationName:s.organizationName,displayName:e.displayName}),n}async withdrawJoinApplication(e){this.joinReceipts.delete(e),this.record("REST","withdrawJoinApplication",`DELETE /api/v1/org/join-requests/${e}`,{ok:!0})}async submitOrgApplication(e){if(!/^\d{6}$/.test(e.smsCode.trim()))throw new Error("验证码不正确或已过期");const s=`org_apply:${e.phone.trim().toLowerCase()}`;if(!this.sentCodeTargets.has(s))throw new Error("请先获取短信验证码");const r=e.province===e.city?e.province:`${e.province} ${e.city}`,n={applicationId:`APP-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:e.organizationName.trim(),region:r,maskedEmail:this.maskTarget(e.email),status:"pending_review",submittedAt:new Date().toISOString()};return this.record("REST","submitOrgApplication","POST /api/v1/org/applications",n,{organizationName:n.organizationName,region:r}),n}async getInvitationPreview(e){const s=e.trim(),r=this.orgs[0]?.name??"广州国家实验室",n=new Date(Date.now()+7*864e5).toISOString().slice(0,10);return s==="expired"?{token:s,kind:"member",organizationName:r,inviterName:"林致远",role:"operator",roleLabel:Ue.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:"2026-11-20",status:"expired"}:s.startsWith("owner")?{token:s,kind:"owner",organizationName:"广州天环智能科技有限公司",role:"org_admin",roleLabel:Ue.org_admin,targetChannel:"email",targetValue:"chen@company.com",prefillName:"陈志远",accountExists:!1,requiredSecondaryChannel:null,verifiedSecondaryMasked:"139 •••• 9000",expiresAt:n,status:"pending"}:s==="admin-email"?{token:s,kind:"member",organizationName:r,inviterName:"林致远",role:"org_admin",roleLabel:Ue.org_admin,targetChannel:"email",targetValue:"zhao.admin@pacom.cn",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:ba("member","org_admin","email"),expiresAt:n,status:"pending"}:s==="admin-phone"?{token:s,kind:"member",organizationName:r,inviterName:"林致远",role:"org_admin",roleLabel:Ue.org_admin,targetChannel:"phone",targetValue:"13900139088",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:ba("member","org_admin","phone"),expiresAt:n,status:"pending"}:s==="project-admin-email"?{token:s,kind:"member",organizationName:r,inviterName:"林致远",role:"project_admin",roleLabel:Ue.project_admin,targetChannel:"email",targetValue:"wu.proj@pacom.cn",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:ba("member","project_admin","email"),expiresAt:n,status:"pending"}:s==="project-admin-phone"?{token:s,kind:"member",organizationName:r,inviterName:"林致远",role:"project_admin",roleLabel:Ue.project_admin,targetChannel:"phone",targetValue:"13700137066",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:ba("member","project_admin","phone"),expiresAt:n,status:"pending"}:s==="existing-demo"?{token:s,kind:"member",organizationName:"天环智慧园区",inviterName:"林致远",role:"operator",roleLabel:Ue.operator,targetChannel:"email",targetValue:"zhou.ning@pacom.cn",prefillName:"周宁",accountExists:!0,requiredSecondaryChannel:null,expiresAt:n,status:"pending"}:{token:s||"member-demo",kind:"member",organizationName:r,inviterName:"林致远",role:"operator",roleLabel:Ue.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",prefillName:"林明远",accountExists:!1,requiredSecondaryChannel:null,expiresAt:n,status:"pending"}}normalizeContactKey(e){return e.trim().toLowerCase().replace(/[\s\-()]/g,"")}isContactOccupied(e,s){const r=this.normalizeContactKey(s);return Object.values(Ze).some(n=>{const p=e==="email"?n.email:n.phone;return!!p&&this.normalizeContactKey(p)===r})}async acceptInvitation(e){const s=await this.getInvitationPreview(e.token);if(s.status!=="pending")throw new Error("邀请已过期或已失效，请联系邀请人重新发送。");const r=s.kind==="owner"?"org_admin":s.role??"operator",n=this.activeSession;if(!!n&&(s.targetChannel==="email"&&!!n?.email&&this.normalizeContactKey(n.email)===this.normalizeContactKey(s.targetValue)||s.targetChannel==="phone"&&!!n?.phone&&this.normalizeContactKey(n.phone)===this.normalizeContactKey(s.targetValue))&&n){const M=structuredClone(n);return this.activeSession=M,this.applyOverridesToSession(),sessionStorage.setItem(va,M.role),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,M),this.pushAudit("auth.invite.accept",M.userId,"success","已有账户确认加入"),structuredClone(M)}if(s.accountExists)throw new Error("该账号已注册，请使用原账户登录后再接受邀请。");const E=s.requiredSecondaryChannel!==void 0?s.requiredSecondaryChannel:ba(s.kind,s.role,s.targetChannel);let D="";if(E){const M=(e.secondaryContact??"").trim(),J=(e.secondaryVerificationCode??"").trim();if(!M)throw new Error(E==="phone"?"请补充并验证手机号码":"请补充并验证电子邮箱");if(!/^\d{6}$/.test(J))throw new Error("验证码不正确或已过期");const re=`bind:${M.toLowerCase()}`;if(!this.sentCodeTargets.has(re))throw new Error("请先获取验证码");if(this.isContactOccupied(E,M))throw new Error(E==="phone"?"该手机号码已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。":"该电子邮箱已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。");D=M}const O=structuredClone(Ze[r]);return e.displayName?.trim()&&(O.displayName=e.displayName.trim()),s.targetChannel==="email"?(O.email=s.targetValue,O.phone=D||(s.kind==="owner"?"13900139000":void 0)):(O.phone=s.targetValue,O.email=D||void 0),this.activeSession=O,this.applyOverridesToSession(),sessionStorage.setItem(va,r),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,O),this.pushAudit("auth.invite.accept",O.userId,"success"),structuredClone(O)}async switchDemoRole(e){return this.activeSession=structuredClone(Ze[e]),this.applyOverridesToSession(),sessionStorage.setItem(va,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(bt);if(e){const s=JSON.parse(e);if(Array.isArray(s?.projects)&&Array.isArray(s?.buildings)&&Array.isArray(s?.floors)&&Array.isArray(s?.zones))return s}}}catch{}return structuredClone(Nt)}loadOrgs(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(ht);if(e){const s=JSON.parse(e);if(Array.isArray(s)&&s.length>0&&s.every(r=>r?.id&&r?.name&&Array.isArray(r?.spatial?.projects)))return s}}}catch{}return[{id:Je,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const e=this.orgs.find(s=>s.id===this.activeOrgId);e&&(e.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(ht,JSON.stringify(this.orgs)),localStorage.setItem(yt,this.activeOrgId),this.activeOrgId===Je&&localStorage.setItem(bt,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(e=>({id:e.id,name:e.name,projectCount:e.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}async switchOrganization(e){const s=this.orgs.find(r=>r.id===e);if(!s)throw new Error(`404 NOT_FOUND: 机构 ${e} 不存在`);this.activeOrgId=s.id,this.spatial=s.spatial,this.persistSpatial()}async createOrganization(e){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const r=e.trim()||"新建机构",n={id:`org-${Date.now().toString(36)}`,name:r,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(n),this.activeOrgId=n.id,this.spatial=n.spatial,this.persistSpatial(),this.pushAudit("org.create",n.id,"success",r),{id:n.id,name:n.name,projectCount:0}}syncAdminScopesFromSpatial(){const e=this.spatial.projects.map(n=>n.id),s=this.spatial.buildings.map(n=>n.id),r=this.spatial.floors.map(n=>n.id);this.activeOrgId===Je&&(Ze.org_admin.scope.allowedProjectIds=[...e],Ze.org_admin.scope.allowedBuildingIds=[...s],Ze.org_admin.scope.allowedFloorIds=[...r],Ze.project_admin.scope.allowedBuildingIds=[...s],Ze.project_admin.scope.allowedFloorIds=[...r]),this.activeSession&&((this.activeOrgId!==Je||this.activeSession.role==="org_admin")&&(this.activeSession.scope.allowedProjectIds=[...e]),(this.activeOrgId!==Je||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin")&&(this.activeSession.scope.allowedBuildingIds=[...s],this.activeSession.scope.allowedFloorIds=[...r]))}async getSpatialTree(){const e=this.requireSession();if(this.activeOrgId!==Je){const M=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:M.projects.length,buildings:M.buildings.length,floors:M.floors.length}),M}const s=this.spatial.projects.filter(M=>e.scope.allowedProjectIds.includes(M.id)),r=this.spatial.buildings.filter(M=>e.scope.allowedBuildingIds.includes(M.id)),n=new Set(r.map(M=>M.id)),p=this.spatial.floors.filter(M=>n.has(M.buildingId)),E=new Set(p.map(M=>M.id)),D=this.spatial.zones.filter(M=>E.has(M.floorId)),O=structuredClone({projects:s,buildings:r,floors:p,zones:D});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:O.projects.length,buildings:O.buildings.length,floors:O.floors.length}),O}async createProject(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建项目`);const r={id:`project-${Date.now().toString(36)}`,name:e.name.trim()||"新建项目",city:e.city?.trim()||"广州市",address:e.address?.trim()||"",timezone:"Asia/Shanghai",location:e.location,imageUrl:e.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(r),s.scope.allowedProjectIds.includes(r.id)||s.scope.allowedProjectIds.push(r.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",r,e),this.pushAudit("project.create",r.id,"success",r.name),structuredClone(r)}async updateProject(e,s){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权修改项目配置`);const n=this.spatial.projects.find(p=>p.id===e);if(!n)throw new Error(`404 NOT_FOUND: 项目 ${e} 不存在`);return s.name!==void 0&&(n.name=s.name.trim()||n.name),s.city!==void 0&&(n.city=s.city.trim()),s.address!==void 0&&(n.address=s.address.trim()),s.location!==void 0&&(n.location=s.location),s.imageUrl!==void 0&&(n.imageUrl=s.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${e}`,n,s),this.pushAudit("project.update",e,"success",n.name),structuredClone(n)}async deleteProject(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除项目`);if(e===L.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const r=new Set(this.spatial.buildings.filter(p=>p.projectId===e).map(p=>p.id)),n=new Set(this.spatial.floors.filter(p=>r.has(p.buildingId)).map(p=>p.id));this.spatial.projects=this.spatial.projects.filter(p=>p.id!==e),this.spatial.buildings=this.spatial.buildings.filter(p=>p.projectId!==e),this.spatial.floors=this.spatial.floors.filter(p=>!r.has(p.buildingId)),this.spatial.zones=this.spatial.zones.filter(p=>!n.has(p.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${e}`,{ok:!0}),this.pushAudit("project.delete",e,"success")}async upsertBuilding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼宇`);let r=e.id?this.spatial.buildings.find(n=>n.id===e.id):void 0;return r?(r.name=e.name.trim()||r.name,r.aboveFloors=Math.max(0,e.aboveFloors),r.belowFloors=Math.max(0,e.belowFloors),r.hasRoof=e.hasRoof,e.areaSqm!==void 0&&(r.areaSqm=e.areaSqm),e.imageUrl!==void 0&&(r.imageUrl=e.imageUrl)):(r={id:`building-${Date.now().toString(36)}`,projectId:e.projectId,name:e.name.trim()||"新建楼宇",aboveFloors:Math.max(1,e.aboveFloors),belowFloors:Math.max(0,e.belowFloors),hasRoof:e.hasRoof,areaSqm:e.areaSqm??null,imageUrl:e.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(r)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",r,e),this.pushAudit("building.upsert",r.id,"success",r.name),structuredClone(r)}async deleteBuilding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼宇`);if(e===L.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const r=new Set(this.spatial.floors.filter(n=>n.buildingId===e).map(n=>n.id));this.spatial.buildings=this.spatial.buildings.filter(n=>n.id!==e),this.spatial.floors=this.spatial.floors.filter(n=>n.buildingId!==e),this.spatial.zones=this.spatial.zones.filter(n=>!r.has(n.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${e}`,{ok:!0}),this.pushAudit("building.delete",e,"success")}async upsertFloor(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼层`);const r=new Date().toISOString();let n=e.id?this.spatial.floors.find(p=>p.id===e.id):void 0;if(n)n.name=e.name.trim()||n.name,n.kind=e.kind,n.level=e.level,e.areaSqm!==void 0&&(n.areaSqm=e.areaSqm),e.planImageUrl!==void 0&&(n.plan=e.planImageUrl?{floorId:n.id,imageUrl:e.planImageUrl,planVersion:(n.plan?.planVersion??0)+1,updatedAt:r}:null);else{const p=`floor-${e.buildingId.slice(-6)}-${e.kind}-${Math.abs(e.level)}-${Date.now().toString(36).slice(-3)}`;n={id:p,buildingId:e.buildingId,kind:e.kind,level:e.level,name:e.name.trim()||`${e.level}F`,areaSqm:e.areaSqm??null,plan:e.planImageUrl?{floorId:p,imageUrl:e.planImageUrl,planVersion:1,updatedAt:r}:null},this.spatial.floors.push(n),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(n.id)&&this.activeSession.scope.allowedFloorIds.push(n.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:n.id,name:n.name,hasPlan:!!n.plan}),this.pushAudit("floor.upsert",n.id,"success",n.name),structuredClone(n)}async deleteFloor(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼层`);if(e===L.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(r=>r.id!==e),this.spatial.zones=this.spatial.zones.filter(r=>r.floorId!==e),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${e}`,{ok:!0}),this.pushAudit("floor.delete",e,"success")}async upsertZone(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护功能区`);let r=e.id?this.spatial.zones.find(n=>n.id===e.id):void 0;return r?(r.name=e.name.trim()||r.name,r.category=e.category):(r={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:e.floorId,name:e.name.trim(),category:e.category},this.spatial.zones.push(r)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",r),this.pushAudit("zone.upsert",r.id,"success",r.name),structuredClone(r)}async deleteZone(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(r=>r.id!==e),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${e}`,{ok:!0}),this.pushAudit("zone.delete",e,"success")}async copyZonesToFloors(e,s){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权复制功能区`);const n=this.spatial.floors.find(D=>D.id===e),p=this.spatial.zones.filter(D=>D.floorId===e);if(!n||p.length===0)return 0;let E=0;for(const D of s){if(D===e)continue;const O=this.spatial.floors.find(J=>J.id===D);if(!O)continue;const M=new Set(this.spatial.zones.filter(J=>J.floorId===D).map(J=>J.name));for(const J of p){const re=J.name.replace(new RegExp(`^${n.name}\\s*`,"i"),""),P=`${O.name} ${re}`.trim();M.has(P)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:D,name:P,category:J.category}),M.add(P),E+=1)}}return E>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:e,targetCount:s.length,added:E}),E}async getFloorDevices(e){const s=this.requireSession();if(this.activeOrgId!==Je)return[];if(!s.scope.allowedFloorIds.includes(e)){const n={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,n),this.pushAudit("floor.read",e,"denied",n.message),new Error(`403 FORBIDDEN: ${n.message}`)}if(e!==L.floorId)return[];let r=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(r=r.filter(n=>n.logicalZoneId&&s.scope.allowedZoneIds.includes(n.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:r.length}),r}async dispatchControlBatch(e){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const r=`batch-e7f-${Date.now().toString(36)}`,n={batchId:r,floorId:e.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(p=>({deviceId:p.deviceId,command:p.command,targetValue:p.targetValue,status:"queued"}))};return this.batches.set(r,n),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",n,e),this.pushAudit("control.dispatch",r,"success",`下发 ${e.targets.length} 台设备`),n.receipts.forEach((p,E)=>{const D=this.devices.find(O=>O.id===p.deviceId);setTimeout(()=>{p.status="dispatched",p.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:r,deviceId:p.deviceId,status:"dispatched",at:p.dispatchedAt})},280+E*120),setTimeout(()=>{const O=new Date().toISOString();!D||D.connectivity==="offline"?(p.status="timeout",p.errorCode="GATEWAY_READBACK_TIMEOUT",p.errorMessage="设备离线，网关未收到回读确认",p.verifiedAt=O):(p.status="verified_success",p.observedValue=p.targetValue,p.verifiedAt=O,this.applyObservedTelemetry(D,p.command,p.targetValue,O)),this.emit({type:"control.receipt.updated",batchId:r,deviceId:p.deviceId,status:p.status,observedValue:p.observedValue,at:O})},900+E*220)}),structuredClone(n)}applyObservedTelemetry(e,s,r,n){s==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:r,collectedAt:n,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(r)>0,collectedAt:n,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:r,collectedAt:n,stale:!1}:s==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:r,collectedAt:n,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:n,values:{[s]:r}})}async getControlBatch(e){this.requireSession();const s=this.batches.get(e);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(s)}async listAlarms(e){const s=this.requireSession();return this.activeOrgId!==Je?[]:!s.scope.allowedFloorIds.includes(e)||e!==L.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,s){const r=this.requireSession();if(!r.scope.canManageAlarms){const p=`角色「${r.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",p),new Error(`403 FORBIDDEN: ${p}`)}const n=this.alarms.find(p=>p.id===e);if(!n)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return n.status="acknowledged",n.acknowledgedAt=new Date().toISOString(),n.acknowledgedBy=r.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,n,{note:s}),this.pushAudit("alarm.acknowledge",e,"success",s),this.emit({type:"alarm.changed",floorId:n.floorId,alarmId:e,status:"acknowledged",at:n.acknowledgedAt}),structuredClone(n)}async listWorkOrders(e){const s=this.requireSession();return this.activeOrgId!==Je?[]:!s.scope.allowedFloorIds.includes(e)||e!==L.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const r=new Date().toISOString(),n={id:`wo-e7f-${Date.now().toString(36)}`,projectId:L.projectId,buildingId:L.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:r,updatedAt:r};if(this.workOrders.unshift(n),e.alarmId){const p=this.alarms.find(E=>E.id===e.alarmId);p&&(p.workOrderId=n.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",n,e),this.pushAudit("work_order.create",n.id,"success",n.title),structuredClone(n)}async updateWorkOrderStatus(e,s){const r=this.requireSession();if(!r.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权流转工单`);const n=this.workOrders.find(p=>p.id===e);if(!n)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return n.status=s,n.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,n,{status:s}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${s}`),structuredClone(n)}async updateDevicePlanPoint(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const r=this.devices.find(n=>n.id===e.deviceId);if(!r)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(r.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${r.version}，请刷新后重试`);return r.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},r.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,r,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${r.planPoint.x}, ${r.planPoint.y})`),structuredClone(r)}async updateDeviceHardwareBinding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const r=this.devices.find(p=>p.id===e.deviceId);if(!r)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(r.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${r.version}）`);const n=new Date().toISOString();return r.physicalInstalled=e.physicalInstalled,r.physicalVerifiedAt=e.physicalInstalled?n:null,r.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:n,boundBy:s.displayName},r.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,r,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(r)}async listConnections(e){return this.requireSession(),this.activeOrgId!==Je?[]:structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),this.activeOrgId!==Je?[]:structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,s){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权冻结交付批次`);const n=this.devices.filter(E=>E.physicalInstalled&&E.hardwareBinding).length,p={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:L.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:n,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:r.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(p),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,p,{note:s}),this.pushAudit("delivery.freeze",p.id,"success",`${n}/${this.devices.length} 已现场核验`),structuredClone(p)}async getAnalysisReport(e,s,r){this.requireSession();const n=s==="today"?1:s==="7d"?7:30,E={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*n)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*n).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(M=>M.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*n).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*n).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*n).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],D=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],O={category:e,range:s,scopeId:r,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:E.kpis,unit:E.unit,series:E.base.map((M,J)=>({label:D[J],value:Math.round(M*(e==="energy"||e==="carbon"?n/2+.5:1)),baseline:Math.round(M*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:E.base[3],unit:E.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:E.base[4],unit:E.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:E.base[1],unit:E.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${s}&scopeId=${r}`,{kpis:O.kpis.length}),O}async listScenes(e){return this.requireSession(),this.activeOrgId!==Je?[]:structuredClone(this.scenes)}async createScene(e){const s=this.requireSession();if(!s.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建场景`);const r={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(r),this.record("REST","createScene","POST /api/v1/scenes",r,e),this.pushAudit("scene.create",r.id,"success",r.name),structuredClone(r)}async executeScene(e){const s=this.scenes.find(n=>n.id===e);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const r=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=r.batchId,r}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:L.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,s,r){this.requireSession();const n=r>=this.calendar.nightGuardStart?`下班时间 ${r} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,p=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${r}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${r} (+30m)`,conflictWarning:n},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:n}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",p,{workdayStart:s,workdayEnd:r}),p}async saveWorkCalendar(e,s,r,n){const p=this.requireSession();if(!p.scope.canEditSettings)throw this.pushAudit("settings.calendar",L.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${p.roleLabel}」无权修改应用设置`);if(this.calendar.version!==n)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=r)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:r,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:r,expectedVersion:n}),this.pushAudit("settings.calendar",L.projectId,"success",`${s}-${r}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,s,r){const n=this.requireSession();if(!n.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",e,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权启停应用设置规则`);const p=this.rules.find(E=>E.id===e);if(!p)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(p.version!==r)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${p.version}）`);return p.enabled=s,p.version+=1,p.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,p,{enabled:s,expectedVersion:r}),this.pushAudit("settings.rule_toggle",e,"success",s?"启用":"停用"),structuredClone(p)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,s){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",e,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const n=Ze[s],p={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:s,roleLabel:n.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(p),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",p,{email:e,role:s}),this.pushAudit("org.invite",e,"success",n.roleLabel),structuredClone(p)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const e=this.requireSession();return this.reconcileOverrides(),e.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(s=>s.targetUserId===e.userId))}async grantOverride(e){const s=this.requireSession();if(!s.scope.canGrantOverride)throw this.pushAudit("override.grant",e.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const r=e.reason.trim();if(!r)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(e.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const n=this.members.find(D=>D.userId===e.targetUserId);if(!n)throw new Error(`404 NOT_FOUND: 目标成员 ${e.targetUserId} 不存在`);if(n.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const p=Date.now(),E={id:`ovr-${p.toString(36)}`,targetUserId:n.userId,targetUserName:n.displayName,module:e.module,durationHours:e.durationHours,grantedAt:new Date(p).toISOString(),expiresAt:new Date(p+e.durationHours*36e5).toISOString(),approvedBy:s.displayName,reason:r,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(E),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",E,e),this.pushAudit("override.grant",`${n.displayName} · ${e.module==="deployment"?"系统部署":"应用设置"}`,"success",`${e.durationHours}h · ${r}`),structuredClone(E)}async revokeOverride(e){const s=this.requireSession();if(!s.scope.canGrantOverride)throw this.pushAudit("override.revoke",e,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const r=this.overrides.find(n=>n.id===e);if(!r)throw new Error(`404 NOT_FOUND: 提权记录 ${e} 不存在`);return r.status="revoked",r.revokedAt=new Date().toISOString(),r.revokedBy=s.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${e}/revoke`,r),this.pushAudit("override.revoke",`${r.targetUserName} · ${r.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(r)}subscribeFloorEvents(e,s){return e!==L.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${L.floorId}`,e),this.listeners.forEach(s=>s(e))}}const Qa=["org_admin","project_admin","operator","space_user"],Gt=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function xe(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Xa(a){return a?a.slice(0,16).replace("T"," "):"—"}function Oa(a){return a==="deployment"?"系统部署":"应用设置"}async function Zt(a,e,s,r,n){const p=s.scope.canManageMembers,E=s.scope.canGrantOverride,D=s.scope.canViewAuditLogs,O=E||s.role==="operator",M=s.role!=="space_user";let J="profile",re=M?await e.listOrgMembers().catch(()=>[]):[],P=O?await e.listOverrides().catch(()=>[]):[],K=D?await e.listAuditLogs().catch(()=>[]):[],ce="",Q="all",F="all",B="all",H=!1,X=!1,oe=s.displayName,de=s.role==="org_admin"?"机构负责人":s.role==="project_admin"?"项目负责人":s.role==="operator"?"运行值守工程师":"园区空间用户",N="138-0013-8072",ge="",pe="";const Ie={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function ue(){const[z,u,$,q]=await Promise.all([e.getSession(),M?e.listOrgMembers().catch(()=>[]):Promise.resolve([]),O?e.listOverrides().catch(()=>[]):Promise.resolve([]),D?e.listAuditLogs().catch(()=>[]):Promise.resolve([])]);re=u,P=$,K=q,z&&(s=z,r(z)),Y()}function W(){const z=["profile"];return M&&z.push("members","roles"),O&&z.push("overrides"),D&&z.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${z.map(u=>{const $=Ie[u],q=u==="overrides"?P.filter(d=>d.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${J===u}" data-anav="${u}">
                  ${ke($.icon,16)}
                  <span>${$.label}</span>
                  ${q>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${q}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function G(){return J==="members"&&p?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':J==="overrides"&&E?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':J==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 · SR 6.1</span>':""}function le(){const z=s.scope.activeOverrides.filter($=>$.status==="active"),u=s.scope.allowedZoneIds?.length?`授权 ${s.scope.allowedFloorIds.length} 个楼层 · ${s.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${s.scope.allowedProjectIds.length} 个项目 · ${s.scope.allowedBuildingIds.length} 栋楼宇 · ${s.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${xe(s.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${xe(s.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${xe(oe)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${xe(de)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${xe(N)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${xe(u)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${xe(gt[s.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${xe(s.roleLabel)}</span>
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
          ${z.length>0?z.map($=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${xe(Oa($.module))}（${$.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${xe($.approvedBy)} · 到期时间：${xe(Xa($.expiresAt))} · 事由：${xe($.reason)}</span>
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
    `}function ie(){const z=ce.trim().toLowerCase(),u=re.filter($=>Q!=="all"&&$.role!==Q?!1:z?`${$.displayName} ${$.email} ${$.roleLabel} ${$.scopeSummary}`.toLowerCase().includes(z):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${xe(ce)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${Q==="all"?"selected":""}>全部角色（${re.length}）</option>
            ${Qa.map($=>`<option value="${$}" ${Q===$?"selected":""}>${xe(Ue[$])}</option>`).join("")}
          </select>
        </div>
        <span class="pacom-row-sub">显示 ${u.length} / ${re.length} 人</span>
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
                              <span class="pacom-pop-avatar">${xe($.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${xe($.displayName)}</div>
                                ${p?`<div class="pacom-row-sub">${xe($.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${$.role==="org_admin"||$.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${xe($.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${xe($.scopeSummary)}</span></td>
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
    `}function fe(){return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">四级标准角色说明</h2>
          <span class="pacom-row-sub">IEC 62443-3-3 SR 2.1 RE 2 · 最小权限与职责分离</span>
        </div>
        <div class="pacom-settings-card">
          ${Qa.map(z=>{const u=re.filter($=>$.role===z).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${xe(Ue[z])}</span>
                  <span class="pacom-setting-desc">${xe(gt[z])}</span>
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
                ${Gt.map(z=>`
                  <tr>
                    <td><strong style="font-weight:450;">${xe(z.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${z.org_admin.tone}">${xe(z.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${z.project_admin.tone}">${xe(z.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${z.operator.tone}">${xe(z.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${z.space_user.tone}">${xe(z.space_user.text)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Le(){return`
      <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="限时提权统计">
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">当前生效提权</span>
          <div class="pacom-kpi-value">${P.filter(u=>u.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${P.length}<span class="pacom-kpi-unit">条</span></div>
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
                ${P.length===0?`<tr><td colspan="${E?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${E?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:P.map(u=>`
                          <tr>
                            <td><strong style="font-weight:450;">${xe(u.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${xe(Oa(u.module))}</span></td>
                            <td>
                              <div>${u.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${xe(Xa(u.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${xe(u.approvedBy)}</div>
                              <div class="pacom-row-sub">${xe(u.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${u.status==="active"?"pacom-badge--online":u.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${u.status==="active"?"生效中":u.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${E?`<td style="text-align:right;">
                                    ${u.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${xe(u.id)}">提前收回</button>`:`<span class="pacom-row-sub">${u.revokedBy?`${xe(u.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function he(){const z=K.filter(u=>{if(F==="success"&&u.result!=="success"||F==="denied"&&u.result==="success")return!1;if(B!=="all"){const $=`${u.action} ${u.target}`.toLowerCase();if(B==="control"&&!$.includes("control")&&!$.includes("scene")||B==="alarm"&&!$.includes("alarm")&&!$.includes("work")||B==="deploy"&&!$.includes("deploy")&&!$.includes("plan")&&!$.includes("hardware")&&!$.includes("project")&&!$.includes("building")&&!$.includes("floor")&&!$.includes("zone")||B==="settings"&&!$.includes("settings")||B==="override"&&!$.includes("override"))return!1}return!0});return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
            <option value="all" ${B==="all"?"selected":""}>全部操作类别</option>
            <option value="override" ${B==="override"?"selected":""}>限时提权审批</option>
            <option value="control" ${B==="control"?"selected":""}>设备控制与场景</option>
            <option value="alarm" ${B==="alarm"?"selected":""}>告警与工单处置</option>
            <option value="deploy" ${B==="deploy"?"selected":""}>系统部署与空间</option>
            <option value="settings" ${B==="settings"?"selected":""}>应用设置变更</option>
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="按执行结果筛选">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${F==="all"}" data-audit-filter="all">全部（${K.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${F==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${F==="denied"}" data-audit-filter="denied">已拦截</button>
          </div>
        </div>
        <span class="pacom-row-sub">共 ${z.length} 条只读记录</span>
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
              ${z.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':z.map(u=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${xe(u.action)}</div>
                            ${u.detail?`<div class="pacom-row-sub">${xe(u.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${xe(u.target)}</code></td>
                          <td>
                            <div>${xe(u.actor)}</div>
                            <div class="pacom-row-sub">${xe(Ue[u.role]??u.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${xe(Xa(u.at))}</span></td>
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
    `}function A(){const z=[];if(H&&p){const u=s.role==="org_admin"?Qa:["project_admin","operator","space_user"];z.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="邀请成员">
          <form class="dep-modal-card" data-role="invite-form" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">邀请新成员</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ke("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">成员电子邮箱（唯一登录账号）</span>
                <input class="pacom-input" name="email" type="email" placeholder="colleague@gzlab.ac.cn" required />
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分配角色</span>
                <select class="pacom-select" name="role">
                  ${u.map($=>`<option value="${$}">${xe(Ue[$])}</option>`).join("")}
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
        </div>`)}if(X&&E){const u=re.filter($=>$.role==="operator");z.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="授予限时提权">
          <form class="dep-modal-card" data-role="grant-override-form" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">授予运营人员限时提权（SR 2.1 RE 3）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ke("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">目标运营人员</span>
                <select class="pacom-select" name="targetUserId" required>
                  ${u.length===0?'<option value="">暂无运营人员</option>':u.map($=>`<option value="${xe($.userId)}">${xe($.displayName)}（${xe($.email)}）</option>`).join("")}
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
              <span class="pacom-row-sub">审批人：${xe(s.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${u.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return z.join("")}function Y(){const z=Ie[J],u=G();a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${xe(s.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${W()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${u?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${z.label}</h2>
                  <p class="pacom-unified-subtitle">${z.subtitle}</p>
                </div>
                ${u?`<div class="pacom-unified-head-actions">${u}</div>`:""}
              </div>
              ${ge?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${xe(ge)}</span></div>`:""}
              ${pe?`<div class="pacom-alert-banner">${xe(pe)}</div>`:""}
              ${J==="profile"?le():J==="members"?ie():J==="roles"?fe():J==="overrides"?Le():he()}
            </div>
          </div>
        </div>
      </div>
      ${A()}
    `,Ae()}function Ae(){a.querySelectorAll("[data-anav]").forEach(u=>{u.addEventListener("click",()=>{J=u.dataset.anav??"profile",ge="",pe="",Y()})}),a.querySelector('[data-role="profile-form"]')?.addEventListener("submit",u=>{u.preventDefault();const $=new FormData(u.currentTarget);oe=String($.get("displayName")??"").trim()||s.displayName,de=String($.get("jobTitle")??"").trim()||de,N=String($.get("phone")??"").trim()||N,ge=`已保存个人资料：${oe}（${de}）· ${N}`,Y()}),a.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",n()}),a.querySelector("[data-open-invite]")?.addEventListener("click",()=>{H=!0,X=!1,Y()}),a.querySelector("[data-open-grant]")?.addEventListener("click",()=>{X=!0,H=!1,Y()}),a.querySelectorAll("[data-close-modals]").forEach(u=>{u.addEventListener("click",()=>{H=!1,X=!1,Y()})}),a.querySelectorAll("[data-modal-scrim]").forEach(u=>{u.addEventListener("click",$=>{$.target===u&&(H=!1,X=!1,Y())})}),a.querySelector("[data-member-search]")?.addEventListener("input",u=>{const $=u.currentTarget,q=$.selectionStart??$.value.length;ce=$.value,Y();const d=a.querySelector("[data-member-search]");d&&(d.focus(),d.setSelectionRange(q,q))}),a.querySelector("[data-role-filter]")?.addEventListener("change",u=>{Q=u.currentTarget.value,Y()}),a.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async u=>{u.preventDefault(),pe="";const $=new FormData(u.currentTarget);try{const q=await e.inviteOrgMember(String($.get("email")??""),String($.get("role")));H=!1,ge=`已向 ${q.email} 发送「${q.roleLabel}」邀请。`,await ue()}catch(q){pe=q instanceof Error?q.message:String(q),Y()}}),a.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async u=>{u.preventDefault(),pe="";const $=new FormData(u.currentTarget);try{const q=await e.grantOverride({targetUserId:String($.get("targetUserId")??""),module:String($.get("module")??"deployment"),durationHours:Number($.get("durationHours")??8),reason:String($.get("reason")??"")});X=!1,ge=`已为「${q.targetUserName}」开启「${Oa(q.module)}」${q.durationHours} 小时限时修改权，到期自动收回。`,await ue()}catch(q){pe=q instanceof Error?q.message:String(q),Y()}}),a.querySelectorAll("[data-revoke-override]").forEach(u=>{u.addEventListener("click",async()=>{const $=u.dataset.revokeOverride;if($){pe="";try{const q=await e.revokeOverride($);ge=`已提前收回「${q.targetUserName}」的「${Oa(q.module)}」限时修改权。`,await ue()}catch(q){pe=q instanceof Error?q.message:String(q),Y()}}})}),a.querySelectorAll("[data-audit-filter]").forEach(u=>{u.addEventListener("click",()=>{F=u.dataset.auditFilter??"all",Y()})}),a.querySelector("[data-audit-cat]")?.addEventListener("change",u=>{B=u.currentTarget.value??"all",Y()})}Y()}const ra={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Kt={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Yt={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Jt(a){const e=`${a.title} ${a.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Qt(a){return a.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:a.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function et(a){const e=`${a.title} ${a.message}`.toLowerCase();return e.includes("离线")||e.includes("vav")||a.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:e.includes("co₂")||e.includes("co2")||a.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function Xt(a,e,s){const r=new URLSearchParams(window.location.hash.split("?")[1]??""),n=r.get("alarm"),p=r.get("wo"),E=s.scope.canManageAlarms;let D=await e.getSpatialTree(),O=Va(),M=!1,J="",re=[],P=[],K=[],ce=p?"workorders":"alarms",Q="all",F="all",B="all",H="impact",X=!1,oe="",de=n,N=p,ge=null,pe=null,Ie="resolved";const ue=new Set,W=new Map,G=new Map,le=new Map,ie=new Map;let fe="",Le="";function he(u){const $=ie.get(u.id);if($)return $;const q=u.id.match(/(\d+)$/),d=`WO-2026-${q?q[1]:u.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,v={estCost:"¥ 450",actualCost:u.status==="closed"?"¥ 380":"--",cmmsNo:d,assigneeGroup:"暖通运维组",tasks:[{id:`${u.id}-t1`,label:"核查设备供电与现场指示灯状态",done:u.status!=="open"},{id:`${u.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:u.status==="resolved"||u.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:u.createdAt?u.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${d}）`}]};return ie.set(u.id,v),v}async function A(){[re,P,K]=await Promise.all([e.listAlarms(L.floorId),e.listWorkOrders(L.floorId),e.getFloorDevices(L.floorId).catch(()=>[])]),P.forEach(u=>he(u)),z()}function Y(u){if(!u)return{name:"楼层通用",zone:"E7F",dev:null};const $=K.find(q=>q.id===u)??null;return $?{name:$.name,zone:($.logicalZoneId?Yt[$.logicalZoneId]:void 0)??"E7F",dev:$}:{name:u,zone:"E7F",dev:null}}function Ae(u){const $=Y(u.deviceId).dev;$&&$.connectivity==="offline"?le.set(u.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${$.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):le.set(u.id,{verdict:"pass",summary:`自检通过（PASS）：「${$?.name??u.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),de=u.id,z()}function z(){const u=re.filter(y=>y.status==="active"&&!W.has(y.id)),$=P.filter(y=>!he(y).cancelled&&(y.status==="open"||y.status==="assigned"||y.status==="in_progress")),q=re.filter(y=>y.status!=="active").length+G.size,d=0,v=W.size,j=oe.trim().toLowerCase(),ne=re.filter(y=>{const f=W.has(y.id);if(Q==="snoozed"){if(!f)return!1}else if(Q==="active"){if(y.status!=="active"||f)return!1}else if(Q==="acknowledged"){if(y.status!=="acknowledged")return!1}else if(f)return!1;if(B!=="all"&&y.severity!==B)return!1;if(!j)return!0;const U=Y(y.deviceId);return`${y.title} ${y.message} ${U.name} ${U.zone} ${y.deviceId}`.toLowerCase().includes(j)}),me=new Map;for(const y of ne){const f=`${y.title} ${y.message}`.toLowerCase(),U=f.includes("离线")||f.includes("modbus")||f.includes("通信"),ae=X?U?"root-gateway-modbus":y.deviceId:y.id,be=U?"根因：E7F 主控网关通信链路":`根因：${Y(y.deviceId).name}`,Oe=me.get(ae)??{rootLabel:be,items:[]};Oe.items.push(y),me.set(ae,Oe)}const Ce=Array.from(me.values());H==="impact"&&Ce.sort((y,f)=>et(f.items[0]).costYuan-et(y.items[0]).costYuan);const we=P.filter(y=>{const f=he(y);if(F==="cancelled"){if(!f.cancelled)return!1}else if(f.cancelled||F==="open"&&(y.status==="resolved"||y.status==="closed")||F==="resolved"&&y.status!=="resolved"||F==="closed"&&y.status!=="closed")return!1;if(!j)return!0;const U=Y(y.deviceId);return`${y.title} ${y.description} ${y.id} ${f.cmmsNo} ${U.name}`.toLowerCase().includes(j)});a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Ba({tree:D,session:s,scope:O,activeAlarmCount:u.length,isOpen:M,searchKeyword:J})}
            </div>

            <div class="pacom-header-meta">
              ${ce==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${X}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${s.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${s.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${ke("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ce==="alarms"}" data-main-tab="alarms">实时告警（${re.length-v}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ce==="workorders"}" data-main-tab="workorders">运维工单（${P.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ce==="alarms"&&Q==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${u.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ce==="workorders"&&F==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${$.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ce==="alarms"&&Q==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${q}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${d}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${fe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${c(fe)}</span></div>`:""}
          ${Le?`<div class="pacom-alert-banner">${c(Le)}</div>`:""}

          ${ce==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${c(oe)}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${B==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${B==="critical"?"selected":""}>严重</option>
                      <option value="major" ${B==="major"?"selected":""}>重要</option>
                      <option value="minor" ${B==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${H==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${H==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${Q==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${Q==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${Q==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${Q==="snoozed"}" data-status-pill="snoozed">已忽略（${v}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${ue.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${ue.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${Ce.length} 项</span>
                  </div>
                </div>
                ${Ce.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${Ce.map(y=>{const f=y.items[0],U=Kt[f.severity]??{label:f.severity,cls:"pacom-badge--neutral"},ae=Y(f.deviceId),be=Qt(f),Oe=et(f),h=de===f.id,Z=W.get(f.id),Ee=!!Z,Me=ue.has(f.id),ve=le.get(f.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${c(f.id)}" data-check-alarm="${c(f.id)}" ${Me?"checked":""} ${!E||f.status!=="active"||Ee?"disabled":""} aria-label="选择 ${c(f.title)}" />
                                  </td>
                                  <td><span class="pacom-badge ${U.cls}">${c(U.label)}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${c(f.title)}</span>
                                      ${X?`<span class="pacom-badge pacom-badge--accent">${c(y.rootLabel)}${y.items.length>1?` · 影响 ${y.items.length} 项`:""}</span>`:""}
                                      ${ve?`<span class="pacom-badge ${ve.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${c(ve.verdict.toUpperCase())}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${c(f.message)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${c(ae.name)}</div>
                                    <div class="pacom-row-sub">${c(ae.zone)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${c(Oe.costLabel)}</div>
                                    <div class="pacom-row-sub">${c(Oe.comfortLabel)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${c(be.duration)}</div>
                                    <div class="pacom-row-sub" style="color:${be.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${c(be.trend)}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${Ee?"pacom-badge--neutral":f.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Ee?`忽略 ${c(Z?.duration)}`:f.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Ee?`<button class="pacom-btn" data-unsnooze="${c(f.id)}" ${E?"":"disabled"}>恢复监控</button>`:`
                                            ${f.status==="active"?`<button class="pacom-btn" data-mark-actioned="${c(f.id)}" ${E?"":"disabled"}>标记已处置</button>`:""}
                                            ${f.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${c(f.id)}" ${E?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${c(f.id)}">${h?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${h?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${c(Jt(f))}
                                            </div>
                                            ${Z?`<div class="pacom-info-banner">忽略周期：${c(Z.duration)} · 原因备注：${c(Z.reason)}</div>`:""}
                                            ${ve?`
                                                <div class="pacom-banner ${ve.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${c(ve.summary)}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${ve.steps.map($e=>`<span>${c($e)}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${c(f.id)}</code> · 设备编号 <code>${c(f.deviceId)}</code> · 关联工单 ${c(f.workOrderId??"无")}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${c(f.id)}">单机自检（FTT）</button>
                                              ${!Ee&&f.status==="active"?`<button class="pacom-btn" data-open-snooze="${c(f.id)}" ${E?"":"disabled"}>限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${c(f.deviceId)}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${c(f.deviceId)}">定位设备 →</button>
                                            </div>
                                            ${ge===f.id?`
                                                <form data-snooze-form="${c(f.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
              ${(()=>{const y=N?P.find(f=>f.id===N)??null:null;if(y){const f=Y(y.deviceId),U=he(y),ae=!!(!E||U.cancelled||y.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${c(y.id)}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${c(y.title)}</h2>
                        <span class="pacom-badge pacom-badge--accent">${c(U.cmmsNo)}</span>
                        ${U.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${c(y.id)}" data-wo-status="${c(y.id)}" aria-label="更新工单状态" ${ae?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(be=>`<option value="${be}" ${y.status===be?"selected":""}>${ra[be]}</option>`).join("")}
                          <option value="cancelled" ${U.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${pe===y.id?`
                        <form data-close-wo-form="${c(y.id)}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${ra[Ie]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${c(U.cause??"")}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${c(U.solution??"")}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${c(U.actualCost==="--"?"":U.actualCost)}" />
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
                          <div class="pacom-row-sub">${c(y.description)}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${U.tasks.map(be=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${c(be.id)}" data-wo-task="${c(y.id)}" data-task-id="${c(be.id)}" ${be.done?"checked":""} ${ae?"disabled":""} />
                                    <span>${c(be.label)}</span>
                                  </span>
                                  ${be.unit?`<span class="pacom-row-sub">实测：${c(be.reading??"--")} ${c(be.unit)}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${U.history.map(be=>`<span>• <span class="pacom-row-sub">${c(be.at)}</span> — ${c(be.text)}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${c(y.id)}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${c(U.cmmsNo)}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${c(f.name)}（${c(f.zone)}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${c(U.assigneeGroup)}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${c(U.estCost)} / 实际 ${c(U.actualCost)}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${c(U.cause??"待完单填写")}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${c(U.solution??"待完单填写")}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${c(y.deviceId??"")}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${c(y.deviceId??"")}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${c(oe)}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${F==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${F==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${F==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${F==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${F==="cancelled"}" data-wo-pill="cancelled">已取消</button>
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
                            ${we.map(f=>{const U=Y(f.deviceId),ae=he(f),be=!!(!E||ae.cancelled||f.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${c(f.title)}</span>
                                        ${ae.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${c(f.description)} · <code>${c(f.id)}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${c(U.name)}</div>
                                      <div class="pacom-row-sub">${c(U.zone)}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${c(ae.cmmsNo)}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${c(ae.assigneeGroup)} · 预估 ${c(ae.estCost)}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${c(f.id)}" data-wo-status="${c(f.id)}" aria-label="更新工单状态" ${be?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Oe=>`<option value="${Oe}" ${f.status===Oe?"selected":""}>${ra[Oe]}</option>`).join("")}
                                          <option value="cancelled" ${ae.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${c(f.id)}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${pe===f.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${c(f.id)}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${ra[Ie]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${c(ae.cause??"")}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${c(ae.solution??"")}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${c(ae.actualCost==="--"?"":ae.actualCost)}" />
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
    `,Ua(a,{onToggle:()=>{M=!M,z(),M&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:y=>{J=y,z();const f=a.querySelector("[data-global-space-search]");f&&(f.focus(),f.setSelectionRange(y.length,y.length))},onPick:y=>{O=y,M=!1,z()}}),a.querySelectorAll("[data-main-tab]").forEach(y=>{y.addEventListener("click",()=>{ce=y.dataset.mainTab??"alarms",fe="",z()})}),a.querySelectorAll("[data-kpi-filter]").forEach(y=>{y.addEventListener("click",()=>{const f=y.dataset.kpiFilter;fe="",f==="workorders"?(ce="workorders",F=F==="open"?"all":"open"):(f==="active"||f==="acknowledged")&&(ce="alarms",Q=Q===f?"all":f),z()})}),a.querySelectorAll("[data-status-pill]").forEach(y=>{y.addEventListener("click",()=>{Q=y.dataset.statusPill??"all",z()})}),a.querySelectorAll("[data-wo-pill]").forEach(y=>{y.addEventListener("click",()=>{F=y.dataset.woPill??"all",z()})}),a.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{fe="",A()}),a.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{X=!X,z()}),a.querySelector("[data-severity-filter]")?.addEventListener("change",y=>{B=y.currentTarget.value,z()}),a.querySelector("[data-alarm-sort]")?.addEventListener("change",y=>{H=y.currentTarget.value??"impact",z()}),a.querySelector("[data-alarm-search]")?.addEventListener("input",y=>{const f=y.currentTarget,U=f.selectionStart??f.value.length;oe=f.value,z();const ae=a.querySelector("[data-alarm-search]");ae&&(ae.focus(),ae.setSelectionRange(U,U))}),a.querySelectorAll("[data-check-alarm]").forEach(y=>{y.addEventListener("change",()=>{if(!E)return;const f=y.dataset.checkAlarm;f&&(y.checked?ue.add(f):ue.delete(f),z())})}),a.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{if(!E)return;Le="";const y=Array.from(ue);try{for(const f of y)await e.acknowledgeAlarm(f,"告警中心批量确认"),G.set(f,"批量确认处置");ue.clear(),fe=`已批量确认 ${y.length} 条告警，未来 24 小时持续校验无复发。`,await A()}catch(f){Le=f instanceof Error?f.message:String(f),z()}}),a.querySelectorAll("[data-expand-alarm]").forEach(y=>{y.addEventListener("click",()=>{const f=y.dataset.expandAlarm??null;de=de===f?null:f,ge=null,z()})}),a.querySelectorAll("[data-expand-wo]").forEach(y=>{y.addEventListener("click",()=>{const f=y.dataset.expandWo??null;N=N===f?null:f,z()})}),a.querySelectorAll("[data-run-ftt]").forEach(y=>{y.addEventListener("click",()=>{const f=re.find(U=>U.id===y.dataset.runFtt);f&&Ae(f)})}),a.querySelectorAll("[data-open-snooze]").forEach(y=>{y.addEventListener("click",()=>{E&&(ge=y.dataset.openSnooze??null,z())})}),a.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{ge=null,z()}),a.querySelectorAll("[data-snooze-form]").forEach(y=>{y.addEventListener("submit",f=>{if(f.preventDefault(),!E)return;const U=y.dataset.snoozeForm;if(!U)return;const ae=new FormData(y),be=String(ae.get("duration")??"24h"),Oe=String(ae.get("reason")??"").trim()||"现场核查中";W.set(U,{duration:be,reason:Oe}),ue.delete(U),ge=null,fe=`已限时忽略该告警（${be} · ${Oe}），可在「已忽略」页签中随时恢复。`,z()})}),a.querySelectorAll("[data-unsnooze]").forEach(y=>{y.addEventListener("click",()=>{if(!E)return;const f=y.dataset.unsnooze;f&&(W.delete(f),fe="已恢复该告警的实时监控。",z())})}),a.querySelectorAll("[data-go-ts]").forEach(y=>{y.addEventListener("click",()=>{const f=y.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(f)}`})}),a.querySelectorAll("[data-locate-home]").forEach(y=>{y.addEventListener("click",()=>{const f=y.dataset.locateHome??"";window.location.hash=f?`#home?device=${encodeURIComponent(f)}`:"#home"})}),a.querySelectorAll("[data-mark-actioned]").forEach(y=>{y.addEventListener("click",async()=>{if(!E)return;Le="";const f=y.dataset.markActioned;try{await e.acknowledgeAlarm(f,"现场自处理完成（Mark Actioned）"),G.set(f,"现场自处理完成"),ue.delete(f),fe="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await A()}catch(U){Le=U instanceof Error?U.message:String(U),z()}})}),a.querySelectorAll("[data-to-wo]").forEach(y=>{y.addEventListener("click",async()=>{if(!E)return;Le="";const f=re.find(U=>U.id===y.dataset.toWo);if(f)try{await e.createWorkOrder({floorId:f.floorId,deviceId:f.deviceId,alarmId:f.id,title:`处置告警：${f.title}`,description:f.message}),fe=`已将「${f.title}」转为运维工单并同步 CMMS。`,await A()}catch(U){Le=U instanceof Error?U.message:String(U),z()}})}),a.querySelectorAll("[data-wo-status]").forEach(y=>{y.addEventListener("change",async()=>{if(!E)return;const f=y.dataset.woStatus,U=y.value;if(Le="",U==="cancelled"){const ae=P.find(be=>be.id===f);if(ae){const be=he(ae);be.cancelled=!0,be.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),fe="工单已移入「已取消」分类并锁定编辑。",z()}return}if(U==="resolved"||U==="closed"){pe=f,Ie=U,z();return}try{await e.updateWorkOrderStatus(f,U);const ae=P.find(be=>be.id===f);ae&&he(ae).history.unshift({at:"刚刚",text:`状态变更为「${ra[U]}」`}),fe="工单状态已更新并写入审计日志。",await A()}catch(ae){Le=ae instanceof Error?ae.message:String(ae),await A()}})}),a.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{pe=null,z()}),a.querySelectorAll("[data-close-wo-form]").forEach(y=>{y.addEventListener("submit",async f=>{if(f.preventDefault(),!E)return;const U=y.dataset.closeWoForm,ae=new FormData(y),be=String(ae.get("cause")??"").trim(),Oe=String(ae.get("solution")??"").trim(),h=String(ae.get("actualCost")??"").trim();try{await e.updateWorkOrderStatus(U,Ie);const Z=P.find(Ee=>Ee.id===U);if(Z){const Ee=he(Z);Ee.cause=be,Ee.solution=Oe,h&&(Ee.actualCost=h),Ee.history.unshift({at:"刚刚",text:`流转至「${ra[Ie]}」· 根因：${be}`})}pe=null,N=U,fe=`工单已更新为「${ra[Ie]}」，根因与方案已沉淀归档。`,await A()}catch(Z){Le=Z instanceof Error?Z.message:String(Z),z()}})}),a.querySelectorAll("[data-wo-task]").forEach(y=>{y.addEventListener("change",()=>{if(!E)return;const f=P.find(be=>be.id===y.dataset.woTask);if(!f)return;const ae=he(f).tasks.find(be=>be.id===y.dataset.taskId);ae&&(ae.done=y.checked),z()})})}await A()}const es={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},as={frozen:"已冻结",draft:"草稿",delivered:"已交付"},at={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},tt=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],$t=[{id:"doc-hvac-7f",floorId:L.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:L.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:L.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:L.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],ts={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},wt=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function m(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Da(a){const e=a.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面")||e.includes("屋顶")||e.includes("天面"))return 999;const s=e.match(/(-?\d+)/);if(!s)return 0;const r=Number(s[1]);return e.startsWith("B")||e.includes("地下")||e.includes("负")?-Math.abs(r):r}const St={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function ca(a){const e=a.trim(),s=e.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test(s)||/屋面|屋顶|天面/.test(e))return"RF";const r=s.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(r)return`B${Number(r[1])}`;const n=e.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(n){const D=/^\d+$/.test(n[1])?Number(n[1]):St[n[1]];if(D)return`B${D}`}if(/首层|一层/.test(e))return"1F";const p=e.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(p){const D=/^\d+$/.test(p[1])?Number(p[1]):St[p[1]];if(D)return`${D}F`}const E=s.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return E?`${Number(E[1])}F`:null}function Fa(a){return new Promise((e,s)=>{const r=new FileReader;r.onload=()=>typeof r.result=="string"?e(r.result):s(new Error("无法读取图片内容")),r.onerror=()=>s(new Error(`读取文件「${a.name}」失败`)),r.readAsDataURL(a)})}function ss(a){return a.category==="gateway"?a.name.includes("蓝牙")?"蓝牙适配器":"主控网关":a.category==="lighting"?a.name.includes("702")?"702 照明":a.name.slice(0,6):a.category==="hvac"?a.name.includes("VAV")?"VAV-02":a.name.includes("FCU")?"FCU-01":a.name.slice(0,6):a.category==="sensor"?"环境传感":a.name.slice(0,6)}function ns(a,e){const s=a.status!=="connected",r=e.filter(n=>n.hardwareBinding?.protocol===a.protocol);return r.length>0?r.map(n=>{const p=n.connectivity==="offline"||s;return{pointName:n.category==="hvac"?"送风温度 / 阀门开度":n.category==="lighting"?"回路开关 / 亮度反馈":n.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:n.name,value:p?"无上报":n.category==="hvac"?"23.4°C · 62%":n.category==="lighting"?"开启 · 80%":n.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:p?"46 分钟前":"12 秒前",quality:p?n.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${a.protocol.toUpperCase()} 采集通道汇总点`,deviceName:a.name,value:s?"采样延迟":"正常上报",interval:"60s",lastSeen:s?"38 分钟前":"9 秒前",quality:s?"delayed":"online"}]}async function is(a,e,s){const r=new URLSearchParams(window.location.hash.split("?")[1]??""),n=r.get("sec");let p=n==="floors"||n==="projects"?"project_config":n==="floorplan"||n==="devices"||n==="inventory"?"devices":n==="network"||n==="network_topo"?"network_topo":n==="connections"?"connections":"overview",E=n==="inventory"?"list":"marking",D="binding",O="",M="all",J=Va(),re=!1,P="",K="device",ce="all",Q="",F=!1,B=!1,H="mesh",X=1,oe=0,de=0,N=await e.getSpatialTree(),ge=[],pe=[],Ie=[];const ue={...ts},W=[];let G=J.level==="all-projects"?N.projects[0]?.id??L.projectId:J.projectId,le=J.level==="building"||J.level==="floor"?J.buildingId:N.buildings.find(b=>b.projectId===G)?.id??N.buildings[0]?.id??L.buildingId,ie=J.level==="floor"?J.floorId:N.floors.find(b=>b.buildingId===le&&b.id===L.floorId)?.id??N.floors.find(b=>b.buildingId===le)?.id??L.floorId,fe=n==="floors"?ie:null,Le="all",he="zones",A=r.get("new")==="project",Y=!1,Ae=!1,z=null,u=!1,$=!1,q=!1,d=!1,v=!1,j=null,ne=new Set,me=null,Ce=!1,we=[];const ee=[];let y=null,f=null,U=!1,ae=!1,be=null,Oe=null,h=3,Z=!1,Ee=[],Me=null,ve="",$e="";const He=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),Ve=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],wa=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:L.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:L.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:L.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:L.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],_a=new Map;function Se(){A=!1,Y=!1,Ae=!1,z=null,u=!1,$=!1,q=!1,d=!1,v=!1,j=null}function je(){return!!(A||Y||Ae||z||u||$||q||d||v||j)}const ea=b=>{if(!document.body.contains(a)){document.removeEventListener("keydown",ea);return}b.key==="Escape"&&(me?(me=null,I()):je()?(Se(),I()):B&&(B=!1,ae=!1,I()))};document.addEventListener("keydown",ea);function We(){return N.floors}function Ne(b){return[...N.floors.filter(k=>k.buildingId===b)].sort((k,_)=>Da(_.name)-Da(k.name))}function Ge(){return N.zones}function Fe(b){return[...b===L.floorId?ge:[],...W.filter(_=>_.floorId===b)]}function Ke(b){return b?Ge().find(k=>k.id===b)?.name.replace(/^7F\s*/,"")??b:"未分配功能区"}function ua(b){const k=N.buildings.find(x=>x.id===b);if(!k)return;G=k.projectId,le=k.id;const _=Ne(k.id);_.some(x=>x.id===ie)||(ie=_.find(x=>x.id===L.floorId)?.id??_[0]?.id??""),fe&&!_.some(x=>x.id===fe)&&(fe=null),J=pa(ie?{level:"floor",projectId:k.projectId,buildingId:k.id,floorId:ie}:{level:"building",projectId:k.projectId,buildingId:k.id}),f=null,B=!1,ae=!1,X=1,oe=0,de=0}function Xe(b){ie=b;const k=We().find(_=>_.id===b);if(k){le=k.buildingId;const _=N.buildings.find(x=>x.id===k.buildingId);_&&(G=_.projectId),J=pa({level:"floor",projectId:G,buildingId:k.buildingId,floorId:k.id})}f=null,B=!1,ae=!1,X=1,oe=0,de=0}async function ze(){$e="";const[b,k,_,x]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(L.floorId).catch(()=>[]),e.listConnections(G),e.listDeliveryBatches(L.floorId)]);if(N=b,ge=k,pe=_,Ie=x,N.projects.length===0)G="",le="",ie="",fe=null;else{N.projects.some(i=>i.id===G)||(G=N.projects[0].id);const t=N.buildings.filter(i=>i.projectId===G);t.some(i=>i.id===le)||(le=t[0]?.id??"");const o=le?Ne(le):[];o.some(i=>i.id===ie)||(ie=o.find(i=>i.id===L.floorId)?.id??o[0]?.id??""),fe&&!o.some(i=>i.id===fe)&&(fe=null)}const C=Fe(ie);f&&!C.some(t=>t.id===f)&&(f=null,B=!1),U=C.find(t=>t.id===f)?.physicalInstalled??!1,I()}function ma(){const b=a.querySelector('[data-role="dep-viewport"]');b&&(b.style.transform=`translate(${oe}px, ${de}px) scale(${X})`);const k=a.querySelector('[data-role="dep-zoom-label"]');k&&(k.textContent=`${Math.round(X*100)}%`)}function Sa(b){$e="",b.connectivity==="offline"?$e=`单机回读自检未通过（FAIL）：「${b.name}」当前离线，请核查网关链路或中继覆盖。`:ve=`单机回读自检通过（PASS）：「${b.name}」指令下发与状态回读一致，已安全复位。`,I()}function La(){$e="";const b=Fe(ie),k=b.filter(S=>S.connectivity==="offline"),_=b.length-k.length,x=new Date;Me={ranAt:`${String(x.getHours()).padStart(2,"0")}:${String(x.getMinutes()).padStart(2,"0")}:${String(x.getSeconds()).padStart(2,"0")}`,total:b.length,passed:_,failed:k.length,failedNames:k.map(S=>S.name)},k.length>0?$e=`全层批量自检完成：${_}/${b.length} 台通过，${k.length} 台异常（${k.map(S=>S.name).join("、")}）。`:ve=`全层批量自检全部通过（${_}/${b.length}），设备已自动安全复位。`,I()}function Ha(){const b=Fe(ie),k=[],_=b.filter(o=>o.connectivity==="offline"),x=b.filter(o=>!o.planPoint),C=b.filter(o=>He.get(o.id)?.proxy).length,S=b.filter(o=>He.get(o.id)?.relay).length,t=b.length?S/b.length:0;_.length>0?_.forEach(o=>k.push({level:"fail",title:`节点不可达：${o.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:o.id})):k.push({level:"ok",title:"全网节点可达性正常",detail:`${b.length} 台设备均正常响应心跳。`}),C<1?k.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):k.push({level:"ok",title:`代理节点配置合理（${C} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),t>.25&&b.length>=4&&k.push({level:"warn",title:`中继比例偏高（${Math.round(t*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),x.length>0&&k.push({level:"warn",title:`尚有 ${x.length} 台未完成设备标记`,detail:"请在「设备管理 → 设备标记」中补齐平面坐标以便施工定位。"}),Ee=k,ve=`已完成蓝牙 Mesh 网络体检（检测 ${b.length} 台节点，发现 ${k.filter(o=>o.level!=="ok").length} 项关注）。`,I()}function Wa(){const b=Fe(ie),k=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...b.map(S=>[S.name,S.category,Ke(S.logicalZoneId),S.planPoint?`${Math.round(S.planPoint.x*100)}%/${Math.round(S.planPoint.y*100)}%`:"未标记",S.hardwareBinding?`${S.hardwareBinding.protocol} ${S.hardwareBinding.networkAddress}`:"未绑定",S.physicalInstalled?"已复核":"待复核",S.connectivity==="online"?"在线":"离线"].join(","))],_=new Blob([`\uFEFF${k.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),x=URL.createObjectURL(_),C=document.createElement("a");C.href=x,C.download="pacom-device-list.csv",C.click(),URL.revokeObjectURL(x)}function oa(b){const k=new Set(Ne(b.id).map(x=>ca(x.name)??x.name.toUpperCase())),_=[];for(let x=1;x<=b.aboveFloors;x+=1){const C=`${x}F`;k.has(C)||_.push({kind:"above",level:x,name:C})}for(let x=1;x<=b.belowFloors;x+=1){const C=`B${x}`;k.has(C)||_.push({kind:"below",level:-x,name:C})}return b.hasRoof&&!k.has("RF")&&_.push({kind:"roof",level:99,name:"RF"}),_}async function la(b){const k=N.buildings.find(x=>x.id===b);if(!k)return 0;const _=oa(k);for(const x of _)await e.upsertFloor?.({buildingId:k.id,kind:x.kind,level:x.level,name:x.name});return _.length}const Ga={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。",granularity:"building"},project_config:{title:"项目配置",subtitle:"在同一视图内贯通管理项目、园区楼宇、楼层平面底图、功能区与竣工图纸。",granularity:"project"},devices:{title:"设备管理",subtitle:"围绕当前楼层完成设备标记、设备列表核查、参数下发、自检与设备分组。",granularity:"floor"},network_topo:{title:"网络拓扑",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、环境等异构子系统通道及传感器采集质量。",granularity:"project"}};function aa(b,k="layers"){return`
      <div class="dep-empty-card">
        <div class="dep-empty-icon">${ke(k,20)}</div>
        <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
        <span class="pacom-row-sub" style="max-width:440px;">按「创建项目 → 添加楼宇与楼层 → 上传平面底图」完成建档后，即可开展设备标记、网络同步与交付验收。</span>
        <div class="dep-empty-steps">
          <span>1. 创建项目</span>
          <span>→</span>
          <span>2. 添加楼宇与楼层</span>
          <span>→</span>
          <span>3. 上传平面图</span>
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${b?"":"disabled"}>+ 创建第一个项目</button>
      </div>`}function ja(){const b=(k,_,x,C=!1)=>`
      <button type="button" class="pacom-unified-item" aria-current="${p===k}" data-dep-nav="${k}">
        ${ke(_,16)}
        <span>${x}</span>
        ${C?'<span class="dep-rail-dot" title="有变更待同步至边缘网关"></span>':""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${b("overview","layout-dashboard","部署总览")}
          ${b("project_config","layers","项目配置")}
          ${b("devices","map-pin","设备管理")}
          ${b("network_topo","waypoints","网络拓扑",Z)}
          ${b("connections","plug","系统接入")}
        </div>
      </aside>
    `}function xa(b){return N.projects.length===0?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${b?"":"disabled"}>+ 新建项目</button>`:p==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出清单</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${b?"":"disabled"}>+ 交付冻结</button>
      `:p==="project_config"?`<button type="button" class="pacom-btn" data-open-new-proj="1" ${b?"":"disabled"}>+ 新建项目</button>`:p==="devices"?`${`
        <div class="pacom-tabs" role="tablist" aria-label="设备管理视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="marking"}" data-dev-subtab="marking">设备标记</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="list"}" data-dev-subtab="list">设备列表</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="groups"}" data-dev-subtab="groups">设备分组</button>
        </div>`}${E==="marking"?'<button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>':E==="list"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${b?"":"disabled"}>+ 新建分组</button>`}`:p==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${b?"":"disabled"}>${Z?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:`
      <button type="button" class="pacom-btn" data-edge-restart="service" ${b?"":"disabled"}>重启边缘服务</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${b?"":"disabled"}>+ 新增接入通道</button>
    `}function Za(b){if(N.projects.length===0)return aa(b,"layout-dashboard");const k=le?Ne(le):[],_=k.filter(i=>!!i.plan).length,x=k.flatMap(i=>Fe(i.id)),C=x.filter(i=>!!i.planPoint).length,S=x.filter(i=>i.connectivity==="online").length,t=x.filter(i=>i.physicalInstalled).length,o=k.filter(i=>Fe(i.id).length>0&&!Z).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${k.length>0&&_===k.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 项目与底图</span>
          <div class="pacom-kpi-value">${_}<span class="pacom-kpi-unit">/ ${k.length} 层</span></div>
          <span class="pacom-kpi-delta">${k.length>0&&_===k.length?"全部底图就绪":`尚缺 ${Math.max(0,k.length-_)} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="marking" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${x.length>0&&C===x.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${C}<span class="pacom-kpi-unit">/ ${x.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${Ve.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${x.length>0&&S===x.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${S}<span class="pacom-kpi-unit">/ ${x.length} 台</span></div>
          <span class="pacom-kpi-delta">${x.length-S>0?`${x.length-S} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${Z?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${o}<span class="pacom-kpi-unit">/ ${k.length} 层</span></div>
          <span class="pacom-kpi-delta">${Z?"有变更待下发 →":`基线 v${h}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="list" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${x.length>0&&t===x.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${t}<span class="pacom-kpi-unit">/ ${x.length} 台</span></div>
          <span class="pacom-kpi-delta">${x.length>0&&t===x.length?"可交付冻结":`待复核 ${x.length-t} 台 →`}</span>
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
                ${k.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前楼宇暂无楼层</strong><span>请先在「项目配置」中生成楼层并上传底图。</span></div></td></tr>':k.map(i=>{const l=Fe(i.id),R=Ge().filter(_e=>_e.floorId===i.id),w=l.filter(_e=>!!_e.planPoint).length,te=l.filter(_e=>_e.connectivity==="online").length,qe=l.filter(_e=>_e.physicalInstalled).length,Te=!!i.plan,De=Te&&l.length>0&&w===l.length&&qe===l.length&&te===l.length&&!Z;return`
                            <tr>
                              <td><strong>${m(i.name)}</strong><div class="pacom-row-sub">${i.areaSqm?`${i.areaSqm} m²`:"待补面积"}</div></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-expand="1" data-matrix-floor="${m(i.id)}"><span class="pacom-dot ${Te?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${Te?`已传图 · ${R.length} 区`:"待传底图"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="marking" data-matrix-floor="${m(i.id)}"><span class="pacom-dot ${l.length>0&&w===l.length?"pacom-dot--online":l.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${l.length>0?`${w}/${l.length}`:"未标记"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${m(i.id)}"><span class="pacom-dot ${l.length>0&&te===l.length?"pacom-dot--online":l.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${l.length>0?`${te}/${l.length}`:"—"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${m(i.id)}"><span class="pacom-dot ${l.length===0?"pacom-dot--offline":Z?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${l.length===0?"—":Z?"待同步":`v${h}`}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="list" data-matrix-floor="${m(i.id)}"><span class="pacom-dot ${l.length>0&&qe===l.length?"pacom-dot--online":l.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${l.length>0?`${qe}/${l.length}`:"—"}</span></button></td>
                              <td style="text-align:right;"><span class="pacom-badge ${De?"pacom-badge--online":l.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${De?"可验收交付":l.length>0?"实施中":"待配置"}</span></td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${Me?`<div class="pacom-banner ${Me.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${Me.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${Me.passed}/${Me.total} 台${Me.failedNames.length?` · 异常：${Me.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${Ie.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${Ie.map(i=>`
                    <tr>
                      <td><div style="font-weight:450;">${m(i.versionTag)}</div><div class="pacom-row-sub"><code>${m(i.id)}</code></div></td>
                      <td><strong>${i.verifiedCount}</strong> / ${i.deviceCount} 台</td>
                      <td><div>${m(i.frozenBy)}</div><div class="pacom-row-sub">${m(i.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${as[i.status]??i.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Aa(b){if(N.projects.length===0)return aa(b,"layers");const k=N.projects.find(w=>w.id===G)??N.projects[0],_=N.buildings.filter(w=>w.projectId===k.id),x=_.reduce((w,te)=>w+Ne(te.id).length,0),C=_.find(w=>w.id===le)??_[0]??null,S=C?Ne(C.id):[],t=S.filter(w=>!w.plan).length,o=S.filter(w=>Ge().filter(te=>te.floorId===w.id).length===0).length,i=S.filter(w=>Le==="missing_plan"?!w.plan:Le==="missing_zone"?Ge().filter(te=>te.floorId===w.id).length===0:!0),l=C?oa(C):[],R=k.location?`${k.location.lng.toFixed(4)}, ${k.location.lat.toFixed(4)}`:"未设置坐标";return`
      <div class="dep-project-strip">
        <div class="dep-project-strip-main">
          <div class="dep-project-cover">
            <img src="${m(k.imageUrl??"./media/gzlab.jpg")}" alt="${m(k.name)}" />
          </div>
          <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">${m(k.name)}</strong>
              <span class="pacom-badge pacom-badge--neutral">${_.length} 栋楼宇</span>
              <span class="pacom-badge pacom-badge--neutral">${x} 个楼层</span>
            </div>
            <span class="pacom-row-sub">${m(k.city||"未填城市")}${k.address?` · ${m(k.address)}`:""} · 坐标 ${m(R)}</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-edit-proj="1" ${b?"":"disabled"}>编辑项目</button>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <div>
            <h2 class="pacom-section-title">园区楼宇（${_.length} 栋）</h2>
            <span class="pacom-row-sub">点击楼宇卡片切换下方楼层列表，点「编辑参数」修改外观与层数</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-bld="1" ${b?"":"disabled"}>+ 新建楼宇</button>
        </div>
        ${_.length===0?`
            <div class="dep-empty-card">
              <div class="dep-empty-icon">${ke("building-2",20)}</div>
              <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${m(k.name)} 暂无楼宇</strong>
              <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
              <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${b?"":"disabled"}>+ 添加第一栋楼宇</button>
            </div>`:`
            <div class="dep-building-grid">
              ${_.map(w=>{const te=Ne(w.id),qe=te.filter(Re=>!!Re.plan).length,Te=te.length>0?Math.round(qe/te.length*100):0,De=oa(w),_e=C?.id===w.id,ye=te.length===0?"pacom-badge--neutral":qe===te.length?"pacom-badge--online":"pacom-badge--warning";return`
                    <article class="dep-building-card ${_e?"is-active":""}" data-select-building="${m(w.id)}">
                      <div class="dep-building-stage">
                        <img src="${m(w.imageUrl??"./media/building-e.webp")}" alt="${m(w.name)}" />
                      </div>
                      <div class="dep-building-body">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${m(w.name)}</strong>
                          <span class="pacom-badge ${ye}">${te.length===0?"未建层":`${qe}/${te.length} 底图`}</span>
                        </div>
                        <div class="pacom-row-sub">地上 ${w.aboveFloors} 层${w.belowFloors>0?` · 地下 ${w.belowFloors} 层`:""}${w.hasRoof?" · RF":""}${w.areaSqm?` · ${w.areaSqm} m²`:""}</div>
                        <div class="pacom-progress-track">
                          <div class="pacom-progress-fill" style="width:${Te}%; background:${Te===100?"var(--pacom-status-online)":"var(--pacom-accent-solid)"};"></div>
                        </div>
                        ${De.length>0?`<div style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:12px; color:var(--pacom-text-secondary);">
                                 <span>尚缺 ${De.length} 个楼层</span>
                                 <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="height:22px; padding:0 6px; font-size:12px;" data-fill-missing-floors="${m(w.id)}" ${b?"":"disabled"}>一键补齐</button>
                               </div>`:""}
                      </div>
                      <div class="dep-building-foot">
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${m(w.id)}" ${b?"":"disabled"}>编辑参数</button>
                        <span class="pacom-row-sub" style="font-size:12px; color:${_e?"var(--pacom-accent-fg)":"var(--pacom-text-secondary)"};">${_e?"当前查看中":"点击切换楼层"}</span>
                      </div>
                    </article>`}).join("")}
              <button type="button" class="dep-building-add-card" data-open-new-bld="1" ${b?"":"disabled"}>
                ${ke("plus",20)}
                <span style="font-size:13px;">新建楼宇</span>
              </button>
            </div>`}
      </section>

      ${C?`
          <section class="pacom-section">
            <div class="pacom-section-head">
              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <h2 class="pacom-section-title">${m(C.name)} 楼层与底图（${S.length}）</h2>
                <div class="pacom-count-pills">
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${Le==="all"}" data-floor-list-filter="all">全部 <span class="pacom-count-num">${S.length}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${Le==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 <span class="pacom-count-num">${t}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${Le==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 <span class="pacom-count-num">${o}</span></button>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                ${l.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${m(C.id)}" ${b?"":"disabled"}>一键补齐 ${l.length} 层</button>`:""}
                <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-floor="1" ${b?"":"disabled"}>+ 新增楼层</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-batch-modal="1" ${b?"":"disabled"}>批量导入底图</button>
              </div>
            </div>

            ${S.length===0?`
                <div class="dep-empty-card">
                  <div class="dep-empty-icon">${ke("layers",20)}</div>
                  <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${m(C.name)} 暂无楼层</strong>
                  <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${m(C.id)}" ${b?"":"disabled"}>一键生成全部楼层</button>
                    <button type="button" class="pacom-btn" data-open-new-floor="1" ${b?"":"disabled"}>+ 手动新增楼层</button>
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
                        ${i.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':i.map(w=>{const te=Ge().filter(ye=>ye.floorId===w.id),qe=[...$t,...ee].filter(ye=>ye.floorId===w.id),Te=Fe(w.id),De=fe===w.id,_e=S.filter(ye=>ye.id!==w.id);return`
                                    <tr>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:7px;">
                                          <span class="pacom-dot ${w.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                          <strong>${m(w.name)}</strong>
                                        </div>
                                      </td>
                                      <td><span class="pacom-row-sub">${w.areaSqm?`${w.areaSqm} m²`:"—"}</span></td>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:8px;">
                                          ${w.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${m(C.name)} ${m(w.name)} 平面底图" data-lb-src="${m(w.plan.imageUrl)}" title="查看大图"><img src="${m(w.plan.imageUrl)}" alt="${m(w.name)}" /></button>
                                                 <span class="pacom-badge pacom-badge--online">已就绪</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                          <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="cursor:pointer; height:24px; padding:0 6px; font-size:12px;">
                                            <span>${w.plan?"替换":"上传"}</span>
                                            <input type="file" name="floorPlan_${m(w.id)}" accept="image/*" data-upload-floor="${m(w.id)}" style="display:none;" ${b?"":"disabled"} />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        ${te.length>0?`<span>${te.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${m(te.slice(0,2).map(ye=>ye.name.replace(/^7F\s*/,"")).join("、"))}${te.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                                      </td>
                                      <td><span class="pacom-row-sub">${qe.length} 份</span></td>
                                      <td>
                                        <div style="display:flex; justify-content:flex-end; gap:6px;">
                                          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-expand-floor="${m(w.id)}">${De?"收起配置":"展开配置"}</button>
                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${m(w.id)}">设备标记 →</button>
                                        </div>
                                      </td>
                                    </tr>
                                    ${De?`
                                        <tr class="pacom-table-detail-row">
                                          <td colspan="6">
                                            <div class="dep-floor-expand-grid">
                                              <div class="dep-floor-expand-col">
                                                <div class="dep-plan-preview-box" style="min-height:260px;" data-single-floor-drop="${m(w.id)}">
                                                  <div class="dep-plan-toolbar">
                                                    ${w.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${m(C.name)} ${m(w.name)} 平面底图" data-lb-src="${m(w.plan.imageUrl)}">查看大图</button>`:""}
                                                    <label class="dep-plan-tool-btn" style="cursor:pointer;">
                                                      <span>${w.plan?"替换底图":"上传底图"}</span>
                                                      <input type="file" name="floorPlanDrop_${m(w.id)}" accept="image/*" data-upload-floor="${m(w.id)}" style="display:none;" ${b?"":"disabled"} />
                                                    </label>
                                                    ${w.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${m(w.id)}" ${b?"":"disabled"}>清空</button>`:""}
                                                  </div>
                                                  ${w.plan?`<img src="${m(w.plan.imageUrl)}" alt="${m(w.name)} 平面图" style="width:100%; max-height:290px; object-fit:contain; display:block;" />`:`<div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:24px; text-align:center;">
                                                           <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${m(w.name)} 2D 平面图到此处</strong>
                                                           <span class="pacom-row-sub">支持透明 WebP / PNG / JPG</span>
                                                         </div>`}
                                                </div>
                                              </div>

                                              <div class="dep-floor-expand-col">
                                                <div class="pacom-settings-card" style="padding:10px 16px;">
                                                  <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                                                    <form data-save-floor="${m(w.id)}" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                                                      <input class="pacom-input" name="fName" value="${m(w.name)}" aria-label="楼层名称" style="width:76px; height:32px; flex:none;" required ${b?"":"disabled"} />
                                                      <input class="pacom-input" name="fArea" type="number" step="0.1" value="${m(w.areaSqm??"")}" placeholder="面积 m²" aria-label="建筑面积" style="width:110px; height:32px; flex:none;" ${b?"":"disabled"} />
                                                      <button type="submit" class="pacom-btn" ${b?"":"disabled"}>保存</button>
                                                    </form>
                                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-delete-floor="${m(w.id)}" ${!b||Te.length>0?`disabled title="${Te.length>0?`已关联 ${Te.length} 台设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                                                  </div>
                                                </div>

                                                <div class="pacom-settings-card" style="padding:4px 16px;">
                                                  <div class="pacom-setting-row" style="padding:10px 0; justify-content:space-between; gap:8px;">
                                                    <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${he==="zones"}" data-floor-detail-tab="zones">功能区（${te.length}）</button>
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${he==="docs"}" data-floor-detail-tab="docs">竣工图纸与手册（${qe.length}）</button>
                                                    </div>
                                                    ${he==="zones"?te.length>0&&_e.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-open-copy-zones="${m(w.id)}" ${b?"":"disabled"}>复用至其他层…</button>`:"":`<label class="pacom-btn pacom-btn--sm" style="cursor:pointer;"><span>+ 关联文件</span><input type="file" name="attachDoc_${m(w.id)}" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${m(w.id)}" style="display:none;" ${b?"":"disabled"} /></label>`}
                                                  </div>
                                                  ${he==="zones"?`
                                                        ${te.length===0?`
                                                            <div class="pacom-setting-row" style="padding:10px 0; flex-direction:column; align-items:flex-start; gap:8px;">
                                                              <span class="pacom-row-sub">暂未划分功能区，可一键套用常用模板：</span>
                                                              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                                                ${wt.map(ye=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${m(ye.key)}" data-tpl-floor="${m(w.id)}" ${b?"":"disabled"}>+ ${m(ye.label)}</button>`).join("")}
                                                              </div>
                                                            </div>`:te.map(ye=>y===ye.id?`
                                                                      <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-save-edit-zone="${m(ye.id)}" data-zone-floor="${m(w.id)}">
                                                                        <input class="pacom-input" name="zName" value="${m(ye.name)}" style="width:180px; height:30px; flex:none;" required />
                                                                        <select class="pacom-select" name="zCat" style="width:110px; height:30px;">
                                                                          ${Object.keys(at).map(Re=>`<option value="${Re}" ${ye.category===Re?"selected":""}>${at[Re]}</option>`).join("")}
                                                                        </select>
                                                                        <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                                                      </form>`:`
                                                                      <div class="pacom-setting-row" style="padding:9px 0;">
                                                                        <div class="pacom-setting-meta" style="min-width:140px;">
                                                                          <span class="pacom-setting-title">${m(ye.name)} <span class="pacom-badge pacom-badge--neutral">${m(at[ye.category]??ye.category)}</span></span>
                                                                        </div>
                                                                        <div class="pacom-setting-control">
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${m(ye.id)}" ${b?"":"disabled"}>编辑</button>
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${m(ye.id)}" ${b?"":"disabled"}>删除</button>
                                                                        </div>
                                                                      </div>`).join("")}
                                                        <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-add-zone="${m(w.id)}">
                                                          <input class="pacom-input" name="zoneName" placeholder="新功能区名称（如：${m(w.name)} 东侧实验区）" style="width:210px; height:32px; flex:none;" required ${b?"":"disabled"} />
                                                          <select class="pacom-select" name="zoneCat" style="width:112px; height:32px;" ${b?"":"disabled"}>
                                                            <option value="lab">实验区</option>
                                                            <option value="office">办公区</option>
                                                            <option value="meeting">会议室</option>
                                                            <option value="corridor">走廊/公区</option>
                                                            <option value="utility">机房/后勤</option>
                                                            <option value="outdoor">露台/活动区</option>
                                                          </select>
                                                          <button type="submit" class="pacom-btn" ${b?"":"disabled"}>+ 添加</button>
                                                        </form>`:qe.length===0?'<div class="pacom-setting-row" style="padding:12px 0;"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':qe.map(ye=>`
                                                              <div class="pacom-setting-row" style="padding:9px 0;">
                                                                <div class="pacom-setting-meta" style="min-width:140px;">
                                                                  <span class="pacom-setting-title">${m(ye.name)}</span>
                                                                  <span class="pacom-row-sub">${m(ye.category)} · ${m(ye.size)} · ${m(ye.updatedAt)}</span>
                                                                </div>
                                                                <div class="pacom-setting-control">
                                                                  <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${m(ye.id)}">查阅</button>
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
    `}function Ka(b){if(!B||p!=="devices"||E==="groups")return"";const _=Fe(ie).find(t=>t.id===f)??null;if(!_)return"";const x=He.get(_.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${ie.slice(-4)}`},C=Ve.filter(t=>t.deviceId===_.id),S=_a.get(_.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450};return`
      <aside class="pacom-drawer" style="width:376px;" aria-label="设备配置抽屉">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${m(_.name)}</h2>
            <div class="pacom-row-sub">${m(Ke(_.logicalZoneId))} · v${_.version}</div>
          </div>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${ke("x",16)}</button>
        </div>

        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${b?"":"disabled"}>${ae?"点击图纸定位中…":"点图更新坐标"}</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${m(_.id)}">Ping 闪灯 5s</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${D==="binding"}" data-drawer-tab="binding">绑定与安装</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${D==="params"}" data-drawer-tab="params">自治参数</button>
        </div>

        ${D==="binding"?`
            ${_.category==="lighting"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">回路可视化灯点（${C.length}）</span>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${m(_.id)}" ${b?"":"disabled"}>+ 添加灯点</button>
                  </div>
                  ${C.map(t=>`
                      <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                        <span><strong>${m(t.channel)}</strong> · ${m(t.label)}</span>
                        <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:12px;" data-del-light-marker="${m(t.id)}" ${b?"":"disabled"}>删除</button>
                      </div>`).join("")}
                </div>`:""}

            ${_.category!=="hvac"&&_.category!=="meter"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                    <code style="font-size:12px;">${m(x.meshUuid)}</code>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Proxy 代理（建议每层 2–3 个）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${x.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${m(_.id)}" ${b?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${x.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${m(_.id)}" ${b?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                </div>`:""}

            <form data-role="binding-form" class="pacom-control-box" style="gap:10px;">
              <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">通信协议</span>
                  <select class="pacom-select" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(t=>`<option value="${t}" ${_.hardwareBinding?.protocol===t?"selected":""}>${t.toUpperCase()}</option>`).join("")}
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">网络地址 / 主题</span>
                  <input class="pacom-input" name="networkAddress" placeholder="地址或主题" value="${m(_.hardwareBinding?.networkAddress??"")}" />
                </label>
              </div>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:10px;">
                <label class="dep-field" style="flex:1;">
                  <span class="dep-field-label">端口 / 回路</span>
                  <input class="pacom-input" name="portOrChannel" placeholder="端口或回路" value="${m(_.hardwareBinding?.portOrChannel??"")}" />
                </label>
                <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; height:32px; flex-shrink:0;">
                  <span>物理已复核</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${U}" data-toggle-phys="1" ${b?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                </span>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${b?"":"disabled"}>保存绑定与复核（v${_.version}）</button>
            </form>`:`
            <form data-save-dev-params="${m(_.id)}" class="pacom-control-box" style="gap:10px;">
              <div>
                <div style="font-size:14px; font-weight:450;">人感与光感自治参数</div>
                <div class="pacom-row-sub">自动关灯延时、恢复自动延时与光照度门限</div>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${S.offDelayMin}" ${b?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" value="${S.restoreMin}" ${b?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" value="${S.luxOn}" ${b?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" value="${S.luxOff}" ${b?"":"disabled"} /></label>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${b?"":"disabled"}>下发设备参数</button>
            </form>`}
      </aside>
    `}function Ya(b){if(N.projects.length===0)return`
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${aa(b,"map-pin")}</div>
        </main>`;const k=le?Ne(le):[],_=k.find(i=>i.id===ie)??k[0],x=Fe(ie),C=Ge().filter(i=>i.floorId===ie),S=B?x.find(i=>i.id===f)??null:null,t=Q.trim().toLowerCase(),o=x.filter(i=>!(ce==="unverified"&&i.physicalInstalled||ce==="unplaced"&&i.planPoint||t&&!`${i.name} ${Ke(i.logicalZoneId)}`.toLowerCase().includes(t)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${ke("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${m(Q)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${F?"is-active":""}" data-toggle-hud-pool="1">设备池 ${x.length}</button>
            <button type="button" class="pacom-hud-pill" data-open-new-dev="1" ${b?"":"disabled"}>+ 新增设备</button>
          </div>

          ${F?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${m(_?.name??"7F")} 设备池（${o.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${ke("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-count-pills">
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ce==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${x.length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ce==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${x.filter(i=>!i.physicalInstalled).length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ce==="unplaced"}" data-dev-filter="unplaced">未标记 <span class="pacom-count-num">${x.filter(i=>!i.planPoint).length}</span></button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${o.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':o.map(i=>`
                            <div class="pacom-row ${i.id===f&&B?"is-selected":""}" data-pick-dev="${m(i.id)}" style="padding:8px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${m(i.name)}</div>
                                <div class="pacom-row-sub">${m(Ke(i.logicalZoneId))} · ${i.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${i.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${i.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${ae?"crosshair":"grab"};">
          ${_?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${oe}px, ${de}px) scale(${X});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${m(_.plan.imageUrl)}" alt="${m(_.name)} 平面图" />
                  ${K==="zone"?C.map(i=>{const l=ue[i.id];return l?`<div class="pacom-zone-hotspot is-active" style="left:${l.left}%; top:${l.top}%; width:${l.width}%; height:${l.height}%;"><span class="pacom-zone-tag">${m(i.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${x.filter(i=>i.planPoint).map(i=>`
                      <button type="button" class="pacom-pin ${i.id===f&&B?"is-selected":""} ${i.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(i.planPoint.x*100).toFixed(2)}%; top:${(i.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${m(i.id)}" title="${m(i.name)}">
                        <span class="pacom-dot ${i.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${m(ss(i))}</span>
                      </button>`).join("")}
                  ${K==="light_marker"||S?.category==="lighting"?Ve.filter(i=>x.some(l=>l.id===i.deviceId)).map(i=>`
                            <span class="dep-light-dot" style="left:${(i.x*100).toFixed(1)}%; top:${(i.y*100).toFixed(1)}%;" title="${m(i.label)}（${m(i.channel)}）">
                              ${ke("sparkles",12)}<span>${m(i.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${m(ie)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${k.map(i=>`
              <button type="button" class="pacom-elev-item ${i.id===ie?"is-active":""}" data-scrubber-floor="${m(i.id)}" title="${m(i.name)}${i.plan?" · 已传底图":" · 待传底图"}">
                ${i.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${m(i.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${K==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${K==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${K==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${ke("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(X*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${ke("plus",16)}</button>
        </div>
      </main>
    `}function Ye(b){if(N.projects.length===0)return aa(b,"list");const k=Fe(ie),_=O.trim().toLowerCase(),x=k.filter(S=>!(M==="online"&&S.connectivity!=="online"||M==="offline"&&S.connectivity!=="offline"||M==="unverified"&&S.physicalInstalled||_&&!`${S.name} ${Ke(S.logicalZoneId)} ${S.hardwareBinding?.protocol??""}`.toLowerCase().includes(_))),C=k.filter(S=>S.connectivity==="online").length;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${m(O)}" aria-label="搜索设备列表" />
          <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
            <option value="all" ${M==="all"?"selected":""}>全部状态（${k.length}）</option>
            <option value="online" ${M==="online"?"selected":""}>仅看在线（${C}）</option>
            <option value="offline" ${M==="offline"?"selected":""}>仅看离线（${k.length-C}）</option>
            <option value="unverified" ${M==="unverified"?"selected":""}>待物理复核（${k.filter(S=>!S.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${ke("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-dev="1" ${b?"":"disabled"}>+ 新增设备</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-export-inv="1">导出 CSV</button>
        </div>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${x.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词、切换筛选，或点击「+ 新增设备」。</span></div></td></tr>':x.map(S=>`
                        <tr style="cursor:pointer;" data-open-dev-drawer="${m(S.id)}">
                          <td><div style="font-weight:450;">${m(S.name)}</div><div class="pacom-row-sub">${m(Ke(S.logicalZoneId))} · v${S.version}</div></td>
                          <td><span class="pacom-badge ${S.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${S.planPoint?`${Math.round(S.planPoint.x*100)}%,${Math.round(S.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${S.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${S.hardwareBinding?S.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${S.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${S.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${S.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${S.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${m(S.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-dev-params="${m(S.id)}">配置</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${m(S.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${x.length} / ${k.length} 台设备 · ${C} 在线 · ${k.length-C} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dev-subtab="marking">切换至设备标记 →</button>
        </div>
      </div>
    `}function g(b){if(N.projects.length===0)return aa(b,"folder-kanban");const k=wa.filter(C=>C.floorId===ie||ie===L.floorId&&C.floorId===L.floorId),_=k.filter(C=>C.track==="mesh_auto"),x=k.filter(C=>C.track==="cloud_biz");return`
      <div class="pacom-grid-2">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${_.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${_.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':_.map(C=>`
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
            <h2 class="pacom-section-title">云端业务分组（${x.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${x.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':x.map(C=>`
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
    `}function T(b){if(N.projects.length===0)return aa(b,"waypoints");const k=Fe(ie),_=Ge().filter(l=>l.floorId===ie),x=k.filter(l=>l.category!=="hvac"&&l.category!=="meter"),C=x.filter(l=>He.get(l.id)?.proxy).length,S=x.filter(l=>He.get(l.id)?.relay).length,t=k.filter(l=>l.category==="gateway"),o=k.filter(l=>He.get(l.id)?.relay||He.get(l.id)?.proxy),i=k.filter(l=>l.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge ${Z?"pacom-badge--warning":"pacom-badge--online"}">${Z?"有变更待同步":"协同锁空闲 · 已同步"}</span>
            <span class="pacom-row-sub">Mesh 节点 ${x.length} 台 · Proxy ${C} 个 · Relay ${S} 个 · 边缘基线 v${h}</span>
          </div>
        </div>
        ${Ee.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${Ee.map(l=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${m(l.title)}</strong> <span class="pacom-row-sub">· ${m(l.detail)}</span></div>
                      <span class="pacom-badge ${l.level==="ok"?"pacom-badge--online":l.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${l.level==="ok"?"通过":l.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达设备标记）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${H==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${H==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${H==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${t.length===0?'<div class="pacom-row-sub">本层暂未配置网关节点。</div>':t.map(l=>`
                          <button type="button" class="dep-topo-node ${l.connectivity==="offline"?"is-issue":""}" data-topo-jump="${m(l.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(l.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                            <span class="pacom-row-sub">${m(l.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                          </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${o.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，可在「设备管理」抽屉中为传感器开启。</div>':o.map(l=>{const R=He.get(l.id);return`
                            <button type="button" class="dep-topo-node ${l.connectivity==="offline"?"is-issue":""}" data-topo-jump="${m(l.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(l.name)}</strong><span class="pacom-badge pacom-badge--accent">${R?.proxy?"Proxy":""}${R?.proxy&&R?.relay?" + ":""}${R?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${m(Ke(l.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${i.length===0?'<div class="pacom-row-sub">本层暂无末端设备。</div>':i.map(l=>`
                          <button type="button" class="dep-topo-node ${l.connectivity==="offline"?"is-issue":""}" data-topo-jump="${m(l.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(l.name)}</strong><span class="pacom-badge ${l.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${l.connectivity==="online"?"在线":"离线"}</span></div>
                            <span class="pacom-row-sub">${m(Ke(l.logicalZoneId))} · ${m(l.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                          </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${k.filter(l=>l.category==="sensor"||l.category==="gateway").map(l=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${m(l.id)}">
                      <strong>${m(l.name)}</strong>
                      <span class="pacom-row-sub">${l.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${k.filter(l=>l.category==="lighting"||l.category==="hvac").map(l=>`
                    <button type="button" class="dep-topo-node ${l.connectivity==="offline"?"is-issue":""}" data-topo-jump="${m(l.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(l.name)}</strong><span class="pacom-badge ${l.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${l.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${m(Ke(l.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${_.map(l=>{const R=k.filter(te=>te.logicalZoneId===l.id),w=R.some(te=>te.connectivity==="offline");return`
                      <div class="dep-topo-node ${w?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(l.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${w?"pacom-badge--warning":"pacom-badge--online"}">${R.length} 台设备</span></div>
                        <span class="pacom-row-sub">${w?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function V(b){if(N.projects.length===0)return aa(b,"plug");const k=pe.reduce((S,t)=>S+t.collectedPoints,0),_=pe.reduce((S,t)=>S+t.calculatedPoints,0),x=pe.filter(S=>S.status==="connected").length,C=pe.filter(S=>S.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${x}<span class="pacom-kpi-unit">/ ${pe.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${pe.length?Math.round(x/pe.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${k}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${_}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${C.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${C.length} 条采集通道通信降级（${C.map(S=>S.name).join("、")}）</span>
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
                ${pe.map(S=>{const t=es[S.status]??{label:S.status,cls:"pacom-badge--neutral"},o=S.status==="connected"?98:S.status==="degraded"?62:0,i=o>=75?"var(--pacom-status-online)":o>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",l=Oe===S.id,R=l?ns(S,ge):[];return`
                      <tr>
                        <td><strong>${m(S.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${S.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${m(S.endpoint)}</code></td>
                        <td>采集 ${S.collectedPoints} / 计算 ${S.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${t.cls}">${t.label}</span>
                            <span class="pacom-row-sub">${o}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${o}%; background:${i};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${m(S.id)}">${l?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${m(S.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${m(S.id)}" data-endpoint-val="${m(S.endpoint)}">${be===S.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${l?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${m(S.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${R.map(w=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${m(w.deviceName)}</strong> · ${m(w.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${m(w.value)} · ${m(w.lastSeen)}</span>
                                        <span class="pacom-badge ${w.quality==="online"?"pacom-badge--online":w.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${w.quality==="online"?"在线正常":w.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function se(b){const k=[],_=N.projects.find(S=>S.id===G)??N.projects[0]??null,x=N.buildings.find(S=>S.id===le)??(_?N.buildings.find(S=>S.projectId===_.id):null)??null;if(A&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
          <form class="dep-modal-card" data-create-project="1">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建项目</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ke("x",16)}</button>
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
        </div>`),Y&&_){const t=N.buildings.filter(o=>o.projectId===_.id).reduce((o,i)=>o+Ne(i.id).reduce((l,R)=>l+Fe(R.id).length,0),0);k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
          <form class="dep-modal-card" data-save-project="${m(_.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑项目：${m(_.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ke("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${m(_.imageUrl??"./media/gzlab.jpg")}" alt="${m(_.name)}" style="width:84px; height:54px; object-fit:cover; border-radius:6px; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">项目封面图</div>
                  <div class="pacom-row-sub">用于空间总览的园区俯瞰展示</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>更换封面</span>
                  <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${m(_.id)}" style="display:none;" ${b?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${m(_.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${m(_.city??"")}" /></label>
                <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${m(_.address??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${m(_.location?.lng??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${m(_.location?.lat??"")}" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${m(_.id)}" ${!b||t>0?`disabled title="${t>0?`包含 ${t} 台运行中设备，请先解绑后再删除`:"只读"}"`:""}>删除项目</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${b?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}Ae&&_&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
          <form class="dep-modal-card" data-create-bld="${m(_.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建楼宇（${m(_.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ke("x",16)}</button>
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
        </div>`);const C=z?N.buildings.find(S=>S.id===z)??null:null;if(C){const S=Ne(C.id),t=S.reduce((i,l)=>i+Fe(l.id).length,0),o=oa(C);k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
          <form class="dep-modal-card" data-save-building="${m(C.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑楼宇：${m(C.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ke("x",16)}</button>
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
                  <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${m(C.id)}" style="display:none;" ${b?"":"disabled"} />
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
                ${o.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${m(C.id)}">一键补齐缺失 ${o.length} 层</button>`:`<span class="pacom-row-sub">已配置 ${S.length} 个楼层</span>`}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${m(C.id)}" ${!b||t>0?`disabled title="${t>0?"包含运行中设备，请先解绑后再删除":"只读"}"`:""}>删除楼宇</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${b?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}if(u&&x&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
          <form class="dep-modal-card" data-create-floor="${m(x.id)}" style="width:min(420px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增楼层（${m(x.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ke("x",16)}</button>
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
        </div>`),$&&x){const S=Ne(x.id),t=we.filter(o=>!!o.matchedFloorId).length;k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
          <div class="dep-modal-card dep-modal-card--wide">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">批量导入 ${m(x.name)} 平面底图</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ke("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-upload-drop" data-batch-dropzone="${m(x.id)}" style="padding:20px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${Ce?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
                <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
                <span class="pacom-row-sub">自动识别 01F、首层、屋面、RF、B1 等中英文文件名，支持手动调整对应楼层</span>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; margin-top:4px;">
                  <span>选择多张图片</span>
                  <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${m(x.id)}" style="display:none;" ${b?"":"disabled"} />
                </label>
              </div>
              ${we.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                      <div class="pacom-row-sub">已选 ${we.length} 张图片，已匹配 ${t} 层：</div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:6px; max-height:220px; overflow-y:auto;">
                        ${we.map(o=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${m(o.file.name)}">${m(o.file.name)}</span>
                              <select class="pacom-select" name="overrideFloor_${m(o.id)}" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${m(o.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${S.map(i=>`<option value="${m(i.id)}" ${o.matchedFloorId===i.id?"selected":""}>${m(i.name)}</option>`).join("")}
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
        </div>`)}if(j&&x){const S=We().find(o=>o.id===j),t=Ne(x.id).filter(o=>o.id!==j);S&&t.length>0&&k.push(`
          <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
            <div class="dep-modal-card">
              <div class="dep-modal-head">
                <strong style="font-size:15px; font-weight:500;">复用 ${m(S.name)} 功能区至其他楼层</strong>
                <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ke("x",16)}</button>
              </div>
              <div class="dep-modal-body">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <span class="pacom-row-sub">勾选目标楼层（已选 ${ne.size} 层）</span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                  </div>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${t.map(o=>{const i=ne.has(o.id),l=Ge().filter(R=>R.floorId===o.id).length;return`
                        <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${i}">
                          <input type="checkbox" name="copyFloor_${m(o.id)}" data-copy-target-floor="${m(o.id)}" ${i?"checked":""} style="margin:0;" />
                          <span>${m(o.name)}${l>0?` (${l}区)`:""}</span>
                        </label>`}).join("")}
                </div>
              </div>
              <div class="dep-modal-foot">
                <span></span>
                <div style="display:flex; gap:8px;">
                  <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                  <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${m(S.id)}" ${ne.size===0?"disabled":""}>确认复制（${ne.size} 层）</button>
                </div>
              </div>
            </div>
          </div>`)}if(q){const S=Ge().filter(t=>t.floorId===ie);k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
          <form class="dep-modal-card" data-create-dev="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增设备</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ke("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">设备名称</span>
                <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">设备类型</span>
                  <select class="pacom-select" name="devPreset">${tt.map(t=>`<option value="${t.key}">${t.label}</option>`).join("")}</select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">所属功能区</span>
                  <select class="pacom-select" name="devZone">
                    <option value="">暂不分配</option>
                    ${S.map(t=>`<option value="${m(t.id)}">${m(t.name)}</option>`).join("")}
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
        </div>`)}return d&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建分组">
          <form class="dep-modal-card" data-create-group="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建设备分组</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ke("x",16)}</button>
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
        </div>`),v&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增接入通道">
          <form class="dep-modal-card" data-create-conn="1" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增子系统接入通道</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ke("x",16)}</button>
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
        </div>`),k.join("")}function I(){const b=s.scope.canEditDeployment,k=s.scope.activeOverrides.find(o=>o.module==="deployment"&&o.status==="active"),_=k?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 · ${k.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${m(k.approvedBy)} · 到期自动收回：${m(k.expiresAt.slice(0,16).replace("T"," "))} · 事由：${m(k.reason)}</span>
          </div>
        </div>`:"",x=p==="devices"&&E==="marking",C=Ga[p],S=p==="devices"?E==="marking"?"设备标记":E==="list"?"设备列表":"设备分组":C.title,t=p==="devices"?E==="marking"?"在 2D 平面底图上完成设备坐标标记、回路灯点布置与硬件绑定。":E==="list"?"核查本层四态设备清单，点击任意行配置硬件绑定、人感/光感参数或执行自检。":"管理端侧蓝牙 Mesh 自治联动组与云端业务分组。":C.subtitle;a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Ba({tree:N,session:s,scope:J,maxGranularity:C.granularity,isOpen:re,searchKeyword:P})}
            </div>
            <div class="pacom-header-meta">
              ${b?k?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${ja()}
          ${x?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${S}</h2>
                      <p class="pacom-unified-subtitle">${t}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${xa(b)}
                    </div>
                  </div>
                  ${_}
                  ${ve?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${m(ve)}</span></div>`:""}
                  ${$e?`<div class="pacom-alert-banner">${m($e)}</div>`:""}
                  ${Ya(b)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head pacom-unified-head--split">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${S}</h2>
                      <p class="pacom-unified-subtitle">${t}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${xa(b)}
                    </div>
                  </div>
                  ${_}
                  ${ve?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${m(ve)}</span></div>`:""}
                  ${$e?`<div class="pacom-alert-banner">${m($e)}</div>`:""}
                  ${p==="overview"?Za(b):p==="project_config"?Aa(b):p==="devices"?E==="list"?Ye(b):g(b):p==="network_topo"?T(b):V(b)}
                </div>
              </div>`}
          ${Ka(b)}
        </div>
      </div>
      ${se(b)}
      ${me?`
          <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${m(me.title)}">
            <div class="dep-lightbox-card">
              <div class="dep-lightbox-head">
                <strong style="font-size:14px; font-weight:500;">${m(me.title)}</strong>
                <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${ke("x",16)}</button>
              </div>
              <div class="dep-lightbox-body">
                <img src="${m(me.imageUrl)}" alt="${m(me.title)}" />
              </div>
            </div>
          </div>`:""}
    `,Be()}function Be(){Ua(a,{onToggle:()=>{re=!re,I(),re&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:t=>{P=t,I();const o=a.querySelector("[data-global-space-search]");o&&(o.focus(),o.setSelectionRange(t.length,t.length))},onPick:t=>{if(J=t,re=!1,t.level==="project"){G=t.projectId;const o=N.buildings.find(i=>i.projectId===t.projectId);o?ua(o.id):(le="",ie="",fe=null)}else t.level==="building"?ua(t.buildingId):t.level==="floor"&&Xe(t.floorId);I()}}),a.querySelectorAll("[data-dep-nav]").forEach(t=>{t.addEventListener("click",()=>{p=t.dataset.depNav??"overview",t.dataset.devSubtabJump&&(E=t.dataset.devSubtabJump),B=!1,ae=!1,ve="",$e="",I()})}),a.querySelectorAll("[data-dev-subtab]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.devSubtab??"marking";E=o,o==="groups"&&(B=!1,ae=!1),ve="",$e="",I()})}),a.querySelectorAll("[data-drawer-tab]").forEach(t=>{t.addEventListener("click",()=>{D=t.dataset.drawerTab??"binding",I()})}),a.querySelector("[data-list-search]")?.addEventListener("input",t=>{O=t.currentTarget.value,I();const o=a.querySelector("[data-list-search]");o&&(o.focus(),o.setSelectionRange(O.length,O.length))}),a.querySelector("[data-list-filter]")?.addEventListener("change",t=>{M=t.currentTarget.value??"all",I()}),a.querySelectorAll("[data-refresh-dep]").forEach(t=>{t.addEventListener("click",()=>{ze()})}),a.querySelectorAll("[data-matrix-nav]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.matrixFloor;o&&Xe(o),p=t.dataset.matrixNav??"devices",t.dataset.matrixSub&&(E=t.dataset.matrixSub),t.dataset.matrixExpand==="1"&&o&&(fe=o),I()})}),a.querySelectorAll("[data-scrubber-floor]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.scrubberFloor;o&&(Xe(o),I())})}),a.querySelectorAll("[data-close-modals]").forEach(t=>{t.addEventListener("click",()=>{Se(),I()})}),a.querySelectorAll("[data-modal-scrim]").forEach(t=>{t.addEventListener("click",o=>{o.target===t&&(Se(),I())})}),a.querySelectorAll("[data-open-new-proj]").forEach(t=>{t.addEventListener("click",()=>{Se(),A=!0,I()})}),a.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{Se(),Y=!0,I()}),a.querySelectorAll("[data-open-new-bld]").forEach(t=>{t.addEventListener("click",()=>{Se(),Ae=!0,I()})}),a.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{Se(),u=!0,I()}),a.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{Se(),$=!0,I()}),a.querySelectorAll("[data-open-new-dev]").forEach(t=>{t.addEventListener("click",()=>{Se(),q=!0,I()})}),a.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{Se(),d=!0,I()}),a.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{Se(),v=!0,I()}),a.querySelectorAll("[data-select-building]").forEach(t=>{t.addEventListener("click",o=>{if(o.target?.closest("button, label, input"))return;const i=t.dataset.selectBuilding;i&&i!==le&&(ua(i),Le="all",fe=null,I())})}),a.querySelectorAll("[data-edit-building]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),Se(),z=t.dataset.editBuilding??null,I()})}),a.querySelectorAll("[data-toggle-expand-floor]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.toggleExpandFloor??null;fe=fe===o?null:o,fe&&Xe(fe),y=null,I()})}),a.querySelectorAll("[data-jump-floor-marking]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.jumpFloorMarking;o&&Xe(o),p="devices",E="marking",I()})}),a.querySelector("[data-jump-floor-config]")?.addEventListener("click",t=>{const o=t.currentTarget.dataset.jumpFloorConfig;p="project_config",o&&(fe=o),I()}),a.querySelectorAll("[data-floor-detail-tab]").forEach(t=>{t.addEventListener("click",()=>{he=t.dataset.floorDetailTab??"zones",I()})}),a.querySelectorAll("[data-floor-list-filter]").forEach(t=>{t.addEventListener("click",()=>{Le=t.dataset.floorListFilter??"all",I()})}),a.querySelector("[data-create-project]")?.addEventListener("submit",async t=>{t.preventDefault();const o=new FormData(t.currentTarget),i=String(o.get("pName")??"").trim(),l=String(o.get("pCity")??"").trim(),R=String(o.get("pAddr")??"").trim(),w=String(o.get("pLng")??"").trim(),te=String(o.get("pLat")??"").trim();if(!i)return;let qe;if(w||te){const Te=Number(w),De=Number(te);if(!Number.isFinite(Te)||!Number.isFinite(De)||Te<-180||Te>180||De<-90||De>90){$e="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",I();return}qe={lng:Te,lat:De,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const Te=await e.createProject?.({name:i,city:l,address:R,location:qe});Se(),p="project_config",Te&&(G=Te.id,le="",ie="",fe=null,J=pa({level:"project",projectId:Te.id})),ve=`已创建项目「${i}」，下一步可添加园区楼宇。`,await ze()}catch(Te){$e=Te instanceof Error?Te.message:String(Te),I()}}),a.querySelector("[data-save-project]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget,i=o.dataset.saveProject??G,l=new FormData(o),R=String(l.get("pName")??"").trim(),w=String(l.get("pCity")??"").trim(),te=String(l.get("pAddr")??"").trim(),qe=String(l.get("pLng")??"").trim(),Te=String(l.get("pLat")??"").trim();let De;if(qe||Te){const _e=Number(qe),ye=Number(Te);if(!Number.isFinite(_e)||!Number.isFinite(ye)||_e<-180||_e>180||ye<-90||ye>90){$e="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",I();return}De={lng:_e,lat:ye,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await e.updateProject?.(i,{name:R,city:w,address:te,location:De}),Se(),ve=`已保存项目「${R||"当前项目"}」信息。`,await ze()}catch(_e){$e=_e instanceof Error?_e.message:String(_e),I()}}),a.querySelector("[data-upload-proj]")?.addEventListener("change",async t=>{const o=t.currentTarget,i=o.dataset.uploadProj,l=o.files?.[0];if(!(!i||!l))try{const R=await Fa(l);await e.updateProject?.(i,{imageUrl:R}),ve=`已更新项目封面图（${l.name}）。`,await ze()}catch(R){$e=R instanceof Error?R.message:String(R),I()}}),a.querySelector("[data-delete-proj]")?.addEventListener("click",async t=>{const o=t.currentTarget.dataset.deleteProj,i=N.projects.find(l=>l.id===o);if(!(!o||!i)&&window.confirm(`确认删除项目「${i.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await e.deleteProject?.(o),Se(),ve=`已删除项目「${i.name}」。`,await ze()}catch(l){$e=l instanceof Error?l.message:String(l),I()}}),a.querySelector("[data-create-bld]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget,i=o.dataset.createBld??G,l=new FormData(o),R=String(l.get("bName")??"").trim(),w=String(l.get("bArea")??"").trim(),te=Math.max(1,Number(l.get("bAbove")??12)),qe=Math.max(0,Number(l.get("bBelow")??0)),Te=!!l.get("bRoof"),De=!!l.get("bAutoFloors");if(R)try{const _e=await e.upsertBuilding?.({projectId:i,name:R,aboveFloors:te,belowFloors:qe,hasRoof:Te,areaSqm:w?Number(w):null});Se();let ye=0;if(_e&&(le=_e.id,De)){for(let Re=1;Re<=te;Re+=1)await e.upsertFloor?.({buildingId:_e.id,kind:"above",level:Re,name:`${Re}F`}),ye+=1;for(let Re=1;Re<=qe;Re+=1)await e.upsertFloor?.({buildingId:_e.id,kind:"below",level:-Re,name:`B${Re}`}),ye+=1;Te&&(await e.upsertFloor?.({buildingId:_e.id,kind:"roof",level:99,name:"RF"}),ye+=1)}ve=De?`已创建楼宇「${R}」并自动生成 ${ye} 个楼层。`:`已创建楼宇「${R}」。`,await ze()}catch(_e){$e=_e instanceof Error?_e.message:String(_e),I()}}),a.querySelector("[data-save-building]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget,i=o.dataset.saveBuilding,l=N.buildings.find(_e=>_e.id===i);if(!l)return;const R=new FormData(o),w=String(R.get("bName")??"").trim()||l.name,te=String(R.get("bArea")??"").trim(),qe=Math.max(1,Number(R.get("bAbove")??l.aboveFloors)),Te=Math.max(0,Number(R.get("bBelow")??l.belowFloors)),De=!!R.get("bRoof");try{await e.upsertBuilding?.({id:i,projectId:l.projectId,name:w,aboveFloors:qe,belowFloors:Te,hasRoof:De,areaSqm:te?Number(te):null}),Se(),ve=`已保存楼宇「${w}」参数。`,await ze()}catch(_e){$e=_e instanceof Error?_e.message:String(_e),I()}}),a.querySelector("[data-delete-building]")?.addEventListener("click",async t=>{const o=t.currentTarget.dataset.deleteBuilding,i=N.buildings.find(l=>l.id===o);if(!(!o||!i)&&window.confirm(`确认删除楼宇「${i.name}」及其下全部楼层与功能区？`))try{await e.deleteBuilding?.(o),Se(),ve=`已删除楼宇「${i.name}」。`,await ze()}catch(l){$e=l instanceof Error?l.message:String(l),I()}}),a.querySelector("[data-upload-bld]")?.addEventListener("change",async t=>{const o=t.currentTarget,i=o.dataset.uploadBld,l=o.files?.[0],R=N.buildings.find(w=>w.id===i);if(!(!i||!l||!R))try{const w=await Fa(l);await e.upsertBuilding?.({id:R.id,projectId:R.projectId,name:R.name,aboveFloors:R.aboveFloors,belowFloors:R.belowFloors,hasRoof:R.hasRoof,areaSqm:R.areaSqm,imageUrl:w}),ve=`已更新「${R.name}」外观图（${l.name}）。`,await ze()}catch(w){$e=w instanceof Error?w.message:String(w),I()}}),a.querySelectorAll("[data-fill-missing-floors]").forEach(t=>{t.addEventListener("click",async o=>{o.stopPropagation();const i=t.dataset.fillMissingFloors;if(i)try{const l=await la(i);ve=l>0?`已自动补齐 ${l} 个楼层。`:"当前楼宇楼层已完整。",await ze()}catch(l){$e=l instanceof Error?l.message:String(l),I()}})}),a.querySelector("[data-create-floor]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget,i=o.dataset.createFloor,l=new FormData(o),R=String(l.get("fName")??"").trim().toUpperCase(),w=String(l.get("fArea")??"").trim();if(!R)return;const te=ca(R)??R;if(Ne(i).some(ye=>(ca(ye.name)??ye.name.toUpperCase())===te)){$e=`楼层「${R}」已存在，请使用其他名称。`,I();return}const Te=Da(R),De=Te>=999?"roof":Te<0?"below":"above",_e=Te>=999?99:Te||1;try{const ye=await e.upsertFloor?.({buildingId:i,kind:De,level:_e,name:R,areaSqm:w?Number(w):null});Se(),ye&&(ie=ye.id,fe=ye.id),ve=`已新增楼层「${R}」。`,await ze()}catch(ye){$e=ye instanceof Error?ye.message:String(ye),I()}}),a.querySelector("[data-save-floor]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget,i=o.dataset.saveFloor,l=We().find(Re=>Re.id===i);if(!l)return;const R=new FormData(o),w=String(R.get("fName")??"").trim()||l.name,te=String(R.get("fArea")??"").trim(),qe=ca(w)??w.toUpperCase();if(Ne(l.buildingId).some(Re=>Re.id!==l.id&&(ca(Re.name)??Re.name.toUpperCase())===qe)){$e=`楼层「${w}」已存在，请避免重复命名。`,I();return}const De=Da(w),_e=De>=999?"roof":De<0?"below":"above",ye=De>=999?99:De||l.level;try{await e.upsertFloor?.({id:l.id,buildingId:l.buildingId,kind:_e,level:ye,name:w,areaSqm:te?Number(te):null}),ve=`已保存楼层「${w}」。`,await ze()}catch(Re){$e=Re instanceof Error?Re.message:String(Re),I()}}),a.querySelector("[data-delete-floor]")?.addEventListener("click",async t=>{const o=t.currentTarget.dataset.deleteFloor,i=We().find(l=>l.id===o);if(!(!o||!i)){if(Fe(o).length>0){$e=`楼层「${i.name}」已关联设备，请先解绑后再删除。`,I();return}if(window.confirm(`确认删除楼层「${i.name}」及其功能区？`))try{await e.deleteFloor?.(o),fe=null,ve=`已删除楼层「${i.name}」。`,await ze()}catch(l){$e=l instanceof Error?l.message:String(l),I()}}});async function b(t,o){const i=We().find(l=>l.id===t);if(i)try{const l=await Fa(o);await e.upsertFloor?.({id:i.id,buildingId:i.buildingId,kind:i.kind,level:i.level,name:i.name,areaSqm:i.areaSqm,planImageUrl:l}),ve=`已更新「${i.name}」平面底图（${o.name}）。`,await ze()}catch(l){$e=l instanceof Error?l.message:String(l),I()}}a.querySelectorAll("[data-upload-floor]").forEach(t=>{t.addEventListener("change",()=>{const o=t.dataset.uploadFloor,i=t.files?.[0];o&&i&&b(o,i)})});const k=a.querySelector("[data-single-floor-drop]");k&&s.scope.canEditDeployment&&(k.addEventListener("dragover",t=>{t.preventDefault(),k.style.borderColor="var(--pacom-accent-solid)"}),k.addEventListener("dragleave",()=>{k.style.borderColor=""}),k.addEventListener("drop",t=>{t.preventDefault(),k.style.borderColor="";const o=k.dataset.singleFloorDrop,i=Array.from(t.dataTransfer?.files??[]).find(l=>l.type.startsWith("image/"));o&&i&&b(o,i)})),a.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async t=>{const o=t.currentTarget.dataset.clearFloorPlan,i=We().find(l=>l.id===o);if(!(!o||!i)&&window.confirm(`确认清空「${i.name}」的平面底图？`))try{await e.upsertFloor?.({id:i.id,buildingId:i.buildingId,kind:i.kind,level:i.level,name:i.name,areaSqm:i.areaSqm,planImageUrl:null}),ve=`已清空「${i.name}」平面底图。`,await ze()}catch(l){$e=l instanceof Error?l.message:String(l),I()}}),a.querySelectorAll("[data-open-lightbox]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.lbTitle??"平面底图预览",i=t.dataset.lbSrc??"";i&&(me={title:o,imageUrl:i},I())})}),a.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{me=null,I()}),a.querySelector("[data-lightbox-scrim]")?.addEventListener("click",t=>{t.target===t.currentTarget&&(me=null,I())});function _(t,o){if(!t||o.length===0)return;const i=Ne(t),l=new Map;i.forEach(R=>{const w=ca(R.name)??R.name.toUpperCase();l.set(w,R)}),we=o.map((R,w)=>{const te=ca(R.name),qe=te?l.get(te):void 0;return{id:`bu-${Date.now().toString(36)}-${w}`,file:R,matchedFloorId:qe?.id??null}}),$=!0,I()}a.querySelector("[data-batch-upload-floors]")?.addEventListener("change",t=>{const o=t.currentTarget;_(o.dataset.batchUploadFloors??"",Array.from(o.files??[]))});const x=a.querySelector("[data-batch-dropzone]");x&&s.scope.canEditDeployment&&(x.addEventListener("dragover",t=>{t.preventDefault(),Ce||(Ce=!0,x.style.borderColor="var(--pacom-accent-solid)",x.style.background="var(--pacom-accent-soft)")}),x.addEventListener("dragleave",()=>{Ce=!1,x.style.borderColor="",x.style.background=""}),x.addEventListener("drop",t=>{t.preventDefault(),Ce=!1;const o=Array.from(t.dataTransfer?.files??[]).filter(i=>i.type.startsWith("image/"));_(x.dataset.batchDropzone??"",o)})),a.querySelectorAll("[data-batch-override-floor]").forEach(t=>{t.addEventListener("change",()=>{const o=we.find(i=>i.id===t.dataset.batchOverrideFloor);o&&(o.matchedFloorId=t.value||null,I())})}),a.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{we=[],I()}),a.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const t=we.filter(i=>i.matchedFloorId),o=we.length-t.length;if(t.length!==0)try{for(const i of t){const l=We().find(w=>w.id===i.matchedFloorId);if(!l)continue;const R=await Fa(i.file);await e.upsertFloor?.({id:l.id,buildingId:l.buildingId,kind:l.kind,level:l.level,name:l.name,areaSqm:l.areaSqm,planImageUrl:R})}we=[],Se(),ve=`已批量导入 ${t.length} 个楼层平面底图${o>0?`（跳过 ${o} 张未分配文件）`:""}。`,await ze()}catch(i){$e=i instanceof Error?i.message:String(i),I()}}),a.querySelectorAll("[data-apply-zone-tpl]").forEach(t=>{t.addEventListener("click",async()=>{const o=wt.find(l=>l.key===t.dataset.applyZoneTpl),i=We().find(l=>l.id===t.dataset.tplFloor);if(!(!o||!i))try{for(const l of o.items){const R=await e.upsertZone?.({floorId:i.id,name:`${i.name} ${l.suffix}`,category:l.category});R&&(ue[R.id]={left:20,top:20,width:24,height:24})}ve=`已按「${o.label}」模板为 ${i.name} 创建 ${o.items.length} 个功能区。`,await ze()}catch(l){$e=l instanceof Error?l.message:String(l),I()}})}),a.querySelector("[data-attach-doc]")?.addEventListener("change",t=>{const o=t.currentTarget,i=o.dataset.attachDoc,l=o.files?.[0],R=We().find(te=>te.id===i);if(!i||!l||!R)return;const w=l.size>=1024*1024?`${(l.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(l.size/1024))} KB`;ee.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:i,name:l.name,category:l.name.toLowerCase().endsWith(".xlsx")||l.name.toLowerCase().endsWith(".xls")?"点位清单":"竣工图纸",boundScope:`${R.name} · 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:w}),ve=`已为 ${R.name} 关联文档「${l.name}」。`,I()}),a.querySelector("[data-add-zone]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget.dataset.addZone,i=new FormData(t.currentTarget),l=String(i.get("zoneName")??"").trim(),R=String(i.get("zoneCat")??"office");if(l)try{const w=await e.upsertZone?.({floorId:o,name:l,category:R});w&&(ue[w.id]={left:20,top:20,width:24,height:24}),ve=`已添加功能区「${l}」。`,await ze()}catch(w){$e=w instanceof Error?w.message:String(w),I()}}),a.querySelectorAll("[data-edit-zone]").forEach(t=>{t.addEventListener("click",()=>{y=t.dataset.editZone??null,I()})}),a.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{y=null,I()}),a.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget,i=new FormData(o),l=String(i.get("zName")??"").trim(),R=String(i.get("zCat")??"office");if(l)try{await e.upsertZone?.({id:o.dataset.saveEditZone,floorId:o.dataset.zoneFloor,name:l,category:R}),y=null,ve=`已更新功能区「${l}」。`,await ze()}catch(w){$e=w instanceof Error?w.message:String(w),I()}}),a.querySelectorAll("[data-del-zone]").forEach(t=>{t.addEventListener("click",async()=>{const o=t.dataset.delZone,i=Ge().find(l=>l.id===o);if(!(!o||!i)&&window.confirm(`确认删除功能区「${i.name}」？`))try{await e.deleteZone?.(o),y===o&&(y=null),ve=`已删除功能区「${i.name}」。`,await ze()}catch(l){$e=l instanceof Error?l.message:String(l),I()}})}),a.querySelectorAll("[data-open-copy-zones]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.openCopyZones??null;Se(),j=o,ne=new Set(Ne(le).filter(i=>i.id!==o&&i.kind==="above"&&Ge().filter(l=>l.floorId===i.id).length===0).map(i=>i.id)),I()})}),a.querySelectorAll("[data-copy-preset]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.copyPreset,i=Ne(le).filter(l=>l.id!==j);o==="empty"?ne=new Set(i.filter(l=>l.kind==="above"&&Ge().filter(R=>R.floorId===l.id).length===0).map(l=>l.id)):o==="above"?ne=new Set(i.filter(l=>l.kind==="above").map(l=>l.id)):ne.clear(),I()})}),a.querySelectorAll("[data-copy-target-floor]").forEach(t=>{t.addEventListener("change",()=>{const o=t.dataset.copyTargetFloor;o&&(t.checked?ne.add(o):ne.delete(o),I())})}),a.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async t=>{const o=t.currentTarget.dataset.confirmCopyZones,i=Array.from(ne);if(!(!o||i.length===0))try{const l=await e.copyZonesToFloors?.(o,i)??0;Se(),ne.clear(),ve=`已将当前层功能区复用至 ${i.length} 个目标楼层（共新增 ${l} 个功能区）。`,await ze()}catch(l){$e=l instanceof Error?l.message:String(l),I()}});const C=a.querySelector("[data-dep-canvas-search]");C?.addEventListener("focus",()=>{F||(F=!0,I(),a.querySelector("[data-dep-canvas-search]")?.focus())}),C?.addEventListener("input",t=>{Q=t.currentTarget.value,F=!0,I();const o=a.querySelector("[data-dep-canvas-search]");o&&(o.focus(),o.setSelectionRange(Q.length,Q.length))}),a.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{F=!F,I()}),a.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{F=!1,I()}),a.querySelectorAll("[data-brush]").forEach(t=>{t.addEventListener("click",()=>{K=t.dataset.brush??"device",I()})}),a.querySelectorAll("[data-dep-zoom]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.depZoom;o==="in"?X=Math.min(2.6,Number((X+.2).toFixed(2))):o==="out"?X=Math.max(.6,Number((X-.2).toFixed(2))):(X=1,oe=0,de=0),ma()})});const S=a.querySelector('[data-role="dep-stage"]');if(S&&!ae){let t=!1,o=0,i=0,l=0,R=0;S.addEventListener("pointerdown",te=>{te.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(t=!0,o=te.clientX,i=te.clientY,l=oe,R=de,S.classList.add("is-panning"),S.setPointerCapture?.(te.pointerId))}),S.addEventListener("pointermove",te=>{t&&(oe=l+(te.clientX-o),de=R+(te.clientY-i),ma())});const w=()=>{t&&(t=!1,S.classList.remove("is-panning"))};S.addEventListener("pointerup",w),S.addEventListener("pointercancel",w),S.addEventListener("wheel",te=>{te.preventDefault();const qe=te.deltaY<0?.12:-.12;X=Math.max(.6,Math.min(2.6,Number((X+qe).toFixed(2)))),ma()},{passive:!1}),S.addEventListener("dblclick",te=>{te.target?.closest("button")||(X=1,oe=0,de=0,ma())})}a.querySelectorAll("[data-dev-filter]").forEach(t=>{t.addEventListener("click",()=>{ce=t.dataset.devFilter??"all",I()})}),a.querySelector("[data-create-dev]")?.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(t.currentTarget),i=String(o.get("devName")??"").trim(),l=String(o.get("devPreset")??"sensor"),R=String(o.get("devZone")??"")||null,w=tt.find(qe=>qe.key===l)??tt[0],te=`dev-custom-${Date.now().toString(36)}`;W.push({id:te,name:i,category:w.category,projectId:G||L.projectId,buildingId:le,floorId:ie,logicalZoneId:R,planPoint:{floorId:ie,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),He.set(te,{proxy:w.defaultProxy,relay:w.defaultRelay,meshUuid:`mesh-${ie.slice(-4)}`}),w.category==="lighting"&&Ve.push({id:`lm-${Date.now().toString(36)}`,deviceId:te,channel:"回路 1",label:`${i.slice(0,6)}主灯`,x:.52,y:.45}),Se(),f=te,B=!0,D="binding",Z=!0,ve=`已新增「${i}」（${w.hint}），已生成默认标记并提示待同步边缘。`,I()}),a.querySelectorAll("[data-pick-dev]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),f=t.dataset.pickDev??null,B=!0,D="binding",U=Fe(ie).find(l=>l.id===f)?.physicalInstalled??!1,I()})}),a.querySelectorAll("[data-open-dev-drawer]").forEach(t=>{t.addEventListener("click",o=>{if(o.target?.closest("button"))return;f=t.dataset.openDevDrawer??null,B=!0,D="binding",U=Fe(ie).find(l=>l.id===f)?.physicalInstalled??!1,I()})}),a.querySelectorAll("[data-open-dev-params]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),f=t.dataset.openDevParams??null,B=!0,D="params",U=Fe(ie).find(l=>l.id===f)?.physicalInstalled??!1,I()})}),a.querySelector("[data-close-sel]")?.addEventListener("click",()=>{B=!1,ae=!1,I()}),a.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{E!=="marking"?(E="marking",ae=!0):ae=!ae,I()}),a.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{U=!U,I()}),a.querySelectorAll("[data-ping-dev]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const i=Fe(ie).find(l=>l.id===t.dataset.pingDev);i&&(ve=`已向「${i.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,I())})}),a.querySelector("[data-add-light-marker]")?.addEventListener("click",t=>{const o=t.currentTarget.dataset.addLightMarker,i=Ve.filter(l=>l.deviceId===o).length+1;Ve.push({id:`lm-${Date.now().toString(36)}`,deviceId:o,channel:`回路 ${i}`,label:`照明点位 ${i}`,x:Math.min(.86,.35+i*.1),y:.42}),K="light_marker",ve=`已新增「回路 ${i}」可视化灯点。`,I()}),a.querySelectorAll("[data-del-light-marker]").forEach(t=>{t.addEventListener("click",()=>{const o=Ve.findIndex(i=>i.id===t.dataset.delLightMarker);o>=0&&Ve.splice(o,1),I()})}),a.querySelectorAll("[data-toggle-mesh-role]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.meshDev,i=t.dataset.toggleMeshRole,l=He.get(o)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};l[i]=!l[i],He.set(o,l),Z=!0,ve=`已更新节点 ${i.toUpperCase()} 状态，可在「网络拓扑」中一键同步至边缘网关。`,I()})}),a.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async t=>{const o=Fe(ie).find(w=>w.id===f);if(!ae||!o)return;const i=t.currentTarget.getBoundingClientRect(),l=Math.max(.02,Math.min(.98,(t.clientX-i.left)/i.width)),R=Math.max(.02,Math.min(.98,(t.clientY-i.top)/i.height));if(W.some(w=>w.id===o.id)){o.planPoint={floorId:ie,planVersion:1,x:Number(l.toFixed(4)),y:Number(R.toFixed(4))},ae=!1,ve=`已更新「${o.name}」图上坐标。`,I();return}try{await e.updateDevicePlanPoint({deviceId:o.id,floorId:L.floorId,planVersion:o.planPoint?.planVersion??1,x:l,y:R,expectedVersion:o.version}),ae=!1,ve=`已更新「${o.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await ze()}catch(w){$e=w instanceof Error?w.message:String(w),I()}}),a.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async t=>{t.preventDefault();const o=Fe(ie).find(l=>l.id===f);if(!o)return;const i=new FormData(t.currentTarget);if(W.some(l=>l.id===o.id)){o.physicalInstalled=U,o.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(i.get("protocol")),networkAddress:String(i.get("networkAddress")??""),portOrChannel:String(i.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:s.displayName},o.version+=1,Z=!0,ve=`已保存「${o.name}」的硬件绑定与物理复核状态。`,I();return}try{await e.updateDeviceHardwareBinding({deviceId:o.id,gatewayId:o.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(i.get("protocol")),networkAddress:String(i.get("networkAddress")??""),portOrChannel:String(i.get("portOrChannel")??""),physicalInstalled:U,expectedVersion:o.version}),Z=!0,ve=`已保存「${o.name}」的硬件绑定与物理安装复核状态。`,await ze()}catch(l){$e=l instanceof Error?l.message:String(l),I()}}),a.querySelector("[data-save-dev-params]")?.addEventListener("submit",t=>{t.preventDefault();const o=t.currentTarget.dataset.saveDevParams,i=new FormData(t.currentTarget);_a.set(o,{offDelayMin:Number(i.get("offDelayMin")??15),restoreMin:Number(i.get("restoreMin")??30),luxOn:Number(i.get("luxOn")??280),luxOff:Number(i.get("luxOff")??450)}),Z=!0,ve="设备自治延时与光感门限参数已下发并同步至配置基线。",I()}),a.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const t=Fe(ie).find(o=>o.id===f);t&&Sa(t)}),a.querySelectorAll("[data-ftt-dev]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const i=Fe(ie).find(l=>l.id===t.dataset.fttDev);i&&Sa(i)})}),a.querySelectorAll("[data-batch-ftt]").forEach(t=>{t.addEventListener("click",()=>La())}),a.querySelectorAll("[data-export-inv]").forEach(t=>{t.addEventListener("click",()=>Wa())}),a.querySelector("[data-create-group]")?.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(t.currentTarget),i=String(o.get("gName")??"").trim(),l=o.get("gTrack")??"mesh_auto",R=String(o.get("gType")??"灯光联动组");i&&(wa.unshift({id:`grp-${Date.now().toString(36)}`,track:l,groupType:R,name:i,floorId:ie,includesAdapter:l==="mesh_auto",deviceIds:l==="mesh_auto"?["dev-e7f-gw-01"]:[]}),Se(),l==="mesh_auto"&&(Z=!0),ve=`已新建${l==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${i}」。`,I())}),a.querySelectorAll("[data-test-group]").forEach(t=>{t.addEventListener("click",()=>{const o=wa.find(i=>i.id===t.dataset.testGroup);o&&(ve=`已向分组「${o.name}」发送群组试控指令，${o.deviceIds.length} 台成员回读正常。`,I())})}),a.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>Ha()),a.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{h+=1,Z=!1,ve=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${h}）。`,I()}),a.querySelectorAll("[data-topo-mode]").forEach(t=>{t.addEventListener("click",()=>{H=t.dataset.topoMode??"mesh",I()})}),a.querySelectorAll("[data-topo-jump]").forEach(t=>{t.addEventListener("click",()=>{f=t.dataset.topoJump??null,B=!0,D="binding",p="devices",E="marking",I()})}),a.querySelector("[data-create-conn]")?.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(t.currentTarget),i=String(o.get("cName")??"").trim(),l=String(o.get("cProto")??"bacnet_ip"),R=String(o.get("cEndpoint")??"").trim();if(pe.some(w=>w.endpoint===R)){$e=`端口冲突警告：局域网端点「${R}」已被其他通道占用，请更换端口后重试。`,I();return}pe.unshift({id:`conn-${Date.now().toString(36)}`,projectId:G||L.projectId,buildingId:le,floorId:ie,name:i,protocol:l,endpoint:R,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),Se(),$e="",ve=`已接入「${i}」（${R}），连通测试通过（18 ms）。`,I()}),a.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{ve="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",I()}),a.querySelectorAll("[data-expand-conn]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.expandConn??null;Oe=Oe===o?null:o,I()})}),a.querySelectorAll("[data-ping-conn]").forEach(t=>{t.addEventListener("click",()=>{const o=pe.find(i=>i.id===t.dataset.pingConn);o&&($e="",o.status==="connected"?ve=`连通测试通过：「${o.name}」（${o.endpoint}）响应正常，延迟 18 ms。`:$e=`连通测试异常：「${o.name}」（${o.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,I())})}),a.querySelectorAll("[data-copy-endpoint]").forEach(t=>{t.addEventListener("click",async()=>{const o=t.dataset.endpointVal??"",i=t.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(o),be=i,I(),window.setTimeout(()=>{be=null,I()},1600)}catch{}})}),a.querySelectorAll("[data-preview-doc]").forEach(t=>{t.addEventListener("click",()=>{const o=[...$t,...ee].find(i=>i.id===t.dataset.previewDoc);o&&(ve=`已调阅工程附件「${o.name}」（关联范围：${o.boundScope}，更新于 ${o.updatedAt}）。`,I())})}),a.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const t=await e.freezeDeliveryBatch(L.floorId,"部署总览验收发起交付冻结");ve=`已生成交付冻结快照 ${t.versionTag}（核验 ${t.verifiedCount}/${t.deviceCount}）。`,await ze()}catch(t){$e=t instanceof Error?t.message:String(t),I()}})}await ze()}const os=new Set(["lighting","hvac","alarm_rules"]),xt={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},za=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function ls(a){const e=new Set;for(const s of a.actions)s.command.startsWith("lighting")?e.add("照明"):s.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function rs(a,e,s){const r=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function cs(a,e,s){let r=Va(),n=!1,p="",[E,D,O,M]=await Promise.all([e.getSpatialTree(),e.listScenes(L.floorId),e.getRuntimeSettings(L.projectId),e.getFloorDevices(L.floorId).catch(()=>[])]),J="manual",re="balanced",P="all",K=null,ce="",Q=!1,F=!1,B=!1,H="all",X=null,oe="",de="",N=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const ge=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],pe=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],Ie=[{deviceId:M[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],ue=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${O.calendar.workdayStart} – ${O.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${O.calendar.nightGuardStart} – 次日 ${O.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],W=e.subscribeFloorEvents(L.floorId,async le=>{le.type==="control.receipt.updated"&&K?.batchId===le.batchId&&(K=await e.getControlBatch(le.batchId),G())});function G(){const le=ce.trim().toLowerCase(),ie=le?D.filter(d=>`${d.name} ${d.description}`.toLowerCase().includes(le)):D,fe=O.rules.filter(d=>os.has(d.category)),Le=P==="all"?fe:P==="cbm"?[]:fe.filter(d=>d.category===P),he=P==="all"||P==="cbm",A=H==="issues"?ge.filter(d=>d.status!=="verified"):ge,Y=za.find(d=>d.id===re)??za[1],Ae=s.scope.canControlDevices,z=s.scope.canEditScenes,u=s.scope.canEditSettings,$=s.scope.activeOverrides.find(d=>d.module==="settings"&&d.status==="active");a.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Ba({tree:E,session:s,scope:r,isOpen:n,searchKeyword:p})}
            </div>

            <div class="pacom-header-meta">
              ${J==="rules"?u?$?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${N.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${N.length>0?`人工覆盖中：${N.length} 台 ${ke("chevron-down",12)}`:`全部自动托管 ${ke("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${B?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${ge.length}）</button>
              ${J==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${z?"":"disabled"}>${Q?"收起表单":"+ 新建场景"}</button>`:J==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${J==="manual"}" data-scene-tab="manual">快捷场景（${D.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${J==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${J==="rules"}" data-scene-tab="rules">条件联动（${fe.length+pe.length}）</button>
          </nav>
        </header>

        ${F?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${N.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${ke("x",16)}</button>
              </div>
              ${N.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':N.map(d=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${c(d.name)}</div>
                            <div class="pacom-row-sub">${c(d.reason)}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${c(d.id)}" ${Ae?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${N.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${Ae?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${B?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${ke("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${H==="all"}" data-log-filter="all">全部（${ge.length}）</button>
                  <button class="pacom-tab" aria-selected="${H==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${A.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${A.map(d=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${c(d.device)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${c(d.source)}</span>
                        </div>
                        <span class="pacom-row-sub">${c(d.action)} · ${c(d.at)}</span>
                      </div>
                      <span class="pacom-badge ${d.status==="verified"?"pacom-badge--online":d.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${d.status==="verified"?"回读确认":d.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${oe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${c(oe)}</span></div>`:""}
          ${de?`<div class="pacom-alert-banner">${c(de)}</div>`:""}

          ${J==="manual"?`
              ${K?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${c(K.batchId)}</span>
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
                            ${K.receipts.map(d=>`
                                <tr>
                                  <td><code style="font-size:12px;">${c(d.deviceId)}</code></td>
                                  <td>${c(d.command)}</td>
                                  <td>${c(String(d.targetValue))}${d.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${c(d.errorMessage)}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${d.status==="verified_success"?"pacom-badge--online":d.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${c(d.status)}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${Q?`
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
                          <span class="pacom-setting-title">联动动作列表（${Ie.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${Ie.map((d,v)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" name="draftDevice-${v}" data-draft-dev="${v}" aria-label="目标设备">
                                ${M.map(j=>`<option value="${c(j.id)}" ${j.id===d.deviceId?"selected":""}>${c(j.name)}</option>`).join("")}
                              </select>
                              <select class="pacom-select" name="draftCommand-${v}" data-draft-cmd="${v}" aria-label="执行指令">
                                <option value="lighting.dimming" ${d.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${d.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${d.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" name="draftTargetValue-${v}" data-draft-val="${v}" value="${c(d.targetValue)}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${v}" ${Ie.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" ${z?"":"disabled"}>保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${c(ce)}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${ie.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${ie.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':ie.map(d=>{const v=ls(d),j=d.actions.slice(0,3).map(ne=>{const me=M.find(we=>we.id===ne.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??ne.deviceId,Ce=ne.command==="lighting.dimming"?`亮度 ${ne.targetValue}%`:ne.command==="hvac.setpoint"?`设温 ${ne.targetValue}°C`:ne.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${c(me)} → ${c(Ce)}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${c(d.name)}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${v.map(ne=>`<span class="pacom-badge pacom-badge--accent">${c(ne)}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${d.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${c(d.description)}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${j}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${c(d.lastExecutedAt?d.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行")}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${c(d.id)}" ${Ae?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:J==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Y.title}</div>
                    <span class="pacom-kpi-delta">${Y.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Y.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Y.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${N.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${za.map(d=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${re===d.id}" data-oss-mode="${d.id}" ${Ae?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${d.title}</strong>
                          <span class="pacom-badge ${re===d.id?"pacom-badge--online":"pacom-badge--neutral"}">${re===d.id?"当前生效":d.badge}</span>
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
                          ${ue.map(d=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${c(d.name)}</span>
                                    ${d.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${c(d.windowLabel)}</div>
                                </td>
                                <td>${rs(d.startHour,d.endHour,d.enabled)}</td>
                                <td><span class="pacom-row-sub">${c(d.scope)}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${d.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${d.enabled}"
                                      aria-label="切换排程 ${c(d.name)}"
                                      data-toggle-schedule="${c(d.id)}"
                                      ${Ae?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(d=>{const v=d==="all"?"全部":xt[d]??d,j=d==="all"?fe.length+pe.length:d==="cbm"?pe.length:fe.filter(ne=>ne.category===d).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${P===d}" data-rule-cat="${d}">
                              <span>${v}</span><span class="pacom-count-num">${j}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${Le.map(d=>{const v=X===d.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${c(xt[d.category]??d.category)}</span>
                                  <span>${c(d.name)}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${d.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${c(d.summary)} · 范围：${c(d.scopeLabel)} · 回执：${c(d.receiptSummary??"已同步")}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${c(d.id)}">${v?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${d.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${d.enabled?"true":"false"}"
                                  aria-label="切换 ${c(d.name)}"
                                  data-toggle-strategy-rule="${c(d.id)}"
                                  data-rule-ver="${d.version}"
                                  data-rule-next="${!d.enabled}"
                                  ${u?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${v?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${d.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":d.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${c(d.scopeLabel)} · 当前版本：v${d.version} · 最近同步：${c(d.receiptSummary??"已同步")}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${he?pe.map(d=>{const v=Math.min(100,Math.round(d.runtimeHours/d.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${c(d.name)}</span>
                                      <span class="pacom-badge ${v>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${d.runtimeHours} / ${d.thresholdHours} h（${v}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${v}%; background:${v>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${c(d.equipment)} · 上次重置：${c(d.lastReset)}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${d.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${d.enabled}" data-toggle-cbm="${c(d.id)}" aria-label="切换 ${c(d.name)}" ${u?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,Ua(a,{onToggle:()=>{n=!n,G(),n&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:d=>{p=d,G();const v=a.querySelector("[data-global-space-search]");v&&(v.focus(),v.setSelectionRange(d.length,d.length))},onPick:d=>{r=d,n=!1,G()}}),a.querySelectorAll("[data-scene-tab]").forEach(d=>{d.addEventListener("click",()=>{J=d.dataset.sceneTab??"manual",oe="",G()})}),a.querySelectorAll("[data-toggle-overrides]").forEach(d=>{d.addEventListener("click",()=>{F=!F,G()})}),a.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{Ae&&(N=[],oe="已释放全部人工覆盖设备，自动节能策略已恢复托管。",G())}),a.querySelectorAll("[data-release-one]").forEach(d=>{d.addEventListener("click",()=>{if(!Ae)return;const v=d.dataset.releaseOne;N=N.filter(j=>j.id!==v),oe="已恢复该设备的自动策略托管。",G()})}),a.querySelectorAll("[data-toggle-cmdlog]").forEach(d=>{d.addEventListener("click",()=>{B=!B,G()})}),a.querySelectorAll("[data-log-filter]").forEach(d=>{d.addEventListener("click",()=>{H=d.dataset.logFilter??"all",G()})}),a.querySelector("[data-close-batch]")?.addEventListener("click",()=>{K=null,G()}),a.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),a.querySelectorAll("[data-oss-mode]").forEach(d=>{d.addEventListener("click",()=>{if(!Ae)return;const v=d.dataset.ossMode;if(!v)return;re=v;const j=za.find(ne=>ne.id===v);oe=`已切换至「${j?.title??v}」模式（明日预测启动 ${j?.predictedStart??""}）。`,G()})}),a.querySelectorAll("[data-toggle-schedule]").forEach(d=>{d.addEventListener("click",()=>{if(!Ae)return;const v=d.dataset.toggleSchedule,j=ue.find(ne=>ne.id===v);j&&(j.enabled=!j.enabled,oe=`排程「${j.name}」已${j.enabled?"恢复启用":"临时暂停"}。`,G())})}),a.querySelectorAll("[data-rule-cat]").forEach(d=>{d.addEventListener("click",()=>{P=d.dataset.ruleCat??"all",G()})}),a.querySelectorAll("[data-expand-rule]").forEach(d=>{d.addEventListener("click",()=>{const v=d.dataset.expandRule??null;X=X===v?null:v,G()})}),a.querySelectorAll("[data-toggle-cbm]").forEach(d=>{d.addEventListener("click",()=>{if(!u)return;const v=pe.find(j=>j.id===d.dataset.toggleCbm);v&&(v.enabled=!v.enabled,oe=`工时维保规则「${v.name}」已${v.enabled?"启用":"停用"}。`,G())})}),a.querySelectorAll("[data-toggle-strategy-rule]").forEach(d=>{d.addEventListener("click",async()=>{if(u){de="";try{await e.toggleRuntimeRule(d.dataset.toggleStrategyRule,d.dataset.ruleNext==="true",Number(d.dataset.ruleVer)),O=await e.getRuntimeSettings(L.projectId),oe="条件联动规则状态与版本回执已更新。",G()}catch(v){de=v instanceof Error?v.message:String(v),G()}}})}),a.querySelectorAll("[data-toggle-create]").forEach(d=>{d.addEventListener("click",()=>{!z&&!Q||(Q=!Q,G())})}),a.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{z&&(Ie.push({deviceId:M[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),G())}),a.querySelectorAll("[data-del-draft-action]").forEach(d=>{d.addEventListener("click",()=>{if(!z)return;const v=Number(d.dataset.delDraftAction);Ie.length>1&&(Ie.splice(v,1),G())})}),a.querySelectorAll("[data-draft-dev]").forEach(d=>{d.addEventListener("change",()=>{if(!z)return;const v=Ie[Number(d.dataset.draftDev)];v&&(v.deviceId=d.value)})}),a.querySelectorAll("[data-draft-cmd]").forEach(d=>{d.addEventListener("change",()=>{if(!z)return;const v=Ie[Number(d.dataset.draftCmd)];v&&(v.command=d.value)})}),a.querySelectorAll("[data-draft-val]").forEach(d=>{d.addEventListener("change",()=>{if(!z)return;const v=Ie[Number(d.dataset.draftVal)];v&&(v.targetValue=d.value)})}),a.querySelector("[data-scene-search]")?.addEventListener("input",d=>{const v=d.currentTarget,j=v.selectionStart??v.value.length;ce=v.value,G();const ne=a.querySelector("[data-scene-search]");ne&&(ne.focus(),ne.setSelectionRange(j,j))}),a.querySelectorAll("[data-exec-scene]").forEach(d=>{d.addEventListener("click",async()=>{if(!Ae)return;de="";const v=D.find(j=>j.id===d.dataset.execScene);try{K=await e.executeScene(d.dataset.execScene),D=await e.listScenes(L.floorId),ge.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:v?.name??"E7F 场景",action:`${K.receipts.length} 台设备联动下发`,status:"verified"}),G()}catch(j){de=j instanceof Error?j.message:String(j),G()}})}),a.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async d=>{if(d.preventDefault(),!z)return;const v=new FormData(d.currentTarget);try{await e.createScene({projectId:L.projectId,floorId:L.floorId,name:String(v.get("name")??""),description:String(v.get("description")??""),actions:Ie.map(j=>({deviceId:j.deviceId,command:j.command,targetValue:j.targetValue==="true"?!0:j.targetValue==="false"?!1:Number(j.targetValue)||50}))}),D=await e.listScenes(L.floorId),Q=!1,oe=`快捷场景已保存（共绑定 ${Ie.length} 条联动动作）。`,G()}catch(j){de=j instanceof Error?j.message:String(j),G()}})}G(),window.addEventListener("hashchange",()=>W(),{once:!0})}const kt={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function st(a,e){return a.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':a.map(s=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${c(s.name)}</span>
            <span class="pacom-badge pacom-badge--neutral">v${s.version}</span>
            <span class="pacom-badge pacom-badge--accent">${c(s.scopeLabel)}</span>
          </span>
          <span class="pacom-setting-desc">${c(s.summary)} · 回执：${c(s.receiptSummary??"已同步")}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${s.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${s.enabled?"true":"false"}"
            aria-label="切换 ${c(s.name)}"
            data-toggle-rule="${c(s.id)}"
            data-rule-ver="${s.version}"
            data-rule-next="${!s.enabled}"
            ${e?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function ds(a,e,s){let r="calendar",n=Va(),p=!1,E="";const[D,O]=await Promise.all([e.getSpatialTree(),e.getRuntimeSettings(L.projectId)]);let M=O,J=M.calendar.workdayStart,re=M.calendar.workdayEnd,P=M.calendar.nightGuardStart,K=M.calendar.nightGuardEnd,ce=!0,Q=[];const F=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let B="flat";const H={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},X={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},oe={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},de={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},N=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let ge="",pe="";function Ie(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(G=>{const le=kt[G];return`
                <button type="button" class="pacom-unified-item" aria-current="${r===G}" data-stab="${G}">
                  ${ke(le.icon,16)}
                  <span>${le.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function ue(){const W=s.scope.canEditSettings,G=s.scope.activeOverrides.find(A=>A.module==="settings"&&A.status==="active"),le=D.projects[0]?.name??"当前项目",ie=M.rules.filter(A=>A.category==="weather_area"),fe=M.rules.filter(A=>A.category==="metering_carbon"),Le=M.rules.filter(A=>A.category==="templates"),he=kt[r];a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Ba({tree:D,session:s,scope:n,maxGranularity:"project",isOpen:p,searchKeyword:E})}
            </div>
            <div class="pacom-header-meta">
              ${W?G?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${Ie()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${he.label}</h2>
                <p class="pacom-unified-subtitle">${he.subtitle}</p>
              </div>
              ${G?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 · ${G.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${c(G.approvedBy)} · 到期自动收回：${c(G.expiresAt.slice(0,16).replace("T"," "))} · 事由：${c(G.reason)}</span>
                      </div>
                    </div>`:""}
              ${ge?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${c(ge)}</span></div>`:""}
              ${pe?`<div class="pacom-alert-banner">${c(pe)}</div>`:""}

              ${r==="calendar"?`
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
                          <input class="pacom-input" name="calWorkdayStart" style="width:116px;" type="time" data-cal-start value="${c(J)}" aria-label="工作日上班时间" ${W?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" name="calWorkdayEnd" style="width:116px;" type="time" data-cal-end value="${c(re)}" aria-label="工作日下班时间" ${W?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calNightGuardStart" style="width:116px;" type="time" data-night-start value="${c(P)}" aria-label="夜间值守开始" ${W?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" name="calNightGuardEnd" style="width:116px;" type="time" data-night-end value="${c(K)}" aria-label="夜间值守结束" ${W?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${ce?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${ce}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${W?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${W?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${F.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${F.map(A=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${c(A.date)}</span><span class="pacom-badge pacom-badge--accent">${c(A.mode)}</span></span>
                              <span class="pacom-setting-desc">${c(A.label)}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${c(A.id)}" ${W?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${W?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${W?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${W?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${W?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${Q.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${Q.length} 条</span>
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
                                ${Q.map(A=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${c(A.ruleName)}</div>
                                        ${A.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${c(A.conflictWarning)}</div>`:""}
                                      </td>
                                      <td>${c(A.beforeWindow)}</td>
                                      <td><strong>${c(A.afterWindow)}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${A.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${A.conflictWarning?"交叠警告":"自动跟随"}
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
                            <select class="pacom-select" name="energyWeatherSource" data-energy-field="weatherSource" aria-label="室外气象数据源" ${W?"":"disabled"}>
                              <option value="guanzhou_station" ${H.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${H.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${c(le)}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" name="energyBillingArea" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${c(H.billingArea)}" aria-label="计费面积" ${W?"":"disabled"} />
                          </div>
                        </div>
                        ${st(ie,W)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${B==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${B==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${B==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" name="energyTariffYuan" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${c(H.tariffYuan)}" aria-label="综合电价" ${W?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" name="energyTariffPeak" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${c(H.tariffPeak)}" aria-label="峰段电价" ${W?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" name="energyTariffFlat" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${c(H.tariffFlat)}" aria-label="平段电价" ${W?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" name="energyTariffValley" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${c(H.tariffValley)}" aria-label="谷段电价" ${W?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" name="energyCarbonFactor" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${W?"":"disabled"}>
                              <option value="0.5271" ${H.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${H.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${st(fe,W)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${W?"":"disabled"}>保存口径参数</button>
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
                              <input class="pacom-input" name="guardMinTemp" style="width:72px;" type="number" data-guard-field="minTemp" value="${c(X.minTemp)}" aria-label="最低设定温度" ${W?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" name="guardMaxTemp" style="width:72px;" type="number" data-guard-field="maxTemp" value="${c(X.maxTemp)}" aria-label="最高设定温度" ${W?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" name="guardOverrideAutoRelease" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${W?"":"disabled"}>
                                <option value="2h" ${X.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${X.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${X.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${X.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" name="guardReadbackTimeoutSec" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${c(X.readbackTimeoutSec)}" aria-label="回读超时阈值" ${W?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${W?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${st(Le,W)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${c(de.dailyDigestTime)}" aria-label="每日简报发送时间" ${W?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${de.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${W?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${de.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${W?"":"disabled"}>
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
                              <input class="pacom-input" name="autoWoDelayMin" style="width:72px;" type="number" data-auto-wo="delayMin" value="${c(oe.delayMin)}" aria-label="自动派单延迟分钟数" ${W?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${oe.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${W?"":"disabled"}>
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
                              <select class="pacom-select" name="autoWoDefaultGroup" data-auto-wo="defaultGroup" aria-label="默认处理组" ${W?"":"disabled"}>
                                <option value="暖通运维组" ${oe.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${oe.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${oe.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${oe.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${W?"":"disabled"}>
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
                                ${N.map(A=>`
                                    <tr>
                                      <td><strong>${c(A.groupName)}</strong></td>
                                      <td>${c(A.scope)}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${c(A.severity)}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${c(A.channels)}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${A.enabled}" data-toggle-nr="${c(A.id)}" aria-label="切换 ${c(A.groupName)} 通知规则" ${W?"":"disabled"}>
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
    `,Ua(a,{onToggle:()=>{p=!p,ue(),p&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:A=>{E=A,ue();const Y=a.querySelector("[data-global-space-search]");Y&&(Y.focus(),Y.setSelectionRange(A.length,A.length))},onPick:A=>{n=A,p=!1,ue()}}),a.querySelectorAll("[data-stab]").forEach(A=>{A.addEventListener("click",()=>{r=A.dataset.stab??"calendar",ge="",pe="",ue()})}),a.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{W&&(ce=!ce,ge=`法定节假日自动跳过已${ce?"开启":"关闭"}。`,ue())}),a.querySelector("[data-night-start]")?.addEventListener("change",A=>{W&&(P=A.currentTarget.value)}),a.querySelector("[data-night-end]")?.addEventListener("change",A=>{W&&(K=A.currentTarget.value)}),a.querySelector("[data-add-sd-form]")?.addEventListener("submit",A=>{if(A.preventDefault(),!W)return;const Y=new FormData(A.currentTarget);F.push({id:`sd-${Date.now()}`,date:String(Y.get("date")??""),label:String(Y.get("label")??""),mode:String(Y.get("mode")??"保持工作日工况")}),ge="已添加特殊例外日期，当日自动覆盖默认节假日排程。",ue()}),a.querySelectorAll("[data-del-sd]").forEach(A=>{A.addEventListener("click",()=>{if(!W)return;const Y=F.findIndex(Ae=>Ae.id===A.dataset.delSd);Y>=0&&F.splice(Y,1),ue()})}),a.querySelectorAll("[data-tariff-mode]").forEach(A=>{A.addEventListener("click",()=>{B=A.dataset.tariffMode??"flat",ue()})}),a.querySelectorAll("[data-energy-field]").forEach(A=>{A.addEventListener("change",()=>{if(!W)return;const Y=A.dataset.energyField;Y&&(H[Y]=A.value)})}),a.querySelector("[data-save-energy]")?.addEventListener("click",()=>{W&&(ge=B==="flat"?`能耗计费与气象口径已保存（面积 ${H.billingArea} m² · 综合电价 ¥${H.tariffYuan}/kWh · 因子 ${H.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${H.tariffPeak} / 平 ¥${H.tariffFlat} / 谷 ¥${H.tariffValley}）。`,ue())}),a.querySelectorAll("[data-guard-field]").forEach(A=>{A.addEventListener("change",()=>{if(!W)return;const Y=A.dataset.guardField;Y&&(X[Y]=A.value)})}),a.querySelector("[data-save-guard]")?.addEventListener("click",()=>{W&&(ge=`控制保护参数已保存（温区 ${X.minTemp}–${X.maxTemp}°C · 超时 ${X.readbackTimeoutSec}s）。`,ue())}),a.querySelectorAll("[data-auto-wo]").forEach(A=>{A.addEventListener("change",()=>{if(!W)return;const Y=A.dataset.autoWo;Y&&(oe[Y]=A.value),ge="超时自动派单配置已更新。",ue()})}),a.querySelectorAll("[data-toggle-autowo]").forEach(A=>{A.addEventListener("click",()=>{if(!W)return;const Y=A.dataset.toggleAutowo;Y&&(oe[Y]=!oe[Y],ge="自动派单保护策略已更新。",ue())})}),a.querySelector("[data-digest-time]")?.addEventListener("change",A=>{W&&(de.dailyDigestTime=A.currentTarget.value,ge=`每日晨间简报发送时刻已更新为 ${de.dailyDigestTime}。`,ue())}),a.querySelectorAll("[data-notify-key]").forEach(A=>{A.addEventListener("click",()=>{if(!W)return;const Y=A.dataset.notifyKey;Y&&(de[Y]=!de[Y],ge="消息通知偏好已更新。",ue())})}),a.querySelectorAll("[data-toggle-nr]").forEach(A=>{A.addEventListener("click",()=>{if(!W)return;const Y=N.find(Ae=>Ae.id===A.dataset.toggleNr);Y&&(Y.enabled=!Y.enabled,ge=`工作组「${Y.groupName}」的分流推送规则已${Y.enabled?"启用":"停用"}。`,ue())})}),a.querySelector("[data-cal-start]")?.addEventListener("change",A=>{W&&(J=A.currentTarget.value)}),a.querySelector("[data-cal-end]")?.addEventListener("change",A=>{W&&(re=A.currentTarget.value)}),a.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{pe="";try{Q=await e.previewCalendarImpact(L.projectId,J,re),ue()}catch(A){pe=A instanceof Error?A.message:String(A),ue()}}),a.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{if(W){pe="";try{const A=await e.saveWorkCalendar(L.projectId,J,re,M.calendar.version);M={...M,calendar:{...A,nightGuardStart:P,nightGuardEnd:K}},ge=`工作时间配置已保存至 v${A.version}（工作日 ${A.workdayStart}–${A.workdayEnd} · 夜间值守 ${P}–${K}）`,Q=[],ue()}catch(A){pe=A instanceof Error?A.message:String(A),ue()}}}),a.querySelectorAll("[data-toggle-rule]").forEach(A=>{A.addEventListener("click",async()=>{if(W){pe="";try{await e.toggleRuntimeRule(A.dataset.toggleRule,A.dataset.ruleNext==="true",Number(A.dataset.ruleVer)),M=await e.getRuntimeSettings(L.projectId),ge="策略状态与版本回执已更新。",ue()}catch(Y){pe=Y instanceof Error?Y.message:String(Y),ue()}}})})}ue()}const Et="pacom.web.sidebar.collapsed",ps=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,It=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],it={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},_t=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function nt(){const a=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return a in it?a:"home"}function Pe(a){return a.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const ka=new WeakMap;function us(a){ka.get(a)?.()}async function ms(a,e,s,r){ka.get(a)?.(),a.classList.remove("bare-login");let n=s,p=nt(),E=localStorage.getItem(Et)==="1",D=!1,O=!1,M=!1,J=await e.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],re=e.getActiveOrganizationId?.()??J[0]?.id??"org-gzlab",P="",K=!1,ce=0,Q={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function F(u){return n.scope.visibleModules.includes(u)}F(p)||(p="home",window.location.hash="#home");function B(){return J.find(u=>u.id===re)??J[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function H(u){if(u.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const $=u.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${Pe($)}</span>`}async function X(){e.listOrganizations&&(J=await e.listOrganizations(),re=e.getActiveOrganizationId?.()??J[0]?.id??"org-gzlab")}async function oe(){try{await X();const[u,$,q,d,v]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(L.floorId).catch(()=>[]),e.listAlarms(L.floorId).catch(()=>[]),e.listWorkOrders(L.floorId).catch(()=>[]),e.listScenes(L.floorId).catch(()=>[])]);Q={devices:$,zones:u.zones,alarms:q,workOrders:d,scenes:v},ce=q.filter(j=>j.status==="active").length,G()}catch{}}function de(){const u=It.filter(q=>F(q.id));let $=!1;return u.map(q=>`
        ${(q.id==="settings"||q.id==="deployment")&&!$?($=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${q.id}" aria-current="${p===q.id?"page":"false"}" title="${q.label}">
          ${ke(q.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${q.label}</span>
          ${q.id==="alarms"&&ce>0?`<span class="pacom-nav-count" title="待处理告警 ${ce} 条">${ce}</span>`:""}
        </button>`).join("")}function N(){const u=P.trim().toLowerCase(),$=It.filter(ee=>F(ee.id)),q=u?$.filter(ee=>ee.label.toLowerCase().includes(u)).slice(0,4):$,d=u?Q.devices.filter(ee=>`${ee.name} ${ee.id} ${ee.category}`.toLowerCase().includes(u)).slice(0,5):Q.devices.slice(0,3),v=u?Q.zones.filter(ee=>ee.name.toLowerCase().includes(u)).slice(0,3):[],j=F("alarms")?u?Q.alarms.filter(ee=>`${ee.title} ${ee.message} ${ee.id}`.toLowerCase().includes(u)).slice(0,4):Q.alarms.filter(ee=>ee.status==="active").slice(0,2):[],ne=F("alarms")?u?Q.workOrders.filter(ee=>`${ee.title} ${ee.id}`.toLowerCase().includes(u)).slice(0,3):[]:[],me=F("scenes")?u?Q.scenes.filter(ee=>`${ee.name} ${ee.description}`.toLowerCase().includes(u)).slice(0,3):[]:[],Ce=F("deployment")?u?_t.filter(ee=>`${ee.title} ${ee.category}`.toLowerCase().includes(u)).slice(0,4):_t.slice(0,2):[],we=[];return d.length&&we.push(`<div class="pacom-search-group">${u?"设备（空间总览）":"常用设备直达"}</div>`+d.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(ee.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Pe(ee.name)}</span><span class="pacom-badge ${ee.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${ee.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),v.length&&we.push('<div class="pacom-search-group">功能区</div>'+v.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(ee.id)}"><span>${Pe(ee.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),j.length&&we.push(`<div class="pacom-search-group">${u?"告警":"待处理告警"}</div>`+j.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(ee.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Pe(ee.title)}</span><span class="pacom-badge pacom-badge--warning">${ee.status==="active"?"待处理":"已确认"}</span></button>`).join("")),ne.length&&we.push('<div class="pacom-search-group">运维工单</div>'+ne.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(ee.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Pe(ee.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),me.length&&we.push('<div class="pacom-search-group">智能策略</div>'+me.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${Pe(ee.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),Ce.length&&we.push('<div class="pacom-search-group">图纸与工程文档</div>'+Ce.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="${ee.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Pe(ee.title)}</span><span class="pacom-badge pacom-badge--neutral">${Pe(ee.category)}</span></button>`).join("")),q.length&&we.push('<div class="pacom-search-group">工作区</div>'+q.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#${ee.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${ke(ee.icon,14)}${Pe(ee.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),we.length?we.join(""):`<div class="pacom-nav-empty">未找到与「${Pe(P)}」匹配的设备、区域、告警、工单或图纸</div>`}function ge(u){u.querySelectorAll("[data-search-hash]").forEach($=>{$.addEventListener("click",()=>{const q=$.dataset.searchHash||"#home";K=!1,P="",pe(),D=!1,window.location.hash===q?(p=nt(),he(!0)):window.location.hash=q})})}function pe(){if(a.querySelector('[data-role="cmd-scrim"]')?.remove(),!K)return;const u=document.createElement("div");u.className="pacom-cmd-scrim",u.dataset.role="cmd-scrim",u.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${ke("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${Pe(P)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${N()}
        </div>
      </div>
    `,a.appendChild(u),u.addEventListener("click",d=>{d.target===u&&(K=!1,pe())});const $=u.querySelector('[data-role="cmd-input"]'),q=u.querySelector('[data-role="cmd-body"]');q&&ge(q),$?.focus(),$?.addEventListener("input",d=>{P=d.currentTarget.value,q&&(q.innerHTML=N(),ge(q))})}function Ie(){if(!O)return"";const u=n.displayName.slice(0,1)||"U",$=!!(e.createOrganization&&n.role==="org_admin");return`
      <div class="pacom-org-popover ${E?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${J.map(q=>{const d=q.id===re;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${d}" data-pop-org="${Pe(q.id)}">
                ${H(q)}
                <span class="pacom-pop-text">
                  <b>${Pe(q.name)}</b>
                  <small>${q.projectCount>0?`${q.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${d?ke("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${$?M?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${ke("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${ke("settings",16)}</span>
          <span class="pacom-pop-text">机构与权限</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${Pe(u)}</span>
          <span class="pacom-pop-text">
            <b>${Pe(n.displayName)}</b>
            <small>${Pe(n.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${ke("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function ue(u){switch(F(p)||(p="home",window.location.hash="#home"),document.title=`${it[p]} · PACOM Station`,p){case"home":await Bt(u,e,n);return;case"analysis":await Pt(u,e,n);return;case"alarms":await Xt(u,e,n);return;case"scenes":await cs(u,e,n);return;case"settings":await ds(u,e,n);return;case"deployment":await is(u,e,n);return;case"account":await Zt(u,e,n,$=>{n=$,G(),le()},W);return}}async function W(){O=!1,D=!1,K=!1,z();try{await e.logout()}finally{window.location.hash="#login",r()}}function G(){const u=a.querySelector('[data-role="nav-list"]');u&&(u.innerHTML=de(),ie())}function le(){a.querySelector('[data-role="org-popover"]')?.remove();const u=a.querySelector('[data-role="org-menu-btn"]');if(u&&u.setAttribute("aria-expanded",String(O)),!O)return;const $=document.createElement("div");$.innerHTML=Ie().trim();const q=$.firstElementChild;q&&(a.appendChild(q),Le())}function ie(){a.querySelectorAll("[data-route]").forEach(u=>{u.addEventListener("click",()=>{const $=u.dataset.route;$===p&&!D||(p=$,D=!1,O=!1,window.location.hash=`#${p}`,he(!0))})})}async function fe(u){if(!e.switchOrganization)return;await e.switchOrganization(u),await X();const $=await e.getSpatialTree(),q=$.projects[0],d=q?$.buildings.find(j=>j.projectId===q.id):void 0,v=d?$.floors.find(j=>j.buildingId===d.id&&j.id===L.floorId)??$.floors.find(j=>j.buildingId===d.id):void 0;q&&d&&v?pa({level:"floor",projectId:q.id,buildingId:d.id,floorId:v.id}):q&&d?pa({level:"building",projectId:q.id,buildingId:d.id}):q?pa({level:"project",projectId:q.id}):pa({level:"all-projects"}),O=!1,M=!1,D=!1,await he(!0),oe()}function Le(){a.querySelectorAll("[data-pop-org]").forEach(u=>{u.addEventListener("click",()=>{const $=u.dataset.popOrg;if($){if($===re){O=!1,le();return}fe($)}})}),a.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",u=>{u.stopPropagation(),M=!M,le(),M&&a.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),a.querySelector("[data-create-org-form]")?.addEventListener("submit",async u=>{if(u.preventDefault(),!e.createOrganization)return;const $=new FormData(u.currentTarget),q=String($.get("orgName")??"").trim();if(!q)return;const d=await e.createOrganization(q);await fe(d.id)}),a.querySelectorAll('[data-pop-act="go-account"]').forEach(u=>{u.addEventListener("click",()=>{O=!1,M=!1,D=!1,p="account",window.location.hash="#account",he(!0)})}),a.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{W()})}async function he(u){const $=a.querySelector('[data-role="main-stage"]');if(!u&&$){const d=a.querySelector(".pacom-nav-rail");d&&(d.classList.toggle("is-collapsed",E),d.classList.toggle("is-mobile-open",D));const v=a.querySelector('[data-role="mobile-scrim"]');v&&v.classList.toggle("is-open",D),le();return}a.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${ke("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${it[p]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Pe(n.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${D?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${E?"is-collapsed":""} ${D?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${ps}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${E?"展开侧栏":"收起侧栏"}" aria-label="${E?"展开侧栏":"收起侧栏"}">
              ${ke("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${ke("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${de()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${p==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${O}" title="${Pe(B().name)} · ${Pe(n.displayName)}">
              ${H(B())}
              <span class="pacom-org-name">${Pe(B().name)}</span>
              ${ke("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,a.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{E=!E,O=!1,localStorage.setItem(Et,E?"1":"0");const d=a.querySelector(".pacom-nav-rail"),v=a.querySelector('[data-role="toggle-sidebar"]');d&&d.classList.toggle("is-collapsed",E),v&&(v.title=E?"展开侧栏":"收起侧栏",v.setAttribute("aria-label",v.title),v.innerHTML=ke("panel-left",16)),le()}),a.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{O=!1,le(),K=!0,pe()}),a.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{D=!D,he(!1)}),a.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{D=!1,O=!1,he(!1)}),a.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",d=>{d.stopPropagation(),O=!O,le()}),ie(),le(),pe();const q=a.querySelector('[data-role="main-stage"]');q&&await ue(q)}const A=u=>{const $=u.target;O&&!$?.closest('[data-role="org-popover"]')&&!$?.closest('[data-role="org-menu-btn"]')&&(O=!1,le())},Y=u=>{if((u.metaKey||u.ctrlKey)&&u.key.toLowerCase()==="k"){u.preventDefault(),O=!1,le(),K=!K,pe();return}u.key==="Escape"&&(K?(K=!1,pe()):O?(O=!1,le()):D&&(D=!1,he(!1)))},Ae=()=>{p=nt(),O=!1,D=!1,K=!1,he(!0),oe()};function z(){document.removeEventListener("click",A),document.removeEventListener("keydown",Y),window.removeEventListener("hashchange",Ae),ka.get(a)===z&&ka.delete(a)}ka.set(a,z),document.addEventListener("click",A),document.addEventListener("keydown",Y),window.addEventListener("hashchange",Ae),await he(!0),oe()}const sa=["password","sms"];function Lt(a){const e=Qe(a).replace(/[\s-]/g,"");return/^(\+?86)?1[3-9]\d{9}$/.test(e)}const Ea=new WeakMap;function jt(a){Ea.get(a)?.()}function vs(a,e,s,r){Ea.get(a)?.(),a.classList.add("bare-login"),document.title="登录 · PACOM Station";let n=!1,p=!1,E=(r?.prefillAccount??"").trim(),D="",O=Lt(E)?E:"",M="",J=!1;const re=(r?.notice??"").trim();let P={},K="",ce=!1,Q="",F=0,B=null,H=null,X=null,oe=!1,de="",N="",ge=null,pe=null,Ie=!1;const ue=Tt();function W(v){if(v.key==="Escape"){if(ue.isOpen()){v.preventDefault(),ue.close(!0);return}X&&(v.preventDefault(),Ae())}}function G(v){const j=a.querySelector('[data-role="mode-seg"]'),ne=j?.querySelector(".au-mode-indicator"),me=j?.querySelector('.au-mode-tab[aria-selected="true"]');!ne||!me||(ne.style.transition=v?"":"none",ne.style.transform=`translateX(${me.offsetLeft}px)`,ne.style.width=`${me.offsetWidth}px`,v||(ne.offsetWidth,ne.style.transition=""))}function le(){G(!1)}function ie(){Ie=!0,pe?.(),pe=null,ue.destroy(),B!==null&&(window.clearInterval(B),B=null),H!==null&&(window.clearTimeout(H),H=null),document.removeEventListener("keydown",W),window.removeEventListener("resize",le),a.classList.remove("bare-login"),Ea.get(a)===ie&&Ea.delete(a)}document.addEventListener("keydown",W),window.addEventListener("resize",le),Ea.set(a,ie);function fe(v=60){F=v,B!==null&&window.clearInterval(B),B=window.setInterval(()=>{F-=1,F<=0&&(F=0,B!==null&&(window.clearInterval(B),B=null));const j=a.querySelector('[data-act="send-sms"]');j&&(j.disabled=F>0,j.textContent=F>0?`${F} 秒后重发`:Q?"重新获取":"获取验证码")},1e3)}function Le(){const v=a.querySelector("#au-login-ferr");if(v)if(K){v.hidden=!1;const j=v.querySelector('[data-role="ferr-text"]');j&&(j.textContent=K)}else v.hidden=!0}function he(v){const j=a.querySelector(`.au-field[data-f="${v}"]`),ne=a.querySelector(`#au-${v}`),me=a.querySelector(`#au-${v}-err`),Ce=P[v]??"";j?.classList.toggle("bad",!!Ce),ne?.setAttribute("aria-invalid",Ce?"true":"false"),me&&(me.textContent=Ce)}function A(){const v=a.querySelector('form[data-form="login"] fieldset'),j=a.querySelector('form[data-form="login"] button[type="submit"]');v&&(v.disabled=ce),j&&(j.disabled=ce,j.innerHTML=ce?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"<span>登录</span>")}function Y(v,j){ue.close(!1),ge=j??(document.activeElement instanceof HTMLElement?document.activeElement:null),X=v,u(),v==="reset"?a.querySelector("#au-rs-id")?.focus():a.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function Ae(){if(!X)return;X=null,H!==null&&(window.clearTimeout(H),H=null),oe=!1,u();const v=ge;ge=null,v&&document.contains(v)&&v.focus({preventScroll:!0})}function z(){if(!X)return"";if(X==="reset"){const v=de.trim().length>0;return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Rt}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field" style="margin-bottom:0;">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${c(de)}" />
                  </div>
                </div>
                <div class="au-notice-soft" data-role="reset-notice" role="status" aria-live="polite" ${N?"":"hidden"}>
                  ${ot}
                  <span data-role="reset-notice-text">${c(N)}</span>
                </div>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${v?"":"disabled"}>发送验证码</button>
            </div>
          </section>
        </div>
      `}return X==="contact"?Mt(oe):""}function u(){const v=a.querySelector('[data-role="modal-host"]');if(!v||(v.innerHTML=z(),!X))return;v.querySelectorAll('[data-act="close-modal"]').forEach(me=>{me.addEventListener("click",()=>Ae())}),v.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",me=>{me.target===me.currentTarget&&Ae()}),v.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{const me=v.querySelector('[data-act="copy-support"]');try{await navigator.clipboard.writeText("support@pacom.cn")}catch{}oe=!0,me&&(me.classList.add("is-copied"),me.innerHTML=`${Ft}<span>已复制</span>`),H!==null&&window.clearTimeout(H),H=window.setTimeout(()=>{H=null,oe=!1;const Ce=v.querySelector('[data-act="copy-support"]');Ce&&(Ce.classList.remove("is-copied"),Ce.innerHTML=`${zt}<span>复制</span>`)},1800)});const j=v.querySelector("#au-rs-id"),ne=v.querySelector('[data-role="reset-submit"]');j?.addEventListener("input",()=>{de=j.value,ne&&(ne.disabled=de.trim().length===0)}),v.querySelector("#au-reset-form")?.addEventListener("submit",async me=>{if(me.preventDefault(),de=Qe(j?.value??""),!de)N="请输入电子邮箱或手机号码";else try{N=`如该账号已注册，验证码已发送至 ${(await e.sendVerificationCode({target:de,purpose:"reset"})).maskedTarget||ya(de)}；如需协助请联系机构管理员。`}catch{N="请联系机构管理员重置账号密码，或确认后查收重置验证码。"}const Ce=v.querySelector('[data-role="reset-notice"]'),we=v.querySelector('[data-role="reset-notice-text"]');Ce&&we&&(we.textContent=N,Ce.hidden=!1)})}function $(){ue.close(!1);const v=`
      <span data-role="login-novcode-wrap" ${Q?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-login-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-login-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-login-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `,j=n?`
        <div class="au-field ${P.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(O)}" aria-invalid="${P.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${F>0?"disabled":""}>
              ${F>0?`${F} 秒后重发`:Q?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${c(P.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${Q?`验证码已发送至 ${c(Q)}`:""}</p>
        </div>
      `:`
        <div class="au-field ${P.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(E)}" aria-invalid="${P.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${c(P.id??"")}</p>
        </div>
      `,ne=n?`
        <div class="au-field ${P.scode?"bad":""}" data-f="scode">
          <div class="au-lab">
            <label for="au-scode">短信验证码</label>
            ${v}
          </div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(M)}" aria-invalid="${P.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${c(P.scode??"")}</p>
        </div>
      `:`
        <div class="au-field ${P.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab">
            <label for="au-pwd">密码</label>
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${p?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(D)}" aria-invalid="${P.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${p?"隐藏密码":"显示密码"}">
              ${p?$a:ha}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${c(P.pwd??"")}</p>
        </div>
      `,me=a.querySelector('[data-role="fields-host"]');me&&(me.innerHTML=`${j}${ne}`,d(me))}function q(v,j=!1){const ne=v==="sms";n===ne||ce||(ne&&!O.trim()&&Lt(E)?O=E.trim():!ne&&!E.trim()&&O.trim()&&(E=O.trim()),n=ne,P={},K="",a.querySelectorAll('[data-act="switch-mode"]').forEach(me=>{const Ce=me.dataset.mode===v;me.setAttribute("aria-selected",String(Ce)),me.tabIndex=Ce?0:-1,Ce&&j&&me.focus({preventScroll:!0})}),G(!0),$(),Le(),j||(n?Q?a.querySelector("#au-scode")?.focus({preventScroll:!0}):O.trim()?a.querySelector('[data-act="send-sms"]')?.focus({preventScroll:!0}):a.querySelector("#au-sphone")?.focus({preventScroll:!0}):a.querySelector(E.trim()?"#au-pwd":"#au-id")?.focus({preventScroll:!0})))}function d(v){ue.bind(v);const j=v.querySelector("#au-id"),ne=v.querySelector("#au-pwd"),me=v.querySelector("#au-sphone"),Ce=v.querySelector("#au-scode");j?.addEventListener("input",()=>{E=j.value,(P.id||K)&&(delete P.id,K="",he("id"),Le())}),ne?.addEventListener("input",()=>{D=ne.value,(P.pwd||K)&&(delete P.pwd,K="",he("pwd"),Le())}),me?.addEventListener("input",()=>{if(O=me.value,Q){Q="";const we=v.querySelector("#au-sphone-hint");we&&(we.textContent="");const ee=v.querySelector('[data-role="login-novcode-wrap"]');ee&&(ee.hidden=!0),ue.close(!1);const y=v.querySelector('[data-act="send-sms"]');y&&F===0&&(y.textContent="获取验证码")}(P.sphone||K)&&(delete P.sphone,K="",he("sphone"),Le())}),Ce?.addEventListener("input",()=>{M=Ce.value.replace(/\D/g,"").slice(0,6),Ce.value=M,(P.scode||K)&&(delete P.scode,K="",he("scode"),Le())}),v.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",we=>{p=!p;const ee=we.currentTarget,y=v.querySelector("#au-pwd");if(y){const f=y.selectionStart,U=y.selectionEnd;y.type=p?"text":"password",y.focus({preventScroll:!0}),f!==null&&U!==null&&y.setSelectionRange(f,U)}ee.setAttribute("aria-label",p?"隐藏密码":"显示密码"),ee.innerHTML=p?$a:ha}),v.querySelector('[data-act="send-sms"]')?.addEventListener("click",async()=>{const we=ia(O);if(we){P={...P,sphone:we},he("sphone"),v.querySelector("#au-sphone")?.focus({preventScroll:!0});return}delete P.sphone,he("sphone");const ee=v.querySelector('[data-act="send-sms"]');ee&&(ee.disabled=!0,ee.textContent="发送中…");try{const y=await e.sendVerificationCode({target:Qe(O),purpose:"login"});if(Ie)return;Q=y.maskedTarget||ya(O);const f=v.querySelector("#au-sphone-hint");f&&(f.textContent=`验证码已发送至 ${Q}`);const U=v.querySelector('[data-role="login-novcode-wrap"]');U&&(U.hidden=!1),fe(y.cooldownSeconds||60),ee&&(ee.disabled=!0,ee.textContent=`${F} 秒后重发`),v.querySelector("#au-scode")?.focus({preventScroll:!0})}catch(y){if(Ie)return;ee&&(ee.disabled=!1,ee.textContent=Q?"重新获取":"获取验证码"),K=y instanceof Error?y.message:"暂时无法发送验证码，请稍后再试。",Le()}}),v.querySelector('[data-act="open-reset"]')?.addEventListener("click",we=>{de=E.trim(),N="",Y("reset",we.currentTarget)})}a.innerHTML=`
    <div class="au au-split au-auth-shell">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${qt}</div>
            <h1 class="au-h1">登录</h1>
            ${re?`<div class="au-notice-soft au-login-notice" role="status">${ot}<span>${c(re)}</span></div>`:""}
            <div class="au-mode-seg" role="tablist" aria-label="登录方式" data-role="mode-seg">
              <span class="au-mode-indicator" aria-hidden="true"></span>
              <button type="button" role="tab" aria-selected="true" tabindex="0" class="au-mode-tab" data-act="switch-mode" data-mode="password">密码登录</button>
              <button type="button" role="tab" aria-selected="false" tabindex="-1" class="au-mode-tab" data-act="switch-mode" data-mode="sms">短信登录</button>
            </div>
            <form class="au-compact-form" data-form="login" novalidate>
              <fieldset>
                <div data-role="fields-host"></div>
                <div class="au-ferr" id="au-login-ferr" role="alert" hidden>
                  ${fa}
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
        ${Ot()}
      </section>
      <aside class="au-art" aria-hidden="true">
        <div class="au-art-frame">
          <img src="./media/auth-hero.jpg" alt="" />
        </div>
      </aside>
    </div>
    <div data-role="modal-host"></div>
  `,a.querySelector('input[name="keep"]')?.addEventListener("change",v=>{J=v.currentTarget.checked}),a.querySelector('form[data-form="login"]')?.addEventListener("submit",async v=>{if(v.preventDefault(),!ce){if(P={},K="",n){const j=ia(O);j&&(P.sphone=j),/^\d{6}$/.test(M.trim())||(P.scode="请输入 6 位验证码"),he("sphone"),he("scode")}else E.trim()||(P.id="请输入电子邮箱或手机号码"),D||(P.pwd="请输入密码"),he("id"),he("pwd");if(Le(),Object.keys(P).length>0){const j=Object.keys(P)[0];a.querySelector(`#au-${j}`)?.focus({preventScroll:!0});return}ce=!0,A();try{const j=await e.login({account:Qe(n?O:E),password:n?M.trim():D});ie(),s(j)}catch(j){ce=!1,K=j instanceof Error?j.message:"账户或密码不正确",A(),Le()}}}),a.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{r?.onOpenRegister?(ie(),r.onOpenRegister()):window.location.hash="#register"}),a.querySelectorAll('[data-act="switch-mode"]').forEach(v=>{v.addEventListener("click",()=>{const j=v.dataset.mode;j&&q(j,!1)}),v.addEventListener("keydown",j=>{const ne=n?"sms":"password",me=sa.indexOf(ne);j.key==="ArrowRight"?(j.preventDefault(),q(sa[(me+1)%sa.length],!0)):j.key==="ArrowLeft"?(j.preventDefault(),q(sa[(me-1+sa.length)%sa.length],!0)):j.key==="Home"?(j.preventDefault(),q(sa[0],!0)):j.key==="End"&&(j.preventDefault(),q(sa[sa.length-1],!0))})}),a.querySelector('[data-act="open-contact"]')?.addEventListener("click",v=>{oe=!1,Y("contact",v.currentTarget)}),$(),G(!1),pe=Dt(a),document.fonts?.ready.then(()=>{Ie||G(!1)})}const na=["join","apply"],da=1e3,ga=50,Ra=60,At=110,Ia=new WeakMap;function Ct(a){Ia.get(a)?.()}function gs(a,e,s){Ia.get(a)?.(),a.classList.add("bare-login");let r=!1,n=s.initialMode??"join",p=null,E=!1,D=null,O=null,M=s.initialJoinReceipt??null,J=s.initialApplyReceipt??null,re=!1,P=null;const K=(s.inviteToken??"").trim(),ce=s.currentSession??null;let Q=!!K,F=null,B="",H="",X="",oe="",de="",N=0,ge=null,pe="",Ie=!1,ue=!1,W=lt(s.prefillCode??""),G="",le=!1,ie=0,fe="",Le="",he="",A="",Y="",Ae=!1,z=!1,u="",$=0,q=null,d="",v="",j="",ne="",me="",Ce="",we="",ee="",y="",f=!1,U="",ae=0,be=null,Oe=null,h={},Z="",Ee=!1;const Me=Tt();function ve(g){if(g.key==="Escape"){if(Me.isOpen()){g.preventDefault(),Me.close(!0);return}p&&(g.preventDefault(),Ne())}}function $e(g){const T=a.querySelector('[data-role="reg-seg"]'),V=T?.querySelector(".au-mode-indicator"),se=T?.querySelector('.au-mode-tab[aria-selected="true"]');!V||!se||(V.style.transition=g?"":"none",V.style.transform=`translateX(${se.offsetLeft}px)`,V.style.width=`${se.offsetWidth}px`,g||(V.offsetWidth,V.style.transition=""))}function He(){$e(!1)}function Ve(){r=!0,P?.(),P=null,Me.destroy(),q!==null&&(window.clearInterval(q),q=null),be!==null&&(window.clearInterval(be),be=null),ge!==null&&(window.clearInterval(ge),ge=null),Oe!==null&&(window.clearTimeout(Oe),Oe=null),document.removeEventListener("keydown",ve),window.removeEventListener("resize",He),a.classList.remove("bare-login"),Ia.get(a)===Ve&&Ia.delete(a)}document.addEventListener("keydown",ve),window.addEventListener("resize",He),Ia.set(a,Ve);function wa(g){$=g,q!==null&&window.clearInterval(q),q=window.setInterval(()=>{$-=1,$<=0&&($=0,q!==null&&(window.clearInterval(q),q=null));const T=a.querySelector('[data-act="jn-send-code"]');T&&(T.disabled=$>0,T.textContent=$>0?`${$} 秒后重发`:u?"重新获取":"获取验证码")},1e3)}function _a(g){ae=g,be!==null&&window.clearInterval(be),be=window.setInterval(()=>{ae-=1,ae<=0&&(ae=0,be!==null&&(window.clearInterval(be),be=null));const T=a.querySelector('[data-act="ap-send-code"]');T&&(T.disabled=ae>0,T.textContent=ae>0?`${ae} 秒后重发`:U?"重新获取":"获取验证码")},1e3)}function Se(){const g=a.querySelector("#au-reg-ferr");if(g)if(Z){g.hidden=!1;const T=g.querySelector('[data-role="ferr-text"]');T&&(T.textContent=Z)}else g.hidden=!0}function je(g){const T=a.querySelector(`.au-field[data-f="${g}"]`),V=a.querySelector(`#au-${g}`),se=a.querySelector(`#au-${g}-err`),I=h[g]??"";T?.classList.toggle("bad",!!I),V?.setAttribute("aria-invalid",I?"true":"false"),se&&(se.textContent=I)}function ea(g,T){const V=a.querySelector("form[data-reg-form] fieldset"),se=a.querySelector('form[data-reg-form] button[type="submit"]');V&&(V.disabled=Ee),se&&(se.disabled=Ee,se.innerHTML=Ee?`<span class="au-spinner" aria-hidden="true"></span><span>${c(g)}</span>`:`<span>${c(T)}</span>`)}function We(g,T){Me.close(!1),D=T??(document.activeElement instanceof HTMLElement?document.activeElement:null),p=g,Fe(),a.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function Ne(){if(!p)return;p=null,O=null,Oe!==null&&(window.clearTimeout(Oe),Oe=null),E=!1,Fe();const g=D;D=null,g&&document.contains(g)&&g.focus({preventScroll:!0})}function Ge(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">请阅读并同意</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Rt}</button>
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
    `}function Fe(){const g=a.querySelector('[data-role="modal-host"]');if(g){if(!p){g.innerHTML="";return}g.innerHTML=p==="contact"?Mt(E):Ge(),g.querySelectorAll('[data-act="close-modal"]').forEach(T=>{T.addEventListener("click",()=>Ne())}),g.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",T=>{T.target===T.currentTarget&&Ne()}),g.querySelector('[data-act="consent-confirm"]')?.addEventListener("click",()=>{const T=O;O=null,p=null,Fe(),T?.()}),g.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{const T=g.querySelector('[data-act="copy-support"]');try{await navigator.clipboard.writeText("support@pacom.cn")}catch{}E=!0,T&&(T.classList.add("is-copied"),T.innerHTML=`${Ft}<span>已复制</span>`),Oe!==null&&window.clearTimeout(Oe),Oe=window.setTimeout(()=>{Oe=null,E=!1;const V=g.querySelector('[data-act="copy-support"]');V&&(V.classList.remove("is-copied"),V.innerHTML=`${zt}<span>复制</span>`)},1800)})}}function Ke(g,T,V,se){return`
      <div class="au-field au-consent-field ${h[se]?"bad":""}" data-f="${se}">
        <div class="au-check au-consent-row">
          <input id="${g}" type="checkbox" name="${T}" ${V?"checked":""} aria-invalid="${h[se]?"true":"false"}" />
          <span class="au-consent-text">
            <label class="au-consent-label" for="${g}">我已阅读并同意 PACOM </label><a class="au-consent-link" href="${qa}" target="_blank" rel="noopener noreferrer">隐私政策</a><label class="au-consent-label" for="${g}">和</label><a class="au-consent-link" href="${qa}" target="_blank" rel="noopener noreferrer">使用条款</a>
          </span>
        </div>
        <p class="au-err" id="au-${se}-err" aria-live="polite">${c(h[se]??"")}</p>
      </div>
    `}async function ua(g){const T=g.replace(/\D/g,"");if(T.length!==9){G="",le=!1,Xe();return}const V=++ie;le=!0,G="",Xe();try{const se=await e.resolveInviteCode(T);if(r||V!==ie)return;le=!1,se.valid&&se.organizationName?(G=se.organizationName,delete h.jn_code):(G="",h.jn_code=se.message??"邀请码不正确或已失效，请向机构管理员确认。"),je("jn_code"),Xe()}catch(se){if(r||V!==ie)return;le=!1,G="",h.jn_code=se instanceof Error?se.message:"暂时无法核验邀请码，请稍后再试。",je("jn_code"),Xe()}}function Xe(){const g=a.querySelector('[data-role="jn-code-match"]'),T=a.querySelector('[data-role="jn-nocode-wrap"]');g&&(G?(g.hidden=!1,g.innerHTML=`${pt}<span>目标机构：${c(G)}</span>`):(g.hidden=!0,g.innerHTML="")),T&&(T.hidden=!!G)}function ze(){const g=`
      <span data-role="jn-nocode-wrap" ${G?"hidden":""}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-nocode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-nocode-pop"><span>没有邀请码？</span></button>
        <span id="au-jn-nocode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="没有邀请码说明" hidden>
          <span class="ws-info-text">请向所在机构的管理员获取 9 位邀请码；如需为新企业开通，请切换上方「申请开通机构」。</span>
        </span>
      </span>
    `,T=`
      <span data-role="jn-novcode-wrap" ${u?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-jn-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认邮箱或手机号码无误，检查垃圾邮件或短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">填写机构 9 位邀请码，管理员批准后即可访问。</p>
      <form class="au-compact-form au-reg-form" data-reg-form="join" novalidate>
        <fieldset ${Ee?"disabled":""}>
          <div class="au-field ${h.jn_code?"bad":""}" data-f="jn_code">
            <div class="au-lab">
              <label for="au-jn_code">机构邀请码</label>
              ${g}
            </div>
            <div class="au-ctl">
              <input id="au-jn_code" name="jn_code" class="au-in" type="text" inputmode="numeric" autocomplete="off" maxlength="11" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(W)}" aria-invalid="${h.jn_code?"true":"false"}" />
            </div>
            <div class="au-code-match" data-role="jn-code-match" role="status" aria-live="polite" ${G?"":"hidden"}>
              ${G?`${pt}<span>目标机构：${c(G)}</span>`:""}
            </div>
            <p class="au-err" id="au-jn_code-err" aria-live="polite">${c(h.jn_code??"")}</p>
          </div>

          <div class="au-field ${h.jn_name?"bad":""}" data-f="jn_name">
            <div class="au-lab"><label for="au-jn_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-jn_name" name="jn_name" class="au-in" type="text" autocomplete="name" value="${c(fe)}" aria-invalid="${h.jn_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_name-err" aria-live="polite">${c(h.jn_name??"")}</p>
          </div>

          <div class="au-field ${h.jn_dept?"bad":""}" data-f="jn_dept">
            <div class="au-lab"><label for="au-jn_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-jn_dept" name="jn_dept" class="au-in" type="text" autocomplete="organization-title" value="${c(Le)}" aria-invalid="${h.jn_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_dept-err" aria-live="polite">${c(h.jn_dept??"")}</p>
          </div>

          <div class="au-field ${h.jn_account?"bad":""}" data-f="jn_account">
            <div class="au-lab"><label for="au-jn_account">电子邮箱或手机号码</label></div>
            <div class="au-ctl">
              <input id="au-jn_account" name="jn_account" class="au-in has-code-btn" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(he)}" aria-invalid="${h.jn_account?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="jn-send-code" ${$>0?"disabled":""}>
                ${$>0?`${$} 秒后重发`:u?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-jn_account-err" aria-live="polite">${c(h.jn_account??"")}</p>
            <p class="au-hint" id="au-jn_account-hint" role="status" aria-live="polite">${u?`验证码已发送至 ${c(u)}`:""}</p>
          </div>

          <div class="au-field ${h.jn_vcode?"bad":""}" data-f="jn_vcode">
            <div class="au-lab">
              <label for="au-jn_vcode">验证码</label>
              ${T}
            </div>
            <div class="au-ctl">
              <input id="au-jn_vcode" name="jn_vcode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(A)}" aria-invalid="${h.jn_vcode?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_vcode-err" aria-live="polite">${c(h.jn_vcode??"")}</p>
          </div>

          <div class="au-field ${h.jn_pwd?"bad":""}" data-f="jn_pwd">
            <div class="au-lab au-label-row">
              <span class="au-lab-group">
                <label for="au-jn_pwd">设置密码</label>
                ${Ca("au-jn-pwd-info","设置密码说明",ut)}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-jn_pwd" name="jn_pwd" class="au-in has-suffix" type="${Ae?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(Y)}" aria-invalid="${h.jn_pwd?"true":"false"}" />
              <button type="button" class="au-suffix au-eye" data-act="jn-toggle-eye" aria-controls="au-jn_pwd" aria-label="${Ae?"隐藏密码":"显示密码"}">
                ${Ae?$a:ha}
              </button>
            </div>
            <p class="au-err" id="au-jn_pwd-err" aria-live="polite">${c(h.jn_pwd??"")}</p>
          </div>

          ${Ke("au-jn_consent","jn_consent",z,"jn_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${Z?"":"hidden"}>
            ${fa}
            <span data-role="ferr-text">${c(Z)}</span>
          </div>

          <button type="submit" class="au-primary au-compact-primary" ${Ee?"disabled":""}>
            ${Ee?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>注册并申请加入</span>"}
          </button>
        </fieldset>
      </form>
    `}function ma(){const g=mt(v),T=ta(y),V=T>=da*.8?`${T} / ${da}`:"",se=`
      <span data-role="ap-novcode-wrap" ${U?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-ap-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-ap-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-ap-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">提交企业信息，经 PACOM 审核通过后开通机构。</p>
      <form class="au-compact-form au-reg-form" data-reg-form="apply" novalidate>
        <fieldset ${Ee?"disabled":""}>
          <div class="au-field ${h.ap_org?"bad":""}" data-f="ap_org">
            <div class="au-lab au-label-row">
              <span class="au-lab-group">
                <label for="au-ap_org">机构名称</label>
                ${Ca("au-ap-org-info","机构名称说明",["请填写营业执照等登记证书上的完整名称。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_org" name="ap_org" class="au-in" type="text" autocomplete="organization" value="${c(d)}" aria-invalid="${h.ap_org?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_org-err" aria-live="polite">${c(h.ap_org??"")}</p>
          </div>

          <div class="au-field ${h.ap_region?"bad":""}" data-f="ap_region">
            <div class="au-lab"><label for="au-ap_prov">所在地区</label></div>
            <div class="au-row-eq">
              <div class="au-select-wrap">
                <select id="au-ap_prov" name="ap_prov" class="au-select ${v?"":"is-placeholder"}" aria-label="省份" aria-invalid="${h.ap_region?"true":"false"}">
                  <option value="" ${v?"":"selected"}>省份</option>
                  ${Ut.map(([I])=>`<option value="${c(I)}" ${v===I?"selected":""}>${c(I)}</option>`).join("")}
                </select>
                ${vt}
              </div>
              <div class="au-select-wrap">
                <select id="au-ap_city" name="ap_city" class="au-select ${j?"":"is-placeholder"}" aria-label="城市" ${v?"":"disabled"} aria-invalid="${h.ap_region?"true":"false"}">
                  <option value="" ${j?"":"selected"}>城市</option>
                  ${g.map(I=>`<option value="${c(I)}" ${j===I?"selected":""}>${c(I)}</option>`).join("")}
                </select>
                ${vt}
              </div>
            </div>
            <p class="au-err" id="au-ap_region-err" aria-live="polite">${c(h.ap_region??"")}</p>
          </div>

          <div class="au-field ${h.ap_name?"bad":""}" data-f="ap_name">
            <div class="au-lab"><label for="au-ap_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-ap_name" name="ap_name" class="au-in" type="text" autocomplete="name" value="${c(ne)}" aria-invalid="${h.ap_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_name-err" aria-live="polite">${c(h.ap_name??"")}</p>
          </div>

          <div class="au-field ${h.ap_dept?"bad":""}" data-f="ap_dept">
            <div class="au-lab"><label for="au-ap_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-ap_dept" name="ap_dept" class="au-in" type="text" autocomplete="organization-title" value="${c(me)}" aria-invalid="${h.ap_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_dept-err" aria-live="polite">${c(h.ap_dept??"")}</p>
          </div>

          <div class="au-field ${h.ap_email?"bad":""}" data-f="ap_email">
            <div class="au-lab"><label for="au-ap_email">电子邮箱</label></div>
            <div class="au-ctl">
              <input id="au-ap_email" name="ap_email" class="au-in" type="email" inputmode="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(Ce)}" aria-invalid="${h.ap_email?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_email-err" aria-live="polite">${c(h.ap_email??"")}</p>
          </div>

          <div class="au-field ${h.ap_phone?"bad":""}" data-f="ap_phone">
            <div class="au-lab"><label for="au-ap_phone">手机号码</label></div>
            <div class="au-ctl">
              <input id="au-ap_phone" name="ap_phone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(we)}" aria-invalid="${h.ap_phone?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="ap-send-code" ${ae>0?"disabled":""}>
                ${ae>0?`${ae} 秒后重发`:U?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-ap_phone-err" aria-live="polite">${c(h.ap_phone??"")}</p>
            <p class="au-hint" id="au-ap_phone-hint" role="status" aria-live="polite">${U?`验证码已发送至 ${c(U)}`:""}</p>
          </div>

          <div class="au-field ${h.ap_sms?"bad":""}" data-f="ap_sms">
            <div class="au-lab">
              <label for="au-ap_sms">验证码</label>
              ${se}
            </div>
            <div class="au-ctl">
              <input id="au-ap_sms" name="ap_sms" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(ee)}" aria-invalid="${h.ap_sms?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_sms-err" aria-live="polite">${c(h.ap_sms??"")}</p>
          </div>

          <div class="au-field ${h.ap_overview?"bad":""}" data-f="ap_overview">
            <div class="au-lab"><label for="au-ap_overview">项目概况<span class="fld-opt">选填</span></label></div>
            <div class="ws-textarea-shell au-note-shell">
              <textarea id="au-ap_overview" name="ap_overview" class="au-in au-ta au-ta-std" rows="3" aria-invalid="${h.ap_overview?"true":"false"}">${c(y)}</textarea>
              <button type="button" class="ws-resize" data-space-resize="au-ap_overview" aria-label="调整项目概况输入框高度；按上下方向键调整"></button>
            </div>
            <p class="au-err" id="au-ap_overview-err" aria-live="polite">${c(h.ap_overview??"")}</p>
            <p class="au-hint au-char-count" id="au-ap_overview-count" ${V?"":"hidden"}>${c(V)}</p>
          </div>

          ${Ke("au-ap_consent","ap_consent",f,"ap_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${Z?"":"hidden"}>
            ${fa}
            <span data-role="ferr-text">${c(Z)}</span>
          </div>

          <button type="submit" class="au-primary au-compact-primary" ${Ee?"disabled":""}>
            ${Ee?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>提交开通申请</span>"}
          </button>
        </fieldset>
      </form>
    `}async function Sa(){const g=Ja(he);if(g){h.jn_account=g,je("jn_account"),a.querySelector("#au-jn_account")?.focus({preventScroll:!0});return}delete h.jn_account,je("jn_account");const T=a.querySelector('[data-act="jn-send-code"]');T&&(T.disabled=!0,T.textContent="发送中…");try{const V=await e.sendVerificationCode({target:Qe(he),purpose:"register_join",consentAcceptedAt:new Date().toISOString()});if(r)return;u=V.maskedTarget||ya(he);const se=a.querySelector("#au-jn_account-hint");se&&(se.textContent=`验证码已发送至 ${u}`);const I=a.querySelector('[data-role="jn-novcode-wrap"]');I&&(I.hidden=!1),wa(V.cooldownSeconds||60),T&&(T.disabled=!0,T.textContent=`${$} 秒后重发`),a.querySelector("#au-jn_vcode")?.focus({preventScroll:!0})}catch(V){if(r)return;T&&(T.disabled=!1,T.textContent=u?"重新获取":"获取验证码"),Z=V instanceof Error?V.message:"暂时无法发送验证码，请稍后再试。",Se()}}async function La(){const g=ia(we);if(g){h.ap_phone=g,je("ap_phone"),a.querySelector("#au-ap_phone")?.focus({preventScroll:!0});return}delete h.ap_phone,je("ap_phone");const T=a.querySelector('[data-act="ap-send-code"]');T&&(T.disabled=!0,T.textContent="发送中…");try{const V=await e.sendVerificationCode({target:Qe(we),purpose:"org_apply",consentAcceptedAt:new Date().toISOString()});if(r)return;U=V.maskedTarget||ya(we);const se=a.querySelector("#au-ap_phone-hint");se&&(se.textContent=`验证码已发送至 ${U}`);const I=a.querySelector('[data-role="ap-novcode-wrap"]');I&&(I.hidden=!1),_a(V.cooldownSeconds||60),T&&(T.disabled=!0,T.textContent=`${ae} 秒后重发`),a.querySelector("#au-ap_sms")?.focus({preventScroll:!0})}catch(V){if(r)return;T&&(T.disabled=!1,T.textContent=U?"重新获取":"获取验证码"),Z=V instanceof Error?V.message:"暂时无法发送验证码，请稍后再试。",Se()}}function Ha(g){Me.bind(g);const T=g.querySelector("#au-jn_code"),V=g.querySelector("#au-jn_name"),se=g.querySelector("#au-jn_dept"),I=g.querySelector("#au-jn_account"),Be=g.querySelector("#au-jn_vcode"),b=g.querySelector("#au-jn_pwd"),k=g.querySelector("#au-jn_consent");T?.addEventListener("input",()=>{W=lt(T.value),T.value=W,(h.jn_code||Z)&&(delete h.jn_code,Z="",je("jn_code"),Se()),ua(W)}),V?.addEventListener("input",()=>{fe=V.value,(h.jn_name||Z)&&(delete h.jn_name,Z="",je("jn_name"),Se())}),se?.addEventListener("input",()=>{Le=se.value,h.jn_dept&&(delete h.jn_dept,je("jn_dept"))}),I?.addEventListener("input",()=>{if(he=I.value,u){u="";const _=g.querySelector("#au-jn_account-hint");_&&(_.textContent="");const x=g.querySelector('[data-role="jn-novcode-wrap"]');x&&(x.hidden=!0),Me.close(!1);const C=g.querySelector('[data-act="jn-send-code"]');C&&$===0&&(C.textContent="获取验证码")}(h.jn_account||Z)&&(delete h.jn_account,Z="",je("jn_account"),Se())}),Be?.addEventListener("input",()=>{A=Be.value.replace(/\D/g,"").slice(0,6),Be.value=A,(h.jn_vcode||Z)&&(delete h.jn_vcode,Z="",je("jn_vcode"),Se())}),b?.addEventListener("input",()=>{Y=b.value,(h.jn_pwd||Z)&&(delete h.jn_pwd,Z="",je("jn_pwd"),Se())}),k?.addEventListener("change",()=>{z=k.checked,z&&h.jn_consent&&(delete h.jn_consent,je("jn_consent"))}),g.querySelector('[data-act="jn-toggle-eye"]')?.addEventListener("click",_=>{Ae=!Ae;const x=_.currentTarget;if(b){const C=b.selectionStart,S=b.selectionEnd;b.type=Ae?"text":"password",b.focus({preventScroll:!0}),C!==null&&S!==null&&b.setSelectionRange(C,S)}x.setAttribute("aria-label",Ae?"隐藏密码":"显示密码"),x.innerHTML=Ae?$a:ha}),g.querySelector('[data-act="jn-send-code"]')?.addEventListener("click",_=>{const x=Ja(he);if(x){h.jn_account=x,je("jn_account"),I?.focus({preventScroll:!0});return}if(!z){O=()=>{z=!0,k&&(k.checked=!0),delete h.jn_consent,je("jn_consent"),Sa()},We("consent_ask",_.currentTarget);return}Sa()}),g.querySelector('form[data-reg-form="join"]')?.addEventListener("submit",async _=>{if(_.preventDefault(),Ee)return;h={},Z="";const x=W.replace(/\D/g,"");if(x.length!==9)h.jn_code="请输入 9 位机构邀请码";else if(!G&&!le){const t=await e.resolveInviteCode(x);t.valid&&t.organizationName?(G=t.organizationName,Xe()):h.jn_code=t.message??"邀请码不正确或已失效，请向机构管理员确认。"}fe.trim()?ta(fe.trim())>ga&&(h.jn_name=`姓名不超过 ${ga} 个字`):h.jn_name="请输入姓名",ta(Le.trim())>Ra&&(h.jn_dept=`部门 / 职务不超过 ${Ra} 个字`);const C=Ja(he);C&&(h.jn_account=C),/^\d{6}$/.test(A.trim())||(h.jn_vcode="请输入 6 位验证码");const S=dt(Y);S&&(h.jn_pwd=S),z||(h.jn_consent="请阅读并同意隐私政策和使用条款");for(const t of["jn_code","jn_name","jn_dept","jn_account","jn_vcode","jn_pwd","jn_consent"])je(t);if(Se(),Object.keys(h).length>0){const t=Object.keys(h)[0];g.querySelector(`#au-${t}`)?.focus({preventScroll:!0});return}Ee=!0,ea("正在提交…","注册并申请加入");try{M=await e.registerAndJoin({inviteCode:x,displayName:fe.trim(),departmentTitle:Le.trim()||void 0,account:Qe(he),verificationCode:A.trim(),password:Y,consentAcceptedAt:new Date().toISOString()}),Ee=!1,Ye()}catch(t){Ee=!1,Z=t instanceof Error?t.message:"暂时无法提交申请，请稍后再试。",ea("正在提交…","注册并申请加入"),Se()}})}function Wa(g){Me.bind(g),Vt(g);const T=g.querySelector("#au-ap_org"),V=g.querySelector("#au-ap_prov"),se=g.querySelector("#au-ap_city"),I=g.querySelector("#au-ap_name"),Be=g.querySelector("#au-ap_dept"),b=g.querySelector("#au-ap_email"),k=g.querySelector("#au-ap_phone"),_=g.querySelector("#au-ap_sms"),x=g.querySelector("#au-ap_overview"),C=g.querySelector("#au-ap_overview-count"),S=g.querySelector("#au-ap_consent");T?.addEventListener("input",()=>{d=T.value,(h.ap_org||Z)&&(delete h.ap_org,Z="",je("ap_org"),Se())}),V?.addEventListener("change",()=>{v=V.value,V.classList.toggle("is-placeholder",!v);const t=mt(v);j=t.length===1?t[0]:"",se&&(se.disabled=!v,se.innerHTML=`<option value="" ${j?"":"selected"}>城市</option>`+t.map(o=>`<option value="${c(o)}" ${j===o?"selected":""}>${c(o)}</option>`).join(""),se.classList.toggle("is-placeholder",!j)),v&&j&&h.ap_region&&(delete h.ap_region,je("ap_region"))}),se?.addEventListener("change",()=>{j=se.value,se.classList.toggle("is-placeholder",!j),v&&j&&h.ap_region&&(delete h.ap_region,je("ap_region"))}),I?.addEventListener("input",()=>{ne=I.value,(h.ap_name||Z)&&(delete h.ap_name,Z="",je("ap_name"),Se())}),Be?.addEventListener("input",()=>{me=Be.value,h.ap_dept&&(delete h.ap_dept,je("ap_dept"))}),b?.addEventListener("input",()=>{Ce=b.value,(h.ap_email||Z)&&(delete h.ap_email,Z="",je("ap_email"),Se())}),k?.addEventListener("input",()=>{if(we=k.value,U){U="";const t=g.querySelector("#au-ap_phone-hint");t&&(t.textContent="");const o=g.querySelector('[data-role="ap-novcode-wrap"]');o&&(o.hidden=!0),Me.close(!1);const i=g.querySelector('[data-act="ap-send-code"]');i&&ae===0&&(i.textContent="获取验证码")}(h.ap_phone||Z)&&(delete h.ap_phone,Z="",je("ap_phone"),Se())}),_?.addEventListener("input",()=>{ee=_.value.replace(/\D/g,"").slice(0,6),_.value=ee,(h.ap_sms||Z)&&(delete h.ap_sms,Z="",je("ap_sms"),Se())}),x?.addEventListener("input",()=>{y=x.value;const t=ta(y);C&&(t>=da*.8?(C.textContent=`${t} / ${da}`,C.hidden=!1):C.hidden=!0),h.ap_overview&&t<=da&&(delete h.ap_overview,je("ap_overview"))}),S?.addEventListener("change",()=>{f=S.checked,f&&h.ap_consent&&(delete h.ap_consent,je("ap_consent"))}),g.querySelector('[data-act="ap-send-code"]')?.addEventListener("click",t=>{const o=ia(we);if(o){h.ap_phone=o,je("ap_phone"),k?.focus({preventScroll:!0});return}if(!f){O=()=>{f=!0,S&&(S.checked=!0),delete h.ap_consent,je("ap_consent"),La()},We("consent_ask",t.currentTarget);return}La()}),g.querySelector('form[data-reg-form="apply"]')?.addEventListener("submit",async t=>{if(t.preventDefault(),Ee)return;h={},Z="",d.trim()?ta(d.trim())>At&&(h.ap_org=`机构名称不超过 ${At} 个字`):h.ap_org="请输入机构名称",(!v||!j)&&(h.ap_region="请选择所在地区"),ne.trim()?ta(ne.trim())>ga&&(h.ap_name=`姓名不超过 ${ga} 个字`):h.ap_name="请输入姓名",ta(me.trim())>Ra&&(h.ap_dept=`部门 / 职务不超过 ${Ra} 个字`),Ta(Ce)||(h.ap_email="请输入有效的电子邮箱");const o=ia(we);o&&(h.ap_phone=o),/^\d{6}$/.test(ee.trim())||(h.ap_sms="请输入 6 位短信验证码"),ta(y)>da&&(h.ap_overview=`项目概况不超过 ${da} 个字`),f||(h.ap_consent="请阅读并同意隐私政策和使用条款");for(const i of["ap_org","ap_region","ap_name","ap_dept","ap_email","ap_phone","ap_sms","ap_overview","ap_consent"])je(i);if(Se(),Object.keys(h).length>0){const i=Object.keys(h)[0],l=i==="ap_region"?v?"au-ap_city":"au-ap_prov":`au-${i}`;g.querySelector(`#${l}`)?.focus({preventScroll:!0});return}Ee=!0,ea("正在提交…","提交开通申请");try{J=await e.submitOrgApplication({organizationName:d.trim(),province:v,city:j,contactName:ne.trim(),departmentTitle:me.trim()||void 0,email:Qe(Ce),phone:Qe(we),smsCode:ee.trim(),projectOverview:y.trim()||void 0,consentAcceptedAt:new Date().toISOString()}),Ee=!1,Ye()}catch(i){Ee=!1,Z=i instanceof Error?i.message:"暂时无法提交开通申请，请稍后再试。",ea("正在提交…","提交开通申请"),Se()}})}function oa(){Me.close(!1);const g=a.querySelector('[data-role="reg-body-host"]');g&&(n==="join"?(g.innerHTML=ze(),Ha(g)):(g.innerHTML=ma(),Wa(g)))}function la(g,T=!1){n===g||Ee||(n=g,h={},Z="",a.querySelectorAll('[data-act="switch-reg-tab"]').forEach(V=>{const se=V.dataset.tab===g;V.setAttribute("aria-selected",String(se)),V.tabIndex=se?0:-1,se&&T&&V.focus({preventScroll:!0})}),$e(!0),oa(),a.querySelector(".au-left")?.scrollTo({top:0}))}function Ga(){if(J)return{title:"开通申请已提交 · PACOM Station",bodyHtml:`
          <div class="au-status-badge" aria-hidden="true">${rt}</div>
          <h1 class="au-h1">开通申请已提交</h1>
          <p class="au-lead">审核通常需要 1–2 个工作日，通过后将开通链接发送至你的邮箱。</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">申请单号</span><span class="au-summary-v is-mono">${c(J.applicationId)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">申请机构</span><span class="au-summary-v">${c(J.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">所在地区</span><span class="au-summary-v">${c(J.region)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">通知邮箱</span><span class="au-summary-v">${c(J.maskedEmail)}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct">需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button></p>
          </div>
        `};const g=M;return{title:"加入申请已提交 · PACOM Station",bodyHtml:`
        <div class="au-status-badge" aria-hidden="true">${rt}</div>
        <h1 class="au-h1">加入申请已提交</h1>
        <p class="au-lead"><b>${c(g.organizationName)}</b>的机构管理员批准后，你会收到通知，届时即可登录访问。</p>
        <div class="au-summary-card">
          <div class="au-summary-row"><span class="au-summary-k">申请单号</span><span class="au-summary-v is-mono">${c(g.requestId)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${c(g.organizationName)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">登录账号</span><span class="au-summary-v">${c(g.maskedAccount)}</span></div>
        </div>
        <div class="au-ferr" id="au-reg-ferr" role="alert" ${Z?"":"hidden"}>
          ${fa}
          <span data-role="ferr-text">${c(Z)}</span>
        </div>
        <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
        <div class="au-login-actions">
          <div class="au-login-divider" aria-hidden="true"></div>
          <p class="au-noacct">
            ${e.withdrawJoinApplication?`<button type="button" class="au-inline" data-act="withdraw-join" ${re?"disabled":""}>${re?"正在撤回…":"撤回申请"}</button><span class="au-dot-sep">·</span>`:""}
            需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button>
          </p>
        </div>
      `}}function aa(g){N=g,ge!==null&&window.clearInterval(ge),ge=window.setInterval(()=>{N-=1,N<=0&&(N=0,ge!==null&&(window.clearInterval(ge),ge=null));const T=a.querySelector('[data-act="iv-send-sec"]');T&&(T.disabled=N>0,T.textContent=N>0?`${N} 秒后重发`:de?"重新获取":"获取验证码")},1e3)}function ja(g){return g.requiredSecondaryChannel!==void 0?g.requiredSecondaryChannel:ba(g.kind,g.role,g.targetChannel)}function xa(g){return Qe(g).toLowerCase().replace(/[\s\-()]/g,"")}function Za(g,T){if(!g)return!1;const V=xa(T.targetValue);if(!V)return!1;const se=T.targetChannel==="email"?g.email:g.phone;return!!se&&xa(se)===V}async function Aa(g){const T=g==="phone"?ia(X):Ta(X)?"":"请输入有效的电子邮箱";if(T){h.iv_sec=T,je("iv_sec"),a.querySelector("#au-iv_sec")?.focus({preventScroll:!0});return}delete h.iv_sec,je("iv_sec");const V=a.querySelector('[data-act="iv-send-sec"]');V&&(V.disabled=!0,V.textContent="发送中…");try{const se=await e.sendVerificationCode({target:Qe(X),purpose:"bind",consentAcceptedAt:new Date().toISOString()});if(r)return;de=se.maskedTarget||ya(X);const I=a.querySelector("#au-iv_sec-hint");I&&(I.textContent=`验证码已发送至 ${de}`);const Be=a.querySelector('[data-role="iv-novcode-wrap"]');Be&&(Be.hidden=!1),aa(se.cooldownSeconds||60),V&&(V.disabled=!0,V.textContent=`${N} 秒后重发`),a.querySelector("#au-iv_seccode")?.focus({preventScroll:!0})}catch(se){if(r)return;V&&(V.disabled=!1,V.textContent=de?"重新获取":"获取验证码"),Z=se instanceof Error?se.message:"暂时无法发送验证码，请稍后再试。",Se()}}function Ka(){if(Q)return{title:"验证邀请 · PACOM Station",bodyHtml:`
          <h1 class="au-h1">正在核验邀请链接…</h1>
          <p class="au-lead">请稍候，正在确认所属机构与授权信息。</p>
        `};if(F&&F.status==="accepted")return{title:"邀请已生效 · PACOM Station",bodyHtml:`
          <h1 class="au-h1">邀请已被接受</h1>
          <p class="au-lead">该邀请链接已完成激活，你可以直接登录访问<b>${c(F.organizationName)}</b>。</p>
          <button type="button" class="au-primary" data-act="${ce?"iv-back-ws":"back-login"}"><span>${ce?"进入工作区":"前往登录"}</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct">需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button></p>
          </div>
        `};if(B||!F||F.status!=="pending")return{title:"邀请已失效 · PACOM Station",bodyHtml:`
          <h1 class="au-h1">邀请已失效</h1>
          <p class="au-lead">${B?c(B):F?.inviterName&&F?.organizationName?`${c(F.inviterName)}邀请你加入<b>${c(F.organizationName)}</b>，但该邀请已过期或已撤销。`:"邀请链接无效、已过期或已撤销，请联系邀请人或机构管理员重新发送。"}</p>
          <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct">需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button></p>
          </div>
        `};const g=F,T=g.kind==="owner",V=T?"开通机构":"加入机构",se=g.targetChannel==="phone"?"受邀手机号码":"受邀电子邮箱";if(ce){if(Za(ce,g)){const x=T?`<b>${c(g.organizationName)}</b>已审核通过，确认后即可开通并成为机构管理员。<span class="au-lead-meta">有效期至 ${c(g.expiresAt)}</span>`:`${c(g.inviterName||"机构管理员")}邀请你以${c(g.roleLabel||"成员")}身份加入<b>${c(g.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${c(g.expiresAt)}</span>`;return{title:`${V} · PACOM Station`,bodyHtml:`
            <h1 class="au-h1">${V}</h1>
            <p class="au-lead">${x}</p>
            <div class="au-summary-card">
              <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${c(g.organizationName)}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${c(g.roleLabel||"成员")}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v">${c(ce.displayName)}（${c(g.targetValue)}）</span></div>
            </div>
            <div class="au-ferr" id="au-reg-ferr" role="alert" ${Z?"":"hidden"}>
              ${fa}
              <span data-role="ferr-text">${c(Z)}</span>
            </div>
            <button type="button" class="au-primary" data-act="iv-confirm-join" ${Ee?"disabled":""}>
              ${Ee?'<span class="au-spinner" aria-hidden="true"></span><span>正在加入…</span>':`<span>${T?"确认开通":"确认加入"}</span>`}
            </button>
            <div class="au-login-actions">
              <div class="au-login-divider" aria-hidden="true"></div>
              <p class="au-noacct"><button type="button" class="au-inline" data-act="iv-back-ws">返回工作区</button></p>
            </div>
          `}}const _=ya(g.targetValue);return{title:"当前账户不是受邀账户 · PACOM Station",bodyHtml:`
          <h1 class="au-h1">当前账户不是受邀账户</h1>
          <p class="au-lead">${c(g.inviterName||"机构管理员")}邀请 <b>${c(_)}</b> 加入${c(g.organizationName)}，与当前登录账户不一致。</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">当前登录</span><span class="au-summary-v">${c(ce.displayName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">受邀账号</span><span class="au-summary-v">${c(_)}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="iv-switch-account"><span>切换账户登录</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct"><button type="button" class="au-inline" data-act="iv-back-ws">返回工作区</button></p>
          </div>
        `}}if(g.accountExists){const _=T?`该账号已注册，请登录后完成<b>${c(g.organizationName)}</b>开通。`:`该账号已注册，请登录后以${c(g.roleLabel||"成员")}身份加入<b>${c(g.organizationName)}</b>。`;return{title:`${V} · PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${V}</h1>
          <p class="au-lead">${_}</p>
          <div class="au-field">
            <div class="au-lab"><span class="au-lab-t">${se}</span></div>
            <div class="au-locked-card">
              <span class="au-locked-val">${c(g.targetValue)}</span>
              <span class="au-locked-tag">${ct}<span>已有账户</span></span>
            </div>
          </div>
          <button type="button" class="au-primary" data-act="iv-go-login"><span>前往登录</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct">需要帮助？<button type="button" class="au-inline" data-act="open-contact">联系我们</button></p>
          </div>
        `}}const I=T?`<b>${c(g.organizationName)}</b>已审核通过，请设置登录密码完成开通。<span class="au-lead-meta">有效期至 ${c(g.expiresAt)}</span>`:`${c(g.inviterName||"机构管理员")}邀请你以${c(g.roleLabel||"成员")}身份加入<b>${c(g.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${c(g.expiresAt)}</span>`,Be=T?"激活并进入工作区":"注册并加入",b=ja(g),k=b?(()=>{const _=b==="phone",x=_?"手机号码":"电子邮箱",C=_?"用于新设备登录、敏感操作与重置密码时的身份验证。":"机构管理员须绑定电子邮箱，用于接收订单、续费与安全通知。",S=_?"短信验证码":"邮件验证码",t=_?"请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。":"请确认电子邮箱无误并检查垃圾邮件箱；如仍未收到，可点击页脚「联系我们」获取协助。";return`
            <div class="au-field ${h.iv_sec?"bad":""}" data-f="iv_sec">
              <div class="au-lab au-label-row">
                <span class="au-lab-group">
                  <label for="au-iv_sec">${x}</label>
                  ${Ca("au-iv-sec-info",`${x}说明`,[C])}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_sec" name="iv_sec" class="au-in has-code-btn" type="${_?"tel":"email"}" inputmode="${_?"tel":"email"}" autocomplete="${_?"tel":"email"}" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(X)}" aria-invalid="${h.iv_sec?"true":"false"}" />
                <button type="button" class="au-suffix au-getcode" data-act="iv-send-sec" ${N>0?"disabled":""}>
                  ${N>0?`${N} 秒后重发`:de?"重新获取":"获取验证码"}
                </button>
              </div>
              <p class="au-err" id="au-iv_sec-err" aria-live="polite">${c(h.iv_sec??"")}</p>
              <p class="au-hint" id="au-iv_sec-hint" role="status" aria-live="polite">${de?`验证码已发送至 ${c(de)}`:""}</p>
            </div>

            <div class="au-field ${h.iv_seccode?"bad":""}" data-f="iv_seccode">
              <div class="au-lab">
                <label for="au-iv_seccode">${S}</label>
                <span data-role="iv-novcode-wrap" ${de?"":"hidden"}>
                  <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-iv-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-iv-novcode-pop"><span>收不到验证码？</span></button>
                  <span id="au-iv-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
                    <span class="ws-info-text">${t}</span>
                  </span>
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_seccode" name="iv_seccode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(oe)}" aria-invalid="${h.iv_seccode?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_seccode-err" aria-live="polite">${c(h.iv_seccode??"")}</p>
            </div>
          `})():"";return{title:`${V} · PACOM Station`,bodyHtml:`
        <h1 class="au-h1">${V}</h1>
        <p class="au-lead">${I}</p>
        <form class="au-compact-form au-reg-form" data-reg-form="invite" novalidate>
          <fieldset ${Ee?"disabled":""}>
            <div class="au-field">
              <div class="au-lab"><span class="au-lab-t">${se}</span></div>
              <div class="au-locked-card">
                <span class="au-locked-val">${c(g.targetValue)}</span>
                <span class="au-locked-tag">${ct}<span>已核验锁定</span></span>
              </div>
              ${T&&g.verifiedSecondaryMasked?`<p class="au-locked-sub">已核验绑定手机：${c(g.verifiedSecondaryMasked)}</p>`:""}
            </div>

            <div class="au-field ${h.iv_name?"bad":""}" data-f="iv_name">
              <div class="au-lab"><label for="au-iv_name">姓名</label></div>
              <div class="au-ctl">
                <input id="au-iv_name" name="iv_name" class="au-in" type="text" autocomplete="name" value="${c(H)}" aria-invalid="${h.iv_name?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_name-err" aria-live="polite">${c(h.iv_name??"")}</p>
            </div>

            ${k}

            <div class="au-field ${h.iv_pwd?"bad":""}" data-f="iv_pwd">
              <div class="au-lab au-label-row">
                <span class="au-lab-group">
                  <label for="au-iv_pwd">设置密码</label>
                  ${Ca("au-iv-pwd-info","设置密码说明",ut)}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_pwd" name="iv_pwd" class="au-in has-suffix" type="${Ie?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(pe)}" aria-invalid="${h.iv_pwd?"true":"false"}" />
                <button type="button" class="au-suffix au-eye" data-act="iv-toggle-eye" aria-controls="au-iv_pwd" aria-label="${Ie?"隐藏密码":"显示密码"}">
                  ${Ie?$a:ha}
                </button>
              </div>
              <p class="au-err" id="au-iv_pwd-err" aria-live="polite">${c(h.iv_pwd??"")}</p>
            </div>

            ${Ke("au-iv_consent","iv_consent",ue,"iv_consent")}

            <div class="au-ferr" id="au-reg-ferr" role="alert" ${Z?"":"hidden"}>
              ${fa}
              <span data-role="ferr-text">${c(Z)}</span>
            </div>

            <button type="submit" class="au-primary au-compact-primary" ${Ee?"disabled":""}>
              ${Ee?'<span class="au-spinner" aria-hidden="true"></span><span>正在激活…</span>':`<span>${Be}</span>`}
            </button>
          </fieldset>
        </form>
        <div class="au-login-actions">
          <div class="au-login-divider" aria-hidden="true"></div>
          <p class="au-noacct">已有账户？<button type="button" class="au-inline" data-act="back-login">登录</button></p>
        </div>
      `}}function Ya(){Me.bind(a),a.querySelector('[data-act="iv-back-ws"]')?.addEventListener("click",()=>{Ve(),s.onBackToWorkspace?s.onBackToWorkspace():s.onBackToLogin()}),a.querySelector('[data-act="iv-go-login"]')?.addEventListener("click",()=>{if(!F)return;const x=`#invite?token=${encodeURIComponent(F.token)}`,C=F.kind==="owner"?`登录后开通${F.organizationName}`:`登录后加入${F.organizationName}`;Ve(),s.onGoLoginForInvite?s.onGoLoginForInvite(F.targetValue,C,x):s.onBackToLogin()}),a.querySelector('[data-act="iv-switch-account"]')?.addEventListener("click",()=>{if(!F)return;const x=`#invite?token=${encodeURIComponent(F.token)}`;Ve(),s.onSwitchAccountForInvite?s.onSwitchAccountForInvite(x):s.onBackToLogin()}),a.querySelector('[data-act="iv-confirm-join"]')?.addEventListener("click",async()=>{if(!(Ee||!F)){Ee=!0,Z="",Ye();try{const x=await e.acceptInvitation({token:F.token});if(r)return;Ve(),s.onAuthenticated(x)}catch(x){if(r)return;Ee=!1,Z=x instanceof Error?x.message:"暂时无法确认加入，请稍后再试。",Ye()}}});const g=a.querySelector('form[data-reg-form="invite"]');if(!g||!F)return;const T=a.querySelector("#au-iv_name"),V=a.querySelector("#au-iv_sec"),se=a.querySelector("#au-iv_seccode"),I=a.querySelector("#au-iv_pwd"),Be=a.querySelector("#au-iv_consent"),k=F.kind==="owner"?"激活并进入工作区":"注册并加入",_=ja(F);T?.addEventListener("input",()=>{H=T.value,(h.iv_name||Z)&&(delete h.iv_name,Z="",je("iv_name"),Se())}),V?.addEventListener("input",()=>{if(X=V.value,de){de="";const x=a.querySelector("#au-iv_sec-hint");x&&(x.textContent="");const C=a.querySelector('[data-role="iv-novcode-wrap"]');C&&(C.hidden=!0),Me.close(!1);const S=a.querySelector('[data-act="iv-send-sec"]');S&&N===0&&(S.textContent="获取验证码")}(h.iv_sec||Z)&&(delete h.iv_sec,Z="",je("iv_sec"),Se())}),se?.addEventListener("input",()=>{oe=se.value.replace(/\D/g,"").slice(0,6),se.value=oe,(h.iv_seccode||Z)&&(delete h.iv_seccode,Z="",je("iv_seccode"),Se())}),I?.addEventListener("input",()=>{pe=I.value,(h.iv_pwd||Z)&&(delete h.iv_pwd,Z="",je("iv_pwd"),Se())}),Be?.addEventListener("change",()=>{ue=Be.checked,ue&&h.iv_consent&&(delete h.iv_consent,je("iv_consent"))}),a.querySelector('[data-act="iv-send-sec"]')?.addEventListener("click",x=>{if(!_)return;const C=_==="phone"?ia(X):Ta(X)?"":"请输入有效的电子邮箱";if(C){h.iv_sec=C,je("iv_sec"),V?.focus({preventScroll:!0});return}if(!ue){O=()=>{ue=!0,Be&&(Be.checked=!0),delete h.iv_consent,je("iv_consent"),Aa(_)},We("consent_ask",x.currentTarget);return}Aa(_)}),a.querySelector('[data-act="iv-toggle-eye"]')?.addEventListener("click",x=>{Ie=!Ie;const C=x.currentTarget;if(I){const S=I.selectionStart,t=I.selectionEnd;I.type=Ie?"text":"password",I.focus({preventScroll:!0}),S!==null&&t!==null&&I.setSelectionRange(S,t)}C.setAttribute("aria-label",Ie?"隐藏密码":"显示密码"),C.innerHTML=Ie?$a:ha}),g.addEventListener("submit",async x=>{if(x.preventDefault(),Ee||!F)return;if(h={},Z="",H.trim()?ta(H.trim())>ga&&(h.iv_name=`姓名不超过 ${ga} 个字`):h.iv_name="请输入姓名",_){const t=_==="phone"?ia(X):Ta(X)?"":"请输入有效的电子邮箱";t&&(h.iv_sec=t),/^\d{6}$/.test(oe.trim())||(h.iv_seccode=_==="phone"?"请输入 6 位短信验证码":"请输入 6 位邮件验证码")}const C=dt(pe);C&&(h.iv_pwd=C),ue||(h.iv_consent="请阅读并同意隐私政策和使用条款");const S=_?["iv_name","iv_sec","iv_seccode","iv_pwd","iv_consent"]:["iv_name","iv_pwd","iv_consent"];for(const t of S)je(t);if(Se(),Object.keys(h).length>0){const t=Object.keys(h)[0];a.querySelector(`#au-${t}`)?.focus({preventScroll:!0});return}Ee=!0,ea("正在激活…",k);try{const t=await e.acceptInvitation({token:F.token,displayName:H.trim(),password:pe,consentAcceptedAt:new Date().toISOString(),..._?{secondaryContact:Qe(X),secondaryVerificationCode:oe.trim()}:{}});Ve(),s.onAuthenticated(t)}catch(t){Ee=!1,Z=t instanceof Error?t.message:"暂时无法完成激活，请稍后再试。",ea("正在激活…",k),Se()}})}function Ye(){P?.(),P=null,Me.close(!1);let g="";if(M||J){const T=Ga();document.title=T.title,g=T.bodyHtml}else if(K){const T=Ka();document.title=T.title,g=T.bodyHtml}else document.title="注册 · PACOM Station",g=`
        <h1 class="au-h1">注册</h1>
        <div class="au-mode-seg" role="tablist" aria-label="注册方式" data-role="reg-seg">
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
      <div class="au au-split au-auth-shell au-reg-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${qt}</div>
              ${g}
            </main>
          </div>
          ${Ot()}
        </section>
        <aside class="au-art" aria-hidden="true">
          <div class="au-art-frame">
            <img src="./media/auth-hero.jpg" alt="" />
          </div>
        </aside>
      </div>
      <div data-role="modal-host"></div>
    `,a.querySelectorAll('[data-act="back-login"]').forEach(T=>{T.addEventListener("click",()=>{Ve(),s.onBackToLogin()})}),a.querySelectorAll('[data-act="open-contact"]').forEach(T=>{T.addEventListener("click",V=>{E=!1,We("contact",V.currentTarget)})}),a.querySelector('[data-act="withdraw-join"]')?.addEventListener("click",async()=>{if(!(!M||!e.withdrawJoinApplication||re)){re=!0,Z="",Ye();try{if(await e.withdrawJoinApplication(M.requestId),r)return;re=!1,M=null,Ye()}catch(T){if(r)return;re=!1,Z=T instanceof Error?T.message:"暂时无法撤回申请，请稍后再试。",Ye()}}}),!M&&!J&&!K?(a.querySelectorAll('[data-act="switch-reg-tab"]').forEach(T=>{T.addEventListener("click",()=>{const V=T.dataset.tab;V&&la(V,!1)}),T.addEventListener("keydown",V=>{const se=na.indexOf(n);V.key==="ArrowRight"?(V.preventDefault(),la(na[(se+1)%na.length],!0)):V.key==="ArrowLeft"?(V.preventDefault(),la(na[(se-1+na.length)%na.length],!0)):V.key==="Home"?(V.preventDefault(),la(na[0],!0)):V.key==="End"&&(V.preventDefault(),la(na[na.length-1],!0))})}),oa(),$e(!1),document.fonts?.ready.then(()=>{r||$e(!1)})):K&&!Q&&Ya(),P=Dt(a)}Ye(),K&&!M&&!J?(async()=>{try{const g=await e.getInvitationPreview(K);if(r)return;F=g,H=g.prefillName??"",Q=!1,Ye()}catch(g){if(r)return;Q=!1,B=g instanceof Error?g.message:"暂时无法读取邀请信息，请稍后再试。",Ye()}})():W.replace(/\D/g,"").length===9&&ua(W)}function Ma(a){const e=a.replace(/^#\/?/,"").split("?")[0]??"";return e==="login"||e==="register"||e==="join"||e==="apply"||e==="invite"}function Na(a){const e=a.replace(/^#\/?/,""),[s="",r=""]=e.split("?"),n=new URLSearchParams(r);if(s==="invite")return{kind:"invite",inviteToken:n.get("token")??"member-demo"};if(s==="register"||s==="join"||s==="apply"){const p=n.get("tab");return{kind:"register",initialMode:s==="apply"||p==="apply"?"apply":"join",prefillCode:n.get("code")??void 0}}return{kind:"login"}}const fs=["org_admin","project_admin","operator","space_user"],Pa=[{key:"login",label:"登录页",pillLabel:"登录页",group:"auth",hash:"#login",sessionRole:null},{key:"reg-join",label:"注册 · 加入已有机构",pillLabel:"注册页",group:"auth",hash:"#register",sessionRole:null},{key:"reg-apply",label:"注册 · 申请开通机构",pillLabel:"申请开通",group:"auth",hash:"#apply",sessionRole:null},{key:"status-join",label:"状态页 · 加入申请已提交",pillLabel:"加入已提交",group:"auth",hash:"#register",sessionRole:null,joinReceipt:{requestId:"REQ-20261127-8421",organizationName:"广州国家实验室",maskedAccount:"138 •••• 8000",status:"pending_approval",submittedAt:"2026-11-27T09:30:00Z"}},{key:"status-apply",label:"状态页 · 开通申请已提交",pillLabel:"开通已提交",group:"auth",hash:"#apply",sessionRole:null,applyReceipt:{applicationId:"APP-20261127-3902",organizationName:"广州天环智能科技有限公司",region:"广东省 广州市",maskedEmail:"c•••@company.com",status:"pending_review",submittedAt:"2026-11-27T09:35:00Z"}},{key:"inv-member",label:"成员邀请 · 免补绑",pillLabel:"成员邀请",group:"invite",hash:"#invite?token=member-demo",sessionRole:null},{key:"inv-admin-email",label:"机构管理员 · 邮箱补手机",pillLabel:"管理员补手机",group:"invite",hash:"#invite?token=admin-email",sessionRole:null},{key:"inv-admin-phone",label:"机构管理员 · 手机补邮箱",pillLabel:"管理员补邮箱",group:"invite",hash:"#invite?token=admin-phone",sessionRole:null},{key:"inv-proj-email",label:"项目管理员 · 邮箱补手机",pillLabel:"项管补手机",group:"invite",hash:"#invite?token=project-admin-email",sessionRole:null},{key:"inv-owner",label:"审核通过 · 开通机构",pillLabel:"开通机构",group:"invite",hash:"#invite?token=owner-demo",sessionRole:null},{key:"inv-existing",label:"已有账户受邀 · 引导登录",pillLabel:"老用户分流",group:"invite",hash:"#invite?token=existing-demo",sessionRole:null},{key:"inv-signed-match",label:"已登录 · 本人确认加入",pillLabel:"确认加入",group:"invite",hash:"#invite?token=existing-demo",sessionRole:"operator"},{key:"inv-signed-mismatch",label:"已登录 · 账户不一致拦截",pillLabel:"错号拦截",group:"invite",hash:"#invite?token=member-demo",sessionRole:"org_admin"},{key:"inv-expired",label:"邀请已失效",pillLabel:"邀请已失效",group:"invite",hash:"#invite?token=expired",sessionRole:null}];async function bs(a){const e=new Wt;let s=await e.getSession(),r="login",n="",p="",E="",D=!1;document.querySelector("[data-demo-fab-root]")?.remove();const O=document.createElement("div");O.className="pacom-demo-fab-wrap",O.dataset.demoFabRoot="1",document.body.appendChild(O);function M(K,ce){const Q=K.trim();if(Q==="#login")return"login";if(Q==="#apply"||Q==="#register?tab=apply")return"reg-apply";if(Q.startsWith("#register")||Q.startsWith("#join"))return"reg-join";if(Q.startsWith("#invite")){const B=Na(Q).inviteToken??"";return B==="expired"?"inv-expired":B.startsWith("owner")?"inv-owner":B==="admin-email"?"inv-admin-email":B==="admin-phone"?"inv-admin-phone":B==="project-admin-email"?"inv-proj-email":B==="existing-demo"?ce?"inv-signed-match":"inv-existing":ce?"inv-signed-mismatch":"inv-member"}return""}function J(){const K=Pa.find(H=>H.key===p),ce=r==="app"?s?Ue[s.role]:"未登录":K?.pillLabel??(r==="login"?"登录页":r==="register"?"注册页":"邀请激活"),Q=Pa.filter(H=>H.group==="auth"),F=Pa.filter(H=>H.group==="invite"),B=H=>{const X=r!=="app"&&p===H.key;return`
        <button type="button" class="pacom-demo-role-btn" aria-pressed="${X}" data-demo-preset="${H.key}">
          <span>${H.label}</span>
          ${X?ke("check",14):"<span>→</span>"}
        </button>`};O.innerHTML=`
      ${D?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">独立演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">邀请码 482 916 305 · 任意 6 位验证码</span>
            <div class="pacom-demo-fab-roles">
              <span class="pacom-demo-fab-sec-title">工作区角色（4 级 RBAC）</span>
              ${fs.map(H=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${r==="app"&&s?.role===H}" data-demo-pick="${H}">
                    <span>${Ue[H]}</span>
                    ${r==="app"&&s?.role===H?ke("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">认证与注册页</span>
              ${Q.map(B).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">定向邀请与异常态</span>
              ${F.map(B).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <a class="pacom-demo-link" href="./index.html">
                <span>前往纯生产入口（index.html）</span>
                <span>→</span>
              </a>
            </div>
          </div>`:""}
      <button type="button" class="pacom-demo-fab-pill" aria-expanded="${D}" data-demo-fab-toggle="1" title="切换演示角色或查看认证页面">
        <span class="pacom-demo-fab-dot" aria-hidden="true"></span>
        <span>演示</span>
        <span class="pacom-demo-fab-role">${ce}</span>
        ${ke(D?"chevron-down":"chevrons-up-down",12)}
      </button>
    `,O.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",H=>{H.stopPropagation(),D=!D,J()}),O.querySelectorAll("[data-demo-pick]").forEach(H=>{H.addEventListener("click",async()=>{const X=H.dataset.demoPick;X&&(D=!1,s=await e.switchDemoRole(X),await P(s))})}),O.querySelectorAll("[data-demo-preset]").forEach(H=>{H.addEventListener("click",async()=>{const X=H.dataset.demoPreset,oe=Pa.find(de=>de.key===X);oe&&(D=!1,E="",oe.sessionRole&&(s=await e.switchDemoRole(oe.sessionRole)),await re(oe.hash,oe.sessionRole===null,{presetKey:oe.key,initialJoinReceipt:oe.joinReceipt??null,initialApplyReceipt:oe.applyReceipt??null}))})})}document.addEventListener("click",K=>{D&&(K.target?.closest("[data-demo-fab-root]")||(D=!1,J()))}),document.addEventListener("keydown",K=>{K.key==="Escape"&&D&&(D=!1,J())});async function re(K,ce,Q){us(a),jt(a),Ct(a),ce&&s&&(await e.logout(),s=null);const F=Na(K);if(r=F.kind,n=K,p=Q?.presetKey??M(K,!!s),window.location.hash!==K&&(window.location.hash=K),J(),F.kind==="register"||F.kind==="invite"){gs(a,e,{initialMode:F.initialMode,prefillCode:F.prefillCode,inviteToken:F.inviteToken,currentSession:F.kind==="invite"?s:null,initialJoinReceipt:Q?.initialJoinReceipt??null,initialApplyReceipt:Q?.initialApplyReceipt??null,onBackToLogin:()=>{E="",re("#login",!1)},onGoLoginForInvite:(B,H,X)=>{E=X,re("#login",!1,{prefillAccount:B,notice:H})},onSwitchAccountForInvite:B=>{E=B,re("#login",!0,{notice:"请使用受邀账户登录"})},onBackToWorkspace:()=>{s?P(s):re("#login",!1)},onAuthenticated:B=>{E="",P(B)}});return}vs(a,e,B=>{if(s=B,E){const H=E;E="",re(H,!1);return}P(B)},{prefillAccount:Q?.prefillAccount,notice:Q?.notice,onOpenRegister:()=>{E="",re("#register",!1)}})}async function P(K){jt(a),Ct(a),s=K,r="app",n="",p="",J(),(!window.location.hash||Ma(window.location.hash))&&(window.location.hash="#home"),await ms(a,e,K,()=>{E="",re("#login",!0)})}if(window.addEventListener("hashchange",()=>{if(Ma(window.location.hash)){if(window.location.hash===n)return;const K=Na(window.location.hash);(r!==K.kind||window.location.hash!==n)&&re(window.location.hash,r==="app"&&K.kind!=="invite")}}),!s||Ma(window.location.hash)){const K=Ma(window.location.hash)?window.location.hash:"#login",ce=Na(K);await re(K,!!(s&&ce.kind!=="invite"));return}await P(s)}async function hs(){const a=document.getElementById("app");if(a)try{await bs(a)}catch(e){a.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(e)}</div></div>`}}hs();
