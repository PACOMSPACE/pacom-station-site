(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const $ of o.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&s($)}).observe(document,{childList:!0,subtree:!0});function a(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(l){if(l.ep)return;l.ep=!0;const o=a(l);fetch(l.href,o)}})();const i={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},H={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[i.projectId,i.project1Id],allowedBuildingIds:[i.buildingId,i.buildingFId],allowedFloorIds:[i.lockedFloor8Id,i.floorId,i.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[i.projectId],allowedBuildingIds:[i.buildingId,i.buildingFId],allowedFloorIds:[i.lockedFloor8Id,i.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[i.projectId],allowedBuildingIds:[i.buildingId],allowedFloorIds:[i.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[i.projectId],allowedBuildingIds:[i.buildingId],allowedFloorIds:[i.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[i.projectId],allowedBuildingIds:[i.buildingId],allowedFloorIds:[i.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},se="pacom.web.demo.role";class xe{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const e=sessionStorage.getItem(se);e&&H[e]&&(this.activeSession=structuredClone(H[e]));const a=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:i.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:a,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:a,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:i.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:a,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:i.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:a,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:i.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:a,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:a,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:a,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:i.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:a,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:i.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:a,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:a,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:a,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:a},{id:"conn-e7f-dali",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:a},{id:"conn-e7f-modbus",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:i.projectId,floorId:i.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:i.projectId,floorId:i.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:i.projectId,floorId:i.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:i.projectId,floorId:i.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:i.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:i.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:a,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:i.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:a,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:i.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:i.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:i.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:a,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:i.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(H).map((s,l)=>({userId:s.userId,displayName:s.displayName,email:`${s.role.replaceAll("_",".")}@pacom.local`,role:s.role,roleLabel:s.roleLabel,scopeSummary:s.scope.allowedZoneIds?.length?`E栋 7F（${s.scope.allowedZoneIds.length} 个我的区域）`:`${s.scope.allowedProjectIds.length} 项目 / ${s.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:l===0?a:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,a,s,l,o){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:a,endpoint:s,request:o,response:l}),this.traces.length>40&&this.traces.pop()}pushAudit(e,a,s,l){const o=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:o?.displayName??"anonymous",role:o?.role??"member",action:e,target:a,result:s,detail:l})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const a=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(H[a]),sessionStorage.setItem(se,a),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(se),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(H[e]),sessionStorage.setItem(se,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const e=this.requireSession(),a=[{id:i.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:i.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],s=[{id:i.buildingId,projectId:i.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:i.buildingFId,projectId:i.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],l={projects:a.filter(o=>e.scope.allowedProjectIds.includes(o.id)),buildings:s.filter(o=>e.scope.allowedBuildingIds.includes(o.id)),floors:[{id:i.lockedFloor8Id,buildingId:i.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:i.floorId,buildingId:i.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:i.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:i.lockedFloor6Id,buildingId:i.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:i.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:i.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:i.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:i.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:l.projects.length,buildings:l.buildings.length,floors:l.floors.length}),l}async getFloorDevices(e){const a=this.requireSession();if(!a.scope.allowedFloorIds.includes(e)){const l={code:"FORBIDDEN",status:403,message:`当前角色「${a.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,l),this.pushAudit("floor.read",e,"denied",l.message),new Error(`403 FORBIDDEN: ${l.message}`)}if(e!==i.floorId)return[];let s=structuredClone(this.devices);return a.scope.allowedZoneIds?.length&&(s=s.filter(l=>l.logicalZoneId&&a.scope.allowedZoneIds.includes(l.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:s.length}),s}async dispatchControlBatch(e){const a=this.requireSession();if(!a.scope.canControlDevices||!a.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权下发控制指令`);const s=`batch-e7f-${Date.now().toString(36)}`,l={batchId:s,floorId:e.floorId,createdBy:a.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(o=>({deviceId:o.deviceId,command:o.command,targetValue:o.targetValue,status:"queued"}))};return this.batches.set(s,l),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",l,e),this.pushAudit("control.dispatch",s,"success",`下发 ${e.targets.length} 台设备`),l.receipts.forEach((o,$)=>{const w=this.devices.find(p=>p.id===o.deviceId);setTimeout(()=>{o.status="dispatched",o.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:s,deviceId:o.deviceId,status:"dispatched",at:o.dispatchedAt})},280+$*120),setTimeout(()=>{const p=new Date().toISOString();!w||w.connectivity==="offline"?(o.status="timeout",o.errorCode="GATEWAY_READBACK_TIMEOUT",o.errorMessage="设备离线，网关未收到回读确认",o.verifiedAt=p):(o.status="verified_success",o.observedValue=o.targetValue,o.verifiedAt=p,this.applyObservedTelemetry(w,o.command,o.targetValue,p)),this.emit({type:"control.receipt.updated",batchId:s,deviceId:o.deviceId,status:o.status,observedValue:o.observedValue,at:p})},900+$*220)}),structuredClone(l)}applyObservedTelemetry(e,a,s,l){a==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:s,collectedAt:l,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(s)>0,collectedAt:l,stale:!1})):(a==="lighting.power"||a==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:s,collectedAt:l,stale:!1}:a==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:s,collectedAt:l,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:l,values:{[a]:s}})}async getControlBatch(e){this.requireSession();const a=this.batches.get(e);if(!a)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(a)}async listAlarms(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==i.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,a){const s=this.requireSession();if(!s.scope.canManageAlarms){const o=`角色「${s.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",o),new Error(`403 FORBIDDEN: ${o}`)}const l=this.alarms.find(o=>o.id===e);if(!l)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return l.status="acknowledged",l.acknowledgedAt=new Date().toISOString(),l.acknowledgedBy=s.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,l,{note:a}),this.pushAudit("alarm.acknowledge",e,"success",a),this.emit({type:"alarm.changed",floorId:l.floorId,alarmId:e,status:"acknowledged",at:l.acknowledgedAt}),structuredClone(l)}async listWorkOrders(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==i.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建工单`);const s=new Date().toISOString(),l={id:`wo-e7f-${Date.now().toString(36)}`,projectId:i.projectId,buildingId:i.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:s,updatedAt:s};if(this.workOrders.unshift(l),e.alarmId){const o=this.alarms.find($=>$.id===e.alarmId);o&&(o.workOrderId=l.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",l,e),this.pushAudit("work_order.create",l.id,"success",l.title),structuredClone(l)}async updateWorkOrderStatus(e,a){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权流转工单`);const l=this.workOrders.find(o=>o.id===e);if(!l)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return l.status=a,l.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,l,{status:a}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${a}`),structuredClone(l)}async updateDevicePlanPoint(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑图纸标点`);const s=this.devices.find(l=>l.id===e.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(s.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${s.version}，请刷新后重试`);return s.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},s.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,s,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${s.planPoint.x}, ${s.planPoint.y})`),structuredClone(s)}async updateDeviceHardwareBinding(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改硬件绑定`);const s=this.devices.find(o=>o.id===e.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(s.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${s.version}）`);const l=new Date().toISOString();return s.physicalInstalled=e.physicalInstalled,s.physicalVerifiedAt=e.physicalInstalled?l:null,s.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:l,boundBy:a.displayName},s.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,s,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(s)}async listConnections(e){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权冻结交付批次`);const l=this.devices.filter($=>$.physicalInstalled&&$.hardwareBinding).length,o={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:i.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:l,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:s.displayName,note:a||"例行交付基线冻结"};return this.deliveryBatches.unshift(o),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,o,{note:a}),this.pushAudit("delivery.freeze",o.id,"success",`${l}/${this.devices.length} 已现场核验`),structuredClone(o)}async getAnalysisReport(e,a,s){this.requireSession();const l=a==="today"?1:a==="7d"?7:30,$={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*l)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*l).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(j=>j.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*l).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*l).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*l).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],w=a==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],p={category:e,range:a,scopeId:s,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:$.kpis,unit:$.unit,series:$.base.map((j,S)=>({label:w[S],value:Math.round(j*(e==="energy"||e==="carbon"?l/2+.5:1)),baseline:Math.round(j*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:$.base[3],unit:$.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:$.base[4],unit:$.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:$.base[1],unit:$.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${a}&scopeId=${s}`,{kpis:p.kpis.length}),p}async listScenes(e){return this.requireSession(),structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const s={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(s),this.record("REST","createScene","POST /api/v1/scenes",s,e),this.pushAudit("scene.create",s.id,"success",s.name),structuredClone(s)}async executeScene(e){const a=this.scenes.find(l=>l.id===e);if(!a)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const s=await this.dispatchControlBatch({floorId:a.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:a.actions,reason:`触发场景：${a.name}`});return a.lastExecutedAt=new Date().toISOString(),a.lastBatchId=s.batchId,s}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:i.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,a,s){this.requireSession();const l=s>=this.calendar.nightGuardStart?`下班时间 ${s} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,o=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${a} - ${s}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${a} (-30m) ~ ${s} (+30m)`,conflictWarning:l},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:l}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",o,{workdayStart:a,workdayEnd:s}),o}async saveWorkCalendar(e,a,s,l){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权修改运行日历`);if(this.calendar.version!==l)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(a>=s)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:a,workdayEnd:s,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:a,workdayEnd:s,expectedVersion:l}),this.pushAudit("settings.calendar",i.projectId,"success",`${a}-${s}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,a,s){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权启停运行规则`);const o=this.rules.find($=>$.id===e);if(!o)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(o.version!==s)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${o.version}）`);return o.enabled=a,o.version+=1,o.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,o,{enabled:a,expectedVersion:s}),this.pushAudit("settings.rule_toggle",e,"success",a?"启用":"停用"),structuredClone(o)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,a){const s=this.requireSession();if(s.role!=="org_admin"&&s.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const l=H[a],o={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:a,roleLabel:l.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(o),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",o,{email:e,role:a}),this.pushAudit("org.invite",e,"success",l.roleLabel),structuredClone(o)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,a){return e!==i.floorId?()=>{}:(this.listeners.add(a),()=>{this.listeners.delete(a)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${i.floorId}`,e),this.listeners.forEach(a=>a(e))}}function ke(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new xe}async function Ee(t,e,a,s,l){let o="profile",$=await e.listOrgMembers(),w=await e.listAuditLogs(),p="",j="all",S="all",x="all",F=!1,L=!1,E="";async function u(){[$,w]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),c()}function c(){const P=e.mode==="demo"&&typeof e.switchDemoRole=="function",R=p.trim().toLowerCase(),r=$.filter(b=>j!=="all"&&b.role!==j?!1:R?`${b.displayName} ${b.email} ${b.roleLabel} ${b.scopeSummary}`.toLowerCase().includes(R):!0),n=w.filter(b=>{if(S==="success"&&b.result!=="success"||S==="denied"&&b.result==="success")return!1;if(x!=="all"){const q=`${b.action} ${b.target}`.toLowerCase();if(x==="control"&&!q.includes("control")&&!q.includes("scene")&&!q.includes("控制")||x==="alarm"&&!q.includes("alarm")&&!q.includes("work")&&!q.includes("告警")||x==="deploy"&&!q.includes("deploy")&&!q.includes("plan")&&!q.includes("hardware")&&!q.includes("部署"))return!1}return!0});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">机构与账户设置</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">广州国家实验室</span>
              <span class="pacom-badge pacom-badge--accent">${a.roleLabel}</span>
            </div>
          </div>
        </header>

        ${E?`<div class="pacom-alert-banner">${E}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" aria-label="机构与账户分组">
            <div class="lov-subnav-group">
              <div class="lov-subnav-group-title">工作空间</div>
              <button class="lov-subnav-item" aria-current="${o==="profile"?"true":"false"}" data-atab="profile">
                <span>我的账户与权限</span>
              </button>
              <button class="lov-subnav-item" aria-current="${o==="members"?"true":"false"}" data-atab="members">
                <span>成员与角色</span>
                <span class="pacom-badge pacom-badge--neutral">${$.length}</span>
              </button>
            </div>
            <div class="lov-subnav-group">
              <div class="lov-subnav-group-title">安全与审计</div>
              <button class="lov-subnav-item" aria-current="${o==="audit"?"true":"false"}" data-atab="audit">
                <span>操作审计日志</span>
                <span class="pacom-badge pacom-badge--neutral">${w.length}</span>
              </button>
            </div>
          </nav>

          <div class="lov-subnav-main">
            ${o==="profile"?`
                <section class="lov-section">
                  <h2 class="lov-section-title">个人资料与授权摘要</h2>
                  <div class="lov-settings-card">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">当前登录账号</span>
                        <span class="lov-setting-desc">${a.displayName}（${a.userId}）· 广州国家实验室</span>
                      </div>
                      <div class="lov-setting-control">
                        <span class="pacom-badge pacom-badge--online">${a.roleLabel}</span>
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">楼层与操作权限</span>
                        <span class="lov-setting-desc">
                          已授权楼层 ${a.scope.allowedFloorIds.length} 层 · 设备控制：${a.scope.canControlDevices?"允许":"只读"} · 部署编辑：${a.scope.canEditDeployment?"允许":"只读"}
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                ${P?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(H).map(b=>{const q=H[b];return`
                              <button class="pacom-role-card ${b===a.role?"is-active":""}" data-switch-role="${b}">
                                <strong style="font-weight:500;">${q.roleLabel}</strong>
                                <span class="pacom-row-sub">${q.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${q.scope.allowedFloorIds.length} 层 · 部署编辑：${q.scope.canEditDeployment?"是":"否"}</span>
                              </button>`}).join("")}
                      </div>
                    </section>`:""}

                <section class="lov-section">
                  <h2 class="lov-section-title">会话 RBAC 联调契约</h2>
                  <div class="lov-snippet-card">
                    <div class="lov-snippet-head">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${L?"已复制":"复制 JSON"}</button>
                    </div>
                    <div style="padding:12px 16px;">
                      <pre class="pacom-code">${JSON.stringify(a,null,2)}</pre>
                    </div>
                  </div>
                </section>

                <section class="lov-section">
                  <h2 class="lov-section-title">会话安全</h2>
                  <div class="lov-settings-card">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">退出当前账号</span>
                        <span class="lov-setting-desc">退出后将清除本机登录态并返回 PACOM Station 登录页</span>
                      </div>
                      <div class="lov-setting-control">
                        <button class="pacom-btn pacom-btn--danger" data-role="logout-btn">退出登录</button>
                      </div>
                    </div>
                  </div>
                </section>`:o==="members"?`
                  ${F?`
                      <section class="lov-section">
                        <h2 class="lov-section-title">邀请新成员</h2>
                        <form class="lov-settings-card" data-role="invite-form">
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">成员邮箱与角色</span>
                              <span class="lov-setting-desc">受邀成员将按角色获得对应项目与楼层的默认授权范围</span>
                            </div>
                            <div class="lov-setting-control" style="flex-wrap:wrap;">
                              <input class="pacom-input" style="width:220px;" name="email" type="email" placeholder="colleague@pacom.local" required />
                              <select class="pacom-select" name="role">
                                ${Object.keys(H).map(b=>`<option value="${b}">${H[b].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">机构成员目录</h2>
                      <span class="pacom-row-sub">共 ${r.length} 人</span>
                    </div>
                    <div class="lov-table-card">
                      <div class="lov-table-toolbar">
                        <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                          <input class="pacom-input" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${p}" />
                          <select class="pacom-select" data-role-filter>
                            <option value="all" ${j==="all"?"selected":""}>全部角色</option>
                            ${Object.keys(H).map(b=>`<option value="${b}" ${j===b?"selected":""}>${H[b].roleLabel}</option>`).join("")}
                          </select>
                        </div>
                        <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                          ${F?"收起邀请":"+ 邀请成员"}
                        </button>
                      </div>
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>成员</th>
                              <th>角色</th>
                              <th>授权范围</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${r.map(b=>`
                                <tr>
                                  <td>
                                    <div style="display:flex; align-items:center; gap:10px;">
                                      <span class="pacom-pop-avatar">${b.displayName.slice(0,1)}</span>
                                      <div>
                                        <div style="font-weight:500;">${b.displayName}</div>
                                        <div class="pacom-row-sub">${b.email}</div>
                                      </div>
                                    </div>
                                  </td>
                                  <td><span class="pacom-badge pacom-badge--neutral">${b.roleLabel}</span></td>
                                  <td><span class="pacom-row-sub">${b.scopeSummary}</span></td>
                                  <td>
                                    <span class="pacom-badge ${b.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">
                                      ${b.status==="active"?"正常":b.status}
                                    </span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">操作与权限拦截审计日志</h2>
                      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                        <select class="pacom-select" data-audit-cat aria-label="按行为类别筛选">
                          <option value="all" ${x==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${x==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${x==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${x==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${S==="all"}" data-audit-filter="all">全部（${w.length}）</button>
                          <button class="pacom-tab" aria-selected="${S==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${S==="denied"}" data-audit-filter="denied">已拦截</button>
                        </div>
                      </div>
                    </div>
                    <div class="lov-table-card">
                      <div class="lov-table-wrap">
                        <table class="lov-table">
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
                            ${n.map(b=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${b.action}</div>
                                    ${b.detail?`<div class="pacom-row-sub">${b.detail}</div>`:""}
                                  </td>
                                  <td><code style="font-size:12px;">${b.target}</code></td>
                                  <td>${b.actor}</td>
                                  <td><span class="pacom-row-sub">${b.at.slice(0,19).replace("T"," ")}</span></td>
                                  <td>
                                    <span class="pacom-badge ${b.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                                      ${b.result==="success"?"成功":b.result}
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
    `,t.querySelectorAll("[data-atab]").forEach(b=>{b.addEventListener("click",()=>{o=b.dataset.atab,E="",c()})}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",l()}),t.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(a,null,2)),L=!0,c(),window.setTimeout(()=>{L=!1,c()},1600)}catch{}}),t.querySelectorAll("[data-switch-role]").forEach(b=>{b.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const q=await e.switchDemoRole(b.dataset.switchRole);s(q)})}),t.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{F=!F,c()}),t.querySelector("[data-member-search]")?.addEventListener("input",b=>{const q=b.currentTarget,A=q.selectionStart??q.value.length;p=q.value,c();const C=t.querySelector("[data-member-search]");C&&(C.focus(),C.setSelectionRange(A,A))}),t.querySelector("[data-role-filter]")?.addEventListener("change",b=>{j=b.currentTarget.value,c()}),t.querySelectorAll("[data-audit-filter]").forEach(b=>{b.addEventListener("click",()=>{S=b.dataset.auditFilter??"all",c()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",b=>{x=b.currentTarget.value??"all",c()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async b=>{b.preventDefault(),E="";const q=new FormData(b.currentTarget);try{await e.inviteOrgMember(String(q.get("email")??""),String(q.get("role"))),F=!1,await u()}catch(A){E=A instanceof Error?A.message:String(A),c()}})}c()}const Ae={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Le={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},je={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Ce(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先在「系统部署 → 系统接入」核查边缘网关与 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」查看实时遥测与设备工况，确认后可标记已处置或一键转工单。"}async function Oe(t,e,a){let s=[],l=[],o=[],$="alarms",w="all",p="all",j=!1,S=!1,x="",F=null;const L=new Set,E=new Set,u=new Set;let c="",P="";async function R(){[s,l,o]=await Promise.all([e.listAlarms(i.floorId),e.listWorkOrders(i.floorId),e.getFloorDevices(i.floorId).catch(()=>[])]),n()}function r(T){if(!T)return{name:"楼层通用",zone:"E7F"};const b=o.find(q=>q.id===T);return b?{name:b.name,zone:(b.logicalZoneId?je[b.logicalZoneId]:void 0)??"E7F"}:{name:T,zone:"E7F"}}function n(){const T=s.filter(v=>v.status==="active"&&!E.has(v.id)),b=l.filter(v=>v.status==="open"||v.status==="assigned"||v.status==="in_progress"),q=s.filter(v=>v.status!=="active").length+u.size,A=E.size,C=x.trim().toLowerCase(),V=s.filter(v=>{const d=E.has(v.id);if(w==="snoozed"){if(!d)return!1}else if(w==="active"){if(v.status!=="active"||d)return!1}else if(w==="acknowledged"){if(v.status!=="acknowledged")return!1}else if(d)return!1;if(p!=="all"&&v.severity!==p)return!1;if(!C)return!0;const _=r(v.deviceId);return`${v.title} ${v.message} ${_.name} ${_.zone} ${v.deviceId}`.toLowerCase().includes(C)}),D=new Map;for(const v of V){const d=S?v.deviceId:v.id,_=D.get(d)??[];_.push(v),D.set(d,_)}const N=Array.from(D.values()),Z=l.filter(v=>{if(j&&(v.status==="resolved"||v.status==="closed"))return!1;if(!C)return!0;const d=r(v.deviceId);return`${v.title} ${v.description} ${v.id} ${d.name}`.toLowerCase().includes(C)}),Y=w==="active"?"仅看待处理":w==="acknowledged"?"仅看已确认":w==="snoozed"?"仅看已忽略 24h":"";t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">告警中心</h1>
              <div class="pacom-tabs" role="tablist" aria-label="告警中心视图">
                <button class="pacom-tab" role="tab" aria-selected="${$==="alarms"}" data-main-tab="alarms">
                  实时告警（${s.length-A}）
                </button>
                <button class="pacom-tab" role="tab" aria-selected="${$==="workorders"}" data-main-tab="workorders">
                  运维工单（${l.length}）
                </button>
              </div>
            </div>

            <div class="pacom-header-meta">
              ${$==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${S}" data-toggle-group="1" aria-label="按设备根因归并">
                      <span class="lov-switch-thumb"></span>
                    </button>
                  </label>`:`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>仅看未结工单</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${j}" data-toggle-open-wo="1" aria-label="仅看未结工单">
                      <span class="lov-switch-thumb"></span>
                    </button>
                  </label>`}
              <span class="pacom-badge ${a.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${a.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="lov-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">↻</button>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:4px 0 24px;">
          <div class="lov-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="lov-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${$==="alarms"&&w==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${T.length}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">点击快速筛选待处理</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${$==="workorders"&&j?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${b.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">点击聚焦未结工单</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${$==="alarms"&&w==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已确认 / 闭环</span>
              <div class="lov-kpi-value">${q}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 无复发即计入有效</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="snoozed"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${$==="alarms"&&w==="snoozed"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已忽略 24h</span>
              <div class="lov-kpi-value">${A}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">到期自动恢复监控</span>
            </button>
          </div>

          ${c?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${c}</span></div>`:""}
          ${P?`<div class="pacom-alert-banner">${P}</div>`:""}

          ${$==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" style="max-width:260px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${x}" aria-label="搜索告警" />
                    <select class="pacom-select" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${p==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${p==="critical"?"selected":""}>严重</option>
                      <option value="major" ${p==="major"?"selected":""}>重要</option>
                      <option value="minor" ${p==="minor"?"selected":""}>一般</option>
                    </select>
                    ${Y?`<button type="button" class="pacom-btn pacom-btn--ghost" data-clear-kpi="1">${Y} ×</button>`:""}
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${L.size>0&&a.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${L.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${N.length} 项</span>
                  </div>
                </div>
                ${N.length===0?'<div class="lov-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可点击上方 KPI 卡片或清空筛选查看全部记录。</span></div>':`
                    <div class="lov-table-wrap">
                      <table class="lov-table">
                        <thead>
                          <tr>
                            <th style="width:36px;"></th>
                            <th>级别</th>
                            <th>告警事项</th>
                            <th>设备与空间</th>
                            <th>触发时间</th>
                            <th>状态</th>
                            <th style="text-align:right;">操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${N.map(v=>{const d=v[0],_=Le[d.severity]??{label:d.severity,cls:"pacom-badge--neutral"},K=r(d.deviceId),ae=F===d.id,ee=E.has(d.id),le=L.has(d.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" data-check-alarm="${d.id}" ${le?"checked":""} ${d.status!=="active"||ee?"disabled":""} aria-label="选择 ${d.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${_.cls}">${_.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                      <span>${d.title}</span>
                                      ${v.length>1?`<span class="pacom-badge pacom-badge--accent">归并 ${v.length} 条</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${d.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${K.name}</div>
                                    <div class="pacom-row-sub">${K.zone}</div>
                                  </td>
                                  <td><span class="pacom-row-sub">${d.triggeredAt?d.triggeredAt.slice(5,16).replace("T"," "):"-"}</span></td>
                                  <td>
                                    <span class="pacom-badge ${ee?"pacom-badge--neutral":d.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${ee?"已忽略 24h":d.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${ee?`<button class="pacom-btn" data-unsnooze="${d.id}">恢复监控</button>`:`
                                            ${d.status==="active"?`<button class="pacom-btn" data-mark-actioned="${d.id}" ${a.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${d.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${d.id}" ${a.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${d.id}">${ae?"收起":"详情"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${ae?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="7">
                                        <div style="display:flex; flex-direction:column; gap:10px;">
                                          <div style="font-size:13px; color:var(--pacom-text-body);">
                                            <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${Ce(d)}
                                          </div>
                                          <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                                            <div class="pacom-row-sub">
                                              告警编号 <code>${d.id}</code> · 设备编号 <code>${d.deviceId}</code> · 关联工单 ${d.workOrderId??"无"}
                                            </div>
                                            <div style="display:flex; gap:8px; align-items:center;">
                                              ${!ee&&d.status==="active"?`<button class="pacom-btn" data-snooze="${d.id}">忽略 24h</button>`:""}
                                              <button class="pacom-btn" data-locate-home="1">定位到空间总览 →</button>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>`:""}`}).join("")}
                        </tbody>
                      </table>
                    </div>`}
              </section>`:`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                    <input class="pacom-input" style="max-width:280px;" data-alarm-search placeholder="搜索工单标题、设备或编号…" value="${x}" aria-label="搜索工单" />
                  </div>
                  <span class="pacom-row-sub">共 ${Z.length} 条工单</span>
                </div>
                ${Z.length===0?'<div class="lov-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
                    <div class="lov-table-wrap">
                      <table class="lov-table">
                        <thead>
                          <tr>
                            <th>工单事项</th>
                            <th>关联设备与空间</th>
                            <th>创建时间</th>
                            <th style="text-align:right;">状态流转</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${Z.map(v=>{const d=r(v.deviceId);return`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${v.title}</div>
                                    <div class="pacom-row-sub">${v.description} · <code>${v.id}</code></div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${d.name}</div>
                                    <div class="pacom-row-sub">${d.zone}</div>
                                  </td>
                                  <td><span class="pacom-row-sub">${v.createdAt?v.createdAt.slice(5,16).replace("T"," "):"-"}</span></td>
                                  <td style="text-align:right;">
                                    <select class="pacom-select" data-wo-status="${v.id}" aria-label="更新工单状态">
                                      ${["open","assigned","in_progress","resolved","closed"].map(_=>`<option value="${_}" ${v.status===_?"selected":""}>${Ae[_]}</option>`).join("")}
                                    </select>
                                  </td>
                                </tr>`}).join("")}
                        </tbody>
                      </table>
                    </div>`}
              </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-main-tab]").forEach(v=>{v.addEventListener("click",()=>{$=v.dataset.mainTab??"alarms",c="",n()})}),t.querySelectorAll("[data-kpi-filter]").forEach(v=>{v.addEventListener("click",()=>{const d=v.dataset.kpiFilter;c="",d==="workorders"?($="workorders",j=!j):(d==="active"||d==="acknowledged"||d==="snoozed")&&($="alarms",w=w===d?"all":d),n()})}),t.querySelector("[data-clear-kpi]")?.addEventListener("click",()=>{w="all",n()}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{c="",R()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{S=!S,n()}),t.querySelector("[data-toggle-open-wo]")?.addEventListener("click",()=>{j=!j,n()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",v=>{p=v.currentTarget.value,n()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",v=>{const d=v.currentTarget,_=d.selectionStart??d.value.length;x=d.value,n();const K=t.querySelector("[data-alarm-search]");K&&(K.focus(),K.setSelectionRange(_,_))}),t.querySelectorAll("[data-check-alarm]").forEach(v=>{v.addEventListener("change",()=>{const d=v.dataset.checkAlarm;d&&(v.checked?L.add(d):L.delete(d),n())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{P="";const v=Array.from(L);try{for(const d of v)await e.acknowledgeAlarm(d,"告警中心批量确认"),u.add(d);L.clear(),c=`已批量确认 ${v.length} 条告警，未来 24 小时持续校验无复发。`,await R()}catch(d){P=d instanceof Error?d.message:String(d),n()}}),t.querySelectorAll("[data-expand-alarm]").forEach(v=>{v.addEventListener("click",()=>{const d=v.dataset.expandAlarm??null;F=F===d?null:d,n()})}),t.querySelectorAll("[data-locate-home]").forEach(v=>{v.addEventListener("click",()=>{window.location.hash="#home"})}),t.querySelectorAll("[data-snooze]").forEach(v=>{v.addEventListener("click",()=>{const d=v.dataset.snooze;d&&(E.add(d),L.delete(d),c="已将该告警限时忽略 24 小时，可在上方「已忽略 24h」磁贴中随时恢复。",n())})}),t.querySelectorAll("[data-unsnooze]").forEach(v=>{v.addEventListener("click",()=>{const d=v.dataset.unsnooze;d&&(E.delete(d),c="已恢复该告警的实时监控。",n())})}),t.querySelectorAll("[data-mark-actioned]").forEach(v=>{v.addEventListener("click",async()=>{P="";const d=v.dataset.markActioned;try{await e.acknowledgeAlarm(d,"现场自处理完成（Mark Actioned）"),u.add(d),L.delete(d),c="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await R()}catch(_){P=_ instanceof Error?_.message:String(_),n()}})}),t.querySelectorAll("[data-to-wo]").forEach(v=>{v.addEventListener("click",async()=>{P="";const d=s.find(_=>_.id===v.dataset.toWo);if(d)try{await e.createWorkOrder({floorId:d.floorId,deviceId:d.deviceId,alarmId:d.id,title:`处置告警：${d.title}`,description:d.message}),c=`已将「${d.title}」转为运维工单。`,await R()}catch(_){P=_ instanceof Error?_.message:String(_),n()}})}),t.querySelectorAll("[data-wo-status]").forEach(v=>{v.addEventListener("change",async()=>{P="";try{await e.updateWorkOrderStatus(v.dataset.woStatus,v.value),c="工单状态已更新并写入审计日志。",await R()}catch(d){P=d instanceof Error?d.message:String(d),await R()}})})}await R()}const oe=[{id:"energy",label:"能源",desc:"分项能耗与峰谷负荷趋势"},{id:"environment",label:"环境",desc:"温湿度、CO₂ 与洁净室舒适度"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与异常分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能基线对比"}],ne=[{id:i.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:i.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:i.projectId,label:"广实2号园（全园区）",factor:18.2}],De={energy:{title:"分项能耗构成与节能估算",summary:"较目标基线节省约 ¥ 1,420 / 月，主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"舒适度达标构成",summary:"全天温湿度综合达标率 96.2%，CO₂ 浓度全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"CO₂ 优良时段（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}};function Fe(t){const e=Math.max(...t.series.map(x=>Math.max(x.value,x.baseline??0)),1),a=46,s=34,l=36,o=Math.max(t.series.length*(a+s)+l*2,620),$=220,w=178,p=138,j=[0,.25,.5,.75,1].map(x=>{const F=Math.round(w-x*p);return`<line x1="${l-8}" y1="${F}" x2="${o-18}" y2="${F}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${x===0?"0":"3 3"}" />`}).join(""),S=t.series.map((x,F)=>{const L=l+F*(a+s),E=Math.max(8,Math.round(x.value/e*p)),u=w-E,c=typeof x.baseline=="number"&&x.value>x.baseline*1.08,P=c?`<rect x="${L-8}" y="28" width="${a+16}" height="${w-28}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",R=typeof x.baseline=="number"?`<line x1="${L-5}" y1="${Math.round(w-x.baseline/e*p)}" x2="${L+a+5}" y2="${Math.round(w-x.baseline/e*p)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"";return`
        ${P}
        ${R}
        <rect x="${L}" y="${u}" width="${a}" height="${E}" rx="7" fill="${c?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        <text x="${L+a/2}" y="${u-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${x.value}</text>
        <text x="${L+a/2}" y="${w+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${x.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${o} ${$}" style="width:100%; height:228px; display:block;" role="img" aria-label="${t.category} 趋势图">
      ${j}
      ${S}
    </svg>
  `}function Te(t){const e=[["时段",`数值 (${t.unit})`,`基线 (${t.unit})`].join(","),...t.series.map(o=>[o.label,String(o.value),o.baseline!==void 0?String(o.baseline):""].join(","))],a=new Blob([`\uFEFF${e.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(a),l=document.createElement("a");l.href=s,l.download=`pacom-${t.category}-${t.range}.csv`,l.click(),URL.revokeObjectURL(s)}async function Me(t,e,a){let s="energy",l="7d",o=i.floorId,$="chart",w=!1,p=null;async function j(){p=await e.getAnalysisReport(s,l,i.floorId),S()}function S(){if(!p)return;const x=oe.find(c=>c.id===s)??oe[0],F=ne.find(c=>c.id===o)??ne[0],L=p.zoneBreakdown.filter(c=>c.status==="warning"),E=De[s],u=Math.max(...p.zoneBreakdown.map(c=>c.value),1);t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
              <h1 class="pacom-title">数据分析</h1>
              <div class="pacom-scope-pill" style="width:260px;" title="切换统计空间范围">
                <select data-scope-select aria-label="选择统计空间范围">
                  ${ne.map(c=>`<option value="${c.id}" ${c.id===o?"selected":""}>${c.label}</option>`).join("")}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>
            </div>
            <div class="pacom-header-meta">
              <div class="pacom-tabs" role="group" aria-label="时间范围">
                <button class="pacom-tab" aria-selected="${l==="today"}" data-range="today">今日</button>
                <button class="pacom-tab" aria-selected="${l==="7d"}" data-range="7d">近 7 天</button>
                <button class="pacom-tab" aria-selected="${l==="30d"}" data-range="30d">近 30 天</button>
              </div>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              <button class="pacom-btn ${w?"pacom-btn--primary":""}" data-toggle-canvas="1">${w?"关闭空间对照":"空间对照"}</button>
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist" aria-label="分析维度">
              ${oe.map(c=>`<button class="pacom-tab" role="tab" aria-selected="${s===c.id}" data-cat="${c.id}">${c.label}</button>`).join("")}
            </div>
            <span class="pacom-row-sub">口径：${F.label} · 更新于 ${p.updatedAt.slice(5,16).replace("T"," ")}</span>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:4px 0 28px;">
          <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
            ${p.kpis.map(c=>`
                <div class="lov-kpi-cell">
                  <span class="lov-kpi-label">${c.label}</span>
                  <div class="lov-kpi-value">
                    <span>${c.value}</span>
                    ${c.unit?`<span class="lov-kpi-unit">${c.unit}</span>`:""}
                  </div>
                  <span class="lov-kpi-delta">${c.delta??"与基线持平"}</span>
                </div>`).join("")}
          </div>

          <section class="lov-section">
            <div class="lov-section-head">
              <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                <h2 class="lov-section-title">${x?.label??"趋势"}趋势（${p.unit}）</h2>
                <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
              </div>
              <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                <span class="pacom-row-sub">虚线为目标基线 · 浅红阴影为超基线异常段</span>
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${$==="chart"}" data-chart-mode="chart">趋势图</button>
                  <button class="pacom-tab" aria-selected="${$==="table"}" data-chart-mode="table">明细原表</button>
                </div>
              </div>
            </div>

            <div class="pacom-card" style="gap:16px;">
              ${$==="chart"?Fe(p):`
                  <div class="lov-table-wrap">
                    <table class="lov-table">
                      <thead>
                        <tr>
                          <th>统计时段</th>
                          <th>实测值（${p.unit}）</th>
                          <th>基线参考</th>
                          <th>状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${p.series.map(c=>{const P=typeof c.baseline=="number"&&c.value>c.baseline*1.08;return`
                              <tr>
                                <td><strong>${c.label}</strong></td>
                                <td>${c.value}</td>
                                <td>${c.baseline??"-"}</td>
                                <td><span class="pacom-badge ${P?"pacom-badge--warning":"pacom-badge--online"}">${P?"超基线":"正常"}</span></td>
                              </tr>`}).join("")}
                      </tbody>
                    </table>
                  </div>`}
              <div class="lov-banner">
                <div class="lov-banner-text">
                  <span class="lov-banner-title">${x?.desc??"空间运行洞察"}</span>
                  <span class="lov-banner-sub">
                    ${L.length>0?`当前有 ${L.length} 个功能区指标偏高（${L.map(c=>c.zoneName).join("、")}），建议前往智能策略优化启停时段。`:E.summary}
                  </span>
                </div>
                <button class="pacom-btn" data-go-strategy="1">去智能策略优化 →</button>
              </div>
            </div>
          </section>

          <div class="lov-grid-2">
            <section class="lov-section">
              <div class="lov-section-head">
                <h2 class="lov-section-title">功能区排行对比</h2>
                <span class="pacom-row-sub">${p.zoneBreakdown.length} 个功能区</span>
              </div>
              <div class="lov-table-card">
                <div class="lov-table-wrap">
                  <table class="lov-table">
                    <thead>
                      <tr>
                        <th>功能区</th>
                        <th>占比分布</th>
                        <th>当前值</th>
                        <th>状态</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${p.zoneBreakdown.map(c=>{const P=Math.max(8,Math.round(c.value/u*100));return`
                            <tr>
                              <td style="font-weight:500;">${c.zoneName.replace(/^7F\s*/,"")}</td>
                              <td style="width:140px;">
                                <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                  <div style="width:${P}%; height:100%; border-radius:999px; background:${c.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                </div>
                              </td>
                              <td><strong>${c.value}</strong> <span class="pacom-row-sub">${c.unit}</span></td>
                              <td>
                                <span class="pacom-badge ${c.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                  ${c.status==="warning"?"偏高关注":"正常"}
                                </span>
                              </td>
                            </tr>`}).join("")}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section class="lov-section">
              <div class="lov-section-head">
                <h2 class="lov-section-title">${w?"E7F 空间对照预览":E.title}</h2>
                <span class="pacom-row-sub">${w?"与空间总览状态独立":"当前周期结构占比"}</span>
              </div>
              <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                ${w?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':E.items.map(c=>`
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                              <span style="font-weight:500; color:var(--pacom-text-primary);">${c.name}</span>
                              <span class="pacom-row-sub">${c.detail} · <strong style="color:var(--pacom-text-primary);">${c.pct}%</strong></span>
                            </div>
                            <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                              <div style="width:${Math.min(100,c.pct)}%; height:100%; border-radius:999px; background:${c.color};"></div>
                            </div>
                          </div>`).join("")}
              </div>
            </section>
          </div>
        </div>
      </div>
    `,t.querySelectorAll("[data-cat]").forEach(c=>{c.addEventListener("click",()=>{s=c.dataset.cat,j()})}),t.querySelector("[data-scope-select]")?.addEventListener("change",c=>{o=c.currentTarget.value,S()}),t.querySelectorAll("[data-range]").forEach(c=>{c.addEventListener("click",()=>{l=c.dataset.range??"7d",j()})}),t.querySelectorAll("[data-chart-mode]").forEach(c=>{c.addEventListener("click",()=>{$=c.dataset.chartMode??"chart",S()})}),t.querySelector("[data-export-csv]")?.addEventListener("click",()=>{p&&Te(p)}),t.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{w=!w,S()}),t.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"})}await j()}async function qe(t,e,a){let s="floorplan",l=await e.getSpatialTree(),o=[],$=[],w=[],p=null,j=!1,S=null,x="",F="";async function L(){F="";const[u,c,P,R]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(i.floorId).catch(()=>[]),e.listConnections(i.projectId),e.listDeliveryBatches(i.floorId)]);l=u,o=c,$=P,w=R,o.some(r=>r.id===p)||(p=o[0]?.id??null),E()}function E(){const u=o.find(n=>n.id===p)??null,c=a.scope.canEditDeployment,P=$.reduce((n,T)=>n+T.collectedPoints,0),R=$.reduce((n,T)=>n+T.calculatedPoints,0),r=$.filter(n=>n.status==="connected").length;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${c?"pacom-badge--online":"pacom-badge--warning"}">
                ${c?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${s==="floorplan"}" data-dtab="floorplan">图纸标点与四态绑定</button>
              <button class="pacom-tab" role="tab" aria-selected="${s==="topology"}" data-dtab="topology">项目空间拓扑</button>
              <button class="pacom-tab" role="tab" aria-selected="${s==="connections"}" data-dtab="connections">系统接入（${$.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${s==="delivery"}" data-dtab="delivery">交付冻结（${w.length}）</button>
            </div>
          </div>
        </header>

        ${x?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${x}</span></div>`:""}
        ${F?`<div class="pacom-alert-banner">${F}</div>`:""}

        ${s==="floorplan"?`
            <section class="pacom-split">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:380px;">
                <div class="pacom-pane-toolbar">
                  <div style="font-weight:500;">E7F 设备与四态配置（${o.length}）</div>
                  <div class="pacom-row-sub">
                    图上放点仅更新 <code>planPoint</code>，绝不自动改写物理安装态或硬件端口绑定。
                  </div>
                </div>
                <div class="pacom-list">
                  ${o.map(n=>`
                      <div class="pacom-row ${n.id===p?"is-selected":""}" data-pick-dev="${n.id}">
                        <div style="min-width:0;">
                          <div class="pacom-row-title">${n.name}</div>
                          <div class="pacom-row-sub">v${n.version} · ${n.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${n.physicalInstalled?"现场已确认":"待物理复核"}</div>
                        </div>
                        <span class="pacom-badge ${n.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                          ${n.planPoint?`${Math.round(n.planPoint.x*100)}%,${Math.round(n.planPoint.y*100)}%`:"未标点"}
                        </span>
                      </div>`).join("")}
                </div>
                ${u?`
                    <form data-role="binding-form" style="padding:14px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); background:var(--pacom-surface-primary); display:flex; flex-direction:column; gap:10px;">
                      <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核</span>
                        <span class="pacom-badge pacom-badge--neutral">${u.id}</span>
                      </div>
                      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <select class="pacom-select" name="protocol">
                          ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(n=>`<option value="${n}" ${u.hardwareBinding?.protocol===n?"selected":""}>${n.toUpperCase()}</option>`).join("")}
                        </select>
                        <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${u.hardwareBinding?.networkAddress??""}" />
                      </div>
                      <div style="display:grid; grid-template-columns:1fr auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${u.hardwareBinding?.portOrChannel??""}" />
                        <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; cursor:pointer;">
                          <input type="checkbox" name="physicalInstalled" ${u.physicalInstalled?"checked":""} />
                          现场物理已复核
                        </label>
                      </div>
                      <div style="display:flex; gap:8px; flex-wrap:wrap;">
                        <button class="pacom-btn" type="button" data-toggle-place="1">${j?"取消点图更新":"点图更新坐标"}</button>
                        <button class="pacom-btn" type="button" data-ftt-test="1" title="远程验证指令下发、状态回读并自动恢复工况">单机回读自检</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" style="flex:1;">保存硬件绑定（v${u.version}）</button>
                      </div>
                    </form>`:""}
              </aside>
              <div class="pacom-splitter"></div>
              <main class="pacom-right-pane">
                <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${j?"crosshair":"default"};">
                  <div class="pacom-canvas-viewport">
                    <div class="pacom-plan-wrap" data-role="deploy-plan">
                      <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                      ${o.filter(n=>n.planPoint).map(n=>`
                          <button class="pacom-pin ${n.id===p?"is-selected":""} ${n.connectivity==="offline"?"pacom-pin--offline":""}"
                            style="left:${(n.planPoint.x*100).toFixed(2)}%; top:${(n.planPoint.y*100).toFixed(2)}%;"
                            data-pick-dev="${n.id}">
                            <span>${n.name.slice(0,7)}</span>
                          </button>`).join("")}
                    </div>
                  </div>
                  ${j&&u?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${u.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                </div>
              </main>
            </section>`:s==="topology"?`
              <div class="pacom-content-page" style="padding:4px 0 24px;">
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">项目 → 楼宇 → 楼层归属拓扑</h2>
                    <span class="pacom-row-sub">共 ${l.projects.length} 个项目 · ${l.buildings.length} 栋楼宇</span>
                  </div>
                  <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:14px;">
                    ${l.projects.map(n=>{const T=l.buildings.filter(b=>b.projectId===n.id);return`
                          <div class="pacom-card" style="padding:16px; gap:10px;">
                            <img src="${n.imageUrl??"./media/gzlab.jpg"}" alt="${n.name}" style="width:100%; height:128px; object-fit:cover; border-radius:10px;" />
                            <div>
                              <strong style="font-size:15px; font-weight:500;">${n.name}</strong>
                              <div class="pacom-row-sub">${n.city??""} ${n.address??""} · ${T.length} 栋授权楼宇</div>
                            </div>
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              ${T.map(b=>`
                                  <div class="pacom-receipt-item">
                                    <span><strong>${b.name}</strong> · 地上 ${b.aboveFloors}F / ${b.areaSqm??"-"} m²</span>
                                    <span class="pacom-badge ${b.id===i.buildingId?"pacom-badge--accent":"pacom-badge--neutral"}">${b.id===i.buildingId?"含 E7F":"对照"}</span>
                                  </div>`).join("")}
                            </div>
                          </div>`}).join("")}
                  </div>
                </section>
              </div>`:s==="connections"?`
                <div class="pacom-content-page" style="padding:4px 0 24px;">
                  <div class="lov-kpi-strip">
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">已连通通道</span>
                      <div class="lov-kpi-value">${r}<span class="lov-kpi-unit">/ ${$.length}</span></div>
                      <span class="lov-kpi-delta">边缘网关在线监控</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">数据采集健康度</span>
                      <div class="lov-kpi-value">${$.length>0?Math.round(r/$.length*100):100}<span class="lov-kpi-unit">%</span></div>
                      <span class="lov-kpi-delta">区分设备真故障与断流</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">原始采集点</span>
                      <div class="lov-kpi-value">${P}<span class="lov-kpi-unit">点</span></div>
                      <span class="lov-kpi-delta">协议直采实时遥测</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">衍生计算点</span>
                      <div class="lov-kpi-value">${R}<span class="lov-kpi-unit">点</span></div>
                      <span class="lov-kpi-delta">能碳与聚合虚拟点位</span>
                    </div>
                  </div>

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">边缘网关与协议接入清单</h2>
                      <span class="pacom-row-sub">采集点与计算点独立计数</span>
                    </div>
                    <div class="lov-table-card">
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>通道名称</th>
                              <th>协议</th>
                              <th>接入端点</th>
                              <th>点位规模</th>
                              <th>连通状态</th>
                              <th style="text-align:right;">操作</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${$.map(n=>`
                                <tr>
                                  <td><strong>${n.name}</strong></td>
                                  <td><span class="pacom-badge pacom-badge--neutral">${n.protocol.toUpperCase()}</span></td>
                                  <td><code style="font-size:12px;">${n.endpoint}</code></td>
                                  <td>采集 ${n.collectedPoints} / 计算 ${n.calculatedPoints}</td>
                                  <td>
                                    <span class="pacom-badge ${n.status==="connected"?"pacom-badge--online":"pacom-badge--warning"}">
                                      ${n.status==="connected"?"已连通":n.status}
                                    </span>
                                  </td>
                                  <td style="text-align:right;">
                                    <button class="pacom-btn pacom-btn--ghost" data-copy-endpoint="${n.id}" data-endpoint-val="${n.endpoint}">
                                      ${S===n.id?"已复制":"复制端点"}
                                    </button>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>`:`
                <div class="pacom-content-page" style="padding:4px 0 24px;">
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">E7F 交付冻结批次</h2>
                      <button class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${c?"":"disabled"}>+ 新建交付冻结快照</button>
                    </div>
                    <div class="lov-table-card">
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>版本标签</th>
                              <th>现场核验进度</th>
                              <th>冻结人与备注</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${w.map(n=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${n.versionTag}</div>
                                    <div class="pacom-row-sub"><code>${n.id}</code></div>
                                  </td>
                                  <td><strong>${n.verifiedCount}</strong> / ${n.deviceCount} 台设备</td>
                                  <td>
                                    <div>${n.frozenBy}</div>
                                    <div class="pacom-row-sub">${n.note??"-"}</div>
                                  </td>
                                  <td><span class="pacom-badge pacom-badge--accent">${n.status}</span></td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>`}
      </div>
    `,t.querySelectorAll("[data-dtab]").forEach(n=>{n.addEventListener("click",()=>{s=n.dataset.dtab,x="",F="",E()})}),t.querySelectorAll("[data-pick-dev]").forEach(n=>{n.addEventListener("click",()=>{p=n.dataset.pickDev??null,E()})}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{j=!j,E()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{u&&(F="",u.connectivity==="offline"?F=`单机回读自检未通过：「${u.name}」当前离线，请先检查网关 ${u.hardwareBinding?.networkAddress??"-"} 通信状态。`:x=`单机回读自检通过（PASS）：「${u.name}」指令下发 → 状态回读一致 → 已安全自动恢复原工况。`,E())}),t.querySelectorAll("[data-copy-endpoint]").forEach(n=>{n.addEventListener("click",async()=>{const T=n.dataset.endpointVal??"",b=n.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(T),S=b,E(),window.setTimeout(()=>{S=null,E()},1600)}catch{}})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async n=>{if(!j||!u)return;const T=n.currentTarget.getBoundingClientRect(),b=Math.max(.02,Math.min(.98,(n.clientX-T.left)/T.width)),q=Math.max(.02,Math.min(.98,(n.clientY-T.top)/T.height));try{await e.updateDevicePlanPoint({deviceId:u.id,floorId:i.floorId,planVersion:u.planPoint?.planVersion??1,x:b,y:q,expectedVersion:u.version}),j=!1,x=`已更新「${u.name}」图上坐标（硬件绑定与物理安装态保持不变）`,await L()}catch(A){F=A instanceof Error?A.message:String(A),E()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async n=>{if(n.preventDefault(),!u)return;const T=new FormData(n.currentTarget);try{await e.updateDeviceHardwareBinding({deviceId:u.id,gatewayId:u.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(T.get("protocol")),networkAddress:String(T.get("networkAddress")??""),portOrChannel:String(T.get("portOrChannel")??""),physicalInstalled:T.get("physicalInstalled")==="on",expectedVersion:u.version}),x=`已保存「${u.name}」的硬件绑定与物理安装状态`,await L()}catch(b){F=b instanceof Error?b.message:String(b),E()}}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const n=await e.freezeDeliveryBatch(i.floorId,"前端系统部署发起冻结");x=`已生成冻结批次 ${n.versionTag}（核验 ${n.verifiedCount}/${n.deviceCount}）`,await L()}catch(n){F=n instanceof Error?n.message:String(n),E()}})}await L()}function ze(t){if(t.connectivity==="offline")return`${t.name.includes("VAV")?"VAV-02":t.name.slice(0,6)} 离线`;if(t.category==="lighting"){const e=t.name.includes("702")?"702 照明":"主照明",a=Number(t.telemetry.dimming?.value??0);return a>0?`${e} ${a}%`:`${e} 关`}return t.category==="hvac"?`${t.name.includes("VAV")?"VAV-02":"FCU-01"} ${t.telemetry.setpoint?.value??24}°C`:t.category==="sensor"?`环境 ${t.telemetry.temp?.value??"23.4"}°C`:t.category==="gateway"?"主控网关":t.name.slice(0,6)}const ie="pacom.web.e7f.leftWidth",pe={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},Pe={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},Be={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:42,top:42,width:14,height:22}};function f(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Re(t){return t.level==="all-projects"?"all":t.level==="project"?`project:${t.projectId}`:t.level==="building"?`building:${t.projectId}:${t.buildingId}`:`floor:${t.projectId}:${t.buildingId}:${t.floorId}`}async function _e(t,e,a){const s=await e.getSpatialTree(),l=e.mode==="demo",o=a.scope.canControlDevices,$=a.scope.canManageAlarms,w=a.scope.allowedZoneIds?.length?a.scope.allowedZoneIds:null;let p={level:"floor",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId},j="devices",S="canvas",x="",F="all",L="all",E=null,u=!1,c="devices";const P=new Set,R=new Set;let r=[],n=[],T=[],b=null,q=null,A=1,C=0,V=0,D=Number(localStorage.getItem(ie)||400);(!Number.isFinite(D)||D<320||D>680)&&(D=400);let N=null;function Z(){return s.zones.filter(m=>!(p.level==="floor"&&m.floorId!==p.floorId||w&&!w.includes(m.id)))}async function Y(m){p=m,q=null,L="all",R.clear(),A=1,C=0,V=0,N&&(N(),N=null);const k=p.level==="floor"?p.floorId:i.floorId;if(p.level==="floor")try{const[g,h,I]=await Promise.all([e.getFloorDevices(p.floorId),e.listAlarms(p.floorId),e.listWorkOrders(p.floorId)]);r=g,n=h,T=I,r.some(M=>M.id===E)||(E=r[1]?.id??r[0]?.id??null,u=!1),N=e.subscribeFloorEvents(p.floorId,async M=>{M.type==="control.receipt.updated"&&b?.batchId===M.batchId&&(b=await e.getControlBatch(M.batchId)),(M.type==="telemetry.updated"||M.type==="device.connectivity")&&p.level==="floor"&&(r=await e.getFloorDevices(p.floorId)),M.type==="alarm.changed"&&p.level==="floor"&&(n=await e.listAlarms(p.floorId)),_()})}catch(g){r=[],n=[],T=[],E=null,u=!1,q=g instanceof Error?g.message:String(g)}else{u=!1;const[g,h,I]=await Promise.all([e.getFloorDevices(k).catch(()=>[]),e.listAlarms(k).catch(()=>[]),e.listWorkOrders(k).catch(()=>[])]);r=g,n=h,T=I}G()}function J(m){return m?s.zones.find(k=>k.id===m)?.name??m:"未分配逻辑区"}function v(){const m=x.trim().toLowerCase();return r.filter(k=>L!=="all"&&k.logicalZoneId!==L||F!=="all"&&k.category!==F?!1:m?k.name.toLowerCase().includes(m)||k.id.toLowerCase().includes(m)||J(k.logicalZoneId).toLowerCase().includes(m):!0)}async function d(m,k,g){!m.length||p.level!=="floor"||!o||(m.forEach(h=>P.add(h)),b=await e.dispatchControlBatch({floorId:p.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:m.map(h=>({deviceId:h,command:k,targetValue:g}))}),_())}function _(){const m=document.activeElement,k=m?.dataset?.role,g=m&&"selectionStart"in m?m.selectionStart:null,h=m&&"selectionEnd"in m?m.selectionEnd:null,I=t.querySelector(".pacom-list")?.scrollTop??0;G();const M=t.querySelector(".pacom-list");if(M&&(M.scrollTop=I),k==="search"){const z=t.querySelector('[data-role="search"]');z&&(z.focus(),g!==null&&h!==null&&z.setSelectionRange(g,h))}}function K(){const m=t.querySelector('[data-role="canvas-viewport"]');m&&(m.style.transform=`translate(${C}px, ${V}px) scale(${A})`);const k=t.querySelector('[data-role="canvas-hint"]');k&&(k.textContent=`缩放 ${Math.round(A*100)}% · 滚轮缩放 · 拖动平移 · 双击复位`)}function ae(){return p.level==="floor"?`building:${p.projectId}:${p.buildingId}`:p.level==="building"?`project:${p.projectId}`:p.level==="project"?"all":null}function ee(){const m=Re(p),k=s.projects.map(I=>`<option value="project:${f(I.id)}" ${m===`project:${I.id}`?"selected":""}>项目 · ${f(I.name)}</option>`).join(""),g=s.buildings.map(I=>{const M=`building:${I.projectId}:${I.id}`;return`<option value="${f(M)}" ${m===M?"selected":""}>楼宇 · 广实2号园 / ${f(I.name)}</option>`}).join(""),h=s.floors.map(I=>{const M=a.scope.allowedFloorIds.includes(I.id),z=`floor:${i.projectId}:${I.buildingId}:${I.id}`;return`<option value="${f(z)}" ${m===z?"selected":""}>楼层 · 广实2号园 / E栋 / ${f(I.name)}${M?"":"（未授权）"}</option>`}).join("");return`
      <option value="all" ${m==="all"?"selected":""}>全部项目（${s.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${k}</optgroup>
      <optgroup label="楼宇级">${g}</optgroup>
      <optgroup label="楼层级">${h}</optgroup>
    `}function le(){if(p.level==="all-projects"){const k=r.filter(h=>h.connectivity==="online").length,g=n.filter(h=>h.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${s.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${s.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${k}/${r.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${g} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${s.projects.map(h=>{const I=s.buildings.filter(M=>M.projectId===h.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${f(h.id)}">
                  <img src="${f(h.imageUrl??"./media/gzlab.jpg")}" alt="${f(h.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${f(h.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${I} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${f(h.city??"")} · ${f(h.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const m=p;if(m.level==="project"){const k=s.projects.find(z=>z.id===m.projectId),g=s.buildings.filter(z=>z.projectId===m.projectId),h=r.filter(z=>z.connectivity==="online").length,I=r.length?Math.round(h/r.length*100):100,M=n.filter(z=>z.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${f(k?.name??"园区")} · 楼宇绩效（${g.length}）</div>
          <div class="pacom-row-sub">${f(k?.city??"")} ${f(k?.address??"")}</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">在线率</span><strong>${I}%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:${M>0?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${M} 条</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>1,248 kWh</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${g.map(z=>{const y=z.id===i.buildingId;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${f(z.projectId)}:${f(z.id)}">
                  <img src="${f(z.imageUrl??"./media/building-e.png")}" alt="${f(z.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${f(z.name)}</strong>
                    <span class="pacom-badge ${y?"pacom-badge--online":"pacom-badge--neutral"}">${y?`在线 ${I}% · 告警 ${M}`:"运行平稳"}</span>
                  </div>
                  <div class="pacom-row-sub">地上 ${z.aboveFloors} 层 · 面积 ${z.areaSqm??"-"} m² · 舒适度达标 96%</div>
                </article>`}).join("")}
        </div>
      `}if(m.level==="building"){const k=s.buildings.find(y=>y.id===m.buildingId),g=s.floors.filter(y=>y.buildingId===m.buildingId),h=T.filter(y=>y.status!=="closed"&&y.status!=="resolved"),I=r.filter(y=>y.connectivity==="online").length,M=r.length?Math.round(I/r.length*100):100,z=n.filter(y=>y.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${f(k?.name??"楼宇")} 运行概况</div>
          <div class="pacom-row-sub">地上 ${k?.aboveFloors??0} 层 · 面积 ${k?.areaSqm??"-"} m²</div>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线率</span><strong>${M}%（${I}/${r.length}）</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">舒适度达标</span><strong>96.2%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>418 kWh</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">告警 / 工单</span><strong style="color:var(--pacom-status-warning);">${z} 告警 · ${h.length} 工单</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div style="font-weight:500; font-size:13px;">楼层列表（点击进入 2D 平面控制）</div>
          ${g.length?g.map(y=>{const O=a.scope.allowedFloorIds.includes(y.id),B=y.id===i.floorId;return`
                      <div class="pacom-row" data-nav-scope="floor:${f(m.projectId)}:${f(m.buildingId)}:${f(y.id)}">
                        <div>
                          <div class="pacom-row-title">${f(k?.name??"")} ${f(y.name)}</div>
                          <div class="pacom-row-sub">${y.plan?"2D 平面图就绪":"暂未上传图纸"}${B&&z>0?` · ${z} 条待处理告警`:""}</div>
                        </div>
                        <span class="pacom-badge ${O?"pacom-badge--online":"pacom-badge--warning"}">${O?"进入楼层":"无权限"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(j==="devices"){const k=v(),g=Z(),h=Array.from(R);return`
        <div class="pacom-pane-toolbar">
          ${w?`<div class="pacom-info-banner">我的区域视图：仅显示当前账号获授权的 ${w.length} 个功能区及设备。</div>`:""}
          <div class="pacom-search-row">
            <input class="pacom-input" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${f(x)}" aria-label="搜索楼层设备" />
            <select class="pacom-select" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${F==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${F==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${F==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${F==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${F==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          ${g.length>0&&!q?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${L==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${g.map(I=>`<button type="button" class="pacom-zone-pill ${L===I.id?"is-active":""}" data-filter-zone="${f(I.id)}">${f(I.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前可见 ${k.length} 台设备</span>
            <span>${o?`已勾选 ${h.length} 台`:"只读模式"}</span>
          </div>
        </div>
        <div class="pacom-list">
          ${q?`<div class="pacom-alert-banner">${f(q)}</div>`:k.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">没有匹配的设备</div>':k.map(I=>{const M=I.id===E&&u,z=R.has(I.id),y=I.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline",O=I.category==="lighting"?`亮度 ${I.telemetry.dimming?.value??"--"}%`:I.category==="hvac"?`设定 ${I.telemetry.setpoint?.value??"--"}°C`:I.category==="sensor"?`${I.telemetry.temp?.value??"--"}°C · CO₂ ${I.telemetry.co2?.value??"--"}`:I.hardwareBinding?.networkAddress??"未绑定";return`
                        <div class="pacom-row ${M?"is-selected":""}" data-select-device="${f(I.id)}">
                          <div class="pacom-row-main">
                            ${o?`<input type="checkbox" data-check-device="${f(I.id)}" ${z?"checked":""} style="margin-top:3px;" aria-label="勾选 ${f(I.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title">${f(I.name)}</div>
                              <div class="pacom-row-sub">${f(J(I.logicalZoneId))} · ${f(pe[I.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${I.connectivity==="online"?"pacom-badge--online":"pacom-badge--neutral"}">
                            <span class="pacom-dot ${y}"></span>${f(O)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${o&&h.length>0?`
            <div class="pacom-batch-bar">
              <span style="font-size:12px;">显式批量目标：<strong>${h.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(j==="zones"){const k=Z(),g={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">E7F 功能区快控（${k.length}）</div>
          <div class="pacom-row-sub">点击卡片同步高亮右侧平面图热区，支持按区域一键批量控制。</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${k.map(h=>{const I=r.filter(B=>B.logicalZoneId===h.id),M=I.filter(B=>B.connectivity==="online").length,z=I.filter(B=>B.category==="lighting"||B.category==="hvac").length,y=L===h.id,O=g[h.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${y?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${y?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${f(y?"all":h.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:14px; font-weight:500;">${f(h.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${M}/${I.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时温度 ${O.temp} · 占用 ${O.occ}</div>
                  ${z>0?`
                      <div style="display:flex; gap:6px; margin-top:2px;">
                        <button type="button" class="pacom-btn" data-zone-power="${f(h.id)}" data-zone-val="true" ${o?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" data-zone-power="${f(h.id)}" data-zone-val="false" ${o?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">该区域为弱电/网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-pane-toolbar">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:500;">本层告警快览（${n.length}）</span>
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-alarms="1">前往告警中心 →</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:12px;">
        ${n.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前楼层无活跃告警</div>':n.map(k=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${f(k.title)}</strong>
                      <span class="pacom-badge ${k.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${k.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${f(k.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" data-locate-device="${f(k.deviceId)}">定位设备</button>
                      ${k.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" data-ack-alarm="${f(k.id)}" ${$?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function ye(){const m=p,k=r.filter(y=>y.connectivity==="online").length,g=r.length?Math.round(k/r.length*100):100,h=n.filter(y=>y.status==="active").length;if(m.level==="all-projects"||m.level==="project"){const y=m.level==="project"?s.projects.find(B=>B.id===m.projectId):s.projects[0],O=s.buildings.filter(B=>!y||B.projectId===y.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${f(y?.imageUrl??"./media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${m.level==="all-projects"?s.projects.map((B,W)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${W===0?48:26}%; top:${W===0?52:34}%;" data-nav-scope="project:${f(B.id)}">
                        <span class="pacom-dot pacom-dot--online"></span>
                        <span>${f(B.name)}</span>
                      </button>`).join(""):O.map((B,W)=>{const X=B.id===i.buildingId;return`
                        <button type="button" class="pacom-pin ${X?"is-selected":""}" style="left:${W===0?56:38}%; top:${W===0?44:62}%;" data-nav-scope="building:${f(B.projectId)}:${f(B.id)}">
                          <span class="pacom-dot ${X&&h>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                          <span>${f(B.name)} · ${X?`在线 ${g}% · 告警 ${h}`:"运行平稳"}</span>
                        </button>`}).join("")}
          </div>
        </div>
      `}if(m.level==="building"){const y=s.buildings.find(W=>W.id===m.buildingId),O=s.floors.filter(W=>W.buildingId===m.buildingId),B=O.find(W=>W.id===i.floorId)??O[0];return`
        ${O.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button type="button" class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${O.map(W=>`<button type="button" class="pacom-floor-btn ${a.scope.allowedFloorIds.includes(W.id)?"":"is-locked"}" data-nav-scope="floor:${f(m.projectId)}:${f(m.buildingId)}:${f(W.id)}" title="${f(W.name)}">${f(W.name.replace("F",""))}</button>`).join("")}
            </nav>`:""}
        <div class="pacom-canvas-tools" aria-label="画布工具">
          <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
          <div class="pacom-tool-divider" aria-hidden="true"></div>
          <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
          <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
        </div>
        <div class="pacom-canvas-stage" data-role="canvas-stage">
          <div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${C}px, ${V}px) scale(${A});">
            <img class="pacom-plan-img" src="${f(y?.imageUrl??"./media/building-e.png")}" alt="${f(y?.name??"楼宇")} 整栋实景图" />
          </div>
        </div>
        <div class="pacom-canvas-hint" style="pointer-events:auto; display:flex; align-items:center; gap:10px;">
          <span>${f(y?.name??"楼宇")} · 在线 ${g}% · 舒适度 96.2%</span>
          ${B?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:24px; padding:0 10px; font-size:12px;" data-nav-scope="floor:${f(m.projectId)}:${f(m.buildingId)}:${f(B.id)}">进入 ${f(B.name)} 平面图 →</button>`:""}
        </div>
      `}const I=s.floors.find(y=>y.id===m.floorId),M=s.floors.filter(y=>y.buildingId===m.buildingId),z=Z();return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button type="button" class="pacom-floor-btn" data-nav-scope="building:${f(m.projectId)}:${f(m.buildingId)}" title="返回整栋楼宇">栋</button>
        ${M.map(y=>{const O=a.scope.allowedFloorIds.includes(y.id);return`<button type="button" class="pacom-floor-btn ${y.id===m.floorId?"is-active":""} ${O?"":"is-locked"}"
              data-nav-scope="floor:${f(m.projectId)}:${f(m.buildingId)}:${f(y.id)}" title="${f(y.name)}${O?"":"（无权限）"}">
              ${f(y.name.replace("F",""))}
            </button>`}).join("")}
      </nav>

      <div class="pacom-canvas-tools" aria-label="画布工具">
        <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
        <div class="pacom-tool-divider" aria-hidden="true"></div>
        <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
        <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
      </div>

      ${q?"":`
        <div class="lov-layer-bar" role="group" aria-label="平面图图层切换">
          <button type="button" class="lov-layer-btn" aria-pressed="${c==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${c==="temp"}" data-canvas-layer="temp">温度热区</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${c==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${c==="alarms"}" data-canvas-layer="alarms">告警叠加${n.filter(y=>y.status==="active").length>0?` (${n.filter(y=>y.status==="active").length})`:""}</button>
        </div>`}

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${q?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${f(q)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${C}px, ${V}px) scale(${A});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${f(I?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${f(I?.name??"7F")} 平面图" />
                  ${z.map((y,O)=>{const B=Be[y.id];if(!B)return"";const W=L===y.id,X=["23.2°C","24.6°C","22.8°C","23.9°C"],de=["有人 74%","会议中","有人 52%","空闲"],Ie=c==="temp"?` · ${X[O%X.length]}`:c==="occupancy"?` · ${de[O%de.length]}`:"",Se=c==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":c==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${W?"is-active":""}"
                          style="left:${B.left}%; top:${B.top}%; width:${B.width}%; height:${B.height}%; ${W?"":Se}"
                          data-filter-zone="${f(W?"all":y.id)}"
                          title="${f(y.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${f(y.name.replace(/^7F\s*/,""))}${Ie}</span>
                        </button>`}).join("")}
                  ${r.filter(y=>y.planPoint).map(y=>{const O=n.some(X=>X.deviceId===y.id&&X.status==="active"),B=L!=="all"&&y.logicalZoneId!==L||c==="alarms"&&!O,W=c==="alarms"&&O?"background:var(--pacom-status-critical);":"";return`
                        <button type="button" class="pacom-pin ${y.id===E&&u?"is-selected":""} ${y.connectivity==="offline"?"pacom-pin--offline":""} ${B?"pacom-pin--dimmed":""}"
                          style="left:${(y.planPoint.x*100).toFixed(2)}%; top:${(y.planPoint.y*100).toFixed(2)}%; ${W}"
                          data-pin-device="${f(y.id)}" title="${f(y.name)}">
                          <span class="pacom-dot ${O?"pacom-dot--critical":y.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${f(ze(y))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>

      ${q?"":`<div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(A*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>`}
      ${$e()}
    `}function $e(){if(p.level!=="floor"||!u)return"";const m=r.find(y=>y.id===E);if(!m)return"";const k=m.category==="lighting",g=m.category==="hvac",h=Number(m.telemetry.dimming?.value??50),I=Number(m.telemetry.setpoint?.value??24),M=P.has(m.id),z=k?[{label:"当前开关",value:h>0?"开启":"关闭"},{label:"当前亮度",value:`${h}%`},{label:"实时功率",value:h>0?`${Math.round(h*1.4)} W`:"0 W"},{label:"运行模式",value:M?"人工覆盖":"自动策略"}]:g?[{label:"室内温度",value:`${m.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${I.toFixed(1)}°C`},{label:"运行工况",value:m.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:M?"人工覆盖":"自动策略"}]:m.category==="sensor"?[{label:"实时温度",value:`${m.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${m.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${m.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:m.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:m.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:m.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:m.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:m.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${f(m.name)}</h2>
            <div class="pacom-row-sub">${f(J(m.logicalZoneId))} · ${f(pe[m.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${M?"pacom-badge--warning":"pacom-badge--neutral"}">
              ${M?"人工覆盖":"自动策略"}
            </span>
            <span class="pacom-badge ${m.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${m.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>
            </button>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          ${z.map(y=>`
              <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                <span class="pacom-row-sub">${y.label}</span>
                <strong style="font-size:13px; font-weight:500;">${f(y.value)}</strong>
              </div>`).join("")}
        </div>

        ${k||g?`
            <div class="pacom-control-box">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                ${M&&o?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${f(m.id)}">恢复自动策略</button>`:o?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
              </div>
              ${m.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
              ${k?`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${o?"":"disabled"}>开灯</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${o?"":"disabled"}>关灯</button>
                  </div>
                  <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                    亮度目标：<strong>${h}%</strong>
                    <input type="range" min="0" max="100" step="10" value="${h}" data-ctrl-slider="lighting.dimming" ${o?"":"disabled"} />
                  </label>`:`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${o?"":"disabled"}>开机</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${o?"":"disabled"}>关机</button>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:12px;">设定温度：</span>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${I-.5}" ${o?"":"disabled"}>-0.5°C</button>
                    <strong>${I.toFixed(1)}°C</strong>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${I+.5}" ${o?"":"disabled"}>+0.5°C</button>
                  </div>`}
            </div>`:""}

        ${b?`
            <div class="pacom-control-box">
              <div style="font-size:12px; font-weight:500;">最近批次：<code>${f(b.batchId)}</code></div>
              <div class="pacom-receipt-list">
                ${b.receipts.map(y=>{const O=Pe[y.status]??{text:y.status,badge:"pacom-badge--neutral"};return`
                      <div class="pacom-receipt-item">
                        <div>
                          <div><strong>${f(y.deviceId)}</strong> · ${f(y.command)} → ${f(y.targetValue)}</div>
                          ${y.errorMessage?`<div style="color:var(--pacom-status-critical);">${f(y.errorMessage)}</div>`:""}
                        </div>
                        <span class="pacom-badge ${O.badge}">${O.text}</span>
                      </div>`}).join("")}
              </div>
            </div>`:""}

        <details class="lov-tech-details">
          <summary><span>技术标识与硬件绑定</span><span>▾</span></summary>
          <div class="pacom-kv-grid">
            <span class="pacom-kv-label">设备编号</span><span><code>${f(m.id)}</code> · v${m.version}</span>
            <span class="pacom-kv-label">图上点位</span><span>${m.planPoint?`x=${m.planPoint.x.toFixed(2)}, y=${m.planPoint.y.toFixed(2)} (图 v${m.planPoint.planVersion})`:"未标点"}</span>
            <span class="pacom-kv-label">物理安装</span><span>${m.physicalInstalled?"现场已确认":"待现场复核"}</span>
            <span class="pacom-kv-label">硬件绑定</span><span>${m.hardwareBinding?`${m.hardwareBinding.protocol.toUpperCase()} · ${m.hardwareBinding.networkAddress}`:"未绑定"}</span>
          </div>
        </details>
      </aside>
    `}function re(m){if(m==="all")return{level:"all-projects"};const k=m.split(":");return k[0]==="project"&&k[1]?{level:"project",projectId:k[1]}:k[0]==="building"&&k[1]&&k[2]?{level:"building",projectId:k[1],buildingId:k[2]}:k[0]==="floor"&&k[1]&&k[2]&&k[3]?{level:"floor",projectId:k[1],buildingId:k[2],floorId:k[3]}:{level:"all-projects"}}function G(){const m=n.filter(I=>I.status==="active").length,k=r.filter(I=>I.connectivity==="online").length,g=ae(),h=r.find(I=>I.category==="sensor")?.telemetry.temp?.value??"23.4";t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">空间总览</h1>
            <div class="pacom-header-meta">
              ${p.level==="floor"&&!q?`<span class="pacom-badge pacom-badge--online">在线 ${k}/${r.length} · 均温 ${f(h)}°C</span>`:l?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>'}
              <span class="pacom-badge pacom-badge--neutral">${f(a.roleLabel)}</span>
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <div class="pacom-toolbar-left">
              ${g?`<button type="button" class="lov-icon-btn" data-nav-scope="${f(g)}" title="返回上一空间层级" aria-label="返回上一空间层级">←</button>`:""}
              <div class="pacom-scope-pill" title="项目 / 楼宇 / 楼层空间范围切换">
                <select data-role="scope-select" aria-label="选择查看范围">
                  ${ee()}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>

              ${p.level==="floor"?`
                  <div class="pacom-tabs" role="tablist">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${j==="devices"}" data-tab="devices">设备</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${j==="zones"}" data-tab="zones">区域</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${j==="alarms"}" data-tab="alarms">
                      告警 ${m>0?`<span class="pacom-badge pacom-badge--warning">${m}</span>`:""}
                    </button>
                  </div>`:""}
            </div>

            <div class="pacom-tabs pacom-mobile-view-switch" role="group" aria-label="窄屏视图切换">
              <button type="button" class="pacom-tab" aria-selected="${S==="list"}" data-mobile-pane-btn="list">列表</button>
              <button type="button" class="pacom-tab" aria-selected="${S==="canvas"}" data-mobile-pane-btn="canvas">平面图</button>
            </div>
          </div>
        </header>

        <section class="pacom-split" data-mobile-pane="${S}">
          <aside class="pacom-left-pane" style="--pacom-sidebar-width:${D}px;">
            ${le()}
          </aside>
          <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
          <main class="pacom-right-pane">
            ${ye()}
          </main>
        </section>
      </div>
    `,we()}function we(){t.querySelector('[data-role="scope-select"]')?.addEventListener("change",g=>{Y(re(g.currentTarget.value))}),t.querySelectorAll("[data-nav-scope]").forEach(g=>{g.addEventListener("click",()=>{g.dataset.navScope&&Y(re(g.dataset.navScope))})}),t.querySelectorAll("[data-tab]").forEach(g=>{g.addEventListener("click",()=>{j=g.dataset.tab,G()})}),t.querySelectorAll("[data-mobile-pane-btn]").forEach(g=>{g.addEventListener("click",()=>{S=g.dataset.mobilePaneBtn,G()})}),t.querySelector('[data-role="search"]')?.addEventListener("input",g=>{x=g.currentTarget.value,_()}),t.querySelector('[data-role="category"]')?.addEventListener("change",g=>{F=g.currentTarget.value,G()}),t.querySelectorAll("[data-filter-zone]").forEach(g=>{g.addEventListener("click",h=>{h.stopPropagation(),L=g.dataset.filterZone??"all",G()})}),t.querySelectorAll("[data-select-device]").forEach(g=>{g.addEventListener("click",h=>{h.target.tagName!=="INPUT"&&(E=g.dataset.selectDevice??null,u=!0,S="canvas",G())})}),t.querySelectorAll("[data-check-device]").forEach(g=>{g.addEventListener("change",()=>{const h=g.dataset.checkDevice;h&&(g.checked?R.add(h):R.delete(h),G())})}),t.querySelectorAll("[data-pin-device]").forEach(g=>{g.addEventListener("click",h=>{h.stopPropagation(),E=g.dataset.pinDevice??null,u=!0,G()})}),t.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{u=!1,G()}),t.querySelector("[data-release-override]")?.addEventListener("click",g=>{const h=g.currentTarget.dataset.releaseOverride;h&&(P.delete(h),G())}),t.querySelectorAll("[data-zone-power]").forEach(g=>{g.addEventListener("click",h=>{h.stopPropagation();const I=g.dataset.zonePower,M=g.dataset.zoneVal==="true";if(!I)return;const z=r.filter(O=>O.logicalZoneId===I&&O.category==="lighting").map(O=>O.id),y=r.filter(O=>O.logicalZoneId===I&&O.category==="hvac").map(O=>O.id);z.length?d(z,"lighting.power",M):y.length&&d(y,"hvac.power",M)})}),t.querySelectorAll("[data-locate-device]").forEach(g=>{g.addEventListener("click",()=>{const h=g.dataset.locateDevice;h&&(E=h,u=!0,S="canvas",G())})}),t.querySelector("[data-go-alarms]")?.addEventListener("click",()=>{window.location.hash="#alarms"}),t.querySelectorAll("[data-ctrl-cmd]").forEach(g=>{g.addEventListener("click",()=>{if(!E||!g.dataset.ctrlCmd)return;const h=g.dataset.ctrlVal??"",I=h==="true"?!0:h==="false"?!1:Number(h);d([E],g.dataset.ctrlCmd,I)})}),t.querySelector("[data-ctrl-slider]")?.addEventListener("change",g=>{const h=g.currentTarget;!E||!h.dataset.ctrlSlider||d([E],h.dataset.ctrlSlider,Number(h.value))}),t.querySelectorAll("[data-batch-cmd]").forEach(g=>{g.addEventListener("click",()=>{const h=Array.from(R),I=g.dataset.batchVal??"",M=I==="true"?!0:I==="false"?!1:I;d(h,g.dataset.batchCmd,M)})}),t.querySelectorAll("[data-ack-alarm]").forEach(g=>{g.addEventListener("click",async()=>{!g.dataset.ackAlarm||p.level!=="floor"||!$||(await e.acknowledgeAlarm(g.dataset.ackAlarm,"首页快速确认"),n=await e.listAlarms(p.floorId),G())})}),t.querySelectorAll("[data-canvas-layer]").forEach(g=>{g.addEventListener("click",()=>{const h=g.dataset.canvasLayer;h&&(c=h,G())})}),t.querySelectorAll("[data-zoom]").forEach(g=>{g.addEventListener("click",()=>{const h=g.dataset.zoom;h==="in"?A=Math.min(2.6,Number((A+.2).toFixed(2))):h==="out"?A=Math.max(.6,Number((A-.2).toFixed(2))):(A=1,C=0,V=0),K()})});const m=t.querySelector('[data-role="canvas-stage"]');if(m&&!q){let g=!1,h=0,I=0,M=0,z=0;m.addEventListener("pointerdown",O=>{O.target?.closest("button, input, select, .pacom-drawer")||(g=!0,h=O.clientX,I=O.clientY,M=C,z=V,m.classList.add("is-panning"),m.setPointerCapture?.(O.pointerId))}),m.addEventListener("pointermove",O=>{g&&(C=M+(O.clientX-h),V=z+(O.clientY-I),K())});const y=()=>{g&&(g=!1,m.classList.remove("is-panning"))};m.addEventListener("pointerup",y),m.addEventListener("pointercancel",y),m.addEventListener("wheel",O=>{O.preventDefault();const B=O.deltaY<0?.12:-.12;A=Math.max(.6,Math.min(2.6,Number((A+B).toFixed(2)))),K()},{passive:!1}),m.addEventListener("dblclick",O=>{O.target?.closest("button")||(A=1,C=0,V=0,K())})}const k=t.querySelector('[data-role="splitter"]');k?.addEventListener("pointerdown",g=>{const h=g.clientX,I=D;k.classList.add("is-dragging");const M=y=>{D=Math.max(320,Math.min(640,I+(y.clientX-h)));const O=t.querySelector(".pacom-left-pane");O&&O.style.setProperty("--pacom-sidebar-width",`${D}px`)},z=()=>{k.classList.remove("is-dragging"),localStorage.setItem(ie,String(Math.round(D))),window.removeEventListener("pointermove",M),window.removeEventListener("pointerup",z)};window.addEventListener("pointermove",M),window.addEventListener("pointerup",z)}),k?.addEventListener("keydown",g=>{if(g.key==="ArrowLeft")g.preventDefault(),D=Math.max(320,D-16);else if(g.key==="ArrowRight")g.preventDefault(),D=Math.min(640,D+16);else if(g.key==="Home")g.preventDefault(),D=320;else if(g.key==="End")g.preventDefault(),D=640;else return;localStorage.setItem(ie,String(Math.round(D)));const h=t.querySelector(".pacom-left-pane");h&&h.style.setProperty("--pacom-sidebar-width",`${D}px`)})}await Y(p)}const Ve=new Set(["lighting","hvac","alarm_rules"]),ue=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%"}];async function Ne(t,e,a){let[s,l]=await Promise.all([e.listScenes(i.floorId),e.getRuntimeSettings(i.projectId)]),o="manual",$="balanced",w=null,p="",j=!1,S="",x="";const F=e.subscribeFloorEvents(i.floorId,async E=>{E.type==="control.receipt.updated"&&w?.batchId===E.batchId&&(w=await e.getControlBatch(E.batchId),L())});function L(){const E=p.trim().toLowerCase(),u=E?s.filter(r=>`${r.name} ${r.description}`.toLowerCase().includes(E)):s,c=l.rules.filter(r=>Ve.has(r.category)),P=a.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">智能策略</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${a.scope.canControlDevices?"pacom-badge--online":"pacom-badge--warning"}">
                ${a.scope.canControlDevices?"可触发并核验逐设备回执":"只读权限"}
              </span>
              ${o==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${j?"收起新建表单":"+ 新建场景"}</button>`:""}
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${o==="manual"}" data-scene-tab="manual">一键场景（${s.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${o==="schedules"}" data-scene-tab="schedules">定时排程</button>
              <button class="pacom-tab" role="tab" aria-selected="${o==="oss"}" data-scene-tab="oss">节能模式</button>
              <button class="pacom-tab" role="tab" aria-selected="${o==="rules"}" data-scene-tab="rules">联动规则（${c.length}）</button>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:4px 0 24px;">
          ${S?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${S}</span></div>`:""}
          ${x?`<div class="pacom-alert-banner">${x}</div>`:""}

          ${o==="manual"?`
              ${j?`
                  <section class="lov-section">
                    <h2 class="lov-section-title">新建自定义场景</h2>
                    <form class="lov-settings-card" data-role="new-scene-form">
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">场景名称</span>
                          <span class="lov-setting-desc">简明描述触发意图，例如「实验区午休调光」</span>
                        </div>
                        <div class="lov-setting-control" style="width:min(320px,100%);">
                          <input class="pacom-input" name="name" placeholder="输入场景名称" required />
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">联动动作说明</span>
                          <span class="lov-setting-desc">保存后默认绑定 E7F 照明示例动作，可在下发后查看逐设备回执</span>
                        </div>
                        <div class="lov-setting-control" style="width:min(320px,100%);">
                          <input class="pacom-input" name="description" placeholder="输入动作与预期效果" required />
                        </div>
                      </div>
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="lov-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" style="max-width:300px;" data-scene-search placeholder="搜索场景名称或说明…" value="${p}" />
                <span class="pacom-row-sub">共 ${u.length} 个场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(310px,1fr)); gap:14px;">
                ${u.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建自定义场景。</span></div></div>':u.map(r=>`
                          <section class="pacom-card" style="gap:10px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong style="font-size:15px; font-weight:500;">${r.name}</strong>
                              <span class="pacom-badge pacom-badge--neutral">${r.actions.length} 个动作</span>
                            </div>
                            <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${r.description}</p>
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                              <div class="pacom-row-sub">
                                ${r.scheduleSummary??"手动触发"} · ${r.lastExecutedAt?r.lastExecutedAt.slice(5,16).replace("T"," "):"未执行"}
                              </div>
                              <button class="pacom-btn pacom-btn--primary" data-exec-scene="${r.id}" ${a.scope.canControlDevices?"":"disabled"}>执行</button>
                            </div>
                          </section>`).join("")}
              </div>

              ${w?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">逐设备执行回执</h2>
                      <span class="pacom-row-sub">批次 <code>${w.batchId}</code></span>
                    </div>
                    <div class="lov-table-card">
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>设备编号</th>
                              <th>下发指令</th>
                              <th>目标值</th>
                              <th>回读状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${w.receipts.map(r=>`
                                <tr>
                                  <td><code style="font-size:12px;">${r.deviceId}</code></td>
                                  <td>${r.command}</td>
                                  <td>${String(r.targetValue)}${r.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${r.errorMessage}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${r.status==="verified_success"?"pacom-badge--online":r.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${r.status}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}`:o==="schedules"?`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">E7F 周排程与运行日历联动</h2>
                    <button class="pacom-btn" data-go-settings="1">调整项目工作日历 →</button>
                  </div>
                  <div class="lov-table-card">
                    <div class="lov-table-wrap">
                      <table class="lov-table">
                        <thead>
                          <tr>
                            <th>排程任务</th>
                            <th>适用时段</th>
                            <th>联动范围</th>
                            <th>状态</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>工作日早间预冷与公区开灯</strong></td>
                            <td>周一至周五 · ${l.calendar.workdayStart}（跟随工作日历）</td>
                            <td>E7F 全部空调与公区照明</td>
                            <td><span class="pacom-badge pacom-badge--online">生效中</span></td>
                          </tr>
                          <tr>
                            <td><strong>午间办公区智能调光（50%）</strong></td>
                            <td>周一至周五 · 12:15 – 13:45</td>
                            <td>E7F 开放办公区</td>
                            <td><span class="pacom-badge pacom-badge--online">生效中</span></td>
                          </tr>
                          <tr>
                            <td><strong>夜间值守巡检与非必要回路关闭</strong></td>
                            <td>每日 · ${l.calendar.nightGuardStart} – ${l.calendar.nightGuardEnd}</td>
                            <td>E7F 非实验室区域</td>
                            <td><span class="pacom-badge pacom-badge--online">生效中</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>`:o==="oss"?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">E7F 优化启停与主动节能模式（OSS）</h2>
                      <span class="pacom-badge pacom-badge--accent">人工覆盖始终优先 · 异常自动回退</span>
                    </div>
                    <div class="lov-mode-grid">
                      ${ue.map(r=>`
                        <button type="button" class="lov-mode-card" aria-pressed="${$===r.id}" data-oss-mode="${r.id}" ${a.scope.canControlDevices?"":"disabled"}>
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong style="font-size:15px; font-weight:500;">${r.title}</strong>
                            <span class="pacom-badge ${$===r.id?"pacom-badge--online":"pacom-badge--neutral"}">${$===r.id?"当前模式":r.badge}</span>
                          </div>
                          <span class="lov-setting-desc">${r.desc}</span>
                          <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${r.estSaving}</span>
                        </button>`).join("")}
                    </div>
                    <div class="lov-banner">
                      <div class="lov-banner-text">
                        <span class="lov-banner-title">安全底线保障（Active Control）</span>
                        <span class="lov-banner-sub">在空间总览或现场面板手工调节设备后，系统将自动进入「人工覆盖」状态，策略不会强行回写；若网关通信异常则自动回退至本地默认工况。</span>
                      </div>
                    </div>
                  </section>`:`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">照明、暖通与告警自动联动规则</h2>
                      <span class="pacom-row-sub">共 ${c.length} 条自动化规则</span>
                    </div>
                    <div class="lov-settings-card">
                      ${c.length===0?'<div class="lov-empty-state"><strong>暂无联动规则</strong><span>当前楼层尚未配置照明、暖通或告警自动策略。</span></div>':c.map(r=>`
                                <div class="lov-setting-row">
                                  <div class="lov-setting-meta">
                                    <span class="lov-setting-title">
                                      <span>${r.name}</span>
                                      <span class="pacom-badge pacom-badge--neutral">v${r.version}</span>
                                      <span class="pacom-badge pacom-badge--accent">${r.scopeLabel}</span>
                                    </span>
                                    <span class="lov-setting-desc">${r.summary} · 回执：${r.receiptSummary??"已同步"}</span>
                                  </div>
                                  <div class="lov-setting-control">
                                    <span class="pacom-row-sub">${r.enabled?"已启用":"已停用"}</span>
                                    <button
                                      type="button"
                                      class="lov-switch"
                                      role="switch"
                                      aria-checked="${r.enabled?"true":"false"}"
                                      aria-label="切换 ${r.name}"
                                      data-toggle-strategy-rule="${r.id}"
                                      data-rule-ver="${r.version}"
                                      data-rule-next="${!r.enabled}"
                                      ${P?"":"disabled"}
                                    >
                                      <span class="lov-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`).join("")}
                    </div>
                  </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-scene-tab]").forEach(r=>{r.addEventListener("click",()=>{o=r.dataset.sceneTab??"manual",S="",L()})}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.ossMode;if(!n)return;$=n;const T=ue.find(b=>b.id===n);S=`已切换至「${T?.title??n}」运行策略（${T?.estSaving??""}）。`,L()})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(r=>{r.addEventListener("click",async()=>{x="";try{await e.toggleRuntimeRule(r.dataset.toggleStrategyRule,r.dataset.ruleNext==="true",Number(r.dataset.ruleVer)),l=await e.getRuntimeSettings(i.projectId),S="联动规则状态与版本回执已更新。",L()}catch(n){x=n instanceof Error?n.message:String(n),L()}})}),t.querySelectorAll("[data-toggle-create]").forEach(r=>{r.addEventListener("click",()=>{j=!j,L()})}),t.querySelector("[data-scene-search]")?.addEventListener("input",r=>{const n=r.currentTarget,T=n.selectionStart??n.value.length;p=n.value,L();const b=t.querySelector("[data-scene-search]");b&&(b.focus(),b.setSelectionRange(T,T))}),t.querySelectorAll("[data-exec-scene]").forEach(r=>{r.addEventListener("click",async()=>{x="";try{w=await e.executeScene(r.dataset.execScene),s=await e.listScenes(i.floorId),L()}catch(n){x=n instanceof Error?n.message:String(n),L()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async r=>{r.preventDefault();const n=new FormData(r.currentTarget);try{await e.createScene({projectId:i.projectId,floorId:i.floorId,name:String(n.get("name")??""),description:String(n.get("description")??""),actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:50}]}),s=await e.listScenes(i.floorId),j=!1,S="自定义场景已保存。",L()}catch(T){x=T instanceof Error?T.message:String(T),L()}})}L(),window.addEventListener("hashchange",()=>F(),{once:!0})}const fe=[{group:"项目基准",items:[{id:"calendar",label:"运行日历"},{id:"weather_area",label:"气象与面积"},{id:"metering_carbon",label:"计量与碳排"}]},{group:"通知与模板",items:[{id:"notifications",label:"告警通知订阅"},{id:"templates",label:"参数模板"}]}],We=fe.flatMap(t=>t.items);async function Ze(t,e,a){let s="calendar",l=await e.getRuntimeSettings(i.projectId),o=l.calendar.workdayStart,$=l.calendar.workdayEnd,w=[];const p={criticalSms:!0,inAppBanner:!0,dailyDigest:!1};let j="",S="";function x(){const F=l.rules.filter(u=>u.category===s),L=We.find(u=>u.id===s)?.label??"运行设置",E=a.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">运行设置</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">项目范围：广实2号园</span>
              <span class="pacom-badge ${E?"pacom-badge--online":"pacom-badge--warning"}">
                ${E?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
        </header>

        ${j?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${j}</span></div>`:""}
        ${S?`<div class="pacom-alert-banner">${S}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" aria-label="运行设置分组">
            ${fe.map(u=>`
              <div class="lov-subnav-group">
                <div class="lov-subnav-group-title">${u.group}</div>
                ${u.items.map(c=>{const P=c.id==="calendar"?"":String(l.rules.filter(R=>R.category===c.id).length);return`
                      <button class="lov-subnav-item" aria-current="${s===c.id?"true":"false"}" data-scat="${c.id}">
                        <span>${c.label}</span>
                        ${P?`<span class="pacom-badge pacom-badge--neutral">${P}</span>`:""}
                      </button>`}).join("")}
              </div>`).join("")}
          </nav>

          <div class="lov-subnav-main">
            ${s==="calendar"?`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">项目工作时间日历</h2>
                    <span class="pacom-badge pacom-badge--neutral">版本 v${l.calendar.version}</span>
                  </div>
                  <div class="lov-settings-card">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日上班时间</span>
                        <span class="lov-setting-desc">用于自动触发早间预冷/预热及公共区域照明启动</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-start value="${o}" ${E?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日下班时间</span>
                        <span class="lov-setting-desc">夜间巡检窗口为 ${l.calendar.nightGuardStart} – ${l.calendar.nightGuardEnd}；若晚于 21:30 将自动提示交叠冲突</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-end value="${$}" ${E?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row" style="justify-content:flex-end;">
                      <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                      <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${E?"":"disabled"}>保存并校验版本</button>
                    </div>
                  </div>
                </section>

                ${w.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${w.length} 条</span>
                      </div>
                      <div class="lov-table-card">
                        <div class="lov-table-wrap">
                          <table class="lov-table">
                            <thead>
                              <tr>
                                <th>规则名称</th>
                                <th>原时间窗口</th>
                                <th>变更后窗口</th>
                                <th>影响评估</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${w.map(u=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${u.ruleName}</div>
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
                    </section>`:""}`:s==="notifications"?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">告警与运行简报通知订阅</h2>
                      <span class="pacom-row-sub">按通道订阅本楼层关键动态</span>
                    </div>
                    <div class="lov-settings-card">
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">严重告警短信与移动推送</span>
                          <span class="lov-setting-desc">触发严重级别告警或边缘网关断流超过 5 分钟时立即推送值班人</span>
                        </div>
                        <div class="lov-setting-control">
                          <button type="button" class="lov-switch" role="switch" aria-checked="${p.criticalSms}" data-notify-key="criticalSms" aria-label="严重告警短信推送">
                            <span class="lov-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">站内顶部实时横幅提醒</span>
                          <span class="lov-setting-desc">新告警与工单状态变更实时在工作区提示</span>
                        </div>
                        <div class="lov-setting-control">
                          <button type="button" class="lov-switch" role="switch" aria-checked="${p.inAppBanner}" data-notify-key="inAppBanner" aria-label="站内实时横幅提醒">
                            <span class="lov-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">每日运行与能耗晨间简报</span>
                          <span class="lov-setting-desc">每日 08:30 自动汇总昨日能耗偏差、未结工单与舒适度达标率</span>
                        </div>
                        <div class="lov-setting-control">
                          <button type="button" class="lov-switch" role="switch" aria-checked="${p.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
                            <span class="lov-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>`:`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">${L}</h2>
                    <span class="pacom-row-sub">共 ${F.length} 条策略</span>
                  </div>
                  <div class="lov-settings-card">
                    ${F.length===0?'<div class="lov-empty-state"><strong>暂无配置项</strong><span>该分类下尚未定义运行策略规则。</span></div>':F.map(u=>`
                              <div class="lov-setting-row">
                                <div class="lov-setting-meta">
                                  <span class="lov-setting-title">
                                    <span>${u.name}</span>
                                    <span class="pacom-badge pacom-badge--neutral">v${u.version}</span>
                                    <span class="pacom-badge pacom-badge--accent">${u.scopeLabel}</span>
                                  </span>
                                  <span class="lov-setting-desc">${u.summary} · 回执：${u.receiptSummary??"已同步"}</span>
                                </div>
                                <div class="lov-setting-control">
                                  <span class="pacom-row-sub">${u.enabled?"已启用":"已停用"}</span>
                                  <button
                                    type="button"
                                    class="lov-switch"
                                    role="switch"
                                    aria-checked="${u.enabled?"true":"false"}"
                                    aria-label="切换 ${u.name}"
                                    data-toggle-rule="${u.id}"
                                    data-rule-ver="${u.version}"
                                    data-rule-next="${!u.enabled}"
                                    ${E?"":"disabled"}
                                  >
                                    <span class="lov-switch-thumb"></span>
                                  </button>
                                </div>
                              </div>`).join("")}
                  </div>
                </section>`}
          </div>
        </div>
      </div>
    `,t.querySelectorAll("[data-scat]").forEach(u=>{u.addEventListener("click",()=>{s=u.dataset.scat,j="",S="",x()})}),t.querySelectorAll("[data-notify-key]").forEach(u=>{u.addEventListener("click",()=>{const c=u.dataset.notifyKey;c&&(p[c]=!p[c],j="通知订阅偏好已更新。",x())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",u=>{o=u.currentTarget.value}),t.querySelector("[data-cal-end]")?.addEventListener("change",u=>{$=u.currentTarget.value}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{S="",w=await e.previewCalendarImpact(i.projectId,o,$),x()}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{S="";try{const u=await e.saveWorkCalendar(i.projectId,o,$,l.calendar.version);l={...l,calendar:u},j=`运行日历已保存至 v${u.version}（${u.workdayStart} - ${u.workdayEnd}）`,w=[],x()}catch(u){S=u instanceof Error?u.message:String(u),x()}}),t.querySelectorAll("[data-toggle-rule]").forEach(u=>{u.addEventListener("click",async()=>{S="";try{await e.toggleRuntimeRule(u.dataset.toggleRule,u.dataset.ruleNext==="true",Number(u.dataset.ruleVer)),l=await e.getRuntimeSettings(i.projectId),j="策略状态与版本回执已更新",x()}catch(c){S=c instanceof Error?c.message:String(c),x()}})})}x()}const ve="pacom.web.sidebar.collapsed",Ue=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,me=[{id:"home",label:"空间总览",iconSvg:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'},{id:"analysis",label:"数据分析",iconSvg:'<path d="M4 19h16"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>'},{id:"alarms",label:"告警中心",iconSvg:'<path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>'},{id:"scenes",label:"智能策略",iconSvg:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3"/>'},{id:"settings",label:"运行设置",iconSvg:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>'},{id:"deployment",label:"系统部署",iconSvg:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="8.5" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>'}],ce={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"};function ge(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in ce?t:"home"}function Q(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function He(t,e,a,s){t.classList.remove("bare-login");let l=a,o=ge(),$=localStorage.getItem(ve)==="1",w=!1,p=!1,j="";const S=e.mode==="demo"&&typeof e.switchDemoRole=="function";function x(){const A=j.trim(),C=A?me.filter(V=>V.label.includes(A)):me;return C.length?C.map(V=>`
        ${!A&&V.id==="settings"?'<div class="pacom-nav-divider" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${V.id}" aria-current="${o===V.id?"page":"false"}" title="${V.label}">
          <svg class="pacom-nav-icon" viewBox="0 0 24 24" aria-hidden="true">${V.iconSvg}</svg>
          <span class="pacom-nav-label">${V.label}</span>
        </button>`).join(""):'<div class="pacom-nav-empty">没有匹配的工作区</div>'}function F(){if(!p)return"";const A=l.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${$?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${Q(l.roleLabel)}${S?" · 演示":""}</small>
          </span>
          <svg class="pacom-pop-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
        </button>

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>
          </span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${Q(A)}</span>
          <span class="pacom-pop-text">
            <b>${Q(l.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${S?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(H).map(C=>{const V=H[C],D=C===l.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${D}" data-pop-role="${C}">
                      <span class="pacom-pop-text">
                        <b>${Q(V.roleLabel)}</b>
                        <small>${Q(V.displayName)}</small>
                      </span>
                      ${D?'<svg class="pacom-pop-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>':""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>
          </span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function L(A){switch(document.title=`${ce[o]} · PACOM Station`,o){case"home":await _e(A,e,l);return;case"analysis":await Me(A,e);return;case"alarms":await Oe(A,e,l);return;case"scenes":await Ne(A,e,l);return;case"settings":await Ze(A,e,l);return;case"deployment":await qe(A,e,l);return;case"account":await Ee(A,e,l,C=>{l=C,r(!0)},E);return}}async function E(){p=!1,w=!1,q();try{await e.logout()}finally{window.location.hash="#login",s()}}function u(){const A=t.querySelector('[data-role="nav-list"]');A&&(A.innerHTML=x(),P())}function c(){t.querySelector('[data-role="org-popover"]')?.remove();const A=t.querySelector('[data-role="org-menu-btn"]');if(A&&A.setAttribute("aria-expanded",String(p)),!p)return;const C=document.createElement("div");C.innerHTML=F().trim();const V=C.firstElementChild;V&&(t.appendChild(V),R())}function P(){t.querySelectorAll("[data-route]").forEach(A=>{A.addEventListener("click",()=>{const C=A.dataset.route;C===o&&!w||(o=C,w=!1,p=!1,window.location.hash=`#${o}`,r(!0))})})}function R(){t.querySelectorAll('[data-pop-act="go-account"]').forEach(A=>{A.addEventListener("click",()=>{p=!1,w=!1,o="account",window.location.hash="#account",r(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{E()}),t.querySelectorAll("[data-pop-role]").forEach(A=>{A.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const C=A.dataset.popRole;p=!1,w=!1,l=await e.switchDemoRole(C),await r(!0)})})}async function r(A){const C=t.querySelector('[data-role="main-stage"]');if(!A&&C){const D=t.querySelector(".pacom-nav-rail");D&&(D.classList.toggle("is-collapsed",$),D.classList.toggle("is-mobile-open",w));const N=t.querySelector('[data-role="mobile-scrim"]');N&&N.classList.toggle("is-open",w),c();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <h1 class="pacom-mobile-title">${ce[o]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Q(l.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${w?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${$?"is-collapsed":""} ${w?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Ue}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${$?"展开侧栏":"收起侧栏"}" aria-label="${$?"展开侧栏":"收起侧栏"}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                ${$?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}
              </svg>
            </button>
          </div>

          <div class="pacom-nav-search-wrap">
            <svg class="pacom-nav-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
            </svg>
            <input class="pacom-nav-search" data-role="nav-search" type="search" placeholder="搜索工作区…" value="${Q(j)}" aria-label="搜索工作区" />
          </div>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${x()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${o==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${p}" title="广州国家实验室 · ${Q(l.displayName)}">
              <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
              <span class="pacom-org-name">广州国家实验室</span>
              <svg class="pacom-org-arrows" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>
              </svg>
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{$=!$,p=!1,localStorage.setItem(ve,$?"1":"0");const D=t.querySelector(".pacom-nav-rail"),N=t.querySelector('[data-role="toggle-sidebar"]');D&&D.classList.toggle("is-collapsed",$),N&&(N.title=$?"展开侧栏":"收起侧栏",N.setAttribute("aria-label",N.title),N.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${$?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}</svg>`),c()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{w=!w,r(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{w=!1,p=!1,r(!1)}),t.querySelector('[data-role="nav-search"]')?.addEventListener("input",D=>{j=D.currentTarget.value,u()}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",D=>{D.stopPropagation(),p=!p,c()}),P(),c();const V=t.querySelector('[data-role="main-stage"]');V&&await L(V)}const n=A=>{if(!p)return;const C=A.target;C?.closest('[data-role="org-popover"]')||C?.closest('[data-role="org-menu-btn"]')||(p=!1,c())},T=A=>{A.key==="Escape"&&(p?(p=!1,c()):w&&(w=!1,r(!1)))},b=()=>{const A=ge();A!==o&&(o=A,p=!1,w=!1,r(!0))};function q(){document.removeEventListener("click",n),document.removeEventListener("keydown",T),window.removeEventListener("hashchange",b)}document.addEventListener("click",n),document.addEventListener("keydown",T),window.addEventListener("hashchange",b),await r(!0)}const Ge=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Ye='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Ke='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',te='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>',be={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},Xe={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Qe(t){const e=t.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:t}function U(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function he(t,e,a){t.classList.add("bare-login"),document.title="登录 · PACOM Station";let s=!1,l=!1,o="",$="",w="",p="",j=!1,S={},x="",F=!1,L="",E=0,u=null,c=null,P="privacy",R="",r="",n="";const T=e.mode==="demo"&&typeof e.switchDemoRole=="function";function b(){u!==null&&(window.clearInterval(u),u=null),t.classList.remove("bare-login")}function q(){E=60,u!==null&&window.clearInterval(u),u=window.setInterval(()=>{E-=1,E<=0&&(E=0,u!==null&&(window.clearInterval(u),u=null));const D=t.querySelector('[data-act="send-sms"]');D&&(D.disabled=E>0,D.textContent=E>0?`${E} 秒后重发`:L?"重新获取":"获取验证码")},1e3)}function A(){if(!c)return"";if(c==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${te}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${U(r)}" />
                  </div>
                </div>
                ${n?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${U(n)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(c==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${te}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${T?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${T?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(c==="legal"){const D=be[P],N=["privacy","terms","service"].map(Z=>`<button type="button" role="tab" aria-selected="${P===Z}" class="au-legal-tab ${P===Z?"is-active":""}" data-act="switch-legal" data-tab="${Z}">${be[Z].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${te}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${N}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${D.items.map(Z=>`<li>${U(Z)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return c==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${te}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${R||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:c==="demoRoles"&&T?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${te}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(H).map(D=>{const N=H[D];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${D}">
                        <div>
                          <b>${U(N.roleLabel)} · ${U(N.displayName)}</b>
                          <small>${U(Xe[D])}</small>
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
      `:""}function C(){const D=s?`
        <div class="au-field ${S.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${U(w)}" aria-invalid="${S.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${E>0?"disabled":""}>
              ${E>0?`${E} 秒后重发`:L?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${U(S.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${L?`验证码已发送至 ${U(Qe(L))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${S.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${U(o)}" aria-invalid="${S.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${U(S.id??"")}</p>
        </div>
      `,N=s?`
        <div class="au-field ${S.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${U(p)}" aria-invalid="${S.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${U(S.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${S.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${l?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${U($)}" aria-invalid="${S.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${l?"隐藏密码":"显示密码"}">
              ${l?Ke:Ye}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${U(S.pwd??"")}</p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Ge}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${F?"disabled":""}>
                  ${D}
                  ${N}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${x?"":"hidden"}>${U(x)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${j?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${F?"disabled":""}>
                    ${F?"正在登录…":"登录"}
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
                ${T?`<div class="au-demo-bar">
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
      ${A()}
    `,V()}function V(){const D=t.querySelector("#au-id"),N=t.querySelector("#au-pwd"),Z=t.querySelector("#au-sphone"),Y=t.querySelector("#au-scode"),J=t.querySelector('input[name="keep"]');D?.addEventListener("input",()=>{if(o=D.value,S.id||x){delete S.id,x="",D.closest(".au-field")?.classList.remove("bad");const v=t.querySelector("#au-id-err");v&&(v.textContent="");const d=t.querySelector("#au-login-ferr");d&&(d.hidden=!0)}}),N?.addEventListener("input",()=>{if($=N.value,S.pwd||x){delete S.pwd,x="",N.closest(".au-field")?.classList.remove("bad");const v=t.querySelector("#au-pwd-err");v&&(v.textContent="");const d=t.querySelector("#au-login-ferr");d&&(d.hidden=!0)}}),Z?.addEventListener("input",()=>{if(w=Z.value,S.sphone||x){delete S.sphone,x="",Z.closest(".au-field")?.classList.remove("bad");const v=t.querySelector("#au-sphone-err");v&&(v.textContent="");const d=t.querySelector("#au-login-ferr");d&&(d.hidden=!0)}}),Y?.addEventListener("input",()=>{if(p=Y.value.replace(/\D/g,"").slice(0,6),Y.value=p,S.scode||x){delete S.scode,x="",Y.closest(".au-field")?.classList.remove("bad");const v=t.querySelector("#au-scode-err");v&&(v.textContent="");const d=t.querySelector("#au-login-ferr");d&&(d.hidden=!0)}}),J?.addEventListener("change",()=>{j=J.checked}),t.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{l=!l,C(),t.querySelector("#au-pwd")?.focus()}),t.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{s=!s,S={},x="",C(),t.querySelector(s?"#au-sphone":"#au-id")?.focus()}),t.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const v=w.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(v)){S={sphone:"请输入有效的手机号码"},C(),t.querySelector("#au-sphone")?.focus();return}S={},L=v,q(),C(),t.querySelector("#au-scode")?.focus()}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async v=>{if(v.preventDefault(),!F){if(S={},x="",s?(w.trim()||(S.sphone="请输入手机号码"),/^\d{6}$/.test(p.trim())||(S.scode="请输入 6 位验证码")):(o.trim()||(S.id="请输入电子邮箱或手机号码"),$||(S.pwd="请输入密码")),Object.keys(S).length>0){C();const d=Object.keys(S)[0];t.querySelector(`#au-${d}`)?.focus();return}F=!0,C();try{const d=await e.login({account:(s?w:o).trim(),password:s?p.trim():$});b(),a(d)}catch(d){F=!1,x=d instanceof Error?d.message:"账户或密码不正确",C()}}}),t.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{r=o.trim(),n="",c="reset",C(),t.querySelector("#au-rs-id")?.focus()}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{c="register",C()}),t.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{c="legal",C()}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{R="",c="contact",C()}),t.querySelectorAll('[data-act="open-demo-roles"]').forEach(v=>{v.addEventListener("click",()=>{c="demoRoles",C()})}),t.querySelectorAll('[data-act="close-modal"]').forEach(v=>{v.addEventListener("click",()=>{c=null,C()})}),t.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",v=>{v.target===v.currentTarget&&(c=null,C())}),t.querySelectorAll('[data-act="switch-legal"]').forEach(v=>{v.addEventListener("click",()=>{const d=v.dataset.tab;d&&(P=d,C())})}),t.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),R="已复制"}catch{R="support@pacom.cn"}C()}),t.querySelector("#au-reset-form")?.addEventListener("submit",v=>{v.preventDefault(),r=t.querySelector("#au-rs-id")?.value.trim()??"",r?T?n="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":n="如账户存在，验证码已发送。":n="请输入电子邮箱或手机号码",C()}),t.querySelectorAll('[data-act="pick-demo-role"]').forEach(v=>{v.addEventListener("click",async()=>{const d=v.dataset.roleId;if(!d||!e.switchDemoRole)return;const _=await e.switchDemoRole(d);b(),a(_)})})}C()}async function Je(){const t=document.getElementById("app");if(t)try{const e=ke(),a=await e.getSession(),s=async l=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await He(t,e,l,()=>{he(t,e,o=>{s(o)})})};if(!a||window.location.hash==="#login"){he(t,e,l=>{s(l)});return}await s(a)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}Je();
//# sourceMappingURL=index-CaQ0ntkR.js.map
