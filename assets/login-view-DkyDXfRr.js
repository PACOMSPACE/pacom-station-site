import{a as xe}from"./contracts-BgYMWe4E.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&t(m)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const r={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"};function Qe(){const o="2026-11-25T09:00:00Z",e=[];for(let i=1;i<=22;i+=1){const m=i===7?r.floorId:i===8?r.lockedFloor8Id:i===6?r.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${i}`,w=String(i).padStart(2,"0");e.push({id:m,buildingId:r.buildingId,kind:"above",level:i,name:`${i}F`,areaSqm:i===7?1383.1:i===1?2680:i<=4?1920:1480,plan:{floorId:m,imageUrl:`./media/floors/e/${w}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:o}})}const a="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";e.push({id:a,buildingId:r.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:a,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:o}});const t=[];for(let i=1;i<=12;i+=1){const m=`structure-f-above-${i}`,w=String(i).padStart(2,"0");t.push({id:m,buildingId:r.buildingFId,kind:"above",level:i,name:`${i}F`,areaSqm:i===1?2450:i<=3?2100:1580,plan:{floorId:m,imageUrl:`./media/floors/f/${w}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:o}})}const s="structure-f-roof-1";return t.push({id:s,buildingId:r.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:s,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:o}}),{projects:[{id:r.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:o},imageUrl:"./media/gzlab.jpg"},{id:r.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:o},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:r.buildingId,projectId:r.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:r.buildingFId,projectId:r.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...e,...t],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:r.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:r.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:r.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:r.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:a,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:s,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const qe=Qe(),Ce=qe.floors.map(o=>o.id),de={org_admin:{userId:"demo-org-admin",displayName:"林致远",role:"org_admin",roleLabel:xe.org_admin,authMode:"demo",scope:{allowedProjectIds:[r.projectId,r.project1Id],allowedBuildingIds:[r.buildingId,r.buildingFId],allowedFloorIds:[...Ce],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",role:"project_admin",roleLabel:xe.project_admin,authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId,r.buildingFId],allowedFloorIds:[...Ce],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",role:"operator",roleLabel:xe.operator,authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",role:"space_user",roleLabel:xe.space_user,authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},Ie="pacom.web.demo.role",De="pacom.web.demo.spatial.v5",Me="pacom.web.demo.orgs.v1",Te="pacom.web.demo.activeOrg.v1",pe="org-gzlab";class $t{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;constructor(){this.orgs=this.loadOrgs();const e=typeof localStorage<"u"?localStorage.getItem(Te):null,a=this.orgs.find(i=>i.id===e)??this.orgs[0];this.activeOrgId=a.id,this.spatial=a.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const t=typeof sessionStorage<"u"?sessionStorage.getItem(Ie):null;t&&de[t]&&(this.activeSession=structuredClone(de[t]),this.applyOverridesToSession());const s=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:r.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:s,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:r.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:s,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:s,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:s,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:r.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:s,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:s,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:s,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:s,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:s},{id:"conn-e7f-dali",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:s},{id:"conn-e7f-modbus",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:r.projectId,floorId:r.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:r.projectId,floorId:r.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:r.projectId,floorId:r.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:r.projectId,floorId:r.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:r.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:r.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:r.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:s,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:r.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:r.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:r.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:r.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(de).map((i,m)=>({userId:i.userId,displayName:i.displayName,email:`${i.role.replaceAll("_",".")}@gzlab.ac.cn`,role:i.role,roleLabel:i.roleLabel,scopeSummary:i.scope.allowedZoneIds?.length?`E栋 7F（${i.scope.allowedZoneIds.length} 个授权功能区）`:`${i.scope.allowedProjectIds.length} 项目 / ${i.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:m===0?s:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const e=Date.now();for(const a of this.overrides)a.status==="active"&&new Date(a.expiresAt).getTime()<=e&&(a.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const e=de[this.activeSession.role].scope,a=this.overrides.filter(t=>t.targetUserId===this.activeSession.userId&&t.status==="active");this.activeSession.scope.activeOverrides=structuredClone(a),this.activeSession.scope.canEditDeployment=e.canEditDeployment||a.some(t=>t.module==="deployment"),this.activeSession.scope.canEditSettings=e.canEditSettings||a.some(t=>t.module==="settings")}record(e,a,t,s,i){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:a,endpoint:t,request:i,response:s}),this.traces.length>40&&this.traces.pop()}pushAudit(e,a,t,s){const i=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:i?.displayName??"anonymous",role:i?.role??"space_user",action:e,target:a,result:t,detail:s})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const a=e.account.toLowerCase(),t=a.includes("org")||a.includes("admin")?"org_admin":a.includes("proj")?"project_admin":a.includes("space")||a.includes("member")?"space_user":"operator";return this.activeSession=structuredClone(de[t]),this.applyOverridesToSession(),sessionStorage.setItem(Ie,t),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(Ie),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(de[e]),this.applyOverridesToSession(),sessionStorage.setItem(Ie,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(De);if(e){const a=JSON.parse(e);if(Array.isArray(a?.projects)&&Array.isArray(a?.buildings)&&Array.isArray(a?.floors)&&Array.isArray(a?.zones))return a}}}catch{}return structuredClone(qe)}loadOrgs(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(Me);if(e){const a=JSON.parse(e);if(Array.isArray(a)&&a.length>0&&a.every(t=>t?.id&&t?.name&&Array.isArray(t?.spatial?.projects)))return a}}}catch{}return[{id:pe,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const e=this.orgs.find(a=>a.id===this.activeOrgId);e&&(e.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(Me,JSON.stringify(this.orgs)),localStorage.setItem(Te,this.activeOrgId),this.activeOrgId===pe&&localStorage.setItem(De,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(e=>({id:e.id,name:e.name,projectCount:e.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}async switchOrganization(e){const a=this.orgs.find(t=>t.id===e);if(!a)throw new Error(`404 NOT_FOUND: 机构 ${e} 不存在`);this.activeOrgId=a.id,this.spatial=a.spatial,this.persistSpatial()}async createOrganization(e){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const t=e.trim()||"新建机构",s={id:`org-${Date.now().toString(36)}`,name:t,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(s),this.activeOrgId=s.id,this.spatial=s.spatial,this.persistSpatial(),this.pushAudit("org.create",s.id,"success",t),{id:s.id,name:s.name,projectCount:0}}syncAdminScopesFromSpatial(){const e=this.spatial.projects.map(s=>s.id),a=this.spatial.buildings.map(s=>s.id),t=this.spatial.floors.map(s=>s.id);this.activeOrgId===pe&&(de.org_admin.scope.allowedProjectIds=[...e],de.org_admin.scope.allowedBuildingIds=[...a],de.org_admin.scope.allowedFloorIds=[...t],de.project_admin.scope.allowedBuildingIds=[...a],de.project_admin.scope.allowedFloorIds=[...t]),this.activeSession&&((this.activeOrgId!==pe||this.activeSession.role==="org_admin")&&(this.activeSession.scope.allowedProjectIds=[...e]),(this.activeOrgId!==pe||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin")&&(this.activeSession.scope.allowedBuildingIds=[...a],this.activeSession.scope.allowedFloorIds=[...t]))}async getSpatialTree(){const e=this.requireSession();if(this.activeOrgId!==pe){const A=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:A.projects.length,buildings:A.buildings.length,floors:A.floors.length}),A}const a=this.spatial.projects.filter(A=>e.scope.allowedProjectIds.includes(A.id)),t=this.spatial.buildings.filter(A=>e.scope.allowedBuildingIds.includes(A.id)),s=new Set(t.map(A=>A.id)),i=this.spatial.floors.filter(A=>s.has(A.buildingId)),m=new Set(i.map(A=>A.id)),w=this.spatial.zones.filter(A=>m.has(A.floorId)),j=structuredClone({projects:a,buildings:t,floors:i,zones:w});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:j.projects.length,buildings:j.buildings.length,floors:j.floors.length}),j}async createProject(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建项目`);const t={id:`project-${Date.now().toString(36)}`,name:e.name.trim()||"新建项目",city:e.city?.trim()||"广州市",address:e.address?.trim()||"",timezone:"Asia/Shanghai",location:e.location,imageUrl:e.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(t),a.scope.allowedProjectIds.includes(t.id)||a.scope.allowedProjectIds.push(t.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",t,e),this.pushAudit("project.create",t.id,"success",t.name),structuredClone(t)}async updateProject(e,a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权修改项目配置`);const s=this.spatial.projects.find(i=>i.id===e);if(!s)throw new Error(`404 NOT_FOUND: 项目 ${e} 不存在`);return a.name!==void 0&&(s.name=a.name.trim()||s.name),a.city!==void 0&&(s.city=a.city.trim()),a.address!==void 0&&(s.address=a.address.trim()),a.location!==void 0&&(s.location=a.location),a.imageUrl!==void 0&&(s.imageUrl=a.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${e}`,s,a),this.pushAudit("project.update",e,"success",s.name),structuredClone(s)}async deleteProject(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除项目`);if(e===r.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const t=new Set(this.spatial.buildings.filter(i=>i.projectId===e).map(i=>i.id)),s=new Set(this.spatial.floors.filter(i=>t.has(i.buildingId)).map(i=>i.id));this.spatial.projects=this.spatial.projects.filter(i=>i.id!==e),this.spatial.buildings=this.spatial.buildings.filter(i=>i.projectId!==e),this.spatial.floors=this.spatial.floors.filter(i=>!t.has(i.buildingId)),this.spatial.zones=this.spatial.zones.filter(i=>!s.has(i.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${e}`,{ok:!0}),this.pushAudit("project.delete",e,"success")}async upsertBuilding(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护楼宇`);let t=e.id?this.spatial.buildings.find(s=>s.id===e.id):void 0;return t?(t.name=e.name.trim()||t.name,t.aboveFloors=Math.max(0,e.aboveFloors),t.belowFloors=Math.max(0,e.belowFloors),t.hasRoof=e.hasRoof,e.areaSqm!==void 0&&(t.areaSqm=e.areaSqm),e.imageUrl!==void 0&&(t.imageUrl=e.imageUrl)):(t={id:`building-${Date.now().toString(36)}`,projectId:e.projectId,name:e.name.trim()||"新建楼宇",aboveFloors:Math.max(1,e.aboveFloors),belowFloors:Math.max(0,e.belowFloors),hasRoof:e.hasRoof,areaSqm:e.areaSqm??null,imageUrl:e.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(t)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",t,e),this.pushAudit("building.upsert",t.id,"success",t.name),structuredClone(t)}async deleteBuilding(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除楼宇`);if(e===r.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const t=new Set(this.spatial.floors.filter(s=>s.buildingId===e).map(s=>s.id));this.spatial.buildings=this.spatial.buildings.filter(s=>s.id!==e),this.spatial.floors=this.spatial.floors.filter(s=>s.buildingId!==e),this.spatial.zones=this.spatial.zones.filter(s=>!t.has(s.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${e}`,{ok:!0}),this.pushAudit("building.delete",e,"success")}async upsertFloor(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护楼层`);const t=new Date().toISOString();let s=e.id?this.spatial.floors.find(i=>i.id===e.id):void 0;if(s)s.name=e.name.trim()||s.name,s.kind=e.kind,s.level=e.level,e.areaSqm!==void 0&&(s.areaSqm=e.areaSqm),e.planImageUrl!==void 0&&(s.plan=e.planImageUrl?{floorId:s.id,imageUrl:e.planImageUrl,planVersion:(s.plan?.planVersion??0)+1,updatedAt:t}:null);else{const i=`floor-${e.buildingId.slice(-6)}-${e.kind}-${Math.abs(e.level)}-${Date.now().toString(36).slice(-3)}`;s={id:i,buildingId:e.buildingId,kind:e.kind,level:e.level,name:e.name.trim()||`${e.level}F`,areaSqm:e.areaSqm??null,plan:e.planImageUrl?{floorId:i,imageUrl:e.planImageUrl,planVersion:1,updatedAt:t}:null},this.spatial.floors.push(s),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(s.id)&&this.activeSession.scope.allowedFloorIds.push(s.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:s.id,name:s.name,hasPlan:!!s.plan}),this.pushAudit("floor.upsert",s.id,"success",s.name),structuredClone(s)}async deleteFloor(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除楼层`);if(e===r.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(t=>t.id!==e),this.spatial.zones=this.spatial.zones.filter(t=>t.floorId!==e),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${e}`,{ok:!0}),this.pushAudit("floor.delete",e,"success")}async upsertZone(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护功能区`);let t=e.id?this.spatial.zones.find(s=>s.id===e.id):void 0;return t?(t.name=e.name.trim()||t.name,t.category=e.category):(t={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:e.floorId,name:e.name.trim(),category:e.category},this.spatial.zones.push(t)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",t),this.pushAudit("zone.upsert",t.id,"success",t.name),structuredClone(t)}async deleteZone(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(t=>t.id!==e),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${e}`,{ok:!0}),this.pushAudit("zone.delete",e,"success")}async copyZonesToFloors(e,a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权复制功能区`);const s=this.spatial.floors.find(w=>w.id===e),i=this.spatial.zones.filter(w=>w.floorId===e);if(!s||i.length===0)return 0;let m=0;for(const w of a){if(w===e)continue;const j=this.spatial.floors.find(I=>I.id===w);if(!j)continue;const A=new Set(this.spatial.zones.filter(I=>I.floorId===w).map(I=>I.name));for(const I of i){const N=I.name.replace(new RegExp(`^${s.name}\\s*`,"i"),""),T=`${j.name} ${N}`.trim();A.has(T)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:w,name:T,category:I.category}),A.add(T),m+=1)}}return m>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:e,targetCount:a.length,added:m}),m}async getFloorDevices(e){const a=this.requireSession();if(this.activeOrgId!==pe)return[];if(!a.scope.allowedFloorIds.includes(e)){const s={code:"FORBIDDEN",status:403,message:`当前角色「${a.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,s),this.pushAudit("floor.read",e,"denied",s.message),new Error(`403 FORBIDDEN: ${s.message}`)}if(e!==r.floorId)return[];let t=structuredClone(this.devices);return a.scope.allowedZoneIds?.length&&(t=t.filter(s=>s.logicalZoneId&&a.scope.allowedZoneIds.includes(s.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:t.length}),t}async dispatchControlBatch(e){const a=this.requireSession();if(!a.scope.canControlDevices||!a.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权下发控制指令`);const t=`batch-e7f-${Date.now().toString(36)}`,s={batchId:t,floorId:e.floorId,createdBy:a.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(i=>({deviceId:i.deviceId,command:i.command,targetValue:i.targetValue,status:"queued"}))};return this.batches.set(t,s),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",s,e),this.pushAudit("control.dispatch",t,"success",`下发 ${e.targets.length} 台设备`),s.receipts.forEach((i,m)=>{const w=this.devices.find(j=>j.id===i.deviceId);setTimeout(()=>{i.status="dispatched",i.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:t,deviceId:i.deviceId,status:"dispatched",at:i.dispatchedAt})},280+m*120),setTimeout(()=>{const j=new Date().toISOString();!w||w.connectivity==="offline"?(i.status="timeout",i.errorCode="GATEWAY_READBACK_TIMEOUT",i.errorMessage="设备离线，网关未收到回读确认",i.verifiedAt=j):(i.status="verified_success",i.observedValue=i.targetValue,i.verifiedAt=j,this.applyObservedTelemetry(w,i.command,i.targetValue,j)),this.emit({type:"control.receipt.updated",batchId:t,deviceId:i.deviceId,status:i.status,observedValue:i.observedValue,at:j})},900+m*220)}),structuredClone(s)}applyObservedTelemetry(e,a,t,s){a==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:t,collectedAt:s,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(t)>0,collectedAt:s,stale:!1})):(a==="lighting.power"||a==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:t,collectedAt:s,stale:!1}:a==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:t,collectedAt:s,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:s,values:{[a]:t}})}async getControlBatch(e){this.requireSession();const a=this.batches.get(e);if(!a)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(a)}async listAlarms(e){const a=this.requireSession();return this.activeOrgId!==pe?[]:!a.scope.allowedFloorIds.includes(e)||e!==r.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,a){const t=this.requireSession();if(!t.scope.canManageAlarms){const i=`角色「${t.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",i),new Error(`403 FORBIDDEN: ${i}`)}const s=this.alarms.find(i=>i.id===e);if(!s)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return s.status="acknowledged",s.acknowledgedAt=new Date().toISOString(),s.acknowledgedBy=t.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,s,{note:a}),this.pushAudit("alarm.acknowledge",e,"success",a),this.emit({type:"alarm.changed",floorId:s.floorId,alarmId:e,status:"acknowledged",at:s.acknowledgedAt}),structuredClone(s)}async listWorkOrders(e){const a=this.requireSession();return this.activeOrgId!==pe?[]:!a.scope.allowedFloorIds.includes(e)||e!==r.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建工单`);const t=new Date().toISOString(),s={id:`wo-e7f-${Date.now().toString(36)}`,projectId:r.projectId,buildingId:r.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:t,updatedAt:t};if(this.workOrders.unshift(s),e.alarmId){const i=this.alarms.find(m=>m.id===e.alarmId);i&&(i.workOrderId=s.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",s,e),this.pushAudit("work_order.create",s.id,"success",s.title),structuredClone(s)}async updateWorkOrderStatus(e,a){const t=this.requireSession();if(!t.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权流转工单`);const s=this.workOrders.find(i=>i.id===e);if(!s)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return s.status=a,s.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,s,{status:a}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${a}`),structuredClone(s)}async updateDevicePlanPoint(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑图纸标点`);const t=this.devices.find(s=>s.id===e.deviceId);if(!t)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(t.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${t.version}，请刷新后重试`);return t.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},t.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,t,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${t.planPoint.x}, ${t.planPoint.y})`),structuredClone(t)}async updateDeviceHardwareBinding(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改硬件绑定`);const t=this.devices.find(i=>i.id===e.deviceId);if(!t)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(t.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${t.version}）`);const s=new Date().toISOString();return t.physicalInstalled=e.physicalInstalled,t.physicalVerifiedAt=e.physicalInstalled?s:null,t.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:s,boundBy:a.displayName},t.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,t,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(t)}async listConnections(e){return this.requireSession(),this.activeOrgId!==pe?[]:structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),this.activeOrgId!==pe?[]:structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权冻结交付批次`);const s=this.devices.filter(m=>m.physicalInstalled&&m.hardwareBinding).length,i={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:r.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:s,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:t.displayName,note:a||"例行交付基线冻结"};return this.deliveryBatches.unshift(i),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,i,{note:a}),this.pushAudit("delivery.freeze",i.id,"success",`${s}/${this.devices.length} 已现场核验`),structuredClone(i)}async getAnalysisReport(e,a,t){this.requireSession();const s=a==="today"?1:a==="7d"?7:30,m={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*s)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*s).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(A=>A.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*s).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*s).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*s).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],w=a==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],j={category:e,range:a,scopeId:t,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:m.kpis,unit:m.unit,series:m.base.map((A,I)=>({label:w[I],value:Math.round(A*(e==="energy"||e==="carbon"?s/2+.5:1)),baseline:Math.round(A*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:m.base[3],unit:m.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:m.base[4],unit:m.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:m.base[1],unit:m.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${a}&scopeId=${t}`,{kpis:j.kpis.length}),j}async listScenes(e){return this.requireSession(),this.activeOrgId!==pe?[]:structuredClone(this.scenes)}async createScene(e){const a=this.requireSession();if(!a.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建场景`);const t={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(t),this.record("REST","createScene","POST /api/v1/scenes",t,e),this.pushAudit("scene.create",t.id,"success",t.name),structuredClone(t)}async executeScene(e){const a=this.scenes.find(s=>s.id===e);if(!a)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const t=await this.dispatchControlBatch({floorId:a.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:a.actions,reason:`触发场景：${a.name}`});return a.lastExecutedAt=new Date().toISOString(),a.lastBatchId=t.batchId,t}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:r.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,a,t){this.requireSession();const s=t>=this.calendar.nightGuardStart?`下班时间 ${t} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,i=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${a} - ${t}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${a} (-30m) ~ ${t} (+30m)`,conflictWarning:s},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:s}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",i,{workdayStart:a,workdayEnd:t}),i}async saveWorkCalendar(e,a,t,s){const i=this.requireSession();if(!i.scope.canEditSettings)throw this.pushAudit("settings.calendar",r.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权修改应用设置`);if(this.calendar.version!==s)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(a>=t)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:a,workdayEnd:t,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:a,workdayEnd:t,expectedVersion:s}),this.pushAudit("settings.calendar",r.projectId,"success",`${a}-${t}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,a,t){const s=this.requireSession();if(!s.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",e,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权启停应用设置规则`);const i=this.rules.find(m=>m.id===e);if(!i)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(i.version!==t)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${i.version}）`);return i.enabled=a,i.version+=1,i.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,i,{enabled:a,expectedVersion:t}),this.pushAudit("settings.rule_toggle",e,"success",a?"启用":"停用"),structuredClone(i)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,a){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",e,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const s=de[a],i={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:a,roleLabel:s.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(i),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",i,{email:e,role:a}),this.pushAudit("org.invite",e,"success",s.roleLabel),structuredClone(i)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const e=this.requireSession();return this.reconcileOverrides(),e.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(a=>a.targetUserId===e.userId))}async grantOverride(e){const a=this.requireSession();if(!a.scope.canGrantOverride)throw this.pushAudit("override.grant",e.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const t=e.reason.trim();if(!t)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(e.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const s=this.members.find(w=>w.userId===e.targetUserId);if(!s)throw new Error(`404 NOT_FOUND: 目标成员 ${e.targetUserId} 不存在`);if(s.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const i=Date.now(),m={id:`ovr-${i.toString(36)}`,targetUserId:s.userId,targetUserName:s.displayName,module:e.module,durationHours:e.durationHours,grantedAt:new Date(i).toISOString(),expiresAt:new Date(i+e.durationHours*36e5).toISOString(),approvedBy:a.displayName,reason:t,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(m),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",m,e),this.pushAudit("override.grant",`${s.displayName} · ${e.module==="deployment"?"系统部署":"应用设置"}`,"success",`${e.durationHours}h · ${t}`),structuredClone(m)}async revokeOverride(e){const a=this.requireSession();if(!a.scope.canGrantOverride)throw this.pushAudit("override.revoke",e,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const t=this.overrides.find(s=>s.id===e);if(!t)throw new Error(`404 NOT_FOUND: 提权记录 ${e} 不存在`);return t.status="revoked",t.revokedAt=new Date().toISOString(),t.revokedBy=a.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${e}/revoke`,t),this.pushAudit("override.revoke",`${t.targetUserName} · ${t.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(t)}subscribeFloorEvents(e,a){return e!==r.floorId?()=>{}:(this.listeners.add(a),()=>{this.listeners.delete(a)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${r.floorId}`,e),this.listeners.forEach(a=>a(e))}}const Xe={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"layout-dashboard":'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',waypoints:'<circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',"key-round":'<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',"file-text":'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'};function Je(o){return o>=20?"1.5":o>=16?"1.75":o>=14?"2":"2.25"}function V(o,e=16,a=""){const t=Je(e);return`<svg${a?` class="${a}"`:""} width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${t}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${Xe[o]}</svg>`}let je={level:"floor",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId};function Ve(){return je}function Le(o){return je=o,je}function ee(o){return String(o??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ze(o){const e=o.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面"))return 999;const a=e.match(/(-?\d+)/);if(!a)return 0;const t=Number(a[1]);return e.startsWith("B")?-Math.abs(t):t}function et(o){if(o==="all")return{level:"all-projects"};const e=o.split(":");return e[0]==="project"&&e[1]?{level:"project",projectId:e[1]}:e[0]==="building"&&e[1]&&e[2]?{level:"building",projectId:e[1],buildingId:e[2]}:e[0]==="floor"&&e[1]&&e[2]&&e[3]?{level:"floor",projectId:e[1],buildingId:e[2],floorId:e[3]}:{level:"project",projectId:r.projectId}}function tt(o,e,a){return a==="project"?o.level==="all-projects"?{level:"project",projectId:e.projects[0]?.id??r.projectId}:{level:"project",projectId:o.projectId}:a==="building"&&o.level==="floor"?{level:"building",projectId:o.projectId,buildingId:o.buildingId}:o}function Fe(o){const{tree:e,session:a,isOpen:t,searchKeyword:s}=o;if(e.projects.length===0)return'<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap"><span class="pacom-path-trigger is-static"><span class="pacom-path-muted">暂无项目</span></span></div>';const i=o.maxGranularity??"floor",m=o.activeAlarmCount??0,w=a.scope.allowedZoneIds?.length?a.scope.allowedZoneIds:null,j=e.floors.filter(y=>a.scope.allowedFloorIds.includes(y.id)),A=w||e.projects.length<=1&&e.buildings.length<=1&&j.length<=1?"floors-only":e.projects.length>1?"multi-project":e.buildings.length>1?"single-project-multi-building":"single-building",I=A==="multi-project"&&i!=="project",N=A==="multi-project"||A==="single-project-multi-building",T=A!=="floors-only"&&i!=="project",S=i==="project"&&e.projects.length<=1||A==="floors-only"&&j.length<=1,f=tt(o.scope??je,e,i),E=f.level==="all-projects"?null:e.projects.find(y=>y.id===f.projectId)??e.projects[0],C=f.level==="building"||f.level==="floor"?e.buildings.find(y=>y.id===f.buildingId):null,W=f.level==="floor"?e.floors.find(y=>y.id===f.floorId):null,q=[];if(f.level==="all-projects")q.push(`全部项目（${e.projects.length}）`);else if(f.level==="project")q.push(ee(E?.name??"广实2号园"));else if(f.level==="building")E&&q.push(`<span class="pacom-path-muted">${ee(E.name)}</span>`),q.push(ee(C?.name??"E栋"));else{E&&A!=="floors-only"&&q.push(`<span class="pacom-path-muted">${ee(E.name)}</span>`),C&&T&&q.push(`<span class="pacom-path-muted">${ee(C.name)}</span>`);const y=!T&&C?`${C.name} ${W?.name??"7F"}`:W?.name??"7F";q.push(ee(y))}const H='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',U=S?`<span class="pacom-path-trigger is-static">${q.join(H)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${t}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${q.join(H)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${V("chevron-down",12)}</span>
      </button>`;if(!t||S)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${U}</div>`;const Q=s.trim().toLowerCase(),te=f.level==="all-projects"?e.projects[0]?.id??r.projectId:f.projectId,ne=f.level==="building"||f.level==="floor"?f.buildingId:e.buildings.find(y=>y.projectId===te)?.id??r.buildingId,B=e.projects.filter(y=>!Q||y.name.toLowerCase().includes(Q)),D=e.buildings.filter(y=>y.projectId===te&&(!Q||y.name.toLowerCase().includes(Q))),M=[...e.floors.filter(y=>y.buildingId===ne)].sort((y,$)=>ze($.name)-ze(y.name)).filter(y=>!Q||y.name.toLowerCase().includes(Q)),Z=i==="project"||e.projects.length>1,O=i!=="project"&&N,X=i==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${U}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${V("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${ee(s)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${V("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${Z?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${I?`<button type="button" class="pacom-space-pop-item ${f.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${e.projects.length}）</span>
                        ${f.level==="all-projects"?V("check",14):""}
                      </button>`:""}
                ${B.map(y=>{const $=f.level==="project"&&f.projectId===y.id;return`<button type="button" class="pacom-space-pop-item ${$?"is-active":""}" data-global-space-pick="project:${ee(y.id)}">
                      <span>${ee(y.name)}</span>
                      ${$?V("check",14):V("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${O?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${ee(e.projects.find(y=>y.id===te)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${f.level==="project"?"is-active":""}" data-global-space-pick="project:${ee(te)}">
                  <span>全园区</span>
                  ${f.level==="project"?V("check",14):""}
                </button>
                ${D.map(y=>{const $=f.level==="building"&&f.buildingId===y.id;return`<button type="button" class="pacom-space-pop-item ${$?"is-active":""}" data-global-space-pick="building:${ee(y.projectId)}:${ee(y.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${ee(y.name)}</span>
                        ${y.id===r.buildingId&&m>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${$?V("check",14):V("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${X?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${ee(e.buildings.find(y=>y.id===ne)?.name??"楼宇")} · 楼层</div>
                ${T?`<button type="button" class="pacom-space-pop-item ${f.level==="building"&&f.buildingId===ne?"is-active":""}" data-global-space-pick="building:${ee(te)}:${ee(ne)}">
                        <span>整栋</span>
                        ${f.level==="building"&&f.buildingId===ne?V("check",14):""}
                      </button>`:""}
                ${M.map(y=>{const $=a.scope.allowedFloorIds.includes(y.id),L=f.level==="floor"&&f.floorId===y.id,z=y.id===r.floorId&&m>0;return`<button type="button" class="pacom-space-pop-item ${L?"is-active":""}" style="${$?"":"opacity:0.5;"}" data-global-space-pick="floor:${ee(te)}:${ee(ne)}:${ee(y.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${ee(y.name)}</span>
                        ${z?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${L?V("check",14):$?y.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function Ue(o,e){o.querySelectorAll("[data-global-space-toggle]").forEach(t=>{t.addEventListener("click",s=>{s.stopPropagation(),e.onToggle()})}),o.querySelector("[data-global-space-search]")?.addEventListener("input",t=>{e.onSearch(t.currentTarget.value)}),o.querySelectorAll("[data-global-space-pick]").forEach(t=>{t.addEventListener("click",s=>{s.stopPropagation();const i=t.dataset.globalSpacePick;if(!i)return;const m=Le(et(i));e.onPick(m)})})}const at=V("chevron-down",12),Se=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],Re=[{id:r.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:r.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:r.projectId,label:"广实2号园（全园区）",factor:18.2}],st={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},ot=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],ge=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function Oe(o,e=""){const a=(o??"").trim().toLowerCase();return!(!a||a.includes("%")||a.includes("°c")||a.includes("ppm")||a.includes("ms")||a.includes("m²")||a.includes("/m2")||a.includes("db")||a.includes("lx")||e.includes("率")||e.includes("均")||e.includes("强度")||e.includes("延迟"))}function Ee(o,e){const a=o*e;return Math.abs(a)>=10?Math.round(a):Math.round(a*10)/10}function it(o,e){const a=Number(String(o).replaceAll(",","")),t=e??"";return Number.isFinite(a)?t==="kWh"&&Math.abs(a)>=1e4?{value:(a/1e3).toFixed(1),unit:"MWh",title:`精确值：${a.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(a)?a.toLocaleString("en-US"):a.toLocaleString("en-US",{maximumFractionDigits:1}),unit:t,title:`${a.toLocaleString("en-US")} ${t}`.trim()}:{value:o,unit:t,title:`${o} ${t}`.trim()}}function nt(o,e){if(e===1)return o;const a=Oe(o.unit);return{...o,kpis:o.kpis.map(t=>{const s=Number(String(t.value).replaceAll(",",""));return!Number.isFinite(s)||!Oe(t.unit,t.label)?t:{...t,value:String(Ee(s,e))}}),series:a?o.series.map(t=>({...t,value:Ee(t.value,e),...typeof t.baseline=="number"?{baseline:Ee(t.baseline,e)}:{}})):o.series,zoneBreakdown:o.zoneBreakdown.map(t=>Oe(t.unit)?{...t,value:Ee(t.value,e)}:t)}}function lt(o,e){const a=Math.max(...o.series.map(T=>Math.max(T.value,T.baseline??0)),1),t=46,s=34,i=36,m=Math.max(o.series.length*(t+s)+i*2,620),w=228,j=184,A=132,I=[0,.25,.5,.75,1].map(T=>{const S=Math.round(j-T*A);return`<line x1="${i-8}" y1="${S}" x2="${m-18}" y2="${S}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${T===0?"0":"3 3"}" />`}).join(""),N=o.series.map((T,S)=>{const f=i+S*(t+s),E=Math.max(8,Math.round(T.value/a*A)),C=j-E,W=typeof T.baseline=="number"&&T.value>T.baseline*1.08,q=W?`<rect x="${f-8}" y="34" width="${t+16}" height="${j-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",H=typeof T.baseline=="number"?`<line x1="${f-5}" y1="${Math.round(j-T.baseline/a*A)}" x2="${f+t+5}" y2="${Math.round(j-T.baseline/a*A)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",U=e&&(W||S===1)?`<g><title>${W?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${f+t/2}" cy="18" r="7" fill="${W?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${f+t/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${W?"!":"S"}</text></g>`:"",Q=T.value>=1e4?`${(T.value/1e3).toFixed(1)}k`:T.value.toLocaleString("en-US");return`
        ${q}
        ${H}
        ${U}
        <g>
          <title>${T.label}：实测 ${T.value.toLocaleString("en-US")} ${o.unit}${T.baseline!==void 0?` / 基线 ${T.baseline.toLocaleString("en-US")} ${o.unit}`:""}</title>
          <rect x="${f}" y="${C}" width="${t}" height="${E}" rx="7" fill="${W?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${f+t/2}" y="${C-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${Q}</text>
        <text x="${f+t/2}" y="${j+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${T.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${m} ${w}" style="width:100%; height:232px; display:block;" role="img" aria-label="${o.category} 趋势图">
      ${I}
      ${N}
    </svg>
  `}function rt(o,e){const a=o.connectivity==="offline";if(o.category==="hvac"){const t=Number(o.telemetry.setpoint?.value??24);return[{id:`${o.id}:temp`,deviceId:o.id,deviceName:o.name,pointKey:"temp",label:"室内温度",unit:"°C",points:a?[23.8,24,24.1,null,null,null,null,null]:[t+.8,t+.6,t+.3,t,t-.2,t+.1,t+.2,t],offline:a,colorIdx:e},{id:`${o.id}:setpoint`,deviceId:o.id,deviceName:o.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:a?[24,24,24,null,null,null,null,null]:[t,t,t,t,t,t,t,t],offline:a,colorIdx:e+1},{id:`${o.id}:valve`,deviceId:o.id,deviceName:o.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:a?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:a,colorIdx:e+2}]}if(o.category==="lighting"){const t=Number(o.telemetry.dimming?.value??60);return[{id:`${o.id}:dimming`,deviceId:o.id,deviceName:o.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(t*.8),t,t,Math.round(t*.6),t,Math.round(t*.9)],offline:a,colorIdx:e},{id:`${o.id}:power`,deviceId:o.id,deviceName:o.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:a,colorIdx:e+1}]}if(o.category==="sensor"){const t=Number(o.telemetry.temp?.value??23.4);return[{id:`${o.id}:temp`,deviceId:o.id,deviceName:o.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[t-.5,t-.3,t,t+.3,t+.5,t+.2,t+.1,t],offline:a,colorIdx:e},{id:`${o.id}:co2`,deviceId:o.id,deviceName:o.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:a,colorIdx:e+1},{id:`${o.id}:humidity`,deviceId:o.id,deviceName:o.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:a,colorIdx:e+2}]}return[{id:`${o.id}:latency`,deviceId:o.id,deviceName:o.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:a,colorIdx:e}]}function ct(o){const e=o.points.filter(w=>typeof w=="number");if(!e.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const a=Math.min(...e),t=Math.max(...e),s=e.reduce((w,j)=>w+j,0)/e.length,i=o.points[o.points.length-1],m=w=>Math.abs(w)<100&&!Number.isInteger(w)?w.toFixed(1):Math.round(w).toString();return{min:m(a),avg:s.toFixed(Math.abs(s)<100?1:0),max:m(t),curr:typeof i=="number"?m(i):"离线"}}function dt(o,e,a){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!o.length)return'<div class="pacom-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const s=(m,w)=>{const C=[];for(const D of m)for(const M of D.points)typeof M=="number"&&C.push(M);const W=C.length?Math.min(...C)*.92:0,q=C.length?Math.max(...C)*1.08:100,H=Math.max(q-W,1),U=[0,.5,1].map(D=>{const M=Math.round(26+106*(1-D)),Z=(W+H*D).toFixed(H<15?1:0);return`
          <line x1="44" y1="${M}" x2="662" y2="${M}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${D===0?"0":"3 3"}" />
          <text x="38" y="${M+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${Z}</text>
        `}).join(""),Q=t.map((D,M)=>`<text x="${44+M/(t.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${D}</text>`).join(""),te=m.map((D,M)=>{const Z=ge[(D.colorIdx+M)%ge.length],O=D.points,X=[];let y=44,$=26+106/2,L=!1;O.forEach((G,ae)=>{const le=44+ae/(O.length-1)*618;if(typeof G=="number"){const _=26+106*(1-(G-W)/H);X.push(`${le.toFixed(1)},${_.toFixed(1)}`),y=le,$=_}else L=!0});const z=a?O.map((G,ae)=>{if(typeof G!="number")return null;const le=44+ae/(O.length-1)*618,F=26+106*(1-(G*.96-W)/H);return`${le.toFixed(1)},${F.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${z?`<polyline fill="none" stroke="${Z}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${z}" />`:""}
          ${X.length?`<polyline fill="none" stroke="${Z}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${X.join(" ")}" />`:""}
          ${L?`<line x1="${y.toFixed(1)}" y1="${$.toFixed(1)}" x2="662" y2="${$.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${$-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),ne=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,B=m.map((D,M)=>{const Z=ge[(D.colorIdx+M)%ge.length],O=ct(D);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${Z};"></span>${D.deviceName} · ${D.label}</span></td>
            <td><strong>${O.curr}</strong> <span class="pacom-row-sub">${D.unit}</span></td>
            <td>${O.min} <span class="pacom-row-sub">${D.unit}</span></td>
            <td>${O.avg} <span class="pacom-row-sub">${D.unit}</span></td>
            <td>${O.max} <span class="pacom-row-sub">${D.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${w}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${m.map((D,M)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${ge[(D.colorIdx+M)%ge.length]};"></span>${D.deviceName}·${D.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${U}
          ${Q}
          ${ne}
          ${te}
        </svg>
        <div class="pacom-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="pacom-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${B}</tbody>
          </table>
        </div>
      </div>
    `};if(e==="shared")return s(o,"单图叠合对比（Shared）");const i=new Map;for(const m of o){const w=i.get(m.unit)??[];w.push(m),i.set(m.unit,w)}return Array.from(i.entries()).map(([m,w])=>s(w,`按单位分组泳道（${m}）`)).join("")}function pt(o){const e=[["时段",`数值 (${o.unit})`,`基线 (${o.unit})`].join(","),...o.series.map(i=>[i.label,String(i.value),i.baseline!==void 0?String(i.baseline):""].join(","))],a=new Blob([`\uFEFF${e.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),t=URL.createObjectURL(a),s=document.createElement("a");s.href=t,s.download=`pacom-${o.category}-${o.range}.csv`,s.click(),URL.revokeObjectURL(t)}function ut(o){const e=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],a=["时间",...o.map(w=>`${w.deviceName}·${w.label}(${w.unit})`)].join(","),t=e.map((w,j)=>[w,...o.map(A=>String(A.points[j]??"No Data"))].join(",")),s=new Blob([`\uFEFF${[a,...t].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(s),m=document.createElement("a");m.href=i,m.download="pacom-timeseries-export.csv",m.click(),URL.revokeObjectURL(i)}async function xt(o,e,a){const t=new URLSearchParams(window.location.hash.split("?")[1]??""),s=t.get("tab"),i=t.get("cat"),m=t.get("device"),w=t.get("points"),j=t.get("mode"),A=t.get("interval");let I=s==="timeseries"?"timeseries":i&&Se.some(F=>F.id===i)?i:"energy",N="7d",T="2026-11-16",S="2026-11-23",f=Ve(),E=!1,C="",W=f.level==="all-projects"||f.level==="project"?r.projectId:f.level==="building"?r.buildingId:r.floorId,q="chart",H=!0,U="breakdown",Q=!1,te=null;const[ne,B]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(r.floorId).catch(()=>[])]);let D=B;const M=new Map,Z=[];D.forEach((F,K)=>{const se=rt(F,K);M.set(F.id,se),Z.push(...se)});let O=j==="shared"||j==="grouped"?j:"grouped",X=A==="15m"||A==="1h"||A==="1d"?A:"1h",y=!1;const $=[];if(w?w.split(",").forEach(F=>{Z.some(K=>K.id===F)&&$.push(F)}):m&&M.has(m)&&(M.get(m)??[]).slice(0,2).forEach(F=>$.push(F.id)),!$.length){const F=D.find(J=>J.category==="hvac"),K=D.find(J=>J.category==="sensor"),se=D.find(J=>J.category==="lighting");F&&(M.get(F.id)??[]).slice(0,2).forEach(J=>$.push(J.id)),K&&(M.get(K.id)??[]).slice(0,1).forEach(J=>$.push(J.id)),se&&(M.get(se.id)??[]).slice(0,1).forEach(J=>$.push(J.id)),$.length||Z.slice(0,3).forEach(J=>$.push(J.id))}const L=new Set($),z=new Set(D.filter((F,K)=>K<2||(M.get(F.id)??[]).some(se=>L.has(se.id))).map(F=>F.id)),G=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:Z.filter(F=>F.pointKey==="temp"||F.pointKey==="setpoint"||F.pointKey==="co2").slice(0,4).map(F=>F.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:Z.filter(F=>F.pointKey==="dimming"||F.pointKey==="power").slice(0,4).map(F=>F.id),mode:"grouped",interval:"15m"}];let ae="";async function le(){const F=I==="timeseries"?"energy":I,K=N==="custom"?"30d":N;te=await e.getAnalysisReport(F,K,r.floorId),_()}function _(){if(!te)return;const F=I==="timeseries",K=I==="timeseries"?"energy":I,se=Se.find(d=>d.id===K)??Se[0],J=Re.find(d=>d.id===W)??Re[0],ie=nt(te,J.factor),ue=ie.zoneBreakdown.filter(d=>d.status==="warning"),he=st[K],be=Math.max(...ie.zoneBreakdown.map(d=>d.value),1),ye=Z.filter(d=>L.has(d.id));o.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${Fe({tree:ne,session:a,scope:f,isOpen:E,searchKeyword:C})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${N==="today"?"selected":""}>今日</option>
                <option value="7d" ${N==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${N==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${N==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${F?"":`<button class="pacom-btn ${Q?"pacom-btn--primary":""}" data-toggle-canvas="1">${Q?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${Se.map(d=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${I===d.id}" data-cat="${d.id}">${d.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${I==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${N==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${T}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${S}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${F?`
            <div class="pacom-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${ye.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${G.map(d=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${d.id}">${V("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${d.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${D.map(d=>{const R=M.get(d.id)??[],re=z.has(d.id),ve=R.filter(me=>L.has(me.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${d.id}" style="cursor:pointer; justify-content:space-between;" title="${d.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${re?"0deg":"-90deg"}); opacity:0.65;">${at}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${d.name}</div>
                                <div class="pacom-row-sub">${R.length} 个测点 · ${d.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${ve>0?`<span class="pacom-badge pacom-badge--accent">${ve}</span>`:""}
                          </button>
                          ${re?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${R.map(me=>{const we=L.has(me.id),Ae=ge[me.colorIdx%ge.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${we?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${me.id}" data-ts-point="${me.id}" ${we?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${Ae};"></span>
                                            <span style="color:var(--pacom-text-primary);">${me.label}</span>
                                          </span>
                                          <span class="pacom-row-sub">${me.unit}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="pacom-subnav-main" style="padding:2px 4px 24px;">
                ${ae?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${ae}</span></div>`:""}
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${V("clock",12)} 排程(S) · ${V("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${y}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${X==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${X==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${X==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${O==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${O==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${dt(ye,O,y)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="pacom-kpi-strip" role="region" aria-label="核心统计指标">
                ${ie.kpis.map(d=>{const R=it(d.value,d.unit);return`
                      <div class="pacom-kpi-cell" title="${R.title}">
                        <span class="pacom-kpi-label">${d.label}</span>
                        <div class="pacom-kpi-value">
                          <span>${R.value}</span>
                          ${R.unit?`<span class="pacom-kpi-unit">${R.unit}</span>`:""}
                        </div>
                        <span class="pacom-kpi-delta">${d.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="pacom-section">
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">${se?.label??"趋势"}趋势（${ie.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${J.label} · 更新于 ${ie.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${H}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${q==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${q==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${ue.length>0?`关注：${ue.map(d=>d.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${se?.desc??"空间运行洞察"} · ${he.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${q==="chart"?lt(ie,H):`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${ie.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${ie.series.map(d=>{const R=typeof d.baseline=="number"&&d.value>d.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${d.label}</strong></td>
                                    <td>${d.value.toLocaleString("en-US")}</td>
                                    <td>${d.baseline!==void 0?d.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${R?"pacom-badge--warning":"pacom-badge--online"}">${R?"超基线":"正常"}</span></td>
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
                    <span class="pacom-row-sub">${ie.zoneBreakdown.length} 个功能区</span>
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
                          ${ie.zoneBreakdown.map(d=>{const R=Math.max(8,Math.round(d.value/be*100));return`
                                <tr>
                                  <td style="font-weight:500;">${d.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${R}%; height:100%; border-radius:999px; background:${d.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${d.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${d.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${d.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${d.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="pacom-section-title">${Q?"E7F 空间对照预览":K==="energy"&&U==="load"?"峰谷负荷分布（Load Profile）":he.title}</h2>
                    ${!Q&&K==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${U==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${U==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${Q?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${Q?'<img class="pacom-plan-img" src="./media/floors/e/07F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${K==="environment"?`
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
                        ${(K==="energy"&&U==="load"?ot:he.items).map(d=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${d.name}</span>
                                <span class="pacom-row-sub">${d.detail} · <strong style="color:var(--pacom-text-primary);">${d.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,d.pct)}%; height:100%; border-radius:999px; background:${d.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,Ue(o,{onToggle:()=>{E=!E,_(),E&&o.querySelector("[data-global-space-search]")?.focus()},onSearch:d=>{C=d,_();const R=o.querySelector("[data-global-space-search]");R&&(R.focus(),R.setSelectionRange(d.length,d.length))},onPick:d=>{f=d,W=d.level==="all-projects"||d.level==="project"?r.projectId:d.level==="building"?r.buildingId:r.floorId,E=!1,_()}}),o.querySelectorAll("[data-cat]").forEach(d=>{d.addEventListener("click",()=>{I=d.dataset.cat??"energy",ae="",I==="timeseries"?_():le()})}),o.querySelector("[data-range-select]")?.addEventListener("change",d=>{N=d.currentTarget.value??"7d",le()}),o.querySelector("[data-custom-start]")?.addEventListener("change",d=>{T=d.currentTarget.value}),o.querySelector("[data-custom-end]")?.addEventListener("change",d=>{S=d.currentTarget.value}),o.querySelectorAll("[data-chart-mode]").forEach(d=>{d.addEventListener("click",()=>{q=d.dataset.chartMode??"chart",_()})}),o.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{H=!H,_()}),o.querySelectorAll("[data-energy-right]").forEach(d=>{d.addEventListener("click",()=>{U=d.dataset.energyRight??"breakdown",_()})}),o.querySelector("[data-export-csv]")?.addEventListener("click",()=>{F?ut(ye):pt(ie)}),o.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{Q=!Q,_()}),o.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),o.querySelectorAll("[data-ts-expand]").forEach(d=>{d.addEventListener("click",()=>{const R=d.dataset.tsExpand;R&&(z.has(R)?z.delete(R):z.add(R),_())})}),o.querySelectorAll("[data-ts-point]").forEach(d=>{d.addEventListener("change",()=>{const R=d.dataset.tsPoint;R&&(d.checked?L.add(R):L.delete(R),ae="",_())})}),o.querySelectorAll("[data-ts-mode]").forEach(d=>{d.addEventListener("click",()=>{O=d.dataset.tsMode??"grouped",_()})}),o.querySelector("[data-ts-interval]")?.addEventListener("change",d=>{X=d.currentTarget.value??"1h",_()}),o.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{y=!y,_()}),o.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const R=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(L).join(","))}&mode=${O}&interval=${X}`,re=`${window.location.origin}${window.location.pathname}${R}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(re).catch(()=>{}),window.history.replaceState(null,"",R),ae=`已复制分享链接（含 ${L.size} 个测点、${O==="grouped"?"按单位分组":"单图叠合"}、${X} 粒度）。`,_()}),o.querySelectorAll("[data-load-fav]").forEach(d=>{d.addEventListener("click",()=>{const R=G.find(re=>re.id===d.dataset.loadFav);R&&(L.clear(),R.pointIds.forEach(re=>{L.add(re);const ve=re.split(":")[0];ve&&z.add(ve)}),O=R.mode,X=R.interval,ae=`已加载收藏视图「${R.name}」。`,_())})}),o.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(L.size===0)return;const d=`自定义对比 #${G.length+1}（${L.size} 测点）`;G.push({id:`fav-${Date.now()}`,name:d,pointIds:Array.from(L),mode:O,interval:X}),ae=`已保存当前时序配置为「${d}」。`,_()})}await le()}function Pe(o){if(o.connectivity==="offline")return`${o.name.includes("VAV")?"VAV-02":o.name.slice(0,6)} 离线`;if(o.category==="lighting"){const e=o.name.includes("702")?"702 照明":"主照明",a=Number(o.telemetry.dimming?.value??0);return a>0?`${e} ${a}%`:`${e} 关`}return o.category==="hvac"?`${o.name.includes("VAV")?"VAV-02":"FCU-01"} ${o.telemetry.setpoint?.value??24}°C`:o.category==="sensor"?`环境 ${o.telemetry.temp?.value??"23.4"}°C`:o.category==="gateway"?"主控网关":o.name.slice(0,6)}const Be={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},mt={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},ht=V("chevron-down",12),gt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function u(o){return String(o??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Ne(o){const e=o.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面"))return 999;const a=e.match(/(-?\d+)/);if(!a)return 0;const t=Number(a[1]);return e.startsWith("B")?-Math.abs(t):t}async function It(o,e,a){const t=await e.getSpatialTree();e.mode;const s=a.scope.canControlDevices,i=a.scope.canManageAlarms,m=a.scope.allowedZoneIds?.length?a.scope.allowedZoneIds:null,w=t.floors.filter(c=>a.scope.allowedFloorIds.includes(c.id)),j=m||t.projects.length<=1&&t.buildings.length<=1&&w.length<=1?"floors-only":t.projects.length>1?"multi-project":t.buildings.length>1?"single-project-multi-building":"single-building",A=j==="multi-project",I=j==="multi-project"||j==="single-project-multi-building",N=j!=="floors-only",T=j==="floors-only"&&w.length<=1;let S=Ve(),f="devices",E=!1,C=!1,W="",q="",H="all",U="all";const Q=new URLSearchParams(window.location.hash.split("?")[1]??""),te=Q.get("device"),ne=Q.get("zone");let B=te,D=!!te,M="control",Z="",O=!1,X="today",y="devices";const $=new Set,L=new Set;let z=[],G=[],ae=[],le=null,_=null,F=1,K=0,se=0,J=null;function ie(){return t.zones.filter(c=>!(S.level==="floor"&&c.floorId!==S.floorId||m&&!m.includes(c.id)))}function ue(c){return[...t.floors.filter(p=>p.buildingId!==c?!1:j==="floors-only"?a.scope.allowedFloorIds.includes(p.id):!0)].sort((p,n)=>Ne(n.name)-Ne(p.name))}async function he(c,g=!1){if(t.projects.length===0){S={level:"all-projects"},Le(S),z=[],G=[],ae=[],Y();return}let p=c;p.level==="all-projects"&&!A&&(p={level:"project",projectId:t.projects[0]?.id??r.projectId}),p.level==="project"&&!I&&(p={level:"building",projectId:p.projectId,buildingId:t.buildings[0]?.id??r.buildingId}),p.level==="building"&&!N&&(p={level:"floor",projectId:p.projectId,buildingId:p.buildingId,floorId:w[0]?.id??r.floorId}),S=p,Le(p),_=null,U=g&&ne?ne:"all",O=!1,C=!1,E=!1,L.clear(),F=1,K=0,se=0,J&&(J(),J=null);const n=S.level==="floor"?S.floorId:r.floorId;if(S.level==="floor")try{const[l,h,b]=await Promise.all([e.getFloorDevices(S.floorId),e.listAlarms(S.floorId),e.listWorkOrders(S.floorId)]);z=l,G=h,ae=b,z.some(v=>v.id===B)?g&&te&&(D=!0):(B=z[1]?.id??z[0]?.id??null,D=!1),J=e.subscribeFloorEvents(S.floorId,async v=>{v.type==="control.receipt.updated"&&le?.batchId===v.batchId&&(le=await e.getControlBatch(v.batchId)),(v.type==="telemetry.updated"||v.type==="device.connectivity")&&S.level==="floor"&&(z=await e.getFloorDevices(S.floorId)),v.type==="alarm.changed"&&S.level==="floor"&&(G=await e.listAlarms(S.floorId)),R()})}catch(l){z=[],G=[],ae=[],B=null,D=!1,_=l instanceof Error?l.message:String(l)}else{D=!1;const[l,h,b]=await Promise.all([e.getFloorDevices(n).catch(()=>[]),e.listAlarms(n).catch(()=>[]),e.listWorkOrders(n).catch(()=>[])]);z=l,G=h,ae=b}Y()}function be(c){return c?t.zones.find(g=>g.id===c)?.name??c:"未分配逻辑区"}function ye(){const c=q.trim().toLowerCase();return z.filter(g=>U!=="all"&&g.logicalZoneId!==U||H!=="all"&&g.category!==H?!1:c?g.name.toLowerCase().includes(c)||g.id.toLowerCase().includes(c)||be(g.logicalZoneId).toLowerCase().includes(c):!0)}async function d(c,g,p){!c.length||S.level!=="floor"||!s||(c.forEach(n=>$.add(n)),le=await e.dispatchControlBatch({floorId:S.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:c.map(n=>({deviceId:n,command:g,targetValue:p}))}),R())}function R(){const c=document.activeElement,g=c?.dataset?.role,p=c&&"selectionStart"in c?c.selectionStart:null,n=c&&"selectionEnd"in c?c.selectionEnd:null,l=o.querySelector(".pacom-list")?.scrollTop??0;Y();const h=o.querySelector(".pacom-list");if(h&&(h.scrollTop=l),g==="search"||g==="space-search"){const b=o.querySelector(`[data-role="${g}"]`);b&&(b.focus(),p!==null&&n!==null&&b.setSelectionRange(p,n))}}function re(){const c=o.querySelector('[data-role="canvas-viewport"]');c&&(c.style.transform=`translate(${K}px, ${se}px) scale(${F})`);const g=o.querySelector('[data-role="zoom-label"]');g&&(g.textContent=`${Math.round(F*100)}%`)}function ve(c){if(c==="all")return{level:"all-projects"};const g=c.split(":");return g[0]==="project"&&g[1]?{level:"project",projectId:g[1]}:g[0]==="building"&&g[1]&&g[2]?{level:"building",projectId:g[1],buildingId:g[2]}:g[0]==="floor"&&g[1]&&g[2]&&g[3]?{level:"floor",projectId:g[1],buildingId:g[2],floorId:g[3]}:{level:"all-projects"}}function me(c){const g=S;if(g.level==="all-projects"){const p=q.trim().toLowerCase(),n=t.projects.filter(l=>!p||l.name.toLowerCase().includes(p));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${n.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${V("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${n.map(l=>{const h=t.buildings.filter(b=>b.projectId===l.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${u(l.id)}">
                  <div>
                    <div class="pacom-row-title">${u(l.name)}</div>
                    <div class="pacom-row-sub">${u(l.city??"")} · ${h} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(g.level==="project"){const p=q.trim().toLowerCase(),n=t.buildings.filter(b=>b.projectId===g.projectId&&(!p||b.name.toLowerCase().includes(p))),l=z.filter(b=>b.connectivity==="online").length,h=z.length?Math.round(l/z.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${n.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${V("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${n.map(b=>{const v=b.id===r.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${u(b.projectId)}:${u(b.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${v&&c>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${u(b.name)}</div>
                      <div class="pacom-row-sub">地上 ${b.aboveFloors} 层 · ${b.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${v?"pacom-badge--accent":"pacom-badge--neutral"}">${v?`在线 ${h}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(g.level==="building"){const p=q.trim().toLowerCase(),n=ue(g.buildingId).filter(h=>!p||h.name.toLowerCase().includes(p)),l=t.buildings.find(h=>h.id===g.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${u(l?.name??"楼宇")} 楼层导览（${n.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${V("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${n.map(h=>{const b=a.scope.allowedFloorIds.includes(h.id),v=h.id===r.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${b?"":"opacity:0.6;"}" data-nav-scope="floor:${u(g.projectId)}:${u(g.buildingId)}:${u(h.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${v&&c>0?"pacom-dot--warning":h.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${u(l?.name??"")} ${u(h.name)}</div>
                      <div class="pacom-row-sub">${h.plan?"2D 平面控图就绪":"暂未上传平面图"}${v&&c>0?` · ${c} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${b&&h.plan?"pacom-badge--online":"pacom-badge--neutral"}">${b?h.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(f==="devices"){const p=ye(),n=ie(),l=Array.from(L);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${m?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${m.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${H==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${H==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${H==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${H==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${H==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${p.length} 台${s&&l.length?` · 已选 ${l.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${V("x",14)}</button>
          </div>
          ${n.length>0&&!_?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${U==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${n.map(h=>`<button type="button" class="pacom-zone-pill ${U===h.id?"is-active":""}" data-filter-zone="${u(h.id)}">${u(h.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${_?`<div class="pacom-alert-banner">${u(_)}</div>`:p.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':p.map(h=>{const b=h.id===B&&D,v=L.has(h.id),P=h.connectivity==="offline",k=P?"pacom-dot--critical":"pacom-dot--online",x=P?"离线":h.category==="lighting"?`${h.telemetry.dimming?.value??"--"}%`:h.category==="hvac"?`${h.telemetry.setpoint?.value??"--"}°C`:h.category==="sensor"?`${h.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${b?"is-selected":""}" data-select-device="${u(h.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${s?`<input type="checkbox" name="devCheck-${u(h.id)}" data-check-device="${u(h.id)}" ${v?"checked":""} style="margin-top:3px;" aria-label="勾选 ${u(h.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${u(h.name)}</div>
                              <div class="pacom-row-sub">${u(be(h.logicalZoneId).replace(/^7F\s*/,""))} · ${u(Be[h.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${P?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${k}"></span>${u(x)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${s&&l.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${l.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(f==="zones"){const p=ie(),n={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${p.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${V("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${p.map(l=>{const h=z.filter(x=>x.logicalZoneId===l.id),b=h.filter(x=>x.connectivity==="online").length,v=h.filter(x=>x.category==="lighting"||x.category==="hvac").length,P=U===l.id,k=n[l.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${P?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${P?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${u(P?"all":l.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${u(l.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${b}/${h.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${k.temp} · ${k.occ}</div>
                  ${v>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${u(l.id)}" data-zone-val="true" ${s?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${u(l.id)}" data-zone-val="false" ${s?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${G.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${V("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${G.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':G.map(p=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${u(p.title)}</strong>
                      <span class="pacom-badge ${p.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${p.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${u(p.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${u(p.deviceId)}">定位设备</button>
                      ${p.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${u(p.id)}" ${i?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function we(c){const g=S,p=ie().length,n=g.level==="floor"?"搜索设备或区域…":g.level==="building"?"搜索楼层…":g.level==="project"?"搜索楼宇…":"搜索园区…",l=g.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${E&&f==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${z.length}</button>
          <button type="button" class="pacom-hud-pill ${E&&f==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${p}</button>
          <button type="button" class="pacom-hud-pill ${c>0?"pacom-hud-pill--alert":""} ${E&&f==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${c}</button>
        `:g.level==="building"?`
            <button type="button" class="pacom-hud-pill ${E?"is-active":""}" data-toggle-hud="1">楼层 ${ue(g.buildingId).length}</button>
            ${c>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${c}</button>`:""}
          `:g.level==="project"?`
              <button type="button" class="pacom-hud-pill ${E?"is-active":""}" data-toggle-hud="1">楼宇 ${t.buildings.filter(h=>h.projectId===g.projectId).length}</button>
              ${c>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${c}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${E?"is-active":""}" data-toggle-hud="1">园区 ${t.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${V("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${n}" value="${u(q)}" aria-label="${n}" />
          ${l}
        </div>
        ${E?`<div class="pacom-hud-sheet" data-role="hud-sheet">${me(c)}</div>`:""}
      </div>
    `}function Ae(c){if(T||S.level!=="building"&&S.level!=="floor")return"";const g=S.buildingId,p=S.projectId,n=ue(g);return!N&&n.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${N?`<button type="button" class="pacom-elev-item ${S.level==="building"?"is-active":""}" data-nav-scope="building:${u(p)}:${u(g)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${n.map(l=>{const h=a.scope.allowedFloorIds.includes(l.id),b=S.level==="floor"&&S.floorId===l.id,v=l.id===r.floorId&&c>0;return`
              <button type="button" class="pacom-elev-item ${b?"is-active":""} ${h?"":"is-locked"}"
                data-nav-scope="floor:${u(p)}:${u(g)}:${u(l.id)}"
                title="${u(l.name)}${h?v?` · ${c} 条告警`:"":"（无权限）"}">
                ${v?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${u(l.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function Ze(c,g){const p=S;if(p.level==="floor")return _?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${y==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${y==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${y==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${V("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(F*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${V("plus",14)}</button>
        </div>
      `;const n=z.length?Math.round(c/z.length*100):100,l=p.level==="building"?"418 kWh":"1,248 kWh",h=Math.round(96.2*.45+93.6*.35+n*.2),b=p.level==="building"?ue(p.buildingId).find(v=>v.id===r.floorId)??ue(p.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${h}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="environment">
          <span>舒适度 <strong>96.2%</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="energy">
          <span>今日能耗 <strong>${l}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${g>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${g}</strong></span>
        </button>
        ${p.level==="building"&&b?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${u(p.projectId)}:${u(p.buildingId)}:${u(b.id)}">进入 ${u(b.name)} 平面图 →</button>`:""}
      </div>
    `}function He(c,g){const p=S,n=z.length?Math.round(c/z.length*100):100;if(p.level==="all-projects")return`
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
            ${t.projects.map((v,P)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${P===0?50:28}%; top:${P===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${u(v.id)}">
                  <span class="pacom-dot ${g>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${u(v.name)} · 在线 ${n}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(p.level==="project"){const v=t.projects.find(k=>k.id===p.projectId)??t.projects[0],P=t.buildings.filter(k=>!v||k.projectId===v.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${u(v?.imageUrl??"./media/gzlab.jpg")}" alt="${u(v?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${P.map((k,x)=>{const oe=k.id===r.buildingId;return`
                  <button type="button" class="pacom-pin ${oe?"is-selected":""}" style="left:${x===0?56:38}%; top:${x===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${u(k.projectId)}:${u(k.id)}">
                    <span class="pacom-dot ${oe&&g>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${u(k.name)} · ${oe?`在线 ${n}% · 告警 ${g}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(p.level==="building"){const v=t.buildings.find(k=>k.id===p.buildingId),P=ue(p.buildingId).find(k=>k.id===r.floorId)??ue(p.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${u(v?.imageUrl??"./media/building-e.webp")}" alt="${u(v?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${P?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${u(p.projectId)}:${u(p.buildingId)}:${u(P.id)}">
                    <span class="pacom-dot ${g>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${u(v?.name??"")} ${u(P.name)} · 在线 ${c}/${z.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const l=t.floors.find(v=>v.id===p.floorId),h=t.buildings.find(v=>v.id===p.buildingId),b=ie();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${_?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${u(_)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${K}px, ${se}px) scale(${F});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${u(l?.plan?.imageUrl??"./media/floors/e/07F.webp")}" alt="${u(h?.name??"楼宇")} ${u(l?.name??"7F")} 平面图" />
                  ${b.map((v,P)=>{const k=gt[v.id];if(!k)return"";const x=U===v.id,oe=["23.2°C","24.6°C","22.8°C","23.9°C"],fe=["有人 74%","会议中","有人 52%","空闲"],$e=y==="temp"?` · ${oe[P%oe.length]}`:y==="occupancy"?` · ${fe[P%fe.length]}`:"",Ye=y==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":y==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${x?"is-active":""}"
                          style="left:${k.left}%; top:${k.top}%; width:${k.width}%; height:${k.height}%; ${x?"":Ye}"
                          data-filter-zone="${u(x?"all":v.id)}"
                          title="${u(v.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${u(v.name.replace(/^7F\s*/,""))}${$e}</span>
                        </button>`}).join("")}
                  ${z.filter(v=>v.planPoint).map(v=>{const P=G.some($e=>$e.deviceId===v.id&&$e.status==="active"),k=E&&f==="alarms",x=U!=="all"&&v.logicalZoneId!==U||k&&!P,oe=k&&P?"background:var(--pacom-status-critical);":"",fe=v.category==="gateway"?Math.min(92,v.planPoint.y*100+5.5):v.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${v.id===B&&D?"is-selected":""} ${v.connectivity==="offline"?"pacom-pin--offline":""} ${x?"pacom-pin--dimmed":""}"
                          style="left:${(v.planPoint.x*100).toFixed(2)}%; top:${fe.toFixed(2)}%; ${oe}"
                          data-pin-device="${u(v.id)}" title="${u(v.name)}">
                          <span class="pacom-dot ${P?"pacom-dot--critical":v.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${u(Pe(v))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function We(){if(S.level!=="floor"||!D)return"";const c=z.find(x=>x.id===B);if(!c)return"";const g=c.category==="lighting",p=c.category==="hvac",n=Number(c.telemetry.dimming?.value??50),l=Number(c.telemetry.setpoint?.value??24),h=$.has(c.id),b=G.filter(x=>x.deviceId===c.id&&x.status==="active"),v=ae.filter(x=>x.deviceId===c.id&&x.status!=="closed"),P=p?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:g?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],k=g?[{label:"当前开关",value:n>0?"开启":"关闭"},{label:"当前亮度",value:`${n}%`},{label:"实时功率",value:n>0?`${Math.round(n*1.4)} W`:"0 W"},{label:"运行模式",value:h?"人工覆盖":"自动策略"}]:p?[{label:"室内温度",value:`${c.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${l.toFixed(1)}°C`},{label:"运行工况",value:c.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:h?"人工覆盖":"自动策略"}]:c.category==="sensor"?[{label:"实时温度",value:`${c.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${c.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${c.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:c.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:c.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:c.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:c.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:c.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${u(c.name)}</h2>
            <div class="pacom-row-sub">${u(be(c.logicalZoneId))} · ${u(Be[c.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${c.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${c.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${V("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${M==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${M==="trend"}" data-drawer-tab="trend">趋势与告警${b.length>0?` (${b.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${M==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${M==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${k.map(x=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${x.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${u(x.value)}</strong>
                  </div>`).join("")}
            </div>

            ${p?`
                <div class="pacom-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${c.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${u(c.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${c.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${c.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${c.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${c.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${l.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${g||p?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${h&&s?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${u(c.id)}">恢复自动策略</button>`:s?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${c.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${g?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${s?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${s?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${n}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${n}" data-ctrl-slider="lighting.dimming" ${s?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${s?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${s?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${l-.5}" ${s?"":"disabled"}>-0.5°C</button>
                        <strong>${l.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${l+.5}" ${s?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${le?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${u(le.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${le.receipts.map(x=>{const oe=mt[x.status]??{text:x.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${u(x.deviceId)}</strong> · ${u(x.command)} → ${u(x.targetValue)}</div>
                              ${x.errorMessage?`<div style="color:var(--pacom-status-critical);">${u(x.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${oe.badge}">${oe.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:M==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${g?"亮度 %":p?"温度 °C":c.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${u(c.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${c.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${g?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":p?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${b.length===0&&v.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${b.map(x=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${u(x.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${u(x.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${v.map(x=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${u(x.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${u(x.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${u(Pe(c))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${u(be(c.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${Z?`<div class="pacom-info-banner">${u(Z)}</div>`:""}
                ${P.map(x=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${u(x.name)}">${u(x.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${u(x.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="pacom-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${V("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${u(c.id)}</code> · v${c.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${c.planPoint?`x=${c.planPoint.x.toFixed(2)}, y=${c.planPoint.y.toFixed(2)} (图 v${c.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${c.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${c.hardwareBinding?`${c.hardwareBinding.protocol.toUpperCase()} · ${c.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function Ge(c,g,p){if(!O)return"";const n=Math.max(0,z.length-c),l=X==="week",h=G.filter(b=>b.status==="active").slice(0,2);return`
      <div class="pacom-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${l?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!l}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${l}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${V("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${l?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${l?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${u(p)}°C · ${c}/${z.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${g} 告警 · ${n} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,$.size)} 覆盖 · ${ae.filter(b=>b.status!=="closed").length} 工单</strong></div>
        </div>
        ${h.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${h.map(b=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${u(b.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${u(b.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function Y(){if(t.projects.length===0){o.innerHTML=`
        <div class="pacom-shell" style="position:relative;">
          <header class="pacom-header">
            <div class="pacom-header-top">
              <div class="pacom-title-group">
                <h1 class="pacom-title">空间总览</h1>
                ${Fe({tree:t,session:a,scope:S,activeAlarmCount:0,isOpen:!1,searchKeyword:""})}
              </div>
            </div>
          </header>
          <main class="pacom-spatial-stage" style="display:flex; align-items:center; justify-content:center; padding:24px;">
            <div class="dep-empty-card" style="max-width:520px; width:100%; background:var(--pacom-surface-card);">
              <div class="dep-empty-icon">${V("building-2",20)}</div>
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
              <span class="pacom-row-sub" style="max-width:400px;">当前机构还未建立空间档案。先创建首个项目并添加楼宇、楼层与平面图，即可在此查看全景与实时设备态势。</span>
              <div class="dep-empty-steps">
                <span>1. 创建项目</span>
                <span>→</span>
                <span>2. 添加楼宇与楼层</span>
                <span>→</span>
                <span>3. 上传平面图</span>
              </div>
              <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-first-project="1" ${a.scope.canEditDeployment?"":"disabled"}>+ 创建第一个项目</button>
            </div>
          </main>
        </div>
      `,o.querySelector("[data-go-create-first-project]")?.addEventListener("click",()=>{window.location.hash="#deployment?sec=projects&new=project"});return}const c=G.filter(n=>n.status==="active").length,g=z.filter(n=>n.connectivity==="online").length,p=z.find(n=>n.category==="sensor")?.telemetry.temp?.value??"23.4";o.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${Fe({tree:t,session:a,scope:S,activeAlarmCount:c,isOpen:C,searchKeyword:W})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${_?'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${O}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${g}/${z.length} 在线 · ${u(p)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${ht}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${Ge(g,c,p)}

        <main class="pacom-spatial-stage">
          ${we(c)}
          ${He(g,c)}
          ${Ae(c)}
          ${Ze(g,c)}
          ${We()}
        </main>
      </div>
    `,Ke()}function Ke(){Ue(o,{onToggle:()=>{C=!C,C&&(O=!1,E=!1),Y(),C&&o.querySelector("[data-global-space-search]")?.focus()},onSearch:n=>{W=n,Y();const l=o.querySelector("[data-global-space-search]");l&&(l.focus(),l.setSelectionRange(n.length,n.length))},onPick:n=>{C=!1,he(n)}}),o.querySelectorAll("[data-nav-scope]").forEach(n=>{n.addEventListener("click",l=>{l.stopPropagation(),n.dataset.navScope&&he(ve(n.dataset.navScope))})}),o.querySelectorAll("[data-hud-tab]").forEach(n=>{n.addEventListener("click",l=>{l.stopPropagation();const h=n.dataset.hudTab;E&&f===h?E=!1:(f=h,E=!0,C=!1,O=!1),Y()})}),o.querySelectorAll("[data-toggle-hud]").forEach(n=>{n.addEventListener("click",l=>{l.stopPropagation(),E=!E,E&&(C=!1,O=!1),Y()})}),o.querySelectorAll("[data-close-hud]").forEach(n=>{n.addEventListener("click",l=>{l.stopPropagation(),E=!1,Y()})});const c=o.querySelector('[data-role="search"]');c?.addEventListener("focus",()=>{E||(E=!0,C=!1,O=!1,R())}),c?.addEventListener("input",n=>{q=n.currentTarget.value,E=!0,R()}),o.querySelector('[data-role="category"]')?.addEventListener("change",n=>{H=n.currentTarget.value,Y()}),o.querySelectorAll("[data-filter-zone]").forEach(n=>{n.addEventListener("click",l=>{l.stopPropagation(),U=n.dataset.filterZone??"all",Y()})}),o.querySelectorAll("[data-select-device]").forEach(n=>{n.addEventListener("click",l=>{l.target.tagName!=="INPUT"&&(B=n.dataset.selectDevice??null,D=!0,Y())})}),o.querySelectorAll("[data-check-device]").forEach(n=>{n.addEventListener("change",()=>{const l=n.dataset.checkDevice;l&&(n.checked?L.add(l):L.delete(l),Y())})}),o.querySelectorAll("[data-pin-device]").forEach(n=>{n.addEventListener("click",l=>{l.stopPropagation(),B=n.dataset.pinDevice??null,D=!0,C=!1,O=!1,Y()})}),o.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{D=!1,Y()}),o.querySelectorAll("[data-drawer-tab]").forEach(n=>{n.addEventListener("click",()=>{M=n.dataset.drawerTab??"control",Z="",Y()})}),o.querySelectorAll("[data-drawer-doc]").forEach(n=>{n.addEventListener("click",()=>{Z=`已调阅「${n.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,Y()})}),o.querySelectorAll("[data-briefing-period]").forEach(n=>{n.addEventListener("click",()=>{X=n.dataset.briefingPeriod??"today",Y()})}),o.querySelectorAll("[data-go-alarm-id]").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.goAlarmId??"";window.location.hash=l?`#alarms?alarm=${encodeURIComponent(l)}`:"#alarms"})}),o.querySelectorAll("[data-go-wo-id]").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.goWoId??"";window.location.hash=l?`#alarms?wo=${encodeURIComponent(l)}`:"#alarms"})}),o.querySelector("[data-release-override]")?.addEventListener("click",n=>{const l=n.currentTarget.dataset.releaseOverride;l&&($.delete(l),Y())}),o.querySelectorAll("[data-zone-power]").forEach(n=>{n.addEventListener("click",l=>{l.stopPropagation();const h=n.dataset.zonePower,b=n.dataset.zoneVal==="true";if(!h)return;const v=z.filter(k=>k.logicalZoneId===h&&k.category==="lighting").map(k=>k.id),P=z.filter(k=>k.logicalZoneId===h&&k.category==="hvac").map(k=>k.id);v.length?d(v,"lighting.power",b):P.length&&d(P,"hvac.power",b)})}),o.querySelectorAll("[data-locate-device]").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.locateDevice;l&&(B=l,D=!0,E=!1,Y())})}),o.querySelectorAll("[data-go-alarms]").forEach(n=>{n.addEventListener("click",()=>{window.location.hash="#alarms"})}),o.querySelectorAll("[data-go-analysis]").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(l)}`})}),o.querySelectorAll("[data-go-timeseries]").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(l)}`})}),o.querySelectorAll("[data-toggle-briefing]").forEach(n=>{n.addEventListener("click",l=>{l.stopPropagation(),O=!O,O&&(C=!1,E=!1),Y()})}),o.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const n=z.filter(k=>k.connectivity==="online").length,l=G.filter(k=>k.status==="active").length,h=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${n}/${z.length}（离线 ${z.length-n} 台）`,`待处理告警：${l} 条`,`人工覆盖中：${$.size} 台`].join(`
`),b=new Blob([h],{type:"text/plain;charset=utf-8;"}),v=URL.createObjectURL(b),P=document.createElement("a");P.href=v,P.download="pacom-daily-briefing.txt",P.click(),URL.revokeObjectURL(v)}),o.querySelectorAll("[data-ctrl-cmd]").forEach(n=>{n.addEventListener("click",()=>{if(!B||!n.dataset.ctrlCmd)return;const l=n.dataset.ctrlVal??"",h=l==="true"?!0:l==="false"?!1:Number(l);d([B],n.dataset.ctrlCmd,h)})}),o.querySelector("[data-ctrl-slider]")?.addEventListener("change",n=>{const l=n.currentTarget;!B||!l.dataset.ctrlSlider||d([B],l.dataset.ctrlSlider,Number(l.value))}),o.querySelectorAll("[data-batch-cmd]").forEach(n=>{n.addEventListener("click",()=>{const l=Array.from(L),h=n.dataset.batchVal??"",b=h==="true"?!0:h==="false"?!1:h;d(l,n.dataset.batchCmd,b)})}),o.querySelectorAll("[data-ack-alarm]").forEach(n=>{n.addEventListener("click",async()=>{!n.dataset.ackAlarm||S.level!=="floor"||!i||(await e.acknowledgeAlarm(n.dataset.ackAlarm,"首页快速确认"),G=await e.listAlarms(S.floorId),Y())})}),o.querySelectorAll("[data-canvas-layer]").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.canvasLayer;l&&(y=l,Y())})}),o.querySelectorAll("[data-zoom]").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.zoom;l==="in"?F=Math.min(2.6,Number((F+.2).toFixed(2))):l==="out"?F=Math.max(.6,Number((F-.2).toFixed(2))):(F=1,K=0,se=0),re()})}),o.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",n=>{n.preventDefault();const l=S;if(l.level!=="building"&&l.level!=="floor")return;const h=ue(l.buildingId),b=[...N?[{level:"building",projectId:l.projectId,buildingId:l.buildingId}]:[],...h.map(k=>({level:"floor",projectId:l.projectId,buildingId:l.buildingId,floorId:k.id}))],v=b.findIndex(k=>k.level==="building"?l.level==="building":k.level==="floor"&&l.level==="floor"&&k.floorId===l.floorId);if(v<0)return;const P=Math.max(0,Math.min(b.length-1,v+(n.deltaY>0?1:-1)));P!==v&&b[P]&&he(b[P])},{passive:!1});const p=o.querySelector('[data-role="canvas-stage"]');if(p&&!_){let n=!1,l=!1,h=0,b=0,v=0,P=0;p.addEventListener("pointerdown",x=>{x.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(n=!0,l=!1,h=x.clientX,b=x.clientY,v=K,P=se,p.classList.add("is-panning"),p.setPointerCapture?.(x.pointerId))}),p.addEventListener("pointermove",x=>{if(!n)return;const oe=x.clientX-h,fe=x.clientY-b;(Math.abs(oe)>3||Math.abs(fe)>3)&&(l=!0),K=v+oe,se=P+fe,re()});const k=()=>{n&&(n=!1,p.classList.remove("is-panning"),!l&&(E||C||O)&&(E=!1,C=!1,O=!1,Y()))};p.addEventListener("pointerup",k),p.addEventListener("pointercancel",k),p.addEventListener("wheel",x=>{x.preventDefault();const oe=x.deltaY<0?.12:-.12;F=Math.max(.6,Math.min(2.6,Number((F+oe).toFixed(2)))),re()},{passive:!1}),p.addEventListener("dblclick",x=>{x.target?.closest("button")||(F=1,K=0,se=0,re())})}else o.querySelector(".pacom-spatial-stage")?.addEventListener("click",n=>{n.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .pacom-briefing-pop")||(E||C||O)&&(E=!1,C=!1,O=!1,Y())})}o.addEventListener("keydown",c=>{c.key==="Escape"&&(C||O||E||D)&&(C=!1,O=!1,E=!1,D=!1,Y())}),await he(S,!0)}const vt=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ft='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',bt='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',ke=V("x",16),_e={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}};function yt(o){const e=o.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:o}function ce(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function St(o,e,a){o.classList.add("bare-login"),document.title="登录 · PACOM Station";let t=!1,s=!1,i="",m="",w="",j="",A=!1,I={},N="",T=!1,S="",f=0,E=null,C=null,W="privacy",q="",H="",U="";function Q(){E!==null&&(window.clearInterval(E),E=null),o.classList.remove("bare-login")}function te(){f=60,E!==null&&window.clearInterval(E),E=window.setInterval(()=>{f-=1,f<=0&&(f=0,E!==null&&(window.clearInterval(E),E=null));const M=o.querySelector('[data-act="send-sms"]');M&&(M.disabled=f>0,M.textContent=f>0?`${f} 秒后重发`:S?"重新获取":"获取验证码")},1e3)}function ne(){if(!C)return"";if(C==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ke}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${ce(H)}" />
                  </div>
                </div>
                ${U?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${ce(U)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(C==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ke}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                请联系所在机构管理员获取邀请码，或通过支持邮箱联系开通新机构账户。
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `;if(C==="legal"){const M=_e[W],Z=["privacy","terms","service"].map(O=>`<button type="button" role="tab" aria-selected="${W===O}" class="au-legal-tab ${W===O?"is-active":""}" data-act="switch-legal" data-tab="${O}">${_e[O].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ke}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${Z}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${M.items.map(O=>`<li>${ce(O)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return C==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ke}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${q||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:""}function B(){const M=t?`
        <div class="au-field ${I.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ce(w)}" aria-invalid="${I.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${f>0?"disabled":""}>
              ${f>0?`${f} 秒后重发`:S?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${ce(I.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${S?`验证码已发送至 ${ce(yt(S))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${I.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ce(i)}" aria-invalid="${I.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${ce(I.id??"")}</p>
        </div>
      `,Z=t?`
        <div class="au-field ${I.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ce(j)}" aria-invalid="${I.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${ce(I.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${I.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${s?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ce(m)}" aria-invalid="${I.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${s?"隐藏密码":"显示密码"}">
              ${s?bt:ft}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${ce(I.pwd??"")}</p>
        </div>
      `;o.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${vt}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${T?"disabled":""}>
                  ${M}
                  ${Z}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${N?"":"hidden"}>${ce(N)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${A?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${T?"disabled":""}>
                    ${T?"正在登录…":"登录"}
                  </button>
                </fieldset>
              </form>
              <div class="au-login-actions">
                <button type="button" class="au-textbtn" data-act="toggle-sms">
                  <span>${t?"使用密码登录":"使用短信验证码登录"}</span>
                </button>
                <div class="au-login-divider" aria-hidden="true"></div>
                <p class="au-noacct">
                  没有账户？<button type="button" class="au-inline" data-act="open-register">注册</button>
                </p>
              </div>
            </main>
          </div>
          <footer class="au-foot" aria-label="版权、法律与联系信息">
            <span class="au-copyright">© 2026 广州天环智能技术有限公司</span>
            <div class="au-foot-links">
              <button type="button" data-act="open-legal">隐私和法律</button>
              <button type="button" data-act="open-contact">联系我们</button>
            </div>
          </footer>
        </section>
        <aside class="au-art" aria-hidden="true">
          <img src="./media/auth-hero.jpg" alt="" />
        </aside>
      </div>
      ${ne()}
    `,D()}function D(){const M=o.querySelector("#au-id"),Z=o.querySelector("#au-pwd"),O=o.querySelector("#au-sphone"),X=o.querySelector("#au-scode"),y=o.querySelector('input[name="keep"]');M?.addEventListener("input",()=>{if(i=M.value,I.id||N){delete I.id,N="",M.closest(".au-field")?.classList.remove("bad");const $=o.querySelector("#au-id-err");$&&($.textContent="");const L=o.querySelector("#au-login-ferr");L&&(L.hidden=!0)}}),Z?.addEventListener("input",()=>{if(m=Z.value,I.pwd||N){delete I.pwd,N="",Z.closest(".au-field")?.classList.remove("bad");const $=o.querySelector("#au-pwd-err");$&&($.textContent="");const L=o.querySelector("#au-login-ferr");L&&(L.hidden=!0)}}),O?.addEventListener("input",()=>{if(w=O.value,I.sphone||N){delete I.sphone,N="",O.closest(".au-field")?.classList.remove("bad");const $=o.querySelector("#au-sphone-err");$&&($.textContent="");const L=o.querySelector("#au-login-ferr");L&&(L.hidden=!0)}}),X?.addEventListener("input",()=>{if(j=X.value.replace(/\D/g,"").slice(0,6),X.value=j,I.scode||N){delete I.scode,N="",X.closest(".au-field")?.classList.remove("bad");const $=o.querySelector("#au-scode-err");$&&($.textContent="");const L=o.querySelector("#au-login-ferr");L&&(L.hidden=!0)}}),y?.addEventListener("change",()=>{A=y.checked}),o.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{s=!s,B(),o.querySelector("#au-pwd")?.focus()}),o.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{t=!t,I={},N="",B(),o.querySelector(t?"#au-sphone":"#au-id")?.focus()}),o.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const $=w.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test($)){I={sphone:"请输入有效的手机号码"},B(),o.querySelector("#au-sphone")?.focus();return}I={},S=$,te(),B(),o.querySelector("#au-scode")?.focus()}),o.querySelector('form[data-form="login"]')?.addEventListener("submit",async $=>{if($.preventDefault(),!T){if(I={},N="",t?(w.trim()||(I.sphone="请输入手机号码"),/^\d{6}$/.test(j.trim())||(I.scode="请输入 6 位验证码")):(i.trim()||(I.id="请输入电子邮箱或手机号码"),m||(I.pwd="请输入密码")),Object.keys(I).length>0){B();const L=Object.keys(I)[0];o.querySelector(`#au-${L}`)?.focus();return}T=!0,B();try{const L=await e.login({account:(t?w:i).trim(),password:t?j.trim():m});Q(),a(L)}catch(L){T=!1,N=L instanceof Error?L.message:"账户或密码不正确",B()}}}),o.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{H=i.trim(),U="",C="reset",B(),o.querySelector("#au-rs-id")?.focus()}),o.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{C="register",B()}),o.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{C="legal",B()}),o.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{q="",C="contact",B()}),o.querySelectorAll('[data-act="close-modal"]').forEach($=>{$.addEventListener("click",()=>{C=null,B()})}),o.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",$=>{$.target===$.currentTarget&&(C=null,B())}),o.querySelectorAll('[data-act="switch-legal"]').forEach($=>{$.addEventListener("click",()=>{const L=$.dataset.tab;L&&(W=L,B())})}),o.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),q="已复制"}catch{q="support@pacom.cn"}B()}),o.querySelector("#au-reset-form")?.addEventListener("submit",$=>{$.preventDefault(),H=o.querySelector("#au-rs-id")?.value.trim()??"",H?U="请联系机构管理员重置账号密码，或确认后查收重置邮件。":U="请输入电子邮箱或手机号码",B()})}B()}export{$t as D,r as E,Fe as a,Ue as b,It as c,St as d,Ve as g,xt as m,V as r,Le as s};
//# sourceMappingURL=login-view-DkyDXfRr.js.map
