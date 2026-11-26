import{E as h,r as X,a as oa,e as m,b as ia,g as la,s as We,m as Xa,c as et,d as at,u as tt}from"./login-view-Clcqv1EO.js";import{R as Ne,a as xa}from"./contracts-RpwmUYDW.js";function st(){const t="2026-11-25T09:00:00Z",e=[];for(let p=1;p<=22;p+=1){const S=p===7?h.floorId:p===8?h.lockedFloor8Id:p===6?h.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${p}`,O=String(p).padStart(2,"0");e.push({id:S,buildingId:h.buildingId,kind:"above",level:p,name:`${p}F`,areaSqm:p===7?1383.1:p===1?2680:p<=4?1920:1480,plan:{floorId:S,imageUrl:`./media/floors/e/${O}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const i="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";e.push({id:i,buildingId:h.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:i,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}});const c=[];for(let p=1;p<=12;p+=1){const S=`structure-f-above-${p}`,O=String(p).padStart(2,"0");c.push({id:S,buildingId:h.buildingFId,kind:"above",level:p,name:`${p}F`,areaSqm:p===1?2450:p<=3?2100:1580,plan:{floorId:S,imageUrl:`./media/floors/f/${O}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const l="structure-f-roof-1";return c.push({id:l,buildingId:h.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:l,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}}),{projects:[{id:h.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"},{id:h.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:h.buildingId,projectId:h.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:h.buildingFId,projectId:h.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...e,...c],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:h.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:h.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:h.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:h.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:i,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:l,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const qa=st(),Sa=qa.floors.map(t=>t.id),ze={org_admin:{userId:"demo-org-admin",displayName:"林致远",role:"org_admin",roleLabel:Ne.org_admin,authMode:"demo",scope:{allowedProjectIds:[h.projectId,h.project1Id],allowedBuildingIds:[h.buildingId,h.buildingFId],allowedFloorIds:[...Sa],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",role:"project_admin",roleLabel:Ne.project_admin,authMode:"demo",scope:{allowedProjectIds:[h.projectId],allowedBuildingIds:[h.buildingId,h.buildingFId],allowedFloorIds:[...Sa],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",role:"operator",roleLabel:Ne.operator,authMode:"demo",scope:{allowedProjectIds:[h.projectId],allowedBuildingIds:[h.buildingId],allowedFloorIds:[h.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",role:"space_user",roleLabel:Ne.space_user,authMode:"demo",scope:{allowedProjectIds:[h.projectId],allowedBuildingIds:[h.buildingId],allowedFloorIds:[h.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},ea="pacom.web.demo.role",Ia="pacom.web.demo.spatial.v5",ka="pacom.web.demo.orgs.v1",Ea="pacom.web.demo.activeOrg.v1",Re="org-gzlab";class nt{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;constructor(){this.orgs=this.loadOrgs();const e=typeof localStorage<"u"?localStorage.getItem(Ea):null,i=this.orgs.find(p=>p.id===e)??this.orgs[0];this.activeOrgId=i.id,this.spatial=i.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const c=typeof sessionStorage<"u"?sessionStorage.getItem(ea):null;c&&ze[c]&&(this.activeSession=structuredClone(ze[c]),this.applyOverridesToSession());const l=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:h.projectId,buildingId:h.buildingId,floorId:h.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:h.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:l,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:h.projectId,buildingId:h.buildingId,floorId:h.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:h.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:h.projectId,buildingId:h.buildingId,floorId:h.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:h.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:h.projectId,buildingId:h.buildingId,floorId:h.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:h.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:l,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:l,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:l,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:h.projectId,buildingId:h.buildingId,floorId:h.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:h.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:l,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:h.projectId,buildingId:h.buildingId,floorId:h.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:h.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:l,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:l,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:l,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:h.projectId,buildingId:h.buildingId,floorId:h.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:h.projectId,buildingId:h.buildingId,floorId:h.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:h.projectId,buildingId:h.buildingId,floorId:h.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:h.projectId,buildingId:h.buildingId,floorId:h.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:l},{id:"conn-e7f-dali",projectId:h.projectId,buildingId:h.buildingId,floorId:h.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:l},{id:"conn-e7f-modbus",projectId:h.projectId,buildingId:h.buildingId,floorId:h.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:h.projectId,floorId:h.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:h.projectId,floorId:h.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:h.projectId,floorId:h.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:h.projectId,floorId:h.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:h.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:h.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:h.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:l,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:h.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:h.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:h.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:h.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(ze).map((p,S)=>({userId:p.userId,displayName:p.displayName,email:`${p.role.replaceAll("_",".")}@gzlab.ac.cn`,role:p.role,roleLabel:p.roleLabel,scopeSummary:p.scope.allowedZoneIds?.length?`E栋 7F（${p.scope.allowedZoneIds.length} 个授权功能区）`:`${p.scope.allowedProjectIds.length} 项目 / ${p.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:S===0?l:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const e=Date.now();for(const i of this.overrides)i.status==="active"&&new Date(i.expiresAt).getTime()<=e&&(i.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const e=ze[this.activeSession.role].scope,i=this.overrides.filter(c=>c.targetUserId===this.activeSession.userId&&c.status==="active");this.activeSession.scope.activeOverrides=structuredClone(i),this.activeSession.scope.canEditDeployment=e.canEditDeployment||i.some(c=>c.module==="deployment"),this.activeSession.scope.canEditSettings=e.canEditSettings||i.some(c=>c.module==="settings")}record(e,i,c,l,p){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:i,endpoint:c,request:p,response:l}),this.traces.length>40&&this.traces.pop()}pushAudit(e,i,c,l){const p=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:p?.displayName??"anonymous",role:p?.role??"space_user",action:e,target:i,result:c,detail:l})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const i=e.account.toLowerCase(),c=i.includes("org")||i.includes("admin")?"org_admin":i.includes("proj")?"project_admin":i.includes("space")||i.includes("member")?"space_user":"operator";return this.activeSession=structuredClone(ze[c]),this.applyOverridesToSession(),sessionStorage.setItem(ea,c),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(ea),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(ze[e]),this.applyOverridesToSession(),sessionStorage.setItem(ea,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(Ia);if(e){const i=JSON.parse(e);if(Array.isArray(i?.projects)&&Array.isArray(i?.buildings)&&Array.isArray(i?.floors)&&Array.isArray(i?.zones))return i}}}catch{}return structuredClone(qa)}loadOrgs(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(ka);if(e){const i=JSON.parse(e);if(Array.isArray(i)&&i.length>0&&i.every(c=>c?.id&&c?.name&&Array.isArray(c?.spatial?.projects)))return i}}}catch{}return[{id:Re,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const e=this.orgs.find(i=>i.id===this.activeOrgId);e&&(e.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(ka,JSON.stringify(this.orgs)),localStorage.setItem(Ea,this.activeOrgId),this.activeOrgId===Re&&localStorage.setItem(Ia,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(e=>({id:e.id,name:e.name,projectCount:e.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}async switchOrganization(e){const i=this.orgs.find(c=>c.id===e);if(!i)throw new Error(`404 NOT_FOUND: 机构 ${e} 不存在`);this.activeOrgId=i.id,this.spatial=i.spatial,this.persistSpatial()}async createOrganization(e){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const c=e.trim()||"新建机构",l={id:`org-${Date.now().toString(36)}`,name:c,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(l),this.activeOrgId=l.id,this.spatial=l.spatial,this.persistSpatial(),this.pushAudit("org.create",l.id,"success",c),{id:l.id,name:l.name,projectCount:0}}syncAdminScopesFromSpatial(){const e=this.spatial.projects.map(l=>l.id),i=this.spatial.buildings.map(l=>l.id),c=this.spatial.floors.map(l=>l.id);this.activeOrgId===Re&&(ze.org_admin.scope.allowedProjectIds=[...e],ze.org_admin.scope.allowedBuildingIds=[...i],ze.org_admin.scope.allowedFloorIds=[...c],ze.project_admin.scope.allowedBuildingIds=[...i],ze.project_admin.scope.allowedFloorIds=[...c]),this.activeSession&&((this.activeOrgId!==Re||this.activeSession.role==="org_admin")&&(this.activeSession.scope.allowedProjectIds=[...e]),(this.activeOrgId!==Re||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin")&&(this.activeSession.scope.allowedBuildingIds=[...i],this.activeSession.scope.allowedFloorIds=[...c]))}async getSpatialTree(){const e=this.requireSession();if(this.activeOrgId!==Re){const C=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:C.projects.length,buildings:C.buildings.length,floors:C.floors.length}),C}const i=this.spatial.projects.filter(C=>e.scope.allowedProjectIds.includes(C.id)),c=this.spatial.buildings.filter(C=>e.scope.allowedBuildingIds.includes(C.id)),l=new Set(c.map(C=>C.id)),p=this.spatial.floors.filter(C=>l.has(C.buildingId)),S=new Set(p.map(C=>C.id)),O=this.spatial.zones.filter(C=>S.has(C.floorId)),N=structuredClone({projects:i,buildings:c,floors:p,zones:O});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:N.projects.length,buildings:N.buildings.length,floors:N.floors.length}),N}async createProject(e){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权创建项目`);const c={id:`project-${Date.now().toString(36)}`,name:e.name.trim()||"新建项目",city:e.city?.trim()||"广州市",address:e.address?.trim()||"",timezone:"Asia/Shanghai",location:e.location,imageUrl:e.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(c),i.scope.allowedProjectIds.includes(c.id)||i.scope.allowedProjectIds.push(c.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",c,e),this.pushAudit("project.create",c.id,"success",c.name),structuredClone(c)}async updateProject(e,i){const c=this.requireSession();if(!c.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权修改项目配置`);const l=this.spatial.projects.find(p=>p.id===e);if(!l)throw new Error(`404 NOT_FOUND: 项目 ${e} 不存在`);return i.name!==void 0&&(l.name=i.name.trim()||l.name),i.city!==void 0&&(l.city=i.city.trim()),i.address!==void 0&&(l.address=i.address.trim()),i.location!==void 0&&(l.location=i.location),i.imageUrl!==void 0&&(l.imageUrl=i.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${e}`,l,i),this.pushAudit("project.update",e,"success",l.name),structuredClone(l)}async deleteProject(e){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权删除项目`);if(e===h.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const c=new Set(this.spatial.buildings.filter(p=>p.projectId===e).map(p=>p.id)),l=new Set(this.spatial.floors.filter(p=>c.has(p.buildingId)).map(p=>p.id));this.spatial.projects=this.spatial.projects.filter(p=>p.id!==e),this.spatial.buildings=this.spatial.buildings.filter(p=>p.projectId!==e),this.spatial.floors=this.spatial.floors.filter(p=>!c.has(p.buildingId)),this.spatial.zones=this.spatial.zones.filter(p=>!l.has(p.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${e}`,{ok:!0}),this.pushAudit("project.delete",e,"success")}async upsertBuilding(e){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权维护楼宇`);let c=e.id?this.spatial.buildings.find(l=>l.id===e.id):void 0;return c?(c.name=e.name.trim()||c.name,c.aboveFloors=Math.max(0,e.aboveFloors),c.belowFloors=Math.max(0,e.belowFloors),c.hasRoof=e.hasRoof,e.areaSqm!==void 0&&(c.areaSqm=e.areaSqm),e.imageUrl!==void 0&&(c.imageUrl=e.imageUrl)):(c={id:`building-${Date.now().toString(36)}`,projectId:e.projectId,name:e.name.trim()||"新建楼宇",aboveFloors:Math.max(1,e.aboveFloors),belowFloors:Math.max(0,e.belowFloors),hasRoof:e.hasRoof,areaSqm:e.areaSqm??null,imageUrl:e.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(c)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",c,e),this.pushAudit("building.upsert",c.id,"success",c.name),structuredClone(c)}async deleteBuilding(e){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权删除楼宇`);if(e===h.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const c=new Set(this.spatial.floors.filter(l=>l.buildingId===e).map(l=>l.id));this.spatial.buildings=this.spatial.buildings.filter(l=>l.id!==e),this.spatial.floors=this.spatial.floors.filter(l=>l.buildingId!==e),this.spatial.zones=this.spatial.zones.filter(l=>!c.has(l.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${e}`,{ok:!0}),this.pushAudit("building.delete",e,"success")}async upsertFloor(e){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权维护楼层`);const c=new Date().toISOString();let l=e.id?this.spatial.floors.find(p=>p.id===e.id):void 0;if(l)l.name=e.name.trim()||l.name,l.kind=e.kind,l.level=e.level,e.areaSqm!==void 0&&(l.areaSqm=e.areaSqm),e.planImageUrl!==void 0&&(l.plan=e.planImageUrl?{floorId:l.id,imageUrl:e.planImageUrl,planVersion:(l.plan?.planVersion??0)+1,updatedAt:c}:null);else{const p=`floor-${e.buildingId.slice(-6)}-${e.kind}-${Math.abs(e.level)}-${Date.now().toString(36).slice(-3)}`;l={id:p,buildingId:e.buildingId,kind:e.kind,level:e.level,name:e.name.trim()||`${e.level}F`,areaSqm:e.areaSqm??null,plan:e.planImageUrl?{floorId:p,imageUrl:e.planImageUrl,planVersion:1,updatedAt:c}:null},this.spatial.floors.push(l),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(l.id)&&this.activeSession.scope.allowedFloorIds.push(l.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:l.id,name:l.name,hasPlan:!!l.plan}),this.pushAudit("floor.upsert",l.id,"success",l.name),structuredClone(l)}async deleteFloor(e){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权删除楼层`);if(e===h.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(c=>c.id!==e),this.spatial.zones=this.spatial.zones.filter(c=>c.floorId!==e),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${e}`,{ok:!0}),this.pushAudit("floor.delete",e,"success")}async upsertZone(e){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权维护功能区`);let c=e.id?this.spatial.zones.find(l=>l.id===e.id):void 0;return c?(c.name=e.name.trim()||c.name,c.category=e.category):(c={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:e.floorId,name:e.name.trim(),category:e.category},this.spatial.zones.push(c)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",c),this.pushAudit("zone.upsert",c.id,"success",c.name),structuredClone(c)}async deleteZone(e){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(c=>c.id!==e),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${e}`,{ok:!0}),this.pushAudit("zone.delete",e,"success")}async copyZonesToFloors(e,i){const c=this.requireSession();if(!c.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权复制功能区`);const l=this.spatial.floors.find(O=>O.id===e),p=this.spatial.zones.filter(O=>O.floorId===e);if(!l||p.length===0)return 0;let S=0;for(const O of i){if(O===e)continue;const N=this.spatial.floors.find(z=>z.id===O);if(!N)continue;const C=new Set(this.spatial.zones.filter(z=>z.floorId===O).map(z=>z.name));for(const z of p){const re=z.name.replace(new RegExp(`^${l.name}\\s*`,"i"),""),oe=`${N.name} ${re}`.trim();C.has(oe)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:O,name:oe,category:z.category}),C.add(oe),S+=1)}}return S>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:e,targetCount:i.length,added:S}),S}async getFloorDevices(e){const i=this.requireSession();if(this.activeOrgId!==Re)return[];if(!i.scope.allowedFloorIds.includes(e)){const l={code:"FORBIDDEN",status:403,message:`当前角色「${i.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,l),this.pushAudit("floor.read",e,"denied",l.message),new Error(`403 FORBIDDEN: ${l.message}`)}if(e!==h.floorId)return[];let c=structuredClone(this.devices);return i.scope.allowedZoneIds?.length&&(c=c.filter(l=>l.logicalZoneId&&i.scope.allowedZoneIds.includes(l.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:c.length}),c}async dispatchControlBatch(e){const i=this.requireSession();if(!i.scope.canControlDevices||!i.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权下发控制指令`);const c=`batch-e7f-${Date.now().toString(36)}`,l={batchId:c,floorId:e.floorId,createdBy:i.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(p=>({deviceId:p.deviceId,command:p.command,targetValue:p.targetValue,status:"queued"}))};return this.batches.set(c,l),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",l,e),this.pushAudit("control.dispatch",c,"success",`下发 ${e.targets.length} 台设备`),l.receipts.forEach((p,S)=>{const O=this.devices.find(N=>N.id===p.deviceId);setTimeout(()=>{p.status="dispatched",p.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:c,deviceId:p.deviceId,status:"dispatched",at:p.dispatchedAt})},280+S*120),setTimeout(()=>{const N=new Date().toISOString();!O||O.connectivity==="offline"?(p.status="timeout",p.errorCode="GATEWAY_READBACK_TIMEOUT",p.errorMessage="设备离线，网关未收到回读确认",p.verifiedAt=N):(p.status="verified_success",p.observedValue=p.targetValue,p.verifiedAt=N,this.applyObservedTelemetry(O,p.command,p.targetValue,N)),this.emit({type:"control.receipt.updated",batchId:c,deviceId:p.deviceId,status:p.status,observedValue:p.observedValue,at:N})},900+S*220)}),structuredClone(l)}applyObservedTelemetry(e,i,c,l){i==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:c,collectedAt:l,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(c)>0,collectedAt:l,stale:!1})):(i==="lighting.power"||i==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:c,collectedAt:l,stale:!1}:i==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:c,collectedAt:l,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:l,values:{[i]:c}})}async getControlBatch(e){this.requireSession();const i=this.batches.get(e);if(!i)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(i)}async listAlarms(e){const i=this.requireSession();return this.activeOrgId!==Re?[]:!i.scope.allowedFloorIds.includes(e)||e!==h.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,i){const c=this.requireSession();if(!c.scope.canManageAlarms){const p=`角色「${c.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",p),new Error(`403 FORBIDDEN: ${p}`)}const l=this.alarms.find(p=>p.id===e);if(!l)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return l.status="acknowledged",l.acknowledgedAt=new Date().toISOString(),l.acknowledgedBy=c.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,l,{note:i}),this.pushAudit("alarm.acknowledge",e,"success",i),this.emit({type:"alarm.changed",floorId:l.floorId,alarmId:e,status:"acknowledged",at:l.acknowledgedAt}),structuredClone(l)}async listWorkOrders(e){const i=this.requireSession();return this.activeOrgId!==Re?[]:!i.scope.allowedFloorIds.includes(e)||e!==h.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const i=this.requireSession();if(!i.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权创建工单`);const c=new Date().toISOString(),l={id:`wo-e7f-${Date.now().toString(36)}`,projectId:h.projectId,buildingId:h.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:c,updatedAt:c};if(this.workOrders.unshift(l),e.alarmId){const p=this.alarms.find(S=>S.id===e.alarmId);p&&(p.workOrderId=l.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",l,e),this.pushAudit("work_order.create",l.id,"success",l.title),structuredClone(l)}async updateWorkOrderStatus(e,i){const c=this.requireSession();if(!c.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权流转工单`);const l=this.workOrders.find(p=>p.id===e);if(!l)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return l.status=i,l.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,l,{status:i}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${i}`),structuredClone(l)}async updateDevicePlanPoint(e){const i=this.requireSession();if(!i.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权编辑图纸标点`);const c=this.devices.find(l=>l.id===e.deviceId);if(!c)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(c.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${c.version}，请刷新后重试`);return c.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},c.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,c,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${c.planPoint.x}, ${c.planPoint.y})`),structuredClone(c)}async updateDeviceHardwareBinding(e){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权修改硬件绑定`);const c=this.devices.find(p=>p.id===e.deviceId);if(!c)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(c.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${c.version}）`);const l=new Date().toISOString();return c.physicalInstalled=e.physicalInstalled,c.physicalVerifiedAt=e.physicalInstalled?l:null,c.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:l,boundBy:i.displayName},c.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,c,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(c)}async listConnections(e){return this.requireSession(),this.activeOrgId!==Re?[]:structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),this.activeOrgId!==Re?[]:structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,i){const c=this.requireSession();if(!c.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权冻结交付批次`);const l=this.devices.filter(S=>S.physicalInstalled&&S.hardwareBinding).length,p={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:h.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:l,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:c.displayName,note:i||"例行交付基线冻结"};return this.deliveryBatches.unshift(p),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,p,{note:i}),this.pushAudit("delivery.freeze",p.id,"success",`${l}/${this.devices.length} 已现场核验`),structuredClone(p)}async getAnalysisReport(e,i,c){this.requireSession();const l=i==="today"?1:i==="7d"?7:30,S={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*l)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*l).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(C=>C.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*l).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*l).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*l).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],O=i==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],N={category:e,range:i,scopeId:c,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:S.kpis,unit:S.unit,series:S.base.map((C,z)=>({label:O[z],value:Math.round(C*(e==="energy"||e==="carbon"?l/2+.5:1)),baseline:Math.round(C*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:S.base[3],unit:S.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:S.base[4],unit:S.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:S.base[1],unit:S.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${i}&scopeId=${c}`,{kpis:N.kpis.length}),N}async listScenes(e){return this.requireSession(),this.activeOrgId!==Re?[]:structuredClone(this.scenes)}async createScene(e){const i=this.requireSession();if(!i.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权创建场景`);const c={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(c),this.record("REST","createScene","POST /api/v1/scenes",c,e),this.pushAudit("scene.create",c.id,"success",c.name),structuredClone(c)}async executeScene(e){const i=this.scenes.find(l=>l.id===e);if(!i)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const c=await this.dispatchControlBatch({floorId:i.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:i.actions,reason:`触发场景：${i.name}`});return i.lastExecutedAt=new Date().toISOString(),i.lastBatchId=c.batchId,c}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:h.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,i,c){this.requireSession();const l=c>=this.calendar.nightGuardStart?`下班时间 ${c} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,p=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${i} - ${c}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${i} (-30m) ~ ${c} (+30m)`,conflictWarning:l},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:l}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",p,{workdayStart:i,workdayEnd:c}),p}async saveWorkCalendar(e,i,c,l){const p=this.requireSession();if(!p.scope.canEditSettings)throw this.pushAudit("settings.calendar",h.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${p.roleLabel}」无权修改应用设置`);if(this.calendar.version!==l)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(i>=c)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:i,workdayEnd:c,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:i,workdayEnd:c,expectedVersion:l}),this.pushAudit("settings.calendar",h.projectId,"success",`${i}-${c}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,i,c){const l=this.requireSession();if(!l.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",e,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权启停应用设置规则`);const p=this.rules.find(S=>S.id===e);if(!p)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(p.version!==c)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${p.version}）`);return p.enabled=i,p.version+=1,p.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,p,{enabled:i,expectedVersion:c}),this.pushAudit("settings.rule_toggle",e,"success",i?"启用":"停用"),structuredClone(p)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,i){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",e,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const l=ze[i],p={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:i,roleLabel:l.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(p),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",p,{email:e,role:i}),this.pushAudit("org.invite",e,"success",l.roleLabel),structuredClone(p)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const e=this.requireSession();return this.reconcileOverrides(),e.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(i=>i.targetUserId===e.userId))}async grantOverride(e){const i=this.requireSession();if(!i.scope.canGrantOverride)throw this.pushAudit("override.grant",e.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const c=e.reason.trim();if(!c)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(e.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const l=this.members.find(O=>O.userId===e.targetUserId);if(!l)throw new Error(`404 NOT_FOUND: 目标成员 ${e.targetUserId} 不存在`);if(l.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const p=Date.now(),S={id:`ovr-${p.toString(36)}`,targetUserId:l.userId,targetUserName:l.displayName,module:e.module,durationHours:e.durationHours,grantedAt:new Date(p).toISOString(),expiresAt:new Date(p+e.durationHours*36e5).toISOString(),approvedBy:i.displayName,reason:c,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(S),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",S,e),this.pushAudit("override.grant",`${l.displayName} · ${e.module==="deployment"?"系统部署":"应用设置"}`,"success",`${e.durationHours}h · ${c}`),structuredClone(S)}async revokeOverride(e){const i=this.requireSession();if(!i.scope.canGrantOverride)throw this.pushAudit("override.revoke",e,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const c=this.overrides.find(l=>l.id===e);if(!c)throw new Error(`404 NOT_FOUND: 提权记录 ${e} 不存在`);return c.status="revoked",c.revokedAt=new Date().toISOString(),c.revokedBy=i.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${e}/revoke`,c),this.pushAudit("override.revoke",`${c.targetUserName} · ${c.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(c)}subscribeFloorEvents(e,i){return e!==h.floorId?()=>{}:(this.listeners.add(i),()=>{this.listeners.delete(i)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${h.floorId}`,e),this.listeners.forEach(i=>i(e))}}const da=["org_admin","project_admin","operator","space_user"],ot=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 · 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function J(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function pa(t){return t?t.slice(0,16).replace("T"," "):"—"}function aa(t){return t==="deployment"?"系统部署":"应用设置"}async function it(t,e,i,c,l){const p=i.scope.canManageMembers,S=i.scope.canGrantOverride,O=i.scope.canViewAuditLogs,N=S||i.role==="operator",C=i.role!=="space_user";let z="profile",re=C?await e.listOrgMembers().catch(()=>[]):[],oe=N?await e.listOverrides().catch(()=>[]):[],ue=O?await e.listAuditLogs().catch(()=>[]):[],ve="",ee="all",Q="all",Z="all",de=!1,ae=!1,le=i.displayName,me=i.role==="org_admin"?"机构负责人":i.role==="project_admin"?"项目负责人":i.role==="operator"?"运行值守工程师":"园区空间用户",M="138-0013-8072",pe="",K="";const $e={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function se(){const[F,d,f,j]=await Promise.all([e.getSession(),C?e.listOrgMembers().catch(()=>[]):Promise.resolve([]),N?e.listOverrides().catch(()=>[]):Promise.resolve([]),O?e.listAuditLogs().catch(()=>[]):Promise.resolve([])]);re=d,oe=f,ue=j,F&&(i=F,c(F)),q()}function T(){const F=["profile"];return C&&F.push("members","roles"),N&&F.push("overrides"),O&&F.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${F.map(d=>{const f=$e[d],j=d==="overrides"?oe.filter(r=>r.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${z===d}" data-anav="${d}">
                  ${X(f.icon,16)}
                  <span>${f.label}</span>
                  ${j>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${j}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function P(){return z==="members"&&p?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':z==="overrides"&&S?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':z==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 · SR 6.1</span>':""}function W(){const F=i.scope.activeOverrides.filter(f=>f.status==="active"),d=i.scope.allowedZoneIds?.length?`授权 ${i.scope.allowedFloorIds.length} 个楼层 · ${i.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${i.scope.allowedProjectIds.length} 个项目 · ${i.scope.allowedBuildingIds.length} 栋楼宇 · ${i.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${J(i.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${J(i.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${J(le)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${J(me)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${J(M)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${J(d)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${J(xa[i.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${J(i.roleLabel)}</span>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">当前写权限状态</span>
              <span class="pacom-setting-desc">写权限独立授予，绝不隐含在只读访问中</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <span class="pacom-badge ${i.scope.canControlDevices?"pacom-badge--online":"pacom-badge--neutral"}">设备控制：${i.scope.canControlDevices?"允许":"无"}</span>
              ${i.role==="space_user"?'<span class="pacom-badge pacom-badge--neutral">配置与管理模块：不可见</span>':`<span class="pacom-badge ${i.scope.canEditSettings?"pacom-badge--online":"pacom-badge--warning"}">应用设置：${i.scope.canEditSettings?"可改":"只读"}</span>
                     <span class="pacom-badge ${i.scope.canEditDeployment?"pacom-badge--online":"pacom-badge--warning"}">系统部署：${i.scope.canEditDeployment?"可改":"只读"}</span>`}
            </div>
          </div>
          ${F.length>0?F.map(f=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${J(aa(f.module))}（${f.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${J(f.approvedBy)} · 到期时间：${J(pa(f.expiresAt))} · 事由：${J(f.reason)}</span>
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
    `}function V(){const F=ve.trim().toLowerCase(),d=re.filter(f=>ee!=="all"&&f.role!==ee?!1:F?`${f.displayName} ${f.email} ${f.roleLabel} ${f.scopeSummary}`.toLowerCase().includes(F):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${J(ve)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${ee==="all"?"selected":""}>全部角色（${re.length}）</option>
            ${da.map(f=>`<option value="${f}" ${ee===f?"selected":""}>${J(Ne[f])}</option>`).join("")}
          </select>
        </div>
        <span class="pacom-row-sub">显示 ${d.length} / ${re.length} 人</span>
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
              ${d.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':d.map(f=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${J(f.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${J(f.displayName)}</div>
                                ${p?`<div class="pacom-row-sub">${J(f.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${f.role==="org_admin"||f.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${J(f.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${J(f.scopeSummary)}</span></td>
                          <td>
                            <span class="pacom-badge ${f.status==="active"?"pacom-badge--online":"pacom-badge--neutral"}">
                              ${f.status==="active"?"正常":f.status==="invited"?"邀请中":"已停用"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function te(){return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">四级标准角色说明</h2>
          <span class="pacom-row-sub">IEC 62443-3-3 SR 2.1 RE 2 · 最小权限与职责分离</span>
        </div>
        <div class="pacom-settings-card">
          ${da.map(F=>{const d=re.filter(f=>f.role===F).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${J(Ne[F])}</span>
                  <span class="pacom-setting-desc">${J(xa[F])}</span>
                </div>
                <span class="pacom-badge pacom-badge--neutral">${d} 人</span>
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
                ${ot.map(F=>`
                  <tr>
                    <td><strong style="font-weight:450;">${J(F.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${F.org_admin.tone}">${J(F.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${F.project_admin.tone}">${J(F.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${F.operator.tone}">${J(F.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${F.space_user.tone}">${J(F.space_user.text)}</span></td>
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
          <div class="pacom-kpi-value">${oe.filter(d=>d.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${oe.length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">每条审批与收回同步写入审计日志</span>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">限时提权审批记录</h2>
          <span class="pacom-row-sub">${S?"可为运营人员开启「系统部署」或「应用设置」限时修改权":"展示管理员为你授予的临时提权记录"}</span>
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
                  ${S?'<th style="text-align:right;">操作</th>':""}
                </tr>
              </thead>
              <tbody>
                ${oe.length===0?`<tr><td colspan="${S?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${S?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:oe.map(d=>`
                          <tr>
                            <td><strong style="font-weight:450;">${J(d.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${J(aa(d.module))}</span></td>
                            <td>
                              <div>${d.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${J(pa(d.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${J(d.approvedBy)}</div>
                              <div class="pacom-row-sub">${J(d.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${d.status==="active"?"pacom-badge--online":d.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${d.status==="active"?"生效中":d.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${S?`<td style="text-align:right;">
                                    ${d.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${J(d.id)}">提前收回</button>`:`<span class="pacom-row-sub">${d.revokedBy?`${J(d.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function he(){const F=ue.filter(d=>{if(Q==="success"&&d.result!=="success"||Q==="denied"&&d.result==="success")return!1;if(Z!=="all"){const f=`${d.action} ${d.target}`.toLowerCase();if(Z==="control"&&!f.includes("control")&&!f.includes("scene")||Z==="alarm"&&!f.includes("alarm")&&!f.includes("work")||Z==="deploy"&&!f.includes("deploy")&&!f.includes("plan")&&!f.includes("hardware")&&!f.includes("project")&&!f.includes("building")&&!f.includes("floor")&&!f.includes("zone")||Z==="settings"&&!f.includes("settings")||Z==="override"&&!f.includes("override"))return!1}return!0});return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
            <option value="all" ${Z==="all"?"selected":""}>全部操作类别</option>
            <option value="override" ${Z==="override"?"selected":""}>限时提权审批</option>
            <option value="control" ${Z==="control"?"selected":""}>设备控制与场景</option>
            <option value="alarm" ${Z==="alarm"?"selected":""}>告警与工单处置</option>
            <option value="deploy" ${Z==="deploy"?"selected":""}>系统部署与空间</option>
            <option value="settings" ${Z==="settings"?"selected":""}>应用设置变更</option>
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="按执行结果筛选">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${Q==="all"}" data-audit-filter="all">全部（${ue.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${Q==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${Q==="denied"}" data-audit-filter="denied">已拦截</button>
          </div>
        </div>
        <span class="pacom-row-sub">共 ${F.length} 条只读记录</span>
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
              ${F.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':F.map(d=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${J(d.action)}</div>
                            ${d.detail?`<div class="pacom-row-sub">${J(d.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${J(d.target)}</code></td>
                          <td>
                            <div>${J(d.actor)}</div>
                            <div class="pacom-row-sub">${J(Ne[d.role]??d.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${J(pa(d.at))}</span></td>
                          <td style="text-align:right;">
                            <span class="pacom-badge ${d.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                              ${d.result==="success"?"成功":"已拦截"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function x(){const F=[];if(de&&p){const d=i.role==="org_admin"?da:["project_admin","operator","space_user"];F.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="邀请成员">
          <form class="dep-modal-card" data-role="invite-form" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">邀请新成员</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${X("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">成员电子邮箱（唯一登录账号）</span>
                <input class="pacom-input" name="email" type="email" placeholder="colleague@gzlab.ac.cn" required />
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分配角色</span>
                <select class="pacom-select" name="role">
                  ${d.map(f=>`<option value="${f}">${J(Ne[f])}</option>`).join("")}
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
        </div>`)}if(ae&&S){const d=re.filter(f=>f.role==="operator");F.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="授予限时提权">
          <form class="dep-modal-card" data-role="grant-override-form" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">授予运营人员限时提权（SR 2.1 RE 3）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${X("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">目标运营人员</span>
                <select class="pacom-select" name="targetUserId" required>
                  ${d.length===0?'<option value="">暂无运营人员</option>':d.map(f=>`<option value="${J(f.userId)}">${J(f.displayName)}（${J(f.email)}）</option>`).join("")}
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
              <span class="pacom-row-sub">审批人：${J(i.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${d.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return F.join("")}function q(){const F=$e[z],d=P();t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${J(i.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${T()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${d?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${F.label}</h2>
                  <p class="pacom-unified-subtitle">${F.subtitle}</p>
                </div>
                ${d?`<div class="pacom-unified-head-actions">${d}</div>`:""}
              </div>
              ${pe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${J(pe)}</span></div>`:""}
              ${K?`<div class="pacom-alert-banner">${J(K)}</div>`:""}
              ${z==="profile"?W():z==="members"?V():z==="roles"?te():z==="overrides"?xe():he()}
            </div>
          </div>
        </div>
      </div>
      ${x()}
    `,Ie()}function Ie(){t.querySelectorAll("[data-anav]").forEach(d=>{d.addEventListener("click",()=>{z=d.dataset.anav??"profile",pe="",K="",q()})}),t.querySelector('[data-role="profile-form"]')?.addEventListener("submit",d=>{d.preventDefault();const f=new FormData(d.currentTarget);le=String(f.get("displayName")??"").trim()||i.displayName,me=String(f.get("jobTitle")??"").trim()||me,M=String(f.get("phone")??"").trim()||M,pe=`已保存个人资料：${le}（${me}）· ${M}`,q()}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",l()}),t.querySelector("[data-open-invite]")?.addEventListener("click",()=>{de=!0,ae=!1,q()}),t.querySelector("[data-open-grant]")?.addEventListener("click",()=>{ae=!0,de=!1,q()}),t.querySelectorAll("[data-close-modals]").forEach(d=>{d.addEventListener("click",()=>{de=!1,ae=!1,q()})}),t.querySelectorAll("[data-modal-scrim]").forEach(d=>{d.addEventListener("click",f=>{f.target===d&&(de=!1,ae=!1,q())})}),t.querySelector("[data-member-search]")?.addEventListener("input",d=>{const f=d.currentTarget,j=f.selectionStart??f.value.length;ve=f.value,q();const r=t.querySelector("[data-member-search]");r&&(r.focus(),r.setSelectionRange(j,j))}),t.querySelector("[data-role-filter]")?.addEventListener("change",d=>{ee=d.currentTarget.value,q()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async d=>{d.preventDefault(),K="";const f=new FormData(d.currentTarget);try{const j=await e.inviteOrgMember(String(f.get("email")??""),String(f.get("role")));de=!1,pe=`已向 ${j.email} 发送「${j.roleLabel}」邀请。`,await se()}catch(j){K=j instanceof Error?j.message:String(j),q()}}),t.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async d=>{d.preventDefault(),K="";const f=new FormData(d.currentTarget);try{const j=await e.grantOverride({targetUserId:String(f.get("targetUserId")??""),module:String(f.get("module")??"deployment"),durationHours:Number(f.get("durationHours")??8),reason:String(f.get("reason")??"")});ae=!1,pe=`已为「${j.targetUserName}」开启「${aa(j.module)}」${j.durationHours} 小时限时修改权，到期自动收回。`,await se()}catch(j){K=j instanceof Error?j.message:String(j),q()}}),t.querySelectorAll("[data-revoke-override]").forEach(d=>{d.addEventListener("click",async()=>{const f=d.dataset.revokeOverride;if(f){K="";try{const j=await e.revokeOverride(f);pe=`已提前收回「${j.targetUserName}」的「${aa(j.module)}」限时修改权。`,await se()}catch(j){K=j instanceof Error?j.message:String(j),q()}}})}),t.querySelectorAll("[data-audit-filter]").forEach(d=>{d.addEventListener("click",()=>{Q=d.dataset.auditFilter??"all",q()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",d=>{Z=d.currentTarget.value??"all",q()})}q()}const Ze={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},lt={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},ct={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function rt(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function dt(t){return t.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:t.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function ua(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("vav")||t.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:e.includes("co₂")||e.includes("co2")||t.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function pt(t,e,i){const c=new URLSearchParams(window.location.hash.split("?")[1]??""),l=c.get("alarm"),p=c.get("wo"),S=i.scope.canManageAlarms;let O=await e.getSpatialTree(),N=la(),C=!1,z="",re=[],oe=[],ue=[],ve=p?"workorders":"alarms",ee="all",Q="all",Z="all",de="impact",ae=!1,le="",me=l,M=p,pe=null,K=null,$e="resolved";const se=new Set,T=new Map,P=new Map,W=new Map,V=new Map;let te="",xe="";function he(d){const f=V.get(d.id);if(f)return f;const j=d.id.match(/(\d+)$/),r=`WO-2026-${j?j[1]:d.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,L={estCost:"¥ 450",actualCost:d.status==="closed"?"¥ 380":"--",cmmsNo:r,assigneeGroup:"暖通运维组",tasks:[{id:`${d.id}-t1`,label:"核查设备供电与现场指示灯状态",done:d.status!=="open"},{id:`${d.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:d.status==="resolved"||d.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:d.createdAt?d.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${r}）`}]};return V.set(d.id,L),L}async function x(){[re,oe,ue]=await Promise.all([e.listAlarms(h.floorId),e.listWorkOrders(h.floorId),e.getFloorDevices(h.floorId).catch(()=>[])]),oe.forEach(d=>he(d)),F()}function q(d){if(!d)return{name:"楼层通用",zone:"E7F",dev:null};const f=ue.find(j=>j.id===d)??null;return f?{name:f.name,zone:(f.logicalZoneId?ct[f.logicalZoneId]:void 0)??"E7F",dev:f}:{name:d,zone:"E7F",dev:null}}function Ie(d){const f=q(d.deviceId).dev;f&&f.connectivity==="offline"?W.set(d.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${f.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):W.set(d.id,{verdict:"pass",summary:`自检通过（PASS）：「${f?.name??d.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),me=d.id,F()}function F(){const d=re.filter(y=>y.status==="active"&&!T.has(y.id)),f=oe.filter(y=>!he(y).cancelled&&(y.status==="open"||y.status==="assigned"||y.status==="in_progress")),j=re.filter(y=>y.status!=="active").length+P.size,r=0,L=T.size,B=le.trim().toLowerCase(),ge=re.filter(y=>{const b=T.has(y.id);if(ee==="snoozed"){if(!b)return!1}else if(ee==="active"){if(y.status!=="active"||b)return!1}else if(ee==="acknowledged"){if(y.status!=="acknowledged")return!1}else if(b)return!1;if(Z!=="all"&&y.severity!==Z)return!1;if(!B)return!0;const R=q(y.deviceId);return`${y.title} ${y.message} ${R.name} ${R.zone} ${y.deviceId}`.toLowerCase().includes(B)}),Fe=new Map;for(const y of ge){const b=`${y.title} ${y.message}`.toLowerCase(),R=b.includes("离线")||b.includes("modbus")||b.includes("通信"),U=ae?R?"root-gateway-modbus":y.deviceId:y.id,ie=R?"根因：E7F 主控网关通信链路":`根因：${q(y.deviceId).name}`,De=Fe.get(U)??{rootLabel:ie,items:[]};De.items.push(y),Fe.set(U,De)}const Te=Array.from(Fe.values());de==="impact"&&Te.sort((y,b)=>ua(b.items[0]).costYuan-ua(y.items[0]).costYuan);const Se=oe.filter(y=>{const b=he(y);if(Q==="cancelled"){if(!b.cancelled)return!1}else if(b.cancelled||Q==="open"&&(y.status==="resolved"||y.status==="closed")||Q==="resolved"&&y.status!=="resolved"||Q==="closed"&&y.status!=="closed")return!1;if(!B)return!0;const R=q(y.deviceId);return`${y.title} ${y.description} ${y.id} ${b.cmmsNo} ${R.name}`.toLowerCase().includes(B)});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${oa({tree:O,session:i,scope:N,activeAlarmCount:d.length,isOpen:C,searchKeyword:z})}
            </div>

            <div class="pacom-header-meta">
              ${ve==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${ae}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${i.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${i.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${X("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ve==="alarms"}" data-main-tab="alarms">实时告警（${re.length-L}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ve==="workorders"}" data-main-tab="workorders">运维工单（${oe.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ve==="alarms"&&ee==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${d.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ve==="workorders"&&Q==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${f.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ve==="alarms"&&ee==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${j}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${r}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${te?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${m(te)}</span></div>`:""}
          ${xe?`<div class="pacom-alert-banner">${m(xe)}</div>`:""}

          ${ve==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${m(le)}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${Z==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${Z==="critical"?"selected":""}>严重</option>
                      <option value="major" ${Z==="major"?"selected":""}>重要</option>
                      <option value="minor" ${Z==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${de==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${de==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${ee==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${ee==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${ee==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${ee==="snoozed"}" data-status-pill="snoozed">已忽略（${L}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${se.size>0&&i.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${se.size}）</button>`:""}
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
                          ${Te.map(y=>{const b=y.items[0],R=lt[b.severity]??{label:b.severity,cls:"pacom-badge--neutral"},U=q(b.deviceId),ie=dt(b),De=ua(b),_e=me===b.id,ye=T.get(b.id),Oe=!!ye,Pe=se.has(b.id),H=W.get(b.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${m(b.id)}" data-check-alarm="${m(b.id)}" ${Pe?"checked":""} ${!S||b.status!=="active"||Oe?"disabled":""} aria-label="选择 ${m(b.title)}" />
                                  </td>
                                  <td><span class="pacom-badge ${R.cls}">${m(R.label)}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${m(b.title)}</span>
                                      ${ae?`<span class="pacom-badge pacom-badge--accent">${m(y.rootLabel)}${y.items.length>1?` · 影响 ${y.items.length} 项`:""}</span>`:""}
                                      ${H?`<span class="pacom-badge ${H.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${m(H.verdict.toUpperCase())}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${m(b.message)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${m(U.name)}</div>
                                    <div class="pacom-row-sub">${m(U.zone)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${m(De.costLabel)}</div>
                                    <div class="pacom-row-sub">${m(De.comfortLabel)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${m(ie.duration)}</div>
                                    <div class="pacom-row-sub" style="color:${ie.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${m(ie.trend)}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${Oe?"pacom-badge--neutral":b.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Oe?`忽略 ${m(ye?.duration)}`:b.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Oe?`<button class="pacom-btn" data-unsnooze="${m(b.id)}" ${S?"":"disabled"}>恢复监控</button>`:`
                                            ${b.status==="active"?`<button class="pacom-btn" data-mark-actioned="${m(b.id)}" ${S?"":"disabled"}>标记已处置</button>`:""}
                                            ${b.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${m(b.id)}" ${S?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${m(b.id)}">${_e?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${_e?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${m(rt(b))}
                                            </div>
                                            ${ye?`<div class="pacom-info-banner">忽略周期：${m(ye.duration)} · 原因备注：${m(ye.reason)}</div>`:""}
                                            ${H?`
                                                <div class="pacom-banner ${H.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${m(H.summary)}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${H.steps.map(ne=>`<span>${m(ne)}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${m(b.id)}</code> · 设备编号 <code>${m(b.deviceId)}</code> · 关联工单 ${m(b.workOrderId??"无")}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${m(b.id)}">单机自检（FTT）</button>
                                              ${!Oe&&b.status==="active"?`<button class="pacom-btn" data-open-snooze="${m(b.id)}" ${S?"":"disabled"}>限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${m(b.deviceId)}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${m(b.deviceId)}">定位设备 →</button>
                                            </div>
                                            ${pe===b.id?`
                                                <form data-snooze-form="${m(b.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
                                                    <button class="pacom-btn pacom-btn--primary" type="submit" style="height:28px;" ${S?"":"disabled"}>确认忽略</button>
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
              ${(()=>{const y=M?oe.find(b=>b.id===M)??null:null;if(y){const b=q(y.deviceId),R=he(y),U=!!(!S||R.cancelled||y.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${m(y.id)}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${m(y.title)}</h2>
                        <span class="pacom-badge pacom-badge--accent">${m(R.cmmsNo)}</span>
                        ${R.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${m(y.id)}" data-wo-status="${m(y.id)}" aria-label="更新工单状态" ${U?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(ie=>`<option value="${ie}" ${y.status===ie?"selected":""}>${Ze[ie]}</option>`).join("")}
                          <option value="cancelled" ${R.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${K===y.id?`
                        <form data-close-wo-form="${m(y.id)}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${Ze[$e]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${m(R.cause??"")}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${m(R.solution??"")}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${m(R.actualCost==="--"?"":R.actualCost)}" />
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" ${S?"":"disabled"}>保存并更新状态</button>
                          </div>
                        </form>`:""}
                    <div class="pacom-wo-workbench">
                      <div style="display:flex; flex-direction:column; gap:14px;">
                        <div class="pacom-card" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:500;">工单描述与现场检查任务清单</strong>
                          <div class="pacom-row-sub">${m(y.description)}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${R.tasks.map(ie=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${m(ie.id)}" data-wo-task="${m(y.id)}" data-task-id="${m(ie.id)}" ${ie.done?"checked":""} ${U?"disabled":""} />
                                    <span>${m(ie.label)}</span>
                                  </span>
                                  ${ie.unit?`<span class="pacom-row-sub">实测：${m(ie.reading??"--")} ${m(ie.unit)}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${R.history.map(ie=>`<span>• <span class="pacom-row-sub">${m(ie.at)}</span> — ${m(ie.text)}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${m(y.id)}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${m(R.cmmsNo)}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${m(b.name)}（${m(b.zone)}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${m(R.assigneeGroup)}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${m(R.estCost)} / 实际 ${m(R.actualCost)}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${m(R.cause??"待完单填写")}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${m(R.solution??"待完单填写")}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${m(y.deviceId??"")}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${m(y.deviceId??"")}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${m(le)}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${Q==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${Q==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${Q==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${Q==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${Q==="cancelled"}" data-wo-pill="cancelled">已取消</button>
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
                            ${Se.map(b=>{const R=q(b.deviceId),U=he(b),ie=!!(!S||U.cancelled||b.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${m(b.title)}</span>
                                        ${U.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${m(b.description)} · <code>${m(b.id)}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${m(R.name)}</div>
                                      <div class="pacom-row-sub">${m(R.zone)}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${m(U.cmmsNo)}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${m(U.assigneeGroup)} · 预估 ${m(U.estCost)}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${m(b.id)}" data-wo-status="${m(b.id)}" aria-label="更新工单状态" ${ie?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(De=>`<option value="${De}" ${b.status===De?"selected":""}>${Ze[De]}</option>`).join("")}
                                          <option value="cancelled" ${U.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${m(b.id)}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${K===b.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${m(b.id)}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${Ze[$e]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${m(U.cause??"")}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${m(U.solution??"")}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${m(U.actualCost==="--"?"":U.actualCost)}" />
                                            </div>
                                            <div style="display:flex; justify-content:flex-end; gap:8px;">
                                              <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                                              <button class="pacom-btn pacom-btn--primary" type="submit" ${S?"":"disabled"}>保存并更新状态</button>
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
    `,ia(t,{onToggle:()=>{C=!C,F(),C&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:y=>{z=y,F();const b=t.querySelector("[data-global-space-search]");b&&(b.focus(),b.setSelectionRange(y.length,y.length))},onPick:y=>{N=y,C=!1,F()}}),t.querySelectorAll("[data-main-tab]").forEach(y=>{y.addEventListener("click",()=>{ve=y.dataset.mainTab??"alarms",te="",F()})}),t.querySelectorAll("[data-kpi-filter]").forEach(y=>{y.addEventListener("click",()=>{const b=y.dataset.kpiFilter;te="",b==="workorders"?(ve="workorders",Q=Q==="open"?"all":"open"):(b==="active"||b==="acknowledged")&&(ve="alarms",ee=ee===b?"all":b),F()})}),t.querySelectorAll("[data-status-pill]").forEach(y=>{y.addEventListener("click",()=>{ee=y.dataset.statusPill??"all",F()})}),t.querySelectorAll("[data-wo-pill]").forEach(y=>{y.addEventListener("click",()=>{Q=y.dataset.woPill??"all",F()})}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{te="",x()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{ae=!ae,F()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",y=>{Z=y.currentTarget.value,F()}),t.querySelector("[data-alarm-sort]")?.addEventListener("change",y=>{de=y.currentTarget.value??"impact",F()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",y=>{const b=y.currentTarget,R=b.selectionStart??b.value.length;le=b.value,F();const U=t.querySelector("[data-alarm-search]");U&&(U.focus(),U.setSelectionRange(R,R))}),t.querySelectorAll("[data-check-alarm]").forEach(y=>{y.addEventListener("change",()=>{if(!S)return;const b=y.dataset.checkAlarm;b&&(y.checked?se.add(b):se.delete(b),F())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{if(!S)return;xe="";const y=Array.from(se);try{for(const b of y)await e.acknowledgeAlarm(b,"告警中心批量确认"),P.set(b,"批量确认处置");se.clear(),te=`已批量确认 ${y.length} 条告警，未来 24 小时持续校验无复发。`,await x()}catch(b){xe=b instanceof Error?b.message:String(b),F()}}),t.querySelectorAll("[data-expand-alarm]").forEach(y=>{y.addEventListener("click",()=>{const b=y.dataset.expandAlarm??null;me=me===b?null:b,pe=null,F()})}),t.querySelectorAll("[data-expand-wo]").forEach(y=>{y.addEventListener("click",()=>{const b=y.dataset.expandWo??null;M=M===b?null:b,F()})}),t.querySelectorAll("[data-run-ftt]").forEach(y=>{y.addEventListener("click",()=>{const b=re.find(R=>R.id===y.dataset.runFtt);b&&Ie(b)})}),t.querySelectorAll("[data-open-snooze]").forEach(y=>{y.addEventListener("click",()=>{S&&(pe=y.dataset.openSnooze??null,F())})}),t.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{pe=null,F()}),t.querySelectorAll("[data-snooze-form]").forEach(y=>{y.addEventListener("submit",b=>{if(b.preventDefault(),!S)return;const R=y.dataset.snoozeForm;if(!R)return;const U=new FormData(y),ie=String(U.get("duration")??"24h"),De=String(U.get("reason")??"").trim()||"现场核查中";T.set(R,{duration:ie,reason:De}),se.delete(R),pe=null,te=`已限时忽略该告警（${ie} · ${De}），可在「已忽略」页签中随时恢复。`,F()})}),t.querySelectorAll("[data-unsnooze]").forEach(y=>{y.addEventListener("click",()=>{if(!S)return;const b=y.dataset.unsnooze;b&&(T.delete(b),te="已恢复该告警的实时监控。",F())})}),t.querySelectorAll("[data-go-ts]").forEach(y=>{y.addEventListener("click",()=>{const b=y.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(b)}`})}),t.querySelectorAll("[data-locate-home]").forEach(y=>{y.addEventListener("click",()=>{const b=y.dataset.locateHome??"";window.location.hash=b?`#home?device=${encodeURIComponent(b)}`:"#home"})}),t.querySelectorAll("[data-mark-actioned]").forEach(y=>{y.addEventListener("click",async()=>{if(!S)return;xe="";const b=y.dataset.markActioned;try{await e.acknowledgeAlarm(b,"现场自处理完成（Mark Actioned）"),P.set(b,"现场自处理完成"),se.delete(b),te="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await x()}catch(R){xe=R instanceof Error?R.message:String(R),F()}})}),t.querySelectorAll("[data-to-wo]").forEach(y=>{y.addEventListener("click",async()=>{if(!S)return;xe="";const b=re.find(R=>R.id===y.dataset.toWo);if(b)try{await e.createWorkOrder({floorId:b.floorId,deviceId:b.deviceId,alarmId:b.id,title:`处置告警：${b.title}`,description:b.message}),te=`已将「${b.title}」转为运维工单并同步 CMMS。`,await x()}catch(R){xe=R instanceof Error?R.message:String(R),F()}})}),t.querySelectorAll("[data-wo-status]").forEach(y=>{y.addEventListener("change",async()=>{if(!S)return;const b=y.dataset.woStatus,R=y.value;if(xe="",R==="cancelled"){const U=oe.find(ie=>ie.id===b);if(U){const ie=he(U);ie.cancelled=!0,ie.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),te="工单已移入「已取消」分类并锁定编辑。",F()}return}if(R==="resolved"||R==="closed"){K=b,$e=R,F();return}try{await e.updateWorkOrderStatus(b,R);const U=oe.find(ie=>ie.id===b);U&&he(U).history.unshift({at:"刚刚",text:`状态变更为「${Ze[R]}」`}),te="工单状态已更新并写入审计日志。",await x()}catch(U){xe=U instanceof Error?U.message:String(U),await x()}})}),t.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{K=null,F()}),t.querySelectorAll("[data-close-wo-form]").forEach(y=>{y.addEventListener("submit",async b=>{if(b.preventDefault(),!S)return;const R=y.dataset.closeWoForm,U=new FormData(y),ie=String(U.get("cause")??"").trim(),De=String(U.get("solution")??"").trim(),_e=String(U.get("actualCost")??"").trim();try{await e.updateWorkOrderStatus(R,$e);const ye=oe.find(Oe=>Oe.id===R);if(ye){const Oe=he(ye);Oe.cause=ie,Oe.solution=De,_e&&(Oe.actualCost=_e),Oe.history.unshift({at:"刚刚",text:`流转至「${Ze[$e]}」· 根因：${ie}`})}K=null,M=R,te=`工单已更新为「${Ze[$e]}」，根因与方案已沉淀归档。`,await x()}catch(ye){xe=ye instanceof Error?ye.message:String(ye),F()}})}),t.querySelectorAll("[data-wo-task]").forEach(y=>{y.addEventListener("change",()=>{if(!S)return;const b=oe.find(ie=>ie.id===y.dataset.woTask);if(!b)return;const U=he(b).tasks.find(ie=>ie.id===y.dataset.taskId);U&&(U.done=y.checked),F()})})}await x()}const ut={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},mt={frozen:"已冻结",draft:"草稿",delivered:"已交付"},ma={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},ga=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],Aa=[{id:"doc-hvac-7f",floorId:h.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:h.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:h.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:h.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],gt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},La=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function u(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ta(t){const e=t.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面")||e.includes("屋顶")||e.includes("天面"))return 999;const i=e.match(/(-?\d+)/);if(!i)return 0;const c=Number(i[1]);return e.startsWith("B")||e.includes("地下")||e.includes("负")?-Math.abs(c):c}const ja={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function Ge(t){const e=t.trim(),i=e.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test(i)||/屋面|屋顶|天面/.test(e))return"RF";const c=i.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(c)return`B${Number(c[1])}`;const l=e.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(l){const O=/^\d+$/.test(l[1])?Number(l[1]):ja[l[1]];if(O)return`B${O}`}if(/首层|一层/.test(e))return"1F";const p=e.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(p){const O=/^\d+$/.test(p[1])?Number(p[1]):ja[p[1]];if(O)return`${O}F`}const S=i.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return S?`${Number(S[1])}F`:null}function sa(t){return new Promise((e,i)=>{const c=new FileReader;c.onload=()=>typeof c.result=="string"?e(c.result):i(new Error("无法读取图片内容")),c.onerror=()=>i(new Error(`读取文件「${t.name}」失败`)),c.readAsDataURL(t)})}function bt(t){return t.category==="gateway"?t.name.includes("蓝牙")?"蓝牙适配器":"主控网关":t.category==="lighting"?t.name.includes("702")?"702 照明":t.name.slice(0,6):t.category==="hvac"?t.name.includes("VAV")?"VAV-02":t.name.includes("FCU")?"FCU-01":t.name.slice(0,6):t.category==="sensor"?"环境传感":t.name.slice(0,6)}function vt(t,e){const i=t.status!=="connected",c=e.filter(l=>l.hardwareBinding?.protocol===t.protocol);return c.length>0?c.map(l=>{const p=l.connectivity==="offline"||i;return{pointName:l.category==="hvac"?"送风温度 / 阀门开度":l.category==="lighting"?"回路开关 / 亮度反馈":l.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:l.name,value:p?"无上报":l.category==="hvac"?"23.4°C · 62%":l.category==="lighting"?"开启 · 80%":l.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:p?"46 分钟前":"12 秒前",quality:p?l.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${t.protocol.toUpperCase()} 采集通道汇总点`,deviceName:t.name,value:i?"采样延迟":"正常上报",interval:"60s",lastSeen:i?"38 分钟前":"9 秒前",quality:i?"delayed":"online"}]}async function ft(t,e,i){const c=new URLSearchParams(window.location.hash.split("?")[1]??""),l=c.get("sec");let p=l==="floors"||l==="projects"?"project_config":l==="floorplan"||l==="devices"||l==="inventory"?"devices":l==="network"||l==="network_topo"?"network_topo":l==="connections"?"connections":"overview",S=l==="inventory"?"list":"marking",O="binding",N="",C="all",z=la(),re=!1,oe="",ue="device",ve="all",ee="",Q=!1,Z=!1,de="mesh",ae=1,le=0,me=0,M=await e.getSpatialTree(),pe=[],K=[],$e=[];const se={...gt},T=[];let P=z.level==="all-projects"?M.projects[0]?.id??h.projectId:z.projectId,W=z.level==="building"||z.level==="floor"?z.buildingId:M.buildings.find(v=>v.projectId===P)?.id??M.buildings[0]?.id??h.buildingId,V=z.level==="floor"?z.floorId:M.floors.find(v=>v.buildingId===W&&v.id===h.floorId)?.id??M.floors.find(v=>v.buildingId===W)?.id??h.floorId,te=l==="floors"?V:null,xe="all",he="zones",x=c.get("new")==="project",q=!1,Ie=!1,F=null,d=!1,f=!1,j=!1,r=!1,L=!1,B=null,ge=new Set,Fe=null,Te=!1,Se=[];const G=[];let y=null,b=null,R=!1,U=!1,ie=null,De=null,_e=3,ye=!1,Oe=[],Pe=null,H="",ne="";const Me=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),Ve=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],ca=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:h.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:h.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:h.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:h.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],ha=new Map;function ke(){x=!1,q=!1,Ie=!1,F=null,d=!1,f=!1,j=!1,r=!1,L=!1,B=null}function za(){return!!(x||q||Ie||F||d||f||j||r||L||B)}const ya=v=>{if(!document.body.contains(t)){document.removeEventListener("keydown",ya);return}v.key==="Escape"&&(Fe?(Fe=null,E()):za()?(ke(),E()):Z&&(Z=!1,U=!1,E()))};document.addEventListener("keydown",ya);function Be(){return M.floors}function Ce(v){return[...M.floors.filter($=>$.buildingId===v)].sort(($,k)=>ta(k.name)-ta($.name))}function qe(){return M.zones}function Le(v){return[...v===h.floorId?pe:[],...T.filter(k=>k.floorId===v)]}function Ue(v){return v?qe().find($=>$.id===v)?.name.replace(/^7F\s*/,"")??v:"未分配功能区"}function ra(v){const $=M.buildings.find(I=>I.id===v);if(!$)return;P=$.projectId,W=$.id;const k=Ce($.id);k.some(I=>I.id===V)||(V=k.find(I=>I.id===h.floorId)?.id??k[0]?.id??""),te&&!k.some(I=>I.id===te)&&(te=null),z=We(V?{level:"floor",projectId:$.projectId,buildingId:$.id,floorId:V}:{level:"building",projectId:$.projectId,buildingId:$.id}),b=null,Z=!1,U=!1,ae=1,le=0,me=0}function Ke(v){V=v;const $=Be().find(k=>k.id===v);if($){W=$.buildingId;const k=M.buildings.find(I=>I.id===$.buildingId);k&&(P=k.projectId),z=We({level:"floor",projectId:P,buildingId:$.buildingId,floorId:$.id})}b=null,Z=!1,U=!1,ae=1,le=0,me=0}async function Ee(){ne="";const[v,$,k,I]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(h.floorId).catch(()=>[]),e.listConnections(P),e.listDeliveryBatches(h.floorId)]);if(M=v,pe=$,K=k,$e=I,M.projects.length===0)P="",W="",V="",te=null;else{M.projects.some(n=>n.id===P)||(P=M.projects[0].id);const a=M.buildings.filter(n=>n.projectId===P);a.some(n=>n.id===W)||(W=a[0]?.id??"");const o=W?Ce(W):[];o.some(n=>n.id===V)||(V=o.find(n=>n.id===h.floorId)?.id??o[0]?.id??""),te&&!o.some(n=>n.id===te)&&(te=null)}const D=Le(V);b&&!D.some(a=>a.id===b)&&(b=null,Z=!1),R=D.find(a=>a.id===b)?.physicalInstalled??!1,E()}function Je(){const v=t.querySelector('[data-role="dep-viewport"]');v&&(v.style.transform=`translate(${le}px, ${me}px) scale(${ae})`);const $=t.querySelector('[data-role="dep-zoom-label"]');$&&($.textContent=`${Math.round(ae*100)}%`)}function $a(v){ne="",v.connectivity==="offline"?ne=`单机回读自检未通过（FAIL）：「${v.name}」当前离线，请核查网关链路或中继覆盖。`:H=`单机回读自检通过（PASS）：「${v.name}」指令下发与状态回读一致，已安全复位。`,E()}function Ra(){ne="";const v=Le(V),$=v.filter(w=>w.connectivity==="offline"),k=v.length-$.length,I=new Date;Pe={ranAt:`${String(I.getHours()).padStart(2,"0")}:${String(I.getMinutes()).padStart(2,"0")}:${String(I.getSeconds()).padStart(2,"0")}`,total:v.length,passed:k,failed:$.length,failedNames:$.map(w=>w.name)},$.length>0?ne=`全层批量自检完成：${k}/${v.length} 台通过，${$.length} 台异常（${$.map(w=>w.name).join("、")}）。`:H=`全层批量自检全部通过（${k}/${v.length}），设备已自动安全复位。`,E()}function _a(){const v=Le(V),$=[],k=v.filter(o=>o.connectivity==="offline"),I=v.filter(o=>!o.planPoint),D=v.filter(o=>Me.get(o.id)?.proxy).length,w=v.filter(o=>Me.get(o.id)?.relay).length,a=v.length?w/v.length:0;k.length>0?k.forEach(o=>$.push({level:"fail",title:`节点不可达：${o.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:o.id})):$.push({level:"ok",title:"全网节点可达性正常",detail:`${v.length} 台设备均正常响应心跳。`}),D<1?$.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):$.push({level:"ok",title:`代理节点配置合理（${D} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),a>.25&&v.length>=4&&$.push({level:"warn",title:`中继比例偏高（${Math.round(a*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),I.length>0&&$.push({level:"warn",title:`尚有 ${I.length} 台未完成设备标记`,detail:"请在「设备管理 → 设备标记」中补齐平面坐标以便施工定位。"}),Oe=$,H=`已完成蓝牙 Mesh 网络体检（检测 ${v.length} 台节点，发现 ${$.filter(o=>o.level!=="ok").length} 项关注）。`,E()}function Ma(){const v=Le(V),$=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...v.map(w=>[w.name,w.category,Ue(w.logicalZoneId),w.planPoint?`${Math.round(w.planPoint.x*100)}%/${Math.round(w.planPoint.y*100)}%`:"未标记",w.hardwareBinding?`${w.hardwareBinding.protocol} ${w.hardwareBinding.networkAddress}`:"未绑定",w.physicalInstalled?"已复核":"待复核",w.connectivity==="online"?"在线":"离线"].join(","))],k=new Blob([`\uFEFF${$.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),I=URL.createObjectURL(k),D=document.createElement("a");D.href=I,D.download="pacom-device-list.csv",D.click(),URL.revokeObjectURL(I)}function Xe(v){const $=new Set(Ce(v.id).map(I=>Ge(I.name)??I.name.toUpperCase())),k=[];for(let I=1;I<=v.aboveFloors;I+=1){const D=`${I}F`;$.has(D)||k.push({kind:"above",level:I,name:D})}for(let I=1;I<=v.belowFloors;I+=1){const D=`B${I}`;$.has(D)||k.push({kind:"below",level:-I,name:D})}return v.hasRoof&&!$.has("RF")&&k.push({kind:"roof",level:99,name:"RF"}),k}async function Pa(v){const $=M.buildings.find(I=>I.id===v);if(!$)return 0;const k=Xe($);for(const I of k)await e.upsertFloor?.({buildingId:$.id,kind:I.kind,level:I.level,name:I.name});return k.length}const Na={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。",granularity:"building"},project_config:{title:"项目配置",subtitle:"在同一视图内贯通管理项目、园区楼宇、楼层平面底图、功能区与竣工图纸。",granularity:"project"},devices:{title:"设备管理",subtitle:"围绕当前楼层完成设备标记、设备列表核查、参数下发、自检与设备分组。",granularity:"floor"},network_topo:{title:"网络拓扑",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、环境等异构子系统通道及传感器采集质量。",granularity:"project"}};function He(v,$="layers"){return`
      <div class="dep-empty-card">
        <div class="dep-empty-icon">${X($,20)}</div>
        <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
        <span class="pacom-row-sub" style="max-width:440px;">按「创建项目 → 添加楼宇与楼层 → 上传平面底图」完成建档后，即可开展设备标记、网络同步与交付验收。</span>
        <div class="dep-empty-steps">
          <span>1. 创建项目</span>
          <span>→</span>
          <span>2. 添加楼宇与楼层</span>
          <span>→</span>
          <span>3. 上传平面图</span>
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${v?"":"disabled"}>+ 创建第一个项目</button>
      </div>`}function Ba(){const v=($,k,I,D=!1)=>`
      <button type="button" class="pacom-unified-item" aria-current="${p===$}" data-dep-nav="${$}">
        ${X(k,16)}
        <span>${I}</span>
        ${D?'<span class="dep-rail-dot" title="有变更待同步至边缘网关"></span>':""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${v("overview","layout-dashboard","部署总览")}
          ${v("project_config","layers","项目配置")}
          ${v("devices","map-pin","设备管理")}
          ${v("network_topo","waypoints","网络拓扑",ye)}
          ${v("connections","plug","系统接入")}
        </div>
      </aside>
    `}function wa(v){return M.projects.length===0?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${v?"":"disabled"}>+ 新建项目</button>`:p==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出清单</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${v?"":"disabled"}>+ 交付冻结</button>
      `:p==="project_config"?`<button type="button" class="pacom-btn" data-open-new-proj="1" ${v?"":"disabled"}>+ 新建项目</button>`:p==="devices"?`${`
        <div class="pacom-tabs" role="tablist" aria-label="设备管理视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${S==="marking"}" data-dev-subtab="marking">设备标记</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${S==="list"}" data-dev-subtab="list">设备列表</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${S==="groups"}" data-dev-subtab="groups">设备分组</button>
        </div>`}${S==="marking"?'<button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>':S==="list"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${v?"":"disabled"}>+ 新建分组</button>`}`:p==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${v?"":"disabled"}>${ye?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:`
      <button type="button" class="pacom-btn" data-edge-restart="service" ${v?"":"disabled"}>重启边缘服务</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${v?"":"disabled"}>+ 新增接入通道</button>
    `}function Ua(v){if(M.projects.length===0)return He(v,"layout-dashboard");const $=W?Ce(W):[],k=$.filter(n=>!!n.plan).length,I=$.flatMap(n=>Le(n.id)),D=I.filter(n=>!!n.planPoint).length,w=I.filter(n=>n.connectivity==="online").length,a=I.filter(n=>n.physicalInstalled).length,o=$.filter(n=>Le(n.id).length>0&&!ye).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${$.length>0&&k===$.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 项目与底图</span>
          <div class="pacom-kpi-value">${k}<span class="pacom-kpi-unit">/ ${$.length} 层</span></div>
          <span class="pacom-kpi-delta">${$.length>0&&k===$.length?"全部底图就绪":`尚缺 ${Math.max(0,$.length-k)} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="marking" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${I.length>0&&D===I.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${D}<span class="pacom-kpi-unit">/ ${I.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${Ve.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${I.length>0&&w===I.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${w}<span class="pacom-kpi-unit">/ ${I.length} 台</span></div>
          <span class="pacom-kpi-delta">${I.length-w>0?`${I.length-w} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${ye?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${o}<span class="pacom-kpi-unit">/ ${$.length} 层</span></div>
          <span class="pacom-kpi-delta">${ye?"有变更待下发 →":`基线 v${_e}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="list" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${I.length>0&&a===I.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${a}<span class="pacom-kpi-unit">/ ${I.length} 台</span></div>
          <span class="pacom-kpi-delta">${I.length>0&&a===I.length?"可交付冻结":`待复核 ${I.length-a} 台 →`}</span>
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
                ${$.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前楼宇暂无楼层</strong><span>请先在「项目配置」中生成楼层并上传底图。</span></div></td></tr>':$.map(n=>{const s=Le(n.id),A=qe().filter(ce=>ce.floorId===n.id),g=s.filter(ce=>!!ce.planPoint).length,_=s.filter(ce=>ce.connectivity==="online").length,fe=s.filter(ce=>ce.physicalInstalled).length,be=!!n.plan,we=be&&s.length>0&&g===s.length&&fe===s.length&&_===s.length&&!ye;return`
                            <tr>
                              <td><strong>${u(n.name)}</strong><div class="pacom-row-sub">${n.areaSqm?`${n.areaSqm} m²`:"待补面积"}</div></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-expand="1" data-matrix-floor="${u(n.id)}"><span class="pacom-dot ${be?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${be?`已传图 · ${A.length} 区`:"待传底图"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="marking" data-matrix-floor="${u(n.id)}"><span class="pacom-dot ${s.length>0&&g===s.length?"pacom-dot--online":s.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${s.length>0?`${g}/${s.length}`:"未标记"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${u(n.id)}"><span class="pacom-dot ${s.length>0&&_===s.length?"pacom-dot--online":s.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${s.length>0?`${_}/${s.length}`:"—"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${u(n.id)}"><span class="pacom-dot ${s.length===0?"pacom-dot--offline":ye?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${s.length===0?"—":ye?"待同步":`v${_e}`}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="list" data-matrix-floor="${u(n.id)}"><span class="pacom-dot ${s.length>0&&fe===s.length?"pacom-dot--online":s.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${s.length>0?`${fe}/${s.length}`:"—"}</span></button></td>
                              <td style="text-align:right;"><span class="pacom-badge ${we?"pacom-badge--online":s.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${we?"可验收交付":s.length>0?"实施中":"待配置"}</span></td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${Pe?`<div class="pacom-banner ${Pe.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${Pe.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${Pe.passed}/${Pe.total} 台${Pe.failedNames.length?` · 异常：${Pe.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${$e.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${$e.map(n=>`
                    <tr>
                      <td><div style="font-weight:450;">${u(n.versionTag)}</div><div class="pacom-row-sub"><code>${u(n.id)}</code></div></td>
                      <td><strong>${n.verifiedCount}</strong> / ${n.deviceCount} 台</td>
                      <td><div>${u(n.frozenBy)}</div><div class="pacom-row-sub">${u(n.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${mt[n.status]??n.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Va(v){if(M.projects.length===0)return He(v,"layers");const $=M.projects.find(g=>g.id===P)??M.projects[0],k=M.buildings.filter(g=>g.projectId===$.id),I=k.reduce((g,_)=>g+Ce(_.id).length,0),D=k.find(g=>g.id===W)??k[0]??null,w=D?Ce(D.id):[],a=w.filter(g=>!g.plan).length,o=w.filter(g=>qe().filter(_=>_.floorId===g.id).length===0).length,n=w.filter(g=>xe==="missing_plan"?!g.plan:xe==="missing_zone"?qe().filter(_=>_.floorId===g.id).length===0:!0),s=D?Xe(D):[],A=$.location?`${$.location.lng.toFixed(4)}, ${$.location.lat.toFixed(4)}`:"未设置坐标";return`
      <div class="dep-project-strip">
        <div class="dep-project-strip-main">
          <div class="dep-project-cover">
            <img src="${u($.imageUrl??"./media/gzlab.jpg")}" alt="${u($.name)}" />
          </div>
          <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">${u($.name)}</strong>
              <span class="pacom-badge pacom-badge--neutral">${k.length} 栋楼宇</span>
              <span class="pacom-badge pacom-badge--neutral">${I} 个楼层</span>
            </div>
            <span class="pacom-row-sub">${u($.city||"未填城市")}${$.address?` · ${u($.address)}`:""} · 坐标 ${u(A)}</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-edit-proj="1" ${v?"":"disabled"}>编辑项目</button>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <div>
            <h2 class="pacom-section-title">园区楼宇（${k.length} 栋）</h2>
            <span class="pacom-row-sub">点击楼宇卡片切换下方楼层列表，点「编辑参数」修改外观与层数</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-bld="1" ${v?"":"disabled"}>+ 新建楼宇</button>
        </div>
        ${k.length===0?`
            <div class="dep-empty-card">
              <div class="dep-empty-icon">${X("building-2",20)}</div>
              <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${u($.name)} 暂无楼宇</strong>
              <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
              <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${v?"":"disabled"}>+ 添加第一栋楼宇</button>
            </div>`:`
            <div class="dep-building-grid">
              ${k.map(g=>{const _=Ce(g.id),fe=_.filter(Ae=>!!Ae.plan).length,be=_.length>0?Math.round(fe/_.length*100):0,we=Xe(g),ce=D?.id===g.id,Y=_.length===0?"pacom-badge--neutral":fe===_.length?"pacom-badge--online":"pacom-badge--warning";return`
                    <article class="dep-building-card ${ce?"is-active":""}" data-select-building="${u(g.id)}">
                      <div class="dep-building-stage">
                        <img src="${u(g.imageUrl??"./media/building-e.webp")}" alt="${u(g.name)}" />
                      </div>
                      <div class="dep-building-body">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${u(g.name)}</strong>
                          <span class="pacom-badge ${Y}">${_.length===0?"未建层":`${fe}/${_.length} 底图`}</span>
                        </div>
                        <div class="pacom-row-sub">地上 ${g.aboveFloors} 层${g.belowFloors>0?` · 地下 ${g.belowFloors} 层`:""}${g.hasRoof?" · RF":""}${g.areaSqm?` · ${g.areaSqm} m²`:""}</div>
                        <div class="pacom-progress-track">
                          <div class="pacom-progress-fill" style="width:${be}%; background:${be===100?"var(--pacom-status-online)":"var(--pacom-accent-solid)"};"></div>
                        </div>
                        ${we.length>0?`<div style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:12px; color:var(--pacom-text-secondary);">
                                 <span>尚缺 ${we.length} 个楼层</span>
                                 <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="height:22px; padding:0 6px; font-size:12px;" data-fill-missing-floors="${u(g.id)}" ${v?"":"disabled"}>一键补齐</button>
                               </div>`:""}
                      </div>
                      <div class="dep-building-foot">
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${u(g.id)}" ${v?"":"disabled"}>编辑参数</button>
                        <span class="pacom-row-sub" style="font-size:12px; color:${ce?"var(--pacom-accent-fg)":"var(--pacom-text-secondary)"};">${ce?"当前查看中":"点击切换楼层"}</span>
                      </div>
                    </article>`}).join("")}
              <button type="button" class="dep-building-add-card" data-open-new-bld="1" ${v?"":"disabled"}>
                ${X("plus",20)}
                <span style="font-size:13px;">新建楼宇</span>
              </button>
            </div>`}
      </section>

      ${D?`
          <section class="pacom-section">
            <div class="pacom-section-head">
              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <h2 class="pacom-section-title">${u(D.name)} 楼层与底图（${w.length}）</h2>
                <div class="pacom-count-pills">
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${xe==="all"}" data-floor-list-filter="all">全部 <span class="pacom-count-num">${w.length}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${xe==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 <span class="pacom-count-num">${a}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${xe==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 <span class="pacom-count-num">${o}</span></button>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                ${s.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${u(D.id)}" ${v?"":"disabled"}>一键补齐 ${s.length} 层</button>`:""}
                <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-floor="1" ${v?"":"disabled"}>+ 新增楼层</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-batch-modal="1" ${v?"":"disabled"}>批量导入底图</button>
              </div>
            </div>

            ${w.length===0?`
                <div class="dep-empty-card">
                  <div class="dep-empty-icon">${X("layers",20)}</div>
                  <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${u(D.name)} 暂无楼层</strong>
                  <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${u(D.id)}" ${v?"":"disabled"}>一键生成全部楼层</button>
                    <button type="button" class="pacom-btn" data-open-new-floor="1" ${v?"":"disabled"}>+ 手动新增楼层</button>
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
                        ${n.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':n.map(g=>{const _=qe().filter(Y=>Y.floorId===g.id),fe=[...Aa,...G].filter(Y=>Y.floorId===g.id),be=Le(g.id),we=te===g.id,ce=w.filter(Y=>Y.id!==g.id);return`
                                    <tr>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:7px;">
                                          <span class="pacom-dot ${g.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                          <strong>${u(g.name)}</strong>
                                        </div>
                                      </td>
                                      <td><span class="pacom-row-sub">${g.areaSqm?`${g.areaSqm} m²`:"—"}</span></td>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:8px;">
                                          ${g.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${u(D.name)} ${u(g.name)} 平面底图" data-lb-src="${u(g.plan.imageUrl)}" title="查看大图"><img src="${u(g.plan.imageUrl)}" alt="${u(g.name)}" /></button>
                                                 <span class="pacom-badge pacom-badge--online">已就绪</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                          <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="cursor:pointer; height:24px; padding:0 6px; font-size:12px;">
                                            <span>${g.plan?"替换":"上传"}</span>
                                            <input type="file" name="floorPlan_${u(g.id)}" accept="image/*" data-upload-floor="${u(g.id)}" style="display:none;" ${v?"":"disabled"} />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        ${_.length>0?`<span>${_.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${u(_.slice(0,2).map(Y=>Y.name.replace(/^7F\s*/,"")).join("、"))}${_.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                                      </td>
                                      <td><span class="pacom-row-sub">${fe.length} 份</span></td>
                                      <td>
                                        <div style="display:flex; justify-content:flex-end; gap:6px;">
                                          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-expand-floor="${u(g.id)}">${we?"收起配置":"展开配置"}</button>
                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${u(g.id)}">设备标记 →</button>
                                        </div>
                                      </td>
                                    </tr>
                                    ${we?`
                                        <tr class="pacom-table-detail-row">
                                          <td colspan="6">
                                            <div class="dep-floor-expand-grid">
                                              <div class="dep-floor-expand-col">
                                                <div class="dep-plan-preview-box" style="min-height:260px;" data-single-floor-drop="${u(g.id)}">
                                                  <div class="dep-plan-toolbar">
                                                    ${g.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${u(D.name)} ${u(g.name)} 平面底图" data-lb-src="${u(g.plan.imageUrl)}">查看大图</button>`:""}
                                                    <label class="dep-plan-tool-btn" style="cursor:pointer;">
                                                      <span>${g.plan?"替换底图":"上传底图"}</span>
                                                      <input type="file" name="floorPlanDrop_${u(g.id)}" accept="image/*" data-upload-floor="${u(g.id)}" style="display:none;" ${v?"":"disabled"} />
                                                    </label>
                                                    ${g.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${u(g.id)}" ${v?"":"disabled"}>清空</button>`:""}
                                                  </div>
                                                  ${g.plan?`<img src="${u(g.plan.imageUrl)}" alt="${u(g.name)} 平面图" style="width:100%; max-height:290px; object-fit:contain; display:block;" />`:`<div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:24px; text-align:center;">
                                                           <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${u(g.name)} 2D 平面图到此处</strong>
                                                           <span class="pacom-row-sub">支持透明 WebP / PNG / JPG</span>
                                                         </div>`}
                                                </div>
                                              </div>

                                              <div class="dep-floor-expand-col">
                                                <div class="pacom-settings-card" style="padding:10px 16px;">
                                                  <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                                                    <form data-save-floor="${u(g.id)}" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                                                      <input class="pacom-input" name="fName" value="${u(g.name)}" aria-label="楼层名称" style="width:76px; height:32px; flex:none;" required ${v?"":"disabled"} />
                                                      <input class="pacom-input" name="fArea" type="number" step="0.1" value="${u(g.areaSqm??"")}" placeholder="面积 m²" aria-label="建筑面积" style="width:110px; height:32px; flex:none;" ${v?"":"disabled"} />
                                                      <button type="submit" class="pacom-btn" ${v?"":"disabled"}>保存</button>
                                                    </form>
                                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-delete-floor="${u(g.id)}" ${!v||be.length>0?`disabled title="${be.length>0?`已关联 ${be.length} 台设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                                                  </div>
                                                </div>

                                                <div class="pacom-settings-card" style="padding:4px 16px;">
                                                  <div class="pacom-setting-row" style="padding:10px 0; justify-content:space-between; gap:8px;">
                                                    <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${he==="zones"}" data-floor-detail-tab="zones">功能区（${_.length}）</button>
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${he==="docs"}" data-floor-detail-tab="docs">竣工图纸与手册（${fe.length}）</button>
                                                    </div>
                                                    ${he==="zones"?_.length>0&&ce.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-open-copy-zones="${u(g.id)}" ${v?"":"disabled"}>复用至其他层…</button>`:"":`<label class="pacom-btn pacom-btn--sm" style="cursor:pointer;"><span>+ 关联文件</span><input type="file" name="attachDoc_${u(g.id)}" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${u(g.id)}" style="display:none;" ${v?"":"disabled"} /></label>`}
                                                  </div>
                                                  ${he==="zones"?`
                                                        ${_.length===0?`
                                                            <div class="pacom-setting-row" style="padding:10px 0; flex-direction:column; align-items:flex-start; gap:8px;">
                                                              <span class="pacom-row-sub">暂未划分功能区，可一键套用常用模板：</span>
                                                              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                                                ${La.map(Y=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${u(Y.key)}" data-tpl-floor="${u(g.id)}" ${v?"":"disabled"}>+ ${u(Y.label)}</button>`).join("")}
                                                              </div>
                                                            </div>`:_.map(Y=>y===Y.id?`
                                                                      <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-save-edit-zone="${u(Y.id)}" data-zone-floor="${u(g.id)}">
                                                                        <input class="pacom-input" name="zName" value="${u(Y.name)}" style="width:180px; height:30px; flex:none;" required />
                                                                        <select class="pacom-select" name="zCat" style="width:110px; height:30px;">
                                                                          ${Object.keys(ma).map(Ae=>`<option value="${Ae}" ${Y.category===Ae?"selected":""}>${ma[Ae]}</option>`).join("")}
                                                                        </select>
                                                                        <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                                                      </form>`:`
                                                                      <div class="pacom-setting-row" style="padding:9px 0;">
                                                                        <div class="pacom-setting-meta" style="min-width:140px;">
                                                                          <span class="pacom-setting-title">${u(Y.name)} <span class="pacom-badge pacom-badge--neutral">${u(ma[Y.category]??Y.category)}</span></span>
                                                                        </div>
                                                                        <div class="pacom-setting-control">
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${u(Y.id)}" ${v?"":"disabled"}>编辑</button>
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${u(Y.id)}" ${v?"":"disabled"}>删除</button>
                                                                        </div>
                                                                      </div>`).join("")}
                                                        <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-add-zone="${u(g.id)}">
                                                          <input class="pacom-input" name="zoneName" placeholder="新功能区名称（如：${u(g.name)} 东侧实验区）" style="width:210px; height:32px; flex:none;" required ${v?"":"disabled"} />
                                                          <select class="pacom-select" name="zoneCat" style="width:112px; height:32px;" ${v?"":"disabled"}>
                                                            <option value="lab">实验区</option>
                                                            <option value="office">办公区</option>
                                                            <option value="meeting">会议室</option>
                                                            <option value="corridor">走廊/公区</option>
                                                            <option value="utility">机房/后勤</option>
                                                            <option value="outdoor">露台/活动区</option>
                                                          </select>
                                                          <button type="submit" class="pacom-btn" ${v?"":"disabled"}>+ 添加</button>
                                                        </form>`:fe.length===0?'<div class="pacom-setting-row" style="padding:12px 0;"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':fe.map(Y=>`
                                                              <div class="pacom-setting-row" style="padding:9px 0;">
                                                                <div class="pacom-setting-meta" style="min-width:140px;">
                                                                  <span class="pacom-setting-title">${u(Y.name)}</span>
                                                                  <span class="pacom-row-sub">${u(Y.category)} · ${u(Y.size)} · ${u(Y.updatedAt)}</span>
                                                                </div>
                                                                <div class="pacom-setting-control">
                                                                  <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${u(Y.id)}">查阅</button>
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
    `}function Ha(v){if(!Z||p!=="devices"||S==="groups")return"";const k=Le(V).find(a=>a.id===b)??null;if(!k)return"";const I=Me.get(k.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${V.slice(-4)}`},D=Ve.filter(a=>a.deviceId===k.id),w=ha.get(k.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450};return`
      <aside class="pacom-drawer" style="width:376px;" aria-label="设备配置抽屉">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${u(k.name)}</h2>
            <div class="pacom-row-sub">${u(Ue(k.logicalZoneId))} · v${k.version}</div>
          </div>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${X("x",16)}</button>
        </div>

        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${v?"":"disabled"}>${U?"点击图纸定位中…":"点图更新坐标"}</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${u(k.id)}">Ping 闪灯 5s</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${O==="binding"}" data-drawer-tab="binding">绑定与安装</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${O==="params"}" data-drawer-tab="params">自治参数</button>
        </div>

        ${O==="binding"?`
            ${k.category==="lighting"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">回路可视化灯点（${D.length}）</span>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${u(k.id)}" ${v?"":"disabled"}>+ 添加灯点</button>
                  </div>
                  ${D.map(a=>`
                      <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                        <span><strong>${u(a.channel)}</strong> · ${u(a.label)}</span>
                        <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:12px;" data-del-light-marker="${u(a.id)}" ${v?"":"disabled"}>删除</button>
                      </div>`).join("")}
                </div>`:""}

            ${k.category!=="hvac"&&k.category!=="meter"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                    <code style="font-size:12px;">${u(I.meshUuid)}</code>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Proxy 代理（建议每层 2–3 个）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${I.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${u(k.id)}" ${v?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${I.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${u(k.id)}" ${v?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                </div>`:""}

            <form data-role="binding-form" class="pacom-control-box" style="gap:10px;">
              <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">通信协议</span>
                  <select class="pacom-select" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(a=>`<option value="${a}" ${k.hardwareBinding?.protocol===a?"selected":""}>${a.toUpperCase()}</option>`).join("")}
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">网络地址 / 主题</span>
                  <input class="pacom-input" name="networkAddress" placeholder="地址或主题" value="${u(k.hardwareBinding?.networkAddress??"")}" />
                </label>
              </div>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:10px;">
                <label class="dep-field" style="flex:1;">
                  <span class="dep-field-label">端口 / 回路</span>
                  <input class="pacom-input" name="portOrChannel" placeholder="端口或回路" value="${u(k.hardwareBinding?.portOrChannel??"")}" />
                </label>
                <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; height:32px; flex-shrink:0;">
                  <span>物理已复核</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${R}" data-toggle-phys="1" ${v?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                </span>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${v?"":"disabled"}>保存绑定与复核（v${k.version}）</button>
            </form>`:`
            <form data-save-dev-params="${u(k.id)}" class="pacom-control-box" style="gap:10px;">
              <div>
                <div style="font-size:14px; font-weight:450;">人感与光感自治参数</div>
                <div class="pacom-row-sub">自动关灯延时、恢复自动延时与光照度门限</div>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${w.offDelayMin}" ${v?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" value="${w.restoreMin}" ${v?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" value="${w.luxOn}" ${v?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" value="${w.luxOff}" ${v?"":"disabled"} /></label>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${v?"":"disabled"}>下发设备参数</button>
            </form>`}
      </aside>
    `}function Za(v){if(M.projects.length===0)return`
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${He(v,"map-pin")}</div>
        </main>`;const $=W?Ce(W):[],k=$.find(n=>n.id===V)??$[0],I=Le(V),D=qe().filter(n=>n.floorId===V),w=Z?I.find(n=>n.id===b)??null:null,a=ee.trim().toLowerCase(),o=I.filter(n=>!(ve==="unverified"&&n.physicalInstalled||ve==="unplaced"&&n.planPoint||a&&!`${n.name} ${Ue(n.logicalZoneId)}`.toLowerCase().includes(a)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${X("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${u(ee)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${Q?"is-active":""}" data-toggle-hud-pool="1">设备池 ${I.length}</button>
            <button type="button" class="pacom-hud-pill" data-open-new-dev="1" ${v?"":"disabled"}>+ 新增设备</button>
          </div>

          ${Q?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${u(k?.name??"7F")} 设备池（${o.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${X("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-count-pills">
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ve==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${I.length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ve==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${I.filter(n=>!n.physicalInstalled).length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ve==="unplaced"}" data-dev-filter="unplaced">未标记 <span class="pacom-count-num">${I.filter(n=>!n.planPoint).length}</span></button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${o.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':o.map(n=>`
                            <div class="pacom-row ${n.id===b&&Z?"is-selected":""}" data-pick-dev="${u(n.id)}" style="padding:8px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${u(n.name)}</div>
                                <div class="pacom-row-sub">${u(Ue(n.logicalZoneId))} · ${n.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${n.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${n.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${U?"crosshair":"grab"};">
          ${k?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${le}px, ${me}px) scale(${ae});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${u(k.plan.imageUrl)}" alt="${u(k.name)} 平面图" />
                  ${ue==="zone"?D.map(n=>{const s=se[n.id];return s?`<div class="pacom-zone-hotspot is-active" style="left:${s.left}%; top:${s.top}%; width:${s.width}%; height:${s.height}%;"><span class="pacom-zone-tag">${u(n.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${I.filter(n=>n.planPoint).map(n=>`
                      <button type="button" class="pacom-pin ${n.id===b&&Z?"is-selected":""} ${n.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(n.planPoint.x*100).toFixed(2)}%; top:${(n.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${u(n.id)}" title="${u(n.name)}">
                        <span class="pacom-dot ${n.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${u(bt(n))}</span>
                      </button>`).join("")}
                  ${ue==="light_marker"||w?.category==="lighting"?Ve.filter(n=>I.some(s=>s.id===n.deviceId)).map(n=>`
                            <span class="dep-light-dot" style="left:${(n.x*100).toFixed(1)}%; top:${(n.y*100).toFixed(1)}%;" title="${u(n.label)}（${u(n.channel)}）">
                              ${X("sparkles",12)}<span>${u(n.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${u(V)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${$.map(n=>`
              <button type="button" class="pacom-elev-item ${n.id===V?"is-active":""}" data-scrubber-floor="${u(n.id)}" title="${u(n.name)}${n.plan?" · 已传底图":" · 待传底图"}">
                ${n.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${u(n.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${ue==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${ue==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${ue==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${X("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(ae*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${X("plus",16)}</button>
        </div>
      </main>
    `}function Ga(v){if(M.projects.length===0)return He(v,"list");const $=Le(V),k=N.trim().toLowerCase(),I=$.filter(w=>!(C==="online"&&w.connectivity!=="online"||C==="offline"&&w.connectivity!=="offline"||C==="unverified"&&w.physicalInstalled||k&&!`${w.name} ${Ue(w.logicalZoneId)} ${w.hardwareBinding?.protocol??""}`.toLowerCase().includes(k))),D=$.filter(w=>w.connectivity==="online").length;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${u(N)}" aria-label="搜索设备列表" />
          <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
            <option value="all" ${C==="all"?"selected":""}>全部状态（${$.length}）</option>
            <option value="online" ${C==="online"?"selected":""}>仅看在线（${D}）</option>
            <option value="offline" ${C==="offline"?"selected":""}>仅看离线（${$.length-D}）</option>
            <option value="unverified" ${C==="unverified"?"selected":""}>待物理复核（${$.filter(w=>!w.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${X("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-dev="1" ${v?"":"disabled"}>+ 新增设备</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-export-inv="1">导出 CSV</button>
        </div>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${I.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词、切换筛选，或点击「+ 新增设备」。</span></div></td></tr>':I.map(w=>`
                        <tr style="cursor:pointer;" data-open-dev-drawer="${u(w.id)}">
                          <td><div style="font-weight:450;">${u(w.name)}</div><div class="pacom-row-sub">${u(Ue(w.logicalZoneId))} · v${w.version}</div></td>
                          <td><span class="pacom-badge ${w.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${w.planPoint?`${Math.round(w.planPoint.x*100)}%,${Math.round(w.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${w.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${w.hardwareBinding?w.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${w.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${w.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${w.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${w.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${u(w.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-dev-params="${u(w.id)}">配置</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${u(w.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${I.length} / ${$.length} 台设备 · ${D} 在线 · ${$.length-D} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dev-subtab="marking">切换至设备标记 →</button>
        </div>
      </div>
    `}function Wa(v){if(M.projects.length===0)return He(v,"folder-kanban");const $=ca.filter(D=>D.floorId===V||V===h.floorId&&D.floorId===h.floorId),k=$.filter(D=>D.track==="mesh_auto"),I=$.filter(D=>D.track==="cloud_biz");return`
      <div class="pacom-grid-2">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${k.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${k.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':k.map(D=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${u(D.name)} <span class="pacom-badge pacom-badge--neutral">${u(D.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${D.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${u(D.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${I.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${I.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':I.map(D=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${u(D.name)} <span class="pacom-badge pacom-badge--neutral">${u(D.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${D.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${u(D.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>
      </div>
    `}function Ka(v){if(M.projects.length===0)return He(v,"waypoints");const $=Le(V),k=qe().filter(s=>s.floorId===V),I=$.filter(s=>s.category!=="hvac"&&s.category!=="meter"),D=I.filter(s=>Me.get(s.id)?.proxy).length,w=I.filter(s=>Me.get(s.id)?.relay).length,a=$.filter(s=>s.category==="gateway"),o=$.filter(s=>Me.get(s.id)?.relay||Me.get(s.id)?.proxy),n=$.filter(s=>s.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge ${ye?"pacom-badge--warning":"pacom-badge--online"}">${ye?"有变更待同步":"协同锁空闲 · 已同步"}</span>
            <span class="pacom-row-sub">Mesh 节点 ${I.length} 台 · Proxy ${D} 个 · Relay ${w} 个 · 边缘基线 v${_e}</span>
          </div>
        </div>
        ${Oe.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${Oe.map(s=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${u(s.title)}</strong> <span class="pacom-row-sub">· ${u(s.detail)}</span></div>
                      <span class="pacom-badge ${s.level==="ok"?"pacom-badge--online":s.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${s.level==="ok"?"通过":s.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达设备标记）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${de==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${de==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${de==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${a.length===0?'<div class="pacom-row-sub">本层暂未配置网关节点。</div>':a.map(s=>`
                          <button type="button" class="dep-topo-node ${s.connectivity==="offline"?"is-issue":""}" data-topo-jump="${u(s.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${u(s.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                            <span class="pacom-row-sub">${u(s.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                          </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${o.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，可在「设备管理」抽屉中为传感器开启。</div>':o.map(s=>{const A=Me.get(s.id);return`
                            <button type="button" class="dep-topo-node ${s.connectivity==="offline"?"is-issue":""}" data-topo-jump="${u(s.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${u(s.name)}</strong><span class="pacom-badge pacom-badge--accent">${A?.proxy?"Proxy":""}${A?.proxy&&A?.relay?" + ":""}${A?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${u(Ue(s.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${n.length===0?'<div class="pacom-row-sub">本层暂无末端设备。</div>':n.map(s=>`
                          <button type="button" class="dep-topo-node ${s.connectivity==="offline"?"is-issue":""}" data-topo-jump="${u(s.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${u(s.name)}</strong><span class="pacom-badge ${s.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${s.connectivity==="online"?"在线":"离线"}</span></div>
                            <span class="pacom-row-sub">${u(Ue(s.logicalZoneId))} · ${u(s.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                          </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${$.filter(s=>s.category==="sensor"||s.category==="gateway").map(s=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${u(s.id)}">
                      <strong>${u(s.name)}</strong>
                      <span class="pacom-row-sub">${s.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${$.filter(s=>s.category==="lighting"||s.category==="hvac").map(s=>`
                    <button type="button" class="dep-topo-node ${s.connectivity==="offline"?"is-issue":""}" data-topo-jump="${u(s.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${u(s.name)}</strong><span class="pacom-badge ${s.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${s.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${u(Ue(s.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${k.map(s=>{const A=$.filter(_=>_.logicalZoneId===s.id),g=A.some(_=>_.connectivity==="offline");return`
                      <div class="dep-topo-node ${g?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${u(s.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${g?"pacom-badge--warning":"pacom-badge--online"}">${A.length} 台设备</span></div>
                        <span class="pacom-row-sub">${g?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function Ya(v){if(M.projects.length===0)return He(v,"plug");const $=K.reduce((w,a)=>w+a.collectedPoints,0),k=K.reduce((w,a)=>w+a.calculatedPoints,0),I=K.filter(w=>w.status==="connected").length,D=K.filter(w=>w.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${I}<span class="pacom-kpi-unit">/ ${K.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${K.length?Math.round(I/K.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${$}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${k}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${D.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${D.length} 条采集通道通信降级（${D.map(w=>w.name).join("、")}）</span>
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
                ${K.map(w=>{const a=ut[w.status]??{label:w.status,cls:"pacom-badge--neutral"},o=w.status==="connected"?98:w.status==="degraded"?62:0,n=o>=75?"var(--pacom-status-online)":o>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",s=De===w.id,A=s?vt(w,pe):[];return`
                      <tr>
                        <td><strong>${u(w.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${w.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${u(w.endpoint)}</code></td>
                        <td>采集 ${w.collectedPoints} / 计算 ${w.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${a.cls}">${a.label}</span>
                            <span class="pacom-row-sub">${o}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${o}%; background:${n};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${u(w.id)}">${s?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${u(w.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${u(w.id)}" data-endpoint-val="${u(w.endpoint)}">${ie===w.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${s?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${u(w.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${A.map(g=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${u(g.deviceName)}</strong> · ${u(g.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${u(g.value)} · ${u(g.lastSeen)}</span>
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
    `}function Qa(v){const $=[],k=M.projects.find(w=>w.id===P)??M.projects[0]??null,I=M.buildings.find(w=>w.id===W)??(k?M.buildings.find(w=>w.projectId===k.id):null)??null;if(x&&$.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
          <form class="dep-modal-card" data-create-project="1">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建项目</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${X("x",16)}</button>
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
        </div>`),q&&k){const a=M.buildings.filter(o=>o.projectId===k.id).reduce((o,n)=>o+Ce(n.id).reduce((s,A)=>s+Le(A.id).length,0),0);$.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
          <form class="dep-modal-card" data-save-project="${u(k.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑项目：${u(k.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${X("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${u(k.imageUrl??"./media/gzlab.jpg")}" alt="${u(k.name)}" style="width:84px; height:54px; object-fit:cover; border-radius:6px; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">项目封面图</div>
                  <div class="pacom-row-sub">用于空间总览的园区俯瞰展示</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>更换封面</span>
                  <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${u(k.id)}" style="display:none;" ${v?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${u(k.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${u(k.city??"")}" /></label>
                <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${u(k.address??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${u(k.location?.lng??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${u(k.location?.lat??"")}" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${u(k.id)}" ${!v||a>0?`disabled title="${a>0?`包含 ${a} 台运行中设备，请先解绑后再删除`:"只读"}"`:""}>删除项目</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${v?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}Ie&&k&&$.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
          <form class="dep-modal-card" data-create-bld="${u(k.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建楼宇（${u(k.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${X("x",16)}</button>
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
        </div>`);const D=F?M.buildings.find(w=>w.id===F)??null:null;if(D){const w=Ce(D.id),a=w.reduce((n,s)=>n+Le(s.id).length,0),o=Xe(D);$.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
          <form class="dep-modal-card" data-save-building="${u(D.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑楼宇：${u(D.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${X("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${u(D.imageUrl??"./media/building-e.webp")}" alt="${u(D.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:6px; background:#fff; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">楼宇外观 / 白模图</div>
                  <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>替换图片</span>
                  <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${u(D.id)}" style="display:none;" ${v?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${u(D.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${u(D.areaSqm??"")}" placeholder="选填" /></label>
                <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${D.aboveFloors}" /></label>
                <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${D.belowFloors}" /></label>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                <label style="display:inline-flex; align-items:center; gap:6px; font-size:13px;"><input type="checkbox" name="bRoof" ${D.hasRoof?"checked":""} />含屋面层 (RF)</label>
                ${o.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${u(D.id)}">一键补齐缺失 ${o.length} 层</button>`:`<span class="pacom-row-sub">已配置 ${w.length} 个楼层</span>`}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${u(D.id)}" ${!v||a>0?`disabled title="${a>0?"包含运行中设备，请先解绑后再删除":"只读"}"`:""}>删除楼宇</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${v?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}if(d&&I&&$.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
          <form class="dep-modal-card" data-create-floor="${u(I.id)}" style="width:min(420px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增楼层（${u(I.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${X("x",16)}</button>
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
        </div>`),f&&I){const w=Ce(I.id),a=Se.filter(o=>!!o.matchedFloorId).length;$.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
          <div class="dep-modal-card dep-modal-card--wide">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">批量导入 ${u(I.name)} 平面底图</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${X("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-upload-drop" data-batch-dropzone="${u(I.id)}" style="padding:20px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${Te?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
                <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
                <span class="pacom-row-sub">自动识别 01F、首层、屋面、RF、B1 等中英文文件名，支持手动调整对应楼层</span>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; margin-top:4px;">
                  <span>选择多张图片</span>
                  <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${u(I.id)}" style="display:none;" ${v?"":"disabled"} />
                </label>
              </div>
              ${Se.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                      <div class="pacom-row-sub">已选 ${Se.length} 张图片，已匹配 ${a} 层：</div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:6px; max-height:220px; overflow-y:auto;">
                        ${Se.map(o=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${u(o.file.name)}">${u(o.file.name)}</span>
                              <select class="pacom-select" name="overrideFloor_${u(o.id)}" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${u(o.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${w.map(n=>`<option value="${u(n.id)}" ${o.matchedFloorId===n.id?"selected":""}>${u(n.name)}</option>`).join("")}
                              </select>
                            </div>`).join("")}
                      </div>
                    </div>`:""}
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-batch-upload="1" ${Se.length===0?"disabled":""}>清空已选</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">关闭</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-batch-upload="1" ${a===0?"disabled":""}>确认导入（${a} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(B&&I){const w=Be().find(o=>o.id===B),a=Ce(I.id).filter(o=>o.id!==B);w&&a.length>0&&$.push(`
          <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
            <div class="dep-modal-card">
              <div class="dep-modal-head">
                <strong style="font-size:15px; font-weight:500;">复用 ${u(w.name)} 功能区至其他楼层</strong>
                <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${X("x",16)}</button>
              </div>
              <div class="dep-modal-body">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <span class="pacom-row-sub">勾选目标楼层（已选 ${ge.size} 层）</span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                  </div>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${a.map(o=>{const n=ge.has(o.id),s=qe().filter(A=>A.floorId===o.id).length;return`
                        <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${n}">
                          <input type="checkbox" name="copyFloor_${u(o.id)}" data-copy-target-floor="${u(o.id)}" ${n?"checked":""} style="margin:0;" />
                          <span>${u(o.name)}${s>0?` (${s}区)`:""}</span>
                        </label>`}).join("")}
                </div>
              </div>
              <div class="dep-modal-foot">
                <span></span>
                <div style="display:flex; gap:8px;">
                  <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                  <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${u(w.id)}" ${ge.size===0?"disabled":""}>确认复制（${ge.size} 层）</button>
                </div>
              </div>
            </div>
          </div>`)}if(j){const w=qe().filter(a=>a.floorId===V);$.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
          <form class="dep-modal-card" data-create-dev="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增设备</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${X("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">设备名称</span>
                <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">设备类型</span>
                  <select class="pacom-select" name="devPreset">${ga.map(a=>`<option value="${a.key}">${a.label}</option>`).join("")}</select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">所属功能区</span>
                  <select class="pacom-select" name="devZone">
                    <option value="">暂不分配</option>
                    ${w.map(a=>`<option value="${u(a.id)}">${u(a.name)}</option>`).join("")}
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
        </div>`)}return r&&$.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建分组">
          <form class="dep-modal-card" data-create-group="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建设备分组</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${X("x",16)}</button>
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
        </div>`),L&&$.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增接入通道">
          <form class="dep-modal-card" data-create-conn="1" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增子系统接入通道</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${X("x",16)}</button>
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
        </div>`),$.join("")}function E(){const v=i.scope.canEditDeployment,$=i.scope.activeOverrides.find(o=>o.module==="deployment"&&o.status==="active"),k=$?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 · ${$.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${u($.approvedBy)} · 到期自动收回：${u($.expiresAt.slice(0,16).replace("T"," "))} · 事由：${u($.reason)}</span>
          </div>
        </div>`:"",I=p==="devices"&&S==="marking",D=Na[p],w=p==="devices"?S==="marking"?"设备标记":S==="list"?"设备列表":"设备分组":D.title,a=p==="devices"?S==="marking"?"在 2D 平面底图上完成设备坐标标记、回路灯点布置与硬件绑定。":S==="list"?"核查本层四态设备清单，点击任意行配置硬件绑定、人感/光感参数或执行自检。":"管理端侧蓝牙 Mesh 自治联动组与云端业务分组。":D.subtitle;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${oa({tree:M,session:i,scope:z,maxGranularity:D.granularity,isOpen:re,searchKeyword:oe})}
            </div>
            <div class="pacom-header-meta">
              ${v?$?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${Ba()}
          ${I?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${w}</h2>
                      <p class="pacom-unified-subtitle">${a}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${wa(v)}
                    </div>
                  </div>
                  ${k}
                  ${H?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${u(H)}</span></div>`:""}
                  ${ne?`<div class="pacom-alert-banner">${u(ne)}</div>`:""}
                  ${Za(v)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head pacom-unified-head--split">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${w}</h2>
                      <p class="pacom-unified-subtitle">${a}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${wa(v)}
                    </div>
                  </div>
                  ${k}
                  ${H?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${u(H)}</span></div>`:""}
                  ${ne?`<div class="pacom-alert-banner">${u(ne)}</div>`:""}
                  ${p==="overview"?Ua(v):p==="project_config"?Va(v):p==="devices"?S==="list"?Ga(v):Wa(v):p==="network_topo"?Ka(v):Ya(v)}
                </div>
              </div>`}
          ${Ha(v)}
        </div>
      </div>
      ${Qa(v)}
      ${Fe?`
          <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${u(Fe.title)}">
            <div class="dep-lightbox-card">
              <div class="dep-lightbox-head">
                <strong style="font-size:14px; font-weight:500;">${u(Fe.title)}</strong>
                <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${X("x",16)}</button>
              </div>
              <div class="dep-lightbox-body">
                <img src="${u(Fe.imageUrl)}" alt="${u(Fe.title)}" />
              </div>
            </div>
          </div>`:""}
    `,Ja()}function Ja(){ia(t,{onToggle:()=>{re=!re,E(),re&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:a=>{oe=a,E();const o=t.querySelector("[data-global-space-search]");o&&(o.focus(),o.setSelectionRange(a.length,a.length))},onPick:a=>{if(z=a,re=!1,a.level==="project"){P=a.projectId;const o=M.buildings.find(n=>n.projectId===a.projectId);o?ra(o.id):(W="",V="",te=null)}else a.level==="building"?ra(a.buildingId):a.level==="floor"&&Ke(a.floorId);E()}}),t.querySelectorAll("[data-dep-nav]").forEach(a=>{a.addEventListener("click",()=>{p=a.dataset.depNav??"overview",a.dataset.devSubtabJump&&(S=a.dataset.devSubtabJump),Z=!1,U=!1,H="",ne="",E()})}),t.querySelectorAll("[data-dev-subtab]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.devSubtab??"marking";S=o,o==="groups"&&(Z=!1,U=!1),H="",ne="",E()})}),t.querySelectorAll("[data-drawer-tab]").forEach(a=>{a.addEventListener("click",()=>{O=a.dataset.drawerTab??"binding",E()})}),t.querySelector("[data-list-search]")?.addEventListener("input",a=>{N=a.currentTarget.value,E();const o=t.querySelector("[data-list-search]");o&&(o.focus(),o.setSelectionRange(N.length,N.length))}),t.querySelector("[data-list-filter]")?.addEventListener("change",a=>{C=a.currentTarget.value??"all",E()}),t.querySelectorAll("[data-refresh-dep]").forEach(a=>{a.addEventListener("click",()=>{Ee()})}),t.querySelectorAll("[data-matrix-nav]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.matrixFloor;o&&Ke(o),p=a.dataset.matrixNav??"devices",a.dataset.matrixSub&&(S=a.dataset.matrixSub),a.dataset.matrixExpand==="1"&&o&&(te=o),E()})}),t.querySelectorAll("[data-scrubber-floor]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.scrubberFloor;o&&(Ke(o),E())})}),t.querySelectorAll("[data-close-modals]").forEach(a=>{a.addEventListener("click",()=>{ke(),E()})}),t.querySelectorAll("[data-modal-scrim]").forEach(a=>{a.addEventListener("click",o=>{o.target===a&&(ke(),E())})}),t.querySelectorAll("[data-open-new-proj]").forEach(a=>{a.addEventListener("click",()=>{ke(),x=!0,E()})}),t.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{ke(),q=!0,E()}),t.querySelectorAll("[data-open-new-bld]").forEach(a=>{a.addEventListener("click",()=>{ke(),Ie=!0,E()})}),t.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{ke(),d=!0,E()}),t.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{ke(),f=!0,E()}),t.querySelectorAll("[data-open-new-dev]").forEach(a=>{a.addEventListener("click",()=>{ke(),j=!0,E()})}),t.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{ke(),r=!0,E()}),t.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{ke(),L=!0,E()}),t.querySelectorAll("[data-select-building]").forEach(a=>{a.addEventListener("click",o=>{if(o.target?.closest("button, label, input"))return;const n=a.dataset.selectBuilding;n&&n!==W&&(ra(n),xe="all",te=null,E())})}),t.querySelectorAll("[data-edit-building]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation(),ke(),F=a.dataset.editBuilding??null,E()})}),t.querySelectorAll("[data-toggle-expand-floor]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.toggleExpandFloor??null;te=te===o?null:o,te&&Ke(te),y=null,E()})}),t.querySelectorAll("[data-jump-floor-marking]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.jumpFloorMarking;o&&Ke(o),p="devices",S="marking",E()})}),t.querySelector("[data-jump-floor-config]")?.addEventListener("click",a=>{const o=a.currentTarget.dataset.jumpFloorConfig;p="project_config",o&&(te=o),E()}),t.querySelectorAll("[data-floor-detail-tab]").forEach(a=>{a.addEventListener("click",()=>{he=a.dataset.floorDetailTab??"zones",E()})}),t.querySelectorAll("[data-floor-list-filter]").forEach(a=>{a.addEventListener("click",()=>{xe=a.dataset.floorListFilter??"all",E()})}),t.querySelector("[data-create-project]")?.addEventListener("submit",async a=>{a.preventDefault();const o=new FormData(a.currentTarget),n=String(o.get("pName")??"").trim(),s=String(o.get("pCity")??"").trim(),A=String(o.get("pAddr")??"").trim(),g=String(o.get("pLng")??"").trim(),_=String(o.get("pLat")??"").trim();if(!n)return;let fe;if(g||_){const be=Number(g),we=Number(_);if(!Number.isFinite(be)||!Number.isFinite(we)||be<-180||be>180||we<-90||we>90){ne="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",E();return}fe={lng:be,lat:we,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const be=await e.createProject?.({name:n,city:s,address:A,location:fe});ke(),p="project_config",be&&(P=be.id,W="",V="",te=null,z=We({level:"project",projectId:be.id})),H=`已创建项目「${n}」，下一步可添加园区楼宇。`,await Ee()}catch(be){ne=be instanceof Error?be.message:String(be),E()}}),t.querySelector("[data-save-project]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.saveProject??P,s=new FormData(o),A=String(s.get("pName")??"").trim(),g=String(s.get("pCity")??"").trim(),_=String(s.get("pAddr")??"").trim(),fe=String(s.get("pLng")??"").trim(),be=String(s.get("pLat")??"").trim();let we;if(fe||be){const ce=Number(fe),Y=Number(be);if(!Number.isFinite(ce)||!Number.isFinite(Y)||ce<-180||ce>180||Y<-90||Y>90){ne="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",E();return}we={lng:ce,lat:Y,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await e.updateProject?.(n,{name:A,city:g,address:_,location:we}),ke(),H=`已保存项目「${A||"当前项目"}」信息。`,await Ee()}catch(ce){ne=ce instanceof Error?ce.message:String(ce),E()}}),t.querySelector("[data-upload-proj]")?.addEventListener("change",async a=>{const o=a.currentTarget,n=o.dataset.uploadProj,s=o.files?.[0];if(!(!n||!s))try{const A=await sa(s);await e.updateProject?.(n,{imageUrl:A}),H=`已更新项目封面图（${s.name}）。`,await Ee()}catch(A){ne=A instanceof Error?A.message:String(A),E()}}),t.querySelector("[data-delete-proj]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.deleteProj,n=M.projects.find(s=>s.id===o);if(!(!o||!n)&&window.confirm(`确认删除项目「${n.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await e.deleteProject?.(o),ke(),H=`已删除项目「${n.name}」。`,await Ee()}catch(s){ne=s instanceof Error?s.message:String(s),E()}}),t.querySelector("[data-create-bld]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.createBld??P,s=new FormData(o),A=String(s.get("bName")??"").trim(),g=String(s.get("bArea")??"").trim(),_=Math.max(1,Number(s.get("bAbove")??12)),fe=Math.max(0,Number(s.get("bBelow")??0)),be=!!s.get("bRoof"),we=!!s.get("bAutoFloors");if(A)try{const ce=await e.upsertBuilding?.({projectId:n,name:A,aboveFloors:_,belowFloors:fe,hasRoof:be,areaSqm:g?Number(g):null});ke();let Y=0;if(ce&&(W=ce.id,we)){for(let Ae=1;Ae<=_;Ae+=1)await e.upsertFloor?.({buildingId:ce.id,kind:"above",level:Ae,name:`${Ae}F`}),Y+=1;for(let Ae=1;Ae<=fe;Ae+=1)await e.upsertFloor?.({buildingId:ce.id,kind:"below",level:-Ae,name:`B${Ae}`}),Y+=1;be&&(await e.upsertFloor?.({buildingId:ce.id,kind:"roof",level:99,name:"RF"}),Y+=1)}H=we?`已创建楼宇「${A}」并自动生成 ${Y} 个楼层。`:`已创建楼宇「${A}」。`,await Ee()}catch(ce){ne=ce instanceof Error?ce.message:String(ce),E()}}),t.querySelector("[data-save-building]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.saveBuilding,s=M.buildings.find(ce=>ce.id===n);if(!s)return;const A=new FormData(o),g=String(A.get("bName")??"").trim()||s.name,_=String(A.get("bArea")??"").trim(),fe=Math.max(1,Number(A.get("bAbove")??s.aboveFloors)),be=Math.max(0,Number(A.get("bBelow")??s.belowFloors)),we=!!A.get("bRoof");try{await e.upsertBuilding?.({id:n,projectId:s.projectId,name:g,aboveFloors:fe,belowFloors:be,hasRoof:we,areaSqm:_?Number(_):null}),ke(),H=`已保存楼宇「${g}」参数。`,await Ee()}catch(ce){ne=ce instanceof Error?ce.message:String(ce),E()}}),t.querySelector("[data-delete-building]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.deleteBuilding,n=M.buildings.find(s=>s.id===o);if(!(!o||!n)&&window.confirm(`确认删除楼宇「${n.name}」及其下全部楼层与功能区？`))try{await e.deleteBuilding?.(o),ke(),H=`已删除楼宇「${n.name}」。`,await Ee()}catch(s){ne=s instanceof Error?s.message:String(s),E()}}),t.querySelector("[data-upload-bld]")?.addEventListener("change",async a=>{const o=a.currentTarget,n=o.dataset.uploadBld,s=o.files?.[0],A=M.buildings.find(g=>g.id===n);if(!(!n||!s||!A))try{const g=await sa(s);await e.upsertBuilding?.({id:A.id,projectId:A.projectId,name:A.name,aboveFloors:A.aboveFloors,belowFloors:A.belowFloors,hasRoof:A.hasRoof,areaSqm:A.areaSqm,imageUrl:g}),H=`已更新「${A.name}」外观图（${s.name}）。`,await Ee()}catch(g){ne=g instanceof Error?g.message:String(g),E()}}),t.querySelectorAll("[data-fill-missing-floors]").forEach(a=>{a.addEventListener("click",async o=>{o.stopPropagation();const n=a.dataset.fillMissingFloors;if(n)try{const s=await Pa(n);H=s>0?`已自动补齐 ${s} 个楼层。`:"当前楼宇楼层已完整。",await Ee()}catch(s){ne=s instanceof Error?s.message:String(s),E()}})}),t.querySelector("[data-create-floor]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.createFloor,s=new FormData(o),A=String(s.get("fName")??"").trim().toUpperCase(),g=String(s.get("fArea")??"").trim();if(!A)return;const _=Ge(A)??A;if(Ce(n).some(Y=>(Ge(Y.name)??Y.name.toUpperCase())===_)){ne=`楼层「${A}」已存在，请使用其他名称。`,E();return}const be=ta(A),we=be>=999?"roof":be<0?"below":"above",ce=be>=999?99:be||1;try{const Y=await e.upsertFloor?.({buildingId:n,kind:we,level:ce,name:A,areaSqm:g?Number(g):null});ke(),Y&&(V=Y.id,te=Y.id),H=`已新增楼层「${A}」。`,await Ee()}catch(Y){ne=Y instanceof Error?Y.message:String(Y),E()}}),t.querySelector("[data-save-floor]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.saveFloor,s=Be().find(Ae=>Ae.id===n);if(!s)return;const A=new FormData(o),g=String(A.get("fName")??"").trim()||s.name,_=String(A.get("fArea")??"").trim(),fe=Ge(g)??g.toUpperCase();if(Ce(s.buildingId).some(Ae=>Ae.id!==s.id&&(Ge(Ae.name)??Ae.name.toUpperCase())===fe)){ne=`楼层「${g}」已存在，请避免重复命名。`,E();return}const we=ta(g),ce=we>=999?"roof":we<0?"below":"above",Y=we>=999?99:we||s.level;try{await e.upsertFloor?.({id:s.id,buildingId:s.buildingId,kind:ce,level:Y,name:g,areaSqm:_?Number(_):null}),H=`已保存楼层「${g}」。`,await Ee()}catch(Ae){ne=Ae instanceof Error?Ae.message:String(Ae),E()}}),t.querySelector("[data-delete-floor]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.deleteFloor,n=Be().find(s=>s.id===o);if(!(!o||!n)){if(Le(o).length>0){ne=`楼层「${n.name}」已关联设备，请先解绑后再删除。`,E();return}if(window.confirm(`确认删除楼层「${n.name}」及其功能区？`))try{await e.deleteFloor?.(o),te=null,H=`已删除楼层「${n.name}」。`,await Ee()}catch(s){ne=s instanceof Error?s.message:String(s),E()}}});async function v(a,o){const n=Be().find(s=>s.id===a);if(n)try{const s=await sa(o);await e.upsertFloor?.({id:n.id,buildingId:n.buildingId,kind:n.kind,level:n.level,name:n.name,areaSqm:n.areaSqm,planImageUrl:s}),H=`已更新「${n.name}」平面底图（${o.name}）。`,await Ee()}catch(s){ne=s instanceof Error?s.message:String(s),E()}}t.querySelectorAll("[data-upload-floor]").forEach(a=>{a.addEventListener("change",()=>{const o=a.dataset.uploadFloor,n=a.files?.[0];o&&n&&v(o,n)})});const $=t.querySelector("[data-single-floor-drop]");$&&i.scope.canEditDeployment&&($.addEventListener("dragover",a=>{a.preventDefault(),$.style.borderColor="var(--pacom-accent-solid)"}),$.addEventListener("dragleave",()=>{$.style.borderColor=""}),$.addEventListener("drop",a=>{a.preventDefault(),$.style.borderColor="";const o=$.dataset.singleFloorDrop,n=Array.from(a.dataTransfer?.files??[]).find(s=>s.type.startsWith("image/"));o&&n&&v(o,n)})),t.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.clearFloorPlan,n=Be().find(s=>s.id===o);if(!(!o||!n)&&window.confirm(`确认清空「${n.name}」的平面底图？`))try{await e.upsertFloor?.({id:n.id,buildingId:n.buildingId,kind:n.kind,level:n.level,name:n.name,areaSqm:n.areaSqm,planImageUrl:null}),H=`已清空「${n.name}」平面底图。`,await Ee()}catch(s){ne=s instanceof Error?s.message:String(s),E()}}),t.querySelectorAll("[data-open-lightbox]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.lbTitle??"平面底图预览",n=a.dataset.lbSrc??"";n&&(Fe={title:o,imageUrl:n},E())})}),t.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{Fe=null,E()}),t.querySelector("[data-lightbox-scrim]")?.addEventListener("click",a=>{a.target===a.currentTarget&&(Fe=null,E())});function k(a,o){if(!a||o.length===0)return;const n=Ce(a),s=new Map;n.forEach(A=>{const g=Ge(A.name)??A.name.toUpperCase();s.set(g,A)}),Se=o.map((A,g)=>{const _=Ge(A.name),fe=_?s.get(_):void 0;return{id:`bu-${Date.now().toString(36)}-${g}`,file:A,matchedFloorId:fe?.id??null}}),f=!0,E()}t.querySelector("[data-batch-upload-floors]")?.addEventListener("change",a=>{const o=a.currentTarget;k(o.dataset.batchUploadFloors??"",Array.from(o.files??[]))});const I=t.querySelector("[data-batch-dropzone]");I&&i.scope.canEditDeployment&&(I.addEventListener("dragover",a=>{a.preventDefault(),Te||(Te=!0,I.style.borderColor="var(--pacom-accent-solid)",I.style.background="var(--pacom-accent-soft)")}),I.addEventListener("dragleave",()=>{Te=!1,I.style.borderColor="",I.style.background=""}),I.addEventListener("drop",a=>{a.preventDefault(),Te=!1;const o=Array.from(a.dataTransfer?.files??[]).filter(n=>n.type.startsWith("image/"));k(I.dataset.batchDropzone??"",o)})),t.querySelectorAll("[data-batch-override-floor]").forEach(a=>{a.addEventListener("change",()=>{const o=Se.find(n=>n.id===a.dataset.batchOverrideFloor);o&&(o.matchedFloorId=a.value||null,E())})}),t.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{Se=[],E()}),t.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const a=Se.filter(n=>n.matchedFloorId),o=Se.length-a.length;if(a.length!==0)try{for(const n of a){const s=Be().find(g=>g.id===n.matchedFloorId);if(!s)continue;const A=await sa(n.file);await e.upsertFloor?.({id:s.id,buildingId:s.buildingId,kind:s.kind,level:s.level,name:s.name,areaSqm:s.areaSqm,planImageUrl:A})}Se=[],ke(),H=`已批量导入 ${a.length} 个楼层平面底图${o>0?`（跳过 ${o} 张未分配文件）`:""}。`,await Ee()}catch(n){ne=n instanceof Error?n.message:String(n),E()}}),t.querySelectorAll("[data-apply-zone-tpl]").forEach(a=>{a.addEventListener("click",async()=>{const o=La.find(s=>s.key===a.dataset.applyZoneTpl),n=Be().find(s=>s.id===a.dataset.tplFloor);if(!(!o||!n))try{for(const s of o.items){const A=await e.upsertZone?.({floorId:n.id,name:`${n.name} ${s.suffix}`,category:s.category});A&&(se[A.id]={left:20,top:20,width:24,height:24})}H=`已按「${o.label}」模板为 ${n.name} 创建 ${o.items.length} 个功能区。`,await Ee()}catch(s){ne=s instanceof Error?s.message:String(s),E()}})}),t.querySelector("[data-attach-doc]")?.addEventListener("change",a=>{const o=a.currentTarget,n=o.dataset.attachDoc,s=o.files?.[0],A=Be().find(_=>_.id===n);if(!n||!s||!A)return;const g=s.size>=1024*1024?`${(s.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(s.size/1024))} KB`;G.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:n,name:s.name,category:s.name.toLowerCase().endsWith(".xlsx")||s.name.toLowerCase().endsWith(".xls")?"点位清单":"竣工图纸",boundScope:`${A.name} · 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:g}),H=`已为 ${A.name} 关联文档「${s.name}」。`,E()}),t.querySelector("[data-add-zone]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget.dataset.addZone,n=new FormData(a.currentTarget),s=String(n.get("zoneName")??"").trim(),A=String(n.get("zoneCat")??"office");if(s)try{const g=await e.upsertZone?.({floorId:o,name:s,category:A});g&&(se[g.id]={left:20,top:20,width:24,height:24}),H=`已添加功能区「${s}」。`,await Ee()}catch(g){ne=g instanceof Error?g.message:String(g),E()}}),t.querySelectorAll("[data-edit-zone]").forEach(a=>{a.addEventListener("click",()=>{y=a.dataset.editZone??null,E()})}),t.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{y=null,E()}),t.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=new FormData(o),s=String(n.get("zName")??"").trim(),A=String(n.get("zCat")??"office");if(s)try{await e.upsertZone?.({id:o.dataset.saveEditZone,floorId:o.dataset.zoneFloor,name:s,category:A}),y=null,H=`已更新功能区「${s}」。`,await Ee()}catch(g){ne=g instanceof Error?g.message:String(g),E()}}),t.querySelectorAll("[data-del-zone]").forEach(a=>{a.addEventListener("click",async()=>{const o=a.dataset.delZone,n=qe().find(s=>s.id===o);if(!(!o||!n)&&window.confirm(`确认删除功能区「${n.name}」？`))try{await e.deleteZone?.(o),y===o&&(y=null),H=`已删除功能区「${n.name}」。`,await Ee()}catch(s){ne=s instanceof Error?s.message:String(s),E()}})}),t.querySelectorAll("[data-open-copy-zones]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.openCopyZones??null;ke(),B=o,ge=new Set(Ce(W).filter(n=>n.id!==o&&n.kind==="above"&&qe().filter(s=>s.floorId===n.id).length===0).map(n=>n.id)),E()})}),t.querySelectorAll("[data-copy-preset]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.copyPreset,n=Ce(W).filter(s=>s.id!==B);o==="empty"?ge=new Set(n.filter(s=>s.kind==="above"&&qe().filter(A=>A.floorId===s.id).length===0).map(s=>s.id)):o==="above"?ge=new Set(n.filter(s=>s.kind==="above").map(s=>s.id)):ge.clear(),E()})}),t.querySelectorAll("[data-copy-target-floor]").forEach(a=>{a.addEventListener("change",()=>{const o=a.dataset.copyTargetFloor;o&&(a.checked?ge.add(o):ge.delete(o),E())})}),t.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.confirmCopyZones,n=Array.from(ge);if(!(!o||n.length===0))try{const s=await e.copyZonesToFloors?.(o,n)??0;ke(),ge.clear(),H=`已将当前层功能区复用至 ${n.length} 个目标楼层（共新增 ${s} 个功能区）。`,await Ee()}catch(s){ne=s instanceof Error?s.message:String(s),E()}});const D=t.querySelector("[data-dep-canvas-search]");D?.addEventListener("focus",()=>{Q||(Q=!0,E(),t.querySelector("[data-dep-canvas-search]")?.focus())}),D?.addEventListener("input",a=>{ee=a.currentTarget.value,Q=!0,E();const o=t.querySelector("[data-dep-canvas-search]");o&&(o.focus(),o.setSelectionRange(ee.length,ee.length))}),t.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{Q=!Q,E()}),t.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{Q=!1,E()}),t.querySelectorAll("[data-brush]").forEach(a=>{a.addEventListener("click",()=>{ue=a.dataset.brush??"device",E()})}),t.querySelectorAll("[data-dep-zoom]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.depZoom;o==="in"?ae=Math.min(2.6,Number((ae+.2).toFixed(2))):o==="out"?ae=Math.max(.6,Number((ae-.2).toFixed(2))):(ae=1,le=0,me=0),Je()})});const w=t.querySelector('[data-role="dep-stage"]');if(w&&!U){let a=!1,o=0,n=0,s=0,A=0;w.addEventListener("pointerdown",_=>{_.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(a=!0,o=_.clientX,n=_.clientY,s=le,A=me,w.classList.add("is-panning"),w.setPointerCapture?.(_.pointerId))}),w.addEventListener("pointermove",_=>{a&&(le=s+(_.clientX-o),me=A+(_.clientY-n),Je())});const g=()=>{a&&(a=!1,w.classList.remove("is-panning"))};w.addEventListener("pointerup",g),w.addEventListener("pointercancel",g),w.addEventListener("wheel",_=>{_.preventDefault();const fe=_.deltaY<0?.12:-.12;ae=Math.max(.6,Math.min(2.6,Number((ae+fe).toFixed(2)))),Je()},{passive:!1}),w.addEventListener("dblclick",_=>{_.target?.closest("button")||(ae=1,le=0,me=0,Je())})}t.querySelectorAll("[data-dev-filter]").forEach(a=>{a.addEventListener("click",()=>{ve=a.dataset.devFilter??"all",E()})}),t.querySelector("[data-create-dev]")?.addEventListener("submit",a=>{a.preventDefault();const o=new FormData(a.currentTarget),n=String(o.get("devName")??"").trim(),s=String(o.get("devPreset")??"sensor"),A=String(o.get("devZone")??"")||null,g=ga.find(fe=>fe.key===s)??ga[0],_=`dev-custom-${Date.now().toString(36)}`;T.push({id:_,name:n,category:g.category,projectId:P||h.projectId,buildingId:W,floorId:V,logicalZoneId:A,planPoint:{floorId:V,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),Me.set(_,{proxy:g.defaultProxy,relay:g.defaultRelay,meshUuid:`mesh-${V.slice(-4)}`}),g.category==="lighting"&&Ve.push({id:`lm-${Date.now().toString(36)}`,deviceId:_,channel:"回路 1",label:`${n.slice(0,6)}主灯`,x:.52,y:.45}),ke(),b=_,Z=!0,O="binding",ye=!0,H=`已新增「${n}」（${g.hint}），已生成默认标记并提示待同步边缘。`,E()}),t.querySelectorAll("[data-pick-dev]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation(),b=a.dataset.pickDev??null,Z=!0,O="binding",R=Le(V).find(s=>s.id===b)?.physicalInstalled??!1,E()})}),t.querySelectorAll("[data-open-dev-drawer]").forEach(a=>{a.addEventListener("click",o=>{if(o.target?.closest("button"))return;b=a.dataset.openDevDrawer??null,Z=!0,O="binding",R=Le(V).find(s=>s.id===b)?.physicalInstalled??!1,E()})}),t.querySelectorAll("[data-open-dev-params]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation(),b=a.dataset.openDevParams??null,Z=!0,O="params",R=Le(V).find(s=>s.id===b)?.physicalInstalled??!1,E()})}),t.querySelector("[data-close-sel]")?.addEventListener("click",()=>{Z=!1,U=!1,E()}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{S!=="marking"?(S="marking",U=!0):U=!U,E()}),t.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{R=!R,E()}),t.querySelectorAll("[data-ping-dev]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation();const n=Le(V).find(s=>s.id===a.dataset.pingDev);n&&(H=`已向「${n.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,E())})}),t.querySelector("[data-add-light-marker]")?.addEventListener("click",a=>{const o=a.currentTarget.dataset.addLightMarker,n=Ve.filter(s=>s.deviceId===o).length+1;Ve.push({id:`lm-${Date.now().toString(36)}`,deviceId:o,channel:`回路 ${n}`,label:`照明点位 ${n}`,x:Math.min(.86,.35+n*.1),y:.42}),ue="light_marker",H=`已新增「回路 ${n}」可视化灯点。`,E()}),t.querySelectorAll("[data-del-light-marker]").forEach(a=>{a.addEventListener("click",()=>{const o=Ve.findIndex(n=>n.id===a.dataset.delLightMarker);o>=0&&Ve.splice(o,1),E()})}),t.querySelectorAll("[data-toggle-mesh-role]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.meshDev,n=a.dataset.toggleMeshRole,s=Me.get(o)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};s[n]=!s[n],Me.set(o,s),ye=!0,H=`已更新节点 ${n.toUpperCase()} 状态，可在「网络拓扑」中一键同步至边缘网关。`,E()})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async a=>{const o=Le(V).find(g=>g.id===b);if(!U||!o)return;const n=a.currentTarget.getBoundingClientRect(),s=Math.max(.02,Math.min(.98,(a.clientX-n.left)/n.width)),A=Math.max(.02,Math.min(.98,(a.clientY-n.top)/n.height));if(T.some(g=>g.id===o.id)){o.planPoint={floorId:V,planVersion:1,x:Number(s.toFixed(4)),y:Number(A.toFixed(4))},U=!1,H=`已更新「${o.name}」图上坐标。`,E();return}try{await e.updateDevicePlanPoint({deviceId:o.id,floorId:h.floorId,planVersion:o.planPoint?.planVersion??1,x:s,y:A,expectedVersion:o.version}),U=!1,H=`已更新「${o.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await Ee()}catch(g){ne=g instanceof Error?g.message:String(g),E()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async a=>{a.preventDefault();const o=Le(V).find(s=>s.id===b);if(!o)return;const n=new FormData(a.currentTarget);if(T.some(s=>s.id===o.id)){o.physicalInstalled=R,o.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(n.get("protocol")),networkAddress:String(n.get("networkAddress")??""),portOrChannel:String(n.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:i.displayName},o.version+=1,ye=!0,H=`已保存「${o.name}」的硬件绑定与物理复核状态。`,E();return}try{await e.updateDeviceHardwareBinding({deviceId:o.id,gatewayId:o.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(n.get("protocol")),networkAddress:String(n.get("networkAddress")??""),portOrChannel:String(n.get("portOrChannel")??""),physicalInstalled:R,expectedVersion:o.version}),ye=!0,H=`已保存「${o.name}」的硬件绑定与物理安装复核状态。`,await Ee()}catch(s){ne=s instanceof Error?s.message:String(s),E()}}),t.querySelector("[data-save-dev-params]")?.addEventListener("submit",a=>{a.preventDefault();const o=a.currentTarget.dataset.saveDevParams,n=new FormData(a.currentTarget);ha.set(o,{offDelayMin:Number(n.get("offDelayMin")??15),restoreMin:Number(n.get("restoreMin")??30),luxOn:Number(n.get("luxOn")??280),luxOff:Number(n.get("luxOff")??450)}),ye=!0,H="设备自治延时与光感门限参数已下发并同步至配置基线。",E()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const a=Le(V).find(o=>o.id===b);a&&$a(a)}),t.querySelectorAll("[data-ftt-dev]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation();const n=Le(V).find(s=>s.id===a.dataset.fttDev);n&&$a(n)})}),t.querySelectorAll("[data-batch-ftt]").forEach(a=>{a.addEventListener("click",()=>Ra())}),t.querySelectorAll("[data-export-inv]").forEach(a=>{a.addEventListener("click",()=>Ma())}),t.querySelector("[data-create-group]")?.addEventListener("submit",a=>{a.preventDefault();const o=new FormData(a.currentTarget),n=String(o.get("gName")??"").trim(),s=o.get("gTrack")??"mesh_auto",A=String(o.get("gType")??"灯光联动组");n&&(ca.unshift({id:`grp-${Date.now().toString(36)}`,track:s,groupType:A,name:n,floorId:V,includesAdapter:s==="mesh_auto",deviceIds:s==="mesh_auto"?["dev-e7f-gw-01"]:[]}),ke(),s==="mesh_auto"&&(ye=!0),H=`已新建${s==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${n}」。`,E())}),t.querySelectorAll("[data-test-group]").forEach(a=>{a.addEventListener("click",()=>{const o=ca.find(n=>n.id===a.dataset.testGroup);o&&(H=`已向分组「${o.name}」发送群组试控指令，${o.deviceIds.length} 台成员回读正常。`,E())})}),t.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>_a()),t.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{_e+=1,ye=!1,H=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${_e}）。`,E()}),t.querySelectorAll("[data-topo-mode]").forEach(a=>{a.addEventListener("click",()=>{de=a.dataset.topoMode??"mesh",E()})}),t.querySelectorAll("[data-topo-jump]").forEach(a=>{a.addEventListener("click",()=>{b=a.dataset.topoJump??null,Z=!0,O="binding",p="devices",S="marking",E()})}),t.querySelector("[data-create-conn]")?.addEventListener("submit",a=>{a.preventDefault();const o=new FormData(a.currentTarget),n=String(o.get("cName")??"").trim(),s=String(o.get("cProto")??"bacnet_ip"),A=String(o.get("cEndpoint")??"").trim();if(K.some(g=>g.endpoint===A)){ne=`端口冲突警告：局域网端点「${A}」已被其他通道占用，请更换端口后重试。`,E();return}K.unshift({id:`conn-${Date.now().toString(36)}`,projectId:P||h.projectId,buildingId:W,floorId:V,name:n,protocol:s,endpoint:A,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),ke(),ne="",H=`已接入「${n}」（${A}），连通测试通过（18 ms）。`,E()}),t.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{H="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",E()}),t.querySelectorAll("[data-expand-conn]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.expandConn??null;De=De===o?null:o,E()})}),t.querySelectorAll("[data-ping-conn]").forEach(a=>{a.addEventListener("click",()=>{const o=K.find(n=>n.id===a.dataset.pingConn);o&&(ne="",o.status==="connected"?H=`连通测试通过：「${o.name}」（${o.endpoint}）响应正常，延迟 18 ms。`:ne=`连通测试异常：「${o.name}」（${o.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,E())})}),t.querySelectorAll("[data-copy-endpoint]").forEach(a=>{a.addEventListener("click",async()=>{const o=a.dataset.endpointVal??"",n=a.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(o),ie=n,E(),window.setTimeout(()=>{ie=null,E()},1600)}catch{}})}),t.querySelectorAll("[data-preview-doc]").forEach(a=>{a.addEventListener("click",()=>{const o=[...Aa,...G].find(n=>n.id===a.dataset.previewDoc);o&&(H=`已调阅工程附件「${o.name}」（关联范围：${o.boundScope}，更新于 ${o.updatedAt}）。`,E())})}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const a=await e.freezeDeliveryBatch(h.floorId,"部署总览验收发起交付冻结");H=`已生成交付冻结快照 ${a.versionTag}（核验 ${a.verifiedCount}/${a.deviceCount}）。`,await Ee()}catch(a){ne=a instanceof Error?a.message:String(a),E()}})}await Ee()}const ht=new Set(["lighting","hvac","alarm_rules"]),Fa={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},na=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function yt(t){const e=new Set;for(const i of t.actions)i.command.startsWith("lighting")?e.add("照明"):i.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function $t(t,e,i){const c=i?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${t<e?`<div style="position:absolute; left:${t/24*100}%; width:${(e-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${c};"></div>`:`
        <div style="position:absolute; left:${t/24*100}%; width:${(24-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${c};"></div>
        <div style="position:absolute; left:0; width:${e/24*100}%; top:0; bottom:0; border-radius:999px; background:${c};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function wt(t,e,i){let c=la(),l=!1,p="",[S,O,N,C]=await Promise.all([e.getSpatialTree(),e.listScenes(h.floorId),e.getRuntimeSettings(h.projectId),e.getFloorDevices(h.floorId).catch(()=>[])]),z="manual",re="balanced",oe="all",ue=null,ve="",ee=!1,Q=!1,Z=!1,de="all",ae=null,le="",me="",M=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const pe=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],K=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],$e=[{deviceId:C[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],se=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${N.calendar.workdayStart} – ${N.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${N.calendar.nightGuardStart} – 次日 ${N.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],T=e.subscribeFloorEvents(h.floorId,async W=>{W.type==="control.receipt.updated"&&ue?.batchId===W.batchId&&(ue=await e.getControlBatch(W.batchId),P())});function P(){const W=ve.trim().toLowerCase(),V=W?O.filter(r=>`${r.name} ${r.description}`.toLowerCase().includes(W)):O,te=N.rules.filter(r=>ht.has(r.category)),xe=oe==="all"?te:oe==="cbm"?[]:te.filter(r=>r.category===oe),he=oe==="all"||oe==="cbm",x=de==="issues"?pe.filter(r=>r.status!=="verified"):pe,q=na.find(r=>r.id===re)??na[1],Ie=i.scope.canControlDevices,F=i.scope.canEditScenes,d=i.scope.canEditSettings,f=i.scope.activeOverrides.find(r=>r.module==="settings"&&r.status==="active");t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${oa({tree:S,session:i,scope:c,isOpen:l,searchKeyword:p})}
            </div>

            <div class="pacom-header-meta">
              ${z==="rules"?d?f?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${M.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${M.length>0?`人工覆盖中：${M.length} 台 ${X("chevron-down",12)}`:`全部自动托管 ${X("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${Z?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${pe.length}）</button>
              ${z==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${F?"":"disabled"}>${ee?"收起表单":"+ 新建场景"}</button>`:z==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${z==="manual"}" data-scene-tab="manual">快捷场景（${O.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${z==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${z==="rules"}" data-scene-tab="rules">条件联动（${te.length+K.length}）</button>
          </nav>
        </header>

        ${Q?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${M.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${X("x",16)}</button>
              </div>
              ${M.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':M.map(r=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${m(r.name)}</div>
                            <div class="pacom-row-sub">${m(r.reason)}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${m(r.id)}" ${Ie?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${M.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${Ie?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${Z?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${X("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${de==="all"}" data-log-filter="all">全部（${pe.length}）</button>
                  <button class="pacom-tab" aria-selected="${de==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${x.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${x.map(r=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${m(r.device)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${m(r.source)}</span>
                        </div>
                        <span class="pacom-row-sub">${m(r.action)} · ${m(r.at)}</span>
                      </div>
                      <span class="pacom-badge ${r.status==="verified"?"pacom-badge--online":r.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${r.status==="verified"?"回读确认":r.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${le?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${m(le)}</span></div>`:""}
          ${me?`<div class="pacom-alert-banner">${m(me)}</div>`:""}

          ${z==="manual"?`
              ${ue?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${m(ue.batchId)}</span>
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
                            ${ue.receipts.map(r=>`
                                <tr>
                                  <td><code style="font-size:12px;">${m(r.deviceId)}</code></td>
                                  <td>${m(r.command)}</td>
                                  <td>${m(String(r.targetValue))}${r.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${m(r.errorMessage)}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${r.status==="verified_success"?"pacom-badge--online":r.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${m(r.status)}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${ee?`
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
                          <span class="pacom-setting-title">联动动作列表（${$e.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${$e.map((r,L)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" name="draftDevice-${L}" data-draft-dev="${L}" aria-label="目标设备">
                                ${C.map(B=>`<option value="${m(B.id)}" ${B.id===r.deviceId?"selected":""}>${m(B.name)}</option>`).join("")}
                              </select>
                              <select class="pacom-select" name="draftCommand-${L}" data-draft-cmd="${L}" aria-label="执行指令">
                                <option value="lighting.dimming" ${r.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${r.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${r.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" name="draftTargetValue-${L}" data-draft-val="${L}" value="${m(r.targetValue)}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${L}" ${$e.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" ${F?"":"disabled"}>保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${m(ve)}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${V.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${V.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':V.map(r=>{const L=yt(r),B=r.actions.slice(0,3).map(ge=>{const Fe=C.find(Se=>Se.id===ge.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??ge.deviceId,Te=ge.command==="lighting.dimming"?`亮度 ${ge.targetValue}%`:ge.command==="hvac.setpoint"?`设温 ${ge.targetValue}°C`:ge.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${m(Fe)} → ${m(Te)}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${m(r.name)}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${L.map(ge=>`<span class="pacom-badge pacom-badge--accent">${m(ge)}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${r.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${m(r.description)}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${B}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${m(r.lastExecutedAt?r.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行")}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${m(r.id)}" ${Ie?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:z==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${q.title}</div>
                    <span class="pacom-kpi-delta">${q.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${q.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${q.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${M.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${na.map(r=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${re===r.id}" data-oss-mode="${r.id}" ${Ie?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${r.title}</strong>
                          <span class="pacom-badge ${re===r.id?"pacom-badge--online":"pacom-badge--neutral"}">${re===r.id?"当前生效":r.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${r.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${r.estSaving}</span>
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
                          ${se.map(r=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${m(r.name)}</span>
                                    ${r.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${m(r.windowLabel)}</div>
                                </td>
                                <td>${$t(r.startHour,r.endHour,r.enabled)}</td>
                                <td><span class="pacom-row-sub">${m(r.scope)}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${r.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${r.enabled}"
                                      aria-label="切换排程 ${m(r.name)}"
                                      data-toggle-schedule="${m(r.id)}"
                                      ${Ie?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(r=>{const L=r==="all"?"全部":Fa[r]??r,B=r==="all"?te.length+K.length:r==="cbm"?K.length:te.filter(ge=>ge.category===r).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${oe===r}" data-rule-cat="${r}">
                              <span>${L}</span><span class="pacom-count-num">${B}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${xe.map(r=>{const L=ae===r.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${m(Fa[r.category]??r.category)}</span>
                                  <span>${m(r.name)}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${r.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${m(r.summary)} · 范围：${m(r.scopeLabel)} · 回执：${m(r.receiptSummary??"已同步")}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${m(r.id)}">${L?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${r.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${r.enabled?"true":"false"}"
                                  aria-label="切换 ${m(r.name)}"
                                  data-toggle-strategy-rule="${m(r.id)}"
                                  data-rule-ver="${r.version}"
                                  data-rule-next="${!r.enabled}"
                                  ${d?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${L?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${r.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":r.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${m(r.scopeLabel)} · 当前版本：v${r.version} · 最近同步：${m(r.receiptSummary??"已同步")}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${he?K.map(r=>{const L=Math.min(100,Math.round(r.runtimeHours/r.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${m(r.name)}</span>
                                      <span class="pacom-badge ${L>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${r.runtimeHours} / ${r.thresholdHours} h（${L}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${L}%; background:${L>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${m(r.equipment)} · 上次重置：${m(r.lastReset)}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${r.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${r.enabled}" data-toggle-cbm="${m(r.id)}" aria-label="切换 ${m(r.name)}" ${d?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,ia(t,{onToggle:()=>{l=!l,P(),l&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:r=>{p=r,P();const L=t.querySelector("[data-global-space-search]");L&&(L.focus(),L.setSelectionRange(r.length,r.length))},onPick:r=>{c=r,l=!1,P()}}),t.querySelectorAll("[data-scene-tab]").forEach(r=>{r.addEventListener("click",()=>{z=r.dataset.sceneTab??"manual",le="",P()})}),t.querySelectorAll("[data-toggle-overrides]").forEach(r=>{r.addEventListener("click",()=>{Q=!Q,P()})}),t.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{Ie&&(M=[],le="已释放全部人工覆盖设备，自动节能策略已恢复托管。",P())}),t.querySelectorAll("[data-release-one]").forEach(r=>{r.addEventListener("click",()=>{if(!Ie)return;const L=r.dataset.releaseOne;M=M.filter(B=>B.id!==L),le="已恢复该设备的自动策略托管。",P()})}),t.querySelectorAll("[data-toggle-cmdlog]").forEach(r=>{r.addEventListener("click",()=>{Z=!Z,P()})}),t.querySelectorAll("[data-log-filter]").forEach(r=>{r.addEventListener("click",()=>{de=r.dataset.logFilter??"all",P()})}),t.querySelector("[data-close-batch]")?.addEventListener("click",()=>{ue=null,P()}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(r=>{r.addEventListener("click",()=>{if(!Ie)return;const L=r.dataset.ossMode;if(!L)return;re=L;const B=na.find(ge=>ge.id===L);le=`已切换至「${B?.title??L}」模式（明日预测启动 ${B?.predictedStart??""}）。`,P()})}),t.querySelectorAll("[data-toggle-schedule]").forEach(r=>{r.addEventListener("click",()=>{if(!Ie)return;const L=r.dataset.toggleSchedule,B=se.find(ge=>ge.id===L);B&&(B.enabled=!B.enabled,le=`排程「${B.name}」已${B.enabled?"恢复启用":"临时暂停"}。`,P())})}),t.querySelectorAll("[data-rule-cat]").forEach(r=>{r.addEventListener("click",()=>{oe=r.dataset.ruleCat??"all",P()})}),t.querySelectorAll("[data-expand-rule]").forEach(r=>{r.addEventListener("click",()=>{const L=r.dataset.expandRule??null;ae=ae===L?null:L,P()})}),t.querySelectorAll("[data-toggle-cbm]").forEach(r=>{r.addEventListener("click",()=>{if(!d)return;const L=K.find(B=>B.id===r.dataset.toggleCbm);L&&(L.enabled=!L.enabled,le=`工时维保规则「${L.name}」已${L.enabled?"启用":"停用"}。`,P())})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(r=>{r.addEventListener("click",async()=>{if(d){me="";try{await e.toggleRuntimeRule(r.dataset.toggleStrategyRule,r.dataset.ruleNext==="true",Number(r.dataset.ruleVer)),N=await e.getRuntimeSettings(h.projectId),le="条件联动规则状态与版本回执已更新。",P()}catch(L){me=L instanceof Error?L.message:String(L),P()}}})}),t.querySelectorAll("[data-toggle-create]").forEach(r=>{r.addEventListener("click",()=>{!F&&!ee||(ee=!ee,P())})}),t.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{F&&($e.push({deviceId:C[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),P())}),t.querySelectorAll("[data-del-draft-action]").forEach(r=>{r.addEventListener("click",()=>{if(!F)return;const L=Number(r.dataset.delDraftAction);$e.length>1&&($e.splice(L,1),P())})}),t.querySelectorAll("[data-draft-dev]").forEach(r=>{r.addEventListener("change",()=>{if(!F)return;const L=$e[Number(r.dataset.draftDev)];L&&(L.deviceId=r.value)})}),t.querySelectorAll("[data-draft-cmd]").forEach(r=>{r.addEventListener("change",()=>{if(!F)return;const L=$e[Number(r.dataset.draftCmd)];L&&(L.command=r.value)})}),t.querySelectorAll("[data-draft-val]").forEach(r=>{r.addEventListener("change",()=>{if(!F)return;const L=$e[Number(r.dataset.draftVal)];L&&(L.targetValue=r.value)})}),t.querySelector("[data-scene-search]")?.addEventListener("input",r=>{const L=r.currentTarget,B=L.selectionStart??L.value.length;ve=L.value,P();const ge=t.querySelector("[data-scene-search]");ge&&(ge.focus(),ge.setSelectionRange(B,B))}),t.querySelectorAll("[data-exec-scene]").forEach(r=>{r.addEventListener("click",async()=>{if(!Ie)return;me="";const L=O.find(B=>B.id===r.dataset.execScene);try{ue=await e.executeScene(r.dataset.execScene),O=await e.listScenes(h.floorId),pe.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:L?.name??"E7F 场景",action:`${ue.receipts.length} 台设备联动下发`,status:"verified"}),P()}catch(B){me=B instanceof Error?B.message:String(B),P()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async r=>{if(r.preventDefault(),!F)return;const L=new FormData(r.currentTarget);try{await e.createScene({projectId:h.projectId,floorId:h.floorId,name:String(L.get("name")??""),description:String(L.get("description")??""),actions:$e.map(B=>({deviceId:B.deviceId,command:B.command,targetValue:B.targetValue==="true"?!0:B.targetValue==="false"?!1:Number(B.targetValue)||50}))}),O=await e.listScenes(h.floorId),ee=!1,le=`快捷场景已保存（共绑定 ${$e.length} 条联动动作）。`,P()}catch(B){me=B instanceof Error?B.message:String(B),P()}})}P(),window.addEventListener("hashchange",()=>T(),{once:!0})}const Da={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function ba(t,e){return t.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':t.map(i=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${m(i.name)}</span>
            <span class="pacom-badge pacom-badge--neutral">v${i.version}</span>
            <span class="pacom-badge pacom-badge--accent">${m(i.scopeLabel)}</span>
          </span>
          <span class="pacom-setting-desc">${m(i.summary)} · 回执：${m(i.receiptSummary??"已同步")}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${i.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${i.enabled?"true":"false"}"
            aria-label="切换 ${m(i.name)}"
            data-toggle-rule="${m(i.id)}"
            data-rule-ver="${i.version}"
            data-rule-next="${!i.enabled}"
            ${e?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function xt(t,e,i){let c="calendar",l=la(),p=!1,S="";const[O,N]=await Promise.all([e.getSpatialTree(),e.getRuntimeSettings(h.projectId)]);let C=N,z=C.calendar.workdayStart,re=C.calendar.workdayEnd,oe=C.calendar.nightGuardStart,ue=C.calendar.nightGuardEnd,ve=!0,ee=[];const Q=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let Z="flat";const de={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},ae={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},le={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},me={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},M=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let pe="",K="";function $e(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(P=>{const W=Da[P];return`
                <button type="button" class="pacom-unified-item" aria-current="${c===P}" data-stab="${P}">
                  ${X(W.icon,16)}
                  <span>${W.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function se(){const T=i.scope.canEditSettings,P=i.scope.activeOverrides.find(x=>x.module==="settings"&&x.status==="active"),W=O.projects[0]?.name??"当前项目",V=C.rules.filter(x=>x.category==="weather_area"),te=C.rules.filter(x=>x.category==="metering_carbon"),xe=C.rules.filter(x=>x.category==="templates"),he=Da[c];t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${oa({tree:O,session:i,scope:l,maxGranularity:"project",isOpen:p,searchKeyword:S})}
            </div>
            <div class="pacom-header-meta">
              ${T?P?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${$e()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${he.label}</h2>
                <p class="pacom-unified-subtitle">${he.subtitle}</p>
              </div>
              ${P?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 · ${P.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${m(P.approvedBy)} · 到期自动收回：${m(P.expiresAt.slice(0,16).replace("T"," "))} · 事由：${m(P.reason)}</span>
                      </div>
                    </div>`:""}
              ${pe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${m(pe)}</span></div>`:""}
              ${K?`<div class="pacom-alert-banner">${m(K)}</div>`:""}

              ${c==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${C.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calWorkdayStart" style="width:116px;" type="time" data-cal-start value="${m(z)}" aria-label="工作日上班时间" ${T?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" name="calWorkdayEnd" style="width:116px;" type="time" data-cal-end value="${m(re)}" aria-label="工作日下班时间" ${T?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calNightGuardStart" style="width:116px;" type="time" data-night-start value="${m(oe)}" aria-label="夜间值守开始" ${T?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" name="calNightGuardEnd" style="width:116px;" type="time" data-night-end value="${m(ue)}" aria-label="夜间值守结束" ${T?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${ve?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${ve}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${T?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${T?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${Q.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${Q.map(x=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${m(x.date)}</span><span class="pacom-badge pacom-badge--accent">${m(x.mode)}</span></span>
                              <span class="pacom-setting-desc">${m(x.label)}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${m(x.id)}" ${T?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${T?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${T?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${T?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${T?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${ee.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${ee.length} 条</span>
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
                                ${ee.map(x=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${m(x.ruleName)}</div>
                                        ${x.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${m(x.conflictWarning)}</div>`:""}
                                      </td>
                                      <td>${m(x.beforeWindow)}</td>
                                      <td><strong>${m(x.afterWindow)}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${x.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${x.conflictWarning?"交叠警告":"自动跟随"}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>`:""}`:c==="energy_weather"?`
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
                            <select class="pacom-select" name="energyWeatherSource" data-energy-field="weatherSource" aria-label="室外气象数据源" ${T?"":"disabled"}>
                              <option value="guanzhou_station" ${de.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${de.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${m(W)}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" name="energyBillingArea" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${m(de.billingArea)}" aria-label="计费面积" ${T?"":"disabled"} />
                          </div>
                        </div>
                        ${ba(V,T)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${Z==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${Z==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${Z==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" name="energyTariffYuan" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${m(de.tariffYuan)}" aria-label="综合电价" ${T?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" name="energyTariffPeak" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${m(de.tariffPeak)}" aria-label="峰段电价" ${T?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" name="energyTariffFlat" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${m(de.tariffFlat)}" aria-label="平段电价" ${T?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" name="energyTariffValley" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${m(de.tariffValley)}" aria-label="谷段电价" ${T?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" name="energyCarbonFactor" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${T?"":"disabled"}>
                              <option value="0.5271" ${de.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${de.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${ba(te,T)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${T?"":"disabled"}>保存口径参数</button>
                        </div>
                      </div>
                    </section>`:c==="guardrails"?`
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
                              <input class="pacom-input" name="guardMinTemp" style="width:72px;" type="number" data-guard-field="minTemp" value="${m(ae.minTemp)}" aria-label="最低设定温度" ${T?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" name="guardMaxTemp" style="width:72px;" type="number" data-guard-field="maxTemp" value="${m(ae.maxTemp)}" aria-label="最高设定温度" ${T?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" name="guardOverrideAutoRelease" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${T?"":"disabled"}>
                                <option value="2h" ${ae.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${ae.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${ae.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${ae.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" name="guardReadbackTimeoutSec" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${m(ae.readbackTimeoutSec)}" aria-label="回读超时阈值" ${T?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${T?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${ba(xe,T)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${m(me.dailyDigestTime)}" aria-label="每日简报发送时间" ${T?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${me.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${T?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${me.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${T?"":"disabled"}>
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
                              <input class="pacom-input" name="autoWoDelayMin" style="width:72px;" type="number" data-auto-wo="delayMin" value="${m(le.delayMin)}" aria-label="自动派单延迟分钟数" ${T?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${le.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${T?"":"disabled"}>
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
                              <select class="pacom-select" name="autoWoDefaultGroup" data-auto-wo="defaultGroup" aria-label="默认处理组" ${T?"":"disabled"}>
                                <option value="暖通运维组" ${le.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${le.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${le.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${le.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${T?"":"disabled"}>
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
                                ${M.map(x=>`
                                    <tr>
                                      <td><strong>${m(x.groupName)}</strong></td>
                                      <td>${m(x.scope)}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${m(x.severity)}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${m(x.channels)}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${x.enabled}" data-toggle-nr="${m(x.id)}" aria-label="切换 ${m(x.groupName)} 通知规则" ${T?"":"disabled"}>
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
    `,ia(t,{onToggle:()=>{p=!p,se(),p&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:x=>{S=x,se();const q=t.querySelector("[data-global-space-search]");q&&(q.focus(),q.setSelectionRange(x.length,x.length))},onPick:x=>{l=x,p=!1,se()}}),t.querySelectorAll("[data-stab]").forEach(x=>{x.addEventListener("click",()=>{c=x.dataset.stab??"calendar",pe="",K="",se()})}),t.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{T&&(ve=!ve,pe=`法定节假日自动跳过已${ve?"开启":"关闭"}。`,se())}),t.querySelector("[data-night-start]")?.addEventListener("change",x=>{T&&(oe=x.currentTarget.value)}),t.querySelector("[data-night-end]")?.addEventListener("change",x=>{T&&(ue=x.currentTarget.value)}),t.querySelector("[data-add-sd-form]")?.addEventListener("submit",x=>{if(x.preventDefault(),!T)return;const q=new FormData(x.currentTarget);Q.push({id:`sd-${Date.now()}`,date:String(q.get("date")??""),label:String(q.get("label")??""),mode:String(q.get("mode")??"保持工作日工况")}),pe="已添加特殊例外日期，当日自动覆盖默认节假日排程。",se()}),t.querySelectorAll("[data-del-sd]").forEach(x=>{x.addEventListener("click",()=>{if(!T)return;const q=Q.findIndex(Ie=>Ie.id===x.dataset.delSd);q>=0&&Q.splice(q,1),se()})}),t.querySelectorAll("[data-tariff-mode]").forEach(x=>{x.addEventListener("click",()=>{Z=x.dataset.tariffMode??"flat",se()})}),t.querySelectorAll("[data-energy-field]").forEach(x=>{x.addEventListener("change",()=>{if(!T)return;const q=x.dataset.energyField;q&&(de[q]=x.value)})}),t.querySelector("[data-save-energy]")?.addEventListener("click",()=>{T&&(pe=Z==="flat"?`能耗计费与气象口径已保存（面积 ${de.billingArea} m² · 综合电价 ¥${de.tariffYuan}/kWh · 因子 ${de.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${de.tariffPeak} / 平 ¥${de.tariffFlat} / 谷 ¥${de.tariffValley}）。`,se())}),t.querySelectorAll("[data-guard-field]").forEach(x=>{x.addEventListener("change",()=>{if(!T)return;const q=x.dataset.guardField;q&&(ae[q]=x.value)})}),t.querySelector("[data-save-guard]")?.addEventListener("click",()=>{T&&(pe=`控制保护参数已保存（温区 ${ae.minTemp}–${ae.maxTemp}°C · 超时 ${ae.readbackTimeoutSec}s）。`,se())}),t.querySelectorAll("[data-auto-wo]").forEach(x=>{x.addEventListener("change",()=>{if(!T)return;const q=x.dataset.autoWo;q&&(le[q]=x.value),pe="超时自动派单配置已更新。",se()})}),t.querySelectorAll("[data-toggle-autowo]").forEach(x=>{x.addEventListener("click",()=>{if(!T)return;const q=x.dataset.toggleAutowo;q&&(le[q]=!le[q],pe="自动派单保护策略已更新。",se())})}),t.querySelector("[data-digest-time]")?.addEventListener("change",x=>{T&&(me.dailyDigestTime=x.currentTarget.value,pe=`每日晨间简报发送时刻已更新为 ${me.dailyDigestTime}。`,se())}),t.querySelectorAll("[data-notify-key]").forEach(x=>{x.addEventListener("click",()=>{if(!T)return;const q=x.dataset.notifyKey;q&&(me[q]=!me[q],pe="消息通知偏好已更新。",se())})}),t.querySelectorAll("[data-toggle-nr]").forEach(x=>{x.addEventListener("click",()=>{if(!T)return;const q=M.find(Ie=>Ie.id===x.dataset.toggleNr);q&&(q.enabled=!q.enabled,pe=`工作组「${q.groupName}」的分流推送规则已${q.enabled?"启用":"停用"}。`,se())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",x=>{T&&(z=x.currentTarget.value)}),t.querySelector("[data-cal-end]")?.addEventListener("change",x=>{T&&(re=x.currentTarget.value)}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{K="";try{ee=await e.previewCalendarImpact(h.projectId,z,re),se()}catch(x){K=x instanceof Error?x.message:String(x),se()}}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{if(T){K="";try{const x=await e.saveWorkCalendar(h.projectId,z,re,C.calendar.version);C={...C,calendar:{...x,nightGuardStart:oe,nightGuardEnd:ue}},pe=`工作时间配置已保存至 v${x.version}（工作日 ${x.workdayStart}–${x.workdayEnd} · 夜间值守 ${oe}–${ue}）`,ee=[],se()}catch(x){K=x instanceof Error?x.message:String(x),se()}}}),t.querySelectorAll("[data-toggle-rule]").forEach(x=>{x.addEventListener("click",async()=>{if(T){K="";try{await e.toggleRuntimeRule(x.dataset.toggleRule,x.dataset.ruleNext==="true",Number(x.dataset.ruleVer)),C=await e.getRuntimeSettings(h.projectId),pe="策略状态与版本回执已更新。",se()}catch(q){K=q instanceof Error?q.message:String(q),se()}}})})}se()}const Ca="pacom.web.sidebar.collapsed",St=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Oa=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],fa={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},Ta=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function va(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in fa?t:"home"}function je(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const Qe=new WeakMap;function It(t){Qe.get(t)?.()}async function kt(t,e,i,c){Qe.get(t)?.(),t.classList.remove("bare-login");let l=i,p=va(),S=localStorage.getItem(Ca)==="1",O=!1,N=!1,C=!1,z=await e.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],re=e.getActiveOrganizationId?.()??z[0]?.id??"org-gzlab",oe="",ue=!1,ve=0,ee={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function Q(d){return l.scope.visibleModules.includes(d)}Q(p)||(p="home",window.location.hash="#home");function Z(){return z.find(d=>d.id===re)??z[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function de(d){if(d.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const f=d.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${je(f)}</span>`}async function ae(){e.listOrganizations&&(z=await e.listOrganizations(),re=e.getActiveOrganizationId?.()??z[0]?.id??"org-gzlab")}async function le(){try{await ae();const[d,f,j,r,L]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(h.floorId).catch(()=>[]),e.listAlarms(h.floorId).catch(()=>[]),e.listWorkOrders(h.floorId).catch(()=>[]),e.listScenes(h.floorId).catch(()=>[])]);ee={devices:f,zones:d.zones,alarms:j,workOrders:r,scenes:L},ve=j.filter(B=>B.status==="active").length,P()}catch{}}function me(){const d=Oa.filter(j=>Q(j.id));let f=!1;return d.map(j=>`
        ${(j.id==="settings"||j.id==="deployment")&&!f?(f=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${j.id}" aria-current="${p===j.id?"page":"false"}" title="${j.label}">
          ${X(j.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${j.label}</span>
          ${j.id==="alarms"&&ve>0?`<span class="pacom-nav-count" title="待处理告警 ${ve} 条">${ve}</span>`:""}
        </button>`).join("")}function M(){const d=oe.trim().toLowerCase(),f=Oa.filter(G=>Q(G.id)),j=d?f.filter(G=>G.label.toLowerCase().includes(d)).slice(0,4):f,r=d?ee.devices.filter(G=>`${G.name} ${G.id} ${G.category}`.toLowerCase().includes(d)).slice(0,5):ee.devices.slice(0,3),L=d?ee.zones.filter(G=>G.name.toLowerCase().includes(d)).slice(0,3):[],B=Q("alarms")?d?ee.alarms.filter(G=>`${G.title} ${G.message} ${G.id}`.toLowerCase().includes(d)).slice(0,4):ee.alarms.filter(G=>G.status==="active").slice(0,2):[],ge=Q("alarms")?d?ee.workOrders.filter(G=>`${G.title} ${G.id}`.toLowerCase().includes(d)).slice(0,3):[]:[],Fe=Q("scenes")?d?ee.scenes.filter(G=>`${G.name} ${G.description}`.toLowerCase().includes(d)).slice(0,3):[]:[],Te=Q("deployment")?d?Ta.filter(G=>`${G.title} ${G.category}`.toLowerCase().includes(d)).slice(0,4):Ta.slice(0,2):[],Se=[];return r.length&&Se.push(`<div class="pacom-search-group">${d?"设备（空间总览）":"常用设备直达"}</div>`+r.map(G=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(G.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${je(G.name)}</span><span class="pacom-badge ${G.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${G.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),L.length&&Se.push('<div class="pacom-search-group">功能区</div>'+L.map(G=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(G.id)}"><span>${je(G.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),B.length&&Se.push(`<div class="pacom-search-group">${d?"告警":"待处理告警"}</div>`+B.map(G=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(G.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${je(G.title)}</span><span class="pacom-badge pacom-badge--warning">${G.status==="active"?"待处理":"已确认"}</span></button>`).join("")),ge.length&&Se.push('<div class="pacom-search-group">运维工单</div>'+ge.map(G=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(G.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${je(G.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),Fe.length&&Se.push('<div class="pacom-search-group">智能策略</div>'+Fe.map(G=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${je(G.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),Te.length&&Se.push('<div class="pacom-search-group">图纸与工程文档</div>'+Te.map(G=>`<button type="button" class="pacom-search-hit" data-search-hash="${G.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${je(G.title)}</span><span class="pacom-badge pacom-badge--neutral">${je(G.category)}</span></button>`).join("")),j.length&&Se.push('<div class="pacom-search-group">工作区</div>'+j.map(G=>`<button type="button" class="pacom-search-hit" data-search-hash="#${G.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${X(G.icon,14)}${je(G.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),Se.length?Se.join(""):`<div class="pacom-nav-empty">未找到与「${je(oe)}」匹配的设备、区域、告警、工单或图纸</div>`}function pe(d){d.querySelectorAll("[data-search-hash]").forEach(f=>{f.addEventListener("click",()=>{const j=f.dataset.searchHash||"#home";ue=!1,oe="",K(),O=!1,window.location.hash===j?(p=va(),he(!0)):window.location.hash=j})})}function K(){if(t.querySelector('[data-role="cmd-scrim"]')?.remove(),!ue)return;const d=document.createElement("div");d.className="pacom-cmd-scrim",d.dataset.role="cmd-scrim",d.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${X("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${je(oe)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${M()}
        </div>
      </div>
    `,t.appendChild(d),d.addEventListener("click",r=>{r.target===d&&(ue=!1,K())});const f=d.querySelector('[data-role="cmd-input"]'),j=d.querySelector('[data-role="cmd-body"]');j&&pe(j),f?.focus(),f?.addEventListener("input",r=>{oe=r.currentTarget.value,j&&(j.innerHTML=M(),pe(j))})}function $e(){if(!N)return"";const d=l.displayName.slice(0,1)||"U",f=!!(e.createOrganization&&l.role==="org_admin");return`
      <div class="pacom-org-popover ${S?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${z.map(j=>{const r=j.id===re;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${r}" data-pop-org="${je(j.id)}">
                ${de(j)}
                <span class="pacom-pop-text">
                  <b>${je(j.name)}</b>
                  <small>${j.projectCount>0?`${j.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${r?X("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${f?C?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${X("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${X("settings",16)}</span>
          <span class="pacom-pop-text">机构与权限</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${je(d)}</span>
          <span class="pacom-pop-text">
            <b>${je(l.displayName)}</b>
            <small>${je(l.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${X("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function se(d){switch(Q(p)||(p="home",window.location.hash="#home"),document.title=`${fa[p]} · PACOM Station`,p){case"home":await et(d,e,l);return;case"analysis":await Xa(d,e,l);return;case"alarms":await pt(d,e,l);return;case"scenes":await wt(d,e,l);return;case"settings":await xt(d,e,l);return;case"deployment":await ft(d,e,l);return;case"account":await it(d,e,l,f=>{l=f,P(),W()},T);return}}async function T(){N=!1,O=!1,ue=!1,F();try{await e.logout()}finally{window.location.hash="#login",c()}}function P(){const d=t.querySelector('[data-role="nav-list"]');d&&(d.innerHTML=me(),V())}function W(){t.querySelector('[data-role="org-popover"]')?.remove();const d=t.querySelector('[data-role="org-menu-btn"]');if(d&&d.setAttribute("aria-expanded",String(N)),!N)return;const f=document.createElement("div");f.innerHTML=$e().trim();const j=f.firstElementChild;j&&(t.appendChild(j),xe())}function V(){t.querySelectorAll("[data-route]").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.route;f===p&&!O||(p=f,O=!1,N=!1,window.location.hash=`#${p}`,he(!0))})})}async function te(d){if(!e.switchOrganization)return;await e.switchOrganization(d),await ae();const f=await e.getSpatialTree(),j=f.projects[0],r=j?f.buildings.find(B=>B.projectId===j.id):void 0,L=r?f.floors.find(B=>B.buildingId===r.id&&B.id===h.floorId)??f.floors.find(B=>B.buildingId===r.id):void 0;j&&r&&L?We({level:"floor",projectId:j.id,buildingId:r.id,floorId:L.id}):j&&r?We({level:"building",projectId:j.id,buildingId:r.id}):j?We({level:"project",projectId:j.id}):We({level:"all-projects"}),N=!1,C=!1,O=!1,await he(!0),le()}function xe(){t.querySelectorAll("[data-pop-org]").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.popOrg;if(f){if(f===re){N=!1,W();return}te(f)}})}),t.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",d=>{d.stopPropagation(),C=!C,W(),C&&t.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),t.querySelector("[data-create-org-form]")?.addEventListener("submit",async d=>{if(d.preventDefault(),!e.createOrganization)return;const f=new FormData(d.currentTarget),j=String(f.get("orgName")??"").trim();if(!j)return;const r=await e.createOrganization(j);await te(r.id)}),t.querySelectorAll('[data-pop-act="go-account"]').forEach(d=>{d.addEventListener("click",()=>{N=!1,C=!1,O=!1,p="account",window.location.hash="#account",he(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{T()})}async function he(d){const f=t.querySelector('[data-role="main-stage"]');if(!d&&f){const r=t.querySelector(".pacom-nav-rail");r&&(r.classList.toggle("is-collapsed",S),r.classList.toggle("is-mobile-open",O));const L=t.querySelector('[data-role="mobile-scrim"]');L&&L.classList.toggle("is-open",O),W();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${X("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${fa[p]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${je(l.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${O?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${S?"is-collapsed":""} ${O?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${St}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${S?"展开侧栏":"收起侧栏"}" aria-label="${S?"展开侧栏":"收起侧栏"}">
              ${X("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${X("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${me()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${p==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${N}" title="${je(Z().name)} · ${je(l.displayName)}">
              ${de(Z())}
              <span class="pacom-org-name">${je(Z().name)}</span>
              ${X("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{S=!S,N=!1,localStorage.setItem(Ca,S?"1":"0");const r=t.querySelector(".pacom-nav-rail"),L=t.querySelector('[data-role="toggle-sidebar"]');r&&r.classList.toggle("is-collapsed",S),L&&(L.title=S?"展开侧栏":"收起侧栏",L.setAttribute("aria-label",L.title),L.innerHTML=X("panel-left",16)),W()}),t.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{N=!1,W(),ue=!0,K()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{O=!O,he(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{O=!1,N=!1,he(!1)}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",r=>{r.stopPropagation(),N=!N,W()}),V(),W(),K();const j=t.querySelector('[data-role="main-stage"]');j&&await se(j)}const x=d=>{const f=d.target;N&&!f?.closest('[data-role="org-popover"]')&&!f?.closest('[data-role="org-menu-btn"]')&&(N=!1,W())},q=d=>{if((d.metaKey||d.ctrlKey)&&d.key.toLowerCase()==="k"){d.preventDefault(),N=!1,W(),ue=!ue,K();return}d.key==="Escape"&&(ue?(ue=!1,K()):N?(N=!1,W()):O&&(O=!1,he(!1)))},Ie=()=>{p=va(),N=!1,O=!1,ue=!1,he(!0),le()};function F(){document.removeEventListener("click",x),document.removeEventListener("keydown",q),window.removeEventListener("hashchange",Ie),Qe.get(t)===F&&Qe.delete(t)}Qe.set(t,F),document.addEventListener("click",x),document.addEventListener("keydown",q),window.addEventListener("hashchange",Ie),await he(!0),le()}const Et=["org_admin","project_admin","operator","space_user"];function Ye(t){return(t.replace(/^#\/?/,"").split("?")[0]??"")==="login"}async function At(t){const e=new nt;let i=await e.getSession(),c="login",l=!1;document.querySelector("[data-demo-fab-root]")?.remove();const p=document.createElement("div");p.className="pacom-demo-fab-wrap",p.dataset.demoFabRoot="1",document.body.appendChild(p);function S(){const C=c==="login"?"登录页":i?Ne[i.role]:"未登录";p.innerHTML=`
      ${l?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">独立演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">登录页支持任意账号密码登录，或点击下方角色免密直进</span>
            <div class="pacom-demo-fab-roles">
              ${Et.map(z=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${c==="app"&&i?.role===z}" data-demo-pick="${z}">
                    <span>${Ne[z]}</span>
                    ${c==="app"&&i?.role===z?X("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <button type="button" class="pacom-demo-role-btn" aria-pressed="${c==="login"}" data-demo-view-login="1">
                <span>查看登录页</span>
                ${c==="login"?X("check",14):"<span>→</span>"}
              </button>
              <a class="pacom-demo-link" href="./index.html">
                <span>前往纯生产入口（index.html）</span>
                <span>→</span>
              </a>
            </div>
          </div>`:""}
      <button type="button" class="pacom-demo-fab-pill" aria-expanded="${l}" data-demo-fab-toggle="1" title="切换演示角色或查看登录页">
        <span class="pacom-demo-fab-dot" aria-hidden="true"></span>
        <span>演示</span>
        <span class="pacom-demo-fab-role">${C}</span>
        ${X(l?"chevron-down":"chevrons-up-down",12)}
      </button>
    `,p.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",z=>{z.stopPropagation(),l=!l,S()}),p.querySelectorAll("[data-demo-pick]").forEach(z=>{z.addEventListener("click",async()=>{const re=z.dataset.demoPick;re&&(l=!1,i=await e.switchDemoRole(re),await N(i))})}),p.querySelector("[data-demo-view-login]")?.addEventListener("click",async()=>{l=!1,await O(!0)})}document.addEventListener("click",C=>{l&&(C.target?.closest("[data-demo-fab-root]")||(l=!1,S()))}),document.addEventListener("keydown",C=>{C.key==="Escape"&&l&&(l=!1,S())});async function O(C){It(t),c="login",C&&i&&await e.logout(),i=null,Ye(window.location.hash)||(window.location.hash="#login"),S(),at(t,e,z=>{N(z)})}async function N(C){tt(t),i=C,c="app",S(),(!window.location.hash||Ye(window.location.hash))&&(window.location.hash="#home"),await kt(t,e,C,()=>{O(!1)})}if(window.addEventListener("hashchange",()=>{Ye(window.location.hash)&&c!=="login"&&O(!0)}),!i||Ye(window.location.hash)){await O(!!(i&&Ye(window.location.hash)));return}await N(i)}async function Lt(){const t=document.getElementById("app");if(t)try{await At(t)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(e)}</div></div>`}}Lt();
