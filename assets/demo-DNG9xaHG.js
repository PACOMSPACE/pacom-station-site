import{E as I,r as Se,a as Ua,e as c,b as Va,g as Ha,s as da,m as Bt,c as Ut,d as Ft,P as zt,I as dt,A as va,f as Rt,n as Je,h as Mt,i as fa,C as lt,j as $a,k as ba,l as ha,v as oa,o as rt,p as Nt,q as pt,S as Qa,t as Vt,u as ut,L as mt,w as Ta,x as qa,y as ta,z as vt,B as gt,D as Oa,F as ft,G as Xa,H as bt,J as ht,O as Ht,K as Wt}from"./auth-shared-DhGBIgnH.js";import{R as Be,g as ga,a as yt}from"./contracts-Z0w12vLk.js";function Gt(){const a="2026-11-25T09:00:00Z",e=[];for(let p=1;p<=22;p+=1){const E=p===7?I.floorId:p===8?I.lockedFloor8Id:p===6?I.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${p}`,F=String(p).padStart(2,"0");e.push({id:E,buildingId:I.buildingId,kind:"above",level:p,name:`${p}F`,areaSqm:p===7?1383.1:p===1?2680:p<=4?1920:1480,plan:{floorId:E,imageUrl:`./media/floors/e/${F}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}})}const s="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";e.push({id:s,buildingId:I.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:s,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}});const r=[];for(let p=1;p<=12;p+=1){const E=`structure-f-above-${p}`,F=String(p).padStart(2,"0");r.push({id:E,buildingId:I.buildingFId,kind:"above",level:p,name:`${p}F`,areaSqm:p===1?2450:p<=3?2100:1580,plan:{floorId:E,imageUrl:`./media/floors/f/${F}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}})}const l="structure-f-roof-1";return r.push({id:l,buildingId:I.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:l,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:a}}),{projects:[{id:I.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:a},imageUrl:"./media/gzlab.jpg"},{id:I.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:a},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:I.buildingId,projectId:I.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:I.buildingFId,projectId:I.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...e,...r],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:I.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:I.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:I.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:I.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:s,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:l,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Pt=Gt(),$t=Pt.floors.map(a=>a.id),We={org_admin:{userId:"demo-org-admin",displayName:"林致远",email:"lin.zhiyuan@pacom.cn",phone:"13800138001",role:"org_admin",roleLabel:Be.org_admin,authMode:"demo",scope:{allowedProjectIds:[I.projectId,I.project1Id],allowedBuildingIds:[I.buildingId,I.buildingFId],allowedFloorIds:[...$t],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",email:"chen.mingxuan@pacom.cn",phone:"13800138002",role:"project_admin",roleLabel:Be.project_admin,authMode:"demo",scope:{allowedProjectIds:[I.projectId],allowedBuildingIds:[I.buildingId,I.buildingFId],allowedFloorIds:[...$t],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",email:"zhou.ning@pacom.cn",phone:"13800138003",role:"operator",roleLabel:Be.operator,authMode:"demo",scope:{allowedProjectIds:[I.projectId],allowedBuildingIds:[I.buildingId],allowedFloorIds:[I.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",email:"shen.jia@pacom.cn",phone:"13800138004",role:"space_user",roleLabel:Be.space_user,authMode:"demo",scope:{allowedProjectIds:[I.projectId],allowedBuildingIds:[I.buildingId],allowedFloorIds:[I.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},ua="pacom.web.demo.role",wt="pacom.web.demo.spatial.v5",St="pacom.web.demo.orgs.v1",xt="pacom.web.demo.activeOrg.v1",Ye="org-gzlab";class Zt{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;inviteMissTimestamps=[];inviteLockedUntil=0;sentCodeTargets=new Set;joinReceipts=new Map;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;constructor(){this.orgs=this.loadOrgs();const e=typeof localStorage<"u"?localStorage.getItem(xt):null,s=this.orgs.find(p=>p.id===e)??this.orgs[0];this.activeOrgId=s.id,this.spatial=s.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const r=typeof sessionStorage<"u"?sessionStorage.getItem(ua):null;r&&We[r]&&(this.activeSession=structuredClone(We[r]),this.applyOverridesToSession());const l=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:I.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:l,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:I.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:I.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:I.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:l,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:l,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:l,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:I.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:l,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:I.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:l,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:l,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:l,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:l},{id:"conn-e7f-dali",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:l},{id:"conn-e7f-modbus",projectId:I.projectId,buildingId:I.buildingId,floorId:I.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:I.projectId,floorId:I.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:I.projectId,floorId:I.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:I.projectId,floorId:I.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:I.projectId,floorId:I.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:I.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:I.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:I.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:l,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:I.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:I.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:I.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:I.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(We).map((p,E)=>({userId:p.userId,displayName:p.displayName,email:`${p.role.replaceAll("_",".")}@gzlab.ac.cn`,role:p.role,roleLabel:p.roleLabel,scopeSummary:p.scope.allowedZoneIds?.length?`E栋 7F（${p.scope.allowedZoneIds.length} 个授权功能区）`:`${p.scope.allowedProjectIds.length} 项目 / ${p.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:E===0?l:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const e=Date.now();for(const s of this.overrides)s.status==="active"&&new Date(s.expiresAt).getTime()<=e&&(s.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const e=We[this.activeSession.role].scope,s=this.overrides.filter(r=>r.targetUserId===this.activeSession.userId&&r.status==="active");this.activeSession.scope.activeOverrides=structuredClone(s),this.activeSession.scope.canEditDeployment=e.canEditDeployment||s.some(r=>r.module==="deployment"),this.activeSession.scope.canEditSettings=e.canEditSettings||s.some(r=>r.module==="settings")}record(e,s,r,l,p){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:s,endpoint:r,request:p,response:l}),this.traces.length>40&&this.traces.pop()}pushAudit(e,s,r,l){const p=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:p?.displayName??"anonymous",role:p?.role??"space_user",action:e,target:s,result:r,detail:l})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=e.account.toLowerCase(),r=s.includes("org")||s.includes("admin")?"org_admin":s.includes("proj")?"project_admin":s.includes("space")||s.includes("member")?"space_user":"operator";return this.activeSession=structuredClone(We[r]),this.applyOverridesToSession(),sessionStorage.setItem(ua,r),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(ua),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}maskTarget(e){const s=e.trim();if(s.includes("@")){const[l,p]=s.split("@");return l&&p?`${l[0]}•••@${p}`:"••••"}const r=s.replace(/\D/g,"");return r.length===11?`${r.slice(0,3)} •••• ${r.slice(7)}`:r.length>=6?`${r.slice(0,3)} •••• ${r.slice(-4)}`:"••••"}async sendVerificationCode(e){const s=e.target.trim(),r=s.includes("@")?"email":"sms";this.sentCodeTargets.add(`${e.purpose}:${s.toLowerCase()}`);const l={maskedTarget:this.maskTarget(s),channel:r,cooldownSeconds:60};return this.record("REST","sendVerificationCode","POST /api/v1/auth/verification-codes",l,{purpose:e.purpose,channel:r}),l}async resolveInviteCode(e){const s=Date.now();if(this.inviteLockedUntil>s)return{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const r=e.replace(/\D/g,""),p={482916305:this.orgs[0]?.name??"广州实验室",618204917:"天环智慧园区"}[r];if(!p){if(this.inviteMissTimestamps=this.inviteMissTimestamps.filter(D=>s-D<36e5),this.inviteMissTimestamps.push(s),this.inviteMissTimestamps.length>=10)return this.inviteLockedUntil=s+36e5,this.inviteMissTimestamps=[],{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const F={valid:!1,message:"邀请码不正确或已失效，请向机构管理员确认。"};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",F,{code:r}),F}const E={valid:!0,organizationName:p};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",E,{code:r}),E}async registerAndJoin(e){const s=await this.resolveInviteCode(e.inviteCode);if(!s.valid||!s.organizationName)throw new Error(s.message??"邀请码不正确或已失效，请向机构管理员确认。");if(!/^\d{6}$/.test(e.verificationCode.trim()))throw new Error("验证码不正确或已过期");const r=`register_join:${e.account.trim().toLowerCase()}`;if(!this.sentCodeTargets.has(r))throw new Error("请先获取验证码");const l={requestId:`JR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:s.organizationName,maskedAccount:this.maskTarget(e.account),status:"pending_approval",submittedAt:new Date().toISOString()};return this.joinReceipts.set(l.requestId,l),this.record("REST","registerAndJoin","POST /api/v1/auth/register-join",l,{organizationName:s.organizationName,displayName:e.displayName}),l}async withdrawJoinApplication(e){this.joinReceipts.delete(e),this.record("REST","withdrawJoinApplication",`DELETE /api/v1/org/join-requests/${e}`,{ok:!0})}async submitOrgApplication(e){if(!/^\d{6}$/.test(e.smsCode.trim()))throw new Error("验证码不正确或已过期");const s=`org_apply:${e.phone.trim().toLowerCase()}`;if(!this.sentCodeTargets.has(s))throw new Error("请先获取短信验证码");const r=e.province===e.city?e.province:`${e.province} ${e.city}`,l={applicationId:`APP-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:e.organizationName.trim(),region:r,maskedEmail:this.maskTarget(e.email),status:"pending_review",submittedAt:new Date().toISOString()};return this.record("REST","submitOrgApplication","POST /api/v1/org/applications",l,{organizationName:l.organizationName,region:r}),l}async getInvitationPreview(e){const s=e.trim(),r=this.orgs[0]?.name??"广州国家实验室",l=new Date(Date.now()+7*864e5).toISOString().slice(0,10);return s==="expired"?{token:s,kind:"member",organizationName:r,inviterName:"林致远",role:"operator",roleLabel:Be.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:"2026-11-20",status:"expired"}:s.startsWith("owner")?{token:s,kind:"owner",organizationName:"广州天环智能科技有限公司",role:"org_admin",roleLabel:Be.org_admin,targetChannel:"email",targetValue:"chen@company.com",prefillName:"陈志远",accountExists:!1,requiredSecondaryChannel:null,verifiedSecondaryMasked:"139 •••• 9000",expiresAt:l,status:"pending"}:s==="admin-email"?{token:s,kind:"member",organizationName:r,inviterName:"林致远",role:"org_admin",roleLabel:Be.org_admin,targetChannel:"email",targetValue:"zhao.admin@pacom.cn",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:ga("member","org_admin","email"),expiresAt:l,status:"pending"}:s==="admin-phone"?{token:s,kind:"member",organizationName:r,inviterName:"林致远",role:"org_admin",roleLabel:Be.org_admin,targetChannel:"phone",targetValue:"13900139088",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:ga("member","org_admin","phone"),expiresAt:l,status:"pending"}:s==="project-admin-email"?{token:s,kind:"member",organizationName:r,inviterName:"林致远",role:"project_admin",roleLabel:Be.project_admin,targetChannel:"email",targetValue:"wu.proj@pacom.cn",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:ga("member","project_admin","email"),expiresAt:l,status:"pending"}:s==="project-admin-phone"?{token:s,kind:"member",organizationName:r,inviterName:"林致远",role:"project_admin",roleLabel:Be.project_admin,targetChannel:"phone",targetValue:"13700137066",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:ga("member","project_admin","phone"),expiresAt:l,status:"pending"}:s==="existing-demo"?{token:s,kind:"member",organizationName:"天环智慧园区",inviterName:"林致远",role:"operator",roleLabel:Be.operator,targetChannel:"email",targetValue:"zhou.ning@pacom.cn",prefillName:"周宁",accountExists:!0,requiredSecondaryChannel:null,expiresAt:l,status:"pending"}:{token:s||"member-demo",kind:"member",organizationName:r,inviterName:"林致远",role:"operator",roleLabel:Be.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",prefillName:"林明远",accountExists:!1,requiredSecondaryChannel:null,expiresAt:l,status:"pending"}}normalizeContactKey(e){return e.trim().toLowerCase().replace(/[\s\-()]/g,"")}isContactOccupied(e,s){const r=this.normalizeContactKey(s);return Object.values(We).some(l=>{const p=e==="email"?l.email:l.phone;return!!p&&this.normalizeContactKey(p)===r})}async acceptInvitation(e){const s=await this.getInvitationPreview(e.token);if(s.status!=="pending")throw new Error("邀请已过期或已失效，请联系邀请人重新发送。");const r=s.kind==="owner"?"org_admin":s.role??"operator",l=this.activeSession;if(!!l&&(s.targetChannel==="email"&&!!l?.email&&this.normalizeContactKey(l.email)===this.normalizeContactKey(s.targetValue)||s.targetChannel==="phone"&&!!l?.phone&&this.normalizeContactKey(l.phone)===this.normalizeContactKey(s.targetValue))&&l){const M=structuredClone(l);return this.activeSession=M,this.applyOverridesToSession(),sessionStorage.setItem(ua,M.role),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,M),this.pushAudit("auth.invite.accept",M.userId,"success","已有账户确认加入"),structuredClone(M)}if(s.accountExists)throw new Error("该账号已注册，请使用原账户登录后再接受邀请。");const E=s.requiredSecondaryChannel!==void 0?s.requiredSecondaryChannel:ga(s.kind,s.role,s.targetChannel);let F="";if(E){const M=(e.secondaryContact??"").trim(),K=(e.secondaryVerificationCode??"").trim();if(!M)throw new Error(E==="phone"?"请补充并验证手机号码":"请补充并验证电子邮箱");if(!/^\d{6}$/.test(K))throw new Error("验证码不正确或已过期");const re=`bind:${M.toLowerCase()}`;if(!this.sentCodeTargets.has(re))throw new Error("请先获取验证码");if(this.isContactOccupied(E,M))throw new Error(E==="phone"?"该手机号码已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。":"该电子邮箱已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。");F=M}const D=structuredClone(We[r]);return e.displayName?.trim()&&(D.displayName=e.displayName.trim()),s.targetChannel==="email"?(D.email=s.targetValue,D.phone=F||(s.kind==="owner"?"13900139000":void 0)):(D.phone=s.targetValue,D.email=F||void 0),this.activeSession=D,this.applyOverridesToSession(),sessionStorage.setItem(ua,r),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,D),this.pushAudit("auth.invite.accept",D.userId,"success"),structuredClone(D)}async switchDemoRole(e){return this.activeSession=structuredClone(We[e]),this.applyOverridesToSession(),sessionStorage.setItem(ua,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(wt);if(e){const s=JSON.parse(e);if(Array.isArray(s?.projects)&&Array.isArray(s?.buildings)&&Array.isArray(s?.floors)&&Array.isArray(s?.zones))return s}}}catch{}return structuredClone(Pt)}loadOrgs(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(St);if(e){const s=JSON.parse(e);if(Array.isArray(s)&&s.length>0&&s.every(r=>r?.id&&r?.name&&Array.isArray(r?.spatial?.projects)))return s}}}catch{}return[{id:Ye,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const e=this.orgs.find(s=>s.id===this.activeOrgId);e&&(e.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(St,JSON.stringify(this.orgs)),localStorage.setItem(xt,this.activeOrgId),this.activeOrgId===Ye&&localStorage.setItem(wt,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(e=>({id:e.id,name:e.name,projectCount:e.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}async switchOrganization(e){const s=this.orgs.find(r=>r.id===e);if(!s)throw new Error(`404 NOT_FOUND: 机构 ${e} 不存在`);this.activeOrgId=s.id,this.spatial=s.spatial,this.persistSpatial()}async createOrganization(e){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const r=e.trim()||"新建机构",l={id:`org-${Date.now().toString(36)}`,name:r,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(l),this.activeOrgId=l.id,this.spatial=l.spatial,this.persistSpatial(),this.pushAudit("org.create",l.id,"success",r),{id:l.id,name:l.name,projectCount:0}}syncAdminScopesFromSpatial(){const e=this.spatial.projects.map(l=>l.id),s=this.spatial.buildings.map(l=>l.id),r=this.spatial.floors.map(l=>l.id);this.activeOrgId===Ye&&(We.org_admin.scope.allowedProjectIds=[...e],We.org_admin.scope.allowedBuildingIds=[...s],We.org_admin.scope.allowedFloorIds=[...r],We.project_admin.scope.allowedBuildingIds=[...s],We.project_admin.scope.allowedFloorIds=[...r]),this.activeSession&&((this.activeOrgId!==Ye||this.activeSession.role==="org_admin")&&(this.activeSession.scope.allowedProjectIds=[...e]),(this.activeOrgId!==Ye||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin")&&(this.activeSession.scope.allowedBuildingIds=[...s],this.activeSession.scope.allowedFloorIds=[...r]))}async getSpatialTree(){const e=this.requireSession();if(this.activeOrgId!==Ye){const M=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:M.projects.length,buildings:M.buildings.length,floors:M.floors.length}),M}const s=this.spatial.projects.filter(M=>e.scope.allowedProjectIds.includes(M.id)),r=this.spatial.buildings.filter(M=>e.scope.allowedBuildingIds.includes(M.id)),l=new Set(r.map(M=>M.id)),p=this.spatial.floors.filter(M=>l.has(M.buildingId)),E=new Set(p.map(M=>M.id)),F=this.spatial.zones.filter(M=>E.has(M.floorId)),D=structuredClone({projects:s,buildings:r,floors:p,zones:F});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:D.projects.length,buildings:D.buildings.length,floors:D.floors.length}),D}async createProject(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建项目`);const r={id:`project-${Date.now().toString(36)}`,name:e.name.trim()||"新建项目",city:e.city?.trim()||"广州市",address:e.address?.trim()||"",timezone:"Asia/Shanghai",location:e.location,imageUrl:e.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(r),s.scope.allowedProjectIds.includes(r.id)||s.scope.allowedProjectIds.push(r.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",r,e),this.pushAudit("project.create",r.id,"success",r.name),structuredClone(r)}async updateProject(e,s){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权修改项目配置`);const l=this.spatial.projects.find(p=>p.id===e);if(!l)throw new Error(`404 NOT_FOUND: 项目 ${e} 不存在`);return s.name!==void 0&&(l.name=s.name.trim()||l.name),s.city!==void 0&&(l.city=s.city.trim()),s.address!==void 0&&(l.address=s.address.trim()),s.location!==void 0&&(l.location=s.location),s.imageUrl!==void 0&&(l.imageUrl=s.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${e}`,l,s),this.pushAudit("project.update",e,"success",l.name),structuredClone(l)}async deleteProject(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除项目`);if(e===I.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const r=new Set(this.spatial.buildings.filter(p=>p.projectId===e).map(p=>p.id)),l=new Set(this.spatial.floors.filter(p=>r.has(p.buildingId)).map(p=>p.id));this.spatial.projects=this.spatial.projects.filter(p=>p.id!==e),this.spatial.buildings=this.spatial.buildings.filter(p=>p.projectId!==e),this.spatial.floors=this.spatial.floors.filter(p=>!r.has(p.buildingId)),this.spatial.zones=this.spatial.zones.filter(p=>!l.has(p.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${e}`,{ok:!0}),this.pushAudit("project.delete",e,"success")}async upsertBuilding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼宇`);let r=e.id?this.spatial.buildings.find(l=>l.id===e.id):void 0;return r?(r.name=e.name.trim()||r.name,r.aboveFloors=Math.max(0,e.aboveFloors),r.belowFloors=Math.max(0,e.belowFloors),r.hasRoof=e.hasRoof,e.areaSqm!==void 0&&(r.areaSqm=e.areaSqm),e.imageUrl!==void 0&&(r.imageUrl=e.imageUrl)):(r={id:`building-${Date.now().toString(36)}`,projectId:e.projectId,name:e.name.trim()||"新建楼宇",aboveFloors:Math.max(1,e.aboveFloors),belowFloors:Math.max(0,e.belowFloors),hasRoof:e.hasRoof,areaSqm:e.areaSqm??null,imageUrl:e.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(r)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",r,e),this.pushAudit("building.upsert",r.id,"success",r.name),structuredClone(r)}async deleteBuilding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼宇`);if(e===I.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const r=new Set(this.spatial.floors.filter(l=>l.buildingId===e).map(l=>l.id));this.spatial.buildings=this.spatial.buildings.filter(l=>l.id!==e),this.spatial.floors=this.spatial.floors.filter(l=>l.buildingId!==e),this.spatial.zones=this.spatial.zones.filter(l=>!r.has(l.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${e}`,{ok:!0}),this.pushAudit("building.delete",e,"success")}async upsertFloor(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼层`);const r=new Date().toISOString();let l=e.id?this.spatial.floors.find(p=>p.id===e.id):void 0;if(l)l.name=e.name.trim()||l.name,l.kind=e.kind,l.level=e.level,e.areaSqm!==void 0&&(l.areaSqm=e.areaSqm),e.planImageUrl!==void 0&&(l.plan=e.planImageUrl?{floorId:l.id,imageUrl:e.planImageUrl,planVersion:(l.plan?.planVersion??0)+1,updatedAt:r}:null);else{const p=`floor-${e.buildingId.slice(-6)}-${e.kind}-${Math.abs(e.level)}-${Date.now().toString(36).slice(-3)}`;l={id:p,buildingId:e.buildingId,kind:e.kind,level:e.level,name:e.name.trim()||`${e.level}F`,areaSqm:e.areaSqm??null,plan:e.planImageUrl?{floorId:p,imageUrl:e.planImageUrl,planVersion:1,updatedAt:r}:null},this.spatial.floors.push(l),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(l.id)&&this.activeSession.scope.allowedFloorIds.push(l.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:l.id,name:l.name,hasPlan:!!l.plan}),this.pushAudit("floor.upsert",l.id,"success",l.name),structuredClone(l)}async deleteFloor(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼层`);if(e===I.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(r=>r.id!==e),this.spatial.zones=this.spatial.zones.filter(r=>r.floorId!==e),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${e}`,{ok:!0}),this.pushAudit("floor.delete",e,"success")}async upsertZone(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护功能区`);let r=e.id?this.spatial.zones.find(l=>l.id===e.id):void 0;return r?(r.name=e.name.trim()||r.name,r.category=e.category):(r={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:e.floorId,name:e.name.trim(),category:e.category},this.spatial.zones.push(r)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",r),this.pushAudit("zone.upsert",r.id,"success",r.name),structuredClone(r)}async deleteZone(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(r=>r.id!==e),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${e}`,{ok:!0}),this.pushAudit("zone.delete",e,"success")}async copyZonesToFloors(e,s){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权复制功能区`);const l=this.spatial.floors.find(F=>F.id===e),p=this.spatial.zones.filter(F=>F.floorId===e);if(!l||p.length===0)return 0;let E=0;for(const F of s){if(F===e)continue;const D=this.spatial.floors.find(K=>K.id===F);if(!D)continue;const M=new Set(this.spatial.zones.filter(K=>K.floorId===F).map(K=>K.name));for(const K of p){const re=K.name.replace(new RegExp(`^${l.name}\\s*`,"i"),""),P=`${D.name} ${re}`.trim();M.has(P)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:F,name:P,category:K.category}),M.add(P),E+=1)}}return E>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:e,targetCount:s.length,added:E}),E}async getFloorDevices(e){const s=this.requireSession();if(this.activeOrgId!==Ye)return[];if(!s.scope.allowedFloorIds.includes(e)){const l={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,l),this.pushAudit("floor.read",e,"denied",l.message),new Error(`403 FORBIDDEN: ${l.message}`)}if(e!==I.floorId)return[];let r=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(r=r.filter(l=>l.logicalZoneId&&s.scope.allowedZoneIds.includes(l.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:r.length}),r}async dispatchControlBatch(e){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const r=`batch-e7f-${Date.now().toString(36)}`,l={batchId:r,floorId:e.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(p=>({deviceId:p.deviceId,command:p.command,targetValue:p.targetValue,status:"queued"}))};return this.batches.set(r,l),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",l,e),this.pushAudit("control.dispatch",r,"success",`下发 ${e.targets.length} 台设备`),l.receipts.forEach((p,E)=>{const F=this.devices.find(D=>D.id===p.deviceId);setTimeout(()=>{p.status="dispatched",p.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:r,deviceId:p.deviceId,status:"dispatched",at:p.dispatchedAt})},280+E*120),setTimeout(()=>{const D=new Date().toISOString();!F||F.connectivity==="offline"?(p.status="timeout",p.errorCode="GATEWAY_READBACK_TIMEOUT",p.errorMessage="设备离线，网关未收到回读确认",p.verifiedAt=D):(p.status="verified_success",p.observedValue=p.targetValue,p.verifiedAt=D,this.applyObservedTelemetry(F,p.command,p.targetValue,D)),this.emit({type:"control.receipt.updated",batchId:r,deviceId:p.deviceId,status:p.status,observedValue:p.observedValue,at:D})},900+E*220)}),structuredClone(l)}applyObservedTelemetry(e,s,r,l){s==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:r,collectedAt:l,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(r)>0,collectedAt:l,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:r,collectedAt:l,stale:!1}:s==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:r,collectedAt:l,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:l,values:{[s]:r}})}async getControlBatch(e){this.requireSession();const s=this.batches.get(e);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(s)}async listAlarms(e){const s=this.requireSession();return this.activeOrgId!==Ye?[]:!s.scope.allowedFloorIds.includes(e)||e!==I.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,s){const r=this.requireSession();if(!r.scope.canManageAlarms){const p=`角色「${r.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",p),new Error(`403 FORBIDDEN: ${p}`)}const l=this.alarms.find(p=>p.id===e);if(!l)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return l.status="acknowledged",l.acknowledgedAt=new Date().toISOString(),l.acknowledgedBy=r.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,l,{note:s}),this.pushAudit("alarm.acknowledge",e,"success",s),this.emit({type:"alarm.changed",floorId:l.floorId,alarmId:e,status:"acknowledged",at:l.acknowledgedAt}),structuredClone(l)}async listWorkOrders(e){const s=this.requireSession();return this.activeOrgId!==Ye?[]:!s.scope.allowedFloorIds.includes(e)||e!==I.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const r=new Date().toISOString(),l={id:`wo-e7f-${Date.now().toString(36)}`,projectId:I.projectId,buildingId:I.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:r,updatedAt:r};if(this.workOrders.unshift(l),e.alarmId){const p=this.alarms.find(E=>E.id===e.alarmId);p&&(p.workOrderId=l.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",l,e),this.pushAudit("work_order.create",l.id,"success",l.title),structuredClone(l)}async updateWorkOrderStatus(e,s){const r=this.requireSession();if(!r.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权流转工单`);const l=this.workOrders.find(p=>p.id===e);if(!l)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return l.status=s,l.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,l,{status:s}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${s}`),structuredClone(l)}async updateDevicePlanPoint(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const r=this.devices.find(l=>l.id===e.deviceId);if(!r)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(r.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${r.version}，请刷新后重试`);return r.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},r.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,r,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${r.planPoint.x}, ${r.planPoint.y})`),structuredClone(r)}async updateDeviceHardwareBinding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const r=this.devices.find(p=>p.id===e.deviceId);if(!r)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(r.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${r.version}）`);const l=new Date().toISOString();return r.physicalInstalled=e.physicalInstalled,r.physicalVerifiedAt=e.physicalInstalled?l:null,r.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:l,boundBy:s.displayName},r.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,r,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(r)}async listConnections(e){return this.requireSession(),this.activeOrgId!==Ye?[]:structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),this.activeOrgId!==Ye?[]:structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,s){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权冻结交付批次`);const l=this.devices.filter(E=>E.physicalInstalled&&E.hardwareBinding).length,p={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:I.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:l,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:r.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(p),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,p,{note:s}),this.pushAudit("delivery.freeze",p.id,"success",`${l}/${this.devices.length} 已现场核验`),structuredClone(p)}async getAnalysisReport(e,s,r){this.requireSession();const l=s==="today"?1:s==="7d"?7:30,E={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*l)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*l).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(M=>M.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*l).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*l).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*l).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],F=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],D={category:e,range:s,scopeId:r,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:E.kpis,unit:E.unit,series:E.base.map((M,K)=>({label:F[K],value:Math.round(M*(e==="energy"||e==="carbon"?l/2+.5:1)),baseline:Math.round(M*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:E.base[3],unit:E.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:E.base[4],unit:E.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:E.base[1],unit:E.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${s}&scopeId=${r}`,{kpis:D.kpis.length}),D}async listScenes(e){return this.requireSession(),this.activeOrgId!==Ye?[]:structuredClone(this.scenes)}async createScene(e){const s=this.requireSession();if(!s.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建场景`);const r={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(r),this.record("REST","createScene","POST /api/v1/scenes",r,e),this.pushAudit("scene.create",r.id,"success",r.name),structuredClone(r)}async executeScene(e){const s=this.scenes.find(l=>l.id===e);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const r=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=r.batchId,r}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:I.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,s,r){this.requireSession();const l=r>=this.calendar.nightGuardStart?`下班时间 ${r} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,p=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${r}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${r} (+30m)`,conflictWarning:l},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:l}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",p,{workdayStart:s,workdayEnd:r}),p}async saveWorkCalendar(e,s,r,l){const p=this.requireSession();if(!p.scope.canEditSettings)throw this.pushAudit("settings.calendar",I.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${p.roleLabel}」无权修改应用设置`);if(this.calendar.version!==l)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=r)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:r,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:r,expectedVersion:l}),this.pushAudit("settings.calendar",I.projectId,"success",`${s}-${r}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,s,r){const l=this.requireSession();if(!l.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",e,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权启停应用设置规则`);const p=this.rules.find(E=>E.id===e);if(!p)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(p.version!==r)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${p.version}）`);return p.enabled=s,p.version+=1,p.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,p,{enabled:s,expectedVersion:r}),this.pushAudit("settings.rule_toggle",e,"success",s?"启用":"停用"),structuredClone(p)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,s){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",e,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const l=We[s],p={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:s,roleLabel:l.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(p),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",p,{email:e,role:s}),this.pushAudit("org.invite",e,"success",l.roleLabel),structuredClone(p)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const e=this.requireSession();return this.reconcileOverrides(),e.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(s=>s.targetUserId===e.userId))}async grantOverride(e){const s=this.requireSession();if(!s.scope.canGrantOverride)throw this.pushAudit("override.grant",e.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const r=e.reason.trim();if(!r)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(e.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const l=this.members.find(F=>F.userId===e.targetUserId);if(!l)throw new Error(`404 NOT_FOUND: 目标成员 ${e.targetUserId} 不存在`);if(l.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const p=Date.now(),E={id:`ovr-${p.toString(36)}`,targetUserId:l.userId,targetUserName:l.displayName,module:e.module,durationHours:e.durationHours,grantedAt:new Date(p).toISOString(),expiresAt:new Date(p+e.durationHours*36e5).toISOString(),approvedBy:s.displayName,reason:r,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(E),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",E,e),this.pushAudit("override.grant",`${l.displayName} · ${e.module==="deployment"?"系统部署":"应用设置"}`,"success",`${e.durationHours}h · ${r}`),structuredClone(E)}async revokeOverride(e){const s=this.requireSession();if(!s.scope.canGrantOverride)throw this.pushAudit("override.revoke",e,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const r=this.overrides.find(l=>l.id===e);if(!r)throw new Error(`404 NOT_FOUND: 提权记录 ${e} 不存在`);return r.status="revoked",r.revokedAt=new Date().toISOString(),r.revokedBy=s.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${e}/revoke`,r),this.pushAudit("override.revoke",`${r.targetUserName} · ${r.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(r)}subscribeFloorEvents(e,s){return e!==I.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${I.floorId}`,e),this.listeners.forEach(s=>s(e))}}const et=["org_admin","project_admin","operator","space_user"],Kt=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function we(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function at(a){return a?a.slice(0,16).replace("T"," "):"—"}function Da(a){return a==="deployment"?"系统部署":"应用设置"}async function Yt(a,e,s,r,l){const p=s.scope.canManageMembers,E=s.scope.canGrantOverride,F=s.scope.canViewAuditLogs,D=E||s.role==="operator",M=s.role!=="space_user";let K="profile",re=M?await e.listOrgMembers().catch(()=>[]):[],P=D?await e.listOverrides().catch(()=>[]):[],G=F?await e.listAuditLogs().catch(()=>[]):[],oe="",Y="all",z="all",B="all",V=!1,J=!1,le=s.displayName,de=s.role==="org_admin"?"机构负责人":s.role==="project_admin"?"项目负责人":s.role==="operator"?"运行值守工程师":"园区空间用户",N="138-0013-8072",ve="",pe="";const xe={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function ue(){const[R,u,S,O]=await Promise.all([e.getSession(),M?e.listOrgMembers().catch(()=>[]):Promise.resolve([]),D?e.listOverrides().catch(()=>[]):Promise.resolve([]),F?e.listAuditLogs().catch(()=>[]):Promise.resolve([])]);re=u,P=S,G=O,R&&(s=R,r(R)),Z()}function H(){const R=["profile"];return M&&R.push("members","roles"),D&&R.push("overrides"),F&&R.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${R.map(u=>{const S=xe[u],O=u==="overrides"?P.filter(d=>d.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${K===u}" data-anav="${u}">
                  ${Se(S.icon,16)}
                  <span>${S.label}</span>
                  ${O>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${O}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function W(){return K==="members"&&p?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':K==="overrides"&&E?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':K==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 · SR 6.1</span>':""}function ce(){const R=s.scope.activeOverrides.filter(S=>S.status==="active"),u=s.scope.allowedZoneIds?.length?`授权 ${s.scope.allowedFloorIds.length} 个楼层 · ${s.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${s.scope.allowedProjectIds.length} 个项目 · ${s.scope.allowedBuildingIds.length} 栋楼宇 · ${s.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${we(s.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${we(s.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${we(le)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${we(de)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${we(N)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${we(u)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${we(yt[s.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${we(s.roleLabel)}</span>
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
          ${R.length>0?R.map(S=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${we(Da(S.module))}（${S.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${we(S.approvedBy)} · 到期时间：${we(at(S.expiresAt))} · 事由：${we(S.reason)}</span>
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
    `}function ie(){const R=oe.trim().toLowerCase(),u=re.filter(S=>Y!=="all"&&S.role!==Y?!1:R?`${S.displayName} ${S.email} ${S.roleLabel} ${S.scopeSummary}`.toLowerCase().includes(R):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${we(oe)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${Y==="all"?"selected":""}>全部角色（${re.length}）</option>
            ${et.map(S=>`<option value="${S}" ${Y===S?"selected":""}>${we(Be[S])}</option>`).join("")}
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
              ${u.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':u.map(S=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${we(S.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${we(S.displayName)}</div>
                                ${p?`<div class="pacom-row-sub">${we(S.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${S.role==="org_admin"||S.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${we(S.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${we(S.scopeSummary)}</span></td>
                          <td>
                            <span class="pacom-badge ${S.status==="active"?"pacom-badge--online":"pacom-badge--neutral"}">
                              ${S.status==="active"?"正常":S.status==="invited"?"邀请中":"已停用"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function ge(){return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">四级标准角色说明</h2>
          <span class="pacom-row-sub">IEC 62443-3-3 SR 2.1 RE 2 · 最小权限与职责分离</span>
        </div>
        <div class="pacom-settings-card">
          ${et.map(R=>{const u=re.filter(S=>S.role===R).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${we(Be[R])}</span>
                  <span class="pacom-setting-desc">${we(yt[R])}</span>
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
                ${Kt.map(R=>`
                  <tr>
                    <td><strong style="font-weight:450;">${we(R.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${R.org_admin.tone}">${we(R.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${R.project_admin.tone}">${we(R.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${R.operator.tone}">${we(R.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${R.space_user.tone}">${we(R.space_user.text)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Ie(){return`
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
                            <td><strong style="font-weight:450;">${we(u.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${we(Da(u.module))}</span></td>
                            <td>
                              <div>${u.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${we(at(u.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${we(u.approvedBy)}</div>
                              <div class="pacom-row-sub">${we(u.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${u.status==="active"?"pacom-badge--online":u.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${u.status==="active"?"生效中":u.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${E?`<td style="text-align:right;">
                                    ${u.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${we(u.id)}">提前收回</button>`:`<span class="pacom-row-sub">${u.revokedBy?`${we(u.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function be(){const R=G.filter(u=>{if(z==="success"&&u.result!=="success"||z==="denied"&&u.result==="success")return!1;if(B!=="all"){const S=`${u.action} ${u.target}`.toLowerCase();if(B==="control"&&!S.includes("control")&&!S.includes("scene")||B==="alarm"&&!S.includes("alarm")&&!S.includes("work")||B==="deploy"&&!S.includes("deploy")&&!S.includes("plan")&&!S.includes("hardware")&&!S.includes("project")&&!S.includes("building")&&!S.includes("floor")&&!S.includes("zone")||B==="settings"&&!S.includes("settings")||B==="override"&&!S.includes("override"))return!1}return!0});return`
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
            <button type="button" class="pacom-tab" role="tab" aria-selected="${z==="all"}" data-audit-filter="all">全部（${G.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${z==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${z==="denied"}" data-audit-filter="denied">已拦截</button>
          </div>
        </div>
        <span class="pacom-row-sub">共 ${R.length} 条只读记录</span>
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
              ${R.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':R.map(u=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${we(u.action)}</div>
                            ${u.detail?`<div class="pacom-row-sub">${we(u.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${we(u.target)}</code></td>
                          <td>
                            <div>${we(u.actor)}</div>
                            <div class="pacom-row-sub">${we(Be[u.role]??u.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${we(at(u.at))}</span></td>
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
    `}function A(){const R=[];if(V&&p){const u=s.role==="org_admin"?et:["project_admin","operator","space_user"];R.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="邀请成员">
          <form class="dep-modal-card" data-role="invite-form" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">邀请新成员</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Se("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">成员电子邮箱（唯一登录账号）</span>
                <input class="pacom-input" name="email" type="email" placeholder="colleague@gzlab.ac.cn" required />
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分配角色</span>
                <select class="pacom-select" name="role">
                  ${u.map(S=>`<option value="${S}">${we(Be[S])}</option>`).join("")}
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
        </div>`)}if(J&&E){const u=re.filter(S=>S.role==="operator");R.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="授予限时提权">
          <form class="dep-modal-card" data-role="grant-override-form" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">授予运营人员限时提权（SR 2.1 RE 3）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Se("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">目标运营人员</span>
                <select class="pacom-select" name="targetUserId" required>
                  ${u.length===0?'<option value="">暂无运营人员</option>':u.map(S=>`<option value="${we(S.userId)}">${we(S.displayName)}（${we(S.email)}）</option>`).join("")}
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
              <span class="pacom-row-sub">审批人：${we(s.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${u.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return R.join("")}function Z(){const R=xe[K],u=W();a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${we(s.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${H()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${u?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${R.label}</h2>
                  <p class="pacom-unified-subtitle">${R.subtitle}</p>
                </div>
                ${u?`<div class="pacom-unified-head-actions">${u}</div>`:""}
              </div>
              ${ve?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${we(ve)}</span></div>`:""}
              ${pe?`<div class="pacom-alert-banner">${we(pe)}</div>`:""}
              ${K==="profile"?ce():K==="members"?ie():K==="roles"?ge():K==="overrides"?Ie():be()}
            </div>
          </div>
        </div>
      </div>
      ${A()}
    `,Le()}function Le(){a.querySelectorAll("[data-anav]").forEach(u=>{u.addEventListener("click",()=>{K=u.dataset.anav??"profile",ve="",pe="",Z()})}),a.querySelector('[data-role="profile-form"]')?.addEventListener("submit",u=>{u.preventDefault();const S=new FormData(u.currentTarget);le=String(S.get("displayName")??"").trim()||s.displayName,de=String(S.get("jobTitle")??"").trim()||de,N=String(S.get("phone")??"").trim()||N,ve=`已保存个人资料：${le}（${de}）· ${N}`,Z()}),a.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",l()}),a.querySelector("[data-open-invite]")?.addEventListener("click",()=>{V=!0,J=!1,Z()}),a.querySelector("[data-open-grant]")?.addEventListener("click",()=>{J=!0,V=!1,Z()}),a.querySelectorAll("[data-close-modals]").forEach(u=>{u.addEventListener("click",()=>{V=!1,J=!1,Z()})}),a.querySelectorAll("[data-modal-scrim]").forEach(u=>{u.addEventListener("click",S=>{S.target===u&&(V=!1,J=!1,Z())})}),a.querySelector("[data-member-search]")?.addEventListener("input",u=>{const S=u.currentTarget,O=S.selectionStart??S.value.length;oe=S.value,Z();const d=a.querySelector("[data-member-search]");d&&(d.focus(),d.setSelectionRange(O,O))}),a.querySelector("[data-role-filter]")?.addEventListener("change",u=>{Y=u.currentTarget.value,Z()}),a.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async u=>{u.preventDefault(),pe="";const S=new FormData(u.currentTarget);try{const O=await e.inviteOrgMember(String(S.get("email")??""),String(S.get("role")));V=!1,ve=`已向 ${O.email} 发送「${O.roleLabel}」邀请。`,await ue()}catch(O){pe=O instanceof Error?O.message:String(O),Z()}}),a.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async u=>{u.preventDefault(),pe="";const S=new FormData(u.currentTarget);try{const O=await e.grantOverride({targetUserId:String(S.get("targetUserId")??""),module:String(S.get("module")??"deployment"),durationHours:Number(S.get("durationHours")??8),reason:String(S.get("reason")??"")});J=!1,ve=`已为「${O.targetUserName}」开启「${Da(O.module)}」${O.durationHours} 小时限时修改权，到期自动收回。`,await ue()}catch(O){pe=O instanceof Error?O.message:String(O),Z()}}),a.querySelectorAll("[data-revoke-override]").forEach(u=>{u.addEventListener("click",async()=>{const S=u.dataset.revokeOverride;if(S){pe="";try{const O=await e.revokeOverride(S);ve=`已提前收回「${O.targetUserName}」的「${Da(O.module)}」限时修改权。`,await ue()}catch(O){pe=O instanceof Error?O.message:String(O),Z()}}})}),a.querySelectorAll("[data-audit-filter]").forEach(u=>{u.addEventListener("click",()=>{z=u.dataset.auditFilter??"all",Z()})}),a.querySelector("[data-audit-cat]")?.addEventListener("change",u=>{B=u.currentTarget.value??"all",Z()})}Z()}const la={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Jt={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Qt={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Xt(a){const e=`${a.title} ${a.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function es(a){return a.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:a.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function tt(a){const e=`${a.title} ${a.message}`.toLowerCase();return e.includes("离线")||e.includes("vav")||a.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:e.includes("co₂")||e.includes("co2")||a.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function as(a,e,s){const r=new URLSearchParams(window.location.hash.split("?")[1]??""),l=r.get("alarm"),p=r.get("wo"),E=s.scope.canManageAlarms;let F=await e.getSpatialTree(),D=Ha(),M=!1,K="",re=[],P=[],G=[],oe=p?"workorders":"alarms",Y="all",z="all",B="all",V="impact",J=!1,le="",de=l,N=p,ve=null,pe=null,xe="resolved";const ue=new Set,H=new Map,W=new Map,ce=new Map,ie=new Map;let ge="",Ie="";function be(u){const S=ie.get(u.id);if(S)return S;const O=u.id.match(/(\d+)$/),d=`WO-2026-${O?O[1]:u.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,f={estCost:"¥ 450",actualCost:u.status==="closed"?"¥ 380":"--",cmmsNo:d,assigneeGroup:"暖通运维组",tasks:[{id:`${u.id}-t1`,label:"核查设备供电与现场指示灯状态",done:u.status!=="open"},{id:`${u.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:u.status==="resolved"||u.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:u.createdAt?u.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${d}）`}]};return ie.set(u.id,f),f}async function A(){[re,P,G]=await Promise.all([e.listAlarms(I.floorId),e.listWorkOrders(I.floorId),e.getFloorDevices(I.floorId).catch(()=>[])]),P.forEach(u=>be(u)),R()}function Z(u){if(!u)return{name:"楼层通用",zone:"E7F",dev:null};const S=G.find(O=>O.id===u)??null;return S?{name:S.name,zone:(S.logicalZoneId?Qt[S.logicalZoneId]:void 0)??"E7F",dev:S}:{name:u,zone:"E7F",dev:null}}function Le(u){const S=Z(u.deviceId).dev;S&&S.connectivity==="offline"?ce.set(u.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${S.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):ce.set(u.id,{verdict:"pass",summary:`自检通过（PASS）：「${S?.name??u.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),de=u.id,R()}function R(){const u=re.filter(w=>w.status==="active"&&!H.has(w.id)),S=P.filter(w=>!be(w).cancelled&&(w.status==="open"||w.status==="assigned"||w.status==="in_progress")),O=re.filter(w=>w.status!=="active").length+W.size,d=0,f=H.size,L=le.trim().toLowerCase(),se=re.filter(w=>{const $=H.has(w.id);if(Y==="snoozed"){if(!$)return!1}else if(Y==="active"){if(w.status!=="active"||$)return!1}else if(Y==="acknowledged"){if(w.status!=="acknowledged")return!1}else if($)return!1;if(B!=="all"&&w.severity!==B)return!1;if(!L)return!0;const U=Z(w.deviceId);return`${w.title} ${w.message} ${U.name} ${U.zone} ${w.deviceId}`.toLowerCase().includes(L)}),me=new Map;for(const w of se){const $=`${w.title} ${w.message}`.toLowerCase(),U=$.includes("离线")||$.includes("modbus")||$.includes("通信"),X=J?U?"root-gateway-modbus":w.deviceId:w.id,fe=U?"根因：E7F 主控网关通信链路":`根因：${Z(w.deviceId).name}`,Te=me.get(X)??{rootLabel:fe,items:[]};Te.items.push(w),me.set(X,Te)}const je=Array.from(me.values());V==="impact"&&je.sort((w,$)=>tt($.items[0]).costYuan-tt(w.items[0]).costYuan);const ye=P.filter(w=>{const $=be(w);if(z==="cancelled"){if(!$.cancelled)return!1}else if($.cancelled||z==="open"&&(w.status==="resolved"||w.status==="closed")||z==="resolved"&&w.status!=="resolved"||z==="closed"&&w.status!=="closed")return!1;if(!L)return!0;const U=Z(w.deviceId);return`${w.title} ${w.description} ${w.id} ${$.cmmsNo} ${U.name}`.toLowerCase().includes(L)});a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Ua({tree:F,session:s,scope:D,activeAlarmCount:u.length,isOpen:M,searchKeyword:K})}
            </div>

            <div class="pacom-header-meta">
              ${oe==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${J}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${s.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${s.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${Se("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${oe==="alarms"}" data-main-tab="alarms">实时告警（${re.length-f}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${oe==="workorders"}" data-main-tab="workorders">运维工单（${P.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${oe==="alarms"&&Y==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${u.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${oe==="workorders"&&z==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${S.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${oe==="alarms"&&Y==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${O}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${d}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${ge?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${c(ge)}</span></div>`:""}
          ${Ie?`<div class="pacom-alert-banner">${c(Ie)}</div>`:""}

          ${oe==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${c(le)}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${B==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${B==="critical"?"selected":""}>严重</option>
                      <option value="major" ${B==="major"?"selected":""}>重要</option>
                      <option value="minor" ${B==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${V==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${V==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${Y==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${Y==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${Y==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${Y==="snoozed"}" data-status-pill="snoozed">已忽略（${f}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${ue.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${ue.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${je.length} 项</span>
                  </div>
                </div>
                ${je.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${je.map(w=>{const $=w.items[0],U=Jt[$.severity]??{label:$.severity,cls:"pacom-badge--neutral"},X=Z($.deviceId),fe=es($),Te=tt($),Pe=de===$.id,h=H.get($.id),ee=!!h,_e=ue.has($.id),te=ce.get($.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${c($.id)}" data-check-alarm="${c($.id)}" ${_e?"checked":""} ${!E||$.status!=="active"||ee?"disabled":""} aria-label="选择 ${c($.title)}" />
                                  </td>
                                  <td><span class="pacom-badge ${U.cls}">${c(U.label)}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${c($.title)}</span>
                                      ${J?`<span class="pacom-badge pacom-badge--accent">${c(w.rootLabel)}${w.items.length>1?` · 影响 ${w.items.length} 项`:""}</span>`:""}
                                      ${te?`<span class="pacom-badge ${te.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${c(te.verdict.toUpperCase())}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${c($.message)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${c(X.name)}</div>
                                    <div class="pacom-row-sub">${c(X.zone)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${c(Te.costLabel)}</div>
                                    <div class="pacom-row-sub">${c(Te.comfortLabel)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${c(fe.duration)}</div>
                                    <div class="pacom-row-sub" style="color:${fe.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${c(fe.trend)}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${ee?"pacom-badge--neutral":$.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${ee?`忽略 ${c(h?.duration)}`:$.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${ee?`<button class="pacom-btn" data-unsnooze="${c($.id)}" ${E?"":"disabled"}>恢复监控</button>`:`
                                            ${$.status==="active"?`<button class="pacom-btn" data-mark-actioned="${c($.id)}" ${E?"":"disabled"}>标记已处置</button>`:""}
                                            ${$.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${c($.id)}" ${E?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${c($.id)}">${Pe?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${Pe?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${c(Xt($))}
                                            </div>
                                            ${h?`<div class="pacom-info-banner">忽略周期：${c(h.duration)} · 原因备注：${c(h.reason)}</div>`:""}
                                            ${te?`
                                                <div class="pacom-banner ${te.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${c(te.summary)}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${te.steps.map($e=>`<span>${c($e)}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${c($.id)}</code> · 设备编号 <code>${c($.deviceId)}</code> · 关联工单 ${c($.workOrderId??"无")}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${c($.id)}">单机自检（FTT）</button>
                                              ${!ee&&$.status==="active"?`<button class="pacom-btn" data-open-snooze="${c($.id)}" ${E?"":"disabled"}>限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${c($.deviceId)}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${c($.deviceId)}">定位设备 →</button>
                                            </div>
                                            ${ve===$.id?`
                                                <form data-snooze-form="${c($.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
              ${(()=>{const w=N?P.find($=>$.id===N)??null:null;if(w){const $=Z(w.deviceId),U=be(w),X=!!(!E||U.cancelled||w.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${c(w.id)}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${c(w.title)}</h2>
                        <span class="pacom-badge pacom-badge--accent">${c(U.cmmsNo)}</span>
                        ${U.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${c(w.id)}" data-wo-status="${c(w.id)}" aria-label="更新工单状态" ${X?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(fe=>`<option value="${fe}" ${w.status===fe?"selected":""}>${la[fe]}</option>`).join("")}
                          <option value="cancelled" ${U.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${pe===w.id?`
                        <form data-close-wo-form="${c(w.id)}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${la[xe]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
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
                          <div class="pacom-row-sub">${c(w.description)}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${U.tasks.map(fe=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${c(fe.id)}" data-wo-task="${c(w.id)}" data-task-id="${c(fe.id)}" ${fe.done?"checked":""} ${X?"disabled":""} />
                                    <span>${c(fe.label)}</span>
                                  </span>
                                  ${fe.unit?`<span class="pacom-row-sub">实测：${c(fe.reading??"--")} ${c(fe.unit)}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${U.history.map(fe=>`<span>• <span class="pacom-row-sub">${c(fe.at)}</span> — ${c(fe.text)}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${c(w.id)}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${c(U.cmmsNo)}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${c($.name)}（${c($.zone)}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${c(U.assigneeGroup)}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${c(U.estCost)} / 实际 ${c(U.actualCost)}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${c(U.cause??"待完单填写")}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${c(U.solution??"待完单填写")}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${c(w.deviceId??"")}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${c(w.deviceId??"")}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${c(le)}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${z==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${z==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${z==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${z==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${z==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${ye.length} 条工单</span>
                  </div>
                  ${ye.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${ye.map($=>{const U=Z($.deviceId),X=be($),fe=!!(!E||X.cancelled||$.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${c($.title)}</span>
                                        ${X.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${c($.description)} · <code>${c($.id)}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${c(U.name)}</div>
                                      <div class="pacom-row-sub">${c(U.zone)}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${c(X.cmmsNo)}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${c(X.assigneeGroup)} · 预估 ${c(X.estCost)}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${c($.id)}" data-wo-status="${c($.id)}" aria-label="更新工单状态" ${fe?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Te=>`<option value="${Te}" ${$.status===Te?"selected":""}>${la[Te]}</option>`).join("")}
                                          <option value="cancelled" ${X.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${c($.id)}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${pe===$.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${c($.id)}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${la[xe]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${c(X.cause??"")}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${c(X.solution??"")}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${c(X.actualCost==="--"?"":X.actualCost)}" />
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
    `,Va(a,{onToggle:()=>{M=!M,R(),M&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:w=>{K=w,R();const $=a.querySelector("[data-global-space-search]");$&&($.focus(),$.setSelectionRange(w.length,w.length))},onPick:w=>{D=w,M=!1,R()}}),a.querySelectorAll("[data-main-tab]").forEach(w=>{w.addEventListener("click",()=>{oe=w.dataset.mainTab??"alarms",ge="",R()})}),a.querySelectorAll("[data-kpi-filter]").forEach(w=>{w.addEventListener("click",()=>{const $=w.dataset.kpiFilter;ge="",$==="workorders"?(oe="workorders",z=z==="open"?"all":"open"):($==="active"||$==="acknowledged")&&(oe="alarms",Y=Y===$?"all":$),R()})}),a.querySelectorAll("[data-status-pill]").forEach(w=>{w.addEventListener("click",()=>{Y=w.dataset.statusPill??"all",R()})}),a.querySelectorAll("[data-wo-pill]").forEach(w=>{w.addEventListener("click",()=>{z=w.dataset.woPill??"all",R()})}),a.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{ge="",A()}),a.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{J=!J,R()}),a.querySelector("[data-severity-filter]")?.addEventListener("change",w=>{B=w.currentTarget.value,R()}),a.querySelector("[data-alarm-sort]")?.addEventListener("change",w=>{V=w.currentTarget.value??"impact",R()}),a.querySelector("[data-alarm-search]")?.addEventListener("input",w=>{const $=w.currentTarget,U=$.selectionStart??$.value.length;le=$.value,R();const X=a.querySelector("[data-alarm-search]");X&&(X.focus(),X.setSelectionRange(U,U))}),a.querySelectorAll("[data-check-alarm]").forEach(w=>{w.addEventListener("change",()=>{if(!E)return;const $=w.dataset.checkAlarm;$&&(w.checked?ue.add($):ue.delete($),R())})}),a.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{if(!E)return;Ie="";const w=Array.from(ue);try{for(const $ of w)await e.acknowledgeAlarm($,"告警中心批量确认"),W.set($,"批量确认处置");ue.clear(),ge=`已批量确认 ${w.length} 条告警，未来 24 小时持续校验无复发。`,await A()}catch($){Ie=$ instanceof Error?$.message:String($),R()}}),a.querySelectorAll("[data-expand-alarm]").forEach(w=>{w.addEventListener("click",()=>{const $=w.dataset.expandAlarm??null;de=de===$?null:$,ve=null,R()})}),a.querySelectorAll("[data-expand-wo]").forEach(w=>{w.addEventListener("click",()=>{const $=w.dataset.expandWo??null;N=N===$?null:$,R()})}),a.querySelectorAll("[data-run-ftt]").forEach(w=>{w.addEventListener("click",()=>{const $=re.find(U=>U.id===w.dataset.runFtt);$&&Le($)})}),a.querySelectorAll("[data-open-snooze]").forEach(w=>{w.addEventListener("click",()=>{E&&(ve=w.dataset.openSnooze??null,R())})}),a.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{ve=null,R()}),a.querySelectorAll("[data-snooze-form]").forEach(w=>{w.addEventListener("submit",$=>{if($.preventDefault(),!E)return;const U=w.dataset.snoozeForm;if(!U)return;const X=new FormData(w),fe=String(X.get("duration")??"24h"),Te=String(X.get("reason")??"").trim()||"现场核查中";H.set(U,{duration:fe,reason:Te}),ue.delete(U),ve=null,ge=`已限时忽略该告警（${fe} · ${Te}），可在「已忽略」页签中随时恢复。`,R()})}),a.querySelectorAll("[data-unsnooze]").forEach(w=>{w.addEventListener("click",()=>{if(!E)return;const $=w.dataset.unsnooze;$&&(H.delete($),ge="已恢复该告警的实时监控。",R())})}),a.querySelectorAll("[data-go-ts]").forEach(w=>{w.addEventListener("click",()=>{const $=w.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent($)}`})}),a.querySelectorAll("[data-locate-home]").forEach(w=>{w.addEventListener("click",()=>{const $=w.dataset.locateHome??"";window.location.hash=$?`#home?device=${encodeURIComponent($)}`:"#home"})}),a.querySelectorAll("[data-mark-actioned]").forEach(w=>{w.addEventListener("click",async()=>{if(!E)return;Ie="";const $=w.dataset.markActioned;try{await e.acknowledgeAlarm($,"现场自处理完成（Mark Actioned）"),W.set($,"现场自处理完成"),ue.delete($),ge="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await A()}catch(U){Ie=U instanceof Error?U.message:String(U),R()}})}),a.querySelectorAll("[data-to-wo]").forEach(w=>{w.addEventListener("click",async()=>{if(!E)return;Ie="";const $=re.find(U=>U.id===w.dataset.toWo);if($)try{await e.createWorkOrder({floorId:$.floorId,deviceId:$.deviceId,alarmId:$.id,title:`处置告警：${$.title}`,description:$.message}),ge=`已将「${$.title}」转为运维工单并同步 CMMS。`,await A()}catch(U){Ie=U instanceof Error?U.message:String(U),R()}})}),a.querySelectorAll("[data-wo-status]").forEach(w=>{w.addEventListener("change",async()=>{if(!E)return;const $=w.dataset.woStatus,U=w.value;if(Ie="",U==="cancelled"){const X=P.find(fe=>fe.id===$);if(X){const fe=be(X);fe.cancelled=!0,fe.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),ge="工单已移入「已取消」分类并锁定编辑。",R()}return}if(U==="resolved"||U==="closed"){pe=$,xe=U,R();return}try{await e.updateWorkOrderStatus($,U);const X=P.find(fe=>fe.id===$);X&&be(X).history.unshift({at:"刚刚",text:`状态变更为「${la[U]}」`}),ge="工单状态已更新并写入审计日志。",await A()}catch(X){Ie=X instanceof Error?X.message:String(X),await A()}})}),a.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{pe=null,R()}),a.querySelectorAll("[data-close-wo-form]").forEach(w=>{w.addEventListener("submit",async $=>{if($.preventDefault(),!E)return;const U=w.dataset.closeWoForm,X=new FormData(w),fe=String(X.get("cause")??"").trim(),Te=String(X.get("solution")??"").trim(),Pe=String(X.get("actualCost")??"").trim();try{await e.updateWorkOrderStatus(U,xe);const h=P.find(ee=>ee.id===U);if(h){const ee=be(h);ee.cause=fe,ee.solution=Te,Pe&&(ee.actualCost=Pe),ee.history.unshift({at:"刚刚",text:`流转至「${la[xe]}」· 根因：${fe}`})}pe=null,N=U,ge=`工单已更新为「${la[xe]}」，根因与方案已沉淀归档。`,await A()}catch(h){Ie=h instanceof Error?h.message:String(h),R()}})}),a.querySelectorAll("[data-wo-task]").forEach(w=>{w.addEventListener("change",()=>{if(!E)return;const $=P.find(fe=>fe.id===w.dataset.woTask);if(!$)return;const X=be($).tasks.find(fe=>fe.id===w.dataset.taskId);X&&(X.done=w.checked),R()})})}await A()}const ts={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},ss={frozen:"已冻结",draft:"草稿",delivered:"已交付"},st={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},nt=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],kt=[{id:"doc-hvac-7f",floorId:I.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:I.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:I.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:I.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],ns={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},Et=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function v(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Fa(a){const e=a.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面")||e.includes("屋顶")||e.includes("天面"))return 999;const s=e.match(/(-?\d+)/);if(!s)return 0;const r=Number(s[1]);return e.startsWith("B")||e.includes("地下")||e.includes("负")?-Math.abs(r):r}const It={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function ra(a){const e=a.trim(),s=e.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test(s)||/屋面|屋顶|天面/.test(e))return"RF";const r=s.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(r)return`B${Number(r[1])}`;const l=e.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(l){const F=/^\d+$/.test(l[1])?Number(l[1]):It[l[1]];if(F)return`B${F}`}if(/首层|一层/.test(e))return"1F";const p=e.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(p){const F=/^\d+$/.test(p[1])?Number(p[1]):It[p[1]];if(F)return`${F}F`}const E=s.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return E?`${Number(E[1])}F`:null}function za(a){return new Promise((e,s)=>{const r=new FileReader;r.onload=()=>typeof r.result=="string"?e(r.result):s(new Error("无法读取图片内容")),r.onerror=()=>s(new Error(`读取文件「${a.name}」失败`)),r.readAsDataURL(a)})}function is(a){return a.category==="gateway"?a.name.includes("蓝牙")?"蓝牙适配器":"主控网关":a.category==="lighting"?a.name.includes("702")?"702 照明":a.name.slice(0,6):a.category==="hvac"?a.name.includes("VAV")?"VAV-02":a.name.includes("FCU")?"FCU-01":a.name.slice(0,6):a.category==="sensor"?"环境传感":a.name.slice(0,6)}function os(a,e){const s=a.status!=="connected",r=e.filter(l=>l.hardwareBinding?.protocol===a.protocol);return r.length>0?r.map(l=>{const p=l.connectivity==="offline"||s;return{pointName:l.category==="hvac"?"送风温度 / 阀门开度":l.category==="lighting"?"回路开关 / 亮度反馈":l.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:l.name,value:p?"无上报":l.category==="hvac"?"23.4°C · 62%":l.category==="lighting"?"开启 · 80%":l.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:p?"46 分钟前":"12 秒前",quality:p?l.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${a.protocol.toUpperCase()} 采集通道汇总点`,deviceName:a.name,value:s?"采样延迟":"正常上报",interval:"60s",lastSeen:s?"38 分钟前":"9 秒前",quality:s?"delayed":"online"}]}async function ls(a,e,s){const r=new URLSearchParams(window.location.hash.split("?")[1]??""),l=r.get("sec");let p=l==="floors"||l==="projects"?"project_config":l==="floorplan"||l==="devices"||l==="inventory"?"devices":l==="network"||l==="network_topo"?"network_topo":l==="connections"?"connections":"overview",E=l==="inventory"?"list":"marking",F="binding",D="",M="all",K=Ha(),re=!1,P="",G="device",oe="all",Y="",z=!1,B=!1,V="mesh",J=1,le=0,de=0,N=await e.getSpatialTree(),ve=[],pe=[],xe=[];const ue={...ns},H=[];let W=K.level==="all-projects"?N.projects[0]?.id??I.projectId:K.projectId,ce=K.level==="building"||K.level==="floor"?K.buildingId:N.buildings.find(g=>g.projectId===W)?.id??N.buildings[0]?.id??I.buildingId,ie=K.level==="floor"?K.floorId:N.floors.find(g=>g.buildingId===ce&&g.id===I.floorId)?.id??N.floors.find(g=>g.buildingId===ce)?.id??I.floorId,ge=l==="floors"?ie:null,Ie="all",be="zones",A=r.get("new")==="project",Z=!1,Le=!1,R=null,u=!1,S=!1,O=!1,d=!1,f=!1,L=null,se=new Set,me=null,je=!1,ye=[];const Q=[];let w=null,$=null,U=!1,X=!1,fe=null,Te=null,Pe=3,h=!1,ee=[],_e=null,te="",$e="";const Ue=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),Qe=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],Ze=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:I.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:I.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:I.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:I.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],ka=new Map;function De(){A=!1,Z=!1,Le=!1,R=null,u=!1,S=!1,O=!1,d=!1,f=!1,L=null}function Fe(){return!!(A||Z||Le||R||u||S||O||d||f||L)}const ke=g=>{if(!document.body.contains(a)){document.removeEventListener("keydown",ke);return}g.key==="Escape"&&(me?(me=null,m()):Fe()?(De(),m()):B&&(B=!1,X=!1,m()))};document.addEventListener("keydown",ke);function Ve(){return N.floors}function Me(g){return[...N.floors.filter(k=>k.buildingId===g)].sort((k,C)=>Fa(C.name)-Fa(k.name))}function He(){return N.zones}function ze(g){return[...g===I.floorId?ve:[],...H.filter(C=>C.floorId===g)]}function Xe(g){return g?He().find(k=>k.id===g)?.name.replace(/^7F\s*/,"")??g:"未分配功能区"}function ia(g){const k=N.buildings.find(j=>j.id===g);if(!k)return;W=k.projectId,ce=k.id;const C=Me(k.id);C.some(j=>j.id===ie)||(ie=C.find(j=>j.id===I.floorId)?.id??C[0]?.id??""),ge&&!C.some(j=>j.id===ge)&&(ge=null),K=da(ie?{level:"floor",projectId:k.projectId,buildingId:k.id,floorId:ie}:{level:"building",projectId:k.projectId,buildingId:k.id}),$=null,B=!1,X=!1,J=1,le=0,de=0}function aa(g){ie=g;const k=Ve().find(C=>C.id===g);if(k){ce=k.buildingId;const C=N.buildings.find(j=>j.id===k.buildingId);C&&(W=C.projectId),K=da({level:"floor",projectId:W,buildingId:k.buildingId,floorId:k.id})}$=null,B=!1,X=!1,J=1,le=0,de=0}async function qe(){$e="";const[g,k,C,j]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(I.floorId).catch(()=>[]),e.listConnections(W),e.listDeliveryBatches(I.floorId)]);if(N=g,ve=k,pe=C,xe=j,N.projects.length===0)W="",ce="",ie="",ge=null;else{N.projects.some(n=>n.id===W)||(W=N.projects[0].id);const t=N.buildings.filter(n=>n.projectId===W);t.some(n=>n.id===ce)||(ce=t[0]?.id??"");const o=ce?Me(ce):[];o.some(n=>n.id===ie)||(ie=o.find(n=>n.id===I.floorId)?.id??o[0]?.id??""),ge&&!o.some(n=>n.id===ge)&&(ge=null)}const T=ze(ie);$&&!T.some(t=>t.id===$)&&($=null,B=!1),U=T.find(t=>t.id===$)?.physicalInstalled??!1,m()}function ea(){const g=a.querySelector('[data-role="dep-viewport"]');g&&(g.style.transform=`translate(${le}px, ${de}px) scale(${J})`);const k=a.querySelector('[data-role="dep-zoom-label"]');k&&(k.textContent=`${Math.round(J*100)}%`)}function Ea(g){$e="",g.connectivity==="offline"?$e=`单机回读自检未通过（FAIL）：「${g.name}」当前离线，请核查网关链路或中继覆盖。`:te=`单机回读自检通过（PASS）：「${g.name}」指令下发与状态回读一致，已安全复位。`,m()}function Wa(){$e="";const g=ze(ie),k=g.filter(y=>y.connectivity==="offline"),C=g.length-k.length,j=new Date;_e={ranAt:`${String(j.getHours()).padStart(2,"0")}:${String(j.getMinutes()).padStart(2,"0")}:${String(j.getSeconds()).padStart(2,"0")}`,total:g.length,passed:C,failed:k.length,failedNames:k.map(y=>y.name)},k.length>0?$e=`全层批量自检完成：${C}/${g.length} 台通过，${k.length} 台异常（${k.map(y=>y.name).join("、")}）。`:te=`全层批量自检全部通过（${C}/${g.length}），设备已自动安全复位。`,m()}function Ia(){const g=ze(ie),k=[],C=g.filter(o=>o.connectivity==="offline"),j=g.filter(o=>!o.planPoint),T=g.filter(o=>Ue.get(o.id)?.proxy).length,y=g.filter(o=>Ue.get(o.id)?.relay).length,t=g.length?y/g.length:0;C.length>0?C.forEach(o=>k.push({level:"fail",title:`节点不可达：${o.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:o.id})):k.push({level:"ok",title:"全网节点可达性正常",detail:`${g.length} 台设备均正常响应心跳。`}),T<1?k.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):k.push({level:"ok",title:`代理节点配置合理（${T} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),t>.25&&g.length>=4&&k.push({level:"warn",title:`中继比例偏高（${Math.round(t*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),j.length>0&&k.push({level:"warn",title:`尚有 ${j.length} 台未完成设备标记`,detail:"请在「设备管理 → 设备标记」中补齐平面坐标以便施工定位。"}),ee=k,te=`已完成蓝牙 Mesh 网络体检（检测 ${g.length} 台节点，发现 ${k.filter(o=>o.level!=="ok").length} 项关注）。`,m()}function _a(){const g=ze(ie),k=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...g.map(y=>[y.name,y.category,Xe(y.logicalZoneId),y.planPoint?`${Math.round(y.planPoint.x*100)}%/${Math.round(y.planPoint.y*100)}%`:"未标记",y.hardwareBinding?`${y.hardwareBinding.protocol} ${y.hardwareBinding.networkAddress}`:"未绑定",y.physicalInstalled?"已复核":"待复核",y.connectivity==="online"?"在线":"离线"].join(","))],C=new Blob([`\uFEFF${k.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),j=URL.createObjectURL(C),T=document.createElement("a");T.href=j,T.download="pacom-device-list.csv",T.click(),URL.revokeObjectURL(j)}function pa(g){const k=new Set(Me(g.id).map(j=>ra(j.name)??j.name.toUpperCase())),C=[];for(let j=1;j<=g.aboveFloors;j+=1){const T=`${j}F`;k.has(T)||C.push({kind:"above",level:j,name:T})}for(let j=1;j<=g.belowFloors;j+=1){const T=`B${j}`;k.has(T)||C.push({kind:"below",level:-j,name:T})}return g.hasRoof&&!k.has("RF")&&C.push({kind:"roof",level:99,name:"RF"}),C}async function Ga(g){const k=N.buildings.find(j=>j.id===g);if(!k)return 0;const C=pa(k);for(const j of C)await e.upsertFloor?.({buildingId:k.id,kind:j.kind,level:j.level,name:j.name});return C.length}const La={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。",granularity:"building"},project_config:{title:"项目配置",subtitle:"在同一视图内贯通管理项目、园区楼宇、楼层平面底图、功能区与竣工图纸。",granularity:"project"},devices:{title:"设备管理",subtitle:"围绕当前楼层完成设备标记、设备列表核查、参数下发、自检与设备分组。",granularity:"floor"},network_topo:{title:"网络拓扑",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、环境等异构子系统通道及传感器采集质量。",granularity:"project"}};function Ge(g,k="layers"){return`
      <div class="dep-empty-card">
        <div class="dep-empty-icon">${Se(k,20)}</div>
        <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
        <span class="pacom-row-sub" style="max-width:440px;">按「创建项目 → 添加楼宇与楼层 → 上传平面底图」完成建档后，即可开展设备标记、网络同步与交付验收。</span>
        <div class="dep-empty-steps">
          <span>1. 创建项目</span>
          <span>→</span>
          <span>2. 添加楼宇与楼层</span>
          <span>→</span>
          <span>3. 上传平面图</span>
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${g?"":"disabled"}>+ 创建第一个项目</button>
      </div>`}function Za(){const g=(k,C,j,T=!1)=>`
      <button type="button" class="pacom-unified-item" aria-current="${p===k}" data-dep-nav="${k}">
        ${Se(C,16)}
        <span>${j}</span>
        ${T?'<span class="dep-rail-dot" title="有变更待同步至边缘网关"></span>':""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${g("overview","layout-dashboard","部署总览")}
          ${g("project_config","layers","项目配置")}
          ${g("devices","map-pin","设备管理")}
          ${g("network_topo","waypoints","网络拓扑",h)}
          ${g("connections","plug","系统接入")}
        </div>
      </aside>
    `}function ja(g){return N.projects.length===0?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${g?"":"disabled"}>+ 新建项目</button>`:p==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出清单</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${g?"":"disabled"}>+ 交付冻结</button>
      `:p==="project_config"?`<button type="button" class="pacom-btn" data-open-new-proj="1" ${g?"":"disabled"}>+ 新建项目</button>`:p==="devices"?`${`
        <div class="pacom-tabs" role="tablist" aria-label="设备管理视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="marking"}" data-dev-subtab="marking">设备标记</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="list"}" data-dev-subtab="list">设备列表</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="groups"}" data-dev-subtab="groups">设备分组</button>
        </div>`}${E==="marking"?'<button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>':E==="list"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${g?"":"disabled"}>+ 新建分组</button>`}`:p==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${g?"":"disabled"}>${h?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:`
      <button type="button" class="pacom-btn" data-edge-restart="service" ${g?"":"disabled"}>重启边缘服务</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${g?"":"disabled"}>+ 新增接入通道</button>
    `}function ya(g){if(N.projects.length===0)return Ge(g,"layout-dashboard");const k=ce?Me(ce):[],C=k.filter(n=>!!n.plan).length,j=k.flatMap(n=>ze(n.id)),T=j.filter(n=>!!n.planPoint).length,y=j.filter(n=>n.connectivity==="online").length,t=j.filter(n=>n.physicalInstalled).length,o=k.filter(n=>ze(n.id).length>0&&!h).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${k.length>0&&C===k.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 项目与底图</span>
          <div class="pacom-kpi-value">${C}<span class="pacom-kpi-unit">/ ${k.length} 层</span></div>
          <span class="pacom-kpi-delta">${k.length>0&&C===k.length?"全部底图就绪":`尚缺 ${Math.max(0,k.length-C)} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="marking" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${j.length>0&&T===j.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${T}<span class="pacom-kpi-unit">/ ${j.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${Qe.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${j.length>0&&y===j.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${y}<span class="pacom-kpi-unit">/ ${j.length} 台</span></div>
          <span class="pacom-kpi-delta">${j.length-y>0?`${j.length-y} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${h?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${o}<span class="pacom-kpi-unit">/ ${k.length} 层</span></div>
          <span class="pacom-kpi-delta">${h?"有变更待下发 →":`基线 v${Pe}`}</span>
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
                ${k.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前楼宇暂无楼层</strong><span>请先在「项目配置」中生成楼层并上传底图。</span></div></td></tr>':k.map(n=>{const i=ze(n.id),q=He().filter(Ee=>Ee.floorId===n.id),x=i.filter(Ee=>!!Ee.planPoint).length,ae=i.filter(Ee=>Ee.connectivity==="online").length,Ce=i.filter(Ee=>Ee.physicalInstalled).length,Ae=!!n.plan,Oe=Ae&&i.length>0&&x===i.length&&Ce===i.length&&ae===i.length&&!h;return`
                            <tr>
                              <td><strong>${v(n.name)}</strong><div class="pacom-row-sub">${n.areaSqm?`${n.areaSqm} m²`:"待补面积"}</div></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-expand="1" data-matrix-floor="${v(n.id)}"><span class="pacom-dot ${Ae?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${Ae?`已传图 · ${q.length} 区`:"待传底图"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="marking" data-matrix-floor="${v(n.id)}"><span class="pacom-dot ${i.length>0&&x===i.length?"pacom-dot--online":i.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${i.length>0?`${x}/${i.length}`:"未标记"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${v(n.id)}"><span class="pacom-dot ${i.length>0&&ae===i.length?"pacom-dot--online":i.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${i.length>0?`${ae}/${i.length}`:"—"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${v(n.id)}"><span class="pacom-dot ${i.length===0?"pacom-dot--offline":h?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${i.length===0?"—":h?"待同步":`v${Pe}`}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="list" data-matrix-floor="${v(n.id)}"><span class="pacom-dot ${i.length>0&&Ce===i.length?"pacom-dot--online":i.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${i.length>0?`${Ce}/${i.length}`:"—"}</span></button></td>
                              <td style="text-align:right;"><span class="pacom-badge ${Oe?"pacom-badge--online":i.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${Oe?"可验收交付":i.length>0?"实施中":"待配置"}</span></td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${_e?`<div class="pacom-banner ${_e.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${_e.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${_e.passed}/${_e.total} 台${_e.failedNames.length?` · 异常：${_e.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${xe.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${xe.map(n=>`
                    <tr>
                      <td><div style="font-weight:450;">${v(n.versionTag)}</div><div class="pacom-row-sub"><code>${v(n.id)}</code></div></td>
                      <td><strong>${n.verifiedCount}</strong> / ${n.deviceCount} 台</td>
                      <td><div>${v(n.frozenBy)}</div><div class="pacom-row-sub">${v(n.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${ss[n.status]??n.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Aa(g){if(N.projects.length===0)return Ge(g,"layers");const k=N.projects.find(x=>x.id===W)??N.projects[0],C=N.buildings.filter(x=>x.projectId===k.id),j=C.reduce((x,ae)=>x+Me(ae.id).length,0),T=C.find(x=>x.id===ce)??C[0]??null,y=T?Me(T.id):[],t=y.filter(x=>!x.plan).length,o=y.filter(x=>He().filter(ae=>ae.floorId===x.id).length===0).length,n=y.filter(x=>Ie==="missing_plan"?!x.plan:Ie==="missing_zone"?He().filter(ae=>ae.floorId===x.id).length===0:!0),i=T?pa(T):[],q=k.location?`${k.location.lng.toFixed(4)}, ${k.location.lat.toFixed(4)}`:"未设置坐标";return`
      <div class="dep-project-strip">
        <div class="dep-project-strip-main">
          <div class="dep-project-cover">
            <img src="${v(k.imageUrl??"./media/gzlab.jpg")}" alt="${v(k.name)}" />
          </div>
          <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">${v(k.name)}</strong>
              <span class="pacom-badge pacom-badge--neutral">${C.length} 栋楼宇</span>
              <span class="pacom-badge pacom-badge--neutral">${j} 个楼层</span>
            </div>
            <span class="pacom-row-sub">${v(k.city||"未填城市")}${k.address?` · ${v(k.address)}`:""} · 坐标 ${v(q)}</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-edit-proj="1" ${g?"":"disabled"}>编辑项目</button>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <div>
            <h2 class="pacom-section-title">园区楼宇（${C.length} 栋）</h2>
            <span class="pacom-row-sub">点击楼宇卡片切换下方楼层列表，点「编辑参数」修改外观与层数</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-bld="1" ${g?"":"disabled"}>+ 新建楼宇</button>
        </div>
        ${C.length===0?`
            <div class="dep-empty-card">
              <div class="dep-empty-icon">${Se("building-2",20)}</div>
              <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${v(k.name)} 暂无楼宇</strong>
              <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
              <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${g?"":"disabled"}>+ 添加第一栋楼宇</button>
            </div>`:`
            <div class="dep-building-grid">
              ${C.map(x=>{const ae=Me(x.id),Ce=ae.filter(Re=>!!Re.plan).length,Ae=ae.length>0?Math.round(Ce/ae.length*100):0,Oe=pa(x),Ee=T?.id===x.id,he=ae.length===0?"pacom-badge--neutral":Ce===ae.length?"pacom-badge--online":"pacom-badge--warning";return`
                    <article class="dep-building-card ${Ee?"is-active":""}" data-select-building="${v(x.id)}">
                      <div class="dep-building-stage">
                        <img src="${v(x.imageUrl??"./media/building-e.webp")}" alt="${v(x.name)}" />
                      </div>
                      <div class="dep-building-body">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${v(x.name)}</strong>
                          <span class="pacom-badge ${he}">${ae.length===0?"未建层":`${Ce}/${ae.length} 底图`}</span>
                        </div>
                        <div class="pacom-row-sub">地上 ${x.aboveFloors} 层${x.belowFloors>0?` · 地下 ${x.belowFloors} 层`:""}${x.hasRoof?" · RF":""}${x.areaSqm?` · ${x.areaSqm} m²`:""}</div>
                        <div class="pacom-progress-track">
                          <div class="pacom-progress-fill" style="width:${Ae}%; background:${Ae===100?"var(--pacom-status-online)":"var(--pacom-accent-solid)"};"></div>
                        </div>
                        ${Oe.length>0?`<div style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:12px; color:var(--pacom-text-secondary);">
                                 <span>尚缺 ${Oe.length} 个楼层</span>
                                 <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="height:22px; padding:0 6px; font-size:12px;" data-fill-missing-floors="${v(x.id)}" ${g?"":"disabled"}>一键补齐</button>
                               </div>`:""}
                      </div>
                      <div class="dep-building-foot">
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${v(x.id)}" ${g?"":"disabled"}>编辑参数</button>
                        <span class="pacom-row-sub" style="font-size:12px; color:${Ee?"var(--pacom-accent-fg)":"var(--pacom-text-secondary)"};">${Ee?"当前查看中":"点击切换楼层"}</span>
                      </div>
                    </article>`}).join("")}
              <button type="button" class="dep-building-add-card" data-open-new-bld="1" ${g?"":"disabled"}>
                ${Se("plus",20)}
                <span style="font-size:13px;">新建楼宇</span>
              </button>
            </div>`}
      </section>

      ${T?`
          <section class="pacom-section">
            <div class="pacom-section-head">
              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <h2 class="pacom-section-title">${v(T.name)} 楼层与底图（${y.length}）</h2>
                <div class="pacom-count-pills">
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${Ie==="all"}" data-floor-list-filter="all">全部 <span class="pacom-count-num">${y.length}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${Ie==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 <span class="pacom-count-num">${t}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${Ie==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 <span class="pacom-count-num">${o}</span></button>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                ${i.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${v(T.id)}" ${g?"":"disabled"}>一键补齐 ${i.length} 层</button>`:""}
                <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-floor="1" ${g?"":"disabled"}>+ 新增楼层</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-batch-modal="1" ${g?"":"disabled"}>批量导入底图</button>
              </div>
            </div>

            ${y.length===0?`
                <div class="dep-empty-card">
                  <div class="dep-empty-icon">${Se("layers",20)}</div>
                  <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${v(T.name)} 暂无楼层</strong>
                  <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${v(T.id)}" ${g?"":"disabled"}>一键生成全部楼层</button>
                    <button type="button" class="pacom-btn" data-open-new-floor="1" ${g?"":"disabled"}>+ 手动新增楼层</button>
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
                        ${n.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':n.map(x=>{const ae=He().filter(he=>he.floorId===x.id),Ce=[...kt,...Q].filter(he=>he.floorId===x.id),Ae=ze(x.id),Oe=ge===x.id,Ee=y.filter(he=>he.id!==x.id);return`
                                    <tr>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:7px;">
                                          <span class="pacom-dot ${x.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                          <strong>${v(x.name)}</strong>
                                        </div>
                                      </td>
                                      <td><span class="pacom-row-sub">${x.areaSqm?`${x.areaSqm} m²`:"—"}</span></td>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:8px;">
                                          ${x.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${v(T.name)} ${v(x.name)} 平面底图" data-lb-src="${v(x.plan.imageUrl)}" title="查看大图"><img src="${v(x.plan.imageUrl)}" alt="${v(x.name)}" /></button>
                                                 <span class="pacom-badge pacom-badge--online">已就绪</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                          <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="cursor:pointer; height:24px; padding:0 6px; font-size:12px;">
                                            <span>${x.plan?"替换":"上传"}</span>
                                            <input type="file" name="floorPlan_${v(x.id)}" accept="image/*" data-upload-floor="${v(x.id)}" style="display:none;" ${g?"":"disabled"} />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        ${ae.length>0?`<span>${ae.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${v(ae.slice(0,2).map(he=>he.name.replace(/^7F\s*/,"")).join("、"))}${ae.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                                      </td>
                                      <td><span class="pacom-row-sub">${Ce.length} 份</span></td>
                                      <td>
                                        <div style="display:flex; justify-content:flex-end; gap:6px;">
                                          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-expand-floor="${v(x.id)}">${Oe?"收起配置":"展开配置"}</button>
                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${v(x.id)}">设备标记 →</button>
                                        </div>
                                      </td>
                                    </tr>
                                    ${Oe?`
                                        <tr class="pacom-table-detail-row">
                                          <td colspan="6">
                                            <div class="dep-floor-expand-grid">
                                              <div class="dep-floor-expand-col">
                                                <div class="dep-plan-preview-box" style="min-height:260px;" data-single-floor-drop="${v(x.id)}">
                                                  <div class="dep-plan-toolbar">
                                                    ${x.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${v(T.name)} ${v(x.name)} 平面底图" data-lb-src="${v(x.plan.imageUrl)}">查看大图</button>`:""}
                                                    <label class="dep-plan-tool-btn" style="cursor:pointer;">
                                                      <span>${x.plan?"替换底图":"上传底图"}</span>
                                                      <input type="file" name="floorPlanDrop_${v(x.id)}" accept="image/*" data-upload-floor="${v(x.id)}" style="display:none;" ${g?"":"disabled"} />
                                                    </label>
                                                    ${x.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${v(x.id)}" ${g?"":"disabled"}>清空</button>`:""}
                                                  </div>
                                                  ${x.plan?`<img src="${v(x.plan.imageUrl)}" alt="${v(x.name)} 平面图" style="width:100%; max-height:290px; object-fit:contain; display:block;" />`:`<div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:24px; text-align:center;">
                                                           <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${v(x.name)} 2D 平面图到此处</strong>
                                                           <span class="pacom-row-sub">支持透明 WebP / PNG / JPG</span>
                                                         </div>`}
                                                </div>
                                              </div>

                                              <div class="dep-floor-expand-col">
                                                <div class="pacom-settings-card" style="padding:10px 16px;">
                                                  <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                                                    <form data-save-floor="${v(x.id)}" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                                                      <input class="pacom-input" name="fName" value="${v(x.name)}" aria-label="楼层名称" style="width:76px; height:32px; flex:none;" required ${g?"":"disabled"} />
                                                      <input class="pacom-input" name="fArea" type="number" step="0.1" value="${v(x.areaSqm??"")}" placeholder="面积 m²" aria-label="建筑面积" style="width:110px; height:32px; flex:none;" ${g?"":"disabled"} />
                                                      <button type="submit" class="pacom-btn" ${g?"":"disabled"}>保存</button>
                                                    </form>
                                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-delete-floor="${v(x.id)}" ${!g||Ae.length>0?`disabled title="${Ae.length>0?`已关联 ${Ae.length} 台设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                                                  </div>
                                                </div>

                                                <div class="pacom-settings-card" style="padding:4px 16px;">
                                                  <div class="pacom-setting-row" style="padding:10px 0; justify-content:space-between; gap:8px;">
                                                    <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${be==="zones"}" data-floor-detail-tab="zones">功能区（${ae.length}）</button>
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${be==="docs"}" data-floor-detail-tab="docs">竣工图纸与手册（${Ce.length}）</button>
                                                    </div>
                                                    ${be==="zones"?ae.length>0&&Ee.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-open-copy-zones="${v(x.id)}" ${g?"":"disabled"}>复用至其他层…</button>`:"":`<label class="pacom-btn pacom-btn--sm" style="cursor:pointer;"><span>+ 关联文件</span><input type="file" name="attachDoc_${v(x.id)}" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${v(x.id)}" style="display:none;" ${g?"":"disabled"} /></label>`}
                                                  </div>
                                                  ${be==="zones"?`
                                                        ${ae.length===0?`
                                                            <div class="pacom-setting-row" style="padding:10px 0; flex-direction:column; align-items:flex-start; gap:8px;">
                                                              <span class="pacom-row-sub">暂未划分功能区，可一键套用常用模板：</span>
                                                              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                                                ${Et.map(he=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${v(he.key)}" data-tpl-floor="${v(x.id)}" ${g?"":"disabled"}>+ ${v(he.label)}</button>`).join("")}
                                                              </div>
                                                            </div>`:ae.map(he=>w===he.id?`
                                                                      <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-save-edit-zone="${v(he.id)}" data-zone-floor="${v(x.id)}">
                                                                        <input class="pacom-input" name="zName" value="${v(he.name)}" style="width:180px; height:30px; flex:none;" required />
                                                                        <select class="pacom-select" name="zCat" style="width:110px; height:30px;">
                                                                          ${Object.keys(st).map(Re=>`<option value="${Re}" ${he.category===Re?"selected":""}>${st[Re]}</option>`).join("")}
                                                                        </select>
                                                                        <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                                                      </form>`:`
                                                                      <div class="pacom-setting-row" style="padding:9px 0;">
                                                                        <div class="pacom-setting-meta" style="min-width:140px;">
                                                                          <span class="pacom-setting-title">${v(he.name)} <span class="pacom-badge pacom-badge--neutral">${v(st[he.category]??he.category)}</span></span>
                                                                        </div>
                                                                        <div class="pacom-setting-control">
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${v(he.id)}" ${g?"":"disabled"}>编辑</button>
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${v(he.id)}" ${g?"":"disabled"}>删除</button>
                                                                        </div>
                                                                      </div>`).join("")}
                                                        <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-add-zone="${v(x.id)}">
                                                          <input class="pacom-input" name="zoneName" placeholder="新功能区名称（如：${v(x.name)} 东侧实验区）" style="width:210px; height:32px; flex:none;" required ${g?"":"disabled"} />
                                                          <select class="pacom-select" name="zoneCat" style="width:112px; height:32px;" ${g?"":"disabled"}>
                                                            <option value="lab">实验区</option>
                                                            <option value="office">办公区</option>
                                                            <option value="meeting">会议室</option>
                                                            <option value="corridor">走廊/公区</option>
                                                            <option value="utility">机房/后勤</option>
                                                            <option value="outdoor">露台/活动区</option>
                                                          </select>
                                                          <button type="submit" class="pacom-btn" ${g?"":"disabled"}>+ 添加</button>
                                                        </form>`:Ce.length===0?'<div class="pacom-setting-row" style="padding:12px 0;"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':Ce.map(he=>`
                                                              <div class="pacom-setting-row" style="padding:9px 0;">
                                                                <div class="pacom-setting-meta" style="min-width:140px;">
                                                                  <span class="pacom-setting-title">${v(he.name)}</span>
                                                                  <span class="pacom-row-sub">${v(he.category)} · ${v(he.size)} · ${v(he.updatedAt)}</span>
                                                                </div>
                                                                <div class="pacom-setting-control">
                                                                  <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${v(he.id)}">查阅</button>
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
    `}function Ka(g){if(!B||p!=="devices"||E==="groups")return"";const C=ze(ie).find(t=>t.id===$)??null;if(!C)return"";const j=Ue.get(C.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${ie.slice(-4)}`},T=Qe.filter(t=>t.deviceId===C.id),y=ka.get(C.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450};return`
      <aside class="pacom-drawer" style="width:376px;" aria-label="设备配置抽屉">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${v(C.name)}</h2>
            <div class="pacom-row-sub">${v(Xe(C.logicalZoneId))} · v${C.version}</div>
          </div>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${Se("x",16)}</button>
        </div>

        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${g?"":"disabled"}>${X?"点击图纸定位中…":"点图更新坐标"}</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${v(C.id)}">Ping 闪灯 5s</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${F==="binding"}" data-drawer-tab="binding">绑定与安装</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${F==="params"}" data-drawer-tab="params">自治参数</button>
        </div>

        ${F==="binding"?`
            ${C.category==="lighting"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">回路可视化灯点（${T.length}）</span>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${v(C.id)}" ${g?"":"disabled"}>+ 添加灯点</button>
                  </div>
                  ${T.map(t=>`
                      <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                        <span><strong>${v(t.channel)}</strong> · ${v(t.label)}</span>
                        <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:12px;" data-del-light-marker="${v(t.id)}" ${g?"":"disabled"}>删除</button>
                      </div>`).join("")}
                </div>`:""}

            ${C.category!=="hvac"&&C.category!=="meter"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                    <code style="font-size:12px;">${v(j.meshUuid)}</code>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Proxy 代理（建议每层 2–3 个）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${j.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${v(C.id)}" ${g?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${j.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${v(C.id)}" ${g?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                </div>`:""}

            <form data-role="binding-form" class="pacom-control-box" style="gap:10px;">
              <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">通信协议</span>
                  <select class="pacom-select" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(t=>`<option value="${t}" ${C.hardwareBinding?.protocol===t?"selected":""}>${t.toUpperCase()}</option>`).join("")}
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">网络地址 / 主题</span>
                  <input class="pacom-input" name="networkAddress" placeholder="地址或主题" value="${v(C.hardwareBinding?.networkAddress??"")}" />
                </label>
              </div>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:10px;">
                <label class="dep-field" style="flex:1;">
                  <span class="dep-field-label">端口 / 回路</span>
                  <input class="pacom-input" name="portOrChannel" placeholder="端口或回路" value="${v(C.hardwareBinding?.portOrChannel??"")}" />
                </label>
                <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; height:32px; flex-shrink:0;">
                  <span>物理已复核</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${U}" data-toggle-phys="1" ${g?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                </span>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${g?"":"disabled"}>保存绑定与复核（v${C.version}）</button>
            </form>`:`
            <form data-save-dev-params="${v(C.id)}" class="pacom-control-box" style="gap:10px;">
              <div>
                <div style="font-size:14px; font-weight:450;">人感与光感自治参数</div>
                <div class="pacom-row-sub">自动关灯延时、恢复自动延时与光照度门限</div>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${y.offDelayMin}" ${g?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" value="${y.restoreMin}" ${g?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" value="${y.luxOn}" ${g?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" value="${y.luxOff}" ${g?"":"disabled"} /></label>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${g?"":"disabled"}>下发设备参数</button>
            </form>`}
      </aside>
    `}function Ca(g){if(N.projects.length===0)return`
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${Ge(g,"map-pin")}</div>
        </main>`;const k=ce?Me(ce):[],C=k.find(n=>n.id===ie)??k[0],j=ze(ie),T=He().filter(n=>n.floorId===ie),y=B?j.find(n=>n.id===$)??null:null,t=Y.trim().toLowerCase(),o=j.filter(n=>!(oe==="unverified"&&n.physicalInstalled||oe==="unplaced"&&n.planPoint||t&&!`${n.name} ${Xe(n.logicalZoneId)}`.toLowerCase().includes(t)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${Se("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${v(Y)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${z?"is-active":""}" data-toggle-hud-pool="1">设备池 ${j.length}</button>
            <button type="button" class="pacom-hud-pill" data-open-new-dev="1" ${g?"":"disabled"}>+ 新增设备</button>
          </div>

          ${z?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${v(C?.name??"7F")} 设备池（${o.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${Se("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-count-pills">
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${oe==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${j.length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${oe==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${j.filter(n=>!n.physicalInstalled).length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${oe==="unplaced"}" data-dev-filter="unplaced">未标记 <span class="pacom-count-num">${j.filter(n=>!n.planPoint).length}</span></button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${o.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':o.map(n=>`
                            <div class="pacom-row ${n.id===$&&B?"is-selected":""}" data-pick-dev="${v(n.id)}" style="padding:8px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${v(n.name)}</div>
                                <div class="pacom-row-sub">${v(Xe(n.logicalZoneId))} · ${n.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${n.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${n.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${X?"crosshair":"grab"};">
          ${C?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${le}px, ${de}px) scale(${J});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${v(C.plan.imageUrl)}" alt="${v(C.name)} 平面图" />
                  ${G==="zone"?T.map(n=>{const i=ue[n.id];return i?`<div class="pacom-zone-hotspot is-active" style="left:${i.left}%; top:${i.top}%; width:${i.width}%; height:${i.height}%;"><span class="pacom-zone-tag">${v(n.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${j.filter(n=>n.planPoint).map(n=>`
                      <button type="button" class="pacom-pin ${n.id===$&&B?"is-selected":""} ${n.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(n.planPoint.x*100).toFixed(2)}%; top:${(n.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${v(n.id)}" title="${v(n.name)}">
                        <span class="pacom-dot ${n.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${v(is(n))}</span>
                      </button>`).join("")}
                  ${G==="light_marker"||y?.category==="lighting"?Qe.filter(n=>j.some(i=>i.id===n.deviceId)).map(n=>`
                            <span class="dep-light-dot" style="left:${(n.x*100).toFixed(1)}%; top:${(n.y*100).toFixed(1)}%;" title="${v(n.label)}（${v(n.channel)}）">
                              ${Se("sparkles",12)}<span>${v(n.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${v(ie)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${k.map(n=>`
              <button type="button" class="pacom-elev-item ${n.id===ie?"is-active":""}" data-scrubber-floor="${v(n.id)}" title="${v(n.name)}${n.plan?" · 已传底图":" · 待传底图"}">
                ${n.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${v(n.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${G==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${G==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${G==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${Se("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(J*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${Se("plus",16)}</button>
        </div>
      </main>
    `}function Ya(g){if(N.projects.length===0)return Ge(g,"list");const k=ze(ie),C=D.trim().toLowerCase(),j=k.filter(y=>!(M==="online"&&y.connectivity!=="online"||M==="offline"&&y.connectivity!=="offline"||M==="unverified"&&y.physicalInstalled||C&&!`${y.name} ${Xe(y.logicalZoneId)} ${y.hardwareBinding?.protocol??""}`.toLowerCase().includes(C))),T=k.filter(y=>y.connectivity==="online").length;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${v(D)}" aria-label="搜索设备列表" />
          <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
            <option value="all" ${M==="all"?"selected":""}>全部状态（${k.length}）</option>
            <option value="online" ${M==="online"?"selected":""}>仅看在线（${T}）</option>
            <option value="offline" ${M==="offline"?"selected":""}>仅看离线（${k.length-T}）</option>
            <option value="unverified" ${M==="unverified"?"selected":""}>待物理复核（${k.filter(y=>!y.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${Se("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-dev="1" ${g?"":"disabled"}>+ 新增设备</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-export-inv="1">导出 CSV</button>
        </div>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${j.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词、切换筛选，或点击「+ 新增设备」。</span></div></td></tr>':j.map(y=>`
                        <tr style="cursor:pointer;" data-open-dev-drawer="${v(y.id)}">
                          <td><div style="font-weight:450;">${v(y.name)}</div><div class="pacom-row-sub">${v(Xe(y.logicalZoneId))} · v${y.version}</div></td>
                          <td><span class="pacom-badge ${y.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${y.planPoint?`${Math.round(y.planPoint.x*100)}%,${Math.round(y.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${y.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${y.hardwareBinding?y.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${y.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${y.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${y.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${y.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${v(y.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-dev-params="${v(y.id)}">配置</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${v(y.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${j.length} / ${k.length} 台设备 · ${T} 在线 · ${k.length-T} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dev-subtab="marking">切换至设备标记 →</button>
        </div>
      </div>
    `}function Ja(g){if(N.projects.length===0)return Ge(g,"folder-kanban");const k=Ze.filter(T=>T.floorId===ie||ie===I.floorId&&T.floorId===I.floorId),C=k.filter(T=>T.track==="mesh_auto"),j=k.filter(T=>T.track==="cloud_biz");return`
      <div class="pacom-grid-2">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${C.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${C.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':C.map(T=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${v(T.name)} <span class="pacom-badge pacom-badge--neutral">${v(T.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${T.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${v(T.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${j.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${j.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':j.map(T=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${v(T.name)} <span class="pacom-badge pacom-badge--neutral">${v(T.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${T.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${v(T.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>
      </div>
    `}function Ke(g){if(N.projects.length===0)return Ge(g,"waypoints");const k=ze(ie),C=He().filter(i=>i.floorId===ie),j=k.filter(i=>i.category!=="hvac"&&i.category!=="meter"),T=j.filter(i=>Ue.get(i.id)?.proxy).length,y=j.filter(i=>Ue.get(i.id)?.relay).length,t=k.filter(i=>i.category==="gateway"),o=k.filter(i=>Ue.get(i.id)?.relay||Ue.get(i.id)?.proxy),n=k.filter(i=>i.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge ${h?"pacom-badge--warning":"pacom-badge--online"}">${h?"有变更待同步":"协同锁空闲 · 已同步"}</span>
            <span class="pacom-row-sub">Mesh 节点 ${j.length} 台 · Proxy ${T} 个 · Relay ${y} 个 · 边缘基线 v${Pe}</span>
          </div>
        </div>
        ${ee.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${ee.map(i=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${v(i.title)}</strong> <span class="pacom-row-sub">· ${v(i.detail)}</span></div>
                      <span class="pacom-badge ${i.level==="ok"?"pacom-badge--online":i.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${i.level==="ok"?"通过":i.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达设备标记）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${V==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${V==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${V==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${t.length===0?'<div class="pacom-row-sub">本层暂未配置网关节点。</div>':t.map(i=>`
                          <button type="button" class="dep-topo-node ${i.connectivity==="offline"?"is-issue":""}" data-topo-jump="${v(i.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${v(i.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                            <span class="pacom-row-sub">${v(i.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                          </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${o.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，可在「设备管理」抽屉中为传感器开启。</div>':o.map(i=>{const q=Ue.get(i.id);return`
                            <button type="button" class="dep-topo-node ${i.connectivity==="offline"?"is-issue":""}" data-topo-jump="${v(i.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${v(i.name)}</strong><span class="pacom-badge pacom-badge--accent">${q?.proxy?"Proxy":""}${q?.proxy&&q?.relay?" + ":""}${q?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${v(Xe(i.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${n.length===0?'<div class="pacom-row-sub">本层暂无末端设备。</div>':n.map(i=>`
                          <button type="button" class="dep-topo-node ${i.connectivity==="offline"?"is-issue":""}" data-topo-jump="${v(i.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${v(i.name)}</strong><span class="pacom-badge ${i.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${i.connectivity==="online"?"在线":"离线"}</span></div>
                            <span class="pacom-row-sub">${v(Xe(i.logicalZoneId))} · ${v(i.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                          </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${k.filter(i=>i.category==="sensor"||i.category==="gateway").map(i=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${v(i.id)}">
                      <strong>${v(i.name)}</strong>
                      <span class="pacom-row-sub">${i.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${k.filter(i=>i.category==="lighting"||i.category==="hvac").map(i=>`
                    <button type="button" class="dep-topo-node ${i.connectivity==="offline"?"is-issue":""}" data-topo-jump="${v(i.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${v(i.name)}</strong><span class="pacom-badge ${i.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${i.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${v(Xe(i.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${C.map(i=>{const q=k.filter(ae=>ae.logicalZoneId===i.id),x=q.some(ae=>ae.connectivity==="offline");return`
                      <div class="dep-topo-node ${x?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${v(i.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${x?"pacom-badge--warning":"pacom-badge--online"}">${q.length} 台设备</span></div>
                        <span class="pacom-row-sub">${x?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function b(g){if(N.projects.length===0)return Ge(g,"plug");const k=pe.reduce((y,t)=>y+t.collectedPoints,0),C=pe.reduce((y,t)=>y+t.calculatedPoints,0),j=pe.filter(y=>y.status==="connected").length,T=pe.filter(y=>y.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${j}<span class="pacom-kpi-unit">/ ${pe.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${pe.length?Math.round(j/pe.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${k}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${C}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${T.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${T.length} 条采集通道通信降级（${T.map(y=>y.name).join("、")}）</span>
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
                ${pe.map(y=>{const t=ts[y.status]??{label:y.status,cls:"pacom-badge--neutral"},o=y.status==="connected"?98:y.status==="degraded"?62:0,n=o>=75?"var(--pacom-status-online)":o>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",i=Te===y.id,q=i?os(y,ve):[];return`
                      <tr>
                        <td><strong>${v(y.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${y.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${v(y.endpoint)}</code></td>
                        <td>采集 ${y.collectedPoints} / 计算 ${y.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${t.cls}">${t.label}</span>
                            <span class="pacom-row-sub">${o}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${o}%; background:${n};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${v(y.id)}">${i?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${v(y.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${v(y.id)}" data-endpoint-val="${v(y.endpoint)}">${fe===y.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${i?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${v(y.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${q.map(x=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${v(x.deviceName)}</strong> · ${v(x.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${v(x.value)} · ${v(x.lastSeen)}</span>
                                        <span class="pacom-badge ${x.quality==="online"?"pacom-badge--online":x.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${x.quality==="online"?"在线正常":x.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function _(g){const k=[],C=N.projects.find(y=>y.id===W)??N.projects[0]??null,j=N.buildings.find(y=>y.id===ce)??(C?N.buildings.find(y=>y.projectId===C.id):null)??null;if(A&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
          <form class="dep-modal-card" data-create-project="1">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建项目</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Se("x",16)}</button>
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
        </div>`),Z&&C){const t=N.buildings.filter(o=>o.projectId===C.id).reduce((o,n)=>o+Me(n.id).reduce((i,q)=>i+ze(q.id).length,0),0);k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
          <form class="dep-modal-card" data-save-project="${v(C.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑项目：${v(C.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Se("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${v(C.imageUrl??"./media/gzlab.jpg")}" alt="${v(C.name)}" style="width:84px; height:54px; object-fit:cover; border-radius:6px; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">项目封面图</div>
                  <div class="pacom-row-sub">用于空间总览的园区俯瞰展示</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>更换封面</span>
                  <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${v(C.id)}" style="display:none;" ${g?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${v(C.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${v(C.city??"")}" /></label>
                <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${v(C.address??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${v(C.location?.lng??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${v(C.location?.lat??"")}" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${v(C.id)}" ${!g||t>0?`disabled title="${t>0?`包含 ${t} 台运行中设备，请先解绑后再删除`:"只读"}"`:""}>删除项目</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${g?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}Le&&C&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
          <form class="dep-modal-card" data-create-bld="${v(C.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建楼宇（${v(C.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Se("x",16)}</button>
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
        </div>`);const T=R?N.buildings.find(y=>y.id===R)??null:null;if(T){const y=Me(T.id),t=y.reduce((n,i)=>n+ze(i.id).length,0),o=pa(T);k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
          <form class="dep-modal-card" data-save-building="${v(T.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑楼宇：${v(T.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Se("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${v(T.imageUrl??"./media/building-e.webp")}" alt="${v(T.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:6px; background:#fff; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">楼宇外观 / 白模图</div>
                  <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>替换图片</span>
                  <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${v(T.id)}" style="display:none;" ${g?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${v(T.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${v(T.areaSqm??"")}" placeholder="选填" /></label>
                <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${T.aboveFloors}" /></label>
                <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${T.belowFloors}" /></label>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                <label style="display:inline-flex; align-items:center; gap:6px; font-size:13px;"><input type="checkbox" name="bRoof" ${T.hasRoof?"checked":""} />含屋面层 (RF)</label>
                ${o.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${v(T.id)}">一键补齐缺失 ${o.length} 层</button>`:`<span class="pacom-row-sub">已配置 ${y.length} 个楼层</span>`}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${v(T.id)}" ${!g||t>0?`disabled title="${t>0?"包含运行中设备，请先解绑后再删除":"只读"}"`:""}>删除楼宇</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${g?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}if(u&&j&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
          <form class="dep-modal-card" data-create-floor="${v(j.id)}" style="width:min(420px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增楼层（${v(j.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Se("x",16)}</button>
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
        </div>`),S&&j){const y=Me(j.id),t=ye.filter(o=>!!o.matchedFloorId).length;k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
          <div class="dep-modal-card dep-modal-card--wide">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">批量导入 ${v(j.name)} 平面底图</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Se("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-upload-drop" data-batch-dropzone="${v(j.id)}" style="padding:20px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${je?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
                <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
                <span class="pacom-row-sub">自动识别 01F、首层、屋面、RF、B1 等中英文文件名，支持手动调整对应楼层</span>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; margin-top:4px;">
                  <span>选择多张图片</span>
                  <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${v(j.id)}" style="display:none;" ${g?"":"disabled"} />
                </label>
              </div>
              ${ye.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                      <div class="pacom-row-sub">已选 ${ye.length} 张图片，已匹配 ${t} 层：</div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:6px; max-height:220px; overflow-y:auto;">
                        ${ye.map(o=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${v(o.file.name)}">${v(o.file.name)}</span>
                              <select class="pacom-select" name="overrideFloor_${v(o.id)}" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${v(o.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${y.map(n=>`<option value="${v(n.id)}" ${o.matchedFloorId===n.id?"selected":""}>${v(n.name)}</option>`).join("")}
                              </select>
                            </div>`).join("")}
                      </div>
                    </div>`:""}
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-batch-upload="1" ${ye.length===0?"disabled":""}>清空已选</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">关闭</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-batch-upload="1" ${t===0?"disabled":""}>确认导入（${t} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(L&&j){const y=Ve().find(o=>o.id===L),t=Me(j.id).filter(o=>o.id!==L);y&&t.length>0&&k.push(`
          <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
            <div class="dep-modal-card">
              <div class="dep-modal-head">
                <strong style="font-size:15px; font-weight:500;">复用 ${v(y.name)} 功能区至其他楼层</strong>
                <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Se("x",16)}</button>
              </div>
              <div class="dep-modal-body">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <span class="pacom-row-sub">勾选目标楼层（已选 ${se.size} 层）</span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                  </div>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${t.map(o=>{const n=se.has(o.id),i=He().filter(q=>q.floorId===o.id).length;return`
                        <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${n}">
                          <input type="checkbox" name="copyFloor_${v(o.id)}" data-copy-target-floor="${v(o.id)}" ${n?"checked":""} style="margin:0;" />
                          <span>${v(o.name)}${i>0?` (${i}区)`:""}</span>
                        </label>`}).join("")}
                </div>
              </div>
              <div class="dep-modal-foot">
                <span></span>
                <div style="display:flex; gap:8px;">
                  <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                  <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${v(y.id)}" ${se.size===0?"disabled":""}>确认复制（${se.size} 层）</button>
                </div>
              </div>
            </div>
          </div>`)}if(O){const y=He().filter(t=>t.floorId===ie);k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
          <form class="dep-modal-card" data-create-dev="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增设备</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Se("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">设备名称</span>
                <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">设备类型</span>
                  <select class="pacom-select" name="devPreset">${nt.map(t=>`<option value="${t.key}">${t.label}</option>`).join("")}</select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">所属功能区</span>
                  <select class="pacom-select" name="devZone">
                    <option value="">暂不分配</option>
                    ${y.map(t=>`<option value="${v(t.id)}">${v(t.name)}</option>`).join("")}
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
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Se("x",16)}</button>
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
        </div>`),f&&k.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增接入通道">
          <form class="dep-modal-card" data-create-conn="1" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增子系统接入通道</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Se("x",16)}</button>
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
        </div>`),k.join("")}function m(){const g=s.scope.canEditDeployment,k=s.scope.activeOverrides.find(o=>o.module==="deployment"&&o.status==="active"),C=k?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 · ${k.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${v(k.approvedBy)} · 到期自动收回：${v(k.expiresAt.slice(0,16).replace("T"," "))} · 事由：${v(k.reason)}</span>
          </div>
        </div>`:"",j=p==="devices"&&E==="marking",T=La[p],y=p==="devices"?E==="marking"?"设备标记":E==="list"?"设备列表":"设备分组":T.title,t=p==="devices"?E==="marking"?"在 2D 平面底图上完成设备坐标标记、回路灯点布置与硬件绑定。":E==="list"?"核查本层四态设备清单，点击任意行配置硬件绑定、人感/光感参数或执行自检。":"管理端侧蓝牙 Mesh 自治联动组与云端业务分组。":T.subtitle;a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Ua({tree:N,session:s,scope:K,maxGranularity:T.granularity,isOpen:re,searchKeyword:P})}
            </div>
            <div class="pacom-header-meta">
              ${g?k?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${Za()}
          ${j?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${y}</h2>
                      <p class="pacom-unified-subtitle">${t}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${ja(g)}
                    </div>
                  </div>
                  ${C}
                  ${te?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${v(te)}</span></div>`:""}
                  ${$e?`<div class="pacom-alert-banner">${v($e)}</div>`:""}
                  ${Ca(g)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head pacom-unified-head--split">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${y}</h2>
                      <p class="pacom-unified-subtitle">${t}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${ja(g)}
                    </div>
                  </div>
                  ${C}
                  ${te?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${v(te)}</span></div>`:""}
                  ${$e?`<div class="pacom-alert-banner">${v($e)}</div>`:""}
                  ${p==="overview"?ya(g):p==="project_config"?Aa(g):p==="devices"?E==="list"?Ya(g):Ja(g):p==="network_topo"?Ke(g):b(g)}
                </div>
              </div>`}
          ${Ka(g)}
        </div>
      </div>
      ${_(g)}
      ${me?`
          <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${v(me.title)}">
            <div class="dep-lightbox-card">
              <div class="dep-lightbox-head">
                <strong style="font-size:14px; font-weight:500;">${v(me.title)}</strong>
                <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${Se("x",16)}</button>
              </div>
              <div class="dep-lightbox-body">
                <img src="${v(me.imageUrl)}" alt="${v(me.title)}" />
              </div>
            </div>
          </div>`:""}
    `,ne()}function ne(){Va(a,{onToggle:()=>{re=!re,m(),re&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:t=>{P=t,m();const o=a.querySelector("[data-global-space-search]");o&&(o.focus(),o.setSelectionRange(t.length,t.length))},onPick:t=>{if(K=t,re=!1,t.level==="project"){W=t.projectId;const o=N.buildings.find(n=>n.projectId===t.projectId);o?ia(o.id):(ce="",ie="",ge=null)}else t.level==="building"?ia(t.buildingId):t.level==="floor"&&aa(t.floorId);m()}}),a.querySelectorAll("[data-dep-nav]").forEach(t=>{t.addEventListener("click",()=>{p=t.dataset.depNav??"overview",t.dataset.devSubtabJump&&(E=t.dataset.devSubtabJump),B=!1,X=!1,te="",$e="",m()})}),a.querySelectorAll("[data-dev-subtab]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.devSubtab??"marking";E=o,o==="groups"&&(B=!1,X=!1),te="",$e="",m()})}),a.querySelectorAll("[data-drawer-tab]").forEach(t=>{t.addEventListener("click",()=>{F=t.dataset.drawerTab??"binding",m()})}),a.querySelector("[data-list-search]")?.addEventListener("input",t=>{D=t.currentTarget.value,m();const o=a.querySelector("[data-list-search]");o&&(o.focus(),o.setSelectionRange(D.length,D.length))}),a.querySelector("[data-list-filter]")?.addEventListener("change",t=>{M=t.currentTarget.value??"all",m()}),a.querySelectorAll("[data-refresh-dep]").forEach(t=>{t.addEventListener("click",()=>{qe()})}),a.querySelectorAll("[data-matrix-nav]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.matrixFloor;o&&aa(o),p=t.dataset.matrixNav??"devices",t.dataset.matrixSub&&(E=t.dataset.matrixSub),t.dataset.matrixExpand==="1"&&o&&(ge=o),m()})}),a.querySelectorAll("[data-scrubber-floor]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.scrubberFloor;o&&(aa(o),m())})}),a.querySelectorAll("[data-close-modals]").forEach(t=>{t.addEventListener("click",()=>{De(),m()})}),a.querySelectorAll("[data-modal-scrim]").forEach(t=>{t.addEventListener("click",o=>{o.target===t&&(De(),m())})}),a.querySelectorAll("[data-open-new-proj]").forEach(t=>{t.addEventListener("click",()=>{De(),A=!0,m()})}),a.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{De(),Z=!0,m()}),a.querySelectorAll("[data-open-new-bld]").forEach(t=>{t.addEventListener("click",()=>{De(),Le=!0,m()})}),a.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{De(),u=!0,m()}),a.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{De(),S=!0,m()}),a.querySelectorAll("[data-open-new-dev]").forEach(t=>{t.addEventListener("click",()=>{De(),O=!0,m()})}),a.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{De(),d=!0,m()}),a.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{De(),f=!0,m()}),a.querySelectorAll("[data-select-building]").forEach(t=>{t.addEventListener("click",o=>{if(o.target?.closest("button, label, input"))return;const n=t.dataset.selectBuilding;n&&n!==ce&&(ia(n),Ie="all",ge=null,m())})}),a.querySelectorAll("[data-edit-building]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),De(),R=t.dataset.editBuilding??null,m()})}),a.querySelectorAll("[data-toggle-expand-floor]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.toggleExpandFloor??null;ge=ge===o?null:o,ge&&aa(ge),w=null,m()})}),a.querySelectorAll("[data-jump-floor-marking]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.jumpFloorMarking;o&&aa(o),p="devices",E="marking",m()})}),a.querySelector("[data-jump-floor-config]")?.addEventListener("click",t=>{const o=t.currentTarget.dataset.jumpFloorConfig;p="project_config",o&&(ge=o),m()}),a.querySelectorAll("[data-floor-detail-tab]").forEach(t=>{t.addEventListener("click",()=>{be=t.dataset.floorDetailTab??"zones",m()})}),a.querySelectorAll("[data-floor-list-filter]").forEach(t=>{t.addEventListener("click",()=>{Ie=t.dataset.floorListFilter??"all",m()})}),a.querySelector("[data-create-project]")?.addEventListener("submit",async t=>{t.preventDefault();const o=new FormData(t.currentTarget),n=String(o.get("pName")??"").trim(),i=String(o.get("pCity")??"").trim(),q=String(o.get("pAddr")??"").trim(),x=String(o.get("pLng")??"").trim(),ae=String(o.get("pLat")??"").trim();if(!n)return;let Ce;if(x||ae){const Ae=Number(x),Oe=Number(ae);if(!Number.isFinite(Ae)||!Number.isFinite(Oe)||Ae<-180||Ae>180||Oe<-90||Oe>90){$e="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",m();return}Ce={lng:Ae,lat:Oe,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const Ae=await e.createProject?.({name:n,city:i,address:q,location:Ce});De(),p="project_config",Ae&&(W=Ae.id,ce="",ie="",ge=null,K=da({level:"project",projectId:Ae.id})),te=`已创建项目「${n}」，下一步可添加园区楼宇。`,await qe()}catch(Ae){$e=Ae instanceof Error?Ae.message:String(Ae),m()}}),a.querySelector("[data-save-project]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget,n=o.dataset.saveProject??W,i=new FormData(o),q=String(i.get("pName")??"").trim(),x=String(i.get("pCity")??"").trim(),ae=String(i.get("pAddr")??"").trim(),Ce=String(i.get("pLng")??"").trim(),Ae=String(i.get("pLat")??"").trim();let Oe;if(Ce||Ae){const Ee=Number(Ce),he=Number(Ae);if(!Number.isFinite(Ee)||!Number.isFinite(he)||Ee<-180||Ee>180||he<-90||he>90){$e="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",m();return}Oe={lng:Ee,lat:he,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await e.updateProject?.(n,{name:q,city:x,address:ae,location:Oe}),De(),te=`已保存项目「${q||"当前项目"}」信息。`,await qe()}catch(Ee){$e=Ee instanceof Error?Ee.message:String(Ee),m()}}),a.querySelector("[data-upload-proj]")?.addEventListener("change",async t=>{const o=t.currentTarget,n=o.dataset.uploadProj,i=o.files?.[0];if(!(!n||!i))try{const q=await za(i);await e.updateProject?.(n,{imageUrl:q}),te=`已更新项目封面图（${i.name}）。`,await qe()}catch(q){$e=q instanceof Error?q.message:String(q),m()}}),a.querySelector("[data-delete-proj]")?.addEventListener("click",async t=>{const o=t.currentTarget.dataset.deleteProj,n=N.projects.find(i=>i.id===o);if(!(!o||!n)&&window.confirm(`确认删除项目「${n.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await e.deleteProject?.(o),De(),te=`已删除项目「${n.name}」。`,await qe()}catch(i){$e=i instanceof Error?i.message:String(i),m()}}),a.querySelector("[data-create-bld]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget,n=o.dataset.createBld??W,i=new FormData(o),q=String(i.get("bName")??"").trim(),x=String(i.get("bArea")??"").trim(),ae=Math.max(1,Number(i.get("bAbove")??12)),Ce=Math.max(0,Number(i.get("bBelow")??0)),Ae=!!i.get("bRoof"),Oe=!!i.get("bAutoFloors");if(q)try{const Ee=await e.upsertBuilding?.({projectId:n,name:q,aboveFloors:ae,belowFloors:Ce,hasRoof:Ae,areaSqm:x?Number(x):null});De();let he=0;if(Ee&&(ce=Ee.id,Oe)){for(let Re=1;Re<=ae;Re+=1)await e.upsertFloor?.({buildingId:Ee.id,kind:"above",level:Re,name:`${Re}F`}),he+=1;for(let Re=1;Re<=Ce;Re+=1)await e.upsertFloor?.({buildingId:Ee.id,kind:"below",level:-Re,name:`B${Re}`}),he+=1;Ae&&(await e.upsertFloor?.({buildingId:Ee.id,kind:"roof",level:99,name:"RF"}),he+=1)}te=Oe?`已创建楼宇「${q}」并自动生成 ${he} 个楼层。`:`已创建楼宇「${q}」。`,await qe()}catch(Ee){$e=Ee instanceof Error?Ee.message:String(Ee),m()}}),a.querySelector("[data-save-building]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget,n=o.dataset.saveBuilding,i=N.buildings.find(Ee=>Ee.id===n);if(!i)return;const q=new FormData(o),x=String(q.get("bName")??"").trim()||i.name,ae=String(q.get("bArea")??"").trim(),Ce=Math.max(1,Number(q.get("bAbove")??i.aboveFloors)),Ae=Math.max(0,Number(q.get("bBelow")??i.belowFloors)),Oe=!!q.get("bRoof");try{await e.upsertBuilding?.({id:n,projectId:i.projectId,name:x,aboveFloors:Ce,belowFloors:Ae,hasRoof:Oe,areaSqm:ae?Number(ae):null}),De(),te=`已保存楼宇「${x}」参数。`,await qe()}catch(Ee){$e=Ee instanceof Error?Ee.message:String(Ee),m()}}),a.querySelector("[data-delete-building]")?.addEventListener("click",async t=>{const o=t.currentTarget.dataset.deleteBuilding,n=N.buildings.find(i=>i.id===o);if(!(!o||!n)&&window.confirm(`确认删除楼宇「${n.name}」及其下全部楼层与功能区？`))try{await e.deleteBuilding?.(o),De(),te=`已删除楼宇「${n.name}」。`,await qe()}catch(i){$e=i instanceof Error?i.message:String(i),m()}}),a.querySelector("[data-upload-bld]")?.addEventListener("change",async t=>{const o=t.currentTarget,n=o.dataset.uploadBld,i=o.files?.[0],q=N.buildings.find(x=>x.id===n);if(!(!n||!i||!q))try{const x=await za(i);await e.upsertBuilding?.({id:q.id,projectId:q.projectId,name:q.name,aboveFloors:q.aboveFloors,belowFloors:q.belowFloors,hasRoof:q.hasRoof,areaSqm:q.areaSqm,imageUrl:x}),te=`已更新「${q.name}」外观图（${i.name}）。`,await qe()}catch(x){$e=x instanceof Error?x.message:String(x),m()}}),a.querySelectorAll("[data-fill-missing-floors]").forEach(t=>{t.addEventListener("click",async o=>{o.stopPropagation();const n=t.dataset.fillMissingFloors;if(n)try{const i=await Ga(n);te=i>0?`已自动补齐 ${i} 个楼层。`:"当前楼宇楼层已完整。",await qe()}catch(i){$e=i instanceof Error?i.message:String(i),m()}})}),a.querySelector("[data-create-floor]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget,n=o.dataset.createFloor,i=new FormData(o),q=String(i.get("fName")??"").trim().toUpperCase(),x=String(i.get("fArea")??"").trim();if(!q)return;const ae=ra(q)??q;if(Me(n).some(he=>(ra(he.name)??he.name.toUpperCase())===ae)){$e=`楼层「${q}」已存在，请使用其他名称。`,m();return}const Ae=Fa(q),Oe=Ae>=999?"roof":Ae<0?"below":"above",Ee=Ae>=999?99:Ae||1;try{const he=await e.upsertFloor?.({buildingId:n,kind:Oe,level:Ee,name:q,areaSqm:x?Number(x):null});De(),he&&(ie=he.id,ge=he.id),te=`已新增楼层「${q}」。`,await qe()}catch(he){$e=he instanceof Error?he.message:String(he),m()}}),a.querySelector("[data-save-floor]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget,n=o.dataset.saveFloor,i=Ve().find(Re=>Re.id===n);if(!i)return;const q=new FormData(o),x=String(q.get("fName")??"").trim()||i.name,ae=String(q.get("fArea")??"").trim(),Ce=ra(x)??x.toUpperCase();if(Me(i.buildingId).some(Re=>Re.id!==i.id&&(ra(Re.name)??Re.name.toUpperCase())===Ce)){$e=`楼层「${x}」已存在，请避免重复命名。`,m();return}const Oe=Fa(x),Ee=Oe>=999?"roof":Oe<0?"below":"above",he=Oe>=999?99:Oe||i.level;try{await e.upsertFloor?.({id:i.id,buildingId:i.buildingId,kind:Ee,level:he,name:x,areaSqm:ae?Number(ae):null}),te=`已保存楼层「${x}」。`,await qe()}catch(Re){$e=Re instanceof Error?Re.message:String(Re),m()}}),a.querySelector("[data-delete-floor]")?.addEventListener("click",async t=>{const o=t.currentTarget.dataset.deleteFloor,n=Ve().find(i=>i.id===o);if(!(!o||!n)){if(ze(o).length>0){$e=`楼层「${n.name}」已关联设备，请先解绑后再删除。`,m();return}if(window.confirm(`确认删除楼层「${n.name}」及其功能区？`))try{await e.deleteFloor?.(o),ge=null,te=`已删除楼层「${n.name}」。`,await qe()}catch(i){$e=i instanceof Error?i.message:String(i),m()}}});async function g(t,o){const n=Ve().find(i=>i.id===t);if(n)try{const i=await za(o);await e.upsertFloor?.({id:n.id,buildingId:n.buildingId,kind:n.kind,level:n.level,name:n.name,areaSqm:n.areaSqm,planImageUrl:i}),te=`已更新「${n.name}」平面底图（${o.name}）。`,await qe()}catch(i){$e=i instanceof Error?i.message:String(i),m()}}a.querySelectorAll("[data-upload-floor]").forEach(t=>{t.addEventListener("change",()=>{const o=t.dataset.uploadFloor,n=t.files?.[0];o&&n&&g(o,n)})});const k=a.querySelector("[data-single-floor-drop]");k&&s.scope.canEditDeployment&&(k.addEventListener("dragover",t=>{t.preventDefault(),k.style.borderColor="var(--pacom-accent-solid)"}),k.addEventListener("dragleave",()=>{k.style.borderColor=""}),k.addEventListener("drop",t=>{t.preventDefault(),k.style.borderColor="";const o=k.dataset.singleFloorDrop,n=Array.from(t.dataTransfer?.files??[]).find(i=>i.type.startsWith("image/"));o&&n&&g(o,n)})),a.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async t=>{const o=t.currentTarget.dataset.clearFloorPlan,n=Ve().find(i=>i.id===o);if(!(!o||!n)&&window.confirm(`确认清空「${n.name}」的平面底图？`))try{await e.upsertFloor?.({id:n.id,buildingId:n.buildingId,kind:n.kind,level:n.level,name:n.name,areaSqm:n.areaSqm,planImageUrl:null}),te=`已清空「${n.name}」平面底图。`,await qe()}catch(i){$e=i instanceof Error?i.message:String(i),m()}}),a.querySelectorAll("[data-open-lightbox]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.lbTitle??"平面底图预览",n=t.dataset.lbSrc??"";n&&(me={title:o,imageUrl:n},m())})}),a.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{me=null,m()}),a.querySelector("[data-lightbox-scrim]")?.addEventListener("click",t=>{t.target===t.currentTarget&&(me=null,m())});function C(t,o){if(!t||o.length===0)return;const n=Me(t),i=new Map;n.forEach(q=>{const x=ra(q.name)??q.name.toUpperCase();i.set(x,q)}),ye=o.map((q,x)=>{const ae=ra(q.name),Ce=ae?i.get(ae):void 0;return{id:`bu-${Date.now().toString(36)}-${x}`,file:q,matchedFloorId:Ce?.id??null}}),S=!0,m()}a.querySelector("[data-batch-upload-floors]")?.addEventListener("change",t=>{const o=t.currentTarget;C(o.dataset.batchUploadFloors??"",Array.from(o.files??[]))});const j=a.querySelector("[data-batch-dropzone]");j&&s.scope.canEditDeployment&&(j.addEventListener("dragover",t=>{t.preventDefault(),je||(je=!0,j.style.borderColor="var(--pacom-accent-solid)",j.style.background="var(--pacom-accent-soft)")}),j.addEventListener("dragleave",()=>{je=!1,j.style.borderColor="",j.style.background=""}),j.addEventListener("drop",t=>{t.preventDefault(),je=!1;const o=Array.from(t.dataTransfer?.files??[]).filter(n=>n.type.startsWith("image/"));C(j.dataset.batchDropzone??"",o)})),a.querySelectorAll("[data-batch-override-floor]").forEach(t=>{t.addEventListener("change",()=>{const o=ye.find(n=>n.id===t.dataset.batchOverrideFloor);o&&(o.matchedFloorId=t.value||null,m())})}),a.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{ye=[],m()}),a.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const t=ye.filter(n=>n.matchedFloorId),o=ye.length-t.length;if(t.length!==0)try{for(const n of t){const i=Ve().find(x=>x.id===n.matchedFloorId);if(!i)continue;const q=await za(n.file);await e.upsertFloor?.({id:i.id,buildingId:i.buildingId,kind:i.kind,level:i.level,name:i.name,areaSqm:i.areaSqm,planImageUrl:q})}ye=[],De(),te=`已批量导入 ${t.length} 个楼层平面底图${o>0?`（跳过 ${o} 张未分配文件）`:""}。`,await qe()}catch(n){$e=n instanceof Error?n.message:String(n),m()}}),a.querySelectorAll("[data-apply-zone-tpl]").forEach(t=>{t.addEventListener("click",async()=>{const o=Et.find(i=>i.key===t.dataset.applyZoneTpl),n=Ve().find(i=>i.id===t.dataset.tplFloor);if(!(!o||!n))try{for(const i of o.items){const q=await e.upsertZone?.({floorId:n.id,name:`${n.name} ${i.suffix}`,category:i.category});q&&(ue[q.id]={left:20,top:20,width:24,height:24})}te=`已按「${o.label}」模板为 ${n.name} 创建 ${o.items.length} 个功能区。`,await qe()}catch(i){$e=i instanceof Error?i.message:String(i),m()}})}),a.querySelector("[data-attach-doc]")?.addEventListener("change",t=>{const o=t.currentTarget,n=o.dataset.attachDoc,i=o.files?.[0],q=Ve().find(ae=>ae.id===n);if(!n||!i||!q)return;const x=i.size>=1024*1024?`${(i.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(i.size/1024))} KB`;Q.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:n,name:i.name,category:i.name.toLowerCase().endsWith(".xlsx")||i.name.toLowerCase().endsWith(".xls")?"点位清单":"竣工图纸",boundScope:`${q.name} · 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:x}),te=`已为 ${q.name} 关联文档「${i.name}」。`,m()}),a.querySelector("[data-add-zone]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget.dataset.addZone,n=new FormData(t.currentTarget),i=String(n.get("zoneName")??"").trim(),q=String(n.get("zoneCat")??"office");if(i)try{const x=await e.upsertZone?.({floorId:o,name:i,category:q});x&&(ue[x.id]={left:20,top:20,width:24,height:24}),te=`已添加功能区「${i}」。`,await qe()}catch(x){$e=x instanceof Error?x.message:String(x),m()}}),a.querySelectorAll("[data-edit-zone]").forEach(t=>{t.addEventListener("click",()=>{w=t.dataset.editZone??null,m()})}),a.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{w=null,m()}),a.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget,n=new FormData(o),i=String(n.get("zName")??"").trim(),q=String(n.get("zCat")??"office");if(i)try{await e.upsertZone?.({id:o.dataset.saveEditZone,floorId:o.dataset.zoneFloor,name:i,category:q}),w=null,te=`已更新功能区「${i}」。`,await qe()}catch(x){$e=x instanceof Error?x.message:String(x),m()}}),a.querySelectorAll("[data-del-zone]").forEach(t=>{t.addEventListener("click",async()=>{const o=t.dataset.delZone,n=He().find(i=>i.id===o);if(!(!o||!n)&&window.confirm(`确认删除功能区「${n.name}」？`))try{await e.deleteZone?.(o),w===o&&(w=null),te=`已删除功能区「${n.name}」。`,await qe()}catch(i){$e=i instanceof Error?i.message:String(i),m()}})}),a.querySelectorAll("[data-open-copy-zones]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.openCopyZones??null;De(),L=o,se=new Set(Me(ce).filter(n=>n.id!==o&&n.kind==="above"&&He().filter(i=>i.floorId===n.id).length===0).map(n=>n.id)),m()})}),a.querySelectorAll("[data-copy-preset]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.copyPreset,n=Me(ce).filter(i=>i.id!==L);o==="empty"?se=new Set(n.filter(i=>i.kind==="above"&&He().filter(q=>q.floorId===i.id).length===0).map(i=>i.id)):o==="above"?se=new Set(n.filter(i=>i.kind==="above").map(i=>i.id)):se.clear(),m()})}),a.querySelectorAll("[data-copy-target-floor]").forEach(t=>{t.addEventListener("change",()=>{const o=t.dataset.copyTargetFloor;o&&(t.checked?se.add(o):se.delete(o),m())})}),a.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async t=>{const o=t.currentTarget.dataset.confirmCopyZones,n=Array.from(se);if(!(!o||n.length===0))try{const i=await e.copyZonesToFloors?.(o,n)??0;De(),se.clear(),te=`已将当前层功能区复用至 ${n.length} 个目标楼层（共新增 ${i} 个功能区）。`,await qe()}catch(i){$e=i instanceof Error?i.message:String(i),m()}});const T=a.querySelector("[data-dep-canvas-search]");T?.addEventListener("focus",()=>{z||(z=!0,m(),a.querySelector("[data-dep-canvas-search]")?.focus())}),T?.addEventListener("input",t=>{Y=t.currentTarget.value,z=!0,m();const o=a.querySelector("[data-dep-canvas-search]");o&&(o.focus(),o.setSelectionRange(Y.length,Y.length))}),a.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{z=!z,m()}),a.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{z=!1,m()}),a.querySelectorAll("[data-brush]").forEach(t=>{t.addEventListener("click",()=>{G=t.dataset.brush??"device",m()})}),a.querySelectorAll("[data-dep-zoom]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.depZoom;o==="in"?J=Math.min(2.6,Number((J+.2).toFixed(2))):o==="out"?J=Math.max(.6,Number((J-.2).toFixed(2))):(J=1,le=0,de=0),ea()})});const y=a.querySelector('[data-role="dep-stage"]');if(y&&!X){let t=!1,o=0,n=0,i=0,q=0;y.addEventListener("pointerdown",ae=>{ae.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(t=!0,o=ae.clientX,n=ae.clientY,i=le,q=de,y.classList.add("is-panning"),y.setPointerCapture?.(ae.pointerId))}),y.addEventListener("pointermove",ae=>{t&&(le=i+(ae.clientX-o),de=q+(ae.clientY-n),ea())});const x=()=>{t&&(t=!1,y.classList.remove("is-panning"))};y.addEventListener("pointerup",x),y.addEventListener("pointercancel",x),y.addEventListener("wheel",ae=>{ae.preventDefault();const Ce=ae.deltaY<0?.12:-.12;J=Math.max(.6,Math.min(2.6,Number((J+Ce).toFixed(2)))),ea()},{passive:!1}),y.addEventListener("dblclick",ae=>{ae.target?.closest("button")||(J=1,le=0,de=0,ea())})}a.querySelectorAll("[data-dev-filter]").forEach(t=>{t.addEventListener("click",()=>{oe=t.dataset.devFilter??"all",m()})}),a.querySelector("[data-create-dev]")?.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(t.currentTarget),n=String(o.get("devName")??"").trim(),i=String(o.get("devPreset")??"sensor"),q=String(o.get("devZone")??"")||null,x=nt.find(Ce=>Ce.key===i)??nt[0],ae=`dev-custom-${Date.now().toString(36)}`;H.push({id:ae,name:n,category:x.category,projectId:W||I.projectId,buildingId:ce,floorId:ie,logicalZoneId:q,planPoint:{floorId:ie,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),Ue.set(ae,{proxy:x.defaultProxy,relay:x.defaultRelay,meshUuid:`mesh-${ie.slice(-4)}`}),x.category==="lighting"&&Qe.push({id:`lm-${Date.now().toString(36)}`,deviceId:ae,channel:"回路 1",label:`${n.slice(0,6)}主灯`,x:.52,y:.45}),De(),$=ae,B=!0,F="binding",h=!0,te=`已新增「${n}」（${x.hint}），已生成默认标记并提示待同步边缘。`,m()}),a.querySelectorAll("[data-pick-dev]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),$=t.dataset.pickDev??null,B=!0,F="binding",U=ze(ie).find(i=>i.id===$)?.physicalInstalled??!1,m()})}),a.querySelectorAll("[data-open-dev-drawer]").forEach(t=>{t.addEventListener("click",o=>{if(o.target?.closest("button"))return;$=t.dataset.openDevDrawer??null,B=!0,F="binding",U=ze(ie).find(i=>i.id===$)?.physicalInstalled??!1,m()})}),a.querySelectorAll("[data-open-dev-params]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),$=t.dataset.openDevParams??null,B=!0,F="params",U=ze(ie).find(i=>i.id===$)?.physicalInstalled??!1,m()})}),a.querySelector("[data-close-sel]")?.addEventListener("click",()=>{B=!1,X=!1,m()}),a.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{E!=="marking"?(E="marking",X=!0):X=!X,m()}),a.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{U=!U,m()}),a.querySelectorAll("[data-ping-dev]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const n=ze(ie).find(i=>i.id===t.dataset.pingDev);n&&(te=`已向「${n.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,m())})}),a.querySelector("[data-add-light-marker]")?.addEventListener("click",t=>{const o=t.currentTarget.dataset.addLightMarker,n=Qe.filter(i=>i.deviceId===o).length+1;Qe.push({id:`lm-${Date.now().toString(36)}`,deviceId:o,channel:`回路 ${n}`,label:`照明点位 ${n}`,x:Math.min(.86,.35+n*.1),y:.42}),G="light_marker",te=`已新增「回路 ${n}」可视化灯点。`,m()}),a.querySelectorAll("[data-del-light-marker]").forEach(t=>{t.addEventListener("click",()=>{const o=Qe.findIndex(n=>n.id===t.dataset.delLightMarker);o>=0&&Qe.splice(o,1),m()})}),a.querySelectorAll("[data-toggle-mesh-role]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.meshDev,n=t.dataset.toggleMeshRole,i=Ue.get(o)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};i[n]=!i[n],Ue.set(o,i),h=!0,te=`已更新节点 ${n.toUpperCase()} 状态，可在「网络拓扑」中一键同步至边缘网关。`,m()})}),a.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async t=>{const o=ze(ie).find(x=>x.id===$);if(!X||!o)return;const n=t.currentTarget.getBoundingClientRect(),i=Math.max(.02,Math.min(.98,(t.clientX-n.left)/n.width)),q=Math.max(.02,Math.min(.98,(t.clientY-n.top)/n.height));if(H.some(x=>x.id===o.id)){o.planPoint={floorId:ie,planVersion:1,x:Number(i.toFixed(4)),y:Number(q.toFixed(4))},X=!1,te=`已更新「${o.name}」图上坐标。`,m();return}try{await e.updateDevicePlanPoint({deviceId:o.id,floorId:I.floorId,planVersion:o.planPoint?.planVersion??1,x:i,y:q,expectedVersion:o.version}),X=!1,te=`已更新「${o.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await qe()}catch(x){$e=x instanceof Error?x.message:String(x),m()}}),a.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async t=>{t.preventDefault();const o=ze(ie).find(i=>i.id===$);if(!o)return;const n=new FormData(t.currentTarget);if(H.some(i=>i.id===o.id)){o.physicalInstalled=U,o.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(n.get("protocol")),networkAddress:String(n.get("networkAddress")??""),portOrChannel:String(n.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:s.displayName},o.version+=1,h=!0,te=`已保存「${o.name}」的硬件绑定与物理复核状态。`,m();return}try{await e.updateDeviceHardwareBinding({deviceId:o.id,gatewayId:o.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(n.get("protocol")),networkAddress:String(n.get("networkAddress")??""),portOrChannel:String(n.get("portOrChannel")??""),physicalInstalled:U,expectedVersion:o.version}),h=!0,te=`已保存「${o.name}」的硬件绑定与物理安装复核状态。`,await qe()}catch(i){$e=i instanceof Error?i.message:String(i),m()}}),a.querySelector("[data-save-dev-params]")?.addEventListener("submit",t=>{t.preventDefault();const o=t.currentTarget.dataset.saveDevParams,n=new FormData(t.currentTarget);ka.set(o,{offDelayMin:Number(n.get("offDelayMin")??15),restoreMin:Number(n.get("restoreMin")??30),luxOn:Number(n.get("luxOn")??280),luxOff:Number(n.get("luxOff")??450)}),h=!0,te="设备自治延时与光感门限参数已下发并同步至配置基线。",m()}),a.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const t=ze(ie).find(o=>o.id===$);t&&Ea(t)}),a.querySelectorAll("[data-ftt-dev]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const n=ze(ie).find(i=>i.id===t.dataset.fttDev);n&&Ea(n)})}),a.querySelectorAll("[data-batch-ftt]").forEach(t=>{t.addEventListener("click",()=>Wa())}),a.querySelectorAll("[data-export-inv]").forEach(t=>{t.addEventListener("click",()=>_a())}),a.querySelector("[data-create-group]")?.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(t.currentTarget),n=String(o.get("gName")??"").trim(),i=o.get("gTrack")??"mesh_auto",q=String(o.get("gType")??"灯光联动组");n&&(Ze.unshift({id:`grp-${Date.now().toString(36)}`,track:i,groupType:q,name:n,floorId:ie,includesAdapter:i==="mesh_auto",deviceIds:i==="mesh_auto"?["dev-e7f-gw-01"]:[]}),De(),i==="mesh_auto"&&(h=!0),te=`已新建${i==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${n}」。`,m())}),a.querySelectorAll("[data-test-group]").forEach(t=>{t.addEventListener("click",()=>{const o=Ze.find(n=>n.id===t.dataset.testGroup);o&&(te=`已向分组「${o.name}」发送群组试控指令，${o.deviceIds.length} 台成员回读正常。`,m())})}),a.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>Ia()),a.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{Pe+=1,h=!1,te=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${Pe}）。`,m()}),a.querySelectorAll("[data-topo-mode]").forEach(t=>{t.addEventListener("click",()=>{V=t.dataset.topoMode??"mesh",m()})}),a.querySelectorAll("[data-topo-jump]").forEach(t=>{t.addEventListener("click",()=>{$=t.dataset.topoJump??null,B=!0,F="binding",p="devices",E="marking",m()})}),a.querySelector("[data-create-conn]")?.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(t.currentTarget),n=String(o.get("cName")??"").trim(),i=String(o.get("cProto")??"bacnet_ip"),q=String(o.get("cEndpoint")??"").trim();if(pe.some(x=>x.endpoint===q)){$e=`端口冲突警告：局域网端点「${q}」已被其他通道占用，请更换端口后重试。`,m();return}pe.unshift({id:`conn-${Date.now().toString(36)}`,projectId:W||I.projectId,buildingId:ce,floorId:ie,name:n,protocol:i,endpoint:q,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),De(),$e="",te=`已接入「${n}」（${q}），连通测试通过（18 ms）。`,m()}),a.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{te="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",m()}),a.querySelectorAll("[data-expand-conn]").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.expandConn??null;Te=Te===o?null:o,m()})}),a.querySelectorAll("[data-ping-conn]").forEach(t=>{t.addEventListener("click",()=>{const o=pe.find(n=>n.id===t.dataset.pingConn);o&&($e="",o.status==="connected"?te=`连通测试通过：「${o.name}」（${o.endpoint}）响应正常，延迟 18 ms。`:$e=`连通测试异常：「${o.name}」（${o.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,m())})}),a.querySelectorAll("[data-copy-endpoint]").forEach(t=>{t.addEventListener("click",async()=>{const o=t.dataset.endpointVal??"",n=t.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(o),fe=n,m(),window.setTimeout(()=>{fe=null,m()},1600)}catch{}})}),a.querySelectorAll("[data-preview-doc]").forEach(t=>{t.addEventListener("click",()=>{const o=[...kt,...Q].find(n=>n.id===t.dataset.previewDoc);o&&(te=`已调阅工程附件「${o.name}」（关联范围：${o.boundScope}，更新于 ${o.updatedAt}）。`,m())})}),a.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const t=await e.freezeDeliveryBatch(I.floorId,"部署总览验收发起交付冻结");te=`已生成交付冻结快照 ${t.versionTag}（核验 ${t.verifiedCount}/${t.deviceCount}）。`,await qe()}catch(t){$e=t instanceof Error?t.message:String(t),m()}})}await qe()}const rs=new Set(["lighting","hvac","alarm_rules"]),_t={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Ra=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function cs(a){const e=new Set;for(const s of a.actions)s.command.startsWith("lighting")?e.add("照明"):s.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function ds(a,e,s){const r=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function ps(a,e,s){let r=Ha(),l=!1,p="",[E,F,D,M]=await Promise.all([e.getSpatialTree(),e.listScenes(I.floorId),e.getRuntimeSettings(I.projectId),e.getFloorDevices(I.floorId).catch(()=>[])]),K="manual",re="balanced",P="all",G=null,oe="",Y=!1,z=!1,B=!1,V="all",J=null,le="",de="",N=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const ve=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],pe=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],xe=[{deviceId:M[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],ue=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${D.calendar.workdayStart} – ${D.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${D.calendar.nightGuardStart} – 次日 ${D.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],H=e.subscribeFloorEvents(I.floorId,async ce=>{ce.type==="control.receipt.updated"&&G?.batchId===ce.batchId&&(G=await e.getControlBatch(ce.batchId),W())});function W(){const ce=oe.trim().toLowerCase(),ie=ce?F.filter(d=>`${d.name} ${d.description}`.toLowerCase().includes(ce)):F,ge=D.rules.filter(d=>rs.has(d.category)),Ie=P==="all"?ge:P==="cbm"?[]:ge.filter(d=>d.category===P),be=P==="all"||P==="cbm",A=V==="issues"?ve.filter(d=>d.status!=="verified"):ve,Z=Ra.find(d=>d.id===re)??Ra[1],Le=s.scope.canControlDevices,R=s.scope.canEditScenes,u=s.scope.canEditSettings,S=s.scope.activeOverrides.find(d=>d.module==="settings"&&d.status==="active");a.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Ua({tree:E,session:s,scope:r,isOpen:l,searchKeyword:p})}
            </div>

            <div class="pacom-header-meta">
              ${K==="rules"?u?S?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${N.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${N.length>0?`人工覆盖中：${N.length} 台 ${Se("chevron-down",12)}`:`全部自动托管 ${Se("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${B?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${ve.length}）</button>
              ${K==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${R?"":"disabled"}>${Y?"收起表单":"+ 新建场景"}</button>`:K==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${K==="manual"}" data-scene-tab="manual">快捷场景（${F.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${K==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${K==="rules"}" data-scene-tab="rules">条件联动（${ge.length+pe.length}）</button>
          </nav>
        </header>

        ${z?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${N.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${Se("x",16)}</button>
              </div>
              ${N.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':N.map(d=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${c(d.name)}</div>
                            <div class="pacom-row-sub">${c(d.reason)}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${c(d.id)}" ${Le?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${N.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${Le?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${B?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${Se("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${V==="all"}" data-log-filter="all">全部（${ve.length}）</button>
                  <button class="pacom-tab" aria-selected="${V==="issues"}" data-log-filter="issues">异常与被覆盖</button>
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
          ${le?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${c(le)}</span></div>`:""}
          ${de?`<div class="pacom-alert-banner">${c(de)}</div>`:""}

          ${K==="manual"?`
              ${G?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${c(G.batchId)}</span>
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
                            ${G.receipts.map(d=>`
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

              ${Y?`
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
                          <span class="pacom-setting-title">联动动作列表（${xe.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${xe.map((d,f)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" name="draftDevice-${f}" data-draft-dev="${f}" aria-label="目标设备">
                                ${M.map(L=>`<option value="${c(L.id)}" ${L.id===d.deviceId?"selected":""}>${c(L.name)}</option>`).join("")}
                              </select>
                              <select class="pacom-select" name="draftCommand-${f}" data-draft-cmd="${f}" aria-label="执行指令">
                                <option value="lighting.dimming" ${d.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${d.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${d.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" name="draftTargetValue-${f}" data-draft-val="${f}" value="${c(d.targetValue)}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${f}" ${xe.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" ${R?"":"disabled"}>保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${c(oe)}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${ie.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${ie.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':ie.map(d=>{const f=cs(d),L=d.actions.slice(0,3).map(se=>{const me=M.find(ye=>ye.id===se.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??se.deviceId,je=se.command==="lighting.dimming"?`亮度 ${se.targetValue}%`:se.command==="hvac.setpoint"?`设温 ${se.targetValue}°C`:se.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${c(me)} → ${c(je)}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${c(d.name)}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${f.map(se=>`<span class="pacom-badge pacom-badge--accent">${c(se)}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${d.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${c(d.description)}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${L}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${c(d.lastExecutedAt?d.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行")}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${c(d.id)}" ${Le?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:K==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Z.title}</div>
                    <span class="pacom-kpi-delta">${Z.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Z.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Z.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${N.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${Ra.map(d=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${re===d.id}" data-oss-mode="${d.id}" ${Le?"":"disabled"}>
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
                                <td>${ds(d.startHour,d.endHour,d.enabled)}</td>
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
                                      ${Le?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(d=>{const f=d==="all"?"全部":_t[d]??d,L=d==="all"?ge.length+pe.length:d==="cbm"?pe.length:ge.filter(se=>se.category===d).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${P===d}" data-rule-cat="${d}">
                              <span>${f}</span><span class="pacom-count-num">${L}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${Ie.map(d=>{const f=J===d.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${c(_t[d.category]??d.category)}</span>
                                  <span>${c(d.name)}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${d.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${c(d.summary)} · 范围：${c(d.scopeLabel)} · 回执：${c(d.receiptSummary??"已同步")}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${c(d.id)}">${f?"收起逻辑":"查看逻辑"}</button>
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
                            ${f?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${d.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":d.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${c(d.scopeLabel)} · 当前版本：v${d.version} · 最近同步：${c(d.receiptSummary??"已同步")}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${be?pe.map(d=>{const f=Math.min(100,Math.round(d.runtimeHours/d.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${c(d.name)}</span>
                                      <span class="pacom-badge ${f>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${d.runtimeHours} / ${d.thresholdHours} h（${f}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${f}%; background:${f>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
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
    `,Va(a,{onToggle:()=>{l=!l,W(),l&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:d=>{p=d,W();const f=a.querySelector("[data-global-space-search]");f&&(f.focus(),f.setSelectionRange(d.length,d.length))},onPick:d=>{r=d,l=!1,W()}}),a.querySelectorAll("[data-scene-tab]").forEach(d=>{d.addEventListener("click",()=>{K=d.dataset.sceneTab??"manual",le="",W()})}),a.querySelectorAll("[data-toggle-overrides]").forEach(d=>{d.addEventListener("click",()=>{z=!z,W()})}),a.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{Le&&(N=[],le="已释放全部人工覆盖设备，自动节能策略已恢复托管。",W())}),a.querySelectorAll("[data-release-one]").forEach(d=>{d.addEventListener("click",()=>{if(!Le)return;const f=d.dataset.releaseOne;N=N.filter(L=>L.id!==f),le="已恢复该设备的自动策略托管。",W()})}),a.querySelectorAll("[data-toggle-cmdlog]").forEach(d=>{d.addEventListener("click",()=>{B=!B,W()})}),a.querySelectorAll("[data-log-filter]").forEach(d=>{d.addEventListener("click",()=>{V=d.dataset.logFilter??"all",W()})}),a.querySelector("[data-close-batch]")?.addEventListener("click",()=>{G=null,W()}),a.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),a.querySelectorAll("[data-oss-mode]").forEach(d=>{d.addEventListener("click",()=>{if(!Le)return;const f=d.dataset.ossMode;if(!f)return;re=f;const L=Ra.find(se=>se.id===f);le=`已切换至「${L?.title??f}」模式（明日预测启动 ${L?.predictedStart??""}）。`,W()})}),a.querySelectorAll("[data-toggle-schedule]").forEach(d=>{d.addEventListener("click",()=>{if(!Le)return;const f=d.dataset.toggleSchedule,L=ue.find(se=>se.id===f);L&&(L.enabled=!L.enabled,le=`排程「${L.name}」已${L.enabled?"恢复启用":"临时暂停"}。`,W())})}),a.querySelectorAll("[data-rule-cat]").forEach(d=>{d.addEventListener("click",()=>{P=d.dataset.ruleCat??"all",W()})}),a.querySelectorAll("[data-expand-rule]").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.expandRule??null;J=J===f?null:f,W()})}),a.querySelectorAll("[data-toggle-cbm]").forEach(d=>{d.addEventListener("click",()=>{if(!u)return;const f=pe.find(L=>L.id===d.dataset.toggleCbm);f&&(f.enabled=!f.enabled,le=`工时维保规则「${f.name}」已${f.enabled?"启用":"停用"}。`,W())})}),a.querySelectorAll("[data-toggle-strategy-rule]").forEach(d=>{d.addEventListener("click",async()=>{if(u){de="";try{await e.toggleRuntimeRule(d.dataset.toggleStrategyRule,d.dataset.ruleNext==="true",Number(d.dataset.ruleVer)),D=await e.getRuntimeSettings(I.projectId),le="条件联动规则状态与版本回执已更新。",W()}catch(f){de=f instanceof Error?f.message:String(f),W()}}})}),a.querySelectorAll("[data-toggle-create]").forEach(d=>{d.addEventListener("click",()=>{!R&&!Y||(Y=!Y,W())})}),a.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{R&&(xe.push({deviceId:M[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),W())}),a.querySelectorAll("[data-del-draft-action]").forEach(d=>{d.addEventListener("click",()=>{if(!R)return;const f=Number(d.dataset.delDraftAction);xe.length>1&&(xe.splice(f,1),W())})}),a.querySelectorAll("[data-draft-dev]").forEach(d=>{d.addEventListener("change",()=>{if(!R)return;const f=xe[Number(d.dataset.draftDev)];f&&(f.deviceId=d.value)})}),a.querySelectorAll("[data-draft-cmd]").forEach(d=>{d.addEventListener("change",()=>{if(!R)return;const f=xe[Number(d.dataset.draftCmd)];f&&(f.command=d.value)})}),a.querySelectorAll("[data-draft-val]").forEach(d=>{d.addEventListener("change",()=>{if(!R)return;const f=xe[Number(d.dataset.draftVal)];f&&(f.targetValue=d.value)})}),a.querySelector("[data-scene-search]")?.addEventListener("input",d=>{const f=d.currentTarget,L=f.selectionStart??f.value.length;oe=f.value,W();const se=a.querySelector("[data-scene-search]");se&&(se.focus(),se.setSelectionRange(L,L))}),a.querySelectorAll("[data-exec-scene]").forEach(d=>{d.addEventListener("click",async()=>{if(!Le)return;de="";const f=F.find(L=>L.id===d.dataset.execScene);try{G=await e.executeScene(d.dataset.execScene),F=await e.listScenes(I.floorId),ve.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:f?.name??"E7F 场景",action:`${G.receipts.length} 台设备联动下发`,status:"verified"}),W()}catch(L){de=L instanceof Error?L.message:String(L),W()}})}),a.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async d=>{if(d.preventDefault(),!R)return;const f=new FormData(d.currentTarget);try{await e.createScene({projectId:I.projectId,floorId:I.floorId,name:String(f.get("name")??""),description:String(f.get("description")??""),actions:xe.map(L=>({deviceId:L.deviceId,command:L.command,targetValue:L.targetValue==="true"?!0:L.targetValue==="false"?!1:Number(L.targetValue)||50}))}),F=await e.listScenes(I.floorId),Y=!1,le=`快捷场景已保存（共绑定 ${xe.length} 条联动动作）。`,W()}catch(L){de=L instanceof Error?L.message:String(L),W()}})}W(),window.addEventListener("hashchange",()=>H(),{once:!0})}const Lt={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function it(a,e){return a.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':a.map(s=>`
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
      </div>`).join("")}async function us(a,e,s){let r="calendar",l=Ha(),p=!1,E="";const[F,D]=await Promise.all([e.getSpatialTree(),e.getRuntimeSettings(I.projectId)]);let M=D,K=M.calendar.workdayStart,re=M.calendar.workdayEnd,P=M.calendar.nightGuardStart,G=M.calendar.nightGuardEnd,oe=!0,Y=[];const z=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let B="flat";const V={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},J={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},le={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},de={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},N=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let ve="",pe="";function xe(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(W=>{const ce=Lt[W];return`
                <button type="button" class="pacom-unified-item" aria-current="${r===W}" data-stab="${W}">
                  ${Se(ce.icon,16)}
                  <span>${ce.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function ue(){const H=s.scope.canEditSettings,W=s.scope.activeOverrides.find(A=>A.module==="settings"&&A.status==="active"),ce=F.projects[0]?.name??"当前项目",ie=M.rules.filter(A=>A.category==="weather_area"),ge=M.rules.filter(A=>A.category==="metering_carbon"),Ie=M.rules.filter(A=>A.category==="templates"),be=Lt[r];a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Ua({tree:F,session:s,scope:l,maxGranularity:"project",isOpen:p,searchKeyword:E})}
            </div>
            <div class="pacom-header-meta">
              ${H?W?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${xe()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${be.label}</h2>
                <p class="pacom-unified-subtitle">${be.subtitle}</p>
              </div>
              ${W?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 · ${W.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${c(W.approvedBy)} · 到期自动收回：${c(W.expiresAt.slice(0,16).replace("T"," "))} · 事由：${c(W.reason)}</span>
                      </div>
                    </div>`:""}
              ${ve?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${c(ve)}</span></div>`:""}
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
                          <input class="pacom-input" name="calWorkdayStart" style="width:116px;" type="time" data-cal-start value="${c(K)}" aria-label="工作日上班时间" ${H?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" name="calWorkdayEnd" style="width:116px;" type="time" data-cal-end value="${c(re)}" aria-label="工作日下班时间" ${H?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calNightGuardStart" style="width:116px;" type="time" data-night-start value="${c(P)}" aria-label="夜间值守开始" ${H?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" name="calNightGuardEnd" style="width:116px;" type="time" data-night-end value="${c(G)}" aria-label="夜间值守结束" ${H?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${oe?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${oe}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${H?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${H?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${z.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${z.map(A=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${c(A.date)}</span><span class="pacom-badge pacom-badge--accent">${c(A.mode)}</span></span>
                              <span class="pacom-setting-desc">${c(A.label)}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${c(A.id)}" ${H?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${H?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${H?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${H?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${H?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${Y.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${Y.length} 条</span>
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
                                ${Y.map(A=>`
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
                            <select class="pacom-select" name="energyWeatherSource" data-energy-field="weatherSource" aria-label="室外气象数据源" ${H?"":"disabled"}>
                              <option value="guanzhou_station" ${V.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${V.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${c(ce)}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" name="energyBillingArea" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${c(V.billingArea)}" aria-label="计费面积" ${H?"":"disabled"} />
                          </div>
                        </div>
                        ${it(ie,H)}
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
                                <input class="pacom-input" name="energyTariffYuan" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${c(V.tariffYuan)}" aria-label="综合电价" ${H?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" name="energyTariffPeak" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${c(V.tariffPeak)}" aria-label="峰段电价" ${H?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" name="energyTariffFlat" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${c(V.tariffFlat)}" aria-label="平段电价" ${H?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" name="energyTariffValley" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${c(V.tariffValley)}" aria-label="谷段电价" ${H?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" name="energyCarbonFactor" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${H?"":"disabled"}>
                              <option value="0.5271" ${V.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${V.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${it(ge,H)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${H?"":"disabled"}>保存口径参数</button>
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
                              <input class="pacom-input" name="guardMinTemp" style="width:72px;" type="number" data-guard-field="minTemp" value="${c(J.minTemp)}" aria-label="最低设定温度" ${H?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" name="guardMaxTemp" style="width:72px;" type="number" data-guard-field="maxTemp" value="${c(J.maxTemp)}" aria-label="最高设定温度" ${H?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" name="guardOverrideAutoRelease" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${H?"":"disabled"}>
                                <option value="2h" ${J.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${J.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${J.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${J.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" name="guardReadbackTimeoutSec" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${c(J.readbackTimeoutSec)}" aria-label="回读超时阈值" ${H?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${H?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${it(Ie,H)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${c(de.dailyDigestTime)}" aria-label="每日简报发送时间" ${H?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${de.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${H?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${de.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${H?"":"disabled"}>
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
                              <input class="pacom-input" name="autoWoDelayMin" style="width:72px;" type="number" data-auto-wo="delayMin" value="${c(le.delayMin)}" aria-label="自动派单延迟分钟数" ${H?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${le.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${H?"":"disabled"}>
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
                              <select class="pacom-select" name="autoWoDefaultGroup" data-auto-wo="defaultGroup" aria-label="默认处理组" ${H?"":"disabled"}>
                                <option value="暖通运维组" ${le.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${le.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${le.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${le.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${H?"":"disabled"}>
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
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${A.enabled}" data-toggle-nr="${c(A.id)}" aria-label="切换 ${c(A.groupName)} 通知规则" ${H?"":"disabled"}>
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
    `,Va(a,{onToggle:()=>{p=!p,ue(),p&&a.querySelector("[data-global-space-search]")?.focus()},onSearch:A=>{E=A,ue();const Z=a.querySelector("[data-global-space-search]");Z&&(Z.focus(),Z.setSelectionRange(A.length,A.length))},onPick:A=>{l=A,p=!1,ue()}}),a.querySelectorAll("[data-stab]").forEach(A=>{A.addEventListener("click",()=>{r=A.dataset.stab??"calendar",ve="",pe="",ue()})}),a.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{H&&(oe=!oe,ve=`法定节假日自动跳过已${oe?"开启":"关闭"}。`,ue())}),a.querySelector("[data-night-start]")?.addEventListener("change",A=>{H&&(P=A.currentTarget.value)}),a.querySelector("[data-night-end]")?.addEventListener("change",A=>{H&&(G=A.currentTarget.value)}),a.querySelector("[data-add-sd-form]")?.addEventListener("submit",A=>{if(A.preventDefault(),!H)return;const Z=new FormData(A.currentTarget);z.push({id:`sd-${Date.now()}`,date:String(Z.get("date")??""),label:String(Z.get("label")??""),mode:String(Z.get("mode")??"保持工作日工况")}),ve="已添加特殊例外日期，当日自动覆盖默认节假日排程。",ue()}),a.querySelectorAll("[data-del-sd]").forEach(A=>{A.addEventListener("click",()=>{if(!H)return;const Z=z.findIndex(Le=>Le.id===A.dataset.delSd);Z>=0&&z.splice(Z,1),ue()})}),a.querySelectorAll("[data-tariff-mode]").forEach(A=>{A.addEventListener("click",()=>{B=A.dataset.tariffMode??"flat",ue()})}),a.querySelectorAll("[data-energy-field]").forEach(A=>{A.addEventListener("change",()=>{if(!H)return;const Z=A.dataset.energyField;Z&&(V[Z]=A.value)})}),a.querySelector("[data-save-energy]")?.addEventListener("click",()=>{H&&(ve=B==="flat"?`能耗计费与气象口径已保存（面积 ${V.billingArea} m² · 综合电价 ¥${V.tariffYuan}/kWh · 因子 ${V.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${V.tariffPeak} / 平 ¥${V.tariffFlat} / 谷 ¥${V.tariffValley}）。`,ue())}),a.querySelectorAll("[data-guard-field]").forEach(A=>{A.addEventListener("change",()=>{if(!H)return;const Z=A.dataset.guardField;Z&&(J[Z]=A.value)})}),a.querySelector("[data-save-guard]")?.addEventListener("click",()=>{H&&(ve=`控制保护参数已保存（温区 ${J.minTemp}–${J.maxTemp}°C · 超时 ${J.readbackTimeoutSec}s）。`,ue())}),a.querySelectorAll("[data-auto-wo]").forEach(A=>{A.addEventListener("change",()=>{if(!H)return;const Z=A.dataset.autoWo;Z&&(le[Z]=A.value),ve="超时自动派单配置已更新。",ue()})}),a.querySelectorAll("[data-toggle-autowo]").forEach(A=>{A.addEventListener("click",()=>{if(!H)return;const Z=A.dataset.toggleAutowo;Z&&(le[Z]=!le[Z],ve="自动派单保护策略已更新。",ue())})}),a.querySelector("[data-digest-time]")?.addEventListener("change",A=>{H&&(de.dailyDigestTime=A.currentTarget.value,ve=`每日晨间简报发送时刻已更新为 ${de.dailyDigestTime}。`,ue())}),a.querySelectorAll("[data-notify-key]").forEach(A=>{A.addEventListener("click",()=>{if(!H)return;const Z=A.dataset.notifyKey;Z&&(de[Z]=!de[Z],ve="消息通知偏好已更新。",ue())})}),a.querySelectorAll("[data-toggle-nr]").forEach(A=>{A.addEventListener("click",()=>{if(!H)return;const Z=N.find(Le=>Le.id===A.dataset.toggleNr);Z&&(Z.enabled=!Z.enabled,ve=`工作组「${Z.groupName}」的分流推送规则已${Z.enabled?"启用":"停用"}。`,ue())})}),a.querySelector("[data-cal-start]")?.addEventListener("change",A=>{H&&(K=A.currentTarget.value)}),a.querySelector("[data-cal-end]")?.addEventListener("change",A=>{H&&(re=A.currentTarget.value)}),a.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{pe="";try{Y=await e.previewCalendarImpact(I.projectId,K,re),ue()}catch(A){pe=A instanceof Error?A.message:String(A),ue()}}),a.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{if(H){pe="";try{const A=await e.saveWorkCalendar(I.projectId,K,re,M.calendar.version);M={...M,calendar:{...A,nightGuardStart:P,nightGuardEnd:G}},ve=`工作时间配置已保存至 v${A.version}（工作日 ${A.workdayStart}–${A.workdayEnd} · 夜间值守 ${P}–${G}）`,Y=[],ue()}catch(A){pe=A instanceof Error?A.message:String(A),ue()}}}),a.querySelectorAll("[data-toggle-rule]").forEach(A=>{A.addEventListener("click",async()=>{if(H){pe="";try{await e.toggleRuntimeRule(A.dataset.toggleRule,A.dataset.ruleNext==="true",Number(A.dataset.ruleVer)),M=await e.getRuntimeSettings(I.projectId),ve="策略状态与版本回执已更新。",ue()}catch(Z){pe=Z instanceof Error?Z.message:String(Z),ue()}}})})}ue()}const jt="pacom.web.sidebar.collapsed",ms=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,At=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],ct={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},Ct=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function ot(){const a=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return a in ct?a:"home"}function Ne(a){return a.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const wa=new WeakMap;function vs(a){wa.get(a)?.()}async function gs(a,e,s,r){wa.get(a)?.(),a.classList.remove("bare-login");let l=s,p=ot(),E=localStorage.getItem(jt)==="1",F=!1,D=!1,M=!1,K=await e.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],re=e.getActiveOrganizationId?.()??K[0]?.id??"org-gzlab",P="",G=!1,oe=0,Y={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function z(u){return l.scope.visibleModules.includes(u)}z(p)||(p="home",window.location.hash="#home");function B(){return K.find(u=>u.id===re)??K[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function V(u){if(u.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const S=u.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${Ne(S)}</span>`}async function J(){e.listOrganizations&&(K=await e.listOrganizations(),re=e.getActiveOrganizationId?.()??K[0]?.id??"org-gzlab")}async function le(){try{await J();const[u,S,O,d,f]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(I.floorId).catch(()=>[]),e.listAlarms(I.floorId).catch(()=>[]),e.listWorkOrders(I.floorId).catch(()=>[]),e.listScenes(I.floorId).catch(()=>[])]);Y={devices:S,zones:u.zones,alarms:O,workOrders:d,scenes:f},oe=O.filter(L=>L.status==="active").length,W()}catch{}}function de(){const u=At.filter(O=>z(O.id));let S=!1;return u.map(O=>`
        ${(O.id==="settings"||O.id==="deployment")&&!S?(S=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${O.id}" aria-current="${p===O.id?"page":"false"}" title="${O.label}">
          ${Se(O.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${O.label}</span>
          ${O.id==="alarms"&&oe>0?`<span class="pacom-nav-count" title="待处理告警 ${oe} 条">${oe}</span>`:""}
        </button>`).join("")}function N(){const u=P.trim().toLowerCase(),S=At.filter(Q=>z(Q.id)),O=u?S.filter(Q=>Q.label.toLowerCase().includes(u)).slice(0,4):S,d=u?Y.devices.filter(Q=>`${Q.name} ${Q.id} ${Q.category}`.toLowerCase().includes(u)).slice(0,5):Y.devices.slice(0,3),f=u?Y.zones.filter(Q=>Q.name.toLowerCase().includes(u)).slice(0,3):[],L=z("alarms")?u?Y.alarms.filter(Q=>`${Q.title} ${Q.message} ${Q.id}`.toLowerCase().includes(u)).slice(0,4):Y.alarms.filter(Q=>Q.status==="active").slice(0,2):[],se=z("alarms")?u?Y.workOrders.filter(Q=>`${Q.title} ${Q.id}`.toLowerCase().includes(u)).slice(0,3):[]:[],me=z("scenes")?u?Y.scenes.filter(Q=>`${Q.name} ${Q.description}`.toLowerCase().includes(u)).slice(0,3):[]:[],je=z("deployment")?u?Ct.filter(Q=>`${Q.title} ${Q.category}`.toLowerCase().includes(u)).slice(0,4):Ct.slice(0,2):[],ye=[];return d.length&&ye.push(`<div class="pacom-search-group">${u?"设备（空间总览）":"常用设备直达"}</div>`+d.map(Q=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(Q.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ne(Q.name)}</span><span class="pacom-badge ${Q.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${Q.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),f.length&&ye.push('<div class="pacom-search-group">功能区</div>'+f.map(Q=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(Q.id)}"><span>${Ne(Q.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),L.length&&ye.push(`<div class="pacom-search-group">${u?"告警":"待处理告警"}</div>`+L.map(Q=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(Q.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ne(Q.title)}</span><span class="pacom-badge pacom-badge--warning">${Q.status==="active"?"待处理":"已确认"}</span></button>`).join("")),se.length&&ye.push('<div class="pacom-search-group">运维工单</div>'+se.map(Q=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(Q.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ne(Q.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),me.length&&ye.push('<div class="pacom-search-group">智能策略</div>'+me.map(Q=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${Ne(Q.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),je.length&&ye.push('<div class="pacom-search-group">图纸与工程文档</div>'+je.map(Q=>`<button type="button" class="pacom-search-hit" data-search-hash="${Q.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ne(Q.title)}</span><span class="pacom-badge pacom-badge--neutral">${Ne(Q.category)}</span></button>`).join("")),O.length&&ye.push('<div class="pacom-search-group">工作区</div>'+O.map(Q=>`<button type="button" class="pacom-search-hit" data-search-hash="#${Q.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${Se(Q.icon,14)}${Ne(Q.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),ye.length?ye.join(""):`<div class="pacom-nav-empty">未找到与「${Ne(P)}」匹配的设备、区域、告警、工单或图纸</div>`}function ve(u){u.querySelectorAll("[data-search-hash]").forEach(S=>{S.addEventListener("click",()=>{const O=S.dataset.searchHash||"#home";G=!1,P="",pe(),F=!1,window.location.hash===O?(p=ot(),be(!0)):window.location.hash=O})})}function pe(){if(a.querySelector('[data-role="cmd-scrim"]')?.remove(),!G)return;const u=document.createElement("div");u.className="pacom-cmd-scrim",u.dataset.role="cmd-scrim",u.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${Se("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${Ne(P)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${N()}
        </div>
      </div>
    `,a.appendChild(u),u.addEventListener("click",d=>{d.target===u&&(G=!1,pe())});const S=u.querySelector('[data-role="cmd-input"]'),O=u.querySelector('[data-role="cmd-body"]');O&&ve(O),S?.focus(),S?.addEventListener("input",d=>{P=d.currentTarget.value,O&&(O.innerHTML=N(),ve(O))})}function xe(){if(!D)return"";const u=l.displayName.slice(0,1)||"U",S=!!(e.createOrganization&&l.role==="org_admin");return`
      <div class="pacom-org-popover ${E?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${K.map(O=>{const d=O.id===re;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${d}" data-pop-org="${Ne(O.id)}">
                ${V(O)}
                <span class="pacom-pop-text">
                  <b>${Ne(O.name)}</b>
                  <small>${O.projectCount>0?`${O.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${d?Se("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${S?M?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${Se("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${Se("settings",16)}</span>
          <span class="pacom-pop-text">机构与权限</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${Ne(u)}</span>
          <span class="pacom-pop-text">
            <b>${Ne(l.displayName)}</b>
            <small>${Ne(l.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${Se("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function ue(u){switch(z(p)||(p="home",window.location.hash="#home"),document.title=`${ct[p]} · PACOM Station`,p){case"home":await Ut(u,e,l);return;case"analysis":await Bt(u,e,l);return;case"alarms":await as(u,e,l);return;case"scenes":await ps(u,e,l);return;case"settings":await us(u,e,l);return;case"deployment":await ls(u,e,l);return;case"account":await Yt(u,e,l,S=>{l=S,W(),ce()},H);return}}async function H(){D=!1,F=!1,G=!1,R();try{await e.logout()}finally{window.location.hash="#login",r()}}function W(){const u=a.querySelector('[data-role="nav-list"]');u&&(u.innerHTML=de(),ie())}function ce(){a.querySelector('[data-role="org-popover"]')?.remove();const u=a.querySelector('[data-role="org-menu-btn"]');if(u&&u.setAttribute("aria-expanded",String(D)),!D)return;const S=document.createElement("div");S.innerHTML=xe().trim();const O=S.firstElementChild;O&&(a.appendChild(O),Ie())}function ie(){a.querySelectorAll("[data-route]").forEach(u=>{u.addEventListener("click",()=>{const S=u.dataset.route;S===p&&!F||(p=S,F=!1,D=!1,window.location.hash=`#${p}`,be(!0))})})}async function ge(u){if(!e.switchOrganization)return;await e.switchOrganization(u),await J();const S=await e.getSpatialTree(),O=S.projects[0],d=O?S.buildings.find(L=>L.projectId===O.id):void 0,f=d?S.floors.find(L=>L.buildingId===d.id&&L.id===I.floorId)??S.floors.find(L=>L.buildingId===d.id):void 0;O&&d&&f?da({level:"floor",projectId:O.id,buildingId:d.id,floorId:f.id}):O&&d?da({level:"building",projectId:O.id,buildingId:d.id}):O?da({level:"project",projectId:O.id}):da({level:"all-projects"}),D=!1,M=!1,F=!1,await be(!0),le()}function Ie(){a.querySelectorAll("[data-pop-org]").forEach(u=>{u.addEventListener("click",()=>{const S=u.dataset.popOrg;if(S){if(S===re){D=!1,ce();return}ge(S)}})}),a.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",u=>{u.stopPropagation(),M=!M,ce(),M&&a.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),a.querySelector("[data-create-org-form]")?.addEventListener("submit",async u=>{if(u.preventDefault(),!e.createOrganization)return;const S=new FormData(u.currentTarget),O=String(S.get("orgName")??"").trim();if(!O)return;const d=await e.createOrganization(O);await ge(d.id)}),a.querySelectorAll('[data-pop-act="go-account"]').forEach(u=>{u.addEventListener("click",()=>{D=!1,M=!1,F=!1,p="account",window.location.hash="#account",be(!0)})}),a.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{H()})}async function be(u){const S=a.querySelector('[data-role="main-stage"]');if(!u&&S){const d=a.querySelector(".pacom-nav-rail");d&&(d.classList.toggle("is-collapsed",E),d.classList.toggle("is-mobile-open",F));const f=a.querySelector('[data-role="mobile-scrim"]');f&&f.classList.toggle("is-open",F),ce();return}a.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${Se("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${ct[p]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Ne(l.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${F?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${E?"is-collapsed":""} ${F?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${ms}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${E?"展开侧栏":"收起侧栏"}" aria-label="${E?"展开侧栏":"收起侧栏"}">
              ${Se("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${Se("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${de()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${p==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${D}" title="${Ne(B().name)} · ${Ne(l.displayName)}">
              ${V(B())}
              <span class="pacom-org-name">${Ne(B().name)}</span>
              ${Se("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,a.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{E=!E,D=!1,localStorage.setItem(jt,E?"1":"0");const d=a.querySelector(".pacom-nav-rail"),f=a.querySelector('[data-role="toggle-sidebar"]');d&&d.classList.toggle("is-collapsed",E),f&&(f.title=E?"展开侧栏":"收起侧栏",f.setAttribute("aria-label",f.title),f.innerHTML=Se("panel-left",16)),ce()}),a.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{D=!1,ce(),G=!0,pe()}),a.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{F=!F,be(!1)}),a.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{F=!1,D=!1,be(!1)}),a.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",d=>{d.stopPropagation(),D=!D,ce()}),ie(),ce(),pe();const O=a.querySelector('[data-role="main-stage"]');O&&await ue(O)}const A=u=>{const S=u.target;D&&!S?.closest('[data-role="org-popover"]')&&!S?.closest('[data-role="org-menu-btn"]')&&(D=!1,ce())},Z=u=>{if((u.metaKey||u.ctrlKey)&&u.key.toLowerCase()==="k"){u.preventDefault(),D=!1,ce(),G=!G,pe();return}u.key==="Escape"&&(G?(G=!1,pe()):D?(D=!1,ce()):F&&(F=!1,be(!1)))},Le=()=>{p=ot(),D=!1,F=!1,G=!1,be(!0),le()};function R(){document.removeEventListener("click",A),document.removeEventListener("keydown",Z),window.removeEventListener("hashchange",Le),wa.get(a)===R&&wa.delete(a)}wa.set(a,R),document.addEventListener("click",A),document.addEventListener("keydown",Z),window.addEventListener("hashchange",Le),await be(!0),le()}const sa=["password","sms"];function Tt(a){const e=Je(a).replace(/[\s-]/g,"");return/^(\+?86)?1[3-9]\d{9}$/.test(e)}const Sa=new WeakMap;function qt(a){Sa.get(a)?.()}function fs(a,e,s,r){Sa.get(a)?.(),a.classList.add("bare-login"),document.title="登录 · PACOM Station";let l=!1,p=!1,E=(r?.prefillAccount??"").trim(),F="",D=Tt(E)?E:"",M="",K=!1;const re=(r?.notice??"").trim();let P={},G="",oe=!1,Y="",z=0,B=null,V=null,J=null,le=!1,de="",N="",ve=null,pe=null,xe=!1;const ue=Ft();function H(f){if(f.key==="Escape"){if(ue.isOpen()){f.preventDefault(),ue.close(!0);return}J&&(f.preventDefault(),Le())}}function W(f){const L=a.querySelector('[data-role="mode-seg"]'),se=L?.querySelector(".au-mode-indicator"),me=L?.querySelector('.au-mode-tab[aria-selected="true"]');!se||!me||(se.style.transition=f?"":"none",se.style.transform=`translateX(${me.offsetLeft}px)`,se.style.width=`${me.offsetWidth}px`,f||(se.offsetWidth,se.style.transition=""))}function ce(){W(!1)}function ie(){xe=!0,pe?.(),pe=null,ue.destroy(),B!==null&&(window.clearInterval(B),B=null),V!==null&&(window.clearTimeout(V),V=null),document.removeEventListener("keydown",H),window.removeEventListener("resize",ce),a.classList.remove("bare-login"),Sa.get(a)===ie&&Sa.delete(a)}document.addEventListener("keydown",H),window.addEventListener("resize",ce),Sa.set(a,ie);function ge(f=60){z=f,B!==null&&window.clearInterval(B),B=window.setInterval(()=>{z-=1,z<=0&&(z=0,B!==null&&(window.clearInterval(B),B=null));const L=a.querySelector('[data-act="send-sms"]');L&&(L.disabled=z>0,L.textContent=z>0?`${z} 秒后重发`:Y?"重新获取":"获取验证码")},1e3)}function Ie(){const f=a.querySelector("#au-login-ferr");if(f)if(G){f.hidden=!1;const L=f.querySelector('[data-role="ferr-text"]');L&&(L.textContent=G)}else f.hidden=!0}function be(f){const L=a.querySelector(`.au-field[data-f="${f}"]`),se=a.querySelector(`#au-${f}`),me=a.querySelector(`#au-${f}-err`),je=P[f]??"";L?.classList.toggle("bad",!!je),se?.setAttribute("aria-invalid",je?"true":"false"),me&&(me.textContent=je)}function A(){const f=a.querySelector('form[data-form="login"] fieldset'),L=a.querySelector('form[data-form="login"] button[type="submit"]');f&&(f.disabled=oe),L&&(L.disabled=oe,L.innerHTML=oe?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"<span>登录</span>")}function Z(f,L){ue.close(!1),ve=L??(document.activeElement instanceof HTMLElement?document.activeElement:null),J=f,u(),f==="reset"?a.querySelector("#au-rs-id")?.focus():a.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function Le(){if(!J)return;J=null,V!==null&&(window.clearTimeout(V),V=null),le=!1,u();const f=ve;ve=null,f&&document.contains(f)&&f.focus({preventScroll:!0})}function R(){if(!J)return"";if(J==="reset"){const f=de.trim().length>0;return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${rt}</button>
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
                  ${dt}
                  <span data-role="reset-notice-text">${c(N)}</span>
                </div>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${f?"":"disabled"}>发送验证码</button>
            </div>
          </section>
        </div>
      `}return J==="contact"?Nt(le):""}function u(){const f=a.querySelector('[data-role="modal-host"]');if(!f||(f.innerHTML=R(),!J))return;f.querySelectorAll('[data-act="close-modal"]').forEach(me=>{me.addEventListener("click",()=>Le())}),f.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",me=>{me.target===me.currentTarget&&Le()}),f.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{const me=f.querySelector('[data-act="copy-support"]');try{await navigator.clipboard.writeText("support@pacom.cn")}catch{}le=!0,me&&(me.classList.add("is-copied"),me.innerHTML=`${lt}<span>已复制</span>`),V!==null&&window.clearTimeout(V),V=window.setTimeout(()=>{V=null,le=!1;const je=f.querySelector('[data-act="copy-support"]');je&&(je.classList.remove("is-copied"),je.innerHTML=`${$a}<span>复制</span>`)},1800)});const L=f.querySelector("#au-rs-id"),se=f.querySelector('[data-role="reset-submit"]');L?.addEventListener("input",()=>{de=L.value,se&&(se.disabled=de.trim().length===0)}),f.querySelector("#au-reset-form")?.addEventListener("submit",async me=>{if(me.preventDefault(),de=Je(L?.value??""),!de)N="请输入电子邮箱或手机号码";else try{N=`如该账号已注册，验证码已发送至 ${(await e.sendVerificationCode({target:de,purpose:"reset"})).maskedTarget||ba(de)}；如需协助请联系机构管理员。`}catch{N="请联系机构管理员重置账号密码，或确认后查收重置验证码。"}const je=f.querySelector('[data-role="reset-notice"]'),ye=f.querySelector('[data-role="reset-notice-text"]');je&&ye&&(ye.textContent=N,je.hidden=!1)})}function S(){ue.close(!1);const f=`
      <span data-role="login-novcode-wrap" ${Y?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-login-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-login-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-login-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `,L=l?`
        <div class="au-field ${P.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(D)}" aria-invalid="${P.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${z>0?"disabled":""}>
              ${z>0?`${z} 秒后重发`:Y?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${c(P.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${Y?`验证码已发送至 ${c(Y)}`:""}</p>
        </div>
      `:`
        <div class="au-field ${P.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(E)}" aria-invalid="${P.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${c(P.id??"")}</p>
        </div>
      `,se=l?`
        <div class="au-field ${P.scode?"bad":""}" data-f="scode">
          <div class="au-lab">
            <label for="au-scode">短信验证码</label>
            ${f}
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
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${p?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(F)}" aria-invalid="${P.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${p?"隐藏密码":"显示密码"}">
              ${p?ha:fa}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${c(P.pwd??"")}</p>
        </div>
      `,me=a.querySelector('[data-role="fields-host"]');me&&(me.innerHTML=`${L}${se}`,d(me))}function O(f,L=!1){const se=f==="sms";l===se||oe||(se&&!D.trim()&&Tt(E)?D=E.trim():!se&&!E.trim()&&D.trim()&&(E=D.trim()),l=se,P={},G="",a.querySelectorAll('[data-act="switch-mode"]').forEach(me=>{const je=me.dataset.mode===f;me.setAttribute("aria-selected",String(je)),me.tabIndex=je?0:-1,je&&L&&me.focus({preventScroll:!0})}),W(!0),S(),Ie(),L||(l?Y?a.querySelector("#au-scode")?.focus({preventScroll:!0}):D.trim()?a.querySelector('[data-act="send-sms"]')?.focus({preventScroll:!0}):a.querySelector("#au-sphone")?.focus({preventScroll:!0}):a.querySelector(E.trim()?"#au-pwd":"#au-id")?.focus({preventScroll:!0})))}function d(f){ue.bind(f);const L=f.querySelector("#au-id"),se=f.querySelector("#au-pwd"),me=f.querySelector("#au-sphone"),je=f.querySelector("#au-scode");L?.addEventListener("input",()=>{E=L.value,(P.id||G)&&(delete P.id,G="",be("id"),Ie())}),se?.addEventListener("input",()=>{F=se.value,(P.pwd||G)&&(delete P.pwd,G="",be("pwd"),Ie())}),me?.addEventListener("input",()=>{if(D=me.value,Y){Y="";const ye=f.querySelector("#au-sphone-hint");ye&&(ye.textContent="");const Q=f.querySelector('[data-role="login-novcode-wrap"]');Q&&(Q.hidden=!0),ue.close(!1);const w=f.querySelector('[data-act="send-sms"]');w&&z===0&&(w.textContent="获取验证码")}(P.sphone||G)&&(delete P.sphone,G="",be("sphone"),Ie())}),je?.addEventListener("input",()=>{M=je.value.replace(/\D/g,"").slice(0,6),je.value=M,(P.scode||G)&&(delete P.scode,G="",be("scode"),Ie())}),f.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",ye=>{p=!p;const Q=ye.currentTarget,w=f.querySelector("#au-pwd");if(w){const $=w.selectionStart,U=w.selectionEnd;w.type=p?"text":"password",w.focus({preventScroll:!0}),$!==null&&U!==null&&w.setSelectionRange($,U)}Q.setAttribute("aria-label",p?"隐藏密码":"显示密码"),Q.innerHTML=p?ha:fa}),f.querySelector('[data-act="send-sms"]')?.addEventListener("click",async()=>{const ye=oa(D);if(ye){P={...P,sphone:ye},be("sphone"),f.querySelector("#au-sphone")?.focus({preventScroll:!0});return}delete P.sphone,be("sphone");const Q=f.querySelector('[data-act="send-sms"]');Q&&(Q.disabled=!0,Q.textContent="发送中…");try{const w=await e.sendVerificationCode({target:Je(D),purpose:"login"});if(xe)return;Y=w.maskedTarget||ba(D);const $=f.querySelector("#au-sphone-hint");$&&($.textContent=`验证码已发送至 ${Y}`);const U=f.querySelector('[data-role="login-novcode-wrap"]');U&&(U.hidden=!1),ge(w.cooldownSeconds||60),Q&&(Q.disabled=!0,Q.textContent=`${z} 秒后重发`),f.querySelector("#au-scode")?.focus({preventScroll:!0})}catch(w){if(xe)return;Q&&(Q.disabled=!1,Q.textContent=Y?"重新获取":"获取验证码"),G=w instanceof Error?w.message:"暂时无法发送验证码，请稍后再试。",Ie()}}),f.querySelector('[data-act="open-reset"]')?.addEventListener("click",ye=>{de=E.trim(),N="",Z("reset",ye.currentTarget)})}a.innerHTML=`
    <div class="au au-split au-auth-shell">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${zt}</div>
            <h1 class="au-h1">登录</h1>
            ${re?`<div class="au-notice-soft au-login-notice" role="status">${dt}<span>${c(re)}</span></div>`:""}
            <div class="au-mode-seg" role="tablist" aria-label="登录方式" data-role="mode-seg">
              <span class="au-mode-indicator" aria-hidden="true"></span>
              <button type="button" role="tab" aria-selected="true" tabindex="0" class="au-mode-tab" data-act="switch-mode" data-mode="password">密码登录</button>
              <button type="button" role="tab" aria-selected="false" tabindex="-1" class="au-mode-tab" data-act="switch-mode" data-mode="sms">短信登录</button>
            </div>
            <form class="au-compact-form" data-form="login" novalidate>
              <fieldset>
                <div data-role="fields-host"></div>
                <div class="au-ferr" id="au-login-ferr" role="alert" hidden>
                  ${va}
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
        ${Rt()}
      </section>
      <aside class="au-art" aria-hidden="true">
        <div class="au-art-frame">
          <img src="./media/auth-hero.jpg" alt="" />
        </div>
      </aside>
    </div>
    <div data-role="modal-host"></div>
  `,a.querySelector('input[name="keep"]')?.addEventListener("change",f=>{K=f.currentTarget.checked}),a.querySelector('form[data-form="login"]')?.addEventListener("submit",async f=>{if(f.preventDefault(),!oe){if(P={},G="",l){const L=oa(D);L&&(P.sphone=L),/^\d{6}$/.test(M.trim())||(P.scode="请输入 6 位验证码"),be("sphone"),be("scode")}else E.trim()||(P.id="请输入电子邮箱或手机号码"),F||(P.pwd="请输入密码"),be("id"),be("pwd");if(Ie(),Object.keys(P).length>0){const L=Object.keys(P)[0];a.querySelector(`#au-${L}`)?.focus({preventScroll:!0});return}oe=!0,A();try{const L=await e.login({account:Je(l?D:E),password:l?M.trim():F});ie(),s(L)}catch(L){oe=!1,G=L instanceof Error?L.message:"账户或密码不正确",A(),Ie()}}}),a.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{r?.onOpenRegister?(ie(),r.onOpenRegister()):window.location.hash="#register"}),a.querySelectorAll('[data-act="switch-mode"]').forEach(f=>{f.addEventListener("click",()=>{const L=f.dataset.mode;L&&O(L,!1)}),f.addEventListener("keydown",L=>{const se=l?"sms":"password",me=sa.indexOf(se);L.key==="ArrowRight"?(L.preventDefault(),O(sa[(me+1)%sa.length],!0)):L.key==="ArrowLeft"?(L.preventDefault(),O(sa[(me-1+sa.length)%sa.length],!0)):L.key==="Home"?(L.preventDefault(),O(sa[0],!0)):L.key==="End"&&(L.preventDefault(),O(sa[sa.length-1],!0))})}),a.querySelector('[data-act="open-contact"]')?.addEventListener("click",f=>{le=!1,Z("contact",f.currentTarget)}),S(),W(!1),pe=Mt(a),E.trim()&&a.querySelector("#au-pwd")?.focus({preventScroll:!0}),document.fonts?.ready.then(()=>{xe||W(!1)})}const na=["join","apply"],ca=1e3,ma=50,Ma=60,Ot=110,xa=new WeakMap;function Dt(a){xa.get(a)?.()}function bs(a,e,s){xa.get(a)?.(),a.classList.add("bare-login");let r=!1,l=s.initialMode??"join",p=null,E=!1,F=null,D=null,M=s.initialJoinReceipt??null,K=s.initialApplyReceipt??null,re=!1,P=null;const G=(s.inviteToken??"").trim(),oe=s.currentSession??null;let Y=!!G,z=null,B="",V="",J="",le="",de="",N=0,ve=null,pe="",xe=!1,ue=!1,H=pt(s.prefillCode??""),W="",ce=!1,ie=0,ge="",Ie="",be="",A="",Z="",Le=!1,R=!1,u="",S=0,O=null,d="",f="",L="",se="",me="",je="",ye="",Q="",w="",$=!1,U="",X=0,fe=null,Te=null,Pe=null,h={},ee="",_e=!1;const te=Ft();function $e(b){if(b.key==="Escape"){if(te.isOpen()){b.preventDefault(),te.close(!0);return}p&&(b.preventDefault(),He())}}function Ue(b){const _=a.querySelector('[data-role="reg-seg"]'),m=_?.querySelector(".au-mode-indicator"),ne=_?.querySelector('.au-mode-tab[aria-selected="true"]');!m||!ne||(m.style.transition=b?"":"none",m.style.transform=`translateX(${ne.offsetLeft}px)`,m.style.width=`${ne.offsetWidth}px`,b||(m.offsetWidth,m.style.transition=""))}function Qe(){Ue(!1)}function Ze(){r=!0,P?.(),P=null,te.destroy(),O!==null&&(window.clearInterval(O),O=null),fe!==null&&(window.clearInterval(fe),fe=null),ve!==null&&(window.clearInterval(ve),ve=null),Te!==null&&(window.clearTimeout(Te),Te=null),Pe!==null&&(window.clearTimeout(Pe),Pe=null),document.removeEventListener("keydown",$e),window.removeEventListener("resize",Qe),a.classList.remove("bare-login"),xa.get(a)===Ze&&xa.delete(a)}document.addEventListener("keydown",$e),window.addEventListener("resize",Qe),xa.set(a,Ze);function ka(b){S=b,O!==null&&window.clearInterval(O),O=window.setInterval(()=>{S-=1,S<=0&&(S=0,O!==null&&(window.clearInterval(O),O=null));const _=a.querySelector('[data-act="jn-send-code"]');_&&(_.disabled=S>0,_.textContent=S>0?`${S} 秒后重发`:u?"重新获取":"获取验证码")},1e3)}function De(b){X=b,fe!==null&&window.clearInterval(fe),fe=window.setInterval(()=>{X-=1,X<=0&&(X=0,fe!==null&&(window.clearInterval(fe),fe=null));const _=a.querySelector('[data-act="ap-send-code"]');_&&(_.disabled=X>0,_.textContent=X>0?`${X} 秒后重发`:U?"重新获取":"获取验证码")},1e3)}function Fe(){const b=a.querySelector("#au-reg-ferr");if(b)if(ee){b.hidden=!1;const _=b.querySelector('[data-role="ferr-text"]');_&&(_.textContent=ee)}else b.hidden=!0}function ke(b){const _=a.querySelector(`.au-field[data-f="${b}"]`),m=a.querySelector(`#au-${b}`),ne=a.querySelector(`#au-${b}-err`),g=h[b]??"";_?.classList.toggle("bad",!!g),m?.setAttribute("aria-invalid",g?"true":"false"),ne&&(ne.textContent=g)}function Ve(b,_){const m=a.querySelector("form[data-reg-form] fieldset"),ne=a.querySelector('form[data-reg-form] button[type="submit"]');m&&(m.disabled=_e),ne&&(ne.disabled=_e,ne.innerHTML=_e?`<span class="au-spinner" aria-hidden="true"></span><span>${c(b)}</span>`:`<span>${c(_)}</span>`)}function Me(b,_){te.close(!1),F=_??(document.activeElement instanceof HTMLElement?document.activeElement:null),p=b,ia(),a.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function He(){if(!p)return;p=null,D=null,Te!==null&&(window.clearTimeout(Te),Te=null),E=!1,ia();const b=F;F=null,b&&document.contains(b)&&b.focus({preventScroll:!0})}function ze(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">请阅读并同意</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${rt}</button>
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
    `}function Xe(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">撤回加入申请</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${rt}</button>
          </div>
          <div class="db">
            <p class="au-dlead" style="margin-bottom:0;">撤回后本次申请将作废，你可以修改信息后重新提交。</p>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="button" class="au-dlg-btn au-dlg-btn--danger" data-act="withdraw-confirm">确认撤回</button>
          </div>
        </section>
      </div>
    `}function ia(){const b=a.querySelector('[data-role="modal-host"]');if(b){if(!p){b.innerHTML="";return}b.innerHTML=p==="contact"?Nt(E):p==="withdraw_confirm"?Xe():ze(),b.querySelectorAll('[data-act="close-modal"]').forEach(_=>{_.addEventListener("click",()=>He())}),b.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",_=>{_.target===_.currentTarget&&He()}),b.querySelector('[data-act="consent-confirm"]')?.addEventListener("click",()=>{const _=D;D=null,p=null,ia(),_?.()}),b.querySelector('[data-act="withdraw-confirm"]')?.addEventListener("click",async()=>{if(!(!M||!e.withdrawJoinApplication||re)){p=null,ia(),re=!0,ee="",Ke();try{if(await e.withdrawJoinApplication(M.requestId),r)return;re=!1,M=null,Ke()}catch(_){if(r)return;re=!1,ee=_ instanceof Error?_.message:"暂时无法撤回申请，请稍后再试。",Ke()}}}),b.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{const _=b.querySelector('[data-act="copy-support"]');try{await navigator.clipboard.writeText("support@pacom.cn")}catch{}E=!0,_&&(_.classList.add("is-copied"),_.innerHTML=`${lt}<span>已复制</span>`),Te!==null&&window.clearTimeout(Te),Te=window.setTimeout(()=>{Te=null,E=!1;const m=b.querySelector('[data-act="copy-support"]');m&&(m.classList.remove("is-copied"),m.innerHTML=`${$a}<span>复制</span>`)},1800)})}}function aa(b,_,m,ne){return`
      <div class="au-field au-consent-field ${h[ne]?"bad":""}" data-f="${ne}">
        <div class="au-check au-consent-row">
          <input id="${b}" type="checkbox" name="${_}" ${m?"checked":""} aria-invalid="${h[ne]?"true":"false"}" />
          <span class="au-consent-text">
            <label class="au-consent-label" for="${b}">我已阅读并同意 PACOM </label><a class="au-consent-link" href="${Oa}" target="_blank" rel="noopener noreferrer">隐私政策</a><label class="au-consent-label" for="${b}">和</label><a class="au-consent-link" href="${Oa}" target="_blank" rel="noopener noreferrer">使用条款</a>
          </span>
        </div>
        <p class="au-err" id="au-${ne}-err" aria-live="polite">${c(h[ne]??"")}</p>
      </div>
    `}async function qe(b){const _=b.replace(/\D/g,"");if(_.length!==9){W="",ce=!1,ea();return}const m=++ie;ce=!0,W="",ea();try{const ne=await e.resolveInviteCode(_);if(r||m!==ie)return;ce=!1,ne.valid&&ne.organizationName?(W=ne.organizationName,delete h.jn_code):(W="",h.jn_code=ne.message??"邀请码不正确或已失效，请向机构管理员确认。"),ke("jn_code"),ea()}catch(ne){if(r||m!==ie)return;ce=!1,W="",h.jn_code=ne instanceof Error?ne.message:"暂时无法核验邀请码，请稍后再试。",ke("jn_code"),ea()}}function ea(){const b=a.querySelector('[data-role="jn-code-match"]'),_=a.querySelector('[data-role="jn-nocode-wrap"]');b&&(W?(b.hidden=!1,b.innerHTML=`${gt}<span>目标机构：${c(W)}</span>`):(b.hidden=!0,b.innerHTML="")),_&&(_.hidden=!!W)}function Ea(){const b=`
      <span data-role="jn-nocode-wrap" ${W?"hidden":""}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-nocode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-nocode-pop"><span>没有邀请码？</span></button>
        <span id="au-jn-nocode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="没有邀请码说明" hidden>
          <span class="ws-info-text">请向所在机构的管理员获取 9 位邀请码；如需为新企业开通，请切换上方「申请开通机构」。</span>
        </span>
      </span>
    `,_=`
      <span data-role="jn-novcode-wrap" ${u?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-jn-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认邮箱或手机号码无误，检查垃圾邮件或短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">填写机构 9 位邀请码，管理员批准后即可访问。</p>
      <form class="au-compact-form au-reg-form" data-reg-form="join" novalidate>
        <fieldset ${_e?"disabled":""}>
          <div class="au-field ${h.jn_code?"bad":""}" data-f="jn_code">
            <div class="au-lab">
              <label for="au-jn_code">机构邀请码</label>
              ${b}
            </div>
            <div class="au-ctl">
              <input id="au-jn_code" name="jn_code" class="au-in" type="text" inputmode="numeric" autocomplete="off" maxlength="11" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(H)}" aria-invalid="${h.jn_code?"true":"false"}" />
            </div>
            <div class="au-code-match" data-role="jn-code-match" role="status" aria-live="polite" ${W?"":"hidden"}>
              ${W?`${gt}<span>目标机构：${c(W)}</span>`:""}
            </div>
            <p class="au-err" id="au-jn_code-err" aria-live="polite">${c(h.jn_code??"")}</p>
          </div>

          <div class="au-field ${h.jn_name?"bad":""}" data-f="jn_name">
            <div class="au-lab"><label for="au-jn_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-jn_name" name="jn_name" class="au-in" type="text" autocomplete="name" value="${c(ge)}" aria-invalid="${h.jn_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_name-err" aria-live="polite">${c(h.jn_name??"")}</p>
          </div>

          <div class="au-field ${h.jn_dept?"bad":""}" data-f="jn_dept">
            <div class="au-lab"><label for="au-jn_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-jn_dept" name="jn_dept" class="au-in" type="text" autocomplete="organization-title" value="${c(Ie)}" aria-invalid="${h.jn_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_dept-err" aria-live="polite">${c(h.jn_dept??"")}</p>
          </div>

          <div class="au-field ${h.jn_account?"bad":""}" data-f="jn_account">
            <div class="au-lab"><label for="au-jn_account">电子邮箱或手机号码</label></div>
            <div class="au-ctl">
              <input id="au-jn_account" name="jn_account" class="au-in has-code-btn" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(be)}" aria-invalid="${h.jn_account?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="jn-send-code" ${S>0?"disabled":""}>
                ${S>0?`${S} 秒后重发`:u?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-jn_account-err" aria-live="polite">${c(h.jn_account??"")}</p>
            <p class="au-hint" id="au-jn_account-hint" role="status" aria-live="polite">${u?`验证码已发送至 ${c(u)}`:""}</p>
          </div>

          <div class="au-field ${h.jn_vcode?"bad":""}" data-f="jn_vcode">
            <div class="au-lab">
              <label for="au-jn_vcode">验证码</label>
              ${_}
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
                ${Ta("au-jn-pwd-info","设置密码说明",ft)}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-jn_pwd" name="jn_pwd" class="au-in has-suffix" type="${Le?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(Z)}" aria-invalid="${h.jn_pwd?"true":"false"}" />
              <button type="button" class="au-suffix au-eye" data-act="jn-toggle-eye" aria-controls="au-jn_pwd" aria-label="${Le?"隐藏密码":"显示密码"}">
                ${Le?ha:fa}
              </button>
            </div>
            <p class="au-err" id="au-jn_pwd-err" aria-live="polite">${c(h.jn_pwd??"")}</p>
          </div>

          ${aa("au-jn_consent","jn_consent",R,"jn_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${ee?"":"hidden"}>
            ${va}
            <span data-role="ferr-text">${c(ee)}</span>
          </div>

          <button type="submit" class="au-primary au-compact-primary" ${_e?"disabled":""}>
            ${_e?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>注册并申请加入</span>"}
          </button>
        </fieldset>
      </form>
    `}function Wa(){const b=bt(f),_=ta(w),m=_>=ca*.8?`${_} / ${ca}`:"",ne=`
      <span data-role="ap-novcode-wrap" ${U?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-ap-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-ap-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-ap-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">提交企业信息，经 PACOM 审核通过后开通机构。</p>
      <form class="au-compact-form au-reg-form" data-reg-form="apply" novalidate>
        <fieldset ${_e?"disabled":""}>
          <div class="au-field ${h.ap_org?"bad":""}" data-f="ap_org">
            <div class="au-lab au-label-row">
              <span class="au-lab-group">
                <label for="au-ap_org">机构名称</label>
                ${Ta("au-ap-org-info","机构名称说明",["请填写营业执照等登记证书上的完整名称。"])}
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
                <select id="au-ap_prov" name="ap_prov" class="au-select ${f?"":"is-placeholder"}" aria-label="省份" aria-invalid="${h.ap_region?"true":"false"}">
                  <option value="" ${f?"":"selected"}>省份</option>
                  ${Ht.map(([g])=>`<option value="${c(g)}" ${f===g?"selected":""}>${c(g)}</option>`).join("")}
                </select>
                ${ht}
              </div>
              <div class="au-select-wrap">
                <select id="au-ap_city" name="ap_city" class="au-select ${L?"":"is-placeholder"}" aria-label="城市" ${f?"":"disabled"} aria-invalid="${h.ap_region?"true":"false"}">
                  <option value="" ${L?"":"selected"}>城市</option>
                  ${b.map(g=>`<option value="${c(g)}" ${L===g?"selected":""}>${c(g)}</option>`).join("")}
                </select>
                ${ht}
              </div>
            </div>
            <p class="au-err" id="au-ap_region-err" aria-live="polite">${c(h.ap_region??"")}</p>
          </div>

          <div class="au-field ${h.ap_name?"bad":""}" data-f="ap_name">
            <div class="au-lab"><label for="au-ap_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-ap_name" name="ap_name" class="au-in" type="text" autocomplete="name" value="${c(se)}" aria-invalid="${h.ap_name?"true":"false"}" />
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
              <input id="au-ap_email" name="ap_email" class="au-in" type="email" inputmode="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(je)}" aria-invalid="${h.ap_email?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_email-err" aria-live="polite">${c(h.ap_email??"")}</p>
          </div>

          <div class="au-field ${h.ap_phone?"bad":""}" data-f="ap_phone">
            <div class="au-lab"><label for="au-ap_phone">手机号码</label></div>
            <div class="au-ctl">
              <input id="au-ap_phone" name="ap_phone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(ye)}" aria-invalid="${h.ap_phone?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="ap-send-code" ${X>0?"disabled":""}>
                ${X>0?`${X} 秒后重发`:U?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-ap_phone-err" aria-live="polite">${c(h.ap_phone??"")}</p>
            <p class="au-hint" id="au-ap_phone-hint" role="status" aria-live="polite">${U?`验证码已发送至 ${c(U)}`:""}</p>
          </div>

          <div class="au-field ${h.ap_sms?"bad":""}" data-f="ap_sms">
            <div class="au-lab">
              <label for="au-ap_sms">验证码</label>
              ${ne}
            </div>
            <div class="au-ctl">
              <input id="au-ap_sms" name="ap_sms" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(Q)}" aria-invalid="${h.ap_sms?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_sms-err" aria-live="polite">${c(h.ap_sms??"")}</p>
          </div>

          <div class="au-field ${h.ap_overview?"bad":""}" data-f="ap_overview">
            <div class="au-lab"><label for="au-ap_overview">项目概况<span class="fld-opt">选填</span></label></div>
            <div class="ws-textarea-shell au-note-shell">
              <textarea id="au-ap_overview" name="ap_overview" class="au-in au-ta au-ta-std" rows="3" aria-invalid="${h.ap_overview?"true":"false"}">${c(w)}</textarea>
              <button type="button" class="ws-resize" data-space-resize="au-ap_overview" aria-label="调整项目概况输入框高度；按上下方向键调整"></button>
            </div>
            <p class="au-err" id="au-ap_overview-err" aria-live="polite">${c(h.ap_overview??"")}</p>
            <p class="au-hint au-char-count" id="au-ap_overview-count" ${m?"":"hidden"}>${c(m)}</p>
          </div>

          ${aa("au-ap_consent","ap_consent",$,"ap_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${ee?"":"hidden"}>
            ${va}
            <span data-role="ferr-text">${c(ee)}</span>
          </div>

          <button type="submit" class="au-primary au-compact-primary" ${_e?"disabled":""}>
            ${_e?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>提交开通申请</span>"}
          </button>
        </fieldset>
      </form>
    `}async function Ia(){const b=Xa(be);if(b){h.jn_account=b,ke("jn_account"),a.querySelector("#au-jn_account")?.focus({preventScroll:!0});return}delete h.jn_account,ke("jn_account");const _=a.querySelector('[data-act="jn-send-code"]');_&&(_.disabled=!0,_.textContent="发送中…");try{const m=await e.sendVerificationCode({target:Je(be),purpose:"register_join",consentAcceptedAt:new Date().toISOString()});if(r)return;u=m.maskedTarget||ba(be);const ne=a.querySelector("#au-jn_account-hint");ne&&(ne.textContent=`验证码已发送至 ${u}`);const g=a.querySelector('[data-role="jn-novcode-wrap"]');g&&(g.hidden=!1),ka(m.cooldownSeconds||60),_&&(_.disabled=!0,_.textContent=`${S} 秒后重发`),a.querySelector("#au-jn_vcode")?.focus({preventScroll:!0})}catch(m){if(r)return;_&&(_.disabled=!1,_.textContent=u?"重新获取":"获取验证码"),ee=m instanceof Error?m.message:"暂时无法发送验证码，请稍后再试。",Fe()}}async function _a(){const b=oa(ye);if(b){h.ap_phone=b,ke("ap_phone"),a.querySelector("#au-ap_phone")?.focus({preventScroll:!0});return}delete h.ap_phone,ke("ap_phone");const _=a.querySelector('[data-act="ap-send-code"]');_&&(_.disabled=!0,_.textContent="发送中…");try{const m=await e.sendVerificationCode({target:Je(ye),purpose:"org_apply",consentAcceptedAt:new Date().toISOString()});if(r)return;U=m.maskedTarget||ba(ye);const ne=a.querySelector("#au-ap_phone-hint");ne&&(ne.textContent=`验证码已发送至 ${U}`);const g=a.querySelector('[data-role="ap-novcode-wrap"]');g&&(g.hidden=!1),De(m.cooldownSeconds||60),_&&(_.disabled=!0,_.textContent=`${X} 秒后重发`),a.querySelector("#au-ap_sms")?.focus({preventScroll:!0})}catch(m){if(r)return;_&&(_.disabled=!1,_.textContent=U?"重新获取":"获取验证码"),ee=m instanceof Error?m.message:"暂时无法发送验证码，请稍后再试。",Fe()}}function pa(b){te.bind(b);const _=b.querySelector("#au-jn_code"),m=b.querySelector("#au-jn_name"),ne=b.querySelector("#au-jn_dept"),g=b.querySelector("#au-jn_account"),k=b.querySelector("#au-jn_vcode"),C=b.querySelector("#au-jn_pwd"),j=b.querySelector("#au-jn_consent");_?.addEventListener("input",()=>{H=pt(_.value),_.value=H,(h.jn_code||ee)&&(delete h.jn_code,ee="",ke("jn_code"),Fe()),qe(H)}),m?.addEventListener("input",()=>{ge=m.value,(h.jn_name||ee)&&(delete h.jn_name,ee="",ke("jn_name"),Fe())}),ne?.addEventListener("input",()=>{Ie=ne.value,h.jn_dept&&(delete h.jn_dept,ke("jn_dept"))}),g?.addEventListener("input",()=>{if(be=g.value,u){u="";const T=b.querySelector("#au-jn_account-hint");T&&(T.textContent="");const y=b.querySelector('[data-role="jn-novcode-wrap"]');y&&(y.hidden=!0),te.close(!1);const t=b.querySelector('[data-act="jn-send-code"]');t&&S===0&&(t.textContent="获取验证码")}(h.jn_account||ee)&&(delete h.jn_account,ee="",ke("jn_account"),Fe())}),k?.addEventListener("input",()=>{A=k.value.replace(/\D/g,"").slice(0,6),k.value=A,(h.jn_vcode||ee)&&(delete h.jn_vcode,ee="",ke("jn_vcode"),Fe())}),C?.addEventListener("input",()=>{Z=C.value,(h.jn_pwd||ee)&&(delete h.jn_pwd,ee="",ke("jn_pwd"),Fe())}),j?.addEventListener("change",()=>{R=j.checked,R&&h.jn_consent&&(delete h.jn_consent,ke("jn_consent"))}),b.querySelector('[data-act="jn-toggle-eye"]')?.addEventListener("click",T=>{Le=!Le;const y=T.currentTarget;if(C){const t=C.selectionStart,o=C.selectionEnd;C.type=Le?"text":"password",C.focus({preventScroll:!0}),t!==null&&o!==null&&C.setSelectionRange(t,o)}y.setAttribute("aria-label",Le?"隐藏密码":"显示密码"),y.innerHTML=Le?ha:fa}),b.querySelector('[data-act="jn-send-code"]')?.addEventListener("click",T=>{const y=Xa(be);if(y){h.jn_account=y,ke("jn_account"),g?.focus({preventScroll:!0});return}if(!R){D=()=>{R=!0,j&&(j.checked=!0),delete h.jn_consent,ke("jn_consent"),Ia()},Me("consent_ask",T.currentTarget);return}Ia()}),b.querySelector('form[data-reg-form="join"]')?.addEventListener("submit",async T=>{if(T.preventDefault(),_e)return;h={},ee="";const y=H.replace(/\D/g,"");if(y.length!==9)h.jn_code="请输入 9 位机构邀请码";else if(!W&&!ce){const n=await e.resolveInviteCode(y);n.valid&&n.organizationName?(W=n.organizationName,ea()):h.jn_code=n.message??"邀请码不正确或已失效，请向机构管理员确认。"}ge.trim()?ta(ge.trim())>ma&&(h.jn_name=`姓名不超过 ${ma} 个字`):h.jn_name="请输入姓名",ta(Ie.trim())>Ma&&(h.jn_dept=`部门 / 职务不超过 ${Ma} 个字`);const t=Xa(be);t&&(h.jn_account=t),/^\d{6}$/.test(A.trim())||(h.jn_vcode="请输入 6 位验证码");const o=vt(Z);o&&(h.jn_pwd=o),R||(h.jn_consent="请阅读并同意隐私政策和使用条款");for(const n of["jn_code","jn_name","jn_dept","jn_account","jn_vcode","jn_pwd","jn_consent"])ke(n);if(Fe(),Object.keys(h).length>0){const n=Object.keys(h)[0];b.querySelector(`#au-${n}`)?.focus({preventScroll:!0});return}_e=!0,Ve("正在提交…","注册并申请加入");try{M=await e.registerAndJoin({inviteCode:y,displayName:ge.trim(),departmentTitle:Ie.trim()||void 0,account:Je(be),verificationCode:A.trim(),password:Z,consentAcceptedAt:new Date().toISOString()}),_e=!1,Ke()}catch(n){_e=!1,ee=n instanceof Error?n.message:"暂时无法提交申请，请稍后再试。",Ve("正在提交…","注册并申请加入"),Fe()}})}function Ga(b){te.bind(b),Wt(b);const _=b.querySelector("#au-ap_org"),m=b.querySelector("#au-ap_prov"),ne=b.querySelector("#au-ap_city"),g=b.querySelector("#au-ap_name"),k=b.querySelector("#au-ap_dept"),C=b.querySelector("#au-ap_email"),j=b.querySelector("#au-ap_phone"),T=b.querySelector("#au-ap_sms"),y=b.querySelector("#au-ap_overview"),t=b.querySelector("#au-ap_overview-count"),o=b.querySelector("#au-ap_consent");_?.addEventListener("input",()=>{d=_.value,(h.ap_org||ee)&&(delete h.ap_org,ee="",ke("ap_org"),Fe())}),m?.addEventListener("change",()=>{f=m.value,m.classList.toggle("is-placeholder",!f);const n=bt(f);L=n.length===1?n[0]:"",ne&&(ne.disabled=!f,ne.innerHTML=`<option value="" ${L?"":"selected"}>城市</option>`+n.map(i=>`<option value="${c(i)}" ${L===i?"selected":""}>${c(i)}</option>`).join(""),ne.classList.toggle("is-placeholder",!L)),f&&L&&h.ap_region&&(delete h.ap_region,ke("ap_region"))}),ne?.addEventListener("change",()=>{L=ne.value,ne.classList.toggle("is-placeholder",!L),f&&L&&h.ap_region&&(delete h.ap_region,ke("ap_region"))}),g?.addEventListener("input",()=>{se=g.value,(h.ap_name||ee)&&(delete h.ap_name,ee="",ke("ap_name"),Fe())}),k?.addEventListener("input",()=>{me=k.value,h.ap_dept&&(delete h.ap_dept,ke("ap_dept"))}),C?.addEventListener("input",()=>{je=C.value,(h.ap_email||ee)&&(delete h.ap_email,ee="",ke("ap_email"),Fe())}),j?.addEventListener("input",()=>{if(ye=j.value,U){U="";const n=b.querySelector("#au-ap_phone-hint");n&&(n.textContent="");const i=b.querySelector('[data-role="ap-novcode-wrap"]');i&&(i.hidden=!0),te.close(!1);const q=b.querySelector('[data-act="ap-send-code"]');q&&X===0&&(q.textContent="获取验证码")}(h.ap_phone||ee)&&(delete h.ap_phone,ee="",ke("ap_phone"),Fe())}),T?.addEventListener("input",()=>{Q=T.value.replace(/\D/g,"").slice(0,6),T.value=Q,(h.ap_sms||ee)&&(delete h.ap_sms,ee="",ke("ap_sms"),Fe())}),y?.addEventListener("input",()=>{w=y.value;const n=ta(w);t&&(n>=ca*.8?(t.textContent=`${n} / ${ca}`,t.hidden=!1):t.hidden=!0),h.ap_overview&&n<=ca&&(delete h.ap_overview,ke("ap_overview"))}),o?.addEventListener("change",()=>{$=o.checked,$&&h.ap_consent&&(delete h.ap_consent,ke("ap_consent"))}),b.querySelector('[data-act="ap-send-code"]')?.addEventListener("click",n=>{const i=oa(ye);if(i){h.ap_phone=i,ke("ap_phone"),j?.focus({preventScroll:!0});return}if(!$){D=()=>{$=!0,o&&(o.checked=!0),delete h.ap_consent,ke("ap_consent"),_a()},Me("consent_ask",n.currentTarget);return}_a()}),b.querySelector('form[data-reg-form="apply"]')?.addEventListener("submit",async n=>{if(n.preventDefault(),_e)return;h={},ee="",d.trim()?ta(d.trim())>Ot&&(h.ap_org=`机构名称不超过 ${Ot} 个字`):h.ap_org="请输入机构名称",(!f||!L)&&(h.ap_region="请选择所在地区"),se.trim()?ta(se.trim())>ma&&(h.ap_name=`姓名不超过 ${ma} 个字`):h.ap_name="请输入姓名",ta(me.trim())>Ma&&(h.ap_dept=`部门 / 职务不超过 ${Ma} 个字`),qa(je)||(h.ap_email="请输入有效的电子邮箱");const i=oa(ye);i&&(h.ap_phone=i),/^\d{6}$/.test(Q.trim())||(h.ap_sms="请输入 6 位短信验证码"),ta(w)>ca&&(h.ap_overview=`项目概况不超过 ${ca} 个字`),$||(h.ap_consent="请阅读并同意隐私政策和使用条款");for(const q of["ap_org","ap_region","ap_name","ap_dept","ap_email","ap_phone","ap_sms","ap_overview","ap_consent"])ke(q);if(Fe(),Object.keys(h).length>0){const q=Object.keys(h)[0],x=q==="ap_region"?f?"au-ap_city":"au-ap_prov":`au-${q}`;b.querySelector(`#${x}`)?.focus({preventScroll:!0});return}_e=!0,Ve("正在提交…","提交开通申请");try{K=await e.submitOrgApplication({organizationName:d.trim(),province:f,city:L,contactName:se.trim(),departmentTitle:me.trim()||void 0,email:Je(je),phone:Je(ye),smsCode:Q.trim(),projectOverview:w.trim()||void 0,consentAcceptedAt:new Date().toISOString()}),_e=!1,Ke()}catch(q){_e=!1,ee=q instanceof Error?q.message:"暂时无法提交开通申请，请稍后再试。",Ve("正在提交…","提交开通申请"),Fe()}})}function La(){te.close(!1);const b=a.querySelector('[data-role="reg-body-host"]');b&&(l==="join"?(b.innerHTML=Ea(),pa(b)):(b.innerHTML=Wa(),Ga(b)))}function Ge(b,_=!1){l===b||_e||(l=b,h={},ee="",a.querySelectorAll('[data-act="switch-reg-tab"]').forEach(m=>{const ne=m.dataset.tab===b;m.setAttribute("aria-selected",String(ne)),m.tabIndex=ne?0:-1,ne&&_&&m.focus({preventScroll:!0})}),Ue(!0),La(),a.querySelector(".au-left")?.scrollTo({top:0}))}function Za(){if(K)return{title:"开通申请已提交 · PACOM Station",bodyHtml:`
          <h1 class="au-h1 is-with-icon"><span class="au-h1-icon" aria-hidden="true">${Qa}</span><span>开通申请已提交</span></h1>
          <p class="au-lead">预计 1–2 个工作日完成审核，审核通过后将发送开通链接至你的邮箱。</p>
          <div class="au-summary-card">
            <div class="au-summary-row">
              <span class="au-summary-k">申请单号</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${c(K.applicationId)}</span>
                <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${c(K.applicationId)}" aria-label="复制申请单号" title="复制申请单号">${$a}</button>
              </span>
            </div>
            <div class="au-summary-row"><span class="au-summary-k">申请机构</span><span class="au-summary-v">${c(K.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">通知邮箱</span><span class="au-summary-v is-tabular">${c(K.maskedEmail)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待审核</span></div>
          </div>
          <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
        `};const b=M;return{title:"加入申请已提交 · PACOM Station",bodyHtml:`
        <h1 class="au-h1 is-with-icon"><span class="au-h1-icon" aria-hidden="true">${Qa}</span><span>加入申请已提交</span></h1>
        <p class="au-lead">已提交至<b>${c(b.organizationName)}</b>，管理员批准后将发送登录通知。</p>
        <div class="au-summary-card">
          <div class="au-summary-row">
            <span class="au-summary-k">申请单号</span>
            <span class="au-summary-v au-summary-v-copy is-tabular">
              <span>${c(b.requestId)}</span>
              <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${c(b.requestId)}" aria-label="复制申请单号" title="复制申请单号">${$a}</button>
            </span>
          </div>
          <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${c(b.organizationName)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">登录账号</span><span class="au-summary-v is-tabular">${c(b.maskedAccount)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待管理员审批</span></div>
        </div>
        <div class="au-ferr" id="au-reg-ferr" role="alert" ${ee?"":"hidden"}>
          ${va}
          <span data-role="ferr-text">${c(ee)}</span>
        </div>
        <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
        ${e.withdrawJoinApplication?`
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct">信息填错了？<button type="button" class="au-inline" data-act="ask-withdraw" ${re?"disabled":""}>${re?"正在撤回…":"撤回申请"}</button></p>
          </div>`:""}
      `}}function ja(b){N=b,ve!==null&&window.clearInterval(ve),ve=window.setInterval(()=>{N-=1,N<=0&&(N=0,ve!==null&&(window.clearInterval(ve),ve=null));const _=a.querySelector('[data-act="iv-send-sec"]');_&&(_.disabled=N>0,_.textContent=N>0?`${N} 秒后重发`:de?"重新获取":"获取验证码")},1e3)}function ya(b){return b.requiredSecondaryChannel!==void 0?b.requiredSecondaryChannel:ga(b.kind,b.role,b.targetChannel)}function Aa(b){return Je(b).toLowerCase().replace(/[\s\-()]/g,"")}function Ka(b,_){if(!b)return!1;const m=Aa(_.targetValue);if(!m)return!1;const ne=_.targetChannel==="email"?b.email:b.phone;return!!ne&&Aa(ne)===m}async function Ca(b){const _=b==="phone"?oa(J):qa(J)?"":"请输入有效的电子邮箱";if(_){h.iv_sec=_,ke("iv_sec"),a.querySelector("#au-iv_sec")?.focus({preventScroll:!0});return}delete h.iv_sec,ke("iv_sec");const m=a.querySelector('[data-act="iv-send-sec"]');m&&(m.disabled=!0,m.textContent="发送中…");try{const ne=await e.sendVerificationCode({target:Je(J),purpose:"bind",consentAcceptedAt:new Date().toISOString()});if(r)return;de=ne.maskedTarget||ba(J);const g=a.querySelector("#au-iv_sec-hint");g&&(g.textContent=`验证码已发送至 ${de}`);const k=a.querySelector('[data-role="iv-novcode-wrap"]');k&&(k.hidden=!1),ja(ne.cooldownSeconds||60),m&&(m.disabled=!0,m.textContent=`${N} 秒后重发`),a.querySelector("#au-iv_seccode")?.focus({preventScroll:!0})}catch(ne){if(r)return;m&&(m.disabled=!1,m.textContent=de?"重新获取":"获取验证码"),ee=ne instanceof Error?ne.message:"暂时无法发送验证码，请稍后再试。",Fe()}}function Ya(){if(Y)return{title:"验证邀请 · PACOM Station",bodyHtml:`
          <h1 class="au-h1">正在核验邀请链接…</h1>
          <p class="au-lead">请稍候，正在确认所属机构与授权信息。</p>
        `};if(z&&z.status==="accepted")return{title:"邀请已生效 · PACOM Station",bodyHtml:`
          <h1 class="au-h1 is-with-icon"><span class="au-h1-icon" aria-hidden="true">${Qa}</span><span>邀请已被接受</span></h1>
          <p class="au-lead">该邀请链接已完成激活，你可以直接登录访问<b>${c(z.organizationName)}</b>。</p>
          <button type="button" class="au-primary" data-act="${oe?"iv-back-ws":"back-login"}"><span>${oe?"进入工作区":"前往登录"}</span></button>
        `};if(B||!z||z.status!=="pending"){const t=B?c(B):z?.inviterName&&z?.organizationName?`该加入<b>${c(z.organizationName)}</b>的邀请已过期或被撤销，请联系邀请人${c(z.inviterName)}重新发送。`:"该邀请链接无效、已过期或已撤销，请联系机构管理员重新发送。";return{title:"邀请已失效 · PACOM Station",bodyHtml:`
          <h1 class="au-h1 is-with-icon"><span class="au-h1-icon au-h1-icon--warn" aria-hidden="true">${Vt}</span><span>邀请已失效</span></h1>
          <p class="au-lead">${t}</p>
          <button type="button" class="au-primary" data-act="back-login"><span>返回登录</span></button>
        `}}const b=z,_=b.kind==="owner",m=_?"开通机构":"加入机构",ne=b.targetChannel==="phone"?"受邀手机号码":"受邀电子邮箱",g=b.targetChannel==="phone"?ut(b.targetValue):b.targetValue;if(oe){if(Ka(oe,b)){const i=_?`<b>${c(b.organizationName)}</b>已审核通过，确认后即以机构管理员身份完成开通。<span class="au-lead-meta">有效期至 ${c(b.expiresAt)}</span>`:`${c(b.inviterName||"机构管理员")}邀请你以${c(b.roleLabel||"成员")}身份加入<b>${c(b.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${c(b.expiresAt)}</span>`;return{title:`${m} · PACOM Station`,bodyHtml:`
            <h1 class="au-h1">${m}</h1>
            <p class="au-lead">${i}</p>
            <div class="au-summary-card">
              <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${c(b.organizationName)}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${c(b.roleLabel||(_?"机构管理员":"成员"))}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${c(oe.displayName)} · ${c(g)}</span></div>
            </div>
            <div class="au-ferr" id="au-reg-ferr" role="alert" ${ee?"":"hidden"}>
              ${va}
              <span data-role="ferr-text">${c(ee)}</span>
            </div>
            <button type="button" class="au-primary" data-act="iv-confirm-join" ${_e?"disabled":""}>
              ${_e?'<span class="au-spinner" aria-hidden="true"></span><span>正在处理…</span>':`<span>${_?"确认开通":"确认加入"}</span>`}
            </button>
            <div class="au-login-actions">
              <div class="au-login-divider" aria-hidden="true"></div>
              <p class="au-noacct">${_?"暂不开通？":"暂不加入？"}<button type="button" class="au-inline" data-act="iv-back-ws">返回工作区</button></p>
            </div>
          `}}const t=ba(b.targetValue),o=oe.email||(oe.phone?ut(oe.phone):"");return{title:"请切换至受邀账户 · PACOM Station",bodyHtml:`
          <h1 class="au-h1">请切换至受邀账户</h1>
          <p class="au-lead">${_?`该开通链接面向 <b>${c(t)}</b>（开通${c(b.organizationName)}），与当前登录账户不一致。`:`该邀请面向 <b>${c(t)}</b>（加入${c(b.organizationName)}），与当前登录账户不一致。`}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">当前登录</span><span class="au-summary-v is-tabular">${c(oe.displayName)}${o?` · ${c(o)}`:""}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">受邀账号</span><span class="au-summary-v is-tabular">${c(t)}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="iv-switch-account"><span>切换账户登录</span></button>
          <div class="au-login-actions">
            <div class="au-login-divider" aria-hidden="true"></div>
            <p class="au-noacct">暂不处理？<button type="button" class="au-inline" data-act="iv-back-ws">返回工作区</button></p>
          </div>
        `}}if(b.accountExists){const t=_?`<b>${c(b.organizationName)}</b>已审核通过，请先登录已有账户完成开通。<span class="au-lead-meta">有效期至 ${c(b.expiresAt)}</span>`:`${c(b.inviterName||"机构管理员")}邀请你以${c(b.roleLabel||"成员")}身份加入<b>${c(b.organizationName)}</b>，请先登录已有账户完成确认。<span class="au-lead-meta">有效期至 ${c(b.expiresAt)}</span>`;return{title:`${m} · PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${m}</h1>
          <p class="au-lead">${t}</p>
          <div class="au-summary-card">
            <div class="au-summary-row">
              <span class="au-summary-k">受邀账号</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${c(g)}</span>
                <span class="au-status-pill au-status-pill--neutral">已注册</span>
              </span>
            </div>
            <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${c(b.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${c(b.roleLabel||(_?"机构管理员":"成员"))}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="iv-go-login"><span>${_?"登录并开通":"登录并加入"}</span></button>
        `}}const k=_?`<b>${c(b.organizationName)}</b>已审核通过，设置密码后即以机构管理员身份开通。<span class="au-lead-meta">有效期至 ${c(b.expiresAt)}</span>`:`${c(b.inviterName||"机构管理员")}邀请你以${c(b.roleLabel||"成员")}身份加入<b>${c(b.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${c(b.expiresAt)}</span>`,C=_?"完成开通":"注册并加入",j=ya(b),T=_?`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">管理员账号</span>
            <span class="au-lab-status">${mt}<span>已核验</span></span>
          </div>
          <div class="au-verified-card">
            <div class="au-verified-row">
              <span class="au-verified-k">${b.targetChannel==="phone"?"手机号码":"电子邮箱"}</span>
              <span class="au-verified-v">${c(g)}</span>
            </div>
            ${b.verifiedSecondaryMasked?`
              <div class="au-verified-row">
                <span class="au-verified-k">${b.targetChannel==="phone"?"电子邮箱":"手机号码"}</span>
                <span class="au-verified-v">${c(b.verifiedSecondaryMasked)}</span>
              </div>`:""}
          </div>
        </div>`:`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">${ne}</span>
            <span class="au-lab-status">${mt}<span>已核验</span></span>
          </div>
          <div class="au-locked-card">
            <span class="au-locked-val">${c(g)}</span>
          </div>
        </div>`,y=j?(()=>{const t=j==="phone",o=t?"手机号码":"电子邮箱",n=t?"用于新设备登录、敏感操作与重置密码时的身份验证。":"机构管理员须绑定电子邮箱，用于接收订单、续费与安全通知。",i=t?"短信验证码":"邮件验证码",q=t?"请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。":"请确认电子邮箱无误并检查垃圾邮件箱；如仍未收到，可点击页脚「联系我们」获取协助。";return`
            <div class="au-field ${h.iv_sec?"bad":""}" data-f="iv_sec">
              <div class="au-lab au-label-row">
                <span class="au-lab-group">
                  <label for="au-iv_sec">${o}</label>
                  ${Ta("au-iv-sec-info",`${o}说明`,[n])}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_sec" name="iv_sec" class="au-in has-code-btn" type="${t?"tel":"email"}" inputmode="${t?"tel":"email"}" autocomplete="${t?"tel":"email"}" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(J)}" aria-invalid="${h.iv_sec?"true":"false"}" />
                <button type="button" class="au-suffix au-getcode" data-act="iv-send-sec" ${N>0?"disabled":""}>
                  ${N>0?`${N} 秒后重发`:de?"重新获取":"获取验证码"}
                </button>
              </div>
              <p class="au-err" id="au-iv_sec-err" aria-live="polite">${c(h.iv_sec??"")}</p>
              <p class="au-hint" id="au-iv_sec-hint" role="status" aria-live="polite">${de?`验证码已发送至 ${c(de)}`:""}</p>
            </div>

            <div class="au-field ${h.iv_seccode?"bad":""}" data-f="iv_seccode">
              <div class="au-lab">
                <label for="au-iv_seccode">${i}</label>
                <span data-role="iv-novcode-wrap" ${de?"":"hidden"}>
                  <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-iv-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-iv-novcode-pop"><span>收不到验证码？</span></button>
                  <span id="au-iv-novcode-pop" class="ws-info-popover au-field-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
                    <span class="ws-info-text">${q}</span>
                  </span>
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_seccode" name="iv_seccode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(le)}" aria-invalid="${h.iv_seccode?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_seccode-err" aria-live="polite">${c(h.iv_seccode??"")}</p>
            </div>
          `})():"";return{title:`${m} · PACOM Station`,bodyHtml:`
        <h1 class="au-h1">${m}</h1>
        <p class="au-lead">${k}</p>
        <form class="au-compact-form au-reg-form" data-reg-form="invite" novalidate>
          <fieldset ${_e?"disabled":""}>
            ${T}

            <div class="au-field ${h.iv_name?"bad":""}" data-f="iv_name">
              <div class="au-lab"><label for="au-iv_name">姓名</label></div>
              <div class="au-ctl">
                <input id="au-iv_name" name="iv_name" class="au-in" type="text" autocomplete="name" value="${c(V)}" aria-invalid="${h.iv_name?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_name-err" aria-live="polite">${c(h.iv_name??"")}</p>
            </div>

            ${y}

            <div class="au-field ${h.iv_pwd?"bad":""}" data-f="iv_pwd">
              <div class="au-lab au-label-row">
                <span class="au-lab-group">
                  <label for="au-iv_pwd">设置密码</label>
                  ${Ta("au-iv-pwd-info","设置密码说明",ft)}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_pwd" name="iv_pwd" class="au-in has-suffix" type="${xe?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${c(pe)}" aria-invalid="${h.iv_pwd?"true":"false"}" />
                <button type="button" class="au-suffix au-eye" data-act="iv-toggle-eye" aria-controls="au-iv_pwd" aria-label="${xe?"隐藏密码":"显示密码"}">
                  ${xe?ha:fa}
                </button>
              </div>
              <p class="au-err" id="au-iv_pwd-err" aria-live="polite">${c(h.iv_pwd??"")}</p>
            </div>

            ${aa("au-iv_consent","iv_consent",ue,"iv_consent")}

            <div class="au-ferr" id="au-reg-ferr" role="alert" ${ee?"":"hidden"}>
              ${va}
              <span data-role="ferr-text">${c(ee)}</span>
            </div>

            <button type="submit" class="au-primary au-compact-primary" ${_e?"disabled":""}>
              ${_e?`<span class="au-spinner" aria-hidden="true"></span><span>${_?"正在开通…":"正在提交…"}</span>`:`<span>${C}</span>`}
            </button>
          </fieldset>
        </form>
      `}}function Ja(){te.bind(a),a.querySelector('[data-act="iv-back-ws"]')?.addEventListener("click",()=>{Ze(),s.onBackToWorkspace?s.onBackToWorkspace():s.onBackToLogin()}),a.querySelector('[data-act="iv-go-login"]')?.addEventListener("click",()=>{if(!z)return;const y=`#invite?token=${encodeURIComponent(z.token)}`,t=z.kind==="owner"?`登录后即可开通${z.organizationName}`:`登录后即可加入${z.organizationName}`;Ze(),s.onGoLoginForInvite?s.onGoLoginForInvite(z.targetValue,t,y):s.onBackToLogin()}),a.querySelector('[data-act="iv-switch-account"]')?.addEventListener("click",()=>{if(!z)return;const y=`#invite?token=${encodeURIComponent(z.token)}`;Ze(),s.onSwitchAccountForInvite?s.onSwitchAccountForInvite(y):s.onBackToLogin()}),a.querySelector('[data-act="iv-confirm-join"]')?.addEventListener("click",async()=>{if(!(_e||!z)){_e=!0,ee="",Ke();try{const y=await e.acceptInvitation({token:z.token});if(r)return;Ze(),s.onAuthenticated(y)}catch(y){if(r)return;_e=!1,ee=y instanceof Error?y.message:"暂时无法确认加入，请稍后再试。",Ke()}}});const b=a.querySelector('form[data-reg-form="invite"]');if(!b||!z)return;const _=a.querySelector("#au-iv_name"),m=a.querySelector("#au-iv_sec"),ne=a.querySelector("#au-iv_seccode"),g=a.querySelector("#au-iv_pwd"),k=a.querySelector("#au-iv_consent"),C=z.kind==="owner",j=C?"完成开通":"注册并加入",T=ya(z);_?.addEventListener("input",()=>{V=_.value,(h.iv_name||ee)&&(delete h.iv_name,ee="",ke("iv_name"),Fe())}),m?.addEventListener("input",()=>{if(J=m.value,de){de="";const y=a.querySelector("#au-iv_sec-hint");y&&(y.textContent="");const t=a.querySelector('[data-role="iv-novcode-wrap"]');t&&(t.hidden=!0),te.close(!1);const o=a.querySelector('[data-act="iv-send-sec"]');o&&N===0&&(o.textContent="获取验证码")}(h.iv_sec||ee)&&(delete h.iv_sec,ee="",ke("iv_sec"),Fe())}),ne?.addEventListener("input",()=>{le=ne.value.replace(/\D/g,"").slice(0,6),ne.value=le,(h.iv_seccode||ee)&&(delete h.iv_seccode,ee="",ke("iv_seccode"),Fe())}),g?.addEventListener("input",()=>{pe=g.value,(h.iv_pwd||ee)&&(delete h.iv_pwd,ee="",ke("iv_pwd"),Fe())}),k?.addEventListener("change",()=>{ue=k.checked,ue&&h.iv_consent&&(delete h.iv_consent,ke("iv_consent"))}),a.querySelector('[data-act="iv-send-sec"]')?.addEventListener("click",y=>{if(!T)return;const t=T==="phone"?oa(J):qa(J)?"":"请输入有效的电子邮箱";if(t){h.iv_sec=t,ke("iv_sec"),m?.focus({preventScroll:!0});return}if(!ue){D=()=>{ue=!0,k&&(k.checked=!0),delete h.iv_consent,ke("iv_consent"),Ca(T)},Me("consent_ask",y.currentTarget);return}Ca(T)}),a.querySelector('[data-act="iv-toggle-eye"]')?.addEventListener("click",y=>{xe=!xe;const t=y.currentTarget;if(g){const o=g.selectionStart,n=g.selectionEnd;g.type=xe?"text":"password",g.focus({preventScroll:!0}),o!==null&&n!==null&&g.setSelectionRange(o,n)}t.setAttribute("aria-label",xe?"隐藏密码":"显示密码"),t.innerHTML=xe?ha:fa}),b.addEventListener("submit",async y=>{if(y.preventDefault(),_e||!z)return;if(h={},ee="",V.trim()?ta(V.trim())>ma&&(h.iv_name=`姓名不超过 ${ma} 个字`):h.iv_name="请输入姓名",T){const n=T==="phone"?oa(J):qa(J)?"":"请输入有效的电子邮箱";n&&(h.iv_sec=n),/^\d{6}$/.test(le.trim())||(h.iv_seccode=T==="phone"?"请输入 6 位短信验证码":"请输入 6 位邮件验证码")}const t=vt(pe);t&&(h.iv_pwd=t),ue||(h.iv_consent="请阅读并同意隐私政策和使用条款");const o=T?["iv_name","iv_sec","iv_seccode","iv_pwd","iv_consent"]:["iv_name","iv_pwd","iv_consent"];for(const n of o)ke(n);if(Fe(),Object.keys(h).length>0){const n=Object.keys(h)[0];a.querySelector(`#au-${n}`)?.focus({preventScroll:!0});return}_e=!0,Ve(C?"正在开通…":"正在提交…",j);try{const n=await e.acceptInvitation({token:z.token,displayName:V.trim(),password:pe,consentAcceptedAt:new Date().toISOString(),...T?{secondaryContact:Je(J),secondaryVerificationCode:le.trim()}:{}});Ze(),s.onAuthenticated(n)}catch(n){_e=!1,ee=n instanceof Error?n.message:"暂时无法完成激活，请稍后再试。",Ve(C?"正在开通…":"正在提交…",j),Fe()}})}function Ke(){P?.(),P=null,te.close(!1);let b="";if(M||K){const _=Za();document.title=_.title,b=_.bodyHtml}else if(G){const _=Ya();document.title=_.title,b=_.bodyHtml}else document.title="注册 · PACOM Station",b=`
        <h1 class="au-h1">注册</h1>
        <div class="au-mode-seg" role="tablist" aria-label="注册方式" data-role="reg-seg">
          <span class="au-mode-indicator" aria-hidden="true"></span>
          <button type="button" role="tab" aria-selected="${l==="join"}" tabindex="${l==="join"?"0":"-1"}" class="au-mode-tab" data-act="switch-reg-tab" data-tab="join">加入已有机构</button>
          <button type="button" role="tab" aria-selected="${l==="apply"}" tabindex="${l==="apply"?"0":"-1"}" class="au-mode-tab" data-act="switch-reg-tab" data-tab="apply">申请开通机构</button>
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
              <div class="au-logo">${zt}</div>
              ${b}
            </main>
          </div>
          ${Rt()}
        </section>
        <aside class="au-art" aria-hidden="true">
          <div class="au-art-frame">
            <img src="./media/auth-hero.jpg" alt="" />
          </div>
        </aside>
      </div>
      <div data-role="modal-host"></div>
    `,a.querySelectorAll('[data-act="back-login"]').forEach(_=>{_.addEventListener("click",()=>{Ze(),s.onBackToLogin()})}),a.querySelectorAll('[data-act="open-contact"]').forEach(_=>{_.addEventListener("click",m=>{E=!1,Me("contact",m.currentTarget)})}),a.querySelector('[data-act="ask-withdraw"]')?.addEventListener("click",_=>{!M||!e.withdrawJoinApplication||re||Me("withdraw_confirm",_.currentTarget)}),a.querySelectorAll('[data-act="copy-receipt"]').forEach(_=>{_.addEventListener("click",()=>{const m=_.dataset.copyVal??"";m&&(navigator.clipboard?.writeText&&navigator.clipboard.writeText(m).catch(()=>{}),_.classList.add("is-copied"),_.setAttribute("aria-label","已复制申请单号"),_.innerHTML=lt,Pe!==null&&window.clearTimeout(Pe),Pe=window.setTimeout(()=>{Pe=null,_.classList.remove("is-copied"),_.setAttribute("aria-label","复制申请单号"),_.innerHTML=$a},1800))})}),!M&&!K&&!G?(a.querySelectorAll('[data-act="switch-reg-tab"]').forEach(_=>{_.addEventListener("click",()=>{const m=_.dataset.tab;m&&Ge(m,!1)}),_.addEventListener("keydown",m=>{const ne=na.indexOf(l);m.key==="ArrowRight"?(m.preventDefault(),Ge(na[(ne+1)%na.length],!0)):m.key==="ArrowLeft"?(m.preventDefault(),Ge(na[(ne-1+na.length)%na.length],!0)):m.key==="Home"?(m.preventDefault(),Ge(na[0],!0)):m.key==="End"&&(m.preventDefault(),Ge(na[na.length-1],!0))})}),La(),Ue(!1),document.fonts?.ready.then(()=>{r||Ue(!1)})):G&&!Y&&Ja(),P=Mt(a)}Ke(),G&&!M&&!K?(async()=>{try{const b=await e.getInvitationPreview(G);if(r)return;if(z=b,V=b.prefillName??"",Y=!1,Ke(),!oe&&b.status==="pending"&&!b.accountExists){const _=ya(b),m=V.trim()?_?"#au-iv_sec":"#au-iv_pwd":"#au-iv_name";a.querySelector(m)?.focus({preventScroll:!0})}}catch(b){if(r)return;Y=!1,B=b instanceof Error?b.message:"暂时无法读取邀请信息，请稍后再试。",Ke()}})():!M&&!K&&H.replace(/\D/g,"").length===9&&(qe(H),a.querySelector("#au-jn_name")?.focus({preventScroll:!0}))}function Na(a){const e=a.replace(/^#\/?/,"").split("?")[0]??"";return e==="login"||e==="register"||e==="join"||e==="apply"||e==="invite"}function Pa(a){const e=a.replace(/^#\/?/,""),[s="",r=""]=e.split("?"),l=new URLSearchParams(r);if(s==="invite")return{kind:"invite",inviteToken:l.get("token")??"member-demo"};if(s==="register"||s==="join"||s==="apply"){const p=l.get("tab");return{kind:"register",initialMode:s==="apply"||p==="apply"?"apply":"join",prefillCode:l.get("code")??void 0}}return{kind:"login"}}const hs=["org_admin","project_admin","operator","space_user"],Ba=[{key:"login",label:"登录页",pillLabel:"登录页",group:"auth",hash:"#login",sessionRole:null},{key:"reg-join",label:"注册 · 加入已有机构",pillLabel:"注册页",group:"auth",hash:"#register",sessionRole:null},{key:"reg-apply",label:"注册 · 申请开通机构",pillLabel:"申请开通",group:"auth",hash:"#apply",sessionRole:null},{key:"status-join",label:"状态页 · 加入申请已提交",pillLabel:"加入已提交",group:"auth",hash:"#register",sessionRole:null,joinReceipt:{requestId:"REQ-20261127-8421",organizationName:"广州国家实验室",maskedAccount:"138 •••• 8000",status:"pending_approval",submittedAt:"2026-11-27T09:30:00Z"}},{key:"status-apply",label:"状态页 · 开通申请已提交",pillLabel:"开通已提交",group:"auth",hash:"#apply",sessionRole:null,applyReceipt:{applicationId:"APP-20261127-3902",organizationName:"广州天环智能科技有限公司",region:"广东省 广州市",maskedEmail:"c•••@company.com",status:"pending_review",submittedAt:"2026-11-27T09:35:00Z"}},{key:"inv-member",label:"成员邀请 · 免补绑",pillLabel:"成员邀请",group:"invite",hash:"#invite?token=member-demo",sessionRole:null},{key:"inv-admin-email",label:"机构管理员 · 邮箱补手机",pillLabel:"管理员补手机",group:"invite",hash:"#invite?token=admin-email",sessionRole:null},{key:"inv-admin-phone",label:"机构管理员 · 手机补邮箱",pillLabel:"管理员补邮箱",group:"invite",hash:"#invite?token=admin-phone",sessionRole:null},{key:"inv-proj-email",label:"项目管理员 · 邮箱补手机",pillLabel:"项管补手机",group:"invite",hash:"#invite?token=project-admin-email",sessionRole:null},{key:"inv-owner",label:"审核通过 · 开通机构",pillLabel:"开通机构",group:"invite",hash:"#invite?token=owner-demo",sessionRole:null},{key:"inv-existing",label:"已有账户受邀 · 引导登录",pillLabel:"老用户分流",group:"invite",hash:"#invite?token=existing-demo",sessionRole:null},{key:"inv-signed-match",label:"已登录 · 本人确认加入",pillLabel:"确认加入",group:"invite",hash:"#invite?token=existing-demo",sessionRole:"operator"},{key:"inv-signed-mismatch",label:"已登录 · 账户不一致拦截",pillLabel:"错号拦截",group:"invite",hash:"#invite?token=member-demo",sessionRole:"org_admin"},{key:"inv-expired",label:"邀请已失效",pillLabel:"邀请已失效",group:"invite",hash:"#invite?token=expired",sessionRole:null}];async function ys(a){const e=new Zt;let s=await e.getSession(),r="login",l="",p="",E="",F=!1;document.querySelector("[data-demo-fab-root]")?.remove();const D=document.createElement("div");D.className="pacom-demo-fab-wrap",D.dataset.demoFabRoot="1",document.body.appendChild(D);function M(G,oe){const Y=G.trim();if(Y==="#login")return"login";if(Y==="#apply"||Y==="#register?tab=apply")return"reg-apply";if(Y.startsWith("#register")||Y.startsWith("#join"))return"reg-join";if(Y.startsWith("#invite")){const B=Pa(Y).inviteToken??"";return B==="expired"?"inv-expired":B.startsWith("owner")?"inv-owner":B==="admin-email"?"inv-admin-email":B==="admin-phone"?"inv-admin-phone":B==="project-admin-email"?"inv-proj-email":B==="existing-demo"?oe?"inv-signed-match":"inv-existing":oe?"inv-signed-mismatch":"inv-member"}return""}function K(){const G=Ba.find(V=>V.key===p),oe=r==="app"?s?Be[s.role]:"未登录":G?.pillLabel??(r==="login"?"登录页":r==="register"?"注册页":"邀请激活"),Y=Ba.filter(V=>V.group==="auth"),z=Ba.filter(V=>V.group==="invite"),B=V=>{const J=r!=="app"&&p===V.key;return`
        <button type="button" class="pacom-demo-role-btn" aria-pressed="${J}" data-demo-preset="${V.key}">
          <span>${V.label}</span>
          ${J?Se("check",14):"<span>→</span>"}
        </button>`};D.innerHTML=`
      ${F?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">独立演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">邀请码 482 916 305 · 任意 6 位验证码</span>
            <div class="pacom-demo-fab-roles">
              <span class="pacom-demo-fab-sec-title">工作区角色（4 级 RBAC）</span>
              ${hs.map(V=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${r==="app"&&s?.role===V}" data-demo-pick="${V}">
                    <span>${Be[V]}</span>
                    ${r==="app"&&s?.role===V?Se("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">认证与注册页</span>
              ${Y.map(B).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">定向邀请与异常态</span>
              ${z.map(B).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <a class="pacom-demo-link" href="./index.html">
                <span>前往纯生产入口（index.html）</span>
                <span>→</span>
              </a>
            </div>
          </div>`:""}
      <button type="button" class="pacom-demo-fab-pill" aria-expanded="${F}" data-demo-fab-toggle="1" title="切换演示角色或查看认证页面">
        <span class="pacom-demo-fab-dot" aria-hidden="true"></span>
        <span>演示</span>
        <span class="pacom-demo-fab-role">${oe}</span>
        ${Se(F?"chevron-down":"chevrons-up-down",12)}
      </button>
    `,D.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",V=>{V.stopPropagation(),F=!F,K()}),D.querySelectorAll("[data-demo-pick]").forEach(V=>{V.addEventListener("click",async()=>{const J=V.dataset.demoPick;J&&(F=!1,s=await e.switchDemoRole(J),await P(s))})}),D.querySelectorAll("[data-demo-preset]").forEach(V=>{V.addEventListener("click",async()=>{const J=V.dataset.demoPreset,le=Ba.find(de=>de.key===J);le&&(F=!1,E="",le.sessionRole&&(s=await e.switchDemoRole(le.sessionRole)),await re(le.hash,le.sessionRole===null,{presetKey:le.key,initialJoinReceipt:le.joinReceipt??null,initialApplyReceipt:le.applyReceipt??null}))})})}document.addEventListener("click",G=>{F&&(G.target?.closest("[data-demo-fab-root]")||(F=!1,K()))}),document.addEventListener("keydown",G=>{G.key==="Escape"&&F&&(F=!1,K())});async function re(G,oe,Y){vs(a),qt(a),Dt(a),oe&&s&&(await e.logout(),s=null);const z=Pa(G);if(r=z.kind,l=G,p=Y?.presetKey??M(G,!!s),window.location.hash!==G&&(window.location.hash=G),K(),z.kind==="register"||z.kind==="invite"){bs(a,e,{initialMode:z.initialMode,prefillCode:z.prefillCode,inviteToken:z.inviteToken,currentSession:z.kind==="invite"?s:null,initialJoinReceipt:Y?.initialJoinReceipt??null,initialApplyReceipt:Y?.initialApplyReceipt??null,onBackToLogin:()=>{E="",re("#login",!1)},onGoLoginForInvite:(B,V,J)=>{E=J,re("#login",!1,{prefillAccount:B,notice:V})},onSwitchAccountForInvite:B=>{E=B,re("#login",!0,{notice:"请使用受邀账户登录"})},onBackToWorkspace:()=>{s?P(s):re("#login",!1)},onAuthenticated:B=>{E="",P(B)}});return}fs(a,e,B=>{if(s=B,E){const V=E;E="",re(V,!1);return}P(B)},{prefillAccount:Y?.prefillAccount,notice:Y?.notice,onOpenRegister:()=>{E="",re("#register",!1)}})}async function P(G){qt(a),Dt(a),s=G,r="app",l="",p="",K(),(!window.location.hash||Na(window.location.hash))&&(window.location.hash="#home"),await gs(a,e,G,()=>{E="",re("#login",!0)})}if(window.addEventListener("hashchange",()=>{if(Na(window.location.hash)){if(window.location.hash===l)return;const G=Pa(window.location.hash);(r!==G.kind||window.location.hash!==l)&&re(window.location.hash,r==="app"&&G.kind!=="invite")}}),!s||Na(window.location.hash)){const G=Na(window.location.hash)?window.location.hash:"#login",oe=Pa(G);await re(G,!!(s&&oe.kind!=="invite"));return}await P(s)}async function $s(){const a=document.getElementById("app");if(a)try{await ys(a)}catch(e){a.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(e)}</div></div>`}}$s();
