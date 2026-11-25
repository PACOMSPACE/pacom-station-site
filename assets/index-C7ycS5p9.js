(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const F of c.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&a(F)}).observe(document,{childList:!0,subtree:!0});function s(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(n){if(n.ep)return;n.ep=!0;const c=s(n);fetch(n.href,c)}})();const m={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"};function qt(){const e="2026-11-25T09:00:00Z",t=[];for(let c=1;c<=22;c+=1){const F=c===7?m.floorId:c===8?m.lockedFloor8Id:c===6?m.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${c}`,C=String(c).padStart(2,"0");t.push({id:F,buildingId:m.buildingId,kind:"above",level:c,name:`${c}F`,areaSqm:c===7?1383.1:c===1?2680:c<=4?1920:1480,plan:{floorId:F,imageUrl:`./media/floors/e/${C}F.png`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const s="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";t.push({id:s,buildingId:m.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:s,imageUrl:"./media/floors/e/RF.png",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}});const a=[];for(let c=1;c<=12;c+=1){const F=`structure-f-above-${c}`,C=String(c).padStart(2,"0");a.push({id:F,buildingId:m.buildingFId,kind:"above",level:c,name:`${c}F`,areaSqm:c===1?2450:c<=3?2100:1580,plan:{floorId:F,imageUrl:`./media/floors/f/${C}F.png`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const n="structure-f-roof-1";return a.push({id:n,buildingId:m.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:n,imageUrl:"./media/floors/f/RF.png",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}}),{projects:[{id:m.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"},{id:m.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:m.buildingId,projectId:m.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:m.buildingFId,projectId:m.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],floors:[...t,...a],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:m.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:m.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:m.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:m.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:s,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:n,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const At=qt(),gt=At.floors.map(e=>e.id),qe={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[m.projectId,m.project1Id],allowedBuildingIds:[m.buildingId,m.buildingFId],allowedFloorIds:[...gt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[m.projectId],allowedBuildingIds:[m.buildingId,m.buildingFId],allowedFloorIds:[...gt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[m.projectId],allowedBuildingIds:[m.buildingId],allowedFloorIds:[m.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[m.projectId],allowedBuildingIds:[m.buildingId],allowedFloorIds:[m.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[m.projectId],allowedBuildingIds:[m.buildingId],allowedFloorIds:[m.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},Ye="pacom.web.demo.role",vt="pacom.web.demo.spatial.v2";class Dt{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){this.spatial=this.loadSpatial(),this.syncAdminScopesFromSpatial();const t=typeof sessionStorage<"u"?sessionStorage.getItem(Ye):null;t&&qe[t]&&(this.activeSession=structuredClone(qe[t]));const s=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:m.projectId,buildingId:m.buildingId,floorId:m.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:m.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:s,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:m.projectId,buildingId:m.buildingId,floorId:m.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:m.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:m.projectId,buildingId:m.buildingId,floorId:m.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:m.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:m.projectId,buildingId:m.buildingId,floorId:m.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:m.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:s,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:s,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:s,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:m.projectId,buildingId:m.buildingId,floorId:m.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:m.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:s,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:m.projectId,buildingId:m.buildingId,floorId:m.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:m.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:s,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:s,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:s,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:m.projectId,buildingId:m.buildingId,floorId:m.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:m.projectId,buildingId:m.buildingId,floorId:m.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:m.projectId,buildingId:m.buildingId,floorId:m.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:m.projectId,buildingId:m.buildingId,floorId:m.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:s},{id:"conn-e7f-dali",projectId:m.projectId,buildingId:m.buildingId,floorId:m.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:s},{id:"conn-e7f-modbus",projectId:m.projectId,buildingId:m.buildingId,floorId:m.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:m.projectId,floorId:m.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:m.projectId,floorId:m.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:m.projectId,floorId:m.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:m.projectId,floorId:m.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:m.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:m.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:m.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:s,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:m.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:m.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:m.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:m.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(qe).map((a,n)=>({userId:a.userId,displayName:a.displayName,email:`${a.role.replaceAll("_",".")}@pacom.local`,role:a.role,roleLabel:a.roleLabel,scopeSummary:a.scope.allowedZoneIds?.length?`E栋 7F（${a.scope.allowedZoneIds.length} 个我的区域）`:`${a.scope.allowedProjectIds.length} 项目 / ${a.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:n===0?s:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(t,s,a,n,c){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:s,endpoint:a,request:c,response:n}),this.traces.length>40&&this.traces.pop()}pushAudit(t,s,a,n){const c=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:c?.displayName??"anonymous",role:c?.role??"member",action:t,target:s,result:a,detail:n})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){if(!t.account.trim()||!t.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=t.account.includes("admin")?"org_admin":t.account.includes("eng")?"commissioning_engineer":t.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(qe[s]),sessionStorage.setItem(Ye,s),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:t.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(Ye),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(t){return this.activeSession=structuredClone(qe[t]),sessionStorage.setItem(Ye,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}loadSpatial(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(vt);if(t){const s=JSON.parse(t);if(s?.projects?.length&&s?.buildings?.length&&Array.isArray(s.floors))return s}}}catch{}return structuredClone(At)}persistSpatial(){this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&localStorage.setItem(vt,JSON.stringify(this.spatial))}catch{}}syncAdminScopesFromSpatial(){const t=this.spatial.buildings.map(a=>a.id),s=this.spatial.floors.map(a=>a.id);qe.org_admin.scope.allowedBuildingIds=[...t],qe.org_admin.scope.allowedFloorIds=[...s],qe.project_admin.scope.allowedBuildingIds=[...t],qe.project_admin.scope.allowedFloorIds=[...s],this.activeSession&&(this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin")&&(this.activeSession.scope.allowedBuildingIds=[...t],this.activeSession.scope.allowedFloorIds=[...s])}async getSpatialTree(){const t=this.requireSession(),s=this.spatial.projects.filter(G=>t.scope.allowedProjectIds.includes(G.id)),a=this.spatial.buildings.filter(G=>t.scope.allowedBuildingIds.includes(G.id)),n=new Set(a.map(G=>G.id)),c=this.spatial.floors.filter(G=>n.has(G.buildingId)),F=new Set(c.map(G=>G.id)),C=this.spatial.zones.filter(G=>F.has(G.floorId)),O=structuredClone({projects:s,buildings:a,floors:c,zones:C});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:O.projects.length,buildings:O.buildings.length,floors:O.floors.length}),O}async updateProject(t,s){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改项目配置`);const n=this.spatial.projects.find(c=>c.id===t);if(!n)throw new Error(`404 NOT_FOUND: 项目 ${t} 不存在`);return s.name!==void 0&&(n.name=s.name.trim()||n.name),s.city!==void 0&&(n.city=s.city.trim()),s.address!==void 0&&(n.address=s.address.trim()),s.location!==void 0&&(n.location=s.location),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${t}`,n,s),this.pushAudit("project.update",t,"success",n.name),structuredClone(n)}async upsertBuilding(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼宇`);let a=t.id?this.spatial.buildings.find(n=>n.id===t.id):void 0;return a?(a.name=t.name.trim()||a.name,a.aboveFloors=Math.max(0,t.aboveFloors),a.belowFloors=Math.max(0,t.belowFloors),a.hasRoof=t.hasRoof,t.areaSqm!==void 0&&(a.areaSqm=t.areaSqm),t.imageUrl!==void 0&&(a.imageUrl=t.imageUrl)):(a={id:`building-${Date.now().toString(36)}`,projectId:t.projectId,name:t.name.trim()||"新建楼宇",aboveFloors:Math.max(1,t.aboveFloors),belowFloors:Math.max(0,t.belowFloors),hasRoof:t.hasRoof,areaSqm:t.areaSqm??null,imageUrl:t.imageUrl??"./media/building-e.png"},this.spatial.buildings.push(a)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",a,t),this.pushAudit("building.upsert",a.id,"success",a.name),structuredClone(a)}async upsertFloor(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼层`);const a=new Date().toISOString();let n=t.id?this.spatial.floors.find(c=>c.id===t.id):void 0;if(n)n.name=t.name.trim()||n.name,n.kind=t.kind,n.level=t.level,t.areaSqm!==void 0&&(n.areaSqm=t.areaSqm),t.planImageUrl!==void 0&&(n.plan=t.planImageUrl?{floorId:n.id,imageUrl:t.planImageUrl,planVersion:(n.plan?.planVersion??0)+1,updatedAt:a}:null);else{const c=`floor-${t.buildingId.slice(-6)}-${t.kind}-${Math.abs(t.level)}-${Date.now().toString(36).slice(-3)}`;n={id:c,buildingId:t.buildingId,kind:t.kind,level:t.level,name:t.name.trim()||`${t.level}F`,areaSqm:t.areaSqm??null,plan:t.planImageUrl?{floorId:c,imageUrl:t.planImageUrl,planVersion:1,updatedAt:a}:null},this.spatial.floors.push(n),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(n.id)&&this.activeSession.scope.allowedFloorIds.push(n.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:n.id,name:n.name,hasPlan:!!n.plan}),this.pushAudit("floor.upsert",n.id,"success",n.name),structuredClone(n)}async deleteFloor(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼层`);if(t===m.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(a=>a.id!==t),this.spatial.zones=this.spatial.zones.filter(a=>a.floorId!==t),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${t}`,{ok:!0}),this.pushAudit("floor.delete",t,"success")}async upsertZone(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护功能区`);let a=t.id?this.spatial.zones.find(n=>n.id===t.id):void 0;return a?(a.name=t.name.trim()||a.name,a.category=t.category):(a={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:t.floorId,name:t.name.trim(),category:t.category},this.spatial.zones.push(a)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",a),this.pushAudit("zone.upsert",a.id,"success",a.name),structuredClone(a)}async deleteZone(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(a=>a.id!==t),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${t}`,{ok:!0}),this.pushAudit("zone.delete",t,"success")}async copyZonesToFloors(t,s){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权复制功能区`);const n=this.spatial.floors.find(C=>C.id===t),c=this.spatial.zones.filter(C=>C.floorId===t);if(!n||c.length===0)return 0;let F=0;for(const C of s){if(C===t)continue;const O=this.spatial.floors.find(D=>D.id===C);if(!O)continue;const G=new Set(this.spatial.zones.filter(D=>D.floorId===C).map(D=>D.name));for(const D of c){const ae=D.name.replace(new RegExp(`^${n.name}\\s*`,"i"),""),W=`${O.name} ${ae}`.trim();G.has(W)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:C,name:W,category:D.category}),G.add(W),F+=1)}}return F>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:t,targetCount:s.length,added:F}),F}async getFloorDevices(t){const s=this.requireSession();if(!s.scope.allowedFloorIds.includes(t)){const n={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,n),this.pushAudit("floor.read",t,"denied",n.message),new Error(`403 FORBIDDEN: ${n.message}`)}if(t!==m.floorId)return[];let a=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(a=a.filter(n=>n.logicalZoneId&&s.scope.allowedZoneIds.includes(n.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:a.length}),a}async dispatchControlBatch(t){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,n={batchId:a,floorId:t.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(c=>({deviceId:c.deviceId,command:c.command,targetValue:c.targetValue,status:"queued"}))};return this.batches.set(a,n),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",n,t),this.pushAudit("control.dispatch",a,"success",`下发 ${t.targets.length} 台设备`),n.receipts.forEach((c,F)=>{const C=this.devices.find(O=>O.id===c.deviceId);setTimeout(()=>{c.status="dispatched",c.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:c.deviceId,status:"dispatched",at:c.dispatchedAt})},280+F*120),setTimeout(()=>{const O=new Date().toISOString();!C||C.connectivity==="offline"?(c.status="timeout",c.errorCode="GATEWAY_READBACK_TIMEOUT",c.errorMessage="设备离线，网关未收到回读确认",c.verifiedAt=O):(c.status="verified_success",c.observedValue=c.targetValue,c.verifiedAt=O,this.applyObservedTelemetry(C,c.command,c.targetValue,O)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:c.deviceId,status:c.status,observedValue:c.observedValue,at:O})},900+F*220)}),structuredClone(n)}applyObservedTelemetry(t,s,a,n){s==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:a,collectedAt:n,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(a)>0,collectedAt:n,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:a,collectedAt:n,stale:!1}:s==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:a,collectedAt:n,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:n,values:{[s]:a}})}async getControlBatch(t){this.requireSession();const s=this.batches.get(t);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(s)}async listAlarms(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==m.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,s){const a=this.requireSession();if(!a.scope.canManageAlarms){const c=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",c),new Error(`403 FORBIDDEN: ${c}`)}const n=this.alarms.find(c=>c.id===t);if(!n)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return n.status="acknowledged",n.acknowledgedAt=new Date().toISOString(),n.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,n,{note:s}),this.pushAudit("alarm.acknowledge",t,"success",s),this.emit({type:"alarm.changed",floorId:n.floorId,alarmId:t,status:"acknowledged",at:n.acknowledgedAt}),structuredClone(n)}async listWorkOrders(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==m.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const a=new Date().toISOString(),n={id:`wo-e7f-${Date.now().toString(36)}`,projectId:m.projectId,buildingId:m.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(n),t.alarmId){const c=this.alarms.find(F=>F.id===t.alarmId);c&&(c.workOrderId=n.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",n,t),this.pushAudit("work_order.create",n.id,"success",n.title),structuredClone(n)}async updateWorkOrderStatus(t,s){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const n=this.workOrders.find(c=>c.id===t);if(!n)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return n.status=s,n.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,n,{status:s}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${s}`),structuredClone(n)}async updateDevicePlanPoint(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(n=>n.id===t.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(a.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:Number(t.x.toFixed(4)),y:Number(t.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,a,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(c=>c.id===t.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(a.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const n=new Date().toISOString();return a.physicalInstalled=t.physicalInstalled,a.physicalVerifiedAt=t.physicalInstalled?n:null,a.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:n,boundBy:s.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,a,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(a)}async listConnections(t){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(t){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(t,s){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const n=this.devices.filter(F=>F.physicalInstalled&&F.hardwareBinding).length,c={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:m.projectId,floorId:t,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:n,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(c),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,c,{note:s}),this.pushAudit("delivery.freeze",c.id,"success",`${n}/${this.devices.length} 已现场核验`),structuredClone(c)}async getAnalysisReport(t,s,a){this.requireSession();const n=s==="today"?1:s==="7d"?7:30,F={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*n)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*n).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(G=>G.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*n).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*n).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*n).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],C=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],O={category:t,range:s,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:F.kpis,unit:F.unit,series:F.base.map((G,D)=>({label:C[D],value:Math.round(G*(t==="energy"||t==="carbon"?n/2+.5:1)),baseline:Math.round(G*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:F.base[3],unit:F.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:F.base[4],unit:F.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:F.base[1],unit:F.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${s}&scopeId=${a}`,{kpis:O.kpis.length}),O}async listScenes(t){return this.requireSession(),structuredClone(this.scenes)}async createScene(t){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,t),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(t){const s=this.scenes.find(n=>n.id===t);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const a=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=a.batchId,a}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:m.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,s,a){this.requireSession();const n=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,c=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${a} (+30m)`,conflictWarning:n},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:n}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",c,{workdayStart:s,workdayEnd:a}),c}async saveWorkCalendar(t,s,a,n){const c=this.requireSession();if(!c.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权修改运行日历`);if(this.calendar.version!==n)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:a,expectedVersion:n}),this.pushAudit("settings.calendar",m.projectId,"success",`${s}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,s,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权启停运行规则`);const c=this.rules.find(F=>F.id===t);if(!c)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(c.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${c.version}）`);return c.enabled=s,c.version+=1,c.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,c,{enabled:s,expectedVersion:a}),this.pushAudit("settings.rule_toggle",t,"success",s?"启用":"停用"),structuredClone(c)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,s){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const n=qe[s],c={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:s,roleLabel:n.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(c),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",c,{email:t,role:s}),this.pushAudit("org.invite",t,"success",n.roleLabel),structuredClone(c)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(t,s){return t!==m.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${m.floorId}`,t),this.listeners.forEach(s=>s(t))}}function Mt(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new Dt}const zt={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"layout-dashboard":'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',waypoints:'<circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'};function Tt(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function be(e,t=16,s=""){const a=Tt(t);return`<svg${s?` class="${s}"`:""} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${zt[e]}</svg>`}const ot=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function Rt(e,t,s,a,n){let c="profile",F="directory",C=await t.listOrgMembers(),O=await t.listAuditLogs(),G="",D="all",ae="all",W="all",ue=!1,S=!1,J=!1,H=s.displayName,X=s.role==="org_admin"||s.role==="project_admin"?"设施运维总监":s.role==="commissioning_engineer"?"楼宇自控部署工程师":s.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",ee="138-0013-8072",ce="",Z="";async function ie(){[C,O]=await Promise.all([t.listOrgMembers(),t.listAuditLogs()]),ne()}function ne(){const ge=t.mode==="demo"&&typeof t.switchDemoRole=="function",Ie=G.trim().toLowerCase(),T=C.filter(r=>D!=="all"&&r.role!==D?!1:Ie?`${r.displayName} ${r.email} ${r.roleLabel} ${r.scopeSummary}`.toLowerCase().includes(Ie):!0),M=O.filter(r=>{if(ae==="success"&&r.result!=="success"||ae==="denied"&&r.result==="success")return!1;if(W!=="all"){const q=`${r.action} ${r.target}`.toLowerCase();if(W==="control"&&!q.includes("control")&&!q.includes("scene")&&!q.includes("控制")||W==="alarm"&&!q.includes("alarm")&&!q.includes("work")&&!q.includes("告警")||W==="deploy"&&!q.includes("deploy")&&!q.includes("plan")&&!q.includes("hardware")&&!q.includes("部署"))return!1}return!0});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${c==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${c==="members"}" data-atab="members">成员与角色（${C.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${c==="audit"}" data-atab="audit">操作审计日志（${O.length}）</button>
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
            ${ce?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${ce}</span></div>`:""}
            ${Z?`<div class="pacom-alert-banner">${Z}</div>`:""}
            ${c==="profile"?`
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
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${H}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${X}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">告警接收手机号（SMS）</span>
                        <span class="pacom-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="pacom-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${ee}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
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

                ${ge?`
                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(qe).map(r=>{const q=qe[r];return`
                              <button class="pacom-role-card ${r===s.role?"is-active":""}" data-switch-role="${r}">
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
                      <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:4px;">展开查看 ${be("chevron-down",12)}</span>
                    </summary>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${J?"已复制":"复制 JSON"}</button>
                    </div>
                    <pre class="pacom-code">${JSON.stringify(s,null,2)}</pre>
                  </details>
                </section>`:c==="members"?`
                  ${ue?`
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
                                ${Object.keys(qe).map(r=>`<option value="${r}">${qe[r].roleLabel}</option>`).join("")}
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
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${F==="groups"}" data-msub="groups">工作组（${ot.length}）</button>
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
                                ${Object.keys(qe).map(r=>`<option value="${r}" ${D===r?"selected":""}>${qe[r].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${ue?"收起邀请":"+ 邀请成员"}
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
                                ${T.map(r=>`
                                    <tr>
                                      <td>
                                        <div style="display:flex; align-items:center; gap:10px;">
                                          <span class="pacom-pop-avatar">${r.displayName.slice(0,1)}</span>
                                          <div>
                                            <div style="font-weight:500;">${r.displayName}</div>
                                            <div class="pacom-row-sub">${r.email}</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${r.roleLabel}</span></td>
                                      <td><span class="pacom-row-sub">${r.scopeSummary}</span></td>
                                      <td>
                                        <span class="pacom-badge ${r.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">
                                          ${r.status==="active"?"正常":r.status}
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
                                ${ot.map(r=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${r.name}</div>
                                      <div class="pacom-row-sub">${r.membersSummary}</div>
                                    </td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${r.defaultRoleLabel}</span></td>
                                    <td><span class="pacom-row-sub">${r.locationScope}</span></td>
                                    <td><strong>${r.memberCount}</strong> 人</td>
                                    <td><span class="pacom-badge pacom-badge--accent">${r.notifyChannel}</span></td>
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
                          <option value="all" ${W==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${W==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${W==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${W==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${ae==="all"}" data-audit-filter="all">全部（${O.length}）</button>
                          <button class="pacom-tab" aria-selected="${ae==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${ae==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${M.map(r=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${r.action}</div>
                                    ${r.detail?`<div class="pacom-row-sub">${r.detail}</div>`:""}
                                  </td>
                                  <td><code style="font-size:12px;">${r.target}</code></td>
                                  <td>${r.actor}</td>
                                  <td><span class="pacom-row-sub">${r.at.slice(0,19).replace("T"," ")}</span></td>
                                  <td>
                                    <span class="pacom-badge ${r.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                                      ${r.result==="success"?"成功":r.result}
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
    `,e.querySelectorAll("[data-atab]").forEach(r=>{r.addEventListener("click",()=>{c=r.dataset.atab,ce="",Z="",ne()})}),e.querySelectorAll("[data-msub]").forEach(r=>{r.addEventListener("click",()=>{F=r.dataset.msub??"directory",ne()})}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{S=!S,ne()}),e.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",r=>{r.preventDefault();const q=new FormData(r.currentTarget),P=String(q.get("wgName")??"").trim(),y=String(q.get("wgRole")??"运行值班员"),k=String(q.get("wgScope")??"").trim();!P||!k||(ot.push({id:`wg-${Date.now()}`,name:P,defaultRoleLabel:y,locationScope:k,memberCount:1,membersSummary:s.displayName,notifyChannel:"站内 + 邮件"}),S=!1,ce=`已创建工作组「${P}」（授权空间：${k}）。`,ne())}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",r=>{r.preventDefault();const q=new FormData(r.currentTarget);H=String(q.get("displayName")??"").trim()||s.displayName,X=String(q.get("jobTitle")??"").trim()||X,ee=String(q.get("phone")??"").trim()||ee,ce=`已更新个人资料：${H}（${X}）· 告警短信接收号 ${ee}。`,ne()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",n()}),e.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(s,null,2)),J=!0,ne(),window.setTimeout(()=>{J=!1,ne()},1600)}catch{}}),e.querySelectorAll("[data-switch-role]").forEach(r=>{r.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const q=await t.switchDemoRole(r.dataset.switchRole);a(q)})}),e.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{ue=!ue,ne()}),e.querySelector("[data-member-search]")?.addEventListener("input",r=>{const q=r.currentTarget,P=q.selectionStart??q.value.length;G=q.value,ne();const y=e.querySelector("[data-member-search]");y&&(y.focus(),y.setSelectionRange(P,P))}),e.querySelector("[data-role-filter]")?.addEventListener("change",r=>{D=r.currentTarget.value,ne()}),e.querySelectorAll("[data-audit-filter]").forEach(r=>{r.addEventListener("click",()=>{ae=r.dataset.auditFilter??"all",ne()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",r=>{W=r.currentTarget.value??"all",ne()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async r=>{r.preventDefault(),Z="";const q=new FormData(r.currentTarget);try{await t.inviteOrgMember(String(q.get("email")??""),String(q.get("role"))),ue=!1,await ie()}catch(P){Z=P instanceof Error?P.message:String(P),ne()}})}ne()}let tt={level:"floor",projectId:m.projectId,buildingId:m.buildingId,floorId:m.floorId};function Ze(){return tt}function at(e){return tt=e,tt}function Ce(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function bt(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面"))return 999;const s=t.match(/(-?\d+)/);if(!s)return 0;const a=Number(s[1]);return t.startsWith("B")?-Math.abs(a):a}function Ot(e){if(e==="all")return{level:"all-projects"};const t=e.split(":");return t[0]==="project"&&t[1]?{level:"project",projectId:t[1]}:t[0]==="building"&&t[1]&&t[2]?{level:"building",projectId:t[1],buildingId:t[2]}:t[0]==="floor"&&t[1]&&t[2]&&t[3]?{level:"floor",projectId:t[1],buildingId:t[2],floorId:t[3]}:{level:"project",projectId:m.projectId}}function Pt(e,t,s){return s==="project"?e.level==="all-projects"?{level:"project",projectId:t.projects[0]?.id??m.projectId}:{level:"project",projectId:e.projectId}:s==="building"&&e.level==="floor"?{level:"building",projectId:e.projectId,buildingId:e.buildingId}:e}function We(e){const{tree:t,session:s,isOpen:a,searchKeyword:n}=e,c=e.maxGranularity??"floor",F=e.activeAlarmCount??0,C=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null,O=t.floors.filter(P=>s.scope.allowedFloorIds.includes(P.id)),G=C||t.projects.length<=1&&t.buildings.length<=1&&O.length<=1?"floors-only":t.projects.length>1?"multi-project":t.buildings.length>1?"single-project-multi-building":"single-building",D=G==="multi-project"&&c!=="project",ae=G==="multi-project"||G==="single-project-multi-building",W=G!=="floors-only"&&c!=="project",ue=c==="project"&&t.projects.length<=1||G==="floors-only"&&O.length<=1,S=Pt(e.scope??tt,t,c),J=S.level==="all-projects"?null:t.projects.find(P=>P.id===S.projectId)??t.projects[0],H=S.level==="building"||S.level==="floor"?t.buildings.find(P=>P.id===S.buildingId):null,X=S.level==="floor"?t.floors.find(P=>P.id===S.floorId):null,ee=[];if(S.level==="all-projects")ee.push(`全部项目（${t.projects.length}）`);else if(S.level==="project")ee.push(Ce(J?.name??"广实2号园"));else if(S.level==="building")J&&ee.push(`<span class="pacom-path-muted">${Ce(J.name)}</span>`),ee.push(Ce(H?.name??"E栋"));else{J&&G!=="floors-only"&&ee.push(`<span class="pacom-path-muted">${Ce(J.name)}</span>`),H&&W&&ee.push(`<span class="pacom-path-muted">${Ce(H.name)}</span>`);const P=!W&&H?`${H.name} ${X?.name??"7F"}`:X?.name??"7F";ee.push(Ce(P))}const ce='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',Z=ue?`<span class="pacom-path-trigger is-static">${ee.join(ce)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${a}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${ee.join(ce)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${be("chevron-down",12)}</span>
      </button>`;if(!a||ue)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${Z}</div>`;const ie=n.trim().toLowerCase(),ne=S.level==="all-projects"?t.projects[0]?.id??m.projectId:S.projectId,ge=S.level==="building"||S.level==="floor"?S.buildingId:t.buildings.find(P=>P.projectId===ne)?.id??m.buildingId,Ie=t.projects.filter(P=>!ie||P.name.toLowerCase().includes(ie)),T=t.buildings.filter(P=>P.projectId===ne&&(!ie||P.name.toLowerCase().includes(ie))),M=[...t.floors.filter(P=>P.buildingId===ge)].sort((P,y)=>bt(y.name)-bt(P.name)).filter(P=>!ie||P.name.toLowerCase().includes(ie)),z=c==="project"||t.projects.length>1,r=c!=="project"&&ae,q=c==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${Z}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${be("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${Ce(n)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${be("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${z?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${D?`<button type="button" class="pacom-space-pop-item ${S.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${t.projects.length}）</span>
                        ${S.level==="all-projects"?be("check",14):""}
                      </button>`:""}
                ${Ie.map(P=>{const y=S.level==="project"&&S.projectId===P.id;return`<button type="button" class="pacom-space-pop-item ${y?"is-active":""}" data-global-space-pick="project:${Ce(P.id)}">
                      <span>${Ce(P.name)}</span>
                      ${y?be("check",14):be("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${r?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ce(t.projects.find(P=>P.id===ne)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${S.level==="project"?"is-active":""}" data-global-space-pick="project:${Ce(ne)}">
                  <span>全园区</span>
                  ${S.level==="project"?be("check",14):""}
                </button>
                ${T.map(P=>{const y=S.level==="building"&&S.buildingId===P.id;return`<button type="button" class="pacom-space-pop-item ${y?"is-active":""}" data-global-space-pick="building:${Ce(P.projectId)}:${Ce(P.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ce(P.name)}</span>
                        ${P.id===m.buildingId&&F>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${y?be("check",14):be("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${q?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ce(t.buildings.find(P=>P.id===ge)?.name??"楼宇")} · 楼层</div>
                ${W?`<button type="button" class="pacom-space-pop-item ${S.level==="building"&&S.buildingId===ge?"is-active":""}" data-global-space-pick="building:${Ce(ne)}:${Ce(ge)}">
                        <span>整栋</span>
                        ${S.level==="building"&&S.buildingId===ge?be("check",14):""}
                      </button>`:""}
                ${M.map(P=>{const y=s.scope.allowedFloorIds.includes(P.id),k=S.level==="floor"&&S.floorId===P.id,p=P.id===m.floorId&&F>0;return`<button type="button" class="pacom-space-pop-item ${k?"is-active":""}" style="${y?"":"opacity:0.5;"}" data-global-space-pick="floor:${Ce(ne)}:${Ce(ge)}:${Ce(P.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ce(P.name)}</span>
                        ${p?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${k?be("check",14):y?P.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function Ge(e,t){e.querySelectorAll("[data-global-space-toggle]").forEach(a=>{a.addEventListener("click",n=>{n.stopPropagation(),t.onToggle()})}),e.querySelector("[data-global-space-search]")?.addEventListener("input",a=>{t.onSearch(a.currentTarget.value)}),e.querySelectorAll("[data-global-space-pick]").forEach(a=>{a.addEventListener("click",n=>{n.stopPropagation();const c=a.dataset.globalSpacePick;if(!c)return;const F=at(Ot(c));t.onPick(F)})})}const Ue={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Nt={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},_t={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Bt(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Vt(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function nt(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function Ut(e,t,s){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),n=a.get("alarm"),c=a.get("wo");let F=await t.getSpatialTree(),C=Ze(),O=!1,G="",D=[],ae=[],W=[],ue=c?"workorders":"alarms",S="all",J="all",H="all",X="impact",ee=!1,ce="",Z=n,ie=c,ne=null,ge=null,Ie="resolved";const T=new Set,M=new Map,z=new Map,r=new Map,q=new Map;let P="",y="";function k(le){const se=q.get(le.id);if(se)return se;const l=le.id.match(/(\d+)$/),w=`WO-2026-${l?l[1]:le.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,Q={estCost:"¥ 450",actualCost:le.status==="closed"?"¥ 380":"--",cmmsNo:w,assigneeGroup:"暖通运维组",tasks:[{id:`${le.id}-t1`,label:"核查设备供电与现场指示灯状态",done:le.status!=="open"},{id:`${le.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:le.status==="resolved"||le.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:le.createdAt?le.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${w}）`}]};return q.set(le.id,Q),Q}async function p(){[D,ae,W]=await Promise.all([t.listAlarms(m.floorId),t.listWorkOrders(m.floorId),t.getFloorDevices(m.floorId).catch(()=>[])]),ae.forEach(le=>k(le)),me()}function E(le){if(!le)return{name:"楼层通用",zone:"E7F",dev:null};const se=W.find(l=>l.id===le)??null;return se?{name:se.name,zone:(se.logicalZoneId?_t[se.logicalZoneId]:void 0)??"E7F",dev:se}:{name:le,zone:"E7F",dev:null}}function re(le){const se=E(le.deviceId).dev;se&&se.connectivity==="offline"?r.set(le.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${se.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):r.set(le.id,{verdict:"pass",summary:`自检通过（PASS）：「${se?.name??le.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),Z=le.id,me()}function me(){const le=D.filter(d=>d.status==="active"&&!M.has(d.id)),se=ae.filter(d=>!k(d).cancelled&&(d.status==="open"||d.status==="assigned"||d.status==="in_progress")),l=D.filter(d=>d.status!=="active").length+z.size,w=0,Q=M.size,he=ce.trim().toLowerCase(),Re=D.filter(d=>{const f=M.has(d.id);if(S==="snoozed"){if(!f)return!1}else if(S==="active"){if(d.status!=="active"||f)return!1}else if(S==="acknowledged"){if(d.status!=="acknowledged")return!1}else if(f)return!1;if(H!=="all"&&d.severity!==H)return!1;if(!he)return!0;const te=E(d.deviceId);return`${d.title} ${d.message} ${te.name} ${te.zone} ${d.deviceId}`.toLowerCase().includes(he)}),Ae=new Map;for(const d of Re){const f=`${d.title} ${d.message}`.toLowerCase(),te=f.includes("离线")||f.includes("modbus")||f.includes("通信"),fe=ee?te?"root-gateway-modbus":d.deviceId:d.id,$e=te?"根因：E7F 主控网关通信链路":`根因：${E(d.deviceId).name}`,je=Ae.get(fe)??{rootLabel:$e,items:[]};je.items.push(d),Ae.set(fe,je)}const ye=Array.from(Ae.values());X==="impact"&&ye.sort((d,f)=>nt(f.items[0]).costYuan-nt(d.items[0]).costYuan);const Se=ae.filter(d=>{const f=k(d);if(J==="cancelled"){if(!f.cancelled)return!1}else if(f.cancelled||J==="open"&&(d.status==="resolved"||d.status==="closed")||J==="resolved"&&d.status!=="resolved"||J==="closed"&&d.status!=="closed")return!1;if(!he)return!0;const te=E(d.deviceId);return`${d.title} ${d.description} ${d.id} ${f.cmmsNo} ${te.name}`.toLowerCase().includes(he)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${We({tree:F,session:s,scope:C,activeAlarmCount:le.length,isOpen:O,searchKeyword:G})}
            </div>

            <div class="pacom-header-meta">
              ${ue==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${ee}" data-toggle-group="1" aria-label="按拓扑根因归并">
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
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ue==="alarms"}" data-main-tab="alarms">实时告警（${D.length-Q}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ue==="workorders"}" data-main-tab="workorders">运维工单（${ae.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ue==="alarms"&&S==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${le.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ue==="workorders"&&J==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${se.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ue==="alarms"&&S==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${l}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${w}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${P?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${P}</span></div>`:""}
          ${y?`<div class="pacom-alert-banner">${y}</div>`:""}

          ${ue==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${ce}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${H==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${H==="critical"?"selected":""}>严重</option>
                      <option value="major" ${H==="major"?"selected":""}>重要</option>
                      <option value="minor" ${H==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${X==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${X==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${S==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${S==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${S==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${S==="snoozed"}" data-status-pill="snoozed">已忽略（${Q}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${T.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${T.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${ye.length} 项</span>
                  </div>
                </div>
                ${ye.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${ye.map(d=>{const f=d.items[0],te=Nt[f.severity]??{label:f.severity,cls:"pacom-badge--neutral"},fe=E(f.deviceId),$e=Vt(f),je=nt(f),De=Z===f.id,Ee=M.get(f.id),Fe=!!Ee,Ne=T.has(f.id),Oe=r.get(f.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${f.id}" data-check-alarm="${f.id}" ${Ne?"checked":""} ${f.status!=="active"||Fe?"disabled":""} aria-label="选择 ${f.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${te.cls}">${te.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${f.title}</span>
                                      ${ee?`<span class="pacom-badge pacom-badge--accent">${d.rootLabel}${d.items.length>1?` · 影响 ${d.items.length} 项`:""}</span>`:""}
                                      ${Oe?`<span class="pacom-badge ${Oe.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${Oe.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${f.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${fe.name}</div>
                                    <div class="pacom-row-sub">${fe.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${je.costLabel}</div>
                                    <div class="pacom-row-sub">${je.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${$e.duration}</div>
                                    <div class="pacom-row-sub" style="color:${$e.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${$e.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${Fe?"pacom-badge--neutral":f.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Fe?`忽略 ${Ee?.duration}`:f.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Fe?`<button class="pacom-btn" data-unsnooze="${f.id}">恢复监控</button>`:`
                                            ${f.status==="active"?`<button class="pacom-btn" data-mark-actioned="${f.id}" ${s.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${f.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${f.id}" ${s.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${f.id}">${De?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${De?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${Bt(f)}
                                            </div>
                                            ${Ee?`<div class="pacom-info-banner">忽略周期：${Ee.duration} · 原因备注：${Ee.reason}</div>`:""}
                                            ${Oe?`
                                                <div class="pacom-banner ${Oe.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${Oe.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${Oe.steps.map(xe=>`<span>${xe}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${f.id}</code> · 设备编号 <code>${f.deviceId}</code> · 关联工单 ${f.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${f.id}">单机自检（FTT）</button>
                                              ${!Fe&&f.status==="active"?`<button class="pacom-btn" data-open-snooze="${f.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${f.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${f.deviceId}">定位设备 →</button>
                                            </div>
                                            ${ne===f.id?`
                                                <form data-snooze-form="${f.id}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
              ${(()=>{const d=ie?ae.find(f=>f.id===ie)??null:null;if(d){const f=E(d.deviceId),te=k(d),fe=!!(te.cancelled||d.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${d.id}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${d.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${te.cmmsNo}</span>
                        ${te.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${d.id}" data-wo-status="${d.id}" aria-label="更新工单状态" ${fe?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map($e=>`<option value="${$e}" ${d.status===$e?"selected":""}>${Ue[$e]}</option>`).join("")}
                          <option value="cancelled" ${te.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${ge===d.id?`
                        <form data-close-wo-form="${d.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${Ue[Ie]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${te.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${te.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${te.actualCost==="--"?"":te.actualCost}" />
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
                          <div class="pacom-row-sub">${d.description}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${te.tasks.map($e=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${$e.id}" data-wo-task="${d.id}" data-task-id="${$e.id}" ${$e.done?"checked":""} ${fe?"disabled":""} />
                                    <span>${$e.label}</span>
                                  </span>
                                  ${$e.unit?`<span class="pacom-row-sub">实测：${$e.reading??"--"} ${$e.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${te.history.map($e=>`<span>• <span class="pacom-row-sub">${$e.at}</span> — ${$e.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${d.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${te.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${f.name}（${f.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${te.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${te.estCost} / 实际 ${te.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${te.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${te.solution??"待完单填写"}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${d.deviceId}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${d.deviceId}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${ce}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${J==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${J==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${J==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${J==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${J==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${Se.length} 条工单</span>
                  </div>
                  ${Se.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${Se.map(f=>{const te=E(f.deviceId),fe=k(f),$e=!!(fe.cancelled||f.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${f.title}</span>
                                        ${fe.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${f.description} · <code>${f.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${te.name}</div>
                                      <div class="pacom-row-sub">${te.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${fe.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${fe.assigneeGroup} · 预估 ${fe.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${f.id}" data-wo-status="${f.id}" aria-label="更新工单状态" ${$e?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(je=>`<option value="${je}" ${f.status===je?"selected":""}>${Ue[je]}</option>`).join("")}
                                          <option value="cancelled" ${fe.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${f.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${ge===f.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${f.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${Ue[Ie]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${fe.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${fe.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${fe.actualCost==="--"?"":fe.actualCost}" />
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
    `,Ge(e,{onToggle:()=>{O=!O,me(),O&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:d=>{G=d,me();const f=e.querySelector("[data-global-space-search]");f&&(f.focus(),f.setSelectionRange(d.length,d.length))},onPick:d=>{C=d,O=!1,me()}}),e.querySelectorAll("[data-main-tab]").forEach(d=>{d.addEventListener("click",()=>{ue=d.dataset.mainTab??"alarms",P="",me()})}),e.querySelectorAll("[data-kpi-filter]").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.kpiFilter;P="",f==="workorders"?(ue="workorders",J=J==="open"?"all":"open"):(f==="active"||f==="acknowledged")&&(ue="alarms",S=S===f?"all":f),me()})}),e.querySelectorAll("[data-status-pill]").forEach(d=>{d.addEventListener("click",()=>{S=d.dataset.statusPill??"all",me()})}),e.querySelectorAll("[data-wo-pill]").forEach(d=>{d.addEventListener("click",()=>{J=d.dataset.woPill??"all",me()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{P="",p()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{ee=!ee,me()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",d=>{H=d.currentTarget.value,me()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",d=>{X=d.currentTarget.value??"impact",me()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",d=>{const f=d.currentTarget,te=f.selectionStart??f.value.length;ce=f.value,me();const fe=e.querySelector("[data-alarm-search]");fe&&(fe.focus(),fe.setSelectionRange(te,te))}),e.querySelectorAll("[data-check-alarm]").forEach(d=>{d.addEventListener("change",()=>{const f=d.dataset.checkAlarm;f&&(d.checked?T.add(f):T.delete(f),me())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{y="";const d=Array.from(T);try{for(const f of d)await t.acknowledgeAlarm(f,"告警中心批量确认"),z.set(f,"批量确认处置");T.clear(),P=`已批量确认 ${d.length} 条告警，未来 24 小时持续校验无复发。`,await p()}catch(f){y=f instanceof Error?f.message:String(f),me()}}),e.querySelectorAll("[data-expand-alarm]").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.expandAlarm??null;Z=Z===f?null:f,ne=null,me()})}),e.querySelectorAll("[data-expand-wo]").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.expandWo??null;ie=ie===f?null:f,me()})}),e.querySelectorAll("[data-run-ftt]").forEach(d=>{d.addEventListener("click",()=>{const f=D.find(te=>te.id===d.dataset.runFtt);f&&re(f)})}),e.querySelectorAll("[data-open-snooze]").forEach(d=>{d.addEventListener("click",()=>{ne=d.dataset.openSnooze??null,me()})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{ne=null,me()}),e.querySelectorAll("[data-snooze-form]").forEach(d=>{d.addEventListener("submit",f=>{f.preventDefault();const te=d.dataset.snoozeForm;if(!te)return;const fe=new FormData(d),$e=String(fe.get("duration")??"24h"),je=String(fe.get("reason")??"").trim()||"现场核查中";M.set(te,{duration:$e,reason:je}),T.delete(te),ne=null,P=`已限时忽略该告警（${$e} · ${je}），可在「已忽略」页签中随时恢复。`,me()})}),e.querySelectorAll("[data-unsnooze]").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.unsnooze;f&&(M.delete(f),P="已恢复该告警的实时监控。",me())})}),e.querySelectorAll("[data-go-ts]").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(f)}`})}),e.querySelectorAll("[data-locate-home]").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.locateHome??"";window.location.hash=f?`#home?device=${encodeURIComponent(f)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(d=>{d.addEventListener("click",async()=>{y="";const f=d.dataset.markActioned;try{await t.acknowledgeAlarm(f,"现场自处理完成（Mark Actioned）"),z.set(f,"现场自处理完成"),T.delete(f),P="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await p()}catch(te){y=te instanceof Error?te.message:String(te),me()}})}),e.querySelectorAll("[data-to-wo]").forEach(d=>{d.addEventListener("click",async()=>{y="";const f=D.find(te=>te.id===d.dataset.toWo);if(f)try{await t.createWorkOrder({floorId:f.floorId,deviceId:f.deviceId,alarmId:f.id,title:`处置告警：${f.title}`,description:f.message}),P=`已将「${f.title}」转为运维工单并同步 CMMS。`,await p()}catch(te){y=te instanceof Error?te.message:String(te),me()}})}),e.querySelectorAll("[data-wo-status]").forEach(d=>{d.addEventListener("change",async()=>{const f=d.dataset.woStatus,te=d.value;if(y="",te==="cancelled"){const fe=ae.find($e=>$e.id===f);if(fe){const $e=k(fe);$e.cancelled=!0,$e.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),P="工单已移入「已取消」分类并锁定编辑。",me()}return}if(te==="resolved"||te==="closed"){ge=f,Ie=te,me();return}try{await t.updateWorkOrderStatus(f,te);const fe=ae.find($e=>$e.id===f);fe&&k(fe).history.unshift({at:"刚刚",text:`状态变更为「${Ue[te]}」`}),P="工单状态已更新并写入审计日志。",await p()}catch(fe){y=fe instanceof Error?fe.message:String(fe),await p()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{ge=null,me()}),e.querySelectorAll("[data-close-wo-form]").forEach(d=>{d.addEventListener("submit",async f=>{f.preventDefault();const te=d.dataset.closeWoForm,fe=new FormData(d),$e=String(fe.get("cause")??"").trim(),je=String(fe.get("solution")??"").trim(),De=String(fe.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(te,Ie);const Ee=ae.find(Fe=>Fe.id===te);if(Ee){const Fe=k(Ee);Fe.cause=$e,Fe.solution=je,De&&(Fe.actualCost=De),Fe.history.unshift({at:"刚刚",text:`流转至「${Ue[Ie]}」· 根因：${$e}`})}ge=null,ie=te,P=`工单已更新为「${Ue[Ie]}」，根因与方案已沉淀归档。`,await p()}catch(Ee){y=Ee instanceof Error?Ee.message:String(Ee),me()}})}),e.querySelectorAll("[data-wo-task]").forEach(d=>{d.addEventListener("change",()=>{const f=ae.find($e=>$e.id===d.dataset.woTask);if(!f)return;const fe=k(f).tasks.find($e=>$e.id===d.dataset.taskId);fe&&(fe.done=d.checked),me()})})}await p()}const Ht=be("chevron-down",12),Xe=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],ht=[{id:m.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:m.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:m.projectId,label:"广实2号园（全园区）",factor:18.2}],Zt={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},Wt=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],_e=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function lt(e,t=""){const s=(e??"").trim().toLowerCase();return!(!s||s.includes("%")||s.includes("°c")||s.includes("ppm")||s.includes("ms")||s.includes("m²")||s.includes("/m2")||s.includes("db")||s.includes("lx")||t.includes("率")||t.includes("均")||t.includes("强度")||t.includes("延迟"))}function Je(e,t){const s=e*t;return Math.abs(s)>=10?Math.round(s):Math.round(s*10)/10}function Gt(e,t){const s=Number(String(e).replaceAll(",","")),a=t??"";return Number.isFinite(s)?a==="kWh"&&Math.abs(s)>=1e4?{value:(s/1e3).toFixed(1),unit:"MWh",title:`精确值：${s.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(s)?s.toLocaleString("en-US"):s.toLocaleString("en-US",{maximumFractionDigits:1}),unit:a,title:`${s.toLocaleString("en-US")} ${a}`.trim()}:{value:e,unit:a,title:`${e} ${a}`.trim()}}function Kt(e,t){if(t===1)return e;const s=lt(e.unit);return{...e,kpis:e.kpis.map(a=>{const n=Number(String(a.value).replaceAll(",",""));return!Number.isFinite(n)||!lt(a.unit,a.label)?a:{...a,value:String(Je(n,t))}}),series:s?e.series.map(a=>({...a,value:Je(a.value,t),...typeof a.baseline=="number"?{baseline:Je(a.baseline,t)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(a=>lt(a.unit)?{...a,value:Je(a.value,t)}:a)}}function Yt(e,t){const s=Math.max(...e.series.map(W=>Math.max(W.value,W.baseline??0)),1),a=46,n=34,c=36,F=Math.max(e.series.length*(a+n)+c*2,620),C=228,O=184,G=132,D=[0,.25,.5,.75,1].map(W=>{const ue=Math.round(O-W*G);return`<line x1="${c-8}" y1="${ue}" x2="${F-18}" y2="${ue}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${W===0?"0":"3 3"}" />`}).join(""),ae=e.series.map((W,ue)=>{const S=c+ue*(a+n),J=Math.max(8,Math.round(W.value/s*G)),H=O-J,X=typeof W.baseline=="number"&&W.value>W.baseline*1.08,ee=X?`<rect x="${S-8}" y="34" width="${a+16}" height="${O-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",ce=typeof W.baseline=="number"?`<line x1="${S-5}" y1="${Math.round(O-W.baseline/s*G)}" x2="${S+a+5}" y2="${Math.round(O-W.baseline/s*G)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",Z=t&&(X||ue===1)?`<g><title>${X?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${S+a/2}" cy="18" r="7" fill="${X?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${S+a/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${X?"!":"S"}</text></g>`:"",ie=W.value>=1e4?`${(W.value/1e3).toFixed(1)}k`:W.value.toLocaleString("en-US");return`
        ${ee}
        ${ce}
        ${Z}
        <g>
          <title>${W.label}：实测 ${W.value.toLocaleString("en-US")} ${e.unit}${W.baseline!==void 0?` / 基线 ${W.baseline.toLocaleString("en-US")} ${e.unit}`:""}</title>
          <rect x="${S}" y="${H}" width="${a}" height="${J}" rx="7" fill="${X?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${S+a/2}" y="${H-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${ie}</text>
        <text x="${S+a/2}" y="${O+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${W.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${F} ${C}" style="width:100%; height:232px; display:block;" role="img" aria-label="${e.category} 趋势图">
      ${D}
      ${ae}
    </svg>
  `}function Xt(e,t){const s=e.connectivity==="offline";if(e.category==="hvac"){const a=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:s?[23.8,24,24.1,null,null,null,null,null]:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a],offline:s,colorIdx:t},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:s?[24,24,24,null,null,null,null,null]:[a,a,a,a,a,a,a,a],offline:s,colorIdx:t+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:s?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:s,colorIdx:t+2}]}if(e.category==="lighting"){const a=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)],offline:s,colorIdx:t},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:s,colorIdx:t+1}]}if(e.category==="sensor"){const a=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a],offline:s,colorIdx:t},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:s,colorIdx:t+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:s,colorIdx:t+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:s,colorIdx:t}]}function Jt(e){const t=e.points.filter(C=>typeof C=="number");if(!t.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const s=Math.min(...t),a=Math.max(...t),n=t.reduce((C,O)=>C+O,0)/t.length,c=e.points[e.points.length-1],F=C=>Math.abs(C)<100&&!Number.isInteger(C)?C.toFixed(1):Math.round(C).toString();return{min:F(s),avg:n.toFixed(Math.abs(n)<100?1:0),max:F(a),curr:typeof c=="number"?F(c):"离线"}}function Qt(e,t,s){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="pacom-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const n=(F,C)=>{const H=[];for(const T of F)for(const M of T.points)typeof M=="number"&&H.push(M);const X=H.length?Math.min(...H)*.92:0,ee=H.length?Math.max(...H)*1.08:100,ce=Math.max(ee-X,1),Z=[0,.5,1].map(T=>{const M=Math.round(26+106*(1-T)),z=(X+ce*T).toFixed(ce<15?1:0);return`
          <line x1="44" y1="${M}" x2="662" y2="${M}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${T===0?"0":"3 3"}" />
          <text x="38" y="${M+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${z}</text>
        `}).join(""),ie=a.map((T,M)=>`<text x="${44+M/(a.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${T}</text>`).join(""),ne=F.map((T,M)=>{const z=_e[(T.colorIdx+M)%_e.length],r=T.points,q=[];let P=44,y=26+106/2,k=!1;r.forEach((E,re)=>{const me=44+re/(r.length-1)*618;if(typeof E=="number"){const le=26+106*(1-(E-X)/ce);q.push(`${me.toFixed(1)},${le.toFixed(1)}`),P=me,y=le}else k=!0});const p=s?r.map((E,re)=>{if(typeof E!="number")return null;const me=44+re/(r.length-1)*618,se=26+106*(1-(E*.96-X)/ce);return`${me.toFixed(1)},${se.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${p?`<polyline fill="none" stroke="${z}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${p}" />`:""}
          ${q.length?`<polyline fill="none" stroke="${z}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${q.join(" ")}" />`:""}
          ${k?`<line x1="${P.toFixed(1)}" y1="${y.toFixed(1)}" x2="662" y2="${y.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${y-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),ge=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,Ie=F.map((T,M)=>{const z=_e[(T.colorIdx+M)%_e.length],r=Jt(T);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${z};"></span>${T.deviceName} · ${T.label}</span></td>
            <td><strong>${r.curr}</strong> <span class="pacom-row-sub">${T.unit}</span></td>
            <td>${r.min} <span class="pacom-row-sub">${T.unit}</span></td>
            <td>${r.avg} <span class="pacom-row-sub">${T.unit}</span></td>
            <td>${r.max} <span class="pacom-row-sub">${T.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${C}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${F.map((T,M)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${_e[(T.colorIdx+M)%_e.length]};"></span>${T.deviceName}·${T.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${Z}
          ${ie}
          ${ge}
          ${ne}
        </svg>
        <div class="pacom-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="pacom-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${Ie}</tbody>
          </table>
        </div>
      </div>
    `};if(t==="shared")return n(e,"单图叠合对比（Shared）");const c=new Map;for(const F of e){const C=c.get(F.unit)??[];C.push(F),c.set(F.unit,C)}return Array.from(c.entries()).map(([F,C])=>n(C,`按单位分组泳道（${F}）`)).join("")}function ea(e){const t=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(c=>[c.label,String(c.value),c.baseline!==void 0?String(c.baseline):""].join(","))],s=new Blob([`\uFEFF${t.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(s),n=document.createElement("a");n.href=a,n.download=`pacom-${e.category}-${e.range}.csv`,n.click(),URL.revokeObjectURL(a)}function ta(e){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],s=["时间",...e.map(C=>`${C.deviceName}·${C.label}(${C.unit})`)].join(","),a=t.map((C,O)=>[C,...e.map(G=>String(G.points[O]??"No Data"))].join(",")),n=new Blob([`\uFEFF${[s,...a].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(n),F=document.createElement("a");F.href=c,F.download="pacom-timeseries-export.csv",F.click(),URL.revokeObjectURL(c)}async function aa(e,t,s){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),n=a.get("tab"),c=a.get("cat"),F=a.get("device"),C=a.get("points"),O=a.get("mode"),G=a.get("interval");let D=n==="timeseries"?"timeseries":c&&Xe.some(se=>se.id===c)?c:"energy",ae="7d",W="2026-11-16",ue="2026-11-23",S=Ze(),J=!1,H="",X=S.level==="all-projects"||S.level==="project"?m.projectId:S.level==="building"?m.buildingId:m.floorId,ee="chart",ce=!0,Z="breakdown",ie=!1,ne=null;const[ge,Ie]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(m.floorId).catch(()=>[])]);let T=Ie;const M=new Map,z=[];T.forEach((se,l)=>{const w=Xt(se,l);M.set(se.id,w),z.push(...w)});let r=O==="shared"||O==="grouped"?O:"grouped",q=G==="15m"||G==="1h"||G==="1d"?G:"1h",P=!1;const y=[];if(C?C.split(",").forEach(se=>{z.some(l=>l.id===se)&&y.push(se)}):F&&M.has(F)&&(M.get(F)??[]).slice(0,2).forEach(se=>y.push(se.id)),!y.length){const se=T.find(Q=>Q.category==="hvac"),l=T.find(Q=>Q.category==="sensor"),w=T.find(Q=>Q.category==="lighting");se&&(M.get(se.id)??[]).slice(0,2).forEach(Q=>y.push(Q.id)),l&&(M.get(l.id)??[]).slice(0,1).forEach(Q=>y.push(Q.id)),w&&(M.get(w.id)??[]).slice(0,1).forEach(Q=>y.push(Q.id)),y.length||z.slice(0,3).forEach(Q=>y.push(Q.id))}const k=new Set(y),p=new Set(T.filter((se,l)=>l<2||(M.get(se.id)??[]).some(w=>k.has(w.id))).map(se=>se.id)),E=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:z.filter(se=>se.pointKey==="temp"||se.pointKey==="setpoint"||se.pointKey==="co2").slice(0,4).map(se=>se.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:z.filter(se=>se.pointKey==="dimming"||se.pointKey==="power").slice(0,4).map(se=>se.id),mode:"grouped",interval:"15m"}];let re="";async function me(){const se=D==="timeseries"?"energy":D,l=ae==="custom"?"30d":ae;ne=await t.getAnalysisReport(se,l,m.floorId),le()}function le(){if(!ne)return;const se=D==="timeseries",l=D==="timeseries"?"energy":D,w=Xe.find(A=>A.id===l)??Xe[0],Q=ht.find(A=>A.id===X)??ht[0],he=Kt(ne,Q.factor),Re=he.zoneBreakdown.filter(A=>A.status==="warning"),Ae=Zt[l],ye=Math.max(...he.zoneBreakdown.map(A=>A.value),1),Se=z.filter(A=>k.has(A.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${We({tree:ge,session:s,scope:S,isOpen:J,searchKeyword:H})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${ae==="today"?"selected":""}>今日</option>
                <option value="7d" ${ae==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${ae==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${ae==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${se?"":`<button class="pacom-btn ${ie?"pacom-btn--primary":""}" data-toggle-canvas="1">${ie?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${Xe.map(A=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D===A.id}" data-cat="${A.id}">${A.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${ae==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${W}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${ue}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${se?`
            <div class="pacom-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${Se.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${E.map(A=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${A.id}">${be("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${A.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${T.map(A=>{const d=M.get(A.id)??[],f=p.has(A.id),te=d.filter(fe=>k.has(fe.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${A.id}" style="cursor:pointer; justify-content:space-between;" title="${A.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${f?"0deg":"-90deg"}); opacity:0.65;">${Ht}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${A.name}</div>
                                <div class="pacom-row-sub">${d.length} 个测点 · ${A.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${te>0?`<span class="pacom-badge pacom-badge--accent">${te}</span>`:""}
                          </button>
                          ${f?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${d.map(fe=>{const $e=k.has(fe.id),je=_e[fe.colorIdx%_e.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${$e?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${fe.id}" data-ts-point="${fe.id}" ${$e?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${je};"></span>
                                            <span style="color:var(--pacom-text-primary);">${fe.label}</span>
                                          </span>
                                          <span class="pacom-row-sub">${fe.unit}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="pacom-subnav-main" style="padding:2px 4px 24px;">
                ${re?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${re}</span></div>`:""}
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${be("clock",12)} 排程(S) · ${be("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
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
                      <button class="pacom-tab" aria-selected="${r==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${r==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${Qt(Se,r,P)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="pacom-kpi-strip" role="region" aria-label="核心统计指标">
                ${he.kpis.map(A=>{const d=Gt(A.value,A.unit);return`
                      <div class="pacom-kpi-cell" title="${d.title}">
                        <span class="pacom-kpi-label">${A.label}</span>
                        <div class="pacom-kpi-value">
                          <span>${d.value}</span>
                          ${d.unit?`<span class="pacom-kpi-unit">${d.unit}</span>`:""}
                        </div>
                        <span class="pacom-kpi-delta">${A.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="pacom-section">
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">${w?.label??"趋势"}趋势（${he.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${Q.label} · 更新于 ${he.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${ce}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${ee==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${ee==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${Re.length>0?`关注：${Re.map(A=>A.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${w?.desc??"空间运行洞察"} · ${Ae.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${ee==="chart"?Yt(he,ce):`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${he.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${he.series.map(A=>{const d=typeof A.baseline=="number"&&A.value>A.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${A.label}</strong></td>
                                    <td>${A.value.toLocaleString("en-US")}</td>
                                    <td>${A.baseline!==void 0?A.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${d?"pacom-badge--warning":"pacom-badge--online"}">${d?"超基线":"正常"}</span></td>
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
                    <span class="pacom-row-sub">${he.zoneBreakdown.length} 个功能区</span>
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
                          ${he.zoneBreakdown.map(A=>{const d=Math.max(8,Math.round(A.value/ye*100));return`
                                <tr>
                                  <td style="font-weight:500;">${A.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${d}%; height:100%; border-radius:999px; background:${A.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${A.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${A.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${A.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${A.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="pacom-section-title">${ie?"E7F 空间对照预览":l==="energy"&&Z==="load"?"峰谷负荷分布（Load Profile）":Ae.title}</h2>
                    ${!ie&&l==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${Z==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${Z==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${ie?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${ie?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${l==="environment"?`
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
                        ${(l==="energy"&&Z==="load"?Wt:Ae.items).map(A=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${A.name}</span>
                                <span class="pacom-row-sub">${A.detail} · <strong style="color:var(--pacom-text-primary);">${A.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,A.pct)}%; height:100%; border-radius:999px; background:${A.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,Ge(e,{onToggle:()=>{J=!J,le(),J&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:A=>{H=A,le();const d=e.querySelector("[data-global-space-search]");d&&(d.focus(),d.setSelectionRange(A.length,A.length))},onPick:A=>{S=A,X=A.level==="all-projects"||A.level==="project"?m.projectId:A.level==="building"?m.buildingId:m.floorId,J=!1,le()}}),e.querySelectorAll("[data-cat]").forEach(A=>{A.addEventListener("click",()=>{D=A.dataset.cat??"energy",re="",D==="timeseries"?le():me()})}),e.querySelector("[data-range-select]")?.addEventListener("change",A=>{ae=A.currentTarget.value??"7d",me()}),e.querySelector("[data-custom-start]")?.addEventListener("change",A=>{W=A.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",A=>{ue=A.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(A=>{A.addEventListener("click",()=>{ee=A.dataset.chartMode??"chart",le()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{ce=!ce,le()}),e.querySelectorAll("[data-energy-right]").forEach(A=>{A.addEventListener("click",()=>{Z=A.dataset.energyRight??"breakdown",le()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{se?ta(Se):ea(he)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{ie=!ie,le()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(A=>{A.addEventListener("click",()=>{const d=A.dataset.tsExpand;d&&(p.has(d)?p.delete(d):p.add(d),le())})}),e.querySelectorAll("[data-ts-point]").forEach(A=>{A.addEventListener("change",()=>{const d=A.dataset.tsPoint;d&&(A.checked?k.add(d):k.delete(d),re="",le())})}),e.querySelectorAll("[data-ts-mode]").forEach(A=>{A.addEventListener("click",()=>{r=A.dataset.tsMode??"grouped",le()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",A=>{q=A.currentTarget.value??"1h",le()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{P=!P,le()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const d=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(k).join(","))}&mode=${r}&interval=${q}`,f=`${window.location.origin}${window.location.pathname}${d}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(f).catch(()=>{}),window.history.replaceState(null,"",d),re=`已复制分享链接（含 ${k.size} 个测点、${r==="grouped"?"按单位分组":"单图叠合"}、${q} 粒度）。`,le()}),e.querySelectorAll("[data-load-fav]").forEach(A=>{A.addEventListener("click",()=>{const d=E.find(f=>f.id===A.dataset.loadFav);d&&(k.clear(),d.pointIds.forEach(f=>{k.add(f);const te=f.split(":")[0];te&&p.add(te)}),r=d.mode,q=d.interval,re=`已加载收藏视图「${d.name}」。`,le())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(k.size===0)return;const A=`自定义对比 #${E.length+1}（${k.size} 测点）`;E.push({id:`fav-${Date.now()}`,name:A,pointIds:Array.from(k),mode:r,interval:q}),re=`已保存当前时序配置为「${A}」。`,le()})}await me()}const sa={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},oa={frozen:"已冻结",draft:"草稿",delivered:"已交付"},na={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},it=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],ft=[{id:"doc-hvac-7f",floorId:m.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:m.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:m.floorId,name:"E7F_协议点位与蓝牙Mesh映射台账.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:m.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],la={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function I(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Qe(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面"))return 999;const s=t.match(/(-?\d+)/);if(!s)return 0;const a=Number(s[1]);return t.startsWith("B")?-Math.abs(a):a}function yt(e){const t=e.toUpperCase();if(t.match(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/))return"RF";const a=t.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(a)return`B${Number(a[1])}`;const n=t.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return n?`${Number(n[1])}F`:null}function ct(e){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>typeof a.result=="string"?t(a.result):s(new Error("无法读取图片内容")),a.onerror=()=>s(new Error(`读取文件「${e.name}」失败`)),a.readAsDataURL(e)})}function ia(e){return e.category==="gateway"?e.name.includes("蓝牙")?"蓝牙适配器":"主控网关":e.category==="lighting"?e.name.includes("702")?"702 照明":e.name.slice(0,6):e.category==="hvac"?e.name.includes("VAV")?"VAV-02":e.name.includes("FCU")?"FCU-01":e.name.slice(0,6):e.category==="sensor"?"环境传感":e.name.slice(0,6)}function ca(e,t){const s=e.status!=="connected",a=t.filter(n=>n.hardwareBinding?.protocol===e.protocol);return a.length>0?a.map(n=>{const c=n.connectivity==="offline"||s;return{pointName:n.category==="hvac"?"送风温度 / 阀门开度":n.category==="lighting"?"回路开关 / 亮度反馈":n.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:n.name,value:c?"无上报":n.category==="hvac"?"23.4°C · 62%":n.category==="lighting"?"开启 · 80%":n.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:c?"46 分钟前":"12 秒前",quality:c?n.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${e.protocol.toUpperCase()} 采集通道汇总点`,deviceName:e.name,value:s?"采样延迟":"正常上报",interval:"60s",lastSeen:s?"38 分钟前":"9 秒前",quality:s?"delayed":"online"}]}async function ra(e,t,s){const a=new URLSearchParams(window.location.hash.split("?")[1]??"").get("sec");let n=a==="floors"||a==="projects"?"project_config":a==="floorplan"||a==="devices"?"floorplan":a==="inventory"?"ledger":a==="connections"?"connections":"overview",c=a==="floors"?"floor_zones":"project_building",F="",C="all",O=Ze(),G=!1,D="",ae="device",W="all",ue="",S=!1,J=!1,H="mesh",X=1,ee=0,ce=0,Z=await t.getSpatialTree(),ie=[],ne=[],ge=[];const Ie={...la},T=[];let M=O.level==="all-projects"?Z.projects[0]?.id??m.projectId:O.projectId,z=O.level==="building"||O.level==="floor"?O.buildingId:Z.buildings.find(x=>x.projectId===M)?.id??Z.buildings[0]?.id??m.buildingId,r=O.level==="floor"?O.floorId:Z.floors.find(x=>x.buildingId===z&&x.id===m.floorId)?.id??Z.floors.find(x=>x.buildingId===z)?.id??m.floorId,q="all",P=!1,y=!1,k=null,p=!1,E=!1,re=!1,me=!1,le=!1,se=null,l=null,w=null,Q=3,he=!1,Re=[],Ae=null,ye="",Se="";const A=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),d=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],f=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:m.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:m.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:m.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:m.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],te=new Map;function fe(){return Z}function $e(){return Z.floors}function je(x){return[...Z.floors.filter(N=>N.buildingId===x)].sort((N,o)=>Qe(o.name)-Qe(N.name))}function De(){return Z.zones}function Ee(x){return[...x===m.floorId?ie:[],...T.filter(o=>o.floorId===x)]}function Fe(x){return x?De().find(N=>N.id===x)?.name.replace(/^7F\s*/,"")??x:"未分配功能区"}function Ne(x){const N=Z.buildings.find(i=>i.id===x);if(!N)return;M=N.projectId,z=N.id;const o=je(N.id);o.some(i=>i.id===r)||(r=o.find(i=>i.id===m.floorId)?.id??o[0]?.id??""),O=at(r?{level:"floor",projectId:N.projectId,buildingId:N.id,floorId:r}:{level:"building",projectId:N.projectId,buildingId:N.id}),k=null,J=!1,E=!1,X=1,ee=0,ce=0}function Oe(x){r=x;const N=$e().find(o=>o.id===x);if(N){z=N.buildingId;const o=Z.buildings.find(i=>i.id===N.buildingId);o&&(M=o.projectId),O=at({level:"floor",projectId:M,buildingId:N.buildingId,floorId:N.id})}k=null,J=!1,E=!1,X=1,ee=0,ce=0}async function xe(){Se="";const[x,N,o,i]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(m.floorId).catch(()=>[]),t.listConnections(M),t.listDeliveryBatches(m.floorId)]);Z=x,ie=N,ne=o,ge=i,!Z.projects.some(g=>g.id===M)&&Z.projects[0]&&(M=Z.projects[0].id),Z.buildings.some(g=>g.id===z)||(z=Z.buildings.find(g=>g.projectId===M)?.id??Z.buildings[0]?.id??z);const b=je(z);b.some(g=>g.id===r)||(r=b.find(g=>g.id===m.floorId)?.id??b[0]?.id??"");const u=Ee(r);k&&!u.some(g=>g.id===k)&&(k=null,J=!1),p=u.find(g=>g.id===k)?.physicalInstalled??!1,oe()}function He(){const x=e.querySelector('[data-role="dep-viewport"]');x&&(x.style.transform=`translate(${ee}px, ${ce}px) scale(${X})`);const N=e.querySelector('[data-role="dep-zoom-label"]');N&&(N.textContent=`${Math.round(X*100)}%`)}function L(x){Se="",x.connectivity==="offline"?Se=`单机回读自检未通过（FAIL）：「${x.name}」当前离线，请核查网关链路或中继覆盖。`:ye=`单机回读自检通过（PASS）：「${x.name}」指令下发与状态回读一致，已安全复位。`,oe()}function Y(){Se="";const x=Ee(r),N=x.filter(u=>u.connectivity==="offline"),o=x.length-N.length,i=new Date;Ae={ranAt:`${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}:${String(i.getSeconds()).padStart(2,"0")}`,total:x.length,passed:o,failed:N.length,failedNames:N.map(u=>u.name)},N.length>0?Se=`全层批量自检完成：${o}/${x.length} 台通过，${N.length} 台异常（${N.map(u=>u.name).join("、")}）。`:ye=`全层批量自检全部通过（${o}/${x.length}），设备已自动安全复位。`,oe()}function _(){const x=Ee(r),N=[],o=x.filter(g=>g.connectivity==="offline"),i=x.filter(g=>!g.planPoint),b=x.filter(g=>A.get(g.id)?.proxy).length,u=x.filter(g=>A.get(g.id)?.relay).length,B=x.length?u/x.length:0;o.length>0?o.forEach(g=>N.push({level:"fail",title:`节点不可达：${g.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:g.id})):N.push({level:"ok",title:"全网节点可达性正常",detail:`${x.length} 台设备均正常响应心跳。`}),b<1?N.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):N.push({level:"ok",title:`代理节点配置合理（${b} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),B>.25&&x.length>=4&&N.push({level:"warn",title:`中继比例偏高（${Math.round(B*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),i.length>0&&N.push({level:"warn",title:`尚有 ${i.length} 台未完成图纸标点`,detail:"请在「图纸标点」中补齐坐标以便施工定位。"}),Re=N,ye=`已完成蓝牙 Mesh 网络体检（检测 ${x.length} 台节点，发现 ${N.filter(g=>g.level!=="ok").length} 项关注）。`,oe()}function h(){const x=Ee(r),N=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...x.map(u=>[u.name,u.category,Fe(u.logicalZoneId),u.planPoint?`${Math.round(u.planPoint.x*100)}%/${Math.round(u.planPoint.y*100)}%`:"未标点",u.hardwareBinding?`${u.hardwareBinding.protocol} ${u.hardwareBinding.networkAddress}`:"未绑定",u.physicalInstalled?"已复核":"待复核",u.connectivity==="online"?"在线":"离线"].join(","))],o=new Blob([`\uFEFF${N.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(o),b=document.createElement("a");b.href=i,b.download="pacom-deployment-inventory.csv",b.click(),URL.revokeObjectURL(i)}const $={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。"},project_config:{title:"项目配置",subtitle:"维护项目地理坐标、楼宇实景图、批量楼层及各层 2D 平面底图与功能区。"},floorplan:{title:"设备标记",subtitle:"在 2D 平面底图上完成设备标记、回路灯点与硬件复核。"},ledger:{title:"设备列表",subtitle:"核查全层四态设备清单，统一下发人感/光感参数并执行单机或全层自检。"},groups:{title:"设备分组",subtitle:"统一管理端侧蓝牙 Mesh 自治联动组与云端业务分组。"},network_topo:{title:"设备网络",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。"},connections:{title:"系统接入",subtitle:"管理边缘网关服务与暖通、电表、环境等异构子系统通道及传感器采集质量。"}};function K(){const x=(N,o,i)=>`
      <button type="button" class="pacom-unified-item" aria-current="${n===N}" data-dep-nav="${N}">
        ${be(o,16)}
        <span>${i}</span>
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
    `}function R(x){return n==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出台账</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${x?"":"disabled"}>+ 交付冻结</button>
      `:n==="floorplan"?'<button type="button" class="pacom-btn" data-export-inv="1">导出施工标点表</button>':n==="ledger"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':n==="groups"?`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1" ${x?"":"disabled"}>${le?"收起表单":"+ 新建分组"}</button>`:n==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${x?"":"disabled"}>${he?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:n==="connections"?`
        <button type="button" class="pacom-btn" data-edge-restart="service" ${x?"":"disabled"}>重启边缘服务</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-conn="1" ${x?"":"disabled"}>${me?"收起向导":"+ 新增接入通道"}</button>
      `:`<span class="pacom-badge ${x?"pacom-badge--online":"pacom-badge--warning"}">${x?"可编辑":"只读"}</span>`}function ve(){const x=je(z),N=x.filter(g=>!!g.plan).length,o=x.flatMap(g=>Ee(g.id)),i=o.filter(g=>!!g.planPoint).length,b=o.filter(g=>g.connectivity==="online").length,u=o.filter(g=>g.physicalInstalled).length,B=x.filter(g=>Ee(g.id).length>0&&!he).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" data-proj-sub="floor_zones" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${N===x.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 空间与底图</span>
          <div class="pacom-kpi-value">${N}<span class="pacom-kpi-unit">/ ${x.length} 层</span></div>
          <span class="pacom-kpi-delta">${N===x.length?"全部底图就绪":`尚缺 ${x.length-N} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${i===o.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${i}<span class="pacom-kpi-unit">/ ${o.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${d.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${b===o.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${b}<span class="pacom-kpi-unit">/ ${o.length} 台</span></div>
          <span class="pacom-kpi-delta">${o.length-b>0?`${o.length-b} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${he?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${B}<span class="pacom-kpi-unit">/ ${x.length} 层</span></div>
          <span class="pacom-kpi-delta">${he?"有变更待下发 →":`基线 v${Q}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="ledger" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${u===o.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${u}<span class="pacom-kpi-unit">/ ${o.length} 台</span></div>
          <span class="pacom-kpi-delta">${u===o.length?"可交付冻结":`待复核 ${o.length-u} 台 →`}</span>
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
                ${x.map(g=>{const v=Ee(g.id),de=De().filter(Ve=>Ve.floorId===g.id),j=v.filter(Ve=>!!Ve.planPoint).length,U=v.filter(Ve=>Ve.connectivity==="online").length,Le=v.filter(Ve=>Ve.physicalInstalled).length,Be=!!g.plan,mt=Be&&v.length>0&&j===v.length&&Le===v.length&&U===v.length&&!he;return`
                      <tr>
                        <td><strong>${I(g.name)}</strong><div class="pacom-row-sub">${g.areaSqm?`${g.areaSqm} m²`:"待补面积"}</div></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-proj-sub="floor_zones" data-matrix-floor="${I(g.id)}"><span class="pacom-dot ${Be?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${Be?`已传图 · ${de.length} 区`:"待传底图"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="floorplan" data-matrix-floor="${I(g.id)}"><span class="pacom-dot ${v.length>0&&j===v.length?"pacom-dot--online":v.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${v.length>0?`${j}/${v.length}`:"未标点"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${I(g.id)}"><span class="pacom-dot ${v.length>0&&U===v.length?"pacom-dot--online":v.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${v.length>0?`${U}/${v.length}`:"—"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${I(g.id)}"><span class="pacom-dot ${v.length===0?"pacom-dot--offline":he?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${v.length===0?"—":he?"待同步":`v${Q}`}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="ledger" data-matrix-floor="${I(g.id)}"><span class="pacom-dot ${v.length>0&&Le===v.length?"pacom-dot--online":v.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${v.length>0?`${Le}/${v.length}`:"—"}</span></button></td>
                        <td style="text-align:right;"><span class="pacom-badge ${mt?"pacom-badge--online":v.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${mt?"可验收交付":v.length>0?"实施中":"待配置"}</span></td>
                      </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${Ae?`<div class="pacom-banner ${Ae.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${Ae.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${Ae.passed}/${Ae.total} 台${Ae.failedNames.length?` · 异常：${Ae.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${ge.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${ge.map(g=>`
                    <tr>
                      <td><div style="font-weight:450;">${I(g.versionTag)}</div><div class="pacom-row-sub"><code>${I(g.id)}</code></div></td>
                      <td><strong>${g.verifiedCount}</strong> / ${g.deviceCount} 台</td>
                      <td><div>${I(g.frozenBy)}</div><div class="pacom-row-sub">${I(g.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${oa[g.status]??g.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function we(x){const N=Z.projects.find(u=>u.id===M)??Z.projects[0],o=Z.buildings.filter(u=>!N||u.projectId===N.id),i=o.find(u=>u.id===z)??o[0],b=N?.location?`${N.location.lng}, ${N.location.lat}`:"113.3824, 23.0652";return`
      <div style="width:100%; display:flex; flex-direction:column; gap:24px;">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">项目基础信息</h2>
            <span class="pacom-badge pacom-badge--accent">经纬度驱动气象与能耗基准</span>
          </div>
          <form class="pacom-settings-card" data-save-project="${I(N?.id??m.projectId)}">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta"><span class="pacom-setting-title">项目名称与城市</span><span class="pacom-setting-desc">保存后同步更新全局导航、空间总览与报表口径</span></div>
              <div class="pacom-setting-control"><input class="pacom-input" name="pName" value="${I(N?.name??"广实2号园")}" style="width:180px;" ${x?"":"disabled"} /><input class="pacom-input" name="pCity" value="${I(N?.city??"广州市")}" style="width:120px;" ${x?"":"disabled"} /></div>
            </div>
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta"><span class="pacom-setting-title">详细地址与地理坐标</span><span class="pacom-setting-desc">自动匹配周边气象站实况温度与湿度（经度, 纬度）</span></div>
              <div class="pacom-setting-control"><input class="pacom-input" name="pAddr" value="${I(N?.address??"")}" style="width:220px;" ${x?"":"disabled"} /><input class="pacom-input" name="pLngLat" value="${I(b)}" style="width:160px;" ${x?"":"disabled"} /></div>
            </div>
            <div class="pacom-setting-row" style="justify-content:flex-end;">
              <button type="submit" class="pacom-btn pacom-btn--primary" ${x?"":"disabled"}>保存项目信息</button>
            </div>
          </form>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <div>
              <h2 class="pacom-section-title">园区楼宇列表（${o.length} 栋）</h2>
              <span class="pacom-row-sub">点击楼宇卡片即可切换编辑对象，无需反复切顶栏</span>
            </div>
            <button type="button" class="pacom-btn" data-toggle-new-bld="1" ${x?"":"disabled"}>${P?"收起表单":"+ 新建楼宇"}</button>
          </div>
          ${P?`
              <form class="pacom-settings-card" data-create-bld="${I(N?.id??m.projectId)}">
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
            ${o.map(u=>{const B=je(u.id),g=B.filter(de=>!!de.plan).length;return`
                  <button type="button" class="dep-building-card ${i?.id===u.id?"is-active":""}" data-pick-building="${I(u.id)}">
                    <img class="dep-building-thumb" src="${I(u.imageUrl??"./media/building-e.png")}" alt="${I(u.name)}" />
                    <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
                      <div style="display:flex; align-items:center; gap:6px;">
                        <span style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">${I(u.name)}</span>
                        <span class="pacom-badge ${B.length>0&&g===B.length?"pacom-badge--online":"pacom-badge--warning"}">${g}/${B.length} 底图</span>
                      </div>
                      <span class="pacom-row-sub">地上 ${u.aboveFloors} 层${u.belowFloors>0?` · 地下 ${u.belowFloors} 层`:""}${u.hasRoof?" · RF":""}</span>
                      <span class="pacom-row-sub">${u.areaSqm?`${u.areaSqm} m²`:"待补面积"}</span>
                    </div>
                  </button>`}).join("")}
          </div>
        </section>

        ${i?`
            <section class="pacom-section">
              <div class="pacom-section-head">
                <h2 class="pacom-section-title">楼宇参数与白模实景图：${I(i.name)}</h2>
                <button type="button" class="pacom-btn" data-proj-sub-tab="floor_zones">管理本栋 ${je(i.id).length} 个楼层与图纸 →</button>
              </div>
              <div class="pacom-settings-card">
                <form class="pacom-setting-row" style="gap:10px;" data-save-building="${I(i.id)}">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">楼宇名称、建筑面积与层数结构</span>
                    <span class="pacom-setting-desc">修改后立即同步至空间总览与下方批量生层默认值</span>
                  </div>
                  <div class="pacom-setting-control" style="flex-wrap:wrap;">
                    <input class="pacom-input" name="bName" value="${I(i.name)}" style="width:110px;" ${x?"":"disabled"} />
                    <input class="pacom-input" name="bArea" type="number" step="0.1" value="${I(i.areaSqm??"")}" placeholder="面积 m²" style="width:116px;" ${x?"":"disabled"} />
                    <input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${i.aboveFloors}" style="width:68px;" title="地上层数" ${x?"":"disabled"} />
                    <span class="pacom-row-sub">地上</span>
                    <input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${i.belowFloors}" style="width:62px;" title="地下层数" ${x?"":"disabled"} />
                    <span class="pacom-row-sub">地下</span>
                    <label style="display:inline-flex; align-items:center; gap:5px; font-size:14px;"><input type="checkbox" name="bRoof" ${i.hasRoof?"checked":""} ${x?"":"disabled"} />RF</label>
                    <button type="submit" class="pacom-btn pacom-btn--primary" ${x?"":"disabled"}>保存楼宇</button>
                  </div>
                </form>
                <div class="pacom-setting-row" style="display:grid; grid-template-columns:minmax(0,1.2fr) minmax(240px,1fr); gap:16px; align-items:center;">
                  <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle); padding:8px;">
                    <img src="${I(i.imageUrl??"./media/building-e.png")}" alt="${I(i.name)}" style="width:100%; max-height:240px; object-fit:contain; display:block;" />
                  </div>
                  <div class="dep-upload-drop">
                    <strong style="font-size:14px; font-weight:450;">替换 ${I(i.name)} 白模 / 实景图</strong>
                    <span class="pacom-row-sub">支持透明 PNG / WebP / JPG，用于空间总览整栋视图</span>
                    <label class="pacom-btn" style="cursor:pointer;">
                      <span>选择本地图片</span>
                      <input type="file" accept="image/*" data-upload-bld="${I(i.id)}" style="display:none;" ${x?"":"disabled"} />
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section class="pacom-section">
              <div class="pacom-section-head">
                <h2 class="pacom-section-title">一键批量补齐楼层（自动初始化 1 层 1 蓝牙 Mesh 网络）</h2>
                <span class="pacom-row-sub">默认已按 ${I(i.name)} 层数预设，已存在楼层自动跳过</span>
              </div>
              <form class="pacom-settings-card" data-batch-floors="${I(i.id)}">
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">起止楼层范围</span>
                    <span class="pacom-setting-desc">当前已配置 ${je(i.id).length} 层；缺失楼层将自动补齐</span>
                  </div>
                  <div class="pacom-setting-control">
                    <input class="pacom-input" name="fromFloor" type="number" min="1" max="80" value="1" style="width:72px;" ${x?"":"disabled"} />
                    <span class="pacom-row-sub">F 至</span>
                    <input class="pacom-input" name="toFloor" type="number" min="1" max="80" value="${Math.max(1,i.aboveFloors)}" style="width:72px;" ${x?"":"disabled"} />
                    <span class="pacom-row-sub">F</span>
                    <label style="display:inline-flex; align-items:center; gap:5px; font-size:14px; margin-left:6px;"><input type="checkbox" name="includeB1" ${i.belowFloors>0?"checked":""} ${x?"":"disabled"} />B1</label>
                    <label style="display:inline-flex; align-items:center; gap:5px; font-size:14px;"><input type="checkbox" name="includeRF" ${i.hasRoof?"checked":""} ${x?"":"disabled"} />RF</label>
                    <button type="submit" class="pacom-btn pacom-btn--primary" ${x?"":"disabled"}>批量补齐</button>
                  </div>
                </div>
              </form>
            </section>`:""}
      </div>
    `}function ke(x){const N=Z.projects.find(U=>U.id===M)??Z.projects[0],o=Z.buildings.filter(U=>!N||U.projectId===N.id),i=o.find(U=>U.id===z)??o[0],b=i?je(i.id):[],u=b.filter(U=>!U.plan).length,B=b.filter(U=>De().filter(Le=>Le.floorId===U.id).length===0).length,g=b.filter(U=>q==="missing_plan"?!U.plan:q==="missing_zone"?De().filter(Le=>Le.floorId===U.id).length===0:!0),v=g.find(U=>U.id===r)??b.find(U=>U.id===r)??g[0],de=v?De().filter(U=>U.floorId===v.id):[],j=v?ft.filter(U=>U.floorId===v.id):[];return`
      <div style="width:100%; display:flex; flex-direction:column; gap:20px;">
        <div class="dep-upload-drop" style="padding:14px 16px;">
          <div style="display:flex; flex-direction:column; gap:2px;">
            <strong style="font-size:14px; font-weight:450;">一键批量匹配上传 ${I(i?.name??"")} 平面底图</strong>
            <span class="pacom-row-sub">支持一次多选整栋图纸（如 Building-E-01F…22F / RF），按文件名自动匹配并绑定到对应楼层</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span class="pacom-badge ${u===0?"pacom-badge--online":"pacom-badge--warning"}">已就绪 ${b.length-u}/${b.length} 层</span>
            <label class="pacom-btn pacom-btn--primary" style="cursor:pointer;">
              <span>批量选择多张图纸</span>
              <input type="file" accept="image/*" multiple data-batch-upload-floors="${I(i?.id??"")}" style="display:none;" ${x?"":"disabled"} />
            </label>
          </div>
        </div>

        <div class="dep-floor-workbench">
          <div class="dep-floor-list-card">
            <div class="dep-floor-list-head">
              <div style="display:flex; align-items:center; justify-content:space-between; gap:6px;">
                <select class="pacom-select" style="flex:1; height:30px; font-size:13px;" data-switch-bld-select aria-label="切换楼宇">
                  ${o.map(U=>`<option value="${I(U.id)}" ${U.id===i?.id?"selected":""}>${I(U.name)}（${je(U.id).length} 层）</option>`).join("")}
                </select>
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-floor="1" ${x?"":"disabled"}>${y?"收起":"+ 新增"}</button>
              </div>
              ${y&&i?`
                  <form data-create-floor="${I(i.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:4px;">
                    <div style="display:flex; gap:6px;">
                      <input class="pacom-input" name="fName" placeholder="楼层名（如 23F / B1）" style="height:30px; font-size:13px;" required />
                      <input class="pacom-input" name="fArea" type="number" step="0.1" placeholder="面积 m²" style="width:92px; height:30px; font-size:13px;" />
                    </div>
                    <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">确认新增楼层</button>
                  </form>`:""}
              <div style="display:flex; gap:4px; flex-wrap:wrap;">
                <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${q==="all"}" data-floor-list-filter="all">全部 ${b.length}</button>
                <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${q==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 ${u}</button>
                <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${q==="missing_zone"}" data-floor-list-filter="missing_zone">缺分区 ${B}</button>
              </div>
            </div>
            <div class="dep-floor-list-scroll">
              ${g.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">当前筛选无匹配楼层</div>':g.map(U=>{const Le=De().filter(Be=>Be.floorId===U.id).length;return`
                          <button type="button" class="dep-floor-row ${v?.id===U.id?"is-active":""}" data-pick-floor-pill="${I(U.id)}">
                            <span style="display:inline-flex; align-items:center; gap:7px; min-width:0;">
                              <span class="pacom-dot ${U.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                              <span>${I(U.name)}</span>
                            </span>
                            <span class="pacom-row-sub">${U.areaSqm?`${U.areaSqm} m²`:"待补面积"} · ${Le} 区</span>
                          </button>`}).join("")}
            </div>
          </div>

          <div class="dep-floor-detail">
            ${v?`
                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                      <h2 class="pacom-section-title">${I(i?.name??"")} ${I(v.name)} · 底图与基础属性</h2>
                      <span class="pacom-badge ${v.plan?"pacom-badge--online":"pacom-badge--warning"}">${v.plan?"2D 底图就绪":"待传底图"}</span>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                      <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-floor="${I(v.id)}" ${!x||v.id===m.floorId?'disabled title="已绑定运行设备的楼层不可直接删除"':""}>删除楼层</button>
                      <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-dep-nav="floorplan">进入图纸标点 →</button>
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    <form class="pacom-setting-row" style="gap:10px;" data-save-floor="${I(v.id)}">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">楼层名称与建筑面积</span>
                        <span class="pacom-setting-desc">用于单位面积能耗（EUI）计算与空间标高展示</span>
                      </div>
                      <div class="pacom-setting-control">
                        <input class="pacom-input" name="fName" value="${I(v.name)}" style="width:96px;" ${x?"":"disabled"} />
                        <input class="pacom-input" name="fArea" type="number" step="0.1" value="${I(v.areaSqm??"")}" placeholder="面积 m²" style="width:116px;" ${x?"":"disabled"} />
                        <button type="submit" class="pacom-btn pacom-btn--sm" ${x?"":"disabled"}>保存本层</button>
                      </div>
                    </form>
                    <div class="pacom-setting-row" style="display:grid; grid-template-columns:minmax(0,1.45fr) minmax(210px,1fr); gap:16px; align-items:center;">
                      <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); min-height:200px; display:flex; align-items:center; justify-content:center; border:var(--hw) solid var(--pacom-border-subtle); padding:8px;">
                        ${v.plan?`<img src="${I(v.plan.imageUrl)}" alt="${I(v.name)} 平面图" style="width:100%; max-height:280px; object-fit:contain; display:block;" />`:'<span class="pacom-row-sub">暂未上传 2D 平面底图</span>'}
                      </div>
                      <div class="dep-upload-drop">
                        <strong style="font-size:14px; font-weight:450;">${v.plan?"替换本层 2D 平面底图":"上传本层 2D 平面底图"}</strong>
                        <span class="pacom-row-sub">支持透明白模 PNG / WebP，上传后立即同步至空间总览与设备标记</span>
                        <label class="pacom-btn" style="cursor:pointer;">
                          <span>选择单张平面图</span>
                          <input type="file" accept="image/*" data-upload-floor="${I(v.id)}" style="display:none;" ${x?"":"disabled"} />
                        </label>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">本层功能区清单（${de.length}）</h2>
                    ${de.length>0&&b.length>1?`<button type="button" class="pacom-btn pacom-btn--sm" data-copy-zones="${I(v.id)}" ${x?"":"disabled"}>复用至本栋空白标准层</button>`:'<span class="pacom-row-sub">用于空间热区、区域快控与分项统计</span>'}
                  </div>
                  <div class="pacom-settings-card">
                    ${de.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂未划分功能区，可在下方添加，或从 7F 等标准层一键复用。</span></div>':de.map(U=>`
                              <div class="pacom-setting-row">
                                <div class="pacom-setting-meta">
                                  <span class="pacom-setting-title">${I(U.name)} <span class="pacom-badge pacom-badge--neutral">${I(na[U.category]??U.category)}</span></span>
                                </div>
                                <div class="pacom-setting-control">
                                  <span class="pacom-row-sub">${Ee(v.id).filter(Le=>Le.logicalZoneId===U.id).length} 台设备</span>
                                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${I(U.id)}" ${x?"":"disabled"}>删除</button>
                                </div>
                              </div>`).join("")}
                    <form class="pacom-setting-row" style="gap:8px;" data-add-zone="${I(v.id)}">
                      <input class="pacom-input" name="zoneName" placeholder="输入新功能区名称（如：${I(v.name)} 东侧实验区）" required ${x?"":"disabled"} />
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
                    <span class="pacom-row-sub">共 ${j.length} 份关联文档</span>
                  </div>
                  <div class="pacom-table-card">
                    <div class="pacom-table-wrap">
                      <table class="pacom-table">
                        <thead><tr><th>文档名称</th><th>类型</th><th>关联范围</th><th style="text-align:right;">操作</th></tr></thead>
                        <tbody>
                          ${j.length===0?`<tr><td colspan="4"><div class="pacom-empty-state" style="padding:24px 16px;"><strong>${I(i?.name??"")} ${I(v.name)} 暂未关联竣工文档</strong><span>当前已完成 4K 白模平面底图核对，后续可按需挂载暖通/强电竣工图纸。</span></div></td></tr>`:j.map(U=>`
                                    <tr>
                                      <td><div style="font-weight:450;">${U.name}</div><div class="pacom-row-sub">${U.size} · ${U.updatedAt}</div></td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${U.category}</span></td>
                                      <td><span class="pacom-row-sub">${U.boundScope}</span></td>
                                      <td style="text-align:right;"><button type="button" class="pacom-btn" data-preview-doc="${U.id}">查阅</button></td>
                                    </tr>`).join("")}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>`:'<div class="pacom-empty-state"><strong>当前楼宇暂无楼层</strong><span>请先在左侧点击「+ 新增」或返回「项目与楼宇」一键批量生成楼层。</span></div>'}
          </div>
        </div>
      </div>
    `}function pe(x){const N=je(z),o=N.find(j=>j.id===r)??N[0],i=Ee(r),b=De().filter(j=>j.floorId===r),u=J?i.find(j=>j.id===k)??null:null,B=u?A.get(u.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${r.slice(-4)}`}:null,g=u?d.filter(j=>j.deviceId===u.id):[],v=ue.trim().toLowerCase(),de=i.filter(j=>!(W==="unverified"&&j.physicalInstalled||W==="unplaced"&&j.planPoint||v&&!`${j.name} ${Fe(j.logicalZoneId)}`.toLowerCase().includes(v)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${be("search",16)}
            <input class="pacom-hud-input" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${I(ue)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${S?"is-active":""}" data-toggle-hud-pool="1">设备池 ${i.length}</button>
            <button type="button" class="pacom-hud-pill" data-toggle-new-dev="1" ${x?"":"disabled"}>+ 标点</button>
          </div>

          ${S||re?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${re?"新增设备标点":`${I(o?.name??"7F")} 设备池（${de.length}）`}</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${be("x",16)}</button>
                </div>
                ${re?`
                    <form data-create-dev="1" style="padding:12px; display:flex; flex-direction:column; gap:8px;">
                      <input class="pacom-input" name="devName" placeholder="设备名称（如：703 会议室三控面板）" required />
                      <select class="pacom-select" name="devPreset">${it.map(j=>`<option value="${j.key}">${j.label}</option>`).join("")}</select>
                      <select class="pacom-select" name="devZone">${b.map(j=>`<option value="${I(j.id)}">${I(j.name)}</option>`).join("")}</select>
                      <button type="submit" class="pacom-btn pacom-btn--primary">加入图纸并预设 Mesh 角色</button>
                    </form>`:`
                    <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                      <div class="pacom-count-pills">
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${W==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${i.length}</span></button>
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${W==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${i.filter(j=>!j.physicalInstalled).length}</span></button>
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${W==="unplaced"}" data-dev-filter="unplaced">未标点 <span class="pacom-count-num">${i.filter(j=>!j.planPoint).length}</span></button>
                      </div>
                    </div>
                    <div class="pacom-list" style="padding:6px;">
                      ${de.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':de.map(j=>`
                                <div class="pacom-row ${j.id===k&&J?"is-selected":""}" data-pick-dev="${I(j.id)}" style="padding:8px;">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${I(j.name)}</div>
                                    <div class="pacom-row-sub">${I(Fe(j.logicalZoneId))} · ${j.physicalInstalled?"已复核":"待复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${j.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${j.planPoint?"已标点":"未标点"}</span>
                                </div>`).join("")}
                    </div>`}
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${E?"crosshair":"grab"};">
          ${o?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${ee}px, ${ce}px) scale(${X});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${I(o.plan.imageUrl)}" alt="${I(o.name)} 平面图" />
                  ${ae==="zone"?b.map(j=>{const U=Ie[j.id];return U?`<div class="pacom-zone-hotspot is-active" style="left:${U.left}%; top:${U.top}%; width:${U.width}%; height:${U.height}%;"><span class="pacom-zone-tag">${I(j.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${i.filter(j=>j.planPoint).map(j=>`
                      <button type="button" class="pacom-pin ${j.id===k&&J?"is-selected":""} ${j.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(j.planPoint.x*100).toFixed(2)}%; top:${(j.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${I(j.id)}" title="${I(j.name)}">
                        <span class="pacom-dot ${j.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${I(ia(j))}</span>
                      </button>`).join("")}
                  ${ae==="light_marker"||u?.category==="lighting"?d.filter(j=>i.some(U=>U.id===j.deviceId)).map(j=>`
                            <span class="dep-light-dot" style="left:${(j.x*100).toFixed(1)}%; top:${(j.y*100).toFixed(1)}%;" title="${I(j.label)}（${I(j.channel)}）">
                              ${be("sparkles",12)}<span>${I(j.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="project_config" data-proj-sub="floor_zones">前往「项目配置」上传真实底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${N.map(j=>`
              <button type="button" class="pacom-elev-item ${j.id===r?"is-active":""}" data-scrubber-floor="${I(j.id)}" title="${I(j.name)}${j.plan?" · 已传底图":" · 待传底图"}">
                ${j.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${I(j.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${ae==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${ae==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${ae==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${be("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(X*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${be("plus",16)}</button>
        </div>

        ${u?`
            <aside class="pacom-drawer" aria-label="设备部署属性">
              <div class="pacom-drawer-head">
                <div style="min-width:0;">
                  <h2 class="pacom-drawer-title">${I(u.name)}</h2>
                  <div class="pacom-row-sub">${I(Fe(u.logicalZoneId))} · v${u.version}</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${be("x",16)}</button>
              </div>

              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${x?"":"disabled"}>${E?"点击图纸定位中…":"点图更新坐标"}</button>
                <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${I(u.id)}">Ping 闪灯 5s</button>
                <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
              </div>

              ${u.category==="lighting"?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:14px; font-weight:450;">回路可视化灯点（${g.length}）</span>
                      <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${I(u.id)}" ${x?"":"disabled"}>+ 添加灯点</button>
                    </div>
                    ${g.map(j=>`
                        <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                          <span><strong>${I(j.channel)}</strong> · ${I(j.label)}</span>
                          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:13px;" data-del-light-marker="${I(j.id)}" ${x?"":"disabled"}>删</button>
                        </div>`).join("")}
                  </div>`:""}

              ${u.category!=="hvac"&&u.category!=="meter"&&B?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                      <code style="font-size:12px;">${I(B.meshUuid)}</code>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                      <span>Proxy 代理（建议每层 2–3 个）</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${B.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${I(u.id)}" ${x?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                      <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${B.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${I(u.id)}" ${x?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                    </div>
                  </div>`:""}

              <form data-role="binding-form" class="pacom-control-box" style="gap:8px;">
                <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                  <select class="pacom-select" style="height:30px; font-size:13px;" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(j=>`<option value="${j}" ${u.hardwareBinding?.protocol===j?"selected":""}>${j.toUpperCase()}</option>`).join("")}
                  </select>
                  <input class="pacom-input" style="height:30px; font-size:13px;" name="networkAddress" placeholder="网络地址/主题" value="${I(u.hardwareBinding?.networkAddress??"")}" />
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                  <input class="pacom-input" style="height:30px; font-size:13px;" name="portOrChannel" placeholder="端口/回路" value="${I(u.hardwareBinding?.portOrChannel??"")}" />
                  <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; flex-shrink:0;">
                    <span>物理已复核</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${p}" data-toggle-phys="1" ${x?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </span>
                </div>
                <button class="pacom-btn pacom-btn--primary" type="submit" ${x?"":"disabled"}>保存绑定与复核（v${u.version}）</button>
              </form>
            </aside>`:""}
      </main>
    `}function ze(x){const N=Ee(r),o=F.trim().toLowerCase(),i=N.filter(g=>!(C==="online"&&g.connectivity!=="online"||C==="offline"&&g.connectivity!=="offline"||C==="unverified"&&g.physicalInstalled||o&&!`${g.name} ${Fe(g.logicalZoneId)} ${g.hardwareBinding?.protocol??""}`.toLowerCase().includes(o))),b=N.filter(g=>g.connectivity==="online").length,u=se?N.find(g=>g.id===se)??null:null,B=u?te.get(u.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450}:null;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" style="width:220px;" data-ledger-search placeholder="搜索设备名称或功能区…" value="${I(F)}" aria-label="搜索设备列表" />
          <select class="pacom-select" data-ledger-filter aria-label="按设备状态筛选">
            <option value="all" ${C==="all"?"selected":""}>全部状态（${N.length}）</option>
            <option value="online" ${C==="online"?"selected":""}>仅看在线（${b}）</option>
            <option value="offline" ${C==="offline"?"selected":""}>仅看离线（${N.length-b}）</option>
            <option value="unverified" ${C==="unverified"?"selected":""}>待物理复核（${N.filter(g=>!g.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${be("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn" data-export-inv="1">导出 CSV</button>
        </div>
      </div>
      ${u&&B?`
          <form class="pacom-settings-card" data-save-dev-params="${I(u.id)}">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">设备参数配置：${I(u.name)}</span>
                <span class="pacom-setting-desc">人感自动关灯延时、光照度开关门限与默认亮度参数</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-close-param="1">${be("x",16)}</button>
            </div>
            <div class="pacom-setting-row" style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px;">
              <label class="pacom-field"><span>自动关灯延时(分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${B.offDelayMin}" /></label>
              <label class="pacom-field"><span>恢复自动延时(分)</span><input class="pacom-input" name="restoreMin" type="number" value="${B.restoreMin}" /></label>
              <label class="pacom-field"><span>开灯光感门限(lx)</span><input class="pacom-input" name="luxOn" type="number" value="${B.luxOn}" /></label>
              <label class="pacom-field"><span>关灯光感门限(lx)</span><input class="pacom-input" name="luxOff" type="number" value="${B.luxOff}" /></label>
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
              ${i.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词或切换状态筛选。</span></div></td></tr>':i.map(g=>`
                        <tr>
                          <td><div style="font-weight:450;">${I(g.name)}</div><div class="pacom-row-sub">${I(Fe(g.logicalZoneId))} · v${g.version}</div></td>
                          <td><span class="pacom-badge ${g.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${g.planPoint?`${Math.round(g.planPoint.x*100)}%,${Math.round(g.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${g.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${g.hardwareBinding?g.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${g.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${g.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${g.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${g.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${I(g.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-param="${I(g.id)}">参数</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${I(g.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${i.length} / ${N.length} 台设备 · ${b} 在线 · ${N.length-b} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dep-nav="floorplan">前往设备标记 →</button>
        </div>
      </div>
    `}function Pe(){const x=f.filter(o=>o.track==="mesh_auto"),N=f.filter(o=>o.track==="cloud_biz");return`
      ${le?`
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
            ${x.map(o=>`
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">${I(o.name)} <span class="pacom-badge pacom-badge--neutral">${I(o.groupType)}</span></span>
                    <span class="pacom-setting-desc">成员 ${o.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                  </div>
                  <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${I(o.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${N.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${N.map(o=>`
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">${I(o.name)} <span class="pacom-badge pacom-badge--neutral">${I(o.groupType)}</span></span>
                    <span class="pacom-setting-desc">成员 ${o.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                  </div>
                  <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${I(o.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>
      </div>
    `}function st(){const x=Ee(r),N=De().filter(v=>v.floorId===r),o=x.filter(v=>v.category!=="hvac"&&v.category!=="meter"),i=o.filter(v=>A.get(v.id)?.proxy).length,b=o.filter(v=>A.get(v.id)?.relay).length,u=x.filter(v=>v.category==="gateway"),B=x.filter(v=>A.get(v.id)?.relay||A.get(v.id)?.proxy),g=x.filter(v=>v.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge pacom-badge--online">协同锁空闲 · 可同步</span>
            <span class="pacom-row-sub">Mesh 节点 ${o.length} 台 · Proxy ${i} 个 · Relay ${b} 个 · 边缘基线 v${Q}</span>
          </div>
        </div>
        ${Re.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${Re.map(v=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${I(v.title)}</strong> <span class="pacom-row-sub">· ${I(v.detail)}</span></div>
                      <span class="pacom-badge ${v.level==="ok"?"pacom-badge--online":v.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${v.level==="ok"?"通过":v.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达图纸标点）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${H==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${H==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${H==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${u.map(v=>`
                    <button type="button" class="dep-topo-node ${v.connectivity==="offline"?"is-issue":""}" data-topo-jump="${I(v.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${I(v.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                      <span class="pacom-row-sub">${I(v.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${B.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，请在图纸标点抽屉中为传感器开启。</div>':B.map(v=>{const de=A.get(v.id);return`
                            <button type="button" class="dep-topo-node ${v.connectivity==="offline"?"is-issue":""}" data-topo-jump="${I(v.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${I(v.name)}</strong><span class="pacom-badge pacom-badge--accent">${de?.proxy?"Proxy":""}${de?.proxy&&de?.relay?" + ":""}${de?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${I(Fe(v.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${g.map(v=>`
                    <button type="button" class="dep-topo-node ${v.connectivity==="offline"?"is-issue":""}" data-topo-jump="${I(v.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${I(v.name)}</strong><span class="pacom-badge ${v.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${v.connectivity==="online"?"在线":"离线"}</span></div>
                      <span class="pacom-row-sub">${I(Fe(v.logicalZoneId))} · ${I(v.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                    </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${x.filter(v=>v.category==="sensor"||v.category==="gateway").map(v=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${I(v.id)}">
                      <strong>${I(v.name)}</strong>
                      <span class="pacom-row-sub">${v.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${x.filter(v=>v.category==="lighting"||v.category==="hvac").map(v=>`
                    <button type="button" class="dep-topo-node ${v.connectivity==="offline"?"is-issue":""}" data-topo-jump="${I(v.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${I(v.name)}</strong><span class="pacom-badge ${v.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${v.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${I(Fe(v.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${N.map(v=>{const de=x.filter(U=>U.logicalZoneId===v.id),j=de.some(U=>U.connectivity==="offline");return`
                      <div class="dep-topo-node ${j?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${I(v.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${j?"pacom-badge--warning":"pacom-badge--online"}">${de.length} 台设备</span></div>
                        <span class="pacom-row-sub">${j?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function Ft(){const x=ne.reduce((b,u)=>b+u.collectedPoints,0),N=ne.reduce((b,u)=>b+u.calculatedPoints,0),o=ne.filter(b=>b.status==="connected").length,i=ne.filter(b=>b.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${o}<span class="pacom-kpi-unit">/ ${ne.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${ne.length?Math.round(o/ne.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${x}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${N}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${i.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${i.length} 条采集通道通信降级（${i.map(b=>b.name).join("、")}）</span>
                <span class="pacom-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
              </div>
            </div>`:""}

      ${me?`
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
                ${ne.map(b=>{const u=sa[b.status]??{label:b.status,cls:"pacom-badge--neutral"},B=b.status==="connected"?98:b.status==="degraded"?62:0,g=B>=75?"var(--pacom-status-online)":B>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",v=w===b.id,de=v?ca(b,ie):[];return`
                      <tr>
                        <td><strong>${I(b.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${b.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${I(b.endpoint)}</code></td>
                        <td>采集 ${b.collectedPoints} / 计算 ${b.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${u.cls}">${u.label}</span>
                            <span class="pacom-row-sub">${B}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${B}%; background:${g};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${I(b.id)}">${v?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${I(b.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${I(b.id)}" data-endpoint-val="${I(b.endpoint)}">${l===b.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${v?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${I(b.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${de.map(j=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${I(j.deviceName)}</strong> · ${I(j.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${I(j.value)} · ${I(j.lastSeen)}</span>
                                        <span class="pacom-badge ${j.quality==="online"?"pacom-badge--online":j.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${j.quality==="online"?"在线正常":j.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function oe(){const x=s.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${We({tree:fe(),session:s,scope:O,isOpen:G,searchKeyword:D})}
            </div>
            <div class="pacom-header-meta">
              ${R(x)}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${K()}
          ${n==="floorplan"?`<div class="pacom-unified-main--canvas">
                  ${ye?`<div class="pacom-banner pacom-banner--ok" style="margin-bottom:8px; flex-shrink:0;"><span class="pacom-banner-title">${I(ye)}</span></div>`:""}
                  ${Se?`<div class="pacom-alert-banner" style="margin-bottom:8px; flex-shrink:0;">${I(Se)}</div>`:""}
                  ${pe(x)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head">
                    <h2 class="pacom-unified-title">${$[n].title}</h2>
                    <p class="pacom-unified-subtitle">${$[n].subtitle}</p>
                  </div>
                  ${n==="project_config"?`<div class="pacom-tabs" style="align-self:flex-start;" role="tablist" aria-label="项目配置分段">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${c==="project_building"}" data-proj-sub-tab="project_building">项目与楼宇</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${c==="floor_zones"}" data-proj-sub-tab="floor_zones">楼层与图纸</button>
                        </div>`:""}
                  ${ye?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${I(ye)}</span></div>`:""}
                  ${Se?`<div class="pacom-alert-banner">${I(Se)}</div>`:""}
                  ${n==="overview"?ve():n==="project_config"?c==="floor_zones"?ke(x):we(x):n==="ledger"?ze(x):n==="groups"?Pe():n==="network_topo"?st():Ft()}
                </div>
              </div>`}
        </div>
      </div>
    `,Ct()}function Ct(){Ge(e,{onToggle:()=>{G=!G,oe(),G&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:o=>{D=o,oe();const i=e.querySelector("[data-global-space-search]");i&&(i.focus(),i.setSelectionRange(o.length,o.length))},onPick:o=>{if(O=o,G=!1,o.level==="project"){M=o.projectId;const i=Z.buildings.find(b=>b.projectId===o.projectId);i&&Ne(i.id)}else o.level==="building"?Ne(o.buildingId):o.level==="floor"&&Oe(o.floorId);oe()}}),e.querySelectorAll("[data-dep-nav]").forEach(o=>{o.addEventListener("click",()=>{n=o.dataset.depNav??"overview",o.dataset.projSub&&(c=o.dataset.projSub),ye="",Se="",oe()})}),e.querySelectorAll("[data-proj-sub-tab]").forEach(o=>{o.addEventListener("click",()=>{c=o.dataset.projSubTab??"project_building",oe()})}),e.querySelector("[data-ledger-search]")?.addEventListener("input",o=>{F=o.currentTarget.value,oe();const i=e.querySelector("[data-ledger-search]");i&&(i.focus(),i.setSelectionRange(F.length,F.length))}),e.querySelector("[data-ledger-filter]")?.addEventListener("change",o=>{C=o.currentTarget.value??"all",oe()}),e.querySelectorAll("[data-refresh-dep]").forEach(o=>{o.addEventListener("click",()=>{xe()})}),e.querySelectorAll("[data-matrix-nav]").forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.matrixFloor;i&&Oe(i),n=o.dataset.matrixNav??"floorplan",o.dataset.projSub&&(c=o.dataset.projSub),oe()})}),e.querySelectorAll("[data-pick-floor-pill]").forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.pickFloorPill;i&&(Oe(i),oe())})}),e.querySelectorAll("[data-scrubber-floor]").forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.scrubberFloor;i&&(Oe(i),oe())})}),e.querySelector("[data-save-project]")?.addEventListener("submit",async o=>{o.preventDefault();const i=o.currentTarget,b=i.dataset.saveProject??M,u=new FormData(i),B=String(u.get("pName")??"").trim(),g=String(u.get("pCity")??"").trim(),v=String(u.get("pAddr")??"").trim(),de=String(u.get("pLngLat")??"").split(",").map(U=>Number(U.trim())),j=de.length===2&&Number.isFinite(de[0])&&Number.isFinite(de[1])?{lng:de[0],lat:de[1],crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}:void 0;try{await t.updateProject?.(b,{name:B,city:g,address:v,location:j}),ye=`项目「${B||"当前项目"}」基础信息与地理坐标已持久化保存。`,await xe()}catch(U){Se=U instanceof Error?U.message:String(U),oe()}}),e.querySelectorAll("[data-pick-building]").forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.pickBuilding;i&&(Ne(i),ye="",oe())})}),e.querySelector("[data-switch-bld-select]")?.addEventListener("change",o=>{const i=o.currentTarget.value;i&&(Ne(i),q="all",oe())}),e.querySelector("[data-toggle-new-bld]")?.addEventListener("click",()=>{P=!P,oe()}),e.querySelector("[data-create-bld]")?.addEventListener("submit",async o=>{o.preventDefault();const i=o.currentTarget,b=i.dataset.createBld??M,u=new FormData(i),B=String(u.get("bName")??"").trim(),g=String(u.get("bArea")??"").trim(),v=Number(u.get("bAbove")??12),de=Number(u.get("bBelow")??0),j=!!u.get("bRoof");if(B)try{const U=await t.upsertBuilding?.({projectId:b,name:B,aboveFloors:v,belowFloors:de,hasRoof:j,areaSqm:g?Number(g):null});P=!1,U&&(z=U.id),ye=`已新建楼宇「${B}」，可使用下方一键批量补齐楼层。`,await xe()}catch(U){Se=U instanceof Error?U.message:String(U),oe()}}),e.querySelector("[data-save-building]")?.addEventListener("submit",async o=>{o.preventDefault();const i=o.currentTarget,b=i.dataset.saveBuilding,u=Z.buildings.find(Le=>Le.id===b);if(!u)return;const B=new FormData(i),g=String(B.get("bName")??"").trim()||u.name,v=String(B.get("bArea")??"").trim(),de=Number(B.get("bAbove")??u.aboveFloors),j=Number(B.get("bBelow")??u.belowFloors),U=!!B.get("bRoof");try{await t.upsertBuilding?.({id:b,projectId:u.projectId,name:g,aboveFloors:de,belowFloors:j,hasRoof:U,areaSqm:v?Number(v):null}),ye=`已保存楼宇「${g}」结构参数与建筑面积。`,await xe()}catch(Le){Se=Le instanceof Error?Le.message:String(Le),oe()}}),e.querySelector("[data-upload-bld]")?.addEventListener("change",async o=>{const i=o.currentTarget,b=i.dataset.uploadBld,u=i.files?.[0],B=Z.buildings.find(g=>g.id===b);if(!(!b||!u||!B))try{const g=await ct(u);await t.upsertBuilding?.({id:B.id,projectId:B.projectId,name:B.name,aboveFloors:B.aboveFloors,belowFloors:B.belowFloors,hasRoof:B.hasRoof,areaSqm:B.areaSqm,imageUrl:g}),ye=`已更新「${B.name}」白模 / 实景图（${u.name}），空间总览已同步生效。`,await xe()}catch(g){Se=g instanceof Error?g.message:String(g),oe()}}),e.querySelector("[data-batch-floors]")?.addEventListener("submit",async o=>{o.preventDefault();const i=o.currentTarget.dataset.batchFloors,b=new FormData(o.currentTarget),u=Number(b.get("fromFloor")??1),B=Number(b.get("toFloor")??6),g=new Set($e().filter(de=>de.buildingId===i).map(de=>de.name.toUpperCase()));let v=0;try{for(let de=Math.min(u,B);de<=Math.max(u,B);de+=1){const j=`${de}F`;g.has(j)||(await t.upsertFloor?.({buildingId:i,kind:"above",level:de,name:j}),g.add(j),v+=1)}b.get("includeB1")&&!g.has("B1")&&(await t.upsertFloor?.({buildingId:i,kind:"below",level:-1,name:"B1"}),v+=1),b.get("includeRF")&&!g.has("RF")&&(await t.upsertFloor?.({buildingId:i,kind:"roof",level:99,name:"RF"}),v+=1),ye=v>0?`已批量新增 ${v} 个楼层并同步至全局空间树。`:"所选范围楼层均已存在，未重复创建。",await xe()}catch(de){Se=de instanceof Error?de.message:String(de),oe()}}),e.querySelectorAll("[data-floor-list-filter]").forEach(o=>{o.addEventListener("click",()=>{q=o.dataset.floorListFilter??"all",oe()})}),e.querySelector("[data-toggle-new-floor]")?.addEventListener("click",()=>{y=!y,oe()}),e.querySelector("[data-create-floor]")?.addEventListener("submit",async o=>{o.preventDefault();const i=o.currentTarget,b=i.dataset.createFloor,u=new FormData(i),B=String(u.get("fName")??"").trim().toUpperCase(),g=String(u.get("fArea")??"").trim();if(!B)return;const v=Qe(B),de=v>=999?"roof":v<0?"below":"above",j=v>=999?99:v||1;try{const U=await t.upsertFloor?.({buildingId:b,kind:de,level:j,name:B,areaSqm:g?Number(g):null});y=!1,U&&(r=U.id),ye=`已新增楼层「${B}」。`,await xe()}catch(U){Se=U instanceof Error?U.message:String(U),oe()}}),e.querySelector("[data-save-floor]")?.addEventListener("submit",async o=>{o.preventDefault();const i=o.currentTarget,b=i.dataset.saveFloor,u=$e().find(Le=>Le.id===b);if(!u)return;const B=new FormData(i),g=String(B.get("fName")??"").trim()||u.name,v=String(B.get("fArea")??"").trim(),de=Qe(g),j=de>=999?"roof":de<0?"below":"above",U=de>=999?99:de||u.level;try{await t.upsertFloor?.({id:u.id,buildingId:u.buildingId,kind:j,level:U,name:g,areaSqm:v?Number(v):null}),ye=`已保存楼层「${g}」名称与建筑面积。`,await xe()}catch(Le){Se=Le instanceof Error?Le.message:String(Le),oe()}}),e.querySelector("[data-delete-floor]")?.addEventListener("click",async o=>{const i=o.currentTarget.dataset.deleteFloor;if(i)try{await t.deleteFloor?.(i),ye="已删除所选楼层及其空分区。",await xe()}catch(b){Se=b instanceof Error?b.message:String(b),oe()}}),e.querySelector("[data-upload-floor]")?.addEventListener("change",async o=>{const i=o.currentTarget,b=i.dataset.uploadFloor,u=i.files?.[0],B=$e().find(g=>g.id===b);if(!(!b||!u||!B))try{const g=await ct(u);await t.upsertFloor?.({id:B.id,buildingId:B.buildingId,kind:B.kind,level:B.level,name:B.name,areaSqm:B.areaSqm,planImageUrl:g}),ye=`已上传「${B.name}」2D 平面底图（${u.name}），空间总览与设备标记已同步。`,await xe()}catch(g){Se=g instanceof Error?g.message:String(g),oe()}}),e.querySelector("[data-batch-upload-floors]")?.addEventListener("change",async o=>{const i=o.currentTarget,b=i.dataset.batchUploadFloors,u=Array.from(i.files??[]);if(!b||u.length===0)return;const B=je(b),g=new Map;B.forEach(j=>{const U=yt(j.name)??j.name.toUpperCase();g.set(U,j)});let v=0;const de=[];try{for(const j of u){const U=yt(j.name),Le=U?g.get(U):void 0;if(!Le){de.push(j.name);continue}const Be=await ct(j);await t.upsertFloor?.({id:Le.id,buildingId:Le.buildingId,kind:Le.kind,level:Le.level,name:Le.name,areaSqm:Le.areaSqm,planImageUrl:Be}),v+=1}ye=v>0?`批量匹配上传完成：成功更新 ${v} 个楼层底图${de.length?`，另有 ${de.length} 个文件未识别到对应楼层（${de.slice(0,3).join("、")}）`:""}。`:`未从所选 ${u.length} 个文件名中匹配到当前楼宇楼层（支持 01F/7F/RF/B1 命名）。`,await xe()}catch(j){Se=j instanceof Error?j.message:String(j),oe()}}),e.querySelector("[data-add-zone]")?.addEventListener("submit",async o=>{o.preventDefault();const i=o.currentTarget.dataset.addZone,b=new FormData(o.currentTarget),u=String(b.get("zoneName")??"").trim(),B=String(b.get("zoneCat")??"office");if(u)try{const g=await t.upsertZone?.({floorId:i,name:u,category:B});g&&(Ie[g.id]={left:20,top:20,width:24,height:24}),ye=`已添加功能区「${u}」。`,await xe()}catch(g){Se=g instanceof Error?g.message:String(g),oe()}}),e.querySelectorAll("[data-del-zone]").forEach(o=>{o.addEventListener("click",async()=>{const i=o.dataset.delZone;if(i)try{await t.deleteZone?.(i),ye="已删除该功能区。",await xe()}catch(b){Se=b instanceof Error?b.message:String(b),oe()}})}),e.querySelector("[data-copy-zones]")?.addEventListener("click",async o=>{const i=o.currentTarget.dataset.copyZones;if(!i)return;const b=je(z).filter(u=>u.id!==i&&u.kind==="above"&&De().filter(B=>B.floorId===u.id).length===0).map(u=>u.id);if(b.length===0){ye="本栋其余地上楼层均已配置功能区，无需重复复制。",oe();return}try{const u=await t.copyZonesToFloors?.(i,b)??0;ye=`已将当前层功能区模板复用至 ${b.length} 个空白标准层（共新增 ${u} 个功能区）。`,await xe()}catch(u){Se=u instanceof Error?u.message:String(u),oe()}});const x=e.querySelector("[data-dep-canvas-search]");x?.addEventListener("focus",()=>{!S&&!re&&(S=!0,oe(),e.querySelector("[data-dep-canvas-search]")?.focus())}),x?.addEventListener("input",o=>{ue=o.currentTarget.value,S=!0,re=!1,oe();const i=e.querySelector("[data-dep-canvas-search]");i&&(i.focus(),i.setSelectionRange(ue.length,ue.length))}),e.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{S=!S,S&&(re=!1),oe()}),e.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{S=!1,re=!1,oe()}),e.querySelector("[data-toggle-new-dev]")?.addEventListener("click",()=>{re=!re,re&&(S=!1),oe()}),e.querySelectorAll("[data-brush]").forEach(o=>{o.addEventListener("click",()=>{ae=o.dataset.brush??"device",oe()})}),e.querySelectorAll("[data-dep-zoom]").forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.depZoom;i==="in"?X=Math.min(2.6,Number((X+.2).toFixed(2))):i==="out"?X=Math.max(.6,Number((X-.2).toFixed(2))):(X=1,ee=0,ce=0),He()})});const N=e.querySelector('[data-role="dep-stage"]');if(N&&!E){let o=!1,i=0,b=0,u=0,B=0;N.addEventListener("pointerdown",v=>{v.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(o=!0,i=v.clientX,b=v.clientY,u=ee,B=ce,N.classList.add("is-panning"),N.setPointerCapture?.(v.pointerId))}),N.addEventListener("pointermove",v=>{o&&(ee=u+(v.clientX-i),ce=B+(v.clientY-b),He())});const g=()=>{o&&(o=!1,N.classList.remove("is-panning"))};N.addEventListener("pointerup",g),N.addEventListener("pointercancel",g),N.addEventListener("wheel",v=>{v.preventDefault();const de=v.deltaY<0?.12:-.12;X=Math.max(.6,Math.min(2.6,Number((X+de).toFixed(2)))),He()},{passive:!1}),N.addEventListener("dblclick",v=>{v.target?.closest("button")||(X=1,ee=0,ce=0,He())})}e.querySelectorAll("[data-dev-filter]").forEach(o=>{o.addEventListener("click",()=>{W=o.dataset.devFilter??"all",oe()})}),e.querySelector("[data-create-dev]")?.addEventListener("submit",o=>{o.preventDefault();const i=new FormData(o.currentTarget),b=String(i.get("devName")??"").trim(),u=String(i.get("devPreset")??"sensor"),B=String(i.get("devZone")??"")||null,g=it.find(de=>de.key===u)??it[0],v=`dev-custom-${Date.now().toString(36)}`;T.push({id:v,name:b,category:g.category,projectId:m.projectId,buildingId:z,floorId:r,logicalZoneId:B,planPoint:{floorId:r,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),A.set(v,{proxy:g.defaultProxy,relay:g.defaultRelay,meshUuid:`mesh-${r.slice(-4)}`}),g.category==="lighting"&&d.push({id:`lm-${Date.now().toString(36)}`,deviceId:v,channel:"回路 1",label:`${b.slice(0,6)}主灯`,x:.52,y:.45}),k=v,J=!0,re=!1,he=!0,ye=`已新增「${b}」（${g.hint}），已标注默认点位并标记待同步边缘。`,oe()}),e.querySelectorAll("[data-pick-dev]").forEach(o=>{o.addEventListener("click",i=>{i.stopPropagation(),k=o.dataset.pickDev??null,J=!0,p=Ee(r).find(u=>u.id===k)?.physicalInstalled??!1,oe()})}),e.querySelector("[data-close-sel]")?.addEventListener("click",()=>{J=!1,E=!1,oe()}),e.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{E=!E,oe()}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{p=!p,oe()}),e.querySelectorAll("[data-ping-dev]").forEach(o=>{o.addEventListener("click",()=>{const i=Ee(r).find(b=>b.id===o.dataset.pingDev);i&&(ye=`已向「${i.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,oe())})}),e.querySelector("[data-add-light-marker]")?.addEventListener("click",o=>{const i=o.currentTarget.dataset.addLightMarker,b=d.filter(u=>u.deviceId===i).length+1;d.push({id:`lm-${Date.now().toString(36)}`,deviceId:i,channel:`回路 ${b}`,label:`照明点位 ${b}`,x:Math.min(.86,.35+b*.1),y:.42}),ae="light_marker",ye=`已新增「回路 ${b}」可视化灯点。`,oe()}),e.querySelectorAll("[data-del-light-marker]").forEach(o=>{o.addEventListener("click",()=>{const i=d.findIndex(b=>b.id===o.dataset.delLightMarker);i>=0&&d.splice(i,1),oe()})}),e.querySelectorAll("[data-toggle-mesh-role]").forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.meshDev,b=o.dataset.toggleMeshRole,u=A.get(i)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};u[b]=!u[b],A.set(i,u),he=!0,ye=`已更新节点 ${b.toUpperCase()} 状态，记得在「网络与拓扑」中同步下发至边缘网关。`,oe()})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async o=>{const i=Ee(r).find(g=>g.id===k);if(!E||!i)return;const b=o.currentTarget.getBoundingClientRect(),u=Math.max(.02,Math.min(.98,(o.clientX-b.left)/b.width)),B=Math.max(.02,Math.min(.98,(o.clientY-b.top)/b.height));if(T.some(g=>g.id===i.id)){i.planPoint={floorId:r,planVersion:1,x:Number(u.toFixed(4)),y:Number(B.toFixed(4))},E=!1,ye=`已更新「${i.name}」图上坐标。`,oe();return}try{await t.updateDevicePlanPoint({deviceId:i.id,floorId:m.floorId,planVersion:i.planPoint?.planVersion??1,x:u,y:B,expectedVersion:i.version}),E=!1,ye=`已更新「${i.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await xe()}catch(g){Se=g instanceof Error?g.message:String(g),oe()}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async o=>{o.preventDefault();const i=Ee(r).find(u=>u.id===k);if(!i)return;const b=new FormData(o.currentTarget);if(T.some(u=>u.id===i.id)){i.physicalInstalled=p,i.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(b.get("protocol")),networkAddress:String(b.get("networkAddress")??""),portOrChannel:String(b.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:s.displayName},i.version+=1,he=!0,ye=`已保存「${i.name}」的硬件绑定与物理复核状态。`,oe();return}try{await t.updateDeviceHardwareBinding({deviceId:i.id,gatewayId:i.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(b.get("protocol")),networkAddress:String(b.get("networkAddress")??""),portOrChannel:String(b.get("portOrChannel")??""),physicalInstalled:p,expectedVersion:i.version}),he=!0,ye=`已保存「${i.name}」的硬件绑定与物理安装复核状态。`,await xe()}catch(u){Se=u instanceof Error?u.message:String(u),oe()}}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const o=Ee(r).find(i=>i.id===k);o&&L(o)}),e.querySelectorAll("[data-ftt-dev]").forEach(o=>{o.addEventListener("click",()=>{const i=Ee(r).find(b=>b.id===o.dataset.fttDev);i&&L(i)})}),e.querySelectorAll("[data-batch-ftt]").forEach(o=>{o.addEventListener("click",()=>Y())}),e.querySelectorAll("[data-export-inv]").forEach(o=>{o.addEventListener("click",()=>h())}),e.querySelectorAll("[data-open-param]").forEach(o=>{o.addEventListener("click",()=>{se=o.dataset.openParam??null,oe()})}),e.querySelector("[data-close-param]")?.addEventListener("click",()=>{se=null,oe()}),e.querySelector("[data-save-dev-params]")?.addEventListener("submit",o=>{o.preventDefault();const i=o.currentTarget.dataset.saveDevParams,b=new FormData(o.currentTarget);te.set(i,{offDelayMin:Number(b.get("offDelayMin")??15),restoreMin:Number(b.get("restoreMin")??30),luxOn:Number(b.get("luxOn")??280),luxOff:Number(b.get("luxOff")??450)}),se=null,he=!0,ye="设备自治延时与光感门限参数已下发并同步至配置基线。",oe()}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{le=!le,oe()}),e.querySelector("[data-create-group]")?.addEventListener("submit",o=>{o.preventDefault();const i=new FormData(o.currentTarget),b=String(i.get("gName")??"").trim(),u=i.get("gTrack")??"mesh_auto",B=String(i.get("gType")??"灯光联动组");b&&(f.unshift({id:`grp-${Date.now().toString(36)}`,track:u,groupType:B,name:b,floorId:r,includesAdapter:u==="mesh_auto",deviceIds:u==="mesh_auto"?["dev-e7f-gw-01"]:[]}),le=!1,u==="mesh_auto"&&(he=!0),ye=`已新建${u==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${b}」。`,oe())}),e.querySelectorAll("[data-test-group]").forEach(o=>{o.addEventListener("click",()=>{const i=f.find(b=>b.id===o.dataset.testGroup);i&&(ye=`已向分组「${i.name}」发送群组试控指令，${i.deviceIds.length} 台成员回读正常。`,oe())})}),e.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>_()),e.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{Q+=1,he=!1,ye=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${Q}）。`,oe()}),e.querySelectorAll("[data-topo-mode]").forEach(o=>{o.addEventListener("click",()=>{H=o.dataset.topoMode??"mesh",oe()})}),e.querySelectorAll("[data-topo-jump]").forEach(o=>{o.addEventListener("click",()=>{k=o.dataset.topoJump??null,J=!0,n="floorplan",oe()})}),e.querySelector("[data-toggle-new-conn]")?.addEventListener("click",()=>{me=!me,oe()}),e.querySelector("[data-create-conn]")?.addEventListener("submit",o=>{o.preventDefault();const i=new FormData(o.currentTarget),b=String(i.get("cName")??"").trim(),u=String(i.get("cProto")??"bacnet_ip"),B=String(i.get("cEndpoint")??"").trim();if(ne.some(g=>g.endpoint===B)){Se=`端口冲突警告：局域网端点「${B}」已被其他通道占用，请更换端口后重试。`,oe();return}ne.unshift({id:`conn-${Date.now().toString(36)}`,projectId:m.projectId,buildingId:z,floorId:r,name:b,protocol:u,endpoint:B,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),me=!1,Se="",ye=`已接入「${b}」（${B}），连通测试通过（18 ms）。`,oe()}),e.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{ye="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",oe()}),e.querySelectorAll("[data-expand-conn]").forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.expandConn??null;w=w===i?null:i,oe()})}),e.querySelectorAll("[data-ping-conn]").forEach(o=>{o.addEventListener("click",()=>{const i=ne.find(b=>b.id===o.dataset.pingConn);i&&(Se="",i.status==="connected"?ye=`连通测试通过：「${i.name}」（${i.endpoint}）响应正常，延迟 18 ms。`:Se=`连通测试异常：「${i.name}」（${i.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,oe())})}),e.querySelectorAll("[data-copy-endpoint]").forEach(o=>{o.addEventListener("click",async()=>{const i=o.dataset.endpointVal??"",b=o.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(i),l=b,oe(),window.setTimeout(()=>{l=null,oe()},1600)}catch{}})}),e.querySelectorAll("[data-preview-doc]").forEach(o=>{o.addEventListener("click",()=>{const i=ft.find(b=>b.id===o.dataset.previewDoc);i&&(ye=`已调阅工程附件「${i.name}」（关联范围：${i.boundScope}，更新于 ${i.updatedAt}）。`,oe())})}),e.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const o=await t.freezeDeliveryBatch(m.floorId,"部署总览验收发起交付冻结");ye=`已生成交付冻结快照 ${o.versionTag}（核验 ${o.verifiedCount}/${o.deviceCount}）。`,await xe()}catch(o){Se=o instanceof Error?o.message:String(o),oe()}})}await xe()}function $t(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const t=e.name.includes("702")?"702 照明":"主照明",s=Number(e.telemetry.dimming?.value??0);return s>0?`${t} ${s}%`:`${t} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const wt={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},da={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},pa=be("chevron-down",12),ua={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function V(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function xt(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面"))return 999;const s=t.match(/(-?\d+)/);if(!s)return 0;const a=Number(s[1]);return t.startsWith("B")?-Math.abs(a):a}async function ma(e,t,s){const a=await t.getSpatialTree(),n=t.mode==="demo",c=s.scope.canControlDevices,F=s.scope.canManageAlarms,C=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null,O=a.floors.filter(L=>s.scope.allowedFloorIds.includes(L.id)),G=C||a.projects.length<=1&&a.buildings.length<=1&&O.length<=1?"floors-only":a.projects.length>1?"multi-project":a.buildings.length>1?"single-project-multi-building":"single-building",D=G==="multi-project",ae=G==="multi-project"||G==="single-project-multi-building",W=G!=="floors-only",ue=G==="floors-only"&&O.length<=1;let S=Ze(),J="devices",H=!1,X=!1,ee="",ce="",Z="all",ie="all";const ne=new URLSearchParams(window.location.hash.split("?")[1]??""),ge=ne.get("device"),Ie=ne.get("zone");let T=ge,M=!!ge,z="control",r="",q=!1,P="today",y="devices";const k=new Set,p=new Set;let E=[],re=[],me=[],le=null,se=null,l=1,w=0,Q=0,he=null;function Re(){return a.zones.filter(L=>!(S.level==="floor"&&L.floorId!==S.floorId||C&&!C.includes(L.id)))}function Ae(L){return[...a.floors.filter(_=>_.buildingId!==L?!1:G==="floors-only"?s.scope.allowedFloorIds.includes(_.id):!0)].sort((_,h)=>xt(h.name)-xt(_.name))}async function ye(L,Y=!1){let _=L;_.level==="all-projects"&&!D&&(_={level:"project",projectId:a.projects[0]?.id??m.projectId}),_.level==="project"&&!ae&&(_={level:"building",projectId:_.projectId,buildingId:a.buildings[0]?.id??m.buildingId}),_.level==="building"&&!W&&(_={level:"floor",projectId:_.projectId,buildingId:_.buildingId,floorId:O[0]?.id??m.floorId}),S=_,at(_),se=null,ie=Y&&Ie?Ie:"all",q=!1,X=!1,H=!1,p.clear(),l=1,w=0,Q=0,he&&(he(),he=null);const h=S.level==="floor"?S.floorId:m.floorId;if(S.level==="floor")try{const[$,K,R]=await Promise.all([t.getFloorDevices(S.floorId),t.listAlarms(S.floorId),t.listWorkOrders(S.floorId)]);E=$,re=K,me=R,E.some(ve=>ve.id===T)?Y&&ge&&(M=!0):(T=E[1]?.id??E[0]?.id??null,M=!1),he=t.subscribeFloorEvents(S.floorId,async ve=>{ve.type==="control.receipt.updated"&&le?.batchId===ve.batchId&&(le=await t.getControlBatch(ve.batchId)),(ve.type==="telemetry.updated"||ve.type==="device.connectivity")&&S.level==="floor"&&(E=await t.getFloorDevices(S.floorId)),ve.type==="alarm.changed"&&S.level==="floor"&&(re=await t.listAlarms(S.floorId)),f()})}catch($){E=[],re=[],me=[],T=null,M=!1,se=$ instanceof Error?$.message:String($)}else{M=!1;const[$,K,R]=await Promise.all([t.getFloorDevices(h).catch(()=>[]),t.listAlarms(h).catch(()=>[]),t.listWorkOrders(h).catch(()=>[])]);E=$,re=K,me=R}xe()}function Se(L){return L?a.zones.find(Y=>Y.id===L)?.name??L:"未分配逻辑区"}function A(){const L=ce.trim().toLowerCase();return E.filter(Y=>ie!=="all"&&Y.logicalZoneId!==ie||Z!=="all"&&Y.category!==Z?!1:L?Y.name.toLowerCase().includes(L)||Y.id.toLowerCase().includes(L)||Se(Y.logicalZoneId).toLowerCase().includes(L):!0)}async function d(L,Y,_){!L.length||S.level!=="floor"||!c||(L.forEach(h=>k.add(h)),le=await t.dispatchControlBatch({floorId:S.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:L.map(h=>({deviceId:h,command:Y,targetValue:_}))}),f())}function f(){const L=document.activeElement,Y=L?.dataset?.role,_=L&&"selectionStart"in L?L.selectionStart:null,h=L&&"selectionEnd"in L?L.selectionEnd:null,$=e.querySelector(".pacom-list")?.scrollTop??0;xe();const K=e.querySelector(".pacom-list");if(K&&(K.scrollTop=$),Y==="search"||Y==="space-search"){const R=e.querySelector(`[data-role="${Y}"]`);R&&(R.focus(),_!==null&&h!==null&&R.setSelectionRange(_,h))}}function te(){const L=e.querySelector('[data-role="canvas-viewport"]');L&&(L.style.transform=`translate(${w}px, ${Q}px) scale(${l})`);const Y=e.querySelector('[data-role="zoom-label"]');Y&&(Y.textContent=`${Math.round(l*100)}%`)}function fe(L){if(L==="all")return{level:"all-projects"};const Y=L.split(":");return Y[0]==="project"&&Y[1]?{level:"project",projectId:Y[1]}:Y[0]==="building"&&Y[1]&&Y[2]?{level:"building",projectId:Y[1],buildingId:Y[2]}:Y[0]==="floor"&&Y[1]&&Y[2]&&Y[3]?{level:"floor",projectId:Y[1],buildingId:Y[2],floorId:Y[3]}:{level:"all-projects"}}function $e(L){const Y=S;if(Y.level==="all-projects"){const _=ce.trim().toLowerCase(),h=a.projects.filter($=>!_||$.name.toLowerCase().includes(_));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${h.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${be("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${h.map($=>{const K=a.buildings.filter(R=>R.projectId===$.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${V($.id)}">
                  <div>
                    <div class="pacom-row-title">${V($.name)}</div>
                    <div class="pacom-row-sub">${V($.city??"")} · ${K} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(Y.level==="project"){const _=ce.trim().toLowerCase(),h=a.buildings.filter(R=>R.projectId===Y.projectId&&(!_||R.name.toLowerCase().includes(_))),$=E.filter(R=>R.connectivity==="online").length,K=E.length?Math.round($/E.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${h.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${be("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${h.map(R=>{const ve=R.id===m.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${V(R.projectId)}:${V(R.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${ve&&L>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${V(R.name)}</div>
                      <div class="pacom-row-sub">地上 ${R.aboveFloors} 层 · ${R.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${ve?"pacom-badge--accent":"pacom-badge--neutral"}">${ve?`在线 ${K}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(Y.level==="building"){const _=ce.trim().toLowerCase(),h=Ae(Y.buildingId).filter(K=>!_||K.name.toLowerCase().includes(_)),$=a.buildings.find(K=>K.id===Y.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${V($?.name??"楼宇")} 楼层导览（${h.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${be("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${h.map(K=>{const R=s.scope.allowedFloorIds.includes(K.id),ve=K.id===m.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${R?"":"opacity:0.6;"}" data-nav-scope="floor:${V(Y.projectId)}:${V(Y.buildingId)}:${V(K.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${ve&&L>0?"pacom-dot--warning":K.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${V($?.name??"")} ${V(K.name)}</div>
                      <div class="pacom-row-sub">${K.plan?"2D 平面控图就绪":"暂未上传平面图"}${ve&&L>0?` · ${L} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${R&&K.plan?"pacom-badge--online":"pacom-badge--neutral"}">${R?K.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(J==="devices"){const _=A(),h=Re(),$=Array.from(p);return`
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
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${_.length} 台${c&&$.length?` · 已选 ${$.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${be("x",14)}</button>
          </div>
          ${h.length>0&&!se?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${ie==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${h.map(K=>`<button type="button" class="pacom-zone-pill ${ie===K.id?"is-active":""}" data-filter-zone="${V(K.id)}">${V(K.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${se?`<div class="pacom-alert-banner">${V(se)}</div>`:_.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':_.map(K=>{const R=K.id===T&&M,ve=p.has(K.id),we=K.connectivity==="offline",ke=we?"pacom-dot--critical":"pacom-dot--online",pe=we?"离线":K.category==="lighting"?`${K.telemetry.dimming?.value??"--"}%`:K.category==="hvac"?`${K.telemetry.setpoint?.value??"--"}°C`:K.category==="sensor"?`${K.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${R?"is-selected":""}" data-select-device="${V(K.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${c?`<input type="checkbox" name="devCheck-${V(K.id)}" data-check-device="${V(K.id)}" ${ve?"checked":""} style="margin-top:3px;" aria-label="勾选 ${V(K.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${V(K.name)}</div>
                              <div class="pacom-row-sub">${V(Se(K.logicalZoneId).replace(/^7F\s*/,""))} · ${V(wt[K.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${we?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${ke}"></span>${V(pe)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${c&&$.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${$.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(J==="zones"){const _=Re(),h={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${_.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${be("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${_.map($=>{const K=E.filter(pe=>pe.logicalZoneId===$.id),R=K.filter(pe=>pe.connectivity==="online").length,ve=K.filter(pe=>pe.category==="lighting"||pe.category==="hvac").length,we=ie===$.id,ke=h[$.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${we?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${we?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${V(we?"all":$.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${V($.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${R}/${K.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${ke.temp} · ${ke.occ}</div>
                  ${ve>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${V($.id)}" data-zone-val="true" ${c?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${V($.id)}" data-zone-val="false" ${c?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${re.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${be("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${re.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':re.map(_=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${V(_.title)}</strong>
                      <span class="pacom-badge ${_.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${_.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${V(_.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${V(_.deviceId)}">定位设备</button>
                      ${_.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${V(_.id)}" ${F?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function je(L){const Y=S,_=Re().length,h=Y.level==="floor"?"搜索设备或区域…":Y.level==="building"?"搜索楼层…":Y.level==="project"?"搜索楼宇…":"搜索园区…",$=Y.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${H&&J==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${E.length}</button>
          <button type="button" class="pacom-hud-pill ${H&&J==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${_}</button>
          <button type="button" class="pacom-hud-pill ${L>0?"pacom-hud-pill--alert":""} ${H&&J==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${L}</button>
        `:Y.level==="building"?`
            <button type="button" class="pacom-hud-pill ${H?"is-active":""}" data-toggle-hud="1">楼层 ${Ae(Y.buildingId).length}</button>
            ${L>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${L}</button>`:""}
          `:Y.level==="project"?`
              <button type="button" class="pacom-hud-pill ${H?"is-active":""}" data-toggle-hud="1">楼宇 ${a.buildings.filter(K=>K.projectId===Y.projectId).length}</button>
              ${L>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${L}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${H?"is-active":""}" data-toggle-hud="1">园区 ${a.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${be("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${h}" value="${V(ce)}" aria-label="${h}" />
          ${$}
        </div>
        ${H?`<div class="pacom-hud-sheet" data-role="hud-sheet">${$e(L)}</div>`:""}
      </div>
    `}function De(L){if(ue||S.level!=="building"&&S.level!=="floor")return"";const Y=S.buildingId,_=S.projectId,h=Ae(Y);return!W&&h.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${W?`<button type="button" class="pacom-elev-item ${S.level==="building"?"is-active":""}" data-nav-scope="building:${V(_)}:${V(Y)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${h.map($=>{const K=s.scope.allowedFloorIds.includes($.id),R=S.level==="floor"&&S.floorId===$.id,ve=$.id===m.floorId&&L>0;return`
              <button type="button" class="pacom-elev-item ${R?"is-active":""} ${K?"":"is-locked"}"
                data-nav-scope="floor:${V(_)}:${V(Y)}:${V($.id)}"
                title="${V($.name)}${K?ve?` · ${L} 条告警`:"":"（无权限）"}">
                ${ve?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${V($.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function Ee(L,Y){const _=S;if(_.level==="floor")return se?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${y==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${y==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${y==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${be("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(l*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${be("plus",14)}</button>
        </div>
      `;const h=E.length?Math.round(L/E.length*100):100,$=_.level==="building"?"418 kWh":"1,248 kWh",K=Math.round(96.2*.45+93.6*.35+h*.2),R=_.level==="building"?Ae(_.buildingId).find(ve=>ve.id===m.floorId)??Ae(_.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${K}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="environment">
          <span>舒适度 <strong>96.2%</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="energy">
          <span>今日能耗 <strong>${$}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${Y>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${Y}</strong></span>
        </button>
        ${_.level==="building"&&R?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${V(_.projectId)}:${V(_.buildingId)}:${V(R.id)}">进入 ${V(R.name)} 平面图 →</button>`:""}
      </div>
    `}function Fe(L,Y){const _=S,h=E.length?Math.round(L/E.length*100):100;if(_.level==="all-projects")return`
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
            ${a.projects.map((R,ve)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${ve===0?50:28}%; top:${ve===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${V(R.id)}">
                  <span class="pacom-dot ${Y>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${V(R.name)} · 在线 ${h}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(_.level==="project"){const R=a.projects.find(we=>we.id===_.projectId)??a.projects[0],ve=a.buildings.filter(we=>!R||we.projectId===R.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${V(R?.imageUrl??"./media/gzlab.jpg")}" alt="${V(R?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${ve.map((we,ke)=>{const pe=we.id===m.buildingId;return`
                  <button type="button" class="pacom-pin ${pe?"is-selected":""}" style="left:${ke===0?56:38}%; top:${ke===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${V(we.projectId)}:${V(we.id)}">
                    <span class="pacom-dot ${pe&&Y>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${V(we.name)} · ${pe?`在线 ${h}% · 告警 ${Y}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(_.level==="building"){const R=a.buildings.find(we=>we.id===_.buildingId),ve=Ae(_.buildingId).find(we=>we.id===m.floorId)??Ae(_.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${V(R?.imageUrl??"./media/building-e.png")}" alt="${V(R?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${ve?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${V(_.projectId)}:${V(_.buildingId)}:${V(ve.id)}">
                    <span class="pacom-dot ${Y>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${V(R?.name??"")} ${V(ve.name)} · 在线 ${L}/${E.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const $=a.floors.find(R=>R.id===_.floorId),K=Re();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${se?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${V(se)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${w}px, ${Q}px) scale(${l});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${V($?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${V($?.name??"7F")} 平面图" />
                  ${K.map((R,ve)=>{const we=ua[R.id];if(!we)return"";const ke=ie===R.id,pe=["23.2°C","24.6°C","22.8°C","23.9°C"],ze=["有人 74%","会议中","有人 52%","空闲"],Pe=y==="temp"?` · ${pe[ve%pe.length]}`:y==="occupancy"?` · ${ze[ve%ze.length]}`:"",st=y==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":y==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${ke?"is-active":""}"
                          style="left:${we.left}%; top:${we.top}%; width:${we.width}%; height:${we.height}%; ${ke?"":st}"
                          data-filter-zone="${V(ke?"all":R.id)}"
                          title="${V(R.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${V(R.name.replace(/^7F\s*/,""))}${Pe}</span>
                        </button>`}).join("")}
                  ${E.filter(R=>R.planPoint).map(R=>{const ve=re.some(Pe=>Pe.deviceId===R.id&&Pe.status==="active"),we=H&&J==="alarms",ke=ie!=="all"&&R.logicalZoneId!==ie||we&&!ve,pe=we&&ve?"background:var(--pacom-status-critical);":"",ze=R.category==="gateway"?Math.min(92,R.planPoint.y*100+5.5):R.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${R.id===T&&M?"is-selected":""} ${R.connectivity==="offline"?"pacom-pin--offline":""} ${ke?"pacom-pin--dimmed":""}"
                          style="left:${(R.planPoint.x*100).toFixed(2)}%; top:${ze.toFixed(2)}%; ${pe}"
                          data-pin-device="${V(R.id)}" title="${V(R.name)}">
                          <span class="pacom-dot ${ve?"pacom-dot--critical":R.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${V($t(R))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function Ne(){if(S.level!=="floor"||!M)return"";const L=E.find(pe=>pe.id===T);if(!L)return"";const Y=L.category==="lighting",_=L.category==="hvac",h=Number(L.telemetry.dimming?.value??50),$=Number(L.telemetry.setpoint?.value??24),K=k.has(L.id),R=re.filter(pe=>pe.deviceId===L.id&&pe.status==="active"),ve=me.filter(pe=>pe.deviceId===L.id&&pe.status!=="closed"),we=_?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:Y?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],ke=Y?[{label:"当前开关",value:h>0?"开启":"关闭"},{label:"当前亮度",value:`${h}%`},{label:"实时功率",value:h>0?`${Math.round(h*1.4)} W`:"0 W"},{label:"运行模式",value:K?"人工覆盖":"自动策略"}]:_?[{label:"室内温度",value:`${L.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${$.toFixed(1)}°C`},{label:"运行工况",value:L.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:K?"人工覆盖":"自动策略"}]:L.category==="sensor"?[{label:"实时温度",value:`${L.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${L.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${L.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:L.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:L.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:L.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:L.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:L.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${V(L.name)}</h2>
            <div class="pacom-row-sub">${V(Se(L.logicalZoneId))} · ${V(wt[L.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${L.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${L.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${be("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${z==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${z==="trend"}" data-drawer-tab="trend">趋势与告警${R.length>0?` (${R.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${z==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${z==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${ke.map(pe=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${pe.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${V(pe.value)}</strong>
                  </div>`).join("")}
            </div>

            ${_?`
                <div class="pacom-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${L.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${V(L.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${L.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${L.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${L.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${L.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${$.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${Y||_?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${K&&c?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${V(L.id)}">恢复自动策略</button>`:c?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${L.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${Y?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${c?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${c?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${h}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${h}" data-ctrl-slider="lighting.dimming" ${c?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${c?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${c?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${$-.5}" ${c?"":"disabled"}>-0.5°C</button>
                        <strong>${$.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${$+.5}" ${c?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${le?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${V(le.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${le.receipts.map(pe=>{const ze=da[pe.status]??{text:pe.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${V(pe.deviceId)}</strong> · ${V(pe.command)} → ${V(pe.targetValue)}</div>
                              ${pe.errorMessage?`<div style="color:var(--pacom-status-critical);">${V(pe.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${ze.badge}">${ze.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:z==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${Y?"亮度 %":_?"温度 °C":L.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${V(L.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${L.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${Y?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":_?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${R.length===0&&ve.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${R.map(pe=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${V(pe.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${V(pe.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${ve.map(pe=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${V(pe.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${V(pe.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${V($t(L))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${V(Se(L.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${r?`<div class="pacom-info-banner">${V(r)}</div>`:""}
                ${we.map(pe=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${V(pe.name)}">${V(pe.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${V(pe.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="pacom-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${be("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${V(L.id)}</code> · v${L.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${L.planPoint?`x=${L.planPoint.x.toFixed(2)}, y=${L.planPoint.y.toFixed(2)} (图 v${L.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${L.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${L.hardwareBinding?`${L.hardwareBinding.protocol.toUpperCase()} · ${L.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function Oe(L,Y,_){if(!q)return"";const h=Math.max(0,E.length-L),$=P==="week",K=re.filter(R=>R.status==="active").slice(0,2);return`
      <div class="pacom-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${$?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!$}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${$}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${be("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${$?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${$?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${V(_)}°C · ${L}/${E.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${Y} 告警 · ${h} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,k.size)} 覆盖 · ${me.filter(R=>R.status!=="closed").length} 工单</strong></div>
        </div>
        ${K.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${K.map(R=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${V(R.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${V(R.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function xe(){const L=re.filter(h=>h.status==="active").length,Y=E.filter(h=>h.connectivity==="online").length,_=E.find(h=>h.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${We({tree:a,session:s,scope:S,activeAlarmCount:L,isOpen:X,searchKeyword:ee})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${se?n?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${q}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${Y}/${E.length} 在线 · ${V(_)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${pa}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${Oe(Y,L,_)}

        <main class="pacom-spatial-stage">
          ${je(L)}
          ${Fe(Y,L)}
          ${De(L)}
          ${Ee(Y,L)}
          ${Ne()}
        </main>
      </div>
    `,He()}function He(){Ge(e,{onToggle:()=>{X=!X,X&&(q=!1,H=!1),xe(),X&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:h=>{ee=h,xe();const $=e.querySelector("[data-global-space-search]");$&&($.focus(),$.setSelectionRange(h.length,h.length))},onPick:h=>{X=!1,ye(h)}}),e.querySelectorAll("[data-nav-scope]").forEach(h=>{h.addEventListener("click",$=>{$.stopPropagation(),h.dataset.navScope&&ye(fe(h.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(h=>{h.addEventListener("click",$=>{$.stopPropagation();const K=h.dataset.hudTab;H&&J===K?H=!1:(J=K,H=!0,X=!1,q=!1),xe()})}),e.querySelectorAll("[data-toggle-hud]").forEach(h=>{h.addEventListener("click",$=>{$.stopPropagation(),H=!H,H&&(X=!1,q=!1),xe()})}),e.querySelectorAll("[data-close-hud]").forEach(h=>{h.addEventListener("click",$=>{$.stopPropagation(),H=!1,xe()})});const L=e.querySelector('[data-role="search"]');L?.addEventListener("focus",()=>{H||(H=!0,X=!1,q=!1,f())}),L?.addEventListener("input",h=>{ce=h.currentTarget.value,H=!0,f()}),e.querySelector('[data-role="category"]')?.addEventListener("change",h=>{Z=h.currentTarget.value,xe()}),e.querySelectorAll("[data-filter-zone]").forEach(h=>{h.addEventListener("click",$=>{$.stopPropagation(),ie=h.dataset.filterZone??"all",xe()})}),e.querySelectorAll("[data-select-device]").forEach(h=>{h.addEventListener("click",$=>{$.target.tagName!=="INPUT"&&(T=h.dataset.selectDevice??null,M=!0,xe())})}),e.querySelectorAll("[data-check-device]").forEach(h=>{h.addEventListener("change",()=>{const $=h.dataset.checkDevice;$&&(h.checked?p.add($):p.delete($),xe())})}),e.querySelectorAll("[data-pin-device]").forEach(h=>{h.addEventListener("click",$=>{$.stopPropagation(),T=h.dataset.pinDevice??null,M=!0,X=!1,q=!1,xe()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{M=!1,xe()}),e.querySelectorAll("[data-drawer-tab]").forEach(h=>{h.addEventListener("click",()=>{z=h.dataset.drawerTab??"control",r="",xe()})}),e.querySelectorAll("[data-drawer-doc]").forEach(h=>{h.addEventListener("click",()=>{r=`已调阅「${h.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,xe()})}),e.querySelectorAll("[data-briefing-period]").forEach(h=>{h.addEventListener("click",()=>{P=h.dataset.briefingPeriod??"today",xe()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.goAlarmId??"";window.location.hash=$?`#alarms?alarm=${encodeURIComponent($)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.goWoId??"";window.location.hash=$?`#alarms?wo=${encodeURIComponent($)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",h=>{const $=h.currentTarget.dataset.releaseOverride;$&&(k.delete($),xe())}),e.querySelectorAll("[data-zone-power]").forEach(h=>{h.addEventListener("click",$=>{$.stopPropagation();const K=h.dataset.zonePower,R=h.dataset.zoneVal==="true";if(!K)return;const ve=E.filter(ke=>ke.logicalZoneId===K&&ke.category==="lighting").map(ke=>ke.id),we=E.filter(ke=>ke.logicalZoneId===K&&ke.category==="hvac").map(ke=>ke.id);ve.length?d(ve,"lighting.power",R):we.length&&d(we,"hvac.power",R)})}),e.querySelectorAll("[data-locate-device]").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.locateDevice;$&&(T=$,M=!0,H=!1,xe())})}),e.querySelectorAll("[data-go-alarms]").forEach(h=>{h.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent($)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent($)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(h=>{h.addEventListener("click",$=>{$.stopPropagation(),q=!q,q&&(X=!1,H=!1),xe()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const h=E.filter(ke=>ke.connectivity==="online").length,$=re.filter(ke=>ke.status==="active").length,K=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${h}/${E.length}（离线 ${E.length-h} 台）`,`待处理告警：${$} 条`,`人工覆盖中：${k.size} 台`].join(`
`),R=new Blob([K],{type:"text/plain;charset=utf-8;"}),ve=URL.createObjectURL(R),we=document.createElement("a");we.href=ve,we.download="pacom-daily-briefing.txt",we.click(),URL.revokeObjectURL(ve)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(h=>{h.addEventListener("click",()=>{if(!T||!h.dataset.ctrlCmd)return;const $=h.dataset.ctrlVal??"",K=$==="true"?!0:$==="false"?!1:Number($);d([T],h.dataset.ctrlCmd,K)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",h=>{const $=h.currentTarget;!T||!$.dataset.ctrlSlider||d([T],$.dataset.ctrlSlider,Number($.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(h=>{h.addEventListener("click",()=>{const $=Array.from(p),K=h.dataset.batchVal??"",R=K==="true"?!0:K==="false"?!1:K;d($,h.dataset.batchCmd,R)})}),e.querySelectorAll("[data-ack-alarm]").forEach(h=>{h.addEventListener("click",async()=>{!h.dataset.ackAlarm||S.level!=="floor"||!F||(await t.acknowledgeAlarm(h.dataset.ackAlarm,"首页快速确认"),re=await t.listAlarms(S.floorId),xe())})}),e.querySelectorAll("[data-canvas-layer]").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.canvasLayer;$&&(y=$,xe())})}),e.querySelectorAll("[data-zoom]").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.zoom;$==="in"?l=Math.min(2.6,Number((l+.2).toFixed(2))):$==="out"?l=Math.max(.6,Number((l-.2).toFixed(2))):(l=1,w=0,Q=0),te()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",h=>{h.preventDefault();const $=S;if($.level!=="building"&&$.level!=="floor")return;const K=Ae($.buildingId),R=[...W?[{level:"building",projectId:$.projectId,buildingId:$.buildingId}]:[],...K.map(ke=>({level:"floor",projectId:$.projectId,buildingId:$.buildingId,floorId:ke.id}))],ve=R.findIndex(ke=>ke.level==="building"?$.level==="building":ke.level==="floor"&&$.level==="floor"&&ke.floorId===$.floorId);if(ve<0)return;const we=Math.max(0,Math.min(R.length-1,ve+(h.deltaY>0?1:-1)));we!==ve&&R[we]&&ye(R[we])},{passive:!1});const _=e.querySelector('[data-role="canvas-stage"]');if(_&&!se){let h=!1,$=!1,K=0,R=0,ve=0,we=0;_.addEventListener("pointerdown",pe=>{pe.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(h=!0,$=!1,K=pe.clientX,R=pe.clientY,ve=w,we=Q,_.classList.add("is-panning"),_.setPointerCapture?.(pe.pointerId))}),_.addEventListener("pointermove",pe=>{if(!h)return;const ze=pe.clientX-K,Pe=pe.clientY-R;(Math.abs(ze)>3||Math.abs(Pe)>3)&&($=!0),w=ve+ze,Q=we+Pe,te()});const ke=()=>{h&&(h=!1,_.classList.remove("is-panning"),!$&&(H||X||q)&&(H=!1,X=!1,q=!1,xe()))};_.addEventListener("pointerup",ke),_.addEventListener("pointercancel",ke),_.addEventListener("wheel",pe=>{pe.preventDefault();const ze=pe.deltaY<0?.12:-.12;l=Math.max(.6,Math.min(2.6,Number((l+ze).toFixed(2)))),te()},{passive:!1}),_.addEventListener("dblclick",pe=>{pe.target?.closest("button")||(l=1,w=0,Q=0,te())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",h=>{h.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .pacom-briefing-pop")||(H||X||q)&&(H=!1,X=!1,q=!1,xe())})}e.addEventListener("keydown",L=>{L.key==="Escape"&&(X||q||H||M)&&(X=!1,q=!1,H=!1,M=!1,xe())}),await ye(S,!0)}const ga=new Set(["lighting","hvac","alarm_rules"]),St={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},et=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function va(e){const t=new Set;for(const s of e.actions)s.command.startsWith("lighting")?t.add("照明"):s.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function ba(e,t,s){const a=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function ha(e,t,s){let a=Ze(),n=!1,c="",[F,C,O,G]=await Promise.all([t.getSpatialTree(),t.listScenes(m.floorId),t.getRuntimeSettings(m.projectId),t.getFloorDevices(m.floorId).catch(()=>[])]),D="manual",ae="balanced",W="all",ue=null,S="",J=!1,H=!1,X=!1,ee="all",ce=null,Z="",ie="",ne=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const ge=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],Ie=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],T=[{deviceId:G[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],M=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${O.calendar.workdayStart} – ${O.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${O.calendar.nightGuardStart} – 次日 ${O.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],z=t.subscribeFloorEvents(m.floorId,async q=>{q.type==="control.receipt.updated"&&ue?.batchId===q.batchId&&(ue=await t.getControlBatch(q.batchId),r())});function r(){const q=S.trim().toLowerCase(),P=q?C.filter(l=>`${l.name} ${l.description}`.toLowerCase().includes(q)):C,y=O.rules.filter(l=>ga.has(l.category)),k=W==="all"?y:W==="cbm"?[]:y.filter(l=>l.category===W),p=W==="all"||W==="cbm",E=ee==="issues"?ge.filter(l=>l.status!=="verified"):ge,re=et.find(l=>l.id===ae)??et[1],me=s.scope.canControlDevices,le=s.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${We({tree:F,session:s,scope:a,isOpen:n,searchKeyword:c})}
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${ne.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${ne.length>0?`人工覆盖中：${ne.length} 台 ${be("chevron-down",12)}`:`全部自动托管 ${be("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${X?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${ge.length}）</button>
              ${D==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${J?"收起表单":"+ 新建场景"}</button>`:D==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D==="manual"}" data-scene-tab="manual">快捷场景（${C.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D==="rules"}" data-scene-tab="rules">条件联动（${y.length+Ie.length}）</button>
          </nav>
        </header>

        ${H?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${ne.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${be("x",16)}</button>
              </div>
              ${ne.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':ne.map(l=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${l.name}</div>
                            <div class="pacom-row-sub">${l.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${l.id}" ${me?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${ne.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${me?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${X?`
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
                  <button class="pacom-tab" aria-selected="${ee==="all"}" data-log-filter="all">全部（${ge.length}）</button>
                  <button class="pacom-tab" aria-selected="${ee==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${E.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${E.map(l=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${l.device}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${l.source}</span>
                        </div>
                        <span class="pacom-row-sub">${l.action} · ${l.at}</span>
                      </div>
                      <span class="pacom-badge ${l.status==="verified"?"pacom-badge--online":l.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${l.status==="verified"?"回读确认":l.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${Z?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${Z}</span></div>`:""}
          ${ie?`<div class="pacom-alert-banner">${ie}</div>`:""}

          ${D==="manual"?`
              ${ue?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${ue.batchId}</span>
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
                            ${ue.receipts.map(l=>`
                                <tr>
                                  <td><code style="font-size:12px;">${l.deviceId}</code></td>
                                  <td>${l.command}</td>
                                  <td>${String(l.targetValue)}${l.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${l.errorMessage}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${l.status==="verified_success"?"pacom-badge--online":l.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${l.status}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${J?`
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
                        ${T.map((l,w)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${w}" aria-label="目标设备">
                                ${G.map(Q=>`<option value="${Q.id}" ${Q.id===l.deviceId?"selected":""}>${Q.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${w}" aria-label="执行指令">
                                <option value="lighting.dimming" ${l.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${l.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${l.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${w}" value="${l.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${w}" ${T.length<=1?"disabled":""}>移除</button>
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
                ${P.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':P.map(l=>{const w=va(l),Q=l.actions.slice(0,3).map(he=>{const Re=G.find(ye=>ye.id===he.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??he.deviceId,Ae=he.command==="lighting.dimming"?`亮度 ${he.targetValue}%`:he.command==="hvac.setpoint"?`设温 ${he.targetValue}°C`:he.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${Re} → ${Ae}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${l.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${w.map(he=>`<span class="pacom-badge pacom-badge--accent">${he}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${l.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${l.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${Q}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${l.lastExecutedAt?l.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${l.id}" ${me?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:D==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${re.title}</div>
                    <span class="pacom-kpi-delta">${re.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${re.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${re.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${ne.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${et.map(l=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${ae===l.id}" data-oss-mode="${l.id}" ${me?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${l.title}</strong>
                          <span class="pacom-badge ${ae===l.id?"pacom-badge--online":"pacom-badge--neutral"}">${ae===l.id?"当前生效":l.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${l.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${l.estSaving}</span>
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
                          ${M.map(l=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${l.name}</span>
                                    ${l.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${l.windowLabel}</div>
                                </td>
                                <td>${ba(l.startHour,l.endHour,l.enabled)}</td>
                                <td><span class="pacom-row-sub">${l.scope}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${l.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${l.enabled}"
                                      aria-label="切换排程 ${l.name}"
                                      data-toggle-schedule="${l.id}"
                                      ${me?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(l=>{const w=l==="all"?"全部":St[l]??l,Q=l==="all"?y.length+Ie.length:l==="cbm"?Ie.length:y.filter(he=>he.category===l).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${W===l}" data-rule-cat="${l}">
                              <span>${w}</span><span class="pacom-count-num">${Q}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${k.map(l=>{const w=ce===l.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${St[l.category]??l.category}</span>
                                  <span>${l.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${l.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${l.summary} · 范围：${l.scopeLabel} · 回执：${l.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${l.id}">${w?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${l.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${l.enabled?"true":"false"}"
                                  aria-label="切换 ${l.name}"
                                  data-toggle-strategy-rule="${l.id}"
                                  data-rule-ver="${l.version}"
                                  data-rule-next="${!l.enabled}"
                                  ${le?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${w?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${l.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":l.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${l.scopeLabel} · 当前版本：v${l.version} · 最近同步：${l.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${p?Ie.map(l=>{const w=Math.min(100,Math.round(l.runtimeHours/l.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${l.name}</span>
                                      <span class="pacom-badge ${w>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${l.runtimeHours} / ${l.thresholdHours} h（${w}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${w}%; background:${w>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${l.equipment} · 上次重置：${l.lastReset}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${l.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${l.enabled}" data-toggle-cbm="${l.id}" aria-label="切换 ${l.name}" ${le?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,Ge(e,{onToggle:()=>{n=!n,r(),n&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:l=>{c=l,r();const w=e.querySelector("[data-global-space-search]");w&&(w.focus(),w.setSelectionRange(l.length,l.length))},onPick:l=>{a=l,n=!1,r()}}),e.querySelectorAll("[data-scene-tab]").forEach(l=>{l.addEventListener("click",()=>{D=l.dataset.sceneTab??"manual",Z="",r()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(l=>{l.addEventListener("click",()=>{H=!H,r()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{ne=[],Z="已释放全部人工覆盖设备，自动节能策略已恢复托管。",r()}),e.querySelectorAll("[data-release-one]").forEach(l=>{l.addEventListener("click",()=>{const w=l.dataset.releaseOne;ne=ne.filter(Q=>Q.id!==w),Z="已恢复该设备的自动策略托管。",r()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(l=>{l.addEventListener("click",()=>{X=!X,r()})}),e.querySelectorAll("[data-log-filter]").forEach(l=>{l.addEventListener("click",()=>{ee=l.dataset.logFilter??"all",r()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{ue=null,r()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(l=>{l.addEventListener("click",()=>{const w=l.dataset.ossMode;if(!w)return;ae=w;const Q=et.find(he=>he.id===w);Z=`已切换至「${Q?.title??w}」模式（明日预测启动 ${Q?.predictedStart??""}）。`,r()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(l=>{l.addEventListener("click",()=>{const w=l.dataset.toggleSchedule,Q=M.find(he=>he.id===w);Q&&(Q.enabled=!Q.enabled,Z=`排程「${Q.name}」已${Q.enabled?"恢复启用":"临时暂停"}。`,r())})}),e.querySelectorAll("[data-rule-cat]").forEach(l=>{l.addEventListener("click",()=>{W=l.dataset.ruleCat??"all",r()})}),e.querySelectorAll("[data-expand-rule]").forEach(l=>{l.addEventListener("click",()=>{const w=l.dataset.expandRule??null;ce=ce===w?null:w,r()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(l=>{l.addEventListener("click",()=>{const w=Ie.find(Q=>Q.id===l.dataset.toggleCbm);w&&(w.enabled=!w.enabled,Z=`工时维保规则「${w.name}」已${w.enabled?"启用":"停用"}。`,r())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(l=>{l.addEventListener("click",async()=>{ie="";try{await t.toggleRuntimeRule(l.dataset.toggleStrategyRule,l.dataset.ruleNext==="true",Number(l.dataset.ruleVer)),O=await t.getRuntimeSettings(m.projectId),Z="条件联动规则状态与版本回执已更新。",r()}catch(w){ie=w instanceof Error?w.message:String(w),r()}})}),e.querySelectorAll("[data-toggle-create]").forEach(l=>{l.addEventListener("click",()=>{J=!J,r()})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{T.push({deviceId:G[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),r()}),e.querySelectorAll("[data-del-draft-action]").forEach(l=>{l.addEventListener("click",()=>{const w=Number(l.dataset.delDraftAction);T.length>1&&(T.splice(w,1),r())})}),e.querySelectorAll("[data-draft-dev]").forEach(l=>{l.addEventListener("change",()=>{const w=T[Number(l.dataset.draftDev)];w&&(w.deviceId=l.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(l=>{l.addEventListener("change",()=>{const w=T[Number(l.dataset.draftCmd)];w&&(w.command=l.value)})}),e.querySelectorAll("[data-draft-val]").forEach(l=>{l.addEventListener("change",()=>{const w=T[Number(l.dataset.draftVal)];w&&(w.targetValue=l.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",l=>{const w=l.currentTarget,Q=w.selectionStart??w.value.length;S=w.value,r();const he=e.querySelector("[data-scene-search]");he&&(he.focus(),he.setSelectionRange(Q,Q))}),e.querySelectorAll("[data-exec-scene]").forEach(l=>{l.addEventListener("click",async()=>{ie="";const w=C.find(Q=>Q.id===l.dataset.execScene);try{ue=await t.executeScene(l.dataset.execScene),C=await t.listScenes(m.floorId),ge.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:w?.name??"E7F 场景",action:`${ue.receipts.length} 台设备联动下发`,status:"verified"}),r()}catch(Q){ie=Q instanceof Error?Q.message:String(Q),r()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async l=>{l.preventDefault();const w=new FormData(l.currentTarget);try{await t.createScene({projectId:m.projectId,floorId:m.floorId,name:String(w.get("name")??""),description:String(w.get("description")??""),actions:T.map(Q=>({deviceId:Q.deviceId,command:Q.command,targetValue:Q.targetValue==="true"?!0:Q.targetValue==="false"?!1:Number(Q.targetValue)||50}))}),C=await t.listScenes(m.floorId),J=!1,Z=`快捷场景已保存（共绑定 ${T.length} 条联动动作）。`,r()}catch(Q){ie=Q instanceof Error?Q.message:String(Q),r()}})}r(),window.addEventListener("hashchange",()=>z(),{once:!0})}const It={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function rt(e,t){return e.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(s=>`
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
      </div>`).join("")}async function fa(e,t,s){let a="calendar",n=Ze(),c=!1,F="";const[C,O]=await Promise.all([t.getSpatialTree(),t.getRuntimeSettings(m.projectId)]);let G=O,D=G.calendar.workdayStart,ae=G.calendar.workdayEnd,W=G.calendar.nightGuardStart,ue=G.calendar.nightGuardEnd,S=!0,J=[];const H=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let X="flat";const ee={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},ce={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},Z={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},ie={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},ne=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let ge="",Ie="";function T(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(r=>{const q=It[r];return`
                <button type="button" class="pacom-unified-item" aria-current="${a===r}" data-stab="${r}">
                  ${be(q.icon,16)}
                  <span>${q.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function M(){const z=s.scope.canEditDeployment,r=C.projects[0]?.name??"当前项目",q=G.rules.filter(p=>p.category==="weather_area"),P=G.rules.filter(p=>p.category==="metering_carbon"),y=G.rules.filter(p=>p.category==="templates"),k=It[a];e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${We({tree:C,session:s,scope:n,maxGranularity:"project",isOpen:c,searchKeyword:F})}
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
                <h2 class="pacom-unified-title">${k.label}</h2>
                <p class="pacom-unified-subtitle">${k.subtitle}</p>
              </div>
              ${ge?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${ge}</span></div>`:""}
              ${Ie?`<div class="pacom-alert-banner">${Ie}</div>`:""}

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
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${ae}" aria-label="工作日下班时间" ${z?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${W}" aria-label="夜间值守开始" ${z?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${ue}" aria-label="夜间值守结束" ${z?"":"disabled"} />
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
                      <span class="pacom-row-sub">共 ${H.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${H.map(p=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${p.date}</span><span class="pacom-badge pacom-badge--accent">${p.mode}</span></span>
                              <span class="pacom-setting-desc">${p.label}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${p.id}" ${z?"":"disabled"}>移除</button>
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

                  ${J.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${J.length} 条</span>
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
                                ${J.map(p=>`
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
                            <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${z?"":"disabled"}>
                              <option value="guanzhou_station" ${ee.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${ee.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${r}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${ee.billingArea}" aria-label="计费面积" ${z?"":"disabled"} />
                          </div>
                        </div>
                        ${rt(q,z)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${X==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${X==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${X==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${ee.tariffYuan}" aria-label="综合电价" ${z?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${ee.tariffPeak}" ${z?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${ee.tariffFlat}" ${z?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${ee.tariffValley}" ${z?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${z?"":"disabled"}>
                              <option value="0.5271" ${ee.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${ee.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${rt(P,z)}
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
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${ce.minTemp}" aria-label="最低设定温度" ${z?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${ce.maxTemp}" aria-label="最高设定温度" ${z?"":"disabled"} />
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
                                <option value="2h" ${ce.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${ce.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${ce.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${ce.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${ce.readbackTimeoutSec}" aria-label="回读超时阈值" ${z?"":"disabled"} />
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
                          ${rt(y,z)}
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
                              <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${ie.dailyDigestTime}" aria-label="每日简报发送时间" />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ie.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ie.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
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
                                ${ne.map(p=>`
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
    `,Ge(e,{onToggle:()=>{c=!c,M(),c&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:p=>{F=p,M();const E=e.querySelector("[data-global-space-search]");E&&(E.focus(),E.setSelectionRange(p.length,p.length))},onPick:p=>{n=p,c=!1,M()}}),e.querySelectorAll("[data-stab]").forEach(p=>{p.addEventListener("click",()=>{a=p.dataset.stab??"calendar",ge="",Ie="",M()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{S=!S,ge=`法定节假日自动跳过已${S?"开启":"关闭"}。`,M()}),e.querySelector("[data-night-start]")?.addEventListener("change",p=>{W=p.currentTarget.value}),e.querySelector("[data-night-end]")?.addEventListener("change",p=>{ue=p.currentTarget.value}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",p=>{p.preventDefault();const E=new FormData(p.currentTarget);H.push({id:`sd-${Date.now()}`,date:String(E.get("date")??""),label:String(E.get("label")??""),mode:String(E.get("mode")??"保持工作日工况")}),ge="已添加特殊例外日期，当日自动覆盖默认节假日排程。",M()}),e.querySelectorAll("[data-del-sd]").forEach(p=>{p.addEventListener("click",()=>{const E=H.findIndex(re=>re.id===p.dataset.delSd);E>=0&&H.splice(E,1),M()})}),e.querySelectorAll("[data-tariff-mode]").forEach(p=>{p.addEventListener("click",()=>{X=p.dataset.tariffMode??"flat",M()})}),e.querySelectorAll("[data-energy-field]").forEach(p=>{p.addEventListener("change",()=>{const E=p.dataset.energyField;E&&(ee[E]=p.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{ge=X==="flat"?`能耗计费与气象口径已保存（面积 ${ee.billingArea} m² · 综合电价 ¥${ee.tariffYuan}/kWh · 因子 ${ee.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${ee.tariffPeak} / 平 ¥${ee.tariffFlat} / 谷 ¥${ee.tariffValley}）。`,M()}),e.querySelectorAll("[data-guard-field]").forEach(p=>{p.addEventListener("change",()=>{const E=p.dataset.guardField;E&&(ce[E]=p.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{ge=`控制保护参数已保存（温区 ${ce.minTemp}–${ce.maxTemp}°C · 超时 ${ce.readbackTimeoutSec}s）。`,M()}),e.querySelectorAll("[data-auto-wo]").forEach(p=>{p.addEventListener("change",()=>{const E=p.dataset.autoWo;E&&(Z[E]=p.value),ge="超时自动派单配置已更新。",M()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(p=>{p.addEventListener("click",()=>{const E=p.dataset.toggleAutowo;E&&(Z[E]=!Z[E],ge="自动派单保护策略已更新。",M())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",p=>{ie.dailyDigestTime=p.currentTarget.value,ge=`每日晨间简报发送时刻已更新为 ${ie.dailyDigestTime}。`,M()}),e.querySelectorAll("[data-notify-key]").forEach(p=>{p.addEventListener("click",()=>{const E=p.dataset.notifyKey;E&&(ie[E]=!ie[E],ge="消息通知偏好已更新。",M())})}),e.querySelectorAll("[data-toggle-nr]").forEach(p=>{p.addEventListener("click",()=>{const E=ne.find(re=>re.id===p.dataset.toggleNr);E&&(E.enabled=!E.enabled,ge=`工作组「${E.groupName}」的分流推送规则已${E.enabled?"启用":"停用"}。`,M())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",p=>{D=p.currentTarget.value}),e.querySelector("[data-cal-end]")?.addEventListener("change",p=>{ae=p.currentTarget.value}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{Ie="",J=await t.previewCalendarImpact(m.projectId,D,ae),M()}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{Ie="";try{const p=await t.saveWorkCalendar(m.projectId,D,ae,G.calendar.version);G={...G,calendar:{...p,nightGuardStart:W,nightGuardEnd:ue}},ge=`工作时间配置已保存至 v${p.version}（工作日 ${p.workdayStart}–${p.workdayEnd} · 夜间值守 ${W}–${ue}）`,J=[],M()}catch(p){Ie=p instanceof Error?p.message:String(p),M()}}),e.querySelectorAll("[data-toggle-rule]").forEach(p=>{p.addEventListener("click",async()=>{Ie="";try{await t.toggleRuntimeRule(p.dataset.toggleRule,p.dataset.ruleNext==="true",Number(p.dataset.ruleVer)),G=await t.getRuntimeSettings(m.projectId),ge="策略状态与版本回执已更新。",M()}catch(E){Ie=E instanceof Error?E.message:String(E),M()}})})}M()}const kt="pacom.web.sidebar.collapsed",ya=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,dt=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],ut={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},Et=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function pt(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in ut?e:"home"}function Me(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function $a(e,t,s,a){e.classList.remove("bare-login");let n=s,c=pt(),F=localStorage.getItem(kt)==="1",C=!1,O=!1,G="",D=!1,ae=0,W={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const ue=t.mode==="demo"&&typeof t.switchDemoRole=="function";async function S(){try{const[y,k,p,E,re]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(m.floorId).catch(()=>[]),t.listAlarms(m.floorId).catch(()=>[]),t.listWorkOrders(m.floorId).catch(()=>[]),t.listScenes(m.floorId).catch(()=>[])]);W={devices:k,zones:y.zones,alarms:p,workOrders:E,scenes:re},ae=p.filter(me=>me.status==="active").length,ne()}catch{}}function J(){return dt.map(y=>`
        ${y.id==="settings"?'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${y.id}" aria-current="${c===y.id?"page":"false"}" title="${y.label}">
          ${be(y.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${y.label}</span>
          ${y.id==="alarms"&&ae>0?`<span class="pacom-nav-count" title="待处理告警 ${ae} 条">${ae}</span>`:""}
        </button>`).join("")}function H(){const y=G.trim().toLowerCase(),k=y?dt.filter(w=>w.label.toLowerCase().includes(y)).slice(0,4):dt,p=y?W.devices.filter(w=>`${w.name} ${w.id} ${w.category}`.toLowerCase().includes(y)).slice(0,5):W.devices.slice(0,3),E=y?W.zones.filter(w=>w.name.toLowerCase().includes(y)).slice(0,3):[],re=y?W.alarms.filter(w=>`${w.title} ${w.message} ${w.id}`.toLowerCase().includes(y)).slice(0,4):W.alarms.filter(w=>w.status==="active").slice(0,2),me=y?W.workOrders.filter(w=>`${w.title} ${w.id}`.toLowerCase().includes(y)).slice(0,3):[],le=y?W.scenes.filter(w=>`${w.name} ${w.description}`.toLowerCase().includes(y)).slice(0,3):[],se=y?Et.filter(w=>`${w.title} ${w.category}`.toLowerCase().includes(y)).slice(0,4):Et.slice(0,2),l=[];return p.length&&l.push(`<div class="pacom-search-group">${y?"设备（空间总览）":"常用设备直达"}</div>`+p.map(w=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(w.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Me(w.name)}</span><span class="pacom-badge ${w.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${w.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),E.length&&l.push('<div class="pacom-search-group">功能区</div>'+E.map(w=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(w.id)}"><span>${Me(w.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),re.length&&l.push(`<div class="pacom-search-group">${y?"告警":"待处理告警"}</div>`+re.map(w=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(w.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Me(w.title)}</span><span class="pacom-badge pacom-badge--warning">${w.status==="active"?"待处理":"已确认"}</span></button>`).join("")),me.length&&l.push('<div class="pacom-search-group">运维工单</div>'+me.map(w=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(w.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Me(w.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),le.length&&l.push('<div class="pacom-search-group">智能策略</div>'+le.map(w=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${Me(w.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),se.length&&l.push('<div class="pacom-search-group">图纸与工程文档</div>'+se.map(w=>`<button type="button" class="pacom-search-hit" data-search-hash="${w.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Me(w.title)}</span><span class="pacom-badge pacom-badge--neutral">${Me(w.category)}</span></button>`).join("")),k.length&&l.push('<div class="pacom-search-group">工作区</div>'+k.map(w=>`<button type="button" class="pacom-search-hit" data-search-hash="#${w.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${be(w.icon,14)}${Me(w.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),l.length?l.join(""):`<div class="pacom-nav-empty">未找到与「${Me(G)}」匹配的设备、区域、告警、工单或图纸</div>`}function X(y){y.querySelectorAll("[data-search-hash]").forEach(k=>{k.addEventListener("click",()=>{const p=k.dataset.searchHash||"#home";D=!1,G="",ee(),C=!1,window.location.hash===p?(c=pt(),M(!0)):window.location.hash=p})})}function ee(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!D)return;const y=document.createElement("div");y.className="pacom-cmd-scrim",y.dataset.role="cmd-scrim",y.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${be("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${Me(G)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${H()}
        </div>
      </div>
    `,e.appendChild(y),y.addEventListener("click",E=>{E.target===y&&(D=!1,ee())});const k=y.querySelector('[data-role="cmd-input"]'),p=y.querySelector('[data-role="cmd-body"]');p&&X(p),k?.focus(),k?.addEventListener("input",E=>{G=E.currentTarget.value,p&&(p.innerHTML=H(),X(p))})}function ce(){if(!O)return"";const y=n.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${F?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${Me(n.roleLabel)}${ue?" · 演示":""}</small>
          </span>
          ${be("check",16,"pacom-pop-check")}
        </button>

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${be("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${Me(y)}</span>
          <span class="pacom-pop-text">
            <b>${Me(n.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${ue?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(qe).map(k=>{const p=qe[k],E=k===n.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${E}" data-pop-role="${k}">
                      <span class="pacom-pop-text">
                        <b>${Me(p.roleLabel)}</b>
                        <small>${Me(p.displayName)}</small>
                      </span>
                      ${E?be("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${be("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function Z(y){switch(document.title=`${ut[c]} · PACOM Station`,c){case"home":await ma(y,t,n);return;case"analysis":await aa(y,t,n);return;case"alarms":await Ut(y,t,n);return;case"scenes":await ha(y,t,n);return;case"settings":await fa(y,t,n);return;case"deployment":await ra(y,t,n);return;case"account":await Rt(y,t,n,k=>{n=k,M(!0)},ie);return}}async function ie(){O=!1,C=!1,D=!1,P();try{await t.logout()}finally{window.location.hash="#login",a()}}function ne(){const y=e.querySelector('[data-role="nav-list"]');y&&(y.innerHTML=J(),Ie())}function ge(){e.querySelector('[data-role="org-popover"]')?.remove();const y=e.querySelector('[data-role="org-menu-btn"]');if(y&&y.setAttribute("aria-expanded",String(O)),!O)return;const k=document.createElement("div");k.innerHTML=ce().trim();const p=k.firstElementChild;p&&(e.appendChild(p),T())}function Ie(){e.querySelectorAll("[data-route]").forEach(y=>{y.addEventListener("click",()=>{const k=y.dataset.route;k===c&&!C||(c=k,C=!1,O=!1,window.location.hash=`#${c}`,M(!0))})})}function T(){e.querySelectorAll('[data-pop-act="go-account"]').forEach(y=>{y.addEventListener("click",()=>{O=!1,C=!1,c="account",window.location.hash="#account",M(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{ie()}),e.querySelectorAll("[data-pop-role]").forEach(y=>{y.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const k=y.dataset.popRole;O=!1,C=!1,n=await t.switchDemoRole(k),await M(!0)})})}async function M(y){const k=e.querySelector('[data-role="main-stage"]');if(!y&&k){const E=e.querySelector(".pacom-nav-rail");E&&(E.classList.toggle("is-collapsed",F),E.classList.toggle("is-mobile-open",C));const re=e.querySelector('[data-role="mobile-scrim"]');re&&re.classList.toggle("is-open",C),ge();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${be("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${ut[c]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Me(n.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${C?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${F?"is-collapsed":""} ${C?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${ya}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${F?"展开侧栏":"收起侧栏"}" aria-label="${F?"展开侧栏":"收起侧栏"}">
              ${be("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${be("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${J()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${c==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${O}" title="广州国家实验室 · ${Me(n.displayName)}">
              <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
              <span class="pacom-org-name">广州国家实验室</span>
              ${be("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{F=!F,O=!1,localStorage.setItem(kt,F?"1":"0");const E=e.querySelector(".pacom-nav-rail"),re=e.querySelector('[data-role="toggle-sidebar"]');E&&E.classList.toggle("is-collapsed",F),re&&(re.title=F?"展开侧栏":"收起侧栏",re.setAttribute("aria-label",re.title),re.innerHTML=be("panel-left",16)),ge()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{O=!1,ge(),D=!0,ee()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{C=!C,M(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{C=!1,O=!1,M(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",E=>{E.stopPropagation(),O=!O,ge()}),Ie(),ge(),ee();const p=e.querySelector('[data-role="main-stage"]');p&&await Z(p)}const z=y=>{const k=y.target;O&&!k?.closest('[data-role="org-popover"]')&&!k?.closest('[data-role="org-menu-btn"]')&&(O=!1,ge())},r=y=>{if((y.metaKey||y.ctrlKey)&&y.key.toLowerCase()==="k"){y.preventDefault(),O=!1,ge(),D=!D,ee();return}y.key==="Escape"&&(D?(D=!1,ee()):O?(O=!1,ge()):C&&(C=!1,M(!1)))},q=()=>{c=pt(),O=!1,C=!1,D=!1,M(!0),S()};function P(){document.removeEventListener("click",z),document.removeEventListener("keydown",r),window.removeEventListener("hashchange",q)}document.addEventListener("click",z),document.addEventListener("keydown",r),window.addEventListener("hashchange",q),await M(!0),S()}const wa=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,xa='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Sa='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',Ke=be("x",16),Lt={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},Ia={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function ka(e){const t=e.replace(/\D/g,"");return t.length===11?`${t.slice(0,3)} •••• ${t.slice(7)}`:e}function Te(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function jt(e,t,s){e.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,n=!1,c="",F="",C="",O="",G=!1,D={},ae="",W=!1,ue="",S=0,J=null,H=null,X="privacy",ee="",ce="",Z="";const ie=t.mode==="demo"&&typeof t.switchDemoRole=="function";function ne(){J!==null&&(window.clearInterval(J),J=null),e.classList.remove("bare-login")}function ge(){S=60,J!==null&&window.clearInterval(J),J=window.setInterval(()=>{S-=1,S<=0&&(S=0,J!==null&&(window.clearInterval(J),J=null));const z=e.querySelector('[data-act="send-sms"]');z&&(z.disabled=S>0,z.textContent=S>0?`${S} 秒后重发`:ue?"重新获取":"获取验证码")},1e3)}function Ie(){if(!H)return"";if(H==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ke}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Te(ce)}" />
                  </div>
                </div>
                ${Z?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${Te(Z)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(H==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ke}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${ie?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${ie?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(H==="legal"){const z=Lt[X],r=["privacy","terms","service"].map(q=>`<button type="button" role="tab" aria-selected="${X===q}" class="au-legal-tab ${X===q?"is-active":""}" data-act="switch-legal" data-tab="${q}">${Lt[q].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ke}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${r}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${z.items.map(q=>`<li>${Te(q)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return H==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ke}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${ee||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:H==="demoRoles"&&ie?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ke}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(qe).map(z=>{const r=qe[z];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${z}">
                        <div>
                          <b>${Te(r.roleLabel)} · ${Te(r.displayName)}</b>
                          <small>${Te(Ia[z])}</small>
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
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Te(C)}" aria-invalid="${D.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${S>0?"disabled":""}>
              ${S>0?`${S} 秒后重发`:ue?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Te(D.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${ue?`验证码已发送至 ${Te(ka(ue))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${D.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Te(c)}" aria-invalid="${D.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Te(D.id??"")}</p>
        </div>
      `,r=a?`
        <div class="au-field ${D.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Te(O)}" aria-invalid="${D.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Te(D.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${D.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${n?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Te(F)}" aria-invalid="${D.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${n?"隐藏密码":"显示密码"}">
              ${n?Sa:xa}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Te(D.pwd??"")}</p>
        </div>
      `;e.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${wa}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${W?"disabled":""}>
                  ${z}
                  ${r}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${ae?"":"hidden"}>${Te(ae)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${G?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${W?"disabled":""}>
                    ${W?"正在登录…":"登录"}
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
                ${ie?`<div class="au-demo-bar">
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
      ${Ie()}
    `,M()}function M(){const z=e.querySelector("#au-id"),r=e.querySelector("#au-pwd"),q=e.querySelector("#au-sphone"),P=e.querySelector("#au-scode"),y=e.querySelector('input[name="keep"]');z?.addEventListener("input",()=>{if(c=z.value,D.id||ae){delete D.id,ae="",z.closest(".au-field")?.classList.remove("bad");const k=e.querySelector("#au-id-err");k&&(k.textContent="");const p=e.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),r?.addEventListener("input",()=>{if(F=r.value,D.pwd||ae){delete D.pwd,ae="",r.closest(".au-field")?.classList.remove("bad");const k=e.querySelector("#au-pwd-err");k&&(k.textContent="");const p=e.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),q?.addEventListener("input",()=>{if(C=q.value,D.sphone||ae){delete D.sphone,ae="",q.closest(".au-field")?.classList.remove("bad");const k=e.querySelector("#au-sphone-err");k&&(k.textContent="");const p=e.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),P?.addEventListener("input",()=>{if(O=P.value.replace(/\D/g,"").slice(0,6),P.value=O,D.scode||ae){delete D.scode,ae="",P.closest(".au-field")?.classList.remove("bad");const k=e.querySelector("#au-scode-err");k&&(k.textContent="");const p=e.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),y?.addEventListener("change",()=>{G=y.checked}),e.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{n=!n,T(),e.querySelector("#au-pwd")?.focus()}),e.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,D={},ae="",T(),e.querySelector(a?"#au-sphone":"#au-id")?.focus()}),e.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const k=C.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(k)){D={sphone:"请输入有效的手机号码"},T(),e.querySelector("#au-sphone")?.focus();return}D={},ue=k,ge(),T(),e.querySelector("#au-scode")?.focus()}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async k=>{if(k.preventDefault(),!W){if(D={},ae="",a?(C.trim()||(D.sphone="请输入手机号码"),/^\d{6}$/.test(O.trim())||(D.scode="请输入 6 位验证码")):(c.trim()||(D.id="请输入电子邮箱或手机号码"),F||(D.pwd="请输入密码")),Object.keys(D).length>0){T();const p=Object.keys(D)[0];e.querySelector(`#au-${p}`)?.focus();return}W=!0,T();try{const p=await t.login({account:(a?C:c).trim(),password:a?O.trim():F});ne(),s(p)}catch(p){W=!1,ae=p instanceof Error?p.message:"账户或密码不正确",T()}}}),e.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{ce=c.trim(),Z="",H="reset",T(),e.querySelector("#au-rs-id")?.focus()}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{H="register",T()}),e.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{H="legal",T()}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{ee="",H="contact",T()}),e.querySelectorAll('[data-act="open-demo-roles"]').forEach(k=>{k.addEventListener("click",()=>{H="demoRoles",T()})}),e.querySelectorAll('[data-act="close-modal"]').forEach(k=>{k.addEventListener("click",()=>{H=null,T()})}),e.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",k=>{k.target===k.currentTarget&&(H=null,T())}),e.querySelectorAll('[data-act="switch-legal"]').forEach(k=>{k.addEventListener("click",()=>{const p=k.dataset.tab;p&&(X=p,T())})}),e.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),ee="已复制"}catch{ee="support@pacom.cn"}T()}),e.querySelector("#au-reset-form")?.addEventListener("submit",k=>{k.preventDefault(),ce=e.querySelector("#au-rs-id")?.value.trim()??"",ce?ie?Z="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":Z="如账户存在，验证码已发送。":Z="请输入电子邮箱或手机号码",T()}),e.querySelectorAll('[data-act="pick-demo-role"]').forEach(k=>{k.addEventListener("click",async()=>{const p=k.dataset.roleId;if(!p||!t.switchDemoRole)return;const E=await t.switchDemoRole(p);ne(),s(E)})})}T()}async function Ea(){const e=document.getElementById("app");if(e)try{const t=Mt(),s=await t.getSession(),a=async n=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await $a(e,t,n,()=>{jt(e,t,c=>{a(c)})})};if(!s||window.location.hash==="#login"){jt(e,t,n=>{a(n)});return}await a(s)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(t)}</div></div>`}}Ea();
//# sourceMappingURL=index-C7ycS5p9.js.map
