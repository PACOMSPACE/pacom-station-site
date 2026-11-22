(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const v of s.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&a(v)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const l={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},F={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[l.projectId,l.project1Id],allowedBuildingIds:[l.buildingId,l.buildingFId],allowedFloorIds:[l.lockedFloor8Id,l.floorId,l.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[l.projectId],allowedBuildingIds:[l.buildingId,l.buildingFId],allowedFloorIds:[l.lockedFloor8Id,l.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[l.projectId],allowedBuildingIds:[l.buildingId],allowedFloorIds:[l.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[l.projectId],allowedBuildingIds:[l.buildingId],allowedFloorIds:[l.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[l.projectId],allowedBuildingIds:[l.buildingId],allowedFloorIds:[l.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},V="pacom.web.demo.role";class ee{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const e=sessionStorage.getItem(V);e&&F[e]&&(this.activeSession=structuredClone(F[e]));const o=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:l.projectId,buildingId:l.buildingId,floorId:l.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:l.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:o,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:l.projectId,buildingId:l.buildingId,floorId:l.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:l.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:l.projectId,buildingId:l.buildingId,floorId:l.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:l.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:l.projectId,buildingId:l.buildingId,floorId:l.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:l.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:o,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:o,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:o,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:l.projectId,buildingId:l.buildingId,floorId:l.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:l.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:o,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:l.projectId,buildingId:l.buildingId,floorId:l.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:l.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:o,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:o,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:o,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:l.projectId,buildingId:l.buildingId,floorId:l.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:l.projectId,buildingId:l.buildingId,floorId:l.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:l.projectId,buildingId:l.buildingId,floorId:l.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:l.projectId,buildingId:l.buildingId,floorId:l.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:o},{id:"conn-e7f-dali",projectId:l.projectId,buildingId:l.buildingId,floorId:l.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:o},{id:"conn-e7f-modbus",projectId:l.projectId,buildingId:l.buildingId,floorId:l.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:l.projectId,floorId:l.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:l.projectId,floorId:l.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:l.projectId,floorId:l.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:l.projectId,floorId:l.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:l.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:l.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:l.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:o,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:l.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:l.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:l.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:l.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(F).map((a,t)=>({userId:a.userId,displayName:a.displayName,email:`${a.role.replaceAll("_",".")}@pacom.local`,role:a.role,roleLabel:a.roleLabel,scopeSummary:a.scope.allowedZoneIds?.length?`E栋 7F（${a.scope.allowedZoneIds.length} 个我的区域）`:`${a.scope.allowedProjectIds.length} 项目 / ${a.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:t===0?o:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,o,a,t,s){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:o,endpoint:a,request:s,response:t}),this.traces.length>40&&this.traces.pop()}pushAudit(e,o,a,t){const s=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:s?.displayName??"anonymous",role:s?.role??"member",action:e,target:o,result:a,detail:t})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const o=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(F[o]),sessionStorage.setItem(V,o),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(V),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(F[e]),sessionStorage.setItem(V,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const e=this.requireSession(),o=[{id:l.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"/media/gzlab.jpg"},{id:l.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"/media/gzlab.jpg"}],a=[{id:l.buildingId,projectId:l.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"/media/building-e.png"},{id:l.buildingFId,projectId:l.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"/media/building-f.png"}],t={projects:o.filter(s=>e.scope.allowedProjectIds.includes(s.id)),buildings:a.filter(s=>e.scope.allowedBuildingIds.includes(s.id)),floors:[{id:l.lockedFloor8Id,buildingId:l.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:l.floorId,buildingId:l.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:l.floorId,imageUrl:"/media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:l.lockedFloor6Id,buildingId:l.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:l.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:l.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:l.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:l.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:t.projects.length,buildings:t.buildings.length,floors:t.floors.length}),t}async getFloorDevices(e){const o=this.requireSession();if(!o.scope.allowedFloorIds.includes(e)){const t={code:"FORBIDDEN",status:403,message:`当前角色「${o.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,t),this.pushAudit("floor.read",e,"denied",t.message),new Error(`403 FORBIDDEN: ${t.message}`)}if(e!==l.floorId)return[];let a=structuredClone(this.devices);return o.scope.allowedZoneIds?.length&&(a=a.filter(t=>t.logicalZoneId&&o.scope.allowedZoneIds.includes(t.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:a.length}),a}async dispatchControlBatch(e){const o=this.requireSession();if(!o.scope.canControlDevices||!o.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,t={batchId:a,floorId:e.floorId,createdBy:o.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(s=>({deviceId:s.deviceId,command:s.command,targetValue:s.targetValue,status:"queued"}))};return this.batches.set(a,t),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",t,e),this.pushAudit("control.dispatch",a,"success",`下发 ${e.targets.length} 台设备`),t.receipts.forEach((s,v)=>{const $=this.devices.find(u=>u.id===s.deviceId);setTimeout(()=>{s.status="dispatched",s.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:s.deviceId,status:"dispatched",at:s.dispatchedAt})},280+v*120),setTimeout(()=>{const u=new Date().toISOString();!$||$.connectivity==="offline"?(s.status="timeout",s.errorCode="GATEWAY_READBACK_TIMEOUT",s.errorMessage="设备离线，网关未收到回读确认",s.verifiedAt=u):(s.status="verified_success",s.observedValue=s.targetValue,s.verifiedAt=u,this.applyObservedTelemetry($,s.command,s.targetValue,u)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:s.deviceId,status:s.status,observedValue:s.observedValue,at:u})},900+v*220)}),structuredClone(t)}applyObservedTelemetry(e,o,a,t){o==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:a,collectedAt:t,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(a)>0,collectedAt:t,stale:!1})):(o==="lighting.power"||o==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:a,collectedAt:t,stale:!1}:o==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:a,collectedAt:t,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:t,values:{[o]:a}})}async getControlBatch(e){this.requireSession();const o=this.batches.get(e);if(!o)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(o)}async listAlarms(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==l.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,o){const a=this.requireSession();if(!a.scope.canManageAlarms){const s=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",s),new Error(`403 FORBIDDEN: ${s}`)}const t=this.alarms.find(s=>s.id===e);if(!t)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return t.status="acknowledged",t.acknowledgedAt=new Date().toISOString(),t.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,t,{note:o}),this.pushAudit("alarm.acknowledge",e,"success",o),this.emit({type:"alarm.changed",floorId:t.floorId,alarmId:e,status:"acknowledged",at:t.acknowledgedAt}),structuredClone(t)}async listWorkOrders(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==l.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const o=this.requireSession();if(!o.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权创建工单`);const a=new Date().toISOString(),t={id:`wo-e7f-${Date.now().toString(36)}`,projectId:l.projectId,buildingId:l.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(t),e.alarmId){const s=this.alarms.find(v=>v.id===e.alarmId);s&&(s.workOrderId=t.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",t,e),this.pushAudit("work_order.create",t.id,"success",t.title),structuredClone(t)}async updateWorkOrderStatus(e,o){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const t=this.workOrders.find(s=>s.id===e);if(!t)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return t.status=o,t.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,t,{status:o}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${o}`),structuredClone(t)}async updateDevicePlanPoint(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(t=>t.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,a,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(s=>s.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const t=new Date().toISOString();return a.physicalInstalled=e.physicalInstalled,a.physicalVerifiedAt=e.physicalInstalled?t:null,a.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:t,boundBy:o.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,a,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(a)}async listConnections(e){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,o){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const t=this.devices.filter(v=>v.physicalInstalled&&v.hardwareBinding).length,s={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:l.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:t,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:o||"例行交付基线冻结"};return this.deliveryBatches.unshift(s),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,s,{note:o}),this.pushAudit("delivery.freeze",s.id,"success",`${t}/${this.devices.length} 已现场核验`),structuredClone(s)}async getAnalysisReport(e,o,a){this.requireSession();const t=o==="today"?1:o==="7d"?7:30,v={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*t)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*t).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(g=>g.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*t).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*t).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*t).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],$=o==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],u={category:e,range:o,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:v.kpis,unit:v.unit,series:v.base.map((g,c)=>({label:$[c],value:Math.round(g*(e==="energy"||e==="carbon"?t/2+.5:1)),baseline:Math.round(g*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:v.base[3],unit:v.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:v.base[4],unit:v.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:v.base[1],unit:v.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${o}&scopeId=${a}`,{kpis:u.kpis.length}),u}async listScenes(e){return this.requireSession(),structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,e),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(e){const o=this.scenes.find(t=>t.id===e);if(!o)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const a=await this.dispatchControlBatch({floorId:o.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:o.actions,reason:`触发场景：${o.name}`});return o.lastExecutedAt=new Date().toISOString(),o.lastBatchId=a.batchId,a}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:l.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,o,a){this.requireSession();const t=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,s=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${o} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${o} (-30m) ~ ${a} (+30m)`,conflictWarning:t},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:t}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",s,{workdayStart:o,workdayEnd:a}),s}async saveWorkCalendar(e,o,a,t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改运行日历`);if(this.calendar.version!==t)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(o>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:o,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:o,workdayEnd:a,expectedVersion:t}),this.pushAudit("settings.calendar",l.projectId,"success",`${o}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,o,a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权启停运行规则`);const s=this.rules.find(v=>v.id===e);if(!s)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(s.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${s.version}）`);return s.enabled=o,s.version+=1,s.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,s,{enabled:o,expectedVersion:a}),this.pushAudit("settings.rule_toggle",e,"success",o?"启用":"停用"),structuredClone(s)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,o){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const t=F[o],s={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:o,roleLabel:t.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(s),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",s,{email:e,role:o}),this.pushAudit("org.invite",e,"success",t.roleLabel),structuredClone(s)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,o){return e!==l.floorId?()=>{}:(this.listeners.add(o),()=>{this.listeners.delete(o)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${l.floorId}`,e),this.listeners.forEach(o=>o(e))}}function ae(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new ee}async function oe(i,e,o,a,t){let s="profile",v=await e.listOrgMembers(),$=await e.listAuditLogs(),u="";async function g(){[v,$]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),c()}function c(){const w=e.mode==="demo"&&typeof e.switchDemoRole=="function";i.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">账户与机构设置</h1>
            <button class="pacom-btn" data-role="logout-btn">退出登录</button>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${s==="profile"}" data-atab="profile">我的账户与权限</button>
              <button class="pacom-tab" role="tab" aria-selected="${s==="members"}" data-atab="members">机构成员（${v.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${s==="audit"}" data-atab="audit">审计日志（${$.length}）</button>
            </div>
          </div>
        </header>

        ${u?`<div class="pacom-alert-banner">${u}</div>`:""}

        <div class="pacom-content-page" style="padding:0;">
          ${s==="profile"?`
              <section class="pacom-card">
                <h2 class="pacom-drawer-title">当前会话（服务端下发 RBAC 契约）</h2>
                <pre class="pacom-code">${JSON.stringify(o,null,2)}</pre>
              </section>
              ${w?`
                  <section class="pacom-card">
                    <h2 class="pacom-drawer-title">多角色权限预览切换（仅 Demo 模式可用）</h2>
                    <div class="pacom-role-grid">
                      ${Object.keys(F).map(d=>{const I=F[d];return`
                            <button class="pacom-role-card ${d===o.role?"is-active":""}" data-switch-role="${d}">
                              <strong>${I.roleLabel}</strong>
                              <span class="pacom-row-sub">${I.displayName}</span>
                              <span class="pacom-row-sub">授权楼层 ${I.scope.allowedFloorIds.length} 层 · 部署编辑：${I.scope.canEditDeployment?"是":"否"}</span>
                            </button>`}).join("")}
                    </div>
                  </section>`:""}`:s==="members"?`
                <section class="pacom-card">
                  <h2 class="pacom-drawer-title">邀请新成员</h2>
                  <form data-role="invite-form" style="display:grid; grid-template-columns:1fr 180px auto; gap:8px;">
                    <input class="pacom-input" name="email" type="email" placeholder="colleague@pacom.local" required />
                    <select class="pacom-select" name="role">
                      ${Object.keys(F).map(d=>`<option value="${d}">${F[d].roleLabel}</option>`).join("")}
                    </select>
                    <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                  </form>
                </section>
                <section class="pacom-card">
                  <h2 class="pacom-drawer-title">成员与资源范围列表</h2>
                  ${v.map(d=>`
                      <div class="pacom-receipt-item">
                        <div>
                          <strong>${d.displayName}</strong> <span class="pacom-row-sub">${d.email}</span>
                          <div class="pacom-row-sub">${d.roleLabel} · ${d.scopeSummary}</div>
                        </div>
                        <span class="pacom-badge ${d.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">${d.status}</span>
                      </div>`).join("")}
                </section>`:`
                <section class="pacom-card">
                  <h2 class="pacom-drawer-title">操作与权限拦截审计日志</h2>
                  ${$.map(d=>`
                      <div class="pacom-receipt-item">
                        <div>
                          <strong>${d.action}</strong> → <code>${d.target}</code>
                          <div class="pacom-row-sub">${d.actor} · ${d.at.slice(0,19).replace("T"," ")} · ${d.detail??""}</div>
                        </div>
                        <span class="pacom-badge ${d.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">${d.result}</span>
                      </div>`).join("")}
                </section>`}
        </div>
      </div>
    `,i.querySelectorAll("[data-atab]").forEach(d=>{d.addEventListener("click",()=>{s=d.dataset.atab,u="",c()})}),i.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",t()}),i.querySelectorAll("[data-switch-role]").forEach(d=>{d.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const I=await e.switchDemoRole(d.dataset.switchRole);a(I)})}),i.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async d=>{d.preventDefault(),u="";const I=new FormData(d.currentTarget);try{await e.inviteOrgMember(String(I.get("email")??""),String(I.get("role"))),await g()}catch(S){u=S instanceof Error?S.message:String(S),c()}})}c()}async function se(i,e,o){let a=[],t=[],s="all",v="";async function $(){[a,t]=await Promise.all([e.listAlarms(l.floorId),e.listWorkOrders(l.floorId)]),u()}function u(){const g=s==="all"?a:a.filter(c=>c.status===s);i.innerHTML=`
      <div class="pacom-content-page">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h1 class="pacom-title">告警工单</h1>
          <div style="display:flex; gap:8px; align-items:center;">
            <select class="pacom-select" data-alarm-filter>
              <option value="all" ${s==="all"?"selected":""}>全部告警状态</option>
              <option value="active" ${s==="active"?"selected":""}>待确认</option>
              <option value="acknowledged" ${s==="acknowledged"?"selected":""}>已确认</option>
            </select>
            <span class="pacom-badge ${o.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
              ${o.scope.canManageAlarms?"可确认、转单与流转":"只读权限"}
            </span>
          </div>
        </div>

        ${v?`<div class="pacom-alert-banner">${v}</div>`:""}

        <section class="pacom-card">
          <h2 class="pacom-drawer-title">E7F 实时告警队列（${g.length}）</h2>
          ${g.map(c=>`
              <div class="pacom-receipt-item">
                <div>
                  <strong>${c.title}</strong> <span class="pacom-badge pacom-badge--neutral">${c.severity}</span>
                  <div class="pacom-row-sub">${c.message} · 设备：${c.deviceId}</div>
                </div>
                <div style="display:flex; gap:6px; align-items:center;">
                  ${c.status==="active"?`<button class="pacom-btn" data-ack="${c.id}">确认告警</button>`:'<span class="pacom-badge pacom-badge--online">已确认</span>'}
                  ${c.workOrderId?`<span class="pacom-badge pacom-badge--accent">已关联 ${c.workOrderId}</span>`:`<button class="pacom-btn pacom-btn--primary" data-to-wo="${c.id}">转工单</button>`}
                </div>
              </div>`).join("")}
        </section>

        <section class="pacom-card">
          <h2 class="pacom-drawer-title">运维工单生命周期（${t.length}）</h2>
          ${t.map(c=>`
              <div class="pacom-receipt-item">
                <div>
                  <strong>${c.title}</strong> <span class="pacom-row-sub">(${c.id})</span>
                  <div class="pacom-row-sub">${c.description}</div>
                </div>
                <select class="pacom-select" data-wo-status="${c.id}">
                  ${["open","assigned","in_progress","resolved","closed"].map(w=>`<option value="${w}" ${c.status===w?"selected":""}>${w}</option>`).join("")}
                </select>
              </div>`).join("")}
        </section>
      </div>
    `,i.querySelector("[data-alarm-filter]")?.addEventListener("change",c=>{s=c.currentTarget.value,u()}),i.querySelectorAll("[data-ack]").forEach(c=>{c.addEventListener("click",async()=>{v="";try{await e.acknowledgeAlarm(c.dataset.ack,"告警工作区确认"),await $()}catch(w){v=w instanceof Error?w.message:String(w),u()}})}),i.querySelectorAll("[data-to-wo]").forEach(c=>{c.addEventListener("click",async()=>{v="";const w=a.find(d=>d.id===c.dataset.toWo);if(w)try{await e.createWorkOrder({floorId:w.floorId,deviceId:w.deviceId,alarmId:w.id,title:`处置告警：${w.title}`,description:w.message}),await $()}catch(d){v=d instanceof Error?d.message:String(d),u()}})}),i.querySelectorAll("[data-wo-status]").forEach(c=>{c.addEventListener("change",async()=>{v="";try{await e.updateWorkOrderStatus(c.dataset.woStatus,c.value),await $()}catch(w){v=w instanceof Error?w.message:String(w),await $()}})})}await $()}const ie=[{id:"energy",label:"能源"},{id:"environment",label:"环境"},{id:"occupancy",label:"占用"},{id:"health",label:"设备健康"},{id:"carbon",label:"碳排放"}];function le(i){const e=Math.max(...i.series.map(v=>Math.max(v.value,v.baseline??0)),1),o=46,a=22;return`
    <svg viewBox="0 0 ${i.series.length*(o+a)+40} 190" style="width:100%; height:200px; display:block;" role="img" aria-label="${i.category} 趋势图">
      ${i.series.map((v,$)=>{const u=24+$*(o+a),g=Math.max(8,Math.round(v.value/e*130)),c=152-g;return`
            <rect x="${u}" y="${c}" width="${o}" height="${g}" rx="6" fill="var(--pacom-accent)" opacity="0.82" />
            <text x="${u+o/2}" y="${c-6}" text-anchor="middle" font-size="11" fill="var(--pacom-text-primary)">${v.value}</text>
            <text x="${u+o/2}" y="172" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${v.label}</text>
          `}).join("")}
    </svg>
  `}async function ne(i,e,o){let a="energy",t="7d",s=!1,v=null;async function $(){v=await e.getAnalysisReport(a,t,l.floorId),u()}function u(){v&&(i.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">数据分析</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${v.scopeLabel}</span>
              <button class="pacom-btn" data-toggle-canvas="1">${s?"收起楼层画布":"按需展开空间画布"}</button>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              ${ie.map(g=>`<button class="pacom-tab" role="tab" aria-selected="${a===g.id}" data-cat="${g.id}">${g.label}</button>`).join("")}
            </div>
            <div class="pacom-tabs">
              ${["today","7d","30d"].map(g=>`<button class="pacom-tab" aria-selected="${t===g}" data-range="${g}">${g==="today"?"今日":g==="7d"?"近 7 天":"近 30 天"}</button>`).join("")}
            </div>
          </div>
        </header>

        <section class="pacom-split" style="gap:12px;">
          <div style="flex:1; min-width:0; overflow-y:auto; display:flex; flex-direction:column; gap:12px;">
            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px;">
              ${v.kpis.map(g=>`
                  <div class="pacom-card" style="padding:16px; gap:4px;">
                    <span class="pacom-row-sub">${g.label}</span>
                    <div style="font-size:22px; font-weight:600;">${g.value} <span style="font-size:12px; font-weight:400; color:var(--pacom-text-secondary);">${g.unit??""}</span></div>
                    <span class="pacom-badge pacom-badge--neutral" style="width:fit-content;">${g.delta??"-"}</span>
                  </div>`).join("")}
            </div>

            <section class="pacom-card">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <h2 class="pacom-drawer-title">趋势统计（单位：${v.unit}）</h2>
                <span class="pacom-row-sub">更新时间：${v.updatedAt.slice(0,19).replace("T"," ")}</span>
              </div>
              ${le(v)}
            </section>

            <section class="pacom-card">
              <h2 class="pacom-drawer-title">功能区明细对比</h2>
              ${v.zoneBreakdown.map(g=>`
                  <div class="pacom-receipt-item">
                    <span><strong>${g.zoneName}</strong>（${g.zoneId}）</span>
                    <span class="pacom-badge ${g.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">${g.value} ${g.unit}</span>
                  </div>`).join("")}
            </section>
          </div>

          ${s?`
              <aside class="pacom-right-pane" style="max-width:44%;">
                <div class="pacom-canvas-stage" style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:16px; gap:8px;">
                  <span class="pacom-badge pacom-badge--accent">E7F 分析共用画布（与首页状态隔离）</span>
                  <img class="pacom-plan-img" src="/media/7F.webp" alt="E7F 分析楼层预览" />
                </div>
              </aside>`:""}
        </section>
      </div>
    `,i.querySelectorAll("[data-cat]").forEach(g=>{g.addEventListener("click",()=>{a=g.dataset.cat,$()})}),i.querySelectorAll("[data-range]").forEach(g=>{g.addEventListener("click",()=>{t=g.dataset.range,$()})}),i.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{s=!s,u()}))}await $()}async function ce(i,e,o){let a="floorplan",t=await e.getSpatialTree(),s=[],v=[],$=[],u=null,g=!1,c="",w="";async function d(){w="";const[S,A,p,E]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(l.floorId).catch(()=>[]),e.listConnections(l.projectId),e.listDeliveryBatches(l.floorId)]);t=S,s=A,v=p,$=E,s.some(x=>x.id===u)||(u=s[0]?.id??null),I()}function I(){const S=s.find(p=>p.id===u)??null,A=o.scope.canEditDeployment;i.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${A?"pacom-badge--online":"pacom-badge--warning"}">
                ${A?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${a==="floorplan"}" data-dtab="floorplan">图纸标点与四态绑定</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="topology"}" data-dtab="topology">项目空间拓扑</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="connections"}" data-dtab="connections">系统接入（${v.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="delivery"}" data-dtab="delivery">交付冻结（${$.length}）</button>
            </div>
          </div>
        </header>

        ${c?`<div class="pacom-badge pacom-badge--online" style="height:auto; padding:8px 12px;">${c}</div>`:""}
        ${w?`<div class="pacom-alert-banner">${w}</div>`:""}

        ${a==="floorplan"?`
            <section class="pacom-split">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:380px;">
                <div class="pacom-pane-toolbar">
                  <div style="font-weight:500;">E7F 设备与四态配置（${s.length}）</div>
                  <div style="font-size:12px; color:var(--pacom-text-secondary);">
                    原则：图上放点仅更新 <code>planPoint</code>，绝不自动改写物理安装态或硬件端口绑定。
                  </div>
                </div>
                <div class="pacom-list">
                  ${s.map(p=>`
                      <div class="pacom-row ${p.id===u?"is-selected":""}" data-pick-dev="${p.id}">
                        <div style="min-width:0;">
                          <div class="pacom-row-title">${p.name}</div>
                          <div class="pacom-row-sub">v${p.version} · ${p.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${p.physicalInstalled?"现场已确认":"待物理复核"}</div>
                        </div>
                        <span class="pacom-badge ${p.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                          ${p.planPoint?`${Math.round(p.planPoint.x*100)}%,${Math.round(p.planPoint.y*100)}%`:"未标点"}
                        </span>
                      </div>`).join("")}
                </div>
                ${S?`
                    <form data-role="binding-form" style="padding:12px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); display:flex; flex-direction:column; gap:8px;">
                      <div style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核（${S.id}）</div>
                      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <select class="pacom-select" name="protocol">
                          ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(p=>`<option value="${p}" ${S.hardwareBinding?.protocol===p?"selected":""}>${p.toUpperCase()}</option>`).join("")}
                        </select>
                        <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${S.hardwareBinding?.networkAddress??""}" />
                      </div>
                      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${S.hardwareBinding?.portOrChannel??""}" />
                        <label style="display:flex; align-items:center; gap:6px; font-size:12px;">
                          <input type="checkbox" name="physicalInstalled" ${S.physicalInstalled?"checked":""} />
                          现场物理安装已确认
                        </label>
                      </div>
                      <div style="display:flex; gap:8px;">
                        <button class="pacom-btn" type="button" data-toggle-place="1">${g?"取消点图更新坐标":"点击图纸更新坐标"}</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存硬件绑定（v${S.version}）</button>
                      </div>
                    </form>`:""}
              </aside>
              <div class="pacom-splitter"></div>
              <main class="pacom-right-pane">
                <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${g?"crosshair":"default"};">
                  <div class="pacom-canvas-viewport">
                    <div class="pacom-plan-wrap" data-role="deploy-plan">
                      <img class="pacom-plan-img" src="/media/7F.webp" alt="E7F 部署平面图" />
                      ${s.filter(p=>p.planPoint).map(p=>`
                          <button class="pacom-pin ${p.id===u?"is-selected":""} ${p.connectivity==="offline"?"pacom-pin--offline":""}"
                            style="left:${(p.planPoint.x*100).toFixed(2)}%; top:${(p.planPoint.y*100).toFixed(2)}%;"
                            data-pick-dev="${p.id}">
                            <span>${p.name.slice(0,7)}</span>
                          </button>`).join("")}
                    </div>
                  </div>
                  ${g&&S?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${S.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                </div>
              </main>
            </section>`:a==="topology"?`
              <div class="pacom-content-page" style="padding:0;">
                <section class="pacom-card">
                  <h2 class="pacom-drawer-title">项目 → 楼宇 → 楼层归属拓扑</h2>
                  <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:12px;">
                    ${t.projects.map(p=>{const E=t.buildings.filter(x=>x.projectId===p.id);return`
                          <div class="pacom-control-box" style="background:#fff;">
                            <img src="${p.imageUrl??"/media/gzlab.jpg"}" alt="${p.name}" style="width:100%; height:110px; object-fit:cover; border-radius:8px;" />
                            <strong>${p.name}</strong>
                            <span class="pacom-row-sub">${p.city??""} ${p.address??""} · ${E.length} 栋授权楼宇</span>
                            <div style="display:flex; flex-direction:column; gap:6px; margin-top:4px;">
                              ${E.map(x=>`
                                  <div class="pacom-receipt-item">
                                    <span>├─ <strong>${x.name}</strong>（地上 ${x.aboveFloors}F / ${x.areaSqm??"-"} m²）</span>
                                    <span class="pacom-badge pacom-badge--neutral">${x.id===l.buildingId?"含 E7F":"对照"}</span>
                                  </div>`).join("")}
                            </div>
                          </div>`}).join("")}
                  </div>
                </section>
              </div>`:a==="connections"?`
                <div class="pacom-content-page" style="padding:0;">
                  <section class="pacom-card">
                    <h2 class="pacom-drawer-title">系统接入通道（采集点与计算点独立计数）</h2>
                    ${v.map(p=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <strong>${p.name}</strong>
                            <div class="pacom-row-sub">${p.protocol.toUpperCase()} · ${p.endpoint} · 采集点 ${p.collectedPoints} / 计算点 ${p.calculatedPoints}</div>
                          </div>
                          <span class="pacom-badge ${p.status==="connected"?"pacom-badge--online":"pacom-badge--warning"}">${p.status}</span>
                        </div>`).join("")}
                  </section>
                </div>`:`
                <div class="pacom-content-page" style="padding:0;">
                  <section class="pacom-card">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">
                      <h2 class="pacom-drawer-title">E7F 交付冻结批次</h2>
                      <button class="pacom-btn pacom-btn--primary" data-freeze-batch="1">新建交付冻结快照</button>
                    </div>
                    ${$.map(p=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <strong>${p.versionTag}</strong>（${p.id}）
                            <div class="pacom-row-sub">已现场核验 ${p.verifiedCount} / ${p.deviceCount} 台 · 冻结人：${p.frozenBy} · ${p.note??""}</div>
                          </div>
                          <span class="pacom-badge pacom-badge--accent">${p.status}</span>
                        </div>`).join("")}
                  </section>
                </div>`}
      </div>
    `,i.querySelectorAll("[data-dtab]").forEach(p=>{p.addEventListener("click",()=>{a=p.dataset.dtab,c="",w="",I()})}),i.querySelectorAll("[data-pick-dev]").forEach(p=>{p.addEventListener("click",()=>{u=p.dataset.pickDev??null,I()})}),i.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{g=!g,I()}),i.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async p=>{if(!g||!S)return;const E=p.currentTarget.getBoundingClientRect(),x=Math.max(.02,Math.min(.98,(p.clientX-E.left)/E.width)),P=Math.max(.02,Math.min(.98,(p.clientY-E.top)/E.height));try{await e.updateDevicePlanPoint({deviceId:S.id,floorId:l.floorId,planVersion:S.planPoint?.planVersion??1,x,y:P,expectedVersion:S.version}),g=!1,c=`已更新「${S.name}」图上坐标（硬件绑定与物理安装态保持不变）`,await d()}catch(O){w=O instanceof Error?O.message:String(O),I()}}),i.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async p=>{if(p.preventDefault(),!S)return;const E=new FormData(p.currentTarget);try{await e.updateDeviceHardwareBinding({deviceId:S.id,gatewayId:S.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(E.get("protocol")),networkAddress:String(E.get("networkAddress")??""),portOrChannel:String(E.get("portOrChannel")??""),physicalInstalled:E.get("physicalInstalled")==="on",expectedVersion:S.version}),c=`已保存「${S.name}」的硬件绑定与物理安装状态`,await d()}catch(x){w=x instanceof Error?x.message:String(x),I()}}),i.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const p=await e.freezeDeliveryBatch(l.floorId,"前端系统部署发起冻结");c=`已生成冻结批次 ${p.versionTag}（核验 ${p.verifiedCount}/${p.deviceCount}）`,await d()}catch(p){w=p instanceof Error?p.message:String(p),I()}})}await d()}const H="pacom.web.e7f.leftWidth",re={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},de={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}};function f(i){return String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function G(i){return i.level==="all-projects"?"all":i.level==="project"?`project:${i.projectId}`:i.level==="building"?`building:${i.projectId}:${i.buildingId}`:`floor:${i.projectId}:${i.buildingId}:${i.floorId}`}async function pe(i,e,o){const a=await e.getSpatialTree();let t={level:"floor",projectId:l.projectId,buildingId:l.buildingId,floorId:l.floorId},s="devices",v="",$="all",u=null;const g=new Set;let c=[],w=[],d=[],I=null,S=null,A=1,p=0,E=0,x=Number(localStorage.getItem(H)||400);(!Number.isFinite(x)||x<320||x>680)&&(x=400);let P=null;async function O(n){t=n,S=null,g.clear(),A=1,p=0,E=0,P&&(P(),P=null);const r=t.level==="floor"?t.floorId:l.floorId;if(t.level==="floor")try{const[b,h,m]=await Promise.all([e.getFloorDevices(t.floorId),e.listAlarms(t.floorId),e.listWorkOrders(t.floorId)]);c=b,w=h,d=m,c.some(y=>y.id===u)||(u=c[1]?.id??c[0]?.id??null),P=e.subscribeFloorEvents(t.floorId,async y=>{y.type==="control.receipt.updated"&&I?.batchId===y.batchId&&(I=await e.getControlBatch(y.batchId)),(y.type==="telemetry.updated"||y.type==="device.connectivity")&&t.level==="floor"&&(c=await e.getFloorDevices(t.floorId)),y.type==="alarm.changed"&&t.level==="floor"&&(w=await e.listAlarms(t.floorId)),D()})}catch(b){c=[],w=[],d=[],u=null,S=b instanceof Error?b.message:String(b)}else{const[b,h,m]=await Promise.all([e.getFloorDevices(r).catch(()=>[]),e.listAlarms(r).catch(()=>[]),e.listWorkOrders(r).catch(()=>[])]);c=b,w=h,d=m}D()}function B(n){return n?a.zones.find(r=>r.id===n)?.name??n:"未分配逻辑区"}function R(){const n=v.trim().toLowerCase();return c.filter(r=>$!=="all"&&r.category!==$?!1:n?r.name.toLowerCase().includes(n)||r.id.toLowerCase().includes(n)||B(r.logicalZoneId).toLowerCase().includes(n):!0)}async function _(n,r,b){!n.length||t.level!=="floor"||(I=await e.dispatchControlBatch({floorId:t.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:n.map(h=>({deviceId:h,command:r,targetValue:b}))}),D())}function W(){const n=t,r=[{label:"全部项目",scopeVal:"all",active:n.level==="all-projects"}];if(n.level!=="all-projects"){const b=a.projects.find(h=>h.id===n.projectId);r.push({label:b?.name??"项目",scopeVal:`project:${n.projectId}`,active:n.level==="project"})}if(n.level==="building"||n.level==="floor"){const b=a.buildings.find(h=>h.id===n.buildingId);r.push({label:b?.name??"楼宇",scopeVal:`building:${n.projectId}:${n.buildingId}`,active:n.level==="building"})}if(n.level==="floor"){const b=a.floors.find(h=>h.id===n.floorId);r.push({label:b?.name??"楼层",scopeVal:G(n),active:!0})}return`
      <nav aria-label="空间层级路径" style="display:flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); flex-wrap:wrap;">
        ${r.map((b,h)=>b.active?`<strong style="color:var(--pacom-text-primary);">${f(b.label)}</strong>`:`<button class="pacom-btn" style="height:24px; padding:0 8px; font-size:12px;" data-nav-scope="${f(b.scopeVal)}">${f(b.label)}</button>${h<r.length-1?"<span>/</span>":""}`).join("")}
      </nav>
    `}function k(){const n=G(t),r=a.projects.map(m=>`<option value="project:${f(m.id)}" ${n===`project:${m.id}`?"selected":""}>项目 · ${f(m.name)}</option>`).join(""),b=a.buildings.map(m=>{const y=`building:${m.projectId}:${m.id}`;return`<option value="${f(y)}" ${n===y?"selected":""}>楼宇 · 广实2号园 / ${f(m.name)}</option>`}).join(""),h=a.floors.map(m=>{const y=o.scope.allowedFloorIds.includes(m.id),j=`floor:${l.projectId}:${m.buildingId}:${m.id}`;return`<option value="${f(j)}" ${n===j?"selected":""}>楼层 · 广实2号园 / E栋 / ${f(m.name)}${y?"":"（未授权对照）"}</option>`}).join("");return`
      <option value="all" ${n==="all"?"selected":""}>全部项目（${a.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${r}</optgroup>
      <optgroup label="楼宇级">${b}</optgroup>
      <optgroup label="楼层级">${h}</optgroup>
    `}function U(){if(t.level==="all-projects"){const b=c.filter(m=>m.connectivity==="online").length,h=w.filter(m=>m.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${a.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${a.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${b}/${c.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${h} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${a.projects.map(m=>{const y=a.buildings.filter(j=>j.projectId===m.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${f(m.id)}">
                  <img src="${f(m.imageUrl??"/media/gzlab.jpg")}" alt="${f(m.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${f(m.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${y} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${f(m.city??"")} · ${f(m.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const n=t;if(n.level==="project"){const b=a.projects.find(m=>m.id===n.projectId),h=a.buildings.filter(m=>m.projectId===n.projectId);return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${f(b?.name??"项目")} · 楼宇清单（${h.length}）</div>
          <div class="pacom-row-sub">${f(b?.city??"")} ${f(b?.address??"")}</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${h.map(m=>`
              <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${f(m.projectId)}:${f(m.id)}">
                <img src="${f(m.imageUrl??"/media/building-e.png")}" alt="${f(m.name)}" style="width:100%; height:116px; object-fit:cover; border-radius:8px;" />
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <strong>${f(m.name)}</strong>
                  <span class="pacom-badge ${m.id===l.buildingId?"pacom-badge--online":"pacom-badge--neutral"}">${m.id===l.buildingId?"含 E7F 试点":"暂无交付楼层"}</span>
                </div>
                <div class="pacom-row-sub">地上 ${m.aboveFloors} 层 · 地下 ${m.belowFloors} 层 · 面积 ${m.areaSqm??"-"} m²</div>
              </article>`).join("")}
        </div>
      `}if(n.level==="building"){const b=a.buildings.find(y=>y.id===n.buildingId),h=a.floors.filter(y=>y.buildingId===n.buildingId),m=d.filter(y=>y.status!=="closed"&&y.status!=="resolved");return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${f(b?.name??"楼宇")} 概况与待办</div>
          <div class="pacom-row-sub">地上 ${b?.aboveFloors??0} 层 · 面积 ${b?.areaSqm??"-"} m² · 未结工单 ${m.length} 项</div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div class="pacom-control-box">
            <strong style="font-size:13px;">楼宇待办与未结工单（${m.length}）</strong>
            ${m.length?m.map(y=>`<div class="pacom-row-sub">• ${f(y.title)}（${f(y.status)}）</div>`).join(""):'<div class="pacom-row-sub">当前楼宇无未结工单</div>'}
          </div>
          <div style="font-weight:500; font-size:13px; margin-top:4px;">选择楼层进入 2D 平面控制</div>
          ${h.length?h.map(y=>{const j=o.scope.allowedFloorIds.includes(y.id);return`
                      <div class="pacom-row" data-nav-scope="floor:${f(n.projectId)}:${f(n.buildingId)}:${f(y.id)}">
                        <div>
                          <div class="pacom-row-title">${f(b?.name??"")} ${f(y.name)}</div>
                          <div class="pacom-row-sub">${y.plan?"已上传 2D 图纸":"暂未上传图纸"}</div>
                        </div>
                        <span class="pacom-badge ${j?"pacom-badge--online":"pacom-badge--warning"}">${j?"进入楼层":"未授权对照"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(s==="devices"){const b=R(),h=Array.from(g);return`
        <div class="pacom-pane-toolbar">
          <div class="pacom-search-row">
            <input class="pacom-input" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${f(v)}" />
            <select class="pacom-select" data-role="category">
              <option value="all" ${$==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${$==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${$==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${$==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${$==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前楼层共 ${b.length} 台设备</span>
            <span>已勾选 ${h.length} 台</span>
          </div>
        </div>
        <div class="pacom-list">
          ${S?`<div class="pacom-alert-banner">${f(S)}</div>`:b.map(m=>{const y=m.id===u,j=g.has(m.id),N=m.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline",te=m.category==="lighting"?`亮度 ${m.telemetry.dimming?.value??"--"}%`:m.category==="hvac"?`设定 ${m.telemetry.setpoint?.value??"--"}°C`:m.category==="sensor"?`${m.telemetry.temp?.value??"--"}°C · CO₂ ${m.telemetry.co2?.value??"--"}`:m.hardwareBinding?.networkAddress??"未绑定";return`
                      <div class="pacom-row ${y?"is-selected":""}" data-select-device="${f(m.id)}">
                        <div class="pacom-row-main">
                          <input type="checkbox" data-check-device="${f(m.id)}" ${j?"checked":""} style="margin-top:3px;" />
                          <div style="min-width:0;">
                            <div class="pacom-row-title">${f(m.name)}</div>
                            <div class="pacom-row-sub">${f(B(m.logicalZoneId))} · ${f(re[m.category])}</div>
                          </div>
                        </div>
                        <span class="pacom-badge ${m.connectivity==="online"?"pacom-badge--online":"pacom-badge--neutral"}">
                          <span class="pacom-dot ${N}"></span>${f(te)}
                        </span>
                      </div>`}).join("")}
        </div>
        ${h.length>0?`
            <div class="pacom-batch-bar">
              <span style="font-size:12px;">显式批量目标：<strong>${h.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button class="pacom-btn" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button class="pacom-btn pacom-btn--primary" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}return s==="alarms"?`
        <div class="pacom-pane-toolbar"><div style="font-weight:500;">当前楼层告警与工单</div></div>
        <div class="pacom-list">
          ${w.map(b=>`
              <div class="pacom-control-box" style="margin-bottom:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <strong style="font-size:13px;">${f(b.title)}</strong>
                  <span class="pacom-badge ${b.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${b.status==="active"?"待确认":"已确认"}</span>
                </div>
                <div style="font-size:12px; color:var(--pacom-text-secondary);">${f(b.message)}</div>
                ${b.status==="active"?`<div><button class="pacom-btn" data-ack-alarm="${f(b.id)}">确认告警</button></div>`:""}
              </div>`).join("")}
        </div>
      `:`
      <div class="pacom-pane-toolbar">
        <div style="font-weight:500;">后端联调契约监视器（实时 REST / WS 载荷）</div>
      </div>
      <div class="pacom-list">
        ${(e instanceof ee?e.traces:[]).slice(0,12).map(b=>`
            <div class="pacom-control-box" style="margin-bottom:6px;">
              <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                <span class="pacom-badge ${b.channel==="WS"?"pacom-badge--accent":"pacom-badge--neutral"}">${b.channel}</span>
                <code style="font-size:11px; flex:1; overflow:hidden; text-overflow:ellipsis;">${f(b.endpoint)}</code>
              </div>
              <pre class="pacom-code">${f(JSON.stringify(b.request?{request:b.request,response:b.response}:b.response,null,2))}</pre>
            </div>`).join("")}
      </div>
    `}function L(){const n=t;if(n.level==="all-projects"||n.level==="project"){const h=n.level==="project"?a.projects.find(y=>y.id===n.projectId):a.projects[0],m=a.buildings.filter(y=>!h||y.projectId===h.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${f(h?.imageUrl??"/media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${n.level==="all-projects"?a.projects.map((y,j)=>`
                      <button class="pacom-pin is-selected" style="left:${j===0?48:26}%; top:${j===0?52:34}%;" data-nav-scope="project:${f(y.id)}">
                        <span>${f(y.name)}</span>
                      </button>`).join(""):m.map((y,j)=>`
                      <button class="pacom-pin is-selected" style="left:${j===0?56:38}%; top:${j===0?44:62}%;" data-nav-scope="building:${f(y.projectId)}:${f(y.id)}">
                        <span>${f(y.name)}（点击查看整栋）</span>
                      </button>`).join("")}
          </div>
        </div>
      `}if(n.level==="building"){const h=a.buildings.find(y=>y.id===n.buildingId),m=a.floors.filter(y=>y.buildingId===n.buildingId);return`
        ${m.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${m.map(y=>`<button class="pacom-floor-btn ${o.scope.allowedFloorIds.includes(y.id)?"":"is-locked"}" data-nav-scope="floor:${f(n.projectId)}:${f(n.buildingId)}:${f(y.id)}" title="${f(y.name)}">${f(y.name.replace("F",""))}</button>`).join("")}
            </nav>`:""}
        <div class="pacom-canvas-tools" aria-label="画布工具">
          <button class="pacom-tool-btn" data-zoom="in" title="放大">＋</button>
          <button class="pacom-tool-btn" data-zoom="out" title="缩小">－</button>
          <button class="pacom-tool-btn" data-zoom="reset" title="复位">⟲</button>
        </div>
        <div class="pacom-canvas-stage">
          <div class="pacom-canvas-viewport" style="transform: translate(${p}px, ${E}px) scale(${A});">
            <img class="pacom-plan-img" src="${f(h?.imageUrl??"/media/building-e.png")}" alt="${f(h?.name??"楼宇")} 整栋实景图" />
          </div>
        </div>
      `}const r=a.floors.find(h=>h.id===n.floorId),b=a.floors.filter(h=>h.buildingId===n.buildingId);return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button class="pacom-floor-btn" data-nav-scope="building:${f(n.projectId)}:${f(n.buildingId)}" title="返回整栋楼宇">栋</button>
        ${b.map(h=>{const m=o.scope.allowedFloorIds.includes(h.id);return`<button class="pacom-floor-btn ${h.id===n.floorId?"is-active":""} ${m?"":"is-locked"}"
              data-nav-scope="floor:${f(n.projectId)}:${f(n.buildingId)}:${f(h.id)}" title="${f(h.name)}${m?"":"（无权限对照）"}">
              ${f(h.name.replace("F",""))}
            </button>`}).join("")}
      </nav>

      <div class="pacom-canvas-tools" aria-label="画布工具">
        <button class="pacom-tool-btn" data-zoom="in" title="放大">＋</button>
        <button class="pacom-tool-btn" data-zoom="out" title="缩小">－</button>
        <button class="pacom-tool-btn" data-zoom="reset" title="复位">⟲</button>
      </div>

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${S?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${f(S)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" style="transform: translate(${p}px, ${E}px) scale(${A});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${f(r?.plan?.imageUrl??"/media/7F.webp")}" alt="E栋 ${f(r?.name??"7F")} 平面图" />
                  ${c.filter(h=>h.planPoint).map(h=>`
                      <button class="pacom-pin ${h.id===u?"is-selected":""} ${h.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(h.planPoint.x*100).toFixed(2)}%; top:${(h.planPoint.y*100).toFixed(2)}%;"
                        data-pin-device="${f(h.id)}" title="${f(h.name)}">
                        <span class="pacom-dot ${h.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${f(h.name.slice(0,8))}</span>
                      </button>`).join("")}
                </div>
              </div>`}
      </div>

      ${M()}
    `}function M(){if(t.level!=="floor")return"";const n=c.find(y=>y.id===u);if(!n)return"";const r=n.category==="lighting",b=n.category==="hvac",h=Number(n.telemetry.dimming?.value??50),m=Number(n.telemetry.setpoint?.value??24);return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div>
            <h2 class="pacom-drawer-title">${f(n.name)}</h2>
            <div class="pacom-row-sub">${f(n.id)} · v${n.version}</div>
          </div>
          <span class="pacom-badge ${n.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
            ${n.connectivity==="online"?"在线":"离线"}
          </span>
        </div>

        <div class="pacom-kv-grid">
          <span class="pacom-kv-label">1. 逻辑区域</span><span>${f(B(n.logicalZoneId))}</span>
          <span class="pacom-kv-label">2. 图上点位</span><span>${n.planPoint?`x=${n.planPoint.x.toFixed(2)}, y=${n.planPoint.y.toFixed(2)} (图 v${n.planPoint.planVersion})`:"未标点"}</span>
          <span class="pacom-kv-label">3. 物理安装</span><span>${n.physicalInstalled?"现场已确认":"待现场复核（不可按图标推定）"}</span>
          <span class="pacom-kv-label">4. 硬件绑定</span><span>${n.hardwareBinding?`${n.hardwareBinding.protocol.toUpperCase()} · ${n.hardwareBinding.networkAddress}`:"未绑定"}</span>
        </div>

        ${r||b?`
            <div class="pacom-control-box">
              <div style="font-weight:500; font-size:13px;">实时控制下发（需网关逐设备回读确认）</div>
              ${r?`
                  <div style="display:flex; gap:6px;">
                    <button class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true">开灯</button>
                    <button class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false">关灯</button>
                  </div>
                  <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                    亮度目标：<strong>${h}%</strong>
                    <input type="range" min="0" max="100" step="10" value="${h}" data-ctrl-slider="lighting.dimming" />
                  </label>`:`
                  <div style="display:flex; gap:6px;">
                    <button class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true">开机</button>
                    <button class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false">关机</button>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:12px;">设定温度：</span>
                    <button class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${m-.5}">-0.5°C</button>
                    <strong>${m.toFixed(1)}°C</strong>
                    <button class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${m+.5}">+0.5°C</button>
                  </div>`}
            </div>`:""}

        ${I?`
            <div class="pacom-control-box">
              <div style="font-size:12px; font-weight:500;">最近批次：<code>${f(I.batchId)}</code></div>
              <div class="pacom-receipt-list">
                ${I.receipts.map(y=>{const j=de[y.status]??{text:y.status,badge:"pacom-badge--neutral"};return`
                      <div class="pacom-receipt-item">
                        <div>
                          <div><strong>${f(y.deviceId)}</strong> · ${f(y.command)} → ${f(y.targetValue)}</div>
                          ${y.errorMessage?`<div style="color:var(--pacom-status-critical);">${f(y.errorMessage)}</div>`:""}
                        </div>
                        <span class="pacom-badge ${j.badge}">${j.text}</span>
                      </div>`}).join("")}
              </div>
            </div>`:""}
      </aside>
    `}function T(n){if(n==="all")return{level:"all-projects"};const r=n.split(":");return r[0]==="project"&&r[1]?{level:"project",projectId:r[1]}:r[0]==="building"&&r[1]&&r[2]?{level:"building",projectId:r[1],buildingId:r[2]}:r[0]==="floor"&&r[1]&&r[2]&&r[3]?{level:"floor",projectId:r[1],buildingId:r[2],floorId:r[3]}:{level:"all-projects"}}function D(){const n=w.filter(r=>r.status==="active").length;i.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
              <h1 class="pacom-title">首页</h1>
              ${W()}
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${e.mode==="live"?"pacom-badge--online":"pacom-badge--neutral"}">
                <span class="pacom-dot ${e.mode==="live"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                ${e.mode.toUpperCase()}
              </span>
              <span class="pacom-badge pacom-badge--neutral">${f(o.roleLabel)}</span>
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <div class="pacom-toolbar-left">
              <div class="pacom-scope-pill" title="项目 / 楼宇 / 楼层三级范围选择器">
                <select data-role="scope-select" aria-label="选择查看范围">
                  ${k()}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>

              ${t.level==="floor"?`
                  <div class="pacom-tabs" role="tablist">
                    <button class="pacom-tab" role="tab" aria-selected="${s==="devices"}" data-tab="devices">设备与控制</button>
                    <button class="pacom-tab" role="tab" aria-selected="${s==="alarms"}" data-tab="alarms">
                      告警 ${n>0?`<span class="pacom-badge pacom-badge--warning">${n}</span>`:""}
                    </button>
                    <button class="pacom-tab" role="tab" aria-selected="${s==="handoff"}" data-tab="handoff">后端联调契约</button>
                  </div>`:""}
            </div>
          </div>
        </header>

        <section class="pacom-split">
          <aside class="pacom-left-pane" style="--pacom-sidebar-width:${x}px;">
            ${U()}
          </aside>
          <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
          <main class="pacom-right-pane">
            ${L()}
          </main>
        </section>
      </div>
    `,z()}function z(){i.querySelector('[data-role="scope-select"]')?.addEventListener("change",r=>{O(T(r.currentTarget.value))}),i.querySelectorAll("[data-nav-scope]").forEach(r=>{r.addEventListener("click",()=>{r.dataset.navScope&&O(T(r.dataset.navScope))})}),i.querySelectorAll("[data-tab]").forEach(r=>{r.addEventListener("click",()=>{s=r.dataset.tab,D()})}),i.querySelector('[data-role="search"]')?.addEventListener("input",r=>{v=r.currentTarget.value,D()}),i.querySelector('[data-role="category"]')?.addEventListener("change",r=>{$=r.currentTarget.value,D()}),i.querySelectorAll("[data-select-device]").forEach(r=>{r.addEventListener("click",b=>{b.target.tagName!=="INPUT"&&(u=r.dataset.selectDevice??null,D())})}),i.querySelectorAll("[data-check-device]").forEach(r=>{r.addEventListener("change",()=>{const b=r.dataset.checkDevice;b&&(r.checked?g.add(b):g.delete(b),D())})}),i.querySelectorAll("[data-pin-device]").forEach(r=>{r.addEventListener("click",b=>{b.stopPropagation(),u=r.dataset.pinDevice??null,D()})}),i.querySelectorAll("[data-ctrl-cmd]").forEach(r=>{r.addEventListener("click",()=>{if(!u||!r.dataset.ctrlCmd)return;const b=r.dataset.ctrlVal??"",h=b==="true"?!0:b==="false"?!1:Number(b);_([u],r.dataset.ctrlCmd,h)})}),i.querySelector("[data-ctrl-slider]")?.addEventListener("change",r=>{const b=r.currentTarget;!u||!b.dataset.ctrlSlider||_([u],b.dataset.ctrlSlider,Number(b.value))}),i.querySelectorAll("[data-batch-cmd]").forEach(r=>{r.addEventListener("click",()=>{const b=Array.from(g),h=r.dataset.batchVal??"",m=h==="true"?!0:h==="false"?!1:h;_(b,r.dataset.batchCmd,m)})}),i.querySelectorAll("[data-ack-alarm]").forEach(r=>{r.addEventListener("click",async()=>{!r.dataset.ackAlarm||t.level!=="floor"||(await e.acknowledgeAlarm(r.dataset.ackAlarm,"首页快速确认"),w=await e.listAlarms(t.floorId),D())})}),i.querySelectorAll("[data-zoom]").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.zoom;b==="in"?A=Math.min(2.5,Number((A+.2).toFixed(2))):b==="out"?A=Math.max(.6,Number((A-.2).toFixed(2))):(A=1,p=0,E=0),D()})});const n=i.querySelector('[data-role="splitter"]');n?.addEventListener("pointerdown",r=>{const b=r.clientX,h=x;n.classList.add("is-dragging");const m=j=>{x=Math.max(320,Math.min(640,h+(j.clientX-b)));const N=i.querySelector(".pacom-left-pane");N&&N.style.setProperty("--pacom-sidebar-width",`${x}px`)},y=()=>{n.classList.remove("is-dragging"),localStorage.setItem(H,String(Math.round(x))),window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",y)};window.addEventListener("pointermove",m),window.addEventListener("pointerup",y)})}await O(t)}async function ue(i,e,o){let a=await e.listScenes(l.floorId),t=null,s="";const v=e.subscribeFloorEvents(l.floorId,async u=>{u.type==="control.receipt.updated"&&t?.batchId===u.batchId&&(t=await e.getControlBatch(u.batchId),$())});function $(){i.innerHTML=`
      <div class="pacom-content-page">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h1 class="pacom-title">场景</h1>
          <span class="pacom-badge ${o.scope.canControlDevices?"pacom-badge--online":"pacom-badge--warning"}">
            ${o.scope.canControlDevices?"可触发并核验逐设备回执":"只读"}
          </span>
        </div>

        ${s?`<div class="pacom-alert-banner">${s}</div>`:""}

        <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:12px;">
          ${a.map(u=>`
              <section class="pacom-card">
                <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                  <strong style="font-size:15px;">${u.name}</strong>
                  <span class="pacom-badge pacom-badge--neutral">${u.actions.length} 个动作</span>
                </div>
                <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary);">${u.description}</p>
                <div class="pacom-row-sub">计划：${u.scheduleSummary??"手动"} · 最近执行：${u.lastExecutedAt?u.lastExecutedAt.slice(0,19).replace("T"," "):"尚未执行"}</div>
                <div style="display:flex; justify-content:flex-end;">
                  <button class="pacom-btn pacom-btn--primary" data-exec-scene="${u.id}">手动执行场景</button>
                </div>
              </section>`).join("")}
        </div>

        ${t?`
            <section class="pacom-card">
              <h2 class="pacom-drawer-title">场景执行逐设备回读回执（批次 ${t.batchId}）</h2>
              <div class="pacom-receipt-list">
                ${t.receipts.map(u=>`
                    <div class="pacom-receipt-item">
                      <div>
                        <strong>${u.deviceId}</strong> · ${u.command} → ${String(u.targetValue)}
                        ${u.errorMessage?`<div style="color:var(--pacom-status-critical);">${u.errorMessage}</div>`:""}
                      </div>
                      <span class="pacom-badge ${u.status==="verified_success"?"pacom-badge--online":u.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${u.status}</span>
                    </div>`).join("")}
              </div>
            </section>`:""}

        <section class="pacom-card">
          <h2 class="pacom-drawer-title">新建自定义场景</h2>
          <form data-role="new-scene-form" style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px;">
            <input class="pacom-input" name="name" placeholder="场景名称（如：实验区午休调光）" required />
            <input class="pacom-input" name="description" placeholder="动作说明" required />
            <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
          </form>
        </section>
      </div>
    `,i.querySelectorAll("[data-exec-scene]").forEach(u=>{u.addEventListener("click",async()=>{s="";try{t=await e.executeScene(u.dataset.execScene),a=await e.listScenes(l.floorId),$()}catch(g){s=g instanceof Error?g.message:String(g),$()}})}),i.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async u=>{u.preventDefault();const g=new FormData(u.currentTarget);try{await e.createScene({projectId:l.projectId,floorId:l.floorId,name:String(g.get("name")??""),description:String(g.get("description")??""),actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:50}]}),a=await e.listScenes(l.floorId),$()}catch(c){s=c instanceof Error?c.message:String(c),$()}})}$(),window.addEventListener("hashchange",()=>v(),{once:!0})}const Y=[{id:"calendar",label:"运行日历"},{id:"weather_area",label:"气象与面积"},{id:"lighting",label:"照明策略"},{id:"hvac",label:"暖通策略"},{id:"metering_carbon",label:"计量与碳排"},{id:"alarm_rules",label:"告警规则"},{id:"templates",label:"参数模板"}];async function me(i,e,o){let a="calendar",t=await e.getRuntimeSettings(l.projectId),s=t.calendar.workdayStart,v=t.calendar.workdayEnd,$=[],u="",g="";function c(){const w=t.rules.filter(d=>d.category===a);i.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">运行设置</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">项目范围：广实2号园</span>
              <span class="pacom-badge ${o.scope.canEditDeployment?"pacom-badge--online":"pacom-badge--warning"}">
                ${o.scope.canEditDeployment?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              ${Y.map(d=>`<button class="pacom-tab" role="tab" aria-selected="${a===d.id}" data-scat="${d.id}">${d.label}</button>`).join("")}
            </div>
          </div>
        </header>

        ${u?`<div class="pacom-badge pacom-badge--online" style="height:auto; padding:8px 12px;">${u}</div>`:""}
        ${g?`<div class="pacom-alert-banner">${g}</div>`:""}

        <div class="pacom-content-page" style="padding:0;">
          ${a==="calendar"?`
              <section class="pacom-card">
                <h2 class="pacom-drawer-title">项目工作时间日历（版本 v${t.calendar.version}）</h2>
                <div style="display:flex; align-items:flex-end; gap:12px; flex-wrap:wrap;">
                  <label class="pacom-field">
                    <span>上班时间</span>
                    <input class="pacom-input" type="time" data-cal-start value="${s}" />
                  </label>
                  <label class="pacom-field">
                    <span>下班时间</span>
                    <input class="pacom-input" type="time" data-cal-end value="${v}" />
                  </label>
                  <button class="pacom-btn" data-preview-impact="1">保存前预览受影响规则</button>
                  <button class="pacom-btn pacom-btn--primary" data-save-cal="1">保存并校验版本</button>
                </div>
                <div class="pacom-row-sub">夜间巡检窗口：${t.calendar.nightGuardStart} – ${t.calendar.nightGuardEnd}（若下班时间晚于 21:30 将自动提示交叠冲突）</div>

                ${$.length>0?`
                    <div style="margin-top:8px; display:flex; flex-direction:column; gap:6px;">
                      <strong style="font-size:13px;">受影响的定时与夜间规则预览（${$.length} 条）</strong>
                      ${$.map(d=>`
                          <div class="pacom-receipt-item">
                            <div>
                              <strong>${d.ruleName}</strong>
                              <div class="pacom-row-sub">原窗口：${d.beforeWindow} → 新窗口：${d.afterWindow}</div>
                              ${d.conflictWarning?`<div style="color:var(--pacom-status-critical);">${d.conflictWarning}</div>`:""}
                            </div>
                            <span class="pacom-badge ${d.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">${d.conflictWarning?"交叠警告":"自动跟随"}</span>
                          </div>`).join("")}
                    </div>`:""}
              </section>`:`
              <section class="pacom-card">
                <h2 class="pacom-drawer-title">${Y.find(d=>d.id===a)?.label}（${w.length}）</h2>
                ${w.map(d=>`
                    <div class="pacom-receipt-item">
                      <div>
                        <strong>${d.name}</strong> <span class="pacom-row-sub">v${d.version} · ${d.scopeLabel}</span>
                        <div class="pacom-row-sub">${d.summary} · 回执：${d.receiptSummary??"-"}</div>
                      </div>
                      <button class="pacom-btn ${d.enabled?"pacom-btn--primary":""}" data-toggle-rule="${d.id}" data-rule-ver="${d.version}" data-rule-next="${!d.enabled}">
                        ${d.enabled?"已启用（点击停用）":"已停用（点击启用）"}
                      </button>
                    </div>`).join("")}
              </section>`}
        </div>
      </div>
    `,i.querySelectorAll("[data-scat]").forEach(d=>{d.addEventListener("click",()=>{a=d.dataset.scat,u="",g="",c()})}),i.querySelector("[data-cal-start]")?.addEventListener("change",d=>{s=d.currentTarget.value}),i.querySelector("[data-cal-end]")?.addEventListener("change",d=>{v=d.currentTarget.value}),i.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{g="",$=await e.previewCalendarImpact(l.projectId,s,v),c()}),i.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{g="";try{const d=await e.saveWorkCalendar(l.projectId,s,v,t.calendar.version);t={...t,calendar:d},u=`运行日历已保存至 v${d.version}（${d.workdayStart} - ${d.workdayEnd}）`,$=[],c()}catch(d){g=d instanceof Error?d.message:String(d),c()}}),i.querySelectorAll("[data-toggle-rule]").forEach(d=>{d.addEventListener("click",async()=>{g="";try{await e.toggleRuntimeRule(d.dataset.toggleRule,d.dataset.ruleNext==="true",Number(d.dataset.ruleVer)),t=await e.getRuntimeSettings(l.projectId),u="规则状态与版本回执已更新",c()}catch(I){g=I instanceof Error?I.message:String(I),c()}})})}c()}const K="pacom.web.sidebar.collapsed",Z=[{id:"home",label:"首页",iconSvg:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'},{id:"analysis",label:"数据分析",iconSvg:'<path d="M4 19h16"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>'},{id:"alarms",label:"告警工单",iconSvg:'<path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>'},{id:"scenes",label:"场景",iconSvg:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3"/>'},{id:"settings",label:"运行设置",iconSvg:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>'},{id:"deployment",label:"系统部署",iconSvg:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="8.5" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>'},{id:"account",label:"账户",iconSvg:'<circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>'}];function X(){const i=window.location.hash.replace(/^#\/?/,"").split("?")[0];return Z.some(e=>e.id===i)?i:"home"}async function ve(i,e,o,a){let t=o,s=X(),v=localStorage.getItem(K)==="1",$="";async function u(c){switch(s){case"home":await pe(c,e,t);return;case"analysis":await ne(c,e);return;case"alarms":await se(c,e,t);return;case"scenes":await ue(c,e,t);return;case"settings":await me(c,e,t);return;case"deployment":await ce(c,e,t);return;case"account":await oe(c,e,t,w=>{t=w,g()},a);return}}async function g(){const c=$.trim()?Z.filter(I=>I.label.includes($.trim())):Z,w=e.mode==="demo"&&typeof e.switchDemoRole=="function";i.innerHTML=`
      <div class="pacom-app-frame">
        <aside class="pacom-nav-rail ${v?"is-collapsed":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">
              <img src="/media/favicon.svg" alt="" width="22" height="22" />
              <span class="pacom-nav-logo-text">PACOM Station</span>
            </div>
            <button class="pacom-collapse-btn" data-role="toggle-sidebar" title="${v?"展开侧栏":"收起侧栏"}" aria-label="${v?"展开侧栏":"收起侧栏"}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                ${v?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}
              </svg>
            </button>
          </div>

          <div class="pacom-nav-search-wrap">
            <input class="pacom-nav-search" data-role="nav-search" placeholder="搜索工作区…" value="${$}" />
          </div>

          <nav class="pacom-nav-list">
            ${c.map(I=>`
                <button class="pacom-nav-item" data-route="${I.id}" aria-current="${s===I.id?"page":"false"}" title="${I.label}">
                  <svg class="pacom-nav-icon" viewBox="0 0 24 24">${I.iconSvg}</svg>
                  <span class="pacom-nav-label">${I.label}</span>
                </button>`).join("")}
          </nav>

          <div class="pacom-nav-footer">
            <div class="pacom-nav-user-meta" style="font-size:12px;">
              <div style="font-weight:500;">${t.displayName}</div>
              <div style="color:var(--pacom-text-secondary);">${t.roleLabel} · ${e.mode.toUpperCase()}</div>
            </div>
            ${w&&!v?`
                <select class="pacom-nav-role-select" data-role="quick-role" aria-label="快捷切换演示角色">
                  ${Object.keys(F).map(I=>`<option value="${I}" ${I===t.role?"selected":""}>预览：${F[I].roleLabel}</option>`).join("")}
                </select>`:""}
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,i.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{v=!v,localStorage.setItem(K,v?"1":"0"),g()}),i.querySelector('[data-role="nav-search"]')?.addEventListener("input",I=>{$=I.currentTarget.value,g()}),i.querySelectorAll("[data-route]").forEach(I=>{I.addEventListener("click",()=>{s=I.dataset.route,window.location.hash=`#${s}`,g()})}),i.querySelector('[data-role="quick-role"]')?.addEventListener("change",async I=>{if(!e.switchDemoRole)return;const S=I.currentTarget.value;t=await e.switchDemoRole(S),await g()});const d=i.querySelector('[data-role="main-stage"]');d&&await u(d)}window.addEventListener("hashchange",()=>{const c=X();c!==s&&(s=c,g())}),await g()}const ge=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,be='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',fe='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',q='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>',Q={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},he={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function ye(i){const e=i.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:i}function C(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function J(i,e,o){i.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,t=!1,s="",v="",$="",u="",g=!1,c={},w="",d=!1,I="",S=0,A=null,p=null,E="privacy",x="",P="",O="";const B=e.mode==="demo"&&typeof e.switchDemoRole=="function";function R(){A!==null&&(window.clearInterval(A),A=null),i.classList.remove("bare-login")}function _(){S=60,A!==null&&window.clearInterval(A),A=window.setInterval(()=>{S-=1,S<=0&&(S=0,A!==null&&(window.clearInterval(A),A=null));const L=i.querySelector('[data-act="send-sms"]');L&&(L.disabled=S>0,L.textContent=S>0?`${S} 秒后重发`:I?"重新获取":"获取验证码")},1e3)}function W(){if(!p)return"";if(p==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${q}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${C(P)}" />
                  </div>
                </div>
                ${O?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${C(O)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(p==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${q}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${B?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${B?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(p==="legal"){const L=Q[E],M=["privacy","terms","service"].map(T=>`<button type="button" role="tab" aria-selected="${E===T}" class="au-legal-tab ${E===T?"is-active":""}" data-act="switch-legal" data-tab="${T}">${Q[T].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${q}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${M}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${L.items.map(T=>`<li>${C(T)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return p==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${q}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${x||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:p==="demoRoles"&&B?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${q}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(F).map(L=>{const M=F[L];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${L}">
                        <div>
                          <b>${C(M.roleLabel)} · ${C(M.displayName)}</b>
                          <small>${C(he[L])}</small>
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
      `:""}function k(){const L=a?`
        <div class="au-field ${c.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${C($)}" aria-invalid="${c.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${S>0?"disabled":""}>
              ${S>0?`${S} 秒后重发`:I?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${C(c.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${I?`验证码已发送至 ${C(ye(I))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${c.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${C(s)}" aria-invalid="${c.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${C(c.id??"")}</p>
        </div>
      `,M=a?`
        <div class="au-field ${c.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${C(u)}" aria-invalid="${c.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${C(c.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${c.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${t?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${C(v)}" aria-invalid="${c.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${t?"隐藏密码":"显示密码"}">
              ${t?fe:be}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${C(c.pwd??"")}</p>
        </div>
      `;i.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${ge}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${d?"disabled":""}>
                  ${L}
                  ${M}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${w?"":"hidden"}>${C(w)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${g?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${d?"disabled":""}>
                    ${d?"正在登录…":"登录"}
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
                ${B?`<div class="au-demo-bar">
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
      ${W()}
    `,U()}function U(){const L=i.querySelector("#au-id"),M=i.querySelector("#au-pwd"),T=i.querySelector("#au-sphone"),D=i.querySelector("#au-scode"),z=i.querySelector('input[name="keep"]');L?.addEventListener("input",()=>{if(s=L.value,c.id||w){delete c.id,w="",L.closest(".au-field")?.classList.remove("bad");const n=i.querySelector("#au-id-err");n&&(n.textContent="");const r=i.querySelector("#au-login-ferr");r&&(r.hidden=!0)}}),M?.addEventListener("input",()=>{if(v=M.value,c.pwd||w){delete c.pwd,w="",M.closest(".au-field")?.classList.remove("bad");const n=i.querySelector("#au-pwd-err");n&&(n.textContent="");const r=i.querySelector("#au-login-ferr");r&&(r.hidden=!0)}}),T?.addEventListener("input",()=>{if($=T.value,c.sphone||w){delete c.sphone,w="",T.closest(".au-field")?.classList.remove("bad");const n=i.querySelector("#au-sphone-err");n&&(n.textContent="");const r=i.querySelector("#au-login-ferr");r&&(r.hidden=!0)}}),D?.addEventListener("input",()=>{if(u=D.value.replace(/\D/g,"").slice(0,6),D.value=u,c.scode||w){delete c.scode,w="",D.closest(".au-field")?.classList.remove("bad");const n=i.querySelector("#au-scode-err");n&&(n.textContent="");const r=i.querySelector("#au-login-ferr");r&&(r.hidden=!0)}}),z?.addEventListener("change",()=>{g=z.checked}),i.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{t=!t,k(),i.querySelector("#au-pwd")?.focus()}),i.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,c={},w="",k(),i.querySelector(a?"#au-sphone":"#au-id")?.focus()}),i.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const n=$.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(n)){c={sphone:"请输入有效的手机号码"},k(),i.querySelector("#au-sphone")?.focus();return}c={},I=n,_(),k(),i.querySelector("#au-scode")?.focus()}),i.querySelector('form[data-form="login"]')?.addEventListener("submit",async n=>{if(n.preventDefault(),!d){if(c={},w="",a?($.trim()||(c.sphone="请输入手机号码"),/^\d{6}$/.test(u.trim())||(c.scode="请输入 6 位验证码")):(s.trim()||(c.id="请输入电子邮箱或手机号码"),v||(c.pwd="请输入密码")),Object.keys(c).length>0){k();const r=Object.keys(c)[0];i.querySelector(`#au-${r}`)?.focus();return}d=!0,k();try{const r=await e.login({account:(a?$:s).trim(),password:a?u.trim():v});R(),o(r)}catch(r){d=!1,w=r instanceof Error?r.message:"账户或密码不正确",k()}}}),i.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{P=s.trim(),O="",p="reset",k(),i.querySelector("#au-rs-id")?.focus()}),i.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{p="register",k()}),i.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{p="legal",k()}),i.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{x="",p="contact",k()}),i.querySelectorAll('[data-act="open-demo-roles"]').forEach(n=>{n.addEventListener("click",()=>{p="demoRoles",k()})}),i.querySelectorAll('[data-act="close-modal"]').forEach(n=>{n.addEventListener("click",()=>{p=null,k()})}),i.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",n=>{n.target===n.currentTarget&&(p=null,k())}),i.querySelectorAll('[data-act="switch-legal"]').forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.tab;r&&(E=r,k())})}),i.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),x="已复制"}catch{x="support@pacom.cn"}k()}),i.querySelector("#au-reset-form")?.addEventListener("submit",n=>{n.preventDefault(),P=i.querySelector("#au-rs-id")?.value.trim()??"",P?B?O="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":O="如账户存在，验证码已发送。":O="请输入电子邮箱或手机号码",k()}),i.querySelectorAll('[data-act="pick-demo-role"]').forEach(n=>{n.addEventListener("click",async()=>{const r=n.dataset.roleId;if(!r||!e.switchDemoRole)return;const b=await e.switchDemoRole(r);R(),o(b)})})}k()}async function $e(){const i=document.getElementById("app");if(i)try{const e=ae(),o=await e.getSession(),a=async t=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await ve(i,e,t,()=>{J(i,e,s=>{a(s)})})};if(!o||window.location.hash==="#login"){J(i,e,t=>{a(t)});return}await a(o)}catch(e){i.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}$e();
//# sourceMappingURL=index-BMd2BRfv.js.map
