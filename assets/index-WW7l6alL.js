(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const k of r.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&a(k)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();const v={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"};function Kt(){const e="2026-11-25T09:00:00Z",t=[];for(let r=1;r<=22;r+=1){const k=r===7?v.floorId:r===8?v.lockedFloor8Id:r===6?v.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${r}`,L=String(r).padStart(2,"0");t.push({id:k,buildingId:v.buildingId,kind:"above",level:r,name:`${r}F`,areaSqm:r===7?1383.1:r===1?2680:r<=4?1920:1480,plan:{floorId:k,imageUrl:`./media/floors/e/${L}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const o="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";t.push({id:o,buildingId:v.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:o,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}});const a=[];for(let r=1;r<=12;r+=1){const k=`structure-f-above-${r}`,L=String(r).padStart(2,"0");a.push({id:k,buildingId:v.buildingFId,kind:"above",level:r,name:`${r}F`,areaSqm:r===1?2450:r<=3?2100:1580,plan:{floorId:k,imageUrl:`./media/floors/f/${L}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const i="structure-f-roof-1";return a.push({id:i,buildingId:v.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:i,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}}),{projects:[{id:v.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"},{id:v.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:v.buildingId,projectId:v.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:v.buildingFId,projectId:v.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...t,...a],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:v.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:v.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:v.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:v.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:o,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:i,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Tt=Kt(),dt=Tt.floors.map(e=>e.id),Te={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[v.projectId,v.project1Id],allowedBuildingIds:[v.buildingId,v.buildingFId],allowedFloorIds:[...dt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[v.projectId],allowedBuildingIds:[v.buildingId,v.buildingFId],allowedFloorIds:[...dt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[v.projectId],allowedBuildingIds:[v.buildingId],allowedFloorIds:[v.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[v.projectId],allowedBuildingIds:[v.buildingId,v.buildingFId],allowedFloorIds:[...dt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[v.projectId],allowedBuildingIds:[v.buildingId],allowedFloorIds:[v.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},st="pacom.web.demo.role",wt="pacom.web.demo.spatial.v5";class Yt{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){this.spatial=this.loadSpatial(),this.syncAdminScopesFromSpatial();const t=typeof sessionStorage<"u"?sessionStorage.getItem(st):null;t&&Te[t]&&(this.activeSession=structuredClone(Te[t]));const o=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:v.projectId,buildingId:v.buildingId,floorId:v.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:v.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:o,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:v.projectId,buildingId:v.buildingId,floorId:v.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:v.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:v.projectId,buildingId:v.buildingId,floorId:v.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:v.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:v.projectId,buildingId:v.buildingId,floorId:v.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:v.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:o,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:o,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:o,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:v.projectId,buildingId:v.buildingId,floorId:v.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:v.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:o,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:v.projectId,buildingId:v.buildingId,floorId:v.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:v.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:o,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:o,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:o,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:v.projectId,buildingId:v.buildingId,floorId:v.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:v.projectId,buildingId:v.buildingId,floorId:v.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:v.projectId,buildingId:v.buildingId,floorId:v.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:v.projectId,buildingId:v.buildingId,floorId:v.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:o},{id:"conn-e7f-dali",projectId:v.projectId,buildingId:v.buildingId,floorId:v.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:o},{id:"conn-e7f-modbus",projectId:v.projectId,buildingId:v.buildingId,floorId:v.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:v.projectId,floorId:v.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:v.projectId,floorId:v.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:v.projectId,floorId:v.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:v.projectId,floorId:v.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:v.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:v.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:v.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:o,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:v.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:v.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:v.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:v.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(Te).map((a,i)=>({userId:a.userId,displayName:a.displayName,email:`${a.role.replaceAll("_",".")}@gzlab.ac.cn`,role:a.role,roleLabel:a.roleLabel,scopeSummary:a.scope.allowedZoneIds?.length?`E栋 7F（${a.scope.allowedZoneIds.length} 个我的区域）`:`${a.scope.allowedProjectIds.length} 项目 / ${a.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:i===0?o:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(t,o,a,i,r){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:o,endpoint:a,request:r,response:i}),this.traces.length>40&&this.traces.pop()}pushAudit(t,o,a,i){const r=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:r?.displayName??"anonymous",role:r?.role??"member",action:t,target:o,result:a,detail:i})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){if(!t.account.trim()||!t.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const o=t.account.includes("admin")?"org_admin":t.account.includes("eng")?"commissioning_engineer":t.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(Te[o]),sessionStorage.setItem(st,o),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:t.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(st),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(t){return this.activeSession=structuredClone(Te[t]),sessionStorage.setItem(st,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}loadSpatial(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(wt);if(t){const o=JSON.parse(t);if(o?.projects?.length&&o?.buildings?.length&&Array.isArray(o.floors))return o}}}catch{}return structuredClone(Tt)}persistSpatial(){this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&localStorage.setItem(wt,JSON.stringify(this.spatial))}catch{}}syncAdminScopesFromSpatial(){const t=this.spatial.projects.map(i=>i.id),o=this.spatial.buildings.map(i=>i.id),a=this.spatial.floors.map(i=>i.id);Te.org_admin.scope.allowedProjectIds=[...t],Te.org_admin.scope.allowedBuildingIds=[...o],Te.org_admin.scope.allowedFloorIds=[...a],Te.project_admin.scope.allowedBuildingIds=[...o],Te.project_admin.scope.allowedFloorIds=[...a],Te.commissioning_engineer.scope.allowedBuildingIds=[...o],Te.commissioning_engineer.scope.allowedFloorIds=[...a],this.activeSession&&(this.activeSession.role==="org_admin"&&(this.activeSession.scope.allowedProjectIds=[...t]),(this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin"||this.activeSession.role==="commissioning_engineer")&&(this.activeSession.scope.allowedBuildingIds=[...o],this.activeSession.scope.allowedFloorIds=[...a]))}async getSpatialTree(){const t=this.requireSession(),o=this.spatial.projects.filter(J=>t.scope.allowedProjectIds.includes(J.id)),a=this.spatial.buildings.filter(J=>t.scope.allowedBuildingIds.includes(J.id)),i=new Set(a.map(J=>J.id)),r=this.spatial.floors.filter(J=>i.has(J.buildingId)),k=new Set(r.map(J=>J.id)),L=this.spatial.zones.filter(J=>k.has(J.floorId)),z=structuredClone({projects:o,buildings:a,floors:r,zones:L});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:z.projects.length,buildings:z.buildings.length,floors:z.floors.length}),z}async createProject(t){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权创建项目`);const a={id:`project-${Date.now().toString(36)}`,name:t.name.trim()||"新建项目",city:t.city?.trim()||"广州市",address:t.address?.trim()||"",timezone:"Asia/Shanghai",location:t.location,imageUrl:t.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(a),o.scope.allowedProjectIds.includes(a.id)||o.scope.allowedProjectIds.push(a.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",a,t),this.pushAudit("project.create",a.id,"success",a.name),structuredClone(a)}async updateProject(t,o){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改项目配置`);const i=this.spatial.projects.find(r=>r.id===t);if(!i)throw new Error(`404 NOT_FOUND: 项目 ${t} 不存在`);return o.name!==void 0&&(i.name=o.name.trim()||i.name),o.city!==void 0&&(i.city=o.city.trim()),o.address!==void 0&&(i.address=o.address.trim()),o.location!==void 0&&(i.location=o.location),o.imageUrl!==void 0&&(i.imageUrl=o.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${t}`,i,o),this.pushAudit("project.update",t,"success",i.name),structuredClone(i)}async deleteProject(t){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权删除项目`);if(t===v.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const a=new Set(this.spatial.buildings.filter(r=>r.projectId===t).map(r=>r.id)),i=new Set(this.spatial.floors.filter(r=>a.has(r.buildingId)).map(r=>r.id));this.spatial.projects=this.spatial.projects.filter(r=>r.id!==t),this.spatial.buildings=this.spatial.buildings.filter(r=>r.projectId!==t),this.spatial.floors=this.spatial.floors.filter(r=>!a.has(r.buildingId)),this.spatial.zones=this.spatial.zones.filter(r=>!i.has(r.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${t}`,{ok:!0}),this.pushAudit("project.delete",t,"success")}async upsertBuilding(t){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权维护楼宇`);let a=t.id?this.spatial.buildings.find(i=>i.id===t.id):void 0;return a?(a.name=t.name.trim()||a.name,a.aboveFloors=Math.max(0,t.aboveFloors),a.belowFloors=Math.max(0,t.belowFloors),a.hasRoof=t.hasRoof,t.areaSqm!==void 0&&(a.areaSqm=t.areaSqm),t.imageUrl!==void 0&&(a.imageUrl=t.imageUrl)):(a={id:`building-${Date.now().toString(36)}`,projectId:t.projectId,name:t.name.trim()||"新建楼宇",aboveFloors:Math.max(1,t.aboveFloors),belowFloors:Math.max(0,t.belowFloors),hasRoof:t.hasRoof,areaSqm:t.areaSqm??null,imageUrl:t.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(a)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",a,t),this.pushAudit("building.upsert",a.id,"success",a.name),structuredClone(a)}async deleteBuilding(t){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权删除楼宇`);if(t===v.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const a=new Set(this.spatial.floors.filter(i=>i.buildingId===t).map(i=>i.id));this.spatial.buildings=this.spatial.buildings.filter(i=>i.id!==t),this.spatial.floors=this.spatial.floors.filter(i=>i.buildingId!==t),this.spatial.zones=this.spatial.zones.filter(i=>!a.has(i.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${t}`,{ok:!0}),this.pushAudit("building.delete",t,"success")}async upsertFloor(t){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权维护楼层`);const a=new Date().toISOString();let i=t.id?this.spatial.floors.find(r=>r.id===t.id):void 0;if(i)i.name=t.name.trim()||i.name,i.kind=t.kind,i.level=t.level,t.areaSqm!==void 0&&(i.areaSqm=t.areaSqm),t.planImageUrl!==void 0&&(i.plan=t.planImageUrl?{floorId:i.id,imageUrl:t.planImageUrl,planVersion:(i.plan?.planVersion??0)+1,updatedAt:a}:null);else{const r=`floor-${t.buildingId.slice(-6)}-${t.kind}-${Math.abs(t.level)}-${Date.now().toString(36).slice(-3)}`;i={id:r,buildingId:t.buildingId,kind:t.kind,level:t.level,name:t.name.trim()||`${t.level}F`,areaSqm:t.areaSqm??null,plan:t.planImageUrl?{floorId:r,imageUrl:t.planImageUrl,planVersion:1,updatedAt:a}:null},this.spatial.floors.push(i),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(i.id)&&this.activeSession.scope.allowedFloorIds.push(i.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:i.id,name:i.name,hasPlan:!!i.plan}),this.pushAudit("floor.upsert",i.id,"success",i.name),structuredClone(i)}async deleteFloor(t){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权删除楼层`);if(t===v.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(a=>a.id!==t),this.spatial.zones=this.spatial.zones.filter(a=>a.floorId!==t),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${t}`,{ok:!0}),this.pushAudit("floor.delete",t,"success")}async upsertZone(t){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权维护功能区`);let a=t.id?this.spatial.zones.find(i=>i.id===t.id):void 0;return a?(a.name=t.name.trim()||a.name,a.category=t.category):(a={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:t.floorId,name:t.name.trim(),category:t.category},this.spatial.zones.push(a)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",a),this.pushAudit("zone.upsert",a.id,"success",a.name),structuredClone(a)}async deleteZone(t){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(a=>a.id!==t),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${t}`,{ok:!0}),this.pushAudit("zone.delete",t,"success")}async copyZonesToFloors(t,o){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权复制功能区`);const i=this.spatial.floors.find(L=>L.id===t),r=this.spatial.zones.filter(L=>L.floorId===t);if(!i||r.length===0)return 0;let k=0;for(const L of o){if(L===t)continue;const z=this.spatial.floors.find(R=>R.id===L);if(!z)continue;const J=new Set(this.spatial.zones.filter(R=>R.floorId===L).map(R=>R.name));for(const R of r){const se=R.name.replace(new RegExp(`^${i.name}\\s*`,"i"),""),Y=`${z.name} ${se}`.trim();J.has(Y)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:L,name:Y,category:R.category}),J.add(Y),k+=1)}}return k>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:t,targetCount:o.length,added:k}),k}async getFloorDevices(t){const o=this.requireSession();if(!o.scope.allowedFloorIds.includes(t)){const i={code:"FORBIDDEN",status:403,message:`当前角色「${o.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,i),this.pushAudit("floor.read",t,"denied",i.message),new Error(`403 FORBIDDEN: ${i.message}`)}if(t!==v.floorId)return[];let a=structuredClone(this.devices);return o.scope.allowedZoneIds?.length&&(a=a.filter(i=>i.logicalZoneId&&o.scope.allowedZoneIds.includes(i.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:a.length}),a}async dispatchControlBatch(t){const o=this.requireSession();if(!o.scope.canControlDevices||!o.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,i={batchId:a,floorId:t.floorId,createdBy:o.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(r=>({deviceId:r.deviceId,command:r.command,targetValue:r.targetValue,status:"queued"}))};return this.batches.set(a,i),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",i,t),this.pushAudit("control.dispatch",a,"success",`下发 ${t.targets.length} 台设备`),i.receipts.forEach((r,k)=>{const L=this.devices.find(z=>z.id===r.deviceId);setTimeout(()=>{r.status="dispatched",r.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:r.deviceId,status:"dispatched",at:r.dispatchedAt})},280+k*120),setTimeout(()=>{const z=new Date().toISOString();!L||L.connectivity==="offline"?(r.status="timeout",r.errorCode="GATEWAY_READBACK_TIMEOUT",r.errorMessage="设备离线，网关未收到回读确认",r.verifiedAt=z):(r.status="verified_success",r.observedValue=r.targetValue,r.verifiedAt=z,this.applyObservedTelemetry(L,r.command,r.targetValue,z)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:r.deviceId,status:r.status,observedValue:r.observedValue,at:z})},900+k*220)}),structuredClone(i)}applyObservedTelemetry(t,o,a,i){o==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:a,collectedAt:i,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(a)>0,collectedAt:i,stale:!1})):(o==="lighting.power"||o==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:a,collectedAt:i,stale:!1}:o==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:a,collectedAt:i,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:i,values:{[o]:a}})}async getControlBatch(t){this.requireSession();const o=this.batches.get(t);if(!o)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(o)}async listAlarms(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==v.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,o){const a=this.requireSession();if(!a.scope.canManageAlarms){const r=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",r),new Error(`403 FORBIDDEN: ${r}`)}const i=this.alarms.find(r=>r.id===t);if(!i)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return i.status="acknowledged",i.acknowledgedAt=new Date().toISOString(),i.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,i,{note:o}),this.pushAudit("alarm.acknowledge",t,"success",o),this.emit({type:"alarm.changed",floorId:i.floorId,alarmId:t,status:"acknowledged",at:i.acknowledgedAt}),structuredClone(i)}async listWorkOrders(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==v.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const o=this.requireSession();if(!o.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权创建工单`);const a=new Date().toISOString(),i={id:`wo-e7f-${Date.now().toString(36)}`,projectId:v.projectId,buildingId:v.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(i),t.alarmId){const r=this.alarms.find(k=>k.id===t.alarmId);r&&(r.workOrderId=i.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",i,t),this.pushAudit("work_order.create",i.id,"success",i.title),structuredClone(i)}async updateWorkOrderStatus(t,o){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const i=this.workOrders.find(r=>r.id===t);if(!i)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return i.status=o,i.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,i,{status:o}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${o}`),structuredClone(i)}async updateDevicePlanPoint(t){const o=this.requireSession();if(!o.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(i=>i.id===t.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(a.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:Number(t.x.toFixed(4)),y:Number(t.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,a,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(t){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(r=>r.id===t.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(a.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const i=new Date().toISOString();return a.physicalInstalled=t.physicalInstalled,a.physicalVerifiedAt=t.physicalInstalled?i:null,a.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:i,boundBy:o.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,a,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(a)}async listConnections(t){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(t){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(t,o){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const i=this.devices.filter(k=>k.physicalInstalled&&k.hardwareBinding).length,r={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:v.projectId,floorId:t,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:i,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:o||"例行交付基线冻结"};return this.deliveryBatches.unshift(r),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,r,{note:o}),this.pushAudit("delivery.freeze",r.id,"success",`${i}/${this.devices.length} 已现场核验`),structuredClone(r)}async getAnalysisReport(t,o,a){this.requireSession();const i=o==="today"?1:o==="7d"?7:30,k={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*i)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*i).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(J=>J.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*i).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*i).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*i).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],L=o==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],z={category:t,range:o,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:k.kpis,unit:k.unit,series:k.base.map((J,R)=>({label:L[R],value:Math.round(J*(t==="energy"||t==="carbon"?i/2+.5:1)),baseline:Math.round(J*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:k.base[3],unit:k.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:k.base[4],unit:k.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:k.base[1],unit:k.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${o}&scopeId=${a}`,{kpis:z.kpis.length}),z}async listScenes(t){return this.requireSession(),structuredClone(this.scenes)}async createScene(t){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,t),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(t){const o=this.scenes.find(i=>i.id===t);if(!o)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const a=await this.dispatchControlBatch({floorId:o.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:o.actions,reason:`触发场景：${o.name}`});return o.lastExecutedAt=new Date().toISOString(),o.lastBatchId=a.batchId,a}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:v.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,o,a){this.requireSession();const i=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,r=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${o} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${o} (-30m) ~ ${a} (+30m)`,conflictWarning:i},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:i}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",r,{workdayStart:o,workdayEnd:a}),r}async saveWorkCalendar(t,o,a,i){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权修改运行日历`);if(this.calendar.version!==i)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(o>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:o,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:o,workdayEnd:a,expectedVersion:i}),this.pushAudit("settings.calendar",v.projectId,"success",`${o}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,o,a){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权启停运行规则`);const r=this.rules.find(k=>k.id===t);if(!r)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(r.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${r.version}）`);return r.enabled=o,r.version+=1,r.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,r,{enabled:o,expectedVersion:a}),this.pushAudit("settings.rule_toggle",t,"success",o?"启用":"停用"),structuredClone(r)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,o){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const i=Te[o],r={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:o,roleLabel:i.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(r),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",r,{email:t,role:o}),this.pushAudit("org.invite",t,"success",i.roleLabel),structuredClone(r)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(t,o){return t!==v.floorId?()=>{}:(this.listeners.add(o),()=>{this.listeners.delete(o)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${v.floorId}`,t),this.listeners.forEach(o=>o(t))}}function Xt(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new Yt}const Qt={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"layout-dashboard":'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',waypoints:'<circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'};function Jt(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function be(e,t=16,o=""){const a=Jt(t);return`<svg${o?` class="${o}"`:""} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${Qt[e]}</svg>`}const pt=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function ea(e,t,o,a,i){let r="profile",k="directory",L=await t.listOrgMembers(),z=await t.listAuditLogs(),J="",R="all",se="all",Y="all",H=!1,A=!1,O=o.displayName,ee=o.role==="org_admin"||o.role==="project_admin"?"设施运维总监":o.role==="commissioning_engineer"?"楼宇自控部署工程师":o.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",me="138-0013-8072",ae="",de="";async function B(){[L,z]=await Promise.all([t.listOrgMembers(),t.listAuditLogs()]),ce()}function ce(){const ye=t.mode==="demo"&&typeof t.switchDemoRole=="function",fe=J.trim().toLowerCase(),Se=L.filter(g=>R!=="all"&&g.role!==R?!1:fe?`${g.displayName} ${g.email} ${g.roleLabel} ${g.scopeSummary}`.toLowerCase().includes(fe):!0),N=z.filter(g=>{if(se==="success"&&g.result!=="success"||se==="denied"&&g.result==="success")return!1;if(Y!=="all"){const h=`${g.action} ${g.target}`.toLowerCase();if(Y==="control"&&!h.includes("control")&&!h.includes("scene")&&!h.includes("控制")||Y==="alarm"&&!h.includes("alarm")&&!h.includes("work")&&!h.includes("告警")||Y==="deploy"&&!h.includes("deploy")&&!h.includes("plan")&&!h.includes("hardware")&&!h.includes("部署"))return!1}return!0});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${r==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${r==="members"}" data-atab="members">成员与角色（${L.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${r==="audit"}" data-atab="audit">操作审计日志（${z.length}）</button>
              </div>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">广州国家实验室</span>
              <span class="pacom-badge pacom-badge--accent">${o.roleLabel}</span>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:8px 6px 32px;">
          <div style="width:100%; max-width:960px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${ae?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${ae}</span></div>`:""}
            ${de?`<div class="pacom-alert-banner">${de}</div>`:""}
            ${r==="profile"?`
                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">个人资料与授权摘要</h2>
                    <span class="pacom-badge pacom-badge--online">${o.roleLabel}</span>
                  </div>
                  <form class="pacom-settings-card" data-role="profile-form">
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">显示姓名与岗位</span>
                        <span class="pacom-setting-desc">账号 ID：${o.userId} · 所属机构：广州国家实验室</span>
                      </div>
                      <div class="pacom-setting-control" style="flex-wrap:wrap;">
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${O}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${ee}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">告警接收手机号（SMS）</span>
                        <span class="pacom-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="pacom-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${me}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
                        <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
                      </div>
                    </div>
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">楼层与操作权限</span>
                        <span class="pacom-setting-desc">
                          已授权楼层 ${o.scope.allowedFloorIds.length} 层 · 设备控制：${o.scope.canControlDevices?"允许":"只读"} · 部署编辑：${o.scope.canEditDeployment?"允许":"只读"}
                        </span>
                      </div>
                    </div>
                  </form>
                </section>

                ${ye?`
                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">切换视角</h2>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(Te).map(g=>{const h=Te[g];return`
                              <button class="pacom-role-card ${g===o.role?"is-active":""}" data-switch-role="${g}">
                                <strong style="font-weight:500;">${h.roleLabel}</strong>
                                <span class="pacom-row-sub">${h.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${h.scope.allowedFloorIds.length} 层 · 部署编辑：${h.scope.canEditDeployment?"是":"否"}</span>
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
                </section>`:r==="members"?`
                  ${H?`
                      <section class="pacom-section">
                        <h2 class="pacom-section-title">邀请新成员</h2>
                        <form class="pacom-settings-card" data-role="invite-form">
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">成员邮箱与角色</span>
                              <span class="pacom-setting-desc">受邀成员将按角色获得对应项目与楼层的默认授权范围</span>
                            </div>
                            <div class="pacom-setting-control" style="flex-wrap:wrap;">
                              <input class="pacom-input" style="width:220px;" name="email" type="email" placeholder="colleague@gzlab.ac.cn" required />
                              <select class="pacom-select" name="role">
                                ${Object.keys(Te).map(g=>`<option value="${g}">${Te[g].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <h2 class="pacom-section-title">${k==="directory"?"机构成员目录":"工作组与空间授权（Groups & Scope）"}</h2>
                        <div class="pacom-tabs" role="tablist" aria-label="成员与工作组切换">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${k==="directory"}" data-msub="directory">成员目录（${L.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${k==="groups"}" data-msub="groups">工作组（${pt.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${k==="directory"?`当前显示 ${Se.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${k==="directory"?`
                        <div class="pacom-table-card">
                          <div class="pacom-table-toolbar">
                            <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" name="memberSearch" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${J}" />
                              <select class="pacom-select" name="memberRoleFilter" data-role-filter>
                                <option value="all" ${R==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(Te).map(g=>`<option value="${g}" ${R===g?"selected":""}>${Te[g].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${H?"收起邀请":"+ 邀请成员"}
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
                                ${Se.map(g=>`
                                    <tr>
                                      <td>
                                        <div style="display:flex; align-items:center; gap:10px;">
                                          <span class="pacom-pop-avatar">${g.displayName.slice(0,1)}</span>
                                          <div>
                                            <div style="font-weight:500;">${g.displayName}</div>
                                            <div class="pacom-row-sub">${g.email}</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${g.roleLabel}</span></td>
                                      <td><span class="pacom-row-sub">${g.scopeSummary}</span></td>
                                      <td>
                                        <span class="pacom-badge ${g.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">
                                          ${g.status==="active"?"正常":g.status}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>`:`
                        ${A?`
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
                            <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1">${A?"收起表单":"+ 新建工作组"}</button>
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
                                ${pt.map(g=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${g.name}</div>
                                      <div class="pacom-row-sub">${g.membersSummary}</div>
                                    </td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${g.defaultRoleLabel}</span></td>
                                    <td><span class="pacom-row-sub">${g.locationScope}</span></td>
                                    <td><strong>${g.memberCount}</strong> 人</td>
                                    <td><span class="pacom-badge pacom-badge--accent">${g.notifyChannel}</span></td>
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
                          <option value="all" ${Y==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${Y==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${Y==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${Y==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${se==="all"}" data-audit-filter="all">全部（${z.length}）</button>
                          <button class="pacom-tab" aria-selected="${se==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${se==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${N.map(g=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${g.action}</div>
                                    ${g.detail?`<div class="pacom-row-sub">${g.detail}</div>`:""}
                                  </td>
                                  <td><code style="font-size:12px;">${g.target}</code></td>
                                  <td>${g.actor}</td>
                                  <td><span class="pacom-row-sub">${g.at.slice(0,19).replace("T"," ")}</span></td>
                                  <td>
                                    <span class="pacom-badge ${g.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                                      ${g.result==="success"?"成功":g.result}
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
    `,e.querySelectorAll("[data-atab]").forEach(g=>{g.addEventListener("click",()=>{r=g.dataset.atab,ae="",de="",ce()})}),e.querySelectorAll("[data-msub]").forEach(g=>{g.addEventListener("click",()=>{k=g.dataset.msub??"directory",ce()})}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{A=!A,ce()}),e.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",g=>{g.preventDefault();const h=new FormData(g.currentTarget),pe=String(h.get("wgName")??"").trim(),D=String(h.get("wgRole")??"运行值班员"),S=String(h.get("wgScope")??"").trim();!pe||!S||(pt.push({id:`wg-${Date.now()}`,name:pe,defaultRoleLabel:D,locationScope:S,memberCount:1,membersSummary:o.displayName,notifyChannel:"站内 + 邮件"}),A=!1,ae=`已创建工作组「${pe}」（授权空间：${S}）。`,ce())}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",g=>{g.preventDefault();const h=new FormData(g.currentTarget);O=String(h.get("displayName")??"").trim()||o.displayName,ee=String(h.get("jobTitle")??"").trim()||ee,me=String(h.get("phone")??"").trim()||me,ae=`已更新个人资料：${O}（${ee}）· 告警短信接收号 ${me}。`,ce()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",i()}),e.querySelectorAll("[data-switch-role]").forEach(g=>{g.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const h=await t.switchDemoRole(g.dataset.switchRole);a(h)})}),e.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{H=!H,ce()}),e.querySelector("[data-member-search]")?.addEventListener("input",g=>{const h=g.currentTarget,pe=h.selectionStart??h.value.length;J=h.value,ce();const D=e.querySelector("[data-member-search]");D&&(D.focus(),D.setSelectionRange(pe,pe))}),e.querySelector("[data-role-filter]")?.addEventListener("change",g=>{R=g.currentTarget.value,ce()}),e.querySelectorAll("[data-audit-filter]").forEach(g=>{g.addEventListener("click",()=>{se=g.dataset.auditFilter??"all",ce()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",g=>{Y=g.currentTarget.value??"all",ce()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async g=>{g.preventDefault(),de="";const h=new FormData(g.currentTarget);try{await t.inviteOrgMember(String(h.get("email")??""),String(h.get("role"))),H=!1,await B()}catch(pe){de=pe instanceof Error?pe.message:String(pe),ce()}})}ce()}let rt={level:"floor",projectId:v.projectId,buildingId:v.buildingId,floorId:v.floorId};function Qe(){return rt}function Xe(e){return rt=e,rt}function Pe(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function xt(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面"))return 999;const o=t.match(/(-?\d+)/);if(!o)return 0;const a=Number(o[1]);return t.startsWith("B")?-Math.abs(a):a}function ta(e){if(e==="all")return{level:"all-projects"};const t=e.split(":");return t[0]==="project"&&t[1]?{level:"project",projectId:t[1]}:t[0]==="building"&&t[1]&&t[2]?{level:"building",projectId:t[1],buildingId:t[2]}:t[0]==="floor"&&t[1]&&t[2]&&t[3]?{level:"floor",projectId:t[1],buildingId:t[2],floorId:t[3]}:{level:"project",projectId:v.projectId}}function aa(e,t,o){return o==="project"?e.level==="all-projects"?{level:"project",projectId:t.projects[0]?.id??v.projectId}:{level:"project",projectId:e.projectId}:o==="building"&&e.level==="floor"?{level:"building",projectId:e.projectId,buildingId:e.buildingId}:e}function Je(e){const{tree:t,session:o,isOpen:a,searchKeyword:i}=e,r=e.maxGranularity??"floor",k=e.activeAlarmCount??0,L=o.scope.allowedZoneIds?.length?o.scope.allowedZoneIds:null,z=t.floors.filter(D=>o.scope.allowedFloorIds.includes(D.id)),J=L||t.projects.length<=1&&t.buildings.length<=1&&z.length<=1?"floors-only":t.projects.length>1?"multi-project":t.buildings.length>1?"single-project-multi-building":"single-building",R=J==="multi-project"&&r!=="project",se=J==="multi-project"||J==="single-project-multi-building",Y=J!=="floors-only"&&r!=="project",H=r==="project"&&t.projects.length<=1||J==="floors-only"&&z.length<=1,A=aa(e.scope??rt,t,r),O=A.level==="all-projects"?null:t.projects.find(D=>D.id===A.projectId)??t.projects[0],ee=A.level==="building"||A.level==="floor"?t.buildings.find(D=>D.id===A.buildingId):null,me=A.level==="floor"?t.floors.find(D=>D.id===A.floorId):null,ae=[];if(A.level==="all-projects")ae.push(`全部项目（${t.projects.length}）`);else if(A.level==="project")ae.push(Pe(O?.name??"广实2号园"));else if(A.level==="building")O&&ae.push(`<span class="pacom-path-muted">${Pe(O.name)}</span>`),ae.push(Pe(ee?.name??"E栋"));else{O&&J!=="floors-only"&&ae.push(`<span class="pacom-path-muted">${Pe(O.name)}</span>`),ee&&Y&&ae.push(`<span class="pacom-path-muted">${Pe(ee.name)}</span>`);const D=!Y&&ee?`${ee.name} ${me?.name??"7F"}`:me?.name??"7F";ae.push(Pe(D))}const de='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',B=H?`<span class="pacom-path-trigger is-static">${ae.join(de)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${a}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${ae.join(de)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${be("chevron-down",12)}</span>
      </button>`;if(!a||H)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${B}</div>`;const ce=i.trim().toLowerCase(),ye=A.level==="all-projects"?t.projects[0]?.id??v.projectId:A.projectId,fe=A.level==="building"||A.level==="floor"?A.buildingId:t.buildings.find(D=>D.projectId===ye)?.id??v.buildingId,Se=t.projects.filter(D=>!ce||D.name.toLowerCase().includes(ce)),N=t.buildings.filter(D=>D.projectId===ye&&(!ce||D.name.toLowerCase().includes(ce))),U=[...t.floors.filter(D=>D.buildingId===fe)].sort((D,S)=>xt(S.name)-xt(D.name)).filter(D=>!ce||D.name.toLowerCase().includes(ce)),g=r==="project"||t.projects.length>1,h=r!=="project"&&se,pe=r==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${B}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${be("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${Pe(i)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${be("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${g?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${R?`<button type="button" class="pacom-space-pop-item ${A.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${t.projects.length}）</span>
                        ${A.level==="all-projects"?be("check",14):""}
                      </button>`:""}
                ${Se.map(D=>{const S=A.level==="project"&&A.projectId===D.id;return`<button type="button" class="pacom-space-pop-item ${S?"is-active":""}" data-global-space-pick="project:${Pe(D.id)}">
                      <span>${Pe(D.name)}</span>
                      ${S?be("check",14):be("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${h?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Pe(t.projects.find(D=>D.id===ye)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${A.level==="project"?"is-active":""}" data-global-space-pick="project:${Pe(ye)}">
                  <span>全园区</span>
                  ${A.level==="project"?be("check",14):""}
                </button>
                ${N.map(D=>{const S=A.level==="building"&&A.buildingId===D.id;return`<button type="button" class="pacom-space-pop-item ${S?"is-active":""}" data-global-space-pick="building:${Pe(D.projectId)}:${Pe(D.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Pe(D.name)}</span>
                        ${D.id===v.buildingId&&k>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${S?be("check",14):be("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${pe?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Pe(t.buildings.find(D=>D.id===fe)?.name??"楼宇")} · 楼层</div>
                ${Y?`<button type="button" class="pacom-space-pop-item ${A.level==="building"&&A.buildingId===fe?"is-active":""}" data-global-space-pick="building:${Pe(ye)}:${Pe(fe)}">
                        <span>整栋</span>
                        ${A.level==="building"&&A.buildingId===fe?be("check",14):""}
                      </button>`:""}
                ${U.map(D=>{const S=o.scope.allowedFloorIds.includes(D.id),E=A.level==="floor"&&A.floorId===D.id,p=D.id===v.floorId&&k>0;return`<button type="button" class="pacom-space-pop-item ${E?"is-active":""}" style="${S?"":"opacity:0.5;"}" data-global-space-pick="floor:${Pe(ye)}:${Pe(fe)}:${Pe(D.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Pe(D.name)}</span>
                        ${p?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${E?be("check",14):S?D.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function et(e,t){e.querySelectorAll("[data-global-space-toggle]").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation(),t.onToggle()})}),e.querySelector("[data-global-space-search]")?.addEventListener("input",a=>{t.onSearch(a.currentTarget.value)}),e.querySelectorAll("[data-global-space-pick]").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation();const r=a.dataset.globalSpacePick;if(!r)return;const k=Xe(ta(r));t.onPick(k)})})}const We={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},sa={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},oa={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function na(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function la(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function ut(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function ia(e,t,o){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),i=a.get("alarm"),r=a.get("wo");let k=await t.getSpatialTree(),L=Qe(),z=!1,J="",R=[],se=[],Y=[],H=r?"workorders":"alarms",A="all",O="all",ee="all",me="impact",ae=!1,de="",B=i,ce=r,ye=null,fe=null,Se="resolved";const N=new Set,U=new Map,g=new Map,h=new Map,pe=new Map;let D="",S="";function E(le){const oe=pe.get(le.id);if(oe)return oe;const c=le.id.match(/(\d+)$/),x=`WO-2026-${c?c[1]:le.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,X={estCost:"¥ 450",actualCost:le.status==="closed"?"¥ 380":"--",cmmsNo:x,assigneeGroup:"暖通运维组",tasks:[{id:`${le.id}-t1`,label:"核查设备供电与现场指示灯状态",done:le.status!=="open"},{id:`${le.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:le.status==="resolved"||le.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:le.createdAt?le.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${x}）`}]};return pe.set(le.id,X),X}async function p(){[R,se,Y]=await Promise.all([t.listAlarms(v.floorId),t.listWorkOrders(v.floorId),t.getFloorDevices(v.floorId).catch(()=>[])]),se.forEach(le=>E(le)),ge()}function M(le){if(!le)return{name:"楼层通用",zone:"E7F",dev:null};const oe=Y.find(c=>c.id===le)??null;return oe?{name:oe.name,zone:(oe.logicalZoneId?oa[oe.logicalZoneId]:void 0)??"E7F",dev:oe}:{name:le,zone:"E7F",dev:null}}function $e(le){const oe=M(le.deviceId).dev;oe&&oe.connectivity==="offline"?h.set(le.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${oe.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):h.set(le.id,{verdict:"pass",summary:`自检通过（PASS）：「${oe?.name??le.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),B=le.id,ge()}function ge(){const le=R.filter(u=>u.status==="active"&&!U.has(u.id)),oe=se.filter(u=>!E(u).cancelled&&(u.status==="open"||u.status==="assigned"||u.status==="in_progress")),c=R.filter(u=>u.status!=="active").length+g.size,x=0,X=U.size,ke=de.trim().toLowerCase(),Ce=R.filter(u=>{const w=U.has(u.id);if(A==="snoozed"){if(!w)return!1}else if(A==="active"){if(u.status!=="active"||w)return!1}else if(A==="acknowledged"){if(u.status!=="acknowledged")return!1}else if(w)return!1;if(ee!=="all"&&u.severity!==ee)return!1;if(!ke)return!0;const ne=M(u.deviceId);return`${u.title} ${u.message} ${ne.name} ${ne.zone} ${u.deviceId}`.toLowerCase().includes(ke)}),ze=new Map;for(const u of Ce){const w=`${u.title} ${u.message}`.toLowerCase(),ne=w.includes("离线")||w.includes("modbus")||w.includes("通信"),re=ae?ne?"root-gateway-modbus":u.deviceId:u.id,Ee=ne?"根因：E7F 主控网关通信链路":`根因：${M(u.deviceId).name}`,qe=ze.get(re)??{rootLabel:Ee,items:[]};qe.items.push(u),ze.set(re,qe)}const Ne=Array.from(ze.values());me==="impact"&&Ne.sort((u,w)=>ut(w.items[0]).costYuan-ut(u.items[0]).costYuan);const Ue=se.filter(u=>{const w=E(u);if(O==="cancelled"){if(!w.cancelled)return!1}else if(w.cancelled||O==="open"&&(u.status==="resolved"||u.status==="closed")||O==="resolved"&&u.status!=="resolved"||O==="closed"&&u.status!=="closed")return!1;if(!ke)return!0;const ne=M(u.deviceId);return`${u.title} ${u.description} ${u.id} ${w.cmmsNo} ${ne.name}`.toLowerCase().includes(ke)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Je({tree:k,session:o,scope:L,activeAlarmCount:le.length,isOpen:z,searchKeyword:J})}
            </div>

            <div class="pacom-header-meta">
              ${H==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${ae}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${o.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${o.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${be("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${H==="alarms"}" data-main-tab="alarms">实时告警（${R.length-X}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${H==="workorders"}" data-main-tab="workorders">运维工单（${se.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${H==="alarms"&&A==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${le.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${H==="workorders"&&O==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${oe.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${H==="alarms"&&A==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${c}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${x}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${D?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${D}</span></div>`:""}
          ${S?`<div class="pacom-alert-banner">${S}</div>`:""}

          ${H==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${de}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${ee==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${ee==="critical"?"selected":""}>严重</option>
                      <option value="major" ${ee==="major"?"selected":""}>重要</option>
                      <option value="minor" ${ee==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${me==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${me==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${A==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${A==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${A==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${A==="snoozed"}" data-status-pill="snoozed">已忽略（${X}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${N.size>0&&o.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${N.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${Ne.length} 项</span>
                  </div>
                </div>
                ${Ne.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${Ne.map(u=>{const w=u.items[0],ne=sa[w.severity]??{label:w.severity,cls:"pacom-badge--neutral"},re=M(w.deviceId),Ee=la(w),qe=ut(w),we=B===w.id,he=U.get(w.id),De=!!he,Ve=N.has(w.id),Le=h.get(w.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${w.id}" data-check-alarm="${w.id}" ${Ve?"checked":""} ${w.status!=="active"||De?"disabled":""} aria-label="选择 ${w.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${ne.cls}">${ne.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${w.title}</span>
                                      ${ae?`<span class="pacom-badge pacom-badge--accent">${u.rootLabel}${u.items.length>1?` · 影响 ${u.items.length} 项`:""}</span>`:""}
                                      ${Le?`<span class="pacom-badge ${Le.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${Le.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${w.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${re.name}</div>
                                    <div class="pacom-row-sub">${re.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${qe.costLabel}</div>
                                    <div class="pacom-row-sub">${qe.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${Ee.duration}</div>
                                    <div class="pacom-row-sub" style="color:${Ee.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${Ee.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${De?"pacom-badge--neutral":w.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${De?`忽略 ${he?.duration}`:w.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${De?`<button class="pacom-btn" data-unsnooze="${w.id}">恢复监控</button>`:`
                                            ${w.status==="active"?`<button class="pacom-btn" data-mark-actioned="${w.id}" ${o.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${w.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${w.id}" ${o.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${w.id}">${we?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${we?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${na(w)}
                                            </div>
                                            ${he?`<div class="pacom-info-banner">忽略周期：${he.duration} · 原因备注：${he.reason}</div>`:""}
                                            ${Le?`
                                                <div class="pacom-banner ${Le.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${Le.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${Le.steps.map(Ke=>`<span>${Ke}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${w.id}</code> · 设备编号 <code>${w.deviceId}</code> · 关联工单 ${w.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${w.id}">单机自检（FTT）</button>
                                              ${!De&&w.status==="active"?`<button class="pacom-btn" data-open-snooze="${w.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${w.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${w.deviceId}">定位设备 →</button>
                                            </div>
                                            ${ye===w.id?`
                                                <form data-snooze-form="${w.id}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
              ${(()=>{const u=ce?se.find(w=>w.id===ce)??null:null;if(u){const w=M(u.deviceId),ne=E(u),re=!!(ne.cancelled||u.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${u.id}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${u.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${ne.cmmsNo}</span>
                        ${ne.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${u.id}" data-wo-status="${u.id}" aria-label="更新工单状态" ${re?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(Ee=>`<option value="${Ee}" ${u.status===Ee?"selected":""}>${We[Ee]}</option>`).join("")}
                          <option value="cancelled" ${ne.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${fe===u.id?`
                        <form data-close-wo-form="${u.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${We[Se]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${ne.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${ne.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${ne.actualCost==="--"?"":ne.actualCost}" />
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
                          <div class="pacom-row-sub">${u.description}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${ne.tasks.map(Ee=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${Ee.id}" data-wo-task="${u.id}" data-task-id="${Ee.id}" ${Ee.done?"checked":""} ${re?"disabled":""} />
                                    <span>${Ee.label}</span>
                                  </span>
                                  ${Ee.unit?`<span class="pacom-row-sub">实测：${Ee.reading??"--"} ${Ee.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${ne.history.map(Ee=>`<span>• <span class="pacom-row-sub">${Ee.at}</span> — ${Ee.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${u.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${ne.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${w.name}（${w.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${ne.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${ne.estCost} / 实际 ${ne.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${ne.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${ne.solution??"待完单填写"}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${u.deviceId}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${u.deviceId}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${de}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${O==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${O==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${O==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${O==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${O==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${Ue.length} 条工单</span>
                  </div>
                  ${Ue.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${Ue.map(w=>{const ne=M(w.deviceId),re=E(w),Ee=!!(re.cancelled||w.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${w.title}</span>
                                        ${re.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${w.description} · <code>${w.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${ne.name}</div>
                                      <div class="pacom-row-sub">${ne.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${re.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${re.assigneeGroup} · 预估 ${re.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${w.id}" data-wo-status="${w.id}" aria-label="更新工单状态" ${Ee?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(qe=>`<option value="${qe}" ${w.status===qe?"selected":""}>${We[qe]}</option>`).join("")}
                                          <option value="cancelled" ${re.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${w.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${fe===w.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${w.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${We[Se]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${re.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${re.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${re.actualCost==="--"?"":re.actualCost}" />
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
    `,et(e,{onToggle:()=>{z=!z,ge(),z&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:u=>{J=u,ge();const w=e.querySelector("[data-global-space-search]");w&&(w.focus(),w.setSelectionRange(u.length,u.length))},onPick:u=>{L=u,z=!1,ge()}}),e.querySelectorAll("[data-main-tab]").forEach(u=>{u.addEventListener("click",()=>{H=u.dataset.mainTab??"alarms",D="",ge()})}),e.querySelectorAll("[data-kpi-filter]").forEach(u=>{u.addEventListener("click",()=>{const w=u.dataset.kpiFilter;D="",w==="workorders"?(H="workorders",O=O==="open"?"all":"open"):(w==="active"||w==="acknowledged")&&(H="alarms",A=A===w?"all":w),ge()})}),e.querySelectorAll("[data-status-pill]").forEach(u=>{u.addEventListener("click",()=>{A=u.dataset.statusPill??"all",ge()})}),e.querySelectorAll("[data-wo-pill]").forEach(u=>{u.addEventListener("click",()=>{O=u.dataset.woPill??"all",ge()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{D="",p()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{ae=!ae,ge()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",u=>{ee=u.currentTarget.value,ge()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",u=>{me=u.currentTarget.value??"impact",ge()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",u=>{const w=u.currentTarget,ne=w.selectionStart??w.value.length;de=w.value,ge();const re=e.querySelector("[data-alarm-search]");re&&(re.focus(),re.setSelectionRange(ne,ne))}),e.querySelectorAll("[data-check-alarm]").forEach(u=>{u.addEventListener("change",()=>{const w=u.dataset.checkAlarm;w&&(u.checked?N.add(w):N.delete(w),ge())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{S="";const u=Array.from(N);try{for(const w of u)await t.acknowledgeAlarm(w,"告警中心批量确认"),g.set(w,"批量确认处置");N.clear(),D=`已批量确认 ${u.length} 条告警，未来 24 小时持续校验无复发。`,await p()}catch(w){S=w instanceof Error?w.message:String(w),ge()}}),e.querySelectorAll("[data-expand-alarm]").forEach(u=>{u.addEventListener("click",()=>{const w=u.dataset.expandAlarm??null;B=B===w?null:w,ye=null,ge()})}),e.querySelectorAll("[data-expand-wo]").forEach(u=>{u.addEventListener("click",()=>{const w=u.dataset.expandWo??null;ce=ce===w?null:w,ge()})}),e.querySelectorAll("[data-run-ftt]").forEach(u=>{u.addEventListener("click",()=>{const w=R.find(ne=>ne.id===u.dataset.runFtt);w&&$e(w)})}),e.querySelectorAll("[data-open-snooze]").forEach(u=>{u.addEventListener("click",()=>{ye=u.dataset.openSnooze??null,ge()})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{ye=null,ge()}),e.querySelectorAll("[data-snooze-form]").forEach(u=>{u.addEventListener("submit",w=>{w.preventDefault();const ne=u.dataset.snoozeForm;if(!ne)return;const re=new FormData(u),Ee=String(re.get("duration")??"24h"),qe=String(re.get("reason")??"").trim()||"现场核查中";U.set(ne,{duration:Ee,reason:qe}),N.delete(ne),ye=null,D=`已限时忽略该告警（${Ee} · ${qe}），可在「已忽略」页签中随时恢复。`,ge()})}),e.querySelectorAll("[data-unsnooze]").forEach(u=>{u.addEventListener("click",()=>{const w=u.dataset.unsnooze;w&&(U.delete(w),D="已恢复该告警的实时监控。",ge())})}),e.querySelectorAll("[data-go-ts]").forEach(u=>{u.addEventListener("click",()=>{const w=u.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(w)}`})}),e.querySelectorAll("[data-locate-home]").forEach(u=>{u.addEventListener("click",()=>{const w=u.dataset.locateHome??"";window.location.hash=w?`#home?device=${encodeURIComponent(w)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(u=>{u.addEventListener("click",async()=>{S="";const w=u.dataset.markActioned;try{await t.acknowledgeAlarm(w,"现场自处理完成（Mark Actioned）"),g.set(w,"现场自处理完成"),N.delete(w),D="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await p()}catch(ne){S=ne instanceof Error?ne.message:String(ne),ge()}})}),e.querySelectorAll("[data-to-wo]").forEach(u=>{u.addEventListener("click",async()=>{S="";const w=R.find(ne=>ne.id===u.dataset.toWo);if(w)try{await t.createWorkOrder({floorId:w.floorId,deviceId:w.deviceId,alarmId:w.id,title:`处置告警：${w.title}`,description:w.message}),D=`已将「${w.title}」转为运维工单并同步 CMMS。`,await p()}catch(ne){S=ne instanceof Error?ne.message:String(ne),ge()}})}),e.querySelectorAll("[data-wo-status]").forEach(u=>{u.addEventListener("change",async()=>{const w=u.dataset.woStatus,ne=u.value;if(S="",ne==="cancelled"){const re=se.find(Ee=>Ee.id===w);if(re){const Ee=E(re);Ee.cancelled=!0,Ee.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),D="工单已移入「已取消」分类并锁定编辑。",ge()}return}if(ne==="resolved"||ne==="closed"){fe=w,Se=ne,ge();return}try{await t.updateWorkOrderStatus(w,ne);const re=se.find(Ee=>Ee.id===w);re&&E(re).history.unshift({at:"刚刚",text:`状态变更为「${We[ne]}」`}),D="工单状态已更新并写入审计日志。",await p()}catch(re){S=re instanceof Error?re.message:String(re),await p()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{fe=null,ge()}),e.querySelectorAll("[data-close-wo-form]").forEach(u=>{u.addEventListener("submit",async w=>{w.preventDefault();const ne=u.dataset.closeWoForm,re=new FormData(u),Ee=String(re.get("cause")??"").trim(),qe=String(re.get("solution")??"").trim(),we=String(re.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(ne,Se);const he=se.find(De=>De.id===ne);if(he){const De=E(he);De.cause=Ee,De.solution=qe,we&&(De.actualCost=we),De.history.unshift({at:"刚刚",text:`流转至「${We[Se]}」· 根因：${Ee}`})}fe=null,ce=ne,D=`工单已更新为「${We[Se]}」，根因与方案已沉淀归档。`,await p()}catch(he){S=he instanceof Error?he.message:String(he),ge()}})}),e.querySelectorAll("[data-wo-task]").forEach(u=>{u.addEventListener("change",()=>{const w=se.find(Ee=>Ee.id===u.dataset.woTask);if(!w)return;const re=E(w).tasks.find(Ee=>Ee.id===u.dataset.taskId);re&&(re.done=u.checked),ge()})})}await p()}const ca=be("chevron-down",12),ot=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],St=[{id:v.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:v.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:v.projectId,label:"广实2号园（全园区）",factor:18.2}],ra={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},da=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],He=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function mt(e,t=""){const o=(e??"").trim().toLowerCase();return!(!o||o.includes("%")||o.includes("°c")||o.includes("ppm")||o.includes("ms")||o.includes("m²")||o.includes("/m2")||o.includes("db")||o.includes("lx")||t.includes("率")||t.includes("均")||t.includes("强度")||t.includes("延迟"))}function nt(e,t){const o=e*t;return Math.abs(o)>=10?Math.round(o):Math.round(o*10)/10}function pa(e,t){const o=Number(String(e).replaceAll(",","")),a=t??"";return Number.isFinite(o)?a==="kWh"&&Math.abs(o)>=1e4?{value:(o/1e3).toFixed(1),unit:"MWh",title:`精确值：${o.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(o)?o.toLocaleString("en-US"):o.toLocaleString("en-US",{maximumFractionDigits:1}),unit:a,title:`${o.toLocaleString("en-US")} ${a}`.trim()}:{value:e,unit:a,title:`${e} ${a}`.trim()}}function ua(e,t){if(t===1)return e;const o=mt(e.unit);return{...e,kpis:e.kpis.map(a=>{const i=Number(String(a.value).replaceAll(",",""));return!Number.isFinite(i)||!mt(a.unit,a.label)?a:{...a,value:String(nt(i,t))}}),series:o?e.series.map(a=>({...a,value:nt(a.value,t),...typeof a.baseline=="number"?{baseline:nt(a.baseline,t)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(a=>mt(a.unit)?{...a,value:nt(a.value,t)}:a)}}function ma(e,t){const o=Math.max(...e.series.map(Y=>Math.max(Y.value,Y.baseline??0)),1),a=46,i=34,r=36,k=Math.max(e.series.length*(a+i)+r*2,620),L=228,z=184,J=132,R=[0,.25,.5,.75,1].map(Y=>{const H=Math.round(z-Y*J);return`<line x1="${r-8}" y1="${H}" x2="${k-18}" y2="${H}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${Y===0?"0":"3 3"}" />`}).join(""),se=e.series.map((Y,H)=>{const A=r+H*(a+i),O=Math.max(8,Math.round(Y.value/o*J)),ee=z-O,me=typeof Y.baseline=="number"&&Y.value>Y.baseline*1.08,ae=me?`<rect x="${A-8}" y="34" width="${a+16}" height="${z-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",de=typeof Y.baseline=="number"?`<line x1="${A-5}" y1="${Math.round(z-Y.baseline/o*J)}" x2="${A+a+5}" y2="${Math.round(z-Y.baseline/o*J)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",B=t&&(me||H===1)?`<g><title>${me?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${A+a/2}" cy="18" r="7" fill="${me?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${A+a/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${me?"!":"S"}</text></g>`:"",ce=Y.value>=1e4?`${(Y.value/1e3).toFixed(1)}k`:Y.value.toLocaleString("en-US");return`
        ${ae}
        ${de}
        ${B}
        <g>
          <title>${Y.label}：实测 ${Y.value.toLocaleString("en-US")} ${e.unit}${Y.baseline!==void 0?` / 基线 ${Y.baseline.toLocaleString("en-US")} ${e.unit}`:""}</title>
          <rect x="${A}" y="${ee}" width="${a}" height="${O}" rx="7" fill="${me?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${A+a/2}" y="${ee-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${ce}</text>
        <text x="${A+a/2}" y="${z+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${Y.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${k} ${L}" style="width:100%; height:232px; display:block;" role="img" aria-label="${e.category} 趋势图">
      ${R}
      ${se}
    </svg>
  `}function ga(e,t){const o=e.connectivity==="offline";if(e.category==="hvac"){const a=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:o?[23.8,24,24.1,null,null,null,null,null]:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a],offline:o,colorIdx:t},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:o?[24,24,24,null,null,null,null,null]:[a,a,a,a,a,a,a,a],offline:o,colorIdx:t+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:o?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:o,colorIdx:t+2}]}if(e.category==="lighting"){const a=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)],offline:o,colorIdx:t},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:o,colorIdx:t+1}]}if(e.category==="sensor"){const a=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a],offline:o,colorIdx:t},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:o,colorIdx:t+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:o,colorIdx:t+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:o,colorIdx:t}]}function ba(e){const t=e.points.filter(L=>typeof L=="number");if(!t.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const o=Math.min(...t),a=Math.max(...t),i=t.reduce((L,z)=>L+z,0)/t.length,r=e.points[e.points.length-1],k=L=>Math.abs(L)<100&&!Number.isInteger(L)?L.toFixed(1):Math.round(L).toString();return{min:k(o),avg:i.toFixed(Math.abs(i)<100?1:0),max:k(a),curr:typeof r=="number"?k(r):"离线"}}function va(e,t,o){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="pacom-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const i=(k,L)=>{const ee=[];for(const N of k)for(const U of N.points)typeof U=="number"&&ee.push(U);const me=ee.length?Math.min(...ee)*.92:0,ae=ee.length?Math.max(...ee)*1.08:100,de=Math.max(ae-me,1),B=[0,.5,1].map(N=>{const U=Math.round(26+106*(1-N)),g=(me+de*N).toFixed(de<15?1:0);return`
          <line x1="44" y1="${U}" x2="662" y2="${U}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${N===0?"0":"3 3"}" />
          <text x="38" y="${U+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${g}</text>
        `}).join(""),ce=a.map((N,U)=>`<text x="${44+U/(a.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${N}</text>`).join(""),ye=k.map((N,U)=>{const g=He[(N.colorIdx+U)%He.length],h=N.points,pe=[];let D=44,S=26+106/2,E=!1;h.forEach((M,$e)=>{const ge=44+$e/(h.length-1)*618;if(typeof M=="number"){const le=26+106*(1-(M-me)/de);pe.push(`${ge.toFixed(1)},${le.toFixed(1)}`),D=ge,S=le}else E=!0});const p=o?h.map((M,$e)=>{if(typeof M!="number")return null;const ge=44+$e/(h.length-1)*618,oe=26+106*(1-(M*.96-me)/de);return`${ge.toFixed(1)},${oe.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${p?`<polyline fill="none" stroke="${g}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${p}" />`:""}
          ${pe.length?`<polyline fill="none" stroke="${g}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${pe.join(" ")}" />`:""}
          ${E?`<line x1="${D.toFixed(1)}" y1="${S.toFixed(1)}" x2="662" y2="${S.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${S-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),fe=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,Se=k.map((N,U)=>{const g=He[(N.colorIdx+U)%He.length],h=ba(N);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${g};"></span>${N.deviceName} · ${N.label}</span></td>
            <td><strong>${h.curr}</strong> <span class="pacom-row-sub">${N.unit}</span></td>
            <td>${h.min} <span class="pacom-row-sub">${N.unit}</span></td>
            <td>${h.avg} <span class="pacom-row-sub">${N.unit}</span></td>
            <td>${h.max} <span class="pacom-row-sub">${N.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${L}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${k.map((N,U)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${He[(N.colorIdx+U)%He.length]};"></span>${N.deviceName}·${N.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${B}
          ${ce}
          ${fe}
          ${ye}
        </svg>
        <div class="pacom-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="pacom-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${Se}</tbody>
          </table>
        </div>
      </div>
    `};if(t==="shared")return i(e,"单图叠合对比（Shared）");const r=new Map;for(const k of e){const L=r.get(k.unit)??[];L.push(k),r.set(k.unit,L)}return Array.from(r.entries()).map(([k,L])=>i(L,`按单位分组泳道（${k}）`)).join("")}function fa(e){const t=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(r=>[r.label,String(r.value),r.baseline!==void 0?String(r.baseline):""].join(","))],o=new Blob([`\uFEFF${t.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),i=document.createElement("a");i.href=a,i.download=`pacom-${e.category}-${e.range}.csv`,i.click(),URL.revokeObjectURL(a)}function ha(e){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],o=["时间",...e.map(L=>`${L.deviceName}·${L.label}(${L.unit})`)].join(","),a=t.map((L,z)=>[L,...e.map(J=>String(J.points[z]??"No Data"))].join(",")),i=new Blob([`\uFEFF${[o,...a].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(i),k=document.createElement("a");k.href=r,k.download="pacom-timeseries-export.csv",k.click(),URL.revokeObjectURL(r)}async function ya(e,t,o){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),i=a.get("tab"),r=a.get("cat"),k=a.get("device"),L=a.get("points"),z=a.get("mode"),J=a.get("interval");let R=i==="timeseries"?"timeseries":r&&ot.some(oe=>oe.id===r)?r:"energy",se="7d",Y="2026-11-16",H="2026-11-23",A=Qe(),O=!1,ee="",me=A.level==="all-projects"||A.level==="project"?v.projectId:A.level==="building"?v.buildingId:v.floorId,ae="chart",de=!0,B="breakdown",ce=!1,ye=null;const[fe,Se]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(v.floorId).catch(()=>[])]);let N=Se;const U=new Map,g=[];N.forEach((oe,c)=>{const x=ga(oe,c);U.set(oe.id,x),g.push(...x)});let h=z==="shared"||z==="grouped"?z:"grouped",pe=J==="15m"||J==="1h"||J==="1d"?J:"1h",D=!1;const S=[];if(L?L.split(",").forEach(oe=>{g.some(c=>c.id===oe)&&S.push(oe)}):k&&U.has(k)&&(U.get(k)??[]).slice(0,2).forEach(oe=>S.push(oe.id)),!S.length){const oe=N.find(X=>X.category==="hvac"),c=N.find(X=>X.category==="sensor"),x=N.find(X=>X.category==="lighting");oe&&(U.get(oe.id)??[]).slice(0,2).forEach(X=>S.push(X.id)),c&&(U.get(c.id)??[]).slice(0,1).forEach(X=>S.push(X.id)),x&&(U.get(x.id)??[]).slice(0,1).forEach(X=>S.push(X.id)),S.length||g.slice(0,3).forEach(X=>S.push(X.id))}const E=new Set(S),p=new Set(N.filter((oe,c)=>c<2||(U.get(oe.id)??[]).some(x=>E.has(x.id))).map(oe=>oe.id)),M=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:g.filter(oe=>oe.pointKey==="temp"||oe.pointKey==="setpoint"||oe.pointKey==="co2").slice(0,4).map(oe=>oe.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:g.filter(oe=>oe.pointKey==="dimming"||oe.pointKey==="power").slice(0,4).map(oe=>oe.id),mode:"grouped",interval:"15m"}];let $e="";async function ge(){const oe=R==="timeseries"?"energy":R,c=se==="custom"?"30d":se;ye=await t.getAnalysisReport(oe,c,v.floorId),le()}function le(){if(!ye)return;const oe=R==="timeseries",c=R==="timeseries"?"energy":R,x=ot.find(F=>F.id===c)??ot[0],X=St.find(F=>F.id===me)??St[0],ke=ua(ye,X.factor),Ce=ke.zoneBreakdown.filter(F=>F.status==="warning"),ze=ra[c],Ne=Math.max(...ke.zoneBreakdown.map(F=>F.value),1),Ue=g.filter(F=>E.has(F.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${Je({tree:fe,session:o,scope:A,isOpen:O,searchKeyword:ee})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${se==="today"?"selected":""}>今日</option>
                <option value="7d" ${se==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${se==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${se==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${oe?"":`<button class="pacom-btn ${ce?"pacom-btn--primary":""}" data-toggle-canvas="1">${ce?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${ot.map(F=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${R===F.id}" data-cat="${F.id}">${F.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${R==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${se==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${Y}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${H}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${oe?`
            <div class="pacom-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${Ue.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${M.map(F=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${F.id}">${be("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${F.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${N.map(F=>{const u=U.get(F.id)??[],w=p.has(F.id),ne=u.filter(re=>E.has(re.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${F.id}" style="cursor:pointer; justify-content:space-between;" title="${F.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${w?"0deg":"-90deg"}); opacity:0.65;">${ca}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${F.name}</div>
                                <div class="pacom-row-sub">${u.length} 个测点 · ${F.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${ne>0?`<span class="pacom-badge pacom-badge--accent">${ne}</span>`:""}
                          </button>
                          ${w?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${u.map(re=>{const Ee=E.has(re.id),qe=He[re.colorIdx%He.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${Ee?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${re.id}" data-ts-point="${re.id}" ${Ee?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${qe};"></span>
                                            <span style="color:var(--pacom-text-primary);">${re.label}</span>
                                          </span>
                                          <span class="pacom-row-sub">${re.unit}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="pacom-subnav-main" style="padding:2px 4px 24px;">
                ${$e?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${$e}</span></div>`:""}
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${be("clock",12)} 排程(S) · ${be("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${D}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${pe==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${pe==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${pe==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${h==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${h==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${va(Ue,h,D)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="pacom-kpi-strip" role="region" aria-label="核心统计指标">
                ${ke.kpis.map(F=>{const u=pa(F.value,F.unit);return`
                      <div class="pacom-kpi-cell" title="${u.title}">
                        <span class="pacom-kpi-label">${F.label}</span>
                        <div class="pacom-kpi-value">
                          <span>${u.value}</span>
                          ${u.unit?`<span class="pacom-kpi-unit">${u.unit}</span>`:""}
                        </div>
                        <span class="pacom-kpi-delta">${F.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="pacom-section">
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">${x?.label??"趋势"}趋势（${ke.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${X.label} · 更新于 ${ke.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${de}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${ae==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${ae==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${Ce.length>0?`关注：${Ce.map(F=>F.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${x?.desc??"空间运行洞察"} · ${ze.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${ae==="chart"?ma(ke,de):`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${ke.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${ke.series.map(F=>{const u=typeof F.baseline=="number"&&F.value>F.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${F.label}</strong></td>
                                    <td>${F.value.toLocaleString("en-US")}</td>
                                    <td>${F.baseline!==void 0?F.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${u?"pacom-badge--warning":"pacom-badge--online"}">${u?"超基线":"正常"}</span></td>
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
                    <span class="pacom-row-sub">${ke.zoneBreakdown.length} 个功能区</span>
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
                          ${ke.zoneBreakdown.map(F=>{const u=Math.max(8,Math.round(F.value/Ne*100));return`
                                <tr>
                                  <td style="font-weight:500;">${F.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${u}%; height:100%; border-radius:999px; background:${F.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${F.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${F.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${F.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${F.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="pacom-section-title">${ce?"E7F 空间对照预览":c==="energy"&&B==="load"?"峰谷负荷分布（Load Profile）":ze.title}</h2>
                    ${!ce&&c==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${B==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${B==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${ce?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${ce?'<img class="pacom-plan-img" src="./media/floors/e/07F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${c==="environment"?`
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
                        ${(c==="energy"&&B==="load"?da:ze.items).map(F=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${F.name}</span>
                                <span class="pacom-row-sub">${F.detail} · <strong style="color:var(--pacom-text-primary);">${F.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,F.pct)}%; height:100%; border-radius:999px; background:${F.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,et(e,{onToggle:()=>{O=!O,le(),O&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:F=>{ee=F,le();const u=e.querySelector("[data-global-space-search]");u&&(u.focus(),u.setSelectionRange(F.length,F.length))},onPick:F=>{A=F,me=F.level==="all-projects"||F.level==="project"?v.projectId:F.level==="building"?v.buildingId:v.floorId,O=!1,le()}}),e.querySelectorAll("[data-cat]").forEach(F=>{F.addEventListener("click",()=>{R=F.dataset.cat??"energy",$e="",R==="timeseries"?le():ge()})}),e.querySelector("[data-range-select]")?.addEventListener("change",F=>{se=F.currentTarget.value??"7d",ge()}),e.querySelector("[data-custom-start]")?.addEventListener("change",F=>{Y=F.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",F=>{H=F.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(F=>{F.addEventListener("click",()=>{ae=F.dataset.chartMode??"chart",le()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{de=!de,le()}),e.querySelectorAll("[data-energy-right]").forEach(F=>{F.addEventListener("click",()=>{B=F.dataset.energyRight??"breakdown",le()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{oe?ha(Ue):fa(ke)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{ce=!ce,le()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(F=>{F.addEventListener("click",()=>{const u=F.dataset.tsExpand;u&&(p.has(u)?p.delete(u):p.add(u),le())})}),e.querySelectorAll("[data-ts-point]").forEach(F=>{F.addEventListener("change",()=>{const u=F.dataset.tsPoint;u&&(F.checked?E.add(u):E.delete(u),$e="",le())})}),e.querySelectorAll("[data-ts-mode]").forEach(F=>{F.addEventListener("click",()=>{h=F.dataset.tsMode??"grouped",le()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",F=>{pe=F.currentTarget.value??"1h",le()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{D=!D,le()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const u=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(E).join(","))}&mode=${h}&interval=${pe}`,w=`${window.location.origin}${window.location.pathname}${u}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(w).catch(()=>{}),window.history.replaceState(null,"",u),$e=`已复制分享链接（含 ${E.size} 个测点、${h==="grouped"?"按单位分组":"单图叠合"}、${pe} 粒度）。`,le()}),e.querySelectorAll("[data-load-fav]").forEach(F=>{F.addEventListener("click",()=>{const u=M.find(w=>w.id===F.dataset.loadFav);u&&(E.clear(),u.pointIds.forEach(w=>{E.add(w);const ne=w.split(":")[0];ne&&p.add(ne)}),h=u.mode,pe=u.interval,$e=`已加载收藏视图「${u.name}」。`,le())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(E.size===0)return;const F=`自定义对比 #${M.length+1}（${E.size} 测点）`;M.push({id:`fav-${Date.now()}`,name:F,pointIds:Array.from(E),mode:h,interval:pe}),$e=`已保存当前时序配置为「${F}」。`,le()})}await ge()}const $a={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},wa={frozen:"已冻结",draft:"草稿",delivered:"已交付"},gt={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},bt=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],It=[{id:"doc-hvac-7f",floorId:v.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:v.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:v.floorId,name:"E7F_协议点位与蓝牙Mesh映射台账.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:v.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],xa={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},kt=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function b(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function lt(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面")||t.includes("屋顶")||t.includes("天面"))return 999;const o=t.match(/(-?\d+)/);if(!o)return 0;const a=Number(o[1]);return t.startsWith("B")||t.includes("地下")||t.includes("负")?-Math.abs(a):a}const Et={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function Ge(e){const t=e.trim(),o=t.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test(o)||/屋面|屋顶|天面/.test(t))return"RF";const a=o.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(a)return`B${Number(a[1])}`;const i=t.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(i){const L=/^\d+$/.test(i[1])?Number(i[1]):Et[i[1]];if(L)return`B${L}`}if(/首层|一层/.test(t))return"1F";const r=t.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(r){const L=/^\d+$/.test(r[1])?Number(r[1]):Et[r[1]];if(L)return`${L}F`}const k=o.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return k?`${Number(k[1])}F`:null}function it(e){return new Promise((t,o)=>{const a=new FileReader;a.onload=()=>typeof a.result=="string"?t(a.result):o(new Error("无法读取图片内容")),a.onerror=()=>o(new Error(`读取文件「${e.name}」失败`)),a.readAsDataURL(e)})}function Sa(e){return e.category==="gateway"?e.name.includes("蓝牙")?"蓝牙适配器":"主控网关":e.category==="lighting"?e.name.includes("702")?"702 照明":e.name.slice(0,6):e.category==="hvac"?e.name.includes("VAV")?"VAV-02":e.name.includes("FCU")?"FCU-01":e.name.slice(0,6):e.category==="sensor"?"环境传感":e.name.slice(0,6)}function Ia(e,t){const o=e.status!=="connected",a=t.filter(i=>i.hardwareBinding?.protocol===e.protocol);return a.length>0?a.map(i=>{const r=i.connectivity==="offline"||o;return{pointName:i.category==="hvac"?"送风温度 / 阀门开度":i.category==="lighting"?"回路开关 / 亮度反馈":i.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:i.name,value:r?"无上报":i.category==="hvac"?"23.4°C · 62%":i.category==="lighting"?"开启 · 80%":i.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:r?"46 分钟前":"12 秒前",quality:r?i.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${e.protocol.toUpperCase()} 采集通道汇总点`,deviceName:e.name,value:o?"采样延迟":"正常上报",interval:"60s",lastSeen:o?"38 分钟前":"9 秒前",quality:o?"delayed":"online"}]}async function ka(e,t,o){const a=new URLSearchParams(window.location.hash.split("?")[1]??"").get("sec");let i=a==="floors"||a==="projects"?"project_config":a==="floorplan"||a==="devices"?"floorplan":a==="inventory"?"ledger":a==="connections"?"connections":"overview",r=a==="floors"?"floor_zones":"project_building",k="",L="all",z=Qe(),J=!1,R="",se="device",Y="all",H="",A=!1,O=!1,ee="mesh",me=1,ae=0,de=0,B=await t.getSpatialTree(),ce=[],ye=[],fe=[];const Se={...xa},N=[];let U=z.level==="all-projects"?B.projects[0]?.id??v.projectId:z.projectId,g=z.level==="building"||z.level==="floor"?z.buildingId:B.buildings.find($=>$.projectId===U)?.id??B.buildings[0]?.id??v.buildingId,h=z.level==="floor"?z.floorId:B.floors.find($=>$.buildingId===g&&$.id===v.floorId)?.id??B.floors.find($=>$.buildingId===g)?.id??v.floorId,pe="all",D=!1,S=!1,E=!1,p=!1,M=!1,$e=[],ge=null;const le=[];let oe=null,c=null,x=new Set,X=null,ke=!1,Ce=!1,ze=!1,Ne=!1,Ue=!1,F=null,u=null,w=null,ne=3,re=!1,Ee=[],qe=null,we="",he="";const De=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),Ve=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],Le=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:v.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:v.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:v.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:v.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],Ke=new Map;function I(){return B}function G(){return B.floors}function j($){return[...B.floors.filter(q=>q.buildingId===$)].sort((q,W)=>lt(W.name)-lt(q.name))}function f(){return B.zones}function y($){return[...$===v.floorId?ce:[],...N.filter(W=>W.floorId===$)]}function V($){return $?f().find(q=>q.id===$)?.name.replace(/^7F\s*/,"")??$:"未分配功能区"}function ie($){const q=B.buildings.find(C=>C.id===$);if(!q)return;U=q.projectId,g=q.id;const W=j(q.id);W.some(C=>C.id===h)||(h=W.find(C=>C.id===v.floorId)?.id??W[0]?.id??""),z=Xe(h?{level:"floor",projectId:q.projectId,buildingId:q.id,floorId:h}:{level:"building",projectId:q.projectId,buildingId:q.id}),X=null,O=!1,Ce=!1,me=1,ae=0,de=0}function Q($){h=$;const q=G().find(W=>W.id===$);if(q){g=q.buildingId;const W=B.buildings.find(C=>C.id===q.buildingId);W&&(U=W.projectId),z=Xe({level:"floor",projectId:U,buildingId:q.buildingId,floorId:q.id})}X=null,O=!1,Ce=!1,me=1,ae=0,de=0}async function ue(){he="";const[$,q,W,C]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(v.floorId).catch(()=>[]),t.listConnections(U),t.listDeliveryBatches(v.floorId)]);B=$,ce=q,ye=W,fe=C,!B.projects.some(n=>n.id===U)&&B.projects[0]&&(U=B.projects[0].id),B.buildings.some(n=>n.id===g)||(g=B.buildings.find(n=>n.projectId===U)?.id??B.buildings[0]?.id??g);const te=j(g);te.some(n=>n.id===h)||(h=te.find(n=>n.id===v.floorId)?.id??te[0]?.id??"");const K=y(h);X&&!K.some(n=>n.id===X)&&(X=null,O=!1),ke=K.find(n=>n.id===X)?.physicalInstalled??!1,P()}function xe(){const $=e.querySelector('[data-role="dep-viewport"]');$&&($.style.transform=`translate(${ae}px, ${de}px) scale(${me})`);const q=e.querySelector('[data-role="dep-zoom-label"]');q&&(q.textContent=`${Math.round(me*100)}%`)}function ve($){he="",$.connectivity==="offline"?he=`单机回读自检未通过（FAIL）：「${$.name}」当前离线，请核查网关链路或中继覆盖。`:we=`单机回读自检通过（PASS）：「${$.name}」指令下发与状态回读一致，已安全复位。`,P()}function Oe(){he="";const $=y(h),q=$.filter(K=>K.connectivity==="offline"),W=$.length-q.length,C=new Date;qe={ranAt:`${String(C.getHours()).padStart(2,"0")}:${String(C.getMinutes()).padStart(2,"0")}:${String(C.getSeconds()).padStart(2,"0")}`,total:$.length,passed:W,failed:q.length,failedNames:q.map(K=>K.name)},q.length>0?he=`全层批量自检完成：${W}/${$.length} 台通过，${q.length} 台异常（${q.map(K=>K.name).join("、")}）。`:we=`全层批量自检全部通过（${W}/${$.length}），设备已自动安全复位。`,P()}function Ze(){const $=y(h),q=[],W=$.filter(n=>n.connectivity==="offline"),C=$.filter(n=>!n.planPoint),te=$.filter(n=>De.get(n.id)?.proxy).length,K=$.filter(n=>De.get(n.id)?.relay).length,l=$.length?K/$.length:0;W.length>0?W.forEach(n=>q.push({level:"fail",title:`节点不可达：${n.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:n.id})):q.push({level:"ok",title:"全网节点可达性正常",detail:`${$.length} 台设备均正常响应心跳。`}),te<1?q.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):q.push({level:"ok",title:`代理节点配置合理（${te} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),l>.25&&$.length>=4&&q.push({level:"warn",title:`中继比例偏高（${Math.round(l*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),C.length>0&&q.push({level:"warn",title:`尚有 ${C.length} 台未完成图纸标点`,detail:"请在「图纸标点」中补齐坐标以便施工定位。"}),Ee=q,we=`已完成蓝牙 Mesh 网络体检（检测 ${$.length} 台节点，发现 ${q.filter(n=>n.level!=="ok").length} 项关注）。`,P()}function Ye(){const $=y(h),q=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...$.map(K=>[K.name,K.category,V(K.logicalZoneId),K.planPoint?`${Math.round(K.planPoint.x*100)}%/${Math.round(K.planPoint.y*100)}%`:"未标点",K.hardwareBinding?`${K.hardwareBinding.protocol} ${K.hardwareBinding.networkAddress}`:"未绑定",K.physicalInstalled?"已复核":"待复核",K.connectivity==="online"?"在线":"离线"].join(","))],W=new Blob([`\uFEFF${q.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),C=URL.createObjectURL(W),te=document.createElement("a");te.href=C,te.download="pacom-deployment-inventory.csv",te.click(),URL.revokeObjectURL(C)}const at={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。"},project_config:{title:"项目配置",subtitle:"维护项目、楼宇、楼层平面图与功能区结构。"},floorplan:{title:"设备标记",subtitle:"在 2D 平面底图上完成设备标记、回路灯点与硬件复核。"},ledger:{title:"设备列表",subtitle:"核查全层四态设备清单，统一下发人感/光感参数并执行单机或全层自检。"},groups:{title:"设备分组",subtitle:"统一管理端侧蓝牙 Mesh 自治联动组与云端业务分组。"},network_topo:{title:"设备网络",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。"},connections:{title:"系统接入",subtitle:"管理边缘网关服务与暖通、电表、环境等异构子系统通道及传感器采集质量。"}};function Rt(){const $=(q,W,C)=>`
      <button type="button" class="pacom-unified-item" aria-current="${i===q}" data-dep-nav="${q}">
        ${be(W,16)}
        <span>${C}</span>
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${$("overview","layout-dashboard","部署总览")}
          ${$("project_config","layers","项目配置")}
          ${$("floorplan","map-pin","设备标记")}
          ${$("ledger","list","设备列表")}
          ${$("groups","folder-kanban","设备分组")}
          ${$("network_topo","waypoints","设备网络")}
          ${$("connections","plug","系统接入")}
        </div>
      </aside>
    `}function Pt($){return i==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出台账</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${$?"":"disabled"}>+ 交付冻结</button>
      `:i==="floorplan"?'<button type="button" class="pacom-btn" data-export-inv="1">导出施工标点表</button>':i==="ledger"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':i==="groups"?`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1" ${$?"":"disabled"}>${Ue?"收起表单":"+ 新建分组"}</button>`:i==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${$?"":"disabled"}>${re?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:i==="connections"?`
        <button type="button" class="pacom-btn" data-edge-restart="service" ${$?"":"disabled"}>重启边缘服务</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-conn="1" ${$?"":"disabled"}>${Ne?"收起向导":"+ 新增接入通道"}</button>
      `:`<span class="pacom-badge ${$?"pacom-badge--online":"pacom-badge--warning"}">${$?"可编辑":"只读"}</span>`}function Ot(){const $=j(g),q=$.filter(n=>!!n.plan).length,W=$.flatMap(n=>y(n.id)),C=W.filter(n=>!!n.planPoint).length,te=W.filter(n=>n.connectivity==="online").length,K=W.filter(n=>n.physicalInstalled).length,l=$.filter(n=>y(n.id).length>0&&!re).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" data-proj-sub="floor_zones" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${q===$.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 空间与底图</span>
          <div class="pacom-kpi-value">${q}<span class="pacom-kpi-unit">/ ${$.length} 层</span></div>
          <span class="pacom-kpi-delta">${q===$.length?"全部底图就绪":`尚缺 ${$.length-q} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${C===W.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${C}<span class="pacom-kpi-unit">/ ${W.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${Ve.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${te===W.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${te}<span class="pacom-kpi-unit">/ ${W.length} 台</span></div>
          <span class="pacom-kpi-delta">${W.length-te>0?`${W.length-te} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${re?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${l}<span class="pacom-kpi-unit">/ ${$.length} 层</span></div>
          <span class="pacom-kpi-delta">${re?"有变更待下发 →":`基线 v${ne}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="ledger" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${K===W.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${K}<span class="pacom-kpi-unit">/ ${W.length} 台</span></div>
          <span class="pacom-kpi-delta">${K===W.length?"可交付冻结":`待复核 ${W.length-K} 台 →`}</span>
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
                ${$.map(n=>{const s=y(n.id),d=f().filter(_=>_.floorId===n.id),m=s.filter(_=>!!_.planPoint).length,T=s.filter(_=>_.connectivity==="online").length,Ie=s.filter(_=>_.physicalInstalled).length,Ae=!!n.plan,Fe=Ae&&s.length>0&&m===s.length&&Ie===s.length&&T===s.length&&!re;return`
                      <tr>
                        <td><strong>${b(n.name)}</strong><div class="pacom-row-sub">${n.areaSqm?`${n.areaSqm} m²`:"待补面积"}</div></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-proj-sub="floor_zones" data-matrix-floor="${b(n.id)}"><span class="pacom-dot ${Ae?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${Ae?`已传图 · ${d.length} 区`:"待传底图"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="floorplan" data-matrix-floor="${b(n.id)}"><span class="pacom-dot ${s.length>0&&m===s.length?"pacom-dot--online":s.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${s.length>0?`${m}/${s.length}`:"未标点"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${b(n.id)}"><span class="pacom-dot ${s.length>0&&T===s.length?"pacom-dot--online":s.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${s.length>0?`${T}/${s.length}`:"—"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${b(n.id)}"><span class="pacom-dot ${s.length===0?"pacom-dot--offline":re?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${s.length===0?"—":re?"待同步":`v${ne}`}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="ledger" data-matrix-floor="${b(n.id)}"><span class="pacom-dot ${s.length>0&&Ie===s.length?"pacom-dot--online":s.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${s.length>0?`${Ie}/${s.length}`:"—"}</span></button></td>
                        <td style="text-align:right;"><span class="pacom-badge ${Fe?"pacom-badge--online":s.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${Fe?"可验收交付":s.length>0?"实施中":"待配置"}</span></td>
                      </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${qe?`<div class="pacom-banner ${qe.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${qe.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${qe.passed}/${qe.total} 台${qe.failedNames.length?` · 异常：${qe.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${fe.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${fe.map(n=>`
                    <tr>
                      <td><div style="font-weight:450;">${b(n.versionTag)}</div><div class="pacom-row-sub"><code>${b(n.id)}</code></div></td>
                      <td><strong>${n.verifiedCount}</strong> / ${n.deviceCount} 台</td>
                      <td><div>${b(n.frozenBy)}</div><div class="pacom-row-sub">${b(n.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${wa[n.status]??n.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function $t($){const q=new Set(j($.id).map(C=>Ge(C.name)??C.name.toUpperCase())),W=[];for(let C=1;C<=$.aboveFloors;C+=1){const te=`${C}F`;q.has(te)||W.push({kind:"above",level:C,name:te})}for(let C=1;C<=$.belowFloors;C+=1){const te=`B${C}`;q.has(te)||W.push({kind:"below",level:-C,name:te})}return $.hasRoof&&!q.has("RF")&&W.push({kind:"roof",level:99,name:"RF"}),W}async function Nt($){const q=B.buildings.find(C=>C.id===$);if(!q)return 0;const W=$t(q);for(const C of W)await t.upsertFloor?.({buildingId:q.id,kind:C.kind,level:C.level,name:C.name});return W.length}function _t($){if(B.projects.length===0)return`
        <div style="width:100%; display:flex; flex-direction:column; gap:18px;">
          <div class="dep-empty-card">
            <div class="dep-empty-icon">${be("layers",20)}</div>
            <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
            <span class="pacom-row-sub" style="max-width:420px;">按「项目 → 楼宇与楼层 → 平面图与功能区」顺序完成空间建档后，即可开展设备标记与运行管理。</span>
            <div class="dep-empty-steps">
              <span>1. 创建项目</span>
              <span>→</span>
              <span>2. 添加楼宇与楼层</span>
              <span>→</span>
              <span>3. 上传平面图</span>
            </div>
            ${D?"":`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-proj="1" ${$?"":"disabled"}>+ 创建第一个项目</button>`}
          </div>
          ${D?`
              <form class="pacom-settings-card" data-create-project="1" style="padding:18px; gap:14px;">
                <div style="font-size:14px; font-weight:500;">新建项目</div>
                <div class="dep-param-grid">
                  <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" placeholder="如：广实3号园" required /></label>
                  <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="广州市" /></label>
                  <label class="dep-field"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" placeholder="街道与门牌号" /></label>
                  <label class="dep-field"><span class="dep-field-label">经度</span><input class="pacom-input" name="pLng" type="number" step="0.0001" placeholder="113.3824" /></label>
                  <label class="dep-field"><span class="dep-field-label">纬度</span><input class="pacom-input" name="pLat" type="number" step="0.0001" placeholder="23.0652" /></label>
                </div>
                <div style="display:flex; justify-content:flex-end; gap:8px;">
                  <button type="button" class="pacom-btn" data-toggle-new-proj="1">取消</button>
                  <button type="submit" class="pacom-btn pacom-btn--primary">创建项目</button>
                </div>
              </form>`:""}
        </div>`;const q=B.projects.find(s=>s.id===U)??B.projects[0],W=B.buildings.filter(s=>s.projectId===q.id),C=W.find(s=>s.id===g)??W[0]??null,te=C?j(C.id):[],K=C?$t(C):[],l=C?te.reduce((s,d)=>s+y(d.id).length,0):0,n=W.reduce((s,d)=>s+j(d.id).reduce((m,T)=>m+y(T.id).length,0),0);return`
      <div style="width:100%; display:flex; flex-direction:column; gap:24px;">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
              <h2 class="pacom-section-title">当前项目</h2>
              <select class="pacom-select" style="height:32px; font-size:13px; min-width:170px;" data-switch-proj-select aria-label="切换项目">
                ${B.projects.map(s=>{const d=B.buildings.filter(m=>m.projectId===s.id).length;return`<option value="${b(s.id)}" ${s.id===q.id?"selected":""}>${b(s.name)}（${d} 栋）</option>`}).join("")}
              </select>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-proj="1" ${$?"":"disabled"}>${D?"收起":"+ 新建项目"}</button>
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${b(q.id)}" ${!$||n>0?`disabled title="${n>0?"项目包含运行中设备，请先清理后再删除":"当前角色只读"}"`:""}>删除项目</button>
            </div>
          </div>
          ${D?`
              <form class="pacom-settings-card" data-create-project="1" style="padding:16px 18px; gap:12px;">
                <div class="dep-param-grid">
                  <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" placeholder="如：广实3号园" required /></label>
                  <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="广州市" /></label>
                  <label class="dep-field"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" placeholder="街道与门牌号" /></label>
                  <label class="dep-field"><span class="dep-field-label">经度</span><input class="pacom-input" name="pLng" type="number" step="0.0001" placeholder="113.3824" /></label>
                  <label class="dep-field"><span class="dep-field-label">纬度</span><input class="pacom-input" name="pLat" type="number" step="0.0001" placeholder="23.0652" /></label>
                </div>
                <div style="display:flex; justify-content:flex-end; gap:8px;">
                  <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-proj="1">取消</button>
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建项目</button>
                </div>
              </form>`:""}
          <div class="pacom-settings-card">
            <div class="pacom-setting-row" style="display:grid; grid-template-columns:minmax(0,1.55fr) minmax(200px,0.75fr); gap:18px; align-items:start;">
              <form data-save-project="${b(q.id)}" style="display:flex; flex-direction:column; gap:12px;">
                <div class="dep-param-grid">
                  <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${b(q.name)}" required ${$?"":"disabled"} /></label>
                  <label class="dep-field"><span class="dep-field-label">城市</span><input class="pacom-input" name="pCity" value="${b(q.city??"")}" ${$?"":"disabled"} /></label>
                  <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${b(q.address??"")}" placeholder="用于气象匹配与园区定位" ${$?"":"disabled"} /></label>
                  <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${b(q.location?.lng??"")}" placeholder="113.3824" ${$?"":"disabled"} /></label>
                  <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${b(q.location?.lat??"")}" placeholder="23.0652" ${$?"":"disabled"} /></label>
                </div>
                <div style="display:flex; justify-content:flex-end;">
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${$?"":"disabled"}>保存项目信息</button>
                </div>
              </form>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <div style="border-radius:10px; overflow:hidden; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle); aspect-ratio:16/10;">
                  <img src="${b(q.imageUrl??"./media/gzlab.jpg")}" alt="${b(q.name)}" style="width:100%; height:100%; object-fit:cover; display:block;" />
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; justify-content:center;">
                  <span>更换项目封面图</span>
                  <input type="file" accept="image/*" data-upload-proj="${b(q.id)}" style="display:none;" ${$?"":"disabled"} />
                </label>
              </div>
            </div>
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">园区楼宇（${W.length} 栋）</h2>
            <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-bld="1" ${$?"":"disabled"}>${S?"收起":"+ 新建楼宇"}</button>
          </div>
          ${S?`
              <form class="pacom-settings-card" data-create-bld="${b(q.id)}" style="padding:16px 18px; gap:12px;">
                <div class="dep-param-grid">
                  <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" placeholder="如：G栋" required /></label>
                  <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" placeholder="选填" /></label>
                  <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="12" /></label>
                  <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="0" /></label>
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                  <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap; font-size:13px;">
                    <label style="display:inline-flex; align-items:center; gap:5px;"><input type="checkbox" name="bRoof" checked />含屋面层 (RF)</label>
                    <label style="display:inline-flex; align-items:center; gap:5px;"><input type="checkbox" name="bAutoFloors" checked />创建后自动生成全部楼层</label>
                  </div>
                  <div style="display:flex; gap:8px;">
                    <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-bld="1">取消</button>
                    <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建楼宇</button>
                  </div>
                </div>
              </form>`:""}
          ${W.length===0?`
              <div class="dep-empty-card">
                <div class="dep-empty-icon">${be("building-2",20)}</div>
                <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${b(q.name)} 暂无楼宇</strong>
                <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
                ${S?"":`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-bld="1" ${$?"":"disabled"}>+ 添加第一栋楼宇</button>`}
              </div>`:`
              <div class="dep-building-grid">
                ${W.map(s=>{const d=j(s.id),m=d.filter(Ae=>!!Ae.plan).length,T=C?.id===s.id,Ie=d.length===0?"pacom-badge--neutral":m===d.length?"pacom-badge--online":"pacom-badge--warning";return`
                      <button type="button" class="dep-building-card ${T?"is-active":""}" data-pick-building="${b(s.id)}">
                        <img class="dep-building-thumb" src="${b(s.imageUrl??"./media/building-e.webp")}" alt="${b(s.name)}" />
                        <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
                          <div style="display:flex; align-items:center; gap:6px;">
                            <span style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">${b(s.name)}</span>
                            <span class="pacom-badge ${Ie}">${d.length===0?"未建层":`${m}/${d.length} 底图`}</span>
                          </div>
                          <span class="pacom-row-sub">地上 ${s.aboveFloors} 层${s.belowFloors>0?` · 地下 ${s.belowFloors} 层`:""}${s.hasRoof?" · RF":""}</span>
                          <span class="pacom-row-sub">${s.areaSqm?`${s.areaSqm} m²`:"待补面积"}</span>
                        </div>
                      </button>`}).join("")}
              </div>
              ${C?`
                  <div class="pacom-settings-card">
                    <div class="pacom-setting-row" style="justify-content:space-between; flex-wrap:wrap; gap:10px;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <strong style="font-size:15px; font-weight:500;">${b(C.name)}</strong>
                        <span class="pacom-row-sub">已配置 ${te.length} 个楼层</span>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${b(C.id)}" ${!$||l>0?`disabled title="${l>0?"楼宇包含运行中设备，请先清理后再删除":"当前角色只读"}"`:""}>删除楼宇</button>
                        <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-proj-sub-tab="floor_zones">管理楼层与图纸 →</button>
                      </div>
                    </div>
                    ${K.length>0?`
                        <div class="pacom-setting-row" style="background:var(--pacom-surface-primary); justify-content:space-between; gap:10px; flex-wrap:wrap;">
                          <span style="font-size:13px; color:var(--pacom-text-secondary);">按当前层数结构，尚缺 <strong>${K.length}</strong> 个楼层（${b(K.slice(0,4).map(s=>s.name).join("、"))}${K.length>4?" 等":""}）。</span>
                          <button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${b(C.id)}" ${$?"":"disabled"}>一键补齐缺失 ${K.length} 层</button>
                        </div>`:""}
                    <div class="pacom-setting-row" style="display:grid; grid-template-columns:minmax(0,1.4fr) minmax(220px,0.9fr); gap:18px; align-items:start;">
                      <form data-save-building="${b(C.id)}" style="display:flex; flex-direction:column; gap:12px;">
                        <div class="dep-param-grid">
                          <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${b(C.name)}" required ${$?"":"disabled"} /></label>
                          <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${b(C.areaSqm??"")}" placeholder="选填" ${$?"":"disabled"} /></label>
                          <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${C.aboveFloors}" ${$?"":"disabled"} /></label>
                          <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${C.belowFloors}" ${$?"":"disabled"} /></label>
                        </div>
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                          <label style="display:inline-flex; align-items:center; gap:5px; font-size:13px;"><input type="checkbox" name="bRoof" ${C.hasRoof?"checked":""} ${$?"":"disabled"} />含屋面层 (RF)</label>
                          <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${$?"":"disabled"}>保存楼宇参数</button>
                        </div>
                      </form>
                      <div style="display:flex; flex-direction:column; gap:8px;">
                        <div style="border-radius:10px; overflow:hidden; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle); padding:8px; height:172px; display:flex; align-items:center; justify-content:center;">
                          <img src="${b(C.imageUrl??"./media/building-e.webp")}" alt="${b(C.name)}" style="max-width:100%; max-height:100%; object-fit:contain; display:block;" />
                        </div>
                        <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; justify-content:center;">
                          <span>替换楼宇外观图</span>
                          <input type="file" accept="image/*" data-upload-bld="${b(C.id)}" style="display:none;" ${$?"":"disabled"} />
                        </label>
                      </div>
                    </div>
                  </div>`:""}`}
        </section>
      </div>
    `}function Bt($){if(B.projects.length===0)return`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${be("layers",20)}</div>
          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">请先创建项目</strong>
          <span class="pacom-row-sub">创建项目并添加楼宇后，即可在此管理楼层平面图与功能区。</span>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-proj="1">前往创建项目 →</button>
        </div>`;const q=B.projects.find(_=>_.id===U)??B.projects[0],W=B.buildings.filter(_=>_.projectId===q.id);if(W.length===0)return`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${be("building-2",20)}</div>
          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${b(q.name)} 尚未添加楼宇</strong>
          <span class="pacom-row-sub">请先在「项目与楼宇」中添加楼宇，再配置各层平面图与功能区。</span>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-bld="1">前往添加楼宇 →</button>
        </div>`;const C=W.find(_=>_.id===g)??W[0],te=j(C.id),K=te.filter(_=>!_.plan).length,l=te.filter(_=>f().filter(je=>je.floorId===_.id).length===0).length,n=te.filter(_=>pe==="missing_plan"?!_.plan:pe==="missing_zone"?f().filter(je=>je.floorId===_.id).length===0:!0),s=n.find(_=>_.id===h)??te.find(_=>_.id===h)??n[0]??null,d=s?f().filter(_=>_.floorId===s.id):[],m=s?[...It,...le].filter(_=>_.floorId===s.id):[],T=s?y(s.id).length:0,Ie=$e.filter(_=>!!_.matchedFloorId).length,Ae=s?te.filter(_=>_.id!==s.id):[],Fe=te.length>0&&(K>0||p||$e.length>0);return`
      <div style="width:100%; display:flex; flex-direction:column; gap:18px;">
        ${te.length>0?Fe?`
              <div class="dep-upload-drop" data-batch-dropzone="${b(C.id)}" style="padding:14px 16px; flex-direction:column; align-items:stretch; gap:12px; ${M?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:14px; flex-wrap:wrap;">
                  <div style="display:flex; flex-direction:column; gap:2px;">
                    <strong style="font-size:14px; font-weight:450;">批量导入 ${b(C.name)} 平面底图</strong>
                    <span class="pacom-row-sub">拖拽或多选图片（支持 01F、首层、屋面、RF、B1 等中英文命名），可在下方手动校对对应楼层</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span class="pacom-badge ${K===0?"pacom-badge--online":"pacom-badge--warning"}">已就绪 ${te.length-K}/${te.length} 层</span>
                    <label class="pacom-btn pacom-btn--primary pacom-btn--sm" style="cursor:pointer;">
                      <span>选择多张图纸</span>
                      <input type="file" accept="image/*" multiple data-batch-upload-floors="${b(C.id)}" style="display:none;" ${$?"":"disabled"} />
                    </label>
                    ${K===0&&$e.length===0?'<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-toggle-batch-panel="1">收起</button>':""}
                  </div>
                </div>
                ${$e.length>0?`
                    <div style="padding-top:10px; border-top:var(--hw) solid var(--pacom-border-subtle); display:flex; flex-direction:column; gap:8px;">
                      <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                        <span style="font-size:13px;">待导入 <strong>${$e.length}</strong> 张，已分配 <strong>${Ie}</strong> 层</span>
                        <div style="display:flex; gap:6px;">
                          <button type="button" class="pacom-btn pacom-btn--sm" data-cancel-batch-upload="1">取消</button>
                          <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-batch-upload="1" ${Ie===0?"disabled":""}>确认导入（${Ie} 层）</button>
                        </div>
                      </div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:6px; max-height:176px; overflow-y:auto;">
                        ${$e.map(_=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${b(_.file.name)}">${b(_.file.name)}</span>
                              <select class="pacom-select" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${b(_.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${te.map(je=>`<option value="${b(je.id)}" ${_.matchedFloorId===je.id?"selected":""}>${b(je.name)}</option>`).join("")}
                              </select>
                            </div>`).join("")}
                      </div>
                    </div>`:""}
              </div>`:`
              <div class="pacom-settings-card" style="padding:10px 16px; flex-direction:row; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span class="pacom-dot pacom-dot--online"></span>
                  <span style="font-size:13px; color:var(--pacom-text-secondary);">${b(C.name)} 全部 ${te.length} 层平面底图已就绪</span>
                </div>
                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-toggle-batch-panel="1" ${$?"":"disabled"}>批量替换底图</button>
              </div>`:""}

        <div class="dep-floor-workbench">
          <div class="dep-floor-list-card">
            <div class="dep-floor-list-head">
              <div style="display:flex; align-items:center; justify-content:space-between; gap:6px;">
                <select class="pacom-select" style="flex:1; height:30px; font-size:13px;" data-switch-bld-select aria-label="切换楼宇">
                  ${W.map(_=>`<option value="${b(_.id)}" ${_.id===C.id?"selected":""}>${b(_.name)}（${j(_.id).length} 层）</option>`).join("")}
                </select>
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-floor="1" ${$?"":"disabled"}>${E?"收起":"+ 新增"}</button>
              </div>
              ${E?`
                  <form data-create-floor="${b(C.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:4px;">
                    <div style="display:flex; gap:6px;">
                      <input class="pacom-input" name="fName" placeholder="楼层名（如 23F / B1）" style="height:30px; font-size:13px;" required />
                      <input class="pacom-input" name="fArea" type="number" step="0.1" placeholder="面积 m²" style="width:92px; height:30px; font-size:13px;" />
                    </div>
                    <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">确认新增</button>
                  </form>`:""}
              <div class="dep-filter-seg" role="group" aria-label="楼层筛选">
                <button type="button" class="dep-filter-btn" aria-pressed="${pe==="all"}" data-floor-list-filter="all">全部 ${te.length}</button>
                <button type="button" class="dep-filter-btn" aria-pressed="${pe==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 ${K}</button>
                <button type="button" class="dep-filter-btn" aria-pressed="${pe==="missing_zone"}" data-floor-list-filter="missing_zone">缺分区 ${l}</button>
              </div>
            </div>
            <div class="dep-floor-list-scroll">
              ${n.length===0?`<div class="pacom-row-sub" style="padding:18px; text-align:center;">${te.length===0?"暂无楼层":"当前筛选无匹配楼层"}</div>`:n.map(_=>{const je=f().filter(Me=>Me.floorId===_.id).length;return`
                          <button type="button" class="dep-floor-row ${s?.id===_.id?"is-active":""}" data-pick-floor-pill="${b(_.id)}">
                            <span style="display:inline-flex; align-items:center; gap:7px; min-width:0;">
                              <span class="pacom-dot ${_.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                              <span>${b(_.name)}</span>
                            </span>
                            <span class="pacom-row-sub">${_.areaSqm?`${_.areaSqm} m²`:"待补面积"} · ${je} 区</span>
                          </button>`}).join("")}
            </div>
          </div>

          <div class="dep-floor-detail">
            ${te.length===0?`
                <div class="dep-empty-card">
                  <div class="dep-empty-icon">${be("layers",20)}</div>
                  <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${b(C.name)} 暂无楼层</strong>
                  <span class="pacom-row-sub">可按楼宇结构（地上 ${C.aboveFloors} 层${C.belowFloors>0?`、地下 ${C.belowFloors} 层`:""}${C.hasRoof?"、含 RF":""}）一键生成全部楼层，或手动新增。</span>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${b(C.id)}" ${$?"":"disabled"}>一键生成全部楼层</button>
                    <button type="button" class="pacom-btn" data-toggle-new-floor="1" ${$?"":"disabled"}>+ 手动新增楼层</button>
                  </div>
                </div>`:s?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                        <h2 class="pacom-section-title">${b(C.name)} ${b(s.name)}</h2>
                        <span class="pacom-badge ${s.plan?"pacom-badge--online":"pacom-badge--warning"}">${s.plan?"底图已就绪":"待上传底图"}</span>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-floor="${b(s.id)}" ${!$||T>0?`disabled title="${T>0?`当前楼层已关联 ${T} 台设备，请先移除设备后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                        <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-dep-nav="floorplan">进入设备标记 →</button>
                      </div>
                    </div>
                    <div class="pacom-settings-card">
                      <form class="pacom-setting-row" style="gap:10px;" data-save-floor="${b(s.id)}">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">楼层名称与建筑面积</span>
                          <span class="pacom-setting-desc">用于空间展示与面积统计</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="fName" value="${b(s.name)}" style="width:96px;" required ${$?"":"disabled"} />
                          <input class="pacom-input" name="fArea" type="number" step="0.1" value="${b(s.areaSqm??"")}" placeholder="面积 m²" style="width:116px;" ${$?"":"disabled"} />
                          <button type="submit" class="pacom-btn pacom-btn--sm" ${$?"":"disabled"}>保存</button>
                        </div>
                      </form>
                      <div class="pacom-setting-row" style="display:grid; grid-template-columns:minmax(0,1.55fr) minmax(200px,0.95fr); gap:16px; align-items:center;">
                        <div class="dep-plan-preview-box" data-single-floor-drop="${b(s.id)}">
                          ${s.plan?`<img src="${b(s.plan.imageUrl)}" alt="${b(s.name)} 平面图" style="width:100%; max-height:280px; object-fit:contain; display:block;" />
                                 <button type="button" class="dep-plan-zoom-btn" data-open-lightbox="1" data-lb-title="${b(C.name)} ${b(s.name)} 平面底图" data-lb-src="${b(s.plan.imageUrl)}">查看大图</button>`:`<div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:18px; text-align:center;">
                                   <span style="font-size:14px; color:var(--pacom-text-secondary);">拖拽平面图到此处</span>
                                   <span class="pacom-row-sub">或点击右侧按钮上传 PNG / WebP / JPG</span>
                                 </div>`}
                        </div>
                        <div class="dep-upload-drop" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:450;">${s.plan?"平面底图":"上传本层平面底图"}</strong>
                          <span class="pacom-row-sub">支持透明 PNG / WebP / JPG，上传后同步至空间总览与设备标记</span>
                          <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                            <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                              <span>${s.plan?"替换平面图":"选择平面图"}</span>
                              <input type="file" accept="image/*" data-upload-floor="${b(s.id)}" style="display:none;" ${$?"":"disabled"} />
                            </label>
                            ${s.plan?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-clear-floor-plan="${b(s.id)}" ${$?"":"disabled"}>清空底图</button>`:""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">本层功能区（${d.length}）</h2>
                      ${d.length>0&&Ae.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-toggle-copy-zones="${b(s.id)}" ${$?"":"disabled"}>${c===s.id?"收起复用":"复用至其他楼层…"}</button>`:'<span class="pacom-row-sub">用于区域控制与能耗分项统计</span>'}
                    </div>
                    ${c===s.id&&Ae.length>0?`
                        <div class="pacom-settings-card" style="padding:14px 18px; gap:10px;">
                          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                            <span style="font-size:13px; font-weight:450;">选择目标楼层（已选 ${x.size} 层）</span>
                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                            </div>
                          </div>
                          <div style="display:flex; flex-wrap:wrap; gap:6px;">
                            ${Ae.map(_=>{const je=x.has(_.id),Me=f().filter(Re=>Re.floorId===_.id).length;return`
                                  <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${je}">
                                    <input type="checkbox" data-copy-target-floor="${b(_.id)}" ${je?"checked":""} style="margin:0;" />
                                    <span>${b(_.name)}${Me>0?` (${Me}区)`:""}</span>
                                  </label>`}).join("")}
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-copy-zones="${b(s.id)}">取消</button>
                            <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${b(s.id)}" ${x.size===0?"disabled":""}>确认复制到已选（${x.size} 层）</button>
                          </div>
                        </div>`:""}
                    <div class="pacom-settings-card">
                      ${d.length===0?`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:flex-start; gap:8px;">
                            <span class="pacom-row-sub">本层暂未划分功能区，可直接套用常用模板或手动添加：</span>
                            <div style="display:flex; flex-wrap:wrap; gap:6px;">
                              ${kt.map(_=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${b(_.key)}" data-tpl-floor="${b(s.id)}" ${$?"":"disabled"}>+ ${b(_.label)}</button>`).join("")}
                            </div>
                          </div>`:d.map(_=>oe===_.id?`
                                    <form class="pacom-setting-row" style="gap:8px;" data-save-edit-zone="${b(_.id)}" data-zone-floor="${b(s.id)}">
                                      <input class="pacom-input" name="zName" value="${b(_.name)}" required />
                                      <select class="pacom-select" name="zCat">
                                        ${Object.keys(gt).map(je=>`<option value="${je}" ${_.category===je?"selected":""}>${gt[je]}</option>`).join("")}
                                      </select>
                                      <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                      <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                    </form>`:`
                                    <div class="pacom-setting-row">
                                      <div class="pacom-setting-meta">
                                        <span class="pacom-setting-title">${b(_.name)} <span class="pacom-badge pacom-badge--neutral">${b(gt[_.category]??_.category)}</span></span>
                                      </div>
                                      <div class="pacom-setting-control">
                                        <span class="pacom-row-sub">${y(s.id).filter(je=>je.logicalZoneId===_.id).length} 台设备</span>
                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${b(_.id)}" ${$?"":"disabled"}>编辑</button>
                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${b(_.id)}" ${$?"":"disabled"}>删除</button>
                                      </div>
                                    </div>`).join("")}
                      <form class="pacom-setting-row" style="gap:8px;" data-add-zone="${b(s.id)}">
                        <input class="pacom-input" name="zoneName" placeholder="输入新功能区名称（如：${b(s.name)} 东侧实验区）" required ${$?"":"disabled"} />
                        <select class="pacom-select" name="zoneCat" ${$?"":"disabled"}>
                          <option value="lab">实验区</option>
                          <option value="office">办公区</option>
                          <option value="meeting">会议室</option>
                          <option value="corridor">走廊/公区</option>
                          <option value="utility">机房/后勤</option>
                          <option value="outdoor">露台/活动区</option>
                        </select>
                        <button type="submit" class="pacom-btn pacom-btn--sm" ${$?"":"disabled"}>+ 添加</button>
                      </form>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">关联图纸与设备手册（${m.length}）</h2>
                      <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                        <span>+ 关联文件</span>
                        <input type="file" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${b(s.id)}" style="display:none;" ${$?"":"disabled"} />
                      </label>
                    </div>
                    ${m.length===0?'<div class="pacom-settings-card" style="padding:14px 18px;"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':`
                        <div class="pacom-table-card">
                          <div class="pacom-table-wrap">
                            <table class="pacom-table">
                              <thead><tr><th>文档名称</th><th>类型</th><th>关联范围</th><th style="text-align:right;">操作</th></tr></thead>
                              <tbody>
                                ${m.map(_=>`
                                    <tr>
                                      <td><div style="font-weight:450;">${b(_.name)}</div><div class="pacom-row-sub">${b(_.size)} · ${b(_.updatedAt)}</div></td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${b(_.category)}</span></td>
                                      <td><span class="pacom-row-sub">${b(_.boundScope)}</span></td>
                                      <td style="text-align:right;"><button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${b(_.id)}">查阅</button></td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>`}
                  </section>`:'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前筛选无匹配楼层</div>'}
          </div>
        </div>
      </div>
    `}function Ut($){const q=j(g),W=q.find(m=>m.id===h)??q[0],C=y(h),te=f().filter(m=>m.floorId===h),K=O?C.find(m=>m.id===X)??null:null,l=K?De.get(K.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${h.slice(-4)}`}:null,n=K?Ve.filter(m=>m.deviceId===K.id):[],s=H.trim().toLowerCase(),d=C.filter(m=>!(Y==="unverified"&&m.physicalInstalled||Y==="unplaced"&&m.planPoint||s&&!`${m.name} ${V(m.logicalZoneId)}`.toLowerCase().includes(s)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${be("search",16)}
            <input class="pacom-hud-input" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${b(H)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${A?"is-active":""}" data-toggle-hud-pool="1">设备池 ${C.length}</button>
            <button type="button" class="pacom-hud-pill" data-toggle-new-dev="1" ${$?"":"disabled"}>+ 标点</button>
          </div>

          ${A||ze?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${ze?"新增设备标点":`${b(W?.name??"7F")} 设备池（${d.length}）`}</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${be("x",16)}</button>
                </div>
                ${ze?`
                    <form data-create-dev="1" style="padding:12px; display:flex; flex-direction:column; gap:8px;">
                      <input class="pacom-input" name="devName" placeholder="设备名称（如：703 会议室三控面板）" required />
                      <select class="pacom-select" name="devPreset">${bt.map(m=>`<option value="${m.key}">${m.label}</option>`).join("")}</select>
                      <select class="pacom-select" name="devZone">${te.map(m=>`<option value="${b(m.id)}">${b(m.name)}</option>`).join("")}</select>
                      <button type="submit" class="pacom-btn pacom-btn--primary">加入图纸并预设 Mesh 角色</button>
                    </form>`:`
                    <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                      <div class="pacom-count-pills">
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${Y==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${C.length}</span></button>
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${Y==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${C.filter(m=>!m.physicalInstalled).length}</span></button>
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${Y==="unplaced"}" data-dev-filter="unplaced">未标点 <span class="pacom-count-num">${C.filter(m=>!m.planPoint).length}</span></button>
                      </div>
                    </div>
                    <div class="pacom-list" style="padding:6px;">
                      ${d.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':d.map(m=>`
                                <div class="pacom-row ${m.id===X&&O?"is-selected":""}" data-pick-dev="${b(m.id)}" style="padding:8px;">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${b(m.name)}</div>
                                    <div class="pacom-row-sub">${b(V(m.logicalZoneId))} · ${m.physicalInstalled?"已复核":"待复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${m.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${m.planPoint?"已标点":"未标点"}</span>
                                </div>`).join("")}
                    </div>`}
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${Ce?"crosshair":"grab"};">
          ${W?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${ae}px, ${de}px) scale(${me});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${b(W.plan.imageUrl)}" alt="${b(W.name)} 平面图" />
                  ${se==="zone"?te.map(m=>{const T=Se[m.id];return T?`<div class="pacom-zone-hotspot is-active" style="left:${T.left}%; top:${T.top}%; width:${T.width}%; height:${T.height}%;"><span class="pacom-zone-tag">${b(m.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${C.filter(m=>m.planPoint).map(m=>`
                      <button type="button" class="pacom-pin ${m.id===X&&O?"is-selected":""} ${m.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(m.planPoint.x*100).toFixed(2)}%; top:${(m.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${b(m.id)}" title="${b(m.name)}">
                        <span class="pacom-dot ${m.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${b(Sa(m))}</span>
                      </button>`).join("")}
                  ${se==="light_marker"||K?.category==="lighting"?Ve.filter(m=>C.some(T=>T.id===m.deviceId)).map(m=>`
                            <span class="dep-light-dot" style="left:${(m.x*100).toFixed(1)}%; top:${(m.y*100).toFixed(1)}%;" title="${b(m.label)}（${b(m.channel)}）">
                              ${be("sparkles",12)}<span>${b(m.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="project_config" data-proj-sub="floor_zones">前往「项目配置」上传真实底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${q.map(m=>`
              <button type="button" class="pacom-elev-item ${m.id===h?"is-active":""}" data-scrubber-floor="${b(m.id)}" title="${b(m.name)}${m.plan?" · 已传底图":" · 待传底图"}">
                ${m.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${b(m.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${se==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${se==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${se==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${be("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(me*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${be("plus",16)}</button>
        </div>

        ${K?`
            <aside class="pacom-drawer" aria-label="设备部署属性">
              <div class="pacom-drawer-head">
                <div style="min-width:0;">
                  <h2 class="pacom-drawer-title">${b(K.name)}</h2>
                  <div class="pacom-row-sub">${b(V(K.logicalZoneId))} · v${K.version}</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${be("x",16)}</button>
              </div>

              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${$?"":"disabled"}>${Ce?"点击图纸定位中…":"点图更新坐标"}</button>
                <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${b(K.id)}">Ping 闪灯 5s</button>
                <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
              </div>

              ${K.category==="lighting"?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:14px; font-weight:450;">回路可视化灯点（${n.length}）</span>
                      <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${b(K.id)}" ${$?"":"disabled"}>+ 添加灯点</button>
                    </div>
                    ${n.map(m=>`
                        <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                          <span><strong>${b(m.channel)}</strong> · ${b(m.label)}</span>
                          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:13px;" data-del-light-marker="${b(m.id)}" ${$?"":"disabled"}>删</button>
                        </div>`).join("")}
                  </div>`:""}

              ${K.category!=="hvac"&&K.category!=="meter"&&l?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                      <code style="font-size:12px;">${b(l.meshUuid)}</code>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                      <span>Proxy 代理（建议每层 2–3 个）</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${l.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${b(K.id)}" ${$?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                      <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${l.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${b(K.id)}" ${$?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                    </div>
                  </div>`:""}

              <form data-role="binding-form" class="pacom-control-box" style="gap:8px;">
                <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                  <select class="pacom-select" style="height:30px; font-size:13px;" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(m=>`<option value="${m}" ${K.hardwareBinding?.protocol===m?"selected":""}>${m.toUpperCase()}</option>`).join("")}
                  </select>
                  <input class="pacom-input" style="height:30px; font-size:13px;" name="networkAddress" placeholder="网络地址/主题" value="${b(K.hardwareBinding?.networkAddress??"")}" />
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                  <input class="pacom-input" style="height:30px; font-size:13px;" name="portOrChannel" placeholder="端口/回路" value="${b(K.hardwareBinding?.portOrChannel??"")}" />
                  <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; flex-shrink:0;">
                    <span>物理已复核</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${ke}" data-toggle-phys="1" ${$?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </span>
                </div>
                <button class="pacom-btn pacom-btn--primary" type="submit" ${$?"":"disabled"}>保存绑定与复核（v${K.version}）</button>
              </form>
            </aside>`:""}
      </main>
    `}function Vt($){const q=y(h),W=k.trim().toLowerCase(),C=q.filter(n=>!(L==="online"&&n.connectivity!=="online"||L==="offline"&&n.connectivity!=="offline"||L==="unverified"&&n.physicalInstalled||W&&!`${n.name} ${V(n.logicalZoneId)} ${n.hardwareBinding?.protocol??""}`.toLowerCase().includes(W))),te=q.filter(n=>n.connectivity==="online").length,K=F?q.find(n=>n.id===F)??null:null,l=K?Ke.get(K.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450}:null;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" style="width:220px;" data-ledger-search placeholder="搜索设备名称或功能区…" value="${b(k)}" aria-label="搜索设备列表" />
          <select class="pacom-select" data-ledger-filter aria-label="按设备状态筛选">
            <option value="all" ${L==="all"?"selected":""}>全部状态（${q.length}）</option>
            <option value="online" ${L==="online"?"selected":""}>仅看在线（${te}）</option>
            <option value="offline" ${L==="offline"?"selected":""}>仅看离线（${q.length-te}）</option>
            <option value="unverified" ${L==="unverified"?"selected":""}>待物理复核（${q.filter(n=>!n.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${be("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn" data-export-inv="1">导出 CSV</button>
        </div>
      </div>
      ${K&&l?`
          <form class="pacom-settings-card" data-save-dev-params="${b(K.id)}">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">设备参数配置：${b(K.name)}</span>
                <span class="pacom-setting-desc">人感自动关灯延时、光照度开关门限与默认亮度参数</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-close-param="1">${be("x",16)}</button>
            </div>
            <div class="pacom-setting-row" style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px;">
              <label class="pacom-field"><span>自动关灯延时(分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${l.offDelayMin}" /></label>
              <label class="pacom-field"><span>恢复自动延时(分)</span><input class="pacom-input" name="restoreMin" type="number" value="${l.restoreMin}" /></label>
              <label class="pacom-field"><span>开灯光感门限(lx)</span><input class="pacom-input" name="luxOn" type="number" value="${l.luxOn}" /></label>
              <label class="pacom-field"><span>关灯光感门限(lx)</span><input class="pacom-input" name="luxOff" type="number" value="${l.luxOff}" /></label>
            </div>
            <div class="pacom-setting-row" style="justify-content:flex-end;">
              <button type="submit" class="pacom-btn pacom-btn--primary" ${$?"":"disabled"}>下发设备参数</button>
            </div>
          </form>`:""}
      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${C.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词或切换状态筛选。</span></div></td></tr>':C.map(n=>`
                        <tr>
                          <td><div style="font-weight:450;">${b(n.name)}</div><div class="pacom-row-sub">${b(V(n.logicalZoneId))} · v${n.version}</div></td>
                          <td><span class="pacom-badge ${n.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${n.planPoint?`${Math.round(n.planPoint.x*100)}%,${Math.round(n.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${n.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${n.hardwareBinding?n.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${n.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${n.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${n.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${n.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${b(n.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-param="${b(n.id)}">参数</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${b(n.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${C.length} / ${q.length} 台设备 · ${te} 在线 · ${q.length-te} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dep-nav="floorplan">前往设备标记 →</button>
        </div>
      </div>
    `}function Zt(){const $=Le.filter(W=>W.track==="mesh_auto"),q=Le.filter(W=>W.track==="cloud_biz");return`
      ${Ue?`
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
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${$.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${$.map(W=>`
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">${b(W.name)} <span class="pacom-badge pacom-badge--neutral">${b(W.groupType)}</span></span>
                    <span class="pacom-setting-desc">成员 ${W.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                  </div>
                  <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${b(W.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${q.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${q.map(W=>`
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">${b(W.name)} <span class="pacom-badge pacom-badge--neutral">${b(W.groupType)}</span></span>
                    <span class="pacom-setting-desc">成员 ${W.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                  </div>
                  <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${b(W.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>
      </div>
    `}function Ht(){const $=y(h),q=f().filter(s=>s.floorId===h),W=$.filter(s=>s.category!=="hvac"&&s.category!=="meter"),C=W.filter(s=>De.get(s.id)?.proxy).length,te=W.filter(s=>De.get(s.id)?.relay).length,K=$.filter(s=>s.category==="gateway"),l=$.filter(s=>De.get(s.id)?.relay||De.get(s.id)?.proxy),n=$.filter(s=>s.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge pacom-badge--online">协同锁空闲 · 可同步</span>
            <span class="pacom-row-sub">Mesh 节点 ${W.length} 台 · Proxy ${C} 个 · Relay ${te} 个 · 边缘基线 v${ne}</span>
          </div>
        </div>
        ${Ee.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${Ee.map(s=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${b(s.title)}</strong> <span class="pacom-row-sub">· ${b(s.detail)}</span></div>
                      <span class="pacom-badge ${s.level==="ok"?"pacom-badge--online":s.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${s.level==="ok"?"通过":s.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达图纸标点）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${ee==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${ee==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${ee==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${K.map(s=>`
                    <button type="button" class="dep-topo-node ${s.connectivity==="offline"?"is-issue":""}" data-topo-jump="${b(s.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${b(s.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                      <span class="pacom-row-sub">${b(s.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${l.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，请在图纸标点抽屉中为传感器开启。</div>':l.map(s=>{const d=De.get(s.id);return`
                            <button type="button" class="dep-topo-node ${s.connectivity==="offline"?"is-issue":""}" data-topo-jump="${b(s.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${b(s.name)}</strong><span class="pacom-badge pacom-badge--accent">${d?.proxy?"Proxy":""}${d?.proxy&&d?.relay?" + ":""}${d?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${b(V(s.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${n.map(s=>`
                    <button type="button" class="dep-topo-node ${s.connectivity==="offline"?"is-issue":""}" data-topo-jump="${b(s.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${b(s.name)}</strong><span class="pacom-badge ${s.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${s.connectivity==="online"?"在线":"离线"}</span></div>
                      <span class="pacom-row-sub">${b(V(s.logicalZoneId))} · ${b(s.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                    </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${$.filter(s=>s.category==="sensor"||s.category==="gateway").map(s=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${b(s.id)}">
                      <strong>${b(s.name)}</strong>
                      <span class="pacom-row-sub">${s.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${$.filter(s=>s.category==="lighting"||s.category==="hvac").map(s=>`
                    <button type="button" class="dep-topo-node ${s.connectivity==="offline"?"is-issue":""}" data-topo-jump="${b(s.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${b(s.name)}</strong><span class="pacom-badge ${s.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${s.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${b(V(s.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${q.map(s=>{const d=$.filter(T=>T.logicalZoneId===s.id),m=d.some(T=>T.connectivity==="offline");return`
                      <div class="dep-topo-node ${m?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${b(s.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${m?"pacom-badge--warning":"pacom-badge--online"}">${d.length} 台设备</span></div>
                        <span class="pacom-row-sub">${m?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function Wt(){const $=ye.reduce((te,K)=>te+K.collectedPoints,0),q=ye.reduce((te,K)=>te+K.calculatedPoints,0),W=ye.filter(te=>te.status==="connected").length,C=ye.filter(te=>te.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${W}<span class="pacom-kpi-unit">/ ${ye.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${ye.length?Math.round(W/ye.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${$}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${q}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${C.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${C.length} 条采集通道通信降级（${C.map(te=>te.name).join("、")}）</span>
                <span class="pacom-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
              </div>
            </div>`:""}

      ${Ne?`
          <form class="pacom-settings-card" data-create-conn="1">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">新增子系统接入通道</span>
                <span class="pacom-setting-desc">支持边缘网关、中央空调/线控网关、智能电表通讯机、空气质量与数字标牌（自动检测局域网端口冲突）</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-toggle-new-conn="1">${be("x",16)}</button>
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
                ${ye.map(te=>{const K=$a[te.status]??{label:te.status,cls:"pacom-badge--neutral"},l=te.status==="connected"?98:te.status==="degraded"?62:0,n=l>=75?"var(--pacom-status-online)":l>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",s=w===te.id,d=s?Ia(te,ce):[];return`
                      <tr>
                        <td><strong>${b(te.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${te.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${b(te.endpoint)}</code></td>
                        <td>采集 ${te.collectedPoints} / 计算 ${te.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${K.cls}">${K.label}</span>
                            <span class="pacom-row-sub">${l}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${l}%; background:${n};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${b(te.id)}">${s?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${b(te.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${b(te.id)}" data-endpoint-val="${b(te.endpoint)}">${u===te.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${s?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${b(te.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${d.map(m=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${b(m.deviceName)}</strong> · ${b(m.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${b(m.value)} · ${b(m.lastSeen)}</span>
                                        <span class="pacom-badge ${m.quality==="online"?"pacom-badge--online":m.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${m.quality==="online"?"在线正常":m.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function P(){const $=o.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Je({tree:I(),session:o,scope:z,isOpen:J,searchKeyword:R})}
            </div>
            <div class="pacom-header-meta">
              ${Pt($)}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${Rt()}
          ${i==="floorplan"?`<div class="pacom-unified-main--canvas">
                  ${we?`<div class="pacom-banner pacom-banner--ok" style="margin-bottom:8px; flex-shrink:0;"><span class="pacom-banner-title">${b(we)}</span></div>`:""}
                  ${he?`<div class="pacom-alert-banner" style="margin-bottom:8px; flex-shrink:0;">${b(he)}</div>`:""}
                  ${Ut($)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head">
                    <h2 class="pacom-unified-title">${at[i].title}</h2>
                    <p class="pacom-unified-subtitle">${at[i].subtitle}</p>
                  </div>
                  ${i==="project_config"?`<div class="pacom-tabs" style="align-self:flex-start;" role="tablist" aria-label="项目配置分段">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${r==="project_building"}" data-proj-sub-tab="project_building">项目与楼宇</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${r==="floor_zones"}" data-proj-sub-tab="floor_zones">楼层与图纸</button>
                        </div>`:""}
                  ${we?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${b(we)}</span></div>`:""}
                  ${he?`<div class="pacom-alert-banner">${b(he)}</div>`:""}
                  ${i==="overview"?Ot():i==="project_config"?r==="floor_zones"?Bt($):_t($):i==="ledger"?Vt($):i==="groups"?Zt():i==="network_topo"?Ht():Wt()}
                </div>
              </div>`}
        </div>
      </div>
      ${ge?`
          <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${b(ge.title)}">
            <div class="dep-lightbox-card">
              <div class="dep-lightbox-head">
                <strong style="font-size:14px; font-weight:500;">${b(ge.title)}</strong>
                <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${be("x",16)}</button>
              </div>
              <div class="dep-lightbox-body">
                <img src="${b(ge.imageUrl)}" alt="${b(ge.title)}" />
              </div>
            </div>
          </div>`:""}
    `,Gt()}function Gt(){et(e,{onToggle:()=>{J=!J,P(),J&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:l=>{R=l,P();const n=e.querySelector("[data-global-space-search]");n&&(n.focus(),n.setSelectionRange(l.length,l.length))},onPick:l=>{if(z=l,J=!1,l.level==="project"){U=l.projectId;const n=B.buildings.find(s=>s.projectId===l.projectId);n&&ie(n.id)}else l.level==="building"?ie(l.buildingId):l.level==="floor"&&Q(l.floorId);P()}}),e.querySelectorAll("[data-dep-nav]").forEach(l=>{l.addEventListener("click",()=>{i=l.dataset.depNav??"overview",l.dataset.projSub&&(r=l.dataset.projSub),we="",he="",P()})}),e.querySelectorAll("[data-proj-sub-tab]").forEach(l=>{l.addEventListener("click",()=>{r=l.dataset.projSubTab??"project_building",P()})}),e.querySelector("[data-ledger-search]")?.addEventListener("input",l=>{k=l.currentTarget.value,P();const n=e.querySelector("[data-ledger-search]");n&&(n.focus(),n.setSelectionRange(k.length,k.length))}),e.querySelector("[data-ledger-filter]")?.addEventListener("change",l=>{L=l.currentTarget.value??"all",P()}),e.querySelectorAll("[data-refresh-dep]").forEach(l=>{l.addEventListener("click",()=>{ue()})}),e.querySelectorAll("[data-matrix-nav]").forEach(l=>{l.addEventListener("click",()=>{const n=l.dataset.matrixFloor;n&&Q(n),i=l.dataset.matrixNav??"floorplan",l.dataset.projSub&&(r=l.dataset.projSub),P()})}),e.querySelectorAll("[data-pick-floor-pill]").forEach(l=>{l.addEventListener("click",()=>{const n=l.dataset.pickFloorPill;n&&(Q(n),P())})}),e.querySelectorAll("[data-scrubber-floor]").forEach(l=>{l.addEventListener("click",()=>{const n=l.dataset.scrubberFloor;n&&(Q(n),P())})}),e.querySelector("[data-switch-proj-select]")?.addEventListener("change",l=>{const n=l.currentTarget.value;if(!n)return;U=n;const s=B.buildings.find(d=>d.projectId===n);s?ie(s.id):(g="",h="",z=Xe({level:"project",projectId:n})),S=!1,E=!1,we="",he="",P()}),e.querySelectorAll("[data-toggle-new-proj]").forEach(l=>{l.addEventListener("click",()=>{D=!D,P()})}),e.querySelector("[data-go-create-proj]")?.addEventListener("click",()=>{r="project_building",D=!0,P()}),e.querySelector("[data-go-create-bld]")?.addEventListener("click",()=>{r="project_building",S=!0,P()}),e.querySelector("[data-create-project]")?.addEventListener("submit",async l=>{l.preventDefault();const n=new FormData(l.currentTarget),s=String(n.get("pName")??"").trim(),d=String(n.get("pCity")??"").trim(),m=String(n.get("pAddr")??"").trim(),T=String(n.get("pLng")??"").trim(),Ie=String(n.get("pLat")??"").trim();if(!s)return;let Ae;if(T||Ie){const Fe=Number(T),_=Number(Ie);if(!Number.isFinite(Fe)||!Number.isFinite(_)||Fe<-180||Fe>180||_<-90||_>90){he="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",P();return}Ae={lng:Fe,lat:_,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const Fe=await t.createProject?.({name:s,city:d,address:m,location:Ae});D=!1,Fe&&(U=Fe.id,g="",h="",z=Xe({level:"project",projectId:Fe.id})),we=`已创建项目「${s}」，下一步可添加园区楼宇。`,await ue()}catch(Fe){he=Fe instanceof Error?Fe.message:String(Fe),P()}}),e.querySelector("[data-delete-proj]")?.addEventListener("click",async l=>{const n=l.currentTarget.dataset.deleteProj,s=B.projects.find(d=>d.id===n);if(!(!n||!s)&&window.confirm(`确认删除项目「${s.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await t.deleteProject?.(n),we=`已删除项目「${s.name}」。`,await ue()}catch(d){he=d instanceof Error?d.message:String(d),P()}}),e.querySelector("[data-upload-proj]")?.addEventListener("change",async l=>{const n=l.currentTarget,s=n.dataset.uploadProj,d=n.files?.[0];if(!(!s||!d))try{const m=await it(d);await t.updateProject?.(s,{imageUrl:m}),we=`已更新项目封面图（${d.name}）。`,await ue()}catch(m){he=m instanceof Error?m.message:String(m),P()}}),e.querySelector("[data-save-project]")?.addEventListener("submit",async l=>{l.preventDefault();const n=l.currentTarget,s=n.dataset.saveProject??U,d=new FormData(n),m=String(d.get("pName")??"").trim(),T=String(d.get("pCity")??"").trim(),Ie=String(d.get("pAddr")??"").trim(),Ae=String(d.get("pLng")??"").trim(),Fe=String(d.get("pLat")??"").trim();let _;if(Ae||Fe){const je=Number(Ae),Me=Number(Fe);if(!Number.isFinite(je)||!Number.isFinite(Me)||je<-180||je>180||Me<-90||Me>90){he="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",P();return}_={lng:je,lat:Me,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await t.updateProject?.(s,{name:m,city:T,address:Ie,location:_}),we=`已保存项目「${m||"当前项目"}」信息。`,await ue()}catch(je){he=je instanceof Error?je.message:String(je),P()}}),e.querySelectorAll("[data-pick-building]").forEach(l=>{l.addEventListener("click",()=>{const n=l.dataset.pickBuilding;n&&(ie(n),we="",P())})}),e.querySelector("[data-switch-bld-select]")?.addEventListener("change",l=>{const n=l.currentTarget.value;n&&(ie(n),pe="all",p=!1,$e=[],P())}),e.querySelectorAll("[data-toggle-new-bld]").forEach(l=>{l.addEventListener("click",()=>{S=!S,P()})}),e.querySelector("[data-create-bld]")?.addEventListener("submit",async l=>{l.preventDefault();const n=l.currentTarget,s=n.dataset.createBld??U,d=new FormData(n),m=String(d.get("bName")??"").trim(),T=String(d.get("bArea")??"").trim(),Ie=Math.max(1,Number(d.get("bAbove")??12)),Ae=Math.max(0,Number(d.get("bBelow")??0)),Fe=!!d.get("bRoof"),_=!!d.get("bAutoFloors");if(m)try{const je=await t.upsertBuilding?.({projectId:s,name:m,aboveFloors:Ie,belowFloors:Ae,hasRoof:Fe,areaSqm:T?Number(T):null});S=!1;let Me=0;if(je&&(g=je.id,_)){for(let Re=1;Re<=Ie;Re+=1)await t.upsertFloor?.({buildingId:je.id,kind:"above",level:Re,name:`${Re}F`}),Me+=1;for(let Re=1;Re<=Ae;Re+=1)await t.upsertFloor?.({buildingId:je.id,kind:"below",level:-Re,name:`B${Re}`}),Me+=1;Fe&&(await t.upsertFloor?.({buildingId:je.id,kind:"roof",level:99,name:"RF"}),Me+=1)}we=_?`已创建楼宇「${m}」并自动生成 ${Me} 个楼层。`:`已创建楼宇「${m}」。`,await ue()}catch(je){he=je instanceof Error?je.message:String(je),P()}}),e.querySelector("[data-save-building]")?.addEventListener("submit",async l=>{l.preventDefault();const n=l.currentTarget,s=n.dataset.saveBuilding,d=B.buildings.find(je=>je.id===s);if(!d)return;const m=new FormData(n),T=String(m.get("bName")??"").trim()||d.name,Ie=String(m.get("bArea")??"").trim(),Ae=Math.max(1,Number(m.get("bAbove")??d.aboveFloors)),Fe=Math.max(0,Number(m.get("bBelow")??d.belowFloors)),_=!!m.get("bRoof");try{await t.upsertBuilding?.({id:s,projectId:d.projectId,name:T,aboveFloors:Ae,belowFloors:Fe,hasRoof:_,areaSqm:Ie?Number(Ie):null}),we=`已保存楼宇「${T}」参数。`,await ue()}catch(je){he=je instanceof Error?je.message:String(je),P()}}),e.querySelector("[data-delete-building]")?.addEventListener("click",async l=>{const n=l.currentTarget.dataset.deleteBuilding,s=B.buildings.find(d=>d.id===n);if(!(!n||!s)&&window.confirm(`确认删除楼宇「${s.name}」及其下全部楼层与功能区？`))try{await t.deleteBuilding?.(n),we=`已删除楼宇「${s.name}」。`,await ue()}catch(d){he=d instanceof Error?d.message:String(d),P()}}),e.querySelector("[data-upload-bld]")?.addEventListener("change",async l=>{const n=l.currentTarget,s=n.dataset.uploadBld,d=n.files?.[0],m=B.buildings.find(T=>T.id===s);if(!(!s||!d||!m))try{const T=await it(d);await t.upsertBuilding?.({id:m.id,projectId:m.projectId,name:m.name,aboveFloors:m.aboveFloors,belowFloors:m.belowFloors,hasRoof:m.hasRoof,areaSqm:m.areaSqm,imageUrl:T}),we=`已更新「${m.name}」外观图（${d.name}）。`,await ue()}catch(T){he=T instanceof Error?T.message:String(T),P()}}),e.querySelectorAll("[data-fill-missing-floors]").forEach(l=>{l.addEventListener("click",async()=>{const n=l.dataset.fillMissingFloors;if(n)try{const s=await Nt(n);we=s>0?`已自动补齐 ${s} 个楼层。`:"当前楼宇楼层已完整。",await ue()}catch(s){he=s instanceof Error?s.message:String(s),P()}})}),e.querySelectorAll("[data-floor-list-filter]").forEach(l=>{l.addEventListener("click",()=>{pe=l.dataset.floorListFilter??"all",P()})}),e.querySelectorAll("[data-toggle-new-floor]").forEach(l=>{l.addEventListener("click",()=>{E=!E,P()})}),e.querySelector("[data-toggle-batch-panel]")?.addEventListener("click",()=>{p=!p,P()}),e.querySelector("[data-create-floor]")?.addEventListener("submit",async l=>{l.preventDefault();const n=l.currentTarget,s=n.dataset.createFloor,d=new FormData(n),m=String(d.get("fName")??"").trim().toUpperCase(),T=String(d.get("fArea")??"").trim();if(!m)return;const Ie=Ge(m)??m;if(j(s).some(Me=>(Ge(Me.name)??Me.name.toUpperCase())===Ie)){he=`楼层「${m}」已存在，请使用其他名称。`,P();return}const Fe=lt(m),_=Fe>=999?"roof":Fe<0?"below":"above",je=Fe>=999?99:Fe||1;try{const Me=await t.upsertFloor?.({buildingId:s,kind:_,level:je,name:m,areaSqm:T?Number(T):null});E=!1,Me&&(h=Me.id),we=`已新增楼层「${m}」。`,await ue()}catch(Me){he=Me instanceof Error?Me.message:String(Me),P()}}),e.querySelector("[data-save-floor]")?.addEventListener("submit",async l=>{l.preventDefault();const n=l.currentTarget,s=n.dataset.saveFloor,d=G().find(Re=>Re.id===s);if(!d)return;const m=new FormData(n),T=String(m.get("fName")??"").trim()||d.name,Ie=String(m.get("fArea")??"").trim(),Ae=Ge(T)??T.toUpperCase();if(j(d.buildingId).some(Re=>Re.id!==d.id&&(Ge(Re.name)??Re.name.toUpperCase())===Ae)){he=`楼层「${T}」已存在，请避免重复命名。`,P();return}const _=lt(T),je=_>=999?"roof":_<0?"below":"above",Me=_>=999?99:_||d.level;try{await t.upsertFloor?.({id:d.id,buildingId:d.buildingId,kind:je,level:Me,name:T,areaSqm:Ie?Number(Ie):null}),we=`已保存楼层「${T}」。`,await ue()}catch(Re){he=Re instanceof Error?Re.message:String(Re),P()}}),e.querySelector("[data-delete-floor]")?.addEventListener("click",async l=>{const n=l.currentTarget.dataset.deleteFloor,s=G().find(d=>d.id===n);if(!(!n||!s)){if(y(n).length>0){he=`楼层「${s.name}」已关联设备，请先移除设备后再删除。`,P();return}if(window.confirm(`确认删除楼层「${s.name}」及其功能区？`))try{await t.deleteFloor?.(n),we=`已删除楼层「${s.name}」。`,await ue()}catch(d){he=d instanceof Error?d.message:String(d),P()}}});async function $(l,n){const s=G().find(d=>d.id===l);if(s)try{const d=await it(n);await t.upsertFloor?.({id:s.id,buildingId:s.buildingId,kind:s.kind,level:s.level,name:s.name,areaSqm:s.areaSqm,planImageUrl:d}),we=`已更新「${s.name}」平面底图（${n.name}）。`,await ue()}catch(d){he=d instanceof Error?d.message:String(d),P()}}e.querySelector("[data-upload-floor]")?.addEventListener("change",l=>{const n=l.currentTarget,s=n.dataset.uploadFloor,d=n.files?.[0];s&&d&&$(s,d)});const q=e.querySelector("[data-single-floor-drop]");q&&o.scope.canEditDeployment&&(q.addEventListener("dragover",l=>{l.preventDefault(),q.style.borderColor="var(--pacom-accent-solid)"}),q.addEventListener("dragleave",()=>{q.style.borderColor=""}),q.addEventListener("drop",l=>{l.preventDefault(),q.style.borderColor="";const n=q.dataset.singleFloorDrop,s=Array.from(l.dataTransfer?.files??[]).find(d=>d.type.startsWith("image/"));n&&s&&$(n,s)})),e.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async l=>{const n=l.currentTarget.dataset.clearFloorPlan,s=G().find(d=>d.id===n);if(!(!n||!s)&&window.confirm(`确认清空「${s.name}」的平面底图？`))try{await t.upsertFloor?.({id:s.id,buildingId:s.buildingId,kind:s.kind,level:s.level,name:s.name,areaSqm:s.areaSqm,planImageUrl:null}),we=`已清空「${s.name}」平面底图。`,await ue()}catch(d){he=d instanceof Error?d.message:String(d),P()}}),e.querySelector("[data-open-lightbox]")?.addEventListener("click",l=>{const n=l.currentTarget,s=n.dataset.lbTitle??"平面底图预览",d=n.dataset.lbSrc??"";d&&(ge={title:s,imageUrl:d},P())}),e.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{ge=null,P()}),e.querySelector("[data-lightbox-scrim]")?.addEventListener("click",l=>{l.target===l.currentTarget&&(ge=null,P())});function W(l,n){if(!l||n.length===0)return;const s=j(l),d=new Map;s.forEach(m=>{const T=Ge(m.name)??m.name.toUpperCase();d.set(T,m)}),$e=n.map((m,T)=>{const Ie=Ge(m.name),Ae=Ie?d.get(Ie):void 0;return{id:`bu-${Date.now().toString(36)}-${T}`,file:m,matchedFloorId:Ae?.id??null}}),p=!0,P()}e.querySelector("[data-batch-upload-floors]")?.addEventListener("change",l=>{const n=l.currentTarget,s=n.dataset.batchUploadFloors??"";W(s,Array.from(n.files??[]))});const C=e.querySelector("[data-batch-dropzone]");C&&o.scope.canEditDeployment&&(C.addEventListener("dragover",l=>{l.preventDefault(),M||(M=!0,C.style.borderColor="var(--pacom-accent-solid)",C.style.background="var(--pacom-accent-soft)")}),C.addEventListener("dragleave",()=>{M=!1,C.style.borderColor="",C.style.background=""}),C.addEventListener("drop",l=>{l.preventDefault(),M=!1;const n=C.dataset.batchDropzone??"",s=Array.from(l.dataTransfer?.files??[]).filter(d=>d.type.startsWith("image/"));W(n,s)})),e.querySelectorAll("[data-batch-override-floor]").forEach(l=>{l.addEventListener("change",()=>{const n=l.dataset.batchOverrideFloor,s=$e.find(d=>d.id===n);s&&(s.matchedFloorId=l.value||null,P())})}),e.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{$e=[],P()}),e.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const l=$e.filter(s=>s.matchedFloorId),n=$e.length-l.length;if(l.length!==0)try{for(const s of l){const d=G().find(T=>T.id===s.matchedFloorId);if(!d)continue;const m=await it(s.file);await t.upsertFloor?.({id:d.id,buildingId:d.buildingId,kind:d.kind,level:d.level,name:d.name,areaSqm:d.areaSqm,planImageUrl:m})}$e=[],p=!1,we=`已批量导入 ${l.length} 个楼层平面底图${n>0?`（跳过 ${n} 张未分配文件）`:""}。`,await ue()}catch(s){he=s instanceof Error?s.message:String(s),P()}}),e.querySelectorAll("[data-apply-zone-tpl]").forEach(l=>{l.addEventListener("click",async()=>{const n=l.dataset.applyZoneTpl,s=l.dataset.tplFloor,d=kt.find(T=>T.key===n),m=G().find(T=>T.id===s);if(!(!d||!m))try{for(const T of d.items){const Ie=await t.upsertZone?.({floorId:m.id,name:`${m.name} ${T.suffix}`,category:T.category});Ie&&(Se[Ie.id]={left:20,top:20,width:24,height:24})}we=`已按「${d.label}」模板为 ${m.name} 创建 ${d.items.length} 个功能区。`,await ue()}catch(T){he=T instanceof Error?T.message:String(T),P()}})}),e.querySelector("[data-attach-doc]")?.addEventListener("change",l=>{const n=l.currentTarget,s=n.dataset.attachDoc,d=n.files?.[0],m=G().find(Ie=>Ie.id===s);if(!s||!d||!m)return;const T=d.size>=1024*1024?`${(d.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(d.size/1024))} KB`;le.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:s,name:d.name,category:d.name.toLowerCase().endsWith(".xlsx")||d.name.toLowerCase().endsWith(".xls")?"点位台账":"竣工图纸",boundScope:`${m.name} · 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:T}),we=`已为 ${m.name} 关联文档「${d.name}」。`,P()}),e.querySelector("[data-add-zone]")?.addEventListener("submit",async l=>{l.preventDefault();const n=l.currentTarget.dataset.addZone,s=new FormData(l.currentTarget),d=String(s.get("zoneName")??"").trim(),m=String(s.get("zoneCat")??"office");if(d)try{const T=await t.upsertZone?.({floorId:n,name:d,category:m});T&&(Se[T.id]={left:20,top:20,width:24,height:24}),we=`已添加功能区「${d}」。`,await ue()}catch(T){he=T instanceof Error?T.message:String(T),P()}}),e.querySelectorAll("[data-edit-zone]").forEach(l=>{l.addEventListener("click",()=>{oe=l.dataset.editZone??null,P()})}),e.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{oe=null,P()}),e.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async l=>{l.preventDefault();const n=l.currentTarget,s=n.dataset.saveEditZone,d=n.dataset.zoneFloor,m=new FormData(n),T=String(m.get("zName")??"").trim(),Ie=String(m.get("zCat")??"office");if(T)try{await t.upsertZone?.({id:s,floorId:d,name:T,category:Ie}),oe=null,we=`已更新功能区「${T}」。`,await ue()}catch(Ae){he=Ae instanceof Error?Ae.message:String(Ae),P()}}),e.querySelectorAll("[data-del-zone]").forEach(l=>{l.addEventListener("click",async()=>{const n=l.dataset.delZone,s=f().find(d=>d.id===n);if(!(!n||!s)&&window.confirm(`确认删除功能区「${s.name}」？`))try{await t.deleteZone?.(n),oe===n&&(oe=null),we=`已删除功能区「${s.name}」。`,await ue()}catch(d){he=d instanceof Error?d.message:String(d),P()}})}),e.querySelectorAll("[data-toggle-copy-zones]").forEach(l=>{l.addEventListener("click",()=>{const n=l.dataset.toggleCopyZones??null;c===n?(c=null,x.clear()):(c=n,x=new Set(j(g).filter(s=>s.id!==n&&s.kind==="above"&&f().filter(d=>d.floorId===s.id).length===0).map(s=>s.id))),P()})}),e.querySelectorAll("[data-copy-preset]").forEach(l=>{l.addEventListener("click",()=>{const n=l.dataset.copyPreset,s=j(g).filter(d=>d.id!==c);n==="empty"?x=new Set(s.filter(d=>d.kind==="above"&&f().filter(m=>m.floorId===d.id).length===0).map(d=>d.id)):n==="above"?x=new Set(s.filter(d=>d.kind==="above").map(d=>d.id)):x.clear(),P()})}),e.querySelectorAll("[data-copy-target-floor]").forEach(l=>{l.addEventListener("change",()=>{const n=l.dataset.copyTargetFloor;n&&(l.checked?x.add(n):x.delete(n),P())})}),e.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async l=>{const n=l.currentTarget.dataset.confirmCopyZones,s=Array.from(x);if(!(!n||s.length===0))try{const d=await t.copyZonesToFloors?.(n,s)??0;c=null,x.clear(),we=`已将当前层功能区复用至 ${s.length} 个目标楼层（共新增 ${d} 个功能区）。`,await ue()}catch(d){he=d instanceof Error?d.message:String(d),P()}});const te=e.querySelector("[data-dep-canvas-search]");te?.addEventListener("focus",()=>{!A&&!ze&&(A=!0,P(),e.querySelector("[data-dep-canvas-search]")?.focus())}),te?.addEventListener("input",l=>{H=l.currentTarget.value,A=!0,ze=!1,P();const n=e.querySelector("[data-dep-canvas-search]");n&&(n.focus(),n.setSelectionRange(H.length,H.length))}),e.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{A=!A,A&&(ze=!1),P()}),e.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{A=!1,ze=!1,P()}),e.querySelector("[data-toggle-new-dev]")?.addEventListener("click",()=>{ze=!ze,ze&&(A=!1),P()}),e.querySelectorAll("[data-brush]").forEach(l=>{l.addEventListener("click",()=>{se=l.dataset.brush??"device",P()})}),e.querySelectorAll("[data-dep-zoom]").forEach(l=>{l.addEventListener("click",()=>{const n=l.dataset.depZoom;n==="in"?me=Math.min(2.6,Number((me+.2).toFixed(2))):n==="out"?me=Math.max(.6,Number((me-.2).toFixed(2))):(me=1,ae=0,de=0),xe()})});const K=e.querySelector('[data-role="dep-stage"]');if(K&&!Ce){let l=!1,n=0,s=0,d=0,m=0;K.addEventListener("pointerdown",Ie=>{Ie.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(l=!0,n=Ie.clientX,s=Ie.clientY,d=ae,m=de,K.classList.add("is-panning"),K.setPointerCapture?.(Ie.pointerId))}),K.addEventListener("pointermove",Ie=>{l&&(ae=d+(Ie.clientX-n),de=m+(Ie.clientY-s),xe())});const T=()=>{l&&(l=!1,K.classList.remove("is-panning"))};K.addEventListener("pointerup",T),K.addEventListener("pointercancel",T),K.addEventListener("wheel",Ie=>{Ie.preventDefault();const Ae=Ie.deltaY<0?.12:-.12;me=Math.max(.6,Math.min(2.6,Number((me+Ae).toFixed(2)))),xe()},{passive:!1}),K.addEventListener("dblclick",Ie=>{Ie.target?.closest("button")||(me=1,ae=0,de=0,xe())})}e.querySelectorAll("[data-dev-filter]").forEach(l=>{l.addEventListener("click",()=>{Y=l.dataset.devFilter??"all",P()})}),e.querySelector("[data-create-dev]")?.addEventListener("submit",l=>{l.preventDefault();const n=new FormData(l.currentTarget),s=String(n.get("devName")??"").trim(),d=String(n.get("devPreset")??"sensor"),m=String(n.get("devZone")??"")||null,T=bt.find(Ae=>Ae.key===d)??bt[0],Ie=`dev-custom-${Date.now().toString(36)}`;N.push({id:Ie,name:s,category:T.category,projectId:v.projectId,buildingId:g,floorId:h,logicalZoneId:m,planPoint:{floorId:h,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),De.set(Ie,{proxy:T.defaultProxy,relay:T.defaultRelay,meshUuid:`mesh-${h.slice(-4)}`}),T.category==="lighting"&&Ve.push({id:`lm-${Date.now().toString(36)}`,deviceId:Ie,channel:"回路 1",label:`${s.slice(0,6)}主灯`,x:.52,y:.45}),X=Ie,O=!0,ze=!1,re=!0,we=`已新增「${s}」（${T.hint}），已标注默认点位并标记待同步边缘。`,P()}),e.querySelectorAll("[data-pick-dev]").forEach(l=>{l.addEventListener("click",n=>{n.stopPropagation(),X=l.dataset.pickDev??null,O=!0,ke=y(h).find(d=>d.id===X)?.physicalInstalled??!1,P()})}),e.querySelector("[data-close-sel]")?.addEventListener("click",()=>{O=!1,Ce=!1,P()}),e.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{Ce=!Ce,P()}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{ke=!ke,P()}),e.querySelectorAll("[data-ping-dev]").forEach(l=>{l.addEventListener("click",()=>{const n=y(h).find(s=>s.id===l.dataset.pingDev);n&&(we=`已向「${n.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,P())})}),e.querySelector("[data-add-light-marker]")?.addEventListener("click",l=>{const n=l.currentTarget.dataset.addLightMarker,s=Ve.filter(d=>d.deviceId===n).length+1;Ve.push({id:`lm-${Date.now().toString(36)}`,deviceId:n,channel:`回路 ${s}`,label:`照明点位 ${s}`,x:Math.min(.86,.35+s*.1),y:.42}),se="light_marker",we=`已新增「回路 ${s}」可视化灯点。`,P()}),e.querySelectorAll("[data-del-light-marker]").forEach(l=>{l.addEventListener("click",()=>{const n=Ve.findIndex(s=>s.id===l.dataset.delLightMarker);n>=0&&Ve.splice(n,1),P()})}),e.querySelectorAll("[data-toggle-mesh-role]").forEach(l=>{l.addEventListener("click",()=>{const n=l.dataset.meshDev,s=l.dataset.toggleMeshRole,d=De.get(n)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};d[s]=!d[s],De.set(n,d),re=!0,we=`已更新节点 ${s.toUpperCase()} 状态，记得在「网络与拓扑」中同步下发至边缘网关。`,P()})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async l=>{const n=y(h).find(T=>T.id===X);if(!Ce||!n)return;const s=l.currentTarget.getBoundingClientRect(),d=Math.max(.02,Math.min(.98,(l.clientX-s.left)/s.width)),m=Math.max(.02,Math.min(.98,(l.clientY-s.top)/s.height));if(N.some(T=>T.id===n.id)){n.planPoint={floorId:h,planVersion:1,x:Number(d.toFixed(4)),y:Number(m.toFixed(4))},Ce=!1,we=`已更新「${n.name}」图上坐标。`,P();return}try{await t.updateDevicePlanPoint({deviceId:n.id,floorId:v.floorId,planVersion:n.planPoint?.planVersion??1,x:d,y:m,expectedVersion:n.version}),Ce=!1,we=`已更新「${n.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await ue()}catch(T){he=T instanceof Error?T.message:String(T),P()}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async l=>{l.preventDefault();const n=y(h).find(d=>d.id===X);if(!n)return;const s=new FormData(l.currentTarget);if(N.some(d=>d.id===n.id)){n.physicalInstalled=ke,n.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(s.get("protocol")),networkAddress:String(s.get("networkAddress")??""),portOrChannel:String(s.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:o.displayName},n.version+=1,re=!0,we=`已保存「${n.name}」的硬件绑定与物理复核状态。`,P();return}try{await t.updateDeviceHardwareBinding({deviceId:n.id,gatewayId:n.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(s.get("protocol")),networkAddress:String(s.get("networkAddress")??""),portOrChannel:String(s.get("portOrChannel")??""),physicalInstalled:ke,expectedVersion:n.version}),re=!0,we=`已保存「${n.name}」的硬件绑定与物理安装复核状态。`,await ue()}catch(d){he=d instanceof Error?d.message:String(d),P()}}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const l=y(h).find(n=>n.id===X);l&&ve(l)}),e.querySelectorAll("[data-ftt-dev]").forEach(l=>{l.addEventListener("click",()=>{const n=y(h).find(s=>s.id===l.dataset.fttDev);n&&ve(n)})}),e.querySelectorAll("[data-batch-ftt]").forEach(l=>{l.addEventListener("click",()=>Oe())}),e.querySelectorAll("[data-export-inv]").forEach(l=>{l.addEventListener("click",()=>Ye())}),e.querySelectorAll("[data-open-param]").forEach(l=>{l.addEventListener("click",()=>{F=l.dataset.openParam??null,P()})}),e.querySelector("[data-close-param]")?.addEventListener("click",()=>{F=null,P()}),e.querySelector("[data-save-dev-params]")?.addEventListener("submit",l=>{l.preventDefault();const n=l.currentTarget.dataset.saveDevParams,s=new FormData(l.currentTarget);Ke.set(n,{offDelayMin:Number(s.get("offDelayMin")??15),restoreMin:Number(s.get("restoreMin")??30),luxOn:Number(s.get("luxOn")??280),luxOff:Number(s.get("luxOff")??450)}),F=null,re=!0,we="设备自治延时与光感门限参数已下发并同步至配置基线。",P()}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{Ue=!Ue,P()}),e.querySelector("[data-create-group]")?.addEventListener("submit",l=>{l.preventDefault();const n=new FormData(l.currentTarget),s=String(n.get("gName")??"").trim(),d=n.get("gTrack")??"mesh_auto",m=String(n.get("gType")??"灯光联动组");s&&(Le.unshift({id:`grp-${Date.now().toString(36)}`,track:d,groupType:m,name:s,floorId:h,includesAdapter:d==="mesh_auto",deviceIds:d==="mesh_auto"?["dev-e7f-gw-01"]:[]}),Ue=!1,d==="mesh_auto"&&(re=!0),we=`已新建${d==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${s}」。`,P())}),e.querySelectorAll("[data-test-group]").forEach(l=>{l.addEventListener("click",()=>{const n=Le.find(s=>s.id===l.dataset.testGroup);n&&(we=`已向分组「${n.name}」发送群组试控指令，${n.deviceIds.length} 台成员回读正常。`,P())})}),e.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>Ze()),e.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{ne+=1,re=!1,we=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${ne}）。`,P()}),e.querySelectorAll("[data-topo-mode]").forEach(l=>{l.addEventListener("click",()=>{ee=l.dataset.topoMode??"mesh",P()})}),e.querySelectorAll("[data-topo-jump]").forEach(l=>{l.addEventListener("click",()=>{X=l.dataset.topoJump??null,O=!0,i="floorplan",P()})}),e.querySelector("[data-toggle-new-conn]")?.addEventListener("click",()=>{Ne=!Ne,P()}),e.querySelector("[data-create-conn]")?.addEventListener("submit",l=>{l.preventDefault();const n=new FormData(l.currentTarget),s=String(n.get("cName")??"").trim(),d=String(n.get("cProto")??"bacnet_ip"),m=String(n.get("cEndpoint")??"").trim();if(ye.some(T=>T.endpoint===m)){he=`端口冲突警告：局域网端点「${m}」已被其他通道占用，请更换端口后重试。`,P();return}ye.unshift({id:`conn-${Date.now().toString(36)}`,projectId:v.projectId,buildingId:g,floorId:h,name:s,protocol:d,endpoint:m,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),Ne=!1,he="",we=`已接入「${s}」（${m}），连通测试通过（18 ms）。`,P()}),e.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{we="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",P()}),e.querySelectorAll("[data-expand-conn]").forEach(l=>{l.addEventListener("click",()=>{const n=l.dataset.expandConn??null;w=w===n?null:n,P()})}),e.querySelectorAll("[data-ping-conn]").forEach(l=>{l.addEventListener("click",()=>{const n=ye.find(s=>s.id===l.dataset.pingConn);n&&(he="",n.status==="connected"?we=`连通测试通过：「${n.name}」（${n.endpoint}）响应正常，延迟 18 ms。`:he=`连通测试异常：「${n.name}」（${n.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,P())})}),e.querySelectorAll("[data-copy-endpoint]").forEach(l=>{l.addEventListener("click",async()=>{const n=l.dataset.endpointVal??"",s=l.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(n),u=s,P(),window.setTimeout(()=>{u=null,P()},1600)}catch{}})}),e.querySelectorAll("[data-preview-doc]").forEach(l=>{l.addEventListener("click",()=>{const n=[...It,...le].find(s=>s.id===l.dataset.previewDoc);n&&(we=`已调阅工程附件「${n.name}」（关联范围：${n.boundScope}，更新于 ${n.updatedAt}）。`,P())})}),e.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const l=await t.freezeDeliveryBatch(v.floorId,"部署总览验收发起交付冻结");we=`已生成交付冻结快照 ${l.versionTag}（核验 ${l.verifiedCount}/${l.deviceCount}）。`,await ue()}catch(l){he=l instanceof Error?l.message:String(l),P()}})}await ue()}function jt(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const t=e.name.includes("702")?"702 照明":"主照明",o=Number(e.telemetry.dimming?.value??0);return o>0?`${t} ${o}%`:`${t} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const Lt={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},Ea={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},ja=be("chevron-down",12),La={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function Z(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function At(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面"))return 999;const o=t.match(/(-?\d+)/);if(!o)return 0;const a=Number(o[1]);return t.startsWith("B")?-Math.abs(a):a}async function Aa(e,t,o){const a=await t.getSpatialTree();t.mode;const i=o.scope.canControlDevices,r=o.scope.canManageAlarms,k=o.scope.allowedZoneIds?.length?o.scope.allowedZoneIds:null,L=a.floors.filter(I=>o.scope.allowedFloorIds.includes(I.id)),z=k||a.projects.length<=1&&a.buildings.length<=1&&L.length<=1?"floors-only":a.projects.length>1?"multi-project":a.buildings.length>1?"single-project-multi-building":"single-building",J=z==="multi-project",R=z==="multi-project"||z==="single-project-multi-building",se=z!=="floors-only",Y=z==="floors-only"&&L.length<=1;let H=Qe(),A="devices",O=!1,ee=!1,me="",ae="",de="all",B="all";const ce=new URLSearchParams(window.location.hash.split("?")[1]??""),ye=ce.get("device"),fe=ce.get("zone");let Se=ye,N=!!ye,U="control",g="",h=!1,pe="today",D="devices";const S=new Set,E=new Set;let p=[],M=[],$e=[],ge=null,le=null,oe=1,c=0,x=0,X=null;function ke(){return a.zones.filter(I=>!(H.level==="floor"&&I.floorId!==H.floorId||k&&!k.includes(I.id)))}function Ce(I){return[...a.floors.filter(j=>j.buildingId!==I?!1:z==="floors-only"?o.scope.allowedFloorIds.includes(j.id):!0)].sort((j,f)=>At(f.name)-At(j.name))}async function ze(I,G=!1){let j=I;j.level==="all-projects"&&!J&&(j={level:"project",projectId:a.projects[0]?.id??v.projectId}),j.level==="project"&&!R&&(j={level:"building",projectId:j.projectId,buildingId:a.buildings[0]?.id??v.buildingId}),j.level==="building"&&!se&&(j={level:"floor",projectId:j.projectId,buildingId:j.buildingId,floorId:L[0]?.id??v.floorId}),H=j,Xe(j),le=null,B=G&&fe?fe:"all",h=!1,ee=!1,O=!1,E.clear(),oe=1,c=0,x=0,X&&(X(),X=null);const f=H.level==="floor"?H.floorId:v.floorId;if(H.level==="floor")try{const[y,V,ie]=await Promise.all([t.getFloorDevices(H.floorId),t.listAlarms(H.floorId),t.listWorkOrders(H.floorId)]);p=y,M=V,$e=ie,p.some(Q=>Q.id===Se)?G&&ye&&(N=!0):(Se=p[1]?.id??p[0]?.id??null,N=!1),X=t.subscribeFloorEvents(H.floorId,async Q=>{Q.type==="control.receipt.updated"&&ge?.batchId===Q.batchId&&(ge=await t.getControlBatch(Q.batchId)),(Q.type==="telemetry.updated"||Q.type==="device.connectivity")&&H.level==="floor"&&(p=await t.getFloorDevices(H.floorId)),Q.type==="alarm.changed"&&H.level==="floor"&&(M=await t.listAlarms(H.floorId)),u()})}catch(y){p=[],M=[],$e=[],Se=null,N=!1,le=y instanceof Error?y.message:String(y)}else{N=!1;const[y,V,ie]=await Promise.all([t.getFloorDevices(f).catch(()=>[]),t.listAlarms(f).catch(()=>[]),t.listWorkOrders(f).catch(()=>[])]);p=y,M=V,$e=ie}Le()}function Ne(I){return I?a.zones.find(G=>G.id===I)?.name??I:"未分配逻辑区"}function Ue(){const I=ae.trim().toLowerCase();return p.filter(G=>B!=="all"&&G.logicalZoneId!==B||de!=="all"&&G.category!==de?!1:I?G.name.toLowerCase().includes(I)||G.id.toLowerCase().includes(I)||Ne(G.logicalZoneId).toLowerCase().includes(I):!0)}async function F(I,G,j){!I.length||H.level!=="floor"||!i||(I.forEach(f=>S.add(f)),ge=await t.dispatchControlBatch({floorId:H.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:I.map(f=>({deviceId:f,command:G,targetValue:j}))}),u())}function u(){const I=document.activeElement,G=I?.dataset?.role,j=I&&"selectionStart"in I?I.selectionStart:null,f=I&&"selectionEnd"in I?I.selectionEnd:null,y=e.querySelector(".pacom-list")?.scrollTop??0;Le();const V=e.querySelector(".pacom-list");if(V&&(V.scrollTop=y),G==="search"||G==="space-search"){const ie=e.querySelector(`[data-role="${G}"]`);ie&&(ie.focus(),j!==null&&f!==null&&ie.setSelectionRange(j,f))}}function w(){const I=e.querySelector('[data-role="canvas-viewport"]');I&&(I.style.transform=`translate(${c}px, ${x}px) scale(${oe})`);const G=e.querySelector('[data-role="zoom-label"]');G&&(G.textContent=`${Math.round(oe*100)}%`)}function ne(I){if(I==="all")return{level:"all-projects"};const G=I.split(":");return G[0]==="project"&&G[1]?{level:"project",projectId:G[1]}:G[0]==="building"&&G[1]&&G[2]?{level:"building",projectId:G[1],buildingId:G[2]}:G[0]==="floor"&&G[1]&&G[2]&&G[3]?{level:"floor",projectId:G[1],buildingId:G[2],floorId:G[3]}:{level:"all-projects"}}function re(I){const G=H;if(G.level==="all-projects"){const j=ae.trim().toLowerCase(),f=a.projects.filter(y=>!j||y.name.toLowerCase().includes(j));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${f.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${be("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${f.map(y=>{const V=a.buildings.filter(ie=>ie.projectId===y.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${Z(y.id)}">
                  <div>
                    <div class="pacom-row-title">${Z(y.name)}</div>
                    <div class="pacom-row-sub">${Z(y.city??"")} · ${V} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(G.level==="project"){const j=ae.trim().toLowerCase(),f=a.buildings.filter(ie=>ie.projectId===G.projectId&&(!j||ie.name.toLowerCase().includes(j))),y=p.filter(ie=>ie.connectivity==="online").length,V=p.length?Math.round(y/p.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${f.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${be("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${f.map(ie=>{const Q=ie.id===v.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${Z(ie.projectId)}:${Z(ie.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${Q&&I>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${Z(ie.name)}</div>
                      <div class="pacom-row-sub">地上 ${ie.aboveFloors} 层 · ${ie.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${Q?"pacom-badge--accent":"pacom-badge--neutral"}">${Q?`在线 ${V}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(G.level==="building"){const j=ae.trim().toLowerCase(),f=Ce(G.buildingId).filter(V=>!j||V.name.toLowerCase().includes(j)),y=a.buildings.find(V=>V.id===G.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${Z(y?.name??"楼宇")} 楼层导览（${f.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${be("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${f.map(V=>{const ie=o.scope.allowedFloorIds.includes(V.id),Q=V.id===v.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${ie?"":"opacity:0.6;"}" data-nav-scope="floor:${Z(G.projectId)}:${Z(G.buildingId)}:${Z(V.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${Q&&I>0?"pacom-dot--warning":V.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${Z(y?.name??"")} ${Z(V.name)}</div>
                      <div class="pacom-row-sub">${V.plan?"2D 平面控图就绪":"暂未上传平面图"}${Q&&I>0?` · ${I} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${ie&&V.plan?"pacom-badge--online":"pacom-badge--neutral"}">${ie?V.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(A==="devices"){const j=Ue(),f=ke(),y=Array.from(E);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${k?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${k.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${de==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${de==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${de==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${de==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${de==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${j.length} 台${i&&y.length?` · 已选 ${y.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${be("x",14)}</button>
          </div>
          ${f.length>0&&!le?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${B==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${f.map(V=>`<button type="button" class="pacom-zone-pill ${B===V.id?"is-active":""}" data-filter-zone="${Z(V.id)}">${Z(V.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${le?`<div class="pacom-alert-banner">${Z(le)}</div>`:j.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':j.map(V=>{const ie=V.id===Se&&N,Q=E.has(V.id),ue=V.connectivity==="offline",xe=ue?"pacom-dot--critical":"pacom-dot--online",ve=ue?"离线":V.category==="lighting"?`${V.telemetry.dimming?.value??"--"}%`:V.category==="hvac"?`${V.telemetry.setpoint?.value??"--"}°C`:V.category==="sensor"?`${V.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${ie?"is-selected":""}" data-select-device="${Z(V.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${i?`<input type="checkbox" name="devCheck-${Z(V.id)}" data-check-device="${Z(V.id)}" ${Q?"checked":""} style="margin-top:3px;" aria-label="勾选 ${Z(V.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${Z(V.name)}</div>
                              <div class="pacom-row-sub">${Z(Ne(V.logicalZoneId).replace(/^7F\s*/,""))} · ${Z(Lt[V.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${ue?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${xe}"></span>${Z(ve)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${i&&y.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${y.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(A==="zones"){const j=ke(),f={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${j.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${be("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${j.map(y=>{const V=p.filter(ve=>ve.logicalZoneId===y.id),ie=V.filter(ve=>ve.connectivity==="online").length,Q=V.filter(ve=>ve.category==="lighting"||ve.category==="hvac").length,ue=B===y.id,xe=f[y.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${ue?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${ue?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${Z(ue?"all":y.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${Z(y.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${ie}/${V.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${xe.temp} · ${xe.occ}</div>
                  ${Q>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${Z(y.id)}" data-zone-val="true" ${i?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${Z(y.id)}" data-zone-val="false" ${i?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${M.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${be("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${M.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':M.map(j=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${Z(j.title)}</strong>
                      <span class="pacom-badge ${j.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${j.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${Z(j.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${Z(j.deviceId)}">定位设备</button>
                      ${j.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${Z(j.id)}" ${r?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function Ee(I){const G=H,j=ke().length,f=G.level==="floor"?"搜索设备或区域…":G.level==="building"?"搜索楼层…":G.level==="project"?"搜索楼宇…":"搜索园区…",y=G.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${O&&A==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${p.length}</button>
          <button type="button" class="pacom-hud-pill ${O&&A==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${j}</button>
          <button type="button" class="pacom-hud-pill ${I>0?"pacom-hud-pill--alert":""} ${O&&A==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${I}</button>
        `:G.level==="building"?`
            <button type="button" class="pacom-hud-pill ${O?"is-active":""}" data-toggle-hud="1">楼层 ${Ce(G.buildingId).length}</button>
            ${I>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${I}</button>`:""}
          `:G.level==="project"?`
              <button type="button" class="pacom-hud-pill ${O?"is-active":""}" data-toggle-hud="1">楼宇 ${a.buildings.filter(V=>V.projectId===G.projectId).length}</button>
              ${I>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${I}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${O?"is-active":""}" data-toggle-hud="1">园区 ${a.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${be("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${f}" value="${Z(ae)}" aria-label="${f}" />
          ${y}
        </div>
        ${O?`<div class="pacom-hud-sheet" data-role="hud-sheet">${re(I)}</div>`:""}
      </div>
    `}function qe(I){if(Y||H.level!=="building"&&H.level!=="floor")return"";const G=H.buildingId,j=H.projectId,f=Ce(G);return!se&&f.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${se?`<button type="button" class="pacom-elev-item ${H.level==="building"?"is-active":""}" data-nav-scope="building:${Z(j)}:${Z(G)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${f.map(y=>{const V=o.scope.allowedFloorIds.includes(y.id),ie=H.level==="floor"&&H.floorId===y.id,Q=y.id===v.floorId&&I>0;return`
              <button type="button" class="pacom-elev-item ${ie?"is-active":""} ${V?"":"is-locked"}"
                data-nav-scope="floor:${Z(j)}:${Z(G)}:${Z(y.id)}"
                title="${Z(y.name)}${V?Q?` · ${I} 条告警`:"":"（无权限）"}">
                ${Q?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${Z(y.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function we(I,G){const j=H;if(j.level==="floor")return le?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${D==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${D==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${D==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${be("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(oe*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${be("plus",14)}</button>
        </div>
      `;const f=p.length?Math.round(I/p.length*100):100,y=j.level==="building"?"418 kWh":"1,248 kWh",V=Math.round(96.2*.45+93.6*.35+f*.2),ie=j.level==="building"?Ce(j.buildingId).find(Q=>Q.id===v.floorId)??Ce(j.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${V}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="environment">
          <span>舒适度 <strong>96.2%</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="energy">
          <span>今日能耗 <strong>${y}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${G>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${G}</strong></span>
        </button>
        ${j.level==="building"&&ie?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${Z(j.projectId)}:${Z(j.buildingId)}:${Z(ie.id)}">进入 ${Z(ie.name)} 平面图 →</button>`:""}
      </div>
    `}function he(I,G){const j=H,f=p.length?Math.round(I/p.length*100):100;if(j.level==="all-projects")return`
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
            ${a.projects.map((Q,ue)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${ue===0?50:28}%; top:${ue===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${Z(Q.id)}">
                  <span class="pacom-dot ${G>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${Z(Q.name)} · 在线 ${f}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(j.level==="project"){const Q=a.projects.find(xe=>xe.id===j.projectId)??a.projects[0],ue=a.buildings.filter(xe=>!Q||xe.projectId===Q.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${Z(Q?.imageUrl??"./media/gzlab.jpg")}" alt="${Z(Q?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${ue.map((xe,ve)=>{const Oe=xe.id===v.buildingId;return`
                  <button type="button" class="pacom-pin ${Oe?"is-selected":""}" style="left:${ve===0?56:38}%; top:${ve===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${Z(xe.projectId)}:${Z(xe.id)}">
                    <span class="pacom-dot ${Oe&&G>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${Z(xe.name)} · ${Oe?`在线 ${f}% · 告警 ${G}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(j.level==="building"){const Q=a.buildings.find(xe=>xe.id===j.buildingId),ue=Ce(j.buildingId).find(xe=>xe.id===v.floorId)??Ce(j.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${Z(Q?.imageUrl??"./media/building-e.webp")}" alt="${Z(Q?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${ue?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${Z(j.projectId)}:${Z(j.buildingId)}:${Z(ue.id)}">
                    <span class="pacom-dot ${G>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${Z(Q?.name??"")} ${Z(ue.name)} · 在线 ${I}/${p.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const y=a.floors.find(Q=>Q.id===j.floorId),V=a.buildings.find(Q=>Q.id===j.buildingId),ie=ke();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${le?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${Z(le)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${c}px, ${x}px) scale(${oe});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${Z(y?.plan?.imageUrl??"./media/floors/e/07F.webp")}" alt="${Z(V?.name??"楼宇")} ${Z(y?.name??"7F")} 平面图" />
                  ${ie.map((Q,ue)=>{const xe=La[Q.id];if(!xe)return"";const ve=B===Q.id,Oe=["23.2°C","24.6°C","22.8°C","23.9°C"],Ze=["有人 74%","会议中","有人 52%","空闲"],Ye=D==="temp"?` · ${Oe[ue%Oe.length]}`:D==="occupancy"?` · ${Ze[ue%Ze.length]}`:"",at=D==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":D==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${ve?"is-active":""}"
                          style="left:${xe.left}%; top:${xe.top}%; width:${xe.width}%; height:${xe.height}%; ${ve?"":at}"
                          data-filter-zone="${Z(ve?"all":Q.id)}"
                          title="${Z(Q.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${Z(Q.name.replace(/^7F\s*/,""))}${Ye}</span>
                        </button>`}).join("")}
                  ${p.filter(Q=>Q.planPoint).map(Q=>{const ue=M.some(Ye=>Ye.deviceId===Q.id&&Ye.status==="active"),xe=O&&A==="alarms",ve=B!=="all"&&Q.logicalZoneId!==B||xe&&!ue,Oe=xe&&ue?"background:var(--pacom-status-critical);":"",Ze=Q.category==="gateway"?Math.min(92,Q.planPoint.y*100+5.5):Q.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${Q.id===Se&&N?"is-selected":""} ${Q.connectivity==="offline"?"pacom-pin--offline":""} ${ve?"pacom-pin--dimmed":""}"
                          style="left:${(Q.planPoint.x*100).toFixed(2)}%; top:${Ze.toFixed(2)}%; ${Oe}"
                          data-pin-device="${Z(Q.id)}" title="${Z(Q.name)}">
                          <span class="pacom-dot ${ue?"pacom-dot--critical":Q.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${Z(jt(Q))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function De(){if(H.level!=="floor"||!N)return"";const I=p.find(ve=>ve.id===Se);if(!I)return"";const G=I.category==="lighting",j=I.category==="hvac",f=Number(I.telemetry.dimming?.value??50),y=Number(I.telemetry.setpoint?.value??24),V=S.has(I.id),ie=M.filter(ve=>ve.deviceId===I.id&&ve.status==="active"),Q=$e.filter(ve=>ve.deviceId===I.id&&ve.status!=="closed"),ue=j?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:G?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],xe=G?[{label:"当前开关",value:f>0?"开启":"关闭"},{label:"当前亮度",value:`${f}%`},{label:"实时功率",value:f>0?`${Math.round(f*1.4)} W`:"0 W"},{label:"运行模式",value:V?"人工覆盖":"自动策略"}]:j?[{label:"室内温度",value:`${I.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${y.toFixed(1)}°C`},{label:"运行工况",value:I.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:V?"人工覆盖":"自动策略"}]:I.category==="sensor"?[{label:"实时温度",value:`${I.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${I.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${I.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:I.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:I.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:I.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:I.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:I.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${Z(I.name)}</h2>
            <div class="pacom-row-sub">${Z(Ne(I.logicalZoneId))} · ${Z(Lt[I.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${I.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${I.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${be("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${U==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${U==="trend"}" data-drawer-tab="trend">趋势与告警${ie.length>0?` (${ie.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${U==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${U==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${xe.map(ve=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${ve.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${Z(ve.value)}</strong>
                  </div>`).join("")}
            </div>

            ${j?`
                <div class="pacom-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${I.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${Z(I.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${I.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${I.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${I.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${I.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${y.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${G||j?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${V&&i?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${Z(I.id)}">恢复自动策略</button>`:i?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${I.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${G?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${i?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${i?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${f}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${f}" data-ctrl-slider="lighting.dimming" ${i?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${i?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${i?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${y-.5}" ${i?"":"disabled"}>-0.5°C</button>
                        <strong>${y.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${y+.5}" ${i?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${ge?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${Z(ge.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${ge.receipts.map(ve=>{const Oe=Ea[ve.status]??{text:ve.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${Z(ve.deviceId)}</strong> · ${Z(ve.command)} → ${Z(ve.targetValue)}</div>
                              ${ve.errorMessage?`<div style="color:var(--pacom-status-critical);">${Z(ve.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${Oe.badge}">${Oe.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:U==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${G?"亮度 %":j?"温度 °C":I.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${Z(I.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${I.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${G?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":j?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${ie.length===0&&Q.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${ie.map(ve=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${Z(ve.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${Z(ve.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${Q.map(ve=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${Z(ve.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${Z(ve.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${Z(jt(I))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${Z(Ne(I.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${g?`<div class="pacom-info-banner">${Z(g)}</div>`:""}
                ${ue.map(ve=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${Z(ve.name)}">${Z(ve.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${Z(ve.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="pacom-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${be("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${Z(I.id)}</code> · v${I.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${I.planPoint?`x=${I.planPoint.x.toFixed(2)}, y=${I.planPoint.y.toFixed(2)} (图 v${I.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${I.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${I.hardwareBinding?`${I.hardwareBinding.protocol.toUpperCase()} · ${I.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function Ve(I,G,j){if(!h)return"";const f=Math.max(0,p.length-I),y=pe==="week",V=M.filter(ie=>ie.status==="active").slice(0,2);return`
      <div class="pacom-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${y?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!y}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${y}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${be("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${y?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${y?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${Z(j)}°C · ${I}/${p.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${G} 告警 · ${f} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,S.size)} 覆盖 · ${$e.filter(ie=>ie.status!=="closed").length} 工单</strong></div>
        </div>
        ${V.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${V.map(ie=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${Z(ie.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${Z(ie.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function Le(){const I=M.filter(f=>f.status==="active").length,G=p.filter(f=>f.connectivity==="online").length,j=p.find(f=>f.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${Je({tree:a,session:o,scope:H,activeAlarmCount:I,isOpen:ee,searchKeyword:me})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${le?'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${h}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${G}/${p.length} 在线 · ${Z(j)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${ja}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${Ve(G,I,j)}

        <main class="pacom-spatial-stage">
          ${Ee(I)}
          ${he(G,I)}
          ${qe(I)}
          ${we(G,I)}
          ${De()}
        </main>
      </div>
    `,Ke()}function Ke(){et(e,{onToggle:()=>{ee=!ee,ee&&(h=!1,O=!1),Le(),ee&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:f=>{me=f,Le();const y=e.querySelector("[data-global-space-search]");y&&(y.focus(),y.setSelectionRange(f.length,f.length))},onPick:f=>{ee=!1,ze(f)}}),e.querySelectorAll("[data-nav-scope]").forEach(f=>{f.addEventListener("click",y=>{y.stopPropagation(),f.dataset.navScope&&ze(ne(f.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(f=>{f.addEventListener("click",y=>{y.stopPropagation();const V=f.dataset.hudTab;O&&A===V?O=!1:(A=V,O=!0,ee=!1,h=!1),Le()})}),e.querySelectorAll("[data-toggle-hud]").forEach(f=>{f.addEventListener("click",y=>{y.stopPropagation(),O=!O,O&&(ee=!1,h=!1),Le()})}),e.querySelectorAll("[data-close-hud]").forEach(f=>{f.addEventListener("click",y=>{y.stopPropagation(),O=!1,Le()})});const I=e.querySelector('[data-role="search"]');I?.addEventListener("focus",()=>{O||(O=!0,ee=!1,h=!1,u())}),I?.addEventListener("input",f=>{ae=f.currentTarget.value,O=!0,u()}),e.querySelector('[data-role="category"]')?.addEventListener("change",f=>{de=f.currentTarget.value,Le()}),e.querySelectorAll("[data-filter-zone]").forEach(f=>{f.addEventListener("click",y=>{y.stopPropagation(),B=f.dataset.filterZone??"all",Le()})}),e.querySelectorAll("[data-select-device]").forEach(f=>{f.addEventListener("click",y=>{y.target.tagName!=="INPUT"&&(Se=f.dataset.selectDevice??null,N=!0,Le())})}),e.querySelectorAll("[data-check-device]").forEach(f=>{f.addEventListener("change",()=>{const y=f.dataset.checkDevice;y&&(f.checked?E.add(y):E.delete(y),Le())})}),e.querySelectorAll("[data-pin-device]").forEach(f=>{f.addEventListener("click",y=>{y.stopPropagation(),Se=f.dataset.pinDevice??null,N=!0,ee=!1,h=!1,Le()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{N=!1,Le()}),e.querySelectorAll("[data-drawer-tab]").forEach(f=>{f.addEventListener("click",()=>{U=f.dataset.drawerTab??"control",g="",Le()})}),e.querySelectorAll("[data-drawer-doc]").forEach(f=>{f.addEventListener("click",()=>{g=`已调阅「${f.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,Le()})}),e.querySelectorAll("[data-briefing-period]").forEach(f=>{f.addEventListener("click",()=>{pe=f.dataset.briefingPeriod??"today",Le()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(f=>{f.addEventListener("click",()=>{const y=f.dataset.goAlarmId??"";window.location.hash=y?`#alarms?alarm=${encodeURIComponent(y)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(f=>{f.addEventListener("click",()=>{const y=f.dataset.goWoId??"";window.location.hash=y?`#alarms?wo=${encodeURIComponent(y)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",f=>{const y=f.currentTarget.dataset.releaseOverride;y&&(S.delete(y),Le())}),e.querySelectorAll("[data-zone-power]").forEach(f=>{f.addEventListener("click",y=>{y.stopPropagation();const V=f.dataset.zonePower,ie=f.dataset.zoneVal==="true";if(!V)return;const Q=p.filter(xe=>xe.logicalZoneId===V&&xe.category==="lighting").map(xe=>xe.id),ue=p.filter(xe=>xe.logicalZoneId===V&&xe.category==="hvac").map(xe=>xe.id);Q.length?F(Q,"lighting.power",ie):ue.length&&F(ue,"hvac.power",ie)})}),e.querySelectorAll("[data-locate-device]").forEach(f=>{f.addEventListener("click",()=>{const y=f.dataset.locateDevice;y&&(Se=y,N=!0,O=!1,Le())})}),e.querySelectorAll("[data-go-alarms]").forEach(f=>{f.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(f=>{f.addEventListener("click",()=>{const y=f.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(y)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(f=>{f.addEventListener("click",()=>{const y=f.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(y)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(f=>{f.addEventListener("click",y=>{y.stopPropagation(),h=!h,h&&(ee=!1,O=!1),Le()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const f=p.filter(xe=>xe.connectivity==="online").length,y=M.filter(xe=>xe.status==="active").length,V=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${f}/${p.length}（离线 ${p.length-f} 台）`,`待处理告警：${y} 条`,`人工覆盖中：${S.size} 台`].join(`
`),ie=new Blob([V],{type:"text/plain;charset=utf-8;"}),Q=URL.createObjectURL(ie),ue=document.createElement("a");ue.href=Q,ue.download="pacom-daily-briefing.txt",ue.click(),URL.revokeObjectURL(Q)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(f=>{f.addEventListener("click",()=>{if(!Se||!f.dataset.ctrlCmd)return;const y=f.dataset.ctrlVal??"",V=y==="true"?!0:y==="false"?!1:Number(y);F([Se],f.dataset.ctrlCmd,V)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",f=>{const y=f.currentTarget;!Se||!y.dataset.ctrlSlider||F([Se],y.dataset.ctrlSlider,Number(y.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(f=>{f.addEventListener("click",()=>{const y=Array.from(E),V=f.dataset.batchVal??"",ie=V==="true"?!0:V==="false"?!1:V;F(y,f.dataset.batchCmd,ie)})}),e.querySelectorAll("[data-ack-alarm]").forEach(f=>{f.addEventListener("click",async()=>{!f.dataset.ackAlarm||H.level!=="floor"||!r||(await t.acknowledgeAlarm(f.dataset.ackAlarm,"首页快速确认"),M=await t.listAlarms(H.floorId),Le())})}),e.querySelectorAll("[data-canvas-layer]").forEach(f=>{f.addEventListener("click",()=>{const y=f.dataset.canvasLayer;y&&(D=y,Le())})}),e.querySelectorAll("[data-zoom]").forEach(f=>{f.addEventListener("click",()=>{const y=f.dataset.zoom;y==="in"?oe=Math.min(2.6,Number((oe+.2).toFixed(2))):y==="out"?oe=Math.max(.6,Number((oe-.2).toFixed(2))):(oe=1,c=0,x=0),w()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",f=>{f.preventDefault();const y=H;if(y.level!=="building"&&y.level!=="floor")return;const V=Ce(y.buildingId),ie=[...se?[{level:"building",projectId:y.projectId,buildingId:y.buildingId}]:[],...V.map(xe=>({level:"floor",projectId:y.projectId,buildingId:y.buildingId,floorId:xe.id}))],Q=ie.findIndex(xe=>xe.level==="building"?y.level==="building":xe.level==="floor"&&y.level==="floor"&&xe.floorId===y.floorId);if(Q<0)return;const ue=Math.max(0,Math.min(ie.length-1,Q+(f.deltaY>0?1:-1)));ue!==Q&&ie[ue]&&ze(ie[ue])},{passive:!1});const j=e.querySelector('[data-role="canvas-stage"]');if(j&&!le){let f=!1,y=!1,V=0,ie=0,Q=0,ue=0;j.addEventListener("pointerdown",ve=>{ve.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(f=!0,y=!1,V=ve.clientX,ie=ve.clientY,Q=c,ue=x,j.classList.add("is-panning"),j.setPointerCapture?.(ve.pointerId))}),j.addEventListener("pointermove",ve=>{if(!f)return;const Oe=ve.clientX-V,Ze=ve.clientY-ie;(Math.abs(Oe)>3||Math.abs(Ze)>3)&&(y=!0),c=Q+Oe,x=ue+Ze,w()});const xe=()=>{f&&(f=!1,j.classList.remove("is-panning"),!y&&(O||ee||h)&&(O=!1,ee=!1,h=!1,Le()))};j.addEventListener("pointerup",xe),j.addEventListener("pointercancel",xe),j.addEventListener("wheel",ve=>{ve.preventDefault();const Oe=ve.deltaY<0?.12:-.12;oe=Math.max(.6,Math.min(2.6,Number((oe+Oe).toFixed(2)))),w()},{passive:!1}),j.addEventListener("dblclick",ve=>{ve.target?.closest("button")||(oe=1,c=0,x=0,w())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",f=>{f.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .pacom-briefing-pop")||(O||ee||h)&&(O=!1,ee=!1,h=!1,Le())})}e.addEventListener("keydown",I=>{I.key==="Escape"&&(ee||h||O||N)&&(ee=!1,h=!1,O=!1,N=!1,Le())}),await ze(H,!0)}const Fa=new Set(["lighting","hvac","alarm_rules"]),Ft={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},ct=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function Ca(e){const t=new Set;for(const o of e.actions)o.command.startsWith("lighting")?t.add("照明"):o.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function qa(e,t,o){const a=o?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function za(e,t,o){let a=Qe(),i=!1,r="",[k,L,z,J]=await Promise.all([t.getSpatialTree(),t.listScenes(v.floorId),t.getRuntimeSettings(v.projectId),t.getFloorDevices(v.floorId).catch(()=>[])]),R="manual",se="balanced",Y="all",H=null,A="",O=!1,ee=!1,me=!1,ae="all",de=null,B="",ce="",ye=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const fe=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],Se=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],N=[{deviceId:J[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],U=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${z.calendar.workdayStart} – ${z.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${z.calendar.nightGuardStart} – 次日 ${z.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],g=t.subscribeFloorEvents(v.floorId,async pe=>{pe.type==="control.receipt.updated"&&H?.batchId===pe.batchId&&(H=await t.getControlBatch(pe.batchId),h())});function h(){const pe=A.trim().toLowerCase(),D=pe?L.filter(c=>`${c.name} ${c.description}`.toLowerCase().includes(pe)):L,S=z.rules.filter(c=>Fa.has(c.category)),E=Y==="all"?S:Y==="cbm"?[]:S.filter(c=>c.category===Y),p=Y==="all"||Y==="cbm",M=ae==="issues"?fe.filter(c=>c.status!=="verified"):fe,$e=ct.find(c=>c.id===se)??ct[1],ge=o.scope.canControlDevices,le=o.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Je({tree:k,session:o,scope:a,isOpen:i,searchKeyword:r})}
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${ye.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${ye.length>0?`人工覆盖中：${ye.length} 台 ${be("chevron-down",12)}`:`全部自动托管 ${be("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${me?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${fe.length}）</button>
              ${R==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${O?"收起表单":"+ 新建场景"}</button>`:R==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${R==="manual"}" data-scene-tab="manual">快捷场景（${L.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${R==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${R==="rules"}" data-scene-tab="rules">条件联动（${S.length+Se.length}）</button>
          </nav>
        </header>

        ${ee?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${ye.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${be("x",16)}</button>
              </div>
              ${ye.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':ye.map(c=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${c.name}</div>
                            <div class="pacom-row-sub">${c.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${c.id}" ${ge?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${ye.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${ge?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${me?`
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
                  <button class="pacom-tab" aria-selected="${ae==="all"}" data-log-filter="all">全部（${fe.length}）</button>
                  <button class="pacom-tab" aria-selected="${ae==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${M.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${M.map(c=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${c.device}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${c.source}</span>
                        </div>
                        <span class="pacom-row-sub">${c.action} · ${c.at}</span>
                      </div>
                      <span class="pacom-badge ${c.status==="verified"?"pacom-badge--online":c.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${c.status==="verified"?"回读确认":c.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${B?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${B}</span></div>`:""}
          ${ce?`<div class="pacom-alert-banner">${ce}</div>`:""}

          ${R==="manual"?`
              ${H?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${H.batchId}</span>
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
                            ${H.receipts.map(c=>`
                                <tr>
                                  <td><code style="font-size:12px;">${c.deviceId}</code></td>
                                  <td>${c.command}</td>
                                  <td>${String(c.targetValue)}${c.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${c.errorMessage}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${c.status==="verified_success"?"pacom-badge--online":c.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${c.status}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${O?`
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
                          <span class="pacom-setting-title">联动动作列表（${N.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${N.map((c,x)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${x}" aria-label="目标设备">
                                ${J.map(X=>`<option value="${X.id}" ${X.id===c.deviceId?"selected":""}>${X.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${x}" aria-label="执行指令">
                                <option value="lighting.dimming" ${c.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${c.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${c.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${x}" value="${c.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${x}" ${N.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${A}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${D.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${D.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':D.map(c=>{const x=Ca(c),X=c.actions.slice(0,3).map(ke=>{const Ce=J.find(Ne=>Ne.id===ke.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??ke.deviceId,ze=ke.command==="lighting.dimming"?`亮度 ${ke.targetValue}%`:ke.command==="hvac.setpoint"?`设温 ${ke.targetValue}°C`:ke.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${Ce} → ${ze}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${c.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${x.map(ke=>`<span class="pacom-badge pacom-badge--accent">${ke}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${c.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${c.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${X}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${c.lastExecutedAt?c.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${c.id}" ${ge?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:R==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${$e.title}</div>
                    <span class="pacom-kpi-delta">${$e.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${$e.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${$e.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${ye.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${ct.map(c=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${se===c.id}" data-oss-mode="${c.id}" ${ge?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${c.title}</strong>
                          <span class="pacom-badge ${se===c.id?"pacom-badge--online":"pacom-badge--neutral"}">${se===c.id?"当前生效":c.badge}</span>
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
                          ${U.map(c=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${c.name}</span>
                                    ${c.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${c.windowLabel}</div>
                                </td>
                                <td>${qa(c.startHour,c.endHour,c.enabled)}</td>
                                <td><span class="pacom-row-sub">${c.scope}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${c.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${c.enabled}"
                                      aria-label="切换排程 ${c.name}"
                                      data-toggle-schedule="${c.id}"
                                      ${ge?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(c=>{const x=c==="all"?"全部":Ft[c]??c,X=c==="all"?S.length+Se.length:c==="cbm"?Se.length:S.filter(ke=>ke.category===c).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${Y===c}" data-rule-cat="${c}">
                              <span>${x}</span><span class="pacom-count-num">${X}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${E.map(c=>{const x=de===c.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${Ft[c.category]??c.category}</span>
                                  <span>${c.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${c.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${c.summary} · 范围：${c.scopeLabel} · 回执：${c.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${c.id}">${x?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${c.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${c.enabled?"true":"false"}"
                                  aria-label="切换 ${c.name}"
                                  data-toggle-strategy-rule="${c.id}"
                                  data-rule-ver="${c.version}"
                                  data-rule-next="${!c.enabled}"
                                  ${le?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${x?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${c.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":c.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${c.scopeLabel} · 当前版本：v${c.version} · 最近同步：${c.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${p?Se.map(c=>{const x=Math.min(100,Math.round(c.runtimeHours/c.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${c.name}</span>
                                      <span class="pacom-badge ${x>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${c.runtimeHours} / ${c.thresholdHours} h（${x}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${x}%; background:${x>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${c.equipment} · 上次重置：${c.lastReset}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${c.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${c.enabled}" data-toggle-cbm="${c.id}" aria-label="切换 ${c.name}" ${le?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,et(e,{onToggle:()=>{i=!i,h(),i&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:c=>{r=c,h();const x=e.querySelector("[data-global-space-search]");x&&(x.focus(),x.setSelectionRange(c.length,c.length))},onPick:c=>{a=c,i=!1,h()}}),e.querySelectorAll("[data-scene-tab]").forEach(c=>{c.addEventListener("click",()=>{R=c.dataset.sceneTab??"manual",B="",h()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(c=>{c.addEventListener("click",()=>{ee=!ee,h()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{ye=[],B="已释放全部人工覆盖设备，自动节能策略已恢复托管。",h()}),e.querySelectorAll("[data-release-one]").forEach(c=>{c.addEventListener("click",()=>{const x=c.dataset.releaseOne;ye=ye.filter(X=>X.id!==x),B="已恢复该设备的自动策略托管。",h()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(c=>{c.addEventListener("click",()=>{me=!me,h()})}),e.querySelectorAll("[data-log-filter]").forEach(c=>{c.addEventListener("click",()=>{ae=c.dataset.logFilter??"all",h()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{H=null,h()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(c=>{c.addEventListener("click",()=>{const x=c.dataset.ossMode;if(!x)return;se=x;const X=ct.find(ke=>ke.id===x);B=`已切换至「${X?.title??x}」模式（明日预测启动 ${X?.predictedStart??""}）。`,h()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(c=>{c.addEventListener("click",()=>{const x=c.dataset.toggleSchedule,X=U.find(ke=>ke.id===x);X&&(X.enabled=!X.enabled,B=`排程「${X.name}」已${X.enabled?"恢复启用":"临时暂停"}。`,h())})}),e.querySelectorAll("[data-rule-cat]").forEach(c=>{c.addEventListener("click",()=>{Y=c.dataset.ruleCat??"all",h()})}),e.querySelectorAll("[data-expand-rule]").forEach(c=>{c.addEventListener("click",()=>{const x=c.dataset.expandRule??null;de=de===x?null:x,h()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(c=>{c.addEventListener("click",()=>{const x=Se.find(X=>X.id===c.dataset.toggleCbm);x&&(x.enabled=!x.enabled,B=`工时维保规则「${x.name}」已${x.enabled?"启用":"停用"}。`,h())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(c=>{c.addEventListener("click",async()=>{ce="";try{await t.toggleRuntimeRule(c.dataset.toggleStrategyRule,c.dataset.ruleNext==="true",Number(c.dataset.ruleVer)),z=await t.getRuntimeSettings(v.projectId),B="条件联动规则状态与版本回执已更新。",h()}catch(x){ce=x instanceof Error?x.message:String(x),h()}})}),e.querySelectorAll("[data-toggle-create]").forEach(c=>{c.addEventListener("click",()=>{O=!O,h()})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{N.push({deviceId:J[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),h()}),e.querySelectorAll("[data-del-draft-action]").forEach(c=>{c.addEventListener("click",()=>{const x=Number(c.dataset.delDraftAction);N.length>1&&(N.splice(x,1),h())})}),e.querySelectorAll("[data-draft-dev]").forEach(c=>{c.addEventListener("change",()=>{const x=N[Number(c.dataset.draftDev)];x&&(x.deviceId=c.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(c=>{c.addEventListener("change",()=>{const x=N[Number(c.dataset.draftCmd)];x&&(x.command=c.value)})}),e.querySelectorAll("[data-draft-val]").forEach(c=>{c.addEventListener("change",()=>{const x=N[Number(c.dataset.draftVal)];x&&(x.targetValue=c.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",c=>{const x=c.currentTarget,X=x.selectionStart??x.value.length;A=x.value,h();const ke=e.querySelector("[data-scene-search]");ke&&(ke.focus(),ke.setSelectionRange(X,X))}),e.querySelectorAll("[data-exec-scene]").forEach(c=>{c.addEventListener("click",async()=>{ce="";const x=L.find(X=>X.id===c.dataset.execScene);try{H=await t.executeScene(c.dataset.execScene),L=await t.listScenes(v.floorId),fe.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:x?.name??"E7F 场景",action:`${H.receipts.length} 台设备联动下发`,status:"verified"}),h()}catch(X){ce=X instanceof Error?X.message:String(X),h()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async c=>{c.preventDefault();const x=new FormData(c.currentTarget);try{await t.createScene({projectId:v.projectId,floorId:v.floorId,name:String(x.get("name")??""),description:String(x.get("description")??""),actions:N.map(X=>({deviceId:X.deviceId,command:X.command,targetValue:X.targetValue==="true"?!0:X.targetValue==="false"?!1:Number(X.targetValue)||50}))}),L=await t.listScenes(v.floorId),O=!1,B=`快捷场景已保存（共绑定 ${N.length} 条联动动作）。`,h()}catch(X){ce=X instanceof Error?X.message:String(X),h()}})}h(),window.addEventListener("hashchange",()=>g(),{once:!0})}const Ct={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function vt(e,t){return e.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(o=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${o.name}</span>
            <span class="pacom-badge pacom-badge--neutral">v${o.version}</span>
            <span class="pacom-badge pacom-badge--accent">${o.scopeLabel}</span>
          </span>
          <span class="pacom-setting-desc">${o.summary} · 回执：${o.receiptSummary??"已同步"}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${o.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${o.enabled?"true":"false"}"
            aria-label="切换 ${o.name}"
            data-toggle-rule="${o.id}"
            data-rule-ver="${o.version}"
            data-rule-next="${!o.enabled}"
            ${t?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function Da(e,t,o){let a="calendar",i=Qe(),r=!1,k="";const[L,z]=await Promise.all([t.getSpatialTree(),t.getRuntimeSettings(v.projectId)]);let J=z,R=J.calendar.workdayStart,se=J.calendar.workdayEnd,Y=J.calendar.nightGuardStart,H=J.calendar.nightGuardEnd,A=!0,O=[];const ee=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let me="flat";const ae={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},de={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},B={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},ce={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},ye=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let fe="",Se="";function N(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(h=>{const pe=Ct[h];return`
                <button type="button" class="pacom-unified-item" aria-current="${a===h}" data-stab="${h}">
                  ${be(pe.icon,16)}
                  <span>${pe.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function U(){const g=o.scope.canEditDeployment,h=L.projects[0]?.name??"当前项目",pe=J.rules.filter(p=>p.category==="weather_area"),D=J.rules.filter(p=>p.category==="metering_carbon"),S=J.rules.filter(p=>p.category==="templates"),E=Ct[a];e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Je({tree:L,session:o,scope:i,maxGranularity:"project",isOpen:r,searchKeyword:k})}
            </div>
            <div class="pacom-header-meta">
              ${g?"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${N()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${E.label}</h2>
                <p class="pacom-unified-subtitle">${E.subtitle}</p>
              </div>
              ${fe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${fe}</span></div>`:""}
              ${Se?`<div class="pacom-alert-banner">${Se}</div>`:""}

              ${a==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${J.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${R}" aria-label="工作日上班时间" ${g?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${se}" aria-label="工作日下班时间" ${g?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${Y}" aria-label="夜间值守开始" ${g?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${H}" aria-label="夜间值守结束" ${g?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${A?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${A}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${g?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${g?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${ee.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${ee.map(p=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${p.date}</span><span class="pacom-badge pacom-badge--accent">${p.mode}</span></span>
                              <span class="pacom-setting-desc">${p.label}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${p.id}" ${g?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${g?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${g?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${g?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${g?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${O.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${O.length} 条</span>
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
                                ${O.map(p=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${p.ruleName}</div>
                                        ${p.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${p.conflictWarning}</div>`:""}
                                      </td>
                                      <td>${p.beforeWindow}</td>
                                      <td><strong>${p.afterWindow}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${p.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${p.conflictWarning?"交叠警告":"自动跟随"}
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
                            <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${g?"":"disabled"}>
                              <option value="guanzhou_station" ${ae.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${ae.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${h}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${ae.billingArea}" aria-label="计费面积" ${g?"":"disabled"} />
                          </div>
                        </div>
                        ${vt(pe,g)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${me==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${me==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${me==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${ae.tariffYuan}" aria-label="综合电价" ${g?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${ae.tariffPeak}" ${g?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${ae.tariffFlat}" ${g?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${ae.tariffValley}" ${g?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${g?"":"disabled"}>
                              <option value="0.5271" ${ae.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${ae.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${vt(D,g)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${g?"":"disabled"}>保存口径参数</button>
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
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${de.minTemp}" aria-label="最低设定温度" ${g?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${de.maxTemp}" aria-label="最高设定温度" ${g?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${g?"":"disabled"}>
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
                              <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${de.readbackTimeoutSec}" aria-label="回读超时阈值" ${g?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${g?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${vt(S,g)}
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
                              <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${ce.dailyDigestTime}" aria-label="每日简报发送时间" />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ce.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ce.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
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
                              <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${B.delayMin}" ${g?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${B.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${g?"":"disabled"}>
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
                              <select class="pacom-select" data-auto-wo="defaultGroup" aria-label="默认处理组" ${g?"":"disabled"}>
                                <option value="暖通运维组" ${B.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${B.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${B.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${B.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${g?"":"disabled"}>
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
                                ${ye.map(p=>`
                                    <tr>
                                      <td><strong>${p.groupName}</strong></td>
                                      <td>${p.scope}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${p.severity}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${p.channels}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${p.enabled}" data-toggle-nr="${p.id}" aria-label="切换 ${p.groupName} 通知规则">
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
    `,et(e,{onToggle:()=>{r=!r,U(),r&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:p=>{k=p,U();const M=e.querySelector("[data-global-space-search]");M&&(M.focus(),M.setSelectionRange(p.length,p.length))},onPick:p=>{i=p,r=!1,U()}}),e.querySelectorAll("[data-stab]").forEach(p=>{p.addEventListener("click",()=>{a=p.dataset.stab??"calendar",fe="",Se="",U()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{A=!A,fe=`法定节假日自动跳过已${A?"开启":"关闭"}。`,U()}),e.querySelector("[data-night-start]")?.addEventListener("change",p=>{Y=p.currentTarget.value}),e.querySelector("[data-night-end]")?.addEventListener("change",p=>{H=p.currentTarget.value}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",p=>{p.preventDefault();const M=new FormData(p.currentTarget);ee.push({id:`sd-${Date.now()}`,date:String(M.get("date")??""),label:String(M.get("label")??""),mode:String(M.get("mode")??"保持工作日工况")}),fe="已添加特殊例外日期，当日自动覆盖默认节假日排程。",U()}),e.querySelectorAll("[data-del-sd]").forEach(p=>{p.addEventListener("click",()=>{const M=ee.findIndex($e=>$e.id===p.dataset.delSd);M>=0&&ee.splice(M,1),U()})}),e.querySelectorAll("[data-tariff-mode]").forEach(p=>{p.addEventListener("click",()=>{me=p.dataset.tariffMode??"flat",U()})}),e.querySelectorAll("[data-energy-field]").forEach(p=>{p.addEventListener("change",()=>{const M=p.dataset.energyField;M&&(ae[M]=p.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{fe=me==="flat"?`能耗计费与气象口径已保存（面积 ${ae.billingArea} m² · 综合电价 ¥${ae.tariffYuan}/kWh · 因子 ${ae.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${ae.tariffPeak} / 平 ¥${ae.tariffFlat} / 谷 ¥${ae.tariffValley}）。`,U()}),e.querySelectorAll("[data-guard-field]").forEach(p=>{p.addEventListener("change",()=>{const M=p.dataset.guardField;M&&(de[M]=p.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{fe=`控制保护参数已保存（温区 ${de.minTemp}–${de.maxTemp}°C · 超时 ${de.readbackTimeoutSec}s）。`,U()}),e.querySelectorAll("[data-auto-wo]").forEach(p=>{p.addEventListener("change",()=>{const M=p.dataset.autoWo;M&&(B[M]=p.value),fe="超时自动派单配置已更新。",U()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(p=>{p.addEventListener("click",()=>{const M=p.dataset.toggleAutowo;M&&(B[M]=!B[M],fe="自动派单保护策略已更新。",U())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",p=>{ce.dailyDigestTime=p.currentTarget.value,fe=`每日晨间简报发送时刻已更新为 ${ce.dailyDigestTime}。`,U()}),e.querySelectorAll("[data-notify-key]").forEach(p=>{p.addEventListener("click",()=>{const M=p.dataset.notifyKey;M&&(ce[M]=!ce[M],fe="消息通知偏好已更新。",U())})}),e.querySelectorAll("[data-toggle-nr]").forEach(p=>{p.addEventListener("click",()=>{const M=ye.find($e=>$e.id===p.dataset.toggleNr);M&&(M.enabled=!M.enabled,fe=`工作组「${M.groupName}」的分流推送规则已${M.enabled?"启用":"停用"}。`,U())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",p=>{R=p.currentTarget.value}),e.querySelector("[data-cal-end]")?.addEventListener("change",p=>{se=p.currentTarget.value}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{Se="",O=await t.previewCalendarImpact(v.projectId,R,se),U()}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{Se="";try{const p=await t.saveWorkCalendar(v.projectId,R,se,J.calendar.version);J={...J,calendar:{...p,nightGuardStart:Y,nightGuardEnd:H}},fe=`工作时间配置已保存至 v${p.version}（工作日 ${p.workdayStart}–${p.workdayEnd} · 夜间值守 ${Y}–${H}）`,O=[],U()}catch(p){Se=p instanceof Error?p.message:String(p),U()}}),e.querySelectorAll("[data-toggle-rule]").forEach(p=>{p.addEventListener("click",async()=>{Se="";try{await t.toggleRuntimeRule(p.dataset.toggleRule,p.dataset.ruleNext==="true",Number(p.dataset.ruleVer)),J=await t.getRuntimeSettings(v.projectId),fe="策略状态与版本回执已更新。",U()}catch(M){Se=M instanceof Error?M.message:String(M),U()}})})}U()}const qt="pacom.web.sidebar.collapsed",Ma=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ft=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],yt={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},zt=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function ht(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in yt?e:"home"}function _e(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Ta(e,t,o,a){e.classList.remove("bare-login");let i=o,r=ht(),k=localStorage.getItem(qt)==="1",L=!1,z=!1,J="",R=!1,se=0,Y={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const H=t.mode==="demo"&&typeof t.switchDemoRole=="function";async function A(){try{const[S,E,p,M,$e]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(v.floorId).catch(()=>[]),t.listAlarms(v.floorId).catch(()=>[]),t.listWorkOrders(v.floorId).catch(()=>[]),t.listScenes(v.floorId).catch(()=>[])]);Y={devices:E,zones:S.zones,alarms:p,workOrders:M,scenes:$e},se=p.filter(ge=>ge.status==="active").length,ye()}catch{}}function O(){return ft.map(S=>`
        ${S.id==="settings"?'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${S.id}" aria-current="${r===S.id?"page":"false"}" title="${S.label}">
          ${be(S.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${S.label}</span>
          ${S.id==="alarms"&&se>0?`<span class="pacom-nav-count" title="待处理告警 ${se} 条">${se}</span>`:""}
        </button>`).join("")}function ee(){const S=J.trim().toLowerCase(),E=S?ft.filter(x=>x.label.toLowerCase().includes(S)).slice(0,4):ft,p=S?Y.devices.filter(x=>`${x.name} ${x.id} ${x.category}`.toLowerCase().includes(S)).slice(0,5):Y.devices.slice(0,3),M=S?Y.zones.filter(x=>x.name.toLowerCase().includes(S)).slice(0,3):[],$e=S?Y.alarms.filter(x=>`${x.title} ${x.message} ${x.id}`.toLowerCase().includes(S)).slice(0,4):Y.alarms.filter(x=>x.status==="active").slice(0,2),ge=S?Y.workOrders.filter(x=>`${x.title} ${x.id}`.toLowerCase().includes(S)).slice(0,3):[],le=S?Y.scenes.filter(x=>`${x.name} ${x.description}`.toLowerCase().includes(S)).slice(0,3):[],oe=S?zt.filter(x=>`${x.title} ${x.category}`.toLowerCase().includes(S)).slice(0,4):zt.slice(0,2),c=[];return p.length&&c.push(`<div class="pacom-search-group">${S?"设备（空间总览）":"常用设备直达"}</div>`+p.map(x=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(x.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(x.name)}</span><span class="pacom-badge ${x.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${x.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),M.length&&c.push('<div class="pacom-search-group">功能区</div>'+M.map(x=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(x.id)}"><span>${_e(x.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),$e.length&&c.push(`<div class="pacom-search-group">${S?"告警":"待处理告警"}</div>`+$e.map(x=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(x.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(x.title)}</span><span class="pacom-badge pacom-badge--warning">${x.status==="active"?"待处理":"已确认"}</span></button>`).join("")),ge.length&&c.push('<div class="pacom-search-group">运维工单</div>'+ge.map(x=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(x.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(x.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),le.length&&c.push('<div class="pacom-search-group">智能策略</div>'+le.map(x=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${_e(x.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),oe.length&&c.push('<div class="pacom-search-group">图纸与工程文档</div>'+oe.map(x=>`<button type="button" class="pacom-search-hit" data-search-hash="${x.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(x.title)}</span><span class="pacom-badge pacom-badge--neutral">${_e(x.category)}</span></button>`).join("")),E.length&&c.push('<div class="pacom-search-group">工作区</div>'+E.map(x=>`<button type="button" class="pacom-search-hit" data-search-hash="#${x.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${be(x.icon,14)}${_e(x.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),c.length?c.join(""):`<div class="pacom-nav-empty">未找到与「${_e(J)}」匹配的设备、区域、告警、工单或图纸</div>`}function me(S){S.querySelectorAll("[data-search-hash]").forEach(E=>{E.addEventListener("click",()=>{const p=E.dataset.searchHash||"#home";R=!1,J="",ae(),L=!1,window.location.hash===p?(r=ht(),U(!0)):window.location.hash=p})})}function ae(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!R)return;const S=document.createElement("div");S.className="pacom-cmd-scrim",S.dataset.role="cmd-scrim",S.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${be("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${_e(J)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${ee()}
        </div>
      </div>
    `,e.appendChild(S),S.addEventListener("click",M=>{M.target===S&&(R=!1,ae())});const E=S.querySelector('[data-role="cmd-input"]'),p=S.querySelector('[data-role="cmd-body"]');p&&me(p),E?.focus(),E?.addEventListener("input",M=>{J=M.currentTarget.value,p&&(p.innerHTML=ee(),me(p))})}function de(){if(!z)return"";const S=i.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${k?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${_e(i.roleLabel)}</small>
          </span>
          ${be("check",16,"pacom-pop-check")}
        </button>

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${be("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${_e(S)}</span>
          <span class="pacom-pop-text">
            <b>${_e(i.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${H?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">切换视角</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(Te).map(E=>{const p=Te[E],M=E===i.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${M}" data-pop-role="${E}">
                      <span class="pacom-pop-text">
                        <b>${_e(p.roleLabel)}</b>
                        <small>${_e(p.displayName)}</small>
                      </span>
                      ${M?be("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${be("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function B(S){switch(document.title=`${yt[r]} · PACOM Station`,r){case"home":await Aa(S,t,i);return;case"analysis":await ya(S,t,i);return;case"alarms":await ia(S,t,i);return;case"scenes":await za(S,t,i);return;case"settings":await Da(S,t,i);return;case"deployment":await ka(S,t,i);return;case"account":await ea(S,t,i,E=>{i=E,U(!0)},ce);return}}async function ce(){z=!1,L=!1,R=!1,D();try{await t.logout()}finally{window.location.hash="#login",a()}}function ye(){const S=e.querySelector('[data-role="nav-list"]');S&&(S.innerHTML=O(),Se())}function fe(){e.querySelector('[data-role="org-popover"]')?.remove();const S=e.querySelector('[data-role="org-menu-btn"]');if(S&&S.setAttribute("aria-expanded",String(z)),!z)return;const E=document.createElement("div");E.innerHTML=de().trim();const p=E.firstElementChild;p&&(e.appendChild(p),N())}function Se(){e.querySelectorAll("[data-route]").forEach(S=>{S.addEventListener("click",()=>{const E=S.dataset.route;E===r&&!L||(r=E,L=!1,z=!1,window.location.hash=`#${r}`,U(!0))})})}function N(){e.querySelectorAll('[data-pop-act="go-account"]').forEach(S=>{S.addEventListener("click",()=>{z=!1,L=!1,r="account",window.location.hash="#account",U(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{ce()}),e.querySelectorAll("[data-pop-role]").forEach(S=>{S.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const E=S.dataset.popRole;z=!1,L=!1,i=await t.switchDemoRole(E),await U(!0)})})}async function U(S){const E=e.querySelector('[data-role="main-stage"]');if(!S&&E){const M=e.querySelector(".pacom-nav-rail");M&&(M.classList.toggle("is-collapsed",k),M.classList.toggle("is-mobile-open",L));const $e=e.querySelector('[data-role="mobile-scrim"]');$e&&$e.classList.toggle("is-open",L),fe();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${be("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${yt[r]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${_e(i.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${L?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${k?"is-collapsed":""} ${L?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Ma}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${k?"展开侧栏":"收起侧栏"}" aria-label="${k?"展开侧栏":"收起侧栏"}">
              ${be("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${be("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${O()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${r==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${z}" title="广州国家实验室 · ${_e(i.displayName)}">
              <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
              <span class="pacom-org-name">广州国家实验室</span>
              ${be("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{k=!k,z=!1,localStorage.setItem(qt,k?"1":"0");const M=e.querySelector(".pacom-nav-rail"),$e=e.querySelector('[data-role="toggle-sidebar"]');M&&M.classList.toggle("is-collapsed",k),$e&&($e.title=k?"展开侧栏":"收起侧栏",$e.setAttribute("aria-label",$e.title),$e.innerHTML=be("panel-left",16)),fe()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{z=!1,fe(),R=!0,ae()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{L=!L,U(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{L=!1,z=!1,U(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",M=>{M.stopPropagation(),z=!z,fe()}),Se(),fe(),ae();const p=e.querySelector('[data-role="main-stage"]');p&&await B(p)}const g=S=>{const E=S.target;z&&!E?.closest('[data-role="org-popover"]')&&!E?.closest('[data-role="org-menu-btn"]')&&(z=!1,fe())},h=S=>{if((S.metaKey||S.ctrlKey)&&S.key.toLowerCase()==="k"){S.preventDefault(),z=!1,fe(),R=!R,ae();return}S.key==="Escape"&&(R?(R=!1,ae()):z?(z=!1,fe()):L&&(L=!1,U(!1)))},pe=()=>{r=ht(),z=!1,L=!1,R=!1,U(!0),A()};function D(){document.removeEventListener("click",g),document.removeEventListener("keydown",h),window.removeEventListener("hashchange",pe)}document.addEventListener("click",g),document.addEventListener("keydown",h),window.addEventListener("hashchange",pe),await U(!0),A()}const Ra=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Pa='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Oa='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',tt=be("x",16),Dt={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},Na={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function _a(e){const t=e.replace(/\D/g,"");return t.length===11?`${t.slice(0,3)} •••• ${t.slice(7)}`:e}function Be(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Mt(e,t,o){e.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,i=!1,r="",k="",L="",z="",J=!1,R={},se="",Y=!1,H="",A=0,O=null,ee=null,me="privacy",ae="",de="",B="";const ce=t.mode==="demo"&&typeof t.switchDemoRole=="function";function ye(){O!==null&&(window.clearInterval(O),O=null),e.classList.remove("bare-login")}function fe(){A=60,O!==null&&window.clearInterval(O),O=window.setInterval(()=>{A-=1,A<=0&&(A=0,O!==null&&(window.clearInterval(O),O=null));const g=e.querySelector('[data-act="send-sms"]');g&&(g.disabled=A>0,g.textContent=A>0?`${A} 秒后重发`:H?"重新获取":"获取验证码")},1e3)}function Se(){if(!ee)return"";if(ee==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${tt}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Be(de)}" />
                  </div>
                </div>
                ${B?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${Be(B)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(ee==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${tt}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                请联系所在机构管理员获取邀请码，或通过支持邮箱联系开通新机构账户。
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${ce?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">快捷登录</button>':""}
            </div>
          </section>
        </div>
      `;if(ee==="legal"){const g=Dt[me],h=["privacy","terms","service"].map(pe=>`<button type="button" role="tab" aria-selected="${me===pe}" class="au-legal-tab ${me===pe?"is-active":""}" data-act="switch-legal" data-tab="${pe}">${Dt[pe].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${tt}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${h}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${g.items.map(pe=>`<li>${Be(pe)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return ee==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${tt}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${ae||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:ee==="demoRoles"&&ce?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择身份进入</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${tt}</button>
            </div>
            <div class="db">
              <p class="au-dlead">选择对应岗位视角进入广州国家实验室工作台。</p>
              <div class="au-choice-list">
                ${Object.keys(Te).map(g=>{const h=Te[g];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${g}">
                        <div>
                          <b>${Be(h.roleLabel)} · ${Be(h.displayName)}</b>
                          <small>${Be(Na[g])}</small>
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
      `:""}function N(){const g=a?`
        <div class="au-field ${R.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Be(L)}" aria-invalid="${R.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${A>0?"disabled":""}>
              ${A>0?`${A} 秒后重发`:H?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Be(R.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${H?`验证码已发送至 ${Be(_a(H))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${R.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Be(r)}" aria-invalid="${R.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Be(R.id??"")}</p>
        </div>
      `,h=a?`
        <div class="au-field ${R.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Be(z)}" aria-invalid="${R.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Be(R.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${R.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${i?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Be(k)}" aria-invalid="${R.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${i?"隐藏密码":"显示密码"}">
              ${i?Oa:Pa}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Be(R.pwd??"")}</p>
        </div>
      `;e.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Ra}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${Y?"disabled":""}>
                  ${g}
                  ${h}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${se?"":"hidden"}>${Be(se)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${J?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${Y?"disabled":""}>
                    ${Y?"正在登录…":"登录"}
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
                ${ce?`<div class="au-demo-bar">
                        <button type="button" class="au-demo-trigger" data-act="open-demo-roles">快捷登录 ›</button>
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
      ${Se()}
    `,U()}function U(){const g=e.querySelector("#au-id"),h=e.querySelector("#au-pwd"),pe=e.querySelector("#au-sphone"),D=e.querySelector("#au-scode"),S=e.querySelector('input[name="keep"]');g?.addEventListener("input",()=>{if(r=g.value,R.id||se){delete R.id,se="",g.closest(".au-field")?.classList.remove("bad");const E=e.querySelector("#au-id-err");E&&(E.textContent="");const p=e.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),h?.addEventListener("input",()=>{if(k=h.value,R.pwd||se){delete R.pwd,se="",h.closest(".au-field")?.classList.remove("bad");const E=e.querySelector("#au-pwd-err");E&&(E.textContent="");const p=e.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),pe?.addEventListener("input",()=>{if(L=pe.value,R.sphone||se){delete R.sphone,se="",pe.closest(".au-field")?.classList.remove("bad");const E=e.querySelector("#au-sphone-err");E&&(E.textContent="");const p=e.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),D?.addEventListener("input",()=>{if(z=D.value.replace(/\D/g,"").slice(0,6),D.value=z,R.scode||se){delete R.scode,se="",D.closest(".au-field")?.classList.remove("bad");const E=e.querySelector("#au-scode-err");E&&(E.textContent="");const p=e.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),S?.addEventListener("change",()=>{J=S.checked}),e.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{i=!i,N(),e.querySelector("#au-pwd")?.focus()}),e.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,R={},se="",N(),e.querySelector(a?"#au-sphone":"#au-id")?.focus()}),e.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const E=L.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(E)){R={sphone:"请输入有效的手机号码"},N(),e.querySelector("#au-sphone")?.focus();return}R={},H=E,fe(),N(),e.querySelector("#au-scode")?.focus()}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async E=>{if(E.preventDefault(),!Y){if(R={},se="",a?(L.trim()||(R.sphone="请输入手机号码"),/^\d{6}$/.test(z.trim())||(R.scode="请输入 6 位验证码")):(r.trim()||(R.id="请输入电子邮箱或手机号码"),k||(R.pwd="请输入密码")),Object.keys(R).length>0){N();const p=Object.keys(R)[0];e.querySelector(`#au-${p}`)?.focus();return}Y=!0,N();try{const p=await t.login({account:(a?L:r).trim(),password:a?z.trim():k});ye(),o(p)}catch(p){Y=!1,se=p instanceof Error?p.message:"账户或密码不正确",N()}}}),e.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{de=r.trim(),B="",ee="reset",N(),e.querySelector("#au-rs-id")?.focus()}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{ee="register",N()}),e.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{ee="legal",N()}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{ae="",ee="contact",N()}),e.querySelectorAll('[data-act="open-demo-roles"]').forEach(E=>{E.addEventListener("click",()=>{ee="demoRoles",N()})}),e.querySelectorAll('[data-act="close-modal"]').forEach(E=>{E.addEventListener("click",()=>{ee=null,N()})}),e.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",E=>{E.target===E.currentTarget&&(ee=null,N())}),e.querySelectorAll('[data-act="switch-legal"]').forEach(E=>{E.addEventListener("click",()=>{const p=E.dataset.tab;p&&(me=p,N())})}),e.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),ae="已复制"}catch{ae="support@pacom.cn"}N()}),e.querySelector("#au-reset-form")?.addEventListener("submit",E=>{E.preventDefault(),de=e.querySelector("#au-rs-id")?.value.trim()??"",de?B="请联系机构管理员重置账号密码，或确认后查收重置邮件。":B="请输入电子邮箱或手机号码",N()}),e.querySelectorAll('[data-act="pick-demo-role"]').forEach(E=>{E.addEventListener("click",async()=>{const p=E.dataset.roleId;if(!p||!t.switchDemoRole)return;const M=await t.switchDemoRole(p);ye(),o(M)})})}N()}async function Ba(){const e=document.getElementById("app");if(e)try{const t=Xt(),o=await t.getSession(),a=async i=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Ta(e,t,i,()=>{Mt(e,t,r=>{a(r)})})};if(!o||window.location.hash==="#login"){Mt(e,t,i=>{a(i)});return}await a(o)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(t)}</div></div>`}}Ba();
//# sourceMappingURL=index-WW7l6alL.js.map
