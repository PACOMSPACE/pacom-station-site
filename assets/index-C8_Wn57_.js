(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const E of r.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&s(E)}).observe(document,{childList:!0,subtree:!0});function o(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(l){if(l.ep)return;l.ep=!0;const r=o(l);fetch(l.href,r)}})();const b={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"};function Jt(){const t="2026-11-25T09:00:00Z",e=[];for(let r=1;r<=22;r+=1){const E=r===7?b.floorId:r===8?b.lockedFloor8Id:r===6?b.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${r}`,A=String(r).padStart(2,"0");e.push({id:E,buildingId:b.buildingId,kind:"above",level:r,name:`${r}F`,areaSqm:r===7?1383.1:r===1?2680:r<=4?1920:1480,plan:{floorId:E,imageUrl:`./media/floors/e/${A}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const o="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";e.push({id:o,buildingId:b.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:o,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}});const s=[];for(let r=1;r<=12;r+=1){const E=`structure-f-above-${r}`,A=String(r).padStart(2,"0");s.push({id:E,buildingId:b.buildingFId,kind:"above",level:r,name:`${r}F`,areaSqm:r===1?2450:r<=3?2100:1580,plan:{floorId:E,imageUrl:`./media/floors/f/${A}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const l="structure-f-roof-1";return s.push({id:l,buildingId:b.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:l,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}}),{projects:[{id:b.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"},{id:b.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:b.buildingId,projectId:b.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:b.buildingFId,projectId:b.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...e,...s],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:b.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:b.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:b.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:b.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:o,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:l,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Nt=Jt(),pt=Nt.floors.map(t=>t.id),Oe={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[b.projectId,b.project1Id],allowedBuildingIds:[b.buildingId,b.buildingFId],allowedFloorIds:[...pt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[b.projectId],allowedBuildingIds:[b.buildingId,b.buildingFId],allowedFloorIds:[...pt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[b.projectId],allowedBuildingIds:[b.buildingId],allowedFloorIds:[b.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[b.projectId],allowedBuildingIds:[b.buildingId,b.buildingFId],allowedFloorIds:[...pt],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[b.projectId],allowedBuildingIds:[b.buildingId],allowedFloorIds:[b.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},st="pacom.web.demo.role",St="pacom.web.demo.spatial.v5",It="pacom.web.demo.orgs.v1",kt="pacom.web.demo.activeOrg.v1",Ze="org-gzlab";class ea{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){this.orgs=this.loadOrgs();const e=typeof localStorage<"u"?localStorage.getItem(kt):null,o=this.orgs.find(r=>r.id===e)??this.orgs[0];this.activeOrgId=o.id,this.spatial=o.spatial,this.syncAdminScopesFromSpatial();const s=typeof sessionStorage<"u"?sessionStorage.getItem(st):null;s&&Oe[s]&&(this.activeSession=structuredClone(Oe[s]));const l=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:b.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:l,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:b.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:b.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:b.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:l,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:l,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:l,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:b.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:l,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:b.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:l,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:l,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:l,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:l},{id:"conn-e7f-dali",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:l},{id:"conn-e7f-modbus",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:b.projectId,floorId:b.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:b.projectId,floorId:b.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:b.projectId,floorId:b.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:b.projectId,floorId:b.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:b.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:b.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:b.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:l,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:b.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:b.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:b.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:b.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(Oe).map((r,E)=>({userId:r.userId,displayName:r.displayName,email:`${r.role.replaceAll("_",".")}@gzlab.ac.cn`,role:r.role,roleLabel:r.roleLabel,scopeSummary:r.scope.allowedZoneIds?.length?`E栋 7F（${r.scope.allowedZoneIds.length} 个我的区域）`:`${r.scope.allowedProjectIds.length} 项目 / ${r.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:E===0?l:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,o,s,l,r){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:o,endpoint:s,request:r,response:l}),this.traces.length>40&&this.traces.pop()}pushAudit(e,o,s,l){const r=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:r?.displayName??"anonymous",role:r?.role??"member",action:e,target:o,result:s,detail:l})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const o=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(Oe[o]),sessionStorage.setItem(st,o),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(st),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(Oe[e]),sessionStorage.setItem(st,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(St);if(e){const o=JSON.parse(e);if(Array.isArray(o?.projects)&&Array.isArray(o?.buildings)&&Array.isArray(o?.floors)&&Array.isArray(o?.zones))return o}}}catch{}return structuredClone(Nt)}loadOrgs(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(It);if(e){const o=JSON.parse(e);if(Array.isArray(o)&&o.length>0&&o.every(s=>s?.id&&s?.name&&Array.isArray(s?.spatial?.projects)))return o}}}catch{}return[{id:Ze,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const e=this.orgs.find(o=>o.id===this.activeOrgId);e&&(e.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(It,JSON.stringify(this.orgs)),localStorage.setItem(kt,this.activeOrgId),this.activeOrgId===Ze&&localStorage.setItem(St,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(e=>({id:e.id,name:e.name,projectCount:e.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}async switchOrganization(e){const o=this.orgs.find(s=>s.id===e);if(!o)throw new Error(`404 NOT_FOUND: 机构 ${e} 不存在`);this.activeOrgId=o.id,this.spatial=o.spatial,this.persistSpatial()}async createOrganization(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权新建机构`);const s=e.trim()||"新建机构",l={id:`org-${Date.now().toString(36)}`,name:s,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(l),this.activeOrgId=l.id,this.spatial=l.spatial,this.persistSpatial(),this.pushAudit("org.create",l.id,"success",s),{id:l.id,name:l.name,projectCount:0}}syncAdminScopesFromSpatial(){const e=this.spatial.projects.map(l=>l.id),o=this.spatial.buildings.map(l=>l.id),s=this.spatial.floors.map(l=>l.id);this.activeOrgId===Ze&&(Oe.org_admin.scope.allowedProjectIds=[...e],Oe.org_admin.scope.allowedBuildingIds=[...o],Oe.org_admin.scope.allowedFloorIds=[...s],Oe.project_admin.scope.allowedBuildingIds=[...o],Oe.project_admin.scope.allowedFloorIds=[...s],Oe.commissioning_engineer.scope.allowedBuildingIds=[...o],Oe.commissioning_engineer.scope.allowedFloorIds=[...s]),this.activeSession&&((this.activeOrgId!==Ze||this.activeSession.role==="org_admin")&&(this.activeSession.scope.allowedProjectIds=[...e]),(this.activeOrgId!==Ze||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin"||this.activeSession.role==="commissioning_engineer")&&(this.activeSession.scope.allowedBuildingIds=[...o],this.activeSession.scope.allowedFloorIds=[...s]))}async getSpatialTree(){const e=this.requireSession();if(this.activeOrgId!==Ze){const V=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:V.projects.length,buildings:V.buildings.length,floors:V.floors.length}),V}const o=this.spatial.projects.filter(V=>e.scope.allowedProjectIds.includes(V.id)),s=this.spatial.buildings.filter(V=>e.scope.allowedBuildingIds.includes(V.id)),l=new Set(s.map(V=>V.id)),r=this.spatial.floors.filter(V=>l.has(V.buildingId)),E=new Set(r.map(V=>V.id)),A=this.spatial.zones.filter(V=>E.has(V.floorId)),N=structuredClone({projects:o,buildings:s,floors:r,zones:A});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:N.projects.length,buildings:N.buildings.length,floors:N.floors.length}),N}async createProject(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权创建项目`);const s={id:`project-${Date.now().toString(36)}`,name:e.name.trim()||"新建项目",city:e.city?.trim()||"广州市",address:e.address?.trim()||"",timezone:"Asia/Shanghai",location:e.location,imageUrl:e.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(s),o.scope.allowedProjectIds.includes(s.id)||o.scope.allowedProjectIds.push(s.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",s,e),this.pushAudit("project.create",s.id,"success",s.name),structuredClone(s)}async updateProject(e,o){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改项目配置`);const l=this.spatial.projects.find(r=>r.id===e);if(!l)throw new Error(`404 NOT_FOUND: 项目 ${e} 不存在`);return o.name!==void 0&&(l.name=o.name.trim()||l.name),o.city!==void 0&&(l.city=o.city.trim()),o.address!==void 0&&(l.address=o.address.trim()),o.location!==void 0&&(l.location=o.location),o.imageUrl!==void 0&&(l.imageUrl=o.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${e}`,l,o),this.pushAudit("project.update",e,"success",l.name),structuredClone(l)}async deleteProject(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权删除项目`);if(e===b.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const s=new Set(this.spatial.buildings.filter(r=>r.projectId===e).map(r=>r.id)),l=new Set(this.spatial.floors.filter(r=>s.has(r.buildingId)).map(r=>r.id));this.spatial.projects=this.spatial.projects.filter(r=>r.id!==e),this.spatial.buildings=this.spatial.buildings.filter(r=>r.projectId!==e),this.spatial.floors=this.spatial.floors.filter(r=>!s.has(r.buildingId)),this.spatial.zones=this.spatial.zones.filter(r=>!l.has(r.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${e}`,{ok:!0}),this.pushAudit("project.delete",e,"success")}async upsertBuilding(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权维护楼宇`);let s=e.id?this.spatial.buildings.find(l=>l.id===e.id):void 0;return s?(s.name=e.name.trim()||s.name,s.aboveFloors=Math.max(0,e.aboveFloors),s.belowFloors=Math.max(0,e.belowFloors),s.hasRoof=e.hasRoof,e.areaSqm!==void 0&&(s.areaSqm=e.areaSqm),e.imageUrl!==void 0&&(s.imageUrl=e.imageUrl)):(s={id:`building-${Date.now().toString(36)}`,projectId:e.projectId,name:e.name.trim()||"新建楼宇",aboveFloors:Math.max(1,e.aboveFloors),belowFloors:Math.max(0,e.belowFloors),hasRoof:e.hasRoof,areaSqm:e.areaSqm??null,imageUrl:e.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(s)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",s,e),this.pushAudit("building.upsert",s.id,"success",s.name),structuredClone(s)}async deleteBuilding(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权删除楼宇`);if(e===b.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const s=new Set(this.spatial.floors.filter(l=>l.buildingId===e).map(l=>l.id));this.spatial.buildings=this.spatial.buildings.filter(l=>l.id!==e),this.spatial.floors=this.spatial.floors.filter(l=>l.buildingId!==e),this.spatial.zones=this.spatial.zones.filter(l=>!s.has(l.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${e}`,{ok:!0}),this.pushAudit("building.delete",e,"success")}async upsertFloor(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权维护楼层`);const s=new Date().toISOString();let l=e.id?this.spatial.floors.find(r=>r.id===e.id):void 0;if(l)l.name=e.name.trim()||l.name,l.kind=e.kind,l.level=e.level,e.areaSqm!==void 0&&(l.areaSqm=e.areaSqm),e.planImageUrl!==void 0&&(l.plan=e.planImageUrl?{floorId:l.id,imageUrl:e.planImageUrl,planVersion:(l.plan?.planVersion??0)+1,updatedAt:s}:null);else{const r=`floor-${e.buildingId.slice(-6)}-${e.kind}-${Math.abs(e.level)}-${Date.now().toString(36).slice(-3)}`;l={id:r,buildingId:e.buildingId,kind:e.kind,level:e.level,name:e.name.trim()||`${e.level}F`,areaSqm:e.areaSqm??null,plan:e.planImageUrl?{floorId:r,imageUrl:e.planImageUrl,planVersion:1,updatedAt:s}:null},this.spatial.floors.push(l),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(l.id)&&this.activeSession.scope.allowedFloorIds.push(l.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:l.id,name:l.name,hasPlan:!!l.plan}),this.pushAudit("floor.upsert",l.id,"success",l.name),structuredClone(l)}async deleteFloor(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权删除楼层`);if(e===b.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(s=>s.id!==e),this.spatial.zones=this.spatial.zones.filter(s=>s.floorId!==e),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${e}`,{ok:!0}),this.pushAudit("floor.delete",e,"success")}async upsertZone(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权维护功能区`);let s=e.id?this.spatial.zones.find(l=>l.id===e.id):void 0;return s?(s.name=e.name.trim()||s.name,s.category=e.category):(s={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:e.floorId,name:e.name.trim(),category:e.category},this.spatial.zones.push(s)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",s),this.pushAudit("zone.upsert",s.id,"success",s.name),structuredClone(s)}async deleteZone(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(s=>s.id!==e),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${e}`,{ok:!0}),this.pushAudit("zone.delete",e,"success")}async copyZonesToFloors(e,o){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权复制功能区`);const l=this.spatial.floors.find(A=>A.id===e),r=this.spatial.zones.filter(A=>A.floorId===e);if(!l||r.length===0)return 0;let E=0;for(const A of o){if(A===e)continue;const N=this.spatial.floors.find(B=>B.id===A);if(!N)continue;const V=new Set(this.spatial.zones.filter(B=>B.floorId===A).map(B=>B.name));for(const B of r){const re=B.name.replace(new RegExp(`^${l.name}\\s*`,"i"),""),ee=`${N.name} ${re}`.trim();V.has(ee)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:A,name:ee,category:B.category}),V.add(ee),E+=1)}}return E>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:e,targetCount:o.length,added:E}),E}async getFloorDevices(e){const o=this.requireSession();if(this.activeOrgId!==Ze)return[];if(!o.scope.allowedFloorIds.includes(e)){const l={code:"FORBIDDEN",status:403,message:`当前角色「${o.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,l),this.pushAudit("floor.read",e,"denied",l.message),new Error(`403 FORBIDDEN: ${l.message}`)}if(e!==b.floorId)return[];let s=structuredClone(this.devices);return o.scope.allowedZoneIds?.length&&(s=s.filter(l=>l.logicalZoneId&&o.scope.allowedZoneIds.includes(l.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:s.length}),s}async dispatchControlBatch(e){const o=this.requireSession();if(!o.scope.canControlDevices||!o.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权下发控制指令`);const s=`batch-e7f-${Date.now().toString(36)}`,l={batchId:s,floorId:e.floorId,createdBy:o.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(r=>({deviceId:r.deviceId,command:r.command,targetValue:r.targetValue,status:"queued"}))};return this.batches.set(s,l),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",l,e),this.pushAudit("control.dispatch",s,"success",`下发 ${e.targets.length} 台设备`),l.receipts.forEach((r,E)=>{const A=this.devices.find(N=>N.id===r.deviceId);setTimeout(()=>{r.status="dispatched",r.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:s,deviceId:r.deviceId,status:"dispatched",at:r.dispatchedAt})},280+E*120),setTimeout(()=>{const N=new Date().toISOString();!A||A.connectivity==="offline"?(r.status="timeout",r.errorCode="GATEWAY_READBACK_TIMEOUT",r.errorMessage="设备离线，网关未收到回读确认",r.verifiedAt=N):(r.status="verified_success",r.observedValue=r.targetValue,r.verifiedAt=N,this.applyObservedTelemetry(A,r.command,r.targetValue,N)),this.emit({type:"control.receipt.updated",batchId:s,deviceId:r.deviceId,status:r.status,observedValue:r.observedValue,at:N})},900+E*220)}),structuredClone(l)}applyObservedTelemetry(e,o,s,l){o==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:s,collectedAt:l,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(s)>0,collectedAt:l,stale:!1})):(o==="lighting.power"||o==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:s,collectedAt:l,stale:!1}:o==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:s,collectedAt:l,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:l,values:{[o]:s}})}async getControlBatch(e){this.requireSession();const o=this.batches.get(e);if(!o)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(o)}async listAlarms(e){const o=this.requireSession();return this.activeOrgId!==Ze?[]:!o.scope.allowedFloorIds.includes(e)||e!==b.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,o){const s=this.requireSession();if(!s.scope.canManageAlarms){const r=`角色「${s.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",r),new Error(`403 FORBIDDEN: ${r}`)}const l=this.alarms.find(r=>r.id===e);if(!l)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return l.status="acknowledged",l.acknowledgedAt=new Date().toISOString(),l.acknowledgedBy=s.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,l,{note:o}),this.pushAudit("alarm.acknowledge",e,"success",o),this.emit({type:"alarm.changed",floorId:l.floorId,alarmId:e,status:"acknowledged",at:l.acknowledgedAt}),structuredClone(l)}async listWorkOrders(e){const o=this.requireSession();return this.activeOrgId!==Ze?[]:!o.scope.allowedFloorIds.includes(e)||e!==b.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const o=this.requireSession();if(!o.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权创建工单`);const s=new Date().toISOString(),l={id:`wo-e7f-${Date.now().toString(36)}`,projectId:b.projectId,buildingId:b.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:s,updatedAt:s};if(this.workOrders.unshift(l),e.alarmId){const r=this.alarms.find(E=>E.id===e.alarmId);r&&(r.workOrderId=l.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",l,e),this.pushAudit("work_order.create",l.id,"success",l.title),structuredClone(l)}async updateWorkOrderStatus(e,o){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权流转工单`);const l=this.workOrders.find(r=>r.id===e);if(!l)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return l.status=o,l.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,l,{status:o}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${o}`),structuredClone(l)}async updateDevicePlanPoint(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权编辑图纸标点`);const s=this.devices.find(l=>l.id===e.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(s.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${s.version}，请刷新后重试`);return s.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},s.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,s,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${s.planPoint.x}, ${s.planPoint.y})`),structuredClone(s)}async updateDeviceHardwareBinding(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权修改硬件绑定`);const s=this.devices.find(r=>r.id===e.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(s.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${s.version}）`);const l=new Date().toISOString();return s.physicalInstalled=e.physicalInstalled,s.physicalVerifiedAt=e.physicalInstalled?l:null,s.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:l,boundBy:o.displayName},s.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,s,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(s)}async listConnections(e){return this.requireSession(),this.activeOrgId!==Ze?[]:structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),this.activeOrgId!==Ze?[]:structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,o){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权冻结交付批次`);const l=this.devices.filter(E=>E.physicalInstalled&&E.hardwareBinding).length,r={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:b.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:l,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:s.displayName,note:o||"例行交付基线冻结"};return this.deliveryBatches.unshift(r),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,r,{note:o}),this.pushAudit("delivery.freeze",r.id,"success",`${l}/${this.devices.length} 已现场核验`),structuredClone(r)}async getAnalysisReport(e,o,s){this.requireSession();const l=o==="today"?1:o==="7d"?7:30,E={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*l)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*l).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(V=>V.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*l).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*l).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*l).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],A=o==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],N={category:e,range:o,scopeId:s,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:E.kpis,unit:E.unit,series:E.base.map((V,B)=>({label:A[B],value:Math.round(V*(e==="energy"||e==="carbon"?l/2+.5:1)),baseline:Math.round(V*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:E.base[3],unit:E.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:E.base[4],unit:E.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:E.base[1],unit:E.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${o}&scopeId=${s}`,{kpis:N.kpis.length}),N}async listScenes(e){return this.requireSession(),this.activeOrgId!==Ze?[]:structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const s={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(s),this.record("REST","createScene","POST /api/v1/scenes",s,e),this.pushAudit("scene.create",s.id,"success",s.name),structuredClone(s)}async executeScene(e){const o=this.scenes.find(l=>l.id===e);if(!o)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const s=await this.dispatchControlBatch({floorId:o.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:o.actions,reason:`触发场景：${o.name}`});return o.lastExecutedAt=new Date().toISOString(),o.lastBatchId=s.batchId,s}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:b.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,o,s){this.requireSession();const l=s>=this.calendar.nightGuardStart?`下班时间 ${s} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,r=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${o} - ${s}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${o} (-30m) ~ ${s} (+30m)`,conflictWarning:l},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:l}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",r,{workdayStart:o,workdayEnd:s}),r}async saveWorkCalendar(e,o,s,l){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权修改运行日历`);if(this.calendar.version!==l)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(o>=s)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:o,workdayEnd:s,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:o,workdayEnd:s,expectedVersion:l}),this.pushAudit("settings.calendar",b.projectId,"success",`${o}-${s}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,o,s){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权启停运行规则`);const r=this.rules.find(E=>E.id===e);if(!r)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(r.version!==s)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${r.version}）`);return r.enabled=o,r.version+=1,r.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,r,{enabled:o,expectedVersion:s}),this.pushAudit("settings.rule_toggle",e,"success",o?"启用":"停用"),structuredClone(r)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,o){const s=this.requireSession();if(s.role!=="org_admin"&&s.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const l=Oe[o],r={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:o,roleLabel:l.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(r),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",r,{email:e,role:o}),this.pushAudit("org.invite",e,"success",l.roleLabel),structuredClone(r)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,o){return e!==b.floorId?()=>{}:(this.listeners.add(o),()=>{this.listeners.delete(o)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${b.floorId}`,e),this.listeners.forEach(o=>o(e))}}function ta(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new ea}const aa={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"layout-dashboard":'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',waypoints:'<circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'};function sa(t){return t>=20?"1.5":t>=16?"1.75":t>=14?"2":"2.25"}function ge(t,e=16,o=""){const s=sa(e);return`<svg${o?` class="${o}"`:""} width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${s}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${aa[t]}</svg>`}let rt={level:"floor",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId};function et(){return rt}function He(t){return rt=t,rt}function Ne(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Et(t){const e=t.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面"))return 999;const o=e.match(/(-?\d+)/);if(!o)return 0;const s=Number(o[1]);return e.startsWith("B")?-Math.abs(s):s}function oa(t){if(t==="all")return{level:"all-projects"};const e=t.split(":");return e[0]==="project"&&e[1]?{level:"project",projectId:e[1]}:e[0]==="building"&&e[1]&&e[2]?{level:"building",projectId:e[1],buildingId:e[2]}:e[0]==="floor"&&e[1]&&e[2]&&e[3]?{level:"floor",projectId:e[1],buildingId:e[2],floorId:e[3]}:{level:"project",projectId:b.projectId}}function na(t,e,o){return o==="project"?t.level==="all-projects"?{level:"project",projectId:e.projects[0]?.id??b.projectId}:{level:"project",projectId:t.projectId}:o==="building"&&t.level==="floor"?{level:"building",projectId:t.projectId,buildingId:t.buildingId}:t}function Qe(t){const{tree:e,session:o,isOpen:s,searchKeyword:l}=t;if(e.projects.length===0)return'<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap"><span class="pacom-path-trigger is-static"><span class="pacom-path-muted">暂无项目</span></span></div>';const r=t.maxGranularity??"floor",E=t.activeAlarmCount??0,A=o.scope.allowedZoneIds?.length?o.scope.allowedZoneIds:null,N=e.floors.filter(M=>o.scope.allowedFloorIds.includes(M.id)),V=A||e.projects.length<=1&&e.buildings.length<=1&&N.length<=1?"floors-only":e.projects.length>1?"multi-project":e.buildings.length>1?"single-project-multi-building":"single-building",B=V==="multi-project"&&r!=="project",re=V==="multi-project"||V==="single-project-multi-building",ee=V!=="floors-only"&&r!=="project",z=r==="project"&&e.projects.length<=1||V==="floors-only"&&N.length<=1,q=na(t.scope??rt,e,r),D=q.level==="all-projects"?null:e.projects.find(M=>M.id===q.projectId)??e.projects[0],G=q.level==="building"||q.level==="floor"?e.buildings.find(M=>M.id===q.buildingId):null,xe=q.level==="floor"?e.floors.find(M=>M.id===q.floorId):null,te=[];if(q.level==="all-projects")te.push(`全部项目（${e.projects.length}）`);else if(q.level==="project")te.push(Ne(D?.name??"广实2号园"));else if(q.level==="building")D&&te.push(`<span class="pacom-path-muted">${Ne(D.name)}</span>`),te.push(Ne(G?.name??"E栋"));else{D&&V!=="floors-only"&&te.push(`<span class="pacom-path-muted">${Ne(D.name)}</span>`),G&&ee&&te.push(`<span class="pacom-path-muted">${Ne(G.name)}</span>`);const M=!ee&&G?`${G.name} ${xe?.name??"7F"}`:xe?.name??"7F";te.push(Ne(M))}const ue='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',de=z?`<span class="pacom-path-trigger is-static">${te.join(ue)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${s}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${te.join(ue)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${ge("chevron-down",12)}</span>
      </button>`;if(!s||z)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${de}</div>`;const R=l.trim().toLowerCase(),Ie=q.level==="all-projects"?e.projects[0]?.id??b.projectId:q.projectId,fe=q.level==="building"||q.level==="floor"?q.buildingId:e.buildings.find(M=>M.projectId===Ie)?.id??b.buildingId,we=e.projects.filter(M=>!R||M.name.toLowerCase().includes(R)),U=e.buildings.filter(M=>M.projectId===Ie&&(!R||M.name.toLowerCase().includes(R))),ne=[...e.floors.filter(M=>M.buildingId===fe)].sort((M,pe)=>Et(pe.name)-Et(M.name)).filter(M=>!R||M.name.toLowerCase().includes(R)),v=r==="project"||e.projects.length>1,S=r!=="project"&&re,T=r==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${de}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${ge("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${Ne(l)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${ge("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${v?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${B?`<button type="button" class="pacom-space-pop-item ${q.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${e.projects.length}）</span>
                        ${q.level==="all-projects"?ge("check",14):""}
                      </button>`:""}
                ${we.map(M=>{const pe=q.level==="project"&&q.projectId===M.id;return`<button type="button" class="pacom-space-pop-item ${pe?"is-active":""}" data-global-space-pick="project:${Ne(M.id)}">
                      <span>${Ne(M.name)}</span>
                      ${pe?ge("check",14):ge("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${S?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ne(e.projects.find(M=>M.id===Ie)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${q.level==="project"?"is-active":""}" data-global-space-pick="project:${Ne(Ie)}">
                  <span>全园区</span>
                  ${q.level==="project"?ge("check",14):""}
                </button>
                ${U.map(M=>{const pe=q.level==="building"&&q.buildingId===M.id;return`<button type="button" class="pacom-space-pop-item ${pe?"is-active":""}" data-global-space-pick="building:${Ne(M.projectId)}:${Ne(M.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ne(M.name)}</span>
                        ${M.id===b.buildingId&&E>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${pe?ge("check",14):ge("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${T?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ne(e.buildings.find(M=>M.id===fe)?.name??"楼宇")} · 楼层</div>
                ${ee?`<button type="button" class="pacom-space-pop-item ${q.level==="building"&&q.buildingId===fe?"is-active":""}" data-global-space-pick="building:${Ne(Ie)}:${Ne(fe)}">
                        <span>整栋</span>
                        ${q.level==="building"&&q.buildingId===fe?ge("check",14):""}
                      </button>`:""}
                ${ne.map(M=>{const pe=o.scope.allowedFloorIds.includes(M.id),K=q.level==="floor"&&q.floorId===M.id,p=M.id===b.floorId&&E>0;return`<button type="button" class="pacom-space-pop-item ${K?"is-active":""}" style="${pe?"":"opacity:0.5;"}" data-global-space-pick="floor:${Ne(Ie)}:${Ne(fe)}:${Ne(M.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ne(M.name)}</span>
                        ${p?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${K?ge("check",14):pe?M.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function tt(t,e){t.querySelectorAll("[data-global-space-toggle]").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation(),e.onToggle()})}),t.querySelector("[data-global-space-search]")?.addEventListener("input",s=>{e.onSearch(s.currentTarget.value)}),t.querySelectorAll("[data-global-space-pick]").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation();const r=s.dataset.globalSpacePick;if(!r)return;const E=He(oa(r));e.onPick(E)})})}const ut=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function la(t,e,o,s,l){let r="profile",E="directory",A=await e.listOrgMembers(),N=await e.listAuditLogs(),V="",B="all",re="all",ee="all",z=!1,q=!1,D=o.displayName,G=o.role==="org_admin"||o.role==="project_admin"?"设施运维总监":o.role==="commissioning_engineer"?"楼宇自控部署工程师":o.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",xe="138-0013-8072",te="",ue="";async function de(){[A,N]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),R()}function R(){const Ie=e.mode==="demo"&&typeof e.switchDemoRole=="function",fe=V.trim().toLowerCase(),we=A.filter(v=>B!=="all"&&v.role!==B?!1:fe?`${v.displayName} ${v.email} ${v.roleLabel} ${v.scopeSummary}`.toLowerCase().includes(fe):!0),U=N.filter(v=>{if(re==="success"&&v.result!=="success"||re==="denied"&&v.result==="success")return!1;if(ee!=="all"){const S=`${v.action} ${v.target}`.toLowerCase();if(ee==="control"&&!S.includes("control")&&!S.includes("scene")&&!S.includes("控制")||ee==="alarm"&&!S.includes("alarm")&&!S.includes("work")&&!S.includes("告警")||ee==="deploy"&&!S.includes("deploy")&&!S.includes("plan")&&!S.includes("hardware")&&!S.includes("部署"))return!1}return!0});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${r==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${r==="members"}" data-atab="members">成员与角色（${A.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${r==="audit"}" data-atab="audit">操作审计日志（${N.length}）</button>
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
            ${te?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${te}</span></div>`:""}
            ${ue?`<div class="pacom-alert-banner">${ue}</div>`:""}
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
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${D}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${G}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">告警接收手机号（SMS）</span>
                        <span class="pacom-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="pacom-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${xe}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
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

                ${Ie?`
                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">切换视角</h2>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(Oe).map(v=>{const S=Oe[v];return`
                              <button class="pacom-role-card ${v===o.role?"is-active":""}" data-switch-role="${v}">
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
                  ${z?`
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
                                ${Object.keys(Oe).map(v=>`<option value="${v}">${Oe[v].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <h2 class="pacom-section-title">${E==="directory"?"机构成员目录":"工作组与空间授权（Groups & Scope）"}</h2>
                        <div class="pacom-tabs" role="tablist" aria-label="成员与工作组切换">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="directory"}" data-msub="directory">成员目录（${A.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="groups"}" data-msub="groups">工作组（${ut.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${E==="directory"?`当前显示 ${we.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${E==="directory"?`
                        <div class="pacom-table-card">
                          <div class="pacom-table-toolbar">
                            <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" name="memberSearch" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${V}" />
                              <select class="pacom-select" name="memberRoleFilter" data-role-filter>
                                <option value="all" ${B==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(Oe).map(v=>`<option value="${v}" ${B===v?"selected":""}>${Oe[v].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${z?"收起邀请":"+ 邀请成员"}
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
                                ${we.map(v=>`
                                    <tr>
                                      <td>
                                        <div style="display:flex; align-items:center; gap:10px;">
                                          <span class="pacom-pop-avatar">${v.displayName.slice(0,1)}</span>
                                          <div>
                                            <div style="font-weight:500;">${v.displayName}</div>
                                            <div class="pacom-row-sub">${v.email}</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${v.roleLabel}</span></td>
                                      <td><span class="pacom-row-sub">${v.scopeSummary}</span></td>
                                      <td>
                                        <span class="pacom-badge ${v.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">
                                          ${v.status==="active"?"正常":v.status}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>`:`
                        ${q?`
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
                            <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1">${q?"收起表单":"+ 新建工作组"}</button>
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
                                ${ut.map(v=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${v.name}</div>
                                      <div class="pacom-row-sub">${v.membersSummary}</div>
                                    </td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${v.defaultRoleLabel}</span></td>
                                    <td><span class="pacom-row-sub">${v.locationScope}</span></td>
                                    <td><strong>${v.memberCount}</strong> 人</td>
                                    <td><span class="pacom-badge pacom-badge--accent">${v.notifyChannel}</span></td>
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
                          <option value="all" ${ee==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${ee==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${ee==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${ee==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${re==="all"}" data-audit-filter="all">全部（${N.length}）</button>
                          <button class="pacom-tab" aria-selected="${re==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${re==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${U.map(v=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${v.action}</div>
                                    ${v.detail?`<div class="pacom-row-sub">${v.detail}</div>`:""}
                                  </td>
                                  <td><code style="font-size:12px;">${v.target}</code></td>
                                  <td>${v.actor}</td>
                                  <td><span class="pacom-row-sub">${v.at.slice(0,19).replace("T"," ")}</span></td>
                                  <td>
                                    <span class="pacom-badge ${v.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                                      ${v.result==="success"?"成功":v.result}
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
    `,t.querySelectorAll("[data-atab]").forEach(v=>{v.addEventListener("click",()=>{r=v.dataset.atab,te="",ue="",R()})}),t.querySelectorAll("[data-msub]").forEach(v=>{v.addEventListener("click",()=>{E=v.dataset.msub??"directory",R()})}),t.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{q=!q,R()}),t.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",v=>{v.preventDefault();const S=new FormData(v.currentTarget),T=String(S.get("wgName")??"").trim(),M=String(S.get("wgRole")??"运行值班员"),pe=String(S.get("wgScope")??"").trim();!T||!pe||(ut.push({id:`wg-${Date.now()}`,name:T,defaultRoleLabel:M,locationScope:pe,memberCount:1,membersSummary:o.displayName,notifyChannel:"站内 + 邮件"}),q=!1,te=`已创建工作组「${T}」（授权空间：${pe}）。`,R())}),t.querySelector('[data-role="profile-form"]')?.addEventListener("submit",v=>{v.preventDefault();const S=new FormData(v.currentTarget);D=String(S.get("displayName")??"").trim()||o.displayName,G=String(S.get("jobTitle")??"").trim()||G,xe=String(S.get("phone")??"").trim()||xe,te=`已更新个人资料：${D}（${G}）· 告警短信接收号 ${xe}。`,R()}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",l()}),t.querySelectorAll("[data-switch-role]").forEach(v=>{v.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const S=await e.switchDemoRole(v.dataset.switchRole);s(S)})}),t.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{z=!z,R()}),t.querySelector("[data-member-search]")?.addEventListener("input",v=>{const S=v.currentTarget,T=S.selectionStart??S.value.length;V=S.value,R();const M=t.querySelector("[data-member-search]");M&&(M.focus(),M.setSelectionRange(T,T))}),t.querySelector("[data-role-filter]")?.addEventListener("change",v=>{B=v.currentTarget.value,R()}),t.querySelectorAll("[data-audit-filter]").forEach(v=>{v.addEventListener("click",()=>{re=v.dataset.auditFilter??"all",R()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",v=>{ee=v.currentTarget.value??"all",R()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async v=>{v.preventDefault(),ue="";const S=new FormData(v.currentTarget);try{await e.inviteOrgMember(String(S.get("email")??""),String(S.get("role"))),z=!1,await de()}catch(T){ue=T instanceof Error?T.message:String(T),R()}})}R()}const Ye={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},ia={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},ca={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function ra(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function da(t){return t.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:t.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function mt(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("vav")||t.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:e.includes("co₂")||e.includes("co2")||t.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function pa(t,e,o){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),l=s.get("alarm"),r=s.get("wo");let E=await e.getSpatialTree(),A=et(),N=!1,V="",B=[],re=[],ee=[],z=r?"workorders":"alarms",q="all",D="all",G="all",xe="impact",te=!1,ue="",de=l,R=r,Ie=null,fe=null,we="resolved";const U=new Set,ne=new Map,v=new Map,S=new Map,T=new Map;let M="",pe="";function K(le){const h=T.get(le.id);if(h)return h;const c=le.id.match(/(\d+)$/),I=`WO-2026-${c?c[1]:le.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,j={estCost:"¥ 450",actualCost:le.status==="closed"?"¥ 380":"--",cmmsNo:I,assigneeGroup:"暖通运维组",tasks:[{id:`${le.id}-t1`,label:"核查设备供电与现场指示灯状态",done:le.status!=="open"},{id:`${le.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:le.status==="resolved"||le.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:le.createdAt?le.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${I}）`}]};return T.set(le.id,j),j}async function p(){[B,re,ee]=await Promise.all([e.listAlarms(b.floorId),e.listWorkOrders(b.floorId),e.getFloorDevices(b.floorId).catch(()=>[])]),re.forEach(le=>K(le)),me()}function Y(le){if(!le)return{name:"楼层通用",zone:"E7F",dev:null};const h=ee.find(c=>c.id===le)??null;return h?{name:h.name,zone:(h.logicalZoneId?ca[h.logicalZoneId]:void 0)??"E7F",dev:h}:{name:le,zone:"E7F",dev:null}}function Le(le){const h=Y(le.deviceId).dev;h&&h.connectivity==="offline"?S.set(le.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${h.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):S.set(le.id,{verdict:"pass",summary:`自检通过（PASS）：「${h?.name??le.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),de=le.id,me()}function me(){const le=B.filter(u=>u.status==="active"&&!ne.has(u.id)),h=re.filter(u=>!K(u).cancelled&&(u.status==="open"||u.status==="assigned"||u.status==="in_progress")),c=B.filter(u=>u.status!=="active").length+v.size,I=0,j=ne.size,se=ue.trim().toLowerCase(),Ae=B.filter(u=>{const w=ne.has(u.id);if(q==="snoozed"){if(!w)return!1}else if(q==="active"){if(u.status!=="active"||w)return!1}else if(q==="acknowledged"){if(u.status!=="acknowledged")return!1}else if(w)return!1;if(G!=="all"&&u.severity!==G)return!1;if(!se)return!0;const ce=Y(u.deviceId);return`${u.title} ${u.message} ${ce.name} ${ce.zone} ${u.deviceId}`.toLowerCase().includes(se)}),qe=new Map;for(const u of Ae){const w=`${u.title} ${u.message}`.toLowerCase(),ce=w.includes("离线")||w.includes("modbus")||w.includes("通信"),he=te?ce?"root-gateway-modbus":u.deviceId:u.id,ye=ce?"根因：E7F 主控网关通信链路":`根因：${Y(u.deviceId).name}`,Me=qe.get(he)??{rootLabel:ye,items:[]};Me.items.push(u),qe.set(he,Me)}const ze=Array.from(qe.values());xe==="impact"&&ze.sort((u,w)=>mt(w.items[0]).costYuan-mt(u.items[0]).costYuan);const Te=re.filter(u=>{const w=K(u);if(D==="cancelled"){if(!w.cancelled)return!1}else if(w.cancelled||D==="open"&&(u.status==="resolved"||u.status==="closed")||D==="resolved"&&u.status!=="resolved"||D==="closed"&&u.status!=="closed")return!1;if(!se)return!0;const ce=Y(u.deviceId);return`${u.title} ${u.description} ${u.id} ${w.cmmsNo} ${ce.name}`.toLowerCase().includes(se)});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Qe({tree:E,session:o,scope:A,activeAlarmCount:le.length,isOpen:N,searchKeyword:V})}
            </div>

            <div class="pacom-header-meta">
              ${z==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${te}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${o.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${o.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${ge("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${z==="alarms"}" data-main-tab="alarms">实时告警（${B.length-j}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${z==="workorders"}" data-main-tab="workorders">运维工单（${re.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${z==="alarms"&&q==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${le.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${z==="workorders"&&D==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${h.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${z==="alarms"&&q==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${c}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${I}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${M?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${M}</span></div>`:""}
          ${pe?`<div class="pacom-alert-banner">${pe}</div>`:""}

          ${z==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${ue}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${G==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${G==="critical"?"selected":""}>严重</option>
                      <option value="major" ${G==="major"?"selected":""}>重要</option>
                      <option value="minor" ${G==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${xe==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${xe==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${q==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${q==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${q==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${q==="snoozed"}" data-status-pill="snoozed">已忽略（${j}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${U.size>0&&o.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${U.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${ze.length} 项</span>
                  </div>
                </div>
                ${ze.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${ze.map(u=>{const w=u.items[0],ce=ia[w.severity]??{label:w.severity,cls:"pacom-badge--neutral"},he=Y(w.deviceId),ye=da(w),Me=mt(w),Be=de===w.id,ve=ne.get(w.id),$e=!!ve,Ve=U.has(w.id),je=S.get(w.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${w.id}" data-check-alarm="${w.id}" ${Ve?"checked":""} ${w.status!=="active"||$e?"disabled":""} aria-label="选择 ${w.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${ce.cls}">${ce.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${w.title}</span>
                                      ${te?`<span class="pacom-badge pacom-badge--accent">${u.rootLabel}${u.items.length>1?` · 影响 ${u.items.length} 项`:""}</span>`:""}
                                      ${je?`<span class="pacom-badge ${je.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${je.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${w.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${he.name}</div>
                                    <div class="pacom-row-sub">${he.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${Me.costLabel}</div>
                                    <div class="pacom-row-sub">${Me.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${ye.duration}</div>
                                    <div class="pacom-row-sub" style="color:${ye.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${ye.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${$e?"pacom-badge--neutral":w.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${$e?`忽略 ${ve?.duration}`:w.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${$e?`<button class="pacom-btn" data-unsnooze="${w.id}">恢复监控</button>`:`
                                            ${w.status==="active"?`<button class="pacom-btn" data-mark-actioned="${w.id}" ${o.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${w.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${w.id}" ${o.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${w.id}">${Be?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${Be?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${ra(w)}
                                            </div>
                                            ${ve?`<div class="pacom-info-banner">忽略周期：${ve.duration} · 原因备注：${ve.reason}</div>`:""}
                                            ${je?`
                                                <div class="pacom-banner ${je.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${je.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${je.steps.map(Ge=>`<span>${Ge}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${w.id}</code> · 设备编号 <code>${w.deviceId}</code> · 关联工单 ${w.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${w.id}">单机自检（FTT）</button>
                                              ${!$e&&w.status==="active"?`<button class="pacom-btn" data-open-snooze="${w.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${w.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${w.deviceId}">定位设备 →</button>
                                            </div>
                                            ${Ie===w.id?`
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
              ${(()=>{const u=R?re.find(w=>w.id===R)??null:null;if(u){const w=Y(u.deviceId),ce=K(u),he=!!(ce.cancelled||u.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${u.id}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${u.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${ce.cmmsNo}</span>
                        ${ce.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${u.id}" data-wo-status="${u.id}" aria-label="更新工单状态" ${he?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(ye=>`<option value="${ye}" ${u.status===ye?"selected":""}>${Ye[ye]}</option>`).join("")}
                          <option value="cancelled" ${ce.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${fe===u.id?`
                        <form data-close-wo-form="${u.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${Ye[we]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${ce.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${ce.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${ce.actualCost==="--"?"":ce.actualCost}" />
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
                            ${ce.tasks.map(ye=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${ye.id}" data-wo-task="${u.id}" data-task-id="${ye.id}" ${ye.done?"checked":""} ${he?"disabled":""} />
                                    <span>${ye.label}</span>
                                  </span>
                                  ${ye.unit?`<span class="pacom-row-sub">实测：${ye.reading??"--"} ${ye.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${ce.history.map(ye=>`<span>• <span class="pacom-row-sub">${ye.at}</span> — ${ye.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${u.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${ce.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${w.name}（${w.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${ce.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${ce.estCost} / 实际 ${ce.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${ce.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${ce.solution??"待完单填写"}</span>
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
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${ue}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${D==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${D==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${D==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${D==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${D==="cancelled"}" data-wo-pill="cancelled">已取消</button>
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
                            ${Te.map(w=>{const ce=Y(w.deviceId),he=K(w),ye=!!(he.cancelled||w.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${w.title}</span>
                                        ${he.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${w.description} · <code>${w.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${ce.name}</div>
                                      <div class="pacom-row-sub">${ce.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${he.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${he.assigneeGroup} · 预估 ${he.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${w.id}" data-wo-status="${w.id}" aria-label="更新工单状态" ${ye?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Me=>`<option value="${Me}" ${w.status===Me?"selected":""}>${Ye[Me]}</option>`).join("")}
                                          <option value="cancelled" ${he.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${w.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${fe===w.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${w.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${Ye[we]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
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
    `,tt(t,{onToggle:()=>{N=!N,me(),N&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:u=>{V=u,me();const w=t.querySelector("[data-global-space-search]");w&&(w.focus(),w.setSelectionRange(u.length,u.length))},onPick:u=>{A=u,N=!1,me()}}),t.querySelectorAll("[data-main-tab]").forEach(u=>{u.addEventListener("click",()=>{z=u.dataset.mainTab??"alarms",M="",me()})}),t.querySelectorAll("[data-kpi-filter]").forEach(u=>{u.addEventListener("click",()=>{const w=u.dataset.kpiFilter;M="",w==="workorders"?(z="workorders",D=D==="open"?"all":"open"):(w==="active"||w==="acknowledged")&&(z="alarms",q=q===w?"all":w),me()})}),t.querySelectorAll("[data-status-pill]").forEach(u=>{u.addEventListener("click",()=>{q=u.dataset.statusPill??"all",me()})}),t.querySelectorAll("[data-wo-pill]").forEach(u=>{u.addEventListener("click",()=>{D=u.dataset.woPill??"all",me()})}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{M="",p()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{te=!te,me()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",u=>{G=u.currentTarget.value,me()}),t.querySelector("[data-alarm-sort]")?.addEventListener("change",u=>{xe=u.currentTarget.value??"impact",me()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",u=>{const w=u.currentTarget,ce=w.selectionStart??w.value.length;ue=w.value,me();const he=t.querySelector("[data-alarm-search]");he&&(he.focus(),he.setSelectionRange(ce,ce))}),t.querySelectorAll("[data-check-alarm]").forEach(u=>{u.addEventListener("change",()=>{const w=u.dataset.checkAlarm;w&&(u.checked?U.add(w):U.delete(w),me())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{pe="";const u=Array.from(U);try{for(const w of u)await e.acknowledgeAlarm(w,"告警中心批量确认"),v.set(w,"批量确认处置");U.clear(),M=`已批量确认 ${u.length} 条告警，未来 24 小时持续校验无复发。`,await p()}catch(w){pe=w instanceof Error?w.message:String(w),me()}}),t.querySelectorAll("[data-expand-alarm]").forEach(u=>{u.addEventListener("click",()=>{const w=u.dataset.expandAlarm??null;de=de===w?null:w,Ie=null,me()})}),t.querySelectorAll("[data-expand-wo]").forEach(u=>{u.addEventListener("click",()=>{const w=u.dataset.expandWo??null;R=R===w?null:w,me()})}),t.querySelectorAll("[data-run-ftt]").forEach(u=>{u.addEventListener("click",()=>{const w=B.find(ce=>ce.id===u.dataset.runFtt);w&&Le(w)})}),t.querySelectorAll("[data-open-snooze]").forEach(u=>{u.addEventListener("click",()=>{Ie=u.dataset.openSnooze??null,me()})}),t.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{Ie=null,me()}),t.querySelectorAll("[data-snooze-form]").forEach(u=>{u.addEventListener("submit",w=>{w.preventDefault();const ce=u.dataset.snoozeForm;if(!ce)return;const he=new FormData(u),ye=String(he.get("duration")??"24h"),Me=String(he.get("reason")??"").trim()||"现场核查中";ne.set(ce,{duration:ye,reason:Me}),U.delete(ce),Ie=null,M=`已限时忽略该告警（${ye} · ${Me}），可在「已忽略」页签中随时恢复。`,me()})}),t.querySelectorAll("[data-unsnooze]").forEach(u=>{u.addEventListener("click",()=>{const w=u.dataset.unsnooze;w&&(ne.delete(w),M="已恢复该告警的实时监控。",me())})}),t.querySelectorAll("[data-go-ts]").forEach(u=>{u.addEventListener("click",()=>{const w=u.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(w)}`})}),t.querySelectorAll("[data-locate-home]").forEach(u=>{u.addEventListener("click",()=>{const w=u.dataset.locateHome??"";window.location.hash=w?`#home?device=${encodeURIComponent(w)}`:"#home"})}),t.querySelectorAll("[data-mark-actioned]").forEach(u=>{u.addEventListener("click",async()=>{pe="";const w=u.dataset.markActioned;try{await e.acknowledgeAlarm(w,"现场自处理完成（Mark Actioned）"),v.set(w,"现场自处理完成"),U.delete(w),M="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await p()}catch(ce){pe=ce instanceof Error?ce.message:String(ce),me()}})}),t.querySelectorAll("[data-to-wo]").forEach(u=>{u.addEventListener("click",async()=>{pe="";const w=B.find(ce=>ce.id===u.dataset.toWo);if(w)try{await e.createWorkOrder({floorId:w.floorId,deviceId:w.deviceId,alarmId:w.id,title:`处置告警：${w.title}`,description:w.message}),M=`已将「${w.title}」转为运维工单并同步 CMMS。`,await p()}catch(ce){pe=ce instanceof Error?ce.message:String(ce),me()}})}),t.querySelectorAll("[data-wo-status]").forEach(u=>{u.addEventListener("change",async()=>{const w=u.dataset.woStatus,ce=u.value;if(pe="",ce==="cancelled"){const he=re.find(ye=>ye.id===w);if(he){const ye=K(he);ye.cancelled=!0,ye.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),M="工单已移入「已取消」分类并锁定编辑。",me()}return}if(ce==="resolved"||ce==="closed"){fe=w,we=ce,me();return}try{await e.updateWorkOrderStatus(w,ce);const he=re.find(ye=>ye.id===w);he&&K(he).history.unshift({at:"刚刚",text:`状态变更为「${Ye[ce]}」`}),M="工单状态已更新并写入审计日志。",await p()}catch(he){pe=he instanceof Error?he.message:String(he),await p()}})}),t.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{fe=null,me()}),t.querySelectorAll("[data-close-wo-form]").forEach(u=>{u.addEventListener("submit",async w=>{w.preventDefault();const ce=u.dataset.closeWoForm,he=new FormData(u),ye=String(he.get("cause")??"").trim(),Me=String(he.get("solution")??"").trim(),Be=String(he.get("actualCost")??"").trim();try{await e.updateWorkOrderStatus(ce,we);const ve=re.find($e=>$e.id===ce);if(ve){const $e=K(ve);$e.cause=ye,$e.solution=Me,Be&&($e.actualCost=Be),$e.history.unshift({at:"刚刚",text:`流转至「${Ye[we]}」· 根因：${ye}`})}fe=null,R=ce,M=`工单已更新为「${Ye[we]}」，根因与方案已沉淀归档。`,await p()}catch(ve){pe=ve instanceof Error?ve.message:String(ve),me()}})}),t.querySelectorAll("[data-wo-task]").forEach(u=>{u.addEventListener("change",()=>{const w=re.find(ye=>ye.id===u.dataset.woTask);if(!w)return;const he=K(w).tasks.find(ye=>ye.id===u.dataset.taskId);he&&(he.done=u.checked),me()})})}await p()}const ua=ge("chevron-down",12),ot=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],jt=[{id:b.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:b.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:b.projectId,label:"广实2号园（全园区）",factor:18.2}],ma={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},ga=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],Ke=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function gt(t,e=""){const o=(t??"").trim().toLowerCase();return!(!o||o.includes("%")||o.includes("°c")||o.includes("ppm")||o.includes("ms")||o.includes("m²")||o.includes("/m2")||o.includes("db")||o.includes("lx")||e.includes("率")||e.includes("均")||e.includes("强度")||e.includes("延迟"))}function nt(t,e){const o=t*e;return Math.abs(o)>=10?Math.round(o):Math.round(o*10)/10}function ba(t,e){const o=Number(String(t).replaceAll(",","")),s=e??"";return Number.isFinite(o)?s==="kWh"&&Math.abs(o)>=1e4?{value:(o/1e3).toFixed(1),unit:"MWh",title:`精确值：${o.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(o)?o.toLocaleString("en-US"):o.toLocaleString("en-US",{maximumFractionDigits:1}),unit:s,title:`${o.toLocaleString("en-US")} ${s}`.trim()}:{value:t,unit:s,title:`${t} ${s}`.trim()}}function va(t,e){if(e===1)return t;const o=gt(t.unit);return{...t,kpis:t.kpis.map(s=>{const l=Number(String(s.value).replaceAll(",",""));return!Number.isFinite(l)||!gt(s.unit,s.label)?s:{...s,value:String(nt(l,e))}}),series:o?t.series.map(s=>({...s,value:nt(s.value,e),...typeof s.baseline=="number"?{baseline:nt(s.baseline,e)}:{}})):t.series,zoneBreakdown:t.zoneBreakdown.map(s=>gt(s.unit)?{...s,value:nt(s.value,e)}:s)}}function fa(t,e){const o=Math.max(...t.series.map(ee=>Math.max(ee.value,ee.baseline??0)),1),s=46,l=34,r=36,E=Math.max(t.series.length*(s+l)+r*2,620),A=228,N=184,V=132,B=[0,.25,.5,.75,1].map(ee=>{const z=Math.round(N-ee*V);return`<line x1="${r-8}" y1="${z}" x2="${E-18}" y2="${z}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${ee===0?"0":"3 3"}" />`}).join(""),re=t.series.map((ee,z)=>{const q=r+z*(s+l),D=Math.max(8,Math.round(ee.value/o*V)),G=N-D,xe=typeof ee.baseline=="number"&&ee.value>ee.baseline*1.08,te=xe?`<rect x="${q-8}" y="34" width="${s+16}" height="${N-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",ue=typeof ee.baseline=="number"?`<line x1="${q-5}" y1="${Math.round(N-ee.baseline/o*V)}" x2="${q+s+5}" y2="${Math.round(N-ee.baseline/o*V)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",de=e&&(xe||z===1)?`<g><title>${xe?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${q+s/2}" cy="18" r="7" fill="${xe?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${q+s/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${xe?"!":"S"}</text></g>`:"",R=ee.value>=1e4?`${(ee.value/1e3).toFixed(1)}k`:ee.value.toLocaleString("en-US");return`
        ${te}
        ${ue}
        ${de}
        <g>
          <title>${ee.label}：实测 ${ee.value.toLocaleString("en-US")} ${t.unit}${ee.baseline!==void 0?` / 基线 ${ee.baseline.toLocaleString("en-US")} ${t.unit}`:""}</title>
          <rect x="${q}" y="${G}" width="${s}" height="${D}" rx="7" fill="${xe?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${q+s/2}" y="${G-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${R}</text>
        <text x="${q+s/2}" y="${N+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${ee.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${E} ${A}" style="width:100%; height:232px; display:block;" role="img" aria-label="${t.category} 趋势图">
      ${B}
      ${re}
    </svg>
  `}function ha(t,e){const o=t.connectivity==="offline";if(t.category==="hvac"){const s=Number(t.telemetry.setpoint?.value??24);return[{id:`${t.id}:temp`,deviceId:t.id,deviceName:t.name,pointKey:"temp",label:"室内温度",unit:"°C",points:o?[23.8,24,24.1,null,null,null,null,null]:[s+.8,s+.6,s+.3,s,s-.2,s+.1,s+.2,s],offline:o,colorIdx:e},{id:`${t.id}:setpoint`,deviceId:t.id,deviceName:t.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:o?[24,24,24,null,null,null,null,null]:[s,s,s,s,s,s,s,s],offline:o,colorIdx:e+1},{id:`${t.id}:valve`,deviceId:t.id,deviceName:t.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:o?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:o,colorIdx:e+2}]}if(t.category==="lighting"){const s=Number(t.telemetry.dimming?.value??60);return[{id:`${t.id}:dimming`,deviceId:t.id,deviceName:t.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(s*.8),s,s,Math.round(s*.6),s,Math.round(s*.9)],offline:o,colorIdx:e},{id:`${t.id}:power`,deviceId:t.id,deviceName:t.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:o,colorIdx:e+1}]}if(t.category==="sensor"){const s=Number(t.telemetry.temp?.value??23.4);return[{id:`${t.id}:temp`,deviceId:t.id,deviceName:t.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[s-.5,s-.3,s,s+.3,s+.5,s+.2,s+.1,s],offline:o,colorIdx:e},{id:`${t.id}:co2`,deviceId:t.id,deviceName:t.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:o,colorIdx:e+1},{id:`${t.id}:humidity`,deviceId:t.id,deviceName:t.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:o,colorIdx:e+2}]}return[{id:`${t.id}:latency`,deviceId:t.id,deviceName:t.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:o,colorIdx:e}]}function ya(t){const e=t.points.filter(A=>typeof A=="number");if(!e.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const o=Math.min(...e),s=Math.max(...e),l=e.reduce((A,N)=>A+N,0)/e.length,r=t.points[t.points.length-1],E=A=>Math.abs(A)<100&&!Number.isInteger(A)?A.toFixed(1):Math.round(A).toString();return{min:E(o),avg:l.toFixed(Math.abs(l)<100?1:0),max:E(s),curr:typeof r=="number"?E(r):"离线"}}function $a(t,e,o){const s=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!t.length)return'<div class="pacom-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const l=(E,A)=>{const G=[];for(const U of E)for(const ne of U.points)typeof ne=="number"&&G.push(ne);const xe=G.length?Math.min(...G)*.92:0,te=G.length?Math.max(...G)*1.08:100,ue=Math.max(te-xe,1),de=[0,.5,1].map(U=>{const ne=Math.round(26+106*(1-U)),v=(xe+ue*U).toFixed(ue<15?1:0);return`
          <line x1="44" y1="${ne}" x2="662" y2="${ne}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${U===0?"0":"3 3"}" />
          <text x="38" y="${ne+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${v}</text>
        `}).join(""),R=s.map((U,ne)=>`<text x="${44+ne/(s.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${U}</text>`).join(""),Ie=E.map((U,ne)=>{const v=Ke[(U.colorIdx+ne)%Ke.length],S=U.points,T=[];let M=44,pe=26+106/2,K=!1;S.forEach((Y,Le)=>{const me=44+Le/(S.length-1)*618;if(typeof Y=="number"){const le=26+106*(1-(Y-xe)/ue);T.push(`${me.toFixed(1)},${le.toFixed(1)}`),M=me,pe=le}else K=!0});const p=o?S.map((Y,Le)=>{if(typeof Y!="number")return null;const me=44+Le/(S.length-1)*618,h=26+106*(1-(Y*.96-xe)/ue);return`${me.toFixed(1)},${h.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${p?`<polyline fill="none" stroke="${v}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${p}" />`:""}
          ${T.length?`<polyline fill="none" stroke="${v}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${T.join(" ")}" />`:""}
          ${K?`<line x1="${M.toFixed(1)}" y1="${pe.toFixed(1)}" x2="662" y2="${pe.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${pe-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),fe=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,we=E.map((U,ne)=>{const v=Ke[(U.colorIdx+ne)%Ke.length],S=ya(U);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${v};"></span>${U.deviceName} · ${U.label}</span></td>
            <td><strong>${S.curr}</strong> <span class="pacom-row-sub">${U.unit}</span></td>
            <td>${S.min} <span class="pacom-row-sub">${U.unit}</span></td>
            <td>${S.avg} <span class="pacom-row-sub">${U.unit}</span></td>
            <td>${S.max} <span class="pacom-row-sub">${U.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${A}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${E.map((U,ne)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${Ke[(U.colorIdx+ne)%Ke.length]};"></span>${U.deviceName}·${U.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${de}
          ${R}
          ${fe}
          ${Ie}
        </svg>
        <div class="pacom-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="pacom-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${we}</tbody>
          </table>
        </div>
      </div>
    `};if(e==="shared")return l(t,"单图叠合对比（Shared）");const r=new Map;for(const E of t){const A=r.get(E.unit)??[];A.push(E),r.set(E.unit,A)}return Array.from(r.entries()).map(([E,A])=>l(A,`按单位分组泳道（${E}）`)).join("")}function wa(t){const e=[["时段",`数值 (${t.unit})`,`基线 (${t.unit})`].join(","),...t.series.map(r=>[r.label,String(r.value),r.baseline!==void 0?String(r.baseline):""].join(","))],o=new Blob([`\uFEFF${e.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(o),l=document.createElement("a");l.href=s,l.download=`pacom-${t.category}-${t.range}.csv`,l.click(),URL.revokeObjectURL(s)}function xa(t){const e=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],o=["时间",...t.map(A=>`${A.deviceName}·${A.label}(${A.unit})`)].join(","),s=e.map((A,N)=>[A,...t.map(V=>String(V.points[N]??"No Data"))].join(",")),l=new Blob([`\uFEFF${[o,...s].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(l),E=document.createElement("a");E.href=r,E.download="pacom-timeseries-export.csv",E.click(),URL.revokeObjectURL(r)}async function Sa(t,e,o){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),l=s.get("tab"),r=s.get("cat"),E=s.get("device"),A=s.get("points"),N=s.get("mode"),V=s.get("interval");let B=l==="timeseries"?"timeseries":r&&ot.some(h=>h.id===r)?r:"energy",re="7d",ee="2026-11-16",z="2026-11-23",q=et(),D=!1,G="",xe=q.level==="all-projects"||q.level==="project"?b.projectId:q.level==="building"?b.buildingId:b.floorId,te="chart",ue=!0,de="breakdown",R=!1,Ie=null;const[fe,we]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(b.floorId).catch(()=>[])]);let U=we;const ne=new Map,v=[];U.forEach((h,c)=>{const I=ha(h,c);ne.set(h.id,I),v.push(...I)});let S=N==="shared"||N==="grouped"?N:"grouped",T=V==="15m"||V==="1h"||V==="1d"?V:"1h",M=!1;const pe=[];if(A?A.split(",").forEach(h=>{v.some(c=>c.id===h)&&pe.push(h)}):E&&ne.has(E)&&(ne.get(E)??[]).slice(0,2).forEach(h=>pe.push(h.id)),!pe.length){const h=U.find(j=>j.category==="hvac"),c=U.find(j=>j.category==="sensor"),I=U.find(j=>j.category==="lighting");h&&(ne.get(h.id)??[]).slice(0,2).forEach(j=>pe.push(j.id)),c&&(ne.get(c.id)??[]).slice(0,1).forEach(j=>pe.push(j.id)),I&&(ne.get(I.id)??[]).slice(0,1).forEach(j=>pe.push(j.id)),pe.length||v.slice(0,3).forEach(j=>pe.push(j.id))}const K=new Set(pe),p=new Set(U.filter((h,c)=>c<2||(ne.get(h.id)??[]).some(I=>K.has(I.id))).map(h=>h.id)),Y=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:v.filter(h=>h.pointKey==="temp"||h.pointKey==="setpoint"||h.pointKey==="co2").slice(0,4).map(h=>h.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:v.filter(h=>h.pointKey==="dimming"||h.pointKey==="power").slice(0,4).map(h=>h.id),mode:"grouped",interval:"15m"}];let Le="";async function me(){const h=B==="timeseries"?"energy":B,c=re==="custom"?"30d":re;Ie=await e.getAnalysisReport(h,c,b.floorId),le()}function le(){if(!Ie)return;const h=B==="timeseries",c=B==="timeseries"?"energy":B,I=ot.find(y=>y.id===c)??ot[0],j=jt.find(y=>y.id===xe)??jt[0],se=va(Ie,j.factor),Ae=se.zoneBreakdown.filter(y=>y.status==="warning"),qe=ma[c],ze=Math.max(...se.zoneBreakdown.map(y=>y.value),1),Te=v.filter(y=>K.has(y.id));t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${Qe({tree:fe,session:o,scope:q,isOpen:D,searchKeyword:G})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${re==="today"?"selected":""}>今日</option>
                <option value="7d" ${re==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${re==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${re==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${h?"":`<button class="pacom-btn ${R?"pacom-btn--primary":""}" data-toggle-canvas="1">${R?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${ot.map(y=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${B===y.id}" data-cat="${y.id}">${y.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${B==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${re==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${ee}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${z}" data-custom-end />
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
                    ${Y.map(y=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${y.id}">${ge("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${y.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${U.map(y=>{const u=ne.get(y.id)??[],w=p.has(y.id),ce=u.filter(he=>K.has(he.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${y.id}" style="cursor:pointer; justify-content:space-between;" title="${y.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${w?"0deg":"-90deg"}); opacity:0.65;">${ua}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${y.name}</div>
                                <div class="pacom-row-sub">${u.length} 个测点 · ${y.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${ce>0?`<span class="pacom-badge pacom-badge--accent">${ce}</span>`:""}
                          </button>
                          ${w?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${u.map(he=>{const ye=K.has(he.id),Me=Ke[he.colorIdx%Ke.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${ye?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${he.id}" data-ts-point="${he.id}" ${ye?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${Me};"></span>
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
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${ge("clock",12)} 排程(S) · ${ge("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${M}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${T==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${T==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${T==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${S==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${S==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${$a(Te,S,M)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="pacom-kpi-strip" role="region" aria-label="核心统计指标">
                ${se.kpis.map(y=>{const u=ba(y.value,y.unit);return`
                      <div class="pacom-kpi-cell" title="${u.title}">
                        <span class="pacom-kpi-label">${y.label}</span>
                        <div class="pacom-kpi-value">
                          <span>${u.value}</span>
                          ${u.unit?`<span class="pacom-kpi-unit">${u.unit}</span>`:""}
                        </div>
                        <span class="pacom-kpi-delta">${y.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="pacom-section">
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">${I?.label??"趋势"}趋势（${se.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${j.label} · 更新于 ${se.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${ue}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${te==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${te==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${Ae.length>0?`关注：${Ae.map(y=>y.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${I?.desc??"空间运行洞察"} · ${qe.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${te==="chart"?fa(se,ue):`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${se.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${se.series.map(y=>{const u=typeof y.baseline=="number"&&y.value>y.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${y.label}</strong></td>
                                    <td>${y.value.toLocaleString("en-US")}</td>
                                    <td>${y.baseline!==void 0?y.baseline.toLocaleString("en-US"):"-"}</td>
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
                    <span class="pacom-row-sub">${se.zoneBreakdown.length} 个功能区</span>
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
                          ${se.zoneBreakdown.map(y=>{const u=Math.max(8,Math.round(y.value/ze*100));return`
                                <tr>
                                  <td style="font-weight:500;">${y.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${u}%; height:100%; border-radius:999px; background:${y.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${y.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${y.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${y.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${y.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="pacom-section-title">${R?"E7F 空间对照预览":c==="energy"&&de==="load"?"峰谷负荷分布（Load Profile）":qe.title}</h2>
                    ${!R&&c==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${de==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${de==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${R?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${R?'<img class="pacom-plan-img" src="./media/floors/e/07F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
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
                        ${(c==="energy"&&de==="load"?ga:qe.items).map(y=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${y.name}</span>
                                <span class="pacom-row-sub">${y.detail} · <strong style="color:var(--pacom-text-primary);">${y.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,y.pct)}%; height:100%; border-radius:999px; background:${y.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,tt(t,{onToggle:()=>{D=!D,le(),D&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:y=>{G=y,le();const u=t.querySelector("[data-global-space-search]");u&&(u.focus(),u.setSelectionRange(y.length,y.length))},onPick:y=>{q=y,xe=y.level==="all-projects"||y.level==="project"?b.projectId:y.level==="building"?b.buildingId:b.floorId,D=!1,le()}}),t.querySelectorAll("[data-cat]").forEach(y=>{y.addEventListener("click",()=>{B=y.dataset.cat??"energy",Le="",B==="timeseries"?le():me()})}),t.querySelector("[data-range-select]")?.addEventListener("change",y=>{re=y.currentTarget.value??"7d",me()}),t.querySelector("[data-custom-start]")?.addEventListener("change",y=>{ee=y.currentTarget.value}),t.querySelector("[data-custom-end]")?.addEventListener("change",y=>{z=y.currentTarget.value}),t.querySelectorAll("[data-chart-mode]").forEach(y=>{y.addEventListener("click",()=>{te=y.dataset.chartMode??"chart",le()})}),t.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{ue=!ue,le()}),t.querySelectorAll("[data-energy-right]").forEach(y=>{y.addEventListener("click",()=>{de=y.dataset.energyRight??"breakdown",le()})}),t.querySelector("[data-export-csv]")?.addEventListener("click",()=>{h?xa(Te):wa(se)}),t.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{R=!R,le()}),t.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),t.querySelectorAll("[data-ts-expand]").forEach(y=>{y.addEventListener("click",()=>{const u=y.dataset.tsExpand;u&&(p.has(u)?p.delete(u):p.add(u),le())})}),t.querySelectorAll("[data-ts-point]").forEach(y=>{y.addEventListener("change",()=>{const u=y.dataset.tsPoint;u&&(y.checked?K.add(u):K.delete(u),Le="",le())})}),t.querySelectorAll("[data-ts-mode]").forEach(y=>{y.addEventListener("click",()=>{S=y.dataset.tsMode??"grouped",le()})}),t.querySelector("[data-ts-interval]")?.addEventListener("change",y=>{T=y.currentTarget.value??"1h",le()}),t.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{M=!M,le()}),t.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const u=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(K).join(","))}&mode=${S}&interval=${T}`,w=`${window.location.origin}${window.location.pathname}${u}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(w).catch(()=>{}),window.history.replaceState(null,"",u),Le=`已复制分享链接（含 ${K.size} 个测点、${S==="grouped"?"按单位分组":"单图叠合"}、${T} 粒度）。`,le()}),t.querySelectorAll("[data-load-fav]").forEach(y=>{y.addEventListener("click",()=>{const u=Y.find(w=>w.id===y.dataset.loadFav);u&&(K.clear(),u.pointIds.forEach(w=>{K.add(w);const ce=w.split(":")[0];ce&&p.add(ce)}),S=u.mode,T=u.interval,Le=`已加载收藏视图「${u.name}」。`,le())})}),t.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(K.size===0)return;const y=`自定义对比 #${Y.length+1}（${K.size} 测点）`;Y.push({id:`fav-${Date.now()}`,name:y,pointIds:Array.from(K),mode:S,interval:T}),Le=`已保存当前时序配置为「${y}」。`,le()})}await me()}const Ia={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},ka={frozen:"已冻结",draft:"草稿",delivered:"已交付"},bt={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},vt=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],Lt=[{id:"doc-hvac-7f",floorId:b.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:b.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:b.floorId,name:"E7F_协议点位与蓝牙Mesh映射台账.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:b.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],Ea={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},At=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function g(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function lt(t){const e=t.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面")||e.includes("屋顶")||e.includes("天面"))return 999;const o=e.match(/(-?\d+)/);if(!o)return 0;const s=Number(o[1]);return e.startsWith("B")||e.includes("地下")||e.includes("负")?-Math.abs(s):s}const Ft={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function Xe(t){const e=t.trim(),o=e.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test(o)||/屋面|屋顶|天面/.test(e))return"RF";const s=o.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(s)return`B${Number(s[1])}`;const l=e.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(l){const A=/^\d+$/.test(l[1])?Number(l[1]):Ft[l[1]];if(A)return`B${A}`}if(/首层|一层/.test(e))return"1F";const r=e.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(r){const A=/^\d+$/.test(r[1])?Number(r[1]):Ft[r[1]];if(A)return`${A}F`}const E=o.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return E?`${Number(E[1])}F`:null}function it(t){return new Promise((e,o)=>{const s=new FileReader;s.onload=()=>typeof s.result=="string"?e(s.result):o(new Error("无法读取图片内容")),s.onerror=()=>o(new Error(`读取文件「${t.name}」失败`)),s.readAsDataURL(t)})}function ja(t){return t.category==="gateway"?t.name.includes("蓝牙")?"蓝牙适配器":"主控网关":t.category==="lighting"?t.name.includes("702")?"702 照明":t.name.slice(0,6):t.category==="hvac"?t.name.includes("VAV")?"VAV-02":t.name.includes("FCU")?"FCU-01":t.name.slice(0,6):t.category==="sensor"?"环境传感":t.name.slice(0,6)}function La(t,e){const o=t.status!=="connected",s=e.filter(l=>l.hardwareBinding?.protocol===t.protocol);return s.length>0?s.map(l=>{const r=l.connectivity==="offline"||o;return{pointName:l.category==="hvac"?"送风温度 / 阀门开度":l.category==="lighting"?"回路开关 / 亮度反馈":l.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:l.name,value:r?"无上报":l.category==="hvac"?"23.4°C · 62%":l.category==="lighting"?"开启 · 80%":l.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:r?"46 分钟前":"12 秒前",quality:r?l.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${t.protocol.toUpperCase()} 采集通道汇总点`,deviceName:t.name,value:o?"采样延迟":"正常上报",interval:"60s",lastSeen:o?"38 分钟前":"9 秒前",quality:o?"delayed":"online"}]}async function Aa(t,e,o){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),l=s.get("sec");let r=l==="floors"||l==="projects"?"project_config":l==="floorplan"||l==="devices"?"floorplan":l==="inventory"?"ledger":l==="connections"?"connections":"overview",E=l==="floors"?"floor_zones":"project_building",A="",N="all",V=et(),B=!1,re="",ee="device",z="all",q="",D=!1,G=!1,xe="mesh",te=1,ue=0,de=0,R=await e.getSpatialTree(),Ie=[],fe=[],we=[];const U={...Ea},ne=[];let v=V.level==="all-projects"?R.projects[0]?.id??b.projectId:V.projectId,S=V.level==="building"||V.level==="floor"?V.buildingId:R.buildings.find($=>$.projectId===v)?.id??R.buildings[0]?.id??b.buildingId,T=V.level==="floor"?V.floorId:R.floors.find($=>$.buildingId===S&&$.id===b.floorId)?.id??R.floors.find($=>$.buildingId===S)?.id??b.floorId,M="all",pe=s.get("new")==="project",K=!1,p=!1,Y=!1,Le=!1,me=[],le=null;const h=[];let c=null,I=null,j=new Set,se=null,Ae=!1,qe=!1,ze=!1,Te=!1,y=!1,u=null,w=null,ce=null,he=3,ye=!1,Me=[],Be=null,ve="",$e="";const Ve=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),je=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],Ge=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:b.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:b.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:b.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:b.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],k=new Map;function Q(){return R}function O(){return R.floors}function f($){return[...R.floors.filter(F=>F.buildingId===$)].sort((F,W)=>lt(W.name)-lt(F.name))}function x(){return R.zones}function C($){return[...$===b.floorId?Ie:[],...ne.filter(W=>W.floorId===$)]}function ie($){return $?x().find(F=>F.id===$)?.name.replace(/^7F\s*/,"")??$:"未分配功能区"}function J($){const F=R.buildings.find(L=>L.id===$);if(!F)return;v=F.projectId,S=F.id;const W=f(F.id);W.some(L=>L.id===T)||(T=W.find(L=>L.id===b.floorId)?.id??W[0]?.id??""),V=He(T?{level:"floor",projectId:F.projectId,buildingId:F.id,floorId:T}:{level:"building",projectId:F.projectId,buildingId:F.id}),se=null,G=!1,qe=!1,te=1,ue=0,de=0}function Ee($){T=$;const F=O().find(W=>W.id===$);if(F){S=F.buildingId;const W=R.buildings.find(L=>L.id===F.buildingId);W&&(v=W.projectId),V=He({level:"floor",projectId:v,buildingId:F.buildingId,floorId:F.id})}se=null,G=!1,qe=!1,te=1,ue=0,de=0}async function oe(){$e="";const[$,F,W,L]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(b.floorId).catch(()=>[]),e.listConnections(v),e.listDeliveryBatches(b.floorId)]);if(R=$,Ie=F,fe=W,we=L,R.projects.length===0)v="",S="",T="";else{R.projects.some(a=>a.id===v)||(v=R.projects[0].id);const i=R.buildings.filter(a=>a.projectId===v);i.some(a=>a.id===S)||(S=i[0]?.id??"");const n=S?f(S):[];n.some(a=>a.id===T)||(T=n.find(a=>a.id===b.floorId)?.id??n[0]?.id??"")}const ae=C(T);se&&!ae.some(i=>i.id===se)&&(se=null,G=!1),Ae=ae.find(i=>i.id===se)?.physicalInstalled??!1,_()}function be(){const $=t.querySelector('[data-role="dep-viewport"]');$&&($.style.transform=`translate(${ue}px, ${de}px) scale(${te})`);const F=t.querySelector('[data-role="dep-zoom-label"]');F&&(F.textContent=`${Math.round(te*100)}%`)}function Re($){$e="",$.connectivity==="offline"?$e=`单机回读自检未通过（FAIL）：「${$.name}」当前离线，请核查网关链路或中继覆盖。`:ve=`单机回读自检通过（PASS）：「${$.name}」指令下发与状态回读一致，已安全复位。`,_()}function We(){$e="";const $=C(T),F=$.filter(X=>X.connectivity==="offline"),W=$.length-F.length,L=new Date;Be={ranAt:`${String(L.getHours()).padStart(2,"0")}:${String(L.getMinutes()).padStart(2,"0")}:${String(L.getSeconds()).padStart(2,"0")}`,total:$.length,passed:W,failed:F.length,failedNames:F.map(X=>X.name)},F.length>0?$e=`全层批量自检完成：${W}/${$.length} 台通过，${F.length} 台异常（${F.map(X=>X.name).join("、")}）。`:ve=`全层批量自检全部通过（${W}/${$.length}），设备已自动安全复位。`,_()}function Je(){const $=C(T),F=[],W=$.filter(n=>n.connectivity==="offline"),L=$.filter(n=>!n.planPoint),ae=$.filter(n=>Ve.get(n.id)?.proxy).length,X=$.filter(n=>Ve.get(n.id)?.relay).length,i=$.length?X/$.length:0;W.length>0?W.forEach(n=>F.push({level:"fail",title:`节点不可达：${n.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:n.id})):F.push({level:"ok",title:"全网节点可达性正常",detail:`${$.length} 台设备均正常响应心跳。`}),ae<1?F.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):F.push({level:"ok",title:`代理节点配置合理（${ae} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),i>.25&&$.length>=4&&F.push({level:"warn",title:`中继比例偏高（${Math.round(i*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),L.length>0&&F.push({level:"warn",title:`尚有 ${L.length} 台未完成图纸标点`,detail:"请在「图纸标点」中补齐坐标以便施工定位。"}),Me=F,ve=`已完成蓝牙 Mesh 网络体检（检测 ${$.length} 台节点，发现 ${F.filter(n=>n.level!=="ok").length} 项关注）。`,_()}function dt(){const $=C(T),F=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...$.map(X=>[X.name,X.category,ie(X.logicalZoneId),X.planPoint?`${Math.round(X.planPoint.x*100)}%/${Math.round(X.planPoint.y*100)}%`:"未标点",X.hardwareBinding?`${X.hardwareBinding.protocol} ${X.hardwareBinding.networkAddress}`:"未绑定",X.physicalInstalled?"已复核":"待复核",X.connectivity==="online"?"在线":"离线"].join(","))],W=new Blob([`\uFEFF${F.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),L=URL.createObjectURL(W),ae=document.createElement("a");ae.href=L,ae.download="pacom-deployment-inventory.csv",ae.click(),URL.revokeObjectURL(L)}const wt={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。"},project_config:{title:"项目配置",subtitle:"维护项目、楼宇、楼层平面图与功能区结构。"},floorplan:{title:"设备标记",subtitle:"在 2D 平面底图上完成设备标记、回路灯点与硬件复核。"},ledger:{title:"设备列表",subtitle:"核查全层四态设备清单，统一下发人感/光感参数并执行单机或全层自检。"},groups:{title:"设备分组",subtitle:"统一管理端侧蓝牙 Mesh 自治联动组与云端业务分组。"},network_topo:{title:"设备网络",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。"},connections:{title:"系统接入",subtitle:"管理边缘网关服务与暖通、电表、环境等异构子系统通道及传感器采集质量。"}};function _t(){const $=(F,W,L)=>`
      <button type="button" class="pacom-unified-item" aria-current="${r===F}" data-dep-nav="${F}">
        ${ge(W,16)}
        <span>${L}</span>
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
    `}function Bt($){return r==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出台账</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${$?"":"disabled"}>+ 交付冻结</button>
      `:r==="floorplan"?'<button type="button" class="pacom-btn" data-export-inv="1">导出施工标点表</button>':r==="ledger"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':r==="groups"?`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1" ${$?"":"disabled"}>${y?"收起表单":"+ 新建分组"}</button>`:r==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${$?"":"disabled"}>${ye?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:r==="connections"?`
        <button type="button" class="pacom-btn" data-edge-restart="service" ${$?"":"disabled"}>重启边缘服务</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-conn="1" ${$?"":"disabled"}>${Te?"收起向导":"+ 新增接入通道"}</button>
      `:`<span class="pacom-badge ${$?"pacom-badge--online":"pacom-badge--warning"}">${$?"可编辑":"只读"}</span>`}function Ut(){if(R.projects.length===0)return`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${ge("layers",20)}</div>
          <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
          <span class="pacom-row-sub" style="max-width:420px;">完成项目与楼宇建档后，这里将自动汇总各楼层的底图、设备标记、在线入网与交付核验进度。</span>
          <div class="dep-empty-steps">
            <span>1. 创建项目</span>
            <span>→</span>
            <span>2. 添加楼宇与楼层</span>
            <span>→</span>
            <span>3. 上传平面图</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-proj="1" ${o.scope.canEditDeployment?"":"disabled"}>+ 创建第一个项目</button>
        </div>`;const $=S?f(S):[],F=$.filter(n=>!!n.plan).length,W=$.flatMap(n=>C(n.id)),L=W.filter(n=>!!n.planPoint).length,ae=W.filter(n=>n.connectivity==="online").length,X=W.filter(n=>n.physicalInstalled).length,i=$.filter(n=>C(n.id).length>0&&!ye).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" data-proj-sub="floor_zones" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${F===$.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 空间与底图</span>
          <div class="pacom-kpi-value">${F}<span class="pacom-kpi-unit">/ ${$.length} 层</span></div>
          <span class="pacom-kpi-delta">${F===$.length?"全部底图就绪":`尚缺 ${$.length-F} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${L===W.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${L}<span class="pacom-kpi-unit">/ ${W.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${je.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${ae===W.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${ae}<span class="pacom-kpi-unit">/ ${W.length} 台</span></div>
          <span class="pacom-kpi-delta">${W.length-ae>0?`${W.length-ae} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${ye?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${i}<span class="pacom-kpi-unit">/ ${$.length} 层</span></div>
          <span class="pacom-kpi-delta">${ye?"有变更待下发 →":`基线 v${he}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="ledger" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${X===W.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${X}<span class="pacom-kpi-unit">/ ${W.length} 台</span></div>
          <span class="pacom-kpi-delta">${X===W.length?"可交付冻结":`待复核 ${W.length-X} 台 →`}</span>
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
                ${$.map(n=>{const a=C(n.id),d=x().filter(Z=>Z.floorId===n.id),m=a.filter(Z=>!!Z.planPoint).length,P=a.filter(Z=>Z.connectivity==="online").length,Se=a.filter(Z=>Z.physicalInstalled).length,Fe=!!n.plan,Ce=Fe&&a.length>0&&m===a.length&&Se===a.length&&P===a.length&&!ye;return`
                      <tr>
                        <td><strong>${g(n.name)}</strong><div class="pacom-row-sub">${n.areaSqm?`${n.areaSqm} m²`:"待补面积"}</div></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-proj-sub="floor_zones" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${Fe?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${Fe?`已传图 · ${d.length} 区`:"待传底图"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="floorplan" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${a.length>0&&m===a.length?"pacom-dot--online":a.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${a.length>0?`${m}/${a.length}`:"未标点"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${a.length>0&&P===a.length?"pacom-dot--online":a.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${a.length>0?`${P}/${a.length}`:"—"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${a.length===0?"pacom-dot--offline":ye?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${a.length===0?"—":ye?"待同步":`v${he}`}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="ledger" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${a.length>0&&Se===a.length?"pacom-dot--online":a.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${a.length>0?`${Se}/${a.length}`:"—"}</span></button></td>
                        <td style="text-align:right;"><span class="pacom-badge ${Ce?"pacom-badge--online":a.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${Ce?"可验收交付":a.length>0?"实施中":"待配置"}</span></td>
                      </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${Be?`<div class="pacom-banner ${Be.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${Be.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${Be.passed}/${Be.total} 台${Be.failedNames.length?` · 异常：${Be.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${we.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${we.map(n=>`
                    <tr>
                      <td><div style="font-weight:450;">${g(n.versionTag)}</div><div class="pacom-row-sub"><code>${g(n.id)}</code></div></td>
                      <td><strong>${n.verifiedCount}</strong> / ${n.deviceCount} 台</td>
                      <td><div>${g(n.frozenBy)}</div><div class="pacom-row-sub">${g(n.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${ka[n.status]??n.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function xt($){const F=new Set(f($.id).map(L=>Xe(L.name)??L.name.toUpperCase())),W=[];for(let L=1;L<=$.aboveFloors;L+=1){const ae=`${L}F`;F.has(ae)||W.push({kind:"above",level:L,name:ae})}for(let L=1;L<=$.belowFloors;L+=1){const ae=`B${L}`;F.has(ae)||W.push({kind:"below",level:-L,name:ae})}return $.hasRoof&&!F.has("RF")&&W.push({kind:"roof",level:99,name:"RF"}),W}async function Vt($){const F=R.buildings.find(L=>L.id===$);if(!F)return 0;const W=xt(F);for(const L of W)await e.upsertFloor?.({buildingId:F.id,kind:L.kind,level:L.level,name:L.name});return W.length}function Zt($){if(R.projects.length===0)return`
        <div style="width:100%; display:flex; flex-direction:column; gap:18px;">
          <div class="dep-empty-card">
            <div class="dep-empty-icon">${ge("layers",20)}</div>
            <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
            <span class="pacom-row-sub" style="max-width:420px;">按「项目 → 楼宇与楼层 → 平面图与功能区」顺序完成空间建档后，即可开展设备标记与运行管理。</span>
            <div class="dep-empty-steps">
              <span>1. 创建项目</span>
              <span>→</span>
              <span>2. 添加楼宇与楼层</span>
              <span>→</span>
              <span>3. 上传平面图</span>
            </div>
            ${pe?"":`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-proj="1" ${$?"":"disabled"}>+ 创建第一个项目</button>`}
          </div>
          ${pe?`
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
        </div>`;const F=R.projects.find(a=>a.id===v)??R.projects[0],W=R.buildings.filter(a=>a.projectId===F.id),L=W.find(a=>a.id===S)??W[0]??null,ae=L?f(L.id):[],X=L?xt(L):[],i=L?ae.reduce((a,d)=>a+C(d.id).length,0):0,n=W.reduce((a,d)=>a+f(d.id).reduce((m,P)=>m+C(P.id).length,0),0);return`
      <div style="width:100%; display:flex; flex-direction:column; gap:24px;">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
              <h2 class="pacom-section-title">当前项目</h2>
              <select class="pacom-select" style="height:32px; font-size:13px; min-width:170px;" data-switch-proj-select aria-label="切换项目">
                ${R.projects.map(a=>{const d=R.buildings.filter(m=>m.projectId===a.id).length;return`<option value="${g(a.id)}" ${a.id===F.id?"selected":""}>${g(a.name)}（${d} 栋）</option>`}).join("")}
              </select>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-proj="1" ${$?"":"disabled"}>${pe?"收起":"+ 新建项目"}</button>
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${g(F.id)}" ${!$||n>0?`disabled title="${n>0?"项目包含运行中设备，请先清理后再删除":"当前角色只读"}"`:""}>删除项目</button>
            </div>
          </div>
          ${pe?`
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
              <form data-save-project="${g(F.id)}" style="display:flex; flex-direction:column; gap:12px;">
                <div class="dep-param-grid">
                  <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${g(F.name)}" required ${$?"":"disabled"} /></label>
                  <label class="dep-field"><span class="dep-field-label">城市</span><input class="pacom-input" name="pCity" value="${g(F.city??"")}" ${$?"":"disabled"} /></label>
                  <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${g(F.address??"")}" placeholder="用于气象匹配与园区定位" ${$?"":"disabled"} /></label>
                  <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${g(F.location?.lng??"")}" placeholder="113.3824" ${$?"":"disabled"} /></label>
                  <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${g(F.location?.lat??"")}" placeholder="23.0652" ${$?"":"disabled"} /></label>
                </div>
                <div style="display:flex; justify-content:flex-end;">
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${$?"":"disabled"}>保存项目信息</button>
                </div>
              </form>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <div style="border-radius:10px; overflow:hidden; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle); aspect-ratio:16/10;">
                  <img src="${g(F.imageUrl??"./media/gzlab.jpg")}" alt="${g(F.name)}" style="width:100%; height:100%; object-fit:cover; display:block;" />
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; justify-content:center;">
                  <span>更换项目封面图</span>
                  <input type="file" accept="image/*" data-upload-proj="${g(F.id)}" style="display:none;" ${$?"":"disabled"} />
                </label>
              </div>
            </div>
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">园区楼宇（${W.length} 栋）</h2>
            <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-bld="1" ${$?"":"disabled"}>${K?"收起":"+ 新建楼宇"}</button>
          </div>
          ${K?`
              <form class="pacom-settings-card" data-create-bld="${g(F.id)}" style="padding:16px 18px; gap:12px;">
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
                <div class="dep-empty-icon">${ge("building-2",20)}</div>
                <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${g(F.name)} 暂无楼宇</strong>
                <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
                ${K?"":`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-bld="1" ${$?"":"disabled"}>+ 添加第一栋楼宇</button>`}
              </div>`:`
              <div class="dep-building-grid">
                ${W.map(a=>{const d=f(a.id),m=d.filter(Fe=>!!Fe.plan).length,P=L?.id===a.id,Se=d.length===0?"pacom-badge--neutral":m===d.length?"pacom-badge--online":"pacom-badge--warning";return`
                      <button type="button" class="dep-building-card ${P?"is-active":""}" data-pick-building="${g(a.id)}">
                        <img class="dep-building-thumb" src="${g(a.imageUrl??"./media/building-e.webp")}" alt="${g(a.name)}" />
                        <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
                          <div style="display:flex; align-items:center; gap:6px;">
                            <span style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">${g(a.name)}</span>
                            <span class="pacom-badge ${Se}">${d.length===0?"未建层":`${m}/${d.length} 底图`}</span>
                          </div>
                          <span class="pacom-row-sub">地上 ${a.aboveFloors} 层${a.belowFloors>0?` · 地下 ${a.belowFloors} 层`:""}${a.hasRoof?" · RF":""}</span>
                          <span class="pacom-row-sub">${a.areaSqm?`${a.areaSqm} m²`:"待补面积"}</span>
                        </div>
                      </button>`}).join("")}
              </div>
              ${L?`
                  <div class="pacom-settings-card">
                    <div class="pacom-setting-row" style="justify-content:space-between; flex-wrap:wrap; gap:10px;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <strong style="font-size:15px; font-weight:500;">${g(L.name)}</strong>
                        <span class="pacom-row-sub">已配置 ${ae.length} 个楼层</span>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${g(L.id)}" ${!$||i>0?`disabled title="${i>0?"楼宇包含运行中设备，请先清理后再删除":"当前角色只读"}"`:""}>删除楼宇</button>
                        <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-proj-sub-tab="floor_zones">管理楼层与图纸 →</button>
                      </div>
                    </div>
                    ${X.length>0?`
                        <div class="pacom-setting-row" style="background:var(--pacom-surface-primary); justify-content:space-between; gap:10px; flex-wrap:wrap;">
                          <span style="font-size:13px; color:var(--pacom-text-secondary);">按当前层数结构，尚缺 <strong>${X.length}</strong> 个楼层（${g(X.slice(0,4).map(a=>a.name).join("、"))}${X.length>4?" 等":""}）。</span>
                          <button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${g(L.id)}" ${$?"":"disabled"}>一键补齐缺失 ${X.length} 层</button>
                        </div>`:""}
                    <div class="pacom-setting-row" style="display:grid; grid-template-columns:minmax(0,1.4fr) minmax(220px,0.9fr); gap:18px; align-items:start;">
                      <form data-save-building="${g(L.id)}" style="display:flex; flex-direction:column; gap:12px;">
                        <div class="dep-param-grid">
                          <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${g(L.name)}" required ${$?"":"disabled"} /></label>
                          <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${g(L.areaSqm??"")}" placeholder="选填" ${$?"":"disabled"} /></label>
                          <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${L.aboveFloors}" ${$?"":"disabled"} /></label>
                          <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${L.belowFloors}" ${$?"":"disabled"} /></label>
                        </div>
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                          <label style="display:inline-flex; align-items:center; gap:5px; font-size:13px;"><input type="checkbox" name="bRoof" ${L.hasRoof?"checked":""} ${$?"":"disabled"} />含屋面层 (RF)</label>
                          <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${$?"":"disabled"}>保存楼宇参数</button>
                        </div>
                      </form>
                      <div style="display:flex; flex-direction:column; gap:8px;">
                        <div style="border-radius:10px; overflow:hidden; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle); padding:8px; height:172px; display:flex; align-items:center; justify-content:center;">
                          <img src="${g(L.imageUrl??"./media/building-e.webp")}" alt="${g(L.name)}" style="max-width:100%; max-height:100%; object-fit:contain; display:block;" />
                        </div>
                        <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; justify-content:center;">
                          <span>替换楼宇外观图</span>
                          <input type="file" accept="image/*" data-upload-bld="${g(L.id)}" style="display:none;" ${$?"":"disabled"} />
                        </label>
                      </div>
                    </div>
                  </div>`:""}`}
        </section>
      </div>
    `}function Ht($){if(R.projects.length===0)return`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${ge("layers",20)}</div>
          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">请先创建项目</strong>
          <span class="pacom-row-sub">创建项目并添加楼宇后，即可在此管理楼层平面图与功能区。</span>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-proj="1">前往创建项目 →</button>
        </div>`;const F=R.projects.find(Z=>Z.id===v)??R.projects[0],W=R.buildings.filter(Z=>Z.projectId===F.id);if(W.length===0)return`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${ge("building-2",20)}</div>
          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${g(F.name)} 尚未添加楼宇</strong>
          <span class="pacom-row-sub">请先在「项目与楼宇」中添加楼宇，再配置各层平面图与功能区。</span>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-bld="1">前往添加楼宇 →</button>
        </div>`;const L=W.find(Z=>Z.id===S)??W[0],ae=f(L.id),X=ae.filter(Z=>!Z.plan).length,i=ae.filter(Z=>x().filter(ke=>ke.floorId===Z.id).length===0).length,n=ae.filter(Z=>M==="missing_plan"?!Z.plan:M==="missing_zone"?x().filter(ke=>ke.floorId===Z.id).length===0:!0),a=n.find(Z=>Z.id===T)??ae.find(Z=>Z.id===T)??n[0]??null,d=a?x().filter(Z=>Z.floorId===a.id):[],m=a?[...Lt,...h].filter(Z=>Z.floorId===a.id):[],P=a?C(a.id).length:0,Se=me.filter(Z=>!!Z.matchedFloorId).length,Fe=a?ae.filter(Z=>Z.id!==a.id):[],Ce=ae.length>0&&(X>0||Y||me.length>0);return`
      <div style="width:100%; display:flex; flex-direction:column; gap:18px;">
        ${ae.length>0?Ce?`
              <div class="dep-upload-drop" data-batch-dropzone="${g(L.id)}" style="padding:14px 16px; flex-direction:column; align-items:stretch; gap:12px; ${Le?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:14px; flex-wrap:wrap;">
                  <div style="display:flex; flex-direction:column; gap:2px;">
                    <strong style="font-size:14px; font-weight:450;">批量导入 ${g(L.name)} 平面底图</strong>
                    <span class="pacom-row-sub">拖拽或多选图片（支持 01F、首层、屋面、RF、B1 等中英文命名），可在下方手动校对对应楼层</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span class="pacom-badge ${X===0?"pacom-badge--online":"pacom-badge--warning"}">已就绪 ${ae.length-X}/${ae.length} 层</span>
                    <label class="pacom-btn pacom-btn--primary pacom-btn--sm" style="cursor:pointer;">
                      <span>选择多张图纸</span>
                      <input type="file" accept="image/*" multiple data-batch-upload-floors="${g(L.id)}" style="display:none;" ${$?"":"disabled"} />
                    </label>
                    ${X===0&&me.length===0?'<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-toggle-batch-panel="1">收起</button>':""}
                  </div>
                </div>
                ${me.length>0?`
                    <div style="padding-top:10px; border-top:var(--hw) solid var(--pacom-border-subtle); display:flex; flex-direction:column; gap:8px;">
                      <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                        <span style="font-size:13px;">待导入 <strong>${me.length}</strong> 张，已分配 <strong>${Se}</strong> 层</span>
                        <div style="display:flex; gap:6px;">
                          <button type="button" class="pacom-btn pacom-btn--sm" data-cancel-batch-upload="1">取消</button>
                          <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-batch-upload="1" ${Se===0?"disabled":""}>确认导入（${Se} 层）</button>
                        </div>
                      </div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:6px; max-height:176px; overflow-y:auto;">
                        ${me.map(Z=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${g(Z.file.name)}">${g(Z.file.name)}</span>
                              <select class="pacom-select" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${g(Z.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${ae.map(ke=>`<option value="${g(ke.id)}" ${Z.matchedFloorId===ke.id?"selected":""}>${g(ke.name)}</option>`).join("")}
                              </select>
                            </div>`).join("")}
                      </div>
                    </div>`:""}
              </div>`:`
              <div class="pacom-settings-card" style="padding:10px 16px; flex-direction:row; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span class="pacom-dot pacom-dot--online"></span>
                  <span style="font-size:13px; color:var(--pacom-text-secondary);">${g(L.name)} 全部 ${ae.length} 层平面底图已就绪</span>
                </div>
                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-toggle-batch-panel="1" ${$?"":"disabled"}>批量替换底图</button>
              </div>`:""}

        <div class="dep-floor-workbench">
          <div class="dep-floor-list-card">
            <div class="dep-floor-list-head">
              <div style="display:flex; align-items:center; justify-content:space-between; gap:6px;">
                <select class="pacom-select" style="flex:1; height:30px; font-size:13px;" data-switch-bld-select aria-label="切换楼宇">
                  ${W.map(Z=>`<option value="${g(Z.id)}" ${Z.id===L.id?"selected":""}>${g(Z.name)}（${f(Z.id).length} 层）</option>`).join("")}
                </select>
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-floor="1" ${$?"":"disabled"}>${p?"收起":"+ 新增"}</button>
              </div>
              ${p?`
                  <form data-create-floor="${g(L.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:4px;">
                    <div style="display:flex; gap:6px;">
                      <input class="pacom-input" name="fName" placeholder="楼层名（如 23F / B1）" style="height:30px; font-size:13px;" required />
                      <input class="pacom-input" name="fArea" type="number" step="0.1" placeholder="面积 m²" style="width:92px; height:30px; font-size:13px;" />
                    </div>
                    <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">确认新增</button>
                  </form>`:""}
              <div class="dep-filter-seg" role="group" aria-label="楼层筛选">
                <button type="button" class="dep-filter-btn" aria-pressed="${M==="all"}" data-floor-list-filter="all">全部 ${ae.length}</button>
                <button type="button" class="dep-filter-btn" aria-pressed="${M==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 ${X}</button>
                <button type="button" class="dep-filter-btn" aria-pressed="${M==="missing_zone"}" data-floor-list-filter="missing_zone">缺分区 ${i}</button>
              </div>
            </div>
            <div class="dep-floor-list-scroll">
              ${n.length===0?`<div class="pacom-row-sub" style="padding:18px; text-align:center;">${ae.length===0?"暂无楼层":"当前筛选无匹配楼层"}</div>`:n.map(Z=>{const ke=x().filter(De=>De.floorId===Z.id).length;return`
                          <button type="button" class="dep-floor-row ${a?.id===Z.id?"is-active":""}" data-pick-floor-pill="${g(Z.id)}">
                            <span style="display:inline-flex; align-items:center; gap:7px; min-width:0;">
                              <span class="pacom-dot ${Z.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                              <span>${g(Z.name)}</span>
                            </span>
                            <span class="pacom-row-sub">${Z.areaSqm?`${Z.areaSqm} m²`:"待补面积"} · ${ke} 区</span>
                          </button>`}).join("")}
            </div>
          </div>

          <div class="dep-floor-detail">
            ${ae.length===0?`
                <div class="dep-empty-card">
                  <div class="dep-empty-icon">${ge("layers",20)}</div>
                  <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${g(L.name)} 暂无楼层</strong>
                  <span class="pacom-row-sub">可按楼宇结构（地上 ${L.aboveFloors} 层${L.belowFloors>0?`、地下 ${L.belowFloors} 层`:""}${L.hasRoof?"、含 RF":""}）一键生成全部楼层，或手动新增。</span>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${g(L.id)}" ${$?"":"disabled"}>一键生成全部楼层</button>
                    <button type="button" class="pacom-btn" data-toggle-new-floor="1" ${$?"":"disabled"}>+ 手动新增楼层</button>
                  </div>
                </div>`:a?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                        <h2 class="pacom-section-title">${g(L.name)} ${g(a.name)}</h2>
                        <span class="pacom-badge ${a.plan?"pacom-badge--online":"pacom-badge--warning"}">${a.plan?"底图已就绪":"待上传底图"}</span>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-floor="${g(a.id)}" ${!$||P>0?`disabled title="${P>0?`当前楼层已关联 ${P} 台设备，请先移除设备后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                        <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-dep-nav="floorplan">进入设备标记 →</button>
                      </div>
                    </div>
                    <div class="pacom-settings-card">
                      <form class="pacom-setting-row" style="gap:10px;" data-save-floor="${g(a.id)}">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">楼层名称与建筑面积</span>
                          <span class="pacom-setting-desc">用于空间展示与面积统计</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="fName" value="${g(a.name)}" style="width:96px;" required ${$?"":"disabled"} />
                          <input class="pacom-input" name="fArea" type="number" step="0.1" value="${g(a.areaSqm??"")}" placeholder="面积 m²" style="width:116px;" ${$?"":"disabled"} />
                          <button type="submit" class="pacom-btn pacom-btn--sm" ${$?"":"disabled"}>保存</button>
                        </div>
                      </form>
                      <div class="pacom-setting-row" style="display:grid; grid-template-columns:minmax(0,1.55fr) minmax(200px,0.95fr); gap:16px; align-items:center;">
                        <div class="dep-plan-preview-box" data-single-floor-drop="${g(a.id)}">
                          ${a.plan?`<img src="${g(a.plan.imageUrl)}" alt="${g(a.name)} 平面图" style="width:100%; max-height:280px; object-fit:contain; display:block;" />
                                 <button type="button" class="dep-plan-zoom-btn" data-open-lightbox="1" data-lb-title="${g(L.name)} ${g(a.name)} 平面底图" data-lb-src="${g(a.plan.imageUrl)}">查看大图</button>`:`<div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:18px; text-align:center;">
                                   <span style="font-size:14px; color:var(--pacom-text-secondary);">拖拽平面图到此处</span>
                                   <span class="pacom-row-sub">或点击右侧按钮上传 PNG / WebP / JPG</span>
                                 </div>`}
                        </div>
                        <div class="dep-upload-drop" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:450;">${a.plan?"平面底图":"上传本层平面底图"}</strong>
                          <span class="pacom-row-sub">支持透明 PNG / WebP / JPG，上传后同步至空间总览与设备标记</span>
                          <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                            <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                              <span>${a.plan?"替换平面图":"选择平面图"}</span>
                              <input type="file" accept="image/*" data-upload-floor="${g(a.id)}" style="display:none;" ${$?"":"disabled"} />
                            </label>
                            ${a.plan?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-clear-floor-plan="${g(a.id)}" ${$?"":"disabled"}>清空底图</button>`:""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">本层功能区（${d.length}）</h2>
                      ${d.length>0&&Fe.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-toggle-copy-zones="${g(a.id)}" ${$?"":"disabled"}>${I===a.id?"收起复用":"复用至其他楼层…"}</button>`:'<span class="pacom-row-sub">用于区域控制与能耗分项统计</span>'}
                    </div>
                    ${I===a.id&&Fe.length>0?`
                        <div class="pacom-settings-card" style="padding:14px 18px; gap:10px;">
                          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                            <span style="font-size:13px; font-weight:450;">选择目标楼层（已选 ${j.size} 层）</span>
                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                            </div>
                          </div>
                          <div style="display:flex; flex-wrap:wrap; gap:6px;">
                            ${Fe.map(Z=>{const ke=j.has(Z.id),De=x().filter(Pe=>Pe.floorId===Z.id).length;return`
                                  <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${ke}">
                                    <input type="checkbox" data-copy-target-floor="${g(Z.id)}" ${ke?"checked":""} style="margin:0;" />
                                    <span>${g(Z.name)}${De>0?` (${De}区)`:""}</span>
                                  </label>`}).join("")}
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-copy-zones="${g(a.id)}">取消</button>
                            <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${g(a.id)}" ${j.size===0?"disabled":""}>确认复制到已选（${j.size} 层）</button>
                          </div>
                        </div>`:""}
                    <div class="pacom-settings-card">
                      ${d.length===0?`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:flex-start; gap:8px;">
                            <span class="pacom-row-sub">本层暂未划分功能区，可直接套用常用模板或手动添加：</span>
                            <div style="display:flex; flex-wrap:wrap; gap:6px;">
                              ${At.map(Z=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${g(Z.key)}" data-tpl-floor="${g(a.id)}" ${$?"":"disabled"}>+ ${g(Z.label)}</button>`).join("")}
                            </div>
                          </div>`:d.map(Z=>c===Z.id?`
                                    <form class="pacom-setting-row" style="gap:8px;" data-save-edit-zone="${g(Z.id)}" data-zone-floor="${g(a.id)}">
                                      <input class="pacom-input" name="zName" value="${g(Z.name)}" required />
                                      <select class="pacom-select" name="zCat">
                                        ${Object.keys(bt).map(ke=>`<option value="${ke}" ${Z.category===ke?"selected":""}>${bt[ke]}</option>`).join("")}
                                      </select>
                                      <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                      <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                    </form>`:`
                                    <div class="pacom-setting-row">
                                      <div class="pacom-setting-meta">
                                        <span class="pacom-setting-title">${g(Z.name)} <span class="pacom-badge pacom-badge--neutral">${g(bt[Z.category]??Z.category)}</span></span>
                                      </div>
                                      <div class="pacom-setting-control">
                                        <span class="pacom-row-sub">${C(a.id).filter(ke=>ke.logicalZoneId===Z.id).length} 台设备</span>
                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${g(Z.id)}" ${$?"":"disabled"}>编辑</button>
                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${g(Z.id)}" ${$?"":"disabled"}>删除</button>
                                      </div>
                                    </div>`).join("")}
                      <form class="pacom-setting-row" style="gap:8px;" data-add-zone="${g(a.id)}">
                        <input class="pacom-input" name="zoneName" placeholder="输入新功能区名称（如：${g(a.name)} 东侧实验区）" required ${$?"":"disabled"} />
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
                        <input type="file" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${g(a.id)}" style="display:none;" ${$?"":"disabled"} />
                      </label>
                    </div>
                    ${m.length===0?'<div class="pacom-settings-card" style="padding:14px 18px;"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':`
                        <div class="pacom-table-card">
                          <div class="pacom-table-wrap">
                            <table class="pacom-table">
                              <thead><tr><th>文档名称</th><th>类型</th><th>关联范围</th><th style="text-align:right;">操作</th></tr></thead>
                              <tbody>
                                ${m.map(Z=>`
                                    <tr>
                                      <td><div style="font-weight:450;">${g(Z.name)}</div><div class="pacom-row-sub">${g(Z.size)} · ${g(Z.updatedAt)}</div></td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${g(Z.category)}</span></td>
                                      <td><span class="pacom-row-sub">${g(Z.boundScope)}</span></td>
                                      <td style="text-align:right;"><button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${g(Z.id)}">查阅</button></td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>`}
                  </section>`:'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前筛选无匹配楼层</div>'}
          </div>
        </div>
      </div>
    `}function Wt($){if(R.projects.length===0)return`
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div class="dep-empty-card" style="max-width:480px; width:100%; background:var(--pacom-surface-card);">
            <div class="dep-empty-icon">${ge("map-pin",20)}</div>
            <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">请先创建项目并上传楼层底图</strong>
            <span class="pacom-row-sub">完成项目、楼宇与 2D 平面底图配置后，即可在此开展设备标点与硬件绑定。</span>
            <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-proj="1" ${$?"":"disabled"}>+ 创建第一个项目</button>
          </div>
        </main>`;const F=S?f(S):[],W=F.find(m=>m.id===T)??F[0],L=C(T),ae=x().filter(m=>m.floorId===T),X=G?L.find(m=>m.id===se)??null:null,i=X?Ve.get(X.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${T.slice(-4)}`}:null,n=X?je.filter(m=>m.deviceId===X.id):[],a=q.trim().toLowerCase(),d=L.filter(m=>!(z==="unverified"&&m.physicalInstalled||z==="unplaced"&&m.planPoint||a&&!`${m.name} ${ie(m.logicalZoneId)}`.toLowerCase().includes(a)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${ge("search",16)}
            <input class="pacom-hud-input" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${g(q)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${D?"is-active":""}" data-toggle-hud-pool="1">设备池 ${L.length}</button>
            <button type="button" class="pacom-hud-pill" data-toggle-new-dev="1" ${$?"":"disabled"}>+ 标点</button>
          </div>

          ${D||ze?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${ze?"新增设备标点":`${g(W?.name??"7F")} 设备池（${d.length}）`}</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${ge("x",16)}</button>
                </div>
                ${ze?`
                    <form data-create-dev="1" style="padding:12px; display:flex; flex-direction:column; gap:8px;">
                      <input class="pacom-input" name="devName" placeholder="设备名称（如：703 会议室三控面板）" required />
                      <select class="pacom-select" name="devPreset">${vt.map(m=>`<option value="${m.key}">${m.label}</option>`).join("")}</select>
                      <select class="pacom-select" name="devZone">${ae.map(m=>`<option value="${g(m.id)}">${g(m.name)}</option>`).join("")}</select>
                      <button type="submit" class="pacom-btn pacom-btn--primary">加入图纸并预设 Mesh 角色</button>
                    </form>`:`
                    <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                      <div class="pacom-count-pills">
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${z==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${L.length}</span></button>
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${z==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${L.filter(m=>!m.physicalInstalled).length}</span></button>
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${z==="unplaced"}" data-dev-filter="unplaced">未标点 <span class="pacom-count-num">${L.filter(m=>!m.planPoint).length}</span></button>
                      </div>
                    </div>
                    <div class="pacom-list" style="padding:6px;">
                      ${d.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':d.map(m=>`
                                <div class="pacom-row ${m.id===se&&G?"is-selected":""}" data-pick-dev="${g(m.id)}" style="padding:8px;">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${g(m.name)}</div>
                                    <div class="pacom-row-sub">${g(ie(m.logicalZoneId))} · ${m.physicalInstalled?"已复核":"待复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${m.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${m.planPoint?"已标点":"未标点"}</span>
                                </div>`).join("")}
                    </div>`}
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${qe?"crosshair":"grab"};">
          ${W?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${ue}px, ${de}px) scale(${te});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${g(W.plan.imageUrl)}" alt="${g(W.name)} 平面图" />
                  ${ee==="zone"?ae.map(m=>{const P=U[m.id];return P?`<div class="pacom-zone-hotspot is-active" style="left:${P.left}%; top:${P.top}%; width:${P.width}%; height:${P.height}%;"><span class="pacom-zone-tag">${g(m.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${L.filter(m=>m.planPoint).map(m=>`
                      <button type="button" class="pacom-pin ${m.id===se&&G?"is-selected":""} ${m.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(m.planPoint.x*100).toFixed(2)}%; top:${(m.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${g(m.id)}" title="${g(m.name)}">
                        <span class="pacom-dot ${m.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${g(ja(m))}</span>
                      </button>`).join("")}
                  ${ee==="light_marker"||X?.category==="lighting"?je.filter(m=>L.some(P=>P.id===m.deviceId)).map(m=>`
                            <span class="dep-light-dot" style="left:${(m.x*100).toFixed(1)}%; top:${(m.y*100).toFixed(1)}%;" title="${g(m.label)}（${g(m.channel)}）">
                              ${ge("sparkles",12)}<span>${g(m.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="project_config" data-proj-sub="floor_zones">前往「项目配置」上传真实底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${F.map(m=>`
              <button type="button" class="pacom-elev-item ${m.id===T?"is-active":""}" data-scrubber-floor="${g(m.id)}" title="${g(m.name)}${m.plan?" · 已传底图":" · 待传底图"}">
                ${m.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${g(m.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${ee==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${ee==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${ee==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${ge("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(te*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${ge("plus",16)}</button>
        </div>

        ${X?`
            <aside class="pacom-drawer" aria-label="设备部署属性">
              <div class="pacom-drawer-head">
                <div style="min-width:0;">
                  <h2 class="pacom-drawer-title">${g(X.name)}</h2>
                  <div class="pacom-row-sub">${g(ie(X.logicalZoneId))} · v${X.version}</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${ge("x",16)}</button>
              </div>

              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${$?"":"disabled"}>${qe?"点击图纸定位中…":"点图更新坐标"}</button>
                <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${g(X.id)}">Ping 闪灯 5s</button>
                <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
              </div>

              ${X.category==="lighting"?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:14px; font-weight:450;">回路可视化灯点（${n.length}）</span>
                      <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${g(X.id)}" ${$?"":"disabled"}>+ 添加灯点</button>
                    </div>
                    ${n.map(m=>`
                        <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                          <span><strong>${g(m.channel)}</strong> · ${g(m.label)}</span>
                          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:13px;" data-del-light-marker="${g(m.id)}" ${$?"":"disabled"}>删</button>
                        </div>`).join("")}
                  </div>`:""}

              ${X.category!=="hvac"&&X.category!=="meter"&&i?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                      <code style="font-size:12px;">${g(i.meshUuid)}</code>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                      <span>Proxy 代理（建议每层 2–3 个）</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${i.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${g(X.id)}" ${$?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                      <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${i.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${g(X.id)}" ${$?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                    </div>
                  </div>`:""}

              <form data-role="binding-form" class="pacom-control-box" style="gap:8px;">
                <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                  <select class="pacom-select" style="height:30px; font-size:13px;" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(m=>`<option value="${m}" ${X.hardwareBinding?.protocol===m?"selected":""}>${m.toUpperCase()}</option>`).join("")}
                  </select>
                  <input class="pacom-input" style="height:30px; font-size:13px;" name="networkAddress" placeholder="网络地址/主题" value="${g(X.hardwareBinding?.networkAddress??"")}" />
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                  <input class="pacom-input" style="height:30px; font-size:13px;" name="portOrChannel" placeholder="端口/回路" value="${g(X.hardwareBinding?.portOrChannel??"")}" />
                  <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; flex-shrink:0;">
                    <span>物理已复核</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${Ae}" data-toggle-phys="1" ${$?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </span>
                </div>
                <button class="pacom-btn pacom-btn--primary" type="submit" ${$?"":"disabled"}>保存绑定与复核（v${X.version}）</button>
              </form>
            </aside>`:""}
      </main>
    `}function Gt($){const F=C(T),W=A.trim().toLowerCase(),L=F.filter(n=>!(N==="online"&&n.connectivity!=="online"||N==="offline"&&n.connectivity!=="offline"||N==="unverified"&&n.physicalInstalled||W&&!`${n.name} ${ie(n.logicalZoneId)} ${n.hardwareBinding?.protocol??""}`.toLowerCase().includes(W))),ae=F.filter(n=>n.connectivity==="online").length,X=u?F.find(n=>n.id===u)??null:null,i=X?k.get(X.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450}:null;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" style="width:220px;" data-ledger-search placeholder="搜索设备名称或功能区…" value="${g(A)}" aria-label="搜索设备列表" />
          <select class="pacom-select" data-ledger-filter aria-label="按设备状态筛选">
            <option value="all" ${N==="all"?"selected":""}>全部状态（${F.length}）</option>
            <option value="online" ${N==="online"?"selected":""}>仅看在线（${ae}）</option>
            <option value="offline" ${N==="offline"?"selected":""}>仅看离线（${F.length-ae}）</option>
            <option value="unverified" ${N==="unverified"?"selected":""}>待物理复核（${F.filter(n=>!n.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${ge("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn" data-export-inv="1">导出 CSV</button>
        </div>
      </div>
      ${X&&i?`
          <form class="pacom-settings-card" data-save-dev-params="${g(X.id)}">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">设备参数配置：${g(X.name)}</span>
                <span class="pacom-setting-desc">人感自动关灯延时、光照度开关门限与默认亮度参数</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-close-param="1">${ge("x",16)}</button>
            </div>
            <div class="pacom-setting-row" style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px;">
              <label class="pacom-field"><span>自动关灯延时(分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${i.offDelayMin}" /></label>
              <label class="pacom-field"><span>恢复自动延时(分)</span><input class="pacom-input" name="restoreMin" type="number" value="${i.restoreMin}" /></label>
              <label class="pacom-field"><span>开灯光感门限(lx)</span><input class="pacom-input" name="luxOn" type="number" value="${i.luxOn}" /></label>
              <label class="pacom-field"><span>关灯光感门限(lx)</span><input class="pacom-input" name="luxOff" type="number" value="${i.luxOff}" /></label>
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
              ${L.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词或切换状态筛选。</span></div></td></tr>':L.map(n=>`
                        <tr>
                          <td><div style="font-weight:450;">${g(n.name)}</div><div class="pacom-row-sub">${g(ie(n.logicalZoneId))} · v${n.version}</div></td>
                          <td><span class="pacom-badge ${n.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${n.planPoint?`${Math.round(n.planPoint.x*100)}%,${Math.round(n.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${n.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${n.hardwareBinding?n.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${n.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${n.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${n.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${n.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${g(n.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-param="${g(n.id)}">参数</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${g(n.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${L.length} / ${F.length} 台设备 · ${ae} 在线 · ${F.length-ae} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dep-nav="floorplan">前往设备标记 →</button>
        </div>
      </div>
    `}function Kt(){const $=Ge.filter(W=>W.track==="mesh_auto"),F=Ge.filter(W=>W.track==="cloud_biz");return`
      ${y?`
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
                    <span class="pacom-setting-title">${g(W.name)} <span class="pacom-badge pacom-badge--neutral">${g(W.groupType)}</span></span>
                    <span class="pacom-setting-desc">成员 ${W.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                  </div>
                  <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${g(W.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${F.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${F.map(W=>`
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">${g(W.name)} <span class="pacom-badge pacom-badge--neutral">${g(W.groupType)}</span></span>
                    <span class="pacom-setting-desc">成员 ${W.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                  </div>
                  <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${g(W.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>
      </div>
    `}function Yt(){const $=C(T),F=x().filter(a=>a.floorId===T),W=$.filter(a=>a.category!=="hvac"&&a.category!=="meter"),L=W.filter(a=>Ve.get(a.id)?.proxy).length,ae=W.filter(a=>Ve.get(a.id)?.relay).length,X=$.filter(a=>a.category==="gateway"),i=$.filter(a=>Ve.get(a.id)?.relay||Ve.get(a.id)?.proxy),n=$.filter(a=>a.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge pacom-badge--online">协同锁空闲 · 可同步</span>
            <span class="pacom-row-sub">Mesh 节点 ${W.length} 台 · Proxy ${L} 个 · Relay ${ae} 个 · 边缘基线 v${he}</span>
          </div>
        </div>
        ${Me.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${Me.map(a=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${g(a.title)}</strong> <span class="pacom-row-sub">· ${g(a.detail)}</span></div>
                      <span class="pacom-badge ${a.level==="ok"?"pacom-badge--online":a.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${a.level==="ok"?"通过":a.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达图纸标点）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${xe==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${xe==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${xe==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${X.map(a=>`
                    <button type="button" class="dep-topo-node ${a.connectivity==="offline"?"is-issue":""}" data-topo-jump="${g(a.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(a.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                      <span class="pacom-row-sub">${g(a.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${i.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，请在图纸标点抽屉中为传感器开启。</div>':i.map(a=>{const d=Ve.get(a.id);return`
                            <button type="button" class="dep-topo-node ${a.connectivity==="offline"?"is-issue":""}" data-topo-jump="${g(a.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(a.name)}</strong><span class="pacom-badge pacom-badge--accent">${d?.proxy?"Proxy":""}${d?.proxy&&d?.relay?" + ":""}${d?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${g(ie(a.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${n.map(a=>`
                    <button type="button" class="dep-topo-node ${a.connectivity==="offline"?"is-issue":""}" data-topo-jump="${g(a.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(a.name)}</strong><span class="pacom-badge ${a.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${a.connectivity==="online"?"在线":"离线"}</span></div>
                      <span class="pacom-row-sub">${g(ie(a.logicalZoneId))} · ${g(a.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                    </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${$.filter(a=>a.category==="sensor"||a.category==="gateway").map(a=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${g(a.id)}">
                      <strong>${g(a.name)}</strong>
                      <span class="pacom-row-sub">${a.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${$.filter(a=>a.category==="lighting"||a.category==="hvac").map(a=>`
                    <button type="button" class="dep-topo-node ${a.connectivity==="offline"?"is-issue":""}" data-topo-jump="${g(a.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(a.name)}</strong><span class="pacom-badge ${a.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${a.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${g(ie(a.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${F.map(a=>{const d=$.filter(P=>P.logicalZoneId===a.id),m=d.some(P=>P.connectivity==="offline");return`
                      <div class="dep-topo-node ${m?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(a.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${m?"pacom-badge--warning":"pacom-badge--online"}">${d.length} 台设备</span></div>
                        <span class="pacom-row-sub">${m?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function Xt(){const $=fe.reduce((ae,X)=>ae+X.collectedPoints,0),F=fe.reduce((ae,X)=>ae+X.calculatedPoints,0),W=fe.filter(ae=>ae.status==="connected").length,L=fe.filter(ae=>ae.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${W}<span class="pacom-kpi-unit">/ ${fe.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${fe.length?Math.round(W/fe.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${$}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${F}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${L.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${L.length} 条采集通道通信降级（${L.map(ae=>ae.name).join("、")}）</span>
                <span class="pacom-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
              </div>
            </div>`:""}

      ${Te?`
          <form class="pacom-settings-card" data-create-conn="1">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">新增子系统接入通道</span>
                <span class="pacom-setting-desc">支持边缘网关、中央空调/线控网关、智能电表通讯机、空气质量与数字标牌（自动检测局域网端口冲突）</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-toggle-new-conn="1">${ge("x",16)}</button>
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
                ${fe.map(ae=>{const X=Ia[ae.status]??{label:ae.status,cls:"pacom-badge--neutral"},i=ae.status==="connected"?98:ae.status==="degraded"?62:0,n=i>=75?"var(--pacom-status-online)":i>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",a=ce===ae.id,d=a?La(ae,Ie):[];return`
                      <tr>
                        <td><strong>${g(ae.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${ae.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${g(ae.endpoint)}</code></td>
                        <td>采集 ${ae.collectedPoints} / 计算 ${ae.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${X.cls}">${X.label}</span>
                            <span class="pacom-row-sub">${i}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${i}%; background:${n};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${g(ae.id)}">${a?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${g(ae.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${g(ae.id)}" data-endpoint-val="${g(ae.endpoint)}">${w===ae.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${a?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${g(ae.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${d.map(m=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${g(m.deviceName)}</strong> · ${g(m.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${g(m.value)} · ${g(m.lastSeen)}</span>
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
    `}function _(){const $=o.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Qe({tree:Q(),session:o,scope:V,isOpen:B,searchKeyword:re})}
            </div>
            <div class="pacom-header-meta">
              ${Bt($)}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${_t()}
          ${r==="floorplan"?`<div class="pacom-unified-main--canvas">
                  ${ve?`<div class="pacom-banner pacom-banner--ok" style="margin-bottom:8px; flex-shrink:0;"><span class="pacom-banner-title">${g(ve)}</span></div>`:""}
                  ${$e?`<div class="pacom-alert-banner" style="margin-bottom:8px; flex-shrink:0;">${g($e)}</div>`:""}
                  ${Wt($)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head">
                    <h2 class="pacom-unified-title">${wt[r].title}</h2>
                    <p class="pacom-unified-subtitle">${wt[r].subtitle}</p>
                  </div>
                  ${r==="project_config"?`<div class="pacom-tabs" style="align-self:flex-start;" role="tablist" aria-label="项目配置分段">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="project_building"}" data-proj-sub-tab="project_building">项目与楼宇</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="floor_zones"}" data-proj-sub-tab="floor_zones">楼层与图纸</button>
                        </div>`:""}
                  ${ve?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${g(ve)}</span></div>`:""}
                  ${$e?`<div class="pacom-alert-banner">${g($e)}</div>`:""}
                  ${r==="overview"?Ut():r==="project_config"?E==="floor_zones"?Ht($):Zt($):r==="ledger"?Gt($):r==="groups"?Kt():r==="network_topo"?Yt():Xt()}
                </div>
              </div>`}
        </div>
      </div>
      ${le?`
          <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${g(le.title)}">
            <div class="dep-lightbox-card">
              <div class="dep-lightbox-head">
                <strong style="font-size:14px; font-weight:500;">${g(le.title)}</strong>
                <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${ge("x",16)}</button>
              </div>
              <div class="dep-lightbox-body">
                <img src="${g(le.imageUrl)}" alt="${g(le.title)}" />
              </div>
            </div>
          </div>`:""}
    `,Qt()}function Qt(){tt(t,{onToggle:()=>{B=!B,_(),B&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:i=>{re=i,_();const n=t.querySelector("[data-global-space-search]");n&&(n.focus(),n.setSelectionRange(i.length,i.length))},onPick:i=>{if(V=i,B=!1,i.level==="project"){v=i.projectId;const n=R.buildings.find(a=>a.projectId===i.projectId);n&&J(n.id)}else i.level==="building"?J(i.buildingId):i.level==="floor"&&Ee(i.floorId);_()}}),t.querySelectorAll("[data-dep-nav]").forEach(i=>{i.addEventListener("click",()=>{r=i.dataset.depNav??"overview",i.dataset.projSub&&(E=i.dataset.projSub),ve="",$e="",_()})}),t.querySelectorAll("[data-proj-sub-tab]").forEach(i=>{i.addEventListener("click",()=>{E=i.dataset.projSubTab??"project_building",_()})}),t.querySelector("[data-ledger-search]")?.addEventListener("input",i=>{A=i.currentTarget.value,_();const n=t.querySelector("[data-ledger-search]");n&&(n.focus(),n.setSelectionRange(A.length,A.length))}),t.querySelector("[data-ledger-filter]")?.addEventListener("change",i=>{N=i.currentTarget.value??"all",_()}),t.querySelectorAll("[data-refresh-dep]").forEach(i=>{i.addEventListener("click",()=>{oe()})}),t.querySelectorAll("[data-matrix-nav]").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.matrixFloor;n&&Ee(n),r=i.dataset.matrixNav??"floorplan",i.dataset.projSub&&(E=i.dataset.projSub),_()})}),t.querySelectorAll("[data-pick-floor-pill]").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.pickFloorPill;n&&(Ee(n),_())})}),t.querySelectorAll("[data-scrubber-floor]").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.scrubberFloor;n&&(Ee(n),_())})}),t.querySelector("[data-switch-proj-select]")?.addEventListener("change",i=>{const n=i.currentTarget.value;if(!n)return;v=n;const a=R.buildings.find(d=>d.projectId===n);a?J(a.id):(S="",T="",V=He({level:"project",projectId:n})),K=!1,p=!1,ve="",$e="",_()}),t.querySelectorAll("[data-toggle-new-proj]").forEach(i=>{i.addEventListener("click",()=>{pe=!pe,_()})}),t.querySelector("[data-go-create-proj]")?.addEventListener("click",()=>{r="project_config",E="project_building",pe=!0,_()}),t.querySelector("[data-go-create-bld]")?.addEventListener("click",()=>{E="project_building",K=!0,_()}),t.querySelector("[data-create-project]")?.addEventListener("submit",async i=>{i.preventDefault();const n=new FormData(i.currentTarget),a=String(n.get("pName")??"").trim(),d=String(n.get("pCity")??"").trim(),m=String(n.get("pAddr")??"").trim(),P=String(n.get("pLng")??"").trim(),Se=String(n.get("pLat")??"").trim();if(!a)return;let Fe;if(P||Se){const Ce=Number(P),Z=Number(Se);if(!Number.isFinite(Ce)||!Number.isFinite(Z)||Ce<-180||Ce>180||Z<-90||Z>90){$e="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",_();return}Fe={lng:Ce,lat:Z,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const Ce=await e.createProject?.({name:a,city:d,address:m,location:Fe});pe=!1,Ce&&(v=Ce.id,S="",T="",V=He({level:"project",projectId:Ce.id})),ve=`已创建项目「${a}」，下一步可添加园区楼宇。`,await oe()}catch(Ce){$e=Ce instanceof Error?Ce.message:String(Ce),_()}}),t.querySelector("[data-delete-proj]")?.addEventListener("click",async i=>{const n=i.currentTarget.dataset.deleteProj,a=R.projects.find(d=>d.id===n);if(!(!n||!a)&&window.confirm(`确认删除项目「${a.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await e.deleteProject?.(n),ve=`已删除项目「${a.name}」。`,await oe()}catch(d){$e=d instanceof Error?d.message:String(d),_()}}),t.querySelector("[data-upload-proj]")?.addEventListener("change",async i=>{const n=i.currentTarget,a=n.dataset.uploadProj,d=n.files?.[0];if(!(!a||!d))try{const m=await it(d);await e.updateProject?.(a,{imageUrl:m}),ve=`已更新项目封面图（${d.name}）。`,await oe()}catch(m){$e=m instanceof Error?m.message:String(m),_()}}),t.querySelector("[data-save-project]")?.addEventListener("submit",async i=>{i.preventDefault();const n=i.currentTarget,a=n.dataset.saveProject??v,d=new FormData(n),m=String(d.get("pName")??"").trim(),P=String(d.get("pCity")??"").trim(),Se=String(d.get("pAddr")??"").trim(),Fe=String(d.get("pLng")??"").trim(),Ce=String(d.get("pLat")??"").trim();let Z;if(Fe||Ce){const ke=Number(Fe),De=Number(Ce);if(!Number.isFinite(ke)||!Number.isFinite(De)||ke<-180||ke>180||De<-90||De>90){$e="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",_();return}Z={lng:ke,lat:De,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await e.updateProject?.(a,{name:m,city:P,address:Se,location:Z}),ve=`已保存项目「${m||"当前项目"}」信息。`,await oe()}catch(ke){$e=ke instanceof Error?ke.message:String(ke),_()}}),t.querySelectorAll("[data-pick-building]").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.pickBuilding;n&&(J(n),ve="",_())})}),t.querySelector("[data-switch-bld-select]")?.addEventListener("change",i=>{const n=i.currentTarget.value;n&&(J(n),M="all",Y=!1,me=[],_())}),t.querySelectorAll("[data-toggle-new-bld]").forEach(i=>{i.addEventListener("click",()=>{K=!K,_()})}),t.querySelector("[data-create-bld]")?.addEventListener("submit",async i=>{i.preventDefault();const n=i.currentTarget,a=n.dataset.createBld??v,d=new FormData(n),m=String(d.get("bName")??"").trim(),P=String(d.get("bArea")??"").trim(),Se=Math.max(1,Number(d.get("bAbove")??12)),Fe=Math.max(0,Number(d.get("bBelow")??0)),Ce=!!d.get("bRoof"),Z=!!d.get("bAutoFloors");if(m)try{const ke=await e.upsertBuilding?.({projectId:a,name:m,aboveFloors:Se,belowFloors:Fe,hasRoof:Ce,areaSqm:P?Number(P):null});K=!1;let De=0;if(ke&&(S=ke.id,Z)){for(let Pe=1;Pe<=Se;Pe+=1)await e.upsertFloor?.({buildingId:ke.id,kind:"above",level:Pe,name:`${Pe}F`}),De+=1;for(let Pe=1;Pe<=Fe;Pe+=1)await e.upsertFloor?.({buildingId:ke.id,kind:"below",level:-Pe,name:`B${Pe}`}),De+=1;Ce&&(await e.upsertFloor?.({buildingId:ke.id,kind:"roof",level:99,name:"RF"}),De+=1)}ve=Z?`已创建楼宇「${m}」并自动生成 ${De} 个楼层。`:`已创建楼宇「${m}」。`,await oe()}catch(ke){$e=ke instanceof Error?ke.message:String(ke),_()}}),t.querySelector("[data-save-building]")?.addEventListener("submit",async i=>{i.preventDefault();const n=i.currentTarget,a=n.dataset.saveBuilding,d=R.buildings.find(ke=>ke.id===a);if(!d)return;const m=new FormData(n),P=String(m.get("bName")??"").trim()||d.name,Se=String(m.get("bArea")??"").trim(),Fe=Math.max(1,Number(m.get("bAbove")??d.aboveFloors)),Ce=Math.max(0,Number(m.get("bBelow")??d.belowFloors)),Z=!!m.get("bRoof");try{await e.upsertBuilding?.({id:a,projectId:d.projectId,name:P,aboveFloors:Fe,belowFloors:Ce,hasRoof:Z,areaSqm:Se?Number(Se):null}),ve=`已保存楼宇「${P}」参数。`,await oe()}catch(ke){$e=ke instanceof Error?ke.message:String(ke),_()}}),t.querySelector("[data-delete-building]")?.addEventListener("click",async i=>{const n=i.currentTarget.dataset.deleteBuilding,a=R.buildings.find(d=>d.id===n);if(!(!n||!a)&&window.confirm(`确认删除楼宇「${a.name}」及其下全部楼层与功能区？`))try{await e.deleteBuilding?.(n),ve=`已删除楼宇「${a.name}」。`,await oe()}catch(d){$e=d instanceof Error?d.message:String(d),_()}}),t.querySelector("[data-upload-bld]")?.addEventListener("change",async i=>{const n=i.currentTarget,a=n.dataset.uploadBld,d=n.files?.[0],m=R.buildings.find(P=>P.id===a);if(!(!a||!d||!m))try{const P=await it(d);await e.upsertBuilding?.({id:m.id,projectId:m.projectId,name:m.name,aboveFloors:m.aboveFloors,belowFloors:m.belowFloors,hasRoof:m.hasRoof,areaSqm:m.areaSqm,imageUrl:P}),ve=`已更新「${m.name}」外观图（${d.name}）。`,await oe()}catch(P){$e=P instanceof Error?P.message:String(P),_()}}),t.querySelectorAll("[data-fill-missing-floors]").forEach(i=>{i.addEventListener("click",async()=>{const n=i.dataset.fillMissingFloors;if(n)try{const a=await Vt(n);ve=a>0?`已自动补齐 ${a} 个楼层。`:"当前楼宇楼层已完整。",await oe()}catch(a){$e=a instanceof Error?a.message:String(a),_()}})}),t.querySelectorAll("[data-floor-list-filter]").forEach(i=>{i.addEventListener("click",()=>{M=i.dataset.floorListFilter??"all",_()})}),t.querySelectorAll("[data-toggle-new-floor]").forEach(i=>{i.addEventListener("click",()=>{p=!p,_()})}),t.querySelector("[data-toggle-batch-panel]")?.addEventListener("click",()=>{Y=!Y,_()}),t.querySelector("[data-create-floor]")?.addEventListener("submit",async i=>{i.preventDefault();const n=i.currentTarget,a=n.dataset.createFloor,d=new FormData(n),m=String(d.get("fName")??"").trim().toUpperCase(),P=String(d.get("fArea")??"").trim();if(!m)return;const Se=Xe(m)??m;if(f(a).some(De=>(Xe(De.name)??De.name.toUpperCase())===Se)){$e=`楼层「${m}」已存在，请使用其他名称。`,_();return}const Ce=lt(m),Z=Ce>=999?"roof":Ce<0?"below":"above",ke=Ce>=999?99:Ce||1;try{const De=await e.upsertFloor?.({buildingId:a,kind:Z,level:ke,name:m,areaSqm:P?Number(P):null});p=!1,De&&(T=De.id),ve=`已新增楼层「${m}」。`,await oe()}catch(De){$e=De instanceof Error?De.message:String(De),_()}}),t.querySelector("[data-save-floor]")?.addEventListener("submit",async i=>{i.preventDefault();const n=i.currentTarget,a=n.dataset.saveFloor,d=O().find(Pe=>Pe.id===a);if(!d)return;const m=new FormData(n),P=String(m.get("fName")??"").trim()||d.name,Se=String(m.get("fArea")??"").trim(),Fe=Xe(P)??P.toUpperCase();if(f(d.buildingId).some(Pe=>Pe.id!==d.id&&(Xe(Pe.name)??Pe.name.toUpperCase())===Fe)){$e=`楼层「${P}」已存在，请避免重复命名。`,_();return}const Z=lt(P),ke=Z>=999?"roof":Z<0?"below":"above",De=Z>=999?99:Z||d.level;try{await e.upsertFloor?.({id:d.id,buildingId:d.buildingId,kind:ke,level:De,name:P,areaSqm:Se?Number(Se):null}),ve=`已保存楼层「${P}」。`,await oe()}catch(Pe){$e=Pe instanceof Error?Pe.message:String(Pe),_()}}),t.querySelector("[data-delete-floor]")?.addEventListener("click",async i=>{const n=i.currentTarget.dataset.deleteFloor,a=O().find(d=>d.id===n);if(!(!n||!a)){if(C(n).length>0){$e=`楼层「${a.name}」已关联设备，请先移除设备后再删除。`,_();return}if(window.confirm(`确认删除楼层「${a.name}」及其功能区？`))try{await e.deleteFloor?.(n),ve=`已删除楼层「${a.name}」。`,await oe()}catch(d){$e=d instanceof Error?d.message:String(d),_()}}});async function $(i,n){const a=O().find(d=>d.id===i);if(a)try{const d=await it(n);await e.upsertFloor?.({id:a.id,buildingId:a.buildingId,kind:a.kind,level:a.level,name:a.name,areaSqm:a.areaSqm,planImageUrl:d}),ve=`已更新「${a.name}」平面底图（${n.name}）。`,await oe()}catch(d){$e=d instanceof Error?d.message:String(d),_()}}t.querySelector("[data-upload-floor]")?.addEventListener("change",i=>{const n=i.currentTarget,a=n.dataset.uploadFloor,d=n.files?.[0];a&&d&&$(a,d)});const F=t.querySelector("[data-single-floor-drop]");F&&o.scope.canEditDeployment&&(F.addEventListener("dragover",i=>{i.preventDefault(),F.style.borderColor="var(--pacom-accent-solid)"}),F.addEventListener("dragleave",()=>{F.style.borderColor=""}),F.addEventListener("drop",i=>{i.preventDefault(),F.style.borderColor="";const n=F.dataset.singleFloorDrop,a=Array.from(i.dataTransfer?.files??[]).find(d=>d.type.startsWith("image/"));n&&a&&$(n,a)})),t.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async i=>{const n=i.currentTarget.dataset.clearFloorPlan,a=O().find(d=>d.id===n);if(!(!n||!a)&&window.confirm(`确认清空「${a.name}」的平面底图？`))try{await e.upsertFloor?.({id:a.id,buildingId:a.buildingId,kind:a.kind,level:a.level,name:a.name,areaSqm:a.areaSqm,planImageUrl:null}),ve=`已清空「${a.name}」平面底图。`,await oe()}catch(d){$e=d instanceof Error?d.message:String(d),_()}}),t.querySelector("[data-open-lightbox]")?.addEventListener("click",i=>{const n=i.currentTarget,a=n.dataset.lbTitle??"平面底图预览",d=n.dataset.lbSrc??"";d&&(le={title:a,imageUrl:d},_())}),t.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{le=null,_()}),t.querySelector("[data-lightbox-scrim]")?.addEventListener("click",i=>{i.target===i.currentTarget&&(le=null,_())});function W(i,n){if(!i||n.length===0)return;const a=f(i),d=new Map;a.forEach(m=>{const P=Xe(m.name)??m.name.toUpperCase();d.set(P,m)}),me=n.map((m,P)=>{const Se=Xe(m.name),Fe=Se?d.get(Se):void 0;return{id:`bu-${Date.now().toString(36)}-${P}`,file:m,matchedFloorId:Fe?.id??null}}),Y=!0,_()}t.querySelector("[data-batch-upload-floors]")?.addEventListener("change",i=>{const n=i.currentTarget,a=n.dataset.batchUploadFloors??"";W(a,Array.from(n.files??[]))});const L=t.querySelector("[data-batch-dropzone]");L&&o.scope.canEditDeployment&&(L.addEventListener("dragover",i=>{i.preventDefault(),Le||(Le=!0,L.style.borderColor="var(--pacom-accent-solid)",L.style.background="var(--pacom-accent-soft)")}),L.addEventListener("dragleave",()=>{Le=!1,L.style.borderColor="",L.style.background=""}),L.addEventListener("drop",i=>{i.preventDefault(),Le=!1;const n=L.dataset.batchDropzone??"",a=Array.from(i.dataTransfer?.files??[]).filter(d=>d.type.startsWith("image/"));W(n,a)})),t.querySelectorAll("[data-batch-override-floor]").forEach(i=>{i.addEventListener("change",()=>{const n=i.dataset.batchOverrideFloor,a=me.find(d=>d.id===n);a&&(a.matchedFloorId=i.value||null,_())})}),t.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{me=[],_()}),t.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const i=me.filter(a=>a.matchedFloorId),n=me.length-i.length;if(i.length!==0)try{for(const a of i){const d=O().find(P=>P.id===a.matchedFloorId);if(!d)continue;const m=await it(a.file);await e.upsertFloor?.({id:d.id,buildingId:d.buildingId,kind:d.kind,level:d.level,name:d.name,areaSqm:d.areaSqm,planImageUrl:m})}me=[],Y=!1,ve=`已批量导入 ${i.length} 个楼层平面底图${n>0?`（跳过 ${n} 张未分配文件）`:""}。`,await oe()}catch(a){$e=a instanceof Error?a.message:String(a),_()}}),t.querySelectorAll("[data-apply-zone-tpl]").forEach(i=>{i.addEventListener("click",async()=>{const n=i.dataset.applyZoneTpl,a=i.dataset.tplFloor,d=At.find(P=>P.key===n),m=O().find(P=>P.id===a);if(!(!d||!m))try{for(const P of d.items){const Se=await e.upsertZone?.({floorId:m.id,name:`${m.name} ${P.suffix}`,category:P.category});Se&&(U[Se.id]={left:20,top:20,width:24,height:24})}ve=`已按「${d.label}」模板为 ${m.name} 创建 ${d.items.length} 个功能区。`,await oe()}catch(P){$e=P instanceof Error?P.message:String(P),_()}})}),t.querySelector("[data-attach-doc]")?.addEventListener("change",i=>{const n=i.currentTarget,a=n.dataset.attachDoc,d=n.files?.[0],m=O().find(Se=>Se.id===a);if(!a||!d||!m)return;const P=d.size>=1024*1024?`${(d.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(d.size/1024))} KB`;h.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:a,name:d.name,category:d.name.toLowerCase().endsWith(".xlsx")||d.name.toLowerCase().endsWith(".xls")?"点位台账":"竣工图纸",boundScope:`${m.name} · 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:P}),ve=`已为 ${m.name} 关联文档「${d.name}」。`,_()}),t.querySelector("[data-add-zone]")?.addEventListener("submit",async i=>{i.preventDefault();const n=i.currentTarget.dataset.addZone,a=new FormData(i.currentTarget),d=String(a.get("zoneName")??"").trim(),m=String(a.get("zoneCat")??"office");if(d)try{const P=await e.upsertZone?.({floorId:n,name:d,category:m});P&&(U[P.id]={left:20,top:20,width:24,height:24}),ve=`已添加功能区「${d}」。`,await oe()}catch(P){$e=P instanceof Error?P.message:String(P),_()}}),t.querySelectorAll("[data-edit-zone]").forEach(i=>{i.addEventListener("click",()=>{c=i.dataset.editZone??null,_()})}),t.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{c=null,_()}),t.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async i=>{i.preventDefault();const n=i.currentTarget,a=n.dataset.saveEditZone,d=n.dataset.zoneFloor,m=new FormData(n),P=String(m.get("zName")??"").trim(),Se=String(m.get("zCat")??"office");if(P)try{await e.upsertZone?.({id:a,floorId:d,name:P,category:Se}),c=null,ve=`已更新功能区「${P}」。`,await oe()}catch(Fe){$e=Fe instanceof Error?Fe.message:String(Fe),_()}}),t.querySelectorAll("[data-del-zone]").forEach(i=>{i.addEventListener("click",async()=>{const n=i.dataset.delZone,a=x().find(d=>d.id===n);if(!(!n||!a)&&window.confirm(`确认删除功能区「${a.name}」？`))try{await e.deleteZone?.(n),c===n&&(c=null),ve=`已删除功能区「${a.name}」。`,await oe()}catch(d){$e=d instanceof Error?d.message:String(d),_()}})}),t.querySelectorAll("[data-toggle-copy-zones]").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.toggleCopyZones??null;I===n?(I=null,j.clear()):(I=n,j=new Set(f(S).filter(a=>a.id!==n&&a.kind==="above"&&x().filter(d=>d.floorId===a.id).length===0).map(a=>a.id))),_()})}),t.querySelectorAll("[data-copy-preset]").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.copyPreset,a=f(S).filter(d=>d.id!==I);n==="empty"?j=new Set(a.filter(d=>d.kind==="above"&&x().filter(m=>m.floorId===d.id).length===0).map(d=>d.id)):n==="above"?j=new Set(a.filter(d=>d.kind==="above").map(d=>d.id)):j.clear(),_()})}),t.querySelectorAll("[data-copy-target-floor]").forEach(i=>{i.addEventListener("change",()=>{const n=i.dataset.copyTargetFloor;n&&(i.checked?j.add(n):j.delete(n),_())})}),t.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async i=>{const n=i.currentTarget.dataset.confirmCopyZones,a=Array.from(j);if(!(!n||a.length===0))try{const d=await e.copyZonesToFloors?.(n,a)??0;I=null,j.clear(),ve=`已将当前层功能区复用至 ${a.length} 个目标楼层（共新增 ${d} 个功能区）。`,await oe()}catch(d){$e=d instanceof Error?d.message:String(d),_()}});const ae=t.querySelector("[data-dep-canvas-search]");ae?.addEventListener("focus",()=>{!D&&!ze&&(D=!0,_(),t.querySelector("[data-dep-canvas-search]")?.focus())}),ae?.addEventListener("input",i=>{q=i.currentTarget.value,D=!0,ze=!1,_();const n=t.querySelector("[data-dep-canvas-search]");n&&(n.focus(),n.setSelectionRange(q.length,q.length))}),t.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{D=!D,D&&(ze=!1),_()}),t.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{D=!1,ze=!1,_()}),t.querySelector("[data-toggle-new-dev]")?.addEventListener("click",()=>{ze=!ze,ze&&(D=!1),_()}),t.querySelectorAll("[data-brush]").forEach(i=>{i.addEventListener("click",()=>{ee=i.dataset.brush??"device",_()})}),t.querySelectorAll("[data-dep-zoom]").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.depZoom;n==="in"?te=Math.min(2.6,Number((te+.2).toFixed(2))):n==="out"?te=Math.max(.6,Number((te-.2).toFixed(2))):(te=1,ue=0,de=0),be()})});const X=t.querySelector('[data-role="dep-stage"]');if(X&&!qe){let i=!1,n=0,a=0,d=0,m=0;X.addEventListener("pointerdown",Se=>{Se.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(i=!0,n=Se.clientX,a=Se.clientY,d=ue,m=de,X.classList.add("is-panning"),X.setPointerCapture?.(Se.pointerId))}),X.addEventListener("pointermove",Se=>{i&&(ue=d+(Se.clientX-n),de=m+(Se.clientY-a),be())});const P=()=>{i&&(i=!1,X.classList.remove("is-panning"))};X.addEventListener("pointerup",P),X.addEventListener("pointercancel",P),X.addEventListener("wheel",Se=>{Se.preventDefault();const Fe=Se.deltaY<0?.12:-.12;te=Math.max(.6,Math.min(2.6,Number((te+Fe).toFixed(2)))),be()},{passive:!1}),X.addEventListener("dblclick",Se=>{Se.target?.closest("button")||(te=1,ue=0,de=0,be())})}t.querySelectorAll("[data-dev-filter]").forEach(i=>{i.addEventListener("click",()=>{z=i.dataset.devFilter??"all",_()})}),t.querySelector("[data-create-dev]")?.addEventListener("submit",i=>{i.preventDefault();const n=new FormData(i.currentTarget),a=String(n.get("devName")??"").trim(),d=String(n.get("devPreset")??"sensor"),m=String(n.get("devZone")??"")||null,P=vt.find(Fe=>Fe.key===d)??vt[0],Se=`dev-custom-${Date.now().toString(36)}`;ne.push({id:Se,name:a,category:P.category,projectId:b.projectId,buildingId:S,floorId:T,logicalZoneId:m,planPoint:{floorId:T,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),Ve.set(Se,{proxy:P.defaultProxy,relay:P.defaultRelay,meshUuid:`mesh-${T.slice(-4)}`}),P.category==="lighting"&&je.push({id:`lm-${Date.now().toString(36)}`,deviceId:Se,channel:"回路 1",label:`${a.slice(0,6)}主灯`,x:.52,y:.45}),se=Se,G=!0,ze=!1,ye=!0,ve=`已新增「${a}」（${P.hint}），已标注默认点位并标记待同步边缘。`,_()}),t.querySelectorAll("[data-pick-dev]").forEach(i=>{i.addEventListener("click",n=>{n.stopPropagation(),se=i.dataset.pickDev??null,G=!0,Ae=C(T).find(d=>d.id===se)?.physicalInstalled??!1,_()})}),t.querySelector("[data-close-sel]")?.addEventListener("click",()=>{G=!1,qe=!1,_()}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{qe=!qe,_()}),t.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{Ae=!Ae,_()}),t.querySelectorAll("[data-ping-dev]").forEach(i=>{i.addEventListener("click",()=>{const n=C(T).find(a=>a.id===i.dataset.pingDev);n&&(ve=`已向「${n.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,_())})}),t.querySelector("[data-add-light-marker]")?.addEventListener("click",i=>{const n=i.currentTarget.dataset.addLightMarker,a=je.filter(d=>d.deviceId===n).length+1;je.push({id:`lm-${Date.now().toString(36)}`,deviceId:n,channel:`回路 ${a}`,label:`照明点位 ${a}`,x:Math.min(.86,.35+a*.1),y:.42}),ee="light_marker",ve=`已新增「回路 ${a}」可视化灯点。`,_()}),t.querySelectorAll("[data-del-light-marker]").forEach(i=>{i.addEventListener("click",()=>{const n=je.findIndex(a=>a.id===i.dataset.delLightMarker);n>=0&&je.splice(n,1),_()})}),t.querySelectorAll("[data-toggle-mesh-role]").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.meshDev,a=i.dataset.toggleMeshRole,d=Ve.get(n)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};d[a]=!d[a],Ve.set(n,d),ye=!0,ve=`已更新节点 ${a.toUpperCase()} 状态，记得在「网络与拓扑」中同步下发至边缘网关。`,_()})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async i=>{const n=C(T).find(P=>P.id===se);if(!qe||!n)return;const a=i.currentTarget.getBoundingClientRect(),d=Math.max(.02,Math.min(.98,(i.clientX-a.left)/a.width)),m=Math.max(.02,Math.min(.98,(i.clientY-a.top)/a.height));if(ne.some(P=>P.id===n.id)){n.planPoint={floorId:T,planVersion:1,x:Number(d.toFixed(4)),y:Number(m.toFixed(4))},qe=!1,ve=`已更新「${n.name}」图上坐标。`,_();return}try{await e.updateDevicePlanPoint({deviceId:n.id,floorId:b.floorId,planVersion:n.planPoint?.planVersion??1,x:d,y:m,expectedVersion:n.version}),qe=!1,ve=`已更新「${n.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await oe()}catch(P){$e=P instanceof Error?P.message:String(P),_()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async i=>{i.preventDefault();const n=C(T).find(d=>d.id===se);if(!n)return;const a=new FormData(i.currentTarget);if(ne.some(d=>d.id===n.id)){n.physicalInstalled=Ae,n.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(a.get("protocol")),networkAddress:String(a.get("networkAddress")??""),portOrChannel:String(a.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:o.displayName},n.version+=1,ye=!0,ve=`已保存「${n.name}」的硬件绑定与物理复核状态。`,_();return}try{await e.updateDeviceHardwareBinding({deviceId:n.id,gatewayId:n.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(a.get("protocol")),networkAddress:String(a.get("networkAddress")??""),portOrChannel:String(a.get("portOrChannel")??""),physicalInstalled:Ae,expectedVersion:n.version}),ye=!0,ve=`已保存「${n.name}」的硬件绑定与物理安装复核状态。`,await oe()}catch(d){$e=d instanceof Error?d.message:String(d),_()}}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const i=C(T).find(n=>n.id===se);i&&Re(i)}),t.querySelectorAll("[data-ftt-dev]").forEach(i=>{i.addEventListener("click",()=>{const n=C(T).find(a=>a.id===i.dataset.fttDev);n&&Re(n)})}),t.querySelectorAll("[data-batch-ftt]").forEach(i=>{i.addEventListener("click",()=>We())}),t.querySelectorAll("[data-export-inv]").forEach(i=>{i.addEventListener("click",()=>dt())}),t.querySelectorAll("[data-open-param]").forEach(i=>{i.addEventListener("click",()=>{u=i.dataset.openParam??null,_()})}),t.querySelector("[data-close-param]")?.addEventListener("click",()=>{u=null,_()}),t.querySelector("[data-save-dev-params]")?.addEventListener("submit",i=>{i.preventDefault();const n=i.currentTarget.dataset.saveDevParams,a=new FormData(i.currentTarget);k.set(n,{offDelayMin:Number(a.get("offDelayMin")??15),restoreMin:Number(a.get("restoreMin")??30),luxOn:Number(a.get("luxOn")??280),luxOff:Number(a.get("luxOff")??450)}),u=null,ye=!0,ve="设备自治延时与光感门限参数已下发并同步至配置基线。",_()}),t.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{y=!y,_()}),t.querySelector("[data-create-group]")?.addEventListener("submit",i=>{i.preventDefault();const n=new FormData(i.currentTarget),a=String(n.get("gName")??"").trim(),d=n.get("gTrack")??"mesh_auto",m=String(n.get("gType")??"灯光联动组");a&&(Ge.unshift({id:`grp-${Date.now().toString(36)}`,track:d,groupType:m,name:a,floorId:T,includesAdapter:d==="mesh_auto",deviceIds:d==="mesh_auto"?["dev-e7f-gw-01"]:[]}),y=!1,d==="mesh_auto"&&(ye=!0),ve=`已新建${d==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${a}」。`,_())}),t.querySelectorAll("[data-test-group]").forEach(i=>{i.addEventListener("click",()=>{const n=Ge.find(a=>a.id===i.dataset.testGroup);n&&(ve=`已向分组「${n.name}」发送群组试控指令，${n.deviceIds.length} 台成员回读正常。`,_())})}),t.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>Je()),t.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{he+=1,ye=!1,ve=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${he}）。`,_()}),t.querySelectorAll("[data-topo-mode]").forEach(i=>{i.addEventListener("click",()=>{xe=i.dataset.topoMode??"mesh",_()})}),t.querySelectorAll("[data-topo-jump]").forEach(i=>{i.addEventListener("click",()=>{se=i.dataset.topoJump??null,G=!0,r="floorplan",_()})}),t.querySelector("[data-toggle-new-conn]")?.addEventListener("click",()=>{Te=!Te,_()}),t.querySelector("[data-create-conn]")?.addEventListener("submit",i=>{i.preventDefault();const n=new FormData(i.currentTarget),a=String(n.get("cName")??"").trim(),d=String(n.get("cProto")??"bacnet_ip"),m=String(n.get("cEndpoint")??"").trim();if(fe.some(P=>P.endpoint===m)){$e=`端口冲突警告：局域网端点「${m}」已被其他通道占用，请更换端口后重试。`,_();return}fe.unshift({id:`conn-${Date.now().toString(36)}`,projectId:b.projectId,buildingId:S,floorId:T,name:a,protocol:d,endpoint:m,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),Te=!1,$e="",ve=`已接入「${a}」（${m}），连通测试通过（18 ms）。`,_()}),t.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{ve="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",_()}),t.querySelectorAll("[data-expand-conn]").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.expandConn??null;ce=ce===n?null:n,_()})}),t.querySelectorAll("[data-ping-conn]").forEach(i=>{i.addEventListener("click",()=>{const n=fe.find(a=>a.id===i.dataset.pingConn);n&&($e="",n.status==="connected"?ve=`连通测试通过：「${n.name}」（${n.endpoint}）响应正常，延迟 18 ms。`:$e=`连通测试异常：「${n.name}」（${n.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,_())})}),t.querySelectorAll("[data-copy-endpoint]").forEach(i=>{i.addEventListener("click",async()=>{const n=i.dataset.endpointVal??"",a=i.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(n),w=a,_(),window.setTimeout(()=>{w=null,_()},1600)}catch{}})}),t.querySelectorAll("[data-preview-doc]").forEach(i=>{i.addEventListener("click",()=>{const n=[...Lt,...h].find(a=>a.id===i.dataset.previewDoc);n&&(ve=`已调阅工程附件「${n.name}」（关联范围：${n.boundScope}，更新于 ${n.updatedAt}）。`,_())})}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const i=await e.freezeDeliveryBatch(b.floorId,"部署总览验收发起交付冻结");ve=`已生成交付冻结快照 ${i.versionTag}（核验 ${i.verifiedCount}/${i.deviceCount}）。`,await oe()}catch(i){$e=i instanceof Error?i.message:String(i),_()}})}await oe()}function Ct(t){if(t.connectivity==="offline")return`${t.name.includes("VAV")?"VAV-02":t.name.slice(0,6)} 离线`;if(t.category==="lighting"){const e=t.name.includes("702")?"702 照明":"主照明",o=Number(t.telemetry.dimming?.value??0);return o>0?`${e} ${o}%`:`${e} 关`}return t.category==="hvac"?`${t.name.includes("VAV")?"VAV-02":"FCU-01"} ${t.telemetry.setpoint?.value??24}°C`:t.category==="sensor"?`环境 ${t.telemetry.temp?.value??"23.4"}°C`:t.category==="gateway"?"主控网关":t.name.slice(0,6)}const qt={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},Fa={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},Ca=ge("chevron-down",12),qa={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function H(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function zt(t){const e=t.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面"))return 999;const o=e.match(/(-?\d+)/);if(!o)return 0;const s=Number(o[1]);return e.startsWith("B")?-Math.abs(s):s}async function za(t,e,o){const s=await e.getSpatialTree();e.mode;const l=o.scope.canControlDevices,r=o.scope.canManageAlarms,E=o.scope.allowedZoneIds?.length?o.scope.allowedZoneIds:null,A=s.floors.filter(k=>o.scope.allowedFloorIds.includes(k.id)),N=E||s.projects.length<=1&&s.buildings.length<=1&&A.length<=1?"floors-only":s.projects.length>1?"multi-project":s.buildings.length>1?"single-project-multi-building":"single-building",V=N==="multi-project",B=N==="multi-project"||N==="single-project-multi-building",re=N!=="floors-only",ee=N==="floors-only"&&A.length<=1;let z=et(),q="devices",D=!1,G=!1,xe="",te="",ue="all",de="all";const R=new URLSearchParams(window.location.hash.split("?")[1]??""),Ie=R.get("device"),fe=R.get("zone");let we=Ie,U=!!Ie,ne="control",v="",S=!1,T="today",M="devices";const pe=new Set,K=new Set;let p=[],Y=[],Le=[],me=null,le=null,h=1,c=0,I=0,j=null;function se(){return s.zones.filter(k=>!(z.level==="floor"&&k.floorId!==z.floorId||E&&!E.includes(k.id)))}function Ae(k){return[...s.floors.filter(O=>O.buildingId!==k?!1:N==="floors-only"?o.scope.allowedFloorIds.includes(O.id):!0)].sort((O,f)=>zt(f.name)-zt(O.name))}async function qe(k,Q=!1){if(s.projects.length===0){z={level:"all-projects"},He(z),p=[],Y=[],Le=[],je();return}let O=k;O.level==="all-projects"&&!V&&(O={level:"project",projectId:s.projects[0]?.id??b.projectId}),O.level==="project"&&!B&&(O={level:"building",projectId:O.projectId,buildingId:s.buildings[0]?.id??b.buildingId}),O.level==="building"&&!re&&(O={level:"floor",projectId:O.projectId,buildingId:O.buildingId,floorId:A[0]?.id??b.floorId}),z=O,He(O),le=null,de=Q&&fe?fe:"all",S=!1,G=!1,D=!1,K.clear(),h=1,c=0,I=0,j&&(j(),j=null);const f=z.level==="floor"?z.floorId:b.floorId;if(z.level==="floor")try{const[x,C,ie]=await Promise.all([e.getFloorDevices(z.floorId),e.listAlarms(z.floorId),e.listWorkOrders(z.floorId)]);p=x,Y=C,Le=ie,p.some(J=>J.id===we)?Q&&Ie&&(U=!0):(we=p[1]?.id??p[0]?.id??null,U=!1),j=e.subscribeFloorEvents(z.floorId,async J=>{J.type==="control.receipt.updated"&&me?.batchId===J.batchId&&(me=await e.getControlBatch(J.batchId)),(J.type==="telemetry.updated"||J.type==="device.connectivity")&&z.level==="floor"&&(p=await e.getFloorDevices(z.floorId)),J.type==="alarm.changed"&&z.level==="floor"&&(Y=await e.listAlarms(z.floorId)),u()})}catch(x){p=[],Y=[],Le=[],we=null,U=!1,le=x instanceof Error?x.message:String(x)}else{U=!1;const[x,C,ie]=await Promise.all([e.getFloorDevices(f).catch(()=>[]),e.listAlarms(f).catch(()=>[]),e.listWorkOrders(f).catch(()=>[])]);p=x,Y=C,Le=ie}je()}function ze(k){return k?s.zones.find(Q=>Q.id===k)?.name??k:"未分配逻辑区"}function Te(){const k=te.trim().toLowerCase();return p.filter(Q=>de!=="all"&&Q.logicalZoneId!==de||ue!=="all"&&Q.category!==ue?!1:k?Q.name.toLowerCase().includes(k)||Q.id.toLowerCase().includes(k)||ze(Q.logicalZoneId).toLowerCase().includes(k):!0)}async function y(k,Q,O){!k.length||z.level!=="floor"||!l||(k.forEach(f=>pe.add(f)),me=await e.dispatchControlBatch({floorId:z.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:k.map(f=>({deviceId:f,command:Q,targetValue:O}))}),u())}function u(){const k=document.activeElement,Q=k?.dataset?.role,O=k&&"selectionStart"in k?k.selectionStart:null,f=k&&"selectionEnd"in k?k.selectionEnd:null,x=t.querySelector(".pacom-list")?.scrollTop??0;je();const C=t.querySelector(".pacom-list");if(C&&(C.scrollTop=x),Q==="search"||Q==="space-search"){const ie=t.querySelector(`[data-role="${Q}"]`);ie&&(ie.focus(),O!==null&&f!==null&&ie.setSelectionRange(O,f))}}function w(){const k=t.querySelector('[data-role="canvas-viewport"]');k&&(k.style.transform=`translate(${c}px, ${I}px) scale(${h})`);const Q=t.querySelector('[data-role="zoom-label"]');Q&&(Q.textContent=`${Math.round(h*100)}%`)}function ce(k){if(k==="all")return{level:"all-projects"};const Q=k.split(":");return Q[0]==="project"&&Q[1]?{level:"project",projectId:Q[1]}:Q[0]==="building"&&Q[1]&&Q[2]?{level:"building",projectId:Q[1],buildingId:Q[2]}:Q[0]==="floor"&&Q[1]&&Q[2]&&Q[3]?{level:"floor",projectId:Q[1],buildingId:Q[2],floorId:Q[3]}:{level:"all-projects"}}function he(k){const Q=z;if(Q.level==="all-projects"){const O=te.trim().toLowerCase(),f=s.projects.filter(x=>!O||x.name.toLowerCase().includes(O));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${f.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ge("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${f.map(x=>{const C=s.buildings.filter(ie=>ie.projectId===x.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${H(x.id)}">
                  <div>
                    <div class="pacom-row-title">${H(x.name)}</div>
                    <div class="pacom-row-sub">${H(x.city??"")} · ${C} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(Q.level==="project"){const O=te.trim().toLowerCase(),f=s.buildings.filter(ie=>ie.projectId===Q.projectId&&(!O||ie.name.toLowerCase().includes(O))),x=p.filter(ie=>ie.connectivity==="online").length,C=p.length?Math.round(x/p.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${f.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ge("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${f.map(ie=>{const J=ie.id===b.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${H(ie.projectId)}:${H(ie.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${J&&k>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${H(ie.name)}</div>
                      <div class="pacom-row-sub">地上 ${ie.aboveFloors} 层 · ${ie.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${J?"pacom-badge--accent":"pacom-badge--neutral"}">${J?`在线 ${C}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(Q.level==="building"){const O=te.trim().toLowerCase(),f=Ae(Q.buildingId).filter(C=>!O||C.name.toLowerCase().includes(O)),x=s.buildings.find(C=>C.id===Q.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${H(x?.name??"楼宇")} 楼层导览（${f.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ge("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${f.map(C=>{const ie=o.scope.allowedFloorIds.includes(C.id),J=C.id===b.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${ie?"":"opacity:0.6;"}" data-nav-scope="floor:${H(Q.projectId)}:${H(Q.buildingId)}:${H(C.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${J&&k>0?"pacom-dot--warning":C.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${H(x?.name??"")} ${H(C.name)}</div>
                      <div class="pacom-row-sub">${C.plan?"2D 平面控图就绪":"暂未上传平面图"}${J&&k>0?` · ${k} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${ie&&C.plan?"pacom-badge--online":"pacom-badge--neutral"}">${ie?C.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(q==="devices"){const O=Te(),f=se(),x=Array.from(K);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${E?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${E.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${ue==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${ue==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${ue==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${ue==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${ue==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${O.length} 台${l&&x.length?` · 已选 ${x.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ge("x",14)}</button>
          </div>
          ${f.length>0&&!le?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${de==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${f.map(C=>`<button type="button" class="pacom-zone-pill ${de===C.id?"is-active":""}" data-filter-zone="${H(C.id)}">${H(C.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${le?`<div class="pacom-alert-banner">${H(le)}</div>`:O.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':O.map(C=>{const ie=C.id===we&&U,J=K.has(C.id),Ee=C.connectivity==="offline",oe=Ee?"pacom-dot--critical":"pacom-dot--online",be=Ee?"离线":C.category==="lighting"?`${C.telemetry.dimming?.value??"--"}%`:C.category==="hvac"?`${C.telemetry.setpoint?.value??"--"}°C`:C.category==="sensor"?`${C.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${ie?"is-selected":""}" data-select-device="${H(C.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${l?`<input type="checkbox" name="devCheck-${H(C.id)}" data-check-device="${H(C.id)}" ${J?"checked":""} style="margin-top:3px;" aria-label="勾选 ${H(C.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${H(C.name)}</div>
                              <div class="pacom-row-sub">${H(ze(C.logicalZoneId).replace(/^7F\s*/,""))} · ${H(qt[C.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${Ee?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${oe}"></span>${H(be)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${l&&x.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${x.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(q==="zones"){const O=se(),f={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${O.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ge("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${O.map(x=>{const C=p.filter(be=>be.logicalZoneId===x.id),ie=C.filter(be=>be.connectivity==="online").length,J=C.filter(be=>be.category==="lighting"||be.category==="hvac").length,Ee=de===x.id,oe=f[x.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${Ee?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${Ee?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${H(Ee?"all":x.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${H(x.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${ie}/${C.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${oe.temp} · ${oe.occ}</div>
                  ${J>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${H(x.id)}" data-zone-val="true" ${l?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${H(x.id)}" data-zone-val="false" ${l?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${Y.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ge("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${Y.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':Y.map(O=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${H(O.title)}</strong>
                      <span class="pacom-badge ${O.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${O.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${H(O.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${H(O.deviceId)}">定位设备</button>
                      ${O.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${H(O.id)}" ${r?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function ye(k){const Q=z,O=se().length,f=Q.level==="floor"?"搜索设备或区域…":Q.level==="building"?"搜索楼层…":Q.level==="project"?"搜索楼宇…":"搜索园区…",x=Q.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${D&&q==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${p.length}</button>
          <button type="button" class="pacom-hud-pill ${D&&q==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${O}</button>
          <button type="button" class="pacom-hud-pill ${k>0?"pacom-hud-pill--alert":""} ${D&&q==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${k}</button>
        `:Q.level==="building"?`
            <button type="button" class="pacom-hud-pill ${D?"is-active":""}" data-toggle-hud="1">楼层 ${Ae(Q.buildingId).length}</button>
            ${k>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${k}</button>`:""}
          `:Q.level==="project"?`
              <button type="button" class="pacom-hud-pill ${D?"is-active":""}" data-toggle-hud="1">楼宇 ${s.buildings.filter(C=>C.projectId===Q.projectId).length}</button>
              ${k>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${k}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${D?"is-active":""}" data-toggle-hud="1">园区 ${s.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${ge("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${f}" value="${H(te)}" aria-label="${f}" />
          ${x}
        </div>
        ${D?`<div class="pacom-hud-sheet" data-role="hud-sheet">${he(k)}</div>`:""}
      </div>
    `}function Me(k){if(ee||z.level!=="building"&&z.level!=="floor")return"";const Q=z.buildingId,O=z.projectId,f=Ae(Q);return!re&&f.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${re?`<button type="button" class="pacom-elev-item ${z.level==="building"?"is-active":""}" data-nav-scope="building:${H(O)}:${H(Q)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${f.map(x=>{const C=o.scope.allowedFloorIds.includes(x.id),ie=z.level==="floor"&&z.floorId===x.id,J=x.id===b.floorId&&k>0;return`
              <button type="button" class="pacom-elev-item ${ie?"is-active":""} ${C?"":"is-locked"}"
                data-nav-scope="floor:${H(O)}:${H(Q)}:${H(x.id)}"
                title="${H(x.name)}${C?J?` · ${k} 条告警`:"":"（无权限）"}">
                ${J?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${H(x.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function Be(k,Q){const O=z;if(O.level==="floor")return le?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${M==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${M==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${M==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${ge("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(h*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${ge("plus",14)}</button>
        </div>
      `;const f=p.length?Math.round(k/p.length*100):100,x=O.level==="building"?"418 kWh":"1,248 kWh",C=Math.round(96.2*.45+93.6*.35+f*.2),ie=O.level==="building"?Ae(O.buildingId).find(J=>J.id===b.floorId)??Ae(O.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${C}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="environment">
          <span>舒适度 <strong>96.2%</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="energy">
          <span>今日能耗 <strong>${x}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${Q>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${Q}</strong></span>
        </button>
        ${O.level==="building"&&ie?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${H(O.projectId)}:${H(O.buildingId)}:${H(ie.id)}">进入 ${H(ie.name)} 平面图 →</button>`:""}
      </div>
    `}function ve(k,Q){const O=z,f=p.length?Math.round(k/p.length*100):100;if(O.level==="all-projects")return`
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
            ${s.projects.map((J,Ee)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${Ee===0?50:28}%; top:${Ee===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${H(J.id)}">
                  <span class="pacom-dot ${Q>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${H(J.name)} · 在线 ${f}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(O.level==="project"){const J=s.projects.find(oe=>oe.id===O.projectId)??s.projects[0],Ee=s.buildings.filter(oe=>!J||oe.projectId===J.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${H(J?.imageUrl??"./media/gzlab.jpg")}" alt="${H(J?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${Ee.map((oe,be)=>{const Re=oe.id===b.buildingId;return`
                  <button type="button" class="pacom-pin ${Re?"is-selected":""}" style="left:${be===0?56:38}%; top:${be===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${H(oe.projectId)}:${H(oe.id)}">
                    <span class="pacom-dot ${Re&&Q>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${H(oe.name)} · ${Re?`在线 ${f}% · 告警 ${Q}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(O.level==="building"){const J=s.buildings.find(oe=>oe.id===O.buildingId),Ee=Ae(O.buildingId).find(oe=>oe.id===b.floorId)??Ae(O.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${H(J?.imageUrl??"./media/building-e.webp")}" alt="${H(J?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${Ee?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${H(O.projectId)}:${H(O.buildingId)}:${H(Ee.id)}">
                    <span class="pacom-dot ${Q>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${H(J?.name??"")} ${H(Ee.name)} · 在线 ${k}/${p.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const x=s.floors.find(J=>J.id===O.floorId),C=s.buildings.find(J=>J.id===O.buildingId),ie=se();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${le?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${H(le)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${c}px, ${I}px) scale(${h});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${H(x?.plan?.imageUrl??"./media/floors/e/07F.webp")}" alt="${H(C?.name??"楼宇")} ${H(x?.name??"7F")} 平面图" />
                  ${ie.map((J,Ee)=>{const oe=qa[J.id];if(!oe)return"";const be=de===J.id,Re=["23.2°C","24.6°C","22.8°C","23.9°C"],We=["有人 74%","会议中","有人 52%","空闲"],Je=M==="temp"?` · ${Re[Ee%Re.length]}`:M==="occupancy"?` · ${We[Ee%We.length]}`:"",dt=M==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":M==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${be?"is-active":""}"
                          style="left:${oe.left}%; top:${oe.top}%; width:${oe.width}%; height:${oe.height}%; ${be?"":dt}"
                          data-filter-zone="${H(be?"all":J.id)}"
                          title="${H(J.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${H(J.name.replace(/^7F\s*/,""))}${Je}</span>
                        </button>`}).join("")}
                  ${p.filter(J=>J.planPoint).map(J=>{const Ee=Y.some(Je=>Je.deviceId===J.id&&Je.status==="active"),oe=D&&q==="alarms",be=de!=="all"&&J.logicalZoneId!==de||oe&&!Ee,Re=oe&&Ee?"background:var(--pacom-status-critical);":"",We=J.category==="gateway"?Math.min(92,J.planPoint.y*100+5.5):J.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${J.id===we&&U?"is-selected":""} ${J.connectivity==="offline"?"pacom-pin--offline":""} ${be?"pacom-pin--dimmed":""}"
                          style="left:${(J.planPoint.x*100).toFixed(2)}%; top:${We.toFixed(2)}%; ${Re}"
                          data-pin-device="${H(J.id)}" title="${H(J.name)}">
                          <span class="pacom-dot ${Ee?"pacom-dot--critical":J.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${H(Ct(J))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function $e(){if(z.level!=="floor"||!U)return"";const k=p.find(be=>be.id===we);if(!k)return"";const Q=k.category==="lighting",O=k.category==="hvac",f=Number(k.telemetry.dimming?.value??50),x=Number(k.telemetry.setpoint?.value??24),C=pe.has(k.id),ie=Y.filter(be=>be.deviceId===k.id&&be.status==="active"),J=Le.filter(be=>be.deviceId===k.id&&be.status!=="closed"),Ee=O?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:Q?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],oe=Q?[{label:"当前开关",value:f>0?"开启":"关闭"},{label:"当前亮度",value:`${f}%`},{label:"实时功率",value:f>0?`${Math.round(f*1.4)} W`:"0 W"},{label:"运行模式",value:C?"人工覆盖":"自动策略"}]:O?[{label:"室内温度",value:`${k.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${x.toFixed(1)}°C`},{label:"运行工况",value:k.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:C?"人工覆盖":"自动策略"}]:k.category==="sensor"?[{label:"实时温度",value:`${k.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${k.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${k.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:k.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:k.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:k.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:k.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:k.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${H(k.name)}</h2>
            <div class="pacom-row-sub">${H(ze(k.logicalZoneId))} · ${H(qt[k.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${k.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${k.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${ge("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${ne==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${ne==="trend"}" data-drawer-tab="trend">趋势与告警${ie.length>0?` (${ie.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${ne==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${ne==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${oe.map(be=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${be.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${H(be.value)}</strong>
                  </div>`).join("")}
            </div>

            ${O?`
                <div class="pacom-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${k.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${H(k.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${k.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${k.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${k.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${k.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${x.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${Q||O?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${C&&l?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${H(k.id)}">恢复自动策略</button>`:l?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${k.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${Q?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${l?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${l?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${f}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${f}" data-ctrl-slider="lighting.dimming" ${l?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${l?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${l?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${x-.5}" ${l?"":"disabled"}>-0.5°C</button>
                        <strong>${x.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${x+.5}" ${l?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${me?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${H(me.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${me.receipts.map(be=>{const Re=Fa[be.status]??{text:be.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${H(be.deviceId)}</strong> · ${H(be.command)} → ${H(be.targetValue)}</div>
                              ${be.errorMessage?`<div style="color:var(--pacom-status-critical);">${H(be.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${Re.badge}">${Re.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:ne==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${Q?"亮度 %":O?"温度 °C":k.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${H(k.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${k.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${Q?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":O?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${ie.length===0&&J.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${ie.map(be=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${H(be.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${H(be.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${J.map(be=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${H(be.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${H(be.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${H(Ct(k))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${H(ze(k.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${v?`<div class="pacom-info-banner">${H(v)}</div>`:""}
                ${Ee.map(be=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${H(be.name)}">${H(be.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${H(be.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="pacom-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${ge("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${H(k.id)}</code> · v${k.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${k.planPoint?`x=${k.planPoint.x.toFixed(2)}, y=${k.planPoint.y.toFixed(2)} (图 v${k.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${k.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${k.hardwareBinding?`${k.hardwareBinding.protocol.toUpperCase()} · ${k.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function Ve(k,Q,O){if(!S)return"";const f=Math.max(0,p.length-k),x=T==="week",C=Y.filter(ie=>ie.status==="active").slice(0,2);return`
      <div class="pacom-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${x?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!x}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${x}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${ge("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${x?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${x?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${H(O)}°C · ${k}/${p.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${Q} 告警 · ${f} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,pe.size)} 覆盖 · ${Le.filter(ie=>ie.status!=="closed").length} 工单</strong></div>
        </div>
        ${C.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${C.map(ie=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${H(ie.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${H(ie.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function je(){if(s.projects.length===0){t.innerHTML=`
        <div class="pacom-shell" style="position:relative;">
          <header class="pacom-header">
            <div class="pacom-header-top">
              <div class="pacom-title-group">
                <h1 class="pacom-title">空间总览</h1>
                ${Qe({tree:s,session:o,scope:z,activeAlarmCount:0,isOpen:!1,searchKeyword:""})}
              </div>
            </div>
          </header>
          <main class="pacom-spatial-stage" style="display:flex; align-items:center; justify-content:center; padding:24px;">
            <div class="dep-empty-card" style="max-width:520px; width:100%; background:var(--pacom-surface-card);">
              <div class="dep-empty-icon">${ge("building-2",20)}</div>
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
      `,t.querySelector("[data-go-create-first-project]")?.addEventListener("click",()=>{window.location.hash="#deployment?sec=projects&new=project"});return}const k=Y.filter(f=>f.status==="active").length,Q=p.filter(f=>f.connectivity==="online").length,O=p.find(f=>f.category==="sensor")?.telemetry.temp?.value??"23.4";t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${Qe({tree:s,session:o,scope:z,activeAlarmCount:k,isOpen:G,searchKeyword:xe})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${le?'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${S}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${Q}/${p.length} 在线 · ${H(O)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${Ca}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${Ve(Q,k,O)}

        <main class="pacom-spatial-stage">
          ${ye(k)}
          ${ve(Q,k)}
          ${Me(k)}
          ${Be(Q,k)}
          ${$e()}
        </main>
      </div>
    `,Ge()}function Ge(){tt(t,{onToggle:()=>{G=!G,G&&(S=!1,D=!1),je(),G&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:f=>{xe=f,je();const x=t.querySelector("[data-global-space-search]");x&&(x.focus(),x.setSelectionRange(f.length,f.length))},onPick:f=>{G=!1,qe(f)}}),t.querySelectorAll("[data-nav-scope]").forEach(f=>{f.addEventListener("click",x=>{x.stopPropagation(),f.dataset.navScope&&qe(ce(f.dataset.navScope))})}),t.querySelectorAll("[data-hud-tab]").forEach(f=>{f.addEventListener("click",x=>{x.stopPropagation();const C=f.dataset.hudTab;D&&q===C?D=!1:(q=C,D=!0,G=!1,S=!1),je()})}),t.querySelectorAll("[data-toggle-hud]").forEach(f=>{f.addEventListener("click",x=>{x.stopPropagation(),D=!D,D&&(G=!1,S=!1),je()})}),t.querySelectorAll("[data-close-hud]").forEach(f=>{f.addEventListener("click",x=>{x.stopPropagation(),D=!1,je()})});const k=t.querySelector('[data-role="search"]');k?.addEventListener("focus",()=>{D||(D=!0,G=!1,S=!1,u())}),k?.addEventListener("input",f=>{te=f.currentTarget.value,D=!0,u()}),t.querySelector('[data-role="category"]')?.addEventListener("change",f=>{ue=f.currentTarget.value,je()}),t.querySelectorAll("[data-filter-zone]").forEach(f=>{f.addEventListener("click",x=>{x.stopPropagation(),de=f.dataset.filterZone??"all",je()})}),t.querySelectorAll("[data-select-device]").forEach(f=>{f.addEventListener("click",x=>{x.target.tagName!=="INPUT"&&(we=f.dataset.selectDevice??null,U=!0,je())})}),t.querySelectorAll("[data-check-device]").forEach(f=>{f.addEventListener("change",()=>{const x=f.dataset.checkDevice;x&&(f.checked?K.add(x):K.delete(x),je())})}),t.querySelectorAll("[data-pin-device]").forEach(f=>{f.addEventListener("click",x=>{x.stopPropagation(),we=f.dataset.pinDevice??null,U=!0,G=!1,S=!1,je()})}),t.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{U=!1,je()}),t.querySelectorAll("[data-drawer-tab]").forEach(f=>{f.addEventListener("click",()=>{ne=f.dataset.drawerTab??"control",v="",je()})}),t.querySelectorAll("[data-drawer-doc]").forEach(f=>{f.addEventListener("click",()=>{v=`已调阅「${f.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,je()})}),t.querySelectorAll("[data-briefing-period]").forEach(f=>{f.addEventListener("click",()=>{T=f.dataset.briefingPeriod??"today",je()})}),t.querySelectorAll("[data-go-alarm-id]").forEach(f=>{f.addEventListener("click",()=>{const x=f.dataset.goAlarmId??"";window.location.hash=x?`#alarms?alarm=${encodeURIComponent(x)}`:"#alarms"})}),t.querySelectorAll("[data-go-wo-id]").forEach(f=>{f.addEventListener("click",()=>{const x=f.dataset.goWoId??"";window.location.hash=x?`#alarms?wo=${encodeURIComponent(x)}`:"#alarms"})}),t.querySelector("[data-release-override]")?.addEventListener("click",f=>{const x=f.currentTarget.dataset.releaseOverride;x&&(pe.delete(x),je())}),t.querySelectorAll("[data-zone-power]").forEach(f=>{f.addEventListener("click",x=>{x.stopPropagation();const C=f.dataset.zonePower,ie=f.dataset.zoneVal==="true";if(!C)return;const J=p.filter(oe=>oe.logicalZoneId===C&&oe.category==="lighting").map(oe=>oe.id),Ee=p.filter(oe=>oe.logicalZoneId===C&&oe.category==="hvac").map(oe=>oe.id);J.length?y(J,"lighting.power",ie):Ee.length&&y(Ee,"hvac.power",ie)})}),t.querySelectorAll("[data-locate-device]").forEach(f=>{f.addEventListener("click",()=>{const x=f.dataset.locateDevice;x&&(we=x,U=!0,D=!1,je())})}),t.querySelectorAll("[data-go-alarms]").forEach(f=>{f.addEventListener("click",()=>{window.location.hash="#alarms"})}),t.querySelectorAll("[data-go-analysis]").forEach(f=>{f.addEventListener("click",()=>{const x=f.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(x)}`})}),t.querySelectorAll("[data-go-timeseries]").forEach(f=>{f.addEventListener("click",()=>{const x=f.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(x)}`})}),t.querySelectorAll("[data-toggle-briefing]").forEach(f=>{f.addEventListener("click",x=>{x.stopPropagation(),S=!S,S&&(G=!1,D=!1),je()})}),t.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const f=p.filter(oe=>oe.connectivity==="online").length,x=Y.filter(oe=>oe.status==="active").length,C=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${f}/${p.length}（离线 ${p.length-f} 台）`,`待处理告警：${x} 条`,`人工覆盖中：${pe.size} 台`].join(`
`),ie=new Blob([C],{type:"text/plain;charset=utf-8;"}),J=URL.createObjectURL(ie),Ee=document.createElement("a");Ee.href=J,Ee.download="pacom-daily-briefing.txt",Ee.click(),URL.revokeObjectURL(J)}),t.querySelectorAll("[data-ctrl-cmd]").forEach(f=>{f.addEventListener("click",()=>{if(!we||!f.dataset.ctrlCmd)return;const x=f.dataset.ctrlVal??"",C=x==="true"?!0:x==="false"?!1:Number(x);y([we],f.dataset.ctrlCmd,C)})}),t.querySelector("[data-ctrl-slider]")?.addEventListener("change",f=>{const x=f.currentTarget;!we||!x.dataset.ctrlSlider||y([we],x.dataset.ctrlSlider,Number(x.value))}),t.querySelectorAll("[data-batch-cmd]").forEach(f=>{f.addEventListener("click",()=>{const x=Array.from(K),C=f.dataset.batchVal??"",ie=C==="true"?!0:C==="false"?!1:C;y(x,f.dataset.batchCmd,ie)})}),t.querySelectorAll("[data-ack-alarm]").forEach(f=>{f.addEventListener("click",async()=>{!f.dataset.ackAlarm||z.level!=="floor"||!r||(await e.acknowledgeAlarm(f.dataset.ackAlarm,"首页快速确认"),Y=await e.listAlarms(z.floorId),je())})}),t.querySelectorAll("[data-canvas-layer]").forEach(f=>{f.addEventListener("click",()=>{const x=f.dataset.canvasLayer;x&&(M=x,je())})}),t.querySelectorAll("[data-zoom]").forEach(f=>{f.addEventListener("click",()=>{const x=f.dataset.zoom;x==="in"?h=Math.min(2.6,Number((h+.2).toFixed(2))):x==="out"?h=Math.max(.6,Number((h-.2).toFixed(2))):(h=1,c=0,I=0),w()})}),t.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",f=>{f.preventDefault();const x=z;if(x.level!=="building"&&x.level!=="floor")return;const C=Ae(x.buildingId),ie=[...re?[{level:"building",projectId:x.projectId,buildingId:x.buildingId}]:[],...C.map(oe=>({level:"floor",projectId:x.projectId,buildingId:x.buildingId,floorId:oe.id}))],J=ie.findIndex(oe=>oe.level==="building"?x.level==="building":oe.level==="floor"&&x.level==="floor"&&oe.floorId===x.floorId);if(J<0)return;const Ee=Math.max(0,Math.min(ie.length-1,J+(f.deltaY>0?1:-1)));Ee!==J&&ie[Ee]&&qe(ie[Ee])},{passive:!1});const O=t.querySelector('[data-role="canvas-stage"]');if(O&&!le){let f=!1,x=!1,C=0,ie=0,J=0,Ee=0;O.addEventListener("pointerdown",be=>{be.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(f=!0,x=!1,C=be.clientX,ie=be.clientY,J=c,Ee=I,O.classList.add("is-panning"),O.setPointerCapture?.(be.pointerId))}),O.addEventListener("pointermove",be=>{if(!f)return;const Re=be.clientX-C,We=be.clientY-ie;(Math.abs(Re)>3||Math.abs(We)>3)&&(x=!0),c=J+Re,I=Ee+We,w()});const oe=()=>{f&&(f=!1,O.classList.remove("is-panning"),!x&&(D||G||S)&&(D=!1,G=!1,S=!1,je()))};O.addEventListener("pointerup",oe),O.addEventListener("pointercancel",oe),O.addEventListener("wheel",be=>{be.preventDefault();const Re=be.deltaY<0?.12:-.12;h=Math.max(.6,Math.min(2.6,Number((h+Re).toFixed(2)))),w()},{passive:!1}),O.addEventListener("dblclick",be=>{be.target?.closest("button")||(h=1,c=0,I=0,w())})}else t.querySelector(".pacom-spatial-stage")?.addEventListener("click",f=>{f.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .pacom-briefing-pop")||(D||G||S)&&(D=!1,G=!1,S=!1,je())})}t.addEventListener("keydown",k=>{k.key==="Escape"&&(G||S||D||U)&&(G=!1,S=!1,D=!1,U=!1,je())}),await qe(z,!0)}const Da=new Set(["lighting","hvac","alarm_rules"]),Dt={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},ct=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function Ta(t){const e=new Set;for(const o of t.actions)o.command.startsWith("lighting")?e.add("照明"):o.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function Oa(t,e,o){const s=o?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${t<e?`<div style="position:absolute; left:${t/24*100}%; width:${(e-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${s};"></div>`:`
        <div style="position:absolute; left:${t/24*100}%; width:${(24-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${s};"></div>
        <div style="position:absolute; left:0; width:${e/24*100}%; top:0; bottom:0; border-radius:999px; background:${s};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function Ma(t,e,o){let s=et(),l=!1,r="",[E,A,N,V]=await Promise.all([e.getSpatialTree(),e.listScenes(b.floorId),e.getRuntimeSettings(b.projectId),e.getFloorDevices(b.floorId).catch(()=>[])]),B="manual",re="balanced",ee="all",z=null,q="",D=!1,G=!1,xe=!1,te="all",ue=null,de="",R="",Ie=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const fe=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],we=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],U=[{deviceId:V[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],ne=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${N.calendar.workdayStart} – ${N.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${N.calendar.nightGuardStart} – 次日 ${N.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],v=e.subscribeFloorEvents(b.floorId,async T=>{T.type==="control.receipt.updated"&&z?.batchId===T.batchId&&(z=await e.getControlBatch(T.batchId),S())});function S(){const T=q.trim().toLowerCase(),M=T?A.filter(c=>`${c.name} ${c.description}`.toLowerCase().includes(T)):A,pe=N.rules.filter(c=>Da.has(c.category)),K=ee==="all"?pe:ee==="cbm"?[]:pe.filter(c=>c.category===ee),p=ee==="all"||ee==="cbm",Y=te==="issues"?fe.filter(c=>c.status!=="verified"):fe,Le=ct.find(c=>c.id===re)??ct[1],me=o.scope.canControlDevices,le=o.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Qe({tree:E,session:o,scope:s,isOpen:l,searchKeyword:r})}
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${Ie.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${Ie.length>0?`人工覆盖中：${Ie.length} 台 ${ge("chevron-down",12)}`:`全部自动托管 ${ge("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${xe?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${fe.length}）</button>
              ${B==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${D?"收起表单":"+ 新建场景"}</button>`:B==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${B==="manual"}" data-scene-tab="manual">快捷场景（${A.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${B==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${B==="rules"}" data-scene-tab="rules">条件联动（${pe.length+we.length}）</button>
          </nav>
        </header>

        ${G?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${Ie.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${ge("x",16)}</button>
              </div>
              ${Ie.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':Ie.map(c=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${c.name}</div>
                            <div class="pacom-row-sub">${c.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${c.id}" ${me?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${Ie.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${me?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${xe?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${ge("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${te==="all"}" data-log-filter="all">全部（${fe.length}）</button>
                  <button class="pacom-tab" aria-selected="${te==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${Y.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${Y.map(c=>`
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
          ${de?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${de}</span></div>`:""}
          ${R?`<div class="pacom-alert-banner">${R}</div>`:""}

          ${B==="manual"?`
              ${z?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${z.batchId}</span>
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
                            ${z.receipts.map(c=>`
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

              ${D?`
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
                          <span class="pacom-setting-title">联动动作列表（${U.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${U.map((c,I)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${I}" aria-label="目标设备">
                                ${V.map(j=>`<option value="${j.id}" ${j.id===c.deviceId?"selected":""}>${j.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${I}" aria-label="执行指令">
                                <option value="lighting.dimming" ${c.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${c.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${c.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${I}" value="${c.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${I}" ${U.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${q}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${M.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${M.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':M.map(c=>{const I=Ta(c),j=c.actions.slice(0,3).map(se=>{const Ae=V.find(ze=>ze.id===se.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??se.deviceId,qe=se.command==="lighting.dimming"?`亮度 ${se.targetValue}%`:se.command==="hvac.setpoint"?`设温 ${se.targetValue}°C`:se.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${Ae} → ${qe}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${c.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${I.map(se=>`<span class="pacom-badge pacom-badge--accent">${se}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${c.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${c.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${j}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${c.lastExecutedAt?c.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${c.id}" ${me?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:B==="schedule_oss"?`
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
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${Ie.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${ct.map(c=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${re===c.id}" data-oss-mode="${c.id}" ${me?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${c.title}</strong>
                          <span class="pacom-badge ${re===c.id?"pacom-badge--online":"pacom-badge--neutral"}">${re===c.id?"当前生效":c.badge}</span>
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
                          ${ne.map(c=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${c.name}</span>
                                    ${c.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${c.windowLabel}</div>
                                </td>
                                <td>${Oa(c.startHour,c.endHour,c.enabled)}</td>
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(c=>{const I=c==="all"?"全部":Dt[c]??c,j=c==="all"?pe.length+we.length:c==="cbm"?we.length:pe.filter(se=>se.category===c).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${ee===c}" data-rule-cat="${c}">
                              <span>${I}</span><span class="pacom-count-num">${j}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${K.map(c=>{const I=ue===c.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${Dt[c.category]??c.category}</span>
                                  <span>${c.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${c.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${c.summary} · 范围：${c.scopeLabel} · 回执：${c.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${c.id}">${I?"收起逻辑":"查看逻辑"}</button>
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
                            ${I?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${c.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":c.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${c.scopeLabel} · 当前版本：v${c.version} · 最近同步：${c.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${p?we.map(c=>{const I=Math.min(100,Math.round(c.runtimeHours/c.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${c.name}</span>
                                      <span class="pacom-badge ${I>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${c.runtimeHours} / ${c.thresholdHours} h（${I}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${I}%; background:${I>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
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
    `,tt(t,{onToggle:()=>{l=!l,S(),l&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:c=>{r=c,S();const I=t.querySelector("[data-global-space-search]");I&&(I.focus(),I.setSelectionRange(c.length,c.length))},onPick:c=>{s=c,l=!1,S()}}),t.querySelectorAll("[data-scene-tab]").forEach(c=>{c.addEventListener("click",()=>{B=c.dataset.sceneTab??"manual",de="",S()})}),t.querySelectorAll("[data-toggle-overrides]").forEach(c=>{c.addEventListener("click",()=>{G=!G,S()})}),t.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{Ie=[],de="已释放全部人工覆盖设备，自动节能策略已恢复托管。",S()}),t.querySelectorAll("[data-release-one]").forEach(c=>{c.addEventListener("click",()=>{const I=c.dataset.releaseOne;Ie=Ie.filter(j=>j.id!==I),de="已恢复该设备的自动策略托管。",S()})}),t.querySelectorAll("[data-toggle-cmdlog]").forEach(c=>{c.addEventListener("click",()=>{xe=!xe,S()})}),t.querySelectorAll("[data-log-filter]").forEach(c=>{c.addEventListener("click",()=>{te=c.dataset.logFilter??"all",S()})}),t.querySelector("[data-close-batch]")?.addEventListener("click",()=>{z=null,S()}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(c=>{c.addEventListener("click",()=>{const I=c.dataset.ossMode;if(!I)return;re=I;const j=ct.find(se=>se.id===I);de=`已切换至「${j?.title??I}」模式（明日预测启动 ${j?.predictedStart??""}）。`,S()})}),t.querySelectorAll("[data-toggle-schedule]").forEach(c=>{c.addEventListener("click",()=>{const I=c.dataset.toggleSchedule,j=ne.find(se=>se.id===I);j&&(j.enabled=!j.enabled,de=`排程「${j.name}」已${j.enabled?"恢复启用":"临时暂停"}。`,S())})}),t.querySelectorAll("[data-rule-cat]").forEach(c=>{c.addEventListener("click",()=>{ee=c.dataset.ruleCat??"all",S()})}),t.querySelectorAll("[data-expand-rule]").forEach(c=>{c.addEventListener("click",()=>{const I=c.dataset.expandRule??null;ue=ue===I?null:I,S()})}),t.querySelectorAll("[data-toggle-cbm]").forEach(c=>{c.addEventListener("click",()=>{const I=we.find(j=>j.id===c.dataset.toggleCbm);I&&(I.enabled=!I.enabled,de=`工时维保规则「${I.name}」已${I.enabled?"启用":"停用"}。`,S())})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(c=>{c.addEventListener("click",async()=>{R="";try{await e.toggleRuntimeRule(c.dataset.toggleStrategyRule,c.dataset.ruleNext==="true",Number(c.dataset.ruleVer)),N=await e.getRuntimeSettings(b.projectId),de="条件联动规则状态与版本回执已更新。",S()}catch(I){R=I instanceof Error?I.message:String(I),S()}})}),t.querySelectorAll("[data-toggle-create]").forEach(c=>{c.addEventListener("click",()=>{D=!D,S()})}),t.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{U.push({deviceId:V[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),S()}),t.querySelectorAll("[data-del-draft-action]").forEach(c=>{c.addEventListener("click",()=>{const I=Number(c.dataset.delDraftAction);U.length>1&&(U.splice(I,1),S())})}),t.querySelectorAll("[data-draft-dev]").forEach(c=>{c.addEventListener("change",()=>{const I=U[Number(c.dataset.draftDev)];I&&(I.deviceId=c.value)})}),t.querySelectorAll("[data-draft-cmd]").forEach(c=>{c.addEventListener("change",()=>{const I=U[Number(c.dataset.draftCmd)];I&&(I.command=c.value)})}),t.querySelectorAll("[data-draft-val]").forEach(c=>{c.addEventListener("change",()=>{const I=U[Number(c.dataset.draftVal)];I&&(I.targetValue=c.value)})}),t.querySelector("[data-scene-search]")?.addEventListener("input",c=>{const I=c.currentTarget,j=I.selectionStart??I.value.length;q=I.value,S();const se=t.querySelector("[data-scene-search]");se&&(se.focus(),se.setSelectionRange(j,j))}),t.querySelectorAll("[data-exec-scene]").forEach(c=>{c.addEventListener("click",async()=>{R="";const I=A.find(j=>j.id===c.dataset.execScene);try{z=await e.executeScene(c.dataset.execScene),A=await e.listScenes(b.floorId),fe.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:I?.name??"E7F 场景",action:`${z.receipts.length} 台设备联动下发`,status:"verified"}),S()}catch(j){R=j instanceof Error?j.message:String(j),S()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async c=>{c.preventDefault();const I=new FormData(c.currentTarget);try{await e.createScene({projectId:b.projectId,floorId:b.floorId,name:String(I.get("name")??""),description:String(I.get("description")??""),actions:U.map(j=>({deviceId:j.deviceId,command:j.command,targetValue:j.targetValue==="true"?!0:j.targetValue==="false"?!1:Number(j.targetValue)||50}))}),A=await e.listScenes(b.floorId),D=!1,de=`快捷场景已保存（共绑定 ${U.length} 条联动动作）。`,S()}catch(j){R=j instanceof Error?j.message:String(j),S()}})}S(),window.addEventListener("hashchange",()=>v(),{once:!0})}const Tt={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function ft(t,e){return t.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':t.map(o=>`
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
      </div>`).join("")}async function Ra(t,e,o){let s="calendar",l=et(),r=!1,E="";const[A,N]=await Promise.all([e.getSpatialTree(),e.getRuntimeSettings(b.projectId)]);let V=N,B=V.calendar.workdayStart,re=V.calendar.workdayEnd,ee=V.calendar.nightGuardStart,z=V.calendar.nightGuardEnd,q=!0,D=[];const G=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let xe="flat";const te={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},ue={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},de={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},R={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},Ie=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let fe="",we="";function U(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(S=>{const T=Tt[S];return`
                <button type="button" class="pacom-unified-item" aria-current="${s===S}" data-stab="${S}">
                  ${ge(T.icon,16)}
                  <span>${T.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function ne(){const v=o.scope.canEditDeployment,S=A.projects[0]?.name??"当前项目",T=V.rules.filter(p=>p.category==="weather_area"),M=V.rules.filter(p=>p.category==="metering_carbon"),pe=V.rules.filter(p=>p.category==="templates"),K=Tt[s];t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Qe({tree:A,session:o,scope:l,maxGranularity:"project",isOpen:r,searchKeyword:E})}
            </div>
            <div class="pacom-header-meta">
              ${v?"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${U()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${K.label}</h2>
                <p class="pacom-unified-subtitle">${K.subtitle}</p>
              </div>
              ${fe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${fe}</span></div>`:""}
              ${we?`<div class="pacom-alert-banner">${we}</div>`:""}

              ${s==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${V.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${B}" aria-label="工作日上班时间" ${v?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${re}" aria-label="工作日下班时间" ${v?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${ee}" aria-label="夜间值守开始" ${v?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${z}" aria-label="夜间值守结束" ${v?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${q?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${q}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${v?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${v?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${G.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${G.map(p=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${p.date}</span><span class="pacom-badge pacom-badge--accent">${p.mode}</span></span>
                              <span class="pacom-setting-desc">${p.label}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${p.id}" ${v?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${v?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${v?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${v?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${v?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${D.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${D.length} 条</span>
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
                                ${D.map(p=>`
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
                      </section>`:""}`:s==="energy_weather"?`
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
                            <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${v?"":"disabled"}>
                              <option value="guanzhou_station" ${te.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${te.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${S}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${te.billingArea}" aria-label="计费面积" ${v?"":"disabled"} />
                          </div>
                        </div>
                        ${ft(T,v)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${xe==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${xe==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${xe==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${te.tariffYuan}" aria-label="综合电价" ${v?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${te.tariffPeak}" ${v?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${te.tariffFlat}" ${v?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${te.tariffValley}" ${v?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${v?"":"disabled"}>
                              <option value="0.5271" ${te.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${te.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${ft(M,v)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${v?"":"disabled"}>保存口径参数</button>
                        </div>
                      </div>
                    </section>`:s==="guardrails"?`
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
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${ue.minTemp}" aria-label="最低设定温度" ${v?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${ue.maxTemp}" aria-label="最高设定温度" ${v?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${v?"":"disabled"}>
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
                              <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${ue.readbackTimeoutSec}" aria-label="回读超时阈值" ${v?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${v?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${ft(pe,v)}
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
                              <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${R.dailyDigestTime}" aria-label="每日简报发送时间" />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${R.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${R.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
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
                              <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${de.delayMin}" ${v?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${de.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${v?"":"disabled"}>
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
                              <select class="pacom-select" data-auto-wo="defaultGroup" aria-label="默认处理组" ${v?"":"disabled"}>
                                <option value="暖通运维组" ${de.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${de.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${de.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${de.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${v?"":"disabled"}>
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
                                ${Ie.map(p=>`
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
    `,tt(t,{onToggle:()=>{r=!r,ne(),r&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:p=>{E=p,ne();const Y=t.querySelector("[data-global-space-search]");Y&&(Y.focus(),Y.setSelectionRange(p.length,p.length))},onPick:p=>{l=p,r=!1,ne()}}),t.querySelectorAll("[data-stab]").forEach(p=>{p.addEventListener("click",()=>{s=p.dataset.stab??"calendar",fe="",we="",ne()})}),t.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{q=!q,fe=`法定节假日自动跳过已${q?"开启":"关闭"}。`,ne()}),t.querySelector("[data-night-start]")?.addEventListener("change",p=>{ee=p.currentTarget.value}),t.querySelector("[data-night-end]")?.addEventListener("change",p=>{z=p.currentTarget.value}),t.querySelector("[data-add-sd-form]")?.addEventListener("submit",p=>{p.preventDefault();const Y=new FormData(p.currentTarget);G.push({id:`sd-${Date.now()}`,date:String(Y.get("date")??""),label:String(Y.get("label")??""),mode:String(Y.get("mode")??"保持工作日工况")}),fe="已添加特殊例外日期，当日自动覆盖默认节假日排程。",ne()}),t.querySelectorAll("[data-del-sd]").forEach(p=>{p.addEventListener("click",()=>{const Y=G.findIndex(Le=>Le.id===p.dataset.delSd);Y>=0&&G.splice(Y,1),ne()})}),t.querySelectorAll("[data-tariff-mode]").forEach(p=>{p.addEventListener("click",()=>{xe=p.dataset.tariffMode??"flat",ne()})}),t.querySelectorAll("[data-energy-field]").forEach(p=>{p.addEventListener("change",()=>{const Y=p.dataset.energyField;Y&&(te[Y]=p.value)})}),t.querySelector("[data-save-energy]")?.addEventListener("click",()=>{fe=xe==="flat"?`能耗计费与气象口径已保存（面积 ${te.billingArea} m² · 综合电价 ¥${te.tariffYuan}/kWh · 因子 ${te.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${te.tariffPeak} / 平 ¥${te.tariffFlat} / 谷 ¥${te.tariffValley}）。`,ne()}),t.querySelectorAll("[data-guard-field]").forEach(p=>{p.addEventListener("change",()=>{const Y=p.dataset.guardField;Y&&(ue[Y]=p.value)})}),t.querySelector("[data-save-guard]")?.addEventListener("click",()=>{fe=`控制保护参数已保存（温区 ${ue.minTemp}–${ue.maxTemp}°C · 超时 ${ue.readbackTimeoutSec}s）。`,ne()}),t.querySelectorAll("[data-auto-wo]").forEach(p=>{p.addEventListener("change",()=>{const Y=p.dataset.autoWo;Y&&(de[Y]=p.value),fe="超时自动派单配置已更新。",ne()})}),t.querySelectorAll("[data-toggle-autowo]").forEach(p=>{p.addEventListener("click",()=>{const Y=p.dataset.toggleAutowo;Y&&(de[Y]=!de[Y],fe="自动派单保护策略已更新。",ne())})}),t.querySelector("[data-digest-time]")?.addEventListener("change",p=>{R.dailyDigestTime=p.currentTarget.value,fe=`每日晨间简报发送时刻已更新为 ${R.dailyDigestTime}。`,ne()}),t.querySelectorAll("[data-notify-key]").forEach(p=>{p.addEventListener("click",()=>{const Y=p.dataset.notifyKey;Y&&(R[Y]=!R[Y],fe="消息通知偏好已更新。",ne())})}),t.querySelectorAll("[data-toggle-nr]").forEach(p=>{p.addEventListener("click",()=>{const Y=Ie.find(Le=>Le.id===p.dataset.toggleNr);Y&&(Y.enabled=!Y.enabled,fe=`工作组「${Y.groupName}」的分流推送规则已${Y.enabled?"启用":"停用"}。`,ne())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",p=>{B=p.currentTarget.value}),t.querySelector("[data-cal-end]")?.addEventListener("change",p=>{re=p.currentTarget.value}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{we="",D=await e.previewCalendarImpact(b.projectId,B,re),ne()}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{we="";try{const p=await e.saveWorkCalendar(b.projectId,B,re,V.calendar.version);V={...V,calendar:{...p,nightGuardStart:ee,nightGuardEnd:z}},fe=`工作时间配置已保存至 v${p.version}（工作日 ${p.workdayStart}–${p.workdayEnd} · 夜间值守 ${ee}–${z}）`,D=[],ne()}catch(p){we=p instanceof Error?p.message:String(p),ne()}}),t.querySelectorAll("[data-toggle-rule]").forEach(p=>{p.addEventListener("click",async()=>{we="";try{await e.toggleRuntimeRule(p.dataset.toggleRule,p.dataset.ruleNext==="true",Number(p.dataset.ruleVer)),V=await e.getRuntimeSettings(b.projectId),fe="策略状态与版本回执已更新。",ne()}catch(Y){we=Y instanceof Error?Y.message:String(Y),ne()}})})}ne()}const Ot="pacom.web.sidebar.collapsed",Pa=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ht=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],$t={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},Mt=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function yt(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in $t?t:"home"}function _e(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Na(t,e,o,s){t.classList.remove("bare-login");let l=o,r=yt(),E=localStorage.getItem(Ot)==="1",A=!1,N=!1,V=!1,B=await e.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],re=e.getActiveOrganizationId?.()??B[0]?.id??"org-gzlab",ee="",z=!1,q=0,D={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const G=e.mode==="demo"&&typeof e.switchDemoRole=="function";function xe(){return B.find(h=>h.id===re)??B[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function te(h){if(h.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const c=h.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${_e(c)}</span>`}async function ue(){e.listOrganizations&&(B=await e.listOrganizations(),re=e.getActiveOrganizationId?.()??B[0]?.id??"org-gzlab")}async function de(){try{await ue();const[h,c,I,j,se]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(b.floorId).catch(()=>[]),e.listAlarms(b.floorId).catch(()=>[]),e.listWorkOrders(b.floorId).catch(()=>[]),e.listScenes(b.floorId).catch(()=>[])]);D={devices:c,zones:h.zones,alarms:I,workOrders:j,scenes:se},q=I.filter(Ae=>Ae.status==="active").length,S()}catch{}}function R(){return ht.map(h=>`
        ${h.id==="settings"?'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${h.id}" aria-current="${r===h.id?"page":"false"}" title="${h.label}">
          ${ge(h.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${h.label}</span>
          ${h.id==="alarms"&&q>0?`<span class="pacom-nav-count" title="待处理告警 ${q} 条">${q}</span>`:""}
        </button>`).join("")}function Ie(){const h=ee.trim().toLowerCase(),c=h?ht.filter(y=>y.label.toLowerCase().includes(h)).slice(0,4):ht,I=h?D.devices.filter(y=>`${y.name} ${y.id} ${y.category}`.toLowerCase().includes(h)).slice(0,5):D.devices.slice(0,3),j=h?D.zones.filter(y=>y.name.toLowerCase().includes(h)).slice(0,3):[],se=h?D.alarms.filter(y=>`${y.title} ${y.message} ${y.id}`.toLowerCase().includes(h)).slice(0,4):D.alarms.filter(y=>y.status==="active").slice(0,2),Ae=h?D.workOrders.filter(y=>`${y.title} ${y.id}`.toLowerCase().includes(h)).slice(0,3):[],qe=h?D.scenes.filter(y=>`${y.name} ${y.description}`.toLowerCase().includes(h)).slice(0,3):[],ze=h?Mt.filter(y=>`${y.title} ${y.category}`.toLowerCase().includes(h)).slice(0,4):Mt.slice(0,2),Te=[];return I.length&&Te.push(`<div class="pacom-search-group">${h?"设备（空间总览）":"常用设备直达"}</div>`+I.map(y=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(y.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(y.name)}</span><span class="pacom-badge ${y.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${y.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),j.length&&Te.push('<div class="pacom-search-group">功能区</div>'+j.map(y=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(y.id)}"><span>${_e(y.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),se.length&&Te.push(`<div class="pacom-search-group">${h?"告警":"待处理告警"}</div>`+se.map(y=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(y.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(y.title)}</span><span class="pacom-badge pacom-badge--warning">${y.status==="active"?"待处理":"已确认"}</span></button>`).join("")),Ae.length&&Te.push('<div class="pacom-search-group">运维工单</div>'+Ae.map(y=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(y.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(y.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),qe.length&&Te.push('<div class="pacom-search-group">智能策略</div>'+qe.map(y=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${_e(y.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),ze.length&&Te.push('<div class="pacom-search-group">图纸与工程文档</div>'+ze.map(y=>`<button type="button" class="pacom-search-hit" data-search-hash="${y.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(y.title)}</span><span class="pacom-badge pacom-badge--neutral">${_e(y.category)}</span></button>`).join("")),c.length&&Te.push('<div class="pacom-search-group">工作区</div>'+c.map(y=>`<button type="button" class="pacom-search-hit" data-search-hash="#${y.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${ge(y.icon,14)}${_e(y.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),Te.length?Te.join(""):`<div class="pacom-nav-empty">未找到与「${_e(ee)}」匹配的设备、区域、告警、工单或图纸</div>`}function fe(h){h.querySelectorAll("[data-search-hash]").forEach(c=>{c.addEventListener("click",()=>{const I=c.dataset.searchHash||"#home";z=!1,ee="",we(),A=!1,window.location.hash===I?(r=yt(),p(!0)):window.location.hash=I})})}function we(){if(t.querySelector('[data-role="cmd-scrim"]')?.remove(),!z)return;const h=document.createElement("div");h.className="pacom-cmd-scrim",h.dataset.role="cmd-scrim",h.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${ge("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${_e(ee)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${Ie()}
        </div>
      </div>
    `,t.appendChild(h),h.addEventListener("click",j=>{j.target===h&&(z=!1,we())});const c=h.querySelector('[data-role="cmd-input"]'),I=h.querySelector('[data-role="cmd-body"]');I&&fe(I),c?.focus(),c?.addEventListener("input",j=>{ee=j.currentTarget.value,I&&(I.innerHTML=Ie(),fe(I))})}function U(){if(!N)return"";const h=l.displayName.slice(0,1)||"U",c=!!(e.createOrganization&&l.scope.canEditDeployment);return`
      <div class="pacom-org-popover ${E?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${B.map(I=>{const j=I.id===re;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${j}" data-pop-org="${_e(I.id)}">
                ${te(I)}
                <span class="pacom-pop-text">
                  <b>${_e(I.name)}</b>
                  <small>${I.projectCount>0?`${I.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${j?ge("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${c?V?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${ge("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${ge("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${_e(h)}</span>
          <span class="pacom-pop-text">
            <b>${_e(l.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${G?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">切换视角</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(Oe).map(I=>{const j=Oe[I],se=I===l.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${se}" data-pop-role="${I}">
                      <span class="pacom-pop-text">
                        <b>${_e(j.roleLabel)}</b>
                        <small>${_e(j.displayName)}</small>
                      </span>
                      ${se?ge("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${ge("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function ne(h){switch(document.title=`${$t[r]} · PACOM Station`,r){case"home":await za(h,e,l);return;case"analysis":await Sa(h,e,l);return;case"alarms":await pa(h,e,l);return;case"scenes":await Ma(h,e,l);return;case"settings":await Ra(h,e,l);return;case"deployment":await Aa(h,e,l);return;case"account":await la(h,e,l,c=>{l=c,p(!0)},v);return}}async function v(){N=!1,A=!1,z=!1,le();try{await e.logout()}finally{window.location.hash="#login",s()}}function S(){const h=t.querySelector('[data-role="nav-list"]');h&&(h.innerHTML=R(),M())}function T(){t.querySelector('[data-role="org-popover"]')?.remove();const h=t.querySelector('[data-role="org-menu-btn"]');if(h&&h.setAttribute("aria-expanded",String(N)),!N)return;const c=document.createElement("div");c.innerHTML=U().trim();const I=c.firstElementChild;I&&(t.appendChild(I),K())}function M(){t.querySelectorAll("[data-route]").forEach(h=>{h.addEventListener("click",()=>{const c=h.dataset.route;c===r&&!A||(r=c,A=!1,N=!1,window.location.hash=`#${r}`,p(!0))})})}async function pe(h){if(!e.switchOrganization)return;await e.switchOrganization(h),await ue();const c=await e.getSpatialTree(),I=c.projects[0],j=I?c.buildings.find(Ae=>Ae.projectId===I.id):void 0,se=j?c.floors.find(Ae=>Ae.buildingId===j.id&&Ae.id===b.floorId)??c.floors.find(Ae=>Ae.buildingId===j.id):void 0;He(I&&j&&se?{level:"floor",projectId:I.id,buildingId:j.id,floorId:se.id}:I&&j?{level:"building",projectId:I.id,buildingId:j.id}:I?{level:"project",projectId:I.id}:{level:"all-projects"}),N=!1,V=!1,A=!1,await p(!0),de()}function K(){t.querySelectorAll("[data-pop-org]").forEach(h=>{h.addEventListener("click",()=>{const c=h.dataset.popOrg;if(c){if(c===re){N=!1,T();return}pe(c)}})}),t.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",h=>{h.stopPropagation(),V=!V,T(),V&&t.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),t.querySelector("[data-create-org-form]")?.addEventListener("submit",async h=>{if(h.preventDefault(),!e.createOrganization)return;const c=new FormData(h.currentTarget),I=String(c.get("orgName")??"").trim();if(!I)return;const j=await e.createOrganization(I);await pe(j.id)}),t.querySelectorAll('[data-pop-act="go-account"]').forEach(h=>{h.addEventListener("click",()=>{N=!1,V=!1,A=!1,r="account",window.location.hash="#account",p(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{v()}),t.querySelectorAll("[data-pop-role]").forEach(h=>{h.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const c=h.dataset.popRole;N=!1,V=!1,A=!1,l=await e.switchDemoRole(c),await p(!0)})})}async function p(h){const c=t.querySelector('[data-role="main-stage"]');if(!h&&c){const j=t.querySelector(".pacom-nav-rail");j&&(j.classList.toggle("is-collapsed",E),j.classList.toggle("is-mobile-open",A));const se=t.querySelector('[data-role="mobile-scrim"]');se&&se.classList.toggle("is-open",A),T();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${ge("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${$t[r]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${_e(l.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${A?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${E?"is-collapsed":""} ${A?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Pa}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${E?"展开侧栏":"收起侧栏"}" aria-label="${E?"展开侧栏":"收起侧栏"}">
              ${ge("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${ge("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${R()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${r==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${N}" title="${_e(xe().name)} · ${_e(l.displayName)}">
              ${te(xe())}
              <span class="pacom-org-name">${_e(xe().name)}</span>
              ${ge("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{E=!E,N=!1,localStorage.setItem(Ot,E?"1":"0");const j=t.querySelector(".pacom-nav-rail"),se=t.querySelector('[data-role="toggle-sidebar"]');j&&j.classList.toggle("is-collapsed",E),se&&(se.title=E?"展开侧栏":"收起侧栏",se.setAttribute("aria-label",se.title),se.innerHTML=ge("panel-left",16)),T()}),t.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{N=!1,T(),z=!0,we()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{A=!A,p(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{A=!1,N=!1,p(!1)}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",j=>{j.stopPropagation(),N=!N,T()}),M(),T(),we();const I=t.querySelector('[data-role="main-stage"]');I&&await ne(I)}const Y=h=>{const c=h.target;N&&!c?.closest('[data-role="org-popover"]')&&!c?.closest('[data-role="org-menu-btn"]')&&(N=!1,T())},Le=h=>{if((h.metaKey||h.ctrlKey)&&h.key.toLowerCase()==="k"){h.preventDefault(),N=!1,T(),z=!z,we();return}h.key==="Escape"&&(z?(z=!1,we()):N?(N=!1,T()):A&&(A=!1,p(!1)))},me=()=>{r=yt(),N=!1,A=!1,z=!1,p(!0),de()};function le(){document.removeEventListener("click",Y),document.removeEventListener("keydown",Le),window.removeEventListener("hashchange",me)}document.addEventListener("click",Y),document.addEventListener("keydown",Le),window.addEventListener("hashchange",me),await p(!0),de()}const _a=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Ba='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Ua='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',at=ge("x",16),Rt={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},Va={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Za(t){const e=t.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:t}function Ue(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Pt(t,e,o){t.classList.add("bare-login"),document.title="登录 · PACOM Station";let s=!1,l=!1,r="",E="",A="",N="",V=!1,B={},re="",ee=!1,z="",q=0,D=null,G=null,xe="privacy",te="",ue="",de="";const R=e.mode==="demo"&&typeof e.switchDemoRole=="function";function Ie(){D!==null&&(window.clearInterval(D),D=null),t.classList.remove("bare-login")}function fe(){q=60,D!==null&&window.clearInterval(D),D=window.setInterval(()=>{q-=1,q<=0&&(q=0,D!==null&&(window.clearInterval(D),D=null));const v=t.querySelector('[data-act="send-sms"]');v&&(v.disabled=q>0,v.textContent=q>0?`${q} 秒后重发`:z?"重新获取":"获取验证码")},1e3)}function we(){if(!G)return"";if(G==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${at}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Ue(ue)}" />
                  </div>
                </div>
                ${de?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${Ue(de)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(G==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${at}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                请联系所在机构管理员获取邀请码，或通过支持邮箱联系开通新机构账户。
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${R?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">快捷登录</button>':""}
            </div>
          </section>
        </div>
      `;if(G==="legal"){const v=Rt[xe],S=["privacy","terms","service"].map(T=>`<button type="button" role="tab" aria-selected="${xe===T}" class="au-legal-tab ${xe===T?"is-active":""}" data-act="switch-legal" data-tab="${T}">${Rt[T].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${at}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${S}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${v.items.map(T=>`<li>${Ue(T)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return G==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${at}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${te||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:G==="demoRoles"&&R?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择身份进入</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${at}</button>
            </div>
            <div class="db">
              <p class="au-dlead">选择对应岗位视角进入广州国家实验室工作台。</p>
              <div class="au-choice-list">
                ${Object.keys(Oe).map(v=>{const S=Oe[v];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${v}">
                        <div>
                          <b>${Ue(S.roleLabel)} · ${Ue(S.displayName)}</b>
                          <small>${Ue(Va[v])}</small>
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
      `:""}function U(){const v=s?`
        <div class="au-field ${B.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ue(A)}" aria-invalid="${B.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${q>0?"disabled":""}>
              ${q>0?`${q} 秒后重发`:z?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Ue(B.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${z?`验证码已发送至 ${Ue(Za(z))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${B.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ue(r)}" aria-invalid="${B.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Ue(B.id??"")}</p>
        </div>
      `,S=s?`
        <div class="au-field ${B.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ue(N)}" aria-invalid="${B.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Ue(B.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${B.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${l?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ue(E)}" aria-invalid="${B.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${l?"隐藏密码":"显示密码"}">
              ${l?Ua:Ba}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Ue(B.pwd??"")}</p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${_a}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${ee?"disabled":""}>
                  ${v}
                  ${S}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${re?"":"hidden"}>${Ue(re)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${V?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${ee?"disabled":""}>
                    ${ee?"正在登录…":"登录"}
                  </button>
                </fieldset>
              </form>
              <div class="au-login-actions">
                <button type="button" class="au-textbtn" data-act="toggle-sms">
                  <span>${s?"使用密码登录":"使用短信验证码登录"}</span>
                </button>
                <div class="au-login-divider" aria-hidden="true"></div>
                <p class="au-noacct">
                  没有账户？<button type="button" class="au-inline" data-act="open-register">注册</button>
                </p>
                ${R?`<div class="au-demo-bar">
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
      ${we()}
    `,ne()}function ne(){const v=t.querySelector("#au-id"),S=t.querySelector("#au-pwd"),T=t.querySelector("#au-sphone"),M=t.querySelector("#au-scode"),pe=t.querySelector('input[name="keep"]');v?.addEventListener("input",()=>{if(r=v.value,B.id||re){delete B.id,re="",v.closest(".au-field")?.classList.remove("bad");const K=t.querySelector("#au-id-err");K&&(K.textContent="");const p=t.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),S?.addEventListener("input",()=>{if(E=S.value,B.pwd||re){delete B.pwd,re="",S.closest(".au-field")?.classList.remove("bad");const K=t.querySelector("#au-pwd-err");K&&(K.textContent="");const p=t.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),T?.addEventListener("input",()=>{if(A=T.value,B.sphone||re){delete B.sphone,re="",T.closest(".au-field")?.classList.remove("bad");const K=t.querySelector("#au-sphone-err");K&&(K.textContent="");const p=t.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),M?.addEventListener("input",()=>{if(N=M.value.replace(/\D/g,"").slice(0,6),M.value=N,B.scode||re){delete B.scode,re="",M.closest(".au-field")?.classList.remove("bad");const K=t.querySelector("#au-scode-err");K&&(K.textContent="");const p=t.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),pe?.addEventListener("change",()=>{V=pe.checked}),t.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{l=!l,U(),t.querySelector("#au-pwd")?.focus()}),t.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{s=!s,B={},re="",U(),t.querySelector(s?"#au-sphone":"#au-id")?.focus()}),t.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const K=A.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(K)){B={sphone:"请输入有效的手机号码"},U(),t.querySelector("#au-sphone")?.focus();return}B={},z=K,fe(),U(),t.querySelector("#au-scode")?.focus()}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async K=>{if(K.preventDefault(),!ee){if(B={},re="",s?(A.trim()||(B.sphone="请输入手机号码"),/^\d{6}$/.test(N.trim())||(B.scode="请输入 6 位验证码")):(r.trim()||(B.id="请输入电子邮箱或手机号码"),E||(B.pwd="请输入密码")),Object.keys(B).length>0){U();const p=Object.keys(B)[0];t.querySelector(`#au-${p}`)?.focus();return}ee=!0,U();try{const p=await e.login({account:(s?A:r).trim(),password:s?N.trim():E});Ie(),o(p)}catch(p){ee=!1,re=p instanceof Error?p.message:"账户或密码不正确",U()}}}),t.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{ue=r.trim(),de="",G="reset",U(),t.querySelector("#au-rs-id")?.focus()}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{G="register",U()}),t.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{G="legal",U()}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{te="",G="contact",U()}),t.querySelectorAll('[data-act="open-demo-roles"]').forEach(K=>{K.addEventListener("click",()=>{G="demoRoles",U()})}),t.querySelectorAll('[data-act="close-modal"]').forEach(K=>{K.addEventListener("click",()=>{G=null,U()})}),t.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",K=>{K.target===K.currentTarget&&(G=null,U())}),t.querySelectorAll('[data-act="switch-legal"]').forEach(K=>{K.addEventListener("click",()=>{const p=K.dataset.tab;p&&(xe=p,U())})}),t.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),te="已复制"}catch{te="support@pacom.cn"}U()}),t.querySelector("#au-reset-form")?.addEventListener("submit",K=>{K.preventDefault(),ue=t.querySelector("#au-rs-id")?.value.trim()??"",ue?de="请联系机构管理员重置账号密码，或确认后查收重置邮件。":de="请输入电子邮箱或手机号码",U()}),t.querySelectorAll('[data-act="pick-demo-role"]').forEach(K=>{K.addEventListener("click",async()=>{const p=K.dataset.roleId;if(!p||!e.switchDemoRole)return;const Y=await e.switchDemoRole(p);Ie(),o(Y)})})}U()}async function Ha(){const t=document.getElementById("app");if(t)try{const e=ta(),o=await e.getSession(),s=async l=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Na(t,e,l,()=>{Pt(t,e,r=>{s(r)})})};if(!o||window.location.hash==="#login"){Pt(t,e,l=>{s(l)});return}await s(o)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}Ha();
//# sourceMappingURL=index-C8_Wn57_.js.map
