(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const A of r.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&a(A)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const g={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"};function ia(){const t="2026-11-25T09:00:00Z",e=[];for(let r=1;r<=22;r+=1){const A=r===7?g.floorId:r===8?g.lockedFloor8Id:r===6?g.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${r}`,C=String(r).padStart(2,"0");e.push({id:A,buildingId:g.buildingId,kind:"above",level:r,name:`${r}F`,areaSqm:r===7?1383.1:r===1?2680:r<=4?1920:1480,plan:{floorId:A,imageUrl:`./media/floors/e/${C}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const o="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";e.push({id:o,buildingId:g.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:o,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}});const a=[];for(let r=1;r<=12;r+=1){const A=`structure-f-above-${r}`,C=String(r).padStart(2,"0");a.push({id:A,buildingId:g.buildingFId,kind:"above",level:r,name:`${r}F`,areaSqm:r===1?2450:r<=3?2100:1580,plan:{floorId:A,imageUrl:`./media/floors/f/${C}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const n="structure-f-roof-1";return a.push({id:n,buildingId:g.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:n,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}}),{projects:[{id:g.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"},{id:g.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:g.buildingId,projectId:g.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:g.buildingFId,projectId:g.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...e,...a],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:g.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:g.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:g.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:g.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:o,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:n,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Ut=ia(),bt=Ut.floors.map(t=>t.id),Pe={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[g.projectId,g.project1Id],allowedBuildingIds:[g.buildingId,g.buildingFId],allowedFloorIds:[...bt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[g.projectId],allowedBuildingIds:[g.buildingId,g.buildingFId],allowedFloorIds:[...bt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[g.projectId],allowedBuildingIds:[g.buildingId],allowedFloorIds:[g.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[g.projectId],allowedBuildingIds:[g.buildingId,g.buildingFId],allowedFloorIds:[...bt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[g.projectId],allowedBuildingIds:[g.buildingId],allowedFloorIds:[g.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},ct="pacom.web.demo.role",Et="pacom.web.demo.spatial.v5",jt="pacom.web.demo.orgs.v1",Lt="pacom.web.demo.activeOrg.v1",He="org-gzlab";class ca{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){this.orgs=this.loadOrgs();const e=typeof localStorage<"u"?localStorage.getItem(Lt):null,o=this.orgs.find(r=>r.id===e)??this.orgs[0];this.activeOrgId=o.id,this.spatial=o.spatial,this.syncAdminScopesFromSpatial();const a=typeof sessionStorage<"u"?sessionStorage.getItem(ct):null;a&&Pe[a]&&(this.activeSession=structuredClone(Pe[a]));const n=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:g.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:n,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:n,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:g.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:n,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:n,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:g.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:n,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:n,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:g.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:n,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:n,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:n,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:n,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:g.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:n,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:g.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:n,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:n,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:n,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:n,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:n,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:n},{id:"conn-e7f-dali",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:n},{id:"conn-e7f-modbus",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:g.projectId,floorId:g.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:g.projectId,floorId:g.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:g.projectId,floorId:g.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:g.projectId,floorId:g.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:g.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:g.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:n,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:g.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:n,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:g.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:n,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:g.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:n,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:g.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:n,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:g.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:n,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(Pe).map((r,A)=>({userId:r.userId,displayName:r.displayName,email:`${r.role.replaceAll("_",".")}@gzlab.ac.cn`,role:r.role,roleLabel:r.roleLabel,scopeSummary:r.scope.allowedZoneIds?.length?`E栋 7F（${r.scope.allowedZoneIds.length} 个我的区域）`:`${r.scope.allowedProjectIds.length} 项目 / ${r.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:A===0?n:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,o,a,n,r){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:o,endpoint:a,request:r,response:n}),this.traces.length>40&&this.traces.pop()}pushAudit(e,o,a,n){const r=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:r?.displayName??"anonymous",role:r?.role??"member",action:e,target:o,result:a,detail:n})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const o=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(Pe[o]),sessionStorage.setItem(ct,o),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(ct),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(Pe[e]),sessionStorage.setItem(ct,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(Et);if(e){const o=JSON.parse(e);if(Array.isArray(o?.projects)&&Array.isArray(o?.buildings)&&Array.isArray(o?.floors)&&Array.isArray(o?.zones))return o}}}catch{}return structuredClone(Ut)}loadOrgs(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(jt);if(e){const o=JSON.parse(e);if(Array.isArray(o)&&o.length>0&&o.every(a=>a?.id&&a?.name&&Array.isArray(a?.spatial?.projects)))return o}}}catch{}return[{id:He,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const e=this.orgs.find(o=>o.id===this.activeOrgId);e&&(e.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(jt,JSON.stringify(this.orgs)),localStorage.setItem(Lt,this.activeOrgId),this.activeOrgId===He&&localStorage.setItem(Et,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(e=>({id:e.id,name:e.name,projectCount:e.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}async switchOrganization(e){const o=this.orgs.find(a=>a.id===e);if(!o)throw new Error(`404 NOT_FOUND: 机构 ${e} 不存在`);this.activeOrgId=o.id,this.spatial=o.spatial,this.persistSpatial()}async createOrganization(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权新建机构`);const a=e.trim()||"新建机构",n={id:`org-${Date.now().toString(36)}`,name:a,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(n),this.activeOrgId=n.id,this.spatial=n.spatial,this.persistSpatial(),this.pushAudit("org.create",n.id,"success",a),{id:n.id,name:n.name,projectCount:0}}syncAdminScopesFromSpatial(){const e=this.spatial.projects.map(n=>n.id),o=this.spatial.buildings.map(n=>n.id),a=this.spatial.floors.map(n=>n.id);this.activeOrgId===He&&(Pe.org_admin.scope.allowedProjectIds=[...e],Pe.org_admin.scope.allowedBuildingIds=[...o],Pe.org_admin.scope.allowedFloorIds=[...a],Pe.project_admin.scope.allowedBuildingIds=[...o],Pe.project_admin.scope.allowedFloorIds=[...a],Pe.commissioning_engineer.scope.allowedBuildingIds=[...o],Pe.commissioning_engineer.scope.allowedFloorIds=[...a]),this.activeSession&&((this.activeOrgId!==He||this.activeSession.role==="org_admin")&&(this.activeSession.scope.allowedProjectIds=[...e]),(this.activeOrgId!==He||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin"||this.activeSession.role==="commissioning_engineer")&&(this.activeSession.scope.allowedBuildingIds=[...o],this.activeSession.scope.allowedFloorIds=[...a]))}async getSpatialTree(){const e=this.requireSession();if(this.activeOrgId!==He){const H=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:H.projects.length,buildings:H.buildings.length,floors:H.floors.length}),H}const o=this.spatial.projects.filter(H=>e.scope.allowedProjectIds.includes(H.id)),a=this.spatial.buildings.filter(H=>e.scope.allowedBuildingIds.includes(H.id)),n=new Set(a.map(H=>H.id)),r=this.spatial.floors.filter(H=>n.has(H.buildingId)),A=new Set(r.map(H=>H.id)),C=this.spatial.zones.filter(H=>A.has(H.floorId)),B=structuredClone({projects:o,buildings:a,floors:r,zones:C});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:B.projects.length,buildings:B.buildings.length,floors:B.floors.length}),B}async createProject(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权创建项目`);const a={id:`project-${Date.now().toString(36)}`,name:e.name.trim()||"新建项目",city:e.city?.trim()||"广州市",address:e.address?.trim()||"",timezone:"Asia/Shanghai",location:e.location,imageUrl:e.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(a),o.scope.allowedProjectIds.includes(a.id)||o.scope.allowedProjectIds.push(a.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",a,e),this.pushAudit("project.create",a.id,"success",a.name),structuredClone(a)}async updateProject(e,o){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改项目配置`);const n=this.spatial.projects.find(r=>r.id===e);if(!n)throw new Error(`404 NOT_FOUND: 项目 ${e} 不存在`);return o.name!==void 0&&(n.name=o.name.trim()||n.name),o.city!==void 0&&(n.city=o.city.trim()),o.address!==void 0&&(n.address=o.address.trim()),o.location!==void 0&&(n.location=o.location),o.imageUrl!==void 0&&(n.imageUrl=o.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${e}`,n,o),this.pushAudit("project.update",e,"success",n.name),structuredClone(n)}async deleteProject(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权删除项目`);if(e===g.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const a=new Set(this.spatial.buildings.filter(r=>r.projectId===e).map(r=>r.id)),n=new Set(this.spatial.floors.filter(r=>a.has(r.buildingId)).map(r=>r.id));this.spatial.projects=this.spatial.projects.filter(r=>r.id!==e),this.spatial.buildings=this.spatial.buildings.filter(r=>r.projectId!==e),this.spatial.floors=this.spatial.floors.filter(r=>!a.has(r.buildingId)),this.spatial.zones=this.spatial.zones.filter(r=>!n.has(r.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${e}`,{ok:!0}),this.pushAudit("project.delete",e,"success")}async upsertBuilding(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权维护楼宇`);let a=e.id?this.spatial.buildings.find(n=>n.id===e.id):void 0;return a?(a.name=e.name.trim()||a.name,a.aboveFloors=Math.max(0,e.aboveFloors),a.belowFloors=Math.max(0,e.belowFloors),a.hasRoof=e.hasRoof,e.areaSqm!==void 0&&(a.areaSqm=e.areaSqm),e.imageUrl!==void 0&&(a.imageUrl=e.imageUrl)):(a={id:`building-${Date.now().toString(36)}`,projectId:e.projectId,name:e.name.trim()||"新建楼宇",aboveFloors:Math.max(1,e.aboveFloors),belowFloors:Math.max(0,e.belowFloors),hasRoof:e.hasRoof,areaSqm:e.areaSqm??null,imageUrl:e.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(a)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",a,e),this.pushAudit("building.upsert",a.id,"success",a.name),structuredClone(a)}async deleteBuilding(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权删除楼宇`);if(e===g.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const a=new Set(this.spatial.floors.filter(n=>n.buildingId===e).map(n=>n.id));this.spatial.buildings=this.spatial.buildings.filter(n=>n.id!==e),this.spatial.floors=this.spatial.floors.filter(n=>n.buildingId!==e),this.spatial.zones=this.spatial.zones.filter(n=>!a.has(n.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${e}`,{ok:!0}),this.pushAudit("building.delete",e,"success")}async upsertFloor(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权维护楼层`);const a=new Date().toISOString();let n=e.id?this.spatial.floors.find(r=>r.id===e.id):void 0;if(n)n.name=e.name.trim()||n.name,n.kind=e.kind,n.level=e.level,e.areaSqm!==void 0&&(n.areaSqm=e.areaSqm),e.planImageUrl!==void 0&&(n.plan=e.planImageUrl?{floorId:n.id,imageUrl:e.planImageUrl,planVersion:(n.plan?.planVersion??0)+1,updatedAt:a}:null);else{const r=`floor-${e.buildingId.slice(-6)}-${e.kind}-${Math.abs(e.level)}-${Date.now().toString(36).slice(-3)}`;n={id:r,buildingId:e.buildingId,kind:e.kind,level:e.level,name:e.name.trim()||`${e.level}F`,areaSqm:e.areaSqm??null,plan:e.planImageUrl?{floorId:r,imageUrl:e.planImageUrl,planVersion:1,updatedAt:a}:null},this.spatial.floors.push(n),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(n.id)&&this.activeSession.scope.allowedFloorIds.push(n.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:n.id,name:n.name,hasPlan:!!n.plan}),this.pushAudit("floor.upsert",n.id,"success",n.name),structuredClone(n)}async deleteFloor(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权删除楼层`);if(e===g.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(a=>a.id!==e),this.spatial.zones=this.spatial.zones.filter(a=>a.floorId!==e),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${e}`,{ok:!0}),this.pushAudit("floor.delete",e,"success")}async upsertZone(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权维护功能区`);let a=e.id?this.spatial.zones.find(n=>n.id===e.id):void 0;return a?(a.name=e.name.trim()||a.name,a.category=e.category):(a={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:e.floorId,name:e.name.trim(),category:e.category},this.spatial.zones.push(a)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",a),this.pushAudit("zone.upsert",a.id,"success",a.name),structuredClone(a)}async deleteZone(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(a=>a.id!==e),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${e}`,{ok:!0}),this.pushAudit("zone.delete",e,"success")}async copyZonesToFloors(e,o){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权复制功能区`);const n=this.spatial.floors.find(C=>C.id===e),r=this.spatial.zones.filter(C=>C.floorId===e);if(!n||r.length===0)return 0;let A=0;for(const C of o){if(C===e)continue;const B=this.spatial.floors.find(M=>M.id===C);if(!B)continue;const H=new Set(this.spatial.zones.filter(M=>M.floorId===C).map(M=>M.name));for(const M of r){const se=M.name.replace(new RegExp(`^${n.name}\\s*`,"i"),""),ae=`${B.name} ${se}`.trim();H.has(ae)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:C,name:ae,category:M.category}),H.add(ae),A+=1)}}return A>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:e,targetCount:o.length,added:A}),A}async getFloorDevices(e){const o=this.requireSession();if(this.activeOrgId!==He)return[];if(!o.scope.allowedFloorIds.includes(e)){const n={code:"FORBIDDEN",status:403,message:`当前角色「${o.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,n),this.pushAudit("floor.read",e,"denied",n.message),new Error(`403 FORBIDDEN: ${n.message}`)}if(e!==g.floorId)return[];let a=structuredClone(this.devices);return o.scope.allowedZoneIds?.length&&(a=a.filter(n=>n.logicalZoneId&&o.scope.allowedZoneIds.includes(n.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:a.length}),a}async dispatchControlBatch(e){const o=this.requireSession();if(!o.scope.canControlDevices||!o.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,n={batchId:a,floorId:e.floorId,createdBy:o.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(r=>({deviceId:r.deviceId,command:r.command,targetValue:r.targetValue,status:"queued"}))};return this.batches.set(a,n),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",n,e),this.pushAudit("control.dispatch",a,"success",`下发 ${e.targets.length} 台设备`),n.receipts.forEach((r,A)=>{const C=this.devices.find(B=>B.id===r.deviceId);setTimeout(()=>{r.status="dispatched",r.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:r.deviceId,status:"dispatched",at:r.dispatchedAt})},280+A*120),setTimeout(()=>{const B=new Date().toISOString();!C||C.connectivity==="offline"?(r.status="timeout",r.errorCode="GATEWAY_READBACK_TIMEOUT",r.errorMessage="设备离线，网关未收到回读确认",r.verifiedAt=B):(r.status="verified_success",r.observedValue=r.targetValue,r.verifiedAt=B,this.applyObservedTelemetry(C,r.command,r.targetValue,B)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:r.deviceId,status:r.status,observedValue:r.observedValue,at:B})},900+A*220)}),structuredClone(n)}applyObservedTelemetry(e,o,a,n){o==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:a,collectedAt:n,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(a)>0,collectedAt:n,stale:!1})):(o==="lighting.power"||o==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:a,collectedAt:n,stale:!1}:o==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:a,collectedAt:n,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:n,values:{[o]:a}})}async getControlBatch(e){this.requireSession();const o=this.batches.get(e);if(!o)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(o)}async listAlarms(e){const o=this.requireSession();return this.activeOrgId!==He?[]:!o.scope.allowedFloorIds.includes(e)||e!==g.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,o){const a=this.requireSession();if(!a.scope.canManageAlarms){const r=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",r),new Error(`403 FORBIDDEN: ${r}`)}const n=this.alarms.find(r=>r.id===e);if(!n)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return n.status="acknowledged",n.acknowledgedAt=new Date().toISOString(),n.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,n,{note:o}),this.pushAudit("alarm.acknowledge",e,"success",o),this.emit({type:"alarm.changed",floorId:n.floorId,alarmId:e,status:"acknowledged",at:n.acknowledgedAt}),structuredClone(n)}async listWorkOrders(e){const o=this.requireSession();return this.activeOrgId!==He?[]:!o.scope.allowedFloorIds.includes(e)||e!==g.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const o=this.requireSession();if(!o.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权创建工单`);const a=new Date().toISOString(),n={id:`wo-e7f-${Date.now().toString(36)}`,projectId:g.projectId,buildingId:g.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(n),e.alarmId){const r=this.alarms.find(A=>A.id===e.alarmId);r&&(r.workOrderId=n.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",n,e),this.pushAudit("work_order.create",n.id,"success",n.title),structuredClone(n)}async updateWorkOrderStatus(e,o){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const n=this.workOrders.find(r=>r.id===e);if(!n)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return n.status=o,n.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,n,{status:o}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${o}`),structuredClone(n)}async updateDevicePlanPoint(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(n=>n.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,a,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(r=>r.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const n=new Date().toISOString();return a.physicalInstalled=e.physicalInstalled,a.physicalVerifiedAt=e.physicalInstalled?n:null,a.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:n,boundBy:o.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,a,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(a)}async listConnections(e){return this.requireSession(),this.activeOrgId!==He?[]:structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),this.activeOrgId!==He?[]:structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,o){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const n=this.devices.filter(A=>A.physicalInstalled&&A.hardwareBinding).length,r={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:g.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:n,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:o||"例行交付基线冻结"};return this.deliveryBatches.unshift(r),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,r,{note:o}),this.pushAudit("delivery.freeze",r.id,"success",`${n}/${this.devices.length} 已现场核验`),structuredClone(r)}async getAnalysisReport(e,o,a){this.requireSession();const n=o==="today"?1:o==="7d"?7:30,A={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*n)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*n).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(H=>H.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*n).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*n).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*n).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],C=o==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],B={category:e,range:o,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:A.kpis,unit:A.unit,series:A.base.map((H,M)=>({label:C[M],value:Math.round(H*(e==="energy"||e==="carbon"?n/2+.5:1)),baseline:Math.round(H*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:A.base[3],unit:A.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:A.base[4],unit:A.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:A.base[1],unit:A.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${o}&scopeId=${a}`,{kpis:B.kpis.length}),B}async listScenes(e){return this.requireSession(),this.activeOrgId!==He?[]:structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,e),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(e){const o=this.scenes.find(n=>n.id===e);if(!o)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const a=await this.dispatchControlBatch({floorId:o.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:o.actions,reason:`触发场景：${o.name}`});return o.lastExecutedAt=new Date().toISOString(),o.lastBatchId=a.batchId,a}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:g.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,o,a){this.requireSession();const n=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,r=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${o} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${o} (-30m) ~ ${a} (+30m)`,conflictWarning:n},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:n}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",r,{workdayStart:o,workdayEnd:a}),r}async saveWorkCalendar(e,o,a,n){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权修改运行日历`);if(this.calendar.version!==n)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(o>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:o,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:o,workdayEnd:a,expectedVersion:n}),this.pushAudit("settings.calendar",g.projectId,"success",`${o}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,o,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权启停运行规则`);const r=this.rules.find(A=>A.id===e);if(!r)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(r.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${r.version}）`);return r.enabled=o,r.version+=1,r.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,r,{enabled:o,expectedVersion:a}),this.pushAudit("settings.rule_toggle",e,"success",o?"启用":"停用"),structuredClone(r)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,o){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const n=Pe[o],r={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:o,roleLabel:n.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(r),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",r,{email:e,role:o}),this.pushAudit("org.invite",e,"success",n.roleLabel),structuredClone(r)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,o){return e!==g.floorId?()=>{}:(this.listeners.add(o),()=>{this.listeners.delete(o)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${g.floorId}`,e),this.listeners.forEach(o=>o(e))}}function da(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new ca}const ra={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"layout-dashboard":'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',waypoints:'<circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'};function pa(t){return t>=20?"1.5":t>=16?"1.75":t>=14?"2":"2.25"}function de(t,e=16,o=""){const a=pa(e);return`<svg${o?` class="${o}"`:""} width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${ra[t]}</svg>`}let gt={level:"floor",projectId:g.projectId,buildingId:g.buildingId,floorId:g.floorId};function st(){return gt}function Ge(t){return gt=t,gt}function Be(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function At(t){const e=t.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面"))return 999;const o=e.match(/(-?\d+)/);if(!o)return 0;const a=Number(o[1]);return e.startsWith("B")?-Math.abs(a):a}function ua(t){if(t==="all")return{level:"all-projects"};const e=t.split(":");return e[0]==="project"&&e[1]?{level:"project",projectId:e[1]}:e[0]==="building"&&e[1]&&e[2]?{level:"building",projectId:e[1],buildingId:e[2]}:e[0]==="floor"&&e[1]&&e[2]&&e[3]?{level:"floor",projectId:e[1],buildingId:e[2],floorId:e[3]}:{level:"project",projectId:g.projectId}}function ma(t,e,o){return o==="project"?t.level==="all-projects"?{level:"project",projectId:e.projects[0]?.id??g.projectId}:{level:"project",projectId:t.projectId}:o==="building"&&t.level==="floor"?{level:"building",projectId:t.projectId,buildingId:t.buildingId}:t}function at(t){const{tree:e,session:o,isOpen:a,searchKeyword:n}=t;if(e.projects.length===0)return'<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap"><span class="pacom-path-trigger is-static"><span class="pacom-path-muted">暂无项目</span></span></div>';const r=t.maxGranularity??"floor",A=t.activeAlarmCount??0,C=o.scope.allowedZoneIds?.length?o.scope.allowedZoneIds:null,B=e.floors.filter(k=>o.scope.allowedFloorIds.includes(k.id)),H=C||e.projects.length<=1&&e.buildings.length<=1&&B.length<=1?"floors-only":e.projects.length>1?"multi-project":e.buildings.length>1?"single-project-multi-building":"single-building",M=H==="multi-project"&&r!=="project",se=H==="multi-project"||H==="single-project-multi-building",ae=H!=="floors-only"&&r!=="project",R=r==="project"&&e.projects.length<=1||H==="floors-only"&&B.length<=1,T=ma(t.scope??gt,e,r),N=T.level==="all-projects"?null:e.projects.find(k=>k.id===T.projectId)??e.projects[0],J=T.level==="building"||T.level==="floor"?e.buildings.find(k=>k.id===T.buildingId):null,ge=T.level==="floor"?e.floors.find(k=>k.id===T.floorId):null,ie=[];if(T.level==="all-projects")ie.push(`全部项目（${e.projects.length}）`);else if(T.level==="project")ie.push(Be(N?.name??"广实2号园"));else if(T.level==="building")N&&ie.push(`<span class="pacom-path-muted">${Be(N.name)}</span>`),ie.push(Be(J?.name??"E栋"));else{N&&H!=="floors-only"&&ie.push(`<span class="pacom-path-muted">${Be(N.name)}</span>`),J&&ae&&ie.push(`<span class="pacom-path-muted">${Be(J.name)}</span>`);const k=!ae&&J?`${J.name} ${ge?.name??"7F"}`:ge?.name??"7F";ie.push(Be(k))}const ne='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',pe=R?`<span class="pacom-path-trigger is-static">${ie.join(ne)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${a}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${ie.join(ne)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${de("chevron-down",12)}</span>
      </button>`;if(!a||R)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${pe}</div>`;const oe=n.trim().toLowerCase(),Y=T.level==="all-projects"?e.projects[0]?.id??g.projectId:T.projectId,we=T.level==="building"||T.level==="floor"?T.buildingId:e.buildings.find(k=>k.projectId===Y)?.id??g.buildingId,be=e.projects.filter(k=>!oe||k.name.toLowerCase().includes(oe)),_=e.buildings.filter(k=>k.projectId===Y&&(!oe||k.name.toLowerCase().includes(oe))),le=[...e.floors.filter(k=>k.buildingId===we)].sort((k,ee)=>At(ee.name)-At(k.name)).filter(k=>!oe||k.name.toLowerCase().includes(oe)),f=r==="project"||e.projects.length>1,S=r!=="project"&&se,G=r==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${pe}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${de("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${Be(n)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${de("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${f?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${M?`<button type="button" class="pacom-space-pop-item ${T.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${e.projects.length}）</span>
                        ${T.level==="all-projects"?de("check",14):""}
                      </button>`:""}
                ${be.map(k=>{const ee=T.level==="project"&&T.projectId===k.id;return`<button type="button" class="pacom-space-pop-item ${ee?"is-active":""}" data-global-space-pick="project:${Be(k.id)}">
                      <span>${Be(k.name)}</span>
                      ${ee?de("check",14):de("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${S?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Be(e.projects.find(k=>k.id===Y)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${T.level==="project"?"is-active":""}" data-global-space-pick="project:${Be(Y)}">
                  <span>全园区</span>
                  ${T.level==="project"?de("check",14):""}
                </button>
                ${_.map(k=>{const ee=T.level==="building"&&T.buildingId===k.id;return`<button type="button" class="pacom-space-pop-item ${ee?"is-active":""}" data-global-space-pick="building:${Be(k.projectId)}:${Be(k.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Be(k.name)}</span>
                        ${k.id===g.buildingId&&A>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${ee?de("check",14):de("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${G?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Be(e.buildings.find(k=>k.id===we)?.name??"楼宇")} · 楼层</div>
                ${ae?`<button type="button" class="pacom-space-pop-item ${T.level==="building"&&T.buildingId===we?"is-active":""}" data-global-space-pick="building:${Be(Y)}:${Be(we)}">
                        <span>整栋</span>
                        ${T.level==="building"&&T.buildingId===we?de("check",14):""}
                      </button>`:""}
                ${le.map(k=>{const ee=o.scope.allowedFloorIds.includes(k.id),X=T.level==="floor"&&T.floorId===k.id,u=k.id===g.floorId&&A>0;return`<button type="button" class="pacom-space-pop-item ${X?"is-active":""}" style="${ee?"":"opacity:0.5;"}" data-global-space-pick="floor:${Be(Y)}:${Be(we)}:${Be(k.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Be(k.name)}</span>
                        ${u?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${X?de("check",14):ee?k.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function ot(t,e){t.querySelectorAll("[data-global-space-toggle]").forEach(a=>{a.addEventListener("click",n=>{n.stopPropagation(),e.onToggle()})}),t.querySelector("[data-global-space-search]")?.addEventListener("input",a=>{e.onSearch(a.currentTarget.value)}),t.querySelectorAll("[data-global-space-pick]").forEach(a=>{a.addEventListener("click",n=>{n.stopPropagation();const r=a.dataset.globalSpacePick;if(!r)return;const A=Ge(ua(r));e.onPick(A)})})}const vt=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function ga(t,e,o,a,n){let r="profile",A="directory",C=await e.listOrgMembers(),B=await e.listAuditLogs(),H="",M="all",se="all",ae="all",R=!1,T=!1,N=o.displayName,J=o.role==="org_admin"||o.role==="project_admin"?"设施运维总监":o.role==="commissioning_engineer"?"楼宇自控部署工程师":o.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",ge="138-0013-8072",ie="",ne="";async function pe(){[C,B]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),oe()}function oe(){const Y=e.mode==="demo"&&typeof e.switchDemoRole=="function",we=H.trim().toLowerCase(),be=C.filter(f=>M!=="all"&&f.role!==M?!1:we?`${f.displayName} ${f.email} ${f.roleLabel} ${f.scopeSummary}`.toLowerCase().includes(we):!0),_=B.filter(f=>{if(se==="success"&&f.result!=="success"||se==="denied"&&f.result==="success")return!1;if(ae!=="all"){const S=`${f.action} ${f.target}`.toLowerCase();if(ae==="control"&&!S.includes("control")&&!S.includes("scene")&&!S.includes("控制")||ae==="alarm"&&!S.includes("alarm")&&!S.includes("work")&&!S.includes("告警")||ae==="deploy"&&!S.includes("deploy")&&!S.includes("plan")&&!S.includes("hardware")&&!S.includes("部署"))return!1}return!0});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${r==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${r==="members"}" data-atab="members">成员与角色（${C.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${r==="audit"}" data-atab="audit">操作审计日志（${B.length}）</button>
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
            ${ie?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${ie}</span></div>`:""}
            ${ne?`<div class="pacom-alert-banner">${ne}</div>`:""}
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
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${N}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${J}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">告警接收手机号（SMS）</span>
                        <span class="pacom-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="pacom-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${ge}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
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

                ${Y?`
                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">切换视角</h2>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(Pe).map(f=>{const S=Pe[f];return`
                              <button class="pacom-role-card ${f===o.role?"is-active":""}" data-switch-role="${f}">
                                <strong style="font-weight:500;">${S.roleLabel}</strong>
                                <span class="pacom-row-sub">${S.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${S.scope.allowedFloorIds.length} 层 · 部署编辑：${S.scope.canEditDeployment?"是":"否"}</span>
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
                  ${R?`
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
                                ${Object.keys(Pe).map(f=>`<option value="${f}">${Pe[f].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <h2 class="pacom-section-title">${A==="directory"?"机构成员目录":"工作组与空间授权（Groups & Scope）"}</h2>
                        <div class="pacom-tabs" role="tablist" aria-label="成员与工作组切换">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${A==="directory"}" data-msub="directory">成员目录（${C.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${A==="groups"}" data-msub="groups">工作组（${vt.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${A==="directory"?`当前显示 ${be.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${A==="directory"?`
                        <div class="pacom-table-card">
                          <div class="pacom-table-toolbar">
                            <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" name="memberSearch" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${H}" />
                              <select class="pacom-select" name="memberRoleFilter" data-role-filter>
                                <option value="all" ${M==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(Pe).map(f=>`<option value="${f}" ${M===f?"selected":""}>${Pe[f].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${R?"收起邀请":"+ 邀请成员"}
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
                                ${be.map(f=>`
                                    <tr>
                                      <td>
                                        <div style="display:flex; align-items:center; gap:10px;">
                                          <span class="pacom-pop-avatar">${f.displayName.slice(0,1)}</span>
                                          <div>
                                            <div style="font-weight:500;">${f.displayName}</div>
                                            <div class="pacom-row-sub">${f.email}</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${f.roleLabel}</span></td>
                                      <td><span class="pacom-row-sub">${f.scopeSummary}</span></td>
                                      <td>
                                        <span class="pacom-badge ${f.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">
                                          ${f.status==="active"?"正常":f.status}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>`:`
                        ${T?`
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
                            <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1">${T?"收起表单":"+ 新建工作组"}</button>
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
                                ${vt.map(f=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${f.name}</div>
                                      <div class="pacom-row-sub">${f.membersSummary}</div>
                                    </td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${f.defaultRoleLabel}</span></td>
                                    <td><span class="pacom-row-sub">${f.locationScope}</span></td>
                                    <td><strong>${f.memberCount}</strong> 人</td>
                                    <td><span class="pacom-badge pacom-badge--accent">${f.notifyChannel}</span></td>
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
                          <option value="all" ${ae==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${ae==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${ae==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${ae==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${se==="all"}" data-audit-filter="all">全部（${B.length}）</button>
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
                            ${_.map(f=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${f.action}</div>
                                    ${f.detail?`<div class="pacom-row-sub">${f.detail}</div>`:""}
                                  </td>
                                  <td><code style="font-size:12px;">${f.target}</code></td>
                                  <td>${f.actor}</td>
                                  <td><span class="pacom-row-sub">${f.at.slice(0,19).replace("T"," ")}</span></td>
                                  <td>
                                    <span class="pacom-badge ${f.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                                      ${f.result==="success"?"成功":f.result}
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
    `,t.querySelectorAll("[data-atab]").forEach(f=>{f.addEventListener("click",()=>{r=f.dataset.atab,ie="",ne="",oe()})}),t.querySelectorAll("[data-msub]").forEach(f=>{f.addEventListener("click",()=>{A=f.dataset.msub??"directory",oe()})}),t.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{T=!T,oe()}),t.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",f=>{f.preventDefault();const S=new FormData(f.currentTarget),G=String(S.get("wgName")??"").trim(),k=String(S.get("wgRole")??"运行值班员"),ee=String(S.get("wgScope")??"").trim();!G||!ee||(vt.push({id:`wg-${Date.now()}`,name:G,defaultRoleLabel:k,locationScope:ee,memberCount:1,membersSummary:o.displayName,notifyChannel:"站内 + 邮件"}),T=!1,ie=`已创建工作组「${G}」（授权空间：${ee}）。`,oe())}),t.querySelector('[data-role="profile-form"]')?.addEventListener("submit",f=>{f.preventDefault();const S=new FormData(f.currentTarget);N=String(S.get("displayName")??"").trim()||o.displayName,J=String(S.get("jobTitle")??"").trim()||J,ge=String(S.get("phone")??"").trim()||ge,ie=`已更新个人资料：${N}（${J}）· 告警短信接收号 ${ge}。`,oe()}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",n()}),t.querySelectorAll("[data-switch-role]").forEach(f=>{f.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const S=await e.switchDemoRole(f.dataset.switchRole);a(S)})}),t.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{R=!R,oe()}),t.querySelector("[data-member-search]")?.addEventListener("input",f=>{const S=f.currentTarget,G=S.selectionStart??S.value.length;H=S.value,oe();const k=t.querySelector("[data-member-search]");k&&(k.focus(),k.setSelectionRange(G,G))}),t.querySelector("[data-role-filter]")?.addEventListener("change",f=>{M=f.currentTarget.value,oe()}),t.querySelectorAll("[data-audit-filter]").forEach(f=>{f.addEventListener("click",()=>{se=f.dataset.auditFilter??"all",oe()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",f=>{ae=f.currentTarget.value??"all",oe()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async f=>{f.preventDefault(),ne="";const S=new FormData(f.currentTarget);try{await e.inviteOrgMember(String(S.get("email")??""),String(S.get("role"))),R=!1,await pe()}catch(G){ne=G instanceof Error?G.message:String(G),oe()}})}oe()}const et={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},ba={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},va={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function fa(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function ha(t){return t.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:t.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function ft(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("vav")||t.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:e.includes("co₂")||e.includes("co2")||t.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function ya(t,e,o){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),n=a.get("alarm"),r=a.get("wo");let A=await e.getSpatialTree(),C=st(),B=!1,H="",M=[],se=[],ae=[],R=r?"workorders":"alarms",T="all",N="all",J="all",ge="impact",ie=!1,ne="",pe=n,oe=r,Y=null,we=null,be="resolved";const _=new Set,le=new Map,f=new Map,S=new Map,G=new Map;let k="",ee="";function X(re){const h=G.get(re.id);if(h)return h;const d=re.id.match(/(\d+)$/),E=`WO-2026-${d?d[1]:re.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,O={estCost:"¥ 450",actualCost:re.status==="closed"?"¥ 380":"--",cmmsNo:E,assigneeGroup:"暖通运维组",tasks:[{id:`${re.id}-t1`,label:"核查设备供电与现场指示灯状态",done:re.status!=="open"},{id:`${re.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:re.status==="resolved"||re.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:re.createdAt?re.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${E}）`}]};return G.set(re.id,O),O}async function u(){[M,se,ae]=await Promise.all([e.listAlarms(g.floorId),e.listWorkOrders(g.floorId),e.getFloorDevices(g.floorId).catch(()=>[])]),se.forEach(re=>X(re)),$e()}function Q(re){if(!re)return{name:"楼层通用",zone:"E7F",dev:null};const h=ae.find(d=>d.id===re)??null;return h?{name:h.name,zone:(h.logicalZoneId?va[h.logicalZoneId]:void 0)??"E7F",dev:h}:{name:re,zone:"E7F",dev:null}}function Le(re){const h=Q(re.deviceId).dev;h&&h.connectivity==="offline"?S.set(re.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${h.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):S.set(re.id,{verdict:"pass",summary:`自检通过（PASS）：「${h?.name??re.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),pe=re.id,$e()}function $e(){const re=M.filter(m=>m.status==="active"&&!le.has(m.id)),h=se.filter(m=>!X(m).cancelled&&(m.status==="open"||m.status==="assigned"||m.status==="in_progress")),d=M.filter(m=>m.status!=="active").length+f.size,E=0,O=le.size,ve=ne.trim().toLowerCase(),Fe=M.filter(m=>{const w=le.has(m.id);if(T==="snoozed"){if(!w)return!1}else if(T==="active"){if(m.status!=="active"||w)return!1}else if(T==="acknowledged"){if(m.status!=="acknowledged")return!1}else if(w)return!1;if(J!=="all"&&m.severity!==J)return!1;if(!ve)return!0;const W=Q(m.deviceId);return`${m.title} ${m.message} ${W.name} ${W.zone} ${m.deviceId}`.toLowerCase().includes(ve)}),ze=new Map;for(const m of Fe){const w=`${m.title} ${m.message}`.toLowerCase(),W=w.includes("离线")||w.includes("modbus")||w.includes("通信"),he=ie?W?"root-gateway-modbus":m.deviceId:m.id,ye=W?"根因：E7F 主控网关通信链路":`根因：${Q(m.deviceId).name}`,Ne=ze.get(he)??{rootLabel:ye,items:[]};Ne.items.push(m),ze.set(he,Ne)}const Me=Array.from(ze.values());ge==="impact"&&Me.sort((m,w)=>ft(w.items[0]).costYuan-ft(m.items[0]).costYuan);const Te=se.filter(m=>{const w=X(m);if(N==="cancelled"){if(!w.cancelled)return!1}else if(w.cancelled||N==="open"&&(m.status==="resolved"||m.status==="closed")||N==="resolved"&&m.status!=="resolved"||N==="closed"&&m.status!=="closed")return!1;if(!ve)return!0;const W=Q(m.deviceId);return`${m.title} ${m.description} ${m.id} ${w.cmmsNo} ${W.name}`.toLowerCase().includes(ve)});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${at({tree:A,session:o,scope:C,activeAlarmCount:re.length,isOpen:B,searchKeyword:H})}
            </div>

            <div class="pacom-header-meta">
              ${R==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${ie}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${o.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${o.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${de("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${R==="alarms"}" data-main-tab="alarms">实时告警（${M.length-O}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${R==="workorders"}" data-main-tab="workorders">运维工单（${se.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${R==="alarms"&&T==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${re.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${R==="workorders"&&N==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${h.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${R==="alarms"&&T==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${d}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${E}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${k?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${k}</span></div>`:""}
          ${ee?`<div class="pacom-alert-banner">${ee}</div>`:""}

          ${R==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${ne}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${J==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${J==="critical"?"selected":""}>严重</option>
                      <option value="major" ${J==="major"?"selected":""}>重要</option>
                      <option value="minor" ${J==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${ge==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${ge==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${T==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${T==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${T==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${T==="snoozed"}" data-status-pill="snoozed">已忽略（${O}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${_.size>0&&o.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${_.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${Me.length} 项</span>
                  </div>
                </div>
                ${Me.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${Me.map(m=>{const w=m.items[0],W=ba[w.severity]??{label:w.severity,cls:"pacom-badge--neutral"},he=Q(w.deviceId),ye=ha(w),Ne=ft(w),We=pe===w.id,Ue=le.get(w.id),qe=!!Ue,Xe=_.has(w.id),ke=S.get(w.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${w.id}" data-check-alarm="${w.id}" ${Xe?"checked":""} ${w.status!=="active"||qe?"disabled":""} aria-label="选择 ${w.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${W.cls}">${W.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${w.title}</span>
                                      ${ie?`<span class="pacom-badge pacom-badge--accent">${m.rootLabel}${m.items.length>1?` · 影响 ${m.items.length} 项`:""}</span>`:""}
                                      ${ke?`<span class="pacom-badge ${ke.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${ke.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${w.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${he.name}</div>
                                    <div class="pacom-row-sub">${he.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${Ne.costLabel}</div>
                                    <div class="pacom-row-sub">${Ne.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${ye.duration}</div>
                                    <div class="pacom-row-sub" style="color:${ye.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${ye.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${qe?"pacom-badge--neutral":w.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${qe?`忽略 ${Ue?.duration}`:w.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${qe?`<button class="pacom-btn" data-unsnooze="${w.id}">恢复监控</button>`:`
                                            ${w.status==="active"?`<button class="pacom-btn" data-mark-actioned="${w.id}" ${o.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${w.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${w.id}" ${o.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${w.id}">${We?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${We?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${fa(w)}
                                            </div>
                                            ${Ue?`<div class="pacom-info-banner">忽略周期：${Ue.duration} · 原因备注：${Ue.reason}</div>`:""}
                                            ${ke?`
                                                <div class="pacom-banner ${ke.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${ke.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${ke.steps.map(xe=>`<span>${xe}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${w.id}</code> · 设备编号 <code>${w.deviceId}</code> · 关联工单 ${w.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${w.id}">单机自检（FTT）</button>
                                              ${!qe&&w.status==="active"?`<button class="pacom-btn" data-open-snooze="${w.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${w.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${w.deviceId}">定位设备 →</button>
                                            </div>
                                            ${Y===w.id?`
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
              ${(()=>{const m=oe?se.find(w=>w.id===oe)??null:null;if(m){const w=Q(m.deviceId),W=X(m),he=!!(W.cancelled||m.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${m.id}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${m.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${W.cmmsNo}</span>
                        ${W.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${m.id}" data-wo-status="${m.id}" aria-label="更新工单状态" ${he?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(ye=>`<option value="${ye}" ${m.status===ye?"selected":""}>${et[ye]}</option>`).join("")}
                          <option value="cancelled" ${W.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${we===m.id?`
                        <form data-close-wo-form="${m.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${et[be]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${W.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${W.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${W.actualCost==="--"?"":W.actualCost}" />
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
                            ${W.tasks.map(ye=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${ye.id}" data-wo-task="${m.id}" data-task-id="${ye.id}" ${ye.done?"checked":""} ${he?"disabled":""} />
                                    <span>${ye.label}</span>
                                  </span>
                                  ${ye.unit?`<span class="pacom-row-sub">实测：${ye.reading??"--"} ${ye.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${W.history.map(ye=>`<span>• <span class="pacom-row-sub">${ye.at}</span> — ${ye.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${m.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${W.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${w.name}（${w.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${W.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${W.estCost} / 实际 ${W.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${W.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${W.solution??"待完单填写"}</span>
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
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${ne}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${N==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${N==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${N==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${N==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${N==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${Te.length} 条工单</span>
                  </div>
                  ${Te.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${Te.map(w=>{const W=Q(w.deviceId),he=X(w),ye=!!(he.cancelled||w.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${w.title}</span>
                                        ${he.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${w.description} · <code>${w.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${W.name}</div>
                                      <div class="pacom-row-sub">${W.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${he.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${he.assigneeGroup} · 预估 ${he.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${w.id}" data-wo-status="${w.id}" aria-label="更新工单状态" ${ye?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Ne=>`<option value="${Ne}" ${w.status===Ne?"selected":""}>${et[Ne]}</option>`).join("")}
                                          <option value="cancelled" ${he.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${w.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${we===w.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${w.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${et[be]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${he.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${he.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${he.actualCost==="--"?"":he.actualCost}" />
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
    `,ot(t,{onToggle:()=>{B=!B,$e(),B&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:m=>{H=m,$e();const w=t.querySelector("[data-global-space-search]");w&&(w.focus(),w.setSelectionRange(m.length,m.length))},onPick:m=>{C=m,B=!1,$e()}}),t.querySelectorAll("[data-main-tab]").forEach(m=>{m.addEventListener("click",()=>{R=m.dataset.mainTab??"alarms",k="",$e()})}),t.querySelectorAll("[data-kpi-filter]").forEach(m=>{m.addEventListener("click",()=>{const w=m.dataset.kpiFilter;k="",w==="workorders"?(R="workorders",N=N==="open"?"all":"open"):(w==="active"||w==="acknowledged")&&(R="alarms",T=T===w?"all":w),$e()})}),t.querySelectorAll("[data-status-pill]").forEach(m=>{m.addEventListener("click",()=>{T=m.dataset.statusPill??"all",$e()})}),t.querySelectorAll("[data-wo-pill]").forEach(m=>{m.addEventListener("click",()=>{N=m.dataset.woPill??"all",$e()})}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{k="",u()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{ie=!ie,$e()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",m=>{J=m.currentTarget.value,$e()}),t.querySelector("[data-alarm-sort]")?.addEventListener("change",m=>{ge=m.currentTarget.value??"impact",$e()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",m=>{const w=m.currentTarget,W=w.selectionStart??w.value.length;ne=w.value,$e();const he=t.querySelector("[data-alarm-search]");he&&(he.focus(),he.setSelectionRange(W,W))}),t.querySelectorAll("[data-check-alarm]").forEach(m=>{m.addEventListener("change",()=>{const w=m.dataset.checkAlarm;w&&(m.checked?_.add(w):_.delete(w),$e())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{ee="";const m=Array.from(_);try{for(const w of m)await e.acknowledgeAlarm(w,"告警中心批量确认"),f.set(w,"批量确认处置");_.clear(),k=`已批量确认 ${m.length} 条告警，未来 24 小时持续校验无复发。`,await u()}catch(w){ee=w instanceof Error?w.message:String(w),$e()}}),t.querySelectorAll("[data-expand-alarm]").forEach(m=>{m.addEventListener("click",()=>{const w=m.dataset.expandAlarm??null;pe=pe===w?null:w,Y=null,$e()})}),t.querySelectorAll("[data-expand-wo]").forEach(m=>{m.addEventListener("click",()=>{const w=m.dataset.expandWo??null;oe=oe===w?null:w,$e()})}),t.querySelectorAll("[data-run-ftt]").forEach(m=>{m.addEventListener("click",()=>{const w=M.find(W=>W.id===m.dataset.runFtt);w&&Le(w)})}),t.querySelectorAll("[data-open-snooze]").forEach(m=>{m.addEventListener("click",()=>{Y=m.dataset.openSnooze??null,$e()})}),t.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{Y=null,$e()}),t.querySelectorAll("[data-snooze-form]").forEach(m=>{m.addEventListener("submit",w=>{w.preventDefault();const W=m.dataset.snoozeForm;if(!W)return;const he=new FormData(m),ye=String(he.get("duration")??"24h"),Ne=String(he.get("reason")??"").trim()||"现场核查中";le.set(W,{duration:ye,reason:Ne}),_.delete(W),Y=null,k=`已限时忽略该告警（${ye} · ${Ne}），可在「已忽略」页签中随时恢复。`,$e()})}),t.querySelectorAll("[data-unsnooze]").forEach(m=>{m.addEventListener("click",()=>{const w=m.dataset.unsnooze;w&&(le.delete(w),k="已恢复该告警的实时监控。",$e())})}),t.querySelectorAll("[data-go-ts]").forEach(m=>{m.addEventListener("click",()=>{const w=m.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(w)}`})}),t.querySelectorAll("[data-locate-home]").forEach(m=>{m.addEventListener("click",()=>{const w=m.dataset.locateHome??"";window.location.hash=w?`#home?device=${encodeURIComponent(w)}`:"#home"})}),t.querySelectorAll("[data-mark-actioned]").forEach(m=>{m.addEventListener("click",async()=>{ee="";const w=m.dataset.markActioned;try{await e.acknowledgeAlarm(w,"现场自处理完成（Mark Actioned）"),f.set(w,"现场自处理完成"),_.delete(w),k="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await u()}catch(W){ee=W instanceof Error?W.message:String(W),$e()}})}),t.querySelectorAll("[data-to-wo]").forEach(m=>{m.addEventListener("click",async()=>{ee="";const w=M.find(W=>W.id===m.dataset.toWo);if(w)try{await e.createWorkOrder({floorId:w.floorId,deviceId:w.deviceId,alarmId:w.id,title:`处置告警：${w.title}`,description:w.message}),k=`已将「${w.title}」转为运维工单并同步 CMMS。`,await u()}catch(W){ee=W instanceof Error?W.message:String(W),$e()}})}),t.querySelectorAll("[data-wo-status]").forEach(m=>{m.addEventListener("change",async()=>{const w=m.dataset.woStatus,W=m.value;if(ee="",W==="cancelled"){const he=se.find(ye=>ye.id===w);if(he){const ye=X(he);ye.cancelled=!0,ye.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),k="工单已移入「已取消」分类并锁定编辑。",$e()}return}if(W==="resolved"||W==="closed"){we=w,be=W,$e();return}try{await e.updateWorkOrderStatus(w,W);const he=se.find(ye=>ye.id===w);he&&X(he).history.unshift({at:"刚刚",text:`状态变更为「${et[W]}」`}),k="工单状态已更新并写入审计日志。",await u()}catch(he){ee=he instanceof Error?he.message:String(he),await u()}})}),t.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{we=null,$e()}),t.querySelectorAll("[data-close-wo-form]").forEach(m=>{m.addEventListener("submit",async w=>{w.preventDefault();const W=m.dataset.closeWoForm,he=new FormData(m),ye=String(he.get("cause")??"").trim(),Ne=String(he.get("solution")??"").trim(),We=String(he.get("actualCost")??"").trim();try{await e.updateWorkOrderStatus(W,be);const Ue=se.find(qe=>qe.id===W);if(Ue){const qe=X(Ue);qe.cause=ye,qe.solution=Ne,We&&(qe.actualCost=We),qe.history.unshift({at:"刚刚",text:`流转至「${et[be]}」· 根因：${ye}`})}we=null,oe=W,k=`工单已更新为「${et[be]}」，根因与方案已沉淀归档。`,await u()}catch(Ue){ee=Ue instanceof Error?Ue.message:String(Ue),$e()}})}),t.querySelectorAll("[data-wo-task]").forEach(m=>{m.addEventListener("change",()=>{const w=se.find(ye=>ye.id===m.dataset.woTask);if(!w)return;const he=X(w).tasks.find(ye=>ye.id===m.dataset.taskId);he&&(he.done=m.checked),$e()})})}await u()}const $a=de("chevron-down",12),dt=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],Ft=[{id:g.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:g.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:g.projectId,label:"广实2号园（全园区）",factor:18.2}],wa={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},xa=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],Ye=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function ht(t,e=""){const o=(t??"").trim().toLowerCase();return!(!o||o.includes("%")||o.includes("°c")||o.includes("ppm")||o.includes("ms")||o.includes("m²")||o.includes("/m2")||o.includes("db")||o.includes("lx")||e.includes("率")||e.includes("均")||e.includes("强度")||e.includes("延迟"))}function rt(t,e){const o=t*e;return Math.abs(o)>=10?Math.round(o):Math.round(o*10)/10}function Sa(t,e){const o=Number(String(t).replaceAll(",","")),a=e??"";return Number.isFinite(o)?a==="kWh"&&Math.abs(o)>=1e4?{value:(o/1e3).toFixed(1),unit:"MWh",title:`精确值：${o.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(o)?o.toLocaleString("en-US"):o.toLocaleString("en-US",{maximumFractionDigits:1}),unit:a,title:`${o.toLocaleString("en-US")} ${a}`.trim()}:{value:t,unit:a,title:`${t} ${a}`.trim()}}function Ia(t,e){if(e===1)return t;const o=ht(t.unit);return{...t,kpis:t.kpis.map(a=>{const n=Number(String(a.value).replaceAll(",",""));return!Number.isFinite(n)||!ht(a.unit,a.label)?a:{...a,value:String(rt(n,e))}}),series:o?t.series.map(a=>({...a,value:rt(a.value,e),...typeof a.baseline=="number"?{baseline:rt(a.baseline,e)}:{}})):t.series,zoneBreakdown:t.zoneBreakdown.map(a=>ht(a.unit)?{...a,value:rt(a.value,e)}:a)}}function ka(t,e){const o=Math.max(...t.series.map(ae=>Math.max(ae.value,ae.baseline??0)),1),a=46,n=34,r=36,A=Math.max(t.series.length*(a+n)+r*2,620),C=228,B=184,H=132,M=[0,.25,.5,.75,1].map(ae=>{const R=Math.round(B-ae*H);return`<line x1="${r-8}" y1="${R}" x2="${A-18}" y2="${R}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${ae===0?"0":"3 3"}" />`}).join(""),se=t.series.map((ae,R)=>{const T=r+R*(a+n),N=Math.max(8,Math.round(ae.value/o*H)),J=B-N,ge=typeof ae.baseline=="number"&&ae.value>ae.baseline*1.08,ie=ge?`<rect x="${T-8}" y="34" width="${a+16}" height="${B-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",ne=typeof ae.baseline=="number"?`<line x1="${T-5}" y1="${Math.round(B-ae.baseline/o*H)}" x2="${T+a+5}" y2="${Math.round(B-ae.baseline/o*H)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",pe=e&&(ge||R===1)?`<g><title>${ge?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${T+a/2}" cy="18" r="7" fill="${ge?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${T+a/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${ge?"!":"S"}</text></g>`:"",oe=ae.value>=1e4?`${(ae.value/1e3).toFixed(1)}k`:ae.value.toLocaleString("en-US");return`
        ${ie}
        ${ne}
        ${pe}
        <g>
          <title>${ae.label}：实测 ${ae.value.toLocaleString("en-US")} ${t.unit}${ae.baseline!==void 0?` / 基线 ${ae.baseline.toLocaleString("en-US")} ${t.unit}`:""}</title>
          <rect x="${T}" y="${J}" width="${a}" height="${N}" rx="7" fill="${ge?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${T+a/2}" y="${J-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${oe}</text>
        <text x="${T+a/2}" y="${B+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${ae.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${A} ${C}" style="width:100%; height:232px; display:block;" role="img" aria-label="${t.category} 趋势图">
      ${M}
      ${se}
    </svg>
  `}function Ea(t,e){const o=t.connectivity==="offline";if(t.category==="hvac"){const a=Number(t.telemetry.setpoint?.value??24);return[{id:`${t.id}:temp`,deviceId:t.id,deviceName:t.name,pointKey:"temp",label:"室内温度",unit:"°C",points:o?[23.8,24,24.1,null,null,null,null,null]:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a],offline:o,colorIdx:e},{id:`${t.id}:setpoint`,deviceId:t.id,deviceName:t.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:o?[24,24,24,null,null,null,null,null]:[a,a,a,a,a,a,a,a],offline:o,colorIdx:e+1},{id:`${t.id}:valve`,deviceId:t.id,deviceName:t.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:o?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:o,colorIdx:e+2}]}if(t.category==="lighting"){const a=Number(t.telemetry.dimming?.value??60);return[{id:`${t.id}:dimming`,deviceId:t.id,deviceName:t.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)],offline:o,colorIdx:e},{id:`${t.id}:power`,deviceId:t.id,deviceName:t.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:o,colorIdx:e+1}]}if(t.category==="sensor"){const a=Number(t.telemetry.temp?.value??23.4);return[{id:`${t.id}:temp`,deviceId:t.id,deviceName:t.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a],offline:o,colorIdx:e},{id:`${t.id}:co2`,deviceId:t.id,deviceName:t.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:o,colorIdx:e+1},{id:`${t.id}:humidity`,deviceId:t.id,deviceName:t.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:o,colorIdx:e+2}]}return[{id:`${t.id}:latency`,deviceId:t.id,deviceName:t.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:o,colorIdx:e}]}function ja(t){const e=t.points.filter(C=>typeof C=="number");if(!e.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const o=Math.min(...e),a=Math.max(...e),n=e.reduce((C,B)=>C+B,0)/e.length,r=t.points[t.points.length-1],A=C=>Math.abs(C)<100&&!Number.isInteger(C)?C.toFixed(1):Math.round(C).toString();return{min:A(o),avg:n.toFixed(Math.abs(n)<100?1:0),max:A(a),curr:typeof r=="number"?A(r):"离线"}}function La(t,e,o){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!t.length)return'<div class="pacom-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const n=(A,C)=>{const J=[];for(const _ of A)for(const le of _.points)typeof le=="number"&&J.push(le);const ge=J.length?Math.min(...J)*.92:0,ie=J.length?Math.max(...J)*1.08:100,ne=Math.max(ie-ge,1),pe=[0,.5,1].map(_=>{const le=Math.round(26+106*(1-_)),f=(ge+ne*_).toFixed(ne<15?1:0);return`
          <line x1="44" y1="${le}" x2="662" y2="${le}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${_===0?"0":"3 3"}" />
          <text x="38" y="${le+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${f}</text>
        `}).join(""),oe=a.map((_,le)=>`<text x="${44+le/(a.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${_}</text>`).join(""),Y=A.map((_,le)=>{const f=Ye[(_.colorIdx+le)%Ye.length],S=_.points,G=[];let k=44,ee=26+106/2,X=!1;S.forEach((Q,Le)=>{const $e=44+Le/(S.length-1)*618;if(typeof Q=="number"){const re=26+106*(1-(Q-ge)/ne);G.push(`${$e.toFixed(1)},${re.toFixed(1)}`),k=$e,ee=re}else X=!0});const u=o?S.map((Q,Le)=>{if(typeof Q!="number")return null;const $e=44+Le/(S.length-1)*618,h=26+106*(1-(Q*.96-ge)/ne);return`${$e.toFixed(1)},${h.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${u?`<polyline fill="none" stroke="${f}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${u}" />`:""}
          ${G.length?`<polyline fill="none" stroke="${f}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${G.join(" ")}" />`:""}
          ${X?`<line x1="${k.toFixed(1)}" y1="${ee.toFixed(1)}" x2="662" y2="${ee.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${ee-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),we=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,be=A.map((_,le)=>{const f=Ye[(_.colorIdx+le)%Ye.length],S=ja(_);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${f};"></span>${_.deviceName} · ${_.label}</span></td>
            <td><strong>${S.curr}</strong> <span class="pacom-row-sub">${_.unit}</span></td>
            <td>${S.min} <span class="pacom-row-sub">${_.unit}</span></td>
            <td>${S.avg} <span class="pacom-row-sub">${_.unit}</span></td>
            <td>${S.max} <span class="pacom-row-sub">${_.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${C}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${A.map((_,le)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${Ye[(_.colorIdx+le)%Ye.length]};"></span>${_.deviceName}·${_.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${pe}
          ${oe}
          ${we}
          ${Y}
        </svg>
        <div class="pacom-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="pacom-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${be}</tbody>
          </table>
        </div>
      </div>
    `};if(e==="shared")return n(t,"单图叠合对比（Shared）");const r=new Map;for(const A of t){const C=r.get(A.unit)??[];C.push(A),r.set(A.unit,C)}return Array.from(r.entries()).map(([A,C])=>n(C,`按单位分组泳道（${A}）`)).join("")}function Aa(t){const e=[["时段",`数值 (${t.unit})`,`基线 (${t.unit})`].join(","),...t.series.map(r=>[r.label,String(r.value),r.baseline!==void 0?String(r.baseline):""].join(","))],o=new Blob([`\uFEFF${e.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),n=document.createElement("a");n.href=a,n.download=`pacom-${t.category}-${t.range}.csv`,n.click(),URL.revokeObjectURL(a)}function Fa(t){const e=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],o=["时间",...t.map(C=>`${C.deviceName}·${C.label}(${C.unit})`)].join(","),a=e.map((C,B)=>[C,...t.map(H=>String(H.points[B]??"No Data"))].join(",")),n=new Blob([`\uFEFF${[o,...a].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(n),A=document.createElement("a");A.href=r,A.download="pacom-timeseries-export.csv",A.click(),URL.revokeObjectURL(r)}async function Ca(t,e,o){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),n=a.get("tab"),r=a.get("cat"),A=a.get("device"),C=a.get("points"),B=a.get("mode"),H=a.get("interval");let M=n==="timeseries"?"timeseries":r&&dt.some(h=>h.id===r)?r:"energy",se="7d",ae="2026-11-16",R="2026-11-23",T=st(),N=!1,J="",ge=T.level==="all-projects"||T.level==="project"?g.projectId:T.level==="building"?g.buildingId:g.floorId,ie="chart",ne=!0,pe="breakdown",oe=!1,Y=null;const[we,be]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(g.floorId).catch(()=>[])]);let _=be;const le=new Map,f=[];_.forEach((h,d)=>{const E=Ea(h,d);le.set(h.id,E),f.push(...E)});let S=B==="shared"||B==="grouped"?B:"grouped",G=H==="15m"||H==="1h"||H==="1d"?H:"1h",k=!1;const ee=[];if(C?C.split(",").forEach(h=>{f.some(d=>d.id===h)&&ee.push(h)}):A&&le.has(A)&&(le.get(A)??[]).slice(0,2).forEach(h=>ee.push(h.id)),!ee.length){const h=_.find(O=>O.category==="hvac"),d=_.find(O=>O.category==="sensor"),E=_.find(O=>O.category==="lighting");h&&(le.get(h.id)??[]).slice(0,2).forEach(O=>ee.push(O.id)),d&&(le.get(d.id)??[]).slice(0,1).forEach(O=>ee.push(O.id)),E&&(le.get(E.id)??[]).slice(0,1).forEach(O=>ee.push(O.id)),ee.length||f.slice(0,3).forEach(O=>ee.push(O.id))}const X=new Set(ee),u=new Set(_.filter((h,d)=>d<2||(le.get(h.id)??[]).some(E=>X.has(E.id))).map(h=>h.id)),Q=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:f.filter(h=>h.pointKey==="temp"||h.pointKey==="setpoint"||h.pointKey==="co2").slice(0,4).map(h=>h.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:f.filter(h=>h.pointKey==="dimming"||h.pointKey==="power").slice(0,4).map(h=>h.id),mode:"grouped",interval:"15m"}];let Le="";async function $e(){const h=M==="timeseries"?"energy":M,d=se==="custom"?"30d":se;Y=await e.getAnalysisReport(h,d,g.floorId),re()}function re(){if(!Y)return;const h=M==="timeseries",d=M==="timeseries"?"energy":M,E=dt.find(v=>v.id===d)??dt[0],O=Ft.find(v=>v.id===ge)??Ft[0],ve=Ia(Y,O.factor),Fe=ve.zoneBreakdown.filter(v=>v.status==="warning"),ze=wa[d],Me=Math.max(...ve.zoneBreakdown.map(v=>v.value),1),Te=f.filter(v=>X.has(v.id));t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${at({tree:we,session:o,scope:T,isOpen:N,searchKeyword:J})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${se==="today"?"selected":""}>今日</option>
                <option value="7d" ${se==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${se==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${se==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${h?"":`<button class="pacom-btn ${oe?"pacom-btn--primary":""}" data-toggle-canvas="1">${oe?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${dt.map(v=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${M===v.id}" data-cat="${v.id}">${v.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${M==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${se==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${ae}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${R}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${h?`
            <div class="pacom-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${Te.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${Q.map(v=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${v.id}">${de("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${v.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${_.map(v=>{const m=le.get(v.id)??[],w=u.has(v.id),W=m.filter(he=>X.has(he.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${v.id}" style="cursor:pointer; justify-content:space-between;" title="${v.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${w?"0deg":"-90deg"}); opacity:0.65;">${$a}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${v.name}</div>
                                <div class="pacom-row-sub">${m.length} 个测点 · ${v.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${W>0?`<span class="pacom-badge pacom-badge--accent">${W}</span>`:""}
                          </button>
                          ${w?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${m.map(he=>{const ye=X.has(he.id),Ne=Ye[he.colorIdx%Ye.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${ye?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${he.id}" data-ts-point="${he.id}" ${ye?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${Ne};"></span>
                                            <span style="color:var(--pacom-text-primary);">${he.label}</span>
                                          </span>
                                          <span class="pacom-row-sub">${he.unit}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="pacom-subnav-main" style="padding:2px 4px 24px;">
                ${Le?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${Le}</span></div>`:""}
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${de("clock",12)} 排程(S) · ${de("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${k}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${G==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${G==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${G==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${S==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${S==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${La(Te,S,k)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="pacom-kpi-strip" role="region" aria-label="核心统计指标">
                ${ve.kpis.map(v=>{const m=Sa(v.value,v.unit);return`
                      <div class="pacom-kpi-cell" title="${m.title}">
                        <span class="pacom-kpi-label">${v.label}</span>
                        <div class="pacom-kpi-value">
                          <span>${m.value}</span>
                          ${m.unit?`<span class="pacom-kpi-unit">${m.unit}</span>`:""}
                        </div>
                        <span class="pacom-kpi-delta">${v.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="pacom-section">
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">${E?.label??"趋势"}趋势（${ve.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${O.label} · 更新于 ${ve.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${ne}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${ie==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${ie==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${Fe.length>0?`关注：${Fe.map(v=>v.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${E?.desc??"空间运行洞察"} · ${ze.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${ie==="chart"?ka(ve,ne):`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${ve.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${ve.series.map(v=>{const m=typeof v.baseline=="number"&&v.value>v.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${v.label}</strong></td>
                                    <td>${v.value.toLocaleString("en-US")}</td>
                                    <td>${v.baseline!==void 0?v.baseline.toLocaleString("en-US"):"-"}</td>
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
                    <span class="pacom-row-sub">${ve.zoneBreakdown.length} 个功能区</span>
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
                          ${ve.zoneBreakdown.map(v=>{const m=Math.max(8,Math.round(v.value/Me*100));return`
                                <tr>
                                  <td style="font-weight:500;">${v.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${m}%; height:100%; border-radius:999px; background:${v.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${v.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${v.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${v.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${v.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="pacom-section-title">${oe?"E7F 空间对照预览":d==="energy"&&pe==="load"?"峰谷负荷分布（Load Profile）":ze.title}</h2>
                    ${!oe&&d==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${pe==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${pe==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${oe?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${oe?'<img class="pacom-plan-img" src="./media/floors/e/07F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${d==="environment"?`
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
                        ${(d==="energy"&&pe==="load"?xa:ze.items).map(v=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${v.name}</span>
                                <span class="pacom-row-sub">${v.detail} · <strong style="color:var(--pacom-text-primary);">${v.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,v.pct)}%; height:100%; border-radius:999px; background:${v.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,ot(t,{onToggle:()=>{N=!N,re(),N&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:v=>{J=v,re();const m=t.querySelector("[data-global-space-search]");m&&(m.focus(),m.setSelectionRange(v.length,v.length))},onPick:v=>{T=v,ge=v.level==="all-projects"||v.level==="project"?g.projectId:v.level==="building"?g.buildingId:g.floorId,N=!1,re()}}),t.querySelectorAll("[data-cat]").forEach(v=>{v.addEventListener("click",()=>{M=v.dataset.cat??"energy",Le="",M==="timeseries"?re():$e()})}),t.querySelector("[data-range-select]")?.addEventListener("change",v=>{se=v.currentTarget.value??"7d",$e()}),t.querySelector("[data-custom-start]")?.addEventListener("change",v=>{ae=v.currentTarget.value}),t.querySelector("[data-custom-end]")?.addEventListener("change",v=>{R=v.currentTarget.value}),t.querySelectorAll("[data-chart-mode]").forEach(v=>{v.addEventListener("click",()=>{ie=v.dataset.chartMode??"chart",re()})}),t.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{ne=!ne,re()}),t.querySelectorAll("[data-energy-right]").forEach(v=>{v.addEventListener("click",()=>{pe=v.dataset.energyRight??"breakdown",re()})}),t.querySelector("[data-export-csv]")?.addEventListener("click",()=>{h?Fa(Te):Aa(ve)}),t.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{oe=!oe,re()}),t.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),t.querySelectorAll("[data-ts-expand]").forEach(v=>{v.addEventListener("click",()=>{const m=v.dataset.tsExpand;m&&(u.has(m)?u.delete(m):u.add(m),re())})}),t.querySelectorAll("[data-ts-point]").forEach(v=>{v.addEventListener("change",()=>{const m=v.dataset.tsPoint;m&&(v.checked?X.add(m):X.delete(m),Le="",re())})}),t.querySelectorAll("[data-ts-mode]").forEach(v=>{v.addEventListener("click",()=>{S=v.dataset.tsMode??"grouped",re()})}),t.querySelector("[data-ts-interval]")?.addEventListener("change",v=>{G=v.currentTarget.value??"1h",re()}),t.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{k=!k,re()}),t.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const m=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(X).join(","))}&mode=${S}&interval=${G}`,w=`${window.location.origin}${window.location.pathname}${m}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(w).catch(()=>{}),window.history.replaceState(null,"",m),Le=`已复制分享链接（含 ${X.size} 个测点、${S==="grouped"?"按单位分组":"单图叠合"}、${G} 粒度）。`,re()}),t.querySelectorAll("[data-load-fav]").forEach(v=>{v.addEventListener("click",()=>{const m=Q.find(w=>w.id===v.dataset.loadFav);m&&(X.clear(),m.pointIds.forEach(w=>{X.add(w);const W=w.split(":")[0];W&&u.add(W)}),S=m.mode,G=m.interval,Le=`已加载收藏视图「${m.name}」。`,re())})}),t.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(X.size===0)return;const v=`自定义对比 #${Q.length+1}（${X.size} 测点）`;Q.push({id:`fav-${Date.now()}`,name:v,pointIds:Array.from(X),mode:S,interval:G}),Le=`已保存当前时序配置为「${v}」。`,re()})}await $e()}const qa={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},za={frozen:"已冻结",draft:"草稿",delivered:"已交付"},yt={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},$t=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],Ct=[{id:"doc-hvac-7f",floorId:g.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:g.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:g.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:g.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],Da={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},qt=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function p(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function pt(t){const e=t.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面")||e.includes("屋顶")||e.includes("天面"))return 999;const o=e.match(/(-?\d+)/);if(!o)return 0;const a=Number(o[1]);return e.startsWith("B")||e.includes("地下")||e.includes("负")?-Math.abs(a):a}const zt={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function tt(t){const e=t.trim(),o=e.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test(o)||/屋面|屋顶|天面/.test(e))return"RF";const a=o.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(a)return`B${Number(a[1])}`;const n=e.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(n){const C=/^\d+$/.test(n[1])?Number(n[1]):zt[n[1]];if(C)return`B${C}`}if(/首层|一层/.test(e))return"1F";const r=e.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(r){const C=/^\d+$/.test(r[1])?Number(r[1]):zt[r[1]];if(C)return`${C}F`}const A=o.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return A?`${Number(A[1])}F`:null}function ut(t){return new Promise((e,o)=>{const a=new FileReader;a.onload=()=>typeof a.result=="string"?e(a.result):o(new Error("无法读取图片内容")),a.onerror=()=>o(new Error(`读取文件「${t.name}」失败`)),a.readAsDataURL(t)})}function Ma(t){return t.category==="gateway"?t.name.includes("蓝牙")?"蓝牙适配器":"主控网关":t.category==="lighting"?t.name.includes("702")?"702 照明":t.name.slice(0,6):t.category==="hvac"?t.name.includes("VAV")?"VAV-02":t.name.includes("FCU")?"FCU-01":t.name.slice(0,6):t.category==="sensor"?"环境传感":t.name.slice(0,6)}function Ta(t,e){const o=t.status!=="connected",a=e.filter(n=>n.hardwareBinding?.protocol===t.protocol);return a.length>0?a.map(n=>{const r=n.connectivity==="offline"||o;return{pointName:n.category==="hvac"?"送风温度 / 阀门开度":n.category==="lighting"?"回路开关 / 亮度反馈":n.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:n.name,value:r?"无上报":n.category==="hvac"?"23.4°C · 62%":n.category==="lighting"?"开启 · 80%":n.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:r?"46 分钟前":"12 秒前",quality:r?n.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${t.protocol.toUpperCase()} 采集通道汇总点`,deviceName:t.name,value:o?"采样延迟":"正常上报",interval:"60s",lastSeen:o?"38 分钟前":"9 秒前",quality:o?"delayed":"online"}]}async function Oa(t,e,o){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),n=a.get("sec");let r=n==="floors"||n==="projects"?"project_config":n==="floorplan"||n==="devices"||n==="inventory"?"devices":n==="network"||n==="network_topo"?"network_topo":n==="connections"?"connections":"overview",A=n==="inventory"?"list":"marking",C="binding",B="",H="all",M=st(),se=!1,ae="",R="device",T="all",N="",J=!1,ge=!1,ie="mesh",ne=1,pe=0,oe=0,Y=await e.getSpatialTree(),we=[],be=[],_=[];const le={...Da},f=[];let S=M.level==="all-projects"?Y.projects[0]?.id??g.projectId:M.projectId,G=M.level==="building"||M.level==="floor"?M.buildingId:Y.buildings.find(x=>x.projectId===S)?.id??Y.buildings[0]?.id??g.buildingId,k=M.level==="floor"?M.floorId:Y.floors.find(x=>x.buildingId===G&&x.id===g.floorId)?.id??Y.floors.find(x=>x.buildingId===G)?.id??g.floorId,ee=n==="floors"?k:null,X="all",u="zones",Q=a.get("new")==="project",Le=!1,$e=!1,re=null,h=!1,d=!1,E=!1,O=!1,ve=!1,Fe=null,ze=new Set,Me=null,Te=!1,v=[];const m=[];let w=null,W=null,he=!1,ye=!1,Ne=null,We=null,Ue=3,qe=!1,Xe=[],ke=null,xe="",b="";const Z=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),P=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],y=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:g.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:g.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:g.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:g.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],I=new Map;function q(){Q=!1,Le=!1,$e=!1,re=null,h=!1,d=!1,E=!1,O=!1,ve=!1,Fe=null}function fe(){return!!(Q||Le||$e||re||h||d||E||O||ve||Fe)}const te=x=>{if(!document.body.contains(t)){document.removeEventListener("keydown",te);return}x.key==="Escape"&&(Me?(Me=null,D()):fe()?(q(),D()):ge&&(ge=!1,ye=!1,D()))};document.addEventListener("keydown",te);function Ie(){return Y.floors}function ue(x){return[...Y.floors.filter(j=>j.buildingId===x)].sort((j,z)=>pt(z.name)-pt(j.name))}function ce(){return Y.zones}function Ee(x){return[...x===g.floorId?we:[],...f.filter(z=>z.floorId===x)]}function Ve(x){return x?ce().find(j=>j.id===x)?.name.replace(/^7F\s*/,"")??x:"未分配功能区"}function Ke(x){const j=Y.buildings.find(F=>F.id===x);if(!j)return;S=j.projectId,G=j.id;const z=ue(j.id);z.some(F=>F.id===k)||(k=z.find(F=>F.id===g.floorId)?.id??z[0]?.id??""),ee&&!z.some(F=>F.id===ee)&&(ee=null),M=Ge(k?{level:"floor",projectId:j.projectId,buildingId:j.id,floorId:k}:{level:"building",projectId:j.projectId,buildingId:j.id}),W=null,ge=!1,ye=!1,ne=1,pe=0,oe=0}function Je(x){k=x;const j=Ie().find(z=>z.id===x);if(j){G=j.buildingId;const z=Y.buildings.find(F=>F.id===j.buildingId);z&&(S=z.projectId),M=Ge({level:"floor",projectId:S,buildingId:j.buildingId,floorId:j.id})}W=null,ge=!1,ye=!1,ne=1,pe=0,oe=0}async function Oe(){b="";const[x,j,z,F]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(g.floorId).catch(()=>[]),e.listConnections(S),e.listDeliveryBatches(g.floorId)]);if(Y=x,we=j,be=z,_=F,Y.projects.length===0)S="",G="",k="",ee=null;else{Y.projects.some(i=>i.id===S)||(S=Y.projects[0].id);const s=Y.buildings.filter(i=>i.projectId===S);s.some(i=>i.id===G)||(G=s[0]?.id??"");const c=G?ue(G):[];c.some(i=>i.id===k)||(k=c.find(i=>i.id===g.floorId)?.id??c[0]?.id??""),ee&&!c.some(i=>i.id===ee)&&(ee=null)}const K=Ee(k);W&&!K.some(s=>s.id===W)&&(W=null,ge=!1),he=K.find(s=>s.id===W)?.physicalInstalled??!1,D()}function lt(){const x=t.querySelector('[data-role="dep-viewport"]');x&&(x.style.transform=`translate(${pe}px, ${oe}px) scale(${ne})`);const j=t.querySelector('[data-role="dep-zoom-label"]');j&&(j.textContent=`${Math.round(ne*100)}%`)}function kt(x){b="",x.connectivity==="offline"?b=`单机回读自检未通过（FAIL）：「${x.name}」当前离线，请核查网关链路或中继覆盖。`:xe=`单机回读自检通过（PASS）：「${x.name}」指令下发与状态回读一致，已安全复位。`,D()}function Vt(){b="";const x=Ee(k),j=x.filter(L=>L.connectivity==="offline"),z=x.length-j.length,F=new Date;ke={ranAt:`${String(F.getHours()).padStart(2,"0")}:${String(F.getMinutes()).padStart(2,"0")}:${String(F.getSeconds()).padStart(2,"0")}`,total:x.length,passed:z,failed:j.length,failedNames:j.map(L=>L.name)},j.length>0?b=`全层批量自检完成：${z}/${x.length} 台通过，${j.length} 台异常（${j.map(L=>L.name).join("、")}）。`:xe=`全层批量自检全部通过（${z}/${x.length}），设备已自动安全复位。`,D()}function Zt(){const x=Ee(k),j=[],z=x.filter(c=>c.connectivity==="offline"),F=x.filter(c=>!c.planPoint),K=x.filter(c=>Z.get(c.id)?.proxy).length,L=x.filter(c=>Z.get(c.id)?.relay).length,s=x.length?L/x.length:0;z.length>0?z.forEach(c=>j.push({level:"fail",title:`节点不可达：${c.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:c.id})):j.push({level:"ok",title:"全网节点可达性正常",detail:`${x.length} 台设备均正常响应心跳。`}),K<1?j.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):j.push({level:"ok",title:`代理节点配置合理（${K} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),s>.25&&x.length>=4&&j.push({level:"warn",title:`中继比例偏高（${Math.round(s*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),F.length>0&&j.push({level:"warn",title:`尚有 ${F.length} 台未完成设备标记`,detail:"请在「设备管理 → 设备标记」中补齐平面坐标以便施工定位。"}),Xe=j,xe=`已完成蓝牙 Mesh 网络体检（检测 ${x.length} 台节点，发现 ${j.filter(c=>c.level!=="ok").length} 项关注）。`,D()}function Ht(){const x=Ee(k),j=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...x.map(L=>[L.name,L.category,Ve(L.logicalZoneId),L.planPoint?`${Math.round(L.planPoint.x*100)}%/${Math.round(L.planPoint.y*100)}%`:"未标记",L.hardwareBinding?`${L.hardwareBinding.protocol} ${L.hardwareBinding.networkAddress}`:"未绑定",L.physicalInstalled?"已复核":"待复核",L.connectivity==="online"?"在线":"离线"].join(","))],z=new Blob([`\uFEFF${j.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),F=URL.createObjectURL(z),K=document.createElement("a");K.href=F,K.download="pacom-device-list.csv",K.click(),URL.revokeObjectURL(F)}function it(x){const j=new Set(ue(x.id).map(F=>tt(F.name)??F.name.toUpperCase())),z=[];for(let F=1;F<=x.aboveFloors;F+=1){const K=`${F}F`;j.has(K)||z.push({kind:"above",level:F,name:K})}for(let F=1;F<=x.belowFloors;F+=1){const K=`B${F}`;j.has(K)||z.push({kind:"below",level:-F,name:K})}return x.hasRoof&&!j.has("RF")&&z.push({kind:"roof",level:99,name:"RF"}),z}async function Wt(x){const j=Y.buildings.find(F=>F.id===x);if(!j)return 0;const z=it(j);for(const F of z)await e.upsertFloor?.({buildingId:j.id,kind:F.kind,level:F.level,name:F.name});return z.length}const Gt={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。",granularity:"building"},project_config:{title:"项目配置",subtitle:"在同一视图内贯通管理项目、园区楼宇、楼层平面底图、功能区与竣工图纸。",granularity:"project"},devices:{title:"设备管理",subtitle:"围绕当前楼层完成设备标记、设备列表核查、参数下发、自检与设备分组。",granularity:"floor"},network_topo:{title:"网络拓扑",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、环境等异构子系统通道及传感器采集质量。",granularity:"project"}};function Qe(x,j="layers"){return`
      <div class="dep-empty-card">
        <div class="dep-empty-icon">${de(j,20)}</div>
        <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
        <span class="pacom-row-sub" style="max-width:440px;">按「创建项目 → 添加楼宇与楼层 → 上传平面底图」完成建档后，即可开展设备标记、网络同步与交付验收。</span>
        <div class="dep-empty-steps">
          <span>1. 创建项目</span>
          <span>→</span>
          <span>2. 添加楼宇与楼层</span>
          <span>→</span>
          <span>3. 上传平面图</span>
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${x?"":"disabled"}>+ 创建第一个项目</button>
      </div>`}function Kt(){const x=(j,z,F,K=!1)=>`
      <button type="button" class="pacom-unified-item" aria-current="${r===j}" data-dep-nav="${j}">
        ${de(z,16)}
        <span>${F}</span>
        ${K?'<span class="dep-rail-dot" title="有变更待同步至边缘网关"></span>':""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${x("overview","layout-dashboard","部署总览")}
          ${x("project_config","layers","项目配置")}
          ${x("devices","map-pin","设备管理")}
          ${x("network_topo","waypoints","网络拓扑",qe)}
          ${x("connections","plug","系统接入")}
        </div>
      </aside>
    `}function Yt(x){return Y.projects.length===0?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${x?"":"disabled"}>+ 新建项目</button>`:r==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出清单</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${x?"":"disabled"}>+ 交付冻结</button>
      `:r==="project_config"?`
        <button type="button" class="pacom-btn" data-open-new-proj="1" ${x?"":"disabled"}>+ 新建项目</button>
        ${x?"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
      `:r==="devices"?`${`
        <div class="pacom-tabs" role="tablist" aria-label="设备管理视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${A==="marking"}" data-dev-subtab="marking">设备标记</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${A==="list"}" data-dev-subtab="list">设备列表</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${A==="groups"}" data-dev-subtab="groups">设备分组</button>
        </div>`}${A==="marking"?'<button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>':A==="list"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${x?"":"disabled"}>+ 新建分组</button>`}`:r==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${x?"":"disabled"}>${qe?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:`
      <button type="button" class="pacom-btn" data-edge-restart="service" ${x?"":"disabled"}>重启边缘服务</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${x?"":"disabled"}>+ 新增接入通道</button>
    `}function Xt(x){if(Y.projects.length===0)return Qe(x,"layout-dashboard");const j=G?ue(G):[],z=j.filter(i=>!!i.plan).length,F=j.flatMap(i=>Ee(i.id)),K=F.filter(i=>!!i.planPoint).length,L=F.filter(i=>i.connectivity==="online").length,s=F.filter(i=>i.physicalInstalled).length,c=j.filter(i=>Ee(i.id).length>0&&!qe).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${j.length>0&&z===j.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 项目与底图</span>
          <div class="pacom-kpi-value">${z}<span class="pacom-kpi-unit">/ ${j.length} 层</span></div>
          <span class="pacom-kpi-delta">${j.length>0&&z===j.length?"全部底图就绪":`尚缺 ${Math.max(0,j.length-z)} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="marking" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${F.length>0&&K===F.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${K}<span class="pacom-kpi-unit">/ ${F.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${P.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${F.length>0&&L===F.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${L}<span class="pacom-kpi-unit">/ ${F.length} 台</span></div>
          <span class="pacom-kpi-delta">${F.length-L>0?`${F.length-L} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${qe?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${c}<span class="pacom-kpi-unit">/ ${j.length} 层</span></div>
          <span class="pacom-kpi-delta">${qe?"有变更待下发 →":`基线 v${Ue}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="list" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${F.length>0&&s===F.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${s}<span class="pacom-kpi-unit">/ ${F.length} 台</span></div>
          <span class="pacom-kpi-delta">${F.length>0&&s===F.length?"可交付冻结":`待复核 ${F.length-s} 台 →`}</span>
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
                ${j.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前楼宇暂无楼层</strong><span>请先在「项目配置」中生成楼层并上传底图。</span></div></td></tr>':j.map(i=>{const l=Ee(i.id),U=ce().filter(je=>je.floorId===i.id),$=l.filter(je=>!!je.planPoint).length,me=l.filter(je=>je.connectivity==="online").length,Ce=l.filter(je=>je.physicalInstalled).length,Ae=!!i.plan,De=Ae&&l.length>0&&$===l.length&&Ce===l.length&&me===l.length&&!qe;return`
                            <tr>
                              <td><strong>${p(i.name)}</strong><div class="pacom-row-sub">${i.areaSqm?`${i.areaSqm} m²`:"待补面积"}</div></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-expand="1" data-matrix-floor="${p(i.id)}"><span class="pacom-dot ${Ae?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${Ae?`已传图 · ${U.length} 区`:"待传底图"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="marking" data-matrix-floor="${p(i.id)}"><span class="pacom-dot ${l.length>0&&$===l.length?"pacom-dot--online":l.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${l.length>0?`${$}/${l.length}`:"未标记"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${p(i.id)}"><span class="pacom-dot ${l.length>0&&me===l.length?"pacom-dot--online":l.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${l.length>0?`${me}/${l.length}`:"—"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${p(i.id)}"><span class="pacom-dot ${l.length===0?"pacom-dot--offline":qe?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${l.length===0?"—":qe?"待同步":`v${Ue}`}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="list" data-matrix-floor="${p(i.id)}"><span class="pacom-dot ${l.length>0&&Ce===l.length?"pacom-dot--online":l.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${l.length>0?`${Ce}/${l.length}`:"—"}</span></button></td>
                              <td style="text-align:right;"><span class="pacom-badge ${De?"pacom-badge--online":l.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${De?"可验收交付":l.length>0?"实施中":"待配置"}</span></td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${ke?`<div class="pacom-banner ${ke.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${ke.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${ke.passed}/${ke.total} 台${ke.failedNames.length?` · 异常：${ke.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${_.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${_.map(i=>`
                    <tr>
                      <td><div style="font-weight:450;">${p(i.versionTag)}</div><div class="pacom-row-sub"><code>${p(i.id)}</code></div></td>
                      <td><strong>${i.verifiedCount}</strong> / ${i.deviceCount} 台</td>
                      <td><div>${p(i.frozenBy)}</div><div class="pacom-row-sub">${p(i.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${za[i.status]??i.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Jt(x){if(Y.projects.length===0)return Qe(x,"layers");const j=Y.projects.find($=>$.id===S)??Y.projects[0],z=Y.buildings.filter($=>$.projectId===j.id),F=z.reduce(($,me)=>$+ue(me.id).length,0),K=z.find($=>$.id===G)??z[0]??null,L=K?ue(K.id):[],s=L.filter($=>!$.plan).length,c=L.filter($=>ce().filter(me=>me.floorId===$.id).length===0).length,i=L.filter($=>X==="missing_plan"?!$.plan:X==="missing_zone"?ce().filter(me=>me.floorId===$.id).length===0:!0),l=K?it(K):[],U=j.location?`${j.location.lng.toFixed(4)}, ${j.location.lat.toFixed(4)}`:"未设置坐标";return`
      <div class="dep-project-strip">
        <div class="dep-project-strip-main">
          <div class="dep-project-cover">
            <img src="${p(j.imageUrl??"./media/gzlab.jpg")}" alt="${p(j.name)}" />
          </div>
          <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">${p(j.name)}</strong>
              <span class="pacom-badge pacom-badge--neutral">${z.length} 栋楼宇</span>
              <span class="pacom-badge pacom-badge--neutral">${F} 个楼层</span>
            </div>
            <span class="pacom-row-sub">${p(j.city||"未填城市")}${j.address?` · ${p(j.address)}`:""} · 坐标 ${p(U)}</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-edit-proj="1" ${x?"":"disabled"}>编辑项目</button>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <div>
            <h2 class="pacom-section-title">园区楼宇（${z.length} 栋）</h2>
            <span class="pacom-row-sub">点击楼宇卡片切换下方楼层列表，点「编辑参数」修改外观与层数</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-bld="1" ${x?"":"disabled"}>+ 新建楼宇</button>
        </div>
        ${z.length===0?`
            <div class="dep-empty-card">
              <div class="dep-empty-icon">${de("building-2",20)}</div>
              <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${p(j.name)} 暂无楼宇</strong>
              <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
              <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${x?"":"disabled"}>+ 添加第一栋楼宇</button>
            </div>`:`
            <div class="dep-building-grid">
              ${z.map($=>{const me=ue($.id),Ce=me.filter(Re=>!!Re.plan).length,Ae=me.length>0?Math.round(Ce/me.length*100):0,De=it($),je=K?.id===$.id,Se=me.length===0?"pacom-badge--neutral":Ce===me.length?"pacom-badge--online":"pacom-badge--warning";return`
                    <article class="dep-building-card ${je?"is-active":""}" data-select-building="${p($.id)}">
                      <div class="dep-building-stage">
                        <img src="${p($.imageUrl??"./media/building-e.webp")}" alt="${p($.name)}" />
                      </div>
                      <div class="dep-building-body">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${p($.name)}</strong>
                          <span class="pacom-badge ${Se}">${me.length===0?"未建层":`${Ce}/${me.length} 底图`}</span>
                        </div>
                        <div class="pacom-row-sub">地上 ${$.aboveFloors} 层${$.belowFloors>0?` · 地下 ${$.belowFloors} 层`:""}${$.hasRoof?" · RF":""}${$.areaSqm?` · ${$.areaSqm} m²`:""}</div>
                        <div class="pacom-progress-track">
                          <div class="pacom-progress-fill" style="width:${Ae}%; background:${Ae===100?"var(--pacom-status-online)":"var(--pacom-accent-solid)"};"></div>
                        </div>
                        ${De.length>0?`<div style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:12px; color:var(--pacom-text-secondary);">
                                 <span>尚缺 ${De.length} 个楼层</span>
                                 <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="height:22px; padding:0 6px; font-size:12px;" data-fill-missing-floors="${p($.id)}" ${x?"":"disabled"}>一键补齐</button>
                               </div>`:""}
                      </div>
                      <div class="dep-building-foot">
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${p($.id)}" ${x?"":"disabled"}>编辑参数</button>
                        <span class="pacom-row-sub" style="font-size:12px; color:${je?"var(--pacom-accent-fg)":"var(--pacom-text-secondary)"};">${je?"当前查看中":"点击切换楼层"}</span>
                      </div>
                    </article>`}).join("")}
              <button type="button" class="dep-building-add-card" data-open-new-bld="1" ${x?"":"disabled"}>
                ${de("plus",20)}
                <span style="font-size:13px;">新建楼宇</span>
              </button>
            </div>`}
      </section>

      ${K?`
          <section class="pacom-section">
            <div class="pacom-section-head">
              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <h2 class="pacom-section-title">${p(K.name)} 楼层与底图（${L.length}）</h2>
                <div class="pacom-count-pills">
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${X==="all"}" data-floor-list-filter="all">全部 <span class="pacom-count-num">${L.length}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${X==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 <span class="pacom-count-num">${s}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${X==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 <span class="pacom-count-num">${c}</span></button>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                ${l.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${p(K.id)}" ${x?"":"disabled"}>一键补齐 ${l.length} 层</button>`:""}
                <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-floor="1" ${x?"":"disabled"}>+ 新增楼层</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-batch-modal="1" ${x?"":"disabled"}>批量导入底图</button>
              </div>
            </div>

            ${L.length===0?`
                <div class="dep-empty-card">
                  <div class="dep-empty-icon">${de("layers",20)}</div>
                  <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${p(K.name)} 暂无楼层</strong>
                  <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${p(K.id)}" ${x?"":"disabled"}>一键生成全部楼层</button>
                    <button type="button" class="pacom-btn" data-open-new-floor="1" ${x?"":"disabled"}>+ 手动新增楼层</button>
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
                        ${i.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':i.map($=>{const me=ce().filter(Se=>Se.floorId===$.id),Ce=[...Ct,...m].filter(Se=>Se.floorId===$.id),Ae=Ee($.id),De=ee===$.id,je=L.filter(Se=>Se.id!==$.id);return`
                                    <tr>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:7px;">
                                          <span class="pacom-dot ${$.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                          <strong>${p($.name)}</strong>
                                        </div>
                                      </td>
                                      <td><span class="pacom-row-sub">${$.areaSqm?`${$.areaSqm} m²`:"—"}</span></td>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:8px;">
                                          ${$.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${p(K.name)} ${p($.name)} 平面底图" data-lb-src="${p($.plan.imageUrl)}" title="查看大图"><img src="${p($.plan.imageUrl)}" alt="${p($.name)}" /></button>
                                                 <span class="pacom-badge pacom-badge--online">已就绪</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                          <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="cursor:pointer; height:24px; padding:0 6px; font-size:12px;">
                                            <span>${$.plan?"替换":"上传"}</span>
                                            <input type="file" name="floorPlan_${p($.id)}" accept="image/*" data-upload-floor="${p($.id)}" style="display:none;" ${x?"":"disabled"} />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        ${me.length>0?`<span>${me.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${p(me.slice(0,2).map(Se=>Se.name.replace(/^7F\s*/,"")).join("、"))}${me.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                                      </td>
                                      <td><span class="pacom-row-sub">${Ce.length} 份</span></td>
                                      <td>
                                        <div style="display:flex; justify-content:flex-end; gap:6px;">
                                          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-expand-floor="${p($.id)}">${De?"收起配置":"展开配置"}</button>
                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${p($.id)}">设备标记 →</button>
                                        </div>
                                      </td>
                                    </tr>
                                    ${De?`
                                        <tr class="pacom-table-detail-row">
                                          <td colspan="6">
                                            <div class="dep-floor-expand-grid">
                                              <div class="dep-floor-expand-col">
                                                <div class="dep-plan-preview-box" style="min-height:260px;" data-single-floor-drop="${p($.id)}">
                                                  <div class="dep-plan-toolbar">
                                                    ${$.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${p(K.name)} ${p($.name)} 平面底图" data-lb-src="${p($.plan.imageUrl)}">查看大图</button>`:""}
                                                    <label class="dep-plan-tool-btn" style="cursor:pointer;">
                                                      <span>${$.plan?"替换底图":"上传底图"}</span>
                                                      <input type="file" name="floorPlanDrop_${p($.id)}" accept="image/*" data-upload-floor="${p($.id)}" style="display:none;" ${x?"":"disabled"} />
                                                    </label>
                                                    ${$.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${p($.id)}" ${x?"":"disabled"}>清空</button>`:""}
                                                  </div>
                                                  ${$.plan?`<img src="${p($.plan.imageUrl)}" alt="${p($.name)} 平面图" style="width:100%; max-height:290px; object-fit:contain; display:block;" />`:`<div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:24px; text-align:center;">
                                                           <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${p($.name)} 2D 平面图到此处</strong>
                                                           <span class="pacom-row-sub">支持透明 WebP / PNG / JPG</span>
                                                         </div>`}
                                                </div>
                                              </div>

                                              <div class="dep-floor-expand-col">
                                                <div class="pacom-settings-card" style="padding:10px 16px;">
                                                  <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                                                    <form data-save-floor="${p($.id)}" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                                                      <input class="pacom-input" name="fName" value="${p($.name)}" aria-label="楼层名称" style="width:76px; height:32px; flex:none;" required ${x?"":"disabled"} />
                                                      <input class="pacom-input" name="fArea" type="number" step="0.1" value="${p($.areaSqm??"")}" placeholder="面积 m²" aria-label="建筑面积" style="width:110px; height:32px; flex:none;" ${x?"":"disabled"} />
                                                      <button type="submit" class="pacom-btn" ${x?"":"disabled"}>保存</button>
                                                    </form>
                                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-delete-floor="${p($.id)}" ${!x||Ae.length>0?`disabled title="${Ae.length>0?`已关联 ${Ae.length} 台设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                                                  </div>
                                                </div>

                                                <div class="pacom-settings-card" style="padding:4px 16px;">
                                                  <div class="pacom-setting-row" style="padding:10px 0; justify-content:space-between; gap:8px;">
                                                    <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${u==="zones"}" data-floor-detail-tab="zones">功能区（${me.length}）</button>
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${u==="docs"}" data-floor-detail-tab="docs">竣工图纸与手册（${Ce.length}）</button>
                                                    </div>
                                                    ${u==="zones"?me.length>0&&je.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-open-copy-zones="${p($.id)}" ${x?"":"disabled"}>复用至其他层…</button>`:"":`<label class="pacom-btn pacom-btn--sm" style="cursor:pointer;"><span>+ 关联文件</span><input type="file" name="attachDoc_${p($.id)}" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${p($.id)}" style="display:none;" ${x?"":"disabled"} /></label>`}
                                                  </div>
                                                  ${u==="zones"?`
                                                        ${me.length===0?`
                                                            <div class="pacom-setting-row" style="padding:10px 0; flex-direction:column; align-items:flex-start; gap:8px;">
                                                              <span class="pacom-row-sub">暂未划分功能区，可一键套用常用模板：</span>
                                                              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                                                ${qt.map(Se=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${p(Se.key)}" data-tpl-floor="${p($.id)}" ${x?"":"disabled"}>+ ${p(Se.label)}</button>`).join("")}
                                                              </div>
                                                            </div>`:me.map(Se=>w===Se.id?`
                                                                      <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-save-edit-zone="${p(Se.id)}" data-zone-floor="${p($.id)}">
                                                                        <input class="pacom-input" name="zName" value="${p(Se.name)}" style="width:180px; height:30px; flex:none;" required />
                                                                        <select class="pacom-select" name="zCat" style="width:110px; height:30px;">
                                                                          ${Object.keys(yt).map(Re=>`<option value="${Re}" ${Se.category===Re?"selected":""}>${yt[Re]}</option>`).join("")}
                                                                        </select>
                                                                        <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                                                      </form>`:`
                                                                      <div class="pacom-setting-row" style="padding:9px 0;">
                                                                        <div class="pacom-setting-meta" style="min-width:140px;">
                                                                          <span class="pacom-setting-title">${p(Se.name)} <span class="pacom-badge pacom-badge--neutral">${p(yt[Se.category]??Se.category)}</span></span>
                                                                        </div>
                                                                        <div class="pacom-setting-control">
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${p(Se.id)}" ${x?"":"disabled"}>编辑</button>
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${p(Se.id)}" ${x?"":"disabled"}>删除</button>
                                                                        </div>
                                                                      </div>`).join("")}
                                                        <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-add-zone="${p($.id)}">
                                                          <input class="pacom-input" name="zoneName" placeholder="新功能区名称（如：${p($.name)} 东侧实验区）" style="width:210px; height:32px; flex:none;" required ${x?"":"disabled"} />
                                                          <select class="pacom-select" name="zoneCat" style="width:112px; height:32px;" ${x?"":"disabled"}>
                                                            <option value="lab">实验区</option>
                                                            <option value="office">办公区</option>
                                                            <option value="meeting">会议室</option>
                                                            <option value="corridor">走廊/公区</option>
                                                            <option value="utility">机房/后勤</option>
                                                            <option value="outdoor">露台/活动区</option>
                                                          </select>
                                                          <button type="submit" class="pacom-btn" ${x?"":"disabled"}>+ 添加</button>
                                                        </form>`:Ce.length===0?'<div class="pacom-setting-row" style="padding:12px 0;"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':Ce.map(Se=>`
                                                              <div class="pacom-setting-row" style="padding:9px 0;">
                                                                <div class="pacom-setting-meta" style="min-width:140px;">
                                                                  <span class="pacom-setting-title">${p(Se.name)}</span>
                                                                  <span class="pacom-row-sub">${p(Se.category)} · ${p(Se.size)} · ${p(Se.updatedAt)}</span>
                                                                </div>
                                                                <div class="pacom-setting-control">
                                                                  <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${p(Se.id)}">查阅</button>
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
    `}function Qt(x){if(!ge||r!=="devices"||A==="groups")return"";const z=Ee(k).find(s=>s.id===W)??null;if(!z)return"";const F=Z.get(z.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${k.slice(-4)}`},K=P.filter(s=>s.deviceId===z.id),L=I.get(z.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450};return`
      <aside class="pacom-drawer" style="width:376px;" aria-label="设备配置抽屉">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${p(z.name)}</h2>
            <div class="pacom-row-sub">${p(Ve(z.logicalZoneId))} · v${z.version}</div>
          </div>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${de("x",16)}</button>
        </div>

        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${x?"":"disabled"}>${ye?"点击图纸定位中…":"点图更新坐标"}</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${p(z.id)}">Ping 闪灯 5s</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="binding"}" data-drawer-tab="binding">绑定与安装</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="params"}" data-drawer-tab="params">自治参数</button>
        </div>

        ${C==="binding"?`
            ${z.category==="lighting"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">回路可视化灯点（${K.length}）</span>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${p(z.id)}" ${x?"":"disabled"}>+ 添加灯点</button>
                  </div>
                  ${K.map(s=>`
                      <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                        <span><strong>${p(s.channel)}</strong> · ${p(s.label)}</span>
                        <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:12px;" data-del-light-marker="${p(s.id)}" ${x?"":"disabled"}>删除</button>
                      </div>`).join("")}
                </div>`:""}

            ${z.category!=="hvac"&&z.category!=="meter"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                    <code style="font-size:12px;">${p(F.meshUuid)}</code>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Proxy 代理（建议每层 2–3 个）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${F.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${p(z.id)}" ${x?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${F.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${p(z.id)}" ${x?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                </div>`:""}

            <form data-role="binding-form" class="pacom-control-box" style="gap:10px;">
              <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">通信协议</span>
                  <select class="pacom-select" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(s=>`<option value="${s}" ${z.hardwareBinding?.protocol===s?"selected":""}>${s.toUpperCase()}</option>`).join("")}
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">网络地址 / 主题</span>
                  <input class="pacom-input" name="networkAddress" placeholder="地址或主题" value="${p(z.hardwareBinding?.networkAddress??"")}" />
                </label>
              </div>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:10px;">
                <label class="dep-field" style="flex:1;">
                  <span class="dep-field-label">端口 / 回路</span>
                  <input class="pacom-input" name="portOrChannel" placeholder="端口或回路" value="${p(z.hardwareBinding?.portOrChannel??"")}" />
                </label>
                <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; height:32px; flex-shrink:0;">
                  <span>物理已复核</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${he}" data-toggle-phys="1" ${x?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                </span>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${x?"":"disabled"}>保存绑定与复核（v${z.version}）</button>
            </form>`:`
            <form data-save-dev-params="${p(z.id)}" class="pacom-control-box" style="gap:10px;">
              <div>
                <div style="font-size:14px; font-weight:450;">人感与光感自治参数</div>
                <div class="pacom-row-sub">自动关灯延时、恢复自动延时与光照度门限</div>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${L.offDelayMin}" ${x?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" value="${L.restoreMin}" ${x?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" value="${L.luxOn}" ${x?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" value="${L.luxOff}" ${x?"":"disabled"} /></label>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${x?"":"disabled"}>下发设备参数</button>
            </form>`}
      </aside>
    `}function ea(x){if(Y.projects.length===0)return`
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${Qe(x,"map-pin")}</div>
        </main>`;const j=G?ue(G):[],z=j.find(i=>i.id===k)??j[0],F=Ee(k),K=ce().filter(i=>i.floorId===k),L=ge?F.find(i=>i.id===W)??null:null,s=N.trim().toLowerCase(),c=F.filter(i=>!(T==="unverified"&&i.physicalInstalled||T==="unplaced"&&i.planPoint||s&&!`${i.name} ${Ve(i.logicalZoneId)}`.toLowerCase().includes(s)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${de("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${p(N)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${J?"is-active":""}" data-toggle-hud-pool="1">设备池 ${F.length}</button>
            <button type="button" class="pacom-hud-pill" data-open-new-dev="1" ${x?"":"disabled"}>+ 新增设备</button>
          </div>

          ${J?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${p(z?.name??"7F")} 设备池（${c.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${de("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-count-pills">
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${T==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${F.length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${T==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${F.filter(i=>!i.physicalInstalled).length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${T==="unplaced"}" data-dev-filter="unplaced">未标记 <span class="pacom-count-num">${F.filter(i=>!i.planPoint).length}</span></button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${c.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':c.map(i=>`
                            <div class="pacom-row ${i.id===W&&ge?"is-selected":""}" data-pick-dev="${p(i.id)}" style="padding:8px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${p(i.name)}</div>
                                <div class="pacom-row-sub">${p(Ve(i.logicalZoneId))} · ${i.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${i.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${i.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${ye?"crosshair":"grab"};">
          ${z?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${pe}px, ${oe}px) scale(${ne});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${p(z.plan.imageUrl)}" alt="${p(z.name)} 平面图" />
                  ${R==="zone"?K.map(i=>{const l=le[i.id];return l?`<div class="pacom-zone-hotspot is-active" style="left:${l.left}%; top:${l.top}%; width:${l.width}%; height:${l.height}%;"><span class="pacom-zone-tag">${p(i.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${F.filter(i=>i.planPoint).map(i=>`
                      <button type="button" class="pacom-pin ${i.id===W&&ge?"is-selected":""} ${i.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(i.planPoint.x*100).toFixed(2)}%; top:${(i.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${p(i.id)}" title="${p(i.name)}">
                        <span class="pacom-dot ${i.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${p(Ma(i))}</span>
                      </button>`).join("")}
                  ${R==="light_marker"||L?.category==="lighting"?P.filter(i=>F.some(l=>l.id===i.deviceId)).map(i=>`
                            <span class="dep-light-dot" style="left:${(i.x*100).toFixed(1)}%; top:${(i.y*100).toFixed(1)}%;" title="${p(i.label)}（${p(i.channel)}）">
                              ${de("sparkles",12)}<span>${p(i.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${p(k)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${j.map(i=>`
              <button type="button" class="pacom-elev-item ${i.id===k?"is-active":""}" data-scrubber-floor="${p(i.id)}" title="${p(i.name)}${i.plan?" · 已传底图":" · 待传底图"}">
                ${i.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${p(i.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${R==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${R==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${R==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${de("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(ne*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${de("plus",16)}</button>
        </div>
      </main>
    `}function ta(x){if(Y.projects.length===0)return Qe(x,"list");const j=Ee(k),z=B.trim().toLowerCase(),F=j.filter(L=>!(H==="online"&&L.connectivity!=="online"||H==="offline"&&L.connectivity!=="offline"||H==="unverified"&&L.physicalInstalled||z&&!`${L.name} ${Ve(L.logicalZoneId)} ${L.hardwareBinding?.protocol??""}`.toLowerCase().includes(z))),K=j.filter(L=>L.connectivity==="online").length;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${p(B)}" aria-label="搜索设备列表" />
          <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
            <option value="all" ${H==="all"?"selected":""}>全部状态（${j.length}）</option>
            <option value="online" ${H==="online"?"selected":""}>仅看在线（${K}）</option>
            <option value="offline" ${H==="offline"?"selected":""}>仅看离线（${j.length-K}）</option>
            <option value="unverified" ${H==="unverified"?"selected":""}>待物理复核（${j.filter(L=>!L.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${de("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-dev="1" ${x?"":"disabled"}>+ 新增设备</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-export-inv="1">导出 CSV</button>
        </div>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${F.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词、切换筛选，或点击「+ 新增设备」。</span></div></td></tr>':F.map(L=>`
                        <tr style="cursor:pointer;" data-open-dev-drawer="${p(L.id)}">
                          <td><div style="font-weight:450;">${p(L.name)}</div><div class="pacom-row-sub">${p(Ve(L.logicalZoneId))} · v${L.version}</div></td>
                          <td><span class="pacom-badge ${L.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${L.planPoint?`${Math.round(L.planPoint.x*100)}%,${Math.round(L.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${L.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${L.hardwareBinding?L.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${L.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${L.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${L.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${L.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${p(L.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-dev-params="${p(L.id)}">配置</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${p(L.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${F.length} / ${j.length} 台设备 · ${K} 在线 · ${j.length-K} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dev-subtab="marking">切换至设备标记 →</button>
        </div>
      </div>
    `}function aa(x){if(Y.projects.length===0)return Qe(x,"folder-kanban");const j=y.filter(K=>K.floorId===k||k===g.floorId&&K.floorId===g.floorId),z=j.filter(K=>K.track==="mesh_auto"),F=j.filter(K=>K.track==="cloud_biz");return`
      <div class="pacom-grid-2">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${z.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${z.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':z.map(K=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${p(K.name)} <span class="pacom-badge pacom-badge--neutral">${p(K.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${K.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${p(K.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${F.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${F.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':F.map(K=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${p(K.name)} <span class="pacom-badge pacom-badge--neutral">${p(K.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${K.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${p(K.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>
      </div>
    `}function sa(x){if(Y.projects.length===0)return Qe(x,"waypoints");const j=Ee(k),z=ce().filter(l=>l.floorId===k),F=j.filter(l=>l.category!=="hvac"&&l.category!=="meter"),K=F.filter(l=>Z.get(l.id)?.proxy).length,L=F.filter(l=>Z.get(l.id)?.relay).length,s=j.filter(l=>l.category==="gateway"),c=j.filter(l=>Z.get(l.id)?.relay||Z.get(l.id)?.proxy),i=j.filter(l=>l.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge ${qe?"pacom-badge--warning":"pacom-badge--online"}">${qe?"有变更待同步":"协同锁空闲 · 已同步"}</span>
            <span class="pacom-row-sub">Mesh 节点 ${F.length} 台 · Proxy ${K} 个 · Relay ${L} 个 · 边缘基线 v${Ue}</span>
          </div>
        </div>
        ${Xe.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${Xe.map(l=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${p(l.title)}</strong> <span class="pacom-row-sub">· ${p(l.detail)}</span></div>
                      <span class="pacom-badge ${l.level==="ok"?"pacom-badge--online":l.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${l.level==="ok"?"通过":l.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达设备标记）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${ie==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${ie==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${ie==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${s.length===0?'<div class="pacom-row-sub">本层暂未配置网关节点。</div>':s.map(l=>`
                          <button type="button" class="dep-topo-node ${l.connectivity==="offline"?"is-issue":""}" data-topo-jump="${p(l.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${p(l.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                            <span class="pacom-row-sub">${p(l.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                          </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${c.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，可在「设备管理」抽屉中为传感器开启。</div>':c.map(l=>{const U=Z.get(l.id);return`
                            <button type="button" class="dep-topo-node ${l.connectivity==="offline"?"is-issue":""}" data-topo-jump="${p(l.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${p(l.name)}</strong><span class="pacom-badge pacom-badge--accent">${U?.proxy?"Proxy":""}${U?.proxy&&U?.relay?" + ":""}${U?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${p(Ve(l.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${i.length===0?'<div class="pacom-row-sub">本层暂无末端设备。</div>':i.map(l=>`
                          <button type="button" class="dep-topo-node ${l.connectivity==="offline"?"is-issue":""}" data-topo-jump="${p(l.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${p(l.name)}</strong><span class="pacom-badge ${l.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${l.connectivity==="online"?"在线":"离线"}</span></div>
                            <span class="pacom-row-sub">${p(Ve(l.logicalZoneId))} · ${p(l.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                          </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${j.filter(l=>l.category==="sensor"||l.category==="gateway").map(l=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${p(l.id)}">
                      <strong>${p(l.name)}</strong>
                      <span class="pacom-row-sub">${l.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${j.filter(l=>l.category==="lighting"||l.category==="hvac").map(l=>`
                    <button type="button" class="dep-topo-node ${l.connectivity==="offline"?"is-issue":""}" data-topo-jump="${p(l.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${p(l.name)}</strong><span class="pacom-badge ${l.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${l.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${p(Ve(l.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${z.map(l=>{const U=j.filter(me=>me.logicalZoneId===l.id),$=U.some(me=>me.connectivity==="offline");return`
                      <div class="dep-topo-node ${$?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${p(l.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${$?"pacom-badge--warning":"pacom-badge--online"}">${U.length} 台设备</span></div>
                        <span class="pacom-row-sub">${$?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function oa(x){if(Y.projects.length===0)return Qe(x,"plug");const j=be.reduce((L,s)=>L+s.collectedPoints,0),z=be.reduce((L,s)=>L+s.calculatedPoints,0),F=be.filter(L=>L.status==="connected").length,K=be.filter(L=>L.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${F}<span class="pacom-kpi-unit">/ ${be.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${be.length?Math.round(F/be.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${j}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${z}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${K.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${K.length} 条采集通道通信降级（${K.map(L=>L.name).join("、")}）</span>
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
                ${be.map(L=>{const s=qa[L.status]??{label:L.status,cls:"pacom-badge--neutral"},c=L.status==="connected"?98:L.status==="degraded"?62:0,i=c>=75?"var(--pacom-status-online)":c>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",l=We===L.id,U=l?Ta(L,we):[];return`
                      <tr>
                        <td><strong>${p(L.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${L.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${p(L.endpoint)}</code></td>
                        <td>采集 ${L.collectedPoints} / 计算 ${L.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${s.cls}">${s.label}</span>
                            <span class="pacom-row-sub">${c}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${c}%; background:${i};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${p(L.id)}">${l?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${p(L.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${p(L.id)}" data-endpoint-val="${p(L.endpoint)}">${Ne===L.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${l?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${p(L.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${U.map($=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${p($.deviceName)}</strong> · ${p($.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${p($.value)} · ${p($.lastSeen)}</span>
                                        <span class="pacom-badge ${$.quality==="online"?"pacom-badge--online":$.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${$.quality==="online"?"在线正常":$.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function na(x){const j=[],z=Y.projects.find(L=>L.id===S)??Y.projects[0]??null,F=Y.buildings.find(L=>L.id===G)??(z?Y.buildings.find(L=>L.projectId===z.id):null)??null;if(Q&&j.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
          <form class="dep-modal-card" data-create-project="1">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建项目</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${de("x",16)}</button>
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
        </div>`),Le&&z){const s=Y.buildings.filter(c=>c.projectId===z.id).reduce((c,i)=>c+ue(i.id).reduce((l,U)=>l+Ee(U.id).length,0),0);j.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
          <form class="dep-modal-card" data-save-project="${p(z.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑项目：${p(z.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${de("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${p(z.imageUrl??"./media/gzlab.jpg")}" alt="${p(z.name)}" style="width:84px; height:54px; object-fit:cover; border-radius:6px; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">项目封面图</div>
                  <div class="pacom-row-sub">用于空间总览的园区俯瞰展示</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>更换封面</span>
                  <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${p(z.id)}" style="display:none;" ${x?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${p(z.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${p(z.city??"")}" /></label>
                <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${p(z.address??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${p(z.location?.lng??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${p(z.location?.lat??"")}" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${p(z.id)}" ${!x||s>0?`disabled title="${s>0?`包含 ${s} 台运行中设备，请先解绑后再删除`:"只读"}"`:""}>删除项目</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${x?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}$e&&z&&j.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
          <form class="dep-modal-card" data-create-bld="${p(z.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建楼宇（${p(z.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${de("x",16)}</button>
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
        </div>`);const K=re?Y.buildings.find(L=>L.id===re)??null:null;if(K){const L=ue(K.id),s=L.reduce((i,l)=>i+Ee(l.id).length,0),c=it(K);j.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
          <form class="dep-modal-card" data-save-building="${p(K.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑楼宇：${p(K.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${de("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${p(K.imageUrl??"./media/building-e.webp")}" alt="${p(K.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:6px; background:#fff; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">楼宇外观 / 白模图</div>
                  <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>替换图片</span>
                  <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${p(K.id)}" style="display:none;" ${x?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${p(K.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${p(K.areaSqm??"")}" placeholder="选填" /></label>
                <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${K.aboveFloors}" /></label>
                <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${K.belowFloors}" /></label>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                <label style="display:inline-flex; align-items:center; gap:6px; font-size:13px;"><input type="checkbox" name="bRoof" ${K.hasRoof?"checked":""} />含屋面层 (RF)</label>
                ${c.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${p(K.id)}">一键补齐缺失 ${c.length} 层</button>`:`<span class="pacom-row-sub">已配置 ${L.length} 个楼层</span>`}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${p(K.id)}" ${!x||s>0?`disabled title="${s>0?"包含运行中设备，请先解绑后再删除":"只读"}"`:""}>删除楼宇</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${x?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}if(h&&F&&j.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
          <form class="dep-modal-card" data-create-floor="${p(F.id)}" style="width:min(420px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增楼层（${p(F.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${de("x",16)}</button>
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
        </div>`),d&&F){const L=ue(F.id),s=v.filter(c=>!!c.matchedFloorId).length;j.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
          <div class="dep-modal-card dep-modal-card--wide">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">批量导入 ${p(F.name)} 平面底图</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${de("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-upload-drop" data-batch-dropzone="${p(F.id)}" style="padding:20px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${Te?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
                <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
                <span class="pacom-row-sub">自动识别 01F、首层、屋面、RF、B1 等中英文文件名，支持手动调整对应楼层</span>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; margin-top:4px;">
                  <span>选择多张图片</span>
                  <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${p(F.id)}" style="display:none;" ${x?"":"disabled"} />
                </label>
              </div>
              ${v.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                      <div class="pacom-row-sub">已选 ${v.length} 张图片，已匹配 ${s} 层：</div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:6px; max-height:220px; overflow-y:auto;">
                        ${v.map(c=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${p(c.file.name)}">${p(c.file.name)}</span>
                              <select class="pacom-select" name="overrideFloor_${p(c.id)}" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${p(c.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${L.map(i=>`<option value="${p(i.id)}" ${c.matchedFloorId===i.id?"selected":""}>${p(i.name)}</option>`).join("")}
                              </select>
                            </div>`).join("")}
                      </div>
                    </div>`:""}
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-batch-upload="1" ${v.length===0?"disabled":""}>清空已选</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">关闭</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-batch-upload="1" ${s===0?"disabled":""}>确认导入（${s} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(Fe&&F){const L=Ie().find(c=>c.id===Fe),s=ue(F.id).filter(c=>c.id!==Fe);L&&s.length>0&&j.push(`
          <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
            <div class="dep-modal-card">
              <div class="dep-modal-head">
                <strong style="font-size:15px; font-weight:500;">复用 ${p(L.name)} 功能区至其他楼层</strong>
                <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${de("x",16)}</button>
              </div>
              <div class="dep-modal-body">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <span class="pacom-row-sub">勾选目标楼层（已选 ${ze.size} 层）</span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                  </div>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${s.map(c=>{const i=ze.has(c.id),l=ce().filter(U=>U.floorId===c.id).length;return`
                        <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${i}">
                          <input type="checkbox" name="copyFloor_${p(c.id)}" data-copy-target-floor="${p(c.id)}" ${i?"checked":""} style="margin:0;" />
                          <span>${p(c.name)}${l>0?` (${l}区)`:""}</span>
                        </label>`}).join("")}
                </div>
              </div>
              <div class="dep-modal-foot">
                <span></span>
                <div style="display:flex; gap:8px;">
                  <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                  <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${p(L.id)}" ${ze.size===0?"disabled":""}>确认复制（${ze.size} 层）</button>
                </div>
              </div>
            </div>
          </div>`)}if(E){const L=ce().filter(s=>s.floorId===k);j.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
          <form class="dep-modal-card" data-create-dev="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增设备</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${de("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">设备名称</span>
                <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">设备类型</span>
                  <select class="pacom-select" name="devPreset">${$t.map(s=>`<option value="${s.key}">${s.label}</option>`).join("")}</select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">所属功能区</span>
                  <select class="pacom-select" name="devZone">
                    <option value="">暂不分配</option>
                    ${L.map(s=>`<option value="${p(s.id)}">${p(s.name)}</option>`).join("")}
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
        </div>`)}return O&&j.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建分组">
          <form class="dep-modal-card" data-create-group="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建设备分组</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${de("x",16)}</button>
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
        </div>`),ve&&j.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增接入通道">
          <form class="dep-modal-card" data-create-conn="1" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增子系统接入通道</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${de("x",16)}</button>
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
        </div>`),j.join("")}function D(){const x=o.scope.canEditDeployment,j=r==="devices"&&A==="marking",z=Gt[r],F=r==="devices"?A==="list"?"设备列表":"设备分组":z.title,K=r==="devices"?A==="list"?"核查本层四态设备清单，点击任意行配置硬件绑定、人感/光感参数或执行自检。":"管理端侧蓝牙 Mesh 自治联动组与云端业务分组。":z.subtitle;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${at({tree:Y,session:o,scope:M,maxGranularity:z.granularity,isOpen:se,searchKeyword:ae})}
            </div>
            <div class="pacom-header-meta">
              ${Yt(x)}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${Kt()}
          ${j?`<div class="pacom-unified-main--canvas">
                  ${xe?`<div class="pacom-banner pacom-banner--ok" style="margin-bottom:8px; flex-shrink:0;"><span class="pacom-banner-title">${p(xe)}</span></div>`:""}
                  ${b?`<div class="pacom-alert-banner" style="margin-bottom:8px; flex-shrink:0;">${p(b)}</div>`:""}
                  ${ea(x)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head">
                    <h2 class="pacom-unified-title">${F}</h2>
                    <p class="pacom-unified-subtitle">${K}</p>
                  </div>
                  ${xe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${p(xe)}</span></div>`:""}
                  ${b?`<div class="pacom-alert-banner">${p(b)}</div>`:""}
                  ${r==="overview"?Xt(x):r==="project_config"?Jt(x):r==="devices"?A==="list"?ta(x):aa(x):r==="network_topo"?sa(x):oa(x)}
                </div>
              </div>`}
          ${Qt(x)}
        </div>
      </div>
      ${na(x)}
      ${Me?`
          <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${p(Me.title)}">
            <div class="dep-lightbox-card">
              <div class="dep-lightbox-head">
                <strong style="font-size:14px; font-weight:500;">${p(Me.title)}</strong>
                <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${de("x",16)}</button>
              </div>
              <div class="dep-lightbox-body">
                <img src="${p(Me.imageUrl)}" alt="${p(Me.title)}" />
              </div>
            </div>
          </div>`:""}
    `,la()}function la(){ot(t,{onToggle:()=>{se=!se,D(),se&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:s=>{ae=s,D();const c=t.querySelector("[data-global-space-search]");c&&(c.focus(),c.setSelectionRange(s.length,s.length))},onPick:s=>{if(M=s,se=!1,s.level==="project"){S=s.projectId;const c=Y.buildings.find(i=>i.projectId===s.projectId);c?Ke(c.id):(G="",k="",ee=null)}else s.level==="building"?Ke(s.buildingId):s.level==="floor"&&Je(s.floorId);D()}}),t.querySelectorAll("[data-dep-nav]").forEach(s=>{s.addEventListener("click",()=>{r=s.dataset.depNav??"overview",s.dataset.devSubtabJump&&(A=s.dataset.devSubtabJump),ge=!1,ye=!1,xe="",b="",D()})}),t.querySelectorAll("[data-dev-subtab]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.devSubtab??"marking";A=c,c==="groups"&&(ge=!1,ye=!1),xe="",b="",D()})}),t.querySelectorAll("[data-drawer-tab]").forEach(s=>{s.addEventListener("click",()=>{C=s.dataset.drawerTab??"binding",D()})}),t.querySelector("[data-list-search]")?.addEventListener("input",s=>{B=s.currentTarget.value,D();const c=t.querySelector("[data-list-search]");c&&(c.focus(),c.setSelectionRange(B.length,B.length))}),t.querySelector("[data-list-filter]")?.addEventListener("change",s=>{H=s.currentTarget.value??"all",D()}),t.querySelectorAll("[data-refresh-dep]").forEach(s=>{s.addEventListener("click",()=>{Oe()})}),t.querySelectorAll("[data-matrix-nav]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.matrixFloor;c&&Je(c),r=s.dataset.matrixNav??"devices",s.dataset.matrixSub&&(A=s.dataset.matrixSub),s.dataset.matrixExpand==="1"&&c&&(ee=c),D()})}),t.querySelectorAll("[data-scrubber-floor]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.scrubberFloor;c&&(Je(c),D())})}),t.querySelectorAll("[data-close-modals]").forEach(s=>{s.addEventListener("click",()=>{q(),D()})}),t.querySelectorAll("[data-modal-scrim]").forEach(s=>{s.addEventListener("click",c=>{c.target===s&&(q(),D())})}),t.querySelectorAll("[data-open-new-proj]").forEach(s=>{s.addEventListener("click",()=>{q(),Q=!0,D()})}),t.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{q(),Le=!0,D()}),t.querySelectorAll("[data-open-new-bld]").forEach(s=>{s.addEventListener("click",()=>{q(),$e=!0,D()})}),t.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{q(),h=!0,D()}),t.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{q(),d=!0,D()}),t.querySelectorAll("[data-open-new-dev]").forEach(s=>{s.addEventListener("click",()=>{q(),E=!0,D()})}),t.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{q(),O=!0,D()}),t.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{q(),ve=!0,D()}),t.querySelectorAll("[data-select-building]").forEach(s=>{s.addEventListener("click",c=>{if(c.target?.closest("button, label, input"))return;const i=s.dataset.selectBuilding;i&&i!==G&&(Ke(i),X="all",ee=null,D())})}),t.querySelectorAll("[data-edit-building]").forEach(s=>{s.addEventListener("click",c=>{c.stopPropagation(),q(),re=s.dataset.editBuilding??null,D()})}),t.querySelectorAll("[data-toggle-expand-floor]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.toggleExpandFloor??null;ee=ee===c?null:c,ee&&Je(ee),w=null,D()})}),t.querySelectorAll("[data-jump-floor-marking]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.jumpFloorMarking;c&&Je(c),r="devices",A="marking",D()})}),t.querySelector("[data-jump-floor-config]")?.addEventListener("click",s=>{const c=s.currentTarget.dataset.jumpFloorConfig;r="project_config",c&&(ee=c),D()}),t.querySelectorAll("[data-floor-detail-tab]").forEach(s=>{s.addEventListener("click",()=>{u=s.dataset.floorDetailTab??"zones",D()})}),t.querySelectorAll("[data-floor-list-filter]").forEach(s=>{s.addEventListener("click",()=>{X=s.dataset.floorListFilter??"all",D()})}),t.querySelector("[data-create-project]")?.addEventListener("submit",async s=>{s.preventDefault();const c=new FormData(s.currentTarget),i=String(c.get("pName")??"").trim(),l=String(c.get("pCity")??"").trim(),U=String(c.get("pAddr")??"").trim(),$=String(c.get("pLng")??"").trim(),me=String(c.get("pLat")??"").trim();if(!i)return;let Ce;if($||me){const Ae=Number($),De=Number(me);if(!Number.isFinite(Ae)||!Number.isFinite(De)||Ae<-180||Ae>180||De<-90||De>90){b="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",D();return}Ce={lng:Ae,lat:De,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const Ae=await e.createProject?.({name:i,city:l,address:U,location:Ce});q(),r="project_config",Ae&&(S=Ae.id,G="",k="",ee=null,M=Ge({level:"project",projectId:Ae.id})),xe=`已创建项目「${i}」，下一步可添加园区楼宇。`,await Oe()}catch(Ae){b=Ae instanceof Error?Ae.message:String(Ae),D()}}),t.querySelector("[data-save-project]")?.addEventListener("submit",async s=>{s.preventDefault();const c=s.currentTarget,i=c.dataset.saveProject??S,l=new FormData(c),U=String(l.get("pName")??"").trim(),$=String(l.get("pCity")??"").trim(),me=String(l.get("pAddr")??"").trim(),Ce=String(l.get("pLng")??"").trim(),Ae=String(l.get("pLat")??"").trim();let De;if(Ce||Ae){const je=Number(Ce),Se=Number(Ae);if(!Number.isFinite(je)||!Number.isFinite(Se)||je<-180||je>180||Se<-90||Se>90){b="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",D();return}De={lng:je,lat:Se,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await e.updateProject?.(i,{name:U,city:$,address:me,location:De}),q(),xe=`已保存项目「${U||"当前项目"}」信息。`,await Oe()}catch(je){b=je instanceof Error?je.message:String(je),D()}}),t.querySelector("[data-upload-proj]")?.addEventListener("change",async s=>{const c=s.currentTarget,i=c.dataset.uploadProj,l=c.files?.[0];if(!(!i||!l))try{const U=await ut(l);await e.updateProject?.(i,{imageUrl:U}),xe=`已更新项目封面图（${l.name}）。`,await Oe()}catch(U){b=U instanceof Error?U.message:String(U),D()}}),t.querySelector("[data-delete-proj]")?.addEventListener("click",async s=>{const c=s.currentTarget.dataset.deleteProj,i=Y.projects.find(l=>l.id===c);if(!(!c||!i)&&window.confirm(`确认删除项目「${i.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await e.deleteProject?.(c),q(),xe=`已删除项目「${i.name}」。`,await Oe()}catch(l){b=l instanceof Error?l.message:String(l),D()}}),t.querySelector("[data-create-bld]")?.addEventListener("submit",async s=>{s.preventDefault();const c=s.currentTarget,i=c.dataset.createBld??S,l=new FormData(c),U=String(l.get("bName")??"").trim(),$=String(l.get("bArea")??"").trim(),me=Math.max(1,Number(l.get("bAbove")??12)),Ce=Math.max(0,Number(l.get("bBelow")??0)),Ae=!!l.get("bRoof"),De=!!l.get("bAutoFloors");if(U)try{const je=await e.upsertBuilding?.({projectId:i,name:U,aboveFloors:me,belowFloors:Ce,hasRoof:Ae,areaSqm:$?Number($):null});q();let Se=0;if(je&&(G=je.id,De)){for(let Re=1;Re<=me;Re+=1)await e.upsertFloor?.({buildingId:je.id,kind:"above",level:Re,name:`${Re}F`}),Se+=1;for(let Re=1;Re<=Ce;Re+=1)await e.upsertFloor?.({buildingId:je.id,kind:"below",level:-Re,name:`B${Re}`}),Se+=1;Ae&&(await e.upsertFloor?.({buildingId:je.id,kind:"roof",level:99,name:"RF"}),Se+=1)}xe=De?`已创建楼宇「${U}」并自动生成 ${Se} 个楼层。`:`已创建楼宇「${U}」。`,await Oe()}catch(je){b=je instanceof Error?je.message:String(je),D()}}),t.querySelector("[data-save-building]")?.addEventListener("submit",async s=>{s.preventDefault();const c=s.currentTarget,i=c.dataset.saveBuilding,l=Y.buildings.find(je=>je.id===i);if(!l)return;const U=new FormData(c),$=String(U.get("bName")??"").trim()||l.name,me=String(U.get("bArea")??"").trim(),Ce=Math.max(1,Number(U.get("bAbove")??l.aboveFloors)),Ae=Math.max(0,Number(U.get("bBelow")??l.belowFloors)),De=!!U.get("bRoof");try{await e.upsertBuilding?.({id:i,projectId:l.projectId,name:$,aboveFloors:Ce,belowFloors:Ae,hasRoof:De,areaSqm:me?Number(me):null}),q(),xe=`已保存楼宇「${$}」参数。`,await Oe()}catch(je){b=je instanceof Error?je.message:String(je),D()}}),t.querySelector("[data-delete-building]")?.addEventListener("click",async s=>{const c=s.currentTarget.dataset.deleteBuilding,i=Y.buildings.find(l=>l.id===c);if(!(!c||!i)&&window.confirm(`确认删除楼宇「${i.name}」及其下全部楼层与功能区？`))try{await e.deleteBuilding?.(c),q(),xe=`已删除楼宇「${i.name}」。`,await Oe()}catch(l){b=l instanceof Error?l.message:String(l),D()}}),t.querySelector("[data-upload-bld]")?.addEventListener("change",async s=>{const c=s.currentTarget,i=c.dataset.uploadBld,l=c.files?.[0],U=Y.buildings.find($=>$.id===i);if(!(!i||!l||!U))try{const $=await ut(l);await e.upsertBuilding?.({id:U.id,projectId:U.projectId,name:U.name,aboveFloors:U.aboveFloors,belowFloors:U.belowFloors,hasRoof:U.hasRoof,areaSqm:U.areaSqm,imageUrl:$}),xe=`已更新「${U.name}」外观图（${l.name}）。`,await Oe()}catch($){b=$ instanceof Error?$.message:String($),D()}}),t.querySelectorAll("[data-fill-missing-floors]").forEach(s=>{s.addEventListener("click",async c=>{c.stopPropagation();const i=s.dataset.fillMissingFloors;if(i)try{const l=await Wt(i);xe=l>0?`已自动补齐 ${l} 个楼层。`:"当前楼宇楼层已完整。",await Oe()}catch(l){b=l instanceof Error?l.message:String(l),D()}})}),t.querySelector("[data-create-floor]")?.addEventListener("submit",async s=>{s.preventDefault();const c=s.currentTarget,i=c.dataset.createFloor,l=new FormData(c),U=String(l.get("fName")??"").trim().toUpperCase(),$=String(l.get("fArea")??"").trim();if(!U)return;const me=tt(U)??U;if(ue(i).some(Se=>(tt(Se.name)??Se.name.toUpperCase())===me)){b=`楼层「${U}」已存在，请使用其他名称。`,D();return}const Ae=pt(U),De=Ae>=999?"roof":Ae<0?"below":"above",je=Ae>=999?99:Ae||1;try{const Se=await e.upsertFloor?.({buildingId:i,kind:De,level:je,name:U,areaSqm:$?Number($):null});q(),Se&&(k=Se.id,ee=Se.id),xe=`已新增楼层「${U}」。`,await Oe()}catch(Se){b=Se instanceof Error?Se.message:String(Se),D()}}),t.querySelector("[data-save-floor]")?.addEventListener("submit",async s=>{s.preventDefault();const c=s.currentTarget,i=c.dataset.saveFloor,l=Ie().find(Re=>Re.id===i);if(!l)return;const U=new FormData(c),$=String(U.get("fName")??"").trim()||l.name,me=String(U.get("fArea")??"").trim(),Ce=tt($)??$.toUpperCase();if(ue(l.buildingId).some(Re=>Re.id!==l.id&&(tt(Re.name)??Re.name.toUpperCase())===Ce)){b=`楼层「${$}」已存在，请避免重复命名。`,D();return}const De=pt($),je=De>=999?"roof":De<0?"below":"above",Se=De>=999?99:De||l.level;try{await e.upsertFloor?.({id:l.id,buildingId:l.buildingId,kind:je,level:Se,name:$,areaSqm:me?Number(me):null}),xe=`已保存楼层「${$}」。`,await Oe()}catch(Re){b=Re instanceof Error?Re.message:String(Re),D()}}),t.querySelector("[data-delete-floor]")?.addEventListener("click",async s=>{const c=s.currentTarget.dataset.deleteFloor,i=Ie().find(l=>l.id===c);if(!(!c||!i)){if(Ee(c).length>0){b=`楼层「${i.name}」已关联设备，请先解绑后再删除。`,D();return}if(window.confirm(`确认删除楼层「${i.name}」及其功能区？`))try{await e.deleteFloor?.(c),ee=null,xe=`已删除楼层「${i.name}」。`,await Oe()}catch(l){b=l instanceof Error?l.message:String(l),D()}}});async function x(s,c){const i=Ie().find(l=>l.id===s);if(i)try{const l=await ut(c);await e.upsertFloor?.({id:i.id,buildingId:i.buildingId,kind:i.kind,level:i.level,name:i.name,areaSqm:i.areaSqm,planImageUrl:l}),xe=`已更新「${i.name}」平面底图（${c.name}）。`,await Oe()}catch(l){b=l instanceof Error?l.message:String(l),D()}}t.querySelectorAll("[data-upload-floor]").forEach(s=>{s.addEventListener("change",()=>{const c=s.dataset.uploadFloor,i=s.files?.[0];c&&i&&x(c,i)})});const j=t.querySelector("[data-single-floor-drop]");j&&o.scope.canEditDeployment&&(j.addEventListener("dragover",s=>{s.preventDefault(),j.style.borderColor="var(--pacom-accent-solid)"}),j.addEventListener("dragleave",()=>{j.style.borderColor=""}),j.addEventListener("drop",s=>{s.preventDefault(),j.style.borderColor="";const c=j.dataset.singleFloorDrop,i=Array.from(s.dataTransfer?.files??[]).find(l=>l.type.startsWith("image/"));c&&i&&x(c,i)})),t.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async s=>{const c=s.currentTarget.dataset.clearFloorPlan,i=Ie().find(l=>l.id===c);if(!(!c||!i)&&window.confirm(`确认清空「${i.name}」的平面底图？`))try{await e.upsertFloor?.({id:i.id,buildingId:i.buildingId,kind:i.kind,level:i.level,name:i.name,areaSqm:i.areaSqm,planImageUrl:null}),xe=`已清空「${i.name}」平面底图。`,await Oe()}catch(l){b=l instanceof Error?l.message:String(l),D()}}),t.querySelectorAll("[data-open-lightbox]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.lbTitle??"平面底图预览",i=s.dataset.lbSrc??"";i&&(Me={title:c,imageUrl:i},D())})}),t.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{Me=null,D()}),t.querySelector("[data-lightbox-scrim]")?.addEventListener("click",s=>{s.target===s.currentTarget&&(Me=null,D())});function z(s,c){if(!s||c.length===0)return;const i=ue(s),l=new Map;i.forEach(U=>{const $=tt(U.name)??U.name.toUpperCase();l.set($,U)}),v=c.map((U,$)=>{const me=tt(U.name),Ce=me?l.get(me):void 0;return{id:`bu-${Date.now().toString(36)}-${$}`,file:U,matchedFloorId:Ce?.id??null}}),d=!0,D()}t.querySelector("[data-batch-upload-floors]")?.addEventListener("change",s=>{const c=s.currentTarget;z(c.dataset.batchUploadFloors??"",Array.from(c.files??[]))});const F=t.querySelector("[data-batch-dropzone]");F&&o.scope.canEditDeployment&&(F.addEventListener("dragover",s=>{s.preventDefault(),Te||(Te=!0,F.style.borderColor="var(--pacom-accent-solid)",F.style.background="var(--pacom-accent-soft)")}),F.addEventListener("dragleave",()=>{Te=!1,F.style.borderColor="",F.style.background=""}),F.addEventListener("drop",s=>{s.preventDefault(),Te=!1;const c=Array.from(s.dataTransfer?.files??[]).filter(i=>i.type.startsWith("image/"));z(F.dataset.batchDropzone??"",c)})),t.querySelectorAll("[data-batch-override-floor]").forEach(s=>{s.addEventListener("change",()=>{const c=v.find(i=>i.id===s.dataset.batchOverrideFloor);c&&(c.matchedFloorId=s.value||null,D())})}),t.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{v=[],D()}),t.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const s=v.filter(i=>i.matchedFloorId),c=v.length-s.length;if(s.length!==0)try{for(const i of s){const l=Ie().find($=>$.id===i.matchedFloorId);if(!l)continue;const U=await ut(i.file);await e.upsertFloor?.({id:l.id,buildingId:l.buildingId,kind:l.kind,level:l.level,name:l.name,areaSqm:l.areaSqm,planImageUrl:U})}v=[],q(),xe=`已批量导入 ${s.length} 个楼层平面底图${c>0?`（跳过 ${c} 张未分配文件）`:""}。`,await Oe()}catch(i){b=i instanceof Error?i.message:String(i),D()}}),t.querySelectorAll("[data-apply-zone-tpl]").forEach(s=>{s.addEventListener("click",async()=>{const c=qt.find(l=>l.key===s.dataset.applyZoneTpl),i=Ie().find(l=>l.id===s.dataset.tplFloor);if(!(!c||!i))try{for(const l of c.items){const U=await e.upsertZone?.({floorId:i.id,name:`${i.name} ${l.suffix}`,category:l.category});U&&(le[U.id]={left:20,top:20,width:24,height:24})}xe=`已按「${c.label}」模板为 ${i.name} 创建 ${c.items.length} 个功能区。`,await Oe()}catch(l){b=l instanceof Error?l.message:String(l),D()}})}),t.querySelector("[data-attach-doc]")?.addEventListener("change",s=>{const c=s.currentTarget,i=c.dataset.attachDoc,l=c.files?.[0],U=Ie().find(me=>me.id===i);if(!i||!l||!U)return;const $=l.size>=1024*1024?`${(l.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(l.size/1024))} KB`;m.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:i,name:l.name,category:l.name.toLowerCase().endsWith(".xlsx")||l.name.toLowerCase().endsWith(".xls")?"点位清单":"竣工图纸",boundScope:`${U.name} · 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:$}),xe=`已为 ${U.name} 关联文档「${l.name}」。`,D()}),t.querySelector("[data-add-zone]")?.addEventListener("submit",async s=>{s.preventDefault();const c=s.currentTarget.dataset.addZone,i=new FormData(s.currentTarget),l=String(i.get("zoneName")??"").trim(),U=String(i.get("zoneCat")??"office");if(l)try{const $=await e.upsertZone?.({floorId:c,name:l,category:U});$&&(le[$.id]={left:20,top:20,width:24,height:24}),xe=`已添加功能区「${l}」。`,await Oe()}catch($){b=$ instanceof Error?$.message:String($),D()}}),t.querySelectorAll("[data-edit-zone]").forEach(s=>{s.addEventListener("click",()=>{w=s.dataset.editZone??null,D()})}),t.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{w=null,D()}),t.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async s=>{s.preventDefault();const c=s.currentTarget,i=new FormData(c),l=String(i.get("zName")??"").trim(),U=String(i.get("zCat")??"office");if(l)try{await e.upsertZone?.({id:c.dataset.saveEditZone,floorId:c.dataset.zoneFloor,name:l,category:U}),w=null,xe=`已更新功能区「${l}」。`,await Oe()}catch($){b=$ instanceof Error?$.message:String($),D()}}),t.querySelectorAll("[data-del-zone]").forEach(s=>{s.addEventListener("click",async()=>{const c=s.dataset.delZone,i=ce().find(l=>l.id===c);if(!(!c||!i)&&window.confirm(`确认删除功能区「${i.name}」？`))try{await e.deleteZone?.(c),w===c&&(w=null),xe=`已删除功能区「${i.name}」。`,await Oe()}catch(l){b=l instanceof Error?l.message:String(l),D()}})}),t.querySelectorAll("[data-open-copy-zones]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.openCopyZones??null;q(),Fe=c,ze=new Set(ue(G).filter(i=>i.id!==c&&i.kind==="above"&&ce().filter(l=>l.floorId===i.id).length===0).map(i=>i.id)),D()})}),t.querySelectorAll("[data-copy-preset]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.copyPreset,i=ue(G).filter(l=>l.id!==Fe);c==="empty"?ze=new Set(i.filter(l=>l.kind==="above"&&ce().filter(U=>U.floorId===l.id).length===0).map(l=>l.id)):c==="above"?ze=new Set(i.filter(l=>l.kind==="above").map(l=>l.id)):ze.clear(),D()})}),t.querySelectorAll("[data-copy-target-floor]").forEach(s=>{s.addEventListener("change",()=>{const c=s.dataset.copyTargetFloor;c&&(s.checked?ze.add(c):ze.delete(c),D())})}),t.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async s=>{const c=s.currentTarget.dataset.confirmCopyZones,i=Array.from(ze);if(!(!c||i.length===0))try{const l=await e.copyZonesToFloors?.(c,i)??0;q(),ze.clear(),xe=`已将当前层功能区复用至 ${i.length} 个目标楼层（共新增 ${l} 个功能区）。`,await Oe()}catch(l){b=l instanceof Error?l.message:String(l),D()}});const K=t.querySelector("[data-dep-canvas-search]");K?.addEventListener("focus",()=>{J||(J=!0,D(),t.querySelector("[data-dep-canvas-search]")?.focus())}),K?.addEventListener("input",s=>{N=s.currentTarget.value,J=!0,D();const c=t.querySelector("[data-dep-canvas-search]");c&&(c.focus(),c.setSelectionRange(N.length,N.length))}),t.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{J=!J,D()}),t.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{J=!1,D()}),t.querySelectorAll("[data-brush]").forEach(s=>{s.addEventListener("click",()=>{R=s.dataset.brush??"device",D()})}),t.querySelectorAll("[data-dep-zoom]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.depZoom;c==="in"?ne=Math.min(2.6,Number((ne+.2).toFixed(2))):c==="out"?ne=Math.max(.6,Number((ne-.2).toFixed(2))):(ne=1,pe=0,oe=0),lt()})});const L=t.querySelector('[data-role="dep-stage"]');if(L&&!ye){let s=!1,c=0,i=0,l=0,U=0;L.addEventListener("pointerdown",me=>{me.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(s=!0,c=me.clientX,i=me.clientY,l=pe,U=oe,L.classList.add("is-panning"),L.setPointerCapture?.(me.pointerId))}),L.addEventListener("pointermove",me=>{s&&(pe=l+(me.clientX-c),oe=U+(me.clientY-i),lt())});const $=()=>{s&&(s=!1,L.classList.remove("is-panning"))};L.addEventListener("pointerup",$),L.addEventListener("pointercancel",$),L.addEventListener("wheel",me=>{me.preventDefault();const Ce=me.deltaY<0?.12:-.12;ne=Math.max(.6,Math.min(2.6,Number((ne+Ce).toFixed(2)))),lt()},{passive:!1}),L.addEventListener("dblclick",me=>{me.target?.closest("button")||(ne=1,pe=0,oe=0,lt())})}t.querySelectorAll("[data-dev-filter]").forEach(s=>{s.addEventListener("click",()=>{T=s.dataset.devFilter??"all",D()})}),t.querySelector("[data-create-dev]")?.addEventListener("submit",s=>{s.preventDefault();const c=new FormData(s.currentTarget),i=String(c.get("devName")??"").trim(),l=String(c.get("devPreset")??"sensor"),U=String(c.get("devZone")??"")||null,$=$t.find(Ce=>Ce.key===l)??$t[0],me=`dev-custom-${Date.now().toString(36)}`;f.push({id:me,name:i,category:$.category,projectId:S||g.projectId,buildingId:G,floorId:k,logicalZoneId:U,planPoint:{floorId:k,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),Z.set(me,{proxy:$.defaultProxy,relay:$.defaultRelay,meshUuid:`mesh-${k.slice(-4)}`}),$.category==="lighting"&&P.push({id:`lm-${Date.now().toString(36)}`,deviceId:me,channel:"回路 1",label:`${i.slice(0,6)}主灯`,x:.52,y:.45}),q(),W=me,ge=!0,C="binding",qe=!0,xe=`已新增「${i}」（${$.hint}），已生成默认标记并提示待同步边缘。`,D()}),t.querySelectorAll("[data-pick-dev]").forEach(s=>{s.addEventListener("click",c=>{c.stopPropagation(),W=s.dataset.pickDev??null,ge=!0,C="binding",he=Ee(k).find(l=>l.id===W)?.physicalInstalled??!1,D()})}),t.querySelectorAll("[data-open-dev-drawer]").forEach(s=>{s.addEventListener("click",c=>{if(c.target?.closest("button"))return;W=s.dataset.openDevDrawer??null,ge=!0,C="binding",he=Ee(k).find(l=>l.id===W)?.physicalInstalled??!1,D()})}),t.querySelectorAll("[data-open-dev-params]").forEach(s=>{s.addEventListener("click",c=>{c.stopPropagation(),W=s.dataset.openDevParams??null,ge=!0,C="params",he=Ee(k).find(l=>l.id===W)?.physicalInstalled??!1,D()})}),t.querySelector("[data-close-sel]")?.addEventListener("click",()=>{ge=!1,ye=!1,D()}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{A!=="marking"?(A="marking",ye=!0):ye=!ye,D()}),t.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{he=!he,D()}),t.querySelectorAll("[data-ping-dev]").forEach(s=>{s.addEventListener("click",c=>{c.stopPropagation();const i=Ee(k).find(l=>l.id===s.dataset.pingDev);i&&(xe=`已向「${i.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,D())})}),t.querySelector("[data-add-light-marker]")?.addEventListener("click",s=>{const c=s.currentTarget.dataset.addLightMarker,i=P.filter(l=>l.deviceId===c).length+1;P.push({id:`lm-${Date.now().toString(36)}`,deviceId:c,channel:`回路 ${i}`,label:`照明点位 ${i}`,x:Math.min(.86,.35+i*.1),y:.42}),R="light_marker",xe=`已新增「回路 ${i}」可视化灯点。`,D()}),t.querySelectorAll("[data-del-light-marker]").forEach(s=>{s.addEventListener("click",()=>{const c=P.findIndex(i=>i.id===s.dataset.delLightMarker);c>=0&&P.splice(c,1),D()})}),t.querySelectorAll("[data-toggle-mesh-role]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.meshDev,i=s.dataset.toggleMeshRole,l=Z.get(c)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};l[i]=!l[i],Z.set(c,l),qe=!0,xe=`已更新节点 ${i.toUpperCase()} 状态，可在「网络拓扑」中一键同步至边缘网关。`,D()})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async s=>{const c=Ee(k).find($=>$.id===W);if(!ye||!c)return;const i=s.currentTarget.getBoundingClientRect(),l=Math.max(.02,Math.min(.98,(s.clientX-i.left)/i.width)),U=Math.max(.02,Math.min(.98,(s.clientY-i.top)/i.height));if(f.some($=>$.id===c.id)){c.planPoint={floorId:k,planVersion:1,x:Number(l.toFixed(4)),y:Number(U.toFixed(4))},ye=!1,xe=`已更新「${c.name}」图上坐标。`,D();return}try{await e.updateDevicePlanPoint({deviceId:c.id,floorId:g.floorId,planVersion:c.planPoint?.planVersion??1,x:l,y:U,expectedVersion:c.version}),ye=!1,xe=`已更新「${c.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await Oe()}catch($){b=$ instanceof Error?$.message:String($),D()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async s=>{s.preventDefault();const c=Ee(k).find(l=>l.id===W);if(!c)return;const i=new FormData(s.currentTarget);if(f.some(l=>l.id===c.id)){c.physicalInstalled=he,c.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(i.get("protocol")),networkAddress:String(i.get("networkAddress")??""),portOrChannel:String(i.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:o.displayName},c.version+=1,qe=!0,xe=`已保存「${c.name}」的硬件绑定与物理复核状态。`,D();return}try{await e.updateDeviceHardwareBinding({deviceId:c.id,gatewayId:c.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(i.get("protocol")),networkAddress:String(i.get("networkAddress")??""),portOrChannel:String(i.get("portOrChannel")??""),physicalInstalled:he,expectedVersion:c.version}),qe=!0,xe=`已保存「${c.name}」的硬件绑定与物理安装复核状态。`,await Oe()}catch(l){b=l instanceof Error?l.message:String(l),D()}}),t.querySelector("[data-save-dev-params]")?.addEventListener("submit",s=>{s.preventDefault();const c=s.currentTarget.dataset.saveDevParams,i=new FormData(s.currentTarget);I.set(c,{offDelayMin:Number(i.get("offDelayMin")??15),restoreMin:Number(i.get("restoreMin")??30),luxOn:Number(i.get("luxOn")??280),luxOff:Number(i.get("luxOff")??450)}),qe=!0,xe="设备自治延时与光感门限参数已下发并同步至配置基线。",D()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const s=Ee(k).find(c=>c.id===W);s&&kt(s)}),t.querySelectorAll("[data-ftt-dev]").forEach(s=>{s.addEventListener("click",c=>{c.stopPropagation();const i=Ee(k).find(l=>l.id===s.dataset.fttDev);i&&kt(i)})}),t.querySelectorAll("[data-batch-ftt]").forEach(s=>{s.addEventListener("click",()=>Vt())}),t.querySelectorAll("[data-export-inv]").forEach(s=>{s.addEventListener("click",()=>Ht())}),t.querySelector("[data-create-group]")?.addEventListener("submit",s=>{s.preventDefault();const c=new FormData(s.currentTarget),i=String(c.get("gName")??"").trim(),l=c.get("gTrack")??"mesh_auto",U=String(c.get("gType")??"灯光联动组");i&&(y.unshift({id:`grp-${Date.now().toString(36)}`,track:l,groupType:U,name:i,floorId:k,includesAdapter:l==="mesh_auto",deviceIds:l==="mesh_auto"?["dev-e7f-gw-01"]:[]}),q(),l==="mesh_auto"&&(qe=!0),xe=`已新建${l==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${i}」。`,D())}),t.querySelectorAll("[data-test-group]").forEach(s=>{s.addEventListener("click",()=>{const c=y.find(i=>i.id===s.dataset.testGroup);c&&(xe=`已向分组「${c.name}」发送群组试控指令，${c.deviceIds.length} 台成员回读正常。`,D())})}),t.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>Zt()),t.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{Ue+=1,qe=!1,xe=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${Ue}）。`,D()}),t.querySelectorAll("[data-topo-mode]").forEach(s=>{s.addEventListener("click",()=>{ie=s.dataset.topoMode??"mesh",D()})}),t.querySelectorAll("[data-topo-jump]").forEach(s=>{s.addEventListener("click",()=>{W=s.dataset.topoJump??null,ge=!0,C="binding",r="devices",A="marking",D()})}),t.querySelector("[data-create-conn]")?.addEventListener("submit",s=>{s.preventDefault();const c=new FormData(s.currentTarget),i=String(c.get("cName")??"").trim(),l=String(c.get("cProto")??"bacnet_ip"),U=String(c.get("cEndpoint")??"").trim();if(be.some($=>$.endpoint===U)){b=`端口冲突警告：局域网端点「${U}」已被其他通道占用，请更换端口后重试。`,D();return}be.unshift({id:`conn-${Date.now().toString(36)}`,projectId:S||g.projectId,buildingId:G,floorId:k,name:i,protocol:l,endpoint:U,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),q(),b="",xe=`已接入「${i}」（${U}），连通测试通过（18 ms）。`,D()}),t.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{xe="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",D()}),t.querySelectorAll("[data-expand-conn]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.expandConn??null;We=We===c?null:c,D()})}),t.querySelectorAll("[data-ping-conn]").forEach(s=>{s.addEventListener("click",()=>{const c=be.find(i=>i.id===s.dataset.pingConn);c&&(b="",c.status==="connected"?xe=`连通测试通过：「${c.name}」（${c.endpoint}）响应正常，延迟 18 ms。`:b=`连通测试异常：「${c.name}」（${c.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,D())})}),t.querySelectorAll("[data-copy-endpoint]").forEach(s=>{s.addEventListener("click",async()=>{const c=s.dataset.endpointVal??"",i=s.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(c),Ne=i,D(),window.setTimeout(()=>{Ne=null,D()},1600)}catch{}})}),t.querySelectorAll("[data-preview-doc]").forEach(s=>{s.addEventListener("click",()=>{const c=[...Ct,...m].find(i=>i.id===s.dataset.previewDoc);c&&(xe=`已调阅工程附件「${c.name}」（关联范围：${c.boundScope}，更新于 ${c.updatedAt}）。`,D())})}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const s=await e.freezeDeliveryBatch(g.floorId,"部署总览验收发起交付冻结");xe=`已生成交付冻结快照 ${s.versionTag}（核验 ${s.verifiedCount}/${s.deviceCount}）。`,await Oe()}catch(s){b=s instanceof Error?s.message:String(s),D()}})}await Oe()}function Dt(t){if(t.connectivity==="offline")return`${t.name.includes("VAV")?"VAV-02":t.name.slice(0,6)} 离线`;if(t.category==="lighting"){const e=t.name.includes("702")?"702 照明":"主照明",o=Number(t.telemetry.dimming?.value??0);return o>0?`${e} ${o}%`:`${e} 关`}return t.category==="hvac"?`${t.name.includes("VAV")?"VAV-02":"FCU-01"} ${t.telemetry.setpoint?.value??24}°C`:t.category==="sensor"?`环境 ${t.telemetry.temp?.value??"23.4"}°C`:t.category==="gateway"?"主控网关":t.name.slice(0,6)}const Mt={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},Ra={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},Pa=de("chevron-down",12),Na={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function V(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Tt(t){const e=t.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面"))return 999;const o=e.match(/(-?\d+)/);if(!o)return 0;const a=Number(o[1]);return e.startsWith("B")?-Math.abs(a):a}async function Ba(t,e,o){const a=await e.getSpatialTree();e.mode;const n=o.scope.canControlDevices,r=o.scope.canManageAlarms,A=o.scope.allowedZoneIds?.length?o.scope.allowedZoneIds:null,C=a.floors.filter(b=>o.scope.allowedFloorIds.includes(b.id)),B=A||a.projects.length<=1&&a.buildings.length<=1&&C.length<=1?"floors-only":a.projects.length>1?"multi-project":a.buildings.length>1?"single-project-multi-building":"single-building",H=B==="multi-project",M=B==="multi-project"||B==="single-project-multi-building",se=B!=="floors-only",ae=B==="floors-only"&&C.length<=1;let R=st(),T="devices",N=!1,J=!1,ge="",ie="",ne="all",pe="all";const oe=new URLSearchParams(window.location.hash.split("?")[1]??""),Y=oe.get("device"),we=oe.get("zone");let be=Y,_=!!Y,le="control",f="",S=!1,G="today",k="devices";const ee=new Set,X=new Set;let u=[],Q=[],Le=[],$e=null,re=null,h=1,d=0,E=0,O=null;function ve(){return a.zones.filter(b=>!(R.level==="floor"&&b.floorId!==R.floorId||A&&!A.includes(b.id)))}function Fe(b){return[...a.floors.filter(P=>P.buildingId!==b?!1:B==="floors-only"?o.scope.allowedFloorIds.includes(P.id):!0)].sort((P,y)=>Tt(y.name)-Tt(P.name))}async function ze(b,Z=!1){if(a.projects.length===0){R={level:"all-projects"},Ge(R),u=[],Q=[],Le=[],ke();return}let P=b;P.level==="all-projects"&&!H&&(P={level:"project",projectId:a.projects[0]?.id??g.projectId}),P.level==="project"&&!M&&(P={level:"building",projectId:P.projectId,buildingId:a.buildings[0]?.id??g.buildingId}),P.level==="building"&&!se&&(P={level:"floor",projectId:P.projectId,buildingId:P.buildingId,floorId:C[0]?.id??g.floorId}),R=P,Ge(P),re=null,pe=Z&&we?we:"all",S=!1,J=!1,N=!1,X.clear(),h=1,d=0,E=0,O&&(O(),O=null);const y=R.level==="floor"?R.floorId:g.floorId;if(R.level==="floor")try{const[I,q,fe]=await Promise.all([e.getFloorDevices(R.floorId),e.listAlarms(R.floorId),e.listWorkOrders(R.floorId)]);u=I,Q=q,Le=fe,u.some(te=>te.id===be)?Z&&Y&&(_=!0):(be=u[1]?.id??u[0]?.id??null,_=!1),O=e.subscribeFloorEvents(R.floorId,async te=>{te.type==="control.receipt.updated"&&$e?.batchId===te.batchId&&($e=await e.getControlBatch(te.batchId)),(te.type==="telemetry.updated"||te.type==="device.connectivity")&&R.level==="floor"&&(u=await e.getFloorDevices(R.floorId)),te.type==="alarm.changed"&&R.level==="floor"&&(Q=await e.listAlarms(R.floorId)),m()})}catch(I){u=[],Q=[],Le=[],be=null,_=!1,re=I instanceof Error?I.message:String(I)}else{_=!1;const[I,q,fe]=await Promise.all([e.getFloorDevices(y).catch(()=>[]),e.listAlarms(y).catch(()=>[]),e.listWorkOrders(y).catch(()=>[])]);u=I,Q=q,Le=fe}ke()}function Me(b){return b?a.zones.find(Z=>Z.id===b)?.name??b:"未分配逻辑区"}function Te(){const b=ie.trim().toLowerCase();return u.filter(Z=>pe!=="all"&&Z.logicalZoneId!==pe||ne!=="all"&&Z.category!==ne?!1:b?Z.name.toLowerCase().includes(b)||Z.id.toLowerCase().includes(b)||Me(Z.logicalZoneId).toLowerCase().includes(b):!0)}async function v(b,Z,P){!b.length||R.level!=="floor"||!n||(b.forEach(y=>ee.add(y)),$e=await e.dispatchControlBatch({floorId:R.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:b.map(y=>({deviceId:y,command:Z,targetValue:P}))}),m())}function m(){const b=document.activeElement,Z=b?.dataset?.role,P=b&&"selectionStart"in b?b.selectionStart:null,y=b&&"selectionEnd"in b?b.selectionEnd:null,I=t.querySelector(".pacom-list")?.scrollTop??0;ke();const q=t.querySelector(".pacom-list");if(q&&(q.scrollTop=I),Z==="search"||Z==="space-search"){const fe=t.querySelector(`[data-role="${Z}"]`);fe&&(fe.focus(),P!==null&&y!==null&&fe.setSelectionRange(P,y))}}function w(){const b=t.querySelector('[data-role="canvas-viewport"]');b&&(b.style.transform=`translate(${d}px, ${E}px) scale(${h})`);const Z=t.querySelector('[data-role="zoom-label"]');Z&&(Z.textContent=`${Math.round(h*100)}%`)}function W(b){if(b==="all")return{level:"all-projects"};const Z=b.split(":");return Z[0]==="project"&&Z[1]?{level:"project",projectId:Z[1]}:Z[0]==="building"&&Z[1]&&Z[2]?{level:"building",projectId:Z[1],buildingId:Z[2]}:Z[0]==="floor"&&Z[1]&&Z[2]&&Z[3]?{level:"floor",projectId:Z[1],buildingId:Z[2],floorId:Z[3]}:{level:"all-projects"}}function he(b){const Z=R;if(Z.level==="all-projects"){const P=ie.trim().toLowerCase(),y=a.projects.filter(I=>!P||I.name.toLowerCase().includes(P));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${y.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${de("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${y.map(I=>{const q=a.buildings.filter(fe=>fe.projectId===I.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${V(I.id)}">
                  <div>
                    <div class="pacom-row-title">${V(I.name)}</div>
                    <div class="pacom-row-sub">${V(I.city??"")} · ${q} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(Z.level==="project"){const P=ie.trim().toLowerCase(),y=a.buildings.filter(fe=>fe.projectId===Z.projectId&&(!P||fe.name.toLowerCase().includes(P))),I=u.filter(fe=>fe.connectivity==="online").length,q=u.length?Math.round(I/u.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${y.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${de("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${y.map(fe=>{const te=fe.id===g.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${V(fe.projectId)}:${V(fe.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${te&&b>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${V(fe.name)}</div>
                      <div class="pacom-row-sub">地上 ${fe.aboveFloors} 层 · ${fe.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${te?"pacom-badge--accent":"pacom-badge--neutral"}">${te?`在线 ${q}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(Z.level==="building"){const P=ie.trim().toLowerCase(),y=Fe(Z.buildingId).filter(q=>!P||q.name.toLowerCase().includes(P)),I=a.buildings.find(q=>q.id===Z.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${V(I?.name??"楼宇")} 楼层导览（${y.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${de("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${y.map(q=>{const fe=o.scope.allowedFloorIds.includes(q.id),te=q.id===g.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${fe?"":"opacity:0.6;"}" data-nav-scope="floor:${V(Z.projectId)}:${V(Z.buildingId)}:${V(q.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${te&&b>0?"pacom-dot--warning":q.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${V(I?.name??"")} ${V(q.name)}</div>
                      <div class="pacom-row-sub">${q.plan?"2D 平面控图就绪":"暂未上传平面图"}${te&&b>0?` · ${b} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${fe&&q.plan?"pacom-badge--online":"pacom-badge--neutral"}">${fe?q.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(T==="devices"){const P=Te(),y=ve(),I=Array.from(X);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${A?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${A.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${ne==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${ne==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${ne==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${ne==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${ne==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${P.length} 台${n&&I.length?` · 已选 ${I.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${de("x",14)}</button>
          </div>
          ${y.length>0&&!re?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${pe==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${y.map(q=>`<button type="button" class="pacom-zone-pill ${pe===q.id?"is-active":""}" data-filter-zone="${V(q.id)}">${V(q.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${re?`<div class="pacom-alert-banner">${V(re)}</div>`:P.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':P.map(q=>{const fe=q.id===be&&_,te=X.has(q.id),Ie=q.connectivity==="offline",ue=Ie?"pacom-dot--critical":"pacom-dot--online",ce=Ie?"离线":q.category==="lighting"?`${q.telemetry.dimming?.value??"--"}%`:q.category==="hvac"?`${q.telemetry.setpoint?.value??"--"}°C`:q.category==="sensor"?`${q.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${fe?"is-selected":""}" data-select-device="${V(q.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${n?`<input type="checkbox" name="devCheck-${V(q.id)}" data-check-device="${V(q.id)}" ${te?"checked":""} style="margin-top:3px;" aria-label="勾选 ${V(q.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${V(q.name)}</div>
                              <div class="pacom-row-sub">${V(Me(q.logicalZoneId).replace(/^7F\s*/,""))} · ${V(Mt[q.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${Ie?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${ue}"></span>${V(ce)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${n&&I.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${I.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(T==="zones"){const P=ve(),y={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${P.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${de("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${P.map(I=>{const q=u.filter(ce=>ce.logicalZoneId===I.id),fe=q.filter(ce=>ce.connectivity==="online").length,te=q.filter(ce=>ce.category==="lighting"||ce.category==="hvac").length,Ie=pe===I.id,ue=y[I.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${Ie?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${Ie?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${V(Ie?"all":I.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${V(I.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${fe}/${q.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${ue.temp} · ${ue.occ}</div>
                  ${te>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${V(I.id)}" data-zone-val="true" ${n?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${V(I.id)}" data-zone-val="false" ${n?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${Q.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${de("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${Q.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':Q.map(P=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${V(P.title)}</strong>
                      <span class="pacom-badge ${P.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${P.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${V(P.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${V(P.deviceId)}">定位设备</button>
                      ${P.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${V(P.id)}" ${r?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function ye(b){const Z=R,P=ve().length,y=Z.level==="floor"?"搜索设备或区域…":Z.level==="building"?"搜索楼层…":Z.level==="project"?"搜索楼宇…":"搜索园区…",I=Z.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${N&&T==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${u.length}</button>
          <button type="button" class="pacom-hud-pill ${N&&T==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${P}</button>
          <button type="button" class="pacom-hud-pill ${b>0?"pacom-hud-pill--alert":""} ${N&&T==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${b}</button>
        `:Z.level==="building"?`
            <button type="button" class="pacom-hud-pill ${N?"is-active":""}" data-toggle-hud="1">楼层 ${Fe(Z.buildingId).length}</button>
            ${b>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${b}</button>`:""}
          `:Z.level==="project"?`
              <button type="button" class="pacom-hud-pill ${N?"is-active":""}" data-toggle-hud="1">楼宇 ${a.buildings.filter(q=>q.projectId===Z.projectId).length}</button>
              ${b>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${b}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${N?"is-active":""}" data-toggle-hud="1">园区 ${a.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${de("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${y}" value="${V(ie)}" aria-label="${y}" />
          ${I}
        </div>
        ${N?`<div class="pacom-hud-sheet" data-role="hud-sheet">${he(b)}</div>`:""}
      </div>
    `}function Ne(b){if(ae||R.level!=="building"&&R.level!=="floor")return"";const Z=R.buildingId,P=R.projectId,y=Fe(Z);return!se&&y.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${se?`<button type="button" class="pacom-elev-item ${R.level==="building"?"is-active":""}" data-nav-scope="building:${V(P)}:${V(Z)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${y.map(I=>{const q=o.scope.allowedFloorIds.includes(I.id),fe=R.level==="floor"&&R.floorId===I.id,te=I.id===g.floorId&&b>0;return`
              <button type="button" class="pacom-elev-item ${fe?"is-active":""} ${q?"":"is-locked"}"
                data-nav-scope="floor:${V(P)}:${V(Z)}:${V(I.id)}"
                title="${V(I.name)}${q?te?` · ${b} 条告警`:"":"（无权限）"}">
                ${te?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${V(I.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function We(b,Z){const P=R;if(P.level==="floor")return re?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${k==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${k==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${k==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${de("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(h*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${de("plus",14)}</button>
        </div>
      `;const y=u.length?Math.round(b/u.length*100):100,I=P.level==="building"?"418 kWh":"1,248 kWh",q=Math.round(96.2*.45+93.6*.35+y*.2),fe=P.level==="building"?Fe(P.buildingId).find(te=>te.id===g.floorId)??Fe(P.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${q}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="environment">
          <span>舒适度 <strong>96.2%</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="energy">
          <span>今日能耗 <strong>${I}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${Z>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${Z}</strong></span>
        </button>
        ${P.level==="building"&&fe?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${V(P.projectId)}:${V(P.buildingId)}:${V(fe.id)}">进入 ${V(fe.name)} 平面图 →</button>`:""}
      </div>
    `}function Ue(b,Z){const P=R,y=u.length?Math.round(b/u.length*100):100;if(P.level==="all-projects")return`
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
            ${a.projects.map((te,Ie)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${Ie===0?50:28}%; top:${Ie===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${V(te.id)}">
                  <span class="pacom-dot ${Z>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${V(te.name)} · 在线 ${y}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(P.level==="project"){const te=a.projects.find(ue=>ue.id===P.projectId)??a.projects[0],Ie=a.buildings.filter(ue=>!te||ue.projectId===te.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${V(te?.imageUrl??"./media/gzlab.jpg")}" alt="${V(te?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${Ie.map((ue,ce)=>{const Ee=ue.id===g.buildingId;return`
                  <button type="button" class="pacom-pin ${Ee?"is-selected":""}" style="left:${ce===0?56:38}%; top:${ce===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${V(ue.projectId)}:${V(ue.id)}">
                    <span class="pacom-dot ${Ee&&Z>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${V(ue.name)} · ${Ee?`在线 ${y}% · 告警 ${Z}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(P.level==="building"){const te=a.buildings.find(ue=>ue.id===P.buildingId),Ie=Fe(P.buildingId).find(ue=>ue.id===g.floorId)??Fe(P.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${V(te?.imageUrl??"./media/building-e.webp")}" alt="${V(te?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${Ie?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${V(P.projectId)}:${V(P.buildingId)}:${V(Ie.id)}">
                    <span class="pacom-dot ${Z>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${V(te?.name??"")} ${V(Ie.name)} · 在线 ${b}/${u.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const I=a.floors.find(te=>te.id===P.floorId),q=a.buildings.find(te=>te.id===P.buildingId),fe=ve();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${re?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${V(re)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${d}px, ${E}px) scale(${h});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${V(I?.plan?.imageUrl??"./media/floors/e/07F.webp")}" alt="${V(q?.name??"楼宇")} ${V(I?.name??"7F")} 平面图" />
                  ${fe.map((te,Ie)=>{const ue=Na[te.id];if(!ue)return"";const ce=pe===te.id,Ee=["23.2°C","24.6°C","22.8°C","23.9°C"],Ve=["有人 74%","会议中","有人 52%","空闲"],Ke=k==="temp"?` · ${Ee[Ie%Ee.length]}`:k==="occupancy"?` · ${Ve[Ie%Ve.length]}`:"",Je=k==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":k==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${ce?"is-active":""}"
                          style="left:${ue.left}%; top:${ue.top}%; width:${ue.width}%; height:${ue.height}%; ${ce?"":Je}"
                          data-filter-zone="${V(ce?"all":te.id)}"
                          title="${V(te.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${V(te.name.replace(/^7F\s*/,""))}${Ke}</span>
                        </button>`}).join("")}
                  ${u.filter(te=>te.planPoint).map(te=>{const Ie=Q.some(Ke=>Ke.deviceId===te.id&&Ke.status==="active"),ue=N&&T==="alarms",ce=pe!=="all"&&te.logicalZoneId!==pe||ue&&!Ie,Ee=ue&&Ie?"background:var(--pacom-status-critical);":"",Ve=te.category==="gateway"?Math.min(92,te.planPoint.y*100+5.5):te.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${te.id===be&&_?"is-selected":""} ${te.connectivity==="offline"?"pacom-pin--offline":""} ${ce?"pacom-pin--dimmed":""}"
                          style="left:${(te.planPoint.x*100).toFixed(2)}%; top:${Ve.toFixed(2)}%; ${Ee}"
                          data-pin-device="${V(te.id)}" title="${V(te.name)}">
                          <span class="pacom-dot ${Ie?"pacom-dot--critical":te.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${V(Dt(te))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function qe(){if(R.level!=="floor"||!_)return"";const b=u.find(ce=>ce.id===be);if(!b)return"";const Z=b.category==="lighting",P=b.category==="hvac",y=Number(b.telemetry.dimming?.value??50),I=Number(b.telemetry.setpoint?.value??24),q=ee.has(b.id),fe=Q.filter(ce=>ce.deviceId===b.id&&ce.status==="active"),te=Le.filter(ce=>ce.deviceId===b.id&&ce.status!=="closed"),Ie=P?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:Z?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],ue=Z?[{label:"当前开关",value:y>0?"开启":"关闭"},{label:"当前亮度",value:`${y}%`},{label:"实时功率",value:y>0?`${Math.round(y*1.4)} W`:"0 W"},{label:"运行模式",value:q?"人工覆盖":"自动策略"}]:P?[{label:"室内温度",value:`${b.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${I.toFixed(1)}°C`},{label:"运行工况",value:b.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:q?"人工覆盖":"自动策略"}]:b.category==="sensor"?[{label:"实时温度",value:`${b.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${b.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${b.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:b.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:b.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:b.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:b.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:b.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${V(b.name)}</h2>
            <div class="pacom-row-sub">${V(Me(b.logicalZoneId))} · ${V(Mt[b.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${b.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${b.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${de("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${le==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${le==="trend"}" data-drawer-tab="trend">趋势与告警${fe.length>0?` (${fe.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${le==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${le==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${ue.map(ce=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${ce.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${V(ce.value)}</strong>
                  </div>`).join("")}
            </div>

            ${P?`
                <div class="pacom-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${b.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${V(b.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${b.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${b.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${b.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${b.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${I.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${Z||P?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${q&&n?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${V(b.id)}">恢复自动策略</button>`:n?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${b.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${Z?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${n?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${n?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${y}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${y}" data-ctrl-slider="lighting.dimming" ${n?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${n?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${n?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${I-.5}" ${n?"":"disabled"}>-0.5°C</button>
                        <strong>${I.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${I+.5}" ${n?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${$e?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${V($e.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${$e.receipts.map(ce=>{const Ee=Ra[ce.status]??{text:ce.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${V(ce.deviceId)}</strong> · ${V(ce.command)} → ${V(ce.targetValue)}</div>
                              ${ce.errorMessage?`<div style="color:var(--pacom-status-critical);">${V(ce.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${Ee.badge}">${Ee.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:le==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${Z?"亮度 %":P?"温度 °C":b.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${V(b.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${b.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${Z?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":P?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${fe.length===0&&te.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${fe.map(ce=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${V(ce.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${V(ce.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${te.map(ce=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${V(ce.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${V(ce.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${V(Dt(b))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${V(Me(b.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${f?`<div class="pacom-info-banner">${V(f)}</div>`:""}
                ${Ie.map(ce=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${V(ce.name)}">${V(ce.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${V(ce.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="pacom-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${de("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${V(b.id)}</code> · v${b.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${b.planPoint?`x=${b.planPoint.x.toFixed(2)}, y=${b.planPoint.y.toFixed(2)} (图 v${b.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${b.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${b.hardwareBinding?`${b.hardwareBinding.protocol.toUpperCase()} · ${b.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function Xe(b,Z,P){if(!S)return"";const y=Math.max(0,u.length-b),I=G==="week",q=Q.filter(fe=>fe.status==="active").slice(0,2);return`
      <div class="pacom-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${I?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!I}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${I}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${de("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${I?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${I?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${V(P)}°C · ${b}/${u.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${Z} 告警 · ${y} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,ee.size)} 覆盖 · ${Le.filter(fe=>fe.status!=="closed").length} 工单</strong></div>
        </div>
        ${q.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${q.map(fe=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${V(fe.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${V(fe.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function ke(){if(a.projects.length===0){t.innerHTML=`
        <div class="pacom-shell" style="position:relative;">
          <header class="pacom-header">
            <div class="pacom-header-top">
              <div class="pacom-title-group">
                <h1 class="pacom-title">空间总览</h1>
                ${at({tree:a,session:o,scope:R,activeAlarmCount:0,isOpen:!1,searchKeyword:""})}
              </div>
            </div>
          </header>
          <main class="pacom-spatial-stage" style="display:flex; align-items:center; justify-content:center; padding:24px;">
            <div class="dep-empty-card" style="max-width:520px; width:100%; background:var(--pacom-surface-card);">
              <div class="dep-empty-icon">${de("building-2",20)}</div>
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
              <span class="pacom-row-sub" style="max-width:400px;">当前机构还未建立空间档案。先创建首个项目并添加楼宇、楼层与平面图，即可在此查看全景与实时设备态势。</span>
              <div class="dep-empty-steps">
                <span>1. 创建项目</span>
                <span>→</span>
                <span>2. 添加楼宇与楼层</span>
                <span>→</span>
                <span>3. 上传平面图</span>
              </div>
              <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-first-project="1" ${o.scope.canEditDeployment?"":"disabled"}>+ 创建第一个项目</button>
            </div>
          </main>
        </div>
      `,t.querySelector("[data-go-create-first-project]")?.addEventListener("click",()=>{window.location.hash="#deployment?sec=projects&new=project"});return}const b=Q.filter(y=>y.status==="active").length,Z=u.filter(y=>y.connectivity==="online").length,P=u.find(y=>y.category==="sensor")?.telemetry.temp?.value??"23.4";t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${at({tree:a,session:o,scope:R,activeAlarmCount:b,isOpen:J,searchKeyword:ge})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${re?'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${S}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${Z}/${u.length} 在线 · ${V(P)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${Pa}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${Xe(Z,b,P)}

        <main class="pacom-spatial-stage">
          ${ye(b)}
          ${Ue(Z,b)}
          ${Ne(b)}
          ${We(Z,b)}
          ${qe()}
        </main>
      </div>
    `,xe()}function xe(){ot(t,{onToggle:()=>{J=!J,J&&(S=!1,N=!1),ke(),J&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:y=>{ge=y,ke();const I=t.querySelector("[data-global-space-search]");I&&(I.focus(),I.setSelectionRange(y.length,y.length))},onPick:y=>{J=!1,ze(y)}}),t.querySelectorAll("[data-nav-scope]").forEach(y=>{y.addEventListener("click",I=>{I.stopPropagation(),y.dataset.navScope&&ze(W(y.dataset.navScope))})}),t.querySelectorAll("[data-hud-tab]").forEach(y=>{y.addEventListener("click",I=>{I.stopPropagation();const q=y.dataset.hudTab;N&&T===q?N=!1:(T=q,N=!0,J=!1,S=!1),ke()})}),t.querySelectorAll("[data-toggle-hud]").forEach(y=>{y.addEventListener("click",I=>{I.stopPropagation(),N=!N,N&&(J=!1,S=!1),ke()})}),t.querySelectorAll("[data-close-hud]").forEach(y=>{y.addEventListener("click",I=>{I.stopPropagation(),N=!1,ke()})});const b=t.querySelector('[data-role="search"]');b?.addEventListener("focus",()=>{N||(N=!0,J=!1,S=!1,m())}),b?.addEventListener("input",y=>{ie=y.currentTarget.value,N=!0,m()}),t.querySelector('[data-role="category"]')?.addEventListener("change",y=>{ne=y.currentTarget.value,ke()}),t.querySelectorAll("[data-filter-zone]").forEach(y=>{y.addEventListener("click",I=>{I.stopPropagation(),pe=y.dataset.filterZone??"all",ke()})}),t.querySelectorAll("[data-select-device]").forEach(y=>{y.addEventListener("click",I=>{I.target.tagName!=="INPUT"&&(be=y.dataset.selectDevice??null,_=!0,ke())})}),t.querySelectorAll("[data-check-device]").forEach(y=>{y.addEventListener("change",()=>{const I=y.dataset.checkDevice;I&&(y.checked?X.add(I):X.delete(I),ke())})}),t.querySelectorAll("[data-pin-device]").forEach(y=>{y.addEventListener("click",I=>{I.stopPropagation(),be=y.dataset.pinDevice??null,_=!0,J=!1,S=!1,ke()})}),t.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{_=!1,ke()}),t.querySelectorAll("[data-drawer-tab]").forEach(y=>{y.addEventListener("click",()=>{le=y.dataset.drawerTab??"control",f="",ke()})}),t.querySelectorAll("[data-drawer-doc]").forEach(y=>{y.addEventListener("click",()=>{f=`已调阅「${y.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,ke()})}),t.querySelectorAll("[data-briefing-period]").forEach(y=>{y.addEventListener("click",()=>{G=y.dataset.briefingPeriod??"today",ke()})}),t.querySelectorAll("[data-go-alarm-id]").forEach(y=>{y.addEventListener("click",()=>{const I=y.dataset.goAlarmId??"";window.location.hash=I?`#alarms?alarm=${encodeURIComponent(I)}`:"#alarms"})}),t.querySelectorAll("[data-go-wo-id]").forEach(y=>{y.addEventListener("click",()=>{const I=y.dataset.goWoId??"";window.location.hash=I?`#alarms?wo=${encodeURIComponent(I)}`:"#alarms"})}),t.querySelector("[data-release-override]")?.addEventListener("click",y=>{const I=y.currentTarget.dataset.releaseOverride;I&&(ee.delete(I),ke())}),t.querySelectorAll("[data-zone-power]").forEach(y=>{y.addEventListener("click",I=>{I.stopPropagation();const q=y.dataset.zonePower,fe=y.dataset.zoneVal==="true";if(!q)return;const te=u.filter(ue=>ue.logicalZoneId===q&&ue.category==="lighting").map(ue=>ue.id),Ie=u.filter(ue=>ue.logicalZoneId===q&&ue.category==="hvac").map(ue=>ue.id);te.length?v(te,"lighting.power",fe):Ie.length&&v(Ie,"hvac.power",fe)})}),t.querySelectorAll("[data-locate-device]").forEach(y=>{y.addEventListener("click",()=>{const I=y.dataset.locateDevice;I&&(be=I,_=!0,N=!1,ke())})}),t.querySelectorAll("[data-go-alarms]").forEach(y=>{y.addEventListener("click",()=>{window.location.hash="#alarms"})}),t.querySelectorAll("[data-go-analysis]").forEach(y=>{y.addEventListener("click",()=>{const I=y.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(I)}`})}),t.querySelectorAll("[data-go-timeseries]").forEach(y=>{y.addEventListener("click",()=>{const I=y.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(I)}`})}),t.querySelectorAll("[data-toggle-briefing]").forEach(y=>{y.addEventListener("click",I=>{I.stopPropagation(),S=!S,S&&(J=!1,N=!1),ke()})}),t.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const y=u.filter(ue=>ue.connectivity==="online").length,I=Q.filter(ue=>ue.status==="active").length,q=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${y}/${u.length}（离线 ${u.length-y} 台）`,`待处理告警：${I} 条`,`人工覆盖中：${ee.size} 台`].join(`
`),fe=new Blob([q],{type:"text/plain;charset=utf-8;"}),te=URL.createObjectURL(fe),Ie=document.createElement("a");Ie.href=te,Ie.download="pacom-daily-briefing.txt",Ie.click(),URL.revokeObjectURL(te)}),t.querySelectorAll("[data-ctrl-cmd]").forEach(y=>{y.addEventListener("click",()=>{if(!be||!y.dataset.ctrlCmd)return;const I=y.dataset.ctrlVal??"",q=I==="true"?!0:I==="false"?!1:Number(I);v([be],y.dataset.ctrlCmd,q)})}),t.querySelector("[data-ctrl-slider]")?.addEventListener("change",y=>{const I=y.currentTarget;!be||!I.dataset.ctrlSlider||v([be],I.dataset.ctrlSlider,Number(I.value))}),t.querySelectorAll("[data-batch-cmd]").forEach(y=>{y.addEventListener("click",()=>{const I=Array.from(X),q=y.dataset.batchVal??"",fe=q==="true"?!0:q==="false"?!1:q;v(I,y.dataset.batchCmd,fe)})}),t.querySelectorAll("[data-ack-alarm]").forEach(y=>{y.addEventListener("click",async()=>{!y.dataset.ackAlarm||R.level!=="floor"||!r||(await e.acknowledgeAlarm(y.dataset.ackAlarm,"首页快速确认"),Q=await e.listAlarms(R.floorId),ke())})}),t.querySelectorAll("[data-canvas-layer]").forEach(y=>{y.addEventListener("click",()=>{const I=y.dataset.canvasLayer;I&&(k=I,ke())})}),t.querySelectorAll("[data-zoom]").forEach(y=>{y.addEventListener("click",()=>{const I=y.dataset.zoom;I==="in"?h=Math.min(2.6,Number((h+.2).toFixed(2))):I==="out"?h=Math.max(.6,Number((h-.2).toFixed(2))):(h=1,d=0,E=0),w()})}),t.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",y=>{y.preventDefault();const I=R;if(I.level!=="building"&&I.level!=="floor")return;const q=Fe(I.buildingId),fe=[...se?[{level:"building",projectId:I.projectId,buildingId:I.buildingId}]:[],...q.map(ue=>({level:"floor",projectId:I.projectId,buildingId:I.buildingId,floorId:ue.id}))],te=fe.findIndex(ue=>ue.level==="building"?I.level==="building":ue.level==="floor"&&I.level==="floor"&&ue.floorId===I.floorId);if(te<0)return;const Ie=Math.max(0,Math.min(fe.length-1,te+(y.deltaY>0?1:-1)));Ie!==te&&fe[Ie]&&ze(fe[Ie])},{passive:!1});const P=t.querySelector('[data-role="canvas-stage"]');if(P&&!re){let y=!1,I=!1,q=0,fe=0,te=0,Ie=0;P.addEventListener("pointerdown",ce=>{ce.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(y=!0,I=!1,q=ce.clientX,fe=ce.clientY,te=d,Ie=E,P.classList.add("is-panning"),P.setPointerCapture?.(ce.pointerId))}),P.addEventListener("pointermove",ce=>{if(!y)return;const Ee=ce.clientX-q,Ve=ce.clientY-fe;(Math.abs(Ee)>3||Math.abs(Ve)>3)&&(I=!0),d=te+Ee,E=Ie+Ve,w()});const ue=()=>{y&&(y=!1,P.classList.remove("is-panning"),!I&&(N||J||S)&&(N=!1,J=!1,S=!1,ke()))};P.addEventListener("pointerup",ue),P.addEventListener("pointercancel",ue),P.addEventListener("wheel",ce=>{ce.preventDefault();const Ee=ce.deltaY<0?.12:-.12;h=Math.max(.6,Math.min(2.6,Number((h+Ee).toFixed(2)))),w()},{passive:!1}),P.addEventListener("dblclick",ce=>{ce.target?.closest("button")||(h=1,d=0,E=0,w())})}else t.querySelector(".pacom-spatial-stage")?.addEventListener("click",y=>{y.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .pacom-briefing-pop")||(N||J||S)&&(N=!1,J=!1,S=!1,ke())})}t.addEventListener("keydown",b=>{b.key==="Escape"&&(J||S||N||_)&&(J=!1,S=!1,N=!1,_=!1,ke())}),await ze(R,!0)}const _a=new Set(["lighting","hvac","alarm_rules"]),Ot={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},mt=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function Ua(t){const e=new Set;for(const o of t.actions)o.command.startsWith("lighting")?e.add("照明"):o.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function Va(t,e,o){const a=o?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${t<e?`<div style="position:absolute; left:${t/24*100}%; width:${(e-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${a};"></div>`:`
        <div style="position:absolute; left:${t/24*100}%; width:${(24-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${a};"></div>
        <div style="position:absolute; left:0; width:${e/24*100}%; top:0; bottom:0; border-radius:999px; background:${a};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function Za(t,e,o){let a=st(),n=!1,r="",[A,C,B,H]=await Promise.all([e.getSpatialTree(),e.listScenes(g.floorId),e.getRuntimeSettings(g.projectId),e.getFloorDevices(g.floorId).catch(()=>[])]),M="manual",se="balanced",ae="all",R=null,T="",N=!1,J=!1,ge=!1,ie="all",ne=null,pe="",oe="",Y=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const we=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],be=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],_=[{deviceId:H[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],le=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${B.calendar.workdayStart} – ${B.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${B.calendar.nightGuardStart} – 次日 ${B.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],f=e.subscribeFloorEvents(g.floorId,async G=>{G.type==="control.receipt.updated"&&R?.batchId===G.batchId&&(R=await e.getControlBatch(G.batchId),S())});function S(){const G=T.trim().toLowerCase(),k=G?C.filter(d=>`${d.name} ${d.description}`.toLowerCase().includes(G)):C,ee=B.rules.filter(d=>_a.has(d.category)),X=ae==="all"?ee:ae==="cbm"?[]:ee.filter(d=>d.category===ae),u=ae==="all"||ae==="cbm",Q=ie==="issues"?we.filter(d=>d.status!=="verified"):we,Le=mt.find(d=>d.id===se)??mt[1],$e=o.scope.canControlDevices,re=o.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${at({tree:A,session:o,scope:a,isOpen:n,searchKeyword:r})}
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${Y.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${Y.length>0?`人工覆盖中：${Y.length} 台 ${de("chevron-down",12)}`:`全部自动托管 ${de("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${ge?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${we.length}）</button>
              ${M==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${N?"收起表单":"+ 新建场景"}</button>`:M==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${M==="manual"}" data-scene-tab="manual">快捷场景（${C.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${M==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${M==="rules"}" data-scene-tab="rules">条件联动（${ee.length+be.length}）</button>
          </nav>
        </header>

        ${J?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${Y.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${de("x",16)}</button>
              </div>
              ${Y.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':Y.map(d=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${d.name}</div>
                            <div class="pacom-row-sub">${d.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${d.id}" ${$e?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${Y.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${$e?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${ge?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${de("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${ie==="all"}" data-log-filter="all">全部（${we.length}）</button>
                  <button class="pacom-tab" aria-selected="${ie==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${Q.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${Q.map(d=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${d.device}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${d.source}</span>
                        </div>
                        <span class="pacom-row-sub">${d.action} · ${d.at}</span>
                      </div>
                      <span class="pacom-badge ${d.status==="verified"?"pacom-badge--online":d.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${d.status==="verified"?"回读确认":d.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${pe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${pe}</span></div>`:""}
          ${oe?`<div class="pacom-alert-banner">${oe}</div>`:""}

          ${M==="manual"?`
              ${R?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${R.batchId}</span>
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
                            ${R.receipts.map(d=>`
                                <tr>
                                  <td><code style="font-size:12px;">${d.deviceId}</code></td>
                                  <td>${d.command}</td>
                                  <td>${String(d.targetValue)}${d.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${d.errorMessage}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${d.status==="verified_success"?"pacom-badge--online":d.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${d.status}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${N?`
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
                          <span class="pacom-setting-title">联动动作列表（${_.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${_.map((d,E)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${E}" aria-label="目标设备">
                                ${H.map(O=>`<option value="${O.id}" ${O.id===d.deviceId?"selected":""}>${O.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${E}" aria-label="执行指令">
                                <option value="lighting.dimming" ${d.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${d.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${d.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${E}" value="${d.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${E}" ${_.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${T}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${k.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${k.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':k.map(d=>{const E=Ua(d),O=d.actions.slice(0,3).map(ve=>{const Fe=H.find(Me=>Me.id===ve.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??ve.deviceId,ze=ve.command==="lighting.dimming"?`亮度 ${ve.targetValue}%`:ve.command==="hvac.setpoint"?`设温 ${ve.targetValue}°C`:ve.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${Fe} → ${ze}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${d.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${E.map(ve=>`<span class="pacom-badge pacom-badge--accent">${ve}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${d.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${d.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${O}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${d.lastExecutedAt?d.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${d.id}" ${$e?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:M==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Le.title}</div>
                    <span class="pacom-kpi-delta">${Le.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Le.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Le.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${Y.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${mt.map(d=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${se===d.id}" data-oss-mode="${d.id}" ${$e?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${d.title}</strong>
                          <span class="pacom-badge ${se===d.id?"pacom-badge--online":"pacom-badge--neutral"}">${se===d.id?"当前生效":d.badge}</span>
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
                          ${le.map(d=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${d.name}</span>
                                    ${d.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${d.windowLabel}</div>
                                </td>
                                <td>${Va(d.startHour,d.endHour,d.enabled)}</td>
                                <td><span class="pacom-row-sub">${d.scope}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${d.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${d.enabled}"
                                      aria-label="切换排程 ${d.name}"
                                      data-toggle-schedule="${d.id}"
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(d=>{const E=d==="all"?"全部":Ot[d]??d,O=d==="all"?ee.length+be.length:d==="cbm"?be.length:ee.filter(ve=>ve.category===d).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${ae===d}" data-rule-cat="${d}">
                              <span>${E}</span><span class="pacom-count-num">${O}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${X.map(d=>{const E=ne===d.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${Ot[d.category]??d.category}</span>
                                  <span>${d.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${d.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${d.summary} · 范围：${d.scopeLabel} · 回执：${d.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${d.id}">${E?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${d.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${d.enabled?"true":"false"}"
                                  aria-label="切换 ${d.name}"
                                  data-toggle-strategy-rule="${d.id}"
                                  data-rule-ver="${d.version}"
                                  data-rule-next="${!d.enabled}"
                                  ${re?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${E?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${d.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":d.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${d.scopeLabel} · 当前版本：v${d.version} · 最近同步：${d.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${u?be.map(d=>{const E=Math.min(100,Math.round(d.runtimeHours/d.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${d.name}</span>
                                      <span class="pacom-badge ${E>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${d.runtimeHours} / ${d.thresholdHours} h（${E}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${E}%; background:${E>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${d.equipment} · 上次重置：${d.lastReset}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${d.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${d.enabled}" data-toggle-cbm="${d.id}" aria-label="切换 ${d.name}" ${re?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,ot(t,{onToggle:()=>{n=!n,S(),n&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:d=>{r=d,S();const E=t.querySelector("[data-global-space-search]");E&&(E.focus(),E.setSelectionRange(d.length,d.length))},onPick:d=>{a=d,n=!1,S()}}),t.querySelectorAll("[data-scene-tab]").forEach(d=>{d.addEventListener("click",()=>{M=d.dataset.sceneTab??"manual",pe="",S()})}),t.querySelectorAll("[data-toggle-overrides]").forEach(d=>{d.addEventListener("click",()=>{J=!J,S()})}),t.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{Y=[],pe="已释放全部人工覆盖设备，自动节能策略已恢复托管。",S()}),t.querySelectorAll("[data-release-one]").forEach(d=>{d.addEventListener("click",()=>{const E=d.dataset.releaseOne;Y=Y.filter(O=>O.id!==E),pe="已恢复该设备的自动策略托管。",S()})}),t.querySelectorAll("[data-toggle-cmdlog]").forEach(d=>{d.addEventListener("click",()=>{ge=!ge,S()})}),t.querySelectorAll("[data-log-filter]").forEach(d=>{d.addEventListener("click",()=>{ie=d.dataset.logFilter??"all",S()})}),t.querySelector("[data-close-batch]")?.addEventListener("click",()=>{R=null,S()}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(d=>{d.addEventListener("click",()=>{const E=d.dataset.ossMode;if(!E)return;se=E;const O=mt.find(ve=>ve.id===E);pe=`已切换至「${O?.title??E}」模式（明日预测启动 ${O?.predictedStart??""}）。`,S()})}),t.querySelectorAll("[data-toggle-schedule]").forEach(d=>{d.addEventListener("click",()=>{const E=d.dataset.toggleSchedule,O=le.find(ve=>ve.id===E);O&&(O.enabled=!O.enabled,pe=`排程「${O.name}」已${O.enabled?"恢复启用":"临时暂停"}。`,S())})}),t.querySelectorAll("[data-rule-cat]").forEach(d=>{d.addEventListener("click",()=>{ae=d.dataset.ruleCat??"all",S()})}),t.querySelectorAll("[data-expand-rule]").forEach(d=>{d.addEventListener("click",()=>{const E=d.dataset.expandRule??null;ne=ne===E?null:E,S()})}),t.querySelectorAll("[data-toggle-cbm]").forEach(d=>{d.addEventListener("click",()=>{const E=be.find(O=>O.id===d.dataset.toggleCbm);E&&(E.enabled=!E.enabled,pe=`工时维保规则「${E.name}」已${E.enabled?"启用":"停用"}。`,S())})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(d=>{d.addEventListener("click",async()=>{oe="";try{await e.toggleRuntimeRule(d.dataset.toggleStrategyRule,d.dataset.ruleNext==="true",Number(d.dataset.ruleVer)),B=await e.getRuntimeSettings(g.projectId),pe="条件联动规则状态与版本回执已更新。",S()}catch(E){oe=E instanceof Error?E.message:String(E),S()}})}),t.querySelectorAll("[data-toggle-create]").forEach(d=>{d.addEventListener("click",()=>{N=!N,S()})}),t.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{_.push({deviceId:H[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),S()}),t.querySelectorAll("[data-del-draft-action]").forEach(d=>{d.addEventListener("click",()=>{const E=Number(d.dataset.delDraftAction);_.length>1&&(_.splice(E,1),S())})}),t.querySelectorAll("[data-draft-dev]").forEach(d=>{d.addEventListener("change",()=>{const E=_[Number(d.dataset.draftDev)];E&&(E.deviceId=d.value)})}),t.querySelectorAll("[data-draft-cmd]").forEach(d=>{d.addEventListener("change",()=>{const E=_[Number(d.dataset.draftCmd)];E&&(E.command=d.value)})}),t.querySelectorAll("[data-draft-val]").forEach(d=>{d.addEventListener("change",()=>{const E=_[Number(d.dataset.draftVal)];E&&(E.targetValue=d.value)})}),t.querySelector("[data-scene-search]")?.addEventListener("input",d=>{const E=d.currentTarget,O=E.selectionStart??E.value.length;T=E.value,S();const ve=t.querySelector("[data-scene-search]");ve&&(ve.focus(),ve.setSelectionRange(O,O))}),t.querySelectorAll("[data-exec-scene]").forEach(d=>{d.addEventListener("click",async()=>{oe="";const E=C.find(O=>O.id===d.dataset.execScene);try{R=await e.executeScene(d.dataset.execScene),C=await e.listScenes(g.floorId),we.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:E?.name??"E7F 场景",action:`${R.receipts.length} 台设备联动下发`,status:"verified"}),S()}catch(O){oe=O instanceof Error?O.message:String(O),S()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async d=>{d.preventDefault();const E=new FormData(d.currentTarget);try{await e.createScene({projectId:g.projectId,floorId:g.floorId,name:String(E.get("name")??""),description:String(E.get("description")??""),actions:_.map(O=>({deviceId:O.deviceId,command:O.command,targetValue:O.targetValue==="true"?!0:O.targetValue==="false"?!1:Number(O.targetValue)||50}))}),C=await e.listScenes(g.floorId),N=!1,pe=`快捷场景已保存（共绑定 ${_.length} 条联动动作）。`,S()}catch(O){oe=O instanceof Error?O.message:String(O),S()}})}S(),window.addEventListener("hashchange",()=>f(),{once:!0})}const Rt={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function wt(t,e){return t.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':t.map(o=>`
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
            ${e?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function Ha(t,e,o){let a="calendar",n=st(),r=!1,A="";const[C,B]=await Promise.all([e.getSpatialTree(),e.getRuntimeSettings(g.projectId)]);let H=B,M=H.calendar.workdayStart,se=H.calendar.workdayEnd,ae=H.calendar.nightGuardStart,R=H.calendar.nightGuardEnd,T=!0,N=[];const J=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let ge="flat";const ie={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},ne={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},pe={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},oe={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},Y=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let we="",be="";function _(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(S=>{const G=Rt[S];return`
                <button type="button" class="pacom-unified-item" aria-current="${a===S}" data-stab="${S}">
                  ${de(G.icon,16)}
                  <span>${G.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function le(){const f=o.scope.canEditDeployment,S=C.projects[0]?.name??"当前项目",G=H.rules.filter(u=>u.category==="weather_area"),k=H.rules.filter(u=>u.category==="metering_carbon"),ee=H.rules.filter(u=>u.category==="templates"),X=Rt[a];t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${at({tree:C,session:o,scope:n,maxGranularity:"project",isOpen:r,searchKeyword:A})}
            </div>
            <div class="pacom-header-meta">
              ${f?"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${_()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${X.label}</h2>
                <p class="pacom-unified-subtitle">${X.subtitle}</p>
              </div>
              ${we?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${we}</span></div>`:""}
              ${be?`<div class="pacom-alert-banner">${be}</div>`:""}

              ${a==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${H.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${M}" aria-label="工作日上班时间" ${f?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${se}" aria-label="工作日下班时间" ${f?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${ae}" aria-label="夜间值守开始" ${f?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${R}" aria-label="夜间值守结束" ${f?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${T?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${T}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${f?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${f?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${J.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${J.map(u=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${u.date}</span><span class="pacom-badge pacom-badge--accent">${u.mode}</span></span>
                              <span class="pacom-setting-desc">${u.label}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${u.id}" ${f?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${f?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${f?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${f?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${f?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${N.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${N.length} 条</span>
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
                                ${N.map(u=>`
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
                            <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${f?"":"disabled"}>
                              <option value="guanzhou_station" ${ie.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${ie.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${S}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${ie.billingArea}" aria-label="计费面积" ${f?"":"disabled"} />
                          </div>
                        </div>
                        ${wt(G,f)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${ge==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${ge==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${ge==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${ie.tariffYuan}" aria-label="综合电价" ${f?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${ie.tariffPeak}" ${f?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${ie.tariffFlat}" ${f?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${ie.tariffValley}" ${f?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${f?"":"disabled"}>
                              <option value="0.5271" ${ie.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${ie.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${wt(k,f)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${f?"":"disabled"}>保存口径参数</button>
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
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${ne.minTemp}" aria-label="最低设定温度" ${f?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${ne.maxTemp}" aria-label="最高设定温度" ${f?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${f?"":"disabled"}>
                                <option value="2h" ${ne.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${ne.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${ne.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${ne.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${ne.readbackTimeoutSec}" aria-label="回读超时阈值" ${f?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${f?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${wt(ee,f)}
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
                              <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${oe.dailyDigestTime}" aria-label="每日简报发送时间" />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${oe.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${oe.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
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
                              <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${pe.delayMin}" ${f?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${pe.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${f?"":"disabled"}>
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
                              <select class="pacom-select" data-auto-wo="defaultGroup" aria-label="默认处理组" ${f?"":"disabled"}>
                                <option value="暖通运维组" ${pe.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${pe.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${pe.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${pe.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${f?"":"disabled"}>
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
                                ${Y.map(u=>`
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
    `,ot(t,{onToggle:()=>{r=!r,le(),r&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:u=>{A=u,le();const Q=t.querySelector("[data-global-space-search]");Q&&(Q.focus(),Q.setSelectionRange(u.length,u.length))},onPick:u=>{n=u,r=!1,le()}}),t.querySelectorAll("[data-stab]").forEach(u=>{u.addEventListener("click",()=>{a=u.dataset.stab??"calendar",we="",be="",le()})}),t.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{T=!T,we=`法定节假日自动跳过已${T?"开启":"关闭"}。`,le()}),t.querySelector("[data-night-start]")?.addEventListener("change",u=>{ae=u.currentTarget.value}),t.querySelector("[data-night-end]")?.addEventListener("change",u=>{R=u.currentTarget.value}),t.querySelector("[data-add-sd-form]")?.addEventListener("submit",u=>{u.preventDefault();const Q=new FormData(u.currentTarget);J.push({id:`sd-${Date.now()}`,date:String(Q.get("date")??""),label:String(Q.get("label")??""),mode:String(Q.get("mode")??"保持工作日工况")}),we="已添加特殊例外日期，当日自动覆盖默认节假日排程。",le()}),t.querySelectorAll("[data-del-sd]").forEach(u=>{u.addEventListener("click",()=>{const Q=J.findIndex(Le=>Le.id===u.dataset.delSd);Q>=0&&J.splice(Q,1),le()})}),t.querySelectorAll("[data-tariff-mode]").forEach(u=>{u.addEventListener("click",()=>{ge=u.dataset.tariffMode??"flat",le()})}),t.querySelectorAll("[data-energy-field]").forEach(u=>{u.addEventListener("change",()=>{const Q=u.dataset.energyField;Q&&(ie[Q]=u.value)})}),t.querySelector("[data-save-energy]")?.addEventListener("click",()=>{we=ge==="flat"?`能耗计费与气象口径已保存（面积 ${ie.billingArea} m² · 综合电价 ¥${ie.tariffYuan}/kWh · 因子 ${ie.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${ie.tariffPeak} / 平 ¥${ie.tariffFlat} / 谷 ¥${ie.tariffValley}）。`,le()}),t.querySelectorAll("[data-guard-field]").forEach(u=>{u.addEventListener("change",()=>{const Q=u.dataset.guardField;Q&&(ne[Q]=u.value)})}),t.querySelector("[data-save-guard]")?.addEventListener("click",()=>{we=`控制保护参数已保存（温区 ${ne.minTemp}–${ne.maxTemp}°C · 超时 ${ne.readbackTimeoutSec}s）。`,le()}),t.querySelectorAll("[data-auto-wo]").forEach(u=>{u.addEventListener("change",()=>{const Q=u.dataset.autoWo;Q&&(pe[Q]=u.value),we="超时自动派单配置已更新。",le()})}),t.querySelectorAll("[data-toggle-autowo]").forEach(u=>{u.addEventListener("click",()=>{const Q=u.dataset.toggleAutowo;Q&&(pe[Q]=!pe[Q],we="自动派单保护策略已更新。",le())})}),t.querySelector("[data-digest-time]")?.addEventListener("change",u=>{oe.dailyDigestTime=u.currentTarget.value,we=`每日晨间简报发送时刻已更新为 ${oe.dailyDigestTime}。`,le()}),t.querySelectorAll("[data-notify-key]").forEach(u=>{u.addEventListener("click",()=>{const Q=u.dataset.notifyKey;Q&&(oe[Q]=!oe[Q],we="消息通知偏好已更新。",le())})}),t.querySelectorAll("[data-toggle-nr]").forEach(u=>{u.addEventListener("click",()=>{const Q=Y.find(Le=>Le.id===u.dataset.toggleNr);Q&&(Q.enabled=!Q.enabled,we=`工作组「${Q.groupName}」的分流推送规则已${Q.enabled?"启用":"停用"}。`,le())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",u=>{M=u.currentTarget.value}),t.querySelector("[data-cal-end]")?.addEventListener("change",u=>{se=u.currentTarget.value}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{be="",N=await e.previewCalendarImpact(g.projectId,M,se),le()}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{be="";try{const u=await e.saveWorkCalendar(g.projectId,M,se,H.calendar.version);H={...H,calendar:{...u,nightGuardStart:ae,nightGuardEnd:R}},we=`工作时间配置已保存至 v${u.version}（工作日 ${u.workdayStart}–${u.workdayEnd} · 夜间值守 ${ae}–${R}）`,N=[],le()}catch(u){be=u instanceof Error?u.message:String(u),le()}}),t.querySelectorAll("[data-toggle-rule]").forEach(u=>{u.addEventListener("click",async()=>{be="";try{await e.toggleRuntimeRule(u.dataset.toggleRule,u.dataset.ruleNext==="true",Number(u.dataset.ruleVer)),H=await e.getRuntimeSettings(g.projectId),we="策略状态与版本回执已更新。",le()}catch(Q){be=Q instanceof Error?Q.message:String(Q),le()}})})}le()}const Pt="pacom.web.sidebar.collapsed",Wa=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,xt=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],It={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},Nt=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function St(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in It?t:"home"}function _e(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Ga(t,e,o,a){t.classList.remove("bare-login");let n=o,r=St(),A=localStorage.getItem(Pt)==="1",C=!1,B=!1,H=!1,M=await e.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],se=e.getActiveOrganizationId?.()??M[0]?.id??"org-gzlab",ae="",R=!1,T=0,N={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const J=e.mode==="demo"&&typeof e.switchDemoRole=="function";function ge(){return M.find(h=>h.id===se)??M[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function ie(h){if(h.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const d=h.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${_e(d)}</span>`}async function ne(){e.listOrganizations&&(M=await e.listOrganizations(),se=e.getActiveOrganizationId?.()??M[0]?.id??"org-gzlab")}async function pe(){try{await ne();const[h,d,E,O,ve]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(g.floorId).catch(()=>[]),e.listAlarms(g.floorId).catch(()=>[]),e.listWorkOrders(g.floorId).catch(()=>[]),e.listScenes(g.floorId).catch(()=>[])]);N={devices:d,zones:h.zones,alarms:E,workOrders:O,scenes:ve},T=E.filter(Fe=>Fe.status==="active").length,S()}catch{}}function oe(){return xt.map(h=>`
        ${h.id==="settings"?'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${h.id}" aria-current="${r===h.id?"page":"false"}" title="${h.label}">
          ${de(h.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${h.label}</span>
          ${h.id==="alarms"&&T>0?`<span class="pacom-nav-count" title="待处理告警 ${T} 条">${T}</span>`:""}
        </button>`).join("")}function Y(){const h=ae.trim().toLowerCase(),d=h?xt.filter(v=>v.label.toLowerCase().includes(h)).slice(0,4):xt,E=h?N.devices.filter(v=>`${v.name} ${v.id} ${v.category}`.toLowerCase().includes(h)).slice(0,5):N.devices.slice(0,3),O=h?N.zones.filter(v=>v.name.toLowerCase().includes(h)).slice(0,3):[],ve=h?N.alarms.filter(v=>`${v.title} ${v.message} ${v.id}`.toLowerCase().includes(h)).slice(0,4):N.alarms.filter(v=>v.status==="active").slice(0,2),Fe=h?N.workOrders.filter(v=>`${v.title} ${v.id}`.toLowerCase().includes(h)).slice(0,3):[],ze=h?N.scenes.filter(v=>`${v.name} ${v.description}`.toLowerCase().includes(h)).slice(0,3):[],Me=h?Nt.filter(v=>`${v.title} ${v.category}`.toLowerCase().includes(h)).slice(0,4):Nt.slice(0,2),Te=[];return E.length&&Te.push(`<div class="pacom-search-group">${h?"设备（空间总览）":"常用设备直达"}</div>`+E.map(v=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(v.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(v.name)}</span><span class="pacom-badge ${v.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${v.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),O.length&&Te.push('<div class="pacom-search-group">功能区</div>'+O.map(v=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(v.id)}"><span>${_e(v.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),ve.length&&Te.push(`<div class="pacom-search-group">${h?"告警":"待处理告警"}</div>`+ve.map(v=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(v.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(v.title)}</span><span class="pacom-badge pacom-badge--warning">${v.status==="active"?"待处理":"已确认"}</span></button>`).join("")),Fe.length&&Te.push('<div class="pacom-search-group">运维工单</div>'+Fe.map(v=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(v.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(v.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),ze.length&&Te.push('<div class="pacom-search-group">智能策略</div>'+ze.map(v=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${_e(v.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),Me.length&&Te.push('<div class="pacom-search-group">图纸与工程文档</div>'+Me.map(v=>`<button type="button" class="pacom-search-hit" data-search-hash="${v.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(v.title)}</span><span class="pacom-badge pacom-badge--neutral">${_e(v.category)}</span></button>`).join("")),d.length&&Te.push('<div class="pacom-search-group">工作区</div>'+d.map(v=>`<button type="button" class="pacom-search-hit" data-search-hash="#${v.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${de(v.icon,14)}${_e(v.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),Te.length?Te.join(""):`<div class="pacom-nav-empty">未找到与「${_e(ae)}」匹配的设备、区域、告警、工单或图纸</div>`}function we(h){h.querySelectorAll("[data-search-hash]").forEach(d=>{d.addEventListener("click",()=>{const E=d.dataset.searchHash||"#home";R=!1,ae="",be(),C=!1,window.location.hash===E?(r=St(),u(!0)):window.location.hash=E})})}function be(){if(t.querySelector('[data-role="cmd-scrim"]')?.remove(),!R)return;const h=document.createElement("div");h.className="pacom-cmd-scrim",h.dataset.role="cmd-scrim",h.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${de("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${_e(ae)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${Y()}
        </div>
      </div>
    `,t.appendChild(h),h.addEventListener("click",O=>{O.target===h&&(R=!1,be())});const d=h.querySelector('[data-role="cmd-input"]'),E=h.querySelector('[data-role="cmd-body"]');E&&we(E),d?.focus(),d?.addEventListener("input",O=>{ae=O.currentTarget.value,E&&(E.innerHTML=Y(),we(E))})}function _(){if(!B)return"";const h=n.displayName.slice(0,1)||"U",d=!!(e.createOrganization&&n.scope.canEditDeployment);return`
      <div class="pacom-org-popover ${A?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${M.map(E=>{const O=E.id===se;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${O}" data-pop-org="${_e(E.id)}">
                ${ie(E)}
                <span class="pacom-pop-text">
                  <b>${_e(E.name)}</b>
                  <small>${E.projectCount>0?`${E.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${O?de("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${d?H?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${de("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${de("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${_e(h)}</span>
          <span class="pacom-pop-text">
            <b>${_e(n.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${J?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">切换视角</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(Pe).map(E=>{const O=Pe[E],ve=E===n.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${ve}" data-pop-role="${E}">
                      <span class="pacom-pop-text">
                        <b>${_e(O.roleLabel)}</b>
                        <small>${_e(O.displayName)}</small>
                      </span>
                      ${ve?de("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${de("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function le(h){switch(document.title=`${It[r]} · PACOM Station`,r){case"home":await Ba(h,e,n);return;case"analysis":await Ca(h,e,n);return;case"alarms":await ya(h,e,n);return;case"scenes":await Za(h,e,n);return;case"settings":await Ha(h,e,n);return;case"deployment":await Oa(h,e,n);return;case"account":await ga(h,e,n,d=>{n=d,u(!0)},f);return}}async function f(){B=!1,C=!1,R=!1,re();try{await e.logout()}finally{window.location.hash="#login",a()}}function S(){const h=t.querySelector('[data-role="nav-list"]');h&&(h.innerHTML=oe(),k())}function G(){t.querySelector('[data-role="org-popover"]')?.remove();const h=t.querySelector('[data-role="org-menu-btn"]');if(h&&h.setAttribute("aria-expanded",String(B)),!B)return;const d=document.createElement("div");d.innerHTML=_().trim();const E=d.firstElementChild;E&&(t.appendChild(E),X())}function k(){t.querySelectorAll("[data-route]").forEach(h=>{h.addEventListener("click",()=>{const d=h.dataset.route;d===r&&!C||(r=d,C=!1,B=!1,window.location.hash=`#${r}`,u(!0))})})}async function ee(h){if(!e.switchOrganization)return;await e.switchOrganization(h),await ne();const d=await e.getSpatialTree(),E=d.projects[0],O=E?d.buildings.find(Fe=>Fe.projectId===E.id):void 0,ve=O?d.floors.find(Fe=>Fe.buildingId===O.id&&Fe.id===g.floorId)??d.floors.find(Fe=>Fe.buildingId===O.id):void 0;Ge(E&&O&&ve?{level:"floor",projectId:E.id,buildingId:O.id,floorId:ve.id}:E&&O?{level:"building",projectId:E.id,buildingId:O.id}:E?{level:"project",projectId:E.id}:{level:"all-projects"}),B=!1,H=!1,C=!1,await u(!0),pe()}function X(){t.querySelectorAll("[data-pop-org]").forEach(h=>{h.addEventListener("click",()=>{const d=h.dataset.popOrg;if(d){if(d===se){B=!1,G();return}ee(d)}})}),t.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",h=>{h.stopPropagation(),H=!H,G(),H&&t.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),t.querySelector("[data-create-org-form]")?.addEventListener("submit",async h=>{if(h.preventDefault(),!e.createOrganization)return;const d=new FormData(h.currentTarget),E=String(d.get("orgName")??"").trim();if(!E)return;const O=await e.createOrganization(E);await ee(O.id)}),t.querySelectorAll('[data-pop-act="go-account"]').forEach(h=>{h.addEventListener("click",()=>{B=!1,H=!1,C=!1,r="account",window.location.hash="#account",u(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{f()}),t.querySelectorAll("[data-pop-role]").forEach(h=>{h.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const d=h.dataset.popRole;B=!1,H=!1,C=!1,n=await e.switchDemoRole(d),await u(!0)})})}async function u(h){const d=t.querySelector('[data-role="main-stage"]');if(!h&&d){const O=t.querySelector(".pacom-nav-rail");O&&(O.classList.toggle("is-collapsed",A),O.classList.toggle("is-mobile-open",C));const ve=t.querySelector('[data-role="mobile-scrim"]');ve&&ve.classList.toggle("is-open",C),G();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${de("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${It[r]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${_e(n.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${C?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${A?"is-collapsed":""} ${C?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Wa}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${A?"展开侧栏":"收起侧栏"}" aria-label="${A?"展开侧栏":"收起侧栏"}">
              ${de("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${de("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${oe()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${r==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${B}" title="${_e(ge().name)} · ${_e(n.displayName)}">
              ${ie(ge())}
              <span class="pacom-org-name">${_e(ge().name)}</span>
              ${de("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{A=!A,B=!1,localStorage.setItem(Pt,A?"1":"0");const O=t.querySelector(".pacom-nav-rail"),ve=t.querySelector('[data-role="toggle-sidebar"]');O&&O.classList.toggle("is-collapsed",A),ve&&(ve.title=A?"展开侧栏":"收起侧栏",ve.setAttribute("aria-label",ve.title),ve.innerHTML=de("panel-left",16)),G()}),t.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{B=!1,G(),R=!0,be()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{C=!C,u(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{C=!1,B=!1,u(!1)}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",O=>{O.stopPropagation(),B=!B,G()}),k(),G(),be();const E=t.querySelector('[data-role="main-stage"]');E&&await le(E)}const Q=h=>{const d=h.target;B&&!d?.closest('[data-role="org-popover"]')&&!d?.closest('[data-role="org-menu-btn"]')&&(B=!1,G())},Le=h=>{if((h.metaKey||h.ctrlKey)&&h.key.toLowerCase()==="k"){h.preventDefault(),B=!1,G(),R=!R,be();return}h.key==="Escape"&&(R?(R=!1,be()):B?(B=!1,G()):C&&(C=!1,u(!1)))},$e=()=>{r=St(),B=!1,C=!1,R=!1,u(!0),pe()};function re(){document.removeEventListener("click",Q),document.removeEventListener("keydown",Le),window.removeEventListener("hashchange",$e)}document.addEventListener("click",Q),document.addEventListener("keydown",Le),window.addEventListener("hashchange",$e),await u(!0),pe()}const Ka=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Ya='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Xa='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',nt=de("x",16),Bt={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},Ja={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Qa(t){const e=t.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:t}function Ze(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function _t(t,e,o){t.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,n=!1,r="",A="",C="",B="",H=!1,M={},se="",ae=!1,R="",T=0,N=null,J=null,ge="privacy",ie="",ne="",pe="";const oe=e.mode==="demo"&&typeof e.switchDemoRole=="function";function Y(){N!==null&&(window.clearInterval(N),N=null),t.classList.remove("bare-login")}function we(){T=60,N!==null&&window.clearInterval(N),N=window.setInterval(()=>{T-=1,T<=0&&(T=0,N!==null&&(window.clearInterval(N),N=null));const f=t.querySelector('[data-act="send-sms"]');f&&(f.disabled=T>0,f.textContent=T>0?`${T} 秒后重发`:R?"重新获取":"获取验证码")},1e3)}function be(){if(!J)return"";if(J==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${nt}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Ze(ne)}" />
                  </div>
                </div>
                ${pe?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${Ze(pe)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(J==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${nt}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                请联系所在机构管理员获取邀请码，或通过支持邮箱联系开通新机构账户。
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${oe?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">快捷登录</button>':""}
            </div>
          </section>
        </div>
      `;if(J==="legal"){const f=Bt[ge],S=["privacy","terms","service"].map(G=>`<button type="button" role="tab" aria-selected="${ge===G}" class="au-legal-tab ${ge===G?"is-active":""}" data-act="switch-legal" data-tab="${G}">${Bt[G].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${nt}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${S}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${f.items.map(G=>`<li>${Ze(G)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return J==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${nt}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${ie||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:J==="demoRoles"&&oe?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择身份进入</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${nt}</button>
            </div>
            <div class="db">
              <p class="au-dlead">选择对应岗位视角进入广州国家实验室工作台。</p>
              <div class="au-choice-list">
                ${Object.keys(Pe).map(f=>{const S=Pe[f];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${f}">
                        <div>
                          <b>${Ze(S.roleLabel)} · ${Ze(S.displayName)}</b>
                          <small>${Ze(Ja[f])}</small>
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
      `:""}function _(){const f=a?`
        <div class="au-field ${M.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ze(C)}" aria-invalid="${M.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${T>0?"disabled":""}>
              ${T>0?`${T} 秒后重发`:R?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Ze(M.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${R?`验证码已发送至 ${Ze(Qa(R))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${M.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ze(r)}" aria-invalid="${M.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Ze(M.id??"")}</p>
        </div>
      `,S=a?`
        <div class="au-field ${M.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ze(B)}" aria-invalid="${M.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Ze(M.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${M.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${n?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ze(A)}" aria-invalid="${M.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${n?"隐藏密码":"显示密码"}">
              ${n?Xa:Ya}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Ze(M.pwd??"")}</p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Ka}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${ae?"disabled":""}>
                  ${f}
                  ${S}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${se?"":"hidden"}>${Ze(se)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${H?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${ae?"disabled":""}>
                    ${ae?"正在登录…":"登录"}
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
                ${oe?`<div class="au-demo-bar">
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
      ${be()}
    `,le()}function le(){const f=t.querySelector("#au-id"),S=t.querySelector("#au-pwd"),G=t.querySelector("#au-sphone"),k=t.querySelector("#au-scode"),ee=t.querySelector('input[name="keep"]');f?.addEventListener("input",()=>{if(r=f.value,M.id||se){delete M.id,se="",f.closest(".au-field")?.classList.remove("bad");const X=t.querySelector("#au-id-err");X&&(X.textContent="");const u=t.querySelector("#au-login-ferr");u&&(u.hidden=!0)}}),S?.addEventListener("input",()=>{if(A=S.value,M.pwd||se){delete M.pwd,se="",S.closest(".au-field")?.classList.remove("bad");const X=t.querySelector("#au-pwd-err");X&&(X.textContent="");const u=t.querySelector("#au-login-ferr");u&&(u.hidden=!0)}}),G?.addEventListener("input",()=>{if(C=G.value,M.sphone||se){delete M.sphone,se="",G.closest(".au-field")?.classList.remove("bad");const X=t.querySelector("#au-sphone-err");X&&(X.textContent="");const u=t.querySelector("#au-login-ferr");u&&(u.hidden=!0)}}),k?.addEventListener("input",()=>{if(B=k.value.replace(/\D/g,"").slice(0,6),k.value=B,M.scode||se){delete M.scode,se="",k.closest(".au-field")?.classList.remove("bad");const X=t.querySelector("#au-scode-err");X&&(X.textContent="");const u=t.querySelector("#au-login-ferr");u&&(u.hidden=!0)}}),ee?.addEventListener("change",()=>{H=ee.checked}),t.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{n=!n,_(),t.querySelector("#au-pwd")?.focus()}),t.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,M={},se="",_(),t.querySelector(a?"#au-sphone":"#au-id")?.focus()}),t.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const X=C.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(X)){M={sphone:"请输入有效的手机号码"},_(),t.querySelector("#au-sphone")?.focus();return}M={},R=X,we(),_(),t.querySelector("#au-scode")?.focus()}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async X=>{if(X.preventDefault(),!ae){if(M={},se="",a?(C.trim()||(M.sphone="请输入手机号码"),/^\d{6}$/.test(B.trim())||(M.scode="请输入 6 位验证码")):(r.trim()||(M.id="请输入电子邮箱或手机号码"),A||(M.pwd="请输入密码")),Object.keys(M).length>0){_();const u=Object.keys(M)[0];t.querySelector(`#au-${u}`)?.focus();return}ae=!0,_();try{const u=await e.login({account:(a?C:r).trim(),password:a?B.trim():A});Y(),o(u)}catch(u){ae=!1,se=u instanceof Error?u.message:"账户或密码不正确",_()}}}),t.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{ne=r.trim(),pe="",J="reset",_(),t.querySelector("#au-rs-id")?.focus()}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{J="register",_()}),t.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{J="legal",_()}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{ie="",J="contact",_()}),t.querySelectorAll('[data-act="open-demo-roles"]').forEach(X=>{X.addEventListener("click",()=>{J="demoRoles",_()})}),t.querySelectorAll('[data-act="close-modal"]').forEach(X=>{X.addEventListener("click",()=>{J=null,_()})}),t.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",X=>{X.target===X.currentTarget&&(J=null,_())}),t.querySelectorAll('[data-act="switch-legal"]').forEach(X=>{X.addEventListener("click",()=>{const u=X.dataset.tab;u&&(ge=u,_())})}),t.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),ie="已复制"}catch{ie="support@pacom.cn"}_()}),t.querySelector("#au-reset-form")?.addEventListener("submit",X=>{X.preventDefault(),ne=t.querySelector("#au-rs-id")?.value.trim()??"",ne?pe="请联系机构管理员重置账号密码，或确认后查收重置邮件。":pe="请输入电子邮箱或手机号码",_()}),t.querySelectorAll('[data-act="pick-demo-role"]').forEach(X=>{X.addEventListener("click",async()=>{const u=X.dataset.roleId;if(!u||!e.switchDemoRole)return;const Q=await e.switchDemoRole(u);Y(),o(Q)})})}_()}async function es(){const t=document.getElementById("app");if(t)try{const e=da(),o=await e.getSession(),a=async n=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Ga(t,e,n,()=>{_t(t,e,r=>{a(r)})})};if(!o||window.location.hash==="#login"){_t(t,e,n=>{a(n)});return}await a(o)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}es();
//# sourceMappingURL=index-C6wSqk-y.js.map
