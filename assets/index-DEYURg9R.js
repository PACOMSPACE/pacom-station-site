(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const E of r.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&a(E)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const b={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"};function aa(){const t="2026-11-25T09:00:00Z",e=[];for(let r=1;r<=22;r+=1){const E=r===7?b.floorId:r===8?b.lockedFloor8Id:r===6?b.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${r}`,F=String(r).padStart(2,"0");e.push({id:E,buildingId:b.buildingId,kind:"above",level:r,name:`${r}F`,areaSqm:r===7?1383.1:r===1?2680:r<=4?1920:1480,plan:{floorId:E,imageUrl:`./media/floors/e/${F}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const n="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";e.push({id:n,buildingId:b.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:n,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}});const a=[];for(let r=1;r<=12;r+=1){const E=`structure-f-above-${r}`,F=String(r).padStart(2,"0");a.push({id:E,buildingId:b.buildingFId,kind:"above",level:r,name:`${r}F`,areaSqm:r===1?2450:r<=3?2100:1580,plan:{floorId:E,imageUrl:`./media/floors/f/${F}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const i="structure-f-roof-1";return a.push({id:i,buildingId:b.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:i,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}}),{projects:[{id:b.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"},{id:b.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:b.buildingId,projectId:b.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:b.buildingFId,projectId:b.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...e,...a],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:b.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:b.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:b.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:b.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:n,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:i,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Nt=aa(),ut=Nt.floors.map(t=>t.id),Oe={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[b.projectId,b.project1Id],allowedBuildingIds:[b.buildingId,b.buildingFId],allowedFloorIds:[...ut],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[b.projectId],allowedBuildingIds:[b.buildingId,b.buildingFId],allowedFloorIds:[...ut],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[b.projectId],allowedBuildingIds:[b.buildingId],allowedFloorIds:[b.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[b.projectId],allowedBuildingIds:[b.buildingId,b.buildingFId],allowedFloorIds:[...ut],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[b.projectId],allowedBuildingIds:[b.buildingId],allowedFloorIds:[b.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},st="pacom.web.demo.role",St="pacom.web.demo.spatial.v5",It="pacom.web.demo.orgs.v1",kt="pacom.web.demo.activeOrg.v1",We="org-gzlab";class sa{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){this.orgs=this.loadOrgs();const e=typeof localStorage<"u"?localStorage.getItem(kt):null,n=this.orgs.find(r=>r.id===e)??this.orgs[0];this.activeOrgId=n.id,this.spatial=n.spatial,this.syncAdminScopesFromSpatial();const a=typeof sessionStorage<"u"?sessionStorage.getItem(st):null;a&&Oe[a]&&(this.activeSession=structuredClone(Oe[a]));const i=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:b.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:i,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:i,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:i,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:i,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:b.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:i,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:i,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:i,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:i,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:b.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:i,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:i,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:i,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:i,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:b.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:i,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:i,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:i,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:i,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:i,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:i,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:b.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:i,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:b.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:i,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:i,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:i,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:i,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:i,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:i},{id:"conn-e7f-dali",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:i},{id:"conn-e7f-modbus",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:b.projectId,floorId:b.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:b.projectId,floorId:b.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:b.projectId,floorId:b.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:b.projectId,floorId:b.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:b.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:b.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:i,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:b.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:i,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:b.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:i,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:b.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:i,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:b.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:i,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:b.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:i,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(Oe).map((r,E)=>({userId:r.userId,displayName:r.displayName,email:`${r.role.replaceAll("_",".")}@gzlab.ac.cn`,role:r.role,roleLabel:r.roleLabel,scopeSummary:r.scope.allowedZoneIds?.length?`E栋 7F（${r.scope.allowedZoneIds.length} 个我的区域）`:`${r.scope.allowedProjectIds.length} 项目 / ${r.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:E===0?i:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,n,a,i,r){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:n,endpoint:a,request:r,response:i}),this.traces.length>40&&this.traces.pop()}pushAudit(e,n,a,i){const r=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:r?.displayName??"anonymous",role:r?.role??"member",action:e,target:n,result:a,detail:i})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const n=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(Oe[n]),sessionStorage.setItem(st,n),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(st),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(Oe[e]),sessionStorage.setItem(st,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(St);if(e){const n=JSON.parse(e);if(Array.isArray(n?.projects)&&Array.isArray(n?.buildings)&&Array.isArray(n?.floors)&&Array.isArray(n?.zones))return n}}}catch{}return structuredClone(Nt)}loadOrgs(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(It);if(e){const n=JSON.parse(e);if(Array.isArray(n)&&n.length>0&&n.every(a=>a?.id&&a?.name&&Array.isArray(a?.spatial?.projects)))return n}}}catch{}return[{id:We,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const e=this.orgs.find(n=>n.id===this.activeOrgId);e&&(e.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(It,JSON.stringify(this.orgs)),localStorage.setItem(kt,this.activeOrgId),this.activeOrgId===We&&localStorage.setItem(St,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(e=>({id:e.id,name:e.name,projectCount:e.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}async switchOrganization(e){const n=this.orgs.find(a=>a.id===e);if(!n)throw new Error(`404 NOT_FOUND: 机构 ${e} 不存在`);this.activeOrgId=n.id,this.spatial=n.spatial,this.persistSpatial()}async createOrganization(e){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权新建机构`);const a=e.trim()||"新建机构",i={id:`org-${Date.now().toString(36)}`,name:a,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(i),this.activeOrgId=i.id,this.spatial=i.spatial,this.persistSpatial(),this.pushAudit("org.create",i.id,"success",a),{id:i.id,name:i.name,projectCount:0}}syncAdminScopesFromSpatial(){const e=this.spatial.projects.map(i=>i.id),n=this.spatial.buildings.map(i=>i.id),a=this.spatial.floors.map(i=>i.id);this.activeOrgId===We&&(Oe.org_admin.scope.allowedProjectIds=[...e],Oe.org_admin.scope.allowedBuildingIds=[...n],Oe.org_admin.scope.allowedFloorIds=[...a],Oe.project_admin.scope.allowedBuildingIds=[...n],Oe.project_admin.scope.allowedFloorIds=[...a],Oe.commissioning_engineer.scope.allowedBuildingIds=[...n],Oe.commissioning_engineer.scope.allowedFloorIds=[...a]),this.activeSession&&((this.activeOrgId!==We||this.activeSession.role==="org_admin")&&(this.activeSession.scope.allowedProjectIds=[...e]),(this.activeOrgId!==We||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin"||this.activeSession.role==="commissioning_engineer")&&(this.activeSession.scope.allowedBuildingIds=[...n],this.activeSession.scope.allowedFloorIds=[...a]))}async getSpatialTree(){const e=this.requireSession();if(this.activeOrgId!==We){const W=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:W.projects.length,buildings:W.buildings.length,floors:W.floors.length}),W}const n=this.spatial.projects.filter(W=>e.scope.allowedProjectIds.includes(W.id)),a=this.spatial.buildings.filter(W=>e.scope.allowedBuildingIds.includes(W.id)),i=new Set(a.map(W=>W.id)),r=this.spatial.floors.filter(W=>i.has(W.buildingId)),E=new Set(r.map(W=>W.id)),F=this.spatial.zones.filter(W=>E.has(W.floorId)),N=structuredClone({projects:n,buildings:a,floors:r,zones:F});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:N.projects.length,buildings:N.buildings.length,floors:N.floors.length}),N}async createProject(e){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权创建项目`);const a={id:`project-${Date.now().toString(36)}`,name:e.name.trim()||"新建项目",city:e.city?.trim()||"广州市",address:e.address?.trim()||"",timezone:"Asia/Shanghai",location:e.location,imageUrl:e.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(a),n.scope.allowedProjectIds.includes(a.id)||n.scope.allowedProjectIds.push(a.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",a,e),this.pushAudit("project.create",a.id,"success",a.name),structuredClone(a)}async updateProject(e,n){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改项目配置`);const i=this.spatial.projects.find(r=>r.id===e);if(!i)throw new Error(`404 NOT_FOUND: 项目 ${e} 不存在`);return n.name!==void 0&&(i.name=n.name.trim()||i.name),n.city!==void 0&&(i.city=n.city.trim()),n.address!==void 0&&(i.address=n.address.trim()),n.location!==void 0&&(i.location=n.location),n.imageUrl!==void 0&&(i.imageUrl=n.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${e}`,i,n),this.pushAudit("project.update",e,"success",i.name),structuredClone(i)}async deleteProject(e){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权删除项目`);if(e===b.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const a=new Set(this.spatial.buildings.filter(r=>r.projectId===e).map(r=>r.id)),i=new Set(this.spatial.floors.filter(r=>a.has(r.buildingId)).map(r=>r.id));this.spatial.projects=this.spatial.projects.filter(r=>r.id!==e),this.spatial.buildings=this.spatial.buildings.filter(r=>r.projectId!==e),this.spatial.floors=this.spatial.floors.filter(r=>!a.has(r.buildingId)),this.spatial.zones=this.spatial.zones.filter(r=>!i.has(r.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${e}`,{ok:!0}),this.pushAudit("project.delete",e,"success")}async upsertBuilding(e){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权维护楼宇`);let a=e.id?this.spatial.buildings.find(i=>i.id===e.id):void 0;return a?(a.name=e.name.trim()||a.name,a.aboveFloors=Math.max(0,e.aboveFloors),a.belowFloors=Math.max(0,e.belowFloors),a.hasRoof=e.hasRoof,e.areaSqm!==void 0&&(a.areaSqm=e.areaSqm),e.imageUrl!==void 0&&(a.imageUrl=e.imageUrl)):(a={id:`building-${Date.now().toString(36)}`,projectId:e.projectId,name:e.name.trim()||"新建楼宇",aboveFloors:Math.max(1,e.aboveFloors),belowFloors:Math.max(0,e.belowFloors),hasRoof:e.hasRoof,areaSqm:e.areaSqm??null,imageUrl:e.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(a)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",a,e),this.pushAudit("building.upsert",a.id,"success",a.name),structuredClone(a)}async deleteBuilding(e){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权删除楼宇`);if(e===b.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const a=new Set(this.spatial.floors.filter(i=>i.buildingId===e).map(i=>i.id));this.spatial.buildings=this.spatial.buildings.filter(i=>i.id!==e),this.spatial.floors=this.spatial.floors.filter(i=>i.buildingId!==e),this.spatial.zones=this.spatial.zones.filter(i=>!a.has(i.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${e}`,{ok:!0}),this.pushAudit("building.delete",e,"success")}async upsertFloor(e){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权维护楼层`);const a=new Date().toISOString();let i=e.id?this.spatial.floors.find(r=>r.id===e.id):void 0;if(i)i.name=e.name.trim()||i.name,i.kind=e.kind,i.level=e.level,e.areaSqm!==void 0&&(i.areaSqm=e.areaSqm),e.planImageUrl!==void 0&&(i.plan=e.planImageUrl?{floorId:i.id,imageUrl:e.planImageUrl,planVersion:(i.plan?.planVersion??0)+1,updatedAt:a}:null);else{const r=`floor-${e.buildingId.slice(-6)}-${e.kind}-${Math.abs(e.level)}-${Date.now().toString(36).slice(-3)}`;i={id:r,buildingId:e.buildingId,kind:e.kind,level:e.level,name:e.name.trim()||`${e.level}F`,areaSqm:e.areaSqm??null,plan:e.planImageUrl?{floorId:r,imageUrl:e.planImageUrl,planVersion:1,updatedAt:a}:null},this.spatial.floors.push(i),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(i.id)&&this.activeSession.scope.allowedFloorIds.push(i.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:i.id,name:i.name,hasPlan:!!i.plan}),this.pushAudit("floor.upsert",i.id,"success",i.name),structuredClone(i)}async deleteFloor(e){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权删除楼层`);if(e===b.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(a=>a.id!==e),this.spatial.zones=this.spatial.zones.filter(a=>a.floorId!==e),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${e}`,{ok:!0}),this.pushAudit("floor.delete",e,"success")}async upsertZone(e){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权维护功能区`);let a=e.id?this.spatial.zones.find(i=>i.id===e.id):void 0;return a?(a.name=e.name.trim()||a.name,a.category=e.category):(a={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:e.floorId,name:e.name.trim(),category:e.category},this.spatial.zones.push(a)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",a),this.pushAudit("zone.upsert",a.id,"success",a.name),structuredClone(a)}async deleteZone(e){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(a=>a.id!==e),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${e}`,{ok:!0}),this.pushAudit("zone.delete",e,"success")}async copyZonesToFloors(e,n){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权复制功能区`);const i=this.spatial.floors.find(F=>F.id===e),r=this.spatial.zones.filter(F=>F.floorId===e);if(!i||r.length===0)return 0;let E=0;for(const F of n){if(F===e)continue;const N=this.spatial.floors.find(_=>_.id===F);if(!N)continue;const W=new Set(this.spatial.zones.filter(_=>_.floorId===F).map(_=>_.name));for(const _ of r){const ce=_.name.replace(new RegExp(`^${i.name}\\s*`,"i"),""),te=`${N.name} ${ce}`.trim();W.has(te)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:F,name:te,category:_.category}),W.add(te),E+=1)}}return E>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:e,targetCount:n.length,added:E}),E}async getFloorDevices(e){const n=this.requireSession();if(this.activeOrgId!==We)return[];if(!n.scope.allowedFloorIds.includes(e)){const i={code:"FORBIDDEN",status:403,message:`当前角色「${n.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,i),this.pushAudit("floor.read",e,"denied",i.message),new Error(`403 FORBIDDEN: ${i.message}`)}if(e!==b.floorId)return[];let a=structuredClone(this.devices);return n.scope.allowedZoneIds?.length&&(a=a.filter(i=>i.logicalZoneId&&n.scope.allowedZoneIds.includes(i.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:a.length}),a}async dispatchControlBatch(e){const n=this.requireSession();if(!n.scope.canControlDevices||!n.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,i={batchId:a,floorId:e.floorId,createdBy:n.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(r=>({deviceId:r.deviceId,command:r.command,targetValue:r.targetValue,status:"queued"}))};return this.batches.set(a,i),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",i,e),this.pushAudit("control.dispatch",a,"success",`下发 ${e.targets.length} 台设备`),i.receipts.forEach((r,E)=>{const F=this.devices.find(N=>N.id===r.deviceId);setTimeout(()=>{r.status="dispatched",r.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:r.deviceId,status:"dispatched",at:r.dispatchedAt})},280+E*120),setTimeout(()=>{const N=new Date().toISOString();!F||F.connectivity==="offline"?(r.status="timeout",r.errorCode="GATEWAY_READBACK_TIMEOUT",r.errorMessage="设备离线，网关未收到回读确认",r.verifiedAt=N):(r.status="verified_success",r.observedValue=r.targetValue,r.verifiedAt=N,this.applyObservedTelemetry(F,r.command,r.targetValue,N)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:r.deviceId,status:r.status,observedValue:r.observedValue,at:N})},900+E*220)}),structuredClone(i)}applyObservedTelemetry(e,n,a,i){n==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:a,collectedAt:i,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(a)>0,collectedAt:i,stale:!1})):(n==="lighting.power"||n==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:a,collectedAt:i,stale:!1}:n==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:a,collectedAt:i,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:i,values:{[n]:a}})}async getControlBatch(e){this.requireSession();const n=this.batches.get(e);if(!n)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(n)}async listAlarms(e){const n=this.requireSession();return this.activeOrgId!==We?[]:!n.scope.allowedFloorIds.includes(e)||e!==b.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,n){const a=this.requireSession();if(!a.scope.canManageAlarms){const r=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",r),new Error(`403 FORBIDDEN: ${r}`)}const i=this.alarms.find(r=>r.id===e);if(!i)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return i.status="acknowledged",i.acknowledgedAt=new Date().toISOString(),i.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,i,{note:n}),this.pushAudit("alarm.acknowledge",e,"success",n),this.emit({type:"alarm.changed",floorId:i.floorId,alarmId:e,status:"acknowledged",at:i.acknowledgedAt}),structuredClone(i)}async listWorkOrders(e){const n=this.requireSession();return this.activeOrgId!==We?[]:!n.scope.allowedFloorIds.includes(e)||e!==b.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const n=this.requireSession();if(!n.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权创建工单`);const a=new Date().toISOString(),i={id:`wo-e7f-${Date.now().toString(36)}`,projectId:b.projectId,buildingId:b.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(i),e.alarmId){const r=this.alarms.find(E=>E.id===e.alarmId);r&&(r.workOrderId=i.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",i,e),this.pushAudit("work_order.create",i.id,"success",i.title),structuredClone(i)}async updateWorkOrderStatus(e,n){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const i=this.workOrders.find(r=>r.id===e);if(!i)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return i.status=n,i.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,i,{status:n}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${n}`),structuredClone(i)}async updateDevicePlanPoint(e){const n=this.requireSession();if(!n.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(i=>i.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,a,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(e){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(r=>r.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const i=new Date().toISOString();return a.physicalInstalled=e.physicalInstalled,a.physicalVerifiedAt=e.physicalInstalled?i:null,a.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:i,boundBy:n.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,a,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(a)}async listConnections(e){return this.requireSession(),this.activeOrgId!==We?[]:structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),this.activeOrgId!==We?[]:structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,n){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const i=this.devices.filter(E=>E.physicalInstalled&&E.hardwareBinding).length,r={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:b.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:i,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:n||"例行交付基线冻结"};return this.deliveryBatches.unshift(r),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,r,{note:n}),this.pushAudit("delivery.freeze",r.id,"success",`${i}/${this.devices.length} 已现场核验`),structuredClone(r)}async getAnalysisReport(e,n,a){this.requireSession();const i=n==="today"?1:n==="7d"?7:30,E={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*i)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*i).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(W=>W.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*i).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*i).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*i).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],F=n==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],N={category:e,range:n,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:E.kpis,unit:E.unit,series:E.base.map((W,_)=>({label:F[_],value:Math.round(W*(e==="energy"||e==="carbon"?i/2+.5:1)),baseline:Math.round(W*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:E.base[3],unit:E.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:E.base[4],unit:E.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:E.base[1],unit:E.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${n}&scopeId=${a}`,{kpis:N.kpis.length}),N}async listScenes(e){return this.requireSession(),this.activeOrgId!==We?[]:structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,e),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(e){const n=this.scenes.find(i=>i.id===e);if(!n)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const a=await this.dispatchControlBatch({floorId:n.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:n.actions,reason:`触发场景：${n.name}`});return n.lastExecutedAt=new Date().toISOString(),n.lastBatchId=a.batchId,a}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:b.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,n,a){this.requireSession();const i=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,r=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${n} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${n} (-30m) ~ ${a} (+30m)`,conflictWarning:i},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:i}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",r,{workdayStart:n,workdayEnd:a}),r}async saveWorkCalendar(e,n,a,i){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权修改运行日历`);if(this.calendar.version!==i)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(n>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:n,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:n,workdayEnd:a,expectedVersion:i}),this.pushAudit("settings.calendar",b.projectId,"success",`${n}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,n,a){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权启停运行规则`);const r=this.rules.find(E=>E.id===e);if(!r)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(r.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${r.version}）`);return r.enabled=n,r.version+=1,r.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,r,{enabled:n,expectedVersion:a}),this.pushAudit("settings.rule_toggle",e,"success",n?"启用":"停用"),structuredClone(r)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,n){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const i=Oe[n],r={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:n,roleLabel:i.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(r),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",r,{email:e,role:n}),this.pushAudit("org.invite",e,"success",i.roleLabel),structuredClone(r)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,n){return e!==b.floorId?()=>{}:(this.listeners.add(n),()=>{this.listeners.delete(n)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${b.floorId}`,e),this.listeners.forEach(n=>n(e))}}function oa(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new sa}const na={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"layout-dashboard":'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',waypoints:'<circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'};function la(t){return t>=20?"1.5":t>=16?"1.75":t>=14?"2":"2.25"}function ie(t,e=16,n=""){const a=la(e);return`<svg${n?` class="${n}"`:""} width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${na[t]}</svg>`}let rt={level:"floor",projectId:b.projectId,buildingId:b.buildingId,floorId:b.floorId};function et(){return rt}function Ge(t){return rt=t,rt}function Ne(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Et(t){const e=t.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面"))return 999;const n=e.match(/(-?\d+)/);if(!n)return 0;const a=Number(n[1]);return e.startsWith("B")?-Math.abs(a):a}function ia(t){if(t==="all")return{level:"all-projects"};const e=t.split(":");return e[0]==="project"&&e[1]?{level:"project",projectId:e[1]}:e[0]==="building"&&e[1]&&e[2]?{level:"building",projectId:e[1],buildingId:e[2]}:e[0]==="floor"&&e[1]&&e[2]&&e[3]?{level:"floor",projectId:e[1],buildingId:e[2],floorId:e[3]}:{level:"project",projectId:b.projectId}}function ca(t,e,n){return n==="project"?t.level==="all-projects"?{level:"project",projectId:e.projects[0]?.id??b.projectId}:{level:"project",projectId:t.projectId}:n==="building"&&t.level==="floor"?{level:"building",projectId:t.projectId,buildingId:t.buildingId}:t}function Je(t){const{tree:e,session:n,isOpen:a,searchKeyword:i}=t;if(e.projects.length===0)return'<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap"><span class="pacom-path-trigger is-static"><span class="pacom-path-muted">暂无项目</span></span></div>';const r=t.maxGranularity??"floor",E=t.activeAlarmCount??0,F=n.scope.allowedZoneIds?.length?n.scope.allowedZoneIds:null,N=e.floors.filter(R=>n.scope.allowedFloorIds.includes(R.id)),W=F||e.projects.length<=1&&e.buildings.length<=1&&N.length<=1?"floors-only":e.projects.length>1?"multi-project":e.buildings.length>1?"single-project-multi-building":"single-building",_=W==="multi-project"&&r!=="project",ce=W==="multi-project"||W==="single-project-multi-building",te=W!=="floors-only"&&r!=="project",T=r==="project"&&e.projects.length<=1||W==="floors-only"&&N.length<=1,q=ca(t.scope??rt,e,r),M=q.level==="all-projects"?null:e.projects.find(R=>R.id===q.projectId)??e.projects[0],Y=q.level==="building"||q.level==="floor"?e.buildings.find(R=>R.id===q.buildingId):null,$e=q.level==="floor"?e.floors.find(R=>R.id===q.floorId):null,ae=[];if(q.level==="all-projects")ae.push(`全部项目（${e.projects.length}）`);else if(q.level==="project")ae.push(Ne(M?.name??"广实2号园"));else if(q.level==="building")M&&ae.push(`<span class="pacom-path-muted">${Ne(M.name)}</span>`),ae.push(Ne(Y?.name??"E栋"));else{M&&W!=="floors-only"&&ae.push(`<span class="pacom-path-muted">${Ne(M.name)}</span>`),Y&&te&&ae.push(`<span class="pacom-path-muted">${Ne(Y.name)}</span>`);const R=!te&&Y?`${Y.name} ${$e?.name??"7F"}`:$e?.name??"7F";ae.push(Ne(R))}const me='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',pe=T?`<span class="pacom-path-trigger is-static">${ae.join(me)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${a}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${ae.join(me)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${ie("chevron-down",12)}</span>
      </button>`;if(!a||T)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${pe}</div>`;const C=i.trim().toLowerCase(),xe=q.level==="all-projects"?e.projects[0]?.id??b.projectId:q.projectId,be=q.level==="building"||q.level==="floor"?q.buildingId:e.buildings.find(R=>R.projectId===xe)?.id??b.buildingId,ye=e.projects.filter(R=>!C||R.name.toLowerCase().includes(C)),V=e.buildings.filter(R=>R.projectId===xe&&(!C||R.name.toLowerCase().includes(C))),le=[...e.floors.filter(R=>R.buildingId===be)].sort((R,ue)=>Et(ue.name)-Et(R.name)).filter(R=>!C||R.name.toLowerCase().includes(C)),v=r==="project"||e.projects.length>1,x=r!=="project"&&ce,O=r==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${pe}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${ie("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${Ne(i)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${ie("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${v?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${_?`<button type="button" class="pacom-space-pop-item ${q.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${e.projects.length}）</span>
                        ${q.level==="all-projects"?ie("check",14):""}
                      </button>`:""}
                ${ye.map(R=>{const ue=q.level==="project"&&q.projectId===R.id;return`<button type="button" class="pacom-space-pop-item ${ue?"is-active":""}" data-global-space-pick="project:${Ne(R.id)}">
                      <span>${Ne(R.name)}</span>
                      ${ue?ie("check",14):ie("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${x?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ne(e.projects.find(R=>R.id===xe)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${q.level==="project"?"is-active":""}" data-global-space-pick="project:${Ne(xe)}">
                  <span>全园区</span>
                  ${q.level==="project"?ie("check",14):""}
                </button>
                ${V.map(R=>{const ue=q.level==="building"&&q.buildingId===R.id;return`<button type="button" class="pacom-space-pop-item ${ue?"is-active":""}" data-global-space-pick="building:${Ne(R.projectId)}:${Ne(R.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ne(R.name)}</span>
                        ${R.id===b.buildingId&&E>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${ue?ie("check",14):ie("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${O?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ne(e.buildings.find(R=>R.id===be)?.name??"楼宇")} · 楼层</div>
                ${te?`<button type="button" class="pacom-space-pop-item ${q.level==="building"&&q.buildingId===be?"is-active":""}" data-global-space-pick="building:${Ne(xe)}:${Ne(be)}">
                        <span>整栋</span>
                        ${q.level==="building"&&q.buildingId===be?ie("check",14):""}
                      </button>`:""}
                ${le.map(R=>{const ue=n.scope.allowedFloorIds.includes(R.id),J=q.level==="floor"&&q.floorId===R.id,p=R.id===b.floorId&&E>0;return`<button type="button" class="pacom-space-pop-item ${J?"is-active":""}" style="${ue?"":"opacity:0.5;"}" data-global-space-pick="floor:${Ne(xe)}:${Ne(be)}:${Ne(R.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ne(R.name)}</span>
                        ${p?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${J?ie("check",14):ue?R.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function tt(t,e){t.querySelectorAll("[data-global-space-toggle]").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation(),e.onToggle()})}),t.querySelector("[data-global-space-search]")?.addEventListener("input",a=>{e.onSearch(a.currentTarget.value)}),t.querySelectorAll("[data-global-space-pick]").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation();const r=a.dataset.globalSpacePick;if(!r)return;const E=Ge(ia(r));e.onPick(E)})})}const mt=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function ra(t,e,n,a,i){let r="profile",E="directory",F=await e.listOrgMembers(),N=await e.listAuditLogs(),W="",_="all",ce="all",te="all",T=!1,q=!1,M=n.displayName,Y=n.role==="org_admin"||n.role==="project_admin"?"设施运维总监":n.role==="commissioning_engineer"?"楼宇自控部署工程师":n.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",$e="138-0013-8072",ae="",me="";async function pe(){[F,N]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),C()}function C(){const xe=e.mode==="demo"&&typeof e.switchDemoRole=="function",be=W.trim().toLowerCase(),ye=F.filter(v=>_!=="all"&&v.role!==_?!1:be?`${v.displayName} ${v.email} ${v.roleLabel} ${v.scopeSummary}`.toLowerCase().includes(be):!0),V=N.filter(v=>{if(ce==="success"&&v.result!=="success"||ce==="denied"&&v.result==="success")return!1;if(te!=="all"){const x=`${v.action} ${v.target}`.toLowerCase();if(te==="control"&&!x.includes("control")&&!x.includes("scene")&&!x.includes("控制")||te==="alarm"&&!x.includes("alarm")&&!x.includes("work")&&!x.includes("告警")||te==="deploy"&&!x.includes("deploy")&&!x.includes("plan")&&!x.includes("hardware")&&!x.includes("部署"))return!1}return!0});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${r==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${r==="members"}" data-atab="members">成员与角色（${F.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${r==="audit"}" data-atab="audit">操作审计日志（${N.length}）</button>
              </div>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">广州国家实验室</span>
              <span class="pacom-badge pacom-badge--accent">${n.roleLabel}</span>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:8px 6px 32px;">
          <div style="width:100%; max-width:960px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${ae?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${ae}</span></div>`:""}
            ${me?`<div class="pacom-alert-banner">${me}</div>`:""}
            ${r==="profile"?`
                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">个人资料与授权摘要</h2>
                    <span class="pacom-badge pacom-badge--online">${n.roleLabel}</span>
                  </div>
                  <form class="pacom-settings-card" data-role="profile-form">
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">显示姓名与岗位</span>
                        <span class="pacom-setting-desc">账号 ID：${n.userId} · 所属机构：广州国家实验室</span>
                      </div>
                      <div class="pacom-setting-control" style="flex-wrap:wrap;">
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${M}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${Y}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">告警接收手机号（SMS）</span>
                        <span class="pacom-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="pacom-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${$e}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
                        <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
                      </div>
                    </div>
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">楼层与操作权限</span>
                        <span class="pacom-setting-desc">
                          已授权楼层 ${n.scope.allowedFloorIds.length} 层 · 设备控制：${n.scope.canControlDevices?"允许":"只读"} · 部署编辑：${n.scope.canEditDeployment?"允许":"只读"}
                        </span>
                      </div>
                    </div>
                  </form>
                </section>

                ${xe?`
                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">切换视角</h2>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(Oe).map(v=>{const x=Oe[v];return`
                              <button class="pacom-role-card ${v===n.role?"is-active":""}" data-switch-role="${v}">
                                <strong style="font-weight:500;">${x.roleLabel}</strong>
                                <span class="pacom-row-sub">${x.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${x.scope.allowedFloorIds.length} 层 · 部署编辑：${x.scope.canEditDeployment?"是":"否"}</span>
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
                  ${T?`
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
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="directory"}" data-msub="directory">成员目录（${F.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="groups"}" data-msub="groups">工作组（${mt.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${E==="directory"?`当前显示 ${ye.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${E==="directory"?`
                        <div class="pacom-table-card">
                          <div class="pacom-table-toolbar">
                            <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" name="memberSearch" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${W}" />
                              <select class="pacom-select" name="memberRoleFilter" data-role-filter>
                                <option value="all" ${_==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(Oe).map(v=>`<option value="${v}" ${_===v?"selected":""}>${Oe[v].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${T?"收起邀请":"+ 邀请成员"}
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
                                ${ye.map(v=>`
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
                                ${mt.map(v=>`
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
                          <option value="all" ${te==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${te==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${te==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${te==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${ce==="all"}" data-audit-filter="all">全部（${N.length}）</button>
                          <button class="pacom-tab" aria-selected="${ce==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${ce==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${V.map(v=>`
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
    `,t.querySelectorAll("[data-atab]").forEach(v=>{v.addEventListener("click",()=>{r=v.dataset.atab,ae="",me="",C()})}),t.querySelectorAll("[data-msub]").forEach(v=>{v.addEventListener("click",()=>{E=v.dataset.msub??"directory",C()})}),t.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{q=!q,C()}),t.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",v=>{v.preventDefault();const x=new FormData(v.currentTarget),O=String(x.get("wgName")??"").trim(),R=String(x.get("wgRole")??"运行值班员"),ue=String(x.get("wgScope")??"").trim();!O||!ue||(mt.push({id:`wg-${Date.now()}`,name:O,defaultRoleLabel:R,locationScope:ue,memberCount:1,membersSummary:n.displayName,notifyChannel:"站内 + 邮件"}),q=!1,ae=`已创建工作组「${O}」（授权空间：${ue}）。`,C())}),t.querySelector('[data-role="profile-form"]')?.addEventListener("submit",v=>{v.preventDefault();const x=new FormData(v.currentTarget);M=String(x.get("displayName")??"").trim()||n.displayName,Y=String(x.get("jobTitle")??"").trim()||Y,$e=String(x.get("phone")??"").trim()||$e,ae=`已更新个人资料：${M}（${Y}）· 告警短信接收号 ${$e}。`,C()}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",i()}),t.querySelectorAll("[data-switch-role]").forEach(v=>{v.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const x=await e.switchDemoRole(v.dataset.switchRole);a(x)})}),t.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{T=!T,C()}),t.querySelector("[data-member-search]")?.addEventListener("input",v=>{const x=v.currentTarget,O=x.selectionStart??x.value.length;W=x.value,C();const R=t.querySelector("[data-member-search]");R&&(R.focus(),R.setSelectionRange(O,O))}),t.querySelector("[data-role-filter]")?.addEventListener("change",v=>{_=v.currentTarget.value,C()}),t.querySelectorAll("[data-audit-filter]").forEach(v=>{v.addEventListener("click",()=>{ce=v.dataset.auditFilter??"all",C()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",v=>{te=v.currentTarget.value??"all",C()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async v=>{v.preventDefault(),me="";const x=new FormData(v.currentTarget);try{await e.inviteOrgMember(String(x.get("email")??""),String(x.get("role"))),T=!1,await pe()}catch(O){me=O instanceof Error?O.message:String(O),C()}})}C()}const Xe={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},da={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},pa={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function ua(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function ma(t){return t.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:t.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function gt(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("vav")||t.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:e.includes("co₂")||e.includes("co2")||t.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function ga(t,e,n){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),i=a.get("alarm"),r=a.get("wo");let E=await e.getSpatialTree(),F=et(),N=!1,W="",_=[],ce=[],te=[],T=r?"workorders":"alarms",q="all",M="all",Y="all",$e="impact",ae=!1,me="",pe=i,C=r,xe=null,be=null,ye="resolved";const V=new Set,le=new Map,v=new Map,x=new Map,O=new Map;let R="",ue="";function J(re){const f=O.get(re.id);if(f)return f;const c=re.id.match(/(\d+)$/),I=`WO-2026-${c?c[1]:re.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,A={estCost:"¥ 450",actualCost:re.status==="closed"?"¥ 380":"--",cmmsNo:I,assigneeGroup:"暖通运维组",tasks:[{id:`${re.id}-t1`,label:"核查设备供电与现场指示灯状态",done:re.status!=="open"},{id:`${re.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:re.status==="resolved"||re.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:re.createdAt?re.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${I}）`}]};return O.set(re.id,A),A}async function p(){[_,ce,te]=await Promise.all([e.listAlarms(b.floorId),e.listWorkOrders(b.floorId),e.getFloorDevices(b.floorId).catch(()=>[])]),ce.forEach(re=>J(re)),ve()}function X(re){if(!re)return{name:"楼层通用",zone:"E7F",dev:null};const f=te.find(c=>c.id===re)??null;return f?{name:f.name,zone:(f.logicalZoneId?pa[f.logicalZoneId]:void 0)??"E7F",dev:f}:{name:re,zone:"E7F",dev:null}}function Ae(re){const f=X(re.deviceId).dev;f&&f.connectivity==="offline"?x.set(re.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${f.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):x.set(re.id,{verdict:"pass",summary:`自检通过（PASS）：「${f?.name??re.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),pe=re.id,ve()}function ve(){const re=_.filter(u=>u.status==="active"&&!le.has(u.id)),f=ce.filter(u=>!J(u).cancelled&&(u.status==="open"||u.status==="assigned"||u.status==="in_progress")),c=_.filter(u=>u.status!=="active").length+v.size,I=0,A=le.size,de=me.trim().toLowerCase(),je=_.filter(u=>{const $=le.has(u.id);if(q==="snoozed"){if(!$)return!1}else if(q==="active"){if(u.status!=="active"||$)return!1}else if(q==="acknowledged"){if(u.status!=="acknowledged")return!1}else if($)return!1;if(Y!=="all"&&u.severity!==Y)return!1;if(!de)return!0;const ne=X(u.deviceId);return`${u.title} ${u.message} ${ne.name} ${ne.zone} ${u.deviceId}`.toLowerCase().includes(de)}),Fe=new Map;for(const u of je){const $=`${u.title} ${u.message}`.toLowerCase(),ne=$.includes("离线")||$.includes("modbus")||$.includes("通信"),fe=ae?ne?"root-gateway-modbus":u.deviceId:u.id,ke=ne?"根因：E7F 主控网关通信链路":`根因：${X(u.deviceId).name}`,Te=Fe.get(fe)??{rootLabel:ke,items:[]};Te.items.push(u),Fe.set(fe,Te)}const De=Array.from(Fe.values());$e==="impact"&&De.sort((u,$)=>gt($.items[0]).costYuan-gt(u.items[0]).costYuan);const Ce=ce.filter(u=>{const $=J(u);if(M==="cancelled"){if(!$.cancelled)return!1}else if($.cancelled||M==="open"&&(u.status==="resolved"||u.status==="closed")||M==="resolved"&&u.status!=="resolved"||M==="closed"&&u.status!=="closed")return!1;if(!de)return!0;const ne=X(u.deviceId);return`${u.title} ${u.description} ${u.id} ${$.cmmsNo} ${ne.name}`.toLowerCase().includes(de)});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Je({tree:E,session:n,scope:F,activeAlarmCount:re.length,isOpen:N,searchKeyword:W})}
            </div>

            <div class="pacom-header-meta">
              ${T==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${ae}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${n.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${n.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${ie("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${T==="alarms"}" data-main-tab="alarms">实时告警（${_.length-A}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${T==="workorders"}" data-main-tab="workorders">运维工单（${ce.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${T==="alarms"&&q==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${re.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${T==="workorders"&&M==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${f.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${T==="alarms"&&q==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
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

          ${R?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${R}</span></div>`:""}
          ${ue?`<div class="pacom-alert-banner">${ue}</div>`:""}

          ${T==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${me}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${Y==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${Y==="critical"?"selected":""}>严重</option>
                      <option value="major" ${Y==="major"?"selected":""}>重要</option>
                      <option value="minor" ${Y==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${$e==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${$e==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${q==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${q==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${q==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${q==="snoozed"}" data-status-pill="snoozed">已忽略（${A}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${V.size>0&&n.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${V.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${De.length} 项</span>
                  </div>
                </div>
                ${De.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${De.map(u=>{const $=u.items[0],ne=da[$.severity]??{label:$.severity,cls:"pacom-badge--neutral"},fe=X($.deviceId),ke=ma($),Te=gt($),Re=pe===$.id,Ue=le.get($.id),Me=!!Ue,we=V.has($.id),se=x.get($.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${$.id}" data-check-alarm="${$.id}" ${we?"checked":""} ${$.status!=="active"||Me?"disabled":""} aria-label="选择 ${$.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${ne.cls}">${ne.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${$.title}</span>
                                      ${ae?`<span class="pacom-badge pacom-badge--accent">${u.rootLabel}${u.items.length>1?` · 影响 ${u.items.length} 项`:""}</span>`:""}
                                      ${se?`<span class="pacom-badge ${se.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${se.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${$.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${fe.name}</div>
                                    <div class="pacom-row-sub">${fe.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${Te.costLabel}</div>
                                    <div class="pacom-row-sub">${Te.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${ke.duration}</div>
                                    <div class="pacom-row-sub" style="color:${ke.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${ke.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${Me?"pacom-badge--neutral":$.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Me?`忽略 ${Ue?.duration}`:$.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Me?`<button class="pacom-btn" data-unsnooze="${$.id}">恢复监控</button>`:`
                                            ${$.status==="active"?`<button class="pacom-btn" data-mark-actioned="${$.id}" ${n.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${$.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${$.id}" ${n.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${$.id}">${Re?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${Re?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${ua($)}
                                            </div>
                                            ${Ue?`<div class="pacom-info-banner">忽略周期：${Ue.duration} · 原因备注：${Ue.reason}</div>`:""}
                                            ${se?`
                                                <div class="pacom-banner ${se.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${se.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${se.steps.map(Ze=>`<span>${Ze}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${$.id}</code> · 设备编号 <code>${$.deviceId}</code> · 关联工单 ${$.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${$.id}">单机自检（FTT）</button>
                                              ${!Me&&$.status==="active"?`<button class="pacom-btn" data-open-snooze="${$.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${$.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${$.deviceId}">定位设备 →</button>
                                            </div>
                                            ${xe===$.id?`
                                                <form data-snooze-form="${$.id}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
              ${(()=>{const u=C?ce.find($=>$.id===C)??null:null;if(u){const $=X(u.deviceId),ne=J(u),fe=!!(ne.cancelled||u.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${u.id}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${u.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${ne.cmmsNo}</span>
                        ${ne.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${u.id}" data-wo-status="${u.id}" aria-label="更新工单状态" ${fe?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(ke=>`<option value="${ke}" ${u.status===ke?"selected":""}>${Xe[ke]}</option>`).join("")}
                          <option value="cancelled" ${ne.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${be===u.id?`
                        <form data-close-wo-form="${u.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${Xe[ye]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
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
                            ${ne.tasks.map(ke=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${ke.id}" data-wo-task="${u.id}" data-task-id="${ke.id}" ${ke.done?"checked":""} ${fe?"disabled":""} />
                                    <span>${ke.label}</span>
                                  </span>
                                  ${ke.unit?`<span class="pacom-row-sub">实测：${ke.reading??"--"} ${ke.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${ne.history.map(ke=>`<span>• <span class="pacom-row-sub">${ke.at}</span> — ${ke.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${u.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${ne.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${$.name}（${$.zone}）</span>
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
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${me}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${M==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${M==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${M==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${M==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${M==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${Ce.length} 条工单</span>
                  </div>
                  ${Ce.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${Ce.map($=>{const ne=X($.deviceId),fe=J($),ke=!!(fe.cancelled||$.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${$.title}</span>
                                        ${fe.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${$.description} · <code>${$.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${ne.name}</div>
                                      <div class="pacom-row-sub">${ne.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${fe.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${fe.assigneeGroup} · 预估 ${fe.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${$.id}" data-wo-status="${$.id}" aria-label="更新工单状态" ${ke?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Te=>`<option value="${Te}" ${$.status===Te?"selected":""}>${Xe[Te]}</option>`).join("")}
                                          <option value="cancelled" ${fe.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${$.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${be===$.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${$.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${Xe[ye]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
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
    `,tt(t,{onToggle:()=>{N=!N,ve(),N&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:u=>{W=u,ve();const $=t.querySelector("[data-global-space-search]");$&&($.focus(),$.setSelectionRange(u.length,u.length))},onPick:u=>{F=u,N=!1,ve()}}),t.querySelectorAll("[data-main-tab]").forEach(u=>{u.addEventListener("click",()=>{T=u.dataset.mainTab??"alarms",R="",ve()})}),t.querySelectorAll("[data-kpi-filter]").forEach(u=>{u.addEventListener("click",()=>{const $=u.dataset.kpiFilter;R="",$==="workorders"?(T="workorders",M=M==="open"?"all":"open"):($==="active"||$==="acknowledged")&&(T="alarms",q=q===$?"all":$),ve()})}),t.querySelectorAll("[data-status-pill]").forEach(u=>{u.addEventListener("click",()=>{q=u.dataset.statusPill??"all",ve()})}),t.querySelectorAll("[data-wo-pill]").forEach(u=>{u.addEventListener("click",()=>{M=u.dataset.woPill??"all",ve()})}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{R="",p()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{ae=!ae,ve()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",u=>{Y=u.currentTarget.value,ve()}),t.querySelector("[data-alarm-sort]")?.addEventListener("change",u=>{$e=u.currentTarget.value??"impact",ve()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",u=>{const $=u.currentTarget,ne=$.selectionStart??$.value.length;me=$.value,ve();const fe=t.querySelector("[data-alarm-search]");fe&&(fe.focus(),fe.setSelectionRange(ne,ne))}),t.querySelectorAll("[data-check-alarm]").forEach(u=>{u.addEventListener("change",()=>{const $=u.dataset.checkAlarm;$&&(u.checked?V.add($):V.delete($),ve())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{ue="";const u=Array.from(V);try{for(const $ of u)await e.acknowledgeAlarm($,"告警中心批量确认"),v.set($,"批量确认处置");V.clear(),R=`已批量确认 ${u.length} 条告警，未来 24 小时持续校验无复发。`,await p()}catch($){ue=$ instanceof Error?$.message:String($),ve()}}),t.querySelectorAll("[data-expand-alarm]").forEach(u=>{u.addEventListener("click",()=>{const $=u.dataset.expandAlarm??null;pe=pe===$?null:$,xe=null,ve()})}),t.querySelectorAll("[data-expand-wo]").forEach(u=>{u.addEventListener("click",()=>{const $=u.dataset.expandWo??null;C=C===$?null:$,ve()})}),t.querySelectorAll("[data-run-ftt]").forEach(u=>{u.addEventListener("click",()=>{const $=_.find(ne=>ne.id===u.dataset.runFtt);$&&Ae($)})}),t.querySelectorAll("[data-open-snooze]").forEach(u=>{u.addEventListener("click",()=>{xe=u.dataset.openSnooze??null,ve()})}),t.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{xe=null,ve()}),t.querySelectorAll("[data-snooze-form]").forEach(u=>{u.addEventListener("submit",$=>{$.preventDefault();const ne=u.dataset.snoozeForm;if(!ne)return;const fe=new FormData(u),ke=String(fe.get("duration")??"24h"),Te=String(fe.get("reason")??"").trim()||"现场核查中";le.set(ne,{duration:ke,reason:Te}),V.delete(ne),xe=null,R=`已限时忽略该告警（${ke} · ${Te}），可在「已忽略」页签中随时恢复。`,ve()})}),t.querySelectorAll("[data-unsnooze]").forEach(u=>{u.addEventListener("click",()=>{const $=u.dataset.unsnooze;$&&(le.delete($),R="已恢复该告警的实时监控。",ve())})}),t.querySelectorAll("[data-go-ts]").forEach(u=>{u.addEventListener("click",()=>{const $=u.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent($)}`})}),t.querySelectorAll("[data-locate-home]").forEach(u=>{u.addEventListener("click",()=>{const $=u.dataset.locateHome??"";window.location.hash=$?`#home?device=${encodeURIComponent($)}`:"#home"})}),t.querySelectorAll("[data-mark-actioned]").forEach(u=>{u.addEventListener("click",async()=>{ue="";const $=u.dataset.markActioned;try{await e.acknowledgeAlarm($,"现场自处理完成（Mark Actioned）"),v.set($,"现场自处理完成"),V.delete($),R="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await p()}catch(ne){ue=ne instanceof Error?ne.message:String(ne),ve()}})}),t.querySelectorAll("[data-to-wo]").forEach(u=>{u.addEventListener("click",async()=>{ue="";const $=_.find(ne=>ne.id===u.dataset.toWo);if($)try{await e.createWorkOrder({floorId:$.floorId,deviceId:$.deviceId,alarmId:$.id,title:`处置告警：${$.title}`,description:$.message}),R=`已将「${$.title}」转为运维工单并同步 CMMS。`,await p()}catch(ne){ue=ne instanceof Error?ne.message:String(ne),ve()}})}),t.querySelectorAll("[data-wo-status]").forEach(u=>{u.addEventListener("change",async()=>{const $=u.dataset.woStatus,ne=u.value;if(ue="",ne==="cancelled"){const fe=ce.find(ke=>ke.id===$);if(fe){const ke=J(fe);ke.cancelled=!0,ke.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),R="工单已移入「已取消」分类并锁定编辑。",ve()}return}if(ne==="resolved"||ne==="closed"){be=$,ye=ne,ve();return}try{await e.updateWorkOrderStatus($,ne);const fe=ce.find(ke=>ke.id===$);fe&&J(fe).history.unshift({at:"刚刚",text:`状态变更为「${Xe[ne]}」`}),R="工单状态已更新并写入审计日志。",await p()}catch(fe){ue=fe instanceof Error?fe.message:String(fe),await p()}})}),t.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{be=null,ve()}),t.querySelectorAll("[data-close-wo-form]").forEach(u=>{u.addEventListener("submit",async $=>{$.preventDefault();const ne=u.dataset.closeWoForm,fe=new FormData(u),ke=String(fe.get("cause")??"").trim(),Te=String(fe.get("solution")??"").trim(),Re=String(fe.get("actualCost")??"").trim();try{await e.updateWorkOrderStatus(ne,ye);const Ue=ce.find(Me=>Me.id===ne);if(Ue){const Me=J(Ue);Me.cause=ke,Me.solution=Te,Re&&(Me.actualCost=Re),Me.history.unshift({at:"刚刚",text:`流转至「${Xe[ye]}」· 根因：${ke}`})}be=null,C=ne,R=`工单已更新为「${Xe[ye]}」，根因与方案已沉淀归档。`,await p()}catch(Ue){ue=Ue instanceof Error?Ue.message:String(Ue),ve()}})}),t.querySelectorAll("[data-wo-task]").forEach(u=>{u.addEventListener("change",()=>{const $=ce.find(ke=>ke.id===u.dataset.woTask);if(!$)return;const fe=J($).tasks.find(ke=>ke.id===u.dataset.taskId);fe&&(fe.done=u.checked),ve()})})}await p()}const ba=ie("chevron-down",12),ot=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],jt=[{id:b.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:b.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:b.projectId,label:"广实2号园（全园区）",factor:18.2}],va={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},fa=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],Ke=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function bt(t,e=""){const n=(t??"").trim().toLowerCase();return!(!n||n.includes("%")||n.includes("°c")||n.includes("ppm")||n.includes("ms")||n.includes("m²")||n.includes("/m2")||n.includes("db")||n.includes("lx")||e.includes("率")||e.includes("均")||e.includes("强度")||e.includes("延迟"))}function nt(t,e){const n=t*e;return Math.abs(n)>=10?Math.round(n):Math.round(n*10)/10}function ha(t,e){const n=Number(String(t).replaceAll(",","")),a=e??"";return Number.isFinite(n)?a==="kWh"&&Math.abs(n)>=1e4?{value:(n/1e3).toFixed(1),unit:"MWh",title:`精确值：${n.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(n)?n.toLocaleString("en-US"):n.toLocaleString("en-US",{maximumFractionDigits:1}),unit:a,title:`${n.toLocaleString("en-US")} ${a}`.trim()}:{value:t,unit:a,title:`${t} ${a}`.trim()}}function ya(t,e){if(e===1)return t;const n=bt(t.unit);return{...t,kpis:t.kpis.map(a=>{const i=Number(String(a.value).replaceAll(",",""));return!Number.isFinite(i)||!bt(a.unit,a.label)?a:{...a,value:String(nt(i,e))}}),series:n?t.series.map(a=>({...a,value:nt(a.value,e),...typeof a.baseline=="number"?{baseline:nt(a.baseline,e)}:{}})):t.series,zoneBreakdown:t.zoneBreakdown.map(a=>bt(a.unit)?{...a,value:nt(a.value,e)}:a)}}function $a(t,e){const n=Math.max(...t.series.map(te=>Math.max(te.value,te.baseline??0)),1),a=46,i=34,r=36,E=Math.max(t.series.length*(a+i)+r*2,620),F=228,N=184,W=132,_=[0,.25,.5,.75,1].map(te=>{const T=Math.round(N-te*W);return`<line x1="${r-8}" y1="${T}" x2="${E-18}" y2="${T}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${te===0?"0":"3 3"}" />`}).join(""),ce=t.series.map((te,T)=>{const q=r+T*(a+i),M=Math.max(8,Math.round(te.value/n*W)),Y=N-M,$e=typeof te.baseline=="number"&&te.value>te.baseline*1.08,ae=$e?`<rect x="${q-8}" y="34" width="${a+16}" height="${N-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",me=typeof te.baseline=="number"?`<line x1="${q-5}" y1="${Math.round(N-te.baseline/n*W)}" x2="${q+a+5}" y2="${Math.round(N-te.baseline/n*W)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",pe=e&&($e||T===1)?`<g><title>${$e?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${q+a/2}" cy="18" r="7" fill="${$e?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${q+a/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${$e?"!":"S"}</text></g>`:"",C=te.value>=1e4?`${(te.value/1e3).toFixed(1)}k`:te.value.toLocaleString("en-US");return`
        ${ae}
        ${me}
        ${pe}
        <g>
          <title>${te.label}：实测 ${te.value.toLocaleString("en-US")} ${t.unit}${te.baseline!==void 0?` / 基线 ${te.baseline.toLocaleString("en-US")} ${t.unit}`:""}</title>
          <rect x="${q}" y="${Y}" width="${a}" height="${M}" rx="7" fill="${$e?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${q+a/2}" y="${Y-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${C}</text>
        <text x="${q+a/2}" y="${N+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${te.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${E} ${F}" style="width:100%; height:232px; display:block;" role="img" aria-label="${t.category} 趋势图">
      ${_}
      ${ce}
    </svg>
  `}function wa(t,e){const n=t.connectivity==="offline";if(t.category==="hvac"){const a=Number(t.telemetry.setpoint?.value??24);return[{id:`${t.id}:temp`,deviceId:t.id,deviceName:t.name,pointKey:"temp",label:"室内温度",unit:"°C",points:n?[23.8,24,24.1,null,null,null,null,null]:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a],offline:n,colorIdx:e},{id:`${t.id}:setpoint`,deviceId:t.id,deviceName:t.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:n?[24,24,24,null,null,null,null,null]:[a,a,a,a,a,a,a,a],offline:n,colorIdx:e+1},{id:`${t.id}:valve`,deviceId:t.id,deviceName:t.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:n?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:n,colorIdx:e+2}]}if(t.category==="lighting"){const a=Number(t.telemetry.dimming?.value??60);return[{id:`${t.id}:dimming`,deviceId:t.id,deviceName:t.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)],offline:n,colorIdx:e},{id:`${t.id}:power`,deviceId:t.id,deviceName:t.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:n,colorIdx:e+1}]}if(t.category==="sensor"){const a=Number(t.telemetry.temp?.value??23.4);return[{id:`${t.id}:temp`,deviceId:t.id,deviceName:t.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a],offline:n,colorIdx:e},{id:`${t.id}:co2`,deviceId:t.id,deviceName:t.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:n,colorIdx:e+1},{id:`${t.id}:humidity`,deviceId:t.id,deviceName:t.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:n,colorIdx:e+2}]}return[{id:`${t.id}:latency`,deviceId:t.id,deviceName:t.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:n,colorIdx:e}]}function xa(t){const e=t.points.filter(F=>typeof F=="number");if(!e.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const n=Math.min(...e),a=Math.max(...e),i=e.reduce((F,N)=>F+N,0)/e.length,r=t.points[t.points.length-1],E=F=>Math.abs(F)<100&&!Number.isInteger(F)?F.toFixed(1):Math.round(F).toString();return{min:E(n),avg:i.toFixed(Math.abs(i)<100?1:0),max:E(a),curr:typeof r=="number"?E(r):"离线"}}function Sa(t,e,n){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!t.length)return'<div class="pacom-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const i=(E,F)=>{const Y=[];for(const V of E)for(const le of V.points)typeof le=="number"&&Y.push(le);const $e=Y.length?Math.min(...Y)*.92:0,ae=Y.length?Math.max(...Y)*1.08:100,me=Math.max(ae-$e,1),pe=[0,.5,1].map(V=>{const le=Math.round(26+106*(1-V)),v=($e+me*V).toFixed(me<15?1:0);return`
          <line x1="44" y1="${le}" x2="662" y2="${le}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${V===0?"0":"3 3"}" />
          <text x="38" y="${le+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${v}</text>
        `}).join(""),C=a.map((V,le)=>`<text x="${44+le/(a.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${V}</text>`).join(""),xe=E.map((V,le)=>{const v=Ke[(V.colorIdx+le)%Ke.length],x=V.points,O=[];let R=44,ue=26+106/2,J=!1;x.forEach((X,Ae)=>{const ve=44+Ae/(x.length-1)*618;if(typeof X=="number"){const re=26+106*(1-(X-$e)/me);O.push(`${ve.toFixed(1)},${re.toFixed(1)}`),R=ve,ue=re}else J=!0});const p=n?x.map((X,Ae)=>{if(typeof X!="number")return null;const ve=44+Ae/(x.length-1)*618,f=26+106*(1-(X*.96-$e)/me);return`${ve.toFixed(1)},${f.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${p?`<polyline fill="none" stroke="${v}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${p}" />`:""}
          ${O.length?`<polyline fill="none" stroke="${v}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${O.join(" ")}" />`:""}
          ${J?`<line x1="${R.toFixed(1)}" y1="${ue.toFixed(1)}" x2="662" y2="${ue.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${ue-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),be=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,ye=E.map((V,le)=>{const v=Ke[(V.colorIdx+le)%Ke.length],x=xa(V);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${v};"></span>${V.deviceName} · ${V.label}</span></td>
            <td><strong>${x.curr}</strong> <span class="pacom-row-sub">${V.unit}</span></td>
            <td>${x.min} <span class="pacom-row-sub">${V.unit}</span></td>
            <td>${x.avg} <span class="pacom-row-sub">${V.unit}</span></td>
            <td>${x.max} <span class="pacom-row-sub">${V.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${F}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${E.map((V,le)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${Ke[(V.colorIdx+le)%Ke.length]};"></span>${V.deviceName}·${V.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${pe}
          ${C}
          ${be}
          ${xe}
        </svg>
        <div class="pacom-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="pacom-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${ye}</tbody>
          </table>
        </div>
      </div>
    `};if(e==="shared")return i(t,"单图叠合对比（Shared）");const r=new Map;for(const E of t){const F=r.get(E.unit)??[];F.push(E),r.set(E.unit,F)}return Array.from(r.entries()).map(([E,F])=>i(F,`按单位分组泳道（${E}）`)).join("")}function Ia(t){const e=[["时段",`数值 (${t.unit})`,`基线 (${t.unit})`].join(","),...t.series.map(r=>[r.label,String(r.value),r.baseline!==void 0?String(r.baseline):""].join(","))],n=new Blob([`\uFEFF${e.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(n),i=document.createElement("a");i.href=a,i.download=`pacom-${t.category}-${t.range}.csv`,i.click(),URL.revokeObjectURL(a)}function ka(t){const e=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],n=["时间",...t.map(F=>`${F.deviceName}·${F.label}(${F.unit})`)].join(","),a=e.map((F,N)=>[F,...t.map(W=>String(W.points[N]??"No Data"))].join(",")),i=new Blob([`\uFEFF${[n,...a].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(i),E=document.createElement("a");E.href=r,E.download="pacom-timeseries-export.csv",E.click(),URL.revokeObjectURL(r)}async function Ea(t,e,n){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),i=a.get("tab"),r=a.get("cat"),E=a.get("device"),F=a.get("points"),N=a.get("mode"),W=a.get("interval");let _=i==="timeseries"?"timeseries":r&&ot.some(f=>f.id===r)?r:"energy",ce="7d",te="2026-11-16",T="2026-11-23",q=et(),M=!1,Y="",$e=q.level==="all-projects"||q.level==="project"?b.projectId:q.level==="building"?b.buildingId:b.floorId,ae="chart",me=!0,pe="breakdown",C=!1,xe=null;const[be,ye]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(b.floorId).catch(()=>[])]);let V=ye;const le=new Map,v=[];V.forEach((f,c)=>{const I=wa(f,c);le.set(f.id,I),v.push(...I)});let x=N==="shared"||N==="grouped"?N:"grouped",O=W==="15m"||W==="1h"||W==="1d"?W:"1h",R=!1;const ue=[];if(F?F.split(",").forEach(f=>{v.some(c=>c.id===f)&&ue.push(f)}):E&&le.has(E)&&(le.get(E)??[]).slice(0,2).forEach(f=>ue.push(f.id)),!ue.length){const f=V.find(A=>A.category==="hvac"),c=V.find(A=>A.category==="sensor"),I=V.find(A=>A.category==="lighting");f&&(le.get(f.id)??[]).slice(0,2).forEach(A=>ue.push(A.id)),c&&(le.get(c.id)??[]).slice(0,1).forEach(A=>ue.push(A.id)),I&&(le.get(I.id)??[]).slice(0,1).forEach(A=>ue.push(A.id)),ue.length||v.slice(0,3).forEach(A=>ue.push(A.id))}const J=new Set(ue),p=new Set(V.filter((f,c)=>c<2||(le.get(f.id)??[]).some(I=>J.has(I.id))).map(f=>f.id)),X=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:v.filter(f=>f.pointKey==="temp"||f.pointKey==="setpoint"||f.pointKey==="co2").slice(0,4).map(f=>f.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:v.filter(f=>f.pointKey==="dimming"||f.pointKey==="power").slice(0,4).map(f=>f.id),mode:"grouped",interval:"15m"}];let Ae="";async function ve(){const f=_==="timeseries"?"energy":_,c=ce==="custom"?"30d":ce;xe=await e.getAnalysisReport(f,c,b.floorId),re()}function re(){if(!xe)return;const f=_==="timeseries",c=_==="timeseries"?"energy":_,I=ot.find(h=>h.id===c)??ot[0],A=jt.find(h=>h.id===$e)??jt[0],de=ya(xe,A.factor),je=de.zoneBreakdown.filter(h=>h.status==="warning"),Fe=va[c],De=Math.max(...de.zoneBreakdown.map(h=>h.value),1),Ce=v.filter(h=>J.has(h.id));t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${Je({tree:be,session:n,scope:q,isOpen:M,searchKeyword:Y})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${ce==="today"?"selected":""}>今日</option>
                <option value="7d" ${ce==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${ce==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${ce==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${f?"":`<button class="pacom-btn ${C?"pacom-btn--primary":""}" data-toggle-canvas="1">${C?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${ot.map(h=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${_===h.id}" data-cat="${h.id}">${h.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${_==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${ce==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${te}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${T}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${f?`
            <div class="pacom-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${Ce.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${X.map(h=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${h.id}">${ie("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${h.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${V.map(h=>{const u=le.get(h.id)??[],$=p.has(h.id),ne=u.filter(fe=>J.has(fe.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${h.id}" style="cursor:pointer; justify-content:space-between;" title="${h.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${$?"0deg":"-90deg"}); opacity:0.65;">${ba}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${h.name}</div>
                                <div class="pacom-row-sub">${u.length} 个测点 · ${h.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${ne>0?`<span class="pacom-badge pacom-badge--accent">${ne}</span>`:""}
                          </button>
                          ${$?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${u.map(fe=>{const ke=J.has(fe.id),Te=Ke[fe.colorIdx%Ke.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${ke?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${fe.id}" data-ts-point="${fe.id}" ${ke?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${Te};"></span>
                                            <span style="color:var(--pacom-text-primary);">${fe.label}</span>
                                          </span>
                                          <span class="pacom-row-sub">${fe.unit}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="pacom-subnav-main" style="padding:2px 4px 24px;">
                ${Ae?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${Ae}</span></div>`:""}
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${ie("clock",12)} 排程(S) · ${ie("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${R}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${O==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${O==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${O==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${x==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${x==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${Sa(Ce,x,R)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="pacom-kpi-strip" role="region" aria-label="核心统计指标">
                ${de.kpis.map(h=>{const u=ha(h.value,h.unit);return`
                      <div class="pacom-kpi-cell" title="${u.title}">
                        <span class="pacom-kpi-label">${h.label}</span>
                        <div class="pacom-kpi-value">
                          <span>${u.value}</span>
                          ${u.unit?`<span class="pacom-kpi-unit">${u.unit}</span>`:""}
                        </div>
                        <span class="pacom-kpi-delta">${h.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="pacom-section">
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">${I?.label??"趋势"}趋势（${de.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${A.label} · 更新于 ${de.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${me}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
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
                      ${je.length>0?`关注：${je.map(h=>h.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${I?.desc??"空间运行洞察"} · ${Fe.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${ae==="chart"?$a(de,me):`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${de.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${de.series.map(h=>{const u=typeof h.baseline=="number"&&h.value>h.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${h.label}</strong></td>
                                    <td>${h.value.toLocaleString("en-US")}</td>
                                    <td>${h.baseline!==void 0?h.baseline.toLocaleString("en-US"):"-"}</td>
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
                    <span class="pacom-row-sub">${de.zoneBreakdown.length} 个功能区</span>
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
                          ${de.zoneBreakdown.map(h=>{const u=Math.max(8,Math.round(h.value/De*100));return`
                                <tr>
                                  <td style="font-weight:500;">${h.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${u}%; height:100%; border-radius:999px; background:${h.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${h.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${h.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${h.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${h.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="pacom-section-title">${C?"E7F 空间对照预览":c==="energy"&&pe==="load"?"峰谷负荷分布（Load Profile）":Fe.title}</h2>
                    ${!C&&c==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${pe==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${pe==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${C?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${C?'<img class="pacom-plan-img" src="./media/floors/e/07F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
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
                        ${(c==="energy"&&pe==="load"?fa:Fe.items).map(h=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${h.name}</span>
                                <span class="pacom-row-sub">${h.detail} · <strong style="color:var(--pacom-text-primary);">${h.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,h.pct)}%; height:100%; border-radius:999px; background:${h.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,tt(t,{onToggle:()=>{M=!M,re(),M&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:h=>{Y=h,re();const u=t.querySelector("[data-global-space-search]");u&&(u.focus(),u.setSelectionRange(h.length,h.length))},onPick:h=>{q=h,$e=h.level==="all-projects"||h.level==="project"?b.projectId:h.level==="building"?b.buildingId:b.floorId,M=!1,re()}}),t.querySelectorAll("[data-cat]").forEach(h=>{h.addEventListener("click",()=>{_=h.dataset.cat??"energy",Ae="",_==="timeseries"?re():ve()})}),t.querySelector("[data-range-select]")?.addEventListener("change",h=>{ce=h.currentTarget.value??"7d",ve()}),t.querySelector("[data-custom-start]")?.addEventListener("change",h=>{te=h.currentTarget.value}),t.querySelector("[data-custom-end]")?.addEventListener("change",h=>{T=h.currentTarget.value}),t.querySelectorAll("[data-chart-mode]").forEach(h=>{h.addEventListener("click",()=>{ae=h.dataset.chartMode??"chart",re()})}),t.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{me=!me,re()}),t.querySelectorAll("[data-energy-right]").forEach(h=>{h.addEventListener("click",()=>{pe=h.dataset.energyRight??"breakdown",re()})}),t.querySelector("[data-export-csv]")?.addEventListener("click",()=>{f?ka(Ce):Ia(de)}),t.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{C=!C,re()}),t.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),t.querySelectorAll("[data-ts-expand]").forEach(h=>{h.addEventListener("click",()=>{const u=h.dataset.tsExpand;u&&(p.has(u)?p.delete(u):p.add(u),re())})}),t.querySelectorAll("[data-ts-point]").forEach(h=>{h.addEventListener("change",()=>{const u=h.dataset.tsPoint;u&&(h.checked?J.add(u):J.delete(u),Ae="",re())})}),t.querySelectorAll("[data-ts-mode]").forEach(h=>{h.addEventListener("click",()=>{x=h.dataset.tsMode??"grouped",re()})}),t.querySelector("[data-ts-interval]")?.addEventListener("change",h=>{O=h.currentTarget.value??"1h",re()}),t.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{R=!R,re()}),t.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const u=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(J).join(","))}&mode=${x}&interval=${O}`,$=`${window.location.origin}${window.location.pathname}${u}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText($).catch(()=>{}),window.history.replaceState(null,"",u),Ae=`已复制分享链接（含 ${J.size} 个测点、${x==="grouped"?"按单位分组":"单图叠合"}、${O} 粒度）。`,re()}),t.querySelectorAll("[data-load-fav]").forEach(h=>{h.addEventListener("click",()=>{const u=X.find($=>$.id===h.dataset.loadFav);u&&(J.clear(),u.pointIds.forEach($=>{J.add($);const ne=$.split(":")[0];ne&&p.add(ne)}),x=u.mode,O=u.interval,Ae=`已加载收藏视图「${u.name}」。`,re())})}),t.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(J.size===0)return;const h=`自定义对比 #${X.length+1}（${J.size} 测点）`;X.push({id:`fav-${Date.now()}`,name:h,pointIds:Array.from(J),mode:x,interval:O}),Ae=`已保存当前时序配置为「${h}」。`,re()})}await ve()}const ja={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},La={frozen:"已冻结",draft:"草稿",delivered:"已交付"},vt={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},ft=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],Lt=[{id:"doc-hvac-7f",floorId:b.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:b.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:b.floorId,name:"E7F_协议点位与蓝牙Mesh映射台账.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:b.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],Aa={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},At=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function m(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function lt(t){const e=t.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面")||e.includes("屋顶")||e.includes("天面"))return 999;const n=e.match(/(-?\d+)/);if(!n)return 0;const a=Number(n[1]);return e.startsWith("B")||e.includes("地下")||e.includes("负")?-Math.abs(a):a}const Ft={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function Qe(t){const e=t.trim(),n=e.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test(n)||/屋面|屋顶|天面/.test(e))return"RF";const a=n.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(a)return`B${Number(a[1])}`;const i=e.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(i){const F=/^\d+$/.test(i[1])?Number(i[1]):Ft[i[1]];if(F)return`B${F}`}if(/首层|一层/.test(e))return"1F";const r=e.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(r){const F=/^\d+$/.test(r[1])?Number(r[1]):Ft[r[1]];if(F)return`${F}F`}const E=n.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return E?`${Number(E[1])}F`:null}function it(t){return new Promise((e,n)=>{const a=new FileReader;a.onload=()=>typeof a.result=="string"?e(a.result):n(new Error("无法读取图片内容")),a.onerror=()=>n(new Error(`读取文件「${t.name}」失败`)),a.readAsDataURL(t)})}function Fa(t){return t.category==="gateway"?t.name.includes("蓝牙")?"蓝牙适配器":"主控网关":t.category==="lighting"?t.name.includes("702")?"702 照明":t.name.slice(0,6):t.category==="hvac"?t.name.includes("VAV")?"VAV-02":t.name.includes("FCU")?"FCU-01":t.name.slice(0,6):t.category==="sensor"?"环境传感":t.name.slice(0,6)}function Ca(t,e){const n=t.status!=="connected",a=e.filter(i=>i.hardwareBinding?.protocol===t.protocol);return a.length>0?a.map(i=>{const r=i.connectivity==="offline"||n;return{pointName:i.category==="hvac"?"送风温度 / 阀门开度":i.category==="lighting"?"回路开关 / 亮度反馈":i.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:i.name,value:r?"无上报":i.category==="hvac"?"23.4°C · 62%":i.category==="lighting"?"开启 · 80%":i.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:r?"46 分钟前":"12 秒前",quality:r?i.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${t.protocol.toUpperCase()} 采集通道汇总点`,deviceName:t.name,value:n?"采样延迟":"正常上报",interval:"60s",lastSeen:n?"38 分钟前":"9 秒前",quality:n?"delayed":"online"}]}async function za(t,e,n){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),i=a.get("sec");let r=i==="floors"||i==="projects"?"project_config":i==="floorplan"||i==="devices"?"floorplan":i==="inventory"?"ledger":i==="connections"?"connections":"overview",E=i==="floors"?"floor_zones":"project_building",F="",N="all",W=et(),_=!1,ce="",te="device",T="all",q="",M=!1,Y=!1,$e="mesh",ae=1,me=0,pe=0,C=await e.getSpatialTree(),xe=[],be=[],ye=[];const V={...Aa},le=[];let v=W.level==="all-projects"?C.projects[0]?.id??b.projectId:W.projectId,x=W.level==="building"||W.level==="floor"?W.buildingId:C.buildings.find(w=>w.projectId===v)?.id??C.buildings[0]?.id??b.buildingId,O=W.level==="floor"?W.floorId:C.floors.find(w=>w.buildingId===x&&w.id===b.floorId)?.id??C.floors.find(w=>w.buildingId===x)?.id??b.floorId,R="all",ue=a.get("new")==="project",J=!1,p=null,X=!1,Ae=!1,ve="zones",re=!1,f=[],c=null;const I=[];let A=null,de=null,je=new Set,Fe=null,De=!1,Ce=!1,h=!1,u=!1,$=!1,ne=null,fe=null,ke=null,Te=3,Re=!1,Ue=[],Me=null,we="",se="";const Ze=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),k=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],Q=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:b.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:b.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:b.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:b.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],Z=new Map;function y(){return C}function S(){return C.floors}function P(w){return[...C.floors.filter(L=>L.buildingId===w)].sort((L,G)=>lt(G.name)-lt(L.name))}function oe(){return C.zones}function B(w){return[...w===b.floorId?xe:[],...le.filter(G=>G.floorId===w)]}function Se(w){return w?oe().find(L=>L.id===w)?.name.replace(/^7F\s*/,"")??w:"未分配功能区"}function he(w){const L=C.buildings.find(U=>U.id===w);if(!L)return;v=L.projectId,x=L.id;const G=P(L.id);G.some(U=>U.id===O)||(O=G.find(U=>U.id===b.floorId)?.id??G[0]?.id??""),W=Ge(O?{level:"floor",projectId:L.projectId,buildingId:L.id,floorId:O}:{level:"building",projectId:L.projectId,buildingId:L.id}),Fe=null,Y=!1,Ce=!1,ae=1,me=0,pe=0}function ge(w){O=w;const L=S().find(G=>G.id===w);if(L){x=L.buildingId;const G=C.buildings.find(U=>U.id===L.buildingId);G&&(v=G.projectId),W=Ge({level:"floor",projectId:v,buildingId:L.buildingId,floorId:L.id})}Fe=null,Y=!1,Ce=!1,ae=1,me=0,pe=0}async function Ee(){se="";const[w,L,G,U]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(b.floorId).catch(()=>[]),e.listConnections(v),e.listDeliveryBatches(b.floorId)]);if(C=w,xe=L,be=G,ye=U,C.projects.length===0)v="",x="",O="";else{C.projects.some(o=>o.id===v)||(v=C.projects[0].id);const l=C.buildings.filter(o=>o.projectId===v);l.some(o=>o.id===x)||(x=l[0]?.id??"");const s=x?P(x):[];s.some(o=>o.id===O)||(O=s.find(o=>o.id===b.floorId)?.id??s[0]?.id??"")}const j=B(O);Fe&&!j.some(l=>l.id===Fe)&&(Fe=null,Y=!1),De=j.find(l=>l.id===Fe)?.physicalInstalled??!1,D()}function He(){const w=t.querySelector('[data-role="dep-viewport"]');w&&(w.style.transform=`translate(${me}px, ${pe}px) scale(${ae})`);const L=t.querySelector('[data-role="dep-zoom-label"]');L&&(L.textContent=`${Math.round(ae*100)}%`)}function Ye(w){se="",w.connectivity==="offline"?se=`单机回读自检未通过（FAIL）：「${w.name}」当前离线，请核查网关链路或中继覆盖。`:we=`单机回读自检通过（PASS）：「${w.name}」指令下发与状态回读一致，已安全复位。`,D()}function dt(){se="";const w=B(O),L=w.filter(z=>z.connectivity==="offline"),G=w.length-L.length,U=new Date;Me={ranAt:`${String(U.getHours()).padStart(2,"0")}:${String(U.getMinutes()).padStart(2,"0")}:${String(U.getSeconds()).padStart(2,"0")}`,total:w.length,passed:G,failed:L.length,failedNames:L.map(z=>z.name)},L.length>0?se=`全层批量自检完成：${G}/${w.length} 台通过，${L.length} 台异常（${L.map(z=>z.name).join("、")}）。`:we=`全层批量自检全部通过（${G}/${w.length}），设备已自动安全复位。`,D()}function _t(){const w=B(O),L=[],G=w.filter(s=>s.connectivity==="offline"),U=w.filter(s=>!s.planPoint),j=w.filter(s=>Ze.get(s.id)?.proxy).length,z=w.filter(s=>Ze.get(s.id)?.relay).length,l=w.length?z/w.length:0;G.length>0?G.forEach(s=>L.push({level:"fail",title:`节点不可达：${s.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:s.id})):L.push({level:"ok",title:"全网节点可达性正常",detail:`${w.length} 台设备均正常响应心跳。`}),j<1?L.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):L.push({level:"ok",title:`代理节点配置合理（${j} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),l>.25&&w.length>=4&&L.push({level:"warn",title:`中继比例偏高（${Math.round(l*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),U.length>0&&L.push({level:"warn",title:`尚有 ${U.length} 台未完成图纸标点`,detail:"请在「图纸标点」中补齐坐标以便施工定位。"}),Ue=L,we=`已完成蓝牙 Mesh 网络体检（检测 ${w.length} 台节点，发现 ${L.filter(s=>s.level!=="ok").length} 项关注）。`,D()}function Bt(){const w=B(O),L=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...w.map(z=>[z.name,z.category,Se(z.logicalZoneId),z.planPoint?`${Math.round(z.planPoint.x*100)}%/${Math.round(z.planPoint.y*100)}%`:"未标点",z.hardwareBinding?`${z.hardwareBinding.protocol} ${z.hardwareBinding.networkAddress}`:"未绑定",z.physicalInstalled?"已复核":"待复核",z.connectivity==="online"?"在线":"离线"].join(","))],G=new Blob([`\uFEFF${L.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),U=URL.createObjectURL(G),j=document.createElement("a");j.href=U,j.download="pacom-deployment-inventory.csv",j.click(),URL.revokeObjectURL(U)}const xt={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。"},project_config:{title:"项目配置",subtitle:"维护项目、楼宇、楼层平面图与功能区结构。"},floorplan:{title:"设备标记",subtitle:"在 2D 平面底图上完成设备标记、回路灯点与硬件复核。"},ledger:{title:"设备列表",subtitle:"核查全层四态设备清单，统一下发人感/光感参数并执行单机或全层自检。"},groups:{title:"设备分组",subtitle:"统一管理端侧蓝牙 Mesh 自治联动组与云端业务分组。"},network_topo:{title:"设备网络",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。"},connections:{title:"系统接入",subtitle:"管理边缘网关服务与暖通、电表、环境等异构子系统通道及传感器采集质量。"}};function Ut(){const w=(L,G,U)=>`
      <button type="button" class="pacom-unified-item" aria-current="${r===L}" data-dep-nav="${L}">
        ${ie(G,16)}
        <span>${U}</span>
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${w("overview","layout-dashboard","部署总览")}
          ${w("project_config","layers","项目配置")}
          ${w("floorplan","map-pin","设备标记")}
          ${w("ledger","list","设备列表")}
          ${w("groups","folder-kanban","设备分组")}
          ${w("network_topo","waypoints","设备网络")}
          ${w("connections","plug","系统接入")}
        </div>
      </aside>
    `}function Vt(w){return r==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出台账</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${w?"":"disabled"}>+ 交付冻结</button>
      `:r==="floorplan"?'<button type="button" class="pacom-btn" data-export-inv="1">导出施工标点表</button>':r==="ledger"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':r==="groups"?`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1" ${w?"":"disabled"}>${$?"收起表单":"+ 新建分组"}</button>`:r==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${w?"":"disabled"}>${Re?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:r==="connections"?`
        <button type="button" class="pacom-btn" data-edge-restart="service" ${w?"":"disabled"}>重启边缘服务</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-conn="1" ${w?"":"disabled"}>${u?"收起向导":"+ 新增接入通道"}</button>
      `:`<span class="pacom-badge ${w?"pacom-badge--online":"pacom-badge--warning"}">${w?"可编辑":"只读"}</span>`}function Zt(){if(C.projects.length===0)return`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${ie("layers",20)}</div>
          <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
          <span class="pacom-row-sub" style="max-width:420px;">完成项目与楼宇建档后，这里将自动汇总各楼层的底图、设备标记、在线入网与交付核验进度。</span>
          <div class="dep-empty-steps">
            <span>1. 创建项目</span>
            <span>→</span>
            <span>2. 添加楼宇与楼层</span>
            <span>→</span>
            <span>3. 上传平面图</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-proj="1" ${n.scope.canEditDeployment?"":"disabled"}>+ 创建第一个项目</button>
        </div>`;const w=x?P(x):[],L=w.filter(s=>!!s.plan).length,G=w.flatMap(s=>B(s.id)),U=G.filter(s=>!!s.planPoint).length,j=G.filter(s=>s.connectivity==="online").length,z=G.filter(s=>s.physicalInstalled).length,l=w.filter(s=>B(s.id).length>0&&!Re).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" data-proj-sub="floor_zones" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${L===w.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 空间与底图</span>
          <div class="pacom-kpi-value">${L}<span class="pacom-kpi-unit">/ ${w.length} 层</span></div>
          <span class="pacom-kpi-delta">${L===w.length?"全部底图就绪":`尚缺 ${w.length-L} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${U===G.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${U}<span class="pacom-kpi-unit">/ ${G.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${k.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${j===G.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${j}<span class="pacom-kpi-unit">/ ${G.length} 台</span></div>
          <span class="pacom-kpi-delta">${G.length-j>0?`${G.length-j} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${Re?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${l}<span class="pacom-kpi-unit">/ ${w.length} 层</span></div>
          <span class="pacom-kpi-delta">${Re?"有变更待下发 →":`基线 v${Te}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="ledger" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${z===G.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${z}<span class="pacom-kpi-unit">/ ${G.length} 台</span></div>
          <span class="pacom-kpi-delta">${z===G.length?"可交付冻结":`待复核 ${G.length-z} 台 →`}</span>
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
                ${w.map(s=>{const o=B(s.id),d=oe().filter(ze=>ze.floorId===s.id),g=o.filter(ze=>!!ze.planPoint).length,H=o.filter(ze=>ze.connectivity==="online").length,Ie=o.filter(ze=>ze.physicalInstalled).length,ee=!!s.plan,Le=ee&&o.length>0&&g===o.length&&Ie===o.length&&H===o.length&&!Re;return`
                      <tr>
                        <td><strong>${m(s.name)}</strong><div class="pacom-row-sub">${s.areaSqm?`${s.areaSqm} m²`:"待补面积"}</div></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-proj-sub="floor_zones" data-matrix-floor="${m(s.id)}"><span class="pacom-dot ${ee?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${ee?`已传图 · ${d.length} 区`:"待传底图"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="floorplan" data-matrix-floor="${m(s.id)}"><span class="pacom-dot ${o.length>0&&g===o.length?"pacom-dot--online":o.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${o.length>0?`${g}/${o.length}`:"未标点"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${m(s.id)}"><span class="pacom-dot ${o.length>0&&H===o.length?"pacom-dot--online":o.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${o.length>0?`${H}/${o.length}`:"—"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${m(s.id)}"><span class="pacom-dot ${o.length===0?"pacom-dot--offline":Re?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${o.length===0?"—":Re?"待同步":`v${Te}`}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="ledger" data-matrix-floor="${m(s.id)}"><span class="pacom-dot ${o.length>0&&Ie===o.length?"pacom-dot--online":o.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${o.length>0?`${Ie}/${o.length}`:"—"}</span></button></td>
                        <td style="text-align:right;"><span class="pacom-badge ${Le?"pacom-badge--online":o.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${Le?"可验收交付":o.length>0?"实施中":"待配置"}</span></td>
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
          <span class="pacom-row-sub">共 ${ye.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${ye.map(s=>`
                    <tr>
                      <td><div style="font-weight:450;">${m(s.versionTag)}</div><div class="pacom-row-sub"><code>${m(s.id)}</code></div></td>
                      <td><strong>${s.verifiedCount}</strong> / ${s.deviceCount} 台</td>
                      <td><div>${m(s.frozenBy)}</div><div class="pacom-row-sub">${m(s.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${La[s.status]??s.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function pt(w){const L=new Set(P(w.id).map(U=>Qe(U.name)??U.name.toUpperCase())),G=[];for(let U=1;U<=w.aboveFloors;U+=1){const j=`${U}F`;L.has(j)||G.push({kind:"above",level:U,name:j})}for(let U=1;U<=w.belowFloors;U+=1){const j=`B${U}`;L.has(j)||G.push({kind:"below",level:-U,name:j})}return w.hasRoof&&!L.has("RF")&&G.push({kind:"roof",level:99,name:"RF"}),G}async function Ht(w){const L=C.buildings.find(U=>U.id===w);if(!L)return 0;const G=pt(L);for(const U of G)await e.upsertFloor?.({buildingId:L.id,kind:U.kind,level:U.level,name:U.name});return G.length}function Wt(w){if(C.projects.length===0)return`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${ie("layers",20)}</div>
          <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
          <span class="pacom-row-sub" style="max-width:420px;">按「项目 → 楼宇与楼层 → 平面图与功能区」顺序完成空间建档后，即可开展设备标记与运行管理。</span>
          <div class="dep-empty-steps">
            <span>1. 创建项目</span>
            <span>→</span>
            <span>2. 添加楼宇与楼层</span>
            <span>→</span>
            <span>3. 上传平面图</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-proj="1" ${w?"":"disabled"}>+ 创建第一个项目</button>
        </div>`;const L=C.projects.find(j=>j.id===v)??C.projects[0],G=C.buildings.filter(j=>j.projectId===L.id),U=G.reduce((j,z)=>j+P(z.id).reduce((l,s)=>l+B(s.id).length,0),0);return`
      <div style="width:100%; display:flex; flex-direction:column; gap:24px;">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
              <h2 class="pacom-section-title">项目信息</h2>
              <select class="pacom-select" style="height:32px; font-size:13px; min-width:176px;" data-switch-proj-select aria-label="切换项目">
                ${C.projects.map(j=>{const z=C.buildings.filter(l=>l.projectId===j.id).length;return`<option value="${m(j.id)}" ${j.id===L.id?"selected":""}>${m(j.name)}（${z} 栋）</option>`}).join("")}
              </select>
            </div>
            <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-proj="1" ${w?"":"disabled"}>+ 新建项目</button>
          </div>

          <form class="pacom-settings-card" data-save-project="${m(L.id)}">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">项目封面</span>
                <span class="pacom-setting-desc">用于空间总览的园区俯瞰展示</span>
              </div>
              <div class="pacom-setting-control" style="gap:12px;">
                <div style="width:96px; height:60px; border-radius:8px; overflow:hidden; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle); flex-shrink:0;">
                  <img src="${m(L.imageUrl??"./media/gzlab.jpg")}" alt="${m(L.name)}" style="width:100%; height:100%; object-fit:cover; display:block;" />
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>更换封面</span>
                  <input type="file" accept="image/*" data-upload-proj="${m(L.id)}" style="display:none;" ${w?"":"disabled"} />
                </label>
              </div>
            </div>

            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">项目名称与城市</span>
                <span class="pacom-setting-desc">同步展示于全局空间路径与分析报表</span>
              </div>
              <div class="pacom-setting-control">
                <input class="pacom-input" name="pName" value="${m(L.name)}" style="width:220px; height:34px; flex:none;" required ${w?"":"disabled"} />
                <input class="pacom-input" name="pCity" value="${m(L.city??"")}" placeholder="城市" style="width:130px; height:34px; flex:none;" ${w?"":"disabled"} />
              </div>
            </div>

            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">详细地址</span>
                <span class="pacom-setting-desc">用于园区定位与周边气象匹配</span>
              </div>
              <div class="pacom-setting-control">
                <input class="pacom-input" name="pAddr" value="${m(L.address??"")}" placeholder="输入详细街道与门牌号" style="width:358px; height:34px; flex:none;" ${w?"":"disabled"} />
              </div>
            </div>

            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">地理坐标</span>
                <span class="pacom-setting-desc">经度（-180 至 180）与纬度（-90 至 90）</span>
              </div>
              <div class="pacom-setting-control">
                <input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${m(L.location?.lng??"")}" placeholder="经度 113.3824" style="width:175px; height:34px; flex:none;" ${w?"":"disabled"} />
                <input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${m(L.location?.lat??"")}" placeholder="纬度 23.0652" style="width:175px; height:34px; flex:none;" ${w?"":"disabled"} />
              </div>
            </div>

            <div class="pacom-setting-row" style="justify-content:flex-end; padding:12px 0;">
              <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${w?"":"disabled"}>保存更改</button>
            </div>
          </form>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">园区楼宇（${G.length} 栋）</h2>
            <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-bld="1" ${w?"":"disabled"}>+ 新建楼宇</button>
          </div>
          ${G.length===0?`
              <div class="dep-empty-card">
                <div class="dep-empty-icon">${ie("building-2",20)}</div>
                <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${m(L.name)} 暂无楼宇</strong>
                <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
                <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-bld="1" ${w?"":"disabled"}>+ 添加第一栋楼宇</button>
              </div>`:`
              <div class="dep-building-grid">
                ${G.map(j=>{const z=P(j.id),l=z.filter(g=>!!g.plan).length,s=z.length>0?Math.round(l/z.length*100):0,o=pt(j),d=z.length===0?"pacom-badge--neutral":l===z.length?"pacom-badge--online":"pacom-badge--warning";return`
                      <article class="dep-building-card ${x===j.id?"is-active":""}">
                        <div class="dep-building-stage">
                          <img src="${m(j.imageUrl??"./media/building-e.webp")}" alt="${m(j.name)}" />
                        </div>
                        <div class="dep-building-body">
                          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                            <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${m(j.name)}</strong>
                            <span class="pacom-badge ${d}">${z.length===0?"未建层":`${l}/${z.length} 底图`}</span>
                          </div>
                          <div class="pacom-row-sub">地上 ${j.aboveFloors} 层${j.belowFloors>0?` · 地下 ${j.belowFloors} 层`:""}${j.hasRoof?" · RF":""}${j.areaSqm?` · ${j.areaSqm} m²`:""}</div>
                          <div class="pacom-progress-track">
                            <div class="pacom-progress-fill" style="width:${s}%; background:${s===100?"var(--pacom-status-online)":"var(--pacom-accent-solid)"};"></div>
                          </div>
                          ${o.length>0?`<div style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:12px; color:var(--pacom-text-secondary);">
                                   <span>尚缺 ${o.length} 个楼层</span>
                                   <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="height:22px; padding:0 6px; font-size:12px;" data-fill-missing-floors="${m(j.id)}" ${w?"":"disabled"}>一键补齐</button>
                                 </div>`:""}
                        </div>
                        <div class="dep-building-foot">
                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${m(j.id)}" ${w?"":"disabled"}>编辑参数</button>
                          <button type="button" class="pacom-btn pacom-btn--sm" data-open-building-floors="${m(j.id)}">楼层与图纸 →</button>
                        </div>
                      </article>`}).join("")}
              </div>`}
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">危险操作</h2>
          </div>
          <div class="dep-danger-card">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">删除当前项目「${m(L.name)}」</span>
                <span class="pacom-setting-desc">${U>0?`当前项目包含 ${U} 台运行中设备，请先解绑清理后再执行删除。`:"将永久删除该项目及其下全部楼宇、楼层与功能区，此操作不可撤销。"}</span>
              </div>
              <div class="pacom-setting-control">
                <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${m(L.id)}" ${!w||U>0?"disabled":""}>删除项目</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    `}function Gt(w){if(C.projects.length===0)return`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${ie("layers",20)}</div>
          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">请先创建项目</strong>
          <span class="pacom-row-sub">创建项目并添加楼宇后，即可在此管理楼层平面图与功能区。</span>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-proj="1">前往创建项目 →</button>
        </div>`;const L=C.projects.find(ee=>ee.id===v)??C.projects[0],G=C.buildings.filter(ee=>ee.projectId===L.id);if(G.length===0)return`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${ie("building-2",20)}</div>
          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${m(L.name)} 尚未添加楼宇</strong>
          <span class="pacom-row-sub">请先在「项目与楼宇」中添加楼宇，再配置各层平面图与功能区。</span>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-bld="1">前往添加楼宇 →</button>
        </div>`;const U=G.find(ee=>ee.id===x)??G[0],j=P(U.id),z=j.filter(ee=>!ee.plan).length,l=j.filter(ee=>oe().filter(Le=>Le.floorId===ee.id).length===0).length,s=j.filter(ee=>R==="missing_plan"?!ee.plan:R==="missing_zone"?oe().filter(Le=>Le.floorId===ee.id).length===0:!0),o=s.find(ee=>ee.id===O)??j.find(ee=>ee.id===O)??s[0]??null,d=o?oe().filter(ee=>ee.floorId===o.id):[],g=o?[...Lt,...I].filter(ee=>ee.floorId===o.id):[],H=o?B(o.id).length:0,Ie=o?j.filter(ee=>ee.id!==o.id):[];return`
      <div class="dep-floor-workbench" style="width:100%;">
        <div class="dep-floor-list-card">
          <div class="dep-floor-list-head">
            <div style="display:flex; align-items:center; gap:6px;">
              <select class="pacom-select" style="flex:1; min-width:0; height:30px; font-size:13px;" data-switch-bld-select aria-label="切换楼宇">
                ${G.map(ee=>`<option value="${m(ee.id)}" ${ee.id===U.id?"selected":""}>${m(ee.name)}（${P(ee.id).length} 层）</option>`).join("")}
              </select>
              <button type="button" class="pacom-square-icon-btn" style="width:30px; height:30px;" data-toggle-new-floor="1" title="新增楼层" aria-label="新增楼层" ${w?"":"disabled"}>${ie("plus",14)}</button>
            </div>
            <div class="dep-filter-seg" role="group" aria-label="楼层筛选">
              <button type="button" class="dep-filter-btn" aria-pressed="${R==="all"}" data-floor-list-filter="all">全部 ${j.length}</button>
              <button type="button" class="dep-filter-btn" aria-pressed="${R==="missing_plan"}" data-floor-list-filter="missing_plan">缺图 ${z}</button>
              <button type="button" class="dep-filter-btn" aria-pressed="${R==="missing_zone"}" data-floor-list-filter="missing_zone">缺区 ${l}</button>
            </div>
          </div>
          <div class="dep-floor-list-scroll">
            ${s.length===0?`<div class="pacom-row-sub" style="padding:18px; text-align:center;">${j.length===0?"暂无楼层":"无匹配楼层"}</div>`:s.map(ee=>{const Le=oe().filter(ze=>ze.floorId===ee.id).length;return`
                        <button type="button" class="dep-floor-row ${o?.id===ee.id?"is-active":""}" data-pick-floor-pill="${m(ee.id)}">
                          <span style="display:inline-flex; align-items:center; gap:7px; min-width:0;">
                            <span class="pacom-dot ${ee.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                            <span>${m(ee.name)}</span>
                          </span>
                          <span class="pacom-row-sub" style="font-size:12px;">${ee.plan?`${Le} 区`:"待传图"}</span>
                        </button>`}).join("")}
          </div>
        </div>

        <div class="dep-floor-detail">
          ${j.length===0?`
              <div class="dep-empty-card">
                <div class="dep-empty-icon">${ie("layers",20)}</div>
                <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${m(U.name)} 暂无楼层</strong>
                <span class="pacom-row-sub">可按楼宇结构（地上 ${U.aboveFloors} 层${U.belowFloors>0?`、地下 ${U.belowFloors} 层`:""}${U.hasRoof?"、含 RF":""}）一键生成全部楼层，或手动新增。</span>
                <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                  <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${m(U.id)}" ${w?"":"disabled"}>一键生成全部楼层</button>
                  <button type="button" class="pacom-btn" data-toggle-new-floor="1" ${w?"":"disabled"}>+ 手动新增楼层</button>
                </div>
              </div>`:o?`
                <div class="pacom-settings-card" style="padding:12px 20px;">
                  <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                    <form data-save-floor="${m(o.id)}" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                      <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${m(U.name)}</strong>
                      <input class="pacom-input" name="fName" value="${m(o.name)}" aria-label="楼层名称" style="width:78px; height:30px; flex:none;" required ${w?"":"disabled"} />
                      <input class="pacom-input" name="fArea" type="number" step="0.1" value="${m(o.areaSqm??"")}" placeholder="面积 m²" aria-label="建筑面积" style="width:112px; height:30px; flex:none;" ${w?"":"disabled"} />
                      <button type="submit" class="pacom-btn pacom-btn--sm" ${w?"":"disabled"}>保存</button>
                      <span class="pacom-badge ${o.plan?"pacom-badge--online":"pacom-badge--warning"}">${o.plan?"底图就绪":"待上传"}</span>
                    </form>
                    <div style="display:flex; align-items:center; gap:8px;">
                      <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-delete-floor="${m(o.id)}" ${!w||H>0?`disabled title="${H>0?`已关联 ${H} 台设备，请先移除后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                      <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-dep-nav="floorplan">进入设备标记 →</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-settings-card" style="padding:14px;">
                  <div class="dep-plan-preview-box" data-single-floor-drop="${m(o.id)}">
                    <div class="dep-plan-toolbar">
                      ${o.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${m(U.name)} ${m(o.name)} 平面底图" data-lb-src="${m(o.plan.imageUrl)}">查看大图</button>`:""}
                      <label class="dep-plan-tool-btn" style="cursor:pointer;">
                        <span>${o.plan?"替换底图":"上传底图"}</span>
                        <input type="file" accept="image/*" data-upload-floor="${m(o.id)}" style="display:none;" ${w?"":"disabled"} />
                      </label>
                      <button type="button" class="dep-plan-tool-btn" data-toggle-batch-panel="1" ${w?"":"disabled"}>批量导入（${j.length-z}/${j.length}）</button>
                      ${o.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${m(o.id)}" ${w?"":"disabled"}>清空</button>`:""}
                    </div>
                    ${o.plan?`<img src="${m(o.plan.imageUrl)}" alt="${m(o.name)} 平面图" style="width:100%; max-height:360px; object-fit:contain; display:block;" />`:`<div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:28px; text-align:center;">
                             <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽本层 2D 平面图到此处</strong>
                             <span class="pacom-row-sub">支持透明 WebP / PNG / JPG，或点击右上角「上传底图 / 批量导入」</span>
                           </div>`}
                  </div>
                </div>

                <div class="pacom-settings-card">
                  <div class="pacom-setting-row" style="padding:12px 0; justify-content:space-between; gap:12px;">
                    <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
                      <button type="button" class="pacom-tab" role="tab" aria-selected="${ve==="zones"}" data-floor-detail-tab="zones">功能区（${d.length}）</button>
                      <button type="button" class="pacom-tab" role="tab" aria-selected="${ve==="docs"}" data-floor-detail-tab="docs">竣工图纸与手册（${g.length}）</button>
                    </div>
                    ${ve==="zones"?d.length>0&&Ie.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-toggle-copy-zones="${m(o.id)}" ${w?"":"disabled"}>复用至其他楼层…</button>`:"":`<label class="pacom-btn pacom-btn--sm" style="cursor:pointer;"><span>+ 关联文件</span><input type="file" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${m(o.id)}" style="display:none;" ${w?"":"disabled"} /></label>`}
                  </div>
                  ${ve==="zones"?`
                        ${d.length===0?`
                            <div class="pacom-setting-row" style="flex-direction:column; align-items:flex-start; gap:8px;">
                              <span class="pacom-row-sub">本层暂未划分功能区，可直接套用常用模板或手动添加：</span>
                              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                ${At.map(ee=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${m(ee.key)}" data-tpl-floor="${m(o.id)}" ${w?"":"disabled"}>+ ${m(ee.label)}</button>`).join("")}
                              </div>
                            </div>`:d.map(ee=>A===ee.id?`
                                      <form class="pacom-setting-row" style="gap:8px; justify-content:flex-start;" data-save-edit-zone="${m(ee.id)}" data-zone-floor="${m(o.id)}">
                                        <input class="pacom-input" name="zName" value="${m(ee.name)}" style="width:260px; flex:none;" required />
                                        <select class="pacom-select" name="zCat" style="width:130px;">
                                          ${Object.keys(vt).map(Le=>`<option value="${Le}" ${ee.category===Le?"selected":""}>${vt[Le]}</option>`).join("")}
                                        </select>
                                        <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                      </form>`:`
                                      <div class="pacom-setting-row" style="padding:11px 0;">
                                        <div class="pacom-setting-meta">
                                          <span class="pacom-setting-title">${m(ee.name)} <span class="pacom-badge pacom-badge--neutral">${m(vt[ee.category]??ee.category)}</span></span>
                                        </div>
                                        <div class="pacom-setting-control">
                                          <span class="pacom-row-sub">${B(o.id).filter(Le=>Le.logicalZoneId===ee.id).length} 台设备</span>
                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${m(ee.id)}" ${w?"":"disabled"}>编辑</button>
                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${m(ee.id)}" ${w?"":"disabled"}>删除</button>
                                        </div>
                                      </div>`).join("")}
                        <form class="pacom-setting-row" style="gap:8px; justify-content:flex-start;" data-add-zone="${m(o.id)}">
                          <input class="pacom-input" name="zoneName" placeholder="新功能区名称（如：${m(o.name)} 东侧实验区）" style="width:280px; flex:none;" required ${w?"":"disabled"} />
                          <select class="pacom-select" name="zoneCat" style="width:130px;" ${w?"":"disabled"}>
                            <option value="lab">实验区</option>
                            <option value="office">办公区</option>
                            <option value="meeting">会议室</option>
                            <option value="corridor">走廊/公区</option>
                            <option value="utility">机房/后勤</option>
                            <option value="outdoor">露台/活动区</option>
                          </select>
                          <button type="submit" class="pacom-btn pacom-btn--sm" ${w?"":"disabled"}>+ 添加功能区</button>
                        </form>`:g.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':g.map(ee=>`
                              <div class="pacom-setting-row" style="padding:11px 0;">
                                <div class="pacom-setting-meta">
                                  <span class="pacom-setting-title">${m(ee.name)} <span class="pacom-badge pacom-badge--neutral">${m(ee.category)}</span></span>
                                  <span class="pacom-row-sub">${m(ee.boundScope)} · ${m(ee.size)} · ${m(ee.updatedAt)}</span>
                                </div>
                                <div class="pacom-setting-control">
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${m(ee.id)}">查阅</button>
                                </div>
                              </div>`).join("")}
                </div>`:'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前筛选无匹配楼层</div>'}
        </div>
      </div>
    `}function Kt(w){const L=[],G=C.projects.find(z=>z.id===v)??C.projects[0]??null,U=C.buildings.find(z=>z.id===x)??(G?C.buildings.find(z=>z.projectId===G.id):null)??null;ue&&L.push(`
        <div class="dep-modal-scrim" data-modal-scrim="new-proj" role="dialog" aria-modal="true" aria-label="新建项目">
          <form class="dep-modal-card" data-create-project="1">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建项目</strong>
              <button type="button" class="pacom-drawer-close" data-toggle-new-proj="1" aria-label="关闭">${ie("x",16)}</button>
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
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-proj="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建项目</button>
              </div>
            </div>
          </form>
        </div>`),J&&G&&L.push(`
        <div class="dep-modal-scrim" data-modal-scrim="new-bld" role="dialog" aria-modal="true" aria-label="新建楼宇">
          <form class="dep-modal-card" data-create-bld="${m(G.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建楼宇（${m(G.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-toggle-new-bld="1" aria-label="关闭">${ie("x",16)}</button>
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
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-bld="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建楼宇</button>
              </div>
            </div>
          </form>
        </div>`);const j=p?C.buildings.find(z=>z.id===p)??null:null;if(j){const z=P(j.id),l=z.reduce((o,d)=>o+B(d.id).length,0),s=pt(j);L.push(`
        <div class="dep-modal-scrim" data-modal-scrim="edit-bld" role="dialog" aria-modal="true" aria-label="编辑楼宇">
          <form class="dep-modal-card" data-save-building="${m(j.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑楼宇：${m(j.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-edit-building="1" aria-label="关闭">${ie("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${m(j.imageUrl??"./media/building-e.webp")}" alt="${m(j.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:6px; background:#fff; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">楼宇外观 / 白模图</div>
                  <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>替换图片</span>
                  <input type="file" accept="image/*" data-upload-bld="${m(j.id)}" style="display:none;" ${w?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${m(j.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${m(j.areaSqm??"")}" placeholder="选填" /></label>
                <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${j.aboveFloors}" /></label>
                <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${j.belowFloors}" /></label>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                <label style="display:inline-flex; align-items:center; gap:6px; font-size:13px;"><input type="checkbox" name="bRoof" ${j.hasRoof?"checked":""} />含屋面层 (RF)</label>
                ${s.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${m(j.id)}">一键补齐缺失 ${s.length} 层</button>`:`<span class="pacom-row-sub">已配置 ${z.length} 个楼层</span>`}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${m(j.id)}" ${!w||l>0?`disabled title="${l>0?"包含运行中设备，请先解绑后再删除":"只读"}"`:""}>删除楼宇</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-edit-building="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${w?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}if(X&&U&&L.push(`
        <div class="dep-modal-scrim" data-modal-scrim="new-floor" role="dialog" aria-modal="true" aria-label="新增楼层">
          <form class="dep-modal-card" data-create-floor="${m(U.id)}" style="width:min(420px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增楼层（${m(U.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-toggle-new-floor="1" aria-label="关闭">${ie("x",16)}</button>
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
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-new-floor="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">确认新增</button>
              </div>
            </div>
          </form>
        </div>`),Ae&&U){const z=P(U.id),l=f.filter(s=>!!s.matchedFloorId).length;L.push(`
        <div class="dep-modal-scrim" data-modal-scrim="batch-upload" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
          <div class="dep-modal-card dep-modal-card--wide">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">批量导入 ${m(U.name)} 平面底图</strong>
              <button type="button" class="pacom-drawer-close" data-toggle-batch-panel="1" aria-label="关闭">${ie("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-upload-drop" data-batch-dropzone="${m(U.id)}" style="padding:20px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${re?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
                <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
                <span class="pacom-row-sub">自动识别 01F、首层、屋面、RF、B1 等中英文文件名，支持手动调整对应楼层</span>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; margin-top:4px;">
                  <span>选择多张图片</span>
                  <input type="file" accept="image/*" multiple data-batch-upload-floors="${m(U.id)}" style="display:none;" ${w?"":"disabled"} />
                </label>
              </div>
              ${f.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                      <div class="pacom-row-sub">已选 ${f.length} 张图片，已匹配 ${l} 层：</div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:6px; max-height:220px; overflow-y:auto;">
                        ${f.map(s=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${m(s.file.name)}">${m(s.file.name)}</span>
                              <select class="pacom-select" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${m(s.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${z.map(o=>`<option value="${m(o.id)}" ${s.matchedFloorId===o.id?"selected":""}>${m(o.name)}</option>`).join("")}
                              </select>
                            </div>`).join("")}
                      </div>
                    </div>`:""}
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-batch-upload="1" ${f.length===0?"disabled":""}>清空已选</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-batch-panel="1">关闭</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-batch-upload="1" ${l===0?"disabled":""}>确认导入（${l} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(de&&U){const z=S().find(s=>s.id===de),l=P(U.id).filter(s=>s.id!==de);z&&l.length>0&&L.push(`
          <div class="dep-modal-scrim" data-modal-scrim="copy-zones" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
            <div class="dep-modal-card">
              <div class="dep-modal-head">
                <strong style="font-size:15px; font-weight:500;">复用 ${m(z.name)} 功能区至其他楼层</strong>
                <button type="button" class="pacom-drawer-close" data-toggle-copy-zones="${m(z.id)}" aria-label="关闭">${ie("x",16)}</button>
              </div>
              <div class="dep-modal-body">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <span class="pacom-row-sub">勾选目标楼层（已选 ${je.size} 层）</span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                  </div>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${l.map(s=>{const o=je.has(s.id),d=oe().filter(g=>g.floorId===s.id).length;return`
                        <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${o}">
                          <input type="checkbox" data-copy-target-floor="${m(s.id)}" ${o?"checked":""} style="margin:0;" />
                          <span>${m(s.name)}${d>0?` (${d}区)`:""}</span>
                        </label>`}).join("")}
                </div>
              </div>
              <div class="dep-modal-foot">
                <span></span>
                <div style="display:flex; gap:8px;">
                  <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-copy-zones="${m(z.id)}">取消</button>
                  <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${m(z.id)}" ${je.size===0?"disabled":""}>确认复制（${je.size} 层）</button>
                </div>
              </div>
            </div>
          </div>`)}return L.join("")}function Yt(w){if(C.projects.length===0)return`
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div class="dep-empty-card" style="max-width:480px; width:100%; background:var(--pacom-surface-card);">
            <div class="dep-empty-icon">${ie("map-pin",20)}</div>
            <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">请先创建项目并上传楼层底图</strong>
            <span class="pacom-row-sub">完成项目、楼宇与 2D 平面底图配置后，即可在此开展设备标点与硬件绑定。</span>
            <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-proj="1" ${w?"":"disabled"}>+ 创建第一个项目</button>
          </div>
        </main>`;const L=x?P(x):[],G=L.find(g=>g.id===O)??L[0],U=B(O),j=oe().filter(g=>g.floorId===O),z=Y?U.find(g=>g.id===Fe)??null:null,l=z?Ze.get(z.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${O.slice(-4)}`}:null,s=z?k.filter(g=>g.deviceId===z.id):[],o=q.trim().toLowerCase(),d=U.filter(g=>!(T==="unverified"&&g.physicalInstalled||T==="unplaced"&&g.planPoint||o&&!`${g.name} ${Se(g.logicalZoneId)}`.toLowerCase().includes(o)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${ie("search",16)}
            <input class="pacom-hud-input" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${m(q)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${M?"is-active":""}" data-toggle-hud-pool="1">设备池 ${U.length}</button>
            <button type="button" class="pacom-hud-pill" data-toggle-new-dev="1" ${w?"":"disabled"}>+ 标点</button>
          </div>

          ${M||h?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${h?"新增设备标点":`${m(G?.name??"7F")} 设备池（${d.length}）`}</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${ie("x",16)}</button>
                </div>
                ${h?`
                    <form data-create-dev="1" style="padding:12px; display:flex; flex-direction:column; gap:8px;">
                      <input class="pacom-input" name="devName" placeholder="设备名称（如：703 会议室三控面板）" required />
                      <select class="pacom-select" name="devPreset">${ft.map(g=>`<option value="${g.key}">${g.label}</option>`).join("")}</select>
                      <select class="pacom-select" name="devZone">${j.map(g=>`<option value="${m(g.id)}">${m(g.name)}</option>`).join("")}</select>
                      <button type="submit" class="pacom-btn pacom-btn--primary">加入图纸并预设 Mesh 角色</button>
                    </form>`:`
                    <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                      <div class="pacom-count-pills">
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${T==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${U.length}</span></button>
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${T==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${U.filter(g=>!g.physicalInstalled).length}</span></button>
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${T==="unplaced"}" data-dev-filter="unplaced">未标点 <span class="pacom-count-num">${U.filter(g=>!g.planPoint).length}</span></button>
                      </div>
                    </div>
                    <div class="pacom-list" style="padding:6px;">
                      ${d.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':d.map(g=>`
                                <div class="pacom-row ${g.id===Fe&&Y?"is-selected":""}" data-pick-dev="${m(g.id)}" style="padding:8px;">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${m(g.name)}</div>
                                    <div class="pacom-row-sub">${m(Se(g.logicalZoneId))} · ${g.physicalInstalled?"已复核":"待复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${g.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${g.planPoint?"已标点":"未标点"}</span>
                                </div>`).join("")}
                    </div>`}
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${Ce?"crosshair":"grab"};">
          ${G?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${me}px, ${pe}px) scale(${ae});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${m(G.plan.imageUrl)}" alt="${m(G.name)} 平面图" />
                  ${te==="zone"?j.map(g=>{const H=V[g.id];return H?`<div class="pacom-zone-hotspot is-active" style="left:${H.left}%; top:${H.top}%; width:${H.width}%; height:${H.height}%;"><span class="pacom-zone-tag">${m(g.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${U.filter(g=>g.planPoint).map(g=>`
                      <button type="button" class="pacom-pin ${g.id===Fe&&Y?"is-selected":""} ${g.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(g.planPoint.x*100).toFixed(2)}%; top:${(g.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${m(g.id)}" title="${m(g.name)}">
                        <span class="pacom-dot ${g.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${m(Fa(g))}</span>
                      </button>`).join("")}
                  ${te==="light_marker"||z?.category==="lighting"?k.filter(g=>U.some(H=>H.id===g.deviceId)).map(g=>`
                            <span class="dep-light-dot" style="left:${(g.x*100).toFixed(1)}%; top:${(g.y*100).toFixed(1)}%;" title="${m(g.label)}（${m(g.channel)}）">
                              ${ie("sparkles",12)}<span>${m(g.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="project_config" data-proj-sub="floor_zones">前往「项目配置」上传真实底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${L.map(g=>`
              <button type="button" class="pacom-elev-item ${g.id===O?"is-active":""}" data-scrubber-floor="${m(g.id)}" title="${m(g.name)}${g.plan?" · 已传底图":" · 待传底图"}">
                ${g.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${m(g.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${te==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${te==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${te==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${ie("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(ae*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${ie("plus",16)}</button>
        </div>

        ${z?`
            <aside class="pacom-drawer" aria-label="设备部署属性">
              <div class="pacom-drawer-head">
                <div style="min-width:0;">
                  <h2 class="pacom-drawer-title">${m(z.name)}</h2>
                  <div class="pacom-row-sub">${m(Se(z.logicalZoneId))} · v${z.version}</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${ie("x",16)}</button>
              </div>

              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${w?"":"disabled"}>${Ce?"点击图纸定位中…":"点图更新坐标"}</button>
                <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${m(z.id)}">Ping 闪灯 5s</button>
                <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
              </div>

              ${z.category==="lighting"?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:14px; font-weight:450;">回路可视化灯点（${s.length}）</span>
                      <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${m(z.id)}" ${w?"":"disabled"}>+ 添加灯点</button>
                    </div>
                    ${s.map(g=>`
                        <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                          <span><strong>${m(g.channel)}</strong> · ${m(g.label)}</span>
                          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:13px;" data-del-light-marker="${m(g.id)}" ${w?"":"disabled"}>删</button>
                        </div>`).join("")}
                  </div>`:""}

              ${z.category!=="hvac"&&z.category!=="meter"&&l?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                      <code style="font-size:12px;">${m(l.meshUuid)}</code>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                      <span>Proxy 代理（建议每层 2–3 个）</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${l.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${m(z.id)}" ${w?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                      <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${l.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${m(z.id)}" ${w?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                    </div>
                  </div>`:""}

              <form data-role="binding-form" class="pacom-control-box" style="gap:8px;">
                <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                  <select class="pacom-select" style="height:30px; font-size:13px;" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(g=>`<option value="${g}" ${z.hardwareBinding?.protocol===g?"selected":""}>${g.toUpperCase()}</option>`).join("")}
                  </select>
                  <input class="pacom-input" style="height:30px; font-size:13px;" name="networkAddress" placeholder="网络地址/主题" value="${m(z.hardwareBinding?.networkAddress??"")}" />
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                  <input class="pacom-input" style="height:30px; font-size:13px;" name="portOrChannel" placeholder="端口/回路" value="${m(z.hardwareBinding?.portOrChannel??"")}" />
                  <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; flex-shrink:0;">
                    <span>物理已复核</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${De}" data-toggle-phys="1" ${w?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </span>
                </div>
                <button class="pacom-btn pacom-btn--primary" type="submit" ${w?"":"disabled"}>保存绑定与复核（v${z.version}）</button>
              </form>
            </aside>`:""}
      </main>
    `}function Xt(w){const L=B(O),G=F.trim().toLowerCase(),U=L.filter(s=>!(N==="online"&&s.connectivity!=="online"||N==="offline"&&s.connectivity!=="offline"||N==="unverified"&&s.physicalInstalled||G&&!`${s.name} ${Se(s.logicalZoneId)} ${s.hardwareBinding?.protocol??""}`.toLowerCase().includes(G))),j=L.filter(s=>s.connectivity==="online").length,z=ne?L.find(s=>s.id===ne)??null:null,l=z?Z.get(z.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450}:null;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" style="width:220px;" data-ledger-search placeholder="搜索设备名称或功能区…" value="${m(F)}" aria-label="搜索设备列表" />
          <select class="pacom-select" data-ledger-filter aria-label="按设备状态筛选">
            <option value="all" ${N==="all"?"selected":""}>全部状态（${L.length}）</option>
            <option value="online" ${N==="online"?"selected":""}>仅看在线（${j}）</option>
            <option value="offline" ${N==="offline"?"selected":""}>仅看离线（${L.length-j}）</option>
            <option value="unverified" ${N==="unverified"?"selected":""}>待物理复核（${L.filter(s=>!s.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${ie("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn" data-export-inv="1">导出 CSV</button>
        </div>
      </div>
      ${z&&l?`
          <form class="pacom-settings-card" data-save-dev-params="${m(z.id)}">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">设备参数配置：${m(z.name)}</span>
                <span class="pacom-setting-desc">人感自动关灯延时、光照度开关门限与默认亮度参数</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-close-param="1">${ie("x",16)}</button>
            </div>
            <div class="pacom-setting-row" style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px;">
              <label class="pacom-field"><span>自动关灯延时(分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${l.offDelayMin}" /></label>
              <label class="pacom-field"><span>恢复自动延时(分)</span><input class="pacom-input" name="restoreMin" type="number" value="${l.restoreMin}" /></label>
              <label class="pacom-field"><span>开灯光感门限(lx)</span><input class="pacom-input" name="luxOn" type="number" value="${l.luxOn}" /></label>
              <label class="pacom-field"><span>关灯光感门限(lx)</span><input class="pacom-input" name="luxOff" type="number" value="${l.luxOff}" /></label>
            </div>
            <div class="pacom-setting-row" style="justify-content:flex-end;">
              <button type="submit" class="pacom-btn pacom-btn--primary" ${w?"":"disabled"}>下发设备参数</button>
            </div>
          </form>`:""}
      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${U.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词或切换状态筛选。</span></div></td></tr>':U.map(s=>`
                        <tr>
                          <td><div style="font-weight:450;">${m(s.name)}</div><div class="pacom-row-sub">${m(Se(s.logicalZoneId))} · v${s.version}</div></td>
                          <td><span class="pacom-badge ${s.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${s.planPoint?`${Math.round(s.planPoint.x*100)}%,${Math.round(s.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${s.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${s.hardwareBinding?s.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${s.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${s.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${s.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${s.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${m(s.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-param="${m(s.id)}">参数</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${m(s.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${U.length} / ${L.length} 台设备 · ${j} 在线 · ${L.length-j} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dep-nav="floorplan">前往设备标记 →</button>
        </div>
      </div>
    `}function Qt(){const w=Q.filter(G=>G.track==="mesh_auto"),L=Q.filter(G=>G.track==="cloud_biz");return`
      ${$?`
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
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${w.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${w.map(G=>`
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">${m(G.name)} <span class="pacom-badge pacom-badge--neutral">${m(G.groupType)}</span></span>
                    <span class="pacom-setting-desc">成员 ${G.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                  </div>
                  <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${m(G.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${L.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${L.map(G=>`
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">${m(G.name)} <span class="pacom-badge pacom-badge--neutral">${m(G.groupType)}</span></span>
                    <span class="pacom-setting-desc">成员 ${G.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                  </div>
                  <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${m(G.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>
      </div>
    `}function Jt(){const w=B(O),L=oe().filter(o=>o.floorId===O),G=w.filter(o=>o.category!=="hvac"&&o.category!=="meter"),U=G.filter(o=>Ze.get(o.id)?.proxy).length,j=G.filter(o=>Ze.get(o.id)?.relay).length,z=w.filter(o=>o.category==="gateway"),l=w.filter(o=>Ze.get(o.id)?.relay||Ze.get(o.id)?.proxy),s=w.filter(o=>o.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge pacom-badge--online">协同锁空闲 · 可同步</span>
            <span class="pacom-row-sub">Mesh 节点 ${G.length} 台 · Proxy ${U} 个 · Relay ${j} 个 · 边缘基线 v${Te}</span>
          </div>
        </div>
        ${Ue.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${Ue.map(o=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${m(o.title)}</strong> <span class="pacom-row-sub">· ${m(o.detail)}</span></div>
                      <span class="pacom-badge ${o.level==="ok"?"pacom-badge--online":o.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${o.level==="ok"?"通过":o.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达图纸标点）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${$e==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${$e==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${$e==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${z.map(o=>`
                    <button type="button" class="dep-topo-node ${o.connectivity==="offline"?"is-issue":""}" data-topo-jump="${m(o.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(o.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                      <span class="pacom-row-sub">${m(o.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${l.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，请在图纸标点抽屉中为传感器开启。</div>':l.map(o=>{const d=Ze.get(o.id);return`
                            <button type="button" class="dep-topo-node ${o.connectivity==="offline"?"is-issue":""}" data-topo-jump="${m(o.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(o.name)}</strong><span class="pacom-badge pacom-badge--accent">${d?.proxy?"Proxy":""}${d?.proxy&&d?.relay?" + ":""}${d?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${m(Se(o.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${s.map(o=>`
                    <button type="button" class="dep-topo-node ${o.connectivity==="offline"?"is-issue":""}" data-topo-jump="${m(o.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(o.name)}</strong><span class="pacom-badge ${o.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${o.connectivity==="online"?"在线":"离线"}</span></div>
                      <span class="pacom-row-sub">${m(Se(o.logicalZoneId))} · ${m(o.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                    </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${w.filter(o=>o.category==="sensor"||o.category==="gateway").map(o=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${m(o.id)}">
                      <strong>${m(o.name)}</strong>
                      <span class="pacom-row-sub">${o.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${w.filter(o=>o.category==="lighting"||o.category==="hvac").map(o=>`
                    <button type="button" class="dep-topo-node ${o.connectivity==="offline"?"is-issue":""}" data-topo-jump="${m(o.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(o.name)}</strong><span class="pacom-badge ${o.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${o.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${m(Se(o.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${L.map(o=>{const d=w.filter(H=>H.logicalZoneId===o.id),g=d.some(H=>H.connectivity==="offline");return`
                      <div class="dep-topo-node ${g?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${m(o.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${g?"pacom-badge--warning":"pacom-badge--online"}">${d.length} 台设备</span></div>
                        <span class="pacom-row-sub">${g?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function ea(){const w=be.reduce((j,z)=>j+z.collectedPoints,0),L=be.reduce((j,z)=>j+z.calculatedPoints,0),G=be.filter(j=>j.status==="connected").length,U=be.filter(j=>j.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${G}<span class="pacom-kpi-unit">/ ${be.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${be.length?Math.round(G/be.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${w}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${L}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${U.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${U.length} 条采集通道通信降级（${U.map(j=>j.name).join("、")}）</span>
                <span class="pacom-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
              </div>
            </div>`:""}

      ${u?`
          <form class="pacom-settings-card" data-create-conn="1">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">新增子系统接入通道</span>
                <span class="pacom-setting-desc">支持边缘网关、中央空调/线控网关、智能电表通讯机、空气质量与数字标牌（自动检测局域网端口冲突）</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-toggle-new-conn="1">${ie("x",16)}</button>
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
                ${be.map(j=>{const z=ja[j.status]??{label:j.status,cls:"pacom-badge--neutral"},l=j.status==="connected"?98:j.status==="degraded"?62:0,s=l>=75?"var(--pacom-status-online)":l>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",o=ke===j.id,d=o?Ca(j,xe):[];return`
                      <tr>
                        <td><strong>${m(j.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${j.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${m(j.endpoint)}</code></td>
                        <td>采集 ${j.collectedPoints} / 计算 ${j.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${z.cls}">${z.label}</span>
                            <span class="pacom-row-sub">${l}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${l}%; background:${s};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${m(j.id)}">${o?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${m(j.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${m(j.id)}" data-endpoint-val="${m(j.endpoint)}">${fe===j.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${o?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${m(j.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${d.map(g=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${m(g.deviceName)}</strong> · ${m(g.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${m(g.value)} · ${m(g.lastSeen)}</span>
                                        <span class="pacom-badge ${g.quality==="online"?"pacom-badge--online":g.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${g.quality==="online"?"在线正常":g.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function D(){const w=n.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Je({tree:y(),session:n,scope:W,isOpen:_,searchKeyword:ce})}
            </div>
            <div class="pacom-header-meta">
              ${Vt(w)}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${Ut()}
          ${r==="floorplan"?`<div class="pacom-unified-main--canvas">
                  ${we?`<div class="pacom-banner pacom-banner--ok" style="margin-bottom:8px; flex-shrink:0;"><span class="pacom-banner-title">${m(we)}</span></div>`:""}
                  ${se?`<div class="pacom-alert-banner" style="margin-bottom:8px; flex-shrink:0;">${m(se)}</div>`:""}
                  ${Yt(w)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head">
                    <h2 class="pacom-unified-title">${xt[r].title}</h2>
                    <p class="pacom-unified-subtitle">${xt[r].subtitle}</p>
                  </div>
                  ${r==="project_config"?`<div class="pacom-tabs" style="align-self:flex-start;" role="tablist" aria-label="项目配置分段">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="project_building"}" data-proj-sub-tab="project_building">项目与楼宇</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${E==="floor_zones"}" data-proj-sub-tab="floor_zones">楼层与图纸</button>
                        </div>`:""}
                  ${we?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${m(we)}</span></div>`:""}
                  ${se?`<div class="pacom-alert-banner">${m(se)}</div>`:""}
                  ${r==="overview"?Zt():r==="project_config"?E==="floor_zones"?Gt(w):Wt(w):r==="ledger"?Xt(w):r==="groups"?Qt():r==="network_topo"?Jt():ea()}
                </div>
              </div>`}
        </div>
      </div>
      ${Kt(w)}
      ${c?`
          <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${m(c.title)}">
            <div class="dep-lightbox-card">
              <div class="dep-lightbox-head">
                <strong style="font-size:14px; font-weight:500;">${m(c.title)}</strong>
                <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${ie("x",16)}</button>
              </div>
              <div class="dep-lightbox-body">
                <img src="${m(c.imageUrl)}" alt="${m(c.title)}" />
              </div>
            </div>
          </div>`:""}
    `,ta()}function ta(){tt(t,{onToggle:()=>{_=!_,D(),_&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:l=>{ce=l,D();const s=t.querySelector("[data-global-space-search]");s&&(s.focus(),s.setSelectionRange(l.length,l.length))},onPick:l=>{if(W=l,_=!1,l.level==="project"){v=l.projectId;const s=C.buildings.find(o=>o.projectId===l.projectId);s&&he(s.id)}else l.level==="building"?he(l.buildingId):l.level==="floor"&&ge(l.floorId);D()}}),t.querySelectorAll("[data-dep-nav]").forEach(l=>{l.addEventListener("click",()=>{r=l.dataset.depNav??"overview",l.dataset.projSub&&(E=l.dataset.projSub),we="",se="",D()})}),t.querySelectorAll("[data-proj-sub-tab]").forEach(l=>{l.addEventListener("click",()=>{E=l.dataset.projSubTab??"project_building",D()})}),t.querySelector("[data-ledger-search]")?.addEventListener("input",l=>{F=l.currentTarget.value,D();const s=t.querySelector("[data-ledger-search]");s&&(s.focus(),s.setSelectionRange(F.length,F.length))}),t.querySelector("[data-ledger-filter]")?.addEventListener("change",l=>{N=l.currentTarget.value??"all",D()}),t.querySelectorAll("[data-refresh-dep]").forEach(l=>{l.addEventListener("click",()=>{Ee()})}),t.querySelectorAll("[data-matrix-nav]").forEach(l=>{l.addEventListener("click",()=>{const s=l.dataset.matrixFloor;s&&ge(s),r=l.dataset.matrixNav??"floorplan",l.dataset.projSub&&(E=l.dataset.projSub),D()})}),t.querySelectorAll("[data-pick-floor-pill]").forEach(l=>{l.addEventListener("click",()=>{const s=l.dataset.pickFloorPill;s&&(ge(s),D())})}),t.querySelectorAll("[data-scrubber-floor]").forEach(l=>{l.addEventListener("click",()=>{const s=l.dataset.scrubberFloor;s&&(ge(s),D())})}),t.querySelector("[data-switch-proj-select]")?.addEventListener("change",l=>{const s=l.currentTarget.value;if(!s)return;v=s;const o=C.buildings.find(d=>d.projectId===s);o?he(o.id):(x="",O="",W=Ge({level:"project",projectId:s})),J=!1,X=!1,we="",se="",D()}),t.querySelectorAll("[data-toggle-new-proj]").forEach(l=>{l.addEventListener("click",()=>{ue=!ue,D()})}),t.querySelector("[data-go-create-proj]")?.addEventListener("click",()=>{r="project_config",E="project_building",ue=!0,D()}),t.querySelector("[data-go-create-bld]")?.addEventListener("click",()=>{E="project_building",J=!0,D()}),t.querySelector("[data-create-project]")?.addEventListener("submit",async l=>{l.preventDefault();const s=new FormData(l.currentTarget),o=String(s.get("pName")??"").trim(),d=String(s.get("pCity")??"").trim(),g=String(s.get("pAddr")??"").trim(),H=String(s.get("pLng")??"").trim(),Ie=String(s.get("pLat")??"").trim();if(!o)return;let ee;if(H||Ie){const Le=Number(H),ze=Number(Ie);if(!Number.isFinite(Le)||!Number.isFinite(ze)||Le<-180||Le>180||ze<-90||ze>90){se="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",D();return}ee={lng:Le,lat:ze,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const Le=await e.createProject?.({name:o,city:d,address:g,location:ee});ue=!1,Le&&(v=Le.id,x="",O="",W=Ge({level:"project",projectId:Le.id})),we=`已创建项目「${o}」，下一步可添加园区楼宇。`,await Ee()}catch(Le){se=Le instanceof Error?Le.message:String(Le),D()}}),t.querySelector("[data-delete-proj]")?.addEventListener("click",async l=>{const s=l.currentTarget.dataset.deleteProj,o=C.projects.find(d=>d.id===s);if(!(!s||!o)&&window.confirm(`确认删除项目「${o.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await e.deleteProject?.(s),we=`已删除项目「${o.name}」。`,await Ee()}catch(d){se=d instanceof Error?d.message:String(d),D()}}),t.querySelector("[data-upload-proj]")?.addEventListener("change",async l=>{const s=l.currentTarget,o=s.dataset.uploadProj,d=s.files?.[0];if(!(!o||!d))try{const g=await it(d);await e.updateProject?.(o,{imageUrl:g}),we=`已更新项目封面图（${d.name}）。`,await Ee()}catch(g){se=g instanceof Error?g.message:String(g),D()}}),t.querySelector("[data-save-project]")?.addEventListener("submit",async l=>{l.preventDefault();const s=l.currentTarget,o=s.dataset.saveProject??v,d=new FormData(s),g=String(d.get("pName")??"").trim(),H=String(d.get("pCity")??"").trim(),Ie=String(d.get("pAddr")??"").trim(),ee=String(d.get("pLng")??"").trim(),Le=String(d.get("pLat")??"").trim();let ze;if(ee||Le){const qe=Number(ee),Pe=Number(Le);if(!Number.isFinite(qe)||!Number.isFinite(Pe)||qe<-180||qe>180||Pe<-90||Pe>90){se="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",D();return}ze={lng:qe,lat:Pe,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await e.updateProject?.(o,{name:g,city:H,address:Ie,location:ze}),we=`已保存项目「${g||"当前项目"}」信息。`,await Ee()}catch(qe){se=qe instanceof Error?qe.message:String(qe),D()}}),t.querySelectorAll("[data-pick-building]").forEach(l=>{l.addEventListener("click",()=>{const s=l.dataset.pickBuilding;s&&(he(s),we="",D())})}),t.querySelector("[data-switch-bld-select]")?.addEventListener("change",l=>{const s=l.currentTarget.value;s&&(he(s),R="all",Ae=!1,f=[],D())}),t.querySelectorAll("[data-toggle-new-bld]").forEach(l=>{l.addEventListener("click",()=>{J=!J,D()})}),t.querySelector("[data-create-bld]")?.addEventListener("submit",async l=>{l.preventDefault();const s=l.currentTarget,o=s.dataset.createBld??v,d=new FormData(s),g=String(d.get("bName")??"").trim(),H=String(d.get("bArea")??"").trim(),Ie=Math.max(1,Number(d.get("bAbove")??12)),ee=Math.max(0,Number(d.get("bBelow")??0)),Le=!!d.get("bRoof"),ze=!!d.get("bAutoFloors");if(g)try{const qe=await e.upsertBuilding?.({projectId:o,name:g,aboveFloors:Ie,belowFloors:ee,hasRoof:Le,areaSqm:H?Number(H):null});J=!1;let Pe=0;if(qe&&(x=qe.id,ze)){for(let Be=1;Be<=Ie;Be+=1)await e.upsertFloor?.({buildingId:qe.id,kind:"above",level:Be,name:`${Be}F`}),Pe+=1;for(let Be=1;Be<=ee;Be+=1)await e.upsertFloor?.({buildingId:qe.id,kind:"below",level:-Be,name:`B${Be}`}),Pe+=1;Le&&(await e.upsertFloor?.({buildingId:qe.id,kind:"roof",level:99,name:"RF"}),Pe+=1)}we=ze?`已创建楼宇「${g}」并自动生成 ${Pe} 个楼层。`:`已创建楼宇「${g}」。`,await Ee()}catch(qe){se=qe instanceof Error?qe.message:String(qe),D()}}),t.querySelector("[data-save-building]")?.addEventListener("submit",async l=>{l.preventDefault();const s=l.currentTarget,o=s.dataset.saveBuilding,d=C.buildings.find(qe=>qe.id===o);if(!d)return;const g=new FormData(s),H=String(g.get("bName")??"").trim()||d.name,Ie=String(g.get("bArea")??"").trim(),ee=Math.max(1,Number(g.get("bAbove")??d.aboveFloors)),Le=Math.max(0,Number(g.get("bBelow")??d.belowFloors)),ze=!!g.get("bRoof");try{await e.upsertBuilding?.({id:o,projectId:d.projectId,name:H,aboveFloors:ee,belowFloors:Le,hasRoof:ze,areaSqm:Ie?Number(Ie):null}),p=null,we=`已保存楼宇「${H}」参数。`,await Ee()}catch(qe){se=qe instanceof Error?qe.message:String(qe),D()}}),t.querySelectorAll("[data-edit-building]").forEach(l=>{l.addEventListener("click",()=>{p=l.dataset.editBuilding??null,D()})}),t.querySelectorAll("[data-close-edit-building]").forEach(l=>{l.addEventListener("click",()=>{p=null,D()})}),t.querySelectorAll("[data-open-building-floors]").forEach(l=>{l.addEventListener("click",()=>{const s=l.dataset.openBuildingFloors;s&&he(s),E="floor_zones",D()})}),t.querySelectorAll("[data-floor-detail-tab]").forEach(l=>{l.addEventListener("click",()=>{ve=l.dataset.floorDetailTab??"zones",D()})}),t.querySelectorAll("[data-modal-scrim]").forEach(l=>{l.addEventListener("click",s=>{s.target===l&&(ue=!1,J=!1,p=null,X=!1,Ae=!1,de=null,D())})}),t.querySelector("[data-delete-building]")?.addEventListener("click",async l=>{const s=l.currentTarget.dataset.deleteBuilding,o=C.buildings.find(d=>d.id===s);if(!(!s||!o)&&window.confirm(`确认删除楼宇「${o.name}」及其下全部楼层与功能区？`))try{await e.deleteBuilding?.(s),p=null,we=`已删除楼宇「${o.name}」。`,await Ee()}catch(d){se=d instanceof Error?d.message:String(d),D()}}),t.querySelector("[data-upload-bld]")?.addEventListener("change",async l=>{const s=l.currentTarget,o=s.dataset.uploadBld,d=s.files?.[0],g=C.buildings.find(H=>H.id===o);if(!(!o||!d||!g))try{const H=await it(d);await e.upsertBuilding?.({id:g.id,projectId:g.projectId,name:g.name,aboveFloors:g.aboveFloors,belowFloors:g.belowFloors,hasRoof:g.hasRoof,areaSqm:g.areaSqm,imageUrl:H}),we=`已更新「${g.name}」外观图（${d.name}）。`,await Ee()}catch(H){se=H instanceof Error?H.message:String(H),D()}}),t.querySelectorAll("[data-fill-missing-floors]").forEach(l=>{l.addEventListener("click",async()=>{const s=l.dataset.fillMissingFloors;if(s)try{const o=await Ht(s);we=o>0?`已自动补齐 ${o} 个楼层。`:"当前楼宇楼层已完整。",await Ee()}catch(o){se=o instanceof Error?o.message:String(o),D()}})}),t.querySelectorAll("[data-floor-list-filter]").forEach(l=>{l.addEventListener("click",()=>{R=l.dataset.floorListFilter??"all",D()})}),t.querySelectorAll("[data-toggle-new-floor]").forEach(l=>{l.addEventListener("click",()=>{X=!X,D()})}),t.querySelector("[data-toggle-batch-panel]")?.addEventListener("click",()=>{Ae=!Ae,D()}),t.querySelector("[data-create-floor]")?.addEventListener("submit",async l=>{l.preventDefault();const s=l.currentTarget,o=s.dataset.createFloor,d=new FormData(s),g=String(d.get("fName")??"").trim().toUpperCase(),H=String(d.get("fArea")??"").trim();if(!g)return;const Ie=Qe(g)??g;if(P(o).some(Pe=>(Qe(Pe.name)??Pe.name.toUpperCase())===Ie)){se=`楼层「${g}」已存在，请使用其他名称。`,D();return}const Le=lt(g),ze=Le>=999?"roof":Le<0?"below":"above",qe=Le>=999?99:Le||1;try{const Pe=await e.upsertFloor?.({buildingId:o,kind:ze,level:qe,name:g,areaSqm:H?Number(H):null});X=!1,Pe&&(O=Pe.id),we=`已新增楼层「${g}」。`,await Ee()}catch(Pe){se=Pe instanceof Error?Pe.message:String(Pe),D()}}),t.querySelector("[data-save-floor]")?.addEventListener("submit",async l=>{l.preventDefault();const s=l.currentTarget,o=s.dataset.saveFloor,d=S().find(Be=>Be.id===o);if(!d)return;const g=new FormData(s),H=String(g.get("fName")??"").trim()||d.name,Ie=String(g.get("fArea")??"").trim(),ee=Qe(H)??H.toUpperCase();if(P(d.buildingId).some(Be=>Be.id!==d.id&&(Qe(Be.name)??Be.name.toUpperCase())===ee)){se=`楼层「${H}」已存在，请避免重复命名。`,D();return}const ze=lt(H),qe=ze>=999?"roof":ze<0?"below":"above",Pe=ze>=999?99:ze||d.level;try{await e.upsertFloor?.({id:d.id,buildingId:d.buildingId,kind:qe,level:Pe,name:H,areaSqm:Ie?Number(Ie):null}),we=`已保存楼层「${H}」。`,await Ee()}catch(Be){se=Be instanceof Error?Be.message:String(Be),D()}}),t.querySelector("[data-delete-floor]")?.addEventListener("click",async l=>{const s=l.currentTarget.dataset.deleteFloor,o=S().find(d=>d.id===s);if(!(!s||!o)){if(B(s).length>0){se=`楼层「${o.name}」已关联设备，请先移除设备后再删除。`,D();return}if(window.confirm(`确认删除楼层「${o.name}」及其功能区？`))try{await e.deleteFloor?.(s),we=`已删除楼层「${o.name}」。`,await Ee()}catch(d){se=d instanceof Error?d.message:String(d),D()}}});async function w(l,s){const o=S().find(d=>d.id===l);if(o)try{const d=await it(s);await e.upsertFloor?.({id:o.id,buildingId:o.buildingId,kind:o.kind,level:o.level,name:o.name,areaSqm:o.areaSqm,planImageUrl:d}),we=`已更新「${o.name}」平面底图（${s.name}）。`,await Ee()}catch(d){se=d instanceof Error?d.message:String(d),D()}}t.querySelector("[data-upload-floor]")?.addEventListener("change",l=>{const s=l.currentTarget,o=s.dataset.uploadFloor,d=s.files?.[0];o&&d&&w(o,d)});const L=t.querySelector("[data-single-floor-drop]");L&&n.scope.canEditDeployment&&(L.addEventListener("dragover",l=>{l.preventDefault(),L.style.borderColor="var(--pacom-accent-solid)"}),L.addEventListener("dragleave",()=>{L.style.borderColor=""}),L.addEventListener("drop",l=>{l.preventDefault(),L.style.borderColor="";const s=L.dataset.singleFloorDrop,o=Array.from(l.dataTransfer?.files??[]).find(d=>d.type.startsWith("image/"));s&&o&&w(s,o)})),t.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async l=>{const s=l.currentTarget.dataset.clearFloorPlan,o=S().find(d=>d.id===s);if(!(!s||!o)&&window.confirm(`确认清空「${o.name}」的平面底图？`))try{await e.upsertFloor?.({id:o.id,buildingId:o.buildingId,kind:o.kind,level:o.level,name:o.name,areaSqm:o.areaSqm,planImageUrl:null}),we=`已清空「${o.name}」平面底图。`,await Ee()}catch(d){se=d instanceof Error?d.message:String(d),D()}}),t.querySelector("[data-open-lightbox]")?.addEventListener("click",l=>{const s=l.currentTarget,o=s.dataset.lbTitle??"平面底图预览",d=s.dataset.lbSrc??"";d&&(c={title:o,imageUrl:d},D())}),t.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{c=null,D()}),t.querySelector("[data-lightbox-scrim]")?.addEventListener("click",l=>{l.target===l.currentTarget&&(c=null,D())});function G(l,s){if(!l||s.length===0)return;const o=P(l),d=new Map;o.forEach(g=>{const H=Qe(g.name)??g.name.toUpperCase();d.set(H,g)}),f=s.map((g,H)=>{const Ie=Qe(g.name),ee=Ie?d.get(Ie):void 0;return{id:`bu-${Date.now().toString(36)}-${H}`,file:g,matchedFloorId:ee?.id??null}}),Ae=!0,D()}t.querySelector("[data-batch-upload-floors]")?.addEventListener("change",l=>{const s=l.currentTarget,o=s.dataset.batchUploadFloors??"";G(o,Array.from(s.files??[]))});const U=t.querySelector("[data-batch-dropzone]");U&&n.scope.canEditDeployment&&(U.addEventListener("dragover",l=>{l.preventDefault(),re||(re=!0,U.style.borderColor="var(--pacom-accent-solid)",U.style.background="var(--pacom-accent-soft)")}),U.addEventListener("dragleave",()=>{re=!1,U.style.borderColor="",U.style.background=""}),U.addEventListener("drop",l=>{l.preventDefault(),re=!1;const s=U.dataset.batchDropzone??"",o=Array.from(l.dataTransfer?.files??[]).filter(d=>d.type.startsWith("image/"));G(s,o)})),t.querySelectorAll("[data-batch-override-floor]").forEach(l=>{l.addEventListener("change",()=>{const s=l.dataset.batchOverrideFloor,o=f.find(d=>d.id===s);o&&(o.matchedFloorId=l.value||null,D())})}),t.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{f=[],D()}),t.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const l=f.filter(o=>o.matchedFloorId),s=f.length-l.length;if(l.length!==0)try{for(const o of l){const d=S().find(H=>H.id===o.matchedFloorId);if(!d)continue;const g=await it(o.file);await e.upsertFloor?.({id:d.id,buildingId:d.buildingId,kind:d.kind,level:d.level,name:d.name,areaSqm:d.areaSqm,planImageUrl:g})}f=[],Ae=!1,we=`已批量导入 ${l.length} 个楼层平面底图${s>0?`（跳过 ${s} 张未分配文件）`:""}。`,await Ee()}catch(o){se=o instanceof Error?o.message:String(o),D()}}),t.querySelectorAll("[data-apply-zone-tpl]").forEach(l=>{l.addEventListener("click",async()=>{const s=l.dataset.applyZoneTpl,o=l.dataset.tplFloor,d=At.find(H=>H.key===s),g=S().find(H=>H.id===o);if(!(!d||!g))try{for(const H of d.items){const Ie=await e.upsertZone?.({floorId:g.id,name:`${g.name} ${H.suffix}`,category:H.category});Ie&&(V[Ie.id]={left:20,top:20,width:24,height:24})}we=`已按「${d.label}」模板为 ${g.name} 创建 ${d.items.length} 个功能区。`,await Ee()}catch(H){se=H instanceof Error?H.message:String(H),D()}})}),t.querySelector("[data-attach-doc]")?.addEventListener("change",l=>{const s=l.currentTarget,o=s.dataset.attachDoc,d=s.files?.[0],g=S().find(Ie=>Ie.id===o);if(!o||!d||!g)return;const H=d.size>=1024*1024?`${(d.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(d.size/1024))} KB`;I.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:o,name:d.name,category:d.name.toLowerCase().endsWith(".xlsx")||d.name.toLowerCase().endsWith(".xls")?"点位台账":"竣工图纸",boundScope:`${g.name} · 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:H}),we=`已为 ${g.name} 关联文档「${d.name}」。`,D()}),t.querySelector("[data-add-zone]")?.addEventListener("submit",async l=>{l.preventDefault();const s=l.currentTarget.dataset.addZone,o=new FormData(l.currentTarget),d=String(o.get("zoneName")??"").trim(),g=String(o.get("zoneCat")??"office");if(d)try{const H=await e.upsertZone?.({floorId:s,name:d,category:g});H&&(V[H.id]={left:20,top:20,width:24,height:24}),we=`已添加功能区「${d}」。`,await Ee()}catch(H){se=H instanceof Error?H.message:String(H),D()}}),t.querySelectorAll("[data-edit-zone]").forEach(l=>{l.addEventListener("click",()=>{A=l.dataset.editZone??null,D()})}),t.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{A=null,D()}),t.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async l=>{l.preventDefault();const s=l.currentTarget,o=s.dataset.saveEditZone,d=s.dataset.zoneFloor,g=new FormData(s),H=String(g.get("zName")??"").trim(),Ie=String(g.get("zCat")??"office");if(H)try{await e.upsertZone?.({id:o,floorId:d,name:H,category:Ie}),A=null,we=`已更新功能区「${H}」。`,await Ee()}catch(ee){se=ee instanceof Error?ee.message:String(ee),D()}}),t.querySelectorAll("[data-del-zone]").forEach(l=>{l.addEventListener("click",async()=>{const s=l.dataset.delZone,o=oe().find(d=>d.id===s);if(!(!s||!o)&&window.confirm(`确认删除功能区「${o.name}」？`))try{await e.deleteZone?.(s),A===s&&(A=null),we=`已删除功能区「${o.name}」。`,await Ee()}catch(d){se=d instanceof Error?d.message:String(d),D()}})}),t.querySelectorAll("[data-toggle-copy-zones]").forEach(l=>{l.addEventListener("click",()=>{const s=l.dataset.toggleCopyZones??null;de===s?(de=null,je.clear()):(de=s,je=new Set(P(x).filter(o=>o.id!==s&&o.kind==="above"&&oe().filter(d=>d.floorId===o.id).length===0).map(o=>o.id))),D()})}),t.querySelectorAll("[data-copy-preset]").forEach(l=>{l.addEventListener("click",()=>{const s=l.dataset.copyPreset,o=P(x).filter(d=>d.id!==de);s==="empty"?je=new Set(o.filter(d=>d.kind==="above"&&oe().filter(g=>g.floorId===d.id).length===0).map(d=>d.id)):s==="above"?je=new Set(o.filter(d=>d.kind==="above").map(d=>d.id)):je.clear(),D()})}),t.querySelectorAll("[data-copy-target-floor]").forEach(l=>{l.addEventListener("change",()=>{const s=l.dataset.copyTargetFloor;s&&(l.checked?je.add(s):je.delete(s),D())})}),t.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async l=>{const s=l.currentTarget.dataset.confirmCopyZones,o=Array.from(je);if(!(!s||o.length===0))try{const d=await e.copyZonesToFloors?.(s,o)??0;de=null,je.clear(),we=`已将当前层功能区复用至 ${o.length} 个目标楼层（共新增 ${d} 个功能区）。`,await Ee()}catch(d){se=d instanceof Error?d.message:String(d),D()}});const j=t.querySelector("[data-dep-canvas-search]");j?.addEventListener("focus",()=>{!M&&!h&&(M=!0,D(),t.querySelector("[data-dep-canvas-search]")?.focus())}),j?.addEventListener("input",l=>{q=l.currentTarget.value,M=!0,h=!1,D();const s=t.querySelector("[data-dep-canvas-search]");s&&(s.focus(),s.setSelectionRange(q.length,q.length))}),t.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{M=!M,M&&(h=!1),D()}),t.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{M=!1,h=!1,D()}),t.querySelector("[data-toggle-new-dev]")?.addEventListener("click",()=>{h=!h,h&&(M=!1),D()}),t.querySelectorAll("[data-brush]").forEach(l=>{l.addEventListener("click",()=>{te=l.dataset.brush??"device",D()})}),t.querySelectorAll("[data-dep-zoom]").forEach(l=>{l.addEventListener("click",()=>{const s=l.dataset.depZoom;s==="in"?ae=Math.min(2.6,Number((ae+.2).toFixed(2))):s==="out"?ae=Math.max(.6,Number((ae-.2).toFixed(2))):(ae=1,me=0,pe=0),He()})});const z=t.querySelector('[data-role="dep-stage"]');if(z&&!Ce){let l=!1,s=0,o=0,d=0,g=0;z.addEventListener("pointerdown",Ie=>{Ie.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(l=!0,s=Ie.clientX,o=Ie.clientY,d=me,g=pe,z.classList.add("is-panning"),z.setPointerCapture?.(Ie.pointerId))}),z.addEventListener("pointermove",Ie=>{l&&(me=d+(Ie.clientX-s),pe=g+(Ie.clientY-o),He())});const H=()=>{l&&(l=!1,z.classList.remove("is-panning"))};z.addEventListener("pointerup",H),z.addEventListener("pointercancel",H),z.addEventListener("wheel",Ie=>{Ie.preventDefault();const ee=Ie.deltaY<0?.12:-.12;ae=Math.max(.6,Math.min(2.6,Number((ae+ee).toFixed(2)))),He()},{passive:!1}),z.addEventListener("dblclick",Ie=>{Ie.target?.closest("button")||(ae=1,me=0,pe=0,He())})}t.querySelectorAll("[data-dev-filter]").forEach(l=>{l.addEventListener("click",()=>{T=l.dataset.devFilter??"all",D()})}),t.querySelector("[data-create-dev]")?.addEventListener("submit",l=>{l.preventDefault();const s=new FormData(l.currentTarget),o=String(s.get("devName")??"").trim(),d=String(s.get("devPreset")??"sensor"),g=String(s.get("devZone")??"")||null,H=ft.find(ee=>ee.key===d)??ft[0],Ie=`dev-custom-${Date.now().toString(36)}`;le.push({id:Ie,name:o,category:H.category,projectId:b.projectId,buildingId:x,floorId:O,logicalZoneId:g,planPoint:{floorId:O,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),Ze.set(Ie,{proxy:H.defaultProxy,relay:H.defaultRelay,meshUuid:`mesh-${O.slice(-4)}`}),H.category==="lighting"&&k.push({id:`lm-${Date.now().toString(36)}`,deviceId:Ie,channel:"回路 1",label:`${o.slice(0,6)}主灯`,x:.52,y:.45}),Fe=Ie,Y=!0,h=!1,Re=!0,we=`已新增「${o}」（${H.hint}），已标注默认点位并标记待同步边缘。`,D()}),t.querySelectorAll("[data-pick-dev]").forEach(l=>{l.addEventListener("click",s=>{s.stopPropagation(),Fe=l.dataset.pickDev??null,Y=!0,De=B(O).find(d=>d.id===Fe)?.physicalInstalled??!1,D()})}),t.querySelector("[data-close-sel]")?.addEventListener("click",()=>{Y=!1,Ce=!1,D()}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{Ce=!Ce,D()}),t.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{De=!De,D()}),t.querySelectorAll("[data-ping-dev]").forEach(l=>{l.addEventListener("click",()=>{const s=B(O).find(o=>o.id===l.dataset.pingDev);s&&(we=`已向「${s.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,D())})}),t.querySelector("[data-add-light-marker]")?.addEventListener("click",l=>{const s=l.currentTarget.dataset.addLightMarker,o=k.filter(d=>d.deviceId===s).length+1;k.push({id:`lm-${Date.now().toString(36)}`,deviceId:s,channel:`回路 ${o}`,label:`照明点位 ${o}`,x:Math.min(.86,.35+o*.1),y:.42}),te="light_marker",we=`已新增「回路 ${o}」可视化灯点。`,D()}),t.querySelectorAll("[data-del-light-marker]").forEach(l=>{l.addEventListener("click",()=>{const s=k.findIndex(o=>o.id===l.dataset.delLightMarker);s>=0&&k.splice(s,1),D()})}),t.querySelectorAll("[data-toggle-mesh-role]").forEach(l=>{l.addEventListener("click",()=>{const s=l.dataset.meshDev,o=l.dataset.toggleMeshRole,d=Ze.get(s)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};d[o]=!d[o],Ze.set(s,d),Re=!0,we=`已更新节点 ${o.toUpperCase()} 状态，记得在「网络与拓扑」中同步下发至边缘网关。`,D()})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async l=>{const s=B(O).find(H=>H.id===Fe);if(!Ce||!s)return;const o=l.currentTarget.getBoundingClientRect(),d=Math.max(.02,Math.min(.98,(l.clientX-o.left)/o.width)),g=Math.max(.02,Math.min(.98,(l.clientY-o.top)/o.height));if(le.some(H=>H.id===s.id)){s.planPoint={floorId:O,planVersion:1,x:Number(d.toFixed(4)),y:Number(g.toFixed(4))},Ce=!1,we=`已更新「${s.name}」图上坐标。`,D();return}try{await e.updateDevicePlanPoint({deviceId:s.id,floorId:b.floorId,planVersion:s.planPoint?.planVersion??1,x:d,y:g,expectedVersion:s.version}),Ce=!1,we=`已更新「${s.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await Ee()}catch(H){se=H instanceof Error?H.message:String(H),D()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async l=>{l.preventDefault();const s=B(O).find(d=>d.id===Fe);if(!s)return;const o=new FormData(l.currentTarget);if(le.some(d=>d.id===s.id)){s.physicalInstalled=De,s.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(o.get("protocol")),networkAddress:String(o.get("networkAddress")??""),portOrChannel:String(o.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:n.displayName},s.version+=1,Re=!0,we=`已保存「${s.name}」的硬件绑定与物理复核状态。`,D();return}try{await e.updateDeviceHardwareBinding({deviceId:s.id,gatewayId:s.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(o.get("protocol")),networkAddress:String(o.get("networkAddress")??""),portOrChannel:String(o.get("portOrChannel")??""),physicalInstalled:De,expectedVersion:s.version}),Re=!0,we=`已保存「${s.name}」的硬件绑定与物理安装复核状态。`,await Ee()}catch(d){se=d instanceof Error?d.message:String(d),D()}}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const l=B(O).find(s=>s.id===Fe);l&&Ye(l)}),t.querySelectorAll("[data-ftt-dev]").forEach(l=>{l.addEventListener("click",()=>{const s=B(O).find(o=>o.id===l.dataset.fttDev);s&&Ye(s)})}),t.querySelectorAll("[data-batch-ftt]").forEach(l=>{l.addEventListener("click",()=>dt())}),t.querySelectorAll("[data-export-inv]").forEach(l=>{l.addEventListener("click",()=>Bt())}),t.querySelectorAll("[data-open-param]").forEach(l=>{l.addEventListener("click",()=>{ne=l.dataset.openParam??null,D()})}),t.querySelector("[data-close-param]")?.addEventListener("click",()=>{ne=null,D()}),t.querySelector("[data-save-dev-params]")?.addEventListener("submit",l=>{l.preventDefault();const s=l.currentTarget.dataset.saveDevParams,o=new FormData(l.currentTarget);Z.set(s,{offDelayMin:Number(o.get("offDelayMin")??15),restoreMin:Number(o.get("restoreMin")??30),luxOn:Number(o.get("luxOn")??280),luxOff:Number(o.get("luxOff")??450)}),ne=null,Re=!0,we="设备自治延时与光感门限参数已下发并同步至配置基线。",D()}),t.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{$=!$,D()}),t.querySelector("[data-create-group]")?.addEventListener("submit",l=>{l.preventDefault();const s=new FormData(l.currentTarget),o=String(s.get("gName")??"").trim(),d=s.get("gTrack")??"mesh_auto",g=String(s.get("gType")??"灯光联动组");o&&(Q.unshift({id:`grp-${Date.now().toString(36)}`,track:d,groupType:g,name:o,floorId:O,includesAdapter:d==="mesh_auto",deviceIds:d==="mesh_auto"?["dev-e7f-gw-01"]:[]}),$=!1,d==="mesh_auto"&&(Re=!0),we=`已新建${d==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${o}」。`,D())}),t.querySelectorAll("[data-test-group]").forEach(l=>{l.addEventListener("click",()=>{const s=Q.find(o=>o.id===l.dataset.testGroup);s&&(we=`已向分组「${s.name}」发送群组试控指令，${s.deviceIds.length} 台成员回读正常。`,D())})}),t.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>_t()),t.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{Te+=1,Re=!1,we=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${Te}）。`,D()}),t.querySelectorAll("[data-topo-mode]").forEach(l=>{l.addEventListener("click",()=>{$e=l.dataset.topoMode??"mesh",D()})}),t.querySelectorAll("[data-topo-jump]").forEach(l=>{l.addEventListener("click",()=>{Fe=l.dataset.topoJump??null,Y=!0,r="floorplan",D()})}),t.querySelector("[data-toggle-new-conn]")?.addEventListener("click",()=>{u=!u,D()}),t.querySelector("[data-create-conn]")?.addEventListener("submit",l=>{l.preventDefault();const s=new FormData(l.currentTarget),o=String(s.get("cName")??"").trim(),d=String(s.get("cProto")??"bacnet_ip"),g=String(s.get("cEndpoint")??"").trim();if(be.some(H=>H.endpoint===g)){se=`端口冲突警告：局域网端点「${g}」已被其他通道占用，请更换端口后重试。`,D();return}be.unshift({id:`conn-${Date.now().toString(36)}`,projectId:b.projectId,buildingId:x,floorId:O,name:o,protocol:d,endpoint:g,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),u=!1,se="",we=`已接入「${o}」（${g}），连通测试通过（18 ms）。`,D()}),t.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{we="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",D()}),t.querySelectorAll("[data-expand-conn]").forEach(l=>{l.addEventListener("click",()=>{const s=l.dataset.expandConn??null;ke=ke===s?null:s,D()})}),t.querySelectorAll("[data-ping-conn]").forEach(l=>{l.addEventListener("click",()=>{const s=be.find(o=>o.id===l.dataset.pingConn);s&&(se="",s.status==="connected"?we=`连通测试通过：「${s.name}」（${s.endpoint}）响应正常，延迟 18 ms。`:se=`连通测试异常：「${s.name}」（${s.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,D())})}),t.querySelectorAll("[data-copy-endpoint]").forEach(l=>{l.addEventListener("click",async()=>{const s=l.dataset.endpointVal??"",o=l.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(s),fe=o,D(),window.setTimeout(()=>{fe=null,D()},1600)}catch{}})}),t.querySelectorAll("[data-preview-doc]").forEach(l=>{l.addEventListener("click",()=>{const s=[...Lt,...I].find(o=>o.id===l.dataset.previewDoc);s&&(we=`已调阅工程附件「${s.name}」（关联范围：${s.boundScope}，更新于 ${s.updatedAt}）。`,D())})}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const l=await e.freezeDeliveryBatch(b.floorId,"部署总览验收发起交付冻结");we=`已生成交付冻结快照 ${l.versionTag}（核验 ${l.verifiedCount}/${l.deviceCount}）。`,await Ee()}catch(l){se=l instanceof Error?l.message:String(l),D()}})}await Ee()}function Ct(t){if(t.connectivity==="offline")return`${t.name.includes("VAV")?"VAV-02":t.name.slice(0,6)} 离线`;if(t.category==="lighting"){const e=t.name.includes("702")?"702 照明":"主照明",n=Number(t.telemetry.dimming?.value??0);return n>0?`${e} ${n}%`:`${e} 关`}return t.category==="hvac"?`${t.name.includes("VAV")?"VAV-02":"FCU-01"} ${t.telemetry.setpoint?.value??24}°C`:t.category==="sensor"?`环境 ${t.telemetry.temp?.value??"23.4"}°C`:t.category==="gateway"?"主控网关":t.name.slice(0,6)}const zt={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},qa={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},Da=ie("chevron-down",12),Ta={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function K(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function qt(t){const e=t.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面"))return 999;const n=e.match(/(-?\d+)/);if(!n)return 0;const a=Number(n[1]);return e.startsWith("B")?-Math.abs(a):a}async function Ma(t,e,n){const a=await e.getSpatialTree();e.mode;const i=n.scope.canControlDevices,r=n.scope.canManageAlarms,E=n.scope.allowedZoneIds?.length?n.scope.allowedZoneIds:null,F=a.floors.filter(k=>n.scope.allowedFloorIds.includes(k.id)),N=E||a.projects.length<=1&&a.buildings.length<=1&&F.length<=1?"floors-only":a.projects.length>1?"multi-project":a.buildings.length>1?"single-project-multi-building":"single-building",W=N==="multi-project",_=N==="multi-project"||N==="single-project-multi-building",ce=N!=="floors-only",te=N==="floors-only"&&F.length<=1;let T=et(),q="devices",M=!1,Y=!1,$e="",ae="",me="all",pe="all";const C=new URLSearchParams(window.location.hash.split("?")[1]??""),xe=C.get("device"),be=C.get("zone");let ye=xe,V=!!xe,le="control",v="",x=!1,O="today",R="devices";const ue=new Set,J=new Set;let p=[],X=[],Ae=[],ve=null,re=null,f=1,c=0,I=0,A=null;function de(){return a.zones.filter(k=>!(T.level==="floor"&&k.floorId!==T.floorId||E&&!E.includes(k.id)))}function je(k){return[...a.floors.filter(Z=>Z.buildingId!==k?!1:N==="floors-only"?n.scope.allowedFloorIds.includes(Z.id):!0)].sort((Z,y)=>qt(y.name)-qt(Z.name))}async function Fe(k,Q=!1){if(a.projects.length===0){T={level:"all-projects"},Ge(T),p=[],X=[],Ae=[],se();return}let Z=k;Z.level==="all-projects"&&!W&&(Z={level:"project",projectId:a.projects[0]?.id??b.projectId}),Z.level==="project"&&!_&&(Z={level:"building",projectId:Z.projectId,buildingId:a.buildings[0]?.id??b.buildingId}),Z.level==="building"&&!ce&&(Z={level:"floor",projectId:Z.projectId,buildingId:Z.buildingId,floorId:F[0]?.id??b.floorId}),T=Z,Ge(Z),re=null,pe=Q&&be?be:"all",x=!1,Y=!1,M=!1,J.clear(),f=1,c=0,I=0,A&&(A(),A=null);const y=T.level==="floor"?T.floorId:b.floorId;if(T.level==="floor")try{const[S,P,oe]=await Promise.all([e.getFloorDevices(T.floorId),e.listAlarms(T.floorId),e.listWorkOrders(T.floorId)]);p=S,X=P,Ae=oe,p.some(B=>B.id===ye)?Q&&xe&&(V=!0):(ye=p[1]?.id??p[0]?.id??null,V=!1),A=e.subscribeFloorEvents(T.floorId,async B=>{B.type==="control.receipt.updated"&&ve?.batchId===B.batchId&&(ve=await e.getControlBatch(B.batchId)),(B.type==="telemetry.updated"||B.type==="device.connectivity")&&T.level==="floor"&&(p=await e.getFloorDevices(T.floorId)),B.type==="alarm.changed"&&T.level==="floor"&&(X=await e.listAlarms(T.floorId)),u()})}catch(S){p=[],X=[],Ae=[],ye=null,V=!1,re=S instanceof Error?S.message:String(S)}else{V=!1;const[S,P,oe]=await Promise.all([e.getFloorDevices(y).catch(()=>[]),e.listAlarms(y).catch(()=>[]),e.listWorkOrders(y).catch(()=>[])]);p=S,X=P,Ae=oe}se()}function De(k){return k?a.zones.find(Q=>Q.id===k)?.name??k:"未分配逻辑区"}function Ce(){const k=ae.trim().toLowerCase();return p.filter(Q=>pe!=="all"&&Q.logicalZoneId!==pe||me!=="all"&&Q.category!==me?!1:k?Q.name.toLowerCase().includes(k)||Q.id.toLowerCase().includes(k)||De(Q.logicalZoneId).toLowerCase().includes(k):!0)}async function h(k,Q,Z){!k.length||T.level!=="floor"||!i||(k.forEach(y=>ue.add(y)),ve=await e.dispatchControlBatch({floorId:T.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:k.map(y=>({deviceId:y,command:Q,targetValue:Z}))}),u())}function u(){const k=document.activeElement,Q=k?.dataset?.role,Z=k&&"selectionStart"in k?k.selectionStart:null,y=k&&"selectionEnd"in k?k.selectionEnd:null,S=t.querySelector(".pacom-list")?.scrollTop??0;se();const P=t.querySelector(".pacom-list");if(P&&(P.scrollTop=S),Q==="search"||Q==="space-search"){const oe=t.querySelector(`[data-role="${Q}"]`);oe&&(oe.focus(),Z!==null&&y!==null&&oe.setSelectionRange(Z,y))}}function $(){const k=t.querySelector('[data-role="canvas-viewport"]');k&&(k.style.transform=`translate(${c}px, ${I}px) scale(${f})`);const Q=t.querySelector('[data-role="zoom-label"]');Q&&(Q.textContent=`${Math.round(f*100)}%`)}function ne(k){if(k==="all")return{level:"all-projects"};const Q=k.split(":");return Q[0]==="project"&&Q[1]?{level:"project",projectId:Q[1]}:Q[0]==="building"&&Q[1]&&Q[2]?{level:"building",projectId:Q[1],buildingId:Q[2]}:Q[0]==="floor"&&Q[1]&&Q[2]&&Q[3]?{level:"floor",projectId:Q[1],buildingId:Q[2],floorId:Q[3]}:{level:"all-projects"}}function fe(k){const Q=T;if(Q.level==="all-projects"){const Z=ae.trim().toLowerCase(),y=a.projects.filter(S=>!Z||S.name.toLowerCase().includes(Z));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${y.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ie("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${y.map(S=>{const P=a.buildings.filter(oe=>oe.projectId===S.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${K(S.id)}">
                  <div>
                    <div class="pacom-row-title">${K(S.name)}</div>
                    <div class="pacom-row-sub">${K(S.city??"")} · ${P} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(Q.level==="project"){const Z=ae.trim().toLowerCase(),y=a.buildings.filter(oe=>oe.projectId===Q.projectId&&(!Z||oe.name.toLowerCase().includes(Z))),S=p.filter(oe=>oe.connectivity==="online").length,P=p.length?Math.round(S/p.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${y.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ie("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${y.map(oe=>{const B=oe.id===b.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${K(oe.projectId)}:${K(oe.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${B&&k>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${K(oe.name)}</div>
                      <div class="pacom-row-sub">地上 ${oe.aboveFloors} 层 · ${oe.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${B?"pacom-badge--accent":"pacom-badge--neutral"}">${B?`在线 ${P}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(Q.level==="building"){const Z=ae.trim().toLowerCase(),y=je(Q.buildingId).filter(P=>!Z||P.name.toLowerCase().includes(Z)),S=a.buildings.find(P=>P.id===Q.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${K(S?.name??"楼宇")} 楼层导览（${y.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ie("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${y.map(P=>{const oe=n.scope.allowedFloorIds.includes(P.id),B=P.id===b.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${oe?"":"opacity:0.6;"}" data-nav-scope="floor:${K(Q.projectId)}:${K(Q.buildingId)}:${K(P.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${B&&k>0?"pacom-dot--warning":P.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${K(S?.name??"")} ${K(P.name)}</div>
                      <div class="pacom-row-sub">${P.plan?"2D 平面控图就绪":"暂未上传平面图"}${B&&k>0?` · ${k} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${oe&&P.plan?"pacom-badge--online":"pacom-badge--neutral"}">${oe?P.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(q==="devices"){const Z=Ce(),y=de(),S=Array.from(J);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${E?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${E.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${me==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${me==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${me==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${me==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${me==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${Z.length} 台${i&&S.length?` · 已选 ${S.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ie("x",14)}</button>
          </div>
          ${y.length>0&&!re?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${pe==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${y.map(P=>`<button type="button" class="pacom-zone-pill ${pe===P.id?"is-active":""}" data-filter-zone="${K(P.id)}">${K(P.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${re?`<div class="pacom-alert-banner">${K(re)}</div>`:Z.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':Z.map(P=>{const oe=P.id===ye&&V,B=J.has(P.id),Se=P.connectivity==="offline",he=Se?"pacom-dot--critical":"pacom-dot--online",ge=Se?"离线":P.category==="lighting"?`${P.telemetry.dimming?.value??"--"}%`:P.category==="hvac"?`${P.telemetry.setpoint?.value??"--"}°C`:P.category==="sensor"?`${P.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${oe?"is-selected":""}" data-select-device="${K(P.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${i?`<input type="checkbox" name="devCheck-${K(P.id)}" data-check-device="${K(P.id)}" ${B?"checked":""} style="margin-top:3px;" aria-label="勾选 ${K(P.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${K(P.name)}</div>
                              <div class="pacom-row-sub">${K(De(P.logicalZoneId).replace(/^7F\s*/,""))} · ${K(zt[P.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${Se?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${he}"></span>${K(ge)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${i&&S.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${S.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(q==="zones"){const Z=de(),y={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${Z.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ie("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${Z.map(S=>{const P=p.filter(ge=>ge.logicalZoneId===S.id),oe=P.filter(ge=>ge.connectivity==="online").length,B=P.filter(ge=>ge.category==="lighting"||ge.category==="hvac").length,Se=pe===S.id,he=y[S.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${Se?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${Se?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${K(Se?"all":S.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${K(S.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${oe}/${P.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${he.temp} · ${he.occ}</div>
                  ${B>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${K(S.id)}" data-zone-val="true" ${i?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${K(S.id)}" data-zone-val="false" ${i?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${X.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ie("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${X.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':X.map(Z=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${K(Z.title)}</strong>
                      <span class="pacom-badge ${Z.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${Z.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${K(Z.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${K(Z.deviceId)}">定位设备</button>
                      ${Z.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${K(Z.id)}" ${r?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function ke(k){const Q=T,Z=de().length,y=Q.level==="floor"?"搜索设备或区域…":Q.level==="building"?"搜索楼层…":Q.level==="project"?"搜索楼宇…":"搜索园区…",S=Q.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${M&&q==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${p.length}</button>
          <button type="button" class="pacom-hud-pill ${M&&q==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${Z}</button>
          <button type="button" class="pacom-hud-pill ${k>0?"pacom-hud-pill--alert":""} ${M&&q==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${k}</button>
        `:Q.level==="building"?`
            <button type="button" class="pacom-hud-pill ${M?"is-active":""}" data-toggle-hud="1">楼层 ${je(Q.buildingId).length}</button>
            ${k>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${k}</button>`:""}
          `:Q.level==="project"?`
              <button type="button" class="pacom-hud-pill ${M?"is-active":""}" data-toggle-hud="1">楼宇 ${a.buildings.filter(P=>P.projectId===Q.projectId).length}</button>
              ${k>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${k}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${M?"is-active":""}" data-toggle-hud="1">园区 ${a.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${ie("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${y}" value="${K(ae)}" aria-label="${y}" />
          ${S}
        </div>
        ${M?`<div class="pacom-hud-sheet" data-role="hud-sheet">${fe(k)}</div>`:""}
      </div>
    `}function Te(k){if(te||T.level!=="building"&&T.level!=="floor")return"";const Q=T.buildingId,Z=T.projectId,y=je(Q);return!ce&&y.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${ce?`<button type="button" class="pacom-elev-item ${T.level==="building"?"is-active":""}" data-nav-scope="building:${K(Z)}:${K(Q)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${y.map(S=>{const P=n.scope.allowedFloorIds.includes(S.id),oe=T.level==="floor"&&T.floorId===S.id,B=S.id===b.floorId&&k>0;return`
              <button type="button" class="pacom-elev-item ${oe?"is-active":""} ${P?"":"is-locked"}"
                data-nav-scope="floor:${K(Z)}:${K(Q)}:${K(S.id)}"
                title="${K(S.name)}${P?B?` · ${k} 条告警`:"":"（无权限）"}">
                ${B?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${K(S.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function Re(k,Q){const Z=T;if(Z.level==="floor")return re?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${R==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${R==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${R==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${ie("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(f*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${ie("plus",14)}</button>
        </div>
      `;const y=p.length?Math.round(k/p.length*100):100,S=Z.level==="building"?"418 kWh":"1,248 kWh",P=Math.round(96.2*.45+93.6*.35+y*.2),oe=Z.level==="building"?je(Z.buildingId).find(B=>B.id===b.floorId)??je(Z.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${P}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="environment">
          <span>舒适度 <strong>96.2%</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="energy">
          <span>今日能耗 <strong>${S}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${Q>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${Q}</strong></span>
        </button>
        ${Z.level==="building"&&oe?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${K(Z.projectId)}:${K(Z.buildingId)}:${K(oe.id)}">进入 ${K(oe.name)} 平面图 →</button>`:""}
      </div>
    `}function Ue(k,Q){const Z=T,y=p.length?Math.round(k/p.length*100):100;if(Z.level==="all-projects")return`
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
            ${a.projects.map((B,Se)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${Se===0?50:28}%; top:${Se===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${K(B.id)}">
                  <span class="pacom-dot ${Q>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${K(B.name)} · 在线 ${y}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(Z.level==="project"){const B=a.projects.find(he=>he.id===Z.projectId)??a.projects[0],Se=a.buildings.filter(he=>!B||he.projectId===B.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${K(B?.imageUrl??"./media/gzlab.jpg")}" alt="${K(B?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${Se.map((he,ge)=>{const Ee=he.id===b.buildingId;return`
                  <button type="button" class="pacom-pin ${Ee?"is-selected":""}" style="left:${ge===0?56:38}%; top:${ge===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${K(he.projectId)}:${K(he.id)}">
                    <span class="pacom-dot ${Ee&&Q>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${K(he.name)} · ${Ee?`在线 ${y}% · 告警 ${Q}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(Z.level==="building"){const B=a.buildings.find(he=>he.id===Z.buildingId),Se=je(Z.buildingId).find(he=>he.id===b.floorId)??je(Z.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${K(B?.imageUrl??"./media/building-e.webp")}" alt="${K(B?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${Se?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${K(Z.projectId)}:${K(Z.buildingId)}:${K(Se.id)}">
                    <span class="pacom-dot ${Q>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${K(B?.name??"")} ${K(Se.name)} · 在线 ${k}/${p.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const S=a.floors.find(B=>B.id===Z.floorId),P=a.buildings.find(B=>B.id===Z.buildingId),oe=de();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${re?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${K(re)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${c}px, ${I}px) scale(${f});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${K(S?.plan?.imageUrl??"./media/floors/e/07F.webp")}" alt="${K(P?.name??"楼宇")} ${K(S?.name??"7F")} 平面图" />
                  ${oe.map((B,Se)=>{const he=Ta[B.id];if(!he)return"";const ge=pe===B.id,Ee=["23.2°C","24.6°C","22.8°C","23.9°C"],He=["有人 74%","会议中","有人 52%","空闲"],Ye=R==="temp"?` · ${Ee[Se%Ee.length]}`:R==="occupancy"?` · ${He[Se%He.length]}`:"",dt=R==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":R==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${ge?"is-active":""}"
                          style="left:${he.left}%; top:${he.top}%; width:${he.width}%; height:${he.height}%; ${ge?"":dt}"
                          data-filter-zone="${K(ge?"all":B.id)}"
                          title="${K(B.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${K(B.name.replace(/^7F\s*/,""))}${Ye}</span>
                        </button>`}).join("")}
                  ${p.filter(B=>B.planPoint).map(B=>{const Se=X.some(Ye=>Ye.deviceId===B.id&&Ye.status==="active"),he=M&&q==="alarms",ge=pe!=="all"&&B.logicalZoneId!==pe||he&&!Se,Ee=he&&Se?"background:var(--pacom-status-critical);":"",He=B.category==="gateway"?Math.min(92,B.planPoint.y*100+5.5):B.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${B.id===ye&&V?"is-selected":""} ${B.connectivity==="offline"?"pacom-pin--offline":""} ${ge?"pacom-pin--dimmed":""}"
                          style="left:${(B.planPoint.x*100).toFixed(2)}%; top:${He.toFixed(2)}%; ${Ee}"
                          data-pin-device="${K(B.id)}" title="${K(B.name)}">
                          <span class="pacom-dot ${Se?"pacom-dot--critical":B.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${K(Ct(B))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function Me(){if(T.level!=="floor"||!V)return"";const k=p.find(ge=>ge.id===ye);if(!k)return"";const Q=k.category==="lighting",Z=k.category==="hvac",y=Number(k.telemetry.dimming?.value??50),S=Number(k.telemetry.setpoint?.value??24),P=ue.has(k.id),oe=X.filter(ge=>ge.deviceId===k.id&&ge.status==="active"),B=Ae.filter(ge=>ge.deviceId===k.id&&ge.status!=="closed"),Se=Z?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:Q?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],he=Q?[{label:"当前开关",value:y>0?"开启":"关闭"},{label:"当前亮度",value:`${y}%`},{label:"实时功率",value:y>0?`${Math.round(y*1.4)} W`:"0 W"},{label:"运行模式",value:P?"人工覆盖":"自动策略"}]:Z?[{label:"室内温度",value:`${k.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${S.toFixed(1)}°C`},{label:"运行工况",value:k.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:P?"人工覆盖":"自动策略"}]:k.category==="sensor"?[{label:"实时温度",value:`${k.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${k.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${k.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:k.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:k.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:k.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:k.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:k.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${K(k.name)}</h2>
            <div class="pacom-row-sub">${K(De(k.logicalZoneId))} · ${K(zt[k.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${k.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${k.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${ie("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${le==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${le==="trend"}" data-drawer-tab="trend">趋势与告警${oe.length>0?` (${oe.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${le==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${le==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${he.map(ge=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${ge.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${K(ge.value)}</strong>
                  </div>`).join("")}
            </div>

            ${Z?`
                <div class="pacom-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${k.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${K(k.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${k.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${k.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${k.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${k.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${S.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${Q||Z?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${P&&i?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${K(k.id)}">恢复自动策略</button>`:i?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${k.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${Q?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${i?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${i?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${y}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${y}" data-ctrl-slider="lighting.dimming" ${i?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${i?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${i?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${S-.5}" ${i?"":"disabled"}>-0.5°C</button>
                        <strong>${S.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${S+.5}" ${i?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${ve?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${K(ve.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${ve.receipts.map(ge=>{const Ee=qa[ge.status]??{text:ge.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${K(ge.deviceId)}</strong> · ${K(ge.command)} → ${K(ge.targetValue)}</div>
                              ${ge.errorMessage?`<div style="color:var(--pacom-status-critical);">${K(ge.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${Ee.badge}">${Ee.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:le==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${Q?"亮度 %":Z?"温度 °C":k.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${K(k.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${k.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${Q?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":Z?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${oe.length===0&&B.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${oe.map(ge=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${K(ge.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${K(ge.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${B.map(ge=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${K(ge.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${K(ge.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${K(Ct(k))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${K(De(k.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${v?`<div class="pacom-info-banner">${K(v)}</div>`:""}
                ${Se.map(ge=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${K(ge.name)}">${K(ge.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${K(ge.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="pacom-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${ie("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${K(k.id)}</code> · v${k.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${k.planPoint?`x=${k.planPoint.x.toFixed(2)}, y=${k.planPoint.y.toFixed(2)} (图 v${k.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${k.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${k.hardwareBinding?`${k.hardwareBinding.protocol.toUpperCase()} · ${k.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function we(k,Q,Z){if(!x)return"";const y=Math.max(0,p.length-k),S=O==="week",P=X.filter(oe=>oe.status==="active").slice(0,2);return`
      <div class="pacom-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${S?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!S}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${S}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${ie("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${S?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${S?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${K(Z)}°C · ${k}/${p.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${Q} 告警 · ${y} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,ue.size)} 覆盖 · ${Ae.filter(oe=>oe.status!=="closed").length} 工单</strong></div>
        </div>
        ${P.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${P.map(oe=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${K(oe.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${K(oe.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function se(){if(a.projects.length===0){t.innerHTML=`
        <div class="pacom-shell" style="position:relative;">
          <header class="pacom-header">
            <div class="pacom-header-top">
              <div class="pacom-title-group">
                <h1 class="pacom-title">空间总览</h1>
                ${Je({tree:a,session:n,scope:T,activeAlarmCount:0,isOpen:!1,searchKeyword:""})}
              </div>
            </div>
          </header>
          <main class="pacom-spatial-stage" style="display:flex; align-items:center; justify-content:center; padding:24px;">
            <div class="dep-empty-card" style="max-width:520px; width:100%; background:var(--pacom-surface-card);">
              <div class="dep-empty-icon">${ie("building-2",20)}</div>
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
              <span class="pacom-row-sub" style="max-width:400px;">当前机构还未建立空间档案。先创建首个项目并添加楼宇、楼层与平面图，即可在此查看全景与实时设备态势。</span>
              <div class="dep-empty-steps">
                <span>1. 创建项目</span>
                <span>→</span>
                <span>2. 添加楼宇与楼层</span>
                <span>→</span>
                <span>3. 上传平面图</span>
              </div>
              <button type="button" class="pacom-btn pacom-btn--primary" data-go-create-first-project="1" ${n.scope.canEditDeployment?"":"disabled"}>+ 创建第一个项目</button>
            </div>
          </main>
        </div>
      `,t.querySelector("[data-go-create-first-project]")?.addEventListener("click",()=>{window.location.hash="#deployment?sec=projects&new=project"});return}const k=X.filter(y=>y.status==="active").length,Q=p.filter(y=>y.connectivity==="online").length,Z=p.find(y=>y.category==="sensor")?.telemetry.temp?.value??"23.4";t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${Je({tree:a,session:n,scope:T,activeAlarmCount:k,isOpen:Y,searchKeyword:$e})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${re?'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${x}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${Q}/${p.length} 在线 · ${K(Z)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${Da}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${we(Q,k,Z)}

        <main class="pacom-spatial-stage">
          ${ke(k)}
          ${Ue(Q,k)}
          ${Te(k)}
          ${Re(Q,k)}
          ${Me()}
        </main>
      </div>
    `,Ze()}function Ze(){tt(t,{onToggle:()=>{Y=!Y,Y&&(x=!1,M=!1),se(),Y&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:y=>{$e=y,se();const S=t.querySelector("[data-global-space-search]");S&&(S.focus(),S.setSelectionRange(y.length,y.length))},onPick:y=>{Y=!1,Fe(y)}}),t.querySelectorAll("[data-nav-scope]").forEach(y=>{y.addEventListener("click",S=>{S.stopPropagation(),y.dataset.navScope&&Fe(ne(y.dataset.navScope))})}),t.querySelectorAll("[data-hud-tab]").forEach(y=>{y.addEventListener("click",S=>{S.stopPropagation();const P=y.dataset.hudTab;M&&q===P?M=!1:(q=P,M=!0,Y=!1,x=!1),se()})}),t.querySelectorAll("[data-toggle-hud]").forEach(y=>{y.addEventListener("click",S=>{S.stopPropagation(),M=!M,M&&(Y=!1,x=!1),se()})}),t.querySelectorAll("[data-close-hud]").forEach(y=>{y.addEventListener("click",S=>{S.stopPropagation(),M=!1,se()})});const k=t.querySelector('[data-role="search"]');k?.addEventListener("focus",()=>{M||(M=!0,Y=!1,x=!1,u())}),k?.addEventListener("input",y=>{ae=y.currentTarget.value,M=!0,u()}),t.querySelector('[data-role="category"]')?.addEventListener("change",y=>{me=y.currentTarget.value,se()}),t.querySelectorAll("[data-filter-zone]").forEach(y=>{y.addEventListener("click",S=>{S.stopPropagation(),pe=y.dataset.filterZone??"all",se()})}),t.querySelectorAll("[data-select-device]").forEach(y=>{y.addEventListener("click",S=>{S.target.tagName!=="INPUT"&&(ye=y.dataset.selectDevice??null,V=!0,se())})}),t.querySelectorAll("[data-check-device]").forEach(y=>{y.addEventListener("change",()=>{const S=y.dataset.checkDevice;S&&(y.checked?J.add(S):J.delete(S),se())})}),t.querySelectorAll("[data-pin-device]").forEach(y=>{y.addEventListener("click",S=>{S.stopPropagation(),ye=y.dataset.pinDevice??null,V=!0,Y=!1,x=!1,se()})}),t.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{V=!1,se()}),t.querySelectorAll("[data-drawer-tab]").forEach(y=>{y.addEventListener("click",()=>{le=y.dataset.drawerTab??"control",v="",se()})}),t.querySelectorAll("[data-drawer-doc]").forEach(y=>{y.addEventListener("click",()=>{v=`已调阅「${y.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,se()})}),t.querySelectorAll("[data-briefing-period]").forEach(y=>{y.addEventListener("click",()=>{O=y.dataset.briefingPeriod??"today",se()})}),t.querySelectorAll("[data-go-alarm-id]").forEach(y=>{y.addEventListener("click",()=>{const S=y.dataset.goAlarmId??"";window.location.hash=S?`#alarms?alarm=${encodeURIComponent(S)}`:"#alarms"})}),t.querySelectorAll("[data-go-wo-id]").forEach(y=>{y.addEventListener("click",()=>{const S=y.dataset.goWoId??"";window.location.hash=S?`#alarms?wo=${encodeURIComponent(S)}`:"#alarms"})}),t.querySelector("[data-release-override]")?.addEventListener("click",y=>{const S=y.currentTarget.dataset.releaseOverride;S&&(ue.delete(S),se())}),t.querySelectorAll("[data-zone-power]").forEach(y=>{y.addEventListener("click",S=>{S.stopPropagation();const P=y.dataset.zonePower,oe=y.dataset.zoneVal==="true";if(!P)return;const B=p.filter(he=>he.logicalZoneId===P&&he.category==="lighting").map(he=>he.id),Se=p.filter(he=>he.logicalZoneId===P&&he.category==="hvac").map(he=>he.id);B.length?h(B,"lighting.power",oe):Se.length&&h(Se,"hvac.power",oe)})}),t.querySelectorAll("[data-locate-device]").forEach(y=>{y.addEventListener("click",()=>{const S=y.dataset.locateDevice;S&&(ye=S,V=!0,M=!1,se())})}),t.querySelectorAll("[data-go-alarms]").forEach(y=>{y.addEventListener("click",()=>{window.location.hash="#alarms"})}),t.querySelectorAll("[data-go-analysis]").forEach(y=>{y.addEventListener("click",()=>{const S=y.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(S)}`})}),t.querySelectorAll("[data-go-timeseries]").forEach(y=>{y.addEventListener("click",()=>{const S=y.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(S)}`})}),t.querySelectorAll("[data-toggle-briefing]").forEach(y=>{y.addEventListener("click",S=>{S.stopPropagation(),x=!x,x&&(Y=!1,M=!1),se()})}),t.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const y=p.filter(he=>he.connectivity==="online").length,S=X.filter(he=>he.status==="active").length,P=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${y}/${p.length}（离线 ${p.length-y} 台）`,`待处理告警：${S} 条`,`人工覆盖中：${ue.size} 台`].join(`
`),oe=new Blob([P],{type:"text/plain;charset=utf-8;"}),B=URL.createObjectURL(oe),Se=document.createElement("a");Se.href=B,Se.download="pacom-daily-briefing.txt",Se.click(),URL.revokeObjectURL(B)}),t.querySelectorAll("[data-ctrl-cmd]").forEach(y=>{y.addEventListener("click",()=>{if(!ye||!y.dataset.ctrlCmd)return;const S=y.dataset.ctrlVal??"",P=S==="true"?!0:S==="false"?!1:Number(S);h([ye],y.dataset.ctrlCmd,P)})}),t.querySelector("[data-ctrl-slider]")?.addEventListener("change",y=>{const S=y.currentTarget;!ye||!S.dataset.ctrlSlider||h([ye],S.dataset.ctrlSlider,Number(S.value))}),t.querySelectorAll("[data-batch-cmd]").forEach(y=>{y.addEventListener("click",()=>{const S=Array.from(J),P=y.dataset.batchVal??"",oe=P==="true"?!0:P==="false"?!1:P;h(S,y.dataset.batchCmd,oe)})}),t.querySelectorAll("[data-ack-alarm]").forEach(y=>{y.addEventListener("click",async()=>{!y.dataset.ackAlarm||T.level!=="floor"||!r||(await e.acknowledgeAlarm(y.dataset.ackAlarm,"首页快速确认"),X=await e.listAlarms(T.floorId),se())})}),t.querySelectorAll("[data-canvas-layer]").forEach(y=>{y.addEventListener("click",()=>{const S=y.dataset.canvasLayer;S&&(R=S,se())})}),t.querySelectorAll("[data-zoom]").forEach(y=>{y.addEventListener("click",()=>{const S=y.dataset.zoom;S==="in"?f=Math.min(2.6,Number((f+.2).toFixed(2))):S==="out"?f=Math.max(.6,Number((f-.2).toFixed(2))):(f=1,c=0,I=0),$()})}),t.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",y=>{y.preventDefault();const S=T;if(S.level!=="building"&&S.level!=="floor")return;const P=je(S.buildingId),oe=[...ce?[{level:"building",projectId:S.projectId,buildingId:S.buildingId}]:[],...P.map(he=>({level:"floor",projectId:S.projectId,buildingId:S.buildingId,floorId:he.id}))],B=oe.findIndex(he=>he.level==="building"?S.level==="building":he.level==="floor"&&S.level==="floor"&&he.floorId===S.floorId);if(B<0)return;const Se=Math.max(0,Math.min(oe.length-1,B+(y.deltaY>0?1:-1)));Se!==B&&oe[Se]&&Fe(oe[Se])},{passive:!1});const Z=t.querySelector('[data-role="canvas-stage"]');if(Z&&!re){let y=!1,S=!1,P=0,oe=0,B=0,Se=0;Z.addEventListener("pointerdown",ge=>{ge.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(y=!0,S=!1,P=ge.clientX,oe=ge.clientY,B=c,Se=I,Z.classList.add("is-panning"),Z.setPointerCapture?.(ge.pointerId))}),Z.addEventListener("pointermove",ge=>{if(!y)return;const Ee=ge.clientX-P,He=ge.clientY-oe;(Math.abs(Ee)>3||Math.abs(He)>3)&&(S=!0),c=B+Ee,I=Se+He,$()});const he=()=>{y&&(y=!1,Z.classList.remove("is-panning"),!S&&(M||Y||x)&&(M=!1,Y=!1,x=!1,se()))};Z.addEventListener("pointerup",he),Z.addEventListener("pointercancel",he),Z.addEventListener("wheel",ge=>{ge.preventDefault();const Ee=ge.deltaY<0?.12:-.12;f=Math.max(.6,Math.min(2.6,Number((f+Ee).toFixed(2)))),$()},{passive:!1}),Z.addEventListener("dblclick",ge=>{ge.target?.closest("button")||(f=1,c=0,I=0,$())})}else t.querySelector(".pacom-spatial-stage")?.addEventListener("click",y=>{y.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .pacom-briefing-pop")||(M||Y||x)&&(M=!1,Y=!1,x=!1,se())})}t.addEventListener("keydown",k=>{k.key==="Escape"&&(Y||x||M||V)&&(Y=!1,x=!1,M=!1,V=!1,se())}),await Fe(T,!0)}const Oa=new Set(["lighting","hvac","alarm_rules"]),Dt={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},ct=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function Ra(t){const e=new Set;for(const n of t.actions)n.command.startsWith("lighting")?e.add("照明"):n.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function Pa(t,e,n){const a=n?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function Na(t,e,n){let a=et(),i=!1,r="",[E,F,N,W]=await Promise.all([e.getSpatialTree(),e.listScenes(b.floorId),e.getRuntimeSettings(b.projectId),e.getFloorDevices(b.floorId).catch(()=>[])]),_="manual",ce="balanced",te="all",T=null,q="",M=!1,Y=!1,$e=!1,ae="all",me=null,pe="",C="",xe=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const be=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],ye=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],V=[{deviceId:W[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],le=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${N.calendar.workdayStart} – ${N.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${N.calendar.nightGuardStart} – 次日 ${N.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],v=e.subscribeFloorEvents(b.floorId,async O=>{O.type==="control.receipt.updated"&&T?.batchId===O.batchId&&(T=await e.getControlBatch(O.batchId),x())});function x(){const O=q.trim().toLowerCase(),R=O?F.filter(c=>`${c.name} ${c.description}`.toLowerCase().includes(O)):F,ue=N.rules.filter(c=>Oa.has(c.category)),J=te==="all"?ue:te==="cbm"?[]:ue.filter(c=>c.category===te),p=te==="all"||te==="cbm",X=ae==="issues"?be.filter(c=>c.status!=="verified"):be,Ae=ct.find(c=>c.id===ce)??ct[1],ve=n.scope.canControlDevices,re=n.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Je({tree:E,session:n,scope:a,isOpen:i,searchKeyword:r})}
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${xe.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${xe.length>0?`人工覆盖中：${xe.length} 台 ${ie("chevron-down",12)}`:`全部自动托管 ${ie("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${$e?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${be.length}）</button>
              ${_==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${M?"收起表单":"+ 新建场景"}</button>`:_==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${_==="manual"}" data-scene-tab="manual">快捷场景（${F.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${_==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${_==="rules"}" data-scene-tab="rules">条件联动（${ue.length+ye.length}）</button>
          </nav>
        </header>

        ${Y?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${xe.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${ie("x",16)}</button>
              </div>
              ${xe.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':xe.map(c=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${c.name}</div>
                            <div class="pacom-row-sub">${c.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${c.id}" ${ve?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${xe.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${ve?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${$e?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${ie("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${ae==="all"}" data-log-filter="all">全部（${be.length}）</button>
                  <button class="pacom-tab" aria-selected="${ae==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${X.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${X.map(c=>`
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
          ${pe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${pe}</span></div>`:""}
          ${C?`<div class="pacom-alert-banner">${C}</div>`:""}

          ${_==="manual"?`
              ${T?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${T.batchId}</span>
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
                            ${T.receipts.map(c=>`
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

              ${M?`
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
                          <span class="pacom-setting-title">联动动作列表（${V.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${V.map((c,I)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${I}" aria-label="目标设备">
                                ${W.map(A=>`<option value="${A.id}" ${A.id===c.deviceId?"selected":""}>${A.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${I}" aria-label="执行指令">
                                <option value="lighting.dimming" ${c.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${c.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${c.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${I}" value="${c.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${I}" ${V.length<=1?"disabled":""}>移除</button>
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
                <span class="pacom-row-sub">共 ${R.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${R.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':R.map(c=>{const I=Ra(c),A=c.actions.slice(0,3).map(de=>{const je=W.find(De=>De.id===de.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??de.deviceId,Fe=de.command==="lighting.dimming"?`亮度 ${de.targetValue}%`:de.command==="hvac.setpoint"?`设温 ${de.targetValue}°C`:de.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${je} → ${Fe}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${c.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${I.map(de=>`<span class="pacom-badge pacom-badge--accent">${de}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${c.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${c.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${A}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${c.lastExecutedAt?c.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${c.id}" ${ve?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:_==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Ae.title}</div>
                    <span class="pacom-kpi-delta">${Ae.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Ae.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Ae.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${xe.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${ct.map(c=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${ce===c.id}" data-oss-mode="${c.id}" ${ve?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${c.title}</strong>
                          <span class="pacom-badge ${ce===c.id?"pacom-badge--online":"pacom-badge--neutral"}">${ce===c.id?"当前生效":c.badge}</span>
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
                          ${le.map(c=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${c.name}</span>
                                    ${c.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${c.windowLabel}</div>
                                </td>
                                <td>${Pa(c.startHour,c.endHour,c.enabled)}</td>
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
                                      ${ve?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(c=>{const I=c==="all"?"全部":Dt[c]??c,A=c==="all"?ue.length+ye.length:c==="cbm"?ye.length:ue.filter(de=>de.category===c).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${te===c}" data-rule-cat="${c}">
                              <span>${I}</span><span class="pacom-count-num">${A}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${J.map(c=>{const I=me===c.id;return`
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
                                  ${re?"":"disabled"}
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
                    ${p?ye.map(c=>{const I=Math.min(100,Math.round(c.runtimeHours/c.thresholdHours*100));return`
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
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${c.enabled}" data-toggle-cbm="${c.id}" aria-label="切换 ${c.name}" ${re?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,tt(t,{onToggle:()=>{i=!i,x(),i&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:c=>{r=c,x();const I=t.querySelector("[data-global-space-search]");I&&(I.focus(),I.setSelectionRange(c.length,c.length))},onPick:c=>{a=c,i=!1,x()}}),t.querySelectorAll("[data-scene-tab]").forEach(c=>{c.addEventListener("click",()=>{_=c.dataset.sceneTab??"manual",pe="",x()})}),t.querySelectorAll("[data-toggle-overrides]").forEach(c=>{c.addEventListener("click",()=>{Y=!Y,x()})}),t.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{xe=[],pe="已释放全部人工覆盖设备，自动节能策略已恢复托管。",x()}),t.querySelectorAll("[data-release-one]").forEach(c=>{c.addEventListener("click",()=>{const I=c.dataset.releaseOne;xe=xe.filter(A=>A.id!==I),pe="已恢复该设备的自动策略托管。",x()})}),t.querySelectorAll("[data-toggle-cmdlog]").forEach(c=>{c.addEventListener("click",()=>{$e=!$e,x()})}),t.querySelectorAll("[data-log-filter]").forEach(c=>{c.addEventListener("click",()=>{ae=c.dataset.logFilter??"all",x()})}),t.querySelector("[data-close-batch]")?.addEventListener("click",()=>{T=null,x()}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(c=>{c.addEventListener("click",()=>{const I=c.dataset.ossMode;if(!I)return;ce=I;const A=ct.find(de=>de.id===I);pe=`已切换至「${A?.title??I}」模式（明日预测启动 ${A?.predictedStart??""}）。`,x()})}),t.querySelectorAll("[data-toggle-schedule]").forEach(c=>{c.addEventListener("click",()=>{const I=c.dataset.toggleSchedule,A=le.find(de=>de.id===I);A&&(A.enabled=!A.enabled,pe=`排程「${A.name}」已${A.enabled?"恢复启用":"临时暂停"}。`,x())})}),t.querySelectorAll("[data-rule-cat]").forEach(c=>{c.addEventListener("click",()=>{te=c.dataset.ruleCat??"all",x()})}),t.querySelectorAll("[data-expand-rule]").forEach(c=>{c.addEventListener("click",()=>{const I=c.dataset.expandRule??null;me=me===I?null:I,x()})}),t.querySelectorAll("[data-toggle-cbm]").forEach(c=>{c.addEventListener("click",()=>{const I=ye.find(A=>A.id===c.dataset.toggleCbm);I&&(I.enabled=!I.enabled,pe=`工时维保规则「${I.name}」已${I.enabled?"启用":"停用"}。`,x())})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(c=>{c.addEventListener("click",async()=>{C="";try{await e.toggleRuntimeRule(c.dataset.toggleStrategyRule,c.dataset.ruleNext==="true",Number(c.dataset.ruleVer)),N=await e.getRuntimeSettings(b.projectId),pe="条件联动规则状态与版本回执已更新。",x()}catch(I){C=I instanceof Error?I.message:String(I),x()}})}),t.querySelectorAll("[data-toggle-create]").forEach(c=>{c.addEventListener("click",()=>{M=!M,x()})}),t.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{V.push({deviceId:W[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),x()}),t.querySelectorAll("[data-del-draft-action]").forEach(c=>{c.addEventListener("click",()=>{const I=Number(c.dataset.delDraftAction);V.length>1&&(V.splice(I,1),x())})}),t.querySelectorAll("[data-draft-dev]").forEach(c=>{c.addEventListener("change",()=>{const I=V[Number(c.dataset.draftDev)];I&&(I.deviceId=c.value)})}),t.querySelectorAll("[data-draft-cmd]").forEach(c=>{c.addEventListener("change",()=>{const I=V[Number(c.dataset.draftCmd)];I&&(I.command=c.value)})}),t.querySelectorAll("[data-draft-val]").forEach(c=>{c.addEventListener("change",()=>{const I=V[Number(c.dataset.draftVal)];I&&(I.targetValue=c.value)})}),t.querySelector("[data-scene-search]")?.addEventListener("input",c=>{const I=c.currentTarget,A=I.selectionStart??I.value.length;q=I.value,x();const de=t.querySelector("[data-scene-search]");de&&(de.focus(),de.setSelectionRange(A,A))}),t.querySelectorAll("[data-exec-scene]").forEach(c=>{c.addEventListener("click",async()=>{C="";const I=F.find(A=>A.id===c.dataset.execScene);try{T=await e.executeScene(c.dataset.execScene),F=await e.listScenes(b.floorId),be.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:I?.name??"E7F 场景",action:`${T.receipts.length} 台设备联动下发`,status:"verified"}),x()}catch(A){C=A instanceof Error?A.message:String(A),x()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async c=>{c.preventDefault();const I=new FormData(c.currentTarget);try{await e.createScene({projectId:b.projectId,floorId:b.floorId,name:String(I.get("name")??""),description:String(I.get("description")??""),actions:V.map(A=>({deviceId:A.deviceId,command:A.command,targetValue:A.targetValue==="true"?!0:A.targetValue==="false"?!1:Number(A.targetValue)||50}))}),F=await e.listScenes(b.floorId),M=!1,pe=`快捷场景已保存（共绑定 ${V.length} 条联动动作）。`,x()}catch(A){C=A instanceof Error?A.message:String(A),x()}})}x(),window.addEventListener("hashchange",()=>v(),{once:!0})}const Tt={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function ht(t,e){return t.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':t.map(n=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${n.name}</span>
            <span class="pacom-badge pacom-badge--neutral">v${n.version}</span>
            <span class="pacom-badge pacom-badge--accent">${n.scopeLabel}</span>
          </span>
          <span class="pacom-setting-desc">${n.summary} · 回执：${n.receiptSummary??"已同步"}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${n.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${n.enabled?"true":"false"}"
            aria-label="切换 ${n.name}"
            data-toggle-rule="${n.id}"
            data-rule-ver="${n.version}"
            data-rule-next="${!n.enabled}"
            ${e?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function _a(t,e,n){let a="calendar",i=et(),r=!1,E="";const[F,N]=await Promise.all([e.getSpatialTree(),e.getRuntimeSettings(b.projectId)]);let W=N,_=W.calendar.workdayStart,ce=W.calendar.workdayEnd,te=W.calendar.nightGuardStart,T=W.calendar.nightGuardEnd,q=!0,M=[];const Y=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let $e="flat";const ae={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},me={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},pe={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},C={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},xe=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let be="",ye="";function V(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(x=>{const O=Tt[x];return`
                <button type="button" class="pacom-unified-item" aria-current="${a===x}" data-stab="${x}">
                  ${ie(O.icon,16)}
                  <span>${O.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function le(){const v=n.scope.canEditDeployment,x=F.projects[0]?.name??"当前项目",O=W.rules.filter(p=>p.category==="weather_area"),R=W.rules.filter(p=>p.category==="metering_carbon"),ue=W.rules.filter(p=>p.category==="templates"),J=Tt[a];t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Je({tree:F,session:n,scope:i,maxGranularity:"project",isOpen:r,searchKeyword:E})}
            </div>
            <div class="pacom-header-meta">
              ${v?"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${V()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${J.label}</h2>
                <p class="pacom-unified-subtitle">${J.subtitle}</p>
              </div>
              ${be?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${be}</span></div>`:""}
              ${ye?`<div class="pacom-alert-banner">${ye}</div>`:""}

              ${a==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${W.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${_}" aria-label="工作日上班时间" ${v?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${ce}" aria-label="工作日下班时间" ${v?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${te}" aria-label="夜间值守开始" ${v?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${T}" aria-label="夜间值守结束" ${v?"":"disabled"} />
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
                      <span class="pacom-row-sub">共 ${Y.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${Y.map(p=>`
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

                  ${M.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${M.length} 条</span>
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
                                ${M.map(p=>`
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
                            <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${v?"":"disabled"}>
                              <option value="guanzhou_station" ${ae.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${ae.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${x}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${ae.billingArea}" aria-label="计费面积" ${v?"":"disabled"} />
                          </div>
                        </div>
                        ${ht(O,v)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${$e==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${$e==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${$e==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${ae.tariffYuan}" aria-label="综合电价" ${v?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${ae.tariffPeak}" ${v?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${ae.tariffFlat}" ${v?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${ae.tariffValley}" ${v?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${v?"":"disabled"}>
                              <option value="0.5271" ${ae.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${ae.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${ht(R,v)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${v?"":"disabled"}>保存口径参数</button>
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
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${me.minTemp}" aria-label="最低设定温度" ${v?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${me.maxTemp}" aria-label="最高设定温度" ${v?"":"disabled"} />
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
                                <option value="2h" ${me.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${me.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${me.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${me.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${me.readbackTimeoutSec}" aria-label="回读超时阈值" ${v?"":"disabled"} />
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
                          ${ht(ue,v)}
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
                              <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${C.dailyDigestTime}" aria-label="每日简报发送时间" />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${C.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${C.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
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
                              <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${pe.delayMin}" ${v?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${pe.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${v?"":"disabled"}>
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
                                <option value="暖通运维组" ${pe.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${pe.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${pe.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${pe.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${v?"":"disabled"}>
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
                                ${xe.map(p=>`
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
    `,tt(t,{onToggle:()=>{r=!r,le(),r&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:p=>{E=p,le();const X=t.querySelector("[data-global-space-search]");X&&(X.focus(),X.setSelectionRange(p.length,p.length))},onPick:p=>{i=p,r=!1,le()}}),t.querySelectorAll("[data-stab]").forEach(p=>{p.addEventListener("click",()=>{a=p.dataset.stab??"calendar",be="",ye="",le()})}),t.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{q=!q,be=`法定节假日自动跳过已${q?"开启":"关闭"}。`,le()}),t.querySelector("[data-night-start]")?.addEventListener("change",p=>{te=p.currentTarget.value}),t.querySelector("[data-night-end]")?.addEventListener("change",p=>{T=p.currentTarget.value}),t.querySelector("[data-add-sd-form]")?.addEventListener("submit",p=>{p.preventDefault();const X=new FormData(p.currentTarget);Y.push({id:`sd-${Date.now()}`,date:String(X.get("date")??""),label:String(X.get("label")??""),mode:String(X.get("mode")??"保持工作日工况")}),be="已添加特殊例外日期，当日自动覆盖默认节假日排程。",le()}),t.querySelectorAll("[data-del-sd]").forEach(p=>{p.addEventListener("click",()=>{const X=Y.findIndex(Ae=>Ae.id===p.dataset.delSd);X>=0&&Y.splice(X,1),le()})}),t.querySelectorAll("[data-tariff-mode]").forEach(p=>{p.addEventListener("click",()=>{$e=p.dataset.tariffMode??"flat",le()})}),t.querySelectorAll("[data-energy-field]").forEach(p=>{p.addEventListener("change",()=>{const X=p.dataset.energyField;X&&(ae[X]=p.value)})}),t.querySelector("[data-save-energy]")?.addEventListener("click",()=>{be=$e==="flat"?`能耗计费与气象口径已保存（面积 ${ae.billingArea} m² · 综合电价 ¥${ae.tariffYuan}/kWh · 因子 ${ae.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${ae.tariffPeak} / 平 ¥${ae.tariffFlat} / 谷 ¥${ae.tariffValley}）。`,le()}),t.querySelectorAll("[data-guard-field]").forEach(p=>{p.addEventListener("change",()=>{const X=p.dataset.guardField;X&&(me[X]=p.value)})}),t.querySelector("[data-save-guard]")?.addEventListener("click",()=>{be=`控制保护参数已保存（温区 ${me.minTemp}–${me.maxTemp}°C · 超时 ${me.readbackTimeoutSec}s）。`,le()}),t.querySelectorAll("[data-auto-wo]").forEach(p=>{p.addEventListener("change",()=>{const X=p.dataset.autoWo;X&&(pe[X]=p.value),be="超时自动派单配置已更新。",le()})}),t.querySelectorAll("[data-toggle-autowo]").forEach(p=>{p.addEventListener("click",()=>{const X=p.dataset.toggleAutowo;X&&(pe[X]=!pe[X],be="自动派单保护策略已更新。",le())})}),t.querySelector("[data-digest-time]")?.addEventListener("change",p=>{C.dailyDigestTime=p.currentTarget.value,be=`每日晨间简报发送时刻已更新为 ${C.dailyDigestTime}。`,le()}),t.querySelectorAll("[data-notify-key]").forEach(p=>{p.addEventListener("click",()=>{const X=p.dataset.notifyKey;X&&(C[X]=!C[X],be="消息通知偏好已更新。",le())})}),t.querySelectorAll("[data-toggle-nr]").forEach(p=>{p.addEventListener("click",()=>{const X=xe.find(Ae=>Ae.id===p.dataset.toggleNr);X&&(X.enabled=!X.enabled,be=`工作组「${X.groupName}」的分流推送规则已${X.enabled?"启用":"停用"}。`,le())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",p=>{_=p.currentTarget.value}),t.querySelector("[data-cal-end]")?.addEventListener("change",p=>{ce=p.currentTarget.value}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{ye="",M=await e.previewCalendarImpact(b.projectId,_,ce),le()}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{ye="";try{const p=await e.saveWorkCalendar(b.projectId,_,ce,W.calendar.version);W={...W,calendar:{...p,nightGuardStart:te,nightGuardEnd:T}},be=`工作时间配置已保存至 v${p.version}（工作日 ${p.workdayStart}–${p.workdayEnd} · 夜间值守 ${te}–${T}）`,M=[],le()}catch(p){ye=p instanceof Error?p.message:String(p),le()}}),t.querySelectorAll("[data-toggle-rule]").forEach(p=>{p.addEventListener("click",async()=>{ye="";try{await e.toggleRuntimeRule(p.dataset.toggleRule,p.dataset.ruleNext==="true",Number(p.dataset.ruleVer)),W=await e.getRuntimeSettings(b.projectId),be="策略状态与版本回执已更新。",le()}catch(X){ye=X instanceof Error?X.message:String(X),le()}})})}le()}const Mt="pacom.web.sidebar.collapsed",Ba=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,yt=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],wt={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},Ot=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function $t(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in wt?t:"home"}function _e(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Ua(t,e,n,a){t.classList.remove("bare-login");let i=n,r=$t(),E=localStorage.getItem(Mt)==="1",F=!1,N=!1,W=!1,_=await e.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],ce=e.getActiveOrganizationId?.()??_[0]?.id??"org-gzlab",te="",T=!1,q=0,M={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const Y=e.mode==="demo"&&typeof e.switchDemoRole=="function";function $e(){return _.find(f=>f.id===ce)??_[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function ae(f){if(f.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const c=f.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${_e(c)}</span>`}async function me(){e.listOrganizations&&(_=await e.listOrganizations(),ce=e.getActiveOrganizationId?.()??_[0]?.id??"org-gzlab")}async function pe(){try{await me();const[f,c,I,A,de]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(b.floorId).catch(()=>[]),e.listAlarms(b.floorId).catch(()=>[]),e.listWorkOrders(b.floorId).catch(()=>[]),e.listScenes(b.floorId).catch(()=>[])]);M={devices:c,zones:f.zones,alarms:I,workOrders:A,scenes:de},q=I.filter(je=>je.status==="active").length,x()}catch{}}function C(){return yt.map(f=>`
        ${f.id==="settings"?'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${f.id}" aria-current="${r===f.id?"page":"false"}" title="${f.label}">
          ${ie(f.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${f.label}</span>
          ${f.id==="alarms"&&q>0?`<span class="pacom-nav-count" title="待处理告警 ${q} 条">${q}</span>`:""}
        </button>`).join("")}function xe(){const f=te.trim().toLowerCase(),c=f?yt.filter(h=>h.label.toLowerCase().includes(f)).slice(0,4):yt,I=f?M.devices.filter(h=>`${h.name} ${h.id} ${h.category}`.toLowerCase().includes(f)).slice(0,5):M.devices.slice(0,3),A=f?M.zones.filter(h=>h.name.toLowerCase().includes(f)).slice(0,3):[],de=f?M.alarms.filter(h=>`${h.title} ${h.message} ${h.id}`.toLowerCase().includes(f)).slice(0,4):M.alarms.filter(h=>h.status==="active").slice(0,2),je=f?M.workOrders.filter(h=>`${h.title} ${h.id}`.toLowerCase().includes(f)).slice(0,3):[],Fe=f?M.scenes.filter(h=>`${h.name} ${h.description}`.toLowerCase().includes(f)).slice(0,3):[],De=f?Ot.filter(h=>`${h.title} ${h.category}`.toLowerCase().includes(f)).slice(0,4):Ot.slice(0,2),Ce=[];return I.length&&Ce.push(`<div class="pacom-search-group">${f?"设备（空间总览）":"常用设备直达"}</div>`+I.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(h.name)}</span><span class="pacom-badge ${h.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${h.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),A.length&&Ce.push('<div class="pacom-search-group">功能区</div>'+A.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(h.id)}"><span>${_e(h.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),de.length&&Ce.push(`<div class="pacom-search-group">${f?"告警":"待处理告警"}</div>`+de.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(h.title)}</span><span class="pacom-badge pacom-badge--warning">${h.status==="active"?"待处理":"已确认"}</span></button>`).join("")),je.length&&Ce.push('<div class="pacom-search-group">运维工单</div>'+je.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(h.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),Fe.length&&Ce.push('<div class="pacom-search-group">智能策略</div>'+Fe.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${_e(h.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),De.length&&Ce.push('<div class="pacom-search-group">图纸与工程文档</div>'+De.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="${h.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_e(h.title)}</span><span class="pacom-badge pacom-badge--neutral">${_e(h.category)}</span></button>`).join("")),c.length&&Ce.push('<div class="pacom-search-group">工作区</div>'+c.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#${h.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${ie(h.icon,14)}${_e(h.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),Ce.length?Ce.join(""):`<div class="pacom-nav-empty">未找到与「${_e(te)}」匹配的设备、区域、告警、工单或图纸</div>`}function be(f){f.querySelectorAll("[data-search-hash]").forEach(c=>{c.addEventListener("click",()=>{const I=c.dataset.searchHash||"#home";T=!1,te="",ye(),F=!1,window.location.hash===I?(r=$t(),p(!0)):window.location.hash=I})})}function ye(){if(t.querySelector('[data-role="cmd-scrim"]')?.remove(),!T)return;const f=document.createElement("div");f.className="pacom-cmd-scrim",f.dataset.role="cmd-scrim",f.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${ie("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${_e(te)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${xe()}
        </div>
      </div>
    `,t.appendChild(f),f.addEventListener("click",A=>{A.target===f&&(T=!1,ye())});const c=f.querySelector('[data-role="cmd-input"]'),I=f.querySelector('[data-role="cmd-body"]');I&&be(I),c?.focus(),c?.addEventListener("input",A=>{te=A.currentTarget.value,I&&(I.innerHTML=xe(),be(I))})}function V(){if(!N)return"";const f=i.displayName.slice(0,1)||"U",c=!!(e.createOrganization&&i.scope.canEditDeployment);return`
      <div class="pacom-org-popover ${E?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${_.map(I=>{const A=I.id===ce;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${A}" data-pop-org="${_e(I.id)}">
                ${ae(I)}
                <span class="pacom-pop-text">
                  <b>${_e(I.name)}</b>
                  <small>${I.projectCount>0?`${I.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${A?ie("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${c?W?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${ie("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${ie("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${_e(f)}</span>
          <span class="pacom-pop-text">
            <b>${_e(i.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${Y?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">切换视角</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(Oe).map(I=>{const A=Oe[I],de=I===i.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${de}" data-pop-role="${I}">
                      <span class="pacom-pop-text">
                        <b>${_e(A.roleLabel)}</b>
                        <small>${_e(A.displayName)}</small>
                      </span>
                      ${de?ie("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${ie("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function le(f){switch(document.title=`${wt[r]} · PACOM Station`,r){case"home":await Ma(f,e,i);return;case"analysis":await Ea(f,e,i);return;case"alarms":await ga(f,e,i);return;case"scenes":await Na(f,e,i);return;case"settings":await _a(f,e,i);return;case"deployment":await za(f,e,i);return;case"account":await ra(f,e,i,c=>{i=c,p(!0)},v);return}}async function v(){N=!1,F=!1,T=!1,re();try{await e.logout()}finally{window.location.hash="#login",a()}}function x(){const f=t.querySelector('[data-role="nav-list"]');f&&(f.innerHTML=C(),R())}function O(){t.querySelector('[data-role="org-popover"]')?.remove();const f=t.querySelector('[data-role="org-menu-btn"]');if(f&&f.setAttribute("aria-expanded",String(N)),!N)return;const c=document.createElement("div");c.innerHTML=V().trim();const I=c.firstElementChild;I&&(t.appendChild(I),J())}function R(){t.querySelectorAll("[data-route]").forEach(f=>{f.addEventListener("click",()=>{const c=f.dataset.route;c===r&&!F||(r=c,F=!1,N=!1,window.location.hash=`#${r}`,p(!0))})})}async function ue(f){if(!e.switchOrganization)return;await e.switchOrganization(f),await me();const c=await e.getSpatialTree(),I=c.projects[0],A=I?c.buildings.find(je=>je.projectId===I.id):void 0,de=A?c.floors.find(je=>je.buildingId===A.id&&je.id===b.floorId)??c.floors.find(je=>je.buildingId===A.id):void 0;Ge(I&&A&&de?{level:"floor",projectId:I.id,buildingId:A.id,floorId:de.id}:I&&A?{level:"building",projectId:I.id,buildingId:A.id}:I?{level:"project",projectId:I.id}:{level:"all-projects"}),N=!1,W=!1,F=!1,await p(!0),pe()}function J(){t.querySelectorAll("[data-pop-org]").forEach(f=>{f.addEventListener("click",()=>{const c=f.dataset.popOrg;if(c){if(c===ce){N=!1,O();return}ue(c)}})}),t.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",f=>{f.stopPropagation(),W=!W,O(),W&&t.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),t.querySelector("[data-create-org-form]")?.addEventListener("submit",async f=>{if(f.preventDefault(),!e.createOrganization)return;const c=new FormData(f.currentTarget),I=String(c.get("orgName")??"").trim();if(!I)return;const A=await e.createOrganization(I);await ue(A.id)}),t.querySelectorAll('[data-pop-act="go-account"]').forEach(f=>{f.addEventListener("click",()=>{N=!1,W=!1,F=!1,r="account",window.location.hash="#account",p(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{v()}),t.querySelectorAll("[data-pop-role]").forEach(f=>{f.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const c=f.dataset.popRole;N=!1,W=!1,F=!1,i=await e.switchDemoRole(c),await p(!0)})})}async function p(f){const c=t.querySelector('[data-role="main-stage"]');if(!f&&c){const A=t.querySelector(".pacom-nav-rail");A&&(A.classList.toggle("is-collapsed",E),A.classList.toggle("is-mobile-open",F));const de=t.querySelector('[data-role="mobile-scrim"]');de&&de.classList.toggle("is-open",F),O();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${ie("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${wt[r]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${_e(i.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${F?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${E?"is-collapsed":""} ${F?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Ba}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${E?"展开侧栏":"收起侧栏"}" aria-label="${E?"展开侧栏":"收起侧栏"}">
              ${ie("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${ie("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${C()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${r==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${N}" title="${_e($e().name)} · ${_e(i.displayName)}">
              ${ae($e())}
              <span class="pacom-org-name">${_e($e().name)}</span>
              ${ie("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{E=!E,N=!1,localStorage.setItem(Mt,E?"1":"0");const A=t.querySelector(".pacom-nav-rail"),de=t.querySelector('[data-role="toggle-sidebar"]');A&&A.classList.toggle("is-collapsed",E),de&&(de.title=E?"展开侧栏":"收起侧栏",de.setAttribute("aria-label",de.title),de.innerHTML=ie("panel-left",16)),O()}),t.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{N=!1,O(),T=!0,ye()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{F=!F,p(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{F=!1,N=!1,p(!1)}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",A=>{A.stopPropagation(),N=!N,O()}),R(),O(),ye();const I=t.querySelector('[data-role="main-stage"]');I&&await le(I)}const X=f=>{const c=f.target;N&&!c?.closest('[data-role="org-popover"]')&&!c?.closest('[data-role="org-menu-btn"]')&&(N=!1,O())},Ae=f=>{if((f.metaKey||f.ctrlKey)&&f.key.toLowerCase()==="k"){f.preventDefault(),N=!1,O(),T=!T,ye();return}f.key==="Escape"&&(T?(T=!1,ye()):N?(N=!1,O()):F&&(F=!1,p(!1)))},ve=()=>{r=$t(),N=!1,F=!1,T=!1,p(!0),pe()};function re(){document.removeEventListener("click",X),document.removeEventListener("keydown",Ae),window.removeEventListener("hashchange",ve)}document.addEventListener("click",X),document.addEventListener("keydown",Ae),window.addEventListener("hashchange",ve),await p(!0),pe()}const Va=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Za='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Ha='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',at=ie("x",16),Rt={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},Wa={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Ga(t){const e=t.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:t}function Ve(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Pt(t,e,n){t.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,i=!1,r="",E="",F="",N="",W=!1,_={},ce="",te=!1,T="",q=0,M=null,Y=null,$e="privacy",ae="",me="",pe="";const C=e.mode==="demo"&&typeof e.switchDemoRole=="function";function xe(){M!==null&&(window.clearInterval(M),M=null),t.classList.remove("bare-login")}function be(){q=60,M!==null&&window.clearInterval(M),M=window.setInterval(()=>{q-=1,q<=0&&(q=0,M!==null&&(window.clearInterval(M),M=null));const v=t.querySelector('[data-act="send-sms"]');v&&(v.disabled=q>0,v.textContent=q>0?`${q} 秒后重发`:T?"重新获取":"获取验证码")},1e3)}function ye(){if(!Y)return"";if(Y==="reset")return`
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
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Ve(me)}" />
                  </div>
                </div>
                ${pe?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${Ve(pe)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(Y==="register")return`
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
              ${C?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">快捷登录</button>':""}
            </div>
          </section>
        </div>
      `;if(Y==="legal"){const v=Rt[$e],x=["privacy","terms","service"].map(O=>`<button type="button" role="tab" aria-selected="${$e===O}" class="au-legal-tab ${$e===O?"is-active":""}" data-act="switch-legal" data-tab="${O}">${Rt[O].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${at}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${x}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${v.items.map(O=>`<li>${Ve(O)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return Y==="contact"?`
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
      `:Y==="demoRoles"&&C?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择身份进入</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${at}</button>
            </div>
            <div class="db">
              <p class="au-dlead">选择对应岗位视角进入广州国家实验室工作台。</p>
              <div class="au-choice-list">
                ${Object.keys(Oe).map(v=>{const x=Oe[v];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${v}">
                        <div>
                          <b>${Ve(x.roleLabel)} · ${Ve(x.displayName)}</b>
                          <small>${Ve(Wa[v])}</small>
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
      `:""}function V(){const v=a?`
        <div class="au-field ${_.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ve(F)}" aria-invalid="${_.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${q>0?"disabled":""}>
              ${q>0?`${q} 秒后重发`:T?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Ve(_.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${T?`验证码已发送至 ${Ve(Ga(T))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${_.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ve(r)}" aria-invalid="${_.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Ve(_.id??"")}</p>
        </div>
      `,x=a?`
        <div class="au-field ${_.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ve(N)}" aria-invalid="${_.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Ve(_.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${_.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${i?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ve(E)}" aria-invalid="${_.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${i?"隐藏密码":"显示密码"}">
              ${i?Ha:Za}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Ve(_.pwd??"")}</p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Va}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${te?"disabled":""}>
                  ${v}
                  ${x}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${ce?"":"hidden"}>${Ve(ce)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${W?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${te?"disabled":""}>
                    ${te?"正在登录…":"登录"}
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
                ${C?`<div class="au-demo-bar">
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
      ${ye()}
    `,le()}function le(){const v=t.querySelector("#au-id"),x=t.querySelector("#au-pwd"),O=t.querySelector("#au-sphone"),R=t.querySelector("#au-scode"),ue=t.querySelector('input[name="keep"]');v?.addEventListener("input",()=>{if(r=v.value,_.id||ce){delete _.id,ce="",v.closest(".au-field")?.classList.remove("bad");const J=t.querySelector("#au-id-err");J&&(J.textContent="");const p=t.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),x?.addEventListener("input",()=>{if(E=x.value,_.pwd||ce){delete _.pwd,ce="",x.closest(".au-field")?.classList.remove("bad");const J=t.querySelector("#au-pwd-err");J&&(J.textContent="");const p=t.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),O?.addEventListener("input",()=>{if(F=O.value,_.sphone||ce){delete _.sphone,ce="",O.closest(".au-field")?.classList.remove("bad");const J=t.querySelector("#au-sphone-err");J&&(J.textContent="");const p=t.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),R?.addEventListener("input",()=>{if(N=R.value.replace(/\D/g,"").slice(0,6),R.value=N,_.scode||ce){delete _.scode,ce="",R.closest(".au-field")?.classList.remove("bad");const J=t.querySelector("#au-scode-err");J&&(J.textContent="");const p=t.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),ue?.addEventListener("change",()=>{W=ue.checked}),t.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{i=!i,V(),t.querySelector("#au-pwd")?.focus()}),t.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,_={},ce="",V(),t.querySelector(a?"#au-sphone":"#au-id")?.focus()}),t.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const J=F.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(J)){_={sphone:"请输入有效的手机号码"},V(),t.querySelector("#au-sphone")?.focus();return}_={},T=J,be(),V(),t.querySelector("#au-scode")?.focus()}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async J=>{if(J.preventDefault(),!te){if(_={},ce="",a?(F.trim()||(_.sphone="请输入手机号码"),/^\d{6}$/.test(N.trim())||(_.scode="请输入 6 位验证码")):(r.trim()||(_.id="请输入电子邮箱或手机号码"),E||(_.pwd="请输入密码")),Object.keys(_).length>0){V();const p=Object.keys(_)[0];t.querySelector(`#au-${p}`)?.focus();return}te=!0,V();try{const p=await e.login({account:(a?F:r).trim(),password:a?N.trim():E});xe(),n(p)}catch(p){te=!1,ce=p instanceof Error?p.message:"账户或密码不正确",V()}}}),t.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{me=r.trim(),pe="",Y="reset",V(),t.querySelector("#au-rs-id")?.focus()}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{Y="register",V()}),t.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{Y="legal",V()}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{ae="",Y="contact",V()}),t.querySelectorAll('[data-act="open-demo-roles"]').forEach(J=>{J.addEventListener("click",()=>{Y="demoRoles",V()})}),t.querySelectorAll('[data-act="close-modal"]').forEach(J=>{J.addEventListener("click",()=>{Y=null,V()})}),t.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",J=>{J.target===J.currentTarget&&(Y=null,V())}),t.querySelectorAll('[data-act="switch-legal"]').forEach(J=>{J.addEventListener("click",()=>{const p=J.dataset.tab;p&&($e=p,V())})}),t.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),ae="已复制"}catch{ae="support@pacom.cn"}V()}),t.querySelector("#au-reset-form")?.addEventListener("submit",J=>{J.preventDefault(),me=t.querySelector("#au-rs-id")?.value.trim()??"",me?pe="请联系机构管理员重置账号密码，或确认后查收重置邮件。":pe="请输入电子邮箱或手机号码",V()}),t.querySelectorAll('[data-act="pick-demo-role"]').forEach(J=>{J.addEventListener("click",async()=>{const p=J.dataset.roleId;if(!p||!e.switchDemoRole)return;const X=await e.switchDemoRole(p);xe(),n(X)})})}V()}async function Ka(){const t=document.getElementById("app");if(t)try{const e=oa(),n=await e.getSession(),a=async i=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Ua(t,e,i,()=>{Pt(t,e,r=>{a(r)})})};if(!n||window.location.hash==="#login"){Pt(t,e,i=>{a(i)});return}await a(n)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}Ka();
//# sourceMappingURL=index-DEYURg9R.js.map
