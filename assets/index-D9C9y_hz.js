(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const F of r.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&a(F)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();const g={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"};function Pt(){const e="2026-11-25T09:00:00Z",t=[];for(let r=1;r<=22;r+=1){const F=r===7?g.floorId:r===8?g.lockedFloor8Id:r===6?g.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${r}`,C=String(r).padStart(2,"0");t.push({id:F,buildingId:g.buildingId,kind:"above",level:r,name:`${r}F`,areaSqm:r===7?1383.1:r===1?2680:r<=4?1920:1480,plan:{floorId:F,imageUrl:`./media/floors/e/${C}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const s="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";t.push({id:s,buildingId:g.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:s,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}});const a=[];for(let r=1;r<=12;r+=1){const F=`structure-f-above-${r}`,C=String(r).padStart(2,"0");a.push({id:F,buildingId:g.buildingFId,kind:"above",level:r,name:`${r}F`,areaSqm:r===1?2450:r<=3?2100:1580,plan:{floorId:F,imageUrl:`./media/floors/f/${C}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const l="structure-f-roof-1";return a.push({id:l,buildingId:g.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:l,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}}),{projects:[{id:g.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"},{id:g.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:g.buildingId,projectId:g.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:g.buildingFId,projectId:g.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...t,...a],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:g.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:g.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:g.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:g.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:s,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:l,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Ct=Pt(),lt=Ct.floors.map(e=>e.id),Ae={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[g.projectId,g.project1Id],allowedBuildingIds:[g.buildingId,g.buildingFId],allowedFloorIds:[...lt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[g.projectId],allowedBuildingIds:[g.buildingId,g.buildingFId],allowedFloorIds:[...lt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[g.projectId],allowedBuildingIds:[g.buildingId],allowedFloorIds:[g.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[g.projectId],allowedBuildingIds:[g.buildingId,g.buildingFId],allowedFloorIds:[...lt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[g.projectId],allowedBuildingIds:[g.buildingId],allowedFloorIds:[g.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},Je="pacom.web.demo.role",ft="pacom.web.demo.spatial.v4";class Nt{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){this.spatial=this.loadSpatial(),this.syncAdminScopesFromSpatial();const t=typeof sessionStorage<"u"?sessionStorage.getItem(Je):null;t&&Ae[t]&&(this.activeSession=structuredClone(Ae[t]));const s=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:g.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:s,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:g.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:g.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:g.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:s,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:s,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:s,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:g.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:s,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:g.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:s,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:s,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:s,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:s},{id:"conn-e7f-dali",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:s},{id:"conn-e7f-modbus",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:g.projectId,floorId:g.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:g.projectId,floorId:g.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:g.projectId,floorId:g.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:g.projectId,floorId:g.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:g.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:g.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:g.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:s,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:g.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:g.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:g.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:g.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(Ae).map((a,l)=>({userId:a.userId,displayName:a.displayName,email:`${a.role.replaceAll("_",".")}@pacom.local`,role:a.role,roleLabel:a.roleLabel,scopeSummary:a.scope.allowedZoneIds?.length?`E栋 7F（${a.scope.allowedZoneIds.length} 个我的区域）`:`${a.scope.allowedProjectIds.length} 项目 / ${a.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:l===0?s:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(t,s,a,l,r){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:s,endpoint:a,request:r,response:l}),this.traces.length>40&&this.traces.pop()}pushAudit(t,s,a,l){const r=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:r?.displayName??"anonymous",role:r?.role??"member",action:t,target:s,result:a,detail:l})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){if(!t.account.trim()||!t.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=t.account.includes("admin")?"org_admin":t.account.includes("eng")?"commissioning_engineer":t.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(Ae[s]),sessionStorage.setItem(Je,s),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:t.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(Je),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(t){return this.activeSession=structuredClone(Ae[t]),sessionStorage.setItem(Je,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}loadSpatial(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(ft);if(t){const s=JSON.parse(t);if(s?.projects?.length&&s?.buildings?.length&&Array.isArray(s.floors))return s}}}catch{}return structuredClone(Ct)}persistSpatial(){this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&localStorage.setItem(ft,JSON.stringify(this.spatial))}catch{}}syncAdminScopesFromSpatial(){const t=this.spatial.buildings.map(a=>a.id),s=this.spatial.floors.map(a=>a.id);Ae.org_admin.scope.allowedBuildingIds=[...t],Ae.org_admin.scope.allowedFloorIds=[...s],Ae.project_admin.scope.allowedBuildingIds=[...t],Ae.project_admin.scope.allowedFloorIds=[...s],Ae.commissioning_engineer.scope.allowedBuildingIds=[...t],Ae.commissioning_engineer.scope.allowedFloorIds=[...s],this.activeSession&&(this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin"||this.activeSession.role==="commissioning_engineer")&&(this.activeSession.scope.allowedBuildingIds=[...t],this.activeSession.scope.allowedFloorIds=[...s])}async getSpatialTree(){const t=this.requireSession(),s=this.spatial.projects.filter(G=>t.scope.allowedProjectIds.includes(G.id)),a=this.spatial.buildings.filter(G=>t.scope.allowedBuildingIds.includes(G.id)),l=new Set(a.map(G=>G.id)),r=this.spatial.floors.filter(G=>l.has(G.buildingId)),F=new Set(r.map(G=>G.id)),C=this.spatial.zones.filter(G=>F.has(G.floorId)),O=structuredClone({projects:s,buildings:a,floors:r,zones:C});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:O.projects.length,buildings:O.buildings.length,floors:O.floors.length}),O}async updateProject(t,s){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改项目配置`);const l=this.spatial.projects.find(r=>r.id===t);if(!l)throw new Error(`404 NOT_FOUND: 项目 ${t} 不存在`);return s.name!==void 0&&(l.name=s.name.trim()||l.name),s.city!==void 0&&(l.city=s.city.trim()),s.address!==void 0&&(l.address=s.address.trim()),s.location!==void 0&&(l.location=s.location),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${t}`,l,s),this.pushAudit("project.update",t,"success",l.name),structuredClone(l)}async upsertBuilding(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼宇`);let a=t.id?this.spatial.buildings.find(l=>l.id===t.id):void 0;return a?(a.name=t.name.trim()||a.name,a.aboveFloors=Math.max(0,t.aboveFloors),a.belowFloors=Math.max(0,t.belowFloors),a.hasRoof=t.hasRoof,t.areaSqm!==void 0&&(a.areaSqm=t.areaSqm),t.imageUrl!==void 0&&(a.imageUrl=t.imageUrl)):(a={id:`building-${Date.now().toString(36)}`,projectId:t.projectId,name:t.name.trim()||"新建楼宇",aboveFloors:Math.max(1,t.aboveFloors),belowFloors:Math.max(0,t.belowFloors),hasRoof:t.hasRoof,areaSqm:t.areaSqm??null,imageUrl:t.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(a)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",a,t),this.pushAudit("building.upsert",a.id,"success",a.name),structuredClone(a)}async upsertFloor(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼层`);const a=new Date().toISOString();let l=t.id?this.spatial.floors.find(r=>r.id===t.id):void 0;if(l)l.name=t.name.trim()||l.name,l.kind=t.kind,l.level=t.level,t.areaSqm!==void 0&&(l.areaSqm=t.areaSqm),t.planImageUrl!==void 0&&(l.plan=t.planImageUrl?{floorId:l.id,imageUrl:t.planImageUrl,planVersion:(l.plan?.planVersion??0)+1,updatedAt:a}:null);else{const r=`floor-${t.buildingId.slice(-6)}-${t.kind}-${Math.abs(t.level)}-${Date.now().toString(36).slice(-3)}`;l={id:r,buildingId:t.buildingId,kind:t.kind,level:t.level,name:t.name.trim()||`${t.level}F`,areaSqm:t.areaSqm??null,plan:t.planImageUrl?{floorId:r,imageUrl:t.planImageUrl,planVersion:1,updatedAt:a}:null},this.spatial.floors.push(l),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(l.id)&&this.activeSession.scope.allowedFloorIds.push(l.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:l.id,name:l.name,hasPlan:!!l.plan}),this.pushAudit("floor.upsert",l.id,"success",l.name),structuredClone(l)}async deleteFloor(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼层`);if(t===g.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(a=>a.id!==t),this.spatial.zones=this.spatial.zones.filter(a=>a.floorId!==t),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${t}`,{ok:!0}),this.pushAudit("floor.delete",t,"success")}async upsertZone(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护功能区`);let a=t.id?this.spatial.zones.find(l=>l.id===t.id):void 0;return a?(a.name=t.name.trim()||a.name,a.category=t.category):(a={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:t.floorId,name:t.name.trim(),category:t.category},this.spatial.zones.push(a)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",a),this.pushAudit("zone.upsert",a.id,"success",a.name),structuredClone(a)}async deleteZone(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(a=>a.id!==t),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${t}`,{ok:!0}),this.pushAudit("zone.delete",t,"success")}async copyZonesToFloors(t,s){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权复制功能区`);const l=this.spatial.floors.find(C=>C.id===t),r=this.spatial.zones.filter(C=>C.floorId===t);if(!l||r.length===0)return 0;let F=0;for(const C of s){if(C===t)continue;const O=this.spatial.floors.find(D=>D.id===C);if(!O)continue;const G=new Set(this.spatial.zones.filter(D=>D.floorId===C).map(D=>D.name));for(const D of r){const ie=D.name.replace(new RegExp(`^${l.name}\\s*`,"i"),""),H=`${O.name} ${ie}`.trim();G.has(H)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:C,name:H,category:D.category}),G.add(H),F+=1)}}return F>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:t,targetCount:s.length,added:F}),F}async getFloorDevices(t){const s=this.requireSession();if(!s.scope.allowedFloorIds.includes(t)){const l={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,l),this.pushAudit("floor.read",t,"denied",l.message),new Error(`403 FORBIDDEN: ${l.message}`)}if(t!==g.floorId)return[];let a=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(a=a.filter(l=>l.logicalZoneId&&s.scope.allowedZoneIds.includes(l.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:a.length}),a}async dispatchControlBatch(t){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,l={batchId:a,floorId:t.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(r=>({deviceId:r.deviceId,command:r.command,targetValue:r.targetValue,status:"queued"}))};return this.batches.set(a,l),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",l,t),this.pushAudit("control.dispatch",a,"success",`下发 ${t.targets.length} 台设备`),l.receipts.forEach((r,F)=>{const C=this.devices.find(O=>O.id===r.deviceId);setTimeout(()=>{r.status="dispatched",r.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:r.deviceId,status:"dispatched",at:r.dispatchedAt})},280+F*120),setTimeout(()=>{const O=new Date().toISOString();!C||C.connectivity==="offline"?(r.status="timeout",r.errorCode="GATEWAY_READBACK_TIMEOUT",r.errorMessage="设备离线，网关未收到回读确认",r.verifiedAt=O):(r.status="verified_success",r.observedValue=r.targetValue,r.verifiedAt=O,this.applyObservedTelemetry(C,r.command,r.targetValue,O)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:r.deviceId,status:r.status,observedValue:r.observedValue,at:O})},900+F*220)}),structuredClone(l)}applyObservedTelemetry(t,s,a,l){s==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:a,collectedAt:l,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(a)>0,collectedAt:l,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:a,collectedAt:l,stale:!1}:s==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:a,collectedAt:l,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:l,values:{[s]:a}})}async getControlBatch(t){this.requireSession();const s=this.batches.get(t);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(s)}async listAlarms(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==g.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,s){const a=this.requireSession();if(!a.scope.canManageAlarms){const r=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",r),new Error(`403 FORBIDDEN: ${r}`)}const l=this.alarms.find(r=>r.id===t);if(!l)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return l.status="acknowledged",l.acknowledgedAt=new Date().toISOString(),l.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,l,{note:s}),this.pushAudit("alarm.acknowledge",t,"success",s),this.emit({type:"alarm.changed",floorId:l.floorId,alarmId:t,status:"acknowledged",at:l.acknowledgedAt}),structuredClone(l)}async listWorkOrders(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==g.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const a=new Date().toISOString(),l={id:`wo-e7f-${Date.now().toString(36)}`,projectId:g.projectId,buildingId:g.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(l),t.alarmId){const r=this.alarms.find(F=>F.id===t.alarmId);r&&(r.workOrderId=l.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",l,t),this.pushAudit("work_order.create",l.id,"success",l.title),structuredClone(l)}async updateWorkOrderStatus(t,s){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const l=this.workOrders.find(r=>r.id===t);if(!l)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return l.status=s,l.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,l,{status:s}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${s}`),structuredClone(l)}async updateDevicePlanPoint(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(l=>l.id===t.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(a.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:Number(t.x.toFixed(4)),y:Number(t.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,a,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(r=>r.id===t.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(a.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const l=new Date().toISOString();return a.physicalInstalled=t.physicalInstalled,a.physicalVerifiedAt=t.physicalInstalled?l:null,a.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:l,boundBy:s.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,a,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(a)}async listConnections(t){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(t){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(t,s){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const l=this.devices.filter(F=>F.physicalInstalled&&F.hardwareBinding).length,r={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:g.projectId,floorId:t,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:l,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(r),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,r,{note:s}),this.pushAudit("delivery.freeze",r.id,"success",`${l}/${this.devices.length} 已现场核验`),structuredClone(r)}async getAnalysisReport(t,s,a){this.requireSession();const l=s==="today"?1:s==="7d"?7:30,F={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*l)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*l).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(G=>G.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*l).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*l).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*l).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],C=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],O={category:t,range:s,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:F.kpis,unit:F.unit,series:F.base.map((G,D)=>({label:C[D],value:Math.round(G*(t==="energy"||t==="carbon"?l/2+.5:1)),baseline:Math.round(G*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:F.base[3],unit:F.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:F.base[4],unit:F.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:F.base[1],unit:F.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${s}&scopeId=${a}`,{kpis:O.kpis.length}),O}async listScenes(t){return this.requireSession(),structuredClone(this.scenes)}async createScene(t){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,t),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(t){const s=this.scenes.find(l=>l.id===t);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const a=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=a.batchId,a}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:g.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,s,a){this.requireSession();const l=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,r=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${a} (+30m)`,conflictWarning:l},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:l}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",r,{workdayStart:s,workdayEnd:a}),r}async saveWorkCalendar(t,s,a,l){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权修改运行日历`);if(this.calendar.version!==l)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:a,expectedVersion:l}),this.pushAudit("settings.calendar",g.projectId,"success",`${s}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,s,a){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权启停运行规则`);const r=this.rules.find(F=>F.id===t);if(!r)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(r.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${r.version}）`);return r.enabled=s,r.version+=1,r.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,r,{enabled:s,expectedVersion:a}),this.pushAudit("settings.rule_toggle",t,"success",s?"启用":"停用"),structuredClone(r)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,s){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const l=Ae[s],r={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:s,roleLabel:l.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(r),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",r,{email:t,role:s}),this.pushAudit("org.invite",t,"success",l.roleLabel),structuredClone(r)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(t,s){return t!==g.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${g.floorId}`,t),this.listeners.forEach(s=>s(t))}}function _t(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new Nt}const Bt={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"layout-dashboard":'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',waypoints:'<circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'};function Vt(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function he(e,t=16,s=""){const a=Vt(t);return`<svg${s?` class="${s}"`:""} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${Bt[e]}</svg>`}const it=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function Ut(e,t,s,a,l){let r="profile",F="directory",C=await t.listOrgMembers(),O=await t.listAuditLogs(),G="",D="all",ie="all",H="all",ge=!1,S=!1,se=!1,U=s.displayName,J=s.role==="org_admin"||s.role==="project_admin"?"设施运维总监":s.role==="commissioning_engineer"?"楼宇自控部署工程师":s.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",ne="138-0013-8072",ue="",Z="";async function de(){[C,O]=await Promise.all([t.listOrgMembers(),t.listAuditLogs()]),ce()}function ce(){const be=t.mode==="demo"&&typeof t.switchDemoRole=="function",xe=G.trim().toLowerCase(),T=C.filter(p=>D!=="all"&&p.role!==D?!1:xe?`${p.displayName} ${p.email} ${p.roleLabel} ${p.scopeSummary}`.toLowerCase().includes(xe):!0),M=O.filter(p=>{if(ie==="success"&&p.result!=="success"||ie==="denied"&&p.result==="success")return!1;if(H!=="all"){const q=`${p.action} ${p.target}`.toLowerCase();if(H==="control"&&!q.includes("control")&&!q.includes("scene")&&!q.includes("控制")||H==="alarm"&&!q.includes("alarm")&&!q.includes("work")&&!q.includes("告警")||H==="deploy"&&!q.includes("deploy")&&!q.includes("plan")&&!q.includes("hardware")&&!q.includes("部署"))return!1}return!0});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${r==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${r==="members"}" data-atab="members">成员与角色（${C.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${r==="audit"}" data-atab="audit">操作审计日志（${O.length}）</button>
              </div>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">广州国家实验室</span>
              <span class="pacom-badge pacom-badge--accent">${s.roleLabel}</span>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:8px 6px 32px;">
          <div style="width:100%; max-width:960px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${ue?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${ue}</span></div>`:""}
            ${Z?`<div class="pacom-alert-banner">${Z}</div>`:""}
            ${r==="profile"?`
                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">个人资料与授权摘要</h2>
                    <span class="pacom-badge pacom-badge--online">${s.roleLabel}</span>
                  </div>
                  <form class="pacom-settings-card" data-role="profile-form">
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">显示姓名与岗位</span>
                        <span class="pacom-setting-desc">账号 ID：${s.userId} · 所属机构：广州国家实验室</span>
                      </div>
                      <div class="pacom-setting-control" style="flex-wrap:wrap;">
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${U}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${J}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">告警接收手机号（SMS）</span>
                        <span class="pacom-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="pacom-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${ne}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
                        <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
                      </div>
                    </div>
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">楼层与操作权限</span>
                        <span class="pacom-setting-desc">
                          已授权楼层 ${s.scope.allowedFloorIds.length} 层 · 设备控制：${s.scope.canControlDevices?"允许":"只读"} · 部署编辑：${s.scope.canEditDeployment?"允许":"只读"}
                        </span>
                      </div>
                    </div>
                  </form>
                </section>

                ${be?`
                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(Ae).map(p=>{const q=Ae[p];return`
                              <button class="pacom-role-card ${p===s.role?"is-active":""}" data-switch-role="${p}">
                                <strong style="font-weight:500;">${q.roleLabel}</strong>
                                <span class="pacom-row-sub">${q.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${q.scope.allowedFloorIds.length} 层 · 部署编辑：${q.scope.canEditDeployment?"是":"否"}</span>
                              </button>`}).join("")}
                      </div>
                    </section>`:""}

                <section class="pacom-section">
                  <h2 class="pacom-section-title">会话安全</h2>
                  <div class="pacom-settings-card">
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">退出当前账号</span>
                        <span class="pacom-setting-desc">退出后将清除本机登录态并返回 PACOM Station 登录页</span>
                      </div>
                      <div class="pacom-setting-control">
                        <button class="pacom-btn pacom-btn--danger" data-role="logout-btn">退出登录</button>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="pacom-section">
                  <details class="pacom-tech-details pacom-card" style="padding:12px 18px; border-top:0;">
                    <summary style="font-size:13px; font-weight:500; color:var(--pacom-text-body);">
                      <span>开发者联调：会话 RBAC 权限契约（JSON）</span>
                      <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:4px;">展开查看 ${he("chevron-down",12)}</span>
                    </summary>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${se?"已复制":"复制 JSON"}</button>
                    </div>
                    <pre class="pacom-code">${JSON.stringify(s,null,2)}</pre>
                  </details>
                </section>`:r==="members"?`
                  ${ge?`
                      <section class="pacom-section">
                        <h2 class="pacom-section-title">邀请新成员</h2>
                        <form class="pacom-settings-card" data-role="invite-form">
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">成员邮箱与角色</span>
                              <span class="pacom-setting-desc">受邀成员将按角色获得对应项目与楼层的默认授权范围</span>
                            </div>
                            <div class="pacom-setting-control" style="flex-wrap:wrap;">
                              <input class="pacom-input" style="width:220px;" name="email" type="email" placeholder="colleague@pacom.local" required />
                              <select class="pacom-select" name="role">
                                ${Object.keys(Ae).map(p=>`<option value="${p}">${Ae[p].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <h2 class="pacom-section-title">${F==="directory"?"机构成员目录":"工作组与空间授权（Groups & Scope）"}</h2>
                        <div class="pacom-tabs" role="tablist" aria-label="成员与工作组切换">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${F==="directory"}" data-msub="directory">成员目录（${C.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${F==="groups"}" data-msub="groups">工作组（${it.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${F==="directory"?`当前显示 ${T.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${F==="directory"?`
                        <div class="pacom-table-card">
                          <div class="pacom-table-toolbar">
                            <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" name="memberSearch" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${G}" />
                              <select class="pacom-select" name="memberRoleFilter" data-role-filter>
                                <option value="all" ${D==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(Ae).map(p=>`<option value="${p}" ${D===p?"selected":""}>${Ae[p].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${ge?"收起邀请":"+ 邀请成员"}
                            </button>
                          </div>
                          <div class="pacom-table-wrap">
                            <table class="pacom-table">
                              <thead>
                                <tr>
                                  <th>成员</th>
                                  <th>角色</th>
                                  <th>授权范围</th>
                                  <th>状态</th>
                                </tr>
                              </thead>
                              <tbody>
                                ${T.map(p=>`
                                    <tr>
                                      <td>
                                        <div style="display:flex; align-items:center; gap:10px;">
                                          <span class="pacom-pop-avatar">${p.displayName.slice(0,1)}</span>
                                          <div>
                                            <div style="font-weight:500;">${p.displayName}</div>
                                            <div class="pacom-row-sub">${p.email}</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${p.roleLabel}</span></td>
                                      <td><span class="pacom-row-sub">${p.scopeSummary}</span></td>
                                      <td>
                                        <span class="pacom-badge ${p.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">
                                          ${p.status==="active"?"正常":p.status}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>`:`
                        ${S?`
                            <form class="pacom-settings-card" data-role="new-group-form" style="margin-bottom:10px;">
                              <div class="pacom-setting-row" style="display:grid; grid-template-columns:140px 130px 1fr auto; gap:8px; align-items:center;">
                                <input class="pacom-input" name="wgName" placeholder="工作组名称" required />
                                <select class="pacom-select" name="wgRole">
                                  <option value="运行值班员">运行值班员</option>
                                  <option value="部署工程师">部署工程师</option>
                                  <option value="只读访客">只读访客</option>
                                </select>
                                <input class="pacom-input" name="wgScope" placeholder="授权空间边界（如：广实2号园 / E栋 7F）" required />
                                <button class="pacom-btn pacom-btn--primary" type="submit">创建工作组</button>
                              </div>
                            </form>`:""}
                        <div class="pacom-table-card">
                          <div class="pacom-table-toolbar">
                            <span class="pacom-row-sub">工作组同时用于「应用设置 → 消息通知」的告警分流与自动派单</span>
                            <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1">${S?"收起表单":"+ 新建工作组"}</button>
                          </div>
                          <div class="pacom-table-wrap">
                            <table class="pacom-table">
                              <thead>
                                <tr>
                                  <th>工作组名称</th>
                                  <th>默认角色</th>
                                  <th>授权空间边界（Location Scope）</th>
                                  <th>成员规模</th>
                                  <th>默认告警通道</th>
                                </tr>
                              </thead>
                              <tbody>
                                ${it.map(p=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${p.name}</div>
                                      <div class="pacom-row-sub">${p.membersSummary}</div>
                                    </td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${p.defaultRoleLabel}</span></td>
                                    <td><span class="pacom-row-sub">${p.locationScope}</span></td>
                                    <td><strong>${p.memberCount}</strong> 人</td>
                                    <td><span class="pacom-badge pacom-badge--accent">${p.notifyChannel}</span></td>
                                  </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>`}
                  </section>`:`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">操作与权限拦截审计日志</h2>
                      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                        <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
                          <option value="all" ${H==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${H==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${H==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${H==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${ie==="all"}" data-audit-filter="all">全部（${O.length}）</button>
                          <button class="pacom-tab" aria-selected="${ie==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${ie==="denied"}" data-audit-filter="denied">已拦截</button>
                        </div>
                      </div>
                    </div>
                    <div class="pacom-table-card">
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>操作行为</th>
                              <th>目标资源</th>
                              <th>执行人</th>
                              <th>时间</th>
                              <th>结果</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${M.map(p=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${p.action}</div>
                                    ${p.detail?`<div class="pacom-row-sub">${p.detail}</div>`:""}
                                  </td>
                                  <td><code style="font-size:12px;">${p.target}</code></td>
                                  <td>${p.actor}</td>
                                  <td><span class="pacom-row-sub">${p.at.slice(0,19).replace("T"," ")}</span></td>
                                  <td>
                                    <span class="pacom-badge ${p.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                                      ${p.result==="success"?"成功":p.result}
                                    </span>
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
    `,e.querySelectorAll("[data-atab]").forEach(p=>{p.addEventListener("click",()=>{r=p.dataset.atab,ue="",Z="",ce()})}),e.querySelectorAll("[data-msub]").forEach(p=>{p.addEventListener("click",()=>{F=p.dataset.msub??"directory",ce()})}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{S=!S,ce()}),e.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",p=>{p.preventDefault();const q=new FormData(p.currentTarget),P=String(q.get("wgName")??"").trim(),$=String(q.get("wgRole")??"运行值班员"),L=String(q.get("wgScope")??"").trim();!P||!L||(it.push({id:`wg-${Date.now()}`,name:P,defaultRoleLabel:$,locationScope:L,memberCount:1,membersSummary:s.displayName,notifyChannel:"站内 + 邮件"}),S=!1,ue=`已创建工作组「${P}」（授权空间：${L}）。`,ce())}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",p=>{p.preventDefault();const q=new FormData(p.currentTarget);U=String(q.get("displayName")??"").trim()||s.displayName,J=String(q.get("jobTitle")??"").trim()||J,ne=String(q.get("phone")??"").trim()||ne,ue=`已更新个人资料：${U}（${J}）· 告警短信接收号 ${ne}。`,ce()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",l()}),e.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(s,null,2)),se=!0,ce(),window.setTimeout(()=>{se=!1,ce()},1600)}catch{}}),e.querySelectorAll("[data-switch-role]").forEach(p=>{p.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const q=await t.switchDemoRole(p.dataset.switchRole);a(q)})}),e.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{ge=!ge,ce()}),e.querySelector("[data-member-search]")?.addEventListener("input",p=>{const q=p.currentTarget,P=q.selectionStart??q.value.length;G=q.value,ce();const $=e.querySelector("[data-member-search]");$&&($.focus(),$.setSelectionRange(P,P))}),e.querySelector("[data-role-filter]")?.addEventListener("change",p=>{D=p.currentTarget.value,ce()}),e.querySelectorAll("[data-audit-filter]").forEach(p=>{p.addEventListener("click",()=>{ie=p.dataset.auditFilter??"all",ce()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",p=>{H=p.currentTarget.value??"all",ce()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async p=>{p.preventDefault(),Z="";const q=new FormData(p.currentTarget);try{await t.inviteOrgMember(String(q.get("email")??""),String(q.get("role"))),ge=!1,await de()}catch(P){Z=P instanceof Error?P.message:String(P),ce()}})}ce()}let st={level:"floor",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId};function Ge(){return st}function ot(e){return st=e,st}function Ce(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ht(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面"))return 999;const s=t.match(/(-?\d+)/);if(!s)return 0;const a=Number(s[1]);return t.startsWith("B")?-Math.abs(a):a}function Zt(e){if(e==="all")return{level:"all-projects"};const t=e.split(":");return t[0]==="project"&&t[1]?{level:"project",projectId:t[1]}:t[0]==="building"&&t[1]&&t[2]?{level:"building",projectId:t[1],buildingId:t[2]}:t[0]==="floor"&&t[1]&&t[2]&&t[3]?{level:"floor",projectId:t[1],buildingId:t[2],floorId:t[3]}:{level:"project",projectId:g.projectId}}function Ht(e,t,s){return s==="project"?e.level==="all-projects"?{level:"project",projectId:t.projects[0]?.id??g.projectId}:{level:"project",projectId:e.projectId}:s==="building"&&e.level==="floor"?{level:"building",projectId:e.projectId,buildingId:e.buildingId}:e}function Ke(e){const{tree:t,session:s,isOpen:a,searchKeyword:l}=e,r=e.maxGranularity??"floor",F=e.activeAlarmCount??0,C=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null,O=t.floors.filter(P=>s.scope.allowedFloorIds.includes(P.id)),G=C||t.projects.length<=1&&t.buildings.length<=1&&O.length<=1?"floors-only":t.projects.length>1?"multi-project":t.buildings.length>1?"single-project-multi-building":"single-building",D=G==="multi-project"&&r!=="project",ie=G==="multi-project"||G==="single-project-multi-building",H=G!=="floors-only"&&r!=="project",ge=r==="project"&&t.projects.length<=1||G==="floors-only"&&O.length<=1,S=Ht(e.scope??st,t,r),se=S.level==="all-projects"?null:t.projects.find(P=>P.id===S.projectId)??t.projects[0],U=S.level==="building"||S.level==="floor"?t.buildings.find(P=>P.id===S.buildingId):null,J=S.level==="floor"?t.floors.find(P=>P.id===S.floorId):null,ne=[];if(S.level==="all-projects")ne.push(`全部项目（${t.projects.length}）`);else if(S.level==="project")ne.push(Ce(se?.name??"广实2号园"));else if(S.level==="building")se&&ne.push(`<span class="pacom-path-muted">${Ce(se.name)}</span>`),ne.push(Ce(U?.name??"E栋"));else{se&&G!=="floors-only"&&ne.push(`<span class="pacom-path-muted">${Ce(se.name)}</span>`),U&&H&&ne.push(`<span class="pacom-path-muted">${Ce(U.name)}</span>`);const P=!H&&U?`${U.name} ${J?.name??"7F"}`:J?.name??"7F";ne.push(Ce(P))}const ue='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',Z=ge?`<span class="pacom-path-trigger is-static">${ne.join(ue)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${a}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${ne.join(ue)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${he("chevron-down",12)}</span>
      </button>`;if(!a||ge)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${Z}</div>`;const de=l.trim().toLowerCase(),ce=S.level==="all-projects"?t.projects[0]?.id??g.projectId:S.projectId,be=S.level==="building"||S.level==="floor"?S.buildingId:t.buildings.find(P=>P.projectId===ce)?.id??g.buildingId,xe=t.projects.filter(P=>!de||P.name.toLowerCase().includes(de)),T=t.buildings.filter(P=>P.projectId===ce&&(!de||P.name.toLowerCase().includes(de))),M=[...t.floors.filter(P=>P.buildingId===be)].sort((P,$)=>ht($.name)-ht(P.name)).filter(P=>!de||P.name.toLowerCase().includes(de)),z=r==="project"||t.projects.length>1,p=r!=="project"&&ie,q=r==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${Z}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${he("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${Ce(l)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${he("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${z?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${D?`<button type="button" class="pacom-space-pop-item ${S.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${t.projects.length}）</span>
                        ${S.level==="all-projects"?he("check",14):""}
                      </button>`:""}
                ${xe.map(P=>{const $=S.level==="project"&&S.projectId===P.id;return`<button type="button" class="pacom-space-pop-item ${$?"is-active":""}" data-global-space-pick="project:${Ce(P.id)}">
                      <span>${Ce(P.name)}</span>
                      ${$?he("check",14):he("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${p?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ce(t.projects.find(P=>P.id===ce)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${S.level==="project"?"is-active":""}" data-global-space-pick="project:${Ce(ce)}">
                  <span>全园区</span>
                  ${S.level==="project"?he("check",14):""}
                </button>
                ${T.map(P=>{const $=S.level==="building"&&S.buildingId===P.id;return`<button type="button" class="pacom-space-pop-item ${$?"is-active":""}" data-global-space-pick="building:${Ce(P.projectId)}:${Ce(P.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ce(P.name)}</span>
                        ${P.id===g.buildingId&&F>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${$?he("check",14):he("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${q?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ce(t.buildings.find(P=>P.id===be)?.name??"楼宇")} · 楼层</div>
                ${H?`<button type="button" class="pacom-space-pop-item ${S.level==="building"&&S.buildingId===be?"is-active":""}" data-global-space-pick="building:${Ce(ce)}:${Ce(be)}">
                        <span>整栋</span>
                        ${S.level==="building"&&S.buildingId===be?he("check",14):""}
                      </button>`:""}
                ${M.map(P=>{const $=s.scope.allowedFloorIds.includes(P.id),L=S.level==="floor"&&S.floorId===P.id,u=P.id===g.floorId&&F>0;return`<button type="button" class="pacom-space-pop-item ${L?"is-active":""}" style="${$?"":"opacity:0.5;"}" data-global-space-pick="floor:${Ce(ce)}:${Ce(be)}:${Ce(P.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ce(P.name)}</span>
                        ${u?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${L?he("check",14):$?P.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function Ye(e,t){e.querySelectorAll("[data-global-space-toggle]").forEach(a=>{a.addEventListener("click",l=>{l.stopPropagation(),t.onToggle()})}),e.querySelector("[data-global-space-search]")?.addEventListener("input",a=>{t.onSearch(a.currentTarget.value)}),e.querySelectorAll("[data-global-space-pick]").forEach(a=>{a.addEventListener("click",l=>{l.stopPropagation();const r=a.dataset.globalSpacePick;if(!r)return;const F=ot(Zt(r));t.onPick(F)})})}const He={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Wt={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Gt={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Kt(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Yt(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function ct(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function Xt(e,t,s){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),l=a.get("alarm"),r=a.get("wo");let F=await t.getSpatialTree(),C=Ge(),O=!1,G="",D=[],ie=[],H=[],ge=r?"workorders":"alarms",S="all",se="all",U="all",J="impact",ne=!1,ue="",Z=l,de=r,ce=null,be=null,xe="resolved";const T=new Set,M=new Map,z=new Map,p=new Map,q=new Map;let P="",$="";function L(ee){const le=q.get(ee.id);if(le)return le;const i=ee.id.match(/(\d+)$/),h=`WO-2026-${i?i[1]:ee.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,oe={estCost:"¥ 450",actualCost:ee.status==="closed"?"¥ 380":"--",cmmsNo:h,assigneeGroup:"暖通运维组",tasks:[{id:`${ee.id}-t1`,label:"核查设备供电与现场指示灯状态",done:ee.status!=="open"},{id:`${ee.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:ee.status==="resolved"||ee.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:ee.createdAt?ee.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${h}）`}]};return q.set(ee.id,oe),oe}async function u(){[D,ie,H]=await Promise.all([t.listAlarms(g.floorId),t.listWorkOrders(g.floorId),t.getFloorDevices(g.floorId).catch(()=>[])]),ie.forEach(ee=>L(ee)),re()}function E(ee){if(!ee)return{name:"楼层通用",zone:"E7F",dev:null};const le=H.find(i=>i.id===ee)??null;return le?{name:le.name,zone:(le.logicalZoneId?Gt[le.logicalZoneId]:void 0)??"E7F",dev:le}:{name:ee,zone:"E7F",dev:null}}function fe(ee){const le=E(ee.deviceId).dev;le&&le.connectivity==="offline"?p.set(ee.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${le.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):p.set(ee.id,{verdict:"pass",summary:`自检通过（PASS）：「${le?.name??ee.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),Z=ee.id,re()}function re(){const ee=D.filter(m=>m.status==="active"&&!M.has(m.id)),le=ie.filter(m=>!L(m).cancelled&&(m.status==="open"||m.status==="assigned"||m.status==="in_progress")),i=D.filter(m=>m.status!=="active").length+z.size,h=0,oe=M.size,we=ue.trim().toLowerCase(),Me=D.filter(m=>{const b=M.has(m.id);if(S==="snoozed"){if(!b)return!1}else if(S==="active"){if(m.status!=="active"||b)return!1}else if(S==="acknowledged"){if(m.status!=="acknowledged")return!1}else if(b)return!1;if(U!=="all"&&m.severity!==U)return!1;if(!we)return!0;const A=E(m.deviceId);return`${m.title} ${m.message} ${A.name} ${A.zone} ${m.deviceId}`.toLowerCase().includes(we)}),Le=new Map;for(const m of Me){const b=`${m.title} ${m.message}`.toLowerCase(),A=b.includes("离线")||b.includes("modbus")||b.includes("通信"),K=ne?A?"root-gateway-modbus":m.deviceId:m.id,ye=A?"根因：E7F 主控网关通信链路":`根因：${E(m.deviceId).name}`,Ee=Le.get(K)??{rootLabel:ye,items:[]};Ee.items.push(m),Le.set(K,Ee)}const Te=Array.from(Le.values());J==="impact"&&Te.sort((m,b)=>ct(b.items[0]).costYuan-ct(m.items[0]).costYuan);const De=ie.filter(m=>{const b=L(m);if(se==="cancelled"){if(!b.cancelled)return!1}else if(b.cancelled||se==="open"&&(m.status==="resolved"||m.status==="closed")||se==="resolved"&&m.status!=="resolved"||se==="closed"&&m.status!=="closed")return!1;if(!we)return!0;const A=E(m.deviceId);return`${m.title} ${m.description} ${m.id} ${b.cmmsNo} ${A.name}`.toLowerCase().includes(we)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Ke({tree:F,session:s,scope:C,activeAlarmCount:ee.length,isOpen:O,searchKeyword:G})}
            </div>

            <div class="pacom-header-meta">
              ${ge==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${ne}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${s.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${s.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${he("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ge==="alarms"}" data-main-tab="alarms">实时告警（${D.length-oe}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ge==="workorders"}" data-main-tab="workorders">运维工单（${ie.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ge==="alarms"&&S==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${ee.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ge==="workorders"&&se==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${le.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ge==="alarms"&&S==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${i}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${h}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${P?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${P}</span></div>`:""}
          ${$?`<div class="pacom-alert-banner">${$}</div>`:""}

          ${ge==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${ue}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${U==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${U==="critical"?"selected":""}>严重</option>
                      <option value="major" ${U==="major"?"selected":""}>重要</option>
                      <option value="minor" ${U==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${J==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${J==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${S==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${S==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${S==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${S==="snoozed"}" data-status-pill="snoozed">已忽略（${oe}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${T.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${T.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${Te.length} 项</span>
                  </div>
                </div>
                ${Te.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${Te.map(m=>{const b=m.items[0],A=Wt[b.severity]??{label:b.severity,cls:"pacom-badge--neutral"},K=E(b.deviceId),ye=Yt(b),Ee=ct(b),_e=Z===b.id,Re=M.get(b.id),Pe=!!Re,Ve=T.has(b.id),je=p.get(b.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${b.id}" data-check-alarm="${b.id}" ${Ve?"checked":""} ${b.status!=="active"||Pe?"disabled":""} aria-label="选择 ${b.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${A.cls}">${A.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${b.title}</span>
                                      ${ne?`<span class="pacom-badge pacom-badge--accent">${m.rootLabel}${m.items.length>1?` · 影响 ${m.items.length} 项`:""}</span>`:""}
                                      ${je?`<span class="pacom-badge ${je.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${je.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${b.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${K.name}</div>
                                    <div class="pacom-row-sub">${K.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${Ee.costLabel}</div>
                                    <div class="pacom-row-sub">${Ee.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${ye.duration}</div>
                                    <div class="pacom-row-sub" style="color:${ye.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${ye.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${Pe?"pacom-badge--neutral":b.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Pe?`忽略 ${Re?.duration}`:b.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Pe?`<button class="pacom-btn" data-unsnooze="${b.id}">恢复监控</button>`:`
                                            ${b.status==="active"?`<button class="pacom-btn" data-mark-actioned="${b.id}" ${s.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${b.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${b.id}" ${s.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${b.id}">${_e?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${_e?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${Kt(b)}
                                            </div>
                                            ${Re?`<div class="pacom-info-banner">忽略周期：${Re.duration} · 原因备注：${Re.reason}</div>`:""}
                                            ${je?`
                                                <div class="pacom-banner ${je.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${je.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${je.steps.map(Ie=>`<span>${Ie}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${b.id}</code> · 设备编号 <code>${b.deviceId}</code> · 关联工单 ${b.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${b.id}">单机自检（FTT）</button>
                                              ${!Pe&&b.status==="active"?`<button class="pacom-btn" data-open-snooze="${b.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${b.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${b.deviceId}">定位设备 →</button>
                                            </div>
                                            ${ce===b.id?`
                                                <form data-snooze-form="${b.id}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
              ${(()=>{const m=de?ie.find(b=>b.id===de)??null:null;if(m){const b=E(m.deviceId),A=L(m),K=!!(A.cancelled||m.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${m.id}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${m.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${A.cmmsNo}</span>
                        ${A.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${m.id}" data-wo-status="${m.id}" aria-label="更新工单状态" ${K?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(ye=>`<option value="${ye}" ${m.status===ye?"selected":""}>${He[ye]}</option>`).join("")}
                          <option value="cancelled" ${A.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${be===m.id?`
                        <form data-close-wo-form="${m.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${He[xe]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${A.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${A.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${A.actualCost==="--"?"":A.actualCost}" />
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
                          <div class="pacom-row-sub">${m.description}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${A.tasks.map(ye=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${ye.id}" data-wo-task="${m.id}" data-task-id="${ye.id}" ${ye.done?"checked":""} ${K?"disabled":""} />
                                    <span>${ye.label}</span>
                                  </span>
                                  ${ye.unit?`<span class="pacom-row-sub">实测：${ye.reading??"--"} ${ye.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${A.history.map(ye=>`<span>• <span class="pacom-row-sub">${ye.at}</span> — ${ye.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${m.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${A.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${b.name}（${b.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${A.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${A.estCost} / 实际 ${A.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${A.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${A.solution??"待完单填写"}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${m.deviceId}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${m.deviceId}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${ue}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${se==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${se==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${se==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${se==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${se==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${De.length} 条工单</span>
                  </div>
                  ${De.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${De.map(b=>{const A=E(b.deviceId),K=L(b),ye=!!(K.cancelled||b.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${b.title}</span>
                                        ${K.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${b.description} · <code>${b.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${A.name}</div>
                                      <div class="pacom-row-sub">${A.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${K.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${K.assigneeGroup} · 预估 ${K.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${b.id}" data-wo-status="${b.id}" aria-label="更新工单状态" ${ye?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Ee=>`<option value="${Ee}" ${b.status===Ee?"selected":""}>${He[Ee]}</option>`).join("")}
                                          <option value="cancelled" ${K.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${b.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${be===b.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${b.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${He[xe]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${K.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${K.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${K.actualCost==="--"?"":K.actualCost}" />
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
    `,Ye(e,{onToggle:()=>{O=!O,re(),O&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:m=>{G=m,re();const b=e.querySelector("[data-global-space-search]");b&&(b.focus(),b.setSelectionRange(m.length,m.length))},onPick:m=>{C=m,O=!1,re()}}),e.querySelectorAll("[data-main-tab]").forEach(m=>{m.addEventListener("click",()=>{ge=m.dataset.mainTab??"alarms",P="",re()})}),e.querySelectorAll("[data-kpi-filter]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.kpiFilter;P="",b==="workorders"?(ge="workorders",se=se==="open"?"all":"open"):(b==="active"||b==="acknowledged")&&(ge="alarms",S=S===b?"all":b),re()})}),e.querySelectorAll("[data-status-pill]").forEach(m=>{m.addEventListener("click",()=>{S=m.dataset.statusPill??"all",re()})}),e.querySelectorAll("[data-wo-pill]").forEach(m=>{m.addEventListener("click",()=>{se=m.dataset.woPill??"all",re()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{P="",u()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{ne=!ne,re()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",m=>{U=m.currentTarget.value,re()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",m=>{J=m.currentTarget.value??"impact",re()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",m=>{const b=m.currentTarget,A=b.selectionStart??b.value.length;ue=b.value,re();const K=e.querySelector("[data-alarm-search]");K&&(K.focus(),K.setSelectionRange(A,A))}),e.querySelectorAll("[data-check-alarm]").forEach(m=>{m.addEventListener("change",()=>{const b=m.dataset.checkAlarm;b&&(m.checked?T.add(b):T.delete(b),re())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{$="";const m=Array.from(T);try{for(const b of m)await t.acknowledgeAlarm(b,"告警中心批量确认"),z.set(b,"批量确认处置");T.clear(),P=`已批量确认 ${m.length} 条告警，未来 24 小时持续校验无复发。`,await u()}catch(b){$=b instanceof Error?b.message:String(b),re()}}),e.querySelectorAll("[data-expand-alarm]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.expandAlarm??null;Z=Z===b?null:b,ce=null,re()})}),e.querySelectorAll("[data-expand-wo]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.expandWo??null;de=de===b?null:b,re()})}),e.querySelectorAll("[data-run-ftt]").forEach(m=>{m.addEventListener("click",()=>{const b=D.find(A=>A.id===m.dataset.runFtt);b&&fe(b)})}),e.querySelectorAll("[data-open-snooze]").forEach(m=>{m.addEventListener("click",()=>{ce=m.dataset.openSnooze??null,re()})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{ce=null,re()}),e.querySelectorAll("[data-snooze-form]").forEach(m=>{m.addEventListener("submit",b=>{b.preventDefault();const A=m.dataset.snoozeForm;if(!A)return;const K=new FormData(m),ye=String(K.get("duration")??"24h"),Ee=String(K.get("reason")??"").trim()||"现场核查中";M.set(A,{duration:ye,reason:Ee}),T.delete(A),ce=null,P=`已限时忽略该告警（${ye} · ${Ee}），可在「已忽略」页签中随时恢复。`,re()})}),e.querySelectorAll("[data-unsnooze]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.unsnooze;b&&(M.delete(b),P="已恢复该告警的实时监控。",re())})}),e.querySelectorAll("[data-go-ts]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(b)}`})}),e.querySelectorAll("[data-locate-home]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.locateHome??"";window.location.hash=b?`#home?device=${encodeURIComponent(b)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(m=>{m.addEventListener("click",async()=>{$="";const b=m.dataset.markActioned;try{await t.acknowledgeAlarm(b,"现场自处理完成（Mark Actioned）"),z.set(b,"现场自处理完成"),T.delete(b),P="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await u()}catch(A){$=A instanceof Error?A.message:String(A),re()}})}),e.querySelectorAll("[data-to-wo]").forEach(m=>{m.addEventListener("click",async()=>{$="";const b=D.find(A=>A.id===m.dataset.toWo);if(b)try{await t.createWorkOrder({floorId:b.floorId,deviceId:b.deviceId,alarmId:b.id,title:`处置告警：${b.title}`,description:b.message}),P=`已将「${b.title}」转为运维工单并同步 CMMS。`,await u()}catch(A){$=A instanceof Error?A.message:String(A),re()}})}),e.querySelectorAll("[data-wo-status]").forEach(m=>{m.addEventListener("change",async()=>{const b=m.dataset.woStatus,A=m.value;if($="",A==="cancelled"){const K=ie.find(ye=>ye.id===b);if(K){const ye=L(K);ye.cancelled=!0,ye.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),P="工单已移入「已取消」分类并锁定编辑。",re()}return}if(A==="resolved"||A==="closed"){be=b,xe=A,re();return}try{await t.updateWorkOrderStatus(b,A);const K=ie.find(ye=>ye.id===b);K&&L(K).history.unshift({at:"刚刚",text:`状态变更为「${He[A]}」`}),P="工单状态已更新并写入审计日志。",await u()}catch(K){$=K instanceof Error?K.message:String(K),await u()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{be=null,re()}),e.querySelectorAll("[data-close-wo-form]").forEach(m=>{m.addEventListener("submit",async b=>{b.preventDefault();const A=m.dataset.closeWoForm,K=new FormData(m),ye=String(K.get("cause")??"").trim(),Ee=String(K.get("solution")??"").trim(),_e=String(K.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(A,xe);const Re=ie.find(Pe=>Pe.id===A);if(Re){const Pe=L(Re);Pe.cause=ye,Pe.solution=Ee,_e&&(Pe.actualCost=_e),Pe.history.unshift({at:"刚刚",text:`流转至「${He[xe]}」· 根因：${ye}`})}be=null,de=A,P=`工单已更新为「${He[xe]}」，根因与方案已沉淀归档。`,await u()}catch(Re){$=Re instanceof Error?Re.message:String(Re),re()}})}),e.querySelectorAll("[data-wo-task]").forEach(m=>{m.addEventListener("change",()=>{const b=ie.find(ye=>ye.id===m.dataset.woTask);if(!b)return;const K=L(b).tasks.find(ye=>ye.id===m.dataset.taskId);K&&(K.done=m.checked),re()})})}await u()}const Jt=he("chevron-down",12),Qe=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],yt=[{id:g.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:g.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:g.projectId,label:"广实2号园（全园区）",factor:18.2}],Qt={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},ea=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],Ze=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function rt(e,t=""){const s=(e??"").trim().toLowerCase();return!(!s||s.includes("%")||s.includes("°c")||s.includes("ppm")||s.includes("ms")||s.includes("m²")||s.includes("/m2")||s.includes("db")||s.includes("lx")||t.includes("率")||t.includes("均")||t.includes("强度")||t.includes("延迟"))}function et(e,t){const s=e*t;return Math.abs(s)>=10?Math.round(s):Math.round(s*10)/10}function ta(e,t){const s=Number(String(e).replaceAll(",","")),a=t??"";return Number.isFinite(s)?a==="kWh"&&Math.abs(s)>=1e4?{value:(s/1e3).toFixed(1),unit:"MWh",title:`精确值：${s.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(s)?s.toLocaleString("en-US"):s.toLocaleString("en-US",{maximumFractionDigits:1}),unit:a,title:`${s.toLocaleString("en-US")} ${a}`.trim()}:{value:e,unit:a,title:`${e} ${a}`.trim()}}function aa(e,t){if(t===1)return e;const s=rt(e.unit);return{...e,kpis:e.kpis.map(a=>{const l=Number(String(a.value).replaceAll(",",""));return!Number.isFinite(l)||!rt(a.unit,a.label)?a:{...a,value:String(et(l,t))}}),series:s?e.series.map(a=>({...a,value:et(a.value,t),...typeof a.baseline=="number"?{baseline:et(a.baseline,t)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(a=>rt(a.unit)?{...a,value:et(a.value,t)}:a)}}function sa(e,t){const s=Math.max(...e.series.map(H=>Math.max(H.value,H.baseline??0)),1),a=46,l=34,r=36,F=Math.max(e.series.length*(a+l)+r*2,620),C=228,O=184,G=132,D=[0,.25,.5,.75,1].map(H=>{const ge=Math.round(O-H*G);return`<line x1="${r-8}" y1="${ge}" x2="${F-18}" y2="${ge}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${H===0?"0":"3 3"}" />`}).join(""),ie=e.series.map((H,ge)=>{const S=r+ge*(a+l),se=Math.max(8,Math.round(H.value/s*G)),U=O-se,J=typeof H.baseline=="number"&&H.value>H.baseline*1.08,ne=J?`<rect x="${S-8}" y="34" width="${a+16}" height="${O-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",ue=typeof H.baseline=="number"?`<line x1="${S-5}" y1="${Math.round(O-H.baseline/s*G)}" x2="${S+a+5}" y2="${Math.round(O-H.baseline/s*G)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",Z=t&&(J||ge===1)?`<g><title>${J?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${S+a/2}" cy="18" r="7" fill="${J?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${S+a/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${J?"!":"S"}</text></g>`:"",de=H.value>=1e4?`${(H.value/1e3).toFixed(1)}k`:H.value.toLocaleString("en-US");return`
        ${ne}
        ${ue}
        ${Z}
        <g>
          <title>${H.label}：实测 ${H.value.toLocaleString("en-US")} ${e.unit}${H.baseline!==void 0?` / 基线 ${H.baseline.toLocaleString("en-US")} ${e.unit}`:""}</title>
          <rect x="${S}" y="${U}" width="${a}" height="${se}" rx="7" fill="${J?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${S+a/2}" y="${U-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${de}</text>
        <text x="${S+a/2}" y="${O+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${H.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${F} ${C}" style="width:100%; height:232px; display:block;" role="img" aria-label="${e.category} 趋势图">
      ${D}
      ${ie}
    </svg>
  `}function oa(e,t){const s=e.connectivity==="offline";if(e.category==="hvac"){const a=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:s?[23.8,24,24.1,null,null,null,null,null]:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a],offline:s,colorIdx:t},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:s?[24,24,24,null,null,null,null,null]:[a,a,a,a,a,a,a,a],offline:s,colorIdx:t+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:s?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:s,colorIdx:t+2}]}if(e.category==="lighting"){const a=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)],offline:s,colorIdx:t},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:s,colorIdx:t+1}]}if(e.category==="sensor"){const a=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a],offline:s,colorIdx:t},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:s,colorIdx:t+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:s,colorIdx:t+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:s,colorIdx:t}]}function na(e){const t=e.points.filter(C=>typeof C=="number");if(!t.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const s=Math.min(...t),a=Math.max(...t),l=t.reduce((C,O)=>C+O,0)/t.length,r=e.points[e.points.length-1],F=C=>Math.abs(C)<100&&!Number.isInteger(C)?C.toFixed(1):Math.round(C).toString();return{min:F(s),avg:l.toFixed(Math.abs(l)<100?1:0),max:F(a),curr:typeof r=="number"?F(r):"离线"}}function la(e,t,s){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="pacom-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const l=(F,C)=>{const U=[];for(const T of F)for(const M of T.points)typeof M=="number"&&U.push(M);const J=U.length?Math.min(...U)*.92:0,ne=U.length?Math.max(...U)*1.08:100,ue=Math.max(ne-J,1),Z=[0,.5,1].map(T=>{const M=Math.round(26+106*(1-T)),z=(J+ue*T).toFixed(ue<15?1:0);return`
          <line x1="44" y1="${M}" x2="662" y2="${M}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${T===0?"0":"3 3"}" />
          <text x="38" y="${M+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${z}</text>
        `}).join(""),de=a.map((T,M)=>`<text x="${44+M/(a.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${T}</text>`).join(""),ce=F.map((T,M)=>{const z=Ze[(T.colorIdx+M)%Ze.length],p=T.points,q=[];let P=44,$=26+106/2,L=!1;p.forEach((E,fe)=>{const re=44+fe/(p.length-1)*618;if(typeof E=="number"){const ee=26+106*(1-(E-J)/ue);q.push(`${re.toFixed(1)},${ee.toFixed(1)}`),P=re,$=ee}else L=!0});const u=s?p.map((E,fe)=>{if(typeof E!="number")return null;const re=44+fe/(p.length-1)*618,le=26+106*(1-(E*.96-J)/ue);return`${re.toFixed(1)},${le.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${u?`<polyline fill="none" stroke="${z}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${u}" />`:""}
          ${q.length?`<polyline fill="none" stroke="${z}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${q.join(" ")}" />`:""}
          ${L?`<line x1="${P.toFixed(1)}" y1="${$.toFixed(1)}" x2="662" y2="${$.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${$-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),be=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,xe=F.map((T,M)=>{const z=Ze[(T.colorIdx+M)%Ze.length],p=na(T);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${z};"></span>${T.deviceName} · ${T.label}</span></td>
            <td><strong>${p.curr}</strong> <span class="pacom-row-sub">${T.unit}</span></td>
            <td>${p.min} <span class="pacom-row-sub">${T.unit}</span></td>
            <td>${p.avg} <span class="pacom-row-sub">${T.unit}</span></td>
            <td>${p.max} <span class="pacom-row-sub">${T.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${C}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${F.map((T,M)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${Ze[(T.colorIdx+M)%Ze.length]};"></span>${T.deviceName}·${T.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${Z}
          ${de}
          ${be}
          ${ce}
        </svg>
        <div class="pacom-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="pacom-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${xe}</tbody>
          </table>
        </div>
      </div>
    `};if(t==="shared")return l(e,"单图叠合对比（Shared）");const r=new Map;for(const F of e){const C=r.get(F.unit)??[];C.push(F),r.set(F.unit,C)}return Array.from(r.entries()).map(([F,C])=>l(C,`按单位分组泳道（${F}）`)).join("")}function ia(e){const t=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(r=>[r.label,String(r.value),r.baseline!==void 0?String(r.baseline):""].join(","))],s=new Blob([`\uFEFF${t.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(s),l=document.createElement("a");l.href=a,l.download=`pacom-${e.category}-${e.range}.csv`,l.click(),URL.revokeObjectURL(a)}function ca(e){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],s=["时间",...e.map(C=>`${C.deviceName}·${C.label}(${C.unit})`)].join(","),a=t.map((C,O)=>[C,...e.map(G=>String(G.points[O]??"No Data"))].join(",")),l=new Blob([`\uFEFF${[s,...a].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(l),F=document.createElement("a");F.href=r,F.download="pacom-timeseries-export.csv",F.click(),URL.revokeObjectURL(r)}async function ra(e,t,s){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),l=a.get("tab"),r=a.get("cat"),F=a.get("device"),C=a.get("points"),O=a.get("mode"),G=a.get("interval");let D=l==="timeseries"?"timeseries":r&&Qe.some(le=>le.id===r)?r:"energy",ie="7d",H="2026-11-16",ge="2026-11-23",S=Ge(),se=!1,U="",J=S.level==="all-projects"||S.level==="project"?g.projectId:S.level==="building"?g.buildingId:g.floorId,ne="chart",ue=!0,Z="breakdown",de=!1,ce=null;const[be,xe]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(g.floorId).catch(()=>[])]);let T=xe;const M=new Map,z=[];T.forEach((le,i)=>{const h=oa(le,i);M.set(le.id,h),z.push(...h)});let p=O==="shared"||O==="grouped"?O:"grouped",q=G==="15m"||G==="1h"||G==="1d"?G:"1h",P=!1;const $=[];if(C?C.split(",").forEach(le=>{z.some(i=>i.id===le)&&$.push(le)}):F&&M.has(F)&&(M.get(F)??[]).slice(0,2).forEach(le=>$.push(le.id)),!$.length){const le=T.find(oe=>oe.category==="hvac"),i=T.find(oe=>oe.category==="sensor"),h=T.find(oe=>oe.category==="lighting");le&&(M.get(le.id)??[]).slice(0,2).forEach(oe=>$.push(oe.id)),i&&(M.get(i.id)??[]).slice(0,1).forEach(oe=>$.push(oe.id)),h&&(M.get(h.id)??[]).slice(0,1).forEach(oe=>$.push(oe.id)),$.length||z.slice(0,3).forEach(oe=>$.push(oe.id))}const L=new Set($),u=new Set(T.filter((le,i)=>i<2||(M.get(le.id)??[]).some(h=>L.has(h.id))).map(le=>le.id)),E=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:z.filter(le=>le.pointKey==="temp"||le.pointKey==="setpoint"||le.pointKey==="co2").slice(0,4).map(le=>le.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:z.filter(le=>le.pointKey==="dimming"||le.pointKey==="power").slice(0,4).map(le=>le.id),mode:"grouped",interval:"15m"}];let fe="";async function re(){const le=D==="timeseries"?"energy":D,i=ie==="custom"?"30d":ie;ce=await t.getAnalysisReport(le,i,g.floorId),ee()}function ee(){if(!ce)return;const le=D==="timeseries",i=D==="timeseries"?"energy":D,h=Qe.find(j=>j.id===i)??Qe[0],oe=yt.find(j=>j.id===J)??yt[0],we=aa(ce,oe.factor),Me=we.zoneBreakdown.filter(j=>j.status==="warning"),Le=Qt[i],Te=Math.max(...we.zoneBreakdown.map(j=>j.value),1),De=z.filter(j=>L.has(j.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${Ke({tree:be,session:s,scope:S,isOpen:se,searchKeyword:U})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${ie==="today"?"selected":""}>今日</option>
                <option value="7d" ${ie==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${ie==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${ie==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${le?"":`<button class="pacom-btn ${de?"pacom-btn--primary":""}" data-toggle-canvas="1">${de?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${Qe.map(j=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D===j.id}" data-cat="${j.id}">${j.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${ie==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${H}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${ge}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${le?`
            <div class="pacom-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${De.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${E.map(j=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${j.id}">${he("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${j.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${T.map(j=>{const m=M.get(j.id)??[],b=u.has(j.id),A=m.filter(K=>L.has(K.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${j.id}" style="cursor:pointer; justify-content:space-between;" title="${j.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${b?"0deg":"-90deg"}); opacity:0.65;">${Jt}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${j.name}</div>
                                <div class="pacom-row-sub">${m.length} 个测点 · ${j.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${A>0?`<span class="pacom-badge pacom-badge--accent">${A}</span>`:""}
                          </button>
                          ${b?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${m.map(K=>{const ye=L.has(K.id),Ee=Ze[K.colorIdx%Ze.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${ye?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${K.id}" data-ts-point="${K.id}" ${ye?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${Ee};"></span>
                                            <span style="color:var(--pacom-text-primary);">${K.label}</span>
                                          </span>
                                          <span class="pacom-row-sub">${K.unit}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="pacom-subnav-main" style="padding:2px 4px 24px;">
                ${fe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${fe}</span></div>`:""}
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${he("clock",12)} 排程(S) · ${he("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${P}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${q==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${q==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${q==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${p==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${p==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${la(De,p,P)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="pacom-kpi-strip" role="region" aria-label="核心统计指标">
                ${we.kpis.map(j=>{const m=ta(j.value,j.unit);return`
                      <div class="pacom-kpi-cell" title="${m.title}">
                        <span class="pacom-kpi-label">${j.label}</span>
                        <div class="pacom-kpi-value">
                          <span>${m.value}</span>
                          ${m.unit?`<span class="pacom-kpi-unit">${m.unit}</span>`:""}
                        </div>
                        <span class="pacom-kpi-delta">${j.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="pacom-section">
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">${h?.label??"趋势"}趋势（${we.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${oe.label} · 更新于 ${we.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${ue}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${ne==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${ne==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${Me.length>0?`关注：${Me.map(j=>j.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${h?.desc??"空间运行洞察"} · ${Le.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${ne==="chart"?sa(we,ue):`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${we.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${we.series.map(j=>{const m=typeof j.baseline=="number"&&j.value>j.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${j.label}</strong></td>
                                    <td>${j.value.toLocaleString("en-US")}</td>
                                    <td>${j.baseline!==void 0?j.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${m?"pacom-badge--warning":"pacom-badge--online"}">${m?"超基线":"正常"}</span></td>
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
                    <span class="pacom-row-sub">${we.zoneBreakdown.length} 个功能区</span>
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
                          ${we.zoneBreakdown.map(j=>{const m=Math.max(8,Math.round(j.value/Te*100));return`
                                <tr>
                                  <td style="font-weight:500;">${j.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${m}%; height:100%; border-radius:999px; background:${j.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${j.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${j.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${j.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${j.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="pacom-section-title">${de?"E7F 空间对照预览":i==="energy"&&Z==="load"?"峰谷负荷分布（Load Profile）":Le.title}</h2>
                    ${!de&&i==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${Z==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${Z==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${de?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${de?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${i==="environment"?`
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
                        ${(i==="energy"&&Z==="load"?ea:Le.items).map(j=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${j.name}</span>
                                <span class="pacom-row-sub">${j.detail} · <strong style="color:var(--pacom-text-primary);">${j.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,j.pct)}%; height:100%; border-radius:999px; background:${j.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,Ye(e,{onToggle:()=>{se=!se,ee(),se&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:j=>{U=j,ee();const m=e.querySelector("[data-global-space-search]");m&&(m.focus(),m.setSelectionRange(j.length,j.length))},onPick:j=>{S=j,J=j.level==="all-projects"||j.level==="project"?g.projectId:j.level==="building"?g.buildingId:g.floorId,se=!1,ee()}}),e.querySelectorAll("[data-cat]").forEach(j=>{j.addEventListener("click",()=>{D=j.dataset.cat??"energy",fe="",D==="timeseries"?ee():re()})}),e.querySelector("[data-range-select]")?.addEventListener("change",j=>{ie=j.currentTarget.value??"7d",re()}),e.querySelector("[data-custom-start]")?.addEventListener("change",j=>{H=j.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",j=>{ge=j.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(j=>{j.addEventListener("click",()=>{ne=j.dataset.chartMode??"chart",ee()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{ue=!ue,ee()}),e.querySelectorAll("[data-energy-right]").forEach(j=>{j.addEventListener("click",()=>{Z=j.dataset.energyRight??"breakdown",ee()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{le?ca(De):ia(we)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{de=!de,ee()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(j=>{j.addEventListener("click",()=>{const m=j.dataset.tsExpand;m&&(u.has(m)?u.delete(m):u.add(m),ee())})}),e.querySelectorAll("[data-ts-point]").forEach(j=>{j.addEventListener("change",()=>{const m=j.dataset.tsPoint;m&&(j.checked?L.add(m):L.delete(m),fe="",ee())})}),e.querySelectorAll("[data-ts-mode]").forEach(j=>{j.addEventListener("click",()=>{p=j.dataset.tsMode??"grouped",ee()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",j=>{q=j.currentTarget.value??"1h",ee()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{P=!P,ee()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const m=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(L).join(","))}&mode=${p}&interval=${q}`,b=`${window.location.origin}${window.location.pathname}${m}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(b).catch(()=>{}),window.history.replaceState(null,"",m),fe=`已复制分享链接（含 ${L.size} 个测点、${p==="grouped"?"按单位分组":"单图叠合"}、${q} 粒度）。`,ee()}),e.querySelectorAll("[data-load-fav]").forEach(j=>{j.addEventListener("click",()=>{const m=E.find(b=>b.id===j.dataset.loadFav);m&&(L.clear(),m.pointIds.forEach(b=>{L.add(b);const A=b.split(":")[0];A&&u.add(A)}),p=m.mode,q=m.interval,fe=`已加载收藏视图「${m.name}」。`,ee())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(L.size===0)return;const j=`自定义对比 #${E.length+1}（${L.size} 测点）`;E.push({id:`fav-${Date.now()}`,name:j,pointIds:Array.from(L),mode:p,interval:q}),fe=`已保存当前时序配置为「${j}」。`,ee()})}await re()}const da={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},pa={frozen:"已冻结",draft:"草稿",delivered:"已交付"},dt={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},pt=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],$t=[{id:"doc-hvac-7f",floorId:g.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:g.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:g.floorId,name:"E7F_协议点位与蓝牙Mesh映射台账.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:g.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],ua={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function y(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function tt(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面"))return 999;const s=t.match(/(-?\d+)/);if(!s)return 0;const a=Number(s[1]);return t.startsWith("B")?-Math.abs(a):a}function wt(e){const t=e.toUpperCase();if(t.match(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/))return"RF";const a=t.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(a)return`B${Number(a[1])}`;const l=t.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return l?`${Number(l[1])}F`:null}function ut(e){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>typeof a.result=="string"?t(a.result):s(new Error("无法读取图片内容")),a.onerror=()=>s(new Error(`读取文件「${e.name}」失败`)),a.readAsDataURL(e)})}function ma(e){return e.category==="gateway"?e.name.includes("蓝牙")?"蓝牙适配器":"主控网关":e.category==="lighting"?e.name.includes("702")?"702 照明":e.name.slice(0,6):e.category==="hvac"?e.name.includes("VAV")?"VAV-02":e.name.includes("FCU")?"FCU-01":e.name.slice(0,6):e.category==="sensor"?"环境传感":e.name.slice(0,6)}function ga(e,t){const s=e.status!=="connected",a=t.filter(l=>l.hardwareBinding?.protocol===e.protocol);return a.length>0?a.map(l=>{const r=l.connectivity==="offline"||s;return{pointName:l.category==="hvac"?"送风温度 / 阀门开度":l.category==="lighting"?"回路开关 / 亮度反馈":l.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:l.name,value:r?"无上报":l.category==="hvac"?"23.4°C · 62%":l.category==="lighting"?"开启 · 80%":l.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:r?"46 分钟前":"12 秒前",quality:r?l.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${e.protocol.toUpperCase()} 采集通道汇总点`,deviceName:e.name,value:s?"采样延迟":"正常上报",interval:"60s",lastSeen:s?"38 分钟前":"9 秒前",quality:s?"delayed":"online"}]}async function va(e,t,s){const a=new URLSearchParams(window.location.hash.split("?")[1]??"").get("sec");let l=a==="floors"||a==="projects"?"project_config":a==="floorplan"||a==="devices"?"floorplan":a==="inventory"?"ledger":a==="connections"?"connections":"overview",r=a==="floors"?"floor_zones":"project_building",F="",C="all",O=Ge(),G=!1,D="",ie="device",H="all",ge="",S=!1,se=!1,U="mesh",J=1,ne=0,ue=0,Z=await t.getSpatialTree(),de=[],ce=[],be=[];const xe={...ua},T=[];let M=O.level==="all-projects"?Z.projects[0]?.id??g.projectId:O.projectId,z=O.level==="building"||O.level==="floor"?O.buildingId:Z.buildings.find(x=>x.projectId===M)?.id??Z.buildings[0]?.id??g.buildingId,p=O.level==="floor"?O.floorId:Z.floors.find(x=>x.buildingId===z&&x.id===g.floorId)?.id??Z.floors.find(x=>x.buildingId===z)?.id??g.floorId,q="all",P=!1,$=!1,L=!1,u=[],E=null,fe=null,re=new Set,ee=null,le=!1,i=!1,h=!1,oe=!1,we=!1,Me=null,Le=null,Te=null,De=3,j=!1,m=[],b=null,A="",K="";const ye=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),Ee=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],_e=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:g.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:g.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:g.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:g.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],Re=new Map;function Pe(){return Z}function Ve(){return Z.floors}function je(x){return[...Z.floors.filter(N=>N.buildingId===x)].sort((N,Q)=>tt(Q.name)-tt(N.name))}function Ie(){return Z.zones}function ze(x){return[...x===g.floorId?de:[],...T.filter(Q=>Q.floorId===x)]}function k(x){return x?Ie().find(N=>N.id===x)?.name.replace(/^7F\s*/,"")??x:"未分配功能区"}function Y(x){const N=Z.buildings.find(X=>X.id===x);if(!N)return;M=N.projectId,z=N.id;const Q=je(N.id);Q.some(X=>X.id===p)||(p=Q.find(X=>X.id===g.floorId)?.id??Q[0]?.id??""),O=ot(p?{level:"floor",projectId:N.projectId,buildingId:N.id,floorId:p}:{level:"building",projectId:N.projectId,buildingId:N.id}),ee=null,se=!1,i=!1,J=1,ne=0,ue=0}function R(x){p=x;const N=Ve().find(Q=>Q.id===x);if(N){z=N.buildingId;const Q=Z.buildings.find(X=>X.id===N.buildingId);Q&&(M=Q.projectId),O=ot({level:"floor",projectId:M,buildingId:N.buildingId,floorId:N.id})}ee=null,se=!1,i=!1,J=1,ne=0,ue=0}async function v(){K="";const[x,N,Q,X]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(g.floorId).catch(()=>[]),t.listConnections(M),t.listDeliveryBatches(g.floorId)]);Z=x,de=N,ce=Q,be=X,!Z.projects.some(c=>c.id===M)&&Z.projects[0]&&(M=Z.projects[0].id),Z.buildings.some(c=>c.id===z)||(z=Z.buildings.find(c=>c.projectId===M)?.id??Z.buildings[0]?.id??z);const o=je(z);o.some(c=>c.id===p)||(p=o.find(c=>c.id===g.floorId)?.id??o[0]?.id??"");const n=ze(p);ee&&!n.some(c=>c.id===ee)&&(ee=null,se=!1),le=n.find(c=>c.id===ee)?.physicalInstalled??!1,ae()}function w(){const x=e.querySelector('[data-role="dep-viewport"]');x&&(x.style.transform=`translate(${ne}px, ${ue}px) scale(${J})`);const N=e.querySelector('[data-role="dep-zoom-label"]');N&&(N.textContent=`${Math.round(J*100)}%`)}function W(x){K="",x.connectivity==="offline"?K=`单机回读自检未通过（FAIL）：「${x.name}」当前离线，请核查网关链路或中继覆盖。`:A=`单机回读自检通过（PASS）：「${x.name}」指令下发与状态回读一致，已安全复位。`,ae()}function pe(){K="";const x=ze(p),N=x.filter(n=>n.connectivity==="offline"),Q=x.length-N.length,X=new Date;b={ranAt:`${String(X.getHours()).padStart(2,"0")}:${String(X.getMinutes()).padStart(2,"0")}:${String(X.getSeconds()).padStart(2,"0")}`,total:x.length,passed:Q,failed:N.length,failedNames:N.map(n=>n.name)},N.length>0?K=`全层批量自检完成：${Q}/${x.length} 台通过，${N.length} 台异常（${N.map(n=>n.name).join("、")}）。`:A=`全层批量自检全部通过（${Q}/${x.length}），设备已自动安全复位。`,ae()}function te(){const x=ze(p),N=[],Q=x.filter(c=>c.connectivity==="offline"),X=x.filter(c=>!c.planPoint),o=x.filter(c=>ye.get(c.id)?.proxy).length,n=x.filter(c=>ye.get(c.id)?.relay).length,f=x.length?n/x.length:0;Q.length>0?Q.forEach(c=>N.push({level:"fail",title:`节点不可达：${c.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:c.id})):N.push({level:"ok",title:"全网节点可达性正常",detail:`${x.length} 台设备均正常响应心跳。`}),o<1?N.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):N.push({level:"ok",title:`代理节点配置合理（${o} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),f>.25&&x.length>=4&&N.push({level:"warn",title:`中继比例偏高（${Math.round(f*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),X.length>0&&N.push({level:"warn",title:`尚有 ${X.length} 台未完成图纸标点`,detail:"请在「图纸标点」中补齐坐标以便施工定位。"}),m=N,A=`已完成蓝牙 Mesh 网络体检（检测 ${x.length} 台节点，发现 ${N.filter(c=>c.level!=="ok").length} 项关注）。`,ae()}function Se(){const x=ze(p),N=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...x.map(n=>[n.name,n.category,k(n.logicalZoneId),n.planPoint?`${Math.round(n.planPoint.x*100)}%/${Math.round(n.planPoint.y*100)}%`:"未标点",n.hardwareBinding?`${n.hardwareBinding.protocol} ${n.hardwareBinding.networkAddress}`:"未绑定",n.physicalInstalled?"已复核":"待复核",n.connectivity==="online"?"在线":"离线"].join(","))],Q=new Blob([`\uFEFF${N.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),X=URL.createObjectURL(Q),o=document.createElement("a");o.href=X,o.download="pacom-deployment-inventory.csv",o.click(),URL.revokeObjectURL(X)}const $e={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。"},project_config:{title:"项目配置",subtitle:"维护项目地理坐标、楼宇实景图、批量楼层及各层 2D 平面底图与功能区。"},floorplan:{title:"设备标记",subtitle:"在 2D 平面底图上完成设备标记、回路灯点与硬件复核。"},ledger:{title:"设备列表",subtitle:"核查全层四态设备清单，统一下发人感/光感参数并执行单机或全层自检。"},groups:{title:"设备分组",subtitle:"统一管理端侧蓝牙 Mesh 自治联动组与云端业务分组。"},network_topo:{title:"设备网络",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。"},connections:{title:"系统接入",subtitle:"管理边缘网关服务与暖通、电表、环境等异构子系统通道及传感器采集质量。"}};function me(){const x=(N,Q,X)=>`
      <button type="button" class="pacom-unified-item" aria-current="${l===N}" data-dep-nav="${N}">
        ${he(Q,16)}
        <span>${X}</span>
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${x("overview","layout-dashboard","部署总览")}
          ${x("project_config","layers","项目配置")}
          ${x("floorplan","map-pin","设备标记")}
          ${x("ledger","list","设备列表")}
          ${x("groups","folder-kanban","设备分组")}
          ${x("network_topo","waypoints","设备网络")}
          ${x("connections","plug","系统接入")}
        </div>
      </aside>
    `}function qe(x){return l==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出台账</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${x?"":"disabled"}>+ 交付冻结</button>
      `:l==="floorplan"?'<button type="button" class="pacom-btn" data-export-inv="1">导出施工标点表</button>':l==="ledger"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':l==="groups"?`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1" ${x?"":"disabled"}>${we?"收起表单":"+ 新建分组"}</button>`:l==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${x?"":"disabled"}>${j?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:l==="connections"?`
        <button type="button" class="pacom-btn" data-edge-restart="service" ${x?"":"disabled"}>重启边缘服务</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-conn="1" ${x?"":"disabled"}>${oe?"收起向导":"+ 新增接入通道"}</button>
      `:`<span class="pacom-badge ${x?"pacom-badge--online":"pacom-badge--warning"}">${x?"可编辑":"只读"}</span>`}function Ue(){const x=je(z),N=x.filter(c=>!!c.plan).length,Q=x.flatMap(c=>ze(c.id)),X=Q.filter(c=>!!c.planPoint).length,o=Q.filter(c=>c.connectivity==="online").length,n=Q.filter(c=>c.physicalInstalled).length,f=x.filter(c=>ze(c.id).length>0&&!j).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" data-proj-sub="floor_zones" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${N===x.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 空间与底图</span>
          <div class="pacom-kpi-value">${N}<span class="pacom-kpi-unit">/ ${x.length} 层</span></div>
          <span class="pacom-kpi-delta">${N===x.length?"全部底图就绪":`尚缺 ${x.length-N} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${X===Q.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${X}<span class="pacom-kpi-unit">/ ${Q.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${Ee.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${o===Q.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${o}<span class="pacom-kpi-unit">/ ${Q.length} 台</span></div>
          <span class="pacom-kpi-delta">${Q.length-o>0?`${Q.length-o} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${j?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${f}<span class="pacom-kpi-unit">/ ${x.length} 层</span></div>
          <span class="pacom-kpi-delta">${j?"有变更待下发 →":`基线 v${De}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="ledger" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${n===Q.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${n}<span class="pacom-kpi-unit">/ ${Q.length} 台</span></div>
          <span class="pacom-kpi-delta">${n===Q.length?"可交付冻结":`待复核 ${Q.length-n} 台 →`}</span>
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
                  <th>2. 设备标点</th>
                  <th>3. 在线入网</th>
                  <th>4. 边缘同步</th>
                  <th>5. 物理复核</th>
                  <th style="text-align:right;">交付状态</th>
                </tr>
              </thead>
              <tbody>
                ${x.map(c=>{const d=ze(c.id),_=Ie().filter(Be=>Be.floorId===c.id),I=d.filter(Be=>!!Be.planPoint).length,ve=d.filter(Be=>Be.connectivity==="online").length,Fe=d.filter(Be=>Be.physicalInstalled).length,B=!!c.plan,ke=B&&d.length>0&&I===d.length&&Fe===d.length&&ve===d.length&&!j;return`
                      <tr>
                        <td><strong>${y(c.name)}</strong><div class="pacom-row-sub">${c.areaSqm?`${c.areaSqm} m²`:"待补面积"}</div></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-proj-sub="floor_zones" data-matrix-floor="${y(c.id)}"><span class="pacom-dot ${B?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${B?`已传图 · ${_.length} 区`:"待传底图"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="floorplan" data-matrix-floor="${y(c.id)}"><span class="pacom-dot ${d.length>0&&I===d.length?"pacom-dot--online":d.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${d.length>0?`${I}/${d.length}`:"未标点"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${y(c.id)}"><span class="pacom-dot ${d.length>0&&ve===d.length?"pacom-dot--online":d.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${d.length>0?`${ve}/${d.length}`:"—"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${y(c.id)}"><span class="pacom-dot ${d.length===0?"pacom-dot--offline":j?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${d.length===0?"—":j?"待同步":`v${De}`}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="ledger" data-matrix-floor="${y(c.id)}"><span class="pacom-dot ${d.length>0&&Fe===d.length?"pacom-dot--online":d.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${d.length>0?`${Fe}/${d.length}`:"—"}</span></button></td>
                        <td style="text-align:right;"><span class="pacom-badge ${ke?"pacom-badge--online":d.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${ke?"可验收交付":d.length>0?"实施中":"待配置"}</span></td>
                      </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${b?`<div class="pacom-banner ${b.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${b.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${b.passed}/${b.total} 台${b.failedNames.length?` · 异常：${b.failedNames.join("、")}`:" · 全部安全复位"}</span>
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
                ${be.map(c=>`
                    <tr>
                      <td><div style="font-weight:450;">${y(c.versionTag)}</div><div class="pacom-row-sub"><code>${y(c.id)}</code></div></td>
                      <td><strong>${c.verifiedCount}</strong> / ${c.deviceCount} 台</td>
                      <td><div>${y(c.frozenBy)}</div><div class="pacom-row-sub">${y(c.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${pa[c.status]??c.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function We(x){const N=Z.projects.find(n=>n.id===M)??Z.projects[0],Q=Z.buildings.filter(n=>!N||n.projectId===N.id),X=Q.find(n=>n.id===z)??Q[0],o=N?.location?`${N.location.lng}, ${N.location.lat}`:"113.3824, 23.0652";return`
      <div style="width:100%; display:flex; flex-direction:column; gap:24px;">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">项目基础信息</h2>
            <span class="pacom-badge pacom-badge--accent">经纬度驱动气象与能耗基准</span>
          </div>
          <form class="pacom-settings-card" data-save-project="${y(N?.id??g.projectId)}">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta"><span class="pacom-setting-title">项目名称与城市</span><span class="pacom-setting-desc">保存后同步更新全局导航、空间总览与报表口径</span></div>
              <div class="pacom-setting-control"><input class="pacom-input" name="pName" value="${y(N?.name??"广实2号园")}" style="width:180px;" ${x?"":"disabled"} /><input class="pacom-input" name="pCity" value="${y(N?.city??"广州市")}" style="width:120px;" ${x?"":"disabled"} /></div>
            </div>
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta"><span class="pacom-setting-title">详细地址与地理坐标</span><span class="pacom-setting-desc">自动匹配周边气象站实况温度与湿度（经度, 纬度）</span></div>
              <div class="pacom-setting-control"><input class="pacom-input" name="pAddr" value="${y(N?.address??"")}" style="width:220px;" ${x?"":"disabled"} /><input class="pacom-input" name="pLngLat" value="${y(o)}" style="width:160px;" ${x?"":"disabled"} /></div>
            </div>
            <div class="pacom-setting-row" style="justify-content:flex-end;">
              <button type="submit" class="pacom-btn pacom-btn--primary" ${x?"":"disabled"}>保存项目信息</button>
            </div>
          </form>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <div>
              <h2 class="pacom-section-title">园区楼宇列表（${Q.length} 栋）</h2>
              <span class="pacom-row-sub">点击楼宇卡片即可切换编辑对象，无需反复切顶栏</span>
            </div>
            <button type="button" class="pacom-btn" data-toggle-new-bld="1" ${x?"":"disabled"}>${P?"收起表单":"+ 新建楼宇"}</button>
          </div>
          ${P?`
              <form class="pacom-settings-card" data-create-bld="${y(N?.id??g.projectId)}">
                <div class="pacom-setting-row" style="gap:10px;">
                  <input class="pacom-input" name="bName" placeholder="楼宇名称（如：G栋）" style="width:150px;" required />
                  <input class="pacom-input" name="bArea" type="number" step="0.1" placeholder="建筑面积 m²" style="width:140px;" />
                  <input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="12" title="地上层数" style="width:86px;" />
                  <span class="pacom-row-sub">层地上</span>
                  <input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="0" title="地下层数" style="width:76px;" />
                  <span class="pacom-row-sub">层地下</span>
                  <label style="display:inline-flex; align-items:center; gap:5px; font-size:14px;"><input type="checkbox" name="bRoof" checked />含 RF</label>
                  <button type="submit" class="pacom-btn pacom-btn--primary">创建楼宇</button>
                </div>
              </form>`:""}
          <div class="dep-building-grid">
            ${Q.map(n=>{const f=je(n.id),c=f.filter(_=>!!_.plan).length;return`
                  <button type="button" class="dep-building-card ${X?.id===n.id?"is-active":""}" data-pick-building="${y(n.id)}">
                    <img class="dep-building-thumb" src="${y(n.imageUrl??"./media/building-e.webp")}" alt="${y(n.name)}" />
                    <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
                      <div style="display:flex; align-items:center; gap:6px;">
                        <span style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">${y(n.name)}</span>
                        <span class="pacom-badge ${f.length>0&&c===f.length?"pacom-badge--online":"pacom-badge--warning"}">${c}/${f.length} 底图</span>
                      </div>
                      <span class="pacom-row-sub">地上 ${n.aboveFloors} 层${n.belowFloors>0?` · 地下 ${n.belowFloors} 层`:""}${n.hasRoof?" · RF":""}</span>
                      <span class="pacom-row-sub">${n.areaSqm?`${n.areaSqm} m²`:"待补面积"}</span>
                    </div>
                  </button>`}).join("")}
          </div>
        </section>

        ${X?`
            <section class="pacom-section">
              <div class="pacom-section-head">
                <h2 class="pacom-section-title">楼宇参数与白模实景图：${y(X.name)}</h2>
                <button type="button" class="pacom-btn" data-proj-sub-tab="floor_zones">管理本栋 ${je(X.id).length} 个楼层与图纸 →</button>
              </div>
              <div class="pacom-settings-card">
                <form class="pacom-setting-row" style="gap:10px;" data-save-building="${y(X.id)}">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">楼宇名称、建筑面积与层数结构</span>
                    <span class="pacom-setting-desc">修改后立即同步至空间总览与下方批量生层默认值</span>
                  </div>
                  <div class="pacom-setting-control" style="flex-wrap:wrap;">
                    <input class="pacom-input" name="bName" value="${y(X.name)}" style="width:110px;" ${x?"":"disabled"} />
                    <input class="pacom-input" name="bArea" type="number" step="0.1" value="${y(X.areaSqm??"")}" placeholder="面积 m²" style="width:116px;" ${x?"":"disabled"} />
                    <input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${X.aboveFloors}" style="width:68px;" title="地上层数" ${x?"":"disabled"} />
                    <span class="pacom-row-sub">地上</span>
                    <input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${X.belowFloors}" style="width:62px;" title="地下层数" ${x?"":"disabled"} />
                    <span class="pacom-row-sub">地下</span>
                    <label style="display:inline-flex; align-items:center; gap:5px; font-size:14px;"><input type="checkbox" name="bRoof" ${X.hasRoof?"checked":""} ${x?"":"disabled"} />RF</label>
                    <button type="submit" class="pacom-btn pacom-btn--primary" ${x?"":"disabled"}>保存楼宇</button>
                  </div>
                </form>
                <div class="pacom-setting-row" style="display:grid; grid-template-columns:minmax(0,1.2fr) minmax(240px,1fr); gap:16px; align-items:center;">
                  <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle); padding:8px;">
                    <img src="${y(X.imageUrl??"./media/building-e.webp")}" alt="${y(X.name)}" style="width:100%; max-height:240px; object-fit:contain; display:block;" />
                  </div>
                  <div class="dep-upload-drop">
                    <strong style="font-size:14px; font-weight:450;">替换 ${y(X.name)} 白模 / 实景图</strong>
                    <span class="pacom-row-sub">支持透明 PNG / WebP / JPG，用于空间总览整栋视图</span>
                    <label class="pacom-btn" style="cursor:pointer;">
                      <span>选择本地图片</span>
                      <input type="file" accept="image/*" data-upload-bld="${y(X.id)}" style="display:none;" ${x?"":"disabled"} />
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section class="pacom-section">
              <div class="pacom-section-head">
                <h2 class="pacom-section-title">一键批量补齐楼层（自动初始化 1 层 1 蓝牙 Mesh 网络）</h2>
                <span class="pacom-row-sub">默认已按 ${y(X.name)} 层数预设，已存在楼层自动跳过</span>
              </div>
              <form class="pacom-settings-card" data-batch-floors="${y(X.id)}">
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">起止楼层范围</span>
                    <span class="pacom-setting-desc">当前已配置 ${je(X.id).length} 层；缺失楼层将自动补齐</span>
                  </div>
                  <div class="pacom-setting-control">
                    <input class="pacom-input" name="fromFloor" type="number" min="1" max="80" value="1" style="width:72px;" ${x?"":"disabled"} />
                    <span class="pacom-row-sub">F 至</span>
                    <input class="pacom-input" name="toFloor" type="number" min="1" max="80" value="${Math.max(1,X.aboveFloors)}" style="width:72px;" ${x?"":"disabled"} />
                    <span class="pacom-row-sub">F</span>
                    <label style="display:inline-flex; align-items:center; gap:5px; font-size:14px; margin-left:6px;"><input type="checkbox" name="includeB1" ${X.belowFloors>0?"checked":""} ${x?"":"disabled"} />B1</label>
                    <label style="display:inline-flex; align-items:center; gap:5px; font-size:14px;"><input type="checkbox" name="includeRF" ${X.hasRoof?"checked":""} ${x?"":"disabled"} />RF</label>
                    <button type="submit" class="pacom-btn pacom-btn--primary" ${x?"":"disabled"}>批量补齐</button>
                  </div>
                </div>
              </form>
            </section>`:""}
      </div>
    `}function nt(x){const N=Z.projects.find(B=>B.id===M)??Z.projects[0],Q=Z.buildings.filter(B=>!N||B.projectId===N.id),X=Q.find(B=>B.id===z)??Q[0],o=X?je(X.id):[],n=o.filter(B=>!B.plan).length,f=o.filter(B=>Ie().filter(ke=>ke.floorId===B.id).length===0).length,c=o.filter(B=>q==="missing_plan"?!B.plan:q==="missing_zone"?Ie().filter(ke=>ke.floorId===B.id).length===0:!0),d=c.find(B=>B.id===p)??o.find(B=>B.id===p)??c[0],_=d?Ie().filter(B=>B.floorId===d.id):[],I=d?$t.filter(B=>B.floorId===d.id):[],ve=u.filter(B=>!!B.matchedFloorId).length,Fe=d?o.filter(B=>B.id!==d.id):[];return`
      <div style="width:100%; display:flex; flex-direction:column; gap:20px;">
        <div class="dep-upload-drop" data-batch-dropzone="${y(X?.id??"")}" style="padding:14px 16px; flex-direction:column; align-items:stretch; gap:12px; ${L?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:14px; flex-wrap:wrap;">
            <div style="display:flex; flex-direction:column; gap:2px;">
              <strong style="font-size:14px; font-weight:450;">一键批量匹配上传 ${y(X?.name??"")} 平面底图</strong>
              <span class="pacom-row-sub">支持拖拽整栋图纸到此区域或点击多选（如 01F–22F / RF），自动按文件名匹配并先预览再确认导入</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <span class="pacom-badge ${n===0?"pacom-badge--online":"pacom-badge--warning"}">已就绪 ${o.length-n}/${o.length} 层</span>
              <label class="pacom-btn pacom-btn--primary" style="cursor:pointer;">
                <span>选择多张图纸</span>
                <input type="file" accept="image/*" multiple data-batch-upload-floors="${y(X?.id??"")}" style="display:none;" ${x?"":"disabled"} />
              </label>
            </div>
          </div>
          ${u.length>0?`
              <div style="padding-top:10px; border-top:var(--hw) solid var(--pacom-border-subtle); display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <span style="font-size:13px;">待确认导入：共 <strong>${u.length}</strong> 张，成功匹配 <strong>${ve}</strong> 层${u.length-ve>0?`，未识别 ${u.length-ve} 张`:""}</span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn pacom-btn--sm" data-cancel-batch-upload="1">取消</button>
                    <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-batch-upload="1" ${ve===0?"disabled":""}>确认导入（${ve} 层）</button>
                  </div>
                </div>
                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:6px; max-height:150px; overflow-y:auto;">
                  ${u.map(B=>`
                      <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px;">
                        <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${y(B.file.name)}">${y(B.file.name)}</span>
                        <span class="pacom-badge ${B.matchedFloorId?"pacom-badge--online":"pacom-badge--warning"}">${B.matchedFloorName?`→ ${y(B.matchedFloorName)}`:"未识别"}</span>
                      </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        <div class="dep-floor-workbench">
          <div class="dep-floor-list-card">
            <div class="dep-floor-list-head">
              <div style="display:flex; align-items:center; justify-content:space-between; gap:6px;">
                <select class="pacom-select" style="flex:1; height:30px; font-size:13px;" data-switch-bld-select aria-label="切换楼宇">
                  ${Q.map(B=>`<option value="${y(B.id)}" ${B.id===X?.id?"selected":""}>${y(B.name)}（${je(B.id).length} 层）</option>`).join("")}
                </select>
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-floor="1" ${x?"":"disabled"}>${$?"收起":"+ 新增"}</button>
              </div>
              ${$&&X?`
                  <form data-create-floor="${y(X.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:4px;">
                    <div style="display:flex; gap:6px;">
                      <input class="pacom-input" name="fName" placeholder="楼层名（如 23F / B1）" style="height:30px; font-size:13px;" required />
                      <input class="pacom-input" name="fArea" type="number" step="0.1" placeholder="面积 m²" style="width:92px; height:30px; font-size:13px;" />
                    </div>
                    <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">确认新增楼层</button>
                  </form>`:""}
              <div style="display:flex; gap:4px; flex-wrap:wrap;">
                <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${q==="all"}" data-floor-list-filter="all">全部 ${o.length}</button>
                <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${q==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 ${n}</button>
                <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${q==="missing_zone"}" data-floor-list-filter="missing_zone">缺分区 ${f}</button>
              </div>
            </div>
            <div class="dep-floor-list-scroll">
              ${c.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">当前筛选无匹配楼层</div>':c.map(B=>{const ke=Ie().filter(Be=>Be.floorId===B.id).length;return`
                          <button type="button" class="dep-floor-row ${d?.id===B.id?"is-active":""}" data-pick-floor-pill="${y(B.id)}">
                            <span style="display:inline-flex; align-items:center; gap:7px; min-width:0;">
                              <span class="pacom-dot ${B.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                              <span>${y(B.name)}</span>
                            </span>
                            <span class="pacom-row-sub">${B.areaSqm?`${B.areaSqm} m²`:"待补面积"} · ${ke} 区</span>
                          </button>`}).join("")}
            </div>
          </div>

          <div class="dep-floor-detail">
            ${d?`
                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                      <h2 class="pacom-section-title">${y(X?.name??"")} ${y(d.name)} · 底图与基础属性</h2>
                      <span class="pacom-badge ${d.plan?"pacom-badge--online":"pacom-badge--warning"}">${d.plan?"2D 底图就绪":"待传底图"}</span>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                      <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-floor="${y(d.id)}" ${!x||d.id===g.floorId?'disabled title="已绑定运行设备的楼层不可直接删除"':""}>删除楼层</button>
                      <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-dep-nav="floorplan">进入图纸标点 →</button>
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    <form class="pacom-setting-row" style="gap:10px;" data-save-floor="${y(d.id)}">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">楼层名称与建筑面积</span>
                        <span class="pacom-setting-desc">用于单位面积能耗（EUI）计算与空间标高展示</span>
                      </div>
                      <div class="pacom-setting-control">
                        <input class="pacom-input" name="fName" value="${y(d.name)}" style="width:96px;" ${x?"":"disabled"} />
                        <input class="pacom-input" name="fArea" type="number" step="0.1" value="${y(d.areaSqm??"")}" placeholder="面积 m²" style="width:116px;" ${x?"":"disabled"} />
                        <button type="submit" class="pacom-btn pacom-btn--sm" ${x?"":"disabled"}>保存本层</button>
                      </div>
                    </form>
                    <div class="pacom-setting-row" style="display:grid; grid-template-columns:minmax(0,1.45fr) minmax(210px,1fr); gap:16px; align-items:center;">
                      <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); min-height:200px; display:flex; align-items:center; justify-content:center; border:var(--hw) solid var(--pacom-border-subtle); padding:8px;">
                        ${d.plan?`<img src="${y(d.plan.imageUrl)}" alt="${y(d.name)} 平面图" style="width:100%; max-height:280px; object-fit:contain; display:block;" />`:'<span class="pacom-row-sub">暂未上传 2D 平面底图</span>'}
                      </div>
                      <div class="dep-upload-drop">
                        <strong style="font-size:14px; font-weight:450;">${d.plan?"替换本层 2D 平面底图":"上传本层 2D 平面底图"}</strong>
                        <span class="pacom-row-sub">支持透明白模 WebP / PNG，上传后立即同步至空间总览与设备标记</span>
                        <label class="pacom-btn" style="cursor:pointer;">
                          <span>选择单张平面图</span>
                          <input type="file" accept="image/*" data-upload-floor="${y(d.id)}" style="display:none;" ${x?"":"disabled"} />
                        </label>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">本层功能区清单（${_.length}）</h2>
                    ${_.length>0&&Fe.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-toggle-copy-zones="${y(d.id)}" ${x?"":"disabled"}>${fe===d.id?"收起复用选择":"复用至其他楼层…"}</button>`:'<span class="pacom-row-sub">用于空间热区、区域快控与分项统计</span>'}
                  </div>
                  ${fe===d.id&&Fe.length>0?`
                      <div class="pacom-settings-card" style="padding:14px 18px; gap:10px;">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                          <span style="font-size:13px; font-weight:450;">勾选要复用本层 ${_.length} 个功能区的目标楼层（已选 ${re.size} 层）</span>
                          <div style="display:flex; gap:6px; flex-wrap:wrap;">
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">全选空白标准层</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全选地上层</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                          </div>
                        </div>
                        <div style="display:flex; flex-wrap:wrap; gap:6px;">
                          ${Fe.map(B=>{const ke=re.has(B.id),Be=Ie().filter(Ot=>Ot.floorId===B.id).length;return`
                                <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${ke}">
                                  <input type="checkbox" data-copy-target-floor="${y(B.id)}" ${ke?"checked":""} style="margin:0;" />
                                  <span>${y(B.name)}${Be>0?` (${Be}区)`:""}</span>
                                </label>`}).join("")}
                        </div>
                        <div style="display:flex; justify-content:flex-end; gap:8px;">
                          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-copy-zones="${y(d.id)}">取消</button>
                          <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${y(d.id)}" ${re.size===0?"disabled":""}>确认复制到已选（${re.size} 层）</button>
                        </div>
                      </div>`:""}
                  <div class="pacom-settings-card">
                    ${_.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂未划分功能区，可在下方添加，或从 7F 等标准层按需复用。</span></div>':_.map(B=>E===B.id?`
                                  <form class="pacom-setting-row" style="gap:8px;" data-save-edit-zone="${y(B.id)}" data-zone-floor="${y(d.id)}">
                                    <input class="pacom-input" name="zName" value="${y(B.name)}" required />
                                    <select class="pacom-select" name="zCat">
                                      ${Object.keys(dt).map(ke=>`<option value="${ke}" ${B.category===ke?"selected":""}>${dt[ke]}</option>`).join("")}
                                    </select>
                                    <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                  </form>`:`
                                  <div class="pacom-setting-row">
                                    <div class="pacom-setting-meta">
                                      <span class="pacom-setting-title">${y(B.name)} <span class="pacom-badge pacom-badge--neutral">${y(dt[B.category]??B.category)}</span></span>
                                    </div>
                                    <div class="pacom-setting-control">
                                      <span class="pacom-row-sub">${ze(d.id).filter(ke=>ke.logicalZoneId===B.id).length} 台设备</span>
                                      <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${y(B.id)}" ${x?"":"disabled"}>编辑</button>
                                      <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${y(B.id)}" ${x?"":"disabled"}>删除</button>
                                    </div>
                                  </div>`).join("")}
                    <form class="pacom-setting-row" style="gap:8px;" data-add-zone="${y(d.id)}">
                      <input class="pacom-input" name="zoneName" placeholder="输入新功能区名称（如：${y(d.name)} 东侧实验区）" required ${x?"":"disabled"} />
                      <select class="pacom-select" name="zoneCat" ${x?"":"disabled"}>
                        <option value="lab">实验区</option>
                        <option value="office">办公区</option>
                        <option value="meeting">会议室</option>
                        <option value="corridor">走廊/公区</option>
                        <option value="utility">机房/后勤</option>
                        <option value="outdoor">露台/活动区</option>
                      </select>
                      <button type="submit" class="pacom-btn" ${x?"":"disabled"}>+ 添加功能区</button>
                    </form>
                  </div>
                </section>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">本层竣工图纸与设备手册</h2>
                    <span class="pacom-row-sub">共 ${I.length} 份关联文档</span>
                  </div>
                  <div class="pacom-table-card">
                    <div class="pacom-table-wrap">
                      <table class="pacom-table">
                        <thead><tr><th>文档名称</th><th>类型</th><th>关联范围</th><th style="text-align:right;">操作</th></tr></thead>
                        <tbody>
                          ${I.length===0?`<tr><td colspan="4"><div class="pacom-empty-state" style="padding:24px 16px;"><strong>${y(X?.name??"")} ${y(d.name)} 暂未关联竣工文档</strong><span>当前已完成 4K 白模平面底图核对，后续可按需挂载暖通/强电竣工图纸。</span></div></td></tr>`:I.map(B=>`
                                    <tr>
                                      <td><div style="font-weight:450;">${B.name}</div><div class="pacom-row-sub">${B.size} · ${B.updatedAt}</div></td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${B.category}</span></td>
                                      <td><span class="pacom-row-sub">${B.boundScope}</span></td>
                                      <td style="text-align:right;"><button type="button" class="pacom-btn" data-preview-doc="${B.id}">查阅</button></td>
                                    </tr>`).join("")}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>`:'<div class="pacom-empty-state"><strong>当前楼宇暂无楼层</strong><span>请先在左侧点击「+ 新增」或返回「项目与楼宇」一键批量生成楼层。</span></div>'}
          </div>
        </div>
      </div>
    `}function qt(x){const N=je(z),Q=N.find(I=>I.id===p)??N[0],X=ze(p),o=Ie().filter(I=>I.floorId===p),n=se?X.find(I=>I.id===ee)??null:null,f=n?ye.get(n.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${p.slice(-4)}`}:null,c=n?Ee.filter(I=>I.deviceId===n.id):[],d=ge.trim().toLowerCase(),_=X.filter(I=>!(H==="unverified"&&I.physicalInstalled||H==="unplaced"&&I.planPoint||d&&!`${I.name} ${k(I.logicalZoneId)}`.toLowerCase().includes(d)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${he("search",16)}
            <input class="pacom-hud-input" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${y(ge)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${S?"is-active":""}" data-toggle-hud-pool="1">设备池 ${X.length}</button>
            <button type="button" class="pacom-hud-pill" data-toggle-new-dev="1" ${x?"":"disabled"}>+ 标点</button>
          </div>

          ${S||h?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${h?"新增设备标点":`${y(Q?.name??"7F")} 设备池（${_.length}）`}</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${he("x",16)}</button>
                </div>
                ${h?`
                    <form data-create-dev="1" style="padding:12px; display:flex; flex-direction:column; gap:8px;">
                      <input class="pacom-input" name="devName" placeholder="设备名称（如：703 会议室三控面板）" required />
                      <select class="pacom-select" name="devPreset">${pt.map(I=>`<option value="${I.key}">${I.label}</option>`).join("")}</select>
                      <select class="pacom-select" name="devZone">${o.map(I=>`<option value="${y(I.id)}">${y(I.name)}</option>`).join("")}</select>
                      <button type="submit" class="pacom-btn pacom-btn--primary">加入图纸并预设 Mesh 角色</button>
                    </form>`:`
                    <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                      <div class="pacom-count-pills">
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${H==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${X.length}</span></button>
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${H==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${X.filter(I=>!I.physicalInstalled).length}</span></button>
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${H==="unplaced"}" data-dev-filter="unplaced">未标点 <span class="pacom-count-num">${X.filter(I=>!I.planPoint).length}</span></button>
                      </div>
                    </div>
                    <div class="pacom-list" style="padding:6px;">
                      ${_.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':_.map(I=>`
                                <div class="pacom-row ${I.id===ee&&se?"is-selected":""}" data-pick-dev="${y(I.id)}" style="padding:8px;">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${y(I.name)}</div>
                                    <div class="pacom-row-sub">${y(k(I.logicalZoneId))} · ${I.physicalInstalled?"已复核":"待复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${I.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${I.planPoint?"已标点":"未标点"}</span>
                                </div>`).join("")}
                    </div>`}
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${i?"crosshair":"grab"};">
          ${Q?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${ne}px, ${ue}px) scale(${J});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${y(Q.plan.imageUrl)}" alt="${y(Q.name)} 平面图" />
                  ${ie==="zone"?o.map(I=>{const ve=xe[I.id];return ve?`<div class="pacom-zone-hotspot is-active" style="left:${ve.left}%; top:${ve.top}%; width:${ve.width}%; height:${ve.height}%;"><span class="pacom-zone-tag">${y(I.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${X.filter(I=>I.planPoint).map(I=>`
                      <button type="button" class="pacom-pin ${I.id===ee&&se?"is-selected":""} ${I.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(I.planPoint.x*100).toFixed(2)}%; top:${(I.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${y(I.id)}" title="${y(I.name)}">
                        <span class="pacom-dot ${I.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${y(ma(I))}</span>
                      </button>`).join("")}
                  ${ie==="light_marker"||n?.category==="lighting"?Ee.filter(I=>X.some(ve=>ve.id===I.deviceId)).map(I=>`
                            <span class="dep-light-dot" style="left:${(I.x*100).toFixed(1)}%; top:${(I.y*100).toFixed(1)}%;" title="${y(I.label)}（${y(I.channel)}）">
                              ${he("sparkles",12)}<span>${y(I.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="project_config" data-proj-sub="floor_zones">前往「项目配置」上传真实底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${N.map(I=>`
              <button type="button" class="pacom-elev-item ${I.id===p?"is-active":""}" data-scrubber-floor="${y(I.id)}" title="${y(I.name)}${I.plan?" · 已传底图":" · 待传底图"}">
                ${I.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${y(I.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${ie==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${ie==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${ie==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${he("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(J*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${he("plus",16)}</button>
        </div>

        ${n?`
            <aside class="pacom-drawer" aria-label="设备部署属性">
              <div class="pacom-drawer-head">
                <div style="min-width:0;">
                  <h2 class="pacom-drawer-title">${y(n.name)}</h2>
                  <div class="pacom-row-sub">${y(k(n.logicalZoneId))} · v${n.version}</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${he("x",16)}</button>
              </div>

              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${x?"":"disabled"}>${i?"点击图纸定位中…":"点图更新坐标"}</button>
                <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${y(n.id)}">Ping 闪灯 5s</button>
                <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
              </div>

              ${n.category==="lighting"?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:14px; font-weight:450;">回路可视化灯点（${c.length}）</span>
                      <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${y(n.id)}" ${x?"":"disabled"}>+ 添加灯点</button>
                    </div>
                    ${c.map(I=>`
                        <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                          <span><strong>${y(I.channel)}</strong> · ${y(I.label)}</span>
                          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:13px;" data-del-light-marker="${y(I.id)}" ${x?"":"disabled"}>删</button>
                        </div>`).join("")}
                  </div>`:""}

              ${n.category!=="hvac"&&n.category!=="meter"&&f?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                      <code style="font-size:12px;">${y(f.meshUuid)}</code>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                      <span>Proxy 代理（建议每层 2–3 个）</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${f.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${y(n.id)}" ${x?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                      <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${f.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${y(n.id)}" ${x?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                    </div>
                  </div>`:""}

              <form data-role="binding-form" class="pacom-control-box" style="gap:8px;">
                <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                  <select class="pacom-select" style="height:30px; font-size:13px;" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(I=>`<option value="${I}" ${n.hardwareBinding?.protocol===I?"selected":""}>${I.toUpperCase()}</option>`).join("")}
                  </select>
                  <input class="pacom-input" style="height:30px; font-size:13px;" name="networkAddress" placeholder="网络地址/主题" value="${y(n.hardwareBinding?.networkAddress??"")}" />
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                  <input class="pacom-input" style="height:30px; font-size:13px;" name="portOrChannel" placeholder="端口/回路" value="${y(n.hardwareBinding?.portOrChannel??"")}" />
                  <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; flex-shrink:0;">
                    <span>物理已复核</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${le}" data-toggle-phys="1" ${x?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </span>
                </div>
                <button class="pacom-btn pacom-btn--primary" type="submit" ${x?"":"disabled"}>保存绑定与复核（v${n.version}）</button>
              </form>
            </aside>`:""}
      </main>
    `}function zt(x){const N=ze(p),Q=F.trim().toLowerCase(),X=N.filter(c=>!(C==="online"&&c.connectivity!=="online"||C==="offline"&&c.connectivity!=="offline"||C==="unverified"&&c.physicalInstalled||Q&&!`${c.name} ${k(c.logicalZoneId)} ${c.hardwareBinding?.protocol??""}`.toLowerCase().includes(Q))),o=N.filter(c=>c.connectivity==="online").length,n=Me?N.find(c=>c.id===Me)??null:null,f=n?Re.get(n.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450}:null;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" style="width:220px;" data-ledger-search placeholder="搜索设备名称或功能区…" value="${y(F)}" aria-label="搜索设备列表" />
          <select class="pacom-select" data-ledger-filter aria-label="按设备状态筛选">
            <option value="all" ${C==="all"?"selected":""}>全部状态（${N.length}）</option>
            <option value="online" ${C==="online"?"selected":""}>仅看在线（${o}）</option>
            <option value="offline" ${C==="offline"?"selected":""}>仅看离线（${N.length-o}）</option>
            <option value="unverified" ${C==="unverified"?"selected":""}>待物理复核（${N.filter(c=>!c.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${he("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn" data-export-inv="1">导出 CSV</button>
        </div>
      </div>
      ${n&&f?`
          <form class="pacom-settings-card" data-save-dev-params="${y(n.id)}">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">设备参数配置：${y(n.name)}</span>
                <span class="pacom-setting-desc">人感自动关灯延时、光照度开关门限与默认亮度参数</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-close-param="1">${he("x",16)}</button>
            </div>
            <div class="pacom-setting-row" style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px;">
              <label class="pacom-field"><span>自动关灯延时(分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${f.offDelayMin}" /></label>
              <label class="pacom-field"><span>恢复自动延时(分)</span><input class="pacom-input" name="restoreMin" type="number" value="${f.restoreMin}" /></label>
              <label class="pacom-field"><span>开灯光感门限(lx)</span><input class="pacom-input" name="luxOn" type="number" value="${f.luxOn}" /></label>
              <label class="pacom-field"><span>关灯光感门限(lx)</span><input class="pacom-input" name="luxOff" type="number" value="${f.luxOff}" /></label>
            </div>
            <div class="pacom-setting-row" style="justify-content:flex-end;">
              <button type="submit" class="pacom-btn pacom-btn--primary" ${x?"":"disabled"}>下发设备参数</button>
            </div>
          </form>`:""}
      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${X.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词或切换状态筛选。</span></div></td></tr>':X.map(c=>`
                        <tr>
                          <td><div style="font-weight:450;">${y(c.name)}</div><div class="pacom-row-sub">${y(k(c.logicalZoneId))} · v${c.version}</div></td>
                          <td><span class="pacom-badge ${c.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${c.planPoint?`${Math.round(c.planPoint.x*100)}%,${Math.round(c.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${c.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${c.hardwareBinding?c.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${c.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${c.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${c.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${c.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${y(c.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-param="${y(c.id)}">参数</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${y(c.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${X.length} / ${N.length} 台设备 · ${o} 在线 · ${N.length-o} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dep-nav="floorplan">前往设备标记 →</button>
        </div>
      </div>
    `}function Dt(){const x=_e.filter(Q=>Q.track==="mesh_auto"),N=_e.filter(Q=>Q.track==="cloud_biz");return`
      ${we?`
          <form class="pacom-settings-card" data-create-group="1">
            <div class="pacom-setting-row" style="display:grid; grid-template-columns:1fr 180px 180px auto; gap:8px; align-items:center;">
              <input class="pacom-input" name="gName" placeholder="分组名称（如：7F 西侧办公区联动组）" required />
              <select class="pacom-select" name="gTrack">
                <option value="mesh_auto">端侧 Mesh 自治组（自动含蓝牙适配器）</option>
                <option value="cloud_biz">云端业务分组（零蓝牙依赖）</option>
              </select>
              <select class="pacom-select" name="gType">
                <option value="灯光联动组（传感-面板）">灯光联动组</option>
                <option value="调光器群控组">调光器群控组</option>
                <option value="空调业务组">空调业务组</option>
                <option value="行政 / 标牌管控组">标牌 / 部门组</option>
              </select>
              <button type="submit" class="pacom-btn pacom-btn--primary">创建分组</button>
            </div>
          </form>`:""}
      <div class="pacom-grid-2">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${x.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${x.map(Q=>`
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">${y(Q.name)} <span class="pacom-badge pacom-badge--neutral">${y(Q.groupType)}</span></span>
                    <span class="pacom-setting-desc">成员 ${Q.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                  </div>
                  <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${y(Q.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${N.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${N.map(Q=>`
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">${y(Q.name)} <span class="pacom-badge pacom-badge--neutral">${y(Q.groupType)}</span></span>
                    <span class="pacom-setting-desc">成员 ${Q.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                  </div>
                  <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${y(Q.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>
      </div>
    `}function Mt(){const x=ze(p),N=Ie().filter(d=>d.floorId===p),Q=x.filter(d=>d.category!=="hvac"&&d.category!=="meter"),X=Q.filter(d=>ye.get(d.id)?.proxy).length,o=Q.filter(d=>ye.get(d.id)?.relay).length,n=x.filter(d=>d.category==="gateway"),f=x.filter(d=>ye.get(d.id)?.relay||ye.get(d.id)?.proxy),c=x.filter(d=>d.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge pacom-badge--online">协同锁空闲 · 可同步</span>
            <span class="pacom-row-sub">Mesh 节点 ${Q.length} 台 · Proxy ${X} 个 · Relay ${o} 个 · 边缘基线 v${De}</span>
          </div>
        </div>
        ${m.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${m.map(d=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${y(d.title)}</strong> <span class="pacom-row-sub">· ${y(d.detail)}</span></div>
                      <span class="pacom-badge ${d.level==="ok"?"pacom-badge--online":d.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${d.level==="ok"?"通过":d.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达图纸标点）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${U==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${U==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${U==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${n.map(d=>`
                    <button type="button" class="dep-topo-node ${d.connectivity==="offline"?"is-issue":""}" data-topo-jump="${y(d.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${y(d.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                      <span class="pacom-row-sub">${y(d.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${f.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，请在图纸标点抽屉中为传感器开启。</div>':f.map(d=>{const _=ye.get(d.id);return`
                            <button type="button" class="dep-topo-node ${d.connectivity==="offline"?"is-issue":""}" data-topo-jump="${y(d.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${y(d.name)}</strong><span class="pacom-badge pacom-badge--accent">${_?.proxy?"Proxy":""}${_?.proxy&&_?.relay?" + ":""}${_?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${y(k(d.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${c.map(d=>`
                    <button type="button" class="dep-topo-node ${d.connectivity==="offline"?"is-issue":""}" data-topo-jump="${y(d.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${y(d.name)}</strong><span class="pacom-badge ${d.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${d.connectivity==="online"?"在线":"离线"}</span></div>
                      <span class="pacom-row-sub">${y(k(d.logicalZoneId))} · ${y(d.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                    </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${x.filter(d=>d.category==="sensor"||d.category==="gateway").map(d=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${y(d.id)}">
                      <strong>${y(d.name)}</strong>
                      <span class="pacom-row-sub">${d.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${x.filter(d=>d.category==="lighting"||d.category==="hvac").map(d=>`
                    <button type="button" class="dep-topo-node ${d.connectivity==="offline"?"is-issue":""}" data-topo-jump="${y(d.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${y(d.name)}</strong><span class="pacom-badge ${d.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${d.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${y(k(d.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${N.map(d=>{const _=x.filter(ve=>ve.logicalZoneId===d.id),I=_.some(ve=>ve.connectivity==="offline");return`
                      <div class="dep-topo-node ${I?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${y(d.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${I?"pacom-badge--warning":"pacom-badge--online"}">${_.length} 台设备</span></div>
                        <span class="pacom-row-sub">${I?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function Tt(){const x=ce.reduce((o,n)=>o+n.collectedPoints,0),N=ce.reduce((o,n)=>o+n.calculatedPoints,0),Q=ce.filter(o=>o.status==="connected").length,X=ce.filter(o=>o.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${Q}<span class="pacom-kpi-unit">/ ${ce.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${ce.length?Math.round(Q/ce.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${x}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${N}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${X.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${X.length} 条采集通道通信降级（${X.map(o=>o.name).join("、")}）</span>
                <span class="pacom-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
              </div>
            </div>`:""}

      ${oe?`
          <form class="pacom-settings-card" data-create-conn="1">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">新增子系统接入通道</span>
                <span class="pacom-setting-desc">支持边缘网关、中央空调/线控网关、智能电表通讯机、空气质量与数字标牌（自动检测局域网端口冲突）</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-toggle-new-conn="1">${he("x",16)}</button>
            </div>
            <div class="pacom-setting-row" style="display:grid; grid-template-columns:1.2fr 160px 1fr auto; gap:8px; align-items:center;">
              <input class="pacom-input" name="cName" placeholder="通道名称（如：E栋 8F 中央空调网关）" required />
              <select class="pacom-select" name="cProto">
                <option value="bacnet_ip">空调 / BACnet IP</option>
                <option value="modbus_tcp">电表 / Modbus TCP</option>
                <option value="modbus_rtu">RS485 / Modbus RTU</option>
                <option value="dali">照明 / DALI-2</option>
                <option value="mqtt">空气质量 / MQTT</option>
              </select>
              <input class="pacom-input" name="cEndpoint" placeholder="网关端点（如：10.7.8.20:47808）" required />
              <button type="submit" class="pacom-btn pacom-btn--primary">校验并接入</button>
            </div>
          </form>`:""}

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
                ${ce.map(o=>{const n=da[o.status]??{label:o.status,cls:"pacom-badge--neutral"},f=o.status==="connected"?98:o.status==="degraded"?62:0,c=f>=75?"var(--pacom-status-online)":f>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",d=Te===o.id,_=d?ga(o,de):[];return`
                      <tr>
                        <td><strong>${y(o.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${o.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${y(o.endpoint)}</code></td>
                        <td>采集 ${o.collectedPoints} / 计算 ${o.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${n.cls}">${n.label}</span>
                            <span class="pacom-row-sub">${f}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${f}%; background:${c};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${y(o.id)}">${d?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${y(o.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${y(o.id)}" data-endpoint-val="${y(o.endpoint)}">${Le===o.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${d?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${y(o.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${_.map(I=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${y(I.deviceName)}</strong> · ${y(I.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${y(I.value)} · ${y(I.lastSeen)}</span>
                                        <span class="pacom-badge ${I.quality==="online"?"pacom-badge--online":I.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${I.quality==="online"?"在线正常":I.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function ae(){const x=s.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Ke({tree:Pe(),session:s,scope:O,isOpen:G,searchKeyword:D})}
            </div>
            <div class="pacom-header-meta">
              ${qe(x)}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${me()}
          ${l==="floorplan"?`<div class="pacom-unified-main--canvas">
                  ${A?`<div class="pacom-banner pacom-banner--ok" style="margin-bottom:8px; flex-shrink:0;"><span class="pacom-banner-title">${y(A)}</span></div>`:""}
                  ${K?`<div class="pacom-alert-banner" style="margin-bottom:8px; flex-shrink:0;">${y(K)}</div>`:""}
                  ${qt(x)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head">
                    <h2 class="pacom-unified-title">${$e[l].title}</h2>
                    <p class="pacom-unified-subtitle">${$e[l].subtitle}</p>
                  </div>
                  ${l==="project_config"?`<div class="pacom-tabs" style="align-self:flex-start;" role="tablist" aria-label="项目配置分段">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${r==="project_building"}" data-proj-sub-tab="project_building">项目与楼宇</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${r==="floor_zones"}" data-proj-sub-tab="floor_zones">楼层与图纸</button>
                        </div>`:""}
                  ${A?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${y(A)}</span></div>`:""}
                  ${K?`<div class="pacom-alert-banner">${y(K)}</div>`:""}
                  ${l==="overview"?Ue():l==="project_config"?r==="floor_zones"?nt(x):We(x):l==="ledger"?zt(x):l==="groups"?Dt():l==="network_topo"?Mt():Tt()}
                </div>
              </div>`}
        </div>
      </div>
    `,Rt()}function Rt(){Ye(e,{onToggle:()=>{G=!G,ae(),G&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:o=>{D=o,ae();const n=e.querySelector("[data-global-space-search]");n&&(n.focus(),n.setSelectionRange(o.length,o.length))},onPick:o=>{if(O=o,G=!1,o.level==="project"){M=o.projectId;const n=Z.buildings.find(f=>f.projectId===o.projectId);n&&Y(n.id)}else o.level==="building"?Y(o.buildingId):o.level==="floor"&&R(o.floorId);ae()}}),e.querySelectorAll("[data-dep-nav]").forEach(o=>{o.addEventListener("click",()=>{l=o.dataset.depNav??"overview",o.dataset.projSub&&(r=o.dataset.projSub),A="",K="",ae()})}),e.querySelectorAll("[data-proj-sub-tab]").forEach(o=>{o.addEventListener("click",()=>{r=o.dataset.projSubTab??"project_building",ae()})}),e.querySelector("[data-ledger-search]")?.addEventListener("input",o=>{F=o.currentTarget.value,ae();const n=e.querySelector("[data-ledger-search]");n&&(n.focus(),n.setSelectionRange(F.length,F.length))}),e.querySelector("[data-ledger-filter]")?.addEventListener("change",o=>{C=o.currentTarget.value??"all",ae()}),e.querySelectorAll("[data-refresh-dep]").forEach(o=>{o.addEventListener("click",()=>{v()})}),e.querySelectorAll("[data-matrix-nav]").forEach(o=>{o.addEventListener("click",()=>{const n=o.dataset.matrixFloor;n&&R(n),l=o.dataset.matrixNav??"floorplan",o.dataset.projSub&&(r=o.dataset.projSub),ae()})}),e.querySelectorAll("[data-pick-floor-pill]").forEach(o=>{o.addEventListener("click",()=>{const n=o.dataset.pickFloorPill;n&&(R(n),ae())})}),e.querySelectorAll("[data-scrubber-floor]").forEach(o=>{o.addEventListener("click",()=>{const n=o.dataset.scrubberFloor;n&&(R(n),ae())})}),e.querySelector("[data-save-project]")?.addEventListener("submit",async o=>{o.preventDefault();const n=o.currentTarget,f=n.dataset.saveProject??M,c=new FormData(n),d=String(c.get("pName")??"").trim(),_=String(c.get("pCity")??"").trim(),I=String(c.get("pAddr")??"").trim(),ve=String(c.get("pLngLat")??"").split(",").map(B=>Number(B.trim())),Fe=ve.length===2&&Number.isFinite(ve[0])&&Number.isFinite(ve[1])?{lng:ve[0],lat:ve[1],crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}:void 0;try{await t.updateProject?.(f,{name:d,city:_,address:I,location:Fe}),A=`项目「${d||"当前项目"}」基础信息与地理坐标已持久化保存。`,await v()}catch(B){K=B instanceof Error?B.message:String(B),ae()}}),e.querySelectorAll("[data-pick-building]").forEach(o=>{o.addEventListener("click",()=>{const n=o.dataset.pickBuilding;n&&(Y(n),A="",ae())})}),e.querySelector("[data-switch-bld-select]")?.addEventListener("change",o=>{const n=o.currentTarget.value;n&&(Y(n),q="all",ae())}),e.querySelector("[data-toggle-new-bld]")?.addEventListener("click",()=>{P=!P,ae()}),e.querySelector("[data-create-bld]")?.addEventListener("submit",async o=>{o.preventDefault();const n=o.currentTarget,f=n.dataset.createBld??M,c=new FormData(n),d=String(c.get("bName")??"").trim(),_=String(c.get("bArea")??"").trim(),I=Number(c.get("bAbove")??12),ve=Number(c.get("bBelow")??0),Fe=!!c.get("bRoof");if(d)try{const B=await t.upsertBuilding?.({projectId:f,name:d,aboveFloors:I,belowFloors:ve,hasRoof:Fe,areaSqm:_?Number(_):null});P=!1,B&&(z=B.id),A=`已新建楼宇「${d}」，可使用下方一键批量补齐楼层。`,await v()}catch(B){K=B instanceof Error?B.message:String(B),ae()}}),e.querySelector("[data-save-building]")?.addEventListener("submit",async o=>{o.preventDefault();const n=o.currentTarget,f=n.dataset.saveBuilding,c=Z.buildings.find(ke=>ke.id===f);if(!c)return;const d=new FormData(n),_=String(d.get("bName")??"").trim()||c.name,I=String(d.get("bArea")??"").trim(),ve=Number(d.get("bAbove")??c.aboveFloors),Fe=Number(d.get("bBelow")??c.belowFloors),B=!!d.get("bRoof");try{await t.upsertBuilding?.({id:f,projectId:c.projectId,name:_,aboveFloors:ve,belowFloors:Fe,hasRoof:B,areaSqm:I?Number(I):null}),A=`已保存楼宇「${_}」结构参数与建筑面积。`,await v()}catch(ke){K=ke instanceof Error?ke.message:String(ke),ae()}}),e.querySelector("[data-upload-bld]")?.addEventListener("change",async o=>{const n=o.currentTarget,f=n.dataset.uploadBld,c=n.files?.[0],d=Z.buildings.find(_=>_.id===f);if(!(!f||!c||!d))try{const _=await ut(c);await t.upsertBuilding?.({id:d.id,projectId:d.projectId,name:d.name,aboveFloors:d.aboveFloors,belowFloors:d.belowFloors,hasRoof:d.hasRoof,areaSqm:d.areaSqm,imageUrl:_}),A=`已更新「${d.name}」白模 / 实景图（${c.name}），空间总览已同步生效。`,await v()}catch(_){K=_ instanceof Error?_.message:String(_),ae()}}),e.querySelector("[data-batch-floors]")?.addEventListener("submit",async o=>{o.preventDefault();const n=o.currentTarget.dataset.batchFloors,f=new FormData(o.currentTarget),c=Number(f.get("fromFloor")??1),d=Number(f.get("toFloor")??6),_=new Set(Ve().filter(ve=>ve.buildingId===n).map(ve=>ve.name.toUpperCase()));let I=0;try{for(let ve=Math.min(c,d);ve<=Math.max(c,d);ve+=1){const Fe=`${ve}F`;_.has(Fe)||(await t.upsertFloor?.({buildingId:n,kind:"above",level:ve,name:Fe}),_.add(Fe),I+=1)}f.get("includeB1")&&!_.has("B1")&&(await t.upsertFloor?.({buildingId:n,kind:"below",level:-1,name:"B1"}),I+=1),f.get("includeRF")&&!_.has("RF")&&(await t.upsertFloor?.({buildingId:n,kind:"roof",level:99,name:"RF"}),I+=1),A=I>0?`已批量新增 ${I} 个楼层并同步至全局空间树。`:"所选范围楼层均已存在，未重复创建。",await v()}catch(ve){K=ve instanceof Error?ve.message:String(ve),ae()}}),e.querySelectorAll("[data-floor-list-filter]").forEach(o=>{o.addEventListener("click",()=>{q=o.dataset.floorListFilter??"all",ae()})}),e.querySelector("[data-toggle-new-floor]")?.addEventListener("click",()=>{$=!$,ae()}),e.querySelector("[data-create-floor]")?.addEventListener("submit",async o=>{o.preventDefault();const n=o.currentTarget,f=n.dataset.createFloor,c=new FormData(n),d=String(c.get("fName")??"").trim().toUpperCase(),_=String(c.get("fArea")??"").trim();if(!d)return;const I=tt(d),ve=I>=999?"roof":I<0?"below":"above",Fe=I>=999?99:I||1;try{const B=await t.upsertFloor?.({buildingId:f,kind:ve,level:Fe,name:d,areaSqm:_?Number(_):null});$=!1,B&&(p=B.id),A=`已新增楼层「${d}」。`,await v()}catch(B){K=B instanceof Error?B.message:String(B),ae()}}),e.querySelector("[data-save-floor]")?.addEventListener("submit",async o=>{o.preventDefault();const n=o.currentTarget,f=n.dataset.saveFloor,c=Ve().find(ke=>ke.id===f);if(!c)return;const d=new FormData(n),_=String(d.get("fName")??"").trim()||c.name,I=String(d.get("fArea")??"").trim(),ve=tt(_),Fe=ve>=999?"roof":ve<0?"below":"above",B=ve>=999?99:ve||c.level;try{await t.upsertFloor?.({id:c.id,buildingId:c.buildingId,kind:Fe,level:B,name:_,areaSqm:I?Number(I):null}),A=`已保存楼层「${_}」名称与建筑面积。`,await v()}catch(ke){K=ke instanceof Error?ke.message:String(ke),ae()}}),e.querySelector("[data-delete-floor]")?.addEventListener("click",async o=>{const n=o.currentTarget.dataset.deleteFloor;if(n)try{await t.deleteFloor?.(n),A="已删除所选楼层及其空分区。",await v()}catch(f){K=f instanceof Error?f.message:String(f),ae()}}),e.querySelector("[data-upload-floor]")?.addEventListener("change",async o=>{const n=o.currentTarget,f=n.dataset.uploadFloor,c=n.files?.[0],d=Ve().find(_=>_.id===f);if(!(!f||!c||!d))try{const _=await ut(c);await t.upsertFloor?.({id:d.id,buildingId:d.buildingId,kind:d.kind,level:d.level,name:d.name,areaSqm:d.areaSqm,planImageUrl:_}),A=`已上传「${d.name}」2D 平面底图（${c.name}），空间总览与设备标记已同步。`,await v()}catch(_){K=_ instanceof Error?_.message:String(_),ae()}});function x(o,n){if(!o||n.length===0)return;const f=je(o),c=new Map;f.forEach(d=>{const _=wt(d.name)??d.name.toUpperCase();c.set(_,d)}),u=n.map(d=>{const _=wt(d.name),I=_?c.get(_):void 0;return{file:d,matchedFloorId:I?.id??null,matchedFloorName:I?.name??null}}),ae()}e.querySelector("[data-batch-upload-floors]")?.addEventListener("change",o=>{const n=o.currentTarget,f=n.dataset.batchUploadFloors??"";x(f,Array.from(n.files??[]))});const N=e.querySelector("[data-batch-dropzone]");N&&s.scope.canEditDeployment&&(N.addEventListener("dragover",o=>{o.preventDefault(),L||(L=!0,N.style.borderColor="var(--pacom-accent-solid)",N.style.background="var(--pacom-accent-soft)")}),N.addEventListener("dragleave",()=>{L=!1,N.style.borderColor="",N.style.background=""}),N.addEventListener("drop",o=>{o.preventDefault(),L=!1;const n=N.dataset.batchDropzone??"",f=Array.from(o.dataTransfer?.files??[]).filter(c=>c.type.startsWith("image/"));x(n,f)})),e.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{u=[],ae()}),e.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const o=u.filter(f=>f.matchedFloorId),n=u.length-o.length;if(o.length!==0)try{for(const f of o){const c=Ve().find(_=>_.id===f.matchedFloorId);if(!c)continue;const d=await ut(f.file);await t.upsertFloor?.({id:c.id,buildingId:c.buildingId,kind:c.kind,level:c.level,name:c.name,areaSqm:c.areaSqm,planImageUrl:d})}u=[],A=`批量导入完成：已更新 ${o.length} 个楼层 2D 底图${n>0?`（跳过 ${n} 张未识别文件）`:""}。`,await v()}catch(f){K=f instanceof Error?f.message:String(f),ae()}}),e.querySelector("[data-add-zone]")?.addEventListener("submit",async o=>{o.preventDefault();const n=o.currentTarget.dataset.addZone,f=new FormData(o.currentTarget),c=String(f.get("zoneName")??"").trim(),d=String(f.get("zoneCat")??"office");if(c)try{const _=await t.upsertZone?.({floorId:n,name:c,category:d});_&&(xe[_.id]={left:20,top:20,width:24,height:24}),A=`已添加功能区「${c}」。`,await v()}catch(_){K=_ instanceof Error?_.message:String(_),ae()}}),e.querySelectorAll("[data-edit-zone]").forEach(o=>{o.addEventListener("click",()=>{E=o.dataset.editZone??null,ae()})}),e.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{E=null,ae()}),e.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async o=>{o.preventDefault();const n=o.currentTarget,f=n.dataset.saveEditZone,c=n.dataset.zoneFloor,d=new FormData(n),_=String(d.get("zName")??"").trim(),I=String(d.get("zCat")??"office");if(_)try{await t.upsertZone?.({id:f,floorId:c,name:_,category:I}),E=null,A=`已更新功能区「${_}」。`,await v()}catch(ve){K=ve instanceof Error?ve.message:String(ve),ae()}}),e.querySelectorAll("[data-del-zone]").forEach(o=>{o.addEventListener("click",async()=>{const n=o.dataset.delZone;if(n)try{await t.deleteZone?.(n),E===n&&(E=null),A="已删除该功能区。",await v()}catch(f){K=f instanceof Error?f.message:String(f),ae()}})}),e.querySelectorAll("[data-toggle-copy-zones]").forEach(o=>{o.addEventListener("click",()=>{const n=o.dataset.toggleCopyZones??null;fe===n?(fe=null,re.clear()):(fe=n,re=new Set(je(z).filter(f=>f.id!==n&&f.kind==="above"&&Ie().filter(c=>c.floorId===f.id).length===0).map(f=>f.id))),ae()})}),e.querySelectorAll("[data-copy-preset]").forEach(o=>{o.addEventListener("click",()=>{const n=o.dataset.copyPreset,f=je(z).filter(c=>c.id!==fe);n==="empty"?re=new Set(f.filter(c=>c.kind==="above"&&Ie().filter(d=>d.floorId===c.id).length===0).map(c=>c.id)):n==="above"?re=new Set(f.filter(c=>c.kind==="above").map(c=>c.id)):re.clear(),ae()})}),e.querySelectorAll("[data-copy-target-floor]").forEach(o=>{o.addEventListener("change",()=>{const n=o.dataset.copyTargetFloor;n&&(o.checked?re.add(n):re.delete(n),ae())})}),e.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async o=>{const n=o.currentTarget.dataset.confirmCopyZones,f=Array.from(re);if(!(!n||f.length===0))try{const c=await t.copyZonesToFloors?.(n,f)??0;fe=null,re.clear(),A=`已将当前层功能区复用至 ${f.length} 个目标楼层（共新增 ${c} 个功能区）。`,await v()}catch(c){K=c instanceof Error?c.message:String(c),ae()}});const Q=e.querySelector("[data-dep-canvas-search]");Q?.addEventListener("focus",()=>{!S&&!h&&(S=!0,ae(),e.querySelector("[data-dep-canvas-search]")?.focus())}),Q?.addEventListener("input",o=>{ge=o.currentTarget.value,S=!0,h=!1,ae();const n=e.querySelector("[data-dep-canvas-search]");n&&(n.focus(),n.setSelectionRange(ge.length,ge.length))}),e.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{S=!S,S&&(h=!1),ae()}),e.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{S=!1,h=!1,ae()}),e.querySelector("[data-toggle-new-dev]")?.addEventListener("click",()=>{h=!h,h&&(S=!1),ae()}),e.querySelectorAll("[data-brush]").forEach(o=>{o.addEventListener("click",()=>{ie=o.dataset.brush??"device",ae()})}),e.querySelectorAll("[data-dep-zoom]").forEach(o=>{o.addEventListener("click",()=>{const n=o.dataset.depZoom;n==="in"?J=Math.min(2.6,Number((J+.2).toFixed(2))):n==="out"?J=Math.max(.6,Number((J-.2).toFixed(2))):(J=1,ne=0,ue=0),w()})});const X=e.querySelector('[data-role="dep-stage"]');if(X&&!i){let o=!1,n=0,f=0,c=0,d=0;X.addEventListener("pointerdown",I=>{I.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(o=!0,n=I.clientX,f=I.clientY,c=ne,d=ue,X.classList.add("is-panning"),X.setPointerCapture?.(I.pointerId))}),X.addEventListener("pointermove",I=>{o&&(ne=c+(I.clientX-n),ue=d+(I.clientY-f),w())});const _=()=>{o&&(o=!1,X.classList.remove("is-panning"))};X.addEventListener("pointerup",_),X.addEventListener("pointercancel",_),X.addEventListener("wheel",I=>{I.preventDefault();const ve=I.deltaY<0?.12:-.12;J=Math.max(.6,Math.min(2.6,Number((J+ve).toFixed(2)))),w()},{passive:!1}),X.addEventListener("dblclick",I=>{I.target?.closest("button")||(J=1,ne=0,ue=0,w())})}e.querySelectorAll("[data-dev-filter]").forEach(o=>{o.addEventListener("click",()=>{H=o.dataset.devFilter??"all",ae()})}),e.querySelector("[data-create-dev]")?.addEventListener("submit",o=>{o.preventDefault();const n=new FormData(o.currentTarget),f=String(n.get("devName")??"").trim(),c=String(n.get("devPreset")??"sensor"),d=String(n.get("devZone")??"")||null,_=pt.find(ve=>ve.key===c)??pt[0],I=`dev-custom-${Date.now().toString(36)}`;T.push({id:I,name:f,category:_.category,projectId:g.projectId,buildingId:z,floorId:p,logicalZoneId:d,planPoint:{floorId:p,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),ye.set(I,{proxy:_.defaultProxy,relay:_.defaultRelay,meshUuid:`mesh-${p.slice(-4)}`}),_.category==="lighting"&&Ee.push({id:`lm-${Date.now().toString(36)}`,deviceId:I,channel:"回路 1",label:`${f.slice(0,6)}主灯`,x:.52,y:.45}),ee=I,se=!0,h=!1,j=!0,A=`已新增「${f}」（${_.hint}），已标注默认点位并标记待同步边缘。`,ae()}),e.querySelectorAll("[data-pick-dev]").forEach(o=>{o.addEventListener("click",n=>{n.stopPropagation(),ee=o.dataset.pickDev??null,se=!0,le=ze(p).find(c=>c.id===ee)?.physicalInstalled??!1,ae()})}),e.querySelector("[data-close-sel]")?.addEventListener("click",()=>{se=!1,i=!1,ae()}),e.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{i=!i,ae()}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{le=!le,ae()}),e.querySelectorAll("[data-ping-dev]").forEach(o=>{o.addEventListener("click",()=>{const n=ze(p).find(f=>f.id===o.dataset.pingDev);n&&(A=`已向「${n.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,ae())})}),e.querySelector("[data-add-light-marker]")?.addEventListener("click",o=>{const n=o.currentTarget.dataset.addLightMarker,f=Ee.filter(c=>c.deviceId===n).length+1;Ee.push({id:`lm-${Date.now().toString(36)}`,deviceId:n,channel:`回路 ${f}`,label:`照明点位 ${f}`,x:Math.min(.86,.35+f*.1),y:.42}),ie="light_marker",A=`已新增「回路 ${f}」可视化灯点。`,ae()}),e.querySelectorAll("[data-del-light-marker]").forEach(o=>{o.addEventListener("click",()=>{const n=Ee.findIndex(f=>f.id===o.dataset.delLightMarker);n>=0&&Ee.splice(n,1),ae()})}),e.querySelectorAll("[data-toggle-mesh-role]").forEach(o=>{o.addEventListener("click",()=>{const n=o.dataset.meshDev,f=o.dataset.toggleMeshRole,c=ye.get(n)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};c[f]=!c[f],ye.set(n,c),j=!0,A=`已更新节点 ${f.toUpperCase()} 状态，记得在「网络与拓扑」中同步下发至边缘网关。`,ae()})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async o=>{const n=ze(p).find(_=>_.id===ee);if(!i||!n)return;const f=o.currentTarget.getBoundingClientRect(),c=Math.max(.02,Math.min(.98,(o.clientX-f.left)/f.width)),d=Math.max(.02,Math.min(.98,(o.clientY-f.top)/f.height));if(T.some(_=>_.id===n.id)){n.planPoint={floorId:p,planVersion:1,x:Number(c.toFixed(4)),y:Number(d.toFixed(4))},i=!1,A=`已更新「${n.name}」图上坐标。`,ae();return}try{await t.updateDevicePlanPoint({deviceId:n.id,floorId:g.floorId,planVersion:n.planPoint?.planVersion??1,x:c,y:d,expectedVersion:n.version}),i=!1,A=`已更新「${n.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await v()}catch(_){K=_ instanceof Error?_.message:String(_),ae()}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async o=>{o.preventDefault();const n=ze(p).find(c=>c.id===ee);if(!n)return;const f=new FormData(o.currentTarget);if(T.some(c=>c.id===n.id)){n.physicalInstalled=le,n.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(f.get("protocol")),networkAddress:String(f.get("networkAddress")??""),portOrChannel:String(f.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:s.displayName},n.version+=1,j=!0,A=`已保存「${n.name}」的硬件绑定与物理复核状态。`,ae();return}try{await t.updateDeviceHardwareBinding({deviceId:n.id,gatewayId:n.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(f.get("protocol")),networkAddress:String(f.get("networkAddress")??""),portOrChannel:String(f.get("portOrChannel")??""),physicalInstalled:le,expectedVersion:n.version}),j=!0,A=`已保存「${n.name}」的硬件绑定与物理安装复核状态。`,await v()}catch(c){K=c instanceof Error?c.message:String(c),ae()}}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const o=ze(p).find(n=>n.id===ee);o&&W(o)}),e.querySelectorAll("[data-ftt-dev]").forEach(o=>{o.addEventListener("click",()=>{const n=ze(p).find(f=>f.id===o.dataset.fttDev);n&&W(n)})}),e.querySelectorAll("[data-batch-ftt]").forEach(o=>{o.addEventListener("click",()=>pe())}),e.querySelectorAll("[data-export-inv]").forEach(o=>{o.addEventListener("click",()=>Se())}),e.querySelectorAll("[data-open-param]").forEach(o=>{o.addEventListener("click",()=>{Me=o.dataset.openParam??null,ae()})}),e.querySelector("[data-close-param]")?.addEventListener("click",()=>{Me=null,ae()}),e.querySelector("[data-save-dev-params]")?.addEventListener("submit",o=>{o.preventDefault();const n=o.currentTarget.dataset.saveDevParams,f=new FormData(o.currentTarget);Re.set(n,{offDelayMin:Number(f.get("offDelayMin")??15),restoreMin:Number(f.get("restoreMin")??30),luxOn:Number(f.get("luxOn")??280),luxOff:Number(f.get("luxOff")??450)}),Me=null,j=!0,A="设备自治延时与光感门限参数已下发并同步至配置基线。",ae()}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{we=!we,ae()}),e.querySelector("[data-create-group]")?.addEventListener("submit",o=>{o.preventDefault();const n=new FormData(o.currentTarget),f=String(n.get("gName")??"").trim(),c=n.get("gTrack")??"mesh_auto",d=String(n.get("gType")??"灯光联动组");f&&(_e.unshift({id:`grp-${Date.now().toString(36)}`,track:c,groupType:d,name:f,floorId:p,includesAdapter:c==="mesh_auto",deviceIds:c==="mesh_auto"?["dev-e7f-gw-01"]:[]}),we=!1,c==="mesh_auto"&&(j=!0),A=`已新建${c==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${f}」。`,ae())}),e.querySelectorAll("[data-test-group]").forEach(o=>{o.addEventListener("click",()=>{const n=_e.find(f=>f.id===o.dataset.testGroup);n&&(A=`已向分组「${n.name}」发送群组试控指令，${n.deviceIds.length} 台成员回读正常。`,ae())})}),e.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>te()),e.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{De+=1,j=!1,A=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${De}）。`,ae()}),e.querySelectorAll("[data-topo-mode]").forEach(o=>{o.addEventListener("click",()=>{U=o.dataset.topoMode??"mesh",ae()})}),e.querySelectorAll("[data-topo-jump]").forEach(o=>{o.addEventListener("click",()=>{ee=o.dataset.topoJump??null,se=!0,l="floorplan",ae()})}),e.querySelector("[data-toggle-new-conn]")?.addEventListener("click",()=>{oe=!oe,ae()}),e.querySelector("[data-create-conn]")?.addEventListener("submit",o=>{o.preventDefault();const n=new FormData(o.currentTarget),f=String(n.get("cName")??"").trim(),c=String(n.get("cProto")??"bacnet_ip"),d=String(n.get("cEndpoint")??"").trim();if(ce.some(_=>_.endpoint===d)){K=`端口冲突警告：局域网端点「${d}」已被其他通道占用，请更换端口后重试。`,ae();return}ce.unshift({id:`conn-${Date.now().toString(36)}`,projectId:g.projectId,buildingId:z,floorId:p,name:f,protocol:c,endpoint:d,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),oe=!1,K="",A=`已接入「${f}」（${d}），连通测试通过（18 ms）。`,ae()}),e.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{A="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",ae()}),e.querySelectorAll("[data-expand-conn]").forEach(o=>{o.addEventListener("click",()=>{const n=o.dataset.expandConn??null;Te=Te===n?null:n,ae()})}),e.querySelectorAll("[data-ping-conn]").forEach(o=>{o.addEventListener("click",()=>{const n=ce.find(f=>f.id===o.dataset.pingConn);n&&(K="",n.status==="connected"?A=`连通测试通过：「${n.name}」（${n.endpoint}）响应正常，延迟 18 ms。`:K=`连通测试异常：「${n.name}」（${n.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,ae())})}),e.querySelectorAll("[data-copy-endpoint]").forEach(o=>{o.addEventListener("click",async()=>{const n=o.dataset.endpointVal??"",f=o.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(n),Le=f,ae(),window.setTimeout(()=>{Le=null,ae()},1600)}catch{}})}),e.querySelectorAll("[data-preview-doc]").forEach(o=>{o.addEventListener("click",()=>{const n=$t.find(f=>f.id===o.dataset.previewDoc);n&&(A=`已调阅工程附件「${n.name}」（关联范围：${n.boundScope}，更新于 ${n.updatedAt}）。`,ae())})}),e.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const o=await t.freezeDeliveryBatch(g.floorId,"部署总览验收发起交付冻结");A=`已生成交付冻结快照 ${o.versionTag}（核验 ${o.verifiedCount}/${o.deviceCount}）。`,await v()}catch(o){K=o instanceof Error?o.message:String(o),ae()}})}await v()}function xt(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const t=e.name.includes("702")?"702 照明":"主照明",s=Number(e.telemetry.dimming?.value??0);return s>0?`${t} ${s}%`:`${t} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const St={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},ba={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},fa=he("chevron-down",12),ha={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function V(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function It(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面"))return 999;const s=t.match(/(-?\d+)/);if(!s)return 0;const a=Number(s[1]);return t.startsWith("B")?-Math.abs(a):a}async function ya(e,t,s){const a=await t.getSpatialTree(),l=t.mode==="demo",r=s.scope.canControlDevices,F=s.scope.canManageAlarms,C=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null,O=a.floors.filter(k=>s.scope.allowedFloorIds.includes(k.id)),G=C||a.projects.length<=1&&a.buildings.length<=1&&O.length<=1?"floors-only":a.projects.length>1?"multi-project":a.buildings.length>1?"single-project-multi-building":"single-building",D=G==="multi-project",ie=G==="multi-project"||G==="single-project-multi-building",H=G!=="floors-only",ge=G==="floors-only"&&O.length<=1;let S=Ge(),se="devices",U=!1,J=!1,ne="",ue="",Z="all",de="all";const ce=new URLSearchParams(window.location.hash.split("?")[1]??""),be=ce.get("device"),xe=ce.get("zone");let T=be,M=!!be,z="control",p="",q=!1,P="today",$="devices";const L=new Set,u=new Set;let E=[],fe=[],re=[],ee=null,le=null,i=1,h=0,oe=0,we=null;function Me(){return a.zones.filter(k=>!(S.level==="floor"&&k.floorId!==S.floorId||C&&!C.includes(k.id)))}function Le(k){return[...a.floors.filter(R=>R.buildingId!==k?!1:G==="floors-only"?s.scope.allowedFloorIds.includes(R.id):!0)].sort((R,v)=>It(v.name)-It(R.name))}async function Te(k,Y=!1){let R=k;R.level==="all-projects"&&!D&&(R={level:"project",projectId:a.projects[0]?.id??g.projectId}),R.level==="project"&&!ie&&(R={level:"building",projectId:R.projectId,buildingId:a.buildings[0]?.id??g.buildingId}),R.level==="building"&&!H&&(R={level:"floor",projectId:R.projectId,buildingId:R.buildingId,floorId:O[0]?.id??g.floorId}),S=R,ot(R),le=null,de=Y&&xe?xe:"all",q=!1,J=!1,U=!1,u.clear(),i=1,h=0,oe=0,we&&(we(),we=null);const v=S.level==="floor"?S.floorId:g.floorId;if(S.level==="floor")try{const[w,W,pe]=await Promise.all([t.getFloorDevices(S.floorId),t.listAlarms(S.floorId),t.listWorkOrders(S.floorId)]);E=w,fe=W,re=pe,E.some(te=>te.id===T)?Y&&be&&(M=!0):(T=E[1]?.id??E[0]?.id??null,M=!1),we=t.subscribeFloorEvents(S.floorId,async te=>{te.type==="control.receipt.updated"&&ee?.batchId===te.batchId&&(ee=await t.getControlBatch(te.batchId)),(te.type==="telemetry.updated"||te.type==="device.connectivity")&&S.level==="floor"&&(E=await t.getFloorDevices(S.floorId)),te.type==="alarm.changed"&&S.level==="floor"&&(fe=await t.listAlarms(S.floorId)),b()})}catch(w){E=[],fe=[],re=[],T=null,M=!1,le=w instanceof Error?w.message:String(w)}else{M=!1;const[w,W,pe]=await Promise.all([t.getFloorDevices(v).catch(()=>[]),t.listAlarms(v).catch(()=>[]),t.listWorkOrders(v).catch(()=>[])]);E=w,fe=W,re=pe}Ie()}function De(k){return k?a.zones.find(Y=>Y.id===k)?.name??k:"未分配逻辑区"}function j(){const k=ue.trim().toLowerCase();return E.filter(Y=>de!=="all"&&Y.logicalZoneId!==de||Z!=="all"&&Y.category!==Z?!1:k?Y.name.toLowerCase().includes(k)||Y.id.toLowerCase().includes(k)||De(Y.logicalZoneId).toLowerCase().includes(k):!0)}async function m(k,Y,R){!k.length||S.level!=="floor"||!r||(k.forEach(v=>L.add(v)),ee=await t.dispatchControlBatch({floorId:S.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:k.map(v=>({deviceId:v,command:Y,targetValue:R}))}),b())}function b(){const k=document.activeElement,Y=k?.dataset?.role,R=k&&"selectionStart"in k?k.selectionStart:null,v=k&&"selectionEnd"in k?k.selectionEnd:null,w=e.querySelector(".pacom-list")?.scrollTop??0;Ie();const W=e.querySelector(".pacom-list");if(W&&(W.scrollTop=w),Y==="search"||Y==="space-search"){const pe=e.querySelector(`[data-role="${Y}"]`);pe&&(pe.focus(),R!==null&&v!==null&&pe.setSelectionRange(R,v))}}function A(){const k=e.querySelector('[data-role="canvas-viewport"]');k&&(k.style.transform=`translate(${h}px, ${oe}px) scale(${i})`);const Y=e.querySelector('[data-role="zoom-label"]');Y&&(Y.textContent=`${Math.round(i*100)}%`)}function K(k){if(k==="all")return{level:"all-projects"};const Y=k.split(":");return Y[0]==="project"&&Y[1]?{level:"project",projectId:Y[1]}:Y[0]==="building"&&Y[1]&&Y[2]?{level:"building",projectId:Y[1],buildingId:Y[2]}:Y[0]==="floor"&&Y[1]&&Y[2]&&Y[3]?{level:"floor",projectId:Y[1],buildingId:Y[2],floorId:Y[3]}:{level:"all-projects"}}function ye(k){const Y=S;if(Y.level==="all-projects"){const R=ue.trim().toLowerCase(),v=a.projects.filter(w=>!R||w.name.toLowerCase().includes(R));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${v.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${he("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${v.map(w=>{const W=a.buildings.filter(pe=>pe.projectId===w.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${V(w.id)}">
                  <div>
                    <div class="pacom-row-title">${V(w.name)}</div>
                    <div class="pacom-row-sub">${V(w.city??"")} · ${W} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(Y.level==="project"){const R=ue.trim().toLowerCase(),v=a.buildings.filter(pe=>pe.projectId===Y.projectId&&(!R||pe.name.toLowerCase().includes(R))),w=E.filter(pe=>pe.connectivity==="online").length,W=E.length?Math.round(w/E.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${v.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${he("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${v.map(pe=>{const te=pe.id===g.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${V(pe.projectId)}:${V(pe.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${te&&k>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${V(pe.name)}</div>
                      <div class="pacom-row-sub">地上 ${pe.aboveFloors} 层 · ${pe.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${te?"pacom-badge--accent":"pacom-badge--neutral"}">${te?`在线 ${W}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(Y.level==="building"){const R=ue.trim().toLowerCase(),v=Le(Y.buildingId).filter(W=>!R||W.name.toLowerCase().includes(R)),w=a.buildings.find(W=>W.id===Y.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${V(w?.name??"楼宇")} 楼层导览（${v.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${he("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${v.map(W=>{const pe=s.scope.allowedFloorIds.includes(W.id),te=W.id===g.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${pe?"":"opacity:0.6;"}" data-nav-scope="floor:${V(Y.projectId)}:${V(Y.buildingId)}:${V(W.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${te&&k>0?"pacom-dot--warning":W.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${V(w?.name??"")} ${V(W.name)}</div>
                      <div class="pacom-row-sub">${W.plan?"2D 平面控图就绪":"暂未上传平面图"}${te&&k>0?` · ${k} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${pe&&W.plan?"pacom-badge--online":"pacom-badge--neutral"}">${pe?W.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(se==="devices"){const R=j(),v=Me(),w=Array.from(u);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${C?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${C.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${Z==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${Z==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${Z==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${Z==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${Z==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${R.length} 台${r&&w.length?` · 已选 ${w.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${he("x",14)}</button>
          </div>
          ${v.length>0&&!le?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${de==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${v.map(W=>`<button type="button" class="pacom-zone-pill ${de===W.id?"is-active":""}" data-filter-zone="${V(W.id)}">${V(W.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${le?`<div class="pacom-alert-banner">${V(le)}</div>`:R.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':R.map(W=>{const pe=W.id===T&&M,te=u.has(W.id),Se=W.connectivity==="offline",$e=Se?"pacom-dot--critical":"pacom-dot--online",me=Se?"离线":W.category==="lighting"?`${W.telemetry.dimming?.value??"--"}%`:W.category==="hvac"?`${W.telemetry.setpoint?.value??"--"}°C`:W.category==="sensor"?`${W.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${pe?"is-selected":""}" data-select-device="${V(W.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${r?`<input type="checkbox" name="devCheck-${V(W.id)}" data-check-device="${V(W.id)}" ${te?"checked":""} style="margin-top:3px;" aria-label="勾选 ${V(W.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${V(W.name)}</div>
                              <div class="pacom-row-sub">${V(De(W.logicalZoneId).replace(/^7F\s*/,""))} · ${V(St[W.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${Se?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${$e}"></span>${V(me)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${r&&w.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${w.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(se==="zones"){const R=Me(),v={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${R.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${he("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${R.map(w=>{const W=E.filter(me=>me.logicalZoneId===w.id),pe=W.filter(me=>me.connectivity==="online").length,te=W.filter(me=>me.category==="lighting"||me.category==="hvac").length,Se=de===w.id,$e=v[w.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${Se?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${Se?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${V(Se?"all":w.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${V(w.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${pe}/${W.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${$e.temp} · ${$e.occ}</div>
                  ${te>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${V(w.id)}" data-zone-val="true" ${r?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${V(w.id)}" data-zone-val="false" ${r?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${fe.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${he("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${fe.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':fe.map(R=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${V(R.title)}</strong>
                      <span class="pacom-badge ${R.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${R.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${V(R.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${V(R.deviceId)}">定位设备</button>
                      ${R.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${V(R.id)}" ${F?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function Ee(k){const Y=S,R=Me().length,v=Y.level==="floor"?"搜索设备或区域…":Y.level==="building"?"搜索楼层…":Y.level==="project"?"搜索楼宇…":"搜索园区…",w=Y.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${U&&se==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${E.length}</button>
          <button type="button" class="pacom-hud-pill ${U&&se==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${R}</button>
          <button type="button" class="pacom-hud-pill ${k>0?"pacom-hud-pill--alert":""} ${U&&se==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${k}</button>
        `:Y.level==="building"?`
            <button type="button" class="pacom-hud-pill ${U?"is-active":""}" data-toggle-hud="1">楼层 ${Le(Y.buildingId).length}</button>
            ${k>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${k}</button>`:""}
          `:Y.level==="project"?`
              <button type="button" class="pacom-hud-pill ${U?"is-active":""}" data-toggle-hud="1">楼宇 ${a.buildings.filter(W=>W.projectId===Y.projectId).length}</button>
              ${k>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${k}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${U?"is-active":""}" data-toggle-hud="1">园区 ${a.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${he("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${v}" value="${V(ue)}" aria-label="${v}" />
          ${w}
        </div>
        ${U?`<div class="pacom-hud-sheet" data-role="hud-sheet">${ye(k)}</div>`:""}
      </div>
    `}function _e(k){if(ge||S.level!=="building"&&S.level!=="floor")return"";const Y=S.buildingId,R=S.projectId,v=Le(Y);return!H&&v.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${H?`<button type="button" class="pacom-elev-item ${S.level==="building"?"is-active":""}" data-nav-scope="building:${V(R)}:${V(Y)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${v.map(w=>{const W=s.scope.allowedFloorIds.includes(w.id),pe=S.level==="floor"&&S.floorId===w.id,te=w.id===g.floorId&&k>0;return`
              <button type="button" class="pacom-elev-item ${pe?"is-active":""} ${W?"":"is-locked"}"
                data-nav-scope="floor:${V(R)}:${V(Y)}:${V(w.id)}"
                title="${V(w.name)}${W?te?` · ${k} 条告警`:"":"（无权限）"}">
                ${te?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${V(w.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function Re(k,Y){const R=S;if(R.level==="floor")return le?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${$==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${$==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${$==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${he("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(i*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${he("plus",14)}</button>
        </div>
      `;const v=E.length?Math.round(k/E.length*100):100,w=R.level==="building"?"418 kWh":"1,248 kWh",W=Math.round(96.2*.45+93.6*.35+v*.2),pe=R.level==="building"?Le(R.buildingId).find(te=>te.id===g.floorId)??Le(R.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${W}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="environment">
          <span>舒适度 <strong>96.2%</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="energy">
          <span>今日能耗 <strong>${w}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${Y>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${Y}</strong></span>
        </button>
        ${R.level==="building"&&pe?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${V(R.projectId)}:${V(R.buildingId)}:${V(pe.id)}">进入 ${V(pe.name)} 平面图 →</button>`:""}
      </div>
    `}function Pe(k,Y){const R=S,v=E.length?Math.round(k/E.length*100):100;if(R.level==="all-projects")return`
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
            ${a.projects.map((te,Se)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${Se===0?50:28}%; top:${Se===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${V(te.id)}">
                  <span class="pacom-dot ${Y>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${V(te.name)} · 在线 ${v}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(R.level==="project"){const te=a.projects.find($e=>$e.id===R.projectId)??a.projects[0],Se=a.buildings.filter($e=>!te||$e.projectId===te.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${V(te?.imageUrl??"./media/gzlab.jpg")}" alt="${V(te?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${Se.map(($e,me)=>{const qe=$e.id===g.buildingId;return`
                  <button type="button" class="pacom-pin ${qe?"is-selected":""}" style="left:${me===0?56:38}%; top:${me===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${V($e.projectId)}:${V($e.id)}">
                    <span class="pacom-dot ${qe&&Y>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${V($e.name)} · ${qe?`在线 ${v}% · 告警 ${Y}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(R.level==="building"){const te=a.buildings.find($e=>$e.id===R.buildingId),Se=Le(R.buildingId).find($e=>$e.id===g.floorId)??Le(R.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${V(te?.imageUrl??"./media/building-e.webp")}" alt="${V(te?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${Se?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${V(R.projectId)}:${V(R.buildingId)}:${V(Se.id)}">
                    <span class="pacom-dot ${Y>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${V(te?.name??"")} ${V(Se.name)} · 在线 ${k}/${E.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const w=a.floors.find(te=>te.id===R.floorId),W=a.buildings.find(te=>te.id===R.buildingId),pe=Me();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${le?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${V(le)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${h}px, ${oe}px) scale(${i});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${V(w?.plan?.imageUrl??"./media/floors/e/07F.webp")}" alt="${V(W?.name??"楼宇")} ${V(w?.name??"7F")} 平面图" />
                  ${pe.map((te,Se)=>{const $e=ha[te.id];if(!$e)return"";const me=de===te.id,qe=["23.2°C","24.6°C","22.8°C","23.9°C"],Ue=["有人 74%","会议中","有人 52%","空闲"],We=$==="temp"?` · ${qe[Se%qe.length]}`:$==="occupancy"?` · ${Ue[Se%Ue.length]}`:"",nt=$==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":$==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${me?"is-active":""}"
                          style="left:${$e.left}%; top:${$e.top}%; width:${$e.width}%; height:${$e.height}%; ${me?"":nt}"
                          data-filter-zone="${V(me?"all":te.id)}"
                          title="${V(te.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${V(te.name.replace(/^7F\s*/,""))}${We}</span>
                        </button>`}).join("")}
                  ${E.filter(te=>te.planPoint).map(te=>{const Se=fe.some(We=>We.deviceId===te.id&&We.status==="active"),$e=U&&se==="alarms",me=de!=="all"&&te.logicalZoneId!==de||$e&&!Se,qe=$e&&Se?"background:var(--pacom-status-critical);":"",Ue=te.category==="gateway"?Math.min(92,te.planPoint.y*100+5.5):te.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${te.id===T&&M?"is-selected":""} ${te.connectivity==="offline"?"pacom-pin--offline":""} ${me?"pacom-pin--dimmed":""}"
                          style="left:${(te.planPoint.x*100).toFixed(2)}%; top:${Ue.toFixed(2)}%; ${qe}"
                          data-pin-device="${V(te.id)}" title="${V(te.name)}">
                          <span class="pacom-dot ${Se?"pacom-dot--critical":te.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${V(xt(te))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function Ve(){if(S.level!=="floor"||!M)return"";const k=E.find(me=>me.id===T);if(!k)return"";const Y=k.category==="lighting",R=k.category==="hvac",v=Number(k.telemetry.dimming?.value??50),w=Number(k.telemetry.setpoint?.value??24),W=L.has(k.id),pe=fe.filter(me=>me.deviceId===k.id&&me.status==="active"),te=re.filter(me=>me.deviceId===k.id&&me.status!=="closed"),Se=R?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:Y?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],$e=Y?[{label:"当前开关",value:v>0?"开启":"关闭"},{label:"当前亮度",value:`${v}%`},{label:"实时功率",value:v>0?`${Math.round(v*1.4)} W`:"0 W"},{label:"运行模式",value:W?"人工覆盖":"自动策略"}]:R?[{label:"室内温度",value:`${k.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${w.toFixed(1)}°C`},{label:"运行工况",value:k.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:W?"人工覆盖":"自动策略"}]:k.category==="sensor"?[{label:"实时温度",value:`${k.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${k.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${k.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:k.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:k.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:k.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:k.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:k.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${V(k.name)}</h2>
            <div class="pacom-row-sub">${V(De(k.logicalZoneId))} · ${V(St[k.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${k.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${k.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${he("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${z==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${z==="trend"}" data-drawer-tab="trend">趋势与告警${pe.length>0?` (${pe.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${z==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${z==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${$e.map(me=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${me.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${V(me.value)}</strong>
                  </div>`).join("")}
            </div>

            ${R?`
                <div class="pacom-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${k.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${V(k.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${k.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${k.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${k.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${k.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${w.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${Y||R?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${W&&r?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${V(k.id)}">恢复自动策略</button>`:r?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${k.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${Y?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${r?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${r?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${v}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${v}" data-ctrl-slider="lighting.dimming" ${r?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${r?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${r?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${w-.5}" ${r?"":"disabled"}>-0.5°C</button>
                        <strong>${w.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${w+.5}" ${r?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${ee?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${V(ee.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${ee.receipts.map(me=>{const qe=ba[me.status]??{text:me.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${V(me.deviceId)}</strong> · ${V(me.command)} → ${V(me.targetValue)}</div>
                              ${me.errorMessage?`<div style="color:var(--pacom-status-critical);">${V(me.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${qe.badge}">${qe.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:z==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${Y?"亮度 %":R?"温度 °C":k.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${V(k.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${k.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${Y?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":R?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${pe.length===0&&te.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${pe.map(me=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${V(me.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${V(me.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${te.map(me=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${V(me.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${V(me.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${V(xt(k))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${V(De(k.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${p?`<div class="pacom-info-banner">${V(p)}</div>`:""}
                ${Se.map(me=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${V(me.name)}">${V(me.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${V(me.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="pacom-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${he("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${V(k.id)}</code> · v${k.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${k.planPoint?`x=${k.planPoint.x.toFixed(2)}, y=${k.planPoint.y.toFixed(2)} (图 v${k.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${k.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${k.hardwareBinding?`${k.hardwareBinding.protocol.toUpperCase()} · ${k.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function je(k,Y,R){if(!q)return"";const v=Math.max(0,E.length-k),w=P==="week",W=fe.filter(pe=>pe.status==="active").slice(0,2);return`
      <div class="pacom-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${w?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!w}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${w}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${he("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${w?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${w?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${V(R)}°C · ${k}/${E.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${Y} 告警 · ${v} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,L.size)} 覆盖 · ${re.filter(pe=>pe.status!=="closed").length} 工单</strong></div>
        </div>
        ${W.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${W.map(pe=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${V(pe.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${V(pe.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function Ie(){const k=fe.filter(v=>v.status==="active").length,Y=E.filter(v=>v.connectivity==="online").length,R=E.find(v=>v.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${Ke({tree:a,session:s,scope:S,activeAlarmCount:k,isOpen:J,searchKeyword:ne})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${le?l?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${q}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${Y}/${E.length} 在线 · ${V(R)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${fa}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${je(Y,k,R)}

        <main class="pacom-spatial-stage">
          ${Ee(k)}
          ${Pe(Y,k)}
          ${_e(k)}
          ${Re(Y,k)}
          ${Ve()}
        </main>
      </div>
    `,ze()}function ze(){Ye(e,{onToggle:()=>{J=!J,J&&(q=!1,U=!1),Ie(),J&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:v=>{ne=v,Ie();const w=e.querySelector("[data-global-space-search]");w&&(w.focus(),w.setSelectionRange(v.length,v.length))},onPick:v=>{J=!1,Te(v)}}),e.querySelectorAll("[data-nav-scope]").forEach(v=>{v.addEventListener("click",w=>{w.stopPropagation(),v.dataset.navScope&&Te(K(v.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(v=>{v.addEventListener("click",w=>{w.stopPropagation();const W=v.dataset.hudTab;U&&se===W?U=!1:(se=W,U=!0,J=!1,q=!1),Ie()})}),e.querySelectorAll("[data-toggle-hud]").forEach(v=>{v.addEventListener("click",w=>{w.stopPropagation(),U=!U,U&&(J=!1,q=!1),Ie()})}),e.querySelectorAll("[data-close-hud]").forEach(v=>{v.addEventListener("click",w=>{w.stopPropagation(),U=!1,Ie()})});const k=e.querySelector('[data-role="search"]');k?.addEventListener("focus",()=>{U||(U=!0,J=!1,q=!1,b())}),k?.addEventListener("input",v=>{ue=v.currentTarget.value,U=!0,b()}),e.querySelector('[data-role="category"]')?.addEventListener("change",v=>{Z=v.currentTarget.value,Ie()}),e.querySelectorAll("[data-filter-zone]").forEach(v=>{v.addEventListener("click",w=>{w.stopPropagation(),de=v.dataset.filterZone??"all",Ie()})}),e.querySelectorAll("[data-select-device]").forEach(v=>{v.addEventListener("click",w=>{w.target.tagName!=="INPUT"&&(T=v.dataset.selectDevice??null,M=!0,Ie())})}),e.querySelectorAll("[data-check-device]").forEach(v=>{v.addEventListener("change",()=>{const w=v.dataset.checkDevice;w&&(v.checked?u.add(w):u.delete(w),Ie())})}),e.querySelectorAll("[data-pin-device]").forEach(v=>{v.addEventListener("click",w=>{w.stopPropagation(),T=v.dataset.pinDevice??null,M=!0,J=!1,q=!1,Ie()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{M=!1,Ie()}),e.querySelectorAll("[data-drawer-tab]").forEach(v=>{v.addEventListener("click",()=>{z=v.dataset.drawerTab??"control",p="",Ie()})}),e.querySelectorAll("[data-drawer-doc]").forEach(v=>{v.addEventListener("click",()=>{p=`已调阅「${v.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,Ie()})}),e.querySelectorAll("[data-briefing-period]").forEach(v=>{v.addEventListener("click",()=>{P=v.dataset.briefingPeriod??"today",Ie()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(v=>{v.addEventListener("click",()=>{const w=v.dataset.goAlarmId??"";window.location.hash=w?`#alarms?alarm=${encodeURIComponent(w)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(v=>{v.addEventListener("click",()=>{const w=v.dataset.goWoId??"";window.location.hash=w?`#alarms?wo=${encodeURIComponent(w)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",v=>{const w=v.currentTarget.dataset.releaseOverride;w&&(L.delete(w),Ie())}),e.querySelectorAll("[data-zone-power]").forEach(v=>{v.addEventListener("click",w=>{w.stopPropagation();const W=v.dataset.zonePower,pe=v.dataset.zoneVal==="true";if(!W)return;const te=E.filter($e=>$e.logicalZoneId===W&&$e.category==="lighting").map($e=>$e.id),Se=E.filter($e=>$e.logicalZoneId===W&&$e.category==="hvac").map($e=>$e.id);te.length?m(te,"lighting.power",pe):Se.length&&m(Se,"hvac.power",pe)})}),e.querySelectorAll("[data-locate-device]").forEach(v=>{v.addEventListener("click",()=>{const w=v.dataset.locateDevice;w&&(T=w,M=!0,U=!1,Ie())})}),e.querySelectorAll("[data-go-alarms]").forEach(v=>{v.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(v=>{v.addEventListener("click",()=>{const w=v.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(w)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(v=>{v.addEventListener("click",()=>{const w=v.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(w)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(v=>{v.addEventListener("click",w=>{w.stopPropagation(),q=!q,q&&(J=!1,U=!1),Ie()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const v=E.filter($e=>$e.connectivity==="online").length,w=fe.filter($e=>$e.status==="active").length,W=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${v}/${E.length}（离线 ${E.length-v} 台）`,`待处理告警：${w} 条`,`人工覆盖中：${L.size} 台`].join(`
`),pe=new Blob([W],{type:"text/plain;charset=utf-8;"}),te=URL.createObjectURL(pe),Se=document.createElement("a");Se.href=te,Se.download="pacom-daily-briefing.txt",Se.click(),URL.revokeObjectURL(te)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(v=>{v.addEventListener("click",()=>{if(!T||!v.dataset.ctrlCmd)return;const w=v.dataset.ctrlVal??"",W=w==="true"?!0:w==="false"?!1:Number(w);m([T],v.dataset.ctrlCmd,W)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",v=>{const w=v.currentTarget;!T||!w.dataset.ctrlSlider||m([T],w.dataset.ctrlSlider,Number(w.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(v=>{v.addEventListener("click",()=>{const w=Array.from(u),W=v.dataset.batchVal??"",pe=W==="true"?!0:W==="false"?!1:W;m(w,v.dataset.batchCmd,pe)})}),e.querySelectorAll("[data-ack-alarm]").forEach(v=>{v.addEventListener("click",async()=>{!v.dataset.ackAlarm||S.level!=="floor"||!F||(await t.acknowledgeAlarm(v.dataset.ackAlarm,"首页快速确认"),fe=await t.listAlarms(S.floorId),Ie())})}),e.querySelectorAll("[data-canvas-layer]").forEach(v=>{v.addEventListener("click",()=>{const w=v.dataset.canvasLayer;w&&($=w,Ie())})}),e.querySelectorAll("[data-zoom]").forEach(v=>{v.addEventListener("click",()=>{const w=v.dataset.zoom;w==="in"?i=Math.min(2.6,Number((i+.2).toFixed(2))):w==="out"?i=Math.max(.6,Number((i-.2).toFixed(2))):(i=1,h=0,oe=0),A()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",v=>{v.preventDefault();const w=S;if(w.level!=="building"&&w.level!=="floor")return;const W=Le(w.buildingId),pe=[...H?[{level:"building",projectId:w.projectId,buildingId:w.buildingId}]:[],...W.map($e=>({level:"floor",projectId:w.projectId,buildingId:w.buildingId,floorId:$e.id}))],te=pe.findIndex($e=>$e.level==="building"?w.level==="building":$e.level==="floor"&&w.level==="floor"&&$e.floorId===w.floorId);if(te<0)return;const Se=Math.max(0,Math.min(pe.length-1,te+(v.deltaY>0?1:-1)));Se!==te&&pe[Se]&&Te(pe[Se])},{passive:!1});const R=e.querySelector('[data-role="canvas-stage"]');if(R&&!le){let v=!1,w=!1,W=0,pe=0,te=0,Se=0;R.addEventListener("pointerdown",me=>{me.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(v=!0,w=!1,W=me.clientX,pe=me.clientY,te=h,Se=oe,R.classList.add("is-panning"),R.setPointerCapture?.(me.pointerId))}),R.addEventListener("pointermove",me=>{if(!v)return;const qe=me.clientX-W,Ue=me.clientY-pe;(Math.abs(qe)>3||Math.abs(Ue)>3)&&(w=!0),h=te+qe,oe=Se+Ue,A()});const $e=()=>{v&&(v=!1,R.classList.remove("is-panning"),!w&&(U||J||q)&&(U=!1,J=!1,q=!1,Ie()))};R.addEventListener("pointerup",$e),R.addEventListener("pointercancel",$e),R.addEventListener("wheel",me=>{me.preventDefault();const qe=me.deltaY<0?.12:-.12;i=Math.max(.6,Math.min(2.6,Number((i+qe).toFixed(2)))),A()},{passive:!1}),R.addEventListener("dblclick",me=>{me.target?.closest("button")||(i=1,h=0,oe=0,A())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",v=>{v.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .pacom-briefing-pop")||(U||J||q)&&(U=!1,J=!1,q=!1,Ie())})}e.addEventListener("keydown",k=>{k.key==="Escape"&&(J||q||U||M)&&(J=!1,q=!1,U=!1,M=!1,Ie())}),await Te(S,!0)}const $a=new Set(["lighting","hvac","alarm_rules"]),kt={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},at=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function wa(e){const t=new Set;for(const s of e.actions)s.command.startsWith("lighting")?t.add("照明"):s.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function xa(e,t,s){const a=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${e<t?`<div style="position:absolute; left:${e/24*100}%; width:${(t-e)/24*100}%; top:0; bottom:0; border-radius:999px; background:${a};"></div>`:`
        <div style="position:absolute; left:${e/24*100}%; width:${(24-e)/24*100}%; top:0; bottom:0; border-radius:999px; background:${a};"></div>
        <div style="position:absolute; left:0; width:${t/24*100}%; top:0; bottom:0; border-radius:999px; background:${a};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function Sa(e,t,s){let a=Ge(),l=!1,r="",[F,C,O,G]=await Promise.all([t.getSpatialTree(),t.listScenes(g.floorId),t.getRuntimeSettings(g.projectId),t.getFloorDevices(g.floorId).catch(()=>[])]),D="manual",ie="balanced",H="all",ge=null,S="",se=!1,U=!1,J=!1,ne="all",ue=null,Z="",de="",ce=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const be=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],xe=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],T=[{deviceId:G[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],M=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${O.calendar.workdayStart} – ${O.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${O.calendar.nightGuardStart} – 次日 ${O.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],z=t.subscribeFloorEvents(g.floorId,async q=>{q.type==="control.receipt.updated"&&ge?.batchId===q.batchId&&(ge=await t.getControlBatch(q.batchId),p())});function p(){const q=S.trim().toLowerCase(),P=q?C.filter(i=>`${i.name} ${i.description}`.toLowerCase().includes(q)):C,$=O.rules.filter(i=>$a.has(i.category)),L=H==="all"?$:H==="cbm"?[]:$.filter(i=>i.category===H),u=H==="all"||H==="cbm",E=ne==="issues"?be.filter(i=>i.status!=="verified"):be,fe=at.find(i=>i.id===ie)??at[1],re=s.scope.canControlDevices,ee=s.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Ke({tree:F,session:s,scope:a,isOpen:l,searchKeyword:r})}
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${ce.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${ce.length>0?`人工覆盖中：${ce.length} 台 ${he("chevron-down",12)}`:`全部自动托管 ${he("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${J?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${be.length}）</button>
              ${D==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${se?"收起表单":"+ 新建场景"}</button>`:D==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D==="manual"}" data-scene-tab="manual">快捷场景（${C.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D==="rules"}" data-scene-tab="rules">条件联动（${$.length+xe.length}）</button>
          </nav>
        </header>

        ${U?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${ce.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${he("x",16)}</button>
              </div>
              ${ce.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':ce.map(i=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${i.name}</div>
                            <div class="pacom-row-sub">${i.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${i.id}" ${re?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${ce.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${re?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${J?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${he("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${ne==="all"}" data-log-filter="all">全部（${be.length}）</button>
                  <button class="pacom-tab" aria-selected="${ne==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${E.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${E.map(i=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${i.device}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${i.source}</span>
                        </div>
                        <span class="pacom-row-sub">${i.action} · ${i.at}</span>
                      </div>
                      <span class="pacom-badge ${i.status==="verified"?"pacom-badge--online":i.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${i.status==="verified"?"回读确认":i.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${Z?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${Z}</span></div>`:""}
          ${de?`<div class="pacom-alert-banner">${de}</div>`:""}

          ${D==="manual"?`
              ${ge?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${ge.batchId}</span>
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
                            ${ge.receipts.map(i=>`
                                <tr>
                                  <td><code style="font-size:12px;">${i.deviceId}</code></td>
                                  <td>${i.command}</td>
                                  <td>${String(i.targetValue)}${i.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${i.errorMessage}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${i.status==="verified_success"?"pacom-badge--online":i.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${i.status}</span>
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
                          <span class="pacom-setting-title">联动动作列表（${T.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${T.map((i,h)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${h}" aria-label="目标设备">
                                ${G.map(oe=>`<option value="${oe.id}" ${oe.id===i.deviceId?"selected":""}>${oe.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${h}" aria-label="执行指令">
                                <option value="lighting.dimming" ${i.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${i.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${i.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${h}" value="${i.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${h}" ${T.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${S}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${P.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${P.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':P.map(i=>{const h=wa(i),oe=i.actions.slice(0,3).map(we=>{const Me=G.find(Te=>Te.id===we.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??we.deviceId,Le=we.command==="lighting.dimming"?`亮度 ${we.targetValue}%`:we.command==="hvac.setpoint"?`设温 ${we.targetValue}°C`:we.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${Me} → ${Le}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${i.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${h.map(we=>`<span class="pacom-badge pacom-badge--accent">${we}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${i.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${i.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${oe}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${i.lastExecutedAt?i.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${i.id}" ${re?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:D==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${fe.title}</div>
                    <span class="pacom-kpi-delta">${fe.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${fe.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${fe.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${ce.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${at.map(i=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${ie===i.id}" data-oss-mode="${i.id}" ${re?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${i.title}</strong>
                          <span class="pacom-badge ${ie===i.id?"pacom-badge--online":"pacom-badge--neutral"}">${ie===i.id?"当前生效":i.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${i.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${i.estSaving}</span>
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
                          ${M.map(i=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${i.name}</span>
                                    ${i.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${i.windowLabel}</div>
                                </td>
                                <td>${xa(i.startHour,i.endHour,i.enabled)}</td>
                                <td><span class="pacom-row-sub">${i.scope}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${i.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${i.enabled}"
                                      aria-label="切换排程 ${i.name}"
                                      data-toggle-schedule="${i.id}"
                                      ${re?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(i=>{const h=i==="all"?"全部":kt[i]??i,oe=i==="all"?$.length+xe.length:i==="cbm"?xe.length:$.filter(we=>we.category===i).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${H===i}" data-rule-cat="${i}">
                              <span>${h}</span><span class="pacom-count-num">${oe}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${L.map(i=>{const h=ue===i.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${kt[i.category]??i.category}</span>
                                  <span>${i.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${i.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${i.summary} · 范围：${i.scopeLabel} · 回执：${i.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${i.id}">${h?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${i.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${i.enabled?"true":"false"}"
                                  aria-label="切换 ${i.name}"
                                  data-toggle-strategy-rule="${i.id}"
                                  data-rule-ver="${i.version}"
                                  data-rule-next="${!i.enabled}"
                                  ${ee?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${h?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${i.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":i.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${i.scopeLabel} · 当前版本：v${i.version} · 最近同步：${i.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${u?xe.map(i=>{const h=Math.min(100,Math.round(i.runtimeHours/i.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${i.name}</span>
                                      <span class="pacom-badge ${h>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${i.runtimeHours} / ${i.thresholdHours} h（${h}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${h}%; background:${h>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${i.equipment} · 上次重置：${i.lastReset}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${i.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${i.enabled}" data-toggle-cbm="${i.id}" aria-label="切换 ${i.name}" ${ee?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,Ye(e,{onToggle:()=>{l=!l,p(),l&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:i=>{r=i,p();const h=e.querySelector("[data-global-space-search]");h&&(h.focus(),h.setSelectionRange(i.length,i.length))},onPick:i=>{a=i,l=!1,p()}}),e.querySelectorAll("[data-scene-tab]").forEach(i=>{i.addEventListener("click",()=>{D=i.dataset.sceneTab??"manual",Z="",p()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(i=>{i.addEventListener("click",()=>{U=!U,p()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{ce=[],Z="已释放全部人工覆盖设备，自动节能策略已恢复托管。",p()}),e.querySelectorAll("[data-release-one]").forEach(i=>{i.addEventListener("click",()=>{const h=i.dataset.releaseOne;ce=ce.filter(oe=>oe.id!==h),Z="已恢复该设备的自动策略托管。",p()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(i=>{i.addEventListener("click",()=>{J=!J,p()})}),e.querySelectorAll("[data-log-filter]").forEach(i=>{i.addEventListener("click",()=>{ne=i.dataset.logFilter??"all",p()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{ge=null,p()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(i=>{i.addEventListener("click",()=>{const h=i.dataset.ossMode;if(!h)return;ie=h;const oe=at.find(we=>we.id===h);Z=`已切换至「${oe?.title??h}」模式（明日预测启动 ${oe?.predictedStart??""}）。`,p()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(i=>{i.addEventListener("click",()=>{const h=i.dataset.toggleSchedule,oe=M.find(we=>we.id===h);oe&&(oe.enabled=!oe.enabled,Z=`排程「${oe.name}」已${oe.enabled?"恢复启用":"临时暂停"}。`,p())})}),e.querySelectorAll("[data-rule-cat]").forEach(i=>{i.addEventListener("click",()=>{H=i.dataset.ruleCat??"all",p()})}),e.querySelectorAll("[data-expand-rule]").forEach(i=>{i.addEventListener("click",()=>{const h=i.dataset.expandRule??null;ue=ue===h?null:h,p()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(i=>{i.addEventListener("click",()=>{const h=xe.find(oe=>oe.id===i.dataset.toggleCbm);h&&(h.enabled=!h.enabled,Z=`工时维保规则「${h.name}」已${h.enabled?"启用":"停用"}。`,p())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(i=>{i.addEventListener("click",async()=>{de="";try{await t.toggleRuntimeRule(i.dataset.toggleStrategyRule,i.dataset.ruleNext==="true",Number(i.dataset.ruleVer)),O=await t.getRuntimeSettings(g.projectId),Z="条件联动规则状态与版本回执已更新。",p()}catch(h){de=h instanceof Error?h.message:String(h),p()}})}),e.querySelectorAll("[data-toggle-create]").forEach(i=>{i.addEventListener("click",()=>{se=!se,p()})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{T.push({deviceId:G[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),p()}),e.querySelectorAll("[data-del-draft-action]").forEach(i=>{i.addEventListener("click",()=>{const h=Number(i.dataset.delDraftAction);T.length>1&&(T.splice(h,1),p())})}),e.querySelectorAll("[data-draft-dev]").forEach(i=>{i.addEventListener("change",()=>{const h=T[Number(i.dataset.draftDev)];h&&(h.deviceId=i.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(i=>{i.addEventListener("change",()=>{const h=T[Number(i.dataset.draftCmd)];h&&(h.command=i.value)})}),e.querySelectorAll("[data-draft-val]").forEach(i=>{i.addEventListener("change",()=>{const h=T[Number(i.dataset.draftVal)];h&&(h.targetValue=i.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",i=>{const h=i.currentTarget,oe=h.selectionStart??h.value.length;S=h.value,p();const we=e.querySelector("[data-scene-search]");we&&(we.focus(),we.setSelectionRange(oe,oe))}),e.querySelectorAll("[data-exec-scene]").forEach(i=>{i.addEventListener("click",async()=>{de="";const h=C.find(oe=>oe.id===i.dataset.execScene);try{ge=await t.executeScene(i.dataset.execScene),C=await t.listScenes(g.floorId),be.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:h?.name??"E7F 场景",action:`${ge.receipts.length} 台设备联动下发`,status:"verified"}),p()}catch(oe){de=oe instanceof Error?oe.message:String(oe),p()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async i=>{i.preventDefault();const h=new FormData(i.currentTarget);try{await t.createScene({projectId:g.projectId,floorId:g.floorId,name:String(h.get("name")??""),description:String(h.get("description")??""),actions:T.map(oe=>({deviceId:oe.deviceId,command:oe.command,targetValue:oe.targetValue==="true"?!0:oe.targetValue==="false"?!1:Number(oe.targetValue)||50}))}),C=await t.listScenes(g.floorId),se=!1,Z=`快捷场景已保存（共绑定 ${T.length} 条联动动作）。`,p()}catch(oe){de=oe instanceof Error?oe.message:String(oe),p()}})}p(),window.addEventListener("hashchange",()=>z(),{once:!0})}const Et={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function mt(e,t){return e.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(s=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${s.name}</span>
            <span class="pacom-badge pacom-badge--neutral">v${s.version}</span>
            <span class="pacom-badge pacom-badge--accent">${s.scopeLabel}</span>
          </span>
          <span class="pacom-setting-desc">${s.summary} · 回执：${s.receiptSummary??"已同步"}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${s.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${s.enabled?"true":"false"}"
            aria-label="切换 ${s.name}"
            data-toggle-rule="${s.id}"
            data-rule-ver="${s.version}"
            data-rule-next="${!s.enabled}"
            ${t?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function Ia(e,t,s){let a="calendar",l=Ge(),r=!1,F="";const[C,O]=await Promise.all([t.getSpatialTree(),t.getRuntimeSettings(g.projectId)]);let G=O,D=G.calendar.workdayStart,ie=G.calendar.workdayEnd,H=G.calendar.nightGuardStart,ge=G.calendar.nightGuardEnd,S=!0,se=[];const U=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let J="flat";const ne={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},ue={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},Z={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},de={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},ce=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let be="",xe="";function T(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(p=>{const q=Et[p];return`
                <button type="button" class="pacom-unified-item" aria-current="${a===p}" data-stab="${p}">
                  ${he(q.icon,16)}
                  <span>${q.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function M(){const z=s.scope.canEditDeployment,p=C.projects[0]?.name??"当前项目",q=G.rules.filter(u=>u.category==="weather_area"),P=G.rules.filter(u=>u.category==="metering_carbon"),$=G.rules.filter(u=>u.category==="templates"),L=Et[a];e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Ke({tree:C,session:s,scope:l,maxGranularity:"project",isOpen:r,searchKeyword:F})}
            </div>
            <div class="pacom-header-meta">
              ${z?"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${T()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${L.label}</h2>
                <p class="pacom-unified-subtitle">${L.subtitle}</p>
              </div>
              ${be?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${be}</span></div>`:""}
              ${xe?`<div class="pacom-alert-banner">${xe}</div>`:""}

              ${a==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${G.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${D}" aria-label="工作日上班时间" ${z?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${ie}" aria-label="工作日下班时间" ${z?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${H}" aria-label="夜间值守开始" ${z?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${ge}" aria-label="夜间值守结束" ${z?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${S?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${S}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${z?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${z?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${U.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${U.map(u=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${u.date}</span><span class="pacom-badge pacom-badge--accent">${u.mode}</span></span>
                              <span class="pacom-setting-desc">${u.label}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${u.id}" ${z?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${z?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${z?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${z?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${z?"":"disabled"}>+ 添加例外</button>
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
                                ${se.map(u=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${u.ruleName}</div>
                                        ${u.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${u.conflictWarning}</div>`:""}
                                      </td>
                                      <td>${u.beforeWindow}</td>
                                      <td><strong>${u.afterWindow}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${u.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${u.conflictWarning?"交叠警告":"自动跟随"}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>`:""}`:a==="energy_weather"?`
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
                            <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${z?"":"disabled"}>
                              <option value="guanzhou_station" ${ne.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${ne.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${p}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${ne.billingArea}" aria-label="计费面积" ${z?"":"disabled"} />
                          </div>
                        </div>
                        ${mt(q,z)}
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
                                <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${ne.tariffYuan}" aria-label="综合电价" ${z?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${ne.tariffPeak}" ${z?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${ne.tariffFlat}" ${z?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${ne.tariffValley}" ${z?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${z?"":"disabled"}>
                              <option value="0.5271" ${ne.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${ne.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${mt(P,z)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${z?"":"disabled"}>保存口径参数</button>
                        </div>
                      </div>
                    </section>`:a==="guardrails"?`
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
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${ue.minTemp}" aria-label="最低设定温度" ${z?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${ue.maxTemp}" aria-label="最高设定温度" ${z?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${z?"":"disabled"}>
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
                              <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${ue.readbackTimeoutSec}" aria-label="回读超时阈值" ${z?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${z?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${mt($,z)}
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
                              <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${de.dailyDigestTime}" aria-label="每日简报发送时间" />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${de.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${de.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
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
                              <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${Z.delayMin}" ${z?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${Z.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${z?"":"disabled"}>
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
                              <select class="pacom-select" data-auto-wo="defaultGroup" aria-label="默认处理组" ${z?"":"disabled"}>
                                <option value="暖通运维组" ${Z.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${Z.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${Z.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${Z.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${z?"":"disabled"}>
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
                                ${ce.map(u=>`
                                    <tr>
                                      <td><strong>${u.groupName}</strong></td>
                                      <td>${u.scope}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${u.severity}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${u.channels}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${u.enabled}" data-toggle-nr="${u.id}" aria-label="切换 ${u.groupName} 通知规则">
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
    `,Ye(e,{onToggle:()=>{r=!r,M(),r&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:u=>{F=u,M();const E=e.querySelector("[data-global-space-search]");E&&(E.focus(),E.setSelectionRange(u.length,u.length))},onPick:u=>{l=u,r=!1,M()}}),e.querySelectorAll("[data-stab]").forEach(u=>{u.addEventListener("click",()=>{a=u.dataset.stab??"calendar",be="",xe="",M()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{S=!S,be=`法定节假日自动跳过已${S?"开启":"关闭"}。`,M()}),e.querySelector("[data-night-start]")?.addEventListener("change",u=>{H=u.currentTarget.value}),e.querySelector("[data-night-end]")?.addEventListener("change",u=>{ge=u.currentTarget.value}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",u=>{u.preventDefault();const E=new FormData(u.currentTarget);U.push({id:`sd-${Date.now()}`,date:String(E.get("date")??""),label:String(E.get("label")??""),mode:String(E.get("mode")??"保持工作日工况")}),be="已添加特殊例外日期，当日自动覆盖默认节假日排程。",M()}),e.querySelectorAll("[data-del-sd]").forEach(u=>{u.addEventListener("click",()=>{const E=U.findIndex(fe=>fe.id===u.dataset.delSd);E>=0&&U.splice(E,1),M()})}),e.querySelectorAll("[data-tariff-mode]").forEach(u=>{u.addEventListener("click",()=>{J=u.dataset.tariffMode??"flat",M()})}),e.querySelectorAll("[data-energy-field]").forEach(u=>{u.addEventListener("change",()=>{const E=u.dataset.energyField;E&&(ne[E]=u.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{be=J==="flat"?`能耗计费与气象口径已保存（面积 ${ne.billingArea} m² · 综合电价 ¥${ne.tariffYuan}/kWh · 因子 ${ne.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${ne.tariffPeak} / 平 ¥${ne.tariffFlat} / 谷 ¥${ne.tariffValley}）。`,M()}),e.querySelectorAll("[data-guard-field]").forEach(u=>{u.addEventListener("change",()=>{const E=u.dataset.guardField;E&&(ue[E]=u.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{be=`控制保护参数已保存（温区 ${ue.minTemp}–${ue.maxTemp}°C · 超时 ${ue.readbackTimeoutSec}s）。`,M()}),e.querySelectorAll("[data-auto-wo]").forEach(u=>{u.addEventListener("change",()=>{const E=u.dataset.autoWo;E&&(Z[E]=u.value),be="超时自动派单配置已更新。",M()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(u=>{u.addEventListener("click",()=>{const E=u.dataset.toggleAutowo;E&&(Z[E]=!Z[E],be="自动派单保护策略已更新。",M())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",u=>{de.dailyDigestTime=u.currentTarget.value,be=`每日晨间简报发送时刻已更新为 ${de.dailyDigestTime}。`,M()}),e.querySelectorAll("[data-notify-key]").forEach(u=>{u.addEventListener("click",()=>{const E=u.dataset.notifyKey;E&&(de[E]=!de[E],be="消息通知偏好已更新。",M())})}),e.querySelectorAll("[data-toggle-nr]").forEach(u=>{u.addEventListener("click",()=>{const E=ce.find(fe=>fe.id===u.dataset.toggleNr);E&&(E.enabled=!E.enabled,be=`工作组「${E.groupName}」的分流推送规则已${E.enabled?"启用":"停用"}。`,M())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",u=>{D=u.currentTarget.value}),e.querySelector("[data-cal-end]")?.addEventListener("change",u=>{ie=u.currentTarget.value}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{xe="",se=await t.previewCalendarImpact(g.projectId,D,ie),M()}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{xe="";try{const u=await t.saveWorkCalendar(g.projectId,D,ie,G.calendar.version);G={...G,calendar:{...u,nightGuardStart:H,nightGuardEnd:ge}},be=`工作时间配置已保存至 v${u.version}（工作日 ${u.workdayStart}–${u.workdayEnd} · 夜间值守 ${H}–${ge}）`,se=[],M()}catch(u){xe=u instanceof Error?u.message:String(u),M()}}),e.querySelectorAll("[data-toggle-rule]").forEach(u=>{u.addEventListener("click",async()=>{xe="";try{await t.toggleRuntimeRule(u.dataset.toggleRule,u.dataset.ruleNext==="true",Number(u.dataset.ruleVer)),G=await t.getRuntimeSettings(g.projectId),be="策略状态与版本回执已更新。",M()}catch(E){xe=E instanceof Error?E.message:String(E),M()}})})}M()}const Lt="pacom.web.sidebar.collapsed",ka=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,gt=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],bt={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},jt=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function vt(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in bt?e:"home"}function Oe(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Ea(e,t,s,a){e.classList.remove("bare-login");let l=s,r=vt(),F=localStorage.getItem(Lt)==="1",C=!1,O=!1,G="",D=!1,ie=0,H={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const ge=t.mode==="demo"&&typeof t.switchDemoRole=="function";async function S(){try{const[$,L,u,E,fe]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(g.floorId).catch(()=>[]),t.listAlarms(g.floorId).catch(()=>[]),t.listWorkOrders(g.floorId).catch(()=>[]),t.listScenes(g.floorId).catch(()=>[])]);H={devices:L,zones:$.zones,alarms:u,workOrders:E,scenes:fe},ie=u.filter(re=>re.status==="active").length,ce()}catch{}}function se(){return gt.map($=>`
        ${$.id==="settings"?'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${$.id}" aria-current="${r===$.id?"page":"false"}" title="${$.label}">
          ${he($.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${$.label}</span>
          ${$.id==="alarms"&&ie>0?`<span class="pacom-nav-count" title="待处理告警 ${ie} 条">${ie}</span>`:""}
        </button>`).join("")}function U(){const $=G.trim().toLowerCase(),L=$?gt.filter(h=>h.label.toLowerCase().includes($)).slice(0,4):gt,u=$?H.devices.filter(h=>`${h.name} ${h.id} ${h.category}`.toLowerCase().includes($)).slice(0,5):H.devices.slice(0,3),E=$?H.zones.filter(h=>h.name.toLowerCase().includes($)).slice(0,3):[],fe=$?H.alarms.filter(h=>`${h.title} ${h.message} ${h.id}`.toLowerCase().includes($)).slice(0,4):H.alarms.filter(h=>h.status==="active").slice(0,2),re=$?H.workOrders.filter(h=>`${h.title} ${h.id}`.toLowerCase().includes($)).slice(0,3):[],ee=$?H.scenes.filter(h=>`${h.name} ${h.description}`.toLowerCase().includes($)).slice(0,3):[],le=$?jt.filter(h=>`${h.title} ${h.category}`.toLowerCase().includes($)).slice(0,4):jt.slice(0,2),i=[];return u.length&&i.push(`<div class="pacom-search-group">${$?"设备（空间总览）":"常用设备直达"}</div>`+u.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Oe(h.name)}</span><span class="pacom-badge ${h.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${h.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),E.length&&i.push('<div class="pacom-search-group">功能区</div>'+E.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(h.id)}"><span>${Oe(h.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),fe.length&&i.push(`<div class="pacom-search-group">${$?"告警":"待处理告警"}</div>`+fe.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Oe(h.title)}</span><span class="pacom-badge pacom-badge--warning">${h.status==="active"?"待处理":"已确认"}</span></button>`).join("")),re.length&&i.push('<div class="pacom-search-group">运维工单</div>'+re.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Oe(h.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),ee.length&&i.push('<div class="pacom-search-group">智能策略</div>'+ee.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${Oe(h.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),le.length&&i.push('<div class="pacom-search-group">图纸与工程文档</div>'+le.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="${h.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Oe(h.title)}</span><span class="pacom-badge pacom-badge--neutral">${Oe(h.category)}</span></button>`).join("")),L.length&&i.push('<div class="pacom-search-group">工作区</div>'+L.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#${h.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${he(h.icon,14)}${Oe(h.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),i.length?i.join(""):`<div class="pacom-nav-empty">未找到与「${Oe(G)}」匹配的设备、区域、告警、工单或图纸</div>`}function J($){$.querySelectorAll("[data-search-hash]").forEach(L=>{L.addEventListener("click",()=>{const u=L.dataset.searchHash||"#home";D=!1,G="",ne(),C=!1,window.location.hash===u?(r=vt(),M(!0)):window.location.hash=u})})}function ne(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!D)return;const $=document.createElement("div");$.className="pacom-cmd-scrim",$.dataset.role="cmd-scrim",$.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${he("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${Oe(G)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${U()}
        </div>
      </div>
    `,e.appendChild($),$.addEventListener("click",E=>{E.target===$&&(D=!1,ne())});const L=$.querySelector('[data-role="cmd-input"]'),u=$.querySelector('[data-role="cmd-body"]');u&&J(u),L?.focus(),L?.addEventListener("input",E=>{G=E.currentTarget.value,u&&(u.innerHTML=U(),J(u))})}function ue(){if(!O)return"";const $=l.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${F?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${Oe(l.roleLabel)}${ge?" · 演示":""}</small>
          </span>
          ${he("check",16,"pacom-pop-check")}
        </button>

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${he("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${Oe($)}</span>
          <span class="pacom-pop-text">
            <b>${Oe(l.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${ge?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(Ae).map(L=>{const u=Ae[L],E=L===l.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${E}" data-pop-role="${L}">
                      <span class="pacom-pop-text">
                        <b>${Oe(u.roleLabel)}</b>
                        <small>${Oe(u.displayName)}</small>
                      </span>
                      ${E?he("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${he("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function Z($){switch(document.title=`${bt[r]} · PACOM Station`,r){case"home":await ya($,t,l);return;case"analysis":await ra($,t,l);return;case"alarms":await Xt($,t,l);return;case"scenes":await Sa($,t,l);return;case"settings":await Ia($,t,l);return;case"deployment":await va($,t,l);return;case"account":await Ut($,t,l,L=>{l=L,M(!0)},de);return}}async function de(){O=!1,C=!1,D=!1,P();try{await t.logout()}finally{window.location.hash="#login",a()}}function ce(){const $=e.querySelector('[data-role="nav-list"]');$&&($.innerHTML=se(),xe())}function be(){e.querySelector('[data-role="org-popover"]')?.remove();const $=e.querySelector('[data-role="org-menu-btn"]');if($&&$.setAttribute("aria-expanded",String(O)),!O)return;const L=document.createElement("div");L.innerHTML=ue().trim();const u=L.firstElementChild;u&&(e.appendChild(u),T())}function xe(){e.querySelectorAll("[data-route]").forEach($=>{$.addEventListener("click",()=>{const L=$.dataset.route;L===r&&!C||(r=L,C=!1,O=!1,window.location.hash=`#${r}`,M(!0))})})}function T(){e.querySelectorAll('[data-pop-act="go-account"]').forEach($=>{$.addEventListener("click",()=>{O=!1,C=!1,r="account",window.location.hash="#account",M(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{de()}),e.querySelectorAll("[data-pop-role]").forEach($=>{$.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const L=$.dataset.popRole;O=!1,C=!1,l=await t.switchDemoRole(L),await M(!0)})})}async function M($){const L=e.querySelector('[data-role="main-stage"]');if(!$&&L){const E=e.querySelector(".pacom-nav-rail");E&&(E.classList.toggle("is-collapsed",F),E.classList.toggle("is-mobile-open",C));const fe=e.querySelector('[data-role="mobile-scrim"]');fe&&fe.classList.toggle("is-open",C),be();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${he("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${bt[r]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Oe(l.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${C?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${F?"is-collapsed":""} ${C?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${ka}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${F?"展开侧栏":"收起侧栏"}" aria-label="${F?"展开侧栏":"收起侧栏"}">
              ${he("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${he("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${se()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${r==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${O}" title="广州国家实验室 · ${Oe(l.displayName)}">
              <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
              <span class="pacom-org-name">广州国家实验室</span>
              ${he("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{F=!F,O=!1,localStorage.setItem(Lt,F?"1":"0");const E=e.querySelector(".pacom-nav-rail"),fe=e.querySelector('[data-role="toggle-sidebar"]');E&&E.classList.toggle("is-collapsed",F),fe&&(fe.title=F?"展开侧栏":"收起侧栏",fe.setAttribute("aria-label",fe.title),fe.innerHTML=he("panel-left",16)),be()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{O=!1,be(),D=!0,ne()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{C=!C,M(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{C=!1,O=!1,M(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",E=>{E.stopPropagation(),O=!O,be()}),xe(),be(),ne();const u=e.querySelector('[data-role="main-stage"]');u&&await Z(u)}const z=$=>{const L=$.target;O&&!L?.closest('[data-role="org-popover"]')&&!L?.closest('[data-role="org-menu-btn"]')&&(O=!1,be())},p=$=>{if(($.metaKey||$.ctrlKey)&&$.key.toLowerCase()==="k"){$.preventDefault(),O=!1,be(),D=!D,ne();return}$.key==="Escape"&&(D?(D=!1,ne()):O?(O=!1,be()):C&&(C=!1,M(!1)))},q=()=>{r=vt(),O=!1,C=!1,D=!1,M(!0),S()};function P(){document.removeEventListener("click",z),document.removeEventListener("keydown",p),window.removeEventListener("hashchange",q)}document.addEventListener("click",z),document.addEventListener("keydown",p),window.addEventListener("hashchange",q),await M(!0),S()}const La=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ja='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Aa='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',Xe=he("x",16),At={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},Fa={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Ca(e){const t=e.replace(/\D/g,"");return t.length===11?`${t.slice(0,3)} •••• ${t.slice(7)}`:e}function Ne(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ft(e,t,s){e.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,l=!1,r="",F="",C="",O="",G=!1,D={},ie="",H=!1,ge="",S=0,se=null,U=null,J="privacy",ne="",ue="",Z="";const de=t.mode==="demo"&&typeof t.switchDemoRole=="function";function ce(){se!==null&&(window.clearInterval(se),se=null),e.classList.remove("bare-login")}function be(){S=60,se!==null&&window.clearInterval(se),se=window.setInterval(()=>{S-=1,S<=0&&(S=0,se!==null&&(window.clearInterval(se),se=null));const z=e.querySelector('[data-act="send-sms"]');z&&(z.disabled=S>0,z.textContent=S>0?`${S} 秒后重发`:ge?"重新获取":"获取验证码")},1e3)}function xe(){if(!U)return"";if(U==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Xe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Ne(ue)}" />
                  </div>
                </div>
                ${Z?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${Ne(Z)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(U==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Xe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${de?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${de?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(U==="legal"){const z=At[J],p=["privacy","terms","service"].map(q=>`<button type="button" role="tab" aria-selected="${J===q}" class="au-legal-tab ${J===q?"is-active":""}" data-act="switch-legal" data-tab="${q}">${At[q].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Xe}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${p}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${z.items.map(q=>`<li>${Ne(q)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return U==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Xe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${ne||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:U==="demoRoles"&&de?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Xe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(Ae).map(z=>{const p=Ae[z];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${z}">
                        <div>
                          <b>${Ne(p.roleLabel)} · ${Ne(p.displayName)}</b>
                          <small>${Ne(Fa[z])}</small>
                        </div>
                        <span style="color:#636363; font-size:14px;">进入 ›</span>
                      </button>
                    `}).join("")}
              </div>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            </div>
          </section>
        </div>
      `:""}function T(){const z=a?`
        <div class="au-field ${D.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ne(C)}" aria-invalid="${D.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${S>0?"disabled":""}>
              ${S>0?`${S} 秒后重发`:ge?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Ne(D.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${ge?`验证码已发送至 ${Ne(Ca(ge))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${D.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ne(r)}" aria-invalid="${D.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Ne(D.id??"")}</p>
        </div>
      `,p=a?`
        <div class="au-field ${D.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ne(O)}" aria-invalid="${D.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Ne(D.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${D.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${l?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ne(F)}" aria-invalid="${D.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${l?"隐藏密码":"显示密码"}">
              ${l?Aa:ja}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Ne(D.pwd??"")}</p>
        </div>
      `;e.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${La}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${H?"disabled":""}>
                  ${z}
                  ${p}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${ie?"":"hidden"}>${Ne(ie)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${G?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${H?"disabled":""}>
                    ${H?"正在登录…":"登录"}
                  </button>
                </fieldset>
              </form>
              <div class="au-login-actions">
                <button type="button" class="au-textbtn" data-act="toggle-sms">
                  <span>${a?"使用密码登录":"使用短信验证码登录"}</span>
                </button>
                <div class="au-login-divider" aria-hidden="true"></div>
                <p class="au-noacct">
                  没有账户？<button type="button" class="au-inline" data-act="open-register">注册</button>
                </p>
                ${de?`<div class="au-demo-bar">
                        <button type="button" class="au-demo-trigger" data-act="open-demo-roles">演示模式 · 5 角色免密体验 ›</button>
                      </div>`:""}
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
      ${xe()}
    `,M()}function M(){const z=e.querySelector("#au-id"),p=e.querySelector("#au-pwd"),q=e.querySelector("#au-sphone"),P=e.querySelector("#au-scode"),$=e.querySelector('input[name="keep"]');z?.addEventListener("input",()=>{if(r=z.value,D.id||ie){delete D.id,ie="",z.closest(".au-field")?.classList.remove("bad");const L=e.querySelector("#au-id-err");L&&(L.textContent="");const u=e.querySelector("#au-login-ferr");u&&(u.hidden=!0)}}),p?.addEventListener("input",()=>{if(F=p.value,D.pwd||ie){delete D.pwd,ie="",p.closest(".au-field")?.classList.remove("bad");const L=e.querySelector("#au-pwd-err");L&&(L.textContent="");const u=e.querySelector("#au-login-ferr");u&&(u.hidden=!0)}}),q?.addEventListener("input",()=>{if(C=q.value,D.sphone||ie){delete D.sphone,ie="",q.closest(".au-field")?.classList.remove("bad");const L=e.querySelector("#au-sphone-err");L&&(L.textContent="");const u=e.querySelector("#au-login-ferr");u&&(u.hidden=!0)}}),P?.addEventListener("input",()=>{if(O=P.value.replace(/\D/g,"").slice(0,6),P.value=O,D.scode||ie){delete D.scode,ie="",P.closest(".au-field")?.classList.remove("bad");const L=e.querySelector("#au-scode-err");L&&(L.textContent="");const u=e.querySelector("#au-login-ferr");u&&(u.hidden=!0)}}),$?.addEventListener("change",()=>{G=$.checked}),e.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{l=!l,T(),e.querySelector("#au-pwd")?.focus()}),e.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,D={},ie="",T(),e.querySelector(a?"#au-sphone":"#au-id")?.focus()}),e.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const L=C.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(L)){D={sphone:"请输入有效的手机号码"},T(),e.querySelector("#au-sphone")?.focus();return}D={},ge=L,be(),T(),e.querySelector("#au-scode")?.focus()}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async L=>{if(L.preventDefault(),!H){if(D={},ie="",a?(C.trim()||(D.sphone="请输入手机号码"),/^\d{6}$/.test(O.trim())||(D.scode="请输入 6 位验证码")):(r.trim()||(D.id="请输入电子邮箱或手机号码"),F||(D.pwd="请输入密码")),Object.keys(D).length>0){T();const u=Object.keys(D)[0];e.querySelector(`#au-${u}`)?.focus();return}H=!0,T();try{const u=await t.login({account:(a?C:r).trim(),password:a?O.trim():F});ce(),s(u)}catch(u){H=!1,ie=u instanceof Error?u.message:"账户或密码不正确",T()}}}),e.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{ue=r.trim(),Z="",U="reset",T(),e.querySelector("#au-rs-id")?.focus()}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{U="register",T()}),e.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{U="legal",T()}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{ne="",U="contact",T()}),e.querySelectorAll('[data-act="open-demo-roles"]').forEach(L=>{L.addEventListener("click",()=>{U="demoRoles",T()})}),e.querySelectorAll('[data-act="close-modal"]').forEach(L=>{L.addEventListener("click",()=>{U=null,T()})}),e.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",L=>{L.target===L.currentTarget&&(U=null,T())}),e.querySelectorAll('[data-act="switch-legal"]').forEach(L=>{L.addEventListener("click",()=>{const u=L.dataset.tab;u&&(J=u,T())})}),e.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),ne="已复制"}catch{ne="support@pacom.cn"}T()}),e.querySelector("#au-reset-form")?.addEventListener("submit",L=>{L.preventDefault(),ue=e.querySelector("#au-rs-id")?.value.trim()??"",ue?de?Z="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":Z="如账户存在，验证码已发送。":Z="请输入电子邮箱或手机号码",T()}),e.querySelectorAll('[data-act="pick-demo-role"]').forEach(L=>{L.addEventListener("click",async()=>{const u=L.dataset.roleId;if(!u||!t.switchDemoRole)return;const E=await t.switchDemoRole(u);ce(),s(E)})})}T()}async function qa(){const e=document.getElementById("app");if(e)try{const t=_t(),s=await t.getSession(),a=async l=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Ea(e,t,l,()=>{Ft(e,t,r=>{a(r)})})};if(!s||window.location.hash==="#login"){Ft(e,t,l=>{a(l)});return}await a(s)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(t)}</div></div>`}}qa();
//# sourceMappingURL=index-D9C9y_hz.js.map
